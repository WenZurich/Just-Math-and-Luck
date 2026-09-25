/**
 * 張濬安 — blog + PTT library.
 * Analyzed: stock-focused bullets after reading public post (+ PTT comments).
 * Title-only: catalogued when public body unavailable/deleted.
 * Candidate / watch; math gate CLOSED. Not investment advice.
 */
import { escapeHtml } from "./glossary.js";
import { t } from "./i18n.js";

const DATA_URL = "./data/zhang-junan-posts.json";
const PAGE_SIZE = 25;
const BLOG_HOME = "https://et220870.blogspot.com/";
const PTT_USER = "https://www.pttweb.cc/user/et220870";

let cache = null;
let loadPromise = null;
let visibleCount = PAGE_SIZE;
let filterQuery = "";
let sourceFilter = "all"; // all | blog | ptt
let seriesFilter = "all";

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

function formatDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return String(iso).slice(0, 10);
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Taipei",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(d);
  } catch {
    return String(iso).slice(0, 10);
  }
}

function isAnalyzed(post) {
  return (
    post?.analysisQuality === "analyzed" &&
    Array.isArray(post.analysis) &&
    post.analysis.length > 0
  );
}

function seriesOptions(posts, source) {
  const set = new Set();
  for (const p of posts) {
    if (source !== "all" && p.source !== source) continue;
    if (p.series) set.add(p.series);
  }
  return ["all", ...[...set].sort((a, b) => a.localeCompare(b, "zh-Hant"))];
}

function filteredPosts(data) {
  const list = data?.posts || [];
  const q = filterQuery.trim().toLowerCase();
  return list.filter((p) => {
    if (sourceFilter !== "all" && p.source !== sourceFilter) return false;
    if (seriesFilter !== "all" && p.series !== seriesFilter) return false;
    if (!q) return true;
    const hay = [
      p.title,
      p.series,
      p.board,
      p.source,
      ...(p.analysis || []),
      p.commentSummary || "",
    ]
      .filter(Boolean)
      .join("\n")
      .toLowerCase();
    return hay.includes(q);
  });
}

function postCard(post) {
  const analyzed = isAnalyzed(post);
  const dateStr = formatDate(post.publishedAt);
  const date = dateStr
    ? `<time class="zj-ep-date" datetime="${escapeHtml(post.publishedAt || dateStr)}">${escapeHtml(dateStr)}</time>`
    : "";
  const badge = analyzed
    ? `<span class="zj-ep-badge zj-ep-badge-analyzed">${escapeHtml(t("zhangJunanBadgeAnalyzed"))}</span>`
    : `<span class="zj-ep-badge zj-ep-badge-title">${escapeHtml(t("zhangJunanBadgeTitleOnly"))}</span>`;
  const sourceBadge =
    post.source === "blog"
      ? `<span class="zj-ep-badge">${escapeHtml(t("zhangJunanSourceBlog"))}</span>`
      : `<span class="zj-ep-badge">${escapeHtml(t("zhangJunanSourcePtt"))}</span>`;
  const board =
    post.source === "ptt" && post.board
      ? `<span class="zj-ep-board">[${escapeHtml(post.board)}]</span>`
      : "";
  const series = post.series
    ? `<span class="zj-ep-badge">${escapeHtml(post.series)}</span>`
    : "";

  let body = "";
  body += `<p class="zj-ep-kicker zj-ep-kicker-stock">${escapeHtml(
    analyzed ? t("zhangJunanStockAnalysis") : t("zhangJunanKeyPoints")
  )}</p>`;
  const points = (post.analysis || []).filter(Boolean);
  if (points.length) {
    body += `<ul class="zj-ep-points${analyzed ? " zj-ep-stock" : ""}">${points
      .map((x) => `<li>${escapeHtml(x)}</li>`)
      .join("")}</ul>`;
  } else {
    body += `<p class="zj-ep-empty">${escapeHtml(t("zhangJunanNotesThin"))}</p>`;
  }
  if (!analyzed) {
    body += `<p class="zj-ep-source-note">${escapeHtml(t("zhangJunanTitleOnlyNote"))}</p>`;
  }
  if (post.commentSummary) {
    body += `<div class="zj-ep-comments"><div class="zj-ep-comments-label">${escapeHtml(
      t("zhangJunanCommentSummary")
    )}</div><div>${escapeHtml(post.commentSummary)}</div></div>`;
  }

  const linkLabel =
    post.source === "blog" ? t("zhangJunanOpenBlog") : t("zhangJunanOpenPtt");
  const link = post.url
    ? `<a class="zj-ep-link" href="${escapeHtml(post.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(linkLabel)}</a>`
    : "";

  return `
    <article class="zj-ep${analyzed ? " zj-ep-listened" : " zj-ep-rss-only"}" data-id="${escapeHtml(post.id)}" data-quality="${escapeHtml(analyzed ? "analyzed" : "title-only")}">
      <header class="zj-ep-head">
        <div class="zj-ep-meta">${sourceBadge}${series}${badge}${date}</div>
        <h4 class="zj-ep-title">${board}${escapeHtml(post.title || t("zhangJunanUntitled"))}</h4>
      </header>
      <div class="zj-ep-body">
        ${body}
        <div class="zj-ep-actions">${link}</div>
      </div>
    </article>`;
}

