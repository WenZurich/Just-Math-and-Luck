#!/usr/bin/env node
/**
 * Pre-deploy smoke gate for Just-Math-and-Luck-
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
const REQUIRED_HASHES = ["#today", "#logic", "#research", "#strategies", "#paper", "#social"];

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
      url: "http://localhost/Just-Math-and-Luck-/",
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
  for (const id of ["view-today", "view-logic", "view-research", "view-strategies", "view-paper", "view-social"]) {
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

  // —— Community chat: lobby-only + site-wide danmaku toggle ——
  const mainSrc = fs.readFileSync(path.join(ROOT, "src/main.js"), "utf8");
  if (/data-chat-mode=["']ticker["']/.test(mainSrc) || /collectTickerChips/.test(mainSrc)) {
    fail("chat still has per-ticker mode / ticker chips");
  } else ok("lobby-only chat (no per-ticker mode)");
  if (!/data-danmaku-toggle/.test(mainSrc) || !/chrome-danmaku-toggle/.test(mainSrc)) {
    fail("site-wide danmaku toggle missing from chrome/chat");
  } else ok("site-wide danmaku toggle present");
  const danmakuSrc = fs.readFileSync(path.join(ROOT, "src/danmaku.js"), "utf8");
  if (!/ss-danmaku-enabled/.test(danmakuSrc) || !/export function isDanmakuEnabled/.test(danmakuSrc)) {
    fail("danmaku localStorage preference API missing");
  } else ok("danmaku preference persists via localStorage");
  const i18nSrc = fs.readFileSync(path.join(ROOT, "src/i18n.js"), "utf8");
  if (!/全頻彈幕/.test(i18nSrc) || !/Site danmaku/.test(i18nSrc)) {
    fail("danmakuFx i18n missing 全頻彈幕 / Site danmaku");
  } else ok("danmakuFx i18n labels");

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
