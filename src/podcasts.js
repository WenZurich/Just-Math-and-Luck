/**
 * 名人podcast — category menu hub (not one flat undifferentiated page).
 * Taxonomy by host/show; US/TW labeled. Math gate CLOSED — candidate/watch.
 */
import { escapeHtml } from "./glossary.js";
import { t } from "./i18n.js";
import { initGodzilla } from "./godzilla.js";
import { initJensen } from "./jensen.js";
import { gooayeDetailHtml, initGooaye } from "./gooaye.js";

/** Host/show categories from current content only. */
export const PODCAST_CATEGORIES = [
  {
    id: "godzilla",
    titleKey: "godzillaTitle",
    handleKey: "podcastsGodzillaHandle",
    blurbKey: "godzillaLead",
    marketKey: "godzillaUsFocus",
    market: "US",
    featured: true,
  },
  {
    id: "jensen",
    titleKey: "jensenTitle",
    handleKey: "jensenHandle",
    blurbKey: "jensenLead",
    marketKey: "jensenUsFocus",
    market: "US",
    featured: true,
  },
  {
    id: "gooaye",
    titleKey: "podcastsGooayeTitle",
    handleKey: null,
    blurbKey: "podcastsGooayeLead",
    marketKey: "podcastsGooayeMarket",
    market: "TW",
    featured: false,
  },
];

const CAT_ALIASES = {
  godzilla: "godzilla",
  "godzilla-playbook": "godzilla",
  playbook: "godzilla",
  "哥吉拉": "godzilla",
  "哥吉拉心法": "godzilla",
  jensen: "jensen",
  huang: "jensen",
  "jensen-huang": "jensen",
  nvidia: "jensen",
  "jen-hsun": "jensen",
  etl: "jensen",
  "黃仁勳": "jensen",
  "黄仁勋": "jensen",
  gooaye: "gooaye",
  "股癌": "gooaye",
  menu: "menu",
  all: "menu",
  index: "menu",
  "": "menu",
};

let activeCategory = "menu";
let podcastRootEl = null;

export function normalizePodcastCategory(raw) {
  if (raw == null || raw === "") return "menu";
  const s = String(raw).trim();
  const lower = s.toLowerCase();
  if (CAT_ALIASES[lower]) return CAT_ALIASES[lower];
  if (CAT_ALIASES[s]) return CAT_ALIASES[s];
  if (PODCAST_CATEGORIES.some((c) => c.id === lower)) return lower;
  return "menu";
}

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

function featuredJensenCard() {
  return `
    <article class="pc-card pc-card-featured pc-card-jensen" id="podcast-jensen" data-podcast="jensen">
      <header class="pc-card-head pc-card-head-jensen">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-featured">${escapeHtml(t("podcastsFeatured"))}</span>
          <span class="pc-card-badge pc-badge-us">${escapeHtml(t("jensenUsFocus"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${escapeHtml(t("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${escapeHtml(t("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${escapeHtml(t("jensenTitle"))}</h3>
        <p class="pc-card-handle">${escapeHtml(t("jensenHandle"))}</p>
        <p class="pc-card-blurb">${escapeHtml(t("jensenLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="jh-disclaimer" role="note">${escapeHtml(t("jensenDisclaimer"))}</p>
        <div id="jh-root" class="jh-root"></div>
      </div>
    </article>`;
}


function categoryMenuCards() {
  return PODCAST_CATEGORIES.map((c) => {
    const mktClass = c.market === "TW" ? "pc-badge-tw" : "pc-badge-us";
    const feat = c.featured
      ? `<span class="pc-card-badge pc-badge-featured">${escapeHtml(t("podcastsFeatured"))}</span>`
      : c.id === "gooaye"
        ? `<span class="pc-card-badge pc-badge-library">${escapeHtml(t("gooayeLibraryBadge"))}</span>`
        : `<span class="pc-card-badge pc-badge-stub">${escapeHtml(t("podcastsStubBadge"))}</span>`;
    const handle = c.handleKey
      ? `<p class="pc-menu-handle">${escapeHtml(t(c.handleKey))}</p>`
      : "";
    return `
      <button type="button" class="pc-menu-card" data-pc-cat="${escapeHtml(c.id)}" aria-label="${escapeHtml(t(c.titleKey))}">
        <div class="pc-menu-badges">
          ${feat}
          <span class="pc-card-badge ${mktClass}">${escapeHtml(t(c.marketKey))}</span>
          <span class="pc-card-badge pc-badge-candidate">${escapeHtml(t("godzillaBadgeCandidate"))}</span>
        </div>
        <h3 class="pc-menu-title">${escapeHtml(t(c.titleKey))}</h3>
        ${handle}
        <p class="pc-menu-blurb">${escapeHtml(t(c.blurbKey))}</p>
        <span class="pc-menu-cta">${escapeHtml(t("podcastsOpenCategory"))}</span>
      </button>`;
  }).join("");
}

