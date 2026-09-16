/**
 * Research library view — books + papers with market filters and strategy badges.
 * Data: public/data/research-library.json (original summaries only).
 */
import { escapeHtml } from "./glossary.js";
import { t, getLang } from "./i18n.js";

const DATA_URL = "./data/research-library.json";
const DEFAULT_BOOK_COVER = "./covers/placeholder-book.svg";
const DEFAULT_PAPER_COVER = "./covers/placeholder-paper.svg";
const DEFAULT_PODCAST_COVER = "./covers/placeholder-podcast.svg";

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
  if (type === "paper") return t("researchTypePaper");
  if (type === "podcast") return t("researchTypePodcast");
  return t("researchTypeBook");
}

function shelfLabel(shelf, meta = {}) {
  if (!shelf) return t("researchShelfAdjacent");
  const labels = meta?.shelfLabels?.[shelf];
  if (labels && typeof labels === "object") {
    return pickLocalized(labels, shelf);
  }
  const key = {
    core_investing: "researchShelfCoreInvesting",
    value_investing: "researchShelfValueInvesting",
    business_management: "researchShelfBusiness",
    life_partner_wisdom: "researchShelfLifePartner",
    options: "researchShelfOptions",
    recent_reads: "researchShelfRecentReads",
    fi_concepts: "researchShelfFiConcepts",
    money_values: "researchShelfMoneyValues",
    investing_basics: "researchShelfInvestingBasics",
    asset_allocation: "researchShelfAssetAllocation",
    financials: "researchShelfFinancials",
    market_analysis: "researchShelfMarketAnalysis",
    econ_analysis: "researchShelfEconAnalysis",
    psych_randomness: "researchShelfPsych",
    biographies: "researchShelfBiographies",
    adjacent: "researchShelfAdjacent",
  }[shelf];
  return key ? t(key) : shelf;
}

function shelfOrder(meta = {}) {
  const fromMeta = Array.isArray(meta.shelves) ? meta.shelves : null;
  return fromMeta || [
    "core_investing",
    "value_investing",
    "business_management",
    "life_partner_wisdom",
    "options",
    "recent_reads",
    "fi_concepts",
    "money_values",
    "investing_basics",
    "asset_allocation",
    "financials",
    "market_analysis",
    "econ_analysis",
    "psych_randomness",
    "biographies",
    "adjacent",
  ];
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
  if (item.type === "podcast") {
    return meta?.defaultCoverPodcast || DEFAULT_PODCAST_COVER;
  }
  return meta?.defaultCoverBook || DEFAULT_BOOK_COVER;
}

function coverFallback(item, meta) {
  if (item.coverFallback) return item.coverFallback;
  if (item.type === "paper") {
    return meta?.defaultCoverPaper || DEFAULT_PAPER_COVER;
  }
  if (item.type === "podcast") {
    return meta?.defaultCoverPodcast || DEFAULT_PODCAST_COVER;
  }
  return meta?.defaultCoverBook || DEFAULT_BOOK_COVER;
}

function itemPlainTakeaways(item) {
  const loc = item?.plainTakeawaysLocalized;
  if (loc && typeof loc === "object") {
    const lang = getLang();
    const arr = loc[lang] || loc["zh-Hant"] || loc.en;
    if (Array.isArray(arr) && arr.length) return arr;
  }
  if (Array.isArray(item?.plainTakeaways) && item.plainTakeaways.length) {
    return item.plainTakeaways;
  }
  return [];
}

/** Human-readable takeaways only — never dump raw formulas[] / mathGateNote. */
function takeawayList(item) {
  const bullets = itemPlainTakeaways(item);
  if (!bullets.length) return "";
  return `<div class="rl-block">
    <h4 class="rl-h">${escapeHtml(t("researchTakeaways"))}</h4>
    <ul class="rl-takeaways">${bullets
      .map((b) => `<li>${escapeHtml(b)}</li>`)
      .join("")}</ul>
  </div>`;
}

