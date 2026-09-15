#!/usr/bin/env node
/**
 * Validate stock picks JSON (latest.json or any archive file).
 * Usage: node scripts/validate-data.mjs [path]
 * Default: public/data/latest.json
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const path = resolve(process.argv[2] || "public/data/latest.json");
const errors = [];
const warnings = [];

function fail(msg) {
  errors.push(msg);
}
function warn(msg) {
  warnings.push(msg);
}

function req(obj, key, ctx) {
  if (obj == null || !(key in obj)) {
    fail(`${ctx}: missing required field "${key}"`);
    return undefined;
  }
  return obj[key];
}

function isNum(v) {
  return typeof v === "number" && !Number.isNaN(v);
}

function validateStock(s, ctx, { needMarket = false } = {}) {
  if (!s || typeof s !== "object") {
    fail(`${ctx}: not an object`);
    return;
  }
  req(s, "ticker", ctx);
  req(s, "name", ctx);
  if (needMarket) req(s, "market", ctx);
  if (!isNum(s.price)) fail(`${ctx}: price must be number`);
  if (s.currency == null) fail(`${ctx}: missing currency`);
  if (!isNum(s.dayPct)) fail(`${ctx}: dayPct must be number`);
  if (s.pct5d != null && !isNum(s.pct5d)) fail(`${ctx}: pct5d must be number`);
  if (s.pct1m != null && !isNum(s.pct1m)) fail(`${ctx}: pct1m must be number`);
  if (s.volRatio != null && !isNum(s.volRatio)) fail(`${ctx}: volRatio must be number`);
  if (typeof s.aboveSma20 !== "boolean") fail(`${ctx}: aboveSma20 must be boolean`);
  if (typeof s.aboveSma50 !== "boolean") fail(`${ctx}: aboveSma50 must be boolean`);
  if (!Array.isArray(s.screens)) fail(`${ctx}: screens must be array`);
  if (s.business == null) warn(`${ctx}: missing business`);
  if (s.why == null) warn(`${ctx}: missing why`);
  if (s.risk == null) warn(`${ctx}: missing risk`);
}

if (!existsSync(path)) {
  console.error(`FAIL: file not found: ${path}`);
  process.exit(1);
}

let data;
try {
  data = JSON.parse(readFileSync(path, "utf8"));
} catch (e) {
  console.error(`FAIL: invalid JSON: ${e.message}`);
  process.exit(1);
}

req(data, "asOf", "root");
req(data, "disclaimer", "root");
req(data, "indices", "root");
req(data, "top5", "root");
req(data, "us", "root");
req(data, "tw", "root");
req(data, "method", "root");

if (data.indices) {
  for (const key of ["tw", "spx", "nasdaq", "sox", "usdTwd"]) {
    if (!(key in data.indices)) warn(`indices: missing optional/expected "${key}"`);
  }
  if (data.indices.tw && data.indices.tw.value == null && !data.indices.tw.incomplete) {
    warn("indices.tw: value is null");
  }
  if (data.indices.usdTwd) {
    const fx = data.indices.usdTwd;
    if (fx.taipeiClose == null && fx.yahoo == null) fail("indices.usdTwd: need taipeiClose or yahoo");
  }
}

if (!Array.isArray(data.top5)) fail("top5 must be array");
else {
  if (data.top5.length === 0) warn("top5 is empty");
  data.top5.forEach((s, i) => validateStock(s, `top5[${i}]`, { needMarket: true }));
}

if (!Array.isArray(data.us)) fail("us must be array");
else data.us.forEach((s, i) => validateStock(s, `us[${i}]`));

if (!Array.isArray(data.tw)) fail("tw must be array");
else data.tw.forEach((s, i) => validateStock(s, `tw[${i}]`));

if (data.parity) {
  for (const k of ["tsm", "tw2330", "premiumPct", "adsRatio"]) {
    if (!(k in data.parity)) warn(`parity: missing "${k}"`);
  }
}

if (data.method) {
  for (const k of ["A", "B", "C"]) {
    if (!(k in data.method)) warn(`method: missing screen "${k}"`);
  }
}

if (warnings.length) {
  console.log("Warnings:");
  warnings.forEach((w) => console.log("  -", w));
}

if (errors.length) {
  console.error("Errors:");
  errors.forEach((e) => console.error("  -", e));
  console.error(`\nFAIL: ${path} (${errors.length} error(s))`);
  process.exit(1);
}

console.log(`OK: ${path}`);
console.log(
  `  asOf=${data.asOf} top5=${data.top5?.length ?? 0} us=${data.us?.length ?? 0} tw=${data.tw?.length ?? 0}`
);
