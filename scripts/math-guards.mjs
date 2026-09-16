#!/usr/bin/env node
/**
 * Olympiad-grade property guards for screening math.
 * Habit → code: prove edge cases (empty, singleton, ÷0, NaN/∞) before trusting
 * a formula on live quotes. Failures here must block smoke / predeploy.
 *
 * See scripts/study/olympiad-math-guards.md
 */
import {
  isFiniteNumber,
  sma,
  pctChange,
  retChange,
  volumeRatio,
  rsVsIndex,
  baseRankingScore,
  avgVolume,
} from "./math-core.mjs";
import { temperatureScore } from "./market-regime.mjs";

const failures = [];
function fail(msg) {
  failures.push(msg);
  console.error("FAIL:", msg);
}
function ok(msg) {
  console.log("OK:", msg);
}
function assert(cond, msg) {
  if (!cond) fail(msg);
  else ok(msg);
}
function approx(a, b, eps = 1e-9) {
  return isFiniteNumber(a) && isFiniteNumber(b) && Math.abs(a - b) <= eps;
}

console.log("▶ math-guards: start");

// —— SMA: empty / single / window bounds / NaN / Infinity ——
assert(sma([], 5) === null, "SMA empty series → null");
assert(sma([10], 1) === 10, "SMA single point window=1 → value");
assert(sma([10], 2) === null, "SMA single point window=2 → null");
assert(sma([1, 2, 3, 4, 5], 0) === null, "SMA window 0 → null");
assert(sma([1, 2, 3], -1) === null, "SMA negative window → null");
assert(sma([1, 2, 3], 1.5) === null, "SMA non-integer window → null");
assert(sma(null, 3) === null, "SMA null arr → null");
assert(sma([1, 2, NaN, 4], 4) === null, "SMA rejects NaN in window");
assert(sma([1, 2, Infinity, 4], 4) === null, "SMA rejects Infinity in window");
assert(sma([1, 2, -Infinity, 4], 3) === null, "SMA rejects -Infinity in window");
{
  const v = sma([2, 4, 6, 8], 4);
  assert(approx(v, 5), `SMA [2,4,6,8]/4 = 5 (got ${v})`);
}
{
  const v = sma([10, 20, 30, 40, 50], 3);
  assert(approx(v, 40), `SMA last-3 of [10..50] = 40 (got ${v})`);
}
assert(sma([1, 2, 3], 3) !== null && sma([1, 2, 3], 4) === null, "SMA window bounds: len>=n only");

// —— pct = (a−b)/b×100 with a=to, b=from; edge b=0 ——
assert(pctChange(0, 10) === null, "pctChange from=0 → null");
assert(pctChange(0, 0) === null, "pctChange 0→0 → null");
assert(pctChange(null, 10) === null, "pctChange null from → null");
assert(pctChange(10, null) === null, "pctChange null to → null");
assert(pctChange(NaN, 10) === null, "pctChange NaN from → null");
assert(pctChange(10, NaN) === null, "pctChange NaN to → null");
assert(pctChange(Infinity, 10) === null, "pctChange Infinity from → null");
assert(pctChange(10, Infinity) === null, "pctChange Infinity to → null");
{
  const v = pctChange(100, 110);
  assert(approx(v, 10), `pctChange 100→110 = 10% (got ${v})`);
}
{
  const v = pctChange(100, 90);
  assert(approx(v, -10), `pctChange 100→90 = -10% (got ${v})`);
}
{
  const v = pctChange(-25, 50);
  assert(approx(v, -300), `pctChange negative base -25→50 = -300% (got ${v})`);
}
{
  const v = pctChange(50, 50);
  assert(approx(v, 0), `pctChange flat = 0 (got ${v})`);
}

// —— fractional returns (regime) ——
assert(retChange(0, 1) === null, "retChange from=0 → null");
assert(retChange(NaN, 1) === null, "retChange NaN → null");
{
  const v = retChange(100, 110);
  assert(approx(v, 0.1), `retChange 100→110 = 0.1 (got ${v})`);
}
assert(
  approx(pctChange(80, 100), retChange(80, 100) * 100),
  "pctChange ≡ retChange × 100"
);

// —— volume ratio: denominator > 0 ——
assert(volumeRatio(1000, 0) === null, "volumeRatio avg=0 → null");
assert(volumeRatio(1000, -5) === null, "volumeRatio avg≤0 → null");
assert(volumeRatio(NaN, 100) === null, "volumeRatio NaN last → null");
assert(volumeRatio(100, NaN) === null, "volumeRatio NaN avg → null");
assert(volumeRatio(Infinity, 100) === null, "volumeRatio Infinity last → null");
{
  const v = volumeRatio(200, 100);
  assert(approx(v, 2), `volumeRatio 200/100 = 2 (got ${v})`);
}
assert(avgVolume([], { minLen: 1 }) === null, "avgVolume empty → null");
assert(avgVolume([1], { minLen: 2 }) === null, "avgVolume short → null");
assert(avgVolume([1, NaN, 3], { minLen: 2 }) === null, "avgVolume rejects NaN");
{
  const avg = avgVolume([10, 20, 30], { minLen: 3 });
  assert(approx(avg, 20), `avgVolume = 20 (got ${avg})`);
  const vr = volumeRatio(40, avg);
  assert(approx(vr, 2), `volumeRatio from avgVolume = 2 (got ${vr})`);
}

