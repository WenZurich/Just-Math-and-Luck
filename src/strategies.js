/**
 * XQ-style「策略選股（邏輯條件）」section.
 * Sidebar/chips by category · condition list · hit table/cards · export JSON.
 * Never invents metrics — renders whatever strategy-screener.json provides.
 */
import { term, escapeHtml } from "./glossary.js";

const DATA_URL = "./data/strategy-screener.json";

const CAT_LABEL = {
  精選: "精選",
  價量: "價量",
  籌碼: "籌碼",
  財務: "財務",
  大師: "大師",
  技術: "價量",
  綜合: "精選",
};

function fmtAsOf(iso) {
  try {
    return (
      new Date(iso).toLocaleString("zh-TW", {
        timeZone: "Asia/Taipei",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }) + "（台北）"
    );
  } catch {
    return iso || "—";
  }
}

function fmtNum(n, d = 2) {
  if (n == null || Number.isNaN(n)) return "—";
  return Number(n).toLocaleString("zh-TW", {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
}

function pctClass(n) {
  if (n == null || Number.isNaN(n)) return "flat";
  if (n > 0) return "up";
  if (n < 0) return "down";
  return "flat";
}

function fmtPct(n) {
  if (n == null || Number.isNaN(n)) return "—";
  const s = n > 0 ? "+" : "";
  return `${s}${n.toFixed(2)}%`;
}

function catOf(s) {
  return s.categoryGroup || CAT_LABEL[s.category] || s.category || "精選";
}

function linkJargon(text) {
  let t = escapeHtml(text);
  const pairs = [
    [/本益比|PE/g, "pe", "本益比"],
    [/營益率/g, "opMargin", "營益率"],
    [/毛利率/g, "grossMargin", "毛利率"],
    [/外資/g, "foreignInv", "外資"],
    [/投信/g, "trustInv", "投信"],
    [/自營商/g, "dealerInv", "自營商"],
    [/均線多頭/g, "maBull", "均線多頭"],
    [/RSI/g, "rsi", "RSI"],
    [/振幅/g, "amplitude", "振幅"],
    [/張/g, "zhang", "張"],
    [/SMA\d+/g, "maBull", null],
  ];
  // Apply glossary links carefully — only known whole words already escaped
  t = t.replace(/本益比/g, () => term("pe", "本益比"));
  t = t.replace(/營益率/g, () => term("opMargin", "營益率"));
  t = t.replace(/毛利率/g, () => term("grossMargin", "毛利率"));
  t = t.replace(/外資/g, () => term("foreignInv", "外資"));
  t = t.replace(/投信/g, () => term("trustInv", "投信"));
  t = t.replace(/自營商/g, () => term("dealerInv", "自營商"));
  t = t.replace(/均線多頭/g, () => term("maBull", "均線多頭"));
  t = t.replace(/RSI/g, () => term("rsi", "RSI"));
  t = t.replace(/振幅/g, () => term("amplitude", "振幅"));
  // 張 as unit — avoid over-linking every 張 in 條件
  t = t.replace(/(\d+)\s*張/g, (_, n) => `${n}${term("zhang", "張")}`);
  t = t.replace(/＞\s*(\d+)\s*張/g, (_, n) => `＞ ${n}${term("zhang", "張")}`);
  return t;
}

function statusBadge(st) {
  if (st === "skip") return `<span class="xq-cond-st skip">略過</span>`;
  if (st === "fail") return `<span class="xq-cond-st fail">未過</span>`;
  return `<span class="xq-cond-st pass">條件</span>`;
}

function metricColumns(strategyId) {
  switch (strategyId) {
    case "ma-bull":
      return [
        { key: "price", label: "價格", fmt: (m) => fmtNum(m.price) },
        { key: "dayPct", label: "日漲跌", fmt: (m) => fmtPct(m.dayPct), cls: (m) => pctClass(m.dayPct) },
        { key: "sma5", label: "SMA5", fmt: (m) => fmtNum(m.sma5) },
        { key: "sma10", label: "SMA10", fmt: (m) => fmtNum(m.sma10) },
        { key: "sma20", label: "SMA20", fmt: (m) => fmtNum(m.sma20) },
        { key: "sma60", label: "SMA60", fmt: (m) => fmtNum(m.sma60) },
        { key: "volRatioYday", label: "量比(昨)", fmt: (m) => (m.volRatioYday != null ? fmtNum(m.volRatioYday) + "×" : "—") },
        { key: "volTodayZhang", label: "今量(張)", fmt: (m) => (m.volTodayZhang != null ? fmtNum(m.volTodayZhang, 1) : m.volToday != null ? fmtNum(m.volToday, 0) : "—") },
      ];
    case "peter-lynch":
      return [
        { key: "pe", label: term("pe", "本益比"), fmt: (m) => fmtNum(m.pe, 2), rawLabel: true },
        { key: "price", label: "價格", fmt: (m) => fmtNum(m.price) },
        { key: "avgVol5Zhang", label: "5日均量(張)", fmt: (m) => (m.avgVol5Zhang != null ? fmtNum(m.avgVol5Zhang, 1) : m.avgVol5Shares != null ? fmtNum(m.avgVol5Shares, 0) + "股" : "—") },
        { key: "revenueGrowth", label: "營收成長%", fmt: (m) => (m.revenueGrowth != null ? fmtNum(m.revenueGrowth, 1) : "—") },
        { key: "earningsGrowth", label: "獲利成長%", fmt: (m) => (m.earningsGrowth != null ? fmtNum(m.earningsGrowth, 1) : "—") },
        { key: "debtToEquity", label: "負債權益", fmt: (m) => (m.debtToEquity != null ? fmtNum(m.debtToEquity, 2) : "—") },
        { key: "dayPct", label: "日漲跌", fmt: (m) => fmtPct(m.dayPct), cls: (m) => pctClass(m.dayPct) },
      ];
    case "inst-sync":
      return [
        { key: "foreignNet1dZhang", label: term("foreignInv", "外資") + "1日(張)", fmt: (m) => fmtNum(m.foreignNet1dZhang, 1), rawLabel: true },
        { key: "trustNet1dZhang", label: term("trustInv", "投信") + "1日(張)", fmt: (m) => fmtNum(m.trustNet1dZhang, 1), rawLabel: true },
        { key: "dealerNet1dZhang", label: term("dealerInv", "自營商") + "1日(張)", fmt: (m) => fmtNum(m.dealerNet1dZhang, 1), rawLabel: true },
        { key: "instNet5dZhang", label: "法人5日(張)", fmt: (m) => fmtNum(m.instNet5dZhang, 1) },
      ];
    case "ultra-short":
      return [
        { key: "price", label: "價格", fmt: (m) => fmtNum(m.price) },
        { key: "dayPct", label: "日漲跌", fmt: (m) => fmtPct(m.dayPct), cls: (m) => pctClass(m.dayPct) },
        { key: "rsi", label: term("rsi", "RSI"), fmt: (m) => fmtNum(m.rsi, 2), rawLabel: true },
        { key: "rsiPrev", label: "RSI昨", fmt: (m) => fmtNum(m.rsiPrev, 2) },
        { key: "ampPct", label: term("amplitude", "振幅"), fmt: (m) => (m.ampPct != null ? fmtNum(m.ampPct, 2) + "%" : "—"), rawLabel: true },
        { key: "avgVol5Zhang", label: "5日均量(張)", fmt: (m) => (m.avgVol5Zhang != null ? fmtNum(m.avgVol5Zhang, 1) : "—") },
      ];

    case "michael-price":
      return [
        { key: "pb", label: "P/B", fmt: (m) => fmtNum(m.pb, 2) },
        { key: "directorHoldPct", label: "董監持股%", fmt: (m) => (m.directorHoldPct != null ? fmtNum(m.directorHoldPct, 1) + "%" : "—") },
        { key: "debtRatioPct", label: "負債比%", fmt: (m) => (m.debtRatioPct != null ? fmtNum(m.debtRatioPct, 1) + "%" : "—") },
        { key: "price", label: "價格", fmt: (m) => fmtNum(m.price) },
        { key: "avgVol5Zhang", label: "5日均量(張)", fmt: (m) => fmtNum(m.avgVol5Zhang, 1) },
      ];
    case "michael-sivy":
    case "mark-minervini":
      return [
        { key: "pe", label: term("pe", "本益比"), fmt: (m) => fmtNum(m.pe, 2), rawLabel: true },
        { key: "roe4qPct", label: "4季ROE合計%", fmt: (m) => (m.roe4qPct != null ? fmtNum(m.roe4qPct, 1) + "%" : "—") },
        { key: "debtRatioPct", label: "負債比%", fmt: (m) => (m.debtRatioPct != null ? fmtNum(m.debtRatioPct, 1) + "%" : "—") },
        { key: "revGrowth3y", label: "3年營收成長%", fmt: (m) => (Array.isArray(m.revGrowth3y) ? m.revGrowth3y.map((x) => (x != null ? x + "%" : "—")).join(" → ") : "—") },
        { key: "price", label: "價格", fmt: (m) => fmtNum(m.price) },
        { key: "avgVol5Zhang", label: "5日均量(張)", fmt: (m) => fmtNum(m.avgVol5Zhang, 1) },
      ];
    case "kenneth-fisher":
      return [
        { key: "revGrowth5yAvgPct", label: "5年營收成長均%", fmt: (m) => (m.revGrowth5yAvgPct != null ? fmtNum(m.revGrowth5yAvgPct, 1) + "%" : "—") },
        { key: "pretaxGrowth5yAvgPct", label: "5年稅前成長均%", fmt: (m) => (m.pretaxGrowth5yAvgPct != null ? fmtNum(m.pretaxGrowth5yAvgPct, 1) + "%" : "—") },
        { key: "debtRatioPct", label: "負債比%", fmt: (m) => (m.debtRatioPct != null ? fmtNum(m.debtRatioPct, 1) + "%" : "—") },
        { key: "price", label: "價格", fmt: (m) => fmtNum(m.price) },
        { key: "avgVol5Zhang", label: "5日均量(張)", fmt: (m) => fmtNum(m.avgVol5Zhang, 1) },
      ];
    case "michael-murphy":
      return [
        { key: "roe4qPct", label: "4季ROE合計%", fmt: (m) => (m.roe4qPct != null ? fmtNum(m.roe4qPct, 1) + "%" : "—") },
        { key: "opMargin1qPct", label: "近季營益率%", fmt: (m) => (m.opMargin1qPct != null ? fmtNum(m.opMargin1qPct, 1) + "%" : "—") },
        { key: "opMargin3y", label: "3年營益率%", fmt: (m) => (Array.isArray(m.opMargin3y) ? m.opMargin3y.map((x) => (x != null ? x + "%" : "—")).join(" → ") : "—") },
        { key: "revGrowth3yAvgPct", label: "3年營收成長均%", fmt: (m) => (m.revGrowth3yAvgPct != null ? fmtNum(m.revGrowth3yAvgPct, 1) + "%" : "—") },
        { key: "price", label: "價格", fmt: (m) => fmtNum(m.price) },
      ];
    case "benjamin-graham":
      return [
        { key: "pe", label: term("pe", "本益比"), fmt: (m) => fmtNum(m.pe, 2), rawLabel: true },
        { key: "pb", label: "P/B", fmt: (m) => fmtNum(m.pb, 2) },
        { key: "debtRatioPct", label: "負債比%", fmt: (m) => (m.debtRatioPct != null ? fmtNum(m.debtRatioPct, 1) + "%" : "—") },
        { key: "price", label: "價格", fmt: (m) => fmtNum(m.price) },
        { key: "avgVol5Zhang", label: "5日均量(張)", fmt: (m) => fmtNum(m.avgVol5Zhang, 1) },
      ];
    case "warren-buffett":
      return [
        { key: "roe4qPct", label: "4季ROE合計%", fmt: (m) => (m.roe4qPct != null ? fmtNum(m.roe4qPct, 1) + "%" : "—") },
        { key: "opMargin1qPct", label: "近季營益率%", fmt: (m) => (m.opMargin1qPct != null ? fmtNum(m.opMargin1qPct, 1) + "%" : "—") },
        { key: "debtRatioPct", label: "負債比%", fmt: (m) => (m.debtRatioPct != null ? fmtNum(m.debtRatioPct, 1) + "%" : "—") },
        { key: "price", label: "價格", fmt: (m) => fmtNum(m.price) },
        { key: "avgVol5Zhang", label: "5日均量(張)", fmt: (m) => fmtNum(m.avgVol5Zhang, 1) },
      ];
    case "james-oshaughnessy":
      return [
        { key: "pe", label: term("pe", "本益比"), fmt: (m) => fmtNum(m.pe, 2), rawLabel: true },
        { key: "roe4qPct", label: "4季ROE合計%", fmt: (m) => (m.roe4qPct != null ? fmtNum(m.roe4qPct, 1) + "%" : "—") },
        { key: "roeGrowthPct", label: "ROE成長%", fmt: (m) => (m.roeGrowthPct != null ? fmtNum(m.roeGrowthPct, 1) + "%" : "—") },
        { key: "epsGrowthStreak", label: "EPS連季>10%", fmt: (m) => (m.epsGrowthStreak != null ? String(m.epsGrowthStreak) : "—") },
        { key: "price", label: "價格", fmt: (m) => fmtNum(m.price) },
        { key: "avgVol5Zhang", label: "5日均量(張)", fmt: (m) => fmtNum(m.avgVol5Zhang, 1) },
      ];

    case "margin-up":
      return [
        { key: "seasons", label: "季別", fmt: (m) => (Array.isArray(m.seasons) ? m.seasons.join(" → ") : "—") },
        { key: "opMargins", label: term("opMargin", "營益率"), fmt: (m) => (Array.isArray(m.opMargins) ? m.opMargins.map((x) => (x != null ? x + "%" : "—")).join(" → ") : "—"), rawLabel: true },
        { key: "grossMargins", label: term("grossMargin", "毛利率"), fmt: (m) => (Array.isArray(m.grossMargins) ? m.grossMargins.map((x) => (x != null ? x + "%" : "—")).join(" → ") : "—"), rawLabel: true },
        { key: "mode", label: "條件", fmt: (m) => m.mode || "—" },
        { key: "source", label: "來源", fmt: (m) => m.source || "—" },
      ];
    default:
      return [{ key: "price", label: "價格", fmt: (m) => fmtNum(m.price) }];
  }
}

function renderConditions(strategy) {
  const list = (strategy.conditions || [])
    .map((c, i) => {
      const st = c.status || "pass";
      return `<li class="xq-cond ${st}">
        <span class="xq-cond-num">${i + 1}</span>
        <span class="xq-cond-text">${linkJargon(c.text)}</span>
        ${statusBadge(st)}
      </li>`;
    })
    .join("");
  return `<ol class="xq-cond-list">${list}</ol>`;
}

function renderHits(strategy) {
  const hits = strategy.hits || [];
  if (strategy.incomplete && !hits.length) {
    const label = escapeHtml(strategy.incompleteLabel || "資料不足");
    const blockers = (strategy.blockers || [])
      .map((b) => `<li>${escapeHtml(b)}</li>`)
      .join("");
    return `<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${label}</div>
      <ul>${blockers}</ul>
      <p class="xq-hint">條件仍列出供對照；公開資料齊了會自動出命中，絕不快取假數字。</p>
    </div>`;
  }
  if (!hits.length) {
    const blockers = (strategy.blockers || [])
      .map((b) => `<li>${escapeHtml(b)}</li>`)
      .join("");
    return `<div class="xq-empty">
      <p>今日無命中（規則有跑，只是沒有股票同時過關）。</p>
      ${blockers ? `<ul>${blockers}</ul>` : ""}
    </div>`;
  }

  const cols = metricColumns(strategy.id);
  const head = cols
    .map((c) => `<th>${c.rawLabel ? c.label : escapeHtml(c.label)}</th>`)
    .join("");
  const body = hits
    .map((h) => {
      const m = h.metrics || {};
      const tds = cols
        .map((c) => {
          const cls = c.cls ? c.cls(m) : "";
          return `<td class="num ${cls}">${c.fmt(m)}</td>`;
        })
        .join("");
      return `<tr>
        <td><span class="ticker">${escapeHtml(h.ticker)}</span></td>
        <td class="name-cell">${escapeHtml(h.name || "")}</td>
        <td><span class="badge market">${escapeHtml(h.market || "")}</span></td>
        ${tds}
      </tr>`;
    })
    .join("");

  const cards = hits
    .map((h) => {
      const m = h.metrics || {};
      const metrics = cols
        .map((c) => {
          const cls = c.cls ? c.cls(m) : "";
          return `<div class="xq-m"><span class="xq-ml">${c.rawLabel ? c.label : escapeHtml(c.label)}</span><span class="xq-mv ${cls}">${c.fmt(m)}</span></div>`;
        })
        .join("");
      return `<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${escapeHtml(h.ticker)}</div>
            <div class="name">${escapeHtml(h.name || "")}</div>
          </div>
          <span class="badge market">${escapeHtml(h.market || "")}</span>
        </div>
        <div class="xq-hit-metrics">${metrics}</div>
      </article>`;
    })
    .join("");

  return `
    <div class="table-wrap xq-table-wrap">
      <table class="stock-table xq-table">
        <thead><tr>
          <th>代碼</th><th>名稱</th><th>市場</th>${head}
        </tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>
    <div class="xq-mobile-cards">${cards}</div>
  `;
}

function renderStrategyPanel(strategy, data) {
  const hitN = (strategy.hits || []).length;
  const unchecked = (strategy.unchecked || [])
    .map((u) => `<li class="xq-unchecked">${escapeHtml(u)}</li>`)
    .join("");
  const notes = (strategy.notes || [])
    .map((n) => `<li>${escapeHtml(n)}</li>`)
    .join("");
  const blockers =
    !strategy.incomplete && (strategy.blockers || []).length
      ? `<ul class="xq-blockers">${(strategy.blockers || [])
          .map((b) => `<li>${escapeHtml(b)}</li>`)
          .join("")}</ul>`
      : "";

  return `
    <div class="xq-panel" data-strategy-id="${escapeHtml(strategy.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${escapeHtml(strategy.name)}</h3>
          <div class="xq-tags">
            ${(strategy.xqTags || [strategy.category])
              .map((t) => `<span class="xq-tag">${escapeHtml(t)}</span>`)
              .join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="命中檔數">
          <span class="xq-hit-num">${hitN}</span>
          <span class="xq-hit-label">檔命中</span>
        </div>
      </div>
      ${strategy.description ? `<p class="xq-desc">${escapeHtml(strategy.description)}</p>` : ""}
      <div class="xq-meta-row">
        <span>執行日 ${escapeHtml(data.sessionDate || "—")}</span>
        <span>資料 ${fmtAsOf(data.asOf)}</span>
        <span>宇宙 台${data.universe?.tw ?? "—"}／美${data.universe?.us ?? "—"}</span>
      </div>
      <h4 class="xq-sub">邏輯條件（明示、可對照）</h4>
      ${renderConditions(strategy)}
      ${unchecked ? `<ul class="xq-unchecked-list">${unchecked}</ul>` : ""}
      ${notes ? `<ul class="xq-notes">${notes}</ul>` : ""}
      ${blockers}
      <div class="xq-toolbar">
        <h4 class="xq-sub">篩選結果</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>複製 JSON</button>
          <button type="button" class="xq-btn" data-xq-csv>匯出此策略 CSV</button>
          <a class="xq-btn xq-btn-link" href="${DATA_URL}" download="strategy-screener.json">匯出 JSON</a>
        </div>
      </div>
      ${renderHits(strategy)}
    </div>
  `;
}

export function renderStrategiesSection(placeholder = true) {
  return `
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${term("strategyScreen", "策略選股（邏輯條件）")}</h2>
      <p class="glossary-intro">
        介面參考 ${term("xqLike", "XQ／選股軟體")} 的策略切換：左側分類 → 條件清單 → 命中表。
        用公開行情＋證交所公開籌碼做<strong>明示條件</strong>篩選，<strong>不是</strong>券商專有資料庫，也不保證與商業軟體一致。
      </p>
      <div id="xq-root" class="xq-root" aria-label="策略選股">
        ${
          placeholder
            ? `<p class="xq-loading">載入策略結果中…</p>`
            : ""
        }
      </div>
    </section>
  `;
}

export async function loadStrategyScreener(url = DATA_URL) {
  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) throw new Error(`strategy-screener ${res.status}`);
  return res.json();
}

export function mountStrategies(selector, data) {
  const root = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!root || !data?.strategies?.length) {
    if (root) {
      root.innerHTML = `<div class="xq-empty"><p>尚無策略資料。請執行 <code>npm run strategies</code>。</p></div>`;
    }
    return;
  }

  const order = data.categoryOrder || ["精選", "價量", "籌碼", "財務", "大師"];
  const byCat = new Map(order.map((c) => [c, []]));
  for (const s of data.strategies) {
    const c = catOf(s);
    if (!byCat.has(c)) byCat.set(c, []);
    byCat.get(c).push(s);
  }

  const first = data.strategies[0];
  const chips = order
    .map((cat) => {
      const list = byCat.get(cat) || [];
      if (!list.length) return "";
      return `<div class="xq-cat-block">
        <div class="xq-cat-label">${escapeHtml(cat)}</div>
        <div class="xq-chip-row">
          ${list
            .map((s) => {
              const n = (s.hits || []).length;
              const inc = s.incomplete ? " incomplete" : "";
              const active = s.id === first.id ? " active" : "";
              return `<button type="button" class="xq-chip${active}${inc}" data-xq-id="${escapeHtml(
                s.id
              )}" aria-pressed="${s.id === first.id}">
                <span class="xq-chip-name">${escapeHtml(s.name)}</span>
                <span class="xq-chip-n">${s.incomplete ? "不足" : `共${n}檔`}</span>
              </button>`;
            })
            .join("")}
        </div>
      </div>`;
    })
    .join("");

  const sideNav = data.strategies
    .map((s) => {
      const n = (s.hits || []).length;
      const active = s.id === first.id ? " active" : "";
      const inc = s.incomplete ? " incomplete" : "";
      return `<button type="button" class="xq-side-item${active}${inc}" data-xq-id="${escapeHtml(
        s.id
      )}">
        <span>${escapeHtml(s.name)}</span>
        <span class="xq-side-n">${s.incomplete ? "不足" : `共${n}檔`}</span>
      </button>`;
    })
    .join("");

  root.innerHTML = `
    <div class="xq-layout">
      <aside class="xq-sidebar" aria-label="策略列表">
        <div class="xq-side-title">策略</div>
        ${sideNav}
      </aside>
      <div class="xq-main">
        <div class="xq-chips" aria-label="策略分類">${chips}</div>
        <div class="xq-panel-host">${renderStrategyPanel(first, data)}</div>
      </div>
    </div>
    <p class="xq-foot">${escapeHtml(data.disclaimer || "")}
      ${data.exportNote ? ` · ${escapeHtml(data.exportNote)}` : ""}
    </p>
  `;

  const host = root.querySelector(".xq-panel-host");
  const activate = (id) => {
    const s = data.strategies.find((x) => x.id === id);
    if (!s || !host) return;
    host.innerHTML = renderStrategyPanel(s, data);
    root.querySelectorAll("[data-xq-id]").forEach((el) => {
      const on = el.getAttribute("data-xq-id") === id;
      el.classList.toggle("active", on);
      if (el.tagName === "BUTTON") el.setAttribute("aria-pressed", on ? "true" : "false");
    });
    bindCopy(host, data);
    // re-bind glossary in panel
    host.querySelectorAll("a.term").forEach((a) => {
      a.addEventListener("click", (e) => {
        const tid = a.getAttribute("data-term");
        const target = document.getElementById(`term-${tid}`);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.classList.add("flash");
        setTimeout(() => target.classList.remove("flash"), 1600);
      });
    });
  };

  root.querySelectorAll("[data-xq-id]").forEach((btn) => {
    btn.addEventListener("click", () => activate(btn.getAttribute("data-xq-id")));
  });
  bindCopy(host, data);
}

