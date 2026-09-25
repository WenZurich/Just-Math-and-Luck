/**
 * Jensen Huang (黃仁勳) — Stanford ETL talk entry inside 名人podcast hub.
 * Source: Stanford Online / STVP Entrepreneurial Thought Leaders (~2009; YT 2011).
 * Math gate CLOSED — candidate/watch; not live screener.
 */
import { escapeHtml } from "./glossary.js";
import { t } from "./i18n.js";

const YT_URL = "https://www.youtube.com/watch?v=Xn1EsFe7snQ";
const YT_EMBED = "https://www.youtube.com/embed/Xn1EsFe7snQ";
const ECORNER = "https://ecorner.stanford.edu";

const HIGHLIGHT_IDS = [1, 2, 3, 4, 5];

function badgeRow() {
  return `
    <div class="jh-badges" role="list">
      <span class="jh-badge jh-badge-candidate" role="listitem">${escapeHtml(t("godzillaBadgeCandidate"))}</span>
      <span class="jh-badge jh-badge-watch" role="listitem">${escapeHtml(t("godzillaBadgeWatch"))}</span>
      <span class="jh-badge jh-badge-us" role="listitem">${escapeHtml(t("jensenUsFocus"))}</span>
      <span class="jh-badge jh-badge-talk" role="listitem">${escapeHtml(t("jensenTalkBadge"))}</span>
    </div>`;
}

function highlightCards() {
  return HIGHLIGHT_IDS.map((n) => {
    const title = t(`jensenH${n}Title`);
    const body = t(`jensenH${n}Body`);
    return `
      <article class="jh-card" data-highlight="${n}">
        <div class="jh-card-num" aria-hidden="true">${n}</div>
        <div class="jh-card-body">
          <h4 class="jh-card-title">${escapeHtml(title)}</h4>
          <p class="jh-card-text">${escapeHtml(body)}</p>
        </div>
      </article>`;
  }).join("");
}

function paint(root) {
  root.innerHTML = `
    <section class="jh-hero" aria-label="${escapeHtml(t("jensenHeroLabel"))}">
      <div class="jh-hero-main">
        <h3 class="jh-hero-kicker">${escapeHtml(t("jensenKicker"))}</h3>
        <p class="jh-hero-tagline">${escapeHtml(t("jensenTagline"))}</p>
        ${badgeRow()}
        <p class="jh-meta">${escapeHtml(t("jensenMeta"))}</p>
        <p class="jh-source">
          <span class="jh-source-label">${escapeHtml(t("godzillaSourceLabel"))}</span>
          <a class="jh-yt" href="${YT_URL}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("jensenYoutube"))}</a>
          <span class="jh-source-cite">· ${escapeHtml(t("jensenSourceCite"))}</span>
        </p>
        <p class="jh-source jh-source-alt">
          <a class="jh-yt" href="${ECORNER}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("jensenEcorner"))}</a>
        </p>
      </div>
    </section>

    <div class="jh-embed-wrap">
      <div class="jh-embed">
        <iframe
          src="${YT_EMBED}"
          title="${escapeHtml(t("jensenEmbedTitle"))}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <a class="jh-open-yt" href="${YT_URL}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("jensenOpenYoutube"))}</a>
    </div>

    <section class="jh-panel" aria-label="${escapeHtml(t("jensenHighlightsTitle"))}">
      <h3 class="jh-h3">${escapeHtml(t("jensenHighlightsTitle"))}</h3>
      <p class="jh-panel-lead">${escapeHtml(t("jensenHighlightsLead"))}</p>
      <div class="jh-highlight-grid">
        ${highlightCards()}
      </div>
    </section>

    <section class="jh-panel jh-tw" aria-label="${escapeHtml(t("jensenTwTitle"))}">
      <h3 class="jh-h3">${escapeHtml(t("jensenTwTitle"))}</h3>
      <p class="jh-panel-lead">${escapeHtml(t("jensenTwLead"))}</p>
      <p class="jh-tw-body">${escapeHtml(t("jensenTwBody"))}</p>
    </section>

    <aside class="jh-gate" role="note">
      <strong class="jh-gate-title">${escapeHtml(t("jensenGateNote"))}</strong>
      <p class="jh-gate-detail">${escapeHtml(t("jensenGateDetail"))}</p>
    </aside>
  `;
}

export function initJensen(selector = "#jh-root") {
  const root =
    typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!root) return { ok: false };
  paint(root);
  return { ok: true };
}
