import { term, escapeHtml } from "./glossary.js";

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
  return Number(n).toLocaleString("zh-TW", {
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
    "screen-buy": "名單新開倉",
    add: "持續買進",
    stop: "停損",
    "take-profit": "停利",
    "momentum-break": "動能轉弱",
    "off-list": "離開名單",
    "limit-up-chase": "漲停追價急殺",
  };
  return map[code] || code || "";
}

function windowCell(w) {
  if (!w) return `<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>`;
  const tag = w.sinceInception ? term("sinceInception", "成立以來") : escapeHtml(w.label || "");
  return `
    <div class="paper-win">
      <div class="w-label">${tag}</div>
      <div class="w-val ${pctClass(w.pct)}">${fmtPct(w.pct)}</div>
    </div>`;
}

function tradeRows(trades, currency) {
  if (!trades.length) {
    return `<tr><td colspan="6" class="empty-cell">本日尚無此類成交（模擬）</td></tr>`;
  }
  return trades
    .map(
      (t) => `
      <tr>
        <td><span class="ticker">${escapeHtml(t.ticker)}</span></td>
        <td class="name-cell">${escapeHtml(t.name || "")}</td>
        <td class="num">${t.qty?.toLocaleString("zh-TW")}</td>
        <td class="num">${fmtPrice(t.price, currency)}</td>
        <td><span class="badge reason ${escapeHtml(t.reason || "")}">${escapeHtml(reasonLabel(t.reason))}</span></td>
        <td class="why-cell">${escapeHtml(t.reasonText || "")}</td>
      </tr>`
    )
    .join("");
}

function positionRows(positions, currency) {
  if (!positions.length) {
    return `<tr><td colspan="6" class="empty-cell">目前沒有持股</td></tr>`;
  }
  return positions
    .map((p) => {
      const u = (p.mark - p.avgCost) * p.qty;
      const r = p.avgCost ? ((p.mark - p.avgCost) / p.avgCost) * 100 : 0;
      return `
      <tr>
        <td><span class="ticker">${escapeHtml(p.ticker)}</span></td>
        <td class="num">${p.qty?.toLocaleString("zh-TW")}</td>
        <td class="num">${fmtPrice(p.avgCost, currency)}</td>
        <td class="num">${fmtPrice(p.mark, currency)}</td>
        <td class="num ${pctClass(u)}">${fmtMoney(u, currency)}</td>
        <td class="num ${pctClass(r)}">${fmtPct(r)}</td>
      </tr>`;
    })
    .join("");
}

function renderBookCard(id, book, metrics) {
  const currency = book.currency;
  const title =
    id === "TW"
      ? `${term("twStock", "台股")}帳本（NT$）`
      : `${term("usStock", "美股")}帳本（US$）`;
  const start = fmtMoney(book.startCash, currency);
  const pnl = metrics?.totalPnl ?? book.equity - book.startCash;
  const pnlPct = metrics?.totalPnlPct ?? (book.startCash ? ((book.equity - book.startCash) / book.startCash) * 100 : 0);

  return `
    <article class="paper-book">
      <h3 class="paper-book-title">${title}</h3>
      <p class="paper-start">${term("principal", "本金")} ${start}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">現金</div>
          <div class="k-val">${fmtMoney(book.cash, currency)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${term("position", "權益（部位＋現金）")}</div>
          <div class="k-val">${fmtMoney(book.equity, currency)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總${term("realizedPnl", "損益")}</div>
          <div class="k-val ${pctClass(pnl)}">${fmtMoney(pnl, currency)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總損益 ％</div>
          <div class="k-val ${pctClass(pnlPct)}">${fmtPct(pnlPct)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${term("periodPerf", "週績效")}</div>
          ${windowCell(metrics?.week)}
        </div>
        <div>
          <div class="win-name">${term("periodPerf", "月績效")}</div>
          ${windowCell(metrics?.month)}
        </div>
        <div>
          <div class="win-name">${term("periodPerf", "季績效")}</div>
          ${windowCell(metrics?.quarter)}
        </div>
        <div>
          <div class="win-name">${term("periodPerf", "年績效")}</div>
          ${windowCell(metrics?.year)}
        </div>
      </div>
    </article>`;
}

function tradeCards(trades, currency) {
  if (!trades.length) {
    return `<div class="list-card empty-card">本日尚無此類成交（模擬）</div>`;
  }
  return trades
    .map((t) => {
      const side = t.side === "SELL" ? "賣" : "買";
      return `
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${escapeHtml(t.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${escapeHtml(t.name || "")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${side} ${t.qty?.toLocaleString("zh-TW")} 股</div>
            <div style="font-family:var(--mono)">${fmtPrice(t.price, currency)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${escapeHtml(t.reason || "")}">${escapeHtml(reasonLabel(t.reason))}</span>
        </div>
        ${t.reasonText ? `<p class="lc-why">${escapeHtml(t.reasonText)}</p>` : ""}
      </div>`;
    })
    .join("");
}

