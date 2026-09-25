#!/usr/bin/env node
/**
 * Fetch 張小珺jùn｜商業訪談錄 from official xyzfm RSS (iTunes id 1634356920).
 * Uses curl (hosts often 403 bare fetch). Writes public/data + docs/data.
 * Preserves notesQuality=listened enrichment across refreshes.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const FEED = "https://feed.xyzfm.space/dk4yh3pkpjp3";
const APPLE_ID = "1634356920";
const APPLE =
  "https://podcasts.apple.com/tw/podcast/%E5%BC%A0%E5%B0%8F%E7%8F%BAj%C3%B9n-%E5%95%86%E4%B8%9A%E8%AE%BF%E8%B0%88%E5%BD%95/id1634356920";
const SHOW_PAGE = "https://www.xiaoyuzhoufm.com/podcast/626b46ea9cbbf0451cf5a962";
const OUT_PUBLIC = path.join(ROOT, "public/data/xiaojun-episodes.json");
const OUT_DOCS = path.join(ROOT, "docs/data/xiaojun-episodes.json");
const UA = "Mozilla/5.0 (compatible; JustMathAndLuck/1.0)";

function curlFeed(url) {
  const r = spawnSync("curl", ["-fsSL", "-A", UA, url], {
    encoding: "buffer",
    maxBuffer: 20 * 1024 * 1024,
  });
  if (r.status !== 0) throw new Error(`curl failed: ${r.stderr?.toString() || r.status}`);
  return r.stdout.toString("utf8");
}

function taipeiNowIso() {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  });
  const p = Object.fromEntries(fmt.formatToParts(new Date()).map((x) => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:${p.second}+08:00`;
}

function stripHtml(s) {
  return String(s || "")
    .replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">").replace(/&quot;/gi, '"')
    .replace(/&#(\d+);/g, (_, n) => { try { return String.fromCodePoint(+n); } catch { return " "; } })
    .replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, " ")
    .replace(/\r/g, "").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ").trim();
}

function tag(block, name) {
  const cd = block.match(new RegExp(`<${name}(?:\\s[^>]*)?><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${name}>`, "i"));
  if (cd) return cd[1];
  const plain = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"));
  return plain ? plain[1] : "";
}

function pubTw(pub) {
  const d = new Date(pub); if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
}
function pubIso(pub) {
  const d = new Date(pub); return Number.isNaN(d.getTime()) ? null : d.toISOString();
}
function durationSec(block) {
  const raw = tag(block, "itunes:duration").trim();
  if (!raw) return null;
  if (/^\d+$/.test(raw)) return +raw;
  const parts = raw.split(":").map(Number);
  if (parts.some(Number.isNaN)) return null;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return null;
}

function notesFromDesc(raw) {
  let t = stripHtml(raw);
  for (const re of [/语言即世界工作室/, /歡迎訂閱|欢迎订阅/, /加入會員|加入会员/, /--\s*Hosting/i]) {
    const m = t.match(re); if (m && m.index != null) t = t.slice(0, m.index);
  }
  return t.split(/\n+/).map((l) => l.trim()).filter((l) => l && !/^(https?:\/\/)/i.test(l) && !/(贊助|赞助|廣告|广告|優惠)/.test(l)).join("\n").trim();
}

function bullets(title, notes) {
  const pts = [];
  if (notes) {
    for (let p of notes.split(/(?<=[。！？!?])\s*|\n+/).map((s) => s.trim()).filter((s) => s.length >= 2)) {
      if (/(贊助|赞助|廣告)/.test(p) || /^https?:\/\//i.test(p)) continue;
      if (p.length > 160) p = p.slice(0, 140).replace(/[，,、\s]+$/u, "") + "…";
      if (!pts.includes(p)) pts.push(p);
      if (pts.length >= 6) break;
    }
  }
  if (!pts.length && title) pts.push(String(title).replace(/^\d+\s*[.、．]\s*/, "").slice(0, 160));
  return pts;
}

