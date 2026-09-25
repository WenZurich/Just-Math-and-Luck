import { term, escapeHtml } from "./glossary.js";
import { t, numberLocale } from "./i18n.js";

const PAPER_URL = "./data/paper-portfolio.json";

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

function moneyPrefix(currency) {
  if (currency === "USD") return "US$";
  if (currency === "TWD") return "NT$";
  return "";
}

function fmtMoney(n, currency) {
  if (n == null || Number.isNaN(n)) return "—";
  const digits = currency === "TWD" ? 0 : 2;
  return `${moneyPrefix(currency)}${fmtNum(n, digits)}`;
}

function fmtPrice(n, currency) {
  if (n == null || Number.isNaN(n)) return "—";
  const digits = currency === "TWD" && n >= 100 ? 0 : 2;
  return `${moneyPrefix(currency)}${fmtNum(n, digits)}`;
}

function reasonLabel(code) {
  const map = {
    "screen-buy": t("reasonScreenBuy"),
    add: t("reasonAdd"),
    stop: t("reasonStop"),
    "take-profit": t("reasonTakeProfit"),
    "momentum-break": t("reasonMomentumBreak"),
    "off-list": t("reasonOffList"),
    "limit-up-chase": t("reasonLimitUpChase"),
  };
  return map[code] || code || "";
}

function windowCell(w) {
  if (!w) return `<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>`;
  const tag = w.sinceInception ? term("sinceInception", t("sinceInception")) : escapeHtml(w.label || "");
  return `
    <div class="paper-win">
      <div class="w-label">${tag}</div>
      <div class="w-val ${pctClass(w.pct)}">${fmtPct(w.pct)}</div>
    </div>`;
}

function tradeRows(trades, currency) {
  if (!trades.length) {
    return `<tr><td colspan="6" class="empty-cell">${escapeHtml(t("noTradesToday"))}</td></tr>`;
  }
  return trades
    .map(
      (row) => `
      <tr>
        <td><span class="ticker">${escapeHtml(row.ticker)}</span></td>
        <td class="name-cell">${escapeHtml(row.name || "")}</td>
        <td class="num">${row.qty?.toLocaleString(numberLocale())}</td>
        <td class="num">${fmtPrice(row.price, currency)}</td>
        <td><span class="badge reason ${escapeHtml(row.reason || "")}">${escapeHtml(reasonLabel(row.reason))}</span></td>
        <td class="why-cell">${escapeHtml(row.reasonText || "")}</td>
      </tr>`
    )
    .join("");
}

function dayPnlOf(p) {
  if (p.dayPct == null || Number.isNaN(p.dayPct) || p.mark == null || p.qty == null) return null;
  // dayPct is mark change vs prior close; dollar day P/L ≈ mark * qty * dayPct/100
  return (p.mark * p.qty * p.dayPct) / 100;
}

function positionRows(positions, currency, positionsValue) {
  const colCount = 11;
  if (!positions.length) {
    return `<tr><td colspan="${colCount}" class="empty-cell">${escapeHtml(t("noPositions"))}</td></tr>`;
  }
  const bookMv = positionsValue > 0 ? positionsValue : positions.reduce((s, p) => s + (p.mark || 0) * (p.qty || 0), 0);
  return positions
    .map((p) => {
      const mv = (p.mark || 0) * (p.qty || 0);
      const cost = (p.avgCost || 0) * (p.qty || 0);
      const u = (p.mark - p.avgCost) * p.qty;
      const r = p.avgCost ? ((p.mark - p.avgCost) / p.avgCost) * 100 : 0;
      const dayPnl = dayPnlOf(p);
      const weight = bookMv > 0 ? (mv / bookMv) * 100 : null;
      const name = p.name ? escapeHtml(p.name) : "";
      return `
      <tr class="pos-row" data-lq="pos" data-lq-sym="${escapeHtml(p.ticker)}"
          data-ticker="${escapeHtml(p.ticker)}"
          data-lq-qty="${p.qty ?? ""}" data-lq-avg="${p.avgCost ?? ""}" data-lq-ccy="${escapeHtml(currency)}"
          data-lq-mark="${p.mark ?? ""}" data-lq-daypct="${p.dayPct ?? ""}"
          tabindex="0">
        <td class="pos-sym">
          <span class="ticker">${escapeHtml(p.ticker)}</span>
          ${name ? `<span class="pos-name">${name}</span>` : ""}
        </td>
        <td class="num">${p.qty?.toLocaleString(numberLocale())}</td>
        <td class="num" data-lq-field="price">${fmtPrice(p.mark, currency)}</td>
        <td class="num">${fmtMoney(mv, currency)}</td>
        <td class="num ${pctClass(dayPnl)}">${dayPnl == null ? "—" : fmtMoney(dayPnl, currency)}</td>
        <td class="num ${pctClass(p.dayPct)}" data-lq-field="dayPct">${fmtPct(p.dayPct)}</td>
        <td class="num ${pctClass(u)}">${fmtMoney(u, currency)}</td>
        <td class="num ${pctClass(r)}">${fmtPct(r)}</td>
        <td class="num">${fmtMoney(cost, currency)}</td>
        <td class="num">${fmtPrice(p.avgCost, currency)}</td>
        <td class="num">${weight == null ? "—" : `${weight.toFixed(2)}%`}</td>
      </tr>`;
    })
    .join("");
}

