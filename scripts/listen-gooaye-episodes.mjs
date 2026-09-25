#!/usr/bin/env node
/**
 * Listen pipeline for Gooaye（股癌）:
 *  1) Pull SoundOn RSS enclosure audio URLs
 *  2) Download MP3 for target episodes (default: latest N without notesQuality=listened)
 *  3) Transcribe with faster-whisper (zh) via companion Python helper
 *  4) Merge stockAnalysis from scripts/gooaye-stock-analysis.json into
 *     public/data/gooaye-episodes.json (and docs/data when present)
 *
 * Integrity:
 *  - Never invent tickers, prices, or quotes.
 *  - stockAnalysis must be written AFTER reading the transcript (manual / curated pack).
 *  - RSS keyPoints are preserved as rssTeaser when upgrading to listened.
 *
 * Usage:
 *   node scripts/listen-gooaye-episodes.mjs --limit 16
 *   node scripts/listen-gooaye-episodes.mjs --eps 699,698,697 --skip-download --skip-transcribe --merge-only
 *   node scripts/listen-gooaye-episodes.mjs --transcribe-only --limit 16
 *
 * Requires: ffmpeg, and a venv with faster-whisper (default /workspace/venv-whisper).
 * Audio/transcripts land under scripts/cache/ (gitignored) unless --keep-public-transcripts.
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_PUBLIC = path.join(ROOT, "public/data/gooaye-episodes.json");
const OUT_DOCS = path.join(ROOT, "docs/data/gooaye-episodes.json");
const CACHE = path.join(ROOT, "scripts/cache");
const AUDIO_DIR = path.join(CACHE, "gooaye-audio");
const WAV_DIR = path.join(CACHE, "gooaye-wav");
const TX_DIR = path.join(CACHE, "gooaye-transcripts");
const ANALYSIS_PACK_COMMITTED = path.join(ROOT, "scripts/gooaye-stock-analysis.json");
const ANALYSIS_PACK_CACHE = path.join(CACHE, "gooaye-stock-analysis.json");
const ANALYSIS_PACK = fs.existsSync(ANALYSIS_PACK_COMMITTED)
  ? ANALYSIS_PACK_COMMITTED
  : ANALYSIS_PACK_CACHE;
const FEED_URL =
  "https://feeds.soundon.fm/podcasts/954689a5-3096-43a4-a80b-7810b219cef3.xml";
const UA =
  "Mozilla/5.0 (compatible; JustMathAndLuck/1.0; +https://github.com/WenZurich/Just-Math-and-Luck)";
const DEFAULT_VENV = process.env.WHISPER_VENV || "/workspace/venv-whisper";
const FFMPEG = process.env.FFMPEG || "/usr/bin/ffmpeg";

function parseArgs(argv) {
  const out = {
    limit: 16,
    eps: null,
    skipDownload: false,
    skipTranscribe: false,
    mergeOnly: false,
    transcribeOnly: false,
    model: process.env.WHISPER_MODEL || "small",
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--limit") out.limit = Number(argv[++i]);
    else if (a === "--eps")
      out.eps = String(argv[++i])
        .split(",")
        .map((x) => Number(x.trim()))
        .filter((n) => Number.isFinite(n));
    else if (a === "--skip-download") out.skipDownload = true;
    else if (a === "--skip-transcribe") out.skipTranscribe = true;
    else if (a === "--merge-only") {
      out.mergeOnly = true;
      out.skipDownload = true;
      out.skipTranscribe = true;
    } else if (a === "--transcribe-only") out.transcribeOnly = true;
    else if (a === "--model") out.model = argv[++i];
    else if (a === "--help" || a === "-h") {
      console.log(`Usage: node scripts/listen-gooaye-episodes.mjs [options]
  --limit N              latest N not-yet-listened (default 16)
  --eps 699,698          explicit episode numbers
  --skip-download
  --skip-transcribe
  --merge-only           only merge analysis pack into gooaye-episodes.json
  --transcribe-only      download+transcribe; do not merge
  --model small|base|…   faster-whisper model (default small)`);
      process.exit(0);
    }
  }
  return out;
}

function taipeiNowIso() {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = Object.fromEntries(
    fmt.formatToParts(new Date()).map((p) => [p.type, p.value])
  );
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}+08:00`;
}

function ensureDirs() {
  for (const d of [CACHE, AUDIO_DIR, WAV_DIR, TX_DIR]) {
    fs.mkdirSync(d, { recursive: true });
  }
}

async function fetchFeed() {
  const res = await fetch(FEED_URL, {
    headers: { "User-Agent": UA, Accept: "application/rss+xml, application/xml, text/xml, */*" },
  });
  if (!res.ok) throw new Error(`RSS HTTP ${res.status}`);
  return await res.text();
}

