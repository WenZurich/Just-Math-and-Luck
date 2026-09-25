(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const Ja=[{id:"zh-Hant",label:"繁體中文",short:"繁"},{id:"en",label:"English",short:"EN"},{id:"zh-Hans",label:"简体中文",short:"简"},{id:"ja",label:"日本語",short:"日"}],Ya=Ja.map(e=>e.id),Xa="site-lang",Rt="zh-Hant",Nt=new Set;function Es(){try{const t=localStorage.getItem(Xa);if(t&&Ya.includes(t))return t}catch{}const e=typeof navigator<"u"&&navigator.language||"";return/^zh[-_]?(CN|Hans|SG)/i.test(e)?"zh-Hans":/^zh/i.test(e)?"zh-Hant":/^ja/i.test(e)?"ja":/^en/i.test(e)?"en":Rt}let _=Es();function Tt(){return _}function js(e){if(!Ya.includes(e)||e===_)return!1;_=e;try{localStorage.setItem(Xa,e)}catch{}return typeof document<"u"&&(document.documentElement.lang=e==="zh-Hant"?"zh-Hant":e==="zh-Hans"?"zh-Hans":e),Nt.forEach(t=>{try{t(e)}catch{}}),!0}function zs(e){return Nt.add(e),()=>Nt.delete(e)}function L(){return _==="en"?"en-US":_==="ja"?"ja-JP":_==="zh-Hans"?"zh-CN":"zh-TW"}function Ka(){typeof document>"u"||(document.documentElement.lang=_==="zh-Hant"?"zh-Hant":_==="zh-Hans"?"zh-Hans":_)}const wt={siteTitle:"每日數學選股",loading:"載入中…",disclaimer:"投資涉及風險，資訊僅供參考，非投資建議",footer:"投資涉及風險，資訊僅供參考，非投資建議",dataAsOf:"資料",taipei:"（台北）",navMain:"主要導覽",navToday:"今日",navStrategies:"策略",navPaper:"模擬",navMore:"更多",navMoreClose:"關閉",navLogic:"邏輯",researchTitle:"研究",navResearch:"研究",navOptions:"選擇權",navEarnings:"讀財報",earningsTitle:"讀財報",earningsLead:"美股 Magnificent 7 與高關注財報摘要：公司在做什麼、關鍵數字、下一步看什麼——白話、每日更新，非投資建議。",earningsDisclaimer:"非投資建議。數字來自公開 Yahoo Finance；缺欄略過不顯示，不構成個人化投資建議。",earningsUsFocus:"以美股為主",earningsTwStub:"台股財報稍後開放（規劃中）",earningsSelectionTitle:"關注名單規則：",earningsSelectionFallback:"市值最大且未來 14 日內有財報的非 Mag7 大型股；或 Yahoo 熱門成交；不足則以 45 日內行事曆亮點補齊。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——上次財報與下次日期（已知時）。",earningsMag7Badge:"Mag7",earningsHotTitle:"高關注／熱門財報",earningsHotLead:"依上方規則挑選；標籤說明為何入選。",earningsHotEmpty:"目前視窗內暫無符合條件的標的",earningsWhatItDoes:"這家公司在做什麼",earningsWhatToWatch:"下一步看什麼",earningsNextDate:"下次財報",earningsLastEps:"上次 EPS",earningsRevYoy:"營收 YoY",earningsEpsYoy:"獲利 YoY",earningsPe:"本益比",earningsForwardPe:"預估本益",earningsEstimate:"預估",earningsDataMissing:"資料不足",earningsTagPrimary:"14 日內・大型",earningsTagActives:"熱門成交・14 日內",earningsTagRecent:"近日已公布",earningsTagFallback:"45 日行事曆亮點",earningsTagOther:"關注",earningsPartialBlocker:"部分資料受阻",earningsRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",earningsLoadError:"無法載入財報摘要（{msg}）",earningsEmpty:"財報摘要整理中，請稍後再看。",navLookup:"查股",lookupTitle:"查股／個股",lookupLead:"輸入美股或台股代碼，查看公司簡介、即時報價、財報重點與官方財報連結——白話整理；行情來自 Yahoo，官方申報連至 SEC／公開資訊觀測站。非投資建議。",lookupDisclaimer:"非投資建議。行情數字來自公開 Yahoo Finance；官方財報連結連至 SEC EDGAR／公開資訊觀測站。缺欄不顯示、不編造。即時抓取可能受網路或來源限制。",lookupInputLabel:"股票代碼",lookupPlaceholderUs:"例如 AAPL",lookupPlaceholderTw:"例如 2330 或 2330.TW",lookupHintUs:"美股：輸入代號如 AAPL、MSFT、NVDA",lookupHintTw:"台股：四碼代號如 2330（自動加 .TW；上櫃可試 .TWO）",lookupSearch:"查詢",lookupIdle:"輸入代碼後按查詢，即可查看報價與財報摘要。",lookupLoading:"正在向 Yahoo Finance 抓取…",lookupEmptyInput:"請輸入股票代碼",lookupInvalid:"代碼格式無法辨識。美股如 AAPL；台股如 2330 或 2330.TW",lookupNotFound:"找不到此代碼的報價。請確認市場分頁（美股／台股）與代碼是否正確。",lookupError:"查詢失敗（{msg}）",lookupBusiness:"公司在做什麼",lookupQuoteStats:"報價與關鍵數據",lookupFinancials:"財務摘要",lookupEarnings:"財報重點",lookupPrevClose:"前收",lookupVolume:"成交量",lookupDayRange:"今日區間",lookup52w:"52 週高低",lookupMarketCap:"市值",lookupEps:"每股盈餘",lookupBeta:"Beta",lookupDivYield:"殖利率",lookupRevenue:"營收",lookupGrossMargin:"毛利率",lookupProfitMargin:"淨利率",lookupEpsConsensus:"預估 EPS",lookupEpsSurprise:"EPS 驚喜",lookupSources:"來源",lookupPartial:"部分進階欄位暫無法取得（已顯示可得數字，未編造）。",lookupOfficialFilings:"官方財報",lookupOfficialFilingsLead:"以下連結通往官方申報與公開資訊；美股可另列近期 10-K／10-Q／8-K（公開可抓取時）。數字不編造。",lookupSourceOfficial:"官方來源",lookupSourceQuote:"行情來源",lookupSourceCompany:"公司網站",lookupSecEdgarSearch:"SEC EDGAR 公司申報查詢",lookupSecEdgarBrowse:"SEC EDGAR 公司瀏覽頁",lookupSecFormsFilter:"SEC 10-K／10-Q 等年季報篩選",lookupMopsFinancialBook:"公開資訊觀測站｜財務報告書",lookupMopsFinancialQuery:"公開資訊觀測站｜財務報告查詢頁",lookupMopsCompany:"公開資訊觀測站｜公司基本資料",lookupMopsMaterial:"公開資訊觀測站｜重大訊息",lookupTwseIsin:"證交所 ISIN／基本資料查詢",lookupTpexCompany:"櫃買中心｜公司資料",lookupYahooTwQuote:"Yahoo 奇摩股市（行情，非正式財報）",lookupCompanyWebsite:"公司官網",lookupInvestorRelations:"投資人關係／IR（公開資料）",lookupRecentFilings:"近期官方申報",lookupFilingForm:"表單",lookupFilingDate:"申報日",lookupFilingDoc:"文件",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"近期申報清單暫時無法載入（網路或來源限制）。",lookupFilingsListEmpty:"目前沒有可列示的近期 10-K／10-Q／8-K。",lookupFilingsLinksStillWork:"上方官方連結仍可開啟查閱。",lookupFilingsTwNote:"台股請以公開資訊觀測站（MOPS）為官方財報來源；下方亦附行情頁供對照。",lookupFilingsCikUnavailable:"尚無法對應 SEC CIK；仍可透過上方 EDGAR 以代號查詢。",navSoxl:"SOXL",soxlTitle:"SOXL 半導體槓桿",soxlLead:"Direxion 每日半導體多頭 3 倍 ETF：最新報價、異常／事件、相關新聞，以及 SEC N-PORT 持股權重與估算貢獻——白話整理，非投資建議。",soxlDisclaimer:"非投資建議。SOXL 為約 3 倍日槓桿 ETF，波動與虧損風險極高；持股權重來自 SEC N-PORT（非當日），貢獻度為估算。",soxlHeroLabel:"SOXL 最新報價",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正規收盤",soxlLeverageNote:"SOXL 目標約為 ICE Semiconductor Index 單日表現的 3 倍；隔夜與多日累積不可用簡單 3 倍推估。",soxlHoldingsAsOf:"持股權重截至",soxlHoldingsNotSameDay:"最新 N-PORT，非今日即時",soxlEventsTitle:"事件／異常",soxlNewsTitle:"相關新聞",soxlNewsEmpty:"暫無相關新聞",soxlHoldingsTitle:"持股與估算貢獻",soxlHoldingsLead:"權重來自 SEC N-PORT；現金與指數交換常佔大宗。貢獻 ≈ 權重 × 報酬（標示為估算，且未直接等於 3x ETF 點數）。",soxlHoldingsEmpty:"持股清單整理中，請稍後再看。",soxlColName:"標的",soxlColWeight:"權重",soxlColReturn:"日報酬",soxlColContrib:"估算貢獻",soxlColReasons:"白話原因",soxlContributionHint:"估算＝權重% × 報酬% ÷ 100（籃子百分點；SOXL 約 3× 日槓桿，不等於 ETF 點數）",soxlSourceN:"來源 {n}",soxlOverallTitle:"為何漲／為何跌",soxlWhyUp:"偏多時常見原因",soxlWhyDown:"偏空時常見原因",soxlRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",soxlLoadError:"無法載入 SOXL 桌面（{msg}）",navTxf:"台指期",txfTitle:"台指期",txfLead:"臺灣加權現貨對臺股期貨：近月／次月報價、基差、成交與未平倉、三大法人部位、保證金與到期日——全部來自期交所／證交所公開資料，白話整理，非投資建議。",txfDisclaimer:"投資涉及風險，資訊僅供參考，非投資建議。美股與台指期分欄；數字缺欄不捏造。",txfHeroLabel:"臺股期貨近月報價",txfNearBadge:"近月",txfNextBadge:"次月",txfSettle:"結算價",txfVolume:"成交量",txfOI:"未平倉",txfSessionDate:"行情日",txfSpotLabel:"加權現貨",txfBasisLabel:"基差",txfBasisHint:"基差＝近月期貨 − 現貨；正值表示期貨相對現貨溢價。",txfMultiplierShort:"大台乘數 NT${n}／點（紙上損益＝點數差×乘數×口數）",txfContractsTitle:"契約：大台／小台／微台",txfContractsLead:"一般交易時段行情。月契約最後交易日依官方「第三個星期三」規則推算，假日調整請對照期交所公告。",txfMultLabel:"契約乘數",txfPerPoint:"／點",txfMarginInitial:"原始保證金",txfMarginMaint:"維持保證金",txfColMonth:"月份",txfColLast:"最新",txfColSettle:"結算",txfColChange:"漲跌",txfColVolume:"成交量",txfColOI:"未平倉",txfColLTD:"最後交易日",txfInstTitle:"三大法人期貨部位",txfInstLead:"未平倉多空與當日淨買賣（期交所，截至 {date}）",txfInstFoot:"三大法人為彙總結果，不代表單一機構策略。",txfColParty:"身份",txfColLongOI:"多方未平倉",txfColShortOI:"空方未平倉",txfColNetOI:"淨未平倉",txfColNetVol:"淨買賣口數",txfCalendarTitle:"結算／選擇權彙總",txfNextLTD:"近月最後交易日",txfNearMonth:"近月",txfNextMonth:"次月",txfLTDRule:"月契約最後交易日＝交割月份第三個星期三。",txfRecentSettle:"近期最後結算價",txfPcrTitle:"臺指選擇權 P/C",txfPcrVol:"成交量比",txfPcrOI:"未平倉比",txfExplainTitle:"白話說明",txfExplain1:"台指期（TX）是以臺灣加權股價指數為標的的指數期貨，採現金交割；小台（MTX）與微台（TMF）規格較小，方便調整部位。",txfExplain2:"基差＝期貨價 − 現貨指數。升水（正基差）表示期貨貴於現貨；貼水則相反。基差會隨到期日逼近而收斂。",txfExplain3:"未平倉（OI）是尚未平倉的契約口數，反映市場留倉規模，不是當日漲跌原因本身。",txfExplain4:"紙上損益可用：點數差 × 契約乘數 × 口數（大台每點 NT$200、小台 NT$50、微台 NT$10）。保證金以期交所公告為準。",txfSourcesTitle:"資料來源",txfLoadError:"無法載入台指期桌面（{msg}）",navPodcasts:"名人podcast",podcastsTitle:"名人podcast",podcastsLead:"精選投資人／主持人公開訪談與 Podcast 框架整理：可掃讀論點、市場分欄、候選狀態標示清楚——非投資建議。",podcastsDisclaimer:"非投資建議。本區整理公開訪談與研究書庫已有資料；數字與做法標示來源，不構成個人化建議。數學閘門未通過者僅候選／觀察。",podcastsFeatured:"精選",podcastsStubBadge:"候選摘要",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（謝孟恭）",podcastsGooayeLead:"台灣市場／總經／風險／散戶心理 Podcast；集數重點整理自公開 RSS 節目指引（非逐字稿、非投資建議）。",podcastsGooayeMarket:"以台股為主 · 美／台分欄",podcastsGooayeStubNote:"輕量 stub：完整條目與可計算規則在研究書庫；此處不發明集數引言。",podcastsGooayePoint1:"先管風險與部位，再談單一標的故事",podcastsGooayePoint2:"護國神山供應鏈用籃子強弱看，不單壓一檔",podcastsGooayePoint3:"美股用利率方向當風險偏好代理；台股另算",podcastsGotoResearch:"到研究書庫看完整條目",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"分類選單",podcastsCategories:"名人podcast分類",podcastsMenuLead:"先選分類再進入內容——不把長文全部攤在同一頁。",podcastsOpenCategory:"開啟此分類",gooayeLibraryBadge:"集數庫",gooayeDisclaimer:"候選／觀察；數學閘關閉。標「已聽寫」者：下載公開音檔＋語音轉文字後撰寫股票重點分析。標「僅節目說明」者：僅 RSS／節目說明，未聽寫。主持人觀點、候選狀態；非投資建議。",gooayeLoading:"載入股癌集數庫…",gooayeLoadError:"無法載入集數庫（{msg}）",gooayeEpisodeCount:"共 {n} 集（公開 RSS）",gooayeAsOf:"資料截至 {date}（台北）",gooayeEmptyCount:"其中 {n} 集公開文字不足，僅列標題",gooayeSearchLabel:"搜尋集數",gooayeSearchPlaceholder:"標題、集數或關鍵字",gooayeSourceLine:"來源：",gooayeKeyPoints:"重點整理",gooayeNotesThin:"公開節目指引幾乎只有標題／短語，無更多可整理文字。",gooayeTeaserNote:"公開 show notes 偏短（常見為開場短語＋廣告）；以上僅整理可用的公開文字，未聽音檔、未發明內容。",gooayeListen:"收聽（SoundOn）",gooayeLoadMore:"再顯示 {n} 集（尚餘 {left}）",gooayeShowingAll:"已顯示全部 {n} 集",gooayeNoResults:"沒有符合的集數。",gooayeUntitled:"未命名集數",gooayeBadgeListened:"已聽寫",gooayeBadgeRssOnly:"僅節目說明",gooayeStockAnalysis:"股票重點分析（已聽寫）",gooayeRssTeaserToggle:"公開節目說明（RSS）",gooayeListenedAt:"聽寫於 {date}（台北）",gooayeListenedCount:"已聽寫 {n} 集",gooayeRssOnlyNote:"此集尚未聽音檔；以上僅整理公開 RSS／節目說明，非聽寫分析。",podcastsXiaojunTitle:"張小珺jùn｜商業訪談錄",podcastsXiaojunHandle:"張小珺 · 商業／科技長訪談",podcastsXiaojunLead:"以中國科技與商業人物為主的長篇訪談；集數庫來自公開 RSS 節目說明。標「已聽寫」者另附股票／產業重點（候選／觀察，非投資建議）。",podcastsXiaojunMarket:"以中國科技產業為主 · 跨市場觀察",podcastsXiaojunApple:"在 Apple Podcasts 收聽",xiaojunLibraryBadge:"集數庫",xiaojunDisclaimer:"候選／觀察；數學閘關閉。標「已聽寫」者：下載公開音檔＋語音轉文字後撰寫股票／產業重點。標「僅節目說明」者：僅 RSS／節目說明，未聽寫。主持人觀點；非投資建議。",xiaojunLoading:"載入張小珺集數庫…",xiaojunLoadError:"無法載入集數庫（{msg}）",xiaojunEpisodeCount:"共 {n} 集（公開 RSS）",xiaojunAsOf:"資料截至 {date}（台北）",xiaojunEmptyCount:"其中 {n} 集公開文字不足，僅列標題",xiaojunSearchLabel:"搜尋集數",xiaojunSearchPlaceholder:"標題、集數或關鍵字",xiaojunSourceLine:"來源：",xiaojunKeyPoints:"重點整理",xiaojunNotesThin:"公開節目指引幾乎只有標題／短語，無更多可整理文字。",xiaojunTeaserNote:"以上僅整理公開 RSS／節目說明，未聽音檔、未發明內容。",xiaojunListen:"在 Apple Podcasts 收聽",xiaojunLoadMore:"再顯示 {n} 集（尚餘 {left}）",xiaojunShowingAll:"已顯示全部 {n} 集",xiaojunNoResults:"沒有符合的集數。",xiaojunUntitled:"未命名集數",xiaojunBadgeListened:"已聽寫",xiaojunBadgeRssOnly:"僅節目說明",xiaojunStockAnalysis:"股票／產業重點分析（已聽寫）",xiaojunRssTeaserToggle:"公開節目說明（RSS）",xiaojunListenedAt:"聽寫於 {date}（台北）",xiaojunListenedCount:"已聽寫 {n} 集",xiaojunRssOnlyNote:"此集尚未聽音檔；以上僅整理公開 RSS／節目說明，非聽寫分析。",podcastsWhynottvTitle:"WhynotTV Podcast",podcastsWhynottvHandle:"Tairan He · AI／機器人長訪談",podcastsWhynottvLead:"聚焦 AI、機器人與科研創業的長篇訪談；集數庫來自公開 Anchor RSS。標「已聽寫」者另附產業重點（候選／觀察，非投資建議）。",podcastsWhynottvMarket:"AI／機器人與科研創業 · 跨市場觀察",podcastsWhynottvApple:"在 Apple Podcasts 收聽",whynottvLibraryBadge:"集數庫",whynottvDisclaimer:"候選／觀察；數學閘關閉。標「已聽寫」者：下載公開音檔＋語音轉文字後撰寫產業重點。標「僅節目說明」者：僅 RSS／節目說明，未聽寫。主持人觀點；非投資建議。",whynottvLoading:"載入 WhynotTV 集數庫…",whynottvLoadError:"無法載入集數庫（{msg}）",whynottvEpisodeCount:"共 {n} 集（公開 RSS）",whynottvAsOf:"資料截至 {date}（台北）",whynottvEmptyCount:"其中 {n} 集公開文字不足，僅列標題",whynottvSearchLabel:"搜尋集數",whynottvSearchPlaceholder:"標題、集數或關鍵字",whynottvSourceLine:"來源：",whynottvKeyPoints:"重點整理",whynottvNotesThin:"公開節目指引幾乎只有標題／短語，無更多可整理文字。",whynottvTeaserNote:"以上僅整理公開 RSS／節目說明，未聽音檔、未發明內容。",whynottvListen:"在 Apple Podcasts 收聽",whynottvLoadMore:"再顯示 {n} 集（尚餘 {left}）",whynottvShowingAll:"已顯示全部 {n} 集",whynottvNoResults:"沒有符合的集數。",whynottvUntitled:"未命名集數",whynottvBadgeListened:"已聽寫",whynottvBadgeRssOnly:"僅節目說明",whynottvStockAnalysis:"股票／產業重點分析（已聽寫）",whynottvRssTeaserToggle:"公開節目說明（RSS）",whynottvListenedAt:"聽寫於 {date}（台北）",whynottvListenedCount:"已聽寫 {n} 集",whynottvRssOnlyNote:"此集尚未聽音檔；以上僅整理公開 RSS／節目說明，非聽寫分析。",podcastsZhangJunanTitle:"張濬安",podcastsZhangJunanHandle:"et220870 · Blogspot／PTT",podcastsZhangJunanLead:"公開部落格與 PTT 發文整理：績效覆盤、交易紀律、券商／房貸實務與早期操作日誌。標「已讀分析」者已讀全文；標「僅標題」者公開正文不可得。候選／觀察，非投資建議。",podcastsZhangJunanMarket:"台股／交易實務 · 個人覆盤",zhangJunanLibraryBadge:"文章庫",zhangJunanDisclaimer:"候選／觀察；數學閘關閉。標「已讀分析」：已讀公開正文（部落格全文或 PTT 原文＋留言）後撰寫股市／資產重點。標「僅標題」：公開頁正文不可讀或已刪。作者觀點；非投資建議。不納入選股清單。",zhangJunanLoading:"載入張濬安文章庫…",zhangJunanLoadError:"無法載入文章庫（{msg}）",zhangJunanPostCount:"共 {n} 篇（公開列表）",zhangJunanAsOf:"資料截至 {date}（台北）",zhangJunanAnalyzedCount:"已讀分析 {n} 篇",zhangJunanTitleOnlyCount:"其中 {n} 篇僅標題（正文不可讀）",zhangJunanSearchLabel:"搜尋文章",zhangJunanSearchPlaceholder:"標題、看板、關鍵字",zhangJunanSourceLine:"來源：",zhangJunanKeyPoints:"重點整理",zhangJunanStockAnalysis:"股市／資產重點分析（已讀）",zhangJunanNotesThin:"公開文字不足，僅列標題與連結。",zhangJunanTitleOnlyNote:"公開頁正文已刪除或無法解析；以上不臆造內容。",zhangJunanOpenBlog:"開啟原文（部落格）",zhangJunanOpenPtt:"開啟原文（PTT）",zhangJunanLoadMore:"再顯示 {n} 篇（尚餘 {left}）",zhangJunanShowingAll:"已顯示全部 {n} 篇",zhangJunanNoResults:"沒有符合的文章。",zhangJunanUntitled:"未命名文章",zhangJunanBadgeAnalyzed:"已讀分析",zhangJunanBadgeTitleOnly:"僅標題",zhangJunanSourceBlog:"部落格",zhangJunanSourcePtt:"PTT",zhangJunanCommentSummary:"留言重點",zhangJunanFilterAll:"全部",zhangJunanFilterBlog:"部落格",zhangJunanFilterPtt:"PTT",zhangJunanFilterSeriesAll:"全部子分類",zhangJunanSourceFilters:"來源篩選",zhangJunanSeriesFilters:"子分類篩選",researchCatMenu:"分類選單",researchCategories:"研究分類",researchMenuLead:"先選類型／市場／狀態，再瀏覽該分類條目。",researchOpenCategory:"開啟此分類",researchCatBooks:"書籍",researchCatPapers:"論文",researchCatPodcasts:"Podcast",researchCatUs:"美股焦點",researchCatTw:"台股焦點",researchCatCandidate:"候選",researchCatWatch:"觀察中",researchBackMenu:"回分類選單",researchStatusFilters:"狀態",godzillaTitle:"哥吉拉",godzillaLead:"Threads 受訪者「哥吉拉」的美股框架整理：時間與健康、RSU 再配置、基本面、能力圈、稅務節奏、選擇權工具——白話卡片，非投資建議。",godzillaDisclaimer:"非投資建議。整理自公開訪談；數字與做法標示為受訪者自述，不構成個人化建議。數學閘門未通過，僅候選／觀察。",godzillaHeroLabel:"哥吉拉框架總覽",godzillaKicker:"候選框架 · 美股為主",godzillaTagline:"用健康的時間換自由；長股為核、選擇權為輔；稅務決定換倉節奏。",godzillaBadgeCandidate:"候選",godzillaBadgeWatch:"觀察中",godzillaUsFocus:"以美股為主",godzillaSelfReport:"受訪者自述",godzillaListenedBadge:"已聽寫",godzillaStockTitle:"股票重點分析（已聽寫）",godzillaStockLead:"依公開 YouTube 訪談音訊＋語音轉寫整理的受訪者觀點（候選／觀察；非投資建議）。",godzillaStock1:"時間與健康優先於再堆金錢／RSU；金錢買不回時間，退休目標會隨 RSU 累積而上修。",godzillaStock2:"美股科技薪資結構高度依賴 RSU；股價上漲會放大總報酬，也放大單一公司集中風險。",godzillaStock3:"進場時點：特斯拉较早布局自覺「可更早出場會賺更多」；Meta 約在相對低檔區間進入（受訪者自述）。",godzillaStock4:"下一波關注偏 B2C AI 應用落地；當下顯見案例如 Tesla FSD、Palantir，其餘仍在觀察。硬體／AI 資本開支仍在成長，但多數應用仍偏 B2B。",godzillaStock5:"即便看好 NVIDIA，也不主張把倉位壓在單一公司；美國 W2／稅務計算下，高薪＋集中持股需一起規劃。",godzillaStock6:"台股無資本利得稅 vs 美國稅負：流動性／進出方便是優點，稅制誘因不同，不能直接照搬美股玩法。",godzillaStockNote:"轉寫模型：faster-whisper small int8。來源影片公開可查；數字與標的均為訪談中受訪者觀點，候選／觀察。",godzillaSourceLabel:"來源",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"觀看 YouTube 訪談",godzillaThesesTitle:"核心論點",godzillaThesesLead:"十條可掃讀重點；細節皆為受訪者自述。",godzillaThesis1Title:"時間與健康重於再堆 RSU",godzillaThesis1Body:"退休目標常會膨脹（例如自述從約 3,000 萬美元調到 6,000 萬，再加上住房與子女）；停下來往往是身體撐不住。用健康的 40 多歲換旅行與自由，和 50–60 歲很不一樣。",godzillaThesis2Title:"美股 RSU 改變誘因",godzillaThesis2Body:"四年歸屬、與公司利益綁在一起；對比台股現金獎金較少用來買自家股票。",godzillaThesis3Title:"歸屬當日賣出、轉到信念標的",godzillaThesis3Body:"既得 RSU 當日賣出，再配置到有信念的名字（其例：NVDA），避免薪水＋未歸屬全押同一籃。",godzillaThesis4Title:"只看基本面",godzillaThesis4Body:"看營收／EPS 趨勢；忽略華爾街目標價；新聞噪音多半有害。",godzillaThesis5Title:"能力圈：硬體／科技",godzillaThesis5Body:"能力圈在硬體與科技——NVDA 權重最高；亦提 PLTR、AVGO、TSM；很少碰科技外。指數部位現在較小，終局想像多數在指數。",godzillaThesis6Title:"稅務決定換倉節奏",godzillaThesis6Body:"高 W2 收入時資本利得稅重；離職後可多年把個股輪換成指數、把稅負控在可接受範圍；賣出 Covered Call 可緩衝下跌。",godzillaThesis7Title:"選擇權是工具",godzillaThesis7Body:"多半當卖方（Covered Call／Cash-secured Put）；少數做多買權／LEAP，僅在恐慌或價格與基本面背離時；接受權利金可能歸零；從不裸賣。",godzillaThesis8Title:"Covered Call：被指派就延後",godzillaThesis8Body:"有被指派風險就往後換月（roll out）；不要為了小權利金去履約或賣掉核心持股；不舒服就少賣合約。",godzillaThesis9Title:"進場等趨勢",godzillaThesis9Body:"等 1–2 次乾淨財報確認趨勢，即使成本墊高也接受；有閒錢就持續買好公司；不追熱門明牌。",godzillaThesis10Title:"美／台觀察分欄",godzillaThesis10Body:"美股資本利得稅→傾向抱更久；台股無資本利得＋有證交稅→周轉較高、投機文化較重（僅觀察，非操作指令）。",godzillaChecklistTitle:"作法清單",godzillaChecklistLead:"可執行的自我檢查，不是下單清單。",godzillaCheck1:"物慾低；別讓「夠了」的數字一直往上漲。",godzillaCheck2:"長股為核心；選擇權是衛星／避險／偶爾槓桿。",godzillaCheck3:"部位：不借錢；接受不了歸零，就別碰選擇權。",godzillaCheck4:"選擇權優先流動性高的大型股。",godzillaCheck5:"終局配置草圖：約 80% 寬基指數，小袖口參與產業（＋偶爾小額買權）。",godzillaCheck6:"PLTR 例子：B2B 靠前線工程師變現；若商業成長失望就減碼。",godzillaOptionsTitle:"選擇權用法",godzillaOptionsLead:"卖方為主；买方極少、僅在極端偏離時。",godzillaOpt1:"主力：Covered Call、Cash-secured Put。",godzillaOpt2:"小部位長買權／LEAP：恐慌或價格脫離基本面時。",godzillaOpt3:"權利金可全部虧完；從不裸倉。",godzillaOpt4:"被指派風險：往後換月；核心持股不為小權利金賣出。",godzillaRsuTitle:"RSU、稅務與輪換",godzillaRsuLead:"誘因、分散與離職後的稅務節奏。",godzillaRsu1:"歸屬當日賣出 RSU，再配置到信念標的（例：NVDA）。",godzillaRsu2:"在職高稅負時少動大額已實現利得；離職後多年輪換個股→指數。",godzillaRsu3:"Covered Call 作為下跌緩衝，不是賭方向。",godzillaTwTitle:"台股觀察",godzillaTwLead:"與美股框架分開；僅文化／稅制觀察。",godzillaTwBody:"美股有資本利得稅，傾向長期持有；台股無資本利得稅、有證交稅，周轉與短線文化較明顯。此頁主軸仍是美股框架，台股僅作對照，不寫進正式篩選。",godzillaGateNote:"尚未寫進正式篩選",godzillaGateDetail:"狀態：候選／strategyCandidate=watch。數學閘門關閉——未接入即時篩選器或模擬交易；僅供閱讀與對照。",jensenTitle:"黃仁勳／Jensen Huang",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公開演講整理：視角、需求與摩爾定律、文化、現金現實、再發明——候選／觀察，非投資建議。",jensenDisclaimer:"非投資建議。整理自 Stanford Online 公開演講（約 2009；YouTube 2011 上傳）；論點來自講者自述主題，不構成個人化建議。數學閘門未通過，僅候選／觀察。",jensenHeroLabel:"黃仁勳演講重點",jensenKicker:"候選演講 · 美股科技／半導體創業",jensenTagline:"視角勝過空泛「願景」；用文化與再發明撐住長週期公司建設。",jensenUsFocus:"以美股／科技為主",jensenTalkBadge:"公開演講",jensenListenedBadge:"已聽寫",jensenStockTitle:"股票／事業重點（已聽寫）",jensenStockLead:"依公開 Stanford ETL 訪談影片音訊＋語音轉寫整理（約2009；歷史觀點，非當下財報）。候選／觀察；非投資建議。",jensenStock1:"創業敘事（1993）：押注 PC＋3D／遊戲會成大市場；VC／長輩當時不信「為了打遊戲開公司」。",jensenStock2:"競爭：消費級3D一度湧入數十～上百家；NVIDIA自述最終成僅存的電腦繪圖公司——關鍵是看懂事業本質（半導體／Moore's Law 如競爭律）與持續重塑，而非只靠執行。",jensenStock3:"可程式著色器轉型：主動吞噬自己成功的固定功能產品；第一代幾乎拖垮公司，但自認不做會死於 Moore's Law 節奏。",jensenStock4:"資源配置：競爭決定價格，CEO決定要不要接案；看關鍵資源相對市場需求與機會成本，不只會計成本。",jensenStock5:"文化：創新需容忍計算過的失敗；新創定義＝幾乎一直快倒閉。通用化 GPU（瑞士刀）有偏離利基風險，卻是延長產業壽命的路徑。",jensenStock6:"時間錨點：本場為歷史談（預現代AI訓練熱潮），勿直接外推今日資料中心財報。NVIDIA為講者公司；候選／觀察。",jensenStockNote:"轉寫：faster-whisper small int8（en）。來源 YouTube Xn1EsFe7snQ／Stanford ETL。歷史訪談觀點。",jensenMeta:"Stanford Online · STVP ETL · 約 1:03:38 · 上傳 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"觀看 YouTube 演講",jensenOpenYoutube:"在 YouTube 開啟完整影片",jensenEmbedTitle:"Jen-Hsun Huang：Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 相關剪輯",jensenHighlightsTitle:"演講重點（白話）",jensenHighlightsLead:"五條可掃讀主題；僅整理公開演講中反覆出現的論點，非逐字稿。",jensenH1Title:"視角，而非空泛「願景」",jensenH1Body:"人人都有視角。NVIDIA 早期押注：個人電腦加上便宜的 3D 會打開遊戲市場（後來也談到 Keyhole→Google Earth），當時對許多 VC 而言市場幾乎是零。",jensenH2Title:"無窮需求與摩爾定律",jensenH2Body:"新類別尚未被定價時，有時要暫時忽略顧客回饋；先 rinse-and-repeat，再在「夠好」扼殺媒介前重新發明（固定功能→可程式著色器／GeForce FX 近死經驗、CG 語言）。",jensenH3Title:"文化：敢冒算過的風險",jensenH3Body:"創新需要計算過的風險、容忍快速失敗、智識誠實、願意改道；動機是熱情與目的，而非「把公司賣掉」。",jensenH4Title:"現金與新創現實",jensenH4Body:"永遠在募資、省錢或賺錢；新創幾乎總是瀕臨倒閉。VC 更押人與夠大的市場，而非完美商業計畫。",jensenH5Title:"再發明：成功也要拆掉重建",jensenH5Body:"每一次成功終須拆解再建；黃仁勳談的是長視野公司建設，不是連續翻轉出場。",jensenTwTitle:"美／台分欄（僅脈絡）",jensenTwLead:"本條目市場主軸為美股科技／半導體公司建設；台灣僅作供應鏈脈絡，不發明台股標的。",jensenTwBody:"NVDA 作為美股半導體／運算平台公司，供應鏈與台灣晶圓製造、封測生態高度相關——此處僅作產業脈絡註記，不列台股清單，也不寫進正式篩選。",jensenGateNote:"尚未寫進正式篩選",jensenGateDetail:"狀態：候選／strategyCandidate=watch。數學閘門關閉——未接入即時篩選器或模擬交易；僅供閱讀與對照。",jensenWatchCta:"在 YouTube 觀看",jensenEmbedBlockedNote:"此演講由擁有者設定為僅能在 YouTube 觀看（無法於本站內嵌播放）。",optionsTitle:"美股選擇權",optionsLead:"以 McMillan《選擇權策略完全手冊》策略族為主：先看波動與風險形狀，再用公開 Yahoo 鏈結學習——非投資建議。",optionsDisclaimer:"非投資建議；選擇權風險高。僅供教育與公開數據篩選，不構成個人化下單建議。",optionsBookBadge:"這本書",optionsBookCite:"主要參考書",optionsBookLead:"Lawrence G. McMillan《選擇權策略完全手冊》增訂第五版：依看法與波動高低對應策略族（原創摘要，非原文）。",optionsBookFallbackTitle:"選擇權策略完全手冊（McMillan）",optionsGotoResearch:"到研究書庫看完整條目",optionsUsOnly:"僅美股",optionsQualityTitle:"標的輕量財報檢核",optionsQualityLead:"次要濾網：本益、淨值、負債、ROE、營收／獲利趨勢。缺欄略過；不作薦股。",optionsViewTitle:"選擇權觀點（McMillan）",optionsViewLead:"公開期權鏈：ATM 隱含波動、歷史波動、量能偏向；策略族為教育說明。",optionsMcmillanFirst:"先對齊波動高低與風險形狀，再想策略族——不是先猜漲跌再硬套。",optionsPe:"本益比",optionsPb:"股價淨值",optionsDebt:"負債／權益",optionsRoe:"ROE",optionsRevTrend:"營收趨勢",optionsEarnTrend:"獲利趨勢",optionsGate:"品質閘",optionsGatePass:"通過",optionsGateWatch:"觀察",optionsGateFail:"偏弱",optionsGateIncomplete:"資料不足",optionsDataMissing:"資料不足",optionsForwardPe:"預估本益",optionsTrendUp:"成長約 {pct}%",optionsTrendDown:"下滑約 {pct}%",optionsTrendFlat:"大致持平 {pct}%",optionsAtmIv:"ATM 隱含波動",optionsHv:"歷史波動（約 1 月）",optionsIvHv:"IV／HV",optionsVolRegime:"波動狀態",optionsRegimeIvRich:"隱含偏高",optionsRegimeIvCheap:"隱含偏低",optionsRegimeIvFair:"大致均衡",optionsRegimeIvOnly:"僅有 IV",optionsCallPutVol:"買權／賣權成交量",optionsAtmStrike:"近價履約價",optionsExpiry:"到期日",optionsSkewPutHeavy:"賣權量較重",optionsSkewCallHeavy:"買權量較重",optionsSkewBalanced:"量能大致均衡",optionsEduSetups:"策略族（教育）",optionsEduSetupsLead:"依看法＋波動狀態挑選家族；綠底表示較常對齊目前 IV／HV 狀態（仍非建議）。",optionsSetupCoveredCall:"備兌買權（Covered Call）",optionsSetupCoveredCallBody:"已持有股票時賣出買權，換取權利金；上漲空間被履約價「蓋住」。",optionsSetupCoveredCallWarn:"最大利潤有天花板；大跌時股票虧損仍在。",optionsSetupProtectivePut:"保護性賣權（Protective Put）",optionsSetupProtectivePutBody:"持股同時買進賣權，像買保險：下跌有地板，但要付保費。",optionsSetupProtectivePutWarn:"保險成本會吃掉報酬；若波動已很貴，保費更痛。",optionsSetupVertical:"垂直價差（Vertical）",optionsSetupVerticalBody:"同到期、不同履約價的買權或賣權組合，把最大損益框在可計算區間。",optionsSetupVerticalWarn:"方向看錯仍會虧；好處是虧損有上限。",optionsSetupCalendar:"日曆／對角價差（Calendar / Diagonal）",optionsSetupCalendarBody:"不同到期的選擇權組合，常用來表達「時間流逝」或波動變化看法。",optionsSetupCalendarWarn:"對波動與時間敏感；形狀會隨市價移動改變。",optionsSetupStraddle:"跨式／勒式（Straddle / Strangle）",optionsSetupStraddleBody:"同時買（或賣）買權與賣權，押「大波動」或「波動不夠」。",optionsSetupStraddleWarn:"買方需要夠大的移動；賣方面臨兩側風險。",optionsSetupButterfly:"蝶式（Butterfly）",optionsSetupButterflyBody:"多履約價組合，押價格收斂在中間附近；利潤區通常很窄。",optionsSetupButterflyWarn:"甜蜜點很窄；錯過中間就可能接近最大虧損。",optionsSetupVolAligned:"與目前波動狀態較常一起討論",optionsSetupVolNotAligned:"與目前波動狀態較不契合（仍可學習）",optionsRiskShape:"風險形狀（白話）",optionsNoSetups:"暫無策略族說明",optionsPickTicker:"請選擇上方美股代碼",optionsChainBlocked:"期權鏈暫時無法取得",optionsPartialBlocker:"部分欄位不完整",optionsRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",optionsLoadError:"無法載入選擇權快照（{msg}）",optionsEmpty:"尚無美股樣本——請先跑 fetch-us-options",optionsGlossaryTitle:"小詞典（不用公式）",optionsTermDelta:"Delta（方向敏感度）",optionsDefDelta:"價格漲跌時，選擇權大概會跟多少。數字愈靠近 1 或 −1，跟現貨愈緊。",optionsTermIv:"隱含波動 IV",optionsDefIv:"市場「現在願意付多少保費」換算成的波動預期。愈高通常選擇權愈貴。",optionsTermHv:"歷史波動 HV",optionsDefHv:"過去一段時間股價實際晃動有多大，用來和 IV 對照。",optionsTermAtm:"ATM（近價）",optionsDefAtm:"履約價最靠近現價的合約，常拿來當波動溫度計。",optionsTermSkew:"量能偏向",optionsDefSkew:"買權與賣權成交量誰比較多，粗看市場偏保險還是偏追漲。",optionsTermProb:"機率（教育）",optionsDefProb:"只談「比較可能／比較少見」的直覺，不保證結果，也不給個人化勝率。",researchLead:"書單與論文：標題 → 摘要 → 重點作法 → 是否納入策略候選",researchMathGateBanner:"正式納入策略需數學閘門通過（目前未過）— 僅候選",researchMathGate:"數學閘門",researchMathGateDefault:"尚未通過數學閘門",researchFormulas:"可程式化公式",researchTakeaways:"重點作法",researchNoTakeaways:"尚無重點作法",researchSources:"來源",researchFilters:"篩選",researchFilterAll:"全部",researchType:"類型",researchTypeBook:"書籍",researchTypePaper:"論文",researchTypePodcast:"Podcast",researchMarketBoth:"美＋台",researchStrategy:"策略候選",researchCandYes:"候選納入",researchCandNo:"不納入",researchCandWatch:"觀察中",researchStatusCandidate:"候選",researchStatusDeferred:"暫緩",researchStatusAdopted:"已納入",researchStatusRejected:"排除",researchCounts:"書籍 {books} · 論文 {papers} · Podcast {podcasts} · 顯示 {total}",researchEmpty:"此篩選條件下暫無項目",researchNoFormulas:"尚無公式條目",researchLoadError:"無法載入研究庫（{msg}）",researchShelfFilters:"書架分類",researchShelfCoreInvesting:"核心投資經典",researchShelfValueInvesting:"價值型投資",researchShelfBusiness:"商業管理與商界視角",researchShelfLifePartner:"人生智慧與合夥人思想",researchShelfOptions:"選擇權／衍生品",researchShelfRecentReads:"近期閱讀與推薦書",researchShelfFiConcepts:"必看財商觀念書",researchShelfMoneyValues:"理財與金錢價值觀",researchShelfInvestingBasics:"投資理財入門",researchShelfAssetAllocation:"資產配置",researchShelfFinancials:"財報分析",researchShelfMarketAnalysis:"投資分析與戰勝市場",researchShelfEconAnalysis:"經濟分析",researchShelfPsych:"投資心理／隨機性／人性",researchShelfBiographies:"名人傳記",researchShelfAdjacent:"其他／隣接",todayPicks:"今日選股",market:"市場",hot:"熱門",marketQuotes:"市場報價",macroTitle:"美股大事",macroTzEt:"時間・美東 ET",macroAsOf:"更新",macroStale:"資料偏舊（仍顯示上次成功抓取）",macroToday:"今日",macroNext:"即將",macroHighImpact:"高影響",macroEmpty:"近期無高影響美股大事（或資料尚未更新）",macroLoadError:"無法載入美股大事（{msg}）",liveQuotesLive:"即時",liveQuotesStale:"報價暫緩（仍顯示上次成功）",liveQuotesStaleShort:"暫緩",liveQuotesPending:"即時報價連線中…",liveQuotesClock:"報價",macroEvent_fomcDecision:"FOMC 利率決議",macroEvent_fomcMinutes:"FOMC 會議紀要",macroEvent_cpi:"CPI 通膨",macroEvent_ppi:"PPI 生產者物價",macroEvent_pce:"PCE／核心 PCE",macroEvent_nfp:"非農就業 NFP",macroEvent_joblessClaims:"初請失業金",macroEvent_gdp:"GDP",macroEvent_retailSales:"零售銷售",macroEvent_ismMfg:"ISM 製造業",macroEvent_ismServices:"ISM 服務業",macroEvent_jolts:"JOLTS 職缺",twMacroTitle:"台股大事",twMacroTz:"時間・台北時間",twMacroEmpty:"近期無高影響台股大事（或資料尚未更新）",twMacroLoadError:"無法載入台股大事（{msg}）",twMacroEvent_cbcDecision:"央行理監事會",twMacroEvent_dgbasCpi:"CPI 消費者物價",twMacroEvent_dgbasPpi:"PPI／物價指數",twMacroEvent_dgbasUnemployment:"失業率",twMacroEvent_dgbasGdpFlash:"GDP 概估",twMacroEvent_dgbasGdp:"GDP／經濟成長",twMacroEvent_dgbasForecast:"經濟預測",twMacroEvent_moeaExportOrders:"外銷訂單",twMacroEvent_moeaIndustrialProd:"工業生產",twMacroEvent_twseHoliday:"台股休市",usStock:"美股",twStock:"台股",usList:"美股清單",twList:"台股清單",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暫無 Top 候選",ticker:"代碼",name:"名稱",price:"價格",dayPct:"日漲跌",rs:"RS",priorClose:"前收",priorCloseFull:"前收漲幅",pct5d:"5 日",pct1m:"約 1 月",volRatio:"量比",ma:"均線",screening:"篩選",reason:"理由",details:"詳情",business:"本業",risk:"風險",observe:"觀察",dataIncomplete:"資料不全",intraday:"盤中",taipeiClose:"台北收",taiex:"台灣加權 TAIEX",otc:"櫃買",spx:"S&P 500",nasdaq:"Nasdaq",sox:"SOX",usdtwd:"USD/TWD",loadError:"無法載入資料（{msg}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。",langLabel:"語言",paper:"模擬",paperMissing:"尚無模擬帳本檔案。請於專案執行 npm run paper。",paperDisclaimer:"累積模擬帳戶（自 {date} 起） · 不會每日歸零 · 買進即成交 · 非真實下單",paperRules:"規則（各市場獨立帳）",paperRuleTw:"台股本金 NT$3,000,000 · 整張成交",paperRuleUs:"美股本金 US$100,000 · 可買 1 股起",paperRuleBuy:"買：該市場名單·風險1%·停距1.5%·單檔≤8% · 即成交",paperRuleSell:"賣：停損−3% · 停利+12%半倉 · 破SMA20且日跌>2% · 離名單虧損 · 漲停隔日−5%",paperTabTw:"台股帳 · NT$",paperTabUs:"美股帳 · US$",paperBookTw:"台股帳本（NT$）",paperBookUs:"美股帳本（US$）",principal:"本金",cash:"現金",equity:"權益（部位＋現金）",totalPnl:"總損益",totalPnlPct:"總損益 ％",weekPerf:"週績效",monthPerf:"月績效",quarterPerf:"季績效",yearPerf:"年績效",sinceInception:"成立以來",noTradesToday:"本日尚無此類成交（模擬）",noPositions:"目前沒有持股",buy:"買",sell:"賣",shares:"股",qtyShares:"股數",positions:"目前部位",position:"部位",avgCost:"成本",mark:"現價",mktValue:"市值",dayPnl:"日損益",costBasis:"成本合計",weightPct:"權重 ％",posScrollHint:"左右滑動看全部欄位",unrealizedPnl:"未實現損益",unrealizedPct:"未實現 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累積 · 買進即成交",reasonScreenBuy:"名單新開倉",reasonAdd:"持續買進",reasonStop:"停損",reasonTakeProfit:"停利",reasonMomentumBreak:"動能轉弱",reasonOffList:"離開名單",reasonLimitUpChase:"漲停追價急殺",stopLoss:"停損",takeProfit:"停利",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"績效",qty:"數量",note:"說明",strategyScreen:"策略選股",strategyLead:"台／美命中分開檢視 · 公開資料命中優先",strategyLoading:"載入策略結果中…",strategyEmpty:"尚無策略資料。請執行 npm run strategies。",strategyLoadError:"無法載入策略選股（{msg}）。請確認已執行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分類",hitCount:"檔命中",hitTitle:"命中檔數",strategyDetails:"詳情 · 策略說明",conditions:"條件",results:"篩選結果",copyJson:"複製 JSON",exportCsv:"匯出此策略 CSV",exportJson:"匯出 JSON",copied:"已複製",noHitsExport:"此策略今日無命中列可匯出",incomplete:"不足",hitsTotal:"共{n}檔",twOnlyHint:"本策略僅台股",hitMarket:"命中市場",noHits:"本日無命中",dataInsufficient:"資料不足",calibTitle:"校準說明",incompleteFilters:"未檢查濾網（不算通過）：",sessionTwse:"證交所 session",ohlcvBar:"OHLCV K棒",generated:"產生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精選",cat價量:"價量",cat籌碼:"籌碼",cat財務:"財務",cat大師:"大師",cat週期:"週期",cat技術:"技術",cat基本:"基本",cat綜合:"綜合",addWatchlist:"加入自選",watchlistAdded:"已加入自選 {ticker}",watchlistExists:"{ticker} 已在自選",copyFailed:"複製失敗（請手動選取）",csvDownloaded:"已下載 CSV",csvBlocked:"下載被擋：改以資料連結開啟",backtestSoon:"回測：尚未開放",backtestHint:"回測：資料／引擎尚未開放（不提供假回測）",regimeToday:"今日市場週期（美／台分開）",psychologyPhase:"心理相位",cycleStance:"週期姿態",liquidityBias:"流動性偏誤",temperatureScore:"市場溫度",sizeMult:"部位乘數",regimeTags:"週期標籤",dataGaps:"資料缺口",marketRegime:"市場週期",enum_euphoric:"亢奮",enum_late_optimism:"晚期樂觀",enum_mid_cycle:"中期",enum_cautious_recovery:"謹慎復甦",enum_despondent:"絕望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精選",enum_balanced:"均衡",enum_constructive:"偏建設",enum_aggressive:"積極",enum_stabilize_first:"先求穩",enum_risk_off:"偏防守",enum_risk_on:"偏進攻",enum_neutral:"中性",logicTitle:"選股邏輯",logicSubtitle:"政權→篩選→策略→降權→理由→部位：可稽核的數學流程",logicNoRegime:"尚無市場週期資料（待下次掃描寫入）。",logicStep1:"市場週期（Regime）",logicStep1Lead:"先定美／台獨立姿態，再篩個股。Kostolany 心理相位 × Marks 溫度 × 利率流動性。",logicStep1Caption:"相位 → 篩選姿態 → 部位乘數（STANCE_SIZE_MULT）",logicRatesR2:"R2：美債 ^TNX 20 日上升 ≥ +0.25pp → 流動性偏防禦（即使價趨勢仍中性）。",logicRatesR3:"R3：60 日殖利率下降 ≤ −0.25pp → 允許較積極姿態（非亢奮）。",logicRatesSeparate:"硬規則：dial_US 與 dial_TW 分開；不混成「全球心情」。",logicStep2:"數學篩選（A／B）",logicStep2Lead:"相對強度、動能、SMA、量比；門檻依週期姿態調整。",logicScreenA:"篩選 A · 動能／相對強度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日漲≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或雙均線且 5日≥0／RS≥0。",logicScreenASelective:"精選：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量視為可過）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"積極／偏建設：放寬 RS／日／5日／1月；允許 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建設另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求穩：須站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌後先穩定）。",logicScreenB:"篩選 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。門檻：防守 ≥1.0；積極 ≥1.1；其餘 ≥1.2。",logicScreenBMom:"補標 A：若未過 A，但 1月≥8% 且 SMA20＋SMA50（非先求穩）→ 仍標 A。",logicScore:"排序分數",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加權（上限約 8×0.6）；量比<0.4 −0.5；再依市場週期調整分數。",logicStep3:"XQ 策略選股",logicXqLead:"與每日名單並行：條件式命中（價量／籌碼／財務／大師／週期）。缺公開欄位則略過該條件，不捏造。",logicXqPriceVol:"價量：均線多頭、超短線作多等（OHLCV 實算）。",logicXqFlow:"籌碼：法人同步等（公開張數門檻）。",logicXqFund:"財務：獲利遞增、PE／營益率等公開財報欄。",logicXqMasters:"大師：林區／葛拉罕／巴菲特等可計算代理條件。",logicXqCycle:"週期：科斯托拉尼／市場週期包（依當日美台姿態）。",logicOpenStrategies:"開啟策略頁",logicStep4:"排序降權／加權",logicStep4Lead:"scoreAdjust：依姿態對高 RS 縮量、firm-hands、恐慌穩定做加減分。",logicDemoteHot:"防守／精選：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日漲>2% → −1.2；缺雙均線 −1.5。",logicDemoteThin:"K5：高相對強度但量能不足 → 降權／排除積極桶。",logicPromoteFirm:"aggressive／constructive：價弱量增且 SMA200（firm-hands）→ +2.2；早段放量上漲 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；站上 SMA20 才 +1.5。",logicListSize:"名單長度：防守 ≈0.55×；精選 ≈0.75×；先求穩 ≈0.45×；積極 +2（上限14）；基準 12。",logicStep5:"「為什麼」如何組成",logicStep5Lead:"why 欄為可讀摘要，非模型黑箱——由當日可驗證欄位串接。",logicWhyRs:"日漲跌 + 相對指數（美：S&P；台：加權）pp。",logicWhyMom:"五日%、約一個月%。",logicWhyVol:"量比≥1.2 才寫入量能句。",logicWhySma:"SMA20／50／200 站上狀態（雙均線優先）。",logicWhyRegime:"附加週期備註或姿態／心理相位標籤。",logicStep6:"紙上部位紀律",logicStep6Lead:"模擬帳驗證流程；非實單。部位受週期部位乘數與固定風險公式約束。",logicPaperCapital:"本金：台股 NT$3,000,000（整張）；美股 US$100,000（1 股起）。",logicPaperBuy:"買：名單（純 observe 盡量不買）；風險＝權益×1%；停距≈價×1.5%（量比≥3→2.5%）；單檔≤權益 8%。",logicPaperSizeMult:"部位乘數（0.3–1.35×）標示當日建議積極度；與名單長度連動。",logicPaperSell:"賣：停損 −3%；停利 +12% 半倉；破 SMA20 且日跌>2%；離名單且虧損；漲停風格隔日 −5%。",logicOpenPaper:"開啟模擬頁",logicFootnote:"框架合成僅供透明篩選說明，非投資建議。公開作者方法之可編碼代理；不重製受著作權保護之原文。",sma20:"SMA20",sma50:"SMA50",screenA:"A",screenB:"B",screenC:"C",condPass:"條件",condFail:"未過",condSkip:"略過",pe:"本益比",opMargin:"營益率",grossMargin:"毛利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自營商",maBull:"均線多頭",rsi:"RSI",amplitude:"振幅",zhang:"張",limitUp:"漲停",momentum:"動能",metricPrice:"價格",metricDayPct:"日漲跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(張)",metricDebt:"負債比%",metricDirector:"董監持股%",metricOpQ:"近季營益率%",metricSource:"來源",foreign1d:"外資1日(張)",trust1d:"投信1日(張)",dealer1d:"自營商1日(張)",foreign5d:"外資5日(張)",trust5d:"投信5日(張)",dealer5d:"自營5日(張)"},Ms={...wt,siteTitle:"Daily Quant Picks",loading:"Loading…",disclaimer:"Investing involves risk. For reference only — not investment advice.",footer:"Investing involves risk. For reference only — not investment advice.",dataAsOf:"As of",taipei:" (Taipei)",navMain:"Main navigation",navToday:"Today",navStrategies:"Strategies",navPaper:"Paper",navMore:"More",navMoreClose:"Close",navLogic:"Logic",researchTitle:"Research",navResearch:"Research",navOptions:"Options",navEarnings:"Earnings",earningsTitle:"Earnings",earningsLead:"US Magnificent 7 and high-attention earnings: what the company does, key numbers, what to watch next — plain language, daily refresh. Not investment advice.",earningsDisclaimer:"Not investment advice. Figures from public Yahoo Finance; missing fields show as data unavailable — not personalized advice.",earningsUsFocus:"US-focused",earningsTwStub:"Taiwan earnings coming later (stub)",earningsSelectionTitle:"Watchlist rule:",earningsSelectionFallback:"Largest non-Mag7 mega-caps with earnings in the next 14 days; or Yahoo most-actives; fill with calendar highlights within 45 days.",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL, MSFT, NVDA, AMZN, GOOGL/GOOG, META, TSLA — last report and next date when known.",earningsMag7Badge:"Mag7",earningsHotTitle:"High-attention earnings",earningsHotLead:"Picked by the rule above; badges explain why.",earningsHotEmpty:"No names match the current window (or data unavailable)",earningsWhatItDoes:"What they do",earningsWhatToWatch:"What to watch next",earningsNextDate:"Next report",earningsLastEps:"Last EPS",earningsRevYoy:"Revenue YoY",earningsEpsYoy:"Earnings YoY",earningsPe:"P/E",earningsForwardPe:"Forward P/E",earningsEstimate:"est.",earningsDataMissing:"Data unavailable",earningsTagPrimary:"14d · mega-cap",earningsTagActives:"Most actives · 14d",earningsTagRecent:"Recently reported",earningsTagFallback:"45d calendar highlight",earningsTagOther:"Watch",earningsPartialBlocker:"Partial data blocked",earningsRefreshHow:"Data updates with the site; try again shortly if something looks off.",earningsLoadError:"Could not load earnings digest ({msg})",earningsEmpty:"Earnings digest is being prepared. Check back shortly.",navLookup:"Lookup",lookupTitle:"Stock lookup",lookupLead:"Type a US or Taiwan ticker for company info, quote, earnings highlights, and official filings links — plain language; quotes from Yahoo, filings via SEC / MOPS. Not investment advice.",lookupDisclaimer:"Not investment advice. Quotes from public Yahoo Finance; official filing links go to SEC EDGAR / MOPS. Missing fields omitted, never invented. Live fetch may be limited by network or source.",lookupInputLabel:"Ticker",lookupPlaceholderUs:"e.g. AAPL",lookupPlaceholderTw:"e.g. 2330 or 2330.TW",lookupHintUs:"US: tickers like AAPL, MSFT, NVDA",lookupHintTw:"Taiwan: 4-digit codes like 2330 (.TW added; try .TWO for OTC)",lookupSearch:"Search",lookupIdle:"Enter a ticker and search to see quote and earnings highlights.",lookupLoading:"Fetching from Yahoo Finance…",lookupEmptyInput:"Please enter a ticker",lookupInvalid:"Unrecognized ticker. US e.g. AAPL; Taiwan e.g. 2330 or 2330.TW",lookupNotFound:"No quote for this ticker. Check US/TW tab and the symbol.",lookupError:"Lookup failed ({msg})",lookupBusiness:"What they do",lookupQuoteStats:"Quote & key stats",lookupFinancials:"Financials snapshot",lookupEarnings:"Earnings highlights",lookupPrevClose:"Prev close",lookupVolume:"Volume",lookupDayRange:"Day range",lookup52w:"52-week range",lookupMarketCap:"Market cap",lookupEps:"EPS (ttm)",lookupBeta:"Beta",lookupDivYield:"Div yield",lookupRevenue:"Revenue",lookupGrossMargin:"Gross margin",lookupProfitMargin:"Profit margin",lookupEpsConsensus:"EPS estimate",lookupEpsSurprise:"EPS surprise",lookupSources:"Sources",lookupPartial:"Some advanced fields unavailable (showing only fetched numbers).",lookupOfficialFilings:"Official filings",lookupOfficialFilingsLead:"Links to official filings and disclosures. For US names, recent 10-K / 10-Q / 8-K appear when publicly fetchable. No invented figures.",lookupSourceOfficial:"Official",lookupSourceQuote:"Quote source",lookupSourceCompany:"Company site",lookupSecEdgarSearch:"SEC EDGAR company filings search",lookupSecEdgarBrowse:"SEC EDGAR company browse page",lookupSecFormsFilter:"SEC 10-K / 10-Q filter",lookupMopsFinancialBook:"MOPS · Financial reports",lookupMopsFinancialQuery:"MOPS · Financial report query",lookupMopsCompany:"MOPS · Company profile",lookupMopsMaterial:"MOPS · Material information",lookupTwseIsin:"TWSE ISIN / basic search",lookupTpexCompany:"TPEx · Company page",lookupYahooTwQuote:"Yahoo Taiwan quote (market data, not official filings)",lookupCompanyWebsite:"Company website",lookupInvestorRelations:"Investor relations (public)",lookupRecentFilings:"Recent official filings",lookupFilingForm:"Form",lookupFilingDate:"Filed",lookupFilingDoc:"Document",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"Recent filings list could not be loaded (network or source limits).",lookupFilingsListEmpty:"No recent 10-K / 10-Q / 8-K to list right now.",lookupFilingsLinksStillWork:"Official links above still work.",lookupFilingsTwNote:"For Taiwan names, use MOPS as the official filings portal; quote links below are secondary.",lookupFilingsCikUnavailable:"Could not resolve SEC CIK yet; use EDGAR search by ticker above.",navSoxl:"SOXL",soxlTitle:"SOXL Semiconductor Desk",soxlLead:"Direxion Daily Semiconductor Bull 3X ETF: latest quote, events/anomalies, related news, and SEC N-PORT holdings with estimated contributions — plain language. Not investment advice.",soxlDisclaimer:"Not investment advice. SOXL seeks ~3× daily index performance and is extremely volatile; holdings weights are from SEC N-PORT (not same-day); contributions are estimates.",soxlHeroLabel:"SOXL latest quote",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"Regular close",soxlLeverageNote:"SOXL targets about 3× the ICE Semiconductor Index for a single day; overnight and multi-day results are not a simple 3×.",soxlHoldingsAsOf:"Holdings weights as of",soxlHoldingsNotSameDay:"latest N-PORT, not same-day",soxlEventsTitle:"Events / anomalies",soxlNewsTitle:"Related news",soxlNewsEmpty:"No related news yet.",soxlHoldingsTitle:"Holdings & estimated contribution",soxlHoldingsLead:"Weights from SEC N-PORT; cash and index swaps often dominate. Contribution ≈ weight × return (labeled estimate; not equal to 3× ETF points).",soxlHoldingsEmpty:"Holdings are being prepared. Check back shortly.",soxlColName:"Name",soxlColWeight:"Weight",soxlColReturn:"Return",soxlColContrib:"Est. contrib.",soxlColReasons:"Why it moved",soxlContributionHint:"Estimate = weight% × return% ÷ 100 (basket percentage points; SOXL is ~3× daily — not ETF points)",soxlSourceN:"Source {n}",soxlOverallTitle:"Why SOXL rises vs falls",soxlWhyUp:"What tends to lift it",soxlWhyDown:"What tends to weigh on it",soxlRefreshHow:"Data updates with the site; try again shortly if something looks off.",soxlLoadError:"Could not load SOXL desk ({msg})",navTxf:"TX Futures",txfTitle:"Taiwan Index Futures",txfLead:"TAIEX spot vs TX futures: near/next month quotes, basis, volume & open interest, institutional positioning, margins and expiry — all from public TAIFEX/TWSE data. Plain language. Not investment advice.",txfDisclaimer:"Investing involves risk. For reference only — not investment advice. US and TW futures stay separate; missing fields are never invented.",txfHeroLabel:"TX near-month quote",txfNearBadge:"Near",txfNextBadge:"Next",txfSettle:"Settle",txfVolume:"Volume",txfOI:"Open interest",txfSessionDate:"Session date",txfSpotLabel:"TAIEX spot",txfBasisLabel:"Basis",txfBasisHint:"Basis = near futures − spot; positive means futures premium to spot.",txfMultiplierShort:"TX multiplier NT${n}/pt (paper P&L = points × multiplier × contracts)",txfContractsTitle:"Contracts: TX / MTX / TMF",txfContractsLead:"Regular session. Monthly last trading day follows the official third-Wednesday rule; holiday shifts follow TAIFEX notices.",txfMultLabel:"Multiplier",txfPerPoint:"/pt",txfMarginInitial:"Initial margin",txfMarginMaint:"Maintenance",txfColMonth:"Month",txfColLast:"Last",txfColSettle:"Settle",txfColChange:"Change",txfColVolume:"Volume",txfColOI:"OI",txfColLTD:"Last trade day",txfInstTitle:"Institutional futures positioning",txfInstLead:"Long/short open interest and day net volume (TAIFEX, as of {date})",txfInstFoot:"Figures are aggregates across many firms — not one institution's strategy.",txfColParty:"Party",txfColLongOI:"Long OI",txfColShortOI:"Short OI",txfColNetOI:"Net OI",txfColNetVol:"Net volume",txfCalendarTitle:"Settlement / options aggregate",txfNextLTD:"Near-month last trading day",txfNearMonth:"Near",txfNextMonth:"Next",txfLTDRule:"Monthly last trading day = third Wednesday of the delivery month.",txfRecentSettle:"Recent final settlement",txfPcrTitle:"TXO put/call",txfPcrVol:"Volume ratio",txfPcrOI:"OI ratio",txfExplainTitle:"Plain-language notes",txfExplain1:"TX is a cash-settled futures on the TAIEX. MTX and TMF are smaller contract sizes for finer sizing.",txfExplain2:"Basis = futures − spot. A premium (positive basis) means futures trade above spot; it usually converges toward expiry.",txfExplain3:"Open interest is outstanding contracts — a size of open risk, not by itself the reason prices moved today.",txfExplain4:"Paper P&L ≈ points change × multiplier × contracts (TX NT$200, MTX NT$50, TMF NT$10 per point). Use official margins.",txfSourcesTitle:"Sources",txfLoadError:"Could not load TX futures desk ({msg})",navPodcasts:"Celebrity podcasts",podcastsTitle:"Celebrity podcasts",podcastsLead:"Notable investor and host frameworks from public interviews and podcasts: scannable theses, US/TW separation, candidate status labeled — not investment advice.",podcastsDisclaimer:"Not investment advice. Drawn from public interviews and existing research-library entries; figures cite sources. Math-gate-closed items stay candidate / watch only.",podcastsFeatured:"Featured",podcastsStubBadge:"Candidate stub",podcastsGodzillaHandle:"Godzilla · @godzilla.us",podcastsGooayeTitle:"Gooaye (Hsieh Meng-kung)",podcastsGooayeLead:"Taiwan markets / macro / risk / retail psychology podcast; per-episode key points from public RSS show notes (not transcripts; not investment advice).",podcastsGooayeMarket:"TW-focused · US/TW separate",podcastsGooayeStubNote:"Lightweight stub: full entry and computable packs live in Research. No invented episode quotes here.",podcastsGooayePoint1:"Risk and sizing first, ticker stories second",podcastsGooayePoint2:"Treat the semiconductor chain as a basket — not one hero name",podcastsGooayePoint3:"US: rate path as risk-on proxy; TW scored separately",podcastsGotoResearch:"Open full entry in Research",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"Categories",podcastsCategories:"Celebrity podcast categories",podcastsMenuLead:"Pick a category first — long essays stay off the landing page.",podcastsOpenCategory:"Open category",gooayeLibraryBadge:"Episode library",gooayeDisclaimer:'Candidate / watch; math gate closed. "Listened" = stock analysis after public audio download + speech-to-text. "Show notes only" = RSS teasers, not listened. Host views; not investment advice.',gooayeLoading:"Loading Gooaye episodes…",gooayeLoadError:"Could not load episode library ({msg})",gooayeEpisodeCount:"{n} episodes (public RSS)",gooayeAsOf:"As of {date} (Taipei)",gooayeEmptyCount:"{n} episode(s) lack usable public text (title listed only)",gooayeSearchLabel:"Search episodes",gooayeSearchPlaceholder:"Title, episode no., or keyword",gooayeSourceLine:"Source:",gooayeKeyPoints:"Key points",gooayeNotesThin:"Public show notes are essentially title-only; nothing further to summarize.",gooayeTeaserNote:"Public show notes are thin (often a short hook plus ads). Above is only usable public text — no audio listen, nothing invented.",gooayeListen:"Listen (SoundOn)",gooayeLoadMore:"Show {n} more ({left} left)",gooayeShowingAll:"Showing all {n} episodes",gooayeNoResults:"No matching episodes.",gooayeUntitled:"Untitled episode",gooayeBadgeListened:"Listened",gooayeBadgeRssOnly:"Show notes only",gooayeStockAnalysis:"Stock analysis (listened)",gooayeRssTeaserToggle:"Public show notes (RSS)",gooayeListenedAt:"Listened {date} (Taipei)",gooayeListenedCount:"{n} listened",gooayeRssOnlyNote:"Audio not reviewed yet; above is public RSS / show notes only — not listened analysis.",podcastsXiaojunTitle:"Zhang Xiaojun jùn — Business Interviews",podcastsXiaojunHandle:"Zhang Xiaojun · long-form business / tech interviews",podcastsXiaojunLead:"Long-form interviews with China tech and business figures. Catalog from the public RSS. Episodes marked Listened add stock/industry notes (candidate/watch; not advice).",podcastsXiaojunMarket:"China tech focus · cross-market watch",podcastsXiaojunApple:"Listen on Apple Podcasts",xiaojunLibraryBadge:"Episode library",xiaojunDisclaimer:"Candidate/watch; math gate closed. Listened: public audio + speech-to-text, then stock/industry notes. Show notes only: RSS text, not listened. Host views; not investment advice.",xiaojunLoading:"Loading Xiaojun episode library…",xiaojunLoadError:"Could not load episode library ({msg})",xiaojunEpisodeCount:"{n} episodes (public RSS)",xiaojunAsOf:"As of {date} (Taipei)",xiaojunEmptyCount:"{n} episodes have little public text (title only)",xiaojunSearchLabel:"Search episodes",xiaojunSearchPlaceholder:"Title, number, or keyword",xiaojunSourceLine:"Source:",xiaojunKeyPoints:"Key points",xiaojunNotesThin:"Public show notes are mostly a title/short phrase.",xiaojunTeaserNote:"Public RSS / show notes only — audio not reviewed; nothing invented.",xiaojunListen:"Listen on Apple Podcasts",xiaojunLoadMore:"Show {n} more ({left} left)",xiaojunShowingAll:"Showing all {n} episodes",xiaojunNoResults:"No matching episodes.",xiaojunUntitled:"Untitled episode",xiaojunBadgeListened:"Listened",xiaojunBadgeRssOnly:"Show notes only",xiaojunStockAnalysis:"Stock / industry notes (listened)",xiaojunRssTeaserToggle:"Public show notes (RSS)",xiaojunListenedAt:"Listened {date} (Taipei)",xiaojunListenedCount:"{n} listened",xiaojunRssOnlyNote:"Audio not reviewed; above is public RSS / show notes only.",podcastsWhynottvTitle:"WhynotTV Podcast",podcastsWhynottvHandle:"Tairan He · AI / robotics long-form",podcastsWhynottvLead:"Long-form AI, robotics, and research-startup interviews. Catalog from the public Anchor RSS. Listened episodes add industry notes (candidate/watch; not advice).",podcastsWhynottvMarket:"AI / robotics & research startups · cross-market watch",podcastsWhynottvApple:"Listen on Apple Podcasts",whynottvLibraryBadge:"Episode library",whynottvDisclaimer:"Candidate/watch; math gate closed. Listened: public audio + speech-to-text, then industry notes. Show notes only: RSS text, not listened. Host views; not investment advice.",whynottvLoading:"Loading WhynotTV episode library…",whynottvLoadError:"Could not load episode library ({msg})",whynottvEpisodeCount:"{n} episodes (public RSS)",whynottvAsOf:"As of {date} (Taipei)",whynottvEmptyCount:"{n} episodes have little public text (title only)",whynottvSearchLabel:"Search episodes",whynottvSearchPlaceholder:"Title, number, or keyword",whynottvSourceLine:"Source:",whynottvKeyPoints:"Key points",whynottvNotesThin:"Public show notes are mostly a title/short phrase.",whynottvTeaserNote:"Public RSS / show notes only — audio not reviewed; nothing invented.",whynottvListen:"Listen on Apple Podcasts",whynottvLoadMore:"Show {n} more ({left} left)",whynottvShowingAll:"Showing all {n} episodes",whynottvNoResults:"No matching episodes.",whynottvUntitled:"Untitled episode",whynottvBadgeListened:"Listened",whynottvBadgeRssOnly:"Show notes only",whynottvStockAnalysis:"Stock / industry notes (listened)",whynottvRssTeaserToggle:"Public show notes (RSS)",whynottvListenedAt:"Listened {date} (Taipei)",whynottvListenedCount:"{n} listened",whynottvRssOnlyNote:"Audio not reviewed; above is public RSS / show notes only.",podcastsZhangJunanTitle:"Zhang Junan",podcastsZhangJunanHandle:"et220870 · Blogspot / PTT",podcastsZhangJunanLead:"Public blog and PTT posts: performance reviews, trading discipline, broker/mortgage logistics, early trade logs. “Analyzed” means full public text was read; “Title only” means the body is unavailable. Candidate/watch — not advice.",podcastsZhangJunanMarket:"TW equities / trading practice · personal review",zhangJunanLibraryBadge:"Library",zhangJunanDisclaimer:"Candidate/watch; math gate closed. “Analyzed”: read public blog/PTT text (+ comments) then wrote market notes. “Title only”: public body missing/deleted. Author’s views; not advice. Not added to pick lists.",zhangJunanLoading:"Loading Zhang Junan library…",zhangJunanLoadError:"Could not load library ({msg})",zhangJunanPostCount:"{n} posts (public lists)",zhangJunanAsOf:"As of {date} (Taipei)",zhangJunanAnalyzedCount:"{n} analyzed",zhangJunanTitleOnlyCount:"{n} title-only (body unavailable)",zhangJunanSearchLabel:"Search posts",zhangJunanSearchPlaceholder:"Title, board, or keyword",zhangJunanSourceLine:"Sources:",zhangJunanKeyPoints:"Notes",zhangJunanStockAnalysis:"Market notes (analyzed)",zhangJunanNotesThin:"Little public text; title and link only.",zhangJunanTitleOnlyNote:"Public body deleted or unreadable; nothing invented.",zhangJunanOpenBlog:"Open original (blog)",zhangJunanOpenPtt:"Open original (PTT)",zhangJunanLoadMore:"Show {n} more ({left} left)",zhangJunanShowingAll:"Showing all {n} posts",zhangJunanNoResults:"No matching posts.",zhangJunanUntitled:"Untitled post",zhangJunanBadgeAnalyzed:"Analyzed",zhangJunanBadgeTitleOnly:"Title only",zhangJunanSourceBlog:"Blog",zhangJunanSourcePtt:"PTT",zhangJunanCommentSummary:"Comment takeaway",zhangJunanFilterAll:"All",zhangJunanFilterBlog:"Blog",zhangJunanFilterPtt:"PTT",zhangJunanFilterSeriesAll:"All subcategories",zhangJunanSourceFilters:"Source filters",zhangJunanSeriesFilters:"Subcategory filters",researchCatMenu:"Categories",researchCategories:"Research categories",researchMenuLead:"Pick type, market, or status first, then browse that shelf.",researchOpenCategory:"Open category",researchCatBooks:"Books",researchCatPapers:"Papers",researchCatPodcasts:"Podcasts",researchCatUs:"US focus",researchCatTw:"TW focus",researchCatCandidate:"Candidate",researchCatWatch:"Watch",researchBackMenu:"Back to categories",researchStatusFilters:"Status",godzillaTitle:"Godzilla",godzillaLead:"US-focused notes from Threads interviewee「哥吉拉」: time & health, RSU redeploy, fundamentals, circle of competence, tax pacing, options as tools — plain cards. Not investment advice.",godzillaDisclaimer:"Not investment advice. From a public interview; figures labeled interviewee self-report. Math gate closed — candidate / watch only.",godzillaHeroLabel:"Godzilla framework overview",godzillaKicker:"Candidate framework · US-focused",godzillaTagline:"Trade healthy years for freedom; long stock as core, options as satellite; tax sets rotation pace.",godzillaBadgeCandidate:"Candidate",godzillaBadgeWatch:"Watch",godzillaUsFocus:"US-focused",godzillaSelfReport:"Interviewee self-report",godzillaListenedBadge:"Listened",godzillaStockTitle:"Stock analysis (listened)",godzillaStockLead:"Host/interviewee views from public YouTube audio + speech-to-text (candidate/watch; not advice).",godzillaStock1:"Time and health beat stacking more cash/RSU; money cannot buy time back; retirement targets rise as RSU accrues.",godzillaStock2:"US tech pay is RSU-heavy; rising stock lifts total comp and also single-name concentration risk.",godzillaStock3:"Timing (self-report): early Tesla worked (wishes earlier trim); Meta entered near a softer tape.",godzillaStock4:"Next watch: B2C AI apps. Visible cases cited: Tesla FSD, Palantir; much of AI still B2B. Hardware spend still growing.",godzillaStock5:"Even on NVIDIA, avoid all-in one ticker; US W2/tax planning matters when salary+stock cluster.",godzillaStock6:"TW has no capital-gains tax vs US taxation — liquidity differs; do not copy US playbooks blindly.",godzillaStockNote:"STT: faster-whisper small int8. Public YT source; figures are interviewee views; candidate/watch.",godzillaSourceLabel:"Source",godzillaSourceCite:"Terry × Godzilla",godzillaYoutube:"Watch YouTube interview",godzillaThesesTitle:"Core theses",godzillaThesesLead:"Ten scannable points; details are interviewee self-report.",godzillaThesis1Title:"Time & health over stacking more RSU",godzillaThesis1Body:"Retirement targets inflate (e.g. self-report $30M→$60M USD plus housing/kids); stopping often comes when the body fails. Using healthy 40s for travel/freedom differs from 50–60.",godzillaThesis2Title:"US RSU changes incentives",godzillaThesis2Body:"Four-year vest builds skin in the game vs TW cash bonuses that rarely buy the employer’s stock.",godzillaThesis3Title:"Sell vested RSU same day; redeploy",godzillaThesis3Body:"Sell vested RSU the same day and redeploy to a conviction name (his: NVDA) so salary + unvested aren’t one basket.",godzillaThesis4Title:"Fundamentals only",godzillaThesis4Body:"Revenue/EPS trend; ignore Wall Street targets; news noise mostly hurts.",godzillaThesis5Title:"Circle of competence: hardware/tech",godzillaThesis5Body:"Hardware/tech — NVDA largest; also PLTR, AVGO, TSM; little outside tech. Index sleeve small now; end-state mostly index.",godzillaThesis6Title:"Tax sets the pace",godzillaThesis6Body:"High W2 → heavy capital gains; after leaving the job, multi-year rotate singles → index within acceptable tax; covered calls buffer crashes.",godzillaThesis7Title:"Options as a tool",godzillaThesis7Body:"Mostly seller (CC / CSP); small long calls/LEAPs only in panic or price vs fundamentals divergence; accept total loss of premium; never naked.",godzillaThesis8Title:"Covered call: roll if assignment risk",godzillaThesis8Body:"If assigned risk, roll out in time; don’t exercise/sell core for tiny premium; sell fewer contracts if uncomfortable.",godzillaThesis9Title:"Wait for trend to enter",godzillaThesis9Body:"Wait for 1–2 clean earnings even if cost basis rises; keep buying good firms with spare cash; don’t chase hot tips.",godzillaThesis10Title:"US vs TW observation",godzillaThesis10Body:"US CG tax → hold longer; TW no CG + stamp tax → higher turnover / speculative culture (observation only).",godzillaChecklistTitle:"Method checklist",godzillaChecklistLead:"Self-checks, not an order ticket.",godzillaCheck1:"Low material desire; don’t let the “enough” number keep rising forever.",godzillaCheck2:"Long stock as core; options as satellite / hedge / occasional leverage.",godzillaCheck3:"Position size: no borrowing; if you can’t accept zero, don’t trade options.",godzillaCheck4:"Prefer liquid mega-caps for options.",godzillaCheck5:"End allocation sketch: ~80% broad index, small sleeve for industry (+ occasional small call).",godzillaCheck6:"PLTR example: B2B monetization via forward-deployed engineers; trim if commercial growth disappoints.",godzillaOptionsTitle:"Options usage",godzillaOptionsLead:"Seller-first; longs rare and only on extreme dislocation.",godzillaOpt1:"Core: covered calls and cash-secured puts.",godzillaOpt2:"Small long calls / LEAPs: panic or price vs fundamentals gap.",godzillaOpt3:"Premium can go to zero; never naked.",godzillaOpt4:"Assignment risk: roll out in time; don’t sell core for tiny premium.",godzillaRsuTitle:"RSU, tax & rotation",godzillaRsuLead:"Incentives, diversification, and post-job tax pacing.",godzillaRsu1:"Sell vested RSU same day; redeploy to conviction (e.g. NVDA).",godzillaRsu2:"While employed, avoid large realized gains; after leaving, multi-year singles → index.",godzillaRsu3:"Covered calls as crash buffer — not a directional bet.",godzillaTwTitle:"Taiwan market note",godzillaTwLead:"Separated from the US framework; tax/culture observation only.",godzillaTwBody:"US capital-gains tax encourages longer holds; TW has no CG tax plus stamp tax, so turnover and short-term culture run hotter. This page stays US-focused; TW is contrast only and not wired into the screener.",godzillaGateNote:"Not in the formal screener",godzillaGateDetail:"Status: candidate / strategyCandidate=watch. Math gate CLOSED — not wired into the live screener or paper trading; read-only.",jensenTitle:"Jensen Huang (黃仁勳)",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Notes from a Stanford STVP / Entrepreneurial Thought Leaders talk: perspective, demand & Moore’s law, culture, cash reality, reinvention — candidate / watch. Not investment advice.",jensenDisclaimer:"Not investment advice. From a public Stanford Online talk (~2009; YouTube upload 2011). Themes are speaker self-report. Math gate closed — candidate / watch only.",jensenHeroLabel:"Jensen Huang talk highlights",jensenKicker:"Candidate talk · US tech / semiconductors / company-building",jensenTagline:"Perspective over vague “vision”; culture and reinvention sustain long-horizon company-building.",jensenUsFocus:"US tech-focused",jensenTalkBadge:"Public talk",jensenListenedBadge:"Listened",jensenStockTitle:"Business / stock notes (listened)",jensenStockLead:"From public Stanford ETL talk audio + STT (~2009; historical views, not today's filings). Candidate/watch; not advice.",jensenStock1:"Founding bet (1993): PC + 3D/games as a large market; VCs/parents then doubted starting a company 'for games.'",jensenStock2:"Competition: dozens–hundreds entered consumer 3D; NVIDIA recalls ending as the surviving computer-graphics company — perspective on why the business works (semiconductors / Moore's Law as competition) plus reinvention, not execution alone.",jensenStock3:"Programmable shaders: cannibalized a successful fixed-function franchise; first chip nearly killed the firm, but not doing it would die at Moore's Law speed.",jensenStock4:"Capital allocation: rivals set price; CEO chooses engagement. Weigh scarce resources vs demand and opportunity cost, not just accounting cost.",jensenStock5:"Culture: innovation needs tolerance for calculated failure; a startup is nearly always out of business. General-purpose GPUs (Swiss-army risk) can extend the medium's life.",jensenStock6:"Time stamp: historical talk (pre modern AI-training boom) — do not map 1:1 onto today's datacenter P&Ls. NVIDIA is the speaker's firm; candidate/watch.",jensenStockNote:"STT: faster-whisper small int8 (en). Source YT Xn1EsFe7snQ / Stanford ETL. Historical views.",jensenMeta:"Stanford Online · STVP ETL · ~1:03:38 · uploaded 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"Watch on YouTube",jensenOpenYoutube:"Open full video on YouTube",jensenEmbedTitle:"Jen-Hsun Huang: Stanford student and Entrepreneur (Stanford Online)",jensenEcorner:"Stanford eCorner / STVP related clips",jensenHighlightsTitle:"Talk highlights (plain language)",jensenHighlightsLead:"Five scannable themes drawn only from the public talk — not a transcript.",jensenH1Title:"Perspective, not vague “vision”",jensenH1Body:"Everyone has a perspective. NVIDIA’s early bet: PCs plus cheap 3D would unlock games (later also Keyhole → Google Earth) when the market looked near-zero to many VCs.",jensenH2Title:"Insatiable demand and Moore’s law",jensenH2Body:"Sometimes ignore customers early when they can’t yet price a new category; rinse-and-repeat, then reinvent before “good enough” kills the medium (fixed-function → programmable shaders / GeForce FX near-death, CG language).",jensenH3Title:"Culture: calculated risk-taking",jensenH3Body:"Innovation needs calculated risk, tolerance for failure that fails fast, intellectual honesty, and willingness to change course; passion and purpose over selling-the-company motives.",jensenH4Title:"Cash and startup reality",jensenH4Body:"Always raising, saving, or making money; startups are nearly always near bankruptcy. VCs bet people and a large enough market more than perfect business plans.",jensenH5Title:"Reinvention: tear down success",jensenH5Body:"Every success must eventually be torn down and rebuilt; Huang frames long-horizon company-building, not serial flip exits.",jensenTwTitle:"US / TW separation (context only)",jensenTwLead:"Market focus is US tech / semiconductor company-building; Taiwan appears only as supply-chain context — no invented TW stock picks.",jensenTwBody:"NVDA as a US semiconductor / compute platform sits in a supply chain tightly linked to Taiwan foundry and OSAT ecosystems — industry context only; no TW ticker list and not wired into the screener.",jensenGateNote:"Not in the formal screener",jensenGateDetail:"Status: candidate / strategyCandidate=watch. Math gate CLOSED — not wired into the live screener or paper trading; read-only.",jensenWatchCta:"Watch on YouTube",jensenEmbedBlockedNote:"This talk opens on YouTube — the owner has disabled embedding on other sites.",optionsTitle:"US Options",optionsLead:"McMillan-style strategy families first: volatility + risk shape, then public Yahoo chains for learning — not investment advice.",optionsDisclaimer:"Not investment advice; options involve high risk. Educational public-data screens only — not personalized orders.",optionsBookBadge:"This book",optionsBookCite:"Primary reference",optionsBookLead:"Lawrence G. McMillan Options Strategies Handbook (5th Chinese ed.): map outlook + volatility to strategy families (original summary, not verbatim).",optionsBookFallbackTitle:"McMillan Options Strategies Handbook",optionsGotoResearch:"Open full entry in Research",optionsUsOnly:"US only",optionsQualityTitle:"Light underlying quality check",optionsQualityLead:"Secondary filter: PE, PB, debt, ROE, revenue/earnings trend. Missing fields omitted — not stock tips.",optionsViewTitle:"Options view (McMillan)",optionsViewLead:"Public chain: ATM IV, historical vol, volume skew; strategy families are educational.",optionsMcmillanFirst:"Align volatility regime and risk shape before picking a family — do not force a view.",optionsPe:"P/E",optionsPb:"P/B",optionsDebt:"Debt/Equity",optionsRoe:"ROE",optionsRevTrend:"Revenue trend",optionsEarnTrend:"Earnings trend",optionsGate:"Quality gate",optionsGatePass:"Pass",optionsGateWatch:"Watch",optionsGateFail:"Weak",optionsGateIncomplete:"Incomplete",optionsDataMissing:"Data unavailable",optionsForwardPe:"fwd P/E",optionsTrendUp:"Up ~{pct}%",optionsTrendDown:"Down ~{pct}%",optionsTrendFlat:"Flat ~{pct}%",optionsAtmIv:"ATM implied vol",optionsHv:"Historical vol (~1m)",optionsIvHv:"IV / HV",optionsVolRegime:"Vol regime",optionsRegimeIvRich:"IV rich",optionsRegimeIvCheap:"IV cheap",optionsRegimeIvFair:"Roughly fair",optionsRegimeIvOnly:"IV only",optionsCallPutVol:"Call / put volume",optionsAtmStrike:"Near ATM strike",optionsExpiry:"Expiry",optionsSkewPutHeavy:"Put volume heavier",optionsSkewCallHeavy:"Call volume heavier",optionsSkewBalanced:"Volumes roughly balanced",optionsEduSetups:"Strategy families (edu)",optionsEduSetupsLead:"Pick a family from outlook + vol regime; green cards often match current IV/HV (still not advice).",optionsSetupCoveredCall:"Covered call",optionsSetupCoveredCallBody:"Own shares and sell a call for premium; upside is capped at the strike.",optionsSetupCoveredCallWarn:"Profit ceiling; share downside remains.",optionsSetupProtectivePut:"Protective put",optionsSetupProtectivePutBody:"Own shares and buy a put as insurance: downside floor, but you pay a premium.",optionsSetupProtectivePutWarn:"Insurance cost reduces returns; richer IV makes it costlier.",optionsSetupVertical:"Vertical spread",optionsSetupVerticalBody:"Same expiry, different strikes — boxes max gain/loss into a known range.",optionsSetupVerticalWarn:"Wrong direction still loses; loss is capped.",optionsSetupCalendar:"Calendar / diagonal",optionsSetupCalendarBody:"Different expiries to express time decay or vol-change views.",optionsSetupCalendarWarn:"Sensitive to vol and time; shape shifts as spot moves.",optionsSetupStraddle:"Straddle / strangle",optionsSetupStraddleBody:"Long or short both sides to bet on a big move — or that vol is overpriced.",optionsSetupStraddleWarn:"Buyers need a large move; sellers face two-sided risk.",optionsSetupButterfly:"Butterfly",optionsSetupButterflyBody:"Multi-strike structure betting price pins near the body; profit zone is narrow.",optionsSetupButterflyWarn:"Sweet spot is thin; miss it and you near max loss.",optionsSetupVolAligned:"Often discussed with current vol regime",optionsSetupVolNotAligned:"Less aligned with current vol (still fine to learn)",optionsRiskShape:"Risk shape (plain)",optionsNoSetups:"No strategy notes yet",optionsPickTicker:"Pick a US ticker above",optionsChainBlocked:"Options chain temporarily unavailable",optionsPartialBlocker:"Some fields incomplete",optionsRefreshHow:"Data updates with the site; try again shortly if something looks off.",optionsLoadError:"Could not load options snapshot ({msg})",optionsEmpty:"No US sample yet — run fetch-us-options first",optionsGlossaryTitle:"Tiny glossary (no formulas)",optionsTermDelta:"Delta (direction feel)",optionsDefDelta:"How much the option tends to move when the stock moves. Closer to 1 or −1 means tighter tracking.",optionsTermIv:"Implied volatility (IV)",optionsDefIv:"What the market is pricing for future wobble — higher usually means pricier options.",optionsTermHv:"Historical volatility (HV)",optionsDefHv:"How much the stock actually moved recently — compare with IV.",optionsTermAtm:"ATM (near the money)",optionsDefAtm:"Strike closest to spot; a common volatility thermometer.",optionsTermSkew:"Volume skew",optionsDefSkew:"Whether calls or puts traded more — a coarse insurance vs chase hint.",optionsTermProb:"Probability (edu)",optionsDefProb:"Talk in ‘more/less common’ intuition only — no guaranteed outcomes or personal odds.",researchLead:"Books & papers: title → summary → key takeaways → strategy candidacy",researchMathGateBanner:"Formal strategy adoption requires the math gate (not passed yet) — candidates only",researchMathGate:"Math gate",researchMathGateDefault:"Math gate not passed",researchFormulas:"Programmable formulas",researchTakeaways:"Key takeaways",researchNoTakeaways:"No takeaways listed",researchSources:"Sources",researchFilters:"Filters",researchFilterAll:"All",researchType:"Type",researchTypeBook:"Books",researchTypePaper:"Papers",researchTypePodcast:"Podcasts",researchMarketBoth:"US+TW",researchStrategy:"Strategy candidate",researchCandYes:"Yes",researchCandNo:"No",researchCandWatch:"Watch",researchStatusCandidate:"Candidate",researchStatusDeferred:"Deferred",researchStatusAdopted:"Adopted",researchStatusRejected:"Rejected",researchCounts:"{books} books · {papers} papers · {podcasts} podcasts · showing {total}",researchEmpty:"No items match this filter",researchNoFormulas:"No formulas listed",researchLoadError:"Failed to load research library ({msg})",researchShelfFilters:"Shelves",researchShelfCoreInvesting:"Core investing classics",researchShelfValueInvesting:"Value investing",researchShelfBusiness:"Business & management",researchShelfLifePartner:"Life & partner wisdom",researchShelfOptions:"Options / derivatives",researchShelfRecentReads:"Recent reads & picks",researchShelfFiConcepts:"Must-read FI concepts",researchShelfMoneyValues:"Money values & mindset",researchShelfInvestingBasics:"Investing basics",researchShelfAssetAllocation:"Asset allocation",researchShelfFinancials:"Financial statement analysis",researchShelfMarketAnalysis:"Market analysis & edge",researchShelfEconAnalysis:"Economic analysis",researchShelfPsych:"Psychology / randomness / human nature",researchShelfBiographies:"Biographies",researchShelfAdjacent:"Other / adjacent",todayPicks:"Today's picks",market:"Market",hot:"Markets",marketQuotes:"Market quotes",macroTitle:"US market movers",macroTzEt:"Times · US ET",macroAsOf:"Updated",macroStale:"Stale (showing last successful fetch)",macroToday:"Today",macroNext:"Next",macroHighImpact:"High impact",macroEmpty:"No high-impact US events nearby (or data not refreshed yet)",macroLoadError:"Could not load US market movers ({msg})",liveQuotesLive:"Live",liveQuotesStale:"Quotes stale (showing last success)",liveQuotesStaleShort:"Stale",liveQuotesPending:"Connecting live quotes…",liveQuotesClock:"Quotes",macroEvent_fomcDecision:"FOMC decision",macroEvent_fomcMinutes:"FOMC minutes",macroEvent_cpi:"CPI",macroEvent_ppi:"PPI",macroEvent_pce:"PCE / Core PCE",macroEvent_nfp:"Nonfarm payrolls",macroEvent_joblessClaims:"Jobless claims",macroEvent_gdp:"GDP",macroEvent_retailSales:"Retail sales",macroEvent_ismMfg:"ISM Manufacturing",macroEvent_ismServices:"ISM Services",macroEvent_jolts:"JOLTS",twMacroTitle:"TW market movers",twMacroTz:"Times · Taipei",twMacroEmpty:"No high-impact TW events nearby (or data not refreshed yet)",twMacroLoadError:"Could not load TW market movers ({msg})",twMacroEvent_cbcDecision:"CBC policy meeting",twMacroEvent_dgbasCpi:"CPI",twMacroEvent_dgbasPpi:"PPI / price indices",twMacroEvent_dgbasUnemployment:"Unemployment",twMacroEvent_dgbasGdpFlash:"GDP flash",twMacroEvent_dgbasGdp:"GDP / growth",twMacroEvent_dgbasForecast:"Economic forecast",twMacroEvent_moeaExportOrders:"Export orders",twMacroEvent_moeaIndustrialProd:"Industrial production",twMacroEvent_twseHoliday:"TWSE holiday",usStock:"US",twStock:"TW",usList:"US list",twList:"TW list",usTop:"US Top",twTop:"TW Top",emptyTop:"No Top picks for {market}",ticker:"Ticker",name:"Name",price:"Price",dayPct:"Day %",rs:"RS",priorClose:"Prior close",priorCloseFull:"Prior-close %",pct5d:"5D",pct1m:"~1M",volRatio:"Vol ratio",ma:"MAs",screening:"Screen",reason:"Why",details:"Details",business:"Business",risk:"Risk",observe:"Watch",dataIncomplete:"Incomplete",intraday:"Intraday",taipeiClose:"Taipei close",taiex:"TAIEX",otc:"OTC",loadError:"Failed to load data ({msg}). Serve statically with data/latest.json present.",langLabel:"Language",paper:"Paper",paperMissing:"No paper portfolio file. Run npm run paper in the project.",paperDisclaimer:"Cumulative paper account (since {date}) · not reset daily · fills on signal · not real orders",paperRules:"Rules (separate books per market)",paperRuleTw:"TW principal NT$3,000,000 · round lots",paperRuleUs:"US principal US$100,000 · from 1 share",paperRuleBuy:"Buy: list · 1% risk · 1.5% stop · ≤8% per name · immediate fill",paperRuleSell:"Sell: −3% stop · +12% half take-profit · below SMA20 & day <−2% · off-list & losing · limit-up next-day −5%",paperTabTw:"TW book · NT$",paperTabUs:"US book · US$",paperBookTw:"TW book (NT$)",paperBookUs:"US book (US$)",principal:"Principal",cash:"Cash",equity:"Equity (positions + cash)",totalPnl:"Total P&L",totalPnlPct:"Total P&L %",weekPerf:"Week",monthPerf:"Month",quarterPerf:"Quarter",yearPerf:"Year",sinceInception:"Since inception",noTradesToday:"No trades of this type today (paper)",noPositions:"No open positions",buy:"Buy",sell:"Sell",shares:"sh",qtyShares:"Shares",positions:"Positions",position:"Position",avgCost:"Avg cost",mark:"Mark",mktValue:"Mkt value",dayPnl:"Day P&L",costBasis:"Cost basis",weightPct:"Weight %",posScrollHint:"Swipe for all columns",unrealizedPnl:"Unrealized P&L",unrealizedPct:"Unrealized %",recentTrades:"Trades (last 40)",paperSession:"{date} · since {inception} · fills on signal",reasonScreenBuy:"New from list",reasonAdd:"Add",reasonStop:"Stop-loss",reasonTakeProfit:"Take-profit",reasonMomentumBreak:"Momentum break",reasonOffList:"Off list",reasonLimitUpChase:"Limit-up chase unwind",stopLoss:"Stop-loss",takeProfit:"Take-profit",paperTrade:"Paper",realizedPnl:"P&L",periodPerf:"Performance",qty:"Qty",note:"Note",strategyScreen:"Strategy screener",strategyLead:"US / TW hits viewed separately · public data first",strategyLoading:"Loading strategies…",strategyEmpty:"No strategy data. Run npm run strategies.",strategyLoadError:"Failed to load strategies ({msg}). Run npm run strategies.",strategyList:"Strategies",strategyCat:"Categories",hitCount:"hits",hitTitle:"Hit count",strategyDetails:"Details · strategy notes",conditions:"Conditions",results:"Results",copyJson:"Copy JSON",exportCsv:"Export CSV",exportJson:"Export JSON",copied:"Copied",noHitsExport:"No hit rows to export for this strategy today",incomplete:"N/A",hitsTotal:"{n} hits",twOnlyHint:"TW only",hitMarket:"Hit market",noHits:"No hits today",dataInsufficient:"Insufficient data",calibTitle:"Calibration",incompleteFilters:"Unchecked filters (not counted): ",sessionTwse:"TWSE session",ohlcvBar:"OHLCV bar",generated:"Generated",universeTw:"TW universe",universeUs:"US universe",cat精選:"Featured",cat價量:"Price/Vol",cat籌碼:"Flow",cat財務:"Fundamentals",cat大師:"Masters",cat週期:"Cycle",cat技術:"Technical",cat基本:"Fundamentals",cat綜合:"Composite",addWatchlist:"Watchlist",watchlistAdded:"Added {ticker}",watchlistExists:"{ticker} already watched",copyFailed:"Copy failed — select manually",csvDownloaded:"CSV downloaded",csvBlocked:"Download blocked — opened data URI",backtestSoon:"Backtest: not open",backtestHint:"Backtest engine/data not available (no fake results)",regimeToday:"Today's market regime (US / TW separate)",psychologyPhase:"Psychology phase",cycleStance:"Cycle stance",liquidityBias:"Liquidity bias",temperatureScore:"Temperature score",sizeMult:"Size mult",regimeTags:"Regime tags",dataGaps:"Data gaps",marketRegime:"Market regime",enum_euphoric:"Euphoric",enum_late_optimism:"Late optimism",enum_mid_cycle:"Mid-cycle",enum_cautious_recovery:"Cautious recovery",enum_despondent:"Despondent",enum_panic:"Panic",enum_defensive:"Defensive",enum_selective:"Selective",enum_balanced:"Balanced",enum_constructive:"Constructive",enum_aggressive:"Aggressive",enum_stabilize_first:"Stabilize first",enum_risk_off:"Risk-off",enum_risk_on:"Risk-on",enum_neutral:"Neutral",logicTitle:"Selection logic",logicSubtitle:"Regime → screens → strategies → demotions → why → sizing — auditable math",logicNoRegime:"No market-regime data yet (await next scan).",logicStep1:"Market regime",logicStep1Lead:"Set US/TW dials first, then screen names. Kostolany phase × Marks temperature × rates liquidity.",logicStep1Caption:"Phase → screen stance → size multiplier (STANCE_SIZE_MULT)",logicRatesR2:"R2: ^TNX +0.25pp / 20d → defensive liquidity bias (even if price mid-cycle).",logicRatesR3:"R3: yields ≤ −0.25pp / 60d → allow more aggressive dial (if not Euphoric).",logicRatesSeparate:"Hard rule: dial_US and dial_TW stay separate — never one “world mood”.",logicStep2:"Math screens (A / B)",logicStep2Lead:"RS, momentum, SMA, volume — thresholds shift with cycle stance.",logicScreenA:"Screen A · momentum / RS",logicScreenABalanced:"Balanced: day RS≥0.5pp or day≥1.5%; or 5d≥3%; or 1m≥6% & >SMA20; or both MAs with 5d≥0 / RS≥0.",logicScreenASelective:"Selective: >SMA50 and (RS≥0.5 or 5d≥3% or 1m≥6% & >SMA20).",logicScreenADefensive:"Defensive: >SMA20+SMA50 and (RS≥0.8 or 5d≥4%) and vol≥1.0 (null vol OK); 1m≥12% & vol<0.8 → reject.",logicScreenAAggressive:"Aggressive / Constructive: looser RS/day/5d/1m; allow firm-hands below SMA50 if >SMA200 (1m<0 & vol≥1.4). Constructive also needs SMA20 or SMA200.",logicScreenAStabilize:"Stabilize first: must >SMA20 and (RS≥1.0pp or vol≥1.5).",logicScreenB:"Screen B · volume",logicScreenBVol:"Vol ratio = today / 20d avg. Floors: Defensive ≥1.0; Aggressive ≥1.1; else ≥1.2.",logicScreenBMom:"A backfill: if A missed but 1m≥8% & >SMA20+SMA50 (not Stabilize first) → tag A.",logicScore:"Ranking score",logicScoreFormula:"score = dayRS×2 + 5d%×0.35 + 1m%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"vol≥1.2 adds (cap ~8×0.6); vol<0.4 −0.5; then score adjust by regime.",logicStep3:"XQ strategies",logicXqLead:"Parallel to daily lists: condition hits (price/vol, flow, fundamentals, masters, cycle). Missing fields → insufficient — never invented.",logicXqPriceVol:"Price/vol: MA bull stack, ultra-short, etc. (OHLCV).",logicXqFlow:"Flow: institutional sync (public share-unit thresholds).",logicXqFund:"Fundamentals: earnings uptrend, PE / margins from public filings.",logicXqMasters:"Masters: Lynch / Graham / Buffett-style computable proxies.",logicXqCycle:"Cycle: Kostolany / regime pack keyed to today’s US·TW dials.",logicOpenStrategies:"Open Strategies",logicStep4:"Ranking demotions / boosts",logicStep4Lead:"scoreAdjust: thin high-RS, firm-hands, and panic reclaim change the score.",logicDemoteHot:"Defensive/Selective: 1m≥8% & vol<0.8 → −2.5; vol<0.7 & day>2% → −1.2; missing dual MA −1.5.",logicDemoteThin:"K5: strong RS on thin volume → demote / keep out of aggressive bucket.",logicPromoteFirm:"aggressive/constructive: weak price + rising vol + >SMA200 (firm-hands) → +2.2; early up-day volume +1.0.",logicDemotePanic:"stabilize_first: base −3; +1.5 only if >SMA20.",logicListSize:"List length: Defensive ~0.55×; Selective ~0.75×; Stabilize first ~0.45×; Aggressive +2 (cap 14); base 12.",logicStep5:"How “Why” is built",logicStep5Lead:"The why field is a readable join of verified fields — not a black box.",logicWhyRs:"Day % + vs index (US: S&P; TW: TAIEX) in pp.",logicWhyMom:"5-day % and ~1-month %.",logicWhyVol:"Volume sentence only if vol_ratio ≥ 1.2.",logicWhySma:"SMA20 / 50 / 200 status (dual-MA preferred).",logicWhyRegime:"Append a regime note or stance / psychology-phase tags.",logicStep6:"Paper sizing discipline",logicStep6Lead:"Paper books validate process — not live orders. Size constrained by regime size mult + fixed risk math.",logicPaperCapital:"Capital: TW NT$3,000,000 (round lots); US US$100,000 (from 1 share).",logicPaperBuy:"Buy: list (observe-only avoided); risk = equity×1%; stop≈price×1.5% (vol≥3 → 2.5%); per name ≤8% equity.",logicPaperSizeMult:"Size multiplier (0.3–1.35×) tags day’s aggressiveness; linked to list length.",logicPaperSell:"Sell: stop −3%; take-profit +12% half; below SMA20 & day <−2%; off-list & losing; limit-up chase next-day −5%.",logicOpenPaper:"Open Paper",logicFootnote:"Framework synthesis for transparent screening — not investment advice. Public operational proxies only; no copyrighted book text.",condPass:"Cond.",condFail:"Fail",condSkip:"Skip",pe:"P/E",opMargin:"Op. margin",grossMargin:"Gross margin",foreignInv:"Foreign",trustInv:"Trust",dealerInv:"Dealer",maBull:"MA bull stack",amplitude:"Range",zhang:"lots",limitUp:"Limit-up",momentum:"Momentum",metricPrice:"Price",metricDayPct:"Day %",metricVolRatioYday:"Vol ratio (yday)",metricVolToday:"Vol (lots)",metricDebt:"Debt %",metricDirector:"Insider %",metricOpQ:"Op. margin (q)",metricSource:"Source",foreign1d:"Foreign 1d (lots)",trust1d:"Trust 1d (lots)",dealer1d:"Dealer 1d (lots)",foreign5d:"Foreign 5d (lots)",trust5d:"Trust 5d (lots)",dealer5d:"Dealer 5d (lots)"},Rs={...wt,siteTitle:"每日数学选股",loading:"加载中…",disclaimer:"投资涉及风险，信息仅供参考，非投资建议",footer:"投资涉及风险，信息仅供参考，非投资建议",dataAsOf:"数据",taipei:"（台北）",navMain:"主导航",navToday:"今日",navStrategies:"策略",navPaper:"模拟",navMore:"更多",navMoreClose:"关闭",navLogic:"逻辑",researchTitle:"研究",navResearch:"研究",navOptions:"期权",navEarnings:"读财报",earningsTitle:"读财报",earningsLead:"美股 Magnificent 7 与高关注财报摘要：公司在做什么、关键数字、下一步看什么——白话、每日更新，非投资建议。",earningsDisclaimer:"非投资建议。数字来自公开 Yahoo Finance；缺栏标「资料不足」，不构成个性化投资建议。",earningsUsFocus:"以美股为主",earningsTwStub:"台股财报稍后开放（规划中）",earningsSelectionTitle:"关注名单规则：",earningsSelectionFallback:"市值最大且未来 14 日内有财报的非 Mag7 大型股；或 Yahoo 热门成交；不足则以 45 日内行事历亮点补齐。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——上次财报与下次日期（已知时）。",earningsMag7Badge:"Mag7",earningsHotTitle:"高关注／热门财报",earningsHotLead:"依上方规则挑选；标签说明为何入选。",earningsHotEmpty:"目前窗口内暂无符合条件的标的（或资料不足）",earningsWhatItDoes:"这家公司在做什么",earningsWhatToWatch:"下一步看什么",earningsNextDate:"下次财报",earningsLastEps:"上次 EPS",earningsRevYoy:"营收 YoY",earningsEpsYoy:"获利 YoY",earningsPe:"市盈率",earningsForwardPe:"预估市盈率",earningsEstimate:"预估",earningsDataMissing:"资料不足",earningsTagPrimary:"14 日内・大型",earningsTagActives:"热门成交・14 日内",earningsTagRecent:"近日已公布",earningsTagFallback:"45 日行事历亮点",earningsTagOther:"关注",earningsPartialBlocker:"部分资料受阻",earningsRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",earningsLoadError:"无法载入财报摘要（{msg}）",earningsEmpty:"财报摘要整理中，请稍后再看。",navLookup:"查股",lookupTitle:"查股／个股",lookupLead:"输入美股或台股代码，查看公司简介、报价、财报要点与官方财报链接——白话整理；行情来自 Yahoo，官方申报连至 SEC／公开资讯观测站。非投资建议。",lookupDisclaimer:"非投资建议。行情数字来自公开 Yahoo Finance；官方财报链接连至 SEC EDGAR／公开资讯观测站。缺栏不显示、不编造。即时抓取可能受网络或来源限制。",lookupInputLabel:"股票代码",lookupPlaceholderUs:"例如 AAPL",lookupPlaceholderTw:"例如 2330 或 2330.TW",lookupHintUs:"美股：输入代号如 AAPL、MSFT、NVDA",lookupHintTw:"台股：四码代号如 2330（自动加 .TW；上柜可试 .TWO）",lookupSearch:"查询",lookupIdle:"输入代码后按查询，即可查看报价与财报摘要。",lookupLoading:"正在向 Yahoo Finance 抓取…",lookupEmptyInput:"请输入股票代码",lookupInvalid:"代码格式无法辨识。美股如 AAPL；台股如 2330 或 2330.TW",lookupNotFound:"找不到此代码的报价。请确认市场分页（美股／台股）与代码是否正确。",lookupError:"查询失败（{msg}）",lookupBusiness:"公司在做什么",lookupQuoteStats:"报价与关键数据",lookupFinancials:"财务摘要",lookupEarnings:"财报要点",lookupPrevClose:"前收",lookupVolume:"成交量",lookupDayRange:"今日区间",lookup52w:"52 周高低",lookupMarketCap:"市值",lookupEps:"每股盈余",lookupBeta:"Beta",lookupDivYield:"殖利率",lookupRevenue:"营收",lookupGrossMargin:"毛利率",lookupProfitMargin:"净利率",lookupEpsConsensus:"预估 EPS",lookupEpsSurprise:"EPS 惊喜",lookupSources:"来源",lookupPartial:"部分进阶栏位暂无法取得（已显示可得数字，未编造）。",lookupOfficialFilings:"官方财报",lookupOfficialFilingsLead:"以下链接通往官方申报与公开资讯；美股可另列近期 10-K／10-Q／8-K（公开可抓取时）。数字不编造。",lookupSourceOfficial:"官方来源",lookupSourceQuote:"行情来源",lookupSourceCompany:"公司网站",lookupSecEdgarSearch:"SEC EDGAR 公司申报查询",lookupSecEdgarBrowse:"SEC EDGAR 公司浏览页",lookupSecFormsFilter:"SEC 10-K／10-Q 等年季报筛选",lookupMopsFinancialBook:"公开资讯观测站｜财务报告书",lookupMopsFinancialQuery:"公开资讯观测站｜财务报告查询页",lookupMopsCompany:"公开资讯观测站｜公司基本资料",lookupMopsMaterial:"公开资讯观测站｜重大讯息",lookupTwseIsin:"证交所 ISIN／基本资料查询",lookupTpexCompany:"柜买中心｜公司资料",lookupYahooTwQuote:"Yahoo 股市（行情，非正式财报）",lookupCompanyWebsite:"公司官网",lookupInvestorRelations:"投资人关系／IR（公开资料）",lookupRecentFilings:"近期官方申报",lookupFilingForm:"表单",lookupFilingDate:"申报日",lookupFilingDoc:"文件",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"近期申报清单暂时无法载入（网络或来源限制）。",lookupFilingsListEmpty:"目前没有可列示的近期 10-K／10-Q／8-K。",lookupFilingsLinksStillWork:"上方官方链接仍可开启查阅。",lookupFilingsTwNote:"台股请以公开资讯观测站（MOPS）为官方财报来源；下方亦附行情页供对照。",lookupFilingsCikUnavailable:"尚无法对应 SEC CIK；仍可通过上方 EDGAR 以代号查询。",navSoxl:"SOXL",soxlTitle:"SOXL 半导体杠杆",soxlLead:"Direxion 每日半导体多头 3 倍 ETF：最新报价、异常／事件、相关新闻，以及 SEC N-PORT 持股权重与估算贡献——白话整理，非投资建议。",soxlDisclaimer:"非投资建议。SOXL 为约 3 倍日杠杆 ETF，波动与亏损风险极高；持股权重来自 SEC N-PORT（非当日），贡献度为估算。",soxlHeroLabel:"SOXL 最新报价",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正规收盘",soxlLeverageNote:"SOXL 目标约为 ICE Semiconductor Index 单日表现的 3 倍；隔夜与多日累积不可用简单 3 倍推估。",soxlHoldingsAsOf:"持股权重截至",soxlHoldingsNotSameDay:"最新 N-PORT，非今日即时",soxlEventsTitle:"事件／异常",soxlNewsTitle:"相关新闻",soxlNewsEmpty:"暂无相关新闻",soxlHoldingsTitle:"持股与估算贡献",soxlHoldingsLead:"权重来自 SEC N-PORT；现金与指数互换常占大宗。贡献 ≈ 权重 × 报酬（标示为估算，且未直接等于 3x ETF 点数）。",soxlHoldingsEmpty:"持股清单整理中，请稍后再看。",soxlColName:"标的",soxlColWeight:"权重",soxlColReturn:"日报酬",soxlColContrib:"估算贡献",soxlColReasons:"白话原因",soxlContributionHint:"估算＝权重% × 报酬% ÷ 100（篮子百分点；SOXL 约 3× 日杠杆，不等于 ETF 点数）",soxlSourceN:"来源 {n}",soxlOverallTitle:"为何涨／为何跌",soxlWhyUp:"偏多时常见原因",soxlWhyDown:"偏空时常见原因",soxlRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",soxlLoadError:"无法载入 SOXL 桌面（{msg}）",navTxf:"台指期",txfTitle:"台指期",txfLead:"台湾加权现货对台股期货：近月／次月报价、基差、成交与未平仓、三大法人部位、保证金与到期日——全部来自期交所／证交所公开资料，白话整理，非投资建议。",txfDisclaimer:"投资涉及风险，资讯仅供参考，非投资建议。美股与台指期分栏；数字缺栏不捏造。",txfHeroLabel:"台股期货近月报价",txfNearBadge:"近月",txfNextBadge:"次月",txfSettle:"结算价",txfVolume:"成交量",txfOI:"未平仓",txfSessionDate:"行情日",txfSpotLabel:"加权现货",txfBasisLabel:"基差",txfBasisHint:"基差＝近月期货 − 现货；正值表示期货相对现货溢价。",txfMultiplierShort:"大台乘数 NT${n}／点（纸上损益＝点数差×乘数×口数）",txfContractsTitle:"契约：大台／小台／微台",txfContractsLead:"一般交易时段行情。月契约最后交易日依官方「第三个星期三」规则推算，假日调整请对照期交所公告。",txfMultLabel:"契约乘数",txfPerPoint:"／点",txfMarginInitial:"原始保证金",txfMarginMaint:"维持保证金",txfColMonth:"月份",txfColLast:"最新",txfColSettle:"结算",txfColChange:"涨跌",txfColVolume:"成交量",txfColOI:"未平仓",txfColLTD:"最后交易日",txfInstTitle:"三大法人期货部位",txfInstLead:"未平仓多空与当日净买卖（期交所，截至 {date}）",txfInstFoot:"三大法人为汇总结果，不代表单一机构策略。",txfColParty:"身份",txfColLongOI:"多方未平仓",txfColShortOI:"空方未平仓",txfColNetOI:"净未平仓",txfColNetVol:"净买卖口数",txfCalendarTitle:"结算／期权汇总",txfNextLTD:"近月最后交易日",txfNearMonth:"近月",txfNextMonth:"次月",txfLTDRule:"月契约最后交易日＝交割月份第三个星期三。",txfRecentSettle:"近期最后结算价",txfPcrTitle:"台指期权 P/C",txfPcrVol:"成交量比",txfPcrOI:"未平仓比",txfExplainTitle:"白话说明",txfExplain1:"台指期（TX）是以台湾加权股价指数为标的的指数期货，采现金交割；小台（MTX）与微台（TMF）规格较小，方便调整部位。",txfExplain2:"基差＝期货价 − 现货指数。升水（正基差）表示期货贵于现货；贴水则相反。基差会随到期日逼近而收敛。",txfExplain3:"未平仓（OI）是尚未平仓的契约口数，反映市场留仓规模，不是当日涨跌原因本身。",txfExplain4:"纸上损益可用：点数差 × 契约乘数 × 口数（大台每点 NT$200、小台 NT$50、微台 NT$10）。保证金以期交所公告为准。",txfSourcesTitle:"资料来源",txfLoadError:"无法载入台指期桌面（{msg}）",navPodcasts:"名人播客",podcastsTitle:"名人播客",podcastsLead:"精选投资人／主持人公开访谈与 Podcast 框架整理：可扫读论点、市场分栏、候选状态标示清楚——非投资建议。",podcastsDisclaimer:"非投资建议。本区整理公开访谈与研究书库已有资料；数字与做法标示来源，不构成个性化建议。数学闸门未通过者仅候选／观察。",podcastsFeatured:"精选",podcastsStubBadge:"候选摘要",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（谢孟恭）",podcastsGooayeLead:"台湾市场／总经／风险／散户心理 Podcast；集数重点整理自公开 RSS 节目指引（非逐字稿、非投资建议）。",podcastsGooayeMarket:"以台股为主 · 美／台分栏",podcastsGooayeStubNote:"轻量 stub：完整条目与可计算规则在研究书库；此处不发明集数引言。",podcastsGooayePoint1:"先管风险与仓位，再谈单一标的故事",podcastsGooayePoint2:"护国神山供应链用篮子强弱看，不单压一档",podcastsGooayePoint3:"美股用利率方向当风险偏好代理；台股另算",podcastsGotoResearch:"到研究书库看完整条目",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"分类菜单",podcastsCategories:"名人podcast分类",podcastsMenuLead:"先选分类再进入内容——不把长文全部摊在同一页。",podcastsOpenCategory:"打开此分类",gooayeLibraryBadge:"集数库",gooayeDisclaimer:"候选／观察；数学闸关闭。标「已听写」：下载公开音档＋语音转文字后撰写股票重点分析。标「仅节目说明」：仅 RSS／节目说明，未听写。主持人观点、候选状态；非投资建议。",gooayeLoading:"载入股癌集数库…",gooayeLoadError:"无法载入集数库（{msg}）",gooayeEpisodeCount:"共 {n} 集（公开 RSS）",gooayeAsOf:"资料截至 {date}（台北）",gooayeEmptyCount:"其中 {n} 集公开文字不足，仅列标题",gooayeSearchLabel:"搜索集数",gooayeSearchPlaceholder:"标题、集数或关键字",gooayeSourceLine:"来源：",gooayeKeyPoints:"重点整理",gooayeNotesThin:"公开节目指引几乎只有标题／短语，无更多可整理文字。",gooayeTeaserNote:"公开 show notes 偏短（常见为开场短语＋广告）；以上仅整理可用的公开文字，未听音档、未发明内容。",gooayeListen:"收听（SoundOn）",gooayeLoadMore:"再显示 {n} 集（尚余 {left}）",gooayeShowingAll:"已显示全部 {n} 集",gooayeNoResults:"没有符合的集数。",gooayeUntitled:"未命名集数",gooayeBadgeListened:"已听写",gooayeBadgeRssOnly:"仅节目说明",gooayeStockAnalysis:"股票重点分析（已听写）",gooayeRssTeaserToggle:"公开节目说明（RSS）",gooayeListenedAt:"听写于 {date}（台北）",gooayeListenedCount:"已听写 {n} 集",gooayeRssOnlyNote:"此集尚未听音档；以上仅整理公开 RSS／节目说明，非听写分析。",podcastsXiaojunTitle:"张小珺jùn｜商业访谈录",podcastsXiaojunHandle:"张小珺 · 商业／科技长访谈",podcastsXiaojunLead:"以中国科技与商业人物为主的长篇访谈；集数库来自公开 RSS 节目说明。标「已听写」者另附股票／产业重点（候选／观察，非投资建议）。",podcastsXiaojunMarket:"以中国科技产业为主 · 跨市场观察",podcastsXiaojunApple:"在 Apple Podcasts 收听",xiaojunLibraryBadge:"集数库",xiaojunDisclaimer:"候选／观察；数学闸关闭。标「已听写」者：下载公开音档＋语音转文字后撰写股票／产业重点。标「仅节目说明」者：仅 RSS／节目说明，未听写。主持人观点；非投资建议。",xiaojunLoading:"载入张小珺集数库…",xiaojunLoadError:"无法载入集数库（{msg}）",xiaojunEpisodeCount:"共 {n} 集（公开 RSS）",xiaojunAsOf:"资料截至 {date}（台北）",xiaojunEmptyCount:"其中 {n} 集公开文字不足，仅列标题",xiaojunSearchLabel:"搜索集数",xiaojunSearchPlaceholder:"标题、集数或关键字",xiaojunSourceLine:"来源：",xiaojunKeyPoints:"重点整理",xiaojunNotesThin:"公开节目指引几乎只有标题／短语，无更多可整理文字。",xiaojunTeaserNote:"以上仅整理公开 RSS／节目说明，未听音档、未发明内容。",xiaojunListen:"在 Apple Podcasts 收听",xiaojunLoadMore:"再显示 {n} 集（尚余 {left}）",xiaojunShowingAll:"已显示全部 {n} 集",xiaojunNoResults:"没有符合的集数。",xiaojunUntitled:"未命名集数",xiaojunBadgeListened:"已听写",xiaojunBadgeRssOnly:"仅节目说明",xiaojunStockAnalysis:"股票／产业重点分析（已听写）",xiaojunRssTeaserToggle:"公开节目说明（RSS）",xiaojunListenedAt:"听写于 {date}（台北）",xiaojunListenedCount:"已听写 {n} 集",xiaojunRssOnlyNote:"此集尚未听音档；以上仅整理公开 RSS／节目说明，非听写分析。",podcastsWhynottvTitle:"WhynotTV Podcast",podcastsWhynottvHandle:"Tairan He · AI／机器人长访谈",podcastsWhynottvLead:"聚焦 AI、机器人与科研创业的长篇访谈；集数库来自公开 Anchor RSS。标「已听写」者另附产业重点（候选／观察，非投资建议）。",podcastsWhynottvMarket:"AI／机器人与科研创业 · 跨市场观察",podcastsWhynottvApple:"在 Apple Podcasts 收听",whynottvLibraryBadge:"集数库",whynottvDisclaimer:"候选／观察；数学闸关闭。标「已听写」者：下载公开音档＋语音转文字后撰写产业重点。标「仅节目说明」者：仅 RSS／节目说明，未听写。主持人观点；非投资建议。",whynottvLoading:"载入 WhynotTV 集数库…",whynottvLoadError:"无法载入集数库（{msg}）",whynottvEpisodeCount:"共 {n} 集（公开 RSS）",whynottvAsOf:"资料截至 {date}（台北）",whynottvEmptyCount:"其中 {n} 集公开文字不足，仅列标题",whynottvSearchLabel:"搜索集数",whynottvSearchPlaceholder:"标题、集数或关键字",whynottvSourceLine:"来源：",whynottvKeyPoints:"重点整理",whynottvNotesThin:"公开节目指引几乎只有标题／短语，无更多可整理文字。",whynottvTeaserNote:"以上仅整理公开 RSS／节目说明，未听音档、未发明内容。",whynottvListen:"在 Apple Podcasts 收听",whynottvLoadMore:"再显示 {n} 集（尚余 {left}）",whynottvShowingAll:"已显示全部 {n} 集",whynottvNoResults:"没有符合的集数。",whynottvUntitled:"未命名集数",whynottvBadgeListened:"已听写",whynottvBadgeRssOnly:"仅节目说明",whynottvStockAnalysis:"股票／产业重点分析（已听写）",whynottvRssTeaserToggle:"公开节目说明（RSS）",whynottvListenedAt:"听写于 {date}（台北）",whynottvListenedCount:"已听写 {n} 集",whynottvRssOnlyNote:"此集尚未听音档；以上仅整理公开 RSS／节目说明，非听写分析。",podcastsZhangJunanTitle:"张濬安",podcastsZhangJunanHandle:"et220870 · Blogspot／PTT",podcastsZhangJunanLead:"公开博客与 PTT 发文整理：绩效复盘、交易纪律、券商／房贷实务与早期操作日志。标「已读分析」者已读全文；标「仅标题」者公开正文不可得。候选／观察，非投资建议。",podcastsZhangJunanMarket:"台股／交易实务 · 个人复盘",zhangJunanLibraryBadge:"文章库",zhangJunanDisclaimer:"候选／观察；数学闸关闭。标「已读分析」：已读公开正文（博客全文或 PTT 原文＋留言）后撰写股市／资产要点。标「仅标题」：公开页正文不可读或已删。作者观点；非投资建议。不纳入选股清单。",zhangJunanLoading:"载入张濬安文章库…",zhangJunanLoadError:"无法载入文章库（{msg}）",zhangJunanPostCount:"共 {n} 篇（公开列表）",zhangJunanAsOf:"资料截至 {date}（台北）",zhangJunanAnalyzedCount:"已读分析 {n} 篇",zhangJunanTitleOnlyCount:"其中 {n} 篇仅标题（正文不可读）",zhangJunanSearchLabel:"搜索文章",zhangJunanSearchPlaceholder:"标题、看板、关键字",zhangJunanSourceLine:"来源：",zhangJunanKeyPoints:"要点整理",zhangJunanStockAnalysis:"股市／资产要点分析（已读）",zhangJunanNotesThin:"公开文字不足，仅列标题与链接。",zhangJunanTitleOnlyNote:"公开页正文已删除或无法解析；以上不臆造内容。",zhangJunanOpenBlog:"打开原文（博客）",zhangJunanOpenPtt:"打开原文（PTT）",zhangJunanLoadMore:"再显示 {n} 篇（尚余 {left}）",zhangJunanShowingAll:"已显示全部 {n} 篇",zhangJunanNoResults:"没有符合的文章。",zhangJunanUntitled:"未命名文章",zhangJunanBadgeAnalyzed:"已读分析",zhangJunanBadgeTitleOnly:"仅标题",zhangJunanSourceBlog:"博客",zhangJunanSourcePtt:"PTT",zhangJunanCommentSummary:"留言要点",zhangJunanFilterAll:"全部",zhangJunanFilterBlog:"博客",zhangJunanFilterPtt:"PTT",zhangJunanFilterSeriesAll:"全部子分类",zhangJunanSourceFilters:"来源筛选",zhangJunanSeriesFilters:"子分类筛选",researchCatMenu:"分类菜单",researchCategories:"研究分类",researchMenuLead:"先选类型／市场／状态，再浏览该分类条目。",researchOpenCategory:"打开此分类",researchCatBooks:"书籍",researchCatPapers:"论文",researchCatPodcasts:"Podcast",researchCatUs:"美股焦点",researchCatTw:"台股焦点",researchCatCandidate:"候选",researchCatWatch:"观察中",researchBackMenu:"回分类菜单",researchStatusFilters:"状态",godzillaTitle:"哥吉拉",godzillaLead:"Threads 受访者「哥吉拉」的美股框架整理：时间与健康、RSU 再配置、基本面、能力圈、税务节奏、期权工具——白话卡片，非投资建议。",godzillaDisclaimer:"非投资建议。整理自公开访谈；数字与做法标示为受访者自述，不构成个性化建议。数学闸门未通过，仅候选／观察。",godzillaHeroLabel:"哥吉拉框架总览",godzillaKicker:"候选框架 · 美股为主",godzillaTagline:"用健康的时间换自由；长股为核、期权为辅；税务决定换仓节奏。",godzillaBadgeCandidate:"候选",godzillaBadgeWatch:"观察中",godzillaUsFocus:"以美股为主",godzillaSelfReport:"受访者自述",godzillaListenedBadge:"已听写",godzillaStockTitle:"股票重点分析（已听写）",godzillaStockLead:"依公开 YouTube 访谈音频＋语音转写整理的受访者观点（候选／观察；非投资建议）。",godzillaStock1:"时间与健康优先于再堆金钱／RSU；金钱买不回时间，退休目标会随 RSU 累积而上修。",godzillaStock2:"美股科技薪酬高度依赖 RSU；股价上涨放大总报酬，也放大单一公司集中风险。",godzillaStock3:"进场时点：特斯拉较早布局自觉「可更早出场会赚更多」；Meta 约在相对低档区间进入（受访者自述）。",godzillaStock4:"下一波关注偏 B2C AI 应用落地；当下显见案例如 Tesla FSD、Palantir，其余仍在观察。硬件／AI 资本开支仍在成长，但多数应用仍偏 B2B。",godzillaStock5:"即便看好 NVIDIA，也不主张把仓位压在单一公司；美国 W2／税务下，高薪＋集中持股需一起规划。",godzillaStock6:"台股无资本利得税 vs 美国税负：流动性／进出方便是优点，税制诱因不同，不能直接照搬美股玩法。",godzillaStockNote:"转写模型：faster-whisper small int8。来源影片公开可查；数字与标的均为访谈中受访者观点，候选／观察。",godzillaSourceLabel:"来源",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"观看 YouTube 访谈",godzillaThesesTitle:"核心论点",godzillaThesesLead:"十条可扫读重点；细节皆为受访者自述。",godzillaThesis1Title:"时间与健康重于再堆 RSU",godzillaThesis1Body:"退休目标常会膨胀（例如自述从约 3,000 万美元调到 6,000 万，再加上住房与子女）；停下来往往是身体撑不住。用健康的 40 多岁换旅行与自由，和 50–60 岁很不一样。",godzillaThesis2Title:"美股 RSU 改变诱因",godzillaThesis2Body:"四年归属、与公司利益绑在一起；对比台股现金奖金较少用来买自家股票。",godzillaThesis3Title:"归属当日卖出、转到信念标的",godzillaThesis3Body:"既得 RSU 当日卖出，再配置到有信念的名字（其例：NVDA），避免薪水＋未归属全押同一篮。",godzillaThesis4Title:"只看基本面",godzillaThesis4Body:"看营收／EPS 趋势；忽略华尔街目标价；新闻噪音多半有害。",godzillaThesis5Title:"能力圈：硬件／科技",godzillaThesis5Body:"能力圈在硬件与科技——NVDA 权重最高；亦提 PLTR、AVGO、TSM；很少碰科技外。指数部位现在较小，终局想象多数在指数。",godzillaThesis6Title:"税务决定换仓节奏",godzillaThesis6Body:"高 W2 收入时资本利得税重；离职后可多年把个股轮换成指数、把税负控在可接受范围；卖出 Covered Call 可缓冲下跌。",godzillaThesis7Title:"期权是工具",godzillaThesis7Body:"多半当卖方（Covered Call／Cash-secured Put）；少数做多买权／LEAP，仅在恐慌或价格与基本面背离时；接受权利金可能归零；从不裸卖。",godzillaThesis8Title:"Covered Call：被指派就延后",godzillaThesis8Body:"有被指派风险就往后换月（roll out）；不要为了小权利金去履约或卖掉核心持股；不舒服就少卖合约。",godzillaThesis9Title:"进场等趋势",godzillaThesis9Body:"等 1–2 次干净财报确认趋势，即使成本垫高也接受；有闲钱就持续买好公司；不追热门明牌。",godzillaThesis10Title:"美／台观察分栏",godzillaThesis10Body:"美股资本利得税→倾向抱更久；台股无资本利得＋有证交税→周转较高、投机文化较重（仅观察，非操作指令）。",godzillaChecklistTitle:"作法清单",godzillaChecklistLead:"可执行的自我检查，不是下单清单。",godzillaCheck1:"物欲低；别让「够了」的数字一直往上涨。",godzillaCheck2:"长股为核心；期权是卫星／避险／偶尔杠杆。",godzillaCheck3:"部位：不借钱；接受不了归零，就别碰期权。",godzillaCheck4:"期权优先流动性高的大型股。",godzillaCheck5:"终局配置草图：约 80% 宽基指数，小袖口参与产业（＋偶尔小额买权）。",godzillaCheck6:"PLTR 例子：B2B 靠前线工程师变现；若商业成长失望就减码。",godzillaOptionsTitle:"期权用法",godzillaOptionsLead:"卖方为主；买方极少、仅在极端偏离时。",godzillaOpt1:"主力：Covered Call、Cash-secured Put。",godzillaOpt2:"小部位长买权／LEAP：恐慌或价格脱离基本面时。",godzillaOpt3:"权利金可全部亏完；从不裸仓。",godzillaOpt4:"被指派风险：往后换月；核心持股不为小权利金卖出。",godzillaRsuTitle:"RSU、税务与轮换",godzillaRsuLead:"诱因、分散与离职后的税务节奏。",godzillaRsu1:"归属当日卖出 RSU，再配置到信念标的（例：NVDA）。",godzillaRsu2:"在职高税负时少动大额已实现利得；离职后多年轮换个股→指数。",godzillaRsu3:"Covered Call 作为下跌缓冲，不是赌方向。",godzillaTwTitle:"台股观察",godzillaTwLead:"与美股框架分开；仅文化／税制观察。",godzillaTwBody:"美股有资本利得税，倾向长期持有；台股无资本利得税、有证交税，周转与短线文化较明显。此页主轴仍是美股框架，台股仅作对照，不写进正式筛选。",godzillaGateNote:"尚未写进正式筛选",godzillaGateDetail:"状态：候选／strategyCandidate=watch。数学闸门关闭——未接入即时筛选器或模拟交易；仅供阅读与对照。",jensenTitle:"黄仁勋／Jensen Huang",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公开演讲整理：视角、需求与摩尔定律、文化、现金现实、再发明——候选／观察，非投资建议。",jensenDisclaimer:"非投资建议。整理自 Stanford Online 公开演讲（约 2009；YouTube 2011 上传）；论点来自讲者自述主题，不构成个性化建议。数学闸门未通过，仅候选／观察。",jensenHeroLabel:"黄仁勋演讲重点",jensenKicker:"候选演讲 · 美股科技／半导体创业",jensenTagline:"视角胜过空泛「愿景」；用文化与再发明撑住长周期公司建设。",jensenUsFocus:"以美股／科技为主",jensenTalkBadge:"公开演讲",jensenListenedBadge:"已听写",jensenStockTitle:"股票／事业重点（已听写）",jensenStockLead:"依公开 Stanford ETL 访谈影片音频＋语音转写整理（约2009；历史观点，非当下财报）。候选／观察；非投资建议。",jensenStock1:"创业叙事（1993）：押注 PC＋3D／游戏会成大市场；VC／长辈当时不信「为了打游戏开公司」。",jensenStock2:"竞争：消费级3D一度涌入数十～上百家；NVIDIA自述最终成仅存的电脑绘图公司——关键是看懂事业本质（半导体／Moore's Law 如竞争律）与持续重塑，而非只靠执行。",jensenStock3:"可编程着色器转型：主动吞噬自己成功的固定功能产品；第一代几乎拖垮公司，但自认不做会死于 Moore's Law 节奏。",jensenStock4:"资源配置：竞争决定价格，CEO决定要不要接案；看关键资源相对市场需求与机会成本，不只会计成本。",jensenStock5:"文化：创新需容忍计算过的失败；新创定义＝几乎一直快倒闭。通用化 GPU（瑞士刀）有偏离利基风险，却是延长产业寿命的路径。",jensenStock6:"时间锚点：本场为历史谈（预现代AI训练热潮），勿直接外推今日数据中心财报。NVIDIA为讲者公司；候选／观察。",jensenStockNote:"转写：faster-whisper small int8（en）。来源 YouTube Xn1EsFe7snQ／Stanford ETL。历史访谈观点。",jensenMeta:"Stanford Online · STVP ETL · 约 1:03:38 · 上传 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"观看 YouTube 演讲",jensenOpenYoutube:"在 YouTube 打开完整影片",jensenEmbedTitle:"Jen-Hsun Huang：Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 相关剪辑",jensenHighlightsTitle:"演讲重点（白话）",jensenHighlightsLead:"五条可扫读主题；仅整理公开演讲中反复出现的论点，非逐字稿。",jensenH1Title:"视角，而非空泛「愿景」",jensenH1Body:"人人都有视角。NVIDIA 早期押注：个人电脑加上便宜的 3D 会打开游戏市场（后来也谈到 Keyhole→Google Earth），当时对许多 VC 而言市场几乎是零。",jensenH2Title:"无穷需求与摩尔定律",jensenH2Body:"新类别尚未被定价时，有时要暂时忽略顾客反馈；先 rinse-and-repeat，再在「够好」扼杀媒介前重新发明（固定功能→可编程着色器／GeForce FX 近死经验、CG 语言）。",jensenH3Title:"文化：敢冒算过的风险",jensenH3Body:"创新需要计算过的风险、容忍快速失败、智识诚实、愿意改道；动机是热情与目的，而非「把公司卖掉」。",jensenH4Title:"现金与新创现实",jensenH4Body:"永远在募资、省钱或赚钱；新创几乎总是濒临倒闭。VC 更押人与够大的市场，而非完美商业计划。",jensenH5Title:"再发明：成功也要拆掉重建",jensenH5Body:"每一次成功终须拆解再建；黄仁勋谈的是长视野公司建设，不是连续翻转出场。",jensenTwTitle:"美／台分栏（仅脉络）",jensenTwLead:"本条目市场主轴为美股科技／半导体公司建设；台湾仅作供应链脉络，不发明台股标的。",jensenTwBody:"NVDA 作为美股半导体／运算平台公司，供应链与台湾晶圆制造、封测生态高度相关——此处仅作产业脉络注记，不列台股清单，也不写进正式筛选。",jensenGateNote:"尚未写进正式筛选",jensenGateDetail:"状态：候选／strategyCandidate=watch。数学闸门关闭——未接入即时筛选器或模拟交易；仅供阅读与对照。",jensenWatchCta:"在 YouTube 观看",jensenEmbedBlockedNote:"此演讲由拥有者设定为仅能在 YouTube 观看（无法于本站内嵌播放）。",optionsTitle:"美股期权",optionsLead:"以 McMillan《期权策略完全手册》策略族为主：先看波动与风险形状，再用公开 Yahoo 链学习——非投资建议。",optionsDisclaimer:"非投资建议；期权风险高。仅供教育与公开数据筛选，不构成个人化下单建议。",optionsBookBadge:"这本书",optionsBookCite:"主要参考书",optionsBookLead:"Lawrence G. McMillan《期权策略完全手册》增订第五版：依看法与波动高低对应策略族（原创摘要，非原文）。",optionsBookFallbackTitle:"期权策略完全手册（McMillan）",optionsGotoResearch:"到研究书库看完整条目",optionsUsOnly:"仅美股",optionsQualityTitle:"标的轻量财报检核",optionsQualityLead:"次要滤网：本益、净值、负债、ROE、营收／获利趋势。缺栏标「资料不足」，不作荐股。",optionsViewTitle:"期权观点（McMillan）",optionsViewLead:"公开期权链：ATM 隐含波动、历史波动、量能偏向；策略族为教育说明。",optionsMcmillanFirst:"先对齐波动高低与风险形状，再想策略族——不是先猜涨跌再硬套。",optionsPe:"市盈率",optionsPb:"市净率",optionsDebt:"负债／权益",optionsRoe:"ROE",optionsRevTrend:"营收趋势",optionsEarnTrend:"获利趋势",optionsGate:"品质闸",optionsGatePass:"通过",optionsGateWatch:"观察",optionsGateFail:"偏弱",optionsGateIncomplete:"资料不足",optionsDataMissing:"资料不足",optionsForwardPe:"预估市盈率",optionsTrendUp:"成长约 {pct}%",optionsTrendDown:"下滑约 {pct}%",optionsTrendFlat:"大致持平 {pct}%",optionsAtmIv:"ATM 隐含波动",optionsHv:"历史波动（约 1 月）",optionsIvHv:"IV／HV",optionsVolRegime:"波动状态",optionsRegimeIvRich:"隐含偏高",optionsRegimeIvCheap:"隐含偏低",optionsRegimeIvFair:"大致均衡",optionsRegimeIvOnly:"仅有 IV",optionsCallPutVol:"认购／认沽成交量",optionsAtmStrike:"近价履约价",optionsExpiry:"到期日",optionsSkewPutHeavy:"认沽量较重",optionsSkewCallHeavy:"认购量较重",optionsSkewBalanced:"量能大致均衡",optionsEduSetups:"策略族（教育）",optionsEduSetupsLead:"依看法＋波动状态挑选家族；绿底表示较常对齐目前 IV／HV（仍非建议）。",optionsSetupCoveredCall:"备兑认购（Covered Call）",optionsSetupCoveredCallBody:"已持股时卖出认购，换取权利金；上涨空间被履约价盖住。",optionsSetupCoveredCallWarn:"最大利润有天花板；大跌时股票亏损仍在。",optionsSetupProtectivePut:"保护性认沽（Protective Put）",optionsSetupProtectivePutBody:"持股同时买入认沽，像买保险：下跌有地板，但要付保费。",optionsSetupProtectivePutWarn:"保险成本会吃掉报酬；若波动已很贵，保费更痛。",optionsSetupVertical:"垂直价差（Vertical）",optionsSetupVerticalBody:"同到期、不同履约价的组合，把最大损益框在可计算区间。",optionsSetupVerticalWarn:"方向看错仍会亏；好处是亏损有上限。",optionsSetupCalendar:"日历／对角价差",optionsSetupCalendarBody:"不同到期的组合，常用来表达时间流逝或波动变化看法。",optionsSetupCalendarWarn:"对波动与时间敏感；形状会随市价移动改变。",optionsSetupStraddle:"跨式／勒式",optionsSetupStraddleBody:"同时买（或卖）认购与认沽，押大波动或波动不够。",optionsSetupStraddleWarn:"买方需要够大的移动；卖方面临两侧风险。",optionsSetupButterfly:"蝶式",optionsSetupButterflyBody:"多履约价组合，押价格收敛在中间附近；利润区通常很窄。",optionsSetupButterflyWarn:"甜蜜点很窄；错过中间就可能接近最大亏损。",optionsSetupVolAligned:"与目前波动状态较常一起讨论",optionsSetupVolNotAligned:"与目前波动状态较不契合（仍可学习）",optionsRiskShape:"风险形状（白话）",optionsNoSetups:"暂无策略族说明",optionsPickTicker:"请选择上方美股代码",optionsChainBlocked:"期权链暂时无法取得",optionsPartialBlocker:"部分栏位不完整",optionsRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",optionsLoadError:"无法载入期权快照（{msg}）",optionsEmpty:"尚无美股样本——请先跑 fetch-us-options",optionsGlossaryTitle:"小词典（不用公式）",optionsTermDelta:"Delta（方向敏感度）",optionsDefDelta:"价格涨跌时，期权大概会跟多少。数字愈靠近 1 或 −1，跟现货愈紧。",optionsTermIv:"隐含波动 IV",optionsDefIv:"市场「现在愿意付多少保费」换算成的波动预期。愈高通常期权愈贵。",optionsTermHv:"历史波动 HV",optionsDefHv:"过去一段时间股价实际晃动有多大，用来和 IV 对照。",optionsTermAtm:"ATM（近价）",optionsDefAtm:"履约价最靠近现价的合约，常拿来当波动温度计。",optionsTermSkew:"量能偏向",optionsDefSkew:"认购与认沽成交量谁比较多，粗看市场偏保险还是偏追涨。",optionsTermProb:"机率（教育）",optionsDefProb:"只谈「比较可能／比较少见」的直觉，不保证结果，也不给个人化胜率。",researchLead:"书单与论文：标题 → 摘要 → 重点作法 → 是否纳入策略候选",researchMathGateBanner:"正式纳入策略需数学闸门通过（目前未过）— 仅候选",researchMathGate:"数学闸门",researchMathGateDefault:"尚未通过数学闸门",researchFormulas:"可编程公式",researchTakeaways:"重点作法",researchNoTakeaways:"尚无重点作法",researchSources:"来源",researchFilters:"筛选",researchFilterAll:"全部",researchType:"类型",researchTypeBook:"书籍",researchTypePaper:"论文",researchTypePodcast:"播客",researchMarketBoth:"美＋台",researchStrategy:"策略候选",researchCandYes:"候选纳入",researchCandNo:"不纳入",researchCandWatch:"观察中",researchStatusCandidate:"候选",researchStatusDeferred:"暂缓",researchStatusAdopted:"已纳入",researchStatusRejected:"排除",researchCounts:"书籍 {books} · 论文 {papers} · 播客 {podcasts} · 显示 {total}",researchEmpty:"此筛选条件下暂无项目",researchNoFormulas:"尚无公式条目",researchLoadError:"无法加载研究库（{msg}）",researchShelfFilters:"书架分类",researchShelfCoreInvesting:"核心投资经典",researchShelfValueInvesting:"价值型投资",researchShelfBusiness:"商业管理与商界视角",researchShelfLifePartner:"人生智慧与合伙人思想",researchShelfOptions:"期权／衍生品",researchShelfRecentReads:"近期阅读与推荐书",researchShelfFiConcepts:"必看财商观念书",researchShelfMoneyValues:"理财与金钱价值观",researchShelfInvestingBasics:"投资理财入门",researchShelfAssetAllocation:"资产配置",researchShelfFinancials:"财报分析",researchShelfMarketAnalysis:"投资分析与战胜市场",researchShelfEconAnalysis:"经济分析",researchShelfPsych:"投资心理／随机性／人性",researchShelfBiographies:"名人传记",researchShelfAdjacent:"其他／隣接",todayPicks:"今日选股",market:"市场",hot:"热门",marketQuotes:"市场报价",macroTitle:"美股大事",macroTzEt:"时间・美东 ET",macroAsOf:"更新",macroStale:"数据偏旧（仍显示上次成功抓取）",macroToday:"今日",macroNext:"即将",macroHighImpact:"高影响",macroEmpty:"近期无高影响美股大事（或数据尚未更新）",macroLoadError:"无法载入美股大事（{msg}）",liveQuotesLive:"实时",liveQuotesStale:"报价暂缓（仍显示上次成功）",liveQuotesStaleShort:"暂缓",liveQuotesPending:"实时报价连接中…",liveQuotesClock:"报价",macroEvent_fomcDecision:"FOMC 利率决议",macroEvent_fomcMinutes:"FOMC 会议纪要",macroEvent_cpi:"CPI 通胀",macroEvent_ppi:"PPI 生产者物价",macroEvent_pce:"PCE／核心 PCE",macroEvent_nfp:"非农就业 NFP",macroEvent_joblessClaims:"初请失业金",macroEvent_gdp:"GDP",macroEvent_retailSales:"零售销售",macroEvent_ismMfg:"ISM 制造业",macroEvent_ismServices:"ISM 服务业",macroEvent_jolts:"JOLTS 职缺",twMacroTitle:"台股大事",twMacroTz:"时间・台北时间",twMacroEmpty:"近期无高影响台股大事（或数据尚未更新）",twMacroLoadError:"无法载入台股大事（{msg}）",twMacroEvent_cbcDecision:"央行理监事会",twMacroEvent_dgbasCpi:"CPI 消费者物价",twMacroEvent_dgbasPpi:"PPI／物价指数",twMacroEvent_dgbasUnemployment:"失业率",twMacroEvent_dgbasGdpFlash:"GDP 概估",twMacroEvent_dgbasGdp:"GDP／经济成长",twMacroEvent_dgbasForecast:"经济预测",twMacroEvent_moeaExportOrders:"外销订单",twMacroEvent_moeaIndustrialProd:"工业生产",twMacroEvent_twseHoliday:"台股休市",usStock:"美股",twStock:"台股",usList:"美股列表",twList:"台股列表",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暂无 Top 候选",ticker:"代码",name:"名称",price:"价格",dayPct:"日涨跌",priorClose:"前收",priorCloseFull:"前收涨幅",pct5d:"5 日",pct1m:"约 1 月",volRatio:"量比",ma:"均线",screening:"筛选",reason:"理由",details:"详情",business:"本业",risk:"风险",observe:"观察",dataIncomplete:"资料不全",intraday:"盘中",taipeiClose:"台北收",taiex:"台湾加权 TAIEX",otc:"柜买",loadError:"无法加载数据（{msg}）。请确认以静态服务器打开，且 data/latest.json 存在。",langLabel:"语言",paper:"模拟",paperMissing:"尚无模拟账本文件。请在项目执行 npm run paper。",paperDisclaimer:"累积模拟账户（自 {date} 起） · 不会每日归零 · 买进即成交 · 非真实下单",paperRules:"规则（各市场独立账）",paperRuleTw:"台股本金 NT$3,000,000 · 整张成交",paperRuleUs:"美股本金 US$100,000 · 可买 1 股起",paperRuleBuy:"买：该市场名单·风险1%·停距1.5%·单档≤8% · 即成交",paperRuleSell:"卖：停损−3% · 停利+12%半仓 · 破SMA20且日跌>2% · 离名单亏损 · 涨停隔日−5%",paperTabTw:"台股账 · NT$",paperTabUs:"美股账 · US$",paperBookTw:"台股账本（NT$）",paperBookUs:"美股账本（US$）",principal:"本金",cash:"现金",equity:"权益（部位＋现金）",totalPnl:"总损益",totalPnlPct:"总损益 ％",weekPerf:"周绩效",monthPerf:"月绩效",quarterPerf:"季绩效",yearPerf:"年绩效",sinceInception:"成立以来",noTradesToday:"本日尚无此类成交（模拟）",noPositions:"目前没有持股",buy:"买",sell:"卖",shares:"股",qtyShares:"股数",positions:"目前部位",position:"部位",avgCost:"成本",mark:"现价",mktValue:"市值",dayPnl:"日损益",costBasis:"成本合计",weightPct:"权重 ％",posScrollHint:"左右滑动看全部栏位",unrealizedPnl:"未实现损益",unrealizedPct:"未实现 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累积 · 买进即成交",reasonScreenBuy:"名单新开仓",reasonAdd:"持续买进",reasonStop:"停损",reasonTakeProfit:"停利",reasonMomentumBreak:"动能转弱",reasonOffList:"离开名单",reasonLimitUpChase:"涨停追价急杀",stopLoss:"停损",takeProfit:"停利",paperTrade:"模拟",realizedPnl:"损益",periodPerf:"绩效",qty:"数量",note:"说明",strategyScreen:"策略选股",strategyLead:"台／美命中分开检视 · 缺资料标「不足」",strategyLoading:"加载策略结果中…",strategyEmpty:"尚无策略资料。请执行 npm run strategies。",strategyLoadError:"无法加载策略选股（{msg}）。请确认已执行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分类",hitCount:"档命中",hitTitle:"命中档数",strategyDetails:"详情 · 策略说明",conditions:"条件",results:"筛选结果",copyJson:"复制 JSON",exportCsv:"导出此策略 CSV",exportJson:"导出 JSON",copied:"已复制",noHitsExport:"此策略今日无命中列可导出",incomplete:"不足",hitsTotal:"共{n}档",twOnlyHint:"本策略仅台股",hitMarket:"命中市场",noHits:"本日无命中",dataInsufficient:"资料不足",calibTitle:"校准说明",incompleteFilters:"未检查滤网（不算通过）：",sessionTwse:"证交所 session",ohlcvBar:"OHLCV K棒",generated:"产生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精选",cat價量:"价量",cat籌碼:"筹码",cat財務:"财务",cat大師:"大师",cat週期:"周期",cat技術:"技术",cat基本:"基本",cat綜合:"综合",addWatchlist:"加入自选",watchlistAdded:"已加入自选 {ticker}",watchlistExists:"{ticker} 已在自选",copyFailed:"复制失败（请手动选取）",csvDownloaded:"已下载 CSV",csvBlocked:"下载被挡：改以数据链接打开",backtestSoon:"回测：尚未开放",backtestHint:"回测：数据／引擎尚未开放（不提供假回测）",regimeToday:"今日市场周期（美／台分开）",psychologyPhase:"心理相位",cycleStance:"周期姿态",liquidityBias:"流动性偏误",temperatureScore:"市场温度",sizeMult:"部位乘数",regimeTags:"周期标签",dataGaps:"资料缺口",marketRegime:"市场周期",enum_euphoric:"亢奋",enum_late_optimism:"晚期乐观",enum_mid_cycle:"中期",enum_cautious_recovery:"谨慎复苏",enum_despondent:"绝望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精选",enum_balanced:"均衡",enum_constructive:"偏建设",enum_aggressive:"积极",enum_stabilize_first:"先求稳",enum_risk_off:"偏防守",enum_risk_on:"偏进攻",enum_neutral:"中性",logicTitle:"选股逻辑",logicSubtitle:"政权→筛选→策略→降权→理由→部位：可稽核的数学流程",logicNoRegime:"尚无市场周期资料（待下次扫描写入）。",logicStep1:"市场周期（Regime）",logicStep1Lead:"先定美／台独立姿态，再筛个股。Kostolany 心理相位 × Marks 温度 × 利率流动性。",logicStep1Caption:"相位 → 筛选姿态 → 部位乘数（STANCE_SIZE_MULT）",logicRatesR2:"R2：美债 ^TNX 20 日上升 ≥ +0.25pp → 流动性偏防御（即使价趋势仍中性）。",logicRatesR3:"R3：60 日收益率下降 ≤ −0.25pp → 允许较积极姿态（非亢奋）。",logicRatesSeparate:"硬规则：dial_US 与 dial_TW 分开；不混成「全球心情」。",logicStep2:"数学筛选（A／B）",logicStep2Lead:"相对强度、动能、SMA、量比；门槛依周期姿态调整。",logicScreenA:"筛选 A · 动能／相对强度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日涨≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或双均线且 5日≥0／RS≥0。",logicScreenASelective:"精选：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量视为可过）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"积极／偏建设：放宽 RS／日／5日／1月；允许 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建设另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求稳：须站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌后先稳定）。",logicScreenB:"筛选 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。门槛：防守 ≥1.0；积极 ≥1.1；其余 ≥1.2。",logicScreenBMom:"补标 A：若未过 A，但 1月≥8% 且 SMA20＋SMA50（非先求稳）→ 仍标 A。",logicScore:"排序分数",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加权（上限约 8×0.6）；量比<0.4 −0.5；再依市场周期调整分数。",logicStep3:"XQ 策略选股",logicXqLead:"与每日名单并行：条件式命中（价量／筹码／财务／大师／周期）。缺栏标「资料不足」，不捏造。",logicXqPriceVol:"价量：均线多头、超短线作多等（OHLCV 实算）。",logicXqFlow:"筹码：法人同步等（公开张数门槛）。",logicXqFund:"财务：获利递增、PE／营益率等公开财报栏。",logicXqMasters:"大师：林奇／格雷厄姆／巴菲特等可计算代理条件。",logicXqCycle:"周期：科斯托拉尼／市场周期包（依当日美台姿态）。",logicOpenStrategies:"打开策略页",logicStep4:"排序降权／加权",logicStep4Lead:"scoreAdjust：依姿态对高 RS 缩量、firm-hands、恐慌稳定做加减分。",logicDemoteHot:"防守／精选：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日涨>2% → −1.2；缺双均线 −1.5。",logicDemoteThin:"K5：高相对强度但量能不足 → 降权／排除积极桶。",logicPromoteFirm:"aggressive／constructive：价弱量增且 SMA200（firm-hands）→ +2.2；早段放量上涨 +1.0。",logicDemotePanic:"stabilize_first：基准 −3；站上 SMA20 才 +1.5。",logicListSize:"名单长度：防守 ≈0.55×；精选 ≈0.75×；先求稳 ≈0.45×；积极 +2（上限14）；基准 12。",logicStep5:"「为什么」如何组成",logicStep5Lead:"why 栏为可读摘要，非模型黑箱——由当日可验证栏位串接。",logicWhyRs:"日涨跌 + 相对指数（美：S&P；台：加权）pp。",logicWhyMom:"五日%、约一个月%。",logicWhyVol:"量比≥1.2 才写入量能句。",logicWhySma:"SMA20／50／200 站上状态（双均线优先）。",logicWhyRegime:"附加周期备注或姿态／心理相位标签。",logicStep6:"纸上部位纪律",logicStep6Lead:"模拟账验证流程；非实单。部位受周期部位乘数与固定风险公式约束。",logicPaperCapital:"本金：台股 NT$3,000,000（整张）；美股 US$100,000（1 股起）。",logicPaperBuy:"买：名单（纯 observe 尽量不买）；风险＝权益×1%；停距≈价×1.5%（量比≥3→2.5%）；单档≤权益 8%。",logicPaperSizeMult:"部位乘数（0.3–1.35×）标示当日建议积极度；与名单长度联动。",logicPaperSell:"卖：停损 −3%；停利 +12% 半仓；破 SMA20 且日跌>2%；离名单且亏损；涨停风格隔日 −5%。",logicOpenPaper:"打开模拟页",logicFootnote:"框架合成仅供透明筛选说明，非投资建议。公开作者方法之可编码代理；不重制受著作权保护之原文。",condPass:"条件",condFail:"未过",condSkip:"略过",pe:"本益比",opMargin:"营益率",grossMargin:"毛利率",foreignInv:"外资",trustInv:"投信",dealerInv:"自营商",maBull:"均线多头",amplitude:"振幅",zhang:"张",limitUp:"涨停",momentum:"动能",metricPrice:"价格",metricDayPct:"日涨跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(张)",metricDebt:"负债比%",metricDirector:"董监持股%",metricOpQ:"近季营益率%",metricSource:"来源",foreign1d:"外资1日(张)",trust1d:"投信1日(张)",dealer1d:"自营商1日(张)",foreign5d:"外资5日(张)",trust5d:"投信5日(张)",dealer5d:"自营5日(张)"},Ns={...wt,siteTitle:"毎日クオンツ選株",loading:"読み込み中…",disclaimer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",footer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",dataAsOf:"データ",taipei:"（台北）",navMain:"メインナビ",navToday:"本日",navStrategies:"戦略",navPaper:"模擬",navMore:"その他",navMoreClose:"閉じる",navLogic:"ロジック",researchTitle:"研究",navResearch:"研究",navOptions:"オプション",navEarnings:"決算を読む",earningsTitle:"決算を読む",earningsLead:"米国 Mag7 と注目決算の要約：何をしている会社か、主要数字、次に見る点——平易な言葉、日次更新。投資助言ではありません。",earningsDisclaimer:"投資助言ではありません。数値は公開 Yahoo Finance 由来；欠落は「データ不足」。個別の投資助言ではありません。",earningsUsFocus:"米国中心",earningsTwStub:"台湾株の決算は後日対応（スタブ）",earningsSelectionTitle:"注目リストのルール：",earningsSelectionFallback:"今後14日以内に決算がある非Mag7大型株（時価総額順）；または Yahoo 出来高上位；不足分は45日以内のカレンダーで補完。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——前回決算と次回日（判明時）。",earningsMag7Badge:"Mag7",earningsHotTitle:"注目・話題の決算",earningsHotLead:"上記ルールで選定；バッジが理由を示します。",earningsHotEmpty:"現在の窓に該当なし（またはデータ不足）",earningsWhatItDoes:"この会社は何をしているか",earningsWhatToWatch:"次に見る点",earningsNextDate:"次回決算",earningsLastEps:"前回 EPS",earningsRevYoy:"売上高 YoY",earningsEpsYoy:"利益 YoY",earningsPe:"PER",earningsForwardPe:"予想 PER",earningsEstimate:"予想",earningsDataMissing:"データ不足",earningsTagPrimary:"14日以内・大型",earningsTagActives:"出来高上位・14日",earningsTagRecent:"直近発表",earningsTagFallback:"45日カレンダー注目",earningsTagOther:"注目",earningsPartialBlocker:"一部データ取得不可",earningsRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",earningsLoadError:"決算ダイジェストを読めません（{msg}）",earningsEmpty:"決算ダイジェストを準備中です。しばらくしてからご確認ください。",navLookup:"銘柄検索",lookupTitle:"銘柄検索",lookupLead:"米株または台湾株のティッカーで会社概要・気配・決算ハイライトと公式財務リンクを表示。相場は Yahoo、公式開示は SEC／MOPS。投資助言ではありません。",lookupDisclaimer:"投資助言ではありません。相場は公開 Yahoo Finance、公式財務リンクは SEC EDGAR／MOPS。欠落は表示せず創作しません。取得は通信やソース制限の影響を受け得ます。",lookupInputLabel:"ティッカー",lookupPlaceholderUs:"例: AAPL",lookupPlaceholderTw:"例: 2330 または 2330.TW",lookupHintUs:"米株: AAPL、MSFT、NVDA など",lookupHintTw:"台湾株: 2330 のような4桁（.TW を自動付与；OTC は .TWO）",lookupSearch:"検索",lookupIdle:"ティッカーを入力して検索すると、気配と決算要約を表示します。",lookupLoading:"Yahoo Finance から取得中…",lookupEmptyInput:"ティッカーを入力してください",lookupInvalid:"形式を認識できません。米株は AAPL、台湾株は 2330 または 2330.TW",lookupNotFound:"このティッカーの気配が見つかりません。米／台タブと記号を確認してください。",lookupError:"検索に失敗（{msg}）",lookupBusiness:"事業内容",lookupQuoteStats:"気配と主要指標",lookupFinancials:"財務スナップショット",lookupEarnings:"決算ハイライト",lookupPrevClose:"前日終値",lookupVolume:"出来高",lookupDayRange:"本日レンジ",lookup52w:"52週レンジ",lookupMarketCap:"時価総額",lookupEps:"EPS（ttm）",lookupBeta:"Beta",lookupDivYield:"配当利回り",lookupRevenue:"売上高",lookupGrossMargin:"粗利率",lookupProfitMargin:"純利益率",lookupEpsConsensus:"EPS 予想",lookupEpsSurprise:"EPS サプライズ",lookupSources:"出典",lookupPartial:"一部の詳細項目は取得不可（取得できた数値のみ表示）。",lookupOfficialFilings:"公式財務書類",lookupOfficialFilingsLead:"公式の開示・届出へのリンクです。米国株は取得可能なとき直近の 10-K／10-Q／8-K も表示します。数値の創作はしません。",lookupSourceOfficial:"公式ソース",lookupSourceQuote:"相場ソース",lookupSourceCompany:"会社サイト",lookupSecEdgarSearch:"SEC EDGAR 会社届出検索",lookupSecEdgarBrowse:"SEC EDGAR 会社ページ",lookupSecFormsFilter:"SEC 10-K／10-Q フィルタ",lookupMopsFinancialBook:"公開資訊觀測站｜財務報告書",lookupMopsFinancialQuery:"公開資訊觀測站｜財務報告照会",lookupMopsCompany:"公開資訊觀測站｜会社基本情報",lookupMopsMaterial:"公開資訊觀測站｜重大情報",lookupTwseIsin:"TWSE ISIN／基本検索",lookupTpexCompany:"TPEx｜会社情報",lookupYahooTwQuote:"Yahoo 台湾相場（相場情報・公式書類ではない）",lookupCompanyWebsite:"会社ウェブサイト",lookupInvestorRelations:"IR（公開情報）",lookupRecentFilings:"直近の公式届出",lookupFilingForm:"様式",lookupFilingDate:"提出日",lookupFilingDoc:"書類",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"直近届出一覧を読み込めません（通信またはソース制限）。",lookupFilingsListEmpty:"表示できる直近の 10-K／10-Q／8-K がありません。",lookupFilingsLinksStillWork:"上の公式リンクは引き続き利用できます。",lookupFilingsTwNote:"台湾株の公式財務は MOPS（公開資訊觀測站）を主にしてください。下の相場リンクは補助です。",lookupFilingsCikUnavailable:"SEC CIK を特定できません。上の EDGAR でティッカー検索できます。",navSoxl:"SOXL",soxlTitle:"SOXL 半導体レバレッジ",soxlLead:"Direxion 半導体ブル3倍ETF：最新価格、イベント／異常、関連ニュース、SEC N-PORT 保有比率と寄与の概算——平易な整理。投資助言ではありません。",soxlDisclaimer:"投資助言ではありません。SOXLは約3倍の日次レバレッジETFで変動が極めて大きいです。保有比率はSEC N-PORT（当日ではない）、寄与は概算です。",soxlHeroLabel:"SOXL 最新価格",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正規取引終値",soxlLeverageNote:"SOXLはICE Semiconductor Indexの日次リターンの約3倍を目指します。夜間や複数日は単純な3倍ではありません。",soxlHoldingsAsOf:"保有比率基準日",soxlHoldingsNotSameDay:"最新N-PORT、当日ではない",soxlEventsTitle:"イベント／異常",soxlNewsTitle:"関連ニュース",soxlNewsEmpty:"関連ニュースはまだありません。",soxlHoldingsTitle:"保有と寄与の概算",soxlHoldingsLead:"比率はSEC N-PORT由来。現金と指数スワップが大きいことが多い。寄与≈比率×リターン（概算表示。3倍ETFのポイントとは異なる）。",soxlHoldingsEmpty:"保有リストを準備中です。しばらくしてからご確認ください。",soxlColName:"銘柄",soxlColWeight:"比率",soxlColReturn:"日次リターン",soxlColContrib:"寄与概算",soxlColReasons:"平易な理由",soxlContributionHint:"概算＝比率% × リターン% ÷ 100（バスケットのポイント。SOXLは約3×日次でETFポイントではない）",soxlSourceN:"出典 {n}",soxlOverallTitle:"上がる理由／下がる理由",soxlWhyUp:"上昇側の要因",soxlWhyDown:"下落側の要因",soxlRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",soxlLoadError:"SOXLデスクを読み込めません（{msg}）",navTxf:"TX先物",txfTitle:"台湾株価指数先物",txfLead:"TAIEX現物とTX先物：直近／次限月、ベーシス、出来高・建玉、機関投資家ポジション、証拠金と満期——TAIFEX／TWSEの公開データのみ。平易な整理。投資助言ではありません。",txfDisclaimer:"投資はリスクを伴います。参考情報であり投資助言ではありません。米株と台湾先物は分離。欠落項目は捏造しません。",txfHeroLabel:"TX直近限月",txfNearBadge:"直近",txfNextBadge:"次限",txfSettle:"清算値",txfVolume:"出来高",txfOI:"建玉",txfSessionDate:"取引日",txfSpotLabel:"TAIEX現物",txfBasisLabel:"ベーシス",txfBasisHint:"ベーシス＝直近先物 − 現物。正は先物プレミアム。",txfMultiplierShort:"TX乗数 NT${n}/pt（紙上損益＝ポイント差×乗数×枚数）",txfContractsTitle:"限月：TX / MTX / TMF",txfContractsLead:"日中取引セッション。月限の最終取引日は公式の第3水曜日ルール（祝日は取引所発表に従う）。",txfMultLabel:"乗数",txfPerPoint:"/pt",txfMarginInitial:"当初証拠金",txfMarginMaint:"維持証拠金",txfColMonth:"限月",txfColLast:"直近値",txfColSettle:"清算",txfColChange:"騰落",txfColVolume:"出来高",txfColOI:"建玉",txfColLTD:"最終取引日",txfInstTitle:"三大法人の先物ポジション",txfInstLead:"建玉の売買と当日ネット（TAIFEX、{date}時点）",txfInstFoot:"集計値であり、単一機関の戦略ではありません。",txfColParty:"区分",txfColLongOI:"買い建玉",txfColShortOI:"売り建玉",txfColNetOI:"ネット建玉",txfColNetVol:"ネット出来高",txfCalendarTitle:"清算／オプション集計",txfNextLTD:"直近の最終取引日",txfNearMonth:"直近",txfNextMonth:"次限",txfLTDRule:"月限の最終取引日＝受渡月の第3水曜日。",txfRecentSettle:"直近の最終清算値",txfPcrTitle:"TXOプット／コール",txfPcrVol:"出来高レシオ",txfPcrOI:"建玉レシオ",txfExplainTitle:"平易な説明",txfExplain1:"TXはTAIEXを原資産とする現金決済の指数先物。MTX・TMFは小さい契約単位です。",txfExplain2:"ベーシス＝先物 − 現物。満期が近づくと収れんしやすいです。",txfExplain3:"建玉（OI）は未決済契約の規模であり、その日の値動き理由そのものではありません。",txfExplain4:"紙上損益 ≈ ポイント差 × 乗数 × 枚数（TX NT$200、MTX NT$50、TMF NT$10／pt）。証拠金は取引所発表に従います。",txfSourcesTitle:"出典",txfLoadError:"TX先物デスクを読み込めません（{msg}）",navPodcasts:"著名人ポッドキャスト",podcastsTitle:"著名人ポッドキャスト",podcastsLead:"著名投資家／ホストの公開インタビューとポッドキャスト枠組み：要点を掃読、米／台分離、候補状態を明示——投資助言ではありません。",podcastsDisclaimer:"投資助言ではありません。公開インタビューと研究ライブラリ既存資料の整理。数値は出典付き。数学ゲート未通過は候補／様子見のみ。",podcastsFeatured:"注目",podcastsStubBadge:"候補スタブ",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（謝孟恭）",podcastsGooayeLead:"台湾のマーケット／マクロ／リスク／個人投資家心理のポッドキャスト。各回の要点は公開RSS番組ノートから整理（逐語録なし・投資助言ではありません）。",podcastsGooayeMarket:"台湾中心 · 米／台分離",podcastsGooayeStubNote:"軽量スタブ：完全条目と計算可能ルールは研究ライブラリ。ここにはエピソード引用を創作しません。",podcastsGooayePoint1:"銘柄話より先にリスクとサイズ",podcastsGooayePoint2:"半導体チェーンはバスケットで見る",podcastsGooayePoint3:"米は金利でリスクオン代理、台は別計算",podcastsGotoResearch:"研究ライブラリの条目へ",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"カテゴリ",podcastsCategories:"著名人podcastカテゴリ",podcastsMenuLead:"先にカテゴリを選んでから本文へ——長い記事を一覧に並べません。",podcastsOpenCategory:"このカテゴリを開く",gooayeLibraryBadge:"エピソード庫",gooayeDisclaimer:"候補／ウォッチ；数学ゲート閉鎖。「聴取済・分析」は公開音声＋音声認識後の株式ポイント。「番組ノートのみ」はRSSティーザーで未聴取。ホスト見解；投資助言ではありません。",gooayeLoading:"Gooayeエピソードを読み込み中…",gooayeLoadError:"エピソード庫を読み込めません（{msg}）",gooayeEpisodeCount:"全 {n} 回（公開RSS）",gooayeAsOf:"時点 {date}（台北）",gooayeEmptyCount:"うち {n} 回は公開テキスト不足（タイトルのみ）",gooayeSearchLabel:"エピソード検索",gooayeSearchPlaceholder:"タイトル・回番号・キーワード",gooayeSourceLine:"出典：",gooayeKeyPoints:"要点整理",gooayeNotesThin:"公開ノートはほぼタイトルのみで、要約できる本文がありません。",gooayeTeaserNote:"公開ショーノートは短め（短いフック＋広告が多い）です。上記は使える公開文のみ——音声未聴取・創作なし。",gooayeListen:"聴く（SoundOn）",gooayeLoadMore:"あと {n} 回表示（残り {left}）",gooayeShowingAll:"全 {n} 回を表示中",gooayeNoResults:"一致するエピソードがありません。",gooayeUntitled:"無題のエピソード",gooayeBadgeListened:"聴取済・分析",gooayeBadgeRssOnly:"番組ノートのみ",gooayeStockAnalysis:"株式ポイント分析（聴取済）",gooayeRssTeaserToggle:"公開番組ノート（RSS）",gooayeListenedAt:"聴取・整理 {date}（台北）",gooayeListenedCount:"聴取済 {n} 回",gooayeRssOnlyNote:"音声未聴取。上記は公開RSS／番組ノートのみで、聴取分析ではありません。",podcastsXiaojunTitle:"張小珺jùn｜商業インタビュー",podcastsXiaojunHandle:"張小珺 · ビジネス／テック長尺対談",podcastsXiaojunLead:"中国テック・ビジネス人物の長尺インタビュー。カタログは公開RSSの番組ノート。『聴取済』は株式／産業メモ付き（候補／ウォッチ、投資助言ではありません）。",podcastsXiaojunMarket:"中国テック中心 · クロスマーケット観察",podcastsXiaojunApple:"Apple Podcasts で聴く",xiaojunLibraryBadge:"エピソード庫",xiaojunDisclaimer:"候補／ウォッチ。数学ゲート閉。『聴取済』は公開音声＋音声認識後の株式／産業メモ。『番組ノートのみ』はRSSのみ。ホスト見解。投資助言ではありません。",xiaojunLoading:"張小珺エピソード庫を読み込み中…",xiaojunLoadError:"エピソード庫を読み込めません（{msg}）",xiaojunEpisodeCount:"全 {n} 回（公開RSS）",xiaojunAsOf:"データ時点 {date}（台北）",xiaojunEmptyCount:"うち {n} 回は公開テキスト不足（タイトルのみ）",xiaojunSearchLabel:"エピソード検索",xiaojunSearchPlaceholder:"タイトル・回号・キーワード",xiaojunSourceLine:"出典：",xiaojunKeyPoints:"要点",xiaojunNotesThin:"公開ノートはタイトル／短いフレーズのみ。",xiaojunTeaserNote:"公開RSS／番組ノートのみ。音声未聴取。創作なし。",xiaojunListen:"Apple Podcasts で聴く",xiaojunLoadMore:"さらに {n} 回（残り {left}）",xiaojunShowingAll:"全 {n} 回を表示中",xiaojunNoResults:"一致する回がありません。",xiaojunUntitled:"無題の回",xiaojunBadgeListened:"聴取済",xiaojunBadgeRssOnly:"番組ノートのみ",xiaojunStockAnalysis:"株式／産業メモ（聴取済）",xiaojunRssTeaserToggle:"公開番組ノート（RSS）",xiaojunListenedAt:"聴取メモ {date}（台北）",xiaojunListenedCount:"聴取済 {n} 回",xiaojunRssOnlyNote:"音声未聴取。上記は公開RSS／番組ノートのみ。",podcastsWhynottvTitle:"WhynotTV Podcast",podcastsWhynottvHandle:"Tairan He · AI／ロボティクス長尺",podcastsWhynottvLead:"AI・ロボティクス・研究スタートアップの長尺対談。カタログは公開Anchor RSS。『聴取済』は産業メモ付き（候補／ウォッチ、投資助言ではありません）。",podcastsWhynottvMarket:"AI／ロボティクス・研究スタートアップ · クロスマーケット観察",podcastsWhynottvApple:"Apple Podcasts で聴く",whynottvLibraryBadge:"エピソード庫",whynottvDisclaimer:"候補／ウォッチ。数学ゲート閉。『聴取済』は公開音声＋音声認識後の産業メモ。『番組ノートのみ』はRSSのみ。ホスト見解。投資助言ではありません。",whynottvLoading:"WhynotTVエピソード庫を読み込み中…",whynottvLoadError:"エピソード庫を読み込めません（{msg}）",whynottvEpisodeCount:"全 {n} 回（公開RSS）",whynottvAsOf:"データ時点 {date}（台北）",whynottvEmptyCount:"うち {n} 回は公開テキスト不足（タイトルのみ）",whynottvSearchLabel:"エピソード検索",whynottvSearchPlaceholder:"タイトル・回号・キーワード",whynottvSourceLine:"出典：",whynottvKeyPoints:"要点",whynottvNotesThin:"公開ノートはタイトル／短いフレーズのみ。",whynottvTeaserNote:"公開RSS／番組ノートのみ。音声未聴取。創作なし。",whynottvListen:"Apple Podcasts で聴く",whynottvLoadMore:"さらに {n} 回（残り {left}）",whynottvShowingAll:"全 {n} 回を表示中",whynottvNoResults:"一致する回がありません。",whynottvUntitled:"無題の回",whynottvBadgeListened:"聴取済",whynottvBadgeRssOnly:"番組ノートのみ",whynottvStockAnalysis:"株式／産業メモ（聴取済）",whynottvRssTeaserToggle:"公開番組ノート（RSS）",whynottvListenedAt:"聴取メモ {date}（台北）",whynottvListenedCount:"聴取済 {n} 回",whynottvRssOnlyNote:"音声未聴取。上記は公開RSS／番組ノートのみ。",podcastsZhangJunanTitle:"張濬安",podcastsZhangJunanHandle:"et220870 · Blogspot／PTT",podcastsZhangJunanLead:"公開ブログとPTT投稿の整理。成績レビュー、売買規律、証券／住宅ローン実務、初期の売買日誌。「分析済」は本文既読、「タイトルのみ」は本文不可。候補／ウォッチ。投資助言ではありません。",podcastsZhangJunanMarket:"台湾株／売買実務 · 個人レビュー",zhangJunanLibraryBadge:"記事庫",zhangJunanDisclaimer:"候補／ウォッチ。数学ゲート閉鎖。「分析済」：公開本文（ブログまたはPTT本文＋コメント）を読んだ上での市場メモ。「タイトルのみ」：本文欠落／削除。著者の見解であり助言ではありません。銘柄リストには入れません。",zhangJunanLoading:"張濬安ライブラリを読み込み中…",zhangJunanLoadError:"ライブラリを読み込めません（{msg}）",zhangJunanPostCount:"全 {n} 件（公開リスト）",zhangJunanAsOf:"データ時点 {date}（台北）",zhangJunanAnalyzedCount:"分析済 {n} 件",zhangJunanTitleOnlyCount:"うち {n} 件はタイトルのみ",zhangJunanSearchLabel:"記事検索",zhangJunanSearchPlaceholder:"タイトル、板、キーワード",zhangJunanSourceLine:"出典：",zhangJunanKeyPoints:"要点",zhangJunanStockAnalysis:"株式／資産メモ（分析済）",zhangJunanNotesThin:"公開文が少なく、タイトルとリンクのみ。",zhangJunanTitleOnlyNote:"公開本文は削除または解析不可。内容は創作していません。",zhangJunanOpenBlog:"原文を開く（ブログ）",zhangJunanOpenPtt:"原文を開く（PTT）",zhangJunanLoadMore:"さらに {n} 件（残り {left}）",zhangJunanShowingAll:"全 {n} 件を表示中",zhangJunanNoResults:"該当なし。",zhangJunanUntitled:"無題",zhangJunanBadgeAnalyzed:"分析済",zhangJunanBadgeTitleOnly:"タイトルのみ",zhangJunanSourceBlog:"ブログ",zhangJunanSourcePtt:"PTT",zhangJunanCommentSummary:"コメント要約",zhangJunanFilterAll:"すべて",zhangJunanFilterBlog:"ブログ",zhangJunanFilterPtt:"PTT",zhangJunanFilterSeriesAll:"全サブ分類",zhangJunanSourceFilters:"出典フィルタ",zhangJunanSeriesFilters:"サブ分類フィルタ",researchCatMenu:"カテゴリ",researchCategories:"研究カテゴリ",researchMenuLead:"タイプ／市場／状態を先に選び、その分類だけを閲覧します。",researchOpenCategory:"このカテゴリを開く",researchCatBooks:"書籍",researchCatPapers:"論文",researchCatPodcasts:"Podcast",researchCatUs:"米国フォーカス",researchCatTw:"台湾フォーカス",researchCatCandidate:"候補",researchCatWatch:"ウォッチ",researchBackMenu:"カテゴリに戻る",researchStatusFilters:"ステータス",godzillaTitle:"ゴジラ",godzillaLead:"Threads インタビュイー「哥吉拉」の米国株フレームワーク：時間と健康、RSU の再配置、ファンダ、能力圏、税務ペース、オプション道具——平易なカード。投資助言ではありません。",godzillaDisclaimer:"投資助言ではありません。公開インタビューの整理。数値・手法は本人の自述。数学ゲート未通過のため候補／様子見のみ。",godzillaHeroLabel:"ゴジラ枠組みの概要",godzillaKicker:"候補枠組み · 米国株中心",godzillaTagline:"健康な時間を自由に換える。現物が核、オプションは補助。税が回転ペースを決める。",godzillaBadgeCandidate:"候補",godzillaBadgeWatch:"様子見",godzillaUsFocus:"米国株中心",godzillaSelfReport:"本人の自述",godzillaListenedBadge:"聴取済・分析",godzillaStockTitle:"株式ポイント分析（聴取済）",godzillaStockLead:"公開 YouTube 音声＋音声認識に基づくインタビュー見解（候補／ウォッチ；投資助言ではない）。",godzillaStock1:"時間と健康は現金／RSU の積み増しより優先。金で時間は買えない。RSU が増えると退職目標も上がりがち。",godzillaStock2:"米テック報酬は RSU 比重が高い。株高は総報酬を押し上げると同時に単一銘柄集中リスクも拡大。",godzillaStock3:"タイミング（自述）：Tesla は早めに入り「もっと早く利確できた」とも。Meta は相対的に弱い局面で入った。",godzillaStock4:"次の注目は B2C の AI アプリ。挙げられた例は Tesla FSD と Palantir。AI の多くはまだ B2B。ハード投資は継続。",godzillaStock5:"NVIDIA に強気でも一銘柄全力は避ける。米 W2／税務と給与＋株の集中を一体で設計。",godzillaStock6:"台湾はキャピタルゲイン税なし vs 米国課税。流動性の意味が違い、米国流をそのままコピーしない。",godzillaStockNote:"STT: faster-whisper small int8。公開 YT 出典。数値・銘柄は本人見解。候補／ウォッチ。",godzillaSourceLabel:"出典",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"YouTube インタビューを見る",godzillaThesesTitle:"核心論点",godzillaThesesLead:"10の要点。詳細は本人の自述。",godzillaThesis1Title:"時間と健康は RSU 積み増しより大事",godzillaThesis1Body:"退職目標は膨らみやすい（自述例：$3,000万→$6,000万＋住居／子供）。止まるのは体が限界のときが多い。健康な40代で旅と自由を取るのは50–60代とは違う。",godzillaThesis2Title:"米RSUはインセンティブを変える",godzillaThesis2Body:"4年ベスティングで利害一致。台湾の現金賞与は自社株を買いづらい。",godzillaThesis3Title:"ベスティング日に売却し信念銘柄へ",godzillaThesis3Body:"確定RSUは当日売却し信念銘柄（例：NVDA）へ。給与＋未確定が同一カゴにならないように。",godzillaThesis4Title:"ファンダのみ",godzillaThesis4Body:"売上／EPSトレンド。ウォール街目標は無視。ニュース雑音は害が多い。",godzillaThesis5Title:"能力圏：ハード／テック",godzillaThesis5Body:"ハード／テック——NVDA最大。PLTR、AVGO、TSMも。テック外は少ない。指数は今は小さめ、終局はほぼ指数。",godzillaThesis6Title:"税がペースを決める",godzillaThesis6Body:"高W2はCG税が重い。退職後は数年かけて個別→指数へ税負担を許容内に。カバードコールで下落緩衝。",godzillaThesis7Title:"オプションは道具",godzillaThesis7Body:"主に売り手（CC／CSP）。ロングコール／LEAPは恐慌や価格とファンダ乖離時のみ少額。プレミアム全損を許容。裸売りなし。",godzillaThesis8Title:"カバードコール：割当リスクはロール",godzillaThesis8Body:"割当リスクなら時間を延ばしてロール。小さなプレミアムのためにコアを売らない。不安なら枚数を減らす。",godzillaThesis9Title:"エントリーはトレンド待ち",godzillaThesis9Body:"きれいな決算1–2回でトレンド確認。コストが上がっても可。余資で良い会社を買い続ける。話題の噂は追わない。",godzillaThesis10Title:"米／台の観察は分ける",godzillaThesis10Body:"米CG税→長期保有寄り。台はCGなし＋取引税→回転と投機文化が強め（観察のみ）。",godzillaChecklistTitle:"作法チェック",godzillaChecklistLead:"自己点検。発注リストではない。",godzillaCheck1:"物欲を低く。「足りた」数字を無限に上げない。",godzillaCheck2:"現物が核。オプションは衛星／ヘッジ／まれなレバレッジ。",godzillaCheck3:"借入なし。ゼロを受け入れられないならオプションしない。",godzillaCheck4:"オプションは流動性の高い大型株優先。",godzillaCheck5:"終局目安：約80%広範指数、小さな業種スリーブ（＋まれな少額コール）。",godzillaCheck6:"PLTR例：前線エンジニアによるB2B収益化。商業成長が失望なら縮小。",godzillaOptionsTitle:"オプションの使い方",godzillaOptionsLead:"売り手優先。買い側は極端な乖離時のみ。",godzillaOpt1:"主力：カバードコール、キャッシュ担保プット。",godzillaOpt2:"少額ロングコール／LEAP：恐慌やファンダ乖離時。",godzillaOpt3:"プレミアムは全損あり得る。裸売りなし。",godzillaOpt4:"割当リスクはロール。コアを小さなプレミアムで売らない。",godzillaRsuTitle:"RSU・税・ローテーション",godzillaRsuLead:"インセンティブ、分散、退職後の税ペース。",godzillaRsu1:"確定RSUは当日売却し信念銘柄へ（例：NVDA）。",godzillaRsu2:"在職中は大口実現益を抑え、退職後に数年かけて個別→指数。",godzillaRsu3:"カバードコールは下落緩衝であり方向賭けではない。",godzillaTwTitle:"台湾市場の観察",godzillaTwLead:"米フレームワークと分離。税／文化の観察のみ。",godzillaTwBody:"米はCG税で長期寄り。台はCGなし＋取引税で回転と短期文化が目立つ。本ページは米枠が主軸。台は対照のみで正式スクリーナーには入れない。",godzillaGateNote:"正式スクリーナー未収録",godzillaGateDetail:"状態：候補／strategyCandidate=watch。数学ゲート閉鎖——ライブスクリーナーやペーパー取引には未接続。閲覧用。",jensenTitle:"ジェンスン・フアン（黄仁勲）",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公開講演の整理：視点、需要とムーアの法則、文化、キャッシュ現実、再発明——候補／様子見。投資助言ではありません。",jensenDisclaimer:"投資助言ではありません。Stanford Online 公開講演（約2009；YouTube 2011アップロード）の整理。論点は講演者の自述テーマ。数学ゲート未通過のため候補／様子見のみ。",jensenHeroLabel:"ジェンスン・フアン講演の要点",jensenKicker:"候補講演 · 米国テック／半導体の会社づくり",jensenTagline:"曖昧な「ビジョン」より視点。文化と再発明が長期の会社建設を支える。",jensenUsFocus:"米国テック中心",jensenTalkBadge:"公開講演",jensenListenedBadge:"聴取済・分析",jensenStockTitle:"事業／株式メモ（聴取済）",jensenStockLead:"公開 Stanford ETL 講演の音声＋音声認識（約2009；歴史的見解であり直近決算ではない）。候補／ウォッチ；投資助言ではない。",jensenStock1:"創業（1993）：PC＋3D／ゲームが大市場になると賭ける。当時VC／親は「ゲームのために会社」を疑った。",jensenStock2:"競争：コンシューマ3Dに数十〜数百社。NVIDIAは最終的に唯一のコンピュータグラフィックス企業と自述——事業の本質（半導体／Moore's Law＝競争律）理解と再発明が鍵。",jensenStock3:"プログラマブルシェーダ：成功した固定機能を自ら食う。初代は会社を危うくしたが、やらねば Moore's Law の速度で死ぬと認識。",jensenStock4:"資源配分：競争が価格を決め、CEOが参入を決める。希少資源と需要・機会費用を見る（会計費用だけではない）。",jensenStock5:"文化：計算された失敗への耐性が革新に必要。スタートアップ＝ほぼ常に倒産寸前。汎用GPU（スイスアーミーリスク）は媒体寿命を延ばし得る。",jensenStock6:"時点：現代のAI学習ブーム以前の歴史講演。今日のデータセンタ損益に1:1外挿しない。NVIDIAは登壇者の会社；候補／ウォッチ。",jensenStockNote:"STT: faster-whisper small int8 (en)。出典 YT Xn1EsFe7snQ／Stanford ETL。歴史的見解。",jensenMeta:"Stanford Online · STVP ETL · 約1:03:38 · アップロード 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"YouTube で講演を見る",jensenOpenYoutube:"YouTube でフル動画を開く",jensenEmbedTitle:"Jen-Hsun Huang: Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 関連クリップ",jensenHighlightsTitle:"講演の要点（平易）",jensenHighlightsLead:"公開講演に繰り返し現れる5テーマ。逐語録ではありません。",jensenH1Title:"曖昧な「ビジョン」ではなく視点",jensenH1Body:"誰もが視点を持つ。NVIDIA 初期の賭けは、PC＋安価な3Dがゲーム市場を開く（後に Keyhole→Google Earth にも言及）というもので、当時多くのVCには市場がほぼゼロに見えた。",jensenH2Title:"飽くなき需要とムーアの法則",jensenH2Body:"新カテゴリがまだ値付けできないとき、顧客の声を一時無視することもある。rinse-and-repeat の後、「十分良い」が媒体を殺す前に再発明（固定機能→プログラマブルシェーダ／GeForce FX の瀕死、CG言語）。",jensenH3Title:"文化：計算されたリスク",jensenH3Body:"革新には計算されたリスク、速い失敗への耐性、知的誠実さ、進路変更の意思が必要。動機は情熱と目的であり「会社を売る」ことではない。",jensenH4Title:"キャッシュとスタートアップの現実",jensenH4Body:"常に資金調達、節約、または収益化。スタートアップはほぼ常に倒産寸前。VCは完璧な事業計画より、人と十分大きな市場に賭ける。",jensenH5Title:"再発明：成功も解体して再建",jensenH5Body:"あらゆる成功は最終的に解体し再建される。フアンが語るのは長期の会社建設であり、連続フリップではない。",jensenTwTitle:"米／台の分離（文脈のみ）",jensenTwLead:"市場の主軸は米国テック／半導体の会社建設。台湾はサプライチェーン文脈のみ——台湾株の銘柄創作なし。",jensenTwBody:"米半導体／計算プラットフォームとしての NVDA は、台湾のファウンドリと OSAT 生態系と強く結ばれる——産業文脈の注記のみ。台湾銘柄リストなし、正式スクリーナー未接続。",jensenGateNote:"正式スクリーナー未収録",jensenGateDetail:"状態：候補／strategyCandidate=watch。数学ゲート閉鎖——ライブスクリーナーやペーパー取引には未接続。閲覧用。",jensenWatchCta:"YouTube で視聴",jensenEmbedBlockedNote:"この講演は所有者の設定により YouTube でのみ視聴できます（他サイトへの埋め込みは無効）。",optionsTitle:"米国オプション",optionsLead:"McMillan の戦略ファミリーを軸に、ボラと損益形→公開 Yahoo チェーンで学習。投資助言ではありません。",optionsDisclaimer:"投資助言ではありません。オプションは高リスク。教育と公開データのみ。",optionsBookBadge:"この本",optionsBookCite:"主要参考文献",optionsBookLead:"Lawrence G. McMillan『選択権策略完全手冊』第5版：見通し＋ボラで戦略族へ（独自要約・原文なし）。",optionsBookFallbackTitle:"McMillan オプション戦略ハンドブック",optionsGotoResearch:"研究ライブラリの条目へ",optionsUsOnly:"米国のみ",optionsQualityTitle:"原資産の軽い財務チェック",optionsQualityLead:"副次フィルタ：PER、PBR、負債、ROE、売上／利益トレンド。欠落は資料不足。",optionsViewTitle:"オプション観点（McMillan）",optionsViewLead:"公開チェーン：ATM IV、実現ボラ、出来高偏り。戦略族は教育用。",optionsMcmillanFirst:"先にボラ状態と損益形を合わせ、その後でファミリーを選ぶ。",optionsPe:"PER",optionsPb:"PBR",optionsDebt:"負債／資本",optionsRoe:"ROE",optionsRevTrend:"売上トレンド",optionsEarnTrend:"利益トレンド",optionsGate:"品質ゲート",optionsGatePass:"通過",optionsGateWatch:"注視",optionsGateFail:"弱め",optionsGateIncomplete:"資料不足",optionsDataMissing:"資料不足",optionsForwardPe:"予想PER",optionsTrendUp:"上昇 約{pct}%",optionsTrendDown:"低下 約{pct}%",optionsTrendFlat:"横ばい 約{pct}%",optionsAtmIv:"ATM インプライド",optionsHv:"歴史ボラ（約1か月）",optionsIvHv:"IV／HV",optionsVolRegime:"ボラ状態",optionsRegimeIvRich:"IV高め",optionsRegimeIvCheap:"IV安め",optionsRegimeIvFair:"おおむね均衡",optionsRegimeIvOnly:"IVのみ",optionsCallPutVol:"コール／プット出来高",optionsAtmStrike:"近ATM行使価格",optionsExpiry:"満期",optionsSkewPutHeavy:"プット寄り",optionsSkewCallHeavy:"コール寄り",optionsSkewBalanced:"おおむね均衡",optionsEduSetups:"戦略ファミリー（教育）",optionsEduSetupsLead:"見通し＋ボラで選ぶ。緑は現状の IV/HV とよく議論される組（助言ではない）。",optionsSetupCoveredCall:"カバードコール",optionsSetupCoveredCallBody:"株を持ちコールを売る。プレミアムを得るが上昇は頭打ち。",optionsSetupCoveredCallWarn:"利益に天井。株の下落リスクは残る。",optionsSetupProtectivePut:"プロテクティブプット",optionsSetupProtectivePutBody:"株＋プット買い＝保険。下値に床、だが保険料がかかる。",optionsSetupProtectivePutWarn:"保険コストがリターンを削る。IVが高いと高い。",optionsSetupVertical:"バーティカル",optionsSetupVerticalBody:"同満期・異行使価格で損益を枠内に限定。",optionsSetupVerticalWarn:"方向ミスでも損失。ただし上限あり。",optionsSetupCalendar:"カレンダー／ダイアゴナル",optionsSetupCalendarBody:"異満期で時間やボラ変化の見方を表す。",optionsSetupCalendarWarn:"時間とボラに敏感。スポット移動で形が変わる。",optionsSetupStraddle:"ストラドル／ストラングル",optionsSetupStraddleBody:"両側で「大きく動く」か「動き不足」に賭ける。",optionsSetupStraddleWarn:"買いは大きな値動きが必要。売りは両側リスク。",optionsSetupButterfly:"バタフライ",optionsSetupButterflyBody:"中心付近にピン留めを期待。利益ゾーンは狭い。",optionsSetupButterflyWarn:"スイートスポットが薄い。外れると最大損に近い。",optionsSetupVolAligned:"現状ボラとよくセットで語られる",optionsSetupVolNotAligned:"現状ボラとはやや遠い（学習は可）",optionsRiskShape:"損益の形（平易）",optionsNoSetups:"戦略メモなし",optionsPickTicker:"上のティッカーを選んでください",optionsChainBlocked:"オプションチェーンを取得できません",optionsPartialBlocker:"一部フィールド不足",optionsRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",optionsLoadError:"オプションスナップショットを読めません（{msg}）",optionsEmpty:"米国サンプルなし — 先に fetch-us-options",optionsGlossaryTitle:"小さな用語集（式なし）",optionsTermDelta:"デルタ（方向感）",optionsDefDelta:"株が動くときオプションがどれだけ付きやすいか。1や−1に近いほど連動が強い。",optionsTermIv:"インプライドボラ IV",optionsDefIv:"市場が織り込む将来の揺れ。高いほどオプションは高くなりやすい。",optionsTermHv:"歴史ボラ HV",optionsDefHv:"直近の実際の値動きの大きさ。IVと比較する。",optionsTermAtm:"ATM（ニアマネー）",optionsDefAtm:"現値に最も近い行使価格。ボラの温度計によく使う。",optionsTermSkew:"出来高の偏り",optionsDefSkew:"コールとプットのどちらが多いか。粗い保険／追撃のヒント。",optionsTermProb:"確率（教育）",optionsDefProb:"「多め／少なめ」の直感のみ。結果保証や個人勝率は出さない。",researchLead:"書籍と論文：タイトル → 要約 → 要点のやり方 → 戦略候補の可否",researchMathGateBanner:"戦略への正式採用は数学ゲート通過が必要（未通過）— 候補のみ",researchMathGate:"数学ゲート",researchMathGateDefault:"数学ゲート未通過",researchFormulas:"プログラム可能な式",researchTakeaways:"要点のやり方",researchNoTakeaways:"要点なし",researchSources:"出典",researchFilters:"フィルター",researchFilterAll:"すべて",researchType:"種類",researchTypeBook:"書籍",researchTypePaper:"論文",researchTypePodcast:"ポッドキャスト",researchMarketBoth:"米＋台",researchStrategy:"戦略候補",researchCandYes:"候補採用",researchCandNo:"不採用",researchCandWatch:"様子見",researchStatusCandidate:"候補",researchStatusDeferred:"保留",researchStatusAdopted:"採用",researchStatusRejected:"除外",researchCounts:"書籍 {books} · 論文 {papers} · Podcast {podcasts} · 表示 {total}",researchEmpty:"この条件に一致する項目はありません",researchNoFormulas:"式なし",researchLoadError:"研究ライブラリを読み込めません（{msg}）",researchShelfFilters:"書棚分類",researchShelfCoreInvesting:"コア投資クラシック",researchShelfValueInvesting:"バリュー投資",researchShelfBusiness:"ビジネス／経営",researchShelfLifePartner:"人生とパートナーの知恵",researchShelfOptions:"オプション／デリバティブ",researchShelfRecentReads:"最近の読書・推薦",researchShelfFiConcepts:"必須のマネーリテラシー",researchShelfMoneyValues:"お金の価値観",researchShelfInvestingBasics:"投資入門",researchShelfAssetAllocation:"資産配分",researchShelfFinancials:"財務諸表分析",researchShelfMarketAnalysis:"投資分析・市場攻略",researchShelfEconAnalysis:"経済分析",researchShelfPsych:"投資心理／ランダム／人間性",researchShelfBiographies:"伝記",researchShelfAdjacent:"その他／隣接",todayPicks:"本日の選株",market:"市場",hot:"相場",marketQuotes:"相場気配",macroTitle:"米株重要日程",macroTzEt:"時刻・米東部 ET",macroAsOf:"更新",macroStale:"データが古い（前回成功分を表示）",macroToday:"本日",macroNext:"次",macroHighImpact:"高影響",macroEmpty:"直近の高影響イベントなし（または未更新）",macroLoadError:"米株重要日程を読み込めません（{msg}）",liveQuotesLive:"リアルタイム",liveQuotesStale:"気配が古い（前回成功分を表示）",liveQuotesStaleShort:"遅延",liveQuotesPending:"リアルタイム接続中…",liveQuotesClock:"気配",macroEvent_fomcDecision:"FOMC 金利決定",macroEvent_fomcMinutes:"FOMC 議事要旨",macroEvent_cpi:"CPI",macroEvent_ppi:"PPI",macroEvent_pce:"PCE／コア PCE",macroEvent_nfp:"非農業部門雇用者数",macroEvent_joblessClaims:"新規失業保険申請",macroEvent_gdp:"GDP",macroEvent_retailSales:"小売売上高",macroEvent_ismMfg:"ISM 製造業",macroEvent_ismServices:"ISM 非製造業",macroEvent_jolts:"JOLTS",twMacroTitle:"台株重要日程",twMacroTz:"時刻・台北時間",twMacroEmpty:"直近の高影響台株イベントなし（または未更新）",twMacroLoadError:"台株重要日程を読み込めません（{msg}）",twMacroEvent_cbcDecision:"CBC 政策会合",twMacroEvent_dgbasCpi:"CPI",twMacroEvent_dgbasPpi:"PPI／物価指数",twMacroEvent_dgbasUnemployment:"失業率",twMacroEvent_dgbasGdpFlash:"GDP 速報",twMacroEvent_dgbasGdp:"GDP／成長率",twMacroEvent_dgbasForecast:"経済予測",twMacroEvent_moeaExportOrders:"輸出受注",twMacroEvent_moeaIndustrialProd:"工業生産",twMacroEvent_twseHoliday:"休場",usStock:"米国株",twStock:"台湾株",usList:"米国リスト",twList:"台湾リスト",usTop:"米国 Top",twTop:"台湾 Top",emptyTop:"{market} の Top 候補はありません",ticker:"銘柄",name:"名称",price:"価格",dayPct:"日次%",priorClose:"前日比",priorCloseFull:"前日終値比",pct5d:"5日",pct1m:"約1ヶ月",volRatio:"出来高比",ma:"移動平均",screening:"スクリーニング",reason:"理由",details:"詳細",business:"事業",risk:"リスク",observe:"観察",dataIncomplete:"データ不足",intraday:"場中",taipeiClose:"台北終値",taiex:"台湾加重 TAIEX",otc:"櫃買",loadError:"データを読み込めません（{msg}）。静的サーバーと data/latest.json を確認してください。",langLabel:"言語",paper:"模擬",paperMissing:"模擬ポートフォリオがありません。npm run paper を実行してください。",paperDisclaimer:"累積模擬口座（{date} 起） · 毎日リセットしません · シグナル即約定 · 実注文ではありません",paperRules:"ルール（市場別独立口座）",paperRuleTw:"台湾元本 NT$3,000,000 · 単元取引",paperRuleUs:"米国元本 US$100,000 · 1株から",paperRuleBuy:"買：リスト·リスク1%·ストップ1.5%·単銘柄≤8% · 即約定",paperRuleSell:"売：損切−3% · 利確+12%半分 · SMA20割れかつ日−2%超 · リスト外かつ損失 · ストップ高翌日−5%",paperTabTw:"台湾口座 · NT$",paperTabUs:"米国口座 · US$",paperBookTw:"台湾帳簿（NT$）",paperBookUs:"米国帳簿（US$）",principal:"元本",cash:"現金",equity:"純資産（ポジション＋現金）",totalPnl:"総損益",totalPnlPct:"総損益％",weekPerf:"週次",monthPerf:"月次",quarterPerf:"四半期",yearPerf:"年次",sinceInception:"開始以来",noTradesToday:"本日この種別の約定はありません（模擬）",noPositions:"保有なし",buy:"買",sell:"売",shares:"株",qtyShares:"株数",positions:"現在のポジション",position:"ポジション",avgCost:"平均単価",mark:"時価",mktValue:"時価総額",dayPnl:"日次損益",costBasis:"取得総額",weightPct:"比率％",posScrollHint:"左右にスクロールで全列",unrealizedPnl:"含み損益",unrealizedPct:"含み％",recentTrades:"約定（直近40）",paperSession:"{date} · {inception} から累積 · シグナル即約定",reasonScreenBuy:"リスト新規",reasonAdd:"追加買い",reasonStop:"損切り",reasonTakeProfit:"利確",reasonMomentumBreak:"モメンタム悪化",reasonOffList:"リスト外",reasonLimitUpChase:"ストップ高追撃解消",stopLoss:"損切り",takeProfit:"利確",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"パフォーマンス",qty:"数量",note:"備考",strategyScreen:"戦略スクリーナー",strategyLead:"米／台ヒットを分けて表示 · データ不足は「不足」",strategyLoading:"戦略を読み込み中…",strategyEmpty:"戦略データがありません。npm run strategies を実行してください。",strategyLoadError:"戦略を読み込めません（{msg}）。npm run strategies を確認してください。",strategyList:"戦略一覧",strategyCat:"カテゴリ",hitCount:"ヒット",hitTitle:"ヒット数",strategyDetails:"詳細 · 戦略説明",conditions:"条件",results:"結果",copyJson:"JSON をコピー",exportCsv:"この戦略を CSV 出力",exportJson:"JSON 出力",copied:"コピー済み",noHitsExport:"本日この戦略のヒット行はありません",incomplete:"不足",hitsTotal:"{n}件",twOnlyHint:"台湾株のみ",hitMarket:"ヒット市場",noHits:"本日ヒットなし",dataInsufficient:"データ不足",calibTitle:"キャリブレーション",incompleteFilters:"未検査フィルター（通過扱いしない）：",sessionTwse:"TWSE session",ohlcvBar:"OHLCV バー",generated:"生成",universeTw:"台湾ユニバース",universeUs:"米国ユニバース",cat精選:"厳選",cat價量:"価格/出来高",cat籌碼:"需給",cat財務:"財務",cat大師:"マスター",cat週期:"サイクル",cat技術:"テクニカル",cat基本:"ファンダ",cat綜合:"総合",addWatchlist:"ウォッチ追加",watchlistAdded:"{ticker} を追加しました",watchlistExists:"{ticker} は登録済み",copyFailed:"コピー失敗",csvDownloaded:"CSV を保存しました",csvBlocked:"ダウンロード阻害 — データURIを開きます",backtestSoon:"バックテスト：未開放",backtestHint:"バックテストエンジン未開放（偽結果なし）",regimeToday:"本日の市場レジーム（米／台は別管理）",psychologyPhase:"心理フェーズ",cycleStance:"サイクル姿勢",liquidityBias:"流動性バイアス",temperatureScore:"市場温度",sizeMult:"サイズ倍率",regimeTags:"レジームタグ",dataGaps:"データ欠落",marketRegime:"市場レジーム",enum_euphoric:"陶酔",enum_late_optimism:"後期楽観",enum_mid_cycle:"中期",enum_cautious_recovery:"慎重な回復",enum_despondent:"絶望",enum_panic:"パニック",enum_defensive:"守備的",enum_selective:"厳選",enum_balanced:"均衡",enum_constructive:"建設的",enum_aggressive:"積極",enum_stabilize_first:"まず安定",enum_risk_off:"リスクオフ",enum_risk_on:"リスクオン",enum_neutral:"中立",logicTitle:"選別ロジック",logicSubtitle:"レジーム→スクリーニング→戦略→降格→理由→サイジング — 監査可能な数式",logicNoRegime:"市場レジーム未取得（次回スキャン待ち）。",logicStep1:"市場レジーム",logicStep1Lead:"米／台を別ダイヤルで先に決め、その後銘柄を選別。Kostolany 位相 × Marks 温度 × 金利流動性。",logicStep1Caption:"位相 → スクリーニング姿勢 → サイズ倍率（STANCE_SIZE_MULT）",logicRatesR2:"R2：^TNX が 20 日で +0.25pp 以上 → 流動性は防御寄り（価格が中立でも）。",logicRatesR3:"R3：利回りが 60 日で −0.25pp 以下 → より積極ダイヤルを許容（陶酔以外）。",logicRatesSeparate:"硬規則：dial_US と dial_TW は分離。単一の「世界ムード」にしない。",logicStep2:"数式スクリーン（A／B）",logicStep2Lead:"RS・モメンタム・SMA・出来高。閾値はサイクル姿勢で変動。",logicScreenA:"スクリーン A · モメンタム／RS",logicScreenABalanced:"均衡：日RS≥0.5pp または日≥1.5%；または5日≥3%；または1月≥6%かつ>SMA20；または両MAで5日≥0／RS≥0。",logicScreenASelective:"厳選：>SMA50 かつ（RS≥0.5 または5日≥3% または1月≥6%かつSMA20）。",logicScreenADefensive:"守備的：SMA20+SMA50、かつ（RS≥0.8 または5日≥4%）、出来高≥1.0（欠損は可）；1月≥12%かつ出来高<0.8 → 除外。",logicScreenAAggressive:"積極／建設的：RS／日／5日／1月を緩和；SMA200 下の firm-hands 可（1月<0かつ出来高≥1.4）。建設的は SMA20 または SMA200 も必要。",logicScreenAStabilize:"まず安定：>SMA20 必須、かつ RS≥1.0pp または出来高≥1.5。",logicScreenB:"スクリーン B · 出来高",logicScreenBVol:"出来高比＝当日／20日平均。下限：守備的≥1.0；積極≥1.1；他≥1.2。",logicScreenBMom:"A 補完：A未達でも1月≥8%かつSMA20+SMA50（まず安定以外）→ A 付与。",logicScore:"順位スコア",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"出来高≥1.2 加点（上限約8×0.6）；<0.4 で −0.5；その後レジームで調整。",logicStep3:"XQ 戦略",logicXqLead:"日次リストと並行：条件ヒット（価格/出来高・需給・財務・マスター・サイクル）。欠落は「不足」—捏造しない。",logicXqPriceVol:"価格/出来高：移動平均ブル、超短期など（OHLCV）。",logicXqFlow:"需給：法人同期など（公開単元閾値）。",logicXqFund:"財務：利益増加、PE／利益率など公開欄。",logicXqMasters:"マスター：リンチ／グレアム／バフェット系の計算可能代理。",logicXqCycle:"サイクル：Kostolany／市場レジームパック（当日の米台ダイヤル）。",logicOpenStrategies:"戦略ページを開く",logicStep4:"順位の降格／加点",logicStep4Lead:"scoreAdjust：薄い高RS、firm-hands、パニック後の安定で加減点。",logicDemoteHot:"守備的／厳選：1月≥8%かつ出来高<0.8 → −2.5；出来高<0.7かつ日>+2% → −1.2；両MA欠で −1.5。",logicDemoteThin:"K5：強いRSでも薄い出来高 → 降格／積極バケット外。",logicPromoteFirm:"aggressive／constructive：弱含み＋出来高増＋>SMA200（firm-hands）→ +2.2；序盤の上昇日出来高 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；>SMA20 なら +1.5。",logicListSize:"リスト長：守備的≈0.55×；厳選≈0.75×；まず安定≈0.45×；積極+2（上限14）；基準12。",logicStep5:"「なぜ」の組み立て",logicStep5Lead:"why 欄は検証済みフィールドの読みやすい結合 — ブラックボックスではない。",logicWhyRs:"日次% + 指数対比（米：S&P；台：TAIEX）pp。",logicWhyMom:"5日% と 約1か月%。",logicWhyVol:"出来高比≥1.2 のときのみ出来高文を追加。",logicWhySma:"SMA20／50／200 の上抜け状態（両MA優先）。",logicWhyRegime:"レジーム注記または姿勢／心理フェーズタグを付記。",logicStep6:"ペーパー・サイジング規律",logicStep6Lead:"ペーパー口座はプロセス検証用 — 実注文ではない。レジームサイズ倍率と固定リスク式で制約。",logicPaperCapital:"元本：台湾 NT$3,000,000（単元）；米国 US$100,000（1株〜）。",logicPaperBuy:"買い：リスト（observeのみは原則回避）；リスク＝資本×1%；ストップ≈価格×1.5%（出来高≥3→2.5%）；1銘柄≤資本8%。",logicPaperSizeMult:"サイズ倍率（0.3–1.35×）で当日の積極度を表示；リスト長と連動。",logicPaperSell:"売り：損切−3%；利確+12%半減；SMA20割れかつ日<−2%；リスト外かつ含み損；ストップ高追撃の翌日−5%。",logicOpenPaper:"ペーパーを開く",logicFootnote:"透明なスクリーニング説明のための合成 — 投資助言ではない。公開の運用代理のみ；著作権保護の本文は複製しない。",condPass:"条件",condFail:"未達",condSkip:"省略",pe:"PER",opMargin:"営業利益率",grossMargin:"粗利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自己売買",maBull:"移動平均ブル",amplitude:"振幅",zhang:"単元",limitUp:"ストップ高",momentum:"モメンタム",metricPrice:"価格",metricDayPct:"日次%",metricVolRatioYday:"出来高比(昨)",metricVolToday:"出来高(単元)",metricDebt:"負債比率%",metricDirector:"役員持株%",metricOpQ:"直近四半期営業利益率%",metricSource:"出典",foreign1d:"外資1日(単元)",trust1d:"投信1日(単元)",dealer1d:"自己1日(単元)",foreign5d:"外資5日(単元)",trust5d:"投信5日(単元)",dealer5d:"自己5日(単元)"},Et={"zh-Hant":wt,en:Ms,"zh-Hans":Rs,ja:Ns},Bs=/\b(euphoric|late_optimism|mid_cycle|cautious_recovery|despondent|panic|defensive|selective|balanced|constructive|aggressive|stabilize_first|risk_off|risk_on|neutral)\b/g;function G(e){if(e==null||e==="")return s("dataInsufficient");const t=String(e),n=`enum_${t}`,o=t.includes("_")?t.replace(/_/g," "):t;return s(n,o.replace(/\b\w/g,i=>i.toUpperCase()))}function Ds(e){const t=String(e||"").toLowerCase();return["defensive","selective","balanced","constructive","aggressive","stabilize_first"].includes(t)?t.replace(/_/g,"-"):"neutral"}function Os(e){return e==null||e===""?"":String(e).replace(Bs,t=>G(t))}function s(e,t,n){let o,i=n;t&&typeof t=="object"&&!Array.isArray(t)?i=t:typeof t=="string"&&(o=t);let r=(Et[_]||Et[Rt])[e]??Et[Rt][e]??o??e;if(i)for(const[c,d]of Object.entries(i))r=r.replace(new RegExp(`\\{${c}\\}`,"g"),String(d));return r}function Is(){const e=Ja.map(t=>`<option value="${t.id}"${t.id===_?" selected":""}>${t.label}</option>`).join("");return`
    <label class="lang-switch" title="${s("langLabel")}">
      <span class="lang-switch-label">${s("langLabel")}</span>
      <select class="lang-select" data-lang-select aria-label="${s("langLabel")}">
        ${e}
      </select>
    </label>`}function Hs(e,t){var o;const n=(o=e==null?void 0:e.querySelector)==null?void 0:o.call(e,"[data-lang-select]");n&&(n.value=_,n.addEventListener("change",()=>{js(n.value)}))}function a(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function v(e,t){return a(s(e,t))}const qs="./data/paper-portfolio.json";function se(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function it(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(t)}%`}function Qa(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString(L(),{minimumFractionDigits:t,maximumFractionDigits:t})}function Za(e){return e==="USD"?"US$":e==="TWD"?"NT$":""}function Q(e,t){if(e==null||Number.isNaN(e))return"—";const n=t==="TWD"?0:2;return`${Za(t)}${Qa(e,n)}`}function lt(e,t){if(e==null||Number.isNaN(e))return"—";const n=t==="TWD"&&e>=100?0:2;return`${Za(t)}${Qa(e,n)}`}function es(e){return{"screen-buy":s("reasonScreenBuy"),add:s("reasonAdd"),stop:s("reasonStop"),"take-profit":s("reasonTakeProfit"),"momentum-break":s("reasonMomentumBreak"),"off-list":s("reasonOffList"),"limit-up-chase":s("reasonLimitUpChase")}[e]||e||""}function Be(e){return e?`
    <div class="paper-win">
      <div class="w-label">${e.sinceInception?v("sinceInception",s("sinceInception")):a(e.label||"")}</div>
      <div class="w-val ${se(e.pct)}">${it(e.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function Fs(e,t){return e.length?e.map(n=>{var o;return`
      <tr>
        <td><span class="ticker">${a(n.ticker)}</span></td>
        <td class="name-cell">${a(n.name||"")}</td>
        <td class="num">${(o=n.qty)==null?void 0:o.toLocaleString(L())}</td>
        <td class="num">${lt(n.price,t)}</td>
        <td><span class="badge reason ${a(n.reason||"")}">${a(es(n.reason))}</span></td>
        <td class="why-cell">${a(n.reasonText||"")}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${a(s("noTradesToday"))}</td></tr>`}function Ws(e){return e.dayPct==null||Number.isNaN(e.dayPct)||e.mark==null||e.qty==null?null:e.mark*e.qty*e.dayPct/100}function _s(e,t,n){if(!e.length)return`<tr><td colspan="11" class="empty-cell">${a(s("noPositions"))}</td></tr>`;const i=n>0?n:e.reduce((l,r)=>l+(r.mark||0)*(r.qty||0),0);return e.map(l=>{var y;const r=(l.mark||0)*(l.qty||0),c=(l.avgCost||0)*(l.qty||0),d=(l.mark-l.avgCost)*l.qty,u=l.avgCost?(l.mark-l.avgCost)/l.avgCost*100:0,p=Ws(l),g=i>0?r/i*100:null,h=l.name?a(l.name):"";return`
      <tr class="pos-row" data-lq="pos" data-lq-sym="${a(l.ticker)}"
          data-ticker="${a(l.ticker)}"
          data-lq-qty="${l.qty??""}" data-lq-avg="${l.avgCost??""}" data-lq-ccy="${a(t)}"
          data-lq-mark="${l.mark??""}" data-lq-daypct="${l.dayPct??""}"
          tabindex="0">
        <td class="pos-sym">
          <span class="ticker">${a(l.ticker)}</span>
          ${h?`<span class="pos-name">${h}</span>`:""}
        </td>
        <td class="num">${(y=l.qty)==null?void 0:y.toLocaleString(L())}</td>
        <td class="num" data-lq-field="price">${lt(l.mark,t)}</td>
        <td class="num">${Q(r,t)}</td>
        <td class="num ${se(p)}">${p==null?"—":Q(p,t)}</td>
        <td class="num ${se(l.dayPct)}" data-lq-field="dayPct">${it(l.dayPct)}</td>
        <td class="num ${se(d)}">${Q(d,t)}</td>
        <td class="num ${se(u)}">${it(u)}</td>
        <td class="num">${Q(c,t)}</td>
        <td class="num">${lt(l.avgCost,t)}</td>
        <td class="num">${g==null?"—":`${g.toFixed(2)}%`}</td>
      </tr>`}).join("")}function Us(e,t,n){const o=t.currency,i=s(e==="TW"?"paperBookTw":"paperBookUs"),l=Q(t.startCash,o),r=(n==null?void 0:n.totalPnl)??t.equity-t.startCash,c=(n==null?void 0:n.totalPnlPct)??(t.startCash?(t.equity-t.startCash)/t.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${a(i)}</h3>
      <p class="paper-start">${v("principal",s("principal"))} ${l}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">${a(s("cash"))}</div>
          <div class="k-val" data-lq-kpi="cash">${Q(t.cash,o)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${v("position",s("equity"))}</div>
          <div class="k-val" data-lq-kpi="equity">${Q(t.equity,o)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${a(s("totalPnl"))}</div>
          <div class="k-val ${se(r)}" data-lq-kpi="pnl">${Q(r,o)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${a(s("totalPnlPct"))}</div>
          <div class="k-val ${se(c)}" data-lq-kpi="pnlPct">${it(c)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${a(s("weekPerf"))}</div>
          ${Be(n==null?void 0:n.week)}
        </div>
        <div>
          <div class="win-name">${a(s("monthPerf"))}</div>
          ${Be(n==null?void 0:n.month)}
        </div>
        <div>
          <div class="win-name">${a(s("quarterPerf"))}</div>
          ${Be(n==null?void 0:n.quarter)}
        </div>
        <div>
          <div class="win-name">${a(s("yearPerf"))}</div>
          ${Be(n==null?void 0:n.year)}
        </div>
      </div>
    </article>`}function Vs(e,t){return e.length?e.map(n=>{var i;const o=n.side==="SELL"?s("sell"):s("buy");return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${a(n.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${a(n.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${a(o)} ${(i=n.qty)==null?void 0:i.toLocaleString(L())} ${a(s("shares"))}</div>
            <div style="font-family:var(--mono)">${lt(n.price,t)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${a(n.reason||"")}">${a(es(n.reason))}</span>
        </div>
        ${n.reasonText?`<p class="lc-why">${a(n.reasonText)}</p>`:""}
      </div>`}).join(""):`<div class="list-card empty-card">${a(s("noTradesToday"))}</div>`}function jt(e,t,n){return`
    <div class="paper-table-block">
      <h4>${a(e)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${v("ticker",s("ticker"))}</th>
              <th>${a(s("name"))}</th>
              <th>${a(s("qty"))}</th>
              <th>${a(s("price"))}</th>
              <th>${a(s("reason"))}</th>
              <th>${a(s("note"))}</th>
            </tr>
          </thead>
          <tbody>${Fs(t,n)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${Vs(t,n)}</div>
    </div>`}function Gs(e,t,n){return`
    <div class="paper-table-block paper-pos-block">
      <div class="pos-block-head">
        <h4>${a(s("positions"))}</h4>
        <span class="pos-scroll-hint">${a(s("posScrollHint"))}</span>
      </div>
      <div class="pos-scroll" role="region" aria-label="${a(s("positions"))}">
        <table class="pos-table">
          <thead>
            <tr>
              <th class="pos-sym">${v("ticker",s("ticker"))}</th>
              <th class="num">${a(s("qty"))}</th>
              <th class="num">${a(s("mark"))}</th>
              <th class="num">${a(s("mktValue"))}</th>
              <th class="num">${a(s("dayPnl"))}</th>
              <th class="num">${a(s("dayPct"))}</th>
              <th class="num">${a(s("unrealizedPnl"))}</th>
              <th class="num">${a(s("unrealizedPct"))}</th>
              <th class="num">${a(s("costBasis"))}</th>
              <th class="num">${a(s("avgCost"))}</th>
              <th class="num">${a(s("weightPct"))}</th>
            </tr>
          </thead>
          <tbody>${_s(e,t,n)}</tbody>
        </table>
      </div>
    </div>`}function ya(e,t,n,o,i,l){if(!t)return"";const r=t.currency,c=[...t.trades||[]].sort((y,b)=>y.date<b.date?1:y.date>b.date?-1:0),d=c.filter(y=>y.date===o),u=d.filter(y=>y.side==="BUY"),p=d.filter(y=>y.side==="SELL"),g=c.slice(0,40),h=l;return`
    <div class="paper-panel ${i?"active":""}" id="paper-panel-${e}" role="tabpanel"
         data-lq-book="${a(e)}" data-lq-cash="${t.cash??""}"
         data-lq-start="${t.startCash??""}" data-lq-ccy="${a(r)}">
      ${Us(e,t,n)}
      <p class="paper-session-note">${a(s("paperSession",{date:o||"—",inception:h}))}</p>
      ${jt(`${s("buy")} ${o||""}`,u,r)}
      ${jt(`${s("sell")} ${o||""}`,p,r)}
      ${Gs(t.positions||[],r,t.positionsValue)}
      ${jt(s("recentTrades"),g,r)}
    </div>`}function Js(e){var r,c;if(!e||!e.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${v("paperTrade",s("paper"))}</h2>
        <p class="paper-missing">${a(s("paperMissing"))}</p>
      </section>`;const t=e.books.TW,n=e.books.US;let i=(e.asOf||"").slice(0,10);try{i=new Date(e.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const l=e.startDate||(t==null?void 0:t.startDate)||(n==null?void 0:n.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${v("paperTrade",s("paper"))}</h2>
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
      ${ya("TW",t,(r=e.metrics)==null?void 0:r.TW,i,!0,l)}
      ${ya("US",n,(c=e.metrics)==null?void 0:c.US,i,!1,l)}
    </section>`}function Ys(e){const t=e.querySelectorAll(".paper-tab-btn");t.forEach(n=>{n.addEventListener("click",()=>{const o=n.dataset.paperTab;t.forEach(i=>{const l=i.dataset.paperTab===o;i.classList.toggle("active",l),i.setAttribute("aria-selected",l?"true":"false")}),e.querySelectorAll(".paper-panel").forEach(i=>{i.classList.toggle("active",i.id===`paper-panel-${o}`)})})})}async function Xs(){try{const e=await fetch(qs);return e.ok?await e.json():null}catch{return null}}const ts={defensive:.5,selective:.8,balanced:1,constructive:1.1,aggressive:1.35,stabilize_first:.3},Ks={euphoric:"defensive",late_optimism:"selective",mid_cycle:"balanced",cautious_recovery:"constructive",despondent:"aggressive",panic:"stabilize_first"};function as(e){return e==null||Number.isNaN(e)?"—":`${Number(e).toFixed(2)}×`}function Qs(e){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${Number(e).toFixed(2)}`}function Jt(e){if(!e)return`<span class="stance-badge stance-neutral">${a(s("dataInsufficient"))}</span>`;const t=Ds(e),n=G(e);return`<span class="stance-badge stance-${t}">${a(n)}</span>`}function De(e,t){return`<div class="logic-metric">
    <span class="k">${a(e)}</span>
    <span class="v">${t}</span>
  </div>`}function rt(e,t,{detailed:n=!1}={}){if(!t)return"";const o=t.incomplete?" incomplete":"",i=t.psychologyPhase,l=t.cycleStance,r=t.liquidityBias,c=i?G(i):s("dataInsufficient"),d=r?G(r):s("dataInsufficient"),u=Qs(t.temperatureScore),p=as(t.sizeMult??ts[l]),g=Array.isArray(t.dataGaps)&&t.dataGaps.length?`<div class="regime-gaps">${a(s("dataGaps"))}: ${a(t.dataGaps.slice(0,5).join(", "))}${t.dataGaps.length>5?"…":""}</div>`:"",h=n&&Array.isArray(t.implications)&&t.implications.length?`<ul class="logic-impl">${t.implications.slice(0,3).map(b=>`<li>${a(Os(b))}</li>`).join("")}</ul>`:"",y=n?`<div class="logic-metrics" role="list">
        ${De(s("psychologyPhase"),a(c))}
        ${De(s("liquidityBias"),a(d))}
        ${De(s("temperatureScore"),a(u))}
        ${De(s("sizeMult"),a(p))}
      </div>`:`<div class="regime-meta">
        <span>${a(s("psychologyPhase"))} <strong>${a(c)}</strong></span>
        <span>${a(s("liquidityBias"))} <strong>${a(d)}</strong></span>
      </div>`;return`<div class="regime-chip${n?" logic-regime-chip":""}${o}">
    <div class="regime-chip-top">
      <div class="label">${a(e)} · ${a(s("marketRegime"))}</div>
      ${Jt(l)}
    </div>
    ${y}
    ${h}
    ${g}
  </div>`}function Zs(e){return!e||!e.us&&!e.tw?`<p class="logic-muted">${a(s("logicNoRegime"))}</p>`:`<div class="regime-strip logic-regime-live" aria-label="${a(s("regimeToday"))}">
    ${rt("US",e.us,{detailed:!0})}
    ${rt("TW",e.tw,{detailed:!0})}
  </div>`}function en(e){return!e||!e.us&&!e.tw?"":`<div class="regime-strip" aria-label="${a(s("marketRegime"))}">
    ${rt("US",e.us,{detailed:!1})}
    ${rt("TW",e.tw,{detailed:!1})}
  </div>`}function ce(e,t,n){return`<section class="logic-step" id="logic-step-${e}">
    <header class="logic-step-head">
      <span class="logic-step-num" aria-hidden="true">${e}</span>
      <h3 class="logic-step-title">${a(t)}</h3>
    </header>
    <div class="logic-step-body">${n}</div>
  </section>`}function tn(e){return`<div class="logic-table-wrap"><table class="logic-table">
    <tbody>
      ${e.map(([t,n])=>`<tr><th scope="row">${a(t)}</th><td>${n}</td></tr>`).join("")}
    </tbody>
  </table></div>`}function X(e){return`<ul class="logic-bullets">${e.map(t=>`<li>${t}</li>`).join("")}</ul>`}function an(e){const t=e==null?void 0:e.marketRegime,n=Object.entries(Ks).map(([g,h])=>[G(g),`${Jt(h)} <span class="logic-mult">${a(as(ts[h]))}</span>`]),o=X([a(s("logicScreenABalanced")),a(s("logicScreenASelective")),a(s("logicScreenADefensive")),a(s("logicScreenAAggressive")),a(s("logicScreenAStabilize"))]),i=X([a(s("logicScreenBVol")),a(s("logicScreenBMom"))]),l=X([a(s("logicScoreFormula")),a(s("logicScoreSma")),a(s("logicScoreVol"))]),r=X([a(s("logicDemoteHot")),a(s("logicDemoteThin")),a(s("logicPromoteFirm")),a(s("logicDemotePanic"))]),c=X([a(s("logicWhyRs")),a(s("logicWhyMom")),a(s("logicWhyVol")),a(s("logicWhySma")),a(s("logicWhyRegime"))]),d=`
    <p class="logic-lead">${a(s("logicXqLead"))}</p>
    ${X([a(s("logicXqPriceVol")),a(s("logicXqFlow")),a(s("logicXqFund")),a(s("logicXqMasters")),a(s("logicXqCycle"))])}
    <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="strategies">${a(s("logicOpenStrategies"))}</button></p>
  `,u=X([a(s("logicPaperCapital")),a(s("logicPaperBuy")),a(s("logicPaperSizeMult")),a(s("logicPaperSell"))]),p=X([a(s("logicRatesR2")),a(s("logicRatesR3")),a(s("logicRatesSeparate"))]);return`
    <header class="view-header">
      <h2 class="view-title">${a(s("logicTitle"))}</h2>
      <p class="logic-subtitle">${a(s("logicSubtitle"))}</p>
    </header>

    <section class="logic-live section" aria-labelledby="logic-live-h">
      <h3 id="logic-live-h" class="section-title">${a(s("regimeToday"))}</h3>
      ${Zs(t)}
    </section>

    <div class="logic-pipeline">
      ${ce(1,s("logicStep1"),`
        <p class="logic-lead">${a(s("logicStep1Lead"))}</p>
        ${tn(n)}
        <p class="logic-caption">${a(s("logicStep1Caption"))}</p>
        ${p}
      `)}

      ${ce(2,s("logicStep2"),`
        <p class="logic-lead">${a(s("logicStep2Lead"))}</p>
        <h4 class="logic-h4">${a(s("logicScreenA"))}</h4>
        ${o}
        <h4 class="logic-h4">${a(s("logicScreenB"))}</h4>
        ${i}
        <h4 class="logic-h4">${a(s("logicScore"))}</h4>
        ${l}
      `)}

      ${ce(3,s("logicStep3"),d)}

      ${ce(4,s("logicStep4"),`
        <p class="logic-lead">${a(s("logicStep4Lead"))}</p>
        ${r}
        <p class="logic-caption">${a(s("logicListSize"))}</p>
      `)}

      ${ce(5,s("logicStep5"),`
        <p class="logic-lead">${a(s("logicStep5Lead"))}</p>
        ${c}
      `)}

      ${ce(6,s("logicStep6"),`
        <p class="logic-lead">${a(s("logicStep6Lead"))}</p>
        ${u}
        <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="paper">${a(s("logicOpenPaper"))}</button></p>
      `)}
    </div>

    <p class="logic-footnote" role="note">${a(s("logicFootnote"))}</p>
  `}const ss="./data/strategy-screener.json",va="jml-watchlist",Bt=new Set(["inst-sync","margin-up","earnings-steady","low-pe-small","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short","ma-tangle-break","new-high-momentum","short-roc","day-up-5","pct5d-10","near-high","chip-main-force","chip-branch","chip-large-holders","gooaye-tw-semicon-chain","gooaye-tw-vol-breakout"]),Sa=["大師","基本","籌碼","技術","綜合","週期"],Yt={精選:"綜合",價量:"技術",財務:"基本",技術:"技術",基本:"基本",籌碼:"籌碼",大師:"大師",週期:"週期",綜合:"綜合"};function sn(e){const t=Yt[e]||e;return s(`cat${t}`,t)}function nn(e){try{return new Date(e).toLocaleString(L(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return e||"—"}}function f(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString(L(),{minimumFractionDigits:t,maximumFractionDigits:t})}function D(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function O(e){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(2)}%`}function ba(e){const t=e.categoryGroup||e.category||"綜合";return Yt[t]||t}function on(e){let t=a(e);return t=t.replace(/本益比/g,()=>v("pe",s("pe"))),t=t.replace(/營益率/g,()=>v("opMargin",s("opMargin"))),t=t.replace(/毛利率/g,()=>v("grossMargin",s("grossMargin"))),t=t.replace(/外資/g,()=>v("foreignInv",s("foreignInv"))),t=t.replace(/投信/g,()=>v("trustInv",s("trustInv"))),t=t.replace(/自營商/g,()=>v("dealerInv",s("dealerInv"))),t=t.replace(/均線多頭/g,()=>v("maBull",s("maBull"))),t=t.replace(/RSI/g,()=>v("rsi",s("rsi"))),t=t.replace(/振幅/g,()=>v("amplitude",s("amplitude"))),t=t.replace(/(\d+)\s*張/g,(n,o)=>`${o}${v("zhang",s("zhang"))}`),t=t.replace(/＞\s*(\d+)\s*張/g,(n,o)=>`＞ ${o}${v("zhang",s("zhang"))}`),t}function ln(e){return e==="skip"?`<span class="xq-cond-st skip">${a(s("condSkip"))}</span>`:e==="fail"?`<span class="xq-cond-st fail">${a(s("condFail"))}</span>`:`<span class="xq-cond-st pass">${a(s("condPass"))}</span>`}function rn(e){switch(e){case"ma-bull":return[{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:s("metricDayPct"),fmt:t=>O(t.dayPct),cls:t=>D(t.dayPct)},{key:"sma5",label:"SMA5",fmt:t=>f(t.sma5)},{key:"sma10",label:"SMA10",fmt:t=>f(t.sma10)},{key:"sma20",label:"SMA20",fmt:t=>f(t.sma20)},{key:"sma60",label:"SMA60",fmt:t=>f(t.sma60)},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:t=>t.volRatioYday!=null?f(t.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:s("metricVolToday"),fmt:t=>t.volTodayZhang!=null?f(t.volTodayZhang,1):t.volToday!=null?f(t.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:v("pe",s("pe")),fmt:t=>f(t.pe,2),rawLabel:!0},{key:"revGrowth2yAvgPct",label:"2年營收成長均%",fmt:t=>t.revGrowth2yAvgPct!=null?f(t.revGrowth2yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:t=>t.pretaxGrowth5yAvgPct!=null?f(t.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?f(t.avgVol5Zhang,1):"—"},{key:"dayPct",label:s("metricDayPct"),fmt:t=>O(t.dayPct),cls:t=>D(t.dayPct)}];case"chip-main-force":return[{key:"instNet1dZhang",label:"法人1日(張)",fmt:t=>f(t.instNet1dZhang,1)},{key:"instNet5dZhang",label:"法人5日(張)",fmt:t=>f(t.instNet5dZhang,1)},{key:"foreignNet5dZhang",label:s("foreign5d"),fmt:t=>f(t.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:s("trust5d"),fmt:t=>f(t.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:s("dealer5d"),fmt:t=>f(t.dealerNet5dZhang,1)}];case"chip-branch":return[{key:"foreignBuyStreakDays",label:"外資連買日",fmt:t=>t.foreignBuyStreakDays!=null?String(t.foreignBuyStreakDays):"—"},{key:"foreignNet1dZhang",label:s("foreign1d"),fmt:t=>f(t.foreignNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:s("foreign5d"),fmt:t=>f(t.foreignNet5dZhang,1)},{key:"instNet5dZhang",label:"法人5日(張)",fmt:t=>f(t.instNet5dZhang,1)}];case"chip-large-holders":return[{key:"megaHolderPct",label:"大戶>100萬股%",fmt:t=>t.megaHolderPct!=null?f(t.megaHolderPct,1)+"%":"—"},{key:"largeHolderPct",label:"分級12–15%",fmt:t=>t.largeHolderPct!=null?f(t.largeHolderPct,1)+"%":"—"},{key:"megaHolderCount",label:">100萬股人數",fmt:t=>t.megaHolderCount!=null?f(t.megaHolderCount,0):"—"},{key:"major10pctCount",label:"逾10%大股東家數",fmt:t=>t.major10pctCount!=null?f(t.major10pctCount,0):"—"},{key:"tdccAsOf",label:"集保日",fmt:t=>t.tdccAsOf||"—"}];case"inst-sync":return[{key:"foreignNet1dZhang",label:s("foreign1d"),fmt:t=>f(t.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:s("trust1d"),fmt:t=>f(t.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:s("dealer1d"),fmt:t=>f(t.dealerNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:s("foreign5d"),fmt:t=>f(t.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:s("trust5d"),fmt:t=>f(t.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:s("dealer5d"),fmt:t=>f(t.dealerNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:s("metricDayPct"),fmt:t=>O(t.dayPct),cls:t=>D(t.dayPct)},{key:"rsi",label:v("rsi",s("rsi")),fmt:t=>f(t.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:t=>f(t.rsiPrev,2)},{key:"ampPct",label:v("amplitude",s("amplitude")),fmt:t=>t.ampPct!=null?f(t.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?f(t.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:t=>f(t.pb,2)},{key:"directorHoldPct",label:s("metricDirector"),fmt:t=>t.directorHoldPct!=null?f(t.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:v("pe",s("pe")),fmt:t=>f(t.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?f(t.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:t=>Array.isArray(t.revGrowth3y)?t.revGrowth3y.map(n=>n!=null?n+"%":"—").join(" → "):"—"},{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:t=>t.revGrowth5yAvgPct!=null?f(t.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:t=>t.pretaxGrowth5yAvgPct!=null?f(t.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?f(t.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:s("metricOpQ"),fmt:t=>t.opMargin1qPct!=null?f(t.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:t=>Array.isArray(t.opMargin3y)?t.opMargin3y.map(n=>n!=null?n+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:t=>t.revGrowth3yAvgPct!=null?f(t.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)}];case"benjamin-graham":return[{key:"pe",label:v("pe",s("pe")),fmt:t=>f(t.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:t=>f(t.pb,2)},{key:"debtRatioPct",label:s("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?f(t.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:s("metricOpQ"),fmt:t=>t.opMargin1qPct!=null?f(t.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:v("pe",s("pe")),fmt:t=>f(t.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?f(t.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:t=>t.roeGrowthPct!=null?f(t.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:t=>t.epsGrowthStreak!=null?String(t.epsGrowthStreak):"—"},{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"margin-up":return[{key:"yoyPairs",label:"YoY配對",fmt:t=>Array.isArray(t.yoyPairs)?t.yoyPairs.join("；"):"—"},{key:"yoyOmPct",label:"YoY營益成長%",fmt:t=>Array.isArray(t.yoyOmPct)?t.yoyOmPct.map(n=>n!=null?n+"%":"—").join(" → "):"—"},{key:"yoyGmPct",label:"YoY毛利成長%",fmt:t=>Array.isArray(t.yoyGmPct)?t.yoyGmPct.map(n=>n!=null?n+"%":"—").join(" → "):"—"},{key:"opMargins",label:v("opMargin",s("opMargin")),fmt:t=>Array.isArray(t.opMargins)?t.opMargins.slice(-4).map(n=>n!=null?n+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:s("metricSource"),fmt:t=>t.source||"—"}];case"kostolany-cycle":return[{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:s("metricDayPct"),fmt:t=>O(t.dayPct),cls:t=>D(t.dayPct)},{key:"pct5d",label:"5日%",fmt:t=>O(t.pct5d),cls:t=>D(t.pct5d)},{key:"pct1m",label:"1月%",fmt:t=>O(t.pct1m),cls:t=>D(t.pct1m)},{key:"volRatio",label:s("volRatio"),fmt:t=>t.volRatio!=null?f(t.volRatio)+"×":"—"},{key:"psychologyPhase",label:s("psychologyPhase"),fmt:t=>t.psychologyPhase?G(t.psychologyPhase):"—"},{key:"cycleStance",label:s("cycleStance"),fmt:t=>t.cycleStance?G(t.cycleStance):"—"},{key:"liquidityBias",label:s("liquidityBias"),fmt:t=>t.liquidityBias?G(t.liquidityBias):"—"},{key:"tags",label:s("regimeTags"),fmt:t=>t.tags||"—"},{key:"sizeMult",label:s("sizeMult"),fmt:t=>t.sizeMult!=null?f(t.sizeMult,2)+"×":"—"}];case"ma-tangle-break":return[{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:s("metricDayPct"),fmt:t=>O(t.dayPct),cls:t=>D(t.dayPct)},{key:"smaSpreadPct",label:"均線糾結%",fmt:t=>t.smaSpreadPct!=null?f(t.smaSpreadPct,2)+"%":"—"},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:t=>t.volRatioYday!=null?f(t.volRatioYday)+"×":"—"},{key:"sma5",label:"SMA5",fmt:t=>f(t.sma5)},{key:"sma20",label:"SMA20",fmt:t=>f(t.sma20)}];case"new-high-momentum":case"near-high":return[{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:s("metricDayPct"),fmt:t=>O(t.dayPct),cls:t=>D(t.dayPct)},{key:"pct5d",label:"5日%",fmt:t=>O(t.pct5d),cls:t=>D(t.pct5d)},{key:"high20",label:"20日高",fmt:t=>f(t.high20)},{key:"distHigh20Pct",label:"距高%",fmt:t=>t.distHigh20Pct!=null?f(t.distHigh20Pct,2)+"%":"—"},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:t=>t.volRatioYday!=null?f(t.volRatioYday)+"×":"—"}];case"short-roc":return[{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:s("metricDayPct"),fmt:t=>O(t.dayPct),cls:t=>D(t.dayPct)},{key:"roc10",label:"ROC10%",fmt:t=>t.roc10!=null?f(t.roc10,2)+"%":"—",cls:t=>D(t.roc10)},{key:"pct5d",label:"5日%",fmt:t=>O(t.pct5d),cls:t=>D(t.pct5d)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?f(t.avgVol5Zhang,1):"—"}];case"day-up-5":case"pct5d-10":return[{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:s("metricDayPct"),fmt:t=>O(t.dayPct),cls:t=>D(t.dayPct)},{key:"pct5d",label:"5日%",fmt:t=>O(t.pct5d),cls:t=>D(t.pct5d)},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:t=>t.volRatioYday!=null?f(t.volRatioYday)+"×":"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?f(t.avgVol5Zhang,1):"—"}];case"earnings-steady":return[{key:"yoyOmPct",label:"YoY營益成長%",fmt:t=>Array.isArray(t.yoyOmPct)?t.yoyOmPct.map(n=>n!=null?n+"%":"—").join(" → "):"—"},{key:"opMargins",label:v("opMargin",s("opMargin")),fmt:t=>Array.isArray(t.opMargins)?t.opMargins.slice(-4).map(n=>n!=null?n+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:s("metricSource"),fmt:t=>t.source||"—"}];case"low-pe-small":return[{key:"pe",label:v("pe",s("pe")),fmt:t=>f(t.pe,2),rawLabel:!0},{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"marketCapHint",label:"市值代理",fmt:t=>t.marketCapHint||"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?f(t.avgVol5Zhang,1):"—"}];case"gooaye-tw-semicon-chain":case"gooaye-tw-vol-breakout":case"gooaye-us-risk-on":case"gooaye-us-fomo-filter":return[{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:s("metricDayPct"),fmt:t=>O(t.dayPct),cls:t=>D(t.dayPct)},{key:"pct5d",label:"5日%",fmt:t=>O(t.pct5d),cls:t=>D(t.pct5d)},{key:"pct1m",label:"1月%",fmt:t=>O(t.pct1m),cls:t=>D(t.pct1m)},{key:"volRatio",label:s("metricVolRatioYday"),fmt:t=>t.volRatio!=null?f(t.volRatio)+"×":"—"},{key:"aboveSma50",label:"＞SMA50",fmt:t=>t.aboveSma50?"Y":"N"}];default:return[{key:"price",label:s("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:s("metricDayPct"),fmt:t=>O(t.dayPct),cls:t=>D(t.dayPct)}]}}function cn(e){const t=e.calibrationNotes;if(!t||typeof t!="object")return"";const n=Array.isArray(t.matchedXq)?t.matchedXq.map(r=>a(r)).join(" · "):"",o=Array.isArray(t.stillDiffers)?t.stillDiffers.map(r=>a(r)).join(" · "):"",i=t.unitsNote||t.units||"",l=[];return n&&l.push(`<span class="xq-cal-m">對齊 XQ：${n}</span>`),o&&l.push(`<span class="xq-cal-d">仍差異：${o}</span>`),i&&l.push(`<span class="xq-cal-u">${a(String(i))}</span>`),l.length?`<p class="xq-calibration" title="${s("calibTitle")}">${l.join("<br/>")}</p>`:""}function dn(e){return`<ol class="xq-cond-list">${(e.conditions||[]).map((n,o)=>{const i=n.status||"pass";return`<li class="xq-cond ${i}">
        <span class="xq-cond-num">${o+1}</span>
        <span class="xq-cond-text">${on(n.text)}</span>
        ${ln(i)}
      </li>`}).join("")}</ol>`}function Xt(e,t){return!t||t==="ALL"?e||[]:(e||[]).filter(n=>{const o=String(n.market||"").toUpperCase();if(o===t)return!0;const i=String(n.ticker||"").toUpperCase().endsWith(".TW");return o?!1:t==="TW"?i:!i})}function un(e,t="TW"){const n=e.hits||[],o=Xt(n,t),i=s(t==="US"?"usStock":"twStock");if(e.incomplete&&!n.length){const u=a(e.incompleteLabel||s("dataInsufficient")),p=(e.blockers||[]).map(g=>`<li>${a(g)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${u}</div>
      <ul>${p}</ul>
    </div>`}if(!o.length)return`<div class="xq-empty"><p>${a(i)} · ${a(s("noHits"))}</p></div>`;const l=rn(e.id),r=l.map(u=>`<th>${u.rawLabel?u.label:a(u.label)}</th>`).join(""),c=o.map(u=>{const p=u.metrics||{},g=l.map(h=>`<td class="num ${h.cls?h.cls(p):""}">${h.fmt(p)}</td>`).join("");return`<tr>
        <td><span class="ticker">${a(u.ticker)}</span></td>
        <td class="name-cell">${a(u.name||"")}${u.ohlcvBarDate?`<div class="xq-bar-date">K ${a(u.ohlcvBarDate)}</div>`:""}
          <button type="button" class="xq-btn xq-btn-sm xq-watch-inline" data-xq-watch="${a(u.ticker)}" data-xq-watch-name="${a(u.name||"")}">${a(s("addWatchlist"))}</button>
        </td>
        ${g}
      </tr>`}).join(""),d=o.map(u=>{const p=u.metrics||{},g=l.map(h=>{const y=h.cls?h.cls(p):"";return`<div class="xq-m"><span class="xq-ml">${h.rawLabel?h.label:a(h.label)}</span><span class="xq-mv ${y}">${h.fmt(p)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${a(u.ticker)}</div>
            <div class="name">${a(u.name||"")}</div>
            ${u.ohlcvBarDate?`<div class="xq-bar-date">K棒 ${a(u.ohlcvBarDate)}</div>`:""}
          </div>
          <div class="xq-hit-actions">
            <span class="badge market">${a(u.market||t)}</span>
            <button type="button" class="xq-btn xq-btn-sm" data-xq-watch="${a(u.ticker)}" data-xq-watch-name="${a(u.name||"")}">${a(s("addWatchlist"))}</button>
          </div>
        </div>
        <div class="xq-hit-metrics">${g}</div>
      </article>`}).join("");return`
    <div class="xq-market-block" data-market="${a(t)}">
      <h5 class="xq-market-title">${i}（${o.length}）</h5>
      <div class="table-wrap xq-table-wrap">
        <table class="stock-table xq-table">
          <thead><tr><th>代碼</th><th>名稱</th>${r}</tr></thead>
          <tbody>${c}</tbody>
        </table>
      </div>
      <div class="xq-mobile-cards">${d}</div>
    </div>`}function pn(e,t,n="TW"){var u,p,g,h;const o=e.hits||[],l=Xt(o,n).length,r=(e.unchecked||[]).map(y=>`<li class="xq-unchecked">${a(y)}</li>`).join(""),c=(e.notes||[]).map(y=>`<li>${a(y)}</li>`).join(""),d=!e.incomplete&&(e.blockers||[]).length?`<ul class="xq-blockers">${(e.blockers||[]).map(y=>`<li>${a(y)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${a(e.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${a(e.name)}</h3>
          <div class="xq-tags">
            ${(e.xqTags||[e.category]).map(y=>`<span class="xq-tag">${a(y)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="${s("hitTitle")}">
          <span class="xq-hit-num">${l}</span>
          <span class="xq-hit-label">${a(s("hitCount"))}</span>
        </div>
      </div>
      ${e.description?`<details class="fold-block"><summary>${a(s("strategyDetails"))}</summary><p class="xq-desc fold-p">${a(e.description)}</p></details>`:""}
      <div class="xq-meta-row">
        <span>${a(s("sessionTwse"))} ${a(t.sessionDate||"—")}</span>
        <span>${a(s("ohlcvBar"))} ${a(((u=e.ohlcvBarDates)==null?void 0:u[0])||t.ohlcvBarDate||"—")}</span>
        <span>${a(s("generated"))} ${nn(t.asOf)}</span>
        <span>${a(s("universeTw"))} ${((p=t.universe)==null?void 0:p.tw)??"—"}</span>
        <span>${a(s("universeUs"))} ${((g=t.universe)==null?void 0:g.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">${a(s("conditions"))}</h4>
      ${dn(e)}
      ${cn(e)}
      ${(h=e.incompleteFilters)!=null&&h.length?`<p class="xq-incomplete-filters">${a(s("incompleteFilters"))}${a(e.incompleteFilters.join("、"))}</p>`:""}
      ${r?`<ul class="xq-unchecked-list">${r}</ul>`:""}
      ${e.regimeSnapshot?`<div class="xq-regime-box" role="status">
        <div class="xq-regime-title">${a(s("regimeToday"))}</div>
        <div class="xq-regime-grid">
          ${["us","tw"].map(y=>{const b=e.regimeSnapshot[y];if(!b)return"";const k=b.psychologyPhase?G(b.psychologyPhase):s("dataInsufficient"),x=b.cycleStance,P=b.liquidityBias?G(b.liquidityBias):s("dataInsufficient"),E=Array.isArray(b.dataGaps)&&b.dataGaps.length?`<div class="xq-regime-gaps">${a(s("dataGaps"))}：${a(b.dataGaps.join(", "))}</div>`:"";return`<div class="xq-regime-card">
                <div class="xq-regime-mkt">${a(y.toUpperCase())}</div>
                <div class="xq-regime-stance">${Jt(x)}</div>
                <div class="xq-regime-metrics">
                  <div><span class="k">${a(s("psychologyPhase"))}</span><strong>${a(k)}</strong></div>
                  <div><span class="k">${a(s("liquidityBias"))}</span><strong>${a(P)}</strong></div>
                  <div><span class="k">${a(s("temperatureScore"))}</span><strong>${a(b.temperatureScore==null?s("dataInsufficient"):String(b.temperatureScore))}</strong></div>
                </div>
                ${E}
              </div>`}).join("")}
        </div>
      </div>`:""}
      ${c?`<ul class="xq-notes">${c}</ul>`:""}
      ${d}
      <div class="xq-toolbar">
        <h4 class="xq-sub">${a(s("results"))}</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>${a(s("copyJson"))}</button>
          <button type="button" class="xq-btn" data-xq-csv>${a(s("exportCsv"))}</button>
          <a class="xq-btn xq-btn-link" href="${ss}" download="strategy-screener.json">${a(s("exportJson"))}</a>
          <button type="button" class="xq-btn" disabled title="${a(s("backtestHint"))}">${a(s("backtestSoon"))}</button>
        </div>
      </div>
      ${e.twOnly||Bt.has(e.id)?`<div class="xq-market-tabs"><span class="xq-mkt-hint">${a(s("twOnlyHint"))}</span></div>`:`<div class="xq-market-tabs" role="tablist" aria-label="${a(s("hitMarket"))}">
        <button type="button" class="xq-mkt-btn${n==="TW"?" active":""}" data-xq-market="TW" aria-pressed="${n==="TW"}">${a(s("twStock"))}</button>
        <button type="button" class="xq-mkt-btn${n==="US"?" active":""}" data-xq-market="US" aria-pressed="${n==="US"}">${a(s("usStock"))}</button>
      </div>`}
      ${un(e,e.twOnly||Bt.has(e.id)?"TW":n)}
    </div>
  `}function gn(e=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${v("strategyScreen",s("strategyScreen"))}</h2>
      <p class="view-lead-tight">${a(s("strategyLead"))}</p>
      <div id="xq-root" class="xq-root" aria-label="${a(s("strategyScreen"))}">
        ${e?`<p class="xq-loading">${a(s("strategyLoading"))}</p>`:""}
      </div>
    </section>
  `}async function hn(e=ss){const t=await fetch(e,{cache:"no-cache"});if(!t.ok)throw new Error(`strategy-screener ${t.status}`);return t.json()}function fn(e,t){var T,w;const n=typeof e=="string"?document.querySelector(e):e;if(!n||!((T=t==null?void 0:t.strategies)!=null&&T.length)){n&&(n.innerHTML=`<div class="xq-empty"><p>${a(s("strategyEmpty"))}</p></div>`);return}const o=[...Sa];for(const m of t.categoryOrder||[]){const S=Yt[m]||m;o.includes(S)||o.push(S)}const i=new Map(o.map(m=>[m,[]]));for(const m of t.strategies){const S=ba(m);i.has(S)||(i.set(S,[]),o.push(S)),i.get(S).push(m)}for(const[m,S]of i)!S.length&&Sa.includes(m);let l=o.find(m=>(i.get(m)||[]).length)||o[0],r=((w=(i.get(l)||[])[0])==null?void 0:w.id)||t.strategies[0].id,c="TW";const d=(m,S)=>m.map($=>{const A=($.hits||[]).length,R=$.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${$.id===S?" active":""}${R}" data-xq-id="${a($.id)}" aria-pressed="${$.id===S}">
          <span class="xq-chip-name">${a($.name)}</span>
          <span class="xq-chip-n">${$.incomplete?a(s("incomplete")):a(s("hitsTotal",{n:A}))}</span>
        </button>`}).join(""),u=()=>o.map(m=>{const S=i.get(m)||[];return S.length?`<button type="button" class="xq-tab${m===l?" active":""}" data-xq-tab="${a(m)}" aria-pressed="${m===l}">
          <span>${a(sn(m))}</span>
          <span class="xq-tab-n">${S.length}</span>
        </button>`:""}).join(""),p=()=>t.strategies.map(m=>{const S=(m.hits||[]).length,$=m.id===r?" active":"",A=m.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${$}${A}" data-xq-id="${a(m.id)}">
          <span>${a(m.name)}</span>
          <span class="xq-side-n">${m.incomplete?a(s("incomplete")):a(s("hitsTotal",{n:S}))}</span>
        </button>`}).join(""),g=()=>{const m=i.get(l)||[],S=t.strategies.find($=>$.id===r)||m[0]||t.strategies[0];r=S.id,n.innerHTML=`
      <div class="xq-layout">
        <aside class="xq-sidebar" aria-label="${a(s("strategyList"))}">
          <div class="xq-side-title">${a(s("navStrategies"))}</div>
          ${p()}
        </aside>
        <div class="xq-main">
          <div class="xq-tabs" role="tablist" aria-label="${a(s("strategyCat"))}">${u()}</div>
          <div class="xq-chips" aria-label="${a(s("strategyList"))}">
            <div class="xq-chip-row">${d(m,r)}</div>
          </div>
          <div class="xq-panel-host">${pn(S,t,c)}</div>
        </div>
      </div>
      <p class="xq-foot">${a((t.disclaimer||"").split("。")[0]+(t.disclaimer?"。":""))}</p>
      <div class="xq-toast" id="xq-toast" hidden role="status"></div>
    `},h=m=>{const S=t.strategies.find(A=>A.id===m);if(!S)return;r=m;const $=ba(S);$!==l&&(l=$),g()},y=m=>{const S=i.get(m)||[];S.length&&(l=m,S.some($=>$.id===r)||(r=S[0].id),g())},b=(m,S=2200)=>{const $=n.querySelector("#xq-toast");$&&($.hidden=!1,$.textContent=m,clearTimeout(b._t),b._t=setTimeout(()=>{$.hidden=!0},S))},k=async m=>{var S;try{if((S=navigator.clipboard)!=null&&S.writeText)return await navigator.clipboard.writeText(m),!0}catch{}try{const $=document.createElement("textarea");$.value=m,$.setAttribute("readonly",""),$.style.position="fixed",$.style.left="-9999px",$.style.top="0",document.body.appendChild($),$.select();const A=document.execCommand("copy");return document.body.removeChild($),A}catch{return!1}},x=(m,S,$)=>{const A=new Blob([S],{type:$});try{const R=document.createElement("a");return R.href=URL.createObjectURL(A),R.download=m,R.rel="noopener",document.body.appendChild(R),R.click(),R.remove(),setTimeout(()=>URL.revokeObjectURL(R.href),2e3),!0}catch{try{const R=`data:${$||"text/plain"};charset=utf-8,${encodeURIComponent(S)}`,W=document.createElement("a");return W.href=R,W.download=m,document.body.appendChild(W),W.click(),W.remove(),!0}catch{return!1}}},P=()=>{try{const m=localStorage.getItem(va),S=m?JSON.parse(m):[];return Array.isArray(S)?S:[]}catch{return[]}},E=m=>{try{localStorage.setItem(va,JSON.stringify(m.slice(0,200)))}catch{}},Se=(m,S)=>{if(!m)return;const $=P();if($.some(A=>A.ticker===m)){b(s("watchlistExists",{ticker:m}));return}$.unshift({ticker:m,name:S||m,addedAt:new Date().toISOString()}),E($),b(s("watchlistAdded",{ticker:m}))};n.onclick=async m=>{var ha;const S=m.target,$=S&&typeof S.closest=="function"?S:S&&S.parentElement&&typeof S.parentElement.closest=="function"?S.parentElement:null;if(!$)return;const A=$.closest("[data-xq-tab]");if(A&&n.contains(A)){m.preventDefault(),y(A.getAttribute("data-xq-tab"));return}const R=$.closest("[data-xq-id]");if(R&&n.contains(R)){m.preventDefault(),h(R.getAttribute("data-xq-id"));return}const W=$.closest("[data-xq-market]");if(W&&n.contains(W)){m.preventDefault(),c=W.getAttribute("data-xq-market")||"TW",g();return}const pa=$.closest("[data-xq-copy]");if(pa&&n.contains(pa)){m.preventDefault();const Lt=await k(JSON.stringify(t,null,2));b(s(Lt?"copied":"copyFailed"));return}const ga=$.closest("[data-xq-csv]");if(ga&&n.contains(ga)){m.preventDefault();const Lt=((ha=n.querySelector(".xq-panel"))==null?void 0:ha.getAttribute("data-strategy-id"))||r,re=t.strategies.find(At=>At.id===Lt);if(!re)return;const As=Xt(re.hits||[],re.twOnly||Bt.has(re.id)?"TW":c),fa=mn({...re,hits:As});if(!fa){b(s("noHitsExport"));return}const ma="\uFEFF"+fa;if(x(`${re.id}-hits.csv`,ma,"text/csv;charset=utf-8"))b(s("csvDownloaded"));else{const At=`data:text/csv;charset=utf-8,${encodeURIComponent(ma)}`;b(s("csvBlocked"));try{window.open(At,"_blank")}catch{}}return}const Ne=$.closest("[data-xq-watch]");Ne&&n.contains(Ne)&&(m.preventDefault(),Se(Ne.getAttribute("data-xq-watch"),Ne.getAttribute("data-xq-watch-name")))},g()}function mn(e){const t=e.hits||[];if(!t.length)return"";const n=[...new Set(t.flatMap(r=>Object.keys(r.metrics||{})))],o=["ticker","name","market","ohlcvBarDate",...n],i=r=>{const c=r==null?"":String(r);return/[",\n]/.test(c)?`"${c.replace(/"/g,'""')}"`:c},l=t.map(r=>{const c=r.metrics||{};return[r.ticker,r.name,r.market,r.ohlcvBarDate||"",...n.map(d=>{const u=c[d];return Array.isArray(u)?u.join("|"):u})].map(i).join(",")});return[o.join(","),...l].join(`
`)}async function yn(e="#xq-root"){const t=()=>typeof e=="string"?document.querySelector(e):e;try{let n=t();if(n||(await new Promise(i=>requestAnimationFrame(i)),n=t()),!n)return console.warn("initStrategies: #xq-root missing"),{ok:!1,error:new Error("xq-root missing")};const o=await hn();return n=t(),n?(fn(n,o),{ok:!0,data:o}):{ok:!1,error:new Error("xq-root gone after fetch")}}catch(n){const o=t();return o&&(o.innerHTML=`<div class="xq-empty"><p>${a(s("strategyLoadError",{msg:n.message}))}</p></div>`),{ok:!1,error:n}}}const ns="./data/research-library.json",os="./covers/placeholder-book.svg",is="./covers/placeholder-paper.svg",ls="./covers/placeholder-podcast.svg",vn={candidate:"rl-status-candidate",deferred:"rl-status-deferred",adopted:"rl-status-adopted",rejected:"rl-status-rejected"},Sn={yes:"rl-cand-yes",no:"rl-cand-no",watch:"rl-cand-watch"};function bn(e){return{candidate:s("researchStatusCandidate"),deferred:s("researchStatusDeferred"),adopted:s("researchStatusAdopted"),rejected:s("researchStatusRejected")}[e]||e}function kn(e){return{yes:s("researchCandYes"),no:s("researchCandNo"),watch:s("researchCandWatch")}[e]||e}function $n(e){return e==="US"?s("usStock"):e==="TW"?s("twStock"):e==="BOTH"?s("researchMarketBoth"):e}function rs(e){return s(e==="paper"?"researchTypePaper":e==="podcast"?"researchTypePodcast":"researchTypeBook")}function Qe(e,t={}){var i;if(!e)return s("researchShelfAdjacent");const n=(i=t==null?void 0:t.shelfLabels)==null?void 0:i[e];if(n&&typeof n=="object")return xt(n,e);const o={core_investing:"researchShelfCoreInvesting",value_investing:"researchShelfValueInvesting",business_management:"researchShelfBusiness",life_partner_wisdom:"researchShelfLifePartner",options:"researchShelfOptions",recent_reads:"researchShelfRecentReads",fi_concepts:"researchShelfFiConcepts",money_values:"researchShelfMoneyValues",investing_basics:"researchShelfInvestingBasics",asset_allocation:"researchShelfAssetAllocation",financials:"researchShelfFinancials",market_analysis:"researchShelfMarketAnalysis",econ_analysis:"researchShelfEconAnalysis",psych_randomness:"researchShelfPsych",biographies:"researchShelfBiographies",adjacent:"researchShelfAdjacent"}[e];return o?s(o):e}function Tn(e={}){return(Array.isArray(e.shelves)?e.shelves:null)||["core_investing","value_investing","business_management","life_partner_wisdom","options","recent_reads","fi_concepts","money_values","investing_basics","asset_allocation","financials","market_analysis","econ_analysis","psych_randomness","biographies","adjacent"]}function xt(e,t){if(!e||typeof e!="object")return t;const n=Tt();return e[n]||e.en||e["zh-Hant"]||t}function cs(e){return xt(e.titleLocalized,e.title)||""}function wn(e){return xt(e.summaryLocalized,e.summary)||""}function xn(e,t){return e.coverUrl?e.coverUrl:e.cover?e.cover:e.type==="paper"?(t==null?void 0:t.defaultCoverPaper)||is:e.type==="podcast"?(t==null?void 0:t.defaultCoverPodcast)||ls:(t==null?void 0:t.defaultCoverBook)||os}function Pn(e,t){return e.coverFallback?e.coverFallback:e.type==="paper"?(t==null?void 0:t.defaultCoverPaper)||is:e.type==="podcast"?(t==null?void 0:t.defaultCoverPodcast)||ls:(t==null?void 0:t.defaultCoverBook)||os}function Cn(e){const t=e==null?void 0:e.plainTakeawaysLocalized;if(t&&typeof t=="object"){const n=Tt(),o=t[n]||t["zh-Hant"]||t.en;if(Array.isArray(o)&&o.length)return o}return Array.isArray(e==null?void 0:e.plainTakeaways)&&e.plainTakeaways.length?e.plainTakeaways:[]}function Ln(e){const t=Cn(e);return t.length?`<div class="rl-block">
    <h4 class="rl-h">${a(s("researchTakeaways"))}</h4>
    <ul class="rl-takeaways">${t.map(n=>`<li>${a(n)}</li>`).join("")}</ul>
  </div>`:""}function An(e){if(!Array.isArray(e)||!e.length)return"";const t=e.filter(o=>/^https?:\/\//i.test(String(o)));if(!t.length)return"";const n=t.map(o=>`<a href="${a(o)}" target="_blank" rel="noopener noreferrer">${a(o)}</a>`).join(" · ");return`<div class="rl-sources"><span class="rl-k">${a(s("researchSources"))}</span> ${n}</div>`}function En(e,t){const n=xn(e,t),o=Pn(e,t),i=cs(e)||rs(e.type);return`
    <div class="rl-cover-wrap">
      <img
        class="rl-cover"
        src="${a(n)}"
        alt="${a(i)}"
        loading="lazy"
        decoding="async"
        data-rl-fallback="${a(o)}"
      />
    </div>`}function jn(e){e.querySelectorAll("img.rl-cover[data-rl-fallback]").forEach(t=>{t.addEventListener("error",()=>{const n=t.dataset.rlFallback;n&&t.getAttribute("src")!==n?t.setAttribute("src",n):t.classList.add("is-broken")})})}function be(e,t={}){const n=e.status||"candidate",o=e.strategyCandidate||"watch",i=e.year!=null?String(e.year):"—",l=(e.authors||[]).join(", ")||"—";return`
    <article class="rl-card" data-rl-id="${a(e.id)}" data-rl-market="${a(e.market)}" data-rl-type="${a(e.type)}" data-rl-shelf="${a(e.shelf||"adjacent")}">
      ${En(e,t)}
      <div class="rl-card-body">
        <header class="rl-card-head">
          <div class="rl-badges">
            <span class="rl-badge rl-type">${a(rs(e.type))}</span>
            <span class="rl-badge rl-shelf">${a(Qe(e.shelf,t))}</span>
            <span class="rl-badge rl-market">${a($n(e.market))}</span>
            <span class="rl-badge ${vn[n]||""}">${a(bn(n))}</span>
            <span class="rl-badge ${Sn[o]||""}" title="${a(s("researchStrategy"))}">${a(kn(o))}</span>
          </div>
          <h3 class="rl-title">${a(cs(e))}</h3>
          <p class="rl-meta">${a(l)} · ${a(i)}</p>
        </header>
        <p class="rl-summary">${a(wn(e))}</p>
        ${Ln(e)}
        ${An(e.sources)}
      </div>
    </article>`}function zn(e=!0){return`
    <section class="section research-section" aria-labelledby="research-heading">
      <header class="view-header view-header-tight">
        <h2 class="view-title" id="research-heading">${a(s("researchTitle"))}</h2>
        <p class="view-lead view-lead-tight">${a(s("researchLead"))}</p>
      </header>
      <p class="rl-banner" role="note">${a(s("researchMathGateBanner"))}</p>
      <div id="rl-root" class="rl-root" data-placeholder="${e?"1":"0"}">
        <p class="rl-loading">${a(s("loading"))}</p>
      </div>
    </section>`}function Ze(e,{market:t,type:n,shelf:o,status:i,candidate:l}){return e.filter(r=>n&&n!=="all"&&r.type!==n||o&&o!=="all"&&(r.shelf||"adjacent")!==o||i&&i!=="all"&&(r.status||"candidate")!==i||l&&l!=="all"&&(r.strategyCandidate||"watch")!==l?!1:!t||t==="all"?!0:t==="US"?r.market==="US"||r.market==="BOTH":t==="TW"?r.market==="TW"||r.market==="BOTH":!0)}function Mn(e){var n,o,i;const t=(n=e==null?void 0:e.meta)==null?void 0:n.mathGateLocalized;return t&&typeof t=="object"?xt(t,(o=e==null?void 0:e.meta)==null?void 0:o.mathGate)||s("researchMathGateBanner"):((i=e==null?void 0:e.meta)==null?void 0:i.mathGate)||s("researchMathGateBanner")}const Pt=[{id:"book",titleKey:"researchCatBooks",type:"book"},{id:"paper",titleKey:"researchCatPapers",type:"paper"},{id:"podcast",titleKey:"researchCatPodcasts",type:"podcast"},{id:"us",titleKey:"researchCatUs",market:"US"},{id:"tw",titleKey:"researchCatTw",market:"TW"},{id:"candidate",titleKey:"researchCatCandidate",status:"candidate"},{id:"watch",titleKey:"researchCatWatch",candidate:"watch"}],ka={menu:"menu",all:"menu",index:"menu",book:"book",books:"book",paper:"paper",papers:"paper",podcast:"podcast",podcasts:"podcast",us:"us",tw:"tw",candidate:"candidate",watch:"watch",watching:"watch"};let Dt=null,Ot=null,J={category:"menu",market:"all",type:"all",shelf:"all",status:"all",candidate:"all"};function Kt(e){if(e==null||e==="")return"menu";const n=String(e).trim().toLowerCase();return ka[n]?ka[n]:Pt.some(o=>o.id===n)?n:"menu"}function Qt(e,t){const n=Pt.find(o=>o.id===t);return e.category=n?t:"menu",e.market="all",e.type="all",e.shelf="all",e.status="all",e.candidate="all",n&&(n.type&&(e.type=n.type),n.market&&(e.market=n.market),n.status&&(e.status=n.status),n.candidate&&(e.candidate=n.candidate)),e}function Rn(e,t){return Ze(e,{market:t.market||"all",type:t.type||"all",shelf:"all",status:t.status||"all",candidate:t.candidate||"all"}).length}function Nn(e){return!e||e.category==="menu"?"#research":e.shelf&&e.shelf!=="all"?`#research/shelf/${encodeURIComponent(e.shelf)}`:`#research/${e.category}`}function ds(e){const t=Nn(e);location.hash!==t&&history.replaceState(null,"",t)}function $a(e){return[{id:"menu",label:s("researchCatMenu")},...Pt.map(n=>({id:n.id,label:s(n.titleKey)}))].map(n=>`<button type="button" class="rl-tab${n.id===e.category?" is-active":""}" data-rl-cat="${a(n.id)}" role="tab" aria-selected="${n.id===e.category}">${a(n.label)}</button>`).join("")}function Bn(e){const t=Pt.map(n=>{const o=Rn(e,n);return`
      <button type="button" class="rl-menu-card" data-rl-cat="${a(n.id)}" aria-label="${a(s(n.titleKey))}">
        <h3 class="rl-menu-title">${a(s(n.titleKey))}</h3>
        <p class="rl-menu-count">${o}</p>
        <span class="rl-menu-cta">${a(s("researchOpenCategory"))}</span>
      </button>`}).join("");return`
    <div class="rl-menu" role="list" aria-label="${a(s("researchCategories"))}">
      <p class="rl-menu-lead">${a(s("researchMenuLead"))}</p>
      <div class="rl-menu-grid">${t}</div>
    </div>`}function fe(e,t,n,{syncUrl:o=!0}={}){const i=Array.isArray(t==null?void 0:t.items)?t.items:[],l=(t==null?void 0:t.meta)||{},r=Tn(l);if(o&&ds(n),n.category==="menu"){e.innerHTML=`
      <div class="rl-tabs-wrap">
        <div class="rl-tabs" role="tablist" aria-label="${a(s("researchCategories"))}">
          ${$a(n)}
        </div>
      </div>
      ${Bn(i)}`,Ta(e,t,n);return}const c=Ze(i,n),d=c.filter(w=>w.type==="book"),u=c.filter(w=>w.type==="paper"),p=c.filter(w=>w.type==="podcast"),g=l.mathGate?`<p class="rl-meta-line">${a(Mn(t))}</p>`:"",h=[`<button type="button" class="rl-filter rl-shelf-chip${n.shelf==="all"?" is-active":""}" data-rl-shelf="all">${a(s("researchFilterAll"))}</button>`,...r.map(w=>{const m=Ze(i,{...n,shelf:w}).length;return m?`<button type="button" class="rl-filter rl-shelf-chip${n.shelf===w?" is-active":""}" data-rl-shelf="${a(w)}">${a(Qe(w,l))} <span class="rl-chip-count">${m}</span></button>`:""})].join(""),y=[["all",s("researchFilterAll")],["candidate",s("researchStatusCandidate")],["deferred",s("researchStatusDeferred")],["adopted",s("researchStatusAdopted")],["rejected",s("researchStatusRejected")]].map(([w,m])=>{const S=Ze(i,{...n,status:w==="all"?"all":w}).length;return w!=="all"&&!i.some($=>($.status||"candidate")===w)?"":`<button type="button" class="rl-filter${n.status===w?" is-active":""}" data-rl-status="${w}">${a(m)}${w==="all"?"":` <span class="rl-chip-count">${S}</span>`}</button>`}).join("");function b(w){if(!w.length)return`<p class="rl-empty">${a(s("researchEmpty"))}</p>`;if(n.shelf&&n.shelf!=="all")return`<div class="rl-grid">${w.map(S=>be(S,l)).join("")}</div>`;const m=r.filter(S=>w.some($=>($.shelf||"adjacent")===S));return m.length?m.map(S=>{const $=w.filter(A=>(A.shelf||"adjacent")===S);return`<section class="rl-shelf-group" data-shelf="${a(S)}" aria-label="${a(Qe(S,l))}">
          <h4 class="rl-shelf-title">${a(Qe(S,l))} <span class="rl-list-count">(${$.length})</span></h4>
          <div class="rl-grid">${$.map(A=>be(A,l)).join("")}</div>
        </section>`}).join(""):`<div class="rl-grid">${w.map(S=>be(S,l)).join("")}</div>`}const k=n.type==="all"||n.type==="book",x=n.type==="all"||n.type==="paper",P=n.type==="all"||n.type==="podcast",E=[];k&&E.push(`<section class="rl-list" aria-label="${a(s("researchTypeBook"))}">
        <h3 class="rl-list-title">${a(s("researchTypeBook"))} <span class="rl-list-count">(${d.length})</span></h3>
        ${b(d)}
      </section>`),x&&E.push(`<section class="rl-list" aria-label="${a(s("researchTypePaper"))}">
        <h3 class="rl-list-title">${a(s("researchTypePaper"))} <span class="rl-list-count">(${u.length})</span></h3>
        <div class="rl-grid">
          ${u.length?u.map(w=>be(w,l)).join(""):`<p class="rl-empty">${a(s("researchEmpty"))}</p>`}
        </div>
      </section>`),P&&E.push(`<section class="rl-list" aria-label="${a(s("researchTypePodcast"))}">
        <h3 class="rl-list-title">${a(s("researchTypePodcast"))} <span class="rl-list-count">(${p.length})</span></h3>
        <div class="rl-grid">
          ${p.length?p.map(w=>be(w,l)).join(""):`<p class="rl-empty">${a(s("researchEmpty"))}</p>`}
        </div>
      </section>`);const Se=n.category==="us"||n.category==="tw"?"":`<div class="rl-filter-group" role="group" aria-label="${a(s("market"))}">
        <button type="button" class="rl-filter${n.market==="all"?" is-active":""}" data-rl-market="all">${a(s("researchFilterAll"))}</button>
        <button type="button" class="rl-filter${n.market==="US"?" is-active":""}" data-rl-market="US">${a(s("usStock"))}</button>
        <button type="button" class="rl-filter${n.market==="TW"?" is-active":""}" data-rl-market="TW">${a(s("twStock"))}</button>
      </div>`,T=n.category==="candidate"||n.category==="watch"?"":`<div class="rl-filter-group" role="group" aria-label="${a(s("researchStatusFilters"))}">
        ${y}
      </div>`;e.innerHTML=`
    <div class="rl-tabs-wrap">
      <div class="rl-tabs" role="tablist" aria-label="${a(s("researchCategories"))}">
        ${$a(n)}
      </div>
    </div>
    <div class="rl-toolbar" role="toolbar" aria-label="${a(s("researchFilters"))}">
      ${Se}
      ${T}
    </div>
    <div class="rl-shelf-scroll" role="group" aria-label="${a(s("researchShelfFilters"))}">
      ${h}
    </div>
    ${g}
    <p class="rl-counts">${a(s("researchCounts",{books:d.length,papers:u.length,podcasts:p.length,total:c.length}))}</p>
    <div class="rl-lists">
      ${E.join("")}
    </div>`,jn(e),Ta(e,t,n)}function Ta(e,t,n){e.querySelectorAll("[data-rl-cat]").forEach(o=>{o.addEventListener("click",()=>{Qt(n,o.dataset.rlCat),fe(e,t,n,{syncUrl:!0})})}),e.querySelectorAll("[data-rl-market]").forEach(o=>{o.addEventListener("click",()=>{n.market=o.dataset.rlMarket,fe(e,t,n,{syncUrl:!1})})}),e.querySelectorAll("[data-rl-status]").forEach(o=>{o.addEventListener("click",()=>{n.status=o.dataset.rlStatus,fe(e,t,n,{syncUrl:!1})})}),e.querySelectorAll("[data-rl-shelf]").forEach(o=>{o.addEventListener("click",()=>{n.shelf=o.dataset.rlShelf,ds(n),fe(e,t,n,{syncUrl:!1})})})}async function Dn(e=ns){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}function On(e,{syncUrl:t=!0,shelf:n=null}={}){return!Dt||!Ot?{ok:!1,reason:"not-ready"}:(Qt(J,Kt(e)),n&&(J.shelf=n),fe(Dt,Ot,J,{syncUrl:t}),{ok:!0,category:J.category,state:{...J}})}async function In(e="#rl-root",t=ns,n={}){const o=typeof e=="string"?document.querySelector(e):e;if(!o)return{ok:!1,reason:"missing-root"};Dt=o;try{const i=await Dn(t);return Ot=i,J={category:"menu",market:"all",type:"all",shelf:"all",status:"all",candidate:"all"},Qt(J,Kt(n.category??"menu")),n.shelf&&(J.shelf=n.shelf),fe(o,i,J,{syncUrl:n.syncUrl!==!1}),{ok:!0,data:i}}catch(i){return o.innerHTML=`<p class="rl-error">${a(s("researchLoadError",{msg:i.message}))}</p>`,{ok:!1,error:i}}}const Hn="./data/us-options-snapshot.json",qn="book-mcmillan-options-handbook",Fn={"covered-call":["optionsSetupCoveredCall","optionsSetupCoveredCallBody","optionsSetupCoveredCallWarn"],"protective-put":["optionsSetupProtectivePut","optionsSetupProtectivePutBody","optionsSetupProtectivePutWarn"],"vertical-spread":["optionsSetupVertical","optionsSetupVerticalBody","optionsSetupVerticalWarn"],"calendar-diagonal":["optionsSetupCalendar","optionsSetupCalendarBody","optionsSetupCalendarWarn"],"straddle-strangle":["optionsSetupStraddle","optionsSetupStraddleBody","optionsSetupStraddleWarn"],butterfly:["optionsSetupButterfly","optionsSetupButterflyBody","optionsSetupButterflyWarn"]};function Wn(e,t){if(!e||typeof e!="object")return t;const n=Tt();return e[n]||e["zh-Hant"]||e.en||t}function _n(e){return e&&Wn(e.titleLocalized,e.title)||""}function Un(e){if(!e)return[];const t=e.plainTakeawaysLocalized;if(t&&typeof t=="object"){const n=Tt(),o=t[n]||t["zh-Hant"]||t.en;if(Array.isArray(o)&&o.length)return o}return Array.isArray(e.plainTakeaways)?e.plainTakeaways:[]}function Vn(e){try{return new Date(e).toLocaleString(L(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return e||"—"}}function V(e,t=2){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(L(),{minimumFractionDigits:t,maximumFractionDigits:t})}function us(e,t=1){return e==null||Number.isNaN(e)?null:`${(e*100).toFixed(t)}%`}function wa(e){return e==null||Number.isNaN(e)?null:`${(e*100).toFixed(1)}%`}function z(e,t=""){return e==null||e===""?"—":`<span class="uo-val">${a(String(e))}${t?a(t):""}</span>`}function Zt(e){return s(e==="pass"?"optionsGatePass":e==="watch"?"optionsGateWatch":e==="fail"?"optionsGateFail":"optionsGateIncomplete")}function ea(e){return e==="pass"?"uo-gate-pass":e==="watch"?"uo-gate-watch":e==="fail"?"uo-gate-fail":"uo-gate-incomplete"}function ct(e){return!e||e.incomplete||e.label==null?null:e.label==="up"?s("optionsTrendUp",{pct:e.pct!=null?e.pct:"—"}):e.label==="down"?s("optionsTrendDown",{pct:e.pct!=null?e.pct:"—"}):s("optionsTrendFlat",{pct:e.pct!=null?e.pct:"—"})}function Gn(e){return e==null?null:e>1.2?s("optionsSkewPutHeavy"):e<.8?s("optionsSkewCallHeavy"):s("optionsSkewBalanced")}function ps(e){return e==="iv_rich"?s("optionsRegimeIvRich"):e==="iv_cheap"?s("optionsRegimeIvCheap"):e==="iv_fair"?s("optionsRegimeIvFair"):e==="iv_only"?s("optionsRegimeIvOnly"):"—"}function Jn(e){return e!=null&&e.primaryBook?e.primaryBook:null}function Yn(e){const t=Jn(e),n=_n(t)||s("optionsBookFallbackTitle"),o=Un(t),i=o.length?`<ul class="uo-takeaways">${o.map(l=>`<li>${a(l)}</li>`).join("")}</ul>`:`<p class="uo-muted">${a(s("researchNoTakeaways"))}</p>`;return`
    <aside class="uo-book" aria-label="${a(s("optionsBookCite"))}">
      <div class="uo-book-head">
        <span class="uo-book-badge">${a(s("optionsBookBadge"))}</span>
        <h3 class="uo-book-title">${a(n)}</h3>
      </div>
      <p class="uo-book-lead">${a(s("optionsBookLead"))}</p>
      ${i}
      <p class="uo-book-link">
        <button type="button" class="uo-link-btn" data-jump="research">${a(s("optionsGotoResearch"))}</button>
        <span class="uo-muted">· ${a(qn)}</span>
      </p>
    </aside>`}function Xn(e){const t=e.fundamentals||{},n=e.quality||{},o=t.trailingPE??t.forwardPE,i=t.trailingPE!=null?"":t.forwardPE!=null?` <span class="uo-hint">(${a(s("optionsForwardPe"))})</span>`:"";return`
    <tr data-uo-ticker="${a(e.ticker)}" class="uo-q-row">
      <td>
        <button type="button" class="uo-ticker-btn" data-uo-select="${a(e.ticker)}">
          <span class="uo-ticker">${a(e.ticker)}</span>
          <span class="uo-name">${a(e.name||"")}</span>
        </button>
      </td>
      <td class="num">${z(V(o,1))}${i}</td>
      <td class="num">${z(V(t.priceToBook,2))}</td>
      <td class="num">${z(V(t.debtToEquity,1))}</td>
      <td class="num">${z(us(t.roe))}</td>
      <td>${z(ct(t.revenueTrend))}</td>
      <td>${z(ct(t.earningsTrend))}</td>
      <td><span class="uo-gate ${ea(n.gate)}">${a(Zt(n.gate))}</span></td>
    </tr>`}function Kn(e){return e.map(t=>{const n=t.fundamentals||{},o=t.quality||{},i=n.trailingPE??n.forwardPE;return`
      <article class="uo-q-card" data-uo-ticker="${a(t.ticker)}">
        <button type="button" class="uo-ticker-btn" data-uo-select="${a(t.ticker)}">
          <span class="uo-ticker">${a(t.ticker)}</span>
          <span class="uo-name">${a(t.name||"")}</span>
        </button>
        <div class="uo-metrics">
          <div><span class="m-l">${a(s("optionsPe"))}</span> ${z(V(i,1))}</div>
          <div><span class="m-l">${a(s("optionsPb"))}</span> ${z(V(n.priceToBook,2))}</div>
          <div><span class="m-l">${a(s("optionsDebt"))}</span> ${z(V(n.debtToEquity,1))}</div>
          <div><span class="m-l">${a(s("optionsRoe"))}</span> ${z(us(n.roe))}</div>
          <div><span class="m-l">${a(s("optionsRevTrend"))}</span> ${z(ct(n.revenueTrend))}</div>
          <div><span class="m-l">${a(s("optionsEarnTrend"))}</span> ${z(ct(n.earningsTrend))}</div>
        </div>
        <span class="uo-gate ${ea(o.gate)}">${a(Zt(o.gate))}</span>
      </article>`}).join("")}function Qn(){return`
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
    </details>`}function Zn(e){const t=e.setups||[];return t.length?`<div class="uo-setups">
    ${t.map(n=>{const o=Fn[n.id];if(!o)return"";const[i,l,r]=o,c=n.volAligned?s("optionsSetupVolAligned"):s("optionsSetupVolNotAligned");return`
        <article class="uo-setup${n.volAligned?" is-aligned":""}">
          <h4>${a(s(i))}</h4>
          <p>${a(s(l))}</p>
          <p class="uo-risk-shape">${a(s("optionsRiskShape"))}: ${a(s(r))}</p>
          <p class="uo-muted">${a(c)} · ${a(ps(n.volRegime))}</p>
        </article>`}).join("")}
  </div>`:`<p class="uo-muted">${a(s("optionsNoSetups"))}</p>`}function eo(e){var c,d;if(!e)return`<p class="uo-muted">${a(s("optionsPickTicker"))}</p>`;const t=e.options,n=e.blockers||[];if(!t)return`
      <div class="uo-blocker" role="status">
        <p><strong>${a(s("optionsChainBlocked"))}</strong></p>
        <p>${a(n.join(" · ")||s("optionsDataMissing"))}</p>
      </div>`;const o=Gn(t.putCallVolumeRatio),i=t.atmIv==null,l=t.historicalVol==null,r=i?"unknown":l?"iv_only":t.ivHvRatio>=1.25?"iv_rich":t.ivHvRatio<=.8?"iv_cheap":"iv_fair";return`
    <div class="uo-opt-head">
      <div>
        <div class="uo-ticker">${a(e.ticker)}</div>
        <div class="uo-name">${a(e.name||"")}</div>
      </div>
      <span class="uo-gate ${ea((c=e.quality)==null?void 0:c.gate)}">${a(Zt((d=e.quality)==null?void 0:d.gate))}</span>
    </div>
    <p class="uo-opt-note">${a(s("optionsMcmillanFirst"))}</p>
    <div class="uo-opt-grid">
      <div class="uo-opt-metric">
        <div class="m-l">${a(s("optionsAtmIv"))}</div>
        <div class="m-v">${z(i?null:wa(t.atmIv))}</div>
        <div class="uo-muted">${a(s("optionsExpiry"))}: ${a(t.expiration||"—")}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${a(s("optionsHv"))}</div>
        <div class="m-v">${z(l?null:wa(t.historicalVol))}</div>
        <div class="uo-muted">${a(s("optionsIvHv"))}: ${t.ivHvRatio!=null?z(V(t.ivHvRatio,2)+"×"):z(null)}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${a(s("optionsVolRegime"))}</div>
        <div class="m-v">${a(ps(r))}</div>
        <div class="uo-muted">${o?a(o):""}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${a(s("optionsCallPutVol"))}</div>
        <div class="m-v">${z(V(t.callVolume,0))} / ${z(V(t.putVolume,0))}</div>
        <div class="uo-muted">${a(s("optionsAtmStrike"))}: ${z(V(t.atmStrikeCall??t.atmStrikePut,1))}</div>
      </div>
    </div>
    ${(()=>{const u=n.filter(g=>!/atmIv|options fields incomplete/i.test(String(g))||t.historicalVol==null&&!(t.callVolume||t.putVolume)),p=u.length?u:[];return p.length?`<p class="uo-warn">${a(s("optionsPartialBlocker"))}: ${a(p.join(" · "))}</p>`:""})()}
    <h4 class="uo-h">${a(s("optionsEduSetups"))}</h4>
    <p class="uo-panel-lead">${a(s("optionsEduSetupsLead"))}</p>
    ${Zn(e)}
    <p class="uo-disclaimer" role="note">${a(s("optionsDisclaimer"))}</p>
    ${Qn()}
  `}function gs(e,t,n){const o=Array.isArray(t==null?void 0:t.tickers)?t.tickers:[],i=o.find(l=>l.ticker===n.ticker)||o[0]||null;i&&(n.ticker=i.ticker),e.innerHTML=`
    ${Yn(t)}
    <p class="uo-meta">${a(s("dataAsOf"))} ${a(Vn(t==null?void 0:t.asOf))} · ${a(s("optionsUsOnly"))}</p>
        <div class="uo-panels">
      <section class="uo-panel uo-panel-opt" aria-label="${a(s("optionsViewTitle"))}">
        <h3 class="uo-panel-title">${a(s("optionsViewTitle"))}</h3>
        <p class="uo-panel-lead">${a(s("optionsViewLead"))}</p>
        <div class="uo-ticker-chips" role="tablist" aria-label="${a(s("ticker"))}">
          ${o.map(l=>`
            <button type="button" class="uo-chip${l.ticker===n.ticker?" is-active":""}" data-uo-select="${a(l.ticker)}" role="tab" aria-selected="${l.ticker===n.ticker?"true":"false"}">${a(l.ticker)}</button>`).join("")}
        </div>
        <div class="uo-detail" id="uo-detail">
          ${eo(i)}
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
              ${o.length?o.map(Xn).join(""):`<tr><td colspan="8">${a(s("optionsEmpty"))}</td></tr>`}
            </tbody>
          </table>
        </div>
        <div class="uo-mobile">${o.length?Kn(o):`<p class="uo-muted">${a(s("optionsEmpty"))}</p>`}</div>
      </section>
    </div>
  `,e.querySelectorAll("[data-uo-select]").forEach(l=>{l.addEventListener("click",()=>{n.ticker=l.getAttribute("data-uo-select"),gs(e,t,n)})}),e.querySelectorAll("[data-uo-ticker]").forEach(l=>{l.classList.toggle("is-selected",l.getAttribute("data-uo-ticker")===n.ticker)})}function to(){return`
    <section class="section options-section" aria-label="${a(s("optionsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(s("optionsTitle"))}</h2>
        <p class="view-lead">${a(s("optionsLead"))}</p>
      </header>
      <p class="uo-disclaimer uo-disclaimer-top" role="note">${a(s("optionsDisclaimer"))}</p>
      <div id="uo-root" class="uo-root">
        <p class="uo-loading">${a(s("loading"))}</p>
      </div>
    </section>`}async function ao(e="#uo-root"){var n,o;const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};try{const i=await fetch(Hn);if(!i.ok)throw new Error(`HTTP ${i.status}`);const l=await i.json(),r={ticker:((o=(n=l==null?void 0:l.tickers)==null?void 0:n[0])==null?void 0:o.ticker)||null};return gs(t,l,r),{ok:!0,data:l}}catch(i){return t.innerHTML=`
      <div class="uo-blocker" role="alert">
        <p>${a(s("optionsLoadError",{msg:i.message||String(i)}))}</p>
      </div>`,{ok:!1,error:i}}}const so="./data/earnings-digest.json";function no(e){try{return new Date(e).toLocaleString(L(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return e||"—"}}function zt(e,t=2){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(L(),{minimumFractionDigits:t,maximumFractionDigits:t})}function xa(e,t=1){return e==null||Number.isNaN(e)?null:`${e>0?"+":""}${Number(e).toFixed(t)}%`}function de(e,t=""){return e==null||e===""?null:`<span class="er-val">${a(String(e))}${t?a(t):""}</span>`}function ue(e,t){return t?`<div class="er-metric">
          <div class="m-l">${a(e)}</div>
          <div class="m-v">${t}</div>
        </div>`:""}function oo(e){return e==="mega_cap_earnings_next_14d"?s("earningsTagPrimary"):e==="yahoo_most_actives_earnings_next_14d"?s("earningsTagActives"):e==="recently_reported"?s("earningsTagRecent"):e==="calendar_highlight_within_45d"?s("earningsTagFallback"):e||s("earningsTagOther")}function io(e){return e==="recently_reported"?"er-badge-recent":e==="calendar_highlight_within_45d"?"er-badge-fallback":e!=null&&e.includes("most_actives")?"er-badge-hot":""}function Pa(e,{hot:t=!1}={}){var l;if(!e)return"";const n=e.nextEarningsDate!=null?`${e.nextEarningsDate}${e.nextEarningsDateIsEstimate?` (${s("earningsEstimate")})`:""}`:null,o=((l=e.lastReport)==null?void 0:l.epsActual)!=null?`${zt(e.lastReport.epsActual,2)}${e.lastReport.quarter?` · ${e.lastReport.quarter}`:""}`:null,i=t?`<span class="er-badge ${io(e.selectionTag)}">${a(oo(e.selectionTag))}</span>`:`<span class="er-badge">${a(s("earningsMag7Badge"))}</span>`;return`
    <article class="er-card" data-ticker="${a(e.ticker)}">
      <div class="er-card-head">
        <div>
          <div class="er-ticker">${a(e.ticker)}</div>
          <div class="er-name">${a(e.name||"")}</div>
        </div>
        ${i}
      </div>
      <div>
        <div class="er-label">${a(s("earningsWhatItDoes"))}</div>
        <p class="er-does">${e.whatItDoes?a(e.whatItDoes):""}</p>
      </div>
      <div class="er-metrics">
        ${ue(s("earningsNextDate"),de(n))}
        ${ue(s("earningsLastEps"),de(o))}
        ${ue(s("earningsRevYoy"),de(xa(e.revenueYoYPct)))}
        ${ue(s("earningsEpsYoy"),de(xa(e.epsYoYPct)))}
        ${ue(s("earningsPe"),de(zt(e.pe,1)))}
        ${ue(s("earningsForwardPe"),de(zt(e.forwardPe,1)))}
      </div>
      ${e.whatToWatch?`<div>
        <div class="er-label">${a(s("earningsWhatToWatch"))}</div>
        <p class="er-watch">${a(e.whatToWatch)}</p>
      </div>`:""}
      ${Array.isArray(e.notes)&&e.notes.length?`<p class="er-notes er-muted">${a(e.notes.slice(0,3).join(" · "))}</p>`:""}
      ${e.blocker?`<p class="er-miss">${a(s("earningsPartialBlocker"))}: ${a(e.blocker)}</p>`:""}
    </article>`}function lo(e,t){var i;const n=Array.isArray(t==null?void 0:t.mag7)?t.mag7:[],o=Array.isArray(t==null?void 0:t.watchlistHot)?t.watchlistHot:[];e.innerHTML=`
    <p class="er-meta">${a(s("dataAsOf"))} ${a(no(t==null?void 0:t.asOf))} · ${a(s("earningsUsFocus"))}</p>
    <p class="er-stub" role="note">${a(((i=t==null?void 0:t.twStub)==null?void 0:i.note)||s("earningsTwStub"))}</p>
    <div class="er-rule"><strong>${a(s("earningsSelectionTitle"))}</strong> ${a((t==null?void 0:t.selectionRule)||s("earningsSelectionFallback"))}</div>
        <div class="er-panels">
      <section class="er-panel" aria-label="${a(s("earningsMag7Title"))}">
        <h3 class="er-panel-title">${a(s("earningsMag7Title"))}</h3>
        <p class="er-panel-lead">${a(s("earningsMag7Lead"))}</p>
        <div class="er-cards">
          ${n.length?n.map(l=>Pa(l,{hot:!1})).join(""):`<p class="er-empty">${a(s("earningsEmpty"))}</p>`}
        </div>
      </section>
      <section class="er-panel" aria-label="${a(s("earningsHotTitle"))}">
        <h3 class="er-panel-title">${a(s("earningsHotTitle"))}</h3>
        <p class="er-panel-lead">${a(s("earningsHotLead"))}</p>
        <div class="er-cards">
          ${o.length?o.map(l=>Pa(l,{hot:!0})).join(""):`<p class="er-empty">${a(s("earningsHotEmpty"))}</p>`}
        </div>
      </section>
    </div>
    <p class="er-disclaimer" role="note">${a(s("earningsDisclaimer"))}</p>
  `}function ro(){return`
    <section class="section earnings-section" aria-label="${a(s("earningsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(s("earningsTitle"))}</h2>
        <p class="view-lead">${a(s("earningsLead"))}</p>
      </header>
      <p class="er-disclaimer er-disclaimer-top" role="note">${a(s("earningsDisclaimer"))}</p>
      <div id="er-root" class="er-root">
        <p class="er-loading">${a(s("loading"))}</p>
      </div>
    </section>`}async function co(e="#er-root"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};try{const n=await fetch(so);if(!n.ok)throw new Error(`HTTP ${n.status}`);const o=await n.json();return lo(t,o),{ok:!0,data:o}}catch(n){return t.innerHTML=`
      <div class="er-empty" role="status">
        <p>${a(s("earningsLoadError",{msg:n.message||String(n)}))}</p>
      </div>`,{ok:!1,error:n}}}const uo="./data/earnings-digest.json",dt=["https://query2.finance.yahoo.com","https://query1.finance.yahoo.com"],ne="https://r.jina.ai/",po="https://www.sec.gov/files/company_tickers.json",go=e=>`https://data.sec.gov/submissions/CIK${e}.json`,ho=/^(10-K|10-Q|8-K)(\/A)?$/i,fo=8,Ca=["price","summaryProfile","summaryDetail","defaultKeyStatistics","financialData","calendarEvents","earningsHistory"].join(",");let ge=null,Oe=null,Ie=null,He=null;function C(e){if(e==null)return null;if(typeof e=="object"&&"raw"in e){const t=e.raw;return t==null||Number.isNaN(t)?null:t}return typeof e=="number"&&Number.isNaN(e)?null:e}function H(e,t=2){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(L(),{minimumFractionDigits:t,maximumFractionDigits:t})}function ee(e,t=2){return e==null||Number.isNaN(e)?null:`${e>0?"+":""}${Number(e).toFixed(t)}%`}function mo(e){return e==null||Number.isNaN(e)?null:Math.abs(e)>=1e9?`${H(e/1e9,2)}B`:Math.abs(e)>=1e6?`${H(e/1e6,2)}M`:Math.abs(e)>=1e3?`${H(e/1e3,1)}K`:H(e,0)}function La(e,t){if(e==null||Number.isNaN(e))return null;const n=t==="TWD"?"NT$":t==="USD"?"$":"";return Math.abs(e)>=1e12?`${n}${H(e/1e12,2)}T`:Math.abs(e)>=1e9?`${n}${H(e/1e9,2)}B`:Math.abs(e)>=1e6?`${n}${H(e/1e6,2)}M`:`${n}${H(e,0)}`}function te(e,t){if(e==null||Number.isNaN(e))return null;const n=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"$":t==="TWD"?"NT$":""}${H(e,n)}`}function hs(e){try{const t=typeof e=="number"?new Date(e*(e<1e12?1e3:1)):new Date(e);return Number.isNaN(t.getTime())?null:t.toLocaleString(L(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return null}}function yo(e){return e==null||Number.isNaN(e)||e===0?"lk-flat":e>0?"lk-up":"lk-down"}function It(e){if(!e)return null;const t=String(e).trim();if(t.startsWith("{")||t.startsWith("["))try{return JSON.parse(t)}catch{}const n=t.match(/Markdown Content:\s*(\{[\s\S]*|\[[\s\S]*)/i),o=n?n[1].trim():t,i=o.search(/[\{\[]/);if(i<0)return null;const l=o.slice(i);for(let r=l.length;r>2;r--){try{return JSON.parse(l.slice(0,r))}catch{}const c=Math.max(l.lastIndexOf("}",r-2),l.lastIndexOf("]",r-2));if(c<8)break;r=c+2}return null}async function ut(e,{timeoutMs:t=14e3}={}){const n=typeof AbortController<"u"?new AbortController:null,o=n?setTimeout(()=>n.abort(),t):null;try{const i=await fetch(e,{signal:n==null?void 0:n.signal,headers:{Accept:"application/json,text/plain,*/*"}});if(!i.ok)throw new Error(`HTTP ${i.status}`);return await i.text()}finally{o&&clearTimeout(o)}}async function Ht(e){const t=[];for(const n of dt){const o=`${n}${e}`;try{const i=await ut(o,{timeoutMs:1e4}),l=It(i);if(l)return{ok:!0,data:l,via:"direct",url:o};t.push(`${n}: non-json`)}catch(i){t.push(`${n}: ${i.message||i}`)}}for(const n of dt){const o=`${n}${e}`;try{const i=await ut(`${ne}${o}`,{timeoutMs:18e3}),l=It(i);if(l)return{ok:!0,data:l,via:"jina",url:o};t.push(`jina ${n}: parse`)}catch(i){t.push(`jina ${n}: ${i.message||i}`)}}return{ok:!1,data:null,via:null,error:t.slice(0,4).join(" · ")}}function vo(e,t="US"){let n=String(e||"").trim().toUpperCase();if(n=n.replace(/\s+/g,""),!n)return{ok:!1,error:"empty"};const o=t==="TW"?"TW":"US";if(/^\d{4}(\.(TW|TWO))?$/.test(n)){const l=n.replace(/\.(TW|TWO)$/,"");return{ok:!0,market:"TW",symbol:`${l}.TW`,alt:`${l}.TWO`,display:l}}if(/\.(TW|TWO)$/.test(n))return{ok:!0,market:"TW",symbol:n,alt:n.endsWith(".TW")?n.replace(/\.TW$/,".TWO"):n.replace(/\.TWO$/,".TW"),display:n.replace(/\.(TW|TWO)$/,"")};if(/^\d{4,6}$/.test(n)&&o==="TW")return{ok:!0,market:"TW",symbol:`${n}.TW`,alt:`${n}.TWO`,display:n};let i=n.replace(/\./g,"-");return/^[A-Z][A-Z0-9\-]{0,9}$/.test(i)?{ok:!0,market:"US",symbol:i,alt:null,display:i}:{ok:!1,error:"invalid"}}function So(e){var c,d,u,p,g;const t=(d=(c=e==null?void 0:e.chart)==null?void 0:c.result)==null?void 0:d[0];if(!t)return null;const n=t.meta||{},o=n.chartPreviousClose??n.previousClose??(Array.isArray((g=(p=(u=t.indicators)==null?void 0:u.quote)==null?void 0:p[0])==null?void 0:g.close)?[...t.indicators.quote[0].close].reverse().find(h=>h!=null):null),i=n.regularMarketPrice??null;let l=null,r=n.regularMarketChangePercent??n.fulldayChangePercent??null;return i!=null&&o!=null&&(l=i-o,r==null&&o!==0&&(r=l/o*100)),{symbol:n.symbol||null,shortName:n.shortName||null,longName:n.longName||null,currency:n.currency||null,exchange:n.fullExchangeName||n.exchangeName||null,price:i,previousClose:o??null,change:l,changePct:r,volume:n.regularMarketVolume??null,dayHigh:n.regularMarketDayHigh??null,dayLow:n.regularMarketDayLow??null,fiftyTwoWeekHigh:n.fiftyTwoWeekHigh??null,fiftyTwoWeekLow:n.fiftyTwoWeekLow??null,marketTime:n.regularMarketTime??null,instrumentType:n.instrumentType||null}}function bo(e,t){const n=Array.isArray(e==null?void 0:e.quotes)?e.quotes:[],o=n.find(i=>String(i.symbol||"").toUpperCase()===t.toUpperCase())||n.find(i=>i.isYahooFinance)||n[0];return o?{symbol:o.symbol||null,shortName:o.shortname||o.shortName||null,longName:o.longname||o.longName||null,exchange:o.exchDisp||o.exchange||null,sector:o.sectorDisp||o.sector||null,industry:o.industryDisp||o.industry||null,quoteType:o.quoteType||o.typeDisp||null}:null}function qt(e){var h,y,b,k,x;const t=(y=(h=e==null?void 0:e.quoteSummary)==null?void 0:h.result)==null?void 0:y[0];if(!t)return null;const n=t.price||{},o=t.summaryProfile||{},i=t.summaryDetail||{},l=t.defaultKeyStatistics||{},r=t.financialData||{},c=((b=t.calendarEvents)==null?void 0:b.earnings)||{},d=Array.isArray((k=t.earningsHistory)==null?void 0:k.history)?t.earningsHistory.history:[],u=d.find(P=>P.period==="-1q")||[...d].sort((P,E)=>String(E.period||"").localeCompare(String(P.period||"")))[0]||null,g=(Array.isArray(c.earningsDate)?c.earningsDate:[]).map(P=>{var E;return(P==null?void 0:P.fmt)||(C(P)!=null?(E=hs(C(P)))==null?void 0:E.slice(0,10):null)}).find(Boolean)||null;return{name:n.longName||n.shortName||null,currency:n.currency||i.currency||null,business:o.longBusinessSummary||null,sector:o.sector||null,industry:o.industry||null,website:o.website||null,pe:C(i.trailingPE)??C(l.trailingPE),forwardPe:C(i.forwardPE)??C(l.forwardPE),marketCap:C(i.marketCap)??C(n.marketCap),epsTrailing:C(l.trailingEps)??C(r.trailingEps),revenue:C(r.totalRevenue),revenueGrowth:C(r.revenueGrowth)!=null?C(r.revenueGrowth)*100:null,earningsGrowth:C(r.earningsGrowth)!=null?C(r.earningsGrowth)*100:null,profitMargins:C(r.profitMargins)!=null?C(r.profitMargins)*100:null,grossMargins:C(r.grossMargins)!=null?C(r.grossMargins)*100:null,dividendYield:C(i.dividendYield)!=null?C(i.dividendYield)*100:null,beta:C(l.beta)??C(i.beta),bookValue:C(l.bookValue),nextEarningsDate:g,nextEarningsEstimate:C(c.earningsAverage),lastEpsActual:u?C(u.epsActual):null,lastEpsEstimate:u?C(u.epsEstimate):null,lastEpsSurprisePct:u&&C(u.surprisePercent)!=null?C(u.surprisePercent)*100:null,lastEpsPeriod:(u==null?void 0:u.period)||null,lastEpsQuarter:((x=u==null?void 0:u.quarter)==null?void 0:x.fmt)||null}}async function ko(){try{await fetch("https://guce.yahoo.com/consent?brandType=nonEu",{mode:"cors",credentials:"include",redirect:"follow"})}catch{}for(const e of dt)try{const t=await fetch(`${e}/v1/test/getcrumb`,{mode:"cors",credentials:"include"});if(!t.ok)continue;const n=(await t.text()).trim();if(n&&n.length<80&&!n.includes("{"))return{ok:!0,crumb:n,host:e}}catch{}return{ok:!1,crumb:"",host:dt[0]}}async function $o(e){const t=await ko();if(t.ok){const l=`/v10/finance/quoteSummary/${encodeURIComponent(e)}?modules=${Ca}&crumb=${encodeURIComponent(t.crumb)}`;try{const r=await fetch(`${t.host}${l}`,{mode:"cors",credentials:"include",headers:{Accept:"application/json"}});if(r.ok){const c=await r.json(),d=qt(c);if(d)return{ok:!0,data:d,via:"yahoo-crumb"}}}catch{}}const n=`/v10/finance/quoteSummary/${encodeURIComponent(e)}?modules=${Ca}`,o=await Ht(n);if(o.ok){const l=qt(o.data);if(l)return{ok:!0,data:l,via:`yahoo-${o.via}`}}const i=await To(e);return i.ok?i:{ok:!1,data:null,via:null,error:o.error||"quoteSummary unavailable"}}async function To(e){const t=[`https://finance.yahoo.com/quote/${encodeURIComponent(e)}/`,`${ne}https://finance.yahoo.com/quote/${encodeURIComponent(e)}/`];for(const n of t)try{const o=await ut(n,{timeoutMs:2e4});if(/AbuseAlleviation|Invalid Crumb|AuthenticationRequired/i.test(o)&&o.length<2e3)continue;const i=[...o.matchAll(/<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/gi)];for(const r of i)try{const c=JSON.parse(r[1]),d=typeof(c==null?void 0:c.body)=="string"?JSON.parse(c.body):(c==null?void 0:c.body)||c,u=qt(d);if(u!=null&&u.business||(u==null?void 0:u.pe)!=null||(u==null?void 0:u.marketCap)!=null)return{ok:!0,data:u,via:n.startsWith(ne)?"yahoo-html-jina":"yahoo-html"}}catch{}const l=o.match(/\\"longBusinessSummary\\":\\"(.*?)\\"/);if(l)return{ok:!0,data:{business:l[1].replace(/\\n/g," ").replace(/\\"/g,'"').replace(/\\\\/g,"\\").slice(0,800)},via:"yahoo-html-partial"}}catch{}return{ok:!1,data:null,via:null}}async function fs(){return ge||Oe||(Oe=(async()=>{try{const e=await fetch(uo,{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);ge=await e.json()}catch{ge={mag7:[],watchlistHot:[]}}return ge})(),Oe)}function wo(e){const t=ge;if(!t)return null;const n=String(e||"").replace(/\.TW$/i,"").replace(/\.TWO$/i,"").toUpperCase();return[...t.mag7||[],...t.watchlistHot||[]].find(i=>String(i.ticker||"").toUpperCase()===n)||null}function Me(e){const t=String(e??"").replace(/\D/g,"");return t?t.padStart(10,"0").slice(-10):null}function xo(e,t,n){const o=String(e??"").replace(/^0+/,"")||String(e??"").replace(/\D/g,""),i=String(t||"").replace(/-/g,""),l=String(n||"").trim();return!o||!i||!l?null:`https://www.sec.gov/Archives/edgar/data/${o}/${i}/${l}`}function Aa({market:e,symbol:t,display:n,website:o,cik:i}={}){const l=e==="TW"?"TW":"US",r=String(t||"").toUpperCase(),c=String(n||r.replace(/\.(TW|TWO)$/i,"")).replace(/\D/g,"").slice(0,6),d=[],p=new Date().getFullYear()-1911;if(l==="US"){const g=r.replace(/-/,"."),h=Me(i),y=h?String(Number(h)):null;d.push({kind:"official",id:"sec-edgar-search",labelKey:"lookupSecEdgarSearch",href:`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${encodeURIComponent(g)}&type=&dateb=&owner=include&count=40`}),y&&d.push({kind:"official",id:"sec-edgar-browse",labelKey:"lookupSecEdgarBrowse",href:`https://www.sec.gov/edgar/browse/?CIK=${encodeURIComponent(y)}`}),d.push({kind:"official",id:"sec-forms-filter",labelKey:"lookupSecFormsFilter",href:`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${encodeURIComponent(h||g)}&type=10-&dateb=&owner=include&count=40`})}else c?(d.push({kind:"official",id:"mops-financial-book",labelKey:"lookupMopsFinancialBook",href:`https://mops.twse.com.tw/server-java/t57sb01?step=1&colorchg=1&co_id=${encodeURIComponent(c)}&year=${p}&season=&mtype=A`}),d.push({kind:"official",id:"mops-financial-query",labelKey:"lookupMopsFinancialQuery",href:"https://mops.twse.com.tw/mops/web/t57sb01_q1"}),d.push({kind:"official",id:"mops-company",labelKey:"lookupMopsCompany",href:`https://mops.twse.com.tw/mops/web/t05st01?co_id=${encodeURIComponent(c)}`}),d.push({kind:"official",id:"mops-material",labelKey:"lookupMopsMaterial",href:`https://mops.twse.com.tw/mops/web/t05st02?co_id=${encodeURIComponent(c)}`}),d.push({kind:"official",id:"twse-isin",labelKey:"lookupTwseIsin",href:`https://isin.twse.com.tw/isin/basic_search.jsp?code=${encodeURIComponent(c)}`}),/\.TWO$/i.test(r)&&d.push({kind:"official",id:"tpex-company",labelKey:"lookupTpexCompany",href:`https://www.tpex.org.tw/zh-tw/mainboard/listed/company-detail.html?stkno=${encodeURIComponent(c)}`})):d.push({kind:"official",id:"mops-home",labelKey:"lookupMopsFinancialQuery",href:"https://mops.twse.com.tw/mops/web/t57sb01_q1"}),r&&d.push({kind:"quote",id:"yahoo-tw",labelKey:"lookupYahooTwQuote",href:`https://tw.stock.yahoo.com/quote/${encodeURIComponent(r)}`});return o&&/^https?:\/\//i.test(String(o))&&d.push({kind:"company",id:"company-website",labelKey:"lookupCompanyWebsite",href:String(o).trim()}),{market:l,links:d,code:c||null,cik:Me(i)}}async function ms(e,{timeoutMs:t=18e3}={}){const n=[];for(const o of[`${ne}${e}`,e])try{const i=await ut(o,{timeoutMs:t}),l=It(i);if(l)return{ok:!0,data:l,via:o.startsWith(ne)?"jina":"direct"};n.push(`${o.startsWith(ne)?"jina":"direct"}: non-json`)}catch(i){n.push(`${o.startsWith(ne)?"jina":"direct"}: ${i.message||i}`)}return{ok:!1,data:null,via:null,error:n.slice(0,3).join(" · ")}}async function Po(){return Ie||He||(He=(async()=>{const e=await ms(po,{timeoutMs:22e3}),t=new Map;if(e.ok&&e.data&&typeof e.data=="object")for(const n of Object.values(e.data)){const o=String((n==null?void 0:n.ticker)||"").toUpperCase(),i=Me(n==null?void 0:n.cik_str);o&&i&&t.set(o,i)}return Ie={map:t,via:e.via,ok:e.ok,error:e.error||null},Ie})(),He)}async function Co(e){const t=String(e||"").toUpperCase().replace(/\./g,"-");if(!t)return{ok:!1,cik:null};const n=await Po(),o=n.map.get(t)||null;return{ok:!!o,cik:o,via:n.via,error:o?null:n.error||"cik_not_found"}}function Lo(e,{limit:t=fo}={}){var l,r,c,d,u,p;const n=(l=e==null?void 0:e.filings)==null?void 0:l.recent;if(!n||!Array.isArray(n.form))return[];const o=Me(e.cik),i=[];for(let g=0;g<n.form.length&&i.length<t;g++){const h=String(n.form[g]||"");if(!ho.test(h))continue;const y=((r=n.accessionNumber)==null?void 0:r[g])||null,b=((c=n.primaryDocument)==null?void 0:c[g])||null,k=((d=n.filingDate)==null?void 0:d[g])||null,x=((u=n.primaryDocDescription)==null?void 0:u[g])||((p=n.items)==null?void 0:p[g])||h,P=xo(o,y,b);P&&i.push({form:h,filingDate:k,description:String(x||h).slice(0,160),accessionNumber:y,href:P})}return i}async function Ao(e){var l,r;const t=Me(e);if(!t)return{ok:!1,filings:[],companyName:null,investorWebsite:null,error:"no_cik"};const n=await ms(go(t),{timeoutMs:22e3});if(!n.ok)return{ok:!1,filings:[],companyName:null,investorWebsite:null,error:n.error};const o=Lo(n.data),i=(l=n.data)!=null&&l.investorWebsite&&/^https?:\/\//i.test(n.data.investorWebsite)?n.data.investorWebsite:null;return{ok:!0,filings:o,companyName:((r=n.data)==null?void 0:r.name)||null,investorWebsite:i,via:n.via}}async function Eo({market:e,symbol:t,display:n,website:o}={}){const i=Aa({market:e,symbol:t,display:n,website:o,cik:null}),l={market:i.market,links:i.links,recent:[],cik:null,status:"links_only",noteKey:null,sources:[]};if(i.market==="TW")return l.status="links_ready",l.noteKey="lookupFilingsTwNote",l.sources.push("MOPS"),l;const r=String(t||"").toUpperCase();try{const c=await Co(r);if(c.ok){l.cik=c.cik,l.links=Aa({market:"US",symbol:t,display:n,website:o,cik:c.cik}).links,c.via&&l.sources.push(`SEC ticker map (${c.via})`);const d=await Ao(c.cik);d.ok?(l.recent=d.filings,l.status=d.filings.length?"filings_ok":"filings_empty",l.noteKey=d.filings.length?null:"lookupFilingsListEmpty",d.via&&l.sources.push(`SEC submissions (${d.via})`),d.investorWebsite&&(l.links.some(p=>p.href===d.investorWebsite)||l.links.push({kind:"company",id:"sec-investor-site",labelKey:"lookupInvestorRelations",href:d.investorWebsite}))):(l.status="filings_unavailable",l.noteKey="lookupFilingsListUnavailable")}else l.status="cik_unavailable",l.noteKey="lookupFilingsCikUnavailable"}catch{l.status="filings_unavailable",l.noteKey="lookupFilingsListUnavailable"}return l}function jo({market:e,symbol:t,chart:n,search:o,summary:i,digest:l}){var p,g,h,y;const r=(i==null?void 0:i.currency)||(n==null?void 0:n.currency)||(e==="TW"?"TWD":"USD"),c=(i==null?void 0:i.name)||(n==null?void 0:n.longName)||(n==null?void 0:n.shortName)||(o==null?void 0:o.longName)||(o==null?void 0:o.shortName)||(l==null?void 0:l.name)||t,d=(i==null?void 0:i.business)||(l!=null&&l.whatItDoes?String(l.whatItDoes):null)||null;return{market:e,symbol:t,name:c,business:d,sector:(i==null?void 0:i.sector)||(o==null?void 0:o.sector)||null,industry:(i==null?void 0:i.industry)||(o==null?void 0:o.industry)||null,exchange:(n==null?void 0:n.exchange)||(o==null?void 0:o.exchange)||null,currency:r,price:(n==null?void 0:n.price)??null,change:(n==null?void 0:n.change)??null,changePct:(n==null?void 0:n.changePct)??null,previousClose:(n==null?void 0:n.previousClose)??null,volume:(n==null?void 0:n.volume)??null,dayHigh:(n==null?void 0:n.dayHigh)??null,dayLow:(n==null?void 0:n.dayLow)??null,fiftyTwoWeekHigh:(n==null?void 0:n.fiftyTwoWeekHigh)??null,fiftyTwoWeekLow:(n==null?void 0:n.fiftyTwoWeekLow)??null,marketTime:(n==null?void 0:n.marketTime)??null,pe:(i==null?void 0:i.pe)??(l==null?void 0:l.pe)??null,forwardPe:(i==null?void 0:i.forwardPe)??(l==null?void 0:l.forwardPe)??null,marketCap:(i==null?void 0:i.marketCap)??(l==null?void 0:l.marketCap)??null,epsTrailing:(i==null?void 0:i.epsTrailing)??null,revenue:(i==null?void 0:i.revenue)??null,revenueGrowth:(i==null?void 0:i.revenueGrowth)??(l==null?void 0:l.revenueYoYPct)??null,earningsGrowth:(i==null?void 0:i.earningsGrowth)??(l==null?void 0:l.epsYoYPct)??null,profitMargins:(i==null?void 0:i.profitMargins)??null,grossMargins:(i==null?void 0:i.grossMargins)??null,dividendYield:(i==null?void 0:i.dividendYield)??null,beta:(i==null?void 0:i.beta)??null,nextEarningsDate:(i==null?void 0:i.nextEarningsDate)??(l==null?void 0:l.nextEarningsDate)??null,nextEarningsEstimate:(i==null?void 0:i.nextEarningsEstimate)??(l==null?void 0:l.consensusEpsNext)??null,lastEpsActual:(i==null?void 0:i.lastEpsActual)??((p=l==null?void 0:l.lastReport)==null?void 0:p.epsActual)??null,lastEpsEstimate:(i==null?void 0:i.lastEpsEstimate)??((g=l==null?void 0:l.lastReport)==null?void 0:g.epsEstimate)??null,lastEpsSurprisePct:(i==null?void 0:i.lastEpsSurprisePct)??((h=l==null?void 0:l.lastReport)==null?void 0:h.epsSurprisePct)??null,lastEpsQuarter:(i==null?void 0:i.lastEpsQuarter)??((y=l==null?void 0:l.lastReport)==null?void 0:y.quarter)??null,website:(i==null?void 0:i.website)||null,sources:[],filings:null}}async function zo(e,t="US"){const n=vo(e,t);if(!n.ok)return{ok:!1,error:n.error||"invalid",snapshot:null};await fs();const o=[n.symbol];n.alt&&o.push(n.alt);let i=null,l=n.symbol,r=null,c=null;for(const x of o){const P=await Ht(`/v8/finance/chart/${encodeURIComponent(x)}?interval=1d&range=5d&includePrePost=false`);if(P.ok){if(i=So(P.data),(i==null?void 0:i.price)!=null||i!=null&&i.longName||i!=null&&i.shortName){l=x,r=P.via;break}i=null}else c=P.error}if(!i)return{ok:!1,error:"not_found",detail:c,snapshot:null,symbol:l,market:n.market};const d=encodeURIComponent(n.display||l),u=await Ht(`/v1/finance/search?q=${d}&quotesCount=8&newsCount=0&listsCount=0`),p=u.ok?bo(u.data,l):null,g=await $o(l),h=wo(l),y=jo({market:n.market,symbol:l,chart:i,search:p,summary:g.data,digest:h}),b=[];r&&b.push(`Yahoo chart (${r})`),u.ok&&b.push(`Yahoo search (${u.via})`),g.ok&&b.push(`Yahoo quoteSummary (${g.via})`),h&&b.push("site earnings-digest");const k=await Eo({market:n.market,symbol:l,display:n.display,website:y.website});if(y.filings=k,Array.isArray(k==null?void 0:k.sources))for(const x of k.sources)b.push(x);return y.sources=b,{ok:!0,snapshot:y,market:n.market,symbol:l,partial:!g.ok}}function N(e,t){return t?`<div class="lk-metric">
    <div class="lk-ml">${a(e)}</div>
    <div class="lk-mv">${t}</div>
  </div>`:""}function B(e){return e==null||e===""?null:`<span class="lk-mono">${a(String(e))}</span>`}function Mo(e){return e==="official"?`<span class="lk-src-badge lk-src-official">${a(s("lookupSourceOfficial"))}</span>`:e==="quote"?`<span class="lk-src-badge lk-src-quote">${a(s("lookupSourceQuote"))}</span>`:e==="company"?`<span class="lk-src-badge lk-src-company">${a(s("lookupSourceCompany"))}</span>`:""}function Ro(e){if(!e||!Array.isArray(e.links)||!e.links.length)return"";const t=e.links.map(i=>{if(!(i!=null&&i.href))return"";const l=s(i.labelKey||"lookupOfficialFilings");return`<li class="lk-ofil-item">
        ${Mo(i.kind)}
        <a class="lk-ofil-link" href="${a(i.href)}" target="_blank" rel="noopener noreferrer">${a(l)}</a>
      </li>`}).filter(Boolean).join("");let n="";if(e.market==="US")if(Array.isArray(e.recent)&&e.recent.length){const i=e.recent.map(l=>{const r=l.description||l.form||"";return`<tr>
            <td class="lk-ofil-form"><span class="lk-mono">${a(l.form||"")}</span></td>
            <td class="lk-ofil-date">${a(l.filingDate||"—")}</td>
            <td class="lk-ofil-title"><a href="${a(l.href)}" target="_blank" rel="noopener noreferrer">${a(r)}</a></td>
          </tr>`}).join("");n=`
        <h5 class="lk-h5">${a(s("lookupRecentFilings"))}</h5>
        <div class="lk-ofil-table-wrap">
          <table class="lk-ofil-table">
            <thead><tr>
              <th>${a(s("lookupFilingForm"))}</th>
              <th>${a(s("lookupFilingDate"))}</th>
              <th>${a(s("lookupFilingDoc"))}</th>
            </tr></thead>
            <tbody>${i}</tbody>
          </table>
        </div>`}else{const i=e.noteKey?s(e.noteKey):s("lookupFilingsListUnavailable");n=`<p class="lk-ofil-note">${a(i)}</p>
        <p class="lk-ofil-note">${a(s("lookupFilingsLinksStillWork"))}</p>`}else if(e.market==="TW"){const i=e.noteKey?s(e.noteKey):s("lookupFilingsTwNote");n=`<p class="lk-ofil-note">${a(i)}</p>`}const o=e.cik?`<p class="lk-ofil-meta">${a(s("lookupCikLabel"))}: <span class="lk-mono">${a(e.cik)}</span></p>`:"";return`
    <section class="lk-block lk-ofil" aria-label="${a(s("lookupOfficialFilings"))}">
      <h4 class="lk-h4">${a(s("lookupOfficialFilings"))}</h4>
      <p class="lk-ofil-lead">${a(s("lookupOfficialFilingsLead"))}</p>
      ${o}
      <ul class="lk-ofil-links">${t}</ul>
      ${n}
    </section>`}function Ea(e,t){if(!(t!=null&&t.ok)||!t.snapshot){const c=(t==null?void 0:t.error)==="empty"?s("lookupEmptyInput"):(t==null?void 0:t.error)==="invalid"?s("lookupInvalid"):(t==null?void 0:t.error)==="not_found"?s("lookupNotFound"):s("lookupError",{msg:(t==null?void 0:t.detail)||(t==null?void 0:t.error)||"error"});e.innerHTML=`<div class="lk-empty" role="status">${a(c)}</div>`;return}const n=t.snapshot,o=yo(n.changePct??n.change),i=n.market==="TW"?`<span class="lk-badge lk-badge-tw">${a(s("twStock"))}</span>`:`<span class="lk-badge lk-badge-us">${a(s("usStock"))}</span>`,l=n.business?`<p class="lk-biz">${a(n.business.length>520?`${n.business.slice(0,520)}…`:n.business)}</p>`:"",r=hs(n.marketTime);e.innerHTML=`
    <article class="lk-card" data-symbol="${a(n.symbol)}">
      <header class="lk-card-head">
        <div>
          <div class="lk-sym-row">
            <span class="lk-symbol">${a(n.symbol)}</span>
            ${i}
          </div>
          <h3 class="lk-name">${a(n.name||"")}</h3>
          <p class="lk-meta-line">
            ${n.exchange?a(n.exchange):""}
            ${n.sector?` · ${a(n.sector)}`:""}
            ${n.industry?` · ${a(n.industry)}`:""}
          </p>
        </div>
        <div class="lk-quote ${o}">
          <div class="lk-price">${a(te(n.price,n.currency)||"—")}</div>
          <div class="lk-chg">
            <span>${a(te(n.change,n.currency)||"—")}</span>
            <span>${a(ee(n.changePct)||"—")}</span>
          </div>
          ${r?`<div class="lk-asof">${a(s("dataAsOf"))} ${a(r)}</div>`:""}
        </div>
      </header>

      <section class="lk-block" aria-label="${a(s("lookupBusiness"))}">
        <h4 class="lk-h4">${a(s("lookupBusiness"))}</h4>
        ${l||`<p class="lk-muted">${a(s("earningsDataMissing"))}</p>`}
      </section>

      <section class="lk-block" aria-label="${a(s("lookupQuoteStats"))}">
        <h4 class="lk-h4">${a(s("lookupQuoteStats"))}</h4>
        <div class="lk-metrics">
          ${N(s("lookupPrevClose"),B(te(n.previousClose,n.currency)))}
          ${N(s("lookupVolume"),B(mo(n.volume)))}
          ${N(s("lookupDayRange"),n.dayLow!=null&&n.dayHigh!=null?B(`${te(n.dayLow,n.currency)} – ${te(n.dayHigh,n.currency)}`):null)}
          ${N(s("lookup52w"),n.fiftyTwoWeekLow!=null&&n.fiftyTwoWeekHigh!=null?B(`${te(n.fiftyTwoWeekLow,n.currency)} – ${te(n.fiftyTwoWeekHigh,n.currency)}`):null)}
          ${N(s("lookupMarketCap"),B(La(n.marketCap,n.currency)))}
          ${N(s("earningsPe"),B(H(n.pe,1)))}
          ${N(s("earningsForwardPe"),B(H(n.forwardPe,1)))}
          ${N(s("lookupEps"),B(H(n.epsTrailing,2)))}
          ${N(s("lookupBeta"),B(H(n.beta,2)))}
          ${N(s("lookupDivYield"),B(ee(n.dividendYield,2)))}
        </div>
      </section>

      <section class="lk-block" aria-label="${a(s("lookupFinancials"))}">
        <h4 class="lk-h4">${a(s("lookupFinancials"))}</h4>
        <div class="lk-metrics">
          ${N(s("lookupRevenue"),B(La(n.revenue,n.currency)))}
          ${N(s("earningsRevYoy"),B(ee(n.revenueGrowth,1)))}
          ${N(s("earningsEpsYoy"),B(ee(n.earningsGrowth,1)))}
          ${N(s("lookupGrossMargin"),B(ee(n.grossMargins,1)))}
          ${N(s("lookupProfitMargin"),B(ee(n.profitMargins,1)))}
        </div>
      </section>

      <section class="lk-block" aria-label="${a(s("lookupEarnings"))}">
        <h4 class="lk-h4">${a(s("lookupEarnings"))}</h4>
        <div class="lk-metrics">
          ${N(s("earningsNextDate"),B(n.nextEarningsDate))}
          ${N(s("lookupEpsConsensus"),B(H(n.nextEarningsEstimate,2)))}
          ${N(s("earningsLastEps"),n.lastEpsActual!=null?B(`${H(n.lastEpsActual,2)}${n.lastEpsQuarter?` · ${n.lastEpsQuarter}`:""}`):null)}
          ${N(s("lookupEpsSurprise"),B(ee(n.lastEpsSurprisePct,1)))}
        </div>
      </section>

      ${Ro(n.filings)}

      <p class="lk-sources">${a(s("lookupSources"))}: ${a((n.sources||[]).join(" · ")||"Yahoo Finance")}</p>
      ${t.partial?`<p class="lk-partial">${a(s("lookupPartial"))}</p>`:""}
      <p class="lk-disclaimer" role="note">${a(s("lookupDisclaimer"))}</p>
    </article>`}function No(){return`
    <section class="section lookup-section" aria-label="${a(s("lookupTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(s("lookupTitle"))}</h2>
        <p class="view-lead">${a(s("lookupLead"))}</p>
      </header>
      <p class="lk-disclaimer lk-disclaimer-top" role="note">${a(s("lookupDisclaimer"))}</p>
      <div class="lk-market-tabs" role="tablist" aria-label="${a(s("market"))}">
        <button type="button" class="lk-tab is-active" data-lk-market="US" role="tab" aria-selected="true">${a(s("usStock"))}</button>
        <button type="button" class="lk-tab" data-lk-market="TW" role="tab" aria-selected="false">${a(s("twStock"))}</button>
      </div>
      <form class="lk-form" data-lk-form>
        <label class="lk-label" for="lk-input">${a(s("lookupInputLabel"))}</label>
        <div class="lk-row">
          <input id="lk-input" class="lk-input" name="symbol" type="text" autocomplete="off" spellcheck="false"
            placeholder="${a(s("lookupPlaceholderUs"))}" data-lk-input />
          <button type="submit" class="lk-submit">${a(s("lookupSearch"))}</button>
        </div>
        <p class="lk-hint" data-lk-hint>${a(s("lookupHintUs"))}</p>
      </form>
      <div id="lk-root" class="lk-root" aria-live="polite">
        <p class="lk-muted">${a(s("lookupIdle"))}</p>
      </div>
    </section>`}function Bo(e="#lk-root"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};const n=t.closest(".lookup-section")||t.parentElement;if(!n||n.dataset.lkBound==="1")return{ok:!0,root:t};n.dataset.lkBound="1";const o=n.querySelector("[data-lk-form]"),i=n.querySelector("[data-lk-input]"),l=n.querySelector("[data-lk-hint]"),r=n.querySelectorAll("[data-lk-market]");let c="US";const d=p=>{c=p==="TW"?"TW":"US",r.forEach(g=>{const h=g.dataset.lkMarket===c;g.classList.toggle("is-active",h),g.setAttribute("aria-selected",h?"true":"false")}),i&&(i.placeholder=s(c==="TW"?"lookupPlaceholderTw":"lookupPlaceholderUs")),l&&(l.textContent=s(c==="TW"?"lookupHintTw":"lookupHintUs"))};r.forEach(p=>{p.addEventListener("click",()=>d(p.dataset.lkMarket))});const u=async()=>{const p=(i==null?void 0:i.value)||"";t.innerHTML=`<p class="lk-loading">${a(s("lookupLoading"))}</p>`;try{const g=await zo(p,c);Ea(t,g)}catch(g){Ea(t,{ok:!1,error:"error",detail:(g==null?void 0:g.message)||String(g)})}};o==null||o.addEventListener("submit",p=>{p.preventDefault(),u()});try{const p=String(location.hash||""),g=p.match(/[?&]q=([^&]+)/i)||p.match(/#(?:lookup|quote)\/([A-Za-z0-9.\-]+)/i);if(g){const h=decodeURIComponent(g[1]);/^\d{4}/.test(h)||/\.TW/i.test(h)?d("TW"):d("US"),i&&(i.value=h),u()}}catch{}return fs(),{ok:!0,root:t,run:u}}const Do="./data/soxl-desk.json";function Oo(e){try{return new Date(e).toLocaleString(L(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return e||"—"}}function Ce(e,t=2){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(L(),{minimumFractionDigits:t,maximumFractionDigits:t})}function Mt(e,t=2){return e==null||Number.isNaN(e)?null:`${e>0?"+":""}${Number(e).toFixed(t)}%`}function ja(e,t=2){return e==null||Number.isNaN(e)?null:`${e>0?"+":(e<0,"")}${Ce(e,t)}`}function qe(e){return e==null||Number.isNaN(e)||e===0?"sx-flat":e>0?"sx-up":"sx-down"}function Io(e,t){const n=(t==null?void 0:t.quote)||{},o=n.change,i=n.changePct,l=qe(i??o),r=n.regularClose,c=`
    <section class="sx-hero" aria-label="${a(s("soxlHeroLabel"))}">
      <div class="sx-hero-main">
        <div class="sx-symbol-row">
          <span class="sx-symbol">SOXL</span>
          <span class="sx-badge">3×</span>
          <span class="sx-fund">${a((t==null?void 0:t.fundName)||s("soxlFundFallback"))}</span>
        </div>
        <div class="sx-price-row ${l}" data-lq="soxl" data-lq-sym="SOXL">
          <span class="sx-price" data-lq-field="price">$${a(Ce(n.price,2)||"—")}</span>
          <span class="sx-chg">${a(ja(o,2)||"—")}</span>
          <span class="sx-chgp" data-lq-field="dayPct">${a(Mt(i,2)||"—")}</span>
        </div>
        <p class="sx-session">${a(n.session||"")} · ${a(s("dataAsOf"))} ${a(Oo(t==null?void 0:t.asOf))}</p>
        ${(r==null?void 0:r.price)!=null?`<p class="sx-regular">${a(s("soxlRegularClose"))}: $${a(Ce(r.price,2))}
                <span class="${qe(r.changePct)}">${a(ja(r.change,2)||"")} (${a(Mt(r.changePct,2)||"")})</span>
                ${r.session?` · ${a(r.session)}`:""}</p>`:""}
      </div>
      <div class="sx-hero-side">
        <p class="sx-lev">${a(s("soxlLeverageNote"))}</p>
        <p class="sx-hold-date"><strong>${a(s("soxlHoldingsAsOf"))}</strong> ${a((t==null?void 0:t.holdingsAsOf)||"—")}
          <span class="sx-muted">（${a(s("soxlHoldingsNotSameDay"))}）</span></p>
      </div>
    </section>`,d=Array.isArray(t==null?void 0:t.events)?t.events:[],u=d.length?`<section class="sx-events" aria-label="${a(s("soxlEventsTitle"))}">
        <h3 class="sx-h3">${a(s("soxlEventsTitle"))}</h3>
        <ul class="sx-event-list">
          ${d.map(T=>`<li class="sx-event sx-sev-${a(T.severity||"info")}">
              <div class="sx-event-title">${a(T.title||"")}</div>
              <p class="sx-event-detail">${a(T.detail||"")}</p>
            </li>`).join("")}
        </ul>
      </section>`:"",p=Array.isArray(t==null?void 0:t.news)?t.news:[],g=`
    <section class="sx-news" aria-label="${a(s("soxlNewsTitle"))}">
      <h3 class="sx-h3">${a(s("soxlNewsTitle"))}</h3>
      <div class="sx-news-list">
        ${p.length?p.map(T=>`<a class="sx-news-card" href="${a(T.url||"#")}" target="_blank" rel="noopener noreferrer">
              <div class="sx-news-title">${a(T.title||"")}</div>
              ${T.published?`<div class="sx-news-meta">${a(T.published)}</div>`:""}
              ${T.summary?`<p class="sx-news-sum">${a(T.summary)}</p>`:""}
            </a>`).join(""):`<p class="sx-empty">${a(s("soxlNewsEmpty"))}</p>`}
      </div>
    </section>`,y=(Array.isArray(t==null?void 0:t.holdings)?t.holdings:[]).map(T=>{const w=T.ticker||T.instrumentType||"—",m=qe(T.changePct),S=qe(T.contributionPct),$=Array.isArray(T.reasons)?T.reasons:[],A=Array.isArray(T.sources)?T.sources:[];return`<tr>
        <td>
          <div class="sx-tk">${a(String(w))}</div>
          <div class="sx-name">${a(T.name||"")}</div>
          ${T.instrumentType?`<span class="sx-itype">${a(T.instrumentType)}</span>`:""}
        </td>
        <td class="sx-num">${T.weightPct!=null?a(Ce(T.weightPct,2))+"%":"—"}</td>
        <td class="sx-num ${m}">${T.changePct!=null?a(Mt(T.changePct,2)):"—"}</td>
        <td class="sx-num ${S}" title="${a(T.contributionNote||s("soxlContributionHint"))}">
          ${T.contributionPct!=null?a(Ce(T.contributionPct,3))+" pp*":"—"}
        </td>
        <td class="sx-reasons">
          <ul>${$.map(R=>`<li>${a(R)}</li>`).join("")}</ul>
          ${A.length?`<div class="sx-srcs">${A.slice(0,3).map((R,W)=>`<a href="${a(R)}" target="_blank" rel="noopener noreferrer">${a(s("soxlSourceN",{n:String(W+1)}))}</a>`).join(" · ")}</div>`:""}
        </td>
      </tr>`}).join(""),b=`
    <section class="sx-holdings" aria-label="${a(s("soxlHoldingsTitle"))}">
      <h3 class="sx-h3">${a(s("soxlHoldingsTitle"))}</h3>
      <p class="sx-panel-lead">${a((t==null?void 0:t.holdingsFreshnessNote)||s("soxlHoldingsLead"))}</p>
      <p class="sx-panel-lead sx-muted">${a((t==null?void 0:t.leverageNote)||s("soxlContributionHint"))}</p>
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
          <tbody>${y||`<tr><td colspan="5">${a(s("soxlHoldingsEmpty"))}</td></tr>`}</tbody>
        </table>
      </div>
      <p class="sx-footnote">* ${a(s("soxlContributionHint"))}</p>
    </section>`,k=Array.isArray(t==null?void 0:t.overallUpReasons)?t.overallUpReasons:[],x=Array.isArray(t==null?void 0:t.overallDownReasons)?t.overallDownReasons:[],P=`
    <section class="sx-overall" aria-label="${a(s("soxlOverallTitle"))}">
      <h3 class="sx-h3">${a(s("soxlOverallTitle"))}</h3>
      <div class="sx-overall-grid">
        <article class="sx-card sx-card-up">
          <h4>${a(s("soxlWhyUp"))}</h4>
          <ul>${k.map(T=>`<li>${a(T)}</li>`).join("")||`<li>${a(s("earningsDataMissing"))}</li>`}</ul>
        </article>
        <article class="sx-card sx-card-down">
          <h4>${a(s("soxlWhyDown"))}</h4>
          <ul>${x.map(T=>`<li>${a(T)}</li>`).join("")||`<li>${a(s("earningsDataMissing"))}</li>`}</ul>
        </article>
      </div>
    </section>`,E=Array.isArray(t==null?void 0:t.disclaimers)?t.disclaimers:[],Se=E.length?`<ul class="sx-disc-list">${E.map(T=>`<li>${a(T)}</li>`).join("")}</ul>`:`<p>${a(s("soxlDisclaimer"))}</p>`;e.innerHTML=`
    ${c}
    ${u}
    ${g}
    ${b}
    ${P}
    <div class="sx-disclaimer" role="note">${Se}</div>
  `}function Ho(){return`
    <section class="section soxl-section" aria-label="${a(s("soxlTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(s("soxlTitle"))}</h2>
        <p class="view-lead">${a(s("soxlLead"))}</p>
      </header>
      <p class="sx-disclaimer sx-disclaimer-top" role="note">${a(s("soxlDisclaimer"))}</p>
      <div id="sx-root" class="sx-root">
        <p class="sx-loading">${a(s("loading"))}</p>
      </div>
    </section>`}async function qo(e="#sx-root"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};try{const n=await fetch(Do);if(!n.ok)throw new Error(`HTTP ${n.status}`);const o=await n.json();return Io(t,o),{ok:!0,data:o}}catch(n){return t.innerHTML=`
      <div class="sx-empty" role="status">
        <p>${a(s("soxlLoadError",{msg:n.message||String(n)}))}</p>
      </div>`,{ok:!1,error:n}}}const Fo="./data/txf-desk.json";function Wo(e){try{return new Date(e).toLocaleString(L(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return e||"—"}}function Y(e,t=2){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(L(),{minimumFractionDigits:t,maximumFractionDigits:t})}function F(e){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(L(),{maximumFractionDigits:0})}function et(e,t=2){return e==null||Number.isNaN(e)?null:`${e>0?"+":""}${Number(e).toFixed(t)}%`}function Ft(e,t=2){return e==null||Number.isNaN(e)?null:`${e>0?"+":""}${Y(e,t)}`}function K(e){return e==null||Number.isNaN(e)||e===0?"txf-flat":e>0?"txf-up":"txf-down"}function pt(e){if(!e)return"—";const t=String(e);return/^\d{6}$/.test(t)?`${t.slice(0,4)}/${t.slice(4,6)}`:t}function _o(e){var d;const t=(d=e==null?void 0:e.contracts)==null?void 0:d.TX,n=(t==null?void 0:t.near)||{},o=(e==null?void 0:e.spot)||{},i=(e==null?void 0:e.basis)||{},l=n.change,r=n.changePct,c=K(r??l);return`
    <section class="txf-hero" aria-label="${a(s("txfHeroLabel"))}">
      <div class="txf-hero-main">
        <div class="txf-symbol-row">
          <span class="txf-symbol">TX</span>
          <span class="txf-badge">${a(s("txfNearBadge"))}</span>
          <span class="txf-fund">${a((t==null?void 0:t.nameZh)||s("txfTitle"))} · ${a(pt(n.month))}</span>
        </div>
        <div class="txf-price-row ${c}">
          <span class="txf-price">${a(Y(n.last,0)||"—")}</span>
          <span class="txf-chg">${a(Ft(l,0)||"—")}</span>
          <span class="txf-chgp">${a(et(r,2)||"—")}</span>
        </div>
        <p class="txf-session">${a(s("txfSettle"))}: ${a(Y(n.settle,0)||"—")}
          · ${a(s("txfVolume"))}: ${a(F(n.volume)||"—")}
          · ${a(s("txfOI"))}: ${a(F(n.openInterest)||"—")}
        </p>
        <p class="txf-session">${a(s("dataAsOf"))} ${a(Wo(e==null?void 0:e.asOf))}
          · ${a(s("txfSessionDate"))}: ${a((e==null?void 0:e.sessionDate)||"—")}</p>
      </div>
      <div class="txf-hero-side">
        <div class="txf-side-row" data-lq-key="tw" data-lq-sym="^TWII">
          <span class="txf-side-label">${a(s("txfSpotLabel"))}</span>
          <span class="txf-side-val ${K(o.changePct)}" data-lq-field="value">${a(Y(o.last,2)||"—")}</span>
          <span class="txf-side-chg ${K(o.changePct)}">${a(et(o.changePct,2)||"—")}</span>
        </div>
        <div class="txf-side-row">
          <span class="txf-side-label">${a(s("txfBasisLabel"))}</span>
          <span class="txf-side-val ${K(i.basisPoints)}">${a(Ft(i.basisPoints,1)||"—")}</span>
          <span class="txf-side-chg ${K(i.basisPct)}">${a(et(i.basisPct,3)||"—")}</span>
        </div>
        <p class="txf-side-note">${a(i.noteZh||s("txfBasisHint"))}</p>
        <p class="txf-side-note">${a(s("txfMultiplierShort",{n:String((t==null?void 0:t.multiplierTwdPerPoint)??200)}))}</p>
      </div>
    </section>`}function Uo(e){const t=[];return e!=null&&e.near&&t.push({tag:s("txfNearBadge"),c:e.near}),e!=null&&e.next&&t.push({tag:s("txfNextBadge"),c:e.next}),t.map(({tag:n,c:o})=>{const i=K(o.changePct??o.change);return`<tr>
        <td><span class="txf-pill">${a(n)}</span> ${a(pt(o.month))}</td>
        <td class="txf-num ${i}">${a(Y(o.last,0)||"—")}</td>
        <td class="txf-num">${a(Y(o.settle,0)||"—")}</td>
        <td class="txf-num ${i}">${a(Ft(o.change,0)||"—")} (${a(et(o.changePct,2)||"—")})</td>
        <td class="txf-num">${a(F(o.volume)||"—")}</td>
        <td class="txf-num">${a(F(o.openInterest)||"—")}</td>
        <td class="txf-num">${a(o.lastTradingDay||"—")}</td>
      </tr>`}).join("")}function Vo(e){var o,i,l;const n=[["TX",(o=e==null?void 0:e.contracts)==null?void 0:o.TX],["MTX",(i=e==null?void 0:e.contracts)==null?void 0:i.MTX],["TMF",(l=e==null?void 0:e.contracts)==null?void 0:l.TMF]].filter(([,r])=>r==null?void 0:r.near).map(([r,c])=>{const d=c.margin||{};return`
      <article class="txf-contract-card">
        <header class="txf-contract-head">
          <h4>${a(r)} · ${a(c.nameZh||"")}</h4>
          <p class="txf-muted">${a(s("txfMultLabel"))}: NT$${a(F(c.multiplierTwdPerPoint)||"—")}${a(s("txfPerPoint"))}
            · ${a(s("txfMarginInitial"))}: NT$${a(F(d.initial)||"—")}
            · ${a(s("txfMarginMaint"))}: NT$${a(F(d.maintenance)||"—")}</p>
        </header>
        <div class="txf-table-wrap">
          <table class="txf-table">
            <thead>
              <tr>
                <th>${a(s("txfColMonth"))}</th>
                <th>${a(s("txfColLast"))}</th>
                <th>${a(s("txfColSettle"))}</th>
                <th>${a(s("txfColChange"))}</th>
                <th>${a(s("txfColVolume"))}</th>
                <th>${a(s("txfColOI"))}</th>
                <th>${a(s("txfColLTD"))}</th>
              </tr>
            </thead>
            <tbody>${Uo(c)}</tbody>
          </table>
        </div>
      </article>`}).join("");return`
    <section class="txf-panel" aria-label="${a(s("txfContractsTitle"))}">
      <h3 class="txf-h3">${a(s("txfContractsTitle"))}</h3>
      <p class="txf-panel-lead">${a(s("txfContractsLead"))}</p>
      ${n}
    </section>`}function Go(e){const t=e==null?void 0:e.institutional;if(!(t!=null&&t.byContract))return"";const n=["TX","MTX","TMF"].filter(i=>(t.byContract[i]||[]).length);if(!n.length)return"";const o=n.map(i=>{const l=(t.byContract[i]||[]).map(r=>{const c=r.openInterestNet;return`<tr>
            <td>${a(r.partyZh||"—")}</td>
            <td class="txf-num">${a(F(r.openInterestLong)||"—")}</td>
            <td class="txf-num">${a(F(r.openInterestShort)||"—")}</td>
            <td class="txf-num ${K(c)}">${a(F(c)||"—")}</td>
            <td class="txf-num ${K(r.tradingVolumeNet)}">${a(F(r.tradingVolumeNet)||"—")}</td>
          </tr>`}).join("");return`
        <article class="txf-inst-card">
          <h4>${a(i)}</h4>
          <div class="txf-table-wrap">
            <table class="txf-table">
              <thead>
                <tr>
                  <th>${a(s("txfColParty"))}</th>
                  <th>${a(s("txfColLongOI"))}</th>
                  <th>${a(s("txfColShortOI"))}</th>
                  <th>${a(s("txfColNetOI"))}</th>
                  <th>${a(s("txfColNetVol"))}</th>
                </tr>
              </thead>
              <tbody>${l}</tbody>
            </table>
          </div>
        </article>`}).join("");return`
    <section class="txf-panel" aria-label="${a(s("txfInstTitle"))}">
      <h3 class="txf-h3">${a(s("txfInstTitle"))}</h3>
      <p class="txf-panel-lead">${a(s("txfInstLead",{date:t.asOf||"—"}))}</p>
      <div class="txf-inst-grid">${o}</div>
      <p class="txf-footnote">${a(s("txfInstFoot"))}</p>
    </section>`}function Jo(e){const t=(e==null?void 0:e.calendar)||{},n=t.recentSettlement,o=e==null?void 0:e.putCallRatio;return`
    <section class="txf-panel" aria-label="${a(s("txfCalendarTitle"))}">
      <h3 class="txf-h3">${a(s("txfCalendarTitle"))}</h3>
      <div class="txf-cal-grid">
        <article class="txf-cal-card">
          <h4>${a(s("txfNextLTD"))}</h4>
          <p class="txf-cal-big">${a(t.nextNearLastTradingDay||"—")}</p>
          <p class="txf-muted">${a(s("txfNearMonth"))}: ${a(pt(t.nextNearMonth))}
            · ${a(s("txfNextMonth"))}: ${a(pt(t.nextNextMonth))}（${a(t.nextNextLastTradingDay||"—")}）</p>
          <p class="txf-muted">${a(t.ruleZh||s("txfLTDRule"))}</p>
        </article>
        <article class="txf-cal-card">
          <h4>${a(s("txfRecentSettle"))}</h4>
          <p class="txf-cal-big">${a(n?Y(n.finalSettlementPrice,0):"—")}</p>
          <p class="txf-muted">${a((n==null?void 0:n.finalSettlementDay)||"—")} · ${a((n==null?void 0:n.deliveryMonth)||"")}</p>
          <p class="txf-muted">${a((n==null?void 0:n.contractName)||"")}</p>
        </article>
        ${o?`<article class="txf-cal-card">
          <h4>${a(s("txfPcrTitle"))}</h4>
          <p class="txf-cal-big">${a(Y(o.putCallVolumeRatioPct,2)||"—")}%</p>
          <p class="txf-muted">${a(s("txfPcrVol"))}: P ${a(F(o.putVolume)||"—")} / C ${a(F(o.callVolume)||"—")}</p>
          <p class="txf-muted">${a(s("txfPcrOI"))}: ${a(Y(o.putCallOIRatioPct,2)||"—")}% · ${a(s("dataAsOf"))} ${a(o.asOf||"—")}</p>
        </article>`:""}
      </div>
    </section>`}function Yo(){return`
    <section class="txf-panel" aria-label="${a(s("txfExplainTitle"))}">
      <h3 class="txf-h3">${a(s("txfExplainTitle"))}</h3>
      <ul class="txf-explain">
        <li>${a(s("txfExplain1"))}</li>
        <li>${a(s("txfExplain2"))}</li>
        <li>${a(s("txfExplain3"))}</li>
        <li>${a(s("txfExplain4"))}</li>
      </ul>
    </section>`}function Xo(e){const t=Array.isArray(e==null?void 0:e.sourcesDetail)?e.sourcesDetail:[];return t.length?`
    <section class="txf-panel txf-sources" aria-label="${a(s("txfSourcesTitle"))}">
      <h3 class="txf-h3">${a(s("txfSourcesTitle"))}</h3>
      <ul class="txf-src-list">
        ${t.map(n=>`<li><a href="${a(n.url)}" target="_blank" rel="noopener noreferrer">${a(n.label||n.url)}</a></li>`).join("")}
      </ul>
    </section>`:""}function Ko(e,t){const n=Array.isArray(t==null?void 0:t.disclaimers)?t.disclaimers:[],o=n.length?`<ul class="txf-disc-list">${n.map(i=>`<li>${a(i)}</li>`).join("")}</ul>`:`<p>${a(s("txfDisclaimer"))}</p>`;e.innerHTML=`
    ${_o(t)}
    ${Vo(t)}
    ${Go(t)}
    ${Jo(t)}
    ${Yo()}
    ${Xo(t)}
    <div class="txf-disclaimer" role="note">${o}</div>
  `}function Qo(){return`
    <section class="section txf-section" aria-label="${a(s("txfTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(s("txfTitle"))}</h2>
        <p class="view-lead">${a(s("txfLead"))}</p>
      </header>
      <p class="txf-disclaimer txf-disclaimer-top" role="note">${a(s("txfDisclaimer"))}</p>
      <div id="txf-root" class="txf-root">
        <p class="txf-loading">${a(s("loading"))}</p>
      </div>
    </section>`}async function Zo(e="#txf-root"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};try{const n=await fetch(Fo);if(!n.ok)throw new Error(`HTTP ${n.status}`);const o=await n.json();return Ko(t,o),{ok:!0,data:o}}catch(n){return t.innerHTML=`
      <div class="txf-empty" role="status">
        <p>${a(s("txfLoadError",{msg:n.message||String(n)}))}</p>
      </div>`,{ok:!1,error:n}}}const ei=["https://query2.finance.yahoo.com","https://query1.finance.yahoo.com"],ti="https://r.jina.ai/",ai="https://mis.twse.com.tw/stock/api/getStockInfo.jsp?json=1&delay=0&ex_ch=",si={tw:"^TWII",spx:"^GSPC",nasdaq:"^IXIC",sox:"^SOX",usdTwd:"USDTWD=X"},ni={tw:"tse_t00.tw",otc:"otc_o00.tw"},oi=14,ii=2e4,ys=5*6e4;let tt=null,za=!1,Wt=new Map,ie=null,Re=!1,Ct=!1,j=null;function Ma(e){if(!e)return null;const t=String(e).trim();if(t.startsWith("{")||t.startsWith("["))try{return JSON.parse(t)}catch{}const n=t.match(/Markdown Content:\s*(\{[\s\S]*|\[[\s\S]*)/i),o=n?n[1].trim():t,i=o.search(/[\{\[]/);if(i<0)return null;const l=o.slice(i);for(let r=l.length;r>2;r--){try{return JSON.parse(l.slice(0,r))}catch{}const c=Math.max(l.lastIndexOf("}",r-2),l.lastIndexOf("]",r-2));if(c<8)break;r=c+2}return null}async function Ra(e,{timeoutMs:t=14e3}={}){const n=typeof AbortController<"u"?new AbortController:null,o=n?setTimeout(()=>n.abort(),t):null;try{const i=await fetch(e,{signal:n==null?void 0:n.signal,headers:{Accept:"application/json,text/plain,*/*"},cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return await i.text()}finally{o&&clearTimeout(o)}}async function vs(e){const t=[];try{const n=await Ra(e,{timeoutMs:1e4}),o=Ma(n);if(o)return{ok:!0,data:o,via:"direct"};t.push("direct: non-json")}catch(n){t.push(`direct: ${n.message||n}`)}try{const n=await Ra(`${ti}${e}`,{timeoutMs:2e4}),o=Ma(n);if(o)return{ok:!0,data:o,via:"jina"};t.push("jina: parse")}catch(n){t.push(`jina: ${n.message||n}`)}return{ok:!1,data:null,via:null,error:t.slice(0,3).join(" · ")}}function li(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function ri(e,t){const n=[];for(let o=0;o<e.length;o+=t)n.push(e.slice(o,o+t));return n}function oe(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function Z(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString(L(),{minimumFractionDigits:t,maximumFractionDigits:t})}function le(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${Number(e).toFixed(t)}%`}function Na(e,t){if(e==null||Number.isNaN(e))return"—";const n=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"$":t==="TWD"?"NT$":""}${Z(e,n)}`}function Ae(e,t){return e==null||Number.isNaN(e)?"—":`${t==="USD"?"US$":t==="TWD"?"NT$":""}${Z(e,t==="TWD"?0:2)}`}function ci(e,t){if(e==null||Number.isNaN(e))return"—";const n=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"US$":t==="TWD"?"NT$":""}${Z(e,n)}`}function Ss(e=new Date){const t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",weekday:"short",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(e),n=o=>{var i;return(i=t.find(l=>l.type===o))==null?void 0:i.value};return{ymd:`${n("year")}-${n("month")}-${n("day")}`,weekday:n("weekday"),hour:Number(n("hour")),minute:Number(n("minute"))}}function di(e=Ss()){return!["Sat","Sun"].includes(e.weekday)}function ui(e=new Date){const t=Ss(e),n=t.hour*60+t.minute,o=di(t),i=o&&n>=540&&n<=815,l=o&&(n>=1260||n<=315),r=t.weekday==="Sat"&&n<=315,c=t.weekday==="Sun"&&n>=1260;return{twOpen:i,usOpen:l||r||c,weekday:o,parts:t}}function pi(){const{twOpen:e,usOpen:t}=ui();return e||t?ii:ys}function gi(e){try{return new Date(e).toLocaleString(L(),{timeZone:"Asia/Taipei",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return"—"}}function bs(e){const t=String(e||"").trim().toUpperCase();return t?/^\d{4}\.(TW|TWO)$/.test(t)?t:/^\d{4}$/.test(t)?`${t}.TW`:t.replace(/\./g,"-"):null}function hi(e){const t=String(e||"").toUpperCase(),n=t.match(/^(\d{4})\.(TW|TWO)$/)||t.match(/^(\d{4})$/);if(!n)return null;const o=n[1];return/\.TWO$/.test(t)?`otc_${o}.tw`:`tse_${o}.tw`}function fi(e,t){!e||(t==null?void 0:t.price)==null||Number.isNaN(t.price)||Wt.set(e,{...t,asOfMs:t.asOfMs||Date.now()})}function mi(e){var o,i;const t=(o=e==null?void 0:e.spark)==null?void 0:o.result;if(!Array.isArray(t))return[];const n=[];for(const l of t){const r=l==null?void 0:l.symbol,c=((i=((l==null?void 0:l.response)||[{}])[0])==null?void 0:i.meta)||{},d=c.regularMarketPrice;if(d==null||Number.isNaN(Number(d)))continue;const u=c.chartPreviousClose??c.previousClose??null;let p=null,g=null;u!=null&&u!==0&&(g=Number(d)-Number(u),p=g/Number(u)*100);const h=typeof c.regularMarketTime=="number"?c.regularMarketTime*(c.regularMarketTime<1e12?1e3:1):Date.now();n.push({symbol:r,price:Number(d),prev:u!=null?Number(u):null,change:g,changePct:p,currency:c.currency||null,asOfMs:h,source:"yahoo-spark"})}return n}async function yi(e){const t=[...new Set(e.filter(Boolean))];if(!t.length)return{ok:!0,quotes:[],via:null};const n=[];let o=null,i=!1,l=null;for(const r of ri(t,oi)){const c=`/v7/finance/spark?symbols=${encodeURIComponent(r.join(","))}&range=1d&interval=5m`;let d=null;for(const u of ei){const p=await vs(`${u}${c}`);if(p.ok){d=p;break}l=p.error}d!=null&&d.ok&&(i=!0,o=d.via,n.push(...mi(d.data)))}return{ok:i,quotes:n,via:o,error:i?null:l}}function ke(e){if(e==null||e===""||e==="-"||e==="—"||e==="null")return null;const t=Number(String(e).replace(/,/g,""));return Number.isFinite(t)?t:null}function vi(e){const t=e==null?void 0:e.msgArray;if(!Array.isArray(t))return[];const n=[];for(const o of t){const i=o==null?void 0:o.c;if(!i)continue;const l=ke(o.z)??ke(o.pz)??ke(o.o),r=ke(o.y);if(l==null)continue;let c=null,d=null;r!=null&&r!==0&&(d=l-r,c=d/r*100);const u=o.ex==="otc"?"otc":"tse";let p;i==="t00"?p="__MIS_TWII":i==="o00"?p="__MIS_OTC":p=`${i}.${u==="otc"?"TWO":"TW"}`;const g=ke(o.tlong);n.push({symbol:p,price:l,prev:r,change:d,changePct:c,currency:"TWD",asOfMs:g||Date.now(),source:"twse-mis",misCode:i,misEx:u})}return n}async function Si(e){const t=[...new Set(e.filter(Boolean))];if(!t.length)return{ok:!0,quotes:[],via:null};const n=`${ai}${t.join("|")}`,o=await vs(n);return o.ok?{ok:!0,quotes:vi(o.data),via:o.via}:{ok:!1,quotes:[],via:null,error:o.error}}function bi(e){const t=new Set(Object.values(si));t.add("SOXL");const n=new Set(Object.values(ni));return e.querySelectorAll("[data-lq-sym]").forEach(o=>{const i=o.getAttribute("data-lq-sym"),l=bs(i);l&&t.add(l);const r=hi(i);r&&n.add(r)}),{yahoo:[...t],mis:[...n]}}function gt(e,t){if(!e)return;e.classList.remove("up","down","flat","lk-up","lk-down","lk-flat","sx-up","sx-down","sx-flat");const n=oe(t);e.classList.add(n)}function ki(e){e&&(e.classList.remove("lq-flash"),e.offsetWidth,e.classList.add("lq-flash"),window.setTimeout(()=>{e.classList.remove("lq-flash")},700))}function M(e,t,{flash:n=!1}={}){e&&e.textContent!==t&&(e.textContent=t,n&&ki(e))}function $i(e=Date.now()){try{return new Date(e).toLocaleTimeString("en-GB",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return"—"}}function pe(e,t,n,o){const i=e.querySelectorAll(`[data-lq-key="${t}"]`);if(!i.length||!n||n.price==null)return;const l=t==="usdTwd"?3:2;i.forEach(r=>{r.classList.remove("incomplete");const c=r.querySelector("[data-lq-field='value'], .value");M(c,Z(n.price,l),{flash:!0});let d=r.querySelector("[data-lq-field='dayPct'], .pct");if(t==="usdTwd"){if(d&&o){const u=o.taipeiClose!=null?Z(o.taipeiClose,3):"—";d.className="pct flat",d.style.fontSize="0.7rem",d.textContent=`${s("taipeiClose")} ${u} · Yahoo ${Z(n.price,3)}`}}else n.changePct!=null&&(d||(d=document.createElement("div"),d.className="pct",d.setAttribute("data-lq-field","dayPct"),r.appendChild(d)),d.className=`pct ${oe(n.changePct)}`,d.setAttribute("data-lq-field","dayPct"),M(d,le(n.changePct),{flash:!0}))})}function Ti(e,t,n){if(!n||n.price==null)return;const o=n.currency||(/\.(TW|TWO)$/i.test(t)?"TWD":"USD");e.querySelectorAll(`[data-lq-sym="${li(t)}"]`).forEach(l=>{const r=l.getAttribute("data-lq");if(r==="soxl")return;if(r==="pos"){wi(l,n,o);return}const c=l.querySelectorAll("[data-lq-field='price']"),d=l.querySelectorAll("[data-lq-field='dayPct']");if(c.length||d.length){c.forEach(g=>M(g,Na(n.price,o),{flash:!0})),d.forEach(g=>{gt(g,n.changePct),M(g,le(n.changePct),{flash:!0})});return}const u=l.querySelector(".price"),p=l.querySelector(".day-pct");u&&M(u,Na(n.price,o),{flash:!0}),p&&(gt(p,n.changePct),M(p,le(n.changePct),{flash:!0}))})}function wi(e,t,n){const o=Number(e.getAttribute("data-lq-qty")),i=Number(e.getAttribute("data-lq-avg")),l=e.getAttribute("data-lq-ccy")||n,r=t.price,c=t.changePct,d=e.querySelectorAll("td");if(!(d.length<10)){if(M(d[2],ci(r,l),{flash:!0}),Number.isFinite(o)){const u=r*o;M(d[3],Ae(u,l));const p=c!=null&&Number.isFinite(c)?r*o*c/100:null;if(d[4].className=`num ${oe(p)}`,M(d[4],p==null?"—":Ae(p,l)),Number.isFinite(i)){const g=(r-i)*o,h=i?(r-i)/i*100:0;d[6].className=`num ${oe(g)}`,M(d[6],Ae(g,l)),d[7].className=`num ${oe(h)}`,M(d[7],le(h))}}d[5].className=`num ${oe(c)}`,M(d[5],le(c),{flash:!0}),e.setAttribute("data-lq-mark",String(r)),c!=null&&e.setAttribute("data-lq-daypct",String(c))}}function xi(e){e.querySelectorAll("[data-lq-book]").forEach(t=>{const n=t.getAttribute("data-lq-book"),o=Number(t.getAttribute("data-lq-cash")),i=Number(t.getAttribute("data-lq-start")),l=t.getAttribute("data-lq-ccy")||(n==="TW"?"TWD":"USD");if(!Number.isFinite(o))return;let r=0;t.querySelectorAll(".pos-row[data-lq-sym]").forEach(b=>{const k=Number(b.getAttribute("data-lq-qty")),x=Number(b.getAttribute("data-lq-mark"));Number.isFinite(k)&&Number.isFinite(x)&&(r+=k*x)});const c=r;t.querySelectorAll(".pos-row[data-lq-sym]").forEach(b=>{const k=Number(b.getAttribute("data-lq-qty")),x=Number(b.getAttribute("data-lq-mark")),P=b.querySelectorAll("td");if(P.length>=11&&Number.isFinite(k)&&Number.isFinite(x)&&c>0){const E=x*k/c*100;M(P[10],`${E.toFixed(2)}%`)}});const d=o+r,u=Number.isFinite(i)?d-i:null,p=Number.isFinite(i)&&i!==0?(d-i)/i*100:null,g=t.querySelector("[data-lq-kpi='equity']"),h=t.querySelector("[data-lq-kpi='pnl']"),y=t.querySelector("[data-lq-kpi='pnlPct']");g&&M(g,Ae(d,l)),h&&u!=null&&(gt(h,u),M(h,Ae(u,l))),y&&p!=null&&(gt(y,p),M(y,le(p)))})}function Pi(e,t){if(!t||t.price==null)return;const n=e.querySelector("#sx-root .sx-price"),o=e.querySelector("#sx-root .sx-chg"),i=e.querySelector("#sx-root .sx-chgp"),l=e.querySelector("#sx-root .sx-price-row"),r=e.querySelector("#sx-root .sx-session");if(n&&M(n,`$${Z(t.price,2)}`,{flash:!0}),o)if(t.change==null||Number.isNaN(t.change))M(o,"—");else{const c=t.change>0?"+":"";M(o,`${c}${Z(t.change,2)}`)}if(i&&M(i,le(t.changePct),{flash:!0}),l){l.classList.remove("sx-up","sx-down","sx-flat");const c=oe(t.changePct??t.change);l.classList.add(c==="up"?"sx-up":c==="down"?"sx-down":"sx-flat")}if(r){const c=gi(t.asOfMs||Date.now());M(r,`live · ${s("dataAsOf")} ${c}`)}}function Ci(e,t){const n=bs(t);if(n&&e.has(n))return e.get(n);if(n&&n.endsWith(".TW")){const o=n.replace(/\.TW$/,".TWO");if(e.has(o))return e.get(o)}if(n&&n.endsWith(".TWO")){const o=n.replace(/\.TWO$/,".TW");if(e.has(o))return e.get(o)}return null}function ht(e,{ok:t,stale:n}){const o=e.querySelector("#lq-live-suffix");if(!o)return;const i=ie?$i(ie):"";t&&!n&&i?(o.hidden=!1,o.dataset.state="live",o.removeAttribute("title"),o.textContent=` · ${s("liveQuotesLive")} ${i}`):ie?(o.hidden=!1,o.dataset.state="stale",o.title=s("liveQuotesStale"),o.textContent=i?` · ${s("liveQuotesStaleShort")} ${i}`:` · ${s("liveQuotesStaleShort")}`):t?(o.hidden=!0,o.dataset.state="pending",o.removeAttribute("title"),o.textContent=""):(o.hidden=!1,o.dataset.state="stale",o.title=s("liveQuotesStale"),o.textContent=` · ${s("liveQuotesStaleShort")}`)}function Li(...e){const t=new Map(Wt);for(const n of e)for(const o of n)!(o!=null&&o.symbol)||o.price==null||(fi(o.symbol,o),t.set(o.symbol,Wt.get(o.symbol)));if(t.has("__MIS_TWII")){const n=t.get("__MIS_TWII");t.set("^TWII",n)}return t}async function ta(){if(!j||document.visibilityState==="hidden")return;const{yahoo:e,mis:t}=bi(j),[n,o]=await Promise.all([yi(e),Si(t)]),i=Li(n.quotes||[],o.quotes||[]),l=n.ok||o.ok;l?(ie=Date.now(),Re=!0):Re=!1;const r=i.get("__MIS_TWII")||i.get("^TWII"),c=i.get("__MIS_OTC");pe(j,"tw",r),pe(j,"otc",c),pe(j,"spx",i.get("^GSPC")),pe(j,"nasdaq",i.get("^IXIC")),pe(j,"sox",i.get("^SOX"));const d=i.get("USDTWD=X"),u=j.querySelector("[data-lq-key='usdTwd']"),p=u==null?void 0:u.getAttribute("data-lq-taipei-close"),g=p!=null&&p!==""?Number(p):null;pe(j,"usdTwd",d,{taipeiClose:Number.isFinite(g)?g:null});const h=new Set;j.querySelectorAll("[data-lq-sym]").forEach(b=>{const k=b.getAttribute("data-lq-sym");if(!k||h.has(k))return;h.add(k);const x=Ci(i,k);x&&Ti(j,k,x)}),Pi(j,i.get("SOXL")),xi(j);const y=ie?Date.now()-ie:1/0;ht(j,{ok:l,stale:!l||y>ys})}function aa(){tt&&(clearTimeout(tt),tt=null)}function sa(){if(aa(),!Ct)return;const e=pi();tt=window.setTimeout(async()=>{try{await ta()}catch{Re=!1,j&&ht(j,{ok:!1,stale:!0})}sa()},e)}function Ai(){if(Ct){if(document.visibilityState==="hidden"){aa();return}ta().finally(()=>sa())}}async function Ei(e){if(ks(),j=e,!j)return{ok:!1};Ct=!0,za||(document.addEventListener("visibilitychange",Ai),za=!0),ht(j,{ok:!1,stale:!1});try{await ta()}catch{Re=!1,ht(j,{ok:!1,stale:!0})}return sa(),{ok:Re,lastSuccessAt:ie}}function ks(){Ct=!1,aa(),j=null}const Ba="./data/us-macro-calendar.json",ji=900*1e3,zi=2160*60*1e3;let Fe=null;function Mi(e){const t=e!=null&&e.eventKey?`macroEvent_${e.eventKey}`:null;if(t){const n=s(t,"");if(n&&n!==t)return n}return(e==null?void 0:e.shortName)||(e==null?void 0:e.eventName)||"—"}function Ri(e,t){const n=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),o=i=>{var l;return(l=n.find(r=>r.type===i))==null?void 0:l.value};return`${o("year")}-${o("month")}-${o("day")}`}function Ni(e,t){try{const n=new Date(e),o=n.toLocaleDateString(L(),{timeZone:t,month:"numeric",day:"numeric",weekday:"short"}),i=n.toLocaleTimeString(L(),{timeZone:t,hour:"2-digit",minute:"2-digit",hour12:!1});return{datePart:o,timePart:i}}catch{return{datePart:"—",timePart:""}}}function Bi(e){try{return new Date(e).toLocaleString(L(),{timeZone:"Asia/Taipei",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return e||"—"}}function Di(e,t){let n=null;for(const o of e)if(o.dayEt>=t){n=o.id;break}return n}function Oi(e,{todayEt:t,nextId:n,timeZone:o}){const i=a(Mi(e)),{datePart:l,timePart:r}=Ni(e.scheduledAt,o),c=e.dayEt===t,d=e.id===n,u=e.dayEt<t,p=["macro-chip",e.highImpact||e.importance==="high"?"macro-chip--high":"",c?"macro-chip--today":"",d&&!c?"macro-chip--next":"",u?"macro-chip--past":""].filter(Boolean).join(" "),g=[];c?g.push(`<span class="macro-chip-tag">${a(s("macroToday"))}</span>`):d&&g.push(`<span class="macro-chip-tag macro-chip-tag--next">${a(s("macroNext"))}</span>`),(e.highImpact||e.importance==="high")&&g.push(`<span class="macro-chip-tag macro-chip-tag--high">${a(s("macroHighImpact"))}</span>`);const h=[e.eventName,e.periodLabel,`${e.dayEt} ${r} ET`,e.officialUrl?"↗ official":null].filter(Boolean).join(" · "),b=`
      <span class="macro-chip-when">${r?`${a(l)} ${a(r)}`:a(l)}</span>
      <span class="macro-chip-name">${i}</span>
      ${g.length?`<span class="macro-chip-tags">${g.join("")}</span>`:""}`,k=typeof e.officialUrl=="string"&&/^https?:\/\//i.test(e.officialUrl)?e.officialUrl:null;return k?`
    <a class="${p}" href="${a(k)}" target="_blank" rel="noopener noreferrer"
       title="${a(h)}" data-event-id="${a(e.id)}">${b}
    </a>`:`
    <span class="${p}" title="${a(h)}" data-event-id="${a(e.id)}">${b}
    </span>`}function Ii(e){const t=e.querySelector(".index-marquee");if(!t||t.dataset.marqueeBound==="1")return;t.dataset.marqueeBound="1";const n=()=>t.classList.add("is-paused"),o=()=>t.classList.remove("is-paused");t.addEventListener("pointerdown",n),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.addEventListener("pointerleave",o),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),t.addEventListener("touchcancel",o,{passive:!0})}function Hi(e,t){if(!e)return;const n=(t==null?void 0:t.timezone)||"America/New_York",o=Ri(new Date,n),i=Array.isArray(t==null?void 0:t.events)?t.events:[],l=Di(i,o),r=(t==null?void 0:t.asOf)||null,c=r?Date.now()-Date.parse(r):NaN,d=!!(t!=null&&t.stale)||!Number.isNaN(c)&&c>zi;let u=`${a(s("macroTzEt"))}`;if(r&&(u+=` · ${a(s("macroAsOf"))} ${a(Bi(r))}`),d&&(u+=` · ${a(s("macroStale"))}`),!i.length){e.innerHTML=`
      <div class="macro-strip" role="region" aria-label="${a(s("macroTitle"))}">
        <div class="macro-strip-side">
          <span class="macro-strip-label">${a(s("macroTitle"))}</span>
          <span class="macro-strip-meta">${u}</span>
        </div>
        <p class="macro-strip-empty">${a(s("macroEmpty"))}</p>
      </div>`;return}const p=i.map(y=>Oi(y,{todayEt:o,nextId:l,timeZone:n})),g=`<div class="index-marquee-group">${p.join("")}</div>`,h=`<div class="index-marquee-group index-marquee-group--clone" aria-hidden="true">${p.join("")}</div>`;e.innerHTML=`
    <div class="macro-strip" role="region" aria-label="${a(s("macroTitle"))}">
      <div class="macro-strip-side">
        <span class="macro-strip-label">${a(s("macroTitle"))}</span>
        <span class="macro-strip-meta" title="${u}">${u}</span>
      </div>
      <div class="index-strip index-strip--marquee macro-strip-marquee">
        <div class="index-marquee" tabindex="0">
          <div class="index-marquee-track">
            ${g}
            ${h}
          </div>
        </div>
      </div>
    </div>`,Ii(e)}function qi(){return'<div id="us-macro-strip" class="us-macro-strip-host" aria-live="polite"></div>'}async function Fi(e=!1){const t=e?`${Ba}?t=${Date.now()}`:Ba,n=await fetch(t,{cache:e?"no-store":"default"});if(!n.ok)throw new Error(`HTTP ${n.status}`);return n.json()}async function Wi(e="#us-macro-strip"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};const n=async i=>{try{const l=await Fi(i);return Hi(t,l),{ok:!0,data:l}}catch(l){return t.innerHTML=`
        <div class="macro-strip macro-strip--error" role="status">
          <div class="macro-strip-side">
            <span class="macro-strip-label">${a(s("macroTitle"))}</span>
          </div>
          <p class="macro-strip-empty">${a(s("macroLoadError",{msg:l.message||String(l)}))}</p>
        </div>`,{ok:!1,error:l}}},o=await n(!1);return Fe&&(window.clearInterval(Fe),Fe=null),Fe=window.setInterval(()=>{n(!0)},ji),o}const Da="./data/tw-macro-calendar.json",_i=900*1e3,Ui=2160*60*1e3;let We=null;function Vi(e){const t=e!=null&&e.eventKey?`twMacroEvent_${e.eventKey}`:null;if(t){const n=s(t,"");if(n&&n!==t)return n}return(e==null?void 0:e.shortName)||(e==null?void 0:e.eventName)||"—"}function Gi(e,t){const n=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),o=i=>{var l;return(l=n.find(r=>r.type===i))==null?void 0:l.value};return`${o("year")}-${o("month")}-${o("day")}`}function Ji(e,t){try{const n=new Date(e),o=n.toLocaleDateString(L(),{timeZone:t,month:"numeric",day:"numeric",weekday:"short"}),i=n.toLocaleTimeString(L(),{timeZone:t,hour:"2-digit",minute:"2-digit",hour12:!1});return{datePart:o,timePart:i}}catch{return{datePart:"—",timePart:""}}}function Yi(e){try{return new Date(e).toLocaleString(L(),{timeZone:"Asia/Taipei",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return e||"—"}}function Xi(e,t){let n=null;for(const o of e)if(o.dayTw>=t){n=o.id;break}return n}function Ki(e,{todayTw:t,nextId:n,timeZone:o}){const i=a(Vi(e)),{datePart:l,timePart:r}=Ji(e.scheduledAt,o),c=e.dayTw===t,d=e.id===n,u=e.dayTw<t,p=["macro-chip",e.highImpact||e.importance==="high"?"macro-chip--high":"",c?"macro-chip--today":"",d&&!c?"macro-chip--next":"",u?"macro-chip--past":""].filter(Boolean).join(" "),g=[];c?g.push(`<span class="macro-chip-tag">${a(s("macroToday"))}</span>`):d&&g.push(`<span class="macro-chip-tag macro-chip-tag--next">${a(s("macroNext"))}</span>`),(e.highImpact||e.importance==="high")&&g.push(`<span class="macro-chip-tag macro-chip-tag--high">${a(s("macroHighImpact"))}</span>`);const h=[e.eventName,e.periodLabel,`${e.dayTw} ${r} 台北`,e.officialUrl?"↗ official":null].filter(Boolean).join(" · "),b=`
      <span class="macro-chip-when">${r?`${a(l)} ${a(r)}`:a(l)}</span>
      <span class="macro-chip-name">${i}</span>
      ${g.length?`<span class="macro-chip-tags">${g.join("")}</span>`:""}`,k=typeof e.officialUrl=="string"&&/^https?:\/\//i.test(e.officialUrl)?e.officialUrl:null;return k?`
    <a class="${p}" href="${a(k)}" target="_blank" rel="noopener noreferrer"
       title="${a(h)}" data-event-id="${a(e.id)}">${b}
    </a>`:`
    <span class="${p}" title="${a(h)}" data-event-id="${a(e.id)}">${b}
    </span>`}function Qi(e){const t=e.querySelector(".index-marquee");if(!t||t.dataset.marqueeBound==="1")return;t.dataset.marqueeBound="1";const n=()=>t.classList.add("is-paused"),o=()=>t.classList.remove("is-paused");t.addEventListener("pointerdown",n),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.addEventListener("pointerleave",o),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),t.addEventListener("touchcancel",o,{passive:!0})}function Zi(e,t){if(!e)return;const n=(t==null?void 0:t.timezone)||"Asia/Taipei",o=Gi(new Date,n),i=Array.isArray(t==null?void 0:t.events)?t.events:[],l=Xi(i,o),r=(t==null?void 0:t.asOf)||null,c=r?Date.now()-Date.parse(r):NaN,d=!!(t!=null&&t.stale)||!Number.isNaN(c)&&c>Ui;let u=`${a(s("twMacroTz"))}`;if(r&&(u+=` · ${a(s("macroAsOf"))} ${a(Yi(r))}`),d&&(u+=` · ${a(s("macroStale"))}`),!i.length){e.innerHTML=`
      <div class="macro-strip" role="region" aria-label="${a(s("twMacroTitle"))}">
        <div class="macro-strip-side">
          <span class="macro-strip-label">${a(s("twMacroTitle"))}</span>
          <span class="macro-strip-meta">${u}</span>
        </div>
        <p class="macro-strip-empty">${a(s("twMacroEmpty"))}</p>
      </div>`;return}const p=i.map(y=>Ki(y,{todayTw:o,nextId:l,timeZone:n})),g=`<div class="index-marquee-group">${p.join("")}</div>`,h=`<div class="index-marquee-group index-marquee-group--clone" aria-hidden="true">${p.join("")}</div>`;e.innerHTML=`
    <div class="macro-strip" role="region" aria-label="${a(s("twMacroTitle"))}">
      <div class="macro-strip-side">
        <span class="macro-strip-label">${a(s("twMacroTitle"))}</span>
        <span class="macro-strip-meta" title="${u}">${u}</span>
      </div>
      <div class="index-strip index-strip--marquee macro-strip-marquee">
        <div class="index-marquee" tabindex="0">
          <div class="index-marquee-track">
            ${g}
            ${h}
          </div>
        </div>
      </div>
    </div>`,Qi(e)}function el(){return'<div id="tw-macro-strip" class="tw-macro-strip-host" aria-live="polite"></div>'}async function tl(e=!1){const t=e?`${Da}?t=${Date.now()}`:Da,n=await fetch(t,{cache:e?"no-store":"default"});if(!n.ok)throw new Error(`HTTP ${n.status}`);return n.json()}async function al(e="#tw-macro-strip"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};const n=async i=>{try{const l=await tl(i);return Zi(t,l),{ok:!0,data:l}}catch(l){return t.innerHTML=`
        <div class="macro-strip macro-strip--error" role="status">
          <div class="macro-strip-side">
            <span class="macro-strip-label">${a(s("twMacroTitle"))}</span>
          </div>
          <p class="macro-strip-empty">${a(s("twMacroLoadError",{msg:l.message||String(l)}))}</p>
        </div>`,{ok:!1,error:l}}},o=await n(!1);return We&&(window.clearInterval(We),We=null),We=window.setInterval(()=>{n(!0)},_i),o}const sl="https://www.youtube.com/watch?v=7n-e5pe6z4U",nl=[1,2,3,4,5,6,7,8,9,10],ol=[1,2,3,4,5,6],il=[1,2,3,4],ll=[1,2,3];function rl(){return`
    <div class="gz-badges" role="list">
      <span class="gz-badge gz-badge-candidate" role="listitem">${a(s("godzillaBadgeCandidate"))}</span>
      <span class="gz-badge gz-badge-watch" role="listitem">${a(s("godzillaBadgeWatch"))}</span>
      <span class="gz-badge gz-badge-us" role="listitem">${a(s("godzillaUsFocus"))}</span>
      <span class="gz-badge gz-badge-self" role="listitem">${a(s("godzillaSelfReport"))}</span>
      <span class="gz-badge gz-badge-listened" role="listitem">${a(s("godzillaListenedBadge"))}</span>
    </div>`}function cl(){return nl.map(e=>{const t=s(`godzillaThesis${e}Title`),n=s(`godzillaThesis${e}Body`);return`
      <article class="gz-card" data-thesis="${e}">
        <div class="gz-card-num" aria-hidden="true">${e}</div>
        <div class="gz-card-body">
          <h3 class="gz-card-title">${a(t)}</h3>
          <p class="gz-card-text">${a(n)}</p>
        </div>
      </article>`}).join("")}function dl(){return`
    <ul class="gz-check-list">
      ${ol.map(e=>`<li class="gz-check-item">
          <span class="gz-check-mark" aria-hidden="true">✓</span>
          <span>${a(s(`godzillaCheck${e}`))}</span>
        </li>`).join("")}
    </ul>`}function ul(){return`
    <ul class="gz-bullet-list">
      ${il.map(e=>`<li>${a(s(`godzillaOpt${e}`))}</li>`).join("")}
    </ul>`}function pl(){return`
    <ul class="gz-bullet-list">
      ${ll.map(e=>`<li>${a(s(`godzillaRsu${e}`))}</li>`).join("")}
    </ul>`}function gl(e){e.innerHTML=`
    <section class="gz-hero" aria-label="${a(s("godzillaHeroLabel"))}">
      <div class="gz-hero-main">
        <h3 class="gz-hero-kicker">${a(s("godzillaKicker"))}</h3>
        <p class="gz-hero-tagline">${a(s("godzillaTagline"))}</p>
        ${rl()}
        <p class="gz-source">
          <span class="gz-source-label">${a(s("godzillaSourceLabel"))}</span>
          <a class="gz-yt" href="${sl}" target="_blank" rel="noopener noreferrer">${a(s("godzillaYoutube"))}</a>
          <span class="gz-source-cite">· ${a(s("godzillaSourceCite"))}</span>
        </p>
      </div>
    </section>


    <section class="gz-panel gz-listened" aria-label="${a(s("godzillaStockTitle"))}">
      <h3 class="gz-h3">${a(s("godzillaStockTitle"))}</h3>
      <p class="gz-panel-lead">${a(s("godzillaStockLead"))}</p>
      <ul class="gz-bullet-list gz-stock-list">
        ${[1,2,3,4,5,6].map(t=>`<li>${a(s(`godzillaStock${t}`))}</li>`).join("")}
      </ul>
      <p class="gz-source-note">${a(s("godzillaStockNote"))}</p>
    </section>

    <section class="gz-panel" aria-label="${a(s("godzillaThesesTitle"))}">
      <h3 class="gz-h3">${a(s("godzillaThesesTitle"))}</h3>
      <p class="gz-panel-lead">${a(s("godzillaThesesLead"))}</p>
      <div class="gz-thesis-grid">
        ${cl()}
      </div>
    </section>

    <section class="gz-panel" aria-label="${a(s("godzillaChecklistTitle"))}">
      <h3 class="gz-h3">${a(s("godzillaChecklistTitle"))}</h3>
      <p class="gz-panel-lead">${a(s("godzillaChecklistLead"))}</p>
      ${dl()}
    </section>

    <div class="gz-two-col">
      <section class="gz-panel" aria-label="${a(s("godzillaOptionsTitle"))}">
        <h3 class="gz-h3">${a(s("godzillaOptionsTitle"))}</h3>
        <p class="gz-panel-lead">${a(s("godzillaOptionsLead"))}</p>
        ${ul()}
      </section>
      <section class="gz-panel" aria-label="${a(s("godzillaRsuTitle"))}">
        <h3 class="gz-h3">${a(s("godzillaRsuTitle"))}</h3>
        <p class="gz-panel-lead">${a(s("godzillaRsuLead"))}</p>
        ${pl()}
      </section>
    </div>

    <section class="gz-panel gz-tw" aria-label="${a(s("godzillaTwTitle"))}">
      <h3 class="gz-h3">${a(s("godzillaTwTitle"))}</h3>
      <p class="gz-panel-lead">${a(s("godzillaTwLead"))}</p>
      <p class="gz-tw-body">${a(s("godzillaTwBody"))}</p>
    </section>

    <aside class="gz-gate" role="note">
      <strong class="gz-gate-title">${a(s("godzillaGateNote"))}</strong>
      <p class="gz-gate-detail">${a(s("godzillaGateDetail"))}</p>
    </aside>
  `}function hl(e="#gz-root"){const t=typeof e=="string"?document.querySelector(e):e;return t?(gl(t),{ok:!0}):{ok:!1}}const Le={id:"Xn1EsFe7snQ",watchUrl:"https://www.youtube.com/watch?v=Xn1EsFe7snQ",thumbUrl:"https://i.ytimg.com/vi/Xn1EsFe7snQ/hqdefault.jpg"},fl="https://ecorner.stanford.edu",ml=[1,2,3,4,5];function yl(){return`
    <div class="jh-badges" role="list">
      <span class="jh-badge jh-badge-candidate" role="listitem">${a(s("godzillaBadgeCandidate"))}</span>
      <span class="jh-badge jh-badge-watch" role="listitem">${a(s("godzillaBadgeWatch"))}</span>
      <span class="jh-badge jh-badge-us" role="listitem">${a(s("jensenUsFocus"))}</span>
      <span class="jh-badge jh-badge-talk" role="listitem">${a(s("jensenTalkBadge"))}</span>
      <span class="jh-badge jh-badge-listened" role="listitem">${a(s("jensenListenedBadge"))}</span>
    </div>`}function vl(){return ml.map(e=>{const t=s(`jensenH${e}Title`),n=s(`jensenH${e}Body`);return`
      <article class="jh-card" data-highlight="${e}">
        <div class="jh-card-num" aria-hidden="true">${e}</div>
        <div class="jh-card-body">
          <h4 class="jh-card-title">${a(t)}</h4>
          <p class="jh-card-text">${a(n)}</p>
        </div>
      </article>`}).join("")}function Sl(){const e=s("jensenEmbedTitle");return`
    <div class="jh-yt-card" data-yt-id="${a(Le.id)}" data-embed-allowed="false">
      <a class="jh-yt-card-media" href="${Le.watchUrl}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">
        <img
          class="jh-yt-card-thumb"
          src="${Le.thumbUrl}"
          alt=""
          width="480"
          height="360"
          loading="lazy"
          decoding="async"
        />
        <span class="jh-yt-card-play" aria-hidden="true"></span>
      </a>
      <div class="jh-yt-card-body">
        <p class="jh-yt-card-kicker">${a(s("jensenYoutube"))}</p>
        <h4 class="jh-yt-card-title">${a(e)}</h4>
        <p class="jh-yt-card-note">${a(s("jensenEmbedBlockedNote"))}</p>
        <a
          class="jh-yt-card-cta"
          href="${Le.watchUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >${a(s("jensenWatchCta"))}</a>
      </div>
    </div>`}function bl(){return Sl()}function kl(e){e.innerHTML=`
    <section class="jh-hero" aria-label="${a(s("jensenHeroLabel"))}">
      <div class="jh-hero-main">
        <h3 class="jh-hero-kicker">${a(s("jensenKicker"))}</h3>
        <p class="jh-hero-tagline">${a(s("jensenTagline"))}</p>
        ${yl()}
        <p class="jh-meta">${a(s("jensenMeta"))}</p>
        <p class="jh-source">
          <span class="jh-source-label">${a(s("godzillaSourceLabel"))}</span>
          <a class="jh-yt" href="${Le.watchUrl}" target="_blank" rel="noopener noreferrer">${a(s("jensenYoutube"))}</a>
          <span class="jh-source-cite">· ${a(s("jensenSourceCite"))}</span>
        </p>
        <p class="jh-source jh-source-alt">
          <a class="jh-yt" href="${fl}" target="_blank" rel="noopener noreferrer">${a(s("jensenEcorner"))}</a>
        </p>
      </div>
    </section>

    ${bl()}


    <section class="jh-panel jh-listened" aria-label="${a(s("jensenStockTitle"))}">
      <h3 class="jh-h3">${a(s("jensenStockTitle"))}</h3>
      <p class="jh-panel-lead">${a(s("jensenStockLead"))}</p>
      <ul class="jh-bullet-list jh-stock-list">
        ${[1,2,3,4,5,6].map(t=>`<li>${a(s(`jensenStock${t}`))}</li>`).join("")}
      </ul>
      <p class="jh-source-note">${a(s("jensenStockNote"))}</p>
    </section>

    <section class="jh-panel" aria-label="${a(s("jensenHighlightsTitle"))}">
      <h3 class="jh-h3">${a(s("jensenHighlightsTitle"))}</h3>
      <p class="jh-panel-lead">${a(s("jensenHighlightsLead"))}</p>
      <div class="jh-highlight-grid">
        ${vl()}
      </div>
    </section>

    <section class="jh-panel jh-tw" aria-label="${a(s("jensenTwTitle"))}">
      <h3 class="jh-h3">${a(s("jensenTwTitle"))}</h3>
      <p class="jh-panel-lead">${a(s("jensenTwLead"))}</p>
      <p class="jh-tw-body">${a(s("jensenTwBody"))}</p>
    </section>

    <aside class="jh-gate" role="note">
      <strong class="jh-gate-title">${a(s("jensenGateNote"))}</strong>
      <p class="jh-gate-detail">${a(s("jensenGateDetail"))}</p>
    </aside>
  `}function $l(e="#jh-root"){const t=typeof e=="string"?document.querySelector(e):e;return t?(kl(t),{ok:!0}):{ok:!1}}const Tl="./data/gooaye-episodes.json",Ee=25,wl="#research/podcast",Oa="https://podcasts.apple.com/tw/podcast/gooaye-%E8%82%A1%E7%99%8C/id1500839292";let _e=null,$e=null,at=Ee,ft="";async function xl(){return _e||$e||($e=(async()=>{const e=await fetch(Tl,{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return _e=await e.json(),_e})().catch(e=>{throw $e=null,e}),$e)}function Pl(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(void 0,{timeZone:"Asia/Taipei",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}catch{return e}}function Cl(e){return(e==null?void 0:e.notesQuality)==="listened"&&Array.isArray(e.stockAnalysis)&&e.stockAnalysis.length>0}function Ll(e){const t=(e==null?void 0:e.episodes)||[],n=ft.trim().toLowerCase();return n?t.filter(o=>[o.title,o.subtitle,o.ep!=null?`ep${o.ep}`:"",o.ep!=null?String(o.ep):"",...o.stockAnalysis||[],...o.keyPoints||[],...o.rssTeaser||[]].filter(Boolean).join(`
`).toLowerCase().includes(n)):t}function Al(e){const t=Cl(e),n=e.ep!=null?`<span class="gy-ep-num">EP${a(String(e.ep))}</span>`:"",o=e.pubDateTw?`<time class="gy-ep-date" datetime="${a(e.pubDateIso||e.pubDateTw)}">${a(e.pubDateTw)}</time>`:"",i=t?`<span class="gy-ep-badge gy-ep-badge-listened">${a(s("gooayeBadgeListened"))}</span>`:`<span class="gy-ep-badge gy-ep-badge-rss">${a(s("gooayeBadgeRssOnly"))}</span>`,l=e.title||(e.ep!=null?`EP${e.ep}`:s("gooayeUntitled"));let r="";if(t){const d=(e.stockAnalysis||[]).filter(Boolean);r+=`<p class="gy-ep-kicker gy-ep-kicker-stock">${a(s("gooayeStockAnalysis"))}</p>`,r+=`<ul class="gy-ep-points gy-ep-stock">${d.map(p=>`<li>${a(p)}</li>`).join("")}</ul>`;const u=(e.rssTeaser||e.keyPoints||[]).filter(Boolean);if(u.length&&(r+=`<details class="gy-ep-rss-details"><summary>${a(s("gooayeRssTeaserToggle"))}</summary>`,r+=`<ul class="gy-ep-points gy-ep-rss">${u.map(p=>`<li>${a(p)}</li>`).join("")}</ul></details>`),e.listenedAt||e.transcriptSource){const p=[];e.listenedAt&&p.push(s("gooayeListenedAt",{date:String(e.listenedAt).slice(0,16).replace("T"," ")})),e.transcriptSource&&p.push(String(e.transcriptSource)),r+=`<p class="gy-ep-source-note">${a(p.join(" · "))}</p>`}}else{const d=(e.keyPoints||[]).filter(Boolean);r+=`<p class="gy-ep-kicker">${a(s("gooayeKeyPoints"))}</p>`,d.length?r+=`<ul class="gy-ep-points">${d.map(p=>`<li>${a(p)}</li>`).join("")}</ul>`:r+=`<p class="gy-ep-empty">${a(s("gooayeNotesThin"))}</p>`;const u=e.notesQuality==="teaser"||e.notesQuality==="title-only"||!d.length?`<p class="gy-ep-source-note">${a(s("gooayeTeaserNote"))}</p>`:`<p class="gy-ep-source-note">${a(s("gooayeRssOnlyNote"))}</p>`;r+=u}const c=e.link?`<a class="gy-ep-link" href="${a(e.link)}" target="_blank" rel="noopener noreferrer">${a(s("gooayeListen"))}</a>`:"";return`
    <article class="gy-ep${t?" gy-ep-listened":" gy-ep-rss-only"}" data-ep="${a(String(e.ep??""))}" data-quality="${a(t?"listened":"rss-only")}">
      <header class="gy-ep-head">
        <div class="gy-ep-meta">${n}${i}${o}</div>
        <h4 class="gy-ep-title">${a(l)}</h4>
      </header>
      <div class="gy-ep-body">
        ${r}
        <div class="gy-ep-actions">${c}</div>
      </div>
    </article>`}function mt(e,t,{error:n}={}){var g;if(n){e.innerHTML=`
      <div class="gy-error" role="alert">
        <p>${a(s("gooayeLoadError",{msg:String(n.message||n)}))}</p>
        <a class="pc-link pc-link-ext" href="${Oa}" target="_blank" rel="noopener noreferrer">${a(s("podcastsGooayeApple"))}</a>
      </div>`;return}const o=Ll(t),i=(t.episodes||[]).length,l=o.slice(0,at),r=Math.max(0,o.length-l.length),c=Pl(t.asOf),d=t.counts||{};e.innerHTML=`
    <div class="gy-toolbar">
      <div class="gy-toolbar-stats" aria-live="polite">
        <span class="gy-stat">${a(s("gooayeEpisodeCount",{n:String(i)}))}</span>
        ${d.listened?`<span class="gy-stat gy-stat-listened">${a(s("gooayeListenedCount",{n:String(d.listened)}))}</span>`:""}
        ${c?`<span class="gy-asof">${a(s("gooayeAsOf",{date:c}))}</span>`:""}
        ${d.notesEmpty?`<span class="gy-stat-muted">${a(s("gooayeEmptyCount",{n:String(d.notesEmpty)}))}</span>`:""}
      </div>
      <label class="gy-search">
        <span class="gy-search-label">${a(s("gooayeSearchLabel"))}</span>
        <input type="search" class="gy-search-input" data-gy-search
          placeholder="${a(s("gooayeSearchPlaceholder"))}"
          value="${a(ft)}" autocomplete="off" />
      </label>
    </div>

    <p class="gy-source-line">
      ${a(s("gooayeSourceLine"))}
      <a class="pc-link pc-link-ext" href="${a(((g=t.show)==null?void 0:g.feedUrl)||"")}" target="_blank" rel="noopener noreferrer">SoundOn RSS</a>
      ·
      <a class="pc-link pc-link-ext" href="${Oa}" target="_blank" rel="noopener noreferrer">${a(s("podcastsGooayeApple"))}</a>
      ·
      <a class="pc-link" href="${wl}">${a(s("podcastsGotoResearch"))}</a>
    </p>

    <div class="gy-list" role="list">
      ${l.length?l.map(Al).join(""):`<p class="gy-empty">${a(s("gooayeNoResults"))}</p>`}
    </div>

    <div class="gy-pager">
      ${r>0?`<button type="button" class="gy-load-more" data-gy-more>
              ${a(s("gooayeLoadMore",{n:String(Math.min(Ee,r)),left:String(r)}))}
            </button>`:o.length?`<p class="gy-pager-done">${a(s("gooayeShowingAll",{n:String(o.length)}))}</p>`:""}
    </div>`;const u=e.querySelector("[data-gy-search]");if(u){let h=null;u.addEventListener("input",()=>{clearTimeout(h),h=setTimeout(()=>{ft=u.value||"",at=Ee,mt(e,t)},180)})}const p=e.querySelector("[data-gy-more]");p&&p.addEventListener("click",()=>{at+=Ee,mt(e,t)})}function El(){return`
    <article class="pc-card pc-card-gooaye" id="podcast-gooaye" data-podcast="gooaye">
      <header class="pc-card-head pc-card-head-gooaye">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${a(s("gooayeLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-tw">${a(s("podcastsGooayeMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(s("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(s("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(s("podcastsGooayeTitle"))}</h3>
        <p class="pc-card-blurb">${a(s("podcastsGooayeLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="gy-disclaimer" role="note">${a(s("gooayeDisclaimer"))}</p>
        <div id="gy-root" class="gy-root" aria-busy="true">
          <p class="gy-loading">${a(s("gooayeLoading"))}</p>
        </div>
      </div>
    </article>`}function jl(){return El()}async function zl(e="#gy-root"){var n;const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1,reason:"missing-root"};at=Ee,ft="";try{const o=await xl();return t.setAttribute("aria-busy","false"),mt(t,o),{ok:!0,count:((n=o.episodes)==null?void 0:n.length)||0}}catch(o){return t.setAttribute("aria-busy","false"),mt(t,null,{error:o}),{ok:!1,reason:String((o==null?void 0:o.message)||o)}}}const Ml="./data/xiaojun-episodes.json",je=25,Rl="#research/podcast",Ia="https://podcasts.apple.com/tw/podcast/%E5%BC%A0%E5%B0%8F%E7%8F%BAj%C3%B9n-%E5%95%86%E4%B8%9A%E8%AE%BF%E8%B0%88%E5%BD%95/id1634356920";let Ue=null,Te=null,st=je,yt="";async function Nl(){return Ue||Te||(Te=(async()=>{const e=await fetch(Ml,{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return Ue=await e.json(),Ue})().catch(e=>{throw Te=null,e}),Te)}function Bl(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(void 0,{timeZone:"Asia/Taipei",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}catch{return e}}function Dl(e){return(e==null?void 0:e.notesQuality)==="listened"&&Array.isArray(e.stockAnalysis)&&e.stockAnalysis.length>0}function Ol(e){const t=(e==null?void 0:e.episodes)||[],n=yt.trim().toLowerCase();return n?t.filter(o=>[o.title,o.subtitle,o.ep!=null?`ep${o.ep}`:"",o.ep!=null?String(o.ep):"",...o.stockAnalysis||[],...o.keyPoints||[],...o.rssTeaser||[]].filter(Boolean).join(`
`).toLowerCase().includes(n)):t}function Il(e){const t=Dl(e),n=e.ep!=null?`<span class="xj-ep-num">EP${a(String(e.ep))}</span>`:"",o=e.pubDateTw?`<time class="xj-ep-date" datetime="${a(e.pubDateIso||e.pubDateTw)}">${a(e.pubDateTw)}</time>`:"",i=t?`<span class="xj-ep-badge xj-ep-badge-listened">${a(s("xiaojunBadgeListened"))}</span>`:`<span class="xj-ep-badge xj-ep-badge-rss">${a(s("xiaojunBadgeRssOnly"))}</span>`,l=e.title||(e.ep!=null?`EP${e.ep}`:s("xiaojunUntitled"));let r="";if(t){const d=(e.stockAnalysis||[]).filter(Boolean);r+=`<p class="xj-ep-kicker xj-ep-kicker-stock">${a(s("xiaojunStockAnalysis"))}</p>`,r+=`<ul class="xj-ep-points xj-ep-stock">${d.map(p=>`<li>${a(p)}</li>`).join("")}</ul>`;const u=(e.rssTeaser||e.keyPoints||[]).filter(Boolean);if(u.length&&(r+=`<details class="xj-ep-rss-details"><summary>${a(s("xiaojunRssTeaserToggle"))}</summary>`,r+=`<ul class="xj-ep-points xj-ep-rss">${u.map(p=>`<li>${a(p)}</li>`).join("")}</ul></details>`),e.listenedAt||e.transcriptSource){const p=[];e.listenedAt&&p.push(s("xiaojunListenedAt",{date:String(e.listenedAt).slice(0,16).replace("T"," ")})),e.transcriptSource&&p.push(String(e.transcriptSource)),r+=`<p class="xj-ep-source-note">${a(p.join(" · "))}</p>`}}else{const d=(e.keyPoints||[]).filter(Boolean);r+=`<p class="xj-ep-kicker">${a(s("xiaojunKeyPoints"))}</p>`,d.length?r+=`<ul class="xj-ep-points">${d.map(p=>`<li>${a(p)}</li>`).join("")}</ul>`:r+=`<p class="xj-ep-empty">${a(s("xiaojunNotesThin"))}</p>`;const u=e.notesQuality==="teaser"||e.notesQuality==="title-only"||!d.length?`<p class="xj-ep-source-note">${a(s("xiaojunTeaserNote"))}</p>`:`<p class="xj-ep-source-note">${a(s("xiaojunRssOnlyNote"))}</p>`;r+=u}const c=e.link?`<a class="xj-ep-link" href="${a(e.link)}" target="_blank" rel="noopener noreferrer">${a(s("xiaojunListen"))}</a>`:"";return`
    <article class="xj-ep${t?" xj-ep-listened":" xj-ep-rss-only"}" data-ep="${a(String(e.ep??""))}" data-quality="${a(t?"listened":"rss-only")}">
      <header class="xj-ep-head">
        <div class="xj-ep-meta">${n}${i}${o}</div>
        <h4 class="xj-ep-title">${a(l)}</h4>
      </header>
      <div class="xj-ep-body">
        ${r}
        <div class="xj-ep-actions">${c}</div>
      </div>
    </article>`}function vt(e,t,{error:n}={}){var g;if(n){e.innerHTML=`
      <div class="xj-error" role="alert">
        <p>${a(s("xiaojunLoadError",{msg:String(n.message||n)}))}</p>
        <a class="pc-link pc-link-ext" href="${Ia}" target="_blank" rel="noopener noreferrer">${a(s("podcastsXiaojunApple"))}</a>
      </div>`;return}const o=Ol(t),i=(t.episodes||[]).length,l=o.slice(0,st),r=Math.max(0,o.length-l.length),c=Bl(t.asOf),d=t.counts||{};e.innerHTML=`
    <div class="xj-toolbar">
      <div class="xj-toolbar-stats" aria-live="polite">
        <span class="xj-stat">${a(s("xiaojunEpisodeCount",{n:String(i)}))}</span>
        ${d.listened?`<span class="xj-stat xj-stat-listened">${a(s("xiaojunListenedCount",{n:String(d.listened)}))}</span>`:""}
        ${c?`<span class="xj-asof">${a(s("xiaojunAsOf",{date:c}))}</span>`:""}
        ${d.notesEmpty?`<span class="xj-stat-muted">${a(s("xiaojunEmptyCount",{n:String(d.notesEmpty)}))}</span>`:""}
      </div>
      <label class="xj-search">
        <span class="xj-search-label">${a(s("xiaojunSearchLabel"))}</span>
        <input type="search" class="xj-search-input" data-xj-search
          placeholder="${a(s("xiaojunSearchPlaceholder"))}"
          value="${a(yt)}" autocomplete="off" />
      </label>
    </div>

    <p class="xj-source-line">
      ${a(s("xiaojunSourceLine"))}
      <a class="pc-link pc-link-ext" href="${a(((g=t.show)==null?void 0:g.feedUrl)||"")}" target="_blank" rel="noopener noreferrer">SoundOn RSS</a>
      ·
      <a class="pc-link pc-link-ext" href="${Ia}" target="_blank" rel="noopener noreferrer">${a(s("podcastsXiaojunApple"))}</a>
      ·
      <a class="pc-link" href="${Rl}">${a(s("podcastsGotoResearch"))}</a>
    </p>

    <div class="xj-list" role="list">
      ${l.length?l.map(Il).join(""):`<p class="xj-empty">${a(s("xiaojunNoResults"))}</p>`}
    </div>

    <div class="xj-pager">
      ${r>0?`<button type="button" class="xj-load-more" data-xj-more>
              ${a(s("xiaojunLoadMore",{n:String(Math.min(je,r)),left:String(r)}))}
            </button>`:o.length?`<p class="xj-pager-done">${a(s("xiaojunShowingAll",{n:String(o.length)}))}</p>`:""}
    </div>`;const u=e.querySelector("[data-xj-search]");if(u){let h=null;u.addEventListener("input",()=>{clearTimeout(h),h=setTimeout(()=>{yt=u.value||"",st=je,vt(e,t)},180)})}const p=e.querySelector("[data-xj-more]");p&&p.addEventListener("click",()=>{st+=je,vt(e,t)})}function Hl(){return`
    <article class="pc-card pc-card-xiaojun" id="podcast-xiaojun" data-podcast="xiaojun">
      <header class="pc-card-head pc-card-head-xiaojun">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${a(s("xiaojunLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-cn">${a(s("podcastsXiaojunMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(s("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(s("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(s("podcastsXiaojunTitle"))}</h3>
        <p class="pc-card-blurb">${a(s("podcastsXiaojunLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="xj-disclaimer" role="note">${a(s("xiaojunDisclaimer"))}</p>
        <div id="xj-root" class="xj-root" aria-busy="true">
          <p class="xj-loading">${a(s("xiaojunLoading"))}</p>
        </div>
      </div>
    </article>`}function ql(){return Hl()}async function Fl(e="#xj-root"){var n;const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1,reason:"missing-root"};st=je,yt="";try{const o=await Nl();return t.setAttribute("aria-busy","false"),vt(t,o),{ok:!0,count:((n=o.episodes)==null?void 0:n.length)||0}}catch(o){return t.setAttribute("aria-busy","false"),vt(t,null,{error:o}),{ok:!1,reason:String((o==null?void 0:o.message)||o)}}}const Wl="./data/whynottv-episodes.json",ze=25,_l="#research/podcast",Ha="https://podcasts.apple.com/tw/podcast/whynottv-podcast/id1824936911";let Ve=null,we=null,nt=ze,St="";async function Ul(){return Ve||we||(we=(async()=>{const e=await fetch(Wl,{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return Ve=await e.json(),Ve})().catch(e=>{throw we=null,e}),we)}function Vl(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(void 0,{timeZone:"Asia/Taipei",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}catch{return e}}function Gl(e){return(e==null?void 0:e.notesQuality)==="listened"&&Array.isArray(e.stockAnalysis)&&e.stockAnalysis.length>0}function Jl(e){const t=(e==null?void 0:e.episodes)||[],n=St.trim().toLowerCase();return n?t.filter(o=>[o.title,o.subtitle,o.ep!=null?`ep${o.ep}`:"",o.ep!=null?String(o.ep):"",...o.stockAnalysis||[],...o.keyPoints||[],...o.rssTeaser||[]].filter(Boolean).join(`
`).toLowerCase().includes(n)):t}function Yl(e){const t=Gl(e),n=e.ep!=null?`<span class="wn-ep-num">EP${a(String(e.ep))}</span>`:"",o=e.pubDateTw?`<time class="wn-ep-date" datetime="${a(e.pubDateIso||e.pubDateTw)}">${a(e.pubDateTw)}</time>`:"",i=t?`<span class="wn-ep-badge wn-ep-badge-listened">${a(s("whynottvBadgeListened"))}</span>`:`<span class="wn-ep-badge wn-ep-badge-rss">${a(s("whynottvBadgeRssOnly"))}</span>`,l=e.title||(e.ep!=null?`EP${e.ep}`:s("whynottvUntitled"));let r="";if(t){const d=(e.stockAnalysis||[]).filter(Boolean);r+=`<p class="wn-ep-kicker wn-ep-kicker-stock">${a(s("whynottvStockAnalysis"))}</p>`,r+=`<ul class="wn-ep-points wn-ep-stock">${d.map(p=>`<li>${a(p)}</li>`).join("")}</ul>`;const u=(e.rssTeaser||e.keyPoints||[]).filter(Boolean);if(u.length&&(r+=`<details class="wn-ep-rss-details"><summary>${a(s("whynottvRssTeaserToggle"))}</summary>`,r+=`<ul class="wn-ep-points wn-ep-rss">${u.map(p=>`<li>${a(p)}</li>`).join("")}</ul></details>`),e.listenedAt||e.transcriptSource){const p=[];e.listenedAt&&p.push(s("whynottvListenedAt",{date:String(e.listenedAt).slice(0,16).replace("T"," ")})),e.transcriptSource&&p.push(String(e.transcriptSource)),r+=`<p class="wn-ep-source-note">${a(p.join(" · "))}</p>`}}else{const d=(e.keyPoints||[]).filter(Boolean);r+=`<p class="wn-ep-kicker">${a(s("whynottvKeyPoints"))}</p>`,d.length?r+=`<ul class="wn-ep-points">${d.map(p=>`<li>${a(p)}</li>`).join("")}</ul>`:r+=`<p class="wn-ep-empty">${a(s("whynottvNotesThin"))}</p>`;const u=e.notesQuality==="teaser"||e.notesQuality==="title-only"||!d.length?`<p class="wn-ep-source-note">${a(s("whynottvTeaserNote"))}</p>`:`<p class="wn-ep-source-note">${a(s("whynottvRssOnlyNote"))}</p>`;r+=u}const c=e.link?`<a class="wn-ep-link" href="${a(e.link)}" target="_blank" rel="noopener noreferrer">${a(s("whynottvListen"))}</a>`:"";return`
    <article class="wn-ep${t?" wn-ep-listened":" wn-ep-rss-only"}" data-ep="${a(String(e.ep??""))}" data-quality="${a(t?"listened":"rss-only")}">
      <header class="wn-ep-head">
        <div class="wn-ep-meta">${n}${i}${o}</div>
        <h4 class="wn-ep-title">${a(l)}</h4>
      </header>
      <div class="wn-ep-body">
        ${r}
        <div class="wn-ep-actions">${c}</div>
      </div>
    </article>`}function bt(e,t,{error:n}={}){var g;if(n){e.innerHTML=`
      <div class="wn-error" role="alert">
        <p>${a(s("whynottvLoadError",{msg:String(n.message||n)}))}</p>
        <a class="pc-link pc-link-ext" href="${Ha}" target="_blank" rel="noopener noreferrer">${a(s("podcastsWhynottvApple"))}</a>
      </div>`;return}const o=Jl(t),i=(t.episodes||[]).length,l=o.slice(0,nt),r=Math.max(0,o.length-l.length),c=Vl(t.asOf),d=t.counts||{};e.innerHTML=`
    <div class="wn-toolbar">
      <div class="wn-toolbar-stats" aria-live="polite">
        <span class="wn-stat">${a(s("whynottvEpisodeCount",{n:String(i)}))}</span>
        ${d.listened?`<span class="wn-stat wn-stat-listened">${a(s("whynottvListenedCount",{n:String(d.listened)}))}</span>`:""}
        ${c?`<span class="wn-asof">${a(s("whynottvAsOf",{date:c}))}</span>`:""}
        ${d.notesEmpty?`<span class="wn-stat-muted">${a(s("whynottvEmptyCount",{n:String(d.notesEmpty)}))}</span>`:""}
      </div>
      <label class="wn-search">
        <span class="wn-search-label">${a(s("whynottvSearchLabel"))}</span>
        <input type="search" class="wn-search-input" data-wn-search
          placeholder="${a(s("whynottvSearchPlaceholder"))}"
          value="${a(St)}" autocomplete="off" />
      </label>
    </div>

    <p class="wn-source-line">
      ${a(s("whynottvSourceLine"))}
      <a class="pc-link pc-link-ext" href="${a(((g=t.show)==null?void 0:g.feedUrl)||"")}" target="_blank" rel="noopener noreferrer">SoundOn RSS</a>
      ·
      <a class="pc-link pc-link-ext" href="${Ha}" target="_blank" rel="noopener noreferrer">${a(s("podcastsWhynottvApple"))}</a>
      ·
      <a class="pc-link" href="${_l}">${a(s("podcastsGotoResearch"))}</a>
    </p>

    <div class="wn-list" role="list">
      ${l.length?l.map(Yl).join(""):`<p class="wn-empty">${a(s("whynottvNoResults"))}</p>`}
    </div>

    <div class="wn-pager">
      ${r>0?`<button type="button" class="wn-load-more" data-wn-more>
              ${a(s("whynottvLoadMore",{n:String(Math.min(ze,r)),left:String(r)}))}
            </button>`:o.length?`<p class="wn-pager-done">${a(s("whynottvShowingAll",{n:String(o.length)}))}</p>`:""}
    </div>`;const u=e.querySelector("[data-wn-search]");if(u){let h=null;u.addEventListener("input",()=>{clearTimeout(h),h=setTimeout(()=>{St=u.value||"",nt=ze,bt(e,t)},180)})}const p=e.querySelector("[data-wn-more]");p&&p.addEventListener("click",()=>{nt+=ze,bt(e,t)})}function Xl(){return`
    <article class="pc-card pc-card-whynottv" id="podcast-whynottv" data-podcast="whynottv">
      <header class="pc-card-head pc-card-head-whynottv">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${a(s("whynottvLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-cn">${a(s("podcastsWhynottvMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(s("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(s("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(s("podcastsWhynottvTitle"))}</h3>
        <p class="pc-card-blurb">${a(s("podcastsWhynottvLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="wn-disclaimer" role="note">${a(s("whynottvDisclaimer"))}</p>
        <div id="wn-root" class="wn-root" aria-busy="true">
          <p class="wn-loading">${a(s("whynottvLoading"))}</p>
        </div>
      </div>
    </article>`}function Kl(){return Xl()}async function Ql(e="#wn-root"){var n;const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1,reason:"missing-root"};nt=ze,St="";try{const o=await Ul();return t.setAttribute("aria-busy","false"),bt(t,o),{ok:!0,count:((n=o.episodes)==null?void 0:n.length)||0}}catch(o){return t.setAttribute("aria-busy","false"),bt(t,null,{error:o}),{ok:!1,reason:String((o==null?void 0:o.message)||o)}}}const Zl="./data/zhang-junan-posts.json",ae=25,qa="https://et220870.blogspot.com/",er="https://www.pttweb.cc/user/et220870";let Ge=null,xe=null,he=ae,kt="",ye="all",ve="all";async function tr(){return Ge||xe||(xe=(async()=>{const e=await fetch(Zl,{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return Ge=await e.json(),Ge})().catch(e=>{throw xe=null,e}),xe)}function ar(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(void 0,{timeZone:"Asia/Taipei",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}catch{return e}}function sr(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e).slice(0,10):new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(t)}catch{return String(e).slice(0,10)}}function nr(e){return(e==null?void 0:e.analysisQuality)==="analyzed"&&Array.isArray(e.analysis)&&e.analysis.length>0}function or(e,t){const n=new Set;for(const o of e)t!=="all"&&o.source!==t||o.series&&n.add(o.series);return["all",...[...n].sort((o,i)=>o.localeCompare(i,"zh-Hant"))]}function ir(e){const t=(e==null?void 0:e.posts)||[],n=kt.trim().toLowerCase();return t.filter(o=>ye!=="all"&&o.source!==ye||ve!=="all"&&o.series!==ve?!1:n?[o.title,o.series,o.board,o.source,...o.analysis||[],o.commentSummary||""].filter(Boolean).join(`
`).toLowerCase().includes(n):!0)}function lr(e){const t=nr(e),n=sr(e.publishedAt),o=n?`<time class="zj-ep-date" datetime="${a(e.publishedAt||n)}">${a(n)}</time>`:"",i=t?`<span class="zj-ep-badge zj-ep-badge-analyzed">${a(s("zhangJunanBadgeAnalyzed"))}</span>`:`<span class="zj-ep-badge zj-ep-badge-title">${a(s("zhangJunanBadgeTitleOnly"))}</span>`,l=e.source==="blog"?`<span class="zj-ep-badge">${a(s("zhangJunanSourceBlog"))}</span>`:`<span class="zj-ep-badge">${a(s("zhangJunanSourcePtt"))}</span>`,r=e.source==="ptt"&&e.board?`<span class="zj-ep-board">[${a(e.board)}]</span>`:"",c=e.series?`<span class="zj-ep-badge">${a(e.series)}</span>`:"";let d="";d+=`<p class="zj-ep-kicker zj-ep-kicker-stock">${a(s(t?"zhangJunanStockAnalysis":"zhangJunanKeyPoints"))}</p>`;const u=(e.analysis||[]).filter(Boolean);u.length?d+=`<ul class="zj-ep-points${t?" zj-ep-stock":""}">${u.map(h=>`<li>${a(h)}</li>`).join("")}</ul>`:d+=`<p class="zj-ep-empty">${a(s("zhangJunanNotesThin"))}</p>`,t||(d+=`<p class="zj-ep-source-note">${a(s("zhangJunanTitleOnlyNote"))}</p>`),e.commentSummary&&(d+=`<div class="zj-ep-comments"><div class="zj-ep-comments-label">${a(s("zhangJunanCommentSummary"))}</div><div>${a(e.commentSummary)}</div></div>`);const p=e.source==="blog"?s("zhangJunanOpenBlog"):s("zhangJunanOpenPtt"),g=e.url?`<a class="zj-ep-link" href="${a(e.url)}" target="_blank" rel="noopener noreferrer">${a(p)}</a>`:"";return`
    <article class="zj-ep${t?" zj-ep-listened":" zj-ep-rss-only"}" data-id="${a(e.id)}" data-quality="${a(t?"analyzed":"title-only")}">
      <header class="zj-ep-head">
        <div class="zj-ep-meta">${l}${c}${i}${o}</div>
        <h4 class="zj-ep-title">${r}${a(e.title||s("zhangJunanUntitled"))}</h4>
      </header>
      <div class="zj-ep-body">
        ${d}
        <div class="zj-ep-actions">${g}</div>
      </div>
    </article>`}function me(e,t,{error:n}={}){var b;if(n){e.innerHTML=`
      <div class="zj-error" role="alert">
        <p>${a(s("zhangJunanLoadError",{msg:String(n.message||n)}))}</p>
        <a class="pc-link pc-link-ext" href="${qa}" target="_blank" rel="noopener noreferrer">${a(s("zhangJunanOpenBlog"))}</a>
      </div>`;return}const o=ir(t),i=(t.posts||[]).length,l=o.slice(0,he),r=Math.max(0,o.length-l.length),c=ar(t.asOf),d=t.counts||{},u=or(t.posts||[],ye),p=[{id:"all",label:s("zhangJunanFilterAll")},{id:"blog",label:s("zhangJunanFilterBlog")},{id:"ptt",label:s("zhangJunanFilterPtt")}].map(k=>`<button type="button" class="zj-subtab${ye===k.id?" is-active":""}" data-zj-source="${k.id}">${a(k.label)}</button>`).join(""),g=u.map(k=>{const x=k==="all"?s("zhangJunanFilterSeriesAll"):k;return`<button type="button" class="zj-series-tab${ve===k?" is-active":""}" data-zj-series="${a(k)}">${a(x)}</button>`}).join("");e.innerHTML=`
    <div class="zj-toolbar">
      <div class="zj-toolbar-stats" aria-live="polite">
        <span class="zj-stat">${a(s("zhangJunanPostCount",{n:String(i)}))}</span>
        ${d.analyzed?`<span class="zj-stat zj-stat-listened">${a(s("zhangJunanAnalyzedCount",{n:String(d.analyzed)}))}</span>`:""}
        ${d.titleOnly?`<span class="zj-stat-muted">${a(s("zhangJunanTitleOnlyCount",{n:String(d.titleOnly)}))}</span>`:""}
        ${c?`<span class="zj-asof">${a(s("zhangJunanAsOf",{date:c}))}</span>`:""}
      </div>
      <label class="zj-search">
        <span class="zj-search-label">${a(s("zhangJunanSearchLabel"))}</span>
        <input type="search" class="zj-search-input" data-zj-search
          placeholder="${a(s("zhangJunanSearchPlaceholder"))}"
          value="${a(kt)}" autocomplete="off" />
      </label>
    </div>

    <div class="zj-subtabs" role="tablist" aria-label="${a(s("zhangJunanSourceFilters"))}">${p}</div>
    <div class="zj-series-tabs" role="tablist" aria-label="${a(s("zhangJunanSeriesFilters"))}">${g}</div>

    <p class="zj-source-line">
      ${a(s("zhangJunanSourceLine"))}
      <a class="pc-link pc-link-ext" href="${qa}" target="_blank" rel="noopener noreferrer">Blogspot</a>
      ·
      <a class="pc-link pc-link-ext" href="${er}" target="_blank" rel="noopener noreferrer">PTT ${a(((b=t.person)==null?void 0:b.pttId)||"et220870")}</a>
    </p>

    <div class="zj-list" role="list">
      ${l.length?l.map(lr).join(""):`<p class="zj-empty">${a(s("zhangJunanNoResults"))}</p>`}
    </div>

    <div class="zj-pager">
      ${r>0?`<button type="button" class="zj-load-more" data-zj-more>
              ${a(s("zhangJunanLoadMore",{n:String(Math.min(ae,r)),left:String(r)}))}
            </button>`:o.length?`<p class="zj-pager-done">${a(s("zhangJunanShowingAll",{n:String(o.length)}))}</p>`:""}
    </div>`;const h=e.querySelector("[data-zj-search]");if(h){let k=null;h.addEventListener("input",()=>{clearTimeout(k),k=setTimeout(()=>{kt=h.value||"",he=ae,me(e,t)},180)})}e.querySelectorAll("[data-zj-source]").forEach(k=>{k.addEventListener("click",()=>{ye=k.getAttribute("data-zj-source")||"all",ve="all",he=ae,me(e,t)})}),e.querySelectorAll("[data-zj-series]").forEach(k=>{k.addEventListener("click",()=>{ve=k.getAttribute("data-zj-series")||"all",he=ae,me(e,t)})});const y=e.querySelector("[data-zj-more]");y&&y.addEventListener("click",()=>{he+=ae,me(e,t)})}function rr(){return`
    <article class="pc-card pc-card-zhang-junan" id="podcast-zhang-junan" data-podcast="zhang-junan">
      <header class="pc-card-head pc-card-head-zhang-junan">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${a(s("zhangJunanLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-tw">${a(s("podcastsZhangJunanMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(s("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(s("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(s("podcastsZhangJunanTitle"))}</h3>
        <p class="pc-card-blurb">${a(s("podcastsZhangJunanLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="zj-disclaimer" role="note">${a(s("zhangJunanDisclaimer"))}</p>
        <div id="zj-root" class="zj-root" aria-busy="true">
          <p class="zj-loading">${a(s("zhangJunanLoading"))}</p>
        </div>
      </div>
    </article>`}function cr(){return rr()}async function dr(e="#zj-root"){var n;const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1,reason:"missing-root"};he=ae,kt="",ye="all",ve="all";try{const o=await tr();return t.setAttribute("aria-busy","false"),me(t,o),{ok:!0,count:((n=o.posts)==null?void 0:n.length)||0}}catch(o){return t.setAttribute("aria-busy","false"),me(t,null,{error:o}),{ok:!1,reason:String((o==null?void 0:o.message)||o)}}}const na=[{id:"godzilla",titleKey:"godzillaTitle",handleKey:"podcastsGodzillaHandle",blurbKey:"godzillaLead",marketKey:"godzillaUsFocus",market:"US",featured:!0},{id:"jensen",titleKey:"jensenTitle",handleKey:"jensenHandle",blurbKey:"jensenLead",marketKey:"jensenUsFocus",market:"US",featured:!0},{id:"gooaye",titleKey:"podcastsGooayeTitle",handleKey:null,blurbKey:"podcastsGooayeLead",marketKey:"podcastsGooayeMarket",market:"TW",featured:!1},{id:"xiaojun",titleKey:"podcastsXiaojunTitle",handleKey:"podcastsXiaojunHandle",blurbKey:"podcastsXiaojunLead",marketKey:"podcastsXiaojunMarket",market:"CN",featured:!1},{id:"whynottv",titleKey:"podcastsWhynottvTitle",handleKey:"podcastsWhynottvHandle",blurbKey:"podcastsWhynottvLead",marketKey:"podcastsWhynottvMarket",market:"CN",featured:!1},{id:"zhang-junan",titleKey:"podcastsZhangJunanTitle",handleKey:"podcastsZhangJunanHandle",blurbKey:"podcastsZhangJunanLead",marketKey:"podcastsZhangJunanMarket",market:"TW",featured:!1}],Je={godzilla:"godzilla","godzilla-playbook":"godzilla",playbook:"godzilla",哥吉拉:"godzilla",哥吉拉心法:"godzilla",jensen:"jensen",huang:"jensen","jensen-huang":"jensen",nvidia:"jensen","jen-hsun":"jensen",etl:"jensen",黃仁勳:"jensen",黄仁勋:"jensen",gooaye:"gooaye",股癌:"gooaye",xiaojun:"xiaojun",張小珺:"xiaojun",张小珺:"xiaojun",whynottv:"whynottv",whynot:"whynottv",WhynotTV:"whynottv","zhang-junan":"zhang-junan",zhangjunan:"zhang-junan",張濬安:"zhang-junan",张浚安:"zhang-junan",menu:"menu",all:"menu",index:"menu","":"menu"};let oa="menu",_t=null;function ia(e){if(e==null||e==="")return"menu";const t=String(e).trim(),n=t.toLowerCase();return Je[n]?Je[n]:Je[t]?Je[t]:na.some(o=>o.id===n)?n:"menu"}function ur(){return`
    <article class="pc-card pc-card-featured" id="podcast-godzilla" data-podcast="godzilla">
      <header class="pc-card-head">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-featured">${a(s("podcastsFeatured"))}</span>
          <span class="pc-card-badge pc-badge-us">${a(s("godzillaUsFocus"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(s("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(s("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(s("godzillaTitle"))}</h3>
        <p class="pc-card-handle">${a(s("podcastsGodzillaHandle"))}</p>
        <p class="pc-card-blurb">${a(s("godzillaLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="gz-disclaimer" role="note">${a(s("godzillaDisclaimer"))}</p>
        <div id="gz-root" class="gz-root"></div>
      </div>
    </article>`}function pr(){return`
    <article class="pc-card pc-card-featured pc-card-jensen" id="podcast-jensen" data-podcast="jensen">
      <header class="pc-card-head pc-card-head-jensen">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-featured">${a(s("podcastsFeatured"))}</span>
          <span class="pc-card-badge pc-badge-us">${a(s("jensenUsFocus"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(s("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(s("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(s("jensenTitle"))}</h3>
        <p class="pc-card-handle">${a(s("jensenHandle"))}</p>
        <p class="pc-card-blurb">${a(s("jensenLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="jh-disclaimer" role="note">${a(s("jensenDisclaimer"))}</p>
        <div id="jh-root" class="jh-root"></div>
      </div>
    </article>`}function gr(){return na.map(e=>{const t=e.market==="TW"?"pc-badge-tw":e.market==="CN"?"pc-badge-cn":"pc-badge-us",n=e.featured?`<span class="pc-card-badge pc-badge-featured">${a(s("podcastsFeatured"))}</span>`:e.id==="gooaye"||e.id==="xiaojun"||e.id==="whynottv"||e.id==="zhang-junan"?`<span class="pc-card-badge pc-badge-library">${a(s(e.id==="gooaye"?"gooayeLibraryBadge":e.id==="xiaojun"?"xiaojunLibraryBadge":e.id==="whynottv"?"whynottvLibraryBadge":"zhangJunanLibraryBadge"))}</span>`:`<span class="pc-card-badge pc-badge-stub">${a(s("podcastsStubBadge"))}</span>`,o=e.handleKey?`<p class="pc-menu-handle">${a(s(e.handleKey))}</p>`:"";return`
      <button type="button" class="pc-menu-card" data-pc-cat="${a(e.id)}" aria-label="${a(s(e.titleKey))}">
        <div class="pc-menu-badges">
          ${n}
          <span class="pc-card-badge ${t}">${a(s(e.marketKey))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(s("godzillaBadgeCandidate"))}</span>
        </div>
        <h3 class="pc-menu-title">${a(s(e.titleKey))}</h3>
        ${o}
        <p class="pc-menu-blurb">${a(s(e.blurbKey))}</p>
        <span class="pc-menu-cta">${a(s("podcastsOpenCategory"))}</span>
      </button>`}).join("")}function hr(e){return[{id:"menu",label:s("podcastsCatMenu")},...na.map(n=>({id:n.id,label:s(n.titleKey)}))].map(n=>`<button type="button" class="pc-tab${n.id===e?" is-active":""}" data-pc-cat="${a(n.id)}" role="tab" aria-selected="${n.id===e}">${a(n.label)}</button>`).join("")}function fr(e){return e==="godzilla"?ur():e==="jensen"?pr():e==="gooaye"?jl():e==="xiaojun"?ql():e==="whynottv"?Kl():e==="zhang-junan"?cr():`
    <div class="pc-menu" role="list" aria-label="${a(s("podcastsCatMenu"))}">
      <p class="pc-menu-lead">${a(s("podcastsMenuLead"))}</p>
      <div class="pc-menu-grid">${gr()}</div>
    </div>`}function mr(e){return!e||e==="menu"?"#podcasts":`#podcasts/${e}`}function yr(e){const t=mr(e);location.hash!==t&&history.replaceState(null,"",t)}function la(e,t,{syncUrl:n=!0}={}){const o=ia(t);oa=o,n&&yr(o),e.innerHTML=`
    <div class="pc-tabs-wrap">
      <div class="pc-tabs" role="tablist" aria-label="${a(s("podcastsCategories"))}">
        ${hr(o)}
      </div>
    </div>
    <div class="pc-panel" role="tabpanel" data-pc-panel="${a(o)}">
      ${fr(o)}
    </div>`,e.querySelectorAll("[data-pc-cat]").forEach(i=>{i.addEventListener("click",()=>{la(e,i.dataset.pcCat,{syncUrl:!0})})}),o==="godzilla"&&hl("#gz-root"),o==="jensen"&&$l("#jh-root"),o==="gooaye"&&zl("#gy-root"),o==="xiaojun"&&Fl("#xj-root"),o==="whynottv"&&Ql("#wn-root"),o==="zhang-junan"&&dr("#zj-root")}function vr(){return`
    <section class="section podcasts-section" aria-label="${a(s("podcastsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(s("podcastsTitle"))}</h2>
        <p class="view-lead">${a(s("podcastsLead"))}</p>
      </header>
      <p class="pc-disclaimer" role="note">${a(s("podcastsDisclaimer"))}</p>
      <div id="pc-root" class="pc-root"></div>
    </section>`}function Sr(e,{syncUrl:t=!0}={}){return _t?(la(_t,e,{syncUrl:t}),{ok:!0,category:oa}):{ok:!1,reason:"missing-root"}}function br(e="#pc-root",t={}){const o=(typeof e=="string"?document.querySelector(e):e)||document.querySelector("#pc-root");if(!o)return{ok:!1,reason:"missing-root"};_t=o;const i=ia(t.category??"menu");return la(o,i,{syncUrl:t.syncUrl!==!1}),{ok:!0,category:oa}}const kr="./data/latest.json";function q(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function I(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(t)}%`}function U(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString(L(),{minimumFractionDigits:t,maximumFractionDigits:t})}function ra(e,t){if(e==null||Number.isNaN(e))return"—";const n=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"$":t==="TWD"?"NT$":""}${U(e,n)}`}function $r(e){try{return new Date(e).toLocaleString(L(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+s("taipei")}catch{return e}}function ca(e){const t=e.aboveSma20?`<span class="badge sma-on">${v("sma20","SMA20")}↑</span>`:`<span class="badge sma-off">${v("sma20","SMA20")}↓</span>`,n=e.aboveSma50?`<span class="badge sma-on">${v("sma50","SMA50")}↑</span>`:`<span class="badge sma-off">${v("sma50","SMA50")}↓</span>`;return t+n}function da(e){return e!=null&&e.length?e.map(t=>{const n=String(t);return n==="A"?`<span class="badge screen">${v("screenA","A")}</span>`:n==="B"?`<span class="badge screen">${v("screenB","B")}</span>`:n==="C"?`<span class="badge screen">${v("screenC","C")}</span>`:n==="observe"?`<span class="badge screen">${a(s("observe"))}</span>`:`<span class="badge screen">${a(n)}</span>`}).join(""):""}const Fa={tw:"https://www.twse.com.tw/zh/indices/taiex/mi-5min-indices.html",otc:"https://www.tpex.org.tw/zh-tw/mainboard/trading/info/daily-indices.html",spx:"https://www.spglobal.com/spdji/en/indices/equity/sp-500/",nasdaq:"https://www.nasdaq.com/market-activity/index/comp",sox:"https://www.nasdaq.com/market-activity/index/sox",usdTwd:"https://www.cbc.gov.tw/tw/lp-645-1.html"};function Tr(e){var i,l,r,c,d;const t=[],n=(u,p,g)=>{if(!g)return;const h=g.incomplete,y=g.value!=null?U(g.value,2):h?a(s("dataIncomplete")):"—",b=g.dayPct!=null?`<div data-lq-field="dayPct" class="pct ${q(g.dayPct)}">${I(g.dayPct)}</div>`:"",k=g.session==="intraday"?` · ${v("intraday",s("intraday"))}`:"",x=Fa[u],P=x?`title="${a((g.name||u)+" · official ↗")}"`:"",E=`
        <div class="label">${p}${k}</div>
        <div class="value" data-lq-field="value">${y}</div>
        ${b}`;x?t.push(`
      <a class="index-chip ${h?"incomplete":""}" data-lq="index" data-lq-key="${a(u)}" href="${a(x)}"
         target="_blank" rel="noopener noreferrer" ${P}>${E}
      </a>`):t.push(`
      <div class="index-chip ${h?"incomplete":""}" data-lq="index" data-lq-key="${a(u)}">${E}
      </div>`)};if(n("tw",v("taiex",((i=e.tw)==null?void 0:i.name)||s("taiex")),e.tw),n("otc",v("otc",((l=e.otc)==null?void 0:l.name)||s("otc")),e.otc),n("spx",v("spx",((r=e.spx)==null?void 0:r.name)||s("spx")),e.spx),n("nasdaq",v("nasdaq",((c=e.nasdaq)==null?void 0:c.name)||s("nasdaq")),e.nasdaq),n("sox",v("sox",((d=e.sox)==null?void 0:d.name)||s("sox")),e.sox),e.usdTwd){const u=e.usdTwd,p=u.taipeiClose??u.yahoo,g=Fa.usdTwd,h=["USD/TWD",s("taipeiClose")+(u.taipeiClose!=null?` ${U(u.taipeiClose,3)}`:" —"),u.yahoo!=null?`Yahoo ${U(u.yahoo,3)}`:null,"CBC / 台北外匯 official ↗"].filter(Boolean).join(" · ");t.push(`
      <a class="index-chip" data-lq="index" data-lq-key="usdTwd"
         data-lq-taipei-close="${u.taipeiClose!=null?a(String(u.taipeiClose)):""}"
         href="${a(g)}" target="_blank" rel="noopener noreferrer"
         title="${a(h)}">
        <div class="label">${v("usdtwd",s("usdtwd"))}</div>
        <div class="value" data-lq-field="value">${U(p,3)}</div>
        <div class="pct flat" data-lq-field="dayPct" style="font-size:0.7rem">
          ${a(s("taipeiClose"))} ${u.taipeiClose!=null?U(u.taipeiClose,3):"—"}
          · Yahoo ${u.yahoo!=null?U(u.yahoo,3):"—"}
        </div>
      </a>
    `)}return t.length?`
    <div class="index-strip index-strip--marquee">
      <div class="index-marquee" tabindex="0">
        <div class="index-marquee-track">
          ${`<div class="index-marquee-group">${t.join("")}</div>`}
          <div class="index-marquee-group index-marquee-group--clone" aria-hidden="true">${t.join("")}</div>
        </div>
      </div>
    </div>`:'<div class="index-strip index-strip--marquee"></div>'}function wr(e,t){const n=e.market==="TW"?v("twStock",s("twStock")):e.market==="US"?v("usStock",s("usStock")):a(e.market||""),o=e.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${v("rs","RS")}</div><div class="m-val ${q(e.rsVsIndexPp)}">${I(e.rsVsIndexPp)}</div></div>`:e.priorClosePct!=null?`<div class="metric"><div class="m-label">${v("priorClose",s("priorCloseFull"))}</div><div class="m-val ${q(e.priorClosePct)}">${I(e.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${v("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card" data-lq="pick" data-lq-sym="${a(e.ticker)}">
      <div class="rank">TOP ${t}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${a(e.ticker)}</div>
          <div class="name">${a(e.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price" data-lq-field="price">${ra(e.price,e.currency)}</div>
          <div class="day-pct ${q(e.dayPct)}" data-lq-field="dayPct">${I(e.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${n}</span>
        ${da(e.screens)}
        ${ca(e)}
      </div>
      <div class="metrics">
        ${o}
        <div class="metric"><div class="m-label">${v("pct5d",s("pct5d"))}</div><div class="m-val ${q(e.pct5d)}">${I(e.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${v("pct1m",s("pct1m"))}</div><div class="m-val ${q(e.pct1m)}">${I(e.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${v("volRatio",s("volRatio"))}</div><div class="m-val">${e.volRatio!=null?U(e.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${e.business||e.why||e.risk?`<details class="fold-block card-fold"><summary>${a(s("details"))}</summary>
        ${e.business?`<p class="card-text"><strong>${a(s("business"))}</strong>　${a(e.business)}</p>`:""}
        ${e.why?`<p class="card-text"><strong>${a(s("reason"))}</strong>　${a(e.why)}</p>`:""}
        ${e.risk?`<p class="card-text risk"><strong>${a(s("risk"))}</strong>　${$s(e.risk)}</p>`:""}
      </details>`:""}
    </article>
  `}function $s(e){let t=a(e);return t=t.replace(/漲停/g,v("limitUp",s("limitUp"))),t=t.replace(/動能/g,v("momentum",s("momentum"))),t}function Wa(e){return e.map(t=>{const n=t.rsVsIndexPp??t.priorClosePct,o=t.rsVsIndexPp!=null?I(t.rsVsIndexPp):t.priorClosePct!=null?I(t.priorClosePct):"—";return`
      <tr data-lq="pick" data-lq-sym="${a(t.ticker)}">
        <td><span class="ticker">${a(t.ticker)}</span></td>
        <td class="name-cell">${a(t.name||"")}</td>
        <td class="num" data-lq-field="price">${ra(t.price,t.currency)}</td>
        <td class="num ${q(t.dayPct)}" data-lq-field="dayPct">${I(t.dayPct)}</td>
        <td class="num ${q(n)}">${o}</td>
        <td class="num ${q(t.pct5d)}">${I(t.pct5d)}</td>
        <td class="num ${q(t.pct1m)}">${I(t.pct1m)}</td>
        <td class="num">${t.volRatio!=null?U(t.volRatio,2)+"×":"—"}</td>
        <td>${ca(t)}</td>
        <td>${da(t.screens)}</td>
        <td class="why-cell">${a(t.why||"")}</td>
      </tr>`}).join("")}function _a(e){return e.map(t=>{const n=t.rsVsIndexPp!=null?`<span class="${q(t.rsVsIndexPp)}">${v("rs","RS")} ${I(t.rsVsIndexPp)}</span>`:t.priorClosePct!=null?`<span class="${q(t.priorClosePct)}">${v("priorClose",s("priorClose"))} ${I(t.priorClosePct)}</span>`:"";return`
      <div class="list-card" data-lq="pick" data-lq-sym="${a(t.ticker)}">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${a(t.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${a(t.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)" data-lq-field="price">${ra(t.price,t.currency)}</div>
            <div class="${q(t.dayPct)}" data-lq-field="dayPct" style="font-family:var(--mono);font-weight:600">${I(t.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${n}
          <span class="${q(t.pct5d)}">${v("pct5d","5d")} ${I(t.pct5d)}</span>
          <span class="${q(t.pct1m)}">${v("pct1m","1m")} ${I(t.pct1m)}</span>
          <span>${v("volRatio",s("volRatio"))} ${t.volRatio!=null?U(t.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${ca(t)}${da(t.screens)}</div>
        ${t.why?`<p class="lc-why">${a(t.why)}</p>`:""}
        ${t.risk&&t.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">${a(s("risk"))}：${$s(t.risk)}</p>`:""}
      </div>`}).join("")}function xr(){return`
    <tr>
      <th>${v("ticker",s("ticker"))}</th>
      <th>${a(s("name"))}</th>
      <th>${a(s("price"))}</th>
      <th>${v("dayPct",s("dayPct"))}</th>
      <th>${v("rs","RS")}／${v("priorClose",s("priorClose"))}</th>
      <th>${v("pct5d",s("pct5d"))}</th>
      <th>${v("pct1m",s("pct1m"))}</th>
      <th>${v("volRatio",s("volRatio"))}</th>
      <th>${a(s("ma"))}</th>
      <th>${v("screening",s("screening"))}</th>
      <th>${a(s("reason"))}</th>
    </tr>`}function Ua(e){return e?e.market==="TW"||e.market==="US"?e.market:String(e.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function Va(e,t){return e.length?`<div class="top5-grid">${e.map((n,o)=>wr(n,o+1)).join("")}</div>`:`<div class="empty-state">${a(s("emptyTop",{market:t}))}</div>`}function Ts(){return[{id:"today",label:s("navToday"),hash:"today"},{id:"logic",label:s("navLogic"),hash:"logic"},{id:"research",label:s("navResearch"),hash:"research"},{id:"strategies",label:s("navStrategies"),hash:"strategies"},{id:"options",label:s("navOptions"),hash:"options"},{id:"earnings",label:s("navEarnings"),hash:"earnings"},{id:"lookup",label:s("navLookup"),hash:"lookup"},{id:"soxl",label:s("navSoxl"),hash:"soxl"},{id:"txf",label:s("navTxf"),hash:"txf"},{id:"podcasts",label:s("navPodcasts"),hash:"podcasts"},{id:"paper",label:s("navPaper"),hash:"paper"}]}const Pr=["today","strategies","paper","research"],ws=["logic","options","earnings","lookup","soxl","txf","podcasts"],Ut={today:"today",logic:"logic",research:"research",strategies:"strategies",options:"options",earnings:"earnings",lookup:"lookup",quote:"lookup",soxl:"soxl",txf:"txf","futures-tw":"txf",台指期:"txf",臺指期:"txf","tx-futures":"txf",podcasts:"podcasts",podcast:"podcasts",名人podcast:"podcasts","celebrity-podcasts":"podcasts",godzilla:"podcasts",jensen:"podcasts",xiaojun:"podcasts",whynottv:"podcasts","zhang-junan":"podcasts",zhangjunan:"podcasts",張濬安:"podcasts",whynot:"podcasts",huang:"podcasts","jensen-huang":"podcasts",黃仁勳:"podcasts",nvidia:"podcasts",paper:"paper",social:"today",danmaku:"today","social-digest":"today",giscus:"today",help:"logic",glossary:"logic",bookshelf:"research",library:"research",研究:"research","us-options":"options",選擇權:"options",美股選擇權:"options",mcmillan:"options",讀財報:"earnings",reports:"earnings","us-earnings":"earnings",財報:"earnings",查股:"lookup",個股:"lookup","stock-lookup":"lookup","us-quote":"lookup","tw-quote":"lookup","soxl-desk":"soxl",semiconductor:"soxl",半導體:"soxl",三倍半導體:"soxl",台指期貨:"txf",臺股期貨:"txf",哥吉拉:"podcasts",哥吉拉心法:"podcasts","godzilla-playbook":"podcasts",playbook:"podcasts",黃仁勳:"podcasts","jen-hsun":"podcasts",etl:"podcasts",method:"logic",邏輯:"logic"},Vt={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',logic:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 2h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v5h-2v-5z"/></svg>',research:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8V12zm0 3.5h8V17H8v-1.5zm0 3.5h5V20.5H8V19z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',options:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 12a8 8 0 1 1 16 0H4zm8-6a6 6 0 0 0-5.65 4h11.3A6 6 0 0 0 12 6zm0 12a6 6 0 0 0 5.65-4H6.35A6 6 0 0 0 12 18z"/></svg>',earnings:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h6v-2H7z"/></svg>',lookup:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10 3a7 7 0 0 1 5.47 11.34l4.1 4.09-1.42 1.42-4.09-4.1A7 7 0 1 1 10 3zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>',soxl:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 17.25 9.5 9l3.5 4.5L17 8l4 9.25H3zM5 19h14v2H5v-2z"/></svg>',txf:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 18h16v2H4v-2zm1.5-3.5 3.2-4.2 2.8 3.3L16 8l4 6.5H5.5zM7 4h2v2H7V4zm4 0h2v2h-2V4zm4 0h2v2h-2V4z"/></svg>',podcasts:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 0 0-9 9v7a2 2 0 0 0 2 2h3v-8H7v-1a5 5 0 0 1 10 0v1h-1v8h3a2 2 0 0 0 2-2v-7a9 9 0 0 0-9-9zm-4 11v5H5v-5h3zm11 5h-3v-5h3v5zM12 7a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',more:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 10h4v4H5v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4z"/></svg>'},Ye={godzilla:"godzilla","godzilla-playbook":"godzilla",playbook:"godzilla",哥吉拉:"godzilla",哥吉拉心法:"godzilla",jensen:"jensen",huang:"jensen","jensen-huang":"jensen",nvidia:"jensen","jen-hsun":"jensen",etl:"jensen",黃仁勳:"jensen",黄仁勋:"jensen",gooaye:"gooaye",股癌:"gooaye",xiaojun:"xiaojun",張小珺:"xiaojun",张小珺:"xiaojun",whynottv:"whynottv",whynot:"whynottv",WhynotTV:"whynottv","zhang-junan":"zhang-junan",zhangjunan:"zhang-junan",張濬安:"zhang-junan",张浚安:"zhang-junan"};function $t(){const n=(location.hash||"").replace(/^#/,"").split(/[/?&]/).filter(Boolean).map(d=>{try{return decodeURIComponent(d)}catch{return d}}),o=n[0]||"",i=o.toLowerCase();if(Ye[i]||Ye[o])return{view:"podcasts",sub:Ye[i]||Ye[o],parts:n.slice(1)};const l=Ut[i]||Ut[o]||"today",r=n.slice(1);let c=r[0]||null;if(l==="podcasts"&&c&&(c=ia(c)),l==="research"&&c){if(c.toLowerCase()==="shelf"&&r[1])return{view:l,sub:"menu",shelf:r[1],parts:r};c=Kt(c)}return{view:l,sub:c,parts:r,shelf:null}}function Cr(){return $t().view}function xs(e,t){const n=Vt[e.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${e.id}"
        data-variant="${t}"
        aria-label="${a(e.label)}"
        aria-current="false">
        <span class="nav-icon">${n}</span>
        <span class="nav-label">${a(e.label)}</span>
      </button>`}function Lr(e){return Ts().map(t=>xs(t,e)).join("")}function Ar(){const e=Object.fromEntries(Ts().map(i=>[i.id,i])),t=Pr.map(i=>xs(e[i],"mobile")).join(""),n=`
      <button type="button"
        class="nav-item nav-more-btn"
        data-nav-more
        data-variant="mobile"
        aria-label="${a(s("navMore"))}"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="nav-more-sheet"
        aria-current="false">
        <span class="nav-icon">${Vt.more}</span>
        <span class="nav-label">${a(s("navMore"))}</span>
      </button>`,o=ws.map(i=>{const l=e[i],r=Vt[i]||"";return`
        <button type="button"
          class="nav-more-item"
          data-nav="${l.id}"
          aria-label="${a(l.label)}"
          aria-current="false">
          <span class="nav-icon">${r}</span>
          <span class="nav-label">${a(l.label)}</span>
        </button>`}).join("");return`
    <nav class="nav-bottom" aria-label="${a(s("navMain"))}">
      ${t}
      ${n}
    </nav>
    <div id="nav-more-sheet" class="nav-more-sheet" hidden>
      <button type="button" class="nav-more-backdrop" data-more-close aria-label="${a(s("navMoreClose"))}"></button>
      <div class="nav-more-panel" role="dialog" aria-modal="true" aria-label="${a(s("navMore"))}">
        <div class="nav-more-grabber" aria-hidden="true"></div>
        <div class="nav-more-head">
          <h2 class="nav-more-title">${a(s("navMore"))}</h2>
          <button type="button" class="nav-more-close" data-more-close aria-label="${a(s("navMoreClose"))}">×</button>
        </div>
        <div class="nav-more-list">
          ${o}
        </div>
      </div>
    </div>`}function Er(e,t){const n=e.top5||[],o=e.us||[],i=e.tw||[],l=a(s("disclaimer")),r=xr();return`
    <header class="site-chrome">
      <div class="chrome-row">
        <div class="chrome-brand">
          <img class="brand-mark" src="/Just-Math-and-Luck/logo.png?v=3" width="40" height="40" alt="每日數學選股" decoding="async" />
          <div class="brand-text">
            <h1>${a(s("siteTitle"))}</h1>
            <p class="brand-meta"><span id="brand-asof">${a(s("dataAsOf"))} ${$r(e.asOf)}</span><span id="lq-live-suffix" class="lq-live-suffix" hidden aria-live="polite"></span></p>
          </div>
        </div>
        <div class="chrome-actions">
          ${Is()}
          <nav class="nav-desktop" aria-label="${a(s("navMain"))}">
            ${Lr("desktop")}
          </nav>
        </div>
      </div>
      <p class="disclaimer-line" role="note">${l}</p>
      <div class="market-strip-wrap" aria-label="${a(s("marketQuotes"))}">
        <span class="market-strip-label">${a(s("hot"))}</span>
        ${Tr(e.indices||{})}
      </div>
      ${qi()}
      ${el()}
    </header>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">${a(s("todayPicks"))}</h2>
        </header>
        ${en(e.marketRegime)}
        <div class="tabs market-tabs" role="tablist" aria-label="${a(s("market"))}">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${v("usStock",s("usStock"))}（${o.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${v("twStock",s("twStock"))}（${i.length}）</button>
        </div>
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${a(s("usTop"))}</h2>
            ${Va(n.filter(d=>Ua(d)==="US"),s("usStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${a(s("usList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${r}</thead>
                <tbody>${Wa(o)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${_a(o)}</div>
          </section>
        </div>
        <div class="panel" id="panel-tw" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${a(s("twTop"))}</h2>
            ${Va(n.filter(d=>Ua(d)==="TW"),s("twStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${a(s("twList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${r}</thead>
                <tbody>${Wa(i)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${_a(i)}</div>
          </section>
        </div>
      </div>
      <div class="view" id="view-logic" data-view="logic" hidden>
        <span id="logic" class="view-anchor" tabindex="-1"></span>
        ${an(e)}
      </div>

      <div class="view" id="view-research" data-view="research" hidden>
        <span id="research" class="view-anchor" tabindex="-1"></span>
        ${zn()}
      </div>

      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span id="strategies" class="view-anchor" tabindex="-1"></span>
        ${gn()}
      </div>

      <div class="view" id="view-options" data-view="options" hidden>
        <span id="options" class="view-anchor" tabindex="-1"></span>
        ${to()}
      </div>

      <div class="view" id="view-earnings" data-view="earnings" hidden>
        <span id="earnings" class="view-anchor" tabindex="-1"></span>
        ${ro()}
      </div>

      <div class="view" id="view-lookup" data-view="lookup" hidden>
        <span id="lookup" class="view-anchor" tabindex="-1"></span>
        <span id="quote" class="view-anchor" tabindex="-1"></span>
        ${No()}
      </div>

      <div class="view" id="view-soxl" data-view="soxl" hidden>
        <span id="soxl" class="view-anchor" tabindex="-1"></span>
        ${Ho()}
      </div>

      <div class="view" id="view-txf" data-view="txf" hidden>
        <span id="txf" class="view-anchor" tabindex="-1"></span>
        <span id="futures-tw" class="view-anchor" tabindex="-1"></span>
        ${Qo()}
      </div>

      <div class="view" id="view-podcasts" data-view="podcasts" hidden>
        <span id="podcasts" class="view-anchor" tabindex="-1"></span>
        <span id="godzilla" class="view-anchor" tabindex="-1"></span>
        <span id="jensen" class="view-anchor" tabindex="-1"></span>
        <span id="xiaojun" class="view-anchor" tabindex="-1"></span>
        <span id="whynottv" class="view-anchor" tabindex="-1"></span>
        <span id="zhang-junan" class="view-anchor" tabindex="-1"></span>
        ${vr()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span id="paper" class="view-anchor" tabindex="-1"></span>
        ${Js(t)}
      </div>
    </main>

    ${Ar()}

    <p class="site-footer">${a(s("footer"))}</p>
  `}let Pe=null;function jr(){try{return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function ot(e,t){const n=e.querySelector("#nav-more-sheet"),o=e.querySelector("[data-nav-more]");if(!n||!o)return;if(Pe&&(clearTimeout(Pe),Pe=null),t){n.hidden=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.hidden||n.classList.add("is-open")})}),o.setAttribute("aria-expanded","true"),document.body.classList.add("nav-more-open");return}const i=n.classList.contains("is-open")||!n.hidden;if(n.classList.remove("is-open"),o.setAttribute("aria-expanded","false"),document.body.classList.remove("nav-more-open"),!i||jr()){n.hidden=!0;return}Pe=setTimeout(()=>{n.hidden=!0,Pe=null},340)}function zr(e,t){const n=ws.includes(t);e.querySelectorAll(".nav-item[data-nav]").forEach(i=>{const l=i.dataset.nav===t;i.classList.toggle("is-active",l),i.setAttribute("aria-current",l?"page":"false")});const o=e.querySelector("[data-nav-more]");o&&(o.classList.toggle("is-active",n),o.setAttribute("aria-current",n?"true":"false")),e.querySelectorAll(".nav-more-item").forEach(i=>{const l=i.dataset.nav===t;i.classList.toggle("is-active",l),i.setAttribute("aria-current",l?"page":"false")})}function Ps(e,t,{updateHash:n=!0,scrollTop:o=!0}={}){const i=Ut[t]||"today";if(e.querySelectorAll(".view").forEach(l=>{const r=l.dataset.view===i;l.hidden=!r,l.classList.toggle("is-active",r)}),zr(e,i),ot(e,!1),n){const l=`#${i}`;location.hash!==l&&history.replaceState(null,"",l)}return o&&window.scrollTo(0,0),i}let Xe=null,Ke=null;function Mr(e){const t=(l,r)=>Ps(e,l,r);e.querySelectorAll(".nav-item[data-nav], .nav-more-item[data-nav]").forEach(l=>{l.addEventListener("click",()=>t(l.dataset.nav))}),e.querySelectorAll("[data-jump]").forEach(l=>{l.addEventListener("click",()=>t(l.dataset.jump))});const n=e.querySelector("[data-nav-more]");n&&n.addEventListener("click",()=>{const l=n.getAttribute("aria-expanded")==="true";ot(e,!l)}),e.querySelectorAll("[data-more-close]").forEach(l=>{l.addEventListener("click",()=>ot(e,!1))}),Ke&&window.removeEventListener("keydown",Ke),Ke=l=>{l.key==="Escape"&&ot(e,!1)},window.addEventListener("keydown",Ke),Xe&&window.removeEventListener("hashchange",Xe),Xe=()=>{const l=$t();t(l.view,{updateHash:!1}),Rr(l)},window.addEventListener("hashchange",Xe);const o=$t(),i=!!(o.sub||o.shelf);return t(o.view,{updateHash:!i,scrollTop:!1}),{go:t}}function Rr(e){e&&(e.view==="podcasts"&&Sr(e.sub||"menu",{syncUrl:!1}),e.view==="research"&&On(e.sub||"menu",{syncUrl:!1,shelf:e.shelf||null}))}function Nr(e){const t=e.querySelector(".index-marquee");if(!t||t.dataset.marqueeBound==="1")return;t.dataset.marqueeBound="1";const n=()=>t.classList.add("is-paused"),o=()=>t.classList.remove("is-paused");t.addEventListener("pointerdown",n),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.addEventListener("pointerleave",o),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),t.addEventListener("touchcancel",o,{passive:!0})}function Br(e){const t=e.querySelectorAll(".tab-btn");t.forEach(n=>{n.addEventListener("click",()=>{const o=n.dataset.tab;t.forEach(i=>{const l=i.dataset.tab===o;i.classList.toggle("active",l),i.setAttribute("aria-selected",l?"true":"false")}),e.querySelectorAll(".panel").forEach(i=>{i.classList.toggle("active",i.id===`panel-${o}`)})})})}let ua=null,Cs=null;async function Ls(e){const t=ua,n=Cs,o=Cr();e.innerHTML=Er(t,n),document.title=s("siteTitle"),Ka(),Mr(e),Ps(e,o,{updateHash:!0,scrollTop:!1}),Br(e),Nr(e),await Wi("#us-macro-strip"),await al("#tw-macro-strip"),Ys(e),Hs(e),await yn("#xq-root");const i=$t();await In("#rl-root",void 0,{category:i.view==="research"&&i.sub||"menu",shelf:i.view==="research"?i.shelf:null,syncUrl:!1}),await ao("#uo-root"),await co("#er-root"),Bo("#lk-root"),await qo("#sx-root"),await Zo("#txf-root"),br("#pc-root",{category:i.view==="podcasts"&&i.sub||"menu",syncUrl:!1}),Ei(e)}async function Dr(){const e=document.getElementById("app");!e||!ua||(ks(),await Ls(e))}async function Gt(){const e=document.getElementById("app");Ka();const t=document.getElementById("loading");t&&(t.textContent=s("loading"));try{const n=await fetch(kr);if(!n.ok)throw new Error(`HTTP ${n.status}`);ua=await n.json(),Cs=await Xs(),await Ls(e),Gt._langHooked||(Gt._langHooked=!0,zs(()=>{Dr()}))}catch(n){e.innerHTML=`<div class="error">${a(s("loadError",{msg:n.message}))}</div>`}}function Or(){if(!("serviceWorker"in navigator))return;const e="/Just-Math-and-Luck/",t=`${e}sw.js`,n="jml-sw-controller-reload";navigator.serviceWorker.addEventListener("controllerchange",()=>{try{if(sessionStorage.getItem(n)==="1"){sessionStorage.removeItem(n);return}sessionStorage.setItem(n,"1")}catch{}window.location.reload()}),window.addEventListener("load",()=>{navigator.serviceWorker.register(t,{scope:e}).catch(()=>{})})}const Ga="jml-pwa-hint-dismissed";function Ir(){try{if(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)return!0}catch{}return!1}function Hr(){return/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")}function qr(){var i;if(Ir()||!Hr())return;try{if(localStorage.getItem(Ga)==="1")return}catch{return}if(document.getElementById("pwa-install-hint"))return;const e=document.createElement("div");e.id="pwa-install-hint",e.className="pwa-install-hint",e.setAttribute("role","status");const n=/iPhone|iPad|iPod/i.test(navigator.userAgent||"")?"可「分享 → 加入主畫面」離線開啟":"可加入主畫面，離線也能開";e.innerHTML=`<span class="pwa-install-hint__text">${n}</span><button type="button" class="pwa-install-hint__close" aria-label="關閉">×</button>`,document.body.appendChild(e);const o=()=>{e.remove();try{localStorage.setItem(Ga,"1")}catch{}};(i=e.querySelector(".pwa-install-hint__close"))==null||i.addEventListener("click",o),window.setTimeout(()=>{e.isConnected&&e.classList.add("pwa-install-hint--fade")},8e3),window.setTimeout(()=>{e.isConnected&&o()},12e3)}Or();Gt();window.setTimeout(()=>{try{qr()}catch{}},2500);
