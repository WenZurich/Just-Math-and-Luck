(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const _={},Z={supabaseUrl:typeof import.meta<"u"&&(_==null?void 0:_.VITE_SUPABASE_URL)||"https://whlpzhceivahkuanmmui.supabase.co",supabaseAnonKey:typeof import.meta<"u"&&(_==null?void 0:_.VITE_SUPABASE_ANON_KEY)||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",giscus:{enabled:!0,repo:"WenZurich/Just-Math-and-Luck-",repoId:"R_kgDOUcO78Q",category:"General",categoryId:"DIC_kwDOUcO78c4DFrWU",mapping:"specific",theme:"dark",lang:"zh-TW",perTicker:!1},socialDigestUrl:"./data/social-digest.json",latestUrl:"./data/latest.json",danmakuMaxLen:80,commentMaxLen:500,pollIntervalMs:8e3,postCooldownMs:4e3};globalThis.STOCK_SOCIAL_CONFIG=Object.assign(globalThis.STOCK_SOCIAL_CONFIG||{},Z);const De=[{id:"zh-Hant",label:"繁體中文",short:"繁"},{id:"en",label:"English",short:"EN"},{id:"zh-Hans",label:"简体中文",short:"简"},{id:"ja",label:"日本語",short:"日"}],Ie=De.map(t=>t.id),Be="site-lang",ge="zh-Hant",he=new Set;function at(){try{const e=localStorage.getItem(Be);if(e&&Ie.includes(e))return e}catch{}const t=typeof navigator<"u"&&navigator.language||"";return/^zh[-_]?(CN|Hans|SG)/i.test(t)?"zh-Hans":/^zh/i.test(t)?"zh-Hant":/^ja/i.test(t)?"ja":/^en/i.test(t)?"en":ge}let B=at();function st(t){if(!Ie.includes(t)||t===B)return!1;B=t;try{localStorage.setItem(Be,t)}catch{}return typeof document<"u"&&(document.documentElement.lang=t==="zh-Hant"?"zh-Hant":t==="zh-Hans"?"zh-Hans":t),he.forEach(e=>{try{e(t)}catch{}}),!0}function it(t){return he.add(t),()=>he.delete(t)}function U(){return B==="en"?"en-US":B==="ja"?"ja-JP":B==="zh-Hans"?"zh-CN":"zh-TW"}function Ee(){typeof document>"u"||(document.documentElement.lang=B==="zh-Hant"?"zh-Hant":B==="zh-Hans"?"zh-Hans":B)}const oe={siteTitle:"每日數學選股",loading:"載入中…",disclaimer:"投資涉及風險，資訊僅供參考，非投資建議",footer:"投資涉及風險，資訊僅供參考，非投資建議",dataAsOf:"資料",taipei:"（台北）",navMain:"主要導覽",navToday:"今日",navStrategies:"策略",navPaper:"模擬",navSocial:"社群",navLogic:"邏輯",todayPicks:"今日選股",market:"市場",hot:"熱門",marketQuotes:"市場報價",usStock:"美股",twStock:"台股",usList:"美股清單",twList:"台股清單",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暫無 Top 候選",ticker:"代碼",name:"名稱",price:"價格",dayPct:"日漲跌",rs:"RS",priorClose:"前收",priorCloseFull:"前收漲幅",pct5d:"5 日",pct1m:"約 1 月",volRatio:"量比",ma:"均線",screening:"篩選",reason:"理由",details:"詳情",business:"本業",risk:"風險",observe:"觀察",dataIncomplete:"資料不全",intraday:"盤中",taipeiClose:"台北收",adr:"ADR",parity:"平價",implied:"隱含價",premium:"溢價",adsRatio:"換股比",taiex:"台灣加權 TAIEX",otc:"櫃買",spx:"S&P 500",nasdaq:"Nasdaq",sox:"SOX",usdtwd:"USD/TWD",loadError:"無法載入資料（{msg}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。",langLabel:"語言",chatUs:"美股",chatTw:"台股",danmakuFx:"彈幕效果",chatMore:"更多",nickLabel:"暱稱",room:"房間",lobby:"大廳",perTicker:"個股",usTickers:"美股標的",twTickers:"台股標的",noUsTickers:"暫無美股標的",noTwTickers:"暫無台股標的",chatRoom:"聊天室",externalDiscuss:"外部討論",externalDigest:"外部討論摘要",usLobby:"美股大廳",twLobby:"台股大廳",noMessages:"目前尚無訊息",noComments:"目前尚無留言",noTickersDiscuss:"此市場目前無標的可討論",paper:"模擬",paperMissing:"尚無模擬帳本檔案。請於專案執行 npm run paper。",paperDisclaimer:"累積模擬帳戶（自 {date} 起） · 不會每日歸零 · 買進即成交 · 非真實下單",paperRules:"規則（各市場獨立帳）",paperRuleTw:"台股本金 NT$3,000,000 · 整張成交",paperRuleUs:"美股本金 US$100,000 · 可買 1 股起",paperRuleBuy:"買：該市場名單·風險1%·停距1.5%·單檔≤8% · 即成交",paperRuleSell:"賣：停損−3% · 停利+12%半倉 · 破SMA20且日跌>2% · 離名單虧損 · 漲停隔日−5%",paperTabTw:"台股帳 · NT$",paperTabUs:"美股帳 · US$",paperBookTw:"台股帳本（NT$）",paperBookUs:"美股帳本（US$）",principal:"本金",cash:"現金",equity:"權益（部位＋現金）",totalPnl:"總損益",totalPnlPct:"總損益 ％",weekPerf:"週績效",monthPerf:"月績效",quarterPerf:"季績效",yearPerf:"年績效",sinceInception:"成立以來",noTradesToday:"本日尚無此類成交（模擬）",noPositions:"目前沒有持股",buy:"買",sell:"賣",shares:"股",qtyShares:"股數",positions:"目前部位",position:"部位",avgCost:"成本",mark:"現價",unrealizedPnl:"未實現損益",unrealizedPct:"未實現 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累積 · 買進即成交",reasonScreenBuy:"名單新開倉",reasonAdd:"持續買進",reasonStop:"停損",reasonTakeProfit:"停利",reasonMomentumBreak:"動能轉弱",reasonOffList:"離開名單",reasonLimitUpChase:"漲停追價急殺",stopLoss:"停損",takeProfit:"停利",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"績效",qty:"數量",note:"說明",strategyScreen:"策略選股",strategyLead:"台／美命中分開檢視 · 缺資料標「不足」",strategyLoading:"載入策略結果中…",strategyEmpty:"尚無策略資料。請執行 npm run strategies。",strategyLoadError:"無法載入策略選股（{msg}）。請確認已執行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分類",hitCount:"檔命中",hitTitle:"命中檔數",strategyDetails:"詳情 · 策略說明",conditions:"條件",results:"篩選結果",copyJson:"複製 JSON",exportCsv:"匯出此策略 CSV",exportJson:"匯出 JSON",copied:"已複製",noHitsExport:"此策略今日無命中列可匯出",incomplete:"不足",hitsTotal:"共{n}檔",twOnlyHint:"本策略僅台股",hitMarket:"命中市場",noHits:"本日無命中",dataInsufficient:"資料不足",calibTitle:"校準說明",incompleteFilters:"未檢查濾網（不算通過）：",sessionTwse:"證交所 session",ohlcvBar:"OHLCV K棒",generated:"產生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精選",cat價量:"價量",cat籌碼:"籌碼",cat財務:"財務",cat大師:"大師",cat週期:"週期",regimeToday:"今日市場週期（美／台分開）",psychologyPhase:"心理相位",cycleStance:"週期姿態",liquidityBias:"流動性偏誤",temperatureScore:"市場溫度",sizeMult:"部位乘數",regimeTags:"週期標籤",dataGaps:"資料缺口",marketRegime:"市場週期",logicTitle:"選股邏輯",logicSubtitle:"政權→篩選→策略→降權→理由→部位：可稽核的數學流程",logicNoRegime:"尚無 marketRegime（待下次掃描寫入 latest.json）。",logicStep1:"市場週期（Regime）",logicStep1Lead:"先定美／台獨立姿態，再篩個股。Kostolany 心理相位 × Marks 溫度 × 利率流動性。",logicStep1Caption:"相位 → 篩選姿態 → 部位乘數（STANCE_SIZE_MULT）",logicRatesR2:"R2：美債 ^TNX 20 日上升 ≥ +0.25pp → 流動性偏防禦（即使價趨勢仍中性）。",logicRatesR3:"R3：60 日殖利率下降 ≤ −0.25pp → 允許較積極姿態（非 euphoria）。",logicRatesSeparate:"硬規則：dial_US 與 dial_TW 分開；不混成「全球心情」。",logicStep2:"數學篩選（A／B）",logicStep2Lead:"相對強度、動能、SMA、量比；門檻依 cycleStance 調整。",logicScreenA:"篩選 A · 動能／相對強度",logicScreenABalanced:"balanced：日 RS≥0.5pp 或日漲≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或雙均線且 5日≥0／RS≥0。",logicScreenASelective:"selective：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"defensive：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量視為可過）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"aggressive／constructive：放寬 RS／日／5日／1月；允許 SMA200 下 firm-hands（1月<0 且量比≥1.4）。constructive 另需 SMA20 或 SMA200。",logicScreenAStabilize:"stabilize_first：須站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌後先穩定）。",logicScreenB:"篩選 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。門檻：defensive ≥1.0；aggressive ≥1.1；其餘 ≥1.2。",logicScreenBMom:"補標 A：若未過 A，但 1月≥8% 且 SMA20＋SMA50（非 stabilize_first）→ 仍標 A。",logicScore:"排序分數",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加權（上限約 8×0.6）；量比<0.4 −0.5；再套用 scoreAdjust（週期）。",logicStep3:"XQ 策略選股",logicXqLead:"與每日名單並行：條件式命中（價量／籌碼／財務／大師／週期）。缺欄標「資料不足」，不捏造。",logicXqPriceVol:"價量：均線多頭、超短線作多等（OHLCV 實算）。",logicXqFlow:"籌碼：法人同步等（公開張數門檻）。",logicXqFund:"財務：獲利遞增、PE／營益率等公開財報欄。",logicXqMasters:"大師：林區／葛拉罕／巴菲特等可計算代理條件。",logicXqCycle:"週期：科斯托拉尼／regime 包（依當日美台姿態）。",logicOpenStrategies:"開啟策略頁",logicStep4:"排序降權／加權",logicStep4Lead:"scoreAdjust：依姿態對高 RS 縮量、firm-hands、恐慌穩定做加減分。",logicDemoteHot:"defensive／selective：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日漲>2% → −1.2；缺雙均線 −1.5。",logicDemoteThin:"K5：高相對強度但量能不足 → 降權／排除積極桶。",logicPromoteFirm:"aggressive／constructive：價弱量增且 SMA200（firm-hands）→ +2.2；早段放量上漲 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；站上 SMA20 才 +1.5。",logicListSize:"名單長度：defensive ≈0.55×；selective ≈0.75×；stabilize_first ≈0.45×；aggressive +2（上限14）；基準 12。",logicStep5:"「為什麼」如何組成",logicStep5Lead:"why 欄為可讀摘要，非模型黑箱——由當日可驗證欄位串接。",logicWhyRs:"日漲跌 + 相對指數（美：S&P；台：加權）pp。",logicWhyMom:"五日%、約一個月%。",logicWhyVol:"量比≥1.2 才寫入量能句。",logicWhySma:"SMA20／50／200 站上狀態（雙均線優先）。",logicWhyRegime:"附加 _regimeNote 或 cycleStance／psychologyPhase。",logicStep6:"紙上部位紀律",logicStep6Lead:"模擬帳驗證流程；非實單。部位受 regime sizeMult 與固定風險公式約束。",logicPaperCapital:"本金：台股 NT$3,000,000（整張）；美股 US$100,000（1 股起）。",logicPaperBuy:"買：名單（純 observe 盡量不買）；風險＝權益×1%；停距≈價×1.5%（量比≥3→2.5%）；單檔≤權益 8%。",logicPaperSizeMult:"regime sizeMult（0.3–1.35×）標示當日建議積極度；與名單長度連動。",logicPaperSell:"賣：停損 −3%；停利 +12% 半倉；破 SMA20 且日跌>2%；離名單且虧損；漲停風格隔日 −5%。",logicOpenPaper:"開啟模擬頁",logicFootnote:"框架合成僅供透明篩選說明，非投資建議。公開作者方法之可編碼代理；不重製受著作權保護之原文。",backendOff:"討論功能尚未啟用",localComments:"本站留言",futu:"富途",nickPlaceholder:"暱稱（選填）",commentPlaceholder:"留言",commentInput:"輸入留言",send:"送出",guest:"訪客",noLocalComments:"尚無留言",backendNotConnected:"後端未接上",readFail:"讀取失敗：{msg}",sendFail:"發送失敗：{msg}",sendFailShort:"發送失敗",noSource:"無 {source}",newsClues:"新聞／討論線索（非留言）",relatedNews:"相關公開新聞（非社群評論）",messages:"訊息",giscusUnset:"Giscus 尚未設定（需 repoId／categoryId）。請見說明文件。",manualOpen:"手動開啟",noSnippet:"(無摘要)",noTickerData:"此標的暫無{kind}資料",viaBackup:"來源備援：{via}",noDigestBlock:"無 {title} 區塊（今日無對應市場標的或尚未抓取）",socialDigestMarket:"社交摘要市場",socialDigestTitle:"網友參考",socialUs:"美股來源",socialTw:"台股來源",externalDigestShort:"外部摘要",routingNote:"路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads",socialUsTab:"美股 Reddit／富途",socialTwTab:"台股 PTT／Dcard／Threads",socialLoadFail:"社交摘要尚未產生或讀取失敗：{msg}",futuFull:"富途牛牛",sma20:"SMA20",sma50:"SMA50",screenA:"A",screenB:"B",screenC:"C",condPass:"條件",condFail:"未過",condSkip:"略過",pe:"本益比",opMargin:"營益率",grossMargin:"毛利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自營商",maBull:"均線多頭",rsi:"RSI",amplitude:"振幅",zhang:"張",limitUp:"漲停",momentum:"動能",metricPrice:"價格",metricDayPct:"日漲跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(張)",metricDebt:"負債比%",metricDirector:"董監持股%",metricOpQ:"近季營益率%",metricSource:"來源",foreign1d:"外資1日(張)",trust1d:"投信1日(張)",dealer1d:"自營商1日(張)",foreign5d:"外資5日(張)",trust5d:"投信5日(張)",dealer5d:"自營5日(張)"},rt={...oe,siteTitle:"Daily Quant Picks",loading:"Loading…",disclaimer:"Investing involves risk. For reference only — not investment advice.",footer:"Investing involves risk. For reference only — not investment advice.",dataAsOf:"As of",taipei:" (Taipei)",navMain:"Main navigation",navToday:"Today",navStrategies:"Strategies",navPaper:"Paper",navSocial:"Community",navLogic:"Logic",todayPicks:"Today's picks",market:"Market",hot:"Markets",marketQuotes:"Market quotes",usStock:"US",twStock:"TW",usList:"US list",twList:"TW list",usTop:"US Top",twTop:"TW Top",emptyTop:"No Top picks for {market}",ticker:"Ticker",name:"Name",price:"Price",dayPct:"Day %",rs:"RS",priorClose:"Prior close",priorCloseFull:"Prior-close %",pct5d:"5D",pct1m:"~1M",volRatio:"Vol ratio",ma:"MAs",screening:"Screen",reason:"Why",details:"Details",business:"Business",risk:"Risk",observe:"Watch",dataIncomplete:"Incomplete",intraday:"Intraday",taipeiClose:"Taipei close",adr:"ADR",parity:"Parity",implied:"Implied",premium:"Premium",adsRatio:"ADS ratio",taiex:"TAIEX",otc:"OTC",loadError:"Failed to load data ({msg}). Serve statically with data/latest.json present.",langLabel:"Language",chatUs:"US",chatTw:"TW",danmakuFx:"Danmaku",chatMore:"More",nickLabel:"Nick",room:"Room",lobby:"Lobby",perTicker:"Ticker",usTickers:"US tickers",twTickers:"TW tickers",noUsTickers:"No US tickers",noTwTickers:"No TW tickers",chatRoom:"Chat",externalDiscuss:"External discussion",externalDigest:"External digest",usLobby:"US lobby",twLobby:"TW lobby",noMessages:"No messages yet",noComments:"No comments yet",noTickersDiscuss:"No tickers to discuss in this market",paper:"Paper",paperMissing:"No paper portfolio file. Run npm run paper in the project.",paperDisclaimer:"Cumulative paper account (since {date}) · not reset daily · fills on signal · not real orders",paperRules:"Rules (separate books per market)",paperRuleTw:"TW principal NT$3,000,000 · round lots",paperRuleUs:"US principal US$100,000 · from 1 share",paperRuleBuy:"Buy: list · 1% risk · 1.5% stop · ≤8% per name · immediate fill",paperRuleSell:"Sell: −3% stop · +12% half take-profit · below SMA20 & day <−2% · off-list & losing · limit-up next-day −5%",paperTabTw:"TW book · NT$",paperTabUs:"US book · US$",paperBookTw:"TW book (NT$)",paperBookUs:"US book (US$)",principal:"Principal",cash:"Cash",equity:"Equity (positions + cash)",totalPnl:"Total P&L",totalPnlPct:"Total P&L %",weekPerf:"Week",monthPerf:"Month",quarterPerf:"Quarter",yearPerf:"Year",sinceInception:"Since inception",noTradesToday:"No trades of this type today (paper)",noPositions:"No open positions",buy:"Buy",sell:"Sell",shares:"sh",qtyShares:"Shares",positions:"Positions",position:"Position",avgCost:"Avg cost",mark:"Mark",unrealizedPnl:"Unrealized P&L",unrealizedPct:"Unrealized %",recentTrades:"Trades (last 40)",paperSession:"{date} · since {inception} · fills on signal",reasonScreenBuy:"New from list",reasonAdd:"Add",reasonStop:"Stop-loss",reasonTakeProfit:"Take-profit",reasonMomentumBreak:"Momentum break",reasonOffList:"Off list",reasonLimitUpChase:"Limit-up chase unwind",stopLoss:"Stop-loss",takeProfit:"Take-profit",paperTrade:"Paper",realizedPnl:"P&L",periodPerf:"Performance",qty:"Qty",note:"Note",strategyScreen:"Strategy screener",strategyLead:"US / TW hits viewed separately · incomplete marked",strategyLoading:"Loading strategies…",strategyEmpty:"No strategy data. Run npm run strategies.",strategyLoadError:"Failed to load strategies ({msg}). Run npm run strategies.",strategyList:"Strategies",strategyCat:"Categories",hitCount:"hits",hitTitle:"Hit count",strategyDetails:"Details · strategy notes",conditions:"Conditions",results:"Results",copyJson:"Copy JSON",exportCsv:"Export CSV",exportJson:"Export JSON",copied:"Copied",noHitsExport:"No hit rows to export for this strategy today",incomplete:"N/A",hitsTotal:"{n} hits",twOnlyHint:"TW only",hitMarket:"Hit market",noHits:"No hits today",dataInsufficient:"Insufficient data",calibTitle:"Calibration",incompleteFilters:"Unchecked filters (not counted): ",sessionTwse:"TWSE session",ohlcvBar:"OHLCV bar",generated:"Generated",universeTw:"TW universe",universeUs:"US universe",cat精選:"Featured",cat價量:"Price/Vol",cat籌碼:"Flow",cat財務:"Fundamentals",cat大師:"Masters",cat週期:"Cycle",regimeToday:"Today's market regime (US / TW separate)",psychologyPhase:"Psychology phase",cycleStance:"Cycle stance",liquidityBias:"Liquidity bias",temperatureScore:"Temperature score",sizeMult:"Size mult",regimeTags:"Regime tags",dataGaps:"Data gaps",marketRegime:"Market regime",logicTitle:"Selection logic",logicSubtitle:"Regime → screens → strategies → demotions → why → sizing — auditable math",logicNoRegime:"No marketRegime yet (await next scan → latest.json).",logicStep1:"Market regime",logicStep1Lead:"Set US/TW dials first, then screen names. Kostolany phase × Marks temperature × rates liquidity.",logicStep1Caption:"Phase → screen stance → size multiplier (STANCE_SIZE_MULT)",logicRatesR2:"R2: ^TNX +0.25pp / 20d → defensive liquidity bias (even if price mid-cycle).",logicRatesR3:"R3: yields ≤ −0.25pp / 60d → allow more aggressive dial (if not euphoric).",logicRatesSeparate:"Hard rule: dial_US and dial_TW stay separate — never one “world mood”.",logicStep2:"Math screens (A / B)",logicStep2Lead:"RS, momentum, SMA, volume — thresholds shift with cycleStance.",logicScreenA:"Screen A · momentum / RS",logicScreenABalanced:"balanced: day RS≥0.5pp or day≥1.5%; or 5d≥3%; or 1m≥6% & >SMA20; or both MAs with 5d≥0 / RS≥0.",logicScreenASelective:"selective: >SMA50 and (RS≥0.5 or 5d≥3% or 1m≥6% & >SMA20).",logicScreenADefensive:"defensive: >SMA20+SMA50 and (RS≥0.8 or 5d≥4%) and vol≥1.0 (null vol OK); 1m≥12% & vol<0.8 → reject.",logicScreenAAggressive:"aggressive/constructive: looser RS/day/5d/1m; allow firm-hands below SMA50 if >SMA200 (1m<0 & vol≥1.4). constructive also needs SMA20 or SMA200.",logicScreenAStabilize:"stabilize_first: must >SMA20 and (RS≥1.0pp or vol≥1.5).",logicScreenB:"Screen B · volume",logicScreenBVol:"vol_ratio = today / 20d avg. Floors: defensive ≥1.0; aggressive ≥1.1; else ≥1.2.",logicScreenBMom:"A backfill: if A missed but 1m≥8% & >SMA20+SMA50 (not stabilize_first) → tag A.",logicScore:"Ranking score",logicScoreFormula:"score = dayRS×2 + 5d%×0.35 + 1m%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"vol≥1.2 adds (cap ~8×0.6); vol<0.4 −0.5; then scoreAdjust by regime.",logicStep3:"XQ strategies",logicXqLead:"Parallel to daily lists: condition hits (price/vol, flow, fundamentals, masters, cycle). Missing fields → insufficient — never invented.",logicXqPriceVol:"Price/vol: MA bull stack, ultra-short, etc. (OHLCV).",logicXqFlow:"Flow: institutional sync (public share-unit thresholds).",logicXqFund:"Fundamentals: earnings uptrend, PE / margins from public filings.",logicXqMasters:"Masters: Lynch / Graham / Buffett-style computable proxies.",logicXqCycle:"Cycle: Kostolany / regime pack keyed to today’s US·TW dials.",logicOpenStrategies:"Open Strategies",logicStep4:"Ranking demotions / boosts",logicStep4Lead:"scoreAdjust: thin high-RS, firm-hands, and panic reclaim change the score.",logicDemoteHot:"defensive/selective: 1m≥8% & vol<0.8 → −2.5; vol<0.7 & day>2% → −1.2; missing dual MA −1.5.",logicDemoteThin:"K5: strong RS on thin volume → demote / keep out of aggressive bucket.",logicPromoteFirm:"aggressive/constructive: weak price + rising vol + >SMA200 (firm-hands) → +2.2; early up-day volume +1.0.",logicDemotePanic:"stabilize_first: base −3; +1.5 only if >SMA20.",logicListSize:"List length: defensive ~0.55×; selective ~0.75×; stabilize_first ~0.45×; aggressive +2 (cap 14); base 12.",logicStep5:"How “Why” is built",logicStep5Lead:"The why field is a readable join of verified fields — not a black box.",logicWhyRs:"Day % + vs index (US: S&P; TW: TAIEX) in pp.",logicWhyMom:"5-day % and ~1-month %.",logicWhyVol:"Volume sentence only if vol_ratio ≥ 1.2.",logicWhySma:"SMA20 / 50 / 200 status (dual-MA preferred).",logicWhyRegime:"Append _regimeNote or cycleStance / psychologyPhase.",logicStep6:"Paper sizing discipline",logicStep6Lead:"Paper books validate process — not live orders. Size constrained by regime sizeMult + fixed risk math.",logicPaperCapital:"Capital: TW NT$3,000,000 (round lots); US US$100,000 (from 1 share).",logicPaperBuy:"Buy: list (observe-only avoided); risk = equity×1%; stop≈price×1.5% (vol≥3 → 2.5%); per name ≤8% equity.",logicPaperSizeMult:"regime sizeMult (0.3–1.35×) tags day’s aggressiveness; linked to list length.",logicPaperSell:"Sell: stop −3%; take-profit +12% half; below SMA20 & day <−2%; off-list & losing; limit-up chase next-day −5%.",logicOpenPaper:"Open Paper",logicFootnote:"Framework synthesis for transparent screening — not investment advice. Public operational proxies only; no copyrighted book text.",backendOff:"Discussion backend not enabled",localComments:"Site comments",futu:"Futu",nickPlaceholder:"Nickname (optional)",commentPlaceholder:"Comment",commentInput:"Write a comment",send:"Send",guest:"Guest",noLocalComments:"No comments yet",backendNotConnected:"Backend not connected",readFail:"Read failed: {msg}",sendFail:"Send failed: {msg}",sendFailShort:"Send failed",noSource:"No {source}",newsClues:"News / discussion clues (not comments)",relatedNews:"Related public news (not social comments)",messages:"Messages",giscusUnset:"Giscus not configured (needs repoId / categoryId).",manualOpen:"Open manually",noSnippet:"(no snippet)",noTickerData:"No {kind} data for this ticker",viaBackup:"Backup source: {via}",noDigestBlock:"No {title} block (no tickers or not fetched)",socialDigestMarket:"Social digest market",socialDigestTitle:"Social digest",socialUs:"US sources",socialTw:"TW sources",externalDigestShort:"External digest",routingNote:"Routing: US → Reddit + Futu; TW → PTT + Dcard + Threads",socialUsTab:"US Reddit / Futu",socialTwTab:"TW PTT / Dcard / Threads",socialLoadFail:"Social digest missing or failed: {msg}",futuFull:"Futu",condPass:"Cond.",condFail:"Fail",condSkip:"Skip",pe:"P/E",opMargin:"Op. margin",grossMargin:"Gross margin",foreignInv:"Foreign",trustInv:"Trust",dealerInv:"Dealer",maBull:"MA bull stack",amplitude:"Range",zhang:"lots",limitUp:"Limit-up",momentum:"Momentum",metricPrice:"Price",metricDayPct:"Day %",metricVolRatioYday:"Vol ratio (yday)",metricVolToday:"Vol (lots)",metricDebt:"Debt %",metricDirector:"Insider %",metricOpQ:"Op. margin (q)",metricSource:"Source",foreign1d:"Foreign 1d (lots)",trust1d:"Trust 1d (lots)",dealer1d:"Dealer 1d (lots)",foreign5d:"Foreign 5d (lots)",trust5d:"Trust 5d (lots)",dealer5d:"Dealer 5d (lots)"},ot={...oe,siteTitle:"每日数学选股",loading:"加载中…",disclaimer:"投资涉及风险，信息仅供参考，非投资建议",footer:"投资涉及风险，信息仅供参考，非投资建议",dataAsOf:"数据",taipei:"（台北）",navMain:"主导航",navToday:"今日",navStrategies:"策略",navPaper:"模拟",navSocial:"社群",navLogic:"逻辑",todayPicks:"今日选股",market:"市场",hot:"热门",marketQuotes:"市场报价",usStock:"美股",twStock:"台股",usList:"美股列表",twList:"台股列表",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暂无 Top 候选",ticker:"代码",name:"名称",price:"价格",dayPct:"日涨跌",priorClose:"前收",priorCloseFull:"前收涨幅",pct5d:"5 日",pct1m:"约 1 月",volRatio:"量比",ma:"均线",screening:"筛选",reason:"理由",details:"详情",business:"本业",risk:"风险",observe:"观察",dataIncomplete:"资料不全",intraday:"盘中",taipeiClose:"台北收",parity:"平价",implied:"隐含价",premium:"溢价",adsRatio:"换股比",taiex:"台湾加权 TAIEX",otc:"柜买",loadError:"无法加载数据（{msg}）。请确认以静态服务器打开，且 data/latest.json 存在。",langLabel:"语言",chatUs:"美股",chatTw:"台股",danmakuFx:"弹幕效果",chatMore:"更多",nickLabel:"昵称",room:"房间",lobby:"大厅",perTicker:"个股",usTickers:"美股标的",twTickers:"台股标的",noUsTickers:"暂无美股标的",noTwTickers:"暂无台股标的",chatRoom:"聊天室",externalDiscuss:"外部讨论",externalDigest:"外部讨论摘要",usLobby:"美股大厅",twLobby:"台股大厅",noMessages:"目前尚无消息",noComments:"目前尚无留言",noTickersDiscuss:"此市场目前无标的可讨论",paper:"模拟",paperMissing:"尚无模拟账本文件。请在项目执行 npm run paper。",paperDisclaimer:"累积模拟账户（自 {date} 起） · 不会每日归零 · 买进即成交 · 非真实下单",paperRules:"规则（各市场独立账）",paperRuleTw:"台股本金 NT$3,000,000 · 整张成交",paperRuleUs:"美股本金 US$100,000 · 可买 1 股起",paperRuleBuy:"买：该市场名单·风险1%·停距1.5%·单档≤8% · 即成交",paperRuleSell:"卖：停损−3% · 停利+12%半仓 · 破SMA20且日跌>2% · 离名单亏损 · 涨停隔日−5%",paperTabTw:"台股账 · NT$",paperTabUs:"美股账 · US$",paperBookTw:"台股账本（NT$）",paperBookUs:"美股账本（US$）",principal:"本金",cash:"现金",equity:"权益（部位＋现金）",totalPnl:"总损益",totalPnlPct:"总损益 ％",weekPerf:"周绩效",monthPerf:"月绩效",quarterPerf:"季绩效",yearPerf:"年绩效",sinceInception:"成立以来",noTradesToday:"本日尚无此类成交（模拟）",noPositions:"目前没有持股",buy:"买",sell:"卖",shares:"股",qtyShares:"股数",positions:"目前部位",position:"部位",avgCost:"成本",mark:"现价",unrealizedPnl:"未实现损益",unrealizedPct:"未实现 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累积 · 买进即成交",reasonScreenBuy:"名单新开仓",reasonAdd:"持续买进",reasonStop:"停损",reasonTakeProfit:"停利",reasonMomentumBreak:"动能转弱",reasonOffList:"离开名单",reasonLimitUpChase:"涨停追价急杀",stopLoss:"停损",takeProfit:"停利",paperTrade:"模拟",realizedPnl:"损益",periodPerf:"绩效",qty:"数量",note:"说明",strategyScreen:"策略选股",strategyLead:"台／美命中分开检视 · 缺资料标「不足」",strategyLoading:"加载策略结果中…",strategyEmpty:"尚无策略资料。请执行 npm run strategies。",strategyLoadError:"无法加载策略选股（{msg}）。请确认已执行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分类",hitCount:"档命中",hitTitle:"命中档数",strategyDetails:"详情 · 策略说明",conditions:"条件",results:"筛选结果",copyJson:"复制 JSON",exportCsv:"导出此策略 CSV",exportJson:"导出 JSON",copied:"已复制",noHitsExport:"此策略今日无命中列可导出",incomplete:"不足",hitsTotal:"共{n}档",twOnlyHint:"本策略仅台股",hitMarket:"命中市场",noHits:"本日无命中",dataInsufficient:"资料不足",calibTitle:"校准说明",incompleteFilters:"未检查滤网（不算通过）：",sessionTwse:"证交所 session",ohlcvBar:"OHLCV K棒",generated:"产生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精选",cat價量:"价量",cat籌碼:"筹码",cat財務:"财务",cat大師:"大师",cat週期:"周期",regimeToday:"今日市场周期（美／台分开）",psychologyPhase:"心理相位",cycleStance:"周期姿态",liquidityBias:"流动性偏误",temperatureScore:"市场温度",sizeMult:"部位乘数",regimeTags:"周期标签",dataGaps:"资料缺口",marketRegime:"市场周期",logicTitle:"选股逻辑",logicSubtitle:"政权→筛选→策略→降权→理由→部位：可稽核的数学流程",logicNoRegime:"尚无 marketRegime（待下次扫描写入 latest.json）。",logicStep1:"市场周期（Regime）",logicStep1Lead:"先定美／台独立姿态，再筛个股。Kostolany 心理相位 × Marks 温度 × 利率流动性。",logicStep1Caption:"相位 → 筛选姿态 → 部位乘数（STANCE_SIZE_MULT）",logicRatesR2:"R2：美债 ^TNX 20 日上升 ≥ +0.25pp → 流动性偏防御（即使价趋势仍中性）。",logicRatesR3:"R3：60 日收益率下降 ≤ −0.25pp → 允许较积极姿态（非 euphoria）。",logicRatesSeparate:"硬规则：dial_US 与 dial_TW 分开；不混成「全球心情」。",logicStep2:"数学筛选（A／B）",logicStep2Lead:"相对强度、动能、SMA、量比；门槛依 cycleStance 调整。",logicScreenA:"筛选 A · 动能／相对强度",logicScreenABalanced:"balanced：日 RS≥0.5pp 或日涨≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或双均线且 5日≥0／RS≥0。",logicScreenASelective:"selective：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"defensive：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量视为可过）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"aggressive／constructive：放宽 RS／日／5日／1月；允许 SMA200 下 firm-hands（1月<0 且量比≥1.4）。constructive 另需 SMA20 或 SMA200。",logicScreenAStabilize:"stabilize_first：须站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌后先稳定）。",logicScreenB:"筛选 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。门槛：defensive ≥1.0；aggressive ≥1.1；其余 ≥1.2。",logicScreenBMom:"补标 A：若未过 A，但 1月≥8% 且 SMA20＋SMA50（非 stabilize_first）→ 仍标 A。",logicScore:"排序分数",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加权（上限约 8×0.6）；量比<0.4 −0.5；再套用 scoreAdjust（周期）。",logicStep3:"XQ 策略选股",logicXqLead:"与每日名单并行：条件式命中（价量／筹码／财务／大师／周期）。缺栏标「资料不足」，不捏造。",logicXqPriceVol:"价量：均线多头、超短线作多等（OHLCV 实算）。",logicXqFlow:"筹码：法人同步等（公开张数门槛）。",logicXqFund:"财务：获利递增、PE／营益率等公开财报栏。",logicXqMasters:"大师：林奇／格雷厄姆／巴菲特等可计算代理条件。",logicXqCycle:"周期：科斯托拉尼／regime 包（依当日美台姿态）。",logicOpenStrategies:"打开策略页",logicStep4:"排序降权／加权",logicStep4Lead:"scoreAdjust：依姿态对高 RS 缩量、firm-hands、恐慌稳定做加减分。",logicDemoteHot:"defensive／selective：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日涨>2% → −1.2；缺双均线 −1.5。",logicDemoteThin:"K5：高相对强度但量能不足 → 降权／排除积极桶。",logicPromoteFirm:"aggressive／constructive：价弱量增且 SMA200（firm-hands）→ +2.2；早段放量上涨 +1.0。",logicDemotePanic:"stabilize_first：基准 −3；站上 SMA20 才 +1.5。",logicListSize:"名单长度：defensive ≈0.55×；selective ≈0.75×；stabilize_first ≈0.45×；aggressive +2（上限14）；基准 12。",logicStep5:"「为什么」如何组成",logicStep5Lead:"why 栏为可读摘要，非模型黑箱——由当日可验证栏位串接。",logicWhyRs:"日涨跌 + 相对指数（美：S&P；台：加权）pp。",logicWhyMom:"五日%、约一个月%。",logicWhyVol:"量比≥1.2 才写入量能句。",logicWhySma:"SMA20／50／200 站上状态（双均线优先）。",logicWhyRegime:"附加 _regimeNote 或 cycleStance／psychologyPhase。",logicStep6:"纸上部位纪律",logicStep6Lead:"模拟账验证流程；非实单。部位受 regime sizeMult 与固定风险公式约束。",logicPaperCapital:"本金：台股 NT$3,000,000（整张）；美股 US$100,000（1 股起）。",logicPaperBuy:"买：名单（纯 observe 尽量不买）；风险＝权益×1%；停距≈价×1.5%（量比≥3→2.5%）；单档≤权益 8%。",logicPaperSizeMult:"regime sizeMult（0.3–1.35×）标示当日建议积极度；与名单长度联动。",logicPaperSell:"卖：停损 −3%；停利 +12% 半仓；破 SMA20 且日跌>2%；离名单且亏损；涨停风格隔日 −5%。",logicOpenPaper:"打开模拟页",logicFootnote:"框架合成仅供透明筛选说明，非投资建议。公开作者方法之可编码代理；不重制受著作权保护之原文。",backendOff:"讨论功能尚未启用",localComments:"本站留言",futu:"富途",nickPlaceholder:"昵称（选填）",commentPlaceholder:"留言",commentInput:"输入留言",send:"发送",guest:"访客",noLocalComments:"尚无留言",backendNotConnected:"后端未接上",readFail:"读取失败：{msg}",sendFail:"发送失败：{msg}",sendFailShort:"发送失败",noSource:"无 {source}",newsClues:"新闻／讨论线索（非留言）",relatedNews:"相关公开新闻（非社群评论）",messages:"消息",giscusUnset:"Giscus 尚未设定（需 repoId／categoryId）。",manualOpen:"手动打开",noSnippet:"(无摘要)",noTickerData:"此标的暂无{kind}资料",viaBackup:"来源备援：{via}",noDigestBlock:"无 {title} 区块（今日无对应市场标的或尚未抓取）",socialDigestMarket:"社交摘要市场",socialDigestTitle:"网友参考",socialUs:"美股来源",socialTw:"台股来源",externalDigestShort:"外部摘要",routingNote:"路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads",socialUsTab:"美股 Reddit／富途",socialTwTab:"台股 PTT／Dcard／Threads",socialLoadFail:"社交摘要尚未产生或读取失败：{msg}",futuFull:"富途牛牛",condPass:"条件",condFail:"未过",condSkip:"略过",pe:"本益比",opMargin:"营益率",grossMargin:"毛利率",foreignInv:"外资",trustInv:"投信",dealerInv:"自营商",maBull:"均线多头",amplitude:"振幅",zhang:"张",limitUp:"涨停",momentum:"动能",metricPrice:"价格",metricDayPct:"日涨跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(张)",metricDebt:"负债比%",metricDirector:"董监持股%",metricOpQ:"近季营益率%",metricSource:"来源",foreign1d:"外资1日(张)",trust1d:"投信1日(张)",dealer1d:"自营商1日(张)",foreign5d:"外资5日(张)",trust5d:"投信5日(张)",dealer5d:"自营5日(张)"},nt={...oe,siteTitle:"毎日クオンツ選株",loading:"読み込み中…",disclaimer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",footer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",dataAsOf:"データ",taipei:"（台北）",navMain:"メインナビ",navToday:"本日",navStrategies:"戦略",navPaper:"模擬",navSocial:"コミュニティ",navLogic:"ロジック",todayPicks:"本日の選株",market:"市場",hot:"相場",marketQuotes:"相場気配",usStock:"米国株",twStock:"台湾株",usList:"米国リスト",twList:"台湾リスト",usTop:"米国 Top",twTop:"台湾 Top",emptyTop:"{market} の Top 候補はありません",ticker:"銘柄",name:"名称",price:"価格",dayPct:"日次%",priorClose:"前日比",priorCloseFull:"前日終値比",pct5d:"5日",pct1m:"約1ヶ月",volRatio:"出来高比",ma:"移動平均",screening:"スクリーニング",reason:"理由",details:"詳細",business:"事業",risk:"リスク",observe:"観察",dataIncomplete:"データ不足",intraday:"場中",taipeiClose:"台北終値",parity:"パリティ",implied:"理論価格",premium:"プレミアム",adsRatio:"交換比率",taiex:"台湾加重 TAIEX",otc:"櫃買",loadError:"データを読み込めません（{msg}）。静的サーバーと data/latest.json を確認してください。",langLabel:"言語",chatUs:"米国",chatTw:"台湾",danmakuFx:"弾幕",chatMore:"その他",nickLabel:"名前",room:"ルーム",lobby:"ロビー",perTicker:"銘柄別",usTickers:"米国銘柄",twTickers:"台湾銘柄",noUsTickers:"米国銘柄なし",noTwTickers:"台湾銘柄なし",chatRoom:"チャット",externalDiscuss:"外部ディスカッション",externalDigest:"外部ダイジェスト",usLobby:"米国ロビー",twLobby:"台湾ロビー",noMessages:"メッセージはまだありません",noComments:"コメントはまだありません",noTickersDiscuss:"この市場で議論できる銘柄がありません",paper:"模擬",paperMissing:"模擬ポートフォリオがありません。npm run paper を実行してください。",paperDisclaimer:"累積模擬口座（{date} 起） · 毎日リセットしません · シグナル即約定 · 実注文ではありません",paperRules:"ルール（市場別独立口座）",paperRuleTw:"台湾元本 NT$3,000,000 · 単元取引",paperRuleUs:"米国元本 US$100,000 · 1株から",paperRuleBuy:"買：リスト·リスク1%·ストップ1.5%·単銘柄≤8% · 即約定",paperRuleSell:"売：損切−3% · 利確+12%半分 · SMA20割れかつ日−2%超 · リスト外かつ損失 · ストップ高翌日−5%",paperTabTw:"台湾口座 · NT$",paperTabUs:"米国口座 · US$",paperBookTw:"台湾帳簿（NT$）",paperBookUs:"米国帳簿（US$）",principal:"元本",cash:"現金",equity:"純資産（ポジション＋現金）",totalPnl:"総損益",totalPnlPct:"総損益％",weekPerf:"週次",monthPerf:"月次",quarterPerf:"四半期",yearPerf:"年次",sinceInception:"開始以来",noTradesToday:"本日この種別の約定はありません（模擬）",noPositions:"保有なし",buy:"買",sell:"売",shares:"株",qtyShares:"株数",positions:"現在のポジション",position:"ポジション",avgCost:"平均単価",mark:"時価",unrealizedPnl:"含み損益",unrealizedPct:"含み％",recentTrades:"約定（直近40）",paperSession:"{date} · {inception} から累積 · シグナル即約定",reasonScreenBuy:"リスト新規",reasonAdd:"追加買い",reasonStop:"損切り",reasonTakeProfit:"利確",reasonMomentumBreak:"モメンタム悪化",reasonOffList:"リスト外",reasonLimitUpChase:"ストップ高追撃解消",stopLoss:"損切り",takeProfit:"利確",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"パフォーマンス",qty:"数量",note:"備考",strategyScreen:"戦略スクリーナー",strategyLead:"米／台ヒットを分けて表示 · データ不足は「不足」",strategyLoading:"戦略を読み込み中…",strategyEmpty:"戦略データがありません。npm run strategies を実行してください。",strategyLoadError:"戦略を読み込めません（{msg}）。npm run strategies を確認してください。",strategyList:"戦略一覧",strategyCat:"カテゴリ",hitCount:"ヒット",hitTitle:"ヒット数",strategyDetails:"詳細 · 戦略説明",conditions:"条件",results:"結果",copyJson:"JSON をコピー",exportCsv:"この戦略を CSV 出力",exportJson:"JSON 出力",copied:"コピー済み",noHitsExport:"本日この戦略のヒット行はありません",incomplete:"不足",hitsTotal:"{n}件",twOnlyHint:"台湾株のみ",hitMarket:"ヒット市場",noHits:"本日ヒットなし",dataInsufficient:"データ不足",calibTitle:"キャリブレーション",incompleteFilters:"未検査フィルター（通過扱いしない）：",sessionTwse:"TWSE session",ohlcvBar:"OHLCV バー",generated:"生成",universeTw:"台湾ユニバース",universeUs:"米国ユニバース",cat精選:"厳選",cat價量:"価格/出来高",cat籌碼:"需給",cat財務:"財務",cat大師:"マスター",cat週期:"サイクル",regimeToday:"本日の市場レジーム（米／台は別管理）",psychologyPhase:"心理フェーズ",cycleStance:"サイクル姿勢",liquidityBias:"流動性バイアス",temperatureScore:"市場温度",sizeMult:"サイズ倍率",regimeTags:"レジームタグ",dataGaps:"データ欠落",marketRegime:"市場レジーム",logicTitle:"選別ロジック",logicSubtitle:"レジーム→スクリーニング→戦略→降格→理由→サイジング — 監査可能な数式",logicNoRegime:"marketRegime 未取得（次回スキャンで latest.json に書き込み）。",logicStep1:"市場レジーム",logicStep1Lead:"米／台を別ダイヤルで先に決め、その後銘柄を選別。Kostolany 位相 × Marks 温度 × 金利流動性。",logicStep1Caption:"位相 → スクリーニング姿勢 → サイズ倍率（STANCE_SIZE_MULT）",logicRatesR2:"R2：^TNX が 20 日で +0.25pp 以上 → 流動性は防御寄り（価格が中立でも）。",logicRatesR3:"R3：利回りが 60 日で −0.25pp 以下 → より積極ダイヤルを許容（euphoria 以外）。",logicRatesSeparate:"硬規則：dial_US と dial_TW は分離。単一の「世界ムード」にしない。",logicStep2:"数式スクリーン（A／B）",logicStep2Lead:"RS・モメンタム・SMA・出来高。閾値は cycleStance で変動。",logicScreenA:"スクリーン A · モメンタム／RS",logicScreenABalanced:"balanced：日RS≥0.5pp または日≥1.5%；または5日≥3%；または1月≥6%かつ>SMA20；または両MAで5日≥0／RS≥0。",logicScreenASelective:"selective：>SMA50 かつ（RS≥0.5 または5日≥3% または1月≥6%かつSMA20）。",logicScreenADefensive:"defensive：SMA20+SMA50、かつ（RS≥0.8 または5日≥4%）、出来高≥1.0（欠損は可）；1月≥12%かつ出来高<0.8 → 除外。",logicScreenAAggressive:"aggressive／constructive：RS／日／5日／1月を緩和；SMA200 下の firm-hands 可（1月<0かつ出来高≥1.4）。constructive は SMA20 または SMA200 も必要。",logicScreenAStabilize:"stabilize_first：>SMA20 必須、かつ RS≥1.0pp または出来高≥1.5。",logicScreenB:"スクリーン B · 出来高",logicScreenBVol:"出来高比＝当日／20日平均。下限：defensive≥1.0；aggressive≥1.1；他≥1.2。",logicScreenBMom:"A 補完：A未達でも1月≥8%かつSMA20+SMA50（stabilize_first以外）→ A 付与。",logicScore:"順位スコア",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"出来高≥1.2 加点（上限約8×0.6）；<0.4 で −0.5；その後 scoreAdjust。",logicStep3:"XQ 戦略",logicXqLead:"日次リストと並行：条件ヒット（価格/出来高・需給・財務・マスター・サイクル）。欠落は「不足」—捏造しない。",logicXqPriceVol:"価格/出来高：移動平均ブル、超短期など（OHLCV）。",logicXqFlow:"需給：法人同期など（公開単元閾値）。",logicXqFund:"財務：利益増加、PE／利益率など公開欄。",logicXqMasters:"マスター：リンチ／グレアム／バフェット系の計算可能代理。",logicXqCycle:"サイクル：Kostolany／regime パック（当日の米台ダイヤル）。",logicOpenStrategies:"戦略ページを開く",logicStep4:"順位の降格／加点",logicStep4Lead:"scoreAdjust：薄い高RS、firm-hands、パニック後の安定で加減点。",logicDemoteHot:"defensive／selective：1月≥8%かつ出来高<0.8 → −2.5；出来高<0.7かつ日>+2% → −1.2；両MA欠で −1.5。",logicDemoteThin:"K5：強いRSでも薄い出来高 → 降格／積極バケット外。",logicPromoteFirm:"aggressive／constructive：弱含み＋出来高増＋>SMA200（firm-hands）→ +2.2；序盤の上昇日出来高 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；>SMA20 なら +1.5。",logicListSize:"リスト長：defensive≈0.55×；selective≈0.75×；stabilize_first≈0.45×；aggressive+2（上限14）；基準12。",logicStep5:"「なぜ」の組み立て",logicStep5Lead:"why 欄は検証済みフィールドの読みやすい結合 — ブラックボックスではない。",logicWhyRs:"日次% + 指数対比（米：S&P；台：TAIEX）pp。",logicWhyMom:"5日% と 約1か月%。",logicWhyVol:"出来高比≥1.2 のときのみ出来高文を追加。",logicWhySma:"SMA20／50／200 の上抜け状態（両MA優先）。",logicWhyRegime:"_regimeNote または cycleStance／psychologyPhase を付記。",logicStep6:"ペーパー・サイジング規律",logicStep6Lead:"ペーパー口座はプロセス検証用 — 実注文ではない。regime sizeMult と固定リスク式で制約。",logicPaperCapital:"元本：台湾 NT$3,000,000（単元）；米国 US$100,000（1株〜）。",logicPaperBuy:"買い：リスト（observeのみは原則回避）；リスク＝資本×1%；ストップ≈価格×1.5%（出来高≥3→2.5%）；1銘柄≤資本8%。",logicPaperSizeMult:"regime sizeMult（0.3–1.35×）で当日の積極度を表示；リスト長と連動。",logicPaperSell:"売り：損切−3%；利確+12%半減；SMA20割れかつ日<−2%；リスト外かつ含み損；ストップ高追撃の翌日−5%。",logicOpenPaper:"ペーパーを開く",logicFootnote:"透明なスクリーニング説明のための合成 — 投資助言ではない。公開の運用代理のみ；著作権保護の本文は複製しない。",backendOff:"ディスカッション未接続",localComments:"サイトコメント",futu:"富途",nickPlaceholder:"ニックネーム（任意）",commentPlaceholder:"コメント",commentInput:"コメントを入力",send:"送信",guest:"ゲスト",noLocalComments:"コメントはまだありません",backendNotConnected:"バックエンド未接続",readFail:"読み込み失敗：{msg}",sendFail:"送信失敗：{msg}",sendFailShort:"送信失敗",noSource:"{source} なし",newsClues:"ニュース／議論の手がかり（コメントではない）",relatedNews:"関連公開ニュース（SNSコメントではない）",messages:"メッセージ",giscusUnset:"Giscus 未設定（repoId / categoryId が必要）。",manualOpen:"手動で開く",noSnippet:"(要約なし)",noTickerData:"この銘柄の{kind}データはありません",viaBackup:"バックアップ出典：{via}",noDigestBlock:"{title} ブロックなし（対象なし／未取得）",socialDigestMarket:"ソーシャル要約の市場",socialDigestTitle:"ソーシャル要約",socialUs:"米国ソース",socialTw:"台湾ソース",externalDigestShort:"外部ダイジェスト",routingNote:"ルーティング：米国 → Reddit＋富途；台湾 → PTT＋Dcard＋Threads",socialUsTab:"米国 Reddit／富途",socialTwTab:"台湾 PTT／Dcard／Threads",socialLoadFail:"ソーシャル要約の取得に失敗：{msg}",futuFull:"富途",condPass:"条件",condFail:"未達",condSkip:"省略",pe:"PER",opMargin:"営業利益率",grossMargin:"粗利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自己売買",maBull:"移動平均ブル",amplitude:"振幅",zhang:"単元",limitUp:"ストップ高",momentum:"モメンタム",metricPrice:"価格",metricDayPct:"日次%",metricVolRatioYday:"出来高比(昨)",metricVolToday:"出来高(単元)",metricDebt:"負債比率%",metricDirector:"役員持株%",metricOpQ:"直近四半期営業利益率%",metricSource:"出典",foreign1d:"外資1日(単元)",trust1d:"投信1日(単元)",dealer1d:"自己1日(単元)",foreign5d:"外資5日(単元)",trust5d:"投信5日(単元)",dealer5d:"自己5日(単元)"},ce={"zh-Hant":oe,en:rt,"zh-Hans":ot,ja:nt};function a(t,e,s){let r,o=s;e&&typeof e=="object"&&!Array.isArray(e)?o=e:typeof e=="string"&&(r=e);let l=(ce[B]||ce[ge])[t]??ce[ge][t]??r??t;if(o)for(const[m,g]of Object.entries(o))l=l.replace(new RegExp(`\\{${m}\\}`,"g"),String(g));return l}function lt(){const t=De.map(e=>`<option value="${e.id}"${e.id===B?" selected":""}>${e.label}</option>`).join("");return`
    <label class="lang-switch" title="${a("langLabel")}">
      <span class="lang-switch-label">${a("langLabel")}</span>
      <select class="lang-select" data-lang-select aria-label="${a("langLabel")}">
        ${t}
      </select>
    </label>`}function ct(t,e){var r;const s=(r=t==null?void 0:t.querySelector)==null?void 0:r.call(t,"[data-lang-select]");s&&(s.value=B,s.addEventListener("change",()=>{st(s.value)}))}function i(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function c(t,e){return i(a(t,e))}const dt="./data/paper-portfolio.json";function j(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function ne(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function ze(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(U(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Oe(t){return t==="USD"?"US$":t==="TWD"?"NT$":""}function K(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"?0:2;return`${Oe(e)}${ze(t,s)}`}function J(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"&&t>=100?0:2;return`${Oe(e)}${ze(t,s)}`}function We(t){return{"screen-buy":a("reasonScreenBuy"),add:a("reasonAdd"),stop:a("reasonStop"),"take-profit":a("reasonTakeProfit"),"momentum-break":a("reasonMomentumBreak"),"off-list":a("reasonOffList"),"limit-up-chase":a("reasonLimitUpChase")}[t]||t||""}function se(t){return t?`
    <div class="paper-win">
      <div class="w-label">${t.sinceInception?c("sinceInception",a("sinceInception")):i(t.label||"")}</div>
      <div class="w-val ${j(t.pct)}">${ne(t.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function pt(t,e){return t.length?t.map(s=>{var r;return`
      <tr>
        <td><span class="ticker">${i(s.ticker)}</span></td>
        <td class="name-cell">${i(s.name||"")}</td>
        <td class="num">${(r=s.qty)==null?void 0:r.toLocaleString(U())}</td>
        <td class="num">${J(s.price,e)}</td>
        <td><span class="badge reason ${i(s.reason||"")}">${i(We(s.reason))}</span></td>
        <td class="why-cell">${i(s.reasonText||"")}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${i(a("noTradesToday"))}</td></tr>`}function ut(t,e){return t.length?t.map(s=>{var n;const r=(s.mark-s.avgCost)*s.qty,o=s.avgCost?(s.mark-s.avgCost)/s.avgCost*100:0;return`
      <tr>
        <td><span class="ticker">${i(s.ticker)}</span></td>
        <td class="num">${(n=s.qty)==null?void 0:n.toLocaleString(U())}</td>
        <td class="num">${J(s.avgCost,e)}</td>
        <td class="num">${J(s.mark,e)}</td>
        <td class="num ${j(r)}">${K(r,e)}</td>
        <td class="num ${j(o)}">${ne(o)}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${i(a("noPositions"))}</td></tr>`}function mt(t,e,s){const r=e.currency,o=a(t==="TW"?"paperBookTw":"paperBookUs"),n=K(e.startCash,r),l=(s==null?void 0:s.totalPnl)??e.equity-e.startCash,m=(s==null?void 0:s.totalPnlPct)??(e.startCash?(e.equity-e.startCash)/e.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${i(o)}</h3>
      <p class="paper-start">${c("principal",a("principal"))} ${n}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">${i(a("cash"))}</div>
          <div class="k-val">${K(e.cash,r)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${c("position",a("equity"))}</div>
          <div class="k-val">${K(e.equity,r)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${i(a("totalPnl"))}</div>
          <div class="k-val ${j(l)}">${K(l,r)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${i(a("totalPnlPct"))}</div>
          <div class="k-val ${j(m)}">${ne(m)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${i(a("weekPerf"))}</div>
          ${se(s==null?void 0:s.week)}
        </div>
        <div>
          <div class="win-name">${i(a("monthPerf"))}</div>
          ${se(s==null?void 0:s.month)}
        </div>
        <div>
          <div class="win-name">${i(a("quarterPerf"))}</div>
          ${se(s==null?void 0:s.quarter)}
        </div>
        <div>
          <div class="win-name">${i(a("yearPerf"))}</div>
          ${se(s==null?void 0:s.year)}
        </div>
      </div>
    </article>`}function gt(t,e){return t.length?t.map(s=>{var o;const r=s.side==="SELL"?a("sell"):a("buy");return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${i(s.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${i(s.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${i(r)} ${(o=s.qty)==null?void 0:o.toLocaleString(U())} ${i(a("shares"))}</div>
            <div style="font-family:var(--mono)">${J(s.price,e)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${i(s.reason||"")}">${i(We(s.reason))}</span>
        </div>
        ${s.reasonText?`<p class="lc-why">${i(s.reasonText)}</p>`:""}
      </div>`}).join(""):`<div class="list-card empty-card">${i(a("noTradesToday"))}</div>`}function ht(t,e){return t.length?t.map(s=>{var n;const r=(s.mark-s.avgCost)*s.qty,o=s.avgCost?(s.mark-s.avgCost)/s.avgCost*100:0;return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${i(s.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">${i(a("qtyShares"))} ${(n=s.qty)==null?void 0:n.toLocaleString(U())}</div>
          </div>
          <div style="text-align:right">
            <div class="${j(r)}" style="font-family:var(--mono);font-weight:600">${K(r,e)}</div>
            <div class="${j(o)}" style="font-family:var(--mono)">${ne(o)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          <span>${i(a("avgCost"))} ${J(s.avgCost,e)}</span>
          <span>${i(a("mark"))} ${J(s.mark,e)}</span>
        </div>
      </div>`}).join(""):`<div class="list-card empty-card">${i(a("noPositions"))}</div>`}function de(t,e,s){return`
    <div class="paper-table-block">
      <h4>${i(t)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${c("ticker",a("ticker"))}</th>
              <th>${i(a("name"))}</th>
              <th>${i(a("qty"))}</th>
              <th>${i(a("price"))}</th>
              <th>${i(a("reason"))}</th>
              <th>${i(a("note"))}</th>
            </tr>
          </thead>
          <tbody>${pt(e,s)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${gt(e,s)}</div>
    </div>`}function vt(t,e){return`
    <div class="paper-table-block">
      <h4>${i(a("positions"))}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${c("ticker",a("ticker"))}</th>
              <th>${i(a("qty"))}</th>
              <th>${i(a("avgCost"))}</th>
              <th>${i(a("mark"))}</th>
              <th>${c("unrealizedPnl",a("unrealizedPnl"))} $</th>
              <th>${c("unrealizedPnl",a("unrealizedPct"))}</th>
            </tr>
          </thead>
          <tbody>${ut(t,e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${ht(t,e)}</div>
    </div>`}function Te(t,e,s,r,o,n){if(!e)return"";const l=e.currency,m=[...e.trades||[]].sort((S,v)=>S.date<v.date?1:S.date>v.date?-1:0),g=m.filter(S=>S.date===r),d=g.filter(S=>S.side==="BUY"),h=g.filter(S=>S.side==="SELL"),y=m.slice(0,40),b=n;return`
    <div class="paper-panel ${o?"active":""}" id="paper-panel-${t}" role="tabpanel">
      ${mt(t,e,s)}
      <p class="paper-session-note">${i(a("paperSession",{date:r||"—",inception:b}))}</p>
      ${de(`${a("buy")} ${r||""}`,d,l)}
      ${de(`${a("sell")} ${r||""}`,h,l)}
      ${vt(e.positions||[],l)}
      ${de(a("recentTrades"),y,l)}
    </div>`}function ft(t){var l,m;if(!t||!t.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${c("paperTrade",a("paper"))}</h2>
        <p class="paper-missing">${i(a("paperMissing"))}</p>
      </section>`;const e=t.books.TW,s=t.books.US;let o=(t.asOf||"").slice(0,10);try{o=new Date(t.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const n=t.startDate||(e==null?void 0:e.startDate)||(s==null?void 0:s.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${c("paperTrade",a("paper"))}</h2>
      <p class="paper-disclaimer" role="note">
        ${i(a("paperDisclaimer",{date:n}))}
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
      ${Te("TW",e,(l=t.metrics)==null?void 0:l.TW,o,!0,n)}
      ${Te("US",s,(m=t.metrics)==null?void 0:m.US,o,!1,n)}
    </section>`}function yt(t){const e=t.querySelectorAll(".paper-tab-btn");e.forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.paperTab;e.forEach(o=>{const n=o.dataset.paperTab===r;o.classList.toggle("active",n),o.setAttribute("aria-selected",n?"true":"false")}),t.querySelectorAll(".paper-panel").forEach(o=>{o.classList.toggle("active",o.id===`paper-panel-${r}`)})})})}async function bt(){try{const t=await fetch(dt);return t.ok?await t.json():null}catch{return null}}const we={},ve="ss-chat-nick",pe=()=>a("backendOff");function St(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&we?we:{},s=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),r=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:s,anon:r}}function N(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Pe(){try{return String(localStorage.getItem(ve)||"").trim().slice(0,24)}catch{return""}}function ue(t){try{const e=String(t||"").trim().slice(0,24);e?localStorage.setItem(ve,e):localStorage.removeItem(ve)}catch{}}function $t(t,e){const s=String(t||"").trim().toLowerCase(),r=String(e||"").trim().toLowerCase();return!s||!r?!1:s===r}function kt(t){try{const e=new Date(t),s=new Date;return e.getFullYear()===s.getFullYear()&&e.getMonth()===s.getMonth()&&e.getDate()===s.getDate()?e.toLocaleTimeString(U(),{hour:"2-digit",minute:"2-digit",hour12:!1}):e.toLocaleString(U(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}function Tt(t,e){const s={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(r,o=80){const n=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(r)}&order=created_at.asc&limit=${o}`,l=await fetch(n,{headers:s});if(!l.ok)throw new Error(`comments select ${l.status}`);return l.json()},async insert(r){const o=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:s,body:JSON.stringify(r)});if(!o.ok){const n=await o.text();throw new Error(`comments insert ${o.status}: ${n}`)}return o.json()}}}function wt(){return'<svg class="chat-send-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.4 20.4 20.85 12 3.4 3.6l.1 6.55L14.5 12 3.5 13.85l-.1 6.55z"/></svg>'}function Ae(t,e,s={}){if(!t||!e)return{ok:!1,destroy(){}};const r=s.config||globalThis.STOCK_SOCIAL_CONFIG||{},o=String(s.market||"US").toUpperCase()==="TW"?"TW":"US",{url:n,anon:l}=St(r),m=Math.min(r.commentMaxLen||500,s.maxLen||200),g=r.postCooldownMs||4e3,d=s.title||e,h=s.emptyLine||a("noMessages"),y=s.danmakuLayer||document.querySelector("#ss-danmaku-layer"),b=s.flyToggle||document.querySelector("#ss-danmaku-toggle"),S=()=>!!(b&&b.checked);t.classList.add("chat-panel"),t.dataset.market=o,t.dataset.ticker=e,t.setAttribute("role","region"),t.setAttribute("aria-label",d);const v=Pe();t.innerHTML=`
    <div class="chat-status" aria-live="polite"></div>
    <div class="chat-messages" role="log" aria-label="${N(a("messages"))}" tabindex="0"></div>
    <form class="chat-composer" autocomplete="off">
      <div class="chat-nick-row">
        <label class="chat-nick-label" for="chat-nick-input">${N(a("nickLabel"))}</label>
        <input id="chat-nick-input" class="chat-nick" maxlength="24" placeholder="${N(a("nickPlaceholder"))}" value="${N(v)}" autocomplete="nickname" />
      </div>
      <div class="chat-compose-row">
        <input class="chat-body" type="text" maxlength="${m}" placeholder="${N(a("commentInput"))}" required autocomplete="off" enterkeyhint="send" />
        <button type="submit" class="chat-send" aria-label="${N(a("send"))}" title="${N(a("send"))}">${wt()}<span class="chat-send-text">${N(a("send"))}</span></button>
      </div>
    </form>
  `;const $=t.querySelector(".chat-status"),u=t.querySelector(".chat-messages"),f=t.querySelector(".chat-composer"),k=f.querySelector(".chat-nick"),R=f.querySelector(".chat-body"),Y=f.querySelector(".chat-send");let z=new Set,F=!1,H=!1;function Q(A){if(!y||!S())return;const q=document.createElement("div");q.className="ss-danmaku-item",q.textContent=A,q.style.top=`${8+Math.random()*42}vh`,q.style.animationDuration="12000ms",y.appendChild(q),window.setTimeout(()=>q.remove(),12200)}function le(A=!1){const q=u.scrollHeight-u.scrollTop-u.clientHeight<120;(A||q)&&(u.scrollTop=u.scrollHeight)}function w(A){const q=(k.value||Pe()||"").trim();if(!A.length){u.innerHTML=`<div class="chat-empty-state"><p>${N(h)}</p></div>`;return}u.innerHTML=A.map(I=>{const O=$t(I.nickname,q),Ye=O?"own":"other",Qe=N(I.nickname||a("guest")),et=N(I.body||""),tt=N(kt(I.created_at));return`<article class="chat-bubble chat-bubble--${Ye}" data-id="${N(I.id)}">
          ${O?"":`<div class="chat-bubble-nick">${Qe}</div>`}
          <div class="chat-bubble-body">${et}</div>
          <div class="chat-bubble-meta">${tt}</div>
        </article>`}).join("")}if(!n||!l)return $.textContent=pe(),$.classList.add("is-warn"),f.querySelectorAll("input,button").forEach(A=>{A.disabled=!0}),u.innerHTML=`<div class="chat-empty-state"><p>${N(h)}</p></div>`,{ok:!1,reason:"no-config",market:o,destroy(){}};const L=Tt(n,l);$.textContent="",$.classList.remove("is-warn");async function M(A=!1,q=!1){if(!H)try{const I=await L.list(e,80);w(I),le(q||!z.size);for(const O of I)z.has(O.id)||(z.add(O.id),A&&Q(`${O.nickname}: ${O.body}`));z.size>200&&(z=new Set([...z].slice(-100))),$.classList.contains("is-warn")&&$.textContent===pe()&&($.textContent="",$.classList.remove("is-warn"))}catch{$.textContent=pe(),$.classList.add("is-warn")}}k.addEventListener("change",()=>{ue(k.value),u.querySelectorAll(".chat-bubble").length&&M(!1,!1)}),k.addEventListener("blur",()=>ue(k.value)),f.addEventListener("submit",async A=>{if(A.preventDefault(),F)return;const q=(k.value||a("guest")).trim().slice(0,24)||a("guest");ue(k.value);const I=(R.value||"").trim().slice(0,m);if(I){F=!0,Y.disabled=!0;try{await L.insert({ticker:e,body:I,nickname:q}),R.value="",await M(!0,!0),R.focus()}catch{$.textContent=a("sendFailShort"),$.classList.add("is-warn")}finally{window.setTimeout(()=>{F=!1,Y.disabled=!1},g)}}}),R.addEventListener("keydown",A=>{A.key==="Enter"&&!A.shiftKey&&(A.preventDefault(),f.requestSubmit())}),M(!1,!0);const D=window.setInterval(()=>M(!0,!1),r.pollIntervalMs||8e3);return{ok:!0,market:o,ticker:e,destroy(){H=!0,window.clearInterval(D)}}}const Le={},Pt=()=>a("backendOff");function At(){return[{id:"local",label:a("localComments")},{id:"reddit",label:"Reddit"},{id:"futu",label:a("futu")}]}function Lt(){return[{id:"local",label:a("localComments")},{id:"ptt",label:"PTT"},{id:"dcard",label:"Dcard"},{id:"threads",label:"Threads"}]}function Mt(t,e){const s=String(e||"").toUpperCase();return s==="US"||s==="TW"?s:String(t||"").toUpperCase().endsWith(".TW")?"TW":"US"}function qt(t){return t==="TW"?Lt():At()}function xt(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&Le?Le:{},s=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),r=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:s,anon:r}}function P(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ct(t,e){const s={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(r,o=50){const n=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(r)}&order=created_at.asc&limit=${o}`,l=await fetch(n,{headers:s});if(!l.ok)throw new Error(`comments select ${l.status}`);return l.json()},async insert(r){const o=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:s,body:JSON.stringify(r)});if(!o.ok){const n=await o.text();throw new Error(`comments insert ${o.status}: ${n}`)}return o.json()}}}function Rt(t,e,s){if(!t||!s)return null;const r=t[e];return Array.isArray(r)&&r.find(o=>String(o.ticker).toUpperCase()===String(s).toUpperCase())||null}function Nt(t,e,{futuMode:s=!1}={}){if(!t)return`<p class="ss-empty">${P(a("noSource",{source:e}))}</p>`;const r=[];t.blocker&&r.push(`<p class="ss-digest-blocker">⚠ ${P(t.blocker)}</p>`);const o=t.items||[],n=t.newsRelated||[];if(o.length&&r.push(o.map(l=>{const m=l.url?P(l.url):"#",g=l.score!=null?`<span class="ss-score">▲ ${P(l.score)}</span>`:"",d=l.author?`@${P(l.author)}`:"";return`<article class="ss-digest-item">
            <a href="${m}" target="_blank" rel="noopener noreferrer">${P(l.snippet||l.title||"(無摘要)")}</a>
            <div class="ss-digest-meta">${g} ${d}</div>
          </article>`}).join("")),n.length){const l=a(s?"newsClues":"relatedNews");r.push(`<p class="ss-digest-sub">${l}</p>`),r.push(n.map(m=>`<article class="ss-digest-item">
            <a href="${m.url?P(m.url):"#"}" target="_blank" rel="noopener noreferrer">${P(m.snippet||"(無標題)")}</a>
          </article>`).join(""))}return Array.isArray(t.manualUrls)&&t.manualUrls.length&&!o.length&&r.push('<p class="ss-digest-sub">手動開啟</p>'+t.manualUrls.slice(0,4).map(l=>`<article class="ss-digest-item"><a href="${P(l)}" target="_blank" rel="noopener noreferrer">${P(l)}</a></article>`).join("")),!o.length&&!n.length&&!t.blocker&&r.push(`<p class="ss-empty">暫無 ${P(e)} 資料</p>`),r.join("")||'<p class="ss-empty">暫無資料</p>'}function Ut(t,e,s={}){if(!t||!e)return{ok:!1};const r=s.config||globalThis.STOCK_SOCIAL_CONFIG||{},o=s.digest||null,n=Mt(e,s.market||t.getAttribute("data-market")),l=qt(n),{url:m,anon:g}=xt(r),d=r.commentMaxLen||500,h=r.postCooldownMs||4e3,y=!!s.bare,b="",S=l.map((w,L)=>`<button type="button" class="ss-src-tab${L===0?" active":""}" data-src="${w.id}" role="tab" aria-selected="${L===0?"true":"false"}">${w.label}</button>`).join(""),v=l.filter(w=>w.id!=="local").map(w=>`<div class="ss-src-panel" data-panel="${w.id}" role="tabpanel" hidden></div>`).join("");t.classList.add("ss-thread"),t.dataset.market=n;const $=`
      <div class="ss-src-tabs" role="tablist" aria-label="${P(e)}">${S}</div>
      <div class="ss-src-panels">
        <div class="ss-src-panel active" data-panel="local" role="tabpanel">
          <div class="ss-thread-status"></div>
          <ul class="ss-thread-list"></ul>
          <form class="ss-thread-form ss-composer">
            <input class="ss-nick" maxlength="24" placeholder="${P(a("nickPlaceholder"))}" autocomplete="nickname" />
            <textarea class="ss-body" maxlength="${d}" rows="2" placeholder="${P(a("commentPlaceholder"))}" required></textarea>
            <button type="submit">${P(a("send"))}</button>
          </form>
        </div>
        ${v}
      </div>`;t.innerHTML=y?`<div class="ss-thread-bare" data-ticker="${P(e)}">${$}</div>`:`<details class="ss-thread-details"${b}>
      <summary>${P(e)}</summary>
      ${$}
    </details>`;const u=t.querySelector(".ss-thread-status"),f=t.querySelector(".ss-thread-list"),k=t.querySelector(".ss-thread-form"),R={ptt:["ptt","PTT",!1],dcard:["dcard","Dcard",!1],threads:["threads","Threads",!1],reddit:["reddit","Reddit",!1],futu:["futu",a("futu"),!0]};for(const w of l){if(w.id==="local")continue;const L=R[w.id];if(!L)continue;const[M,D,A]=L,q=t.querySelector(`[data-panel="${w.id}"]`);q&&(q.innerHTML=Nt(Rt(o,M,e),D,{futuMode:A}))}const Y=t.querySelectorAll(".ss-src-tab"),z=t.querySelectorAll(".ss-src-panel");if(Y.forEach(w=>{w.addEventListener("click",()=>{const L=w.dataset.src;Y.forEach(M=>{const D=M.dataset.src===L;M.classList.toggle("active",D),M.setAttribute("aria-selected",D?"true":"false")}),z.forEach(M=>{const D=M.dataset.panel===L;M.classList.toggle("active",D),M.hidden=!D})})}),!m||!g)return u.textContent=Pt(),u.className="ss-thread-status is-warn",k.querySelectorAll("input,textarea,button").forEach(w=>{w.disabled=!0}),f.innerHTML=`<li class="ss-empty">${P(a("backendNotConnected"))}</li>`,{ok:!1,reason:"no-config",market:n};const F=Ct(m,g);u.textContent="";let H=!1;async function Q(){try{const w=await F.list(e);if(!w.length){f.innerHTML=`<li class="ss-empty">${P(a("noLocalComments"))}</li>`;return}f.innerHTML=w.map(L=>`<li><strong>${P(L.nickname)}</strong> ${P(L.body)}<span class="meta">${P(new Date(L.created_at).toLocaleString(U(),{hour12:!1}))}</span></li>`).join("")}catch(w){u.textContent=a("readFail",{msg:w.message}),u.className="ss-thread-status is-warn"}}k.addEventListener("submit",async w=>{if(w.preventDefault(),H)return;const L=(k.querySelector(".ss-nick").value||a("guest")).trim().slice(0,24)||a("guest"),M=(k.querySelector(".ss-body").value||"").trim().slice(0,d);if(!M)return;H=!0;const D=k.querySelector("button");D.disabled=!0;try{await F.insert({ticker:e,body:M,nickname:L}),k.querySelector(".ss-body").value="",await Q()}catch(A){u.textContent=a("sendFail",{msg:A.message}),u.className="ss-thread-status is-warn"}finally{window.setTimeout(()=>{H=!1,D.disabled=!1},h)}}),Q();const le=window.setInterval(Q,r.pollIntervalMs||1e4);return{ok:!0,market:n,destroy(){window.clearInterval(le)}}}function Dt(t=document,e={}){const s=t.querySelectorAll("[data-ticker-comments]"),r=[];return s.forEach(o=>{const n=o.getAttribute("data-ticker-comments")||o.dataset.ticker,l=o.getAttribute("data-market")||void 0;n&&r.push(Ut(o,n,{...e,market:l}))}),r}function It(t,e){if(!t||!e||t.querySelector("script[data-giscus], iframe.giscus-frame"))return;const s=document.createElement("script");s.src="https://giscus.app/client.js",s.async=!0,s.crossOrigin="anonymous",s.setAttribute("data-giscus","1"),s.setAttribute("data-repo",e.repo||""),s.setAttribute("data-repo-id",e.repoId||""),s.setAttribute("data-category",e.category||"General"),s.setAttribute("data-category-id",e.categoryId||""),s.setAttribute("data-mapping",e.mapping==="pathname"?"pathname":"specific"),s.setAttribute("data-term",e.term||"site-discussion"),s.setAttribute("data-strict","0"),s.setAttribute("data-reactions-enabled","1"),s.setAttribute("data-emit-metadata","0"),s.setAttribute("data-input-position","bottom"),s.setAttribute("data-theme",e.theme||"dark"),s.setAttribute("data-lang",e.lang||"zh-TW"),t.appendChild(s)}function Bt(t="#ss-giscus",e={}){const s=document.querySelector(t);if(!s)return{ok:!1,reason:"missing"};const o=(e.config||globalThis.STOCK_SOCIAL_CONFIG||{}).giscus||{};if(!o.enabled||!o.repoId||!o.categoryId)return s.innerHTML=`<p class="ss-chat-status is-warn">${P(a("giscusUnset"))}</p>`,{ok:!1,reason:"no-config"};const n=s.querySelector(".ss-giscus-host")||s;return It(n,{...o,term:o.term||"site-discussion"}),{ok:!0}}function T(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Et(t){const e=t.manualUrls||[];return e.length?`<p class="ss-digest-sub">${T(a("manualOpen"))}</p>`+e.slice(0,4).map(s=>`<article class="ss-digest-item"><a href="${T(s)}" target="_blank" rel="noopener noreferrer">${T(s)}</a></article>`).join(""):""}function Me(t){const e=t.score!=null?`<span class="ss-score">▲ ${T(t.score)}</span>`:"",s=t.author?`@${T(t.author)}`:"",r=t.created?T(new Date(t.created).toLocaleString(U(),{hour12:!1})):t.date?T(t.date):"",o=t.via?`<span class="ss-via">${T(t.via)}</span>`:"";return`<article class="ss-digest-item">
    <a href="${t.url?T(t.url):"#"}" target="_blank" rel="noopener noreferrer">${T(t.snippet||t.title||a("noSnippet"))}</a>
    <div class="ss-digest-meta">${e} ${s} ${r} ${o}</div>
  </article>`}function zt(t,e,{futuMode:s=!1}={}){var g;const r=t.blocker?`<p class="ss-digest-blocker">⚠ ${T(t.blocker)}</p>`:"",o=t.items||[],n=t.newsRelated||[];let l="";if(o.length&&(l+=o.map(Me).join("")),n.length){const d=a(s?"newsClues":"relatedNews");l+=`<p class="ss-digest-sub">${d}</p>`+n.map(Me).join("")}!o.length&&((g=t.manualUrls)!=null&&g.length)&&(l+=Et(t)),l||(l=`<p class="ss-empty">${T(a("noTickerData",{kind:e}))}</p>`);const m=t.via&&t.via!=="reddit.com"?`<p class="ss-digest-via-note">${T(a("viaBackup",{via:t.via}))}</p>`:"";return`<section class="ss-digest-ticker" data-ticker="${T(t.ticker)}">
    <h4>${T(t.ticker)}</h4>
    ${r}
    ${m}
    ${l}
  </section>`}function ee(t,e,s,r={}){const o=(e||[]).map(n=>zt(n,s,r)).join("");return`<div class="ss-digest-col">
    <h4 class="ss-digest-col-title">${T(t)}</h4>
    ${o||`<p class="ss-empty">${T(a("noDigestBlock",{title:t}))}</p>`}
  </div>`}async function je(t){const e=globalThis.STOCK_SOCIAL_CONFIG||{},s=t||e.socialDigestUrl||"./data/social-digest.json",r=await fetch(s,{cache:"no-cache"});if(!r.ok)throw new Error(`social-digest ${r.status}`);return r.json()}function Ot(t,e){if(!e)return;const s=t.asOf?new Date(t.asOf).toLocaleString(U(),{hour12:!1}):"—";(t.notes||[]).map(d=>`<li>${T(d)}</li>`).join(""),t.routing&&`${T(a("routingNote"))}`;const r=`
    <div class="ss-digest-market" data-market-panel="US">
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${ee("Reddit",t.reddit,"Reddit")}
        ${ee(a("futuFull"),t.futu,a("futu"),{futuMode:!0})}
      </div>
    </div>`,o=`
    <div class="ss-digest-market" data-market-panel="TW" hidden>
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${ee("PTT",t.ptt,"PTT")}
        ${ee("Dcard",t.dcard,"Dcard")}
        ${ee("Threads",t.threads,"Threads")}
      </div>
    </div>`,n=(t.reddit||[]).length||(t.futu||[]).length,l=(t.ptt||[]).length||(t.dcard||[]).length||(t.threads||[]).length,m=n?"US":l?"TW":"US";e.innerHTML=`
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>${T(a("externalDigestShort"))}</h3>
        <p class="ss-digest-asof">${T(s)}</p>
      </header>
      <div class="ss-digest-market-tabs" role="tablist" aria-label="${T(a("socialDigestMarket"))}">
        <button type="button" class="ss-mkt-tab${m==="US"?" active":""}" data-market="US" role="tab" aria-selected="${m==="US"}">${T(a("socialUsTab"))}</button>
        <button type="button" class="ss-mkt-tab${m==="TW"?" active":""}" data-market="TW" role="tab" aria-selected="${m==="TW"}">${T(a("socialTwTab"))}</button>
      </div>
      ${r}
      ${o}
    </div>
  `,e.querySelectorAll("[data-market-panel]").forEach(d=>{const h=d.getAttribute("data-market-panel")===m;d.hidden=!h});const g=e.querySelectorAll(".ss-mkt-tab");g.forEach(d=>{d.addEventListener("click",()=>{const h=d.getAttribute("data-market");g.forEach(y=>{const b=y===d;y.classList.toggle("active",b),y.setAttribute("aria-selected",b?"true":"false")}),e.querySelectorAll("[data-market-panel]").forEach(y=>{y.hidden=y.getAttribute("data-market-panel")!==h})})})}async function Wt(t="#ss-social-digest",e){const s=document.querySelector(t);if(!s)return{ok:!1};try{const r=await je(e);return Ot(r,s),{ok:!0,data:r}}catch(r){return s.innerHTML=`<p class="ss-digest-blocker">${T(a("socialLoadFail",{msg:r.message}))}</p>`,{ok:!1,error:r}}}const Fe="./data/strategy-screener.json";function jt(t){const s={技術:"價量",綜合:"精選"}[t]||t;return a(`cat${s}`,s)}function Ft(t){try{return new Date(t).toLocaleString(U(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+a("taipei")}catch{return t||"—"}}function p(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(U(),{minimumFractionDigits:e,maximumFractionDigits:e})}function V(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function G(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(2)}%`}function Ht(t){const e={技術:"價量",綜合:"精選"},s=t.categoryGroup||t.category||"精選";return e[s]||s}function _t(t){let e=i(t);return e=e.replace(/本益比/g,()=>c("pe",e("pe"))),e=e.replace(/營益率/g,()=>c("opMargin",e("opMargin"))),e=e.replace(/毛利率/g,()=>c("grossMargin",e("grossMargin"))),e=e.replace(/外資/g,()=>c("foreignInv",e("foreignInv"))),e=e.replace(/投信/g,()=>c("trustInv",e("trustInv"))),e=e.replace(/自營商/g,()=>c("dealerInv",e("dealerInv"))),e=e.replace(/均線多頭/g,()=>c("maBull",e("maBull"))),e=e.replace(/RSI/g,()=>c("rsi",e("rsi"))),e=e.replace(/振幅/g,()=>c("amplitude",e("amplitude"))),e=e.replace(/(\d+)\s*張/g,(s,r)=>`${r}${c("zhang",e("zhang"))}`),e=e.replace(/＞\s*(\d+)\s*張/g,(s,r)=>`＞ ${r}${c("zhang",e("zhang"))}`),e}function Vt(t){return t==="skip"?`<span class="xq-cond-st skip">${i(a("condSkip"))}</span>`:t==="fail"?`<span class="xq-cond-st fail">${i(a("condFail"))}</span>`:`<span class="xq-cond-st pass">${i(a("condPass"))}</span>`}function Gt(t){switch(t){case"ma-bull":return[{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>G(e.dayPct),cls:e=>V(e.dayPct)},{key:"sma5",label:"SMA5",fmt:e=>p(e.sma5)},{key:"sma10",label:"SMA10",fmt:e=>p(e.sma10)},{key:"sma20",label:"SMA20",fmt:e=>p(e.sma20)},{key:"sma60",label:"SMA60",fmt:e=>p(e.sma60)},{key:"volRatioYday",label:a("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?p(e.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:a("metricVolToday"),fmt:e=>e.volTodayZhang!=null?p(e.volTodayZhang,1):e.volToday!=null?p(e.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:c("pe",a("pe")),fmt:e=>p(e.pe,2),rawLabel:!0},{key:"revGrowth2yAvgPct",label:"2年營收成長均%",fmt:e=>e.revGrowth2yAvgPct!=null?p(e.revGrowth2yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?p(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?p(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?p(e.avgVol5Zhang,1):"—"},{key:"dayPct",label:a("metricDayPct"),fmt:e=>G(e.dayPct),cls:e=>V(e.dayPct)}];case"inst-sync":return[{key:"foreignNet1dZhang",label:a("foreign1d"),fmt:e=>p(e.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:a("trust1d"),fmt:e=>p(e.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:a("dealer1d"),fmt:e=>p(e.dealerNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:a("foreign5d"),fmt:e=>p(e.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:a("trust5d"),fmt:e=>p(e.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:a("dealer5d"),fmt:e=>p(e.dealerNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>G(e.dayPct),cls:e=>V(e.dayPct)},{key:"rsi",label:c("rsi",a("rsi")),fmt:e=>p(e.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:e=>p(e.rsiPrev,2)},{key:"ampPct",label:c("amplitude",a("amplitude")),fmt:e=>e.ampPct!=null?p(e.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?p(e.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:e=>p(e.pb,2)},{key:"directorHoldPct",label:a("metricDirector"),fmt:e=>e.directorHoldPct!=null?p(e.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?p(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>p(e.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:c("pe",a("pe")),fmt:e=>p(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?p(e.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?p(e.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:e=>Array.isArray(e.revGrowth3y)?e.revGrowth3y.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>p(e.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:e=>e.revGrowth5yAvgPct!=null?p(e.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?p(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?p(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>p(e.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?p(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:a("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?p(e.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:e=>Array.isArray(e.opMargin3y)?e.opMargin3y.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:e=>e.revGrowth3yAvgPct!=null?p(e.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)}];case"benjamin-graham":return[{key:"pe",label:c("pe",a("pe")),fmt:e=>p(e.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:e=>p(e.pb,2)},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?p(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>p(e.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?p(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:a("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?p(e.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?p(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>p(e.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:c("pe",a("pe")),fmt:e=>p(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?p(e.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:e=>e.roeGrowthPct!=null?p(e.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:e=>e.epsGrowthStreak!=null?String(e.epsGrowthStreak):"—"},{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>p(e.avgVol5Zhang,1)}];case"margin-up":return[{key:"yoyPairs",label:"YoY配對",fmt:e=>Array.isArray(e.yoyPairs)?e.yoyPairs.join("；"):"—"},{key:"yoyOmPct",label:"YoY營益成長%",fmt:e=>Array.isArray(e.yoyOmPct)?e.yoyOmPct.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"yoyGmPct",label:"YoY毛利成長%",fmt:e=>Array.isArray(e.yoyGmPct)?e.yoyGmPct.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"opMargins",label:c("opMargin",a("opMargin")),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.slice(-4).map(s=>s!=null?s+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:a("metricSource"),fmt:e=>e.source||"—"}];case"kostolany-cycle":return[{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>G(e.dayPct),cls:e=>V(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>G(e.pct5d),cls:e=>V(e.pct5d)},{key:"pct1m",label:"1月%",fmt:e=>G(e.pct1m),cls:e=>V(e.pct1m)},{key:"volRatio",label:a("volRatio"),fmt:e=>e.volRatio!=null?p(e.volRatio)+"×":"—"},{key:"psychologyPhase",label:a("psychologyPhase"),fmt:e=>e.psychologyPhase||"—"},{key:"cycleStance",label:a("cycleStance"),fmt:e=>e.cycleStance||"—"},{key:"liquidityBias",label:a("liquidityBias"),fmt:e=>e.liquidityBias||"—"},{key:"tags",label:a("regimeTags"),fmt:e=>e.tags||"—"},{key:"sizeMult",label:a("sizeMult"),fmt:e=>e.sizeMult!=null?p(e.sizeMult,2)+"×":"—"}];default:return[{key:"price",label:a("metricPrice"),fmt:e=>p(e.price)}]}}function Xt(t){const e=t.calibrationNotes;if(!e||typeof e!="object")return"";const s=Array.isArray(e.matchedXq)?e.matchedXq.map(l=>i(l)).join(" · "):"",r=Array.isArray(e.stillDiffers)?e.stillDiffers.map(l=>i(l)).join(" · "):"",o=e.unitsNote||e.units||"",n=[];return s&&n.push(`<span class="xq-cal-m">對齊 XQ：${s}</span>`),r&&n.push(`<span class="xq-cal-d">仍差異：${r}</span>`),o&&n.push(`<span class="xq-cal-u">${i(String(o))}</span>`),n.length?`<p class="xq-calibration" title="${a("calibTitle")}">${n.join("<br/>")}</p>`:""}function Zt(t){return`<ol class="xq-cond-list">${(t.conditions||[]).map((s,r)=>{const o=s.status||"pass";return`<li class="xq-cond ${o}">
        <span class="xq-cond-num">${r+1}</span>
        <span class="xq-cond-text">${_t(s.text)}</span>
        ${Vt(o)}
      </li>`}).join("")}</ol>`}function He(t,e){return!e||e==="ALL"?t||[]:(t||[]).filter(s=>{const r=String(s.market||"").toUpperCase();if(r===e)return!0;const o=String(s.ticker||"").toUpperCase().endsWith(".TW");return r?!1:e==="TW"?o:!o})}function Kt(t,e="TW"){const s=t.hits||[],r=He(s,e),o=a(e==="US"?"usStock":"twStock");if(t.incomplete&&!s.length){const d=i(t.incompleteLabel||a("dataInsufficient")),h=(t.blockers||[]).map(y=>`<li>${i(y)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${d}</div>
      <ul>${h}</ul>
    </div>`}if(!r.length)return`<div class="xq-empty"><p>${i(o)} · ${i(a("noHits"))}</p></div>`;const n=Gt(t.id),l=n.map(d=>`<th>${d.rawLabel?d.label:i(d.label)}</th>`).join(""),m=r.map(d=>{const h=d.metrics||{},y=n.map(b=>`<td class="num ${b.cls?b.cls(h):""}">${b.fmt(h)}</td>`).join("");return`<tr>
        <td><span class="ticker">${i(d.ticker)}</span></td>
        <td class="name-cell">${i(d.name||"")}${d.ohlcvBarDate?`<div class="xq-bar-date">K ${i(d.ohlcvBarDate)}</div>`:""}</td>
        ${y}
      </tr>`}).join(""),g=r.map(d=>{const h=d.metrics||{},y=n.map(b=>{const S=b.cls?b.cls(h):"";return`<div class="xq-m"><span class="xq-ml">${b.rawLabel?b.label:i(b.label)}</span><span class="xq-mv ${S}">${b.fmt(h)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${i(d.ticker)}</div>
            <div class="name">${i(d.name||"")}</div>
            ${d.ohlcvBarDate?`<div class="xq-bar-date">K棒 ${i(d.ohlcvBarDate)}</div>`:""}
          </div>
          <span class="badge market">${i(d.market||e)}</span>
        </div>
        <div class="xq-hit-metrics">${y}</div>
      </article>`}).join("");return`
    <div class="xq-market-block" data-market="${i(e)}">
      <h5 class="xq-market-title">${o}（${r.length}）</h5>
      <div class="table-wrap xq-table-wrap">
        <table class="stock-table xq-table">
          <thead><tr><th>代碼</th><th>名稱</th>${l}</tr></thead>
          <tbody>${m}</tbody>
        </table>
      </div>
      <div class="xq-mobile-cards">${g}</div>
    </div>`}function qe(t,e,s="TW"){var d,h,y,b;const r=t.hits||[],n=He(r,s).length,l=(t.unchecked||[]).map(S=>`<li class="xq-unchecked">${i(S)}</li>`).join(""),m=(t.notes||[]).map(S=>`<li>${i(S)}</li>`).join(""),g=!t.incomplete&&(t.blockers||[]).length?`<ul class="xq-blockers">${(t.blockers||[]).map(S=>`<li>${i(S)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${i(t.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${i(t.name)}</h3>
          <div class="xq-tags">
            ${(t.xqTags||[t.category]).map(S=>`<span class="xq-tag">${i(S)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="${a("hitTitle")}">
          <span class="xq-hit-num">${n}</span>
          <span class="xq-hit-label">${i(a("hitCount"))}</span>
        </div>
      </div>
      ${t.description?`<details class="fold-block"><summary>${i(a("strategyDetails"))}</summary><p class="xq-desc fold-p">${i(t.description)}</p></details>`:""}
      <div class="xq-meta-row">
        <span>${i(a("sessionTwse"))} ${i(e.sessionDate||"—")}</span>
        <span>${i(a("ohlcvBar"))} ${i(((d=t.ohlcvBarDates)==null?void 0:d[0])||e.ohlcvBarDate||"—")}</span>
        <span>${i(a("generated"))} ${Ft(e.asOf)}</span>
        <span>${i(a("universeTw"))} ${((h=e.universe)==null?void 0:h.tw)??"—"}</span>
        <span>${i(a("universeUs"))} ${((y=e.universe)==null?void 0:y.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">${i(a("conditions"))}</h4>
      ${Zt(t)}
      ${Xt(t)}
      ${(b=t.incompleteFilters)!=null&&b.length?`<p class="xq-incomplete-filters">${i(a("incompleteFilters"))}${i(t.incompleteFilters.join("、"))}</p>`:""}
      ${l?`<ul class="xq-unchecked-list">${l}</ul>`:""}
      ${t.regimeSnapshot?`<div class="xq-regime-box" role="status">
        <div class="xq-regime-title">${i(a("regimeToday"))}</div>
        <div class="xq-regime-grid">
          ${["us","tw"].map(S=>{const v=t.regimeSnapshot[S];if(!v)return"";const $=v.psychologyPhase||a("dataInsufficient"),u=v.cycleStance||a("dataInsufficient"),f=v.liquidityBias||a("dataInsufficient"),k=Array.isArray(v.dataGaps)&&v.dataGaps.length?`<div class="xq-regime-gaps">${i(a("dataGaps"))}：${i(v.dataGaps.join(", "))}</div>`:"";return`<div class="xq-regime-card">
                <div class="xq-regime-mkt">${i(S.toUpperCase())}</div>
                <div>${i(a("psychologyPhase"))}：<strong>${i($)}</strong></div>
                <div>${i(a("cycleStance"))}：<strong>${i(u)}</strong></div>
                <div>${i(a("liquidityBias"))}：<strong>${i(f)}</strong></div>
                <div>${i(a("temperatureScore"))}：${i(v.temperatureScore==null?a("dataInsufficient"):String(v.temperatureScore))}</div>
                ${k}
              </div>`}).join("")}
        </div>
      </div>`:""}
      ${m?`<ul class="xq-notes">${m}</ul>`:""}
      ${g}
      <div class="xq-toolbar">
        <h4 class="xq-sub">${i(a("results"))}</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>${i(a("copyJson"))}</button>
          <button type="button" class="xq-btn" data-xq-csv>${i(a("exportCsv"))}</button>
          <a class="xq-btn xq-btn-link" href="${Fe}" download="strategy-screener.json">${i(a("exportJson"))}</a>
        </div>
      </div>
      ${t.twOnly||["inst-sync","margin-up","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short"].includes(t.id)?`<div class="xq-market-tabs"><span class="xq-mkt-hint">${i(a("twOnlyHint"))}</span></div>`:`<div class="xq-market-tabs" role="tablist" aria-label="${i(a("hitMarket"))}">
        <button type="button" class="xq-mkt-btn${s==="TW"?" active":""}" data-xq-market="TW" aria-pressed="${s==="TW"}">${i(a("twStock"))}</button>
        <button type="button" class="xq-mkt-btn${s==="US"?" active":""}" data-xq-market="US" aria-pressed="${s==="US"}">${i(a("usStock"))}</button>
      </div>`}
      ${Kt(t,["inst-sync","margin-up","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short"].includes(t.id)?"TW":s)}
    </div>
  `}function Jt(t=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${c("strategyScreen",a("strategyScreen"))}</h2>
      <p class="view-lead-tight">${i(a("strategyLead"))}</p>
      <div id="xq-root" class="xq-root" aria-label="${i(a("strategyScreen"))}">
        ${t?`<p class="xq-loading">${i(a("strategyLoading"))}</p>`:""}
      </div>
    </section>
  `}async function Yt(t=Fe){const e=await fetch(t,{cache:"no-cache"});if(!e.ok)throw new Error(`strategy-screener ${e.status}`);return e.json()}function Qt(t,e){var S;const s=typeof t=="string"?document.querySelector(t):t;if(!s||!((S=e==null?void 0:e.strategies)!=null&&S.length)){s&&(s.innerHTML=`<div class="xq-empty"><p>${i(a("strategyEmpty"))}</p></div>`);return}const r=e.categoryOrder||["精選","價量","籌碼","財務","週期","大師"],o=new Map(r.map(v=>[v,[]]));for(const v of e.strategies){const $=Ht(v);o.has($)||o.set($,[]),o.get($).push(v)}const n=e.strategies[0];let l="TW";const m=r.map(v=>{const $=o.get(v)||[];return $.length?`<div class="xq-cat-block">
        <div class="xq-cat-label">${i(jt(v))}</div>
        <div class="xq-chip-row">
          ${$.map(u=>{const f=(u.hits||[]).length,k=u.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${u.id===n.id?" active":""}${k}" data-xq-id="${i(u.id)}" aria-pressed="${u.id===n.id}">
                <span class="xq-chip-name">${i(u.name)}</span>
                <span class="xq-chip-n">${u.incomplete?i(a("incomplete")):i(a("hitsTotal",{n:f}))}</span>
              </button>`}).join("")}
        </div>
      </div>`:""}).join(""),g=e.strategies.map(v=>{const $=(v.hits||[]).length,u=v.id===n.id?" active":"",f=v.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${u}${f}" data-xq-id="${i(v.id)}">
        <span>${i(v.name)}</span>
        <span class="xq-side-n">${v.incomplete?i(a("incomplete")):i(a("hitsTotal",{n:$}))}</span>
      </button>`}).join("");s.innerHTML=`
    <div class="xq-layout">
      <aside class="xq-sidebar" aria-label="${i(a("strategyList"))}">
        <div class="xq-side-title">${i(a("navStrategies"))}</div>
        ${g}
      </aside>
      <div class="xq-main">
        <div class="xq-chips" aria-label="${i(a("strategyCat"))}">${m}</div>
        <div class="xq-panel-host">${qe(n,e,l)}</div>
      </div>
    </div>
    <p class="xq-foot">${i((e.disclaimer||"").split("。")[0]+(e.disclaimer?"。":""))}</p>
  `;const d=s.querySelector(".xq-panel-host");let h=n.id;const y=()=>{aa(d,e),d==null||d.querySelectorAll("[data-xq-market]").forEach(v=>{v.addEventListener("click",()=>{l=v.getAttribute("data-xq-market")||"TW",b(h)})})},b=v=>{const $=e.strategies.find(u=>u.id===v);!$||!d||(h=v,d.innerHTML=qe($,e,l),s.querySelectorAll("[data-xq-id]").forEach(u=>{const f=u.getAttribute("data-xq-id")===v;u.classList.toggle("active",f),u.tagName==="BUTTON"&&u.setAttribute("aria-pressed",f?"true":"false")}),y())};s.querySelectorAll("[data-xq-id]").forEach(v=>{v.addEventListener("click",()=>b(v.getAttribute("data-xq-id")))}),y()}function ea(t){const e=t.hits||[];if(!e.length)return"";const s=[...new Set(e.flatMap(l=>Object.keys(l.metrics||{})))],r=["ticker","name","market","ohlcvBarDate",...s],o=l=>{const m=l==null?"":String(l);return/[",\n]/.test(m)?`"${m.replace(/"/g,'""')}"`:m},n=e.map(l=>{const m=l.metrics||{};return[l.ticker,l.name,l.market,l.ohlcvBarDate||"",...s.map(g=>m[g])].map(o).join(",")});return[r.join(","),...n].join(`
`)}function ta(t,e,s){const r=new Blob([e],{type:s}),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=t,o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),2e3)}function aa(t,e){var s,r;(s=t==null?void 0:t.querySelector("[data-xq-copy]"))==null||s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(e,null,2));const o=t.querySelector("[data-xq-copy]");if(o){const n=o.textContent;o.textContent=a("copied"),setTimeout(()=>o.textContent=n,1200)}}catch{}}),(r=t==null?void 0:t.querySelector("[data-xq-csv]"))==null||r.addEventListener("click",()=>{var m;const o=(m=t.querySelector(".xq-panel"))==null?void 0:m.getAttribute("data-strategy-id"),n=e.strategies.find(g=>g.id===o);if(!n)return;const l=ea(n);if(!l){alert(a("noHitsExport"));return}ta(`${n.id}-hits.csv`,"\uFEFF"+l,"text/csv;charset=utf-8")})}async function sa(t="#xq-root"){try{const e=await Yt();return Qt(t,e),{ok:!0,data:e}}catch(e){const s=document.querySelector(t);return s&&(s.innerHTML=`<div class="xq-empty"><p>${i(a("strategyLoadError",{msg:e.message}))}</p></div>`),{ok:!1,error:e}}}const _e={defensive:.5,selective:.8,balanced:1,constructive:1.1,aggressive:1.35,stabilize_first:.3},ia={euphoric:"defensive",late_optimism:"selective",mid_cycle:"balanced",cautious_recovery:"constructive",despondent:"aggressive",panic:"stabilize_first"};function Ve(t){return t==null||Number.isNaN(t)?"—":`${Number(t).toFixed(2)}×`}function ra(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${Number(t).toFixed(2)}`}function ie(t,e){return`<span class="logic-field"><span class="k">${i(t)}</span><span class="v">${i(String(e??"—"))}</span></span>`}function oa(t){if(!t||!t.us&&!t.tw)return`<p class="logic-muted">${i(a("logicNoRegime"))}</p>`;const e=(s,r)=>{if(!r)return"";const o=r.incomplete?" incomplete":"",n=r.psychologyPhase||a("dataInsufficient"),l=r.cycleStance||a("dataInsufficient"),m=r.liquidityBias||a("dataInsufficient"),g=ra(r.temperatureScore),d=Ve(r.sizeMult??_e[l]),h=Array.isArray(r.dataGaps)&&r.dataGaps.length?`<div class="regime-gaps">${i(a("dataGaps"))}: ${i(r.dataGaps.slice(0,5).join(", "))}${r.dataGaps.length>5?"…":""}</div>`:"",y=Array.isArray(r.implications)&&r.implications.length?`<ul class="logic-impl">${r.implications.slice(0,3).map(b=>`<li>${i(b)}</li>`).join("")}</ul>`:"";return`<div class="regime-chip logic-regime-chip${o}">
      <div class="label">${i(s)} · ${i(a("marketRegime"))}</div>
      <div class="value">${i(l)}</div>
      <div class="logic-chip-meta">
        ${ie(a("psychologyPhase"),n)}
        ${ie(a("liquidityBias"),m)}
        ${ie(a("temperatureScore"),g)}
        ${ie(a("sizeMult"),d)}
      </div>
      ${y}
      ${h}
    </div>`};return`<div class="regime-strip logic-regime-live" aria-label="${i(a("regimeToday"))}">
    ${e("US",t.us)}
    ${e("TW",t.tw)}
  </div>`}function X(t,e,s){return`<section class="logic-step" id="logic-step-${t}">
    <header class="logic-step-head">
      <span class="logic-step-num" aria-hidden="true">${t}</span>
      <h3 class="logic-step-title">${i(e)}</h3>
    </header>
    <div class="logic-step-body">${s}</div>
  </section>`}function na(t){return`<div class="logic-table-wrap"><table class="logic-table">
    <tbody>
      ${t.map(([e,s])=>`<tr><th scope="row">${i(e)}</th><td>${s}</td></tr>`).join("")}
    </tbody>
  </table></div>`}function W(t){return`<ul class="logic-bullets">${t.map(e=>`<li>${e}</li>`).join("")}</ul>`}function la(t){const e=t==null?void 0:t.marketRegime,s=Object.entries(ia).map(([y,b])=>[y,`<code>${i(b)}</code> · ${Ve(_e[b])}`]),r=W([i(a("logicScreenABalanced")),i(a("logicScreenASelective")),i(a("logicScreenADefensive")),i(a("logicScreenAAggressive")),i(a("logicScreenAStabilize"))]),o=W([i(a("logicScreenBVol")),i(a("logicScreenBMom"))]),n=W([i(a("logicScoreFormula")),i(a("logicScoreSma")),i(a("logicScoreVol"))]),l=W([i(a("logicDemoteHot")),i(a("logicDemoteThin")),i(a("logicPromoteFirm")),i(a("logicDemotePanic"))]),m=W([i(a("logicWhyRs")),i(a("logicWhyMom")),i(a("logicWhyVol")),i(a("logicWhySma")),i(a("logicWhyRegime"))]),g=`
    <p class="logic-lead">${i(a("logicXqLead"))}</p>
    ${W([i(a("logicXqPriceVol")),i(a("logicXqFlow")),i(a("logicXqFund")),i(a("logicXqMasters")),i(a("logicXqCycle"))])}
    <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="strategies">${i(a("logicOpenStrategies"))}</button></p>
  `,d=W([i(a("logicPaperCapital")),i(a("logicPaperBuy")),i(a("logicPaperSizeMult")),i(a("logicPaperSell"))]),h=W([i(a("logicRatesR2")),i(a("logicRatesR3")),i(a("logicRatesSeparate"))]);return`
    <header class="view-header">
      <h2 class="view-title">${i(a("logicTitle"))}</h2>
      <p class="logic-subtitle">${i(a("logicSubtitle"))}</p>
    </header>

    <section class="logic-live section" aria-labelledby="logic-live-h">
      <h3 id="logic-live-h" class="section-title">${i(a("regimeToday"))}</h3>
      ${oa(e)}
    </section>

    <div class="logic-pipeline">
      ${X(1,a("logicStep1"),`
        <p class="logic-lead">${i(a("logicStep1Lead"))}</p>
        ${na(s)}
        <p class="logic-caption">${i(a("logicStep1Caption"))}</p>
        ${h}
      `)}

      ${X(2,a("logicStep2"),`
        <p class="logic-lead">${i(a("logicStep2Lead"))}</p>
        <h4 class="logic-h4">${i(a("logicScreenA"))}</h4>
        ${r}
        <h4 class="logic-h4">${i(a("logicScreenB"))}</h4>
        ${o}
        <h4 class="logic-h4">${i(a("logicScore"))}</h4>
        ${n}
      `)}

      ${X(3,a("logicStep3"),g)}

      ${X(4,a("logicStep4"),`
        <p class="logic-lead">${i(a("logicStep4Lead"))}</p>
        ${l}
        <p class="logic-caption">${i(a("logicListSize"))}</p>
      `)}

      ${X(5,a("logicStep5"),`
        <p class="logic-lead">${i(a("logicStep5Lead"))}</p>
        ${m}
      `)}

      ${X(6,a("logicStep6"),`
        <p class="logic-lead">${i(a("logicStep6Lead"))}</p>
        ${d}
        <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="paper">${i(a("logicOpenPaper"))}</button></p>
      `)}
    </div>

    <p class="logic-footnote" role="note">${i(a("logicFootnote"))}</p>
  `}const ca="./data/latest.json";function C(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function x(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function E(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(U(),{minimumFractionDigits:e,maximumFractionDigits:e})}function ae(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${E(t,s)}`}function da(t){try{return new Date(t).toLocaleString(U(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+a("taipei")}catch{return t}}function Se(t){const e=t.aboveSma20?`<span class="badge sma-on">${c("sma20","SMA20")}↑</span>`:`<span class="badge sma-off">${c("sma20","SMA20")}↓</span>`,s=t.aboveSma50?`<span class="badge sma-on">${c("sma50","SMA50")}↑</span>`:`<span class="badge sma-off">${c("sma50","SMA50")}↓</span>`;return e+s}function $e(t){return t!=null&&t.length?t.map(e=>{const s=String(e);return s==="A"?`<span class="badge screen">${c("screenA","A")}</span>`:s==="B"?`<span class="badge screen">${c("screenB","B")}</span>`:s==="C"?`<span class="badge screen">${c("screenC","C")}</span>`:s==="observe"?`<span class="badge screen">${i(a("observe"))}</span>`:`<span class="badge screen">${i(s)}</span>`}).join(""):""}function pa(t){if(!t||!t.us&&!t.tw)return"";const e=(s,r)=>{if(!r)return"";const o=r.psychologyPhase||a("dataInsufficient"),n=r.cycleStance||a("dataInsufficient"),l=r.liquidityBias||a("dataInsufficient"),m=Array.isArray(r.dataGaps)&&r.dataGaps.length?`<div class="regime-gaps">${i(a("dataGaps"))}：${i(r.dataGaps.slice(0,4).join(", "))}${r.dataGaps.length>4?"…":""}</div>`:"";return`<div class="regime-chip${r.incomplete?" incomplete":""}">
      <div class="label">${i(s)} · ${i(a("marketRegime"))}</div>
      <div class="value">${i(n)}</div>
      <div class="pct flat" style="font-size:0.72rem;line-height:1.35">
        ${i(a("psychologyPhase"))} ${i(o)}
        · ${i(a("liquidityBias"))} ${i(l)}
      </div>
      ${m}
    </div>`};return`<div class="regime-strip" aria-label="${i(a("marketRegime"))}">
    ${e("US",t.us)}
    ${e("TW",t.tw)}
  </div>`}function ua(t){var r,o,n,l,m;const e=[],s=(g,d,h)=>{if(!h)return;const y=h.incomplete,b=h.value!=null?E(h.value,2):y?i(a("dataIncomplete")):"—",S=h.dayPct!=null?`<div class="pct ${C(h.dayPct)}">${x(h.dayPct)}</div>`:"",v=h.session==="intraday"?` · ${c("intraday",a("intraday"))}`:"";e.push(`
      <div class="index-chip ${y?"incomplete":""}">
        <div class="label">${d}${v}</div>
        <div class="value">${b}</div>
        ${S}
      </div>
    `)};if(s("tw",c("taiex",((r=t.tw)==null?void 0:r.name)||a("taiex")),t.tw),s("otc",c("otc",((o=t.otc)==null?void 0:o.name)||a("otc")),t.otc),s("spx",c("spx",((n=t.spx)==null?void 0:n.name)||a("spx")),t.spx),s("nasdaq",c("nasdaq",((l=t.nasdaq)==null?void 0:l.name)||a("nasdaq")),t.nasdaq),s("sox",c("sox",((m=t.sox)==null?void 0:m.name)||a("sox")),t.sox),t.usdTwd){const g=t.usdTwd,d=g.taipeiClose??g.yahoo;e.push(`
      <div class="index-chip">
        <div class="label">${c("usdtwd",a("usdtwd"))}</div>
        <div class="value">${E(d,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          ${i(a("taipeiClose"))} ${g.taipeiClose!=null?E(g.taipeiClose,3):"—"}
          · Yahoo ${g.yahoo!=null?E(g.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${e.join("")}</div>`}function ma(t,e){const s=t.market==="TW"?c("twStock",a("twStock")):t.market==="US"?c("usStock",a("usStock")):i(t.market||""),r=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${c("rs","RS")}</div><div class="m-val ${C(t.rsVsIndexPp)}">${x(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">${c("priorClose",a("priorCloseFull"))}</div><div class="m-val ${C(t.priorClosePct)}">${x(t.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${c("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${e}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${i(t.ticker)}</div>
          <div class="name">${i(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${ae(t.price,t.currency)}</div>
          <div class="day-pct ${C(t.dayPct)}">${x(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${s}</span>
        ${$e(t.screens)}
        ${Se(t)}
      </div>
      <div class="metrics">
        ${r}
        <div class="metric"><div class="m-label">${c("pct5d",a("pct5d"))}</div><div class="m-val ${C(t.pct5d)}">${x(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${c("pct1m",a("pct1m"))}</div><div class="m-val ${C(t.pct1m)}">${x(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${c("volRatio",a("volRatio"))}</div><div class="m-val">${t.volRatio!=null?E(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business||t.why||t.risk?`<details class="fold-block card-fold"><summary>${i(a("details"))}</summary>
        ${t.business?`<p class="card-text"><strong>${i(a("business"))}</strong>　${i(t.business)}</p>`:""}
        ${t.why?`<p class="card-text"><strong>${i(a("reason"))}</strong>　${i(t.why)}</p>`:""}
        ${t.risk?`<p class="card-text risk"><strong>${i(a("risk"))}</strong>　${Ge(t.risk)}</p>`:""}
      </details>`:""}
      <div data-ticker-comments="${i(t.ticker)}" data-market="${i(t.market==="TW"||String(t.ticker).endsWith(".TW")?"TW":"US")}"></div>
    </article>
  `}function Ge(t){let e=i(t);return e=e.replace(/漲停/g,c("limitUp",a("limitUp"))),e=e.replace(/動能/g,c("momentum",a("momentum"))),e}function xe(t){return t.map(e=>{const s=e.rsVsIndexPp??e.priorClosePct,r=e.rsVsIndexPp!=null?x(e.rsVsIndexPp):e.priorClosePct!=null?x(e.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${i(e.ticker)}</span></td>
        <td class="name-cell">${i(e.name||"")}</td>
        <td class="num">${ae(e.price,e.currency)}</td>
        <td class="num ${C(e.dayPct)}">${x(e.dayPct)}</td>
        <td class="num ${C(s)}">${r}</td>
        <td class="num ${C(e.pct5d)}">${x(e.pct5d)}</td>
        <td class="num ${C(e.pct1m)}">${x(e.pct1m)}</td>
        <td class="num">${e.volRatio!=null?E(e.volRatio,2)+"×":"—"}</td>
        <td>${Se(e)}</td>
        <td>${$e(e.screens)}</td>
        <td class="why-cell">${i(e.why||"")}</td>
      </tr>`}).join("")}function Ce(t){return t.map(e=>{const s=e.rsVsIndexPp!=null?`<span class="${C(e.rsVsIndexPp)}">${c("rs","RS")} ${x(e.rsVsIndexPp)}</span>`:e.priorClosePct!=null?`<span class="${C(e.priorClosePct)}">${c("priorClose",a("priorClose"))} ${x(e.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${i(e.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${i(e.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${ae(e.price,e.currency)}</div>
            <div class="${C(e.dayPct)}" style="font-family:var(--mono);font-weight:600">${x(e.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${s}
          <span class="${C(e.pct5d)}">${c("pct5d","5d")} ${x(e.pct5d)}</span>
          <span class="${C(e.pct1m)}">${c("pct1m","1m")} ${x(e.pct1m)}</span>
          <span>${c("volRatio",a("volRatio"))} ${e.volRatio!=null?E(e.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${Se(e)}${$e(e.screens)}</div>
        ${e.why?`<p class="lc-why">${i(e.why)}</p>`:""}
        ${e.risk&&e.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">${i(a("risk"))}：${Ge(e.risk)}</p>`:""}
        <div data-ticker-comments="${i(e.ticker)}" data-market="${i(String(e.ticker).endsWith(".TW")||e.market==="TW"?"TW":"US")}"></div>
      </div>`}).join("")}function ga(){return`
    <tr>
      <th>${c("ticker",a("ticker"))}</th>
      <th>${i(a("name"))}</th>
      <th>${i(a("price"))}</th>
      <th>${c("dayPct",a("dayPct"))}</th>
      <th>${c("rs","RS")}／${c("priorClose",a("priorClose"))}</th>
      <th>${c("pct5d",a("pct5d"))}</th>
      <th>${c("pct1m",a("pct1m"))}</th>
      <th>${c("volRatio",a("volRatio"))}</th>
      <th>${i(a("ma"))}</th>
      <th>${c("screening",a("screening"))}</th>
      <th>${i(a("reason"))}</th>
    </tr>`}function ha(t){if(!t)return"";const e=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${c("adr","ADR")} ${c("parity",a("parity"))}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${c("usStock",a("usStock"))} ${c("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${ae(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${c("adsRatio",a("adsRatio"))}</span>　<strong>${i(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>${c("parity",a("implied"))}</span>　<strong>${t.impliedUsdTaipeiFx!=null?E(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${c("premium",a("premium"))}</span>　<strong class="${C(e)}">${x(e)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${c("twStock",a("twStock"))}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${ae(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${i(t.note)}</p>`:""}
      </div>
    </section>
  `}function va(){return'<div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>'}function fe(t){return t?t.market==="TW"||t.market==="US"?t.market:String(t.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function Re(t,e){const s=new Set,r=[],o=n=>{if(!(n!=null&&n.ticker)||s.has(n.ticker))return;const l=fe(n);e&&l!==e||(s.add(n.ticker),r.push({ticker:n.ticker,market:l,name:n.name||""}))};return(t.top5||[]).forEach(o),(!e||e==="TW")&&(t.tw||[]).forEach(o),(!e||e==="US")&&(t.us||[]).forEach(o),r}function fa(t){return t==="TW"?"__TW__":"__US__"}function Ne(t,e){return t.length?`<div class="top5-grid">${t.map((s,r)=>ma(s,r+1)).join("")}</div>`:`<div class="empty-state">${i(a("emptyTop",{market:e}))}</div>`}function ya(t){const e=Re(t,"US"),s=Re(t,"TW"),r=(o,n)=>o.map((l,m)=>`<button type="button" class="chat-chip${m===0?" active":""}" data-ticker="${i(l.ticker)}" data-market="${n}">${i(l.ticker)}</button>`).join("");return`
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
  `}function ba(){return[{id:"today",label:a("navToday"),hash:"today"},{id:"logic",label:a("navLogic"),hash:"logic"},{id:"strategies",label:a("navStrategies"),hash:"strategies"},{id:"paper",label:a("navPaper"),hash:"paper"},{id:"social",label:a("navSocial"),hash:"social"}]}const Xe={today:"today",logic:"logic",strategies:"strategies",paper:"paper",social:"social",help:"logic",glossary:"logic",danmaku:"social","social-digest":"social",giscus:"social",method:"logic",邏輯:"logic"},Sa={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',logic:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 2h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v5h-2v-5z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',social:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.5 3.1 6L5 21l4.3-1.4c.9.3 1.8.4 2.7.4 5 0 9-3.6 9-8s-4-8-9-8zm-1 5h2v5h-2V8zm0 6h2v2h-2v-2z"/></svg>'};function ye(){const t=(location.hash||"").replace(/^#/,"").split(/[/?]/)[0].toLowerCase();return Xe[t]||"today"}function Ue(t){return ba().map(e=>{const s=Sa[e.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${e.id}"
        data-variant="${t}"
        aria-label="${i(e.label)}"
        aria-current="false">
        <span class="nav-icon">${s}</span>
        <span class="nav-label">${i(e.label)}</span>
      </button>`}).join("")}function $a(t,e){const s=t.top5||[],r=t.us||[],o=t.tw||[],n=i(a("disclaimer")),l=ga();return`
    ${va()}

    <header class="site-chrome">
      <div class="chrome-row">
        <div class="chrome-brand">
          <img class="brand-mark" src="/Just-Math-and-Luck-/logo.png?v=3" width="40" height="40" alt="每日數學選股" decoding="async" />
          <div class="brand-text">
            <h1>${i(a("siteTitle"))}</h1>
            <p class="brand-meta">${i(a("dataAsOf"))} ${da(t.asOf)}</p>
          </div>
        </div>
        <div class="chrome-actions">
          ${lt()}
          <nav class="nav-desktop" aria-label="${i(a("navMain"))}">
            ${Ue("desktop")}
          </nav>
        </div>
      </div>
      <p class="disclaimer-line" role="note">${n}</p>
      <div class="market-strip-wrap" aria-label="${i(a("marketQuotes"))}">
        <span class="market-strip-label">${i(a("hot"))}</span>
        ${ua(t.indices||{})}
      </div>
    </header>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">${i(a("todayPicks"))}</h2>
        </header>
        ${pa(t.marketRegime)}
        <div class="tabs market-tabs" role="tablist" aria-label="${i(a("market"))}">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${c("usStock",a("usStock"))}（${r.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${c("twStock",a("twStock"))}（${o.length}）</button>
        </div>
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${i(a("usTop"))}</h2>
            ${Ne(s.filter(g=>fe(g)==="US"),a("usStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${i(a("usList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${l}</thead>
                <tbody>${xe(r)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${Ce(r)}</div>
          </section>
        </div>
        <div class="panel" id="panel-tw" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${i(a("twTop"))}</h2>
            ${Ne(s.filter(g=>fe(g)==="TW"),a("twStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${i(a("twList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${l}</thead>
                <tbody>${xe(o)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${Ce(o)}</div>
          </section>
        </div>
        ${ha(t.parity)}
      </div>
      <div class="view" id="view-logic" data-view="logic" hidden>
        <span id="logic" class="view-anchor" tabindex="-1"></span>
        ${la(t)}
      </div>

      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${Jt()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${ft(e)}
      </div>

      <div class="view view-social" id="view-social" data-view="social" hidden>
        <span id="social" class="view-anchor" tabindex="-1"></span>
        ${ya(t)}
      </div>
    </main>

    <nav class="nav-bottom" aria-label="${i(a("navMain"))}">
      ${Ue("mobile")}
    </nav>

    <p class="site-footer">${i(a("footer"))}</p>
  `}function ka(t,e){t.querySelectorAll(".nav-item").forEach(s=>{const r=s.dataset.nav===e;s.classList.toggle("is-active",r),s.setAttribute("aria-current",r?"page":"false")})}function Ze(t,e,{updateHash:s=!0,scrollTop:r=!0}={}){const o=Xe[e]||"today";if(t.querySelectorAll(".view").forEach(n=>{const l=n.dataset.view===o;n.hidden=!l,n.classList.toggle("is-active",l)}),ka(t,o),s){const n=`#${o}`;location.hash!==n&&history.replaceState(null,"",n)}return r&&window.scrollTo(0,0),o}let re=null;function Ta(t){const e=(s,r)=>Ze(t,s,r);return t.querySelectorAll(".nav-item").forEach(s=>{s.addEventListener("click",()=>e(s.dataset.nav))}),t.querySelectorAll("[data-jump]").forEach(s=>{s.addEventListener("click",()=>e(s.dataset.jump))}),re&&window.removeEventListener("hashchange",re),re=()=>e(ye(),{updateHash:!1}),window.addEventListener("hashchange",re),e(ye(),{updateHash:!0,scrollTop:!1}),{go:e}}function wa(t){const e=t.querySelectorAll(".tab-btn");e.forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.tab;e.forEach(o=>{const n=o.dataset.tab===r;o.classList.toggle("active",n),o.setAttribute("aria-selected",n?"true":"false")}),t.querySelectorAll(".panel").forEach(o=>{o.classList.toggle("active",o.id===`panel-${r}`)})})})}function Pa(t,e,{config:s,digest:r}={}){const o=t.querySelector("#chat-room");if(!o)return;const n=o.querySelector("#ss-chat-mount"),l=o.querySelector("#chat-room-title"),m=o.querySelectorAll(".chat-mkt"),g=o.querySelectorAll("[data-chat-mode]");let d=null,h="US",y="lobby";const b=u=>{l&&(l.textContent=u)},S=()=>{o.querySelectorAll(".chat-chip-row").forEach(u=>{const f=y==="ticker"&&u.getAttribute("data-chip-market")===h;u.hidden=!f})},v=()=>{if(!n)return;if(d!=null&&d.destroy&&d.destroy(),y==="lobby"){const k=fa(h),R=a(h==="TW"?"twLobby":"usLobby");b(R),d=Ae(n,k,{config:s,market:h,title:R,emptyLine:a("noMessages"),maxLen:80});return}const u=o.querySelector(`.chat-chip-row[data-chip-market="${h}"]`),f=(u==null?void 0:u.querySelector(".chat-chip.active"))||(u==null?void 0:u.querySelector(".chat-chip"));if(!f){b(a(h==="TW"?"twLobby":"usLobby")),n.innerHTML=`<div class="chat-empty-state"><p>${i(a("noTickersDiscuss"))}</p></div>`,d={destroy(){}};return}b(f.dataset.ticker),d=Ae(n,f.dataset.ticker,{config:s,market:h,title:f.dataset.ticker,emptyLine:a("noComments")})};m.forEach(u=>{u.addEventListener("click",()=>{h=u.dataset.chatMarket,o.dataset.market=h,m.forEach(k=>{const R=k===u;k.classList.toggle("active",R),k.setAttribute("aria-selected",R?"true":"false")});const f=o.querySelector(`.chat-chip-row[data-chip-market="${h}"]`);f==null||f.querySelectorAll(".chat-chip").forEach((k,R)=>k.classList.toggle("active",R===0)),S(),v()})}),g.forEach(u=>{u.addEventListener("click",()=>{y=u.dataset.chatMode,o.dataset.mode=y,g.forEach(f=>{const k=f===u;f.classList.toggle("active",k),f.setAttribute("aria-selected",k?"true":"false")}),S(),v()})}),o.querySelectorAll(".chat-chip").forEach(u=>{u.addEventListener("click",()=>{const f=u.closest(".chat-chip-row");f==null||f.querySelectorAll(".chat-chip").forEach(k=>k.classList.toggle("active",k===u)),y==="ticker"&&v()})});const $=u=>{const f=o.querySelector(".chat-menu");f&&f.open&&!f.contains(u.target)&&(f.open=!1)};return document.addEventListener("click",$),S(),v(),{destroy(){document.removeEventListener("click",$),d!=null&&d.destroy&&d.destroy()}}}let te=null,ke=null,Ke=null,me=null;async function Je(t){const e=ke,s=Ke,r=ye();t.innerHTML=$a(e,s),document.title=a("siteTitle"),Ee(),Ta(t),Ze(t,r,{updateHash:!0,scrollTop:!1}),wa(t),yt(t),ct(t),await sa("#xq-root");let o=me;const n=await Wt("#ss-social-digest",Z.socialDigestUrl);if(n!=null&&n.ok)o=n.data,me=o;else if(!o)try{o=await je(Z.socialDigestUrl),me=o}catch{o=null}te!=null&&te.destroy&&te.destroy(),te=Pa(t,e,{config:Z,digest:o}),Dt(t,{config:Z,digest:o}),Bt("#ss-giscus",{config:Z})}async function Aa(){const t=document.getElementById("app");!t||!ke||await Je(t)}async function be(){const t=document.getElementById("app");Ee();const e=document.getElementById("loading");e&&(e.textContent=a("loading"));try{const s=await fetch(ca);if(!s.ok)throw new Error(`HTTP ${s.status}`);ke=await s.json(),Ke=await bt(),await Je(t),be._langHooked||(be._langHooked=!0,it(()=>{Aa()}))}catch(s){t.innerHTML=`<div class="error">${i(a("loadError",{msg:s.message}))}</div>`}}be();
