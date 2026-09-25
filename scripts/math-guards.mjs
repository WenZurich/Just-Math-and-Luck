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
  clamp,
  pctFromSma,
  peakInWindow,
  drawdownFromPeak,
} from "./math-core.mjs";
import { temperatureScore } from "./market-regime.mjs";
import {
  isFiniteNumber as pdFinite,
  optionIntrinsic,
  optionExtrinsic,
  optionPremiumCashImpact,
  optionPositionMarkValue,
  optionUnrealizedPnl,
  optionExpirySettlement,
  txfMultiplier,
  futuresPnlTwd,
  futuresMarkPnlTwd,
  futuresMarginHold,
  canOpenFutures,
  canBuyOption,
  assertFinitePayload,
  strategyLabelPlain,
  US_OPTION_MULTIPLIER,
  TXF_MULTIPLIERS,
} from "../src/paper-derivatives-math.js";

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



// —— pct from SMA: fractional price/sma−1; sma>0 ——
assert(pctFromSma(110, 0) === null, "pctFromSma sma=0 → null");
assert(pctFromSma(110, -50) === null, "pctFromSma sma≤0 → null");
assert(pctFromSma(NaN, 100) === null, "pctFromSma NaN price → null");
assert(pctFromSma(110, NaN) === null, "pctFromSma NaN sma → null");
assert(pctFromSma(Infinity, 100) === null, "pctFromSma Infinity price → null");
assert(pctFromSma(100, Infinity) === null, "pctFromSma Infinity sma → null");
{
  const v = pctFromSma(110, 100);
  assert(approx(v, 0.1), `pctFromSma 110/100−1 = 0.1 (got ${v})`);
}
{
  const v = pctFromSma(85, 100);
  assert(approx(v, -0.15), `pctFromSma 85/100−1 = -0.15 (got ${v})`);
}
{
  const v = pctFromSma(100, 100);
  assert(approx(v, 0), `pctFromSma flat = 0 (got ${v})`);
}
assert(
  approx(pctFromSma(112, 100), retChange(100, 112)),
  "pctFromSma ≡ retChange(sma, price)"
);

// —— clamp: closed-interval projection (inequalities → Marks/temp caps) ——
assert(clamp(NaN, -2, 2) === null, "clamp NaN → null");
assert(clamp(1, NaN, 2) === null, "clamp NaN lo → null");
assert(clamp(1, -2, NaN) === null, "clamp NaN hi → null");
assert(clamp(Infinity, -2, 2) === null, "clamp Infinity → null");
assert(clamp(0, 2, -2) === null, "clamp lo>hi → null");
{
  const v = clamp(3, -2, 2);
  assert(approx(v, 2), `clamp upper 3→[-2,2] = 2 (got ${v})`);
}
{
  const v = clamp(-5, -2, 2);
  assert(approx(v, -2), `clamp lower -5→[-2,2] = -2 (got ${v})`);
}
{
  const v = clamp(0.5, -2, 2);
  assert(approx(v, 0.5), `clamp interior preserved (got ${v})`);
}
{
  const v = clamp(-2, -2, 2);
  assert(approx(v, -2), `clamp endpoint lo preserved (got ${v})`);
}
assert(
  clamp(temperatureScore({ pctFromSma200: 0.2, ddFrom252dHigh: 0, near52wHigh: true, atrBottomQuartile: true }, { d20d: -0.5 }, { breadthProxy: 0.9, hygVsLqd20d: 0.05 }).score, -2, 2) === 2,
  "clamp agrees with temp upper bound 2"
);


// —— peak window + drawdown from peak (regime ddFrom252dHigh units) ——
assert(peakInWindow([], 5) === null, "peakInWindow empty → null");
assert(peakInWindow([1, 2, 3], 0) === null, "peakInWindow window 0 → null");
assert(peakInWindow([1, 2, 3], -1) === null, "peakInWindow negative window → null");
assert(peakInWindow([1, 2, 3], 1.5) === null, "peakInWindow non-integer window → null");
assert(peakInWindow([1, 2], 3) === null, "peakInWindow short series → null");
assert(peakInWindow(null, 2) === null, "peakInWindow null arr → null");
assert(peakInWindow([1, NaN, 3], 3) === null, "peakInWindow rejects NaN");
assert(peakInWindow([1, Infinity, 3], 3) === null, "peakInWindow rejects Infinity");
assert(peakInWindow([1, -Infinity, 3], 3) === null, "peakInWindow rejects -Infinity");
{
  const v = peakInWindow([2, 9, 4, 7], 4);
  assert(approx(v, 9), `peakInWindow full = 9 (got ${v})`);
}
{
  const v = peakInWindow([2, 9, 4, 7], 2);
  assert(approx(v, 7), `peakInWindow last-2 = 7 (got ${v})`);
}

