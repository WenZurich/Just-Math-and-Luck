(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const v of l.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&n(v)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();const x="./data/latest.json";function c(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function r(t,s=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(s)}%`}function o(t,s=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString("zh-TW",{minimumFractionDigits:s,maximumFractionDigits:s})}function u(t,s){if(t==null||Number.isNaN(t))return"—";const e=s==="TWD"&&t>=100?0:2;return`${s==="USD"?"$":s==="TWD"?"NT$":""}${o(t,e)}`}function S(t){try{return new Date(t).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+"（台北）"}catch{return t}}function $(t){const s=t.aboveSma20?'<span class="badge sma-on">SMA20↑</span>':'<span class="badge sma-off">SMA20↓</span>',e=t.aboveSma50?'<span class="badge sma-on">SMA50↑</span>':'<span class="badge sma-off">SMA50↓</span>';return s+e}function f(t){return t!=null&&t.length?t.map(s=>`<span class="badge screen">${i(String(s))}</span>`).join(""):""}function i(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function T(t){var n,a,l,v,h;const s=[],e=(p,m,d)=>{if(!d)return;const b=d.incomplete,y=d.value!=null?o(d.value,(d.value>=1e3,2)):b?"資料不全":"—",P=d.dayPct!=null?`<div class="pct ${c(d.dayPct)}">${r(d.dayPct)}</div>`:"",w=d.session==="intraday"?" · 盤中":"";s.push(`
      <div class="index-chip ${b?"incomplete":""}">
        <div class="label">${i(m||d.name||p)}${w}</div>
        <div class="value">${y}</div>
        ${P}
      </div>
    `)};if(e("tw",((n=t.tw)==null?void 0:n.name)||"台灣加權 TAIEX",t.tw),e("otc",((a=t.otc)==null?void 0:a.name)||"櫃買",t.otc),e("spx",((l=t.spx)==null?void 0:l.name)||"S&P 500",t.spx),e("nasdaq",((v=t.nasdaq)==null?void 0:v.name)||"Nasdaq",t.nasdaq),e("sox",((h=t.sox)==null?void 0:h.name)||"SOX",t.sox),t.usdTwd){const p=t.usdTwd,m=p.taipeiClose??p.yahoo;s.push(`
      <div class="index-chip">
        <div class="label">USD/TWD</div>
        <div class="value">${o(m,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          台北收 ${p.taipeiClose!=null?o(p.taipeiClose,3):"—"}
          · Yahoo ${p.yahoo!=null?o(p.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${s.join("")}</div>`}function N(t,s){const e=t.market==="TW"?"台股":t.market==="US"?"美股":t.market||"",n=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">RS vs 指數</div><div class="m-val ${c(t.rsVsIndexPp)}">${r(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">前收漲幅</div><div class="m-val ${c(t.priorClosePct)}">${r(t.priorClosePct)}</div></div>`:'<div class="metric"><div class="m-label">RS</div><div class="m-val">—</div></div>';return`
    <article class="pick-card">
      <div class="rank">TOP ${s}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${i(t.ticker)}</div>
          <div class="name">${i(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${u(t.price,t.currency)}</div>
          <div class="day-pct ${c(t.dayPct)}">${r(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${i(e)}</span>
        ${f(t.screens)}
        ${$(t)}
      </div>
      <div class="metrics">
        ${n}
        <div class="metric"><div class="m-label">5 日</div><div class="m-val ${c(t.pct5d)}">${r(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">約 1 月</div><div class="m-val ${c(t.pct1m)}">${r(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">量比</div><div class="m-val">${t.volRatio!=null?o(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business?`<p class="card-text"><strong>本業</strong>　${i(t.business)}</p>`:""}
      ${t.why?`<p class="card-text"><strong>理由</strong>　${i(t.why)}</p>`:""}
      ${t.risk?`<p class="card-text risk"><strong>風險</strong>　${i(t.risk)}</p>`:""}
    </article>
  `}function A(t){return t.map(s=>{const e=s.rsVsIndexPp??s.priorClosePct,n=s.rsVsIndexPp!=null?r(s.rsVsIndexPp):s.priorClosePct!=null?r(s.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${i(s.ticker)}</span></td>
        <td class="name-cell">${i(s.name||"")}</td>
        <td class="num">${u(s.price,s.currency)}</td>
        <td class="num ${c(s.dayPct)}">${r(s.dayPct)}</td>
        <td class="num ${c(e)}">${n}</td>
        <td class="num ${c(s.pct5d)}">${r(s.pct5d)}</td>
        <td class="num ${c(s.pct1m)}">${r(s.pct1m)}</td>
        <td class="num">${s.volRatio!=null?o(s.volRatio,2)+"×":"—"}</td>
        <td>${$(s)}</td>
        <td>${f(s.screens)}</td>
        <td class="why-cell">${i(s.why||"")}</td>
      </tr>`}).join("")}function C(t){return t.map(s=>{const e=s.rsVsIndexPp!=null?`<span class="${c(s.rsVsIndexPp)}">RS ${r(s.rsVsIndexPp)}</span>`:s.priorClosePct!=null?`<span class="${c(s.priorClosePct)}">前收 ${r(s.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${i(s.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${i(s.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${u(s.price,s.currency)}</div>
            <div class="${c(s.dayPct)}" style="font-family:var(--mono);font-weight:600">${r(s.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${e}
          <span class="${c(s.pct5d)}">5d ${r(s.pct5d)}</span>
          <span class="${c(s.pct1m)}">1m ${r(s.pct1m)}</span>
          <span>量比 ${s.volRatio!=null?o(s.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${$(s)}${f(s.screens)}</div>
        ${s.why?`<p class="lc-why">${i(s.why)}</p>`:""}
        ${s.risk&&s.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">風險：${i(s.risk)}</p>`:""}
      </div>`}).join("")}function g(t,s,e){return e!=null&&e.length?`
    <div class="panel ${t==="us"?"active":""}" id="panel-${t}" role="tabpanel">
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
          <tbody>${A(e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${C(e)}</div>
    </div>
  `:""}function L(t){if(!t)return"";const s=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">ADR 平價｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">美股 ADR</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${u(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>換股比</span>　<strong>${i(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>隱含匯率</span>　<strong>${t.impliedUsdTaipeiFx!=null?o(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>溢價</span>　<strong class="${c(s)}">${r(s)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">台股</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${u(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${i(t.note)}</p>`:""}
      </div>
    </section>
  `}function R(t){return t?`
    <footer class="method-footer">
      <h3>篩選方法說明</h3>
      <ul class="method-list">${Object.keys(t).map(n=>`<li><span class="screen-key">${i(n)}</span><span>${i(t[n])}</span></li>`).join("")}</ul>
    </footer>
  `:""}function D(t){const s=t.top5||[],e=t.us||[],n=t.tw||[];return`
    <header class="site-header">
      <div class="header-top">
        <h1>每日數學選股</h1>
        <div class="asof">資料時間 ${S(t.asOf)}</div>
      </div>
      <div class="disclaimer" role="note">${i(t.disclaimer||"本站內容非投資建議。")}</div>
      ${t.timezoneNote?`<p class="tz-note">${i(t.timezoneNote)}</p>`:""}
    </header>

    ${T(t.indices||{})}

    <section class="section">
      <h2 class="section-title">今日 Top 5</h2>
      <div class="top5-grid">
        ${s.map((a,l)=>N(a,l+1)).join("")}
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">選股清單</h2>
      <div class="tabs" role="tablist">
        <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">美股（${e.length}）</button>
        <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">台股（${n.length}）</button>
      </div>
      ${g("us","美股",e)}
      ${g("tw","台股",n)}
    </section>

    ${L(t.parity)}
    ${R(t.method)}

    <p class="site-footer">紅漲綠跌（台灣市場慣例）· 靜態站 · 資料來自 public/data/latest.json</p>
  `}function I(t){const s=t.querySelectorAll(".tab-btn");s.forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.tab;s.forEach(a=>{const l=a.dataset.tab===n;a.classList.toggle("active",l),a.setAttribute("aria-selected",l?"true":"false")}),t.querySelectorAll(".panel").forEach(a=>{a.classList.toggle("active",a.id===`panel-${n}`)})})})}async function j(){const t=document.getElementById("app");try{const s=await fetch(x);if(!s.ok)throw new Error(`HTTP ${s.status}`);const e=await s.json();t.innerHTML=D(e),I(t)}catch(s){t.innerHTML=`<div class="error">無法載入資料（${i(s.message)}）。請確認以靜態伺服器開啟（例如 npx serve dist），且 public/data/latest.json 存在。</div>`}}j();
