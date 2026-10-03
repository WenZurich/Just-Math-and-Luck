/**
 * Berkshire shareholder letters — official links plus short notes.
 * Never stores letter text.
 */
import { escapeHtml } from "./glossary.js";
import { t } from "./i18n.js";

const DATA_URL = "./data/berkshire-letters.json";

const CATS = [
  { id: "early", labelKey: "lettersCatEarly" },
  { id: "nineties", labelKey: "lettersCat90" },
  { id: "twothousands", labelKey: "lettersCat00" },
  { id: "tens", labelKey: "lettersCat10" },
  { id: "recent", labelKey: "lettersCat20" },
  { id: "special", labelKey: "lettersCatSpecial" },
];

const CAT_ALIASES = {
  menu: "menu",
  early: "early",
  "1977": "early",
  nineties: "nineties",
  "1990s": "nineties",
  twothousands: "twothousands",
  "2000s": "twothousands",
  tens: "tens",
  "2010s": "tens",
  recent: "recent",
  "2020s": "recent",
  special: "special",
};

let data = null;
let active = "menu";
let rootEl = null;

export function normalizeLettersCategory(raw) {
  if (raw == null || raw === "") return "menu";
  const s = String(raw).trim();
  const key = s.toLowerCase();
  if (CAT_ALIASES[key]) return CAT_ALIASES[key];
  if (/^\d{4}$/.test(key)) {
    const y = Number(key);
    if (y >= 1977 && y <= 1989) return "early";
    if (y >= 1990 && y <= 1999) return "nineties";
    if (y >= 2000 && y <= 2009) return "twothousands";
    if (y >= 2010 && y <= 2019) return "tens";
    if (y >= 2020 && y <= 2025) return "recent";
  }
  return "menu";
}

function hashFor(catId) {
  if (!catId || catId === "menu") return "#letters";
  return `#letters/${catId}`;
}

export function setLettersCategory(catId, { syncUrl = true } = {}) {
  active = normalizeLettersCategory(catId);
  if (syncUrl) {
    const next = hashFor(active);
    if (location.hash !== next) history.replaceState(null, "", next);
  }
  paint();
}

function itemTitle(item) {
  if (item.title) return item.title;
  return String(item.year);
}

function card(item) {
  const read = item.access === "read";
  const badge = read ? t("lettersReadBadge") : t("lettersLinkBadge");
  const badgeClass = read ? "pc-badge-featured" : "pc-badge-stub";
  const bullets = read
    ? `<ul class="lt-points">${item.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
    : `<p class="lt-linkonly">${escapeHtml(t("lettersLinkBadge"))}</p>`;
  return `
    <article class="pc-card" id="letter-${item.year}${item.access === "link-only" ? "-special" : ""}">
      <header class="pc-card-head">
        <div class="pc-card-identity">
          <span class="pc-card-badge ${badgeClass}">${escapeHtml(badge)}</span>
        </div>
        <h3 class="pc-card-title">${escapeHtml(itemTitle(item))}</h3>
        <p class="pc-card-handle">${escapeHtml(t("lettersAuthor"))}：${escapeHtml(item.author)}</p>
      </header>
      <div class="lt-body">
        ${bullets}
        <a class="lt-official" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("lettersOpen"))}</a>
      </div>
    </article>`;
}

function menuHtml() {
  const counts = {};
  for (const item of data?.letters || []) {
    counts[item.category] = (counts[item.category] || 0) + 1;
  }
  const cards = CATS.map((c) => {
    const n = counts[c.id] || 0;
    return `
      <button type="button" class="pc-menu-card" data-letter-cat="${c.id}">
        <span class="pc-menu-title">${escapeHtml(t(c.labelKey))}</span>
        <span class="pc-menu-blurb">${n}</span>
        <span class="pc-menu-cta">${escapeHtml(t("lettersOpen"))}</span>
      </button>`;
  }).join("");
  return `
    <div class="pc-menu" role="list">
      <p class="pc-menu-lead">${escapeHtml(t("lettersMenuLead"))}</p>
      <div class="pc-menu-grid">${cards}</div>
    </div>`;
}

function detailHtml() {
  const items = (data?.letters || []).filter((x) => x.category === active);
  const cat = CATS.find((c) => c.id === active);
  return `
    <button type="button" class="lt-back" data-letter-cat="menu">${escapeHtml(t("lettersBack"))}</button>
    <h3 class="lt-cat-title">${escapeHtml(t(cat?.labelKey || "lettersTitle"))}</h3>
    <div class="pc-list">${items.map(card).join("")}</div>`;
}

function paint() {
  const host = rootEl?.querySelector("#lt-host");
  if (!host || !data) return;
  host.innerHTML = active === "menu" ? menuHtml() : detailHtml();
  host.querySelectorAll("[data-letter-cat]").forEach((btn) => {
    btn.addEventListener("click", () => setLettersCategory(btn.dataset.letterCat));
  });
}

export function renderLettersSection() {
  return `
    <section class="section letters-section" aria-label="${escapeHtml(t("lettersTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${escapeHtml(t("lettersTitle"))}</h2>
        <p class="view-lead">${escapeHtml(t("lettersLead"))}</p>
      </header>
      <p class="pc-disclaimer" role="note">${escapeHtml(t("lettersDisclaimer"))}</p>
      <div id="lt-root"><div id="lt-host"></div></div>
    </section>`;
}

export async function initLetters(selector, { category = "menu", syncUrl = false } = {}) {
  rootEl = document.querySelector(selector);
  if (!rootEl) return;
  if (!data) {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`letters HTTP ${res.status}`);
    data = await res.json();
  }
  active = normalizeLettersCategory(category);
  if (syncUrl) {
    const next = hashFor(active);
    if (location.hash !== next) history.replaceState(null, "", next);
  }
  paint();
}
