/**
 * US market-moving macro calendar strip (under 「熱門」).
 * Data: public/data/us-macro-calendar.json  — refresh via npm run fetch-us-macro
 */
import { t, numberLocale } from "./i18n.js";
import { escapeHtml } from "./glossary.js";

const DATA_URL = "./data/us-macro-calendar.json";
const REFRESH_MS = 15 * 60 * 1000; // near-real-time while page open
const STALE_MS = 36 * 60 * 60 * 1000; // honest stale note if asOf older than ~36h

let refreshTimer = null;

function eventLabel(ev) {
  const key = ev?.eventKey ? `macroEvent_${ev.eventKey}` : null;
  if (key) {
    const localized = t(key, "");
    if (localized && localized !== key) return localized;
  }
  return ev?.shortName || ev?.eventName || "—";
}

function ymdInTz(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const get = (typ) => parts.find((p) => p.type === typ)?.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function fmtChipWhen(iso, timeZone) {
  try {
    const d = new Date(iso);
    const datePart = d.toLocaleDateString(numberLocale(), {
      timeZone,
      month: "numeric",
      day: "numeric",
      weekday: "short",
    });
    const timePart = d.toLocaleTimeString(numberLocale(), {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return { datePart, timePart };
  } catch {
    return { datePart: "—", timePart: "" };
  }
}

function fmtAsOfShort(iso) {
  try {
    return new Date(iso).toLocaleString(numberLocale(), {
      timeZone: "Asia/Taipei",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  } catch {
    return iso || "—";
  }
}

function pickHighlight(events, todayEt) {
  let nextId = null;
  for (const ev of events) {
    if (ev.dayEt >= todayEt) {
      nextId = ev.id;
      break;
    }
  }
  return nextId;
}

function renderChip(ev, { todayEt, nextId, timeZone }) {
  const label = escapeHtml(eventLabel(ev));
  const { datePart, timePart } = fmtChipWhen(ev.scheduledAt, timeZone);
  const isToday = ev.dayEt === todayEt;
  const isNext = ev.id === nextId;
  const isPast = ev.dayEt < todayEt;
  const classes = [
    "macro-chip",
    ev.highImpact || ev.importance === "high" ? "macro-chip--high" : "",
    isToday ? "macro-chip--today" : "",
    isNext && !isToday ? "macro-chip--next" : "",
    isPast ? "macro-chip--past" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const badges = [];
  if (isToday) badges.push(`<span class="macro-chip-tag">${escapeHtml(t("macroToday"))}</span>`);
  else if (isNext) badges.push(`<span class="macro-chip-tag macro-chip-tag--next">${escapeHtml(t("macroNext"))}</span>`);
  if (ev.highImpact || ev.importance === "high") {
    badges.push(`<span class="macro-chip-tag macro-chip-tag--high">${escapeHtml(t("macroHighImpact"))}</span>`);
  }

  const titleBits = [ev.eventName, ev.periodLabel, `${ev.dayEt} ${timePart} ET`]
    .filter(Boolean)
    .join(" · ");

  return `
    <article class="${classes}" title="${escapeHtml(titleBits)}" data-event-id="${escapeHtml(ev.id)}">
      <div class="macro-chip-when">
        <span class="macro-chip-date">${escapeHtml(datePart)}</span>
        <span class="macro-chip-time">${escapeHtml(timePart)}</span>
      </div>
      <div class="macro-chip-body">
        <span class="macro-chip-name">${label}</span>
        ${badges.length ? `<span class="macro-chip-tags">${badges.join("")}</span>` : ""}
      </div>
    </article>`;
}

function paint(root, data) {
  if (!root) return;
  const timeZone = data?.timezone || "America/New_York";
  const todayEt = ymdInTz(new Date(), timeZone);
  const events = Array.isArray(data?.events) ? data.events : [];
  const nextId = pickHighlight(events, todayEt);

  const asOf = data?.asOf || null;
  const ageMs = asOf ? Date.now() - Date.parse(asOf) : NaN;
  const stale =
    Boolean(data?.stale) ||
    (!Number.isNaN(ageMs) && ageMs > STALE_MS);

  let meta = `${escapeHtml(t("macroTzEt"))}`;
  if (asOf) {
    meta += ` · ${escapeHtml(t("macroAsOf"))} ${escapeHtml(fmtAsOfShort(asOf))}`;
  }
  if (stale) {
    meta += ` · ${escapeHtml(t("macroStale"))}`;
  }

  if (!events.length) {
    root.innerHTML = `
      <div class="macro-strip" role="region" aria-label="${escapeHtml(t("macroTitle"))}">
        <div class="macro-strip-head">
          <span class="macro-strip-label">${escapeHtml(t("macroTitle"))}</span>
          <span class="macro-strip-meta">${meta}</span>
        </div>
        <p class="macro-strip-empty">${escapeHtml(t("macroEmpty"))}</p>
      </div>`;
    return;
  }

  const chips = events.map((ev) => renderChip(ev, { todayEt, nextId, timeZone })).join("");

  root.innerHTML = `
    <div class="macro-strip" role="region" aria-label="${escapeHtml(t("macroTitle"))}">
      <div class="macro-strip-head">
        <span class="macro-strip-label">${escapeHtml(t("macroTitle"))}</span>
        <span class="macro-strip-meta">${meta}</span>
      </div>
      <div class="macro-strip-scroll" tabindex="0">
        <div class="macro-strip-chips">
          ${chips}
        </div>
      </div>
    </div>`;
}

export function renderUsMacroStripSlot() {
  return `<div id="us-macro-strip" class="us-macro-strip-host" aria-live="polite"></div>`;
}

async function loadMacro(bust = false) {
  const url = bust ? `${DATA_URL}?t=${Date.now()}` : DATA_URL;
  const res = await fetch(url, { cache: bust ? "no-store" : "default" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function initUsMacroStrip(selector = "#us-macro-strip") {
  const root =
    typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!root) return { ok: false };

  const paintSafe = async (bust) => {
    try {
      const data = await loadMacro(bust);
      paint(root, data);
      return { ok: true, data };
    } catch (err) {
      root.innerHTML = `
        <div class="macro-strip macro-strip--error" role="status">
          <div class="macro-strip-head">
            <span class="macro-strip-label">${escapeHtml(t("macroTitle"))}</span>
          </div>
          <p class="macro-strip-empty">${escapeHtml(
            t("macroLoadError", { msg: err.message || String(err) })
          )}</p>
        </div>`;
      return { ok: false, error: err };
    }
  };

  const first = await paintSafe(false);

  if (refreshTimer) {
    window.clearInterval(refreshTimer);
    refreshTimer = null;
  }
  refreshTimer = window.setInterval(() => {
    void paintSafe(true);
  }, REFRESH_MS);

  return first;
}

/** Re-paint from last fetch is not cached here — remount reloads. */
export function stopUsMacroStripRefresh() {
  if (refreshTimer) {
    window.clearInterval(refreshTimer);
    refreshTimer = null;
  }
}
