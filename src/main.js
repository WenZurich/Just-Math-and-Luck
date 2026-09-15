import "./style.css";
import "./danmaku.css";
import "./comments.css";
import "./social-digest.css";
import config from "./config.js";
import {
  term,
  escapeHtml,
  renderGlossarySection,
  bindTermLinks,
} from "./glossary.js";
import {
  renderPaperSection,
  bindPaperTabs,
  loadPaperPortfolio,
} from "./paper.js";
import { initDanmaku } from "./danmaku.js";
import { mountAllTickerComments, mountTickerRoom, initSiteGiscus } from "./comments.js";
import { initSocialDigest, loadSocialDigest } from "./social-digest.js";
import "./strategies.css";
import {
  renderStrategiesSection,
  initStrategies,
} from "./strategies.js";

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
  return Number(n).toLocaleString("zh-TW", {
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
      d.toLocaleString("zh-TW", {
        timeZone: "Asia/Taipei",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }) + "（台北）"
    );
  } catch {
    return iso;
  }
}

function smaBadges(stock) {
  const a20 = stock.aboveSma20
    ? `<span class="badge sma-on">${term("sma20", "SMA20↑")}</span>`
    : `<span class="badge sma-off">${term("sma20", "SMA20↓")}</span>`;
  const a50 = stock.aboveSma50
    ? `<span class="badge sma-on">${term("sma50", "SMA50↑")}</span>`
    : `<span class="badge sma-off">${term("sma50", "SMA50↓")}</span>`;
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
      if (key === "observe") return `<span class="badge screen">觀察</span>`;
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
          ? "資料不全"
          : "—";
    const pct =
      item.dayPct != null
        ? `<div class="pct ${pctClass(item.dayPct)}">${fmtPct(item.dayPct)}</div>`
        : "";
    const session =
      item.session === "intraday"
        ? ` · ${term("intraday", "盤中")}`
        : "";
    chips.push(`
      <div class="index-chip ${incomplete ? "incomplete" : ""}">
        <div class="label">${labelHtml}${session}</div>
        <div class="value">${val}</div>
        ${pct}
      </div>
    `);
  };

  pushPct("tw", term("taiex", indices.tw?.name || "台灣加權 TAIEX"), indices.tw);
  pushPct("otc", term("otc", indices.otc?.name || "櫃買"), indices.otc);
  pushPct("spx", term("spx", indices.spx?.name || "S&P 500"), indices.spx);
  pushPct("nasdaq", term("nasdaq", indices.nasdaq?.name || "Nasdaq"), indices.nasdaq);
  pushPct("sox", term("sox", indices.sox?.name || "SOX"), indices.sox);

  if (indices.usdTwd) {
    const fx = indices.usdTwd;
    const show = fx.taipeiClose ?? fx.yahoo;
    chips.push(`
      <div class="index-chip">
        <div class="label">${term("usdtwd", "USD/TWD")}</div>
        <div class="value">${fmtNum(show, 3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          台北收 ${fx.taipeiClose != null ? fmtNum(fx.taipeiClose, 3) : "—"}
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
      ? term("twStock", "台股")
      : stock.market === "US"
        ? term("usStock", "美股")
        : escapeHtml(stock.market || "");
  const rs =
    stock.rsVsIndexPp != null
      ? `<div class="metric"><div class="m-label">${term("rs", "RS vs 指數")}</div><div class="m-val ${pctClass(stock.rsVsIndexPp)}">${fmtPct(stock.rsVsIndexPp)}</div></div>`
      : stock.priorClosePct != null
        ? `<div class="metric"><div class="m-label">${term("priorClose", "前收漲幅")}</div><div class="m-val ${pctClass(stock.priorClosePct)}">${fmtPct(stock.priorClosePct)}</div></div>`
        : `<div class="metric"><div class="m-label">${term("rs", "RS")}</div><div class="m-val">—</div></div>`;

  return `
    <article class="pick-card">
      <div class="rank">TOP ${rank}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${term("ticker", stock.ticker)}</div>
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
        ${rs}
        <div class="metric"><div class="m-label">${term("pct5d", "5 日")}</div><div class="m-val ${pctClass(stock.pct5d)}">${fmtPct(stock.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${term("pct1m", "約 1 月")}</div><div class="m-val ${pctClass(stock.pct1m)}">${fmtPct(stock.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${term("volRatio", "量比")}</div><div class="m-val">${stock.volRatio != null ? fmtNum(stock.volRatio, 2) + "×" : "—"}</div></div>
      </div>
      ${stock.business ? `<p class="card-text"><strong>本業</strong>　${escapeHtml(stock.business)}</p>` : ""}
      ${stock.why ? `<p class="card-text"><strong>理由</strong>　${escapeHtml(stock.why)}</p>` : ""}
      ${stock.risk ? `<p class="card-text risk"><strong>風險</strong>　${linkRiskText(stock.risk)}</p>` : ""}
      <div data-ticker-comments="${escapeHtml(stock.ticker)}" data-market="${escapeHtml(stock.market === 'TW' || String(stock.ticker).endsWith('.TW') ? 'TW' : 'US')}"></div>
    </article>
  `;
}

function linkRiskText(text) {
  let t = escapeHtml(text);
  t = t.replace(/漲停/g, term("limitUp", "漲停"));
  t = t.replace(/動能/g, term("momentum", "動能"));
  return t;
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
            ? `<span class="${pctClass(s.priorClosePct)}">${term("priorClose", "前收")} ${fmtPct(s.priorClosePct)}</span>`
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
          <span>${term("volRatio", "量比")} ${s.volRatio != null ? fmtNum(s.volRatio, 2) + "×" : "—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${smaBadges(s)}${screenBadges(s.screens)}</div>
        ${s.why ? `<p class="lc-why">${escapeHtml(s.why)}</p>` : ""}
        ${s.risk && s.risk !== "—" ? `<p class="lc-why" style="color:#fbbf24">風險：${linkRiskText(s.risk)}</p>` : ""}
        <div data-ticker-comments="${escapeHtml(s.ticker)}" data-market="${escapeHtml(String(s.ticker).endsWith('.TW') ? 'TW' : (s.market === 'TW' ? 'TW' : 'US'))}"></div>
      </div>`;
    })
    .join("");
}

function renderListSection(id, list) {
  if (!list?.length) return "";
  return `
    <div class="panel ${id === "us" ? "active" : ""}" id="panel-${id}" role="tabpanel">
      <div class="table-wrap">
        <table class="stock-table">
          <thead>
            <tr>
              <th>${term("ticker", "代碼")}</th>
              <th>名稱</th>
              <th>價格</th>
              <th>${term("dayPct", "日漲跌")}</th>
              <th>${term("rs", "RS")}／${term("priorClose", "前收")}</th>
              <th>${term("pct5d", "5 日")}</th>
              <th>${term("pct1m", "約 1 月")}</th>
              <th>${term("volRatio", "量比")}</th>
              <th>均線</th>
              <th>${term("screening", "篩選")}</th>
              <th>理由</th>
            </tr>
          </thead>
          <tbody>${tableRows(list)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${mobileCards(list)}</div>
    </div>
  `;
}

function renderParity(parity) {
  if (!parity) return "";
  const prem = parity.premiumPct;
  return `
    <section class="section">
      <h2 class="section-title">${term("adr", "ADR")} ${term("parity", "平價")}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${term("usStock", "美股")} ${term("adr", "ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${fmtPrice(parity.tsm, "USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${term("adsRatio", "換股比")}</span>　<strong>${escapeHtml(parity.adsRatio || "—")}</strong></div>
          <div class="row"><span>${term("parity", "隱含價")}</span>　<strong>${parity.impliedUsdTaipeiFx != null ? fmtNum(parity.impliedUsdTaipeiFx, 2) : "—"}</strong></div>
          <div class="row"><span>${term("premium", "溢價")}</span>　<strong class="${pctClass(prem)}">${fmtPct(prem)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${term("twStock", "台股")}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${fmtPrice(parity.tw2330, "TWD")}</div>
        </div>
        ${parity.note ? `<p class="parity-note">${escapeHtml(parity.note)}</p>` : ""}
      </div>
    </section>
  `;
}

function renderMethod(method) {
  if (!method) return "";
  const map = { A: "screenA", B: "screenB", C: "screenC" };
  const items = Object.keys(method)
    .map((k) => {
      const id = map[k] || "screening";
      return `<li><span class="screen-key">${term(id, k)}</span><span>${escapeHtml(method[k])}</span></li>`;
    })
    .join("");
  return `
    <details class="fold-block help-fold" id="help-method">
      <summary>詳情 · ${term("screening", "每日篩選條件")}</summary>
      <ul class="method-list fold-list">${items}</ul>
    </details>
  `;
}

function renderHelpPage(data) {
  return `
    <div class="help-doc">
      <header class="view-header">
        <h2 class="view-title">說明</h2>
      </header>
      <ul class="help-short">
        <li><strong>今日</strong> — 動能／RS／均線／量比篩選候選</li>
        <li><strong>策略</strong> — 價量／籌碼／財務／大師條件命中</li>
        <li><strong>模擬</strong> — 自 2026-09-15 累計；訊號即成交（非真實下單）</li>
        <li><strong>社群</strong> — 站內聊天＋外部摘要，氣氛參考</li>
      </ul>
      <details class="fold-block help-fold" id="help-data">
        <summary>詳情 · 資料來源</summary>
        <ul class="fold-list">
          <li>行情：Yahoo Finance（可能半日落後）</li>
          <li>台股估值／法人：證交所、櫃買 OpenAPI</li>
          <li>財報：MOPS／證交所 open data</li>
          <li>產物：<code>latest.json</code> · <code>strategy-screener.json</code> · <code>paper-portfolio.json</code> · <code>social-digest.json</code></li>
        </ul>
      </details>
      ${renderMethod(data?.method)}
      <details class="fold-block help-fold" id="help-strategies">
        <summary>詳情 · 策略選股</summary>
        <p class="fold-p">缺 PE／ROE 等欄位則略過，不填假數字。輸出 <code>strategy-screener.json</code>。</p>
      </details>
      <details class="fold-block help-fold" id="help-paper">
        <summary>詳情 · 紙上模擬</summary>
        <ul class="fold-list">
          <li>台幣 NT$3,000,000／美元 US$100,000，分開計價</li>
          <li>同一 <code>asOf</code> 只處理一次；立即記入帳本</li>
          <li>完整買賣規則見「模擬」分頁</li>
        </ul>
      </details>
    </div>
  `;
}

function renderDanmakuLayer() {
  return `<div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>`;
}

function collectTickerChips(data) {
  const seen = new Set();
  const chips = [];
  const push = (s) => {
    if (!s?.ticker || seen.has(s.ticker)) return;
    seen.add(s.ticker);
    const market =
      s.market === "TW" || String(s.ticker).endsWith(".TW") ? "TW" : "US";
    chips.push({ ticker: s.ticker, market, name: s.name || "" });
  };
  (data.top5 || []).forEach(push);
  (data.tw || []).forEach(push);
  (data.us || []).forEach(push);
  return chips;
}

function renderChatRoom(data) {
  const chips = collectTickerChips(data);
  const chipHtml = chips
    .map(
      (c, i) =>
        `<button type="button" class="chat-chip${i === 0 ? " active" : ""}" data-ticker="${escapeHtml(
          c.ticker
        )}" data-market="${c.market}">${escapeHtml(c.ticker)}</button>`
    )
    .join("");
  return `
    <div class="chat-room" id="chat-room">
      <header class="chat-room-bar">
        <div class="chat-tabs" role="tablist" aria-label="聊天範圍">
          <button type="button" class="chat-tab active" data-chat-tab="global" role="tab" aria-selected="true">全站</button>
          <button type="button" class="chat-tab" data-chat-tab="ticker" role="tab" aria-selected="false">個股</button>
        </div>
        <label class="chat-fx-toggle">
          <input type="checkbox" id="ss-danmaku-toggle" />
          <span>彈幕效果</span>
        </label>
      </header>

      <div class="chat-pane is-active" data-chat-pane="global">
        <div id="ss-danmaku-panel" class="chat-shell" aria-label="全站聊天">
          <div class="ss-chat-status chat-status-line" aria-live="polite"></div>
          <ul class="ss-chat-list chat-messages" aria-label="訊息"></ul>
          <form class="ss-chat-form chat-composer">
            <input class="ss-nick" name="nickname" maxlength="24" placeholder="暱稱（可空）" autocomplete="nickname" />
            <input class="ss-body" name="body" maxlength="80" placeholder="說點什麼…" required autocomplete="off" />
            <button type="submit" class="chat-send">送出</button>
          </form>
        </div>
      </div>

      <div class="chat-pane" data-chat-pane="ticker" hidden>
        <div class="chat-chip-row" role="tablist" aria-label="個股">${chipHtml || `<span class="chat-empty">暫無標的</span>`}</div>
        <div id="ss-ticker-room" class="chat-shell" data-ticker-room></div>
      </div>

      <details class="fold-block chat-external">
        <summary>外部討論</summary>
        <div id="ss-social-digest" aria-label="外部討論摘要"></div>
        <div id="ss-giscus" class="ss-giscus-section" aria-label="Giscus">
          <div class="ss-giscus-host"></div>
        </div>
      </details>
    </div>
  `;
}

const VIEWS = [
  { id: "today", label: "今日", hash: "today" },
  { id: "strategies", label: "策略", hash: "strategies" },
  { id: "paper", label: "模擬", hash: "paper" },
  { id: "social", label: "社群", hash: "social" },
  { id: "help", label: "說明", hash: "help" },
];

const HASH_ALIASES = {
  today: "today",
  strategies: "strategies",
  paper: "paper",
  social: "social",
  help: "help",
  glossary: "help",
  danmaku: "social",
  "social-digest": "social",
  giscus: "social",
  method: "help",
};

const NAV_ICONS = {
  today: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>`,
  strategies: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>`,
  paper: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>`,
  social: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.5 3.1 6L5 21l4.3-1.4c.9.3 1.8.4 2.7.4 5 0 9-3.6 9-8s-4-8-9-8zm-1 5h2v5h-2V8zm0 6h2v2h-2v-2z"/></svg>`,
  help: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 15a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1.6-5.35c-.55.35-.85.6-.95 1.1l-.1.75h-1.5l.12-.95c.15-.95.7-1.5 1.4-1.95.55-.35.9-.6.9-1.15 0-.55-.45-.95-1.15-.95-.75 0-1.2.4-1.35 1.05l-1.45-.35C9.75 8.2 10.7 7.2 12.2 7.2c1.65 0 2.85 1 2.85 2.4 0 .85-.45 1.5-1.45 2.05z"/></svg>`,
};

function parseViewFromHash() {
  const raw = (location.hash || "").replace(/^#/, "").split(/[/?]/)[0].toLowerCase();
  return HASH_ALIASES[raw] || "today";
}

function renderNavItems(variant) {
  return VIEWS.map((v) => {
    const icon = NAV_ICONS[v.id] || "";
    return `
      <button type="button"
        class="nav-item"
        data-nav="${v.id}"
        data-variant="${variant}"
        aria-label="${v.label}"
        aria-current="false">
        <span class="nav-icon">${icon}</span>
        <span class="nav-label">${v.label}</span>
      </button>`;
  }).join("");
}

function renderApp(data, paper) {
  const top5 = data.top5 || [];
  const us = data.us || [];
  const tw = data.tw || [];
  const disclaimer = escapeHtml(
    (data.disclaimer || "本站內容非投資建議。").replace(
      /^本站內容為依公開行情的數學篩選候選，不是投資建議，亦不保證獲利。$/,
      "本站只是用公開行情算出「相對有機會觀察的名單」，不會保證賺錢。"
    )
  );

  return `
    ${renderDanmakuLayer()}

    <header class="site-chrome">
      <div class="chrome-brand">
        <div class="brand-mark" aria-hidden="true"></div>
        <div class="brand-text">
          <h1>${term("screening", "每日數學選股")}</h1>
          <p class="brand-meta">資料 ${fmtAsOf(data.asOf)}</p>
        </div>
      </div>
      <details class="disclaimer-fold">
        <summary>${term("notAdvice", "非投資建議")} · 紅漲綠跌</summary>
        <p>${disclaimer}${data.timezoneNote ? ` · ${escapeHtml(data.timezoneNote)}` : ""}</p>
      </details>
    </header>

    <nav class="nav-desktop" aria-label="主要導覽">
      ${renderNavItems("desktop")}
    </nav>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">今日</h2>
        </header>
        ${renderIndexStrip(data.indices || {})}
        <section class="section">
          <h2 class="section-title">今日 Top 5</h2>
          <div class="top5-grid">
            ${top5.map((s, i) => renderTopCard(s, i + 1)).join("") || `<div class="empty-state">今日尚無 Top 5</div>`}
          </div>
        </section>
        <section class="section">
          <h2 class="section-title">選股清單</h2>
          <div class="tabs" role="tablist">
            <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${term("usStock", "美股")}（${us.length}）</button>
            <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${term("twStock", "台股")}（${tw.length}）</button>
          </div>
          ${renderListSection("us", us)}
          ${renderListSection("tw", tw)}
        </section>
        ${renderParity(data.parity)}
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

      <div class="view" id="view-help" data-view="help" hidden>
        <span id="help" class="view-anchor" tabindex="-1"></span>
        ${renderHelpPage(data)}
        ${renderGlossarySection()}
        <details class="fold-block help-fold" id="help-legal">
          <summary>詳情 · 免責</summary>
          <p class="disclaimer">${disclaimer}</p>
          <p class="tz-note">紅漲綠跌 · 模擬非真實成交 · 社交僅供參考</p>
        </details>
      </div>
    </main>

    <nav class="nav-bottom" aria-label="主要導覽">
      ${renderNavItems("mobile")}
    </nav>

    <p class="site-footer">紅漲綠跌 · 點藍字看解釋</p>
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

function bindAppNav(root) {
  const go = (viewId, opts) => showView(root, viewId, opts);

  root.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => go(btn.dataset.nav));
  });
  root.querySelectorAll("[data-jump]").forEach((btn) => {
    btn.addEventListener("click", () => go(btn.dataset.jump));
  });

  window.addEventListener("hashchange", () => {
    go(parseViewFromHash(), { updateHash: false });
  });

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
  const room = root.querySelector("#chat-room");
  if (!room) return;

  const tabs = room.querySelectorAll(".chat-tab");
  const panes = room.querySelectorAll(".chat-pane");
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.chatTab;
      tabs.forEach((b) => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      panes.forEach((p) => {
        const on = p.dataset.chatPane === id;
        p.classList.toggle("is-active", on);
        p.hidden = !on;
      });
    });
  });

  const tickerMount = room.querySelector("#ss-ticker-room");
  const chips = room.querySelectorAll(".chat-chip");
  let tickerHandle = null;

  const openTicker = (ticker, market) => {
    if (!tickerMount || !ticker) return;
    if (tickerHandle?.destroy) tickerHandle.destroy();
    tickerHandle = mountTickerRoom(tickerMount, ticker, { config, digest, market });
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.toggle("active", c === chip));
      openTicker(chip.dataset.ticker, chip.dataset.market);
    });
  });

  const first = chips[0];
  if (first) openTicker(first.dataset.ticker, first.dataset.market);
}

async function main() {
  const app = document.getElementById("app");
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const paper = await loadPaperPortfolio();
    app.innerHTML = renderApp(data, paper);
    const nav = bindAppNav(app);
    bindTabs(app);
    bindPaperTabs(app);
    bindTermLinks(app, {
      beforeScroll() {
        nav.go("help", { updateHash: true, scrollTop: false });
      },
    });
    await initStrategies("#xq-root");
    void config;
    let digest = null;
    const digestResult = await initSocialDigest("#ss-social-digest", config.socialDigestUrl);
    if (digestResult?.ok) digest = digestResult.data;
    else {
      try {
        digest = await loadSocialDigest(config.socialDigestUrl);
      } catch {
        digest = null;
      }
    }
    initDanmaku({ config });
    bindChatRoom(app, data, { config, digest });
    mountAllTickerComments(app, { config, digest });
    initSiteGiscus("#ss-giscus", { config });
  } catch (err) {
    app.innerHTML = `<div class="error">無法載入資料（${escapeHtml(err.message)}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。</div>`;
  }
}

main();
