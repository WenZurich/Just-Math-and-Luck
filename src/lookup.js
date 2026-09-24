/**
 * 查股／個股 — MSN Finance–like stock lookup (US + TW).
 * Live fields from public Yahoo Finance (chart / search / quoteSummary when reachable).
 * Never invents numbers; missing fields omitted. Local earnings-digest used only as fill-in.
 */
import { escapeHtml } from "./glossary.js";
import { t, numberLocale } from "./i18n.js";

const DIGEST_URL = "./data/earnings-digest.json";
const YAHOO_HOSTS = [
  "https://query2.finance.yahoo.com",
  "https://query1.finance.yahoo.com",
];
const JINA = "https://r.jina.ai/";
const QS_MODULES = [
  "price",
  "summaryProfile",
  "summaryDetail",
  "defaultKeyStatistics",
  "financialData",
  "calendarEvents",
  "earningsHistory",
].join(",");

let digestCache = null;
let digestPromise = null;

function raw(v) {
  if (v == null) return null;
  if (typeof v === "object" && "raw" in v) {
    const n = v.raw;
    return n == null || Number.isNaN(n) ? null : n;
  }
  if (typeof v === "number") return Number.isNaN(v) ? null : v;
  return v;
}

function fmtNum(n, d = 2) {
  if (n == null || Number.isNaN(n)) return null;
  return Number(n).toLocaleString(numberLocale(), {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
}

function fmtPct(n, d = 2) {
  if (n == null || Number.isNaN(n)) return null;
  const sign = n > 0 ? "+" : "";
  return `${sign}${Number(n).toFixed(d)}%`;
}

function fmtVol(n) {
  if (n == null || Number.isNaN(n)) return null;
  if (Math.abs(n) >= 1e9) return `${fmtNum(n / 1e9, 2)}B`;
  if (Math.abs(n) >= 1e6) return `${fmtNum(n / 1e6, 2)}M`;
  if (Math.abs(n) >= 1e3) return `${fmtNum(n / 1e3, 1)}K`;
  return fmtNum(n, 0);
}

function fmtMcap(n, currency) {
  if (n == null || Number.isNaN(n)) return null;
  const pref = currency === "TWD" ? "NT$" : currency === "USD" ? "$" : "";
  if (Math.abs(n) >= 1e12) return `${pref}${fmtNum(n / 1e12, 2)}T`;
  if (Math.abs(n) >= 1e9) return `${pref}${fmtNum(n / 1e9, 2)}B`;
  if (Math.abs(n) >= 1e6) return `${pref}${fmtNum(n / 1e6, 2)}M`;
  return `${pref}${fmtNum(n, 0)}`;
}

function fmtPrice(n, currency) {
  if (n == null || Number.isNaN(n)) return null;
  const digits = currency === "TWD" && n >= 100 ? 0 : 2;
  const pref = currency === "USD" ? "$" : currency === "TWD" ? "NT$" : "";
  return `${pref}${fmtNum(n, digits)}`;
}

function fmtAsOf(isoOrSec) {
  try {
    const d =
      typeof isoOrSec === "number"
        ? new Date(isoOrSec * (isoOrSec < 1e12 ? 1000 : 1))
        : new Date(isoOrSec);
    if (Number.isNaN(d.getTime())) return null;
    return (
      d.toLocaleString(numberLocale(), {
        timeZone: "Asia/Taipei",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }) + t("taipei")
    );
  } catch {
    return null;
  }
}

function dirClass(n) {
  if (n == null || Number.isNaN(n) || n === 0) return "lk-flat";
  return n > 0 ? "lk-up" : "lk-down";
}

function extractJson(text) {
  if (!text) return null;
  const trimmed = String(text).trim();
  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    try {
      return JSON.parse(trimmed);
    } catch {
      /* continue */
    }
  }
  const md = trimmed.match(/Markdown Content:\s*(\{[\s\S]*|\[[\s\S]*)/i);
  const blob = md ? md[1].trim() : trimmed;
  const start = blob.search(/[\{\[]/);
  if (start < 0) return null;
  const slice = blob.slice(start);
  for (let end = slice.length; end > 2; end--) {
    try {
      return JSON.parse(slice.slice(0, end));
    } catch {
      /* shrink */
    }
    // jump back to last } or ]
    const cut = Math.max(slice.lastIndexOf("}", end - 2), slice.lastIndexOf("]", end - 2));
    if (cut < 8) break;
    end = cut + 2;
  }
  return null;
}

async function fetchText(url, { timeoutMs = 14000 } = {}) {
  const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timer = ctrl ? setTimeout(() => ctrl.abort(), timeoutMs) : null;
  try {
    const res = await fetch(url, {
      signal: ctrl?.signal,
      headers: { Accept: "application/json,text/plain,*/*" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/** Aggressive public fetch: direct Yahoo hosts, then jina reader (CORS-friendly). */
async function fetchYahooJson(pathAndQuery) {
  const errors = [];
  for (const host of YAHOO_HOSTS) {
    const url = `${host}${pathAndQuery}`;
    try {
      const text = await fetchText(url, { timeoutMs: 10000 });
      const data = extractJson(text);
      if (data) return { ok: true, data, via: "direct", url };
      errors.push(`${host}: non-json`);
    } catch (e) {
      errors.push(`${host}: ${e.message || e}`);
    }
  }
  for (const host of YAHOO_HOSTS) {
    const url = `${host}${pathAndQuery}`;
    try {
      const text = await fetchText(`${JINA}${url}`, { timeoutMs: 18000 });
      const data = extractJson(text);
      if (data) return { ok: true, data, via: "jina", url };
      errors.push(`jina ${host}: parse`);
    } catch (e) {
      errors.push(`jina ${host}: ${e.message || e}`);
    }
  }
  return { ok: false, data: null, via: null, error: errors.slice(0, 4).join(" · ") };
}

/** Normalize user input → Yahoo symbol + market. */
export function normalizeSymbol(input, marketHint = "US") {
  let rawIn = String(input || "").trim().toUpperCase();
  rawIn = rawIn.replace(/\s+/g, "");
  if (!rawIn) return { ok: false, error: "empty" };

  const hint = marketHint === "TW" ? "TW" : "US";

  if (/^\d{4}(\.(TW|TWO))?$/.test(rawIn)) {
    const base = rawIn.replace(/\.(TW|TWO)$/, "");
    return {
      ok: true,
      market: "TW",
      symbol: `${base}.TW`,
      alt: `${base}.TWO`,
      display: base,
    };
  }
  if (/\.(TW|TWO)$/.test(rawIn)) {
    return {
      ok: true,
      market: "TW",
      symbol: rawIn,
      alt: rawIn.endsWith(".TW") ? rawIn.replace(/\.TW$/, ".TWO") : rawIn.replace(/\.TWO$/, ".TW"),
      display: rawIn.replace(/\.(TW|TWO)$/, ""),
    };
  }
  if (/^\d{4,6}$/.test(rawIn) && hint === "TW") {
    return {
      ok: true,
      market: "TW",
      symbol: `${rawIn}.TW`,
      alt: `${rawIn}.TWO`,
      display: rawIn,
    };
  }
  // US tickers: letters, dots, dashes (BRK.B → BRK-B Yahoo form)
  let us = rawIn.replace(/\./g, "-");
  if (!/^[A-Z][A-Z0-9\-]{0,9}$/.test(us)) {
    return { ok: false, error: "invalid" };
  }
  return { ok: true, market: "US", symbol: us, alt: null, display: us };
}

function pickChartMeta(data) {
  const result = data?.chart?.result?.[0];
  if (!result) return null;
  const meta = result.meta || {};
  const prev =
    meta.chartPreviousClose ??
    meta.previousClose ??
    (Array.isArray(result.indicators?.quote?.[0]?.close)
      ? [...result.indicators.quote[0].close].reverse().find((x) => x != null)
      : null);
  const price = meta.regularMarketPrice ?? null;
  let change = null;
  let changePct = meta.regularMarketChangePercent ?? meta.fulldayChangePercent ?? null;
  if (price != null && prev != null) {
    change = price - prev;
    if (changePct == null && prev !== 0) changePct = (change / prev) * 100;
  }
  return {
    symbol: meta.symbol || null,
    shortName: meta.shortName || null,
    longName: meta.longName || null,
    currency: meta.currency || null,
    exchange: meta.fullExchangeName || meta.exchangeName || null,
    price,
    previousClose: prev ?? null,
    change,
    changePct,
    volume: meta.regularMarketVolume ?? null,
    dayHigh: meta.regularMarketDayHigh ?? null,
    dayLow: meta.regularMarketDayLow ?? null,
    fiftyTwoWeekHigh: meta.fiftyTwoWeekHigh ?? null,
    fiftyTwoWeekLow: meta.fiftyTwoWeekLow ?? null,
    marketTime: meta.regularMarketTime ?? null,
    instrumentType: meta.instrumentType || null,
  };
}

function pickSearch(data, symbol) {
  const quotes = Array.isArray(data?.quotes) ? data.quotes : [];
  const hit =
    quotes.find((q) => String(q.symbol || "").toUpperCase() === symbol.toUpperCase()) ||
    quotes.find((q) => q.isYahooFinance) ||
    quotes[0];
  if (!hit) return null;
  return {
    symbol: hit.symbol || null,
    shortName: hit.shortname || hit.shortName || null,
    longName: hit.longname || hit.longName || null,
    exchange: hit.exchDisp || hit.exchange || null,
    sector: hit.sectorDisp || hit.sector || null,
    industry: hit.industryDisp || hit.industry || null,
    quoteType: hit.quoteType || hit.typeDisp || null,
  };
}

function pickQuoteSummary(data) {
  const block = data?.quoteSummary?.result?.[0];
  if (!block) return null;
  const price = block.price || {};
  const profile = block.summaryProfile || {};
  const detail = block.summaryDetail || {};
  const stats = block.defaultKeyStatistics || {};
  const fin = block.financialData || {};
  const cal = block.calendarEvents?.earnings || {};
  const hist = Array.isArray(block.earningsHistory?.history)
    ? block.earningsHistory.history
    : [];
  const last =
    hist.find((h) => h.period === "-1q") ||
    [...hist].sort((a, b) => String(b.period || "").localeCompare(String(a.period || "")))[0] ||
    null;

  const earnDates = Array.isArray(cal.earningsDate) ? cal.earningsDate : [];
  const nextDate =
    earnDates.map((d) => d?.fmt || (raw(d) != null ? fmtAsOf(raw(d))?.slice(0, 10) : null)).find(Boolean) ||
    null;

  return {
    name: price.longName || price.shortName || null,
    currency: price.currency || detail.currency || null,
    business: profile.longBusinessSummary || null,
    sector: profile.sector || null,
    industry: profile.industry || null,
    website: profile.website || null,
    pe: raw(detail.trailingPE) ?? raw(stats.trailingPE),
    forwardPe: raw(detail.forwardPE) ?? raw(stats.forwardPE),
    marketCap: raw(detail.marketCap) ?? raw(price.marketCap),
    epsTrailing: raw(stats.trailingEps) ?? raw(fin.trailingEps),
    revenue: raw(fin.totalRevenue),
    revenueGrowth: raw(fin.revenueGrowth) != null ? raw(fin.revenueGrowth) * 100 : null,
    earningsGrowth: raw(fin.earningsGrowth) != null ? raw(fin.earningsGrowth) * 100 : null,
    profitMargins: raw(fin.profitMargins) != null ? raw(fin.profitMargins) * 100 : null,
    grossMargins: raw(fin.grossMargins) != null ? raw(fin.grossMargins) * 100 : null,
    dividendYield: raw(detail.dividendYield) != null ? raw(detail.dividendYield) * 100 : null,
    beta: raw(stats.beta) ?? raw(detail.beta),
    bookValue: raw(stats.bookValue),
    nextEarningsDate: nextDate,
    nextEarningsEstimate: raw(cal.earningsAverage),
    lastEpsActual: last ? raw(last.epsActual) : null,
    lastEpsEstimate: last ? raw(last.epsEstimate) : null,
    lastEpsSurprisePct:
      last && raw(last.surprisePercent) != null ? raw(last.surprisePercent) * 100 : null,
    lastEpsPeriod: last?.period || null,
    lastEpsQuarter: last?.quarter?.fmt || null,
  };
}

async function yahooSession() {
  try {
    await fetch("https://guce.yahoo.com/consent?brandType=nonEu", {
      mode: "cors",
      credentials: "include",
      redirect: "follow",
    });
  } catch {
    /* CORS expected in browser */
  }
  for (const host of YAHOO_HOSTS) {
    try {
      const res = await fetch(`${host}/v1/test/getcrumb`, {
        mode: "cors",
        credentials: "include",
      });
      if (!res.ok) continue;
      const crumb = (await res.text()).trim();
      if (crumb && crumb.length < 80 && !crumb.includes("{")) {
        return { ok: true, crumb, host };
      }
    } catch {
      /* continue */
    }
  }
  return { ok: false, crumb: "", host: YAHOO_HOSTS[0] };
}

async function fetchQuoteSummary(symbol) {
  // 1) crumb session (works when cookies/CORS allow)
  const session = await yahooSession();
  if (session.ok) {
    const path = `/v10/finance/quoteSummary/${encodeURIComponent(symbol)}?modules=${QS_MODULES}&crumb=${encodeURIComponent(session.crumb)}`;
    try {
      const res = await fetch(`${session.host}${path}`, {
        mode: "cors",
        credentials: "include",
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        const data = await res.json();
        const picked = pickQuoteSummary(data);
        if (picked) return { ok: true, data: picked, via: "yahoo-crumb" };
      }
    } catch {
      /* fall through */
    }
  }

  // 2) unauthenticated attempt via proxy hosts (often 401 — still try)
  const path = `/v10/finance/quoteSummary/${encodeURIComponent(symbol)}?modules=${QS_MODULES}`;
  const res = await fetchYahooJson(path);
  if (res.ok) {
    const picked = pickQuoteSummary(res.data);
    if (picked) return { ok: true, data: picked, via: `yahoo-${res.via}` };
  }

  // 3) Yahoo quote HTML SSR embed (when reachable)
  const htmlTry = await fetchYahooHtmlSummary(symbol);
  if (htmlTry.ok) return htmlTry;

  return { ok: false, data: null, via: null, error: res.error || "quoteSummary unavailable" };
}

async function fetchYahooHtmlSummary(symbol) {
  const urls = [
    `https://finance.yahoo.com/quote/${encodeURIComponent(symbol)}/`,
    `${JINA}https://finance.yahoo.com/quote/${encodeURIComponent(symbol)}/`,
  ];
  for (const url of urls) {
    try {
      const text = await fetchText(url, { timeoutMs: 20000 });
      if (/AbuseAlleviation|Invalid Crumb|AuthenticationRequired/i.test(text) && text.length < 2000) {
        continue;
      }
      // application/json script bodies or escaped SSR
      const scripts = [...text.matchAll(/<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/gi)];
      for (const m of scripts) {
        try {
          const outer = JSON.parse(m[1]);
          const body = typeof outer?.body === "string" ? JSON.parse(outer.body) : outer?.body || outer;
          const picked = pickQuoteSummary(body);
          if (picked?.business || picked?.pe != null || picked?.marketCap != null) {
            return { ok: true, data: picked, via: url.startsWith(JINA) ? "yahoo-html-jina" : "yahoo-html" };
          }
        } catch {
          /* next script */
        }
      }
      // escaped longBusinessSummary fallback
      const biz = text.match(/\\"longBusinessSummary\\":\\"(.*?)\\"/);
      if (biz) {
        const business = biz[1]
          .replace(/\\n/g, " ")
          .replace(/\\"/g, '"')
          .replace(/\\\\/g, "\\");
        return {
          ok: true,
          data: { business: business.slice(0, 800) },
          via: "yahoo-html-partial",
        };
      }
    } catch {
      /* next */
    }
  }
  return { ok: false, data: null, via: null };
}

async function loadDigest() {
  if (digestCache) return digestCache;
  if (digestPromise) return digestPromise;
  digestPromise = (async () => {
    try {
      const res = await fetch(DIGEST_URL, { cache: "no-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      digestCache = await res.json();
    } catch {
      digestCache = { mag7: [], watchlistHot: [] };
    }
    return digestCache;
  })();
  return digestPromise;
}

function digestMatch(symbol) {
  const dig = digestCache;
  if (!dig) return null;
  const ticker = String(symbol || "")
    .replace(/\.TW$/i, "")
    .replace(/\.TWO$/i, "")
    .toUpperCase();
  const rows = [...(dig.mag7 || []), ...(dig.watchlistHot || [])];
  return rows.find((r) => String(r.ticker || "").toUpperCase() === ticker) || null;
}

function mergeSnapshot({ market, symbol, chart, search, summary, digest }) {
  const currency =
    summary?.currency || chart?.currency || (market === "TW" ? "TWD" : "USD");
  const name =
    summary?.name ||
    chart?.longName ||
    chart?.shortName ||
    search?.longName ||
    search?.shortName ||
    digest?.name ||
    symbol;

  const business =
    summary?.business ||
    (digest?.whatItDoes ? String(digest.whatItDoes) : null) ||
    null;

  const out = {
    market,
    symbol,
    name,
    business,
    sector: summary?.sector || search?.sector || null,
    industry: summary?.industry || search?.industry || null,
    exchange: chart?.exchange || search?.exchange || null,
    currency,
    price: chart?.price ?? null,
    change: chart?.change ?? null,
    changePct: chart?.changePct ?? null,
    previousClose: chart?.previousClose ?? null,
    volume: chart?.volume ?? null,
    dayHigh: chart?.dayHigh ?? null,
    dayLow: chart?.dayLow ?? null,
    fiftyTwoWeekHigh: chart?.fiftyTwoWeekHigh ?? null,
    fiftyTwoWeekLow: chart?.fiftyTwoWeekLow ?? null,
    marketTime: chart?.marketTime ?? null,
    pe: summary?.pe ?? digest?.pe ?? null,
    forwardPe: summary?.forwardPe ?? digest?.forwardPe ?? null,
    marketCap: summary?.marketCap ?? digest?.marketCap ?? null,
    epsTrailing: summary?.epsTrailing ?? null,
    revenue: summary?.revenue ?? null,
    revenueGrowth: summary?.revenueGrowth ?? digest?.revenueYoYPct ?? null,
    earningsGrowth: summary?.earningsGrowth ?? digest?.epsYoYPct ?? null,
    profitMargins: summary?.profitMargins ?? null,
    grossMargins: summary?.grossMargins ?? null,
    dividendYield: summary?.dividendYield ?? null,
    beta: summary?.beta ?? null,
    nextEarningsDate: summary?.nextEarningsDate ?? digest?.nextEarningsDate ?? null,
    nextEarningsEstimate: summary?.nextEarningsEstimate ?? digest?.consensusEpsNext ?? null,
    lastEpsActual: summary?.lastEpsActual ?? digest?.lastReport?.epsActual ?? null,
    lastEpsEstimate: summary?.lastEpsEstimate ?? digest?.lastReport?.epsEstimate ?? null,
    lastEpsSurprisePct:
      summary?.lastEpsSurprisePct ?? digest?.lastReport?.epsSurprisePct ?? null,
    lastEpsQuarter: summary?.lastEpsQuarter ?? digest?.lastReport?.quarter ?? null,
    sources: [],
  };
  return out;
}

export async function lookupStock(input, marketHint = "US") {
  const norm = normalizeSymbol(input, marketHint);
  if (!norm.ok) {
    return { ok: false, error: norm.error || "invalid", snapshot: null };
  }

  await loadDigest();

  const trySymbols = [norm.symbol];
  if (norm.alt) trySymbols.push(norm.alt);

  let chart = null;
  let usedSymbol = norm.symbol;
  let chartVia = null;
  let chartError = null;

  for (const sym of trySymbols) {
    const res = await fetchYahooJson(
      `/v8/finance/chart/${encodeURIComponent(sym)}?interval=1d&range=5d&includePrePost=false`
    );
    if (res.ok) {
      chart = pickChartMeta(res.data);
      if (chart?.price != null || chart?.longName || chart?.shortName) {
        usedSymbol = sym;
        chartVia = res.via;
        break;
      }
      chart = null;
    } else {
      chartError = res.error;
    }
  }

  if (!chart) {
    return {
      ok: false,
      error: "not_found",
      detail: chartError,
      snapshot: null,
      symbol: usedSymbol,
      market: norm.market,
    };
  }

  const searchQ = encodeURIComponent(norm.display || usedSymbol);
  const searchRes = await fetchYahooJson(
    `/v1/finance/search?q=${searchQ}&quotesCount=8&newsCount=0&listsCount=0`
  );
  const search = searchRes.ok ? pickSearch(searchRes.data, usedSymbol) : null;

  const qs = await fetchQuoteSummary(usedSymbol);
  const digest = digestMatch(usedSymbol);

  const snapshot = mergeSnapshot({
    market: norm.market,
    symbol: usedSymbol,
    chart,
    search,
    summary: qs.data,
    digest,
  });

  const sources = [];
  if (chartVia) sources.push(`Yahoo chart (${chartVia})`);
  if (searchRes.ok) sources.push(`Yahoo search (${searchRes.via})`);
  if (qs.ok) sources.push(`Yahoo quoteSummary (${qs.via})`);
  if (digest) sources.push("site earnings-digest");
  snapshot.sources = sources;

  return {
    ok: true,
    snapshot,
    market: norm.market,
    symbol: usedSymbol,
    partial: !qs.ok,
  };
}

function metric(label, valueHtml) {
  if (!valueHtml) return "";
  return `<div class="lk-metric">
    <div class="lk-ml">${escapeHtml(label)}</div>
    <div class="lk-mv">${valueHtml}</div>
  </div>`;
}

function val(text) {
  if (text == null || text === "") return null;
  return `<span class="lk-mono">${escapeHtml(String(text))}</span>`;
}

function paintResult(root, result) {
  if (!result?.ok || !result.snapshot) {
    const msg =
      result?.error === "empty"
        ? t("lookupEmptyInput")
        : result?.error === "invalid"
          ? t("lookupInvalid")
          : result?.error === "not_found"
            ? t("lookupNotFound")
            : t("lookupError", { msg: result?.detail || result?.error || "error" });
    root.innerHTML = `<div class="lk-empty" role="status">${escapeHtml(msg)}</div>`;
    return;
  }

  const s = result.snapshot;
  const dir = dirClass(s.changePct ?? s.change);
  const marketBadge =
    s.market === "TW"
      ? `<span class="lk-badge lk-badge-tw">${escapeHtml(t("twStock"))}</span>`
      : `<span class="lk-badge lk-badge-us">${escapeHtml(t("usStock"))}</span>`;

  const biz = s.business
    ? `<p class="lk-biz">${escapeHtml(s.business.length > 520 ? `${s.business.slice(0, 520)}…` : s.business)}</p>`
    : "";

  const asOf = fmtAsOf(s.marketTime);

  root.innerHTML = `
    <article class="lk-card" data-symbol="${escapeHtml(s.symbol)}">
      <header class="lk-card-head">
        <div>
          <div class="lk-sym-row">
            <span class="lk-symbol">${escapeHtml(s.symbol)}</span>
            ${marketBadge}
          </div>
          <h3 class="lk-name">${escapeHtml(s.name || "")}</h3>
          <p class="lk-meta-line">
            ${s.exchange ? escapeHtml(s.exchange) : ""}
            ${s.sector ? ` · ${escapeHtml(s.sector)}` : ""}
            ${s.industry ? ` · ${escapeHtml(s.industry)}` : ""}
          </p>
        </div>
        <div class="lk-quote ${dir}">
          <div class="lk-price">${escapeHtml(fmtPrice(s.price, s.currency) || "—")}</div>
          <div class="lk-chg">
            <span>${escapeHtml(fmtPrice(s.change, s.currency) || "—")}</span>
            <span>${escapeHtml(fmtPct(s.changePct) || "—")}</span>
          </div>
          ${asOf ? `<div class="lk-asof">${escapeHtml(t("dataAsOf"))} ${escapeHtml(asOf)}</div>` : ""}
        </div>
      </header>

      <section class="lk-block" aria-label="${escapeHtml(t("lookupBusiness"))}">
        <h4 class="lk-h4">${escapeHtml(t("lookupBusiness"))}</h4>
        ${biz || `<p class="lk-muted">${escapeHtml(t("earningsDataMissing"))}</p>`}
      </section>

      <section class="lk-block" aria-label="${escapeHtml(t("lookupQuoteStats"))}">
        <h4 class="lk-h4">${escapeHtml(t("lookupQuoteStats"))}</h4>
        <div class="lk-metrics">
          ${metric(t("lookupPrevClose"), val(fmtPrice(s.previousClose, s.currency)))}
          ${metric(t("lookupVolume"), val(fmtVol(s.volume)))}
          ${metric(t("lookupDayRange"), s.dayLow != null && s.dayHigh != null
            ? val(`${fmtPrice(s.dayLow, s.currency)} – ${fmtPrice(s.dayHigh, s.currency)}`)
            : null)}
          ${metric(t("lookup52w"), s.fiftyTwoWeekLow != null && s.fiftyTwoWeekHigh != null
            ? val(`${fmtPrice(s.fiftyTwoWeekLow, s.currency)} – ${fmtPrice(s.fiftyTwoWeekHigh, s.currency)}`)
            : null)}
          ${metric(t("lookupMarketCap"), val(fmtMcap(s.marketCap, s.currency)))}
          ${metric(t("earningsPe"), val(fmtNum(s.pe, 1)))}
          ${metric(t("earningsForwardPe"), val(fmtNum(s.forwardPe, 1)))}
          ${metric(t("lookupEps"), val(fmtNum(s.epsTrailing, 2)))}
          ${metric(t("lookupBeta"), val(fmtNum(s.beta, 2)))}
          ${metric(t("lookupDivYield"), val(fmtPct(s.dividendYield, 2)))}
        </div>
      </section>

      <section class="lk-block" aria-label="${escapeHtml(t("lookupFinancials"))}">
        <h4 class="lk-h4">${escapeHtml(t("lookupFinancials"))}</h4>
        <div class="lk-metrics">
          ${metric(t("lookupRevenue"), val(fmtMcap(s.revenue, s.currency)))}
          ${metric(t("earningsRevYoy"), val(fmtPct(s.revenueGrowth, 1)))}
          ${metric(t("earningsEpsYoy"), val(fmtPct(s.earningsGrowth, 1)))}
          ${metric(t("lookupGrossMargin"), val(fmtPct(s.grossMargins, 1)))}
          ${metric(t("lookupProfitMargin"), val(fmtPct(s.profitMargins, 1)))}
        </div>
      </section>

      <section class="lk-block" aria-label="${escapeHtml(t("lookupEarnings"))}">
        <h4 class="lk-h4">${escapeHtml(t("lookupEarnings"))}</h4>
        <div class="lk-metrics">
          ${metric(t("earningsNextDate"), val(s.nextEarningsDate))}
          ${metric(t("lookupEpsConsensus"), val(fmtNum(s.nextEarningsEstimate, 2)))}
          ${metric(t("earningsLastEps"), s.lastEpsActual != null
            ? val(`${fmtNum(s.lastEpsActual, 2)}${s.lastEpsQuarter ? ` · ${s.lastEpsQuarter}` : ""}`)
            : null)}
          ${metric(t("lookupEpsSurprise"), val(fmtPct(s.lastEpsSurprisePct, 1)))}
        </div>
      </section>

      <p class="lk-sources">${escapeHtml(t("lookupSources"))}: ${escapeHtml((s.sources || []).join(" · ") || "Yahoo Finance")}</p>
      ${result.partial ? `<p class="lk-partial">${escapeHtml(t("lookupPartial"))}</p>` : ""}
      <p class="lk-disclaimer" role="note">${escapeHtml(t("lookupDisclaimer"))}</p>
    </article>`;
}

export function renderLookupSection() {
  return `
    <section class="section lookup-section" aria-label="${escapeHtml(t("lookupTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${escapeHtml(t("lookupTitle"))}</h2>
        <p class="view-lead">${escapeHtml(t("lookupLead"))}</p>
      </header>
      <p class="lk-disclaimer lk-disclaimer-top" role="note">${escapeHtml(t("lookupDisclaimer"))}</p>
      <div class="lk-market-tabs" role="tablist" aria-label="${escapeHtml(t("market"))}">
        <button type="button" class="lk-tab is-active" data-lk-market="US" role="tab" aria-selected="true">${escapeHtml(t("usStock"))}</button>
        <button type="button" class="lk-tab" data-lk-market="TW" role="tab" aria-selected="false">${escapeHtml(t("twStock"))}</button>
      </div>
      <form class="lk-form" data-lk-form>
        <label class="lk-label" for="lk-input">${escapeHtml(t("lookupInputLabel"))}</label>
        <div class="lk-row">
          <input id="lk-input" class="lk-input" name="symbol" type="text" autocomplete="off" spellcheck="false"
            placeholder="${escapeHtml(t("lookupPlaceholderUs"))}" data-lk-input />
          <button type="submit" class="lk-submit">${escapeHtml(t("lookupSearch"))}</button>
        </div>
        <p class="lk-hint" data-lk-hint>${escapeHtml(t("lookupHintUs"))}</p>
      </form>
      <div id="lk-root" class="lk-root" aria-live="polite">
        <p class="lk-muted">${escapeHtml(t("lookupIdle"))}</p>
      </div>
    </section>`;
}

export function initLookup(selector = "#lk-root") {
  const root = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!root) return { ok: false };
  const section = root.closest(".lookup-section") || root.parentElement;
  if (!section || section.dataset.lkBound === "1") return { ok: true, root };
  section.dataset.lkBound = "1";

  const form = section.querySelector("[data-lk-form]");
  const input = section.querySelector("[data-lk-input]");
  const hint = section.querySelector("[data-lk-hint]");
  const tabs = section.querySelectorAll("[data-lk-market]");
  let market = "US";

  const setMarket = (m) => {
    market = m === "TW" ? "TW" : "US";
    tabs.forEach((btn) => {
      const on = btn.dataset.lkMarket === market;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    if (input) {
      input.placeholder = market === "TW" ? t("lookupPlaceholderTw") : t("lookupPlaceholderUs");
    }
    if (hint) {
      hint.textContent = market === "TW" ? t("lookupHintTw") : t("lookupHintUs");
    }
  };

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => setMarket(btn.dataset.lkMarket));
  });

  const run = async () => {
    const q = input?.value || "";
    root.innerHTML = `<p class="lk-loading">${escapeHtml(t("lookupLoading"))}</p>`;
    try {
      const result = await lookupStock(q, market);
      paintResult(root, result);
    } catch (err) {
      paintResult(root, { ok: false, error: "error", detail: err?.message || String(err) });
    }
  };

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    void run();
  });

  // Deep-link: #lookup?q=AAPL or #quote/2330
  try {
    const hash = String(location.hash || "");
    const qMatch = hash.match(/[?&]q=([^&]+)/i) || hash.match(/#(?:lookup|quote)\/([A-Za-z0-9.\-]+)/i);
    if (qMatch) {
      const q = decodeURIComponent(qMatch[1]);
      if (/^\d{4}/.test(q) || /\.TW/i.test(q)) setMarket("TW");
      else setMarket("US");
      if (input) input.value = q;
      void run();
    }
  } catch {
    /* ignore */
  }

  void loadDigest();
  return { ok: true, root, run };
}
