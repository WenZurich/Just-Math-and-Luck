/**
 * Whynottv episode libraryepisode library.
 * Listened episodes: stockAnalysis from audio→STT review.
 * Others: RSS show-note teasers only (notesQuality !== "listened").
 * Candidate / watch; math gate CLOSED. Not investment advice.
 */
import { escapeHtml } from "./glossary.js";
import { t } from "./i18n.js";

const DATA_URL = "./data/whynottv-episodes.json";
const PAGE_SIZE = 25;
const WHYNOTTV_RESEARCH_HASH = "#research/podcast";
const WHYNOTTV_APPLE =
  "https://podcasts.apple.com/tw/podcast/whynottv-podcast/id1824936911";

let cache = null;
let loadPromise = null;
let visibleCount = PAGE_SIZE;
let filterQuery = "";

async function loadData() {
  if (cache) return cache;
  if (loadPromise) return loadPromise;
  loadPromise = (async () => {
    const res = await fetch(DATA_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    cache = await res.json();
    return cache;
  })().catch((err) => {
    loadPromise = null;
    throw err;
  });
  return loadPromise;
}

function formatAsOf(asOf) {
  if (!asOf) return "";
  try {
    const d = new Date(asOf);
    if (Number.isNaN(d.getTime())) return asOf;
    return new Intl.DateTimeFormat(undefined, {
      timeZone: "Asia/Taipei",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(d);
  } catch {
    return asOf;
  }
}

function isListened(ep) {
  return ep?.notesQuality === "listened" && Array.isArray(ep.stockAnalysis) && ep.stockAnalysis.length > 0;
}

function filteredEpisodes(data) {
  const list = data?.episodes || [];
  const q = filterQuery.trim().toLowerCase();
  if (!q) return list;
  return list.filter((ep) => {
    const hay = [
      ep.title,
      ep.subtitle,
      ep.ep != null ? `ep${ep.ep}` : "",
      ep.ep != null ? String(ep.ep) : "",
      ...(ep.stockAnalysis || []),
      ...(ep.keyPoints || []),
      ...(ep.rssTeaser || []),
    ]
      .filter(Boolean)
      .join("\n")
      .toLowerCase();
    return hay.includes(q);
  });
}

function episodeCard(ep) {
  const listened = isListened(ep);
  const num =
    ep.ep != null
      ? `<span class="wn-ep-num">EP${escapeHtml(String(ep.ep))}</span>`
      : "";
  const date = ep.pubDateTw
    ? `<time class="wn-ep-date" datetime="${escapeHtml(ep.pubDateIso || ep.pubDateTw)}">${escapeHtml(ep.pubDateTw)}</time>`
    : "";
  const badge = listened
    ? `<span class="wn-ep-badge wn-ep-badge-listened">${escapeHtml(t("whynottvBadgeListened"))}</span>`
    : `<span class="wn-ep-badge wn-ep-badge-rss">${escapeHtml(t("whynottvBadgeRssOnly"))}</span>`;
  const titleText = ep.title || (ep.ep != null ? `EP${ep.ep}` : t("whynottvUntitled"));

  let body = "";
  if (listened) {
    const stock = (ep.stockAnalysis || []).filter(Boolean);
    body += `<p class="wn-ep-kicker wn-ep-kicker-stock">${escapeHtml(t("whynottvStockAnalysis"))}</p>`;
    body += `<ul class="wn-ep-points wn-ep-stock">${stock
      .map((p) => `<li>${escapeHtml(p)}</li>`)
      .join("")}</ul>`;
    const teaser = (ep.rssTeaser || ep.keyPoints || []).filter(Boolean);
    if (teaser.length) {
      body += `<details class="wn-ep-rss-details"><summary>${escapeHtml(t("whynottvRssTeaserToggle"))}</summary>`;
      body += `<ul class="wn-ep-points wn-ep-rss">${teaser
        .map((p) => `<li>${escapeHtml(p)}</li>`)
        .join("")}</ul></details>`;
    }
    if (ep.listenedAt || ep.transcriptSource) {
      const bits = [];
      if (ep.listenedAt) bits.push(t("whynottvListenedAt", { date: String(ep.listenedAt).slice(0, 16).replace("T", " ") }));
      if (ep.transcriptSource) bits.push(String(ep.transcriptSource));
      body += `<p class="wn-ep-source-note">${escapeHtml(bits.join(" · "))}</p>`;
    }
  } else {
    const points = (ep.keyPoints || []).filter(Boolean);
    body += `<p class="wn-ep-kicker">${escapeHtml(t("whynottvKeyPoints"))}</p>`;
    if (points.length) {
      body += `<ul class="wn-ep-points">${points
        .map((p) => `<li>${escapeHtml(p)}</li>`)
        .join("")}</ul>`;
    } else {
      body += `<p class="wn-ep-empty">${escapeHtml(t("whynottvNotesThin"))}</p>`;
    }
    const thinNote =
      ep.notesQuality === "teaser" || ep.notesQuality === "title-only" || !points.length
        ? `<p class="wn-ep-source-note">${escapeHtml(t("whynottvTeaserNote"))}</p>`
        : `<p class="wn-ep-source-note">${escapeHtml(t("whynottvRssOnlyNote"))}</p>`;
    body += thinNote;
  }

  const link = ep.link
    ? `<a class="wn-ep-link" href="${escapeHtml(ep.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("whynottvListen"))}</a>`
    : "";

  return `
    <article class="wn-ep${listened ? " wn-ep-listened" : " wn-ep-rss-only"}" data-ep="${escapeHtml(String(ep.ep ?? ""))}" data-quality="${escapeHtml(listened ? "listened" : "rss-only")}">
      <header class="wn-ep-head">
        <div class="wn-ep-meta">${num}${badge}${date}</div>
        <h4 class="wn-ep-title">${escapeHtml(titleText)}</h4>
      </header>
      <div class="wn-ep-body">
        ${body}
        <div class="wn-ep-actions">${link}</div>
      </div>
    </article>`;
}

function paint(root, data, { error } = {}) {
  if (error) {
    root.innerHTML = `
      <div class="wn-error" role="alert">
        <p>${escapeHtml(t("whynottvLoadError", { msg: String(error.message || error) }))}</p>
        <a class="pc-link pc-link-ext" href="${WHYNOTTV_APPLE}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("podcastsWhynottvApple"))}</a>
      </div>`;
    return;
  }

  const all = filteredEpisodes(data);
  const totalAll = (data.episodes || []).length;
  const slice = all.slice(0, visibleCount);
  const remaining = Math.max(0, all.length - slice.length);
  const asOf = formatAsOf(data.asOf);
  const counts = data.counts || {};

  root.innerHTML = `
    <div class="wn-toolbar">
      <div class="wn-toolbar-stats" aria-live="polite">
        <span class="wn-stat">${escapeHtml(t("whynottvEpisodeCount", { n: String(totalAll) }))}</span>
        ${
          counts.listened
            ? `<span class="wn-stat wn-stat-listened">${escapeHtml(t("whynottvListenedCount", { n: String(counts.listened) }))}</span>`
            : ""
        }
        ${asOf ? `<span class="wn-asof">${escapeHtml(t("whynottvAsOf", { date: asOf }))}</span>` : ""}
        ${
          counts.notesEmpty
            ? `<span class="wn-stat-muted">${escapeHtml(t("whynottvEmptyCount", { n: String(counts.notesEmpty) }))}</span>`
            : ""
        }
      </div>
      <label class="wn-search">
        <span class="wn-search-label">${escapeHtml(t("whynottvSearchLabel"))}</span>
        <input type="search" class="wn-search-input" data-wn-search
          placeholder="${escapeHtml(t("whynottvSearchPlaceholder"))}"
          value="${escapeHtml(filterQuery)}" autocomplete="off" />
      </label>
    </div>

    <p class="wn-source-line">
      ${escapeHtml(t("whynottvSourceLine"))}
      <a class="pc-link pc-link-ext" href="${escapeHtml(data.show?.feedUrl || "")}" target="_blank" rel="noopener noreferrer">SoundOn RSS</a>
      ·
      <a class="pc-link pc-link-ext" href="${WHYNOTTV_APPLE}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("podcastsWhynottvApple"))}</a>
      ·
      <a class="pc-link" href="${WHYNOTTV_RESEARCH_HASH}">${escapeHtml(t("podcastsGotoResearch"))}</a>
    </p>

    <div class="wn-list" role="list">
      ${
        slice.length
          ? slice.map(episodeCard).join("")
          : `<p class="wn-empty">${escapeHtml(t("whynottvNoResults"))}</p>`
      }
    </div>

    <div class="wn-pager">
      ${
        remaining > 0
          ? `<button type="button" class="wn-load-more" data-wn-more>
              ${escapeHtml(t("whynottvLoadMore", { n: String(Math.min(PAGE_SIZE, remaining)), left: String(remaining) }))}
            </button>`
          : all.length
            ? `<p class="wn-pager-done">${escapeHtml(t("whynottvShowingAll", { n: String(all.length) }))}</p>`
            : ""
      }
    </div>`;

  const input = root.querySelector("[data-wn-search]");
  if (input) {
    let timer = null;
    input.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        filterQuery = input.value || "";
        visibleCount = PAGE_SIZE;
        paint(root, data);
      }, 180);
    });
  }

  const more = root.querySelector("[data-wn-more]");
  if (more) {
    more.addEventListener("click", () => {
      visibleCount += PAGE_SIZE;
      paint(root, data);
    });
  }
}

