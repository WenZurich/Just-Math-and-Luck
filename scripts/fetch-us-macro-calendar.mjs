#!/usr/bin/env node
/**
 * Fetch high-impact US macro / market-moving calendar → public/data/us-macro-calendar.json
 * (+ docs/data when present).
 *
 * Source: XOOMAR public calendar (agency schedules: BLS / BEA / Census / Fed / DOL).
 *   https://xoomar.com/api/markets/calendar
 * Never invents dates — live fetch only; on failure exits non-zero without wiping last-good file.
 *
 * Manual: npm run fetch-us-macro
 * Optional with daily-scan: FETCH_US_MACRO=1 node scripts/daily-scan.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_PUBLIC = path.join(ROOT, "public/data/us-macro-calendar.json");
const OUT_DOCS = path.join(ROOT, "docs/data/us-macro-calendar.json");

const UA =
  "Mozilla/5.0 (compatible; JustMathAndLuck/1.0; +https://github.com/WenZurich/Just-Math-and-Luck)";
const SOURCE_URL = "https://xoomar.com/api/markets/calendar";
const SOURCE_DOCS = "https://xoomar.com/markets/api/calendar";
const WINDOW_PAST_DAYS = 0;
const WINDOW_FORWARD_DAYS = 35;
const MAX_EVENTS = 24;

/** Map agency eventName → stable key for i18n short labels */
const EVENT_RULES = [
  { key: "fomcDecision", re: /FOMC\s+Rate\s+Decision/i },
  { key: "fomcMinutes", re: /FOMC\s+Minutes/i },
  { key: "cpi", re: /\bCPI\b|Consumer Price Index/i },
  { key: "ppi", re: /\bPPI\b|Producer Price Index/i },
  { key: "pce", re: /\bPCE\b|Personal Income and Outlays/i },
  { key: "nfp", re: /Nonfarm Payrolls|Employment Situation/i },
  { key: "joblessClaims", re: /Initial Jobless Claims/i },
  { key: "gdp", re: /\bGDP\b/i },
  { key: "retailSales", re: /Retail Sales/i },
  { key: "ismMfg", re: /ISM\s+Manufactur/i },
  { key: "ismServices", re: /ISM\s+Services/i },
  { key: "jolts", re: /\bJOLTS\b/i },
];

const HIGH_IMPACT_KEYS = new Set([
  "fomcDecision",
  "fomcMinutes",
  "cpi",
  "ppi",
  "pce",
  "nfp",
  "joblessClaims",
  "gdp",
  "retailSales",
  "ismMfg",
  "ismServices",
]);

/** Official agency release / schedule hubs (real public URLs — never invent). */
const OFFICIAL_URLS = {
  cpi: "https://www.bls.gov/schedule/news_release/cpi.htm",
  ppi: "https://www.bls.gov/schedule/news_release/ppi.htm",
  nfp: "https://www.bls.gov/schedule/news_release/empsit.htm",
  jolts: "https://www.bls.gov/schedule/news_release/jolts.htm",
  pce: "https://www.bea.gov/data/personal-consumption-expenditures-price-index",
  gdp: "https://www.bea.gov/data/gdp/gross-domestic-product",
  joblessClaims: "https://www.dol.gov/ui/data.pdf",
  retailSales: "https://www.census.gov/retail/index.html",
  fomcDecision: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
  fomcMinutes: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
  ismMfg: "https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/",
  ismServices:
    "https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/",
};

function officialUrlFor(eventKey, source) {
  if (eventKey && OFFICIAL_URLS[eventKey]) return OFFICIAL_URLS[eventKey];
  const src = String(source || "").toLowerCase();
  if (src === "bls") return "https://www.bls.gov/schedule/";
  if (src === "bea") return "https://www.bea.gov/news/schedule";
  if (src === "fed") return "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm";
  if (src === "dol") return "https://www.dol.gov/ui/data.pdf";
  if (src === "census") return "https://www.census.gov/economic-indicators/";
  return null;
}

