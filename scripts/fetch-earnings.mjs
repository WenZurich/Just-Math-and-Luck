#!/usr/bin/env node
/**
 * Fetch US Magnificent 7 + high-attention earnings digest (Yahoo public APIs only).
 * Writes public/data/earnings-digest.json (+ docs/data/ when present).
 *
 * Manual: npm run fetch-earnings
 * Weekday routine: run with 每日數學選股 / after daily-scan (see daily-scan note).
 *
 * Never invents numbers — missing fields stay null and UI shows 資料不足.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_PUBLIC = path.join(ROOT, "public/data/earnings-digest.json");
const OUT_DOCS = path.join(ROOT, "docs/data/earnings-digest.json");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const SLEEP_MS = 350;
const WATCHLIST_TARGET = 8;
const WINDOW_PRIMARY_DAYS = 14;
const WINDOW_RECENT_DAYS = 7;
const WINDOW_FALLBACK_DAYS = 45;

/** Mag7 — GOOGL primary Class A; GOOG Class C same company */
const MAG7 = [
  { ticker: "AAPL", nameHint: "Apple" },
  { ticker: "MSFT", nameHint: "Microsoft" },
  { ticker: "NVDA", nameHint: "NVIDIA" },
  { ticker: "AMZN", nameHint: "Amazon" },
  { ticker: "GOOGL", nameHint: "Alphabet (Class A)" },
  { ticker: "GOOG", nameHint: "Alphabet (Class C)" },
  { ticker: "META", nameHint: "Meta Platforms" },
  { ticker: "TSLA", nameHint: "Tesla" },
];

/** Mega-cap calendar pool (ex Mag7) for high-attention earnings */
const MEGA_CAPS = [
  "BRK-B",
  "AVGO",
  "JPM",
  "LLY",
  "V",
  "WMT",
  "XOM",
  "MA",
  "ORCL",
  "COST",
  "HD",
  "PG",
  "JNJ",
  "BAC",
  "ABBV",
  "CRM",
  "KO",
  "NFLX",
  "AMD",
  "PEP",
  "CSCO",
  "TMO",
  "DIS",
  "INTC",
  "QCOM",
  "IBM",
  "GE",
  "CAT",
  "GS",
  "MS",
];

const SELECTION_RULE =
  "Primary: non-Mag7 mega-caps with nextEarningsDate within next 14 calendar days, sorted by marketCap desc. " +
  "Also: Yahoo most_actives with earnings in next 14d OR reported in last 7d. " +
  "Fallback fill: nearest upcoming mega-cap earnings within 45d (tagged calendar_highlight). Cap 8. " +
  "Sources: Yahoo Finance public quoteSummary + screener only; null → 資料不足.";

const MODULES = [
  "calendarEvents",
  "earningsHistory",
  "defaultKeyStatistics",
  "summaryDetail",
  "summaryProfile",
  "financialData",
  "price",
  "incomeStatementHistoryQuarterly",
].join(",");

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function round(n, d = 4) {
  if (n == null || !Number.isFinite(n)) return null;
  const p = 10 ** d;
  return Math.round(n * p) / p;
}

function raw(obj) {
  if (obj == null) return null;
  if (typeof obj === "number") return Number.isFinite(obj) ? obj : null;
  if (typeof obj === "object" && "raw" in obj) {
    const n = obj.raw;
    return typeof n === "number" && Number.isFinite(n) ? n : null;
  }
  return null;
}

function fmtDate(unixOrObj) {
  if (unixOrObj == null) return null;
  if (typeof unixOrObj === "object" && unixOrObj.fmt) return unixOrObj.fmt;
  const n = typeof unixOrObj === "number" ? unixOrObj : raw(unixOrObj);
  if (n == null) return null;
  // Yahoo sometimes returns seconds
  const ms = n > 1e12 ? n : n * 1000;
  try {
    return new Date(ms).toISOString().slice(0, 10);
  } catch {
    return null;
  }
}

function truncatePlain(text, max = 220) {
  if (!text || typeof text !== "string") return null;
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (!cleaned) return null;
  if (cleaned.length <= max) return cleaned;
  const cut = cleaned.slice(0, max);
  const lastStop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("。"));
  if (lastStop > 80) return cut.slice(0, lastStop + 1).trim();
  return cut.trim() + "…";
}

