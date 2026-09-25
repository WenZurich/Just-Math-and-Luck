/**
 * 哥吉拉（Godzilla）— featured entry inside 名人podcast hub.
 * Threads interviewee investment arguments (static, candidate/watch only).
 * Source: Terry × 哥吉拉 YouTube interview (public audio → STT listened). Figures labeled 受訪者自述.
 * Math gate CLOSED — not wired into live screener or paper trading.
 */
import { escapeHtml } from "./glossary.js";
import { t } from "./i18n.js";

const YT_URL = "https://www.youtube.com/watch?v=7n-e5pe6z4U";

const THESIS_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const CHECK_IDS = [1, 2, 3, 4, 5, 6];
const OPT_IDS = [1, 2, 3, 4];
const RSU_IDS = [1, 2, 3];

function badgeRow() {
  return `
    <div class="gz-badges" role="list">
      <span class="gz-badge gz-badge-candidate" role="listitem">${escapeHtml(t("godzillaBadgeCandidate"))}</span>
      <span class="gz-badge gz-badge-watch" role="listitem">${escapeHtml(t("godzillaBadgeWatch"))}</span>
      <span class="gz-badge gz-badge-us" role="listitem">${escapeHtml(t("godzillaUsFocus"))}</span>
      <span class="gz-badge gz-badge-self" role="listitem">${escapeHtml(t("godzillaSelfReport"))}</span>
      <span class="gz-badge gz-badge-listened" role="listitem">${escapeHtml(t("godzillaListenedBadge"))}</span>
    </div>`;
}

function thesisCards() {
  return THESIS_IDS.map((n) => {
    const title = t(`godzillaThesis${n}Title`);
    const body = t(`godzillaThesis${n}Body`);
    return `
      <article class="gz-card" data-thesis="${n}">
        <div class="gz-card-num" aria-hidden="true">${n}</div>
        <div class="gz-card-body">
          <h3 class="gz-card-title">${escapeHtml(title)}</h3>
          <p class="gz-card-text">${escapeHtml(body)}</p>
        </div>
      </article>`;
  }).join("");
}

function checklist() {
  return `
    <ul class="gz-check-list">
      ${CHECK_IDS.map(
        (n) => `<li class="gz-check-item">
          <span class="gz-check-mark" aria-hidden="true">✓</span>
          <span>${escapeHtml(t(`godzillaCheck${n}`))}</span>
        </li>`
      ).join("")}
    </ul>`;
}

function optionsBlock() {
  return `
    <ul class="gz-bullet-list">
      ${OPT_IDS.map((n) => `<li>${escapeHtml(t(`godzillaOpt${n}`))}</li>`).join("")}
    </ul>`;
}

function rsuBlock() {
  return `
    <ul class="gz-bullet-list">
      ${RSU_IDS.map((n) => `<li>${escapeHtml(t(`godzillaRsu${n}`))}</li>`).join("")}
    </ul>`;
}

function paint(root) {
  root.innerHTML = `
    <section class="gz-hero" aria-label="${escapeHtml(t("godzillaHeroLabel"))}">
      <div class="gz-hero-main">
        <h3 class="gz-hero-kicker">${escapeHtml(t("godzillaKicker"))}</h3>
        <p class="gz-hero-tagline">${escapeHtml(t("godzillaTagline"))}</p>
        ${badgeRow()}
        <p class="gz-source">
          <span class="gz-source-label">${escapeHtml(t("godzillaSourceLabel"))}</span>
          <a class="gz-yt" href="${YT_URL}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("godzillaYoutube"))}</a>
          <span class="gz-source-cite">· ${escapeHtml(t("godzillaSourceCite"))}</span>
        </p>
      </div>
    </section>


    <section class="gz-panel gz-listened" aria-label="${escapeHtml(t("godzillaStockTitle"))}">
      <h3 class="gz-h3">${escapeHtml(t("godzillaStockTitle"))}</h3>
      <p class="gz-panel-lead">${escapeHtml(t("godzillaStockLead"))}</p>
      <ul class="gz-bullet-list gz-stock-list">
        ${[1,2,3,4,5,6].map((n) => `<li>${escapeHtml(t(`godzillaStock${n}`))}</li>`).join("")}
      </ul>
      <p class="gz-source-note">${escapeHtml(t("godzillaStockNote"))}</p>
    </section>

    <section class="gz-panel" aria-label="${escapeHtml(t("godzillaThesesTitle"))}">
      <h3 class="gz-h3">${escapeHtml(t("godzillaThesesTitle"))}</h3>
      <p class="gz-panel-lead">${escapeHtml(t("godzillaThesesLead"))}</p>
      <div class="gz-thesis-grid">
        ${thesisCards()}
      </div>
    </section>

    <section class="gz-panel" aria-label="${escapeHtml(t("godzillaChecklistTitle"))}">
      <h3 class="gz-h3">${escapeHtml(t("godzillaChecklistTitle"))}</h3>
      <p class="gz-panel-lead">${escapeHtml(t("godzillaChecklistLead"))}</p>
      ${checklist()}
    </section>

    <div class="gz-two-col">
      <section class="gz-panel" aria-label="${escapeHtml(t("godzillaOptionsTitle"))}">
        <h3 class="gz-h3">${escapeHtml(t("godzillaOptionsTitle"))}</h3>
        <p class="gz-panel-lead">${escapeHtml(t("godzillaOptionsLead"))}</p>
        ${optionsBlock()}
      </section>
      <section class="gz-panel" aria-label="${escapeHtml(t("godzillaRsuTitle"))}">
        <h3 class="gz-h3">${escapeHtml(t("godzillaRsuTitle"))}</h3>
        <p class="gz-panel-lead">${escapeHtml(t("godzillaRsuLead"))}</p>
        ${rsuBlock()}
      </section>
    </div>

    <section class="gz-panel gz-tw" aria-label="${escapeHtml(t("godzillaTwTitle"))}">
      <h3 class="gz-h3">${escapeHtml(t("godzillaTwTitle"))}</h3>
      <p class="gz-panel-lead">${escapeHtml(t("godzillaTwLead"))}</p>
      <p class="gz-tw-body">${escapeHtml(t("godzillaTwBody"))}</p>
    </section>

    <aside class="gz-gate" role="note">
      <strong class="gz-gate-title">${escapeHtml(t("godzillaGateNote"))}</strong>
      <p class="gz-gate-detail">${escapeHtml(t("godzillaGateDetail"))}</p>
    </aside>
  `;
}

/** Legacy export — detail block (now embedded under 名人podcast hub). */
export function renderGodzillaSection() {
  return `
    <section class="section godzilla-section" aria-label="${escapeHtml(t("godzillaTitle"))}">
      <p class="gz-disclaimer" role="note">${escapeHtml(t("godzillaDisclaimer"))}</p>
      <div id="gz-root" class="gz-root"></div>
    </section>`;
}

export function initGodzilla(selector = "#gz-root") {
  const root =
    typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!root) return { ok: false };
  paint(root);
  return { ok: true };
}
