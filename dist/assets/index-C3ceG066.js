(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const x={dayPct:{title:"日漲跌",plain:"就是「今天這支股票的價錢，比起昨天收盤時，漲了還是跌了多少」。用百分比表示，比較好跟其他股票比。",example:"昨天收盤 100 元，今天收盤 103 元，日漲跌就是 +3%。像考試分數從 100 變成 103，多了 3 分。"},pct5d:{title:"5 日漲跌",plain:"看最近大約一週（5 個交易日）這支股票總共漲了或跌了多少，不是只看今天。",example:"禮拜一 100 元，到這禮拜五變成 110 元，5 日大約就是 +10%。像一週零用錢從 100 變成 110。"},pct1m:{title:"約 1 月漲跌",plain:"看最近大約一個月（常算 21 個交易日）這支股票漲跌多少，用來看比較長一點的趨勢。",example:"一個月前 200 元，現在 220 元，約 1 月就是 +10%。像身高一個月長高一點，要看整段變化。"},rs:{title:"相對強度（RS）",plain:"把「這支股票今天的漲跌」跟「整個市場大盤今天的漲跌」相減。正的表示它比大盤更強（人家跌它比較不跌，或人家漲它漲更多）。",example:"大盤今天 −1%，某股票 +2%，RS 大約是 +3 個百分點。像全班平均考 60 分，你考 80 分，你比班級平均強。"},priorClose:{title:"前收漲幅",plain:"用「上一個完整交易日收盤價」算出來的漲跌幅度。美股若還在盤中，有時會另外標前一天收盤的表現。",example:"週一收盤比週五收盤漲了 13%，就說前收漲幅約 +13%。像昨天整場比賽的最終比分，不是今天還沒打完的分數。"},volRatio:{title:"量比",plain:"今天成交的「張數／股數」是不是比平常多。算法大概是：今天成交量 ÷ 最近約 20 天平均成交量。數字越大，表示今天很多人在買賣。",example:"平常每天成交 100 萬股，今天 300 萬股，量比約 3 倍。像平常教室很安靜，今天突然擠滿人在討論。"},sma20:{title:"SMA20（20 日均線）",plain:"把最近 20 個交易日的收盤價加起來除以 20，得到一條「平滑後的平均價」。股價在均線上面，常被看成最近偏強；在下面常被看成偏弱。",example:"最近 20 天平均價 50 元，今天股價 55 元，就是站上 SMA20。像你的體重比最近 20 天平均還高一點。"},sma50:{title:"SMA50（50 日均線）",plain:"跟 SMA20 一樣是平均價，但用更長的 50 個交易日，看比較中期的方向。",example:"50 天平均 100 元，現在股價 90 元，就是在 SMA50 下面。像月考平均，比段考平均更能看出一陣子的狀況。"},screenA:{title:"篩選 A（動能／相對強度）",plain:"用數學檢查：這支股票最近是不是漲得比大盤好、短中期動能如何、有沒有站上均線。通過的才比較容易被挑進名單。",example:"某股今天比大盤強很多，又站上 SMA20／SMA50，就可能通過篩選 A。像短跑又比同學快、成績又在平均之上。"},screenB:{title:"篩選 B（量能）",plain:"檢查今天成交量是不是明顯比平常大（量比偏高）。量很大有時代表很多人注意，但也可能波動更大。",example:"量比 14 倍表示今天成交大約是平常的 14 倍。像學校平時很少人買某樣零食，今天突然大排長龍。"},screenC:{title:"篩選 C（估值）",plain:"想用本益比之類「貴不貴」的數字來幫忙選股。如果當天抓不到可靠資料，這個篩選就會跳過，避免亂填數字。",example:"本益比像「用幾年賺的錢才回本」的粗略尺。沒有尺就先不量，不要瞎猜。"},taiex:{title:"台灣加權（TAIEX）",plain:"把台灣上市很多股票的表現加總做成一個大分數，用來代表「台股整體」今天大概漲還是跌。",example:"加權今天 −0.77%，表示整體台股平均大概跌了一點點。像全校平均分數今天比昨天低一點。"},otc:{title:"櫃買",plain:"台灣「上櫃」公司的市場（比較多中小型公司）。櫃買指數用來看這群股票整體漲跌。",example:"上市像大學部大隊，櫃買像另一個年級隊。兩邊可以分開看今天誰比較強。"},spx:{title:"S&P 500",plain:"美國 500 家大型公司組成的指數，常被拿來代表「美股大盤」。",example:"S&P 500 跌 0.5%，常被說成美股大盤今天偏弱。像美國大型公司班級的平均分數。"},nasdaq:{title:"Nasdaq（那斯達克）",plain:"美國一個重要股市指數，裡面很多科技公司，常被用來觀察科技股整體氣氛。",example:"Nasdaq 大跌時，很多科技股也可能一起抖。像科技社社團活動特別熱絡或特別冷清的溫度計。"},sox:{title:"SOX（費半）",plain:"美國半導體（做晶片）公司的指數。半導體好不好，常常影響台積電供應鏈的氣氛。",example:"SOX 大跌，常常代表晶片相關股票今天整體承壓。像「晶片班」今天考試普遍不理想。"},usdtwd:{title:"USD/TWD（美金兌台幣）",plain:"1 美元可以換多少台幣。數字變大，常表示台幣變弱（同樣 1 美元換到更多台幣）；數字變小則相反。",example:"匯率 32，表示 1 美元約換 32 元台幣。你要買 10 美元零食，大約要付 320 元台幣。"},adr:{title:"ADR",plain:"美國存託憑證：讓投資人在美國市場買賣「外國公司」的股票憑證。例如台積電在美國有 TSM 這個 ADR。",example:"你在美國超市買「台灣零食的美國包裝版」。東西本質相近，但包裝市場不同，價錢也可能不太一樣。"},parity:{title:"平價／隱含價",plain:"用台股價格、換股比例和匯率，算出「如果完全公平換算，ADR 大概該是多少美元」。拿來跟實際 ADR 價比較。",example:"5 股台積電 ÷ 匯率，算出 ADR 理論價約 374 美元。像用匯率把台幣玩具價換算成美元標價。"},premium:{title:"溢價",plain:"實際市價比「換算後的理論價」還貴多少。正的溢價表示買 ADR 比照公式換算更貴；負的則比較便宜（折價）。",example:"理論 374 美元，市價 416 美元，溢價大約一成多。像同樣便當，車站賣得比學校社辦貴。"},adsRatio:{title:"換股比（ADS 比例）",plain:"一張 ADR 對應幾股本地普通股。台積電常見是 1 股 ADR＝5 股台灣普通股，但要以官方公告為準。",example:"比例 5:1 表示 1 個美國存託憑證背後約有 5 股台股。像 1 盒積木裡固定裝 5 小塊。"},limitUp:{title:"漲停",plain:"台股對一天最多能漲多少有限制（一般股票常見約 10%）。碰到上限就叫漲停，常常買不到或很難成交。",example:"股票從 100 元漲到約 110 元就可能漲停。像遊戲一天經驗值有上限，滿了就不能再加。"},momentum:{title:"動能",plain:"看價格最近是不是繼續往同一方向跑（例如連續幾天偏強）。這是數學觀察，不是保證明天還會這樣。",example:"球正在往前滾而且愈滾愈快，就說動能強。但滾到一半也可能停下或轉向。"},ticker:{title:"股票代碼（Ticker）",plain:"每支股票的簡短代號，方便電腦與市場辨認。美股多用英文字母，台股多用數字。",example:"AAPL 是蘋果，2330 是台積電。像學校學號，用來點名不會搞混。"},index:{title:"指數",plain:"把很多股票包成一個「總成績單」，用來代表某一市場或產業整體表現。",example:"加權指數、S&P 500 都是指數。像全班平均分數，不是某一個同學的分數。"},screening:{title:"數學選股／篩選",plain:"用事先講好的計算規則（漲跌、跟大盤比、均線、成交量等）自動挑出通過條件的股票，而不是靠感覺。",example:"規則：要比大盤強、量比要高。通過的進名單。像用尺量身高，過線的才能進籃球隊候補。"},notAdvice:{title:"不是投資建議",plain:"這個網站只是把公開行情算出來給你看。它不會保證賺錢，也不能代替你自己做決定。",example:"像天氣預報說可能下雨，你仍要自己決定要不要帶傘。看完數字也不等於一定要買。"},intraday:{title:"盤中",plain:"股市還在交易、價格還會一直變動的時候。跟「收盤」（今天交易結束後的最終價）不一樣。",example:"考試還沒結束，分數還可能改；收盤像交卷後的最終分數。"},twStock:{title:"台股",plain:"在台灣證券市場交易的股票，價錢多用新台幣計價。",example:"2330 台積電、2308 台達電都是台股。"},usStock:{title:"美股",plain:"在美國市場交易的股票，價錢多用美元計價。",example:"AAPL、NVDA、CRWD 都是美股。"}};function s(t,e){const a=x[t],n=e??(a==null?void 0:a.title)??t;return a?`<a class="term" href="#term-${l(t)}" data-term="${l(t)}">${l(n)}</a>`:l(n)}function l(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function R(){return`
    <section class="section glossary-section" id="glossary">
      <h2 class="section-title">名詞小辭典（點頁面上的藍字會跳到這裡）</h2>
      <p class="glossary-intro">這裡用最白話的方式解釋網站出現的詞。看不懂就點連結，再看例子。</p>
      <div class="glossary-grid">${Object.entries(x).map(([e,a])=>`
      <article class="glossary-item" id="term-${l(e)}">
        <h3>${l(a.title)}</h3>
        <p class="g-plain">${l(a.plain)}</p>
        <p class="g-example"><strong>例子：</strong>${l(a.example)}</p>
      </article>`).join("")}</div>
    </section>
  `}function T(t){t.querySelectorAll("a.term").forEach(e=>{e.addEventListener("click",a=>{const n=e.getAttribute("data-term"),i=document.getElementById(`term-${n}`);i&&(a.preventDefault(),i.scrollIntoView({behavior:"smooth",block:"start"}),i.classList.add("flash"),setTimeout(()=>i.classList.remove("flash"),1600))})})}const C="./data/latest.json";function o(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function c(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function d(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString("zh-TW",{minimumFractionDigits:e,maximumFractionDigits:e})}function v(t,e){if(t==null||Number.isNaN(t))return"—";const a=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${d(t,a)}`}function D(t){try{return new Date(t).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+"（台北）"}catch{return t}}function f(t){const e=t.aboveSma20?`<span class="badge sma-on">${s("sma20","SMA20↑")}</span>`:`<span class="badge sma-off">${s("sma20","SMA20↓")}</span>`,a=t.aboveSma50?`<span class="badge sma-on">${s("sma50","SMA50↑")}</span>`:`<span class="badge sma-off">${s("sma50","SMA50↓")}</span>`;return e+a}function h(t){return t!=null&&t.length?t.map(e=>{const a=String(e);return a==="A"?`<span class="badge screen">${s("screenA","A")}</span>`:a==="B"?`<span class="badge screen">${s("screenB","B")}</span>`:a==="C"?`<span class="badge screen">${s("screenC","C")}</span>`:a==="observe"?'<span class="badge screen">觀察</span>':`<span class="badge screen">${l(a)}</span>`}).join(""):""}function N(t){var n,i,r,u,g;const e=[],a=(m,$,p)=>{if(!p)return;const b=p.incomplete,A=p.value!=null?d(p.value,2):b?"資料不全":"—",P=p.dayPct!=null?`<div class="pct ${o(p.dayPct)}">${c(p.dayPct)}</div>`:"",w=p.session==="intraday"?` · ${s("intraday","盤中")}`:"";e.push(`
      <div class="index-chip ${b?"incomplete":""}">
        <div class="label">${$}${w}</div>
        <div class="value">${A}</div>
        ${P}
      </div>
    `)};if(a("tw",s("taiex",((n=t.tw)==null?void 0:n.name)||"台灣加權 TAIEX"),t.tw),a("otc",s("otc",((i=t.otc)==null?void 0:i.name)||"櫃買"),t.otc),a("spx",s("spx",((r=t.spx)==null?void 0:r.name)||"S&P 500"),t.spx),a("nasdaq",s("nasdaq",((u=t.nasdaq)==null?void 0:u.name)||"Nasdaq"),t.nasdaq),a("sox",s("sox",((g=t.sox)==null?void 0:g.name)||"SOX"),t.sox),t.usdTwd){const m=t.usdTwd,$=m.taipeiClose??m.yahoo;e.push(`
      <div class="index-chip">
        <div class="label">${s("usdtwd","USD/TWD")}</div>
        <div class="value">${d($,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          台北收 ${m.taipeiClose!=null?d(m.taipeiClose,3):"—"}
          · Yahoo ${m.yahoo!=null?d(m.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${e.join("")}</div>`}function L(t,e){const a=t.market==="TW"?s("twStock","台股"):t.market==="US"?s("usStock","美股"):l(t.market||""),n=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${s("rs","RS vs 指數")}</div><div class="m-val ${o(t.rsVsIndexPp)}">${c(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">${s("priorClose","前收漲幅")}</div><div class="m-val ${o(t.priorClosePct)}">${c(t.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${s("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${e}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${s("ticker",t.ticker)}</div>
          <div class="name">${l(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${v(t.price,t.currency)}</div>
          <div class="day-pct ${o(t.dayPct)}">${c(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${a}</span>
        ${h(t.screens)}
        ${f(t)}
      </div>
      <div class="metrics">
        ${n}
        <div class="metric"><div class="m-label">${s("pct5d","5 日")}</div><div class="m-val ${o(t.pct5d)}">${c(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${s("pct1m","約 1 月")}</div><div class="m-val ${o(t.pct1m)}">${c(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${s("volRatio","量比")}</div><div class="m-val">${t.volRatio!=null?d(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business?`<p class="card-text"><strong>本業</strong>　${l(t.business)}</p>`:""}
      ${t.why?`<p class="card-text"><strong>理由</strong>　${l(t.why)}</p>`:""}
      ${t.risk?`<p class="card-text risk"><strong>風險</strong>　${S(t.risk)}</p>`:""}
    </article>
  `}function S(t){let e=l(t);return e=e.replace(/漲停/g,s("limitUp","漲停")),e=e.replace(/動能/g,s("momentum","動能")),e}function M(t){return t.map(e=>{const a=e.rsVsIndexPp??e.priorClosePct,n=e.rsVsIndexPp!=null?c(e.rsVsIndexPp):e.priorClosePct!=null?c(e.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${l(e.ticker)}</span></td>
        <td class="name-cell">${l(e.name||"")}</td>
        <td class="num">${v(e.price,e.currency)}</td>
        <td class="num ${o(e.dayPct)}">${c(e.dayPct)}</td>
        <td class="num ${o(a)}">${n}</td>
        <td class="num ${o(e.pct5d)}">${c(e.pct5d)}</td>
        <td class="num ${o(e.pct1m)}">${c(e.pct1m)}</td>
        <td class="num">${e.volRatio!=null?d(e.volRatio,2)+"×":"—"}</td>
        <td>${f(e)}</td>
        <td>${h(e.screens)}</td>
        <td class="why-cell">${l(e.why||"")}</td>
      </tr>`}).join("")}function I(t){return t.map(e=>{const a=e.rsVsIndexPp!=null?`<span class="${o(e.rsVsIndexPp)}">${s("rs","RS")} ${c(e.rsVsIndexPp)}</span>`:e.priorClosePct!=null?`<span class="${o(e.priorClosePct)}">${s("priorClose","前收")} ${c(e.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${l(e.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${l(e.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${v(e.price,e.currency)}</div>
            <div class="${o(e.dayPct)}" style="font-family:var(--mono);font-weight:600">${c(e.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${a}
          <span class="${o(e.pct5d)}">${s("pct5d","5d")} ${c(e.pct5d)}</span>
          <span class="${o(e.pct1m)}">${s("pct1m","1m")} ${c(e.pct1m)}</span>
          <span>${s("volRatio","量比")} ${e.volRatio!=null?d(e.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${f(e)}${h(e.screens)}</div>
        ${e.why?`<p class="lc-why">${l(e.why)}</p>`:""}
        ${e.risk&&e.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">風險：${S(e.risk)}</p>`:""}
      </div>`}).join("")}function y(t,e){return e!=null&&e.length?`
    <div class="panel ${t==="us"?"active":""}" id="panel-${t}" role="tabpanel">
      <div class="table-wrap">
        <table class="stock-table">
          <thead>
            <tr>
              <th>${s("ticker","代碼")}</th>
              <th>名稱</th>
              <th>價格</th>
              <th>${s("dayPct","日漲跌")}</th>
              <th>${s("rs","RS")}／${s("priorClose","前收")}</th>
              <th>${s("pct5d","5 日")}</th>
              <th>${s("pct1m","約 1 月")}</th>
              <th>${s("volRatio","量比")}</th>
              <th>均線</th>
              <th>${s("screening","篩選")}</th>
              <th>理由</th>
            </tr>
          </thead>
          <tbody>${M(e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${I(e)}</div>
    </div>
  `:""}function O(t){if(!t)return"";const e=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${s("adr","ADR")} ${s("parity","平價")}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${s("usStock","美股")} ${s("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${v(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${s("adsRatio","換股比")}</span>　<strong>${l(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>${s("parity","隱含價")}</span>　<strong>${t.impliedUsdTaipeiFx!=null?d(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${s("premium","溢價")}</span>　<strong class="${o(e)}">${c(e)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${s("twStock","台股")}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${v(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${l(t.note)}</p>`:""}
      </div>
    </section>
  `}function j(t){if(!t)return"";const e={A:"screenA",B:"screenB",C:"screenC"},a=Object.keys(t).map(n=>{const i=e[n]||"screening";return`<li><span class="screen-key">${s(i,n)}</span><span>${l(t[n])}</span></li>`}).join("");return`
    <footer class="method-footer">
      <h3>${s("screening","篩選方法說明")}</h3>
      <ul class="method-list">${a}</ul>
      <p class="method-hint">看不懂藍字？點它會跳到下方「名詞小辭典」，還有生活例子。</p>
    </footer>
  `}function k(t){const e=t.top5||[],a=t.us||[],n=t.tw||[];return`
    <header class="site-header">
      <div class="header-top">
        <h1>${s("screening","每日數學選股")}</h1>
        <div class="asof">資料時間 ${D(t.asOf)}</div>
      </div>
      <div class="disclaimer" role="note">${s("notAdvice","不是投資建議")}：${l((t.disclaimer||"本站內容非投資建議。").replace(/^本站內容為依公開行情的數學篩選候選，不是投資建議，亦不保證獲利。$/,"本站只是用公開行情算出「相對有機會觀察的名單」，不會保證賺錢。"))}</div>
      ${t.timezoneNote?`<p class="tz-note">${l(t.timezoneNote)}（${s("intraday","盤中")} 價格還會變）</p>`:""}
      <p class="glossary-jump"><a href="#glossary">看不懂名詞？先打開名詞小辭典 ↓</a></p>
    </header>

    <p class="index-caption">${s("index","指數")}快覽（代表整個市場的「總成績單」）</p>
    ${N(t.indices||{})}

    <section class="section">
      <h2 class="section-title">今日 Top 5</h2>
      <div class="top5-grid">
        ${e.map((i,r)=>L(i,r+1)).join("")}
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">選股清單</h2>
      <div class="tabs" role="tablist">
        <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${s("usStock","美股")}（${a.length}）</button>
        <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${s("twStock","台股")}（${n.length}）</button>
      </div>
      ${y("us",a)}
      ${y("tw",n)}
    </section>

    ${O(t.parity)}
    ${j(t.method)}
    ${R()}

    <p class="site-footer">紅漲綠跌（台灣市場慣例）· 點藍字看解釋 · 資料來自 public/data/latest.json</p>
  `}function q(t){const e=t.querySelectorAll(".tab-btn");e.forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.tab;e.forEach(i=>{const r=i.dataset.tab===n;i.classList.toggle("active",r),i.setAttribute("aria-selected",r?"true":"false")}),t.querySelectorAll(".panel").forEach(i=>{i.classList.toggle("active",i.id===`panel-${n}`)})})})}async function E(){const t=document.getElementById("app");try{const e=await fetch(C);if(!e.ok)throw new Error(`HTTP ${e.status}`);const a=await e.json();t.innerHTML=k(a),q(t),T(t)}catch(e){t.innerHTML=`<div class="error">無法載入資料（${l(e.message)}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。</div>`}}E();