async function yahooSession() {
  const warm = await fetch("https://fc.yahoo.com", {
    headers: { "User-Agent": UA },
    redirect: "manual",
  });
  const cookies = (warm.headers.getSetCookie?.() || [])
    .map((c) => c.split(";")[0])
    .join("; ");
  const crumbRes = await fetch(
    "https://query1.finance.yahoo.com/v1/test/getcrumb",
    { headers: { "User-Agent": UA, Cookie: cookies } }
  );
  if (!crumbRes.ok) {
    return { ok: false, error: `crumb HTTP ${crumbRes.status}`, cookies: "", crumb: "" };
  }
  const crumb = (await crumbRes.text()).trim();
  if (!crumb || crumb.includes("{")) {
    return { ok: false, error: "crumb parse failed", cookies, crumb: "" };
  }
  return { ok: true, cookies, crumb };
}

async function yahooJson(session, urlPath) {
  const sep = urlPath.includes("?") ? "&" : "?";
  const url = `https://query1.finance.yahoo.com${urlPath}${sep}crumb=${encodeURIComponent(session.crumb)}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": UA,
      Cookie: session.cookies,
      Accept: "application/json",
    },
  });
  if (!res.ok) return { ok: false, status: res.status, data: null };
  try {
    return { ok: true, status: res.status, data: await res.json() };
  } catch {
    return { ok: false, status: res.status, data: null };
  }
}

function yoyFromQuarters(series) {
  if (!Array.isArray(series) || series.length < 4) {
    return { pct: null, incomplete: true };
  }
  const latest = series[0];
  const yearAgo = series[3];
  if (latest == null || yearAgo == null || yearAgo === 0) {
    return { pct: null, incomplete: true };
  }
  return {
    pct: round(((latest - yearAgo) / Math.abs(yearAgo)) * 100, 2),
    incomplete: false,
  };
}

function pickLastReport(history) {
  if (!Array.isArray(history) || !history.length) return null;
  // Yahoo: -1q is most recent; list may be oldest-first
  const sorted = [...history].sort((a, b) => {
    const pa = String(a.period || "");
    const pb = String(b.period || "");
    // -1q > -2q > ...
    const na = Number(pa.replace(/[^0-9-]/g, "")) || 0;
    const nb = Number(pb.replace(/[^0-9-]/g, "")) || 0;
    return nb - na; // -1 before -4
  });
  // Prefer period === '-1q'
  const last = history.find((h) => h.period === "-1q") || sorted[sorted.length - 1] || history[history.length - 1];
  if (!last) return null;
  return {
    period: last.period || null,
    quarter: last.quarter?.fmt || fmtDate(last.quarter) || null,
    epsActual: round(raw(last.epsActual), 4),
    epsEstimate: round(raw(last.epsEstimate), 4),
    epsSurprisePct: round(raw(last.surprisePercent) != null ? raw(last.surprisePercent) * 100 : null, 2),
    currency: last.currency || "USD",
  };
}

function buildNotes(row) {
  const notes = [];
  if (row.ticker === "GOOG") {
    notes.push("Alphabet Class C；與 GOOGL 同一公司，財報日通常一致");
  }
  if (row.ticker === "GOOGL") {
    notes.push("Alphabet Class A；GOOG 為 Class C");
  }
  if (row.nextEarningsDate) {
    const est = row.nextEarningsDateIsEstimate ? "（預估日）" : "";
    notes.push(`下次財報約 ${row.nextEarningsDate}${est}`);
  } else {
    notes.push("下次財報日：資料不足");
  }
  if (row.lastReport?.quarter) {
    const e = row.lastReport.epsActual != null ? `EPS ${row.lastReport.epsActual}` : "EPS 資料不足";
    notes.push(`最近一季（${row.lastReport.quarter}）：${e}`);
  }
  if (row.consensusEpsNext != null) {
    notes.push(`市場預估下次 EPS 約 ${row.consensusEpsNext}（Yahoo）`);
  }
  if (row.missingFields?.length) {
    notes.push(`缺欄：${row.missingFields.join(", ")}`);
  }
  return notes;
}

function whatToWatch(row) {
  const bits = [];
  if (row.nextEarningsDate) {
    bits.push(`關注 ${row.nextEarningsDate} 前後的營收與 EPS 是否達預估`);
  } else {
    bits.push("財報日未定時，先核對官方 IR 行事曆");
  }
  if (row.revenueYoYPct != null) {
    bits.push(
      row.revenueYoYPct >= 0
        ? `近期營收 YoY 約 +${row.revenueYoYPct}%（Yahoo）`
        : `近期營收 YoY 約 ${row.revenueYoYPct}%（Yahoo）`
    );
  }
  if (row.epsYoYPct != null) {
    bits.push(
      row.epsYoYPct >= 0
        ? `獲利成長約 +${row.epsYoYPct}%（Yahoo earningsGrowth）`
        : `獲利成長約 ${row.epsYoYPct}%（Yahoo earningsGrowth）`
    );
  }
  if (row.pe == null) bits.push("本益比資料不足，勿硬套估值");
  return bits.join("；") || "資料不足，僅能等待公開財報";
}

async function fetchTicker(session, ticker, nameHint) {
  const res = await yahooJson(
    session,
    `/v10/finance/quoteSummary/${encodeURIComponent(ticker)}?modules=${MODULES}`
  );
  if (!res.ok) {
    return {
      ticker,
      name: nameHint || ticker,
      ok: false,
      blocker: `Yahoo quoteSummary HTTP ${res.status}`,
      nextEarningsDate: null,
      nextEarningsDateIsEstimate: null,
      lastReport: null,
      revenueYoYPct: null,
      epsYoYPct: null,
      pe: null,
      forwardPe: null,
      marketCap: null,
      whatItDoes: null,
      whatToWatch: "資料不足",
      notes: ["資料不足"],
      missingFields: ["all"],
      sources: ["Yahoo Finance quoteSummary"],
    };
  }
  const block = res.data?.quoteSummary?.result?.[0];
  if (!block) {
    return {
      ticker,
      name: nameHint || ticker,
      ok: false,
      blocker: "Yahoo quoteSummary empty",
      nextEarningsDate: null,
      nextEarningsDateIsEstimate: null,
      lastReport: null,
      revenueYoYPct: null,
      epsYoYPct: null,
      pe: null,
      forwardPe: null,
      marketCap: null,
      whatItDoes: null,
      whatToWatch: "資料不足",
      notes: ["資料不足"],
      missingFields: ["all"],
      sources: ["Yahoo Finance quoteSummary"],
    };
  }

  const cal = block.calendarEvents?.earnings || {};
  const dates = Array.isArray(cal.earningsDate) ? cal.earningsDate : [];
  const nextEarningsDate = dates.length ? fmtDate(dates[0]) : null;
  const nextEarningsDateIsEstimate =
    typeof cal.isEarningsDateEstimate === "boolean" ? cal.isEarningsDateEstimate : null;

  const ks = block.defaultKeyStatistics || {};
  const sd = block.summaryDetail || {};
  const fd = block.financialData || {};
  const price = block.price || {};
  const hist = block.incomeStatementHistoryQuarterly?.incomeStatementHistory || [];
  const revs = hist.map((h) => raw(h.totalRevenue));
  const revYoyQ = yoyFromQuarters(revs);

  // Prefer Yahoo financialData growth (documented as YoY); else quarterly revenue YoY
  const revenueYoYPct =
    raw(fd.revenueGrowth) != null
      ? round(raw(fd.revenueGrowth) * 100, 2)
      : revYoyQ.pct;
  const epsYoYPct =
    raw(fd.earningsGrowth) != null ? round(raw(fd.earningsGrowth) * 100, 2) : null;

  const pe = round(raw(sd.trailingPE) ?? raw(ks.trailingPE), 2);
  const forwardPe = round(raw(sd.forwardPE) ?? raw(ks.forwardPE), 2);
  const marketCap = raw(sd.marketCap) ?? raw(price.marketCap) ?? null;
  const name =
    price.shortName || price.longName || nameHint || ticker;
  const whatItDoes = truncatePlain(block.summaryProfile?.longBusinessSummary);

  const lastReport = pickLastReport(block.earningsHistory?.history || []);
  const consensusEpsNext = round(raw(cal.earningsAverage), 4);
  const consensusRevNext = raw(cal.revenueAverage);

  const missingFields = [];
  if (!nextEarningsDate) missingFields.push("nextEarningsDate");
  if (!lastReport) missingFields.push("lastReport");
  else {
    if (lastReport.epsActual == null) missingFields.push("lastReport.epsActual");
  }
  if (revenueYoYPct == null) missingFields.push("revenueYoYPct");
  if (epsYoYPct == null) missingFields.push("epsYoYPct");
  if (pe == null) missingFields.push("pe");
  if (!whatItDoes) missingFields.push("whatItDoes");
  if (marketCap == null) missingFields.push("marketCap");

  const row = {
    ticker,
    name,
    ok: true,
    blocker: null,
    nextEarningsDate,
    nextEarningsDateIsEstimate,
    lastReport,
    revenueYoYPct,
    revenueYoYSource:
      raw(fd.revenueGrowth) != null
        ? "Yahoo financialData.revenueGrowth"
        : revYoyQ.incomplete
          ? null
          : "quarterly incomeStatement YoY (q0 vs q3)",
    epsYoYPct,
    epsYoYSource:
      epsYoYPct != null ? "Yahoo financialData.earningsGrowth" : null,
    pe,
    forwardPe,
    marketCap,
    consensusEpsNext,
    consensusRevNext,
    whatItDoes,
    missingFields,
    sources: [
      "Yahoo Finance quoteSummary (calendarEvents, earningsHistory, financialData, summaryDetail, summaryProfile)",
    ],
  };
  row.notes = buildNotes(row);
  row.whatToWatch = whatToWatch(row);
  return row;
}

function daysFrom(asOfDate, ymd) {
  if (!ymd) return null;
  const a = Date.UTC(asOfDate.getUTCFullYear(), asOfDate.getUTCMonth(), asOfDate.getUTCDate());
  const parts = ymd.split("-").map(Number);
  if (parts.length !== 3 || parts.some((x) => !Number.isFinite(x))) return null;
  const b = Date.UTC(parts[0], parts[1] - 1, parts[2]);
  return Math.round((b - a) / 86400000);
}

async function fetchMostActives(session) {
  const res = await yahooJson(
    session,
    `/v1/finance/screener/predefined/saved?formatted=false&lang=en-US&region=US&scrIds=most_actives&count=25`
  );
  if (!res.ok) return { ok: false, tickers: [], error: `most_actives HTTP ${res.status}` };
  const quotes = res.data?.finance?.result?.[0]?.quotes || [];
  return {
    ok: true,
    tickers: quotes
      .map((q) => ({
        ticker: String(q.symbol || "").toUpperCase(),
        marketCap: q.marketCap ?? null,
        name: q.shortName || q.longName || q.symbol,
      }))
      .filter((q) => q.ticker && /^[A-Z][A-Z0-9.-]{0,11}$/.test(q.ticker)),
    error: null,
  };
}

async function main() {
  const asOf = new Date().toISOString();
  const asOfDate = new Date(asOf);
  const session = await yahooSession();
  let sessionBlocker = null;
  if (!session.ok) {
    sessionBlocker = session.error || "Yahoo session failed";
    console.warn("Yahoo session blocker:", sessionBlocker);
  }

  const mag7 = [];
  const mag7Set = new Set(MAG7.map((m) => m.ticker));

  for (const m of MAG7) {
    if (!session.ok) {
      mag7.push({
        ticker: m.ticker,
        name: m.nameHint,
        ok: false,
        blocker: sessionBlocker,
        nextEarningsDate: null,
        nextEarningsDateIsEstimate: null,
        lastReport: null,
        revenueYoYPct: null,
        epsYoYPct: null,
        pe: null,
        forwardPe: null,
        marketCap: null,
        whatItDoes: null,
        whatToWatch: "資料不足",
        notes: ["資料不足"],
        missingFields: ["session"],
        sources: ["Yahoo Finance quoteSummary"],
      });
      continue;
    }
    console.log("mag7", m.ticker);
    const row = await fetchTicker(session, m.ticker, m.nameHint);
    mag7.push(row);
    await sleep(SLEEP_MS);
  }

  // —— watchlistHot ——
  const watchlistHot = [];
  const seen = new Set(mag7Set);
  let actives = { ok: false, tickers: [], error: null };

  if (session.ok) {
    actives = await fetchMostActives(session);
    await sleep(SLEEP_MS);

    const candidates = [];
    const poolTickers = new Map();
    for (const t of MEGA_CAPS) {
      if (!mag7Set.has(t)) poolTickers.set(t, { ticker: t, reasonPool: "mega_cap" });
    }
    for (const a of actives.tickers || []) {
      if (!mag7Set.has(a.ticker)) {
        const prev = poolTickers.get(a.ticker);
        poolTickers.set(a.ticker, {
          ticker: a.ticker,
          nameHint: a.name,
          marketCapHint: a.marketCap,
          reasonPool: prev ? "mega_cap+most_actives" : "most_actives",
        });
      }
    }

    for (const [ticker, meta] of poolTickers) {
      console.log("watch-cand", ticker);
      const row = await fetchTicker(session, ticker, meta.nameHint);
      const days = daysFrom(asOfDate, row.nextEarningsDate);
      let lastReportDaysAgo = null;
      if (row.lastReport?.quarter) {
        // approximate: quarter end may be weeks before report; use earnings call if we only have quarter end — skip strict recent unless we have date
        lastReportDaysAgo = null;
      }
      row._daysToEarnings = days;
      row._meta = meta;
      candidates.push(row);
      await sleep(SLEEP_MS);
    }

    const primary = candidates
      .filter((c) => c._daysToEarnings != null && c._daysToEarnings >= 0 && c._daysToEarnings <= WINDOW_PRIMARY_DAYS)
      .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0));

    const fromActivesUpcoming = candidates
      .filter(
        (c) =>
          c._meta?.reasonPool?.includes("most_actives") &&
          c._daysToEarnings != null &&
          c._daysToEarnings >= 0 &&
          c._daysToEarnings <= WINDOW_PRIMARY_DAYS
      )
      .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0));

    // Recently reported: lastReport exists and next earnings is far / just passed (days negative small)
    const recentlyReported = candidates
      .filter((c) => {
        if (!c.lastReport?.quarter) return false;
        if (c._daysToEarnings == null) return true; // reported, no next date yet
        return c._daysToEarnings < 0 && c._daysToEarnings >= -WINDOW_RECENT_DAYS;
      })
      .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0));

    const fallback = candidates
      .filter(
        (c) =>
          c._daysToEarnings != null &&
          c._daysToEarnings > WINDOW_PRIMARY_DAYS &&
          c._daysToEarnings <= WINDOW_FALLBACK_DAYS
      )
      .sort((a, b) => a._daysToEarnings - b._daysToEarnings || (b.marketCap || 0) - (a.marketCap || 0));

    const pick = (list, tag) => {
      for (const c of list) {
        if (watchlistHot.length >= WATCHLIST_TARGET) break;
        if (seen.has(c.ticker)) continue;
        seen.add(c.ticker);
        const { _daysToEarnings, _meta, ...rest } = c;
        watchlistHot.push({
          ...rest,
          selectionTag: tag,
          daysToEarnings: _daysToEarnings,
          pool: _meta?.reasonPool || null,
        });
      }
    };

    pick(primary, "mega_cap_earnings_next_14d");
    pick(fromActivesUpcoming, "yahoo_most_actives_earnings_next_14d");
    pick(recentlyReported, "recently_reported");
    pick(fallback, "calendar_highlight_within_45d");
  }

  const digest = {
    asOf,
    market: "US",
    twStub: {
      status: "planned",
      note: "台股財報稍後開放（TW stub）",
    },
    source: "Yahoo Finance public quoteSummary + most_actives screener (crumb session)",
    disclaimer:
      "非投資建議。公開財報／預估摘要僅供教育參考，不構成個人化投資建議。數字來自 Yahoo，缺欄標資料不足。",
    selectionRule: SELECTION_RULE,
    refreshHint:
      "npm run fetch-earnings  （平日與每日數學選股一併跑；daily-scan 結尾亦可呼叫）",
    sessionOk: session.ok,
    sessionBlocker,
    mag7,
    watchlistHot,
    watchlistMeta: {
      target: WATCHLIST_TARGET,
      primaryWindowDays: WINDOW_PRIMARY_DAYS,
      recentWindowDays: WINDOW_RECENT_DAYS,
      fallbackWindowDays: WINDOW_FALLBACK_DAYS,
      mostActivesOk: actives.ok,
      mostActivesError: actives.error,
      count: watchlistHot.length,
    },
  };

  fs.mkdirSync(path.dirname(OUT_PUBLIC), { recursive: true });
  fs.writeFileSync(OUT_PUBLIC, JSON.stringify(digest, null, 2) + "\n");
  console.log("wrote", OUT_PUBLIC, "mag7=", mag7.length, "watch=", watchlistHot.length);

  if (fs.existsSync(path.dirname(OUT_DOCS))) {
    fs.writeFileSync(OUT_DOCS, JSON.stringify(digest, null, 2) + "\n");
    console.log("wrote", OUT_DOCS);
  }

  // Field population summary
  for (const row of mag7) {
    const fields = ["nextEarningsDate", "revenueYoYPct", "epsYoYPct", "pe", "lastReport", "whatItDoes"];
    const populated = fields.filter((f) => {
      if (f === "lastReport") return row.lastReport != null;
      return row[f] != null && row[f] !== "";
    });
    const missing = fields.filter((f) => !populated.includes(f));
    console.log(
      `  ${row.ticker}: ok=${populated.join(",") || "—"} | 資料不足=${missing.join(",") || "—"}`
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
