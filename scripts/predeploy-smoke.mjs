#!/usr/bin/env node
/**
 * Pre-deploy smoke gate for Just-Math-and-Luck
 * - Renders every strategy panel (linkJargon / metrics / incomplete)
 * - Mounts #xq-root, clicks every chip + tab, asserts panel updates
 * - Asserts XQ category tabs and no orphan packs
 * - Asserts main hash routes exist in source
 * Exits non-zero on any failure. Do not push until this passes.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { JSDOM } from "jsdom";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SCREENER =
  process.env.SMOKE_SCREENER ||
  path.join(ROOT, "public/data/strategy-screener.json");
const REQUIRED_TABS = ["大師", "基本", "籌碼", "技術", "綜合"];
const REQUIRED_HASHES = ["#today", "#logic", "#research", "#strategies", "#options", "#earnings", "#lookup", "#soxl", "#godzilla", "#paper"];

const failures = [];
function fail(msg) {
  failures.push(msg);
  console.error("FAIL:", msg);
}
function ok(msg) {
  console.log("OK:", msg);
}

function setupDom() {
  const dom = new JSDOM(
    `<!DOCTYPE html><html><body>
      <div id="app"></div>
      <div id="xq-root"></div>
    </body></html>`,
    {
      url: "http://localhost/Just-Math-and-Luck/",
      pretendToBeVisual: true,
    }
  );
  const { window } = dom;
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.navigator = window.navigator;
  globalThis.HTMLElement = window.HTMLElement;
  globalThis.Element = window.Element;
  globalThis.Node = window.Node;
  globalThis.localStorage = window.localStorage;
  globalThis.sessionStorage = window.sessionStorage;
  globalThis.Event = window.Event;
  globalThis.MouseEvent = window.MouseEvent;
  // i18n detectInitial reads localStorage at import time
  try {
    window.localStorage.setItem("site-lang", "zh-Hant");
  } catch {
    /* ignore */
  }
  return { dom, window: window.document };
}

function click(el) {
  if (!el) throw new Error("click: element missing");
  el.dispatchEvent(
    new MouseEvent("click", { bubbles: true, cancelable: true, view: window })
  );
}

