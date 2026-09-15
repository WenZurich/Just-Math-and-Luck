import "./style.css";

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
    return d.toLocaleString("zh-TW", {
      timeZone: "Asia/Taipei",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }) + "（台北）";
  } catch {
    return iso;
  }
}

function smaBadges(stock) {
  const a20 = stock.aboveSma20
    ? `<span class="badge sma-on">SMA20↑</span>`
    : `<span class="badge sma-off">SMA20↓</span>`;
  const a50 = stock.aboveSma50
    ? `<span class="badge sma-on">SMA50↑</span>`
    : `<span class="badge sma-off">SMA50↓</span>`;
  return a20 + a50;
}

function screenBadges(screens) {
  if (!screens?.length) return "";
  return screens
    .map((s) => `<span class="badge screen">${escapeHtml(String(s))}</span>`)
    .join("");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderIndexStrip(indices) {
  const chips = [];

  const pushPct = (key, label, item) => {
    if (!item) return;
    const incomplete = item.incomplete;
    const val =
      item.value != null
        ? fmtNum(item.value, item.value >= 1000 ? 2 : 2)
        : incomplete
          ? "資料不全"
          : "—";
    const pct =
      item.dayPct != null
        ? `<div class="pct ${pctClass(item.dayPct)}">${fmtPct(item.dayPct)}</div>`
        : "";
    const session = item.session === "intraday" ? " · 盤中" : "";
    chips.push(`
      <div class="index-chip ${incomplete ? "incomplete" : ""}">
        <div class="label">${escapeHtml(label || item.name || key)}${session}</div>
        <div class="value">${val}</div>
        ${pct}
      </div>
    `);
  };

  pushPct("tw", indices.tw?.name || "台灣加權 TAIEX", indices.tw);
  pushPct("otc", indices.otc?.name || "櫃買", indices.otc);
  pushPct("spx", indices.spx?.name || "S&P 500", indices.spx);
  pushPct("nasdaq", indices.nasdaq?.name || "Nasdaq", indices.nasdaq);
  pushPct("sox", indices.sox?.name || "SOX", indices.sox);

  if (indices.usdTwd) {
    const fx = indices.usdTwd;
    const show = fx.taipeiClose ?? fx.yahoo;
    chips.push(`
      <div class="index-chip">
        <div class="label">USD/TWD</div>
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
  const market = stock.market === "TW" ? "台股" : stock.market === "US" ? "美股" : stock.market || "";
  const rs =
    stock.rsVsIndexPp != null
      ? `<div class="metric"><div class="m-label">RS vs 指數</div><div class="m-val ${pctClass(stock.rsVsIndexPp)}">${fmtPct(stock.rsVsIndexPp)}</div></div>`
      : stock.priorClosePct != null
        ? `<div class="metric"><div class="m-label">前收漲幅</div><div class="m-val ${pctClass(stock.priorClosePct)}">${fmtPct(stock.priorClosePct)}</div></div>`
        : `<div class="metric"><div class="m-label">RS</div><div class="m-val">—</div></div>`;

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
        <span class="badge market">${escapeHtml(market)}</span>
        ${screenBadges(stock.screens)}
        ${smaBadges(stock)}
      </div>
      <div class="metrics">
        ${rs}
        <div class="metric"><div class="m-label">5 日</div><div class="m-val ${pctClass(stock.pct5d)}">${fmtPct(stock.pct5d)}</div></div>
        <div class="metric"><div class="m-label">約 1 月</div><div class="m-val ${pctClass(stock.pct1m)}">${fmtPct(stock.pct1m)}</div></div>
        <div class="metric"><div class="m-label">量比</div><div class="m-val">${stock.volRatio != null ? fmtNum(stock.volRatio, 2) + "×" : "—"}</div></div>
      </div>
      ${stock.business ? `<p class="card-text"><strong>本業</strong>　${escapeHtml(stock.business)}</p>` : ""}
      ${stock.why ? `<p class="card-text"><strong>理由</strong>　${escapeHtml(stock.why)}</p>` : ""}
      ${stock.risk ? `<p class="card-text risk"><strong>風險</strong>　${escapeHtml(stock.risk)}</p>` : ""}
    </article>
  `;
}

function tableRows(list) {
  return list
    .map((s) => {
      const rsVal = s.rsVsIndexPp ?? s.priorClosePct;
      const rsLabel = s.rsVsIndexPp != null ? fmtPct(s.rsVsIndexPp) : s.priorClosePct != null ? fmtPct(s.priorClosePct) : "—";
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
          ? `<span class="${pctClass(s.rsVsIndexPp)}">RS ${fmtPct(s.rsVsIndexPp)}</span>`
          : s.priorClosePct != null
            ? `<span class="${pctClass(s.priorClosePct)}">前收 ${fmtPct(s.priorClosePct)}</span>`
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
          <span class="${pctClass(s.pct5d)}">5d ${fmtPct(s.pct5d)}</span>
          <span class="${pctClass(s.pct1m)}">1m ${fmtPct(s.pct1m)}</span>
          <span>量比 ${s.volRatio != null ? fmtNum(s.volRatio, 2) + "×" : "—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${smaBadges(s)}${screenBadges(s.screens)}</div>
        ${s.why ? `<p class="lc-why">${escapeHtml(s.why)}</p>` : ""}
        ${s.risk && s.risk !== "—" ? `<p class="lc-why" style="color:#fbbf24">風險：${escapeHtml(s.risk)}</p>` : ""}
      </div>`;
    })
    .join("");
}

function renderListSection(id, title, list) {
  if (!list?.length) return "";
  return `
    <div class="panel ${id === "us" ? "active" : ""}" id="panel-${id}" role="tabpanel">
      <div class="table-wrap">
        <table class="stock-table">
          <thead>
            <tr>
              <th>代碼</th>
              <th>名稱</th>
              <th>價格</th>
              <th>日漲跌</th>
              <th>RS／前收</th>
              <th>5 日</th>
              <th>約 1 月</th>
              <th>量比</th>
              <th>均線</th>
              <th>篩選</th>
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
      <h2 class="section-title">ADR 平價｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">美股 ADR</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${fmtPrice(parity.tsm, "USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>換股比</span>　<strong>${escapeHtml(parity.adsRatio || "—")}</strong></div>
          <div class="row"><span>隱含匯率</span>　<strong>${parity.impliedUsdTaipeiFx != null ? fmtNum(parity.impliedUsdTaipeiFx, 2) : "—"}</strong></div>
          <div class="row"><span>溢價</span>　<strong class="${pctClass(prem)}">${fmtPct(prem)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">台股</div>
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
  const keys = Object.keys(method);
  const items = keys
    .map(
      (k) =>
        `<li><span class="screen-key">${escapeHtml(k)}</span><span>${escapeHtml(method[k])}</span></li>`
    )
    .join("");
  return `
    <footer class="method-footer">
      <h3>篩選方法說明</h3>
      <ul class="method-list">${items}</ul>
    </footer>
  `;
}

function renderApp(data) {
  const top5 = data.top5 || [];
  const us = data.us || [];
  const tw = data.tw || [];

  return `
    <header class="site-header">
      <div class="header-top">
        <h1>每日數學選股</h1>
        <div class="asof">資料時間 ${fmtAsOf(data.asOf)}</div>
      </div>
      <div class="disclaimer" role="note">${escapeHtml(data.disclaimer || "本站內容非投資建議。")}</div>
      ${data.timezoneNote ? `<p class="tz-note">${escapeHtml(data.timezoneNote)}</p>` : ""}
    </header>

    ${renderIndexStrip(data.indices || {})}

    <section class="section">
      <h2 class="section-title">今日 Top 5</h2>
      <div class="top5-grid">
        ${top5.map((s, i) => renderTopCard(s, i + 1)).join("")}
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">選股清單</h2>
      <div class="tabs" role="tablist">
        <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">美股（${us.length}）</button>
        <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">台股（${tw.length}）</button>
      </div>
      ${renderListSection("us", "美股", us)}
      ${renderListSection("tw", "台股", tw)}
    </section>

    ${renderParity(data.parity)}
    ${renderMethod(data.method)}

    <p class="site-footer">紅漲綠跌（台灣市場慣例）· 靜態站 · 資料來自 public/data/latest.json</p>
  `;
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

async function main() {
  const app = document.getElementById("app");
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    app.innerHTML = renderApp(data);
    bindTabs(app);
  } catch (err) {
    app.innerHTML = `<div class="error">無法載入資料（${escapeHtml(err.message)}）。請確認以靜態伺服器開啟（例如 npx serve dist），且 public/data/latest.json 存在。</div>`;
  }
}

main();
