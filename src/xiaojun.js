/**
 * Xiaojun episode libraryepisode library.
 * Listened episodes: stockAnalysis from audio→STT review.
 * Others: RSS show-note teasers only (notesQuality !== "listened").
 * Candidate / watch; math gate CLOSED. Not investment advice.
 */
import { escapeHtml } from "./glossary.js";
import { t } from "./i18n.js";

const DATA_URL = "./data/xiaojun-episodes.json";
const PAGE_SIZE = 25;
const XIAOJUN_RESEARCH_HASH = "#research/podcast";
const XIAOJUN_APPLE =
  "https://podcasts.apple.com/tw/podcast/%E5%BC%A0%E5%B0%8F%E7%8F%BAj%C3%B9n-%E5%95%86%E4%B8%9A%E8%AE%BF%E8%B0%88%E5%BD%95/id1634356920";

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
      ? `<span class="xj-ep-num">EP${escapeHtml(String(ep.ep))}</span>`
      : "";
  const date = ep.pubDateTw
    ? `<time class="xj-ep-date" datetime="${escapeHtml(ep.pubDateIso || ep.pubDateTw)}">${escapeHtml(ep.pubDateTw)}</time>`
    : "";
  const badge = listened
    ? `<span class="xj-ep-badge xj-ep-badge-listened">${escapeHtml(t("xiaojunBadgeListened"))}</span>`
    : `<span class="xj-ep-badge xj-ep-badge-rss">${escapeHtml(t("xiaojunBadgeRssOnly"))}</span>`;
  const titleText = ep.title || (ep.ep != null ? `EP${ep.ep}` : t("xiaojunUntitled"));

  let body = "";
  if (listened) {
    const stock = (ep.stockAnalysis || []).filter(Boolean);
    body += `<p class="xj-ep-kicker xj-ep-kicker-stock">${escapeHtml(t("xiaojunStockAnalysis"))}</p>`;
    body += `<ul class="xj-ep-points xj-ep-stock">${stock
      .map((p) => `<li>${escapeHtml(p)}</li>`)
      .join("")}</ul>`;
    const teaser = (ep.rssTeaser || ep.keyPoints || []).filter(Boolean);
    if (teaser.length) {
      body += `<details class="xj-ep-rss-details"><summary>${escapeHtml(t("xiaojunRssTeaserToggle"))}</summary>`;
      body += `<ul class="xj-ep-points xj-ep-rss">${teaser
        .map((p) => `<li>${escapeHtml(p)}</li>`)
        .join("")}</ul></details>`;
    }
    if (ep.listenedAt || ep.transcriptSource) {
      const bits = [];
      if (ep.listenedAt) bits.push(t("xiaojunListenedAt", { date: String(ep.listenedAt).slice(0, 16).replace("T", " ") }));
      if (ep.transcriptSource) bits.push(String(ep.transcriptSource));
      body += `<p class="xj-ep-source-note">${escapeHtml(bits.join(" · "))}</p>`;
    }
  } else {
    const points = (ep.keyPoints || []).filter(Boolean);
    body += `<p class="xj-ep-kicker">${escapeHtml(t("xiaojunKeyPoints"))}</p>`;
    if (points.length) {
      body += `<ul class="xj-ep-points">${points
        .map((p) => `<li>${escapeHtml(p)}</li>`)
        .join("")}</ul>`;
    } else {
      body += `<p class="xj-ep-empty">${escapeHtml(t("xiaojunNotesThin"))}</p>`;
    }
    const thinNote =
      ep.notesQuality === "teaser" || ep.notesQuality === "title-only" || !points.length
        ? `<p class="xj-ep-source-note">${escapeHtml(t("xiaojunTeaserNote"))}</p>`
        : `<p class="xj-ep-source-note">${escapeHtml(t("xiaojunRssOnlyNote"))}</p>`;
    body += thinNote;
  }

  const link = ep.link
    ? `<a class="xj-ep-link" href="${escapeHtml(ep.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("xiaojunListen"))}</a>`
    : "";

  return `
    <article class="xj-ep${listened ? " xj-ep-listened" : " xj-ep-rss-only"}" data-ep="${escapeHtml(String(ep.ep ?? ""))}" data-quality="${escapeHtml(listened ? "listened" : "rss-only")}">
      <header class="xj-ep-head">
        <div class="xj-ep-meta">${num}${badge}${date}</div>
        <h4 class="xj-ep-title">${escapeHtml(titleText)}</h4>
      </header>
      <div class="xj-ep-body">
        ${body}
        <div class="xj-ep-actions">${link}</div>
      </div>
    </article>`;
}