async function main() {
  console.log("▶ predeploy-smoke: start");
  if (!fs.existsSync(SCREENER)) {
    fail(`missing screener ${SCREENER}`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(SCREENER, "utf8"));
  const strategies = data.strategies || [];
  if (!strategies.length) fail("strategy-screener.json has no strategies");

  // —— Source hash routes ——
  const mainJs = fs.readFileSync(path.join(ROOT, "src/main.js"), "utf8");
  for (const h of REQUIRED_HASHES) {
    const id = h.slice(1);
    if (!mainJs.includes(`"${id}"`) && !mainJs.includes(`'${id}'`)) {
      fail(`main.js missing view/hash id ${id}`);
    } else {
      ok(`hash route ${h}`);
    }
  }
  for (const id of ["view-today", "view-logic", "view-research", "view-strategies", "view-options", "view-earnings", "view-lookup", "view-soxl", "view-godzilla", "view-paper"]) {
    if (!mainJs.includes(id)) fail(`main.js missing ${id}`);
    else ok(`view shell ${id}`);
  }

  // —— linkJargon must not shadow i18n t ——
  const stratSrc = fs.readFileSync(path.join(ROOT, "src/strategies.js"), "utf8");
  if (/function linkJargon[\s\S]*?let t = escapeHtml/.test(stratSrc)) {
    fail("linkJargon still shadows i18n t() with `let t = escapeHtml` — must use `html`");
  } else if (!/function linkJargon[\s\S]*?let html = escapeHtml/.test(stratSrc)) {
    fail("linkJargon should use `let html = escapeHtml(text)`");
  } else {
    ok("linkJargon uses html (not t) for the string buffer");
  }

  setupDom();
  // Dynamic import AFTER jsdom globals exist
  const mod = await import(pathToFileURL(path.join(ROOT, "src/strategies.js")).href);
  const {
    renderStrategyPanel,
    mountStrategies,
    XQ_TAB_ORDER,
    catOf,
  } = mod;

  if (typeof renderStrategyPanel !== "function") fail("renderStrategyPanel not exported");
  if (typeof mountStrategies !== "function") fail("mountStrategies not exported");
  if (!Array.isArray(XQ_TAB_ORDER)) fail("XQ_TAB_ORDER missing");

  for (const tab of REQUIRED_TABS) {
    if (!XQ_TAB_ORDER.includes(tab)) fail(`XQ_TAB_ORDER missing required tab ${tab}`);
  }
  ok(`XQ_TAB_ORDER has ${REQUIRED_TABS.join("/")}`);

  // —— Render every panel (catches TypeError in linkJargon / metrics) ——
  const errors = [];
  window.addEventListener("error", (ev) => {
    errors.push(String(ev.message || ev.error || ev));
  });

  for (const s of strategies) {
    try {
      const html = renderStrategyPanel(s, data, "TW");
      if (!html || typeof html !== "string") {
        fail(`renderStrategyPanel(${s.id}) returned empty`);
        continue;
      }
      if (!html.includes(`data-strategy-id="${s.id}"`)) {
        fail(`renderStrategyPanel(${s.id}) missing data-strategy-id`);
      }
      if (!html.includes("xq-strategy-name") && !html.includes(s.name)) {
        fail(`renderStrategyPanel(${s.id}) missing strategy name`);
      }
      // Force jargon paths that previously crashed
      for (const c of s.conditions || []) {
        if (/本益比|RSI|振幅|\d+\s*張|營益率|外資|投信/.test(c.text || "")) {
          // already exercised via renderConditions → linkJargon
        }
      }
      ok(`render ${s.id} (${(s.hits || []).length} hits${s.incomplete ? ", incomplete" : ""})`);
    } catch (e) {
      fail(`renderStrategyPanel(${s.id}): ${e?.stack || e}`);
    }
  }

  // —— Mount + click every chip / tab ——
  const root = document.querySelector("#xq-root");
  try {
    mountStrategies(root, data);
  } catch (e) {
    fail(`mountStrategies threw: ${e?.stack || e}`);
    finish();
    return;
  }

  for (const tab of REQUIRED_TABS) {
    const btn = root.querySelector(`[data-xq-tab="${tab}"]`);
    // Tab only rendered if category has packs
    const hasPacks = strategies.some((s) => catOf(s) === tab);
    if (hasPacks && !btn) {
      fail(`missing category tab button for ${tab} (has packs)`);
    } else if (btn) {
      try {
        click(btn);
        if (!btn.classList.contains("active") && root.querySelector(`[data-xq-tab="${tab}"].active`) == null) {
          // after click, paintShell re-renders — query again
          const again = root.querySelector(`[data-xq-tab="${tab}"]`);
          if (!again?.classList.contains("active")) {
            fail(`tab ${tab} click did not activate`);
          } else ok(`tab click ${tab}`);
        } else {
          ok(`tab click ${tab}`);
        }
      } catch (e) {
        fail(`tab click ${tab}: ${e?.stack || e}`);
      }
    } else {
      ok(`tab ${tab} skipped (no packs)`);
    }
  }

  // Every pack visible under some tab / activatable by chip
  const seen = new Set();
  for (const s of strategies) {
    const tab = catOf(s);
    seen.add(s.id);
    // switch tab first
    const tabBtn = root.querySelector(`[data-xq-tab="${tab}"]`);
    if (tabBtn) {
      try {
        click(tabBtn);
      } catch (e) {
        fail(`activate tab ${tab} for ${s.id}: ${e}`);
        continue;
      }
    } else {
      fail(`orphan pack ${s.id}: category ${tab} has no tab`);
      continue;
    }
    const chip =
      root.querySelector(`.xq-chip[data-xq-id="${s.id}"]`) ||
      root.querySelector(`.xq-side-item[data-xq-id="${s.id}"]`);
    if (!chip) {
      fail(`chip missing for ${s.id} under tab ${tab}`);
      continue;
    }
    try {
      click(chip);
      const panel = root.querySelector(".xq-panel");
      const id = panel?.getAttribute("data-strategy-id");
      if (id !== s.id) {
        fail(`chip ${s.id}: panel shows ${id || "(none)"}`);
      } else {
        ok(`chip → panel ${s.id}`);
      }
      // Copy / CSV buttons present (may be no-op without hits)
      if (!root.querySelector("[data-xq-copy]")) fail(`${s.id}: missing data-xq-copy`);
      if (!root.querySelector("[data-xq-csv]")) fail(`${s.id}: missing data-xq-csv`);
    } catch (e) {
      fail(`chip click ${s.id}: ${e?.stack || e}`);
    }
  }

  if (seen.size !== strategies.length) {
    fail(`only exercised ${seen.size}/${strategies.length} packs`);
  } else {
    ok(`all ${strategies.length} packs under tabs + chips`);
  }

  // categoryOrder / no orphans vs XQ tabs
  for (const s of strategies) {
    const c = catOf(s);
    if (!XQ_TAB_ORDER.includes(c)) {
      fail(`pack ${s.id} maps to unknown tab ${c}`);
    }
  }
  ok("no unknown category tabs");

  {
    const gooayeIds = [
      "gooaye-tw-semicon-chain",
      "gooaye-us-risk-on",
      "gooaye-tw-vol-breakout",
      "gooaye-us-fomo-filter",
    ];
    const ids = new Set(strategies.map((s) => s.id));
    for (const id of gooayeIds) {
      if (!ids.has(id)) fail(`missing gooaye pack ${id}`);
      else {
        const s = strategies.find((x) => x.id === id);
        if (!Array.isArray(s.plainTakeaways) || !s.plainTakeaways.length) {
          fail(`gooaye pack ${id} missing plainTakeaways`);
        } else if (s.market === "TW" && (s.hits || []).some((h) => String(h.market).toUpperCase() === "US")) {
          fail(`gooaye pack ${id} mixes US hits into TW`);
        } else if (s.market === "US" && (s.hits || []).some((h) => String(h.market).toUpperCase() === "TW")) {
          fail(`gooaye pack ${id} mixes TW hits into US`);
        } else ok(`gooaye pack ${id}`);
      }
    }
    if (!fs.existsSync(path.join(ROOT, "scripts/study/gooaye-framework-2026-09-16.md"))) {
      fail("missing gooaye framework md");
    } else ok("gooaye framework study docs");
  }


  // —— Research library hash + JSON schema ——
  const rlPath = path.join(ROOT, "public/data/research-library.json");
  if (!fs.existsSync(rlPath)) {
    fail("missing public/data/research-library.json");
  } else {
    try {
      const rl = JSON.parse(fs.readFileSync(rlPath, "utf8"));
      const items = rl.items || [];
      const books = items.filter((x) => x.type === "book");
      const papers = items.filter((x) => x.type === "paper");
      const podcasts = items.filter((x) => x.type === "podcast");
      if (!books.length) fail("research-library has no books");
      else ok(`research books ${books.length}`);
      if (!papers.length) fail("research-library has no papers");
      else ok(`research papers ${papers.length}`);
      if (!podcasts.length) fail("research-library has no podcasts");
      else ok(`research podcasts ${podcasts.length}`);
      for (const it of items) {
        for (const k of ["id", "market", "type", "title", "summary", "formulas", "strategyCandidate", "status", "mathGateNote", "sources", "plainTakeaways"]) {
          if (!(k in it)) fail(`research item ${it.id || "?"} missing ${k}`);
        }
        if (!Array.isArray(it.plainTakeaways) || !it.plainTakeaways.length) {
          fail(`research item ${it.id} plainTakeaways empty`);
        }
        if (!it.plainTakeawaysLocalized || typeof it.plainTakeawaysLocalized !== "object") {
          fail(`research item ${it.id} missing plainTakeawaysLocalized`);
        }
        if (!["US", "TW", "BOTH"].includes(it.market)) fail(`bad market on ${it.id}`);
        if (!["book", "paper", "podcast"].includes(it.type)) fail(`bad type on ${it.id}`);
        if (!["yes", "no", "watch"].includes(it.strategyCandidate)) fail(`bad strategyCandidate on ${it.id}`);
        if (!["candidate", "deferred", "adopted", "rejected"].includes(it.status)) fail(`bad status on ${it.id}`);
        if (!(it.coverUrl || it.cover)) fail(`research item ${it.id} missing coverUrl/cover`);
        if (!it.titleLocalized || typeof it.titleLocalized !== "object") {
          fail(`research item ${it.id} missing titleLocalized`);
        }
      }
      ok("research-library schema");
      for (const f of ["placeholder-book.svg", "placeholder-paper.svg", "placeholder-podcast.svg"]) {
        const cp = path.join(ROOT, "public/covers", f);
        if (!fs.existsSync(cp)) fail(`missing public/covers/${f}`);
        else ok(`cover asset ${f}`);
      }
      if (!items.some((x) => x.id === "podcast-gooaye" && x.type === "podcast")) {
        fail("missing podcast-gooaye research item");
      } else ok("podcast-gooaye research item");
      const researchJs = fs.readFileSync(path.join(ROOT, "src/research.js"), "utf8");
      if (!researchJs.includes("coverUrl") || !researchJs.includes("titleLocalized") || !researchJs.includes("loading=\"lazy\"")) {
        fail("research.js missing cover / localized title / lazy-load wiring");
      } else {
        ok("research.js cover + i18n wiring");
      }
      if (!researchJs.includes("plainTakeaways") || !researchJs.includes("takeawayList") || !researchJs.includes("researchTakeaways")) {
        fail("research.js missing plainTakeaways / takeawayList wiring");
      } else {
        ok("research.js plain takeaways wiring");
      }
      // Default cards must not dump raw formulas or developer mathGateNote
      if (/formulaList\s*\(/.test(researchJs) || /item\.formulas/.test(researchJs) || /item\.mathGateNote/.test(researchJs)) {
        fail("research.js still renders raw formulas[] or mathGateNote in UI");
      } else {
        ok("research UI hides raw formulas / mathGateNote");
      }
      const i18n = fs.readFileSync(path.join(ROOT, "src/i18n.js"), "utf8");
      if (i18n.includes("目前未過）— candidates only") || i18n.includes("目前未过）— candidates only") || i18n.includes("未通過）— candidates only")) {
        fail("i18n researchMathGateBanner still mixes English 'candidates only' into CJK");
      } else {
        ok("research i18n banners localized");
      }
      if (!i18n.includes("researchTakeaways") || !i18n.includes("重點作法")) {
        fail("i18n missing researchTakeaways / 重點作法");
      } else {
        ok("research takeaways i18n");
      }
    } catch (e) {
      fail(`research-library parse: ${e}`);
    }
  }
  if (!mainJs.includes("view-research") || !mainJs.includes('"research"')) {
    fail("main.js missing research view wiring");
  } else {
    ok("research view wired in main.js");
  }

  // —— US Options (McMillan) ——
  const optSnap = path.join(ROOT, "public/data/us-options-snapshot.json");
  if (!fs.existsSync(optSnap)) {
    fail("missing public/data/us-options-snapshot.json (run npm run fetch-us-options)");
  } else {
    try {
      const snap = JSON.parse(fs.readFileSync(optSnap, "utf8"));
      if (snap.market !== "US") fail("us-options-snapshot market must be US");
      else ok("us-options-snapshot market US");
      if (snap.primaryBookId !== "book-mcmillan-options-handbook") {
        fail("us-options-snapshot primaryBookId must be book-mcmillan-options-handbook");
      } else ok("primary book McMillan");
      if (!Array.isArray(snap.tickers)) fail("us-options-snapshot tickers missing");
      else ok(`us-options tickers ${snap.tickers.length}`);
      const hasMissLabel = JSON.stringify(snap).includes("missingFields") || snap.tickers.some((t) => t.options == null || t.quality?.gate);
      if (!hasMissLabel) fail("snapshot missing incomplete/missingFields pattern");
      else ok("snapshot supports 資料不足 / missing fields");
    } catch (e) {
      fail(`us-options-snapshot parse: ${e}`);
    }
  }
  const optJs = fs.readFileSync(path.join(ROOT, "src/options.js"), "utf8");
  if (!optJs.includes("book-mcmillan-options-handbook") || !optJs.includes("plainTakeaways")) {
    fail("options.js missing McMillan primary / plainTakeaways");
  } else ok("options.js McMillan wiring");
  if (/Black-Scholes|\\bN\(d1\)|d1\s*=\s*\(/.test(optJs)) {
    fail("options.js appears to dump raw Greek / BS formulas");
  } else ok("options.js no raw formula dump");
  if (!/covered-call/.test(optJs) || !/protective-put/.test(optJs) || !/vertical-spread/.test(optJs) || !/calendar-diagonal/.test(optJs) || !/straddle-strangle/.test(optJs) || !/butterfly/.test(optJs)) {
    fail("options.js missing McMillan family ids");
  } else ok("McMillan strategy family ids present");
  if (!mainJs.includes("view-options") || !mainJs.includes('"options"')) {
    fail("main.js missing options view wiring");
  } else ok("options view wired in main.js");
  {
    const i18nOpt = fs.readFileSync(path.join(ROOT, "src/i18n.js"), "utf8");
    if (!i18nOpt.includes("navOptions") || !i18nOpt.includes("美股選擇權") || !i18nOpt.includes("非投資建議；選擇權風險高")) {
      fail("i18n missing options nav/title/disclaimer");
    } else ok("options i18n present");
  }
  const mcmillan = path.join(ROOT, "public/data/research-library.json");
  try {
    const rl = JSON.parse(fs.readFileSync(mcmillan, "utf8"));
    const book = (rl.items || []).find((x) => x.id === "book-mcmillan-options-handbook");
    if (!book) fail("research-library missing book-mcmillan-options-handbook");
    else if (!book.plainTakeaways?.length) fail("McMillan book missing plainTakeaways");
    else ok("McMillan research-library item");
  } catch (e) {
    fail(`McMillan library check: ${e}`);
  }



  // —— 讀財報 / Earnings digest ——
  const erSnap = path.join(ROOT, "public/data/earnings-digest.json");
  if (!fs.existsSync(erSnap)) {
    fail("missing public/data/earnings-digest.json (run npm run fetch-earnings)");
  } else {
    try {
      const dig = JSON.parse(fs.readFileSync(erSnap, "utf8"));
      if (dig.market !== "US") fail("earnings-digest market must be US");
      else ok("earnings-digest market US");
      if (!dig.asOf) fail("earnings-digest missing asOf");
      else ok(`earnings asOf ${dig.asOf}`);
      if (!Array.isArray(dig.mag7) || dig.mag7.length < 7) fail("earnings-digest mag7 incomplete");
      else ok(`earnings mag7 ${dig.mag7.length}`);
      const need = ["AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "TSLA"];
      const have = new Set(dig.mag7.map((x) => x.ticker));
      for (const tk of need) {
        if (!have.has(tk)) fail(`mag7 missing ${tk}`);
      }
      if (!have.has("GOOG") && !have.has("GOOGL")) fail("mag7 missing GOOGL/GOOG");
      else ok("mag7 tickers present");
      if (!Array.isArray(dig.watchlistHot)) fail("watchlistHot missing");
      else ok(`watchlistHot ${dig.watchlistHot.length}`);
      if (!dig.selectionRule || !/14/.test(dig.selectionRule)) fail("selectionRule should document 14d rule");
      else ok("selectionRule present");
      if (!dig.twStub) fail("twStub missing");
      else ok("twStub present");
      const blob = JSON.stringify(dig);
      if (!/資料不足|missingFields/.test(blob)) fail("digest should support 資料不足 / missingFields");
      else ok("digest supports 資料不足");
      if (!/非投資建議/.test(dig.disclaimer || "")) fail("earnings disclaimer missing 非投資建議");
      else ok("earnings disclaimer");
    } catch (e) {
      fail(`earnings-digest parse: ${e}`);
    }
  }
  const erJs = fs.readFileSync(path.join(ROOT, "src/earnings.js"), "utf8");
  if (/Black-Scholes|\\bN\(d1\)|d1\s*=\s*\(/.test(erJs)) {
    fail("earnings.js appears to dump raw formulas");
  } else ok("earnings.js no raw formula dump");
  if (!erJs.includes("whatItDoes") || !erJs.includes("whatToWatch") || !erJs.includes("metricBlock")) {
    fail("earnings.js missing plain-language card fields");
  } else ok("earnings.js plain cards");
  if (!mainJs.includes("view-earnings") || !mainJs.includes('"earnings"')) {
    fail("main.js missing earnings view wiring");
  } else ok("earnings view wired in main.js");
  {
    const i18nEr = fs.readFileSync(path.join(ROOT, "src/i18n.js"), "utf8");
    if (!i18nEr.includes("navEarnings") || !i18nEr.includes("讀財報") || !i18nEr.includes("earningsDisclaimer")) {
      fail("i18n missing earnings nav/title/disclaimer");
    } else ok("earnings i18n present");
    for (const langKey of ["navEarnings", "earningsTitle", "earningsDisclaimer", "earningsDataMissing"]) {
      const n = (i18nEr.match(new RegExp(langKey + ":", "g")) || []).length;
      if (n < 4) fail(`i18n ${langKey} expected 4 langs, got ${n}`);
    }
    ok("earnings i18n 4 langs");
  }
  if (!fs.existsSync(path.join(ROOT, "scripts/fetch-earnings.mjs"))) {
    fail("missing scripts/fetch-earnings.mjs");
  } else ok("fetch-earnings.mjs present");


  // —— SOXL desk ——
  const sxSnap = path.join(ROOT, "public/data/soxl-desk.json");
  if (!fs.existsSync(sxSnap)) {
    fail("missing public/data/soxl-desk.json (run npm run fetch-soxl)");
  } else {
    try {
      const desk = JSON.parse(fs.readFileSync(sxSnap, "utf8"));
      if (desk.market !== "US") fail("soxl-desk market must be US");
      else ok("soxl-desk market US");
      if (desk.ticker !== "SOXL") fail("soxl-desk ticker must be SOXL");
      else ok("soxl-desk ticker SOXL");
      if (!desk.asOf) fail("soxl-desk missing asOf");
      else ok(`soxl asOf ${desk.asOf}`);
      if (!desk.quote || desk.quote.price == null) fail("soxl-desk missing quote.price");
      else ok(`soxl quote ${desk.quote.price} (${desk.quote.changePct}%)`);
      if (!desk.holdingsAsOf) fail("soxl-desk missing holdingsAsOf (N-PORT date)");
      else ok(`soxl holdingsAsOf ${desk.holdingsAsOf}`);
      if (!Array.isArray(desk.holdings) || desk.holdings.length < 5) fail("soxl-desk holdings incomplete");
      else ok(`soxl holdings ${desk.holdings.length}`);
      const hasWeight = desk.holdings.every((h) => h.weightPct != null);
      if (!hasWeight) fail("soxl holdings missing weightPct");
      else ok("soxl holdings have weightPct");
      if (!Array.isArray(desk.news)) fail("soxl news missing");
      else ok(`soxl news ${desk.news.length}`);
      if (!Array.isArray(desk.overallUpReasons) || !Array.isArray(desk.overallDownReasons)) {
        fail("soxl overall up/down reasons missing");
      } else ok("soxl overall reasons");
      const disc = (desk.disclaimers || []).join(" ") + (desk.leverageNote || "");
      if (!/3|槓桿|杠杆|leverage|3×|3x/i.test(disc)) fail("soxl should mention 3x leverage in disclaimers/notes");
      else ok("soxl 3x leverage noted");
      if (!/非投資建議|Not investment advice|投資助言ではない|非投资建议/.test((desk.disclaimers || []).join(" "))) {
        fail("soxl disclaimers missing 非投資建議-class text");
      } else ok("soxl disclaimer");
      if (!Array.isArray(desk.sourcesUsed) || !desk.sourcesUsed.length) fail("soxl sourcesUsed missing");
      else ok(`soxl sourcesUsed ${desk.sourcesUsed.length}`);
    } catch (e) {
      fail(`soxl-desk parse: ${e}`);
    }
  }
  const sxJs = fs.readFileSync(path.join(ROOT, "src/soxl.js"), "utf8");
  if (/Black-Scholes|\\bN\(d1\)|d1\s*=\s*\(/.test(sxJs)) {
    fail("soxl.js appears to dump raw formulas");
  } else ok("soxl.js no raw formula dump");
  if (!sxJs.includes("contributionPct") || !sxJs.includes("renderSoxlSection") || !sxJs.includes("sx-hero")) {
    fail("soxl.js missing hero/contribution wiring");
  } else ok("soxl.js hero + contribution");
  if (!mainJs.includes("view-soxl") || !mainJs.includes('"soxl"')) {
    fail("main.js missing soxl view wiring");
  } else ok("soxl view wired in main.js");
  {
    const i18nSx = fs.readFileSync(path.join(ROOT, "src/i18n.js"), "utf8");
    if (!i18nSx.includes("navSoxl") || !i18nSx.includes("soxlDisclaimer") || !i18nSx.includes("soxlTitle")) {
      fail("i18n missing soxl nav/title/disclaimer");
    } else ok("soxl i18n present");
    for (const langKey of ["navSoxl", "soxlTitle", "soxlDisclaimer", "soxlContributionHint"]) {
      const n = (i18nSx.match(new RegExp(langKey + ":", "g")) || []).length;
      if (n < 4) fail(`i18n ${langKey} expected 4 langs, got ${n}`);
    }
    ok("soxl i18n 4 langs");
  }
  if (!fs.existsSync(path.join(ROOT, "scripts/fetch-soxl.mjs"))) {
    fail("missing scripts/fetch-soxl.mjs");
  } else ok("fetch-soxl.mjs present");
  if (!fs.existsSync(path.join(ROOT, "src/soxl.css"))) {
    fail("missing src/soxl.css");
  } else ok("soxl.css present");

  // —— Godzilla playbook (candidate / watch only) ——
  const gzJsPath = path.join(ROOT, "src/godzilla.js");
  if (!fs.existsSync(gzJsPath)) fail("missing src/godzilla.js");
  else ok("godzilla.js present");
  if (!fs.existsSync(path.join(ROOT, "src/godzilla.css"))) fail("missing src/godzilla.css");
  else ok("godzilla.css present");
  const gzJs = fs.readFileSync(gzJsPath, "utf8");
  if (!gzJs.includes("renderGodzillaSection") || !gzJs.includes("initGodzilla") || !gzJs.includes("gz-hero")) {
    fail("godzilla.js missing hero / export wiring");
  } else ok("godzilla.js hero + exports");
  if (!gzJs.includes("godzillaSelfReport") || !gzJs.includes("7n-e5pe6z4U")) {
    fail("godzilla.js missing YouTube source or self-report label key");
  } else ok("godzilla source + self-report");
  if (/\bfetch\s*\(/.test(gzJs) || /strategy-screener|paper-trade\.mjs/.test(gzJs)) {
    fail("godzilla.js must stay static (no live fetch / screener wiring)");
  } else ok("godzilla static (no fetch)");
  if (!mainJs.includes("view-godzilla") || !mainJs.includes('"godzilla"') || !mainJs.includes("initGodzilla")) {
    fail("main.js missing godzilla view wiring");
  } else ok("godzilla view wired in main.js");
  {
    const i18nGz = fs.readFileSync(path.join(ROOT, "src/i18n.js"), "utf8");
    if (!i18nGz.includes("navGodzilla") || !i18nGz.includes("哥吉拉心法") || !i18nGz.includes("godzillaDisclaimer")) {
      fail("i18n missing godzilla nav/title/disclaimer");
    } else ok("godzilla i18n present");
    for (const langKey of ["navGodzilla", "godzillaTitle", "godzillaDisclaimer", "godzillaGateNote", "godzillaTwTitle"]) {
      const n = (i18nGz.match(new RegExp(langKey + ":", "g")) || []).length;
      if (n < 4) fail(`i18n ${langKey} expected 4 langs, got ${n}`);
    }
    ok("godzilla i18n 4 langs");
    if (!/尚未寫進正式篩選|Not in the formal screener/.test(i18nGz)) {
      fail("godzilla gate note missing");
    } else ok("godzilla gate note");
    if (!/strategyCandidate=watch|strategyCandidate=watch/.test(i18nGz) && !i18nGz.includes("strategyCandidate=watch")) {
      fail("godzilla status watch note missing");
    } else ok("godzilla watch status noted");
  }


  // —— Explicit jargon regression (live-site crash set) ——

  const jargonIds = ["ultra-short", "peter-lynch", "benjamin-graham", "inst-sync", "margin-up"];
  for (const id of jargonIds) {
    const s = strategies.find((x) => x.id === id);
    if (!s) {
      fail(`expected pack ${id} missing from screener`);
      continue;
    }
    const jargonHits = (s.conditions || []).filter((c) =>
      /本益比|RSI|振幅|\d+\s*張|營益率|外資|投信|自營商|毛利率/.test(c.text || "")
    );
    try {
      const html = renderStrategyPanel(s, data, "TW");
      if (!html.includes(`data-strategy-id="${id}"`)) fail(`jargon regression ${id}: panel id missing`);
      else ok(`jargon regression render ${id} (${jargonHits.length} jargon conditions)`);
    } catch (e) {
      fail(`jargon regression ${id}: ${e?.stack || e}`);
    }
  }

  // —— Incomplete packs must show 資料不足 / incomplete UI ——
  for (const s of strategies.filter((x) => x.incomplete)) {
    try {
      const html = renderStrategyPanel(s, data, "TW");
      if (!/xq-incomplete|資料不足|incomplete/i.test(html)) {
        fail(`incomplete pack ${s.id} missing incomplete UI`);
      } else ok(`incomplete UI ${s.id}`);
    } catch (e) {
      fail(`incomplete pack ${s.id}: ${e?.stack || e}`);
    }
  }

  // —— TW/US toggle (kostolany has both markets) ——
  const kosto = strategies.find((x) => x.id === "kostolany-cycle");
  if (kosto) {
    const tab = catOf(kosto);
    click(root.querySelector(`[data-xq-tab="${tab}"]`));
    click(root.querySelector(`[data-xq-id="${kosto.id}"]`));
    const usBtn = root.querySelector('[data-xq-market="US"]');
    const twBtn = root.querySelector('[data-xq-market="TW"]');
    if (!usBtn || !twBtn) {
      fail("kostolany missing TW/US market tabs");
    } else {
      try {
        click(usBtn);
        const usActive = root.querySelector('[data-xq-market="US"].active');
        const panelMkt = root.querySelector(".xq-market-block")?.getAttribute("data-market");
        if (!usActive) fail("US market tab not active after click");
        else if (panelMkt && panelMkt !== "US") fail(`US click left market block at ${panelMkt}`);
        else ok("TW/US toggle → US");
        click(root.querySelector('[data-xq-market="TW"]'));
        if (!root.querySelector('[data-xq-market="TW"].active')) fail("TW market tab not active after click");
        else ok("TW/US toggle → TW");
      } catch (e) {
        fail(`TW/US toggle: ${e?.stack || e}`);
      }
    }
  } else {
    fail("kostolany-cycle missing (needed for TW/US smoke)");
  }

  // —— Copy JSON / Export CSV / watchlist / backtest disabled ——
  const withHits = strategies.find((s) => (s.hits || []).length > 0 && !s.incomplete) || strategies[0];
  {
    const tab = catOf(withHits);
    click(root.querySelector(`[data-xq-tab="${tab}"]`));
    click(root.querySelector(`[data-xq-id="${withHits.id}"]`));

    // clipboard mock
    let copied = null;
    Object.defineProperty(window.navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (t) => {
          copied = t;
        },
      },
    });

    const copyBtn = root.querySelector("[data-xq-copy]");
    if (!copyBtn) fail("copy button missing");
    else {
      try {
        click(copyBtn);
        const toast = root.querySelector("#xq-toast");
        if (copied && copied.includes('"strategies"')) ok("copy JSON wrote clipboard");
        else if (toast && !toast.hidden) ok("copy JSON showed toast (fallback path)");
        else fail("copy JSON produced neither clipboard nor toast");
      } catch (e) {
        fail(`copy JSON: ${e?.stack || e}`);
      }
    }

    const csvBtn = root.querySelector("[data-xq-csv]");
    if (!csvBtn) fail("csv button missing");
    else {
      try {
        // jsdom may not fully support download; ensure handler does not throw
        click(csvBtn);
        ok("export CSV click did not throw");
      } catch (e) {
        fail(`export CSV: ${e?.stack || e}`);
      }
    }

    const backtest = [...root.querySelectorAll("button")].find((b) => b.disabled && /回測|Backtest|バックテスト/.test(b.textContent || ""));
    if (!backtest) fail("disabled backtest button missing");
    else ok("backtest button disabled");

    const watch = root.querySelector("[data-xq-watch]");
    if (watch) {
      try {
        localStorage.removeItem("jml-watchlist");
        click(watch);
        const raw = localStorage.getItem("jml-watchlist");
        const list = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(list) || !list.some((x) => x.ticker === watch.getAttribute("data-xq-watch"))) {
          fail("watchlist localStorage not updated");
        } else ok(`watchlist stub stored ${watch.getAttribute("data-xq-watch")}`);
      } catch (e) {
        fail(`watchlist: ${e?.stack || e}`);
      }
    } else {
      ok("watchlist skipped (no hit rows on sample)");
    }
  }

  // —— Social removed; mobile bottom nav ≤5 with More sheet ——
  const mainSrc = fs.readFileSync(path.join(ROOT, "src/main.js"), "utf8");
  if (/view-social|renderChatRoom|data-ticker-comments|mountChatRoom|mountAllTickerComments|initSocialDigest|bindDanmakuToggles|chrome-danmaku/.test(mainSrc)) {
    fail("social/chat/danmaku/ticker-comments still present in main.js");
  } else ok("social/chat/danmaku fully removed from main.js");
  for (const gone of ["src/chat.js", "src/danmaku.js", "src/comments.js", "src/social-digest.js", "src/config.js"]) {
    if (fs.existsSync(path.join(ROOT, gone))) fail(`${gone} should be deleted`);
    else ok(`deleted ${gone}`);
  }
  if (!/MOBILE_PRIMARY/.test(mainSrc) || !/MOBILE_MORE/.test(mainSrc) || !/nav-more-sheet/.test(mainSrc) || !/data-nav-more/.test(mainSrc)) {
    fail("mobile More sheet / MOBILE_PRIMARY|MORE missing from main.js");
  } else ok("mobile More sheet wiring present");
  const primaryMatch = mainSrc.match(/MOBILE_PRIMARY\s*=\s*\[([^\]]+)\]/);
  if (!primaryMatch) fail("MOBILE_PRIMARY array not found");
  else {
    const ids = primaryMatch[1].split(",").map((s) => s.replace(/["'\s]/g, "")).filter(Boolean);
    if (ids.length > 4) fail(`MOBILE_PRIMARY has ${ids.length} ids (primary tabs + More must be ≤5 total)`);
    else ok(`MOBILE_PRIMARY has ${ids.length} tabs (+ More = ${ids.length + 1})`);
  }
  const i18nSrc = fs.readFileSync(path.join(ROOT, "src/i18n.js"), "utf8");
  if (/navSocial|全頻彈幕|Site danmaku|社群聊天|usLobby/.test(i18nSrc)) {
    fail("obsolete social i18n strings still present");
  } else ok("obsolete social i18n cleaned");
  for (const pair of [
    ["navMore: \"更多\"", "zh-Hant More"],
    ["navMore: \"More\"", "en More"],
    ["navMore: \"更多\"", "zh-Hans More (or zh-Hant inherit)"],
    ["navMore: \"その他\"", "ja More"],
  ]) {
    if (!i18nSrc.includes(pair[0])) fail(`i18n missing ${pair[1]} (${pair[0]})`);
  }
  if (!/navMoreClose:\s*"關閉"/.test(i18nSrc) || !/navMoreClose:\s*"Close"/.test(i18nSrc)) {
    fail("navMoreClose i18n missing");
  } else ok("navMore / navMoreClose i18n labels");
  const cssNav = fs.readFileSync(path.join(ROOT, "src/style.css"), "utf8");
  if (!/repeat\(5,\s*minmax\(0,\s*1fr\)\)/.test(cssNav)) {
    fail("nav-bottom should use 5-column grid");
  } else ok("nav-bottom 5-column grid");
  if (!/\.nav-more-sheet/.test(cssNav) || !/\.nav-more-item/.test(cssNav)) {
    fail("nav-more-sheet styles missing");
  } else ok("nav-more-sheet styles present");
  if (!/id="nav-more-sheet"[^>]*\bhidden\b/.test(mainSrc) && !/<div id="nav-more-sheet" class="nav-more-sheet" hidden>/.test(mainSrc)) {
    fail("initial HTML must render #nav-more-sheet with [hidden] (closed by default)");
  } else ok("nav-more-sheet initial [hidden] in markup");
  if (!/\.nav-more-sheet\[hidden\]\s*\{[^}]*display:\s*none\s*!important/.test(cssNav)) {
    fail("CSS must force .nav-more-sheet[hidden]{display:none!important} so author display:flex cannot override UA hidden");
  } else ok("nav-more-sheet[hidden] display:none !important");
  if (!/\.nav-more-sheet\.is-open/.test(cssNav) || !/translateY\(/.test(cssNav)) {
    fail("More sheet needs .is-open + translateY slide animation");
  } else ok("More sheet .is-open slide animation");
  if (!/nav-more-grabber/.test(mainSrc) || !/\.nav-more-grabber/.test(cssNav)) {
    fail("nav-more-grabber missing (mainstream bottom-sheet pattern)");
  } else ok("nav-more-grabber present");
  if (!/navEscapeHandler|key === "Escape"/.test(mainSrc)) {
    fail("Escape should close More sheet");
  } else ok("Escape closes More sheet");
  {
    const gz = mainSrc.match(/godzilla:\s*`([^`]+)`/);
    if (!gz) fail("godzilla nav icon missing");
    else if (/l-\.?8 10/.test(gz[1])) fail("godzilla nav icon still tombstone/trash path");
    else ok("godzilla nav icon is not tombstone");
  }
  if (!mainSrc.includes('id="strategies"') || !mainSrc.includes('id="paper"')) {
    fail("strategies/paper view-anchor ids missing");
  } else ok("strategies/paper view-anchor ids present");
  if (!mainSrc.includes("decodeURIComponent")) {
    fail("parseViewFromHash should decodeURIComponent for zh aliases");
  } else ok("hash decodeURIComponent present");

  // —— Stock lookup (#lookup / #quote) ——
  if (!/from "\.\/lookup\.js"/.test(mainSrc) && !/from '\.\/lookup\.js'/.test(mainSrc)) {
    fail("main.js should import lookup.js");
  } else ok("lookup.js imported in main.js");
  if (!fs.existsSync(path.join(ROOT, "src/lookup.js")) || !fs.existsSync(path.join(ROOT, "src/lookup.css"))) {
    fail("src/lookup.js or lookup.css missing");
  } else ok("lookup.js + lookup.css present");
  if (!/view-lookup/.test(mainSrc) || !/renderLookupSection/.test(mainSrc) || !/initLookup/.test(mainSrc)) {
    fail("lookup view shell / render / init missing in main.js");
  } else ok("lookup view wired in main.js");
  if (!/MOBILE_MORE\s*=\s*\[[^\]]*lookup/.test(mainSrc)) {
    fail("lookup should be under MOBILE_MORE (not a 6th primary tab)");
  } else ok("lookup listed in MOBILE_MORE");
  if (!/navLookup/.test(i18nSrc) || !/lookupTitle/.test(i18nSrc) || !/lookupLead/.test(i18nSrc)) {
    fail("lookup i18n keys missing");
  } else ok("lookup i18n keys present");
  for (const pair of [
    ['navLookup: "查股"', "zh-Hant navLookup"],
    ['navLookup: "Lookup"', "en navLookup"],
    ['navLookup: "查股"', "zh-Hans navLookup"],
    ['navLookup: "銘柄検索"', "ja navLookup"],
  ]) {
    if (!i18nSrc.includes(pair[0])) fail(`i18n missing ${pair[1]}`);
  }
  ok("lookup nav labels in 4 locales");
  {
    const lookupSrc = fs.readFileSync(path.join(ROOT, "src/lookup.js"), "utf8");
    if (!/normalizeSymbol/.test(lookupSrc) || !/lookupStock/.test(lookupSrc)) {
      fail("lookup.js missing normalizeSymbol / lookupStock");
    } else ok("lookup.js exports core API symbols in source");
    if (!/query2\.finance\.yahoo\.com|query1\.finance\.yahoo\.com/.test(lookupSrc)) {
      fail("lookup.js should fetch public Yahoo Finance hosts");
    } else ok("lookup.js targets Yahoo Finance public hosts");
    if (!/Never invents numbers/.test(lookupSrc)) fail("lookup.js should document never-invent rule");
    else ok("lookup never-invent documented");
    if (!/r\.jina\.ai/.test(lookupSrc)) {
      fail("lookup.js should include CORS-friendly Yahoo fetch fallback");
    } else ok("lookup CORS/Yahoo fallback present");
  }
  // normalizeSymbol unit checks (no network)
  {
    const mod = await import(pathToFileURL(path.join(ROOT, "src/lookup.js")).href);
    const { normalizeSymbol } = mod;
    const us = normalizeSymbol("aapl", "US");
    if (!us.ok || us.symbol !== "AAPL" || us.market !== "US") fail(`normalizeSymbol AAPL => ${JSON.stringify(us)}`);
    else ok("normalizeSymbol AAPL");
    const tw = normalizeSymbol("2330", "TW");
    if (!tw.ok || tw.symbol !== "2330.TW" || tw.market !== "TW") fail(`normalizeSymbol 2330 => ${JSON.stringify(tw)}`);
    else ok("normalizeSymbol 2330 → 2330.TW");
    const tw2 = normalizeSymbol("2330.TW", "US");
    if (!tw2.ok || tw2.market !== "TW") fail("2330.TW should force TW market");
    else ok("normalizeSymbol 2330.TW market TW");
    const bad = normalizeSymbol("%%%", "US");
    if (bad.ok) fail("normalizeSymbol should reject garbage");
    else ok("normalizeSymbol rejects invalid");
  }


  // Official filings deep-links (US SEC / TW MOPS) — pure, no network
  {
    const lookupSrc = fs.readFileSync(path.join(ROOT, "src/lookup.js"), "utf8");
    if (!/buildOfficialLinks/.test(lookupSrc) || !/fetchOfficialFilings/.test(lookupSrc)) {
      fail("lookup.js missing buildOfficialLinks / fetchOfficialFilings");
    } else ok("lookup official filings API present");
    if (!/data\.sec\.gov\/submissions|company_tickers\.json/.test(lookupSrc)) {
      fail("lookup.js should reference SEC submissions / ticker map");
    } else ok("lookup SEC endpoints referenced");
    if (!/mops\.twse\.com\.tw/.test(lookupSrc)) {
      fail("lookup.js should deep-link MOPS for TW filings");
    } else ok("lookup MOPS deep-links present");
    if (!/paintOfficialFilings|lk-ofil/.test(lookupSrc)) {
      fail("lookup.js should render official filings section");
    } else ok("lookup official filings UI present");
    if (!/lookupOfficialFilings/.test(i18nSrc)) fail("i18n missing lookupOfficialFilings");
    else ok("i18n lookupOfficialFilings present");
    const mod = await import(pathToFileURL(path.join(ROOT, "src/lookup.js")).href);
    const { buildOfficialLinks, padCik, edgarDocumentUrl } = mod;
    if (typeof buildOfficialLinks !== "function") fail("buildOfficialLinks not exported");
    const us = buildOfficialLinks({ market: "US", symbol: "AAPL", display: "AAPL", cik: "0000320193" });
    if (!us.links?.some((l) => /sec\.gov/i.test(l.href))) fail("US official links missing SEC");
    else ok("US official SEC links built");
    if (!us.links?.some((l) => /CIK=320193|CIK=0000320193/i.test(l.href))) fail("US CIK browse link missing");
    else ok("US SEC CIK browse link present");
    const tw = buildOfficialLinks({ market: "TW", symbol: "2330.TW", display: "2330" });
    if (!tw.links?.some((l) => /mops\.twse\.com\.tw/i.test(l.href) && /2330/.test(l.href))) {
      fail("TW MOPS code deep-link missing");
    } else ok("TW MOPS deep-links include stock code");
    if (!tw.links?.some((l) => l.kind === "quote")) fail("TW should keep Yahoo as quote (non-official) link");
    else ok("TW Yahoo quote labeled separately");
    if (padCik(320193) !== "0000320193") fail(`padCik failed: ${padCik(320193)}`);
    else ok("padCik pads to 10 digits");
    const doc = edgarDocumentUrl("0000320193", "0000320193-25-000079", "aapl-20250927.htm");
    if (!/Archives\/edgar\/data\/320193\/000032019325000079\/aapl-20250927\.htm/.test(doc || "")) {
      fail(`edgarDocumentUrl unexpected: ${doc}`);
    } else ok("edgarDocumentUrl builds archive path");
    const cssLookup = fs.readFileSync(path.join(ROOT, "src/lookup.css"), "utf8");
    if (!/\.lk-ofil/.test(cssLookup) || !/lk-src-official/.test(cssLookup)) {
      fail("lookup.css missing official filings styles");
    } else ok("lookup.css official filings styles present");
  }

  // —— Mobile 「熱門」 market-index marquee/ticker ——
  if (!/index-strip--marquee/.test(mainSrc) || !/index-marquee-track/.test(mainSrc)) {
    fail("renderIndexStrip should emit index-strip--marquee + index-marquee-track");
  } else ok("market index marquee markup in main.js");
  if (!/bindMarketMarquee/.test(mainSrc) || !/is-paused/.test(mainSrc)) {
    fail("bindMarketMarquee / is-paused touch pause missing");
  } else ok("market marquee pause binding present");
  if (!/index-marquee-scroll/.test(cssNav) || !/animation-play-state:\s*paused/.test(cssNav)) {
    fail("style.css missing index-marquee-scroll / animation-play-state:paused");
  } else ok("market marquee CSS animation + pause");
  if (!/@media\s*\(prefers-reduced-motion:\s*reduce\)[\s\S]*?index-marquee-track[\s\S]*?animation:\s*none/.test(cssNav)) {
    fail("prefers-reduced-motion should disable index-marquee-track animation");
  } else ok("market marquee respects prefers-reduced-motion");

  // —— CSS: tall sticky chips must stay disabled (root cause of dead panel clicks) ——
  const css = fs.readFileSync(path.join(ROOT, "src/strategies.css"), "utf8");
  if (!/Do NOT sticky the full chip list/.test(css) && !/\.xq-chips\s*\{[\s\S]*?position:\s*static\s*!important/.test(css)) {
    // softer check
    if (!/position:\s*static\s*!important/.test(css)) {
      fail("strategies.css missing mobile .xq-chips position:static !important guard");
    } else ok("xq-chips sticky overlay guard present");
  } else {
    ok("xq-chips sticky overlay guard present");
  }
  if (!/\.xq-tabs/.test(css)) fail("strategies.css missing .xq-tabs");
  else ok("xq-tabs styles present");
  if (!/\.xq-tabs[^{]*\{[\s\S]*?overflow-x:\s*auto/.test(css)) {
    fail("strategies.css .xq-tabs missing overflow-x:auto");
  } else {
    ok("xq-tabs overflow-x:auto");
  }
  if (!/padding-inline[^;]*1\.\d+rem/.test(css) && !/padding-inline-end/.test(css)) {
    fail("strategies.css .xq-tabs missing padding-inline end for last tab");
  } else {
    ok("xq-tabs padding-inline end");
  }
  if (!/\.xq-main[^{]*\{[\s\S]*?min-width:\s*0/.test(css)) {
    fail("strategies.css .xq-main missing min-width:0 (grid overflow clip)");
  } else {
    ok("xq-main min-width:0");
  }

  // —— Built docs/data screener stays in sync with public (if both exist) ——
  const docsScreener = path.join(ROOT, "docs/data/strategy-screener.json");
  if (fs.existsSync(docsScreener)) {
    const docs = JSON.parse(fs.readFileSync(docsScreener, "utf8"));
    const pubIds = strategies.map((s) => s.id).sort().join(",");
    const docIds = (docs.strategies || []).map((s) => s.id).sort().join(",");
    if (pubIds !== docIds) fail("docs/data strategy ids diverge from public/data");
    else ok("docs/data strategy ids match public/data");
  }

  if (errors.length) {
    for (const e of errors) fail(`window error: ${e}`);
  }

  finish();
}

function finish() {
  console.log("——");
  if (failures.length) {
    console.error(`▶ predeploy-smoke: ${failures.length} failure(s)`);
    process.exit(1);
  }
  console.log("▶ predeploy-smoke: all checks passed");
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