function ymdInTz(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const get = (t) => parts.find((p) => p.type === t)?.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function addDaysYmd(ymd, days) {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString().slice(0, 10);
}

function classifyEvent(eventName) {
  for (const rule of EVENT_RULES) {
    if (rule.re.test(eventName || "")) return rule.key;
  }
  return null;
}

function shouldInclude(row, eventKey) {
  if (!eventKey) return false;
  if (row.importance === "high") return HIGH_IMPACT_KEYS.has(eventKey);
  // Always keep FOMC minutes / ISM even when agency tags med
  if (eventKey === "fomcMinutes" || eventKey === "fomcDecision") return true;
  if (eventKey === "ismMfg" || eventKey === "ismServices") return true;
  if (eventKey === "gdp" && /Advance|Second|Third/i.test(row.eventName || "")) return true;
  return false;
}

function shortNameFallback(eventKey, eventName) {
  const map = {
    fomcDecision: "FOMC Decision",
    fomcMinutes: "FOMC Minutes",
    cpi: "CPI",
    ppi: "PPI",
    pce: "PCE",
    nfp: "NFP",
    joblessClaims: "Jobless Claims",
    gdp: "GDP",
    retailSales: "Retail Sales",
    ismMfg: "ISM Mfg",
    ismServices: "ISM Services",
    jolts: "JOLTS",
  };
  return map[eventKey] || String(eventName || "").slice(0, 40);
}

async function fetchCalendar(from, to) {
  const url = `${SOURCE_URL}?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
  const res = await fetch(url, {
    headers: { Accept: "application/json", "User-Agent": UA },
  });
  if (!res.ok) {
    throw new Error(`XOOMAR calendar HTTP ${res.status}`);
  }
  const json = await res.json();
  if (!json || !Array.isArray(json.data)) {
    throw new Error("XOOMAR calendar: unexpected payload (no data[])");
  }
  return json;
}

function normalizeEvents(rawList, fromYmd, toYmd) {
  const out = [];
  for (const row of rawList) {
    const eventKey = classifyEvent(row.eventName);
    if (!shouldInclude(row, eventKey)) continue;
    const scheduledAt = row.scheduledAt;
    if (!scheduledAt || Number.isNaN(Date.parse(scheduledAt))) continue;
    const dayEt = ymdInTz(new Date(scheduledAt), "America/New_York");
    if (dayEt < fromYmd || dayEt > toYmd) continue;
    out.push({
      id: `${eventKey}-${scheduledAt}`,
      eventKey,
      eventName: row.eventName,
      shortName: shortNameFallback(eventKey, row.eventName),
      importance: row.importance === "high" ? "high" : row.importance === "med" ? "med" : "low",
      highImpact: HIGH_IMPACT_KEYS.has(eventKey),
      scheduledAt,
      dayEt,
      periodLabel: row.periodLabel || null,
      source: row.source || null,
      officialUrl: officialUrlFor(eventKey, row.source),
      actual: row.actual ?? null,
      previous: row.previous ?? null,
      unit: row.unit || null,
    });
  }
  out.sort((a, b) => String(a.scheduledAt).localeCompare(String(b.scheduledAt)));
  return out.slice(0, MAX_EVENTS);
}

function writeJson(fp, payload) {
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

async function main() {
  const asOf = new Date().toISOString();
  const todayEt = ymdInTz(new Date(), "America/New_York");
  const fromYmd = addDaysYmd(todayEt, -WINDOW_PAST_DAYS);
  const toYmd = addDaysYmd(todayEt, WINDOW_FORWARD_DAYS);

  console.log(`▶ fetch-us-macro-calendar ${fromYmd} → ${toYmd} (US ET window)`);

  let remote;
  try {
    remote = await fetchCalendar(fromYmd, toYmd);
  } catch (err) {
    console.error("Live fetch failed:", err?.message || err);
    if (fs.existsSync(OUT_PUBLIC)) {
      console.error(`Keeping last-good ${OUT_PUBLIC} (not overwritten).`);
    }
    process.exit(1);
  }

  const events = normalizeEvents(remote.data, fromYmd, toYmd);
  const payload = {
    asOf,
    market: "US",
    timezone: "America/New_York",
    timezoneLabel: "US ET",
    window: { from: fromYmd, to: toYmd },
    source: {
      name: "XOOMAR",
      url: SOURCE_URL,
      docs: SOURCE_DOCS,
      remoteUpdatedAt: remote.updatedAt || null,
      attribution: remote.attribution || "Credit XOOMAR (xoomar.com)",
      license: remote.license || null,
    },
    stale: false,
    events,
    refreshHint: "npm run fetch-us-macro  （可選 FETCH_US_MACRO=1 接在 daily-scan 後）",
  };

  writeJson(OUT_PUBLIC, payload);
  console.log(`wrote ${OUT_PUBLIC} (${events.length} events, asOf ${asOf})`);
  if (fs.existsSync(path.dirname(OUT_DOCS))) {
    writeJson(OUT_DOCS, payload);
    console.log(`wrote ${OUT_DOCS}`);
  }
  for (const e of events.slice(0, 12)) {
    console.log(`  ${e.dayEt}  [${e.importance}] ${e.shortName}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