function paint(root, data, { error } = {}) {
  if (error) {
    root.innerHTML = `
      <div class="zj-error" role="alert">
        <p>${escapeHtml(t("zhangJunanLoadError", { msg: String(error.message || error) }))}</p>
        <a class="pc-link pc-link-ext" href="${BLOG_HOME}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("zhangJunanOpenBlog"))}</a>
      </div>`;
    return;
  }

  const all = filteredPosts(data);
  const totalAll = (data.posts || []).length;
  const slice = all.slice(0, visibleCount);
  const remaining = Math.max(0, all.length - slice.length);
  const asOf = formatAsOf(data.asOf);
  const counts = data.counts || {};
  const seriesOpts = seriesOptions(data.posts || [], sourceFilter);

  const sourceTabs = [
    { id: "all", label: t("zhangJunanFilterAll") },
    { id: "blog", label: t("zhangJunanFilterBlog") },
    { id: "ptt", label: t("zhangJunanFilterPtt") },
  ]
    .map(
      (s) =>
        `<button type="button" class="zj-subtab${sourceFilter === s.id ? " is-active" : ""}" data-zj-source="${s.id}">${escapeHtml(s.label)}</button>`
    )
    .join("");

  const seriesTabs = seriesOpts
    .map((s) => {
      const label = s === "all" ? t("zhangJunanFilterSeriesAll") : s;
      return `<button type="button" class="zj-series-tab${seriesFilter === s ? " is-active" : ""}" data-zj-series="${escapeHtml(s)}">${escapeHtml(label)}</button>`;
    })
    .join("");

  root.innerHTML = `
    <div class="zj-toolbar">
      <div class="zj-toolbar-stats" aria-live="polite">
        <span class="zj-stat">${escapeHtml(t("zhangJunanPostCount", { n: String(totalAll) }))}</span>
        ${
          counts.analyzed
            ? `<span class="zj-stat zj-stat-listened">${escapeHtml(t("zhangJunanAnalyzedCount", { n: String(counts.analyzed) }))}</span>`
            : ""
        }
        ${
          counts.titleOnly
            ? `<span class="zj-stat-muted">${escapeHtml(t("zhangJunanTitleOnlyCount", { n: String(counts.titleOnly) }))}</span>`
            : ""
        }
        ${asOf ? `<span class="zj-asof">${escapeHtml(t("zhangJunanAsOf", { date: asOf }))}</span>` : ""}
      </div>
      <label class="zj-search">
        <span class="zj-search-label">${escapeHtml(t("zhangJunanSearchLabel"))}</span>
        <input type="search" class="zj-search-input" data-zj-search
          placeholder="${escapeHtml(t("zhangJunanSearchPlaceholder"))}"
          value="${escapeHtml(filterQuery)}" autocomplete="off" />
      </label>
    </div>

    <div class="zj-subtabs" role="tablist" aria-label="${escapeHtml(t("zhangJunanSourceFilters"))}">${sourceTabs}</div>
    <div class="zj-series-tabs" role="tablist" aria-label="${escapeHtml(t("zhangJunanSeriesFilters"))}">${seriesTabs}</div>

    <p class="zj-source-line">
      ${escapeHtml(t("zhangJunanSourceLine"))}
      <a class="pc-link pc-link-ext" href="${BLOG_HOME}" target="_blank" rel="noopener noreferrer">Blogspot</a>
      ·
      <a class="pc-link pc-link-ext" href="${PTT_USER}" target="_blank" rel="noopener noreferrer">PTT ${escapeHtml(data.person?.pttId || "et220870")}</a>
    </p>

    <div class="zj-list" role="list">
      ${
        slice.length
          ? slice.map(postCard).join("")
          : `<p class="zj-empty">${escapeHtml(t("zhangJunanNoResults"))}</p>`
      }
    </div>

    <div class="zj-pager">
      ${
        remaining > 0
          ? `<button type="button" class="zj-load-more" data-zj-more>
              ${escapeHtml(t("zhangJunanLoadMore", { n: String(Math.min(PAGE_SIZE, remaining)), left: String(remaining) }))}
            </button>`
          : all.length
            ? `<p class="zj-pager-done">${escapeHtml(t("zhangJunanShowingAll", { n: String(all.length) }))}</p>`
            : ""
      }
    </div>`;

  const input = root.querySelector("[data-zj-search]");
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

  root.querySelectorAll("[data-zj-source]").forEach((btn) => {
    btn.addEventListener("click", () => {
      sourceFilter = btn.getAttribute("data-zj-source") || "all";
      seriesFilter = "all";
      visibleCount = PAGE_SIZE;
      paint(root, data);
    });
  });

  root.querySelectorAll("[data-zj-series]").forEach((btn) => {
    btn.addEventListener("click", () => {
      seriesFilter = btn.getAttribute("data-zj-series") || "all";
      visibleCount = PAGE_SIZE;
      paint(root, data);
    });
  });

  const more = root.querySelector("[data-zj-more]");
  if (more) {
    more.addEventListener("click", () => {
      visibleCount += PAGE_SIZE;
      paint(root, data);
    });
  }
}

