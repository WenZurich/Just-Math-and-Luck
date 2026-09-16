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
const REQUIRED_HASHES = ["#today", "#logic", "#strategies", "#paper", "#social"];

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
  for (const id of ["view-today", "view-logic", "view-strategies", "view-paper", "view-social"]) {
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
