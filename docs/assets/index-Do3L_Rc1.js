(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();const J={},ae={supabaseUrl:typeof import.meta<"u"&&(J==null?void 0:J.VITE_SUPABASE_URL)||"https://whlpzhceivahkuanmmui.supabase.co",supabaseAnonKey:typeof import.meta<"u"&&(J==null?void 0:J.VITE_SUPABASE_ANON_KEY)||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",giscus:{enabled:!0,repo:"WenZurich/Just-Math-and-Luck",repoId:"R_kgDOUcO78Q",category:"General",categoryId:"DIC_kwDOUcO78c4DFrWU",mapping:"specific",theme:"dark",lang:"zh-TW",perTicker:!1},socialDigestUrl:"./data/social-digest.json",latestUrl:"./data/latest.json",danmakuMaxLen:80,commentMaxLen:500,pollIntervalMs:8e3,postCooldownMs:4e3};globalThis.STOCK_SOCIAL_CONFIG=Object.assign(globalThis.STOCK_SOCIAL_CONFIG||{},ae);const gt=[{id:"zh-Hant",label:"繁體中文",short:"繁"},{id:"en",label:"English",short:"EN"},{id:"zh-Hans",label:"简体中文",short:"简"},{id:"ja",label:"日本語",short:"日"}],mt=gt.map(t=>t.id),ht="site-lang",Be="zh-Hant",qe=new Set;function _t(){try{const e=localStorage.getItem(ht);if(e&&mt.includes(e))return e}catch{}const t=typeof navigator<"u"&&navigator.language||"";return/^zh[-_]?(CN|Hans|SG)/i.test(t)?"zh-Hans":/^zh/i.test(t)?"zh-Hant":/^ja/i.test(t)?"ja":/^en/i.test(t)?"en":Be}let j=_t();function ke(){return j}function Ut(t){if(!mt.includes(t)||t===j)return!1;j=t;try{localStorage.setItem(ht,t)}catch{}return typeof document<"u"&&(document.documentElement.lang=t==="zh-Hant"?"zh-Hant":t==="zh-Hans"?"zh-Hans":t),qe.forEach(e=>{try{e(t)}catch{}}),!0}function Vt(t){return qe.add(t),()=>qe.delete(t)}function B(){return j==="en"?"en-US":j==="ja"?"ja-JP":j==="zh-Hans"?"zh-CN":"zh-TW"}function vt(){typeof document>"u"||(document.documentElement.lang=j==="zh-Hant"?"zh-Hant":j==="zh-Hans"?"zh-Hans":j)}const Te={siteTitle:"每日數學選股",loading:"載入中…",disclaimer:"投資涉及風險，資訊僅供參考，非投資建議",footer:"投資涉及風險，資訊僅供參考，非投資建議",dataAsOf:"資料",taipei:"（台北）",navMain:"主要導覽",navToday:"今日",navStrategies:"策略",navPaper:"模擬",navSocial:"社群",navLogic:"邏輯",researchTitle:"研究",navResearch:"研究",navOptions:"選擇權",navEarnings:"讀財報",earningsTitle:"讀財報",earningsLead:"美股 Magnificent 7 與高關注財報摘要：公司在做什麼、關鍵數字、下一步看什麼——白話、每日更新，非投資建議。",earningsDisclaimer:"非投資建議。數字來自公開 Yahoo Finance；缺欄略過不顯示，不構成個人化投資建議。",earningsUsFocus:"以美股為主",earningsTwStub:"台股財報稍後開放（規劃中）",earningsSelectionTitle:"關注名單規則：",earningsSelectionFallback:"市值最大且未來 14 日內有財報的非 Mag7 大型股；或 Yahoo 熱門成交；不足則以 45 日內行事曆亮點補齊。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——上次財報與下次日期（已知時）。",earningsMag7Badge:"Mag7",earningsHotTitle:"高關注／熱門財報",earningsHotLead:"依上方規則挑選；標籤說明為何入選。",earningsHotEmpty:"目前視窗內暫無符合條件的標的",earningsWhatItDoes:"這家公司在做什麼",earningsWhatToWatch:"下一步看什麼",earningsNextDate:"下次財報",earningsLastEps:"上次 EPS",earningsRevYoy:"營收 YoY",earningsEpsYoy:"獲利 YoY",earningsPe:"本益比",earningsForwardPe:"預估本益",earningsEstimate:"預估",earningsDataMissing:"資料不足",earningsTagPrimary:"14 日內・大型",earningsTagActives:"熱門成交・14 日內",earningsTagRecent:"近日已公布",earningsTagFallback:"45 日行事曆亮點",earningsTagOther:"關注",earningsPartialBlocker:"部分資料受阻",earningsRefreshHow:"重新整理：npm run fetch-earnings，再 build／部署。",earningsLoadError:"無法載入財報摘要（{msg}）",earningsEmpty:"尚無 Mag7 資料——請先跑 npm run fetch-earnings",navSoxl:"SOXL",soxlTitle:"SOXL 半導體槓桿",soxlLead:"Direxion 每日半導體多頭 3 倍 ETF：最新報價、異常／事件、相關新聞，以及 SEC N-PORT 持股權重與估算貢獻——白話整理，非投資建議。",soxlDisclaimer:"非投資建議。SOXL 為約 3 倍日槓桿 ETF，波動與虧損風險極高；持股權重來自 SEC N-PORT（非當日），貢獻度為估算。",soxlHeroLabel:"SOXL 最新報價",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正規收盤",soxlLeverageNote:"SOXL 目標約為 ICE Semiconductor Index 單日表現的 3 倍；隔夜與多日累積不可用簡單 3 倍推估。",soxlHoldingsAsOf:"持股權重截至",soxlHoldingsNotSameDay:"最新 N-PORT，非今日即時",soxlEventsTitle:"事件／異常",soxlNewsTitle:"相關新聞",soxlNewsEmpty:"暫無新聞（請重新 fetch）",soxlHoldingsTitle:"持股與估算貢獻",soxlHoldingsLead:"權重來自 SEC N-PORT；現金與指數交換常佔大宗。貢獻 ≈ 權重 × 報酬（標示為估算，且未直接等於 3x ETF 點數）。",soxlHoldingsEmpty:"尚無持股資料——請先跑 npm run fetch-soxl",soxlColName:"標的",soxlColWeight:"權重",soxlColReturn:"日報酬",soxlColContrib:"估算貢獻",soxlColReasons:"白話原因",soxlContributionHint:"估算＝權重% × 報酬% ÷ 100（籃子百分點；SOXL 約 3× 日槓桿，不等於 ETF 點數）",soxlSourceN:"來源 {n}",soxlOverallTitle:"為何漲／為何跌",soxlWhyUp:"偏多時常見原因",soxlWhyDown:"偏空時常見原因",soxlRefreshHow:"重新整理：npm run fetch-soxl，再 build／部署。",soxlLoadError:"無法載入 SOXL 桌面（{msg}）",optionsTitle:"美股選擇權",optionsLead:"以 McMillan《選擇權策略完全手冊》策略族為主：先看波動與風險形狀，再用公開 Yahoo 鏈結學習——非投資建議。",optionsDisclaimer:"非投資建議；選擇權風險高。僅供教育與公開數據篩選，不構成個人化下單建議。",optionsBookBadge:"這本書",optionsBookCite:"主要參考書",optionsBookLead:"Lawrence G. McMillan《選擇權策略完全手冊》增訂第五版：依看法與波動高低對應策略族（原創摘要，非原文）。",optionsBookFallbackTitle:"選擇權策略完全手冊（McMillan）",optionsGotoResearch:"到研究書庫看完整條目",optionsUsOnly:"僅美股",optionsQualityTitle:"標的輕量財報檢核",optionsQualityLead:"次要濾網：本益、淨值、負債、ROE、營收／獲利趨勢。缺欄略過；不作薦股。",optionsViewTitle:"選擇權觀點（McMillan）",optionsViewLead:"公開期權鏈：ATM 隱含波動、歷史波動、量能偏向；策略族為教育說明。",optionsMcmillanFirst:"先對齊波動高低與風險形狀，再想策略族——不是先猜漲跌再硬套。",optionsPe:"本益比",optionsPb:"股價淨值",optionsDebt:"負債／權益",optionsRoe:"ROE",optionsRevTrend:"營收趨勢",optionsEarnTrend:"獲利趨勢",optionsGate:"品質閘",optionsGatePass:"通過",optionsGateWatch:"觀察",optionsGateFail:"偏弱",optionsGateIncomplete:"資料不足",optionsDataMissing:"資料不足",optionsForwardPe:"預估本益",optionsTrendUp:"成長約 {pct}%",optionsTrendDown:"下滑約 {pct}%",optionsTrendFlat:"大致持平 {pct}%",optionsAtmIv:"ATM 隱含波動",optionsHv:"歷史波動（約 1 月）",optionsIvHv:"IV／HV",optionsVolRegime:"波動狀態",optionsRegimeIvRich:"隱含偏高",optionsRegimeIvCheap:"隱含偏低",optionsRegimeIvFair:"大致均衡",optionsRegimeIvOnly:"僅有 IV",optionsCallPutVol:"買權／賣權成交量",optionsAtmStrike:"近價履約價",optionsExpiry:"到期日",optionsSkewPutHeavy:"賣權量較重",optionsSkewCallHeavy:"買權量較重",optionsSkewBalanced:"量能大致均衡",optionsEduSetups:"策略族（教育）",optionsEduSetupsLead:"依看法＋波動狀態挑選家族；綠底表示較常對齊目前 IV／HV 狀態（仍非建議）。",optionsSetupCoveredCall:"備兌買權（Covered Call）",optionsSetupCoveredCallBody:"已持有股票時賣出買權，換取權利金；上漲空間被履約價「蓋住」。",optionsSetupCoveredCallWarn:"最大利潤有天花板；大跌時股票虧損仍在。",optionsSetupProtectivePut:"保護性賣權（Protective Put）",optionsSetupProtectivePutBody:"持股同時買進賣權，像買保險：下跌有地板，但要付保費。",optionsSetupProtectivePutWarn:"保險成本會吃掉報酬；若波動已很貴，保費更痛。",optionsSetupVertical:"垂直價差（Vertical）",optionsSetupVerticalBody:"同到期、不同履約價的買權或賣權組合，把最大損益框在可計算區間。",optionsSetupVerticalWarn:"方向看錯仍會虧；好處是虧損有上限。",optionsSetupCalendar:"日曆／對角價差（Calendar / Diagonal）",optionsSetupCalendarBody:"不同到期的選擇權組合，常用來表達「時間流逝」或波動變化看法。",optionsSetupCalendarWarn:"對波動與時間敏感；形狀會隨市價移動改變。",optionsSetupStraddle:"跨式／勒式（Straddle / Strangle）",optionsSetupStraddleBody:"同時買（或賣）買權與賣權，押「大波動」或「波動不夠」。",optionsSetupStraddleWarn:"買方需要夠大的移動；賣方面臨兩側風險。",optionsSetupButterfly:"蝶式（Butterfly）",optionsSetupButterflyBody:"多履約價組合，押價格收斂在中間附近；利潤區通常很窄。",optionsSetupButterflyWarn:"甜蜜點很窄；錯過中間就可能接近最大虧損。",optionsSetupVolAligned:"與目前波動狀態較常一起討論",optionsSetupVolNotAligned:"與目前波動狀態較不契合（仍可學習）",optionsRiskShape:"風險形狀（白話）",optionsNoSetups:"暫無策略族說明",optionsPickTicker:"請選擇上方美股代碼",optionsChainBlocked:"期權鏈暫時無法取得",optionsPartialBlocker:"部分欄位不完整",optionsRefreshHow:"重新整理：在專案根目錄執行 node scripts/fetch-us-options.mjs，再 build／部署。",optionsLoadError:"無法載入選擇權快照（{msg}）",optionsEmpty:"尚無美股樣本——請先跑 fetch-us-options",optionsGlossaryTitle:"小詞典（不用公式）",optionsTermDelta:"Delta（方向敏感度）",optionsDefDelta:"價格漲跌時，選擇權大概會跟多少。數字愈靠近 1 或 −1，跟現貨愈緊。",optionsTermIv:"隱含波動 IV",optionsDefIv:"市場「現在願意付多少保費」換算成的波動預期。愈高通常選擇權愈貴。",optionsTermHv:"歷史波動 HV",optionsDefHv:"過去一段時間股價實際晃動有多大，用來和 IV 對照。",optionsTermAtm:"ATM（近價）",optionsDefAtm:"履約價最靠近現價的合約，常拿來當波動溫度計。",optionsTermSkew:"量能偏向",optionsDefSkew:"買權與賣權成交量誰比較多，粗看市場偏保險還是偏追漲。",optionsTermProb:"機率（教育）",optionsDefProb:"只談「比較可能／比較少見」的直覺，不保證結果，也不給個人化勝率。",researchLead:"書單與論文：標題 → 摘要 → 重點作法 → 是否納入策略候選",researchMathGateBanner:"正式納入策略需數學閘門通過（目前未過）— 僅候選",researchMathGate:"數學閘門",researchMathGateDefault:"尚未通過數學閘門",researchFormulas:"可程式化公式",researchTakeaways:"重點作法",researchNoTakeaways:"尚無重點作法",researchSources:"來源",researchFilters:"篩選",researchFilterAll:"全部",researchType:"類型",researchTypeBook:"書籍",researchTypePaper:"論文",researchTypePodcast:"Podcast",researchMarketBoth:"美＋台",researchStrategy:"策略候選",researchCandYes:"候選納入",researchCandNo:"不納入",researchCandWatch:"觀察中",researchStatusCandidate:"候選",researchStatusDeferred:"暫緩",researchStatusAdopted:"已納入",researchStatusRejected:"排除",researchCounts:"書籍 {books} · 論文 {papers} · Podcast {podcasts} · 顯示 {total}",researchEmpty:"此篩選條件下暫無項目",researchNoFormulas:"尚無公式條目",researchLoadError:"無法載入研究庫（{msg}）",researchShelfFilters:"書架分類",researchShelfCoreInvesting:"核心投資經典",researchShelfValueInvesting:"價值型投資",researchShelfBusiness:"商業管理與商界視角",researchShelfLifePartner:"人生智慧與合夥人思想",researchShelfOptions:"選擇權／衍生品",researchShelfRecentReads:"近期閱讀與推薦書",researchShelfFiConcepts:"必看財商觀念書",researchShelfMoneyValues:"理財與金錢價值觀",researchShelfInvestingBasics:"投資理財入門",researchShelfAssetAllocation:"資產配置",researchShelfFinancials:"財報分析",researchShelfMarketAnalysis:"投資分析與戰勝市場",researchShelfEconAnalysis:"經濟分析",researchShelfPsych:"投資心理／隨機性／人性",researchShelfBiographies:"名人傳記",researchShelfAdjacent:"其他／隣接",todayPicks:"今日選股",market:"市場",hot:"熱門",marketQuotes:"市場報價",usStock:"美股",twStock:"台股",usList:"美股清單",twList:"台股清單",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暫無 Top 候選",ticker:"代碼",name:"名稱",price:"價格",dayPct:"日漲跌",rs:"RS",priorClose:"前收",priorCloseFull:"前收漲幅",pct5d:"5 日",pct1m:"約 1 月",volRatio:"量比",ma:"均線",screening:"篩選",reason:"理由",details:"詳情",business:"本業",risk:"風險",observe:"觀察",dataIncomplete:"資料不全",intraday:"盤中",taipeiClose:"台北收",adr:"ADR",parity:"平價",implied:"隱含價",premium:"溢價",adsRatio:"換股比",taiex:"台灣加權 TAIEX",otc:"櫃買",spx:"S&P 500",nasdaq:"Nasdaq",sox:"SOX",usdtwd:"USD/TWD",loadError:"無法載入資料（{msg}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。",langLabel:"語言",chatUs:"美股",chatTw:"台股",danmakuFx:"全頻彈幕",chatMore:"更多",nickLabel:"暱稱",room:"房間",lobby:"大廳",perTicker:"個股",usTickers:"美股標的",twTickers:"台股標的",noUsTickers:"暫無美股標的",noTwTickers:"暫無台股標的",chatRoom:"聊天室",externalDiscuss:"外部討論",externalDigest:"外部討論摘要",usLobby:"美股大廳",twLobby:"台股大廳",noMessages:"目前尚無訊息",noComments:"目前尚無留言",noTickersDiscuss:"此市場目前無標的可討論",paper:"模擬",paperMissing:"尚無模擬帳本檔案。請於專案執行 npm run paper。",paperDisclaimer:"累積模擬帳戶（自 {date} 起） · 不會每日歸零 · 買進即成交 · 非真實下單",paperRules:"規則（各市場獨立帳）",paperRuleTw:"台股本金 NT$3,000,000 · 整張成交",paperRuleUs:"美股本金 US$100,000 · 可買 1 股起",paperRuleBuy:"買：該市場名單·風險1%·停距1.5%·單檔≤8% · 即成交",paperRuleSell:"賣：停損−3% · 停利+12%半倉 · 破SMA20且日跌>2% · 離名單虧損 · 漲停隔日−5%",paperTabTw:"台股帳 · NT$",paperTabUs:"美股帳 · US$",paperBookTw:"台股帳本（NT$）",paperBookUs:"美股帳本（US$）",principal:"本金",cash:"現金",equity:"權益（部位＋現金）",totalPnl:"總損益",totalPnlPct:"總損益 ％",weekPerf:"週績效",monthPerf:"月績效",quarterPerf:"季績效",yearPerf:"年績效",sinceInception:"成立以來",noTradesToday:"本日尚無此類成交（模擬）",noPositions:"目前沒有持股",buy:"買",sell:"賣",shares:"股",qtyShares:"股數",positions:"目前部位",position:"部位",avgCost:"成本",mark:"現價",unrealizedPnl:"未實現損益",unrealizedPct:"未實現 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累積 · 買進即成交",reasonScreenBuy:"名單新開倉",reasonAdd:"持續買進",reasonStop:"停損",reasonTakeProfit:"停利",reasonMomentumBreak:"動能轉弱",reasonOffList:"離開名單",reasonLimitUpChase:"漲停追價急殺",stopLoss:"停損",takeProfit:"停利",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"績效",qty:"數量",note:"說明",strategyScreen:"策略選股",strategyLead:"台／美命中分開檢視 · 公開資料命中優先",strategyLoading:"載入策略結果中…",strategyEmpty:"尚無策略資料。請執行 npm run strategies。",strategyLoadError:"無法載入策略選股（{msg}）。請確認已執行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分類",hitCount:"檔命中",hitTitle:"命中檔數",strategyDetails:"詳情 · 策略說明",conditions:"條件",results:"篩選結果",copyJson:"複製 JSON",exportCsv:"匯出此策略 CSV",exportJson:"匯出 JSON",copied:"已複製",noHitsExport:"此策略今日無命中列可匯出",incomplete:"不足",hitsTotal:"共{n}檔",twOnlyHint:"本策略僅台股",hitMarket:"命中市場",noHits:"本日無命中",dataInsufficient:"資料不足",calibTitle:"校準說明",incompleteFilters:"未檢查濾網（不算通過）：",sessionTwse:"證交所 session",ohlcvBar:"OHLCV K棒",generated:"產生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精選",cat價量:"價量",cat籌碼:"籌碼",cat財務:"財務",cat大師:"大師",cat週期:"週期",cat技術:"技術",cat基本:"基本",cat綜合:"綜合",addWatchlist:"加入自選",watchlistAdded:"已加入自選 {ticker}",watchlistExists:"{ticker} 已在自選",copyFailed:"複製失敗（請手動選取）",csvDownloaded:"已下載 CSV",csvBlocked:"下載被擋：改以資料連結開啟",backtestSoon:"回測：尚未開放",backtestHint:"回測：資料／引擎尚未開放（不提供假回測）",regimeToday:"今日市場週期（美／台分開）",psychologyPhase:"心理相位",cycleStance:"週期姿態",liquidityBias:"流動性偏誤",temperatureScore:"市場溫度",sizeMult:"部位乘數",regimeTags:"週期標籤",dataGaps:"資料缺口",marketRegime:"市場週期",enum_euphoric:"亢奮",enum_late_optimism:"晚期樂觀",enum_mid_cycle:"中期",enum_cautious_recovery:"謹慎復甦",enum_despondent:"絕望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精選",enum_balanced:"均衡",enum_constructive:"偏建設",enum_aggressive:"積極",enum_stabilize_first:"先求穩",enum_risk_off:"偏防守",enum_risk_on:"偏進攻",enum_neutral:"中性",logicTitle:"選股邏輯",logicSubtitle:"政權→篩選→策略→降權→理由→部位：可稽核的數學流程",logicNoRegime:"尚無市場週期資料（待下次掃描寫入）。",logicStep1:"市場週期（Regime）",logicStep1Lead:"先定美／台獨立姿態，再篩個股。Kostolany 心理相位 × Marks 溫度 × 利率流動性。",logicStep1Caption:"相位 → 篩選姿態 → 部位乘數（STANCE_SIZE_MULT）",logicRatesR2:"R2：美債 ^TNX 20 日上升 ≥ +0.25pp → 流動性偏防禦（即使價趨勢仍中性）。",logicRatesR3:"R3：60 日殖利率下降 ≤ −0.25pp → 允許較積極姿態（非亢奮）。",logicRatesSeparate:"硬規則：dial_US 與 dial_TW 分開；不混成「全球心情」。",logicStep2:"數學篩選（A／B）",logicStep2Lead:"相對強度、動能、SMA、量比；門檻依週期姿態調整。",logicScreenA:"篩選 A · 動能／相對強度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日漲≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或雙均線且 5日≥0／RS≥0。",logicScreenASelective:"精選：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量視為可過）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"積極／偏建設：放寬 RS／日／5日／1月；允許 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建設另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求穩：須站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌後先穩定）。",logicScreenB:"篩選 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。門檻：防守 ≥1.0；積極 ≥1.1；其餘 ≥1.2。",logicScreenBMom:"補標 A：若未過 A，但 1月≥8% 且 SMA20＋SMA50（非先求穩）→ 仍標 A。",logicScore:"排序分數",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加權（上限約 8×0.6）；量比<0.4 −0.5；再依市場週期調整分數。",logicStep3:"XQ 策略選股",logicXqLead:"與每日名單並行：條件式命中（價量／籌碼／財務／大師／週期）。缺公開欄位則略過該條件，不捏造。",logicXqPriceVol:"價量：均線多頭、超短線作多等（OHLCV 實算）。",logicXqFlow:"籌碼：法人同步等（公開張數門檻）。",logicXqFund:"財務：獲利遞增、PE／營益率等公開財報欄。",logicXqMasters:"大師：林區／葛拉罕／巴菲特等可計算代理條件。",logicXqCycle:"週期：科斯托拉尼／市場週期包（依當日美台姿態）。",logicOpenStrategies:"開啟策略頁",logicStep4:"排序降權／加權",logicStep4Lead:"scoreAdjust：依姿態對高 RS 縮量、firm-hands、恐慌穩定做加減分。",logicDemoteHot:"防守／精選：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日漲>2% → −1.2；缺雙均線 −1.5。",logicDemoteThin:"K5：高相對強度但量能不足 → 降權／排除積極桶。",logicPromoteFirm:"aggressive／constructive：價弱量增且 SMA200（firm-hands）→ +2.2；早段放量上漲 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；站上 SMA20 才 +1.5。",logicListSize:"名單長度：防守 ≈0.55×；精選 ≈0.75×；先求穩 ≈0.45×；積極 +2（上限14）；基準 12。",logicStep5:"「為什麼」如何組成",logicStep5Lead:"why 欄為可讀摘要，非模型黑箱——由當日可驗證欄位串接。",logicWhyRs:"日漲跌 + 相對指數（美：S&P；台：加權）pp。",logicWhyMom:"五日%、約一個月%。",logicWhyVol:"量比≥1.2 才寫入量能句。",logicWhySma:"SMA20／50／200 站上狀態（雙均線優先）。",logicWhyRegime:"附加週期備註或姿態／心理相位標籤。",logicStep6:"紙上部位紀律",logicStep6Lead:"模擬帳驗證流程；非實單。部位受週期部位乘數與固定風險公式約束。",logicPaperCapital:"本金：台股 NT$3,000,000（整張）；美股 US$100,000（1 股起）。",logicPaperBuy:"買：名單（純 observe 盡量不買）；風險＝權益×1%；停距≈價×1.5%（量比≥3→2.5%）；單檔≤權益 8%。",logicPaperSizeMult:"部位乘數（0.3–1.35×）標示當日建議積極度；與名單長度連動。",logicPaperSell:"賣：停損 −3%；停利 +12% 半倉；破 SMA20 且日跌>2%；離名單且虧損；漲停風格隔日 −5%。",logicOpenPaper:"開啟模擬頁",logicFootnote:"框架合成僅供透明篩選說明，非投資建議。公開作者方法之可編碼代理；不重製受著作權保護之原文。",backendOff:"討論功能尚未啟用",localComments:"本站留言",futu:"富途",nickPlaceholder:"暱稱（選填）",commentPlaceholder:"留言",commentInput:"輸入留言",send:"送出",guest:"訪客",noLocalComments:"尚無留言",backendNotConnected:"後端未接上",readFail:"讀取失敗：{msg}",sendFail:"發送失敗：{msg}",sendFailShort:"發送失敗",noSource:"無 {source}",newsClues:"新聞／討論線索（非留言）",relatedNews:"相關公開新聞（非社群評論）",messages:"訊息",giscusUnset:"Giscus 尚未設定（需 repoId／categoryId）。請見說明文件。",manualOpen:"手動開啟",noSnippet:"(無摘要)",noTickerData:"此標的暫無{kind}資料",viaBackup:"來源備援：{via}",noDigestBlock:"無 {title} 區塊（今日無對應市場標的或尚未抓取）",socialDigestMarket:"社交摘要市場",socialDigestTitle:"網友參考",socialUs:"美股來源",socialTw:"台股來源",externalDigestShort:"外部摘要",routingNote:"路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads",socialUsTab:"美股 Reddit／富途",socialTwTab:"台股 PTT／Dcard／Threads",socialLoadFail:"社交摘要尚未產生或讀取失敗：{msg}",futuFull:"富途牛牛",sma20:"SMA20",sma50:"SMA50",screenA:"A",screenB:"B",screenC:"C",condPass:"條件",condFail:"未過",condSkip:"略過",pe:"本益比",opMargin:"營益率",grossMargin:"毛利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自營商",maBull:"均線多頭",rsi:"RSI",amplitude:"振幅",zhang:"張",limitUp:"漲停",momentum:"動能",metricPrice:"價格",metricDayPct:"日漲跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(張)",metricDebt:"負債比%",metricDirector:"董監持股%",metricOpQ:"近季營益率%",metricSource:"來源",foreign1d:"外資1日(張)",trust1d:"投信1日(張)",dealer1d:"自營商1日(張)",foreign5d:"外資5日(張)",trust5d:"投信5日(張)",dealer5d:"自營5日(張)"},Wt={...Te,siteTitle:"Daily Quant Picks",loading:"Loading…",disclaimer:"Investing involves risk. For reference only — not investment advice.",footer:"Investing involves risk. For reference only — not investment advice.",dataAsOf:"As of",taipei:" (Taipei)",navMain:"Main navigation",navToday:"Today",navStrategies:"Strategies",navPaper:"Paper",navSocial:"Community",navLogic:"Logic",researchTitle:"Research",navResearch:"Research",navOptions:"Options",navEarnings:"Earnings",earningsTitle:"Earnings",earningsLead:"US Magnificent 7 and high-attention earnings: what the company does, key numbers, what to watch next — plain language, daily refresh. Not investment advice.",earningsDisclaimer:"Not investment advice. Figures from public Yahoo Finance; missing fields show as data unavailable — not personalized advice.",earningsUsFocus:"US-focused",earningsTwStub:"Taiwan earnings coming later (stub)",earningsSelectionTitle:"Watchlist rule:",earningsSelectionFallback:"Largest non-Mag7 mega-caps with earnings in the next 14 days; or Yahoo most-actives; fill with calendar highlights within 45 days.",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL, MSFT, NVDA, AMZN, GOOGL/GOOG, META, TSLA — last report and next date when known.",earningsMag7Badge:"Mag7",earningsHotTitle:"High-attention earnings",earningsHotLead:"Picked by the rule above; badges explain why.",earningsHotEmpty:"No names match the current window (or data unavailable)",earningsWhatItDoes:"What they do",earningsWhatToWatch:"What to watch next",earningsNextDate:"Next report",earningsLastEps:"Last EPS",earningsRevYoy:"Revenue YoY",earningsEpsYoy:"Earnings YoY",earningsPe:"P/E",earningsForwardPe:"Forward P/E",earningsEstimate:"est.",earningsDataMissing:"Data unavailable",earningsTagPrimary:"14d · mega-cap",earningsTagActives:"Most actives · 14d",earningsTagRecent:"Recently reported",earningsTagFallback:"45d calendar highlight",earningsTagOther:"Watch",earningsPartialBlocker:"Partial data blocked",earningsRefreshHow:"Refresh: npm run fetch-earnings, then build/deploy.",earningsLoadError:"Could not load earnings digest ({msg})",earningsEmpty:"No Mag7 data yet — run npm run fetch-earnings",navSoxl:"SOXL",soxlTitle:"SOXL Semiconductor Desk",soxlLead:"Direxion Daily Semiconductor Bull 3X ETF: latest quote, events/anomalies, related news, and SEC N-PORT holdings with estimated contributions — plain language. Not investment advice.",soxlDisclaimer:"Not investment advice. SOXL seeks ~3× daily index performance and is extremely volatile; holdings weights are from SEC N-PORT (not same-day); contributions are estimates.",soxlHeroLabel:"SOXL latest quote",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"Regular close",soxlLeverageNote:"SOXL targets about 3× the ICE Semiconductor Index for a single day; overnight and multi-day results are not a simple 3×.",soxlHoldingsAsOf:"Holdings weights as of",soxlHoldingsNotSameDay:"latest N-PORT, not same-day",soxlEventsTitle:"Events / anomalies",soxlNewsTitle:"Related news",soxlNewsEmpty:"No news yet — run fetch-soxl",soxlHoldingsTitle:"Holdings & estimated contribution",soxlHoldingsLead:"Weights from SEC N-PORT; cash and index swaps often dominate. Contribution ≈ weight × return (labeled estimate; not equal to 3× ETF points).",soxlHoldingsEmpty:"No holdings yet — run npm run fetch-soxl",soxlColName:"Name",soxlColWeight:"Weight",soxlColReturn:"Return",soxlColContrib:"Est. contrib.",soxlColReasons:"Why it moved",soxlContributionHint:"Estimate = weight% × return% ÷ 100 (basket percentage points; SOXL is ~3× daily — not ETF points)",soxlSourceN:"Source {n}",soxlOverallTitle:"Why SOXL rises vs falls",soxlWhyUp:"What tends to lift it",soxlWhyDown:"What tends to weigh on it",soxlRefreshHow:"Refresh: npm run fetch-soxl, then build/deploy.",soxlLoadError:"Could not load SOXL desk ({msg})",optionsTitle:"US Options",optionsLead:"McMillan-style strategy families first: volatility + risk shape, then public Yahoo chains for learning — not investment advice.",optionsDisclaimer:"Not investment advice; options involve high risk. Educational public-data screens only — not personalized orders.",optionsBookBadge:"This book",optionsBookCite:"Primary reference",optionsBookLead:"Lawrence G. McMillan Options Strategies Handbook (5th Chinese ed.): map outlook + volatility to strategy families (original summary, not verbatim).",optionsBookFallbackTitle:"McMillan Options Strategies Handbook",optionsGotoResearch:"Open full entry in Research",optionsUsOnly:"US only",optionsQualityTitle:"Light underlying quality check",optionsQualityLead:"Secondary filter: PE, PB, debt, ROE, revenue/earnings trend. Missing fields omitted — not stock tips.",optionsViewTitle:"Options view (McMillan)",optionsViewLead:"Public chain: ATM IV, historical vol, volume skew; strategy families are educational.",optionsMcmillanFirst:"Align volatility regime and risk shape before picking a family — do not force a view.",optionsPe:"P/E",optionsPb:"P/B",optionsDebt:"Debt/Equity",optionsRoe:"ROE",optionsRevTrend:"Revenue trend",optionsEarnTrend:"Earnings trend",optionsGate:"Quality gate",optionsGatePass:"Pass",optionsGateWatch:"Watch",optionsGateFail:"Weak",optionsGateIncomplete:"Incomplete",optionsDataMissing:"Data unavailable",optionsForwardPe:"fwd P/E",optionsTrendUp:"Up ~{pct}%",optionsTrendDown:"Down ~{pct}%",optionsTrendFlat:"Flat ~{pct}%",optionsAtmIv:"ATM implied vol",optionsHv:"Historical vol (~1m)",optionsIvHv:"IV / HV",optionsVolRegime:"Vol regime",optionsRegimeIvRich:"IV rich",optionsRegimeIvCheap:"IV cheap",optionsRegimeIvFair:"Roughly fair",optionsRegimeIvOnly:"IV only",optionsCallPutVol:"Call / put volume",optionsAtmStrike:"Near ATM strike",optionsExpiry:"Expiry",optionsSkewPutHeavy:"Put volume heavier",optionsSkewCallHeavy:"Call volume heavier",optionsSkewBalanced:"Volumes roughly balanced",optionsEduSetups:"Strategy families (edu)",optionsEduSetupsLead:"Pick a family from outlook + vol regime; green cards often match current IV/HV (still not advice).",optionsSetupCoveredCall:"Covered call",optionsSetupCoveredCallBody:"Own shares and sell a call for premium; upside is capped at the strike.",optionsSetupCoveredCallWarn:"Profit ceiling; share downside remains.",optionsSetupProtectivePut:"Protective put",optionsSetupProtectivePutBody:"Own shares and buy a put as insurance: downside floor, but you pay a premium.",optionsSetupProtectivePutWarn:"Insurance cost reduces returns; richer IV makes it costlier.",optionsSetupVertical:"Vertical spread",optionsSetupVerticalBody:"Same expiry, different strikes — boxes max gain/loss into a known range.",optionsSetupVerticalWarn:"Wrong direction still loses; loss is capped.",optionsSetupCalendar:"Calendar / diagonal",optionsSetupCalendarBody:"Different expiries to express time decay or vol-change views.",optionsSetupCalendarWarn:"Sensitive to vol and time; shape shifts as spot moves.",optionsSetupStraddle:"Straddle / strangle",optionsSetupStraddleBody:"Long or short both sides to bet on a big move — or that vol is overpriced.",optionsSetupStraddleWarn:"Buyers need a large move; sellers face two-sided risk.",optionsSetupButterfly:"Butterfly",optionsSetupButterflyBody:"Multi-strike structure betting price pins near the body; profit zone is narrow.",optionsSetupButterflyWarn:"Sweet spot is thin; miss it and you near max loss.",optionsSetupVolAligned:"Often discussed with current vol regime",optionsSetupVolNotAligned:"Less aligned with current vol (still fine to learn)",optionsRiskShape:"Risk shape (plain)",optionsNoSetups:"No strategy notes yet",optionsPickTicker:"Pick a US ticker above",optionsChainBlocked:"Options chain temporarily unavailable",optionsPartialBlocker:"Some fields incomplete",optionsRefreshHow:"Refresh: run node scripts/fetch-us-options.mjs at repo root, then build/deploy.",optionsLoadError:"Could not load options snapshot ({msg})",optionsEmpty:"No US sample yet — run fetch-us-options first",optionsGlossaryTitle:"Tiny glossary (no formulas)",optionsTermDelta:"Delta (direction feel)",optionsDefDelta:"How much the option tends to move when the stock moves. Closer to 1 or −1 means tighter tracking.",optionsTermIv:"Implied volatility (IV)",optionsDefIv:"What the market is pricing for future wobble — higher usually means pricier options.",optionsTermHv:"Historical volatility (HV)",optionsDefHv:"How much the stock actually moved recently — compare with IV.",optionsTermAtm:"ATM (near the money)",optionsDefAtm:"Strike closest to spot; a common volatility thermometer.",optionsTermSkew:"Volume skew",optionsDefSkew:"Whether calls or puts traded more — a coarse insurance vs chase hint.",optionsTermProb:"Probability (edu)",optionsDefProb:"Talk in ‘more/less common’ intuition only — no guaranteed outcomes or personal odds.",researchLead:"Books & papers: title → summary → key takeaways → strategy candidacy",researchMathGateBanner:"Formal strategy adoption requires the math gate (not passed yet) — candidates only",researchMathGate:"Math gate",researchMathGateDefault:"Math gate not passed",researchFormulas:"Programmable formulas",researchTakeaways:"Key takeaways",researchNoTakeaways:"No takeaways listed",researchSources:"Sources",researchFilters:"Filters",researchFilterAll:"All",researchType:"Type",researchTypeBook:"Books",researchTypePaper:"Papers",researchTypePodcast:"Podcasts",researchMarketBoth:"US+TW",researchStrategy:"Strategy candidate",researchCandYes:"Yes",researchCandNo:"No",researchCandWatch:"Watch",researchStatusCandidate:"Candidate",researchStatusDeferred:"Deferred",researchStatusAdopted:"Adopted",researchStatusRejected:"Rejected",researchCounts:"{books} books · {papers} papers · {podcasts} podcasts · showing {total}",researchEmpty:"No items match this filter",researchNoFormulas:"No formulas listed",researchLoadError:"Failed to load research library ({msg})",researchShelfFilters:"Shelves",researchShelfCoreInvesting:"Core investing classics",researchShelfValueInvesting:"Value investing",researchShelfBusiness:"Business & management",researchShelfLifePartner:"Life & partner wisdom",researchShelfOptions:"Options / derivatives",researchShelfRecentReads:"Recent reads & picks",researchShelfFiConcepts:"Must-read FI concepts",researchShelfMoneyValues:"Money values & mindset",researchShelfInvestingBasics:"Investing basics",researchShelfAssetAllocation:"Asset allocation",researchShelfFinancials:"Financial statement analysis",researchShelfMarketAnalysis:"Market analysis & edge",researchShelfEconAnalysis:"Economic analysis",researchShelfPsych:"Psychology / randomness / human nature",researchShelfBiographies:"Biographies",researchShelfAdjacent:"Other / adjacent",todayPicks:"Today's picks",market:"Market",hot:"Markets",marketQuotes:"Market quotes",usStock:"US",twStock:"TW",usList:"US list",twList:"TW list",usTop:"US Top",twTop:"TW Top",emptyTop:"No Top picks for {market}",ticker:"Ticker",name:"Name",price:"Price",dayPct:"Day %",rs:"RS",priorClose:"Prior close",priorCloseFull:"Prior-close %",pct5d:"5D",pct1m:"~1M",volRatio:"Vol ratio",ma:"MAs",screening:"Screen",reason:"Why",details:"Details",business:"Business",risk:"Risk",observe:"Watch",dataIncomplete:"Incomplete",intraday:"Intraday",taipeiClose:"Taipei close",adr:"ADR",parity:"Parity",implied:"Implied",premium:"Premium",adsRatio:"ADS ratio",taiex:"TAIEX",otc:"OTC",loadError:"Failed to load data ({msg}). Serve statically with data/latest.json present.",langLabel:"Language",chatUs:"US",chatTw:"TW",danmakuFx:"Site danmaku",chatMore:"More",nickLabel:"Nick",room:"Room",lobby:"Lobby",perTicker:"Ticker",usTickers:"US tickers",twTickers:"TW tickers",noUsTickers:"No US tickers",noTwTickers:"No TW tickers",chatRoom:"Chat",externalDiscuss:"External discussion",externalDigest:"External digest",usLobby:"US lobby",twLobby:"TW lobby",noMessages:"No messages yet",noComments:"No comments yet",noTickersDiscuss:"No tickers to discuss in this market",paper:"Paper",paperMissing:"No paper portfolio file. Run npm run paper in the project.",paperDisclaimer:"Cumulative paper account (since {date}) · not reset daily · fills on signal · not real orders",paperRules:"Rules (separate books per market)",paperRuleTw:"TW principal NT$3,000,000 · round lots",paperRuleUs:"US principal US$100,000 · from 1 share",paperRuleBuy:"Buy: list · 1% risk · 1.5% stop · ≤8% per name · immediate fill",paperRuleSell:"Sell: −3% stop · +12% half take-profit · below SMA20 & day <−2% · off-list & losing · limit-up next-day −5%",paperTabTw:"TW book · NT$",paperTabUs:"US book · US$",paperBookTw:"TW book (NT$)",paperBookUs:"US book (US$)",principal:"Principal",cash:"Cash",equity:"Equity (positions + cash)",totalPnl:"Total P&L",totalPnlPct:"Total P&L %",weekPerf:"Week",monthPerf:"Month",quarterPerf:"Quarter",yearPerf:"Year",sinceInception:"Since inception",noTradesToday:"No trades of this type today (paper)",noPositions:"No open positions",buy:"Buy",sell:"Sell",shares:"sh",qtyShares:"Shares",positions:"Positions",position:"Position",avgCost:"Avg cost",mark:"Mark",unrealizedPnl:"Unrealized P&L",unrealizedPct:"Unrealized %",recentTrades:"Trades (last 40)",paperSession:"{date} · since {inception} · fills on signal",reasonScreenBuy:"New from list",reasonAdd:"Add",reasonStop:"Stop-loss",reasonTakeProfit:"Take-profit",reasonMomentumBreak:"Momentum break",reasonOffList:"Off list",reasonLimitUpChase:"Limit-up chase unwind",stopLoss:"Stop-loss",takeProfit:"Take-profit",paperTrade:"Paper",realizedPnl:"P&L",periodPerf:"Performance",qty:"Qty",note:"Note",strategyScreen:"Strategy screener",strategyLead:"US / TW hits viewed separately · public data first",strategyLoading:"Loading strategies…",strategyEmpty:"No strategy data. Run npm run strategies.",strategyLoadError:"Failed to load strategies ({msg}). Run npm run strategies.",strategyList:"Strategies",strategyCat:"Categories",hitCount:"hits",hitTitle:"Hit count",strategyDetails:"Details · strategy notes",conditions:"Conditions",results:"Results",copyJson:"Copy JSON",exportCsv:"Export CSV",exportJson:"Export JSON",copied:"Copied",noHitsExport:"No hit rows to export for this strategy today",incomplete:"N/A",hitsTotal:"{n} hits",twOnlyHint:"TW only",hitMarket:"Hit market",noHits:"No hits today",dataInsufficient:"Insufficient data",calibTitle:"Calibration",incompleteFilters:"Unchecked filters (not counted): ",sessionTwse:"TWSE session",ohlcvBar:"OHLCV bar",generated:"Generated",universeTw:"TW universe",universeUs:"US universe",cat精選:"Featured",cat價量:"Price/Vol",cat籌碼:"Flow",cat財務:"Fundamentals",cat大師:"Masters",cat週期:"Cycle",cat技術:"Technical",cat基本:"Fundamentals",cat綜合:"Composite",addWatchlist:"Watchlist",watchlistAdded:"Added {ticker}",watchlistExists:"{ticker} already watched",copyFailed:"Copy failed — select manually",csvDownloaded:"CSV downloaded",csvBlocked:"Download blocked — opened data URI",backtestSoon:"Backtest: not open",backtestHint:"Backtest engine/data not available (no fake results)",regimeToday:"Today's market regime (US / TW separate)",psychologyPhase:"Psychology phase",cycleStance:"Cycle stance",liquidityBias:"Liquidity bias",temperatureScore:"Temperature score",sizeMult:"Size mult",regimeTags:"Regime tags",dataGaps:"Data gaps",marketRegime:"Market regime",enum_euphoric:"Euphoric",enum_late_optimism:"Late optimism",enum_mid_cycle:"Mid-cycle",enum_cautious_recovery:"Cautious recovery",enum_despondent:"Despondent",enum_panic:"Panic",enum_defensive:"Defensive",enum_selective:"Selective",enum_balanced:"Balanced",enum_constructive:"Constructive",enum_aggressive:"Aggressive",enum_stabilize_first:"Stabilize first",enum_risk_off:"Risk-off",enum_risk_on:"Risk-on",enum_neutral:"Neutral",logicTitle:"Selection logic",logicSubtitle:"Regime → screens → strategies → demotions → why → sizing — auditable math",logicNoRegime:"No market-regime data yet (await next scan).",logicStep1:"Market regime",logicStep1Lead:"Set US/TW dials first, then screen names. Kostolany phase × Marks temperature × rates liquidity.",logicStep1Caption:"Phase → screen stance → size multiplier (STANCE_SIZE_MULT)",logicRatesR2:"R2: ^TNX +0.25pp / 20d → defensive liquidity bias (even if price mid-cycle).",logicRatesR3:"R3: yields ≤ −0.25pp / 60d → allow more aggressive dial (if not Euphoric).",logicRatesSeparate:"Hard rule: dial_US and dial_TW stay separate — never one “world mood”.",logicStep2:"Math screens (A / B)",logicStep2Lead:"RS, momentum, SMA, volume — thresholds shift with cycle stance.",logicScreenA:"Screen A · momentum / RS",logicScreenABalanced:"Balanced: day RS≥0.5pp or day≥1.5%; or 5d≥3%; or 1m≥6% & >SMA20; or both MAs with 5d≥0 / RS≥0.",logicScreenASelective:"Selective: >SMA50 and (RS≥0.5 or 5d≥3% or 1m≥6% & >SMA20).",logicScreenADefensive:"Defensive: >SMA20+SMA50 and (RS≥0.8 or 5d≥4%) and vol≥1.0 (null vol OK); 1m≥12% & vol<0.8 → reject.",logicScreenAAggressive:"Aggressive / Constructive: looser RS/day/5d/1m; allow firm-hands below SMA50 if >SMA200 (1m<0 & vol≥1.4). Constructive also needs SMA20 or SMA200.",logicScreenAStabilize:"Stabilize first: must >SMA20 and (RS≥1.0pp or vol≥1.5).",logicScreenB:"Screen B · volume",logicScreenBVol:"Vol ratio = today / 20d avg. Floors: Defensive ≥1.0; Aggressive ≥1.1; else ≥1.2.",logicScreenBMom:"A backfill: if A missed but 1m≥8% & >SMA20+SMA50 (not Stabilize first) → tag A.",logicScore:"Ranking score",logicScoreFormula:"score = dayRS×2 + 5d%×0.35 + 1m%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"vol≥1.2 adds (cap ~8×0.6); vol<0.4 −0.5; then score adjust by regime.",logicStep3:"XQ strategies",logicXqLead:"Parallel to daily lists: condition hits (price/vol, flow, fundamentals, masters, cycle). Missing fields → insufficient — never invented.",logicXqPriceVol:"Price/vol: MA bull stack, ultra-short, etc. (OHLCV).",logicXqFlow:"Flow: institutional sync (public share-unit thresholds).",logicXqFund:"Fundamentals: earnings uptrend, PE / margins from public filings.",logicXqMasters:"Masters: Lynch / Graham / Buffett-style computable proxies.",logicXqCycle:"Cycle: Kostolany / regime pack keyed to today’s US·TW dials.",logicOpenStrategies:"Open Strategies",logicStep4:"Ranking demotions / boosts",logicStep4Lead:"scoreAdjust: thin high-RS, firm-hands, and panic reclaim change the score.",logicDemoteHot:"Defensive/Selective: 1m≥8% & vol<0.8 → −2.5; vol<0.7 & day>2% → −1.2; missing dual MA −1.5.",logicDemoteThin:"K5: strong RS on thin volume → demote / keep out of aggressive bucket.",logicPromoteFirm:"aggressive/constructive: weak price + rising vol + >SMA200 (firm-hands) → +2.2; early up-day volume +1.0.",logicDemotePanic:"stabilize_first: base −3; +1.5 only if >SMA20.",logicListSize:"List length: Defensive ~0.55×; Selective ~0.75×; Stabilize first ~0.45×; Aggressive +2 (cap 14); base 12.",logicStep5:"How “Why” is built",logicStep5Lead:"The why field is a readable join of verified fields — not a black box.",logicWhyRs:"Day % + vs index (US: S&P; TW: TAIEX) in pp.",logicWhyMom:"5-day % and ~1-month %.",logicWhyVol:"Volume sentence only if vol_ratio ≥ 1.2.",logicWhySma:"SMA20 / 50 / 200 status (dual-MA preferred).",logicWhyRegime:"Append a regime note or stance / psychology-phase tags.",logicStep6:"Paper sizing discipline",logicStep6Lead:"Paper books validate process — not live orders. Size constrained by regime size mult + fixed risk math.",logicPaperCapital:"Capital: TW NT$3,000,000 (round lots); US US$100,000 (from 1 share).",logicPaperBuy:"Buy: list (observe-only avoided); risk = equity×1%; stop≈price×1.5% (vol≥3 → 2.5%); per name ≤8% equity.",logicPaperSizeMult:"Size multiplier (0.3–1.35×) tags day’s aggressiveness; linked to list length.",logicPaperSell:"Sell: stop −3%; take-profit +12% half; below SMA20 & day <−2%; off-list & losing; limit-up chase next-day −5%.",logicOpenPaper:"Open Paper",logicFootnote:"Framework synthesis for transparent screening — not investment advice. Public operational proxies only; no copyrighted book text.",backendOff:"Discussion backend not enabled",localComments:"Site comments",futu:"Futu",nickPlaceholder:"Nickname (optional)",commentPlaceholder:"Comment",commentInput:"Write a comment",send:"Send",guest:"Guest",noLocalComments:"No comments yet",backendNotConnected:"Backend not connected",readFail:"Read failed: {msg}",sendFail:"Send failed: {msg}",sendFailShort:"Send failed",noSource:"No {source}",newsClues:"News / discussion clues (not comments)",relatedNews:"Related public news (not social comments)",messages:"Messages",giscusUnset:"Giscus not configured (needs repoId / categoryId).",manualOpen:"Open manually",noSnippet:"(no snippet)",noTickerData:"No {kind} data for this ticker",viaBackup:"Backup source: {via}",noDigestBlock:"No {title} block (no tickers or not fetched)",socialDigestMarket:"Social digest market",socialDigestTitle:"Social digest",socialUs:"US sources",socialTw:"TW sources",externalDigestShort:"External digest",routingNote:"Routing: US → Reddit + Futu; TW → PTT + Dcard + Threads",socialUsTab:"US Reddit / Futu",socialTwTab:"TW PTT / Dcard / Threads",socialLoadFail:"Social digest missing or failed: {msg}",futuFull:"Futu",condPass:"Cond.",condFail:"Fail",condSkip:"Skip",pe:"P/E",opMargin:"Op. margin",grossMargin:"Gross margin",foreignInv:"Foreign",trustInv:"Trust",dealerInv:"Dealer",maBull:"MA bull stack",amplitude:"Range",zhang:"lots",limitUp:"Limit-up",momentum:"Momentum",metricPrice:"Price",metricDayPct:"Day %",metricVolRatioYday:"Vol ratio (yday)",metricVolToday:"Vol (lots)",metricDebt:"Debt %",metricDirector:"Insider %",metricOpQ:"Op. margin (q)",metricSource:"Source",foreign1d:"Foreign 1d (lots)",trust1d:"Trust 1d (lots)",dealer1d:"Dealer 1d (lots)",foreign5d:"Foreign 5d (lots)",trust5d:"Trust 5d (lots)",dealer5d:"Dealer 5d (lots)"},jt={...Te,siteTitle:"每日数学选股",loading:"加载中…",disclaimer:"投资涉及风险，信息仅供参考，非投资建议",footer:"投资涉及风险，信息仅供参考，非投资建议",dataAsOf:"数据",taipei:"（台北）",navMain:"主导航",navToday:"今日",navStrategies:"策略",navPaper:"模拟",navSocial:"社群",navLogic:"逻辑",researchTitle:"研究",navResearch:"研究",navOptions:"期权",navEarnings:"读财报",earningsTitle:"读财报",earningsLead:"美股 Magnificent 7 与高关注财报摘要：公司在做什么、关键数字、下一步看什么——白话、每日更新，非投资建议。",earningsDisclaimer:"非投资建议。数字来自公开 Yahoo Finance；缺栏标「资料不足」，不构成个性化投资建议。",earningsUsFocus:"以美股为主",earningsTwStub:"台股财报稍后开放（规划中）",earningsSelectionTitle:"关注名单规则：",earningsSelectionFallback:"市值最大且未来 14 日内有财报的非 Mag7 大型股；或 Yahoo 热门成交；不足则以 45 日内行事历亮点补齐。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——上次财报与下次日期（已知时）。",earningsMag7Badge:"Mag7",earningsHotTitle:"高关注／热门财报",earningsHotLead:"依上方规则挑选；标签说明为何入选。",earningsHotEmpty:"目前窗口内暂无符合条件的标的（或资料不足）",earningsWhatItDoes:"这家公司在做什么",earningsWhatToWatch:"下一步看什么",earningsNextDate:"下次财报",earningsLastEps:"上次 EPS",earningsRevYoy:"营收 YoY",earningsEpsYoy:"获利 YoY",earningsPe:"市盈率",earningsForwardPe:"预估市盈率",earningsEstimate:"预估",earningsDataMissing:"资料不足",earningsTagPrimary:"14 日内・大型",earningsTagActives:"热门成交・14 日内",earningsTagRecent:"近日已公布",earningsTagFallback:"45 日行事历亮点",earningsTagOther:"关注",earningsPartialBlocker:"部分资料受阻",earningsRefreshHow:"重新整理：npm run fetch-earnings，再 build／部署。",earningsLoadError:"无法载入财报摘要（{msg}）",earningsEmpty:"尚无 Mag7 资料——请先跑 npm run fetch-earnings",navSoxl:"SOXL",soxlTitle:"SOXL 半导体杠杆",soxlLead:"Direxion 每日半导体多头 3 倍 ETF：最新报价、异常／事件、相关新闻，以及 SEC N-PORT 持股权重与估算贡献——白话整理，非投资建议。",soxlDisclaimer:"非投资建议。SOXL 为约 3 倍日杠杆 ETF，波动与亏损风险极高；持股权重来自 SEC N-PORT（非当日），贡献度为估算。",soxlHeroLabel:"SOXL 最新报价",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正规收盘",soxlLeverageNote:"SOXL 目标约为 ICE Semiconductor Index 单日表现的 3 倍；隔夜与多日累积不可用简单 3 倍推估。",soxlHoldingsAsOf:"持股权重截至",soxlHoldingsNotSameDay:"最新 N-PORT，非今日即时",soxlEventsTitle:"事件／异常",soxlNewsTitle:"相关新闻",soxlNewsEmpty:"暂无新闻（请重新 fetch）",soxlHoldingsTitle:"持股与估算贡献",soxlHoldingsLead:"权重来自 SEC N-PORT；现金与指数互换常占大宗。贡献 ≈ 权重 × 报酬（标示为估算，且未直接等于 3x ETF 点数）。",soxlHoldingsEmpty:"尚无持股资料——请先跑 npm run fetch-soxl",soxlColName:"标的",soxlColWeight:"权重",soxlColReturn:"日报酬",soxlColContrib:"估算贡献",soxlColReasons:"白话原因",soxlContributionHint:"估算＝权重% × 报酬% ÷ 100（篮子百分点；SOXL 约 3× 日杠杆，不等于 ETF 点数）",soxlSourceN:"来源 {n}",soxlOverallTitle:"为何涨／为何跌",soxlWhyUp:"偏多时常见原因",soxlWhyDown:"偏空时常见原因",soxlRefreshHow:"重新整理：npm run fetch-soxl，再 build／部署。",soxlLoadError:"无法载入 SOXL 桌面（{msg}）",optionsTitle:"美股期权",optionsLead:"以 McMillan《期权策略完全手册》策略族为主：先看波动与风险形状，再用公开 Yahoo 链学习——非投资建议。",optionsDisclaimer:"非投资建议；期权风险高。仅供教育与公开数据筛选，不构成个人化下单建议。",optionsBookBadge:"这本书",optionsBookCite:"主要参考书",optionsBookLead:"Lawrence G. McMillan《期权策略完全手册》增订第五版：依看法与波动高低对应策略族（原创摘要，非原文）。",optionsBookFallbackTitle:"期权策略完全手册（McMillan）",optionsGotoResearch:"到研究书库看完整条目",optionsUsOnly:"仅美股",optionsQualityTitle:"标的轻量财报检核",optionsQualityLead:"次要滤网：本益、净值、负债、ROE、营收／获利趋势。缺栏标「资料不足」，不作荐股。",optionsViewTitle:"期权观点（McMillan）",optionsViewLead:"公开期权链：ATM 隐含波动、历史波动、量能偏向；策略族为教育说明。",optionsMcmillanFirst:"先对齐波动高低与风险形状，再想策略族——不是先猜涨跌再硬套。",optionsPe:"市盈率",optionsPb:"市净率",optionsDebt:"负债／权益",optionsRoe:"ROE",optionsRevTrend:"营收趋势",optionsEarnTrend:"获利趋势",optionsGate:"品质闸",optionsGatePass:"通过",optionsGateWatch:"观察",optionsGateFail:"偏弱",optionsGateIncomplete:"资料不足",optionsDataMissing:"资料不足",optionsForwardPe:"预估市盈率",optionsTrendUp:"成长约 {pct}%",optionsTrendDown:"下滑约 {pct}%",optionsTrendFlat:"大致持平 {pct}%",optionsAtmIv:"ATM 隐含波动",optionsHv:"历史波动（约 1 月）",optionsIvHv:"IV／HV",optionsVolRegime:"波动状态",optionsRegimeIvRich:"隐含偏高",optionsRegimeIvCheap:"隐含偏低",optionsRegimeIvFair:"大致均衡",optionsRegimeIvOnly:"仅有 IV",optionsCallPutVol:"认购／认沽成交量",optionsAtmStrike:"近价履约价",optionsExpiry:"到期日",optionsSkewPutHeavy:"认沽量较重",optionsSkewCallHeavy:"认购量较重",optionsSkewBalanced:"量能大致均衡",optionsEduSetups:"策略族（教育）",optionsEduSetupsLead:"依看法＋波动状态挑选家族；绿底表示较常对齐目前 IV／HV（仍非建议）。",optionsSetupCoveredCall:"备兑认购（Covered Call）",optionsSetupCoveredCallBody:"已持股时卖出认购，换取权利金；上涨空间被履约价盖住。",optionsSetupCoveredCallWarn:"最大利润有天花板；大跌时股票亏损仍在。",optionsSetupProtectivePut:"保护性认沽（Protective Put）",optionsSetupProtectivePutBody:"持股同时买入认沽，像买保险：下跌有地板，但要付保费。",optionsSetupProtectivePutWarn:"保险成本会吃掉报酬；若波动已很贵，保费更痛。",optionsSetupVertical:"垂直价差（Vertical）",optionsSetupVerticalBody:"同到期、不同履约价的组合，把最大损益框在可计算区间。",optionsSetupVerticalWarn:"方向看错仍会亏；好处是亏损有上限。",optionsSetupCalendar:"日历／对角价差",optionsSetupCalendarBody:"不同到期的组合，常用来表达时间流逝或波动变化看法。",optionsSetupCalendarWarn:"对波动与时间敏感；形状会随市价移动改变。",optionsSetupStraddle:"跨式／勒式",optionsSetupStraddleBody:"同时买（或卖）认购与认沽，押大波动或波动不够。",optionsSetupStraddleWarn:"买方需要够大的移动；卖方面临两侧风险。",optionsSetupButterfly:"蝶式",optionsSetupButterflyBody:"多履约价组合，押价格收敛在中间附近；利润区通常很窄。",optionsSetupButterflyWarn:"甜蜜点很窄；错过中间就可能接近最大亏损。",optionsSetupVolAligned:"与目前波动状态较常一起讨论",optionsSetupVolNotAligned:"与目前波动状态较不契合（仍可学习）",optionsRiskShape:"风险形状（白话）",optionsNoSetups:"暂无策略族说明",optionsPickTicker:"请选择上方美股代码",optionsChainBlocked:"期权链暂时无法取得",optionsPartialBlocker:"部分栏位不完整",optionsRefreshHow:"重新整理：在项目根目录执行 node scripts/fetch-us-options.mjs，再 build／部署。",optionsLoadError:"无法载入期权快照（{msg}）",optionsEmpty:"尚无美股样本——请先跑 fetch-us-options",optionsGlossaryTitle:"小词典（不用公式）",optionsTermDelta:"Delta（方向敏感度）",optionsDefDelta:"价格涨跌时，期权大概会跟多少。数字愈靠近 1 或 −1，跟现货愈紧。",optionsTermIv:"隐含波动 IV",optionsDefIv:"市场「现在愿意付多少保费」换算成的波动预期。愈高通常期权愈贵。",optionsTermHv:"历史波动 HV",optionsDefHv:"过去一段时间股价实际晃动有多大，用来和 IV 对照。",optionsTermAtm:"ATM（近价）",optionsDefAtm:"履约价最靠近现价的合约，常拿来当波动温度计。",optionsTermSkew:"量能偏向",optionsDefSkew:"认购与认沽成交量谁比较多，粗看市场偏保险还是偏追涨。",optionsTermProb:"机率（教育）",optionsDefProb:"只谈「比较可能／比较少见」的直觉，不保证结果，也不给个人化胜率。",researchLead:"书单与论文：标题 → 摘要 → 重点作法 → 是否纳入策略候选",researchMathGateBanner:"正式纳入策略需数学闸门通过（目前未过）— 仅候选",researchMathGate:"数学闸门",researchMathGateDefault:"尚未通过数学闸门",researchFormulas:"可编程公式",researchTakeaways:"重点作法",researchNoTakeaways:"尚无重点作法",researchSources:"来源",researchFilters:"筛选",researchFilterAll:"全部",researchType:"类型",researchTypeBook:"书籍",researchTypePaper:"论文",researchTypePodcast:"播客",researchMarketBoth:"美＋台",researchStrategy:"策略候选",researchCandYes:"候选纳入",researchCandNo:"不纳入",researchCandWatch:"观察中",researchStatusCandidate:"候选",researchStatusDeferred:"暂缓",researchStatusAdopted:"已纳入",researchStatusRejected:"排除",researchCounts:"书籍 {books} · 论文 {papers} · 播客 {podcasts} · 显示 {total}",researchEmpty:"此筛选条件下暂无项目",researchNoFormulas:"尚无公式条目",researchLoadError:"无法加载研究库（{msg}）",researchShelfFilters:"书架分类",researchShelfCoreInvesting:"核心投资经典",researchShelfValueInvesting:"价值型投资",researchShelfBusiness:"商业管理与商界视角",researchShelfLifePartner:"人生智慧与合伙人思想",researchShelfOptions:"期权／衍生品",researchShelfRecentReads:"近期阅读与推荐书",researchShelfFiConcepts:"必看财商观念书",researchShelfMoneyValues:"理财与金钱价值观",researchShelfInvestingBasics:"投资理财入门",researchShelfAssetAllocation:"资产配置",researchShelfFinancials:"财报分析",researchShelfMarketAnalysis:"投资分析与战胜市场",researchShelfEconAnalysis:"经济分析",researchShelfPsych:"投资心理／随机性／人性",researchShelfBiographies:"名人传记",researchShelfAdjacent:"其他／隣接",todayPicks:"今日选股",market:"市场",hot:"热门",marketQuotes:"市场报价",usStock:"美股",twStock:"台股",usList:"美股列表",twList:"台股列表",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暂无 Top 候选",ticker:"代码",name:"名称",price:"价格",dayPct:"日涨跌",priorClose:"前收",priorCloseFull:"前收涨幅",pct5d:"5 日",pct1m:"约 1 月",volRatio:"量比",ma:"均线",screening:"筛选",reason:"理由",details:"详情",business:"本业",risk:"风险",observe:"观察",dataIncomplete:"资料不全",intraday:"盘中",taipeiClose:"台北收",parity:"平价",implied:"隐含价",premium:"溢价",adsRatio:"换股比",taiex:"台湾加权 TAIEX",otc:"柜买",loadError:"无法加载数据（{msg}）。请确认以静态服务器打开，且 data/latest.json 存在。",langLabel:"语言",chatUs:"美股",chatTw:"台股",danmakuFx:"全频弹幕",chatMore:"更多",nickLabel:"昵称",room:"房间",lobby:"大厅",perTicker:"个股",usTickers:"美股标的",twTickers:"台股标的",noUsTickers:"暂无美股标的",noTwTickers:"暂无台股标的",chatRoom:"聊天室",externalDiscuss:"外部讨论",externalDigest:"外部讨论摘要",usLobby:"美股大厅",twLobby:"台股大厅",noMessages:"目前尚无消息",noComments:"目前尚无留言",noTickersDiscuss:"此市场目前无标的可讨论",paper:"模拟",paperMissing:"尚无模拟账本文件。请在项目执行 npm run paper。",paperDisclaimer:"累积模拟账户（自 {date} 起） · 不会每日归零 · 买进即成交 · 非真实下单",paperRules:"规则（各市场独立账）",paperRuleTw:"台股本金 NT$3,000,000 · 整张成交",paperRuleUs:"美股本金 US$100,000 · 可买 1 股起",paperRuleBuy:"买：该市场名单·风险1%·停距1.5%·单档≤8% · 即成交",paperRuleSell:"卖：停损−3% · 停利+12%半仓 · 破SMA20且日跌>2% · 离名单亏损 · 涨停隔日−5%",paperTabTw:"台股账 · NT$",paperTabUs:"美股账 · US$",paperBookTw:"台股账本（NT$）",paperBookUs:"美股账本（US$）",principal:"本金",cash:"现金",equity:"权益（部位＋现金）",totalPnl:"总损益",totalPnlPct:"总损益 ％",weekPerf:"周绩效",monthPerf:"月绩效",quarterPerf:"季绩效",yearPerf:"年绩效",sinceInception:"成立以来",noTradesToday:"本日尚无此类成交（模拟）",noPositions:"目前没有持股",buy:"买",sell:"卖",shares:"股",qtyShares:"股数",positions:"目前部位",position:"部位",avgCost:"成本",mark:"现价",unrealizedPnl:"未实现损益",unrealizedPct:"未实现 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累积 · 买进即成交",reasonScreenBuy:"名单新开仓",reasonAdd:"持续买进",reasonStop:"停损",reasonTakeProfit:"停利",reasonMomentumBreak:"动能转弱",reasonOffList:"离开名单",reasonLimitUpChase:"涨停追价急杀",stopLoss:"停损",takeProfit:"停利",paperTrade:"模拟",realizedPnl:"损益",periodPerf:"绩效",qty:"数量",note:"说明",strategyScreen:"策略选股",strategyLead:"台／美命中分开检视 · 缺资料标「不足」",strategyLoading:"加载策略结果中…",strategyEmpty:"尚无策略资料。请执行 npm run strategies。",strategyLoadError:"无法加载策略选股（{msg}）。请确认已执行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分类",hitCount:"档命中",hitTitle:"命中档数",strategyDetails:"详情 · 策略说明",conditions:"条件",results:"筛选结果",copyJson:"复制 JSON",exportCsv:"导出此策略 CSV",exportJson:"导出 JSON",copied:"已复制",noHitsExport:"此策略今日无命中列可导出",incomplete:"不足",hitsTotal:"共{n}档",twOnlyHint:"本策略仅台股",hitMarket:"命中市场",noHits:"本日无命中",dataInsufficient:"资料不足",calibTitle:"校准说明",incompleteFilters:"未检查滤网（不算通过）：",sessionTwse:"证交所 session",ohlcvBar:"OHLCV K棒",generated:"产生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精选",cat價量:"价量",cat籌碼:"筹码",cat財務:"财务",cat大師:"大师",cat週期:"周期",cat技術:"技术",cat基本:"基本",cat綜合:"综合",addWatchlist:"加入自选",watchlistAdded:"已加入自选 {ticker}",watchlistExists:"{ticker} 已在自选",copyFailed:"复制失败（请手动选取）",csvDownloaded:"已下载 CSV",csvBlocked:"下载被挡：改以数据链接打开",backtestSoon:"回测：尚未开放",backtestHint:"回测：数据／引擎尚未开放（不提供假回测）",regimeToday:"今日市场周期（美／台分开）",psychologyPhase:"心理相位",cycleStance:"周期姿态",liquidityBias:"流动性偏误",temperatureScore:"市场温度",sizeMult:"部位乘数",regimeTags:"周期标签",dataGaps:"资料缺口",marketRegime:"市场周期",enum_euphoric:"亢奋",enum_late_optimism:"晚期乐观",enum_mid_cycle:"中期",enum_cautious_recovery:"谨慎复苏",enum_despondent:"绝望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精选",enum_balanced:"均衡",enum_constructive:"偏建设",enum_aggressive:"积极",enum_stabilize_first:"先求稳",enum_risk_off:"偏防守",enum_risk_on:"偏进攻",enum_neutral:"中性",logicTitle:"选股逻辑",logicSubtitle:"政权→筛选→策略→降权→理由→部位：可稽核的数学流程",logicNoRegime:"尚无市场周期资料（待下次扫描写入）。",logicStep1:"市场周期（Regime）",logicStep1Lead:"先定美／台独立姿态，再筛个股。Kostolany 心理相位 × Marks 温度 × 利率流动性。",logicStep1Caption:"相位 → 筛选姿态 → 部位乘数（STANCE_SIZE_MULT）",logicRatesR2:"R2：美债 ^TNX 20 日上升 ≥ +0.25pp → 流动性偏防御（即使价趋势仍中性）。",logicRatesR3:"R3：60 日收益率下降 ≤ −0.25pp → 允许较积极姿态（非亢奋）。",logicRatesSeparate:"硬规则：dial_US 与 dial_TW 分开；不混成「全球心情」。",logicStep2:"数学筛选（A／B）",logicStep2Lead:"相对强度、动能、SMA、量比；门槛依周期姿态调整。",logicScreenA:"筛选 A · 动能／相对强度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日涨≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或双均线且 5日≥0／RS≥0。",logicScreenASelective:"精选：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量视为可过）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"积极／偏建设：放宽 RS／日／5日／1月；允许 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建设另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求稳：须站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌后先稳定）。",logicScreenB:"筛选 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。门槛：防守 ≥1.0；积极 ≥1.1；其余 ≥1.2。",logicScreenBMom:"补标 A：若未过 A，但 1月≥8% 且 SMA20＋SMA50（非先求稳）→ 仍标 A。",logicScore:"排序分数",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加权（上限约 8×0.6）；量比<0.4 −0.5；再依市场周期调整分数。",logicStep3:"XQ 策略选股",logicXqLead:"与每日名单并行：条件式命中（价量／筹码／财务／大师／周期）。缺栏标「资料不足」，不捏造。",logicXqPriceVol:"价量：均线多头、超短线作多等（OHLCV 实算）。",logicXqFlow:"筹码：法人同步等（公开张数门槛）。",logicXqFund:"财务：获利递增、PE／营益率等公开财报栏。",logicXqMasters:"大师：林奇／格雷厄姆／巴菲特等可计算代理条件。",logicXqCycle:"周期：科斯托拉尼／市场周期包（依当日美台姿态）。",logicOpenStrategies:"打开策略页",logicStep4:"排序降权／加权",logicStep4Lead:"scoreAdjust：依姿态对高 RS 缩量、firm-hands、恐慌稳定做加减分。",logicDemoteHot:"防守／精选：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日涨>2% → −1.2；缺双均线 −1.5。",logicDemoteThin:"K5：高相对强度但量能不足 → 降权／排除积极桶。",logicPromoteFirm:"aggressive／constructive：价弱量增且 SMA200（firm-hands）→ +2.2；早段放量上涨 +1.0。",logicDemotePanic:"stabilize_first：基准 −3；站上 SMA20 才 +1.5。",logicListSize:"名单长度：防守 ≈0.55×；精选 ≈0.75×；先求稳 ≈0.45×；积极 +2（上限14）；基准 12。",logicStep5:"「为什么」如何组成",logicStep5Lead:"why 栏为可读摘要，非模型黑箱——由当日可验证栏位串接。",logicWhyRs:"日涨跌 + 相对指数（美：S&P；台：加权）pp。",logicWhyMom:"五日%、约一个月%。",logicWhyVol:"量比≥1.2 才写入量能句。",logicWhySma:"SMA20／50／200 站上状态（双均线优先）。",logicWhyRegime:"附加周期备注或姿态／心理相位标签。",logicStep6:"纸上部位纪律",logicStep6Lead:"模拟账验证流程；非实单。部位受周期部位乘数与固定风险公式约束。",logicPaperCapital:"本金：台股 NT$3,000,000（整张）；美股 US$100,000（1 股起）。",logicPaperBuy:"买：名单（纯 observe 尽量不买）；风险＝权益×1%；停距≈价×1.5%（量比≥3→2.5%）；单档≤权益 8%。",logicPaperSizeMult:"部位乘数（0.3–1.35×）标示当日建议积极度；与名单长度联动。",logicPaperSell:"卖：停损 −3%；停利 +12% 半仓；破 SMA20 且日跌>2%；离名单且亏损；涨停风格隔日 −5%。",logicOpenPaper:"打开模拟页",logicFootnote:"框架合成仅供透明筛选说明，非投资建议。公开作者方法之可编码代理；不重制受著作权保护之原文。",backendOff:"讨论功能尚未启用",localComments:"本站留言",futu:"富途",nickPlaceholder:"昵称（选填）",commentPlaceholder:"留言",commentInput:"输入留言",send:"发送",guest:"访客",noLocalComments:"尚无留言",backendNotConnected:"后端未接上",readFail:"读取失败：{msg}",sendFail:"发送失败：{msg}",sendFailShort:"发送失败",noSource:"无 {source}",newsClues:"新闻／讨论线索（非留言）",relatedNews:"相关公开新闻（非社群评论）",messages:"消息",giscusUnset:"Giscus 尚未设定（需 repoId／categoryId）。",manualOpen:"手动打开",noSnippet:"(无摘要)",noTickerData:"此标的暂无{kind}资料",viaBackup:"来源备援：{via}",noDigestBlock:"无 {title} 区块（今日无对应市场标的或尚未抓取）",socialDigestMarket:"社交摘要市场",socialDigestTitle:"网友参考",socialUs:"美股来源",socialTw:"台股来源",externalDigestShort:"外部摘要",routingNote:"路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads",socialUsTab:"美股 Reddit／富途",socialTwTab:"台股 PTT／Dcard／Threads",socialLoadFail:"社交摘要尚未产生或读取失败：{msg}",futuFull:"富途牛牛",condPass:"条件",condFail:"未过",condSkip:"略过",pe:"本益比",opMargin:"营益率",grossMargin:"毛利率",foreignInv:"外资",trustInv:"投信",dealerInv:"自营商",maBull:"均线多头",amplitude:"振幅",zhang:"张",limitUp:"涨停",momentum:"动能",metricPrice:"价格",metricDayPct:"日涨跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(张)",metricDebt:"负债比%",metricDirector:"董监持股%",metricOpQ:"近季营益率%",metricSource:"来源",foreign1d:"外资1日(张)",trust1d:"投信1日(张)",dealer1d:"自营商1日(张)",foreign5d:"外资5日(张)",trust5d:"投信5日(张)",dealer5d:"自营5日(张)"},zt={...Te,siteTitle:"毎日クオンツ選株",loading:"読み込み中…",disclaimer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",footer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",dataAsOf:"データ",taipei:"（台北）",navMain:"メインナビ",navToday:"本日",navStrategies:"戦略",navPaper:"模擬",navSocial:"コミュニティ",navLogic:"ロジック",researchTitle:"研究",navResearch:"研究",navOptions:"オプション",navEarnings:"決算を読む",earningsTitle:"決算を読む",earningsLead:"米国 Mag7 と注目決算の要約：何をしている会社か、主要数字、次に見る点——平易な言葉、日次更新。投資助言ではありません。",earningsDisclaimer:"投資助言ではありません。数値は公開 Yahoo Finance 由来；欠落は「データ不足」。個別の投資助言ではありません。",earningsUsFocus:"米国中心",earningsTwStub:"台湾株の決算は後日対応（スタブ）",earningsSelectionTitle:"注目リストのルール：",earningsSelectionFallback:"今後14日以内に決算がある非Mag7大型株（時価総額順）；または Yahoo 出来高上位；不足分は45日以内のカレンダーで補完。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——前回決算と次回日（判明時）。",earningsMag7Badge:"Mag7",earningsHotTitle:"注目・話題の決算",earningsHotLead:"上記ルールで選定；バッジが理由を示します。",earningsHotEmpty:"現在の窓に該当なし（またはデータ不足）",earningsWhatItDoes:"この会社は何をしているか",earningsWhatToWatch:"次に見る点",earningsNextDate:"次回決算",earningsLastEps:"前回 EPS",earningsRevYoy:"売上高 YoY",earningsEpsYoy:"利益 YoY",earningsPe:"PER",earningsForwardPe:"予想 PER",earningsEstimate:"予想",earningsDataMissing:"データ不足",earningsTagPrimary:"14日以内・大型",earningsTagActives:"出来高上位・14日",earningsTagRecent:"直近発表",earningsTagFallback:"45日カレンダー注目",earningsTagOther:"注目",earningsPartialBlocker:"一部データ取得不可",earningsRefreshHow:"更新：npm run fetch-earnings のあと build／デプロイ。",earningsLoadError:"決算ダイジェストを読めません（{msg}）",earningsEmpty:"Mag7 データなし — 先に npm run fetch-earnings",navSoxl:"SOXL",soxlTitle:"SOXL 半導体レバレッジ",soxlLead:"Direxion 半導体ブル3倍ETF：最新価格、イベント／異常、関連ニュース、SEC N-PORT 保有比率と寄与の概算——平易な整理。投資助言ではありません。",soxlDisclaimer:"投資助言ではありません。SOXLは約3倍の日次レバレッジETFで変動が極めて大きいです。保有比率はSEC N-PORT（当日ではない）、寄与は概算です。",soxlHeroLabel:"SOXL 最新価格",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正規取引終値",soxlLeverageNote:"SOXLはICE Semiconductor Indexの日次リターンの約3倍を目指します。夜間や複数日は単純な3倍ではありません。",soxlHoldingsAsOf:"保有比率基準日",soxlHoldingsNotSameDay:"最新N-PORT、当日ではない",soxlEventsTitle:"イベント／異常",soxlNewsTitle:"関連ニュース",soxlNewsEmpty:"ニュースなし — fetch-soxl を実行",soxlHoldingsTitle:"保有と寄与の概算",soxlHoldingsLead:"比率はSEC N-PORT由来。現金と指数スワップが大きいことが多い。寄与≈比率×リターン（概算表示。3倍ETFのポイントとは異なる）。",soxlHoldingsEmpty:"保有データなし — 先に npm run fetch-soxl",soxlColName:"銘柄",soxlColWeight:"比率",soxlColReturn:"日次リターン",soxlColContrib:"寄与概算",soxlColReasons:"平易な理由",soxlContributionHint:"概算＝比率% × リターン% ÷ 100（バスケットのポイント。SOXLは約3×日次でETFポイントではない）",soxlSourceN:"出典 {n}",soxlOverallTitle:"上がる理由／下がる理由",soxlWhyUp:"上昇側の要因",soxlWhyDown:"下落側の要因",soxlRefreshHow:"更新：npm run fetch-soxl のあと build／デプロイ。",soxlLoadError:"SOXLデスクを読み込めません（{msg}）",optionsTitle:"米国オプション",optionsLead:"McMillan の戦略ファミリーを軸に、ボラと損益形→公開 Yahoo チェーンで学習。投資助言ではありません。",optionsDisclaimer:"投資助言ではありません。オプションは高リスク。教育と公開データのみ。",optionsBookBadge:"この本",optionsBookCite:"主要参考文献",optionsBookLead:"Lawrence G. McMillan『選択権策略完全手冊』第5版：見通し＋ボラで戦略族へ（独自要約・原文なし）。",optionsBookFallbackTitle:"McMillan オプション戦略ハンドブック",optionsGotoResearch:"研究ライブラリの条目へ",optionsUsOnly:"米国のみ",optionsQualityTitle:"原資産の軽い財務チェック",optionsQualityLead:"副次フィルタ：PER、PBR、負債、ROE、売上／利益トレンド。欠落は資料不足。",optionsViewTitle:"オプション観点（McMillan）",optionsViewLead:"公開チェーン：ATM IV、実現ボラ、出来高偏り。戦略族は教育用。",optionsMcmillanFirst:"先にボラ状態と損益形を合わせ、その後でファミリーを選ぶ。",optionsPe:"PER",optionsPb:"PBR",optionsDebt:"負債／資本",optionsRoe:"ROE",optionsRevTrend:"売上トレンド",optionsEarnTrend:"利益トレンド",optionsGate:"品質ゲート",optionsGatePass:"通過",optionsGateWatch:"注視",optionsGateFail:"弱め",optionsGateIncomplete:"資料不足",optionsDataMissing:"資料不足",optionsForwardPe:"予想PER",optionsTrendUp:"上昇 約{pct}%",optionsTrendDown:"低下 約{pct}%",optionsTrendFlat:"横ばい 約{pct}%",optionsAtmIv:"ATM インプライド",optionsHv:"歴史ボラ（約1か月）",optionsIvHv:"IV／HV",optionsVolRegime:"ボラ状態",optionsRegimeIvRich:"IV高め",optionsRegimeIvCheap:"IV安め",optionsRegimeIvFair:"おおむね均衡",optionsRegimeIvOnly:"IVのみ",optionsCallPutVol:"コール／プット出来高",optionsAtmStrike:"近ATM行使価格",optionsExpiry:"満期",optionsSkewPutHeavy:"プット寄り",optionsSkewCallHeavy:"コール寄り",optionsSkewBalanced:"おおむね均衡",optionsEduSetups:"戦略ファミリー（教育）",optionsEduSetupsLead:"見通し＋ボラで選ぶ。緑は現状の IV/HV とよく議論される組（助言ではない）。",optionsSetupCoveredCall:"カバードコール",optionsSetupCoveredCallBody:"株を持ちコールを売る。プレミアムを得るが上昇は頭打ち。",optionsSetupCoveredCallWarn:"利益に天井。株の下落リスクは残る。",optionsSetupProtectivePut:"プロテクティブプット",optionsSetupProtectivePutBody:"株＋プット買い＝保険。下値に床、だが保険料がかかる。",optionsSetupProtectivePutWarn:"保険コストがリターンを削る。IVが高いと高い。",optionsSetupVertical:"バーティカル",optionsSetupVerticalBody:"同満期・異行使価格で損益を枠内に限定。",optionsSetupVerticalWarn:"方向ミスでも損失。ただし上限あり。",optionsSetupCalendar:"カレンダー／ダイアゴナル",optionsSetupCalendarBody:"異満期で時間やボラ変化の見方を表す。",optionsSetupCalendarWarn:"時間とボラに敏感。スポット移動で形が変わる。",optionsSetupStraddle:"ストラドル／ストラングル",optionsSetupStraddleBody:"両側で「大きく動く」か「動き不足」に賭ける。",optionsSetupStraddleWarn:"買いは大きな値動きが必要。売りは両側リスク。",optionsSetupButterfly:"バタフライ",optionsSetupButterflyBody:"中心付近にピン留めを期待。利益ゾーンは狭い。",optionsSetupButterflyWarn:"スイートスポットが薄い。外れると最大損に近い。",optionsSetupVolAligned:"現状ボラとよくセットで語られる",optionsSetupVolNotAligned:"現状ボラとはやや遠い（学習は可）",optionsRiskShape:"損益の形（平易）",optionsNoSetups:"戦略メモなし",optionsPickTicker:"上のティッカーを選んでください",optionsChainBlocked:"オプションチェーンを取得できません",optionsPartialBlocker:"一部フィールド不足",optionsRefreshHow:"更新: ルートで node scripts/fetch-us-options.mjs を実行し build／デプロイ。",optionsLoadError:"オプションスナップショットを読めません（{msg}）",optionsEmpty:"米国サンプルなし — 先に fetch-us-options",optionsGlossaryTitle:"小さな用語集（式なし）",optionsTermDelta:"デルタ（方向感）",optionsDefDelta:"株が動くときオプションがどれだけ付きやすいか。1や−1に近いほど連動が強い。",optionsTermIv:"インプライドボラ IV",optionsDefIv:"市場が織り込む将来の揺れ。高いほどオプションは高くなりやすい。",optionsTermHv:"歴史ボラ HV",optionsDefHv:"直近の実際の値動きの大きさ。IVと比較する。",optionsTermAtm:"ATM（ニアマネー）",optionsDefAtm:"現値に最も近い行使価格。ボラの温度計によく使う。",optionsTermSkew:"出来高の偏り",optionsDefSkew:"コールとプットのどちらが多いか。粗い保険／追撃のヒント。",optionsTermProb:"確率（教育）",optionsDefProb:"「多め／少なめ」の直感のみ。結果保証や個人勝率は出さない。",researchLead:"書籍と論文：タイトル → 要約 → 要点のやり方 → 戦略候補の可否",researchMathGateBanner:"戦略への正式採用は数学ゲート通過が必要（未通過）— 候補のみ",researchMathGate:"数学ゲート",researchMathGateDefault:"数学ゲート未通過",researchFormulas:"プログラム可能な式",researchTakeaways:"要点のやり方",researchNoTakeaways:"要点なし",researchSources:"出典",researchFilters:"フィルター",researchFilterAll:"すべて",researchType:"種類",researchTypeBook:"書籍",researchTypePaper:"論文",researchTypePodcast:"ポッドキャスト",researchMarketBoth:"米＋台",researchStrategy:"戦略候補",researchCandYes:"候補採用",researchCandNo:"不採用",researchCandWatch:"様子見",researchStatusCandidate:"候補",researchStatusDeferred:"保留",researchStatusAdopted:"採用",researchStatusRejected:"除外",researchCounts:"書籍 {books} · 論文 {papers} · Podcast {podcasts} · 表示 {total}",researchEmpty:"この条件に一致する項目はありません",researchNoFormulas:"式なし",researchLoadError:"研究ライブラリを読み込めません（{msg}）",researchShelfFilters:"書棚分類",researchShelfCoreInvesting:"コア投資クラシック",researchShelfValueInvesting:"バリュー投資",researchShelfBusiness:"ビジネス／経営",researchShelfLifePartner:"人生とパートナーの知恵",researchShelfOptions:"オプション／デリバティブ",researchShelfRecentReads:"最近の読書・推薦",researchShelfFiConcepts:"必須のマネーリテラシー",researchShelfMoneyValues:"お金の価値観",researchShelfInvestingBasics:"投資入門",researchShelfAssetAllocation:"資産配分",researchShelfFinancials:"財務諸表分析",researchShelfMarketAnalysis:"投資分析・市場攻略",researchShelfEconAnalysis:"経済分析",researchShelfPsych:"投資心理／ランダム／人間性",researchShelfBiographies:"伝記",researchShelfAdjacent:"その他／隣接",todayPicks:"本日の選株",market:"市場",hot:"相場",marketQuotes:"相場気配",usStock:"米国株",twStock:"台湾株",usList:"米国リスト",twList:"台湾リスト",usTop:"米国 Top",twTop:"台湾 Top",emptyTop:"{market} の Top 候補はありません",ticker:"銘柄",name:"名称",price:"価格",dayPct:"日次%",priorClose:"前日比",priorCloseFull:"前日終値比",pct5d:"5日",pct1m:"約1ヶ月",volRatio:"出来高比",ma:"移動平均",screening:"スクリーニング",reason:"理由",details:"詳細",business:"事業",risk:"リスク",observe:"観察",dataIncomplete:"データ不足",intraday:"場中",taipeiClose:"台北終値",parity:"パリティ",implied:"理論価格",premium:"プレミアム",adsRatio:"交換比率",taiex:"台湾加重 TAIEX",otc:"櫃買",loadError:"データを読み込めません（{msg}）。静的サーバーと data/latest.json を確認してください。",langLabel:"言語",chatUs:"米国",chatTw:"台湾",danmakuFx:"全画面弾幕",chatMore:"その他",nickLabel:"名前",room:"ルーム",lobby:"ロビー",perTicker:"銘柄別",usTickers:"米国銘柄",twTickers:"台湾銘柄",noUsTickers:"米国銘柄なし",noTwTickers:"台湾銘柄なし",chatRoom:"チャット",externalDiscuss:"外部ディスカッション",externalDigest:"外部ダイジェスト",usLobby:"米国ロビー",twLobby:"台湾ロビー",noMessages:"メッセージはまだありません",noComments:"コメントはまだありません",noTickersDiscuss:"この市場で議論できる銘柄がありません",paper:"模擬",paperMissing:"模擬ポートフォリオがありません。npm run paper を実行してください。",paperDisclaimer:"累積模擬口座（{date} 起） · 毎日リセットしません · シグナル即約定 · 実注文ではありません",paperRules:"ルール（市場別独立口座）",paperRuleTw:"台湾元本 NT$3,000,000 · 単元取引",paperRuleUs:"米国元本 US$100,000 · 1株から",paperRuleBuy:"買：リスト·リスク1%·ストップ1.5%·単銘柄≤8% · 即約定",paperRuleSell:"売：損切−3% · 利確+12%半分 · SMA20割れかつ日−2%超 · リスト外かつ損失 · ストップ高翌日−5%",paperTabTw:"台湾口座 · NT$",paperTabUs:"米国口座 · US$",paperBookTw:"台湾帳簿（NT$）",paperBookUs:"米国帳簿（US$）",principal:"元本",cash:"現金",equity:"純資産（ポジション＋現金）",totalPnl:"総損益",totalPnlPct:"総損益％",weekPerf:"週次",monthPerf:"月次",quarterPerf:"四半期",yearPerf:"年次",sinceInception:"開始以来",noTradesToday:"本日この種別の約定はありません（模擬）",noPositions:"保有なし",buy:"買",sell:"売",shares:"株",qtyShares:"株数",positions:"現在のポジション",position:"ポジション",avgCost:"平均単価",mark:"時価",unrealizedPnl:"含み損益",unrealizedPct:"含み％",recentTrades:"約定（直近40）",paperSession:"{date} · {inception} から累積 · シグナル即約定",reasonScreenBuy:"リスト新規",reasonAdd:"追加買い",reasonStop:"損切り",reasonTakeProfit:"利確",reasonMomentumBreak:"モメンタム悪化",reasonOffList:"リスト外",reasonLimitUpChase:"ストップ高追撃解消",stopLoss:"損切り",takeProfit:"利確",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"パフォーマンス",qty:"数量",note:"備考",strategyScreen:"戦略スクリーナー",strategyLead:"米／台ヒットを分けて表示 · データ不足は「不足」",strategyLoading:"戦略を読み込み中…",strategyEmpty:"戦略データがありません。npm run strategies を実行してください。",strategyLoadError:"戦略を読み込めません（{msg}）。npm run strategies を確認してください。",strategyList:"戦略一覧",strategyCat:"カテゴリ",hitCount:"ヒット",hitTitle:"ヒット数",strategyDetails:"詳細 · 戦略説明",conditions:"条件",results:"結果",copyJson:"JSON をコピー",exportCsv:"この戦略を CSV 出力",exportJson:"JSON 出力",copied:"コピー済み",noHitsExport:"本日この戦略のヒット行はありません",incomplete:"不足",hitsTotal:"{n}件",twOnlyHint:"台湾株のみ",hitMarket:"ヒット市場",noHits:"本日ヒットなし",dataInsufficient:"データ不足",calibTitle:"キャリブレーション",incompleteFilters:"未検査フィルター（通過扱いしない）：",sessionTwse:"TWSE session",ohlcvBar:"OHLCV バー",generated:"生成",universeTw:"台湾ユニバース",universeUs:"米国ユニバース",cat精選:"厳選",cat價量:"価格/出来高",cat籌碼:"需給",cat財務:"財務",cat大師:"マスター",cat週期:"サイクル",cat技術:"テクニカル",cat基本:"ファンダ",cat綜合:"総合",addWatchlist:"ウォッチ追加",watchlistAdded:"{ticker} を追加しました",watchlistExists:"{ticker} は登録済み",copyFailed:"コピー失敗",csvDownloaded:"CSV を保存しました",csvBlocked:"ダウンロード阻害 — データURIを開きます",backtestSoon:"バックテスト：未開放",backtestHint:"バックテストエンジン未開放（偽結果なし）",regimeToday:"本日の市場レジーム（米／台は別管理）",psychologyPhase:"心理フェーズ",cycleStance:"サイクル姿勢",liquidityBias:"流動性バイアス",temperatureScore:"市場温度",sizeMult:"サイズ倍率",regimeTags:"レジームタグ",dataGaps:"データ欠落",marketRegime:"市場レジーム",enum_euphoric:"陶酔",enum_late_optimism:"後期楽観",enum_mid_cycle:"中期",enum_cautious_recovery:"慎重な回復",enum_despondent:"絶望",enum_panic:"パニック",enum_defensive:"守備的",enum_selective:"厳選",enum_balanced:"均衡",enum_constructive:"建設的",enum_aggressive:"積極",enum_stabilize_first:"まず安定",enum_risk_off:"リスクオフ",enum_risk_on:"リスクオン",enum_neutral:"中立",logicTitle:"選別ロジック",logicSubtitle:"レジーム→スクリーニング→戦略→降格→理由→サイジング — 監査可能な数式",logicNoRegime:"市場レジーム未取得（次回スキャン待ち）。",logicStep1:"市場レジーム",logicStep1Lead:"米／台を別ダイヤルで先に決め、その後銘柄を選別。Kostolany 位相 × Marks 温度 × 金利流動性。",logicStep1Caption:"位相 → スクリーニング姿勢 → サイズ倍率（STANCE_SIZE_MULT）",logicRatesR2:"R2：^TNX が 20 日で +0.25pp 以上 → 流動性は防御寄り（価格が中立でも）。",logicRatesR3:"R3：利回りが 60 日で −0.25pp 以下 → より積極ダイヤルを許容（陶酔以外）。",logicRatesSeparate:"硬規則：dial_US と dial_TW は分離。単一の「世界ムード」にしない。",logicStep2:"数式スクリーン（A／B）",logicStep2Lead:"RS・モメンタム・SMA・出来高。閾値はサイクル姿勢で変動。",logicScreenA:"スクリーン A · モメンタム／RS",logicScreenABalanced:"均衡：日RS≥0.5pp または日≥1.5%；または5日≥3%；または1月≥6%かつ>SMA20；または両MAで5日≥0／RS≥0。",logicScreenASelective:"厳選：>SMA50 かつ（RS≥0.5 または5日≥3% または1月≥6%かつSMA20）。",logicScreenADefensive:"守備的：SMA20+SMA50、かつ（RS≥0.8 または5日≥4%）、出来高≥1.0（欠損は可）；1月≥12%かつ出来高<0.8 → 除外。",logicScreenAAggressive:"積極／建設的：RS／日／5日／1月を緩和；SMA200 下の firm-hands 可（1月<0かつ出来高≥1.4）。建設的は SMA20 または SMA200 も必要。",logicScreenAStabilize:"まず安定：>SMA20 必須、かつ RS≥1.0pp または出来高≥1.5。",logicScreenB:"スクリーン B · 出来高",logicScreenBVol:"出来高比＝当日／20日平均。下限：守備的≥1.0；積極≥1.1；他≥1.2。",logicScreenBMom:"A 補完：A未達でも1月≥8%かつSMA20+SMA50（まず安定以外）→ A 付与。",logicScore:"順位スコア",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"出来高≥1.2 加点（上限約8×0.6）；<0.4 で −0.5；その後レジームで調整。",logicStep3:"XQ 戦略",logicXqLead:"日次リストと並行：条件ヒット（価格/出来高・需給・財務・マスター・サイクル）。欠落は「不足」—捏造しない。",logicXqPriceVol:"価格/出来高：移動平均ブル、超短期など（OHLCV）。",logicXqFlow:"需給：法人同期など（公開単元閾値）。",logicXqFund:"財務：利益増加、PE／利益率など公開欄。",logicXqMasters:"マスター：リンチ／グレアム／バフェット系の計算可能代理。",logicXqCycle:"サイクル：Kostolany／市場レジームパック（当日の米台ダイヤル）。",logicOpenStrategies:"戦略ページを開く",logicStep4:"順位の降格／加点",logicStep4Lead:"scoreAdjust：薄い高RS、firm-hands、パニック後の安定で加減点。",logicDemoteHot:"守備的／厳選：1月≥8%かつ出来高<0.8 → −2.5；出来高<0.7かつ日>+2% → −1.2；両MA欠で −1.5。",logicDemoteThin:"K5：強いRSでも薄い出来高 → 降格／積極バケット外。",logicPromoteFirm:"aggressive／constructive：弱含み＋出来高増＋>SMA200（firm-hands）→ +2.2；序盤の上昇日出来高 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；>SMA20 なら +1.5。",logicListSize:"リスト長：守備的≈0.55×；厳選≈0.75×；まず安定≈0.45×；積極+2（上限14）；基準12。",logicStep5:"「なぜ」の組み立て",logicStep5Lead:"why 欄は検証済みフィールドの読みやすい結合 — ブラックボックスではない。",logicWhyRs:"日次% + 指数対比（米：S&P；台：TAIEX）pp。",logicWhyMom:"5日% と 約1か月%。",logicWhyVol:"出来高比≥1.2 のときのみ出来高文を追加。",logicWhySma:"SMA20／50／200 の上抜け状態（両MA優先）。",logicWhyRegime:"レジーム注記または姿勢／心理フェーズタグを付記。",logicStep6:"ペーパー・サイジング規律",logicStep6Lead:"ペーパー口座はプロセス検証用 — 実注文ではない。レジームサイズ倍率と固定リスク式で制約。",logicPaperCapital:"元本：台湾 NT$3,000,000（単元）；米国 US$100,000（1株〜）。",logicPaperBuy:"買い：リスト（observeのみは原則回避）；リスク＝資本×1%；ストップ≈価格×1.5%（出来高≥3→2.5%）；1銘柄≤資本8%。",logicPaperSizeMult:"サイズ倍率（0.3–1.35×）で当日の積極度を表示；リスト長と連動。",logicPaperSell:"売り：損切−3%；利確+12%半減；SMA20割れかつ日<−2%；リスト外かつ含み損；ストップ高追撃の翌日−5%。",logicOpenPaper:"ペーパーを開く",logicFootnote:"透明なスクリーニング説明のための合成 — 投資助言ではない。公開の運用代理のみ；著作権保護の本文は複製しない。",backendOff:"ディスカッション未接続",localComments:"サイトコメント",futu:"富途",nickPlaceholder:"ニックネーム（任意）",commentPlaceholder:"コメント",commentInput:"コメントを入力",send:"送信",guest:"ゲスト",noLocalComments:"コメントはまだありません",backendNotConnected:"バックエンド未接続",readFail:"読み込み失敗：{msg}",sendFail:"送信失敗：{msg}",sendFailShort:"送信失敗",noSource:"{source} なし",newsClues:"ニュース／議論の手がかり（コメントではない）",relatedNews:"関連公開ニュース（SNSコメントではない）",messages:"メッセージ",giscusUnset:"Giscus 未設定（repoId / categoryId が必要）。",manualOpen:"手動で開く",noSnippet:"(要約なし)",noTickerData:"この銘柄の{kind}データはありません",viaBackup:"バックアップ出典：{via}",noDigestBlock:"{title} ブロックなし（対象なし／未取得）",socialDigestMarket:"ソーシャル要約の市場",socialDigestTitle:"ソーシャル要約",socialUs:"米国ソース",socialTw:"台湾ソース",externalDigestShort:"外部ダイジェスト",routingNote:"ルーティング：米国 → Reddit＋富途；台湾 → PTT＋Dcard＋Threads",socialUsTab:"米国 Reddit／富途",socialTwTab:"台湾 PTT／Dcard／Threads",socialLoadFail:"ソーシャル要約の取得に失敗：{msg}",futuFull:"富途",condPass:"条件",condFail:"未達",condSkip:"省略",pe:"PER",opMargin:"営業利益率",grossMargin:"粗利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自己売買",maBull:"移動平均ブル",amplitude:"振幅",zhang:"単元",limitUp:"ストップ高",momentum:"モメンタム",metricPrice:"価格",metricDayPct:"日次%",metricVolRatioYday:"出来高比(昨)",metricVolToday:"出来高(単元)",metricDebt:"負債比率%",metricDirector:"役員持株%",metricOpQ:"直近四半期営業利益率%",metricSource:"出典",foreign1d:"外資1日(単元)",trust1d:"投信1日(単元)",dealer1d:"自己1日(単元)",foreign5d:"外資5日(単元)",trust5d:"投信5日(単元)",dealer5d:"自己5日(単元)"},Le={"zh-Hant":Te,en:Wt,"zh-Hans":jt,ja:zt},Gt=/\b(euphoric|late_optimism|mid_cycle|cautious_recovery|despondent|panic|defensive|selective|balanced|constructive|aggressive|stabilize_first|risk_off|risk_on|neutral)\b/g;function G(t){if(t==null||t==="")return s("dataInsufficient");const e=String(t),i=`enum_${e}`,n=e.includes("_")?e.replace(/_/g," "):e;return s(i,n.replace(/\b\w/g,o=>o.toUpperCase()))}function Yt(t){const e=String(t||"").toLowerCase();return["defensive","selective","balanced","constructive","aggressive","stabilize_first"].includes(e)?e.replace(/_/g,"-"):"neutral"}function Xt(t){return t==null||t===""?"":String(t).replace(Gt,e=>G(e))}function s(t,e,i){let n,o=i;e&&typeof e=="object"&&!Array.isArray(e)?o=e:typeof e=="string"&&(n=e);let r=(Le[j]||Le[Be])[t]??Le[Be][t]??n??t;if(o)for(const[m,h]of Object.entries(o))r=r.replace(new RegExp(`\\{${m}\\}`,"g"),String(h));return r}function Zt(){const t=gt.map(e=>`<option value="${e.id}"${e.id===j?" selected":""}>${e.label}</option>`).join("");return`
    <label class="lang-switch" title="${s("langLabel")}">
      <span class="lang-switch-label">${s("langLabel")}</span>
      <select class="lang-select" data-lang-select aria-label="${s("langLabel")}">
        ${t}
      </select>
    </label>`}function Kt(t,e){var n;const i=(n=t==null?void 0:t.querySelector)==null?void 0:n.call(t,"[data-lang-select]");i&&(i.value=j,i.addEventListener("change",()=>{Ut(i.value)}))}function a(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function d(t,e){return a(s(t,e))}const Qt="./data/paper-portfolio.json";function Q(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function we(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function ft(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(B(),{minimumFractionDigits:e,maximumFractionDigits:e})}function yt(t){return t==="USD"?"US$":t==="TWD"?"NT$":""}function ie(t,e){if(t==null||Number.isNaN(t))return"—";const i=e==="TWD"?0:2;return`${yt(e)}${ft(t,i)}`}function ne(t,e){if(t==null||Number.isNaN(t))return"—";const i=e==="TWD"&&t>=100?0:2;return`${yt(e)}${ft(t,i)}`}function bt(t){return{"screen-buy":s("reasonScreenBuy"),add:s("reasonAdd"),stop:s("reasonStop"),"take-profit":s("reasonTakeProfit"),"momentum-break":s("reasonMomentumBreak"),"off-list":s("reasonOffList"),"limit-up-chase":s("reasonLimitUpChase")}[t]||t||""}function ge(t){return t?`
    <div class="paper-win">
      <div class="w-label">${t.sinceInception?d("sinceInception",s("sinceInception")):a(t.label||"")}</div>
      <div class="w-val ${Q(t.pct)}">${we(t.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function Jt(t,e){return t.length?t.map(i=>{var n;return`
      <tr>
        <td><span class="ticker">${a(i.ticker)}</span></td>
        <td class="name-cell">${a(i.name||"")}</td>
        <td class="num">${(n=i.qty)==null?void 0:n.toLocaleString(B())}</td>
        <td class="num">${ne(i.price,e)}</td>
        <td><span class="badge reason ${a(i.reason||"")}">${a(bt(i.reason))}</span></td>
        <td class="why-cell">${a(i.reasonText||"")}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${a(s("noTradesToday"))}</td></tr>`}function es(t,e){return t.length?t.map(i=>{var l;const n=(i.mark-i.avgCost)*i.qty,o=i.avgCost?(i.mark-i.avgCost)/i.avgCost*100:0;return`
      <tr>
        <td><span class="ticker">${a(i.ticker)}</span></td>
        <td class="num">${(l=i.qty)==null?void 0:l.toLocaleString(B())}</td>
        <td class="num">${ne(i.avgCost,e)}</td>
        <td class="num">${ne(i.mark,e)}</td>
        <td class="num ${Q(n)}">${ie(n,e)}</td>
        <td class="num ${Q(o)}">${we(o)}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${a(s("noPositions"))}</td></tr>`}function ts(t,e,i){const n=e.currency,o=s(t==="TW"?"paperBookTw":"paperBookUs"),l=ie(e.startCash,n),r=(i==null?void 0:i.totalPnl)??e.equity-e.startCash,m=(i==null?void 0:i.totalPnlPct)??(e.startCash?(e.equity-e.startCash)/e.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${a(o)}</h3>
      <p class="paper-start">${d("principal",s("principal"))} ${l}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">${a(s("cash"))}</div>
          <div class="k-val">${ie(e.cash,n)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${d("position",s("equity"))}</div>
          <div class="k-val">${ie(e.equity,n)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${a(s("totalPnl"))}</div>
          <div class="k-val ${Q(r)}">${ie(r,n)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${a(s("totalPnlPct"))}</div>
          <div class="k-val ${Q(m)}">${we(m)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${a(s("weekPerf"))}</div>
          ${ge(i==null?void 0:i.week)}
        </div>
        <div>
          <div class="win-name">${a(s("monthPerf"))}</div>
          ${ge(i==null?void 0:i.month)}
        </div>
        <div>
          <div class="win-name">${a(s("quarterPerf"))}</div>
          ${ge(i==null?void 0:i.quarter)}
        </div>
        <div>
          <div class="win-name">${a(s("yearPerf"))}</div>
          ${ge(i==null?void 0:i.year)}
        </div>
      </div>
    </article>`}function ss(t,e){return t.length?t.map(i=>{var o;const n=i.side==="SELL"?s("sell"):s("buy");return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${a(i.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${a(i.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${a(n)} ${(o=i.qty)==null?void 0:o.toLocaleString(B())} ${a(s("shares"))}</div>
            <div style="font-family:var(--mono)">${ne(i.price,e)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${a(i.reason||"")}">${a(bt(i.reason))}</span>
        </div>
        ${i.reasonText?`<p class="lc-why">${a(i.reasonText)}</p>`:""}
      </div>`}).join(""):`<div class="list-card empty-card">${a(s("noTradesToday"))}</div>`}function as(t,e){return t.length?t.map(i=>{var l;const n=(i.mark-i.avgCost)*i.qty,o=i.avgCost?(i.mark-i.avgCost)/i.avgCost*100:0;return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${a(i.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">${a(s("qtyShares"))} ${(l=i.qty)==null?void 0:l.toLocaleString(B())}</div>
          </div>
          <div style="text-align:right">
            <div class="${Q(n)}" style="font-family:var(--mono);font-weight:600">${ie(n,e)}</div>
            <div class="${Q(o)}" style="font-family:var(--mono)">${we(o)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          <span>${a(s("avgCost"))} ${ne(i.avgCost,e)}</span>
          <span>${a(s("mark"))} ${ne(i.mark,e)}</span>
        </div>
      </div>`}).join(""):`<div class="list-card empty-card">${a(s("noPositions"))}</div>`}function Ce(t,e,i){return`
    <div class="paper-table-block">
      <h4>${a(t)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${d("ticker",s("ticker"))}</th>
              <th>${a(s("name"))}</th>
              <th>${a(s("qty"))}</th>
              <th>${a(s("price"))}</th>
              <th>${a(s("reason"))}</th>
              <th>${a(s("note"))}</th>
            </tr>
          </thead>
          <tbody>${Jt(e,i)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${ss(e,i)}</div>
    </div>`}function is(t,e){return`
    <div class="paper-table-block">
      <h4>${a(s("positions"))}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${d("ticker",s("ticker"))}</th>
              <th>${a(s("qty"))}</th>
              <th>${a(s("avgCost"))}</th>
              <th>${a(s("mark"))}</th>
              <th>${d("unrealizedPnl",s("unrealizedPnl"))} $</th>
              <th>${d("unrealizedPnl",s("unrealizedPct"))}</th>
            </tr>
          </thead>
          <tbody>${es(t,e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${as(t,e)}</div>
    </div>`}function Xe(t,e,i,n,o,l){if(!e)return"";const r=e.currency,m=[...e.trades||[]].sort((u,v)=>u.date<v.date?1:u.date>v.date?-1:0),h=m.filter(u=>u.date===n),p=h.filter(u=>u.side==="BUY"),b=h.filter(u=>u.side==="SELL"),k=m.slice(0,40),T=l;return`
    <div class="paper-panel ${o?"active":""}" id="paper-panel-${t}" role="tabpanel">
      ${ts(t,e,i)}
      <p class="paper-session-note">${a(s("paperSession",{date:n||"—",inception:T}))}</p>
      ${Ce(`${s("buy")} ${n||""}`,p,r)}
      ${Ce(`${s("sell")} ${n||""}`,b,r)}
      ${is(e.positions||[],r)}
      ${Ce(s("recentTrades"),k,r)}
    </div>`}function ns(t){var r,m;if(!t||!t.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${d("paperTrade",s("paper"))}</h2>
        <p class="paper-missing">${a(s("paperMissing"))}</p>
      </section>`;const e=t.books.TW,i=t.books.US;let o=(t.asOf||"").slice(0,10);try{o=new Date(t.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const l=t.startDate||(e==null?void 0:e.startDate)||(i==null?void 0:i.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${d("paperTrade",s("paper"))}</h2>
      <p class="paper-disclaimer" role="note">
        ${a(s("paperDisclaimer",{date:l}))}
      </p>
      <details class="paper-rules">
        <summary>${a(s("paperRules"))}</summary>
        <ul>
          <li>${a(s("paperRuleTw"))}</li>
          <li>${a(s("paperRuleUs"))}</li>
          <li>${a(s("paperRuleBuy"))}</li>
          <li>${a(s("paperRuleSell"))}</li>
        </ul>
      </details>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${a(s("paperTabTw"))}</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${a(s("paperTabUs"))}</button>
      </div>
      ${Xe("TW",e,(r=t.metrics)==null?void 0:r.TW,o,!0,l)}
      ${Xe("US",i,(m=t.metrics)==null?void 0:m.US,o,!1,l)}
    </section>`}function os(t){const e=t.querySelectorAll(".paper-tab-btn");e.forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.paperTab;e.forEach(o=>{const l=o.dataset.paperTab===n;o.classList.toggle("active",l),o.setAttribute("aria-selected",l?"true":"false")}),t.querySelectorAll(".paper-panel").forEach(o=>{o.classList.toggle("active",o.id===`paper-panel-${n}`)})})})}async function rs(){try{const t=await fetch(Qt);return t.ok?await t.json():null}catch{return null}}const St="ss-danmaku-enabled";function $t(){try{return localStorage.getItem(St)==="1"}catch{return!1}}function ls(t){const e=!!t;try{localStorage.setItem(St,e?"1":"0")}catch{}return kt(document),e}function kt(t=document){const e=$t(),i=t.querySelector("#ss-danmaku-layer");return i&&(i.classList.toggle("is-off",!e),i.setAttribute("aria-hidden",e?"false":"true"),e||i.querySelectorAll(".ss-danmaku-item").forEach(n=>n.remove())),t.querySelectorAll("[data-danmaku-toggle]").forEach(n=>{n&&n.type==="checkbox"&&(n.checked=e)}),e}function cs(t=document){kt(t);const e=i=>{const n=i.target;!n||n.type!=="checkbox"||!n.matches||!n.matches("[data-danmaku-toggle]")||ls(!!n.checked)};return t.addEventListener("change",e),{destroy(){t.removeEventListener("change",e)}}}const Ze={},Ie="ss-chat-nick",Re=()=>s("backendOff");function ds(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&Ze?Ze:{},i=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),n=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:i,anon:n}}function V(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ke(){try{return String(localStorage.getItem(Ie)||"").trim().slice(0,24)}catch{return""}}function Me(t){try{const e=String(t||"").trim().slice(0,24);e?localStorage.setItem(Ie,e):localStorage.removeItem(Ie)}catch{}}function ps(t,e){const i=String(t||"").trim().toLowerCase(),n=String(e||"").trim().toLowerCase();return!i||!n?!1:i===n}function us(t){try{const e=new Date(t),i=new Date;return e.getFullYear()===i.getFullYear()&&e.getMonth()===i.getMonth()&&e.getDate()===i.getDate()?e.toLocaleTimeString(B(),{hour:"2-digit",minute:"2-digit",hour12:!1}):e.toLocaleString(B(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}function gs(t,e){const i={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(n,o=80){const l=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(n)}&order=created_at.asc&limit=${o}`,r=await fetch(l,{headers:i});if(!r.ok)throw new Error(`comments select ${r.status}`);return r.json()},async insert(n){const o=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:i,body:JSON.stringify(n)});if(!o.ok){const l=await o.text();throw new Error(`comments insert ${o.status}: ${l}`)}return o.json()}}}function ms(){return'<svg class="chat-send-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.4 20.4 20.85 12 3.4 3.6l.1 6.55L14.5 12 3.5 13.85l-.1 6.55z"/></svg>'}function hs(t,e,i={}){if(!t||!e)return{ok:!1,destroy(){}};const n=i.config||globalThis.STOCK_SOCIAL_CONFIG||{},o=String(i.market||"US").toUpperCase()==="TW"?"TW":"US",{url:l,anon:r}=ds(n),m=Math.min(n.commentMaxLen||500,i.maxLen||200),h=n.postCooldownMs||4e3,p=i.title||e,b=i.emptyLine||s("noMessages"),k=i.danmakuLayer||document.querySelector("#ss-danmaku-layer"),T=()=>$t();t.classList.add("chat-panel"),t.dataset.market=o,t.dataset.ticker=e,t.setAttribute("role","region"),t.setAttribute("aria-label",p);const u=Ke();t.innerHTML=`
    <div class="chat-status" aria-live="polite"></div>
    <div class="chat-messages" role="log" aria-label="${V(s("messages"))}" tabindex="0"></div>
    <form class="chat-composer" autocomplete="off">
      <div class="chat-nick-row">
        <label class="chat-nick-label" for="chat-nick-input">${V(s("nickLabel"))}</label>
        <input id="chat-nick-input" class="chat-nick" maxlength="24" placeholder="${V(s("nickPlaceholder"))}" value="${V(u)}" autocomplete="nickname" />
      </div>
      <div class="chat-compose-row">
        <input class="chat-body" type="text" maxlength="${m}" placeholder="${V(s("commentInput"))}" required autocomplete="off" enterkeyhint="send" />
        <button type="submit" class="chat-send" aria-label="${V(s("send"))}" title="${V(s("send"))}">${ms()}<span class="chat-send-text">${V(s("send"))}</span></button>
      </div>
    </form>
  `;const v=t.querySelector(".chat-status"),L=t.querySelector(".chat-messages"),x=t.querySelector(".chat-composer"),M=x.querySelector(".chat-nick"),D=x.querySelector(".chat-body"),Y=x.querySelector(".chat-send");let U=new Set,S=!1,g=!1;function f(P){if(!k||!T())return;const C=document.createElement("div");C.className="ss-danmaku-item",C.textContent=P,C.style.top=`${8+Math.random()*42}vh`,C.style.animationDuration="12000ms",k.appendChild(C),window.setTimeout(()=>C.remove(),12200)}function y(P=!1){const C=L.scrollHeight-L.scrollTop-L.clientHeight<120;(P||C)&&(L.scrollTop=L.scrollHeight)}function E(P){const C=(M.value||Ke()||"").trim();if(!P.length){L.innerHTML=`<div class="chat-empty-state"><p>${V(b)}</p></div>`;return}L.innerHTML=P.map(I=>{const W=ps(I.nickname,C),Z=W?"own":"other",xe=V(I.nickname||s("guest")),pe=V(I.body||""),ue=V(us(I.created_at));return`<article class="chat-bubble chat-bubble--${Z}" data-id="${V(I.id)}">
          ${W?"":`<div class="chat-bubble-nick">${xe}</div>`}
          <div class="chat-bubble-body">${pe}</div>
          <div class="chat-bubble-meta">${ue}</div>
        </article>`}).join("")}if(!l||!r)return v.textContent=Re(),v.classList.add("is-warn"),x.querySelectorAll("input,button").forEach(P=>{P.disabled=!0}),L.innerHTML=`<div class="chat-empty-state"><p>${V(b)}</p></div>`,{ok:!1,reason:"no-config",market:o,destroy(){}};const $=gs(l,r);v.textContent="",v.classList.remove("is-warn");async function w(P=!1,C=!1){if(!g)try{const I=await $.list(e,80);E(I),y(C||!U.size);for(const W of I)U.has(W.id)||(U.add(W.id),P&&f(`${W.nickname}: ${W.body}`));U.size>200&&(U=new Set([...U].slice(-100))),v.classList.contains("is-warn")&&v.textContent===Re()&&(v.textContent="",v.classList.remove("is-warn"))}catch{v.textContent=Re(),v.classList.add("is-warn")}}M.addEventListener("change",()=>{Me(M.value),L.querySelectorAll(".chat-bubble").length&&w(!1,!1)}),M.addEventListener("blur",()=>Me(M.value)),x.addEventListener("submit",async P=>{if(P.preventDefault(),S)return;const C=(M.value||s("guest")).trim().slice(0,24)||s("guest");Me(M.value);const I=(D.value||"").trim().slice(0,m);if(I){S=!0,Y.disabled=!0;try{await $.insert({ticker:e,body:I,nickname:C}),D.value="",await w(!0,!0),D.focus()}catch{v.textContent=s("sendFailShort"),v.classList.add("is-warn")}finally{window.setTimeout(()=>{S=!1,Y.disabled=!1},h)}}}),D.addEventListener("keydown",P=>{P.key==="Enter"&&!P.shiftKey&&(P.preventDefault(),x.requestSubmit())}),w(!1,!0);const q=window.setInterval(()=>w(!0,!1),n.pollIntervalMs||8e3);return{ok:!0,market:o,ticker:e,destroy(){g=!0,window.clearInterval(q)}}}const Qe={},vs=()=>s("backendOff");function fs(){return[{id:"local",label:s("localComments")},{id:"reddit",label:"Reddit"},{id:"futu",label:s("futu")}]}function ys(){return[{id:"local",label:s("localComments")},{id:"ptt",label:"PTT"},{id:"dcard",label:"Dcard"},{id:"threads",label:"Threads"}]}function bs(t,e){const i=String(e||"").toUpperCase();return i==="US"||i==="TW"?i:String(t||"").toUpperCase().endsWith(".TW")?"TW":"US"}function Ss(t){return t==="TW"?ys():fs()}function $s(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&Qe?Qe:{},i=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),n=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:i,anon:n}}function R(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ks(t,e){const i={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(n,o=50){const l=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(n)}&order=created_at.asc&limit=${o}`,r=await fetch(l,{headers:i});if(!r.ok)throw new Error(`comments select ${r.status}`);return r.json()},async insert(n){const o=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:i,body:JSON.stringify(n)});if(!o.ok){const l=await o.text();throw new Error(`comments insert ${o.status}: ${l}`)}return o.json()}}}function Ts(t,e,i){if(!t||!i)return null;const n=t[e];return Array.isArray(n)&&n.find(o=>String(o.ticker).toUpperCase()===String(i).toUpperCase())||null}function ws(t,e,{futuMode:i=!1}={}){if(!t)return`<p class="ss-empty">${R(s("noSource",{source:e}))}</p>`;const n=[];t.blocker&&n.push(`<p class="ss-digest-blocker">⚠ ${R(t.blocker)}</p>`);const o=t.items||[],l=t.newsRelated||[];if(o.length&&n.push(o.map(r=>{const m=r.url?R(r.url):"#",h=r.score!=null?`<span class="ss-score">▲ ${R(r.score)}</span>`:"",p=r.author?`@${R(r.author)}`:"";return`<article class="ss-digest-item">
            <a href="${m}" target="_blank" rel="noopener noreferrer">${R(r.snippet||r.title||"(無摘要)")}</a>
            <div class="ss-digest-meta">${h} ${p}</div>
          </article>`}).join("")),l.length){const r=s(i?"newsClues":"relatedNews");n.push(`<p class="ss-digest-sub">${r}</p>`),n.push(l.map(m=>`<article class="ss-digest-item">
            <a href="${m.url?R(m.url):"#"}" target="_blank" rel="noopener noreferrer">${R(m.snippet||"(無標題)")}</a>
          </article>`).join(""))}return Array.isArray(t.manualUrls)&&t.manualUrls.length&&!o.length&&n.push('<p class="ss-digest-sub">手動開啟</p>'+t.manualUrls.slice(0,4).map(r=>`<article class="ss-digest-item"><a href="${R(r)}" target="_blank" rel="noopener noreferrer">${R(r)}</a></article>`).join("")),!o.length&&!l.length&&!t.blocker&&n.push(`<p class="ss-empty">暫無 ${R(e)} 資料</p>`),n.join("")||'<p class="ss-empty">暫無資料</p>'}function Ps(t,e,i={}){if(!t||!e)return{ok:!1};const n=i.config||globalThis.STOCK_SOCIAL_CONFIG||{},o=i.digest||null,l=bs(e,i.market||t.getAttribute("data-market")),r=Ss(l),{url:m,anon:h}=$s(n),p=n.commentMaxLen||500,b=n.postCooldownMs||4e3,k=!!i.bare,T="",u=r.map(($,w)=>`<button type="button" class="ss-src-tab${w===0?" active":""}" data-src="${$.id}" role="tab" aria-selected="${w===0?"true":"false"}">${$.label}</button>`).join(""),v=r.filter($=>$.id!=="local").map($=>`<div class="ss-src-panel" data-panel="${$.id}" role="tabpanel" hidden></div>`).join("");t.classList.add("ss-thread"),t.dataset.market=l;const L=`
      <div class="ss-src-tabs" role="tablist" aria-label="${R(e)}">${u}</div>
      <div class="ss-src-panels">
        <div class="ss-src-panel active" data-panel="local" role="tabpanel">
          <div class="ss-thread-status"></div>
          <ul class="ss-thread-list"></ul>
          <form class="ss-thread-form ss-composer">
            <input class="ss-nick" maxlength="24" placeholder="${R(s("nickPlaceholder"))}" autocomplete="nickname" />
            <textarea class="ss-body" maxlength="${p}" rows="2" placeholder="${R(s("commentPlaceholder"))}" required></textarea>
            <button type="submit">${R(s("send"))}</button>
          </form>
        </div>
        ${v}
      </div>`;t.innerHTML=k?`<div class="ss-thread-bare" data-ticker="${R(e)}">${L}</div>`:`<details class="ss-thread-details"${T}>
      <summary>${R(e)}</summary>
      ${L}
    </details>`;const x=t.querySelector(".ss-thread-status"),M=t.querySelector(".ss-thread-list"),D=t.querySelector(".ss-thread-form"),Y={ptt:["ptt","PTT",!1],dcard:["dcard","Dcard",!1],threads:["threads","Threads",!1],reddit:["reddit","Reddit",!1],futu:["futu",s("futu"),!0]};for(const $ of r){if($.id==="local")continue;const w=Y[$.id];if(!w)continue;const[q,P,C]=w,I=t.querySelector(`[data-panel="${$.id}"]`);I&&(I.innerHTML=ws(Ts(o,q,e),P,{futuMode:C}))}const U=t.querySelectorAll(".ss-src-tab"),S=t.querySelectorAll(".ss-src-panel");if(U.forEach($=>{$.addEventListener("click",()=>{const w=$.dataset.src;U.forEach(q=>{const P=q.dataset.src===w;q.classList.toggle("active",P),q.setAttribute("aria-selected",P?"true":"false")}),S.forEach(q=>{const P=q.dataset.panel===w;q.classList.toggle("active",P),q.hidden=!P})})}),!m||!h)return x.textContent=vs(),x.className="ss-thread-status is-warn",D.querySelectorAll("input,textarea,button").forEach($=>{$.disabled=!0}),M.innerHTML=`<li class="ss-empty">${R(s("backendNotConnected"))}</li>`,{ok:!1,reason:"no-config",market:l};const g=ks(m,h);x.textContent="";let f=!1;async function y(){try{const $=await g.list(e);if(!$.length){M.innerHTML=`<li class="ss-empty">${R(s("noLocalComments"))}</li>`;return}M.innerHTML=$.map(w=>`<li><strong>${R(w.nickname)}</strong> ${R(w.body)}<span class="meta">${R(new Date(w.created_at).toLocaleString(B(),{hour12:!1}))}</span></li>`).join("")}catch($){x.textContent=s("readFail",{msg:$.message}),x.className="ss-thread-status is-warn"}}D.addEventListener("submit",async $=>{if($.preventDefault(),f)return;const w=(D.querySelector(".ss-nick").value||s("guest")).trim().slice(0,24)||s("guest"),q=(D.querySelector(".ss-body").value||"").trim().slice(0,p);if(!q)return;f=!0;const P=D.querySelector("button");P.disabled=!0;try{await g.insert({ticker:e,body:q,nickname:w}),D.querySelector(".ss-body").value="",await y()}catch(C){x.textContent=s("sendFail",{msg:C.message}),x.className="ss-thread-status is-warn"}finally{window.setTimeout(()=>{f=!1,P.disabled=!1},b)}}),y();const E=window.setInterval(y,n.pollIntervalMs||1e4);return{ok:!0,market:l,destroy(){window.clearInterval(E)}}}function xs(t=document,e={}){const i=t.querySelectorAll("[data-ticker-comments]"),n=[];return i.forEach(o=>{const l=o.getAttribute("data-ticker-comments")||o.dataset.ticker,r=o.getAttribute("data-market")||void 0;l&&n.push(Ps(o,l,{...e,market:r}))}),n}function As(t,e){if(!t||!e||t.querySelector("script[data-giscus], iframe.giscus-frame"))return;const i=document.createElement("script");i.src="https://giscus.app/client.js",i.async=!0,i.crossOrigin="anonymous",i.setAttribute("data-giscus","1"),i.setAttribute("data-repo",e.repo||""),i.setAttribute("data-repo-id",e.repoId||""),i.setAttribute("data-category",e.category||"General"),i.setAttribute("data-category-id",e.categoryId||""),i.setAttribute("data-mapping",e.mapping==="pathname"?"pathname":"specific"),i.setAttribute("data-term",e.term||"site-discussion"),i.setAttribute("data-strict","0"),i.setAttribute("data-reactions-enabled","1"),i.setAttribute("data-emit-metadata","0"),i.setAttribute("data-input-position","bottom"),i.setAttribute("data-theme",e.theme||"dark"),i.setAttribute("data-lang",e.lang||"zh-TW"),t.appendChild(i)}function Ls(t="#ss-giscus",e={}){const i=document.querySelector(t);if(!i)return{ok:!1,reason:"missing"};const o=(e.config||globalThis.STOCK_SOCIAL_CONFIG||{}).giscus||{};if(!o.enabled||!o.repoId||!o.categoryId)return i.innerHTML=`<p class="ss-chat-status is-warn">${R(s("giscusUnset"))}</p>`,{ok:!1,reason:"no-config"};const l=i.querySelector(".ss-giscus-host")||i;return As(l,{...o,term:o.term||"site-discussion"}),{ok:!0}}function A(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Cs(t){const e=t.manualUrls||[];return e.length?`<p class="ss-digest-sub">${A(s("manualOpen"))}</p>`+e.slice(0,4).map(i=>`<article class="ss-digest-item"><a href="${A(i)}" target="_blank" rel="noopener noreferrer">${A(i)}</a></article>`).join(""):""}function Je(t){const e=t.score!=null?`<span class="ss-score">▲ ${A(t.score)}</span>`:"",i=t.author?`@${A(t.author)}`:"",n=t.created?A(new Date(t.created).toLocaleString(B(),{hour12:!1})):t.date?A(t.date):"",o=t.via?`<span class="ss-via">${A(t.via)}</span>`:"";return`<article class="ss-digest-item">
    <a href="${t.url?A(t.url):"#"}" target="_blank" rel="noopener noreferrer">${A(t.snippet||t.title||s("noSnippet"))}</a>
    <div class="ss-digest-meta">${e} ${i} ${n} ${o}</div>
  </article>`}function Rs(t,e,{futuMode:i=!1}={}){var h;const n=t.blocker?`<p class="ss-digest-blocker">⚠ ${A(t.blocker)}</p>`:"",o=t.items||[],l=t.newsRelated||[];let r="";if(o.length&&(r+=o.map(Je).join("")),l.length){const p=s(i?"newsClues":"relatedNews");r+=`<p class="ss-digest-sub">${p}</p>`+l.map(Je).join("")}!o.length&&((h=t.manualUrls)!=null&&h.length)&&(r+=Cs(t)),r||(r=`<p class="ss-empty">${A(s("noTickerData",{kind:e}))}</p>`);const m=t.via&&t.via!=="reddit.com"?`<p class="ss-digest-via-note">${A(s("viaBackup",{via:t.via}))}</p>`:"";return`<section class="ss-digest-ticker" data-ticker="${A(t.ticker)}">
    <h4>${A(t.ticker)}</h4>
    ${n}
    ${m}
    ${r}
  </section>`}function oe(t,e,i,n={}){const o=(e||[]).map(l=>Rs(l,i,n)).join("");return`<div class="ss-digest-col">
    <h4 class="ss-digest-col-title">${A(t)}</h4>
    ${o||`<p class="ss-empty">${A(s("noDigestBlock",{title:t}))}</p>`}
  </div>`}async function Tt(t){const e=globalThis.STOCK_SOCIAL_CONFIG||{},i=t||e.socialDigestUrl||"./data/social-digest.json",n=await fetch(i,{cache:"no-cache"});if(!n.ok)throw new Error(`social-digest ${n.status}`);return n.json()}function Ms(t,e){if(!e)return;const i=t.asOf?new Date(t.asOf).toLocaleString(B(),{hour12:!1}):"—";(t.notes||[]).map(p=>`<li>${A(p)}</li>`).join(""),t.routing&&`${A(s("routingNote"))}`;const n=`
    <div class="ss-digest-market" data-market-panel="US">
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${oe("Reddit",t.reddit,"Reddit")}
        ${oe(s("futuFull"),t.futu,s("futu"),{futuMode:!0})}
      </div>
    </div>`,o=`
    <div class="ss-digest-market" data-market-panel="TW" hidden>
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${oe("PTT",t.ptt,"PTT")}
        ${oe("Dcard",t.dcard,"Dcard")}
        ${oe("Threads",t.threads,"Threads")}
      </div>
    </div>`,l=(t.reddit||[]).length||(t.futu||[]).length,r=(t.ptt||[]).length||(t.dcard||[]).length||(t.threads||[]).length,m=l?"US":r?"TW":"US";e.innerHTML=`
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>${A(s("externalDigestShort"))}</h3>
        <p class="ss-digest-asof">${A(i)}</p>
      </header>
      <div class="ss-digest-market-tabs" role="tablist" aria-label="${A(s("socialDigestMarket"))}">
        <button type="button" class="ss-mkt-tab${m==="US"?" active":""}" data-market="US" role="tab" aria-selected="${m==="US"}">${A(s("socialUsTab"))}</button>
        <button type="button" class="ss-mkt-tab${m==="TW"?" active":""}" data-market="TW" role="tab" aria-selected="${m==="TW"}">${A(s("socialTwTab"))}</button>
      </div>
      ${n}
      ${o}
    </div>
  `,e.querySelectorAll("[data-market-panel]").forEach(p=>{const b=p.getAttribute("data-market-panel")===m;p.hidden=!b});const h=e.querySelectorAll(".ss-mkt-tab");h.forEach(p=>{p.addEventListener("click",()=>{const b=p.getAttribute("data-market");h.forEach(k=>{const T=k===p;k.classList.toggle("active",T),k.setAttribute("aria-selected",T?"true":"false")}),e.querySelectorAll("[data-market-panel]").forEach(k=>{k.hidden=k.getAttribute("data-market-panel")!==b})})})}async function Ds(t="#ss-social-digest",e){const i=document.querySelector(t);if(!i)return{ok:!1};try{const n=await Tt(e);return Ms(n,i),{ok:!0,data:n}}catch(n){return i.innerHTML=`<p class="ss-digest-blocker">${A(s("socialLoadFail",{msg:n.message}))}</p>`,{ok:!1,error:n}}}const wt={defensive:.5,selective:.8,balanced:1,constructive:1.1,aggressive:1.35,stabilize_first:.3},Es={euphoric:"defensive",late_optimism:"selective",mid_cycle:"balanced",cautious_recovery:"constructive",despondent:"aggressive",panic:"stabilize_first"};function Pt(t){return t==null||Number.isNaN(t)?"—":`${Number(t).toFixed(2)}×`}function Ns(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${Number(t).toFixed(2)}`}function _e(t){if(!t)return`<span class="stance-badge stance-neutral">${a(s("dataInsufficient"))}</span>`;const e=Yt(t),i=G(t);return`<span class="stance-badge stance-${e}">${a(i)}</span>`}function me(t,e){return`<div class="logic-metric">
    <span class="k">${a(t)}</span>
    <span class="v">${e}</span>
  </div>`}function Se(t,e,{detailed:i=!1}={}){if(!e)return"";const n=e.incomplete?" incomplete":"",o=e.psychologyPhase,l=e.cycleStance,r=e.liquidityBias,m=o?G(o):s("dataInsufficient"),h=r?G(r):s("dataInsufficient"),p=Ns(e.temperatureScore),b=Pt(e.sizeMult??wt[l]),k=Array.isArray(e.dataGaps)&&e.dataGaps.length?`<div class="regime-gaps">${a(s("dataGaps"))}: ${a(e.dataGaps.slice(0,5).join(", "))}${e.dataGaps.length>5?"…":""}</div>`:"",T=i&&Array.isArray(e.implications)&&e.implications.length?`<ul class="logic-impl">${e.implications.slice(0,3).map(v=>`<li>${a(Xt(v))}</li>`).join("")}</ul>`:"",u=i?`<div class="logic-metrics" role="list">
        ${me(s("psychologyPhase"),a(m))}
        ${me(s("liquidityBias"),a(h))}
        ${me(s("temperatureScore"),a(p))}
        ${me(s("sizeMult"),a(b))}
      </div>`:`<div class="regime-meta">
        <span>${a(s("psychologyPhase"))} <strong>${a(m)}</strong></span>
        <span>${a(s("liquidityBias"))} <strong>${a(h)}</strong></span>
      </div>`;return`<div class="regime-chip${i?" logic-regime-chip":""}${n}">
    <div class="regime-chip-top">
      <div class="label">${a(t)} · ${a(s("marketRegime"))}</div>
      ${_e(l)}
    </div>
    ${u}
    ${T}
    ${k}
  </div>`}function Bs(t){return!t||!t.us&&!t.tw?`<p class="logic-muted">${a(s("logicNoRegime"))}</p>`:`<div class="regime-strip logic-regime-live" aria-label="${a(s("regimeToday"))}">
    ${Se("US",t.us,{detailed:!0})}
    ${Se("TW",t.tw,{detailed:!0})}
  </div>`}function qs(t){return!t||!t.us&&!t.tw?"":`<div class="regime-strip" aria-label="${a(s("marketRegime"))}">
    ${Se("US",t.us,{detailed:!1})}
    ${Se("TW",t.tw,{detailed:!1})}
  </div>`}function ee(t,e,i){return`<section class="logic-step" id="logic-step-${t}">
    <header class="logic-step-head">
      <span class="logic-step-num" aria-hidden="true">${t}</span>
      <h3 class="logic-step-title">${a(e)}</h3>
    </header>
    <div class="logic-step-body">${i}</div>
  </section>`}function Is(t){return`<div class="logic-table-wrap"><table class="logic-table">
    <tbody>
      ${t.map(([e,i])=>`<tr><th scope="row">${a(e)}</th><td>${i}</td></tr>`).join("")}
    </tbody>
  </table></div>`}function K(t){return`<ul class="logic-bullets">${t.map(e=>`<li>${e}</li>`).join("")}</ul>`}function Os(t){const e=t==null?void 0:t.marketRegime,i=Object.entries(Es).map(([k,T])=>[G(k),`${_e(T)} <span class="logic-mult">${a(Pt(wt[T]))}</span>`]),n=K([a(s("logicScreenABalanced")),a(s("logicScreenASelective")),a(s("logicScreenADefensive")),a(s("logicScreenAAggressive")),a(s("logicScreenAStabilize"))]),o=K([a(s("logicScreenBVol")),a(s("logicScreenBMom"))]),l=K([a(s("logicScoreFormula")),a(s("logicScoreSma")),a(s("logicScoreVol"))]),r=K([a(s("logicDemoteHot")),a(s("logicDemoteThin")),a(s("logicPromoteFirm")),a(s("logicDemotePanic"))]),m=K([a(s("logicWhyRs")),a(s("logicWhyMom")),a(s("logicWhyVol")),a(s("logicWhySma")),a(s("logicWhyRegime"))]),h=`
    <p class="logic-lead">${a(s("logicXqLead"))}</p>
    ${K([a(s("logicXqPriceVol")),a(s("logicXqFlow")),a(s("logicXqFund")),a(s("logicXqMasters")),a(s("logicXqCycle"))])}
    <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="strategies">${a(s("logicOpenStrategies"))}</button></p>
  `,p=K([a(s("logicPaperCapital")),a(s("logicPaperBuy")),a(s("logicPaperSizeMult")),a(s("logicPaperSell"))]),b=K([a(s("logicRatesR2")),a(s("logicRatesR3")),a(s("logicRatesSeparate"))]);return`
    <header class="view-header">
      <h2 class="view-title">${a(s("logicTitle"))}</h2>
      <p class="logic-subtitle">${a(s("logicSubtitle"))}</p>
    </header>

    <section class="logic-live section" aria-labelledby="logic-live-h">
      <h3 id="logic-live-h" class="section-title">${a(s("regimeToday"))}</h3>
      ${Bs(e)}
    </section>

    <div class="logic-pipeline">
      ${ee(1,s("logicStep1"),`
        <p class="logic-lead">${a(s("logicStep1Lead"))}</p>
        ${Is(i)}
        <p class="logic-caption">${a(s("logicStep1Caption"))}</p>
        ${b}
      `)}

      ${ee(2,s("logicStep2"),`
        <p class="logic-lead">${a(s("logicStep2Lead"))}</p>
        <h4 class="logic-h4">${a(s("logicScreenA"))}</h4>
        ${n}
        <h4 class="logic-h4">${a(s("logicScreenB"))}</h4>
        ${o}
        <h4 class="logic-h4">${a(s("logicScore"))}</h4>
        ${l}
      `)}

      ${ee(3,s("logicStep3"),h)}

      ${ee(4,s("logicStep4"),`
        <p class="logic-lead">${a(s("logicStep4Lead"))}</p>
        ${r}
        <p class="logic-caption">${a(s("logicListSize"))}</p>
      `)}

      ${ee(5,s("logicStep5"),`
        <p class="logic-lead">${a(s("logicStep5Lead"))}</p>
        ${m}
      `)}

      ${ee(6,s("logicStep6"),`
        <p class="logic-lead">${a(s("logicStep6Lead"))}</p>
        ${p}
        <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="paper">${a(s("logicOpenPaper"))}</button></p>
      `)}
    </div>

    <p class="logic-footnote" role="note">${a(s("logicFootnote"))}</p>
  `}const xt="./data/strategy-screener.json",et="jml-watchlist",Oe=new Set(["inst-sync","margin-up","earnings-steady","low-pe-small","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short","ma-tangle-break","new-high-momentum","short-roc","day-up-5","pct5d-10","near-high","chip-main-force","chip-branch","chip-large-holders","gooaye-tw-semicon-chain","gooaye-tw-vol-breakout"]),tt=["大師","基本","籌碼","技術","綜合","週期"],Ue={精選:"綜合",價量:"技術",財務:"基本",技術:"技術",基本:"基本",籌碼:"籌碼",大師:"大師",週期:"週期",綜合:"綜合"};function Hs(t){const e=Ue[t]||t;return s(`cat${e}`,e)}function Fs(t){try{return new Date(t).toLocaleString(B(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return t||"—"}}function c(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(B(),{minimumFractionDigits:e,maximumFractionDigits:e})}function O(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function H(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(2)}%`}function st(t){const e=t.categoryGroup||t.category||"綜合";return Ue[e]||e}function _s(t){let e=a(t);return e=e.replace(/本益比/g,()=>d("pe",s("pe"))),e=e.replace(/營益率/g,()=>d("opMargin",s("opMargin"))),e=e.replace(/毛利率/g,()=>d("grossMargin",s("grossMargin"))),e=e.replace(/外資/g,()=>d("foreignInv",s("foreignInv"))),e=e.replace(/投信/g,()=>d("trustInv",s("trustInv"))),e=e.replace(/自營商/g,()=>d("dealerInv",s("dealerInv"))),e=e.replace(/均線多頭/g,()=>d("maBull",s("maBull"))),e=e.replace(/RSI/g,()=>d("rsi",s("rsi"))),e=e.replace(/振幅/g,()=>d("amplitude",s("amplitude"))),e=e.replace(/(\d+)\s*張/g,(i,n)=>`${n}${d("zhang",s("zhang"))}`),e=e.replace(/＞\s*(\d+)\s*張/g,(i,n)=>`＞ ${n}${d("zhang",s("zhang"))}`),e}function Us(t){return t==="skip"?`<span class="xq-cond-st skip">${a(s("condSkip"))}</span>`:t==="fail"?`<span class="xq-cond-st fail">${a(s("condFail"))}</span>`:`<span class="xq-cond-st pass">${a(s("condPass"))}</span>`}function Vs(t){switch(t){case"ma-bull":return[{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>H(e.dayPct),cls:e=>O(e.dayPct)},{key:"sma5",label:"SMA5",fmt:e=>c(e.sma5)},{key:"sma10",label:"SMA10",fmt:e=>c(e.sma10)},{key:"sma20",label:"SMA20",fmt:e=>c(e.sma20)},{key:"sma60",label:"SMA60",fmt:e=>c(e.sma60)},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?c(e.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:s("metricVolToday"),fmt:e=>e.volTodayZhang!=null?c(e.volTodayZhang,1):e.volToday!=null?c(e.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:d("pe",s("pe")),fmt:e=>c(e.pe,2),rawLabel:!0},{key:"revGrowth2yAvgPct",label:"2年營收成長均%",fmt:e=>e.revGrowth2yAvgPct!=null?c(e.revGrowth2yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?c(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?c(e.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?c(e.avgVol5Zhang,1):"—"},{key:"dayPct",label:s("metricDayPct"),fmt:e=>H(e.dayPct),cls:e=>O(e.dayPct)}];case"chip-main-force":return[{key:"instNet1dZhang",label:"法人1日(張)",fmt:e=>c(e.instNet1dZhang,1)},{key:"instNet5dZhang",label:"法人5日(張)",fmt:e=>c(e.instNet5dZhang,1)},{key:"foreignNet5dZhang",label:s("foreign5d"),fmt:e=>c(e.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:s("trust5d"),fmt:e=>c(e.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:s("dealer5d"),fmt:e=>c(e.dealerNet5dZhang,1)}];case"chip-branch":return[{key:"foreignBuyStreakDays",label:"外資連買日",fmt:e=>e.foreignBuyStreakDays!=null?String(e.foreignBuyStreakDays):"—"},{key:"foreignNet1dZhang",label:s("foreign1d"),fmt:e=>c(e.foreignNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:s("foreign5d"),fmt:e=>c(e.foreignNet5dZhang,1)},{key:"instNet5dZhang",label:"法人5日(張)",fmt:e=>c(e.instNet5dZhang,1)}];case"chip-large-holders":return[{key:"megaHolderPct",label:"大戶>100萬股%",fmt:e=>e.megaHolderPct!=null?c(e.megaHolderPct,1)+"%":"—"},{key:"largeHolderPct",label:"分級12–15%",fmt:e=>e.largeHolderPct!=null?c(e.largeHolderPct,1)+"%":"—"},{key:"megaHolderCount",label:">100萬股人數",fmt:e=>e.megaHolderCount!=null?c(e.megaHolderCount,0):"—"},{key:"major10pctCount",label:"逾10%大股東家數",fmt:e=>e.major10pctCount!=null?c(e.major10pctCount,0):"—"},{key:"tdccAsOf",label:"集保日",fmt:e=>e.tdccAsOf||"—"}];case"inst-sync":return[{key:"foreignNet1dZhang",label:s("foreign1d"),fmt:e=>c(e.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:s("trust1d"),fmt:e=>c(e.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:s("dealer1d"),fmt:e=>c(e.dealerNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:s("foreign5d"),fmt:e=>c(e.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:s("trust5d"),fmt:e=>c(e.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:s("dealer5d"),fmt:e=>c(e.dealerNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>H(e.dayPct),cls:e=>O(e.dayPct)},{key:"rsi",label:d("rsi",s("rsi")),fmt:e=>c(e.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:e=>c(e.rsiPrev,2)},{key:"ampPct",label:d("amplitude",s("amplitude")),fmt:e=>e.ampPct!=null?c(e.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?c(e.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:e=>c(e.pb,2)},{key:"directorHoldPct",label:s("metricDirector"),fmt:e=>e.directorHoldPct!=null?c(e.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?c(e.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>c(e.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:d("pe",s("pe")),fmt:e=>c(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?c(e.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?c(e.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:e=>Array.isArray(e.revGrowth3y)?e.revGrowth3y.map(i=>i!=null?i+"%":"—").join(" → "):"—"},{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>c(e.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:e=>e.revGrowth5yAvgPct!=null?c(e.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?c(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?c(e.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>c(e.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?c(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:s("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?c(e.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:e=>Array.isArray(e.opMargin3y)?e.opMargin3y.map(i=>i!=null?i+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:e=>e.revGrowth3yAvgPct!=null?c(e.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)}];case"benjamin-graham":return[{key:"pe",label:d("pe",s("pe")),fmt:e=>c(e.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:e=>c(e.pb,2)},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?c(e.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>c(e.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?c(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:s("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?c(e.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?c(e.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>c(e.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:d("pe",s("pe")),fmt:e=>c(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?c(e.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:e=>e.roeGrowthPct!=null?c(e.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:e=>e.epsGrowthStreak!=null?String(e.epsGrowthStreak):"—"},{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>c(e.avgVol5Zhang,1)}];case"margin-up":return[{key:"yoyPairs",label:"YoY配對",fmt:e=>Array.isArray(e.yoyPairs)?e.yoyPairs.join("；"):"—"},{key:"yoyOmPct",label:"YoY營益成長%",fmt:e=>Array.isArray(e.yoyOmPct)?e.yoyOmPct.map(i=>i!=null?i+"%":"—").join(" → "):"—"},{key:"yoyGmPct",label:"YoY毛利成長%",fmt:e=>Array.isArray(e.yoyGmPct)?e.yoyGmPct.map(i=>i!=null?i+"%":"—").join(" → "):"—"},{key:"opMargins",label:d("opMargin",s("opMargin")),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.slice(-4).map(i=>i!=null?i+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:s("metricSource"),fmt:e=>e.source||"—"}];case"kostolany-cycle":return[{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>H(e.dayPct),cls:e=>O(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>H(e.pct5d),cls:e=>O(e.pct5d)},{key:"pct1m",label:"1月%",fmt:e=>H(e.pct1m),cls:e=>O(e.pct1m)},{key:"volRatio",label:s("volRatio"),fmt:e=>e.volRatio!=null?c(e.volRatio)+"×":"—"},{key:"psychologyPhase",label:s("psychologyPhase"),fmt:e=>e.psychologyPhase?G(e.psychologyPhase):"—"},{key:"cycleStance",label:s("cycleStance"),fmt:e=>e.cycleStance?G(e.cycleStance):"—"},{key:"liquidityBias",label:s("liquidityBias"),fmt:e=>e.liquidityBias?G(e.liquidityBias):"—"},{key:"tags",label:s("regimeTags"),fmt:e=>e.tags||"—"},{key:"sizeMult",label:s("sizeMult"),fmt:e=>e.sizeMult!=null?c(e.sizeMult,2)+"×":"—"}];case"ma-tangle-break":return[{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>H(e.dayPct),cls:e=>O(e.dayPct)},{key:"smaSpreadPct",label:"均線糾結%",fmt:e=>e.smaSpreadPct!=null?c(e.smaSpreadPct,2)+"%":"—"},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?c(e.volRatioYday)+"×":"—"},{key:"sma5",label:"SMA5",fmt:e=>c(e.sma5)},{key:"sma20",label:"SMA20",fmt:e=>c(e.sma20)}];case"new-high-momentum":case"near-high":return[{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>H(e.dayPct),cls:e=>O(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>H(e.pct5d),cls:e=>O(e.pct5d)},{key:"high20",label:"20日高",fmt:e=>c(e.high20)},{key:"distHigh20Pct",label:"距高%",fmt:e=>e.distHigh20Pct!=null?c(e.distHigh20Pct,2)+"%":"—"},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?c(e.volRatioYday)+"×":"—"}];case"short-roc":return[{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>H(e.dayPct),cls:e=>O(e.dayPct)},{key:"roc10",label:"ROC10%",fmt:e=>e.roc10!=null?c(e.roc10,2)+"%":"—",cls:e=>O(e.roc10)},{key:"pct5d",label:"5日%",fmt:e=>H(e.pct5d),cls:e=>O(e.pct5d)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?c(e.avgVol5Zhang,1):"—"}];case"day-up-5":case"pct5d-10":return[{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>H(e.dayPct),cls:e=>O(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>H(e.pct5d),cls:e=>O(e.pct5d)},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?c(e.volRatioYday)+"×":"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?c(e.avgVol5Zhang,1):"—"}];case"earnings-steady":return[{key:"yoyOmPct",label:"YoY營益成長%",fmt:e=>Array.isArray(e.yoyOmPct)?e.yoyOmPct.map(i=>i!=null?i+"%":"—").join(" → "):"—"},{key:"opMargins",label:d("opMargin",s("opMargin")),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.slice(-4).map(i=>i!=null?i+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:s("metricSource"),fmt:e=>e.source||"—"}];case"low-pe-small":return[{key:"pe",label:d("pe",s("pe")),fmt:e=>c(e.pe,2),rawLabel:!0},{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"marketCapHint",label:"市值代理",fmt:e=>e.marketCapHint||"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?c(e.avgVol5Zhang,1):"—"}];case"gooaye-tw-semicon-chain":case"gooaye-tw-vol-breakout":case"gooaye-us-risk-on":case"gooaye-us-fomo-filter":return[{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>H(e.dayPct),cls:e=>O(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>H(e.pct5d),cls:e=>O(e.pct5d)},{key:"pct1m",label:"1月%",fmt:e=>H(e.pct1m),cls:e=>O(e.pct1m)},{key:"volRatio",label:s("metricVolRatioYday"),fmt:e=>e.volRatio!=null?c(e.volRatio)+"×":"—"},{key:"aboveSma50",label:"＞SMA50",fmt:e=>e.aboveSma50?"Y":"N"}];default:return[{key:"price",label:s("metricPrice"),fmt:e=>c(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>H(e.dayPct),cls:e=>O(e.dayPct)}]}}function Ws(t){const e=t.calibrationNotes;if(!e||typeof e!="object")return"";const i=Array.isArray(e.matchedXq)?e.matchedXq.map(r=>a(r)).join(" · "):"",n=Array.isArray(e.stillDiffers)?e.stillDiffers.map(r=>a(r)).join(" · "):"",o=e.unitsNote||e.units||"",l=[];return i&&l.push(`<span class="xq-cal-m">對齊 XQ：${i}</span>`),n&&l.push(`<span class="xq-cal-d">仍差異：${n}</span>`),o&&l.push(`<span class="xq-cal-u">${a(String(o))}</span>`),l.length?`<p class="xq-calibration" title="${s("calibTitle")}">${l.join("<br/>")}</p>`:""}function js(t){return`<ol class="xq-cond-list">${(t.conditions||[]).map((i,n)=>{const o=i.status||"pass";return`<li class="xq-cond ${o}">
        <span class="xq-cond-num">${n+1}</span>
        <span class="xq-cond-text">${_s(i.text)}</span>
        ${Us(o)}
      </li>`}).join("")}</ol>`}function Ve(t,e){return!e||e==="ALL"?t||[]:(t||[]).filter(i=>{const n=String(i.market||"").toUpperCase();if(n===e)return!0;const o=String(i.ticker||"").toUpperCase().endsWith(".TW");return n?!1:e==="TW"?o:!o})}function zs(t,e="TW"){const i=t.hits||[],n=Ve(i,e),o=s(e==="US"?"usStock":"twStock");if(t.incomplete&&!i.length){const p=a(t.incompleteLabel||s("dataInsufficient")),b=(t.blockers||[]).map(k=>`<li>${a(k)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${p}</div>
      <ul>${b}</ul>
    </div>`}if(!n.length)return`<div class="xq-empty"><p>${a(o)} · ${a(s("noHits"))}</p></div>`;const l=Vs(t.id),r=l.map(p=>`<th>${p.rawLabel?p.label:a(p.label)}</th>`).join(""),m=n.map(p=>{const b=p.metrics||{},k=l.map(T=>`<td class="num ${T.cls?T.cls(b):""}">${T.fmt(b)}</td>`).join("");return`<tr>
        <td><span class="ticker">${a(p.ticker)}</span></td>
        <td class="name-cell">${a(p.name||"")}${p.ohlcvBarDate?`<div class="xq-bar-date">K ${a(p.ohlcvBarDate)}</div>`:""}
          <button type="button" class="xq-btn xq-btn-sm xq-watch-inline" data-xq-watch="${a(p.ticker)}" data-xq-watch-name="${a(p.name||"")}">${a(s("addWatchlist"))}</button>
        </td>
        ${k}
      </tr>`}).join(""),h=n.map(p=>{const b=p.metrics||{},k=l.map(T=>{const u=T.cls?T.cls(b):"";return`<div class="xq-m"><span class="xq-ml">${T.rawLabel?T.label:a(T.label)}</span><span class="xq-mv ${u}">${T.fmt(b)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${a(p.ticker)}</div>
            <div class="name">${a(p.name||"")}</div>
            ${p.ohlcvBarDate?`<div class="xq-bar-date">K棒 ${a(p.ohlcvBarDate)}</div>`:""}
          </div>
          <div class="xq-hit-actions">
            <span class="badge market">${a(p.market||e)}</span>
            <button type="button" class="xq-btn xq-btn-sm" data-xq-watch="${a(p.ticker)}" data-xq-watch-name="${a(p.name||"")}">${a(s("addWatchlist"))}</button>
          </div>
        </div>
        <div class="xq-hit-metrics">${k}</div>
      </article>`}).join("");return`
    <div class="xq-market-block" data-market="${a(e)}">
      <h5 class="xq-market-title">${o}（${n.length}）</h5>
      <div class="table-wrap xq-table-wrap">
        <table class="stock-table xq-table">
          <thead><tr><th>代碼</th><th>名稱</th>${r}</tr></thead>
          <tbody>${m}</tbody>
        </table>
      </div>
      <div class="xq-mobile-cards">${h}</div>
    </div>`}function Gs(t,e,i="TW"){var p,b,k,T;const n=t.hits||[],l=Ve(n,i).length,r=(t.unchecked||[]).map(u=>`<li class="xq-unchecked">${a(u)}</li>`).join(""),m=(t.notes||[]).map(u=>`<li>${a(u)}</li>`).join(""),h=!t.incomplete&&(t.blockers||[]).length?`<ul class="xq-blockers">${(t.blockers||[]).map(u=>`<li>${a(u)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${a(t.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${a(t.name)}</h3>
          <div class="xq-tags">
            ${(t.xqTags||[t.category]).map(u=>`<span class="xq-tag">${a(u)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="${s("hitTitle")}">
          <span class="xq-hit-num">${l}</span>
          <span class="xq-hit-label">${a(s("hitCount"))}</span>
        </div>
      </div>
      ${t.description?`<details class="fold-block"><summary>${a(s("strategyDetails"))}</summary><p class="xq-desc fold-p">${a(t.description)}</p></details>`:""}
      <div class="xq-meta-row">
        <span>${a(s("sessionTwse"))} ${a(e.sessionDate||"—")}</span>
        <span>${a(s("ohlcvBar"))} ${a(((p=t.ohlcvBarDates)==null?void 0:p[0])||e.ohlcvBarDate||"—")}</span>
        <span>${a(s("generated"))} ${Fs(e.asOf)}</span>
        <span>${a(s("universeTw"))} ${((b=e.universe)==null?void 0:b.tw)??"—"}</span>
        <span>${a(s("universeUs"))} ${((k=e.universe)==null?void 0:k.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">${a(s("conditions"))}</h4>
      ${js(t)}
      ${Ws(t)}
      ${(T=t.incompleteFilters)!=null&&T.length?`<p class="xq-incomplete-filters">${a(s("incompleteFilters"))}${a(t.incompleteFilters.join("、"))}</p>`:""}
      ${r?`<ul class="xq-unchecked-list">${r}</ul>`:""}
      ${t.regimeSnapshot?`<div class="xq-regime-box" role="status">
        <div class="xq-regime-title">${a(s("regimeToday"))}</div>
        <div class="xq-regime-grid">
          ${["us","tw"].map(u=>{const v=t.regimeSnapshot[u];if(!v)return"";const L=v.psychologyPhase?G(v.psychologyPhase):s("dataInsufficient"),x=v.cycleStance,M=v.liquidityBias?G(v.liquidityBias):s("dataInsufficient"),D=Array.isArray(v.dataGaps)&&v.dataGaps.length?`<div class="xq-regime-gaps">${a(s("dataGaps"))}：${a(v.dataGaps.join(", "))}</div>`:"";return`<div class="xq-regime-card">
                <div class="xq-regime-mkt">${a(u.toUpperCase())}</div>
                <div class="xq-regime-stance">${_e(x)}</div>
                <div class="xq-regime-metrics">
                  <div><span class="k">${a(s("psychologyPhase"))}</span><strong>${a(L)}</strong></div>
                  <div><span class="k">${a(s("liquidityBias"))}</span><strong>${a(M)}</strong></div>
                  <div><span class="k">${a(s("temperatureScore"))}</span><strong>${a(v.temperatureScore==null?s("dataInsufficient"):String(v.temperatureScore))}</strong></div>
                </div>
                ${D}
              </div>`}).join("")}
        </div>
      </div>`:""}
      ${m?`<ul class="xq-notes">${m}</ul>`:""}
      ${h}
      <div class="xq-toolbar">
        <h4 class="xq-sub">${a(s("results"))}</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>${a(s("copyJson"))}</button>
          <button type="button" class="xq-btn" data-xq-csv>${a(s("exportCsv"))}</button>
          <a class="xq-btn xq-btn-link" href="${xt}" download="strategy-screener.json">${a(s("exportJson"))}</a>
          <button type="button" class="xq-btn" disabled title="${a(s("backtestHint"))}">${a(s("backtestSoon"))}</button>
        </div>
      </div>
      ${t.twOnly||Oe.has(t.id)?`<div class="xq-market-tabs"><span class="xq-mkt-hint">${a(s("twOnlyHint"))}</span></div>`:`<div class="xq-market-tabs" role="tablist" aria-label="${a(s("hitMarket"))}">
        <button type="button" class="xq-mkt-btn${i==="TW"?" active":""}" data-xq-market="TW" aria-pressed="${i==="TW"}">${a(s("twStock"))}</button>
        <button type="button" class="xq-mkt-btn${i==="US"?" active":""}" data-xq-market="US" aria-pressed="${i==="US"}">${a(s("usStock"))}</button>
      </div>`}
      ${zs(t,t.twOnly||Oe.has(t.id)?"TW":i)}
    </div>
  `}function Ys(t=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${d("strategyScreen",s("strategyScreen"))}</h2>
      <p class="view-lead-tight">${a(s("strategyLead"))}</p>
      <div id="xq-root" class="xq-root" aria-label="${a(s("strategyScreen"))}">
        ${t?`<p class="xq-loading">${a(s("strategyLoading"))}</p>`:""}
      </div>
    </section>
  `}async function Xs(t=xt){const e=await fetch(t,{cache:"no-cache"});if(!e.ok)throw new Error(`strategy-screener ${e.status}`);return e.json()}function Zs(t,e){var U,S;const i=typeof t=="string"?document.querySelector(t):t;if(!i||!((U=e==null?void 0:e.strategies)!=null&&U.length)){i&&(i.innerHTML=`<div class="xq-empty"><p>${a(s("strategyEmpty"))}</p></div>`);return}const n=[...tt];for(const g of e.categoryOrder||[]){const f=Ue[g]||g;n.includes(f)||n.push(f)}const o=new Map(n.map(g=>[g,[]]));for(const g of e.strategies){const f=st(g);o.has(f)||(o.set(f,[]),n.push(f)),o.get(f).push(g)}for(const[g,f]of o)!f.length&&tt.includes(g);let l=n.find(g=>(o.get(g)||[]).length)||n[0],r=((S=(o.get(l)||[])[0])==null?void 0:S.id)||e.strategies[0].id,m="TW";const h=(g,f)=>g.map(y=>{const E=(y.hits||[]).length,$=y.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${y.id===f?" active":""}${$}" data-xq-id="${a(y.id)}" aria-pressed="${y.id===f}">
          <span class="xq-chip-name">${a(y.name)}</span>
          <span class="xq-chip-n">${y.incomplete?a(s("incomplete")):a(s("hitsTotal",{n:E}))}</span>
        </button>`}).join(""),p=()=>n.map(g=>{const f=o.get(g)||[];return f.length?`<button type="button" class="xq-tab${g===l?" active":""}" data-xq-tab="${a(g)}" aria-pressed="${g===l}">
          <span>${a(Hs(g))}</span>
          <span class="xq-tab-n">${f.length}</span>
        </button>`:""}).join(""),b=()=>e.strategies.map(g=>{const f=(g.hits||[]).length,y=g.id===r?" active":"",E=g.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${y}${E}" data-xq-id="${a(g.id)}">
          <span>${a(g.name)}</span>
          <span class="xq-side-n">${g.incomplete?a(s("incomplete")):a(s("hitsTotal",{n:f}))}</span>
        </button>`}).join(""),k=()=>{const g=o.get(l)||[],f=e.strategies.find(y=>y.id===r)||g[0]||e.strategies[0];r=f.id,i.innerHTML=`
      <div class="xq-layout">
        <aside class="xq-sidebar" aria-label="${a(s("strategyList"))}">
          <div class="xq-side-title">${a(s("navStrategies"))}</div>
          ${b()}
        </aside>
        <div class="xq-main">
          <div class="xq-tabs" role="tablist" aria-label="${a(s("strategyCat"))}">${p()}</div>
          <div class="xq-chips" aria-label="${a(s("strategyList"))}">
            <div class="xq-chip-row">${h(g,r)}</div>
          </div>
          <div class="xq-panel-host">${Gs(f,e,m)}</div>
        </div>
      </div>
      <p class="xq-foot">${a((e.disclaimer||"").split("。")[0]+(e.disclaimer?"。":""))}</p>
      <div class="xq-toast" id="xq-toast" hidden role="status"></div>
    `},T=g=>{const f=e.strategies.find(E=>E.id===g);if(!f)return;r=g;const y=st(f);y!==l&&(l=y),k()},u=g=>{const f=o.get(g)||[];f.length&&(l=g,f.some(y=>y.id===r)||(r=f[0].id),k())},v=(g,f=2200)=>{const y=i.querySelector("#xq-toast");y&&(y.hidden=!1,y.textContent=g,clearTimeout(v._t),v._t=setTimeout(()=>{y.hidden=!0},f))},L=async g=>{var f;try{if((f=navigator.clipboard)!=null&&f.writeText)return await navigator.clipboard.writeText(g),!0}catch{}try{const y=document.createElement("textarea");y.value=g,y.setAttribute("readonly",""),y.style.position="fixed",y.style.left="-9999px",y.style.top="0",document.body.appendChild(y),y.select();const E=document.execCommand("copy");return document.body.removeChild(y),E}catch{return!1}},x=(g,f,y)=>{const E=new Blob([f],{type:y});try{const $=document.createElement("a");return $.href=URL.createObjectURL(E),$.download=g,$.rel="noopener",document.body.appendChild($),$.click(),$.remove(),setTimeout(()=>URL.revokeObjectURL($.href),2e3),!0}catch{try{const $=`data:${y||"text/plain"};charset=utf-8,${encodeURIComponent(f)}`,w=document.createElement("a");return w.href=$,w.download=g,document.body.appendChild(w),w.click(),w.remove(),!0}catch{return!1}}},M=()=>{try{const g=localStorage.getItem(et),f=g?JSON.parse(g):[];return Array.isArray(f)?f:[]}catch{return[]}},D=g=>{try{localStorage.setItem(et,JSON.stringify(g.slice(0,200)))}catch{}},Y=(g,f)=>{if(!g)return;const y=M();if(y.some(E=>E.ticker===g)){v(s("watchlistExists",{ticker:g}));return}y.unshift({ticker:g,name:f||g,addedAt:new Date().toISOString()}),D(y),v(s("watchlistAdded",{ticker:g}))};i.onclick=async g=>{var I;const f=g.target,y=f&&typeof f.closest=="function"?f:f&&f.parentElement&&typeof f.parentElement.closest=="function"?f.parentElement:null;if(!y)return;const E=y.closest("[data-xq-tab]");if(E&&i.contains(E)){g.preventDefault(),u(E.getAttribute("data-xq-tab"));return}const $=y.closest("[data-xq-id]");if($&&i.contains($)){g.preventDefault(),T($.getAttribute("data-xq-id"));return}const w=y.closest("[data-xq-market]");if(w&&i.contains(w)){g.preventDefault(),m=w.getAttribute("data-xq-market")||"TW",k();return}const q=y.closest("[data-xq-copy]");if(q&&i.contains(q)){g.preventDefault();const W=await L(JSON.stringify(e,null,2));v(s(W?"copied":"copyFailed"));return}const P=y.closest("[data-xq-csv]");if(P&&i.contains(P)){g.preventDefault();const W=((I=i.querySelector(".xq-panel"))==null?void 0:I.getAttribute("data-strategy-id"))||r,Z=e.strategies.find(Ae=>Ae.id===W);if(!Z)return;const xe=Ve(Z.hits||[],Z.twOnly||Oe.has(Z.id)?"TW":m),pe=Ks({...Z,hits:xe});if(!pe){v(s("noHitsExport"));return}const ue="\uFEFF"+pe;if(x(`${Z.id}-hits.csv`,ue,"text/csv;charset=utf-8"))v(s("csvDownloaded"));else{const Ae=`data:text/csv;charset=utf-8,${encodeURIComponent(ue)}`;v(s("csvBlocked"));try{window.open(Ae,"_blank")}catch{}}return}const C=y.closest("[data-xq-watch]");C&&i.contains(C)&&(g.preventDefault(),Y(C.getAttribute("data-xq-watch"),C.getAttribute("data-xq-watch-name")))},k()}function Ks(t){const e=t.hits||[];if(!e.length)return"";const i=[...new Set(e.flatMap(r=>Object.keys(r.metrics||{})))],n=["ticker","name","market","ohlcvBarDate",...i],o=r=>{const m=r==null?"":String(r);return/[",\n]/.test(m)?`"${m.replace(/"/g,'""')}"`:m},l=e.map(r=>{const m=r.metrics||{};return[r.ticker,r.name,r.market,r.ohlcvBarDate||"",...i.map(h=>{const p=m[h];return Array.isArray(p)?p.join("|"):p})].map(o).join(",")});return[n.join(","),...l].join(`
`)}async function Qs(t="#xq-root"){const e=()=>typeof t=="string"?document.querySelector(t):t;try{let i=e();if(i||(await new Promise(o=>requestAnimationFrame(o)),i=e()),!i)return console.warn("initStrategies: #xq-root missing"),{ok:!1,error:new Error("xq-root missing")};const n=await Xs();return i=e(),i?(Zs(i,n),{ok:!0,data:n}):{ok:!1,error:new Error("xq-root gone after fetch")}}catch(i){const n=e();return n&&(n.innerHTML=`<div class="xq-empty"><p>${a(s("strategyLoadError",{msg:i.message}))}</p></div>`),{ok:!1,error:i}}}const At="./data/research-library.json",Lt="./covers/placeholder-book.svg",Ct="./covers/placeholder-paper.svg",Rt="./covers/placeholder-podcast.svg",Js={candidate:"rl-status-candidate",deferred:"rl-status-deferred",adopted:"rl-status-adopted",rejected:"rl-status-rejected"},ea={yes:"rl-cand-yes",no:"rl-cand-no",watch:"rl-cand-watch"};function ta(t){return{candidate:s("researchStatusCandidate"),deferred:s("researchStatusDeferred"),adopted:s("researchStatusAdopted"),rejected:s("researchStatusRejected")}[t]||t}function sa(t){return{yes:s("researchCandYes"),no:s("researchCandNo"),watch:s("researchCandWatch")}[t]||t}function aa(t){return t==="US"?s("usStock"):t==="TW"?s("twStock"):t==="BOTH"?s("researchMarketBoth"):t}function Mt(t){return s(t==="paper"?"researchTypePaper":t==="podcast"?"researchTypePodcast":"researchTypeBook")}function ye(t,e={}){var o;if(!t)return s("researchShelfAdjacent");const i=(o=e==null?void 0:e.shelfLabels)==null?void 0:o[t];if(i&&typeof i=="object")return Pe(i,t);const n={core_investing:"researchShelfCoreInvesting",value_investing:"researchShelfValueInvesting",business_management:"researchShelfBusiness",life_partner_wisdom:"researchShelfLifePartner",options:"researchShelfOptions",recent_reads:"researchShelfRecentReads",fi_concepts:"researchShelfFiConcepts",money_values:"researchShelfMoneyValues",investing_basics:"researchShelfInvestingBasics",asset_allocation:"researchShelfAssetAllocation",financials:"researchShelfFinancials",market_analysis:"researchShelfMarketAnalysis",econ_analysis:"researchShelfEconAnalysis",psych_randomness:"researchShelfPsych",biographies:"researchShelfBiographies",adjacent:"researchShelfAdjacent"}[t];return n?s(n):t}function ia(t={}){return(Array.isArray(t.shelves)?t.shelves:null)||["core_investing","value_investing","business_management","life_partner_wisdom","options","recent_reads","fi_concepts","money_values","investing_basics","asset_allocation","financials","market_analysis","econ_analysis","psych_randomness","biographies","adjacent"]}function Pe(t,e){if(!t||typeof t!="object")return e;const i=ke();return t[i]||t.en||t["zh-Hant"]||e}function Dt(t){return Pe(t.titleLocalized,t.title)||""}function na(t){return Pe(t.summaryLocalized,t.summary)||""}function oa(t,e){return t.coverUrl?t.coverUrl:t.cover?t.cover:t.type==="paper"?(e==null?void 0:e.defaultCoverPaper)||Ct:t.type==="podcast"?(e==null?void 0:e.defaultCoverPodcast)||Rt:(e==null?void 0:e.defaultCoverBook)||Lt}function ra(t,e){return t.coverFallback?t.coverFallback:t.type==="paper"?(e==null?void 0:e.defaultCoverPaper)||Ct:t.type==="podcast"?(e==null?void 0:e.defaultCoverPodcast)||Rt:(e==null?void 0:e.defaultCoverBook)||Lt}function la(t){const e=t==null?void 0:t.plainTakeawaysLocalized;if(e&&typeof e=="object"){const i=ke(),n=e[i]||e["zh-Hant"]||e.en;if(Array.isArray(n)&&n.length)return n}return Array.isArray(t==null?void 0:t.plainTakeaways)&&t.plainTakeaways.length?t.plainTakeaways:[]}function ca(t){const e=la(t);return e.length?`<div class="rl-block">
    <h4 class="rl-h">${a(s("researchTakeaways"))}</h4>
    <ul class="rl-takeaways">${e.map(i=>`<li>${a(i)}</li>`).join("")}</ul>
  </div>`:""}function da(t){if(!Array.isArray(t)||!t.length)return"";const e=t.filter(n=>/^https?:\/\//i.test(String(n)));if(!e.length)return"";const i=e.map(n=>`<a href="${a(n)}" target="_blank" rel="noopener noreferrer">${a(n)}</a>`).join(" · ");return`<div class="rl-sources"><span class="rl-k">${a(s("researchSources"))}</span> ${i}</div>`}function pa(t,e){const i=oa(t,e),n=ra(t,e),o=Dt(t)||Mt(t.type);return`
    <div class="rl-cover-wrap">
      <img
        class="rl-cover"
        src="${a(i)}"
        alt="${a(o)}"
        loading="lazy"
        decoding="async"
        data-rl-fallback="${a(n)}"
      />
    </div>`}function ua(t){t.querySelectorAll("img.rl-cover[data-rl-fallback]").forEach(e=>{e.addEventListener("error",()=>{const i=e.dataset.rlFallback;i&&e.getAttribute("src")!==i?e.setAttribute("src",i):e.classList.add("is-broken")})})}function he(t,e={}){const i=t.status||"candidate",n=t.strategyCandidate||"watch",o=t.year!=null?String(t.year):"—",l=(t.authors||[]).join(", ")||"—";return`
    <article class="rl-card" data-rl-id="${a(t.id)}" data-rl-market="${a(t.market)}" data-rl-type="${a(t.type)}" data-rl-shelf="${a(t.shelf||"adjacent")}">
      ${pa(t,e)}
      <div class="rl-card-body">
        <header class="rl-card-head">
          <div class="rl-badges">
            <span class="rl-badge rl-type">${a(Mt(t.type))}</span>
            <span class="rl-badge rl-shelf">${a(ye(t.shelf,e))}</span>
            <span class="rl-badge rl-market">${a(aa(t.market))}</span>
            <span class="rl-badge ${Js[i]||""}">${a(ta(i))}</span>
            <span class="rl-badge ${ea[n]||""}" title="${a(s("researchStrategy"))}">${a(sa(n))}</span>
          </div>
          <h3 class="rl-title">${a(Dt(t))}</h3>
          <p class="rl-meta">${a(l)} · ${a(o)}</p>
        </header>
        <p class="rl-summary">${a(na(t))}</p>
        ${ca(t)}
        ${da(t.sources)}
      </div>
    </article>`}function ga(t=!0){return`
    <section class="section research-section" aria-labelledby="research-heading">
      <header class="view-header view-header-tight">
        <h2 class="view-title" id="research-heading">${a(s("researchTitle"))}</h2>
        <p class="view-lead view-lead-tight">${a(s("researchLead"))}</p>
      </header>
      <p class="rl-banner" role="note">${a(s("researchMathGateBanner"))}</p>
      <div id="rl-root" class="rl-root" data-placeholder="${t?"1":"0"}">
        <p class="rl-loading">${a(s("loading"))}</p>
      </div>
    </section>`}function ma(t,{market:e,type:i,shelf:n}){return t.filter(o=>i&&i!=="all"&&o.type!==i||n&&n!=="all"&&(o.shelf||"adjacent")!==n?!1:!e||e==="all"?!0:e==="US"?o.market==="US"||o.market==="BOTH":e==="TW"?o.market==="TW"||o.market==="BOTH":!0)}function ha(t){var i,n,o;const e=(i=t==null?void 0:t.meta)==null?void 0:i.mathGateLocalized;return e&&typeof e=="object"?Pe(e,(n=t==null?void 0:t.meta)==null?void 0:n.mathGate)||s("researchMathGateBanner"):((o=t==null?void 0:t.meta)==null?void 0:o.mathGate)||s("researchMathGateBanner")}function be(t,e,i){const n=Array.isArray(e==null?void 0:e.items)?e.items:[],o=ma(n,i),l=o.filter(u=>u.type==="book"),r=o.filter(u=>u.type==="paper"),m=o.filter(u=>u.type==="podcast"),h=(e==null?void 0:e.meta)||{},p=ia(h),b=h.mathGate?`<p class="rl-meta-line">${a(ha(e))}</p>`:"",k=[`<button type="button" class="rl-filter rl-shelf-chip${i.shelf==="all"?" is-active":""}" data-rl-shelf="all">${a(s("researchFilterAll"))}</button>`,...p.map(u=>{const v=n.filter(L=>(L.shelf||"adjacent")===u).length;return v?`<button type="button" class="rl-filter rl-shelf-chip${i.shelf===u?" is-active":""}" data-rl-shelf="${a(u)}">${a(ye(u,h))} <span class="rl-chip-count">${v}</span></button>`:""})].join("");function T(u,v){return u.length?i.shelf&&i.shelf!=="all"?`<div class="rl-grid">${u.map(x=>he(x,h)).join("")}</div>`:p.filter(x=>u.some(M=>(M.shelf||"adjacent")===x)).map(x=>{const M=u.filter(D=>(D.shelf||"adjacent")===x);return`<section class="rl-shelf-group" data-shelf="${a(x)}" aria-label="${a(ye(x,h))}">
          <h4 class="rl-shelf-title">${a(ye(x,h))} <span class="rl-list-count">(${M.length})</span></h4>
          <div class="rl-grid">${M.map(D=>he(D,h)).join("")}</div>
        </section>`}).join(""):`<p class="rl-empty">${a(s("researchEmpty"))}</p>`}t.innerHTML=`
    <div class="rl-toolbar" role="toolbar" aria-label="${a(s("researchFilters"))}">
      <div class="rl-filter-group" role="group" aria-label="${a(s("market"))}">
        <button type="button" class="rl-filter${i.market==="all"?" is-active":""}" data-rl-market="all">${a(s("researchFilterAll"))}</button>
        <button type="button" class="rl-filter${i.market==="US"?" is-active":""}" data-rl-market="US">${a(s("usStock"))}</button>
        <button type="button" class="rl-filter${i.market==="TW"?" is-active":""}" data-rl-market="TW">${a(s("twStock"))}</button>
      </div>
      <div class="rl-filter-group" role="group" aria-label="${a(s("researchType"))}">
        <button type="button" class="rl-filter${i.type==="all"?" is-active":""}" data-rl-type="all">${a(s("researchFilterAll"))}</button>
        <button type="button" class="rl-filter${i.type==="book"?" is-active":""}" data-rl-type="book">${a(s("researchTypeBook"))}</button>
        <button type="button" class="rl-filter${i.type==="paper"?" is-active":""}" data-rl-type="paper">${a(s("researchTypePaper"))}</button>
        <button type="button" class="rl-filter${i.type==="podcast"?" is-active":""}" data-rl-type="podcast">${a(s("researchTypePodcast"))}</button>
      </div>
    </div>
    <div class="rl-shelf-scroll" role="group" aria-label="${a(s("researchShelfFilters"))}">
      ${k}
    </div>
    ${b}
    <p class="rl-counts">${a(s("researchCounts",{books:l.length,papers:r.length,podcasts:m.length,total:o.length}))}</p>
    <div class="rl-lists">
      <section class="rl-list" aria-label="${a(s("researchTypeBook"))}">
        <h3 class="rl-list-title">${a(s("researchTypeBook"))} <span class="rl-list-count">(${l.length})</span></h3>
        ${T(l,s("researchTypeBook"))}
      </section>
      <section class="rl-list" aria-label="${a(s("researchTypePaper"))}">
        <h3 class="rl-list-title">${a(s("researchTypePaper"))} <span class="rl-list-count">(${r.length})</span></h3>
        <div class="rl-grid">
          ${r.length?r.map(u=>he(u,h)).join(""):`<p class="rl-empty">${a(s("researchEmpty"))}</p>`}
        </div>
      </section>
      <section class="rl-list" aria-label="${a(s("researchTypePodcast"))}">
        <h3 class="rl-list-title">${a(s("researchTypePodcast"))} <span class="rl-list-count">(${m.length})</span></h3>
        <div class="rl-grid">
          ${m.length?m.map(u=>he(u,h)).join(""):`<p class="rl-empty">${a(s("researchEmpty"))}</p>`}
        </div>
      </section>
    </div>`,ua(t),t.querySelectorAll("[data-rl-market]").forEach(u=>{u.addEventListener("click",()=>{i.market=u.dataset.rlMarket,be(t,e,i)})}),t.querySelectorAll("[data-rl-type]").forEach(u=>{u.addEventListener("click",()=>{i.type=u.dataset.rlType,be(t,e,i)})}),t.querySelectorAll("[data-rl-shelf]").forEach(u=>{u.addEventListener("click",()=>{i.shelf=u.dataset.rlShelf,be(t,e,i)})})}async function va(t=At){const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()}async function fa(t="#rl-root",e=At){const i=typeof t=="string"?document.querySelector(t):t;if(!i)return{ok:!1,reason:"missing-root"};try{const n=await va(e);return be(i,n,{market:"all",type:"all",shelf:"all"}),{ok:!0,data:n}}catch(n){return i.innerHTML=`<p class="rl-error">${a(s("researchLoadError",{msg:n.message}))}</p>`,{ok:!1,error:n}}}const ya="./data/us-options-snapshot.json",ba="book-mcmillan-options-handbook",Sa={"covered-call":["optionsSetupCoveredCall","optionsSetupCoveredCallBody","optionsSetupCoveredCallWarn"],"protective-put":["optionsSetupProtectivePut","optionsSetupProtectivePutBody","optionsSetupProtectivePutWarn"],"vertical-spread":["optionsSetupVertical","optionsSetupVerticalBody","optionsSetupVerticalWarn"],"calendar-diagonal":["optionsSetupCalendar","optionsSetupCalendarBody","optionsSetupCalendarWarn"],"straddle-strangle":["optionsSetupStraddle","optionsSetupStraddleBody","optionsSetupStraddleWarn"],butterfly:["optionsSetupButterfly","optionsSetupButterflyBody","optionsSetupButterflyWarn"]};function $a(t,e){if(!t||typeof t!="object")return e;const i=ke();return t[i]||t["zh-Hant"]||t.en||e}function ka(t){return t&&$a(t.titleLocalized,t.title)||""}function Ta(t){if(!t)return[];const e=t.plainTakeawaysLocalized;if(e&&typeof e=="object"){const i=ke(),n=e[i]||e["zh-Hant"]||e.en;if(Array.isArray(n)&&n.length)return n}return Array.isArray(t.plainTakeaways)?t.plainTakeaways:[]}function wa(t){try{return new Date(t).toLocaleString(B(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return t||"—"}}function z(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(B(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Et(t,e=1){return t==null||Number.isNaN(t)?null:`${(t*100).toFixed(e)}%`}function at(t){return t==null||Number.isNaN(t)?null:`${(t*100).toFixed(1)}%`}function N(t,e=""){return t==null||t===""?"—":`<span class="uo-val">${a(String(t))}${e?a(e):""}</span>`}function We(t){return s(t==="pass"?"optionsGatePass":t==="watch"?"optionsGateWatch":t==="fail"?"optionsGateFail":"optionsGateIncomplete")}function je(t){return t==="pass"?"uo-gate-pass":t==="watch"?"uo-gate-watch":t==="fail"?"uo-gate-fail":"uo-gate-incomplete"}function $e(t){return!t||t.incomplete||t.label==null?null:t.label==="up"?s("optionsTrendUp",{pct:t.pct!=null?t.pct:"—"}):t.label==="down"?s("optionsTrendDown",{pct:t.pct!=null?t.pct:"—"}):s("optionsTrendFlat",{pct:t.pct!=null?t.pct:"—"})}function Pa(t){return t==null?null:t>1.2?s("optionsSkewPutHeavy"):t<.8?s("optionsSkewCallHeavy"):s("optionsSkewBalanced")}function Nt(t){return t==="iv_rich"?s("optionsRegimeIvRich"):t==="iv_cheap"?s("optionsRegimeIvCheap"):t==="iv_fair"?s("optionsRegimeIvFair"):t==="iv_only"?s("optionsRegimeIvOnly"):"—"}function xa(t){return t!=null&&t.primaryBook?t.primaryBook:null}function Aa(t){const e=xa(t),i=ka(e)||s("optionsBookFallbackTitle"),n=Ta(e),o=n.length?`<ul class="uo-takeaways">${n.map(l=>`<li>${a(l)}</li>`).join("")}</ul>`:`<p class="uo-muted">${a(s("researchNoTakeaways"))}</p>`;return`
    <aside class="uo-book" aria-label="${a(s("optionsBookCite"))}">
      <div class="uo-book-head">
        <span class="uo-book-badge">${a(s("optionsBookBadge"))}</span>
        <h3 class="uo-book-title">${a(i)}</h3>
      </div>
      <p class="uo-book-lead">${a(s("optionsBookLead"))}</p>
      ${o}
      <p class="uo-book-link">
        <button type="button" class="uo-link-btn" data-jump="research">${a(s("optionsGotoResearch"))}</button>
        <span class="uo-muted">· ${a(ba)}</span>
      </p>
    </aside>`}function La(t){const e=t.fundamentals||{},i=t.quality||{},n=e.trailingPE??e.forwardPE,o=e.trailingPE!=null?"":e.forwardPE!=null?` <span class="uo-hint">(${a(s("optionsForwardPe"))})</span>`:"";return`
    <tr data-uo-ticker="${a(t.ticker)}" class="uo-q-row">
      <td>
        <button type="button" class="uo-ticker-btn" data-uo-select="${a(t.ticker)}">
          <span class="uo-ticker">${a(t.ticker)}</span>
          <span class="uo-name">${a(t.name||"")}</span>
        </button>
      </td>
      <td class="num">${N(z(n,1))}${o}</td>
      <td class="num">${N(z(e.priceToBook,2))}</td>
      <td class="num">${N(z(e.debtToEquity,1))}</td>
      <td class="num">${N(Et(e.roe))}</td>
      <td>${N($e(e.revenueTrend))}</td>
      <td>${N($e(e.earningsTrend))}</td>
      <td><span class="uo-gate ${je(i.gate)}">${a(We(i.gate))}</span></td>
    </tr>`}function Ca(t){return t.map(e=>{const i=e.fundamentals||{},n=e.quality||{},o=i.trailingPE??i.forwardPE;return`
      <article class="uo-q-card" data-uo-ticker="${a(e.ticker)}">
        <button type="button" class="uo-ticker-btn" data-uo-select="${a(e.ticker)}">
          <span class="uo-ticker">${a(e.ticker)}</span>
          <span class="uo-name">${a(e.name||"")}</span>
        </button>
        <div class="uo-metrics">
          <div><span class="m-l">${a(s("optionsPe"))}</span> ${N(z(o,1))}</div>
          <div><span class="m-l">${a(s("optionsPb"))}</span> ${N(z(i.priceToBook,2))}</div>
          <div><span class="m-l">${a(s("optionsDebt"))}</span> ${N(z(i.debtToEquity,1))}</div>
          <div><span class="m-l">${a(s("optionsRoe"))}</span> ${N(Et(i.roe))}</div>
          <div><span class="m-l">${a(s("optionsRevTrend"))}</span> ${N($e(i.revenueTrend))}</div>
          <div><span class="m-l">${a(s("optionsEarnTrend"))}</span> ${N($e(i.earningsTrend))}</div>
        </div>
        <span class="uo-gate ${je(n.gate)}">${a(We(n.gate))}</span>
      </article>`}).join("")}function Ra(){return`
    <details class="uo-glossary fold-block">
      <summary>${a(s("optionsGlossaryTitle"))}</summary>
      <dl class="uo-dl">
        <div><dt>${a(s("optionsTermDelta"))}</dt><dd>${a(s("optionsDefDelta"))}</dd></div>
        <div><dt>${a(s("optionsTermIv"))}</dt><dd>${a(s("optionsDefIv"))}</dd></div>
        <div><dt>${a(s("optionsTermHv"))}</dt><dd>${a(s("optionsDefHv"))}</dd></div>
        <div><dt>${a(s("optionsTermAtm"))}</dt><dd>${a(s("optionsDefAtm"))}</dd></div>
        <div><dt>${a(s("optionsTermSkew"))}</dt><dd>${a(s("optionsDefSkew"))}</dd></div>
        <div><dt>${a(s("optionsTermProb"))}</dt><dd>${a(s("optionsDefProb"))}</dd></div>
      </dl>
    </details>`}function Ma(t){const e=t.setups||[];return e.length?`<div class="uo-setups">
    ${e.map(i=>{const n=Sa[i.id];if(!n)return"";const[o,l,r]=n,m=i.volAligned?s("optionsSetupVolAligned"):s("optionsSetupVolNotAligned");return`
        <article class="uo-setup${i.volAligned?" is-aligned":""}">
          <h4>${a(s(o))}</h4>
          <p>${a(s(l))}</p>
          <p class="uo-risk-shape">${a(s("optionsRiskShape"))}: ${a(s(r))}</p>
          <p class="uo-muted">${a(m)} · ${a(Nt(i.volRegime))}</p>
        </article>`}).join("")}
  </div>`:`<p class="uo-muted">${a(s("optionsNoSetups"))}</p>`}function Da(t){var m,h;if(!t)return`<p class="uo-muted">${a(s("optionsPickTicker"))}</p>`;const e=t.options,i=t.blockers||[];if(!e)return`
      <div class="uo-blocker" role="status">
        <p><strong>${a(s("optionsChainBlocked"))}</strong></p>
        <p>${a(i.join(" · ")||s("optionsDataMissing"))}</p>
        <p class="uo-muted">${a(s("optionsRefreshHow"))}</p>
      </div>`;const n=Pa(e.putCallVolumeRatio),o=e.atmIv==null,l=e.historicalVol==null,r=o?"unknown":l?"iv_only":e.ivHvRatio>=1.25?"iv_rich":e.ivHvRatio<=.8?"iv_cheap":"iv_fair";return`
    <div class="uo-opt-head">
      <div>
        <div class="uo-ticker">${a(t.ticker)}</div>
        <div class="uo-name">${a(t.name||"")}</div>
      </div>
      <span class="uo-gate ${je((m=t.quality)==null?void 0:m.gate)}">${a(We((h=t.quality)==null?void 0:h.gate))}</span>
    </div>
    <p class="uo-opt-note">${a(s("optionsMcmillanFirst"))}</p>
    <div class="uo-opt-grid">
      <div class="uo-opt-metric">
        <div class="m-l">${a(s("optionsAtmIv"))}</div>
        <div class="m-v">${N(o?null:at(e.atmIv))}</div>
        <div class="uo-muted">${a(s("optionsExpiry"))}: ${a(e.expiration||"—")}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${a(s("optionsHv"))}</div>
        <div class="m-v">${N(l?null:at(e.historicalVol))}</div>
        <div class="uo-muted">${a(s("optionsIvHv"))}: ${e.ivHvRatio!=null?N(z(e.ivHvRatio,2)+"×"):N(null)}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${a(s("optionsVolRegime"))}</div>
        <div class="m-v">${a(Nt(r))}</div>
        <div class="uo-muted">${n?a(n):""}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${a(s("optionsCallPutVol"))}</div>
        <div class="m-v">${N(z(e.callVolume,0))} / ${N(z(e.putVolume,0))}</div>
        <div class="uo-muted">${a(s("optionsAtmStrike"))}: ${N(z(e.atmStrikeCall??e.atmStrikePut,1))}</div>
      </div>
    </div>
    ${(()=>{const p=i.filter(k=>!/atmIv|options fields incomplete/i.test(String(k))||e.historicalVol==null&&!(e.callVolume||e.putVolume)),b=p.length?p:[];return b.length?`<p class="uo-warn">${a(s("optionsPartialBlocker"))}: ${a(b.join(" · "))}</p>`:""})()}
    <h4 class="uo-h">${a(s("optionsEduSetups"))}</h4>
    <p class="uo-panel-lead">${a(s("optionsEduSetupsLead"))}</p>
    ${Ma(t)}
    <p class="uo-disclaimer" role="note">${a(s("optionsDisclaimer"))}</p>
    ${Ra()}
  `}function Bt(t,e,i){const n=Array.isArray(e==null?void 0:e.tickers)?e.tickers:[],o=n.find(r=>r.ticker===i.ticker)||n[0]||null;o&&(i.ticker=o.ticker);const l=e!=null&&e.sessionBlocker?`<div class="uo-blocker" role="status"><p>${a(e.sessionBlocker)}</p><p class="uo-muted">${a(s("optionsRefreshHow"))}</p></div>`:"";t.innerHTML=`
    ${Aa(e)}
    <p class="uo-meta">${a(s("dataAsOf"))} ${a(wa(e==null?void 0:e.asOf))} · ${a(s("optionsUsOnly"))}</p>
    ${l}
    <div class="uo-panels">
      <section class="uo-panel uo-panel-opt" aria-label="${a(s("optionsViewTitle"))}">
        <h3 class="uo-panel-title">${a(s("optionsViewTitle"))}</h3>
        <p class="uo-panel-lead">${a(s("optionsViewLead"))}</p>
        <div class="uo-ticker-chips" role="tablist" aria-label="${a(s("ticker"))}">
          ${n.map(r=>`
            <button type="button" class="uo-chip${r.ticker===i.ticker?" is-active":""}" data-uo-select="${a(r.ticker)}" role="tab" aria-selected="${r.ticker===i.ticker?"true":"false"}">${a(r.ticker)}</button>`).join("")}
        </div>
        <div class="uo-detail" id="uo-detail">
          ${Da(o)}
        </div>
      </section>
      <section class="uo-panel" aria-label="${a(s("optionsQualityTitle"))}">
        <h3 class="uo-panel-title">${a(s("optionsQualityTitle"))}</h3>
        <p class="uo-panel-lead">${a(s("optionsQualityLead"))}</p>
        <div class="table-wrap uo-table-wrap">
          <table class="stock-table uo-table">
            <thead>
              <tr>
                <th>${a(s("ticker"))}</th>
                <th>${a(s("optionsPe"))}</th>
                <th>${a(s("optionsPb"))}</th>
                <th>${a(s("optionsDebt"))}</th>
                <th>${a(s("optionsRoe"))}</th>
                <th>${a(s("optionsRevTrend"))}</th>
                <th>${a(s("optionsEarnTrend"))}</th>
                <th>${a(s("optionsGate"))}</th>
              </tr>
            </thead>
            <tbody>
              ${n.length?n.map(La).join(""):`<tr><td colspan="8">${a(s("optionsEmpty"))}</td></tr>`}
            </tbody>
          </table>
        </div>
        <div class="uo-mobile">${n.length?Ca(n):`<p class="uo-muted">${a(s("optionsEmpty"))}</p>`}</div>
      </section>
    </div>
  `,t.querySelectorAll("[data-uo-select]").forEach(r=>{r.addEventListener("click",()=>{i.ticker=r.getAttribute("data-uo-select"),Bt(t,e,i)})}),t.querySelectorAll("[data-uo-ticker]").forEach(r=>{r.classList.toggle("is-selected",r.getAttribute("data-uo-ticker")===i.ticker)})}function Ea(){return`
    <section class="section options-section" aria-label="${a(s("optionsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(s("optionsTitle"))}</h2>
        <p class="view-lead">${a(s("optionsLead"))}</p>
      </header>
      <p class="uo-disclaimer uo-disclaimer-top" role="note">${a(s("optionsDisclaimer"))}</p>
      <div id="uo-root" class="uo-root">
        <p class="uo-loading">${a(s("loading"))}</p>
      </div>
    </section>`}async function Na(t="#uo-root"){var i,n;const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};try{const o=await fetch(ya);if(!o.ok)throw new Error(`HTTP ${o.status}`);const l=await o.json(),r={ticker:((n=(i=l==null?void 0:l.tickers)==null?void 0:i[0])==null?void 0:n.ticker)||null};return Bt(e,l,r),{ok:!0,data:l}}catch(o){return e.innerHTML=`
      <div class="uo-blocker" role="alert">
        <p>${a(s("optionsLoadError",{msg:o.message||String(o)}))}</p>
        <p class="uo-muted">${a(s("optionsRefreshHow"))}</p>
      </div>`,{ok:!1,error:o}}}const Ba="./data/earnings-digest.json";function qa(t){try{return new Date(t).toLocaleString(B(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return t||"—"}}function De(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(B(),{minimumFractionDigits:e,maximumFractionDigits:e})}function it(t,e=1){return t==null||Number.isNaN(t)?null:`${t>0?"+":""}${Number(t).toFixed(e)}%`}function te(t,e=""){return t==null||t===""?null:`<span class="er-val">${a(String(t))}${e?a(e):""}</span>`}function se(t,e){return e?`<div class="er-metric">
          <div class="m-l">${a(t)}</div>
          <div class="m-v">${e}</div>
        </div>`:""}function Ia(t){return t==="mega_cap_earnings_next_14d"?s("earningsTagPrimary"):t==="yahoo_most_actives_earnings_next_14d"?s("earningsTagActives"):t==="recently_reported"?s("earningsTagRecent"):t==="calendar_highlight_within_45d"?s("earningsTagFallback"):t||s("earningsTagOther")}function Oa(t){return t==="recently_reported"?"er-badge-recent":t==="calendar_highlight_within_45d"?"er-badge-fallback":t!=null&&t.includes("most_actives")?"er-badge-hot":""}function nt(t,{hot:e=!1}={}){var l;if(!t)return"";const i=t.nextEarningsDate!=null?`${t.nextEarningsDate}${t.nextEarningsDateIsEstimate?` (${s("earningsEstimate")})`:""}`:null,n=((l=t.lastReport)==null?void 0:l.epsActual)!=null?`${De(t.lastReport.epsActual,2)}${t.lastReport.quarter?` · ${t.lastReport.quarter}`:""}`:null,o=e?`<span class="er-badge ${Oa(t.selectionTag)}">${a(Ia(t.selectionTag))}</span>`:`<span class="er-badge">${a(s("earningsMag7Badge"))}</span>`;return`
    <article class="er-card" data-ticker="${a(t.ticker)}">
      <div class="er-card-head">
        <div>
          <div class="er-ticker">${a(t.ticker)}</div>
          <div class="er-name">${a(t.name||"")}</div>
        </div>
        ${o}
      </div>
      <div>
        <div class="er-label">${a(s("earningsWhatItDoes"))}</div>
        <p class="er-does">${t.whatItDoes?a(t.whatItDoes):""}</p>
      </div>
      <div class="er-metrics">
        ${se(s("earningsNextDate"),te(i))}
        ${se(s("earningsLastEps"),te(n))}
        ${se(s("earningsRevYoy"),te(it(t.revenueYoYPct)))}
        ${se(s("earningsEpsYoy"),te(it(t.epsYoYPct)))}
        ${se(s("earningsPe"),te(De(t.pe,1)))}
        ${se(s("earningsForwardPe"),te(De(t.forwardPe,1)))}
      </div>
      ${t.whatToWatch?`<div>
        <div class="er-label">${a(s("earningsWhatToWatch"))}</div>
        <p class="er-watch">${a(t.whatToWatch)}</p>
      </div>`:""}
      ${Array.isArray(t.notes)&&t.notes.length?`<p class="er-notes er-muted">${a(t.notes.slice(0,3).join(" · "))}</p>`:""}
      ${t.blocker?`<p class="er-miss">${a(s("earningsPartialBlocker"))}: ${a(t.blocker)}</p>`:""}
    </article>`}function Ha(t,e){var l;const i=Array.isArray(e==null?void 0:e.mag7)?e.mag7:[],n=Array.isArray(e==null?void 0:e.watchlistHot)?e.watchlistHot:[],o=e!=null&&e.sessionBlocker?`<div class="er-blocker" role="status"><p>${a(e.sessionBlocker)}</p><p class="er-muted">${a(s("earningsRefreshHow"))}</p></div>`:"";t.innerHTML=`
    <p class="er-meta">${a(s("dataAsOf"))} ${a(qa(e==null?void 0:e.asOf))} · ${a(s("earningsUsFocus"))}</p>
    <p class="er-stub" role="note">${a(((l=e==null?void 0:e.twStub)==null?void 0:l.note)||s("earningsTwStub"))}</p>
    <div class="er-rule"><strong>${a(s("earningsSelectionTitle"))}</strong> ${a((e==null?void 0:e.selectionRule)||s("earningsSelectionFallback"))}</div>
    ${o}
    <div class="er-panels">
      <section class="er-panel" aria-label="${a(s("earningsMag7Title"))}">
        <h3 class="er-panel-title">${a(s("earningsMag7Title"))}</h3>
        <p class="er-panel-lead">${a(s("earningsMag7Lead"))}</p>
        <div class="er-cards">
          ${i.length?i.map(r=>nt(r,{hot:!1})).join(""):`<p class="er-empty">${a(s("earningsEmpty"))}</p>`}
        </div>
      </section>
      <section class="er-panel" aria-label="${a(s("earningsHotTitle"))}">
        <h3 class="er-panel-title">${a(s("earningsHotTitle"))}</h3>
        <p class="er-panel-lead">${a(s("earningsHotLead"))}</p>
        <div class="er-cards">
          ${n.length?n.map(r=>nt(r,{hot:!0})).join(""):`<p class="er-empty">${a(s("earningsHotEmpty"))}</p>`}
        </div>
      </section>
    </div>
    <p class="er-disclaimer" role="note">${a(s("earningsDisclaimer"))}</p>
  `}function Fa(){return`
    <section class="section earnings-section" aria-label="${a(s("earningsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(s("earningsTitle"))}</h2>
        <p class="view-lead">${a(s("earningsLead"))}</p>
      </header>
      <p class="er-disclaimer er-disclaimer-top" role="note">${a(s("earningsDisclaimer"))}</p>
      <div id="er-root" class="er-root">
        <p class="er-loading">${a(s("loading"))}</p>
      </div>
    </section>`}async function _a(t="#er-root"){const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};try{const i=await fetch(Ba);if(!i.ok)throw new Error(`HTTP ${i.status}`);const n=await i.json();return Ha(e,n),{ok:!0,data:n}}catch(i){return e.innerHTML=`
      <div class="er-blocker" role="alert">
        <p>${a(s("earningsLoadError",{msg:i.message||String(i)}))}</p>
        <p class="er-muted">${a(s("earningsRefreshHow"))}</p>
      </div>`,{ok:!1,error:i}}}const Ua="./data/soxl-desk.json";function Va(t){try{return new Date(t).toLocaleString(B(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return t||"—"}}function ce(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(B(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Ee(t,e=2){return t==null||Number.isNaN(t)?null:`${t>0?"+":""}${Number(t).toFixed(e)}%`}function ot(t,e=2){return t==null||Number.isNaN(t)?null:`${t>0?"+":(t<0,"")}${ce(t,e)}`}function ve(t){return t==null||Number.isNaN(t)||t===0?"sx-flat":t>0?"sx-up":"sx-down"}function Wa(t,e){const i=(e==null?void 0:e.quote)||{},n=i.change,o=i.changePct,l=ve(o??n),r=i.regularClose,m=`
    <section class="sx-hero" aria-label="${a(s("soxlHeroLabel"))}">
      <div class="sx-hero-main">
        <div class="sx-symbol-row">
          <span class="sx-symbol">SOXL</span>
          <span class="sx-badge">3×</span>
          <span class="sx-fund">${a((e==null?void 0:e.fundName)||s("soxlFundFallback"))}</span>
        </div>
        <div class="sx-price-row ${l}">
          <span class="sx-price">$${a(ce(i.price,2)||"—")}</span>
          <span class="sx-chg">${a(ot(n,2)||"—")}</span>
          <span class="sx-chgp">${a(Ee(o,2)||"—")}</span>
        </div>
        <p class="sx-session">${a(i.session||"")} · ${a(s("dataAsOf"))} ${a(Va(e==null?void 0:e.asOf))}</p>
        ${(r==null?void 0:r.price)!=null?`<p class="sx-regular">${a(s("soxlRegularClose"))}: $${a(ce(r.price,2))}
                <span class="${ve(r.changePct)}">${a(ot(r.change,2)||"")} (${a(Ee(r.changePct,2)||"")})</span>
                ${r.session?` · ${a(r.session)}`:""}</p>`:""}
      </div>
      <div class="sx-hero-side">
        <p class="sx-lev">${a(s("soxlLeverageNote"))}</p>
        <p class="sx-hold-date"><strong>${a(s("soxlHoldingsAsOf"))}</strong> ${a((e==null?void 0:e.holdingsAsOf)||"—")}
          <span class="sx-muted">（${a(s("soxlHoldingsNotSameDay"))}）</span></p>
      </div>
    </section>`,h=Array.isArray(e==null?void 0:e.events)?e.events:[],p=h.length?`<section class="sx-events" aria-label="${a(s("soxlEventsTitle"))}">
        <h3 class="sx-h3">${a(s("soxlEventsTitle"))}</h3>
        <ul class="sx-event-list">
          ${h.map(S=>`<li class="sx-event sx-sev-${a(S.severity||"info")}">
              <div class="sx-event-title">${a(S.title||"")}</div>
              <p class="sx-event-detail">${a(S.detail||"")}</p>
            </li>`).join("")}
        </ul>
      </section>`:"",b=Array.isArray(e==null?void 0:e.news)?e.news:[],k=`
    <section class="sx-news" aria-label="${a(s("soxlNewsTitle"))}">
      <h3 class="sx-h3">${a(s("soxlNewsTitle"))}</h3>
      <div class="sx-news-list">
        ${b.length?b.map(S=>`<a class="sx-news-card" href="${a(S.url||"#")}" target="_blank" rel="noopener noreferrer">
              <div class="sx-news-title">${a(S.title||"")}</div>
              ${S.published?`<div class="sx-news-meta">${a(S.published)}</div>`:""}
              ${S.summary?`<p class="sx-news-sum">${a(S.summary)}</p>`:""}
            </a>`).join(""):`<p class="sx-empty">${a(s("soxlNewsEmpty"))}</p>`}
      </div>
    </section>`,u=(Array.isArray(e==null?void 0:e.holdings)?e.holdings:[]).map(S=>{const g=S.ticker||S.instrumentType||"—",f=ve(S.changePct),y=ve(S.contributionPct),E=Array.isArray(S.reasons)?S.reasons:[],$=Array.isArray(S.sources)?S.sources:[];return`<tr>
        <td>
          <div class="sx-tk">${a(String(g))}</div>
          <div class="sx-name">${a(S.name||"")}</div>
          ${S.instrumentType?`<span class="sx-itype">${a(S.instrumentType)}</span>`:""}
        </td>
        <td class="sx-num">${S.weightPct!=null?a(ce(S.weightPct,2))+"%":"—"}</td>
        <td class="sx-num ${f}">${S.changePct!=null?a(Ee(S.changePct,2)):"—"}</td>
        <td class="sx-num ${y}" title="${a(S.contributionNote||s("soxlContributionHint"))}">
          ${S.contributionPct!=null?a(ce(S.contributionPct,3))+" pp*":"—"}
        </td>
        <td class="sx-reasons">
          <ul>${E.map(w=>`<li>${a(w)}</li>`).join("")}</ul>
          ${$.length?`<div class="sx-srcs">${$.slice(0,3).map((w,q)=>`<a href="${a(w)}" target="_blank" rel="noopener noreferrer">${a(s("soxlSourceN",{n:String(q+1)}))}</a>`).join(" · ")}</div>`:""}
        </td>
      </tr>`}).join(""),v=`
    <section class="sx-holdings" aria-label="${a(s("soxlHoldingsTitle"))}">
      <h3 class="sx-h3">${a(s("soxlHoldingsTitle"))}</h3>
      <p class="sx-panel-lead">${a((e==null?void 0:e.holdingsFreshnessNote)||s("soxlHoldingsLead"))}</p>
      <p class="sx-panel-lead sx-muted">${a((e==null?void 0:e.leverageNote)||s("soxlContributionHint"))}</p>
      <div class="sx-table-wrap">
        <table class="sx-table">
          <thead>
            <tr>
              <th>${a(s("soxlColName"))}</th>
              <th>${a(s("soxlColWeight"))}</th>
              <th>${a(s("soxlColReturn"))}</th>
              <th>${a(s("soxlColContrib"))}</th>
              <th>${a(s("soxlColReasons"))}</th>
            </tr>
          </thead>
          <tbody>${u||`<tr><td colspan="5">${a(s("soxlHoldingsEmpty"))}</td></tr>`}</tbody>
        </table>
      </div>
      <p class="sx-footnote">* ${a(s("soxlContributionHint"))}</p>
    </section>`,L=Array.isArray(e==null?void 0:e.overallUpReasons)?e.overallUpReasons:[],x=Array.isArray(e==null?void 0:e.overallDownReasons)?e.overallDownReasons:[],M=`
    <section class="sx-overall" aria-label="${a(s("soxlOverallTitle"))}">
      <h3 class="sx-h3">${a(s("soxlOverallTitle"))}</h3>
      <div class="sx-overall-grid">
        <article class="sx-card sx-card-up">
          <h4>${a(s("soxlWhyUp"))}</h4>
          <ul>${L.map(S=>`<li>${a(S)}</li>`).join("")||`<li>${a(s("earningsDataMissing"))}</li>`}</ul>
        </article>
        <article class="sx-card sx-card-down">
          <h4>${a(s("soxlWhyDown"))}</h4>
          <ul>${x.map(S=>`<li>${a(S)}</li>`).join("")||`<li>${a(s("earningsDataMissing"))}</li>`}</ul>
        </article>
      </div>
    </section>`,D=e!=null&&e.sessionBlocker?`<div class="sx-blocker" role="status"><p>${a(e.sessionBlocker)}</p><p class="sx-muted">${a(s("soxlRefreshHow"))}</p></div>`:"",Y=Array.isArray(e==null?void 0:e.disclaimers)?e.disclaimers:[],U=Y.length?`<ul class="sx-disc-list">${Y.map(S=>`<li>${a(S)}</li>`).join("")}</ul>`:`<p>${a(s("soxlDisclaimer"))}</p>`;t.innerHTML=`
    ${m}
    ${D}
    ${p}
    ${k}
    ${v}
    ${M}
    <div class="sx-disclaimer" role="note">${U}</div>
  `}function ja(){return`
    <section class="section soxl-section" aria-label="${a(s("soxlTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(s("soxlTitle"))}</h2>
        <p class="view-lead">${a(s("soxlLead"))}</p>
      </header>
      <p class="sx-disclaimer sx-disclaimer-top" role="note">${a(s("soxlDisclaimer"))}</p>
      <div id="sx-root" class="sx-root">
        <p class="sx-loading">${a(s("loading"))}</p>
      </div>
    </section>`}async function za(t="#sx-root"){const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};try{const i=await fetch(Ua);if(!i.ok)throw new Error(`HTTP ${i.status}`);const n=await i.json();return Wa(e,n),{ok:!0,data:n}}catch(i){return e.innerHTML=`
      <div class="sx-blocker" role="alert">
        <p>${a(s("soxlLoadError",{msg:i.message||String(i)}))}</p>
        <p class="sx-muted">${a(s("soxlRefreshHow"))}</p>
      </div>`,{ok:!1,error:i}}}const Ga="./data/latest.json";function _(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function F(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function X(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(B(),{minimumFractionDigits:e,maximumFractionDigits:e})}function de(t,e){if(t==null||Number.isNaN(t))return"—";const i=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${X(t,i)}`}function Ya(t){try{return new Date(t).toLocaleString(B(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+s("taipei")}catch{return t}}function ze(t){const e=t.aboveSma20?`<span class="badge sma-on">${d("sma20","SMA20")}↑</span>`:`<span class="badge sma-off">${d("sma20","SMA20")}↓</span>`,i=t.aboveSma50?`<span class="badge sma-on">${d("sma50","SMA50")}↑</span>`:`<span class="badge sma-off">${d("sma50","SMA50")}↓</span>`;return e+i}function Ge(t){return t!=null&&t.length?t.map(e=>{const i=String(e);return i==="A"?`<span class="badge screen">${d("screenA","A")}</span>`:i==="B"?`<span class="badge screen">${d("screenB","B")}</span>`:i==="C"?`<span class="badge screen">${d("screenC","C")}</span>`:i==="observe"?`<span class="badge screen">${a(s("observe"))}</span>`:`<span class="badge screen">${a(i)}</span>`}).join(""):""}function Xa(t){var n,o,l,r,m;const e=[],i=(h,p,b)=>{if(!b)return;const k=b.incomplete,T=b.value!=null?X(b.value,2):k?a(s("dataIncomplete")):"—",u=b.dayPct!=null?`<div class="pct ${_(b.dayPct)}">${F(b.dayPct)}</div>`:"",v=b.session==="intraday"?` · ${d("intraday",s("intraday"))}`:"";e.push(`
      <div class="index-chip ${k?"incomplete":""}">
        <div class="label">${p}${v}</div>
        <div class="value">${T}</div>
        ${u}
      </div>
    `)};if(i("tw",d("taiex",((n=t.tw)==null?void 0:n.name)||s("taiex")),t.tw),i("otc",d("otc",((o=t.otc)==null?void 0:o.name)||s("otc")),t.otc),i("spx",d("spx",((l=t.spx)==null?void 0:l.name)||s("spx")),t.spx),i("nasdaq",d("nasdaq",((r=t.nasdaq)==null?void 0:r.name)||s("nasdaq")),t.nasdaq),i("sox",d("sox",((m=t.sox)==null?void 0:m.name)||s("sox")),t.sox),t.usdTwd){const h=t.usdTwd,p=h.taipeiClose??h.yahoo;e.push(`
      <div class="index-chip">
        <div class="label">${d("usdtwd",s("usdtwd"))}</div>
        <div class="value">${X(p,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          ${a(s("taipeiClose"))} ${h.taipeiClose!=null?X(h.taipeiClose,3):"—"}
          · Yahoo ${h.yahoo!=null?X(h.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${e.join("")}</div>`}function Za(t,e){const i=t.market==="TW"?d("twStock",s("twStock")):t.market==="US"?d("usStock",s("usStock")):a(t.market||""),n=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${d("rs","RS")}</div><div class="m-val ${_(t.rsVsIndexPp)}">${F(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">${d("priorClose",s("priorCloseFull"))}</div><div class="m-val ${_(t.priorClosePct)}">${F(t.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${d("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${e}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${a(t.ticker)}</div>
          <div class="name">${a(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${de(t.price,t.currency)}</div>
          <div class="day-pct ${_(t.dayPct)}">${F(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${i}</span>
        ${Ge(t.screens)}
        ${ze(t)}
      </div>
      <div class="metrics">
        ${n}
        <div class="metric"><div class="m-label">${d("pct5d",s("pct5d"))}</div><div class="m-val ${_(t.pct5d)}">${F(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${d("pct1m",s("pct1m"))}</div><div class="m-val ${_(t.pct1m)}">${F(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${d("volRatio",s("volRatio"))}</div><div class="m-val">${t.volRatio!=null?X(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business||t.why||t.risk?`<details class="fold-block card-fold"><summary>${a(s("details"))}</summary>
        ${t.business?`<p class="card-text"><strong>${a(s("business"))}</strong>　${a(t.business)}</p>`:""}
        ${t.why?`<p class="card-text"><strong>${a(s("reason"))}</strong>　${a(t.why)}</p>`:""}
        ${t.risk?`<p class="card-text risk"><strong>${a(s("risk"))}</strong>　${qt(t.risk)}</p>`:""}
      </details>`:""}
      <div data-ticker-comments="${a(t.ticker)}" data-market="${a(t.market==="TW"||String(t.ticker).endsWith(".TW")?"TW":"US")}"></div>
    </article>
  `}function qt(t){let e=a(t);return e=e.replace(/漲停/g,d("limitUp",s("limitUp"))),e=e.replace(/動能/g,d("momentum",s("momentum"))),e}function rt(t){return t.map(e=>{const i=e.rsVsIndexPp??e.priorClosePct,n=e.rsVsIndexPp!=null?F(e.rsVsIndexPp):e.priorClosePct!=null?F(e.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${a(e.ticker)}</span></td>
        <td class="name-cell">${a(e.name||"")}</td>
        <td class="num">${de(e.price,e.currency)}</td>
        <td class="num ${_(e.dayPct)}">${F(e.dayPct)}</td>
        <td class="num ${_(i)}">${n}</td>
        <td class="num ${_(e.pct5d)}">${F(e.pct5d)}</td>
        <td class="num ${_(e.pct1m)}">${F(e.pct1m)}</td>
        <td class="num">${e.volRatio!=null?X(e.volRatio,2)+"×":"—"}</td>
        <td>${ze(e)}</td>
        <td>${Ge(e.screens)}</td>
        <td class="why-cell">${a(e.why||"")}</td>
      </tr>`}).join("")}function lt(t){return t.map(e=>{const i=e.rsVsIndexPp!=null?`<span class="${_(e.rsVsIndexPp)}">${d("rs","RS")} ${F(e.rsVsIndexPp)}</span>`:e.priorClosePct!=null?`<span class="${_(e.priorClosePct)}">${d("priorClose",s("priorClose"))} ${F(e.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${a(e.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${a(e.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${de(e.price,e.currency)}</div>
            <div class="${_(e.dayPct)}" style="font-family:var(--mono);font-weight:600">${F(e.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${i}
          <span class="${_(e.pct5d)}">${d("pct5d","5d")} ${F(e.pct5d)}</span>
          <span class="${_(e.pct1m)}">${d("pct1m","1m")} ${F(e.pct1m)}</span>
          <span>${d("volRatio",s("volRatio"))} ${e.volRatio!=null?X(e.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${ze(e)}${Ge(e.screens)}</div>
        ${e.why?`<p class="lc-why">${a(e.why)}</p>`:""}
        ${e.risk&&e.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">${a(s("risk"))}：${qt(e.risk)}</p>`:""}
        <div data-ticker-comments="${a(e.ticker)}" data-market="${a(String(e.ticker).endsWith(".TW")||e.market==="TW"?"TW":"US")}"></div>
      </div>`}).join("")}function Ka(){return`
    <tr>
      <th>${d("ticker",s("ticker"))}</th>
      <th>${a(s("name"))}</th>
      <th>${a(s("price"))}</th>
      <th>${d("dayPct",s("dayPct"))}</th>
      <th>${d("rs","RS")}／${d("priorClose",s("priorClose"))}</th>
      <th>${d("pct5d",s("pct5d"))}</th>
      <th>${d("pct1m",s("pct1m"))}</th>
      <th>${d("volRatio",s("volRatio"))}</th>
      <th>${a(s("ma"))}</th>
      <th>${d("screening",s("screening"))}</th>
      <th>${a(s("reason"))}</th>
    </tr>`}function Qa(t){if(!t)return"";const e=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${d("adr","ADR")} ${d("parity",s("parity"))}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${d("usStock",s("usStock"))} ${d("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${de(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${d("adsRatio",s("adsRatio"))}</span>　<strong>${a(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>${d("parity",s("implied"))}</span>　<strong>${t.impliedUsdTaipeiFx!=null?X(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${d("premium",s("premium"))}</span>　<strong class="${_(e)}">${F(e)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${d("twStock",s("twStock"))}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${de(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${a(t.note)}</p>`:""}
      </div>
    </section>
  `}function Ja(){return'<div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>'}function ct(t){return t?t.market==="TW"||t.market==="US"?t.market:String(t.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function ei(t){return t==="TW"?"__TW__":"__US__"}function dt(t,e){return t.length?`<div class="top5-grid">${t.map((i,n)=>Za(i,n+1)).join("")}</div>`:`<div class="empty-state">${a(s("emptyTop",{market:e}))}</div>`}function ti(t){return`
    <div class="chat-room" id="chat-room" data-market="US" data-mode="lobby">
      <header class="chat-header">
        <div class="chat-header-main">
          <h2 class="chat-header-title" id="chat-room-title">${a(s("usLobby"))}</h2>
          <div class="chat-market-tabs" role="tablist" aria-label="${a(s("market"))}">
            <button type="button" class="chat-mkt active" data-chat-market="US" role="tab" aria-selected="true">${a(s("chatUs"))}</button>
            <button type="button" class="chat-mkt" data-chat-market="TW" role="tab" aria-selected="false">${a(s("chatTw"))}</button>
          </div>
        </div>
        <div class="chat-header-tools">
          <label class="chat-fx-toggle chat-fx-toggle--header" title="${a(s("danmakuFx"))}">
            <input type="checkbox" data-danmaku-toggle />
            <span>${a(s("danmakuFx"))}</span>
          </label>
          <details class="chat-menu">
            <summary aria-label="${a(s("chatMore"))}" title="${a(s("chatMore"))}">⋮</summary>
            <div class="chat-menu-panel">
              <label class="chat-fx-toggle">
                <input type="checkbox" data-danmaku-toggle />
                <span>${a(s("danmakuFx"))}</span>
              </label>
            </div>
          </details>
        </div>
      </header>
      <div id="ss-chat-mount" class="chat-panel" aria-label="${a(s("chatRoom"))}"></div>
      <details class="fold-block chat-external">
        <summary>${a(s("externalDiscuss"))}</summary>
        <div id="ss-social-digest" aria-label="${a(s("externalDigest"))}"></div>
        <div id="ss-giscus" class="ss-giscus-section" aria-label="Giscus">
          <div class="ss-giscus-host"></div>
        </div>
      </details>
    </div>
  `}function si(){return[{id:"today",label:s("navToday"),hash:"today"},{id:"logic",label:s("navLogic"),hash:"logic"},{id:"research",label:s("navResearch"),hash:"research"},{id:"strategies",label:s("navStrategies"),hash:"strategies"},{id:"options",label:s("navOptions"),hash:"options"},{id:"earnings",label:s("navEarnings"),hash:"earnings"},{id:"soxl",label:s("navSoxl"),hash:"soxl"},{id:"paper",label:s("navPaper"),hash:"paper"},{id:"social",label:s("navSocial"),hash:"social"}]}const It={today:"today",logic:"logic",research:"research",strategies:"strategies",options:"options",earnings:"earnings",soxl:"soxl",paper:"paper",social:"social",help:"logic",glossary:"logic",bookshelf:"research",library:"research",研究:"research","us-options":"options",選擇權:"options",美股選擇權:"options",mcmillan:"options",讀財報:"earnings",reports:"earnings","us-earnings":"earnings",財報:"earnings","soxl-desk":"soxl",semiconductor:"soxl",半導體:"soxl",三倍半導體:"soxl",danmaku:"social","social-digest":"social",giscus:"social",method:"logic",邏輯:"logic"},ai={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',logic:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 2h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v5h-2v-5z"/></svg>',research:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8V12zm0 3.5h8V17H8v-1.5zm0 3.5h5V20.5H8V19z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',options:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 12a8 8 0 1 1 16 0H4zm8-6a6 6 0 0 0-5.65 4h11.3A6 6 0 0 0 12 6zm0 12a6 6 0 0 0 5.65-4H6.35A6 6 0 0 0 12 18z"/></svg>',earnings:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h6v-2H7z"/></svg>',soxl:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 17.25 9.5 9l3.5 4.5L17 8l4 9.25H3zM5 19h14v2H5v-2z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',social:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.5 3.1 6L5 21l4.3-1.4c.9.3 1.8.4 2.7.4 5 0 9-3.6 9-8s-4-8-9-8zm-1 5h2v5h-2V8zm0 6h2v2h-2v-2z"/></svg>'};function He(){const t=(location.hash||"").replace(/^#/,"").split(/[/?]/)[0].toLowerCase();return It[t]||"today"}function pt(t){return si().map(e=>{const i=ai[e.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${e.id}"
        data-variant="${t}"
        aria-label="${a(e.label)}"
        aria-current="false">
        <span class="nav-icon">${i}</span>
        <span class="nav-label">${a(e.label)}</span>
      </button>`}).join("")}function ii(t,e){const i=t.top5||[],n=t.us||[],o=t.tw||[],l=a(s("disclaimer")),r=Ka();return`
    ${Ja()}

    <header class="site-chrome">
      <div class="chrome-row">
        <div class="chrome-brand">
          <img class="brand-mark" src="/Just-Math-and-Luck/logo.png?v=3" width="40" height="40" alt="每日數學選股" decoding="async" />
          <div class="brand-text">
            <h1>${a(s("siteTitle"))}</h1>
            <p class="brand-meta">${a(s("dataAsOf"))} ${Ya(t.asOf)}</p>
          </div>
        </div>
        <div class="chrome-actions">
          <label class="chrome-danmaku-toggle" title="${a(s("danmakuFx"))}">
            <input type="checkbox" data-danmaku-toggle />
            <span>${a(s("danmakuFx"))}</span>
          </label>
          ${Zt()}
          <nav class="nav-desktop" aria-label="${a(s("navMain"))}">
            ${pt("desktop")}
          </nav>
        </div>
      </div>
      <p class="disclaimer-line" role="note">${l}</p>
      <div class="market-strip-wrap" aria-label="${a(s("marketQuotes"))}">
        <span class="market-strip-label">${a(s("hot"))}</span>
        ${Xa(t.indices||{})}
      </div>
    </header>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">${a(s("todayPicks"))}</h2>
        </header>
        ${qs(t.marketRegime)}
        <div class="tabs market-tabs" role="tablist" aria-label="${a(s("market"))}">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${d("usStock",s("usStock"))}（${n.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${d("twStock",s("twStock"))}（${o.length}）</button>
        </div>
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${a(s("usTop"))}</h2>
            ${dt(i.filter(h=>ct(h)==="US"),s("usStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${a(s("usList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${r}</thead>
                <tbody>${rt(n)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${lt(n)}</div>
          </section>
        </div>
        <div class="panel" id="panel-tw" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${a(s("twTop"))}</h2>
            ${dt(i.filter(h=>ct(h)==="TW"),s("twStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${a(s("twList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${r}</thead>
                <tbody>${rt(o)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${lt(o)}</div>
          </section>
        </div>
        ${Qa(t.parity)}
      </div>
      <div class="view" id="view-logic" data-view="logic" hidden>
        <span id="logic" class="view-anchor" tabindex="-1"></span>
        ${Os(t)}
      </div>

      <div class="view" id="view-research" data-view="research" hidden>
        <span id="research" class="view-anchor" tabindex="-1"></span>
        ${ga()}
      </div>

      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${Ys()}
      </div>

      <div class="view" id="view-options" data-view="options" hidden>
        <span id="options" class="view-anchor" tabindex="-1"></span>
        ${Ea()}
      </div>

      <div class="view" id="view-earnings" data-view="earnings" hidden>
        <span id="earnings" class="view-anchor" tabindex="-1"></span>
        ${Fa()}
      </div>

      <div class="view" id="view-soxl" data-view="soxl" hidden>
        <span id="soxl" class="view-anchor" tabindex="-1"></span>
        ${ja()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${ns(e)}
      </div>

      <div class="view view-social" id="view-social" data-view="social" hidden>
        <span id="social" class="view-anchor" tabindex="-1"></span>
        ${ti()}
      </div>
    </main>

    <nav class="nav-bottom" aria-label="${a(s("navMain"))}">
      ${pt("mobile")}
    </nav>

    <p class="site-footer">${a(s("footer"))}</p>
  `}function ni(t,e){t.querySelectorAll(".nav-item").forEach(i=>{const n=i.dataset.nav===e;i.classList.toggle("is-active",n),i.setAttribute("aria-current",n?"page":"false")})}function Ot(t,e,{updateHash:i=!0,scrollTop:n=!0}={}){const o=It[e]||"today";if(t.querySelectorAll(".view").forEach(l=>{const r=l.dataset.view===o;l.hidden=!r,l.classList.toggle("is-active",r)}),ni(t,o),i){const l=`#${o}`;location.hash!==l&&history.replaceState(null,"",l)}return n&&window.scrollTo(0,0),o}let fe=null;function oi(t){const e=(i,n)=>Ot(t,i,n);return t.querySelectorAll(".nav-item").forEach(i=>{i.addEventListener("click",()=>e(i.dataset.nav))}),t.querySelectorAll("[data-jump]").forEach(i=>{i.addEventListener("click",()=>e(i.dataset.jump))}),fe&&window.removeEventListener("hashchange",fe),fe=()=>e(He(),{updateHash:!1}),window.addEventListener("hashchange",fe),e(He(),{updateHash:!0,scrollTop:!1}),{go:e}}function ri(t){const e=t.querySelectorAll(".tab-btn");e.forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.tab;e.forEach(o=>{const l=o.dataset.tab===n;o.classList.toggle("active",l),o.setAttribute("aria-selected",l?"true":"false")}),t.querySelectorAll(".panel").forEach(o=>{o.classList.toggle("active",o.id===`panel-${n}`)})})})}function li(t,e,{config:i,digest:n}={}){const o=t.querySelector("#chat-room");if(!o)return;const l=o.querySelector("#ss-chat-mount"),r=o.querySelector("#chat-room-title"),m=o.querySelectorAll(".chat-mkt");let h=null,p="US";const b=u=>{r&&(r.textContent=u)},k=()=>{if(!l)return;h!=null&&h.destroy&&h.destroy();const u=ei(p),v=s(p==="TW"?"twLobby":"usLobby");b(v),h=hs(l,u,{config:i,market:p,title:v,emptyLine:s("noMessages"),maxLen:80})};m.forEach(u=>{u.addEventListener("click",()=>{p=u.dataset.chatMarket,o.dataset.market=p,m.forEach(v=>{const L=v===u;v.classList.toggle("active",L),v.setAttribute("aria-selected",L?"true":"false")}),k()})});const T=u=>{const v=o.querySelector(".chat-menu");v&&v.open&&!v.contains(u.target)&&(v.open=!1)};return document.addEventListener("click",T),k(),{destroy(){document.removeEventListener("click",T),h!=null&&h.destroy&&h.destroy()}}}let re=null,le=null,Ye=null,Ht=null,Ne=null;async function Ft(t){const e=Ye,i=Ht,n=He();t.innerHTML=ii(e,i),document.title=s("siteTitle"),vt(),oi(t),Ot(t,n,{updateHash:!0,scrollTop:!1}),ri(t),os(t),Kt(t),await Qs("#xq-root"),await fa("#rl-root"),await Na("#uo-root"),await _a("#er-root"),await za("#sx-root");let o=Ne;const l=await Ds("#ss-social-digest",ae.socialDigestUrl);if(l!=null&&l.ok)o=l.data,Ne=o;else if(!o)try{o=await Tt(ae.socialDigestUrl),Ne=o}catch{o=null}re!=null&&re.destroy&&re.destroy(),re=li(t,e,{config:ae,digest:o}),le!=null&&le.destroy&&le.destroy(),le=cs(t),xs(t,{config:ae,digest:o}),Ls("#ss-giscus",{config:ae})}async function ci(){const t=document.getElementById("app");!t||!Ye||await Ft(t)}async function Fe(){const t=document.getElementById("app");vt();const e=document.getElementById("loading");e&&(e.textContent=s("loading"));try{const i=await fetch(Ga);if(!i.ok)throw new Error(`HTTP ${i.status}`);Ye=await i.json(),Ht=await rs(),await Ft(t),Fe._langHooked||(Fe._langHooked=!0,Vt(()=>{ci()}))}catch(i){t.innerHTML=`<div class="error">${a(s("loadError",{msg:i.message}))}</div>`}}function di(){if(!("serviceWorker"in navigator))return;const t="/Just-Math-and-Luck/",e=`${t}sw.js`;window.addEventListener("load",()=>{navigator.serviceWorker.register(e,{scope:t}).catch(()=>{})})}const ut="jml-pwa-hint-dismissed";function pi(){try{if(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)return!0}catch{}return!1}function ui(){return/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")}function gi(){var o;if(pi()||!ui())return;try{if(localStorage.getItem(ut)==="1")return}catch{return}if(document.getElementById("pwa-install-hint"))return;const t=document.createElement("div");t.id="pwa-install-hint",t.className="pwa-install-hint",t.setAttribute("role","status");const i=/iPhone|iPad|iPod/i.test(navigator.userAgent||"")?"可「分享 → 加入主畫面」離線開啟":"可加入主畫面，離線也能開";t.innerHTML=`<span class="pwa-install-hint__text">${i}</span><button type="button" class="pwa-install-hint__close" aria-label="關閉">×</button>`,document.body.appendChild(t);const n=()=>{t.remove();try{localStorage.setItem(ut,"1")}catch{}};(o=t.querySelector(".pwa-install-hint__close"))==null||o.addEventListener("click",n),window.setTimeout(()=>{t.isConnected&&t.classList.add("pwa-install-hint--fade")},8e3),window.setTimeout(()=>{t.isConnected&&n()},12e3)}di();Fe();window.setTimeout(()=>{try{gi()}catch{}},2500);
