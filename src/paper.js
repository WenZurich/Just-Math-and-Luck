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
    return `<tr><td colspan="6" class="empty-cell">今天還沒有這類成交（模擬）</td></tr>`;
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
      ? `${term("twStock", "台股")}帳本`
      : `${term("usStock", "美股")}帳本`;
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
    return `<div class="list-card empty-card">今天還沒有這類成交（模擬）</div>`;
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

function renderBookPanel(id, book, metrics, asOfDate, active) {
  const currency = book.currency;
  const today = (book.trades || []).filter((t) => t.date === asOfDate);
  const buys = today.filter((t) => t.side === "BUY");
  const sells = today.filter((t) => t.side === "SELL");
  return `
    <div class="paper-panel ${active ? "active" : ""}" id="paper-panel-${id}" role="tabpanel">
      ${renderBookCard(id, book, metrics)}
      ${renderTradeTable("今天模擬買進", buys, currency)}
      ${renderTradeTable("今天模擬賣出", sells, currency)}
      ${renderPosTable(book.positions || [], currency)}
    </div>`;
}

export function renderPaperSection(paper) {
  if (!paper || !paper.books) {
    return `
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${term("paperTrade", "模擬交易績效")}</h2>
        <p class="paper-missing">還沒有模擬帳本檔案。請在專案執行 <code>npm run paper</code>。</p>
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

  return `
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${term("paperTrade", "模擬交易績效")}</h2>
      <p class="paper-disclaimer" role="note">
        這是<strong>假裝買賣</strong>的成績單，用當日名單價格假設成交，
        <strong>不是</strong>真實券商下單，也不保證以後會這樣。
        ${term("twStock", "台股")}${term("principal", "本金")} NT$3,000,000　·　
        ${term("usStock", "美股")}${term("principal", "本金")} US$100,000。
        兩本帳分開算，不把台幣跟美元加在一起。
      </p>
      <div class="paper-rules">
        <h3>規則摘要（數學，不是感覺）</h3>
        <ul>
          <li><strong>買：</strong>當天${term("screening", "篩選")}名單（只標「觀察」的先不買）。先 Top 5 再其餘。
            新名字用權益的 1% 當風險去算股數；停距大約是股價的 1.5%（${term("volRatio", "量比")}很高時 2.5%）。
            單一${term("position", "部位")}最多約 8% 權益。台股買得起 1 張（1000 股）才買，否則跳過。</li>
          <li><strong>持續買進：</strong>已經持有、今天還在名單、又還沒滿 8%，同一天最多再加一次。</li>
          <li><strong>賣：</strong>${term("stopLoss", "停損")}未實現 ≤ −3% 全賣；
            ${term("takeProfit", "停利")}≥ +12% 賣一半（很小就全賣）；
            沒站上 ${term("sma20", "SMA20")} 且當日跌超過 2% 全賣；
            不在名單又虧錢全賣；當初接近${term("limitUp", "漲停")}、隔日跌 ≥ 5% 也全賣。</li>
        </ul>
        <p class="paper-rules-hint">看不懂藍字？點它會跳到下方「名詞小辭典」。</p>
      </div>
      <p class="paper-combined">${escapeHtml(paper.metrics?.combinedNote || "台股與美股兩本帳分開計價。")}</p>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${term("twStock", "台股")}帳</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${term("usStock", "美股")}帳</button>
      </div>
      ${renderBookPanel("TW", tw, paper.metrics?.TW, asOfDate, true)}
      ${renderBookPanel("US", us, paper.metrics?.US, asOfDate, false)}
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
