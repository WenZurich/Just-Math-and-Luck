/**
 * Selection Logic — professional step-by-step methodology view.
 * Thresholds mirrored from scripts/daily-scan.mjs + market-regime.mjs
 * + bookshelf-framework-2026-09-16 (operational rules only).
 */
import { escapeHtml } from "./glossary.js";
import { t } from "./i18n.js";

/** Stance → size multiplier (STANCE_SIZE_MULT) */
export const STANCE_SIZE_MULT = {
  defensive: 0.5,
  selective: 0.8,
  balanced: 1.0,
  constructive: 1.1,
  aggressive: 1.35,
  stabilize_first: 0.3,
};

/** Egg phase → dial (PHASE_TO_STANCE) */
export const PHASE_TO_STANCE = {
  euphoric: "defensive",
  late_optimism: "selective",
  mid_cycle: "balanced",
  cautious_recovery: "constructive",
  despondent: "aggressive",
  panic: "stabilize_first",
};

function fmtMult(n) {
  if (n == null || Number.isNaN(n)) return "—";
  return `${Number(n).toFixed(2)}×`;
}

function fmtTemp(n) {
  if (n == null || Number.isNaN(n)) return "—";
  const s = n > 0 ? "+" : "";
  return `${s}${Number(n).toFixed(2)}`;
}

function chipField(label, value) {
  return `<span class="logic-field"><span class="k">${escapeHtml(label)}</span><span class="v">${escapeHtml(String(value ?? "—"))}</span></span>`;
}

/**
 * Live US/TW regime chips from latest.json marketRegime.
 */
export function renderLogicRegimeLive(regime) {
  if (!regime || (!regime.us && !regime.tw)) {
    return `<p class="logic-muted">${escapeHtml(t("logicNoRegime"))}</p>`;
  }
  const card = (mkt, r) => {
    if (!r) return "";
    const incomplete = r.incomplete ? " incomplete" : "";
    const phase = r.psychologyPhase || t("dataInsufficient");
    const stance = r.cycleStance || t("dataInsufficient");
    const liq = r.liquidityBias || t("dataInsufficient");
    const temp = fmtTemp(r.temperatureScore);
    const size = fmtMult(r.sizeMult ?? STANCE_SIZE_MULT[stance]);
    const gaps =
      Array.isArray(r.dataGaps) && r.dataGaps.length
        ? `<div class="regime-gaps">${escapeHtml(t("dataGaps"))}: ${escapeHtml(r.dataGaps.slice(0, 5).join(", "))}${r.dataGaps.length > 5 ? "…" : ""}</div>`
        : "";
    const impl = Array.isArray(r.implications) && r.implications.length
      ? `<ul class="logic-impl">${r.implications
          .slice(0, 3)
          .map((x) => `<li>${escapeHtml(x)}</li>`)
          .join("")}</ul>`
      : "";
    return `<div class="regime-chip logic-regime-chip${incomplete}">
      <div class="label">${escapeHtml(mkt)} · ${escapeHtml(t("marketRegime"))}</div>
      <div class="value">${escapeHtml(stance)}</div>
      <div class="logic-chip-meta">
        ${chipField(t("psychologyPhase"), phase)}
        ${chipField(t("liquidityBias"), liq)}
        ${chipField(t("temperatureScore"), temp)}
        ${chipField(t("sizeMult"), size)}
      </div>
      ${impl}
      ${gaps}
    </div>`;
  };
  return `<div class="regime-strip logic-regime-live" aria-label="${escapeHtml(t("regimeToday"))}">
    ${card("US", regime.us)}
    ${card("TW", regime.tw)}
  </div>`;
}

function step(n, title, body) {
  return `<section class="logic-step" id="logic-step-${n}">
    <header class="logic-step-head">
      <span class="logic-step-num" aria-hidden="true">${n}</span>
      <h3 class="logic-step-title">${escapeHtml(title)}</h3>
    </header>
    <div class="logic-step-body">${body}</div>
  </section>`;
}

function kvTable(rows) {
  return `<div class="logic-table-wrap"><table class="logic-table">
    <tbody>
      ${rows
        .map(
          ([k, v]) =>
            `<tr><th scope="row">${escapeHtml(k)}</th><td>${v}</td></tr>`
        )
        .join("")}
    </tbody>
  </table></div>`;
}

function codeList(items) {
  return `<ul class="logic-bullets">${items
    .map((x) => `<li>${x}</li>`)
    .join("")}</ul>`;
}

/**
 * Full Logic view — MSN Finance tone, real thresholds, minimal copy.
 */