function parse(xml) {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((m) => m[1]);
  let thin = 0, titleOnly = 0, empty = 0;
  const episodes = [];
  for (const block of items) {
    const title = stripHtml(tag(block, "title"));
    const link = stripHtml(tag(block, "link"));
    const guid = stripHtml(tag(block, "guid")) || link;
    const pubDate = stripHtml(tag(block, "pubDate"));
    const desc = tag(block, "description") || tag(block, "content:encoded") || tag(block, "itunes:summary") || "";
    const notes = notesFromDesc(desc);
    const keyPoints = bullets(title, notes);
    const epTag = tag(block, "itunes:episode").trim();
    let ep = epTag && /^\d+$/.test(epTag) ? +epTag : null;
    if (ep == null) { const m = title.match(/^(\d+)\s*[.、．]/); ep = m ? +m[1] : null; }
    let notesQuality = "rich";
    if (!keyPoints.length) { notesQuality = "empty"; empty++; }
    else if (!notes || notes.length < 28) { notesQuality = notes ? "teaser" : "title-only"; notes ? thin++ : titleOnly++; }
    else if (keyPoints.length <= 1 && notes.length < 60) { notesQuality = "teaser"; thin++; }
    episodes.push({
      id: guid || `ep-${ep ?? episodes.length}`,
      ep, title,
      subtitle: title.replace(/^\d+\s*[.、．]\s*/, "").trim() || null,
      pubDate: pubDate || null, pubDateIso: pubIso(pubDate), pubDateTw: pubTw(pubDate),
      durationSec: durationSec(block), link: link || null, appleShowUrl: APPLE,
      keyPoints, notesQuality, source: "xyzfm-rss",
    });
  }
  episodes.sort((a, b) => (Date.parse(b.pubDateIso || 0) - Date.parse(a.pubDateIso || 0)) || ((b.ep || 0) - (a.ep || 0)));
  return { episodes, thin, titleOnly, empty };
}

function loadPrev() {
  const map = new Map();
  if (!fs.existsSync(OUT_PUBLIC)) return map;
  try {
    for (const ep of JSON.parse(fs.readFileSync(OUT_PUBLIC, "utf8")).episodes || []) {
      if (ep?.notesQuality === "listened" && Array.isArray(ep.stockAnalysis) && ep.stockAnalysis.length) {
        map.set(ep.id, ep); if (ep.ep != null) map.set(`ep:${ep.ep}`, ep);
      }
    }
  } catch {}
  return map;
}

function merge(episodes, prev) {
  let n = 0;
  for (const ep of episodes) {
    const old = prev.get(ep.id) || (ep.ep != null ? prev.get(`ep:${ep.ep}`) : null);
    if (!old) continue;
    if (!ep.rssTeaser) ep.rssTeaser = old.rssTeaser || [...(ep.keyPoints || [])];
    for (const k of ["stockAnalysis", "notesQuality", "listenedAt", "transcriptSource", "markets", "hostViewsOnly"]) {
      if (old[k] !== undefined) ep[k] = old[k];
    }
    ep.notesQuality = "listened"; n++;
  }
  return n;
}

function write(p, data) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n");
}

const xml = curlFeed(FEED);
const { episodes, thin, titleOnly, empty } = parse(xml);
const kept = merge(episodes, loadPrev());
if (!episodes.length) { console.error("No episodes"); process.exit(1); }
const asOf = taipeiNowIso();
const payload = {
  id: "xiaojun-episodes", asOf, timezone: "Asia/Taipei", status: "candidate", mathGate: "closed",
  disclaimer: "Not investment advice. Candidate/watch; math gate closed. notesQuality=listened includes stock/industry notes after public audio + STT. RSS-only = show notes only. Host views; no invented tickers/prices/quotes.",
  show: { name: "張小珺jùn｜商業訪談錄", host: "張小珺", appleId: APPLE_ID, appleUrl: APPLE, xiaoyuzhouUrl: SHOW_PAGE, feedUrl: FEED },
  sources: [{ type: "rss", url: FEED, label: "小宇宙 / xyzfm RSS" }, { type: "apple", url: APPLE, label: "Apple Podcasts" }],
  counts: {
    total: episodes.length, withKeyPoints: episodes.filter((e) => e.keyPoints.length).length,
    notesTeaser: thin, notesTitleOnly: titleOnly, notesEmpty: empty,
    listened: episodes.filter((e) => e.notesQuality === "listened").length,
    rssOnly: episodes.filter((e) => e.notesQuality !== "listened").length,
  },
  listenPipeline: { script: "scripts/listen-xiaojun-episodes.mjs", analysisPack: "scripts/xiaojun-stock-analysis.json", transcriptModel: "faster-whisper small int8 (zh)", updatedAt: asOf },
  episodes,
};
write(OUT_PUBLIC, payload);
if (fs.existsSync(path.dirname(OUT_DOCS))) write(OUT_DOCS, payload);
console.log(`xiaojun episodes=${episodes.length} listened-preserved=${kept} → ${OUT_PUBLIC}`);
