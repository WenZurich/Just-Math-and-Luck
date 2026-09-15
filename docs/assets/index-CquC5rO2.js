(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=a(s);fetch(s.href,l)}})();const j={},R={supabaseUrl:typeof import.meta<"u"&&(j==null?void 0:j.VITE_SUPABASE_URL)||"https://whlpzhceivahkuanmmui.supabase.co",supabaseAnonKey:typeof import.meta<"u"&&(j==null?void 0:j.VITE_SUPABASE_ANON_KEY)||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",giscus:{enabled:!0,repo:"WenZurich/Just-Math-and-Luck-",repoId:"R_kgDOUcO78Q",category:"General",categoryId:"DIC_kwDOUcO78c4DFrWU",mapping:"specific",theme:"dark",lang:"zh-TW",perTicker:!1},socialDigestUrl:"./data/social-digest.json",latestUrl:"./data/latest.json",danmakuMaxLen:80,commentMaxLen:500,pollIntervalMs:8e3,postCooldownMs:4e3};globalThis.STOCK_SOCIAL_CONFIG=Object.assign(globalThis.STOCK_SOCIAL_CONFIG||{},R);const mt={dayPct:{title:"日漲跌",plain:"就是「今天這支股票的價錢，比起昨天收盤時，漲了還是跌了多少」。用百分比表示，比較好跟其他股票比。",example:"昨天收盤 100 元，今天收盤 103 元，日漲跌就是 +3%。像考試分數從 100 變成 103，多了 3 分。"},pct5d:{title:"5 日漲跌",plain:"看最近大約一週（5 個交易日）這支股票總共漲了或跌了多少，不是只看今天。",example:"禮拜一 100 元，到這禮拜五變成 110 元，5 日大約就是 +10%。像一週零用錢從 100 變成 110。"},pct1m:{title:"約 1 月漲跌",plain:"看最近大約一個月（常算 21 個交易日）這支股票漲跌多少，用來看比較長一點的趨勢。",example:"一個月前 200 元，現在 220 元，約 1 月就是 +10%。像身高一個月長高一點，要看整段變化。"},rs:{title:"相對強度（RS）",plain:"把「這支股票今天的漲跌」跟「整個市場大盤今天的漲跌」相減。正的表示它比大盤更強（人家跌它比較不跌，或人家漲它漲更多）。",example:"大盤今天 −1%，某股票 +2%，RS 大約是 +3 個百分點。像全班平均考 60 分，你考 80 分，你比班級平均強。"},priorClose:{title:"前收漲幅",plain:"用「上一個完整交易日收盤價」算出來的漲跌幅度。美股若還在盤中，有時會另外標前一天收盤的表現。",example:"週一收盤比週五收盤漲了 13%，就說前收漲幅約 +13%。像昨天整場比賽的最終比分，不是今天還沒打完的分數。"},volRatio:{title:"量比",plain:"今天成交的「張數／股數」是不是比平常多。算法大概是：今天成交量 ÷ 最近約 20 天平均成交量。數字越大，表示今天很多人在買賣。",example:"平常每天成交 100 萬股，今天 300 萬股，量比約 3 倍。像平常教室很安靜，今天突然擠滿人在討論。"},sma20:{title:"SMA20（20 日均線）",plain:"把最近 20 個交易日的收盤價加起來除以 20，得到一條「平滑後的平均價」。股價在均線上面，常被看成最近偏強；在下面常被看成偏弱。",example:"最近 20 天平均價 50 元，今天股價 55 元，就是站上 SMA20。像你的體重比最近 20 天平均還高一點。"},sma50:{title:"SMA50（50 日均線）",plain:"跟 SMA20 一樣是平均價，但用更長的 50 個交易日，看比較中期的方向。",example:"50 天平均 100 元，現在股價 90 元，就是在 SMA50 下面。像月考平均，比段考平均更能看出一陣子的狀況。"},screenA:{title:"篩選 A（動能／相對強度）",plain:"用數學檢查：這支股票最近是不是漲得比大盤好、短中期動能如何、有沒有站上均線。通過的才比較容易被挑進名單。",example:"某股今天比大盤強很多，又站上 SMA20／SMA50，就可能通過篩選 A。像短跑又比同學快、成績又在平均之上。"},screenB:{title:"篩選 B（量能）",plain:"檢查今天成交量是不是明顯比平常大（量比偏高）。量很大有時代表很多人注意，但也可能波動更大。",example:"量比 14 倍表示今天成交大約是平常的 14 倍。像學校平時很少人買某樣零食，今天突然大排長龍。"},screenC:{title:"篩選 C（估值）",plain:"想用本益比之類「貴不貴」的數字來幫忙選股。如果當天抓不到可靠資料，這個篩選就會跳過，避免亂填數字。",example:"本益比像「用幾年賺的錢才回本」的粗略尺。沒有尺就先不量，不要瞎猜。"},taiex:{title:"台灣加權（TAIEX）",plain:"把台灣上市很多股票的表現加總做成一個大分數，用來代表「台股整體」今天大概漲還是跌。",example:"加權今天 −0.77%，表示整體台股平均大概跌了一點點。像全校平均分數今天比昨天低一點。"},otc:{title:"櫃買",plain:"台灣「上櫃」公司的市場（比較多中小型公司）。櫃買指數用來看這群股票整體漲跌。",example:"上市像大學部大隊，櫃買像另一個年級隊。兩邊可以分開看今天誰比較強。"},spx:{title:"S&P 500",plain:"美國 500 家大型公司組成的指數，常被拿來代表「美股大盤」。",example:"S&P 500 跌 0.5%，常被說成美股大盤今天偏弱。像美國大型公司班級的平均分數。"},nasdaq:{title:"Nasdaq（那斯達克）",plain:"美國一個重要股市指數，裡面很多科技公司，常被用來觀察科技股整體氣氛。",example:"Nasdaq 大跌時，很多科技股也可能一起抖。像科技社社團活動特別熱絡或特別冷清的溫度計。"},sox:{title:"SOX（費半）",plain:"美國半導體（做晶片）公司的指數。半導體好不好，常常影響台積電供應鏈的氣氛。",example:"SOX 大跌，常常代表晶片相關股票今天整體承壓。像「晶片班」今天考試普遍不理想。"},usdtwd:{title:"USD/TWD（美金兌台幣）",plain:"1 美元可以換多少台幣。數字變大，常表示台幣變弱（同樣 1 美元換到更多台幣）；數字變小則相反。",example:"匯率 32，表示 1 美元約換 32 元台幣。你要買 10 美元零食，大約要付 320 元台幣。"},adr:{title:"ADR",plain:"美國存託憑證：讓投資人在美國市場買賣「外國公司」的股票憑證。例如台積電在美國有 TSM 這個 ADR。",example:"你在美國超市買「台灣零食的美國包裝版」。東西本質相近，但包裝市場不同，價錢也可能不太一樣。"},parity:{title:"平價／隱含價",plain:"用台股價格、換股比例和匯率，算出「如果完全公平換算，ADR 大概該是多少美元」。拿來跟實際 ADR 價比較。",example:"5 股台積電 ÷ 匯率，算出 ADR 理論價約 374 美元。像用匯率把台幣玩具價換算成美元標價。"},premium:{title:"溢價",plain:"實際市價比「換算後的理論價」還貴多少。正的溢價表示買 ADR 比照公式換算更貴；負的則比較便宜（折價）。",example:"理論 374 美元，市價 416 美元，溢價大約一成多。像同樣便當，車站賣得比學校社辦貴。"},adsRatio:{title:"換股比（ADS 比例）",plain:"一張 ADR 對應幾股本地普通股。台積電常見是 1 股 ADR＝5 股台灣普通股，但要以官方公告為準。",example:"比例 5:1 表示 1 個美國存託憑證背後約有 5 股台股。像 1 盒積木裡固定裝 5 小塊。"},limitUp:{title:"漲停",plain:"台股對一天最多能漲多少有限制（一般股票常見約 10%）。碰到上限就叫漲停，常常買不到或很難成交。",example:"股票從 100 元漲到約 110 元就可能漲停。像遊戲一天經驗值有上限，滿了就不能再加。"},momentum:{title:"動能",plain:"看價格最近是不是繼續往同一方向跑（例如連續幾天偏強）。這是數學觀察，不是保證明天還會這樣。",example:"球正在往前滾而且愈滾愈快，就說動能強。但滾到一半也可能停下或轉向。"},ticker:{title:"股票代碼（Ticker）",plain:"每支股票的簡短代號，方便電腦與市場辨認。美股多用英文字母，台股多用數字。",example:"AAPL 是蘋果，2330 是台積電。像學校學號，用來點名不會搞混。"},index:{title:"指數",plain:"把很多股票包成一個「總成績單」，用來代表某一市場或產業整體表現。",example:"加權指數、S&P 500 都是指數。像全班平均分數，不是某一個同學的分數。"},screening:{title:"數學選股／篩選",plain:"用事先講好的計算規則（漲跌、跟大盤比、均線、成交量等）自動挑出通過條件的股票，而不是靠感覺。",example:"規則：要比大盤強、量比要高。通過的進名單。像用尺量身高，過線的才能進籃球隊候補。"},notAdvice:{title:"不是投資建議",plain:"這個網站只是把公開行情算出來給你看。它不會保證賺錢，也不能代替你自己做決定。",example:"像天氣預報說可能下雨，你仍要自己決定要不要帶傘。看完數字也不等於一定要買。"},intraday:{title:"盤中",plain:"股市還在交易、價格還會一直變動的時候。跟「收盤」（今天交易結束後的最終價）不一樣。",example:"考試還沒結束，分數還可能改；收盤像交卷後的最終分數。"},twStock:{title:"台股",plain:"在台灣證券市場交易的股票，價錢多用新台幣計價。",example:"2330 台積電、2308 台達電都是台股。"},usStock:{title:"美股",plain:"在美國市場交易的股票，價錢多用美元計價。",example:"AAPL、NVDA、CRWD 都是美股。"},paperTrade:{title:"模擬交易",plain:"累積模擬帳戶：自 2026-09-15 起用 latest.json 標的價假設下單即成交，帳本不會每日歸零。非真實券商委託。",example:"像用假錢玩大富翁：規則跟算分是真的，但口袋裡的零用錢沒有真的拿去買股票。"},principal:{title:"本金",plain:"該市場模擬帳的起始資金。台股帳 NT$3,000,000；美股帳 US$100,000（兩帳獨立，不相加）。",example:"你帶 100 元去福利社，這 100 元就是本金。後來錢包變 90 或 120，都還是從這筆本金算起。"},position:{title:"部位",plain:"現在帳本裡「持有多少股票」。部位市值＝股數 × 現在價格。再加上現金，就是這本帳的權益。",example:"買了 1000 股、一股市價 50 元，部位大約 5 萬元。像背包裡現在裝了幾包零食、值多少錢。"},stopLoss:{title:"停損",plain:"事先講好：如果這筆模擬持有虧到某個百分比，就全部賣掉，避免虧更多。本站規則是未實現大約 −3%。",example:"遊戲裡血量低於 3 格就先撤退，不要硬打到歸零。這是保護本金的數學規則，不是保證以後不會虧。"},takeProfit:{title:"停利",plain:"事先講好：如果這筆模擬持有賺到某個百分比，就先賣一部分（本站大約 +12% 賣一半），把部分獲利放進現金。",example:"考試進步很多時，先把一部分分數「存起來」。不是說後面一定會跌，只是規則到點就減碼。"},unrealizedPnl:{title:"未實現損益",plain:"股票還沒賣掉時，用現在市價跟平均成本比，算出「帳面上」賺或虧多少。還沒賣掉就不算真正進口袋。",example:"你的遊戲卡市價變貴了，但你還沒賣掉，只是帳面變有錢。真的換成現金才算已實現。"},realizedPnl:{title:"已實現損益",plain:"真的（在模擬裡）賣掉以後，成交價減平均成本，已經記入現金的賺或虧。",example:"把遊戲卡賣掉拿到錢，這筆差額才算已實現。像把零食賣掉，錢已經回到錢包。"},periodPerf:{title:"週／月／季／年績效",plain:"看權益曲線最近一週、約一個月、約一季、約一年漲跌多少。若模擬開張還沒那麼久，就改看「從成立日到現在」。",example:"帳本才成立 1 天，還沒有「一年成績」，就寫成立以來。像學期才開學，先看開學到今天，不要假裝有全年成績。"},sinceInception:{title:"成立以來",plain:"從這本模擬帳開始的那一天算到現在。當歷史不夠一週／月／季／年時，就用這個標籤，避免假裝有更長的成績。",example:"新開的存摺沒有「去年」可以比，就說開戶以來。成績單太短時要老實講。"},danmaku:{title:"彈幕",plain:"像影片上飛過去的短句子。大家可以打很短的話，從螢幕右邊飛到左邊，讓氣氛熱鬧一點。",example:"有人打「今天量比好高！」就會變成一行字飛過畫面。跟下面慢慢看的留言板不一樣，彈幕偏短、偏即時。"},comments:{title:"留言板",plain:"掛在某一支股票卡片下面的討論區。大家可以針對這支股票慢慢寫想法，字數比彈幕多一點。",example:"在 CRWD 卡片下寫「量很大但要注意風險」，之後別人還看得到。像便利貼貼在該股票旁邊。"},reddit:{title:"Reddit",plain:"一個很大的英文網路論壇，裡面有很多討論區（subreddit）。本站只讀公開搜尋結果當「氣氛參考」，不會假裝有留言。",example:"r/stocks、r/wallstreetbets 常有人討論美股。如果網站抓不到（例如被 403 擋住），會老實寫 blocker，而不是編造。"},futu:{title:"富途牛牛",plain:"一款股票 App／平台（也叫 Moomoo）。本站目前多半只能拿到公開新聞搜尋，個股社群評論通常要登入，所以會標明「非社群評論」。",example:"看到「相關公開新聞」區塊，那是新聞標題，不是牛牛圈裡網友的真實留言。"},ptt:{title:"PTT",plain:"台灣很有名的論壇（批踢踢）。本站會搜尋 Stock 看板的公開文章標題當參考。",example:"在 Stock 板搜尋「2330」可能看到營收或標的文。看得到標題與連結，不代表我們同意裡面的看法。"},dcard:{title:"Dcard",plain:"台灣年輕人常用的匿名論壇 App／網站。本站試著搜尋股票相關討論；若被反爬擋住，會老實寫 blocker。",example:"有時 API 回 403，網站就會說「抓不到」，而不是自己編假留言。"},threads:{title:"Threads",plain:"Meta 的短文社群（跟 Instagram 有關）。沒有穩定的公開匿名搜尋 API 時，本站不會假裝有貼文。",example:"如果摘要寫「需登入／SPA」，代表公開抓取失敗，請改看其他來源或本站留言。"},pe:{title:"本益比（PE）",plain:"股價 ÷ 每股盈餘。數字愈小，用「現在賺的錢」來看，股價相對愈不貴（但還要看成長與風險）。沒抓到真實數字就不填。",example:"股價 100 元、一年每股賺 10 元，本益比約 10。像用 10 年賺的錢才回本的粗略尺。"},opMargin:{title:"營益率",plain:"營業利益 ÷ 營收。看「本業做生意」到底賺多少比例，還沒算業外投資。",example:"賣飲料營收 100 元，本業成本後剩 20 元，營益率約 20%。"},grossMargin:{title:"毛利率",plain:"毛利 ÷ 營收。只扣掉進貨／製造成本，還沒扣薪水、租金等營業費用。",example:"進貨 60 元、賣 100 元，毛利 40 元，毛利率 40%。"},foreignInv:{title:"外資",plain:"外國投資機構在台股買賣的總稱。公開資料會公布他們當天買超或賣超多少股。",example:"外資買超 100 萬股，表示外國機構今天淨買進約 100 萬股（≈ 1,000 張）。"},trustInv:{title:"投信",plain:"證券投資信託公司（基金公司）在台股的買賣。常被拿來看「法人」態度。",example:"投信買超代表基金們今天淨買比較多。"},dealerInv:{title:"自營商",plain:"券商用自己的錢買賣股票的部門。三大法人通常指外資＋投信＋自營商。",example:"自營商買超，表示券商自營部門今天淨買。"},maBull:{title:"均線多頭排列",plain:"短均線在長均線上面一層層排好（例如 SMA5>SMA10>SMA20>SMA60），常被看成短中期偏多的技術型態。",example:"像跑步成績：最近 5 天平均比 10 天好、又比 20／60 天好，節奏往上。"},rsi:{title:"RSI",plain:"相對強弱指標，常用 0–100。太高可能短線過熱，太低可能超賣；本站超短線策略看「在 50 以下且往上拐」。",example:"RSI 從 35 升到 42，還在 50 下，像體力表開始回升但還沒過半。"},amplitude:{title:"振幅",plain:"當天最高價與最低價差多少，再除以昨天收盤價。振幅大表示今天價格晃得兇。",example:"昨收 100，今天最高 104、最低 99，振幅約 5%。"},zhang:{title:"張",plain:"台股交易單位：1 張＝1,000 股。看成交量或法人買賣超時，常把「股」換算成「張」比較好讀。",example:"成交 300,000 股＝300 張。本站流動性門檻常寫「>300 張」。"},strategyScreen:{title:"策略選股（邏輯條件）",plain:"像選股軟體一樣：先選一套策略，看清楚每一條條件，再列出今天通過的股票與計算欄位。",example:"選「均線多頭排列」→ 看到 SMA 與量比條件 → 下面出現命中清單。"},xqLike:{title:"XQ／選股軟體風格",plain:"介面模仿常見台股看盤軟體的「策略分類＋條件＋命中數」操作習慣，方便對照；資料來源仍是公開行情，不是對方專有資料庫。",example:"左側點策略、中間看條件、下面看結果——流程很像，數字各自用公開資料算。"},socialDigest:{title:"網友參考（社交摘要）",plain:"把 Reddit、富途等公開來源整理成一天的小摘要給你看氣氛。它不是精準民調，更不是叫你買或賣。",example:"像把走廊上聽到的聊天重點寫在黑板上：有聽到就寫，沒聽到就老实说「今天抓不到」。"}};function r(e,t){const a=mt[e],i=t??(a==null?void 0:a.title)??e;return a?`<a class="term" href="#term-${c(e)}" data-term="${c(e)}">${c(i)}</a>`:c(i)}function c(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Tt(){return`
    <section class="section glossary-section" id="help-glossary">
      <h2 class="section-title" id="glossary">名詞辭典</h2>
      <p class="glossary-intro">點藍字跳轉 · 點標題展開</p>
      <div class="glossary-list" data-glossary-list>${Object.entries(mt).map(([t,a])=>`
      <details class="glossary-item" id="term-${c(t)}">
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
  `}function At(e){const t=e.querySelector("[data-glossary-list]");if(!t)return;const a=window.matchMedia("(min-width: 900px)"),i=()=>{t.querySelectorAll("details.glossary-item").forEach(s=>{a.matches?s.open=!0:s.classList.contains("flash")||(s.open=!1)})};i(),typeof a.addEventListener=="function"?a.addEventListener("change",i):typeof a.addListener=="function"&&a.addListener(i)}function qt(e,t={}){e.querySelectorAll("a.term").forEach(a=>{a.addEventListener("click",i=>{const s=a.getAttribute("data-term");i.preventDefault(),typeof t.beforeScroll=="function"&&t.beforeScroll(s);const l=()=>{const n=document.getElementById(`term-${s}`);n&&(n.tagName==="DETAILS"&&(n.open=!0),n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))};typeof t.beforeScroll=="function"?requestAnimationFrame(()=>requestAnimationFrame(l)):l()})})}const Pt="./data/paper-portfolio.json";function E(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function _(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(t)}%`}function ht(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString("zh-TW",{minimumFractionDigits:t,maximumFractionDigits:t})}function vt(e){return e==="USD"?"US$":e==="TWD"?"NT$":""}function D(e,t){if(e==null||Number.isNaN(e))return"—";const a=t==="TWD"?0:2;return`${vt(t)}${ht(e,a)}`}function W(e,t){if(e==null||Number.isNaN(e))return"—";const a=t==="TWD"&&e>=100?0:2;return`${vt(t)}${ht(e,a)}`}function ft(e){return{"screen-buy":"名單新開倉",add:"持續買進",stop:"停損","take-profit":"停利","momentum-break":"動能轉弱","off-list":"離開名單","limit-up-chase":"漲停追價急殺"}[e]||e||""}function G(e){return e?`
    <div class="paper-win">
      <div class="w-label">${e.sinceInception?r("sinceInception","成立以來"):c(e.label||"")}</div>
      <div class="w-val ${E(e.pct)}">${_(e.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function Lt(e,t){return e.length?e.map(a=>{var i;return`
      <tr>
        <td><span class="ticker">${c(a.ticker)}</span></td>
        <td class="name-cell">${c(a.name||"")}</td>
        <td class="num">${(i=a.qty)==null?void 0:i.toLocaleString("zh-TW")}</td>
        <td class="num">${W(a.price,t)}</td>
        <td><span class="badge reason ${c(a.reason||"")}">${c(ft(a.reason))}</span></td>
        <td class="why-cell">${c(a.reasonText||"")}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">今天還沒有這類成交（模擬）</td></tr>'}function Ct(e,t){return e.length?e.map(a=>{var l;const i=(a.mark-a.avgCost)*a.qty,s=a.avgCost?(a.mark-a.avgCost)/a.avgCost*100:0;return`
      <tr>
        <td><span class="ticker">${c(a.ticker)}</span></td>
        <td class="num">${(l=a.qty)==null?void 0:l.toLocaleString("zh-TW")}</td>
        <td class="num">${W(a.avgCost,t)}</td>
        <td class="num">${W(a.mark,t)}</td>
        <td class="num ${E(i)}">${D(i,t)}</td>
        <td class="num ${E(s)}">${_(s)}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">目前沒有持股</td></tr>'}function Nt(e,t,a){const i=t.currency,s=e==="TW"?`${r("twStock","台股")}帳本（NT$）`:`${r("usStock","美股")}帳本（US$）`,l=D(t.startCash,i),n=(a==null?void 0:a.totalPnl)??t.equity-t.startCash,m=(a==null?void 0:a.totalPnlPct)??(t.startCash?(t.equity-t.startCash)/t.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${s}</h3>
      <p class="paper-start">${r("principal","本金")} ${l}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">現金</div>
          <div class="k-val">${D(t.cash,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${r("position","權益（部位＋現金）")}</div>
          <div class="k-val">${D(t.equity,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總${r("realizedPnl","損益")}</div>
          <div class="k-val ${E(n)}">${D(n,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總損益 ％</div>
          <div class="k-val ${E(m)}">${_(m)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${r("periodPerf","週績效")}</div>
          ${G(a==null?void 0:a.week)}
        </div>
        <div>
          <div class="win-name">${r("periodPerf","月績效")}</div>
          ${G(a==null?void 0:a.month)}
        </div>
        <div>
          <div class="win-name">${r("periodPerf","季績效")}</div>
          ${G(a==null?void 0:a.quarter)}
        </div>
        <div>
          <div class="win-name">${r("periodPerf","年績效")}</div>
          ${G(a==null?void 0:a.year)}
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
            <div style="font-family:var(--mono)">${W(a.price,t)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${c(a.reason||"")}">${c(ft(a.reason))}</span>
        </div>
        ${a.reasonText?`<p class="lc-why">${c(a.reasonText)}</p>`:""}
      </div>`}).join(""):'<div class="list-card empty-card">今天還沒有這類成交（模擬）</div>'}function It(e,t){return e.length?e.map(a=>{var l;const i=(a.mark-a.avgCost)*a.qty,s=a.avgCost?(a.mark-a.avgCost)/a.avgCost*100:0;return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(a.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">股數 ${(l=a.qty)==null?void 0:l.toLocaleString("zh-TW")}</div>
          </div>
          <div style="text-align:right">
            <div class="${E(i)}" style="font-family:var(--mono);font-weight:600">${D(i,t)}</div>
            <div class="${E(s)}" style="font-family:var(--mono)">${_(s)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          <span>成本 ${W(a.avgCost,t)}</span>
          <span>市價 ${W(a.mark,t)}</span>
        </div>
      </div>`}).join(""):'<div class="list-card empty-card">目前沒有持股</div>'}function F(e,t,a){return`
    <div class="paper-table-block">
      <h4>${c(e)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>日期</th>
              <th>${r("ticker","代碼")}</th>
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
      <h4>目前${r("position","部位")}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${r("ticker","代碼")}</th>
              <th>股數</th>
              <th>平均成本</th>
              <th>市價</th>
              <th>${r("unrealizedPnl","未實現損益")} $</th>
              <th>${r("unrealizedPnl","未實現")} ％</th>
            </tr>
          </thead>
          <tbody>${Ct(e,t)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${It(e,t)}</div>
    </div>`}function at(e,t,a,i,s,l){const n=t.currency,m=[...t.trades||[]].sort((h,o)=>h.date<o.date?1:h.date>o.date?-1:0),f=m.filter(h=>h.date===i),d=f.filter(h=>h.side==="BUY"),b=f.filter(h=>h.side==="SELL"),g=m.slice(0,40),S=l;return`
    <div class="paper-panel ${s?"active":""}" id="paper-panel-${e}" role="tabpanel">
      ${Nt(e,t,a)}
      <p class="paper-session-note">${c(i||"—")} · 自 ${c(S)} 累積 · 買進即成交</p>
      ${F(`買 ${i||""}`,d,n)}
      ${F(`賣 ${i||""}`,b,n)}
      ${Rt(t.positions||[],n)}
      ${F("成交（近 40）",g,n)}
    </div>`}function Et(e){var n,m;if(!e||!e.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${r("paperTrade","模擬")}</h2>
        <p class="paper-missing">還沒有模擬帳本檔案。請在專案執行 <code>npm run paper</code>。</p>
      </section>`;const t=e.books.TW,a=e.books.US;let s=(e.asOf||"").slice(0,10);try{s=new Date(e.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const l=e.startDate||(t==null?void 0:t.startDate)||(a==null?void 0:a.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${r("paperTrade","模擬")}</h2>
      <p class="paper-disclaimer" role="note">
        <strong>累積模擬帳戶（自 ${c(l)} 起）</strong>
        · 不會每日歸零 · <strong>買進即成交</strong> · 非真實下單
      </p>
      <details class="paper-rules">
        <summary>規則（各市場獨立帳）</summary>
        <ul>
          <li>${r("twStock","台股")}本金 NT$3,000,000 · 整張成交</li>
          <li>${r("usStock","美股")}本金 US$100,000 · 可買 1 股起</li>
          <li>買：該市場名單·風險1%·停距1.5%·單檔≤8% · <strong>即成交</strong></li>
          <li>賣：${r("stopLoss","停損")}−3% · ${r("takeProfit","停利")}+12%半倉 · 破SMA20且日跌&gt;2% · 離名單虧損 · 漲停隔日−5%</li>
        </ul>
      </details>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${r("twStock","台股")}帳</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${r("usStock","美股")}帳</button>
      </div>
      ${at("TW",t,(n=e.metrics)==null?void 0:n.TW,s,!0,l)}
      ${at("US",a,(m=e.metrics)==null?void 0:m.US,s,!1,l)}
    </section>`}function Ut(e){const t=e.querySelectorAll(".paper-tab-btn");t.forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.paperTab;t.forEach(s=>{const l=s.dataset.paperTab===i;s.classList.toggle("active",l),s.setAttribute("aria-selected",l?"true":"false")}),e.querySelectorAll(".paper-panel").forEach(s=>{s.classList.toggle("active",s.id===`paper-panel-${i}`)})})})}async function jt(){try{const e=await fetch(Pt);return e.ok?await e.json():null}catch{return null}}const st={},Y="聊天後端尚未接上",Dt=[{id:"local",label:"本站留言"},{id:"reddit",label:"Reddit"},{id:"futu",label:"富途"}],Wt=[{id:"local",label:"本站留言"},{id:"ptt",label:"PTT"},{id:"dcard",label:"Dcard"},{id:"threads",label:"Threads"}];function bt(e,t){const a=String(t||"").toUpperCase();return a==="US"||a==="TW"?a:String(e||"").toUpperCase().endsWith(".TW")?"TW":"US"}function Ot(e){return e==="TW"?Wt:Dt}function gt(e=globalThis.STOCK_SOCIAL_CONFIG||{}){const t=typeof import.meta<"u"&&st?st:{},a=String(e.supabaseUrl||t.VITE_SUPABASE_URL||"").trim(),i=String(e.supabaseAnonKey||t.VITE_SUPABASE_ANON_KEY||"").trim();return{url:a,anon:i}}function k(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function $t(e,t){const a={apikey:t,Authorization:`Bearer ${t}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(i,s=50){const l=`${e}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(i)}&order=created_at.asc&limit=${s}`,n=await fetch(l,{headers:a});if(!n.ok)throw new Error(`comments select ${n.status}`);return n.json()},async insert(i){const s=await fetch(`${e}/rest/v1/comments`,{method:"POST",headers:a,body:JSON.stringify(i)});if(!s.ok){const l=await s.text();throw new Error(`comments insert ${s.status}: ${l}`)}return s.json()}}}function Vt(){try{return window.matchMedia("(min-width: 768px)").matches}catch{return!1}}function zt(e,t,a){if(!e||!a)return null;const i=e[t];return Array.isArray(i)&&i.find(s=>String(s.ticker).toUpperCase()===String(a).toUpperCase())||null}function Bt(e,t,{futuMode:a=!1}={}){if(!e)return`<p class="ss-empty">無 ${k(t)}</p>`;const i=[];e.blocker&&i.push(`<p class="ss-digest-blocker">⚠ ${k(e.blocker)}</p>`);const s=e.items||[],l=e.newsRelated||[];if(s.length&&i.push(s.map(n=>{const m=n.url?k(n.url):"#",f=n.score!=null?`<span class="ss-score">▲ ${k(n.score)}</span>`:"",d=n.author?`@${k(n.author)}`:"";return`<article class="ss-digest-item">
            <a href="${m}" target="_blank" rel="noopener noreferrer">${k(n.snippet||n.title||"(無摘要)")}</a>
            <div class="ss-digest-meta">${f} ${d}</div>
          </article>`}).join("")),l.length){const n=a?"新聞／討論線索（非留言）":"相關公開新聞（非社群評論）";i.push(`<p class="ss-digest-sub">${n}</p>`),i.push(l.map(m=>`<article class="ss-digest-item">
            <a href="${m.url?k(m.url):"#"}" target="_blank" rel="noopener noreferrer">${k(m.snippet||"(無標題)")}</a>
          </article>`).join(""))}return Array.isArray(e.manualUrls)&&e.manualUrls.length&&!s.length&&i.push('<p class="ss-digest-sub">手動開啟</p>'+e.manualUrls.slice(0,4).map(n=>`<article class="ss-digest-item"><a href="${k(n)}" target="_blank" rel="noopener noreferrer">${k(n)}</a></article>`).join("")),!s.length&&!l.length&&!e.blocker&&i.push(`<p class="ss-empty">暫無 ${k(t)} 資料</p>`),i.join("")||'<p class="ss-empty">暫無資料</p>'}function Ht(e,t,a={}){if(!e||!t)return{ok:!1};const i=a.config||globalThis.STOCK_SOCIAL_CONFIG||{},s=a.digest||null,l=bt(t,a.market||e.getAttribute("data-market")),n=Ot(l),{url:m,anon:f}=gt(i),d=i.commentMaxLen||500,b=i.postCooldownMs||4e3,g=!!a.bare,S=Vt()?" open":"",h=n.map((y,q)=>`<button type="button" class="ss-src-tab${q===0?" active":""}" data-src="${y.id}" role="tab" aria-selected="${q===0?"true":"false"}">${y.label}</button>`).join(""),o=n.filter(y=>y.id!=="local").map(y=>`<div class="ss-src-panel" data-panel="${y.id}" role="tabpanel" hidden></div>`).join("");e.classList.add("ss-thread"),e.dataset.market=l;const v=`
      <div class="ss-src-tabs" role="tablist" aria-label="${k(t)}">${h}</div>
      <div class="ss-src-panels">
        <div class="ss-src-panel active" data-panel="local" role="tabpanel">
          <div class="ss-thread-status"></div>
          <ul class="ss-thread-list"></ul>
          <form class="ss-thread-form ss-composer">
            <input class="ss-nick" maxlength="24" placeholder="暱稱（可空）" autocomplete="nickname" />
            <textarea class="ss-body" maxlength="${d}" rows="2" placeholder="留言" required></textarea>
            <button type="submit">送出</button>
          </form>
        </div>
        ${o}
      </div>`;e.innerHTML=g?`<div class="ss-thread-bare" data-ticker="${k(t)}">${v}</div>`:`<details class="ss-thread-details"${S}>
      <summary>${k(t)}</summary>
      ${v}
    </details>`;const u=e.querySelector(".ss-thread-status"),$=e.querySelector(".ss-thread-list"),N=e.querySelector(".ss-thread-form"),O={ptt:["ptt","PTT",!1],dcard:["dcard","Dcard",!1],threads:["threads","Threads",!1],reddit:["reddit","Reddit",!1],futu:["futu","富途",!0]};for(const y of n){if(y.id==="local")continue;const q=O[y.id];if(!q)continue;const[L,M,Z]=q,et=e.querySelector(`[data-panel="${y.id}"]`);et&&(et.innerHTML=Bt(zt(s,L,t),M,{futuMode:Z}))}const U=e.querySelectorAll(".ss-src-tab"),V=e.querySelectorAll(".ss-src-panel");if(U.forEach(y=>{y.addEventListener("click",()=>{const q=y.dataset.src;U.forEach(L=>{const M=L.dataset.src===q;L.classList.toggle("active",M),L.setAttribute("aria-selected",M?"true":"false")}),V.forEach(L=>{const M=L.dataset.panel===q;L.classList.toggle("active",M),L.hidden=!M})})}),!m||!f)return u.textContent=Y,u.className="ss-thread-status is-warn",N.querySelectorAll("input,textarea,button").forEach(y=>{y.disabled=!0}),$.innerHTML='<li class="ss-empty">後端未接上</li>',{ok:!1,reason:"no-config",market:l};const H=$t(m,f);u.textContent="";let C=!1;async function x(){try{const y=await H.list(t);if(!y.length){$.innerHTML='<li class="ss-empty">尚無留言</li>';return}$.innerHTML=y.map(q=>`<li><strong>${k(q.nickname)}</strong> ${k(q.body)}<span class="meta">${k(new Date(q.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join("")}catch(y){u.textContent=`讀取失敗：${y.message}`,u.className="ss-thread-status is-warn"}}N.addEventListener("submit",async y=>{if(y.preventDefault(),C)return;const q=(N.querySelector(".ss-nick").value||"訪客").trim().slice(0,24)||"訪客",L=(N.querySelector(".ss-body").value||"").trim().slice(0,d);if(!L)return;C=!0;const M=N.querySelector("button");M.disabled=!0;try{await H.insert({ticker:t,body:L,nickname:q}),N.querySelector(".ss-body").value="",await x()}catch(Z){u.textContent=`發送失敗：${Z.message}`,u.className="ss-thread-status is-warn"}finally{window.setTimeout(()=>{C=!1,M.disabled=!1},b)}}),x();const P=window.setInterval(x,i.pollIntervalMs||1e4);return{ok:!0,market:l,destroy(){window.clearInterval(P)}}}function it(e,t,a={}){if(!e||!t)return{ok:!1,destroy(){}};const i=a.config||globalThis.STOCK_SOCIAL_CONFIG||{},s=bt(t,a.market||e.getAttribute("data-market")),{url:l,anon:n}=gt(i),m=Math.min(i.commentMaxLen||500,a.maxLen||200),f=i.postCooldownMs||4e3,d=a.title||t,b=a.emptyLine||"尚無訊息",g=a.danmakuLayer||document.querySelector("#ss-danmaku-layer"),S=a.flyToggle||document.querySelector("#ss-danmaku-toggle"),h=()=>!!(S&&S.checked);e.classList.add("chat-shell","ss-thread"),e.dataset.market=s,e.dataset.ticker=t,e.innerHTML=`
    <div class="chat-room-label">${k(d)}</div>
    <div class="ss-thread-status chat-status-line" aria-live="polite"></div>
    <ul class="ss-thread-list chat-messages" aria-label="訊息"></ul>
    <form class="ss-thread-form chat-composer">
      <input class="ss-nick" maxlength="24" placeholder="暱稱（可空）" autocomplete="nickname" />
      <input class="ss-body" maxlength="${m}" placeholder="說點什麼…" required autocomplete="off" />
      <button type="submit" class="chat-send">送出</button>
    </form>
  `;const o=e.querySelector(".ss-thread-status"),v=e.querySelector(".ss-thread-list"),u=e.querySelector(".ss-thread-form");let $=new Set;function N(C){if(!g||!h())return;const x=document.createElement("div");x.className="ss-danmaku-item",x.textContent=C,x.style.top=`${8+Math.random()*42}vh`,x.style.animationDuration="12000ms",g.appendChild(x),window.setTimeout(()=>x.remove(),12200)}if(!l||!n)return o.textContent=Y,o.className="ss-thread-status chat-status-line is-warn",u.querySelectorAll("input,button").forEach(C=>{C.disabled=!0}),v.innerHTML=`<li class="ss-empty">${k(b)}</li>`,{ok:!1,reason:"no-config",market:s,destroy(){}};const O=$t(l,n);o.textContent="";let U=!1;async function V(C=!1){try{const x=await O.list(t,80);if(!x.length){v.innerHTML=`<li class="ss-empty">${k(b)}</li>`;return}v.innerHTML=x.map(P=>`<li><span class="nick">${k(P.nickname)}</span>${k(P.body)}<span class="meta">${k(new Date(P.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join(""),v.scrollTop=v.scrollHeight;for(const P of x)$.has(P.id)||($.add(P.id),C&&N(`${P.nickname}: ${P.body}`));$.size>200&&($=new Set([...$].slice(-100)))}catch{o.textContent=Y,o.className="ss-thread-status chat-status-line is-warn"}}u.addEventListener("submit",async C=>{if(C.preventDefault(),U)return;const x=(u.querySelector(".ss-nick").value||"訪客").trim().slice(0,24)||"訪客",P=(u.querySelector(".ss-body").value||"").trim().slice(0,m);if(!P)return;U=!0;const y=u.querySelector("button");y.disabled=!0;try{await O.insert({ticker:t,body:P,nickname:x}),u.querySelector(".ss-body").value="",await V(!0)}catch{o.textContent="發送失敗",o.className="ss-thread-status chat-status-line is-warn"}finally{window.setTimeout(()=>{U=!1,y.disabled=!1},f)}}),V(!1);const H=window.setInterval(()=>V(!0),i.pollIntervalMs||8e3);return{ok:!0,market:s,ticker:t,destroy(){window.clearInterval(H)}}}function Gt(e=document,t={}){const a=e.querySelectorAll("[data-ticker-comments]"),i=[];return a.forEach(s=>{const l=s.getAttribute("data-ticker-comments")||s.dataset.ticker,n=s.getAttribute("data-market")||void 0;l&&i.push(Ht(s,l,{...t,market:n}))}),i}function _t(e,t){if(!e||!t||e.querySelector("script[data-giscus], iframe.giscus-frame"))return;const a=document.createElement("script");a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","1"),a.setAttribute("data-repo",t.repo||""),a.setAttribute("data-repo-id",t.repoId||""),a.setAttribute("data-category",t.category||"General"),a.setAttribute("data-category-id",t.categoryId||""),a.setAttribute("data-mapping",t.mapping==="pathname"?"pathname":"specific"),a.setAttribute("data-term",t.term||"site-discussion"),a.setAttribute("data-strict","0"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","bottom"),a.setAttribute("data-theme",t.theme||"dark"),a.setAttribute("data-lang",t.lang||"zh-TW"),e.appendChild(a)}function Zt(e="#ss-giscus",t={}){const a=document.querySelector(e);if(!a)return{ok:!1,reason:"missing"};const s=(t.config||globalThis.STOCK_SOCIAL_CONFIG||{}).giscus||{};if(!s.enabled||!s.repoId||!s.categoryId)return a.innerHTML='<p class="ss-chat-status is-warn">Giscus 尚未設定（需 repoId / categoryId）。請見 README。</p>',{ok:!1,reason:"no-config"};const l=a.querySelector(".ss-giscus-host")||a;return _t(l,{...s,term:s.term||"site-discussion"}),{ok:!0}}function w(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ft(e){const t=e.manualUrls||[];return t.length?'<p class="ss-digest-sub">手動開啟</p>'+t.slice(0,4).map(a=>`<article class="ss-digest-item"><a href="${w(a)}" target="_blank" rel="noopener noreferrer">${w(a)}</a></article>`).join(""):""}function lt(e){const t=e.score!=null?`<span class="ss-score">▲ ${w(e.score)}</span>`:"",a=e.author?`@${w(e.author)}`:"",i=e.created?w(new Date(e.created).toLocaleString("zh-TW",{hour12:!1})):e.date?w(e.date):"",s=e.via?`<span class="ss-via">${w(e.via)}</span>`:"";return`<article class="ss-digest-item">
    <a href="${e.url?w(e.url):"#"}" target="_blank" rel="noopener noreferrer">${w(e.snippet||e.title||"(無摘要)")}</a>
    <div class="ss-digest-meta">${t} ${a} ${i} ${s}</div>
  </article>`}function Jt(e,t,{futuMode:a=!1}={}){var f;const i=e.blocker?`<p class="ss-digest-blocker">⚠ ${w(e.blocker)}</p>`:"",s=e.items||[],l=e.newsRelated||[];let n="";s.length&&(n+=s.map(lt).join("")),l.length&&(n+=`<p class="ss-digest-sub">${a?"新聞／討論線索（非留言）":"相關公開新聞（非社群評論）"}</p>`+l.map(lt).join("")),!s.length&&((f=e.manualUrls)!=null&&f.length)&&(n+=Ft(e)),n||(n=`<p class="ss-empty">此標的暫無${w(t)}資料</p>`);const m=e.via&&e.via!=="reddit.com"?`<p class="ss-digest-via-note">來源備援：${w(e.via)}</p>`:"";return`<section class="ss-digest-ticker" data-ticker="${w(e.ticker)}">
    <h4>${w(e.ticker)}</h4>
    ${i}
    ${m}
    ${n}
  </section>`}function z(e,t,a,i={}){const s=(t||[]).map(l=>Jt(l,a,i)).join("");return`<div class="ss-digest-col">
    <h4 class="ss-digest-col-title">${w(e)}</h4>
    ${s||`<p class="ss-empty">無 ${w(e)} 區塊（今日無對應市場標的或尚未抓取）</p>`}
  </div>`}async function yt(e){const t=globalThis.STOCK_SOCIAL_CONFIG||{},a=e||t.socialDigestUrl||"./data/social-digest.json",i=await fetch(a,{cache:"no-cache"});if(!i.ok)throw new Error(`social-digest ${i.status}`);return i.json()}function Kt(e,t){if(!t)return;const a=e.asOf?new Date(e.asOf).toLocaleString("zh-TW",{hour12:!1}):"—";(e.notes||[]).map(d=>`<li>${w(d)}</li>`).join(""),e.routing;const i=`
    <div class="ss-digest-market" data-market-panel="US">
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${z("Reddit",e.reddit,"Reddit")}
        ${z("富途牛牛",e.futu,"富途",{futuMode:!0})}
      </div>
    </div>`,s=`
    <div class="ss-digest-market" data-market-panel="TW" hidden>
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${z("PTT",e.ptt,"PTT")}
        ${z("Dcard",e.dcard,"Dcard")}
        ${z("Threads",e.threads,"Threads")}
      </div>
    </div>`,l=(e.reddit||[]).length||(e.futu||[]).length,n=(e.ptt||[]).length||(e.dcard||[]).length||(e.threads||[]).length,m=l?"US":n?"TW":"US";t.innerHTML=`
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>外部摘要</h3>
        <p class="ss-digest-asof">${w(a)}</p>
      </header>
      <div class="ss-digest-market-tabs" role="tablist" aria-label="社交摘要市場">
        <button type="button" class="ss-mkt-tab${m==="US"?" active":""}" data-market="US" role="tab" aria-selected="${m==="US"}">美股 Reddit／富途</button>
        <button type="button" class="ss-mkt-tab${m==="TW"?" active":""}" data-market="TW" role="tab" aria-selected="${m==="TW"}">台股 PTT／Dcard／Threads</button>
      </div>
      ${i}
      ${s}
    </div>
  `,t.querySelectorAll("[data-market-panel]").forEach(d=>{const b=d.getAttribute("data-market-panel")===m;d.hidden=!b});const f=t.querySelectorAll(".ss-mkt-tab");f.forEach(d=>{d.addEventListener("click",()=>{const b=d.getAttribute("data-market");f.forEach(g=>{const S=g===d;g.classList.toggle("active",S),g.setAttribute("aria-selected",S?"true":"false")}),t.querySelectorAll("[data-market-panel]").forEach(g=>{g.hidden=g.getAttribute("data-market-panel")!==b})})})}async function Yt(e="#ss-social-digest",t){const a=document.querySelector(e);if(!a)return{ok:!1};try{const i=await yt(t);return Kt(i,a),{ok:!0,data:i}}catch(i){return a.innerHTML=`<p class="ss-digest-blocker">社交摘要尚未產生或讀取失敗：${w(i.message)}</p>`,{ok:!1,error:i}}}const kt="./data/strategy-screener.json",Xt={精選:"精選",價量:"價量",籌碼:"籌碼",財務:"財務",大師:"大師",技術:"價量",綜合:"精選"};function Qt(e){try{return new Date(e).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+"（台北）"}catch{return e||"—"}}function p(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString("zh-TW",{minimumFractionDigits:t,maximumFractionDigits:t})}function J(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function K(e){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(2)}%`}function te(e){return e.categoryGroup||Xt[e.category]||e.category||"精選"}function ee(e){let t=c(e);return t=t.replace(/本益比/g,()=>r("pe","本益比")),t=t.replace(/營益率/g,()=>r("opMargin","營益率")),t=t.replace(/毛利率/g,()=>r("grossMargin","毛利率")),t=t.replace(/外資/g,()=>r("foreignInv","外資")),t=t.replace(/投信/g,()=>r("trustInv","投信")),t=t.replace(/自營商/g,()=>r("dealerInv","自營商")),t=t.replace(/均線多頭/g,()=>r("maBull","均線多頭")),t=t.replace(/RSI/g,()=>r("rsi","RSI")),t=t.replace(/振幅/g,()=>r("amplitude","振幅")),t=t.replace(/(\d+)\s*張/g,(a,i)=>`${i}${r("zhang","張")}`),t=t.replace(/＞\s*(\d+)\s*張/g,(a,i)=>`＞ ${i}${r("zhang","張")}`),t}function ae(e){return e==="skip"?'<span class="xq-cond-st skip">略過</span>':e==="fail"?'<span class="xq-cond-st fail">未過</span>':'<span class="xq-cond-st pass">條件</span>'}function se(e){switch(e){case"ma-bull":return[{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"dayPct",label:"日漲跌",fmt:t=>K(t.dayPct),cls:t=>J(t.dayPct)},{key:"sma5",label:"SMA5",fmt:t=>p(t.sma5)},{key:"sma10",label:"SMA10",fmt:t=>p(t.sma10)},{key:"sma20",label:"SMA20",fmt:t=>p(t.sma20)},{key:"sma60",label:"SMA60",fmt:t=>p(t.sma60)},{key:"volRatioYday",label:"量比(昨)",fmt:t=>t.volRatioYday!=null?p(t.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:"今量(張)",fmt:t=>t.volTodayZhang!=null?p(t.volTodayZhang,1):t.volToday!=null?p(t.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:r("pe","本益比"),fmt:t=>p(t.pe,2),rawLabel:!0},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?p(t.avgVol5Zhang,1):t.avgVol5Shares!=null?p(t.avgVol5Shares,0)+"股":"—"},{key:"revenueGrowth",label:"營收成長%",fmt:t=>t.revenueGrowth!=null?p(t.revenueGrowth,1):"—"},{key:"earningsGrowth",label:"獲利成長%",fmt:t=>t.earningsGrowth!=null?p(t.earningsGrowth,1):"—"},{key:"debtToEquity",label:"負債權益",fmt:t=>t.debtToEquity!=null?p(t.debtToEquity,2):"—"},{key:"dayPct",label:"日漲跌",fmt:t=>K(t.dayPct),cls:t=>J(t.dayPct)}];case"inst-sync":return[{key:"foreignNet1dZhang",label:r("foreignInv","外資")+"1日(張)",fmt:t=>p(t.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:r("trustInv","投信")+"1日(張)",fmt:t=>p(t.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:r("dealerInv","自營商")+"1日(張)",fmt:t=>p(t.dealerNet1dZhang,1),rawLabel:!0},{key:"instNet5dZhang",label:"法人5日(張)",fmt:t=>p(t.instNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"dayPct",label:"日漲跌",fmt:t=>K(t.dayPct),cls:t=>J(t.dayPct)},{key:"rsi",label:r("rsi","RSI"),fmt:t=>p(t.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:t=>p(t.rsiPrev,2)},{key:"ampPct",label:r("amplitude","振幅"),fmt:t=>t.ampPct!=null?p(t.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?p(t.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:t=>p(t.pb,2)},{key:"directorHoldPct",label:"董監持股%",fmt:t=>t.directorHoldPct!=null?p(t.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:r("pe","本益比"),fmt:t=>p(t.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?p(t.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:t=>Array.isArray(t.revGrowth3y)?t.revGrowth3y.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:t=>t.revGrowth5yAvgPct!=null?p(t.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:t=>t.pretaxGrowth5yAvgPct!=null?p(t.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?p(t.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:"近季營益率%",fmt:t=>t.opMargin1qPct!=null?p(t.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:t=>Array.isArray(t.opMargin3y)?t.opMargin3y.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:t=>t.revGrowth3yAvgPct!=null?p(t.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)}];case"benjamin-graham":return[{key:"pe",label:r("pe","本益比"),fmt:t=>p(t.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:t=>p(t.pb,2)},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?p(t.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:"近季營益率%",fmt:t=>t.opMargin1qPct!=null?p(t.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:"負債比%",fmt:t=>t.debtRatioPct!=null?p(t.debtRatioPct,1)+"%":"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:r("pe","本益比"),fmt:t=>p(t.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?p(t.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:t=>t.roeGrowthPct!=null?p(t.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:t=>t.epsGrowthStreak!=null?String(t.epsGrowthStreak):"—"},{key:"price",label:"價格",fmt:t=>p(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>p(t.avgVol5Zhang,1)}];case"margin-up":return[{key:"seasons",label:"季別",fmt:t=>Array.isArray(t.seasons)?t.seasons.join(" → "):"—"},{key:"opMargins",label:r("opMargin","營益率"),fmt:t=>Array.isArray(t.opMargins)?t.opMargins.map(a=>a!=null?a+"%":"—").join(" → "):"—",rawLabel:!0},{key:"grossMargins",label:r("grossMargin","毛利率"),fmt:t=>Array.isArray(t.grossMargins)?t.grossMargins.map(a=>a!=null?a+"%":"—").join(" → "):"—",rawLabel:!0},{key:"mode",label:"條件",fmt:t=>t.mode||"—"},{key:"source",label:"來源",fmt:t=>t.source||"—"}];default:return[{key:"price",label:"價格",fmt:t=>p(t.price)}]}}function ie(e){return`<ol class="xq-cond-list">${(e.conditions||[]).map((a,i)=>{const s=a.status||"pass";return`<li class="xq-cond ${s}">
        <span class="xq-cond-num">${i+1}</span>
        <span class="xq-cond-text">${ee(a.text)}</span>
        ${ae(s)}
      </li>`}).join("")}</ol>`}function St(e,t){return!t||t==="ALL"?e||[]:(e||[]).filter(a=>{const i=String(a.market||"").toUpperCase();if(i===t)return!0;const s=String(a.ticker||"").toUpperCase().endsWith(".TW");return i?!1:t==="TW"?s:!s})}function le(e,t="TW"){const a=e.hits||[],i=St(a,t);if(e.incomplete&&!i.length){const d=c(e.incompleteLabel||"資料不足"),b=(e.blockers||[]).map(g=>`<li>${c(g)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${d}</div>
      <ul>${b}</ul>
      
    </div>`}if(!i.length){const d=(e.blockers||[]).map(b=>`<li>${c(b)}</li>`).join("");return`<div class="xq-empty">
      <p>今日無命中</p>
      ${d?`<ul>${d}</ul>`:""}
    </div>`}const s=se(e.id),l=s.map(d=>`<th>${d.rawLabel?d.label:c(d.label)}</th>`).join(""),n=(d,b)=>{if(!b.length)return"";const g=b.map(h=>{const o=h.metrics||{},v=s.map(u=>`<td class="num ${u.cls?u.cls(o):""}">${u.fmt(o)}</td>`).join("");return`<tr>
          <td><span class="ticker">${c(h.ticker)}</span></td>
          <td class="name-cell">${c(h.name||"")}</td>
          ${v}
        </tr>`}).join(""),S=b.map(h=>{const o=h.metrics||{},v=s.map(u=>{const $=u.cls?u.cls(o):"";return`<div class="xq-m"><span class="xq-ml">${u.rawLabel?u.label:c(u.label)}</span><span class="xq-mv ${$}">${u.fmt(o)}</span></div>`}).join("");return`<article class="xq-hit-card">
          <div class="xq-hit-head">
            <div>
              <div class="ticker">${c(h.ticker)}</div>
              <div class="name">${c(h.name||"")}</div>
            </div>
          </div>
          <div class="xq-hit-metrics">${v}</div>
        </article>`}).join("");return`
      <div class="xq-market-block">
        <h5 class="xq-market-title">${c(d)}（${b.length}）</h5>
        <div class="table-wrap xq-table-wrap">
          <table class="stock-table xq-table">
            <thead><tr><th>代碼</th><th>名稱</th>${l}</tr></thead>
            <tbody>${g}</tbody>
          </table>
        </div>
        <div class="xq-mobile-cards">${S}</div>
      </div>`},m=i.filter(d=>String(d.market||"").toUpperCase()==="TW"),f=i.filter(d=>String(d.market||"").toUpperCase()!=="TW");return`${n("台股",m)}${n("美股",f)}`}function rt(e,t,a="ALL"){var d,b;const i=e.hits||[],l=St(i,a).length,n=(e.unchecked||[]).map(g=>`<li class="xq-unchecked">${c(g)}</li>`).join(""),m=(e.notes||[]).map(g=>`<li>${c(g)}</li>`).join(""),f=!e.incomplete&&(e.blockers||[]).length?`<ul class="xq-blockers">${(e.blockers||[]).map(g=>`<li>${c(g)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${c(e.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${c(e.name)}</h3>
          <div class="xq-tags">
            ${(e.xqTags||[e.category]).map(g=>`<span class="xq-tag">${c(g)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="命中檔數">
          <span class="xq-hit-num">${l}</span>
          <span class="xq-hit-label">檔命中</span>
        </div>
      </div>
      ${e.description?`<p class="xq-desc">${c(e.description)}</p>`:""}
      <div class="xq-meta-row">
        <span>執行日 ${c(t.sessionDate||"—")}</span>
        <span>資料 ${Qt(t.asOf)}</span>
        <span>台股宇宙 ${((d=t.universe)==null?void 0:d.tw)??"—"}</span>
        <span>美股宇宙 ${((b=t.universe)==null?void 0:b.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">邏輯條件（明示、可對照）</h4>
      ${ie(e)}
      ${n?`<ul class="xq-unchecked-list">${n}</ul>`:""}
      ${m?`<ul class="xq-notes">${m}</ul>`:""}
      ${f}
      <div class="xq-toolbar">
        <h4 class="xq-sub">篩選結果</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>複製 JSON</button>
          <button type="button" class="xq-btn" data-xq-csv>匯出此策略 CSV</button>
          <a class="xq-btn xq-btn-link" href="${kt}" download="strategy-screener.json">匯出 JSON</a>
        </div>
      </div>
      <div class="xq-market-tabs" role="tablist" aria-label="命中市場">
        <button type="button" class="xq-mkt-btn${a==="TW"?" active":""}" data-xq-market="TW" aria-pressed="${a==="TW"}">台股</button>
        <button type="button" class="xq-mkt-btn${a==="US"?" active":""}" data-xq-market="US" aria-pressed="${a==="US"}">美股</button>
      </div>
      ${le(e,a)}
    </div>
  `}function re(e=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${r("strategyScreen","策略選股")}</h2>
      <p class="view-lead-tight">台／美命中分開檢視 · 缺資料標「不足」</p>
      <div id="xq-root" class="xq-root" aria-label="策略選股">
        ${e?'<p class="xq-loading">載入策略結果中…</p>':""}
      </div>
    </section>
  `}async function ne(e=kt){const t=await fetch(e,{cache:"no-cache"});if(!t.ok)throw new Error(`strategy-screener ${t.status}`);return t.json()}function ce(e,t){var h;const a=typeof e=="string"?document.querySelector(e):e;if(!a||!((h=t==null?void 0:t.strategies)!=null&&h.length)){a&&(a.innerHTML='<div class="xq-empty"><p>尚無策略資料。請執行 <code>npm run strategies</code>。</p></div>');return}const i=t.categoryOrder||["精選","價量","籌碼","財務","大師"],s=new Map(i.map(o=>[o,[]]));for(const o of t.strategies){const v=te(o);s.has(v)||s.set(v,[]),s.get(v).push(o)}const l=t.strategies[0];let n="TW";const m=i.map(o=>{const v=s.get(o)||[];return v.length?`<div class="xq-cat-block">
        <div class="xq-cat-label">${c(o)}</div>
        <div class="xq-chip-row">
          ${v.map(u=>{const $=(u.hits||[]).length,N=u.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${u.id===l.id?" active":""}${N}" data-xq-id="${c(u.id)}" aria-pressed="${u.id===l.id}">
                <span class="xq-chip-name">${c(u.name)}</span>
                <span class="xq-chip-n">${u.incomplete?"不足":`共${$}檔`}</span>
              </button>`}).join("")}
        </div>
      </div>`:""}).join(""),f=t.strategies.map(o=>{const v=(o.hits||[]).length,u=o.id===l.id?" active":"",$=o.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${u}${$}" data-xq-id="${c(o.id)}">
        <span>${c(o.name)}</span>
        <span class="xq-side-n">${o.incomplete?"不足":`共${v}檔`}</span>
      </button>`}).join("");a.innerHTML=`
    <div class="xq-layout">
      <aside class="xq-sidebar" aria-label="策略列表">
        <div class="xq-side-title">策略</div>
        ${f}
      </aside>
      <div class="xq-main">
        <div class="xq-chips" aria-label="策略分類">${m}</div>
        <div class="xq-panel-host">${rt(l,t,n)}</div>
      </div>
    </div>
    <p class="xq-foot">${c(t.disclaimer||"")}
      ${t.exportNote?` · ${c(t.exportNote)}`:""}
    </p>
  `;const d=a.querySelector(".xq-panel-host");let b=l.id;const g=()=>{pe(d,t),d==null||d.querySelectorAll("[data-xq-market]").forEach(o=>{o.addEventListener("click",()=>{n=o.getAttribute("data-xq-market")||"TW",S(b)})}),d==null||d.querySelectorAll("a.term").forEach(o=>{o.addEventListener("click",v=>{const u=o.getAttribute("data-term"),$=document.getElementById(`term-${u}`);$&&(v.preventDefault(),$.tagName==="DETAILS"&&($.open=!0),$.scrollIntoView({behavior:"smooth",block:"start"}),$.classList.add("flash"),setTimeout(()=>$.classList.remove("flash"),1600))})})},S=o=>{const v=t.strategies.find(u=>u.id===o);!v||!d||(b=o,d.innerHTML=rt(v,t,n),a.querySelectorAll("[data-xq-id]").forEach(u=>{const $=u.getAttribute("data-xq-id")===o;u.classList.toggle("active",$),u.tagName==="BUTTON"&&u.setAttribute("aria-pressed",$?"true":"false")}),g())};a.querySelectorAll("[data-xq-id]").forEach(o=>{o.addEventListener("click",()=>S(o.getAttribute("data-xq-id")))}),g()}function oe(e){const t=e.hits||[];if(!t.length)return"";const a=[...new Set(t.flatMap(n=>Object.keys(n.metrics||{})))],i=["ticker","name","market","ohlcvBarDate",...a],s=n=>{const m=n==null?"":String(n);return/[",\n]/.test(m)?`"${m.replace(/"/g,'""')}"`:m},l=t.map(n=>{const m=n.metrics||{};return[n.ticker,n.name,n.market,n.ohlcvBarDate||"",...a.map(f=>m[f])].map(s).join(",")});return[i.join(","),...l].join(`
`)}function de(e,t,a){const i=new Blob([t],{type:a}),s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3)}function pe(e,t){var a,i;(a=e==null?void 0:e.querySelector("[data-xq-copy]"))==null||a.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(t,null,2));const s=e.querySelector("[data-xq-copy]");if(s){const l=s.textContent;s.textContent="已複製",setTimeout(()=>s.textContent=l,1200)}}catch{}}),(i=e==null?void 0:e.querySelector("[data-xq-csv]"))==null||i.addEventListener("click",()=>{var m;const s=(m=e.querySelector(".xq-panel"))==null?void 0:m.getAttribute("data-strategy-id"),l=t.strategies.find(f=>f.id===s);if(!l)return;const n=oe(l);if(!n){alert("此策略今日無命中列可匯出");return}de(`${l.id}-hits.csv`,"\uFEFF"+n,"text/csv;charset=utf-8")})}async function ue(e="#xq-root"){try{const t=await ne();return ce(e,t),{ok:!0,data:t}}catch(t){const a=document.querySelector(e);return a&&(a.innerHTML=`<div class="xq-empty"><p>無法載入策略選股（${c(t.message)}）。請確認已執行 <code>npm run strategies</code>。</p></div>`),{ok:!1,error:t}}}const me="./data/latest.json";function A(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function T(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(t)}%`}function I(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString("zh-TW",{minimumFractionDigits:t,maximumFractionDigits:t})}function B(e,t){if(e==null||Number.isNaN(e))return"—";const a=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"$":t==="TWD"?"NT$":""}${I(e,a)}`}function he(e){try{return new Date(e).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+"（台北）"}catch{return e}}function Q(e){const t=e.aboveSma20?`<span class="badge sma-on">${r("sma20","SMA20↑")}</span>`:`<span class="badge sma-off">${r("sma20","SMA20↓")}</span>`,a=e.aboveSma50?`<span class="badge sma-on">${r("sma50","SMA50↑")}</span>`:`<span class="badge sma-off">${r("sma50","SMA50↓")}</span>`;return t+a}function tt(e){return e!=null&&e.length?e.map(t=>{const a=String(t);return a==="A"?`<span class="badge screen">${r("screenA","A")}</span>`:a==="B"?`<span class="badge screen">${r("screenB","B")}</span>`:a==="C"?`<span class="badge screen">${r("screenC","C")}</span>`:a==="observe"?'<span class="badge screen">觀察</span>':`<span class="badge screen">${c(a)}</span>`}).join(""):""}function ve(e){var i,s,l,n,m;const t=[],a=(f,d,b)=>{if(!b)return;const g=b.incomplete,S=b.value!=null?I(b.value,2):g?"資料不全":"—",h=b.dayPct!=null?`<div class="pct ${A(b.dayPct)}">${T(b.dayPct)}</div>`:"",o=b.session==="intraday"?` · ${r("intraday","盤中")}`:"";t.push(`
      <div class="index-chip ${g?"incomplete":""}">
        <div class="label">${d}${o}</div>
        <div class="value">${S}</div>
        ${h}
      </div>
    `)};if(a("tw",r("taiex",((i=e.tw)==null?void 0:i.name)||"台灣加權 TAIEX"),e.tw),a("otc",r("otc",((s=e.otc)==null?void 0:s.name)||"櫃買"),e.otc),a("spx",r("spx",((l=e.spx)==null?void 0:l.name)||"S&P 500"),e.spx),a("nasdaq",r("nasdaq",((n=e.nasdaq)==null?void 0:n.name)||"Nasdaq"),e.nasdaq),a("sox",r("sox",((m=e.sox)==null?void 0:m.name)||"SOX"),e.sox),e.usdTwd){const f=e.usdTwd,d=f.taipeiClose??f.yahoo;t.push(`
      <div class="index-chip">
        <div class="label">${r("usdtwd","USD/TWD")}</div>
        <div class="value">${I(d,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          台北收 ${f.taipeiClose!=null?I(f.taipeiClose,3):"—"}
          · Yahoo ${f.yahoo!=null?I(f.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${t.join("")}</div>`}function fe(e,t){const a=e.market==="TW"?r("twStock","台股"):e.market==="US"?r("usStock","美股"):c(e.market||""),i=e.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${r("rs","RS vs 指數")}</div><div class="m-val ${A(e.rsVsIndexPp)}">${T(e.rsVsIndexPp)}</div></div>`:e.priorClosePct!=null?`<div class="metric"><div class="m-label">${r("priorClose","前收漲幅")}</div><div class="m-val ${A(e.priorClosePct)}">${T(e.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${r("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${t}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${r("ticker",e.ticker)}</div>
          <div class="name">${c(e.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${B(e.price,e.currency)}</div>
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
        <div class="metric"><div class="m-label">${r("pct5d","5 日")}</div><div class="m-val ${A(e.pct5d)}">${T(e.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${r("pct1m","約 1 月")}</div><div class="m-val ${A(e.pct1m)}">${T(e.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${r("volRatio","量比")}</div><div class="m-val">${e.volRatio!=null?I(e.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${e.business||e.why||e.risk?`<details class="fold-block card-fold"><summary>詳情</summary>
        ${e.business?`<p class="card-text"><strong>本業</strong>　${c(e.business)}</p>`:""}
        ${e.why?`<p class="card-text"><strong>理由</strong>　${c(e.why)}</p>`:""}
        ${e.risk?`<p class="card-text risk"><strong>風險</strong>　${wt(e.risk)}</p>`:""}
      </details>`:""}
      <div data-ticker-comments="${c(e.ticker)}" data-market="${c(e.market==="TW"||String(e.ticker).endsWith(".TW")?"TW":"US")}"></div>
    </article>
  `}function wt(e){let t=c(e);return t=t.replace(/漲停/g,r("limitUp","漲停")),t=t.replace(/動能/g,r("momentum","動能")),t}function nt(e){return e.map(t=>{const a=t.rsVsIndexPp??t.priorClosePct,i=t.rsVsIndexPp!=null?T(t.rsVsIndexPp):t.priorClosePct!=null?T(t.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${c(t.ticker)}</span></td>
        <td class="name-cell">${c(t.name||"")}</td>
        <td class="num">${B(t.price,t.currency)}</td>
        <td class="num ${A(t.dayPct)}">${T(t.dayPct)}</td>
        <td class="num ${A(a)}">${i}</td>
        <td class="num ${A(t.pct5d)}">${T(t.pct5d)}</td>
        <td class="num ${A(t.pct1m)}">${T(t.pct1m)}</td>
        <td class="num">${t.volRatio!=null?I(t.volRatio,2)+"×":"—"}</td>
        <td>${Q(t)}</td>
        <td>${tt(t.screens)}</td>
        <td class="why-cell">${c(t.why||"")}</td>
      </tr>`}).join("")}function ct(e){return e.map(t=>{const a=t.rsVsIndexPp!=null?`<span class="${A(t.rsVsIndexPp)}">${r("rs","RS")} ${T(t.rsVsIndexPp)}</span>`:t.priorClosePct!=null?`<span class="${A(t.priorClosePct)}">${r("priorClose","前收")} ${T(t.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(t.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${c(t.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${B(t.price,t.currency)}</div>
            <div class="${A(t.dayPct)}" style="font-family:var(--mono);font-weight:600">${T(t.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${a}
          <span class="${A(t.pct5d)}">${r("pct5d","5d")} ${T(t.pct5d)}</span>
          <span class="${A(t.pct1m)}">${r("pct1m","1m")} ${T(t.pct1m)}</span>
          <span>${r("volRatio","量比")} ${t.volRatio!=null?I(t.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${Q(t)}${tt(t.screens)}</div>
        ${t.why?`<p class="lc-why">${c(t.why)}</p>`:""}
        ${t.risk&&t.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">風險：${wt(t.risk)}</p>`:""}
        <div data-ticker-comments="${c(t.ticker)}" data-market="${c(String(t.ticker).endsWith(".TW")||t.market==="TW"?"TW":"US")}"></div>
      </div>`}).join("")}function be(e){if(!e)return"";const t=e.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${r("adr","ADR")} ${r("parity","平價")}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${r("usStock","美股")} ${r("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${B(e.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${r("adsRatio","換股比")}</span>　<strong>${c(e.adsRatio||"—")}</strong></div>
          <div class="row"><span>${r("parity","隱含價")}</span>　<strong>${e.impliedUsdTaipeiFx!=null?I(e.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${r("premium","溢價")}</span>　<strong class="${A(t)}">${T(t)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${r("twStock","台股")}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${B(e.tw2330,"TWD")}</div>
        </div>
        ${e.note?`<p class="parity-note">${c(e.note)}</p>`:""}
      </div>
    </section>
  `}function ge(e){if(!e)return"";const t={A:"screenA",B:"screenB",C:"screenC"},a=Object.keys(e).map(i=>{const s=t[i]||"screening";return`<li><span class="screen-key">${r(s,i)}</span><span>${c(e[i])}</span></li>`}).join("");return`
    <details class="fold-block help-fold" id="help-method">
      <summary>詳情 · ${r("screening","每日篩選條件")}</summary>
      <ul class="method-list fold-list">${a}</ul>
    </details>
  `}function $e(e){return`
    <div class="help-doc">
      <header class="view-header">
        <h2 class="view-title">說明</h2>
      </header>
      <ul class="help-short">
        <li><strong>今日</strong> — 動能／RS／均線／量比篩選候選</li>
        <li><strong>策略</strong> — 價量／籌碼／財務／大師條件命中</li>
        <li><strong>模擬</strong> — 自 2026-09-15 累計；訊號即成交（非真實下單）</li>
        <li><strong>社群</strong> — 站內聊天＋外部摘要，氣氛參考</li>
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
  `}function ye(){return'<div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>'}function X(e){return e?e.market==="TW"||e.market==="US"?e.market:String(e.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function ot(e,t){const a=new Set,i=[],s=l=>{if(!(l!=null&&l.ticker)||a.has(l.ticker))return;const n=X(l);t&&n!==t||(a.add(l.ticker),i.push({ticker:l.ticker,market:n,name:l.name||""}))};return(e.top5||[]).forEach(s),(!t||t==="TW")&&(e.tw||[]).forEach(s),(!t||t==="US")&&(e.us||[]).forEach(s),i}function ke(e){return e==="TW"?"__TW__":"__US__"}function dt(e,t){return e.length?`<div class="top5-grid">${e.map((a,i)=>fe(a,i+1)).join("")}</div>`:`<div class="empty-state">${c(t)} Top 尚無</div>`}function Se(e){const t=ot(e,"US"),a=ot(e,"TW"),i=(s,l)=>s.map((n,m)=>`<button type="button" class="chat-chip${m===0?" active":""}" data-ticker="${c(n.ticker)}" data-market="${l}" hidden>${c(n.ticker)}</button>`).join("");return`
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
  `}const we=[{id:"today",label:"今日",hash:"today"},{id:"strategies",label:"策略",hash:"strategies"},{id:"paper",label:"模擬",hash:"paper"},{id:"social",label:"社群",hash:"social"},{id:"help",label:"說明",hash:"help"}],xt={today:"today",strategies:"strategies",paper:"paper",social:"social",help:"help",glossary:"help",danmaku:"social","social-digest":"social",giscus:"social",method:"help"},xe={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',social:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.5 3.1 6L5 21l4.3-1.4c.9.3 1.8.4 2.7.4 5 0 9-3.6 9-8s-4-8-9-8zm-1 5h2v5h-2V8zm0 6h2v2h-2v-2z"/></svg>',help:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 15a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1.6-5.35c-.55.35-.85.6-.95 1.1l-.1.75h-1.5l.12-.95c.15-.95.7-1.5 1.4-1.95.55-.35.9-.6.9-1.15 0-.55-.45-.95-1.15-.95-.75 0-1.2.4-1.35 1.05l-1.45-.35C9.75 8.2 10.7 7.2 12.2 7.2c1.65 0 2.85 1 2.85 2.4 0 .85-.45 1.5-1.45 2.05z"/></svg>'};function pt(){const e=(location.hash||"").replace(/^#/,"").split(/[/?]/)[0].toLowerCase();return xt[e]||"today"}function ut(e){return we.map(t=>{const a=xe[t.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${t.id}"
        data-variant="${e}"
        aria-label="${t.label}"
        aria-current="false">
        <span class="nav-icon">${a}</span>
        <span class="nav-label">${t.label}</span>
      </button>`}).join("")}function Te(e,t){const a=e.top5||[],i=e.us||[],s=e.tw||[],l=c((e.disclaimer||"本站內容非投資建議。").replace(/^本站內容為依公開行情的數學篩選候選，不是投資建議，亦不保證獲利。$/,"本站只是用公開行情算出「相對有機會觀察的名單」，不會保證賺錢。"));return`
    ${ye()}

    <header class="site-chrome">
      <div class="chrome-brand">
        <div class="brand-mark" aria-hidden="true"></div>
        <div class="brand-text">
          <h1>${r("screening","每日數學選股")}</h1>
          <p class="brand-meta">資料 ${he(e.asOf)}</p>
        </div>
      </div>
      <details class="disclaimer-fold">
        <summary>${r("notAdvice","非投資建議")} · 紅漲綠跌</summary>
        <p>${l}${e.timezoneNote?` · ${c(e.timezoneNote)}`:""}</p>
      </details>
    </header>

    <nav class="nav-desktop" aria-label="主要導覽">
      ${ut("desktop")}
    </nav>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">今日</h2>
        </header>
        <div class="tabs market-tabs" role="tablist" aria-label="市場">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${r("usStock","美股")}（${i.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${r("twStock","台股")}（${s.length}）</button>
        </div>
        ${ve(e.indices||{})}
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${r("usStock","美股")} Top</h2>
            ${dt(a.filter(n=>X(n)==="US"),"美股")}
          </section>
          <section class="section">
            <h2 class="section-title">美股清單</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>
                  <tr>
                    <th>${r("ticker","代碼")}</th>
                    <th>名稱</th>
                    <th>價格</th>
                    <th>${r("dayPct","日漲跌")}</th>
                    <th>${r("rs","RS")}／${r("priorClose","前收")}</th>
                    <th>${r("pct5d","5 日")}</th>
                    <th>${r("pct1m","約 1 月")}</th>
                    <th>${r("volRatio","量比")}</th>
                    <th>均線</th>
                    <th>${r("screening","篩選")}</th>
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
            <h2 class="section-title">${r("twStock","台股")} Top</h2>
            ${dt(a.filter(n=>X(n)==="TW"),"台股")}
          </section>
          <section class="section">
            <h2 class="section-title">台股清單</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>
                  <tr>
                    <th>${r("ticker","代碼")}</th>
                    <th>名稱</th>
                    <th>價格</th>
                    <th>${r("dayPct","日漲跌")}</th>
                    <th>${r("rs","RS")}／${r("priorClose","前收")}</th>
                    <th>${r("pct5d","5 日")}</th>
                    <th>${r("pct1m","約 1 月")}</th>
                    <th>${r("volRatio","量比")}</th>
                    <th>均線</th>
                    <th>${r("screening","篩選")}</th>
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
        ${Et(t)}
      </div>

      <div class="view view-social" id="view-social" data-view="social" hidden>
        <span id="social" class="view-anchor" tabindex="-1"></span>
        ${Se(e)}
      </div>

      <div class="view" id="view-help" data-view="help" hidden>
        <span id="help" class="view-anchor" tabindex="-1"></span>
        ${$e(e)}
        ${Tt()}
        <details class="fold-block help-fold" id="help-legal">
          <summary>詳情 · 免責</summary>
          <p class="disclaimer">${l}</p>
          <p class="tz-note">紅漲綠跌 · 模擬非真實成交 · 社交僅供參考</p>
        </details>
      </div>
    </main>

    <nav class="nav-bottom" aria-label="主要導覽">
      ${ut("mobile")}
    </nav>

    <p class="site-footer">紅漲綠跌 · 點藍字看解釋</p>
  `}function Ae(e,t){e.querySelectorAll(".nav-item").forEach(a=>{const i=a.dataset.nav===t;a.classList.toggle("is-active",i),a.setAttribute("aria-current",i?"page":"false")})}function qe(e,t,{updateHash:a=!0,scrollTop:i=!0}={}){const s=xt[t]||"today";if(e.querySelectorAll(".view").forEach(l=>{const n=l.dataset.view===s;l.hidden=!n,l.classList.toggle("is-active",n)}),Ae(e,s),a){const l=`#${s}`;location.hash!==l&&history.replaceState(null,"",l)}return i&&window.scrollTo(0,0),s}function Pe(e){const t=(a,i)=>qe(e,a,i);return e.querySelectorAll(".nav-item").forEach(a=>{a.addEventListener("click",()=>t(a.dataset.nav))}),e.querySelectorAll("[data-jump]").forEach(a=>{a.addEventListener("click",()=>t(a.dataset.jump))}),window.addEventListener("hashchange",()=>{t(pt(),{updateHash:!1})}),t(pt(),{updateHash:!0,scrollTop:!1}),{go:t}}function Le(e){const t=e.querySelectorAll(".tab-btn");t.forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.tab;t.forEach(s=>{const l=s.dataset.tab===i;s.classList.toggle("active",l),s.setAttribute("aria-selected",l?"true":"false")}),e.querySelectorAll(".panel").forEach(s=>{s.classList.toggle("active",s.id===`panel-${i}`)})})})}function Ce(e,t,{config:a,digest:i}={}){const s=e.querySelector("#chat-room");if(!s)return;const l=s.querySelector("#ss-chat-mount"),n=s.querySelectorAll(".chat-mkt"),m=s.querySelectorAll("[data-chat-mode]");let f=null,d="US",b="lobby";const g=()=>{s.querySelectorAll(".chat-chip-row").forEach(h=>{const o=b==="ticker"&&h.getAttribute("data-chip-market")===d;if(h.hidden=!o,o){const v=[...h.querySelectorAll(".chat-chip")];v.forEach(u=>{u.hidden=!1}),v.length&&!v.some(u=>u.classList.contains("active"))&&v[0].classList.add("active")}})},S=()=>{if(!l)return;if(f!=null&&f.destroy&&f.destroy(),b==="lobby"){const v=ke(d);f=it(l,v,{config:a,market:d,title:d==="TW"?"台股大廳":"美股大廳",emptyLine:"尚無訊息",maxLen:80});return}const h=s.querySelector(`.chat-chip-row[data-chip-market="${d}"]`),o=(h==null?void 0:h.querySelector(".chat-chip.active"))||(h==null?void 0:h.querySelector(".chat-chip"));if(!o){l.innerHTML='<p class="chat-empty">此市場暫無標的</p>',f={destroy(){}};return}f=it(l,o.dataset.ticker,{config:a,market:d,title:o.dataset.ticker,emptyLine:"尚無留言"})};n.forEach(h=>{h.addEventListener("click",()=>{d=h.dataset.chatMarket,s.dataset.market=d,n.forEach(v=>{const u=v===h;v.classList.toggle("active",u),v.setAttribute("aria-selected",u?"true":"false")});const o=s.querySelector(`.chat-chip-row[data-chip-market="${d}"]`);o==null||o.querySelectorAll(".chat-chip").forEach((v,u)=>v.classList.toggle("active",u===0)),g(),S()})}),m.forEach(h=>{h.addEventListener("click",()=>{b=h.dataset.chatMode,s.dataset.mode=b,m.forEach(o=>{const v=o===h;o.classList.toggle("active",v),o.setAttribute("aria-selected",v?"true":"false")}),g(),S()})}),s.querySelectorAll(".chat-chip").forEach(h=>{h.addEventListener("click",()=>{const o=h.closest(".chat-chip-row");o==null||o.querySelectorAll(".chat-chip").forEach(v=>v.classList.toggle("active",v===h)),b==="ticker"&&S()})}),g(),S()}async function Ne(){const e=document.getElementById("app");try{const t=await fetch(me);if(!t.ok)throw new Error(`HTTP ${t.status}`);const a=await t.json(),i=await jt();e.innerHTML=Te(a,i);const s=Pe(e);Le(e),Ut(e),At(e),qt(e,{beforeScroll(){s.go("help",{updateHash:!0,scrollTop:!1})}}),await ue("#xq-root");let l=null;const n=await Yt("#ss-social-digest",R.socialDigestUrl);if(n!=null&&n.ok)l=n.data;else try{l=await yt(R.socialDigestUrl)}catch{l=null}Ce(e,a,{config:R,digest:l}),Gt(e,{config:R,digest:l}),Zt("#ss-giscus",{config:R})}catch(t){e.innerHTML=`<div class="error">無法載入資料（${c(t.message)}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。</div>`}}Ne();