// —— RS vs index ——
assert(rsVsIndex(NaN, 0) === null, "rsVsIndex NaN stock → null");
assert(rsVsIndex(2, NaN) === null, "rsVsIndex NaN index → null");
assert(rsVsIndex(Infinity, 1) === null, "rsVsIndex Infinity → null");
{
  const v = rsVsIndex(3.5, 1.2);
  assert(approx(v, 2.3), `rsVsIndex 3.5−1.2 = 2.3 (got ${v})`);
}
{
  const v = rsVsIndex(1.5, null);
  assert(approx(v, 1.5), `rsVsIndex null index treated as 0 (got ${v})`);
}

// —— Regime temperature arithmetic (−2…+2 clamp, additive proxies) ——
{
  const cold = temperatureScore(
    { pctFromSma200: -0.2, ddFrom252dHigh: -0.2 },
    { d20d: 0.3 },
    { skipCredit: true, breadthProxy: 0.2 }
  );
  assert(cold.score != null && cold.score >= -2 && cold.score <= 2, `temp cold in [-2,2] (got ${cold.score})`);
  assert(cold.score < 0, `temp cold is negative (got ${cold.score})`);
}
{
  const hot = temperatureScore(
    { pctFromSma200: 0.15, ddFrom252dHigh: -0.005, near52wHigh: true, atrBottomQuartile: true },
    { d20d: -0.2 },
    { skipCredit: true, breadthProxy: 0.8, hygVsLqd20d: 0.02 }
  );
  assert(hot.score != null && hot.score >= -2 && hot.score <= 2, `temp hot in [-2,2] (got ${hot.score})`);
  assert(hot.score > 0, `temp hot is positive (got ${hot.score})`);
}
{
  const empty = temperatureScore({}, {}, { skipCredit: true });
  assert(empty.score === null && empty.used === 0, "temp no proxies → null score");
}
{
  const piled = temperatureScore(
    { pctFromSma200: 0.2, ddFrom252dHigh: 0, near52wHigh: true, atrBottomQuartile: true },
    { d20d: -0.5 },
    { breadthProxy: 0.9, hygVsLqd20d: 0.05 }
  );
  assert(piled.score === 2, `temp clamp upper = 2 (got ${piled.score})`);
}
{
  const t = temperatureScore(
    { pctFromSma200: 0.12, ddFrom252dHigh: -0.005 },
    null,
    { skipCredit: true }
  );
  assert(approx(t.score, 1.75), `temp arithmetic 1+0.75 = 1.75 (got ${t.score})`);
}

// —— Ranking score monotonicity on synthetic fixtures ——
{
  const idx = 0.5;
  const weak = {
    dayPct: 0.2,
    d5Pct: 0,
    d1mPct: 0,
    above20: false,
    above50: false,
    above200: false,
    volRatio: 1.0,
  };
  const strongerRs = { ...weak, dayPct: 2.0 };
  const withTrend = { ...strongerRs, above20: true, above50: true };
  const withVol = { ...withTrend, volRatio: 2.5 };

  const s0 = baseRankingScore(weak, idx);
  const s1 = baseRankingScore(strongerRs, idx);
  const s2 = baseRankingScore(withTrend, idx);
  const s3 = baseRankingScore(withVol, idx);

  assert(s1 > s0, `mono: higher RS scores higher (${s1} > ${s0})`);
  assert(s2 > s1, `mono: SMA flags raise score (${s2} > ${s1})`);
  assert(s3 > s2, `mono: constructive vol raises score (${s3} > ${s2})`);
}
{
  const base = {
    dayPct: 1,
    d5Pct: 2,
    d1mPct: 3,
    above20: true,
    above50: false,
    above200: false,
    volRatio: 1.5,
  };
  const a = baseRankingScore(base, 0);
  const b = baseRankingScore({ ...base, dayPct: 1.5 }, 0);
  assert(approx(b - a, 1.0), `mono: ΔdayPct +0.5 → Δscore +1.0 (got ${b - a})`);
}
{
  assert(baseRankingScore(null, 0) === -1e9, "ranking null metrics → sentinel");
  assert(baseRankingScore({ dayPct: NaN }, 0) === -1e9, "ranking NaN dayPct → sentinel");
  assert(baseRankingScore({ dayPct: 1, volRatio: Infinity }, 0) === -1e9, "ranking Infinity vol → sentinel");
}
{
  const thin = {
    dayPct: 1,
    d5Pct: 0,
    d1mPct: 0,
    above20: false,
    above50: false,
    above200: false,
    volRatio: 0.2,
  };
  const withPen = baseRankingScore(thin, 0, { preferVol: true });
  const noPen = baseRankingScore(thin, 0, { preferVol: false });
  assert(noPen > withPen, `preferVol=false skips thin-vol penalty (${noPen} > ${withPen})`);
}

console.log("——");
if (failures.length) {
  console.error(`▶ math-guards: ${failures.length} failure(s)`);
  process.exit(1);
}
console.log("▶ math-guards: all checks passed");
process.exit(0);
