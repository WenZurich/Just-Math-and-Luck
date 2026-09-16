#!/usr/bin/env node
/**
 * Weekday routine stub — grow public/data/research-library.json
 *
 * Intended schedule (Asia/Taipei weekdays):
 *  1. Search for new public US/TW finance papers (arXiv / SSRN / central-bank notes).
 *  2. Append items with ORIGINAL short summaries (never paste copyrighted book text).
 *  3. For each item set: market, type, formulas[], plainTakeaways[], strategyCandidate, status, mathGateNote, sources[].
 *     UI shows plainTakeaways only — formulas/mathGateNote stay machine-facing.
 *  4. Keep status=candidate|watch until olympiad math gate passes → then adopted (or rejected).
 *  5. Copy JSON to docs/data/ when publishing Pages.
 *
 * Usage:
 *   node scripts/update-research-library.mjs           # validate + print counts
 *   node scripts/update-research-library.mjs --check   # exit 1 on schema errors
 *
 * This stub does NOT auto-fetch the web yet — edit the JSON (or extend this script).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "public/data/research-library.json");
const DOCS = path.join(ROOT, "docs/data/research-library.json");

const MARKETS = new Set(["US", "TW", "BOTH"]);
const TYPES = new Set(["book", "paper", "podcast"]);
const CAND = new Set(["yes", "no", "watch"]);
const STATUS = new Set(["candidate", "deferred", "adopted", "rejected"]);
const SHELVES = new Set([
  "core_investing","value_investing","business_management","life_partner_wisdom","options",
  "recent_reads","fi_concepts","money_values","investing_basics","asset_allocation",
  "financials","market_analysis","econ_analysis","psych_randomness","biographies","adjacent",
]);

const check = process.argv.includes("--check");

function fail(msg) {
  console.error("FAIL:", msg);
  if (check) process.exitCode = 1;
}

function ok(msg) {
  console.log("OK:", msg);
}

function validateItem(it, i) {
  const prefix = `items[${i}] (${it?.id || "?"})`;
  if (!it || typeof it !== "object") return fail(`${prefix}: not an object`);
  for (const k of [
    "id",
    "market",
    "type",
    "title",
    "authors",
    "year",
    "summary",
    "formulas",
    "plainTakeaways",
    "strategyCandidate",
    "status",
    "mathGateNote",
    "sources",
  ]) {
    if (!(k in it)) fail(`${prefix}: missing ${k}`);
  }
  if (!Array.isArray(it.plainTakeaways) || !it.plainTakeaways.length) {
    fail(`${prefix}: plainTakeaways must be non-empty array`);
  }
  if (!MARKETS.has(it.market)) fail(`${prefix}: bad market ${it.market}`);
  if (!TYPES.has(it.type)) fail(`${prefix}: bad type ${it.type}`);
  if (!CAND.has(it.strategyCandidate)) fail(`${prefix}: bad strategyCandidate`);
  if (!STATUS.has(it.status)) fail(`${prefix}: bad status`);
  if (!Array.isArray(it.authors)) fail(`${prefix}: authors must be array`);
  if (!Array.isArray(it.formulas)) fail(`${prefix}: formulas must be array`);
  if (!Array.isArray(it.sources)) fail(`${prefix}: sources must be array`);
  if (typeof it.summary !== "string" || it.summary.length < 40) {
    fail(`${prefix}: summary too short`);
  }
  if (it.shelf != null && !SHELVES.has(it.shelf)) fail(`${prefix}: bad shelf ${it.shelf}`);
  if (!it.shelf) fail(`${prefix}: missing shelf`);
}

function main() {
  if (!fs.existsSync(SRC)) {
    fail(`missing ${SRC}`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(SRC, "utf8"));
  const items = data.items || [];
  items.forEach(validateItem);
  const books = items.filter((x) => x.type === "book").length;
  const papers = items.filter((x) => x.type === "paper").length;
  ok(`research-library: ${books} books, ${papers} papers, ${items.length} total`);
  ok(`mathGate note: ${data.meta?.mathGate || "(none)"}`);

  // Optional mirror for GitHub Pages when docs/data exists
  if (fs.existsSync(path.dirname(DOCS))) {
    fs.copyFileSync(SRC, DOCS);
    ok(`copied → docs/data/research-library.json`);
  }

  console.log(`
Weekday update checklist:
  • Add new book/paper objects to public/data/research-library.json
  • Original summaries only; cite public URLs in sources[]
  • status stays candidate until math gate passes
  • npm run test:smoke && npm run build && sync docs/
`);
}

main();
