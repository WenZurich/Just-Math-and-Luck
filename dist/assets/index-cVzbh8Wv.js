(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const R={},M={supabaseUrl:typeof import.meta<"u"&&(R==null?void 0:R.VITE_SUPABASE_URL)||"https://whlpzhceivahkuanmmui.supabase.co",supabaseAnonKey:typeof import.meta<"u"&&(R==null?void 0:R.VITE_SUPABASE_ANON_KEY)||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",giscus:{enabled:!0,repo:"WenZurich/Just-Math-and-Luck-",repoId:"R_kgDOUcO78Q",category:"General",categoryId:"DIC_kwDOUcO78c4DFrWU",mapping:"specific",theme:"dark",lang:"zh-TW",perTicker:!1},socialDigestUrl:"./data/social-digest.json",latestUrl:"./data/latest.json",danmakuMaxLen:80,commentMaxLen:500,pollIntervalMs:8e3,postCooldownMs:4e3};globalThis.STOCK_SOCIAL_CONFIG=Object.assign(globalThis.STOCK_SOCIAL_CONFIG||{},M);const ct={dayPct:{title:"日漲跌",plain:"就是「今天這支股票的價錢，比起昨天收盤時，漲了還是跌了多少」。用百分比表示，比較好跟其他股票比。",example:"昨天收盤 100 元，今天收盤 103 元，日漲跌就是 +3%。像考試分數從 100 變成 103，多了 3 分。"},pct5d:{title:"5 日漲跌",plain:"看最近大約一週（5 個交易日）這支股票總共漲了或跌了多少，不是只看今天。",example:"禮拜一 100 元，到這禮拜五變成 110 元，5 日大約就是 +10%。像一週零用錢從 100 變成 110。"},pct1m:{title:"約 1 月漲跌",plain:"看最近大約一個月（常算 21 個交易日）這支股票漲跌多少，用來看比較長一點的趨勢。",example:"一個月前 200 元，現在 220 元，約 1 月就是 +10%。像身高一個月長高一點，要看整段變化。"},rs:{title:"相對強度（RS）",plain:"把「這支股票今天的漲跌」跟「整個市場大盤今天的漲跌」相減。正的表示它比大盤更強（人家跌它比較不跌，或人家漲它漲更多）。",example:"大盤今天 −1%，某股票 +2%，RS 大約是 +3 個百分點。像全班平均考 60 分，你考 80 分，你比班級平均強。"},priorClose:{title:"前收漲幅",plain:"用「上一個完整交易日收盤價」算出來的漲跌幅度。美股若還在盤中，有時會另外標前一天收盤的表現。",example:"週一收盤比週五收盤漲了 13%，就說前收漲幅約 +13%。像昨天整場比賽的最終比分，不是今天還沒打完的分數。"},volRatio:{title:"量比",plain:"今天成交的「張數／股數」是不是比平常多。算法大概是：今天成交量 ÷ 最近約 20 天平均成交量。數字越大，表示今天很多人在買賣。",example:"平常每天成交 100 萬股，今天 300 萬股，量比約 3 倍。像平常教室很安靜，今天突然擠滿人在討論。"},sma20:{title:"SMA20（20 日均線）",plain:"把最近 20 個交易日的收盤價加起來除以 20，得到一條「平滑後的平均價」。股價在均線上面，常被看成最近偏強；在下面常被看成偏弱。",example:"最近 20 天平均價 50 元，今天股價 55 元，就是站上 SMA20。像你的體重比最近 20 天平均還高一點。"},sma50:{title:"SMA50（50 日均線）",plain:"跟 SMA20 一樣是平均價，但用更長的 50 個交易日，看比較中期的方向。",example:"50 天平均 100 元，現在股價 90 元，就是在 SMA50 下面。像月考平均，比段考平均更能看出一陣子的狀況。"},screenA:{title:"篩選 A（動能／相對強度）",plain:"用數學檢查：這支股票最近是不是漲得比大盤好、短中期動能如何、有沒有站上均線。通過的才比較容易被挑進名單。",example:"某股今天比大盤強很多，又站上 SMA20／SMA50，就可能通過篩選 A。像短跑又比同學快、成績又在平均之上。"},screenB:{title:"篩選 B（量能）",plain:"檢查今天成交量是不是明顯比平常大（量比偏高）。量很大有時代表很多人注意，但也可能波動更大。",example:"量比 14 倍表示今天成交大約是平常的 14 倍。像學校平時很少人買某樣零食，今天突然大排長龍。"},screenC:{title:"篩選 C（估值）",plain:"想用本益比之類「貴不貴」的數字來幫忙選股。如果當天抓不到可靠資料，這個篩選就會跳過，避免亂填數字。",example:"本益比像「用幾年賺的錢才回本」的粗略尺。沒有尺就先不量，不要瞎猜。"},taiex:{title:"台灣加權（TAIEX）",plain:"把台灣上市很多股票的表現加總做成一個大分數，用來代表「台股整體」今天大概漲還是跌。",example:"加權今天 −0.77%，表示整體台股平均大概跌了一點點。像全校平均分數今天比昨天低一點。"},otc:{title:"櫃買",plain:"台灣「上櫃」公司的市場（比較多中小型公司）。櫃買指數用來看這群股票整體漲跌。",example:"上市像大學部大隊，櫃買像另一個年級隊。兩邊可以分開看今天誰比較強。"},spx:{title:"S&P 500",plain:"美國 500 家大型公司組成的指數，常被拿來代表「美股大盤」。",example:"S&P 500 跌 0.5%，常被說成美股大盤今天偏弱。像美國大型公司班級的平均分數。"},nasdaq:{title:"Nasdaq（那斯達克）",plain:"美國一個重要股市指數，裡面很多科技公司，常被用來觀察科技股整體氣氛。",example:"Nasdaq 大跌時，很多科技股也可能一起抖。像科技社社團活動特別熱絡或特別冷清的溫度計。"},sox:{title:"SOX（費半）",plain:"美國半導體（做晶片）公司的指數。半導體好不好，常常影響台積電供應鏈的氣氛。",example:"SOX 大跌，常常代表晶片相關股票今天整體承壓。像「晶片班」今天考試普遍不理想。"},usdtwd:{title:"USD/TWD（美金兌台幣）",plain:"1 美元可以換多少台幣。數字變大，常表示台幣變弱（同樣 1 美元換到更多台幣）；數字變小則相反。",example:"匯率 32，表示 1 美元約換 32 元台幣。你要買 10 美元零食，大約要付 320 元台幣。"},adr:{title:"ADR",plain:"美國存託憑證：讓投資人在美國市場買賣「外國公司」的股票憑證。例如台積電在美國有 TSM 這個 ADR。",example:"你在美國超市買「台灣零食的美國包裝版」。東西本質相近，但包裝市場不同，價錢也可能不太一樣。"},parity:{title:"平價／隱含價",plain:"用台股價格、換股比例和匯率，算出「如果完全公平換算，ADR 大概該是多少美元」。拿來跟實際 ADR 價比較。",example:"5 股台積電 ÷ 匯率，算出 ADR 理論價約 374 美元。像用匯率把台幣玩具價換算成美元標價。"},premium:{title:"溢價",plain:"實際市價比「換算後的理論價」還貴多少。正的溢價表示買 ADR 比照公式換算更貴；負的則比較便宜（折價）。",example:"理論 374 美元，市價 416 美元，溢價大約一成多。像同樣便當，車站賣得比學校社辦貴。"},adsRatio:{title:"換股比（ADS 比例）",plain:"一張 ADR 對應幾股本地普通股。台積電常見是 1 股 ADR＝5 股台灣普通股，但要以官方公告為準。",example:"比例 5:1 表示 1 個美國存託憑證背後約有 5 股台股。像 1 盒積木裡固定裝 5 小塊。"},limitUp:{title:"漲停",plain:"台股對一天最多能漲多少有限制（一般股票常見約 10%）。碰到上限就叫漲停，常常買不到或很難成交。",example:"股票從 100 元漲到約 110 元就可能漲停。像遊戲一天經驗值有上限，滿了就不能再加。"},momentum:{title:"動能",plain:"看價格最近是不是繼續往同一方向跑（例如連續幾天偏強）。這是數學觀察，不是保證明天還會這樣。",example:"球正在往前滾而且愈滾愈快，就說動能強。但滾到一半也可能停下或轉向。"},ticker:{title:"股票代碼（Ticker）",plain:"每支股票的簡短代號，方便電腦與市場辨認。美股多用英文字母，台股多用數字。",example:"AAPL 是蘋果，2330 是台積電。像學校學號，用來點名不會搞混。"},index:{title:"指數",plain:"把很多股票包成一個「總成績單」，用來代表某一市場或產業整體表現。",example:"加權指數、S&P 500 都是指數。像全班平均分數，不是某一個同學的分數。"},screening:{title:"數學選股／篩選",plain:"用事先講好的計算規則（漲跌、跟大盤比、均線、成交量等）自動挑出通過條件的股票，而不是靠感覺。",example:"規則：要比大盤強、量比要高。通過的進名單。像用尺量身高，過線的才能進籃球隊候補。"},notAdvice:{title:"不是投資建議",plain:"這個網站只是把公開行情算出來給你看。它不會保證賺錢，也不能代替你自己做決定。",example:"像天氣預報說可能下雨，你仍要自己決定要不要帶傘。看完數字也不等於一定要買。"},intraday:{title:"盤中",plain:"股市還在交易、價格還會一直變動的時候。跟「收盤」（今天交易結束後的最終價）不一樣。",example:"考試還沒結束，分數還可能改；收盤像交卷後的最終分數。"},twStock:{title:"台股",plain:"在台灣證券市場交易的股票，價錢多用新台幣計價。",example:"2330 台積電、2308 台達電都是台股。"},usStock:{title:"美股",plain:"在美國市場交易的股票，價錢多用美元計價。",example:"AAPL、NVDA、CRWD 都是美股。"},paperTrade:{title:"模擬交易",plain:"用公開行情的價格「假裝」買賣，把規則跑一遍看成績。沒有真的把錢交給券商，所以不是真實成交。",example:"像用假錢玩大富翁：規則跟算分是真的，但口袋裡的零用錢沒有真的拿去買股票。"},principal:{title:"本金",plain:"一開始放進這個模擬帳本的錢。台股帳從 300 萬元台幣開始，美股帳從 10 萬美元開始。",example:"你帶 100 元去福利社，這 100 元就是本金。後來錢包變 90 或 120，都還是從這筆本金算起。"},position:{title:"部位",plain:"現在帳本裡「持有多少股票」。部位市值＝股數 × 現在價格。再加上現金，就是這本帳的權益。",example:"買了 1000 股、一股市價 50 元，部位大約 5 萬元。像背包裡現在裝了幾包零食、值多少錢。"},stopLoss:{title:"停損",plain:"事先講好：如果這筆模擬持有虧到某個百分比，就全部賣掉，避免虧更多。本站規則是未實現大約 −3%。",example:"遊戲裡血量低於 3 格就先撤退，不要硬打到歸零。這是保護本金的數學規則，不是保證以後不會虧。"},takeProfit:{title:"停利",plain:"事先講好：如果這筆模擬持有賺到某個百分比，就先賣一部分（本站大約 +12% 賣一半），把部分獲利放進現金。",example:"考試進步很多時，先把一部分分數「存起來」。不是說後面一定會跌，只是規則到點就減碼。"},unrealizedPnl:{title:"未實現損益",plain:"股票還沒賣掉時，用現在市價跟平均成本比，算出「帳面上」賺或虧多少。還沒賣掉就不算真正進口袋。",example:"你的遊戲卡市價變貴了，但你還沒賣掉，只是帳面變有錢。真的換成現金才算已實現。"},realizedPnl:{title:"已實現損益",plain:"真的（在模擬裡）賣掉以後，成交價減平均成本，已經記入現金的賺或虧。",example:"把遊戲卡賣掉拿到錢，這筆差額才算已實現。像把零食賣掉，錢已經回到錢包。"},periodPerf:{title:"週／月／季／年績效",plain:"看權益曲線最近一週、約一個月、約一季、約一年漲跌多少。若模擬開張還沒那麼久，就改看「從成立日到現在」。",example:"帳本才成立 1 天，還沒有「一年成績」，就寫成立以來。像學期才開學，先看開學到今天，不要假裝有全年成績。"},sinceInception:{title:"成立以來",plain:"從這本模擬帳開始的那一天算到現在。當歷史不夠一週／月／季／年時，就用這個標籤，避免假裝有更長的成績。",example:"新開的存摺沒有「去年」可以比，就說開戶以來。成績單太短時要老實講。"},danmaku:{title:"彈幕",plain:"像影片上飛過去的短句子。大家可以打很短的話，從螢幕右邊飛到左邊，讓氣氛熱鬧一點。",example:"有人打「今天量比好高！」就會變成一行字飛過畫面。跟下面慢慢看的留言板不一樣，彈幕偏短、偏即時。"},comments:{title:"留言板",plain:"掛在某一支股票卡片下面的討論區。大家可以針對這支股票慢慢寫想法，字數比彈幕多一點。",example:"在 CRWD 卡片下寫「量很大但要注意風險」，之後別人還看得到。像便利貼貼在該股票旁邊。"},reddit:{title:"Reddit",plain:"一個很大的英文網路論壇，裡面有很多討論區（subreddit）。本站只讀公開搜尋結果當「氣氛參考」，不會假裝有留言。",example:"r/stocks、r/wallstreetbets 常有人討論美股。如果網站抓不到（例如被 403 擋住），會老實寫 blocker，而不是編造。"},futu:{title:"富途牛牛",plain:"一款股票 App／平台（也叫 Moomoo）。本站目前多半只能拿到公開新聞搜尋，個股社群評論通常要登入，所以會標明「非社群評論」。",example:"看到「相關公開新聞」區塊，那是新聞標題，不是牛牛圈裡網友的真實留言。"},ptt:{title:"PTT",plain:"台灣很有名的論壇（批踢踢）。本站會搜尋 Stock 看板的公開文章標題當參考。",example:"在 Stock 板搜尋「2330」可能看到營收或標的文。看得到標題與連結，不代表我們同意裡面的看法。"},dcard:{title:"Dcard",plain:"台灣年輕人常用的匿名論壇 App／網站。本站試著搜尋股票相關討論；若被反爬擋住，會老實寫 blocker。",example:"有時 API 回 403，網站就會說「抓不到」，而不是自己編假留言。"},threads:{title:"Threads",plain:"Meta 的短文社群（跟 Instagram 有關）。沒有穩定的公開匿名搜尋 API 時，本站不會假裝有貼文。",example:"如果摘要寫「需登入／SPA」，代表公開抓取失敗，請改看其他來源或本站留言。"},pe:{title:"本益比（PE）",plain:"股價 ÷ 每股盈餘。數字愈小，用「現在賺的錢」來看，股價相對愈不貴（但還要看成長與風險）。沒抓到真實數字就不填。",example:"股價 100 元、一年每股賺 10 元，本益比約 10。像用 10 年賺的錢才回本的粗略尺。"},opMargin:{title:"營益率",plain:"營業利益 ÷ 營收。看「本業做生意」到底賺多少比例，還沒算業外投資。",example:"賣飲料營收 100 元，本業成本後剩 20 元，營益率約 20%。"},grossMargin:{title:"毛利率",plain:"毛利 ÷ 營收。只扣掉進貨／製造成本，還沒扣薪水、租金等營業費用。",example:"進貨 60 元、賣 100 元，毛利 40 元，毛利率 40%。"},foreignInv:{title:"外資",plain:"外國投資機構在台股買賣的總稱。公開資料會公布他們當天買超或賣超多少股。",example:"外資買超 100 萬股，表示外國機構今天淨買進約 100 萬股（≈ 1,000 張）。"},trustInv:{title:"投信",plain:"證券投資信託公司（基金公司）在台股的買賣。常被拿來看「法人」態度。",example:"投信買超代表基金們今天淨買比較多。"},dealerInv:{title:"自營商",plain:"券商用自己的錢買賣股票的部門。三大法人通常指外資＋投信＋自營商。",example:"自營商買超，表示券商自營部門今天淨買。"},maBull:{title:"均線多頭排列",plain:"短均線在長均線上面一層層排好（例如 SMA5>SMA10>SMA20>SMA60），常被看成短中期偏多的技術型態。",example:"像跑步成績：最近 5 天平均比 10 天好、又比 20／60 天好，節奏往上。"},rsi:{title:"RSI",plain:"相對強弱指標，常用 0–100。太高可能短線過熱，太低可能超賣；本站超短線策略看「在 50 以下且往上拐」。",example:"RSI 從 35 升到 42，還在 50 下，像體力表開始回升但還沒過半。"},amplitude:{title:"振幅",plain:"當天最高價與最低價差多少，再除以昨天收盤價。振幅大表示今天價格晃得兇。",example:"昨收 100，今天最高 104、最低 99，振幅約 5%。"},zhang:{title:"張",plain:"台股交易單位：1 張＝1,000 股。看成交量或法人買賣超時，常把「股」換算成「張」比較好讀。",example:"成交 300,000 股＝300 張。本站流動性門檻常寫「>300 張」。"},strategyScreen:{title:"策略選股（邏輯條件）",plain:"像選股軟體一樣：先選一套策略，看清楚每一條條件，再列出今天通過的股票與計算欄位。",example:"選「均線多頭排列」→ 看到 SMA 與量比條件 → 下面出現命中清單。"},xqLike:{title:"XQ／選股軟體風格",plain:"介面模仿常見台股看盤軟體的「策略分類＋條件＋命中數」操作習慣，方便對照；資料來源仍是公開行情，不是對方專有資料庫。",example:"左側點策略、中間看條件、下面看結果——流程很像，數字各自用公開資料算。"},socialDigest:{title:"網友參考（社交摘要）",plain:"把 Reddit、富途等公開來源整理成一天的小摘要給你看氣氛。它不是精準民調，更不是叫你買或賣。",example:"像把走廊上聽到的聊天重點寫在黑板上：有聽到就寫，沒聽到就老实说「今天抓不到」。"}};function i(t,e){const s=ct[t],a=e??(s==null?void 0:s.title)??t;return s?`<a class="term" href="#term-${c(t)}" data-term="${c(t)}">${c(a)}</a>`:c(a)}function c(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function vt(){return`
    <section class="section glossary-section" id="glossary">
      <h2 class="section-title">名詞小辭典（點頁面上的藍字會跳到這裡）</h2>
      <p class="glossary-intro">這裡用最白話的方式解釋網站出現的詞。看不懂就點連結，再看例子。</p>
      <div class="glossary-grid">${Object.entries(ct).map(([e,s])=>`
      <article class="glossary-item" id="term-${c(e)}">
        <h3>${c(s.title)}</h3>
        <p class="g-plain">${c(s.plain)}</p>
        <p class="g-example"><strong>例子：</strong>${c(s.example)}</p>
      </article>`).join("")}</div>
    </section>
  `}function $t(t){t.querySelectorAll("a.term").forEach(e=>{e.addEventListener("click",s=>{const a=e.getAttribute("data-term"),n=document.getElementById(`term-${a}`);n&&(s.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))})})}const ht="./data/paper-portfolio.json";function E(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function V(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function ot(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString("zh-TW",{minimumFractionDigits:e,maximumFractionDigits:e})}function dt(t){return t==="USD"?"US$":t==="TWD"?"NT$":""}function O(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"?0:2;return`${dt(e)}${ot(t,s)}`}function j(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"&&t>=100?0:2;return`${dt(e)}${ot(t,s)}`}function pt(t){return{"screen-buy":"名單新開倉",add:"持續買進",stop:"停損","take-profit":"停利","momentum-break":"動能轉弱","off-list":"離開名單","limit-up-chase":"漲停追價急殺"}[t]||t||""}function z(t){return t?`
    <div class="paper-win">
      <div class="w-label">${t.sinceInception?i("sinceInception","成立以來"):c(t.label||"")}</div>
      <div class="w-val ${E(t.pct)}">${V(t.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function gt(t,e){return t.length?t.map(s=>{var a;return`
      <tr>
        <td><span class="ticker">${c(s.ticker)}</span></td>
        <td class="name-cell">${c(s.name||"")}</td>
        <td class="num">${(a=s.qty)==null?void 0:a.toLocaleString("zh-TW")}</td>
        <td class="num">${j(s.price,e)}</td>
        <td><span class="badge reason ${c(s.reason||"")}">${c(pt(s.reason))}</span></td>
        <td class="why-cell">${c(s.reasonText||"")}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">今天還沒有這類成交（模擬）</td></tr>'}function bt(t,e){return t.length?t.map(s=>{var r;const a=(s.mark-s.avgCost)*s.qty,n=s.avgCost?(s.mark-s.avgCost)/s.avgCost*100:0;return`
      <tr>
        <td><span class="ticker">${c(s.ticker)}</span></td>
        <td class="num">${(r=s.qty)==null?void 0:r.toLocaleString("zh-TW")}</td>
        <td class="num">${j(s.avgCost,e)}</td>
        <td class="num">${j(s.mark,e)}</td>
        <td class="num ${E(a)}">${O(a,e)}</td>
        <td class="num ${E(n)}">${V(n)}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">目前沒有持股</td></tr>'}function yt(t,e,s){const a=e.currency,n=t==="TW"?`${i("twStock","台股")}帳本`:`${i("usStock","美股")}帳本`,r=O(e.startCash,a),l=(s==null?void 0:s.totalPnl)??e.equity-e.startCash,o=(s==null?void 0:s.totalPnlPct)??(e.startCash?(e.equity-e.startCash)/e.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${n}</h3>
      <p class="paper-start">${i("principal","本金")} ${r}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">現金</div>
          <div class="k-val">${O(e.cash,a)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${i("position","權益（部位＋現金）")}</div>
          <div class="k-val">${O(e.equity,a)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總${i("realizedPnl","損益")}</div>
          <div class="k-val ${E(l)}">${O(l,a)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總損益 ％</div>
          <div class="k-val ${E(o)}">${V(o)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${i("periodPerf","週績效")}</div>
          ${z(s==null?void 0:s.week)}
        </div>
        <div>
          <div class="win-name">${i("periodPerf","月績效")}</div>
          ${z(s==null?void 0:s.month)}
        </div>
        <div>
          <div class="win-name">${i("periodPerf","季績效")}</div>
          ${z(s==null?void 0:s.quarter)}
        </div>
        <div>
          <div class="win-name">${i("periodPerf","年績效")}</div>
          ${z(s==null?void 0:s.year)}
        </div>
      </div>
    </article>`}function St(t,e){return t.length?t.map(s=>{var n;const a=s.side==="SELL"?"賣":"買";return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(s.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${c(s.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${a} ${(n=s.qty)==null?void 0:n.toLocaleString("zh-TW")} 股</div>
            <div style="font-family:var(--mono)">${j(s.price,e)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${c(s.reason||"")}">${c(pt(s.reason))}</span>
        </div>
        ${s.reasonText?`<p class="lc-why">${c(s.reasonText)}</p>`:""}
      </div>`}).join(""):'<div class="list-card empty-card">今天還沒有這類成交（模擬）</div>'}function kt(t,e){return t.length?t.map(s=>{var r;const a=(s.mark-s.avgCost)*s.qty,n=s.avgCost?(s.mark-s.avgCost)/s.avgCost*100:0;return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(s.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">股數 ${(r=s.qty)==null?void 0:r.toLocaleString("zh-TW")}</div>
          </div>
          <div style="text-align:right">
            <div class="${E(a)}" style="font-family:var(--mono);font-weight:600">${O(a,e)}</div>
            <div class="${E(n)}" style="font-family:var(--mono)">${V(n)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          <span>成本 ${j(s.avgCost,e)}</span>
          <span>市價 ${j(s.mark,e)}</span>
        </div>
      </div>`}).join(""):'<div class="list-card empty-card">目前沒有持股</div>'}function Q(t,e,s){return`
    <div class="paper-table-block">
      <h4>${c(t)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${i("ticker","代碼")}</th>
              <th>名稱</th>
              <th>股數</th>
              <th>價格</th>
              <th>原因</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>${gt(e,s)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${St(e,s)}</div>
    </div>`}function xt(t,e){return`
    <div class="paper-table-block">
      <h4>目前${i("position","部位")}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${i("ticker","代碼")}</th>
              <th>股數</th>
              <th>平均成本</th>
              <th>市價</th>
              <th>${i("unrealizedPnl","未實現損益")} $</th>
              <th>${i("unrealizedPnl","未實現")} ％</th>
            </tr>
          </thead>
          <tbody>${bt(t,e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${kt(t,e)}</div>
    </div>`}function tt(t,e,s,a,n){const r=e.currency,l=(e.trades||[]).filter(p=>p.date===a),o=l.filter(p=>p.side==="BUY"),d=l.filter(p=>p.side==="SELL");return`
    <div class="paper-panel ${n?"active":""}" id="paper-panel-${t}" role="tabpanel">
      ${yt(t,e,s)}
      ${Q("今天模擬買進",o,r)}
      ${Q("今天模擬賣出",d,r)}
      ${xt(e.positions||[],r)}
    </div>`}function Tt(t){var r,l,o;if(!t||!t.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${i("paperTrade","模擬交易績效")}</h2>
        <p class="paper-missing">還沒有模擬帳本檔案。請在專案執行 <code>npm run paper</code>。</p>
      </section>`;const e=t.books.TW,s=t.books.US;let n=(t.asOf||"").slice(0,10);try{n=new Date(t.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${i("paperTrade","模擬交易績效")}</h2>
      <p class="paper-disclaimer" role="note">
        這是<strong>假裝買賣</strong>的成績單，用當日名單價格假設成交，
        <strong>不是</strong>真實券商下單，也不保證以後會這樣。
        ${i("twStock","台股")}${i("principal","本金")} NT$3,000,000　·　
        ${i("usStock","美股")}${i("principal","本金")} US$100,000。
        兩本帳分開算，不把台幣跟美元加在一起。
      </p>
      <div class="paper-rules">
        <h3>規則摘要（數學，不是感覺）</h3>
        <ul>
          <li><strong>買：</strong>當天${i("screening","篩選")}名單（只標「觀察」的先不買）。先 Top 5 再其餘。
            新名字用權益的 1% 當風險去算股數；停距大約是股價的 1.5%（${i("volRatio","量比")}很高時 2.5%）。
            單一${i("position","部位")}最多約 8% 權益。台股買得起 1 張（1000 股）才買，否則跳過。</li>
          <li><strong>持續買進：</strong>已經持有、今天還在名單、又還沒滿 8%，同一天最多再加一次。</li>
          <li><strong>賣：</strong>${i("stopLoss","停損")}未實現 ≤ −3% 全賣；
            ${i("takeProfit","停利")}≥ +12% 賣一半（很小就全賣）；
            沒站上 ${i("sma20","SMA20")} 且當日跌超過 2% 全賣；
            不在名單又虧錢全賣；當初接近${i("limitUp","漲停")}、隔日跌 ≥ 5% 也全賣。</li>
        </ul>
        <p class="paper-rules-hint">看不懂藍字？點它會跳到下方「名詞小辭典」。</p>
      </div>
      <p class="paper-combined">${c(((r=t.metrics)==null?void 0:r.combinedNote)||"台股與美股兩本帳分開計價。")}</p>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${i("twStock","台股")}帳</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${i("usStock","美股")}帳</button>
      </div>
      ${tt("TW",e,(l=t.metrics)==null?void 0:l.TW,n,!0)}
      ${tt("US",s,(o=t.metrics)==null?void 0:o.US,n,!1)}
    </section>`}function wt(t){const e=t.querySelectorAll(".paper-tab-btn");e.forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.paperTab;e.forEach(n=>{const r=n.dataset.paperTab===a;n.classList.toggle("active",r),n.setAttribute("aria-selected",r?"true":"false")}),t.querySelectorAll(".paper-panel").forEach(n=>{n.classList.toggle("active",n.id===`paper-panel-${a}`)})})})}async function At(){try{const t=await fetch(ht);return t.ok?await t.json():null}catch{return null}}const et={},st="聊天後端尚未接上";function qt(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&et?et:{},s=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),a=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:s,anon:a}}function _(t,e=document){return e.querySelector(t)}function Z(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ct(t,e){const s={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async select(a=40){const n=`${t}/rest/v1/danmaku?select=*&order=created_at.desc&limit=${a}`,r=await fetch(n,{headers:s});if(!r.ok)throw new Error(`danmaku select ${r.status}`);return r.json()},async insert(a){const n=await fetch(`${t}/rest/v1/danmaku`,{method:"POST",headers:s,body:JSON.stringify(a)});if(!n.ok){const r=await n.text();throw new Error(`danmaku insert ${n.status}: ${r}`)}return n.json()}}}function Pt(t,e,s=12e3){if(!t)return;const a=document.createElement("div");a.className="ss-danmaku-item",a.textContent=e,a.style.top=`${8+Math.random()*42}vh`,a.style.animationDuration=`${s}ms`,t.appendChild(a),window.setTimeout(()=>a.remove(),s+200)}function Lt(t={}){const e=t.root||document,s=_(t.panelSelector||"#ss-danmaku-panel",e),a=_(t.layerSelector||"#ss-danmaku-layer",e);if(!s)return{ok:!1,reason:"panel missing"};const n=t.config||globalThis.STOCK_SOCIAL_CONFIG||{},{url:r,anon:l}=qt(n);let o=_(".ss-chat-status",s);o||(o=document.createElement("div"),o.className="ss-chat-status",s.insertBefore(o,s.firstChild));const d=_(".ss-chat-list",s),p=_(".ss-chat-form",s),$=p&&p.querySelector(".ss-nick"),u=p&&p.querySelector(".ss-body"),h=p&&p.querySelector('button[type="submit"]'),m=n.danmakuMaxLen||80,g=n.postCooldownMs||4e3;let w=new Set,b=null,U=!1;if(!r||!l)return o.textContent=st+"（請設定 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY）",o.classList.add("is-warn"),p&&p.querySelectorAll("input,button").forEach(N=>{N.disabled=!0}),d&&(d.innerHTML='<li><span class="nick">系統</span>後端未接上時仍可瀏覽下方 Reddit／富途摘要。</li>'),{ok:!1,reason:"no-config",message:st};b=Ct(r,l),o.textContent="彈幕已連線（公開發言，請保持友善）",o.classList.remove("is-warn");async function D(N=!0){try{const C=[...await b.select(40)].reverse();if(d&&(d.innerHTML=C.map(A=>`<li><span class="nick">${Z(A.nickname)}</span>${Z(A.body)}<span class="meta">${Z(new Date(A.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join(""),d.scrollTop=d.scrollHeight),N){for(const A of C)w.has(A.id)||(w.add(A.id),Pt(a,`${A.nickname}: ${A.body}`));w.size>200&&(w=new Set([...w].slice(-100)))}else C.forEach(A=>w.add(A.id))}catch(I){o.textContent=`讀取失敗：${I.message}`,o.classList.add("is-warn")}}p&&p.addEventListener("submit",async N=>{if(N.preventDefault(),!b||U)return;const I=(($==null?void 0:$.value)||"訪客").trim().slice(0,24)||"訪客",C=((u==null?void 0:u.value)||"").trim().slice(0,m);if(C){U=!0,h&&(h.disabled=!0);try{await b.insert({body:C,nickname:I}),u&&(u.value=""),await D(!0)}catch(A){o.textContent=`發送失敗：${A.message}`,o.classList.add("is-warn")}finally{window.setTimeout(()=>{U=!1,h&&(h.disabled=!1)},g)}}}),D(!1).then(()=>D(!0));const G=window.setInterval(()=>D(!0),n.pollIntervalMs||8e3);return{ok:!0,destroy(){window.clearInterval(G)}}}const at={},Nt="聊天後端尚未接上",It=[{id:"local",label:"本站留言"},{id:"reddit",label:"Reddit"},{id:"futu",label:"富途"}],Dt=[{id:"local",label:"本站留言"},{id:"ptt",label:"PTT"},{id:"dcard",label:"Dcard"},{id:"threads",label:"Threads"}];function Mt(t,e){const s=String(e||"").toUpperCase();return s==="US"||s==="TW"?s:String(t||"").toUpperCase().endsWith(".TW")?"TW":"US"}function Et(t){return t==="TW"?Dt:It}function Rt(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&at?at:{},s=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),a=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:s,anon:a}}function k(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ot(t,e){const s={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(a,n=50){const r=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(a)}&order=created_at.asc&limit=${n}`,l=await fetch(r,{headers:s});if(!l.ok)throw new Error(`comments select ${l.status}`);return l.json()},async insert(a){const n=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:s,body:JSON.stringify(a)});if(!n.ok){const r=await n.text();throw new Error(`comments insert ${n.status}: ${r}`)}return n.json()}}}function jt(){try{return window.matchMedia("(min-width: 768px)").matches}catch{return!1}}function Ut(t,e,s){if(!t||!s)return null;const a=t[e];return Array.isArray(a)&&a.find(n=>String(n.ticker).toUpperCase()===String(s).toUpperCase())||null}function _t(t,e,{futuMode:s=!1}={}){if(!t)return`<p class="ss-empty">此標的尚無 ${k(e)} 摘要（可能未納入今日抓取名單，或此市場不查該來源）。</p>`;const a=[];t.blocker&&a.push(`<p class="ss-digest-blocker">⚠ ${k(t.blocker)}</p>`);const n=t.items||[],r=t.newsRelated||[];if(n.length&&a.push(n.map(l=>{const o=l.url?k(l.url):"#",d=l.score!=null?`<span class="ss-score">▲ ${k(l.score)}</span>`:"",p=l.author?`@${k(l.author)}`:"";return`<article class="ss-digest-item">
            <a href="${o}" target="_blank" rel="noopener noreferrer">${k(l.snippet||l.title||"(無摘要)")}</a>
            <div class="ss-digest-meta">${d} ${p}</div>
          </article>`}).join("")),r.length){const l=s?"新聞／討論線索（非留言）":"相關公開新聞（非社群評論）";a.push(`<p class="ss-digest-sub">${l}</p>`),a.push(r.map(o=>`<article class="ss-digest-item">
            <a href="${o.url?k(o.url):"#"}" target="_blank" rel="noopener noreferrer">${k(o.snippet||"(無標題)")}</a>
          </article>`).join(""))}return Array.isArray(t.manualUrls)&&t.manualUrls.length&&!n.length&&a.push('<p class="ss-digest-sub">手動開啟</p>'+t.manualUrls.slice(0,4).map(l=>`<article class="ss-digest-item"><a href="${k(l)}" target="_blank" rel="noopener noreferrer">${k(l)}</a></article>`).join("")),!n.length&&!r.length&&!t.blocker&&a.push(`<p class="ss-empty">暫無 ${k(e)} 資料</p>`),a.join("")||'<p class="ss-empty">暫無資料</p>'}function Wt(t,e,s={}){if(!t||!e)return{ok:!1};const a=s.config||globalThis.STOCK_SOCIAL_CONFIG||{},n=s.digest||null,r=Mt(e,s.market||t.getAttribute("data-market")),l=Et(r),{url:o,anon:d}=Rt(a),p=a.commentMaxLen||500,$=a.postCooldownMs||4e3,u=jt()?" open":"",h=l.map((v,S)=>`<button type="button" class="ss-src-tab${S===0?" active":""}" data-src="${v.id}" role="tab" aria-selected="${S===0?"true":"false"}">${v.label}</button>`).join(""),m=l.filter(v=>v.id!=="local").map(v=>`<div class="ss-src-panel" data-panel="${v.id}" role="tabpanel" hidden></div>`).join("");t.classList.add("ss-thread"),t.dataset.market=r,t.innerHTML=`
    <details class="ss-thread-details"${u}>
      <summary>討論 ${k(e)}（${r==="TW"?"台股來源":"美股來源"}）</summary>
      <div class="ss-src-tabs" role="tablist" aria-label="${k(e)} 來源">${h}</div>
      <div class="ss-src-panels">
        <div class="ss-src-panel active" data-panel="local" role="tabpanel">
          <div class="ss-thread-status"></div>
          <form class="ss-thread-form">
            <input class="ss-nick" maxlength="24" placeholder="暱稱（可空＝訪客）" autocomplete="nickname" />
            <textarea class="ss-body" maxlength="${p}" rows="2" placeholder="匿名留言（最多 ${p} 字，無需登入）" required></textarea>
            <button type="submit">送出</button>
          </form>
          <ul class="ss-thread-list"></ul>
        </div>
        ${m}
      </div>
    </details>
  `;const g=t.querySelector(".ss-thread-status"),w=t.querySelector(".ss-thread-list"),b=t.querySelector(".ss-thread-form"),U={ptt:["ptt","PTT",!1],dcard:["dcard","Dcard",!1],threads:["threads","Threads",!1],reddit:["reddit","Reddit",!1],futu:["futu","富途",!0]};for(const v of l){if(v.id==="local")continue;const S=U[v.id];if(!S)continue;const[q,P,H]=S,X=t.querySelector(`[data-panel="${v.id}"]`);X&&(X.innerHTML=_t(Ut(n,q,e),P,{futuMode:H}))}const D=t.querySelectorAll(".ss-src-tab"),G=t.querySelectorAll(".ss-src-panel");if(D.forEach(v=>{v.addEventListener("click",()=>{const S=v.dataset.src;D.forEach(q=>{const P=q.dataset.src===S;q.classList.toggle("active",P),q.setAttribute("aria-selected",P?"true":"false")}),G.forEach(q=>{const P=q.dataset.panel===S;q.classList.toggle("active",P),q.hidden=!P})})}),!o||!d){g.textContent=Nt+"（需 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY；見 README）。UI 已就緒，匿名發言尚未接通。",g.className="ss-thread-status is-warn",b.querySelectorAll("input,textarea,button").forEach(S=>{S.disabled=!0});const v=r==="TW"?"可切換上方分頁看 PTT／Dcard／Threads 摘要":"可切換上方分頁看 Reddit／富途摘要";return w.innerHTML=`<li class="ss-empty">本站匿名留言需 Supabase anon INSERT（RLS）。不會假裝送出後丟掉。${v}；全站 Giscus 需 GitHub 登入，僅作備援。</li>`,{ok:!1,reason:"no-config",market:r}}const N=Ot(o,d);g.textContent="開放匿名討論（無需登入，請保持友善）";let I=!1;async function C(){try{const v=await N.list(e);if(!v.length){w.innerHTML='<li class="ss-empty">尚無留言，來當第一個吧。</li>';return}w.innerHTML=v.map(S=>`<li><strong>${k(S.nickname)}</strong> ${k(S.body)}<span class="meta">${k(new Date(S.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join("")}catch(v){g.textContent=`讀取失敗：${v.message}`,g.className="ss-thread-status is-warn"}}b.addEventListener("submit",async v=>{if(v.preventDefault(),I)return;const S=(b.querySelector(".ss-nick").value||"訪客").trim().slice(0,24)||"訪客",q=(b.querySelector(".ss-body").value||"").trim().slice(0,p);if(!q)return;I=!0;const P=b.querySelector("button");P.disabled=!0;try{await N.insert({ticker:e,body:q,nickname:S}),b.querySelector(".ss-body").value="",await C()}catch(H){g.textContent=`發送失敗：${H.message}`,g.className="ss-thread-status is-warn"}finally{window.setTimeout(()=>{I=!1,P.disabled=!1},$)}}),C();const A=window.setInterval(C,a.pollIntervalMs||1e4);return{ok:!0,market:r,destroy(){window.clearInterval(A)}}}function Bt(t=document,e={}){const s=t.querySelectorAll("[data-ticker-comments]"),a=[];return s.forEach(n=>{const r=n.getAttribute("data-ticker-comments")||n.dataset.ticker,l=n.getAttribute("data-market")||void 0;r&&a.push(Wt(n,r,{...e,market:l}))}),a}function zt(t,e){if(!t||!e||t.querySelector("script[data-giscus], iframe.giscus-frame"))return;const s=document.createElement("script");s.src="https://giscus.app/client.js",s.async=!0,s.crossOrigin="anonymous",s.setAttribute("data-giscus","1"),s.setAttribute("data-repo",e.repo||""),s.setAttribute("data-repo-id",e.repoId||""),s.setAttribute("data-category",e.category||"General"),s.setAttribute("data-category-id",e.categoryId||""),s.setAttribute("data-mapping",e.mapping==="pathname"?"pathname":"specific"),s.setAttribute("data-term",e.term||"site-discussion"),s.setAttribute("data-strict","0"),s.setAttribute("data-reactions-enabled","1"),s.setAttribute("data-emit-metadata","0"),s.setAttribute("data-input-position","bottom"),s.setAttribute("data-theme",e.theme||"dark"),s.setAttribute("data-lang",e.lang||"zh-TW"),t.appendChild(s)}function Vt(t="#ss-giscus",e={}){const s=document.querySelector(t);if(!s)return{ok:!1,reason:"missing"};const n=(e.config||globalThis.STOCK_SOCIAL_CONFIG||{}).giscus||{};if(!n.enabled||!n.repoId||!n.categoryId)return s.innerHTML='<p class="ss-chat-status is-warn">Giscus 尚未設定（需 repoId / categoryId）。請見 README。</p>',{ok:!1,reason:"no-config"};const r=s.querySelector(".ss-giscus-host")||s;return zt(r,{...n,term:n.term||"site-discussion"}),{ok:!0}}function T(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function nt(t){const e=t.score!=null?`<span class="ss-score">▲ ${T(t.score)}</span>`:"",s=t.author?`@${T(t.author)}`:"",a=t.created?T(new Date(t.created).toLocaleString("zh-TW",{hour12:!1})):t.date?T(t.date):"";return`<article class="ss-digest-item">
    <a href="${t.url?T(t.url):"#"}" target="_blank" rel="noopener noreferrer">${T(t.snippet||t.title||"(無摘要)")}</a>
    <div class="ss-digest-meta">${e} ${s} ${a}</div>
  </article>`}function Gt(t,e,{futuMode:s=!1}={}){const a=t.blocker?`<p class="ss-digest-blocker">⚠ ${T(t.blocker)}</p>`:"",n=t.items||[],r=t.newsRelated||[];let l="";return n.length&&(l+=n.map(nt).join("")),r.length&&(l+=`<p class="ss-digest-sub">${s?"新聞／討論線索（非留言）":"相關公開新聞（非社群評論）"}</p>`+r.map(nt).join("")),l||(l=`<p class="ss-empty">此標的暫無${T(e)}資料</p>`),`<section class="ss-digest-ticker" data-ticker="${T(t.ticker)}">
    <h4>${T(t.ticker)}</h4>
    ${a}
    ${l}
  </section>`}function W(t,e,s,a={}){const n=(e||[]).map(r=>Gt(r,s,a)).join("");return`<div class="ss-digest-col">
    <h4 class="ss-digest-col-title">${T(t)}</h4>
    ${n||`<p class="ss-empty">無 ${T(t)} 區塊（今日無對應市場標的或尚未抓取）</p>`}
  </div>`}async function ut(t){const e=globalThis.STOCK_SOCIAL_CONFIG||{},s=t||e.socialDigestUrl||"./data/social-digest.json",a=await fetch(s,{cache:"no-cache"});if(!a.ok)throw new Error(`social-digest ${a.status}`);return a.json()}function Ht(t,e){if(!e)return;const s=t.asOf?new Date(t.asOf).toLocaleString("zh-TW",{hour12:!1}):"—",a=(t.notes||[]).map(r=>`<li>${T(r)}</li>`).join(""),n=t.routing?'<p class="ss-digest-routing">路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads</p>':"";e.innerHTML=`
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>今日社交摘要</h3>
        <p class="ss-digest-asof">資料時間：${T(s)}</p>
        ${n}
        ${a?`<ul class="ss-digest-notes">${a}</ul>`:""}
      </header>
      <div class="ss-digest-market">
        <h4 class="ss-digest-market-title">美股來源</h4>
        <div class="ss-digest-cols ss-digest-cols-multi">
          ${W("Reddit",t.reddit,"Reddit")}
          ${W("富途牛牛",t.futu,"富途",{futuMode:!0})}
        </div>
      </div>
      <div class="ss-digest-market">
        <h4 class="ss-digest-market-title">台股來源</h4>
        <div class="ss-digest-cols ss-digest-cols-multi">
          ${W("PTT",t.ptt,"PTT")}
          ${W("Dcard",t.dcard,"Dcard")}
          ${W("Threads",t.threads,"Threads")}
        </div>
      </div>
    </div>
  `}async function Zt(t="#ss-social-digest",e){const s=document.querySelector(t);if(!s)return{ok:!1};try{const a=await ut(e);return Ht(a,s),{ok:!0,data:a}}catch(a){return s.innerHTML=`<p class="ss-digest-blocker">社交摘要尚未產生或讀取失敗：${T(a.message)}</p>`,{ok:!1,error:a}}}const mt="./data/strategy-screener.json",Ft={精選:"精選",價量:"價量",籌碼:"籌碼",財務:"財務",大師:"大師",技術:"價量",綜合:"精選"};function Kt(t){try{return new Date(t).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+"（台北）"}catch{return t||"—"}}function f(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString("zh-TW",{minimumFractionDigits:e,maximumFractionDigits:e})}function F(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function K(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(2)}%`}function Jt(t){return t.categoryGroup||Ft[t.category]||t.category||"精選"}function Yt(t){let e=c(t);return e=e.replace(/本益比/g,()=>i("pe","本益比")),e=e.replace(/營益率/g,()=>i("opMargin","營益率")),e=e.replace(/毛利率/g,()=>i("grossMargin","毛利率")),e=e.replace(/外資/g,()=>i("foreignInv","外資")),e=e.replace(/投信/g,()=>i("trustInv","投信")),e=e.replace(/自營商/g,()=>i("dealerInv","自營商")),e=e.replace(/均線多頭/g,()=>i("maBull","均線多頭")),e=e.replace(/RSI/g,()=>i("rsi","RSI")),e=e.replace(/振幅/g,()=>i("amplitude","振幅")),e=e.replace(/(\d+)\s*張/g,(s,a)=>`${a}${i("zhang","張")}`),e=e.replace(/＞\s*(\d+)\s*張/g,(s,a)=>`＞ ${a}${i("zhang","張")}`),e}function Xt(t){return t==="skip"?'<span class="xq-cond-st skip">略過</span>':t==="fail"?'<span class="xq-cond-st fail">未過</span>':'<span class="xq-cond-st pass">條件</span>'}function Qt(t){switch(t){case"ma-bull":return[{key:"price",label:"價格",fmt:e=>f(e.price)},{key:"dayPct",label:"日漲跌",fmt:e=>K(e.dayPct),cls:e=>F(e.dayPct)},{key:"sma5",label:"SMA5",fmt:e=>f(e.sma5)},{key:"sma10",label:"SMA10",fmt:e=>f(e.sma10)},{key:"sma20",label:"SMA20",fmt:e=>f(e.sma20)},{key:"sma60",label:"SMA60",fmt:e=>f(e.sma60)},{key:"volRatioYday",label:"量比(昨)",fmt:e=>e.volRatioYday!=null?f(e.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:"今量(張)",fmt:e=>e.volTodayZhang!=null?f(e.volTodayZhang,1):e.volToday!=null?f(e.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:i("pe","本益比"),fmt:e=>f(e.pe,2),rawLabel:!0},{key:"price",label:"價格",fmt:e=>f(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?f(e.avgVol5Zhang,1):e.avgVol5Shares!=null?f(e.avgVol5Shares,0)+"股":"—"},{key:"revenueGrowth",label:"營收成長%",fmt:e=>e.revenueGrowth!=null?f(e.revenueGrowth,1):"—"},{key:"earningsGrowth",label:"獲利成長%",fmt:e=>e.earningsGrowth!=null?f(e.earningsGrowth,1):"—"},{key:"debtToEquity",label:"負債權益",fmt:e=>e.debtToEquity!=null?f(e.debtToEquity,2):"—"},{key:"dayPct",label:"日漲跌",fmt:e=>K(e.dayPct),cls:e=>F(e.dayPct)}];case"inst-sync":return[{key:"foreignNet1dZhang",label:i("foreignInv","外資")+"1日(張)",fmt:e=>f(e.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:i("trustInv","投信")+"1日(張)",fmt:e=>f(e.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:i("dealerInv","自營商")+"1日(張)",fmt:e=>f(e.dealerNet1dZhang,1),rawLabel:!0},{key:"instNet5dZhang",label:"法人5日(張)",fmt:e=>f(e.instNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:"價格",fmt:e=>f(e.price)},{key:"dayPct",label:"日漲跌",fmt:e=>K(e.dayPct),cls:e=>F(e.dayPct)},{key:"rsi",label:i("rsi","RSI"),fmt:e=>f(e.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:e=>f(e.rsiPrev,2)},{key:"ampPct",label:i("amplitude","振幅"),fmt:e=>e.ampPct!=null?f(e.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?f(e.avgVol5Zhang,1):"—"}];case"margin-up":return[{key:"opMargins",label:i("opMargin","營益率"),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.map(s=>s!=null?s+"%":"—").join(" → "):"—",rawLabel:!0},{key:"grossMargins",label:i("grossMargin","毛利率"),fmt:e=>Array.isArray(e.grossMargins)?e.grossMargins.map(s=>s!=null?s+"%":"—").join(" → "):"—",rawLabel:!0}];default:return[{key:"price",label:"價格",fmt:e=>f(e.price)}]}}function te(t){return`<ol class="xq-cond-list">${(t.conditions||[]).map((s,a)=>{const n=s.status||"pass";return`<li class="xq-cond ${n}">
        <span class="xq-cond-num">${a+1}</span>
        <span class="xq-cond-text">${Yt(s.text)}</span>
        ${Xt(n)}
      </li>`}).join("")}</ol>`}function ee(t){const e=t.hits||[];if(t.incomplete&&!e.length){const l=c(t.incompleteLabel||"資料不足"),o=(t.blockers||[]).map(d=>`<li>${c(d)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${l}</div>
      <ul>${o}</ul>
      <p class="xq-hint">條件仍列出供對照；公開資料齊了會自動出命中，絕不快取假數字。</p>
    </div>`}if(!e.length){const l=(t.blockers||[]).map(o=>`<li>${c(o)}</li>`).join("");return`<div class="xq-empty">
      <p>今日無命中（規則有跑，只是沒有股票同時過關）。</p>
      ${l?`<ul>${l}</ul>`:""}
    </div>`}const s=Qt(t.id),a=s.map(l=>`<th>${l.rawLabel?l.label:c(l.label)}</th>`).join(""),n=e.map(l=>{const o=l.metrics||{},d=s.map(p=>`<td class="num ${p.cls?p.cls(o):""}">${p.fmt(o)}</td>`).join("");return`<tr>
        <td><span class="ticker">${c(l.ticker)}</span></td>
        <td class="name-cell">${c(l.name||"")}</td>
        <td><span class="badge market">${c(l.market||"")}</span></td>
        ${d}
      </tr>`}).join(""),r=e.map(l=>{const o=l.metrics||{},d=s.map(p=>{const $=p.cls?p.cls(o):"";return`<div class="xq-m"><span class="xq-ml">${p.rawLabel?p.label:c(p.label)}</span><span class="xq-mv ${$}">${p.fmt(o)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${c(l.ticker)}</div>
            <div class="name">${c(l.name||"")}</div>
          </div>
          <span class="badge market">${c(l.market||"")}</span>
        </div>
        <div class="xq-hit-metrics">${d}</div>
      </article>`}).join("");return`
    <div class="table-wrap xq-table-wrap">
      <table class="stock-table xq-table">
        <thead><tr>
          <th>代碼</th><th>名稱</th><th>市場</th>${a}
        </tr></thead>
        <tbody>${n}</tbody>
      </table>
    </div>
    <div class="xq-mobile-cards">${r}</div>
  `}function it(t,e){var l,o;const s=(t.hits||[]).length,a=(t.unchecked||[]).map(d=>`<li class="xq-unchecked">${c(d)}</li>`).join(""),n=(t.notes||[]).map(d=>`<li>${c(d)}</li>`).join(""),r=!t.incomplete&&(t.blockers||[]).length?`<ul class="xq-blockers">${(t.blockers||[]).map(d=>`<li>${c(d)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${c(t.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${c(t.name)}</h3>
          <div class="xq-tags">
            ${(t.xqTags||[t.category]).map(d=>`<span class="xq-tag">${c(d)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="命中檔數">
          <span class="xq-hit-num">${s}</span>
          <span class="xq-hit-label">檔命中</span>
        </div>
      </div>
      ${t.description?`<p class="xq-desc">${c(t.description)}</p>`:""}
      <div class="xq-meta-row">
        <span>執行日 ${c(e.sessionDate||"—")}</span>
        <span>資料 ${Kt(e.asOf)}</span>
        <span>宇宙 台${((l=e.universe)==null?void 0:l.tw)??"—"}／美${((o=e.universe)==null?void 0:o.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">邏輯條件（明示、可對照）</h4>
      ${te(t)}
      ${a?`<ul class="xq-unchecked-list">${a}</ul>`:""}
      ${n?`<ul class="xq-notes">${n}</ul>`:""}
      ${r}
      <div class="xq-toolbar">
        <h4 class="xq-sub">篩選結果</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>複製 JSON</button>
          <a class="xq-btn xq-btn-link" href="${mt}" download="strategy-screener.json">匯出 JSON</a>
        </div>
      </div>
      ${ee(t)}
    </div>
  `}function se(t=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${i("strategyScreen","策略選股（邏輯條件）")}</h2>
      <p class="glossary-intro">
        介面參考 ${i("xqLike","XQ／選股軟體")} 的策略切換：左側分類 → 條件清單 → 命中表。
        用公開行情＋證交所公開籌碼做<strong>明示條件</strong>篩選，<strong>不是</strong>券商專有資料庫，也不保證與商業軟體一致。
      </p>
      <div id="xq-root" class="xq-root" aria-label="策略選股">
        ${t?'<p class="xq-loading">載入策略結果中…</p>':""}
      </div>
    </section>
  `}async function ae(t=mt){const e=await fetch(t,{cache:"no-cache"});if(!e.ok)throw new Error(`strategy-screener ${e.status}`);return e.json()}function ne(t,e){var $;const s=typeof t=="string"?document.querySelector(t):t;if(!s||!(($=e==null?void 0:e.strategies)!=null&&$.length)){s&&(s.innerHTML='<div class="xq-empty"><p>尚無策略資料。請執行 <code>npm run strategies</code>。</p></div>');return}const a=e.categoryOrder||["精選","價量","籌碼","財務","大師"],n=new Map(a.map(u=>[u,[]]));for(const u of e.strategies){const h=Jt(u);n.has(h)||n.set(h,[]),n.get(h).push(u)}const r=e.strategies[0],l=a.map(u=>{const h=n.get(u)||[];return h.length?`<div class="xq-cat-block">
        <div class="xq-cat-label">${c(u)}</div>
        <div class="xq-chip-row">
          ${h.map(m=>{const g=(m.hits||[]).length,w=m.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${m.id===r.id?" active":""}${w}" data-xq-id="${c(m.id)}" aria-pressed="${m.id===r.id}">
                <span class="xq-chip-name">${c(m.name)}</span>
                <span class="xq-chip-n">${m.incomplete?"—":g}</span>
              </button>`}).join("")}
        </div>
      </div>`:""}).join(""),o=e.strategies.map(u=>{const h=(u.hits||[]).length,m=u.id===r.id?" active":"",g=u.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${m}${g}" data-xq-id="${c(u.id)}">
        <span>${c(u.name)}</span>
        <span class="xq-side-n">${u.incomplete?"不足":h}</span>
      </button>`}).join("");s.innerHTML=`
    <div class="xq-layout">
      <aside class="xq-sidebar" aria-label="策略列表">
        <div class="xq-side-title">策略</div>
        ${o}
      </aside>
      <div class="xq-main">
        <div class="xq-chips" aria-label="策略分類">${l}</div>
        <div class="xq-panel-host">${it(r,e)}</div>
      </div>
    </div>
    <p class="xq-foot">${c(e.disclaimer||"")}
      ${e.exportNote?` · ${c(e.exportNote)}`:""}
    </p>
  `;const d=s.querySelector(".xq-panel-host"),p=u=>{const h=e.strategies.find(m=>m.id===u);!h||!d||(d.innerHTML=it(h,e),s.querySelectorAll("[data-xq-id]").forEach(m=>{const g=m.getAttribute("data-xq-id")===u;m.classList.toggle("active",g),m.tagName==="BUTTON"&&m.setAttribute("aria-pressed",g?"true":"false")}),rt(d,e),d.querySelectorAll("a.term").forEach(m=>{m.addEventListener("click",g=>{const w=m.getAttribute("data-term"),b=document.getElementById(`term-${w}`);b&&(g.preventDefault(),b.scrollIntoView({behavior:"smooth",block:"start"}),b.classList.add("flash"),setTimeout(()=>b.classList.remove("flash"),1600))})}))};s.querySelectorAll("[data-xq-id]").forEach(u=>{u.addEventListener("click",()=>p(u.getAttribute("data-xq-id")))}),rt(d,e)}function rt(t,e){var s;(s=t==null?void 0:t.querySelector("[data-xq-copy]"))==null||s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(e,null,2));const a=t.querySelector("[data-xq-copy]");if(a){const n=a.textContent;a.textContent="已複製",setTimeout(()=>a.textContent=n,1200)}}catch{}})}async function ie(t="#xq-root"){try{const e=await ae();return ne(t,e),{ok:!0,data:e}}catch(e){const s=document.querySelector(t);return s&&(s.innerHTML=`<div class="xq-empty"><p>無法載入策略選股（${c(e.message)}）。請確認已執行 <code>npm run strategies</code>。</p></div>`),{ok:!1,error:e}}}const re="./data/latest.json";function x(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function y(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function L(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString("zh-TW",{minimumFractionDigits:e,maximumFractionDigits:e})}function B(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${L(t,s)}`}function le(t){try{return new Date(t).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+"（台北）"}catch{return t}}function J(t){const e=t.aboveSma20?`<span class="badge sma-on">${i("sma20","SMA20↑")}</span>`:`<span class="badge sma-off">${i("sma20","SMA20↓")}</span>`,s=t.aboveSma50?`<span class="badge sma-on">${i("sma50","SMA50↑")}</span>`:`<span class="badge sma-off">${i("sma50","SMA50↓")}</span>`;return e+s}function Y(t){return t!=null&&t.length?t.map(e=>{const s=String(e);return s==="A"?`<span class="badge screen">${i("screenA","A")}</span>`:s==="B"?`<span class="badge screen">${i("screenB","B")}</span>`:s==="C"?`<span class="badge screen">${i("screenC","C")}</span>`:s==="observe"?'<span class="badge screen">觀察</span>':`<span class="badge screen">${c(s)}</span>`}).join(""):""}function ce(t){var a,n,r,l,o;const e=[],s=(d,p,$)=>{if(!$)return;const u=$.incomplete,h=$.value!=null?L($.value,2):u?"資料不全":"—",m=$.dayPct!=null?`<div class="pct ${x($.dayPct)}">${y($.dayPct)}</div>`:"",g=$.session==="intraday"?` · ${i("intraday","盤中")}`:"";e.push(`
      <div class="index-chip ${u?"incomplete":""}">
        <div class="label">${p}${g}</div>
        <div class="value">${h}</div>
        ${m}
      </div>
    `)};if(s("tw",i("taiex",((a=t.tw)==null?void 0:a.name)||"台灣加權 TAIEX"),t.tw),s("otc",i("otc",((n=t.otc)==null?void 0:n.name)||"櫃買"),t.otc),s("spx",i("spx",((r=t.spx)==null?void 0:r.name)||"S&P 500"),t.spx),s("nasdaq",i("nasdaq",((l=t.nasdaq)==null?void 0:l.name)||"Nasdaq"),t.nasdaq),s("sox",i("sox",((o=t.sox)==null?void 0:o.name)||"SOX"),t.sox),t.usdTwd){const d=t.usdTwd,p=d.taipeiClose??d.yahoo;e.push(`
      <div class="index-chip">
        <div class="label">${i("usdtwd","USD/TWD")}</div>
        <div class="value">${L(p,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          台北收 ${d.taipeiClose!=null?L(d.taipeiClose,3):"—"}
          · Yahoo ${d.yahoo!=null?L(d.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${e.join("")}</div>`}function oe(t,e){const s=t.market==="TW"?i("twStock","台股"):t.market==="US"?i("usStock","美股"):c(t.market||""),a=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${i("rs","RS vs 指數")}</div><div class="m-val ${x(t.rsVsIndexPp)}">${y(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">${i("priorClose","前收漲幅")}</div><div class="m-val ${x(t.priorClosePct)}">${y(t.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${i("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${e}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${i("ticker",t.ticker)}</div>
          <div class="name">${c(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${B(t.price,t.currency)}</div>
          <div class="day-pct ${x(t.dayPct)}">${y(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${s}</span>
        ${Y(t.screens)}
        ${J(t)}
      </div>
      <div class="metrics">
        ${a}
        <div class="metric"><div class="m-label">${i("pct5d","5 日")}</div><div class="m-val ${x(t.pct5d)}">${y(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${i("pct1m","約 1 月")}</div><div class="m-val ${x(t.pct1m)}">${y(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${i("volRatio","量比")}</div><div class="m-val">${t.volRatio!=null?L(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business?`<p class="card-text"><strong>本業</strong>　${c(t.business)}</p>`:""}
      ${t.why?`<p class="card-text"><strong>理由</strong>　${c(t.why)}</p>`:""}
      ${t.risk?`<p class="card-text risk"><strong>風險</strong>　${ft(t.risk)}</p>`:""}
      <div data-ticker-comments="${c(t.ticker)}" data-market="${c(t.market==="TW"||String(t.ticker).endsWith(".TW")?"TW":"US")}"></div>
    </article>
  `}function ft(t){let e=c(t);return e=e.replace(/漲停/g,i("limitUp","漲停")),e=e.replace(/動能/g,i("momentum","動能")),e}function de(t){return t.map(e=>{const s=e.rsVsIndexPp??e.priorClosePct,a=e.rsVsIndexPp!=null?y(e.rsVsIndexPp):e.priorClosePct!=null?y(e.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${c(e.ticker)}</span></td>
        <td class="name-cell">${c(e.name||"")}</td>
        <td class="num">${B(e.price,e.currency)}</td>
        <td class="num ${x(e.dayPct)}">${y(e.dayPct)}</td>
        <td class="num ${x(s)}">${a}</td>
        <td class="num ${x(e.pct5d)}">${y(e.pct5d)}</td>
        <td class="num ${x(e.pct1m)}">${y(e.pct1m)}</td>
        <td class="num">${e.volRatio!=null?L(e.volRatio,2)+"×":"—"}</td>
        <td>${J(e)}</td>
        <td>${Y(e.screens)}</td>
        <td class="why-cell">${c(e.why||"")}</td>
      </tr>`}).join("")}function pe(t){return t.map(e=>{const s=e.rsVsIndexPp!=null?`<span class="${x(e.rsVsIndexPp)}">${i("rs","RS")} ${y(e.rsVsIndexPp)}</span>`:e.priorClosePct!=null?`<span class="${x(e.priorClosePct)}">${i("priorClose","前收")} ${y(e.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(e.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${c(e.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${B(e.price,e.currency)}</div>
            <div class="${x(e.dayPct)}" style="font-family:var(--mono);font-weight:600">${y(e.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${s}
          <span class="${x(e.pct5d)}">${i("pct5d","5d")} ${y(e.pct5d)}</span>
          <span class="${x(e.pct1m)}">${i("pct1m","1m")} ${y(e.pct1m)}</span>
          <span>${i("volRatio","量比")} ${e.volRatio!=null?L(e.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${J(e)}${Y(e.screens)}</div>
        ${e.why?`<p class="lc-why">${c(e.why)}</p>`:""}
        ${e.risk&&e.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">風險：${ft(e.risk)}</p>`:""}
        <div data-ticker-comments="${c(e.ticker)}" data-market="${c(String(e.ticker).endsWith(".TW")||e.market==="TW"?"TW":"US")}"></div>
      </div>`}).join("")}function lt(t,e){return e!=null&&e.length?`
    <div class="panel ${t==="us"?"active":""}" id="panel-${t}" role="tabpanel">
      <div class="table-wrap">
        <table class="stock-table">
          <thead>
            <tr>
              <th>${i("ticker","代碼")}</th>
              <th>名稱</th>
              <th>價格</th>
              <th>${i("dayPct","日漲跌")}</th>
              <th>${i("rs","RS")}／${i("priorClose","前收")}</th>
              <th>${i("pct5d","5 日")}</th>
              <th>${i("pct1m","約 1 月")}</th>
              <th>${i("volRatio","量比")}</th>
              <th>均線</th>
              <th>${i("screening","篩選")}</th>
              <th>理由</th>
            </tr>
          </thead>
          <tbody>${de(e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${pe(e)}</div>
    </div>
  `:""}function ue(t){if(!t)return"";const e=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${i("adr","ADR")} ${i("parity","平價")}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${i("usStock","美股")} ${i("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${B(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${i("adsRatio","換股比")}</span>　<strong>${c(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>${i("parity","隱含價")}</span>　<strong>${t.impliedUsdTaipeiFx!=null?L(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${i("premium","溢價")}</span>　<strong class="${x(e)}">${y(e)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${i("twStock","台股")}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${B(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${c(t.note)}</p>`:""}
      </div>
    </section>
  `}function me(t){if(!t)return"";const e={A:"screenA",B:"screenB",C:"screenC"},s=Object.keys(t).map(a=>{const n=e[a]||"screening";return`<li><span class="screen-key">${i(n,a)}</span><span>${c(t[a])}</span></li>`}).join("");return`
    <footer class="method-footer">
      <h3>${i("screening","篩選方法說明")}</h3>
      <ul class="method-list">${s}</ul>
      <p class="method-hint">看不懂藍字？點它會跳到下方「名詞小辭典」，還有生活例子。</p>
    </footer>
  `}function fe(){return`
    <section class="section" id="danmaku">
      <div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>
      <h2 class="section-title">${i("danmaku","全站彈幕")}</h2>
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
  `}function ve(){return`
    <section class="section" id="social-digest">
      <h2 class="section-title">${i("socialDigest","網友參考")}</h2>
      <p class="glossary-intro">美股看 ${i("reddit","Reddit")}／${i("futu","富途")}；台股看 ${i("ptt","PTT")}／${i("dcard","Dcard")}／${i("threads","Threads")}。公開摘要抓不到會寫 blocker，不捏造；不是投資建議。</p>
      <div id="ss-social-digest" aria-label="今日社交摘要"></div>
    </section>
  `}function $e(){return`
    <section class="section" id="giscus">
      <div id="ss-giscus" class="ss-giscus-section" aria-label="全站討論">
        <h2 class="section-title">全站討論（Giscus）</h2>
        <p class="ss-giscus-hint">
          <strong>備援</strong>：需 GitHub 登入。主要匿名${i("danmaku","彈幕")}／${i("comments","留言板")}請接 Supabase anon key（見 README），訪客無需登入即可發言。
        </p>
        <div class="ss-giscus-host"></div>
      </div>
    </section>
  `}function he(t,e){const s=t.top5||[],a=t.us||[],n=t.tw||[];return`
    <header class="site-header">
      <div class="header-top">
        <h1>${i("screening","每日數學選股")}</h1>
        <div class="asof">資料時間 ${le(t.asOf)}</div>
      </div>
      <div class="disclaimer" role="note">${i("notAdvice","不是投資建議")}：${c((t.disclaimer||"本站內容非投資建議。").replace(/^本站內容為依公開行情的數學篩選候選，不是投資建議，亦不保證獲利。$/,"本站只是用公開行情算出「相對有機會觀察的名單」，不會保證賺錢。"))}</div>
      ${t.timezoneNote?`<p class="tz-note">${c(t.timezoneNote)}（${i("intraday","盤中")} 價格還會變）</p>`:""}
      <p class="glossary-jump">
        <a href="#strategies">策略選股 ↓</a>
        <a href="#paper">看模擬交易成績 ↓</a>
        <a href="#social-digest">網友參考 ↓</a>
        <a href="#danmaku">全站彈幕 ↓</a>
        <a href="#giscus">全站討論 ↓</a>
        <a href="#glossary">看不懂名詞？名詞小辭典 ↓</a>
      </p>
    </header>

    <p class="index-caption">${i("index","指數")}快覽（代表整個市場的「總成績單」）</p>
    ${ce(t.indices||{})}

    <section class="section">
      <h2 class="section-title">今日 Top 5</h2>
      <div class="top5-grid">
        ${s.map((r,l)=>oe(r,l+1)).join("")}
      </div>
    </section>

    ${se()}

    ${Tt(e)}

    ${ve()}
    ${fe()}

    <section class="section">
      <h2 class="section-title">選股清單</h2>
      <div class="tabs" role="tablist">
        <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${i("usStock","美股")}（${a.length}）</button>
        <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${i("twStock","台股")}（${n.length}）</button>
      </div>
      ${lt("us",a)}
      ${lt("tw",n)}
    </section>

    ${ue(t.parity)}
    ${me(t.method)}
    ${$e()}
    ${vt()}

    <p class="site-footer">紅漲綠跌（台灣市場慣例）· 點藍字看解釋 · 模擬交易非真實成交 · 社交摘要／聊天僅供討論參考 · 資料來自 latest.json、strategy-screener.json、paper-portfolio.json、social-digest.json</p>
  `}function ge(t){const e=t.querySelectorAll(".tab-btn");e.forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.tab;e.forEach(n=>{const r=n.dataset.tab===a;n.classList.toggle("active",r),n.setAttribute("aria-selected",r?"true":"false")}),t.querySelectorAll(".panel").forEach(n=>{n.classList.toggle("active",n.id===`panel-${a}`)})})})}async function be(){const t=document.getElementById("app");try{const e=await fetch(re);if(!e.ok)throw new Error(`HTTP ${e.status}`);const s=await e.json(),a=await At();t.innerHTML=he(s,a),ge(t),wt(t),$t(t),await ie("#xq-root");let n=null;const r=await Zt("#ss-social-digest",M.socialDigestUrl);if(r!=null&&r.ok)n=r.data;else try{n=await ut(M.socialDigestUrl)}catch{n=null}Lt({config:M}),Bt(t,{config:M,digest:n}),Vt("#ss-giscus",{config:M})}catch(e){t.innerHTML=`<div class="error">無法載入資料（${c(e.message)}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。</div>`}}be();
