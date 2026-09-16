/**
 * 讀財報 — Mag7 + high-attention US earnings (plain language cards).
 * Data: public/data/earnings-digest.json
 * Never invents metrics; missing fields omitted (no 資料不足 badge spam).
 */
import { escapeHtml } from "./glossary.js";
import { t, numberLocale } from "./i18n.js";

const DATA_URL = "./data/earnings-digest.json";

function fmtAsOf(iso) {
  try {
    return (
      new Date(iso).toLocaleString(numberLocale(), {
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
    return iso || "—";
  }
}

function fmtNum(n, d = 2) {
  if (n == null || Number.isNaN(n)) return null;
  return Number(n).toLocaleString(numberLocale(), {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
}

function fmtPct(n, d = 1) {
  if (n == null || Number.isNaN(n)) return null;
  const sign = n > 0 ? "+" : "";
  return `${sign}${Number(n).toFixed(d)}%`;
}

function cell(val, suffix = "") {
  if (val == null || val === "") return null;
  return `<span class="er-val">${escapeHtml(String(val))}${suffix ? escapeHtml(suffix) : ""}</span>`;
}

function metricBlock(label, html) {
  if (!html) return "";
  return `<div class="er-metric">
          <div class="m-l">${escapeHtml(label)}</div>
          <div class="m-v">${html}</div>
        </div>`;
}

function tagLabel(tag) {
  if (tag === "mega_cap_earnings_next_14d") return t("earningsTagPrimary");
  if (tag === "yahoo_most_actives_earnings_next_14d") return t("earningsTagActives");
  if (tag === "recently_reported") return t("earningsTagRecent");
  if (tag === "calendar_highlight_within_45d") return t("earningsTagFallback");
  return tag || t("earningsTagOther");
}

function tagClass(tag) {
  if (tag === "recently_reported") return "er-badge-recent";
  if (tag === "calendar_highlight_within_45d") return "er-badge-fallback";
  if (tag?.includes("most_actives")) return "er-badge-hot";
  return "";
}

function renderCard(row, { hot = false } = {}) {
  if (!row) return "";
  const next =
    row.nextEarningsDate != null
      ? `${row.nextEarningsDate}${row.nextEarningsDateIsEstimate ? ` (${t("earningsEstimate")})` : ""}`
      : null;
  const lastEps =
    row.lastReport?.epsActual != null
      ? `${fmtNum(row.lastReport.epsActual, 2)}${
          row.lastReport.quarter ? ` · ${row.lastReport.quarter}` : ""
        }`
      : null;
  const badge = hot
    ? `<span class="er-badge ${tagClass(row.selectionTag)}">${escapeHtml(tagLabel(row.selectionTag))}</span>`
    : `<span class="er-badge">${escapeHtml(t("earningsMag7Badge"))}</span>`;

  return `
    <article class="er-card" data-ticker="${escapeHtml(row.ticker)}">
      <div class="er-card-head">
        <div>
          <div class="er-ticker">${escapeHtml(row.ticker)}</div>
          <div class="er-name">${escapeHtml(row.name || "")}</div>
        </div>
        ${badge}
      </div>
      <div>
        <div class="er-label">${escapeHtml(t("earningsWhatItDoes"))}</div>
        <p class="er-does">${
          row.whatItDoes ? escapeHtml(row.whatItDoes) : ""
        }</p>
      </div>
      <div class="er-metrics">
        ${metricBlock(t("earningsNextDate"), cell(next))}
        ${metricBlock(t("earningsLastEps"), cell(lastEps))}
        ${metricBlock(t("earningsRevYoy"), cell(fmtPct(row.revenueYoYPct)))}
        ${metricBlock(t("earningsEpsYoy"), cell(fmtPct(row.epsYoYPct)))}
        ${metricBlock(t("earningsPe"), cell(fmtNum(row.pe, 1)))}
        ${metricBlock(t("earningsForwardPe"), cell(fmtNum(row.forwardPe, 1)))}
      </div>
      ${
        row.whatToWatch
          ? `<div>
        <div class="er-label">${escapeHtml(t("earningsWhatToWatch"))}</div>
        <p class="er-watch">${escapeHtml(row.whatToWatch)}</p>
      </div>`
          : ""
      }
      ${
        Array.isArray(row.notes) && row.notes.length
          ? `<p class="er-notes er-muted">${escapeHtml(row.notes.slice(0, 3).join(" · "))}</p>`
          : ""
      }
      ${
        row.blocker
          ? `<p class="er-miss">${escapeHtml(t("earningsPartialBlocker"))}: ${escapeHtml(row.blocker)}</p>`
          : ""
      }
    </article>`;
}

function paint(root, data) {
  const mag7 = Array.isArray(data?.mag7) ? data.mag7 : [];
  const hot = Array.isArray(data?.watchlistHot) ? data.watchlistHot : [];
  const sessionBlock = data?.sessionBlocker
    ? `<div class="er-blocker" role="status"><p>${escapeHtml(data.sessionBlocker)}</p><p class="er-muted">${escapeHtml(t("earningsRefreshHow"))}</p></div>`
    : "";

  root.innerHTML = `
    <p class="er-meta">${escapeHtml(t("dataAsOf"))} ${escapeHtml(fmtAsOf(data?.asOf))} · ${escapeHtml(t("earningsUsFocus"))}</p>
    <p class="er-stub" role="note">${escapeHtml(data?.twStub?.note || t("earningsTwStub"))}</p>
    <div class="er-rule"><strong>${escapeHtml(t("earningsSelectionTitle"))}</strong> ${escapeHtml(
      data?.selectionRule || t("earningsSelectionFallback")
    )}</div>
    ${sessionBlock}
    <div class="er-panels">
      <section class="er-panel" aria-label="${escapeHtml(t("earningsMag7Title"))}">
        <h3 class="er-panel-title">${escapeHtml(t("earningsMag7Title"))}</h3>
        <p class="er-panel-lead">${escapeHtml(t("earningsMag7Lead"))}</p>
        <div class="er-cards">
          ${
            mag7.length
              ? mag7.map((r) => renderCard(r, { hot: false })).join("")
              : `<p class="er-empty">${escapeHtml(t("earningsEmpty"))}</p>`
          }
        </div>
      </section>
      <section class="er-panel" aria-label="${escapeHtml(t("earningsHotTitle"))}">
        <h3 class="er-panel-title">${escapeHtml(t("earningsHotTitle"))}</h3>
        <p class="er-panel-lead">${escapeHtml(t("earningsHotLead"))}</p>
        <div class="er-cards">
          ${
            hot.length
              ? hot.map((r) => renderCard(r, { hot: true })).join("")
              : `<p class="er-empty">${escapeHtml(t("earningsHotEmpty"))}</p>`
          }
        </div>
      </section>
    </div>
    <p class="er-disclaimer" role="note">${escapeHtml(t("earningsDisclaimer"))}</p>
  `;
}

export function renderEarningsSection() {
  return `
    <section class="section earnings-section" aria-label="${escapeHtml(t("earningsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${escapeHtml(t("earningsTitle"))}</h2>
        <p class="view-lead">${escapeHtml(t("earningsLead"))}</p>
      </header>
      <p class="er-disclaimer er-disclaimer-top" role="note">${escapeHtml(t("earningsDisclaimer"))}</p>
      <div id="er-root" class="er-root">
        <p class="er-loading">${escapeHtml(t("loading"))}</p>
      </div>
    </section>`;
}

export async function initEarnings(selector = "#er-root") {
  const root = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!root) return { ok: false };
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    paint(root, data);
    return { ok: true, data };
  } catch (err) {
    root.innerHTML = `
      <div class="er-blocker" role="alert">
        <p>${escapeHtml(t("earningsLoadError", { msg: err.message || String(err) }))}</p>
        <p class="er-muted">${escapeHtml(t("earningsRefreshHow"))}</p>
      </div>`;
    return { ok: false, error: err };
  }
}