function tagXml(block, name) {
  const cd = block.match(
    new RegExp(`<${name}(?:\\s[^>]*)?><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${name}>`, "i")
  );
  if (cd) return cd[1];
  const plain = block.match(
    new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i")
  );
  return plain ? plain[1] : "";
}

function parseRssItems(xml) {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((m) => m[1]);
  const list = [];
  for (const block of items) {
    const title = (tagXml(block, "title") || "").replace(/<[^>]+>/g, "").trim();
    const guid = (tagXml(block, "guid") || "").replace(/<[^>]+>/g, "").trim();
    const enc =
      (block.match(/<enclosure[^>]*\surl="([^"]+)"/i) || [])[1] || null;
    const epTag = tagXml(block, "itunes:episode").trim();
    let ep = epTag && /^\d+$/.test(epTag) ? Number(epTag) : null;
    if (ep == null) {
      const m = title.match(/\bEP\s*(\d+)\b/i);
      ep = m ? Number(m[1]) : null;
    }
    const durRaw = tagXml(block, "itunes:duration").trim();
    let durationSec = null;
    if (/^\d+$/.test(durRaw)) durationSec = Number(durRaw);
    list.push({ ep, id: guid || null, title, audioUrl: enc, durationSec });
  }
  return list.filter((x) => x.ep != null && x.audioUrl);
}

function loadCatalog() {
  if (!fs.existsSync(OUT_PUBLIC)) throw new Error(`missing ${OUT_PUBLIC}`);
  return JSON.parse(fs.readFileSync(OUT_PUBLIC, "utf8"));
}

function pickTargets(rssItems, catalog, opts) {
  if (opts.eps?.length) {
    const want = new Set(opts.eps);
    return rssItems.filter((x) => want.has(x.ep));
  }
  const listened = new Set(
    (catalog.episodes || [])
      .filter((e) => e.notesQuality === "listened")
      .map((e) => e.ep)
  );
  return rssItems.filter((x) => !listened.has(x.ep)).slice(0, opts.limit);
}

function downloadMp3(item) {
  const dest = path.join(AUDIO_DIR, `ep${item.ep}.mp3`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1_000_000) {
    console.log(`  audio exists ep${item.ep}`);
    return dest;
  }
  console.log(`  downloading ep${item.ep}…`);
  const r = spawnSync(
    "curl",
    ["-fsSL", "-A", UA, "-o", dest, item.audioUrl],
    { encoding: "utf8" }
  );
  if (r.status !== 0) {
    throw new Error(`curl failed ep${item.ep}: ${r.stderr || r.stdout}`);
  }
  return dest;
}

function toWav(mp3Path, ep) {
  const dest = path.join(WAV_DIR, `ep${ep}.wav`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1_000_000) {
    console.log(`  wav exists ep${ep}`);
    return dest;
  }
  console.log(`  ffmpeg wav ep${ep}…`);
  const r = spawnSync(
    FFMPEG,
    ["-y", "-i", mp3Path, "-ac", "1", "-ar", "16000", "-vn", dest],
    { encoding: "utf8" }
  );
  if (r.status !== 0) throw new Error(`ffmpeg failed ep${ep}: ${r.stderr}`);
  return dest;
}

