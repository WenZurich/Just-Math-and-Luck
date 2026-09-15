#!/usr/bin/env node
/**
 * XQ-style multi-strategy logic screener (public data only).
 * Never invents PE / margins / institutional nets.
 *
 * Usage: node scripts/run-strategies.mjs
 * Writes: public/data/strategy-screener.json (+ docs/data/ if present)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_PUBLIC = path.join(ROOT, "public/data/strategy-screener.json");
const OUT_DOCS = path.join(ROOT, "docs/data/strategy-screener.json");
const LATEST = path.join(ROOT, "public/data/latest.json");

const UA =
  "Mozilla/5.0 (compatible; JustMathAndLuck/1.0; +https://github.com/WenZurich/Just-Math-and-Luck-)";
const TW_LIQUID_ZHANG = 300; // 張
const TW_SHARES_PER_ZHANG = 1000;
const TW_MIN_AVG_VOL_SHARES = TW_LIQUID_ZHANG * TW_SHARES_PER_ZHANG; // 300,000 shares
const US_MIN_AVG_VOL = 500_000;
const CONCURRENCY = 6;
const YAHOO_RANGE = "6mo";

// —— helpers ——
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function mapPool(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return out;
}

function taipeiYmd(d = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function ymdToTwse(ymd) {
  return ymd.replace(/-/g, "");
}

function ymdToRocSlash(ymd) {
  const [y, m, d] = ymd.split("-").map(Number);
  return `${y - 1911}/${String(m).padStart(2, "0")}/${String(d).padStart(2, "0")}`;
}

function addDaysYmd(ymd, delta) {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + delta);
  return dt.toISOString().slice(0, 10);
}

function parseNum(s) {
  if (s == null) return null;
  const t = String(s).replace(/,/g, "").replace(/%/g, "").trim();
  if (!t || t === "--" || t === "-" || t === "—") return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}

function sma(arr, n) {
  if (!arr || arr.length < n) return null;
  let s = 0;
  for (let i = arr.length - n; i < arr.length; i++) s += arr[i];
  return s / n;
}

function rsiWilder(closes, period = 14) {
  if (!closes || closes.length < period + 2) return null;
  let gains = 0;
  let losses = 0;
  for (let i = 1; i <= period; i++) {
    const d = closes[i] - closes[i - 1];
    if (d >= 0) gains += d;
    else losses -= d;
  }
  let avgGain = gains / period;
  let avgLoss = losses / period;
  for (let i = period + 1; i < closes.length; i++) {
    const d = closes[i] - closes[i - 1];
    const g = d > 0 ? d : 0;
    const l = d < 0 ? -d : 0;
    avgGain = (avgGain * (period - 1) + g) / period;
    avgLoss = (avgLoss * (period - 1) + l) / period;
  }
  if (avgLoss === 0) return 100;
  const rs = avgGain / avgLoss;
  return 100 - 100 / (1 + rs);
}

function rsiSeriesLast2(closes, period = 14) {
  if (!closes || closes.length < period + 3) return { prev: null, cur: null };
  const a = rsiWilder(closes.slice(0, -1), period);
  const b = rsiWilder(closes, period);
  return { prev: a, cur: b };
}

// —— Yahoo cookie/crumb ——
let yahooCookie = "";
let yahooCrumb = "";

async function ensureYahooCrumb() {
  if (yahooCrumb) return;
  try {
    const r1 = await fetch("https://fc.yahoo.com", {
      headers: { "User-Agent": UA },
      redirect: "manual",
    });
    const set = r1.headers.getSetCookie?.() || [];
    yahooCookie = set.map((c) => c.split(";")[0]).join("; ");
    const r2 = await fetch("https://query1.finance.yahoo.com/v1/test/getcrumb", {
      headers: { "User-Agent": UA, Cookie: yahooCookie },
    });
    if (r2.ok) yahooCrumb = (await r2.text()).trim();
  } catch (e) {
    console.warn("Yahoo crumb failed:", e.message);
  }
}

async function yahooChart(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
    symbol
  )}?interval=1d&range=${YAHOO_RANGE}`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) return null;
  const json = await res.json();
  const r = json?.chart?.result?.[0];
  if (!r?.timestamp?.length) return null;
  const q = r.indicators?.quote?.[0] || {};
  const bars = [];
  for (let i = 0; i < r.timestamp.length; i++) {
    const c = q.close?.[i];
    const o = q.open?.[i];
    const h = q.high?.[i];
    const l = q.low?.[i];
    const v = q.volume?.[i];
    if (c == null || v == null) continue;
    bars.push({
      t: r.timestamp[i],
      o: o ?? c,
      h: h ?? c,
      l: l ?? c,
      c,
      v,
    });
  }
  if (bars.length < 65) return null;
  return {
    symbol,
    name: r.meta?.shortName || r.meta?.longName || symbol,
    currency: r.meta?.currency || null,
    price: r.meta?.regularMarketPrice ?? bars[bars.length - 1].c,
    bars,
  };
}

async function yahooFundamentals(symbol) {
  await ensureYahooCrumb();
  if (!yahooCrumb) return null;
  const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${encodeURIComponent(
    symbol
  )}?modules=defaultKeyStatistics,financialData,incomeStatementHistoryQuarterly&crumb=${encodeURIComponent(
    yahooCrumb
  )}`;
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Cookie: yahooCookie },
  });
  if (!res.ok) return null;
  const json = await res.json();
  const block = json?.quoteSummary?.result?.[0];
  if (!block) return null;
  const raw = (x) => (x && typeof x === "object" && "raw" in x ? x.raw : x ?? null);
  const ks = block.defaultKeyStatistics || {};
  const fd = block.financialData || {};
  const iq = block.incomeStatementHistoryQuarterly?.incomeStatementHistory || [];
  const quarters = iq.map((s) => ({
    end: raw(s.endDate),
    revenue: raw(s.totalRevenue),
    operatingIncome: raw(s.operatingIncome),
    grossProfit: raw(s.grossProfit),
  }));
  return {
    trailingPE: raw(ks.trailingPE),
    forwardPE: raw(ks.forwardPE),
    debtToEquity: raw(fd.debtToEquity),
    revenueGrowth: raw(fd.revenueGrowth),
    earningsGrowth: raw(fd.earningsGrowth),
    grossMargins: raw(fd.grossMargins),
    operatingMargins: raw(fd.operatingMargins),
    quarters,
  };
}

// —— TWSE / TPEX ——
function decodeTwCsv(buf) {
  const asUtf = buf.toString("utf8");
  if (asUtf.includes("證券代號") || asUtf.includes("很抱歉")) return asUtf;
  try {
    return new TextDecoder("big5").decode(buf);
  } catch {
    return asUtf;
  }
}

async function fetchTwseMiIndex(ymd) {
  const date = ymdToTwse(ymd);
  const url = `https://www.twse.com.tw/rwd/zh/afterTrading/MI_INDEX?response=csv&date=${date}&type=ALLBUT0999`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  const text = decodeTwCsv(buf);
  if (!text.includes("證券代號")) return null;
  const lines = text.split(/\r?\n/);
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("證券代號") && lines[i].includes("本益比")) {
      start = i;
      break;
    }
  }
  if (start < 0) return null;
  const rows = [];
  for (let i = start + 1; i < lines.length; i++) {
    let L = lines[i].trim();
    if (!L) {
      if (rows.length) break;
      continue;
    }
    if (L.startsWith("說明") || L.startsWith('"說明')) break;
    L = L.replace(/^=/, "");
    // naive CSV split respecting quotes
    const cols = [];
    let cur = "";
    let inQ = false;
    for (let j = 0; j < L.length; j++) {
      const ch = L[j];
      if (ch === '"') {
        inQ = !inQ;
        continue;
      }
      if (ch === "," && !inQ) {
        cols.push(cur);
        cur = "";
        continue;
      }
      cur += ch;
    }
    cols.push(cur);
    if (cols.length < 16) continue;
    const code = cols[0].trim();
    if (!/^\d{4}$/.test(code)) continue;
    if (code.startsWith("00")) continue; // ETF/ETN-ish
    const name = cols[1].trim();
    const volShares = parseNum(cols[2]);
    const close = parseNum(cols[8]);
    const pe = parseNum(cols[15]);
    rows.push({
      code,
      ticker: `${code}.TW`,
      name,
      volShares,
      close,
      pe: pe != null && pe > 0 ? pe : null,
      market: "TW",
    });
  }
  return rows;
}

async function fetchTwseT86(ymd) {
  const date = ymdToTwse(ymd);
  const url = `https://www.twse.com.tw/rwd/zh/fund/T86?response=csv&date=${date}&selectType=ALLBUT0999`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  const text = decodeTwCsv(buf);
  if (!text.includes("證券代號") || text.includes("很抱歉")) return null;
  const lines = text.split(/\r?\n/);
  const map = new Map();
  for (const L0 of lines) {
    let L = L0.trim().replace(/^=/, "");
    if (!L || L.includes("證券代號") || L.startsWith("說明") || L.startsWith('"說明')) continue;
    const cols = [];
    let cur = "";
    let inQ = false;
    for (let j = 0; j < L.length; j++) {
      const ch = L[j];
      if (ch === '"') {
        inQ = !inQ;
        continue;
      }
      if (ch === "," && !inQ) {
        cols.push(cur);
        cur = "";
        continue;
      }
      cur += ch;
    }
    cols.push(cur);
    if (cols.length < 19) continue;
    const code = cols[0].trim();
    if (!/^\d{4}$/.test(code)) continue;
    // columns: 外陸資買賣超(2), 投信買賣超(10), 自營商買賣超(11), 三大法人合計(18)
    const foreign = parseNum(cols[4]); // 外陸資買賣超股數
    const trust = parseNum(cols[10]); // 投信買賣超
    const dealer = parseNum(cols[11]); // 自營商買賣超股數
    const total = parseNum(cols[18]);
    map.set(code, { foreign, trust, dealer, total, name: cols[1]?.trim() });
  }
  return map.size ? map : null;
}

async function fetchTpexInst(ymd) {
  const d = ymdToRocSlash(ymd);
  const url = `https://www.tpex.org.tw/web/stock/3insti/daily_trade/3itrade_hedge_result.php?l=zh-tw&d=${encodeURIComponent(
    d
  )}&se=EW&o=json`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok) return null;
    const json = await res.json();
    const data = json?.tables?.[0]?.data;
    if (!Array.isArray(data) || !data.length) return null;
    const map = new Map();
    for (const row of data) {
      const code = String(row[0] || "").trim();
      if (!/^\d{4}$/.test(code)) continue;
      // fields vary; typical: 代號 名稱 外資買/賣/超 投信買/賣/超 自營商...
      // Use last column as 三大法人合計 if present
      const total = parseNum(row[row.length - 1]);
      const foreign = parseNum(row[4]);
      const trust = parseNum(row[7]);
      const dealer = parseNum(row[10]);
      map.set(code, {
        foreign,
        trust,
        dealer,
        total,
        name: String(row[1] || "").trim(),
        board: "TPEX",
      });
    }
    return map.size ? map : null;
  } catch {
    return null;
  }
}

async function findLatestTwseSession(fromYmd, maxBack = 12) {
  let ymd = fromYmd;
  for (let i = 0; i < maxBack; i++) {
    const rows = await fetchTwseMiIndex(ymd);
    if (rows?.length) return { ymd, rows };
    ymd = addDaysYmd(ymd, -1);
    await sleep(200);
  }
  return null;
}

async function collectInstDays(endYmd, needDays = 5) {
  const days = [];
  let ymd = endYmd;
  for (let i = 0; i < 14 && days.length < needDays; i++) {
    const tw = await fetchTwseT86(ymd);
    const otc = await fetchTpexInst(ymd);
    if (tw || otc) {
      days.push({ ymd, tw: tw || new Map(), otc: otc || new Map() });
    }
    ymd = addDaysYmd(ymd, -1);
    await sleep(250);
  }
  return days;
}

function mergeInstDay(days, code) {
  // days[0] = most recent
  const one = days[0];
  const d0 = one.tw.get(code) || one.otc.get(code) || null;
  let f5 = 0,
    t5 = 0,
    dl5 = 0,
    tot5 = 0,
    n = 0;
  for (const day of days) {
    const x = day.tw.get(code) || day.otc.get(code);
    if (!x) continue;
    n++;
    f5 += x.foreign ?? 0;
    t5 += x.trust ?? 0;
    dl5 += x.dealer ?? 0;
    tot5 += x.total ?? 0;
  }
  return {
    d1: d0,
    sum5: n ? { foreign: f5, trust: t5, dealer: dl5, total: tot5, days: n } : null,
  };
}

// —— metrics from OHLCV ——
function techMetrics(bars) {
  const closes = bars.map((b) => b.c);
  const highs = bars.map((b) => b.h);
  const vols = bars.map((b) => b.v);
  const last = bars[bars.length - 1];
  const prev = bars[bars.length - 2];
  const s5 = sma(closes, 5);
  const s10 = sma(closes, 10);
  const s20 = sma(closes, 20);
  const s60 = sma(closes, 60);
  const avg5Vol = sma(vols, 5);
  const prior5Highs = highs.slice(-6, -1); // exclude today
  const fiveDayHigh = Math.max(...prior5Highs);
  const is5dHigh = last.h >= fiveDayHigh || last.c >= fiveDayHigh;
  const volRatioYday = prev.v > 0 ? last.v / prev.v : null;
  const ampPct = prev.c > 0 ? ((last.h - last.l) / prev.c) * 100 : null;
  const { prev: rsiPrev, cur: rsiCur } = rsiSeriesLast2(closes, 14);
  const pct5d =
    closes.length >= 6 ? ((last.c - closes[closes.length - 6]) / closes[closes.length - 6]) * 100 : null;
  return {
    price: last.c,
    sma5: s5,
    sma10: s10,
    sma20: s20,
    sma60: s60,
    avgVol5: avg5Vol,
    volToday: last.v,
    volYday: prev.v,
    volRatioYday,
    is5dHigh,
    fiveDayHigh,
    ampPct,
    rsi: rsiCur,
    rsiPrev,
    pct5d,
    dayPct: prev.c ? ((last.c - prev.c) / prev.c) * 100 : null,
  };
}

function sharesToZhang(shares) {
  if (shares == null) return null;
  return shares / TW_SHARES_PER_ZHANG;
}

// —— strategies ——
function cond(text, status = "pass") {
  return { text, status };
}

function buildPeterLynch(universe, ohlcvMap, fundMap, peMap) {
  const blockers = [];
  const conditions = [
    cond("本益比（PE）< 20（有公開數字才算；缺值不捏造、該檔跳過）"),
    cond("股價 > 10（台股 TWD／美股 USD）"),
    cond(`近 5 日平均成交量具流動性（台股 > ${TW_LIQUID_ZHANG} 張＝${TW_MIN_AVG_VOL_SHARES.toLocaleString()} 股）`),
    cond("營收／獲利成長代理（Yahoo 有才標註；缺則略過此條不捏造）", "skip"),
    cond("負債相關代理（Yahoo debtToEquity 有才標註）", "skip"),
  ];
  const hits = [];
  for (const u of universe) {
    const chart = ohlcvMap.get(u.ticker);
    if (!chart) continue;
    const m = techMetrics(chart.bars);
    const priceOk = m.price > 10;
    const liqOk =
      u.market === "TW"
        ? m.avgVol5 != null && m.avgVol5 > TW_MIN_AVG_VOL_SHARES
        : m.avgVol5 != null && m.avgVol5 > US_MIN_AVG_VOL;
    const pe =
      peMap.get(u.ticker) ??
      fundMap.get(u.ticker)?.trailingPE ??
      null;
    if (pe == null) continue; // skip name — don't invent
    if (!(pe < 20)) continue;
    if (!priceOk || !liqOk) continue;
    const fund = fundMap.get(u.ticker) || {};
    hits.push({
      ticker: u.ticker,
      name: u.name || chart.name,
      market: u.market,
      currency: u.market === "TW" ? "TWD" : "USD",
      metrics: {
        pe,
        price: round(m.price, 2),
        avgVol5Shares: Math.round(m.avgVol5),
        avgVol5Zhang: u.market === "TW" ? round(sharesToZhang(m.avgVol5), 1) : null,
        revenueGrowth: fund.revenueGrowth != null ? round(fund.revenueGrowth * 100, 1) : null,
        earningsGrowth: fund.earningsGrowth != null ? round(fund.earningsGrowth * 100, 1) : null,
        debtToEquity: fund.debtToEquity != null ? round(fund.debtToEquity, 2) : null,
        dayPct: round(m.dayPct, 2),
      },
    });
  }
  hits.sort((a, b) => (a.metrics.pe ?? 99) - (b.metrics.pe ?? 99));
  if (!fundMap.size) {
    blockers.push("Yahoo 基本面（成長／負債）部分標的可能抓不到；本益比以證交所日報或 Yahoo trailingPE 為準");
  }
  return {
    id: "peter-lynch",
    name: "彼得林區區",
    category: "大師",
    categoryGroup: "大師",
    xqTags: ["大師", "財務", "價量"],
    description: "近似 Peter Lynch 風格：便宜本益比＋夠流動＋股價不太低。非 XQ 專有資料庫。",
    conditions,
    hits: hits.slice(0, 80),
    blockers,
    incomplete: false,
  };
}

function buildMarginGrowth(universe, fundMap) {
  const blockers = [
    "公開 Yahoo 季報對多數台股的營業利益／毛利欄位常為空或為 0，無法可靠計算「連續季營益率／毛利率成長 >10%」。",
    "為避免捏造財報，本策略今日標記為資料不足，不產出假命中列。",
  ];

  const margin = (income, rev) => {
    if (income == null || rev == null || !(rev > 0)) return null;
    if (!(Math.abs(income) > 0)) return null; // treat 0 as missing
    const m = income / rev;
    // near-zero placeholders are not usable margins
    if (Math.abs(m) < 0.005) return null;
    return m;
  };

  const growthOk = (arr) => {
    if (!arr || arr.length < 3) return false;
    if (arr.some((x) => x == null || x <= 0)) return false;
    for (let i = 1; i < arr.length; i++) {
      const g = (arr[i] - arr[i - 1]) / Math.abs(arr[i - 1]);
      if (!(g > 0.1)) return false;
    }
    return true;
  };

  const hits = [];
  let usableSeries = 0;
  for (const u of universe) {
    const f = fundMap.get(u.ticker);
    if (!f?.quarters?.length) continue;
    const qs = [...f.quarters].filter((q) => q.revenue > 0).slice(0, 4);
    if (qs.length < 3) continue;
    const ordered = [...qs].reverse();
    const om = ordered.map((q) => margin(q.operatingIncome, q.revenue));
    const gm = ordered.map((q) => margin(q.grossProfit, q.revenue));
    if (om.filter((x) => x != null).length >= 3 || gm.filter((x) => x != null).length >= 3) {
      usableSeries++;
    }
    if (!growthOk(om) && !growthOk(gm)) continue;
    hits.push({
      ticker: u.ticker,
      name: u.name,
      market: u.market,
      metrics: {
        opMargins: om.map((x) => (x != null ? round(x * 100, 2) : null)),
        grossMargins: gm.map((x) => (x != null ? round(x * 100, 2) : null)),
      },
    });
  }

  if (usableSeries === 0) {
    return {
      id: "margin-up",
      name: "公司獲利遞增",
      category: "財務",
      categoryGroup: "財務",
      xqTags: ["財務"],
      description: "目標：連續季營益率或毛利率成長 >10%。今日公開資料不足。",
      conditions: [
        cond("連續季營益率成長 >10%", "skip"),
        cond("或連續季毛利率成長 >10%", "skip"),
      ],
      hits: [],
      blockers,
      incomplete: true,
      incompleteLabel: "資料不足",
    };
  }

  return {
    id: "margin-up",
    name: "公司獲利遞增",
    category: "財務",
    categoryGroup: "財務",
    xqTags: ["財務"],
    description: "連續季營益率或毛利率成長 >10%（僅在 Yahoo 季報欄位齊全且非 0 時）。",
    conditions: [
      cond("連續季營益率成長 >10%", hits.length ? "pass" : "fail"),
      cond("或連續季毛利率成長 >10%", hits.length ? "pass" : "fail"),
    ],
    hits,
    blockers: hits.length
      ? []
      : ["有抓到部分可用季報序列，但無標的同時滿足連續成長 >10%"],
    incomplete: false,
  };
}

function buildMaBull(universe, ohlcvMap) {
  const hits = [];
  for (const u of universe) {
    const chart = ohlcvMap.get(u.ticker);
    if (!chart) continue;
    const m = techMetrics(chart.bars);
    if (m.sma5 == null || m.sma10 == null || m.sma20 == null || m.sma60 == null) continue;
    if (!(m.sma5 > m.sma10 && m.sma10 > m.sma20 && m.sma20 > m.sma60)) continue;
    if (!m.is5dHigh) continue;
    if (m.volRatioYday == null || !(m.volRatioYday > 2)) continue;
    hits.push({
      ticker: u.ticker,
      name: u.name || chart.name,
      market: u.market,
      currency: u.market === "TW" ? "TWD" : "USD",
      metrics: {
        price: round(m.price, 2),
        dayPct: round(m.dayPct, 2),
        sma5: round(m.sma5, 2),
        sma10: round(m.sma10, 2),
        sma20: round(m.sma20, 2),
        sma60: round(m.sma60, 2),
        volRatioYday: round(m.volRatioYday, 2),
        volToday: Math.round(m.volToday),
        volYday: Math.round(m.volYday),
        volTodayZhang:
          u.market === "TW" ? round(sharesToZhang(m.volToday), 1) : null,
        is5dHigh: true,
        pct5d: round(m.pct5d, 2),
      },
    });
  }
  hits.sort((a, b) => (b.metrics.volRatioYday ?? 0) - (a.metrics.volRatioYday ?? 0));
  return {
    id: "ma-bull",
    name: "均線多頭排列",
    category: "技術",
    categoryGroup: "價量",
    xqTags: ["技術", "價量"],
    description: "SMA5>SMA10>SMA20>SMA60，創新高＋量能放大。完全由 OHLCV 計算。",
    conditions: [
      cond("SMA5 > SMA10 > SMA20 > SMA60"),
      cond("今日創近 5 日高（最高價或收盤價 ≥ 前 5 日最高）"),
      cond("成交量 > 昨日成交量 × 2"),
    ],
    hits,
    blockers: [],
    incomplete: false,
  };
}

function buildInstSync(instDays, universe) {
  if (!instDays?.length) {
    return {
      id: "inst-sync",
      name: "法人同步做多",
      category: "籌碼",
      categoryGroup: "籌碼",
      xqTags: ["籌碼"],
      description: "外資／投信／自營商同步淨買超（僅台股公開三大法人）。",
      conditions: [
        cond("外資近 1 日淨買超 > 0", "skip"),
        cond("投信近 1 日淨買超 > 0", "skip"),
        cond("自營商近 1 日淨買超 > 0", "skip"),
        cond("三大法人近 5 日合計淨買超 > 0", "skip"),
      ],
      hits: [],
      blockers: ["公開籌碼接口今日無法取得"],
      incomplete: true,
      incompleteLabel: "公開籌碼接口今日無法取得",
    };
  }
  const hits = [];
  const twUniverse = universe.filter((u) => u.market === "TW");
  for (const u of twUniverse) {
    const code = u.ticker.replace(/\.TW$/, "").replace(/\.TWO$/, "");
    const { d1, sum5 } = mergeInstDay(instDays, code);
    if (!d1 || !sum5) continue;
    const f1 = d1.foreign ?? 0;
    const t1 = d1.trust ?? 0;
    const dlr1 = d1.dealer ?? 0;
    // sync long: all three net buy on 1d, and 5d total > 0
    if (!(f1 > 0 && t1 > 0 && dlr1 > 0)) continue;
    if (!(sum5.total > 0)) continue;
    // meaningful size: foreign 1d > 100張 (100,000 shares) soft threshold
    if (f1 < 100_000 && t1 < 50_000) continue;
    hits.push({
      ticker: u.ticker,
      name: u.name || d1.name,
      market: "TW",
      currency: "TWD",
      metrics: {
        foreignNet1dShares: f1,
        foreignNet1dZhang: round(sharesToZhang(f1), 1),
        trustNet1dShares: t1,
        trustNet1dZhang: round(sharesToZhang(t1), 1),
        dealerNet1dShares: dlr1,
        dealerNet1dZhang: round(sharesToZhang(dlr1), 1),
        instNet5dShares: sum5.total,
        instNet5dZhang: round(sharesToZhang(sum5.total), 1),
        instDaysCovered: sum5.days,
      },
    });
  }
  hits.sort((a, b) => (b.metrics.instNet5dShares ?? 0) - (a.metrics.instNet5dShares ?? 0));
  return {
    id: "inst-sync",
    name: "法人同步做多",
    category: "籌碼",
    categoryGroup: "籌碼",
    xqTags: ["籌碼"],
    description:
      "證交所／櫃買公開三大法人：外資＋投信＋自營商同日淨買，且近 5 日法人合計淨買。非券商專有籌碼庫。",
    conditions: [
      cond("外資近 1 日淨買超 > 0（股）"),
      cond("投信近 1 日淨買超 > 0（股）"),
      cond("自營商近 1 日淨買超 > 0（股）"),
      cond("三大法人近 5 日合計淨買超 > 0"),
      cond("外資或投信單日買超達基本門檻（過濾噪音）"),
    ],
    hits: hits.slice(0, 80),
    blockers: [],
    incomplete: false,
    notes: [
      `籌碼交易日樣本：${instDays.map((d) => d.ymd).join(", ")}`,
      "單位標示：公開資料為「股」；1 張 = 1,000 股。",
    ],
  };
}

function buildUltraShort(universe, ohlcvMap) {
  const hits = [];
  const unchecked = ["融資餘額／增減（無公開穩定接口 → 未檢查）", "融券餘額／增減（無公開穩定接口 → 未檢查）"];
  for (const u of universe) {
    const chart = ohlcvMap.get(u.ticker);
    if (!chart) continue;
    const m = techMetrics(chart.bars);
    if (!(m.price > 10)) continue;
    const liqOk =
      u.market === "TW"
        ? m.avgVol5 != null && m.avgVol5 > TW_MIN_AVG_VOL_SHARES
        : m.avgVol5 != null && m.avgVol5 > US_MIN_AVG_VOL;
    if (!liqOk) continue;
    if (m.rsi == null || m.rsiPrev == null) continue;
    // RSI rising cross / rising while below 50
    const rsiRisingBelow50 = m.rsi > m.rsiPrev && m.rsi < 50;
    if (!rsiRisingBelow50) continue;
    if (m.ampPct == null || !(m.ampPct > 3)) continue;
    hits.push({
      ticker: u.ticker,
      name: u.name || chart.name,
      market: u.market,
      currency: u.market === "TW" ? "TWD" : "USD",
      metrics: {
        price: round(m.price, 2),
        dayPct: round(m.dayPct, 2),
        rsi: round(m.rsi, 2),
        rsiPrev: round(m.rsiPrev, 2),
        ampPct: round(m.ampPct, 2),
        avgVol5Shares: Math.round(m.avgVol5),
        avgVol5Zhang: u.market === "TW" ? round(sharesToZhang(m.avgVol5), 1) : null,
        pct5d: round(m.pct5d, 2),
      },
    });
  }
  hits.sort((a, b) => (b.metrics.ampPct ?? 0) - (a.metrics.ampPct ?? 0));
  return {
    id: "ultra-short",
    name: "超短線作多",
    category: "綜合",
    categoryGroup: "精選",
    xqTags: ["精選", "價量", "技術"],
    description: "價＞10、流動性、RSI 在 50 下拐頭向上、當日振幅＞3%。融資融券欄位公開不足故未檢查。",
    conditions: [
      cond("股價 > 10"),
      cond(`5 日均量具流動性（台股 > ${TW_LIQUID_ZHANG} 張）`),
      cond("RSI(14) 在 50 以下且較前一日上升（黃金交叉代理）"),
      cond("當日振幅（高−低）／昨收 > 3%"),
      cond("融資／融券條件", "skip"),
    ],
    hits,
    blockers: [],
    unchecked,
    incomplete: false,
  };
}

function round(n, d) {
  if (n == null || Number.isNaN(n)) return null;
  const p = 10 ** d;
  return Math.round(n * p) / p;
}

// —— main ——
async function main() {
  console.log("▶ run-strategies: start");
  let latest = {};
  try {
    latest = JSON.parse(fs.readFileSync(LATEST, "utf8"));
  } catch {
    console.warn("latest.json missing — continuing with empty lists");
  }

  const todayTP = taipeiYmd();
  // If before ~09:00 Taipei market open, prefer previous calendar day walk
  const session = await findLatestTwseSession(todayTP);
  if (!session) {
    console.error("Could not load TWSE MI_INDEX — aborting technical still possible via Yahoo only");
  }
  const asOfYmd = session?.ymd || todayTP;
  console.log("TW session", asOfYmd, "MI rows", session?.rows?.length ?? 0);

  // Universe TW: top volume + existing picks
  const existingTw = [...(latest.tw || []), ...(latest.top5 || []).filter((x) => x.market === "TW")];
  const peMap = new Map();
  const nameMap = new Map();
  let twCandidates = [];
  if (session?.rows?.length) {
    const sorted = [...session.rows].sort((a, b) => (b.volShares || 0) - (a.volShares || 0));
    twCandidates = sorted.slice(0, 140);
    for (const r of session.rows) {
      if (r.pe != null) peMap.set(r.ticker, r.pe);
      nameMap.set(r.ticker, r.name);
    }
  }
  const twSet = new Map();
  for (const r of twCandidates) {
    twSet.set(r.ticker, {
      ticker: r.ticker,
      name: r.name,
      market: "TW",
      close: r.close,
    });
  }
  for (const s of existingTw) {
    const t = s.ticker.endsWith(".TW") || s.ticker.endsWith(".TWO") ? s.ticker : `${s.ticker}.TW`;
    if (!twSet.has(t)) {
      twSet.set(t, { ticker: t, name: s.name || nameMap.get(t) || t, market: "TW" });
    } else if (s.name) twSet.get(t).name = s.name;
  }
  // Extra liquid anchors
  for (const code of [
    "2330",
    "2317",
    "2308",
    "2454",
    "2382",
    "2303",
    "2881",
    "2882",
    "2891",
    "2886",
    "2002",
    "1301",
    "1303",
    "2412",
    "3008",
    "6669",
    "3037",
    "3711",
    "2376",
    "2357",
  ]) {
    const t = `${code}.TW`;
    if (!twSet.has(t))
      twSet.set(t, { ticker: t, name: nameMap.get(t) || t, market: "TW" });
  }

  const existingUs = [...(latest.us || []), ...(latest.top5 || []).filter((x) => x.market === "US")];
  const usSet = new Map();
  for (const s of existingUs) {
    usSet.set(s.ticker, { ticker: s.ticker, name: s.name || s.ticker, market: "US" });
  }
  // ensure top5 US covered
  for (const t of ["AAPL", "NVDA", "MSFT", "META", "AMD", "CRWD", "ZS", "ARM", "LLY", "PANW"]) {
    if (!usSet.has(t)) usSet.set(t, { ticker: t, name: t, market: "US" });
  }

  const universe = [...twSet.values(), ...usSet.values()];
  console.log("Universe TW", twSet.size, "US", usSet.size, "total", universe.length);

  // Institutional 5d
  console.log("Fetching institutional days…");
  const instDays = await collectInstDays(asOfYmd, 5);
  console.log(
    "Inst days",
    instDays.length,
    instDays.map((d) => d.ymd).join(",")
  );

  // OHLCV
  console.log("Fetching Yahoo OHLCV…");
  const ohlcvMap = new Map();
  let ok = 0;
  let fail = 0;
  await mapPool(universe, CONCURRENCY, async (u) => {
    try {
      const c = await yahooChart(u.ticker);
      if (c) {
        ohlcvMap.set(u.ticker, c);
        if (!u.name || u.name === u.ticker) u.name = c.name;
        ok++;
      } else fail++;
    } catch {
      fail++;
    }
    await sleep(80);
  });
  console.log("OHLCV ok", ok, "fail", fail);

  // Fundamentals for PE growth (sample liquid + US) — rate limited
  console.log("Fetching Yahoo fundamentals (subset)…");
  await ensureYahooCrumb();
  const fundMap = new Map();
  const fundTargets = [
    ...[...twSet.values()].slice(0, 60),
    ...usSet.values(),
  ];
  await mapPool(fundTargets, 3, async (u) => {
    try {
      const f = await yahooFundamentals(u.ticker);
      if (f) {
        fundMap.set(u.ticker, f);
        if (f.trailingPE != null && !peMap.has(u.ticker)) peMap.set(u.ticker, f.trailingPE);
      }
    } catch {
      /* ignore */
    }
    await sleep(120);
  });
  console.log("Fundamentals", fundMap.size, "PE map", peMap.size);

  const strategies = [
    buildMaBull(universe, ohlcvMap),
    buildUltraShort(universe, ohlcvMap),
    buildInstSync(instDays, [...twSet.values()]),
    buildPeterLynch(universe, ohlcvMap, fundMap, peMap),
    buildMarginGrowth(universe, fundMap),
  ];

  // XQ-like category order for UI
  const categoryOrder = ["精選", "價量", "籌碼", "財務", "大師"];

  const payload = {
    asOf: new Date().toISOString(),
    sessionDate: asOfYmd,
    timezone: "Asia/Taipei",
    disclaimer:
      "本策略選股依公開行情／證交所公開資料做邏輯篩選，不是投資建議；非 XQ／券商專有資料庫，不保證與商業軟體結果一致。",
    universe: {
      tw: twSet.size,
      us: usSet.size,
      ohlcvOk: ok,
      ohlcvFail: fail,
    },
    categoryOrder,
    strategies,
    glossaryHint:
      "名詞（本益比、營益率、毛利率、外資、投信、自營商、均線多頭、RSI、振幅、張）見站內名詞小辭典。",
    exportNote: "可複製本 JSON（strategy-screener.json）自行回測；站內不提供券商下單。",
  };

  fs.mkdirSync(path.dirname(OUT_PUBLIC), { recursive: true });
  fs.writeFileSync(OUT_PUBLIC, JSON.stringify(payload, null, 2));
  console.log("Wrote", OUT_PUBLIC);
  if (fs.existsSync(path.dirname(OUT_DOCS))) {
    fs.writeFileSync(OUT_DOCS, JSON.stringify(payload, null, 2));
    console.log("Wrote", OUT_DOCS);
  }

  for (const s of strategies) {
    console.log(
      `  ${s.name}: hits=${s.hits.length}` +
        (s.incomplete ? ` [${s.incompleteLabel || "incomplete"}]` : "")
    );
  }
  console.log("▶ done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