assert(drawdownFromPeak(90, 0) === null, "drawdownFromPeak peak=0 → null");
assert(drawdownFromPeak(90, -10) === null, "drawdownFromPeak peak≤0 → null");
assert(drawdownFromPeak(NaN, 100) === null, "drawdownFromPeak NaN price → null");
assert(drawdownFromPeak(90, NaN) === null, "drawdownFromPeak NaN peak → null");
assert(drawdownFromPeak(Infinity, 100) === null, "drawdownFromPeak Infinity price → null");
assert(drawdownFromPeak(90, Infinity) === null, "drawdownFromPeak Infinity peak → null");
{
  const v = drawdownFromPeak(90, 100);
  assert(approx(v, -0.1), `drawdownFromPeak 90/100−1 = -0.1 (got ${v})`);
}
{
  const v = drawdownFromPeak(100, 100);
  assert(approx(v, 0), `drawdownFromPeak at peak = 0 (got ${v})`);
}
{
  const v = drawdownFromPeak(110, 100);
  assert(approx(v, 0.1), `drawdownFromPeak above peak = +0.1 (got ${v})`);
}
assert(
  approx(drawdownFromPeak(85, 100), pctFromSma(85, 100)),
  "drawdownFromPeak ≡ pctFromSma (same fractional form)"
);
{
  const peak = peakInWindow([80, 100, 95, 90], 4);
  const dd = drawdownFromPeak(90, peak);
  assert(approx(peak, 100) && approx(dd, -0.1), `peak+dd chain 90 vs 100 → -0.1 (got peak=${peak}, dd=${dd})`);
}


// —— Paper derivatives: US options + TW 台指期 (olympiad guards) ——
assert(US_OPTION_MULTIPLIER === 100, "US option multiplier = 100");
assert(TXF_MULTIPLIERS.TX === 200 && TXF_MULTIPLIERS.MTX === 50, "TX=200 MTX=50 official");
assert(txfMultiplier("TX") === 200 && txfMultiplier("mtx") === 50, "txfMultiplier case-insensitive");
assert(txfMultiplier("FAKE") === null, "txfMultiplier unknown → null (never invent)");

assert(optionIntrinsic(100, 95, "call") === 5, "call ITM intrinsic");
assert(optionIntrinsic(100, 105, "call") === 0, "call OTM intrinsic 0");
assert(optionIntrinsic(100, 105, "put") === 5, "put ITM intrinsic");
assert(optionIntrinsic(100, 95, "put") === 0, "put OTM intrinsic 0");
assert(optionIntrinsic(NaN, 100, "call") === null, "intrinsic NaN spot → null");
assert(optionIntrinsic(-1, 100, "call") === null, "intrinsic negative spot → null");
assert(optionIntrinsic(100, 100, "weird") === null, "intrinsic bad right → null");

{
  const e = optionExtrinsic(7, 100, 95, "call");
  assert(approx(e, 2), `extrinsic 7−5 = 2 (got ${e})`);
}
assert(optionExtrinsic(-1, 100, 95, "call") === null, "extrinsic negative premium → null");
assert(optionExtrinsic(1, 100, 95, "call") === null, "extrinsic premium < intrinsic → null");

{
  const buy = optionPremiumCashImpact({ side: "buy", premium: 2.5, contracts: 2 });
  assert(buy.ok && approx(buy.cashDelta, -500) && approx(buy.notional, 500), `buy debit 2.5×100×2 = −500 (got ${buy.cashDelta})`);
  const sell = optionPremiumCashImpact({ side: "sell", premium: 2.5, contracts: 2 });
  assert(sell.ok && approx(sell.cashDelta, 500), `sell credit = +500 (got ${sell.cashDelta})`);
}
assert(!optionPremiumCashImpact({ side: "buy", premium: -1, contracts: 1 }).ok, "reject negative premium");
assert(!optionPremiumCashImpact({ side: "buy", premium: 1, contracts: 1.5 }).ok, "reject non-int contracts");
assert(!optionPremiumCashImpact({ side: "buy", premium: 1, contracts: 0 }).ok, "reject zero contracts");
assert(!optionPremiumCashImpact({ side: "hold", premium: 1, contracts: 1 }).ok, "reject bad side");

{
  const mv = optionPositionMarkValue({ qty: 3, markPremium: 1.25 });
  assert(approx(mv, 375), `long mark value 3×1.25×100 = 375 (got ${mv})`);
  const shortMv = optionPositionMarkValue({ qty: -2, markPremium: 1.25 });
  assert(approx(shortMv, -250), `short mark value = −250 (got ${shortMv})`);
}
assert(optionPositionMarkValue({ qty: 1, markPremium: -0.1 }) === null, "mark value rejects neg premium");

{
  const u = optionUnrealizedPnl({ qtySigned: 2, avgPremium: 3, markPremium: 5 });
  assert(approx(u, 400), `long uPnl (5−3)×100×2 = 400 (got ${u})`);
  const s = optionUnrealizedPnl({ qtySigned: -2, avgPremium: 3, markPremium: 5 });
  assert(approx(s, -400), `short uPnl sign flip = −400 (got ${s})`);
}