function hitsToCsv(strategy) {
  const hits = strategy.hits || [];
  if (!hits.length) return "";
  const metricKeys = [
    ...new Set(hits.flatMap((h) => Object.keys(h.metrics || {}))),
  ];
  const headers = ["ticker", "name", "market", "ohlcvBarDate", ...metricKeys];
  const esc = (v) => {
    const s = v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = hits.map((h) => {
    const m = h.metrics || {};
    return [
      h.ticker,
      h.name,
      h.market,
      h.ohlcvBarDate || "",
      ...metricKeys.map((k) => m[k]),
    ]
      .map(esc)
      .join(",");
  });
  return [headers.join(","), ...rows].join("\n");
}

function downloadText(filename, text, mime) {
  const blob = new Blob([text], { type: mime || "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

function bindCopy(host, data) {
  host?.querySelector("[data-xq-copy]")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      const btn = host.querySelector("[data-xq-copy]");
      if (btn) {
        const old = btn.textContent;
        btn.textContent = "已複製";
        setTimeout(() => (btn.textContent = old), 1200);
      }
    } catch {
      /* ignore */
    }
  });
  host?.querySelector("[data-xq-csv]")?.addEventListener("click", () => {
    const id = host.querySelector(".xq-panel")?.getAttribute("data-strategy-id");
    const s = data.strategies.find((x) => x.id === id);
    if (!s) return;
    const csv = hitsToCsv(s);
    if (!csv) {
      alert("此策略今日無命中列可匯出");
      return;
    }
    downloadText(`${s.id}-hits.csv`, "\uFEFF" + csv, "text/csv;charset=utf-8");
  });
}

export async function initStrategies(selector = "#xq-root") {
  try {
    const data = await loadStrategyScreener();
    mountStrategies(selector, data);
    return { ok: true, data };
  } catch (err) {
    const root = document.querySelector(selector);
    if (root) {
      root.innerHTML = `<div class="xq-empty"><p>無法載入策略選股（${escapeHtml(
        err.message
      )}）。請確認已執行 <code>npm run strategies</code>。</p></div>`;
    }
    return { ok: false, error: err };
  }
}