export function renderLogicSection(data) {
  const regime = data?.marketRegime;

  const phaseRows = Object.entries(PHASE_TO_STANCE).map(([phase, stance]) => [
    phase,
    `<code>${escapeHtml(stance)}</code> · ${fmtMult(STANCE_SIZE_MULT[stance])}`,
  ]);

  const screenABody = codeList([
    escapeHtml(t("logicScreenABalanced")),
    escapeHtml(t("logicScreenASelective")),
    escapeHtml(t("logicScreenADefensive")),
    escapeHtml(t("logicScreenAAggressive")),
    escapeHtml(t("logicScreenAStabilize")),
  ]);

  const screenBBody = codeList([
    escapeHtml(t("logicScreenBVol")),
    escapeHtml(t("logicScreenBMom")),
  ]);

  const scoreBody = codeList([
    escapeHtml(t("logicScoreFormula")),
    escapeHtml(t("logicScoreSma")),
    escapeHtml(t("logicScoreVol")),
  ]);

  const demoteBody = codeList([
    escapeHtml(t("logicDemoteHot")),
    escapeHtml(t("logicDemoteThin")),
    escapeHtml(t("logicPromoteFirm")),
    escapeHtml(t("logicDemotePanic")),
  ]);

  const whyBody = codeList([
    escapeHtml(t("logicWhyRs")),
    escapeHtml(t("logicWhyMom")),
    escapeHtml(t("logicWhyVol")),
    escapeHtml(t("logicWhySma")),
    escapeHtml(t("logicWhyRegime")),
  ]);

  const xqBody = `
    <p class="logic-lead">${escapeHtml(t("logicXqLead"))}</p>
    ${codeList([
      escapeHtml(t("logicXqPriceVol")),
      escapeHtml(t("logicXqFlow")),
      escapeHtml(t("logicXqFund")),
      escapeHtml(t("logicXqMasters")),
      escapeHtml(t("logicXqCycle")),
    ])}
    <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="strategies">${escapeHtml(t("logicOpenStrategies"))}</button></p>
  `;

  const paperBody = codeList([
    escapeHtml(t("logicPaperCapital")),
    escapeHtml(t("logicPaperBuy")),
    escapeHtml(t("logicPaperSizeMult")),
    escapeHtml(t("logicPaperSell")),
  ]);

  const ratesBody = codeList([
    escapeHtml(t("logicRatesR2")),
    escapeHtml(t("logicRatesR3")),
    escapeHtml(t("logicRatesSeparate")),
  ]);

  return `
    <header class="view-header">
      <h2 class="view-title">${escapeHtml(t("logicTitle"))}</h2>
      <p class="logic-subtitle">${escapeHtml(t("logicSubtitle"))}</p>
    </header>

    <section class="logic-live section" aria-labelledby="logic-live-h">
      <h3 id="logic-live-h" class="section-title">${escapeHtml(t("regimeToday"))}</h3>
      ${renderLogicRegimeLive(regime)}
    </section>

    <div class="logic-pipeline">
      ${step(1, t("logicStep1"), `
        <p class="logic-lead">${escapeHtml(t("logicStep1Lead"))}</p>
        ${kvTable(phaseRows)}
        <p class="logic-caption">${escapeHtml(t("logicStep1Caption"))}</p>
        ${ratesBody}
      `)}

      ${step(2, t("logicStep2"), `
        <p class="logic-lead">${escapeHtml(t("logicStep2Lead"))}</p>
        <h4 class="logic-h4">${escapeHtml(t("logicScreenA"))}</h4>
        ${screenABody}
        <h4 class="logic-h4">${escapeHtml(t("logicScreenB"))}</h4>
        ${screenBBody}
        <h4 class="logic-h4">${escapeHtml(t("logicScore"))}</h4>
        ${scoreBody}
      `)}

      ${step(3, t("logicStep3"), xqBody)}

      ${step(4, t("logicStep4"), `
        <p class="logic-lead">${escapeHtml(t("logicStep4Lead"))}</p>
        ${demoteBody}
        <p class="logic-caption">${escapeHtml(t("logicListSize"))}</p>
      `)}

      ${step(5, t("logicStep5"), `
        <p class="logic-lead">${escapeHtml(t("logicStep5Lead"))}</p>
        ${whyBody}
      `)}

      ${step(6, t("logicStep6"), `
        <p class="logic-lead">${escapeHtml(t("logicStep6Lead"))}</p>
        ${paperBody}
        <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="paper">${escapeHtml(t("logicOpenPaper"))}</button></p>
      `)}
    </div>

    <p class="logic-footnote" role="note">${escapeHtml(t("logicFootnote"))}</p>
  `;
}