function renderBookCard(id, book, metrics) {
  const currency = book.currency;
  const title = id === "TW" ? t("paperBookTw") : t("paperBookUs");
  const start = fmtMoney(book.startCash, currency);
  const pnl = metrics?.totalPnl ?? book.equity - book.startCash;
  const pnlPct =
    metrics?.totalPnlPct ??
    (book.startCash ? ((book.equity - book.startCash) / book.startCash) * 100 : 0);
  return `
    <article class="paper-book">
      <h3 class="paper-book-title">${escapeHtml(title)}</h3>
      <p class="paper-start">${term("principal", t("principal"))} ${start}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">${escapeHtml(t("cash"))}</div>
          <div class="k-val" data-lq-kpi="cash">${fmtMoney(book.cash, currency)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${term("position", t("equity"))}</div>
          <div class="k-val" data-lq-kpi="equity">${fmtMoney(book.equity, currency)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${escapeHtml(t("totalPnl"))}</div>
          <div class="k-val ${pctClass(pnl)}" data-lq-kpi="pnl">${fmtMoney(pnl, currency)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${escapeHtml(t("totalPnlPct"))}</div>
          <div class="k-val ${pctClass(pnlPct)}" data-lq-kpi="pnlPct">${fmtPct(pnlPct)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${escapeHtml(t("weekPerf"))}</div>
          ${windowCell(metrics?.week)}
        </div>
        <div>
          <div class="win-name">${escapeHtml(t("monthPerf"))}</div>
          ${windowCell(metrics?.month)}
        </div>
        <div>
          <div class="win-name">${escapeHtml(t("quarterPerf"))}</div>
          ${windowCell(metrics?.quarter)}
        </div>
        <div>
          <div class="win-name">${escapeHtml(t("yearPerf"))}</div>
          ${windowCell(metrics?.year)}
        </div>
      </div>
    </article>`;
}

function tradeCards(trades, currency) {
  if (!trades.length) {
    return `<div class="list-card empty-card">${escapeHtml(t("noTradesToday"))}</div>`;
  }
  return trades
    .map((row) => {
      const side = row.side === "SELL" ? t("sell") : t("buy");
      return `
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${escapeHtml(row.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${escapeHtml(row.name || "")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${escapeHtml(side)} ${row.qty?.toLocaleString(numberLocale())} ${escapeHtml(t("shares"))}</div>
            <div style="font-family:var(--mono)">${fmtPrice(row.price, currency)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${escapeHtml(row.reason || "")}">${escapeHtml(reasonLabel(row.reason))}</span>
        </div>
        ${row.reasonText ? `<p class="lc-why">${escapeHtml(row.reasonText)}</p>` : ""}
      </div>`;
    })
    .join("");
}

function renderTradeTable(title, trades, currency) {
  return `
    <div class="paper-table-block">
      <h4>${escapeHtml(title)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${term("ticker", t("ticker"))}</th>
              <th>${escapeHtml(t("name"))}</th>
              <th>${escapeHtml(t("qty"))}</th>
              <th>${escapeHtml(t("price"))}</th>
              <th>${escapeHtml(t("reason"))}</th>
              <th>${escapeHtml(t("note"))}</th>
            </tr>
          </thead>
          <tbody>${tradeRows(trades, currency)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${tradeCards(trades, currency)}</div>
    </div>`;
}

