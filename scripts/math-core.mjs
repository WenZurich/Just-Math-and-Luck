/**
 * Pure math helpers for screening (SMA, pct/returns, volume ratio, RS vs index,
 * base ranking). Used by daily-scan / market-regime and verified by math-guards.
 * Olympiad habit: every identity is total on its domain — reject NaN/∞, empty,
 * and divide-by-zero instead of shipping silent garbage.
 */

/** @returns {boolean} */
export function isFiniteNumber(n) {
  return typeof n === "number" && Number.isFinite(n);
}

/** Reject non-finite numbers; return null (screening-safe). */
export function finiteOrNull(n) {
  return isFiniteNumber(n) ? n : null;
}

/**
 * Simple moving average of the last `n` points.
 * @param {number[]} arr
 * @param {number} n window (positive integer)
 * @returns {number|null}
 */
export function sma(arr, n) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  if (!Number.isInteger(n) || n <= 0) return null;
  if (arr.length < n) return null;
  const slice = arr.slice(-n);
  for (const x of slice) {
    if (!isFiniteNumber(x)) return null;
  }
  return slice.reduce((a, b) => a + b, 0) / n;
}

/**
 * Percent change: (to − from) / from × 100.
 * Matches daily-scan dayPct / d5Pct / d1mPct units (percentage points).
 * from === 0 or non-finite → null.
 */
export function pctChange(from, to) {
  if (!isFiniteNumber(from) || !isFiniteNumber(to)) return null;
  if (from === 0) return null;
  return ((to - from) / from) * 100;
}

/**
 * Fractional return: (to − from) / from.
 * Matches market-regime ret* / seriesRet units.
 */
export function retChange(from, to) {
  if (!isFiniteNumber(from) || !isFiniteNumber(to)) return null;
  if (from === 0) return null;
  return (to - from) / from;
}

/**
 * Volume ratio = lastVol / avgVolPrior. Denominator must be > 0.
 */
export function volumeRatio(lastVol, avgVol) {
  if (!isFiniteNumber(lastVol) || !isFiniteNumber(avgVol)) return null;
  if (!(avgVol > 0)) return null;
  return lastVol / avgVol;
}

/**
 * Relative strength vs index in percentage points: stockDayPct − indexDayPct.
 */
export function rsVsIndex(stockDayPct, indexDayPct) {
  if (!isFiniteNumber(stockDayPct)) return null;
  const idx = indexDayPct == null ? 0 : indexDayPct;
  if (!isFiniteNumber(idx)) return null;
  return stockDayPct - idx;
}

/**
 * Base ranking score (pre–regime adjust). Monotonic in RS / short-horizon pct
 * and rewards trend + constructive volume — see math-guards fixtures.
 */
export function baseRankingScore(m, indexDayPct, { preferVol = true } = {}) {
  if (!m || !isFiniteNumber(m.dayPct)) return -1e9;
  const rs = rsVsIndex(m.dayPct, indexDayPct ?? 0);
  if (rs == null) return -1e9;
  let score = rs * 2 + (m.d5Pct ?? 0) * 0.35 + (m.d1mPct ?? 0) * 0.15;
  if (m.above20) score += 1.5;
  if (m.above50) score += 1;
  if (m.above200) score += 0.5;
  if (preferVol && m.volRatio != null) {
    if (!isFiniteNumber(m.volRatio)) return -1e9;
    if (m.volRatio >= 1.2) score += Math.min(m.volRatio, 8) * 0.6;
    else if (m.volRatio < 0.4) score -= 0.5;
  }
  if (m.dayPct >= 9.5) score += 2;
  return score;
}

/**
 * Average of a prior volume window (e.g. vols.slice(-21,-1)).
 * Requires length ≥ minLen and all finite; rejects empty/short windows.
 */
export function avgVolume(vols, { minLen = 10 } = {}) {
  if (!Array.isArray(vols) || vols.length < minLen) return null;
  for (const v of vols) {
    if (!isFiniteNumber(v)) return null;
  }
  return vols.reduce((a, b) => a + b, 0) / vols.length;
}
