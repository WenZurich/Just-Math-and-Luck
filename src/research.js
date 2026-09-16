/**
 * Research library view — books + papers with market filters and strategy badges.
 * Data: public/data/research-library.json (original summaries only).
 */
import { escapeHtml } from "./glossary.js";
import { t, getLang } from "./i18n.js";

const DATA_URL = "./data/research-library.json";
const DEFAULT_BOOK_COVER = "./covers/placeholder-book.svg";
const DEFAULT_PAPER_COVER = "./covers/placeholder-paper.svg";

const STATUS_CLASS = {
  candidate: "rl-status-candidate",
  deferred: "rl-status-deferred",
  adopted: "rl-status-adopted",
  rejected: "rl-status-rejected",
};

const CANDIDATE_CLASS = {
  yes: "rl-cand-yes",
  no: "rl-cand-no",
  watch: "rl-cand-watch",
};

function statusLabel(status) {
  const map = {
    candidate: t("researchStatusCandidate"),
    deferred: t("researchStatusDeferred"),
    adopted: t("researchStatusAdopted"),
    rejected: t("researchStatusRejected"),
  };
  return map[status] || status;
}

function candidateLabel(c) {
  const map = {
    yes: t("researchCandYes"),
    no: t("researchCandNo"),
    watch: t("researchCandWatch"),
  };
  return map[c] || c;
}

function marketLabel(m) {
  if (m === "US") return t("usStock");
  if (m === "TW") return t("twStock");
  if (m === "BOTH") return t("researchMarketBoth");
  return m;
}

function typeLabel(type) {
  return type === "paper" ? t("researchTypePaper") : t("researchTypeBook");
}

function pickLocalized(map, fallback) {
  if (!map || typeof map !== "object") return fallback;
  const lang = getLang();
  return map[lang] || map.en || map["zh-Hant"] || fallback;
}

function itemTitle(item) {
  return pickLocalized(item.titleLocalized, item.title) || "";
}

function itemSummary(item) {
  return pickLocalized(item.summaryLocalized, item.summary) || "";
}

function coverSrc(item, meta) {
  if (item.coverUrl) return item.coverUrl;
  if (item.cover) return item.cover;
  if (item.type === "paper") {
    return meta?.defaultCoverPaper || DEFAULT_PAPER_COVER;
  }
  return meta?.defaultCoverBook || DEFAULT_BOOK_COVER;
}

function coverFallback(item, meta) {
  if (item.coverFallback) return item.coverFallback;
  if (item.type === "paper") {
    return meta?.defaultCoverPaper || DEFAULT_PAPER_COVER;
  }
  return meta?.defaultCoverBook || DEFAULT_BOOK_COVER;
}

function formulaList(formulas) {
  if (!Array.isArray(formulas) || !formulas.length) {
    return `<p class="rl-muted">${escapeHtml(t("researchNoFormulas"))}</p>`;
  }
  return `<ul class="rl-formulas">${formulas
    .map((f) => `<li><code>${escapeHtml(f)}</code></li>`)
    .join("")}</ul>`;
}

function sourceLinks(sources) {
  if (!Array.isArray(sources) || !sources.length) return "";
  const links = sources
    .map((s) => {
      const isUrl = /^https?:\/\//i.test(s);
      if (isUrl) {
        return `<a href="${escapeHtml(s)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s)}</a>`;
      }
      return `<span>${escapeHtml(s)}</span>`;
    })
    .join(" · ");
  return `<div class="rl-sources"><span class="rl-k">${escapeHtml(t("researchSources"))}</span> ${links}</div>`;
}

function coverBlock(item, meta) {
  const src = coverSrc(item, meta);
  const fb = coverFallback(item, meta);
  const alt = itemTitle(item) || typeLabel(item.type);
  return `
    <div class="rl-cover-wrap">
      <img
        class="rl-cover"
        src="${escapeHtml(src)}"
        alt="${escapeHtml(alt)}"
        loading="lazy"
        decoding="async"
        data-rl-fallback="${escapeHtml(fb)}"
      />
    </div>`;
}

function bindCoverFallbacks(root) {
  root.querySelectorAll("img.rl-cover[data-rl-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const fb = img.dataset.rlFallback;
      if (fb && img.getAttribute("src") !== fb) {
        img.setAttribute("src", fb);
      } else {
        img.classList.add("is-broken");
      }
    });
  });
}

export function renderResearchCard(item, meta = {}) {
  const status = item.status || "candidate";
  const cand = item.strategyCandidate || "watch";
  const year = item.year != null ? String(item.year) : "—";
  const authors = (item.authors || []).join(", ") || "—";
  return `
    <article class="rl-card" data-rl-id="${escapeHtml(item.id)}" data-rl-market="${escapeHtml(item.market)}" data-rl-type="${escapeHtml(item.type)}">
      ${coverBlock(item, meta)}
      <div class="rl-card-body">
        <header class="rl-card-head">
          <div class="rl-badges">
            <span class="rl-badge rl-type">${escapeHtml(typeLabel(item.type))}</span>
            <span class="rl-badge rl-market">${escapeHtml(marketLabel(item.market))}</span>
            <span class="rl-badge ${STATUS_CLASS[status] || ""}">${escapeHtml(statusLabel(status))}</span>
            <span class="rl-badge ${CANDIDATE_CLASS[cand] || ""}" title="${escapeHtml(t("researchStrategy"))}">${escapeHtml(candidateLabel(cand))}</span>
          </div>
          <h3 class="rl-title">${escapeHtml(itemTitle(item))}</h3>
          <p class="rl-meta">${escapeHtml(authors)} · ${escapeHtml(year)}</p>
        </header>
        <p class="rl-summary">${escapeHtml(itemSummary(item))}</p>
        <div class="rl-block">
          <h4 class="rl-h">${escapeHtml(t("researchFormulas"))}</h4>
          ${formulaList(item.formulas)}
        </div>
        <div class="rl-block">
          <h4 class="rl-h">${escapeHtml(t("researchMathGate"))}</h4>
          <p class="rl-gate-note">${escapeHtml(item.mathGateNote || t("researchMathGateDefault"))}</p>
        </div>
        ${sourceLinks(item.sources)}
      </div>
    </article>`;
}