function renderPosTable(positions, currency, positionsValue) {
  return `
    <div class="paper-table-block paper-pos-block">
      <div class="pos-block-head">
        <h4>${escapeHtml(t("positions"))}</h4>
        <span class="pos-scroll-hint">${escapeHtml(t("posScrollHint"))}</span>
      </div>
      <div class="pos-scroll" role="region" aria-label="${escapeHtml(t("positions"))}">
        <table class="pos-table">
          <thead>
            <tr>
              <th class="pos-sym">${term("ticker", t("ticker"))}</th>
              <th class="num">${escapeHtml(t("qty"))}</th>
              <th class="num">${escapeHtml(t("mark"))}</th>
              <th class="num">${escapeHtml(t("mktValue"))}</th>
              <th class="num">${escapeHtml(t("dayPnl"))}</th>
              <th class="num">${escapeHtml(t("dayPct"))}</th>
              <th class="num">${escapeHtml(t("unrealizedPnl"))}</th>
              <th class="num">${escapeHtml(t("unrealizedPct"))}</th>
              <th class="num">${escapeHtml(t("costBasis"))}</th>
              <th class="num">${escapeHtml(t("avgCost"))}</th>
              <th class="num">${escapeHtml(t("weightPct"))}</th>
            </tr>
          </thead>
          <tbody>${positionRows(positions, currency, positionsValue)}</tbody>
        </table>
      </div>
    </div>`;
}

function renderBookPanel(id, book, metrics, asOfDate, active, startDate) {
  if (!book) return "";
  const currency = book.currency;
  const all = [...(book.trades || [])].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );
  const today = all.filter((tr) => tr.date === asOfDate);
  const todayBuys = today.filter((tr) => tr.side === "BUY");
  const todaySells = today.filter((tr) => tr.side === "SELL");
  const recent = all.slice(0, 40);
  const inception = startDate || book.startDate || "2026-09-15";
  return `
    <div class="paper-panel ${active ? "active" : ""}" id="paper-panel-${id}" role="tabpanel"
         data-lq-book="${escapeHtml(id)}" data-lq-cash="${book.cash ?? ""}"
         data-lq-start="${book.startCash ?? ""}" data-lq-ccy="${escapeHtml(currency)}">
      ${renderBookCard(id, book, metrics)}
      <p class="paper-session-note">${escapeHtml(t("paperSession", { date: asOfDate || "—", inception }))}</p>
      ${renderTradeTable(`${t("buy")} ${asOfDate || ""}`, todayBuys, currency)}
      ${renderTradeTable(`${t("sell")} ${asOfDate || ""}`, todaySells, currency)}
      ${renderPosTable(book.positions || [], currency, book.positionsValue)}
      ${renderTradeTable(t("recentTrades"), recent, currency)}
    </div>`;
}

export function renderPaperSection(paper) {
  if (!paper || !paper.books) {
    return `
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${term("paperTrade", t("paper"))}</h2>
        <p class="paper-missing">${escapeHtml(t("paperMissing"))}</p>
      </section>`;
  }

  const tw = paper.books.TW;
  const us = paper.books.US;
  const date = (paper.asOf || "").slice(0, 10);
  let asOfDate = date;
  try {
    asOfDate = new Date(paper.asOf).toLocaleDateString("en-CA", { timeZone: "Asia/Taipei" });
  } catch {
    /* keep */
  }

  const startDate = paper.startDate || tw?.startDate || us?.startDate || "2026-09-15";

  return `
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${term("paperTrade", t("paper"))}</h2>
      <p class="paper-disclaimer" role="note">
        ${escapeHtml(t("paperDisclaimer", { date: startDate }))}
      </p>
      <details class="paper-rules">
        <summary>${escapeHtml(t("paperRules"))}</summary>
        <ul>
          <li>${escapeHtml(t("paperRuleTw"))}</li>
          <li>${escapeHtml(t("paperRuleUs"))}</li>
          <li>${escapeHtml(t("paperRuleBuy"))}</li>
          <li>${escapeHtml(t("paperRuleSell"))}</li>
          <li>${escapeHtml(t("paperRuleOpt"))}</li>
          <li>${escapeHtml(t("paperRuleTxf"))}</li>
        </ul>
      </details>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${escapeHtml(t("paperTabTw"))}</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${escapeHtml(t("paperTabUs"))}</button>
      </div>
      ${renderBookPanel("TW", tw, paper.metrics?.TW, asOfDate, true, startDate)}
      ${renderBookPanel("US", us, paper.metrics?.US, asOfDate, false, startDate)}
    </section>`;
}

export function bindPaperTabs(root) {
  const buttons = root.querySelectorAll(".paper-tab-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.paperTab;
      buttons.forEach((b) => {
        const on = b.dataset.paperTab === tab;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      root.querySelectorAll(".paper-panel").forEach((p) => {
        p.classList.toggle("active", p.id === `paper-panel-${tab}`);
      });
    });
  });
}

export async function loadPaperPortfolio() {
  try {
    const res = await fetch(PAPER_URL);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