function paint(root, data, { error } = {}) {
  if (error) {
    root.innerHTML = `
      <div class="xj-error" role="alert">
        <p>${escapeHtml(t("xiaojunLoadError", { msg: String(error.message || error) }))}</p>
        <a class="pc-link pc-link-ext" href="${XIAOJUN_APPLE}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("podcastsXiaojunApple"))}</a>
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
    <div class="xj-toolbar">
      <div class="xj-toolbar-stats" aria-live="polite">
        <span class="xj-stat">${escapeHtml(t("xiaojunEpisodeCount", { n: String(totalAll) }))}</span>
        ${
          counts.listened
            ? `<span class="xj-stat xj-stat-listened">${escapeHtml(t("xiaojunListenedCount", { n: String(counts.listened) }))}</span>`
            : ""
        }
        ${asOf ? `<span class="xj-asof">${escapeHtml(t("xiaojunAsOf", { date: asOf }))}</span>` : ""}
        ${
          counts.notesEmpty
            ? `<span class="xj-stat-muted">${escapeHtml(t("xiaojunEmptyCount", { n: String(counts.notesEmpty) }))}</span>`
            : ""
        }
      </div>
      <label class="xj-search">
        <span class="xj-search-label">${escapeHtml(t("xiaojunSearchLabel"))}</span>
        <input type="search" class="xj-search-input" data-xj-search
          placeholder="${escapeHtml(t("xiaojunSearchPlaceholder"))}"
          value="${escapeHtml(filterQuery)}" autocomplete="off" />
      </label>
    </div>

    <p class="xj-source-line">
      ${escapeHtml(t("xiaojunSourceLine"))}
      <a class="pc-link pc-link-ext" href="${escapeHtml(data.show?.feedUrl || "")}" target="_blank" rel="noopener noreferrer">SoundOn RSS</a>
      ·
      <a class="pc-link pc-link-ext" href="${XIAOJUN_APPLE}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("podcastsXiaojunApple"))}</a>
      ·
      <a class="pc-link" href="${XIAOJUN_RESEARCH_HASH}">${escapeHtml(t("podcastsGotoResearch"))}</a>
    </p>

    <div class="xj-list" role="list">
      ${
        slice.length
          ? slice.map(episodeCard).join("")
          : `<p class="xj-empty">${escapeHtml(t("xiaojunNoResults"))}</p>`
      }
    </div>

    <div class="xj-pager">
      ${
        remaining > 0
          ? `<button type="button" class="xj-load-more" data-xj-more>
              ${escapeHtml(t("xiaojunLoadMore", { n: String(Math.min(PAGE_SIZE, remaining)), left: String(remaining) }))}
            </button>`
          : all.length
            ? `<p class="xj-pager-done">${escapeHtml(t("xiaojunShowingAll", { n: String(all.length) }))}</p>`
            : ""
      }
    </div>`;

  const input = root.querySelector("[data-xj-search]");
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

  const more = root.querySelector("[data-xj-more]");
  if (more) {
    more.addEventListener("click", () => {
      visibleCount += PAGE_SIZE;
      paint(root, data);
    });
  }
}

function shellHtml() {
  return `
    <article class="pc-card pc-card-xiaojun" id="podcast-xiaojun" data-podcast="xiaojun">
      <header class="pc-card-head pc-card-head-xiaojun">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${escapeHtml(t("xiaojunLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-cn">${escapeHtml(t("podcastsXiaojunMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${escapeHtml(t("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${escapeHtml(t("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${escapeHtml(t("podcastsXiaojunTitle"))}</h3>
        <p class="pc-card-blurb">${escapeHtml(t("podcastsXiaojunLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="xj-disclaimer" role="note">${escapeHtml(t("xiaojunDisclaimer"))}</p>
        <div id="xj-root" class="xj-root" aria-busy="true">
          <p class="xj-loading">${escapeHtml(t("xiaojunLoading"))}</p>
        </div>
      </div>
    </article>`;
}

export function xiaojunDetailHtml() {
  return shellHtml();
}

export async function initXiaojun(selector = "#xj-root") {
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