function writeTranscribeHelper() {
  const py = path.join(CACHE, "transcribe_one.py");
  const body = `#!/usr/bin/env python3
import json, sys, time
from datetime import datetime, timezone, timedelta
from faster_whisper import WhisperModel

wav, out_json, out_txt, model_name, compute = sys.argv[1:6]
t0 = time.time()
model = WhisperModel(model_name, device="cpu", compute_type=compute)
segments, info = model.transcribe(
    wav, language="zh", vad_filter=True,
    vad_parameters=dict(min_silence_duration_ms=500),
    beam_size=1, condition_on_previous_text=False,
)
segs, parts = [], []
for s in segments:
    line = (s.text or "").strip()
    if not line: continue
    segs.append({"start": round(s.start, 2), "end": round(s.end, 2), "text": line})
    parts.append(line)
full = "\\n".join(parts)
now = datetime.now(timezone(timedelta(hours=8))).isoformat(timespec="seconds")
ep = int(Path_ep(wav))
payload = {
  "ep": ep, "model": model_name, "compute": compute,
  "language": info.language, "duration": info.duration,
  "elapsedSec": round(time.time()-t0, 1), "transcribedAt": now,
  "charCount": len(full), "segmentCount": len(segs),
  "text": full, "segments": segs,
}
open(out_json,"w",encoding="utf-8").write(json.dumps(payload, ensure_ascii=False, indent=2))
open(out_txt,"w",encoding="utf-8").write(full + "\\n")
print(f"DONE ep{ep} segs={len(segs)} chars={len(full)} wall={payload['elapsedSec']}s")

def Path_ep(p):
    import os
    stem = os.path.splitext(os.path.basename(p))[0]
    return int(stem.replace("ep",""))
`;
  // fix: Path_ep used before def — rewrite cleanly
  const clean = `#!/usr/bin/env python3
import json, os, sys, time
from datetime import datetime, timezone, timedelta
from faster_whisper import WhisperModel

wav, out_json, out_txt, model_name, compute = sys.argv[1:6]
stem = os.path.splitext(os.path.basename(wav))[0]
ep = int(stem.replace("ep", ""))
t0 = time.time()
model = WhisperModel(model_name, device="cpu", compute_type=compute)
segments, info = model.transcribe(
    wav, language="zh", vad_filter=True,
    vad_parameters=dict(min_silence_duration_ms=500),
    beam_size=1, condition_on_previous_text=False,
)
segs, parts = [], []
for s in segments:
    line = (s.text or "").strip()
    if not line:
        continue
    segs.append({"start": round(s.start, 2), "end": round(s.end, 2), "text": line})
    parts.append(line)
full = "\\n".join(parts)
now = datetime.now(timezone(timedelta(hours=8))).isoformat(timespec="seconds")
payload = {
    "ep": ep,
    "model": model_name,
    "compute": compute,
    "language": info.language,
    "duration": info.duration,
    "elapsedSec": round(time.time() - t0, 1),
    "transcribedAt": now,
    "charCount": len(full),
    "segmentCount": len(segs),
    "text": full,
    "segments": segs,
}
open(out_json, "w", encoding="utf-8").write(json.dumps(payload, ensure_ascii=False, indent=2))
open(out_txt, "w", encoding="utf-8").write(full + "\\n")
print(f"DONE ep{ep} segs={len(segs)} chars={len(full)} wall={payload['elapsedSec']}s", flush=True)
`;
  fs.writeFileSync(py, clean, "utf8");
  return py;
}

function transcribe(wavPath, ep, modelName) {
  const outJson = path.join(TX_DIR, `ep${ep}.json`);
  const outTxt = path.join(TX_DIR, `ep${ep}.txt`);
  if (
    fs.existsSync(outJson) &&
    fs.statSync(outJson).size > 500 &&
    fs.existsSync(outTxt) &&
    fs.statSync(outTxt).size > 200
  ) {
    console.log(`  transcript exists ep${ep}`);
    return outJson;
  }
  const py = writeTranscribeHelper();
  const python = path.join(DEFAULT_VENV, "bin/python");
  if (!fs.existsSync(python)) {
    throw new Error(
      `Whisper venv python missing at ${python}. Create venv and pip install faster-whisper.`
    );
  }
  console.log(`  transcribing ep${ep} (model=${modelName})…`);
  const r = spawnSync(
    python,
    [py, wavPath, outJson, outTxt, modelName, "int8"],
    { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }
  );
  if (r.stdout) process.stdout.write(r.stdout);
  if (r.stderr) process.stderr.write(r.stderr);
  if (r.status !== 0) throw new Error(`transcribe failed ep${ep}`);
  return outJson;
}

