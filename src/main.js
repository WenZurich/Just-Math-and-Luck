import "./style.css";
import "./danmaku.css";
import "./comments.css";
import "./chat.css";
import "./social-digest.css";
import config from "./config.js";
import { term, escapeHtml } from "./glossary.js";
import {
  t,
  applyDocumentLang,
  numberLocale,
  renderLangSwitcher,
  bindLangSwitcher,
  onLangChange,
} from "./i18n.js";
import {
  renderPaperSection,
  bindPaperTabs,
  loadPaperPortfolio,
} from "./paper.js";
import { mountAllTickerComments, initSiteGiscus } from "./comments.js";
import { mountChatRoom } from "./chat.js";
import { bindDanmakuToggles } from "./danmaku.js";
import { initSocialDigest, loadSocialDigest } from "./social-digest.js";
import "./strategies.css";
import {
  renderStrategiesSection,
  initStrategies,
} from "./strategies.js";
import { renderLogicSection, renderRegimeStrip } from "./logic.js";

const DATA_URL = "./data/latest.json";

/** Taiwan convention: 紅漲綠跌 */
function pctClass(n) {
  if (n == null || Number.isNaN(n)) return "flat";
  if (n > 0) return "up";
  if (n < 0) return "down";
  return "flat";
}

function fmtPct(n, digits = 2) {
  if (n == null || Number.isNaN(n)) return "—";
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(digits)}%`;
}

function fmtNum(n, digits = 2) {
  if (n == null || Number.isNaN(n)) return "—";
  return Number(n).toLocaleString(numberLocale(), {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function fmtPrice(n, currency) {
  if (n == null || Number.isNaN(n)) return "—";
  const digits = currency === "TWD" && n >= 100 ? 0 : 2;
  const prefix = currency === "USD" ? "$" : currency === "TWD" ? "NT$" : "";
  return `${prefix}${fmtNum(n, digits)}`;
}

function fmtAsOf(iso) {
  try {
    const d = new Date(iso);
    return (
      d.toLocaleString(numberLocale(), {
        timeZone: "Asia/Taipei",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }) + t("taipei")
    );
  } catch {
    return iso;
  }
}

function smaBadges(stock) {
  const a20 = stock.aboveSma20
    ? `<span class="badge sma-on">${term("sma20", "SMA20")}↑</span>`
    : `<span class="badge sma-off">${term("sma20", "SMA20")}↓</span>`;
  const a50 = stock.aboveSma50
    ? `<span class="badge sma-on">${term("sma50", "SMA50")}↑</span>`
    : `<span class="badge sma-off">${term("sma50", "SMA50")}↓</span>`;
  return a20 + a50;
}

function screenBadges(screens) {
  if (!screens?.length) return "";
  return screens
    .map((s) => {
      const key = String(s);
      if (key === "A") return `<span class="badge screen">${term("screenA", "A")}</span>`;
      if (key === "B") return `<span class="badge screen">${term("screenB", "B")}</span>`;
      if (key === "C") return `<span class="badge screen">${term("screenC", "C")}</span>`;
      if (key === "observe") return `<span class="badge screen">${escapeHtml(t("observe"))}</span>`;
      return `<span class="badge screen">${escapeHtml(key)}</span>`;
    })
    .join("");
}



function renderIndexStrip(indices) {
  const chips = [];

  const pushPct = (key, labelHtml, item) => {
    if (!item) return;
    const incomplete = item.incomplete;
    const val =
      item.value != null
        ? fmtNum(item.value, 2)
        : incomplete
          ? escapeHtml(t("dataIncomplete"))
          : "—";
    const pct =
      item.dayPct != null
        ? `<div class="pct ${pctClass(item.dayPct)}">${fmtPct(item.dayPct)}</div>`
        : "";
    const session =
      item.session === "intraday"
        ? ` · ${term("intraday", t("intraday"))}`
        : "";
    chips.push(`
      <div class="index-chip ${incomplete ? "incomplete" : ""}">
        <div class="label">${labelHtml}${session}</div>
        <div class="value">${val}</div>
        ${pct}
      </div>
    `);
  };

  pushPct("tw", term("taiex", indices.tw?.name || t("taiex")), indices.tw);
  pushPct("otc", term("otc", indices.otc?.name || t("otc")), indices.otc);
  pushPct("spx", term("spx", indices.spx?.name || t("spx")), indices.spx);
  pushPct("nasdaq", term("nasdaq", indices.nasdaq?.name || t("nasdaq")), indices.nasdaq);
  pushPct("sox", term("sox", indices.sox?.name || t("sox")), indices.sox);

  if (indices.usdTwd) {
    const fx = indices.usdTwd;
    const show = fx.taipeiClose ?? fx.yahoo;
    chips.push(`
      <div class="index-chip">
        <div class="label">${term("usdtwd", t("usdtwd"))}</div>
        <div class="value">${fmtNum(show, 3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          ${escapeHtml(t("taipeiClose"))} ${fx.taipeiClose != null ? fmtNum(fx.taipeiClose, 3) : "—"}
          · Yahoo ${fx.yahoo != null ? fmtNum(fx.yahoo, 3) : "—"}
        </div>
      </div>
    `);
  }

  return `<div class="index-strip">${chips.join("")}</div>`;
}

function renderTopCard(stock, rank) {
  const market =
    stock.market === "TW"
      ? term("twStock", t("twStock"))
      : stock.market === "US"
        ? term("usStock", t("usStock"))
        : escapeHtml(stock.market || "");
  const rsLabel =
    stock.rsVsIndexPp != null
      ? `<div class="metric"><div class="m-label">${term("rs", "RS")}</div><div class="m-val ${pctClass(stock.rsVsIndexPp)}">${fmtPct(stock.rsVsIndexPp)}</div></div>`
      : stock.priorClosePct != null
        ? `<div class="metric"><div class="m-label">${term("priorClose", t("priorCloseFull"))}</div><div class="m-val ${pctClass(stock.priorClosePct)}">${fmtPct(stock.priorClosePct)}</div></div>`
        : `<div class="metric"><div class="m-label">${term("rs", "RS")}</div><div class="m-val">—</div></div>`;

  return `
    <article class="pick-card">
      <div class="rank">TOP ${rank}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${escapeHtml(stock.ticker)}</div>
          <div class="name">${escapeHtml(stock.name || "")}</div>
        </div>
        <div class="price-block">
          <div class="price">${fmtPrice(stock.price, stock.currency)}</div>
          <div class="day-pct ${pctClass(stock.dayPct)}">${fmtPct(stock.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${market}</span>
        ${screenBadges(stock.screens)}
        ${smaBadges(stock)}
      </div>
      <div class="metrics">
        ${rsLabel}
        <div class="metric"><div class="m-label">${term("pct5d", t("pct5d"))}</div><div class="m-val ${pctClass(stock.pct5d)}">${fmtPct(stock.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${term("pct1m", t("pct1m"))}</div><div class="m-val ${pctClass(stock.pct1m)}">${fmtPct(stock.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${term("volRatio", t("volRatio"))}</div><div class="m-val">${stock.volRatio != null ? fmtNum(stock.volRatio, 2) + "×" : "—"}</div></div>
      </div>
      ${(stock.business || stock.why || stock.risk) ? `<details class="fold-block card-fold"><summary>${escapeHtml(t("details"))}</summary>
        ${stock.business ? `<p class="card-text"><strong>${escapeHtml(t("business"))}</strong>　${escapeHtml(stock.business)}</p>` : ""}
        ${stock.why ? `<p class="card-text"><strong>${escapeHtml(t("reason"))}</strong>　${escapeHtml(stock.why)}</p>` : ""}
        ${stock.risk ? `<p class="card-text risk"><strong>${escapeHtml(t("risk"))}</strong>　${linkRiskText(stock.risk)}</p>` : ""}
      </details>` : ""}
      <div data-ticker-comments="${escapeHtml(stock.ticker)}" data-market="${escapeHtml(stock.market === 'TW' || String(stock.ticker).endsWith('.TW') ? 'TW' : 'US')}"></div>
    </article>
  `;
}

function linkRiskText(text) {
  let s = escapeHtml(text);
  s = s.replace(/漲停/g, term("limitUp", t("limitUp")));
  s = s.replace(/動能/g, term("momentum", t("momentum")));
  return s;
}

function tableRows(list) {
  return list
    .map((s) => {
      const rsVal = s.rsVsIndexPp ?? s.priorClosePct;
      const rsLabel =
        s.rsVsIndexPp != null
          ? fmtPct(s.rsVsIndexPp)
          : s.priorClosePct != null
            ? fmtPct(s.priorClosePct)
            : "—";
      return `
      <tr>
        <td><span class="ticker">${escapeHtml(s.ticker)}</span></td>
        <td class="name-cell">${escapeHtml(s.name || "")}</td>
        <td class="num">${fmtPrice(s.price, s.currency)}</td>
        <td class="num ${pctClass(s.dayPct)}">${fmtPct(s.dayPct)}</td>
        <td class="num ${pctClass(rsVal)}">${rsLabel}</td>
        <td class="num ${pctClass(s.pct5d)}">${fmtPct(s.pct5d)}</td>
        <td class="num ${pctClass(s.pct1m)}">${fmtPct(s.pct1m)}</td>
        <td class="num">${s.volRatio != null ? fmtNum(s.volRatio, 2) + "×" : "—"}</td>
        <td>${smaBadges(s)}</td>
        <td>${screenBadges(s.screens)}</td>
        <td class="why-cell">${escapeHtml(s.why || "")}</td>
      </tr>`;
    })
    .join("");
}

function mobileCards(list) {
  return list
    .map((s) => {
      const rs =
        s.rsVsIndexPp != null
          ? `<span class="${pctClass(s.rsVsIndexPp)}">${term("rs", "RS")} ${fmtPct(s.rsVsIndexPp)}</span>`
          : s.priorClosePct != null
            ? `<span class="${pctClass(s.priorClosePct)}">${term("priorClose", t("priorClose"))} ${fmtPct(s.priorClosePct)}</span>`
            : "";
      return `
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${escapeHtml(s.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${escapeHtml(s.name || "")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${fmtPrice(s.price, s.currency)}</div>
            <div class="${pctClass(s.dayPct)}" style="font-family:var(--mono);font-weight:600">${fmtPct(s.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${rs}
          <span class="${pctClass(s.pct5d)}">${term("pct5d", "5d")} ${fmtPct(s.pct5d)}</span>
          <span class="${pctClass(s.pct1m)}">${term("pct1m", "1m")} ${fmtPct(s.pct1m)}</span>
          <span>${term("volRatio", t("volRatio"))} ${s.volRatio != null ? fmtNum(s.volRatio, 2) + "×" : "—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${smaBadges(s)}${screenBadges(s.screens)}</div>
        ${s.why ? `<p class="lc-why">${escapeHtml(s.why)}</p>` : ""}
        ${s.risk && s.risk !== "—" ? `<p class="lc-why" style="color:#fbbf24">${escapeHtml(t("risk"))}：${linkRiskText(s.risk)}</p>` : ""}
        <div data-ticker-comments="${escapeHtml(s.ticker)}" data-market="${escapeHtml(String(s.ticker).endsWith('.TW') ? 'TW' : (s.market === 'TW' ? 'TW' : 'US'))}"></div>
      </div>`;
    })
    .join("");
}

function renderListHeaders() {
  return `
    <tr>
      <th>${term("ticker", t("ticker"))}</th>
      <th>${escapeHtml(t("name"))}</th>
      <th>${escapeHtml(t("price"))}</th>
      <th>${term("dayPct", t("dayPct"))}</th>
      <th>${term("rs", "RS")}／${term("priorClose", t("priorClose"))}</th>
      <th>${term("pct5d", t("pct5d"))}</th>
      <th>${term("pct1m", t("pct1m"))}</th>
      <th>${term("volRatio", t("volRatio"))}</th>
      <th>${escapeHtml(t("ma"))}</th>
      <th>${term("screening", t("screening"))}</th>
      <th>${escapeHtml(t("reason"))}</th>
    </tr>`;
}

function renderParity(parity) {
  if (!parity) return "";
  const prem = parity.premiumPct;
  return `
    <section class="section">
      <h2 class="section-title">${term("adr", "ADR")} ${term("parity", t("parity"))}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${term("usStock", t("usStock"))} ${term("adr", "ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${fmtPrice(parity.tsm, "USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${term("adsRatio", t("adsRatio"))}</span>　<strong>${escapeHtml(parity.adsRatio || "—")}</strong></div>
          <div class="row"><span>${term("parity", t("implied"))}</span>　<strong>${parity.impliedUsdTaipeiFx != null ? fmtNum(parity.impliedUsdTaipeiFx, 2) : "—"}</strong></div>
          <div class="row"><span>${term("premium", t("premium"))}</span>　<strong class="${pctClass(prem)}">${fmtPct(prem)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${term("twStock", t("twStock"))}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${fmtPrice(parity.tw2330, "TWD")}</div>
        </div>
        ${parity.note ? `<p class="parity-note">${escapeHtml(parity.note)}</p>` : ""}
      </div>
    </section>
  `;
}

function renderDanmakuLayer() {
  return `<div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>`;
}

function stockMarket(s) {
  if (!s) return "US";
  if (s.market === "TW" || s.market === "US") return s.market;
  return String(s.ticker || "").toUpperCase().endsWith(".TW") ? "TW" : "US";
}


function lobbyTicker(market) {
  return market === "TW" ? "__TW__" : "__US__";
}

function renderTop5ByMarket(list, marketLabel) {
  if (!list.length) {
    return `<div class="empty-state">${escapeHtml(t("emptyTop", { market: marketLabel }))}</div>`;
  }
  return `<div class="top5-grid">${list
    .map((s, i) => renderTopCard(s, i + 1))
    .join("")}</div>`;
}

function renderChatRoom(data) {
  void data;
  return `
    <div class="chat-room" id="chat-room" data-market="US" data-mode="lobby">
      <header class="chat-header">
        <div class="chat-header-main">
          <h2 class="chat-header-title" id="chat-room-title">${escapeHtml(t("usLobby"))}</h2>
          <div class="chat-market-tabs" role="tablist" aria-label="${escapeHtml(t("market"))}">
            <button type="button" class="chat-mkt active" data-chat-market="US" role="tab" aria-selected="true">${escapeHtml(t("chatUs"))}</button>
            <button type="button" class="chat-mkt" data-chat-market="TW" role="tab" aria-selected="false">${escapeHtml(t("chatTw"))}</button>
          </div>
        </div>
        <div class="chat-header-tools">
          <label class="chat-fx-toggle chat-fx-toggle--header" title="${escapeHtml(t("danmakuFx"))}">
            <input type="checkbox" data-danmaku-toggle />
            <span>${escapeHtml(t("danmakuFx"))}</span>
          </label>
          <details class="chat-menu">
            <summary aria-label="${escapeHtml(t("chatMore"))}" title="${escapeHtml(t("chatMore"))}">⋮</summary>
            <div class="chat-menu-panel">
              <label class="chat-fx-toggle">
                <input type="checkbox" data-danmaku-toggle />
                <span>${escapeHtml(t("danmakuFx"))}</span>
              </label>
            </div>
          </details>
        </div>
      </header>
      <div id="ss-chat-mount" class="chat-panel" aria-label="${escapeHtml(t("chatRoom"))}"></div>
      <details class="fold-block chat-external">
        <summary>${escapeHtml(t("externalDiscuss"))}</summary>
        <div id="ss-social-digest" aria-label="${escapeHtml(t("externalDigest"))}"></div>
        <div id="ss-giscus" class="ss-giscus-section" aria-label="Giscus">
          <div class="ss-giscus-host"></div>
        </div>
      </details>
    </div>
  `;
}

function getViews() {
  return [
    { id: "today", label: t("navToday"), hash: "today" },
    { id: "logic", label: t("navLogic"), hash: "logic" },
    { id: "strategies", label: t("navStrategies"), hash: "strategies" },
    { id: "paper", label: t("navPaper"), hash: "paper" },
    { id: "social", label: t("navSocial"), hash: "social" },
  ];
}

const HASH_ALIASES = {
  today: "today",
  logic: "logic",
  strategies: "strategies",
  paper: "paper",
  social: "social",
  help: "logic",
  glossary: "logic",
  danmaku: "social",
  "social-digest": "social",
  giscus: "social",
  method: "logic",
  邏輯: "logic",
};

const NAV_ICONS = {
  today: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>`,
  logic: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 2h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v5h-2v-5z"/></svg>`,
  strategies: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>`,
  paper: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>`,
  social: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.5 3.1 6L5 21l4.3-1.4c.9.3 1.8.4 2.7.4 5 0 9-3.6 9-8s-4-8-9-8zm-1 5h2v5h-2V8zm0 6h2v2h-2v-2z"/></svg>`,
};

function parseViewFromHash() {
  const raw = (location.hash || "").replace(/^#/, "").split(/[/?]/)[0].toLowerCase();
  return HASH_ALIASES[raw] || "today";
}

function renderNavItems(variant) {
  return getViews()
    .map((v) => {
      const icon = NAV_ICONS[v.id] || "";
      return `
      <button type="button"
        class="nav-item"
        data-nav="${v.id}"
        data-variant="${variant}"
        aria-label="${escapeHtml(v.label)}"
        aria-current="false">
        <span class="nav-icon">${icon}</span>
        <span class="nav-label">${escapeHtml(v.label)}</span>
      </button>`;
    })
    .join("");
}

function renderApp(data, paper) {
  const top5 = data.top5 || [];
  const us = data.us || [];
  const tw = data.tw || [];
  const disclaimer = escapeHtml(t("disclaimer"));
  const headers = renderListHeaders();
  const logoUrl = `${import.meta.env.BASE_URL}logo.png?v=3`;

  return `
    ${renderDanmakuLayer()}

    <header class="site-chrome">
      <div class="chrome-row">
        <div class="chrome-brand">
          <img class="brand-mark" src="${logoUrl}" width="40" height="40" alt="每日數學選股" decoding="async" />
          <div class="brand-text">
            <h1>${escapeHtml(t("siteTitle"))}</h1>
            <p class="brand-meta">${escapeHtml(t("dataAsOf"))} ${fmtAsOf(data.asOf)}</p>
          </div>
        </div>
        <div class="chrome-actions">
          <label class="chrome-danmaku-toggle" title="${escapeHtml(t("danmakuFx"))}">
            <input type="checkbox" data-danmaku-toggle />
            <span>${escapeHtml(t("danmakuFx"))}</span>
          </label>
          ${renderLangSwitcher()}
          <nav class="nav-desktop" aria-label="${escapeHtml(t("navMain"))}">
            ${renderNavItems("desktop")}
          </nav>
        </div>
      </div>
      <p class="disclaimer-line" role="note">${disclaimer}</p>
      <div class="market-strip-wrap" aria-label="${escapeHtml(t("marketQuotes"))}">
        <span class="market-strip-label">${escapeHtml(t("hot"))}</span>
        ${renderIndexStrip(data.indices || {})}
      </div>
    </header>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">${escapeHtml(t("todayPicks"))}</h2>
        </header>
        ${renderRegimeStrip(data.marketRegime)}
        <div class="tabs market-tabs" role="tablist" aria-label="${escapeHtml(t("market"))}">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${term("usStock", t("usStock"))}（${us.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${term("twStock", t("twStock"))}（${tw.length}）</button>
        </div>
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${escapeHtml(t("usTop"))}</h2>
            ${renderTop5ByMarket(top5.filter((s) => stockMarket(s) === "US"), t("usStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${escapeHtml(t("usList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${headers}</thead>
                <tbody>${tableRows(us)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${mobileCards(us)}</div>
          </section>
        </div>
        <div class="panel" id="panel-tw" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${escapeHtml(t("twTop"))}</h2>
            ${renderTop5ByMarket(top5.filter((s) => stockMarket(s) === "TW"), t("twStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${escapeHtml(t("twList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${headers}</thead>
                <tbody>${tableRows(tw)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${mobileCards(tw)}</div>
          </section>
        </div>
        ${renderParity(data.parity)}
      </div>
      <div class="view" id="view-logic" data-view="logic" hidden>
        <span id="logic" class="view-anchor" tabindex="-1"></span>
        ${renderLogicSection(data)}
      </div>

      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${renderStrategiesSection()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${renderPaperSection(paper)}
      </div>

      <div class="view view-social" id="view-social" data-view="social" hidden>
        <span id="social" class="view-anchor" tabindex="-1"></span>
        ${renderChatRoom(data)}
      </div>
    </main>

    <nav class="nav-bottom" aria-label="${escapeHtml(t("navMain"))}">
      ${renderNavItems("mobile")}
    </nav>

    <p class="site-footer">${escapeHtml(t("footer"))}</p>
  `;
}

function setNavActive(root, viewId) {
  root.querySelectorAll(".nav-item").forEach((btn) => {
    const on = btn.dataset.nav === viewId;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-current", on ? "page" : "false");
  });
}

function showView(root, viewId, { updateHash = true, scrollTop = true } = {}) {
  const id = HASH_ALIASES[viewId] || "today";
  root.querySelectorAll(".view").forEach((el) => {
    const on = el.dataset.view === id;
    el.hidden = !on;
    el.classList.toggle("is-active", on);
  });
  setNavActive(root, id);
  if (updateHash) {
    const next = `#${id}`;
    if (location.hash !== next) {
      history.replaceState(null, "", next);
    }
  }
  if (scrollTop) {
    window.scrollTo(0, 0);
  }
  return id;
}

let navHashHandler = null;

function bindAppNav(root) {
  const go = (viewId, opts) => showView(root, viewId, opts);

  root.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => go(btn.dataset.nav));
  });
  root.querySelectorAll("[data-jump]").forEach((btn) => {
    btn.addEventListener("click", () => go(btn.dataset.jump));
  });

  if (navHashHandler) window.removeEventListener("hashchange", navHashHandler);
  navHashHandler = () => go(parseViewFromHash(), { updateHash: false });
  window.addEventListener("hashchange", navHashHandler);

  go(parseViewFromHash(), { updateHash: true, scrollTop: false });
  return { go };
}

function bindTabs(root) {
  const buttons = root.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      buttons.forEach((b) => {
        const on = b.dataset.tab === tab;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      root.querySelectorAll(".panel").forEach((p) => {
        p.classList.toggle("active", p.id === `panel-${tab}`);
      });
    });
  });
}

function bindChatRoom(root, data, { config, digest } = {}) {
  void data;
  void digest;
  const room = root.querySelector("#chat-room");
  if (!room) return;

  const mount = room.querySelector("#ss-chat-mount");
  const titleEl = room.querySelector("#chat-room-title");
  const mktBtns = room.querySelectorAll(".chat-mkt");
  let handle = null;
  let market = "US";

  const setTitle = (label) => {
    if (titleEl) titleEl.textContent = label;
  };

  const openRoom = () => {
    if (!mount) return;
    if (handle?.destroy) handle.destroy();
    const ticker = lobbyTicker(market);
    const title = market === "TW" ? t("twLobby") : t("usLobby");
    setTitle(title);
    handle = mountChatRoom(mount, ticker, {
      config,
      market,
      title,
      emptyLine: t("noMessages"),
      maxLen: 80,
    });
  };

  mktBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      market = btn.dataset.chatMarket;
      room.dataset.market = market;
      mktBtns.forEach((b) => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      openRoom();
    });
  });

  const onDocClick = (ev) => {
    const menu = room.querySelector(".chat-menu");
    if (menu && menu.open && !menu.contains(ev.target)) menu.open = false;
  };
  document.addEventListener("click", onDocClick);

  openRoom();
  return {
    destroy() {
      document.removeEventListener("click", onDocClick);
      if (handle?.destroy) handle.destroy();
    },
  };
}

/** Cached fetch for lang re-render without reload */
let chatRoomHandle = null;
let danmakuToggleHandle = null;
let cachedData = null;
let cachedPaper = null;
let cachedDigest = null;
async function mountUi(app) {
  const data = cachedData;
  const paper = cachedPaper;
  const viewBefore = parseViewFromHash();
  app.innerHTML = renderApp(data, paper);
  document.title = t("siteTitle");
  applyDocumentLang();

  const nav = bindAppNav(app);
  showView(app, viewBefore, { updateHash: true, scrollTop: false });
  bindTabs(app);
  bindPaperTabs(app);
  bindLangSwitcher(app);
  await initStrategies("#xq-root");
  void config;
  let digest = cachedDigest;
  const digestResult = await initSocialDigest("#ss-social-digest", config.socialDigestUrl);
  if (digestResult?.ok) {
    digest = digestResult.data;
    cachedDigest = digest;
  } else if (!digest) {
    try {
      digest = await loadSocialDigest(config.socialDigestUrl);
      cachedDigest = digest;
    } catch {
      digest = null;
    }
  }
  if (chatRoomHandle?.destroy) chatRoomHandle.destroy();
  chatRoomHandle = bindChatRoom(app, data, { config, digest });
  if (danmakuToggleHandle?.destroy) danmakuToggleHandle.destroy();
  danmakuToggleHandle = bindDanmakuToggles(app);
  mountAllTickerComments(app, { config, digest });
  initSiteGiscus("#ss-giscus", { config });
  void nav;
}

async function remount() {
  const app = document.getElementById("app");
  if (!app || !cachedData) return;
  await mountUi(app);
}

async function main() {
  const app = document.getElementById("app");
  applyDocumentLang();
  const loading = document.getElementById("loading");
  if (loading) loading.textContent = t("loading");
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    cachedData = await res.json();
    cachedPaper = await loadPaperPortfolio();
    await mountUi(app);
    if (!main._langHooked) {
      main._langHooked = true;
      onLangChange(() => {
        void remount();
      });
    }
  } catch (err) {
    app.innerHTML = `<div class="error">${escapeHtml(t("loadError", { msg: err.message }))}</div>`;
  }
}

main();