function sourceLinks(sources) {
  if (!Array.isArray(sources) || !sources.length) return "";
  // Hide internal repo paths (scripts/study/...) from user-facing cards
  const publicSources = sources.filter((s) => /^https?:\/\//i.test(String(s)));
  if (!publicSources.length) return "";
  const links = publicSources
    .map((s) => `<a href="${escapeHtml(s)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s)}</a>`)
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
    <article class="rl-card" data-rl-id="${escapeHtml(item.id)}" data-rl-market="${escapeHtml(item.market)}" data-rl-type="${escapeHtml(item.type)}" data-rl-shelf="${escapeHtml(item.shelf || "adjacent")}">
      ${coverBlock(item, meta)}
      <div class="rl-card-body">
        <header class="rl-card-head">
          <div class="rl-badges">
            <span class="rl-badge rl-type">${escapeHtml(typeLabel(item.type))}</span>
            <span class="rl-badge rl-shelf">${escapeHtml(shelfLabel(item.shelf, meta))}</span>
            <span class="rl-badge rl-market">${escapeHtml(marketLabel(item.market))}</span>
            <span class="rl-badge ${STATUS_CLASS[status] || ""}">${escapeHtml(statusLabel(status))}</span>
            <span class="rl-badge ${CANDIDATE_CLASS[cand] || ""}" title="${escapeHtml(t("researchStrategy"))}">${escapeHtml(candidateLabel(cand))}</span>
          </div>
          <h3 class="rl-title">${escapeHtml(itemTitle(item))}</h3>
          <p class="rl-meta">${escapeHtml(authors)} · ${escapeHtml(year)}</p>
        </header>
        <p class="rl-summary">${escapeHtml(itemSummary(item))}</p>
        ${takeawayList(item)}
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

function filterItems(items, { market, type, shelf }) {
  return items.filter((it) => {
    if (type && type !== "all" && it.type !== type) return false;
    if (shelf && shelf !== "all" && (it.shelf || "adjacent") !== shelf) return false;
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
  const podcasts = filtered.filter((i) => i.type === "podcast");
  const meta = data?.meta || {};
  const order = shelfOrder(meta);
  const metaNote = meta.mathGate
    ? `<p class="rl-meta-line">${escapeHtml(mathGateBannerText(data))}</p>`
    : "";

  const shelfChips = [
    `<button type="button" class="rl-filter rl-shelf-chip${state.shelf === "all" ? " is-active" : ""}" data-rl-shelf="all">${escapeHtml(t("researchFilterAll"))}</button>`,
    ...order.map((s) => {
      const count = items.filter((it) => (it.shelf || "adjacent") === s).length;
      if (!count) return "";
      return `<button type="button" class="rl-filter rl-shelf-chip${state.shelf === s ? " is-active" : ""}" data-rl-shelf="${escapeHtml(s)}">${escapeHtml(shelfLabel(s, meta))} <span class="rl-chip-count">${count}</span></button>`;
    }),
  ].join("");

  function renderGrouped(list, ariaLabel) {
    if (!list.length) return `<p class="rl-empty">${escapeHtml(t("researchEmpty"))}</p>`;
    // When a specific shelf is selected, flat grid; otherwise section headers by shelf
    if (state.shelf && state.shelf !== "all") {
      return `<div class="rl-grid">${list.map((b) => renderResearchCard(b, meta)).join("")}</div>`;
    }
    const shelvesInList = order.filter((s) => list.some((it) => (it.shelf || "adjacent") === s));
    return shelvesInList
      .map((s) => {
        const group = list.filter((it) => (it.shelf || "adjacent") === s);
        return `<section class="rl-shelf-group" data-shelf="${escapeHtml(s)}" aria-label="${escapeHtml(shelfLabel(s, meta))}">
          <h4 class="rl-shelf-title">${escapeHtml(shelfLabel(s, meta))} <span class="rl-list-count">(${group.length})</span></h4>
          <div class="rl-grid">${group.map((b) => renderResearchCard(b, meta)).join("")}</div>
        </section>`;
      })
      .join("");
  }

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
        <button type="button" class="rl-filter${state.type === "podcast" ? " is-active" : ""}" data-rl-type="podcast">${escapeHtml(t("researchTypePodcast"))}</button>
      </div>
    </div>
    <div class="rl-shelf-scroll" role="group" aria-label="${escapeHtml(t("researchShelfFilters"))}">
      ${shelfChips}
    </div>
    ${metaNote}
    <p class="rl-counts">${escapeHtml(t("researchCounts", { books: books.length, papers: papers.length, podcasts: podcasts.length, total: filtered.length }))}</p>
    <div class="rl-lists">
      <section class="rl-list" aria-label="${escapeHtml(t("researchTypeBook"))}">
        <h3 class="rl-list-title">${escapeHtml(t("researchTypeBook"))} <span class="rl-list-count">(${books.length})</span></h3>
        ${renderGrouped(books, t("researchTypeBook"))}
      </section>
      <section class="rl-list" aria-label="${escapeHtml(t("researchTypePaper"))}">
        <h3 class="rl-list-title">${escapeHtml(t("researchTypePaper"))} <span class="rl-list-count">(${papers.length})</span></h3>
        <div class="rl-grid">
          ${papers.length ? papers.map((p) => renderResearchCard(p, meta)).join("") : `<p class="rl-empty">${escapeHtml(t("researchEmpty"))}</p>`}
        </div>
      </section>
      <section class="rl-list" aria-label="${escapeHtml(t("researchTypePodcast"))}">
        <h3 class="rl-list-title">${escapeHtml(t("researchTypePodcast"))} <span class="rl-list-count">(${podcasts.length})</span></h3>
        <div class="rl-grid">
          ${podcasts.length ? podcasts.map((p) => renderResearchCard(p, meta)).join("") : `<p class="rl-empty">${escapeHtml(t("researchEmpty"))}</p>`}
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
  root.querySelectorAll("[data-rl-shelf]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.shelf = btn.dataset.rlShelf;
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
    const state = { market: "all", type: "all", shelf: "all" };
    paint(root, data, state);
    return { ok: true, data };
  } catch (err) {
    root.innerHTML = `<p class="rl-error">${escapeHtml(t("researchLoadError", { msg: err.message }))}</p>`;
    return { ok: false, error: err };
  }
}
