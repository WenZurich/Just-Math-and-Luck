(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=a(s);fetch(s.href,l)}})();const U={},R={supabaseUrl:typeof import.meta<"u"&&(U==null?void 0:U.VITE_SUPABASE_URL)||"https://whlpzhceivahkuanmmui.supabase.co",supabaseAnonKey:typeof import.meta<"u"&&(U==null?void 0:U.VITE_SUPABASE_ANON_KEY)||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",giscus:{enabled:!0,repo:"WenZurich/Just-Math-and-Luck-",repoId:"R_kgDOUcO78Q",category:"General",categoryId:"DIC_kwDOUcO78c4DFrWU",mapping:"specific",theme:"dark",lang:"zh-TW",perTicker:!1},socialDigestUrl:"./data/social-digest.json",latestUrl:"./data/latest.json",danmakuMaxLen:80,commentMaxLen:500,pollIntervalMs:8e3,postCooldownMs:4e3};globalThis.STOCK_SOCIAL_CONFIG=Object.assign(globalThis.STOCK_SOCIAL_CONFIG||{},R);const mt={dayPct:{title:"日漲跌",plain:"相對前一交易日收盤價的漲跌幅（百分比）。",example:"昨收 100、今收 103，日漲跌為 +3%。"},pct5d:{title:"5 日漲跌",plain:"近 5 個交易日的累積漲跌幅，用於觀察短線動能。",example:"5 日前收 100、現價 110，約為 +10%。"},pct1m:{title:"約 1 月漲跌",plain:"近約 21 個交易日的累積漲跌幅，用於觀察中短線趨勢。",example:"約一個月前 200、現價 220，約為 +10%。"},rs:{title:"相對強度（RS）",plain:"標的當日漲跌幅減去對應大盤當日漲跌幅（百分點）。正值表示相對大盤偏強。",example:"大盤 −1%、個股 +2%，RS 約為 +3 個百分點。"},priorClose:{title:"前收漲幅",plain:"以上一完整交易日收盤價計算的漲跌幅。美股盤中時可對照前一日收盤表現。",example:"週一收盤相對週五收盤上漲 13%，即前收漲幅約 +13%。"},volRatio:{title:"量比",plain:"當日成交量相對近約 20 日平均成交量的倍數。數值愈高，表示當日成交相對活躍。",example:"均量 100 萬股、今日 300 萬股，量比約 3 倍。"},sma20:{title:"SMA20（20 日均線）",plain:"近 20 個交易日收盤價的算術平均。股價位於均線上方，常解讀為短線偏多；下方則偏空。",example:"SMA20 為 50、現價 55，即站上 20 日均線。"},sma50:{title:"SMA50（50 日均線）",plain:"近 50 個交易日收盤價平均，用於觀察中期趨勢。",example:"SMA50 為 100、現價 90，即位於 50 日均線下方。"},screenA:{title:"篩選 A（動能／相對強度）",plain:"依相對大盤表現、短中期動能與是否站上均線等條件篩選標的。",example:"相對大盤偏強且站上 SMA20／SMA50 者，較可能通過篩選 A。"},screenB:{title:"篩選 B（量能）",plain:"檢查當日成交量是否明顯高於均量（量比偏高）。量能放大可能伴隨波動擴大。",example:"量比 14 表示當日成交約為均量的 14 倍。"},screenC:{title:"篩選 C（估值）",plain:"以本益比等估值指標輔助篩選。若當日無法取得可靠資料則略過，不填入估計值。",example:"本益比可粗略理解為「以目前盈餘回本所需年數」；缺資料則不納入計算。"},taiex:{title:"台灣加權（TAIEX）",plain:"台灣證券交易所加權股價指數，反映上市股票整體表現。",example:"加權指數日跌 0.77%，表示上市股票整體偏弱。"},otc:{title:"櫃買",plain:"證券櫃檯買賣中心市場（上櫃），指數反映上櫃股票整體表現。",example:"櫃買指數與加權指數可分開觀察不同市值層級。"},spx:{title:"S&P 500",plain:"美國 500 家大型企業組成的股價指數，常作為美股大盤指標。",example:"S&P 500 跌 0.5%，通常解讀為美股大盤偏弱。"},nasdaq:{title:"Nasdaq（那斯達克）",plain:"美國那斯達克綜合指數，科技股權重較高，常用於觀察科技股氣氛。",example:"Nasdaq 明顯下跌時，科技相關個股常同步承壓。"},sox:{title:"SOX（費半）",plain:"費城半導體指數，反映美國半導體類股表現，常影響台股供應鏈氣氛。",example:"SOX 下跌，通常代表半導體相關股票整體承壓。"},usdtwd:{title:"USD/TWD（美金兌台幣）",plain:"1 美元可兌換的新台幣金額。數值上升通常表示台幣相對走弱。",example:"匯率 32 表示 1 美元約兌 32 元新台幣。"},adr:{title:"ADR",plain:"美國存託憑證：在美國市場交易之外國公司股權憑證。例如台積電 ADR 代碼為 TSM。",example:"TSM 為台積電在美國市場的存託憑證。"},parity:{title:"平價／隱含價",plain:"依本地股價、換股比例與匯率換算之 ADR 理論價格，可與市價比較溢折價。",example:"以台股價與匯率換算得 ADR 理論價約 374 美元。"},premium:{title:"溢價",plain:"市價相對理論平價的偏離幅度。正值為溢價，負值為折價。",example:"理論 374、市價 416，溢價約一成以上。"},adsRatio:{title:"換股比（ADS 比例）",plain:"一單位 ADR 對應之本地普通股股數。實際比例以發行機構公告為準。",example:"常見 5:1 表示 1 股 ADR 約對應 5 股台股普通股。"},limitUp:{title:"漲停",plain:"台股單日漲幅上限（一般股票常見約 10%）。觸及上限稱漲停，流動性可能受限。",example:"自 100 元漲至約 110 元即可能觸及漲停。"},momentum:{title:"動能",plain:"價格沿同一方向延續的強度（例如連續偏強）。屬量化觀察，不保證後續方向。",example:"短線連續上漲且相對大盤偏強，可視為動能偏多。"},ticker:{title:"股票代碼（Ticker）",plain:"市場用以識別標的之代碼。美股多為英文字母，台股多為數字。",example:"AAPL 為蘋果；2330 為台積電。"},index:{title:"指數",plain:"依一籃子成分股編製的綜合指標，用以代表市場或產業整體表現。",example:"台灣加權、S&P 500 皆為市場指數。"},screening:{title:"數學選股／篩選",plain:"依預設量化條件（漲跌、相對強度、均線、成交量等）篩出通過條件的標的。",example:"條件可含相對大盤偏強、量比達標等；通過者列入當日名單。"},notAdvice:{title:"非投資建議",plain:"本站僅呈現公開行情之量化篩選結果與模擬績效，不構成投資建議，亦不保證獲利。",example:"投資涉及風險，資訊僅供參考，非投資建議。"},intraday:{title:"盤中",plain:"市場仍在交易、價格持續變動之時段，有別於收盤後的最終價。",example:"盤中報價可能與收盤價不同。"},twStock:{title:"台股",plain:"於台灣證券市場交易之股票，通常以新台幣計價。",example:"2330 台積電、2308 台達電屬台股。"},usStock:{title:"美股",plain:"於美國市場交易之股票，通常以美元計價。",example:"AAPL、NVDA、CRWD 屬美股。"},paperTrade:{title:"模擬交易",plain:"累積模擬帳戶：自指定日起依 latest.json 標的價假設成交，帳本不每日重置。非真實券商委託。",example:"規則與績效計算比照實盤邏輯，但不涉及真實資金。"},principal:{title:"本金",plain:"該市場模擬帳之起始資金。台股帳 NT$3,000,000；美股帳 US$100,000（兩帳獨立）。",example:"績效以起始本金為基準計算權益變化。"},position:{title:"部位",plain:"帳本目前持有之股票。部位市值＝股數 × 市價；加上現金為該帳權益。",example:"持有 1,000 股、市價 50 元，部位市值約 5 萬元。"},stopLoss:{title:"停損",plain:"未實現虧損達預設比例時全部賣出。本站規則約為 −3%。",example:"持倉未實現約 −3% 時觸發全數停損。"},takeProfit:{title:"停利",plain:"未實現獲利達預設比例時減碼。本站約於 +12% 賣出一半。",example:"持倉未實現約 +12% 時先賣一半。"},unrealizedPnl:{title:"未實現損益",plain:"尚未平倉時，以市價相對平均成本計算之帳面損益。",example:"成本 100、市價 110 且尚未賣出，為未實現獲利。"},realizedPnl:{title:"已實現損益",plain:"平倉後依成交價與平均成本差額記入現金之損益。",example:"賣出後差額已反映於現金，即為已實現損益。"},periodPerf:{title:"週／月／季／年績效",plain:"權益曲線近一週、約一月、約一季、約一年之漲跌。歷史不足時改標示「成立以來」。",example:"帳本成立未滿一年時，年績效欄改顯示成立以來。"},sinceInception:{title:"成立以來",plain:"自該模擬帳起始日至目前的累積績效。歷史長度不足時使用此標籤。",example:"新帳無完整年資料時，以成立以來報酬率呈現。"},danmaku:{title:"彈幕",plain:"畫面上短暫橫向捲動的短訊，便於即時瀏覽討論。",example:"開啟後，短訊會自右向左通過畫面。"},comments:{title:"留言板",plain:"掛於個股卡片下的討論區，可針對該標的發表留言。",example:"於標的頁面留言後，其他人可於同一區塊檢視。"},reddit:{title:"Reddit",plain:"英文論壇平台。本站僅彙整公開搜尋結果供參考，無法取得時會標示狀態，不捏造內容。",example:"常見討論區如 r/stocks；若遭封鎖則顯示無法取得。"},futu:{title:"富途牛牛",plain:"股票交易 App／平台（Moomoo）。本站多僅能取得公開新聞搜尋；個股社群評論通常需登入。",example:"「相關公開新聞」為新聞標題，非社群留言。"},ptt:{title:"PTT",plain:"台灣論壇批踢踢。本站搜尋 Stock 看板公開文章標題作為參考。",example:"於 Stock 板搜尋代碼可取得相關標題與連結。"},dcard:{title:"Dcard",plain:"台灣匿名論壇。本站嘗試搜尋相關討論；若遭反爬限制則標示無法取得。",example:"API 回傳 403 時顯示無法抓取，不編造留言。"},threads:{title:"Threads",plain:"Meta 短文社群。無穩定公開匿名搜尋 API 時，本站不捏造貼文。",example:"摘要若標示需登入，表示公開抓取失敗。"},pe:{title:"本益比（PE）",plain:"股價 ÷ 每股盈餘。數值愈低，以目前盈餘衡量相對愈不昂貴（仍須考量成長與風險）。缺資料不填。",example:"股價 100、每股盈餘 10，本益比約 10。"},opMargin:{title:"營益率",plain:"營業利益 ÷ 營收，衡量本業獲利能力（不含業外）。",example:"營收 100、營業利益 20，營益率 20%。"},grossMargin:{title:"毛利率",plain:"毛利 ÷ 營收，僅扣除銷貨／製造成本，尚未扣除營業費用。",example:"進貨成本 60、售價 100，毛利率 40%。"},foreignInv:{title:"外資",plain:"外國投資機構於台股之買賣總稱；公開資料公布當日買超或賣超。",example:"外資買超 100 萬股 ≈ 1,000 張淨買進。"},trustInv:{title:"投信",plain:"證券投資信託公司（基金）於台股之買賣，屬三大法人之一。",example:"投信買超表示基金當日淨買進偏多。"},dealerInv:{title:"自營商",plain:"券商自營部門以自有資金買賣股票。三大法人通常指外資、投信與自營商。",example:"自營商買超表示券商自營當日淨買進。"},maBull:{title:"均線多頭排列",plain:"短均線位於長均線之上層層排列（如 SMA5>SMA10>SMA20>SMA60），常視為短中期偏多型態。",example:"SMA5＞SMA10＞SMA20＞SMA60 即為多頭排列。"},rsi:{title:"RSI",plain:"相對強弱指標（0–100）。過高可能短線過熱，過低可能超賣；本站超短線策略關注 50 以下且拐頭向上。",example:"RSI 自 35 升至 42 且仍低於 50，可視為低檔回升。"},amplitude:{title:"振幅",plain:"（當日最高價 − 最低價）÷ 昨收。數值愈大表示當日波動愈大。",example:"昨收 100、最高 104、最低 99，振幅約 5%。"},zhang:{title:"張",plain:"台股交易單位：1 張＝1,000 股。成交量與法人買賣超常以張計。",example:"成交 300,000 股＝300 張。"},strategyScreen:{title:"策略選股（邏輯條件）",plain:"選擇策略後檢視條件與當日命中標的及計算欄位。",example:"選「均線多頭排列」可檢視均線條件與命中清單。"},xqLike:{title:"選股軟體風格",plain:"介面採「策略分類＋條件＋命中數」操作習慣；資料來源為公開行情，非商業軟體專有資料庫。",example:"左側選策略、中間看條件、下方看結果。"},socialDigest:{title:"網友參考（社交摘要）",plain:"彙整 Reddit、富途等公開來源之當日摘要，供氣氛參考；非民調，亦非買賣建議。",example:"有公開結果則列出；無法取得則標示狀態。"}};function n(e,t){const a=mt[e],i=t??(a==null?void 0:a.title)??e;return a?`<a class="term" href="#term-${c(e)}" data-term="${c(e)}">${c(i)}</a>`:c(i)}function c(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Tt(){return`
    <section class="section glossary-section" id="help-glossary">
      <h2 class="section-title" id="glossary">名詞辭典</h2>
      <p class="glossary-intro">點選藍字可跳轉定義；點標題展開說明。</p>
      <div class="glossary-list" data-glossary-list>${Object.entries(mt).map(([t,a])=>`
      <details class="glossary-item" id="term-${c(t)}">
        <summary class="glossary-summary">
          <span class="glossary-term-title">${c(a.title)}</span>
          <span class="glossary-chevron" aria-hidden="true"></span>
        </summary>
        <div class="glossary-body">
          <p class="g-plain">${c(a.plain)}</p>
          ${a.example?`<p class="g-example"><span class="g-ex-label">例</span>${c(a.example)}</p>`:""}
        </div>
      </details>`).join("")}</div>
    </section>
  `}function At(e){const t=e.querySelector("[data-glossary-list]");if(!t)return;const a=window.matchMedia("(min-width: 900px)"),i=()=>{t.querySelectorAll("details.glossary-item").forEach(s=>{a.matches?s.open=!0:s.classList.contains("flash")||(s.open=!1)})};i(),typeof a.addEventListener=="function"?a.addEventListener("change",i):typeof a.addListener=="function"&&a.addListener(i)}function qt(e,t={}){e.querySelectorAll("a.term").forEach(a=>{a.addEventListener("click",i=>{const s=a.getAttribute("data-term");i.preventDefault(),typeof t.beforeScroll=="function"&&t.beforeScroll(s);const l=()=>{const r=document.getElementById(`term-${s}`);r&&(r.tagName==="DETAILS"&&(r.open=!0),r.scrollIntoView({behavior:"smooth",block:"start"}),r.classList.add("flash"),setTimeout(()=>r.classList.remove("flash"),1600))};typeof t.beforeScroll=="function"?requestAnimationFrame(()=>requestAnimationFrame(l)):l()})})}const Pt="./data/paper-portfolio.json";function j(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function Z(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(t)}%`}function ht(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString("zh-TW",{minimumFractionDigits:t,maximumFractionDigits:t})}function vt(e){return e==="USD"?"US$":e==="TWD"?"NT$":""}function D(e,t){if(e==null||Number.isNaN(e))return"—";const a=t==="TWD"?0:2;return`${vt(t)}${ht(e,a)}`}function O(e,t){if(e==null||Number.isNaN(e))return"—";const a=t==="TWD"&&e>=100?0:2;return`${vt(t)}${ht(e,a)}`}function ft(e){return{"screen-buy":"名單新開倉",add:"持續買進",stop:"停損","take-profit":"停利","momentum-break":"動能轉弱","off-list":"離開名單","limit-up-chase":"漲停追價急殺"}[e]||e||""}function H(e){return e?`
    <div class="paper-win">
      <div class="w-label">${e.sinceInception?n("sinceInception","成立以來"):c(e.label||"")}</div>
      <div class="w-val ${j(e.pct)}">${Z(e.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function Lt(e,t){return e.length?e.map(a=>{var i;return`
      <tr>
        <td><span class="ticker">${c(a.ticker)}</span></td>
        <td class="name-cell">${c(a.name||"")}</td>
        <td class="num">${(i=a.qty)==null?void 0:i.toLocaleString("zh-TW")}</td>
        <td class="num">${O(a.price,t)}</td>
        <td><span class="badge reason ${c(a.reason||"")}">${c(ft(a.reason))}</span></td>
        <td class="why-cell">${c(a.reasonText||"")}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">本日尚無此類成交（模擬）</td></tr>'}function Ct(e,t){return e.length?e.map(a=>{var l;const i=(a.mark-a.avgCost)*a.qty,s=a.avgCost?(a.mark-a.avgCost)/a.avgCost*100:0;return`
      <tr>
        <td><span class="ticker">${c(a.ticker)}</span></td>
        <td class="num">${(l=a.qty)==null?void 0:l.toLocaleString("zh-TW")}</td>
        <td class="num">${O(a.avgCost,t)}</td>
        <td class="num">${O(a.mark,t)}</td>
        <td class="num ${j(i)}">${D(i,t)}</td>
        <td class="num ${j(s)}">${Z(s)}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">目前沒有持股</td></tr>'}function Nt(e,t,a){const i=t.currency,s=e==="TW"?`${n("twStock","台股")}帳本（NT$）`:`${n("usStock","美股")}帳本（US$）`,l=D(t.startCash,i),r=(a==null?void 0:a.totalPnl)??t.equity-t.startCash,u=(a==null?void 0:a.totalPnlPct)??(t.startCash?(t.equity-t.startCash)/t.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${s}</h3>
      <p class="paper-start">${n("principal","本金")} ${l}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">現金</div>
          <div class="k-val">${D(t.cash,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${n("position","權益（部位＋現金）")}</div>
          <div class="k-val">${D(t.equity,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總${n("realizedPnl","損益")}</div>
          <div class="k-val ${j(r)}">${D(r,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總損益 ％</div>
          <div class="k-val ${j(u)}">${Z(u)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${n("periodPerf","週績效")}</div>
          ${H(a==null?void 0:a.week)}
        </div>
        <div>
          <div class="win-name">${n("periodPerf","月績效")}</div>
          ${H(a==null?void 0:a.month)}
        </div>
        <div>
          <div class="win-name">${n("periodPerf","季績效")}</div>
          ${H(a==null?void 0:a.quarter)}
        </div>
        <div>
          <div class="win-name">${n("periodPerf","年績效")}</div>
          ${H(a==null?void 0:a.year)}
        </div>
      </div>
    </article>`}function Mt(e,t){return e.length?e.map(a=>{var s;const i=a.side==="SELL"?"賣":"買";return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(a.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${c(a.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${i} ${(s=a.qty)==null?void 0:s.toLocaleString("zh-TW")} 股</div>
            <div style="font-family:var(--mono)">${O(a.price,t)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${c(a.reason||"")}">${c(ft(a.reason))}</span>
        </div>
        ${a.reasonText?`<p class="lc-why">${c(a.reasonText)}</p>`:""}
      </div>`}).join(""):'<div class="list-card empty-card">本日尚無此類成交（模擬）</div>'}function It(e,t){return e.length?e.map(a=>{var l;const i=(a.mark-a.avgCost)*a.qty,s=a.avgCost?(a.mark-a.avgCost)/a.avgCost*100:0;return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(a.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">股數 ${(l=a.qty)==null?void 0:l.toLocaleString("zh-TW")}</div>
          </div>
          <div style="text-align:right">
            <div class="${j(i)}" style="font-family:var(--mono);font-weight:600">${D(i,t)}</div>
            <div class="${j(s)}" style="font-family:var(--mono)">${Z(s)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          <span>成本 ${O(a.avgCost,t)}</span>
          <span>市價 ${O(a.mark,t)}</span>
        </div>
      </div>`}).join(""):'<div class="list-card empty-card">目前沒有持股</div>'}function F(e,t,a){return`
    <div class="paper-table-block">
      <h4>${c(e)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>日期</th>
              <th>${n("ticker","代碼")}</th>
              <th>名稱</th>
              <th>股數</th>
              <th>價格</th>
              <th>原因</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>${Lt(t,a)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${Mt(t,a)}</div>
    </div>`}function Rt(e,t){return`
    <div class="paper-table-block">
      <h4>目前${n("position","部位")}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${n("ticker","代碼")}</th>
              <th>股數</th>
              <th>平均成本</th>
              <th>市價</th>
              <th>${n("unrealizedPnl","未實現損益")} $</th>
              <th>${n("unrealizedPnl","未實現")} ％</th>
            </tr>
          </thead>
          <tbody>${Ct(e,t)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${It(e,t)}</div>
    </div>`}function at(e,t,a,i,s,l){const r=t.currency,u=[...t.trades||[]].sort((m,d)=>m.date<d.date?1:m.date>d.date?-1:0),h=u.filter(m=>m.date===i),o=h.filter(m=>m.side==="BUY"),b=h.filter(m=>m.side==="SELL"),y=u.slice(0,40),g=l;return`
    <div class="paper-panel ${s?"active":""}" id="paper-panel-${e}" role="tabpanel">
      ${Nt(e,t,a)}
      <p class="paper-session-note">${c(i||"—")} · 自 ${c(g)} 累積 · 買進即成交</p>
      ${F(`買 ${i||""}`,o,r)}
      ${F(`賣 ${i||""}`,b,r)}
      ${Rt(t.positions||[],r)}
      ${F("成交（近 40）",y,r)}
    </div>`}function jt(e){var r,u;if(!e||!e.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${n("paperTrade","模擬")}</h2>
        <p class="paper-missing">尚無模擬帳本檔案。請於專案執行 <code>npm run paper</code>。</p>
      </section>`;const t=e.books.TW,a=e.books.US;let s=(e.asOf||"").slice(0,10);try{s=new Date(e.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const l=e.startDate||(t==null?void 0:t.startDate)||(a==null?void 0:a.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${n("paperTrade","模擬")}</h2>
      <p class="paper-disclaimer" role="note">
        <strong>累積模擬帳戶（自 ${c(l)} 起）</strong>
        · 不會每日歸零 · <strong>買進即成交</strong> · 非真實下單
      </p>
      <details class="paper-rules">
        <summary>規則（各市場獨立帳）</summary>
        <ul>
          <li>${n("twStock","台股")}本金 NT$3,000,000 · 整張成交</li>
          <li>${n("usStock","美股")}本金 US$100,000 · 可買 1 股起</li>
          <li>買：該市場名單·風險1%·停距1.5%·單檔≤8% · <strong>即成交</strong></li>
          <li>賣：${n("stopLoss","停損")}−3% · ${n("takeProfit","停利")}+12%半倉 · 破SMA20且日跌&gt;2% · 離名單虧損 · 漲停隔日−5%</li>
        </ul>
      </details>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">台股帳 · NT$</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">美股帳 · US$</button>
      </div>
      ${at("TW",t,(r=e.metrics)==null?void 0:r.TW,s,!0,l)}
      ${at("US",a,(u=e.metrics)==null?void 0:u.US,s,!1,l)}
    </section>`}function Et(e){const t=e.querySelectorAll(".paper-tab-btn");t.forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.paperTab;t.forEach(s=>{const l=s.dataset.paperTab===i;s.classList.toggle("active",l),s.setAttribute("aria-selected",l?"true":"false")}),e.querySelectorAll(".paper-panel").forEach(s=>{s.classList.toggle("active",s.id===`paper-panel-${i}`)})})})}async function Ut(){try{const e=await fetch(Pt);return e.ok?await e.json():null}catch{return null}}const st={},J="討論功能尚未啟用",Dt=[{id:"local",label:"本站留言"},{id:"reddit",label:"Reddit"},{id:"futu",label:"富途"}],Ot=[{id:"local",label:"本站留言"},{id:"ptt",label:"PTT"},{id:"dcard",label:"Dcard"},{id:"threads",label:"Threads"}];function bt(e,t){const a=String(t||"").toUpperCase();return a==="US"||a==="TW"?a:String(e||"").toUpperCase().endsWith(".TW")?"TW":"US"}function Wt(e){return e==="TW"?Ot:Dt}function gt(e=globalThis.STOCK_SOCIAL_CONFIG||{}){const t=typeof import.meta<"u"&&st?st:{},a=String(e.supabaseUrl||t.VITE_SUPABASE_URL||"").trim(),i=String(e.supabaseAnonKey||t.VITE_SUPABASE_ANON_KEY||"").trim();return{url:a,anon:i}}function S(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function yt(e,t){const a={apikey:t,Authorization:`Bearer ${t}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(i,s=50){const l=`${e}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(i)}&order=created_at.asc&limit=${s}`,r=await fetch(l,{headers:a});if(!r.ok)throw new Error(`comments select ${r.status}`);return r.json()},async insert(i){const s=await fetch(`${e}/rest/v1/comments`,{method:"POST",headers:a,body:JSON.stringify(i)});if(!s.ok){const l=await s.text();throw new Error(`comments insert ${s.status}: ${l}`)}return s.json()}}}function Bt(e,t,a){if(!e||!a)return null;const i=e[t];return Array.isArray(i)&&i.find(s=>String(s.ticker).toUpperCase()===String(a).toUpperCase())||null}function Vt(e,t,{futuMode:a=!1}={}){if(!e)return`<p class="ss-empty">無 ${S(t)}</p>`;const i=[];e.blocker&&i.push(`<p class="ss-digest-blocker">⚠ ${S(e.blocker)}</p>`);const s=e.items||[],l=e.newsRelated||[];if(s.length&&i.push(s.map(r=>{const u=r.url?S(r.url):"#",h=r.score!=null?`<span class="ss-score">▲ ${S(r.score)}</span>`:"",o=r.author?`@${S(r.author)}`:"";return`<article class="ss-digest-item">
            <a href="${u}" target="_blank" rel="noopener noreferrer">${S(r.snippet||r.title||"(無摘要)")}</a>
            <div class="ss-digest-meta">${h} ${o}</div>
          </article>`}).join("")),l.length){const r=a?"新聞／討論線索（非留言）":"相關公開新聞（非社群評論）";i.push(`<p class="ss-digest-sub">${r}</p>`),i.push(l.map(u=>`<article class="ss-digest-item">
            <a href="${u.url?S(u.url):"#"}" target="_blank" rel="noopener noreferrer">${S(u.snippet||"(無標題)")}</a>
          </article>`).join(""))}return Array.isArray(e.manualUrls)&&e.manualUrls.length&&!s.length&&i.push('<p class="ss-digest-sub">手動開啟</p>'+e.manualUrls.slice(0,4).map(r=>`<article class="ss-digest-item"><a href="${S(r)}" target="_blank" rel="noopener noreferrer">${S(r)}</a></article>`).join("")),!s.length&&!l.length&&!e.blocker&&i.push(`<p class="ss-empty">暫無 ${S(t)} 資料</p>`),i.join("")||'<p class="ss-empty">暫無資料</p>'}function zt(e,t,a={}){if(!e||!t)return{ok:!1};const i=a.config||globalThis.STOCK_SOCIAL_CONFIG||{},s=a.digest||null,l=bt(t,a.market||e.getAttribute("data-market")),r=Wt(l),{url:u,anon:h}=gt(i),o=i.commentMaxLen||500,b=i.postCooldownMs||4e3,y=!!a.bare,g="",m=r.map(($,q)=>`<button type="button" class="ss-src-tab${q===0?" active":""}" data-src="${$.id}" role="tab" aria-selected="${q===0?"true":"false"}">${$.label}</button>`).join(""),d=r.filter($=>$.id!=="local").map($=>`<div class="ss-src-panel" data-panel="${$.id}" role="tabpanel" hidden></div>`).join("");e.classList.add("ss-thread"),e.dataset.market=l;const f=`
      <div class="ss-src-tabs" role="tablist" aria-label="${S(t)}">${m}</div>
      <div class="ss-src-panels">
        <div class="ss-src-panel active" data-panel="local" role="tabpanel">
          <div class="ss-thread-status"></div>
          <ul class="ss-thread-list"></ul>
          <form class="ss-thread-form ss-composer">
            <input class="ss-nick" maxlength="24" placeholder="暱稱（選填）" autocomplete="nickname" />
            <textarea class="ss-body" maxlength="${o}" rows="2" placeholder="留言" required></textarea>
            <button type="submit">送出</button>
          </form>
        </div>
        ${d}
      </div>`;e.innerHTML=y?`<div class="ss-thread-bare" data-ticker="${S(t)}">${f}</div>`:`<details class="ss-thread-details"${g}>
      <summary>${S(t)}</summary>
      ${f}
    </details>`;const v=e.querySelector(".ss-thread-status"),k=e.querySelector(".ss-thread-list"),N=e.querySelector(".ss-thread-form"),W={ptt:["ptt","PTT",!1],dcard:["dcard","Dcard",!1],threads:["threads","Threads",!1],reddit:["reddit","Reddit",!1],futu:["futu","富途",!0]};for(const $ of r){if($.id==="local")continue;const q=W[$.id];if(!q)continue;const[L,M,_]=q,et=e.querySelector(`[data-panel="${$.id}"]`);et&&(et.innerHTML=Vt(Bt(s,L,t),M,{futuMode:_}))}const E=e.querySelectorAll(".ss-src-tab"),B=e.querySelectorAll(".ss-src-panel");if(E.forEach($=>{$.addEventListener("click",()=>{const q=$.dataset.src;E.forEach(L=>{const M=L.dataset.src===q;L.classList.toggle("active",M),L.setAttribute("aria-selected",M?"true":"false")}),B.forEach(L=>{const M=L.dataset.panel===q;L.classList.toggle("active",M),L.hidden=!M})})}),!u||!h)return v.textContent=J,v.className="ss-thread-status is-warn",N.querySelectorAll("input,textarea,button").forEach($=>{$.disabled=!0}),k.innerHTML='<li class="ss-empty">後端未接上</li>',{ok:!1,reason:"no-config",market:l};const G=yt(u,h);v.textContent="";let C=!1;async function w(){try{const $=await G.list(t);if(!$.length){k.innerHTML='<li class="ss-empty">尚無留言</li>';return}k.innerHTML=$.map(q=>`<li><strong>${S(q.nickname)}</strong> ${S(q.body)}<span class="meta">${S(new Date(q.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join("")}catch($){v.textContent=`讀取失敗：${$.message}`,v.className="ss-thread-status is-warn"}}N.addEventListener("submit",async $=>{if($.preventDefault(),C)return;const q=(N.querySelector(".ss-nick").value||"訪客").trim().slice(0,24)||"訪客",L=(N.querySelector(".ss-body").value||"").trim().slice(0,o);if(!L)return;C=!0;const M=N.querySelector("button");M.disabled=!0;try{await G.insert({ticker:t,body:L,nickname:q}),N.querySelector(".ss-body").value="",await w()}catch(_){v.textContent=`發送失敗：${_.message}`,v.className="ss-thread-status is-warn"}finally{window.setTimeout(()=>{C=!1,M.disabled=!1},b)}}),w();const P=window.setInterval(w,i.pollIntervalMs||1e4);return{ok:!0,market:l,destroy(){window.clearInterval(P)}}}function it(e,t,a={}){if(!e||!t)return{ok:!1,destroy(){}};const i=a.config||globalThis.STOCK_SOCIAL_CONFIG||{},s=bt(t,a.market||e.getAttribute("data-market")),{url:l,anon:r}=gt(i),u=Math.min(i.commentMaxLen||500,a.maxLen||200),h=i.postCooldownMs||4e3,o=a.title||t,b=a.emptyLine||"目前尚無訊息",y=a.danmakuLayer||document.querySelector("#ss-danmaku-layer"),g=a.flyToggle||document.querySelector("#ss-danmaku-toggle"),m=()=>!!(g&&g.checked);e.classList.add("chat-shell","ss-thread"),e.dataset.market=s,e.dataset.ticker=t,e.innerHTML=`
    <div class="chat-room-label">${S(o)}</div>
    <div class="ss-thread-status chat-status-line" aria-live="polite"></div>
    <ul class="ss-thread-list chat-messages" aria-label="訊息"></ul>
    <form class="ss-thread-form chat-composer">
      <input class="ss-nick" maxlength="24" placeholder="暱稱（選填）" autocomplete="nickname" />
      <input class="ss-body" maxlength="${u}" placeholder="輸入留言" required autocomplete="off" />
      <button type="submit" class="chat-send">送出</button>
    </form>
  `;const d=e.querySelector(".ss-thread-status"),f=e.querySelector(".ss-thread-list"),v=e.querySelector(".ss-thread-form");let k=new Set;function N(C){if(!y||!m())return;const w=document.createElement("div");w.className="ss-danmaku-item",w.textContent=C,w.style.top=`${8+Math.random()*42}vh`,w.style.animationDuration="12000ms",y.appendChild(w),window.setTimeout(()=>w.remove(),12200)}if(!l||!r)return d.textContent=J,d.className="ss-thread-status chat-status-line is-warn",v.querySelectorAll("input,button").forEach(C=>{C.disabled=!0}),f.innerHTML=`<li class="ss-empty">${S(b)}</li>`,{ok:!1,reason:"no-config",market:s,destroy(){}};const W=yt(l,r);d.textContent="";let E=!1;async function B(C=!1){try{const w=await W.list(t,80);if(!w.length){f.innerHTML=`<li class="ss-empty">${S(b)}</li>`;return}f.innerHTML=w.map(P=>`<li><span class="nick">${S(P.nickname)}</span>${S(P.body)}<span class="meta">${S(new Date(P.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join(""),f.scrollTop=f.scrollHeight;for(const P of w)k.has(P.id)||(k.add(P.id),C&&N(`${P.nickname}: ${P.body}`));k.size>200&&(k=new Set([...k].slice(-100)))}catch{d.textContent=J,d.className="ss-thread-status chat-status-line is-warn"}}v.addEventListener("submit",async C=>{if(C.preventDefault(),E)return;const w=(v.querySelector(".ss-nick").value||"訪客").trim().slice(0,24)||"訪客",P=(v.querySelector(".ss-body").value||"").trim().slice(0,u);if(!P)return;E=!0;const $=v.querySelector("button");$.disabled=!0;try{await W.insert({ticker:t,body:P,nickname:w}),v.querySelector(".ss-body").value="",await B(!0)}catch{d.textContent="發送失敗",d.className="ss-thread-status chat-status-line is-warn"}finally{window.setTimeout(()=>{E=!1,$.disabled=!1},h)}}),B(!1);const G=window.setInterval(()=>B(!0),i.pollIntervalMs||8e3);return{ok:!0,market:s,ticker:t,destroy(){window.clearInterval(G)}}}function Gt(e=document,t={}){const a=e.querySelectorAll("[data-ticker-comments]"),i=[];return a.forEach(s=>{const l=s.getAttribute("data-ticker-comments")||s.dataset.ticker,r=s.getAttribute("data-market")||void 0;l&&i.push(zt(s,l,{...t,market:r}))}),i}function Ht(e,t){if(!e||!t||e.querySelector("script[data-giscus], iframe.giscus-frame"))return;const a=document.createElement("script");a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","1"),a.setAttribute("data-repo",t.repo||""),a.setAttribute("data-repo-id",t.repoId||""),a.setAttribute("data-category",t.category||"General"),a.setAttribute("data-category-id",t.categoryId||""),a.setAttribute("data-mapping",t.mapping==="pathname"?"pathname":"specific"),a.setAttribute("data-term",t.term||"site-discussion"),a.setAttribute("data-strict","0"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","bottom"),a.setAttribute("data-theme",t.theme||"dark"),a.setAttribute("data-lang",t.lang||"zh-TW"),e.appendChild(a)}function Zt(e="#ss-giscus",t={}){const a=document.querySelector(e);if(!a)return{ok:!1,reason:"missing"};const s=(t.config||globalThis.STOCK_SOCIAL_CONFIG||{}).giscus||{};if(!s.enabled||!s.repoId||!s.categoryId)return a.innerHTML='<p class="ss-chat-status is-warn">Giscus 尚未設定（需 repoId／categoryId）。請見說明文件。</p>',{ok:!1,reason:"no-config"};const l=a.querySelector(".ss-giscus-host")||a;return Ht(l,{...s,term:s.term||"site-discussion"}),{ok:!0}}function x(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function _t(e){const t=e.manualUrls||[];return t.length?'<p class="ss-digest-sub">手動開啟</p>'+t.slice(0,4).map(a=>`<article class="ss-digest-item"><a href="${x(a)}" target="_blank" rel="noopener noreferrer">${x(a)}</a></article>`).join(""):""}function lt(e){const t=e.score!=null?`<span class="ss-score">▲ ${x(e.score)}</span>`:"",a=e.author?`@${x(e.author)}`:"",i=e.created?x(new Date(e.created).toLocaleString("zh-TW",{hour12:!1})):e.date?x(e.date):"",s=e.via?`<span class="ss-via">${x(e.via)}</span>`:"";return`<article class="ss-digest-item">
    <a href="${e.url?x(e.url):"#"}" target="_blank" rel="noopener noreferrer">${x(e.snippet||e.title||"(無摘要)")}</a>
    <div class="ss-digest-meta">${t} ${a} ${i} ${s}</div>
  </article>`}function Ft(e,t,{futuMode:a=!1}={}){var h;const i=e.blocker?`<p class="ss-digest-blocker">⚠ ${x(e.blocker)}</p>`:"",s=e.items||[],l=e.newsRelated||[];let r="";s.length&&(r+=s.map(lt).join("")),l.length&&(r+=`<p class="ss-digest-sub">${a?"新聞／討論線索（非留言）":"相關公開新聞（非社群評論）"}</p>`+l.map(lt).join("")),!s.length&&((h=e.manualUrls)!=null&&h.length)&&(r+=_t(e)),r||(r=`<p class="ss-empty">此標的暫無${x(t)}資料</p>`);const u=e.via&&e.via!=="reddit.com"?`<p class="ss-digest-via-note">來源備援：${x(e.via)}</p>`:"";return`<section class="ss-digest-ticker" data-ticker="${x(e.ticker)}">
    <h4>${x(e.ticker)}</h4>
    ${i}
    ${u}
    ${r}
  </section>`}function V(e,t,a,i={}){const s=(t||[]).map(l=>Ft(l,a,i)).join("");return`<div class="ss-digest-col">
    <h4 class="ss-digest-col-title">${x(e)}</h4>
    ${s||`<p class="ss-empty">無 ${x(e)} 區塊（今日無對應市場標的或尚未抓取）</p>`}
  </div>`}async function $t(e){const t=globalThis.STOCK_SOCIAL_CONFIG||{},a=e||t.socialDigestUrl||"./data/social-digest.json",i=await fetch(a,{cache:"no-cache"});if(!i.ok)throw new Error(`social-digest ${i.status}`);return i.json()}function Yt(e,t){if(!t)return;const a=e.asOf?new Date(e.asOf).toLocaleString("zh-TW",{hour12:!1}):"—";(e.notes||[]).map(o=>`<li>${x(o)}</li>`).join(""),e.routing;const i=`
    <div class="ss-digest-market" data-market-panel="US">
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${V("Reddit",e.reddit,"Reddit")}
        ${V("富途牛牛",e.futu,"富途",{futuMode:!0})}
      </div>
    </div>`,s=`
    <div class="ss-digest-market" data-market-panel="TW" hidden>
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${V("PTT",e.ptt,"PTT")}
        ${V("Dcard",e.dcard,"Dcard")}
        ${V("Threads",e.threads,"Threads")}
      </div>
    </div>`,l=(e.reddit||[]).length||(e.futu||[]).length,r=(e.ptt||[]).length||(e.dcard||[]).length||(e.threads||[]).length,u=l?"US":r?"TW":"US";t.innerHTML=`
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>外部摘要</h3>
        <p class="ss-digest-asof">${x(a)}</p>
      </header>
      <div class="ss-digest-market-tabs" role="tablist" aria-label="社交摘要市場">
        <button type="button" class="ss-mkt-tab${u==="US"?" active":""}" data-market="US" role="tab" aria-selected="${u==="US"}">美股 Reddit／富途</button>
        <button type="button" class="ss-mkt-tab${u==="TW"?" active":""}" data-market="TW" role="tab" aria-selected="${u==="TW"}">台股 PTT／Dcard／Threads</button>
      </div>
      ${i}
      ${s}
    </div>
  `,t.querySelectorAll("[data-market-panel]").forEach(o=>{const b=o.getAttribute("data-market-panel")===u;o.hidden=!b});const h=t.querySelectorAll(".ss-mkt-tab");h.forEach(o=>{o.addEventListener("click",()=>{const b=o.getAttribute("data-market");h.forEach(y=>{const g=y===o;y.classList.toggle("active",g),y.setAttribute("aria-selected",g?"true":"false")}),t.querySelectorAll("[data-market-panel]").forEach(y=>{y.hidden=y.getAttribute("data-market-panel")!==b})})})}async function Kt(e="#ss-social-digest",t){const a=document.querySelector(e);if(!a)return{ok:!1};try{const i=await $t(t);return Yt(i,a),{ok:!0,data:i}}catch(i){return a.innerHTML=`<p class="ss-digest-blocker">社交摘要尚未產生或讀取失敗：${x(i.message)}</p>`,{ok:!1,error:i}}}const kt="./data/strategy-screener.json",Jt={精選:"精選",價量:"價量",籌碼:"籌碼",財務:"財務",大師:"大師",技術:"價量",綜合:"精選"};function Xt(e){try{return new Date(e).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+"（台北）"}catch{return e||"—"}}function p(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString("zh-TW",{minimumFractionDigits:t,maximumFractionDigits:t})}function Y(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function K(e){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(2)}%`}function Qt(e){return e.categoryGroup||Jt[e.category]||e.category||"精選"}function te(e){let t=c(e);return t=t.replace(/本益比/g,()=>n("pe","本益比")),t=t.replace(/營益率/g,()=>n("opMargin","營益率")),t=t.replace(/毛利率/g,()=>n("grossMargin","毛利率")),t=t.replace(/外資/g,()=>n("foreignInv","外資")),t=t.replace(/投信/g,()=>n("trustInv","投信")),t=t.replace(/自營商/g,()=>n("dealerInv","自營商")),t=t.replace(/均線多頭/g,()=>n("maBull","均線多頭")),t=t.replace(/RSI/g,()=>n("rsi","RSI")),t=t.replace(/振幅/g,()=>n("amplitude","振幅")),t=t.replace(/(\d+)\s*張/g,(a,i)=>`${i}${n("zhang","張")}`),t=t.replace(/＞\s*(\d+)\s*張/g,(a,i)=>`＞ ${i}${n("zhang","張")}`),t}function ee(e){return e==="skip"?'<span class="xq-cond-st skip">略過</span>':e==="fail"?'<span class="xq-cond-st fail">未過</span>':'<span class="xq-cond-st pass">條件</span>'}function ae(e){switch(e){case"ma-bull":return[{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"dayPct",label:"日漲跌",fmt:t=>K(t.dayPct),cls:t=>Y(t.dayPct)},{key:"sma5",label:"SMA5",fmt:t=>p(t.sma5)},{key:"sma10",label:"SMA10",fmt:t=>p(t.sma10)},{key:"sma20",label:"SMA20",fmt:t=>p(t.sma20)},{key:"sma60",label:"SMA60",fmt:t=>p(t.sma60)},{key:"volRatioYday",label:"量比(昨)",fmt:t=>t.volRatioYday!=null?p(t.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:"今量(張)",fmt:t=>t.volTodayZhang!=null?p(t.volTodayZhang,1):t.volToday!=null?p(t.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:n("pe","本益比"),fmt:t=>p(t.pe,2),rawLabel:!0},{key:"revGrowth2yAvgPct",label:"2年營收成長均%",fmt:t=>t.revGrowth2yAvgPct!=null?p(t.revGrowth2yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:t=>t.pretaxGrowth5yAvgPct!=null?p(t.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?p(t.avgVol5Zhang,1):"—"},{key:"dayPct",label:"日漲跌",fmt:t=>K(t.dayPct),cls:t=>Y(t.dayPct)}];case"inst-sync":return[{key:"foreignNet1dZhang",label:n("foreignInv","外資")+"1日(張)",fmt:t=>p(t.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:n("trustInv","投信")+"1日(張)",fmt:t=>p(t.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:n("dealerInv","自營商")+"1日(張)",fmt:t=>p(t.dealerNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:"外資5日(張)",fmt:t=>p(t.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:"投信5日(張)",fmt:t=>p(t.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:"自營5日(張)",fmt:t=>p(t.dealerNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"dayPct",label:"日漲跌",fmt:t=>K(t.dayPct),cls:t=>Y(t.dayPct)},{key:"rsi",label:n("rsi","RSI"),fmt:t=>p(t.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:t=>p(t.rsiPrev,2)},{key:"ampPct",label:n("amplitude","振幅"),fmt:t=>t.ampPct!=null?p(t.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?p(t.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:t=>p(t.pb,2)},{key:"directorHoldPct",label:"董監持股%",fmt:t=>t.directorHoldPct!=null?p(t.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:n("pe","本益比"),fmt:t=>p(t.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?p(t.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:t=>Array.isArray(t.revGrowth3y)?t.revGrowth3y.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:t=>t.revGrowth5yAvgPct!=null?p(t.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:t=>t.pretaxGrowth5yAvgPct!=null?p(t.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?p(t.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:"近季營益率%",fmt:t=>t.opMargin1qPct!=null?p(t.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:t=>Array.isArray(t.opMargin3y)?t.opMargin3y.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:t=>t.revGrowth3yAvgPct!=null?p(t.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)}];case"benjamin-graham":return[{key:"pe",label:n("pe","本益比"),fmt:t=>p(t.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:t=>p(t.pb,2)},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?p(t.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:"近季營益率%",fmt:t=>t.opMargin1qPct!=null?p(t.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:n("pe","本益比"),fmt:t=>p(t.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?p(t.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:t=>t.roeGrowthPct!=null?p(t.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:t=>t.epsGrowthStreak!=null?String(t.epsGrowthStreak):"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"margin-up":return[{key:"yoyPairs",label:"YoY配對",fmt:t=>Array.isArray(t.yoyPairs)?t.yoyPairs.join("；"):"—"},{key:"yoyOmPct",label:"YoY營益成長%",fmt:t=>Array.isArray(t.yoyOmPct)?t.yoyOmPct.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"yoyGmPct",label:"YoY毛利成長%",fmt:t=>Array.isArray(t.yoyGmPct)?t.yoyGmPct.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"opMargins",label:n("opMargin","營益率"),fmt:t=>Array.isArray(t.opMargins)?t.opMargins.slice(-4).map(a=>a!=null?a+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:"來源",fmt:t=>t.source||"—"}];default:return[{key:"price",label:"價格",fmt:t=>p(t.price)}]}}function se(e){const t=e.calibrationNotes;if(!t||typeof t!="object")return"";const a=Array.isArray(t.matchedXq)?t.matchedXq.map(r=>c(r)).join(" · "):"",i=Array.isArray(t.stillDiffers)?t.stillDiffers.map(r=>c(r)).join(" · "):"",s=t.unitsNote||t.units||"",l=[];return a&&l.push(`<span class="xq-cal-m">對齊 XQ：${a}</span>`),i&&l.push(`<span class="xq-cal-d">仍差異：${i}</span>`),s&&l.push(`<span class="xq-cal-u">${c(String(s))}</span>`),l.length?`<p class="xq-calibration" title="校準說明">${l.join("<br/>")}</p>`:""}function ie(e){return`<ol class="xq-cond-list">${(e.conditions||[]).map((a,i)=>{const s=a.status||"pass";return`<li class="xq-cond ${s}">
        <span class="xq-cond-num">${i+1}</span>
        <span class="xq-cond-text">${te(a.text)}</span>
        ${ee(s)}
      </li>`}).join("")}</ol>`}function St(e,t){return!t||t==="ALL"?e||[]:(e||[]).filter(a=>{const i=String(a.market||"").toUpperCase();if(i===t)return!0;const s=String(a.ticker||"").toUpperCase().endsWith(".TW");return i?!1:t==="TW"?s:!s})}function le(e,t="TW"){const a=e.hits||[],i=St(a,t),s=t==="US"?"美股":"台股";if(e.incomplete&&!a.length){const o=c(e.incompleteLabel||"資料不足"),b=(e.blockers||[]).map(y=>`<li>${c(y)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${o}</div>
      <ul>${b}</ul>
    </div>`}if(!i.length)return`<div class="xq-empty"><p>${s}無命中</p></div>`;const l=ae(e.id),r=l.map(o=>`<th>${o.rawLabel?o.label:c(o.label)}</th>`).join(""),u=i.map(o=>{const b=o.metrics||{},y=l.map(g=>`<td class="num ${g.cls?g.cls(b):""}">${g.fmt(b)}</td>`).join("");return`<tr>
        <td><span class="ticker">${c(o.ticker)}</span></td>
        <td class="name-cell">${c(o.name||"")}${o.ohlcvBarDate?`<div class="xq-bar-date">K ${c(o.ohlcvBarDate)}</div>`:""}</td>
        ${y}
      </tr>`}).join(""),h=i.map(o=>{const b=o.metrics||{},y=l.map(g=>{const m=g.cls?g.cls(b):"";return`<div class="xq-m"><span class="xq-ml">${g.rawLabel?g.label:c(g.label)}</span><span class="xq-mv ${m}">${g.fmt(b)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${c(o.ticker)}</div>
            <div class="name">${c(o.name||"")}</div>
            ${o.ohlcvBarDate?`<div class="xq-bar-date">K棒 ${c(o.ohlcvBarDate)}</div>`:""}
          </div>
          <span class="badge market">${c(o.market||t)}</span>
        </div>
        <div class="xq-hit-metrics">${y}</div>
      </article>`}).join("");return`
    <div class="xq-market-block" data-market="${c(t)}">
      <h5 class="xq-market-title">${s}（${i.length}）</h5>
      <div class="table-wrap xq-table-wrap">
        <table class="stock-table xq-table">
          <thead><tr><th>代碼</th><th>名稱</th>${r}</tr></thead>
          <tbody>${u}</tbody>
        </table>
      </div>
      <div class="xq-mobile-cards">${h}</div>
    </div>`}function rt(e,t,a="TW"){var o,b,y,g;const i=e.hits||[],l=St(i,a).length,r=(e.unchecked||[]).map(m=>`<li class="xq-unchecked">${c(m)}</li>`).join(""),u=(e.notes||[]).map(m=>`<li>${c(m)}</li>`).join(""),h=!e.incomplete&&(e.blockers||[]).length?`<ul class="xq-blockers">${(e.blockers||[]).map(m=>`<li>${c(m)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${c(e.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${c(e.name)}</h3>
          <div class="xq-tags">
            ${(e.xqTags||[e.category]).map(m=>`<span class="xq-tag">${c(m)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="命中檔數">
          <span class="xq-hit-num">${l}</span>
          <span class="xq-hit-label">檔命中</span>
        </div>
      </div>
      ${e.description?`<details class="fold-block"><summary>詳情 · 策略說明</summary><p class="xq-desc fold-p">${c(e.description)}</p></details>`:""}
      <div class="xq-meta-row">
        <span>證交所 session ${c(t.sessionDate||"—")}</span>
        <span>OHLCV K棒 ${c(((o=e.ohlcvBarDates)==null?void 0:o[0])||t.ohlcvBarDate||"—")}</span>
        <span>產生 ${Xt(t.asOf)}</span>
        <span>台股宇宙 ${((b=t.universe)==null?void 0:b.tw)??"—"}</span>
        <span>美股宇宙 ${((y=t.universe)==null?void 0:y.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">條件</h4>
      ${ie(e)}
      ${se(e)}
      ${(g=e.incompleteFilters)!=null&&g.length?`<p class="xq-incomplete-filters">未檢查濾網（不算通過）：${c(e.incompleteFilters.join("、"))}</p>`:""}
      ${r?`<ul class="xq-unchecked-list">${r}</ul>`:""}
      ${u?`<ul class="xq-notes">${u}</ul>`:""}
      ${h}
      <div class="xq-toolbar">
        <h4 class="xq-sub">篩選結果</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>複製 JSON</button>
          <button type="button" class="xq-btn" data-xq-csv>匯出此策略 CSV</button>
          <a class="xq-btn xq-btn-link" href="${kt}" download="strategy-screener.json">匯出 JSON</a>
        </div>
      </div>
      ${e.twOnly||["inst-sync","margin-up","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short"].includes(e.id)?'<div class="xq-market-tabs"><span class="xq-mkt-hint">本策略僅台股</span></div>':`<div class="xq-market-tabs" role="tablist" aria-label="命中市場">
        <button type="button" class="xq-mkt-btn${a==="TW"?" active":""}" data-xq-market="TW" aria-pressed="${a==="TW"}">台股</button>
        <button type="button" class="xq-mkt-btn${a==="US"?" active":""}" data-xq-market="US" aria-pressed="${a==="US"}">美股</button>
      </div>`}
      ${le(e,["inst-sync","margin-up","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short"].includes(e.id)?"TW":a)}
    </div>
  `}function re(e=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${n("strategyScreen","策略選股")}</h2>
      <p class="view-lead-tight">台／美命中分開檢視 · 缺資料標「不足」</p>
      <div id="xq-root" class="xq-root" aria-label="策略選股">
        ${e?'<p class="xq-loading">載入策略結果中…</p>':""}
      </div>
    </section>
  `}async function ne(e=kt){const t=await fetch(e,{cache:"no-cache"});if(!t.ok)throw new Error(`strategy-screener ${t.status}`);return t.json()}function ce(e,t){var m;const a=typeof e=="string"?document.querySelector(e):e;if(!a||!((m=t==null?void 0:t.strategies)!=null&&m.length)){a&&(a.innerHTML='<div class="xq-empty"><p>尚無策略資料。請執行 <code>npm run strategies</code>。</p></div>');return}const i=t.categoryOrder||["精選","價量","籌碼","財務","大師"],s=new Map(i.map(d=>[d,[]]));for(const d of t.strategies){const f=Qt(d);s.has(f)||s.set(f,[]),s.get(f).push(d)}const l=t.strategies[0];let r="TW";const u=i.map(d=>{const f=s.get(d)||[];return f.length?`<div class="xq-cat-block">
        <div class="xq-cat-label">${c(d)}</div>
        <div class="xq-chip-row">
          ${f.map(v=>{const k=(v.hits||[]).length,N=v.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${v.id===l.id?" active":""}${N}" data-xq-id="${c(v.id)}" aria-pressed="${v.id===l.id}">
                <span class="xq-chip-name">${c(v.name)}</span>
                <span class="xq-chip-n">${v.incomplete?"不足":`共${k}檔`}</span>
              </button>`}).join("")}
        </div>
      </div>`:""}).join(""),h=t.strategies.map(d=>{const f=(d.hits||[]).length,v=d.id===l.id?" active":"",k=d.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${v}${k}" data-xq-id="${c(d.id)}">
        <span>${c(d.name)}</span>
        <span class="xq-side-n">${d.incomplete?"不足":`共${f}檔`}</span>
      </button>`}).join("");a.innerHTML=`
    <div class="xq-layout">
      <aside class="xq-sidebar" aria-label="策略列表">
        <div class="xq-side-title">策略</div>
        ${h}
      </aside>
      <div class="xq-main">
        <div class="xq-chips" aria-label="策略分類">${u}</div>
        <div class="xq-panel-host">${rt(l,t,r)}</div>
      </div>
    </div>
    <p class="xq-foot">${c((t.disclaimer||"").split("。")[0]+(t.disclaimer?"。":""))}</p>
  `;const o=a.querySelector(".xq-panel-host");let b=l.id;const y=()=>{pe(o,t),o==null||o.querySelectorAll("[data-xq-market]").forEach(d=>{d.addEventListener("click",()=>{r=d.getAttribute("data-xq-market")||"TW",g(b)})}),o==null||o.querySelectorAll("a.term").forEach(d=>{d.addEventListener("click",f=>{const v=d.getAttribute("data-term"),k=document.getElementById(`term-${v}`);k&&(f.preventDefault(),k.tagName==="DETAILS"&&(k.open=!0),k.scrollIntoView({behavior:"smooth",block:"start"}),k.classList.add("flash"),setTimeout(()=>k.classList.remove("flash"),1600))})})},g=d=>{const f=t.strategies.find(v=>v.id===d);!f||!o||(b=d,o.innerHTML=rt(f,t,r),a.querySelectorAll("[data-xq-id]").forEach(v=>{const k=v.getAttribute("data-xq-id")===d;v.classList.toggle("active",k),v.tagName==="BUTTON"&&v.setAttribute("aria-pressed",k?"true":"false")}),y())};a.querySelectorAll("[data-xq-id]").forEach(d=>{d.addEventListener("click",()=>g(d.getAttribute("data-xq-id")))}),y()}function oe(e){const t=e.hits||[];if(!t.length)return"";const a=[...new Set(t.flatMap(r=>Object.keys(r.metrics||{})))],i=["ticker","name","market","ohlcvBarDate",...a],s=r=>{const u=r==null?"":String(r);return/[",\n]/.test(u)?`"${u.replace(/"/g,'""')}"`:u},l=t.map(r=>{const u=r.metrics||{};return[r.ticker,r.name,r.market,r.ohlcvBarDate||"",...a.map(h=>u[h])].map(s).join(",")});return[i.join(","),...l].join(`
`)}function de(e,t,a){const i=new Blob([t],{type:a}),s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3)}function pe(e,t){var a,i;(a=e==null?void 0:e.querySelector("[data-xq-copy]"))==null||a.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(t,null,2));const s=e.querySelector("[data-xq-copy]");if(s){const l=s.textContent;s.textContent="已複製",setTimeout(()=>s.textContent=l,1200)}}catch{}}),(i=e==null?void 0:e.querySelector("[data-xq-csv]"))==null||i.addEventListener("click",()=>{var u;const s=(u=e.querySelector(".xq-panel"))==null?void 0:u.getAttribute("data-strategy-id"),l=t.strategies.find(h=>h.id===s);if(!l)return;const r=oe(l);if(!r){alert("此策略今日無命中列可匯出");return}de(`${l.id}-hits.csv`,"\uFEFF"+r,"text/csv;charset=utf-8")})}async function ue(e="#xq-root"){try{const t=await ne();return ce(e,t),{ok:!0,data:t}}catch(t){const a=document.querySelector(e);return a&&(a.innerHTML=`<div class="xq-empty"><p>無法載入策略選股（${c(t.message)}）。請確認已執行 <code>npm run strategies</code>。</p></div>`),{ok:!1,error:t}}}const me="./data/latest.json";function A(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function T(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(t)}%`}function I(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString("zh-TW",{minimumFractionDigits:t,maximumFractionDigits:t})}function z(e,t){if(e==null||Number.isNaN(e))return"—";const a=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"$":t==="TWD"?"NT$":""}${I(e,a)}`}function he(e){try{return new Date(e).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+"（台北）"}catch{return e}}function Q(e){const t=e.aboveSma20?`<span class="badge sma-on">${n("sma20","SMA20↑")}</span>`:`<span class="badge sma-off">${n("sma20","SMA20↓")}</span>`,a=e.aboveSma50?`<span class="badge sma-on">${n("sma50","SMA50↑")}</span>`:`<span class="badge sma-off">${n("sma50","SMA50↓")}</span>`;return t+a}function tt(e){return e!=null&&e.length?e.map(t=>{const a=String(t);return a==="A"?`<span class="badge screen">${n("screenA","A")}</span>`:a==="B"?`<span class="badge screen">${n("screenB","B")}</span>`:a==="C"?`<span class="badge screen">${n("screenC","C")}</span>`:a==="observe"?'<span class="badge screen">觀察</span>':`<span class="badge screen">${c(a)}</span>`}).join(""):""}function ve(e){var i,s,l,r,u;const t=[],a=(h,o,b)=>{if(!b)return;const y=b.incomplete,g=b.value!=null?I(b.value,2):y?"資料不全":"—",m=b.dayPct!=null?`<div class="pct ${A(b.dayPct)}">${T(b.dayPct)}</div>`:"",d=b.session==="intraday"?` · ${n("intraday","盤中")}`:"";t.push(`
      <div class="index-chip ${y?"incomplete":""}">
        <div class="label">${o}${d}</div>
        <div class="value">${g}</div>
        ${m}
      </div>
    `)};if(a("tw",n("taiex",((i=e.tw)==null?void 0:i.name)||"台灣加權 TAIEX"),e.tw),a("otc",n("otc",((s=e.otc)==null?void 0:s.name)||"櫃買"),e.otc),a("spx",n("spx",((l=e.spx)==null?void 0:l.name)||"S&P 500"),e.spx),a("nasdaq",n("nasdaq",((r=e.nasdaq)==null?void 0:r.name)||"Nasdaq"),e.nasdaq),a("sox",n("sox",((u=e.sox)==null?void 0:u.name)||"SOX"),e.sox),e.usdTwd){const h=e.usdTwd,o=h.taipeiClose??h.yahoo;t.push(`
      <div class="index-chip">
        <div class="label">${n("usdtwd","USD/TWD")}</div>
        <div class="value">${I(o,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          台北收 ${h.taipeiClose!=null?I(h.taipeiClose,3):"—"}
          · Yahoo ${h.yahoo!=null?I(h.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${t.join("")}</div>`}function fe(e,t){const a=e.market==="TW"?n("twStock","台股"):e.market==="US"?n("usStock","美股"):c(e.market||""),i=e.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${n("rs","RS vs 指數")}</div><div class="m-val ${A(e.rsVsIndexPp)}">${T(e.rsVsIndexPp)}</div></div>`:e.priorClosePct!=null?`<div class="metric"><div class="m-label">${n("priorClose","前收漲幅")}</div><div class="m-val ${A(e.priorClosePct)}">${T(e.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${n("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${t}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${n("ticker",e.ticker)}</div>
          <div class="name">${c(e.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${z(e.price,e.currency)}</div>
          <div class="day-pct ${A(e.dayPct)}">${T(e.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${a}</span>
        ${tt(e.screens)}
        ${Q(e)}
      </div>
      <div class="metrics">
        ${i}
        <div class="metric"><div class="m-label">${n("pct5d","5 日")}</div><div class="m-val ${A(e.pct5d)}">${T(e.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${n("pct1m","約 1 月")}</div><div class="m-val ${A(e.pct1m)}">${T(e.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${n("volRatio","量比")}</div><div class="m-val">${e.volRatio!=null?I(e.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${e.business||e.why||e.risk?`<details class="fold-block card-fold"><summary>詳情</summary>
        ${e.business?`<p class="card-text"><strong>本業</strong>　${c(e.business)}</p>`:""}
        ${e.why?`<p class="card-text"><strong>理由</strong>　${c(e.why)}</p>`:""}
        ${e.risk?`<p class="card-text risk"><strong>風險</strong>　${xt(e.risk)}</p>`:""}
      </details>`:""}
      <div data-ticker-comments="${c(e.ticker)}" data-market="${c(e.market==="TW"||String(e.ticker).endsWith(".TW")?"TW":"US")}"></div>
    </article>
  `}function xt(e){let t=c(e);return t=t.replace(/漲停/g,n("limitUp","漲停")),t=t.replace(/動能/g,n("momentum","動能")),t}function nt(e){return e.map(t=>{const a=t.rsVsIndexPp??t.priorClosePct,i=t.rsVsIndexPp!=null?T(t.rsVsIndexPp):t.priorClosePct!=null?T(t.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${c(t.ticker)}</span></td>
        <td class="name-cell">${c(t.name||"")}</td>
        <td class="num">${z(t.price,t.currency)}</td>
        <td class="num ${A(t.dayPct)}">${T(t.dayPct)}</td>
        <td class="num ${A(a)}">${i}</td>
        <td class="num ${A(t.pct5d)}">${T(t.pct5d)}</td>
        <td class="num ${A(t.pct1m)}">${T(t.pct1m)}</td>
        <td class="num">${t.volRatio!=null?I(t.volRatio,2)+"×":"—"}</td>
        <td>${Q(t)}</td>
        <td>${tt(t.screens)}</td>
        <td class="why-cell">${c(t.why||"")}</td>
      </tr>`}).join("")}function ct(e){return e.map(t=>{const a=t.rsVsIndexPp!=null?`<span class="${A(t.rsVsIndexPp)}">${n("rs","RS")} ${T(t.rsVsIndexPp)}</span>`:t.priorClosePct!=null?`<span class="${A(t.priorClosePct)}">${n("priorClose","前收")} ${T(t.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(t.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${c(t.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${z(t.price,t.currency)}</div>
            <div class="${A(t.dayPct)}" style="font-family:var(--mono);font-weight:600">${T(t.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${a}
          <span class="${A(t.pct5d)}">${n("pct5d","5d")} ${T(t.pct5d)}</span>
          <span class="${A(t.pct1m)}">${n("pct1m","1m")} ${T(t.pct1m)}</span>
          <span>${n("volRatio","量比")} ${t.volRatio!=null?I(t.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${Q(t)}${tt(t.screens)}</div>
        ${t.why?`<p class="lc-why">${c(t.why)}</p>`:""}
        ${t.risk&&t.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">風險：${xt(t.risk)}</p>`:""}
        <div data-ticker-comments="${c(t.ticker)}" data-market="${c(String(t.ticker).endsWith(".TW")||t.market==="TW"?"TW":"US")}"></div>
      </div>`}).join("")}function be(e){if(!e)return"";const t=e.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${n("adr","ADR")} ${n("parity","平價")}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${n("usStock","美股")} ${n("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${z(e.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${n("adsRatio","換股比")}</span>　<strong>${c(e.adsRatio||"—")}</strong></div>
          <div class="row"><span>${n("parity","隱含價")}</span>　<strong>${e.impliedUsdTaipeiFx!=null?I(e.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${n("premium","溢價")}</span>　<strong class="${A(t)}">${T(t)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${n("twStock","台股")}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${z(e.tw2330,"TWD")}</div>
        </div>
        ${e.note?`<p class="parity-note">${c(e.note)}</p>`:""}
      </div>
    </section>
  `}function ge(e){if(!e)return"";const t={A:"screenA",B:"screenB",C:"screenC"},a=Object.keys(e).map(i=>{const s=t[i]||"screening";return`<li><span class="screen-key">${n(s,i)}</span><span>${c(e[i])}</span></li>`}).join("");return`
    <details class="fold-block help-fold" id="help-method">
      <summary>詳情 · ${n("screening","每日篩選條件")}</summary>
      <ul class="method-list fold-list">${a}</ul>
    </details>
  `}function ye(e){return`
    <div class="help-doc">
      <header class="view-header">
        <h2 class="view-title">說明</h2>
      </header>
      <ul class="help-short">
        <li><strong>今日</strong> — 動能／相對強度／均線／量比篩選候選</li>
        <li><strong>策略</strong> — 價量／籌碼／財務／大師條件命中</li>
        <li><strong>模擬</strong> — 自 2026-09-15 累計；訊號即成交（非真實下單）</li>
        <li><strong>社群</strong> — 站內討論與外部公開摘要（僅供參考）</li>
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
      ${ge(e==null?void 0:e.method)}
      <details class="fold-block help-fold" id="help-strategies">
        <summary>詳情 · 策略選股</summary>
        <p class="fold-p">缺 PE／ROE 等欄位則略過，不填假數字。輸出 <code>strategy-screener.json</code>。</p>
      </details>
      <details class="fold-block help-fold" id="help-paper">
        <summary>詳情 · 紙上模擬</summary>
        <ul class="fold-list">
          <li>台股帳：NT$3,000,000（獨立）</li>
          <li>美股帳：US$100,000（獨立）</li>
          <li>同一 <code>asOf</code> 只處理一次；買進即成交</li>
        </ul>
      </details>
    </div>
  `}function $e(){return'<div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>'}function X(e){return e?e.market==="TW"||e.market==="US"?e.market:String(e.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function ot(e,t){const a=new Set,i=[],s=l=>{if(!(l!=null&&l.ticker)||a.has(l.ticker))return;const r=X(l);t&&r!==t||(a.add(l.ticker),i.push({ticker:l.ticker,market:r,name:l.name||""}))};return(e.top5||[]).forEach(s),(!t||t==="TW")&&(e.tw||[]).forEach(s),(!t||t==="US")&&(e.us||[]).forEach(s),i}function ke(e){return e==="TW"?"__TW__":"__US__"}function dt(e,t){return e.length?`<div class="top5-grid">${e.map((a,i)=>fe(a,i+1)).join("")}</div>`:`<div class="empty-state">${c(t)} 暫無 Top 候選</div>`}function Se(e){const t=ot(e,"US"),a=ot(e,"TW"),i=(s,l)=>s.map((r,u)=>`<button type="button" class="chat-chip${u===0?" active":""}" data-ticker="${c(r.ticker)}" data-market="${l}" hidden>${c(r.ticker)}</button>`).join("");return`
    <div class="chat-room" id="chat-room" data-market="US" data-mode="lobby">
      <header class="chat-room-bar">
        <div class="chat-market-tabs" role="tablist" aria-label="市場">
          <button type="button" class="chat-mkt active" data-chat-market="US" role="tab" aria-selected="true">美股聊天</button>
          <button type="button" class="chat-mkt" data-chat-market="TW" role="tab" aria-selected="false">台股聊天</button>
        </div>
        <label class="chat-fx-toggle">
          <input type="checkbox" id="ss-danmaku-toggle" />
          <span>彈幕效果</span>
        </label>
      </header>
      <div class="chat-sub-tabs" role="tablist" aria-label="房間">
        <button type="button" class="chat-tab active" data-chat-mode="lobby" role="tab" aria-selected="true">大廳</button>
        <button type="button" class="chat-tab" data-chat-mode="ticker" role="tab" aria-selected="false">個股</button>
      </div>
      <div class="chat-chip-row" data-chip-market="US" role="tablist" aria-label="美股標的" hidden>
        ${i(t,"US")||'<span class="chat-empty">暫無美股標的</span>'}
      </div>
      <div class="chat-chip-row" data-chip-market="TW" role="tablist" aria-label="台股標的" hidden>
        ${i(a,"TW")||'<span class="chat-empty">暫無台股標的</span>'}
      </div>
      <div id="ss-chat-mount" class="chat-shell" aria-label="聊天室"></div>
      <details class="fold-block chat-external">
        <summary>外部討論</summary>
        <div id="ss-social-digest" aria-label="外部討論摘要"></div>
        <div id="ss-giscus" class="ss-giscus-section" aria-label="Giscus">
          <div class="ss-giscus-host"></div>
        </div>
      </details>
    </div>
  `}const xe=[{id:"today",label:"今日",hash:"today"},{id:"strategies",label:"策略",hash:"strategies"},{id:"paper",label:"模擬",hash:"paper"},{id:"social",label:"社群",hash:"social"},{id:"help",label:"說明",hash:"help"}],wt={today:"today",strategies:"strategies",paper:"paper",social:"social",help:"help",glossary:"help",danmaku:"social","social-digest":"social",giscus:"social",method:"help"},we={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',social:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.5 3.1 6L5 21l4.3-1.4c.9.3 1.8.4 2.7.4 5 0 9-3.6 9-8s-4-8-9-8zm-1 5h2v5h-2V8zm0 6h2v2h-2v-2z"/></svg>',help:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 15a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1.6-5.35c-.55.35-.85.6-.95 1.1l-.1.75h-1.5l.12-.95c.15-.95.7-1.5 1.4-1.95.55-.35.9-.6.9-1.15 0-.55-.45-.95-1.15-.95-.75 0-1.2.4-1.35 1.05l-1.45-.35C9.75 8.2 10.7 7.2 12.2 7.2c1.65 0 2.85 1 2.85 2.4 0 .85-.45 1.5-1.45 2.05z"/></svg>'};function pt(){const e=(location.hash||"").replace(/^#/,"").split(/[/?]/)[0].toLowerCase();return wt[e]||"today"}function ut(e){return xe.map(t=>{const a=we[t.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${t.id}"
        data-variant="${e}"
        aria-label="${t.label}"
        aria-current="false">
        <span class="nav-icon">${a}</span>
        <span class="nav-label">${t.label}</span>
      </button>`}).join("")}function Te(e,t){const a=e.top5||[],i=e.us||[],s=e.tw||[],l=c("投資涉及風險，資訊僅供參考，非投資建議");return`
    ${$e()}

    <header class="site-chrome">
      <div class="chrome-row">
        <div class="chrome-brand">
          <div class="brand-mark" aria-hidden="true"></div>
          <div class="brand-text">
            <h1>${n("screening","每日數學選股")}</h1>
            <p class="brand-meta">資料 ${he(e.asOf)}</p>
          </div>
        </div>
        <nav class="nav-desktop" aria-label="主要導覽">
          ${ut("desktop")}
        </nav>
      </div>
      <p class="disclaimer-line" role="note">${l}</p>
      <div class="market-strip-wrap" aria-label="市場報價">
        <span class="market-strip-label">熱門</span>
        ${ve(e.indices||{})}
      </div>
    </header>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">今日選股</h2>
        </header>
        <div class="tabs market-tabs" role="tablist" aria-label="市場">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${n("usStock","美股")}（${i.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${n("twStock","台股")}（${s.length}）</button>
        </div>
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${n("usStock","美股")} Top</h2>
            ${dt(a.filter(r=>X(r)==="US"),"美股")}
          </section>
          <section class="section">
            <h2 class="section-title">美股清單</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>
                  <tr>
                    <th>${n("ticker","代碼")}</th>
                    <th>名稱</th>
                    <th>價格</th>
                    <th>${n("dayPct","日漲跌")}</th>
                    <th>${n("rs","RS")}／${n("priorClose","前收")}</th>
                    <th>${n("pct5d","5 日")}</th>
                    <th>${n("pct1m","約 1 月")}</th>
                    <th>${n("volRatio","量比")}</th>
                    <th>均線</th>
                    <th>${n("screening","篩選")}</th>
                    <th>理由</th>
                  </tr>
                </thead>
                <tbody>${nt(i)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${ct(i)}</div>
          </section>
        </div>
        <div class="panel" id="panel-tw" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${n("twStock","台股")} Top</h2>
            ${dt(a.filter(r=>X(r)==="TW"),"台股")}
          </section>
          <section class="section">
            <h2 class="section-title">台股清單</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>
                  <tr>
                    <th>${n("ticker","代碼")}</th>
                    <th>名稱</th>
                    <th>價格</th>
                    <th>${n("dayPct","日漲跌")}</th>
                    <th>${n("rs","RS")}／${n("priorClose","前收")}</th>
                    <th>${n("pct5d","5 日")}</th>
                    <th>${n("pct1m","約 1 月")}</th>
                    <th>${n("volRatio","量比")}</th>
                    <th>均線</th>
                    <th>${n("screening","篩選")}</th>
                    <th>理由</th>
                  </tr>
                </thead>
                <tbody>${nt(s)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${ct(s)}</div>
          </section>
        </div>
        ${be(e.parity)}
      </div>
      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${re()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${jt(t)}
      </div>

      <div class="view view-social" id="view-social" data-view="social" hidden>
        <span id="social" class="view-anchor" tabindex="-1"></span>
        ${Se(e)}
      </div>

      <div class="view" id="view-help" data-view="help" hidden>
        <span id="help" class="view-anchor" tabindex="-1"></span>
        ${ye(e)}
        ${Tt()}
        <details class="fold-block help-fold" id="help-legal">
          <summary>詳情 · 免責</summary>
          <p class="disclaimer">${l}</p>
          <p class="tz-note">報價採台灣慣例紅漲綠跌 · 模擬交易非真實成交 · 外部摘要僅供參考</p>
        </details>
      </div>
    </main>

    <nav class="nav-bottom" aria-label="主要導覽">
      ${ut("mobile")}
    </nav>

    <p class="site-footer">投資涉及風險，資訊僅供參考，非投資建議 · 點選名詞可查看定義</p>
  `}function Ae(e,t){e.querySelectorAll(".nav-item").forEach(a=>{const i=a.dataset.nav===t;a.classList.toggle("is-active",i),a.setAttribute("aria-current",i?"page":"false")})}function qe(e,t,{updateHash:a=!0,scrollTop:i=!0}={}){const s=wt[t]||"today";if(e.querySelectorAll(".view").forEach(l=>{const r=l.dataset.view===s;l.hidden=!r,l.classList.toggle("is-active",r)}),Ae(e,s),a){const l=`#${s}`;location.hash!==l&&history.replaceState(null,"",l)}return i&&window.scrollTo(0,0),s}function Pe(e){const t=(a,i)=>qe(e,a,i);return e.querySelectorAll(".nav-item").forEach(a=>{a.addEventListener("click",()=>t(a.dataset.nav))}),e.querySelectorAll("[data-jump]").forEach(a=>{a.addEventListener("click",()=>t(a.dataset.jump))}),window.addEventListener("hashchange",()=>{t(pt(),{updateHash:!1})}),t(pt(),{updateHash:!0,scrollTop:!1}),{go:t}}function Le(e){const t=e.querySelectorAll(".tab-btn");t.forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.tab;t.forEach(s=>{const l=s.dataset.tab===i;s.classList.toggle("active",l),s.setAttribute("aria-selected",l?"true":"false")}),e.querySelectorAll(".panel").forEach(s=>{s.classList.toggle("active",s.id===`panel-${i}`)})})})}function Ce(e,t,{config:a,digest:i}={}){const s=e.querySelector("#chat-room");if(!s)return;const l=s.querySelector("#ss-chat-mount"),r=s.querySelectorAll(".chat-mkt"),u=s.querySelectorAll("[data-chat-mode]");let h=null,o="US",b="lobby";const y=()=>{s.querySelectorAll(".chat-chip-row").forEach(m=>{const d=b==="ticker"&&m.getAttribute("data-chip-market")===o;if(m.hidden=!d,d){const f=[...m.querySelectorAll(".chat-chip")];f.forEach(v=>{v.hidden=!1}),f.length&&!f.some(v=>v.classList.contains("active"))&&f[0].classList.add("active")}})},g=()=>{if(!l)return;if(h!=null&&h.destroy&&h.destroy(),b==="lobby"){const f=ke(o);h=it(l,f,{config:a,market:o,title:o==="TW"?"台股大廳":"美股大廳",emptyLine:"目前尚無訊息",maxLen:80});return}const m=s.querySelector(`.chat-chip-row[data-chip-market="${o}"]`),d=(m==null?void 0:m.querySelector(".chat-chip.active"))||(m==null?void 0:m.querySelector(".chat-chip"));if(!d){l.innerHTML='<p class="chat-empty">此市場目前無標的可討論</p>',h={destroy(){}};return}h=it(l,d.dataset.ticker,{config:a,market:o,title:d.dataset.ticker,emptyLine:"目前尚無留言"})};r.forEach(m=>{m.addEventListener("click",()=>{o=m.dataset.chatMarket,s.dataset.market=o,r.forEach(f=>{const v=f===m;f.classList.toggle("active",v),f.setAttribute("aria-selected",v?"true":"false")});const d=s.querySelector(`.chat-chip-row[data-chip-market="${o}"]`);d==null||d.querySelectorAll(".chat-chip").forEach((f,v)=>f.classList.toggle("active",v===0)),y(),g()})}),u.forEach(m=>{m.addEventListener("click",()=>{b=m.dataset.chatMode,s.dataset.mode=b,u.forEach(d=>{const f=d===m;d.classList.toggle("active",f),d.setAttribute("aria-selected",f?"true":"false")}),y(),g()})}),s.querySelectorAll(".chat-chip").forEach(m=>{m.addEventListener("click",()=>{const d=m.closest(".chat-chip-row");d==null||d.querySelectorAll(".chat-chip").forEach(f=>f.classList.toggle("active",f===m)),b==="ticker"&&g()})}),y(),g()}async function Ne(){const e=document.getElementById("app");try{const t=await fetch(me);if(!t.ok)throw new Error(`HTTP ${t.status}`);const a=await t.json(),i=await Ut();e.innerHTML=Te(a,i);const s=Pe(e);Le(e),Et(e),At(e),qt(e,{beforeScroll(){s.go("help",{updateHash:!0,scrollTop:!1})}}),await ue("#xq-root");let l=null;const r=await Kt("#ss-social-digest",R.socialDigestUrl);if(r!=null&&r.ok)l=r.data;else try{l=await $t(R.socialDigestUrl)}catch{l=null}Ce(e,a,{config:R,digest:l}),Gt(e,{config:R,digest:l}),Zt("#ss-giscus",{config:R})}catch(t){e.innerHTML=`<div class="error">無法載入資料（${c(t.message)}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。</div>`}}Ne();