function loadAnalysisPack() {
  if (!fs.existsSync(ANALYSIS_PACK)) return { episodes: {} };
  return JSON.parse(fs.readFileSync(ANALYSIS_PACK, "utf8"));
}

function mergeAnalysis(catalog, pack) {
  const byEp = pack.episodes || {};
  let upgraded = 0;
  const model =
    pack.transcriptModel ||
    "faster-whisper small int8 (zh)";
  for (const ep of catalog.episodes || []) {
    const a = byEp[String(ep.ep)] || byEp[ep.ep];
    if (!a || !Array.isArray(a.stockAnalysis) || !a.stockAnalysis.length) continue;
    if (!ep.rssTeaser && Array.isArray(ep.keyPoints) && ep.keyPoints.length) {
      ep.rssTeaser = [...ep.keyPoints];
    }
    ep.stockAnalysis = a.stockAnalysis.map(String);
    ep.notesQuality = "listened";
    ep.listenedAt = a.listenedAt || taipeiNowIso();
    ep.transcriptSource = a.transcriptSource || model;
    if (a.markets) ep.markets = a.markets;
    if (a.hostViewsOnly != null) ep.hostViewsOnly = !!a.hostViewsOnly;
    upgraded += 1;
  }
  const listened = (catalog.episodes || []).filter(
    (e) => e.notesQuality === "listened"
  ).length;
  catalog.counts = {
    ...(catalog.counts || {}),
    listened,
    rssOnly: (catalog.episodes || []).length - listened,
  };
  catalog.asOf = taipeiNowIso();
  catalog.disclaimer =
    "Not investment advice. Candidate/watch; math gate closed. " +
    "Episodes marked notesQuality=listened include 股票重點分析 written after downloading public SoundOn audio and reading a speech-to-text transcript. " +
    "RSS-only episodes still show show-note teasers only — do not treat those as listened analysis. " +
    "Host views only; no invented tickers, prices, or quotes.";
  catalog.listenPipeline = {
    script: "scripts/listen-gooaye-episodes.mjs",
    analysisPack: "scripts/gooaye-stock-analysis.json",
    transcriptModel: model,
    updatedAt: catalog.asOf,
  };
  return upgraded;
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

async function main() {
  const opts = parseArgs(process.argv);
  ensureDirs();
  const catalog = loadCatalog();

  if (!opts.mergeOnly) {
    console.log("Fetching SoundOn RSS…");
    const xml = await fetchFeed();
    const rssItems = parseRssItems(xml);
    const targets = pickTargets(rssItems, catalog, opts);
    console.log(
      `Targets: ${targets.map((t) => t.ep).join(", ") || "(none)"}`
    );
    for (const item of targets) {
      console.log(`Episode ${item.ep} — ${item.title}`);
      if (!opts.skipDownload) {
        const mp3 = downloadMp3(item);
        toWav(mp3, item.ep);
      }
      if (!opts.skipTranscribe) {
        const wav = path.join(WAV_DIR, `ep${item.ep}.wav`);
        if (!fs.existsSync(wav)) {
          console.warn(`  missing wav for ep${item.ep}; skip transcribe`);
          continue;
        }
        transcribe(wav, item.ep, opts.model);
      }
    }
  }

  if (opts.transcribeOnly) {
    console.log("transcribe-only: skip merge");
    return;
  }

  const pack = loadAnalysisPack();
  const n = mergeAnalysis(catalog, pack);
  writeJson(OUT_PUBLIC, catalog);
  console.log(`Wrote ${OUT_PUBLIC} (upgraded/merged listened fields for ${n} eps in pack)`);
  if (fs.existsSync(path.dirname(OUT_DOCS))) {
    writeJson(OUT_DOCS, catalog);
    console.log(`Wrote ${OUT_DOCS}`);
  }
  const listened = (catalog.episodes || []).filter(
    (e) => e.notesQuality === "listened"
  ).length;
  console.log(`Catalog listened count: ${listened}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
