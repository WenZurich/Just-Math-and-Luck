(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const O={},N={supabaseUrl:typeof import.meta<"u"&&(O==null?void 0:O.VITE_SUPABASE_URL)||"https://whlpzhceivahkuanmmui.supabase.co",supabaseAnonKey:typeof import.meta<"u"&&(O==null?void 0:O.VITE_SUPABASE_ANON_KEY)||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",giscus:{enabled:!0,repo:"WenZurich/Just-Math-and-Luck-",repoId:"R_kgDOUcO78Q",category:"General",categoryId:"DIC_kwDOUcO78c4DFrWU",mapping:"specific",theme:"dark",lang:"zh-TW",perTicker:!1},socialDigestUrl:"./data/social-digest.json",latestUrl:"./data/latest.json",danmakuMaxLen:80,commentMaxLen:500,pollIntervalMs:8e3,postCooldownMs:4e3};globalThis.STOCK_SOCIAL_CONFIG=Object.assign(globalThis.STOCK_SOCIAL_CONFIG||{},N);const at={dayPct:{title:"日漲跌",plain:"就是「今天這支股票的價錢，比起昨天收盤時，漲了還是跌了多少」。用百分比表示，比較好跟其他股票比。",example:"昨天收盤 100 元，今天收盤 103 元，日漲跌就是 +3%。像考試分數從 100 變成 103，多了 3 分。"},pct5d:{title:"5 日漲跌",plain:"看最近大約一週（5 個交易日）這支股票總共漲了或跌了多少，不是只看今天。",example:"禮拜一 100 元，到這禮拜五變成 110 元，5 日大約就是 +10%。像一週零用錢從 100 變成 110。"},pct1m:{title:"約 1 月漲跌",plain:"看最近大約一個月（常算 21 個交易日）這支股票漲跌多少，用來看比較長一點的趨勢。",example:"一個月前 200 元，現在 220 元，約 1 月就是 +10%。像身高一個月長高一點，要看整段變化。"},rs:{title:"相對強度（RS）",plain:"把「這支股票今天的漲跌」跟「整個市場大盤今天的漲跌」相減。正的表示它比大盤更強（人家跌它比較不跌，或人家漲它漲更多）。",example:"大盤今天 −1%，某股票 +2%，RS 大約是 +3 個百分點。像全班平均考 60 分，你考 80 分，你比班級平均強。"},priorClose:{title:"前收漲幅",plain:"用「上一個完整交易日收盤價」算出來的漲跌幅度。美股若還在盤中，有時會另外標前一天收盤的表現。",example:"週一收盤比週五收盤漲了 13%，就說前收漲幅約 +13%。像昨天整場比賽的最終比分，不是今天還沒打完的分數。"},volRatio:{title:"量比",plain:"今天成交的「張數／股數」是不是比平常多。算法大概是：今天成交量 ÷ 最近約 20 天平均成交量。數字越大，表示今天很多人在買賣。",example:"平常每天成交 100 萬股，今天 300 萬股，量比約 3 倍。像平常教室很安靜，今天突然擠滿人在討論。"},sma20:{title:"SMA20（20 日均線）",plain:"把最近 20 個交易日的收盤價加起來除以 20，得到一條「平滑後的平均價」。股價在均線上面，常被看成最近偏強；在下面常被看成偏弱。",example:"最近 20 天平均價 50 元，今天股價 55 元，就是站上 SMA20。像你的體重比最近 20 天平均還高一點。"},sma50:{title:"SMA50（50 日均線）",plain:"跟 SMA20 一樣是平均價，但用更長的 50 個交易日，看比較中期的方向。",example:"50 天平均 100 元，現在股價 90 元，就是在 SMA50 下面。像月考平均，比段考平均更能看出一陣子的狀況。"},screenA:{title:"篩選 A（動能／相對強度）",plain:"用數學檢查：這支股票最近是不是漲得比大盤好、短中期動能如何、有沒有站上均線。通過的才比較容易被挑進名單。",example:"某股今天比大盤強很多，又站上 SMA20／SMA50，就可能通過篩選 A。像短跑又比同學快、成績又在平均之上。"},screenB:{title:"篩選 B（量能）",plain:"檢查今天成交量是不是明顯比平常大（量比偏高）。量很大有時代表很多人注意，但也可能波動更大。",example:"量比 14 倍表示今天成交大約是平常的 14 倍。像學校平時很少人買某樣零食，今天突然大排長龍。"},screenC:{title:"篩選 C（估值）",plain:"想用本益比之類「貴不貴」的數字來幫忙選股。如果當天抓不到可靠資料，這個篩選就會跳過，避免亂填數字。",example:"本益比像「用幾年賺的錢才回本」的粗略尺。沒有尺就先不量，不要瞎猜。"},taiex:{title:"台灣加權（TAIEX）",plain:"把台灣上市很多股票的表現加總做成一個大分數，用來代表「台股整體」今天大概漲還是跌。",example:"加權今天 −0.77%，表示整體台股平均大概跌了一點點。像全校平均分數今天比昨天低一點。"},otc:{title:"櫃買",plain:"台灣「上櫃」公司的市場（比較多中小型公司）。櫃買指數用來看這群股票整體漲跌。",example:"上市像大學部大隊，櫃買像另一個年級隊。兩邊可以分開看今天誰比較強。"},spx:{title:"S&P 500",plain:"美國 500 家大型公司組成的指數，常被拿來代表「美股大盤」。",example:"S&P 500 跌 0.5%，常被說成美股大盤今天偏弱。像美國大型公司班級的平均分數。"},nasdaq:{title:"Nasdaq（那斯達克）",plain:"美國一個重要股市指數，裡面很多科技公司，常被用來觀察科技股整體氣氛。",example:"Nasdaq 大跌時，很多科技股也可能一起抖。像科技社社團活動特別熱絡或特別冷清的溫度計。"},sox:{title:"SOX（費半）",plain:"美國半導體（做晶片）公司的指數。半導體好不好，常常影響台積電供應鏈的氣氛。",example:"SOX 大跌，常常代表晶片相關股票今天整體承壓。像「晶片班」今天考試普遍不理想。"},usdtwd:{title:"USD/TWD（美金兌台幣）",plain:"1 美元可以換多少台幣。數字變大，常表示台幣變弱（同樣 1 美元換到更多台幣）；數字變小則相反。",example:"匯率 32，表示 1 美元約換 32 元台幣。你要買 10 美元零食，大約要付 320 元台幣。"},adr:{title:"ADR",plain:"美國存託憑證：讓投資人在美國市場買賣「外國公司」的股票憑證。例如台積電在美國有 TSM 這個 ADR。",example:"你在美國超市買「台灣零食的美國包裝版」。東西本質相近，但包裝市場不同，價錢也可能不太一樣。"},parity:{title:"平價／隱含價",plain:"用台股價格、換股比例和匯率，算出「如果完全公平換算，ADR 大概該是多少美元」。拿來跟實際 ADR 價比較。",example:"5 股台積電 ÷ 匯率，算出 ADR 理論價約 374 美元。像用匯率把台幣玩具價換算成美元標價。"},premium:{title:"溢價",plain:"實際市價比「換算後的理論價」還貴多少。正的溢價表示買 ADR 比照公式換算更貴；負的則比較便宜（折價）。",example:"理論 374 美元，市價 416 美元，溢價大約一成多。像同樣便當，車站賣得比學校社辦貴。"},adsRatio:{title:"換股比（ADS 比例）",plain:"一張 ADR 對應幾股本地普通股。台積電常見是 1 股 ADR＝5 股台灣普通股，但要以官方公告為準。",example:"比例 5:1 表示 1 個美國存託憑證背後約有 5 股台股。像 1 盒積木裡固定裝 5 小塊。"},limitUp:{title:"漲停",plain:"台股對一天最多能漲多少有限制（一般股票常見約 10%）。碰到上限就叫漲停，常常買不到或很難成交。",example:"股票從 100 元漲到約 110 元就可能漲停。像遊戲一天經驗值有上限，滿了就不能再加。"},momentum:{title:"動能",plain:"看價格最近是不是繼續往同一方向跑（例如連續幾天偏強）。這是數學觀察，不是保證明天還會這樣。",example:"球正在往前滾而且愈滾愈快，就說動能強。但滾到一半也可能停下或轉向。"},ticker:{title:"股票代碼（Ticker）",plain:"每支股票的簡短代號，方便電腦與市場辨認。美股多用英文字母，台股多用數字。",example:"AAPL 是蘋果，2330 是台積電。像學校學號，用來點名不會搞混。"},index:{title:"指數",plain:"把很多股票包成一個「總成績單」，用來代表某一市場或產業整體表現。",example:"加權指數、S&P 500 都是指數。像全班平均分數，不是某一個同學的分數。"},screening:{title:"數學選股／篩選",plain:"用事先講好的計算規則（漲跌、跟大盤比、均線、成交量等）自動挑出通過條件的股票，而不是靠感覺。",example:"規則：要比大盤強、量比要高。通過的進名單。像用尺量身高，過線的才能進籃球隊候補。"},notAdvice:{title:"不是投資建議",plain:"這個網站只是把公開行情算出來給你看。它不會保證賺錢，也不能代替你自己做決定。",example:"像天氣預報說可能下雨，你仍要自己決定要不要帶傘。看完數字也不等於一定要買。"},intraday:{title:"盤中",plain:"股市還在交易、價格還會一直變動的時候。跟「收盤」（今天交易結束後的最終價）不一樣。",example:"考試還沒結束，分數還可能改；收盤像交卷後的最終分數。"},twStock:{title:"台股",plain:"在台灣證券市場交易的股票，價錢多用新台幣計價。",example:"2330 台積電、2308 台達電都是台股。"},usStock:{title:"美股",plain:"在美國市場交易的股票，價錢多用美元計價。",example:"AAPL、NVDA、CRWD 都是美股。"},paperTrade:{title:"模擬交易",plain:"用公開行情的價格「假裝」買賣，把規則跑一遍看成績。沒有真的把錢交給券商，所以不是真實成交。",example:"像用假錢玩大富翁：規則跟算分是真的，但口袋裡的零用錢沒有真的拿去買股票。"},principal:{title:"本金",plain:"一開始放進這個模擬帳本的錢。台股帳從 300 萬元台幣開始，美股帳從 10 萬美元開始。",example:"你帶 100 元去福利社，這 100 元就是本金。後來錢包變 90 或 120，都還是從這筆本金算起。"},position:{title:"部位",plain:"現在帳本裡「持有多少股票」。部位市值＝股數 × 現在價格。再加上現金，就是這本帳的權益。",example:"買了 1000 股、一股市價 50 元，部位大約 5 萬元。像背包裡現在裝了幾包零食、值多少錢。"},stopLoss:{title:"停損",plain:"事先講好：如果這筆模擬持有虧到某個百分比，就全部賣掉，避免虧更多。本站規則是未實現大約 −3%。",example:"遊戲裡血量低於 3 格就先撤退，不要硬打到歸零。這是保護本金的數學規則，不是保證以後不會虧。"},takeProfit:{title:"停利",plain:"事先講好：如果這筆模擬持有賺到某個百分比，就先賣一部分（本站大約 +12% 賣一半），把部分獲利放進現金。",example:"考試進步很多時，先把一部分分數「存起來」。不是說後面一定會跌，只是規則到點就減碼。"},unrealizedPnl:{title:"未實現損益",plain:"股票還沒賣掉時，用現在市價跟平均成本比，算出「帳面上」賺或虧多少。還沒賣掉就不算真正進口袋。",example:"你的遊戲卡市價變貴了，但你還沒賣掉，只是帳面變有錢。真的換成現金才算已實現。"},realizedPnl:{title:"已實現損益",plain:"真的（在模擬裡）賣掉以後，成交價減平均成本，已經記入現金的賺或虧。",example:"把遊戲卡賣掉拿到錢，這筆差額才算已實現。像把零食賣掉，錢已經回到錢包。"},periodPerf:{title:"週／月／季／年績效",plain:"看權益曲線最近一週、約一個月、約一季、約一年漲跌多少。若模擬開張還沒那麼久，就改看「從成立日到現在」。",example:"帳本才成立 1 天，還沒有「一年成績」，就寫成立以來。像學期才開學，先看開學到今天，不要假裝有全年成績。"},sinceInception:{title:"成立以來",plain:"從這本模擬帳開始的那一天算到現在。當歷史不夠一週／月／季／年時，就用這個標籤，避免假裝有更長的成績。",example:"新開的存摺沒有「去年」可以比，就說開戶以來。成績單太短時要老實講。"},danmaku:{title:"彈幕",plain:"像影片上飛過去的短句子。大家可以打很短的話，從螢幕右邊飛到左邊，讓氣氛熱鬧一點。",example:"有人打「今天量比好高！」就會變成一行字飛過畫面。跟下面慢慢看的留言板不一樣，彈幕偏短、偏即時。"},comments:{title:"留言板",plain:"掛在某一支股票卡片下面的討論區。大家可以針對這支股票慢慢寫想法，字數比彈幕多一點。",example:"在 CRWD 卡片下寫「量很大但要注意風險」，之後別人還看得到。像便利貼貼在該股票旁邊。"},reddit:{title:"Reddit",plain:"一個很大的英文網路論壇，裡面有很多討論區（subreddit）。本站只讀公開搜尋結果當「氣氛參考」，不會假裝有留言。",example:"r/stocks、r/wallstreetbets 常有人討論美股。如果網站抓不到（例如被 403 擋住），會老實寫 blocker，而不是編造。"},futu:{title:"富途牛牛",plain:"一款股票 App／平台（也叫 Moomoo）。本站目前多半只能拿到公開新聞搜尋，個股社群評論通常要登入，所以會標明「非社群評論」。",example:"看到「相關公開新聞」區塊，那是新聞標題，不是牛牛圈裡網友的真實留言。"},ptt:{title:"PTT",plain:"台灣很有名的論壇（批踢踢）。本站會搜尋 Stock 看板的公開文章標題當參考。",example:"在 Stock 板搜尋「2330」可能看到營收或標的文。看得到標題與連結，不代表我們同意裡面的看法。"},dcard:{title:"Dcard",plain:"台灣年輕人常用的匿名論壇 App／網站。本站試著搜尋股票相關討論；若被反爬擋住，會老實寫 blocker。",example:"有時 API 回 403，網站就會說「抓不到」，而不是自己編假留言。"},threads:{title:"Threads",plain:"Meta 的短文社群（跟 Instagram 有關）。沒有穩定的公開匿名搜尋 API 時，本站不會假裝有貼文。",example:"如果摘要寫「需登入／SPA」，代表公開抓取失敗，請改看其他來源或本站留言。"},socialDigest:{title:"網友參考（社交摘要）",plain:"把 Reddit、富途等公開來源整理成一天的小摘要給你看氣氛。它不是精準民調，更不是叫你買或賣。",example:"像把走廊上聽到的聊天重點寫在黑板上：有聽到就寫，沒聽到就老实说「今天抓不到」。"}};function n(t,e){const s=at[t],i=e??(s==null?void 0:s.title)??t;return s?`<a class="term" href="#term-${c(t)}" data-term="${c(t)}">${c(i)}</a>`:c(i)}function c(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ot(){return`
    <section class="section glossary-section" id="glossary">
      <h2 class="section-title">名詞小辭典（點頁面上的藍字會跳到這裡）</h2>
      <p class="glossary-intro">這裡用最白話的方式解釋網站出現的詞。看不懂就點連結，再看例子。</p>
      <div class="glossary-grid">${Object.entries(at).map(([e,s])=>`
      <article class="glossary-item" id="term-${c(e)}">
        <h3>${c(s.title)}</h3>
        <p class="g-plain">${c(s.plain)}</p>
        <p class="g-example"><strong>例子：</strong>${c(s.example)}</p>
      </article>`).join("")}</div>
    </section>
  `}function dt(t){t.querySelectorAll("a.term").forEach(e=>{e.addEventListener("click",s=>{const i=e.getAttribute("data-term"),a=document.getElementById(`term-${i}`);a&&(s.preventDefault(),a.scrollIntoView({behavior:"smooth",block:"start"}),a.classList.add("flash"),setTimeout(()=>a.classList.remove("flash"),1600))})})}const pt="./data/paper-portfolio.json";function E(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function z(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function it(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString("zh-TW",{minimumFractionDigits:e,maximumFractionDigits:e})}function nt(t){return t==="USD"?"US$":t==="TWD"?"NT$":""}function R(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"?0:2;return`${nt(e)}${it(t,s)}`}function U(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"&&t>=100?0:2;return`${nt(e)}${it(t,s)}`}function rt(t){return{"screen-buy":"名單新開倉",add:"持續買進",stop:"停損","take-profit":"停利","momentum-break":"動能轉弱","off-list":"離開名單","limit-up-chase":"漲停追價急殺"}[t]||t||""}function B(t){return t?`
    <div class="paper-win">
      <div class="w-label">${t.sinceInception?n("sinceInception","成立以來"):c(t.label||"")}</div>
      <div class="w-val ${E(t.pct)}">${z(t.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function ut(t,e){return t.length?t.map(s=>{var i;return`
      <tr>
        <td><span class="ticker">${c(s.ticker)}</span></td>
        <td class="name-cell">${c(s.name||"")}</td>
        <td class="num">${(i=s.qty)==null?void 0:i.toLocaleString("zh-TW")}</td>
        <td class="num">${U(s.price,e)}</td>
        <td><span class="badge reason ${c(s.reason||"")}">${c(rt(s.reason))}</span></td>
        <td class="why-cell">${c(s.reasonText||"")}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">今天還沒有這類成交（模擬）</td></tr>'}function mt(t,e){return t.length?t.map(s=>{var r;const i=(s.mark-s.avgCost)*s.qty,a=s.avgCost?(s.mark-s.avgCost)/s.avgCost*100:0;return`
      <tr>
        <td><span class="ticker">${c(s.ticker)}</span></td>
        <td class="num">${(r=s.qty)==null?void 0:r.toLocaleString("zh-TW")}</td>
        <td class="num">${U(s.avgCost,e)}</td>
        <td class="num">${U(s.mark,e)}</td>
        <td class="num ${E(i)}">${R(i,e)}</td>
        <td class="num ${E(a)}">${z(a)}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">目前沒有持股</td></tr>'}function ft(t,e,s){const i=e.currency,a=t==="TW"?`${n("twStock","台股")}帳本`:`${n("usStock","美股")}帳本`,r=R(e.startCash,i),l=(s==null?void 0:s.totalPnl)??e.equity-e.startCash,o=(s==null?void 0:s.totalPnlPct)??(e.startCash?(e.equity-e.startCash)/e.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${a}</h3>
      <p class="paper-start">${n("principal","本金")} ${r}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">現金</div>
          <div class="k-val">${R(e.cash,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${n("position","權益（部位＋現金）")}</div>
          <div class="k-val">${R(e.equity,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總${n("realizedPnl","損益")}</div>
          <div class="k-val ${E(l)}">${R(l,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總損益 ％</div>
          <div class="k-val ${E(o)}">${z(o)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${n("periodPerf","週績效")}</div>
          ${B(s==null?void 0:s.week)}
        </div>
        <div>
          <div class="win-name">${n("periodPerf","月績效")}</div>
          ${B(s==null?void 0:s.month)}
        </div>
        <div>
          <div class="win-name">${n("periodPerf","季績效")}</div>
          ${B(s==null?void 0:s.quarter)}
        </div>
        <div>
          <div class="win-name">${n("periodPerf","年績效")}</div>
          ${B(s==null?void 0:s.year)}
        </div>
      </div>
    </article>`}function vt(t,e){return t.length?t.map(s=>{var a;const i=s.side==="SELL"?"賣":"買";return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(s.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${c(s.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${i} ${(a=s.qty)==null?void 0:a.toLocaleString("zh-TW")} 股</div>
            <div style="font-family:var(--mono)">${U(s.price,e)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${c(s.reason||"")}">${c(rt(s.reason))}</span>
        </div>
        ${s.reasonText?`<p class="lc-why">${c(s.reasonText)}</p>`:""}
      </div>`}).join(""):'<div class="list-card empty-card">今天還沒有這類成交（模擬）</div>'}function $t(t,e){return t.length?t.map(s=>{var r;const i=(s.mark-s.avgCost)*s.qty,a=s.avgCost?(s.mark-s.avgCost)/s.avgCost*100:0;return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(s.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">股數 ${(r=s.qty)==null?void 0:r.toLocaleString("zh-TW")}</div>
          </div>
          <div style="text-align:right">
            <div class="${E(i)}" style="font-family:var(--mono);font-weight:600">${R(i,e)}</div>
            <div class="${E(a)}" style="font-family:var(--mono)">${z(a)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          <span>成本 ${U(s.avgCost,e)}</span>
          <span>市價 ${U(s.mark,e)}</span>
        </div>
      </div>`}).join(""):'<div class="list-card empty-card">目前沒有持股</div>'}function Y(t,e,s){return`
    <div class="paper-table-block">
      <h4>${c(t)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${n("ticker","代碼")}</th>
              <th>名稱</th>
              <th>股數</th>
              <th>價格</th>
              <th>原因</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>${ut(e,s)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${vt(e,s)}</div>
    </div>`}function ht(t,e){return`
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
          <tbody>${mt(t,e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${$t(t,e)}</div>
    </div>`}function X(t,e,s,i,a){const r=e.currency,l=(e.trades||[]).filter(d=>d.date===i),o=l.filter(d=>d.side==="BUY"),p=l.filter(d=>d.side==="SELL");return`
    <div class="paper-panel ${a?"active":""}" id="paper-panel-${t}" role="tabpanel">
      ${ft(t,e,s)}
      ${Y("今天模擬買進",o,r)}
      ${Y("今天模擬賣出",p,r)}
      ${ht(e.positions||[],r)}
    </div>`}function gt(t){var r,l,o;if(!t||!t.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${n("paperTrade","模擬交易績效")}</h2>
        <p class="paper-missing">還沒有模擬帳本檔案。請在專案執行 <code>npm run paper</code>。</p>
      </section>`;const e=t.books.TW,s=t.books.US;let a=(t.asOf||"").slice(0,10);try{a=new Date(t.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${n("paperTrade","模擬交易績效")}</h2>
      <p class="paper-disclaimer" role="note">
        這是<strong>假裝買賣</strong>的成績單，用當日名單價格假設成交，
        <strong>不是</strong>真實券商下單，也不保證以後會這樣。
        ${n("twStock","台股")}${n("principal","本金")} NT$3,000,000　·　
        ${n("usStock","美股")}${n("principal","本金")} US$100,000。
        兩本帳分開算，不把台幣跟美元加在一起。
      </p>
      <div class="paper-rules">
        <h3>規則摘要（數學，不是感覺）</h3>
        <ul>
          <li><strong>買：</strong>當天${n("screening","篩選")}名單（只標「觀察」的先不買）。先 Top 5 再其餘。
            新名字用權益的 1% 當風險去算股數；停距大約是股價的 1.5%（${n("volRatio","量比")}很高時 2.5%）。
            單一${n("position","部位")}最多約 8% 權益。台股買得起 1 張（1000 股）才買，否則跳過。</li>
          <li><strong>持續買進：</strong>已經持有、今天還在名單、又還沒滿 8%，同一天最多再加一次。</li>
          <li><strong>賣：</strong>${n("stopLoss","停損")}未實現 ≤ −3% 全賣；
            ${n("takeProfit","停利")}≥ +12% 賣一半（很小就全賣）；
            沒站上 ${n("sma20","SMA20")} 且當日跌超過 2% 全賣；
            不在名單又虧錢全賣；當初接近${n("limitUp","漲停")}、隔日跌 ≥ 5% 也全賣。</li>
        </ul>
        <p class="paper-rules-hint">看不懂藍字？點它會跳到下方「名詞小辭典」。</p>
      </div>
      <p class="paper-combined">${c(((r=t.metrics)==null?void 0:r.combinedNote)||"台股與美股兩本帳分開計價。")}</p>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${n("twStock","台股")}帳</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${n("usStock","美股")}帳</button>
      </div>
      ${X("TW",e,(l=t.metrics)==null?void 0:l.TW,a,!0)}
      ${X("US",s,(o=t.metrics)==null?void 0:o.US,a,!1)}
    </section>`}function bt(t){const e=t.querySelectorAll(".paper-tab-btn");e.forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.paperTab;e.forEach(a=>{const r=a.dataset.paperTab===i;a.classList.toggle("active",r),a.setAttribute("aria-selected",r?"true":"false")}),t.querySelectorAll(".paper-panel").forEach(a=>{a.classList.toggle("active",a.id===`paper-panel-${i}`)})})})}async function yt(){try{const t=await fetch(pt);return t.ok?await t.json():null}catch{return null}}const Z={},Q="聊天後端尚未接上";function St(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&Z?Z:{},s=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),i=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:s,anon:i}}function W(t,e=document){return e.querySelector(t)}function H(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Tt(t,e){const s={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async select(i=40){const a=`${t}/rest/v1/danmaku?select=*&order=created_at.desc&limit=${i}`,r=await fetch(a,{headers:s});if(!r.ok)throw new Error(`danmaku select ${r.status}`);return r.json()},async insert(i){const a=await fetch(`${t}/rest/v1/danmaku`,{method:"POST",headers:s,body:JSON.stringify(i)});if(!a.ok){const r=await a.text();throw new Error(`danmaku insert ${a.status}: ${r}`)}return a.json()}}}function kt(t,e,s=12e3){if(!t)return;const i=document.createElement("div");i.className="ss-danmaku-item",i.textContent=e,i.style.top=`${8+Math.random()*42}vh`,i.style.animationDuration=`${s}ms`,t.appendChild(i),window.setTimeout(()=>i.remove(),s+200)}function wt(t={}){const e=t.root||document,s=W(t.panelSelector||"#ss-danmaku-panel",e),i=W(t.layerSelector||"#ss-danmaku-layer",e);if(!s)return{ok:!1,reason:"panel missing"};const a=t.config||globalThis.STOCK_SOCIAL_CONFIG||{},{url:r,anon:l}=St(a);let o=W(".ss-chat-status",s);o||(o=document.createElement("div"),o.className="ss-chat-status",s.insertBefore(o,s.firstChild));const p=W(".ss-chat-list",s),d=W(".ss-chat-form",s),g=d&&d.querySelector(".ss-nick"),k=d&&d.querySelector(".ss-body"),P=d&&d.querySelector('button[type="submit"]'),M=a.danmakuMaxLen||80,S=a.postCooldownMs||4e3;let w=new Set,T=null,q=!1;if(!r||!l)return o.textContent=Q+"（請設定 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY）",o.classList.add("is-warn"),d&&d.querySelectorAll("input,button").forEach(L=>{L.disabled=!0}),p&&(p.innerHTML='<li><span class="nick">系統</span>後端未接上時仍可瀏覽下方 Reddit／富途摘要。</li>'),{ok:!1,reason:"no-config",message:Q};T=Tt(r,l),o.textContent="彈幕已連線（公開發言，請保持友善）",o.classList.remove("is-warn");async function D(L=!0){try{const A=[...await T.select(40)].reverse();if(p&&(p.innerHTML=A.map(b=>`<li><span class="nick">${H(b.nickname)}</span>${H(b.body)}<span class="meta">${H(new Date(b.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join(""),p.scrollTop=p.scrollHeight),L){for(const b of A)w.has(b.id)||(w.add(b.id),kt(i,`${b.nickname}: ${b.body}`));w.size>200&&(w=new Set([...w].slice(-100)))}else A.forEach(b=>w.add(b.id))}catch(I){o.textContent=`讀取失敗：${I.message}`,o.classList.add("is-warn")}}d&&d.addEventListener("submit",async L=>{if(L.preventDefault(),!T||q)return;const I=((g==null?void 0:g.value)||"訪客").trim().slice(0,24)||"訪客",A=((k==null?void 0:k.value)||"").trim().slice(0,M);if(A){q=!0,P&&(P.disabled=!0);try{await T.insert({body:A,nickname:I}),k&&(k.value=""),await D(!0)}catch(b){o.textContent=`發送失敗：${b.message}`,o.classList.add("is-warn")}finally{window.setTimeout(()=>{q=!1,P&&(P.disabled=!1)},S)}}}),D(!1).then(()=>D(!0));const G=window.setInterval(()=>D(!0),a.pollIntervalMs||8e3);return{ok:!0,destroy(){window.clearInterval(G)}}}const tt={},At="聊天後端尚未接上",xt=[{id:"local",label:"本站留言"},{id:"reddit",label:"Reddit"},{id:"futu",label:"富途"}],Ct=[{id:"local",label:"本站留言"},{id:"ptt",label:"PTT"},{id:"dcard",label:"Dcard"},{id:"threads",label:"Threads"}];function Pt(t,e){const s=String(e||"").toUpperCase();return s==="US"||s==="TW"?s:String(t||"").toUpperCase().endsWith(".TW")?"TW":"US"}function Lt(t){return t==="TW"?Ct:xt}function It(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&tt?tt:{},s=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),i=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:s,anon:i}}function v(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Dt(t,e){const s={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(i,a=50){const r=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(i)}&order=created_at.asc&limit=${a}`,l=await fetch(r,{headers:s});if(!l.ok)throw new Error(`comments select ${l.status}`);return l.json()},async insert(i){const a=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:s,body:JSON.stringify(i)});if(!a.ok){const r=await a.text();throw new Error(`comments insert ${a.status}: ${r}`)}return a.json()}}}function Nt(){try{return window.matchMedia("(min-width: 768px)").matches}catch{return!1}}function Et(t,e,s){if(!t||!s)return null;const i=t[e];return Array.isArray(i)&&i.find(a=>String(a.ticker).toUpperCase()===String(s).toUpperCase())||null}function Ot(t,e,{futuMode:s=!1}={}){if(!t)return`<p class="ss-empty">此標的尚無 ${v(e)} 摘要（可能未納入今日抓取名單，或此市場不查該來源）。</p>`;const i=[];t.blocker&&i.push(`<p class="ss-digest-blocker">⚠ ${v(t.blocker)}</p>`);const a=t.items||[],r=t.newsRelated||[];if(a.length&&i.push(a.map(l=>{const o=l.url?v(l.url):"#",p=l.score!=null?`<span class="ss-score">▲ ${v(l.score)}</span>`:"",d=l.author?`@${v(l.author)}`:"";return`<article class="ss-digest-item">
            <a href="${o}" target="_blank" rel="noopener noreferrer">${v(l.snippet||l.title||"(無摘要)")}</a>
            <div class="ss-digest-meta">${p} ${d}</div>
          </article>`}).join("")),r.length){const l=s?"新聞／討論線索（非留言）":"相關公開新聞（非社群評論）";i.push(`<p class="ss-digest-sub">${l}</p>`),i.push(r.map(o=>`<article class="ss-digest-item">
            <a href="${o.url?v(o.url):"#"}" target="_blank" rel="noopener noreferrer">${v(o.snippet||"(無標題)")}</a>
          </article>`).join(""))}return Array.isArray(t.manualUrls)&&t.manualUrls.length&&!a.length&&i.push('<p class="ss-digest-sub">手動開啟</p>'+t.manualUrls.slice(0,4).map(l=>`<article class="ss-digest-item"><a href="${v(l)}" target="_blank" rel="noopener noreferrer">${v(l)}</a></article>`).join("")),!a.length&&!r.length&&!t.blocker&&i.push(`<p class="ss-empty">暫無 ${v(e)} 資料</p>`),i.join("")||'<p class="ss-empty">暫無資料</p>'}function Rt(t,e,s={}){if(!t||!e)return{ok:!1};const i=s.config||globalThis.STOCK_SOCIAL_CONFIG||{},a=s.digest||null,r=Pt(e,s.market||t.getAttribute("data-market")),l=Lt(r),{url:o,anon:p}=It(i),d=i.commentMaxLen||500,g=i.postCooldownMs||4e3,k=Nt()?" open":"",P=l.map((u,f)=>`<button type="button" class="ss-src-tab${f===0?" active":""}" data-src="${u.id}" role="tab" aria-selected="${f===0?"true":"false"}">${u.label}</button>`).join(""),M=l.filter(u=>u.id!=="local").map(u=>`<div class="ss-src-panel" data-panel="${u.id}" role="tabpanel" hidden></div>`).join("");t.classList.add("ss-thread"),t.dataset.market=r,t.innerHTML=`
    <details class="ss-thread-details"${k}>
      <summary>討論 ${v(e)}（${r==="TW"?"台股來源":"美股來源"}）</summary>
      <div class="ss-src-tabs" role="tablist" aria-label="${v(e)} 來源">${P}</div>
      <div class="ss-src-panels">
        <div class="ss-src-panel active" data-panel="local" role="tabpanel">
          <div class="ss-thread-status"></div>
          <form class="ss-thread-form">
            <input class="ss-nick" maxlength="24" placeholder="暱稱（可空＝訪客）" autocomplete="nickname" />
            <textarea class="ss-body" maxlength="${d}" rows="2" placeholder="匿名留言（最多 ${d} 字，無需登入）" required></textarea>
            <button type="submit">送出</button>
          </form>
          <ul class="ss-thread-list"></ul>
        </div>
        ${M}
      </div>
    </details>
  `;const S=t.querySelector(".ss-thread-status"),w=t.querySelector(".ss-thread-list"),T=t.querySelector(".ss-thread-form"),q={ptt:["ptt","PTT",!1],dcard:["dcard","Dcard",!1],threads:["threads","Threads",!1],reddit:["reddit","Reddit",!1],futu:["futu","富途",!0]};for(const u of l){if(u.id==="local")continue;const f=q[u.id];if(!f)continue;const[y,x,V]=f,J=t.querySelector(`[data-panel="${u.id}"]`);J&&(J.innerHTML=Ot(Et(a,y,e),x,{futuMode:V}))}const D=t.querySelectorAll(".ss-src-tab"),G=t.querySelectorAll(".ss-src-panel");if(D.forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.src;D.forEach(y=>{const x=y.dataset.src===f;y.classList.toggle("active",x),y.setAttribute("aria-selected",x?"true":"false")}),G.forEach(y=>{const x=y.dataset.panel===f;y.classList.toggle("active",x),y.hidden=!x})})}),!o||!p){S.textContent=At+"（需 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY；見 README）。UI 已就緒，匿名發言尚未接通。",S.className="ss-thread-status is-warn",T.querySelectorAll("input,textarea,button").forEach(f=>{f.disabled=!0});const u=r==="TW"?"可切換上方分頁看 PTT／Dcard／Threads 摘要":"可切換上方分頁看 Reddit／富途摘要";return w.innerHTML=`<li class="ss-empty">本站匿名留言需 Supabase anon INSERT（RLS）。不會假裝送出後丟掉。${u}；全站 Giscus 需 GitHub 登入，僅作備援。</li>`,{ok:!1,reason:"no-config",market:r}}const L=Dt(o,p);S.textContent="開放匿名討論（無需登入，請保持友善）";let I=!1;async function A(){try{const u=await L.list(e);if(!u.length){w.innerHTML='<li class="ss-empty">尚無留言，來當第一個吧。</li>';return}w.innerHTML=u.map(f=>`<li><strong>${v(f.nickname)}</strong> ${v(f.body)}<span class="meta">${v(new Date(f.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join("")}catch(u){S.textContent=`讀取失敗：${u.message}`,S.className="ss-thread-status is-warn"}}T.addEventListener("submit",async u=>{if(u.preventDefault(),I)return;const f=(T.querySelector(".ss-nick").value||"訪客").trim().slice(0,24)||"訪客",y=(T.querySelector(".ss-body").value||"").trim().slice(0,d);if(!y)return;I=!0;const x=T.querySelector("button");x.disabled=!0;try{await L.insert({ticker:e,body:y,nickname:f}),T.querySelector(".ss-body").value="",await A()}catch(V){S.textContent=`發送失敗：${V.message}`,S.className="ss-thread-status is-warn"}finally{window.setTimeout(()=>{I=!1,x.disabled=!1},g)}}),A();const b=window.setInterval(A,i.pollIntervalMs||1e4);return{ok:!0,market:r,destroy(){window.clearInterval(b)}}}function Ut(t=document,e={}){const s=t.querySelectorAll("[data-ticker-comments]"),i=[];return s.forEach(a=>{const r=a.getAttribute("data-ticker-comments")||a.dataset.ticker,l=a.getAttribute("data-market")||void 0;r&&i.push(Rt(a,r,{...e,market:l}))}),i}function Mt(t,e){if(!t||!e||t.querySelector("script[data-giscus], iframe.giscus-frame"))return;const s=document.createElement("script");s.src="https://giscus.app/client.js",s.async=!0,s.crossOrigin="anonymous",s.setAttribute("data-giscus","1"),s.setAttribute("data-repo",e.repo||""),s.setAttribute("data-repo-id",e.repoId||""),s.setAttribute("data-category",e.category||"General"),s.setAttribute("data-category-id",e.categoryId||""),s.setAttribute("data-mapping",e.mapping==="pathname"?"pathname":"specific"),s.setAttribute("data-term",e.term||"site-discussion"),s.setAttribute("data-strict","0"),s.setAttribute("data-reactions-enabled","1"),s.setAttribute("data-emit-metadata","0"),s.setAttribute("data-input-position","bottom"),s.setAttribute("data-theme",e.theme||"dark"),s.setAttribute("data-lang",e.lang||"zh-TW"),t.appendChild(s)}function qt(t="#ss-giscus",e={}){const s=document.querySelector(t);if(!s)return{ok:!1,reason:"missing"};const a=(e.config||globalThis.STOCK_SOCIAL_CONFIG||{}).giscus||{};if(!a.enabled||!a.repoId||!a.categoryId)return s.innerHTML='<p class="ss-chat-status is-warn">Giscus 尚未設定（需 repoId / categoryId）。請見 README。</p>',{ok:!1,reason:"no-config"};const r=s.querySelector(".ss-giscus-host")||s;return Mt(r,{...a,term:a.term||"site-discussion"}),{ok:!0}}function h(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function et(t){const e=t.score!=null?`<span class="ss-score">▲ ${h(t.score)}</span>`:"",s=t.author?`@${h(t.author)}`:"",i=t.created?h(new Date(t.created).toLocaleString("zh-TW",{hour12:!1})):t.date?h(t.date):"";return`<article class="ss-digest-item">
    <a href="${t.url?h(t.url):"#"}" target="_blank" rel="noopener noreferrer">${h(t.snippet||t.title||"(無摘要)")}</a>
    <div class="ss-digest-meta">${e} ${s} ${i}</div>
  </article>`}function Wt(t,e,{futuMode:s=!1}={}){const i=t.blocker?`<p class="ss-digest-blocker">⚠ ${h(t.blocker)}</p>`:"",a=t.items||[],r=t.newsRelated||[];let l="";return a.length&&(l+=a.map(et).join("")),r.length&&(l+=`<p class="ss-digest-sub">${s?"新聞／討論線索（非留言）":"相關公開新聞（非社群評論）"}</p>`+r.map(et).join("")),l||(l=`<p class="ss-empty">此標的暫無${h(e)}資料</p>`),`<section class="ss-digest-ticker" data-ticker="${h(t.ticker)}">
    <h4>${h(t.ticker)}</h4>
    ${i}
    ${l}
  </section>`}function _(t,e,s,i={}){const a=(e||[]).map(r=>Wt(r,s,i)).join("");return`<div class="ss-digest-col">
    <h4 class="ss-digest-col-title">${h(t)}</h4>
    ${a||`<p class="ss-empty">無 ${h(t)} 區塊（今日無對應市場標的或尚未抓取）</p>`}
  </div>`}async function lt(t){const e=globalThis.STOCK_SOCIAL_CONFIG||{},s=t||e.socialDigestUrl||"./data/social-digest.json",i=await fetch(s,{cache:"no-cache"});if(!i.ok)throw new Error(`social-digest ${i.status}`);return i.json()}function _t(t,e){if(!e)return;const s=t.asOf?new Date(t.asOf).toLocaleString("zh-TW",{hour12:!1}):"—",i=(t.notes||[]).map(r=>`<li>${h(r)}</li>`).join(""),a=t.routing?'<p class="ss-digest-routing">路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads</p>':"";e.innerHTML=`
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>今日社交摘要</h3>
        <p class="ss-digest-asof">資料時間：${h(s)}</p>
        ${a}
        ${i?`<ul class="ss-digest-notes">${i}</ul>`:""}
      </header>
      <div class="ss-digest-market">
        <h4 class="ss-digest-market-title">美股來源</h4>
        <div class="ss-digest-cols ss-digest-cols-multi">
          ${_("Reddit",t.reddit,"Reddit")}
          ${_("富途牛牛",t.futu,"富途",{futuMode:!0})}
        </div>
      </div>
      <div class="ss-digest-market">
        <h4 class="ss-digest-market-title">台股來源</h4>
        <div class="ss-digest-cols ss-digest-cols-multi">
          ${_("PTT",t.ptt,"PTT")}
          ${_("Dcard",t.dcard,"Dcard")}
          ${_("Threads",t.threads,"Threads")}
        </div>
      </div>
    </div>
  `}async function jt(t="#ss-social-digest",e){const s=document.querySelector(t);if(!s)return{ok:!1};try{const i=await lt(e);return _t(i,s),{ok:!0,data:i}}catch(i){return s.innerHTML=`<p class="ss-digest-blocker">社交摘要尚未產生或讀取失敗：${h(i.message)}</p>`,{ok:!1,error:i}}}const Bt="./data/latest.json";function $(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function m(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function C(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString("zh-TW",{minimumFractionDigits:e,maximumFractionDigits:e})}function j(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${C(t,s)}`}function zt(t){try{return new Date(t).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+"（台北）"}catch{return t}}function F(t){const e=t.aboveSma20?`<span class="badge sma-on">${n("sma20","SMA20↑")}</span>`:`<span class="badge sma-off">${n("sma20","SMA20↓")}</span>`,s=t.aboveSma50?`<span class="badge sma-on">${n("sma50","SMA50↑")}</span>`:`<span class="badge sma-off">${n("sma50","SMA50↓")}</span>`;return e+s}function K(t){return t!=null&&t.length?t.map(e=>{const s=String(e);return s==="A"?`<span class="badge screen">${n("screenA","A")}</span>`:s==="B"?`<span class="badge screen">${n("screenB","B")}</span>`:s==="C"?`<span class="badge screen">${n("screenC","C")}</span>`:s==="observe"?'<span class="badge screen">觀察</span>':`<span class="badge screen">${c(s)}</span>`}).join(""):""}function Gt(t){var i,a,r,l,o;const e=[],s=(p,d,g)=>{if(!g)return;const k=g.incomplete,P=g.value!=null?C(g.value,2):k?"資料不全":"—",M=g.dayPct!=null?`<div class="pct ${$(g.dayPct)}">${m(g.dayPct)}</div>`:"",S=g.session==="intraday"?` · ${n("intraday","盤中")}`:"";e.push(`
      <div class="index-chip ${k?"incomplete":""}">
        <div class="label">${d}${S}</div>
        <div class="value">${P}</div>
        ${M}
      </div>
    `)};if(s("tw",n("taiex",((i=t.tw)==null?void 0:i.name)||"台灣加權 TAIEX"),t.tw),s("otc",n("otc",((a=t.otc)==null?void 0:a.name)||"櫃買"),t.otc),s("spx",n("spx",((r=t.spx)==null?void 0:r.name)||"S&P 500"),t.spx),s("nasdaq",n("nasdaq",((l=t.nasdaq)==null?void 0:l.name)||"Nasdaq"),t.nasdaq),s("sox",n("sox",((o=t.sox)==null?void 0:o.name)||"SOX"),t.sox),t.usdTwd){const p=t.usdTwd,d=p.taipeiClose??p.yahoo;e.push(`
      <div class="index-chip">
        <div class="label">${n("usdtwd","USD/TWD")}</div>
        <div class="value">${C(d,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          台北收 ${p.taipeiClose!=null?C(p.taipeiClose,3):"—"}
          · Yahoo ${p.yahoo!=null?C(p.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${e.join("")}</div>`}function Vt(t,e){const s=t.market==="TW"?n("twStock","台股"):t.market==="US"?n("usStock","美股"):c(t.market||""),i=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${n("rs","RS vs 指數")}</div><div class="m-val ${$(t.rsVsIndexPp)}">${m(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">${n("priorClose","前收漲幅")}</div><div class="m-val ${$(t.priorClosePct)}">${m(t.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${n("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${e}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${n("ticker",t.ticker)}</div>
          <div class="name">${c(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${j(t.price,t.currency)}</div>
          <div class="day-pct ${$(t.dayPct)}">${m(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${s}</span>
        ${K(t.screens)}
        ${F(t)}
      </div>
      <div class="metrics">
        ${i}
        <div class="metric"><div class="m-label">${n("pct5d","5 日")}</div><div class="m-val ${$(t.pct5d)}">${m(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${n("pct1m","約 1 月")}</div><div class="m-val ${$(t.pct1m)}">${m(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${n("volRatio","量比")}</div><div class="m-val">${t.volRatio!=null?C(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business?`<p class="card-text"><strong>本業</strong>　${c(t.business)}</p>`:""}
      ${t.why?`<p class="card-text"><strong>理由</strong>　${c(t.why)}</p>`:""}
      ${t.risk?`<p class="card-text risk"><strong>風險</strong>　${ct(t.risk)}</p>`:""}
      <div data-ticker-comments="${c(t.ticker)}" data-market="${c(t.market==="TW"||String(t.ticker).endsWith(".TW")?"TW":"US")}"></div>
    </article>
  `}function ct(t){let e=c(t);return e=e.replace(/漲停/g,n("limitUp","漲停")),e=e.replace(/動能/g,n("momentum","動能")),e}function Ht(t){return t.map(e=>{const s=e.rsVsIndexPp??e.priorClosePct,i=e.rsVsIndexPp!=null?m(e.rsVsIndexPp):e.priorClosePct!=null?m(e.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${c(e.ticker)}</span></td>
        <td class="name-cell">${c(e.name||"")}</td>
        <td class="num">${j(e.price,e.currency)}</td>
        <td class="num ${$(e.dayPct)}">${m(e.dayPct)}</td>
        <td class="num ${$(s)}">${i}</td>
        <td class="num ${$(e.pct5d)}">${m(e.pct5d)}</td>
        <td class="num ${$(e.pct1m)}">${m(e.pct1m)}</td>
        <td class="num">${e.volRatio!=null?C(e.volRatio,2)+"×":"—"}</td>
        <td>${F(e)}</td>
        <td>${K(e.screens)}</td>
        <td class="why-cell">${c(e.why||"")}</td>
      </tr>`}).join("")}function Ft(t){return t.map(e=>{const s=e.rsVsIndexPp!=null?`<span class="${$(e.rsVsIndexPp)}">${n("rs","RS")} ${m(e.rsVsIndexPp)}</span>`:e.priorClosePct!=null?`<span class="${$(e.priorClosePct)}">${n("priorClose","前收")} ${m(e.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(e.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${c(e.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${j(e.price,e.currency)}</div>
            <div class="${$(e.dayPct)}" style="font-family:var(--mono);font-weight:600">${m(e.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${s}
          <span class="${$(e.pct5d)}">${n("pct5d","5d")} ${m(e.pct5d)}</span>
          <span class="${$(e.pct1m)}">${n("pct1m","1m")} ${m(e.pct1m)}</span>
          <span>${n("volRatio","量比")} ${e.volRatio!=null?C(e.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${F(e)}${K(e.screens)}</div>
        ${e.why?`<p class="lc-why">${c(e.why)}</p>`:""}
        ${e.risk&&e.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">風險：${ct(e.risk)}</p>`:""}
        <div data-ticker-comments="${c(e.ticker)}" data-market="${c(String(e.ticker).endsWith(".TW")||e.market==="TW"?"TW":"US")}"></div>
      </div>`}).join("")}function st(t,e){return e!=null&&e.length?`
    <div class="panel ${t==="us"?"active":""}" id="panel-${t}" role="tabpanel">
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
          <tbody>${Ht(e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${Ft(e)}</div>
    </div>
  `:""}function Kt(t){if(!t)return"";const e=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${n("adr","ADR")} ${n("parity","平價")}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${n("usStock","美股")} ${n("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${j(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${n("adsRatio","換股比")}</span>　<strong>${c(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>${n("parity","隱含價")}</span>　<strong>${t.impliedUsdTaipeiFx!=null?C(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${n("premium","溢價")}</span>　<strong class="${$(e)}">${m(e)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${n("twStock","台股")}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${j(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${c(t.note)}</p>`:""}
      </div>
    </section>
  `}function Jt(t){if(!t)return"";const e={A:"screenA",B:"screenB",C:"screenC"},s=Object.keys(t).map(i=>{const a=e[i]||"screening";return`<li><span class="screen-key">${n(a,i)}</span><span>${c(t[i])}</span></li>`}).join("");return`
    <footer class="method-footer">
      <h3>${n("screening","篩選方法說明")}</h3>
      <ul class="method-list">${s}</ul>
      <p class="method-hint">看不懂藍字？點它會跳到下方「名詞小辭典」，還有生活例子。</p>
    </footer>
  `}function Yt(){return`
    <section class="section" id="danmaku">
      <div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>
      <h2 class="section-title">${n("danmaku","全站彈幕")}</h2>
      <div id="ss-danmaku-panel" class="ss-chat-panel" aria-label="全站彈幕聊天">
        <div class="ss-chat-status">載入中…</div>
        <form class="ss-chat-form">
          <input class="ss-nick" name="nickname" maxlength="24" placeholder="暱稱" autocomplete="nickname" />
          <input class="ss-body" name="body" maxlength="80" placeholder="短訊（最多 80 字）" required />
          <button type="submit">發送彈幕</button>
        </form>
        <ul class="ss-chat-list"></ul>
      </div>
    </section>
  `}function Xt(){return`
    <section class="section" id="social-digest">
      <h2 class="section-title">${n("socialDigest","網友參考")}</h2>
      <p class="glossary-intro">美股看 ${n("reddit","Reddit")}／${n("futu","富途")}；台股看 ${n("ptt","PTT")}／${n("dcard","Dcard")}／${n("threads","Threads")}。公開摘要抓不到會寫 blocker，不捏造；不是投資建議。</p>
      <div id="ss-social-digest" aria-label="今日社交摘要"></div>
    </section>
  `}function Zt(){return`
    <section class="section" id="giscus">
      <div id="ss-giscus" class="ss-giscus-section" aria-label="全站討論">
        <h2 class="section-title">全站討論（Giscus）</h2>
        <p class="ss-giscus-hint">
          <strong>備援</strong>：需 GitHub 登入。主要匿名${n("danmaku","彈幕")}／${n("comments","留言板")}請接 Supabase anon key（見 README），訪客無需登入即可發言。
        </p>
        <div class="ss-giscus-host"></div>
      </div>
    </section>
  `}function Qt(t,e){const s=t.top5||[],i=t.us||[],a=t.tw||[];return`
    <header class="site-header">
      <div class="header-top">
        <h1>${n("screening","每日數學選股")}</h1>
        <div class="asof">資料時間 ${zt(t.asOf)}</div>
      </div>
      <div class="disclaimer" role="note">${n("notAdvice","不是投資建議")}：${c((t.disclaimer||"本站內容非投資建議。").replace(/^本站內容為依公開行情的數學篩選候選，不是投資建議，亦不保證獲利。$/,"本站只是用公開行情算出「相對有機會觀察的名單」，不會保證賺錢。"))}</div>
      ${t.timezoneNote?`<p class="tz-note">${c(t.timezoneNote)}（${n("intraday","盤中")} 價格還會變）</p>`:""}
      <p class="glossary-jump">
        <a href="#paper">看模擬交易成績 ↓</a>
        <a href="#social-digest">網友參考 ↓</a>
        <a href="#danmaku">全站彈幕 ↓</a>
        <a href="#giscus">全站討論 ↓</a>
        <a href="#glossary">看不懂名詞？名詞小辭典 ↓</a>
      </p>
    </header>

    <p class="index-caption">${n("index","指數")}快覽（代表整個市場的「總成績單」）</p>
    ${Gt(t.indices||{})}

    <section class="section">
      <h2 class="section-title">今日 Top 5</h2>
      <div class="top5-grid">
        ${s.map((r,l)=>Vt(r,l+1)).join("")}
      </div>
    </section>

    ${gt(e)}

    ${Xt()}
    ${Yt()}

    <section class="section">
      <h2 class="section-title">選股清單</h2>
      <div class="tabs" role="tablist">
        <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${n("usStock","美股")}（${i.length}）</button>
        <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${n("twStock","台股")}（${a.length}）</button>
      </div>
      ${st("us",i)}
      ${st("tw",a)}
    </section>

    ${Kt(t.parity)}
    ${Jt(t.method)}
    ${Zt()}
    ${ot()}

    <p class="site-footer">紅漲綠跌（台灣市場慣例）· 點藍字看解釋 · 模擬交易非真實成交 · 社交摘要／聊天僅供討論參考 · 資料來自 latest.json、paper-portfolio.json、social-digest.json</p>
  `}function te(t){const e=t.querySelectorAll(".tab-btn");e.forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.tab;e.forEach(a=>{const r=a.dataset.tab===i;a.classList.toggle("active",r),a.setAttribute("aria-selected",r?"true":"false")}),t.querySelectorAll(".panel").forEach(a=>{a.classList.toggle("active",a.id===`panel-${i}`)})})})}async function ee(){const t=document.getElementById("app");try{const e=await fetch(Bt);if(!e.ok)throw new Error(`HTTP ${e.status}`);const s=await e.json(),i=await yt();t.innerHTML=Qt(s,i),te(t),bt(t),dt(t);let a=null;const r=await jt("#ss-social-digest",N.socialDigestUrl);if(r!=null&&r.ok)a=r.data;else try{a=await lt(N.socialDigestUrl)}catch{a=null}wt({config:N}),Ut(t,{config:N,digest:a}),qt("#ss-giscus",{config:N})}catch(e){t.innerHTML=`<div class="error">無法載入資料（${c(e.message)}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。</div>`}}ee();