function shellHtml() {
  return `
    <article class="pc-card pc-card-whynottv" id="podcast-whynottv" data-podcast="whynottv">
      <header class="pc-card-head pc-card-head-whynottv">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${escapeHtml(t("whynottvLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-cn">${escapeHtml(t("podcastsWhynottvMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${escapeHtml(t("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${escapeHtml(t("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${escapeHtml(t("podcastsWhynottvTitle"))}</h3>
        <p class="pc-card-blurb">${escapeHtml(t("podcastsWhynottvLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="wn-disclaimer" role="note">${escapeHtml(t("whynottvDisclaimer"))}</p>
        <div id="wn-root" class="wn-root" aria-busy="true">
          <p class="wn-loading">${escapeHtml(t("whynottvLoading"))}</p>
        </div>
      </div>
    </article>`;
}

export function whynottvDetailHtml() {
  return shellHtml();
}

export async function initWhynottv(selector = "#wn-root") {
  const root =
    typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!root) return { ok: false, reason: "missing-root" };

  visibleCount = PAGE_SIZE;
  filterQuery = "";

  try {
    const data = await loadData();
    root.setAttribute("aria-busy", "false");
    paint(root, data);
    return { ok: true, count: data.episodes?.length || 0 };
  } catch (err) {
    root.setAttribute("aria-busy", "false");
    paint(root, null, { error: err });
    return { ok: false, reason: String(err?.message || err) };
  }
}
