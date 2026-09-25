/**
 * 名人podcast — hub of notable investor / host podcast frameworks.
 * Godzilla is the first featured entry (full static playbook).
 * Gooaye stub uses existing research-library metadata only (no invented quotes).
 * Math gate CLOSED for featured entries — candidate/watch; not live screener.
 */
import { escapeHtml } from "./glossary.js";
import { t } from "./i18n.js";
import { initGodzilla } from "./godzilla.js";

const GOOAYE_RESEARCH_HASH = "#research";
const GOOAYE_APPLE =
  "https://podcasts.apple.com/tw/podcast/gooaye-%E8%82%A1%E7%99%8C/id1500839292";

function featuredGodzillaCard() {
  return `
    <article class="pc-card pc-card-featured" id="podcast-godzilla" data-podcast="godzilla">
      <header class="pc-card-head">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-featured">${escapeHtml(t("podcastsFeatured"))}</span>
          <span class="pc-card-badge pc-badge-us">${escapeHtml(t("godzillaUsFocus"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${escapeHtml(t("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${escapeHtml(t("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${escapeHtml(t("godzillaTitle"))}</h3>
        <p class="pc-card-handle">${escapeHtml(t("podcastsGodzillaHandle"))}</p>
        <p class="pc-card-blurb">${escapeHtml(t("godzillaLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="gz-disclaimer" role="note">${escapeHtml(t("godzillaDisclaimer"))}</p>
        <div id="gz-root" class="gz-root"></div>
      </div>
    </article>`;
}

function gooayeStubCard() {
  return `
    <article class="pc-card pc-card-stub" id="podcast-gooaye" data-podcast="gooaye">
      <header class="pc-card-head">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-stub">${escapeHtml(t("podcastsStubBadge"))}</span>
          <span class="pc-card-badge pc-badge-tw">${escapeHtml(t("podcastsGooayeMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${escapeHtml(t("godzillaBadgeCandidate"))}</span>
        </div>
        <h3 class="pc-card-title">${escapeHtml(t("podcastsGooayeTitle"))}</h3>
        <p class="pc-card-blurb">${escapeHtml(t("podcastsGooayeLead"))}</p>
      </header>
      <div class="pc-card-body pc-stub-body">
        <p class="pc-stub-note" role="note">${escapeHtml(t("podcastsGooayeStubNote"))}</p>
        <ul class="pc-stub-points">
          <li>${escapeHtml(t("podcastsGooayePoint1"))}</li>
          <li>${escapeHtml(t("podcastsGooayePoint2"))}</li>
          <li>${escapeHtml(t("podcastsGooayePoint3"))}</li>
        </ul>
        <div class="pc-stub-actions">
          <a class="pc-link" href="${GOOAYE_RESEARCH_HASH}">${escapeHtml(t("podcastsGotoResearch"))}</a>
          <a class="pc-link pc-link-ext" href="${GOOAYE_APPLE}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("podcastsGooayeApple"))}</a>
        </div>
      </div>
    </article>`;
}

export function renderPodcastsSection() {
  return `
    <section class="section podcasts-section" aria-label="${escapeHtml(t("podcastsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${escapeHtml(t("podcastsTitle"))}</h2>
        <p class="view-lead">${escapeHtml(t("podcastsLead"))}</p>
      </header>
      <p class="pc-disclaimer" role="note">${escapeHtml(t("podcastsDisclaimer"))}</p>
      <div class="pc-list" role="list">
        ${featuredGodzillaCard()}
        ${gooayeStubCard()}
      </div>
    </section>`;
}

export function initPodcasts(selector = "#gz-root") {
  return initGodzilla(selector);
}
