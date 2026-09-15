/** Kid-friendly glossary: id -> { title, plain, example } */
export const GLOSSARY = {
  dayPct: {
    title: "日漲跌",
    plain: "就是「今天這支股票的價錢，比起昨天收盤時，漲了還是跌了多少」。用百分比表示，比較好跟其他股票比。",
    example: "昨天收盤 100 元，今天收盤 103 元，日漲跌就是 +3%。像考試分數從 100 變成 103，多了 3 分。",
  },
  pct5d: {
    title: "5 日漲跌",
    plain: "看最近大約一週（5 個交易日）這支股票總共漲了或跌了多少，不是只看今天。",
    example: "禮拜一 100 元，到這禮拜五變成 110 元，5 日大約就是 +10%。像一週零用錢從 100 變成 110。",
  },
  pct1m: {
    title: "約 1 月漲跌",
    plain: "看最近大約一個月（常算 21 個交易日）這支股票漲跌多少，用來看比較長一點的趨勢。",
    example: "一個月前 200 元，現在 220 元，約 1 月就是 +10%。像身高一個月長高一點，要看整段變化。",
  },
  rs: {
    title: "相對強度（RS）",
    plain: "把「這支股票今天的漲跌」跟「整個市場大盤今天的漲跌」相減。正的表示它比大盤更強（人家跌它比較不跌，或人家漲它漲更多）。",
    example: "大盤今天 −1%，某股票 +2%，RS 大約是 +3 個百分點。像全班平均考 60 分，你考 80 分，你比班級平均強。",
  },
  priorClose: {
    title: "前收漲幅",
    plain: "用「上一個完整交易日收盤價」算出來的漲跌幅度。美股若還在盤中，有時會另外標前一天收盤的表現。",
    example: "週一收盤比週五收盤漲了 13%，就說前收漲幅約 +13%。像昨天整場比賽的最終比分，不是今天還沒打完的分數。",
  },
  volRatio: {
    title: "量比",
    plain: "今天成交的「張數／股數」是不是比平常多。算法大概是：今天成交量 ÷ 最近約 20 天平均成交量。數字越大，表示今天很多人在買賣。",
    example: "平常每天成交 100 萬股，今天 300 萬股，量比約 3 倍。像平常教室很安靜，今天突然擠滿人在討論。",
  },
  sma20: {
    title: "SMA20（20 日均線）",
    plain: "把最近 20 個交易日的收盤價加起來除以 20，得到一條「平滑後的平均價」。股價在均線上面，常被看成最近偏強；在下面常被看成偏弱。",
    example: "最近 20 天平均價 50 元，今天股價 55 元，就是站上 SMA20。像你的體重比最近 20 天平均還高一點。",
  },
  sma50: {
    title: "SMA50（50 日均線）",
    plain: "跟 SMA20 一樣是平均價，但用更長的 50 個交易日，看比較中期的方向。",
    example: "50 天平均 100 元，現在股價 90 元，就是在 SMA50 下面。像月考平均，比段考平均更能看出一陣子的狀況。",
  },
  screenA: {
    title: "篩選 A（動能／相對強度）",
    plain: "用數學檢查：這支股票最近是不是漲得比大盤好、短中期動能如何、有沒有站上均線。通過的才比較容易被挑進名單。",
    example: "某股今天比大盤強很多，又站上 SMA20／SMA50，就可能通過篩選 A。像短跑又比同學快、成績又在平均之上。",
  },
  screenB: {
    title: "篩選 B（量能）",
    plain: "檢查今天成交量是不是明顯比平常大（量比偏高）。量很大有時代表很多人注意，但也可能波動更大。",
    example: "量比 14 倍表示今天成交大約是平常的 14 倍。像學校平時很少人買某樣零食，今天突然大排長龍。",
  },
  screenC: {
    title: "篩選 C（估值）",
    plain: "想用本益比之類「貴不貴」的數字來幫忙選股。如果當天抓不到可靠資料，這個篩選就會跳過，避免亂填數字。",
    example: "本益比像「用幾年賺的錢才回本」的粗略尺。沒有尺就先不量，不要瞎猜。",
  },
  taiex: {
    title: "台灣加權（TAIEX）",
    plain: "把台灣上市很多股票的表現加總做成一個大分數，用來代表「台股整體」今天大概漲還是跌。",
    example: "加權今天 −0.77%，表示整體台股平均大概跌了一點點。像全校平均分數今天比昨天低一點。",
  },
  otc: {
    title: "櫃買",
    plain: "台灣「上櫃」公司的市場（比較多中小型公司）。櫃買指數用來看這群股票整體漲跌。",
    example: "上市像大學部大隊，櫃買像另一個年級隊。兩邊可以分開看今天誰比較強。",
  },
  spx: {
    title: "S&P 500",
    plain: "美國 500 家大型公司組成的指數，常被拿來代表「美股大盤」。",
    example: "S&P 500 跌 0.5%，常被說成美股大盤今天偏弱。像美國大型公司班級的平均分數。",
  },
  nasdaq: {
    title: "Nasdaq（那斯達克）",
    plain: "美國一個重要股市指數，裡面很多科技公司，常被用來觀察科技股整體氣氛。",
    example: "Nasdaq 大跌時，很多科技股也可能一起抖。像科技社社團活動特別熱絡或特別冷清的溫度計。",
  },
  sox: {
    title: "SOX（費半）",
    plain: "美國半導體（做晶片）公司的指數。半導體好不好，常常影響台積電供應鏈的氣氛。",
    example: "SOX 大跌，常常代表晶片相關股票今天整體承壓。像「晶片班」今天考試普遍不理想。",
  },
  usdtwd: {
    title: "USD/TWD（美金兌台幣）",
    plain: "1 美元可以換多少台幣。數字變大，常表示台幣變弱（同樣 1 美元換到更多台幣）；數字變小則相反。",
    example: "匯率 32，表示 1 美元約換 32 元台幣。你要買 10 美元零食，大約要付 320 元台幣。",
  },
  adr: {
    title: "ADR",
    plain: "美國存託憑證：讓投資人在美國市場買賣「外國公司」的股票憑證。例如台積電在美國有 TSM 這個 ADR。",
    example: "你在美國超市買「台灣零食的美國包裝版」。東西本質相近，但包裝市場不同，價錢也可能不太一樣。",
  },
  parity: {
    title: "平價／隱含價",
    plain: "用台股價格、換股比例和匯率，算出「如果完全公平換算，ADR 大概該是多少美元」。拿來跟實際 ADR 價比較。",
    example: "5 股台積電 ÷ 匯率，算出 ADR 理論價約 374 美元。像用匯率把台幣玩具價換算成美元標價。",
  },
  premium: {
    title: "溢價",
    plain: "實際市價比「換算後的理論價」還貴多少。正的溢價表示買 ADR 比照公式換算更貴；負的則比較便宜（折價）。",
    example: "理論 374 美元，市價 416 美元，溢價大約一成多。像同樣便當，車站賣得比學校社辦貴。",
  },
  adsRatio: {
    title: "換股比（ADS 比例）",
    plain: "一張 ADR 對應幾股本地普通股。台積電常見是 1 股 ADR＝5 股台灣普通股，但要以官方公告為準。",
    example: "比例 5:1 表示 1 個美國存託憑證背後約有 5 股台股。像 1 盒積木裡固定裝 5 小塊。",
  },
  limitUp: {
    title: "漲停",
    plain: "台股對一天最多能漲多少有限制（一般股票常見約 10%）。碰到上限就叫漲停，常常買不到或很難成交。",
    example: "股票從 100 元漲到約 110 元就可能漲停。像遊戲一天經驗值有上限，滿了就不能再加。",
  },
  momentum: {
    title: "動能",
    plain: "看價格最近是不是繼續往同一方向跑（例如連續幾天偏強）。這是數學觀察，不是保證明天還會這樣。",
    example: "球正在往前滾而且愈滾愈快，就說動能強。但滾到一半也可能停下或轉向。",
  },
  ticker: {
    title: "股票代碼（Ticker）",
    plain: "每支股票的簡短代號，方便電腦與市場辨認。美股多用英文字母，台股多用數字。",
    example: "AAPL 是蘋果，2330 是台積電。像學校學號，用來點名不會搞混。",
  },
  index: {
    title: "指數",
    plain: "把很多股票包成一個「總成績單」，用來代表某一市場或產業整體表現。",
    example: "加權指數、S&P 500 都是指數。像全班平均分數，不是某一個同學的分數。",
  },
  screening: {
    title: "數學選股／篩選",
    plain: "用事先講好的計算規則（漲跌、跟大盤比、均線、成交量等）自動挑出通過條件的股票，而不是靠感覺。",
    example: "規則：要比大盤強、量比要高。通過的進名單。像用尺量身高，過線的才能進籃球隊候補。",
  },
  notAdvice: {
    title: "不是投資建議",
    plain: "這個網站只是把公開行情算出來給你看。它不會保證賺錢，也不能代替你自己做決定。",
    example: "像天氣預報說可能下雨，你仍要自己決定要不要帶傘。看完數字也不等於一定要買。",
  },
  intraday: {
    title: "盤中",
    plain: "股市還在交易、價格還會一直變動的時候。跟「收盤」（今天交易結束後的最終價）不一樣。",
    example: "考試還沒結束，分數還可能改；收盤像交卷後的最終分數。",
  },
  twStock: {
    title: "台股",
    plain: "在台灣證券市場交易的股票，價錢多用新台幣計價。",
    example: "2330 台積電、2308 台達電都是台股。",
  },
  usStock: {
    title: "美股",
    plain: "在美國市場交易的股票，價錢多用美元計價。",
    example: "AAPL、NVDA、CRWD 都是美股。",
  },
  paperTrade: {
    title: "模擬交易",
    plain: "用公開行情的價格「假裝」買賣，把規則跑一遍看成績。沒有真的把錢交給券商，所以不是真實成交。",
    example: "像用假錢玩大富翁：規則跟算分是真的，但口袋裡的零用錢沒有真的拿去買股票。",
  },
  principal: {
    title: "本金",
    plain: "一開始放進這個模擬帳本的錢。台股帳從 300 萬元台幣開始，美股帳從 10 萬美元開始。",
    example: "你帶 100 元去福利社，這 100 元就是本金。後來錢包變 90 或 120，都還是從這筆本金算起。",
  },
  position: {
    title: "部位",
    plain: "現在帳本裡「持有多少股票」。部位市值＝股數 × 現在價格。再加上現金，就是這本帳的權益。",
    example: "買了 1000 股、一股市價 50 元，部位大約 5 萬元。像背包裡現在裝了幾包零食、值多少錢。",
  },
  stopLoss: {
    title: "停損",
    plain: "事先講好：如果這筆模擬持有虧到某個百分比，就全部賣掉，避免虧更多。本站規則是未實現大約 −3%。",
    example: "遊戲裡血量低於 3 格就先撤退，不要硬打到歸零。這是保護本金的數學規則，不是保證以後不會虧。",
  },
  takeProfit: {
    title: "停利",
    plain: "事先講好：如果這筆模擬持有賺到某個百分比，就先賣一部分（本站大約 +12% 賣一半），把部分獲利放進現金。",
    example: "考試進步很多時，先把一部分分數「存起來」。不是說後面一定會跌，只是規則到點就減碼。",
  },
  unrealizedPnl: {
    title: "未實現損益",
    plain: "股票還沒賣掉時，用現在市價跟平均成本比，算出「帳面上」賺或虧多少。還沒賣掉就不算真正進口袋。",
    example: "你的遊戲卡市價變貴了，但你還沒賣掉，只是帳面變有錢。真的換成現金才算已實現。",
  },
  realizedPnl: {
    title: "已實現損益",
    plain: "真的（在模擬裡）賣掉以後，成交價減平均成本，已經記入現金的賺或虧。",
    example: "把遊戲卡賣掉拿到錢，這筆差額才算已實現。像把零食賣掉，錢已經回到錢包。",
  },
  periodPerf: {
    title: "週／月／季／年績效",
    plain: "看權益曲線最近一週、約一個月、約一季、約一年漲跌多少。若模擬開張還沒那麼久，就改看「從成立日到現在」。",
    example: "帳本才成立 1 天，還沒有「一年成績」，就寫成立以來。像學期才開學，先看開學到今天，不要假裝有全年成績。",
  },
  sinceInception: {
    title: "成立以來",
    plain: "從這本模擬帳開始的那一天算到現在。當歷史不夠一週／月／季／年時，就用這個標籤，避免假裝有更長的成績。",
    example: "新開的存摺沒有「去年」可以比，就說開戶以來。成績單太短時要老實講。",
  },
  danmaku: {
    title: "彈幕",
    plain: "像影片上飛過去的短句子。大家可以打很短的話，從螢幕右邊飛到左邊，讓氣氛熱鬧一點。",
    example: "有人打「今天量比好高！」就會變成一行字飛過畫面。跟下面慢慢看的留言板不一樣，彈幕偏短、偏即時。",
  },
  comments: {
    title: "留言板",
    plain: "掛在某一支股票卡片下面的討論區。大家可以針對這支股票慢慢寫想法，字數比彈幕多一點。",
    example: "在 CRWD 卡片下寫「量很大但要注意風險」，之後別人還看得到。像便利貼貼在該股票旁邊。",
  },
  reddit: {
    title: "Reddit",
    plain: "一個很大的英文網路論壇，裡面有很多討論區（subreddit）。本站只讀公開搜尋結果當「氣氛參考」，不會假裝有留言。",
    example: "r/stocks、r/wallstreetbets 常有人討論美股。如果網站抓不到（例如被 403 擋住），會老實寫 blocker，而不是編造。",
  },
  futu: {
    title: "富途牛牛",
    plain: "一款股票 App／平台（也叫 Moomoo）。本站目前多半只能拿到公開新聞搜尋，個股社群評論通常要登入，所以會標明「非社群評論」。",
    example: "看到「相關公開新聞」區塊，那是新聞標題，不是牛牛圈裡網友的真實留言。",
  },
  ptt: {
    title: "PTT",
    plain: "台灣很有名的論壇（批踢踢）。本站會搜尋 Stock、HateFinance 等看板的公開文章標題當參考。",
    example: "在 Stock 板搜尋「2330」可能看到營收或標的文。看得到標題與連結，不代表我們同意裡面的看法。",
  },
  dcard: {
    title: "Dcard",
    plain: "台灣年輕人常用的匿名論壇 App／網站。本站試著搜尋股票相關討論；若被反爬擋住，會老實寫 blocker。",
    example: "有時 API 回 403，網站就會說「抓不到」，而不是自己編假留言。",
  },
  threads: {
    title: "Threads",
    plain: "Meta 的短文社群（跟 Instagram 有關）。沒有穩定的公開匿名搜尋 API 時，本站不會假裝有貼文。",
    example: "如果摘要寫「需登入／SPA」，代表公開抓取失敗，請改看其他來源或本站留言。",
  },
  socialDigest: {
    title: "網友參考（社交摘要）",
    plain: "把 Reddit、富途等公開來源整理成一天的小摘要給你看氣氛。它不是精準民調，更不是叫你買或賣。",
    example: "像把走廊上聽到的聊天重點寫在黑板上：有聽到就寫，沒聽到就老实说「今天抓不到」。",
  },
};