function tabsHtml(active) {
  const items = [
    { id: "menu", label: t("podcastsCatMenu") },
    ...PODCAST_CATEGORIES.map((c) => ({ id: c.id, label: t(c.titleKey) })),
  ];
  return items
    .map((it) => {
      const on = it.id === active ? " is-active" : "";
      return `<button type="button" class="pc-tab${on}" data-pc-cat="${escapeHtml(it.id)}" role="tab" aria-selected="${it.id === active}">${escapeHtml(it.label)}</button>`;
    })
    .join("");
}

function detailHtml(catId) {
  if (catId === "godzilla") return featuredGodzillaCard();
  if (catId === "jensen") return featuredJensenCard();
  if (catId === "gooaye") return gooayeDetailHtml();
  return `
    <div class="pc-menu" role="list" aria-label="${escapeHtml(t("podcastsCatMenu"))}">
      <p class="pc-menu-lead">${escapeHtml(t("podcastsMenuLead"))}</p>
      <div class="pc-menu-grid">${categoryMenuCards()}</div>
    </div>`;
}

function hashForCategory(catId) {
  if (!catId || catId === "menu") return "#podcasts";
  return `#podcasts/${catId}`;
}

function syncHash(catId) {
  const next = hashForCategory(catId);
  if (location.hash !== next) {
    history.replaceState(null, "", next);
  }
}

function paintPodcasts(root, catId, { syncUrl = true } = {}) {
  const cat = normalizePodcastCategory(catId);
  activeCategory = cat;
  if (syncUrl) syncHash(cat);

  root.innerHTML = `
    <div class="pc-tabs-wrap">
      <div class="pc-tabs" role="tablist" aria-label="${escapeHtml(t("podcastsCategories"))}">
        ${tabsHtml(cat)}
      </div>
    </div>
    <div class="pc-panel" role="tabpanel" data-pc-panel="${escapeHtml(cat)}">
      ${detailHtml(cat)}
    </div>`;

  root.querySelectorAll("[data-pc-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      paintPodcasts(root, btn.dataset.pcCat, { syncUrl: true });
    });
  });

  if (cat === "godzilla") initGodzilla("#gz-root");
  if (cat === "jensen") initJensen("#jh-root");
  if (cat === "gooaye") initGooaye("#gy-root");
}

export function renderPodcastsSection() {
  return `
    <section class="section podcasts-section" aria-label="${escapeHtml(t("podcastsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${escapeHtml(t("podcastsTitle"))}</h2>
        <p class="view-lead">${escapeHtml(t("podcastsLead"))}</p>
      </header>
      <p class="pc-disclaimer" role="note">${escapeHtml(t("podcastsDisclaimer"))}</p>
      <div id="pc-root" class="pc-root"></div>
    </section>`;
}

export function setPodcastCategory(raw, { syncUrl = true } = {}) {
  if (!podcastRootEl) return { ok: false, reason: "missing-root" };
  paintPodcasts(podcastRootEl, raw, { syncUrl });
  return { ok: true, category: activeCategory };
}

export function getPodcastCategory() {
  return activeCategory;
}

export function initPodcasts(selector = "#pc-root", opts = {}) {
  const root =
    typeof selector === "string" ? document.querySelector(selector) : selector;
  const el = root || document.querySelector("#pc-root");
  if (!el) return { ok: false, reason: "missing-root" };
  podcastRootEl = el;
  const initial = normalizePodcastCategory(opts.category ?? "menu");
  paintPodcasts(el, initial, { syncUrl: opts.syncUrl !== false });
  return { ok: true, category: activeCategory };
}
