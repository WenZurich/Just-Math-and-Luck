(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();const j={},R={supabaseUrl:typeof import.meta<"u"&&(j==null?void 0:j.VITE_SUPABASE_URL)||"https://whlpzhceivahkuanmmui.supabase.co",supabaseAnonKey:typeof import.meta<"u"&&(j==null?void 0:j.VITE_SUPABASE_ANON_KEY)||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",giscus:{enabled:!0,repo:"WenZurich/Just-Math-and-Luck-",repoId:"R_kgDOUcO78Q",category:"General",categoryId:"DIC_kwDOUcO78c4DFrWU",mapping:"specific",theme:"dark",lang:"zh-TW",perTicker:!1},socialDigestUrl:"./data/social-digest.json",latestUrl:"./data/latest.json",danmakuMaxLen:80,commentMaxLen:500,pollIntervalMs:8e3,postCooldownMs:4e3};globalThis.STOCK_SOCIAL_CONFIG=Object.assign(globalThis.STOCK_SOCIAL_CONFIG||{},R);const de={dayPct:{title:"日漲跌",plain:"就是「今天這支股票的價錢，比起昨天收盤時，漲了還是跌了多少」。用百分比表示，比較好跟其他股票比。",example:"昨天收盤 100 元，今天收盤 103 元，日漲跌就是 +3%。像考試分數從 100 變成 103，多了 3 分。"},pct5d:{title:"5 日漲跌",plain:"看最近大約一週（5 個交易日）這支股票總共漲了或跌了多少，不是只看今天。",example:"禮拜一 100 元，到這禮拜五變成 110 元，5 日大約就是 +10%。像一週零用錢從 100 變成 110。"},pct1m:{title:"約 1 月漲跌",plain:"看最近大約一個月（常算 21 個交易日）這支股票漲跌多少，用來看比較長一點的趨勢。",example:"一個月前 200 元，現在 220 元，約 1 月就是 +10%。像身高一個月長高一點，要看整段變化。"},rs:{title:"相對強度（RS）",plain:"把「這支股票今天的漲跌」跟「整個市場大盤今天的漲跌」相減。正的表示它比大盤更強（人家跌它比較不跌，或人家漲它漲更多）。",example:"大盤今天 −1%，某股票 +2%，RS 大約是 +3 個百分點。像全班平均考 60 分，你考 80 分，你比班級平均強。"},priorClose:{title:"前收漲幅",plain:"用「上一個完整交易日收盤價」算出來的漲跌幅度。美股若還在盤中，有時會另外標前一天收盤的表現。",example:"週一收盤比週五收盤漲了 13%，就說前收漲幅約 +13%。像昨天整場比賽的最終比分，不是今天還沒打完的分數。"},volRatio:{title:"量比",plain:"今天成交的「張數／股數」是不是比平常多。算法大概是：今天成交量 ÷ 最近約 20 天平均成交量。數字越大，表示今天很多人在買賣。",example:"平常每天成交 100 萬股，今天 300 萬股，量比約 3 倍。像平常教室很安靜，今天突然擠滿人在討論。"},sma20:{title:"SMA20（20 日均線）",plain:"把最近 20 個交易日的收盤價加起來除以 20，得到一條「平滑後的平均價」。股價在均線上面，常被看成最近偏強；在下面常被看成偏弱。",example:"最近 20 天平均價 50 元，今天股價 55 元，就是站上 SMA20。像你的體重比最近 20 天平均還高一點。"},sma50:{title:"SMA50（50 日均線）",plain:"跟 SMA20 一樣是平均價，但用更長的 50 個交易日，看比較中期的方向。",example:"50 天平均 100 元，現在股價 90 元，就是在 SMA50 下面。像月考平均，比段考平均更能看出一陣子的狀況。"},screenA:{title:"篩選 A（動能／相對強度）",plain:"用數學檢查：這支股票最近是不是漲得比大盤好、短中期動能如何、有沒有站上均線。通過的才比較容易被挑進名單。",example:"某股今天比大盤強很多，又站上 SMA20／SMA50，就可能通過篩選 A。像短跑又比同學快、成績又在平均之上。"},screenB:{title:"篩選 B（量能）",plain:"檢查今天成交量是不是明顯比平常大（量比偏高）。量很大有時代表很多人注意，但也可能波動更大。",example:"量比 14 倍表示今天成交大約是平常的 14 倍。像學校平時很少人買某樣零食，今天突然大排長龍。"},screenC:{title:"篩選 C（估值）",plain:"想用本益比之類「貴不貴」的數字來幫忙選股。如果當天抓不到可靠資料，這個篩選就會跳過，避免亂填數字。",example:"本益比像「用幾年賺的錢才回本」的粗略尺。沒有尺就先不量，不要瞎猜。"},taiex:{title:"台灣加權（TAIEX）",plain:"把台灣上市很多股票的表現加總做成一個大分數，用來代表「台股整體」今天大概漲還是跌。",example:"加權今天 −0.77%，表示整體台股平均大概跌了一點點。像全校平均分數今天比昨天低一點。"},otc:{title:"櫃買",plain:"台灣「上櫃」公司的市場（比較多中小型公司）。櫃買指數用來看這群股票整體漲跌。",example:"上市像大學部大隊，櫃買像另一個年級隊。兩邊可以分開看今天誰比較強。"},spx:{title:"S&P 500",plain:"美國 500 家大型公司組成的指數，常被拿來代表「美股大盤」。",example:"S&P 500 跌 0.5%，常被說成美股大盤今天偏弱。像美國大型公司班級的平均分數。"},nasdaq:{title:"Nasdaq（那斯達克）",plain:"美國一個重要股市指數，裡面很多科技公司，常被用來觀察科技股整體氣氛。",example:"Nasdaq 大跌時，很多科技股也可能一起抖。像科技社社團活動特別熱絡或特別冷清的溫度計。"},sox:{title:"SOX（費半）",plain:"美國半導體（做晶片）公司的指數。半導體好不好，常常影響台積電供應鏈的氣氛。",example:"SOX 大跌，常常代表晶片相關股票今天整體承壓。像「晶片班」今天考試普遍不理想。"},usdtwd:{title:"USD/TWD（美金兌台幣）",plain:"1 美元可以換多少台幣。數字變大，常表示台幣變弱（同樣 1 美元換到更多台幣）；數字變小則相反。",example:"匯率 32，表示 1 美元約換 32 元台幣。你要買 10 美元零食，大約要付 320 元台幣。"},adr:{title:"ADR",plain:"美國存託憑證：讓投資人在美國市場買賣「外國公司」的股票憑證。例如台積電在美國有 TSM 這個 ADR。",example:"你在美國超市買「台灣零食的美國包裝版」。東西本質相近，但包裝市場不同，價錢也可能不太一樣。"},parity:{title:"平價／隱含價",plain:"用台股價格、換股比例和匯率，算出「如果完全公平換算，ADR 大概該是多少美元」。拿來跟實際 ADR 價比較。",example:"5 股台積電 ÷ 匯率，算出 ADR 理論價約 374 美元。像用匯率把台幣玩具價換算成美元標價。"},premium:{title:"溢價",plain:"實際市價比「換算後的理論價」還貴多少。正的溢價表示買 ADR 比照公式換算更貴；負的則比較便宜（折價）。",example:"理論 374 美元，市價 416 美元，溢價大約一成多。像同樣便當，車站賣得比學校社辦貴。"},adsRatio:{title:"換股比（ADS 比例）",plain:"一張 ADR 對應幾股本地普通股。台積電常見是 1 股 ADR＝5 股台灣普通股，但要以官方公告為準。",example:"比例 5:1 表示 1 個美國存託憑證背後約有 5 股台股。像 1 盒積木裡固定裝 5 小塊。"},limitUp:{title:"漲停",plain:"台股對一天最多能漲多少有限制（一般股票常見約 10%）。碰到上限就叫漲停，常常買不到或很難成交。",example:"股票從 100 元漲到約 110 元就可能漲停。像遊戲一天經驗值有上限，滿了就不能再加。"},momentum:{title:"動能",plain:"看價格最近是不是繼續往同一方向跑（例如連續幾天偏強）。這是數學觀察，不是保證明天還會這樣。",example:"球正在往前滾而且愈滾愈快，就說動能強。但滾到一半也可能停下或轉向。"},ticker:{title:"股票代碼（Ticker）",plain:"每支股票的簡短代號，方便電腦與市場辨認。美股多用英文字母，台股多用數字。",example:"AAPL 是蘋果，2330 是台積電。像學校學號，用來點名不會搞混。"},index:{title:"指數",plain:"把很多股票包成一個「總成績單」，用來代表某一市場或產業整體表現。",example:"加權指數、S&P 500 都是指數。像全班平均分數，不是某一個同學的分數。"},screening:{title:"數學選股／篩選",plain:"用事先講好的計算規則（漲跌、跟大盤比、均線、成交量等）自動挑出通過條件的股票，而不是靠感覺。",example:"規則：要比大盤強、量比要高。通過的進名單。像用尺量身高，過線的才能進籃球隊候補。"},notAdvice:{title:"不是投資建議",plain:"這個網站只是把公開行情算出來給你看。它不會保證賺錢，也不能代替你自己做決定。",example:"像天氣預報說可能下雨，你仍要自己決定要不要帶傘。看完數字也不等於一定要買。"},intraday:{title:"盤中",plain:"股市還在交易、價格還會一直變動的時候。跟「收盤」（今天交易結束後的最終價）不一樣。",example:"考試還沒結束，分數還可能改；收盤像交卷後的最終分數。"},twStock:{title:"台股",plain:"在台灣證券市場交易的股票，價錢多用新台幣計價。",example:"2330 台積電、2308 台達電都是台股。"},usStock:{title:"美股",plain:"在美國市場交易的股票，價錢多用美元計價。",example:"AAPL、NVDA、CRWD 都是美股。"},paperTrade:{title:"模擬交易",plain:"累積模擬帳戶：自 2026-09-15 起用 latest.json 標的價假設下單即成交，帳本不會每日歸零。非真實券商委託。",example:"像用假錢玩大富翁：規則跟算分是真的，但口袋裡的零用錢沒有真的拿去買股票。"},principal:{title:"本金",plain:"一開始放進這個模擬帳本的錢。台股帳從 300 萬元台幣開始，美股帳從 10 萬美元開始。",example:"你帶 100 元去福利社，這 100 元就是本金。後來錢包變 90 或 120，都還是從這筆本金算起。"},position:{title:"部位",plain:"現在帳本裡「持有多少股票」。部位市值＝股數 × 現在價格。再加上現金，就是這本帳的權益。",example:"買了 1000 股、一股市價 50 元，部位大約 5 萬元。像背包裡現在裝了幾包零食、值多少錢。"},stopLoss:{title:"停損",plain:"事先講好：如果這筆模擬持有虧到某個百分比，就全部賣掉，避免虧更多。本站規則是未實現大約 −3%。",example:"遊戲裡血量低於 3 格就先撤退，不要硬打到歸零。這是保護本金的數學規則，不是保證以後不會虧。"},takeProfit:{title:"停利",plain:"事先講好：如果這筆模擬持有賺到某個百分比，就先賣一部分（本站大約 +12% 賣一半），把部分獲利放進現金。",example:"考試進步很多時，先把一部分分數「存起來」。不是說後面一定會跌，只是規則到點就減碼。"},unrealizedPnl:{title:"未實現損益",plain:"股票還沒賣掉時，用現在市價跟平均成本比，算出「帳面上」賺或虧多少。還沒賣掉就不算真正進口袋。",example:"你的遊戲卡市價變貴了，但你還沒賣掉，只是帳面變有錢。真的換成現金才算已實現。"},realizedPnl:{title:"已實現損益",plain:"真的（在模擬裡）賣掉以後，成交價減平均成本，已經記入現金的賺或虧。",example:"把遊戲卡賣掉拿到錢，這筆差額才算已實現。像把零食賣掉，錢已經回到錢包。"},periodPerf:{title:"週／月／季／年績效",plain:"看權益曲線最近一週、約一個月、約一季、約一年漲跌多少。若模擬開張還沒那麼久，就改看「從成立日到現在」。",example:"帳本才成立 1 天，還沒有「一年成績」，就寫成立以來。像學期才開學，先看開學到今天，不要假裝有全年成績。"},sinceInception:{title:"成立以來",plain:"從這本模擬帳開始的那一天算到現在。當歷史不夠一週／月／季／年時，就用這個標籤，避免假裝有更長的成績。",example:"新開的存摺沒有「去年」可以比，就說開戶以來。成績單太短時要老實講。"},danmaku:{title:"彈幕",plain:"像影片上飛過去的短句子。大家可以打很短的話，從螢幕右邊飛到左邊，讓氣氛熱鬧一點。",example:"有人打「今天量比好高！」就會變成一行字飛過畫面。跟下面慢慢看的留言板不一樣，彈幕偏短、偏即時。"},comments:{title:"留言板",plain:"掛在某一支股票卡片下面的討論區。大家可以針對這支股票慢慢寫想法，字數比彈幕多一點。",example:"在 CRWD 卡片下寫「量很大但要注意風險」，之後別人還看得到。像便利貼貼在該股票旁邊。"},reddit:{title:"Reddit",plain:"一個很大的英文網路論壇，裡面有很多討論區（subreddit）。本站只讀公開搜尋結果當「氣氛參考」，不會假裝有留言。",example:"r/stocks、r/wallstreetbets 常有人討論美股。如果網站抓不到（例如被 403 擋住），會老實寫 blocker，而不是編造。"},futu:{title:"富途牛牛",plain:"一款股票 App／平台（也叫 Moomoo）。本站目前多半只能拿到公開新聞搜尋，個股社群評論通常要登入，所以會標明「非社群評論」。",example:"看到「相關公開新聞」區塊，那是新聞標題，不是牛牛圈裡網友的真實留言。"},ptt:{title:"PTT",plain:"台灣很有名的論壇（批踢踢）。本站會搜尋 Stock 看板的公開文章標題當參考。",example:"在 Stock 板搜尋「2330」可能看到營收或標的文。看得到標題與連結，不代表我們同意裡面的看法。"},dcard:{title:"Dcard",plain:"台灣年輕人常用的匿名論壇 App／網站。本站試著搜尋股票相關討論；若被反爬擋住，會老實寫 blocker。",example:"有時 API 回 403，網站就會說「抓不到」，而不是自己編假留言。"},threads:{title:"Threads",plain:"Meta 的短文社群（跟 Instagram 有關）。沒有穩定的公開匿名搜尋 API 時，本站不會假裝有貼文。",example:"如果摘要寫「需登入／SPA」，代表公開抓取失敗，請改看其他來源或本站留言。"},pe:{title:"本益比（PE）",plain:"股價 ÷ 每股盈餘。數字愈小，用「現在賺的錢」來看，股價相對愈不貴（但還要看成長與風險）。沒抓到真實數字就不填。",example:"股價 100 元、一年每股賺 10 元，本益比約 10。像用 10 年賺的錢才回本的粗略尺。"},opMargin:{title:"營益率",plain:"營業利益 ÷ 營收。看「本業做生意」到底賺多少比例，還沒算業外投資。",example:"賣飲料營收 100 元，本業成本後剩 20 元，營益率約 20%。"},grossMargin:{title:"毛利率",plain:"毛利 ÷ 營收。只扣掉進貨／製造成本，還沒扣薪水、租金等營業費用。",example:"進貨 60 元、賣 100 元，毛利 40 元，毛利率 40%。"},foreignInv:{title:"外資",plain:"外國投資機構在台股買賣的總稱。公開資料會公布他們當天買超或賣超多少股。",example:"外資買超 100 萬股，表示外國機構今天淨買進約 100 萬股（≈ 1,000 張）。"},trustInv:{title:"投信",plain:"證券投資信託公司（基金公司）在台股的買賣。常被拿來看「法人」態度。",example:"投信買超代表基金們今天淨買比較多。"},dealerInv:{title:"自營商",plain:"券商用自己的錢買賣股票的部門。三大法人通常指外資＋投信＋自營商。",example:"自營商買超，表示券商自營部門今天淨買。"},maBull:{title:"均線多頭排列",plain:"短均線在長均線上面一層層排好（例如 SMA5>SMA10>SMA20>SMA60），常被看成短中期偏多的技術型態。",example:"像跑步成績：最近 5 天平均比 10 天好、又比 20／60 天好，節奏往上。"},rsi:{title:"RSI",plain:"相對強弱指標，常用 0–100。太高可能短線過熱，太低可能超賣；本站超短線策略看「在 50 以下且往上拐」。",example:"RSI 從 35 升到 42，還在 50 下，像體力表開始回升但還沒過半。"},amplitude:{title:"振幅",plain:"當天最高價與最低價差多少，再除以昨天收盤價。振幅大表示今天價格晃得兇。",example:"昨收 100，今天最高 104、最低 99，振幅約 5%。"},zhang:{title:"張",plain:"台股交易單位：1 張＝1,000 股。看成交量或法人買賣超時，常把「股」換算成「張」比較好讀。",example:"成交 300,000 股＝300 張。本站流動性門檻常寫「>300 張」。"},strategyScreen:{title:"策略選股（邏輯條件）",plain:"像選股軟體一樣：先選一套策略，看清楚每一條條件，再列出今天通過的股票與計算欄位。",example:"選「均線多頭排列」→ 看到 SMA 與量比條件 → 下面出現命中清單。"},xqLike:{title:"XQ／選股軟體風格",plain:"介面模仿常見台股看盤軟體的「策略分類＋條件＋命中數」操作習慣，方便對照；資料來源仍是公開行情，不是對方專有資料庫。",example:"左側點策略、中間看條件、下面看結果——流程很像，數字各自用公開資料算。"},socialDigest:{title:"網友參考（社交摘要）",plain:"把 Reddit、富途等公開來源整理成一天的小摘要給你看氣氛。它不是精準民調，更不是叫你買或賣。",example:"像把走廊上聽到的聊天重點寫在黑板上：有聽到就寫，沒聽到就老实说「今天抓不到」。"}};function l(t,e){const a=de[t],s=e??(a==null?void 0:a.title)??t;return a?`<a class="term" href="#term-${c(t)}" data-term="${c(t)}">${c(s)}</a>`:c(s)}function c(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function be(){return`
    <section class="section glossary-section" id="help-glossary">
      <h2 class="section-title" id="glossary">名詞辭典</h2>
      <p class="glossary-intro">點藍字跳轉 · 點標題展開</p>
      <div class="glossary-list" data-glossary-list>${Object.entries(de).map(([e,a])=>`
      <details class="glossary-item" id="term-${c(e)}">
        <summary class="glossary-summary">
          <span class="glossary-term-title">${c(a.title)}</span>
          <span class="glossary-chevron" aria-hidden="true"></span>
        </summary>
        <div class="glossary-body">
          <p class="g-plain">${c(a.plain)}</p>
          <p class="g-example"><span class="g-ex-label">例</span>${c(a.example)}</p>
        </div>
      </details>`).join("")}</div>
    </section>
  `}function $e(t,e={}){t.querySelectorAll("a.term").forEach(a=>{a.addEventListener("click",s=>{const i=a.getAttribute("data-term");s.preventDefault(),typeof e.beforeScroll=="function"&&e.beforeScroll(i);const r=()=>{const n=document.getElementById(`term-${i}`);n&&(n.tagName==="DETAILS"&&(n.open=!0),n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))};typeof e.beforeScroll=="function"?requestAnimationFrame(()=>requestAnimationFrame(r)):r()})})}const ye="./data/paper-portfolio.json";function M(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function z(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function pe(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString("zh-TW",{minimumFractionDigits:e,maximumFractionDigits:e})}function ue(t){return t==="USD"?"US$":t==="TWD"?"NT$":""}function D(t,e){if(t==null||Number.isNaN(t))return"—";const a=e==="TWD"?0:2;return`${ue(e)}${pe(t,a)}`}function O(t,e){if(t==null||Number.isNaN(t))return"—";const a=e==="TWD"&&t>=100?0:2;return`${ue(e)}${pe(t,a)}`}function me(t){return{"screen-buy":"名單新開倉",add:"持續買進",stop:"停損","take-profit":"停利","momentum-break":"動能轉弱","off-list":"離開名單","limit-up-chase":"漲停追價急殺"}[t]||t||""}function B(t){return t?`
    <div class="paper-win">
      <div class="w-label">${t.sinceInception?l("sinceInception","成立以來"):c(t.label||"")}</div>
      <div class="w-val ${M(t.pct)}">${z(t.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function ke(t,e){return t.length?t.map(a=>{var s;return`
      <tr>
        <td><span class="ticker">${c(a.ticker)}</span></td>
        <td class="name-cell">${c(a.name||"")}</td>
        <td class="num">${(s=a.qty)==null?void 0:s.toLocaleString("zh-TW")}</td>
        <td class="num">${O(a.price,e)}</td>
        <td><span class="badge reason ${c(a.reason||"")}">${c(me(a.reason))}</span></td>
        <td class="why-cell">${c(a.reasonText||"")}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">今天還沒有這類成交（模擬）</td></tr>'}function Se(t,e){return t.length?t.map(a=>{var r;const s=(a.mark-a.avgCost)*a.qty,i=a.avgCost?(a.mark-a.avgCost)/a.avgCost*100:0;return`
      <tr>
        <td><span class="ticker">${c(a.ticker)}</span></td>
        <td class="num">${(r=a.qty)==null?void 0:r.toLocaleString("zh-TW")}</td>
        <td class="num">${O(a.avgCost,e)}</td>
        <td class="num">${O(a.mark,e)}</td>
        <td class="num ${M(s)}">${D(s,e)}</td>
        <td class="num ${M(i)}">${z(i)}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">目前沒有持股</td></tr>'}function we(t,e,a){const s=e.currency,i=t==="TW"?`${l("twStock","台股")}帳本`:`${l("usStock","美股")}帳本`,r=D(e.startCash,s),n=(a==null?void 0:a.totalPnl)??e.equity-e.startCash,o=(a==null?void 0:a.totalPnlPct)??(e.startCash?(e.equity-e.startCash)/e.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${i}</h3>
      <p class="paper-start">${l("principal","本金")} ${r}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">現金</div>
          <div class="k-val">${D(e.cash,s)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${l("position","權益（部位＋現金）")}</div>
          <div class="k-val">${D(e.equity,s)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總${l("realizedPnl","損益")}</div>
          <div class="k-val ${M(n)}">${D(n,s)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總損益 ％</div>
          <div class="k-val ${M(o)}">${z(o)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${l("periodPerf","週績效")}</div>
          ${B(a==null?void 0:a.week)}
        </div>
        <div>
          <div class="win-name">${l("periodPerf","月績效")}</div>
          ${B(a==null?void 0:a.month)}
        </div>
        <div>
          <div class="win-name">${l("periodPerf","季績效")}</div>
          ${B(a==null?void 0:a.quarter)}
        </div>
        <div>
          <div class="win-name">${l("periodPerf","年績效")}</div>
          ${B(a==null?void 0:a.year)}
        </div>
      </div>
    </article>`}function xe(t,e){return t.length?t.map(a=>{var i;const s=a.side==="SELL"?"賣":"買";return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(a.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${c(a.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${s} ${(i=a.qty)==null?void 0:i.toLocaleString("zh-TW")} 股</div>
            <div style="font-family:var(--mono)">${O(a.price,e)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${c(a.reason||"")}">${c(me(a.reason))}</span>
        </div>
        ${a.reasonText?`<p class="lc-why">${c(a.reasonText)}</p>`:""}
      </div>`}).join(""):'<div class="list-card empty-card">今天還沒有這類成交（模擬）</div>'}function Ae(t,e){return t.length?t.map(a=>{var r;const s=(a.mark-a.avgCost)*a.qty,i=a.avgCost?(a.mark-a.avgCost)/a.avgCost*100:0;return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(a.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">股數 ${(r=a.qty)==null?void 0:r.toLocaleString("zh-TW")}</div>
          </div>
          <div style="text-align:right">
            <div class="${M(s)}" style="font-family:var(--mono);font-weight:600">${D(s,e)}</div>
            <div class="${M(i)}" style="font-family:var(--mono)">${z(i)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          <span>成本 ${O(a.avgCost,e)}</span>
          <span>市價 ${O(a.mark,e)}</span>
        </div>
      </div>`}).join(""):'<div class="list-card empty-card">目前沒有持股</div>'}function Z(t,e,a){return`
    <div class="paper-table-block">
      <h4>${c(t)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>日期</th>
              <th>${l("ticker","代碼")}</th>
              <th>名稱</th>
              <th>股數</th>
              <th>價格</th>
              <th>原因</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>${ke(e,a)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${xe(e,a)}</div>
    </div>`}function Te(t,e){return`
    <div class="paper-table-block">
      <h4>目前${l("position","部位")}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${l("ticker","代碼")}</th>
              <th>股數</th>
              <th>平均成本</th>
              <th>市價</th>
              <th>${l("unrealizedPnl","未實現損益")} $</th>
              <th>${l("unrealizedPnl","未實現")} ％</th>
            </tr>
          </thead>
          <tbody>${Se(t,e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${Ae(t,e)}</div>
    </div>`}function ee(t,e,a,s,i,r){const n=e.currency,o=[...e.trades||[]].sort((v,f)=>v.date<f.date?1:v.date>f.date?-1:0),p=o.filter(v=>v.date===s),u=p.filter(v=>v.side==="BUY"),g=p.filter(v=>v.side==="SELL"),m=o.slice(0,40),h=r;return`
    <div class="paper-panel ${i?"active":""}" id="paper-panel-${t}" role="tabpanel">
      ${we(t,e,a)}
      <p class="paper-session-note">${c(s||"—")} · 自 ${c(h)} 累積 · 買進即成交</p>
      ${Z(`買 ${s||""}`,u,n)}
      ${Z(`賣 ${s||""}`,g,n)}
      ${Te(e.positions||[],n)}
      ${Z("成交（近 40）",m,n)}
    </div>`}function Pe(t){var n,o,p;if(!t||!t.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${l("paperTrade","模擬")}</h2>
        <p class="paper-missing">還沒有模擬帳本檔案。請在專案執行 <code>npm run paper</code>。</p>
      </section>`;const e=t.books.TW,a=t.books.US;let i=(t.asOf||"").slice(0,10);try{i=new Date(t.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const r=t.startDate||(e==null?void 0:e.startDate)||(a==null?void 0:a.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${l("paperTrade","模擬")}</h2>
      <p class="paper-disclaimer" role="note">
        <strong>累積模擬帳戶（自 ${c(r)} 起）</strong>
        · 不會每日歸零 · <strong>買進即成交</strong>
        · 台 NT$3M／美 US$100k · 分開計價 · 非真實下單
      </p>
      <details class="paper-rules">
        <summary>規則</summary>
        <ul>
          <li>買：名單·風險1%·停距1.5%·單檔≤8%·台整張 · <strong>即成交</strong></li>
          <li>賣：${l("stopLoss","停損")}−3% · ${l("takeProfit","停利")}+12%半倉 · 破SMA20且日跌&gt;2% · 離名單虧損 · 漲停隔日−5%</li>
        </ul>
      </details>
      <p class="paper-combined">${c(((n=t.metrics)==null?void 0:n.combinedNote)||"台／美分開。")}</p>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${l("twStock","台股")}帳</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${l("usStock","美股")}帳</button>
      </div>
      ${ee("TW",e,(o=t.metrics)==null?void 0:o.TW,i,!0,r)}
      ${ee("US",a,(p=t.metrics)==null?void 0:p.US,i,!1,r)}
    </section>`}function qe(t){const e=t.querySelectorAll(".paper-tab-btn");e.forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.paperTab;e.forEach(i=>{const r=i.dataset.paperTab===s;i.classList.toggle("active",r),i.setAttribute("aria-selected",r?"true":"false")}),t.querySelectorAll(".paper-panel").forEach(i=>{i.classList.toggle("active",i.id===`paper-panel-${s}`)})})})}async function Le(){try{const t=await fetch(ye);return t.ok?await t.json():null}catch{return null}}const te={},ae="聊天後端尚未接上";function Ce(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&te?te:{},a=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),s=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:a,anon:s}}function V(t,e=document){return e.querySelector(t)}function F(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ne(t,e){const a={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async select(s=40){const i=`${t}/rest/v1/danmaku?select=*&order=created_at.desc&limit=${s}`,r=await fetch(i,{headers:a});if(!r.ok)throw new Error(`danmaku select ${r.status}`);return r.json()},async insert(s){const i=await fetch(`${t}/rest/v1/danmaku`,{method:"POST",headers:a,body:JSON.stringify(s)});if(!i.ok){const r=await i.text();throw new Error(`danmaku insert ${i.status}: ${r}`)}return i.json()}}}function Ie(t,e,a=12e3){if(!t)return;const s=document.createElement("div");s.className="ss-danmaku-item",s.textContent=e,s.style.top=`${8+Math.random()*42}vh`,s.style.animationDuration=`${a}ms`,t.appendChild(s),window.setTimeout(()=>s.remove(),a+200)}function Ee(t={}){const e=t.root||document,a=V(t.panelSelector||"#ss-danmaku-panel",e),s=V(t.layerSelector||"#ss-danmaku-layer",e);if(!a)return{ok:!1,reason:"panel missing"};const i=t.config||globalThis.STOCK_SOCIAL_CONFIG||{},{url:r,anon:n}=Ce(i);let o=V(".ss-chat-status",a);o||(o=document.createElement("div"),o.className="ss-chat-status",a.insertBefore(o,a.firstChild));const p=V(".ss-chat-list",a),u=V(".ss-chat-form",a),g=u&&u.querySelector(".ss-nick"),m=u&&u.querySelector(".ss-body"),h=u&&u.querySelector('button[type="submit"]'),v=i.danmakuMaxLen||80,f=i.postCooldownMs||4e3;let A=new Set,y=null,U=!1;if(!r||!n)return o.textContent=ae+"（請設定 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY）",o.classList.add("is-warn"),u&&u.querySelectorAll("input,button").forEach(N=>{N.disabled=!0}),p&&(p.innerHTML='<li><span class="nick">系統</span>後端未接上時仍可瀏覽下方 Reddit／富途摘要。</li>'),{ok:!1,reason:"no-config",message:ae};y=Ne(r,n),o.textContent="彈幕已連線（公開發言，請保持友善）",o.classList.remove("is-warn");async function E(N=!0){try{const q=[...await y.select(40)].reverse();if(p&&(p.innerHTML=q.map(T=>`<li><span class="nick">${F(T.nickname)}</span>${F(T.body)}<span class="meta">${F(new Date(T.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join(""),p.scrollTop=p.scrollHeight),N){for(const T of q)A.has(T.id)||(A.add(T.id),Ie(s,`${T.nickname}: ${T.body}`));A.size>200&&(A=new Set([...A].slice(-100)))}else q.forEach(T=>A.add(T.id))}catch(I){o.textContent=`讀取失敗：${I.message}`,o.classList.add("is-warn")}}u&&u.addEventListener("submit",async N=>{if(N.preventDefault(),!y||U)return;const I=((g==null?void 0:g.value)||"訪客").trim().slice(0,24)||"訪客",q=((m==null?void 0:m.value)||"").trim().slice(0,v);if(q){U=!0,h&&(h.disabled=!0);try{await y.insert({body:q,nickname:I}),m&&(m.value=""),await E(!0)}catch(T){o.textContent=`發送失敗：${T.message}`,o.classList.add("is-warn")}finally{window.setTimeout(()=>{U=!1,h&&(h.disabled=!1)},f)}}}),E(!1).then(()=>E(!0));const G=window.setInterval(()=>E(!0),i.pollIntervalMs||8e3);return{ok:!0,destroy(){window.clearInterval(G)}}}const se={},Re="聊天後端尚未接上",Me=[{id:"local",label:"本站留言"},{id:"reddit",label:"Reddit"},{id:"futu",label:"富途"}],je=[{id:"local",label:"本站留言"},{id:"ptt",label:"PTT"},{id:"dcard",label:"Dcard"},{id:"threads",label:"Threads"}];function De(t,e){const a=String(e||"").toUpperCase();return a==="US"||a==="TW"?a:String(t||"").toUpperCase().endsWith(".TW")?"TW":"US"}function Oe(t){return t==="TW"?je:Me}function Ue(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&se?se:{},a=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),s=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:a,anon:s}}function w(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ve(t,e){const a={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(s,i=50){const r=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(s)}&order=created_at.asc&limit=${i}`,n=await fetch(r,{headers:a});if(!n.ok)throw new Error(`comments select ${n.status}`);return n.json()},async insert(s){const i=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:a,body:JSON.stringify(s)});if(!i.ok){const r=await i.text();throw new Error(`comments insert ${i.status}: ${r}`)}return i.json()}}}function We(){try{return window.matchMedia("(min-width: 768px)").matches}catch{return!1}}function _e(t,e,a){if(!t||!a)return null;const s=t[e];return Array.isArray(s)&&s.find(i=>String(i.ticker).toUpperCase()===String(a).toUpperCase())||null}function Be(t,e,{futuMode:a=!1}={}){if(!t)return`<p class="ss-empty">此標的尚無 ${w(e)} 摘要（可能未納入今日抓取名單，或此市場不查該來源）。</p>`;const s=[];t.blocker&&s.push(`<p class="ss-digest-blocker">⚠ ${w(t.blocker)}</p>`);const i=t.items||[],r=t.newsRelated||[];if(i.length&&s.push(i.map(n=>{const o=n.url?w(n.url):"#",p=n.score!=null?`<span class="ss-score">▲ ${w(n.score)}</span>`:"",u=n.author?`@${w(n.author)}`:"";return`<article class="ss-digest-item">
            <a href="${o}" target="_blank" rel="noopener noreferrer">${w(n.snippet||n.title||"(無摘要)")}</a>
            <div class="ss-digest-meta">${p} ${u}</div>
          </article>`}).join("")),r.length){const n=a?"新聞／討論線索（非留言）":"相關公開新聞（非社群評論）";s.push(`<p class="ss-digest-sub">${n}</p>`),s.push(r.map(o=>`<article class="ss-digest-item">
            <a href="${o.url?w(o.url):"#"}" target="_blank" rel="noopener noreferrer">${w(o.snippet||"(無標題)")}</a>
          </article>`).join(""))}return Array.isArray(t.manualUrls)&&t.manualUrls.length&&!i.length&&s.push('<p class="ss-digest-sub">手動開啟</p>'+t.manualUrls.slice(0,4).map(n=>`<article class="ss-digest-item"><a href="${w(n)}" target="_blank" rel="noopener noreferrer">${w(n)}</a></article>`).join("")),!i.length&&!r.length&&!t.blocker&&s.push(`<p class="ss-empty">暫無 ${w(e)} 資料</p>`),s.join("")||'<p class="ss-empty">暫無資料</p>'}function ze(t,e,a={}){if(!t||!e)return{ok:!1};const s=a.config||globalThis.STOCK_SOCIAL_CONFIG||{},i=a.digest||null,r=De(e,a.market||t.getAttribute("data-market")),n=Oe(r),{url:o,anon:p}=Ue(s),u=s.commentMaxLen||500,g=s.postCooldownMs||4e3,m=We()?" open":"",h=n.map((b,S)=>`<button type="button" class="ss-src-tab${S===0?" active":""}" data-src="${b.id}" role="tab" aria-selected="${S===0?"true":"false"}">${b.label}</button>`).join(""),v=n.filter(b=>b.id!=="local").map(b=>`<div class="ss-src-panel" data-panel="${b.id}" role="tabpanel" hidden></div>`).join("");t.classList.add("ss-thread"),t.dataset.market=r,t.innerHTML=`
    <details class="ss-thread-details"${m}>
      <summary>討論 ${w(e)}（${r==="TW"?"台股來源":"美股來源"}）</summary>
      <div class="ss-src-tabs" role="tablist" aria-label="${w(e)} 來源">${h}</div>
      <div class="ss-src-panels">
        <div class="ss-src-panel active" data-panel="local" role="tabpanel">
          <div class="ss-thread-status"></div>
          <form class="ss-thread-form">
            <input class="ss-nick" maxlength="24" placeholder="暱稱（可空＝訪客）" autocomplete="nickname" />
            <textarea class="ss-body" maxlength="${u}" rows="2" placeholder="匿名留言（最多 ${u} 字，無需登入）" required></textarea>
            <button type="submit">送出</button>
          </form>
          <ul class="ss-thread-list"></ul>
        </div>
        ${v}
      </div>
    </details>
  `;const f=t.querySelector(".ss-thread-status"),A=t.querySelector(".ss-thread-list"),y=t.querySelector(".ss-thread-form"),U={ptt:["ptt","PTT",!1],dcard:["dcard","Dcard",!1],threads:["threads","Threads",!1],reddit:["reddit","Reddit",!1],futu:["futu","富途",!0]};for(const b of n){if(b.id==="local")continue;const S=U[b.id];if(!S)continue;const[P,L,H]=S,Q=t.querySelector(`[data-panel="${b.id}"]`);Q&&(Q.innerHTML=Be(_e(i,P,e),L,{futuMode:H}))}const E=t.querySelectorAll(".ss-src-tab"),G=t.querySelectorAll(".ss-src-panel");if(E.forEach(b=>{b.addEventListener("click",()=>{const S=b.dataset.src;E.forEach(P=>{const L=P.dataset.src===S;P.classList.toggle("active",L),P.setAttribute("aria-selected",L?"true":"false")}),G.forEach(P=>{const L=P.dataset.panel===S;P.classList.toggle("active",L),P.hidden=!L})})}),!o||!p){f.textContent=Re+"（需 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY；見 README）。UI 已就緒，匿名發言尚未接通。",f.className="ss-thread-status is-warn",y.querySelectorAll("input,textarea,button").forEach(S=>{S.disabled=!0});const b=r==="TW"?"可切換上方分頁看 PTT／Dcard／Threads 摘要":"可切換上方分頁看 Reddit／富途摘要";return A.innerHTML=`<li class="ss-empty">本站匿名留言需 Supabase anon INSERT（RLS）。不會假裝送出後丟掉。${b}；全站 Giscus 需 GitHub 登入，僅作備援。</li>`,{ok:!1,reason:"no-config",market:r}}const N=Ve(o,p);f.textContent="開放匿名討論（無需登入，請保持友善）";let I=!1;async function q(){try{const b=await N.list(e);if(!b.length){A.innerHTML='<li class="ss-empty">尚無留言，來當第一個吧。</li>';return}A.innerHTML=b.map(S=>`<li><strong>${w(S.nickname)}</strong> ${w(S.body)}<span class="meta">${w(new Date(S.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join("")}catch(b){f.textContent=`讀取失敗：${b.message}`,f.className="ss-thread-status is-warn"}}y.addEventListener("submit",async b=>{if(b.preventDefault(),I)return;const S=(y.querySelector(".ss-nick").value||"訪客").trim().slice(0,24)||"訪客",P=(y.querySelector(".ss-body").value||"").trim().slice(0,u);if(!P)return;I=!0;const L=y.querySelector("button");L.disabled=!0;try{await N.insert({ticker:e,body:P,nickname:S}),y.querySelector(".ss-body").value="",await q()}catch(H){f.textContent=`發送失敗：${H.message}`,f.className="ss-thread-status is-warn"}finally{window.setTimeout(()=>{I=!1,L.disabled=!1},g)}}),q();const T=window.setInterval(q,s.pollIntervalMs||1e4);return{ok:!0,market:r,destroy(){window.clearInterval(T)}}}function Ge(t=document,e={}){const a=t.querySelectorAll("[data-ticker-comments]"),s=[];return a.forEach(i=>{const r=i.getAttribute("data-ticker-comments")||i.dataset.ticker,n=i.getAttribute("data-market")||void 0;r&&s.push(ze(i,r,{...e,market:n}))}),s}function He(t,e){if(!t||!e||t.querySelector("script[data-giscus], iframe.giscus-frame"))return;const a=document.createElement("script");a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","1"),a.setAttribute("data-repo",e.repo||""),a.setAttribute("data-repo-id",e.repoId||""),a.setAttribute("data-category",e.category||"General"),a.setAttribute("data-category-id",e.categoryId||""),a.setAttribute("data-mapping",e.mapping==="pathname"?"pathname":"specific"),a.setAttribute("data-term",e.term||"site-discussion"),a.setAttribute("data-strict","0"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","bottom"),a.setAttribute("data-theme",e.theme||"dark"),a.setAttribute("data-lang",e.lang||"zh-TW"),t.appendChild(a)}function Ze(t="#ss-giscus",e={}){const a=document.querySelector(t);if(!a)return{ok:!1,reason:"missing"};const i=(e.config||globalThis.STOCK_SOCIAL_CONFIG||{}).giscus||{};if(!i.enabled||!i.repoId||!i.categoryId)return a.innerHTML='<p class="ss-chat-status is-warn">Giscus 尚未設定（需 repoId / categoryId）。請見 README。</p>',{ok:!1,reason:"no-config"};const r=a.querySelector(".ss-giscus-host")||a;return He(r,{...i,term:i.term||"site-discussion"}),{ok:!0}}function $(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Fe(t){const e=t.manualUrls||[];return e.length?'<p class="ss-digest-sub">手動開啟</p>'+e.slice(0,4).map(a=>`<article class="ss-digest-item"><a href="${$(a)}" target="_blank" rel="noopener noreferrer">${$(a)}</a></article>`).join(""):""}function ie(t){const e=t.score!=null?`<span class="ss-score">▲ ${$(t.score)}</span>`:"",a=t.author?`@${$(t.author)}`:"",s=t.created?$(new Date(t.created).toLocaleString("zh-TW",{hour12:!1})):t.date?$(t.date):"",i=t.via?`<span class="ss-via">${$(t.via)}</span>`:"";return`<article class="ss-digest-item">
    <a href="${t.url?$(t.url):"#"}" target="_blank" rel="noopener noreferrer">${$(t.snippet||t.title||"(無摘要)")}</a>
    <div class="ss-digest-meta">${e} ${a} ${s} ${i}</div>
  </article>`}function Ke(t,e,{futuMode:a=!1}={}){var p;const s=t.blocker?`<p class="ss-digest-blocker">⚠ ${$(t.blocker)}</p>`:"",i=t.items||[],r=t.newsRelated||[];let n="";i.length&&(n+=i.map(ie).join("")),r.length&&(n+=`<p class="ss-digest-sub">${a?"新聞／討論線索（非留言）":"相關公開新聞（非社群評論）"}</p>`+r.map(ie).join("")),!i.length&&((p=t.manualUrls)!=null&&p.length)&&(n+=Fe(t)),n||(n=`<p class="ss-empty">此標的暫無${$(e)}資料</p>`);const o=t.via&&t.via!=="reddit.com"?`<p class="ss-digest-via-note">來源備援：${$(t.via)}</p>`:"";return`<section class="ss-digest-ticker" data-ticker="${$(t.ticker)}">
    <h4>${$(t.ticker)}</h4>
    ${s}
    ${o}
    ${n}
  </section>`}function W(t,e,a,s={}){const i=(e||[]).map(r=>Ke(r,a,s)).join("");return`<div class="ss-digest-col">
    <h4 class="ss-digest-col-title">${$(t)}</h4>
    ${i||`<p class="ss-empty">無 ${$(t)} 區塊（今日無對應市場標的或尚未抓取）</p>`}
  </div>`}async function ve(t){const e=globalThis.STOCK_SOCIAL_CONFIG||{},a=t||e.socialDigestUrl||"./data/social-digest.json",s=await fetch(a,{cache:"no-cache"});if(!s.ok)throw new Error(`social-digest ${s.status}`);return s.json()}function Je(t,e){if(!e)return;const a=t.asOf?new Date(t.asOf).toLocaleString("zh-TW",{hour12:!1}):"—",s=(t.notes||[]).map(m=>`<li>${$(m)}</li>`).join(""),i=t.routing?'<p class="ss-digest-routing">路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads</p>':"",r=`
    <div class="ss-digest-market" data-market-panel="US">
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${W("Reddit",t.reddit,"Reddit")}
        ${W("富途牛牛",t.futu,"富途",{futuMode:!0})}
      </div>
    </div>`,n=`
    <div class="ss-digest-market" data-market-panel="TW" hidden>
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${W("PTT",t.ptt,"PTT")}
        ${W("Dcard",t.dcard,"Dcard")}
        ${W("Threads",t.threads,"Threads")}
      </div>
    </div>`,o=(t.reddit||[]).length||(t.futu||[]).length,p=(t.ptt||[]).length||(t.dcard||[]).length||(t.threads||[]).length,u=o?"US":p?"TW":"US";e.innerHTML=`
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>今日社交摘要</h3>
        <p class="ss-digest-asof">資料時間：${$(a)}</p>
        ${i}
        ${s?`<ul class="ss-digest-notes">${s}</ul>`:""}
      </header>
      <div class="ss-digest-market-tabs" role="tablist" aria-label="社交摘要市場">
        <button type="button" class="ss-mkt-tab${u==="US"?" active":""}" data-market="US" role="tab" aria-selected="${u==="US"}">美股來源（Reddit／富途）</button>
        <button type="button" class="ss-mkt-tab${u==="TW"?" active":""}" data-market="TW" role="tab" aria-selected="${u==="TW"}">台股來源（PTT／Dcard／Threads）</button>
      </div>
      ${r}
      ${n}
    </div>
  `,e.querySelectorAll("[data-market-panel]").forEach(m=>{const h=m.getAttribute("data-market-panel")===u;m.hidden=!h});const g=e.querySelectorAll(".ss-mkt-tab");g.forEach(m=>{m.addEventListener("click",()=>{const h=m.getAttribute("data-market");g.forEach(v=>{const f=v===m;v.classList.toggle("active",f),v.setAttribute("aria-selected",f?"true":"false")}),e.querySelectorAll("[data-market-panel]").forEach(v=>{v.hidden=v.getAttribute("data-market-panel")!==h})})})}async function Ye(t="#ss-social-digest",e){const a=document.querySelector(t);if(!a)return{ok:!1};try{const s=await ve(e);return Je(s,a),{ok:!0,data:s}}catch(s){return a.innerHTML=`<p class="ss-digest-blocker">社交摘要尚未產生或讀取失敗：${$(s.message)}</p>`,{ok:!1,error:s}}}const he="./data/strategy-screener.json",Xe={精選:"精選",價量:"價量",籌碼:"籌碼",財務:"財務",大師:"大師",技術:"價量",綜合:"精選"};function Qe(t){try{return new Date(t).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+"（台北）"}catch{return t||"—"}}function d(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString("zh-TW",{minimumFractionDigits:e,maximumFractionDigits:e})}function K(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function J(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(2)}%`}function et(t){return t.categoryGroup||Xe[t.category]||t.category||"精選"}function tt(t){let e=c(t);return e=e.replace(/本益比/g,()=>l("pe","本益比")),e=e.replace(/營益率/g,()=>l("opMargin","營益率")),e=e.replace(/毛利率/g,()=>l("grossMargin","毛利率")),e=e.replace(/外資/g,()=>l("foreignInv","外資")),e=e.replace(/投信/g,()=>l("trustInv","投信")),e=e.replace(/自營商/g,()=>l("dealerInv","自營商")),e=e.replace(/均線多頭/g,()=>l("maBull","均線多頭")),e=e.replace(/RSI/g,()=>l("rsi","RSI")),e=e.replace(/振幅/g,()=>l("amplitude","振幅")),e=e.replace(/(\d+)\s*張/g,(a,s)=>`${s}${l("zhang","張")}`),e=e.replace(/＞\s*(\d+)\s*張/g,(a,s)=>`＞ ${s}${l("zhang","張")}`),e}function at(t){return t==="skip"?'<span class="xq-cond-st skip">略過</span>':t==="fail"?'<span class="xq-cond-st fail">未過</span>':'<span class="xq-cond-st pass">條件</span>'}function st(t){switch(t){case"ma-bull":return[{key:"price",label:"價格",fmt:e=>d(e.price)},{key:"dayPct",label:"日漲跌",fmt:e=>J(e.dayPct),cls:e=>K(e.dayPct)},{key:"sma5",label:"SMA5",fmt:e=>d(e.sma5)},{key:"sma10",label:"SMA10",fmt:e=>d(e.sma10)},{key:"sma20",label:"SMA20",fmt:e=>d(e.sma20)},{key:"sma60",label:"SMA60",fmt:e=>d(e.sma60)},{key:"volRatioYday",label:"量比(昨)",fmt:e=>e.volRatioYday!=null?d(e.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:"今量(張)",fmt:e=>e.volTodayZhang!=null?d(e.volTodayZhang,1):e.volToday!=null?d(e.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:l("pe","本益比"),fmt:e=>d(e.pe,2),rawLabel:!0},{key:"price",label:"價格",fmt:e=>d(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?d(e.avgVol5Zhang,1):e.avgVol5Shares!=null?d(e.avgVol5Shares,0)+"股":"—"},{key:"revenueGrowth",label:"營收成長%",fmt:e=>e.revenueGrowth!=null?d(e.revenueGrowth,1):"—"},{key:"earningsGrowth",label:"獲利成長%",fmt:e=>e.earningsGrowth!=null?d(e.earningsGrowth,1):"—"},{key:"debtToEquity",label:"負債權益",fmt:e=>e.debtToEquity!=null?d(e.debtToEquity,2):"—"},{key:"dayPct",label:"日漲跌",fmt:e=>J(e.dayPct),cls:e=>K(e.dayPct)}];case"inst-sync":return[{key:"foreignNet1dZhang",label:l("foreignInv","外資")+"1日(張)",fmt:e=>d(e.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:l("trustInv","投信")+"1日(張)",fmt:e=>d(e.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:l("dealerInv","自營商")+"1日(張)",fmt:e=>d(e.dealerNet1dZhang,1),rawLabel:!0},{key:"instNet5dZhang",label:"法人5日(張)",fmt:e=>d(e.instNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:"價格",fmt:e=>d(e.price)},{key:"dayPct",label:"日漲跌",fmt:e=>J(e.dayPct),cls:e=>K(e.dayPct)},{key:"rsi",label:l("rsi","RSI"),fmt:e=>d(e.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:e=>d(e.rsiPrev,2)},{key:"ampPct",label:l("amplitude","振幅"),fmt:e=>e.ampPct!=null?d(e.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?d(e.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:e=>d(e.pb,2)},{key:"directorHoldPct",label:"董監持股%",fmt:e=>e.directorHoldPct!=null?d(e.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:e=>e.debtRatioPct!=null?d(e.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:e=>d(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>d(e.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:l("pe","本益比"),fmt:e=>d(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?d(e.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:e=>e.debtRatioPct!=null?d(e.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:e=>Array.isArray(e.revGrowth3y)?e.revGrowth3y.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"price",label:"價格",fmt:e=>d(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>d(e.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:e=>e.revGrowth5yAvgPct!=null?d(e.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?d(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:e=>e.debtRatioPct!=null?d(e.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:e=>d(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>d(e.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?d(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:"近季營益率%",fmt:e=>e.opMargin1qPct!=null?d(e.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:e=>Array.isArray(e.opMargin3y)?e.opMargin3y.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:e=>e.revGrowth3yAvgPct!=null?d(e.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:"價格",fmt:e=>d(e.price)}];case"benjamin-graham":return[{key:"pe",label:l("pe","本益比"),fmt:e=>d(e.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:e=>d(e.pb,2)},{key:"debtRatioPct",label:"負債比%",fmt:e=>e.debtRatioPct!=null?d(e.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:e=>d(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>d(e.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?d(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:"近季營益率%",fmt:e=>e.opMargin1qPct!=null?d(e.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:e=>e.debtRatioPct!=null?d(e.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:e=>d(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>d(e.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:l("pe","本益比"),fmt:e=>d(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?d(e.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:e=>e.roeGrowthPct!=null?d(e.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:e=>e.epsGrowthStreak!=null?String(e.epsGrowthStreak):"—"},{key:"price",label:"價格",fmt:e=>d(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>d(e.avgVol5Zhang,1)}];case"margin-up":return[{key:"seasons",label:"季別",fmt:e=>Array.isArray(e.seasons)?e.seasons.join(" → "):"—"},{key:"opMargins",label:l("opMargin","營益率"),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.map(a=>a!=null?a+"%":"—").join(" → "):"—",rawLabel:!0},{key:"grossMargins",label:l("grossMargin","毛利率"),fmt:e=>Array.isArray(e.grossMargins)?e.grossMargins.map(a=>a!=null?a+"%":"—").join(" → "):"—",rawLabel:!0},{key:"mode",label:"條件",fmt:e=>e.mode||"—"},{key:"source",label:"來源",fmt:e=>e.source||"—"}];default:return[{key:"price",label:"價格",fmt:e=>d(e.price)}]}}function it(t){return`<ol class="xq-cond-list">${(t.conditions||[]).map((a,s)=>{const i=a.status||"pass";return`<li class="xq-cond ${i}">
        <span class="xq-cond-num">${s+1}</span>
        <span class="xq-cond-text">${tt(a.text)}</span>
        ${at(i)}
      </li>`}).join("")}</ol>`}function nt(t){const e=t.hits||[];if(t.incomplete&&!e.length){const n=c(t.incompleteLabel||"資料不足"),o=(t.blockers||[]).map(p=>`<li>${c(p)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${n}</div>
      <ul>${o}</ul>
      <p class="xq-hint">條件仍列出供對照；公開資料齊了會自動出命中，絕不快取假數字。</p>
    </div>`}if(!e.length){const n=(t.blockers||[]).map(o=>`<li>${c(o)}</li>`).join("");return`<div class="xq-empty">
      <p>今日無命中（規則有跑，只是沒有股票同時過關）。</p>
      ${n?`<ul>${n}</ul>`:""}
    </div>`}const a=st(t.id),s=a.map(n=>`<th>${n.rawLabel?n.label:c(n.label)}</th>`).join(""),i=e.map(n=>{const o=n.metrics||{},p=a.map(u=>`<td class="num ${u.cls?u.cls(o):""}">${u.fmt(o)}</td>`).join("");return`<tr>
        <td><span class="ticker">${c(n.ticker)}</span></td>
        <td class="name-cell">${c(n.name||"")}</td>
        <td><span class="badge market">${c(n.market||"")}</span></td>
        ${p}
      </tr>`}).join(""),r=e.map(n=>{const o=n.metrics||{},p=a.map(u=>{const g=u.cls?u.cls(o):"";return`<div class="xq-m"><span class="xq-ml">${u.rawLabel?u.label:c(u.label)}</span><span class="xq-mv ${g}">${u.fmt(o)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${c(n.ticker)}</div>
            <div class="name">${c(n.name||"")}</div>
          </div>
          <span class="badge market">${c(n.market||"")}</span>
        </div>
        <div class="xq-hit-metrics">${p}</div>
      </article>`}).join("");return`
    <div class="table-wrap xq-table-wrap">
      <table class="stock-table xq-table">
        <thead><tr>
          <th>代碼</th><th>名稱</th><th>市場</th>${s}
        </tr></thead>
        <tbody>${i}</tbody>
      </table>
    </div>
    <div class="xq-mobile-cards">${r}</div>
  `}function ne(t,e){var n,o;const a=(t.hits||[]).length,s=(t.unchecked||[]).map(p=>`<li class="xq-unchecked">${c(p)}</li>`).join(""),i=(t.notes||[]).map(p=>`<li>${c(p)}</li>`).join(""),r=!t.incomplete&&(t.blockers||[]).length?`<ul class="xq-blockers">${(t.blockers||[]).map(p=>`<li>${c(p)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${c(t.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${c(t.name)}</h3>
          <div class="xq-tags">
            ${(t.xqTags||[t.category]).map(p=>`<span class="xq-tag">${c(p)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="命中檔數">
          <span class="xq-hit-num">${a}</span>
          <span class="xq-hit-label">檔命中</span>
        </div>
      </div>
      ${t.description?`<p class="xq-desc">${c(t.description)}</p>`:""}
      <div class="xq-meta-row">
        <span>執行日 ${c(e.sessionDate||"—")}</span>
        <span>資料 ${Qe(e.asOf)}</span>
        <span>宇宙 台${((n=e.universe)==null?void 0:n.tw)??"—"}／美${((o=e.universe)==null?void 0:o.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">邏輯條件（明示、可對照）</h4>
      ${it(t)}
      ${s?`<ul class="xq-unchecked-list">${s}</ul>`:""}
      ${i?`<ul class="xq-notes">${i}</ul>`:""}
      ${r}
      <div class="xq-toolbar">
        <h4 class="xq-sub">篩選結果</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>複製 JSON</button>
          <button type="button" class="xq-btn" data-xq-csv>匯出此策略 CSV</button>
          <a class="xq-btn xq-btn-link" href="${he}" download="strategy-screener.json">匯出 JSON</a>
        </div>
      </div>
      ${nt(t)}
    </div>
  `}function lt(t=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${l("strategyScreen","策略選股")}</h2>
      <p class="view-lead-tight">${l("xqLike","XQ 風格")}條件命中 · 缺資料標「不足」· 不捏造</p>
      <div id="xq-root" class="xq-root" aria-label="策略選股">
        ${t?'<p class="xq-loading">載入策略結果中…</p>':""}
      </div>
    </section>
  `}async function rt(t=he){const e=await fetch(t,{cache:"no-cache"});if(!e.ok)throw new Error(`strategy-screener ${e.status}`);return e.json()}function ct(t,e){var g;const a=typeof t=="string"?document.querySelector(t):t;if(!a||!((g=e==null?void 0:e.strategies)!=null&&g.length)){a&&(a.innerHTML='<div class="xq-empty"><p>尚無策略資料。請執行 <code>npm run strategies</code>。</p></div>');return}const s=e.categoryOrder||["精選","價量","籌碼","財務","大師"],i=new Map(s.map(m=>[m,[]]));for(const m of e.strategies){const h=et(m);i.has(h)||i.set(h,[]),i.get(h).push(m)}const r=e.strategies[0],n=s.map(m=>{const h=i.get(m)||[];return h.length?`<div class="xq-cat-block">
        <div class="xq-cat-label">${c(m)}</div>
        <div class="xq-chip-row">
          ${h.map(v=>{const f=(v.hits||[]).length,A=v.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${v.id===r.id?" active":""}${A}" data-xq-id="${c(v.id)}" aria-pressed="${v.id===r.id}">
                <span class="xq-chip-name">${c(v.name)}</span>
                <span class="xq-chip-n">${v.incomplete?"不足":`共${f}檔`}</span>
              </button>`}).join("")}
        </div>
      </div>`:""}).join(""),o=e.strategies.map(m=>{const h=(m.hits||[]).length,v=m.id===r.id?" active":"",f=m.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${v}${f}" data-xq-id="${c(m.id)}">
        <span>${c(m.name)}</span>
        <span class="xq-side-n">${m.incomplete?"不足":`共${h}檔`}</span>
      </button>`}).join("");a.innerHTML=`
    <div class="xq-layout">
      <aside class="xq-sidebar" aria-label="策略列表">
        <div class="xq-side-title">策略</div>
        ${o}
      </aside>
      <div class="xq-main">
        <div class="xq-chips" aria-label="策略分類">${n}</div>
        <div class="xq-panel-host">${ne(r,e)}</div>
      </div>
    </div>
    <p class="xq-foot">${c(e.disclaimer||"")}
      ${e.exportNote?` · ${c(e.exportNote)}`:""}
    </p>
  `;const p=a.querySelector(".xq-panel-host"),u=m=>{const h=e.strategies.find(v=>v.id===m);!h||!p||(p.innerHTML=ne(h,e),a.querySelectorAll("[data-xq-id]").forEach(v=>{const f=v.getAttribute("data-xq-id")===m;v.classList.toggle("active",f),v.tagName==="BUTTON"&&v.setAttribute("aria-pressed",f?"true":"false")}),le(p,e),p.querySelectorAll("a.term").forEach(v=>{v.addEventListener("click",f=>{const A=v.getAttribute("data-term"),y=document.getElementById(`term-${A}`);y&&(f.preventDefault(),y.scrollIntoView({behavior:"smooth",block:"start"}),y.classList.add("flash"),setTimeout(()=>y.classList.remove("flash"),1600))})}))};a.querySelectorAll("[data-xq-id]").forEach(m=>{m.addEventListener("click",()=>u(m.getAttribute("data-xq-id")))}),le(p,e)}function ot(t){const e=t.hits||[];if(!e.length)return"";const a=[...new Set(e.flatMap(n=>Object.keys(n.metrics||{})))],s=["ticker","name","market","ohlcvBarDate",...a],i=n=>{const o=n==null?"":String(n);return/[",\n]/.test(o)?`"${o.replace(/"/g,'""')}"`:o},r=e.map(n=>{const o=n.metrics||{};return[n.ticker,n.name,n.market,n.ohlcvBarDate||"",...a.map(p=>o[p])].map(i).join(",")});return[s.join(","),...r].join(`
`)}function dt(t,e,a){const s=new Blob([e],{type:a}),i=document.createElement("a");i.href=URL.createObjectURL(s),i.download=t,i.click(),setTimeout(()=>URL.revokeObjectURL(i.href),2e3)}function le(t,e){var a,s;(a=t==null?void 0:t.querySelector("[data-xq-copy]"))==null||a.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(e,null,2));const i=t.querySelector("[data-xq-copy]");if(i){const r=i.textContent;i.textContent="已複製",setTimeout(()=>i.textContent=r,1200)}}catch{}}),(s=t==null?void 0:t.querySelector("[data-xq-csv]"))==null||s.addEventListener("click",()=>{var o;const i=(o=t.querySelector(".xq-panel"))==null?void 0:o.getAttribute("data-strategy-id"),r=e.strategies.find(p=>p.id===i);if(!r)return;const n=ot(r);if(!n){alert("此策略今日無命中列可匯出");return}dt(`${r.id}-hits.csv`,"\uFEFF"+n,"text/csv;charset=utf-8")})}async function pt(t="#xq-root"){try{const e=await rt();return ct(t,e),{ok:!0,data:e}}catch(e){const a=document.querySelector(t);return a&&(a.innerHTML=`<div class="xq-empty"><p>無法載入策略選股（${c(e.message)}）。請確認已執行 <code>npm run strategies</code>。</p></div>`),{ok:!1,error:e}}}const ut="./data/latest.json";function x(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function k(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function C(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString("zh-TW",{minimumFractionDigits:e,maximumFractionDigits:e})}function _(t,e){if(t==null||Number.isNaN(t))return"—";const a=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${C(t,a)}`}function mt(t){try{return new Date(t).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+"（台北）"}catch{return t}}function Y(t){const e=t.aboveSma20?`<span class="badge sma-on">${l("sma20","SMA20↑")}</span>`:`<span class="badge sma-off">${l("sma20","SMA20↓")}</span>`,a=t.aboveSma50?`<span class="badge sma-on">${l("sma50","SMA50↑")}</span>`:`<span class="badge sma-off">${l("sma50","SMA50↓")}</span>`;return e+a}function X(t){return t!=null&&t.length?t.map(e=>{const a=String(e);return a==="A"?`<span class="badge screen">${l("screenA","A")}</span>`:a==="B"?`<span class="badge screen">${l("screenB","B")}</span>`:a==="C"?`<span class="badge screen">${l("screenC","C")}</span>`:a==="observe"?'<span class="badge screen">觀察</span>':`<span class="badge screen">${c(a)}</span>`}).join(""):""}function vt(t){var s,i,r,n,o;const e=[],a=(p,u,g)=>{if(!g)return;const m=g.incomplete,h=g.value!=null?C(g.value,2):m?"資料不全":"—",v=g.dayPct!=null?`<div class="pct ${x(g.dayPct)}">${k(g.dayPct)}</div>`:"",f=g.session==="intraday"?` · ${l("intraday","盤中")}`:"";e.push(`
      <div class="index-chip ${m?"incomplete":""}">
        <div class="label">${u}${f}</div>
        <div class="value">${h}</div>
        ${v}
      </div>
    `)};if(a("tw",l("taiex",((s=t.tw)==null?void 0:s.name)||"台灣加權 TAIEX"),t.tw),a("otc",l("otc",((i=t.otc)==null?void 0:i.name)||"櫃買"),t.otc),a("spx",l("spx",((r=t.spx)==null?void 0:r.name)||"S&P 500"),t.spx),a("nasdaq",l("nasdaq",((n=t.nasdaq)==null?void 0:n.name)||"Nasdaq"),t.nasdaq),a("sox",l("sox",((o=t.sox)==null?void 0:o.name)||"SOX"),t.sox),t.usdTwd){const p=t.usdTwd,u=p.taipeiClose??p.yahoo;e.push(`
      <div class="index-chip">
        <div class="label">${l("usdtwd","USD/TWD")}</div>
        <div class="value">${C(u,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          台北收 ${p.taipeiClose!=null?C(p.taipeiClose,3):"—"}
          · Yahoo ${p.yahoo!=null?C(p.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${e.join("")}</div>`}function ht(t,e){const a=t.market==="TW"?l("twStock","台股"):t.market==="US"?l("usStock","美股"):c(t.market||""),s=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${l("rs","RS vs 指數")}</div><div class="m-val ${x(t.rsVsIndexPp)}">${k(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">${l("priorClose","前收漲幅")}</div><div class="m-val ${x(t.priorClosePct)}">${k(t.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${l("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${e}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${l("ticker",t.ticker)}</div>
          <div class="name">${c(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${_(t.price,t.currency)}</div>
          <div class="day-pct ${x(t.dayPct)}">${k(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${a}</span>
        ${X(t.screens)}
        ${Y(t)}
      </div>
      <div class="metrics">
        ${s}
        <div class="metric"><div class="m-label">${l("pct5d","5 日")}</div><div class="m-val ${x(t.pct5d)}">${k(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${l("pct1m","約 1 月")}</div><div class="m-val ${x(t.pct1m)}">${k(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${l("volRatio","量比")}</div><div class="m-val">${t.volRatio!=null?C(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business?`<p class="card-text"><strong>本業</strong>　${c(t.business)}</p>`:""}
      ${t.why?`<p class="card-text"><strong>理由</strong>　${c(t.why)}</p>`:""}
      ${t.risk?`<p class="card-text risk"><strong>風險</strong>　${fe(t.risk)}</p>`:""}
      <div data-ticker-comments="${c(t.ticker)}" data-market="${c(t.market==="TW"||String(t.ticker).endsWith(".TW")?"TW":"US")}"></div>
    </article>
  `}function fe(t){let e=c(t);return e=e.replace(/漲停/g,l("limitUp","漲停")),e=e.replace(/動能/g,l("momentum","動能")),e}function ft(t){return t.map(e=>{const a=e.rsVsIndexPp??e.priorClosePct,s=e.rsVsIndexPp!=null?k(e.rsVsIndexPp):e.priorClosePct!=null?k(e.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${c(e.ticker)}</span></td>
        <td class="name-cell">${c(e.name||"")}</td>
        <td class="num">${_(e.price,e.currency)}</td>
        <td class="num ${x(e.dayPct)}">${k(e.dayPct)}</td>
        <td class="num ${x(a)}">${s}</td>
        <td class="num ${x(e.pct5d)}">${k(e.pct5d)}</td>
        <td class="num ${x(e.pct1m)}">${k(e.pct1m)}</td>
        <td class="num">${e.volRatio!=null?C(e.volRatio,2)+"×":"—"}</td>
        <td>${Y(e)}</td>
        <td>${X(e.screens)}</td>
        <td class="why-cell">${c(e.why||"")}</td>
      </tr>`}).join("")}function gt(t){return t.map(e=>{const a=e.rsVsIndexPp!=null?`<span class="${x(e.rsVsIndexPp)}">${l("rs","RS")} ${k(e.rsVsIndexPp)}</span>`:e.priorClosePct!=null?`<span class="${x(e.priorClosePct)}">${l("priorClose","前收")} ${k(e.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(e.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${c(e.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${_(e.price,e.currency)}</div>
            <div class="${x(e.dayPct)}" style="font-family:var(--mono);font-weight:600">${k(e.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${a}
          <span class="${x(e.pct5d)}">${l("pct5d","5d")} ${k(e.pct5d)}</span>
          <span class="${x(e.pct1m)}">${l("pct1m","1m")} ${k(e.pct1m)}</span>
          <span>${l("volRatio","量比")} ${e.volRatio!=null?C(e.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${Y(e)}${X(e.screens)}</div>
        ${e.why?`<p class="lc-why">${c(e.why)}</p>`:""}
        ${e.risk&&e.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">風險：${fe(e.risk)}</p>`:""}
        <div data-ticker-comments="${c(e.ticker)}" data-market="${c(String(e.ticker).endsWith(".TW")||e.market==="TW"?"TW":"US")}"></div>
      </div>`}).join("")}function re(t,e){return e!=null&&e.length?`
    <div class="panel ${t==="us"?"active":""}" id="panel-${t}" role="tabpanel">
      <div class="table-wrap">
        <table class="stock-table">
          <thead>
            <tr>
              <th>${l("ticker","代碼")}</th>
              <th>名稱</th>
              <th>價格</th>
              <th>${l("dayPct","日漲跌")}</th>
              <th>${l("rs","RS")}／${l("priorClose","前收")}</th>
              <th>${l("pct5d","5 日")}</th>
              <th>${l("pct1m","約 1 月")}</th>
              <th>${l("volRatio","量比")}</th>
              <th>均線</th>
              <th>${l("screening","篩選")}</th>
              <th>理由</th>
            </tr>
          </thead>
          <tbody>${ft(e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${gt(e)}</div>
    </div>
  `:""}function bt(t){if(!t)return"";const e=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${l("adr","ADR")} ${l("parity","平價")}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${l("usStock","美股")} ${l("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${_(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${l("adsRatio","換股比")}</span>　<strong>${c(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>${l("parity","隱含價")}</span>　<strong>${t.impliedUsdTaipeiFx!=null?C(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${l("premium","溢價")}</span>　<strong class="${x(e)}">${k(e)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${l("twStock","台股")}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${_(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${c(t.note)}</p>`:""}
      </div>
    </section>
  `}function $t(t){if(!t)return"";const e={A:"screenA",B:"screenB",C:"screenC"},a=Object.keys(t).map(s=>{const i=e[s]||"screening";return`<li><span class="screen-key">${l(i,s)}</span><span>${c(t[s])}</span></li>`}).join("");return`
    <section class="help-card" id="help-method">
      <h3 class="help-card-title">${l("screening","每日篩選條件")}</h3>
      <p class="help-card-lead">「今日」名單依公開行情做規則篩選；條件寫死在資料管線，不是盤感喊單。</p>
      <ul class="method-list help-method-list">${a}</ul>
    </section>
  `}function yt(t){return`
    <div class="help-doc">
      <header class="view-header help-hero">
        <p class="help-kicker">DOCUMENTATION</p>
        <h2 class="view-title">說明與方法論</h2>
        <p class="view-lead">本站揭露選股規則、資料來源與紙上模擬假設。內容可驗證、可重跑；不是投顧服務。</p>
      </header>

      <nav class="help-toc" aria-label="說明目錄">
        <a href="#help-about">關於本站</a>
        <a href="#help-data">資料來源</a>
        <a href="#help-method">每日篩選</a>
        <a href="#help-strategies">策略選股</a>
        <a href="#help-paper">紙上模擬</a>
        <a href="#glossary">名詞辭典</a>
        <a href="#help-legal">免責</a>
      </nav>

      <section class="help-card" id="help-about">
        <h3 class="help-card-title">關於本站</h3>
        <div class="help-prose">
          <p>「每日數學選股」彙整美股與台股的公開行情篩選結果、XQ 風格策略條件命中、以及自 <strong>2026-09-15</strong> 起累計的紙上模擬帳本。目標是把規則講清楚，讓任何人都能用同一份 JSON 重跑。</p>
          <ul class="help-bullets">
            <li><strong>今日精選</strong>：依動能／相對強度／均線／量比等條件產生候選。</li>
            <li><strong>策略選股</strong>：多組邏輯條件（價量／籌碼／財務／大師），缺資料就標不足，不捏造財報。</li>
            <li><strong>模擬</strong>：兩本帳（台幣／美元）自站上線日起滾存；訊號以最新價<strong>立即記入</strong>。</li>
            <li><strong>社群</strong>：公開留言摘要與站內討論，僅供氣氛參考。</li>
          </ul>
        </div>
      </section>

      <section class="help-card" id="help-data">
        <h3 class="help-card-title">資料來源</h3>
        <div class="help-prose">
          <p>行情與基本面以公開來源為主；站內靜態檔可直接下載核對。</p>
          <dl class="help-dl">
            <div><dt>行情／OHLCV</dt><dd>Yahoo Finance 公開圖表介面（可能落後證交所半日）。</dd></div>
            <div><dt>台股估值／法人</dt><dd>臺灣證券交易所、櫃買中心 OpenAPI（本益比、淨值比、三大法人等）。</dd></div>
            <div><dt>季報／年報</dt><dd>公開資訊觀測站（MOPS）彙總表與證交所／櫃買綜合損益、資產負債 open data。</dd></div>
            <div><dt>站內產物</dt><dd><code>latest.json</code>、<code>strategy-screener.json</code>、<code>paper-portfolio.json</code>、<code>social-digest.json</code>。</dd></div>
          </dl>
        </div>
      </section>

      ${$t(t==null?void 0:t.method)}

      <section class="help-card" id="help-strategies">
        <h3 class="help-card-title">策略選股</h3>
        <div class="help-prose">
          <p>策略頁以條件清單與命中表呈現。財務／大師策略在缺 PE、ROE、毛利率等欄位時會略過該檔，不會填假數字。結果<strong>不宣稱</strong>與任何商業軟體籌碼庫一致。</p>
          <p class="help-note">詳見「策略」分頁；輸出檔為 <code>strategy-screener.json</code>。</p>
        </div>
      </section>

      <section class="help-card" id="help-paper">
        <h3 class="help-card-title">紙上模擬（累計帳）</h3>
        <div class="help-prose">
          <p>模擬帳自 <strong>2026-09-15</strong> 開倉起<strong>連續累計</strong>，不會每日重置現金或持股。同一份 <code>latest.json</code> 的 <code>asOf</code> 只處理一次（冪等）。</p>
          <ul class="help-bullets">
            <li><strong>立即成交：</strong>買／賣訊號以當日名單的 <code>price</code> 立刻記入帳本——「買了就當作買了」，沒有掛單等待或不成交的設定。</li>
            <li><strong>兩本帳：</strong>台股本金 NT$3,000,000；美股本金 US$100,000。不做匯率混算。</li>
            <li><strong>績效：</strong>總損益＝目前權益 − 起始本金；週／月／季／年視窗若歷史不足則標「成立以來」。</li>
          </ul>
          <p class="help-note">完整買賣規則見「模擬」分頁。這不是真實券商成交，也不保證未來報酬。</p>
        </div>
      </section>
    </div>
  `}function kt(){return'<div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>'}function St(){return`
    <section class="section" id="danmaku">
      <h2 class="section-title">${l("danmaku","全站彈幕")}</h2>
      <p class="view-lead">短訊飛過全站；發言集中在這裡，今日頁面比較乾淨。</p>
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
  `}function wt(){return`
    <section class="section" id="social-digest">
      <h2 class="section-title">${l("socialDigest","網友參考")}</h2>
      <p class="view-lead">美股看 ${l("reddit","Reddit")}／${l("futu","富途")}；台股看 ${l("ptt","PTT")}／${l("dcard","Dcard")}／${l("threads","Threads")}。抓不到會寫 blocker，不捏造。</p>
      <div id="ss-social-digest" aria-label="今日社交摘要"></div>
    </section>
  `}function xt(){return`
    <section class="section" id="giscus">
      <div id="ss-giscus" class="ss-giscus-section" aria-label="全站討論">
        <h2 class="section-title">全站討論（Giscus）</h2>
        <p class="ss-giscus-hint">
          <strong>備援</strong>：需 GitHub 登入。主要匿名${l("danmaku","彈幕")}／${l("comments","留言板")}請接 Supabase。
        </p>
        <div class="ss-giscus-host"></div>
      </div>
    </section>
  `}const At=[{id:"today",label:"今日",hash:"today"},{id:"strategies",label:"策略",hash:"strategies"},{id:"paper",label:"模擬",hash:"paper"},{id:"social",label:"社群",hash:"social"},{id:"help",label:"說明",hash:"help"}],ge={today:"today",strategies:"strategies",paper:"paper",social:"social",help:"help",glossary:"help",danmaku:"social","social-digest":"social",giscus:"social",method:"help"},Tt={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',social:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.5 3.1 6L5 21l4.3-1.4c.9.3 1.8.4 2.7.4 5 0 9-3.6 9-8s-4-8-9-8zm-1 5h2v5h-2V8zm0 6h2v2h-2v-2z"/></svg>',help:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 15a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1.6-5.35c-.55.35-.85.6-.95 1.1l-.1.75h-1.5l.12-.95c.15-.95.7-1.5 1.4-1.95.55-.35.9-.6.9-1.15 0-.55-.45-.95-1.15-.95-.75 0-1.2.4-1.35 1.05l-1.45-.35C9.75 8.2 10.7 7.2 12.2 7.2c1.65 0 2.85 1 2.85 2.4 0 .85-.45 1.5-1.45 2.05z"/></svg>'};function ce(){const t=(location.hash||"").replace(/^#/,"").split(/[/?]/)[0].toLowerCase();return ge[t]||"today"}function oe(t){return At.map(e=>{const a=Tt[e.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${e.id}"
        data-variant="${t}"
        aria-label="${e.label}"
        aria-current="false">
        <span class="nav-icon">${a}</span>
        <span class="nav-label">${e.label}</span>
      </button>`}).join("")}function Pt(t,e){const a=t.top5||[],s=t.us||[],i=t.tw||[],r=c((t.disclaimer||"本站內容非投資建議。").replace(/^本站內容為依公開行情的數學篩選候選，不是投資建議，亦不保證獲利。$/,"本站只是用公開行情算出「相對有機會觀察的名單」，不會保證賺錢。"));return`
    ${kt()}

    <header class="site-chrome">
      <div class="chrome-brand">
        <div class="brand-mark" aria-hidden="true"></div>
        <div class="brand-text">
          <h1>${l("screening","每日數學選股")}</h1>
          <p class="brand-meta">資料 ${mt(t.asOf)}</p>
        </div>
      </div>
      <details class="disclaimer-fold">
        <summary>${l("notAdvice","非投資建議")} · 紅漲綠跌</summary>
        <p>${r}${t.timezoneNote?` · ${c(t.timezoneNote)}`:""}</p>
      </details>
    </header>

    <nav class="nav-desktop" aria-label="主要導覽">
      ${oe("desktop")}
    </nav>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header">
          <h2 class="view-title">今日精選</h2>
          <p class="view-lead">Top 5、美／台清單與 ADR 平價 — 一天要看的數學候選。</p>
        </header>
        <p class="index-caption">${l("index","指數")}快覽</p>
        ${vt(t.indices||{})}
        <section class="section">
          <h2 class="section-title">今日 Top 5</h2>
          <div class="top5-grid">
            ${a.map((n,o)=>ht(n,o+1)).join("")||'<div class="empty-state">今日尚無 Top 5</div>'}
          </div>
        </section>
        <section class="section">
          <h2 class="section-title">選股清單</h2>
          <div class="tabs" role="tablist">
            <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${l("usStock","美股")}（${s.length}）</button>
            <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${l("twStock","台股")}（${i.length}）</button>
          </div>
          ${re("us",s)}
          ${re("tw",i)}
        </section>
        ${bt(t.parity)}
        <p class="intra-jump">個股留言在卡片下方 · <button type="button" class="text-jump" data-jump="social">去社群發彈幕</button></p>
      </div>

      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${lt()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${Pe(e)}
      </div>

      <div class="view" id="view-social" data-view="social" hidden>
        <span id="social" class="view-anchor" tabindex="-1"></span>
        <header class="view-header">
          <h2 class="view-title">社群</h2>
          <p class="view-lead">彈幕、網友摘要與全站討論 — 氣氛參考，不是訊號。</p>
        </header>
        ${St()}
        ${wt()}
        ${xt()}
      </div>

      <div class="view" id="view-help" data-view="help" hidden>
        <span id="help" class="view-anchor" tabindex="-1"></span>
        ${yt(t)}
        ${be()}
        <section class="help-card help-legal" id="help-legal">
          <h3 class="help-card-title">免責聲明</h3>
          <p class="disclaimer">${r}</p>
          <p class="tz-note">紅漲綠跌為台灣市場慣例 · 紙上模擬非真實券商成交 · 社交摘要僅供討論參考 · 投資有風險，請自行判斷</p>
        </section>
      </div>
    </main>

    <nav class="nav-bottom" aria-label="主要導覽">
      ${oe("mobile")}
    </nav>

    <p class="site-footer">紅漲綠跌 · 點藍字看解釋 · 資料來自 latest.json／strategy-screener.json／paper-portfolio.json／social-digest.json</p>
  `}function qt(t,e){t.querySelectorAll(".nav-item").forEach(a=>{const s=a.dataset.nav===e;a.classList.toggle("is-active",s),a.setAttribute("aria-current",s?"page":"false")})}function Lt(t,e,{updateHash:a=!0,scrollTop:s=!0}={}){const i=ge[e]||"today";if(t.querySelectorAll(".view").forEach(r=>{const n=r.dataset.view===i;r.hidden=!n,r.classList.toggle("is-active",n)}),qt(t,i),a){const r=`#${i}`;location.hash!==r&&history.replaceState(null,"",r)}return s&&window.scrollTo(0,0),i}function Ct(t){const e=(a,s)=>Lt(t,a,s);return t.querySelectorAll(".nav-item").forEach(a=>{a.addEventListener("click",()=>e(a.dataset.nav))}),t.querySelectorAll("[data-jump]").forEach(a=>{a.addEventListener("click",()=>e(a.dataset.jump))}),window.addEventListener("hashchange",()=>{e(ce(),{updateHash:!1})}),e(ce(),{updateHash:!0,scrollTop:!1}),{go:e}}function Nt(t){const e=t.querySelectorAll(".tab-btn");e.forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.tab;e.forEach(i=>{const r=i.dataset.tab===s;i.classList.toggle("active",r),i.setAttribute("aria-selected",r?"true":"false")}),t.querySelectorAll(".panel").forEach(i=>{i.classList.toggle("active",i.id===`panel-${s}`)})})})}async function It(){const t=document.getElementById("app");try{const e=await fetch(ut);if(!e.ok)throw new Error(`HTTP ${e.status}`);const a=await e.json(),s=await Le();t.innerHTML=Pt(a,s);const i=Ct(t);Nt(t),qe(t),$e(t,{beforeScroll(){i.go("help",{updateHash:!0,scrollTop:!1})}}),await pt("#xq-root");let r=null;const n=await Ye("#ss-social-digest",R.socialDigestUrl);if(n!=null&&n.ok)r=n.data;else try{r=await ve(R.socialDigestUrl)}catch{r=null}Ee({config:R}),Ge(t,{config:R,digest:r}),Ze("#ss-giscus",{config:R})}catch(e){t.innerHTML=`<div class="error">無法載入資料（${c(e.message)}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。</div>`}}It();