function shellHtml() {
  return `
    <article class="pc-card pc-card-zhang-junan" id="podcast-zhang-junan" data-podcast="zhang-junan">
      <header class="pc-card-head pc-card-head-zhang-junan">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${escapeHtml(t("zhangJunanLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-tw">${escapeHtml(t("podcastsZhangJunanMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${escapeHtml(t("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${escapeHtml(t("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${escapeHtml(t("podcastsZhangJunanTitle"))}</h3>
        <p class="pc-card-blurb">${escapeHtml(t("podcastsZhangJunanLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="zj-disclaimer" role="note">${escapeHtml(t("zhangJunanDisclaimer"))}</p>
        <div id="zj-root" class="zj-root" aria-busy="true">
          <p class="zj-loading">${escapeHtml(t("zhangJunanLoading"))}</p>
        </div>
      </div>
    </article>`;
}

export function zhangJunanDetailHtml() {
  return shellHtml();
}

export async function initZhangJunan(selector = "#zj-root") {
  const root =
    typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!root) return { ok: false, reason: "missing-root" };

  visibleCount = PAGE_SIZE;
  filterQuery = "";
  sourceFilter = "all";
  seriesFilter = "all";

  try {
    const data = await loadData();
    root.setAttribute("aria-busy", "false");
    paint(root, data);
    return { ok: true, count: data.posts?.length || 0 };
  } catch (err) {
    root.setAttribute("aria-busy", "false");
    paint(root, null, { error: err });
    return { ok: false, reason: String(err?.message || err) };
  }
}
