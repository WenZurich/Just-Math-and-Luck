(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const K={},Q={supabaseUrl:typeof import.meta<"u"&&(K==null?void 0:K.VITE_SUPABASE_URL)||"https://whlpzhceivahkuanmmui.supabase.co",supabaseAnonKey:typeof import.meta<"u"&&(K==null?void 0:K.VITE_SUPABASE_ANON_KEY)||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",giscus:{enabled:!0,repo:"WenZurich/Just-Math-and-Luck-",repoId:"R_kgDOUcO78Q",category:"General",categoryId:"DIC_kwDOUcO78c4DFrWU",mapping:"specific",theme:"dark",lang:"zh-TW",perTicker:!1},socialDigestUrl:"./data/social-digest.json",latestUrl:"./data/latest.json",danmakuMaxLen:80,commentMaxLen:500,pollIntervalMs:8e3,postCooldownMs:4e3};globalThis.STOCK_SOCIAL_CONFIG=Object.assign(globalThis.STOCK_SOCIAL_CONFIG||{},Q);const Ze=[{id:"zh-Hant",label:"繁體中文",short:"繁"},{id:"en",label:"English",short:"EN"},{id:"zh-Hans",label:"简体中文",short:"简"},{id:"ja",label:"日本語",short:"日"}],Xe=Ze.map(t=>t.id),Ye="site-lang",Se="zh-Hant",$e=new Set;function dt(){try{const e=localStorage.getItem(Ye);if(e&&Xe.includes(e))return e}catch{}const t=typeof navigator<"u"&&navigator.language||"";return/^zh[-_]?(CN|Hans|SG)/i.test(t)?"zh-Hans":/^zh/i.test(t)?"zh-Hant":/^ja/i.test(t)?"ja":/^en/i.test(t)?"en":Se}let j=dt();function pt(t){if(!Xe.includes(t)||t===j)return!1;j=t;try{localStorage.setItem(Ye,t)}catch{}return typeof document<"u"&&(document.documentElement.lang=t==="zh-Hant"?"zh-Hant":t==="zh-Hans"?"zh-Hans":t),$e.forEach(e=>{try{e(t)}catch{}}),!0}function ut(t){return $e.add(t),()=>$e.delete(t)}function F(){return j==="en"?"en-US":j==="ja"?"ja-JP":j==="zh-Hans"?"zh-CN":"zh-TW"}function Ke(){typeof document>"u"||(document.documentElement.lang=j==="zh-Hant"?"zh-Hant":j==="zh-Hans"?"zh-Hans":j)}const pe={siteTitle:"每日數學選股",loading:"載入中…",disclaimer:"投資涉及風險，資訊僅供參考，非投資建議",footer:"投資涉及風險，資訊僅供參考，非投資建議",dataAsOf:"資料",taipei:"（台北）",navMain:"主要導覽",navToday:"今日",navStrategies:"策略",navPaper:"模擬",navSocial:"社群",navLogic:"邏輯",todayPicks:"今日選股",market:"市場",hot:"熱門",marketQuotes:"市場報價",usStock:"美股",twStock:"台股",usList:"美股清單",twList:"台股清單",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暫無 Top 候選",ticker:"代碼",name:"名稱",price:"價格",dayPct:"日漲跌",rs:"RS",priorClose:"前收",priorCloseFull:"前收漲幅",pct5d:"5 日",pct1m:"約 1 月",volRatio:"量比",ma:"均線",screening:"篩選",reason:"理由",details:"詳情",business:"本業",risk:"風險",observe:"觀察",dataIncomplete:"資料不全",intraday:"盤中",taipeiClose:"台北收",adr:"ADR",parity:"平價",implied:"隱含價",premium:"溢價",adsRatio:"換股比",taiex:"台灣加權 TAIEX",otc:"櫃買",spx:"S&P 500",nasdaq:"Nasdaq",sox:"SOX",usdtwd:"USD/TWD",loadError:"無法載入資料（{msg}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。",langLabel:"語言",chatUs:"美股",chatTw:"台股",danmakuFx:"彈幕效果",chatMore:"更多",nickLabel:"暱稱",room:"房間",lobby:"大廳",perTicker:"個股",usTickers:"美股標的",twTickers:"台股標的",noUsTickers:"暫無美股標的",noTwTickers:"暫無台股標的",chatRoom:"聊天室",externalDiscuss:"外部討論",externalDigest:"外部討論摘要",usLobby:"美股大廳",twLobby:"台股大廳",noMessages:"目前尚無訊息",noComments:"目前尚無留言",noTickersDiscuss:"此市場目前無標的可討論",paper:"模擬",paperMissing:"尚無模擬帳本檔案。請於專案執行 npm run paper。",paperDisclaimer:"累積模擬帳戶（自 {date} 起） · 不會每日歸零 · 買進即成交 · 非真實下單",paperRules:"規則（各市場獨立帳）",paperRuleTw:"台股本金 NT$3,000,000 · 整張成交",paperRuleUs:"美股本金 US$100,000 · 可買 1 股起",paperRuleBuy:"買：該市場名單·風險1%·停距1.5%·單檔≤8% · 即成交",paperRuleSell:"賣：停損−3% · 停利+12%半倉 · 破SMA20且日跌>2% · 離名單虧損 · 漲停隔日−5%",paperTabTw:"台股帳 · NT$",paperTabUs:"美股帳 · US$",paperBookTw:"台股帳本（NT$）",paperBookUs:"美股帳本（US$）",principal:"本金",cash:"現金",equity:"權益（部位＋現金）",totalPnl:"總損益",totalPnlPct:"總損益 ％",weekPerf:"週績效",monthPerf:"月績效",quarterPerf:"季績效",yearPerf:"年績效",sinceInception:"成立以來",noTradesToday:"本日尚無此類成交（模擬）",noPositions:"目前沒有持股",buy:"買",sell:"賣",shares:"股",qtyShares:"股數",positions:"目前部位",position:"部位",avgCost:"成本",mark:"現價",unrealizedPnl:"未實現損益",unrealizedPct:"未實現 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累積 · 買進即成交",reasonScreenBuy:"名單新開倉",reasonAdd:"持續買進",reasonStop:"停損",reasonTakeProfit:"停利",reasonMomentumBreak:"動能轉弱",reasonOffList:"離開名單",reasonLimitUpChase:"漲停追價急殺",stopLoss:"停損",takeProfit:"停利",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"績效",qty:"數量",note:"說明",strategyScreen:"策略選股",strategyLead:"台／美命中分開檢視 · 缺資料標「不足」",strategyLoading:"載入策略結果中…",strategyEmpty:"尚無策略資料。請執行 npm run strategies。",strategyLoadError:"無法載入策略選股（{msg}）。請確認已執行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分類",hitCount:"檔命中",hitTitle:"命中檔數",strategyDetails:"詳情 · 策略說明",conditions:"條件",results:"篩選結果",copyJson:"複製 JSON",exportCsv:"匯出此策略 CSV",exportJson:"匯出 JSON",copied:"已複製",noHitsExport:"此策略今日無命中列可匯出",incomplete:"不足",hitsTotal:"共{n}檔",twOnlyHint:"本策略僅台股",hitMarket:"命中市場",noHits:"本日無命中",dataInsufficient:"資料不足",calibTitle:"校準說明",incompleteFilters:"未檢查濾網（不算通過）：",sessionTwse:"證交所 session",ohlcvBar:"OHLCV K棒",generated:"產生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精選",cat價量:"價量",cat籌碼:"籌碼",cat財務:"財務",cat大師:"大師",cat週期:"週期",cat技術:"技術",cat基本:"基本",cat綜合:"綜合",addWatchlist:"加入自選",watchlistAdded:"已加入自選 {ticker}",watchlistExists:"{ticker} 已在自選",copyFailed:"複製失敗（請手動選取）",csvDownloaded:"已下載 CSV",csvBlocked:"下載被擋：改以資料連結開啟",backtestSoon:"回測：尚未開放",backtestHint:"回測：資料／引擎尚未開放（不提供假回測）",regimeToday:"今日市場週期（美／台分開）",psychologyPhase:"心理相位",cycleStance:"週期姿態",liquidityBias:"流動性偏誤",temperatureScore:"市場溫度",sizeMult:"部位乘數",regimeTags:"週期標籤",dataGaps:"資料缺口",marketRegime:"市場週期",enum_euphoric:"亢奮",enum_late_optimism:"晚期樂觀",enum_mid_cycle:"中期",enum_cautious_recovery:"謹慎復甦",enum_despondent:"絕望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精選",enum_balanced:"均衡",enum_constructive:"偏建設",enum_aggressive:"積極",enum_stabilize_first:"先求穩",enum_risk_off:"偏防守",enum_risk_on:"偏進攻",enum_neutral:"中性",logicTitle:"選股邏輯",logicSubtitle:"政權→篩選→策略→降權→理由→部位：可稽核的數學流程",logicNoRegime:"尚無市場週期資料（待下次掃描寫入）。",logicStep1:"市場週期（Regime）",logicStep1Lead:"先定美／台獨立姿態，再篩個股。Kostolany 心理相位 × Marks 溫度 × 利率流動性。",logicStep1Caption:"相位 → 篩選姿態 → 部位乘數（STANCE_SIZE_MULT）",logicRatesR2:"R2：美債 ^TNX 20 日上升 ≥ +0.25pp → 流動性偏防禦（即使價趨勢仍中性）。",logicRatesR3:"R3：60 日殖利率下降 ≤ −0.25pp → 允許較積極姿態（非亢奮）。",logicRatesSeparate:"硬規則：dial_US 與 dial_TW 分開；不混成「全球心情」。",logicStep2:"數學篩選（A／B）",logicStep2Lead:"相對強度、動能、SMA、量比；門檻依週期姿態調整。",logicScreenA:"篩選 A · 動能／相對強度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日漲≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或雙均線且 5日≥0／RS≥0。",logicScreenASelective:"精選：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量視為可過）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"積極／偏建設：放寬 RS／日／5日／1月；允許 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建設另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求穩：須站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌後先穩定）。",logicScreenB:"篩選 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。門檻：防守 ≥1.0；積極 ≥1.1；其餘 ≥1.2。",logicScreenBMom:"補標 A：若未過 A，但 1月≥8% 且 SMA20＋SMA50（非先求穩）→ 仍標 A。",logicScore:"排序分數",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加權（上限約 8×0.6）；量比<0.4 −0.5；再依市場週期調整分數。",logicStep3:"XQ 策略選股",logicXqLead:"與每日名單並行：條件式命中（價量／籌碼／財務／大師／週期）。缺欄標「資料不足」，不捏造。",logicXqPriceVol:"價量：均線多頭、超短線作多等（OHLCV 實算）。",logicXqFlow:"籌碼：法人同步等（公開張數門檻）。",logicXqFund:"財務：獲利遞增、PE／營益率等公開財報欄。",logicXqMasters:"大師：林區／葛拉罕／巴菲特等可計算代理條件。",logicXqCycle:"週期：科斯托拉尼／市場週期包（依當日美台姿態）。",logicOpenStrategies:"開啟策略頁",logicStep4:"排序降權／加權",logicStep4Lead:"scoreAdjust：依姿態對高 RS 縮量、firm-hands、恐慌穩定做加減分。",logicDemoteHot:"防守／精選：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日漲>2% → −1.2；缺雙均線 −1.5。",logicDemoteThin:"K5：高相對強度但量能不足 → 降權／排除積極桶。",logicPromoteFirm:"aggressive／constructive：價弱量增且 SMA200（firm-hands）→ +2.2；早段放量上漲 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；站上 SMA20 才 +1.5。",logicListSize:"名單長度：防守 ≈0.55×；精選 ≈0.75×；先求穩 ≈0.45×；積極 +2（上限14）；基準 12。",logicStep5:"「為什麼」如何組成",logicStep5Lead:"why 欄為可讀摘要，非模型黑箱——由當日可驗證欄位串接。",logicWhyRs:"日漲跌 + 相對指數（美：S&P；台：加權）pp。",logicWhyMom:"五日%、約一個月%。",logicWhyVol:"量比≥1.2 才寫入量能句。",logicWhySma:"SMA20／50／200 站上狀態（雙均線優先）。",logicWhyRegime:"附加週期備註或姿態／心理相位標籤。",logicStep6:"紙上部位紀律",logicStep6Lead:"模擬帳驗證流程；非實單。部位受週期部位乘數與固定風險公式約束。",logicPaperCapital:"本金：台股 NT$3,000,000（整張）；美股 US$100,000（1 股起）。",logicPaperBuy:"買：名單（純 observe 盡量不買）；風險＝權益×1%；停距≈價×1.5%（量比≥3→2.5%）；單檔≤權益 8%。",logicPaperSizeMult:"部位乘數（0.3–1.35×）標示當日建議積極度；與名單長度連動。",logicPaperSell:"賣：停損 −3%；停利 +12% 半倉；破 SMA20 且日跌>2%；離名單且虧損；漲停風格隔日 −5%。",logicOpenPaper:"開啟模擬頁",logicFootnote:"框架合成僅供透明篩選說明，非投資建議。公開作者方法之可編碼代理；不重製受著作權保護之原文。",backendOff:"討論功能尚未啟用",localComments:"本站留言",futu:"富途",nickPlaceholder:"暱稱（選填）",commentPlaceholder:"留言",commentInput:"輸入留言",send:"送出",guest:"訪客",noLocalComments:"尚無留言",backendNotConnected:"後端未接上",readFail:"讀取失敗：{msg}",sendFail:"發送失敗：{msg}",sendFailShort:"發送失敗",noSource:"無 {source}",newsClues:"新聞／討論線索（非留言）",relatedNews:"相關公開新聞（非社群評論）",messages:"訊息",giscusUnset:"Giscus 尚未設定（需 repoId／categoryId）。請見說明文件。",manualOpen:"手動開啟",noSnippet:"(無摘要)",noTickerData:"此標的暫無{kind}資料",viaBackup:"來源備援：{via}",noDigestBlock:"無 {title} 區塊（今日無對應市場標的或尚未抓取）",socialDigestMarket:"社交摘要市場",socialDigestTitle:"網友參考",socialUs:"美股來源",socialTw:"台股來源",externalDigestShort:"外部摘要",routingNote:"路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads",socialUsTab:"美股 Reddit／富途",socialTwTab:"台股 PTT／Dcard／Threads",socialLoadFail:"社交摘要尚未產生或讀取失敗：{msg}",futuFull:"富途牛牛",sma20:"SMA20",sma50:"SMA50",screenA:"A",screenB:"B",screenC:"C",condPass:"條件",condFail:"未過",condSkip:"略過",pe:"本益比",opMargin:"營益率",grossMargin:"毛利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自營商",maBull:"均線多頭",rsi:"RSI",amplitude:"振幅",zhang:"張",limitUp:"漲停",momentum:"動能",metricPrice:"價格",metricDayPct:"日漲跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(張)",metricDebt:"負債比%",metricDirector:"董監持股%",metricOpQ:"近季營益率%",metricSource:"來源",foreign1d:"外資1日(張)",trust1d:"投信1日(張)",dealer1d:"自營商1日(張)",foreign5d:"外資5日(張)",trust5d:"投信5日(張)",dealer5d:"自營5日(張)"},mt={...pe,siteTitle:"Daily Quant Picks",loading:"Loading…",disclaimer:"Investing involves risk. For reference only — not investment advice.",footer:"Investing involves risk. For reference only — not investment advice.",dataAsOf:"As of",taipei:" (Taipei)",navMain:"Main navigation",navToday:"Today",navStrategies:"Strategies",navPaper:"Paper",navSocial:"Community",navLogic:"Logic",todayPicks:"Today's picks",market:"Market",hot:"Markets",marketQuotes:"Market quotes",usStock:"US",twStock:"TW",usList:"US list",twList:"TW list",usTop:"US Top",twTop:"TW Top",emptyTop:"No Top picks for {market}",ticker:"Ticker",name:"Name",price:"Price",dayPct:"Day %",rs:"RS",priorClose:"Prior close",priorCloseFull:"Prior-close %",pct5d:"5D",pct1m:"~1M",volRatio:"Vol ratio",ma:"MAs",screening:"Screen",reason:"Why",details:"Details",business:"Business",risk:"Risk",observe:"Watch",dataIncomplete:"Incomplete",intraday:"Intraday",taipeiClose:"Taipei close",adr:"ADR",parity:"Parity",implied:"Implied",premium:"Premium",adsRatio:"ADS ratio",taiex:"TAIEX",otc:"OTC",loadError:"Failed to load data ({msg}). Serve statically with data/latest.json present.",langLabel:"Language",chatUs:"US",chatTw:"TW",danmakuFx:"Danmaku",chatMore:"More",nickLabel:"Nick",room:"Room",lobby:"Lobby",perTicker:"Ticker",usTickers:"US tickers",twTickers:"TW tickers",noUsTickers:"No US tickers",noTwTickers:"No TW tickers",chatRoom:"Chat",externalDiscuss:"External discussion",externalDigest:"External digest",usLobby:"US lobby",twLobby:"TW lobby",noMessages:"No messages yet",noComments:"No comments yet",noTickersDiscuss:"No tickers to discuss in this market",paper:"Paper",paperMissing:"No paper portfolio file. Run npm run paper in the project.",paperDisclaimer:"Cumulative paper account (since {date}) · not reset daily · fills on signal · not real orders",paperRules:"Rules (separate books per market)",paperRuleTw:"TW principal NT$3,000,000 · round lots",paperRuleUs:"US principal US$100,000 · from 1 share",paperRuleBuy:"Buy: list · 1% risk · 1.5% stop · ≤8% per name · immediate fill",paperRuleSell:"Sell: −3% stop · +12% half take-profit · below SMA20 & day <−2% · off-list & losing · limit-up next-day −5%",paperTabTw:"TW book · NT$",paperTabUs:"US book · US$",paperBookTw:"TW book (NT$)",paperBookUs:"US book (US$)",principal:"Principal",cash:"Cash",equity:"Equity (positions + cash)",totalPnl:"Total P&L",totalPnlPct:"Total P&L %",weekPerf:"Week",monthPerf:"Month",quarterPerf:"Quarter",yearPerf:"Year",sinceInception:"Since inception",noTradesToday:"No trades of this type today (paper)",noPositions:"No open positions",buy:"Buy",sell:"Sell",shares:"sh",qtyShares:"Shares",positions:"Positions",position:"Position",avgCost:"Avg cost",mark:"Mark",unrealizedPnl:"Unrealized P&L",unrealizedPct:"Unrealized %",recentTrades:"Trades (last 40)",paperSession:"{date} · since {inception} · fills on signal",reasonScreenBuy:"New from list",reasonAdd:"Add",reasonStop:"Stop-loss",reasonTakeProfit:"Take-profit",reasonMomentumBreak:"Momentum break",reasonOffList:"Off list",reasonLimitUpChase:"Limit-up chase unwind",stopLoss:"Stop-loss",takeProfit:"Take-profit",paperTrade:"Paper",realizedPnl:"P&L",periodPerf:"Performance",qty:"Qty",note:"Note",strategyScreen:"Strategy screener",strategyLead:"US / TW hits viewed separately · incomplete marked",strategyLoading:"Loading strategies…",strategyEmpty:"No strategy data. Run npm run strategies.",strategyLoadError:"Failed to load strategies ({msg}). Run npm run strategies.",strategyList:"Strategies",strategyCat:"Categories",hitCount:"hits",hitTitle:"Hit count",strategyDetails:"Details · strategy notes",conditions:"Conditions",results:"Results",copyJson:"Copy JSON",exportCsv:"Export CSV",exportJson:"Export JSON",copied:"Copied",noHitsExport:"No hit rows to export for this strategy today",incomplete:"N/A",hitsTotal:"{n} hits",twOnlyHint:"TW only",hitMarket:"Hit market",noHits:"No hits today",dataInsufficient:"Insufficient data",calibTitle:"Calibration",incompleteFilters:"Unchecked filters (not counted): ",sessionTwse:"TWSE session",ohlcvBar:"OHLCV bar",generated:"Generated",universeTw:"TW universe",universeUs:"US universe",cat精選:"Featured",cat價量:"Price/Vol",cat籌碼:"Flow",cat財務:"Fundamentals",cat大師:"Masters",cat週期:"Cycle",cat技術:"Technical",cat基本:"Fundamentals",cat綜合:"Composite",addWatchlist:"Watchlist",watchlistAdded:"Added {ticker}",watchlistExists:"{ticker} already watched",copyFailed:"Copy failed — select manually",csvDownloaded:"CSV downloaded",csvBlocked:"Download blocked — opened data URI",backtestSoon:"Backtest: not open",backtestHint:"Backtest engine/data not available (no fake results)",regimeToday:"Today's market regime (US / TW separate)",psychologyPhase:"Psychology phase",cycleStance:"Cycle stance",liquidityBias:"Liquidity bias",temperatureScore:"Temperature score",sizeMult:"Size mult",regimeTags:"Regime tags",dataGaps:"Data gaps",marketRegime:"Market regime",enum_euphoric:"Euphoric",enum_late_optimism:"Late optimism",enum_mid_cycle:"Mid-cycle",enum_cautious_recovery:"Cautious recovery",enum_despondent:"Despondent",enum_panic:"Panic",enum_defensive:"Defensive",enum_selective:"Selective",enum_balanced:"Balanced",enum_constructive:"Constructive",enum_aggressive:"Aggressive",enum_stabilize_first:"Stabilize first",enum_risk_off:"Risk-off",enum_risk_on:"Risk-on",enum_neutral:"Neutral",logicTitle:"Selection logic",logicSubtitle:"Regime → screens → strategies → demotions → why → sizing — auditable math",logicNoRegime:"No market-regime data yet (await next scan).",logicStep1:"Market regime",logicStep1Lead:"Set US/TW dials first, then screen names. Kostolany phase × Marks temperature × rates liquidity.",logicStep1Caption:"Phase → screen stance → size multiplier (STANCE_SIZE_MULT)",logicRatesR2:"R2: ^TNX +0.25pp / 20d → defensive liquidity bias (even if price mid-cycle).",logicRatesR3:"R3: yields ≤ −0.25pp / 60d → allow more aggressive dial (if not Euphoric).",logicRatesSeparate:"Hard rule: dial_US and dial_TW stay separate — never one “world mood”.",logicStep2:"Math screens (A / B)",logicStep2Lead:"RS, momentum, SMA, volume — thresholds shift with cycle stance.",logicScreenA:"Screen A · momentum / RS",logicScreenABalanced:"Balanced: day RS≥0.5pp or day≥1.5%; or 5d≥3%; or 1m≥6% & >SMA20; or both MAs with 5d≥0 / RS≥0.",logicScreenASelective:"Selective: >SMA50 and (RS≥0.5 or 5d≥3% or 1m≥6% & >SMA20).",logicScreenADefensive:"Defensive: >SMA20+SMA50 and (RS≥0.8 or 5d≥4%) and vol≥1.0 (null vol OK); 1m≥12% & vol<0.8 → reject.",logicScreenAAggressive:"Aggressive / Constructive: looser RS/day/5d/1m; allow firm-hands below SMA50 if >SMA200 (1m<0 & vol≥1.4). Constructive also needs SMA20 or SMA200.",logicScreenAStabilize:"Stabilize first: must >SMA20 and (RS≥1.0pp or vol≥1.5).",logicScreenB:"Screen B · volume",logicScreenBVol:"Vol ratio = today / 20d avg. Floors: Defensive ≥1.0; Aggressive ≥1.1; else ≥1.2.",logicScreenBMom:"A backfill: if A missed but 1m≥8% & >SMA20+SMA50 (not Stabilize first) → tag A.",logicScore:"Ranking score",logicScoreFormula:"score = dayRS×2 + 5d%×0.35 + 1m%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"vol≥1.2 adds (cap ~8×0.6); vol<0.4 −0.5; then score adjust by regime.",logicStep3:"XQ strategies",logicXqLead:"Parallel to daily lists: condition hits (price/vol, flow, fundamentals, masters, cycle). Missing fields → insufficient — never invented.",logicXqPriceVol:"Price/vol: MA bull stack, ultra-short, etc. (OHLCV).",logicXqFlow:"Flow: institutional sync (public share-unit thresholds).",logicXqFund:"Fundamentals: earnings uptrend, PE / margins from public filings.",logicXqMasters:"Masters: Lynch / Graham / Buffett-style computable proxies.",logicXqCycle:"Cycle: Kostolany / regime pack keyed to today’s US·TW dials.",logicOpenStrategies:"Open Strategies",logicStep4:"Ranking demotions / boosts",logicStep4Lead:"scoreAdjust: thin high-RS, firm-hands, and panic reclaim change the score.",logicDemoteHot:"Defensive/Selective: 1m≥8% & vol<0.8 → −2.5; vol<0.7 & day>2% → −1.2; missing dual MA −1.5.",logicDemoteThin:"K5: strong RS on thin volume → demote / keep out of aggressive bucket.",logicPromoteFirm:"aggressive/constructive: weak price + rising vol + >SMA200 (firm-hands) → +2.2; early up-day volume +1.0.",logicDemotePanic:"stabilize_first: base −3; +1.5 only if >SMA20.",logicListSize:"List length: Defensive ~0.55×; Selective ~0.75×; Stabilize first ~0.45×; Aggressive +2 (cap 14); base 12.",logicStep5:"How “Why” is built",logicStep5Lead:"The why field is a readable join of verified fields — not a black box.",logicWhyRs:"Day % + vs index (US: S&P; TW: TAIEX) in pp.",logicWhyMom:"5-day % and ~1-month %.",logicWhyVol:"Volume sentence only if vol_ratio ≥ 1.2.",logicWhySma:"SMA20 / 50 / 200 status (dual-MA preferred).",logicWhyRegime:"Append a regime note or stance / psychology-phase tags.",logicStep6:"Paper sizing discipline",logicStep6Lead:"Paper books validate process — not live orders. Size constrained by regime size mult + fixed risk math.",logicPaperCapital:"Capital: TW NT$3,000,000 (round lots); US US$100,000 (from 1 share).",logicPaperBuy:"Buy: list (observe-only avoided); risk = equity×1%; stop≈price×1.5% (vol≥3 → 2.5%); per name ≤8% equity.",logicPaperSizeMult:"Size multiplier (0.3–1.35×) tags day’s aggressiveness; linked to list length.",logicPaperSell:"Sell: stop −3%; take-profit +12% half; below SMA20 & day <−2%; off-list & losing; limit-up chase next-day −5%.",logicOpenPaper:"Open Paper",logicFootnote:"Framework synthesis for transparent screening — not investment advice. Public operational proxies only; no copyrighted book text.",backendOff:"Discussion backend not enabled",localComments:"Site comments",futu:"Futu",nickPlaceholder:"Nickname (optional)",commentPlaceholder:"Comment",commentInput:"Write a comment",send:"Send",guest:"Guest",noLocalComments:"No comments yet",backendNotConnected:"Backend not connected",readFail:"Read failed: {msg}",sendFail:"Send failed: {msg}",sendFailShort:"Send failed",noSource:"No {source}",newsClues:"News / discussion clues (not comments)",relatedNews:"Related public news (not social comments)",messages:"Messages",giscusUnset:"Giscus not configured (needs repoId / categoryId).",manualOpen:"Open manually",noSnippet:"(no snippet)",noTickerData:"No {kind} data for this ticker",viaBackup:"Backup source: {via}",noDigestBlock:"No {title} block (no tickers or not fetched)",socialDigestMarket:"Social digest market",socialDigestTitle:"Social digest",socialUs:"US sources",socialTw:"TW sources",externalDigestShort:"External digest",routingNote:"Routing: US → Reddit + Futu; TW → PTT + Dcard + Threads",socialUsTab:"US Reddit / Futu",socialTwTab:"TW PTT / Dcard / Threads",socialLoadFail:"Social digest missing or failed: {msg}",futuFull:"Futu",condPass:"Cond.",condFail:"Fail",condSkip:"Skip",pe:"P/E",opMargin:"Op. margin",grossMargin:"Gross margin",foreignInv:"Foreign",trustInv:"Trust",dealerInv:"Dealer",maBull:"MA bull stack",amplitude:"Range",zhang:"lots",limitUp:"Limit-up",momentum:"Momentum",metricPrice:"Price",metricDayPct:"Day %",metricVolRatioYday:"Vol ratio (yday)",metricVolToday:"Vol (lots)",metricDebt:"Debt %",metricDirector:"Insider %",metricOpQ:"Op. margin (q)",metricSource:"Source",foreign1d:"Foreign 1d (lots)",trust1d:"Trust 1d (lots)",dealer1d:"Dealer 1d (lots)",foreign5d:"Foreign 5d (lots)",trust5d:"Trust 5d (lots)",dealer5d:"Dealer 5d (lots)"},gt={...pe,siteTitle:"每日数学选股",loading:"加载中…",disclaimer:"投资涉及风险，信息仅供参考，非投资建议",footer:"投资涉及风险，信息仅供参考，非投资建议",dataAsOf:"数据",taipei:"（台北）",navMain:"主导航",navToday:"今日",navStrategies:"策略",navPaper:"模拟",navSocial:"社群",navLogic:"逻辑",todayPicks:"今日选股",market:"市场",hot:"热门",marketQuotes:"市场报价",usStock:"美股",twStock:"台股",usList:"美股列表",twList:"台股列表",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暂无 Top 候选",ticker:"代码",name:"名称",price:"价格",dayPct:"日涨跌",priorClose:"前收",priorCloseFull:"前收涨幅",pct5d:"5 日",pct1m:"约 1 月",volRatio:"量比",ma:"均线",screening:"筛选",reason:"理由",details:"详情",business:"本业",risk:"风险",observe:"观察",dataIncomplete:"资料不全",intraday:"盘中",taipeiClose:"台北收",parity:"平价",implied:"隐含价",premium:"溢价",adsRatio:"换股比",taiex:"台湾加权 TAIEX",otc:"柜买",loadError:"无法加载数据（{msg}）。请确认以静态服务器打开，且 data/latest.json 存在。",langLabel:"语言",chatUs:"美股",chatTw:"台股",danmakuFx:"弹幕效果",chatMore:"更多",nickLabel:"昵称",room:"房间",lobby:"大厅",perTicker:"个股",usTickers:"美股标的",twTickers:"台股标的",noUsTickers:"暂无美股标的",noTwTickers:"暂无台股标的",chatRoom:"聊天室",externalDiscuss:"外部讨论",externalDigest:"外部讨论摘要",usLobby:"美股大厅",twLobby:"台股大厅",noMessages:"目前尚无消息",noComments:"目前尚无留言",noTickersDiscuss:"此市场目前无标的可讨论",paper:"模拟",paperMissing:"尚无模拟账本文件。请在项目执行 npm run paper。",paperDisclaimer:"累积模拟账户（自 {date} 起） · 不会每日归零 · 买进即成交 · 非真实下单",paperRules:"规则（各市场独立账）",paperRuleTw:"台股本金 NT$3,000,000 · 整张成交",paperRuleUs:"美股本金 US$100,000 · 可买 1 股起",paperRuleBuy:"买：该市场名单·风险1%·停距1.5%·单档≤8% · 即成交",paperRuleSell:"卖：停损−3% · 停利+12%半仓 · 破SMA20且日跌>2% · 离名单亏损 · 涨停隔日−5%",paperTabTw:"台股账 · NT$",paperTabUs:"美股账 · US$",paperBookTw:"台股账本（NT$）",paperBookUs:"美股账本（US$）",principal:"本金",cash:"现金",equity:"权益（部位＋现金）",totalPnl:"总损益",totalPnlPct:"总损益 ％",weekPerf:"周绩效",monthPerf:"月绩效",quarterPerf:"季绩效",yearPerf:"年绩效",sinceInception:"成立以来",noTradesToday:"本日尚无此类成交（模拟）",noPositions:"目前没有持股",buy:"买",sell:"卖",shares:"股",qtyShares:"股数",positions:"目前部位",position:"部位",avgCost:"成本",mark:"现价",unrealizedPnl:"未实现损益",unrealizedPct:"未实现 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累积 · 买进即成交",reasonScreenBuy:"名单新开仓",reasonAdd:"持续买进",reasonStop:"停损",reasonTakeProfit:"停利",reasonMomentumBreak:"动能转弱",reasonOffList:"离开名单",reasonLimitUpChase:"涨停追价急杀",stopLoss:"停损",takeProfit:"停利",paperTrade:"模拟",realizedPnl:"损益",periodPerf:"绩效",qty:"数量",note:"说明",strategyScreen:"策略选股",strategyLead:"台／美命中分开检视 · 缺资料标「不足」",strategyLoading:"加载策略结果中…",strategyEmpty:"尚无策略资料。请执行 npm run strategies。",strategyLoadError:"无法加载策略选股（{msg}）。请确认已执行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分类",hitCount:"档命中",hitTitle:"命中档数",strategyDetails:"详情 · 策略说明",conditions:"条件",results:"筛选结果",copyJson:"复制 JSON",exportCsv:"导出此策略 CSV",exportJson:"导出 JSON",copied:"已复制",noHitsExport:"此策略今日无命中列可导出",incomplete:"不足",hitsTotal:"共{n}档",twOnlyHint:"本策略仅台股",hitMarket:"命中市场",noHits:"本日无命中",dataInsufficient:"资料不足",calibTitle:"校准说明",incompleteFilters:"未检查滤网（不算通过）：",sessionTwse:"证交所 session",ohlcvBar:"OHLCV K棒",generated:"产生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精选",cat價量:"价量",cat籌碼:"筹码",cat財務:"财务",cat大師:"大师",cat週期:"周期",cat技術:"技术",cat基本:"基本",cat綜合:"综合",addWatchlist:"加入自选",watchlistAdded:"已加入自选 {ticker}",watchlistExists:"{ticker} 已在自选",copyFailed:"复制失败（请手动选取）",csvDownloaded:"已下载 CSV",csvBlocked:"下载被挡：改以数据链接打开",backtestSoon:"回测：尚未开放",backtestHint:"回测：数据／引擎尚未开放（不提供假回测）",regimeToday:"今日市场周期（美／台分开）",psychologyPhase:"心理相位",cycleStance:"周期姿态",liquidityBias:"流动性偏误",temperatureScore:"市场温度",sizeMult:"部位乘数",regimeTags:"周期标签",dataGaps:"资料缺口",marketRegime:"市场周期",enum_euphoric:"亢奋",enum_late_optimism:"晚期乐观",enum_mid_cycle:"中期",enum_cautious_recovery:"谨慎复苏",enum_despondent:"绝望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精选",enum_balanced:"均衡",enum_constructive:"偏建设",enum_aggressive:"积极",enum_stabilize_first:"先求稳",enum_risk_off:"偏防守",enum_risk_on:"偏进攻",enum_neutral:"中性",logicTitle:"选股逻辑",logicSubtitle:"政权→筛选→策略→降权→理由→部位：可稽核的数学流程",logicNoRegime:"尚无市场周期资料（待下次扫描写入）。",logicStep1:"市场周期（Regime）",logicStep1Lead:"先定美／台独立姿态，再筛个股。Kostolany 心理相位 × Marks 温度 × 利率流动性。",logicStep1Caption:"相位 → 筛选姿态 → 部位乘数（STANCE_SIZE_MULT）",logicRatesR2:"R2：美债 ^TNX 20 日上升 ≥ +0.25pp → 流动性偏防御（即使价趋势仍中性）。",logicRatesR3:"R3：60 日收益率下降 ≤ −0.25pp → 允许较积极姿态（非亢奋）。",logicRatesSeparate:"硬规则：dial_US 与 dial_TW 分开；不混成「全球心情」。",logicStep2:"数学筛选（A／B）",logicStep2Lead:"相对强度、动能、SMA、量比；门槛依周期姿态调整。",logicScreenA:"筛选 A · 动能／相对强度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日涨≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或双均线且 5日≥0／RS≥0。",logicScreenASelective:"精选：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量视为可过）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"积极／偏建设：放宽 RS／日／5日／1月；允许 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建设另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求稳：须站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌后先稳定）。",logicScreenB:"筛选 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。门槛：防守 ≥1.0；积极 ≥1.1；其余 ≥1.2。",logicScreenBMom:"补标 A：若未过 A，但 1月≥8% 且 SMA20＋SMA50（非先求稳）→ 仍标 A。",logicScore:"排序分数",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加权（上限约 8×0.6）；量比<0.4 −0.5；再依市场周期调整分数。",logicStep3:"XQ 策略选股",logicXqLead:"与每日名单并行：条件式命中（价量／筹码／财务／大师／周期）。缺栏标「资料不足」，不捏造。",logicXqPriceVol:"价量：均线多头、超短线作多等（OHLCV 实算）。",logicXqFlow:"筹码：法人同步等（公开张数门槛）。",logicXqFund:"财务：获利递增、PE／营益率等公开财报栏。",logicXqMasters:"大师：林奇／格雷厄姆／巴菲特等可计算代理条件。",logicXqCycle:"周期：科斯托拉尼／市场周期包（依当日美台姿态）。",logicOpenStrategies:"打开策略页",logicStep4:"排序降权／加权",logicStep4Lead:"scoreAdjust：依姿态对高 RS 缩量、firm-hands、恐慌稳定做加减分。",logicDemoteHot:"防守／精选：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日涨>2% → −1.2；缺双均线 −1.5。",logicDemoteThin:"K5：高相对强度但量能不足 → 降权／排除积极桶。",logicPromoteFirm:"aggressive／constructive：价弱量增且 SMA200（firm-hands）→ +2.2；早段放量上涨 +1.0。",logicDemotePanic:"stabilize_first：基准 −3；站上 SMA20 才 +1.5。",logicListSize:"名单长度：防守 ≈0.55×；精选 ≈0.75×；先求稳 ≈0.45×；积极 +2（上限14）；基准 12。",logicStep5:"「为什么」如何组成",logicStep5Lead:"why 栏为可读摘要，非模型黑箱——由当日可验证栏位串接。",logicWhyRs:"日涨跌 + 相对指数（美：S&P；台：加权）pp。",logicWhyMom:"五日%、约一个月%。",logicWhyVol:"量比≥1.2 才写入量能句。",logicWhySma:"SMA20／50／200 站上状态（双均线优先）。",logicWhyRegime:"附加周期备注或姿态／心理相位标签。",logicStep6:"纸上部位纪律",logicStep6Lead:"模拟账验证流程；非实单。部位受周期部位乘数与固定风险公式约束。",logicPaperCapital:"本金：台股 NT$3,000,000（整张）；美股 US$100,000（1 股起）。",logicPaperBuy:"买：名单（纯 observe 尽量不买）；风险＝权益×1%；停距≈价×1.5%（量比≥3→2.5%）；单档≤权益 8%。",logicPaperSizeMult:"部位乘数（0.3–1.35×）标示当日建议积极度；与名单长度联动。",logicPaperSell:"卖：停损 −3%；停利 +12% 半仓；破 SMA20 且日跌>2%；离名单且亏损；涨停风格隔日 −5%。",logicOpenPaper:"打开模拟页",logicFootnote:"框架合成仅供透明筛选说明，非投资建议。公开作者方法之可编码代理；不重制受著作权保护之原文。",backendOff:"讨论功能尚未启用",localComments:"本站留言",futu:"富途",nickPlaceholder:"昵称（选填）",commentPlaceholder:"留言",commentInput:"输入留言",send:"发送",guest:"访客",noLocalComments:"尚无留言",backendNotConnected:"后端未接上",readFail:"读取失败：{msg}",sendFail:"发送失败：{msg}",sendFailShort:"发送失败",noSource:"无 {source}",newsClues:"新闻／讨论线索（非留言）",relatedNews:"相关公开新闻（非社群评论）",messages:"消息",giscusUnset:"Giscus 尚未设定（需 repoId／categoryId）。",manualOpen:"手动打开",noSnippet:"(无摘要)",noTickerData:"此标的暂无{kind}资料",viaBackup:"来源备援：{via}",noDigestBlock:"无 {title} 区块（今日无对应市场标的或尚未抓取）",socialDigestMarket:"社交摘要市场",socialDigestTitle:"网友参考",socialUs:"美股来源",socialTw:"台股来源",externalDigestShort:"外部摘要",routingNote:"路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads",socialUsTab:"美股 Reddit／富途",socialTwTab:"台股 PTT／Dcard／Threads",socialLoadFail:"社交摘要尚未产生或读取失败：{msg}",futuFull:"富途牛牛",condPass:"条件",condFail:"未过",condSkip:"略过",pe:"本益比",opMargin:"营益率",grossMargin:"毛利率",foreignInv:"外资",trustInv:"投信",dealerInv:"自营商",maBull:"均线多头",amplitude:"振幅",zhang:"张",limitUp:"涨停",momentum:"动能",metricPrice:"价格",metricDayPct:"日涨跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(张)",metricDebt:"负债比%",metricDirector:"董监持股%",metricOpQ:"近季营益率%",metricSource:"来源",foreign1d:"外资1日(张)",trust1d:"投信1日(张)",dealer1d:"自营商1日(张)",foreign5d:"外资5日(张)",trust5d:"投信5日(张)",dealer5d:"自营5日(张)"},ht={...pe,siteTitle:"毎日クオンツ選株",loading:"読み込み中…",disclaimer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",footer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",dataAsOf:"データ",taipei:"（台北）",navMain:"メインナビ",navToday:"本日",navStrategies:"戦略",navPaper:"模擬",navSocial:"コミュニティ",navLogic:"ロジック",todayPicks:"本日の選株",market:"市場",hot:"相場",marketQuotes:"相場気配",usStock:"米国株",twStock:"台湾株",usList:"米国リスト",twList:"台湾リスト",usTop:"米国 Top",twTop:"台湾 Top",emptyTop:"{market} の Top 候補はありません",ticker:"銘柄",name:"名称",price:"価格",dayPct:"日次%",priorClose:"前日比",priorCloseFull:"前日終値比",pct5d:"5日",pct1m:"約1ヶ月",volRatio:"出来高比",ma:"移動平均",screening:"スクリーニング",reason:"理由",details:"詳細",business:"事業",risk:"リスク",observe:"観察",dataIncomplete:"データ不足",intraday:"場中",taipeiClose:"台北終値",parity:"パリティ",implied:"理論価格",premium:"プレミアム",adsRatio:"交換比率",taiex:"台湾加重 TAIEX",otc:"櫃買",loadError:"データを読み込めません（{msg}）。静的サーバーと data/latest.json を確認してください。",langLabel:"言語",chatUs:"米国",chatTw:"台湾",danmakuFx:"弾幕",chatMore:"その他",nickLabel:"名前",room:"ルーム",lobby:"ロビー",perTicker:"銘柄別",usTickers:"米国銘柄",twTickers:"台湾銘柄",noUsTickers:"米国銘柄なし",noTwTickers:"台湾銘柄なし",chatRoom:"チャット",externalDiscuss:"外部ディスカッション",externalDigest:"外部ダイジェスト",usLobby:"米国ロビー",twLobby:"台湾ロビー",noMessages:"メッセージはまだありません",noComments:"コメントはまだありません",noTickersDiscuss:"この市場で議論できる銘柄がありません",paper:"模擬",paperMissing:"模擬ポートフォリオがありません。npm run paper を実行してください。",paperDisclaimer:"累積模擬口座（{date} 起） · 毎日リセットしません · シグナル即約定 · 実注文ではありません",paperRules:"ルール（市場別独立口座）",paperRuleTw:"台湾元本 NT$3,000,000 · 単元取引",paperRuleUs:"米国元本 US$100,000 · 1株から",paperRuleBuy:"買：リスト·リスク1%·ストップ1.5%·単銘柄≤8% · 即約定",paperRuleSell:"売：損切−3% · 利確+12%半分 · SMA20割れかつ日−2%超 · リスト外かつ損失 · ストップ高翌日−5%",paperTabTw:"台湾口座 · NT$",paperTabUs:"米国口座 · US$",paperBookTw:"台湾帳簿（NT$）",paperBookUs:"米国帳簿（US$）",principal:"元本",cash:"現金",equity:"純資産（ポジション＋現金）",totalPnl:"総損益",totalPnlPct:"総損益％",weekPerf:"週次",monthPerf:"月次",quarterPerf:"四半期",yearPerf:"年次",sinceInception:"開始以来",noTradesToday:"本日この種別の約定はありません（模擬）",noPositions:"保有なし",buy:"買",sell:"売",shares:"株",qtyShares:"株数",positions:"現在のポジション",position:"ポジション",avgCost:"平均単価",mark:"時価",unrealizedPnl:"含み損益",unrealizedPct:"含み％",recentTrades:"約定（直近40）",paperSession:"{date} · {inception} から累積 · シグナル即約定",reasonScreenBuy:"リスト新規",reasonAdd:"追加買い",reasonStop:"損切り",reasonTakeProfit:"利確",reasonMomentumBreak:"モメンタム悪化",reasonOffList:"リスト外",reasonLimitUpChase:"ストップ高追撃解消",stopLoss:"損切り",takeProfit:"利確",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"パフォーマンス",qty:"数量",note:"備考",strategyScreen:"戦略スクリーナー",strategyLead:"米／台ヒットを分けて表示 · データ不足は「不足」",strategyLoading:"戦略を読み込み中…",strategyEmpty:"戦略データがありません。npm run strategies を実行してください。",strategyLoadError:"戦略を読み込めません（{msg}）。npm run strategies を確認してください。",strategyList:"戦略一覧",strategyCat:"カテゴリ",hitCount:"ヒット",hitTitle:"ヒット数",strategyDetails:"詳細 · 戦略説明",conditions:"条件",results:"結果",copyJson:"JSON をコピー",exportCsv:"この戦略を CSV 出力",exportJson:"JSON 出力",copied:"コピー済み",noHitsExport:"本日この戦略のヒット行はありません",incomplete:"不足",hitsTotal:"{n}件",twOnlyHint:"台湾株のみ",hitMarket:"ヒット市場",noHits:"本日ヒットなし",dataInsufficient:"データ不足",calibTitle:"キャリブレーション",incompleteFilters:"未検査フィルター（通過扱いしない）：",sessionTwse:"TWSE session",ohlcvBar:"OHLCV バー",generated:"生成",universeTw:"台湾ユニバース",universeUs:"米国ユニバース",cat精選:"厳選",cat價量:"価格/出来高",cat籌碼:"需給",cat財務:"財務",cat大師:"マスター",cat週期:"サイクル",cat技術:"テクニカル",cat基本:"ファンダ",cat綜合:"総合",addWatchlist:"ウォッチ追加",watchlistAdded:"{ticker} を追加しました",watchlistExists:"{ticker} は登録済み",copyFailed:"コピー失敗",csvDownloaded:"CSV を保存しました",csvBlocked:"ダウンロード阻害 — データURIを開きます",backtestSoon:"バックテスト：未開放",backtestHint:"バックテストエンジン未開放（偽結果なし）",regimeToday:"本日の市場レジーム（米／台は別管理）",psychologyPhase:"心理フェーズ",cycleStance:"サイクル姿勢",liquidityBias:"流動性バイアス",temperatureScore:"市場温度",sizeMult:"サイズ倍率",regimeTags:"レジームタグ",dataGaps:"データ欠落",marketRegime:"市場レジーム",enum_euphoric:"陶酔",enum_late_optimism:"後期楽観",enum_mid_cycle:"中期",enum_cautious_recovery:"慎重な回復",enum_despondent:"絶望",enum_panic:"パニック",enum_defensive:"守備的",enum_selective:"厳選",enum_balanced:"均衡",enum_constructive:"建設的",enum_aggressive:"積極",enum_stabilize_first:"まず安定",enum_risk_off:"リスクオフ",enum_risk_on:"リスクオン",enum_neutral:"中立",logicTitle:"選別ロジック",logicSubtitle:"レジーム→スクリーニング→戦略→降格→理由→サイジング — 監査可能な数式",logicNoRegime:"市場レジーム未取得（次回スキャン待ち）。",logicStep1:"市場レジーム",logicStep1Lead:"米／台を別ダイヤルで先に決め、その後銘柄を選別。Kostolany 位相 × Marks 温度 × 金利流動性。",logicStep1Caption:"位相 → スクリーニング姿勢 → サイズ倍率（STANCE_SIZE_MULT）",logicRatesR2:"R2：^TNX が 20 日で +0.25pp 以上 → 流動性は防御寄り（価格が中立でも）。",logicRatesR3:"R3：利回りが 60 日で −0.25pp 以下 → より積極ダイヤルを許容（陶酔以外）。",logicRatesSeparate:"硬規則：dial_US と dial_TW は分離。単一の「世界ムード」にしない。",logicStep2:"数式スクリーン（A／B）",logicStep2Lead:"RS・モメンタム・SMA・出来高。閾値はサイクル姿勢で変動。",logicScreenA:"スクリーン A · モメンタム／RS",logicScreenABalanced:"均衡：日RS≥0.5pp または日≥1.5%；または5日≥3%；または1月≥6%かつ>SMA20；または両MAで5日≥0／RS≥0。",logicScreenASelective:"厳選：>SMA50 かつ（RS≥0.5 または5日≥3% または1月≥6%かつSMA20）。",logicScreenADefensive:"守備的：SMA20+SMA50、かつ（RS≥0.8 または5日≥4%）、出来高≥1.0（欠損は可）；1月≥12%かつ出来高<0.8 → 除外。",logicScreenAAggressive:"積極／建設的：RS／日／5日／1月を緩和；SMA200 下の firm-hands 可（1月<0かつ出来高≥1.4）。建設的は SMA20 または SMA200 も必要。",logicScreenAStabilize:"まず安定：>SMA20 必須、かつ RS≥1.0pp または出来高≥1.5。",logicScreenB:"スクリーン B · 出来高",logicScreenBVol:"出来高比＝当日／20日平均。下限：守備的≥1.0；積極≥1.1；他≥1.2。",logicScreenBMom:"A 補完：A未達でも1月≥8%かつSMA20+SMA50（まず安定以外）→ A 付与。",logicScore:"順位スコア",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"出来高≥1.2 加点（上限約8×0.6）；<0.4 で −0.5；その後レジームで調整。",logicStep3:"XQ 戦略",logicXqLead:"日次リストと並行：条件ヒット（価格/出来高・需給・財務・マスター・サイクル）。欠落は「不足」—捏造しない。",logicXqPriceVol:"価格/出来高：移動平均ブル、超短期など（OHLCV）。",logicXqFlow:"需給：法人同期など（公開単元閾値）。",logicXqFund:"財務：利益増加、PE／利益率など公開欄。",logicXqMasters:"マスター：リンチ／グレアム／バフェット系の計算可能代理。",logicXqCycle:"サイクル：Kostolany／市場レジームパック（当日の米台ダイヤル）。",logicOpenStrategies:"戦略ページを開く",logicStep4:"順位の降格／加点",logicStep4Lead:"scoreAdjust：薄い高RS、firm-hands、パニック後の安定で加減点。",logicDemoteHot:"守備的／厳選：1月≥8%かつ出来高<0.8 → −2.5；出来高<0.7かつ日>+2% → −1.2；両MA欠で −1.5。",logicDemoteThin:"K5：強いRSでも薄い出来高 → 降格／積極バケット外。",logicPromoteFirm:"aggressive／constructive：弱含み＋出来高増＋>SMA200（firm-hands）→ +2.2；序盤の上昇日出来高 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；>SMA20 なら +1.5。",logicListSize:"リスト長：守備的≈0.55×；厳選≈0.75×；まず安定≈0.45×；積極+2（上限14）；基準12。",logicStep5:"「なぜ」の組み立て",logicStep5Lead:"why 欄は検証済みフィールドの読みやすい結合 — ブラックボックスではない。",logicWhyRs:"日次% + 指数対比（米：S&P；台：TAIEX）pp。",logicWhyMom:"5日% と 約1か月%。",logicWhyVol:"出来高比≥1.2 のときのみ出来高文を追加。",logicWhySma:"SMA20／50／200 の上抜け状態（両MA優先）。",logicWhyRegime:"レジーム注記または姿勢／心理フェーズタグを付記。",logicStep6:"ペーパー・サイジング規律",logicStep6Lead:"ペーパー口座はプロセス検証用 — 実注文ではない。レジームサイズ倍率と固定リスク式で制約。",logicPaperCapital:"元本：台湾 NT$3,000,000（単元）；米国 US$100,000（1株〜）。",logicPaperBuy:"買い：リスト（observeのみは原則回避）；リスク＝資本×1%；ストップ≈価格×1.5%（出来高≥3→2.5%）；1銘柄≤資本8%。",logicPaperSizeMult:"サイズ倍率（0.3–1.35×）で当日の積極度を表示；リスト長と連動。",logicPaperSell:"売り：損切−3%；利確+12%半減；SMA20割れかつ日<−2%；リスト外かつ含み損；ストップ高追撃の翌日−5%。",logicOpenPaper:"ペーパーを開く",logicFootnote:"透明なスクリーニング説明のための合成 — 投資助言ではない。公開の運用代理のみ；著作権保護の本文は複製しない。",backendOff:"ディスカッション未接続",localComments:"サイトコメント",futu:"富途",nickPlaceholder:"ニックネーム（任意）",commentPlaceholder:"コメント",commentInput:"コメントを入力",send:"送信",guest:"ゲスト",noLocalComments:"コメントはまだありません",backendNotConnected:"バックエンド未接続",readFail:"読み込み失敗：{msg}",sendFail:"送信失敗：{msg}",sendFailShort:"送信失敗",noSource:"{source} なし",newsClues:"ニュース／議論の手がかり（コメントではない）",relatedNews:"関連公開ニュース（SNSコメントではない）",messages:"メッセージ",giscusUnset:"Giscus 未設定（repoId / categoryId が必要）。",manualOpen:"手動で開く",noSnippet:"(要約なし)",noTickerData:"この銘柄の{kind}データはありません",viaBackup:"バックアップ出典：{via}",noDigestBlock:"{title} ブロックなし（対象なし／未取得）",socialDigestMarket:"ソーシャル要約の市場",socialDigestTitle:"ソーシャル要約",socialUs:"米国ソース",socialTw:"台湾ソース",externalDigestShort:"外部ダイジェスト",routingNote:"ルーティング：米国 → Reddit＋富途；台湾 → PTT＋Dcard＋Threads",socialUsTab:"米国 Reddit／富途",socialTwTab:"台湾 PTT／Dcard／Threads",socialLoadFail:"ソーシャル要約の取得に失敗：{msg}",futuFull:"富途",condPass:"条件",condFail:"未達",condSkip:"省略",pe:"PER",opMargin:"営業利益率",grossMargin:"粗利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自己売買",maBull:"移動平均ブル",amplitude:"振幅",zhang:"単元",limitUp:"ストップ高",momentum:"モメンタム",metricPrice:"価格",metricDayPct:"日次%",metricVolRatioYday:"出来高比(昨)",metricVolToday:"出来高(単元)",metricDebt:"負債比率%",metricDirector:"役員持株%",metricOpQ:"直近四半期営業利益率%",metricSource:"出典",foreign1d:"外資1日(単元)",trust1d:"投信1日(単元)",dealer1d:"自己1日(単元)",foreign5d:"外資5日(単元)",trust5d:"投信5日(単元)",dealer5d:"自己5日(単元)"},he={"zh-Hant":pe,en:mt,"zh-Hans":gt,ja:ht},vt=/\b(euphoric|late_optimism|mid_cycle|cautious_recovery|despondent|panic|defensive|selective|balanced|constructive|aggressive|stabilize_first|risk_off|risk_on|neutral)\b/g;function V(t){if(t==null||t==="")return a("dataInsufficient");const e=String(t),s=`enum_${e}`,r=e.includes("_")?e.replace(/_/g," "):e;return a(s,r.replace(/\b\w/g,n=>n.toUpperCase()))}function ft(t){const e=String(t||"").toLowerCase();return["defensive","selective","balanced","constructive","aggressive","stabilize_first"].includes(e)?e.replace(/_/g,"-"):"neutral"}function yt(t){return t==null||t===""?"":String(t).replace(vt,e=>V(e))}function a(t,e,s){let r,n=s;e&&typeof e=="object"&&!Array.isArray(e)?n=e:typeof e=="string"&&(r=e);let c=(he[j]||he[Se])[t]??he[Se][t]??r??t;if(n)for(const[m,y]of Object.entries(n))c=c.replace(new RegExp(`\\{${m}\\}`,"g"),String(y));return c}function bt(){const t=Ze.map(e=>`<option value="${e.id}"${e.id===j?" selected":""}>${e.label}</option>`).join("");return`
    <label class="lang-switch" title="${a("langLabel")}">
      <span class="lang-switch-label">${a("langLabel")}</span>
      <select class="lang-select" data-lang-select aria-label="${a("langLabel")}">
        ${t}
      </select>
    </label>`}function St(t,e){var r;const s=(r=t==null?void 0:t.querySelector)==null?void 0:r.call(t,"[data-lang-select]");s&&(s.value=j,s.addEventListener("change",()=>{pt(s.value)}))}function i(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function d(t,e){return i(a(t,e))}const $t="./data/paper-portfolio.json";function Y(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function ue(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function Je(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(F(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Qe(t){return t==="USD"?"US$":t==="TWD"?"NT$":""}function ee(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"?0:2;return`${Qe(e)}${Je(t,s)}`}function te(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"&&t>=100?0:2;return`${Qe(e)}${Je(t,s)}`}function et(t){return{"screen-buy":a("reasonScreenBuy"),add:a("reasonAdd"),stop:a("reasonStop"),"take-profit":a("reasonTakeProfit"),"momentum-break":a("reasonMomentumBreak"),"off-list":a("reasonOffList"),"limit-up-chase":a("reasonLimitUpChase")}[t]||t||""}function oe(t){return t?`
    <div class="paper-win">
      <div class="w-label">${t.sinceInception?d("sinceInception",a("sinceInception")):i(t.label||"")}</div>
      <div class="w-val ${Y(t.pct)}">${ue(t.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function kt(t,e){return t.length?t.map(s=>{var r;return`
      <tr>
        <td><span class="ticker">${i(s.ticker)}</span></td>
        <td class="name-cell">${i(s.name||"")}</td>
        <td class="num">${(r=s.qty)==null?void 0:r.toLocaleString(F())}</td>
        <td class="num">${te(s.price,e)}</td>
        <td><span class="badge reason ${i(s.reason||"")}">${i(et(s.reason))}</span></td>
        <td class="why-cell">${i(s.reasonText||"")}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${i(a("noTradesToday"))}</td></tr>`}function Tt(t,e){return t.length?t.map(s=>{var o;const r=(s.mark-s.avgCost)*s.qty,n=s.avgCost?(s.mark-s.avgCost)/s.avgCost*100:0;return`
      <tr>
        <td><span class="ticker">${i(s.ticker)}</span></td>
        <td class="num">${(o=s.qty)==null?void 0:o.toLocaleString(F())}</td>
        <td class="num">${te(s.avgCost,e)}</td>
        <td class="num">${te(s.mark,e)}</td>
        <td class="num ${Y(r)}">${ee(r,e)}</td>
        <td class="num ${Y(n)}">${ue(n)}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${i(a("noPositions"))}</td></tr>`}function wt(t,e,s){const r=e.currency,n=a(t==="TW"?"paperBookTw":"paperBookUs"),o=ee(e.startCash,r),c=(s==null?void 0:s.totalPnl)??e.equity-e.startCash,m=(s==null?void 0:s.totalPnlPct)??(e.startCash?(e.equity-e.startCash)/e.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${i(n)}</h3>
      <p class="paper-start">${d("principal",a("principal"))} ${o}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">${i(a("cash"))}</div>
          <div class="k-val">${ee(e.cash,r)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${d("position",a("equity"))}</div>
          <div class="k-val">${ee(e.equity,r)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${i(a("totalPnl"))}</div>
          <div class="k-val ${Y(c)}">${ee(c,r)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${i(a("totalPnlPct"))}</div>
          <div class="k-val ${Y(m)}">${ue(m)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${i(a("weekPerf"))}</div>
          ${oe(s==null?void 0:s.week)}
        </div>
        <div>
          <div class="win-name">${i(a("monthPerf"))}</div>
          ${oe(s==null?void 0:s.month)}
        </div>
        <div>
          <div class="win-name">${i(a("quarterPerf"))}</div>
          ${oe(s==null?void 0:s.quarter)}
        </div>
        <div>
          <div class="win-name">${i(a("yearPerf"))}</div>
          ${oe(s==null?void 0:s.year)}
        </div>
      </div>
    </article>`}function Pt(t,e){return t.length?t.map(s=>{var n;const r=s.side==="SELL"?a("sell"):a("buy");return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${i(s.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${i(s.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${i(r)} ${(n=s.qty)==null?void 0:n.toLocaleString(F())} ${i(a("shares"))}</div>
            <div style="font-family:var(--mono)">${te(s.price,e)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${i(s.reason||"")}">${i(et(s.reason))}</span>
        </div>
        ${s.reasonText?`<p class="lc-why">${i(s.reasonText)}</p>`:""}
      </div>`}).join(""):`<div class="list-card empty-card">${i(a("noTradesToday"))}</div>`}function At(t,e){return t.length?t.map(s=>{var o;const r=(s.mark-s.avgCost)*s.qty,n=s.avgCost?(s.mark-s.avgCost)/s.avgCost*100:0;return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${i(s.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">${i(a("qtyShares"))} ${(o=s.qty)==null?void 0:o.toLocaleString(F())}</div>
          </div>
          <div style="text-align:right">
            <div class="${Y(r)}" style="font-family:var(--mono);font-weight:600">${ee(r,e)}</div>
            <div class="${Y(n)}" style="font-family:var(--mono)">${ue(n)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          <span>${i(a("avgCost"))} ${te(s.avgCost,e)}</span>
          <span>${i(a("mark"))} ${te(s.mark,e)}</span>
        </div>
      </div>`}).join(""):`<div class="list-card empty-card">${i(a("noPositions"))}</div>`}function ve(t,e,s){return`
    <div class="paper-table-block">
      <h4>${i(t)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${d("ticker",a("ticker"))}</th>
              <th>${i(a("name"))}</th>
              <th>${i(a("qty"))}</th>
              <th>${i(a("price"))}</th>
              <th>${i(a("reason"))}</th>
              <th>${i(a("note"))}</th>
            </tr>
          </thead>
          <tbody>${kt(e,s)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${Pt(e,s)}</div>
    </div>`}function Lt(t,e){return`
    <div class="paper-table-block">
      <h4>${i(a("positions"))}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${d("ticker",a("ticker"))}</th>
              <th>${i(a("qty"))}</th>
              <th>${i(a("avgCost"))}</th>
              <th>${i(a("mark"))}</th>
              <th>${d("unrealizedPnl",a("unrealizedPnl"))} $</th>
              <th>${d("unrealizedPnl",a("unrealizedPct"))}</th>
            </tr>
          </thead>
          <tbody>${Tt(t,e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${At(t,e)}</div>
    </div>`}function Ne(t,e,s,r,n,o){if(!e)return"";const c=e.currency,m=[...e.trades||[]].sort((T,w)=>T.date<w.date?1:T.date>w.date?-1:0),y=m.filter(T=>T.date===r),p=y.filter(T=>T.side==="BUY"),v=y.filter(T=>T.side==="SELL"),b=m.slice(0,40),k=o;return`
    <div class="paper-panel ${n?"active":""}" id="paper-panel-${t}" role="tabpanel">
      ${wt(t,e,s)}
      <p class="paper-session-note">${i(a("paperSession",{date:r||"—",inception:k}))}</p>
      ${ve(`${a("buy")} ${r||""}`,p,c)}
      ${ve(`${a("sell")} ${r||""}`,v,c)}
      ${Lt(e.positions||[],c)}
      ${ve(a("recentTrades"),b,c)}
    </div>`}function qt(t){var c,m;if(!t||!t.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${d("paperTrade",a("paper"))}</h2>
        <p class="paper-missing">${i(a("paperMissing"))}</p>
      </section>`;const e=t.books.TW,s=t.books.US;let n=(t.asOf||"").slice(0,10);try{n=new Date(t.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const o=t.startDate||(e==null?void 0:e.startDate)||(s==null?void 0:s.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${d("paperTrade",a("paper"))}</h2>
      <p class="paper-disclaimer" role="note">
        ${i(a("paperDisclaimer",{date:o}))}
      </p>
      <details class="paper-rules">
        <summary>${i(a("paperRules"))}</summary>
        <ul>
          <li>${i(a("paperRuleTw"))}</li>
          <li>${i(a("paperRuleUs"))}</li>
          <li>${i(a("paperRuleBuy"))}</li>
          <li>${i(a("paperRuleSell"))}</li>
        </ul>
      </details>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${i(a("paperTabTw"))}</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${i(a("paperTabUs"))}</button>
      </div>
      ${Ne("TW",e,(c=t.metrics)==null?void 0:c.TW,n,!0,o)}
      ${Ne("US",s,(m=t.metrics)==null?void 0:m.US,n,!1,o)}
    </section>`}function xt(t){const e=t.querySelectorAll(".paper-tab-btn");e.forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.paperTab;e.forEach(n=>{const o=n.dataset.paperTab===r;n.classList.toggle("active",o),n.setAttribute("aria-selected",o?"true":"false")}),t.querySelectorAll(".paper-panel").forEach(n=>{n.classList.toggle("active",n.id===`paper-panel-${r}`)})})})}async function Ct(){try{const t=await fetch($t);return t.ok?await t.json():null}catch{return null}}const Ue={},ke="ss-chat-nick",fe=()=>a("backendOff");function Mt(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&Ue?Ue:{},s=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),r=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:s,anon:r}}function W(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function _e(){try{return String(localStorage.getItem(ke)||"").trim().slice(0,24)}catch{return""}}function ye(t){try{const e=String(t||"").trim().slice(0,24);e?localStorage.setItem(ke,e):localStorage.removeItem(ke)}catch{}}function Rt(t,e){const s=String(t||"").trim().toLowerCase(),r=String(e||"").trim().toLowerCase();return!s||!r?!1:s===r}function Dt(t){try{const e=new Date(t),s=new Date;return e.getFullYear()===s.getFullYear()&&e.getMonth()===s.getMonth()&&e.getDate()===s.getDate()?e.toLocaleTimeString(F(),{hour:"2-digit",minute:"2-digit",hour12:!1}):e.toLocaleString(F(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}function Nt(t,e){const s={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(r,n=80){const o=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(r)}&order=created_at.asc&limit=${n}`,c=await fetch(o,{headers:s});if(!c.ok)throw new Error(`comments select ${c.status}`);return c.json()},async insert(r){const n=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:s,body:JSON.stringify(r)});if(!n.ok){const o=await n.text();throw new Error(`comments insert ${n.status}: ${o}`)}return n.json()}}}function Ut(){return'<svg class="chat-send-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.4 20.4 20.85 12 3.4 3.6l.1 6.55L14.5 12 3.5 13.85l-.1 6.55z"/></svg>'}function Be(t,e,s={}){if(!t||!e)return{ok:!1,destroy(){}};const r=s.config||globalThis.STOCK_SOCIAL_CONFIG||{},n=String(s.market||"US").toUpperCase()==="TW"?"TW":"US",{url:o,anon:c}=Mt(r),m=Math.min(r.commentMaxLen||500,s.maxLen||200),y=r.postCooldownMs||4e3,p=s.title||e,v=s.emptyLine||a("noMessages"),b=s.danmakuLayer||document.querySelector("#ss-danmaku-layer"),k=s.flyToggle||document.querySelector("#ss-danmaku-toggle"),T=()=>!!(k&&k.checked);t.classList.add("chat-panel"),t.dataset.market=n,t.dataset.ticker=e,t.setAttribute("role","region"),t.setAttribute("aria-label",p);const w=_e();t.innerHTML=`
    <div class="chat-status" aria-live="polite"></div>
    <div class="chat-messages" role="log" aria-label="${W(a("messages"))}" tabindex="0"></div>
    <form class="chat-composer" autocomplete="off">
      <div class="chat-nick-row">
        <label class="chat-nick-label" for="chat-nick-input">${W(a("nickLabel"))}</label>
        <input id="chat-nick-input" class="chat-nick" maxlength="24" placeholder="${W(a("nickPlaceholder"))}" value="${W(w)}" autocomplete="nickname" />
      </div>
      <div class="chat-compose-row">
        <input class="chat-body" type="text" maxlength="${m}" placeholder="${W(a("commentInput"))}" required autocomplete="off" enterkeyhint="send" />
        <button type="submit" class="chat-send" aria-label="${W(a("send"))}" title="${W(a("send"))}">${Ut()}<span class="chat-send-text">${W(a("send"))}</span></button>
      </div>
    </form>
  `;const C=t.querySelector(".chat-status"),f=t.querySelector(".chat-messages"),$=t.querySelector(".chat-composer"),P=$.querySelector(".chat-nick"),U=$.querySelector(".chat-body"),Z=$.querySelector(".chat-send");let H=new Set,u=!1,g=!1;function h(L){if(!b||!T())return;const R=document.createElement("div");R.className="ss-danmaku-item",R.textContent=L,R.style.top=`${8+Math.random()*42}vh`,R.style.animationDuration="12000ms",b.appendChild(R),window.setTimeout(()=>R.remove(),12200)}function D(L=!1){const R=f.scrollHeight-f.scrollTop-f.clientHeight<120;(L||R)&&(f.scrollTop=f.scrollHeight)}function S(L){const R=(P.value||_e()||"").trim();if(!L.length){f.innerHTML=`<div class="chat-empty-state"><p>${W(v)}</p></div>`;return}f.innerHTML=L.map(_=>{const E=Rt(_.nickname,R),me=E?"own":"other",ne=W(_.nickname||a("guest")),re=W(_.body||""),De=W(Dt(_.created_at));return`<article class="chat-bubble chat-bubble--${me}" data-id="${W(_.id)}">
          ${E?"":`<div class="chat-bubble-nick">${ne}</div>`}
          <div class="chat-bubble-body">${re}</div>
          <div class="chat-bubble-meta">${De}</div>
        </article>`}).join("")}if(!o||!c)return C.textContent=fe(),C.classList.add("is-warn"),$.querySelectorAll("input,button").forEach(L=>{L.disabled=!0}),f.innerHTML=`<div class="chat-empty-state"><p>${W(v)}</p></div>`,{ok:!1,reason:"no-config",market:n,destroy(){}};const A=Nt(o,c);C.textContent="",C.classList.remove("is-warn");async function M(L=!1,R=!1){if(!g)try{const _=await A.list(e,80);S(_),D(R||!H.size);for(const E of _)H.has(E.id)||(H.add(E.id),L&&h(`${E.nickname}: ${E.body}`));H.size>200&&(H=new Set([...H].slice(-100))),C.classList.contains("is-warn")&&C.textContent===fe()&&(C.textContent="",C.classList.remove("is-warn"))}catch{C.textContent=fe(),C.classList.add("is-warn")}}P.addEventListener("change",()=>{ye(P.value),f.querySelectorAll(".chat-bubble").length&&M(!1,!1)}),P.addEventListener("blur",()=>ye(P.value)),$.addEventListener("submit",async L=>{if(L.preventDefault(),u)return;const R=(P.value||a("guest")).trim().slice(0,24)||a("guest");ye(P.value);const _=(U.value||"").trim().slice(0,m);if(_){u=!0,Z.disabled=!0;try{await A.insert({ticker:e,body:_,nickname:R}),U.value="",await M(!0,!0),U.focus()}catch{C.textContent=a("sendFailShort"),C.classList.add("is-warn")}finally{window.setTimeout(()=>{u=!1,Z.disabled=!1},y)}}}),U.addEventListener("keydown",L=>{L.key==="Enter"&&!L.shiftKey&&(L.preventDefault(),$.requestSubmit())}),M(!1,!0);const I=window.setInterval(()=>M(!0,!1),r.pollIntervalMs||8e3);return{ok:!0,market:n,ticker:e,destroy(){g=!0,window.clearInterval(I)}}}const Ie={},_t=()=>a("backendOff");function Bt(){return[{id:"local",label:a("localComments")},{id:"reddit",label:"Reddit"},{id:"futu",label:a("futu")}]}function It(){return[{id:"local",label:a("localComments")},{id:"ptt",label:"PTT"},{id:"dcard",label:"Dcard"},{id:"threads",label:"Threads"}]}function Et(t,e){const s=String(e||"").toUpperCase();return s==="US"||s==="TW"?s:String(t||"").toUpperCase().endsWith(".TW")?"TW":"US"}function Ot(t){return t==="TW"?It():Bt()}function Wt(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&Ie?Ie:{},s=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),r=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:s,anon:r}}function x(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function zt(t,e){const s={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(r,n=50){const o=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(r)}&order=created_at.asc&limit=${n}`,c=await fetch(o,{headers:s});if(!c.ok)throw new Error(`comments select ${c.status}`);return c.json()},async insert(r){const n=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:s,body:JSON.stringify(r)});if(!n.ok){const o=await n.text();throw new Error(`comments insert ${n.status}: ${o}`)}return n.json()}}}function Ft(t,e,s){if(!t||!s)return null;const r=t[e];return Array.isArray(r)&&r.find(n=>String(n.ticker).toUpperCase()===String(s).toUpperCase())||null}function Ht(t,e,{futuMode:s=!1}={}){if(!t)return`<p class="ss-empty">${x(a("noSource",{source:e}))}</p>`;const r=[];t.blocker&&r.push(`<p class="ss-digest-blocker">⚠ ${x(t.blocker)}</p>`);const n=t.items||[],o=t.newsRelated||[];if(n.length&&r.push(n.map(c=>{const m=c.url?x(c.url):"#",y=c.score!=null?`<span class="ss-score">▲ ${x(c.score)}</span>`:"",p=c.author?`@${x(c.author)}`:"";return`<article class="ss-digest-item">
            <a href="${m}" target="_blank" rel="noopener noreferrer">${x(c.snippet||c.title||"(無摘要)")}</a>
            <div class="ss-digest-meta">${y} ${p}</div>
          </article>`}).join("")),o.length){const c=a(s?"newsClues":"relatedNews");r.push(`<p class="ss-digest-sub">${c}</p>`),r.push(o.map(m=>`<article class="ss-digest-item">
            <a href="${m.url?x(m.url):"#"}" target="_blank" rel="noopener noreferrer">${x(m.snippet||"(無標題)")}</a>
          </article>`).join(""))}return Array.isArray(t.manualUrls)&&t.manualUrls.length&&!n.length&&r.push('<p class="ss-digest-sub">手動開啟</p>'+t.manualUrls.slice(0,4).map(c=>`<article class="ss-digest-item"><a href="${x(c)}" target="_blank" rel="noopener noreferrer">${x(c)}</a></article>`).join("")),!n.length&&!o.length&&!t.blocker&&r.push(`<p class="ss-empty">暫無 ${x(e)} 資料</p>`),r.join("")||'<p class="ss-empty">暫無資料</p>'}function jt(t,e,s={}){if(!t||!e)return{ok:!1};const r=s.config||globalThis.STOCK_SOCIAL_CONFIG||{},n=s.digest||null,o=Et(e,s.market||t.getAttribute("data-market")),c=Ot(o),{url:m,anon:y}=Wt(r),p=r.commentMaxLen||500,v=r.postCooldownMs||4e3,b=!!s.bare,k="",T=c.map((S,A)=>`<button type="button" class="ss-src-tab${A===0?" active":""}" data-src="${S.id}" role="tab" aria-selected="${A===0?"true":"false"}">${S.label}</button>`).join(""),w=c.filter(S=>S.id!=="local").map(S=>`<div class="ss-src-panel" data-panel="${S.id}" role="tabpanel" hidden></div>`).join("");t.classList.add("ss-thread"),t.dataset.market=o;const C=`
      <div class="ss-src-tabs" role="tablist" aria-label="${x(e)}">${T}</div>
      <div class="ss-src-panels">
        <div class="ss-src-panel active" data-panel="local" role="tabpanel">
          <div class="ss-thread-status"></div>
          <ul class="ss-thread-list"></ul>
          <form class="ss-thread-form ss-composer">
            <input class="ss-nick" maxlength="24" placeholder="${x(a("nickPlaceholder"))}" autocomplete="nickname" />
            <textarea class="ss-body" maxlength="${p}" rows="2" placeholder="${x(a("commentPlaceholder"))}" required></textarea>
            <button type="submit">${x(a("send"))}</button>
          </form>
        </div>
        ${w}
      </div>`;t.innerHTML=b?`<div class="ss-thread-bare" data-ticker="${x(e)}">${C}</div>`:`<details class="ss-thread-details"${k}>
      <summary>${x(e)}</summary>
      ${C}
    </details>`;const f=t.querySelector(".ss-thread-status"),$=t.querySelector(".ss-thread-list"),P=t.querySelector(".ss-thread-form"),U={ptt:["ptt","PTT",!1],dcard:["dcard","Dcard",!1],threads:["threads","Threads",!1],reddit:["reddit","Reddit",!1],futu:["futu",a("futu"),!0]};for(const S of c){if(S.id==="local")continue;const A=U[S.id];if(!A)continue;const[M,I,L]=A,R=t.querySelector(`[data-panel="${S.id}"]`);R&&(R.innerHTML=Ht(Ft(n,M,e),I,{futuMode:L}))}const Z=t.querySelectorAll(".ss-src-tab"),H=t.querySelectorAll(".ss-src-panel");if(Z.forEach(S=>{S.addEventListener("click",()=>{const A=S.dataset.src;Z.forEach(M=>{const I=M.dataset.src===A;M.classList.toggle("active",I),M.setAttribute("aria-selected",I?"true":"false")}),H.forEach(M=>{const I=M.dataset.panel===A;M.classList.toggle("active",I),M.hidden=!I})})}),!m||!y)return f.textContent=_t(),f.className="ss-thread-status is-warn",P.querySelectorAll("input,textarea,button").forEach(S=>{S.disabled=!0}),$.innerHTML=`<li class="ss-empty">${x(a("backendNotConnected"))}</li>`,{ok:!1,reason:"no-config",market:o};const u=zt(m,y);f.textContent="";let g=!1;async function h(){try{const S=await u.list(e);if(!S.length){$.innerHTML=`<li class="ss-empty">${x(a("noLocalComments"))}</li>`;return}$.innerHTML=S.map(A=>`<li><strong>${x(A.nickname)}</strong> ${x(A.body)}<span class="meta">${x(new Date(A.created_at).toLocaleString(F(),{hour12:!1}))}</span></li>`).join("")}catch(S){f.textContent=a("readFail",{msg:S.message}),f.className="ss-thread-status is-warn"}}P.addEventListener("submit",async S=>{if(S.preventDefault(),g)return;const A=(P.querySelector(".ss-nick").value||a("guest")).trim().slice(0,24)||a("guest"),M=(P.querySelector(".ss-body").value||"").trim().slice(0,p);if(!M)return;g=!0;const I=P.querySelector("button");I.disabled=!0;try{await u.insert({ticker:e,body:M,nickname:A}),P.querySelector(".ss-body").value="",await h()}catch(L){f.textContent=a("sendFail",{msg:L.message}),f.className="ss-thread-status is-warn"}finally{window.setTimeout(()=>{g=!1,I.disabled=!1},v)}}),h();const D=window.setInterval(h,r.pollIntervalMs||1e4);return{ok:!0,market:o,destroy(){window.clearInterval(D)}}}function Vt(t=document,e={}){const s=t.querySelectorAll("[data-ticker-comments]"),r=[];return s.forEach(n=>{const o=n.getAttribute("data-ticker-comments")||n.dataset.ticker,c=n.getAttribute("data-market")||void 0;o&&r.push(jt(n,o,{...e,market:c}))}),r}function Gt(t,e){if(!t||!e||t.querySelector("script[data-giscus], iframe.giscus-frame"))return;const s=document.createElement("script");s.src="https://giscus.app/client.js",s.async=!0,s.crossOrigin="anonymous",s.setAttribute("data-giscus","1"),s.setAttribute("data-repo",e.repo||""),s.setAttribute("data-repo-id",e.repoId||""),s.setAttribute("data-category",e.category||"General"),s.setAttribute("data-category-id",e.categoryId||""),s.setAttribute("data-mapping",e.mapping==="pathname"?"pathname":"specific"),s.setAttribute("data-term",e.term||"site-discussion"),s.setAttribute("data-strict","0"),s.setAttribute("data-reactions-enabled","1"),s.setAttribute("data-emit-metadata","0"),s.setAttribute("data-input-position","bottom"),s.setAttribute("data-theme",e.theme||"dark"),s.setAttribute("data-lang",e.lang||"zh-TW"),t.appendChild(s)}function Zt(t="#ss-giscus",e={}){const s=document.querySelector(t);if(!s)return{ok:!1,reason:"missing"};const n=(e.config||globalThis.STOCK_SOCIAL_CONFIG||{}).giscus||{};if(!n.enabled||!n.repoId||!n.categoryId)return s.innerHTML=`<p class="ss-chat-status is-warn">${x(a("giscusUnset"))}</p>`,{ok:!1,reason:"no-config"};const o=s.querySelector(".ss-giscus-host")||s;return Gt(o,{...n,term:n.term||"site-discussion"}),{ok:!0}}function q(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Xt(t){const e=t.manualUrls||[];return e.length?`<p class="ss-digest-sub">${q(a("manualOpen"))}</p>`+e.slice(0,4).map(s=>`<article class="ss-digest-item"><a href="${q(s)}" target="_blank" rel="noopener noreferrer">${q(s)}</a></article>`).join(""):""}function Ee(t){const e=t.score!=null?`<span class="ss-score">▲ ${q(t.score)}</span>`:"",s=t.author?`@${q(t.author)}`:"",r=t.created?q(new Date(t.created).toLocaleString(F(),{hour12:!1})):t.date?q(t.date):"",n=t.via?`<span class="ss-via">${q(t.via)}</span>`:"";return`<article class="ss-digest-item">
    <a href="${t.url?q(t.url):"#"}" target="_blank" rel="noopener noreferrer">${q(t.snippet||t.title||a("noSnippet"))}</a>
    <div class="ss-digest-meta">${e} ${s} ${r} ${n}</div>
  </article>`}function Yt(t,e,{futuMode:s=!1}={}){var y;const r=t.blocker?`<p class="ss-digest-blocker">⚠ ${q(t.blocker)}</p>`:"",n=t.items||[],o=t.newsRelated||[];let c="";if(n.length&&(c+=n.map(Ee).join("")),o.length){const p=a(s?"newsClues":"relatedNews");c+=`<p class="ss-digest-sub">${p}</p>`+o.map(Ee).join("")}!n.length&&((y=t.manualUrls)!=null&&y.length)&&(c+=Xt(t)),c||(c=`<p class="ss-empty">${q(a("noTickerData",{kind:e}))}</p>`);const m=t.via&&t.via!=="reddit.com"?`<p class="ss-digest-via-note">${q(a("viaBackup",{via:t.via}))}</p>`:"";return`<section class="ss-digest-ticker" data-ticker="${q(t.ticker)}">
    <h4>${q(t.ticker)}</h4>
    ${r}
    ${m}
    ${c}
  </section>`}function ae(t,e,s,r={}){const n=(e||[]).map(o=>Yt(o,s,r)).join("");return`<div class="ss-digest-col">
    <h4 class="ss-digest-col-title">${q(t)}</h4>
    ${n||`<p class="ss-empty">${q(a("noDigestBlock",{title:t}))}</p>`}
  </div>`}async function tt(t){const e=globalThis.STOCK_SOCIAL_CONFIG||{},s=t||e.socialDigestUrl||"./data/social-digest.json",r=await fetch(s,{cache:"no-cache"});if(!r.ok)throw new Error(`social-digest ${r.status}`);return r.json()}function Kt(t,e){if(!e)return;const s=t.asOf?new Date(t.asOf).toLocaleString(F(),{hour12:!1}):"—";(t.notes||[]).map(p=>`<li>${q(p)}</li>`).join(""),t.routing&&`${q(a("routingNote"))}`;const r=`
    <div class="ss-digest-market" data-market-panel="US">
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${ae("Reddit",t.reddit,"Reddit")}
        ${ae(a("futuFull"),t.futu,a("futu"),{futuMode:!0})}
      </div>
    </div>`,n=`
    <div class="ss-digest-market" data-market-panel="TW" hidden>
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${ae("PTT",t.ptt,"PTT")}
        ${ae("Dcard",t.dcard,"Dcard")}
        ${ae("Threads",t.threads,"Threads")}
      </div>
    </div>`,o=(t.reddit||[]).length||(t.futu||[]).length,c=(t.ptt||[]).length||(t.dcard||[]).length||(t.threads||[]).length,m=o?"US":c?"TW":"US";e.innerHTML=`
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>${q(a("externalDigestShort"))}</h3>
        <p class="ss-digest-asof">${q(s)}</p>
      </header>
      <div class="ss-digest-market-tabs" role="tablist" aria-label="${q(a("socialDigestMarket"))}">
        <button type="button" class="ss-mkt-tab${m==="US"?" active":""}" data-market="US" role="tab" aria-selected="${m==="US"}">${q(a("socialUsTab"))}</button>
        <button type="button" class="ss-mkt-tab${m==="TW"?" active":""}" data-market="TW" role="tab" aria-selected="${m==="TW"}">${q(a("socialTwTab"))}</button>
      </div>
      ${r}
      ${n}
    </div>
  `,e.querySelectorAll("[data-market-panel]").forEach(p=>{const v=p.getAttribute("data-market-panel")===m;p.hidden=!v});const y=e.querySelectorAll(".ss-mkt-tab");y.forEach(p=>{p.addEventListener("click",()=>{const v=p.getAttribute("data-market");y.forEach(b=>{const k=b===p;b.classList.toggle("active",k),b.setAttribute("aria-selected",k?"true":"false")}),e.querySelectorAll("[data-market-panel]").forEach(b=>{b.hidden=b.getAttribute("data-market-panel")!==v})})})}async function Jt(t="#ss-social-digest",e){const s=document.querySelector(t);if(!s)return{ok:!1};try{const r=await tt(e);return Kt(r,s),{ok:!0,data:r}}catch(r){return s.innerHTML=`<p class="ss-digest-blocker">${q(a("socialLoadFail",{msg:r.message}))}</p>`,{ok:!1,error:r}}}const at={defensive:.5,selective:.8,balanced:1,constructive:1.1,aggressive:1.35,stabilize_first:.3},Qt={euphoric:"defensive",late_optimism:"selective",mid_cycle:"balanced",cautious_recovery:"constructive",despondent:"aggressive",panic:"stabilize_first"};function st(t){return t==null||Number.isNaN(t)?"—":`${Number(t).toFixed(2)}×`}function ea(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${Number(t).toFixed(2)}`}function Le(t){if(!t)return`<span class="stance-badge stance-neutral">${i(a("dataInsufficient"))}</span>`;const e=ft(t),s=V(t);return`<span class="stance-badge stance-${e}">${i(s)}</span>`}function ce(t,e){return`<div class="logic-metric">
    <span class="k">${i(t)}</span>
    <span class="v">${e}</span>
  </div>`}function de(t,e,{detailed:s=!1}={}){if(!e)return"";const r=e.incomplete?" incomplete":"",n=e.psychologyPhase,o=e.cycleStance,c=e.liquidityBias,m=n?V(n):a("dataInsufficient"),y=c?V(c):a("dataInsufficient"),p=ea(e.temperatureScore),v=st(e.sizeMult??at[o]),b=Array.isArray(e.dataGaps)&&e.dataGaps.length?`<div class="regime-gaps">${i(a("dataGaps"))}: ${i(e.dataGaps.slice(0,5).join(", "))}${e.dataGaps.length>5?"…":""}</div>`:"",k=s&&Array.isArray(e.implications)&&e.implications.length?`<ul class="logic-impl">${e.implications.slice(0,3).map(w=>`<li>${i(yt(w))}</li>`).join("")}</ul>`:"",T=s?`<div class="logic-metrics" role="list">
        ${ce(a("psychologyPhase"),i(m))}
        ${ce(a("liquidityBias"),i(y))}
        ${ce(a("temperatureScore"),i(p))}
        ${ce(a("sizeMult"),i(v))}
      </div>`:`<div class="regime-meta">
        <span>${i(a("psychologyPhase"))} <strong>${i(m)}</strong></span>
        <span>${i(a("liquidityBias"))} <strong>${i(y)}</strong></span>
      </div>`;return`<div class="regime-chip${s?" logic-regime-chip":""}${r}">
    <div class="regime-chip-top">
      <div class="label">${i(t)} · ${i(a("marketRegime"))}</div>
      ${Le(o)}
    </div>
    ${T}
    ${k}
    ${b}
  </div>`}function ta(t){return!t||!t.us&&!t.tw?`<p class="logic-muted">${i(a("logicNoRegime"))}</p>`:`<div class="regime-strip logic-regime-live" aria-label="${i(a("regimeToday"))}">
    ${de("US",t.us,{detailed:!0})}
    ${de("TW",t.tw,{detailed:!0})}
  </div>`}function aa(t){return!t||!t.us&&!t.tw?"":`<div class="regime-strip" aria-label="${i(a("marketRegime"))}">
    ${de("US",t.us,{detailed:!1})}
    ${de("TW",t.tw,{detailed:!1})}
  </div>`}function J(t,e,s){return`<section class="logic-step" id="logic-step-${t}">
    <header class="logic-step-head">
      <span class="logic-step-num" aria-hidden="true">${t}</span>
      <h3 class="logic-step-title">${i(e)}</h3>
    </header>
    <div class="logic-step-body">${s}</div>
  </section>`}function sa(t){return`<div class="logic-table-wrap"><table class="logic-table">
    <tbody>
      ${t.map(([e,s])=>`<tr><th scope="row">${i(e)}</th><td>${s}</td></tr>`).join("")}
    </tbody>
  </table></div>`}function X(t){return`<ul class="logic-bullets">${t.map(e=>`<li>${e}</li>`).join("")}</ul>`}function ia(t){const e=t==null?void 0:t.marketRegime,s=Object.entries(Qt).map(([b,k])=>[V(b),`${Le(k)} <span class="logic-mult">${i(st(at[k]))}</span>`]),r=X([i(a("logicScreenABalanced")),i(a("logicScreenASelective")),i(a("logicScreenADefensive")),i(a("logicScreenAAggressive")),i(a("logicScreenAStabilize"))]),n=X([i(a("logicScreenBVol")),i(a("logicScreenBMom"))]),o=X([i(a("logicScoreFormula")),i(a("logicScoreSma")),i(a("logicScoreVol"))]),c=X([i(a("logicDemoteHot")),i(a("logicDemoteThin")),i(a("logicPromoteFirm")),i(a("logicDemotePanic"))]),m=X([i(a("logicWhyRs")),i(a("logicWhyMom")),i(a("logicWhyVol")),i(a("logicWhySma")),i(a("logicWhyRegime"))]),y=`
    <p class="logic-lead">${i(a("logicXqLead"))}</p>
    ${X([i(a("logicXqPriceVol")),i(a("logicXqFlow")),i(a("logicXqFund")),i(a("logicXqMasters")),i(a("logicXqCycle"))])}
    <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="strategies">${i(a("logicOpenStrategies"))}</button></p>
  `,p=X([i(a("logicPaperCapital")),i(a("logicPaperBuy")),i(a("logicPaperSizeMult")),i(a("logicPaperSell"))]),v=X([i(a("logicRatesR2")),i(a("logicRatesR3")),i(a("logicRatesSeparate"))]);return`
    <header class="view-header">
      <h2 class="view-title">${i(a("logicTitle"))}</h2>
      <p class="logic-subtitle">${i(a("logicSubtitle"))}</p>
    </header>

    <section class="logic-live section" aria-labelledby="logic-live-h">
      <h3 id="logic-live-h" class="section-title">${i(a("regimeToday"))}</h3>
      ${ta(e)}
    </section>

    <div class="logic-pipeline">
      ${J(1,a("logicStep1"),`
        <p class="logic-lead">${i(a("logicStep1Lead"))}</p>
        ${sa(s)}
        <p class="logic-caption">${i(a("logicStep1Caption"))}</p>
        ${v}
      `)}

      ${J(2,a("logicStep2"),`
        <p class="logic-lead">${i(a("logicStep2Lead"))}</p>
        <h4 class="logic-h4">${i(a("logicScreenA"))}</h4>
        ${r}
        <h4 class="logic-h4">${i(a("logicScreenB"))}</h4>
        ${n}
        <h4 class="logic-h4">${i(a("logicScore"))}</h4>
        ${o}
      `)}

      ${J(3,a("logicStep3"),y)}

      ${J(4,a("logicStep4"),`
        <p class="logic-lead">${i(a("logicStep4Lead"))}</p>
        ${c}
        <p class="logic-caption">${i(a("logicListSize"))}</p>
      `)}

      ${J(5,a("logicStep5"),`
        <p class="logic-lead">${i(a("logicStep5Lead"))}</p>
        ${m}
      `)}

      ${J(6,a("logicStep6"),`
        <p class="logic-lead">${i(a("logicStep6Lead"))}</p>
        ${p}
        <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="paper">${i(a("logicOpenPaper"))}</button></p>
      `)}
    </div>

    <p class="logic-footnote" role="note">${i(a("logicFootnote"))}</p>
  `}const it="./data/strategy-screener.json",Oe="jml-watchlist",Te=new Set(["inst-sync","margin-up","earnings-steady","low-pe-small","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short","ma-tangle-break","new-high-momentum","short-roc","day-up-5","pct5d-10","near-high","chip-main-force","chip-branch","chip-large-holders"]),We=["大師","基本","籌碼","技術","綜合","週期"],qe={精選:"綜合",價量:"技術",財務:"基本",技術:"技術",基本:"基本",籌碼:"籌碼",大師:"大師",週期:"週期",綜合:"綜合"};function na(t){const e=qe[t]||t;return a(`cat${e}`,e)}function ra(t){try{return new Date(t).toLocaleString(F(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+a("taipei")}catch{return t||"—"}}function l(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(F(),{minimumFractionDigits:e,maximumFractionDigits:e})}function O(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function z(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(2)}%`}function ze(t){const e=t.categoryGroup||t.category||"綜合";return qe[e]||e}function oa(t){let e=i(t);return e=e.replace(/本益比/g,()=>d("pe",a("pe"))),e=e.replace(/營益率/g,()=>d("opMargin",a("opMargin"))),e=e.replace(/毛利率/g,()=>d("grossMargin",a("grossMargin"))),e=e.replace(/外資/g,()=>d("foreignInv",a("foreignInv"))),e=e.replace(/投信/g,()=>d("trustInv",a("trustInv"))),e=e.replace(/自營商/g,()=>d("dealerInv",a("dealerInv"))),e=e.replace(/均線多頭/g,()=>d("maBull",a("maBull"))),e=e.replace(/RSI/g,()=>d("rsi",a("rsi"))),e=e.replace(/振幅/g,()=>d("amplitude",a("amplitude"))),e=e.replace(/(\d+)\s*張/g,(s,r)=>`${r}${d("zhang",a("zhang"))}`),e=e.replace(/＞\s*(\d+)\s*張/g,(s,r)=>`＞ ${r}${d("zhang",a("zhang"))}`),e}function ca(t){return t==="skip"?`<span class="xq-cond-st skip">${i(a("condSkip"))}</span>`:t==="fail"?`<span class="xq-cond-st fail">${i(a("condFail"))}</span>`:`<span class="xq-cond-st pass">${i(a("condPass"))}</span>`}function la(t){switch(t){case"ma-bull":return[{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>z(e.dayPct),cls:e=>O(e.dayPct)},{key:"sma5",label:"SMA5",fmt:e=>l(e.sma5)},{key:"sma10",label:"SMA10",fmt:e=>l(e.sma10)},{key:"sma20",label:"SMA20",fmt:e=>l(e.sma20)},{key:"sma60",label:"SMA60",fmt:e=>l(e.sma60)},{key:"volRatioYday",label:a("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?l(e.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:a("metricVolToday"),fmt:e=>e.volTodayZhang!=null?l(e.volTodayZhang,1):e.volToday!=null?l(e.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:d("pe",a("pe")),fmt:e=>l(e.pe,2),rawLabel:!0},{key:"revGrowth2yAvgPct",label:"2年營收成長均%",fmt:e=>e.revGrowth2yAvgPct!=null?l(e.revGrowth2yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?l(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?l(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?l(e.avgVol5Zhang,1):"—"},{key:"dayPct",label:a("metricDayPct"),fmt:e=>z(e.dayPct),cls:e=>O(e.dayPct)}];case"inst-sync":return[{key:"foreignNet1dZhang",label:a("foreign1d"),fmt:e=>l(e.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:a("trust1d"),fmt:e=>l(e.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:a("dealer1d"),fmt:e=>l(e.dealerNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:a("foreign5d"),fmt:e=>l(e.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:a("trust5d"),fmt:e=>l(e.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:a("dealer5d"),fmt:e=>l(e.dealerNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>z(e.dayPct),cls:e=>O(e.dayPct)},{key:"rsi",label:d("rsi",a("rsi")),fmt:e=>l(e.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:e=>l(e.rsiPrev,2)},{key:"ampPct",label:d("amplitude",a("amplitude")),fmt:e=>e.ampPct!=null?l(e.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?l(e.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:e=>l(e.pb,2)},{key:"directorHoldPct",label:a("metricDirector"),fmt:e=>e.directorHoldPct!=null?l(e.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?l(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>l(e.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:d("pe",a("pe")),fmt:e=>l(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?l(e.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?l(e.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:e=>Array.isArray(e.revGrowth3y)?e.revGrowth3y.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>l(e.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:e=>e.revGrowth5yAvgPct!=null?l(e.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?l(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?l(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>l(e.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?l(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:a("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?l(e.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:e=>Array.isArray(e.opMargin3y)?e.opMargin3y.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:e=>e.revGrowth3yAvgPct!=null?l(e.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)}];case"benjamin-graham":return[{key:"pe",label:d("pe",a("pe")),fmt:e=>l(e.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:e=>l(e.pb,2)},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?l(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>l(e.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?l(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:a("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?l(e.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?l(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>l(e.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:d("pe",a("pe")),fmt:e=>l(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?l(e.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:e=>e.roeGrowthPct!=null?l(e.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:e=>e.epsGrowthStreak!=null?String(e.epsGrowthStreak):"—"},{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>l(e.avgVol5Zhang,1)}];case"margin-up":return[{key:"yoyPairs",label:"YoY配對",fmt:e=>Array.isArray(e.yoyPairs)?e.yoyPairs.join("；"):"—"},{key:"yoyOmPct",label:"YoY營益成長%",fmt:e=>Array.isArray(e.yoyOmPct)?e.yoyOmPct.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"yoyGmPct",label:"YoY毛利成長%",fmt:e=>Array.isArray(e.yoyGmPct)?e.yoyGmPct.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"opMargins",label:d("opMargin",a("opMargin")),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.slice(-4).map(s=>s!=null?s+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:a("metricSource"),fmt:e=>e.source||"—"}];case"kostolany-cycle":return[{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>z(e.dayPct),cls:e=>O(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>z(e.pct5d),cls:e=>O(e.pct5d)},{key:"pct1m",label:"1月%",fmt:e=>z(e.pct1m),cls:e=>O(e.pct1m)},{key:"volRatio",label:a("volRatio"),fmt:e=>e.volRatio!=null?l(e.volRatio)+"×":"—"},{key:"psychologyPhase",label:a("psychologyPhase"),fmt:e=>e.psychologyPhase?V(e.psychologyPhase):"—"},{key:"cycleStance",label:a("cycleStance"),fmt:e=>e.cycleStance?V(e.cycleStance):"—"},{key:"liquidityBias",label:a("liquidityBias"),fmt:e=>e.liquidityBias?V(e.liquidityBias):"—"},{key:"tags",label:a("regimeTags"),fmt:e=>e.tags||"—"},{key:"sizeMult",label:a("sizeMult"),fmt:e=>e.sizeMult!=null?l(e.sizeMult,2)+"×":"—"}];case"ma-tangle-break":return[{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>z(e.dayPct),cls:e=>O(e.dayPct)},{key:"smaSpreadPct",label:"均線糾結%",fmt:e=>e.smaSpreadPct!=null?l(e.smaSpreadPct,2)+"%":"—"},{key:"volRatioYday",label:a("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?l(e.volRatioYday)+"×":"—"},{key:"sma5",label:"SMA5",fmt:e=>l(e.sma5)},{key:"sma20",label:"SMA20",fmt:e=>l(e.sma20)}];case"new-high-momentum":case"near-high":return[{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>z(e.dayPct),cls:e=>O(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>z(e.pct5d),cls:e=>O(e.pct5d)},{key:"high20",label:"20日高",fmt:e=>l(e.high20)},{key:"distHigh20Pct",label:"距高%",fmt:e=>e.distHigh20Pct!=null?l(e.distHigh20Pct,2)+"%":"—"},{key:"volRatioYday",label:a("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?l(e.volRatioYday)+"×":"—"}];case"short-roc":return[{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>z(e.dayPct),cls:e=>O(e.dayPct)},{key:"roc10",label:"ROC10%",fmt:e=>e.roc10!=null?l(e.roc10,2)+"%":"—",cls:e=>O(e.roc10)},{key:"pct5d",label:"5日%",fmt:e=>z(e.pct5d),cls:e=>O(e.pct5d)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?l(e.avgVol5Zhang,1):"—"}];case"day-up-5":case"pct5d-10":return[{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>z(e.dayPct),cls:e=>O(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>z(e.pct5d),cls:e=>O(e.pct5d)},{key:"volRatioYday",label:a("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?l(e.volRatioYday)+"×":"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?l(e.avgVol5Zhang,1):"—"}];case"earnings-steady":return[{key:"yoyOmPct",label:"YoY營益成長%",fmt:e=>Array.isArray(e.yoyOmPct)?e.yoyOmPct.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"opMargins",label:d("opMargin",a("opMargin")),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.slice(-4).map(s=>s!=null?s+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:a("metricSource"),fmt:e=>e.source||"—"}];case"low-pe-small":return[{key:"pe",label:d("pe",a("pe")),fmt:e=>l(e.pe,2),rawLabel:!0},{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"marketCapHint",label:"市值代理",fmt:e=>e.marketCapHint||"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?l(e.avgVol5Zhang,1):"—"}];default:return[{key:"price",label:a("metricPrice"),fmt:e=>l(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>z(e.dayPct),cls:e=>O(e.dayPct)}]}}function da(t){const e=t.calibrationNotes;if(!e||typeof e!="object")return"";const s=Array.isArray(e.matchedXq)?e.matchedXq.map(c=>i(c)).join(" · "):"",r=Array.isArray(e.stillDiffers)?e.stillDiffers.map(c=>i(c)).join(" · "):"",n=e.unitsNote||e.units||"",o=[];return s&&o.push(`<span class="xq-cal-m">對齊 XQ：${s}</span>`),r&&o.push(`<span class="xq-cal-d">仍差異：${r}</span>`),n&&o.push(`<span class="xq-cal-u">${i(String(n))}</span>`),o.length?`<p class="xq-calibration" title="${a("calibTitle")}">${o.join("<br/>")}</p>`:""}function pa(t){return`<ol class="xq-cond-list">${(t.conditions||[]).map((s,r)=>{const n=s.status||"pass";return`<li class="xq-cond ${n}">
        <span class="xq-cond-num">${r+1}</span>
        <span class="xq-cond-text">${oa(s.text)}</span>
        ${ca(n)}
      </li>`}).join("")}</ol>`}function xe(t,e){return!e||e==="ALL"?t||[]:(t||[]).filter(s=>{const r=String(s.market||"").toUpperCase();if(r===e)return!0;const n=String(s.ticker||"").toUpperCase().endsWith(".TW");return r?!1:e==="TW"?n:!n})}function ua(t,e="TW"){const s=t.hits||[],r=xe(s,e),n=a(e==="US"?"usStock":"twStock");if(t.incomplete&&!s.length){const p=i(t.incompleteLabel||a("dataInsufficient")),v=(t.blockers||[]).map(b=>`<li>${i(b)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${p}</div>
      <ul>${v}</ul>
    </div>`}if(!r.length)return`<div class="xq-empty"><p>${i(n)} · ${i(a("noHits"))}</p></div>`;const o=la(t.id),c=o.map(p=>`<th>${p.rawLabel?p.label:i(p.label)}</th>`).join(""),m=r.map(p=>{const v=p.metrics||{},b=o.map(k=>`<td class="num ${k.cls?k.cls(v):""}">${k.fmt(v)}</td>`).join("");return`<tr>
        <td><span class="ticker">${i(p.ticker)}</span></td>
        <td class="name-cell">${i(p.name||"")}${p.ohlcvBarDate?`<div class="xq-bar-date">K ${i(p.ohlcvBarDate)}</div>`:""}
          <button type="button" class="xq-btn xq-btn-sm xq-watch-inline" data-xq-watch="${i(p.ticker)}" data-xq-watch-name="${i(p.name||"")}">${i(a("addWatchlist"))}</button>
        </td>
        ${b}
      </tr>`}).join(""),y=r.map(p=>{const v=p.metrics||{},b=o.map(k=>{const T=k.cls?k.cls(v):"";return`<div class="xq-m"><span class="xq-ml">${k.rawLabel?k.label:i(k.label)}</span><span class="xq-mv ${T}">${k.fmt(v)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${i(p.ticker)}</div>
            <div class="name">${i(p.name||"")}</div>
            ${p.ohlcvBarDate?`<div class="xq-bar-date">K棒 ${i(p.ohlcvBarDate)}</div>`:""}
          </div>
          <div class="xq-hit-actions">
            <span class="badge market">${i(p.market||e)}</span>
            <button type="button" class="xq-btn xq-btn-sm" data-xq-watch="${i(p.ticker)}" data-xq-watch-name="${i(p.name||"")}">${i(a("addWatchlist"))}</button>
          </div>
        </div>
        <div class="xq-hit-metrics">${b}</div>
      </article>`}).join("");return`
    <div class="xq-market-block" data-market="${i(e)}">
      <h5 class="xq-market-title">${n}（${r.length}）</h5>
      <div class="table-wrap xq-table-wrap">
        <table class="stock-table xq-table">
          <thead><tr><th>代碼</th><th>名稱</th>${c}</tr></thead>
          <tbody>${m}</tbody>
        </table>
      </div>
      <div class="xq-mobile-cards">${y}</div>
    </div>`}function ma(t,e,s="TW"){var p,v,b,k;const r=t.hits||[],o=xe(r,s).length,c=(t.unchecked||[]).map(T=>`<li class="xq-unchecked">${i(T)}</li>`).join(""),m=(t.notes||[]).map(T=>`<li>${i(T)}</li>`).join(""),y=!t.incomplete&&(t.blockers||[]).length?`<ul class="xq-blockers">${(t.blockers||[]).map(T=>`<li>${i(T)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${i(t.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${i(t.name)}</h3>
          <div class="xq-tags">
            ${(t.xqTags||[t.category]).map(T=>`<span class="xq-tag">${i(T)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="${a("hitTitle")}">
          <span class="xq-hit-num">${o}</span>
          <span class="xq-hit-label">${i(a("hitCount"))}</span>
        </div>
      </div>
      ${t.description?`<details class="fold-block"><summary>${i(a("strategyDetails"))}</summary><p class="xq-desc fold-p">${i(t.description)}</p></details>`:""}
      <div class="xq-meta-row">
        <span>${i(a("sessionTwse"))} ${i(e.sessionDate||"—")}</span>
        <span>${i(a("ohlcvBar"))} ${i(((p=t.ohlcvBarDates)==null?void 0:p[0])||e.ohlcvBarDate||"—")}</span>
        <span>${i(a("generated"))} ${ra(e.asOf)}</span>
        <span>${i(a("universeTw"))} ${((v=e.universe)==null?void 0:v.tw)??"—"}</span>
        <span>${i(a("universeUs"))} ${((b=e.universe)==null?void 0:b.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">${i(a("conditions"))}</h4>
      ${pa(t)}
      ${da(t)}
      ${(k=t.incompleteFilters)!=null&&k.length?`<p class="xq-incomplete-filters">${i(a("incompleteFilters"))}${i(t.incompleteFilters.join("、"))}</p>`:""}
      ${c?`<ul class="xq-unchecked-list">${c}</ul>`:""}
      ${t.regimeSnapshot?`<div class="xq-regime-box" role="status">
        <div class="xq-regime-title">${i(a("regimeToday"))}</div>
        <div class="xq-regime-grid">
          ${["us","tw"].map(T=>{const w=t.regimeSnapshot[T];if(!w)return"";const C=w.psychologyPhase?V(w.psychologyPhase):a("dataInsufficient"),f=w.cycleStance,$=w.liquidityBias?V(w.liquidityBias):a("dataInsufficient"),P=Array.isArray(w.dataGaps)&&w.dataGaps.length?`<div class="xq-regime-gaps">${i(a("dataGaps"))}：${i(w.dataGaps.join(", "))}</div>`:"";return`<div class="xq-regime-card">
                <div class="xq-regime-mkt">${i(T.toUpperCase())}</div>
                <div class="xq-regime-stance">${Le(f)}</div>
                <div class="xq-regime-metrics">
                  <div><span class="k">${i(a("psychologyPhase"))}</span><strong>${i(C)}</strong></div>
                  <div><span class="k">${i(a("liquidityBias"))}</span><strong>${i($)}</strong></div>
                  <div><span class="k">${i(a("temperatureScore"))}</span><strong>${i(w.temperatureScore==null?a("dataInsufficient"):String(w.temperatureScore))}</strong></div>
                </div>
                ${P}
              </div>`}).join("")}
        </div>
      </div>`:""}
      ${m?`<ul class="xq-notes">${m}</ul>`:""}
      ${y}
      <div class="xq-toolbar">
        <h4 class="xq-sub">${i(a("results"))}</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>${i(a("copyJson"))}</button>
          <button type="button" class="xq-btn" data-xq-csv>${i(a("exportCsv"))}</button>
          <a class="xq-btn xq-btn-link" href="${it}" download="strategy-screener.json">${i(a("exportJson"))}</a>
          <button type="button" class="xq-btn" disabled title="${i(a("backtestHint"))}">${i(a("backtestSoon"))}</button>
        </div>
      </div>
      ${t.twOnly||Te.has(t.id)?`<div class="xq-market-tabs"><span class="xq-mkt-hint">${i(a("twOnlyHint"))}</span></div>`:`<div class="xq-market-tabs" role="tablist" aria-label="${i(a("hitMarket"))}">
        <button type="button" class="xq-mkt-btn${s==="TW"?" active":""}" data-xq-market="TW" aria-pressed="${s==="TW"}">${i(a("twStock"))}</button>
        <button type="button" class="xq-mkt-btn${s==="US"?" active":""}" data-xq-market="US" aria-pressed="${s==="US"}">${i(a("usStock"))}</button>
      </div>`}
      ${ua(t,t.twOnly||Te.has(t.id)?"TW":s)}
    </div>
  `}function ga(t=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${d("strategyScreen",a("strategyScreen"))}</h2>
      <p class="view-lead-tight">${i(a("strategyLead"))}</p>
      <div id="xq-root" class="xq-root" aria-label="${i(a("strategyScreen"))}">
        ${t?`<p class="xq-loading">${i(a("strategyLoading"))}</p>`:""}
      </div>
    </section>
  `}async function ha(t=it){const e=await fetch(t,{cache:"no-cache"});if(!e.ok)throw new Error(`strategy-screener ${e.status}`);return e.json()}function va(t,e){var Z,H;const s=typeof t=="string"?document.querySelector(t):t;if(!s||!((Z=e==null?void 0:e.strategies)!=null&&Z.length)){s&&(s.innerHTML=`<div class="xq-empty"><p>${i(a("strategyEmpty"))}</p></div>`);return}const r=[...We];for(const u of e.categoryOrder||[]){const g=qe[u]||u;r.includes(g)||r.push(g)}const n=new Map(r.map(u=>[u,[]]));for(const u of e.strategies){const g=ze(u);n.has(g)||(n.set(g,[]),r.push(g)),n.get(g).push(u)}for(const[u,g]of n)!g.length&&We.includes(u);let o=r.find(u=>(n.get(u)||[]).length)||r[0],c=((H=(n.get(o)||[])[0])==null?void 0:H.id)||e.strategies[0].id,m="TW";const y=(u,g)=>u.map(h=>{const D=(h.hits||[]).length,S=h.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${h.id===g?" active":""}${S}" data-xq-id="${i(h.id)}" aria-pressed="${h.id===g}">
          <span class="xq-chip-name">${i(h.name)}</span>
          <span class="xq-chip-n">${h.incomplete?i(a("incomplete")):i(a("hitsTotal",{n:D}))}</span>
        </button>`}).join(""),p=()=>r.map(u=>{const g=n.get(u)||[];return g.length?`<button type="button" class="xq-tab${u===o?" active":""}" data-xq-tab="${i(u)}" aria-pressed="${u===o}">
          <span>${i(na(u))}</span>
          <span class="xq-tab-n">${g.length}</span>
        </button>`:""}).join(""),v=()=>e.strategies.map(u=>{const g=(u.hits||[]).length,h=u.id===c?" active":"",D=u.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${h}${D}" data-xq-id="${i(u.id)}">
          <span>${i(u.name)}</span>
          <span class="xq-side-n">${u.incomplete?i(a("incomplete")):i(a("hitsTotal",{n:g}))}</span>
        </button>`}).join(""),b=()=>{const u=n.get(o)||[],g=e.strategies.find(h=>h.id===c)||u[0]||e.strategies[0];c=g.id,s.innerHTML=`
      <div class="xq-layout">
        <aside class="xq-sidebar" aria-label="${i(a("strategyList"))}">
          <div class="xq-side-title">${i(a("navStrategies"))}</div>
          ${v()}
        </aside>
        <div class="xq-main">
          <div class="xq-tabs" role="tablist" aria-label="${i(a("strategyCat"))}">${p()}</div>
          <div class="xq-chips" aria-label="${i(a("strategyList"))}">
            <div class="xq-chip-row">${y(u,c)}</div>
          </div>
          <div class="xq-panel-host">${ma(g,e,m)}</div>
        </div>
      </div>
      <p class="xq-foot">${i((e.disclaimer||"").split("。")[0]+(e.disclaimer?"。":""))}</p>
      <div class="xq-toast" id="xq-toast" hidden role="status"></div>
    `},k=u=>{const g=e.strategies.find(D=>D.id===u);if(!g)return;c=u;const h=ze(g);h!==o&&(o=h),b()},T=u=>{const g=n.get(u)||[];g.length&&(o=u,g.some(h=>h.id===c)||(c=g[0].id),b())},w=(u,g=2200)=>{const h=s.querySelector("#xq-toast");h&&(h.hidden=!1,h.textContent=u,clearTimeout(w._t),w._t=setTimeout(()=>{h.hidden=!0},g))},C=async u=>{var g;try{if((g=navigator.clipboard)!=null&&g.writeText)return await navigator.clipboard.writeText(u),!0}catch{}try{const h=document.createElement("textarea");h.value=u,h.setAttribute("readonly",""),h.style.position="fixed",h.style.left="-9999px",h.style.top="0",document.body.appendChild(h),h.select();const D=document.execCommand("copy");return document.body.removeChild(h),D}catch{return!1}},f=(u,g,h)=>{const D=new Blob([g],{type:h});try{const S=document.createElement("a");return S.href=URL.createObjectURL(D),S.download=u,S.rel="noopener",document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL(S.href),2e3),!0}catch{try{const S=`data:${h||"text/plain"};charset=utf-8,${encodeURIComponent(g)}`,A=document.createElement("a");return A.href=S,A.download=u,document.body.appendChild(A),A.click(),A.remove(),!0}catch{return!1}}},$=()=>{try{const u=localStorage.getItem(Oe),g=u?JSON.parse(u):[];return Array.isArray(g)?g:[]}catch{return[]}},P=u=>{try{localStorage.setItem(Oe,JSON.stringify(u.slice(0,200)))}catch{}},U=(u,g)=>{if(!u)return;const h=$();if(h.some(D=>D.ticker===u)){w(a("watchlistExists",{ticker:u}));return}h.unshift({ticker:u,name:g||u,addedAt:new Date().toISOString()}),P(h),w(a("watchlistAdded",{ticker:u}))};s.onclick=async u=>{var R;const g=u.target,h=g&&typeof g.closest=="function"?g:g&&g.parentElement&&typeof g.parentElement.closest=="function"?g.parentElement:null;if(!h)return;const D=h.closest("[data-xq-tab]");if(D&&s.contains(D)){u.preventDefault(),T(D.getAttribute("data-xq-tab"));return}const S=h.closest("[data-xq-id]");if(S&&s.contains(S)){u.preventDefault(),k(S.getAttribute("data-xq-id"));return}const A=h.closest("[data-xq-market]");if(A&&s.contains(A)){u.preventDefault(),m=A.getAttribute("data-xq-market")||"TW",b();return}const M=h.closest("[data-xq-copy]");if(M&&s.contains(M)){u.preventDefault();const _=await C(JSON.stringify(e,null,2));w(a(_?"copied":"copyFailed"));return}const I=h.closest("[data-xq-csv]");if(I&&s.contains(I)){u.preventDefault();const _=((R=s.querySelector(".xq-panel"))==null?void 0:R.getAttribute("data-strategy-id"))||c,E=e.strategies.find(ge=>ge.id===_);if(!E)return;const me=xe(E.hits||[],E.twOnly||Te.has(E.id)?"TW":m),ne=fa({...E,hits:me});if(!ne){w(a("noHitsExport"));return}const re="\uFEFF"+ne;if(f(`${E.id}-hits.csv`,re,"text/csv;charset=utf-8"))w(a("csvDownloaded"));else{const ge=`data:text/csv;charset=utf-8,${encodeURIComponent(re)}`;w(a("csvBlocked"));try{window.open(ge,"_blank")}catch{}}return}const L=h.closest("[data-xq-watch]");L&&s.contains(L)&&(u.preventDefault(),U(L.getAttribute("data-xq-watch"),L.getAttribute("data-xq-watch-name")))},b()}function fa(t){const e=t.hits||[];if(!e.length)return"";const s=[...new Set(e.flatMap(c=>Object.keys(c.metrics||{})))],r=["ticker","name","market","ohlcvBarDate",...s],n=c=>{const m=c==null?"":String(c);return/[",\n]/.test(m)?`"${m.replace(/"/g,'""')}"`:m},o=e.map(c=>{const m=c.metrics||{};return[c.ticker,c.name,c.market,c.ohlcvBarDate||"",...s.map(y=>{const p=m[y];return Array.isArray(p)?p.join("|"):p})].map(n).join(",")});return[r.join(","),...o].join(`
`)}async function ya(t="#xq-root"){const e=()=>typeof t=="string"?document.querySelector(t):t;try{let s=e();if(s||(await new Promise(n=>requestAnimationFrame(n)),s=e()),!s)return console.warn("initStrategies: #xq-root missing"),{ok:!1,error:new Error("xq-root missing")};const r=await ha();return s=e(),s?(va(s,r),{ok:!0,data:r}):{ok:!1,error:new Error("xq-root gone after fetch")}}catch(s){const r=e();return r&&(r.innerHTML=`<div class="xq-empty"><p>${i(a("strategyLoadError",{msg:s.message}))}</p></div>`),{ok:!1,error:s}}}const ba="./data/latest.json";function B(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function N(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function G(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(F(),{minimumFractionDigits:e,maximumFractionDigits:e})}function ie(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${G(t,s)}`}function Sa(t){try{return new Date(t).toLocaleString(F(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+a("taipei")}catch{return t}}function Ce(t){const e=t.aboveSma20?`<span class="badge sma-on">${d("sma20","SMA20")}↑</span>`:`<span class="badge sma-off">${d("sma20","SMA20")}↓</span>`,s=t.aboveSma50?`<span class="badge sma-on">${d("sma50","SMA50")}↑</span>`:`<span class="badge sma-off">${d("sma50","SMA50")}↓</span>`;return e+s}function Me(t){return t!=null&&t.length?t.map(e=>{const s=String(e);return s==="A"?`<span class="badge screen">${d("screenA","A")}</span>`:s==="B"?`<span class="badge screen">${d("screenB","B")}</span>`:s==="C"?`<span class="badge screen">${d("screenC","C")}</span>`:s==="observe"?`<span class="badge screen">${i(a("observe"))}</span>`:`<span class="badge screen">${i(s)}</span>`}).join(""):""}function $a(t){var r,n,o,c,m;const e=[],s=(y,p,v)=>{if(!v)return;const b=v.incomplete,k=v.value!=null?G(v.value,2):b?i(a("dataIncomplete")):"—",T=v.dayPct!=null?`<div class="pct ${B(v.dayPct)}">${N(v.dayPct)}</div>`:"",w=v.session==="intraday"?` · ${d("intraday",a("intraday"))}`:"";e.push(`
      <div class="index-chip ${b?"incomplete":""}">
        <div class="label">${p}${w}</div>
        <div class="value">${k}</div>
        ${T}
      </div>
    `)};if(s("tw",d("taiex",((r=t.tw)==null?void 0:r.name)||a("taiex")),t.tw),s("otc",d("otc",((n=t.otc)==null?void 0:n.name)||a("otc")),t.otc),s("spx",d("spx",((o=t.spx)==null?void 0:o.name)||a("spx")),t.spx),s("nasdaq",d("nasdaq",((c=t.nasdaq)==null?void 0:c.name)||a("nasdaq")),t.nasdaq),s("sox",d("sox",((m=t.sox)==null?void 0:m.name)||a("sox")),t.sox),t.usdTwd){const y=t.usdTwd,p=y.taipeiClose??y.yahoo;e.push(`
      <div class="index-chip">
        <div class="label">${d("usdtwd",a("usdtwd"))}</div>
        <div class="value">${G(p,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          ${i(a("taipeiClose"))} ${y.taipeiClose!=null?G(y.taipeiClose,3):"—"}
          · Yahoo ${y.yahoo!=null?G(y.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${e.join("")}</div>`}function ka(t,e){const s=t.market==="TW"?d("twStock",a("twStock")):t.market==="US"?d("usStock",a("usStock")):i(t.market||""),r=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${d("rs","RS")}</div><div class="m-val ${B(t.rsVsIndexPp)}">${N(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">${d("priorClose",a("priorCloseFull"))}</div><div class="m-val ${B(t.priorClosePct)}">${N(t.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${d("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${e}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${i(t.ticker)}</div>
          <div class="name">${i(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${ie(t.price,t.currency)}</div>
          <div class="day-pct ${B(t.dayPct)}">${N(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${s}</span>
        ${Me(t.screens)}
        ${Ce(t)}
      </div>
      <div class="metrics">
        ${r}
        <div class="metric"><div class="m-label">${d("pct5d",a("pct5d"))}</div><div class="m-val ${B(t.pct5d)}">${N(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${d("pct1m",a("pct1m"))}</div><div class="m-val ${B(t.pct1m)}">${N(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${d("volRatio",a("volRatio"))}</div><div class="m-val">${t.volRatio!=null?G(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business||t.why||t.risk?`<details class="fold-block card-fold"><summary>${i(a("details"))}</summary>
        ${t.business?`<p class="card-text"><strong>${i(a("business"))}</strong>　${i(t.business)}</p>`:""}
        ${t.why?`<p class="card-text"><strong>${i(a("reason"))}</strong>　${i(t.why)}</p>`:""}
        ${t.risk?`<p class="card-text risk"><strong>${i(a("risk"))}</strong>　${nt(t.risk)}</p>`:""}
      </details>`:""}
      <div data-ticker-comments="${i(t.ticker)}" data-market="${i(t.market==="TW"||String(t.ticker).endsWith(".TW")?"TW":"US")}"></div>
    </article>
  `}function nt(t){let e=i(t);return e=e.replace(/漲停/g,d("limitUp",a("limitUp"))),e=e.replace(/動能/g,d("momentum",a("momentum"))),e}function Fe(t){return t.map(e=>{const s=e.rsVsIndexPp??e.priorClosePct,r=e.rsVsIndexPp!=null?N(e.rsVsIndexPp):e.priorClosePct!=null?N(e.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${i(e.ticker)}</span></td>
        <td class="name-cell">${i(e.name||"")}</td>
        <td class="num">${ie(e.price,e.currency)}</td>
        <td class="num ${B(e.dayPct)}">${N(e.dayPct)}</td>
        <td class="num ${B(s)}">${r}</td>
        <td class="num ${B(e.pct5d)}">${N(e.pct5d)}</td>
        <td class="num ${B(e.pct1m)}">${N(e.pct1m)}</td>
        <td class="num">${e.volRatio!=null?G(e.volRatio,2)+"×":"—"}</td>
        <td>${Ce(e)}</td>
        <td>${Me(e.screens)}</td>
        <td class="why-cell">${i(e.why||"")}</td>
      </tr>`}).join("")}function He(t){return t.map(e=>{const s=e.rsVsIndexPp!=null?`<span class="${B(e.rsVsIndexPp)}">${d("rs","RS")} ${N(e.rsVsIndexPp)}</span>`:e.priorClosePct!=null?`<span class="${B(e.priorClosePct)}">${d("priorClose",a("priorClose"))} ${N(e.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${i(e.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${i(e.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${ie(e.price,e.currency)}</div>
            <div class="${B(e.dayPct)}" style="font-family:var(--mono);font-weight:600">${N(e.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${s}
          <span class="${B(e.pct5d)}">${d("pct5d","5d")} ${N(e.pct5d)}</span>
          <span class="${B(e.pct1m)}">${d("pct1m","1m")} ${N(e.pct1m)}</span>
          <span>${d("volRatio",a("volRatio"))} ${e.volRatio!=null?G(e.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${Ce(e)}${Me(e.screens)}</div>
        ${e.why?`<p class="lc-why">${i(e.why)}</p>`:""}
        ${e.risk&&e.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">${i(a("risk"))}：${nt(e.risk)}</p>`:""}
        <div data-ticker-comments="${i(e.ticker)}" data-market="${i(String(e.ticker).endsWith(".TW")||e.market==="TW"?"TW":"US")}"></div>
      </div>`}).join("")}function Ta(){return`
    <tr>
      <th>${d("ticker",a("ticker"))}</th>
      <th>${i(a("name"))}</th>
      <th>${i(a("price"))}</th>
      <th>${d("dayPct",a("dayPct"))}</th>
      <th>${d("rs","RS")}／${d("priorClose",a("priorClose"))}</th>
      <th>${d("pct5d",a("pct5d"))}</th>
      <th>${d("pct1m",a("pct1m"))}</th>
      <th>${d("volRatio",a("volRatio"))}</th>
      <th>${i(a("ma"))}</th>
      <th>${d("screening",a("screening"))}</th>
      <th>${i(a("reason"))}</th>
    </tr>`}function wa(t){if(!t)return"";const e=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${d("adr","ADR")} ${d("parity",a("parity"))}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${d("usStock",a("usStock"))} ${d("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${ie(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${d("adsRatio",a("adsRatio"))}</span>　<strong>${i(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>${d("parity",a("implied"))}</span>　<strong>${t.impliedUsdTaipeiFx!=null?G(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${d("premium",a("premium"))}</span>　<strong class="${B(e)}">${N(e)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${d("twStock",a("twStock"))}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${ie(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${i(t.note)}</p>`:""}
      </div>
    </section>
  `}function Pa(){return'<div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>'}function we(t){return t?t.market==="TW"||t.market==="US"?t.market:String(t.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function je(t,e){const s=new Set,r=[],n=o=>{if(!(o!=null&&o.ticker)||s.has(o.ticker))return;const c=we(o);e&&c!==e||(s.add(o.ticker),r.push({ticker:o.ticker,market:c,name:o.name||""}))};return(t.top5||[]).forEach(n),(!e||e==="TW")&&(t.tw||[]).forEach(n),(!e||e==="US")&&(t.us||[]).forEach(n),r}function Aa(t){return t==="TW"?"__TW__":"__US__"}function Ve(t,e){return t.length?`<div class="top5-grid">${t.map((s,r)=>ka(s,r+1)).join("")}</div>`:`<div class="empty-state">${i(a("emptyTop",{market:e}))}</div>`}function La(t){const e=je(t,"US"),s=je(t,"TW"),r=(n,o)=>n.map((c,m)=>`<button type="button" class="chat-chip${m===0?" active":""}" data-ticker="${i(c.ticker)}" data-market="${o}">${i(c.ticker)}</button>`).join("");return`
    <div class="chat-room" id="chat-room" data-market="US" data-mode="lobby">
      <header class="chat-header">
        <div class="chat-header-main">
          <h2 class="chat-header-title" id="chat-room-title">${i(a("usLobby"))}</h2>
          <div class="chat-market-tabs" role="tablist" aria-label="${i(a("market"))}">
            <button type="button" class="chat-mkt active" data-chat-market="US" role="tab" aria-selected="true">${i(a("chatUs"))}</button>
            <button type="button" class="chat-mkt" data-chat-market="TW" role="tab" aria-selected="false">${i(a("chatTw"))}</button>
          </div>
        </div>
        <div class="chat-header-tools">
          <details class="chat-menu">
            <summary aria-label="${i(a("chatMore"))}" title="${i(a("chatMore"))}">⋮</summary>
            <div class="chat-menu-panel">
              <label class="chat-fx-toggle">
                <input type="checkbox" id="ss-danmaku-toggle" />
                <span>${i(a("danmakuFx"))}</span>
              </label>
            </div>
          </details>
        </div>
      </header>
      <div class="chat-sub-tabs" role="tablist" aria-label="${i(a("room"))}">
        <button type="button" class="chat-tab active" data-chat-mode="lobby" role="tab" aria-selected="true">${i(a("lobby"))}</button>
        <button type="button" class="chat-tab" data-chat-mode="ticker" role="tab" aria-selected="false">${i(a("perTicker"))}</button>
      </div>
      <div class="chat-chip-row" data-chip-market="US" role="tablist" aria-label="${i(a("usTickers"))}" hidden>
        ${r(e,"US")||`<span class="chat-empty">${i(a("noUsTickers"))}</span>`}
      </div>
      <div class="chat-chip-row" data-chip-market="TW" role="tablist" aria-label="${i(a("twTickers"))}" hidden>
        ${r(s,"TW")||`<span class="chat-empty">${i(a("noTwTickers"))}</span>`}
      </div>
      <div id="ss-chat-mount" class="chat-panel" aria-label="${i(a("chatRoom"))}"></div>
      <details class="fold-block chat-external">
        <summary>${i(a("externalDiscuss"))}</summary>
        <div id="ss-social-digest" aria-label="${i(a("externalDigest"))}"></div>
        <div id="ss-giscus" class="ss-giscus-section" aria-label="Giscus">
          <div class="ss-giscus-host"></div>
        </div>
      </details>
    </div>
  `}function qa(){return[{id:"today",label:a("navToday"),hash:"today"},{id:"logic",label:a("navLogic"),hash:"logic"},{id:"strategies",label:a("navStrategies"),hash:"strategies"},{id:"paper",label:a("navPaper"),hash:"paper"},{id:"social",label:a("navSocial"),hash:"social"}]}const rt={today:"today",logic:"logic",strategies:"strategies",paper:"paper",social:"social",help:"logic",glossary:"logic",danmaku:"social","social-digest":"social",giscus:"social",method:"logic",邏輯:"logic"},xa={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',logic:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 2h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v5h-2v-5z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',social:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.5 3.1 6L5 21l4.3-1.4c.9.3 1.8.4 2.7.4 5 0 9-3.6 9-8s-4-8-9-8zm-1 5h2v5h-2V8zm0 6h2v2h-2v-2z"/></svg>'};function Pe(){const t=(location.hash||"").replace(/^#/,"").split(/[/?]/)[0].toLowerCase();return rt[t]||"today"}function Ge(t){return qa().map(e=>{const s=xa[e.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${e.id}"
        data-variant="${t}"
        aria-label="${i(e.label)}"
        aria-current="false">
        <span class="nav-icon">${s}</span>
        <span class="nav-label">${i(e.label)}</span>
      </button>`}).join("")}function Ca(t,e){const s=t.top5||[],r=t.us||[],n=t.tw||[],o=i(a("disclaimer")),c=Ta();return`
    ${Pa()}

    <header class="site-chrome">
      <div class="chrome-row">
        <div class="chrome-brand">
          <img class="brand-mark" src="/Just-Math-and-Luck-/logo.png?v=3" width="40" height="40" alt="每日數學選股" decoding="async" />
          <div class="brand-text">
            <h1>${i(a("siteTitle"))}</h1>
            <p class="brand-meta">${i(a("dataAsOf"))} ${Sa(t.asOf)}</p>
          </div>
        </div>
        <div class="chrome-actions">
          ${bt()}
          <nav class="nav-desktop" aria-label="${i(a("navMain"))}">
            ${Ge("desktop")}
          </nav>
        </div>
      </div>
      <p class="disclaimer-line" role="note">${o}</p>
      <div class="market-strip-wrap" aria-label="${i(a("marketQuotes"))}">
        <span class="market-strip-label">${i(a("hot"))}</span>
        ${$a(t.indices||{})}
      </div>
    </header>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">${i(a("todayPicks"))}</h2>
        </header>
        ${aa(t.marketRegime)}
        <div class="tabs market-tabs" role="tablist" aria-label="${i(a("market"))}">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${d("usStock",a("usStock"))}（${r.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${d("twStock",a("twStock"))}（${n.length}）</button>
        </div>
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${i(a("usTop"))}</h2>
            ${Ve(s.filter(y=>we(y)==="US"),a("usStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${i(a("usList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${c}</thead>
                <tbody>${Fe(r)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${He(r)}</div>
          </section>
        </div>
        <div class="panel" id="panel-tw" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${i(a("twTop"))}</h2>
            ${Ve(s.filter(y=>we(y)==="TW"),a("twStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${i(a("twList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${c}</thead>
                <tbody>${Fe(n)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${He(n)}</div>
          </section>
        </div>
        ${wa(t.parity)}
      </div>
      <div class="view" id="view-logic" data-view="logic" hidden>
        <span id="logic" class="view-anchor" tabindex="-1"></span>
        ${ia(t)}
      </div>

      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${ga()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${qt(e)}
      </div>

      <div class="view view-social" id="view-social" data-view="social" hidden>
        <span id="social" class="view-anchor" tabindex="-1"></span>
        ${La(t)}
      </div>
    </main>

    <nav class="nav-bottom" aria-label="${i(a("navMain"))}">
      ${Ge("mobile")}
    </nav>

    <p class="site-footer">${i(a("footer"))}</p>
  `}function Ma(t,e){t.querySelectorAll(".nav-item").forEach(s=>{const r=s.dataset.nav===e;s.classList.toggle("is-active",r),s.setAttribute("aria-current",r?"page":"false")})}function ot(t,e,{updateHash:s=!0,scrollTop:r=!0}={}){const n=rt[e]||"today";if(t.querySelectorAll(".view").forEach(o=>{const c=o.dataset.view===n;o.hidden=!c,o.classList.toggle("is-active",c)}),Ma(t,n),s){const o=`#${n}`;location.hash!==o&&history.replaceState(null,"",o)}return r&&window.scrollTo(0,0),n}let le=null;function Ra(t){const e=(s,r)=>ot(t,s,r);return t.querySelectorAll(".nav-item").forEach(s=>{s.addEventListener("click",()=>e(s.dataset.nav))}),t.querySelectorAll("[data-jump]").forEach(s=>{s.addEventListener("click",()=>e(s.dataset.jump))}),le&&window.removeEventListener("hashchange",le),le=()=>e(Pe(),{updateHash:!1}),window.addEventListener("hashchange",le),e(Pe(),{updateHash:!0,scrollTop:!1}),{go:e}}function Da(t){const e=t.querySelectorAll(".tab-btn");e.forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.tab;e.forEach(n=>{const o=n.dataset.tab===r;n.classList.toggle("active",o),n.setAttribute("aria-selected",o?"true":"false")}),t.querySelectorAll(".panel").forEach(n=>{n.classList.toggle("active",n.id===`panel-${r}`)})})})}function Na(t,e,{config:s,digest:r}={}){const n=t.querySelector("#chat-room");if(!n)return;const o=n.querySelector("#ss-chat-mount"),c=n.querySelector("#chat-room-title"),m=n.querySelectorAll(".chat-mkt"),y=n.querySelectorAll("[data-chat-mode]");let p=null,v="US",b="lobby";const k=f=>{c&&(c.textContent=f)},T=()=>{n.querySelectorAll(".chat-chip-row").forEach(f=>{const $=b==="ticker"&&f.getAttribute("data-chip-market")===v;f.hidden=!$})},w=()=>{if(!o)return;if(p!=null&&p.destroy&&p.destroy(),b==="lobby"){const P=Aa(v),U=a(v==="TW"?"twLobby":"usLobby");k(U),p=Be(o,P,{config:s,market:v,title:U,emptyLine:a("noMessages"),maxLen:80});return}const f=n.querySelector(`.chat-chip-row[data-chip-market="${v}"]`),$=(f==null?void 0:f.querySelector(".chat-chip.active"))||(f==null?void 0:f.querySelector(".chat-chip"));if(!$){k(a(v==="TW"?"twLobby":"usLobby")),o.innerHTML=`<div class="chat-empty-state"><p>${i(a("noTickersDiscuss"))}</p></div>`,p={destroy(){}};return}k($.dataset.ticker),p=Be(o,$.dataset.ticker,{config:s,market:v,title:$.dataset.ticker,emptyLine:a("noComments")})};m.forEach(f=>{f.addEventListener("click",()=>{v=f.dataset.chatMarket,n.dataset.market=v,m.forEach(P=>{const U=P===f;P.classList.toggle("active",U),P.setAttribute("aria-selected",U?"true":"false")});const $=n.querySelector(`.chat-chip-row[data-chip-market="${v}"]`);$==null||$.querySelectorAll(".chat-chip").forEach((P,U)=>P.classList.toggle("active",U===0)),T(),w()})}),y.forEach(f=>{f.addEventListener("click",()=>{b=f.dataset.chatMode,n.dataset.mode=b,y.forEach($=>{const P=$===f;$.classList.toggle("active",P),$.setAttribute("aria-selected",P?"true":"false")}),T(),w()})}),n.querySelectorAll(".chat-chip").forEach(f=>{f.addEventListener("click",()=>{const $=f.closest(".chat-chip-row");$==null||$.querySelectorAll(".chat-chip").forEach(P=>P.classList.toggle("active",P===f)),b==="ticker"&&w()})});const C=f=>{const $=n.querySelector(".chat-menu");$&&$.open&&!$.contains(f.target)&&($.open=!1)};return document.addEventListener("click",C),T(),w(),{destroy(){document.removeEventListener("click",C),p!=null&&p.destroy&&p.destroy()}}}let se=null,Re=null,ct=null,be=null;async function lt(t){const e=Re,s=ct,r=Pe();t.innerHTML=Ca(e,s),document.title=a("siteTitle"),Ke(),Ra(t),ot(t,r,{updateHash:!0,scrollTop:!1}),Da(t),xt(t),St(t),await ya("#xq-root");let n=be;const o=await Jt("#ss-social-digest",Q.socialDigestUrl);if(o!=null&&o.ok)n=o.data,be=n;else if(!n)try{n=await tt(Q.socialDigestUrl),be=n}catch{n=null}se!=null&&se.destroy&&se.destroy(),se=Na(t,e,{config:Q,digest:n}),Vt(t,{config:Q,digest:n}),Zt("#ss-giscus",{config:Q})}async function Ua(){const t=document.getElementById("app");!t||!Re||await lt(t)}async function Ae(){const t=document.getElementById("app");Ke();const e=document.getElementById("loading");e&&(e.textContent=a("loading"));try{const s=await fetch(ba);if(!s.ok)throw new Error(`HTTP ${s.status}`);Re=await s.json(),ct=await Ct(),await lt(t),Ae._langHooked||(Ae._langHooked=!0,ut(()=>{Ua()}))}catch(s){t.innerHTML=`<div class="error">${i(a("loadError",{msg:s.message}))}</div>`}}Ae();
