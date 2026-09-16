/** Professional finance glossary: id -> { title, plain, example? } */
export const GLOSSARY = {
  dayPct: {
    title: "日漲跌",
    plain: "相對前一交易日收盤價的漲跌幅（百分比）。",
    example: "昨收 100、今收 103，日漲跌為 +3%。",
  },
  pct5d: {
    title: "5 日漲跌",
    plain: "近 5 個交易日的累積漲跌幅，用於觀察短線動能。",
    example: "5 日前收 100、現價 110，約為 +10%。",
  },
  pct1m: {
    title: "約 1 月漲跌",
    plain: "近約 21 個交易日的累積漲跌幅，用於觀察中短線趨勢。",
    example: "約一個月前 200、現價 220，約為 +10%。",
  },
  rs: {
    title: "相對強度（RS）",
    plain: "標的當日漲跌幅減去對應大盤當日漲跌幅（百分點）。正值表示相對大盤偏強。",
    example: "大盤 −1%、個股 +2%，RS 約為 +3 個百分點。",
  },
  priorClose: {
    title: "前收漲幅",
    plain: "以上一完整交易日收盤價計算的漲跌幅。美股盤中時可對照前一日收盤表現。",
    example: "週一收盤相對週五收盤上漲 13%，即前收漲幅約 +13%。",
  },
  volRatio: {
    title: "量比",
    plain: "當日成交量相對近約 20 日平均成交量的倍數。數值愈高，表示當日成交相對活躍。",
    example: "均量 100 萬股、今日 300 萬股，量比約 3 倍。",
  },
  sma20: {
    title: "SMA20（20 日均線）",
    plain: "近 20 個交易日收盤價的算術平均。股價位於均線上方，常解讀為短線偏多；下方則偏空。",
    example: "SMA20 為 50、現價 55，即站上 20 日均線。",
  },
  sma50: {
    title: "SMA50（50 日均線）",
    plain: "近 50 個交易日收盤價平均，用於觀察中期趨勢。",
    example: "SMA50 為 100、現價 90，即位於 50 日均線下方。",
  },
  screenA: {
    title: "篩選 A（動能／相對強度）",
    plain: "依相對大盤表現、短中期動能與是否站上均線等條件篩選標的。",
    example: "相對大盤偏強且站上 SMA20／SMA50 者，較可能通過篩選 A。",
  },
  screenB: {
    title: "篩選 B（量能）",
    plain: "檢查當日成交量是否明顯高於均量（量比偏高）。量能放大可能伴隨波動擴大。",
    example: "量比 14 表示當日成交約為均量的 14 倍。",
  },
  screenC: {
    title: "篩選 C（估值）",
    plain: "以本益比等估值指標輔助篩選。若當日無法取得可靠資料則略過，不填入估計值。",
    example: "本益比可粗略理解為「以目前盈餘回本所需年數」；缺資料則不納入計算。",
  },
  taiex: {
    title: "台灣加權（TAIEX）",
    plain: "台灣證券交易所加權股價指數，反映上市股票整體表現。",
    example: "加權指數日跌 0.77%，表示上市股票整體偏弱。",
  },
  otc: {
    title: "櫃買",
    plain: "證券櫃檯買賣中心市場（上櫃），指數反映上櫃股票整體表現。",
    example: "櫃買指數與加權指數可分開觀察不同市值層級。",
  },
  spx: {
    title: "S&P 500",
    plain: "美國 500 家大型企業組成的股價指數，常作為美股大盤指標。",
    example: "S&P 500 跌 0.5%，通常解讀為美股大盤偏弱。",
  },
  nasdaq: {
    title: "Nasdaq（那斯達克）",
    plain: "美國那斯達克綜合指數，科技股權重較高，常用於觀察科技股氣氛。",
    example: "Nasdaq 明顯下跌時，科技相關個股常同步承壓。",
  },
  sox: {
    title: "SOX（費半）",
    plain: "費城半導體指數，反映美國半導體類股表現，常影響台股供應鏈氣氛。",
    example: "SOX 下跌，通常代表半導體相關股票整體承壓。",
  },
  usdtwd: {
    title: "USD/TWD（美金兌台幣）",
    plain: "1 美元可兌換的新台幣金額。數值上升通常表示台幣相對走弱。",
    example: "匯率 32 表示 1 美元約兌 32 元新台幣。",
  },
  adr: {
    title: "ADR",
    plain: "美國存託憑證：在美國市場交易之外國公司股權憑證。例如台積電 ADR 代碼為 TSM。",
    example: "TSM 為台積電在美國市場的存託憑證。",
  },
  parity: {
    title: "平價／隱含價",
    plain: "依本地股價、換股比例與匯率換算之 ADR 理論價格，可與市價比較溢折價。",
    example: "以台股價與匯率換算得 ADR 理論價約 374 美元。",
  },
  premium: {
    title: "溢價",
    plain: "市價相對理論平價的偏離幅度。正值為溢價，負值為折價。",
    example: "理論 374、市價 416，溢價約一成以上。",
  },
  adsRatio: {
    title: "換股比（ADS 比例）",
    plain: "一單位 ADR 對應之本地普通股股數。實際比例以發行機構公告為準。",
    example: "常見 5:1 表示 1 股 ADR 約對應 5 股台股普通股。",
  },
  limitUp: {
    title: "漲停",
    plain: "台股單日漲幅上限（一般股票常見約 10%）。觸及上限稱漲停，流動性可能受限。",
    example: "自 100 元漲至約 110 元即可能觸及漲停。",
  },
  momentum: {
    title: "動能",
    plain: "價格沿同一方向延續的強度（例如連續偏強）。屬量化觀察，不保證後續方向。",
    example: "短線連續上漲且相對大盤偏強，可視為動能偏多。",
  },
  ticker: {
    title: "股票代碼（Ticker）",
    plain: "市場用以識別標的之代碼。美股多為英文字母，台股多為數字。",
    example: "AAPL 為蘋果；2330 為台積電。",
  },
  index: {
    title: "指數",
    plain: "依一籃子成分股編製的綜合指標，用以代表市場或產業整體表現。",
    example: "台灣加權、S&P 500 皆為市場指數。",
  },
  screening: {
    title: "數學選股／篩選",
    plain: "依預設量化條件（漲跌、相對強度、均線、成交量等）篩出通過條件的標的。",
    example: "條件可含相對大盤偏強、量比達標等；通過者列入當日名單。",
  },
  notAdvice: {
    title: "非投資建議",
    plain: "本站僅呈現公開行情之量化篩選結果與模擬績效，不構成投資建議，亦不保證獲利。",
    example: "投資涉及風險，資訊僅供參考，非投資建議。",
  },
  intraday: {
    title: "盤中",
    plain: "市場仍在交易、價格持續變動之時段，有別於收盤後的最終價。",
    example: "盤中報價可能與收盤價不同。",
  },
  twStock: {
    title: "台股",
    plain: "於台灣證券市場交易之股票，通常以新台幣計價。",
    example: "2330 台積電、2308 台達電屬台股。",
  },
  usStock: {
    title: "美股",
    plain: "於美國市場交易之股票，通常以美元計價。",
    example: "AAPL、NVDA、CRWD 屬美股。",
  },
  paperTrade: {
    title: "模擬交易",
    plain: "累積模擬帳戶：自指定日起依 latest.json 標的價假設成交，帳本不每日重置。非真實券商委託。",
    example: "規則與績效計算比照實盤邏輯，但不涉及真實資金。",
  },
  principal: {
    title: "本金",
    plain: "該市場模擬帳之起始資金。台股帳 NT$3,000,000；美股帳 US$100,000（兩帳獨立）。",
    example: "績效以起始本金為基準計算權益變化。",
  },
  position: {
    title: "部位",
    plain: "帳本目前持有之股票。部位市值＝股數 × 市價；加上現金為該帳權益。",
    example: "持有 1,000 股、市價 50 元，部位市值約 5 萬元。",
  },
  stopLoss: {
    title: "停損",
    plain: "未實現虧損達預設比例時全部賣出。本站規則約為 −3%。",
    example: "持倉未實現約 −3% 時觸發全數停損。",
  },
  takeProfit: {
    title: "停利",
    plain: "未實現獲利達預設比例時減碼。本站約於 +12% 賣出一半。",
    example: "持倉未實現約 +12% 時先賣一半。",
  },
  unrealizedPnl: {
    title: "未實現損益",
    plain: "尚未平倉時，以市價相對平均成本計算之帳面損益。",
    example: "成本 100、市價 110 且尚未賣出，為未實現獲利。",
  },
  realizedPnl: {
    title: "已實現損益",
    plain: "平倉後依成交價與平均成本差額記入現金之損益。",
    example: "賣出後差額已反映於現金，即為已實現損益。",
  },
  periodPerf: {
    title: "週／月／季／年績效",
    plain: "權益曲線近一週、約一月、約一季、約一年之漲跌。歷史不足時改標示「成立以來」。",
    example: "帳本成立未滿一年時，年績效欄改顯示成立以來。",
  },
  sinceInception: {
    title: "成立以來",
    plain: "自該模擬帳起始日至目前的累積績效。歷史長度不足時使用此標籤。",
    example: "新帳無完整年資料時，以成立以來報酬率呈現。",
  },
  danmaku: {
    title: "彈幕",
    plain: "畫面上短暫橫向捲動的短訊，便於即時瀏覽討論。",
    example: "開啟後，短訊會自右向左通過畫面。",
  },
  comments: {
    title: "留言板",
    plain: "掛於個股卡片下的討論區，可針對該標的發表留言。",
    example: "於標的頁面留言後，其他人可於同一區塊檢視。",
  },
  reddit: {
    title: "Reddit",
    plain: "英文論壇平台。本站僅彙整公開搜尋結果供參考，無法取得時會標示狀態，不捏造內容。",
    example: "常見討論區如 r/stocks；若遭封鎖則顯示無法取得。",
  },
  futu: {
    title: "富途牛牛",
    plain: "股票交易 App／平台（Moomoo）。本站多僅能取得公開新聞搜尋；個股社群評論通常需登入。",
    example: "「相關公開新聞」為新聞標題，非社群留言。",
  },
  ptt: {
    title: "PTT",
    plain: "台灣論壇批踢踢。本站搜尋 Stock 看板公開文章標題作為參考。",
    example: "於 Stock 板搜尋代碼可取得相關標題與連結。",
  },
  dcard: {
    title: "Dcard",
    plain: "台灣匿名論壇。本站嘗試搜尋相關討論；若遭反爬限制則標示無法取得。",
    example: "API 回傳 403 時顯示無法抓取，不編造留言。",
  },
  threads: {
    title: "Threads",
    plain: "Meta 短文社群。無穩定公開匿名搜尋 API 時，本站不捏造貼文。",
    example: "摘要若標示需登入，表示公開抓取失敗。",
  },
  pe: {
    title: "本益比（PE）",
    plain: "股價 ÷ 每股盈餘。數值愈低，以目前盈餘衡量相對愈不昂貴（仍須考量成長與風險）。缺資料不填。",
    example: "股價 100、每股盈餘 10，本益比約 10。",
  },
  opMargin: {
    title: "營益率",
    plain: "營業利益 ÷ 營收，衡量本業獲利能力（不含業外）。",
    example: "營收 100、營業利益 20，營益率 20%。",
  },
  grossMargin: {
    title: "毛利率",
    plain: "毛利 ÷ 營收，僅扣除銷貨／製造成本，尚未扣除營業費用。",
    example: "進貨成本 60、售價 100，毛利率 40%。",
  },
  foreignInv: {
    title: "外資",
    plain: "外國投資機構於台股之買賣總稱；公開資料公布當日買超或賣超。",
    example: "外資買超 100 萬股 ≈ 1,000 張淨買進。",
  },
  trustInv: {
    title: "投信",
    plain: "證券投資信託公司（基金）於台股之買賣，屬三大法人之一。",
    example: "投信買超表示基金當日淨買進偏多。",
  },
  dealerInv: {
    title: "自營商",
    plain: "券商自營部門以自有資金買賣股票。三大法人通常指外資、投信與自營商。",
    example: "自營商買超表示券商自營當日淨買進。",
  },
  maBull: {
    title: "均線多頭排列",
    plain: "短均線位於長均線之上層層排列（如 SMA5>SMA10>SMA20>SMA60），常視為短中期偏多型態。",
    example: "SMA5＞SMA10＞SMA20＞SMA60 即為多頭排列。",
  },
  rsi: {
    title: "RSI",
    plain: "相對強弱指標（0–100）。過高可能短線過熱，過低可能超賣；本站超短線策略關注 50 以下且拐頭向上。",
    example: "RSI 自 35 升至 42 且仍低於 50，可視為低檔回升。",
  },
  amplitude: {
    title: "振幅",
    plain: "（當日最高價 − 最低價）÷ 昨收。數值愈大表示當日波動愈大。",
    example: "昨收 100、最高 104、最低 99，振幅約 5%。",
  },
  zhang: {
    title: "張",
    plain: "台股交易單位：1 張＝1,000 股。成交量與法人買賣超常以張計。",
    example: "成交 300,000 股＝300 張。",
  },
  strategyScreen: {
    title: "策略選股（邏輯條件）",
    plain: "選擇策略後檢視條件與當日命中標的及計算欄位。",
    example: "選「均線多頭排列」可檢視均線條件與命中清單。",
  },
  xqLike: {
    title: "選股軟體風格",
    plain: "介面採「策略分類＋條件＋命中數」操作習慣；資料來源為公開行情，非商業軟體專有資料庫。",
    example: "左側選策略、中間看條件、下方看結果。",
  },
  socialDigest: {
    title: "網友參考（社交摘要）",
    plain: "彙整 Reddit、富途等公開來源之當日摘要，供氣氛參考；非民調，亦非買賣建議。",
    example: "有公開結果則列出；無法取得則標示狀態。",
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
      <details class="glossary-item" id="term-${escapeHtml(id)}">
        <summary class="glossary-summary">
          <span class="glossary-term-title">${escapeHtml(g.title)}</span>
          <span class="glossary-chevron" aria-hidden="true"></span>
        </summary>
        <div class="glossary-body">
          <p class="g-plain">${escapeHtml(g.plain)}</p>
          ${g.example ? `<p class="g-example"><span class="g-ex-label">例</span>${escapeHtml(g.example)}</p>` : ""}
        </div>
      </details>`
    )
    .join("");
  return `
    <section class="section glossary-section" id="help-glossary">
      <h2 class="section-title" id="glossary">名詞辭典</h2>
      <p class="glossary-intro">點選藍字可跳轉定義；點標題展開說明。</p>
      <div class="glossary-list" data-glossary-list>${items}</div>
    </section>
  `;
}

/** Desktop: open all. Mobile: accordion closed. */
export function bindGlossaryAccordion(root) {
  const list = root.querySelector("[data-glossary-list]");
  if (!list) return;
  const mq = window.matchMedia("(min-width: 900px)");
  const apply = () => {
    list.querySelectorAll("details.glossary-item").forEach((el) => {
      if (mq.matches) el.open = true;
      else if (!el.classList.contains("flash")) el.open = false;
    });
  };
  apply();
  if (typeof mq.addEventListener === "function") mq.addEventListener("change", apply);
  else if (typeof mq.addListener === "function") mq.addListener(apply);
}

export function bindTermLinks(root, options = {}) {
  root.querySelectorAll("a.term").forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("data-term");
      e.preventDefault();
      if (typeof options.beforeScroll === "function") {
        options.beforeScroll(id);
      }
      const jump = () => {
        const target = document.getElementById(`term-${id}`);
        if (!target) return;
        if (target.tagName === "DETAILS") target.open = true;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.classList.add("flash");
        setTimeout(() => target.classList.remove("flash"), 1600);
      };
      if (typeof options.beforeScroll === "function") {
        requestAnimationFrame(() => requestAnimationFrame(jump));
      } else {
        jump();
      }
    });
  });
}