{
  const set = optionExpirySettlement({ qtySigned: 1, spot: 110, strike: 100, right: "call" });
  assert(set.ok && approx(set.intrinsic, 10) && approx(set.cashDelta, 1000), `expiry long call settle +1000 (got ${set.cashDelta})`);
  const shortPut = optionExpirySettlement({ qtySigned: -1, spot: 90, strike: 100, right: "put" });
  assert(shortPut.ok && approx(shortPut.cashDelta, -1000), `expiry short put pays intrinsic (got ${shortPut.cashDelta})`);
  const otm = optionExpirySettlement({ qtySigned: 1, spot: 90, strike: 100, right: "call" });
  assert(otm.ok && approx(otm.cashDelta, 0), "OTM expiry cash 0");
}

{
  const pnl = futuresPnlTwd({ pointsDelta: 10, multiplier: 200, contractsSigned: 2 });
  assert(approx(pnl, 4000), `TX long +10pts ×200 ×2 = 4000 (got ${pnl})`);
  const shortPnl = futuresPnlTwd({ pointsDelta: 10, multiplier: 50, contractsSigned: -3 });
  assert(approx(shortPnl, -1500), `MTX short +10pts → −1500 (got ${shortPnl})`);
  const down = futuresPnlTwd({ pointsDelta: -5, multiplier: 200, contractsSigned: -1 });
  assert(approx(down, 1000), `TX short profits on −5pts = 1000 (got ${down})`);
}
assert(futuresPnlTwd({ pointsDelta: 1, multiplier: 200, contractsSigned: 1.5 }) === null, "futures rejects non-int contracts");
assert(futuresPnlTwd({ pointsDelta: 1, multiplier: 0, contractsSigned: 1 }) === null, "futures rejects mult≤0");
assert(futuresPnlTwd({ pointsDelta: NaN, multiplier: 200, contractsSigned: 1 }) === null, "futures rejects NaN points");

{
  const m = futuresMarkPnlTwd({ entryPrice: 48000, markPrice: 48100, code: "TX", contractsSigned: 1 });
  assert(approx(m, 20000), `TX mark P&L 100pts×200 = 20000 (got ${m})`);
  const bad = futuresMarkPnlTwd({ entryPrice: 48000, markPrice: 48100, code: "XYZ", contractsSigned: 1 });
  assert(bad === null, "unknown futures code → null");
}

assert(futuresMarginHold({ contracts: 2, initialMarginPerContract: 701000 }) === 1402000, "margin hold 2×TX initial");
assert(futuresMarginHold({ contracts: 0, initialMarginPerContract: 100 }) === null, "margin reject 0 contracts");
assert(futuresMarginHold({ contracts: 1, initialMarginPerContract: -1 }) === null, "margin reject neg initial");

{
  const okOpen = canOpenFutures({ freeCash: 800000, contracts: 1, initialMarginPerContract: 701000 });
  assert(okOpen.ok && approx(okOpen.hold, 701000), "can open TX with enough cash");
  const no = canOpenFutures({ freeCash: 100000, contracts: 1, initialMarginPerContract: 701000 });
  assert(!no.ok, "block futures when cash < margin");
}
{
  const okBuy = canBuyOption({ freeCash: 600, premium: 2.5, contracts: 2 });
  assert(okBuy.ok, "can buy option with cash");
  const no = canBuyOption({ freeCash: 100, premium: 2.5, contracts: 2 });
  assert(!no.ok, "block option buy when cash < debit");
}

assert(assertFinitePayload({ a: 1, b: { c: 2 } }).ok, "finite payload ok");
assert(!assertFinitePayload({ a: NaN }).ok, "NaN payload blocked");
assert(!assertFinitePayload({ a: Infinity }).ok, "Infinity payload blocked");

assert(strategyLabelPlain({ stockQty: 200, optionRight: "call", optionQtySigned: -2, underlying: "AAPL" }) === "covered-call", "covered call when stock covers");
assert(strategyLabelPlain({ stockQty: 50, optionRight: "call", optionQtySigned: -1, underlying: "AAPL" }) === "short-call", "naked short call label");
assert(strategyLabelPlain({ stockQty: 100, optionRight: "put", optionQtySigned: 1, underlying: "AAPL" }) === "protective-put", "protective put");
assert(strategyLabelPlain({ stockQty: 0, optionRight: "call", optionQtySigned: 1, underlying: "AAPL" }) === "long-call", "long call");

// Currency / book separation habit: multipliers never cross books
assert(TXF_MULTIPLIERS.TX !== US_OPTION_MULTIPLIER, "TX multiplier ≠ US option 100 (units differ)");
assert(pdFinite(TXF_MULTIPLIERS.TX) && pdFinite(US_OPTION_MULTIPLIER), "multipliers finite");

console.log("——");
if (failures.length) {
  console.error(`▶ math-guards: ${failures.length} failure(s)`);
  process.exit(1);
}
console.log("▶ math-guards: all checks passed");
process.exit(0);