export function renderResearchSection(placeholder = true) {
  return `
    <section class="section research-section" aria-labelledby="research-heading">
      <header class="view-header view-header-tight">
        <h2 class="view-title" id="research-heading">${escapeHtml(t("researchTitle"))}</h2>
        <p class="view-lead view-lead-tight">${escapeHtml(t("researchLead"))}</p>
      </header>
      <p class="rl-banner" role="note">${escapeHtml(t("researchMathGateBanner"))}</p>
      <div id="rl-root" class="rl-root" data-placeholder="${placeholder ? "1" : "0"}">
        <p class="rl-loading">${escapeHtml(t("loading"))}</p>
      </div>
    </section>`;
}

function filterItems(items, { market, type }) {
  return items.filter((it) => {
    if (type && type !== "all" && it.type !== type) return false;
    if (!market || market === "all") return true;
    if (market === "US") return it.market === "US" || it.market === "BOTH";
    if (market === "TW") return it.market === "TW" || it.market === "BOTH";
    return true;
  });
}

function mathGateBannerText(data) {
  const loc = data?.meta?.mathGateLocalized;
  if (loc && typeof loc === "object") {
    return pickLocalized(loc, data?.meta?.mathGate) || t("researchMathGateBanner");
  }
  return data?.meta?.mathGate || t("researchMathGateBanner");
}

function paint(root, data, state) {
  const items = Array.isArray(data?.items) ? data.items : [];
  const filtered = filterItems(items, state);
  const books = filtered.filter((i) => i.type === "book");
  const papers = filtered.filter((i) => i.type === "paper");
  const meta = data?.meta || {};
  const metaNote = meta.mathGate
    ? `<p class="rl-meta-line">${escapeHtml(mathGateBannerText(data))}</p>`
    : "";

  root.innerHTML = `
    <div class="rl-toolbar" role="toolbar" aria-label="${escapeHtml(t("researchFilters"))}">
      <div class="rl-filter-group" role="group" aria-label="${escapeHtml(t("market"))}">
        <button type="button" class="rl-filter${state.market === "all" ? " is-active" : ""}" data-rl-market="all">${escapeHtml(t("researchFilterAll"))}</button>
        <button type="button" class="rl-filter${state.market === "US" ? " is-active" : ""}" data-rl-market="US">${escapeHtml(t("usStock"))}</button>
        <button type="button" class="rl-filter${state.market === "TW" ? " is-active" : ""}" data-rl-market="TW">${escapeHtml(t("twStock"))}</button>
      </div>
      <div class="rl-filter-group" role="group" aria-label="${escapeHtml(t("researchType"))}">
        <button type="button" class="rl-filter${state.type === "all" ? " is-active" : ""}" data-rl-type="all">${escapeHtml(t("researchFilterAll"))}</button>
        <button type="button" class="rl-filter${state.type === "book" ? " is-active" : ""}" data-rl-type="book">${escapeHtml(t("researchTypeBook"))}</button>
        <button type="button" class="rl-filter${state.type === "paper" ? " is-active" : ""}" data-rl-type="paper">${escapeHtml(t("researchTypePaper"))}</button>
      </div>
    </div>
    ${metaNote}
    <p class="rl-counts">${escapeHtml(t("researchCounts", { books: books.length, papers: papers.length, total: filtered.length }))}</p>
    <div class="rl-lists">
      <section class="rl-list" aria-label="${escapeHtml(t("researchTypeBook"))}">
        <h3 class="rl-list-title">${escapeHtml(t("researchTypeBook"))} <span class="rl-list-count">(${books.length})</span></h3>
        <div class="rl-grid">
          ${books.length ? books.map((b) => renderResearchCard(b, meta)).join("") : `<p class="rl-empty">${escapeHtml(t("researchEmpty"))}</p>`}
        </div>
      </section>
      <section class="rl-list" aria-label="${escapeHtml(t("researchTypePaper"))}">
        <h3 class="rl-list-title">${escapeHtml(t("researchTypePaper"))} <span class="rl-list-count">(${papers.length})</span></h3>
        <div class="rl-grid">
          ${papers.length ? papers.map((p) => renderResearchCard(p, meta)).join("") : `<p class="rl-empty">${escapeHtml(t("researchEmpty"))}</p>`}
        </div>
      </section>
    </div>`;

  bindCoverFallbacks(root);

  root.querySelectorAll("[data-rl-market]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.market = btn.dataset.rlMarket;
      paint(root, data, state);
    });
  });
  root.querySelectorAll("[data-rl-type]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.type = btn.dataset.rlType;
      paint(root, data, state);
    });
  });
}

export async function loadResearchLibrary(url = DATA_URL) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function initResearch(selector = "#rl-root", url = DATA_URL) {
  const root = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!root) return { ok: false, reason: "missing-root" };
  try {
    const data = await loadResearchLibrary(url);
    const state = { market: "all", type: "all" };
    paint(root, data, state);
    return { ok: true, data };
  } catch (err) {
    root.innerHTML = `<p class="rl-error">${escapeHtml(t("researchLoadError", { msg: err.message }))}</p>`;
    return { ok: false, error: err };
  }
}
