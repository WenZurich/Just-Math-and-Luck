/**
 * Jensen Huang (黃仁勳) — Stanford ETL talk entry inside 名人podcast hub.
 * Source: Stanford Online / STVP ETL (~2009; YT 2011). Public video downloaded + STT listened.
 * Math gate CLOSED — candidate/watch; not live screener.
 * YouTube owner blocks embeds → link-out card (embedAllowed: false).
 */
import { escapeHtml } from "./glossary.js";
import { t } from "./i18n.js";

const VIDEO = {
  id: "Xn1EsFe7snQ",
  watchUrl: "https://www.youtube.com/watch?v=Xn1EsFe7snQ",
  embedUrl: "https://www.youtube.com/embed/Xn1EsFe7snQ",
  thumbUrl: "https://i.ytimg.com/vi/Xn1EsFe7snQ/hqdefault.jpg",
  /** Stanford Online disables site embeds; keep false → professional link-out. */
  embedAllowed: false,
};

const ECORNER = "https://ecorner.stanford.edu";

const HIGHLIGHT_IDS = [1, 2, 3, 4, 5];

function badgeRow() {
  return `
    <div class="jh-badges" role="list">
      <span class="jh-badge jh-badge-candidate" role="listitem">${escapeHtml(t("godzillaBadgeCandidate"))}</span>
      <span class="jh-badge jh-badge-watch" role="listitem">${escapeHtml(t("godzillaBadgeWatch"))}</span>
      <span class="jh-badge jh-badge-us" role="listitem">${escapeHtml(t("jensenUsFocus"))}</span>
      <span class="jh-badge jh-badge-talk" role="listitem">${escapeHtml(t("jensenTalkBadge"))}</span>
      <span class="jh-badge jh-badge-listened" role="listitem">${escapeHtml(t("jensenListenedBadge"))}</span>
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

/** Professional link-out when owner blocks embeds (or embedAllowed is false). */
function youtubeLinkOutCard() {
  const title = t("jensenEmbedTitle");
  return `
    <div class="jh-yt-card" data-yt-id="${escapeHtml(VIDEO.id)}" data-embed-allowed="false">
      <a class="jh-yt-card-media" href="${VIDEO.watchUrl}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">
        <img
          class="jh-yt-card-thumb"
          src="${VIDEO.thumbUrl}"
          alt=""
          width="480"
          height="360"
          loading="lazy"
          decoding="async"
        />
        <span class="jh-yt-card-play" aria-hidden="true"></span>
      </a>
      <div class="jh-yt-card-body">
        <p class="jh-yt-card-kicker">${escapeHtml(t("jensenYoutube"))}</p>
        <h4 class="jh-yt-card-title">${escapeHtml(title)}</h4>
        <p class="jh-yt-card-note">${escapeHtml(t("jensenEmbedBlockedNote"))}</p>
        <a
          class="jh-yt-card-cta"
          href="${VIDEO.watchUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >${escapeHtml(t("jensenWatchCta"))}</a>
      </div>
    </div>`;
}

/** Optional iframe path for entries that allow embedding. */
function youtubeEmbed() {
  return `
    <div class="jh-embed-wrap" data-embed-allowed="true">
      <div class="jh-embed">
        <iframe
          src="${VIDEO.embedUrl}"
          title="${escapeHtml(t("jensenEmbedTitle"))}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <a class="jh-open-yt" href="${VIDEO.watchUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("jensenOpenYoutube"))}</a>
    </div>`;
}

function videoBlock() {
  return VIDEO.embedAllowed ? youtubeEmbed() : youtubeLinkOutCard();
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
          <a class="jh-yt" href="${VIDEO.watchUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("jensenYoutube"))}</a>
          <span class="jh-source-cite">· ${escapeHtml(t("jensenSourceCite"))}</span>
        </p>
        <p class="jh-source jh-source-alt">
          <a class="jh-yt" href="${ECORNER}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("jensenEcorner"))}</a>
        </p>
      </div>
    </section>

    ${videoBlock()}


    <section class="jh-panel jh-listened" aria-label="${escapeHtml(t("jensenStockTitle"))}">
      <h3 class="jh-h3">${escapeHtml(t("jensenStockTitle"))}</h3>
      <p class="jh-panel-lead">${escapeHtml(t("jensenStockLead"))}</p>
      <ul class="jh-bullet-list jh-stock-list">
        ${[1,2,3,4,5,6].map((n)=>`<li>${escapeHtml(t(`jensenStock${n}`))}</li>`).join("")}
      </ul>
      <p class="jh-source-note">${escapeHtml(t("jensenStockNote"))}</p>
    </section>

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
