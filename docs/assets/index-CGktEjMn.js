(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const z={},_={supabaseUrl:typeof import.meta<"u"&&(z==null?void 0:z.VITE_SUPABASE_URL)||"https://whlpzhceivahkuanmmui.supabase.co",supabaseAnonKey:typeof import.meta<"u"&&(z==null?void 0:z.VITE_SUPABASE_ANON_KEY)||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",giscus:{enabled:!0,repo:"WenZurich/Just-Math-and-Luck-",repoId:"R_kgDOUcO78Q",category:"General",categoryId:"DIC_kwDOUcO78c4DFrWU",mapping:"specific",theme:"dark",lang:"zh-TW",perTicker:!1},socialDigestUrl:"./data/social-digest.json",latestUrl:"./data/latest.json",danmakuMaxLen:80,commentMaxLen:500,pollIntervalMs:8e3,postCooldownMs:4e3};globalThis.STOCK_SOCIAL_CONFIG=Object.assign(globalThis.STOCK_SOCIAL_CONFIG||{},_);const De=[{id:"zh-Hant",label:"繁體中文",short:"繁"},{id:"en",label:"English",short:"EN"},{id:"zh-Hans",label:"简体中文",short:"简"},{id:"ja",label:"日本語",short:"日"}],Ne=De.map(t=>t.id),Re="site-lang",ue="zh-Hant",pe=new Set;function Ke(){try{const e=localStorage.getItem(Re);if(e&&Ne.includes(e))return e}catch{}const t=typeof navigator<"u"&&navigator.language||"";return/^zh[-_]?(CN|Hans|SG)/i.test(t)?"zh-Hans":/^zh/i.test(t)?"zh-Hant":/^ja/i.test(t)?"ja":/^en/i.test(t)?"en":ue}let E=Ke();function Qe(t){if(!Ne.includes(t)||t===E)return!1;E=t;try{localStorage.setItem(Re,t)}catch{}return typeof document<"u"&&(document.documentElement.lang=t==="zh-Hant"?"zh-Hant":t==="zh-Hans"?"zh-Hans":t),pe.forEach(e=>{try{e(t)}catch{}}),!0}function Xe(t){return pe.add(t),()=>pe.delete(t)}function R(){return E==="en"?"en-US":E==="ja"?"ja-JP":E==="zh-Hans"?"zh-CN":"zh-TW"}function Me(){typeof document>"u"||(document.documentElement.lang=E==="zh-Hant"?"zh-Hant":E==="zh-Hans"?"zh-Hans":E)}const se={siteTitle:"每日數學選股",loading:"載入中…",disclaimer:"投資涉及風險，資訊僅供參考，非投資建議",footer:"投資涉及風險，資訊僅供參考，非投資建議",dataAsOf:"資料",taipei:"（台北）",navMain:"主要導覽",navToday:"今日",navStrategies:"策略",navPaper:"模擬",navSocial:"社群",todayPicks:"今日選股",market:"市場",hot:"熱門",marketQuotes:"市場報價",usStock:"美股",twStock:"台股",usList:"美股清單",twList:"台股清單",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暫無 Top 候選",ticker:"代碼",name:"名稱",price:"價格",dayPct:"日漲跌",rs:"RS",priorClose:"前收",priorCloseFull:"前收漲幅",pct5d:"5 日",pct1m:"約 1 月",volRatio:"量比",ma:"均線",screening:"篩選",reason:"理由",details:"詳情",business:"本業",risk:"風險",observe:"觀察",dataIncomplete:"資料不全",intraday:"盤中",taipeiClose:"台北收",adr:"ADR",parity:"平價",implied:"隱含價",premium:"溢價",adsRatio:"換股比",taiex:"台灣加權 TAIEX",otc:"櫃買",spx:"S&P 500",nasdaq:"Nasdaq",sox:"SOX",usdtwd:"USD/TWD",loadError:"無法載入資料（{msg}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。",langLabel:"語言",chatUs:"美股",chatTw:"台股",danmakuFx:"彈幕效果",chatMore:"更多",nickLabel:"暱稱",room:"房間",lobby:"大廳",perTicker:"個股",usTickers:"美股標的",twTickers:"台股標的",noUsTickers:"暫無美股標的",noTwTickers:"暫無台股標的",chatRoom:"聊天室",externalDiscuss:"外部討論",externalDigest:"外部討論摘要",usLobby:"美股大廳",twLobby:"台股大廳",noMessages:"目前尚無訊息",noComments:"目前尚無留言",noTickersDiscuss:"此市場目前無標的可討論",paper:"模擬",paperMissing:"尚無模擬帳本檔案。請於專案執行 npm run paper。",paperDisclaimer:"累積模擬帳戶（自 {date} 起） · 不會每日歸零 · 買進即成交 · 非真實下單",paperRules:"規則（各市場獨立帳）",paperRuleTw:"台股本金 NT$3,000,000 · 整張成交",paperRuleUs:"美股本金 US$100,000 · 可買 1 股起",paperRuleBuy:"買：該市場名單·風險1%·停距1.5%·單檔≤8% · 即成交",paperRuleSell:"賣：停損−3% · 停利+12%半倉 · 破SMA20且日跌>2% · 離名單虧損 · 漲停隔日−5%",paperTabTw:"台股帳 · NT$",paperTabUs:"美股帳 · US$",paperBookTw:"台股帳本（NT$）",paperBookUs:"美股帳本（US$）",principal:"本金",cash:"現金",equity:"權益（部位＋現金）",totalPnl:"總損益",totalPnlPct:"總損益 ％",weekPerf:"週績效",monthPerf:"月績效",quarterPerf:"季績效",yearPerf:"年績效",sinceInception:"成立以來",noTradesToday:"本日尚無此類成交（模擬）",noPositions:"目前沒有持股",buy:"買",sell:"賣",shares:"股",qtyShares:"股數",positions:"目前部位",position:"部位",avgCost:"成本",mark:"現價",unrealizedPnl:"未實現損益",unrealizedPct:"未實現 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累積 · 買進即成交",reasonScreenBuy:"名單新開倉",reasonAdd:"持續買進",reasonStop:"停損",reasonTakeProfit:"停利",reasonMomentumBreak:"動能轉弱",reasonOffList:"離開名單",reasonLimitUpChase:"漲停追價急殺",stopLoss:"停損",takeProfit:"停利",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"績效",qty:"數量",note:"說明",strategyScreen:"策略選股",strategyLead:"台／美命中分開檢視 · 缺資料標「不足」",strategyLoading:"載入策略結果中…",strategyEmpty:"尚無策略資料。請執行 npm run strategies。",strategyLoadError:"無法載入策略選股（{msg}）。請確認已執行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分類",hitCount:"檔命中",hitTitle:"命中檔數",strategyDetails:"詳情 · 策略說明",conditions:"條件",results:"篩選結果",copyJson:"複製 JSON",exportCsv:"匯出此策略 CSV",exportJson:"匯出 JSON",copied:"已複製",noHitsExport:"此策略今日無命中列可匯出",incomplete:"不足",hitsTotal:"共{n}檔",twOnlyHint:"本策略僅台股",hitMarket:"命中市場",noHits:"本日無命中",dataInsufficient:"資料不足",calibTitle:"校準說明",incompleteFilters:"未檢查濾網（不算通過）：",sessionTwse:"證交所 session",ohlcvBar:"OHLCV K棒",generated:"產生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精選",cat價量:"價量",cat籌碼:"籌碼",cat財務:"財務",cat大師:"大師",cat週期:"週期",regimeToday:"今日市場週期（美／台分開）",psychologyPhase:"心理相位",cycleStance:"週期姿態",liquidityBias:"流動性偏誤",temperatureScore:"市場溫度",sizeMult:"部位乘數",regimeTags:"週期標籤",dataGaps:"資料缺口",marketRegime:"市場週期",backendOff:"討論功能尚未啟用",localComments:"本站留言",futu:"富途",nickPlaceholder:"暱稱（選填）",commentPlaceholder:"留言",commentInput:"輸入留言",send:"送出",guest:"訪客",noLocalComments:"尚無留言",backendNotConnected:"後端未接上",readFail:"讀取失敗：{msg}",sendFail:"發送失敗：{msg}",sendFailShort:"發送失敗",noSource:"無 {source}",newsClues:"新聞／討論線索（非留言）",relatedNews:"相關公開新聞（非社群評論）",messages:"訊息",giscusUnset:"Giscus 尚未設定（需 repoId／categoryId）。請見說明文件。",manualOpen:"手動開啟",noSnippet:"(無摘要)",noTickerData:"此標的暫無{kind}資料",viaBackup:"來源備援：{via}",noDigestBlock:"無 {title} 區塊（今日無對應市場標的或尚未抓取）",socialDigestMarket:"社交摘要市場",socialDigestTitle:"網友參考",socialUs:"美股來源",socialTw:"台股來源",externalDigestShort:"外部摘要",routingNote:"路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads",socialUsTab:"美股 Reddit／富途",socialTwTab:"台股 PTT／Dcard／Threads",socialLoadFail:"社交摘要尚未產生或讀取失敗：{msg}",futuFull:"富途牛牛",sma20:"SMA20",sma50:"SMA50",screenA:"A",screenB:"B",screenC:"C",condPass:"條件",condFail:"未過",condSkip:"略過",pe:"本益比",opMargin:"營益率",grossMargin:"毛利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自營商",maBull:"均線多頭",rsi:"RSI",amplitude:"振幅",zhang:"張",limitUp:"漲停",momentum:"動能",metricPrice:"價格",metricDayPct:"日漲跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(張)",metricDebt:"負債比%",metricDirector:"董監持股%",metricOpQ:"近季營益率%",metricSource:"來源",foreign1d:"外資1日(張)",trust1d:"投信1日(張)",dealer1d:"自營商1日(張)",foreign5d:"外資5日(張)",trust5d:"投信5日(張)",dealer5d:"自營5日(張)"},et={...se,siteTitle:"Daily Quant Picks",loading:"Loading…",disclaimer:"Investing involves risk. For reference only — not investment advice.",footer:"Investing involves risk. For reference only — not investment advice.",dataAsOf:"As of",taipei:" (Taipei)",navMain:"Main navigation",navToday:"Today",navStrategies:"Strategies",navPaper:"Paper",navSocial:"Community",todayPicks:"Today's picks",market:"Market",hot:"Markets",marketQuotes:"Market quotes",usStock:"US",twStock:"TW",usList:"US list",twList:"TW list",usTop:"US Top",twTop:"TW Top",emptyTop:"No Top picks for {market}",ticker:"Ticker",name:"Name",price:"Price",dayPct:"Day %",rs:"RS",priorClose:"Prior close",priorCloseFull:"Prior-close %",pct5d:"5D",pct1m:"~1M",volRatio:"Vol ratio",ma:"MAs",screening:"Screen",reason:"Why",details:"Details",business:"Business",risk:"Risk",observe:"Watch",dataIncomplete:"Incomplete",intraday:"Intraday",taipeiClose:"Taipei close",adr:"ADR",parity:"Parity",implied:"Implied",premium:"Premium",adsRatio:"ADS ratio",taiex:"TAIEX",otc:"OTC",loadError:"Failed to load data ({msg}). Serve statically with data/latest.json present.",langLabel:"Language",chatUs:"US",chatTw:"TW",danmakuFx:"Danmaku",chatMore:"More",nickLabel:"Nick",room:"Room",lobby:"Lobby",perTicker:"Ticker",usTickers:"US tickers",twTickers:"TW tickers",noUsTickers:"No US tickers",noTwTickers:"No TW tickers",chatRoom:"Chat",externalDiscuss:"External discussion",externalDigest:"External digest",usLobby:"US lobby",twLobby:"TW lobby",noMessages:"No messages yet",noComments:"No comments yet",noTickersDiscuss:"No tickers to discuss in this market",paper:"Paper",paperMissing:"No paper portfolio file. Run npm run paper in the project.",paperDisclaimer:"Cumulative paper account (since {date}) · not reset daily · fills on signal · not real orders",paperRules:"Rules (separate books per market)",paperRuleTw:"TW principal NT$3,000,000 · round lots",paperRuleUs:"US principal US$100,000 · from 1 share",paperRuleBuy:"Buy: list · 1% risk · 1.5% stop · ≤8% per name · immediate fill",paperRuleSell:"Sell: −3% stop · +12% half take-profit · below SMA20 & day <−2% · off-list & losing · limit-up next-day −5%",paperTabTw:"TW book · NT$",paperTabUs:"US book · US$",paperBookTw:"TW book (NT$)",paperBookUs:"US book (US$)",principal:"Principal",cash:"Cash",equity:"Equity (positions + cash)",totalPnl:"Total P&L",totalPnlPct:"Total P&L %",weekPerf:"Week",monthPerf:"Month",quarterPerf:"Quarter",yearPerf:"Year",sinceInception:"Since inception",noTradesToday:"No trades of this type today (paper)",noPositions:"No open positions",buy:"Buy",sell:"Sell",shares:"sh",qtyShares:"Shares",positions:"Positions",position:"Position",avgCost:"Avg cost",mark:"Mark",unrealizedPnl:"Unrealized P&L",unrealizedPct:"Unrealized %",recentTrades:"Trades (last 40)",paperSession:"{date} · since {inception} · fills on signal",reasonScreenBuy:"New from list",reasonAdd:"Add",reasonStop:"Stop-loss",reasonTakeProfit:"Take-profit",reasonMomentumBreak:"Momentum break",reasonOffList:"Off list",reasonLimitUpChase:"Limit-up chase unwind",stopLoss:"Stop-loss",takeProfit:"Take-profit",paperTrade:"Paper",realizedPnl:"P&L",periodPerf:"Performance",qty:"Qty",note:"Note",strategyScreen:"Strategy screener",strategyLead:"US / TW hits viewed separately · incomplete marked",strategyLoading:"Loading strategies…",strategyEmpty:"No strategy data. Run npm run strategies.",strategyLoadError:"Failed to load strategies ({msg}). Run npm run strategies.",strategyList:"Strategies",strategyCat:"Categories",hitCount:"hits",hitTitle:"Hit count",strategyDetails:"Details · strategy notes",conditions:"Conditions",results:"Results",copyJson:"Copy JSON",exportCsv:"Export CSV",exportJson:"Export JSON",copied:"Copied",noHitsExport:"No hit rows to export for this strategy today",incomplete:"N/A",hitsTotal:"{n} hits",twOnlyHint:"TW only",hitMarket:"Hit market",noHits:"No hits today",dataInsufficient:"Insufficient data",calibTitle:"Calibration",incompleteFilters:"Unchecked filters (not counted): ",sessionTwse:"TWSE session",ohlcvBar:"OHLCV bar",generated:"Generated",universeTw:"TW universe",universeUs:"US universe",cat精選:"Featured",cat價量:"Price/Vol",cat籌碼:"Flow",cat財務:"Fundamentals",cat大師:"Masters",cat週期:"Cycle",regimeToday:"Today's market regime (US / TW separate)",psychologyPhase:"Psychology phase",cycleStance:"Cycle stance",liquidityBias:"Liquidity bias",temperatureScore:"Temperature score",sizeMult:"Size mult",regimeTags:"Regime tags",dataGaps:"Data gaps",marketRegime:"Market regime",backendOff:"Discussion backend not enabled",localComments:"Site comments",futu:"Futu",nickPlaceholder:"Nickname (optional)",commentPlaceholder:"Comment",commentInput:"Write a comment",send:"Send",guest:"Guest",noLocalComments:"No comments yet",backendNotConnected:"Backend not connected",readFail:"Read failed: {msg}",sendFail:"Send failed: {msg}",sendFailShort:"Send failed",noSource:"No {source}",newsClues:"News / discussion clues (not comments)",relatedNews:"Related public news (not social comments)",messages:"Messages",giscusUnset:"Giscus not configured (needs repoId / categoryId).",manualOpen:"Open manually",noSnippet:"(no snippet)",noTickerData:"No {kind} data for this ticker",viaBackup:"Backup source: {via}",noDigestBlock:"No {title} block (no tickers or not fetched)",socialDigestMarket:"Social digest market",socialDigestTitle:"Social digest",socialUs:"US sources",socialTw:"TW sources",externalDigestShort:"External digest",routingNote:"Routing: US → Reddit + Futu; TW → PTT + Dcard + Threads",socialUsTab:"US Reddit / Futu",socialTwTab:"TW PTT / Dcard / Threads",socialLoadFail:"Social digest missing or failed: {msg}",futuFull:"Futu",condPass:"Cond.",condFail:"Fail",condSkip:"Skip",pe:"P/E",opMargin:"Op. margin",grossMargin:"Gross margin",foreignInv:"Foreign",trustInv:"Trust",dealerInv:"Dealer",maBull:"MA bull stack",amplitude:"Range",zhang:"lots",limitUp:"Limit-up",momentum:"Momentum",metricPrice:"Price",metricDayPct:"Day %",metricVolRatioYday:"Vol ratio (yday)",metricVolToday:"Vol (lots)",metricDebt:"Debt %",metricDirector:"Insider %",metricOpQ:"Op. margin (q)",metricSource:"Source",foreign1d:"Foreign 1d (lots)",trust1d:"Trust 1d (lots)",dealer1d:"Dealer 1d (lots)",foreign5d:"Foreign 5d (lots)",trust5d:"Trust 5d (lots)",dealer5d:"Dealer 5d (lots)"},tt={...se,siteTitle:"每日数学选股",loading:"加载中…",disclaimer:"投资涉及风险，信息仅供参考，非投资建议",footer:"投资涉及风险，信息仅供参考，非投资建议",dataAsOf:"数据",taipei:"（台北）",navMain:"主导航",navToday:"今日",navStrategies:"策略",navPaper:"模拟",navSocial:"社群",todayPicks:"今日选股",market:"市场",hot:"热门",marketQuotes:"市场报价",usStock:"美股",twStock:"台股",usList:"美股列表",twList:"台股列表",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暂无 Top 候选",ticker:"代码",name:"名称",price:"价格",dayPct:"日涨跌",priorClose:"前收",priorCloseFull:"前收涨幅",pct5d:"5 日",pct1m:"约 1 月",volRatio:"量比",ma:"均线",screening:"筛选",reason:"理由",details:"详情",business:"本业",risk:"风险",observe:"观察",dataIncomplete:"资料不全",intraday:"盘中",taipeiClose:"台北收",parity:"平价",implied:"隐含价",premium:"溢价",adsRatio:"换股比",taiex:"台湾加权 TAIEX",otc:"柜买",loadError:"无法加载数据（{msg}）。请确认以静态服务器打开，且 data/latest.json 存在。",langLabel:"语言",chatUs:"美股",chatTw:"台股",danmakuFx:"弹幕效果",chatMore:"更多",nickLabel:"昵称",room:"房间",lobby:"大厅",perTicker:"个股",usTickers:"美股标的",twTickers:"台股标的",noUsTickers:"暂无美股标的",noTwTickers:"暂无台股标的",chatRoom:"聊天室",externalDiscuss:"外部讨论",externalDigest:"外部讨论摘要",usLobby:"美股大厅",twLobby:"台股大厅",noMessages:"目前尚无消息",noComments:"目前尚无留言",noTickersDiscuss:"此市场目前无标的可讨论",paper:"模拟",paperMissing:"尚无模拟账本文件。请在项目执行 npm run paper。",paperDisclaimer:"累积模拟账户（自 {date} 起） · 不会每日归零 · 买进即成交 · 非真实下单",paperRules:"规则（各市场独立账）",paperRuleTw:"台股本金 NT$3,000,000 · 整张成交",paperRuleUs:"美股本金 US$100,000 · 可买 1 股起",paperRuleBuy:"买：该市场名单·风险1%·停距1.5%·单档≤8% · 即成交",paperRuleSell:"卖：停损−3% · 停利+12%半仓 · 破SMA20且日跌>2% · 离名单亏损 · 涨停隔日−5%",paperTabTw:"台股账 · NT$",paperTabUs:"美股账 · US$",paperBookTw:"台股账本（NT$）",paperBookUs:"美股账本（US$）",principal:"本金",cash:"现金",equity:"权益（部位＋现金）",totalPnl:"总损益",totalPnlPct:"总损益 ％",weekPerf:"周绩效",monthPerf:"月绩效",quarterPerf:"季绩效",yearPerf:"年绩效",sinceInception:"成立以来",noTradesToday:"本日尚无此类成交（模拟）",noPositions:"目前没有持股",buy:"买",sell:"卖",shares:"股",qtyShares:"股数",positions:"目前部位",position:"部位",avgCost:"成本",mark:"现价",unrealizedPnl:"未实现损益",unrealizedPct:"未实现 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累积 · 买进即成交",reasonScreenBuy:"名单新开仓",reasonAdd:"持续买进",reasonStop:"停损",reasonTakeProfit:"停利",reasonMomentumBreak:"动能转弱",reasonOffList:"离开名单",reasonLimitUpChase:"涨停追价急杀",stopLoss:"停损",takeProfit:"停利",paperTrade:"模拟",realizedPnl:"损益",periodPerf:"绩效",qty:"数量",note:"说明",strategyScreen:"策略选股",strategyLead:"台／美命中分开检视 · 缺资料标「不足」",strategyLoading:"加载策略结果中…",strategyEmpty:"尚无策略资料。请执行 npm run strategies。",strategyLoadError:"无法加载策略选股（{msg}）。请确认已执行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分类",hitCount:"档命中",hitTitle:"命中档数",strategyDetails:"详情 · 策略说明",conditions:"条件",results:"筛选结果",copyJson:"复制 JSON",exportCsv:"导出此策略 CSV",exportJson:"导出 JSON",copied:"已复制",noHitsExport:"此策略今日无命中列可导出",incomplete:"不足",hitsTotal:"共{n}档",twOnlyHint:"本策略仅台股",hitMarket:"命中市场",noHits:"本日无命中",dataInsufficient:"资料不足",calibTitle:"校准说明",incompleteFilters:"未检查滤网（不算通过）：",sessionTwse:"证交所 session",ohlcvBar:"OHLCV K棒",generated:"产生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精选",cat價量:"价量",cat籌碼:"筹码",cat財務:"财务",cat大師:"大师",cat週期:"周期",regimeToday:"今日市场周期（美／台分开）",psychologyPhase:"心理相位",cycleStance:"周期姿态",liquidityBias:"流动性偏误",temperatureScore:"市场温度",sizeMult:"部位乘数",regimeTags:"周期标签",dataGaps:"资料缺口",marketRegime:"市场周期",backendOff:"讨论功能尚未启用",localComments:"本站留言",futu:"富途",nickPlaceholder:"昵称（选填）",commentPlaceholder:"留言",commentInput:"输入留言",send:"发送",guest:"访客",noLocalComments:"尚无留言",backendNotConnected:"后端未接上",readFail:"读取失败：{msg}",sendFail:"发送失败：{msg}",sendFailShort:"发送失败",noSource:"无 {source}",newsClues:"新闻／讨论线索（非留言）",relatedNews:"相关公开新闻（非社群评论）",messages:"消息",giscusUnset:"Giscus 尚未设定（需 repoId／categoryId）。",manualOpen:"手动打开",noSnippet:"(无摘要)",noTickerData:"此标的暂无{kind}资料",viaBackup:"来源备援：{via}",noDigestBlock:"无 {title} 区块（今日无对应市场标的或尚未抓取）",socialDigestMarket:"社交摘要市场",socialDigestTitle:"网友参考",socialUs:"美股来源",socialTw:"台股来源",externalDigestShort:"外部摘要",routingNote:"路由：美股 → Reddit＋富途；台股 → PTT＋Dcard＋Threads",socialUsTab:"美股 Reddit／富途",socialTwTab:"台股 PTT／Dcard／Threads",socialLoadFail:"社交摘要尚未产生或读取失败：{msg}",futuFull:"富途牛牛",condPass:"条件",condFail:"未过",condSkip:"略过",pe:"本益比",opMargin:"营益率",grossMargin:"毛利率",foreignInv:"外资",trustInv:"投信",dealerInv:"自营商",maBull:"均线多头",amplitude:"振幅",zhang:"张",limitUp:"涨停",momentum:"动能",metricPrice:"价格",metricDayPct:"日涨跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(张)",metricDebt:"负债比%",metricDirector:"董监持股%",metricOpQ:"近季营益率%",metricSource:"来源",foreign1d:"外资1日(张)",trust1d:"投信1日(张)",dealer1d:"自营商1日(张)",foreign5d:"外资5日(张)",trust5d:"投信5日(张)",dealer5d:"自营5日(张)"},at={...se,siteTitle:"毎日クオンツ選株",loading:"読み込み中…",disclaimer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",footer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",dataAsOf:"データ",taipei:"（台北）",navMain:"メインナビ",navToday:"本日",navStrategies:"戦略",navPaper:"模擬",navSocial:"コミュニティ",todayPicks:"本日の選株",market:"市場",hot:"相場",marketQuotes:"相場気配",usStock:"米国株",twStock:"台湾株",usList:"米国リスト",twList:"台湾リスト",usTop:"米国 Top",twTop:"台湾 Top",emptyTop:"{market} の Top 候補はありません",ticker:"銘柄",name:"名称",price:"価格",dayPct:"日次%",priorClose:"前日比",priorCloseFull:"前日終値比",pct5d:"5日",pct1m:"約1ヶ月",volRatio:"出来高比",ma:"移動平均",screening:"スクリーニング",reason:"理由",details:"詳細",business:"事業",risk:"リスク",observe:"観察",dataIncomplete:"データ不足",intraday:"場中",taipeiClose:"台北終値",parity:"パリティ",implied:"理論価格",premium:"プレミアム",adsRatio:"交換比率",taiex:"台湾加重 TAIEX",otc:"櫃買",loadError:"データを読み込めません（{msg}）。静的サーバーと data/latest.json を確認してください。",langLabel:"言語",chatUs:"米国",chatTw:"台湾",danmakuFx:"弾幕",chatMore:"その他",nickLabel:"名前",room:"ルーム",lobby:"ロビー",perTicker:"銘柄別",usTickers:"米国銘柄",twTickers:"台湾銘柄",noUsTickers:"米国銘柄なし",noTwTickers:"台湾銘柄なし",chatRoom:"チャット",externalDiscuss:"外部ディスカッション",externalDigest:"外部ダイジェスト",usLobby:"米国ロビー",twLobby:"台湾ロビー",noMessages:"メッセージはまだありません",noComments:"コメントはまだありません",noTickersDiscuss:"この市場で議論できる銘柄がありません",paper:"模擬",paperMissing:"模擬ポートフォリオがありません。npm run paper を実行してください。",paperDisclaimer:"累積模擬口座（{date} 起） · 毎日リセットしません · シグナル即約定 · 実注文ではありません",paperRules:"ルール（市場別独立口座）",paperRuleTw:"台湾元本 NT$3,000,000 · 単元取引",paperRuleUs:"米国元本 US$100,000 · 1株から",paperRuleBuy:"買：リスト·リスク1%·ストップ1.5%·単銘柄≤8% · 即約定",paperRuleSell:"売：損切−3% · 利確+12%半分 · SMA20割れかつ日−2%超 · リスト外かつ損失 · ストップ高翌日−5%",paperTabTw:"台湾口座 · NT$",paperTabUs:"米国口座 · US$",paperBookTw:"台湾帳簿（NT$）",paperBookUs:"米国帳簿（US$）",principal:"元本",cash:"現金",equity:"純資産（ポジション＋現金）",totalPnl:"総損益",totalPnlPct:"総損益％",weekPerf:"週次",monthPerf:"月次",quarterPerf:"四半期",yearPerf:"年次",sinceInception:"開始以来",noTradesToday:"本日この種別の約定はありません（模擬）",noPositions:"保有なし",buy:"買",sell:"売",shares:"株",qtyShares:"株数",positions:"現在のポジション",position:"ポジション",avgCost:"平均単価",mark:"時価",unrealizedPnl:"含み損益",unrealizedPct:"含み％",recentTrades:"約定（直近40）",paperSession:"{date} · {inception} から累積 · シグナル即約定",reasonScreenBuy:"リスト新規",reasonAdd:"追加買い",reasonStop:"損切り",reasonTakeProfit:"利確",reasonMomentumBreak:"モメンタム悪化",reasonOffList:"リスト外",reasonLimitUpChase:"ストップ高追撃解消",stopLoss:"損切り",takeProfit:"利確",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"パフォーマンス",qty:"数量",note:"備考",strategyScreen:"戦略スクリーナー",strategyLead:"米／台ヒットを分けて表示 · データ不足は「不足」",strategyLoading:"戦略を読み込み中…",strategyEmpty:"戦略データがありません。npm run strategies を実行してください。",strategyLoadError:"戦略を読み込めません（{msg}）。npm run strategies を確認してください。",strategyList:"戦略一覧",strategyCat:"カテゴリ",hitCount:"ヒット",hitTitle:"ヒット数",strategyDetails:"詳細 · 戦略説明",conditions:"条件",results:"結果",copyJson:"JSON をコピー",exportCsv:"この戦略を CSV 出力",exportJson:"JSON 出力",copied:"コピー済み",noHitsExport:"本日この戦略のヒット行はありません",incomplete:"不足",hitsTotal:"{n}件",twOnlyHint:"台湾株のみ",hitMarket:"ヒット市場",noHits:"本日ヒットなし",dataInsufficient:"データ不足",calibTitle:"キャリブレーション",incompleteFilters:"未検査フィルター（通過扱いしない）：",sessionTwse:"TWSE session",ohlcvBar:"OHLCV バー",generated:"生成",universeTw:"台湾ユニバース",universeUs:"米国ユニバース",cat精選:"厳選",cat價量:"価格/出来高",cat籌碼:"需給",cat財務:"財務",cat大師:"マスター",cat週期:"サイクル",regimeToday:"本日の市場レジーム（米／台は別管理）",psychologyPhase:"心理フェーズ",cycleStance:"サイクル姿勢",liquidityBias:"流動性バイアス",temperatureScore:"市場温度",sizeMult:"サイズ倍率",regimeTags:"レジームタグ",dataGaps:"データ欠落",marketRegime:"市場レジーム",backendOff:"ディスカッション未接続",localComments:"サイトコメント",futu:"富途",nickPlaceholder:"ニックネーム（任意）",commentPlaceholder:"コメント",commentInput:"コメントを入力",send:"送信",guest:"ゲスト",noLocalComments:"コメントはまだありません",backendNotConnected:"バックエンド未接続",readFail:"読み込み失敗：{msg}",sendFail:"送信失敗：{msg}",sendFailShort:"送信失敗",noSource:"{source} なし",newsClues:"ニュース／議論の手がかり（コメントではない）",relatedNews:"関連公開ニュース（SNSコメントではない）",messages:"メッセージ",giscusUnset:"Giscus 未設定（repoId / categoryId が必要）。",manualOpen:"手動で開く",noSnippet:"(要約なし)",noTickerData:"この銘柄の{kind}データはありません",viaBackup:"バックアップ出典：{via}",noDigestBlock:"{title} ブロックなし（対象なし／未取得）",socialDigestMarket:"ソーシャル要約の市場",socialDigestTitle:"ソーシャル要約",socialUs:"米国ソース",socialTw:"台湾ソース",externalDigestShort:"外部ダイジェスト",routingNote:"ルーティング：米国 → Reddit＋富途；台湾 → PTT＋Dcard＋Threads",socialUsTab:"米国 Reddit／富途",socialTwTab:"台湾 PTT／Dcard／Threads",socialLoadFail:"ソーシャル要約の取得に失敗：{msg}",futuFull:"富途",condPass:"条件",condFail:"未達",condSkip:"省略",pe:"PER",opMargin:"営業利益率",grossMargin:"粗利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自己売買",maBull:"移動平均ブル",amplitude:"振幅",zhang:"単元",limitUp:"ストップ高",momentum:"モメンタム",metricPrice:"価格",metricDayPct:"日次%",metricVolRatioYday:"出来高比(昨)",metricVolToday:"出来高(単元)",metricDebt:"負債比率%",metricDirector:"役員持株%",metricOpQ:"直近四半期営業利益率%",metricSource:"出典",foreign1d:"外資1日(単元)",trust1d:"投信1日(単元)",dealer1d:"自己1日(単元)",foreign5d:"外資5日(単元)",trust5d:"投信5日(単元)",dealer5d:"自己5日(単元)"},ne={"zh-Hant":se,en:et,"zh-Hans":tt,ja:at};function a(t,e,s){let n,r=s;e&&typeof e=="object"&&!Array.isArray(e)?r=e:typeof e=="string"&&(n=e);let l=(ne[E]||ne[ue])[t]??ne[ue][t]??n??t;if(r)for(const[m,g]of Object.entries(r))l=l.replace(new RegExp(`\\{${m}\\}`,"g"),String(g));return l}function st(){const t=De.map(e=>`<option value="${e.id}"${e.id===E?" selected":""}>${e.label}</option>`).join("");return`
    <label class="lang-switch" title="${a("langLabel")}">
      <span class="lang-switch-label">${a("langLabel")}</span>
      <select class="lang-select" data-lang-select aria-label="${a("langLabel")}">
        ${t}
      </select>
    </label>`}function it(t,e){var n;const s=(n=t==null?void 0:t.querySelector)==null?void 0:n.call(t,"[data-lang-select]");s&&(s.value=E,s.addEventListener("change",()=>{Qe(s.value)}))}function i(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function c(t,e){return i(a(t,e))}const rt="./data/paper-portfolio.json";function H(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function ie(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function Ie(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(R(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Ee(t){return t==="USD"?"US$":t==="TWD"?"NT$":""}function Z(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"?0:2;return`${Ee(e)}${Ie(t,s)}`}function J(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"&&t>=100?0:2;return`${Ee(e)}${Ie(t,s)}`}function Oe(t){return{"screen-buy":a("reasonScreenBuy"),add:a("reasonAdd"),stop:a("reasonStop"),"take-profit":a("reasonTakeProfit"),"momentum-break":a("reasonMomentumBreak"),"off-list":a("reasonOffList"),"limit-up-chase":a("reasonLimitUpChase")}[t]||t||""}function te(t){return t?`
    <div class="paper-win">
      <div class="w-label">${t.sinceInception?c("sinceInception",a("sinceInception")):i(t.label||"")}</div>
      <div class="w-val ${H(t.pct)}">${ie(t.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function nt(t,e){return t.length?t.map(s=>{var n;return`
      <tr>
        <td><span class="ticker">${i(s.ticker)}</span></td>
        <td class="name-cell">${i(s.name||"")}</td>
        <td class="num">${(n=s.qty)==null?void 0:n.toLocaleString(R())}</td>
        <td class="num">${J(s.price,e)}</td>
        <td><span class="badge reason ${i(s.reason||"")}">${i(Oe(s.reason))}</span></td>
        <td class="why-cell">${i(s.reasonText||"")}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${i(a("noTradesToday"))}</td></tr>`}function ot(t,e){return t.length?t.map(s=>{var o;const n=(s.mark-s.avgCost)*s.qty,r=s.avgCost?(s.mark-s.avgCost)/s.avgCost*100:0;return`
      <tr>
        <td><span class="ticker">${i(s.ticker)}</span></td>
        <td class="num">${(o=s.qty)==null?void 0:o.toLocaleString(R())}</td>
        <td class="num">${J(s.avgCost,e)}</td>
        <td class="num">${J(s.mark,e)}</td>
        <td class="num ${H(n)}">${Z(n,e)}</td>
        <td class="num ${H(r)}">${ie(r)}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${i(a("noPositions"))}</td></tr>`}function lt(t,e,s){const n=e.currency,r=a(t==="TW"?"paperBookTw":"paperBookUs"),o=Z(e.startCash,n),l=(s==null?void 0:s.totalPnl)??e.equity-e.startCash,m=(s==null?void 0:s.totalPnlPct)??(e.startCash?(e.equity-e.startCash)/e.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${i(r)}</h3>
      <p class="paper-start">${c("principal",a("principal"))} ${o}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">${i(a("cash"))}</div>
          <div class="k-val">${Z(e.cash,n)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${c("position",a("equity"))}</div>
          <div class="k-val">${Z(e.equity,n)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${i(a("totalPnl"))}</div>
          <div class="k-val ${H(l)}">${Z(l,n)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${i(a("totalPnlPct"))}</div>
          <div class="k-val ${H(m)}">${ie(m)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${i(a("weekPerf"))}</div>
          ${te(s==null?void 0:s.week)}
        </div>
        <div>
          <div class="win-name">${i(a("monthPerf"))}</div>
          ${te(s==null?void 0:s.month)}
        </div>
        <div>
          <div class="win-name">${i(a("quarterPerf"))}</div>
          ${te(s==null?void 0:s.quarter)}
        </div>
        <div>
          <div class="win-name">${i(a("yearPerf"))}</div>
          ${te(s==null?void 0:s.year)}
        </div>
      </div>
    </article>`}function ct(t,e){return t.length?t.map(s=>{var r;const n=s.side==="SELL"?a("sell"):a("buy");return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${i(s.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${i(s.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${i(n)} ${(r=s.qty)==null?void 0:r.toLocaleString(R())} ${i(a("shares"))}</div>
            <div style="font-family:var(--mono)">${J(s.price,e)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${i(s.reason||"")}">${i(Oe(s.reason))}</span>
        </div>
        ${s.reasonText?`<p class="lc-why">${i(s.reasonText)}</p>`:""}
      </div>`}).join(""):`<div class="list-card empty-card">${i(a("noTradesToday"))}</div>`}function dt(t,e){return t.length?t.map(s=>{var o;const n=(s.mark-s.avgCost)*s.qty,r=s.avgCost?(s.mark-s.avgCost)/s.avgCost*100:0;return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${i(s.ticker)}</span>
            <div style="color:var(--text-muted);font-size:0.8rem">${i(a("qtyShares"))} ${(o=s.qty)==null?void 0:o.toLocaleString(R())}</div>
          </div>
          <div style="text-align:right">
            <div class="${H(n)}" style="font-family:var(--mono);font-weight:600">${Z(n,e)}</div>
            <div class="${H(r)}" style="font-family:var(--mono)">${ie(r)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          <span>${i(a("avgCost"))} ${J(s.avgCost,e)}</span>
          <span>${i(a("mark"))} ${J(s.mark,e)}</span>
        </div>
      </div>`}).join(""):`<div class="list-card empty-card">${i(a("noPositions"))}</div>`}function oe(t,e,s){return`
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
          <tbody>${nt(e,s)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${ct(e,s)}</div>
    </div>`}function ut(t,e){return`
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
          <tbody>${ot(t,e)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${dt(t,e)}</div>
    </div>`}function $e(t,e,s,n,r,o){if(!e)return"";const l=e.currency,m=[...e.trades||[]].sort((y,h)=>y.date<h.date?1:y.date>h.date?-1:0),g=m.filter(y=>y.date===n),d=g.filter(y=>y.side==="BUY"),v=g.filter(y=>y.side==="SELL"),b=m.slice(0,40),$=o;return`
    <div class="paper-panel ${r?"active":""}" id="paper-panel-${t}" role="tabpanel">
      ${lt(t,e,s)}
      <p class="paper-session-note">${i(a("paperSession",{date:n||"—",inception:$}))}</p>
      ${oe(`${a("buy")} ${n||""}`,d,l)}
      ${oe(`${a("sell")} ${n||""}`,v,l)}
      ${ut(e.positions||[],l)}
      ${oe(a("recentTrades"),b,l)}
    </div>`}function pt(t){var l,m;if(!t||!t.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${c("paperTrade",a("paper"))}</h2>
        <p class="paper-missing">${i(a("paperMissing"))}</p>
      </section>`;const e=t.books.TW,s=t.books.US;let r=(t.asOf||"").slice(0,10);try{r=new Date(t.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const o=t.startDate||(e==null?void 0:e.startDate)||(s==null?void 0:s.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${c("paperTrade",a("paper"))}</h2>
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
      ${$e("TW",e,(l=t.metrics)==null?void 0:l.TW,r,!0,o)}
      ${$e("US",s,(m=t.metrics)==null?void 0:m.US,r,!1,o)}
    </section>`}function mt(t){const e=t.querySelectorAll(".paper-tab-btn");e.forEach(s=>{s.addEventListener("click",()=>{const n=s.dataset.paperTab;e.forEach(r=>{const o=r.dataset.paperTab===n;r.classList.toggle("active",o),r.setAttribute("aria-selected",o?"true":"false")}),t.querySelectorAll(".paper-panel").forEach(r=>{r.classList.toggle("active",r.id===`paper-panel-${n}`)})})})}async function ht(){try{const t=await fetch(rt);return t.ok?await t.json():null}catch{return null}}const ke={},me="ss-chat-nick",le=()=>a("backendOff");function gt(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&ke?ke:{},s=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),n=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:s,anon:n}}function N(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Te(){try{return String(localStorage.getItem(me)||"").trim().slice(0,24)}catch{return""}}function ce(t){try{const e=String(t||"").trim().slice(0,24);e?localStorage.setItem(me,e):localStorage.removeItem(me)}catch{}}function vt(t,e){const s=String(t||"").trim().toLowerCase(),n=String(e||"").trim().toLowerCase();return!s||!n?!1:s===n}function ft(t){try{const e=new Date(t),s=new Date;return e.getFullYear()===s.getFullYear()&&e.getMonth()===s.getMonth()&&e.getDate()===s.getDate()?e.toLocaleTimeString(R(),{hour:"2-digit",minute:"2-digit",hour12:!1}):e.toLocaleString(R(),{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}function yt(t,e){const s={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(n,r=80){const o=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(n)}&order=created_at.asc&limit=${r}`,l=await fetch(o,{headers:s});if(!l.ok)throw new Error(`comments select ${l.status}`);return l.json()},async insert(n){const r=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:s,body:JSON.stringify(n)});if(!r.ok){const o=await r.text();throw new Error(`comments insert ${r.status}: ${o}`)}return r.json()}}}function bt(){return'<svg class="chat-send-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.4 20.4 20.85 12 3.4 3.6l.1 6.55L14.5 12 3.5 13.85l-.1 6.55z"/></svg>'}function Se(t,e,s={}){if(!t||!e)return{ok:!1,destroy(){}};const n=s.config||globalThis.STOCK_SOCIAL_CONFIG||{},r=String(s.market||"US").toUpperCase()==="TW"?"TW":"US",{url:o,anon:l}=gt(n),m=Math.min(n.commentMaxLen||500,s.maxLen||200),g=n.postCooldownMs||4e3,d=s.title||e,v=s.emptyLine||a("noMessages"),b=s.danmakuLayer||document.querySelector("#ss-danmaku-layer"),$=s.flyToggle||document.querySelector("#ss-danmaku-toggle"),y=()=>!!($&&$.checked);t.classList.add("chat-panel"),t.dataset.market=r,t.dataset.ticker=e,t.setAttribute("role","region"),t.setAttribute("aria-label",d);const h=Te();t.innerHTML=`
    <div class="chat-status" aria-live="polite"></div>
    <div class="chat-messages" role="log" aria-label="${N(a("messages"))}" tabindex="0"></div>
    <form class="chat-composer" autocomplete="off">
      <div class="chat-nick-row">
        <label class="chat-nick-label" for="chat-nick-input">${N(a("nickLabel"))}</label>
        <input id="chat-nick-input" class="chat-nick" maxlength="24" placeholder="${N(a("nickPlaceholder"))}" value="${N(h)}" autocomplete="nickname" />
      </div>
      <div class="chat-compose-row">
        <input class="chat-body" type="text" maxlength="${m}" placeholder="${N(a("commentInput"))}" required autocomplete="off" enterkeyhint="send" />
        <button type="submit" class="chat-send" aria-label="${N(a("send"))}" title="${N(a("send"))}">${bt()}<span class="chat-send-text">${N(a("send"))}</span></button>
      </div>
    </form>
  `;const k=t.querySelector(".chat-status"),p=t.querySelector(".chat-messages"),f=t.querySelector(".chat-composer"),T=f.querySelector(".chat-nick"),D=f.querySelector(".chat-body"),Y=f.querySelector(".chat-send");let B=new Set,W=!1,F=!1;function K(x){if(!b||!y())return;const C=document.createElement("div");C.className="ss-danmaku-item",C.textContent=x,C.style.top=`${8+Math.random()*42}vh`,C.style.animationDuration="12000ms",b.appendChild(C),window.setTimeout(()=>C.remove(),12200)}function re(x=!1){const C=p.scrollHeight-p.scrollTop-p.clientHeight<120;(x||C)&&(p.scrollTop=p.scrollHeight)}function w(x){const C=(T.value||Te()||"").trim();if(!x.length){p.innerHTML=`<div class="chat-empty-state"><p>${N(v)}</p></div>`;return}p.innerHTML=x.map(I=>{const j=vt(I.nickname,C),_e=j?"own":"other",Ze=N(I.nickname||a("guest")),Je=N(I.body||""),Ye=N(ft(I.created_at));return`<article class="chat-bubble chat-bubble--${_e}" data-id="${N(I.id)}">
          ${j?"":`<div class="chat-bubble-nick">${Ze}</div>`}
          <div class="chat-bubble-body">${Je}</div>
          <div class="chat-bubble-meta">${Ye}</div>
        </article>`}).join("")}if(!o||!l)return k.textContent=le(),k.classList.add("is-warn"),f.querySelectorAll("input,button").forEach(x=>{x.disabled=!0}),p.innerHTML=`<div class="chat-empty-state"><p>${N(v)}</p></div>`,{ok:!1,reason:"no-config",market:r,destroy(){}};const L=yt(o,l);k.textContent="",k.classList.remove("is-warn");async function q(x=!1,C=!1){if(!F)try{const I=await L.list(e,80);w(I),re(C||!B.size);for(const j of I)B.has(j.id)||(B.add(j.id),x&&K(`${j.nickname}: ${j.body}`));B.size>200&&(B=new Set([...B].slice(-100))),k.classList.contains("is-warn")&&k.textContent===le()&&(k.textContent="",k.classList.remove("is-warn"))}catch{k.textContent=le(),k.classList.add("is-warn")}}T.addEventListener("change",()=>{ce(T.value),p.querySelectorAll(".chat-bubble").length&&q(!1,!1)}),T.addEventListener("blur",()=>ce(T.value)),f.addEventListener("submit",async x=>{if(x.preventDefault(),W)return;const C=(T.value||a("guest")).trim().slice(0,24)||a("guest");ce(T.value);const I=(D.value||"").trim().slice(0,m);if(I){W=!0,Y.disabled=!0;try{await L.insert({ticker:e,body:I,nickname:C}),D.value="",await q(!0,!0),D.focus()}catch{k.textContent=a("sendFailShort"),k.classList.add("is-warn")}finally{window.setTimeout(()=>{W=!1,Y.disabled=!1},g)}}}),D.addEventListener("keydown",x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),f.requestSubmit())}),q(!1,!0);const M=window.setInterval(()=>q(!0,!1),n.pollIntervalMs||8e3);return{ok:!0,market:r,ticker:e,destroy(){F=!0,window.clearInterval(M)}}}const we={},$t=()=>a("backendOff");function kt(){return[{id:"local",label:a("localComments")},{id:"reddit",label:"Reddit"},{id:"futu",label:a("futu")}]}function Tt(){return[{id:"local",label:a("localComments")},{id:"ptt",label:"PTT"},{id:"dcard",label:"Dcard"},{id:"threads",label:"Threads"}]}function St(t,e){const s=String(e||"").toUpperCase();return s==="US"||s==="TW"?s:String(t||"").toUpperCase().endsWith(".TW")?"TW":"US"}function wt(t){return t==="TW"?Tt():kt()}function Pt(t=globalThis.STOCK_SOCIAL_CONFIG||{}){const e=typeof import.meta<"u"&&we?we:{},s=String(t.supabaseUrl||e.VITE_SUPABASE_URL||"").trim(),n=String(t.supabaseAnonKey||e.VITE_SUPABASE_ANON_KEY||"").trim();return{url:s,anon:n}}function P(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function xt(t,e){const s={apikey:e,Authorization:`Bearer ${e}`,"Content-Type":"application/json",Prefer:"return=representation"};return{async list(n,r=50){const o=`${t}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(n)}&order=created_at.asc&limit=${r}`,l=await fetch(o,{headers:s});if(!l.ok)throw new Error(`comments select ${l.status}`);return l.json()},async insert(n){const r=await fetch(`${t}/rest/v1/comments`,{method:"POST",headers:s,body:JSON.stringify(n)});if(!r.ok){const o=await r.text();throw new Error(`comments insert ${r.status}: ${o}`)}return r.json()}}}function Lt(t,e,s){if(!t||!s)return null;const n=t[e];return Array.isArray(n)&&n.find(r=>String(r.ticker).toUpperCase()===String(s).toUpperCase())||null}function qt(t,e,{futuMode:s=!1}={}){if(!t)return`<p class="ss-empty">${P(a("noSource",{source:e}))}</p>`;const n=[];t.blocker&&n.push(`<p class="ss-digest-blocker">⚠ ${P(t.blocker)}</p>`);const r=t.items||[],o=t.newsRelated||[];if(r.length&&n.push(r.map(l=>{const m=l.url?P(l.url):"#",g=l.score!=null?`<span class="ss-score">▲ ${P(l.score)}</span>`:"",d=l.author?`@${P(l.author)}`:"";return`<article class="ss-digest-item">
            <a href="${m}" target="_blank" rel="noopener noreferrer">${P(l.snippet||l.title||"(無摘要)")}</a>
            <div class="ss-digest-meta">${g} ${d}</div>
          </article>`}).join("")),o.length){const l=a(s?"newsClues":"relatedNews");n.push(`<p class="ss-digest-sub">${l}</p>`),n.push(o.map(m=>`<article class="ss-digest-item">
            <a href="${m.url?P(m.url):"#"}" target="_blank" rel="noopener noreferrer">${P(m.snippet||"(無標題)")}</a>
          </article>`).join(""))}return Array.isArray(t.manualUrls)&&t.manualUrls.length&&!r.length&&n.push('<p class="ss-digest-sub">手動開啟</p>'+t.manualUrls.slice(0,4).map(l=>`<article class="ss-digest-item"><a href="${P(l)}" target="_blank" rel="noopener noreferrer">${P(l)}</a></article>`).join("")),!r.length&&!o.length&&!t.blocker&&n.push(`<p class="ss-empty">暫無 ${P(e)} 資料</p>`),n.join("")||'<p class="ss-empty">暫無資料</p>'}function Ct(t,e,s={}){if(!t||!e)return{ok:!1};const n=s.config||globalThis.STOCK_SOCIAL_CONFIG||{},r=s.digest||null,o=St(e,s.market||t.getAttribute("data-market")),l=wt(o),{url:m,anon:g}=Pt(n),d=n.commentMaxLen||500,v=n.postCooldownMs||4e3,b=!!s.bare,$="",y=l.map((w,L)=>`<button type="button" class="ss-src-tab${L===0?" active":""}" data-src="${w.id}" role="tab" aria-selected="${L===0?"true":"false"}">${w.label}</button>`).join(""),h=l.filter(w=>w.id!=="local").map(w=>`<div class="ss-src-panel" data-panel="${w.id}" role="tabpanel" hidden></div>`).join("");t.classList.add("ss-thread"),t.dataset.market=o;const k=`
      <div class="ss-src-tabs" role="tablist" aria-label="${P(e)}">${y}</div>
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
        ${h}
      </div>`;t.innerHTML=b?`<div class="ss-thread-bare" data-ticker="${P(e)}">${k}</div>`:`<details class="ss-thread-details"${$}>
      <summary>${P(e)}</summary>
      ${k}
    </details>`;const p=t.querySelector(".ss-thread-status"),f=t.querySelector(".ss-thread-list"),T=t.querySelector(".ss-thread-form"),D={ptt:["ptt","PTT",!1],dcard:["dcard","Dcard",!1],threads:["threads","Threads",!1],reddit:["reddit","Reddit",!1],futu:["futu",a("futu"),!0]};for(const w of l){if(w.id==="local")continue;const L=D[w.id];if(!L)continue;const[q,M,x]=L,C=t.querySelector(`[data-panel="${w.id}"]`);C&&(C.innerHTML=qt(Lt(r,q,e),M,{futuMode:x}))}const Y=t.querySelectorAll(".ss-src-tab"),B=t.querySelectorAll(".ss-src-panel");if(Y.forEach(w=>{w.addEventListener("click",()=>{const L=w.dataset.src;Y.forEach(q=>{const M=q.dataset.src===L;q.classList.toggle("active",M),q.setAttribute("aria-selected",M?"true":"false")}),B.forEach(q=>{const M=q.dataset.panel===L;q.classList.toggle("active",M),q.hidden=!M})})}),!m||!g)return p.textContent=$t(),p.className="ss-thread-status is-warn",T.querySelectorAll("input,textarea,button").forEach(w=>{w.disabled=!0}),f.innerHTML=`<li class="ss-empty">${P(a("backendNotConnected"))}</li>`,{ok:!1,reason:"no-config",market:o};const W=xt(m,g);p.textContent="";let F=!1;async function K(){try{const w=await W.list(e);if(!w.length){f.innerHTML=`<li class="ss-empty">${P(a("noLocalComments"))}</li>`;return}f.innerHTML=w.map(L=>`<li><strong>${P(L.nickname)}</strong> ${P(L.body)}<span class="meta">${P(new Date(L.created_at).toLocaleString(R(),{hour12:!1}))}</span></li>`).join("")}catch(w){p.textContent=a("readFail",{msg:w.message}),p.className="ss-thread-status is-warn"}}T.addEventListener("submit",async w=>{if(w.preventDefault(),F)return;const L=(T.querySelector(".ss-nick").value||a("guest")).trim().slice(0,24)||a("guest"),q=(T.querySelector(".ss-body").value||"").trim().slice(0,d);if(!q)return;F=!0;const M=T.querySelector("button");M.disabled=!0;try{await W.insert({ticker:e,body:q,nickname:L}),T.querySelector(".ss-body").value="",await K()}catch(x){p.textContent=a("sendFail",{msg:x.message}),p.className="ss-thread-status is-warn"}finally{window.setTimeout(()=>{F=!1,M.disabled=!1},v)}}),K();const re=window.setInterval(K,n.pollIntervalMs||1e4);return{ok:!0,market:o,destroy(){window.clearInterval(re)}}}function At(t=document,e={}){const s=t.querySelectorAll("[data-ticker-comments]"),n=[];return s.forEach(r=>{const o=r.getAttribute("data-ticker-comments")||r.dataset.ticker,l=r.getAttribute("data-market")||void 0;o&&n.push(Ct(r,o,{...e,market:l}))}),n}function Ut(t,e){if(!t||!e||t.querySelector("script[data-giscus], iframe.giscus-frame"))return;const s=document.createElement("script");s.src="https://giscus.app/client.js",s.async=!0,s.crossOrigin="anonymous",s.setAttribute("data-giscus","1"),s.setAttribute("data-repo",e.repo||""),s.setAttribute("data-repo-id",e.repoId||""),s.setAttribute("data-category",e.category||"General"),s.setAttribute("data-category-id",e.categoryId||""),s.setAttribute("data-mapping",e.mapping==="pathname"?"pathname":"specific"),s.setAttribute("data-term",e.term||"site-discussion"),s.setAttribute("data-strict","0"),s.setAttribute("data-reactions-enabled","1"),s.setAttribute("data-emit-metadata","0"),s.setAttribute("data-input-position","bottom"),s.setAttribute("data-theme",e.theme||"dark"),s.setAttribute("data-lang",e.lang||"zh-TW"),t.appendChild(s)}function Dt(t="#ss-giscus",e={}){const s=document.querySelector(t);if(!s)return{ok:!1,reason:"missing"};const r=(e.config||globalThis.STOCK_SOCIAL_CONFIG||{}).giscus||{};if(!r.enabled||!r.repoId||!r.categoryId)return s.innerHTML=`<p class="ss-chat-status is-warn">${P(a("giscusUnset"))}</p>`,{ok:!1,reason:"no-config"};const o=s.querySelector(".ss-giscus-host")||s;return Ut(o,{...r,term:r.term||"site-discussion"}),{ok:!0}}function S(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Nt(t){const e=t.manualUrls||[];return e.length?`<p class="ss-digest-sub">${S(a("manualOpen"))}</p>`+e.slice(0,4).map(s=>`<article class="ss-digest-item"><a href="${S(s)}" target="_blank" rel="noopener noreferrer">${S(s)}</a></article>`).join(""):""}function Pe(t){const e=t.score!=null?`<span class="ss-score">▲ ${S(t.score)}</span>`:"",s=t.author?`@${S(t.author)}`:"",n=t.created?S(new Date(t.created).toLocaleString(R(),{hour12:!1})):t.date?S(t.date):"",r=t.via?`<span class="ss-via">${S(t.via)}</span>`:"";return`<article class="ss-digest-item">
    <a href="${t.url?S(t.url):"#"}" target="_blank" rel="noopener noreferrer">${S(t.snippet||t.title||a("noSnippet"))}</a>
    <div class="ss-digest-meta">${e} ${s} ${n} ${r}</div>
  </article>`}function Rt(t,e,{futuMode:s=!1}={}){var g;const n=t.blocker?`<p class="ss-digest-blocker">⚠ ${S(t.blocker)}</p>`:"",r=t.items||[],o=t.newsRelated||[];let l="";if(r.length&&(l+=r.map(Pe).join("")),o.length){const d=a(s?"newsClues":"relatedNews");l+=`<p class="ss-digest-sub">${d}</p>`+o.map(Pe).join("")}!r.length&&((g=t.manualUrls)!=null&&g.length)&&(l+=Nt(t)),l||(l=`<p class="ss-empty">${S(a("noTickerData",{kind:e}))}</p>`);const m=t.via&&t.via!=="reddit.com"?`<p class="ss-digest-via-note">${S(a("viaBackup",{via:t.via}))}</p>`:"";return`<section class="ss-digest-ticker" data-ticker="${S(t.ticker)}">
    <h4>${S(t.ticker)}</h4>
    ${n}
    ${m}
    ${l}
  </section>`}function Q(t,e,s,n={}){const r=(e||[]).map(o=>Rt(o,s,n)).join("");return`<div class="ss-digest-col">
    <h4 class="ss-digest-col-title">${S(t)}</h4>
    ${r||`<p class="ss-empty">${S(a("noDigestBlock",{title:t}))}</p>`}
  </div>`}async function Be(t){const e=globalThis.STOCK_SOCIAL_CONFIG||{},s=t||e.socialDigestUrl||"./data/social-digest.json",n=await fetch(s,{cache:"no-cache"});if(!n.ok)throw new Error(`social-digest ${n.status}`);return n.json()}function Mt(t,e){if(!e)return;const s=t.asOf?new Date(t.asOf).toLocaleString(R(),{hour12:!1}):"—";(t.notes||[]).map(d=>`<li>${S(d)}</li>`).join(""),t.routing&&`${S(a("routingNote"))}`;const n=`
    <div class="ss-digest-market" data-market-panel="US">
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${Q("Reddit",t.reddit,"Reddit")}
        ${Q(a("futuFull"),t.futu,a("futu"),{futuMode:!0})}
      </div>
    </div>`,r=`
    <div class="ss-digest-market" data-market-panel="TW" hidden>
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${Q("PTT",t.ptt,"PTT")}
        ${Q("Dcard",t.dcard,"Dcard")}
        ${Q("Threads",t.threads,"Threads")}
      </div>
    </div>`,o=(t.reddit||[]).length||(t.futu||[]).length,l=(t.ptt||[]).length||(t.dcard||[]).length||(t.threads||[]).length,m=o?"US":l?"TW":"US";e.innerHTML=`
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>${S(a("externalDigestShort"))}</h3>
        <p class="ss-digest-asof">${S(s)}</p>
      </header>
      <div class="ss-digest-market-tabs" role="tablist" aria-label="${S(a("socialDigestMarket"))}">
        <button type="button" class="ss-mkt-tab${m==="US"?" active":""}" data-market="US" role="tab" aria-selected="${m==="US"}">${S(a("socialUsTab"))}</button>
        <button type="button" class="ss-mkt-tab${m==="TW"?" active":""}" data-market="TW" role="tab" aria-selected="${m==="TW"}">${S(a("socialTwTab"))}</button>
      </div>
      ${n}
      ${r}
    </div>
  `,e.querySelectorAll("[data-market-panel]").forEach(d=>{const v=d.getAttribute("data-market-panel")===m;d.hidden=!v});const g=e.querySelectorAll(".ss-mkt-tab");g.forEach(d=>{d.addEventListener("click",()=>{const v=d.getAttribute("data-market");g.forEach(b=>{const $=b===d;b.classList.toggle("active",$),b.setAttribute("aria-selected",$?"true":"false")}),e.querySelectorAll("[data-market-panel]").forEach(b=>{b.hidden=b.getAttribute("data-market-panel")!==v})})})}async function It(t="#ss-social-digest",e){const s=document.querySelector(t);if(!s)return{ok:!1};try{const n=await Be(e);return Mt(n,s),{ok:!0,data:n}}catch(n){return s.innerHTML=`<p class="ss-digest-blocker">${S(a("socialLoadFail",{msg:n.message}))}</p>`,{ok:!1,error:n}}}const je="./data/strategy-screener.json";function Et(t){const s={技術:"價量",綜合:"精選"}[t]||t;return a(`cat${s}`,s)}function Ot(t){try{return new Date(t).toLocaleString(R(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+a("taipei")}catch{return t||"—"}}function u(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(R(),{minimumFractionDigits:e,maximumFractionDigits:e})}function G(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function V(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(2)}%`}function Bt(t){const e={技術:"價量",綜合:"精選"},s=t.categoryGroup||t.category||"精選";return e[s]||s}function jt(t){let e=i(t);return e=e.replace(/本益比/g,()=>c("pe",e("pe"))),e=e.replace(/營益率/g,()=>c("opMargin",e("opMargin"))),e=e.replace(/毛利率/g,()=>c("grossMargin",e("grossMargin"))),e=e.replace(/外資/g,()=>c("foreignInv",e("foreignInv"))),e=e.replace(/投信/g,()=>c("trustInv",e("trustInv"))),e=e.replace(/自營商/g,()=>c("dealerInv",e("dealerInv"))),e=e.replace(/均線多頭/g,()=>c("maBull",e("maBull"))),e=e.replace(/RSI/g,()=>c("rsi",e("rsi"))),e=e.replace(/振幅/g,()=>c("amplitude",e("amplitude"))),e=e.replace(/(\d+)\s*張/g,(s,n)=>`${n}${c("zhang",e("zhang"))}`),e=e.replace(/＞\s*(\d+)\s*張/g,(s,n)=>`＞ ${n}${c("zhang",e("zhang"))}`),e}function Ht(t){return t==="skip"?`<span class="xq-cond-st skip">${i(a("condSkip"))}</span>`:t==="fail"?`<span class="xq-cond-st fail">${i(a("condFail"))}</span>`:`<span class="xq-cond-st pass">${i(a("condPass"))}</span>`}function Wt(t){switch(t){case"ma-bull":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>V(e.dayPct),cls:e=>G(e.dayPct)},{key:"sma5",label:"SMA5",fmt:e=>u(e.sma5)},{key:"sma10",label:"SMA10",fmt:e=>u(e.sma10)},{key:"sma20",label:"SMA20",fmt:e=>u(e.sma20)},{key:"sma60",label:"SMA60",fmt:e=>u(e.sma60)},{key:"volRatioYday",label:a("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?u(e.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:a("metricVolToday"),fmt:e=>e.volTodayZhang!=null?u(e.volTodayZhang,1):e.volToday!=null?u(e.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:c("pe",a("pe")),fmt:e=>u(e.pe,2),rawLabel:!0},{key:"revGrowth2yAvgPct",label:"2年營收成長均%",fmt:e=>e.revGrowth2yAvgPct!=null?u(e.revGrowth2yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?u(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?u(e.avgVol5Zhang,1):"—"},{key:"dayPct",label:a("metricDayPct"),fmt:e=>V(e.dayPct),cls:e=>G(e.dayPct)}];case"inst-sync":return[{key:"foreignNet1dZhang",label:a("foreign1d"),fmt:e=>u(e.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:a("trust1d"),fmt:e=>u(e.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:a("dealer1d"),fmt:e=>u(e.dealerNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:a("foreign5d"),fmt:e=>u(e.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:a("trust5d"),fmt:e=>u(e.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:a("dealer5d"),fmt:e=>u(e.dealerNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>V(e.dayPct),cls:e=>G(e.dayPct)},{key:"rsi",label:c("rsi",a("rsi")),fmt:e=>u(e.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:e=>u(e.rsiPrev,2)},{key:"ampPct",label:c("amplitude",a("amplitude")),fmt:e=>e.ampPct!=null?u(e.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?u(e.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:e=>u(e.pb,2)},{key:"directorHoldPct",label:a("metricDirector"),fmt:e=>e.directorHoldPct!=null?u(e.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:c("pe",a("pe")),fmt:e=>u(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?u(e.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:e=>Array.isArray(e.revGrowth3y)?e.revGrowth3y.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:e=>e.revGrowth5yAvgPct!=null?u(e.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?u(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?u(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:a("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?u(e.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:e=>Array.isArray(e.opMargin3y)?e.opMargin3y.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:e=>e.revGrowth3yAvgPct!=null?u(e.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)}];case"benjamin-graham":return[{key:"pe",label:c("pe",a("pe")),fmt:e=>u(e.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:e=>u(e.pb,2)},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?u(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:a("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?u(e.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:c("pe",a("pe")),fmt:e=>u(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?u(e.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:e=>e.roeGrowthPct!=null?u(e.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:e=>e.epsGrowthStreak!=null?String(e.epsGrowthStreak):"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"margin-up":return[{key:"yoyPairs",label:"YoY配對",fmt:e=>Array.isArray(e.yoyPairs)?e.yoyPairs.join("；"):"—"},{key:"yoyOmPct",label:"YoY營益成長%",fmt:e=>Array.isArray(e.yoyOmPct)?e.yoyOmPct.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"yoyGmPct",label:"YoY毛利成長%",fmt:e=>Array.isArray(e.yoyGmPct)?e.yoyGmPct.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"opMargins",label:c("opMargin",a("opMargin")),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.slice(-4).map(s=>s!=null?s+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:a("metricSource"),fmt:e=>e.source||"—"}];case"kostolany-cycle":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>V(e.dayPct),cls:e=>G(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>V(e.pct5d),cls:e=>G(e.pct5d)},{key:"pct1m",label:"1月%",fmt:e=>V(e.pct1m),cls:e=>G(e.pct1m)},{key:"volRatio",label:a("volRatio"),fmt:e=>e.volRatio!=null?u(e.volRatio)+"×":"—"},{key:"psychologyPhase",label:a("psychologyPhase"),fmt:e=>e.psychologyPhase||"—"},{key:"cycleStance",label:a("cycleStance"),fmt:e=>e.cycleStance||"—"},{key:"liquidityBias",label:a("liquidityBias"),fmt:e=>e.liquidityBias||"—"},{key:"tags",label:a("regimeTags"),fmt:e=>e.tags||"—"},{key:"sizeMult",label:a("sizeMult"),fmt:e=>e.sizeMult!=null?u(e.sizeMult,2)+"×":"—"}];default:return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)}]}}function Ft(t){const e=t.calibrationNotes;if(!e||typeof e!="object")return"";const s=Array.isArray(e.matchedXq)?e.matchedXq.map(l=>i(l)).join(" · "):"",n=Array.isArray(e.stillDiffers)?e.stillDiffers.map(l=>i(l)).join(" · "):"",r=e.unitsNote||e.units||"",o=[];return s&&o.push(`<span class="xq-cal-m">對齊 XQ：${s}</span>`),n&&o.push(`<span class="xq-cal-d">仍差異：${n}</span>`),r&&o.push(`<span class="xq-cal-u">${i(String(r))}</span>`),o.length?`<p class="xq-calibration" title="${a("calibTitle")}">${o.join("<br/>")}</p>`:""}function zt(t){return`<ol class="xq-cond-list">${(t.conditions||[]).map((s,n)=>{const r=s.status||"pass";return`<li class="xq-cond ${r}">
        <span class="xq-cond-num">${n+1}</span>
        <span class="xq-cond-text">${jt(s.text)}</span>
        ${Ht(r)}
      </li>`}).join("")}</ol>`}function He(t,e){return!e||e==="ALL"?t||[]:(t||[]).filter(s=>{const n=String(s.market||"").toUpperCase();if(n===e)return!0;const r=String(s.ticker||"").toUpperCase().endsWith(".TW");return n?!1:e==="TW"?r:!r})}function Gt(t,e="TW"){const s=t.hits||[],n=He(s,e),r=a(e==="US"?"usStock":"twStock");if(t.incomplete&&!s.length){const d=i(t.incompleteLabel||a("dataInsufficient")),v=(t.blockers||[]).map(b=>`<li>${i(b)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${d}</div>
      <ul>${v}</ul>
    </div>`}if(!n.length)return`<div class="xq-empty"><p>${i(r)} · ${i(a("noHits"))}</p></div>`;const o=Wt(t.id),l=o.map(d=>`<th>${d.rawLabel?d.label:i(d.label)}</th>`).join(""),m=n.map(d=>{const v=d.metrics||{},b=o.map($=>`<td class="num ${$.cls?$.cls(v):""}">${$.fmt(v)}</td>`).join("");return`<tr>
        <td><span class="ticker">${i(d.ticker)}</span></td>
        <td class="name-cell">${i(d.name||"")}${d.ohlcvBarDate?`<div class="xq-bar-date">K ${i(d.ohlcvBarDate)}</div>`:""}</td>
        ${b}
      </tr>`}).join(""),g=n.map(d=>{const v=d.metrics||{},b=o.map($=>{const y=$.cls?$.cls(v):"";return`<div class="xq-m"><span class="xq-ml">${$.rawLabel?$.label:i($.label)}</span><span class="xq-mv ${y}">${$.fmt(v)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${i(d.ticker)}</div>
            <div class="name">${i(d.name||"")}</div>
            ${d.ohlcvBarDate?`<div class="xq-bar-date">K棒 ${i(d.ohlcvBarDate)}</div>`:""}
          </div>
          <span class="badge market">${i(d.market||e)}</span>
        </div>
        <div class="xq-hit-metrics">${b}</div>
      </article>`}).join("");return`
    <div class="xq-market-block" data-market="${i(e)}">
      <h5 class="xq-market-title">${r}（${n.length}）</h5>
      <div class="table-wrap xq-table-wrap">
        <table class="stock-table xq-table">
          <thead><tr><th>代碼</th><th>名稱</th>${l}</tr></thead>
          <tbody>${m}</tbody>
        </table>
      </div>
      <div class="xq-mobile-cards">${g}</div>
    </div>`}function xe(t,e,s="TW"){var d,v,b,$;const n=t.hits||[],o=He(n,s).length,l=(t.unchecked||[]).map(y=>`<li class="xq-unchecked">${i(y)}</li>`).join(""),m=(t.notes||[]).map(y=>`<li>${i(y)}</li>`).join(""),g=!t.incomplete&&(t.blockers||[]).length?`<ul class="xq-blockers">${(t.blockers||[]).map(y=>`<li>${i(y)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${i(t.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${i(t.name)}</h3>
          <div class="xq-tags">
            ${(t.xqTags||[t.category]).map(y=>`<span class="xq-tag">${i(y)}</span>`).join("")}
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
        <span>${i(a("ohlcvBar"))} ${i(((d=t.ohlcvBarDates)==null?void 0:d[0])||e.ohlcvBarDate||"—")}</span>
        <span>${i(a("generated"))} ${Ot(e.asOf)}</span>
        <span>${i(a("universeTw"))} ${((v=e.universe)==null?void 0:v.tw)??"—"}</span>
        <span>${i(a("universeUs"))} ${((b=e.universe)==null?void 0:b.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">${i(a("conditions"))}</h4>
      ${zt(t)}
      ${Ft(t)}
      ${($=t.incompleteFilters)!=null&&$.length?`<p class="xq-incomplete-filters">${i(a("incompleteFilters"))}${i(t.incompleteFilters.join("、"))}</p>`:""}
      ${l?`<ul class="xq-unchecked-list">${l}</ul>`:""}
      ${t.regimeSnapshot?`<div class="xq-regime-box" role="status">
        <div class="xq-regime-title">${i(a("regimeToday"))}</div>
        <div class="xq-regime-grid">
          ${["us","tw"].map(y=>{const h=t.regimeSnapshot[y];if(!h)return"";const k=h.psychologyPhase||a("dataInsufficient"),p=h.cycleStance||a("dataInsufficient"),f=h.liquidityBias||a("dataInsufficient"),T=Array.isArray(h.dataGaps)&&h.dataGaps.length?`<div class="xq-regime-gaps">${i(a("dataGaps"))}：${i(h.dataGaps.join(", "))}</div>`:"";return`<div class="xq-regime-card">
                <div class="xq-regime-mkt">${i(y.toUpperCase())}</div>
                <div>${i(a("psychologyPhase"))}：<strong>${i(k)}</strong></div>
                <div>${i(a("cycleStance"))}：<strong>${i(p)}</strong></div>
                <div>${i(a("liquidityBias"))}：<strong>${i(f)}</strong></div>
                <div>${i(a("temperatureScore"))}：${i(h.temperatureScore==null?a("dataInsufficient"):String(h.temperatureScore))}</div>
                ${T}
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
          <a class="xq-btn xq-btn-link" href="${je}" download="strategy-screener.json">${i(a("exportJson"))}</a>
        </div>
      </div>
      ${t.twOnly||["inst-sync","margin-up","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short"].includes(t.id)?`<div class="xq-market-tabs"><span class="xq-mkt-hint">${i(a("twOnlyHint"))}</span></div>`:`<div class="xq-market-tabs" role="tablist" aria-label="${i(a("hitMarket"))}">
        <button type="button" class="xq-mkt-btn${s==="TW"?" active":""}" data-xq-market="TW" aria-pressed="${s==="TW"}">${i(a("twStock"))}</button>
        <button type="button" class="xq-mkt-btn${s==="US"?" active":""}" data-xq-market="US" aria-pressed="${s==="US"}">${i(a("usStock"))}</button>
      </div>`}
      ${Gt(t,["inst-sync","margin-up","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short"].includes(t.id)?"TW":s)}
    </div>
  `}function Vt(t=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${c("strategyScreen",a("strategyScreen"))}</h2>
      <p class="view-lead-tight">${i(a("strategyLead"))}</p>
      <div id="xq-root" class="xq-root" aria-label="${i(a("strategyScreen"))}">
        ${t?`<p class="xq-loading">${i(a("strategyLoading"))}</p>`:""}
      </div>
    </section>
  `}async function _t(t=je){const e=await fetch(t,{cache:"no-cache"});if(!e.ok)throw new Error(`strategy-screener ${e.status}`);return e.json()}function Zt(t,e){var y;const s=typeof t=="string"?document.querySelector(t):t;if(!s||!((y=e==null?void 0:e.strategies)!=null&&y.length)){s&&(s.innerHTML=`<div class="xq-empty"><p>${i(a("strategyEmpty"))}</p></div>`);return}const n=e.categoryOrder||["精選","價量","籌碼","財務","週期","大師"],r=new Map(n.map(h=>[h,[]]));for(const h of e.strategies){const k=Bt(h);r.has(k)||r.set(k,[]),r.get(k).push(h)}const o=e.strategies[0];let l="TW";const m=n.map(h=>{const k=r.get(h)||[];return k.length?`<div class="xq-cat-block">
        <div class="xq-cat-label">${i(Et(h))}</div>
        <div class="xq-chip-row">
          ${k.map(p=>{const f=(p.hits||[]).length,T=p.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${p.id===o.id?" active":""}${T}" data-xq-id="${i(p.id)}" aria-pressed="${p.id===o.id}">
                <span class="xq-chip-name">${i(p.name)}</span>
                <span class="xq-chip-n">${p.incomplete?i(a("incomplete")):i(a("hitsTotal",{n:f}))}</span>
              </button>`}).join("")}
        </div>
      </div>`:""}).join(""),g=e.strategies.map(h=>{const k=(h.hits||[]).length,p=h.id===o.id?" active":"",f=h.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${p}${f}" data-xq-id="${i(h.id)}">
        <span>${i(h.name)}</span>
        <span class="xq-side-n">${h.incomplete?i(a("incomplete")):i(a("hitsTotal",{n:k}))}</span>
      </button>`}).join("");s.innerHTML=`
    <div class="xq-layout">
      <aside class="xq-sidebar" aria-label="${i(a("strategyList"))}">
        <div class="xq-side-title">${i(a("navStrategies"))}</div>
        ${g}
      </aside>
      <div class="xq-main">
        <div class="xq-chips" aria-label="${i(a("strategyCat"))}">${m}</div>
        <div class="xq-panel-host">${xe(o,e,l)}</div>
      </div>
    </div>
    <p class="xq-foot">${i((e.disclaimer||"").split("。")[0]+(e.disclaimer?"。":""))}</p>
  `;const d=s.querySelector(".xq-panel-host");let v=o.id;const b=()=>{Kt(d,e),d==null||d.querySelectorAll("[data-xq-market]").forEach(h=>{h.addEventListener("click",()=>{l=h.getAttribute("data-xq-market")||"TW",$(v)})})},$=h=>{const k=e.strategies.find(p=>p.id===h);!k||!d||(v=h,d.innerHTML=xe(k,e,l),s.querySelectorAll("[data-xq-id]").forEach(p=>{const f=p.getAttribute("data-xq-id")===h;p.classList.toggle("active",f),p.tagName==="BUTTON"&&p.setAttribute("aria-pressed",f?"true":"false")}),b())};s.querySelectorAll("[data-xq-id]").forEach(h=>{h.addEventListener("click",()=>$(h.getAttribute("data-xq-id")))}),b()}function Jt(t){const e=t.hits||[];if(!e.length)return"";const s=[...new Set(e.flatMap(l=>Object.keys(l.metrics||{})))],n=["ticker","name","market","ohlcvBarDate",...s],r=l=>{const m=l==null?"":String(l);return/[",\n]/.test(m)?`"${m.replace(/"/g,'""')}"`:m},o=e.map(l=>{const m=l.metrics||{};return[l.ticker,l.name,l.market,l.ohlcvBarDate||"",...s.map(g=>m[g])].map(r).join(",")});return[n.join(","),...o].join(`
`)}function Yt(t,e,s){const n=new Blob([e],{type:s}),r=document.createElement("a");r.href=URL.createObjectURL(n),r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),2e3)}function Kt(t,e){var s,n;(s=t==null?void 0:t.querySelector("[data-xq-copy]"))==null||s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(JSON.stringify(e,null,2));const r=t.querySelector("[data-xq-copy]");if(r){const o=r.textContent;r.textContent=a("copied"),setTimeout(()=>r.textContent=o,1200)}}catch{}}),(n=t==null?void 0:t.querySelector("[data-xq-csv]"))==null||n.addEventListener("click",()=>{var m;const r=(m=t.querySelector(".xq-panel"))==null?void 0:m.getAttribute("data-strategy-id"),o=e.strategies.find(g=>g.id===r);if(!o)return;const l=Jt(o);if(!l){alert(a("noHitsExport"));return}Yt(`${o.id}-hits.csv`,"\uFEFF"+l,"text/csv;charset=utf-8")})}async function Qt(t="#xq-root"){try{const e=await _t();return Zt(t,e),{ok:!0,data:e}}catch(e){const s=document.querySelector(t);return s&&(s.innerHTML=`<div class="xq-empty"><p>${i(a("strategyLoadError",{msg:e.message}))}</p></div>`),{ok:!1,error:e}}}const Xt="./data/latest.json";function U(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function A(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function O(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(R(),{minimumFractionDigits:e,maximumFractionDigits:e})}function ee(t,e){if(t==null||Number.isNaN(t))return"—";const s=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${O(t,s)}`}function ea(t){try{return new Date(t).toLocaleString(R(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+a("taipei")}catch{return t}}function fe(t){const e=t.aboveSma20?`<span class="badge sma-on">${c("sma20","SMA20")}↑</span>`:`<span class="badge sma-off">${c("sma20","SMA20")}↓</span>`,s=t.aboveSma50?`<span class="badge sma-on">${c("sma50","SMA50")}↑</span>`:`<span class="badge sma-off">${c("sma50","SMA50")}↓</span>`;return e+s}function ye(t){return t!=null&&t.length?t.map(e=>{const s=String(e);return s==="A"?`<span class="badge screen">${c("screenA","A")}</span>`:s==="B"?`<span class="badge screen">${c("screenB","B")}</span>`:s==="C"?`<span class="badge screen">${c("screenC","C")}</span>`:s==="observe"?`<span class="badge screen">${i(a("observe"))}</span>`:`<span class="badge screen">${i(s)}</span>`}).join(""):""}function ta(t){if(!t||!t.us&&!t.tw)return"";const e=(s,n)=>{if(!n)return"";const r=n.psychologyPhase||a("dataInsufficient"),o=n.cycleStance||a("dataInsufficient"),l=n.liquidityBias||a("dataInsufficient"),m=Array.isArray(n.dataGaps)&&n.dataGaps.length?`<div class="regime-gaps">${i(a("dataGaps"))}：${i(n.dataGaps.slice(0,4).join(", "))}${n.dataGaps.length>4?"…":""}</div>`:"";return`<div class="regime-chip${n.incomplete?" incomplete":""}">
      <div class="label">${i(s)} · ${i(a("marketRegime"))}</div>
      <div class="value">${i(o)}</div>
      <div class="pct flat" style="font-size:0.72rem;line-height:1.35">
        ${i(a("psychologyPhase"))} ${i(r)}
        · ${i(a("liquidityBias"))} ${i(l)}
      </div>
      ${m}
    </div>`};return`<div class="regime-strip" aria-label="${i(a("marketRegime"))}">
    ${e("US",t.us)}
    ${e("TW",t.tw)}
  </div>`}function aa(t){var n,r,o,l,m;const e=[],s=(g,d,v)=>{if(!v)return;const b=v.incomplete,$=v.value!=null?O(v.value,2):b?i(a("dataIncomplete")):"—",y=v.dayPct!=null?`<div class="pct ${U(v.dayPct)}">${A(v.dayPct)}</div>`:"",h=v.session==="intraday"?` · ${c("intraday",a("intraday"))}`:"";e.push(`
      <div class="index-chip ${b?"incomplete":""}">
        <div class="label">${d}${h}</div>
        <div class="value">${$}</div>
        ${y}
      </div>
    `)};if(s("tw",c("taiex",((n=t.tw)==null?void 0:n.name)||a("taiex")),t.tw),s("otc",c("otc",((r=t.otc)==null?void 0:r.name)||a("otc")),t.otc),s("spx",c("spx",((o=t.spx)==null?void 0:o.name)||a("spx")),t.spx),s("nasdaq",c("nasdaq",((l=t.nasdaq)==null?void 0:l.name)||a("nasdaq")),t.nasdaq),s("sox",c("sox",((m=t.sox)==null?void 0:m.name)||a("sox")),t.sox),t.usdTwd){const g=t.usdTwd,d=g.taipeiClose??g.yahoo;e.push(`
      <div class="index-chip">
        <div class="label">${c("usdtwd",a("usdtwd"))}</div>
        <div class="value">${O(d,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          ${i(a("taipeiClose"))} ${g.taipeiClose!=null?O(g.taipeiClose,3):"—"}
          · Yahoo ${g.yahoo!=null?O(g.yahoo,3):"—"}
        </div>
      </div>
    `)}return`<div class="index-strip">${e.join("")}</div>`}function sa(t,e){const s=t.market==="TW"?c("twStock",a("twStock")):t.market==="US"?c("usStock",a("usStock")):i(t.market||""),n=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${c("rs","RS")}</div><div class="m-val ${U(t.rsVsIndexPp)}">${A(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">${c("priorClose",a("priorCloseFull"))}</div><div class="m-val ${U(t.priorClosePct)}">${A(t.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${c("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${e}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${i(t.ticker)}</div>
          <div class="name">${i(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${ee(t.price,t.currency)}</div>
          <div class="day-pct ${U(t.dayPct)}">${A(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${s}</span>
        ${ye(t.screens)}
        ${fe(t)}
      </div>
      <div class="metrics">
        ${n}
        <div class="metric"><div class="m-label">${c("pct5d",a("pct5d"))}</div><div class="m-val ${U(t.pct5d)}">${A(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${c("pct1m",a("pct1m"))}</div><div class="m-val ${U(t.pct1m)}">${A(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${c("volRatio",a("volRatio"))}</div><div class="m-val">${t.volRatio!=null?O(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business||t.why||t.risk?`<details class="fold-block card-fold"><summary>${i(a("details"))}</summary>
        ${t.business?`<p class="card-text"><strong>${i(a("business"))}</strong>　${i(t.business)}</p>`:""}
        ${t.why?`<p class="card-text"><strong>${i(a("reason"))}</strong>　${i(t.why)}</p>`:""}
        ${t.risk?`<p class="card-text risk"><strong>${i(a("risk"))}</strong>　${We(t.risk)}</p>`:""}
      </details>`:""}
      <div data-ticker-comments="${i(t.ticker)}" data-market="${i(t.market==="TW"||String(t.ticker).endsWith(".TW")?"TW":"US")}"></div>
    </article>
  `}function We(t){let e=i(t);return e=e.replace(/漲停/g,c("limitUp",a("limitUp"))),e=e.replace(/動能/g,c("momentum",a("momentum"))),e}function Le(t){return t.map(e=>{const s=e.rsVsIndexPp??e.priorClosePct,n=e.rsVsIndexPp!=null?A(e.rsVsIndexPp):e.priorClosePct!=null?A(e.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${i(e.ticker)}</span></td>
        <td class="name-cell">${i(e.name||"")}</td>
        <td class="num">${ee(e.price,e.currency)}</td>
        <td class="num ${U(e.dayPct)}">${A(e.dayPct)}</td>
        <td class="num ${U(s)}">${n}</td>
        <td class="num ${U(e.pct5d)}">${A(e.pct5d)}</td>
        <td class="num ${U(e.pct1m)}">${A(e.pct1m)}</td>
        <td class="num">${e.volRatio!=null?O(e.volRatio,2)+"×":"—"}</td>
        <td>${fe(e)}</td>
        <td>${ye(e.screens)}</td>
        <td class="why-cell">${i(e.why||"")}</td>
      </tr>`}).join("")}function qe(t){return t.map(e=>{const s=e.rsVsIndexPp!=null?`<span class="${U(e.rsVsIndexPp)}">${c("rs","RS")} ${A(e.rsVsIndexPp)}</span>`:e.priorClosePct!=null?`<span class="${U(e.priorClosePct)}">${c("priorClose",a("priorClose"))} ${A(e.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${i(e.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${i(e.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${ee(e.price,e.currency)}</div>
            <div class="${U(e.dayPct)}" style="font-family:var(--mono);font-weight:600">${A(e.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${s}
          <span class="${U(e.pct5d)}">${c("pct5d","5d")} ${A(e.pct5d)}</span>
          <span class="${U(e.pct1m)}">${c("pct1m","1m")} ${A(e.pct1m)}</span>
          <span>${c("volRatio",a("volRatio"))} ${e.volRatio!=null?O(e.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${fe(e)}${ye(e.screens)}</div>
        ${e.why?`<p class="lc-why">${i(e.why)}</p>`:""}
        ${e.risk&&e.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">${i(a("risk"))}：${We(e.risk)}</p>`:""}
        <div data-ticker-comments="${i(e.ticker)}" data-market="${i(String(e.ticker).endsWith(".TW")||e.market==="TW"?"TW":"US")}"></div>
      </div>`}).join("")}function ia(){return`
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
    </tr>`}function ra(t){if(!t)return"";const e=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${c("adr","ADR")} ${c("parity",a("parity"))}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${c("usStock",a("usStock"))} ${c("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${ee(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${c("adsRatio",a("adsRatio"))}</span>　<strong>${i(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>${c("parity",a("implied"))}</span>　<strong>${t.impliedUsdTaipeiFx!=null?O(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${c("premium",a("premium"))}</span>　<strong class="${U(e)}">${A(e)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${c("twStock",a("twStock"))}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${ee(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${i(t.note)}</p>`:""}
      </div>
    </section>
  `}function na(){return'<div id="ss-danmaku-layer" class="ss-danmaku-layer" aria-hidden="true"></div>'}function he(t){return t?t.market==="TW"||t.market==="US"?t.market:String(t.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function Ce(t,e){const s=new Set,n=[],r=o=>{if(!(o!=null&&o.ticker)||s.has(o.ticker))return;const l=he(o);e&&l!==e||(s.add(o.ticker),n.push({ticker:o.ticker,market:l,name:o.name||""}))};return(t.top5||[]).forEach(r),(!e||e==="TW")&&(t.tw||[]).forEach(r),(!e||e==="US")&&(t.us||[]).forEach(r),n}function oa(t){return t==="TW"?"__TW__":"__US__"}function Ae(t,e){return t.length?`<div class="top5-grid">${t.map((s,n)=>sa(s,n+1)).join("")}</div>`:`<div class="empty-state">${i(a("emptyTop",{market:e}))}</div>`}function la(t){const e=Ce(t,"US"),s=Ce(t,"TW"),n=(r,o)=>r.map((l,m)=>`<button type="button" class="chat-chip${m===0?" active":""}" data-ticker="${i(l.ticker)}" data-market="${o}">${i(l.ticker)}</button>`).join("");return`
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
        ${n(e,"US")||`<span class="chat-empty">${i(a("noUsTickers"))}</span>`}
      </div>
      <div class="chat-chip-row" data-chip-market="TW" role="tablist" aria-label="${i(a("twTickers"))}" hidden>
        ${n(s,"TW")||`<span class="chat-empty">${i(a("noTwTickers"))}</span>`}
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
  `}function ca(){return[{id:"today",label:a("navToday"),hash:"today"},{id:"strategies",label:a("navStrategies"),hash:"strategies"},{id:"paper",label:a("navPaper"),hash:"paper"},{id:"social",label:a("navSocial"),hash:"social"}]}const Fe={today:"today",strategies:"strategies",paper:"paper",social:"social",help:"today",glossary:"today",danmaku:"social","social-digest":"social",giscus:"social",method:"today"},da={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',social:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.5 3.1 6L5 21l4.3-1.4c.9.3 1.8.4 2.7.4 5 0 9-3.6 9-8s-4-8-9-8zm-1 5h2v5h-2V8zm0 6h2v2h-2v-2z"/></svg>'};function ge(){const t=(location.hash||"").replace(/^#/,"").split(/[/?]/)[0].toLowerCase();return Fe[t]||"today"}function Ue(t){return ca().map(e=>{const s=da[e.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${e.id}"
        data-variant="${t}"
        aria-label="${i(e.label)}"
        aria-current="false">
        <span class="nav-icon">${s}</span>
        <span class="nav-label">${i(e.label)}</span>
      </button>`}).join("")}function ua(t,e){const s=t.top5||[],n=t.us||[],r=t.tw||[],o=i(a("disclaimer")),l=ia();return`
    ${na()}

    <header class="site-chrome">
      <div class="chrome-row">
        <div class="chrome-brand">
          <img class="brand-mark" src="/Just-Math-and-Luck-/logo.png?v=3" width="40" height="40" alt="每日數學選股" decoding="async" />
          <div class="brand-text">
            <h1>${i(a("siteTitle"))}</h1>
            <p class="brand-meta">${i(a("dataAsOf"))} ${ea(t.asOf)}</p>
          </div>
        </div>
        <div class="chrome-actions">
          ${st()}
          <nav class="nav-desktop" aria-label="${i(a("navMain"))}">
            ${Ue("desktop")}
          </nav>
        </div>
      </div>
      <p class="disclaimer-line" role="note">${o}</p>
      <div class="market-strip-wrap" aria-label="${i(a("marketQuotes"))}">
        <span class="market-strip-label">${i(a("hot"))}</span>
        ${aa(t.indices||{})}
      </div>
    </header>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">${i(a("todayPicks"))}</h2>
        </header>
        ${ta(t.marketRegime)}
        <div class="tabs market-tabs" role="tablist" aria-label="${i(a("market"))}">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${c("usStock",a("usStock"))}（${n.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${c("twStock",a("twStock"))}（${r.length}）</button>
        </div>
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${i(a("usTop"))}</h2>
            ${Ae(s.filter(g=>he(g)==="US"),a("usStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${i(a("usList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${l}</thead>
                <tbody>${Le(n)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${qe(n)}</div>
          </section>
        </div>
        <div class="panel" id="panel-tw" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${i(a("twTop"))}</h2>
            ${Ae(s.filter(g=>he(g)==="TW"),a("twStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${i(a("twList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${l}</thead>
                <tbody>${Le(r)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${qe(r)}</div>
          </section>
        </div>
        ${ra(t.parity)}
      </div>
      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${Vt()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span class="view-anchor" tabindex="-1"></span>
        ${pt(e)}
      </div>

      <div class="view view-social" id="view-social" data-view="social" hidden>
        <span id="social" class="view-anchor" tabindex="-1"></span>
        ${la(t)}
      </div>
    </main>

    <nav class="nav-bottom" aria-label="${i(a("navMain"))}">
      ${Ue("mobile")}
    </nav>

    <p class="site-footer">${i(a("footer"))}</p>
  `}function pa(t,e){t.querySelectorAll(".nav-item").forEach(s=>{const n=s.dataset.nav===e;s.classList.toggle("is-active",n),s.setAttribute("aria-current",n?"page":"false")})}function ze(t,e,{updateHash:s=!0,scrollTop:n=!0}={}){const r=Fe[e]||"today";if(t.querySelectorAll(".view").forEach(o=>{const l=o.dataset.view===r;o.hidden=!l,o.classList.toggle("is-active",l)}),pa(t,r),s){const o=`#${r}`;location.hash!==o&&history.replaceState(null,"",o)}return n&&window.scrollTo(0,0),r}let ae=null;function ma(t){const e=(s,n)=>ze(t,s,n);return t.querySelectorAll(".nav-item").forEach(s=>{s.addEventListener("click",()=>e(s.dataset.nav))}),t.querySelectorAll("[data-jump]").forEach(s=>{s.addEventListener("click",()=>e(s.dataset.jump))}),ae&&window.removeEventListener("hashchange",ae),ae=()=>e(ge(),{updateHash:!1}),window.addEventListener("hashchange",ae),e(ge(),{updateHash:!0,scrollTop:!1}),{go:e}}function ha(t){const e=t.querySelectorAll(".tab-btn");e.forEach(s=>{s.addEventListener("click",()=>{const n=s.dataset.tab;e.forEach(r=>{const o=r.dataset.tab===n;r.classList.toggle("active",o),r.setAttribute("aria-selected",o?"true":"false")}),t.querySelectorAll(".panel").forEach(r=>{r.classList.toggle("active",r.id===`panel-${n}`)})})})}function ga(t,e,{config:s,digest:n}={}){const r=t.querySelector("#chat-room");if(!r)return;const o=r.querySelector("#ss-chat-mount"),l=r.querySelector("#chat-room-title"),m=r.querySelectorAll(".chat-mkt"),g=r.querySelectorAll("[data-chat-mode]");let d=null,v="US",b="lobby";const $=p=>{l&&(l.textContent=p)},y=()=>{r.querySelectorAll(".chat-chip-row").forEach(p=>{const f=b==="ticker"&&p.getAttribute("data-chip-market")===v;p.hidden=!f})},h=()=>{if(!o)return;if(d!=null&&d.destroy&&d.destroy(),b==="lobby"){const T=oa(v),D=a(v==="TW"?"twLobby":"usLobby");$(D),d=Se(o,T,{config:s,market:v,title:D,emptyLine:a("noMessages"),maxLen:80});return}const p=r.querySelector(`.chat-chip-row[data-chip-market="${v}"]`),f=(p==null?void 0:p.querySelector(".chat-chip.active"))||(p==null?void 0:p.querySelector(".chat-chip"));if(!f){$(a(v==="TW"?"twLobby":"usLobby")),o.innerHTML=`<div class="chat-empty-state"><p>${i(a("noTickersDiscuss"))}</p></div>`,d={destroy(){}};return}$(f.dataset.ticker),d=Se(o,f.dataset.ticker,{config:s,market:v,title:f.dataset.ticker,emptyLine:a("noComments")})};m.forEach(p=>{p.addEventListener("click",()=>{v=p.dataset.chatMarket,r.dataset.market=v,m.forEach(T=>{const D=T===p;T.classList.toggle("active",D),T.setAttribute("aria-selected",D?"true":"false")});const f=r.querySelector(`.chat-chip-row[data-chip-market="${v}"]`);f==null||f.querySelectorAll(".chat-chip").forEach((T,D)=>T.classList.toggle("active",D===0)),y(),h()})}),g.forEach(p=>{p.addEventListener("click",()=>{b=p.dataset.chatMode,r.dataset.mode=b,g.forEach(f=>{const T=f===p;f.classList.toggle("active",T),f.setAttribute("aria-selected",T?"true":"false")}),y(),h()})}),r.querySelectorAll(".chat-chip").forEach(p=>{p.addEventListener("click",()=>{const f=p.closest(".chat-chip-row");f==null||f.querySelectorAll(".chat-chip").forEach(T=>T.classList.toggle("active",T===p)),b==="ticker"&&h()})});const k=p=>{const f=r.querySelector(".chat-menu");f&&f.open&&!f.contains(p.target)&&(f.open=!1)};return document.addEventListener("click",k),y(),h(),{destroy(){document.removeEventListener("click",k),d!=null&&d.destroy&&d.destroy()}}}let X=null,be=null,Ge=null,de=null;async function Ve(t){const e=be,s=Ge,n=ge();t.innerHTML=ua(e,s),document.title=a("siteTitle"),Me(),ma(t),ze(t,n,{updateHash:!0,scrollTop:!1}),ha(t),mt(t),it(t),await Qt("#xq-root");let r=de;const o=await It("#ss-social-digest",_.socialDigestUrl);if(o!=null&&o.ok)r=o.data,de=r;else if(!r)try{r=await Be(_.socialDigestUrl),de=r}catch{r=null}X!=null&&X.destroy&&X.destroy(),X=ga(t,e,{config:_,digest:r}),At(t,{config:_,digest:r}),Dt("#ss-giscus",{config:_})}async function va(){const t=document.getElementById("app");!t||!be||await Ve(t)}async function ve(){const t=document.getElementById("app");Me();const e=document.getElementById("loading");e&&(e.textContent=a("loading"));try{const s=await fetch(Xt);if(!s.ok)throw new Error(`HTTP ${s.status}`);be=await s.json(),Ge=await ht(),await Ve(t),ve._langHooked||(ve._langHooked=!0,Xe(()=>{va()}))}catch(s){t.innerHTML=`<div class="error">${i(a("loadError",{msg:s.message}))}</div>`}}ve();