export function term(id, label) {
  const g = GLOSSARY[id];
  const text = label ?? g?.title ?? id;
  if (!g) return escapeHtml(text);
  return `<a class="term" href="#term-${escapeHtml(id)}" data-term="${escapeHtml(id)}">${escapeHtml(text)}</a>`;
}

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderGlossarySection() {
  const items = Object.entries(GLOSSARY)
    .map(
      ([id, g]) => `
      <article class="glossary-item" id="term-${escapeHtml(id)}">
        <h3>${escapeHtml(g.title)}</h3>
        <p class="g-plain">${escapeHtml(g.plain)}</p>
        <p class="g-example"><strong>例子：</strong>${escapeHtml(g.example)}</p>
      </article>`
    )
    .join("");
  return `
    <section class="section glossary-section" id="glossary">
      <h2 class="section-title">名詞小辭典（點頁面上的藍字會跳到這裡）</h2>
      <p class="glossary-intro">這裡用最白話的方式解釋網站出現的詞。看不懂就點連結，再看例子。</p>
      <div class="glossary-grid">${items}</div>
    </section>
  `;
}

export function bindTermLinks(root) {
  root.querySelectorAll("a.term").forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("data-term");
      const target = document.getElementById(`term-${id}`);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.classList.add("flash");
      setTimeout(() => target.classList.remove("flash"), 1600);
    });
  });
}
