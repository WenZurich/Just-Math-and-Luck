(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=a(s);fetch(s.href,l)}})();const D={},I={supabaseUrl:typeof import.meta<"u"&&(D==null?void 0:D.VITE_SUPABASE_URL)||"https://whlpzhceivahkuanmmui.supabase.co",supabaseAnonKey:typeof import.meta<"u"&&(D==null?void 0:D.VITE_SUPABASE_ANON_KEY)||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",giscus:{enabled:!0,repo:"WenZurich/Just-Math-and-Luck-",repoId:"R_kgDOUcO78Q",category:"General",categoryId:"DIC_kwDOUcO78c4DFrWU",mapping:"specific",theme:"dark",lang:"zh-TW",perTicker:!1},socialDigestUrl:"./data/social-digest.json",latestUrl:"./data/latest.json",danmakuMaxLen:80,commentMaxLen:500,pollIntervalMs:8e3,postCooldownMs:4e3};globalThis.STOCK_SOCIAL_CONFIG=Object.assign(globalThis.STOCK_SOCIAL_CONFIG||{},I);const mt={dayPct:{title:"日漲跌",plain:"就是「今天這支股票的價錢，比起昨天收盤時，漲了還是跌了多少」。用百分比表示，比較好跟其他股票比。",example:"昨天收盤 100 元，今天收盤 103 元，日漲跌就是 +3%。像考試分數從 100 變成 103，多了 3 分。"},pct5d:{title:"5 日漲跌",plain:"看最近大約一週（5 個交易日）這支股票總共漲了或跌了多少，不是只看今天。",example:"禮拜一 100 元，到這禮拜五變成 110 元，5 日大約就是 +10%。像一週零用錢從 100 變成 110。"},pct1m:{title:"約 1 月漲跌",plain:"看最近大約一個月（常算 21 個交易日）這支股票漲跌多少，用來看比較長一點的趨勢。",example:"一個月前 200 元，現在 220 元，約 1 月就是 +10%。像身高一個月長高一點，要看整段變化。"},rs:{title:"相對強度（RS）",plain:"把「這支股票今天的漲跌」跟「整個市場大盤今天的漲跌」相減。正的表示它比大盤更強（人家跌它比較不跌，或人家漲它漲更多）。",example:"大盤今天 −1%，某股票 +2%，RS 大約是 +3 個百分點。像全班平均考 60 分，你考 80 分，你比班級平均強。"},priorClose:{title:"前收漲幅",plain:"用「上一個完整交易日收盤價」算出來的漲跌幅度。美股若還在盤中，有時會另外標前一天收盤的表現。",example:"週一收盤比週五收盤漲了 13%，就說前收漲幅約 +13%。像昨天整場比賽的最終比分，不是今天還沒打完的分數。"},volRatio:{title:"量比",plain:"今天成交的「張數／股數」是不是比平常多。算法大概是：今天成交量 ÷ 最近約 20 天平均成交量。數字越大，表示今天很多人在買賣。",example:"平常每天成交 100 萬股，今天 300 萬股，量比約 3 倍。像平常教室很安靜，今天突然擠滿人在討論。"},sma20:{title:"SMA20（20 日均線）",plain:"把最近 20 個交易日的收盤價加起來除以 20，得到一條「平滑後的平均價」。股價在均線上面，常被看成最近偏強；在下面常被看成偏弱。",example:"最近 20 天平均價 50 元，今天股價 55 元，就是站上 SMA20。像你的體重比最近 20 天平均還高一點。"},sma50:{title:"SMA50（50 日均線）",plain:"跟 SMA20 一樣是平均價，但用更長的 50 個交易日，看比較中期的方向。",example:"50 天平均 100 元，現在股價 90 元，就是在 SMA50 下面。像月考平均，比段考平均更能看出一陣子的狀況。"},screenA:{title:"篩選 A（動能／相對強度）",plain:"用數學檢查：這支股票最近是不是漲得比大盤好、短中期動能如何、有沒有站上均線。通過的才比較容易被挑進名單。",example:"某股今天比大盤強很多，又站上 SMA20／SMA50，就可能通過篩選 A。像短跑又比同學快、成績又在平均之上。"},screenB:{title:"篩選 B（量能）",plain:"檢查今天成交量是不是明顯比平常大（量比偏高）。量很大有時代表很多人注意，但也可能波動更大。",example:"量比 14 倍表示今天成交大約是平常的 14 倍。像學校平時很少人買某樣零食，今天突然大排長龍。"},screenC:{title:"篩選 C（估值）",plain:"想用本益比之類「貴不貴」的數字來幫忙選股。如果當天抓不到可靠資料，這個篩選就會跳過，避免亂填數字。",example:"本益比像「用幾年賺的錢才回本」的粗略尺。沒有尺就先不量，不要瞎猜。"},taiex:{title:"台灣加權（TAIEX）",plain:"把台灣上市很多股票的表現加總做成一個大分數，用來代表「台股整體」今天大概漲還是跌。",example:"加權今天 −0.77%，表示整體台股平均大概跌了一點點。像全校平均分數今天比昨天低一點。"},otc:{title:"櫃買",plain:"台灣「上櫃」公司的市場（比較多中小型公司）。櫃買指數用來看這群股票整體漲跌。",example:"上市像大學部大隊，櫃買像另一個年級隊。兩邊可以分開看今天誰比較強。"},spx:{title:"S&P 500",plain:"美國 500 家大型公司組成的指數，常被拿來代表「美股大盤」。",example:"S&P 500 跌 0.5%，常被說成美股大盤今天偏弱。像美國大型公司班級的平均分數。"},nasdaq:{title:"Nasdaq（那斯達克）",plain:"美國一個重要股市指數，裡面很多科技公司，常被用來觀察科技股整體氣氛。",example:"Nasdaq 大跌時，很多科技股也可能一起抖。像科技社社團活動特別熱絡或特別冷清的溫度計。"},sox:{title:"SOX（費半）",plain:"美國半導體（做晶片）公司的指數。半導體好不好，常常影響台積電供應鏈的氣氛。",example:"SOX 大跌，常常代表晶片相關股票今天整體承壓。像「晶片班」今天考試普遍不理想。"},usdtwd:{title:"USD/TWD（美金兌台幣）",plain:"1 美元可以換多少台幣。數字變大，常表示台幣變弱（同樣 1 美元換到更多台幣）；數字變小則相反。",example:"匯率 32，表示 1 美元約換 32 元台幣。你要買 10 美元零食，大約要付 320 元台幣。"},adr:{title:"ADR",plain:"美國存託憑證：讓投資人在美國市場買賣「外國公司」的股票憑證。例如台積電在美國有 TSM 這個 ADR。",example:"你在美國超市買「台灣零食的美國包裝版」。東西本質相近，但包裝市場不同，價錢也可能不太一樣。"},parity:{title:"平價／隱含價",plain:"用台股價格、換股比例和匯率，算出「如果完全公平換算，ADR 大概該是多少美元」。拿來跟實際 ADR 價比較。",example:"5 股台積電 ÷ 匯率，算出 ADR 理論價約 374 美元。像用匯率把台幣玩具價換算成美元標價。"},premium:{title:"溢價",plain:"實際市價比「換算後的理論價」還貴多少。正的溢價表示買 ADR 比照公式換算更貴；負的則比較便宜（折價）。",example:"理論 374 美元，市價 416 美元，溢價大約一成多。像同樣便當，車站賣得比學校社辦貴。"},adsRatio:{title:"換股比（ADS 比例）",plain:"一張 ADR 對應幾股本地普通股。台積電常見是 1 股 ADR＝5 股台灣普通股，但要以官方公告為準。",example:"比例 5:1 表示 1 個美國存託憑證背後約有 5 股台股。像 1 盒積木裡固定裝 5 小塊。"},limitUp:{title:"漲停",plain:"台股對一天最多能漲多少有限制（一般股票常見約 10%）。碰到上限就叫漲停，常常買不到或很難成交。",example:"股票從 100 元漲到約 110 元就可能漲停。像遊戲一天經驗值有上限，滿了就不能再加。"},momentum:{title:"動能",plain:"看價格最近是不是繼續往同一方向跑（例如連續幾天偏強）。這是數學觀察，不是保證明天還會這樣。",example:"球正在往前滾而且愈滾愈快，就說動能強。但滾到一半也可能停下或轉向。"},ticker:{title:"股票代碼（Ticker）",plain:"每支股票的簡短代號，方便電腦與市場辨認。美股多用英文字母，台股多用數字。",example:"AAPL 是蘋果，2330 是台積電。像學校學號，用來點名不會搞混。"},index:{title:"指數",plain:"把很多股票包成一個「總成績單」，用來代表某一市場或產業整體表現。",example:"加權指數、S&P 500 都是指數。像全班平均分數，不是某一個同學的分數。"},screening:{title:"數學選股／篩選",plain:"用事先講好的計算規則（漲跌、跟大盤比、均線、成交量等）自動挑出通過條件的股票，而不是靠感覺。",example:"規則：要比大盤強、量比要高。通過的進名單。像用尺量身高，過線的才能進籃球隊候補。"},notAdvice:{title:"不是投資建議",plain:"這個網站只是把公開行情算出來給你看。它不會保證賺錢，也不能代替你自己做決定。",example:"像天氣預報說可能下雨，你仍要自己決定要不要帶傘。看完數字也不等於一定要買。"},intraday:{title:"盤中",plain:"股市還在交易、價格還會一直變動的時候。跟「收盤」（今天交易結束後的最終價）不一樣。",example:"考試還沒結束，分數還可能改；收盤像交卷後的最終分數。"},twStock:{title:"台股",plain:"在台灣證券市場交易的股票，價錢多用新台幣計價。",example:"2330 台積電、2308 台達電都是台股。"},usStock:{title:"美股",plain:"在美國市場交易的股票，價錢多用美元計價。",example:"AAPL、NVDA、CRWD 都是美股。"},paperTrade:{title:"模擬交易",plain:"累積模擬帳戶：自 2026-09-15 起用 latest.json 標的價假設下單即成交，帳本不會每日歸零。非真實券商委託。",example:"像用假錢玩大富翁：規則跟算分是真的，但口袋裡的零用錢沒有真的拿去買股票。"},principal:{title:"本金",plain:"該市場模擬帳的起始資金。台股帳 NT$3,000,000；美股帳 US$100,000（兩帳獨立，不相加）。",example:"你帶 100 元去福利社，這 100 元就是本金。後來錢包變 90 或 120，都還是從這筆本金算起。"},position:{title:"部位",plain:"現在帳本裡「持有多少股票」。部位市值＝股數 × 現在價格。再加上現金，就是這本帳的權益。",example:"買了 1000 股、一股市價 50 元，部位大約 5 萬元。像背包裡現在裝了幾包零食、值多少錢。"},stopLoss:{title:"停損",plain:"事先講好：如果這筆模擬持有虧到某個百分比，就全部賣掉，避免虧更多。本站規則是未實現大約 −3%。",example:"遊戲裡血量低於 3 格就先撤退，不要硬打到歸零。這是保護本金的數學規則，不是保證以後不會虧。"},takeProfit:{title:"停利",plain:"事先講好：如果這筆模擬持有賺到某個百分比，就先賣一部分（本站大約 +12% 賣一半），把部分獲利放進現金。",example:"考試進步很多時，先把一部分分數「存起來」。不是說後面一定會跌，只是規則到點就減碼。"},unrealizedPnl:{title:"未實現損益",plain:"股票還沒賣掉時，用現在市價跟平均成本比，算出「帳面上」賺或虧多少。還沒賣掉就不算真正進口袋。",example:"你的遊戲卡市價變貴了，但你還沒賣掉，只是帳面變有錢。真的換成現金才算已實現。"},realizedPnl:{title:"已實現損益",plain:"真的（在模擬裡）賣掉以後，成交價減平均成本，已經記入現金的賺或虧。",example:"把遊戲卡賣掉拿到錢，這筆差額才算已實現。像把零食賣掉，錢已經回到錢包。"},periodPerf:{title:"週／月／季／年績效",plain:"看權益曲線最近一週、約一個月、約一季、約一年漲跌多少。若模擬開張還沒那麼久，就改看「從成立日到現在」。",example:"帳本才成立 1 天，還沒有「一年成績」，就寫成立以來。像學期才開學，先看開學到今天，不要假裝有全年成績。"},sinceInception:{title:"成立以來",plain:"從這本模擬帳開始的那一天算到現在。當歷史不夠一週／月／季／年時，就用這個標籤，避免假裝有更長的成績。",example:"新開的存摺沒有「去年」可以比，就說開戶以來。成績單太短時要老實講。"},danmaku:{title:"彈幕",plain:"像影片上飛過去的短句子。大家可以打很短的話，從螢幕右邊飛到左邊，讓氣氛熱鬧一點。",example:"有人打「今天量比好高！」就會變成一行字飛過畫面。跟下面慢慢看的留言板不一樣，彈幕偏短、偏即時。"},comments:{title:"留言板",plain:"掛在某一支股票卡片下面的討論區。大家可以針對這支股票慢慢寫想法，字數比彈幕多一點。",example:"在 CRWD 卡片下寫「量很大但要注意風險」，之後別人還看得到。像便利貼貼在該股票旁邊。"},reddit:{title:"Reddit",plain:"一個很大的英文網路論壇，裡面有很多討論區（subreddit）。本站只讀公開搜尋結果當「氣氛參考」，不會假裝有留言。",example:"r/stocks、r/wallstreetbets 常有人討論美股。如果網站抓不到（例如被 403 擋住），會老實寫 blocker，而不是編造。"},futu:{title:"富途牛牛",plain:"一款股票 App／平台（也叫 Moomoo）。本站目前多半只能拿到公開新聞搜尋，個股社群評論通常要登入，所以會標明「非社群評論」。",example:"看到「相關公開新聞」區塊，那是新聞標題，不是牛牛圈裡網友的真實留言。"},ptt:{title:"PTT",plain:"台灣很有名的論壇（批踢踢）。本站會搜尋 Stock 看板的公開文章標題當參考。",example:"在 Stock 板搜尋「2330」可能看到營收或標的文。看得到標題與連結，不代表我們同意裡面的看法。"},dcard:{title:"Dcard",plain:"台灣年輕人常用的匿名論壇 App／網站。本站試著搜尋股票相關討論；若被反爬擋住，會老實寫 blocker。",example:"有時 API 回 403，網站就會說「抓不到」，而不是自己編假留言。"},threads:{title:"Threads",plain:"Meta 的短文社群（跟 Instagram 有關）。沒有穩定的公開匿名搜尋 API 時，本站不會假裝有貼文。",example:"如果摘要寫「需登入／SPA」，代表公開抓取失敗，請改看其他來源或本站留言。"},pe:{title:"本益比（PE）",plain:"股價 ÷ 每股盈餘。數字愈小，用「現在賺的錢」來看，股價相對愈不貴（但還要看成長與風險）。沒抓到真實數字就不填。",example:"股價 100 元、一年每股賺 10 元，本益比約 10。像用 10 年賺的錢才回本的粗略尺。"},opMargin:{title:"營益率",plain:"營業利益 ÷ 營收。看「本業做生意」到底賺多少比例，還沒算業外投資。",example:"賣飲料營收 100 元，本業成本後剩 20 元，營益率約 20%。"},grossMargin:{title:"毛利率",plain:"毛利 ÷ 營收。只扣掉進貨／製造成本，還沒扣薪水、租金等營業費用。",example:"進貨 60 元、賣 100 元，毛利 40 元，毛利率 40%。"},foreignInv:{title:"外資",plain:"外國投資機構在台股買賣的總稱。公開資料會公布他們當天買超或賣超多少股。",example:"外資買超 100 萬股，表示外國機構今天淨買進約 100 萬股（≈ 1,000 張）。"},trustInv:{title:"投信",plain:"證券投資信託公司（基金公司）在台股的買賣。常被拿來看「法人」態度。",example:"投信買超代表基金們今天淨買比較多。"},dealerInv:{title:"自營商",plain:"券商用自己的錢買賣股票的部門。三大法人通常指外資＋投信＋自營商。",example:"自營商買超，表示券商自營部門今天淨買。"},maBull:{title:"均線多頭排列",plain:"短均線在長均線上面一層層排好（例如 SMA5>SMA10>SMA20>SMA60），常被看成短中期偏多的技術型態。",example:"像跑步成績：最近 5 天平均比 10 天好、又比 20／60 天好，節奏往上。"},rsi:{title:"RSI",plain:"相對強弱指標，常用 0–100。太高可能短線過熱，太低可能超賣；本站超短線策略看「在 50 以下且往上拐」。",example:"RSI 從 35 升到 42，還在 50 下，像體力表開始回升但還沒過半。"},amplitude:{title:"振幅",plain:"當天最高價與最低價差多少，再除以昨天收盤價。振幅大表示今天價格晃得兇。",example:"昨收 100，今天最高 104、最低 99，振幅約 5%。"},zhang:{title:"張",plain:"台股交易單位：1 張＝1,000 股。看成交量或法人買賣超時，常把「股」換算成「張」比較好讀。",example:"成交 300,000 股＝300 張。本站流動性門檻常寫「>300 張」。"},strategyScreen:{title:"策略選股（邏輯條件）",plain:"像選股軟體一樣：先選一套策略，看清楚每一條條件，再列出今天通過的股票與計算欄位。",example:"選「均線多頭排列」→ 看到 SMA 與量比條件 → 下面出現命中清單。"},xqLike:{title:"XQ／選股軟體風格",plain:"介面模仿常見台股看盤軟體的「策略分類＋條件＋命中數」操作習慣，方便對照；資料來源仍是公開行情，不是對方專有資料庫。",example:"左側點策略、中間看條件、下面看結果——流程很像，數字各自用公開資料算。"},socialDigest:{title:"網友參考（社交摘要）",plain:"把 Reddit、富途等公開來源整理成一天的小摘要給你看氣氛。它不是精準民調，更不是叫你買或賣。",example:"像把走廊上聽到的聊天重點寫在黑板上：有聽到就寫，沒聽到就老实说「今天抓不到」。"}};function n(e,t){const a=mt[e],i=t??(a==null?void 0:a.title)??e;return a?`<a class="term" href="#term-${c(e)}" data-term="${c(e)}">${c(i)}</a>`:c(i)}function c(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Tt(){return`
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
  `}function At(e){const t=e.querySelector("[data-glossary-list]");if(!t)return;const a=window.matchMedia("(min-width: 900px)"),i=()=>{t.querySelectorAll("details.glossary-item").forEach(s=>{a.matches?s.open=!0:s.classList.contains("flash")||(s.open=!1)})};i(),typeof a.addEventListener=="function"?a.addEventListener("change",i):typeof a.addListener=="function"&&a.addListener(i)}function qt(e,t={}){e.querySelectorAll("a.term").forEach(a=>{a.addEventListener("click",i=>{const s=a.getAttribute("data-term");i.preventDefault(),typeof t.beforeScroll=="function"&&t.beforeScroll(s);const l=()=>{const r=document.getElementById(`term-${s}`);r&&(r.tagName==="DETAILS"&&(r.open=!0),r.scrollIntoView({behavior:"smooth",block:"start"}),r.classList.add("flash"),setTimeout(()=>r.classList.remove("flash"),1600))};typeof t.beforeScroll=="function"?requestAnimationFrame(()=>requestAnimationFrame(l)):l()})})}const Pt="./data/paper-portfolio.json";function j(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function Z(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(t)}%`}function ht(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString("zh-TW",{minimumFractionDigits:t,maximumFractionDigits:t})}function vt(e){return e==="USD"?"US$":e==="TWD"?"NT$":""}function U(e,t){if(e==null||Number.isNaN(e))return"—";const a=t==="TWD"?0:2;return`${vt(t)}${ht(e,a)}`}function O(e,t){if(e==null||Number.isNaN(e))return"—";const a=t==="TWD"&&e>=100?0:2;return`${vt(t)}${ht(e,a)}`}function ft(e){return{"screen-buy":"名單新開倉",add:"持續買進",stop:"停損","take-profit":"停利","momentum-break":"動能轉弱","off-list":"離開名單","limit-up-chase":"漲停追價急殺"}[e]||e||""}function H(e){return e?`
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
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">今天還沒有這類成交（模擬）</td></tr>'}function Ct(e,t){return e.length?e.map(a=>{var l;const i=(a.mark-a.avgCost)*a.qty,s=a.avgCost?(a.mark-a.avgCost)/a.avgCost*100:0;return`
      <tr>
        <td><span class="ticker">${c(a.ticker)}</span></td>
        <td class="num">${(l=a.qty)==null?void 0:l.toLocaleString("zh-TW")}</td>
        <td class="num">${O(a.avgCost,t)}</td>
        <td class="num">${O(a.mark,t)}</td>
        <td class="num ${j(i)}">${U(i,t)}</td>
        <td class="num ${j(s)}">${Z(s)}</td>
      </tr>`}).join(""):'<tr><td colspan="6" class="empty-cell">目前沒有持股</td></tr>'}function Nt(e,t,a){const i=t.currency,s=e==="TW"?`${n("twStock","台股")}帳本（NT$）`:`${n("usStock","美股")}帳本（US$）`,l=U(t.startCash,i),r=(a==null?void 0:a.totalPnl)??t.equity-t.startCash,u=(a==null?void 0:a.totalPnlPct)??(t.startCash?(t.equity-t.startCash)/t.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${s}</h3>
      <p class="paper-start">${n("principal","本金")} ${l}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">現金</div>
          <div class="k-val">${U(t.cash,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${n("position","權益（部位＋現金）")}</div>
          <div class="k-val">${U(t.equity,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">總${n("realizedPnl","損益")}</div>
          <div class="k-val ${j(r)}">${U(r,i)}</div>
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
      </div>`}).join(""):'<div class="list-card empty-card">今天還沒有這類成交（模擬）</div>'}function Rt(e,t){return e.length?e.map(a=>{var l;const i=(a.mark-a.avgCost)*a.qty,s=a.avgCost?(a.mark-a.avgCost)/a.avgCost*100:0;return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${c(a.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">股數 ${(l=a.qty)==null?void 0:l.toLocaleString("zh-TW")}</div>
          </div>
          <div style="text-align:right">
            <div class="${j(i)}" style="font-family:var(--mono);font-weight:600">${U(i,t)}</div>
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
    </div>`}function It(e,t){return`
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
      <div class="mobile-list">${Rt(e,t)}</div>
    </div>`}function at(e,t,a,i,s,l){const r=t.currency,u=[...t.trades||[]].sort((m,d)=>m.date<d.date?1:m.date>d.date?-1:0),h=u.filter(m=>m.date===i),o=h.filter(m=>m.side==="BUY"),b=h.filter(m=>m.side==="SELL"),y=u.slice(0,40),g=l;return`
    <div class="paper-panel ${s?"active":""}" id="paper-panel-${e}" role="tabpanel">
      ${Nt(e,t,a)}
      <p class="paper-session-note">${c(i||"—")} · 自 ${c(g)} 累積 · 買進即成交</p>
      ${F(`買 ${i||""}`,o,r)}
      ${F(`賣 ${i||""}`,b,r)}
      ${It(t.positions||[],r)}
      ${F("成交（近 40）",y,r)}
    </div>`}function jt(e){var r,u;if(!e||!e.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${n("paperTrade","模擬")}</h2>
        <p class="paper-missing">還沒有模擬帳本檔案。請在專案執行 <code>npm run paper</code>。</p>
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
    </section>`}function Et(e){const t=e.querySelectorAll(".paper-tab-btn");t.forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.paperTab;t.forEach(s=>{const l=s.dataset.paperTab===i;s.classList.toggle("active",l),s.setAttribute("aria-selected",l?"true":"false")}),e.querySelectorAll(".paper-panel").forEach(s=>{s.classList.toggle("active",s.id===`paper-panel-${i}`)})})})}async function Dt(){try{const e=await fetch(Pt);return e.ok?await e.json():null}catch{return null}}const st={},J="聊天後端尚未接上",Ut=[{id:"local",label:"本站留言"},{id:"reddit",label:"Reddit"},{id:"futu",label:"富途"}],Ot=[{id:"local",label:"本站留言"},{id:"ptt",label:"PTT"},{id:"dcard",label:"Dcard"},{id:"threads",label:"Threads"}];function bt(e,t){const a=String(t||"").toUpperCase();return a==="US"||a==="TW"?a:String(e||"").toUpperCase().endsWith(".TW")?"TW":"US"}function Wt(e){return e==="TW"?Ot:Ut}function gt(e=globalThis.STOCK_SOCIAL_CONFIG||{}){const t=typeof import.meta<"u"&&st?st:{},a=String(e.supabaseUrl||t.VITE_SUPABASE_URL||"").trim(),i=String(e.supabaseAnonKey||t.VITE_SUPABASE_ANON_KEY||"").trim();return{url:a,anon:i}}function S(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function yt(e,t){const a={apikey:t,Authorization:`Bearer ${t}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(i,s=50){const l=`${e}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(i)}&order=created_at.asc&limit=${s}`,r=await fetch(l,{headers:a});if(!r.ok)throw new Error(`comments select ${r.status}`);return r.json()},async insert(i){const s=await fetch(`${e}/rest/v1/comments`,{method:"POST",headers:a,body:JSON.stringify(i)});if(!s.ok){const l=await s.text();throw new Error(`comments insert ${s.status}: ${l}`)}return s.json()}}}function Bt(e,t,a){if(!e||!a)return null;const i=e[t];return Array.isArray(i)&&i.find(s=>String(s.ticker).toUpperCase()===String(a).toUpperCase())||null}function Vt(e,t,{futuMode:a=!1}={}){if(!e)return`<p class="ss-empty">無 ${S(t)}</p>`;const i=[];e.blocker&&i.push(`<p class="ss-digest-blocker">⚠ ${S(e.blocker)}</p>`);const s=e.items||[],l=e.newsRelated||[];if(s.length&&i.push(s.map(r=>{const u=r.url?S(r.url):"#",h=r.score!=null?`<span class="ss-score">▲ ${S(r.score)}</span>`:"",o=r.author?`@${S(r.author)}`:"";return`<article class="ss-digest-item">
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
            <input class="ss-nick" maxlength="24" placeholder="暱稱（可空）" autocomplete="nickname" />
            <textarea class="ss-body" maxlength="${o}" rows="2" placeholder="留言" required></textarea>
            <button type="submit">送出</button>
          </form>
        </div>
        ${d}
      </div>`;e.innerHTML=y?`<div class="ss-thread-bare" data-ticker="${S(t)}">${f}</div>`:`<details class="ss-thread-details"${g}>
      <summary>${S(t)}</summary>
      ${f}
    </details>`;const v=e.querySelector(".ss-thread-status"),k=e.querySelector(".ss-thread-list"),N=e.querySelector(".ss-thread-form"),W={ptt:["ptt","PTT",!1],dcard:["dcard","Dcard",!1],threads:["threads","Threads",!1],reddit:["reddit","Reddit",!1],futu:["futu","富途",!0]};for(const $ of r){if($.id==="local")continue;const q=W[$.id];if(!q)continue;const[L,M,_]=q,et=e.querySelector(`[data-panel="${$.id}"]`);et&&(et.innerHTML=Vt(Bt(s,L,t),M,{futuMode:_}))}const E=e.querySelectorAll(".ss-src-tab"),B=e.querySelectorAll(".ss-src-panel");if(E.forEach($=>{$.addEventListener("click",()=>{const q=$.dataset.src;E.forEach(L=>{const M=L.dataset.src===q;L.classList.toggle("active",M),L.setAttribute("aria-selected",M?"true":"false")}),B.forEach(L=>{const M=L.dataset.panel===q;L.classList.toggle("active",M),L.hidden=!M})})}),!u||!h)return v.textContent=J,v.className="ss-thread-status is-warn",N.querySelectorAll("input,textarea,button").forEach($=>{$.disabled=!0}),k.innerHTML='<li class="ss-empty">後端未接上</li>',{ok:!1,reason:"no-config",market:l};const G=yt(u,h);v.textContent="";let C=!1;async function w(){try{const $=await G.list(t);if(!$.length){k.innerHTML='<li class="ss-empty">尚無留言</li>';return}k.innerHTML=$.map(q=>`<li><strong>${S(q.nickname)}</strong> ${S(q.body)}<span class="meta">${S(new Date(q.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join("")}catch($){v.textContent=`讀取失敗：${$.message}`,v.className="ss-thread-status is-warn"}}N.addEventListener("submit",async $=>{if($.preventDefault(),C)return;const q=(N.querySelector(".ss-nick").value||"訪客").trim().slice(0,24)||"訪客",L=(N.querySelector(".ss-body").value||"").trim().slice(0,o);if(!L)return;C=!0;const M=N.querySelector("button");M.disabled=!0;try{await G.insert({ticker:t,body:L,nickname:q}),N.querySelector(".ss-body").value="",await w()}catch(_){v.textContent=`發送失敗：${_.message}`,v.className="ss-thread-status is-warn"}finally{window.setTimeout(()=>{C=!1,M.disabled=!1},b)}}),w();const P=window.setInterval(w,i.pollIntervalMs||1e4);return{ok:!0,market:l,destroy(){window.clearInterval(P)}}}function it(e,t,a={}){if(!e||!t)return{ok:!1,destroy(){}};const i=a.config||globalThis.STOCK_SOCIAL_CONFIG||{},s=bt(t,a.market||e.getAttribute("data-market")),{url:l,anon:r}=gt(i),u=Math.min(i.commentMaxLen||500,a.maxLen||200),h=i.postCooldownMs||4e3,o=a.title||t,b=a.emptyLine||"尚無訊息",y=a.danmakuLayer||document.querySelector("#ss-danmaku-layer"),g=a.flyToggle||document.querySelector("#ss-danmaku-toggle"),m=()=>!!(g&&g.checked);e.classList.add("chat-shell","ss-thread"),e.dataset.market=s,e.dataset.ticker=t,e.innerHTML=`
    <div class="chat-room-label">${S(o)}</div>
    <div class="ss-thread-status chat-status-line" aria-live="polite"></div>
    <ul class="ss-thread-list chat-messages" aria-label="訊息"></ul>
    <form class="ss-thread-form chat-composer">
      <input class="ss-nick" maxlength="24" placeholder="暱稱（可空）" autocomplete="nickname" />
      <input class="ss-body" maxlength="${u}" placeholder="說點什麼…" required autocomplete="off" />
      <button type="submit" class="chat-send">送出</button>
    </form>
  `;const d=e.querySelector(".ss-thread-status"),f=e.querySelector(".ss-thread-list"),v=e.querySelector(".ss-thread-form");let k=new Set;function N(C){if(!y||!m())return;const w=document.createElement("div");w.className="ss-danmaku-item",w.textContent=C,w.style.top=`${8+Math.random()*42}vh`,w.style.animationDuration="12000ms",y.appendChild(w),window.setTimeout(()=>w.remove(),12200)}if(!l||!r)return d.textContent=J,d.className="ss-thread-status chat-status-line is-warn",v.querySelectorAll("input,button").forEach(C=>{C.disabled=!0}),f.innerHTML=`<li class="ss-empty">${S(b)}</li>`,{ok:!1,reason:"no-config",market:s,destroy(){}};const W=yt(l,r);d.textContent="";let E=!1;async function B(C=!1){try{const w=await W.list(t,80);if(!w.length){f.innerHTML=`<li class="ss-empty">${S(b)}</li>`;return}f.innerHTML=w.map(P=>`<li><span class="nick">${S(P.nickname)}</span>${S(P.body)}<span class="meta">${S(new Date(P.created_at).toLocaleString("zh-TW",{hour12:!1}))}</span></li>`).join(""),f.scrollTop=f.scrollHeight;for(const P of w)k.has(P.id)||(k.add(P.id),C&&N(`${P.nickname}: ${P.body}`));k.size>200&&(k=new Set([...k].slice(-100)))}catch{d.textContent=J,d.className="ss-thread-status chat-status-line is-warn"}}v.addEventListener("submit",async C=>{if(C.preventDefault(),E)return;const w=(v.querySelector(".ss-nick").value||"訪客").trim().slice(0,24)||"訪客",P=(v.querySelector(".ss-body").value||"").trim().slice(0,u);if(!P)return;E=!0;const $=v.querySelector("button");$.disabled=!0;try{await W.insert({ticker:t,body:P,nickname:w}),v.querySelector(".ss-body").value="",await B(!0)}catch{d.textContent="發送失敗",d.className="ss-thread-status chat-status-line is-warn"}finally{window.setTimeout(()=>{E=!1,$.disabled=!1},h)}}),B(!1);const G=window.setInterval(()=>B(!0),i.pollIntervalMs||8e3);return{ok:!0,market:s,ticker:t,destroy(){window.clearInterval(G)}}}function Gt(e=document,t={}){const a=e.querySelectorAll("[data-ticker-comments]"),i=[];return a.forEach(s=>{const l=s.getAttribute("data-ticker-comments")||s.dataset.ticker,r=s.getAttribute("data-market")||void 0;l&&i.push(zt(s,l,{...t,market:r}))}),i}function Ht(e,t){if(!e||!t||e.querySelector("script[data-giscus], iframe.giscus-frame"))return;const a=document.createElement("script");a.src="https://giscus.app/client.js",a.async=!0,a.crossOrigin="anonymous",a.setAttribute("data-giscus","1"),a.setAttribute("data-repo",t.repo||""),a.setAttribute("data-repo-id",t.repoId||""),a.setAttribute("data-category",t.category||"General"),a.setAttribute("data-category-id",t.categoryId||""),a.setAttribute("data-mapping",t.mapping==="pathname"?"pathname":"specific"),a.setAttribute("data-term",t.term||"site-discussion"),a.setAttribute("data-strict","0"),a.setAttribute("data-reactions-enabled","1"),a.setAttribute("data-emit-metadata","0"),a.setAttribute("data-input-position","bottom"),a.setAttribute("data-theme",t.theme||"dark"),a.setAttribute("data-lang",t.lang||"zh-TW"),e.appendChild(a)}function Zt(e="#ss-giscus",t={}){const a=document.querySelector(e);if(!a)return{ok:!1,reason:"missing"};const s=(t.config||globalThis.STOCK_SOCIAL_CONFIG||{}).giscus||{};if(!s.enabled||!s.repoId||!s.categoryId)return a.innerHTML='<p class="ss-chat-status is-warn">Giscus 尚未設定（需 repoId / categoryId）。請見 README。</p>',{ok:!1,reason:"no-config"};const l=a.querySelector(".ss-giscus-host")||a;return Ht(l,{...s,term:s.term||"site-discussion"}),{ok:!0}}function x(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function _t(e){const t=e.manualUrls||[];return t.length?'<p class="ss-digest-sub">手動開啟</p>'+t.slice(0,4).map(a=>`<article class="ss-digest-item"><a href="${x(a)}" target="_blank" rel="noopener noreferrer">${x(a)}</a></article>`).join(""):""}function lt(e){const t=e.score!=null?`<span class="ss-score">▲ ${x(e.score)}</span>`:"",a=e.author?`@${x(e.author)}`:"",i=e.created?x(new Date(e.created).toLocaleString("zh-TW",{hour12:!1})):e.date?x(e.date):"",s=e.via?`<span class="ss-via">${x(e.via)}</span>`:"";return`<article class="ss-digest-item">
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
`)}function de(e,t,a){const i=new Blob([t],{type:a}),s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),2e3)}function pe(e,t){var a,i;(a=e==null?void 0:e.querySelector("[data-xq-copy]"))==null||a.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(t,null,2));const s=e.querySelector("[data-xq-copy]");if(s){const l=s.textContent;s.textContent="已複製",setTimeout(()=>s.textContent=l,1200)}}catch{}}),(i=e==null?void 0:e.querySelector("[data-xq-csv]"))==null||i.addEventListener("click",()=>{var u;const s=(u=e.querySelector(".xq-panel"))==null?void 0:u.getAttribute("data-strategy-id"),l=t.strategies.find(h=>h.id===s);if(!l)return;const r=oe(l);if(!r){alert("此策略今日無命中列可匯出");return}de(`${l.id}-hits.csv`,"\uFEFF"+r,"text/csv;charset=utf-8")})}async function ue(e="#xq-root"){try{const t=await ne();return ce(e,t),{ok:!0,data:t}}catch(t){const a=document.querySelector(e);return a&&(a.innerHTML=`<div class="xq-empty"><p>無法載入策略選股（${c(t.message)}）。請確認已執行 <code>npm run strategies</code>。</p></div>`),{ok:!1,error:t}}}const me="./data/latest.json";function A(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function T(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(t)}%`}function R(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString("zh-TW",{minimumFractionDigits:t,maximumFractionDigits:t})}function z(e,t){if(e==null||Number.isNaN(e))return"—";const a=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"$":t==="TWD"?"NT$":""}${R(e,a)}`}function he(e){try{return new Date(e).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+"（台北）"}catch{return e}}function Q(e){const t=e.aboveSma20?`<span class="badge sma-on">${n("sma20","SMA20↑")}</span>`:`<span class="badge sma-off">${n("sma20","SMA20↓")}</span>`,a=e.aboveSma50?`<span class="badge sma-on">${n("sma50","SMA50↑")}</span>`:`<span class="badge sma-off">${n("sma50","SMA50↓")}</span>`;return t+a}function tt(e){return e!=null&&e.length?e.map(t=>{const a=String(t);return a==="A"?`<span class="badge screen">${n("screenA","A")}</span>`:a==="B"?`<span class="badge screen">${n("screenB","B")}</span>`:a==="C"?`<span class="badge screen">${n("screenC","C")}</span>`:a==="observe"?'<span class="badge screen">觀察</span>':`<span class="badge screen">${c(a)}</span>`}).join(""):""}function ve(e){var i,s,l,r,u;const t=[],a=(h,o,b)=>{if(!b)return;const y=b.incomplete,g=b.value!=null?R(b.value,2):y?"資料不全":"—",m=b.dayPct!=null?`<div class="pct ${A(b.dayPct)}">${T(b.dayPct)}</div>`:"",d=b.session==="intraday"?` · ${n("intraday","盤中")}`:"";t.push(`
      <div class="index-chip ${y?"incomplete":""}">
        <div class="label">${o}${d}</div>
        <div class="value">${g}</div>
        ${m}
      </div>
    `)};if(a("tw",n("taiex",((i=e.tw)==null?void 0:i.name)||"台灣加權 TAIEX"),e.tw),a("otc",n("otc",((s=e.otc)==null?void 0:s.name)||"櫃買"),e.otc),a("spx",n("spx",((l=e.spx)==null?void 0:l.name)||"S&P 500"),e.spx),a("nasdaq",n("nasdaq",((r=e.nasdaq)==null?void 0:r.name)||"Nasdaq"),e.nasdaq),a("sox",n("sox",((u=e.sox)==null?void 0:u.name)||"SOX"),e.sox),e.usdTwd){const h=e.usdTwd,o=h.taipeiClose??h.yahoo;t.push(`
      <div class="index-chip">
        <div class="label">${n("usdtwd","USD/TWD")}</div>
        <div class="value">${R(o,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          台北收 ${h.taipeiClose!=null?R(h.taipeiClose,3):"—"}
          · Yahoo ${h.yahoo!=null?R(h.yahoo,3):"—"}
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
        <div class="metric"><div class="m-label">${n("volRatio","量比")}</div><div class="m-val">${e.volRatio!=null?R(e.volRatio,2)+"×":"—"}</div></div>
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
        <td class="num">${t.volRatio!=null?R(t.volRatio,2)+"×":"—"}</td>
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
          <span>${n("volRatio","量比")} ${t.volRatio!=null?R(t.volRatio,2)+"×":"—"}</span>
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
          <div class="row"><span>${n("parity","隱含價")}</span>　<strong>${e.impliedUsdTaipeiFx!=null?R(e.impliedUsdTaipeiFx,2):"—"}</strong></div>
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
  `}function $e(){return'<div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>'}function X(e){return e?e.market==="TW"||e.market==="US"?e.market:String(e.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function ot(e,t){const a=new Set,i=[],s=l=>{if(!(l!=null&&l.ticker)||a.has(l.ticker))return;const r=X(l);t&&r!==t||(a.add(l.ticker),i.push({ticker:l.ticker,market:r,name:l.name||""}))};return(e.top5||[]).forEach(s),(!t||t==="TW")&&(e.tw||[]).forEach(s),(!t||t==="US")&&(e.us||[]).forEach(s),i}function ke(e){return e==="TW"?"__TW__":"__US__"}function dt(e,t){return e.length?`<div class="top5-grid">${e.map((a,i)=>fe(a,i+1)).join("")}</div>`:`<div class="empty-state">${c(t)} Top 尚無</div>`}function Se(e){const t=ot(e,"US"),a=ot(e,"TW"),i=(s,l)=>s.map((r,u)=>`<button type="button" class="chat-chip${u===0?" active":""}" data-ticker="${c(r.ticker)}" data-market="${l}" hidden>${c(r.ticker)}</button>`).join("");return`
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
      </button>`}).join("")}function Te(e,t){const a=e.top5||[],i=e.us||[],s=e.tw||[],l=c((e.disclaimer||"本站內容非投資建議。").replace(/^本站內容為依公開行情的數學篩選候選，不是投資建議，亦不保證獲利。$/,"本站只是用公開行情算出「相對有機會觀察的名單」，不會保證賺錢。"));return`
    ${$e()}

    <header class="site-chrome">
      <div class="chrome-brand">
        <div class="brand-mark" aria-hidden="true"></div>
        <div class="brand-text">
          <h1>${n("screening","每日數學選股")}</h1>
          <p class="brand-meta">資料 ${he(e.asOf)}</p>
        </div>
      </div>
      <details class="disclaimer-fold">
        <summary>${n("notAdvice","非投資建議")} · 紅漲綠跌</summary>
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
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${n("usStock","美股")}（${i.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${n("twStock","台股")}（${s.length}）</button>
        </div>
        ${ve(e.indices||{})}
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
          <p class="tz-note">紅漲綠跌 · 模擬非真實成交 · 社交僅供參考</p>
        </details>
      </div>
    </main>

    <nav class="nav-bottom" aria-label="主要導覽">
      ${ut("mobile")}
    </nav>

    <p class="site-footer">紅漲綠跌 · 點藍字看解釋</p>
  `}function Ae(e,t){e.querySelectorAll(".nav-item").forEach(a=>{const i=a.dataset.nav===t;a.classList.toggle("is-active",i),a.setAttribute("aria-current",i?"page":"false")})}function qe(e,t,{updateHash:a=!0,scrollTop:i=!0}={}){const s=wt[t]||"today";if(e.querySelectorAll(".view").forEach(l=>{const r=l.dataset.view===s;l.hidden=!r,l.classList.toggle("is-active",r)}),Ae(e,s),a){const l=`#${s}`;location.hash!==l&&history.replaceState(null,"",l)}return i&&window.scrollTo(0,0),s}function Pe(e){const t=(a,i)=>qe(e,a,i);return e.querySelectorAll(".nav-item").forEach(a=>{a.addEventListener("click",()=>t(a.dataset.nav))}),e.querySelectorAll("[data-jump]").forEach(a=>{a.addEventListener("click",()=>t(a.dataset.jump))}),window.addEventListener("hashchange",()=>{t(pt(),{updateHash:!1})}),t(pt(),{updateHash:!0,scrollTop:!1}),{go:t}}function Le(e){const t=e.querySelectorAll(".tab-btn");t.forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.tab;t.forEach(s=>{const l=s.dataset.tab===i;s.classList.toggle("active",l),s.setAttribute("aria-selected",l?"true":"false")}),e.querySelectorAll(".panel").forEach(s=>{s.classList.toggle("active",s.id===`panel-${i}`)})})})}function Ce(e,t,{config:a,digest:i}={}){const s=e.querySelector("#chat-room");if(!s)return;const l=s.querySelector("#ss-chat-mount"),r=s.querySelectorAll(".chat-mkt"),u=s.querySelectorAll("[data-chat-mode]");let h=null,o="US",b="lobby";const y=()=>{s.querySelectorAll(".chat-chip-row").forEach(m=>{const d=b==="ticker"&&m.getAttribute("data-chip-market")===o;if(m.hidden=!d,d){const f=[...m.querySelectorAll(".chat-chip")];f.forEach(v=>{v.hidden=!1}),f.length&&!f.some(v=>v.classList.contains("active"))&&f[0].classList.add("active")}})},g=()=>{if(!l)return;if(h!=null&&h.destroy&&h.destroy(),b==="lobby"){const f=ke(o);h=it(l,f,{config:a,market:o,title:o==="TW"?"台股大廳":"美股大廳",emptyLine:"尚無訊息",maxLen:80});return}const m=s.querySelector(`.chat-chip-row[data-chip-market="${o}"]`),d=(m==null?void 0:m.querySelector(".chat-chip.active"))||(m==null?void 0:m.querySelector(".chat-chip"));if(!d){l.innerHTML='<p class="chat-empty">此市場暫無標的</p>',h={destroy(){}};return}h=it(l,d.dataset.ticker,{config:a,market:o,title:d.dataset.ticker,emptyLine:"尚無留言"})};r.forEach(m=>{m.addEventListener("click",()=>{o=m.dataset.chatMarket,s.dataset.market=o,r.forEach(f=>{const v=f===m;f.classList.toggle("active",v),f.setAttribute("aria-selected",v?"true":"false")});const d=s.querySelector(`.chat-chip-row[data-chip-market="${o}"]`);d==null||d.querySelectorAll(".chat-chip").forEach((f,v)=>f.classList.toggle("active",v===0)),y(),g()})}),u.forEach(m=>{m.addEventListener("click",()=>{b=m.dataset.chatMode,s.dataset.mode=b,u.forEach(d=>{const f=d===m;d.classList.toggle("active",f),d.setAttribute("aria-selected",f?"true":"false")}),y(),g()})}),s.querySelectorAll(".chat-chip").forEach(m=>{m.addEventListener("click",()=>{const d=m.closest(".chat-chip-row");d==null||d.querySelectorAll(".chat-chip").forEach(f=>f.classList.toggle("active",f===m)),b==="ticker"&&g()})}),y(),g()}async function Ne(){const e=document.getElementById("app");try{const t=await fetch(me);if(!t.ok)throw new Error(`HTTP ${t.status}`);const a=await t.json(),i=await Dt();e.innerHTML=Te(a,i);const s=Pe(e);Le(e),Et(e),At(e),qt(e,{beforeScroll(){s.go("help",{updateHash:!0,scrollTop:!1})}}),await ue("#xq-root");let l=null;const r=await Kt("#ss-social-digest",I.socialDigestUrl);if(r!=null&&r.ok)l=r.data;else try{l=await $t(I.socialDigestUrl)}catch{l=null}Ce(e,a,{config:I,digest:l}),Gt(e,{config:I,digest:l}),Zt("#ss-giscus",{config:I})}catch(t){e.innerHTML=`<div class="error">無法載入資料（${c(t.message)}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。</div>`}}Ne();
