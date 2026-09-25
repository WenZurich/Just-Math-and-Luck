#!/usr/bin/env node
/**
 * Listen pipeline for xiaojun (isolated from gooaye).
 * Optional: clip public enclosure audio + faster-whisper STT.
 * Always: merge scripts/xiaojun-stock-analysis.json → public/data/xiaojun-episodes.json
 *
 *   node scripts/listen-xiaojun-episodes.mjs --merge-only
 *   node scripts/listen-xiaojun-episodes.mjs --eps 153,150 --clip-sec 900
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_PUBLIC = path.join(ROOT, "public/data/xiaojun-episodes.json");
const OUT_DOCS = path.join(ROOT, "docs/data/xiaojun-episodes.json");
const PACK = path.join(ROOT, "scripts/xiaojun-stock-analysis.json");
const CACHE = path.join(ROOT, "scripts/cache");
const WAV_DIR = path.join(CACHE, "xiaojun-wav");
const TX_DIR = path.join(CACHE, "xiaojun-transcripts");
const FEED = "https://feed.xyzfm.space/dk4yh3pkpjp3";
const UA = "Mozilla/5.0 (compatible; JustMathAndLuck/1.0)";
const VENV = process.env.WHISPER_VENV || "/workspace/venv-whisper";
const FFMPEG = process.env.FFMPEG || "/usr/bin/ffmpeg";
const TX_PY = path.join(CACHE, "transcribe_one.py");

function parseArgs(argv) {
  const o = { limit: 8, eps: null, clipSec: 900, mergeOnly: false, skipDownload: false, skipTranscribe: false, model: process.env.WHISPER_MODEL || "small" };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--limit") o.limit = Number(argv[++i]);
    else if (a === "--eps") o.eps = String(argv[++i]).split(",").map((x) => Number(x.trim())).filter(Number.isFinite);
    else if (a === "--clip-sec") o.clipSec = Number(argv[++i]);
    else if (a === "--merge-only") { o.mergeOnly = true; o.skipDownload = true; o.skipTranscribe = true; }
    else if (a === "--skip-download") o.skipDownload = true;
    else if (a === "--skip-transcribe") o.skipTranscribe = true;
    else if (a === "--model") o.model = argv[++i];
  }
  return o;
}

function taipeiNowIso() {
  const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  const p = Object.fromEntries(fmt.formatToParts(new Date()).map((x) => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:${p.second}+08:00`;
}

function ensureDirs() {
  for (const d of [CACHE, WAV_DIR, TX_DIR]) fs.mkdirSync(d, { recursive: true });
}

function curlText(url) {
  const r = spawnSync("curl", ["-fsSL", "-A", UA, url], { encoding: "buffer", maxBuffer: 20 << 20 });
  if (r.status !== 0) throw new Error(`curl failed: ${r.stderr?.toString() || r.status}`);
  return r.stdout.toString("utf8");
}

function tag(block, name) {
  const cd = block.match(new RegExp(`<${name}(?:\\s[^>]*)?><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${name}>`, "i"));
  if (cd) return cd[1];
  const plain = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"));
  return plain ? plain[1] : "";
}

function parseRss(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((m) => m[1]).map((block) => {
    const title = tag(block, "title").replace(/<[^>]+>/g, "").trim();
    const audioUrl = (block.match(/<enclosure[^>]*\surl="([^"]+)"/i) || [])[1] || null;
    const epTag = tag(block, "itunes:episode").trim();
    let ep = epTag && /^\d+$/.test(epTag) ? Number(epTag) : null;
    if (ep == null) {
      const m1 = title.match(/^(\d+)\s*[.、．]/);
      const m2 = title.match(/#(\d+)\s*$/);
      ep = m1 ? Number(m1[1]) : m2 ? Number(m2[1]) : null;
    }
    return { ep, title, audioUrl };
  }).filter((x) => x.ep != null && x.audioUrl);
}

function resolveUrl(url) {
  const r = spawnSync("curl", ["-sSIL", "-A", UA, url], { encoding: "utf8" });
  const locs = [...String(r.stdout || "").matchAll(/^location:\s*(.+)$/gim)].map((m) => m[1].trim());
  return locs.at(-1) || url;
}

function toWav(url, ep, clipSec) {
  const dest = path.join(WAV_DIR, `ep${ep}.wav`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 100000) {
    console.log(`  wav exists ep${ep}`);
    return dest;
  }
  const finalUrl = resolveUrl(url);
  console.log(`  ffmpeg clip ${clipSec}s ep${ep}`);
  const r = spawnSync(FFMPEG, ["-y", "-loglevel", "error", "-user_agent", UA, "-i", finalUrl, "-t", String(clipSec), "-ac", "1", "-ar", "16000", dest], { encoding: "utf8" });
  if (r.status !== 0) throw new Error(`ffmpeg ep${ep}: ${r.stderr}`);
  return dest;
}

function transcribe(wav, ep, model) {
  const outJson = path.join(TX_DIR, `ep${ep}.json`);
  const outTxt = path.join(TX_DIR, `ep${ep}.txt`);
  if (fs.existsSync(outJson) && fs.existsSync(outTxt) && fs.statSync(outTxt).size > 200) {
    console.log(`  transcript exists ep${ep}`);
    return outJson;
  }
  if (!fs.existsSync(TX_PY)) throw new Error(`missing ${TX_PY}`);
  const python = path.join(VENV, "bin/python");
  console.log(`  transcribe ep${ep} model=${model}`);
  const r = spawnSync(python, [TX_PY, wav, outJson, outTxt, model, "int8"], { encoding: "utf8", maxBuffer: 64 << 20 });
  if (r.stdout) process.stdout.write(r.stdout);
  if (r.stderr) process.stderr.write(r.stderr);
  if (r.status !== 0) throw new Error(`transcribe failed ep${ep}`);
  return outJson;
}

function mergePack(catalog, pack) {
  const byEp = pack.episodes || {};
  let n = 0;
  for (const ep of catalog.episodes || []) {
    const a = byEp[String(ep.ep)] || byEp[ep.ep];
    if (!a || !Array.isArray(a.stockAnalysis) || !a.stockAnalysis.length) continue;
    if (!ep.rssTeaser && Array.isArray(ep.keyPoints)) ep.rssTeaser = [...ep.keyPoints];
    ep.stockAnalysis = a.stockAnalysis.map(String);
    ep.notesQuality = "listened";
    ep.listenedAt = a.listenedAt || taipeiNowIso();
    ep.transcriptSource = a.transcriptSource || pack.transcriptModel || "faster-whisper small int8 (zh)";
    if (a.markets) ep.markets = a.markets;
    ep.hostViewsOnly = true;
    n++;
  }
  const listened = (catalog.episodes || []).filter((e) => e.notesQuality === "listened").length;
  catalog.counts = { ...(catalog.counts || {}), listened, rssOnly: (catalog.episodes || []).length - listened };
  catalog.asOf = taipeiNowIso();
  catalog.listenPipeline = {
    script: "scripts/listen-xiaojun-episodes.mjs",
    analysisPack: "scripts/xiaojun-stock-analysis.json",
    transcriptModel: pack.transcriptModel || "faster-whisper small int8 (zh)",
    updatedAt: catalog.asOf,
  };
  return n;
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
}

const opts = parseArgs(process.argv);
ensureDirs();
if (!fs.existsSync(OUT_PUBLIC)) throw new Error(`missing ${OUT_PUBLIC}`);
const catalog = JSON.parse(fs.readFileSync(OUT_PUBLIC, "utf8"));

if (!opts.mergeOnly) {
  console.log("Fetching RSS…", FEED);
  const rss = parseRss(curlText(FEED));
  let targets;
  if (opts.eps?.length) targets = rss.filter((x) => opts.eps.includes(x.ep));
  else {
    const listened = new Set((catalog.episodes || []).filter((e) => e.notesQuality === "listened").map((e) => e.ep));
    targets = rss.filter((x) => !listened.has(x.ep)).slice(0, opts.limit);
  }
  console.log("Targets:", targets.map((t) => t.ep).join(", ") || "(none)");
  for (const item of targets) {
    console.log(`Episode ${item.ep} — ${item.title}`);
    if (!opts.skipDownload) toWav(item.audioUrl, item.ep, opts.clipSec);
    if (!opts.skipTranscribe) {
      const wav = path.join(WAV_DIR, `ep${item.ep}.wav`);
      if (!fs.existsSync(wav)) { console.warn("  missing wav; skip STT"); continue; }
      transcribe(wav, item.ep, opts.model);
    }
  }
}

const pack = fs.existsSync(PACK) ? JSON.parse(fs.readFileSync(PACK, "utf8")) : { episodes: {} };
const n = mergePack(catalog, pack);
writeJson(OUT_PUBLIC, catalog);
if (fs.existsSync(path.dirname(OUT_DOCS))) writeJson(OUT_DOCS, catalog);
console.log(`Merged listened fields for ${n} eps; catalog listened=${catalog.counts.listened}`);