function positionCards(positions, currency) {
  if (!positions.length) {
    return `<div class="list-card empty-card">目前沒有持股</div>`;
  }
  return positions
    .map((p) => {
      const u = (p.mark - p.avgCost) * p.qty;
      const r = p.avgCost ? ((p.mark - p.avgCost) / p.avgCost) * 100 : 0;
      return `
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${escapeHtml(p.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">股數 ${p.qty?.toLocaleString("zh-TW")}</div>
          </div>
          <div style="text-align:right">
            <div class="${pctClass(u)}" style="font-family:var(--mono);font-weight:600">${fmtMoney(u, currency)}</div>
            <div class="${pctClass(r)}" style="font-family:var(--mono)">${fmtPct(r)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          <span>成本 ${fmtPrice(p.avgCost, currency)}</span>
          <span>市價 ${fmtPrice(p.mark, currency)}</span>
        </div>
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
              <th>日期</th>
              <th>${term("ticker", "代碼")}</th>
              <th>名稱</th>
              <th>股數</th>
              <th>價格</th>
              <th>原因</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>${tradeRows(trades, currency)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${tradeCards(trades, currency)}</div>
    </div>`;
}

function renderPosTable(positions, currency) {
  return `
    <div class="paper-table-block">
      <h4>目前${term("position", "部位")}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${term("ticker", "代碼")}</th>
              <th>股數</th>
              <th>平均成本</th>
              <th>市價</th>
              <th>${term("unrealizedPnl", "未實現損益")} $</th>
              <th>${term("unrealizedPnl", "未實現")} ％</th>
            </tr>
          </thead>
          <tbody>${positionRows(positions, currency)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${positionCards(positions, currency)}</div>
    </div>`;
}

function renderBookPanel(id, book, metrics, asOfDate, active, startDate) {
  const currency = book.currency;
  const all = [...(book.trades || [])].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );
  const today = all.filter((t) => t.date === asOfDate);
  const todayBuys = today.filter((t) => t.side === "BUY");
  const todaySells = today.filter((t) => t.side === "SELL");
  const recent = all.slice(0, 40);
  const inception = startDate || book.startDate || "2026-09-15";
  return `
    <div class="paper-panel ${active ? "active" : ""}" id="paper-panel-${id}" role="tabpanel">
      ${renderBookCard(id, book, metrics)}
      <p class="paper-session-note">${escapeHtml(asOfDate || "—")} · 自 ${escapeHtml(inception)} 累積 · 買進即成交</p>
      ${renderTradeTable(`買 ${asOfDate || ""}`, todayBuys, currency)}
      ${renderTradeTable(`賣 ${asOfDate || ""}`, todaySells, currency)}
      ${renderPosTable(book.positions || [], currency)}
      ${renderTradeTable("成交（近 40）", recent, currency)}
    </div>`;
}

export function renderPaperSection(paper) {
  if (!paper || !paper.books) {
    return `
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${term("paperTrade", "模擬")}</h2>
        <p class="paper-missing">尚無模擬帳本檔案。請於專案執行 <code>npm run paper</code>。</p>
      </section>`;
  }

  const tw = paper.books.TW;
  const us = paper.books.US;
  const date = (paper.asOf || "").slice(0, 10);
  // 交易日期用台北曆日：與腳本 taipeiDate 一致
  let asOfDate = date;
  try {
    asOfDate = new Date(paper.asOf).toLocaleDateString("en-CA", { timeZone: "Asia/Taipei" });
  } catch {
    /* keep */
  }

  const startDate = paper.startDate || tw?.startDate || us?.startDate || "2026-09-15";

  return `
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${term("paperTrade", "模擬")}</h2>
      <p class="paper-disclaimer" role="note">
        <strong>累積模擬帳戶（自 ${escapeHtml(startDate)} 起）</strong>
        · 不會每日歸零 · <strong>買進即成交</strong> · 非真實下單
      </p>
      <details class="paper-rules">
        <summary>規則（各市場獨立帳）</summary>
        <ul>
          <li>${term("twStock", "台股")}本金 NT$3,000,000 · 整張成交</li>
          <li>${term("usStock", "美股")}本金 US$100,000 · 可買 1 股起</li>
          <li>買：該市場名單·風險1%·停距1.5%·單檔≤8% · <strong>即成交</strong></li>
          <li>賣：${term("stopLoss", "停損")}−3% · ${term("takeProfit", "停利")}+12%半倉 · 破SMA20且日跌&gt;2% · 離名單虧損 · 漲停隔日−5%</li>
        </ul>
      </details>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">台股帳 · NT$</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">美股帳 · US$</button>
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
