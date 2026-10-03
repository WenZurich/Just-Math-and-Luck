(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const js=[{id:"zh-Hant",label:"繁體中文",short:"繁"},{id:"en",label:"English",short:"EN"},{id:"zh-Hans",label:"简体中文",short:"简"},{id:"ja",label:"日本語",short:"日"}],Ns=js.map(e=>e.id),Rs="site-lang",na="zh-Hant",oa=new Set;function jn(){try{const t=localStorage.getItem(Rs);if(t&&Ns.includes(t))return t}catch{}const e=typeof navigator<"u"&&navigator.language||"";return/^zh[-_]?(CN|Hans|SG)/i.test(e)?"zh-Hans":/^zh/i.test(e)?"zh-Hant":/^ja/i.test(e)?"ja":/^en/i.test(e)?"en":na}let K=jn();function je(){return K}function Nn(e){if(!Ns.includes(e)||e===K)return!1;K=e;try{localStorage.setItem(Rs,e)}catch{}return typeof document<"u"&&(document.documentElement.lang=e==="zh-Hant"?"zh-Hant":e==="zh-Hans"?"zh-Hans":e),oa.forEach(t=>{try{t(e)}catch{}}),!0}function Rn(e){return oa.add(e),()=>oa.delete(e)}function E(){return K==="en"?"en-US":K==="ja"?"ja-JP":K==="zh-Hans"?"zh-CN":"zh-TW"}function Bs(){typeof document>"u"||(document.documentElement.lang=K==="zh-Hant"?"zh-Hant":K==="zh-Hans"?"zh-Hans":K)}const _t={siteTitle:"每日數學選股",loading:"載入中…",disclaimer:"投資涉及風險，資訊僅供參考，非投資建議",footer:"投資涉及風險，資訊僅供參考，非投資建議",dataAsOf:"資料",taipei:"（台北）",navMain:"主要導覽",navToday:"今日",navStrategies:"策略",navPaper:"模擬",navMore:"更多",navMoreClose:"關閉",navLogic:"邏輯",researchTitle:"研究",navResearch:"研究",navOptions:"選擇權",navEarnings:"讀財報",earningsTitle:"讀財報",earningsLead:"美股 Magnificent 7 與高關注財報摘要：公司在做什麼、關鍵數字、下一步看什麼——白話、每日更新，非投資建議。",earningsDisclaimer:"非投資建議。數字來自公開 Yahoo Finance；缺欄略過不顯示，不構成個人化投資建議。",earningsUsFocus:"以美股為主",earningsTwStub:"台股財報稍後開放（規劃中）",earningsSelectionTitle:"關注名單規則：",earningsSelectionFallback:"市值最大且未來 14 日內有財報的非 Mag7 大型股；或 Yahoo 熱門成交；不足則以 45 日內行事曆亮點補齊。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——上次財報與下次日期（已知時）。",earningsMag7Badge:"Mag7",earningsHotTitle:"高關注／熱門財報",earningsHotLead:"依上方規則挑選；標籤說明為何入選。",earningsHotEmpty:"目前視窗內暫無符合條件的標的",earningsWhatItDoes:"這家公司在做什麼",earningsWhatToWatch:"下一步看什麼",earningsNextDate:"下次財報",earningsLastEps:"上次 EPS",earningsRevYoy:"營收 YoY",earningsEpsYoy:"獲利 YoY",earningsPe:"本益比",earningsForwardPe:"預估本益",earningsEstimate:"預估",earningsDataMissing:"資料不足",earningsTagPrimary:"14 日內・大型",earningsTagActives:"熱門成交・14 日內",earningsTagRecent:"近日已公布",earningsTagFallback:"45 日行事曆亮點",earningsTagOther:"關注",earningsPartialBlocker:"部分資料受阻",earningsRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",earningsLoadError:"無法載入財報摘要（{msg}）",earningsEmpty:"財報摘要整理中，請稍後再看。",navLookup:"查股",lookupTitle:"查股／個股",lookupLead:"輸入美股或台股代碼，查看公司簡介、即時報價、財報重點與官方財報連結——白話整理；行情來自 Yahoo，官方申報連至 SEC／公開資訊觀測站。非投資建議。",lookupDisclaimer:"非投資建議。行情數字來自公開 Yahoo Finance；官方財報連結連至 SEC EDGAR／公開資訊觀測站。缺欄不顯示、不編造。即時抓取可能受網路或來源限制。",lookupInputLabel:"股票代碼",lookupPlaceholderUs:"例如 AAPL",lookupPlaceholderTw:"例如 2330 或 2330.TW",lookupHintUs:"美股：輸入代號如 AAPL、MSFT、NVDA",lookupHintTw:"台股：四碼代號如 2330（自動加 .TW；上櫃可試 .TWO）",lookupSearch:"查詢",lookupIdle:"輸入代碼後按查詢，即可查看報價與財報摘要。",lookupLoading:"正在向 Yahoo Finance 抓取…",lookupEmptyInput:"請輸入股票代碼",lookupInvalid:"代碼格式無法辨識。美股如 AAPL；台股如 2330 或 2330.TW",lookupNotFound:"找不到此代碼的報價。請確認市場分頁（美股／台股）與代碼是否正確。",lookupError:"查詢失敗（{msg}）",lookupBusiness:"公司在做什麼",lookupQuoteStats:"報價與關鍵數據",lookupFinancials:"財務摘要",lookupEarnings:"財報重點",lookupPrevClose:"前收",lookupVolume:"成交量",lookupDayRange:"今日區間",lookup52w:"52 週高低",lookupMarketCap:"市值",lookupEps:"每股盈餘",lookupBeta:"Beta",lookupDivYield:"殖利率",lookupRevenue:"營收",lookupGrossMargin:"毛利率",lookupProfitMargin:"淨利率",lookupEpsConsensus:"預估 EPS",lookupEpsSurprise:"EPS 驚喜",lookupSources:"來源",lookupPartial:"部分進階欄位暫無法取得（已顯示可得數字，未編造）。",lookupOfficialFilings:"官方財報",lookupOfficialFilingsLead:"以下連結通往官方申報與公開資訊；美股可另列近期 10-K／10-Q／8-K（公開可抓取時）。數字不編造。",lookupSourceOfficial:"官方來源",lookupSourceQuote:"行情來源",lookupSourceCompany:"公司網站",lookupSecEdgarSearch:"SEC EDGAR 公司申報查詢",lookupSecEdgarBrowse:"SEC EDGAR 公司瀏覽頁",lookupSecFormsFilter:"SEC 10-K／10-Q 等年季報篩選",lookupMopsFinancialBook:"公開資訊觀測站｜財務報告書",lookupMopsFinancialQuery:"公開資訊觀測站｜財務報告查詢頁",lookupMopsCompany:"公開資訊觀測站｜公司基本資料",lookupMopsMaterial:"公開資訊觀測站｜重大訊息",lookupTwseIsin:"證交所 ISIN／基本資料查詢",lookupTpexCompany:"櫃買中心｜公司資料",lookupYahooTwQuote:"Yahoo 奇摩股市（行情，非正式財報）",lookupCompanyWebsite:"公司官網",lookupInvestorRelations:"投資人關係／IR（公開資料）",lookupRecentFilings:"近期官方申報",lookupFilingForm:"表單",lookupFilingDate:"申報日",lookupFilingDoc:"文件",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"近期申報清單暫時無法載入（網路或來源限制）。",lookupFilingsListEmpty:"目前沒有可列示的近期 10-K／10-Q／8-K。",lookupFilingsLinksStillWork:"上方官方連結仍可開啟查閱。",lookupFilingsTwNote:"台股請以公開資訊觀測站（MOPS）為官方財報來源；下方亦附行情頁供對照。",lookupFilingsCikUnavailable:"尚無法對應 SEC CIK；仍可透過上方 EDGAR 以代號查詢。",navSoxl:"SOXL",soxlTitle:"SOXL 半導體槓桿",soxlLead:"Direxion 每日半導體多頭 3 倍 ETF：最新報價、異常／事件、相關新聞，以及 SEC N-PORT 持股權重與估算貢獻——白話整理，非投資建議。",soxlDisclaimer:"非投資建議。SOXL 為約 3 倍日槓桿 ETF，波動與虧損風險極高；持股權重來自 SEC N-PORT（非當日），貢獻度為估算。",soxlHeroLabel:"SOXL 最新報價",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正規收盤",soxlLeverageNote:"SOXL 目標約為 ICE Semiconductor Index 單日表現的 3 倍；隔夜與多日累積不可用簡單 3 倍推估。",soxlHoldingsAsOf:"持股權重截至",soxlHoldingsNotSameDay:"最新 N-PORT，非今日即時",soxlEventsTitle:"事件／異常",soxlNewsTitle:"相關新聞",soxlNewsEmpty:"暫無相關新聞",soxlHoldingsTitle:"持股與估算貢獻",soxlHoldingsLead:"權重來自 SEC N-PORT；現金與指數交換常佔大宗。貢獻 ≈ 權重 × 報酬（標示為估算，且未直接等於 3x ETF 點數）。",soxlHoldingsEmpty:"持股清單整理中，請稍後再看。",soxlColName:"標的",soxlColWeight:"權重",soxlColReturn:"日報酬",soxlColContrib:"估算貢獻",soxlColReasons:"白話原因",soxlContributionHint:"估算＝權重% × 報酬% ÷ 100（籃子百分點；SOXL 約 3× 日槓桿，不等於 ETF 點數）",soxlSourceN:"來源 {n}",soxlOverallTitle:"為何漲／為何跌",soxlWhyUp:"偏多時常見原因",soxlWhyDown:"偏空時常見原因",soxlRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",soxlLoadError:"無法載入 SOXL 桌面（{msg}）",navTxf:"台指期",txfTitle:"台指期",txfLead:"臺灣加權現貨對臺股期貨：近月／次月報價、基差、成交與未平倉、三大法人部位、保證金與到期日——全部來自期交所／證交所公開資料，白話整理，非投資建議。",txfDisclaimer:"投資涉及風險，資訊僅供參考，非投資建議。美股與台指期分欄；數字缺欄不捏造。",txfHeroLabel:"臺股期貨近月報價",txfNearBadge:"近月",txfNextBadge:"次月",txfSettle:"結算價",txfVolume:"成交量",txfOI:"未平倉",txfSessionDate:"行情日",txfSpotLabel:"加權現貨",txfBasisLabel:"基差",txfBasisHint:"基差＝近月期貨 − 現貨；正值表示期貨相對現貨溢價。",txfMultiplierShort:"大台乘數 NT${n}／點（紙上損益＝點數差×乘數×口數）",txfContractsTitle:"契約：大台／小台／微台",txfContractsLead:"一般交易時段行情。月契約最後交易日依官方「第三個星期三」規則推算，假日調整請對照期交所公告。",txfMultLabel:"契約乘數",txfPerPoint:"／點",txfMarginInitial:"原始保證金",txfMarginMaint:"維持保證金",txfColMonth:"月份",txfColLast:"最新",txfColSettle:"結算",txfColChange:"漲跌",txfColVolume:"成交量",txfColOI:"未平倉",txfColLTD:"最後交易日",txfInstTitle:"三大法人期貨部位",txfInstLead:"未平倉多空與當日淨買賣（期交所，截至 {date}）",txfInstFoot:"三大法人為彙總結果，不代表單一機構策略。",txfColParty:"身份",txfColLongOI:"多方未平倉",txfColShortOI:"空方未平倉",txfColNetOI:"淨未平倉",txfColNetVol:"淨買賣口數",txfCalendarTitle:"結算／選擇權彙總",txfNextLTD:"近月最後交易日",txfNearMonth:"近月",txfNextMonth:"次月",txfLTDRule:"月契約最後交易日＝交割月份第三個星期三。",txfRecentSettle:"近期最後結算價",txfPcrTitle:"臺指選擇權 P/C",txfPcrVol:"成交量比",txfPcrOI:"未平倉比",txfExplainTitle:"白話說明",txfExplain1:"台指期（TX）是以臺灣加權股價指數為標的的指數期貨，採現金交割；小台（MTX）與微台（TMF）規格較小，方便調整部位。",txfExplain2:"基差＝期貨價 − 現貨指數。升水（正基差）表示期貨貴於現貨；貼水則相反。基差會隨到期日逼近而收斂。",txfExplain3:"未平倉（OI）是尚未平倉的契約口數，反映市場留倉規模，不是當日漲跌原因本身。",txfExplain4:"紙上損益可用：點數差 × 契約乘數 × 口數（大台每點 NT$200、小台 NT$50、微台 NT$10）。保證金以期交所公告為準。",txfSourcesTitle:"資料來源",txfLoadError:"無法載入台指期桌面（{msg}）",navPodcasts:"名人podcast",navLetters:"股東信",navManbao:"曼報 Pro",lettersTitle:"巴菲特的股東信",lettersLead:"選定年份後，在這一頁打開波克夏官方原文。旁邊是讀過後整理的投資要點，不是全文，也不是買賣建議。官方頁不允許嵌入。",lettersDisclaimer:"要點是我們的話，不是引用信的原文。1965–1976 年沒有單獨公開頁，官方索引只從 1977 年起。2025 年是 Greg Abel 的第一封信。",lettersMenuLead:"先選時期，再選年份。原文在波克夏官方網站閱讀，這裡只留要點。",lettersReadBadge:"已讀要點",lettersLinkBadge:"僅連結",lettersOpen:"官方原文",lettersReaderOpen:"閱讀官方原文",lettersReaderOpenPdf:"閱讀官方 PDF",lettersReaderNote:"波克夏不允許把信嵌進其他網站，所以這裡不放全文。按下面的按鈕，在官方頁面閱讀。",lettersReaderRegion:"官方原文",lettersOfficialHost:"原文在 berkshirehathaway.com，離開本站後由波克夏提供。",lettersYearRail:"年份",lettersMissing:"找不到這一年的官方連結。",lettersLinkOnlyNote:"這封沒有另外整理要點，請直接讀官方頁。",lettersAuthor:"作者",lettersBack:"回目錄",manbaoTitle:"曼報 Pro",manbaoLead:"付費內文不轉載。公開長文只放讀過後的短摘要；會員限定只列公開索引上的標題與連結。",manbaoDisclaimer:"不是投資建議，也不是曼報的授權轉載。Pro 正文留在官方網站。",manbaoMenuLead:"先選分類。公開長文有摘要；Pro 只有標題與官方連結。",manbaoPublicBadge:"公開摘要",manbaoPaywallBadge:"僅連結",manbaoOpen:"官方頁面",manbaoBack:"回目錄",manbaoCatPublic:"公開長文",manbaoCatDecode:"商業解碼",manbaoCatTech:"科技曼讀",manbaoCatGiants:"巨人之聲",manbaoCatClub:"曼報俱樂部",manbaoCatAbout:"入口",lettersCatEarly:"1977–1989",lettersCat90:"1990–1999",lettersCat00:"2000–2009",lettersCat10:"2010–2019",lettersCat20:"2020–2025",lettersCatSpecial:"特別信",podcastsTitle:"名人podcast",podcastsLead:"精選投資人／主持人公開訪談與 Podcast 框架整理：可掃讀論點、市場分欄、候選狀態標示清楚——非投資建議。",podcastsDisclaimer:"非投資建議。本區整理公開訪談與研究書庫已有資料；數字與做法標示來源，不構成個人化建議。數學閘門未通過者僅候選／觀察。",podcastsFeatured:"精選",podcastsStubBadge:"候選摘要",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（謝孟恭）",podcastsGooayeLead:"台灣市場／總經／風險／散戶心理 Podcast；集數重點整理自公開 RSS 節目指引（非逐字稿、非投資建議）。",podcastsGooayeMarket:"以台股為主 · 美／台分欄",podcastsGooayeStubNote:"輕量 stub：完整條目與可計算規則在研究書庫；此處不發明集數引言。",podcastsGooayePoint1:"先管風險與部位，再談單一標的故事",podcastsGooayePoint2:"護國神山供應鏈用籃子強弱看，不單壓一檔",podcastsGooayePoint3:"美股用利率方向當風險偏好代理；台股另算",podcastsGotoResearch:"到研究書庫看完整條目",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"分類選單",podcastsCategories:"名人podcast分類",podcastsMenuLead:"先選分類再進入內容——不把長文全部攤在同一頁。",podcastsOpenCategory:"開啟此分類",gooayeLibraryBadge:"集數庫",gooayeDisclaimer:"候選／觀察；數學閘關閉。標「已聽寫」者：下載公開音檔＋語音轉文字後撰寫股票重點分析。標「僅節目說明」者：僅 RSS／節目說明，未聽寫。主持人觀點、候選狀態；非投資建議。",gooayeLoading:"載入股癌集數庫…",gooayeLoadError:"無法載入集數庫（{msg}）",gooayeEpisodeCount:"共 {n} 集（公開 RSS）",gooayeAsOf:"資料截至 {date}（台北）",gooayeEmptyCount:"其中 {n} 集公開文字不足，僅列標題",gooayeSearchLabel:"搜尋集數",gooayeSearchPlaceholder:"標題、集數或關鍵字",gooayeSourceLine:"來源：",gooayeKeyPoints:"重點整理",gooayeNotesThin:"公開節目指引幾乎只有標題／短語，無更多可整理文字。",gooayeTeaserNote:"公開 show notes 偏短（常見為開場短語＋廣告）；以上僅整理可用的公開文字，未聽音檔、未發明內容。",gooayeListen:"收聽（SoundOn）",gooayeLoadMore:"再顯示 {n} 集（尚餘 {left}）",gooayeShowingAll:"已顯示全部 {n} 集",gooayeNoResults:"沒有符合的集數。",gooayeUntitled:"未命名集數",gooayeBadgeListened:"已聽寫",gooayeBadgeRssOnly:"僅節目說明",gooayeStockAnalysis:"股票重點分析（已聽寫）",gooayeRssTeaserToggle:"公開節目說明（RSS）",gooayeListenedAt:"聽寫於 {date}（台北）",gooayeListenedCount:"已聽寫 {n} 集",gooayeRssOnlyNote:"此集尚未聽音檔；以上僅整理公開 RSS／節目說明，非聽寫分析。",podcastsXiaojunTitle:"張小珺jùn｜商業訪談錄",podcastsXiaojunHandle:"張小珺 · 商業／科技長訪談",podcastsXiaojunLead:"以中國科技與商業人物為主的長篇訪談；集數庫來自公開 RSS 節目說明。標「已聽寫」者另附股票／產業重點（候選／觀察，非投資建議）。",podcastsXiaojunMarket:"以中國科技產業為主 · 跨市場觀察",podcastsXiaojunApple:"在 Apple Podcasts 收聽",xiaojunLibraryBadge:"集數庫",xiaojunDisclaimer:"候選／觀察；數學閘關閉。標「已聽寫」者：下載公開音檔＋語音轉文字後撰寫股票／產業重點。標「僅節目說明」者：僅 RSS／節目說明，未聽寫。主持人觀點；非投資建議。",xiaojunLoading:"載入張小珺集數庫…",xiaojunLoadError:"無法載入集數庫（{msg}）",xiaojunEpisodeCount:"共 {n} 集（公開 RSS）",xiaojunAsOf:"資料截至 {date}（台北）",xiaojunEmptyCount:"其中 {n} 集公開文字不足，僅列標題",xiaojunSearchLabel:"搜尋集數",xiaojunSearchPlaceholder:"標題、集數或關鍵字",xiaojunSourceLine:"來源：",xiaojunKeyPoints:"重點整理",xiaojunNotesThin:"公開節目指引幾乎只有標題／短語，無更多可整理文字。",xiaojunTeaserNote:"以上僅整理公開 RSS／節目說明，未聽音檔、未發明內容。",xiaojunListen:"在 Apple Podcasts 收聽",xiaojunLoadMore:"再顯示 {n} 集（尚餘 {left}）",xiaojunShowingAll:"已顯示全部 {n} 集",xiaojunNoResults:"沒有符合的集數。",xiaojunUntitled:"未命名集數",xiaojunBadgeListened:"已聽寫",xiaojunBadgeRssOnly:"僅節目說明",xiaojunStockAnalysis:"股票／產業重點分析（已聽寫）",xiaojunRssTeaserToggle:"公開節目說明（RSS）",xiaojunListenedAt:"聽寫於 {date}（台北）",xiaojunListenedCount:"已聽寫 {n} 集",xiaojunRssOnlyNote:"此集尚未聽音檔；以上僅整理公開 RSS／節目說明，非聽寫分析。",podcastsWhynottvTitle:"WhynotTV Podcast",podcastsWhynottvHandle:"Tairan He · AI／機器人長訪談",podcastsWhynottvLead:"聚焦 AI、機器人與科研創業的長篇訪談；集數庫來自公開 Anchor RSS。標「已聽寫」者另附產業重點（候選／觀察，非投資建議）。",podcastsWhynottvMarket:"AI／機器人與科研創業 · 跨市場觀察",podcastsWhynottvApple:"在 Apple Podcasts 收聽",whynottvLibraryBadge:"集數庫",whynottvDisclaimer:"候選／觀察；數學閘關閉。標「已聽寫」者：下載公開音檔＋語音轉文字後撰寫產業重點。標「僅節目說明」者：僅 RSS／節目說明，未聽寫。主持人觀點；非投資建議。",whynottvLoading:"載入 WhynotTV 集數庫…",whynottvLoadError:"無法載入集數庫（{msg}）",whynottvEpisodeCount:"共 {n} 集（公開 RSS）",whynottvAsOf:"資料截至 {date}（台北）",whynottvEmptyCount:"其中 {n} 集公開文字不足，僅列標題",whynottvSearchLabel:"搜尋集數",whynottvSearchPlaceholder:"標題、集數或關鍵字",whynottvSourceLine:"來源：",whynottvKeyPoints:"重點整理",whynottvNotesThin:"公開節目指引幾乎只有標題／短語，無更多可整理文字。",whynottvTeaserNote:"以上僅整理公開 RSS／節目說明，未聽音檔、未發明內容。",whynottvListen:"在 Apple Podcasts 收聽",whynottvLoadMore:"再顯示 {n} 集（尚餘 {left}）",whynottvShowingAll:"已顯示全部 {n} 集",whynottvNoResults:"沒有符合的集數。",whynottvUntitled:"未命名集數",whynottvBadgeListened:"已聽寫",whynottvBadgeRssOnly:"僅節目說明",whynottvStockAnalysis:"股票／產業重點分析（已聽寫）",whynottvRssTeaserToggle:"公開節目說明（RSS）",whynottvListenedAt:"聽寫於 {date}（台北）",whynottvListenedCount:"已聽寫 {n} 集",whynottvRssOnlyNote:"此集尚未聽音檔；以上僅整理公開 RSS／節目說明，非聽寫分析。",podcastsZhangJunanTitle:"張濬安",podcastsZhangJunanHandle:"et220870 · Blogspot／PTT",podcastsZhangJunanLead:"公開部落格與 PTT 發文整理：績效覆盤、交易紀律、券商／房貸實務與早期操作日誌。標「已讀分析」者已讀全文；標「僅標題」者公開正文不可得。候選／觀察，非投資建議。",podcastsZhangJunanMarket:"台股／交易實務 · 個人覆盤",zhangJunanLibraryBadge:"文章庫",zhangJunanDisclaimer:"候選／觀察；數學閘關閉。標「已讀分析」：已讀公開正文（部落格全文或 PTT 原文＋留言）後撰寫股市／資產重點。標「僅標題」：公開頁正文不可讀或已刪。作者觀點；非投資建議。不納入選股清單。",zhangJunanLoading:"載入張濬安文章庫…",zhangJunanLoadError:"無法載入文章庫（{msg}）",zhangJunanPostCount:"共 {n} 篇（公開列表）",zhangJunanAsOf:"資料截至 {date}（台北）",zhangJunanAnalyzedCount:"已讀分析 {n} 篇",zhangJunanTitleOnlyCount:"其中 {n} 篇僅標題（正文不可讀）",zhangJunanSearchLabel:"搜尋文章",zhangJunanSearchPlaceholder:"標題、看板、關鍵字",zhangJunanSourceLine:"來源：",zhangJunanKeyPoints:"重點整理",zhangJunanStockAnalysis:"股市／資產重點分析（已讀）",zhangJunanNotesThin:"公開文字不足，僅列標題與連結。",zhangJunanTitleOnlyNote:"公開頁正文已刪除或無法解析；以上不臆造內容。",zhangJunanOpenBlog:"開啟原文（部落格）",zhangJunanOpenPtt:"開啟原文（PTT）",zhangJunanLoadMore:"再顯示 {n} 篇（尚餘 {left}）",zhangJunanShowingAll:"已顯示全部 {n} 篇",zhangJunanNoResults:"沒有符合的文章。",zhangJunanUntitled:"未命名文章",zhangJunanBadgeAnalyzed:"已讀分析",zhangJunanBadgeTitleOnly:"僅標題",zhangJunanSourceBlog:"部落格",zhangJunanSourcePtt:"PTT",zhangJunanCommentSummary:"留言重點",zhangJunanFilterAll:"全部",zhangJunanFilterBlog:"部落格",zhangJunanFilterPtt:"PTT",zhangJunanFilterSeriesAll:"全部子分類",zhangJunanSourceFilters:"來源篩選",zhangJunanSeriesFilters:"子分類篩選",researchCatMenu:"分類選單",researchCategories:"研究分類",researchMenuLead:"先選類型／市場／狀態，再瀏覽該分類條目。",researchOpenCategory:"開啟此分類",researchCatBooks:"書籍",researchCatPapers:"論文",researchCatPodcasts:"Podcast",researchCatUs:"美股焦點",researchCatTw:"台股焦點",researchCatCandidate:"候選",researchCatWatch:"觀察中",researchBackMenu:"回分類選單",researchStatusFilters:"狀態",godzillaTitle:"哥吉拉",godzillaLead:"Threads 受訪者「哥吉拉」的美股框架整理：時間與健康、RSU 再配置、基本面、能力圈、稅務節奏、選擇權工具——白話卡片，非投資建議。",godzillaDisclaimer:"非投資建議。整理自公開訪談；數字與做法標示為受訪者自述，不構成個人化建議。數學閘門未通過，僅候選／觀察。",godzillaHeroLabel:"哥吉拉框架總覽",godzillaKicker:"候選框架 · 美股為主",godzillaTagline:"用健康的時間換自由；長股為核、選擇權為輔；稅務決定換倉節奏。",godzillaBadgeCandidate:"候選",godzillaBadgeWatch:"觀察中",godzillaUsFocus:"以美股為主",godzillaSelfReport:"受訪者自述",godzillaListenedBadge:"已聽寫",godzillaStockTitle:"股票重點分析（已聽寫）",godzillaStockLead:"依公開 YouTube 訪談音訊＋語音轉寫整理的受訪者觀點（候選／觀察；非投資建議）。",godzillaStock1:"時間與健康優先於再堆金錢／RSU；金錢買不回時間，退休目標會隨 RSU 累積而上修。",godzillaStock2:"美股科技薪資結構高度依賴 RSU；股價上漲會放大總報酬，也放大單一公司集中風險。",godzillaStock3:"進場時點：特斯拉较早布局自覺「可更早出場會賺更多」；Meta 約在相對低檔區間進入（受訪者自述）。",godzillaStock4:"下一波關注偏 B2C AI 應用落地；當下顯見案例如 Tesla FSD、Palantir，其餘仍在觀察。硬體／AI 資本開支仍在成長，但多數應用仍偏 B2B。",godzillaStock5:"即便看好 NVIDIA，也不主張把倉位壓在單一公司；美國 W2／稅務計算下，高薪＋集中持股需一起規劃。",godzillaStock6:"台股無資本利得稅 vs 美國稅負：流動性／進出方便是優點，稅制誘因不同，不能直接照搬美股玩法。",godzillaStockNote:"轉寫模型：faster-whisper small int8。來源影片公開可查；數字與標的均為訪談中受訪者觀點，候選／觀察。",godzillaSourceLabel:"來源",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"觀看 YouTube 訪談",godzillaThesesTitle:"核心論點",godzillaThesesLead:"十條可掃讀重點；細節皆為受訪者自述。",godzillaThesis1Title:"時間與健康重於再堆 RSU",godzillaThesis1Body:"退休目標常會膨脹（例如自述從約 3,000 萬美元調到 6,000 萬，再加上住房與子女）；停下來往往是身體撐不住。用健康的 40 多歲換旅行與自由，和 50–60 歲很不一樣。",godzillaThesis2Title:"美股 RSU 改變誘因",godzillaThesis2Body:"四年歸屬、與公司利益綁在一起；對比台股現金獎金較少用來買自家股票。",godzillaThesis3Title:"歸屬當日賣出、轉到信念標的",godzillaThesis3Body:"既得 RSU 當日賣出，再配置到有信念的名字（其例：NVDA），避免薪水＋未歸屬全押同一籃。",godzillaThesis4Title:"只看基本面",godzillaThesis4Body:"看營收／EPS 趨勢；忽略華爾街目標價；新聞噪音多半有害。",godzillaThesis5Title:"能力圈：硬體／科技",godzillaThesis5Body:"能力圈在硬體與科技——NVDA 權重最高；亦提 PLTR、AVGO、TSM；很少碰科技外。指數部位現在較小，終局想像多數在指數。",godzillaThesis6Title:"稅務決定換倉節奏",godzillaThesis6Body:"高 W2 收入時資本利得稅重；離職後可多年把個股輪換成指數、把稅負控在可接受範圍；賣出 Covered Call 可緩衝下跌。",godzillaThesis7Title:"選擇權是工具",godzillaThesis7Body:"多半當卖方（Covered Call／Cash-secured Put）；少數做多買權／LEAP，僅在恐慌或價格與基本面背離時；接受權利金可能歸零；從不裸賣。",godzillaThesis8Title:"Covered Call：被指派就延後",godzillaThesis8Body:"有被指派風險就往後換月（roll out）；不要為了小權利金去履約或賣掉核心持股；不舒服就少賣合約。",godzillaThesis9Title:"進場等趨勢",godzillaThesis9Body:"等 1–2 次乾淨財報確認趨勢，即使成本墊高也接受；有閒錢就持續買好公司；不追熱門明牌。",godzillaThesis10Title:"美／台觀察分欄",godzillaThesis10Body:"美股資本利得稅→傾向抱更久；台股無資本利得＋有證交稅→周轉較高、投機文化較重（僅觀察，非操作指令）。",godzillaChecklistTitle:"作法清單",godzillaChecklistLead:"可執行的自我檢查，不是下單清單。",godzillaCheck1:"物慾低；別讓「夠了」的數字一直往上漲。",godzillaCheck2:"長股為核心；選擇權是衛星／避險／偶爾槓桿。",godzillaCheck3:"部位：不借錢；接受不了歸零，就別碰選擇權。",godzillaCheck4:"選擇權優先流動性高的大型股。",godzillaCheck5:"終局配置草圖：約 80% 寬基指數，小袖口參與產業（＋偶爾小額買權）。",godzillaCheck6:"PLTR 例子：B2B 靠前線工程師變現；若商業成長失望就減碼。",godzillaOptionsTitle:"選擇權用法",godzillaOptionsLead:"卖方為主；买方極少、僅在極端偏離時。",godzillaOpt1:"主力：Covered Call、Cash-secured Put。",godzillaOpt2:"小部位長買權／LEAP：恐慌或價格脫離基本面時。",godzillaOpt3:"權利金可全部虧完；從不裸倉。",godzillaOpt4:"被指派風險：往後換月；核心持股不為小權利金賣出。",godzillaRsuTitle:"RSU、稅務與輪換",godzillaRsuLead:"誘因、分散與離職後的稅務節奏。",godzillaRsu1:"歸屬當日賣出 RSU，再配置到信念標的（例：NVDA）。",godzillaRsu2:"在職高稅負時少動大額已實現利得；離職後多年輪換個股→指數。",godzillaRsu3:"Covered Call 作為下跌緩衝，不是賭方向。",godzillaTwTitle:"台股觀察",godzillaTwLead:"與美股框架分開；僅文化／稅制觀察。",godzillaTwBody:"美股有資本利得稅，傾向長期持有；台股無資本利得稅、有證交稅，周轉與短線文化較明顯。此頁主軸仍是美股框架，台股僅作對照，不寫進正式篩選。",godzillaGateNote:"尚未寫進正式篩選",godzillaGateDetail:"狀態：候選／strategyCandidate=watch。數學閘門關閉——未接入即時篩選器或模擬交易；僅供閱讀與對照。",jensenTitle:"黃仁勳／Jensen Huang",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公開演講整理：視角、需求與摩爾定律、文化、現金現實、再發明——候選／觀察，非投資建議。",jensenDisclaimer:"非投資建議。整理自 Stanford Online 公開演講（約 2009；YouTube 2011 上傳）；論點來自講者自述主題，不構成個人化建議。數學閘門未通過，僅候選／觀察。",jensenHeroLabel:"黃仁勳演講重點",jensenKicker:"候選演講 · 美股科技／半導體創業",jensenTagline:"視角勝過空泛「願景」；用文化與再發明撐住長週期公司建設。",jensenUsFocus:"以美股／科技為主",jensenTalkBadge:"公開演講",jensenListenedBadge:"已聽寫",jensenStockTitle:"股票／事業重點（已聽寫）",jensenStockLead:"依公開 Stanford ETL 訪談影片音訊＋語音轉寫整理（約2009；歷史觀點，非當下財報）。候選／觀察；非投資建議。",jensenStock1:"創業敘事（1993）：押注 PC＋3D／遊戲會成大市場；VC／長輩當時不信「為了打遊戲開公司」。",jensenStock2:"競爭：消費級3D一度湧入數十～上百家；NVIDIA自述最終成僅存的電腦繪圖公司——關鍵是看懂事業本質（半導體／Moore's Law 如競爭律）與持續重塑，而非只靠執行。",jensenStock3:"可程式著色器轉型：主動吞噬自己成功的固定功能產品；第一代幾乎拖垮公司，但自認不做會死於 Moore's Law 節奏。",jensenStock4:"資源配置：競爭決定價格，CEO決定要不要接案；看關鍵資源相對市場需求與機會成本，不只會計成本。",jensenStock5:"文化：創新需容忍計算過的失敗；新創定義＝幾乎一直快倒閉。通用化 GPU（瑞士刀）有偏離利基風險，卻是延長產業壽命的路徑。",jensenStock6:"時間錨點：本場為歷史談（預現代AI訓練熱潮），勿直接外推今日資料中心財報。NVIDIA為講者公司；候選／觀察。",jensenStockNote:"轉寫：faster-whisper small int8（en）。來源 YouTube Xn1EsFe7snQ／Stanford ETL。歷史訪談觀點。",jensenMeta:"Stanford Online · STVP ETL · 約 1:03:38 · 上傳 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"觀看 YouTube 演講",jensenOpenYoutube:"在 YouTube 開啟完整影片",jensenEmbedTitle:"Jen-Hsun Huang：Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 相關剪輯",jensenHighlightsTitle:"演講重點（白話）",jensenHighlightsLead:"五條可掃讀主題；僅整理公開演講中反覆出現的論點，非逐字稿。",jensenH1Title:"視角，而非空泛「願景」",jensenH1Body:"人人都有視角。NVIDIA 早期押注：個人電腦加上便宜的 3D 會打開遊戲市場（後來也談到 Keyhole→Google Earth），當時對許多 VC 而言市場幾乎是零。",jensenH2Title:"無窮需求與摩爾定律",jensenH2Body:"新類別尚未被定價時，有時要暫時忽略顧客回饋；先 rinse-and-repeat，再在「夠好」扼殺媒介前重新發明（固定功能→可程式著色器／GeForce FX 近死經驗、CG 語言）。",jensenH3Title:"文化：敢冒算過的風險",jensenH3Body:"創新需要計算過的風險、容忍快速失敗、智識誠實、願意改道；動機是熱情與目的，而非「把公司賣掉」。",jensenH4Title:"現金與新創現實",jensenH4Body:"永遠在募資、省錢或賺錢；新創幾乎總是瀕臨倒閉。VC 更押人與夠大的市場，而非完美商業計畫。",jensenH5Title:"再發明：成功也要拆掉重建",jensenH5Body:"每一次成功終須拆解再建；黃仁勳談的是長視野公司建設，不是連續翻轉出場。",jensenTwTitle:"美／台分欄（僅脈絡）",jensenTwLead:"本條目市場主軸為美股科技／半導體公司建設；台灣僅作供應鏈脈絡，不發明台股標的。",jensenTwBody:"NVDA 作為美股半導體／運算平台公司，供應鏈與台灣晶圓製造、封測生態高度相關——此處僅作產業脈絡註記，不列台股清單，也不寫進正式篩選。",jensenGateNote:"尚未寫進正式篩選",jensenGateDetail:"狀態：候選／strategyCandidate=watch。數學閘門關閉——未接入即時篩選器或模擬交易；僅供閱讀與對照。",jensenWatchCta:"在 YouTube 觀看",jensenEmbedBlockedNote:"此演講由擁有者設定為僅能在 YouTube 觀看（無法於本站內嵌播放）。",optionsTitle:"美股選擇權",optionsLead:"以 McMillan《選擇權策略完全手冊》策略族為主：先看波動與風險形狀，再用公開 Yahoo 鏈結學習——非投資建議。",optionsDisclaimer:"非投資建議；選擇權風險高。僅供教育與公開數據篩選，不構成個人化下單建議。",optionsBookBadge:"這本書",optionsBookCite:"主要參考書",optionsBookLead:"Lawrence G. McMillan《選擇權策略完全手冊》增訂第五版：依看法與波動高低對應策略族（原創摘要，非原文）。",optionsBookFallbackTitle:"選擇權策略完全手冊（McMillan）",optionsGotoResearch:"到研究書庫看完整條目",optionsUsOnly:"僅美股",optionsQualityTitle:"標的輕量財報檢核",optionsQualityLead:"次要濾網：本益、淨值、負債、ROE、營收／獲利趨勢。缺欄略過；不作薦股。",optionsViewTitle:"選擇權觀點（McMillan）",optionsViewLead:"公開期權鏈：ATM 隱含波動、歷史波動、量能偏向；策略族為教育說明。",optionsMcmillanFirst:"先對齊波動高低與風險形狀，再想策略族——不是先猜漲跌再硬套。",optionsPe:"本益比",optionsPb:"股價淨值",optionsDebt:"負債／權益",optionsRoe:"ROE",optionsRevTrend:"營收趨勢",optionsEarnTrend:"獲利趨勢",optionsGate:"品質閘",optionsGatePass:"通過",optionsGateWatch:"觀察",optionsGateFail:"偏弱",optionsGateIncomplete:"資料不足",optionsDataMissing:"資料不足",optionsForwardPe:"預估本益",optionsTrendUp:"成長約 {pct}%",optionsTrendDown:"下滑約 {pct}%",optionsTrendFlat:"大致持平 {pct}%",optionsAtmIv:"ATM 隱含波動",optionsHv:"歷史波動（約 1 月）",optionsIvHv:"IV／HV",optionsVolRegime:"波動狀態",optionsRegimeIvRich:"隱含偏高",optionsRegimeIvCheap:"隱含偏低",optionsRegimeIvFair:"大致均衡",optionsRegimeIvOnly:"僅有 IV",optionsCallPutVol:"買權／賣權成交量",optionsAtmStrike:"近價履約價",optionsExpiry:"到期日",optionsSkewPutHeavy:"賣權量較重",optionsSkewCallHeavy:"買權量較重",optionsSkewBalanced:"量能大致均衡",optionsEduSetups:"策略族（教育）",optionsEduSetupsLead:"依看法＋波動狀態挑選家族；綠底表示較常對齊目前 IV／HV 狀態（仍非建議）。",optionsSetupCoveredCall:"備兌買權（Covered Call）",optionsSetupCoveredCallBody:"已持有股票時賣出買權，換取權利金；上漲空間被履約價「蓋住」。",optionsSetupCoveredCallWarn:"最大利潤有天花板；大跌時股票虧損仍在。",optionsSetupProtectivePut:"保護性賣權（Protective Put）",optionsSetupProtectivePutBody:"持股同時買進賣權，像買保險：下跌有地板，但要付保費。",optionsSetupProtectivePutWarn:"保險成本會吃掉報酬；若波動已很貴，保費更痛。",optionsSetupVertical:"垂直價差（Vertical）",optionsSetupVerticalBody:"同到期、不同履約價的買權或賣權組合，把最大損益框在可計算區間。",optionsSetupVerticalWarn:"方向看錯仍會虧；好處是虧損有上限。",optionsSetupCalendar:"日曆／對角價差（Calendar / Diagonal）",optionsSetupCalendarBody:"不同到期的選擇權組合，常用來表達「時間流逝」或波動變化看法。",optionsSetupCalendarWarn:"對波動與時間敏感；形狀會隨市價移動改變。",optionsSetupStraddle:"跨式／勒式（Straddle / Strangle）",optionsSetupStraddleBody:"同時買（或賣）買權與賣權，押「大波動」或「波動不夠」。",optionsSetupStraddleWarn:"買方需要夠大的移動；賣方面臨兩側風險。",optionsSetupButterfly:"蝶式（Butterfly）",optionsSetupButterflyBody:"多履約價組合，押價格收斂在中間附近；利潤區通常很窄。",optionsSetupButterflyWarn:"甜蜜點很窄；錯過中間就可能接近最大虧損。",optionsSetupVolAligned:"與目前波動狀態較常一起討論",optionsSetupVolNotAligned:"與目前波動狀態較不契合（仍可學習）",optionsRiskShape:"風險形狀（白話）",optionsNoSetups:"暫無策略族說明",optionsPickTicker:"請選擇上方美股代碼",optionsChainBlocked:"期權鏈暫時無法取得",optionsPartialBlocker:"部分欄位不完整",optionsRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",optionsLoadError:"無法載入選擇權快照（{msg}）",optionsEmpty:"尚無美股樣本——請先跑 fetch-us-options",optionsGlossaryTitle:"小詞典（不用公式）",optionsTermDelta:"Delta（方向敏感度）",optionsDefDelta:"價格漲跌時，選擇權大概會跟多少。數字愈靠近 1 或 −1，跟現貨愈緊。",optionsTermIv:"隱含波動 IV",optionsDefIv:"市場「現在願意付多少保費」換算成的波動預期。愈高通常選擇權愈貴。",optionsTermHv:"歷史波動 HV",optionsDefHv:"過去一段時間股價實際晃動有多大，用來和 IV 對照。",optionsTermAtm:"ATM（近價）",optionsDefAtm:"履約價最靠近現價的合約，常拿來當波動溫度計。",optionsTermSkew:"量能偏向",optionsDefSkew:"買權與賣權成交量誰比較多，粗看市場偏保險還是偏追漲。",optionsTermProb:"機率（教育）",optionsDefProb:"只談「比較可能／比較少見」的直覺，不保證結果，也不給個人化勝率。",researchLead:"書單與論文：標題 → 摘要 → 重點作法 → 是否納入策略候選",researchMathGateBanner:"正式納入策略需數學閘門通過（目前未過）— 僅候選",researchMathGate:"數學閘門",researchMathGateDefault:"尚未通過數學閘門",researchFormulas:"可程式化公式",researchTakeaways:"重點作法",researchNoTakeaways:"尚無重點作法",researchSources:"來源",researchFilters:"篩選",researchFilterAll:"全部",researchType:"類型",researchTypeBook:"書籍",researchTypePaper:"論文",researchTypePodcast:"Podcast",researchMarketBoth:"美＋台",researchStrategy:"策略候選",researchCandYes:"候選納入",researchCandNo:"不納入",researchCandWatch:"觀察中",researchStatusCandidate:"候選",researchStatusDeferred:"暫緩",researchStatusAdopted:"已納入",researchStatusRejected:"排除",researchCounts:"書籍 {books} · 論文 {papers} · Podcast {podcasts} · 顯示 {total}",researchEmpty:"此篩選條件下暫無項目",researchNoFormulas:"尚無公式條目",researchLoadError:"無法載入研究庫（{msg}）",researchShelfFilters:"書架分類",researchShelfCoreInvesting:"核心投資經典",researchShelfValueInvesting:"價值型投資",researchShelfBusiness:"商業管理與商界視角",researchShelfLifePartner:"人生智慧與合夥人思想",researchShelfOptions:"選擇權／衍生品",researchShelfRecentReads:"近期閱讀與推薦書",researchShelfFiConcepts:"必看財商觀念書",researchShelfMoneyValues:"理財與金錢價值觀",researchShelfInvestingBasics:"投資理財入門",researchShelfAssetAllocation:"資產配置",researchShelfFinancials:"財報分析",researchShelfMarketAnalysis:"投資分析與戰勝市場",researchShelfEconAnalysis:"經濟分析",researchShelfPsych:"投資心理／隨機性／人性",researchShelfBiographies:"名人傳記",researchShelfAdjacent:"其他／隣接",todayPicks:"今日選股",market:"市場",hot:"熱門",marketQuotes:"市場報價",macroTitle:"美股大事",macroTzEt:"時間・美東 ET",macroAsOf:"更新",macroStale:"資料偏舊（仍顯示上次成功抓取）",macroToday:"今日",macroNext:"即將",macroHighImpact:"高影響",macroEmpty:"近期無高影響美股大事（或資料尚未更新）",macroLoadError:"無法載入美股大事（{msg}）",liveQuotesLive:"即時",liveQuotesStale:"報價暫緩（仍顯示上次成功）",liveQuotesStaleShort:"暫緩",liveQuotesPending:"即時報價連線中…",liveQuotesClock:"報價",macroEvent_fomcDecision:"FOMC 利率決議",macroEvent_fomcMinutes:"FOMC 會議紀要",macroEvent_cpi:"CPI 通膨",macroEvent_ppi:"PPI 生產者物價",macroEvent_pce:"PCE／核心 PCE",macroEvent_nfp:"非農就業 NFP",macroEvent_joblessClaims:"初請失業金",macroEvent_gdp:"GDP",macroEvent_retailSales:"零售銷售",macroEvent_ismMfg:"ISM 製造業",macroEvent_ismServices:"ISM 服務業",macroEvent_jolts:"JOLTS 職缺",twMacroTitle:"台股大事",twMacroTz:"時間・台北時間",twMacroEmpty:"近期無高影響台股大事（或資料尚未更新）",twMacroLoadError:"無法載入台股大事（{msg}）",twMacroEvent_cbcDecision:"央行理監事會",twMacroEvent_dgbasCpi:"CPI 消費者物價",twMacroEvent_dgbasPpi:"PPI／物價指數",twMacroEvent_dgbasUnemployment:"失業率",twMacroEvent_dgbasGdpFlash:"GDP 概估",twMacroEvent_dgbasGdp:"GDP／經濟成長",twMacroEvent_dgbasForecast:"經濟預測",twMacroEvent_moeaExportOrders:"外銷訂單",twMacroEvent_moeaIndustrialProd:"工業生產",twMacroEvent_twseHoliday:"台股休市",usStock:"美股",twStock:"台股",usList:"美股清單",twList:"台股清單",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暫無 Top 候選",ticker:"代碼",name:"名稱",price:"價格",dayPct:"日漲跌",rs:"RS",priorClose:"前收",priorCloseFull:"前收漲幅",pct5d:"5 日",pct1m:"約 1 月",volRatio:"量比",ma:"均線",screening:"篩選",reason:"理由",details:"詳情",business:"本業",risk:"風險",observe:"觀察",dataIncomplete:"資料不全",intraday:"盤中",taipeiClose:"台北收",taiex:"台灣加權 TAIEX",otc:"櫃買",spx:"S&P 500",nasdaq:"Nasdaq",sox:"SOX",usdtwd:"USD/TWD",loadError:"無法載入資料（{msg}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。",langLabel:"語言",paper:"模擬",paperMissing:"尚無模擬帳本檔案。請於專案執行 npm run paper。",paperDisclaimer:"累積模擬帳戶（自 {date} 起） · 不會每日歸零 · 買進即成交 · 非真實下單",paperRules:"規則（各市場獨立帳）",paperRuleTw:"台股本金 NT$3,000,000 · 整張成交",paperRuleUs:"美股本金 US$100,000 · 可買 1 股起",paperRuleBuy:"買：該市場名單·風險1%·停距1.5%·單檔≤8% · 即成交",paperRuleSell:"賣：停損−3% · 停利+12%半倉 · 破SMA20且日跌>2% · 離名單虧損 · 漲停隔日−5%",paperTabTw:"台股帳 · NT$",paperTabUs:"美股帳 · US$",paperBookTw:"台股帳本（NT$）",paperBookUs:"美股帳本（US$）",principal:"本金",cash:"現金",equity:"權益（部位＋現金）",totalPnl:"總損益",totalPnlPct:"總損益 ％",weekPerf:"週績效",monthPerf:"月績效",quarterPerf:"季績效",yearPerf:"年績效",sinceInception:"成立以來",noTradesToday:"本日尚無此類成交（模擬）",noPositions:"目前沒有持股",buy:"買",sell:"賣",shares:"股",qtyShares:"股數",positions:"目前部位",position:"部位",avgCost:"成本",mark:"現價",mktValue:"市值",dayPnl:"日損益",costBasis:"成本合計",weightPct:"權重 ％",posScrollHint:"左右滑動看全部欄位",unrealizedPnl:"未實現損益",unrealizedPct:"未實現 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累積 · 買進即成交",reasonScreenBuy:"名單新開倉",reasonAdd:"持續買進",reasonStop:"停損",reasonTakeProfit:"停利",reasonMomentumBreak:"動能轉弱",reasonOffList:"離開名單",reasonLimitUpChase:"漲停追價急殺",paperRuleOpt:"美股帳可模擬買／賣選擇權（單腳）；權利金來自公開期權鏈，乘數×100；到期依內含價值結算",paperRuleTxf:"台股帳可模擬台指期 TX／MTX；點數×官方乘數（TX 200／MTX 50）×口數＝損益；保證金用期交所公開初始保證金",paperDerivUsTitle:"美股選擇權（紙上）",paperDerivUsLead:"單腳買／賣 Call／Put。權利金＝當日公開鏈；絕不捏造。現金借記／貸記更新本帳。",paperDerivServerBook:"全站模擬部位（每台裝置都看得到，不是手機暫存）。",paperDerivTwTitle:"台指期 TX／MTX（紙上）",paperDerivTwLead:"價格來自台指期桌（session {session}）。多／空口數；損益＝點數差×乘數×口數（TWD）。",paperDerivFreeCash:"可用現金（本帳）",paperDerivOptMv:"選擇權市值",paperDerivMarginHold:"保證金占用",paperDerivUnderlying:"標的",paperDerivRight:"Call／Put",paperDerivStrike:"履約價",paperDerivPremium:"權利金",paperDerivCashImpact:"現金影響",paperDerivFutCode:"商品",paperDerivMonth:"契約月",paperDerivNear:"近月",paperDerivNext:"次月",paperDerivContract:"契約",paperDerivContracts:" 口",paperDerivLong:"多",paperDerivShort:"空",paperDerivMarkSrc:"標記來源",paperDerivLastDay:"最後交易日",paperDerivMarginNote:"紙上保證金：以期交所公開「初始保證金」×口數占用現金；非真實下單。",paperDerivNoOptPos:"尚無選擇權部位",paperDerivNoFutPos:"尚無台指期部位",paperDerivNoChain:"尚無可成交的公開期權鏈（需 paperChain 權利金）",paperDerivNoPremium:"此履約價沒有可用公開權利金",paperDerivNoTxf:"尚無台指期桌資料（public/data/txf-desk.json）",paperDerivNoMonth:"桌面沒有此契約月報價",paperDerivNoFutPrice:"沒有可用的公開期貨價（last／settle）",paperDerivNoMargin:"桌面缺少官方初始保證金數字",paperDerivBadRight:"請選 Call 或 Put",paperDerivBadQty:"口數／張數須為正整數",paperDerivBadSide:"買賣方向無效",paperDerivBadCode:"僅支援 TX／MTX",paperDerivBadMult:"乘數與官方規格不一致，已阻擋",paperDerivExpiryMismatch:"到期日與公開鏈不一致",paperDerivNeedCash:"現金不足（需要約 {need}）",paperDerivNeedMargin:"保證金不足（需要約 {need}）",paperDerivMathBlock:"數學守衛攔截：非有限數字，未寫入",paperDerivFail:"下單失敗",paperDerivFillOk:"已成交 @ {px}",paperDerivUserOpen:"紙上開倉",paperDerivUserClose:"紙上平倉",paperDerivExpirySettle:"到期依內含價值結算",paperDerivFutSettle:"最後交易日後依結算／最後價平倉",paperDerivStrategy_covered_call:"備兌買權",paperDerivStrategy_protective_put:"保護性賣權",paperDerivStrategy_long_call:"買進買權",paperDerivStrategy_long_put:"買進賣權",paperDerivStrategy_short_call:"賣出買權",paperDerivStrategy_short_put:"賣出賣權",stopLoss:"停損",takeProfit:"停利",paperTrade:"模擬",realizedPnl:"實現損益",sessionRealizedPnl:"本次賣出實現損益合計",costMissing:"成本資料缺失",costMissingCount:"另有 {n} 筆缺成本",realizedOpenOnly:"尚未實現（持倉中）",paperDerivFills:"衍生性成交",tradeDate:"日期",periodPerf:"績效",qty:"數量",note:"說明",strategyScreen:"策略選股",strategyLead:"台／美命中分開檢視 · 公開資料命中優先",strategyLoading:"載入策略結果中…",strategyEmpty:"尚無策略資料。請執行 npm run strategies。",strategyLoadError:"無法載入策略選股（{msg}）。請確認已執行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分類",hitCount:"檔命中",hitTitle:"命中檔數",strategyDetails:"詳情 · 策略說明",conditions:"條件",results:"篩選結果",copyJson:"複製 JSON",exportCsv:"匯出此策略 CSV",exportJson:"匯出 JSON",copied:"已複製",noHitsExport:"此策略今日無命中列可匯出",incomplete:"不足",hitsTotal:"共{n}檔",twOnlyHint:"本策略僅台股",hitMarket:"命中市場",noHits:"本日無命中",dataInsufficient:"資料不足",calibTitle:"校準說明",incompleteFilters:"未檢查濾網（不算通過）：",sessionTwse:"證交所 session",ohlcvBar:"OHLCV K棒",generated:"產生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精選",cat價量:"價量",cat籌碼:"籌碼",cat財務:"財務",cat大師:"大師",cat週期:"週期",cat技術:"技術",cat基本:"基本",cat綜合:"綜合",addWatchlist:"加入自選",watchlistAdded:"已加入自選 {ticker}",watchlistExists:"{ticker} 已在自選",copyFailed:"複製失敗（請手動選取）",csvDownloaded:"已下載 CSV",csvBlocked:"下載被擋：改以資料連結開啟",backtestSoon:"回測：尚未開放",backtestHint:"回測：資料／引擎尚未開放（不提供假回測）",regimeToday:"今日市場週期（美／台分開）",psychologyPhase:"心理相位",cycleStance:"週期姿態",liquidityBias:"流動性偏誤",temperatureScore:"市場溫度",sizeMult:"部位乘數",regimeTags:"週期標籤",dataGaps:"資料缺口",marketRegime:"市場週期",enum_euphoric:"亢奮",enum_late_optimism:"晚期樂觀",enum_mid_cycle:"中期",enum_cautious_recovery:"謹慎復甦",enum_despondent:"絕望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精選",enum_balanced:"均衡",enum_constructive:"偏建設",enum_aggressive:"積極",enum_stabilize_first:"先求穩",enum_risk_off:"偏防守",enum_risk_on:"偏進攻",enum_neutral:"中性",logicTitle:"選股邏輯",logicSubtitle:"政權→篩選→策略→降權→理由→部位：可稽核的數學流程",logicNoRegime:"尚無市場週期資料（待下次掃描寫入）。",logicStep1:"市場週期（Regime）",logicStep1Lead:"先定美／台獨立姿態，再篩個股。Kostolany 心理相位 × Marks 溫度 × 利率流動性。",logicStep1Caption:"相位 → 篩選姿態 → 部位乘數（STANCE_SIZE_MULT）",logicRatesR2:"R2：美債 ^TNX 20 日上升 ≥ +0.25pp → 流動性偏防禦（即使價趨勢仍中性）。",logicRatesR3:"R3：60 日殖利率下降 ≤ −0.25pp → 允許較積極姿態（非亢奮）。",logicRatesSeparate:"硬規則：dial_US 與 dial_TW 分開；不混成「全球心情」。",logicStep2:"數學篩選（A／B）",logicStep2Lead:"相對強度、動能、SMA、量比；門檻依週期姿態調整。",logicScreenA:"篩選 A · 動能／相對強度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日漲≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或雙均線且 5日≥0／RS≥0。",logicScreenASelective:"精選：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量視為可過）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"積極／偏建設：放寬 RS／日／5日／1月；允許 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建設另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求穩：須站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌後先穩定）。",logicScreenB:"篩選 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。門檻：防守 ≥1.0；積極 ≥1.1；其餘 ≥1.2。",logicScreenBMom:"補標 A：若未過 A，但 1月≥8% 且 SMA20＋SMA50（非先求穩）→ 仍標 A。",logicScore:"排序分數",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加權（上限約 8×0.6）；量比<0.4 −0.5；再依市場週期調整分數。",logicStep3:"XQ 策略選股",logicXqLead:"與每日名單並行：條件式命中（價量／籌碼／財務／大師／週期）。缺公開欄位則略過該條件，不捏造。",logicXqPriceVol:"價量：均線多頭、超短線作多等（OHLCV 實算）。",logicXqFlow:"籌碼：法人同步等（公開張數門檻）。",logicXqFund:"財務：獲利遞增、PE／營益率等公開財報欄。",logicXqMasters:"大師：林區／葛拉罕／巴菲特等可計算代理條件。",logicXqCycle:"週期：科斯托拉尼／市場週期包（依當日美台姿態）。",logicOpenStrategies:"開啟策略頁",logicStep4:"排序降權／加權",logicStep4Lead:"scoreAdjust：依姿態對高 RS 縮量、firm-hands、恐慌穩定做加減分。",logicDemoteHot:"防守／精選：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日漲>2% → −1.2；缺雙均線 −1.5。",logicDemoteThin:"K5：高相對強度但量能不足 → 降權／排除積極桶。",logicPromoteFirm:"aggressive／constructive：價弱量增且 SMA200（firm-hands）→ +2.2；早段放量上漲 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；站上 SMA20 才 +1.5。",logicListSize:"名單長度：防守 ≈0.55×；精選 ≈0.75×；先求穩 ≈0.45×；積極 +2（上限14）；基準 12。",logicStep5:"「為什麼」如何組成",logicStep5Lead:"why 欄為可讀摘要，非模型黑箱——由當日可驗證欄位串接。",logicWhyRs:"日漲跌 + 相對指數（美：S&P；台：加權）pp。",logicWhyMom:"五日%、約一個月%。",logicWhyVol:"量比≥1.2 才寫入量能句。",logicWhySma:"SMA20／50／200 站上狀態（雙均線優先）。",logicWhyRegime:"附加週期備註或姿態／心理相位標籤。",logicStep6:"紙上部位紀律",logicStep6Lead:"模擬帳驗證流程；非實單。部位受週期部位乘數與固定風險公式約束。",logicPaperCapital:"本金：台股 NT$3,000,000（整張）；美股 US$100,000（1 股起）。",logicPaperBuy:"買：名單（純 observe 盡量不買）；風險＝權益×1%；停距≈價×1.5%（量比≥3→2.5%）；單檔≤權益 8%。",logicPaperSizeMult:"部位乘數（0.3–1.35×）標示當日建議積極度；與名單長度連動。",logicPaperSell:"賣：停損 −3%；停利 +12% 半倉；破 SMA20 且日跌>2%；離名單且虧損；漲停風格隔日 −5%。",logicOpenPaper:"開啟模擬頁",logicFootnote:"框架合成僅供透明篩選說明，非投資建議。公開作者方法之可編碼代理；不重製受著作權保護之原文。",sma20:"SMA20",sma50:"SMA50",screenA:"A",screenB:"B",screenC:"C",condPass:"條件",condFail:"未過",condSkip:"略過",pe:"本益比",opMargin:"營益率",grossMargin:"毛利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自營商",maBull:"均線多頭",rsi:"RSI",amplitude:"振幅",zhang:"張",limitUp:"漲停",momentum:"動能",metricPrice:"價格",metricDayPct:"日漲跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(張)",metricDebt:"負債比%",metricDirector:"董監持股%",metricOpQ:"近季營益率%",metricSource:"來源",foreign1d:"外資1日(張)",trust1d:"投信1日(張)",dealer1d:"自營商1日(張)",foreign5d:"外資5日(張)",trust5d:"投信5日(張)",dealer5d:"自營5日(張)"},Bn={..._t,siteTitle:"Daily Quant Picks",loading:"Loading…",disclaimer:"Investing involves risk. For reference only — not investment advice.",footer:"Investing involves risk. For reference only — not investment advice.",dataAsOf:"As of",taipei:" (Taipei)",navMain:"Main navigation",navToday:"Today",navStrategies:"Strategies",navPaper:"Paper",navMore:"More",navMoreClose:"Close",navLogic:"Logic",researchTitle:"Research",navResearch:"Research",navOptions:"Options",navEarnings:"Earnings",earningsTitle:"Earnings",earningsLead:"US Magnificent 7 and high-attention earnings: what the company does, key numbers, what to watch next — plain language, daily refresh. Not investment advice.",earningsDisclaimer:"Not investment advice. Figures from public Yahoo Finance; missing fields show as data unavailable — not personalized advice.",earningsUsFocus:"US-focused",earningsTwStub:"Taiwan earnings coming later (stub)",earningsSelectionTitle:"Watchlist rule:",earningsSelectionFallback:"Largest non-Mag7 mega-caps with earnings in the next 14 days; or Yahoo most-actives; fill with calendar highlights within 45 days.",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL, MSFT, NVDA, AMZN, GOOGL/GOOG, META, TSLA — last report and next date when known.",earningsMag7Badge:"Mag7",earningsHotTitle:"High-attention earnings",earningsHotLead:"Picked by the rule above; badges explain why.",earningsHotEmpty:"No names match the current window (or data unavailable)",earningsWhatItDoes:"What they do",earningsWhatToWatch:"What to watch next",earningsNextDate:"Next report",earningsLastEps:"Last EPS",earningsRevYoy:"Revenue YoY",earningsEpsYoy:"Earnings YoY",earningsPe:"P/E",earningsForwardPe:"Forward P/E",earningsEstimate:"est.",earningsDataMissing:"Data unavailable",earningsTagPrimary:"14d · mega-cap",earningsTagActives:"Most actives · 14d",earningsTagRecent:"Recently reported",earningsTagFallback:"45d calendar highlight",earningsTagOther:"Watch",earningsPartialBlocker:"Partial data blocked",earningsRefreshHow:"Data updates with the site; try again shortly if something looks off.",earningsLoadError:"Could not load earnings digest ({msg})",earningsEmpty:"Earnings digest is being prepared. Check back shortly.",navLookup:"Lookup",lookupTitle:"Stock lookup",lookupLead:"Type a US or Taiwan ticker for company info, quote, earnings highlights, and official filings links — plain language; quotes from Yahoo, filings via SEC / MOPS. Not investment advice.",lookupDisclaimer:"Not investment advice. Quotes from public Yahoo Finance; official filing links go to SEC EDGAR / MOPS. Missing fields omitted, never invented. Live fetch may be limited by network or source.",lookupInputLabel:"Ticker",lookupPlaceholderUs:"e.g. AAPL",lookupPlaceholderTw:"e.g. 2330 or 2330.TW",lookupHintUs:"US: tickers like AAPL, MSFT, NVDA",lookupHintTw:"Taiwan: 4-digit codes like 2330 (.TW added; try .TWO for OTC)",lookupSearch:"Search",lookupIdle:"Enter a ticker and search to see quote and earnings highlights.",lookupLoading:"Fetching from Yahoo Finance…",lookupEmptyInput:"Please enter a ticker",lookupInvalid:"Unrecognized ticker. US e.g. AAPL; Taiwan e.g. 2330 or 2330.TW",lookupNotFound:"No quote for this ticker. Check US/TW tab and the symbol.",lookupError:"Lookup failed ({msg})",lookupBusiness:"What they do",lookupQuoteStats:"Quote & key stats",lookupFinancials:"Financials snapshot",lookupEarnings:"Earnings highlights",lookupPrevClose:"Prev close",lookupVolume:"Volume",lookupDayRange:"Day range",lookup52w:"52-week range",lookupMarketCap:"Market cap",lookupEps:"EPS (ttm)",lookupBeta:"Beta",lookupDivYield:"Div yield",lookupRevenue:"Revenue",lookupGrossMargin:"Gross margin",lookupProfitMargin:"Profit margin",lookupEpsConsensus:"EPS estimate",lookupEpsSurprise:"EPS surprise",lookupSources:"Sources",lookupPartial:"Some advanced fields unavailable (showing only fetched numbers).",lookupOfficialFilings:"Official filings",lookupOfficialFilingsLead:"Links to official filings and disclosures. For US names, recent 10-K / 10-Q / 8-K appear when publicly fetchable. No invented figures.",lookupSourceOfficial:"Official",lookupSourceQuote:"Quote source",lookupSourceCompany:"Company site",lookupSecEdgarSearch:"SEC EDGAR company filings search",lookupSecEdgarBrowse:"SEC EDGAR company browse page",lookupSecFormsFilter:"SEC 10-K / 10-Q filter",lookupMopsFinancialBook:"MOPS · Financial reports",lookupMopsFinancialQuery:"MOPS · Financial report query",lookupMopsCompany:"MOPS · Company profile",lookupMopsMaterial:"MOPS · Material information",lookupTwseIsin:"TWSE ISIN / basic search",lookupTpexCompany:"TPEx · Company page",lookupYahooTwQuote:"Yahoo Taiwan quote (market data, not official filings)",lookupCompanyWebsite:"Company website",lookupInvestorRelations:"Investor relations (public)",lookupRecentFilings:"Recent official filings",lookupFilingForm:"Form",lookupFilingDate:"Filed",lookupFilingDoc:"Document",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"Recent filings list could not be loaded (network or source limits).",lookupFilingsListEmpty:"No recent 10-K / 10-Q / 8-K to list right now.",lookupFilingsLinksStillWork:"Official links above still work.",lookupFilingsTwNote:"For Taiwan names, use MOPS as the official filings portal; quote links below are secondary.",lookupFilingsCikUnavailable:"Could not resolve SEC CIK yet; use EDGAR search by ticker above.",navSoxl:"SOXL",soxlTitle:"SOXL Semiconductor Desk",soxlLead:"Direxion Daily Semiconductor Bull 3X ETF: latest quote, events/anomalies, related news, and SEC N-PORT holdings with estimated contributions — plain language. Not investment advice.",soxlDisclaimer:"Not investment advice. SOXL seeks ~3× daily index performance and is extremely volatile; holdings weights are from SEC N-PORT (not same-day); contributions are estimates.",soxlHeroLabel:"SOXL latest quote",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"Regular close",soxlLeverageNote:"SOXL targets about 3× the ICE Semiconductor Index for a single day; overnight and multi-day results are not a simple 3×.",soxlHoldingsAsOf:"Holdings weights as of",soxlHoldingsNotSameDay:"latest N-PORT, not same-day",soxlEventsTitle:"Events / anomalies",soxlNewsTitle:"Related news",soxlNewsEmpty:"No related news yet.",soxlHoldingsTitle:"Holdings & estimated contribution",soxlHoldingsLead:"Weights from SEC N-PORT; cash and index swaps often dominate. Contribution ≈ weight × return (labeled estimate; not equal to 3× ETF points).",soxlHoldingsEmpty:"Holdings are being prepared. Check back shortly.",soxlColName:"Name",soxlColWeight:"Weight",soxlColReturn:"Return",soxlColContrib:"Est. contrib.",soxlColReasons:"Why it moved",soxlContributionHint:"Estimate = weight% × return% ÷ 100 (basket percentage points; SOXL is ~3× daily — not ETF points)",soxlSourceN:"Source {n}",soxlOverallTitle:"Why SOXL rises vs falls",soxlWhyUp:"What tends to lift it",soxlWhyDown:"What tends to weigh on it",soxlRefreshHow:"Data updates with the site; try again shortly if something looks off.",soxlLoadError:"Could not load SOXL desk ({msg})",navTxf:"TX Futures",txfTitle:"Taiwan Index Futures",txfLead:"TAIEX spot vs TX futures: near/next month quotes, basis, volume & open interest, institutional positioning, margins and expiry — all from public TAIFEX/TWSE data. Plain language. Not investment advice.",txfDisclaimer:"Investing involves risk. For reference only — not investment advice. US and TW futures stay separate; missing fields are never invented.",txfHeroLabel:"TX near-month quote",txfNearBadge:"Near",txfNextBadge:"Next",txfSettle:"Settle",txfVolume:"Volume",txfOI:"Open interest",txfSessionDate:"Session date",txfSpotLabel:"TAIEX spot",txfBasisLabel:"Basis",txfBasisHint:"Basis = near futures − spot; positive means futures premium to spot.",txfMultiplierShort:"TX multiplier NT${n}/pt (paper P&L = points × multiplier × contracts)",txfContractsTitle:"Contracts: TX / MTX / TMF",txfContractsLead:"Regular session. Monthly last trading day follows the official third-Wednesday rule; holiday shifts follow TAIFEX notices.",txfMultLabel:"Multiplier",txfPerPoint:"/pt",txfMarginInitial:"Initial margin",txfMarginMaint:"Maintenance",txfColMonth:"Month",txfColLast:"Last",txfColSettle:"Settle",txfColChange:"Change",txfColVolume:"Volume",txfColOI:"OI",txfColLTD:"Last trade day",txfInstTitle:"Institutional futures positioning",txfInstLead:"Long/short open interest and day net volume (TAIFEX, as of {date})",txfInstFoot:"Figures are aggregates across many firms — not one institution's strategy.",txfColParty:"Party",txfColLongOI:"Long OI",txfColShortOI:"Short OI",txfColNetOI:"Net OI",txfColNetVol:"Net volume",txfCalendarTitle:"Settlement / options aggregate",txfNextLTD:"Near-month last trading day",txfNearMonth:"Near",txfNextMonth:"Next",txfLTDRule:"Monthly last trading day = third Wednesday of the delivery month.",txfRecentSettle:"Recent final settlement",txfPcrTitle:"TXO put/call",txfPcrVol:"Volume ratio",txfPcrOI:"OI ratio",txfExplainTitle:"Plain-language notes",txfExplain1:"TX is a cash-settled futures on the TAIEX. MTX and TMF are smaller contract sizes for finer sizing.",txfExplain2:"Basis = futures − spot. A premium (positive basis) means futures trade above spot; it usually converges toward expiry.",txfExplain3:"Open interest is outstanding contracts — a size of open risk, not by itself the reason prices moved today.",txfExplain4:"Paper P&L ≈ points change × multiplier × contracts (TX NT$200, MTX NT$50, TMF NT$10 per point). Use official margins.",txfSourcesTitle:"Sources",txfLoadError:"Could not load TX futures desk ({msg})",navPodcasts:"Celebrity podcasts",navLetters:"Shareholder letters",navManbao:"Mann Report Pro",lettersTitle:"Berkshire shareholder letters",lettersLead:"Pick a year, then open the official Berkshire letter from this page. Notes are our short points, not the letter and not advice. Berkshire does not allow embedding.",lettersDisclaimer:"Points are paraphrases, not quotations. 1965–1976 have no separate official pages; the index starts in 1977. The 2025 letter is Greg Abel’s first as CEO.",lettersMenuLead:"Pick a period, then a year. The letter stays on Berkshire’s site; only short notes live here.",lettersReadBadge:"Notes read",lettersLinkBadge:"Link only",lettersOpen:"Official letter",lettersReaderOpen:"Read the official letter",lettersReaderOpenPdf:"Read the official PDF",lettersReaderNote:"Berkshire blocks other sites from embedding these pages, so the letter is not copied here. Use the button to read it on the official site.",lettersReaderRegion:"Official letter",lettersOfficialHost:"The letter stays on berkshirehathaway.com.",lettersYearRail:"Year",lettersMissing:"No official link for that year.",lettersLinkOnlyNote:"No extra notes for this one. Read it on the official page.",lettersAuthor:"Author",lettersBack:"All periods",manbaoTitle:"Mann Report Pro",manbaoLead:"Paid articles are not republished. Public essays get a short original summary; member-only pieces are title and official link only.",manbaoDisclaimer:"Not investment advice and not a licensed reprint. Pro bodies stay on the official site.",manbaoMenuLead:"Pick a category. Public essays have summaries; Pro items are links only.",manbaoPublicBadge:"Public summary",manbaoPaywallBadge:"Link only",manbaoOpen:"Official page",manbaoBack:"All categories",manbaoCatPublic:"Public essays",manbaoCatDecode:"Business decode",manbaoCatTech:"Tech reads",manbaoCatGiants:"Voices",manbaoCatClub:"Club",manbaoCatAbout:"Entrances",lettersCatEarly:"1977–1989",lettersCat90:"1990–1999",lettersCat00:"2000–2009",lettersCat10:"2010–2019",lettersCat20:"2020–2025",lettersCatSpecial:"Special letters",podcastsTitle:"Celebrity podcasts",podcastsLead:"Notable investor and host frameworks from public interviews and podcasts: scannable theses, US/TW separation, candidate status labeled — not investment advice.",podcastsDisclaimer:"Not investment advice. Drawn from public interviews and existing research-library entries; figures cite sources. Math-gate-closed items stay candidate / watch only.",podcastsFeatured:"Featured",podcastsStubBadge:"Candidate stub",podcastsGodzillaHandle:"Godzilla · @godzilla.us",podcastsGooayeTitle:"Gooaye (Hsieh Meng-kung)",podcastsGooayeLead:"Taiwan markets / macro / risk / retail psychology podcast; per-episode key points from public RSS show notes (not transcripts; not investment advice).",podcastsGooayeMarket:"TW-focused · US/TW separate",podcastsGooayeStubNote:"Lightweight stub: full entry and computable packs live in Research. No invented episode quotes here.",podcastsGooayePoint1:"Risk and sizing first, ticker stories second",podcastsGooayePoint2:"Treat the semiconductor chain as a basket — not one hero name",podcastsGooayePoint3:"US: rate path as risk-on proxy; TW scored separately",podcastsGotoResearch:"Open full entry in Research",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"Categories",podcastsCategories:"Celebrity podcast categories",podcastsMenuLead:"Pick a category first — long essays stay off the landing page.",podcastsOpenCategory:"Open category",gooayeLibraryBadge:"Episode library",gooayeDisclaimer:'Candidate / watch; math gate closed. "Listened" = stock analysis after public audio download + speech-to-text. "Show notes only" = RSS teasers, not listened. Host views; not investment advice.',gooayeLoading:"Loading Gooaye episodes…",gooayeLoadError:"Could not load episode library ({msg})",gooayeEpisodeCount:"{n} episodes (public RSS)",gooayeAsOf:"As of {date} (Taipei)",gooayeEmptyCount:"{n} episode(s) lack usable public text (title listed only)",gooayeSearchLabel:"Search episodes",gooayeSearchPlaceholder:"Title, episode no., or keyword",gooayeSourceLine:"Source:",gooayeKeyPoints:"Key points",gooayeNotesThin:"Public show notes are essentially title-only; nothing further to summarize.",gooayeTeaserNote:"Public show notes are thin (often a short hook plus ads). Above is only usable public text — no audio listen, nothing invented.",gooayeListen:"Listen (SoundOn)",gooayeLoadMore:"Show {n} more ({left} left)",gooayeShowingAll:"Showing all {n} episodes",gooayeNoResults:"No matching episodes.",gooayeUntitled:"Untitled episode",gooayeBadgeListened:"Listened",gooayeBadgeRssOnly:"Show notes only",gooayeStockAnalysis:"Stock analysis (listened)",gooayeRssTeaserToggle:"Public show notes (RSS)",gooayeListenedAt:"Listened {date} (Taipei)",gooayeListenedCount:"{n} listened",gooayeRssOnlyNote:"Audio not reviewed yet; above is public RSS / show notes only — not listened analysis.",podcastsXiaojunTitle:"Zhang Xiaojun jùn — Business Interviews",podcastsXiaojunHandle:"Zhang Xiaojun · long-form business / tech interviews",podcastsXiaojunLead:"Long-form interviews with China tech and business figures. Catalog from the public RSS. Episodes marked Listened add stock/industry notes (candidate/watch; not advice).",podcastsXiaojunMarket:"China tech focus · cross-market watch",podcastsXiaojunApple:"Listen on Apple Podcasts",xiaojunLibraryBadge:"Episode library",xiaojunDisclaimer:"Candidate/watch; math gate closed. Listened: public audio + speech-to-text, then stock/industry notes. Show notes only: RSS text, not listened. Host views; not investment advice.",xiaojunLoading:"Loading Xiaojun episode library…",xiaojunLoadError:"Could not load episode library ({msg})",xiaojunEpisodeCount:"{n} episodes (public RSS)",xiaojunAsOf:"As of {date} (Taipei)",xiaojunEmptyCount:"{n} episodes have little public text (title only)",xiaojunSearchLabel:"Search episodes",xiaojunSearchPlaceholder:"Title, number, or keyword",xiaojunSourceLine:"Source:",xiaojunKeyPoints:"Key points",xiaojunNotesThin:"Public show notes are mostly a title/short phrase.",xiaojunTeaserNote:"Public RSS / show notes only — audio not reviewed; nothing invented.",xiaojunListen:"Listen on Apple Podcasts",xiaojunLoadMore:"Show {n} more ({left} left)",xiaojunShowingAll:"Showing all {n} episodes",xiaojunNoResults:"No matching episodes.",xiaojunUntitled:"Untitled episode",xiaojunBadgeListened:"Listened",xiaojunBadgeRssOnly:"Show notes only",xiaojunStockAnalysis:"Stock / industry notes (listened)",xiaojunRssTeaserToggle:"Public show notes (RSS)",xiaojunListenedAt:"Listened {date} (Taipei)",xiaojunListenedCount:"{n} listened",xiaojunRssOnlyNote:"Audio not reviewed; above is public RSS / show notes only.",podcastsWhynottvTitle:"WhynotTV Podcast",podcastsWhynottvHandle:"Tairan He · AI / robotics long-form",podcastsWhynottvLead:"Long-form AI, robotics, and research-startup interviews. Catalog from the public Anchor RSS. Listened episodes add industry notes (candidate/watch; not advice).",podcastsWhynottvMarket:"AI / robotics & research startups · cross-market watch",podcastsWhynottvApple:"Listen on Apple Podcasts",whynottvLibraryBadge:"Episode library",whynottvDisclaimer:"Candidate/watch; math gate closed. Listened: public audio + speech-to-text, then industry notes. Show notes only: RSS text, not listened. Host views; not investment advice.",whynottvLoading:"Loading WhynotTV episode library…",whynottvLoadError:"Could not load episode library ({msg})",whynottvEpisodeCount:"{n} episodes (public RSS)",whynottvAsOf:"As of {date} (Taipei)",whynottvEmptyCount:"{n} episodes have little public text (title only)",whynottvSearchLabel:"Search episodes",whynottvSearchPlaceholder:"Title, number, or keyword",whynottvSourceLine:"Source:",whynottvKeyPoints:"Key points",whynottvNotesThin:"Public show notes are mostly a title/short phrase.",whynottvTeaserNote:"Public RSS / show notes only — audio not reviewed; nothing invented.",whynottvListen:"Listen on Apple Podcasts",whynottvLoadMore:"Show {n} more ({left} left)",whynottvShowingAll:"Showing all {n} episodes",whynottvNoResults:"No matching episodes.",whynottvUntitled:"Untitled episode",whynottvBadgeListened:"Listened",whynottvBadgeRssOnly:"Show notes only",whynottvStockAnalysis:"Stock / industry notes (listened)",whynottvRssTeaserToggle:"Public show notes (RSS)",whynottvListenedAt:"Listened {date} (Taipei)",whynottvListenedCount:"{n} listened",whynottvRssOnlyNote:"Audio not reviewed; above is public RSS / show notes only.",podcastsZhangJunanTitle:"Zhang Junan",podcastsZhangJunanHandle:"et220870 · Blogspot / PTT",podcastsZhangJunanLead:"Public blog and PTT posts: performance reviews, trading discipline, broker/mortgage logistics, early trade logs. “Analyzed” means full public text was read; “Title only” means the body is unavailable. Candidate/watch — not advice.",podcastsZhangJunanMarket:"TW equities / trading practice · personal review",zhangJunanLibraryBadge:"Library",zhangJunanDisclaimer:"Candidate/watch; math gate closed. “Analyzed”: read public blog/PTT text (+ comments) then wrote market notes. “Title only”: public body missing/deleted. Author’s views; not advice. Not added to pick lists.",zhangJunanLoading:"Loading Zhang Junan library…",zhangJunanLoadError:"Could not load library ({msg})",zhangJunanPostCount:"{n} posts (public lists)",zhangJunanAsOf:"As of {date} (Taipei)",zhangJunanAnalyzedCount:"{n} analyzed",zhangJunanTitleOnlyCount:"{n} title-only (body unavailable)",zhangJunanSearchLabel:"Search posts",zhangJunanSearchPlaceholder:"Title, board, or keyword",zhangJunanSourceLine:"Sources:",zhangJunanKeyPoints:"Notes",zhangJunanStockAnalysis:"Market notes (analyzed)",zhangJunanNotesThin:"Little public text; title and link only.",zhangJunanTitleOnlyNote:"Public body deleted or unreadable; nothing invented.",zhangJunanOpenBlog:"Open original (blog)",zhangJunanOpenPtt:"Open original (PTT)",zhangJunanLoadMore:"Show {n} more ({left} left)",zhangJunanShowingAll:"Showing all {n} posts",zhangJunanNoResults:"No matching posts.",zhangJunanUntitled:"Untitled post",zhangJunanBadgeAnalyzed:"Analyzed",zhangJunanBadgeTitleOnly:"Title only",zhangJunanSourceBlog:"Blog",zhangJunanSourcePtt:"PTT",zhangJunanCommentSummary:"Comment takeaway",zhangJunanFilterAll:"All",zhangJunanFilterBlog:"Blog",zhangJunanFilterPtt:"PTT",zhangJunanFilterSeriesAll:"All subcategories",zhangJunanSourceFilters:"Source filters",zhangJunanSeriesFilters:"Subcategory filters",researchCatMenu:"Categories",researchCategories:"Research categories",researchMenuLead:"Pick type, market, or status first, then browse that shelf.",researchOpenCategory:"Open category",researchCatBooks:"Books",researchCatPapers:"Papers",researchCatPodcasts:"Podcasts",researchCatUs:"US focus",researchCatTw:"TW focus",researchCatCandidate:"Candidate",researchCatWatch:"Watch",researchBackMenu:"Back to categories",researchStatusFilters:"Status",godzillaTitle:"Godzilla",godzillaLead:"US-focused notes from Threads interviewee「哥吉拉」: time & health, RSU redeploy, fundamentals, circle of competence, tax pacing, options as tools — plain cards. Not investment advice.",godzillaDisclaimer:"Not investment advice. From a public interview; figures labeled interviewee self-report. Math gate closed — candidate / watch only.",godzillaHeroLabel:"Godzilla framework overview",godzillaKicker:"Candidate framework · US-focused",godzillaTagline:"Trade healthy years for freedom; long stock as core, options as satellite; tax sets rotation pace.",godzillaBadgeCandidate:"Candidate",godzillaBadgeWatch:"Watch",godzillaUsFocus:"US-focused",godzillaSelfReport:"Interviewee self-report",godzillaListenedBadge:"Listened",godzillaStockTitle:"Stock analysis (listened)",godzillaStockLead:"Host/interviewee views from public YouTube audio + speech-to-text (candidate/watch; not advice).",godzillaStock1:"Time and health beat stacking more cash/RSU; money cannot buy time back; retirement targets rise as RSU accrues.",godzillaStock2:"US tech pay is RSU-heavy; rising stock lifts total comp and also single-name concentration risk.",godzillaStock3:"Timing (self-report): early Tesla worked (wishes earlier trim); Meta entered near a softer tape.",godzillaStock4:"Next watch: B2C AI apps. Visible cases cited: Tesla FSD, Palantir; much of AI still B2B. Hardware spend still growing.",godzillaStock5:"Even on NVIDIA, avoid all-in one ticker; US W2/tax planning matters when salary+stock cluster.",godzillaStock6:"TW has no capital-gains tax vs US taxation — liquidity differs; do not copy US playbooks blindly.",godzillaStockNote:"STT: faster-whisper small int8. Public YT source; figures are interviewee views; candidate/watch.",godzillaSourceLabel:"Source",godzillaSourceCite:"Terry × Godzilla",godzillaYoutube:"Watch YouTube interview",godzillaThesesTitle:"Core theses",godzillaThesesLead:"Ten scannable points; details are interviewee self-report.",godzillaThesis1Title:"Time & health over stacking more RSU",godzillaThesis1Body:"Retirement targets inflate (e.g. self-report $30M→$60M USD plus housing/kids); stopping often comes when the body fails. Using healthy 40s for travel/freedom differs from 50–60.",godzillaThesis2Title:"US RSU changes incentives",godzillaThesis2Body:"Four-year vest builds skin in the game vs TW cash bonuses that rarely buy the employer’s stock.",godzillaThesis3Title:"Sell vested RSU same day; redeploy",godzillaThesis3Body:"Sell vested RSU the same day and redeploy to a conviction name (his: NVDA) so salary + unvested aren’t one basket.",godzillaThesis4Title:"Fundamentals only",godzillaThesis4Body:"Revenue/EPS trend; ignore Wall Street targets; news noise mostly hurts.",godzillaThesis5Title:"Circle of competence: hardware/tech",godzillaThesis5Body:"Hardware/tech — NVDA largest; also PLTR, AVGO, TSM; little outside tech. Index sleeve small now; end-state mostly index.",godzillaThesis6Title:"Tax sets the pace",godzillaThesis6Body:"High W2 → heavy capital gains; after leaving the job, multi-year rotate singles → index within acceptable tax; covered calls buffer crashes.",godzillaThesis7Title:"Options as a tool",godzillaThesis7Body:"Mostly seller (CC / CSP); small long calls/LEAPs only in panic or price vs fundamentals divergence; accept total loss of premium; never naked.",godzillaThesis8Title:"Covered call: roll if assignment risk",godzillaThesis8Body:"If assigned risk, roll out in time; don’t exercise/sell core for tiny premium; sell fewer contracts if uncomfortable.",godzillaThesis9Title:"Wait for trend to enter",godzillaThesis9Body:"Wait for 1–2 clean earnings even if cost basis rises; keep buying good firms with spare cash; don’t chase hot tips.",godzillaThesis10Title:"US vs TW observation",godzillaThesis10Body:"US CG tax → hold longer; TW no CG + stamp tax → higher turnover / speculative culture (observation only).",godzillaChecklistTitle:"Method checklist",godzillaChecklistLead:"Self-checks, not an order ticket.",godzillaCheck1:"Low material desire; don’t let the “enough” number keep rising forever.",godzillaCheck2:"Long stock as core; options as satellite / hedge / occasional leverage.",godzillaCheck3:"Position size: no borrowing; if you can’t accept zero, don’t trade options.",godzillaCheck4:"Prefer liquid mega-caps for options.",godzillaCheck5:"End allocation sketch: ~80% broad index, small sleeve for industry (+ occasional small call).",godzillaCheck6:"PLTR example: B2B monetization via forward-deployed engineers; trim if commercial growth disappoints.",godzillaOptionsTitle:"Options usage",godzillaOptionsLead:"Seller-first; longs rare and only on extreme dislocation.",godzillaOpt1:"Core: covered calls and cash-secured puts.",godzillaOpt2:"Small long calls / LEAPs: panic or price vs fundamentals gap.",godzillaOpt3:"Premium can go to zero; never naked.",godzillaOpt4:"Assignment risk: roll out in time; don’t sell core for tiny premium.",godzillaRsuTitle:"RSU, tax & rotation",godzillaRsuLead:"Incentives, diversification, and post-job tax pacing.",godzillaRsu1:"Sell vested RSU same day; redeploy to conviction (e.g. NVDA).",godzillaRsu2:"While employed, avoid large realized gains; after leaving, multi-year singles → index.",godzillaRsu3:"Covered calls as crash buffer — not a directional bet.",godzillaTwTitle:"Taiwan market note",godzillaTwLead:"Separated from the US framework; tax/culture observation only.",godzillaTwBody:"US capital-gains tax encourages longer holds; TW has no CG tax plus stamp tax, so turnover and short-term culture run hotter. This page stays US-focused; TW is contrast only and not wired into the screener.",godzillaGateNote:"Not in the formal screener",godzillaGateDetail:"Status: candidate / strategyCandidate=watch. Math gate CLOSED — not wired into the live screener or paper trading; read-only.",jensenTitle:"Jensen Huang (黃仁勳)",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Notes from a Stanford STVP / Entrepreneurial Thought Leaders talk: perspective, demand & Moore’s law, culture, cash reality, reinvention — candidate / watch. Not investment advice.",jensenDisclaimer:"Not investment advice. From a public Stanford Online talk (~2009; YouTube upload 2011). Themes are speaker self-report. Math gate closed — candidate / watch only.",jensenHeroLabel:"Jensen Huang talk highlights",jensenKicker:"Candidate talk · US tech / semiconductors / company-building",jensenTagline:"Perspective over vague “vision”; culture and reinvention sustain long-horizon company-building.",jensenUsFocus:"US tech-focused",jensenTalkBadge:"Public talk",jensenListenedBadge:"Listened",jensenStockTitle:"Business / stock notes (listened)",jensenStockLead:"From public Stanford ETL talk audio + STT (~2009; historical views, not today's filings). Candidate/watch; not advice.",jensenStock1:"Founding bet (1993): PC + 3D/games as a large market; VCs/parents then doubted starting a company 'for games.'",jensenStock2:"Competition: dozens–hundreds entered consumer 3D; NVIDIA recalls ending as the surviving computer-graphics company — perspective on why the business works (semiconductors / Moore's Law as competition) plus reinvention, not execution alone.",jensenStock3:"Programmable shaders: cannibalized a successful fixed-function franchise; first chip nearly killed the firm, but not doing it would die at Moore's Law speed.",jensenStock4:"Capital allocation: rivals set price; CEO chooses engagement. Weigh scarce resources vs demand and opportunity cost, not just accounting cost.",jensenStock5:"Culture: innovation needs tolerance for calculated failure; a startup is nearly always out of business. General-purpose GPUs (Swiss-army risk) can extend the medium's life.",jensenStock6:"Time stamp: historical talk (pre modern AI-training boom) — do not map 1:1 onto today's datacenter P&Ls. NVIDIA is the speaker's firm; candidate/watch.",jensenStockNote:"STT: faster-whisper small int8 (en). Source YT Xn1EsFe7snQ / Stanford ETL. Historical views.",jensenMeta:"Stanford Online · STVP ETL · ~1:03:38 · uploaded 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"Watch on YouTube",jensenOpenYoutube:"Open full video on YouTube",jensenEmbedTitle:"Jen-Hsun Huang: Stanford student and Entrepreneur (Stanford Online)",jensenEcorner:"Stanford eCorner / STVP related clips",jensenHighlightsTitle:"Talk highlights (plain language)",jensenHighlightsLead:"Five scannable themes drawn only from the public talk — not a transcript.",jensenH1Title:"Perspective, not vague “vision”",jensenH1Body:"Everyone has a perspective. NVIDIA’s early bet: PCs plus cheap 3D would unlock games (later also Keyhole → Google Earth) when the market looked near-zero to many VCs.",jensenH2Title:"Insatiable demand and Moore’s law",jensenH2Body:"Sometimes ignore customers early when they can’t yet price a new category; rinse-and-repeat, then reinvent before “good enough” kills the medium (fixed-function → programmable shaders / GeForce FX near-death, CG language).",jensenH3Title:"Culture: calculated risk-taking",jensenH3Body:"Innovation needs calculated risk, tolerance for failure that fails fast, intellectual honesty, and willingness to change course; passion and purpose over selling-the-company motives.",jensenH4Title:"Cash and startup reality",jensenH4Body:"Always raising, saving, or making money; startups are nearly always near bankruptcy. VCs bet people and a large enough market more than perfect business plans.",jensenH5Title:"Reinvention: tear down success",jensenH5Body:"Every success must eventually be torn down and rebuilt; Huang frames long-horizon company-building, not serial flip exits.",jensenTwTitle:"US / TW separation (context only)",jensenTwLead:"Market focus is US tech / semiconductor company-building; Taiwan appears only as supply-chain context — no invented TW stock picks.",jensenTwBody:"NVDA as a US semiconductor / compute platform sits in a supply chain tightly linked to Taiwan foundry and OSAT ecosystems — industry context only; no TW ticker list and not wired into the screener.",jensenGateNote:"Not in the formal screener",jensenGateDetail:"Status: candidate / strategyCandidate=watch. Math gate CLOSED — not wired into the live screener or paper trading; read-only.",jensenWatchCta:"Watch on YouTube",jensenEmbedBlockedNote:"This talk opens on YouTube — the owner has disabled embedding on other sites.",optionsTitle:"US Options",optionsLead:"McMillan-style strategy families first: volatility + risk shape, then public Yahoo chains for learning — not investment advice.",optionsDisclaimer:"Not investment advice; options involve high risk. Educational public-data screens only — not personalized orders.",optionsBookBadge:"This book",optionsBookCite:"Primary reference",optionsBookLead:"Lawrence G. McMillan Options Strategies Handbook (5th Chinese ed.): map outlook + volatility to strategy families (original summary, not verbatim).",optionsBookFallbackTitle:"McMillan Options Strategies Handbook",optionsGotoResearch:"Open full entry in Research",optionsUsOnly:"US only",optionsQualityTitle:"Light underlying quality check",optionsQualityLead:"Secondary filter: PE, PB, debt, ROE, revenue/earnings trend. Missing fields omitted — not stock tips.",optionsViewTitle:"Options view (McMillan)",optionsViewLead:"Public chain: ATM IV, historical vol, volume skew; strategy families are educational.",optionsMcmillanFirst:"Align volatility regime and risk shape before picking a family — do not force a view.",optionsPe:"P/E",optionsPb:"P/B",optionsDebt:"Debt/Equity",optionsRoe:"ROE",optionsRevTrend:"Revenue trend",optionsEarnTrend:"Earnings trend",optionsGate:"Quality gate",optionsGatePass:"Pass",optionsGateWatch:"Watch",optionsGateFail:"Weak",optionsGateIncomplete:"Incomplete",optionsDataMissing:"Data unavailable",optionsForwardPe:"fwd P/E",optionsTrendUp:"Up ~{pct}%",optionsTrendDown:"Down ~{pct}%",optionsTrendFlat:"Flat ~{pct}%",optionsAtmIv:"ATM implied vol",optionsHv:"Historical vol (~1m)",optionsIvHv:"IV / HV",optionsVolRegime:"Vol regime",optionsRegimeIvRich:"IV rich",optionsRegimeIvCheap:"IV cheap",optionsRegimeIvFair:"Roughly fair",optionsRegimeIvOnly:"IV only",optionsCallPutVol:"Call / put volume",optionsAtmStrike:"Near ATM strike",optionsExpiry:"Expiry",optionsSkewPutHeavy:"Put volume heavier",optionsSkewCallHeavy:"Call volume heavier",optionsSkewBalanced:"Volumes roughly balanced",optionsEduSetups:"Strategy families (edu)",optionsEduSetupsLead:"Pick a family from outlook + vol regime; green cards often match current IV/HV (still not advice).",optionsSetupCoveredCall:"Covered call",optionsSetupCoveredCallBody:"Own shares and sell a call for premium; upside is capped at the strike.",optionsSetupCoveredCallWarn:"Profit ceiling; share downside remains.",optionsSetupProtectivePut:"Protective put",optionsSetupProtectivePutBody:"Own shares and buy a put as insurance: downside floor, but you pay a premium.",optionsSetupProtectivePutWarn:"Insurance cost reduces returns; richer IV makes it costlier.",optionsSetupVertical:"Vertical spread",optionsSetupVerticalBody:"Same expiry, different strikes — boxes max gain/loss into a known range.",optionsSetupVerticalWarn:"Wrong direction still loses; loss is capped.",optionsSetupCalendar:"Calendar / diagonal",optionsSetupCalendarBody:"Different expiries to express time decay or vol-change views.",optionsSetupCalendarWarn:"Sensitive to vol and time; shape shifts as spot moves.",optionsSetupStraddle:"Straddle / strangle",optionsSetupStraddleBody:"Long or short both sides to bet on a big move — or that vol is overpriced.",optionsSetupStraddleWarn:"Buyers need a large move; sellers face two-sided risk.",optionsSetupButterfly:"Butterfly",optionsSetupButterflyBody:"Multi-strike structure betting price pins near the body; profit zone is narrow.",optionsSetupButterflyWarn:"Sweet spot is thin; miss it and you near max loss.",optionsSetupVolAligned:"Often discussed with current vol regime",optionsSetupVolNotAligned:"Less aligned with current vol (still fine to learn)",optionsRiskShape:"Risk shape (plain)",optionsNoSetups:"No strategy notes yet",optionsPickTicker:"Pick a US ticker above",optionsChainBlocked:"Options chain temporarily unavailable",optionsPartialBlocker:"Some fields incomplete",optionsRefreshHow:"Data updates with the site; try again shortly if something looks off.",optionsLoadError:"Could not load options snapshot ({msg})",optionsEmpty:"No US sample yet — run fetch-us-options first",optionsGlossaryTitle:"Tiny glossary (no formulas)",optionsTermDelta:"Delta (direction feel)",optionsDefDelta:"How much the option tends to move when the stock moves. Closer to 1 or −1 means tighter tracking.",optionsTermIv:"Implied volatility (IV)",optionsDefIv:"What the market is pricing for future wobble — higher usually means pricier options.",optionsTermHv:"Historical volatility (HV)",optionsDefHv:"How much the stock actually moved recently — compare with IV.",optionsTermAtm:"ATM (near the money)",optionsDefAtm:"Strike closest to spot; a common volatility thermometer.",optionsTermSkew:"Volume skew",optionsDefSkew:"Whether calls or puts traded more — a coarse insurance vs chase hint.",optionsTermProb:"Probability (edu)",optionsDefProb:"Talk in ‘more/less common’ intuition only — no guaranteed outcomes or personal odds.",researchLead:"Books & papers: title → summary → key takeaways → strategy candidacy",researchMathGateBanner:"Formal strategy adoption requires the math gate (not passed yet) — candidates only",researchMathGate:"Math gate",researchMathGateDefault:"Math gate not passed",researchFormulas:"Programmable formulas",researchTakeaways:"Key takeaways",researchNoTakeaways:"No takeaways listed",researchSources:"Sources",researchFilters:"Filters",researchFilterAll:"All",researchType:"Type",researchTypeBook:"Books",researchTypePaper:"Papers",researchTypePodcast:"Podcasts",researchMarketBoth:"US+TW",researchStrategy:"Strategy candidate",researchCandYes:"Yes",researchCandNo:"No",researchCandWatch:"Watch",researchStatusCandidate:"Candidate",researchStatusDeferred:"Deferred",researchStatusAdopted:"Adopted",researchStatusRejected:"Rejected",researchCounts:"{books} books · {papers} papers · {podcasts} podcasts · showing {total}",researchEmpty:"No items match this filter",researchNoFormulas:"No formulas listed",researchLoadError:"Failed to load research library ({msg})",researchShelfFilters:"Shelves",researchShelfCoreInvesting:"Core investing classics",researchShelfValueInvesting:"Value investing",researchShelfBusiness:"Business & management",researchShelfLifePartner:"Life & partner wisdom",researchShelfOptions:"Options / derivatives",researchShelfRecentReads:"Recent reads & picks",researchShelfFiConcepts:"Must-read FI concepts",researchShelfMoneyValues:"Money values & mindset",researchShelfInvestingBasics:"Investing basics",researchShelfAssetAllocation:"Asset allocation",researchShelfFinancials:"Financial statement analysis",researchShelfMarketAnalysis:"Market analysis & edge",researchShelfEconAnalysis:"Economic analysis",researchShelfPsych:"Psychology / randomness / human nature",researchShelfBiographies:"Biographies",researchShelfAdjacent:"Other / adjacent",todayPicks:"Today's picks",market:"Market",hot:"Markets",marketQuotes:"Market quotes",macroTitle:"US market movers",macroTzEt:"Times · US ET",macroAsOf:"Updated",macroStale:"Stale (showing last successful fetch)",macroToday:"Today",macroNext:"Next",macroHighImpact:"High impact",macroEmpty:"No high-impact US events nearby (or data not refreshed yet)",macroLoadError:"Could not load US market movers ({msg})",liveQuotesLive:"Live",liveQuotesStale:"Quotes stale (showing last success)",liveQuotesStaleShort:"Stale",liveQuotesPending:"Connecting live quotes…",liveQuotesClock:"Quotes",macroEvent_fomcDecision:"FOMC decision",macroEvent_fomcMinutes:"FOMC minutes",macroEvent_cpi:"CPI",macroEvent_ppi:"PPI",macroEvent_pce:"PCE / Core PCE",macroEvent_nfp:"Nonfarm payrolls",macroEvent_joblessClaims:"Jobless claims",macroEvent_gdp:"GDP",macroEvent_retailSales:"Retail sales",macroEvent_ismMfg:"ISM Manufacturing",macroEvent_ismServices:"ISM Services",macroEvent_jolts:"JOLTS",twMacroTitle:"TW market movers",twMacroTz:"Times · Taipei",twMacroEmpty:"No high-impact TW events nearby (or data not refreshed yet)",twMacroLoadError:"Could not load TW market movers ({msg})",twMacroEvent_cbcDecision:"CBC policy meeting",twMacroEvent_dgbasCpi:"CPI",twMacroEvent_dgbasPpi:"PPI / price indices",twMacroEvent_dgbasUnemployment:"Unemployment",twMacroEvent_dgbasGdpFlash:"GDP flash",twMacroEvent_dgbasGdp:"GDP / growth",twMacroEvent_dgbasForecast:"Economic forecast",twMacroEvent_moeaExportOrders:"Export orders",twMacroEvent_moeaIndustrialProd:"Industrial production",twMacroEvent_twseHoliday:"TWSE holiday",usStock:"US",twStock:"TW",usList:"US list",twList:"TW list",usTop:"US Top",twTop:"TW Top",emptyTop:"No Top picks for {market}",ticker:"Ticker",name:"Name",price:"Price",dayPct:"Day %",rs:"RS",priorClose:"Prior close",priorCloseFull:"Prior-close %",pct5d:"5D",pct1m:"~1M",volRatio:"Vol ratio",ma:"MAs",screening:"Screen",reason:"Why",details:"Details",business:"Business",risk:"Risk",observe:"Watch",dataIncomplete:"Incomplete",intraday:"Intraday",taipeiClose:"Taipei close",taiex:"TAIEX",otc:"OTC",loadError:"Failed to load data ({msg}). Serve statically with data/latest.json present.",langLabel:"Language",paper:"Paper",paperMissing:"No paper portfolio file. Run npm run paper in the project.",paperDisclaimer:"Cumulative paper account (since {date}) · not reset daily · fills on signal · not real orders",paperRules:"Rules (separate books per market)",paperRuleTw:"TW principal NT$3,000,000 · round lots",paperRuleUs:"US principal US$100,000 · from 1 share",paperRuleBuy:"Buy: list · 1% risk · 1.5% stop · ≤8% per name · immediate fill",paperRuleSell:"Sell: −3% stop · +12% half take-profit · below SMA20 & day <−2% · off-list & losing · limit-up next-day −5%",paperTabTw:"TW book · NT$",paperTabUs:"US book · US$",paperBookTw:"TW book (NT$)",paperBookUs:"US book (US$)",principal:"Principal",cash:"Cash",equity:"Equity (positions + cash)",totalPnl:"Total P&L",totalPnlPct:"Total P&L %",weekPerf:"Week",monthPerf:"Month",quarterPerf:"Quarter",yearPerf:"Year",sinceInception:"Since inception",noTradesToday:"No trades of this type today (paper)",noPositions:"No open positions",buy:"Buy",sell:"Sell",shares:"sh",qtyShares:"Shares",positions:"Positions",position:"Position",avgCost:"Avg cost",mark:"Mark",mktValue:"Mkt value",dayPnl:"Day P&L",costBasis:"Cost basis",weightPct:"Weight %",posScrollHint:"Swipe for all columns",unrealizedPnl:"Unrealized P&L",unrealizedPct:"Unrealized %",recentTrades:"Trades (last 40)",paperSession:"{date} · since {inception} · fills on signal",reasonScreenBuy:"New from list",reasonAdd:"Add",reasonStop:"Stop-loss",reasonTakeProfit:"Take-profit",reasonMomentumBreak:"Momentum break",reasonOffList:"Off list",reasonLimitUpChase:"Limit-up chase unwind",paperRuleOpt:"US book: paper single-leg calls/puts; premiums from public chain ×100; settle to intrinsic at expiry",paperRuleTxf:"TW book: paper TX/MTX; P&L = points × official multiplier (TX 200 / MTX 50) × contracts; margin = TAIFEX public initial",paperDerivUsTitle:"US options (paper)",paperDerivUsLead:"Buy/sell single-leg calls/puts. Premiums from the public chain only — never invented. Cash debit/credit updates this book.",paperDerivServerBook:"Site-wide paper book (every device, not phone-only storage).",paperDerivTwTitle:"TAIEX futures TX/MTX (paper)",paperDerivTwLead:"Prices from the 台指期 desk (session {session}). Long/short contracts; P&L = points × multiplier × size (TWD).",paperDerivFreeCash:"Free cash (this book)",paperDerivOptMv:"Options MTM",paperDerivMarginHold:"Margin hold",paperDerivUnderlying:"Underlying",paperDerivRight:"Call / Put",paperDerivStrike:"Strike",paperDerivPremium:"Premium",paperDerivCashImpact:"Cash impact",paperDerivFutCode:"Contract",paperDerivMonth:"Month",paperDerivNear:"Near",paperDerivNext:"Next",paperDerivContract:"Contract",paperDerivContracts:" ct",paperDerivLong:"Long",paperDerivShort:"Short",paperDerivMarkSrc:"Mark source",paperDerivLastDay:"Last trade day",paperDerivMarginNote:"Paper margin: TAIFEX public initial margin × contracts held from cash — not a live broker order.",paperDerivNoOptPos:"No option positions yet",paperDerivNoFutPos:"No TX/MTX positions yet",paperDerivNoChain:"No public options chain with premiums (paperChain) available",paperDerivNoPremium:"No public premium for this strike",paperDerivNoTxf:"Missing 台指期 desk (public/data/txf-desk.json)",paperDerivNoMonth:"Desk has no quote for that month",paperDerivNoFutPrice:"No public futures last/settle price",paperDerivNoMargin:"Desk missing official initial margin",paperDerivBadRight:"Pick Call or Put",paperDerivBadQty:"Size must be a positive integer",paperDerivBadSide:"Invalid buy/sell side",paperDerivBadCode:"TX / MTX only",paperDerivBadMult:"Multiplier mismatch vs official spec — blocked",paperDerivExpiryMismatch:"Expiry does not match public chain",paperDerivNeedCash:"Not enough cash (need ~{need})",paperDerivNeedMargin:"Not enough margin cash (need ~{need})",paperDerivMathBlock:"Math guard blocked non-finite write",paperDerivFail:"Order failed",paperDerivFillOk:"Filled @ {px}",paperDerivUserOpen:"Paper open",paperDerivUserClose:"Paper close",paperDerivExpirySettle:"Expiry settle to intrinsic",paperDerivFutSettle:"Post last-trade-day close at settle/last",paperDerivStrategy_covered_call:"Covered call",paperDerivStrategy_protective_put:"Protective put",paperDerivStrategy_long_call:"Long call",paperDerivStrategy_long_put:"Long put",paperDerivStrategy_short_call:"Short call",paperDerivStrategy_short_put:"Short put",stopLoss:"Stop-loss",takeProfit:"Take-profit",paperTrade:"Paper",realizedPnl:"Realized P&L",sessionRealizedPnl:"Session sell realized total",costMissing:"Cost basis missing",costMissingCount:"{n} sell(s) missing cost",realizedOpenOnly:"Still open (unrealized)",paperDerivFills:"Derivative fills",tradeDate:"Date",periodPerf:"Performance",qty:"Qty",note:"Note",strategyScreen:"Strategy screener",strategyLead:"US / TW hits viewed separately · public data first",strategyLoading:"Loading strategies…",strategyEmpty:"No strategy data. Run npm run strategies.",strategyLoadError:"Failed to load strategies ({msg}). Run npm run strategies.",strategyList:"Strategies",strategyCat:"Categories",hitCount:"hits",hitTitle:"Hit count",strategyDetails:"Details · strategy notes",conditions:"Conditions",results:"Results",copyJson:"Copy JSON",exportCsv:"Export CSV",exportJson:"Export JSON",copied:"Copied",noHitsExport:"No hit rows to export for this strategy today",incomplete:"N/A",hitsTotal:"{n} hits",twOnlyHint:"TW only",hitMarket:"Hit market",noHits:"No hits today",dataInsufficient:"Insufficient data",calibTitle:"Calibration",incompleteFilters:"Unchecked filters (not counted): ",sessionTwse:"TWSE session",ohlcvBar:"OHLCV bar",generated:"Generated",universeTw:"TW universe",universeUs:"US universe",cat精選:"Featured",cat價量:"Price/Vol",cat籌碼:"Flow",cat財務:"Fundamentals",cat大師:"Masters",cat週期:"Cycle",cat技術:"Technical",cat基本:"Fundamentals",cat綜合:"Composite",addWatchlist:"Watchlist",watchlistAdded:"Added {ticker}",watchlistExists:"{ticker} already watched",copyFailed:"Copy failed — select manually",csvDownloaded:"CSV downloaded",csvBlocked:"Download blocked — opened data URI",backtestSoon:"Backtest: not open",backtestHint:"Backtest engine/data not available (no fake results)",regimeToday:"Today's market regime (US / TW separate)",psychologyPhase:"Psychology phase",cycleStance:"Cycle stance",liquidityBias:"Liquidity bias",temperatureScore:"Temperature score",sizeMult:"Size mult",regimeTags:"Regime tags",dataGaps:"Data gaps",marketRegime:"Market regime",enum_euphoric:"Euphoric",enum_late_optimism:"Late optimism",enum_mid_cycle:"Mid-cycle",enum_cautious_recovery:"Cautious recovery",enum_despondent:"Despondent",enum_panic:"Panic",enum_defensive:"Defensive",enum_selective:"Selective",enum_balanced:"Balanced",enum_constructive:"Constructive",enum_aggressive:"Aggressive",enum_stabilize_first:"Stabilize first",enum_risk_off:"Risk-off",enum_risk_on:"Risk-on",enum_neutral:"Neutral",logicTitle:"Selection logic",logicSubtitle:"Regime → screens → strategies → demotions → why → sizing — auditable math",logicNoRegime:"No market-regime data yet (await next scan).",logicStep1:"Market regime",logicStep1Lead:"Set US/TW dials first, then screen names. Kostolany phase × Marks temperature × rates liquidity.",logicStep1Caption:"Phase → screen stance → size multiplier (STANCE_SIZE_MULT)",logicRatesR2:"R2: ^TNX +0.25pp / 20d → defensive liquidity bias (even if price mid-cycle).",logicRatesR3:"R3: yields ≤ −0.25pp / 60d → allow more aggressive dial (if not Euphoric).",logicRatesSeparate:"Hard rule: dial_US and dial_TW stay separate — never one “world mood”.",logicStep2:"Math screens (A / B)",logicStep2Lead:"RS, momentum, SMA, volume — thresholds shift with cycle stance.",logicScreenA:"Screen A · momentum / RS",logicScreenABalanced:"Balanced: day RS≥0.5pp or day≥1.5%; or 5d≥3%; or 1m≥6% & >SMA20; or both MAs with 5d≥0 / RS≥0.",logicScreenASelective:"Selective: >SMA50 and (RS≥0.5 or 5d≥3% or 1m≥6% & >SMA20).",logicScreenADefensive:"Defensive: >SMA20+SMA50 and (RS≥0.8 or 5d≥4%) and vol≥1.0 (null vol OK); 1m≥12% & vol<0.8 → reject.",logicScreenAAggressive:"Aggressive / Constructive: looser RS/day/5d/1m; allow firm-hands below SMA50 if >SMA200 (1m<0 & vol≥1.4). Constructive also needs SMA20 or SMA200.",logicScreenAStabilize:"Stabilize first: must >SMA20 and (RS≥1.0pp or vol≥1.5).",logicScreenB:"Screen B · volume",logicScreenBVol:"Vol ratio = today / 20d avg. Floors: Defensive ≥1.0; Aggressive ≥1.1; else ≥1.2.",logicScreenBMom:"A backfill: if A missed but 1m≥8% & >SMA20+SMA50 (not Stabilize first) → tag A.",logicScore:"Ranking score",logicScoreFormula:"score = dayRS×2 + 5d%×0.35 + 1m%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"vol≥1.2 adds (cap ~8×0.6); vol<0.4 −0.5; then score adjust by regime.",logicStep3:"XQ strategies",logicXqLead:"Parallel to daily lists: condition hits (price/vol, flow, fundamentals, masters, cycle). Missing fields → insufficient — never invented.",logicXqPriceVol:"Price/vol: MA bull stack, ultra-short, etc. (OHLCV).",logicXqFlow:"Flow: institutional sync (public share-unit thresholds).",logicXqFund:"Fundamentals: earnings uptrend, PE / margins from public filings.",logicXqMasters:"Masters: Lynch / Graham / Buffett-style computable proxies.",logicXqCycle:"Cycle: Kostolany / regime pack keyed to today’s US·TW dials.",logicOpenStrategies:"Open Strategies",logicStep4:"Ranking demotions / boosts",logicStep4Lead:"scoreAdjust: thin high-RS, firm-hands, and panic reclaim change the score.",logicDemoteHot:"Defensive/Selective: 1m≥8% & vol<0.8 → −2.5; vol<0.7 & day>2% → −1.2; missing dual MA −1.5.",logicDemoteThin:"K5: strong RS on thin volume → demote / keep out of aggressive bucket.",logicPromoteFirm:"aggressive/constructive: weak price + rising vol + >SMA200 (firm-hands) → +2.2; early up-day volume +1.0.",logicDemotePanic:"stabilize_first: base −3; +1.5 only if >SMA20.",logicListSize:"List length: Defensive ~0.55×; Selective ~0.75×; Stabilize first ~0.45×; Aggressive +2 (cap 14); base 12.",logicStep5:"How “Why” is built",logicStep5Lead:"The why field is a readable join of verified fields — not a black box.",logicWhyRs:"Day % + vs index (US: S&P; TW: TAIEX) in pp.",logicWhyMom:"5-day % and ~1-month %.",logicWhyVol:"Volume sentence only if vol_ratio ≥ 1.2.",logicWhySma:"SMA20 / 50 / 200 status (dual-MA preferred).",logicWhyRegime:"Append a regime note or stance / psychology-phase tags.",logicStep6:"Paper sizing discipline",logicStep6Lead:"Paper books validate process — not live orders. Size constrained by regime size mult + fixed risk math.",logicPaperCapital:"Capital: TW NT$3,000,000 (round lots); US US$100,000 (from 1 share).",logicPaperBuy:"Buy: list (observe-only avoided); risk = equity×1%; stop≈price×1.5% (vol≥3 → 2.5%); per name ≤8% equity.",logicPaperSizeMult:"Size multiplier (0.3–1.35×) tags day’s aggressiveness; linked to list length.",logicPaperSell:"Sell: stop −3%; take-profit +12% half; below SMA20 & day <−2%; off-list & losing; limit-up chase next-day −5%.",logicOpenPaper:"Open Paper",logicFootnote:"Framework synthesis for transparent screening — not investment advice. Public operational proxies only; no copyrighted book text.",condPass:"Cond.",condFail:"Fail",condSkip:"Skip",pe:"P/E",opMargin:"Op. margin",grossMargin:"Gross margin",foreignInv:"Foreign",trustInv:"Trust",dealerInv:"Dealer",maBull:"MA bull stack",amplitude:"Range",zhang:"lots",limitUp:"Limit-up",momentum:"Momentum",metricPrice:"Price",metricDayPct:"Day %",metricVolRatioYday:"Vol ratio (yday)",metricVolToday:"Vol (lots)",metricDebt:"Debt %",metricDirector:"Insider %",metricOpQ:"Op. margin (q)",metricSource:"Source",foreign1d:"Foreign 1d (lots)",trust1d:"Trust 1d (lots)",dealer1d:"Dealer 1d (lots)",foreign5d:"Foreign 5d (lots)",trust5d:"Trust 5d (lots)",dealer5d:"Dealer 5d (lots)"},On={..._t,siteTitle:"每日数学选股",loading:"加载中…",disclaimer:"投资涉及风险，信息仅供参考，非投资建议",footer:"投资涉及风险，信息仅供参考，非投资建议",dataAsOf:"数据",taipei:"（台北）",navMain:"主导航",navToday:"今日",navStrategies:"策略",navPaper:"模拟",navMore:"更多",navMoreClose:"关闭",navLogic:"逻辑",researchTitle:"研究",navResearch:"研究",navOptions:"期权",navEarnings:"读财报",earningsTitle:"读财报",earningsLead:"美股 Magnificent 7 与高关注财报摘要：公司在做什么、关键数字、下一步看什么——白话、每日更新，非投资建议。",earningsDisclaimer:"非投资建议。数字来自公开 Yahoo Finance；缺栏标「资料不足」，不构成个性化投资建议。",earningsUsFocus:"以美股为主",earningsTwStub:"台股财报稍后开放（规划中）",earningsSelectionTitle:"关注名单规则：",earningsSelectionFallback:"市值最大且未来 14 日内有财报的非 Mag7 大型股；或 Yahoo 热门成交；不足则以 45 日内行事历亮点补齐。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——上次财报与下次日期（已知时）。",earningsMag7Badge:"Mag7",earningsHotTitle:"高关注／热门财报",earningsHotLead:"依上方规则挑选；标签说明为何入选。",earningsHotEmpty:"目前窗口内暂无符合条件的标的（或资料不足）",earningsWhatItDoes:"这家公司在做什么",earningsWhatToWatch:"下一步看什么",earningsNextDate:"下次财报",earningsLastEps:"上次 EPS",earningsRevYoy:"营收 YoY",earningsEpsYoy:"获利 YoY",earningsPe:"市盈率",earningsForwardPe:"预估市盈率",earningsEstimate:"预估",earningsDataMissing:"资料不足",earningsTagPrimary:"14 日内・大型",earningsTagActives:"热门成交・14 日内",earningsTagRecent:"近日已公布",earningsTagFallback:"45 日行事历亮点",earningsTagOther:"关注",earningsPartialBlocker:"部分资料受阻",earningsRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",earningsLoadError:"无法载入财报摘要（{msg}）",earningsEmpty:"财报摘要整理中，请稍后再看。",navLookup:"查股",lookupTitle:"查股／个股",lookupLead:"输入美股或台股代码，查看公司简介、报价、财报要点与官方财报链接——白话整理；行情来自 Yahoo，官方申报连至 SEC／公开资讯观测站。非投资建议。",lookupDisclaimer:"非投资建议。行情数字来自公开 Yahoo Finance；官方财报链接连至 SEC EDGAR／公开资讯观测站。缺栏不显示、不编造。即时抓取可能受网络或来源限制。",lookupInputLabel:"股票代码",lookupPlaceholderUs:"例如 AAPL",lookupPlaceholderTw:"例如 2330 或 2330.TW",lookupHintUs:"美股：输入代号如 AAPL、MSFT、NVDA",lookupHintTw:"台股：四码代号如 2330（自动加 .TW；上柜可试 .TWO）",lookupSearch:"查询",lookupIdle:"输入代码后按查询，即可查看报价与财报摘要。",lookupLoading:"正在向 Yahoo Finance 抓取…",lookupEmptyInput:"请输入股票代码",lookupInvalid:"代码格式无法辨识。美股如 AAPL；台股如 2330 或 2330.TW",lookupNotFound:"找不到此代码的报价。请确认市场分页（美股／台股）与代码是否正确。",lookupError:"查询失败（{msg}）",lookupBusiness:"公司在做什么",lookupQuoteStats:"报价与关键数据",lookupFinancials:"财务摘要",lookupEarnings:"财报要点",lookupPrevClose:"前收",lookupVolume:"成交量",lookupDayRange:"今日区间",lookup52w:"52 周高低",lookupMarketCap:"市值",lookupEps:"每股盈余",lookupBeta:"Beta",lookupDivYield:"殖利率",lookupRevenue:"营收",lookupGrossMargin:"毛利率",lookupProfitMargin:"净利率",lookupEpsConsensus:"预估 EPS",lookupEpsSurprise:"EPS 惊喜",lookupSources:"来源",lookupPartial:"部分进阶栏位暂无法取得（已显示可得数字，未编造）。",lookupOfficialFilings:"官方财报",lookupOfficialFilingsLead:"以下链接通往官方申报与公开资讯；美股可另列近期 10-K／10-Q／8-K（公开可抓取时）。数字不编造。",lookupSourceOfficial:"官方来源",lookupSourceQuote:"行情来源",lookupSourceCompany:"公司网站",lookupSecEdgarSearch:"SEC EDGAR 公司申报查询",lookupSecEdgarBrowse:"SEC EDGAR 公司浏览页",lookupSecFormsFilter:"SEC 10-K／10-Q 等年季报筛选",lookupMopsFinancialBook:"公开资讯观测站｜财务报告书",lookupMopsFinancialQuery:"公开资讯观测站｜财务报告查询页",lookupMopsCompany:"公开资讯观测站｜公司基本资料",lookupMopsMaterial:"公开资讯观测站｜重大讯息",lookupTwseIsin:"证交所 ISIN／基本资料查询",lookupTpexCompany:"柜买中心｜公司资料",lookupYahooTwQuote:"Yahoo 股市（行情，非正式财报）",lookupCompanyWebsite:"公司官网",lookupInvestorRelations:"投资人关系／IR（公开资料）",lookupRecentFilings:"近期官方申报",lookupFilingForm:"表单",lookupFilingDate:"申报日",lookupFilingDoc:"文件",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"近期申报清单暂时无法载入（网络或来源限制）。",lookupFilingsListEmpty:"目前没有可列示的近期 10-K／10-Q／8-K。",lookupFilingsLinksStillWork:"上方官方链接仍可开启查阅。",lookupFilingsTwNote:"台股请以公开资讯观测站（MOPS）为官方财报来源；下方亦附行情页供对照。",lookupFilingsCikUnavailable:"尚无法对应 SEC CIK；仍可通过上方 EDGAR 以代号查询。",navSoxl:"SOXL",soxlTitle:"SOXL 半导体杠杆",soxlLead:"Direxion 每日半导体多头 3 倍 ETF：最新报价、异常／事件、相关新闻，以及 SEC N-PORT 持股权重与估算贡献——白话整理，非投资建议。",soxlDisclaimer:"非投资建议。SOXL 为约 3 倍日杠杆 ETF，波动与亏损风险极高；持股权重来自 SEC N-PORT（非当日），贡献度为估算。",soxlHeroLabel:"SOXL 最新报价",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正规收盘",soxlLeverageNote:"SOXL 目标约为 ICE Semiconductor Index 单日表现的 3 倍；隔夜与多日累积不可用简单 3 倍推估。",soxlHoldingsAsOf:"持股权重截至",soxlHoldingsNotSameDay:"最新 N-PORT，非今日即时",soxlEventsTitle:"事件／异常",soxlNewsTitle:"相关新闻",soxlNewsEmpty:"暂无相关新闻",soxlHoldingsTitle:"持股与估算贡献",soxlHoldingsLead:"权重来自 SEC N-PORT；现金与指数互换常占大宗。贡献 ≈ 权重 × 报酬（标示为估算，且未直接等于 3x ETF 点数）。",soxlHoldingsEmpty:"持股清单整理中，请稍后再看。",soxlColName:"标的",soxlColWeight:"权重",soxlColReturn:"日报酬",soxlColContrib:"估算贡献",soxlColReasons:"白话原因",soxlContributionHint:"估算＝权重% × 报酬% ÷ 100（篮子百分点；SOXL 约 3× 日杠杆，不等于 ETF 点数）",soxlSourceN:"来源 {n}",soxlOverallTitle:"为何涨／为何跌",soxlWhyUp:"偏多时常见原因",soxlWhyDown:"偏空时常见原因",soxlRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",soxlLoadError:"无法载入 SOXL 桌面（{msg}）",navTxf:"台指期",txfTitle:"台指期",txfLead:"台湾加权现货对台股期货：近月／次月报价、基差、成交与未平仓、三大法人部位、保证金与到期日——全部来自期交所／证交所公开资料，白话整理，非投资建议。",txfDisclaimer:"投资涉及风险，资讯仅供参考，非投资建议。美股与台指期分栏；数字缺栏不捏造。",txfHeroLabel:"台股期货近月报价",txfNearBadge:"近月",txfNextBadge:"次月",txfSettle:"结算价",txfVolume:"成交量",txfOI:"未平仓",txfSessionDate:"行情日",txfSpotLabel:"加权现货",txfBasisLabel:"基差",txfBasisHint:"基差＝近月期货 − 现货；正值表示期货相对现货溢价。",txfMultiplierShort:"大台乘数 NT${n}／点（纸上损益＝点数差×乘数×口数）",txfContractsTitle:"契约：大台／小台／微台",txfContractsLead:"一般交易时段行情。月契约最后交易日依官方「第三个星期三」规则推算，假日调整请对照期交所公告。",txfMultLabel:"契约乘数",txfPerPoint:"／点",txfMarginInitial:"原始保证金",txfMarginMaint:"维持保证金",txfColMonth:"月份",txfColLast:"最新",txfColSettle:"结算",txfColChange:"涨跌",txfColVolume:"成交量",txfColOI:"未平仓",txfColLTD:"最后交易日",txfInstTitle:"三大法人期货部位",txfInstLead:"未平仓多空与当日净买卖（期交所，截至 {date}）",txfInstFoot:"三大法人为汇总结果，不代表单一机构策略。",txfColParty:"身份",txfColLongOI:"多方未平仓",txfColShortOI:"空方未平仓",txfColNetOI:"净未平仓",txfColNetVol:"净买卖口数",txfCalendarTitle:"结算／期权汇总",txfNextLTD:"近月最后交易日",txfNearMonth:"近月",txfNextMonth:"次月",txfLTDRule:"月契约最后交易日＝交割月份第三个星期三。",txfRecentSettle:"近期最后结算价",txfPcrTitle:"台指期权 P/C",txfPcrVol:"成交量比",txfPcrOI:"未平仓比",txfExplainTitle:"白话说明",txfExplain1:"台指期（TX）是以台湾加权股价指数为标的的指数期货，采现金交割；小台（MTX）与微台（TMF）规格较小，方便调整部位。",txfExplain2:"基差＝期货价 − 现货指数。升水（正基差）表示期货贵于现货；贴水则相反。基差会随到期日逼近而收敛。",txfExplain3:"未平仓（OI）是尚未平仓的契约口数，反映市场留仓规模，不是当日涨跌原因本身。",txfExplain4:"纸上损益可用：点数差 × 契约乘数 × 口数（大台每点 NT$200、小台 NT$50、微台 NT$10）。保证金以期交所公告为准。",txfSourcesTitle:"资料来源",txfLoadError:"无法载入台指期桌面（{msg}）",navPodcasts:"名人播客",navLetters:"股东信",navManbao:"曼报 Pro",lettersTitle:"巴菲特的股东信",lettersLead:"选定年份后，在这一页打开伯克希尔官方原文。旁边是读过后整理的投资要点，不是全文，也不是买卖建议。官方页不允许嵌入。",lettersDisclaimer:"要点是我们的话，不是信的原文。1965–1976 年没有单独公开页，官方索引从 1977 年起。2025 年是 Greg Abel 的第一封信。",lettersMenuLead:"先选时期，再选年份。原文在伯克希尔官网阅读，这里只留要点。",lettersReadBadge:"已读要点",lettersLinkBadge:"仅链接",lettersOpen:"官方原文",lettersReaderOpen:"阅读官方原文",lettersReaderOpenPdf:"阅读官方 PDF",lettersReaderNote:"伯克希尔不允许把信嵌进其他网站，所以这里不放全文。按下面的按钮，在官方页面阅读。",lettersReaderRegion:"官方原文",lettersOfficialHost:"原文在 berkshirehathaway.com，离开本站后由伯克希尔提供。",lettersYearRail:"年份",lettersMissing:"找不到这一年的官方链接。",lettersLinkOnlyNote:"这封没有另外整理要点，请直接读官方页。",lettersAuthor:"作者",lettersBack:"回目录",manbaoTitle:"曼报 Pro",manbaoLead:"付费正文不转载。公开长文只放读过后的短摘要；会员限定只列公开索引上的标题与链接。",manbaoDisclaimer:"不是投资建议，也不是曼报的授权转载。Pro 正文留在官方网站。",manbaoMenuLead:"先选分类。公开长文有摘要；Pro 只有标题与官方链接。",manbaoPublicBadge:"公开摘要",manbaoPaywallBadge:"仅链接",manbaoOpen:"官方页面",manbaoBack:"回目录",manbaoCatPublic:"公开长文",manbaoCatDecode:"商业解码",manbaoCatTech:"科技曼读",manbaoCatGiants:"巨人之声",manbaoCatClub:"曼报俱乐部",manbaoCatAbout:"入口",lettersCatEarly:"1977–1989",lettersCat90:"1990–1999",lettersCat00:"2000–2009",lettersCat10:"2010–2019",lettersCat20:"2020–2025",lettersCatSpecial:"特别信",podcastsTitle:"名人播客",podcastsLead:"精选投资人／主持人公开访谈与 Podcast 框架整理：可扫读论点、市场分栏、候选状态标示清楚——非投资建议。",podcastsDisclaimer:"非投资建议。本区整理公开访谈与研究书库已有资料；数字与做法标示来源，不构成个性化建议。数学闸门未通过者仅候选／观察。",podcastsFeatured:"精选",podcastsStubBadge:"候选摘要",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（谢孟恭）",podcastsGooayeLead:"台湾市场／总经／风险／散户心理 Podcast；集数重点整理自公开 RSS 节目指引（非逐字稿、非投资建议）。",podcastsGooayeMarket:"以台股为主 · 美／台分栏",podcastsGooayeStubNote:"轻量 stub：完整条目与可计算规则在研究书库；此处不发明集数引言。",podcastsGooayePoint1:"先管风险与仓位，再谈单一标的故事",podcastsGooayePoint2:"护国神山供应链用篮子强弱看，不单压一档",podcastsGooayePoint3:"美股用利率方向当风险偏好代理；台股另算",podcastsGotoResearch:"到研究书库看完整条目",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"分类菜单",podcastsCategories:"名人podcast分类",podcastsMenuLead:"先选分类再进入内容——不把长文全部摊在同一页。",podcastsOpenCategory:"打开此分类",gooayeLibraryBadge:"集数库",gooayeDisclaimer:"候选／观察；数学闸关闭。标「已听写」：下载公开音档＋语音转文字后撰写股票重点分析。标「仅节目说明」：仅 RSS／节目说明，未听写。主持人观点、候选状态；非投资建议。",gooayeLoading:"载入股癌集数库…",gooayeLoadError:"无法载入集数库（{msg}）",gooayeEpisodeCount:"共 {n} 集（公开 RSS）",gooayeAsOf:"资料截至 {date}（台北）",gooayeEmptyCount:"其中 {n} 集公开文字不足，仅列标题",gooayeSearchLabel:"搜索集数",gooayeSearchPlaceholder:"标题、集数或关键字",gooayeSourceLine:"来源：",gooayeKeyPoints:"重点整理",gooayeNotesThin:"公开节目指引几乎只有标题／短语，无更多可整理文字。",gooayeTeaserNote:"公开 show notes 偏短（常见为开场短语＋广告）；以上仅整理可用的公开文字，未听音档、未发明内容。",gooayeListen:"收听（SoundOn）",gooayeLoadMore:"再显示 {n} 集（尚余 {left}）",gooayeShowingAll:"已显示全部 {n} 集",gooayeNoResults:"没有符合的集数。",gooayeUntitled:"未命名集数",gooayeBadgeListened:"已听写",gooayeBadgeRssOnly:"仅节目说明",gooayeStockAnalysis:"股票重点分析（已听写）",gooayeRssTeaserToggle:"公开节目说明（RSS）",gooayeListenedAt:"听写于 {date}（台北）",gooayeListenedCount:"已听写 {n} 集",gooayeRssOnlyNote:"此集尚未听音档；以上仅整理公开 RSS／节目说明，非听写分析。",podcastsXiaojunTitle:"张小珺jùn｜商业访谈录",podcastsXiaojunHandle:"张小珺 · 商业／科技长访谈",podcastsXiaojunLead:"以中国科技与商业人物为主的长篇访谈；集数库来自公开 RSS 节目说明。标「已听写」者另附股票／产业重点（候选／观察，非投资建议）。",podcastsXiaojunMarket:"以中国科技产业为主 · 跨市场观察",podcastsXiaojunApple:"在 Apple Podcasts 收听",xiaojunLibraryBadge:"集数库",xiaojunDisclaimer:"候选／观察；数学闸关闭。标「已听写」者：下载公开音档＋语音转文字后撰写股票／产业重点。标「仅节目说明」者：仅 RSS／节目说明，未听写。主持人观点；非投资建议。",xiaojunLoading:"载入张小珺集数库…",xiaojunLoadError:"无法载入集数库（{msg}）",xiaojunEpisodeCount:"共 {n} 集（公开 RSS）",xiaojunAsOf:"资料截至 {date}（台北）",xiaojunEmptyCount:"其中 {n} 集公开文字不足，仅列标题",xiaojunSearchLabel:"搜索集数",xiaojunSearchPlaceholder:"标题、集数或关键字",xiaojunSourceLine:"来源：",xiaojunKeyPoints:"重点整理",xiaojunNotesThin:"公开节目指引几乎只有标题／短语，无更多可整理文字。",xiaojunTeaserNote:"以上仅整理公开 RSS／节目说明，未听音档、未发明内容。",xiaojunListen:"在 Apple Podcasts 收听",xiaojunLoadMore:"再显示 {n} 集（尚余 {left}）",xiaojunShowingAll:"已显示全部 {n} 集",xiaojunNoResults:"没有符合的集数。",xiaojunUntitled:"未命名集数",xiaojunBadgeListened:"已听写",xiaojunBadgeRssOnly:"仅节目说明",xiaojunStockAnalysis:"股票／产业重点分析（已听写）",xiaojunRssTeaserToggle:"公开节目说明（RSS）",xiaojunListenedAt:"听写于 {date}（台北）",xiaojunListenedCount:"已听写 {n} 集",xiaojunRssOnlyNote:"此集尚未听音档；以上仅整理公开 RSS／节目说明，非听写分析。",podcastsWhynottvTitle:"WhynotTV Podcast",podcastsWhynottvHandle:"Tairan He · AI／机器人长访谈",podcastsWhynottvLead:"聚焦 AI、机器人与科研创业的长篇访谈；集数库来自公开 Anchor RSS。标「已听写」者另附产业重点（候选／观察，非投资建议）。",podcastsWhynottvMarket:"AI／机器人与科研创业 · 跨市场观察",podcastsWhynottvApple:"在 Apple Podcasts 收听",whynottvLibraryBadge:"集数库",whynottvDisclaimer:"候选／观察；数学闸关闭。标「已听写」者：下载公开音档＋语音转文字后撰写产业重点。标「仅节目说明」者：仅 RSS／节目说明，未听写。主持人观点；非投资建议。",whynottvLoading:"载入 WhynotTV 集数库…",whynottvLoadError:"无法载入集数库（{msg}）",whynottvEpisodeCount:"共 {n} 集（公开 RSS）",whynottvAsOf:"资料截至 {date}（台北）",whynottvEmptyCount:"其中 {n} 集公开文字不足，仅列标题",whynottvSearchLabel:"搜索集数",whynottvSearchPlaceholder:"标题、集数或关键字",whynottvSourceLine:"来源：",whynottvKeyPoints:"重点整理",whynottvNotesThin:"公开节目指引几乎只有标题／短语，无更多可整理文字。",whynottvTeaserNote:"以上仅整理公开 RSS／节目说明，未听音档、未发明内容。",whynottvListen:"在 Apple Podcasts 收听",whynottvLoadMore:"再显示 {n} 集（尚余 {left}）",whynottvShowingAll:"已显示全部 {n} 集",whynottvNoResults:"没有符合的集数。",whynottvUntitled:"未命名集数",whynottvBadgeListened:"已听写",whynottvBadgeRssOnly:"仅节目说明",whynottvStockAnalysis:"股票／产业重点分析（已听写）",whynottvRssTeaserToggle:"公开节目说明（RSS）",whynottvListenedAt:"听写于 {date}（台北）",whynottvListenedCount:"已听写 {n} 集",whynottvRssOnlyNote:"此集尚未听音档；以上仅整理公开 RSS／节目说明，非听写分析。",podcastsZhangJunanTitle:"张濬安",podcastsZhangJunanHandle:"et220870 · Blogspot／PTT",podcastsZhangJunanLead:"公开博客与 PTT 发文整理：绩效复盘、交易纪律、券商／房贷实务与早期操作日志。标「已读分析」者已读全文；标「仅标题」者公开正文不可得。候选／观察，非投资建议。",podcastsZhangJunanMarket:"台股／交易实务 · 个人复盘",zhangJunanLibraryBadge:"文章库",zhangJunanDisclaimer:"候选／观察；数学闸关闭。标「已读分析」：已读公开正文（博客全文或 PTT 原文＋留言）后撰写股市／资产要点。标「仅标题」：公开页正文不可读或已删。作者观点；非投资建议。不纳入选股清单。",zhangJunanLoading:"载入张濬安文章库…",zhangJunanLoadError:"无法载入文章库（{msg}）",zhangJunanPostCount:"共 {n} 篇（公开列表）",zhangJunanAsOf:"资料截至 {date}（台北）",zhangJunanAnalyzedCount:"已读分析 {n} 篇",zhangJunanTitleOnlyCount:"其中 {n} 篇仅标题（正文不可读）",zhangJunanSearchLabel:"搜索文章",zhangJunanSearchPlaceholder:"标题、看板、关键字",zhangJunanSourceLine:"来源：",zhangJunanKeyPoints:"要点整理",zhangJunanStockAnalysis:"股市／资产要点分析（已读）",zhangJunanNotesThin:"公开文字不足，仅列标题与链接。",zhangJunanTitleOnlyNote:"公开页正文已删除或无法解析；以上不臆造内容。",zhangJunanOpenBlog:"打开原文（博客）",zhangJunanOpenPtt:"打开原文（PTT）",zhangJunanLoadMore:"再显示 {n} 篇（尚余 {left}）",zhangJunanShowingAll:"已显示全部 {n} 篇",zhangJunanNoResults:"没有符合的文章。",zhangJunanUntitled:"未命名文章",zhangJunanBadgeAnalyzed:"已读分析",zhangJunanBadgeTitleOnly:"仅标题",zhangJunanSourceBlog:"博客",zhangJunanSourcePtt:"PTT",zhangJunanCommentSummary:"留言要点",zhangJunanFilterAll:"全部",zhangJunanFilterBlog:"博客",zhangJunanFilterPtt:"PTT",zhangJunanFilterSeriesAll:"全部子分类",zhangJunanSourceFilters:"来源筛选",zhangJunanSeriesFilters:"子分类筛选",researchCatMenu:"分类菜单",researchCategories:"研究分类",researchMenuLead:"先选类型／市场／状态，再浏览该分类条目。",researchOpenCategory:"打开此分类",researchCatBooks:"书籍",researchCatPapers:"论文",researchCatPodcasts:"Podcast",researchCatUs:"美股焦点",researchCatTw:"台股焦点",researchCatCandidate:"候选",researchCatWatch:"观察中",researchBackMenu:"回分类菜单",researchStatusFilters:"状态",godzillaTitle:"哥吉拉",godzillaLead:"Threads 受访者「哥吉拉」的美股框架整理：时间与健康、RSU 再配置、基本面、能力圈、税务节奏、期权工具——白话卡片，非投资建议。",godzillaDisclaimer:"非投资建议。整理自公开访谈；数字与做法标示为受访者自述，不构成个性化建议。数学闸门未通过，仅候选／观察。",godzillaHeroLabel:"哥吉拉框架总览",godzillaKicker:"候选框架 · 美股为主",godzillaTagline:"用健康的时间换自由；长股为核、期权为辅；税务决定换仓节奏。",godzillaBadgeCandidate:"候选",godzillaBadgeWatch:"观察中",godzillaUsFocus:"以美股为主",godzillaSelfReport:"受访者自述",godzillaListenedBadge:"已听写",godzillaStockTitle:"股票重点分析（已听写）",godzillaStockLead:"依公开 YouTube 访谈音频＋语音转写整理的受访者观点（候选／观察；非投资建议）。",godzillaStock1:"时间与健康优先于再堆金钱／RSU；金钱买不回时间，退休目标会随 RSU 累积而上修。",godzillaStock2:"美股科技薪酬高度依赖 RSU；股价上涨放大总报酬，也放大单一公司集中风险。",godzillaStock3:"进场时点：特斯拉较早布局自觉「可更早出场会赚更多」；Meta 约在相对低档区间进入（受访者自述）。",godzillaStock4:"下一波关注偏 B2C AI 应用落地；当下显见案例如 Tesla FSD、Palantir，其余仍在观察。硬件／AI 资本开支仍在成长，但多数应用仍偏 B2B。",godzillaStock5:"即便看好 NVIDIA，也不主张把仓位压在单一公司；美国 W2／税务下，高薪＋集中持股需一起规划。",godzillaStock6:"台股无资本利得税 vs 美国税负：流动性／进出方便是优点，税制诱因不同，不能直接照搬美股玩法。",godzillaStockNote:"转写模型：faster-whisper small int8。来源影片公开可查；数字与标的均为访谈中受访者观点，候选／观察。",godzillaSourceLabel:"来源",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"观看 YouTube 访谈",godzillaThesesTitle:"核心论点",godzillaThesesLead:"十条可扫读重点；细节皆为受访者自述。",godzillaThesis1Title:"时间与健康重于再堆 RSU",godzillaThesis1Body:"退休目标常会膨胀（例如自述从约 3,000 万美元调到 6,000 万，再加上住房与子女）；停下来往往是身体撑不住。用健康的 40 多岁换旅行与自由，和 50–60 岁很不一样。",godzillaThesis2Title:"美股 RSU 改变诱因",godzillaThesis2Body:"四年归属、与公司利益绑在一起；对比台股现金奖金较少用来买自家股票。",godzillaThesis3Title:"归属当日卖出、转到信念标的",godzillaThesis3Body:"既得 RSU 当日卖出，再配置到有信念的名字（其例：NVDA），避免薪水＋未归属全押同一篮。",godzillaThesis4Title:"只看基本面",godzillaThesis4Body:"看营收／EPS 趋势；忽略华尔街目标价；新闻噪音多半有害。",godzillaThesis5Title:"能力圈：硬件／科技",godzillaThesis5Body:"能力圈在硬件与科技——NVDA 权重最高；亦提 PLTR、AVGO、TSM；很少碰科技外。指数部位现在较小，终局想象多数在指数。",godzillaThesis6Title:"税务决定换仓节奏",godzillaThesis6Body:"高 W2 收入时资本利得税重；离职后可多年把个股轮换成指数、把税负控在可接受范围；卖出 Covered Call 可缓冲下跌。",godzillaThesis7Title:"期权是工具",godzillaThesis7Body:"多半当卖方（Covered Call／Cash-secured Put）；少数做多买权／LEAP，仅在恐慌或价格与基本面背离时；接受权利金可能归零；从不裸卖。",godzillaThesis8Title:"Covered Call：被指派就延后",godzillaThesis8Body:"有被指派风险就往后换月（roll out）；不要为了小权利金去履约或卖掉核心持股；不舒服就少卖合约。",godzillaThesis9Title:"进场等趋势",godzillaThesis9Body:"等 1–2 次干净财报确认趋势，即使成本垫高也接受；有闲钱就持续买好公司；不追热门明牌。",godzillaThesis10Title:"美／台观察分栏",godzillaThesis10Body:"美股资本利得税→倾向抱更久；台股无资本利得＋有证交税→周转较高、投机文化较重（仅观察，非操作指令）。",godzillaChecklistTitle:"作法清单",godzillaChecklistLead:"可执行的自我检查，不是下单清单。",godzillaCheck1:"物欲低；别让「够了」的数字一直往上涨。",godzillaCheck2:"长股为核心；期权是卫星／避险／偶尔杠杆。",godzillaCheck3:"部位：不借钱；接受不了归零，就别碰期权。",godzillaCheck4:"期权优先流动性高的大型股。",godzillaCheck5:"终局配置草图：约 80% 宽基指数，小袖口参与产业（＋偶尔小额买权）。",godzillaCheck6:"PLTR 例子：B2B 靠前线工程师变现；若商业成长失望就减码。",godzillaOptionsTitle:"期权用法",godzillaOptionsLead:"卖方为主；买方极少、仅在极端偏离时。",godzillaOpt1:"主力：Covered Call、Cash-secured Put。",godzillaOpt2:"小部位长买权／LEAP：恐慌或价格脱离基本面时。",godzillaOpt3:"权利金可全部亏完；从不裸仓。",godzillaOpt4:"被指派风险：往后换月；核心持股不为小权利金卖出。",godzillaRsuTitle:"RSU、税务与轮换",godzillaRsuLead:"诱因、分散与离职后的税务节奏。",godzillaRsu1:"归属当日卖出 RSU，再配置到信念标的（例：NVDA）。",godzillaRsu2:"在职高税负时少动大额已实现利得；离职后多年轮换个股→指数。",godzillaRsu3:"Covered Call 作为下跌缓冲，不是赌方向。",godzillaTwTitle:"台股观察",godzillaTwLead:"与美股框架分开；仅文化／税制观察。",godzillaTwBody:"美股有资本利得税，倾向长期持有；台股无资本利得税、有证交税，周转与短线文化较明显。此页主轴仍是美股框架，台股仅作对照，不写进正式筛选。",godzillaGateNote:"尚未写进正式筛选",godzillaGateDetail:"状态：候选／strategyCandidate=watch。数学闸门关闭——未接入即时筛选器或模拟交易；仅供阅读与对照。",jensenTitle:"黄仁勋／Jensen Huang",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公开演讲整理：视角、需求与摩尔定律、文化、现金现实、再发明——候选／观察，非投资建议。",jensenDisclaimer:"非投资建议。整理自 Stanford Online 公开演讲（约 2009；YouTube 2011 上传）；论点来自讲者自述主题，不构成个性化建议。数学闸门未通过，仅候选／观察。",jensenHeroLabel:"黄仁勋演讲重点",jensenKicker:"候选演讲 · 美股科技／半导体创业",jensenTagline:"视角胜过空泛「愿景」；用文化与再发明撑住长周期公司建设。",jensenUsFocus:"以美股／科技为主",jensenTalkBadge:"公开演讲",jensenListenedBadge:"已听写",jensenStockTitle:"股票／事业重点（已听写）",jensenStockLead:"依公开 Stanford ETL 访谈影片音频＋语音转写整理（约2009；历史观点，非当下财报）。候选／观察；非投资建议。",jensenStock1:"创业叙事（1993）：押注 PC＋3D／游戏会成大市场；VC／长辈当时不信「为了打游戏开公司」。",jensenStock2:"竞争：消费级3D一度涌入数十～上百家；NVIDIA自述最终成仅存的电脑绘图公司——关键是看懂事业本质（半导体／Moore's Law 如竞争律）与持续重塑，而非只靠执行。",jensenStock3:"可编程着色器转型：主动吞噬自己成功的固定功能产品；第一代几乎拖垮公司，但自认不做会死于 Moore's Law 节奏。",jensenStock4:"资源配置：竞争决定价格，CEO决定要不要接案；看关键资源相对市场需求与机会成本，不只会计成本。",jensenStock5:"文化：创新需容忍计算过的失败；新创定义＝几乎一直快倒闭。通用化 GPU（瑞士刀）有偏离利基风险，却是延长产业寿命的路径。",jensenStock6:"时间锚点：本场为历史谈（预现代AI训练热潮），勿直接外推今日数据中心财报。NVIDIA为讲者公司；候选／观察。",jensenStockNote:"转写：faster-whisper small int8（en）。来源 YouTube Xn1EsFe7snQ／Stanford ETL。历史访谈观点。",jensenMeta:"Stanford Online · STVP ETL · 约 1:03:38 · 上传 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"观看 YouTube 演讲",jensenOpenYoutube:"在 YouTube 打开完整影片",jensenEmbedTitle:"Jen-Hsun Huang：Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 相关剪辑",jensenHighlightsTitle:"演讲重点（白话）",jensenHighlightsLead:"五条可扫读主题；仅整理公开演讲中反复出现的论点，非逐字稿。",jensenH1Title:"视角，而非空泛「愿景」",jensenH1Body:"人人都有视角。NVIDIA 早期押注：个人电脑加上便宜的 3D 会打开游戏市场（后来也谈到 Keyhole→Google Earth），当时对许多 VC 而言市场几乎是零。",jensenH2Title:"无穷需求与摩尔定律",jensenH2Body:"新类别尚未被定价时，有时要暂时忽略顾客反馈；先 rinse-and-repeat，再在「够好」扼杀媒介前重新发明（固定功能→可编程着色器／GeForce FX 近死经验、CG 语言）。",jensenH3Title:"文化：敢冒算过的风险",jensenH3Body:"创新需要计算过的风险、容忍快速失败、智识诚实、愿意改道；动机是热情与目的，而非「把公司卖掉」。",jensenH4Title:"现金与新创现实",jensenH4Body:"永远在募资、省钱或赚钱；新创几乎总是濒临倒闭。VC 更押人与够大的市场，而非完美商业计划。",jensenH5Title:"再发明：成功也要拆掉重建",jensenH5Body:"每一次成功终须拆解再建；黄仁勋谈的是长视野公司建设，不是连续翻转出场。",jensenTwTitle:"美／台分栏（仅脉络）",jensenTwLead:"本条目市场主轴为美股科技／半导体公司建设；台湾仅作供应链脉络，不发明台股标的。",jensenTwBody:"NVDA 作为美股半导体／运算平台公司，供应链与台湾晶圆制造、封测生态高度相关——此处仅作产业脉络注记，不列台股清单，也不写进正式筛选。",jensenGateNote:"尚未写进正式筛选",jensenGateDetail:"状态：候选／strategyCandidate=watch。数学闸门关闭——未接入即时筛选器或模拟交易；仅供阅读与对照。",jensenWatchCta:"在 YouTube 观看",jensenEmbedBlockedNote:"此演讲由拥有者设定为仅能在 YouTube 观看（无法于本站内嵌播放）。",optionsTitle:"美股期权",optionsLead:"以 McMillan《期权策略完全手册》策略族为主：先看波动与风险形状，再用公开 Yahoo 链学习——非投资建议。",optionsDisclaimer:"非投资建议；期权风险高。仅供教育与公开数据筛选，不构成个人化下单建议。",optionsBookBadge:"这本书",optionsBookCite:"主要参考书",optionsBookLead:"Lawrence G. McMillan《期权策略完全手册》增订第五版：依看法与波动高低对应策略族（原创摘要，非原文）。",optionsBookFallbackTitle:"期权策略完全手册（McMillan）",optionsGotoResearch:"到研究书库看完整条目",optionsUsOnly:"仅美股",optionsQualityTitle:"标的轻量财报检核",optionsQualityLead:"次要滤网：本益、净值、负债、ROE、营收／获利趋势。缺栏标「资料不足」，不作荐股。",optionsViewTitle:"期权观点（McMillan）",optionsViewLead:"公开期权链：ATM 隐含波动、历史波动、量能偏向；策略族为教育说明。",optionsMcmillanFirst:"先对齐波动高低与风险形状，再想策略族——不是先猜涨跌再硬套。",optionsPe:"市盈率",optionsPb:"市净率",optionsDebt:"负债／权益",optionsRoe:"ROE",optionsRevTrend:"营收趋势",optionsEarnTrend:"获利趋势",optionsGate:"品质闸",optionsGatePass:"通过",optionsGateWatch:"观察",optionsGateFail:"偏弱",optionsGateIncomplete:"资料不足",optionsDataMissing:"资料不足",optionsForwardPe:"预估市盈率",optionsTrendUp:"成长约 {pct}%",optionsTrendDown:"下滑约 {pct}%",optionsTrendFlat:"大致持平 {pct}%",optionsAtmIv:"ATM 隐含波动",optionsHv:"历史波动（约 1 月）",optionsIvHv:"IV／HV",optionsVolRegime:"波动状态",optionsRegimeIvRich:"隐含偏高",optionsRegimeIvCheap:"隐含偏低",optionsRegimeIvFair:"大致均衡",optionsRegimeIvOnly:"仅有 IV",optionsCallPutVol:"认购／认沽成交量",optionsAtmStrike:"近价履约价",optionsExpiry:"到期日",optionsSkewPutHeavy:"认沽量较重",optionsSkewCallHeavy:"认购量较重",optionsSkewBalanced:"量能大致均衡",optionsEduSetups:"策略族（教育）",optionsEduSetupsLead:"依看法＋波动状态挑选家族；绿底表示较常对齐目前 IV／HV（仍非建议）。",optionsSetupCoveredCall:"备兑认购（Covered Call）",optionsSetupCoveredCallBody:"已持股时卖出认购，换取权利金；上涨空间被履约价盖住。",optionsSetupCoveredCallWarn:"最大利润有天花板；大跌时股票亏损仍在。",optionsSetupProtectivePut:"保护性认沽（Protective Put）",optionsSetupProtectivePutBody:"持股同时买入认沽，像买保险：下跌有地板，但要付保费。",optionsSetupProtectivePutWarn:"保险成本会吃掉报酬；若波动已很贵，保费更痛。",optionsSetupVertical:"垂直价差（Vertical）",optionsSetupVerticalBody:"同到期、不同履约价的组合，把最大损益框在可计算区间。",optionsSetupVerticalWarn:"方向看错仍会亏；好处是亏损有上限。",optionsSetupCalendar:"日历／对角价差",optionsSetupCalendarBody:"不同到期的组合，常用来表达时间流逝或波动变化看法。",optionsSetupCalendarWarn:"对波动与时间敏感；形状会随市价移动改变。",optionsSetupStraddle:"跨式／勒式",optionsSetupStraddleBody:"同时买（或卖）认购与认沽，押大波动或波动不够。",optionsSetupStraddleWarn:"买方需要够大的移动；卖方面临两侧风险。",optionsSetupButterfly:"蝶式",optionsSetupButterflyBody:"多履约价组合，押价格收敛在中间附近；利润区通常很窄。",optionsSetupButterflyWarn:"甜蜜点很窄；错过中间就可能接近最大亏损。",optionsSetupVolAligned:"与目前波动状态较常一起讨论",optionsSetupVolNotAligned:"与目前波动状态较不契合（仍可学习）",optionsRiskShape:"风险形状（白话）",optionsNoSetups:"暂无策略族说明",optionsPickTicker:"请选择上方美股代码",optionsChainBlocked:"期权链暂时无法取得",optionsPartialBlocker:"部分栏位不完整",optionsRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",optionsLoadError:"无法载入期权快照（{msg}）",optionsEmpty:"尚无美股样本——请先跑 fetch-us-options",optionsGlossaryTitle:"小词典（不用公式）",optionsTermDelta:"Delta（方向敏感度）",optionsDefDelta:"价格涨跌时，期权大概会跟多少。数字愈靠近 1 或 −1，跟现货愈紧。",optionsTermIv:"隐含波动 IV",optionsDefIv:"市场「现在愿意付多少保费」换算成的波动预期。愈高通常期权愈贵。",optionsTermHv:"历史波动 HV",optionsDefHv:"过去一段时间股价实际晃动有多大，用来和 IV 对照。",optionsTermAtm:"ATM（近价）",optionsDefAtm:"履约价最靠近现价的合约，常拿来当波动温度计。",optionsTermSkew:"量能偏向",optionsDefSkew:"认购与认沽成交量谁比较多，粗看市场偏保险还是偏追涨。",optionsTermProb:"机率（教育）",optionsDefProb:"只谈「比较可能／比较少见」的直觉，不保证结果，也不给个人化胜率。",researchLead:"书单与论文：标题 → 摘要 → 重点作法 → 是否纳入策略候选",researchMathGateBanner:"正式纳入策略需数学闸门通过（目前未过）— 仅候选",researchMathGate:"数学闸门",researchMathGateDefault:"尚未通过数学闸门",researchFormulas:"可编程公式",researchTakeaways:"重点作法",researchNoTakeaways:"尚无重点作法",researchSources:"来源",researchFilters:"筛选",researchFilterAll:"全部",researchType:"类型",researchTypeBook:"书籍",researchTypePaper:"论文",researchTypePodcast:"播客",researchMarketBoth:"美＋台",researchStrategy:"策略候选",researchCandYes:"候选纳入",researchCandNo:"不纳入",researchCandWatch:"观察中",researchStatusCandidate:"候选",researchStatusDeferred:"暂缓",researchStatusAdopted:"已纳入",researchStatusRejected:"排除",researchCounts:"书籍 {books} · 论文 {papers} · 播客 {podcasts} · 显示 {total}",researchEmpty:"此筛选条件下暂无项目",researchNoFormulas:"尚无公式条目",researchLoadError:"无法加载研究库（{msg}）",researchShelfFilters:"书架分类",researchShelfCoreInvesting:"核心投资经典",researchShelfValueInvesting:"价值型投资",researchShelfBusiness:"商业管理与商界视角",researchShelfLifePartner:"人生智慧与合伙人思想",researchShelfOptions:"期权／衍生品",researchShelfRecentReads:"近期阅读与推荐书",researchShelfFiConcepts:"必看财商观念书",researchShelfMoneyValues:"理财与金钱价值观",researchShelfInvestingBasics:"投资理财入门",researchShelfAssetAllocation:"资产配置",researchShelfFinancials:"财报分析",researchShelfMarketAnalysis:"投资分析与战胜市场",researchShelfEconAnalysis:"经济分析",researchShelfPsych:"投资心理／随机性／人性",researchShelfBiographies:"名人传记",researchShelfAdjacent:"其他／隣接",todayPicks:"今日选股",market:"市场",hot:"热门",marketQuotes:"市场报价",macroTitle:"美股大事",macroTzEt:"时间・美东 ET",macroAsOf:"更新",macroStale:"数据偏旧（仍显示上次成功抓取）",macroToday:"今日",macroNext:"即将",macroHighImpact:"高影响",macroEmpty:"近期无高影响美股大事（或数据尚未更新）",macroLoadError:"无法载入美股大事（{msg}）",liveQuotesLive:"实时",liveQuotesStale:"报价暂缓（仍显示上次成功）",liveQuotesStaleShort:"暂缓",liveQuotesPending:"实时报价连接中…",liveQuotesClock:"报价",macroEvent_fomcDecision:"FOMC 利率决议",macroEvent_fomcMinutes:"FOMC 会议纪要",macroEvent_cpi:"CPI 通胀",macroEvent_ppi:"PPI 生产者物价",macroEvent_pce:"PCE／核心 PCE",macroEvent_nfp:"非农就业 NFP",macroEvent_joblessClaims:"初请失业金",macroEvent_gdp:"GDP",macroEvent_retailSales:"零售销售",macroEvent_ismMfg:"ISM 制造业",macroEvent_ismServices:"ISM 服务业",macroEvent_jolts:"JOLTS 职缺",twMacroTitle:"台股大事",twMacroTz:"时间・台北时间",twMacroEmpty:"近期无高影响台股大事（或数据尚未更新）",twMacroLoadError:"无法载入台股大事（{msg}）",twMacroEvent_cbcDecision:"央行理监事会",twMacroEvent_dgbasCpi:"CPI 消费者物价",twMacroEvent_dgbasPpi:"PPI／物价指数",twMacroEvent_dgbasUnemployment:"失业率",twMacroEvent_dgbasGdpFlash:"GDP 概估",twMacroEvent_dgbasGdp:"GDP／经济成长",twMacroEvent_dgbasForecast:"经济预测",twMacroEvent_moeaExportOrders:"外销订单",twMacroEvent_moeaIndustrialProd:"工业生产",twMacroEvent_twseHoliday:"台股休市",usStock:"美股",twStock:"台股",usList:"美股列表",twList:"台股列表",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暂无 Top 候选",ticker:"代码",name:"名称",price:"价格",dayPct:"日涨跌",priorClose:"前收",priorCloseFull:"前收涨幅",pct5d:"5 日",pct1m:"约 1 月",volRatio:"量比",ma:"均线",screening:"筛选",reason:"理由",details:"详情",business:"本业",risk:"风险",observe:"观察",dataIncomplete:"资料不全",intraday:"盘中",taipeiClose:"台北收",taiex:"台湾加权 TAIEX",otc:"柜买",loadError:"无法加载数据（{msg}）。请确认以静态服务器打开，且 data/latest.json 存在。",langLabel:"语言",paper:"模拟",paperMissing:"尚无模拟账本文件。请在项目执行 npm run paper。",paperDisclaimer:"累积模拟账户（自 {date} 起） · 不会每日归零 · 买进即成交 · 非真实下单",paperRules:"规则（各市场独立账）",paperRuleTw:"台股本金 NT$3,000,000 · 整张成交",paperRuleUs:"美股本金 US$100,000 · 可买 1 股起",paperRuleBuy:"买：该市场名单·风险1%·停距1.5%·单档≤8% · 即成交",paperRuleSell:"卖：停损−3% · 停利+12%半仓 · 破SMA20且日跌>2% · 离名单亏损 · 涨停隔日−5%",paperTabTw:"台股账 · NT$",paperTabUs:"美股账 · US$",paperBookTw:"台股账本（NT$）",paperBookUs:"美股账本（US$）",principal:"本金",cash:"现金",equity:"权益（部位＋现金）",totalPnl:"总损益",totalPnlPct:"总损益 ％",weekPerf:"周绩效",monthPerf:"月绩效",quarterPerf:"季绩效",yearPerf:"年绩效",sinceInception:"成立以来",noTradesToday:"本日尚无此类成交（模拟）",noPositions:"目前没有持股",buy:"买",sell:"卖",shares:"股",qtyShares:"股数",positions:"目前部位",position:"部位",avgCost:"成本",mark:"现价",mktValue:"市值",dayPnl:"日损益",costBasis:"成本合计",weightPct:"权重 ％",posScrollHint:"左右滑动看全部栏位",unrealizedPnl:"未实现损益",unrealizedPct:"未实现 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累积 · 买进即成交",reasonScreenBuy:"名单新开仓",reasonAdd:"持续买进",reasonStop:"停损",reasonTakeProfit:"停利",reasonMomentumBreak:"动能转弱",reasonOffList:"离开名单",reasonLimitUpChase:"涨停追价急杀",paperRuleOpt:"美股帳可模拟买／卖期权（單腳）；权利金來自公开期權鏈，乘數×100；到期依内含價值结算",paperRuleTxf:"台股帳可模拟台指期 TX／MTX；點數×官方乘數（TX 200／MTX 50）×口數＝損益；保证金用期交所公开初始保证金",paperDerivUsTitle:"美股期权（纸上）",paperDerivUsLead:"單腳买／卖 Call／Put。权利金＝當日公开鏈；絕不捏造。現金借記／貸記更新本帳。",paperDerivServerBook:"全站模拟部位（每台装置都看得到，不是手机暂存）。",paperDerivTwTitle:"台指期 TX／MTX（纸上）",paperDerivTwLead:"價格來自台指期桌（session {session}）。多／空口數；損益＝點數差×乘數×口數（TWD）。",paperDerivFreeCash:"可用现金（本账）",paperDerivOptMv:"期权市值",paperDerivMarginHold:"保证金占用",paperDerivUnderlying:"标的",paperDerivRight:"Call／Put",paperDerivStrike:"履约價",paperDerivPremium:"权利金",paperDerivCashImpact:"現金影響",paperDerivFutCode:"商品",paperDerivMonth:"契约月",paperDerivNear:"近月",paperDerivNext:"次月",paperDerivContract:"契约",paperDerivContracts:" 口",paperDerivLong:"多",paperDerivShort:"空",paperDerivMarkSrc:"標記來源",paperDerivLastDay:"最后交易日",paperDerivMarginNote:"纸上保证金：以期交所公开「初始保证金」×口數占用現金；非真實下單。",paperDerivNoOptPos:"尚无期权部位",paperDerivNoFutPos:"尚无台指期部位",paperDerivNoChain:"尚无可成交的公开期權鏈（需 paperChain 权利金）",paperDerivNoPremium:"此履约價沒有可用公开权利金",paperDerivNoTxf:"尚无台指期桌資料（public/data/txf-desk.json）",paperDerivNoMonth:"桌面沒有此契约月報價",paperDerivNoFutPrice:"沒有可用的公开期貨價（last／settle）",paperDerivNoMargin:"桌面缺少官方初始保证金數字",paperDerivBadRight:"請選 Call 或 Put",paperDerivBadQty:"口数／张数须为正整数",paperDerivBadSide:"買賣方向無效",paperDerivBadCode:"僅支援 TX／MTX",paperDerivBadMult:"乘數與官方規格不一致，已阻挡",paperDerivExpiryMismatch:"到期日與公开鏈不一致",paperDerivNeedCash:"現金不足（需要約 {need}）",paperDerivNeedMargin:"保证金不足（需要約 {need}）",paperDerivMathBlock:"數學守衛攔截：非有限數字，未写入",paperDerivFail:"下单失败",paperDerivFillOk:"已成交 @ {px}",paperDerivUserOpen:"纸上開倉",paperDerivUserClose:"纸上平倉",paperDerivExpirySettle:"到期依内含價值结算",paperDerivFutSettle:"最后交易日後依结算／最後價平倉",paperDerivStrategy_covered_call:"备兑买权",paperDerivStrategy_protective_put:"保护性卖权",paperDerivStrategy_long_call:"买进买权",paperDerivStrategy_long_put:"买进卖权",paperDerivStrategy_short_call:"卖出买权",paperDerivStrategy_short_put:"卖出卖权",stopLoss:"停损",takeProfit:"停利",paperTrade:"模拟",realizedPnl:"实现损益",sessionRealizedPnl:"本次卖出实现损益合计",costMissing:"成本资料缺失",costMissingCount:"另有 {n} 笔缺成本",realizedOpenOnly:"尚未实现（持仓中）",paperDerivFills:"衍生品成交",tradeDate:"日期",periodPerf:"绩效",qty:"数量",note:"说明",strategyScreen:"策略选股",strategyLead:"台／美命中分开检视 · 缺资料标「不足」",strategyLoading:"加载策略结果中…",strategyEmpty:"尚无策略资料。请执行 npm run strategies。",strategyLoadError:"无法加载策略选股（{msg}）。请确认已执行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分类",hitCount:"档命中",hitTitle:"命中档数",strategyDetails:"详情 · 策略说明",conditions:"条件",results:"筛选结果",copyJson:"复制 JSON",exportCsv:"导出此策略 CSV",exportJson:"导出 JSON",copied:"已复制",noHitsExport:"此策略今日无命中列可导出",incomplete:"不足",hitsTotal:"共{n}档",twOnlyHint:"本策略仅台股",hitMarket:"命中市场",noHits:"本日无命中",dataInsufficient:"资料不足",calibTitle:"校准说明",incompleteFilters:"未检查滤网（不算通过）：",sessionTwse:"证交所 session",ohlcvBar:"OHLCV K棒",generated:"产生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精选",cat價量:"价量",cat籌碼:"筹码",cat財務:"财务",cat大師:"大师",cat週期:"周期",cat技術:"技术",cat基本:"基本",cat綜合:"综合",addWatchlist:"加入自选",watchlistAdded:"已加入自选 {ticker}",watchlistExists:"{ticker} 已在自选",copyFailed:"复制失败（请手动选取）",csvDownloaded:"已下载 CSV",csvBlocked:"下载被挡：改以数据链接打开",backtestSoon:"回测：尚未开放",backtestHint:"回测：数据／引擎尚未开放（不提供假回测）",regimeToday:"今日市场周期（美／台分开）",psychologyPhase:"心理相位",cycleStance:"周期姿态",liquidityBias:"流动性偏误",temperatureScore:"市场温度",sizeMult:"部位乘数",regimeTags:"周期标签",dataGaps:"资料缺口",marketRegime:"市场周期",enum_euphoric:"亢奋",enum_late_optimism:"晚期乐观",enum_mid_cycle:"中期",enum_cautious_recovery:"谨慎复苏",enum_despondent:"绝望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精选",enum_balanced:"均衡",enum_constructive:"偏建设",enum_aggressive:"积极",enum_stabilize_first:"先求稳",enum_risk_off:"偏防守",enum_risk_on:"偏进攻",enum_neutral:"中性",logicTitle:"选股逻辑",logicSubtitle:"政权→筛选→策略→降权→理由→部位：可稽核的数学流程",logicNoRegime:"尚无市场周期资料（待下次扫描写入）。",logicStep1:"市场周期（Regime）",logicStep1Lead:"先定美／台独立姿态，再筛个股。Kostolany 心理相位 × Marks 温度 × 利率流动性。",logicStep1Caption:"相位 → 筛选姿态 → 部位乘数（STANCE_SIZE_MULT）",logicRatesR2:"R2：美债 ^TNX 20 日上升 ≥ +0.25pp → 流动性偏防御（即使价趋势仍中性）。",logicRatesR3:"R3：60 日收益率下降 ≤ −0.25pp → 允许较积极姿态（非亢奋）。",logicRatesSeparate:"硬规则：dial_US 与 dial_TW 分开；不混成「全球心情」。",logicStep2:"数学筛选（A／B）",logicStep2Lead:"相对强度、动能、SMA、量比；门槛依周期姿态调整。",logicScreenA:"筛选 A · 动能／相对强度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日涨≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或双均线且 5日≥0／RS≥0。",logicScreenASelective:"精选：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量视为可过）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"积极／偏建设：放宽 RS／日／5日／1月；允许 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建设另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求稳：须站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌后先稳定）。",logicScreenB:"筛选 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。门槛：防守 ≥1.0；积极 ≥1.1；其余 ≥1.2。",logicScreenBMom:"补标 A：若未过 A，但 1月≥8% 且 SMA20＋SMA50（非先求稳）→ 仍标 A。",logicScore:"排序分数",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加权（上限约 8×0.6）；量比<0.4 −0.5；再依市场周期调整分数。",logicStep3:"XQ 策略选股",logicXqLead:"与每日名单并行：条件式命中（价量／筹码／财务／大师／周期）。缺栏标「资料不足」，不捏造。",logicXqPriceVol:"价量：均线多头、超短线作多等（OHLCV 实算）。",logicXqFlow:"筹码：法人同步等（公开张数门槛）。",logicXqFund:"财务：获利递增、PE／营益率等公开财报栏。",logicXqMasters:"大师：林奇／格雷厄姆／巴菲特等可计算代理条件。",logicXqCycle:"周期：科斯托拉尼／市场周期包（依当日美台姿态）。",logicOpenStrategies:"打开策略页",logicStep4:"排序降权／加权",logicStep4Lead:"scoreAdjust：依姿态对高 RS 缩量、firm-hands、恐慌稳定做加减分。",logicDemoteHot:"防守／精选：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日涨>2% → −1.2；缺双均线 −1.5。",logicDemoteThin:"K5：高相对强度但量能不足 → 降权／排除积极桶。",logicPromoteFirm:"aggressive／constructive：价弱量增且 SMA200（firm-hands）→ +2.2；早段放量上涨 +1.0。",logicDemotePanic:"stabilize_first：基准 −3；站上 SMA20 才 +1.5。",logicListSize:"名单长度：防守 ≈0.55×；精选 ≈0.75×；先求稳 ≈0.45×；积极 +2（上限14）；基准 12。",logicStep5:"「为什么」如何组成",logicStep5Lead:"why 栏为可读摘要，非模型黑箱——由当日可验证栏位串接。",logicWhyRs:"日涨跌 + 相对指数（美：S&P；台：加权）pp。",logicWhyMom:"五日%、约一个月%。",logicWhyVol:"量比≥1.2 才写入量能句。",logicWhySma:"SMA20／50／200 站上状态（双均线优先）。",logicWhyRegime:"附加周期备注或姿态／心理相位标签。",logicStep6:"纸上部位纪律",logicStep6Lead:"模拟账验证流程；非实单。部位受周期部位乘数与固定风险公式约束。",logicPaperCapital:"本金：台股 NT$3,000,000（整张）；美股 US$100,000（1 股起）。",logicPaperBuy:"买：名单（纯 observe 尽量不买）；风险＝权益×1%；停距≈价×1.5%（量比≥3→2.5%）；单档≤权益 8%。",logicPaperSizeMult:"部位乘数（0.3–1.35×）标示当日建议积极度；与名单长度联动。",logicPaperSell:"卖：停损 −3%；停利 +12% 半仓；破 SMA20 且日跌>2%；离名单且亏损；涨停风格隔日 −5%。",logicOpenPaper:"打开模拟页",logicFootnote:"框架合成仅供透明筛选说明，非投资建议。公开作者方法之可编码代理；不重制受著作权保护之原文。",condPass:"条件",condFail:"未过",condSkip:"略过",pe:"本益比",opMargin:"营益率",grossMargin:"毛利率",foreignInv:"外资",trustInv:"投信",dealerInv:"自营商",maBull:"均线多头",amplitude:"振幅",zhang:"张",limitUp:"涨停",momentum:"动能",metricPrice:"价格",metricDayPct:"日涨跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(张)",metricDebt:"负债比%",metricDirector:"董监持股%",metricOpQ:"近季营益率%",metricSource:"来源",foreign1d:"外资1日(张)",trust1d:"投信1日(张)",dealer1d:"自营商1日(张)",foreign5d:"外资5日(张)",trust5d:"投信5日(张)",dealer5d:"自营5日(张)"},qn={..._t,siteTitle:"毎日クオンツ選株",loading:"読み込み中…",disclaimer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",footer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",dataAsOf:"データ",taipei:"（台北）",navMain:"メインナビ",navToday:"本日",navStrategies:"戦略",navPaper:"模擬",navMore:"その他",navMoreClose:"閉じる",navLogic:"ロジック",researchTitle:"研究",navResearch:"研究",navOptions:"オプション",navEarnings:"決算を読む",earningsTitle:"決算を読む",earningsLead:"米国 Mag7 と注目決算の要約：何をしている会社か、主要数字、次に見る点——平易な言葉、日次更新。投資助言ではありません。",earningsDisclaimer:"投資助言ではありません。数値は公開 Yahoo Finance 由来；欠落は「データ不足」。個別の投資助言ではありません。",earningsUsFocus:"米国中心",earningsTwStub:"台湾株の決算は後日対応（スタブ）",earningsSelectionTitle:"注目リストのルール：",earningsSelectionFallback:"今後14日以内に決算がある非Mag7大型株（時価総額順）；または Yahoo 出来高上位；不足分は45日以内のカレンダーで補完。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——前回決算と次回日（判明時）。",earningsMag7Badge:"Mag7",earningsHotTitle:"注目・話題の決算",earningsHotLead:"上記ルールで選定；バッジが理由を示します。",earningsHotEmpty:"現在の窓に該当なし（またはデータ不足）",earningsWhatItDoes:"この会社は何をしているか",earningsWhatToWatch:"次に見る点",earningsNextDate:"次回決算",earningsLastEps:"前回 EPS",earningsRevYoy:"売上高 YoY",earningsEpsYoy:"利益 YoY",earningsPe:"PER",earningsForwardPe:"予想 PER",earningsEstimate:"予想",earningsDataMissing:"データ不足",earningsTagPrimary:"14日以内・大型",earningsTagActives:"出来高上位・14日",earningsTagRecent:"直近発表",earningsTagFallback:"45日カレンダー注目",earningsTagOther:"注目",earningsPartialBlocker:"一部データ取得不可",earningsRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",earningsLoadError:"決算ダイジェストを読めません（{msg}）",earningsEmpty:"決算ダイジェストを準備中です。しばらくしてからご確認ください。",navLookup:"銘柄検索",lookupTitle:"銘柄検索",lookupLead:"米株または台湾株のティッカーで会社概要・気配・決算ハイライトと公式財務リンクを表示。相場は Yahoo、公式開示は SEC／MOPS。投資助言ではありません。",lookupDisclaimer:"投資助言ではありません。相場は公開 Yahoo Finance、公式財務リンクは SEC EDGAR／MOPS。欠落は表示せず創作しません。取得は通信やソース制限の影響を受け得ます。",lookupInputLabel:"ティッカー",lookupPlaceholderUs:"例: AAPL",lookupPlaceholderTw:"例: 2330 または 2330.TW",lookupHintUs:"米株: AAPL、MSFT、NVDA など",lookupHintTw:"台湾株: 2330 のような4桁（.TW を自動付与；OTC は .TWO）",lookupSearch:"検索",lookupIdle:"ティッカーを入力して検索すると、気配と決算要約を表示します。",lookupLoading:"Yahoo Finance から取得中…",lookupEmptyInput:"ティッカーを入力してください",lookupInvalid:"形式を認識できません。米株は AAPL、台湾株は 2330 または 2330.TW",lookupNotFound:"このティッカーの気配が見つかりません。米／台タブと記号を確認してください。",lookupError:"検索に失敗（{msg}）",lookupBusiness:"事業内容",lookupQuoteStats:"気配と主要指標",lookupFinancials:"財務スナップショット",lookupEarnings:"決算ハイライト",lookupPrevClose:"前日終値",lookupVolume:"出来高",lookupDayRange:"本日レンジ",lookup52w:"52週レンジ",lookupMarketCap:"時価総額",lookupEps:"EPS（ttm）",lookupBeta:"Beta",lookupDivYield:"配当利回り",lookupRevenue:"売上高",lookupGrossMargin:"粗利率",lookupProfitMargin:"純利益率",lookupEpsConsensus:"EPS 予想",lookupEpsSurprise:"EPS サプライズ",lookupSources:"出典",lookupPartial:"一部の詳細項目は取得不可（取得できた数値のみ表示）。",lookupOfficialFilings:"公式財務書類",lookupOfficialFilingsLead:"公式の開示・届出へのリンクです。米国株は取得可能なとき直近の 10-K／10-Q／8-K も表示します。数値の創作はしません。",lookupSourceOfficial:"公式ソース",lookupSourceQuote:"相場ソース",lookupSourceCompany:"会社サイト",lookupSecEdgarSearch:"SEC EDGAR 会社届出検索",lookupSecEdgarBrowse:"SEC EDGAR 会社ページ",lookupSecFormsFilter:"SEC 10-K／10-Q フィルタ",lookupMopsFinancialBook:"公開資訊觀測站｜財務報告書",lookupMopsFinancialQuery:"公開資訊觀測站｜財務報告照会",lookupMopsCompany:"公開資訊觀測站｜会社基本情報",lookupMopsMaterial:"公開資訊觀測站｜重大情報",lookupTwseIsin:"TWSE ISIN／基本検索",lookupTpexCompany:"TPEx｜会社情報",lookupYahooTwQuote:"Yahoo 台湾相場（相場情報・公式書類ではない）",lookupCompanyWebsite:"会社ウェブサイト",lookupInvestorRelations:"IR（公開情報）",lookupRecentFilings:"直近の公式届出",lookupFilingForm:"様式",lookupFilingDate:"提出日",lookupFilingDoc:"書類",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"直近届出一覧を読み込めません（通信またはソース制限）。",lookupFilingsListEmpty:"表示できる直近の 10-K／10-Q／8-K がありません。",lookupFilingsLinksStillWork:"上の公式リンクは引き続き利用できます。",lookupFilingsTwNote:"台湾株の公式財務は MOPS（公開資訊觀測站）を主にしてください。下の相場リンクは補助です。",lookupFilingsCikUnavailable:"SEC CIK を特定できません。上の EDGAR でティッカー検索できます。",navSoxl:"SOXL",soxlTitle:"SOXL 半導体レバレッジ",soxlLead:"Direxion 半導体ブル3倍ETF：最新価格、イベント／異常、関連ニュース、SEC N-PORT 保有比率と寄与の概算——平易な整理。投資助言ではありません。",soxlDisclaimer:"投資助言ではありません。SOXLは約3倍の日次レバレッジETFで変動が極めて大きいです。保有比率はSEC N-PORT（当日ではない）、寄与は概算です。",soxlHeroLabel:"SOXL 最新価格",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正規取引終値",soxlLeverageNote:"SOXLはICE Semiconductor Indexの日次リターンの約3倍を目指します。夜間や複数日は単純な3倍ではありません。",soxlHoldingsAsOf:"保有比率基準日",soxlHoldingsNotSameDay:"最新N-PORT、当日ではない",soxlEventsTitle:"イベント／異常",soxlNewsTitle:"関連ニュース",soxlNewsEmpty:"関連ニュースはまだありません。",soxlHoldingsTitle:"保有と寄与の概算",soxlHoldingsLead:"比率はSEC N-PORT由来。現金と指数スワップが大きいことが多い。寄与≈比率×リターン（概算表示。3倍ETFのポイントとは異なる）。",soxlHoldingsEmpty:"保有リストを準備中です。しばらくしてからご確認ください。",soxlColName:"銘柄",soxlColWeight:"比率",soxlColReturn:"日次リターン",soxlColContrib:"寄与概算",soxlColReasons:"平易な理由",soxlContributionHint:"概算＝比率% × リターン% ÷ 100（バスケットのポイント。SOXLは約3×日次でETFポイントではない）",soxlSourceN:"出典 {n}",soxlOverallTitle:"上がる理由／下がる理由",soxlWhyUp:"上昇側の要因",soxlWhyDown:"下落側の要因",soxlRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",soxlLoadError:"SOXLデスクを読み込めません（{msg}）",navTxf:"TX先物",txfTitle:"台湾株価指数先物",txfLead:"TAIEX現物とTX先物：直近／次限月、ベーシス、出来高・建玉、機関投資家ポジション、証拠金と満期——TAIFEX／TWSEの公開データのみ。平易な整理。投資助言ではありません。",txfDisclaimer:"投資はリスクを伴います。参考情報であり投資助言ではありません。米株と台湾先物は分離。欠落項目は捏造しません。",txfHeroLabel:"TX直近限月",txfNearBadge:"直近",txfNextBadge:"次限",txfSettle:"清算値",txfVolume:"出来高",txfOI:"建玉",txfSessionDate:"取引日",txfSpotLabel:"TAIEX現物",txfBasisLabel:"ベーシス",txfBasisHint:"ベーシス＝直近先物 − 現物。正は先物プレミアム。",txfMultiplierShort:"TX乗数 NT${n}/pt（紙上損益＝ポイント差×乗数×枚数）",txfContractsTitle:"限月：TX / MTX / TMF",txfContractsLead:"日中取引セッション。月限の最終取引日は公式の第3水曜日ルール（祝日は取引所発表に従う）。",txfMultLabel:"乗数",txfPerPoint:"/pt",txfMarginInitial:"当初証拠金",txfMarginMaint:"維持証拠金",txfColMonth:"限月",txfColLast:"直近値",txfColSettle:"清算",txfColChange:"騰落",txfColVolume:"出来高",txfColOI:"建玉",txfColLTD:"最終取引日",txfInstTitle:"三大法人の先物ポジション",txfInstLead:"建玉の売買と当日ネット（TAIFEX、{date}時点）",txfInstFoot:"集計値であり、単一機関の戦略ではありません。",txfColParty:"区分",txfColLongOI:"買い建玉",txfColShortOI:"売り建玉",txfColNetOI:"ネット建玉",txfColNetVol:"ネット出来高",txfCalendarTitle:"清算／オプション集計",txfNextLTD:"直近の最終取引日",txfNearMonth:"直近",txfNextMonth:"次限",txfLTDRule:"月限の最終取引日＝受渡月の第3水曜日。",txfRecentSettle:"直近の最終清算値",txfPcrTitle:"TXOプット／コール",txfPcrVol:"出来高レシオ",txfPcrOI:"建玉レシオ",txfExplainTitle:"平易な説明",txfExplain1:"TXはTAIEXを原資産とする現金決済の指数先物。MTX・TMFは小さい契約単位です。",txfExplain2:"ベーシス＝先物 − 現物。満期が近づくと収れんしやすいです。",txfExplain3:"建玉（OI）は未決済契約の規模であり、その日の値動き理由そのものではありません。",txfExplain4:"紙上損益 ≈ ポイント差 × 乗数 × 枚数（TX NT$200、MTX NT$50、TMF NT$10／pt）。証拠金は取引所発表に従います。",txfSourcesTitle:"出典",txfLoadError:"TX先物デスクを読み込めません（{msg}）",navPodcasts:"著名人ポッドキャスト",navLetters:"株主レター",navManbao:"曼報 Pro",lettersTitle:"バフェットの株主への手紙",lettersLead:"年を選ぶと、このページからバークシャー公式原文を開く。要点は短い整理で、全文でも投資助言でもない。公式ページは埋め込みを許可していない。",lettersDisclaimer:"要点は原文の引用ではない。1965–1976年は個別ページがなく、公式索引は1977年から。2025年はグレッグ・アベルの最初の手紙。",lettersMenuLead:"時期と年を選ぶ。原文はバークシャー公式サイトで読み、ここには要点だけ。",lettersReadBadge:"要点を確認",lettersLinkBadge:"リンクのみ",lettersOpen:"公式原文",lettersReaderOpen:"公式原文を読む",lettersReaderOpenPdf:"公式 PDF を読む",lettersReaderNote:"バークシャーは他サイトへの埋め込みを禁止しているため、本文は置かない。ボタンから公式ページで読む。",lettersReaderRegion:"公式原文",lettersOfficialHost:"原文は berkshirehathaway.com に残す。",lettersYearRail:"年",lettersMissing:"その年の公式リンクがない。",lettersLinkOnlyNote:"要点は付けていない。公式ページで読む。",lettersAuthor:"著者",lettersBack:"一覧へ",manbaoTitle:"曼報 Pro",manbaoLead:"有料本文は転載しない。公開長文だけ短い要約。会員限定は公開索引の見出しと公式リンクのみ。",manbaoDisclaimer:"投資助言ではなく、曼報の許諾転載でもない。Pro の本文は公式サイトに残す。",manbaoMenuLead:"分類を選ぶ。公開長文は要約、Pro はリンクのみ。",manbaoPublicBadge:"公開要約",manbaoPaywallBadge:"リンクのみ",manbaoOpen:"公式ページ",manbaoBack:"一覧へ",manbaoCatPublic:"公開長文",manbaoCatDecode:"商業解碼",manbaoCatTech:"科技曼讀",manbaoCatGiants:"巨人之聲",manbaoCatClub:"曼報俱樂部",manbaoCatAbout:"入口",lettersCatEarly:"1977–1989",lettersCat90:"1990–1999",lettersCat00:"2000–2009",lettersCat10:"2010–2019",lettersCat20:"2020–2025",lettersCatSpecial:"特別書簡",podcastsTitle:"著名人ポッドキャスト",podcastsLead:"著名投資家／ホストの公開インタビューとポッドキャスト枠組み：要点を掃読、米／台分離、候補状態を明示——投資助言ではありません。",podcastsDisclaimer:"投資助言ではありません。公開インタビューと研究ライブラリ既存資料の整理。数値は出典付き。数学ゲート未通過は候補／様子見のみ。",podcastsFeatured:"注目",podcastsStubBadge:"候補スタブ",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（謝孟恭）",podcastsGooayeLead:"台湾のマーケット／マクロ／リスク／個人投資家心理のポッドキャスト。各回の要点は公開RSS番組ノートから整理（逐語録なし・投資助言ではありません）。",podcastsGooayeMarket:"台湾中心 · 米／台分離",podcastsGooayeStubNote:"軽量スタブ：完全条目と計算可能ルールは研究ライブラリ。ここにはエピソード引用を創作しません。",podcastsGooayePoint1:"銘柄話より先にリスクとサイズ",podcastsGooayePoint2:"半導体チェーンはバスケットで見る",podcastsGooayePoint3:"米は金利でリスクオン代理、台は別計算",podcastsGotoResearch:"研究ライブラリの条目へ",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"カテゴリ",podcastsCategories:"著名人podcastカテゴリ",podcastsMenuLead:"先にカテゴリを選んでから本文へ——長い記事を一覧に並べません。",podcastsOpenCategory:"このカテゴリを開く",gooayeLibraryBadge:"エピソード庫",gooayeDisclaimer:"候補／ウォッチ；数学ゲート閉鎖。「聴取済・分析」は公開音声＋音声認識後の株式ポイント。「番組ノートのみ」はRSSティーザーで未聴取。ホスト見解；投資助言ではありません。",gooayeLoading:"Gooayeエピソードを読み込み中…",gooayeLoadError:"エピソード庫を読み込めません（{msg}）",gooayeEpisodeCount:"全 {n} 回（公開RSS）",gooayeAsOf:"時点 {date}（台北）",gooayeEmptyCount:"うち {n} 回は公開テキスト不足（タイトルのみ）",gooayeSearchLabel:"エピソード検索",gooayeSearchPlaceholder:"タイトル・回番号・キーワード",gooayeSourceLine:"出典：",gooayeKeyPoints:"要点整理",gooayeNotesThin:"公開ノートはほぼタイトルのみで、要約できる本文がありません。",gooayeTeaserNote:"公開ショーノートは短め（短いフック＋広告が多い）です。上記は使える公開文のみ——音声未聴取・創作なし。",gooayeListen:"聴く（SoundOn）",gooayeLoadMore:"あと {n} 回表示（残り {left}）",gooayeShowingAll:"全 {n} 回を表示中",gooayeNoResults:"一致するエピソードがありません。",gooayeUntitled:"無題のエピソード",gooayeBadgeListened:"聴取済・分析",gooayeBadgeRssOnly:"番組ノートのみ",gooayeStockAnalysis:"株式ポイント分析（聴取済）",gooayeRssTeaserToggle:"公開番組ノート（RSS）",gooayeListenedAt:"聴取・整理 {date}（台北）",gooayeListenedCount:"聴取済 {n} 回",gooayeRssOnlyNote:"音声未聴取。上記は公開RSS／番組ノートのみで、聴取分析ではありません。",podcastsXiaojunTitle:"張小珺jùn｜商業インタビュー",podcastsXiaojunHandle:"張小珺 · ビジネス／テック長尺対談",podcastsXiaojunLead:"中国テック・ビジネス人物の長尺インタビュー。カタログは公開RSSの番組ノート。『聴取済』は株式／産業メモ付き（候補／ウォッチ、投資助言ではありません）。",podcastsXiaojunMarket:"中国テック中心 · クロスマーケット観察",podcastsXiaojunApple:"Apple Podcasts で聴く",xiaojunLibraryBadge:"エピソード庫",xiaojunDisclaimer:"候補／ウォッチ。数学ゲート閉。『聴取済』は公開音声＋音声認識後の株式／産業メモ。『番組ノートのみ』はRSSのみ。ホスト見解。投資助言ではありません。",xiaojunLoading:"張小珺エピソード庫を読み込み中…",xiaojunLoadError:"エピソード庫を読み込めません（{msg}）",xiaojunEpisodeCount:"全 {n} 回（公開RSS）",xiaojunAsOf:"データ時点 {date}（台北）",xiaojunEmptyCount:"うち {n} 回は公開テキスト不足（タイトルのみ）",xiaojunSearchLabel:"エピソード検索",xiaojunSearchPlaceholder:"タイトル・回号・キーワード",xiaojunSourceLine:"出典：",xiaojunKeyPoints:"要点",xiaojunNotesThin:"公開ノートはタイトル／短いフレーズのみ。",xiaojunTeaserNote:"公開RSS／番組ノートのみ。音声未聴取。創作なし。",xiaojunListen:"Apple Podcasts で聴く",xiaojunLoadMore:"さらに {n} 回（残り {left}）",xiaojunShowingAll:"全 {n} 回を表示中",xiaojunNoResults:"一致する回がありません。",xiaojunUntitled:"無題の回",xiaojunBadgeListened:"聴取済",xiaojunBadgeRssOnly:"番組ノートのみ",xiaojunStockAnalysis:"株式／産業メモ（聴取済）",xiaojunRssTeaserToggle:"公開番組ノート（RSS）",xiaojunListenedAt:"聴取メモ {date}（台北）",xiaojunListenedCount:"聴取済 {n} 回",xiaojunRssOnlyNote:"音声未聴取。上記は公開RSS／番組ノートのみ。",podcastsWhynottvTitle:"WhynotTV Podcast",podcastsWhynottvHandle:"Tairan He · AI／ロボティクス長尺",podcastsWhynottvLead:"AI・ロボティクス・研究スタートアップの長尺対談。カタログは公開Anchor RSS。『聴取済』は産業メモ付き（候補／ウォッチ、投資助言ではありません）。",podcastsWhynottvMarket:"AI／ロボティクス・研究スタートアップ · クロスマーケット観察",podcastsWhynottvApple:"Apple Podcasts で聴く",whynottvLibraryBadge:"エピソード庫",whynottvDisclaimer:"候補／ウォッチ。数学ゲート閉。『聴取済』は公開音声＋音声認識後の産業メモ。『番組ノートのみ』はRSSのみ。ホスト見解。投資助言ではありません。",whynottvLoading:"WhynotTVエピソード庫を読み込み中…",whynottvLoadError:"エピソード庫を読み込めません（{msg}）",whynottvEpisodeCount:"全 {n} 回（公開RSS）",whynottvAsOf:"データ時点 {date}（台北）",whynottvEmptyCount:"うち {n} 回は公開テキスト不足（タイトルのみ）",whynottvSearchLabel:"エピソード検索",whynottvSearchPlaceholder:"タイトル・回号・キーワード",whynottvSourceLine:"出典：",whynottvKeyPoints:"要点",whynottvNotesThin:"公開ノートはタイトル／短いフレーズのみ。",whynottvTeaserNote:"公開RSS／番組ノートのみ。音声未聴取。創作なし。",whynottvListen:"Apple Podcasts で聴く",whynottvLoadMore:"さらに {n} 回（残り {left}）",whynottvShowingAll:"全 {n} 回を表示中",whynottvNoResults:"一致する回がありません。",whynottvUntitled:"無題の回",whynottvBadgeListened:"聴取済",whynottvBadgeRssOnly:"番組ノートのみ",whynottvStockAnalysis:"株式／産業メモ（聴取済）",whynottvRssTeaserToggle:"公開番組ノート（RSS）",whynottvListenedAt:"聴取メモ {date}（台北）",whynottvListenedCount:"聴取済 {n} 回",whynottvRssOnlyNote:"音声未聴取。上記は公開RSS／番組ノートのみ。",podcastsZhangJunanTitle:"張濬安",podcastsZhangJunanHandle:"et220870 · Blogspot／PTT",podcastsZhangJunanLead:"公開ブログとPTT投稿の整理。成績レビュー、売買規律、証券／住宅ローン実務、初期の売買日誌。「分析済」は本文既読、「タイトルのみ」は本文不可。候補／ウォッチ。投資助言ではありません。",podcastsZhangJunanMarket:"台湾株／売買実務 · 個人レビュー",zhangJunanLibraryBadge:"記事庫",zhangJunanDisclaimer:"候補／ウォッチ。数学ゲート閉鎖。「分析済」：公開本文（ブログまたはPTT本文＋コメント）を読んだ上での市場メモ。「タイトルのみ」：本文欠落／削除。著者の見解であり助言ではありません。銘柄リストには入れません。",zhangJunanLoading:"張濬安ライブラリを読み込み中…",zhangJunanLoadError:"ライブラリを読み込めません（{msg}）",zhangJunanPostCount:"全 {n} 件（公開リスト）",zhangJunanAsOf:"データ時点 {date}（台北）",zhangJunanAnalyzedCount:"分析済 {n} 件",zhangJunanTitleOnlyCount:"うち {n} 件はタイトルのみ",zhangJunanSearchLabel:"記事検索",zhangJunanSearchPlaceholder:"タイトル、板、キーワード",zhangJunanSourceLine:"出典：",zhangJunanKeyPoints:"要点",zhangJunanStockAnalysis:"株式／資産メモ（分析済）",zhangJunanNotesThin:"公開文が少なく、タイトルとリンクのみ。",zhangJunanTitleOnlyNote:"公開本文は削除または解析不可。内容は創作していません。",zhangJunanOpenBlog:"原文を開く（ブログ）",zhangJunanOpenPtt:"原文を開く（PTT）",zhangJunanLoadMore:"さらに {n} 件（残り {left}）",zhangJunanShowingAll:"全 {n} 件を表示中",zhangJunanNoResults:"該当なし。",zhangJunanUntitled:"無題",zhangJunanBadgeAnalyzed:"分析済",zhangJunanBadgeTitleOnly:"タイトルのみ",zhangJunanSourceBlog:"ブログ",zhangJunanSourcePtt:"PTT",zhangJunanCommentSummary:"コメント要約",zhangJunanFilterAll:"すべて",zhangJunanFilterBlog:"ブログ",zhangJunanFilterPtt:"PTT",zhangJunanFilterSeriesAll:"全サブ分類",zhangJunanSourceFilters:"出典フィルタ",zhangJunanSeriesFilters:"サブ分類フィルタ",researchCatMenu:"カテゴリ",researchCategories:"研究カテゴリ",researchMenuLead:"タイプ／市場／状態を先に選び、その分類だけを閲覧します。",researchOpenCategory:"このカテゴリを開く",researchCatBooks:"書籍",researchCatPapers:"論文",researchCatPodcasts:"Podcast",researchCatUs:"米国フォーカス",researchCatTw:"台湾フォーカス",researchCatCandidate:"候補",researchCatWatch:"ウォッチ",researchBackMenu:"カテゴリに戻る",researchStatusFilters:"ステータス",godzillaTitle:"ゴジラ",godzillaLead:"Threads インタビュイー「哥吉拉」の米国株フレームワーク：時間と健康、RSU の再配置、ファンダ、能力圏、税務ペース、オプション道具——平易なカード。投資助言ではありません。",godzillaDisclaimer:"投資助言ではありません。公開インタビューの整理。数値・手法は本人の自述。数学ゲート未通過のため候補／様子見のみ。",godzillaHeroLabel:"ゴジラ枠組みの概要",godzillaKicker:"候補枠組み · 米国株中心",godzillaTagline:"健康な時間を自由に換える。現物が核、オプションは補助。税が回転ペースを決める。",godzillaBadgeCandidate:"候補",godzillaBadgeWatch:"様子見",godzillaUsFocus:"米国株中心",godzillaSelfReport:"本人の自述",godzillaListenedBadge:"聴取済・分析",godzillaStockTitle:"株式ポイント分析（聴取済）",godzillaStockLead:"公開 YouTube 音声＋音声認識に基づくインタビュー見解（候補／ウォッチ；投資助言ではない）。",godzillaStock1:"時間と健康は現金／RSU の積み増しより優先。金で時間は買えない。RSU が増えると退職目標も上がりがち。",godzillaStock2:"米テック報酬は RSU 比重が高い。株高は総報酬を押し上げると同時に単一銘柄集中リスクも拡大。",godzillaStock3:"タイミング（自述）：Tesla は早めに入り「もっと早く利確できた」とも。Meta は相対的に弱い局面で入った。",godzillaStock4:"次の注目は B2C の AI アプリ。挙げられた例は Tesla FSD と Palantir。AI の多くはまだ B2B。ハード投資は継続。",godzillaStock5:"NVIDIA に強気でも一銘柄全力は避ける。米 W2／税務と給与＋株の集中を一体で設計。",godzillaStock6:"台湾はキャピタルゲイン税なし vs 米国課税。流動性の意味が違い、米国流をそのままコピーしない。",godzillaStockNote:"STT: faster-whisper small int8。公開 YT 出典。数値・銘柄は本人見解。候補／ウォッチ。",godzillaSourceLabel:"出典",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"YouTube インタビューを見る",godzillaThesesTitle:"核心論点",godzillaThesesLead:"10の要点。詳細は本人の自述。",godzillaThesis1Title:"時間と健康は RSU 積み増しより大事",godzillaThesis1Body:"退職目標は膨らみやすい（自述例：$3,000万→$6,000万＋住居／子供）。止まるのは体が限界のときが多い。健康な40代で旅と自由を取るのは50–60代とは違う。",godzillaThesis2Title:"米RSUはインセンティブを変える",godzillaThesis2Body:"4年ベスティングで利害一致。台湾の現金賞与は自社株を買いづらい。",godzillaThesis3Title:"ベスティング日に売却し信念銘柄へ",godzillaThesis3Body:"確定RSUは当日売却し信念銘柄（例：NVDA）へ。給与＋未確定が同一カゴにならないように。",godzillaThesis4Title:"ファンダのみ",godzillaThesis4Body:"売上／EPSトレンド。ウォール街目標は無視。ニュース雑音は害が多い。",godzillaThesis5Title:"能力圏：ハード／テック",godzillaThesis5Body:"ハード／テック——NVDA最大。PLTR、AVGO、TSMも。テック外は少ない。指数は今は小さめ、終局はほぼ指数。",godzillaThesis6Title:"税がペースを決める",godzillaThesis6Body:"高W2はCG税が重い。退職後は数年かけて個別→指数へ税負担を許容内に。カバードコールで下落緩衝。",godzillaThesis7Title:"オプションは道具",godzillaThesis7Body:"主に売り手（CC／CSP）。ロングコール／LEAPは恐慌や価格とファンダ乖離時のみ少額。プレミアム全損を許容。裸売りなし。",godzillaThesis8Title:"カバードコール：割当リスクはロール",godzillaThesis8Body:"割当リスクなら時間を延ばしてロール。小さなプレミアムのためにコアを売らない。不安なら枚数を減らす。",godzillaThesis9Title:"エントリーはトレンド待ち",godzillaThesis9Body:"きれいな決算1–2回でトレンド確認。コストが上がっても可。余資で良い会社を買い続ける。話題の噂は追わない。",godzillaThesis10Title:"米／台の観察は分ける",godzillaThesis10Body:"米CG税→長期保有寄り。台はCGなし＋取引税→回転と投機文化が強め（観察のみ）。",godzillaChecklistTitle:"作法チェック",godzillaChecklistLead:"自己点検。発注リストではない。",godzillaCheck1:"物欲を低く。「足りた」数字を無限に上げない。",godzillaCheck2:"現物が核。オプションは衛星／ヘッジ／まれなレバレッジ。",godzillaCheck3:"借入なし。ゼロを受け入れられないならオプションしない。",godzillaCheck4:"オプションは流動性の高い大型株優先。",godzillaCheck5:"終局目安：約80%広範指数、小さな業種スリーブ（＋まれな少額コール）。",godzillaCheck6:"PLTR例：前線エンジニアによるB2B収益化。商業成長が失望なら縮小。",godzillaOptionsTitle:"オプションの使い方",godzillaOptionsLead:"売り手優先。買い側は極端な乖離時のみ。",godzillaOpt1:"主力：カバードコール、キャッシュ担保プット。",godzillaOpt2:"少額ロングコール／LEAP：恐慌やファンダ乖離時。",godzillaOpt3:"プレミアムは全損あり得る。裸売りなし。",godzillaOpt4:"割当リスクはロール。コアを小さなプレミアムで売らない。",godzillaRsuTitle:"RSU・税・ローテーション",godzillaRsuLead:"インセンティブ、分散、退職後の税ペース。",godzillaRsu1:"確定RSUは当日売却し信念銘柄へ（例：NVDA）。",godzillaRsu2:"在職中は大口実現益を抑え、退職後に数年かけて個別→指数。",godzillaRsu3:"カバードコールは下落緩衝であり方向賭けではない。",godzillaTwTitle:"台湾市場の観察",godzillaTwLead:"米フレームワークと分離。税／文化の観察のみ。",godzillaTwBody:"米はCG税で長期寄り。台はCGなし＋取引税で回転と短期文化が目立つ。本ページは米枠が主軸。台は対照のみで正式スクリーナーには入れない。",godzillaGateNote:"正式スクリーナー未収録",godzillaGateDetail:"状態：候補／strategyCandidate=watch。数学ゲート閉鎖——ライブスクリーナーやペーパー取引には未接続。閲覧用。",jensenTitle:"ジェンスン・フアン（黄仁勲）",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公開講演の整理：視点、需要とムーアの法則、文化、キャッシュ現実、再発明——候補／様子見。投資助言ではありません。",jensenDisclaimer:"投資助言ではありません。Stanford Online 公開講演（約2009；YouTube 2011アップロード）の整理。論点は講演者の自述テーマ。数学ゲート未通過のため候補／様子見のみ。",jensenHeroLabel:"ジェンスン・フアン講演の要点",jensenKicker:"候補講演 · 米国テック／半導体の会社づくり",jensenTagline:"曖昧な「ビジョン」より視点。文化と再発明が長期の会社建設を支える。",jensenUsFocus:"米国テック中心",jensenTalkBadge:"公開講演",jensenListenedBadge:"聴取済・分析",jensenStockTitle:"事業／株式メモ（聴取済）",jensenStockLead:"公開 Stanford ETL 講演の音声＋音声認識（約2009；歴史的見解であり直近決算ではない）。候補／ウォッチ；投資助言ではない。",jensenStock1:"創業（1993）：PC＋3D／ゲームが大市場になると賭ける。当時VC／親は「ゲームのために会社」を疑った。",jensenStock2:"競争：コンシューマ3Dに数十〜数百社。NVIDIAは最終的に唯一のコンピュータグラフィックス企業と自述——事業の本質（半導体／Moore's Law＝競争律）理解と再発明が鍵。",jensenStock3:"プログラマブルシェーダ：成功した固定機能を自ら食う。初代は会社を危うくしたが、やらねば Moore's Law の速度で死ぬと認識。",jensenStock4:"資源配分：競争が価格を決め、CEOが参入を決める。希少資源と需要・機会費用を見る（会計費用だけではない）。",jensenStock5:"文化：計算された失敗への耐性が革新に必要。スタートアップ＝ほぼ常に倒産寸前。汎用GPU（スイスアーミーリスク）は媒体寿命を延ばし得る。",jensenStock6:"時点：現代のAI学習ブーム以前の歴史講演。今日のデータセンタ損益に1:1外挿しない。NVIDIAは登壇者の会社；候補／ウォッチ。",jensenStockNote:"STT: faster-whisper small int8 (en)。出典 YT Xn1EsFe7snQ／Stanford ETL。歴史的見解。",jensenMeta:"Stanford Online · STVP ETL · 約1:03:38 · アップロード 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"YouTube で講演を見る",jensenOpenYoutube:"YouTube でフル動画を開く",jensenEmbedTitle:"Jen-Hsun Huang: Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 関連クリップ",jensenHighlightsTitle:"講演の要点（平易）",jensenHighlightsLead:"公開講演に繰り返し現れる5テーマ。逐語録ではありません。",jensenH1Title:"曖昧な「ビジョン」ではなく視点",jensenH1Body:"誰もが視点を持つ。NVIDIA 初期の賭けは、PC＋安価な3Dがゲーム市場を開く（後に Keyhole→Google Earth にも言及）というもので、当時多くのVCには市場がほぼゼロに見えた。",jensenH2Title:"飽くなき需要とムーアの法則",jensenH2Body:"新カテゴリがまだ値付けできないとき、顧客の声を一時無視することもある。rinse-and-repeat の後、「十分良い」が媒体を殺す前に再発明（固定機能→プログラマブルシェーダ／GeForce FX の瀕死、CG言語）。",jensenH3Title:"文化：計算されたリスク",jensenH3Body:"革新には計算されたリスク、速い失敗への耐性、知的誠実さ、進路変更の意思が必要。動機は情熱と目的であり「会社を売る」ことではない。",jensenH4Title:"キャッシュとスタートアップの現実",jensenH4Body:"常に資金調達、節約、または収益化。スタートアップはほぼ常に倒産寸前。VCは完璧な事業計画より、人と十分大きな市場に賭ける。",jensenH5Title:"再発明：成功も解体して再建",jensenH5Body:"あらゆる成功は最終的に解体し再建される。フアンが語るのは長期の会社建設であり、連続フリップではない。",jensenTwTitle:"米／台の分離（文脈のみ）",jensenTwLead:"市場の主軸は米国テック／半導体の会社建設。台湾はサプライチェーン文脈のみ——台湾株の銘柄創作なし。",jensenTwBody:"米半導体／計算プラットフォームとしての NVDA は、台湾のファウンドリと OSAT 生態系と強く結ばれる——産業文脈の注記のみ。台湾銘柄リストなし、正式スクリーナー未接続。",jensenGateNote:"正式スクリーナー未収録",jensenGateDetail:"状態：候補／strategyCandidate=watch。数学ゲート閉鎖——ライブスクリーナーやペーパー取引には未接続。閲覧用。",jensenWatchCta:"YouTube で視聴",jensenEmbedBlockedNote:"この講演は所有者の設定により YouTube でのみ視聴できます（他サイトへの埋め込みは無効）。",optionsTitle:"米国オプション",optionsLead:"McMillan の戦略ファミリーを軸に、ボラと損益形→公開 Yahoo チェーンで学習。投資助言ではありません。",optionsDisclaimer:"投資助言ではありません。オプションは高リスク。教育と公開データのみ。",optionsBookBadge:"この本",optionsBookCite:"主要参考文献",optionsBookLead:"Lawrence G. McMillan『選択権策略完全手冊』第5版：見通し＋ボラで戦略族へ（独自要約・原文なし）。",optionsBookFallbackTitle:"McMillan オプション戦略ハンドブック",optionsGotoResearch:"研究ライブラリの条目へ",optionsUsOnly:"米国のみ",optionsQualityTitle:"原資産の軽い財務チェック",optionsQualityLead:"副次フィルタ：PER、PBR、負債、ROE、売上／利益トレンド。欠落は資料不足。",optionsViewTitle:"オプション観点（McMillan）",optionsViewLead:"公開チェーン：ATM IV、実現ボラ、出来高偏り。戦略族は教育用。",optionsMcmillanFirst:"先にボラ状態と損益形を合わせ、その後でファミリーを選ぶ。",optionsPe:"PER",optionsPb:"PBR",optionsDebt:"負債／資本",optionsRoe:"ROE",optionsRevTrend:"売上トレンド",optionsEarnTrend:"利益トレンド",optionsGate:"品質ゲート",optionsGatePass:"通過",optionsGateWatch:"注視",optionsGateFail:"弱め",optionsGateIncomplete:"資料不足",optionsDataMissing:"資料不足",optionsForwardPe:"予想PER",optionsTrendUp:"上昇 約{pct}%",optionsTrendDown:"低下 約{pct}%",optionsTrendFlat:"横ばい 約{pct}%",optionsAtmIv:"ATM インプライド",optionsHv:"歴史ボラ（約1か月）",optionsIvHv:"IV／HV",optionsVolRegime:"ボラ状態",optionsRegimeIvRich:"IV高め",optionsRegimeIvCheap:"IV安め",optionsRegimeIvFair:"おおむね均衡",optionsRegimeIvOnly:"IVのみ",optionsCallPutVol:"コール／プット出来高",optionsAtmStrike:"近ATM行使価格",optionsExpiry:"満期",optionsSkewPutHeavy:"プット寄り",optionsSkewCallHeavy:"コール寄り",optionsSkewBalanced:"おおむね均衡",optionsEduSetups:"戦略ファミリー（教育）",optionsEduSetupsLead:"見通し＋ボラで選ぶ。緑は現状の IV/HV とよく議論される組（助言ではない）。",optionsSetupCoveredCall:"カバードコール",optionsSetupCoveredCallBody:"株を持ちコールを売る。プレミアムを得るが上昇は頭打ち。",optionsSetupCoveredCallWarn:"利益に天井。株の下落リスクは残る。",optionsSetupProtectivePut:"プロテクティブプット",optionsSetupProtectivePutBody:"株＋プット買い＝保険。下値に床、だが保険料がかかる。",optionsSetupProtectivePutWarn:"保険コストがリターンを削る。IVが高いと高い。",optionsSetupVertical:"バーティカル",optionsSetupVerticalBody:"同満期・異行使価格で損益を枠内に限定。",optionsSetupVerticalWarn:"方向ミスでも損失。ただし上限あり。",optionsSetupCalendar:"カレンダー／ダイアゴナル",optionsSetupCalendarBody:"異満期で時間やボラ変化の見方を表す。",optionsSetupCalendarWarn:"時間とボラに敏感。スポット移動で形が変わる。",optionsSetupStraddle:"ストラドル／ストラングル",optionsSetupStraddleBody:"両側で「大きく動く」か「動き不足」に賭ける。",optionsSetupStraddleWarn:"買いは大きな値動きが必要。売りは両側リスク。",optionsSetupButterfly:"バタフライ",optionsSetupButterflyBody:"中心付近にピン留めを期待。利益ゾーンは狭い。",optionsSetupButterflyWarn:"スイートスポットが薄い。外れると最大損に近い。",optionsSetupVolAligned:"現状ボラとよくセットで語られる",optionsSetupVolNotAligned:"現状ボラとはやや遠い（学習は可）",optionsRiskShape:"損益の形（平易）",optionsNoSetups:"戦略メモなし",optionsPickTicker:"上のティッカーを選んでください",optionsChainBlocked:"オプションチェーンを取得できません",optionsPartialBlocker:"一部フィールド不足",optionsRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",optionsLoadError:"オプションスナップショットを読めません（{msg}）",optionsEmpty:"米国サンプルなし — 先に fetch-us-options",optionsGlossaryTitle:"小さな用語集（式なし）",optionsTermDelta:"デルタ（方向感）",optionsDefDelta:"株が動くときオプションがどれだけ付きやすいか。1や−1に近いほど連動が強い。",optionsTermIv:"インプライドボラ IV",optionsDefIv:"市場が織り込む将来の揺れ。高いほどオプションは高くなりやすい。",optionsTermHv:"歴史ボラ HV",optionsDefHv:"直近の実際の値動きの大きさ。IVと比較する。",optionsTermAtm:"ATM（ニアマネー）",optionsDefAtm:"現値に最も近い行使価格。ボラの温度計によく使う。",optionsTermSkew:"出来高の偏り",optionsDefSkew:"コールとプットのどちらが多いか。粗い保険／追撃のヒント。",optionsTermProb:"確率（教育）",optionsDefProb:"「多め／少なめ」の直感のみ。結果保証や個人勝率は出さない。",researchLead:"書籍と論文：タイトル → 要約 → 要点のやり方 → 戦略候補の可否",researchMathGateBanner:"戦略への正式採用は数学ゲート通過が必要（未通過）— 候補のみ",researchMathGate:"数学ゲート",researchMathGateDefault:"数学ゲート未通過",researchFormulas:"プログラム可能な式",researchTakeaways:"要点のやり方",researchNoTakeaways:"要点なし",researchSources:"出典",researchFilters:"フィルター",researchFilterAll:"すべて",researchType:"種類",researchTypeBook:"書籍",researchTypePaper:"論文",researchTypePodcast:"ポッドキャスト",researchMarketBoth:"米＋台",researchStrategy:"戦略候補",researchCandYes:"候補採用",researchCandNo:"不採用",researchCandWatch:"様子見",researchStatusCandidate:"候補",researchStatusDeferred:"保留",researchStatusAdopted:"採用",researchStatusRejected:"除外",researchCounts:"書籍 {books} · 論文 {papers} · Podcast {podcasts} · 表示 {total}",researchEmpty:"この条件に一致する項目はありません",researchNoFormulas:"式なし",researchLoadError:"研究ライブラリを読み込めません（{msg}）",researchShelfFilters:"書棚分類",researchShelfCoreInvesting:"コア投資クラシック",researchShelfValueInvesting:"バリュー投資",researchShelfBusiness:"ビジネス／経営",researchShelfLifePartner:"人生とパートナーの知恵",researchShelfOptions:"オプション／デリバティブ",researchShelfRecentReads:"最近の読書・推薦",researchShelfFiConcepts:"必須のマネーリテラシー",researchShelfMoneyValues:"お金の価値観",researchShelfInvestingBasics:"投資入門",researchShelfAssetAllocation:"資産配分",researchShelfFinancials:"財務諸表分析",researchShelfMarketAnalysis:"投資分析・市場攻略",researchShelfEconAnalysis:"経済分析",researchShelfPsych:"投資心理／ランダム／人間性",researchShelfBiographies:"伝記",researchShelfAdjacent:"その他／隣接",todayPicks:"本日の選株",market:"市場",hot:"相場",marketQuotes:"相場気配",macroTitle:"米株重要日程",macroTzEt:"時刻・米東部 ET",macroAsOf:"更新",macroStale:"データが古い（前回成功分を表示）",macroToday:"本日",macroNext:"次",macroHighImpact:"高影響",macroEmpty:"直近の高影響イベントなし（または未更新）",macroLoadError:"米株重要日程を読み込めません（{msg}）",liveQuotesLive:"リアルタイム",liveQuotesStale:"気配が古い（前回成功分を表示）",liveQuotesStaleShort:"遅延",liveQuotesPending:"リアルタイム接続中…",liveQuotesClock:"気配",macroEvent_fomcDecision:"FOMC 金利決定",macroEvent_fomcMinutes:"FOMC 議事要旨",macroEvent_cpi:"CPI",macroEvent_ppi:"PPI",macroEvent_pce:"PCE／コア PCE",macroEvent_nfp:"非農業部門雇用者数",macroEvent_joblessClaims:"新規失業保険申請",macroEvent_gdp:"GDP",macroEvent_retailSales:"小売売上高",macroEvent_ismMfg:"ISM 製造業",macroEvent_ismServices:"ISM 非製造業",macroEvent_jolts:"JOLTS",twMacroTitle:"台株重要日程",twMacroTz:"時刻・台北時間",twMacroEmpty:"直近の高影響台株イベントなし（または未更新）",twMacroLoadError:"台株重要日程を読み込めません（{msg}）",twMacroEvent_cbcDecision:"CBC 政策会合",twMacroEvent_dgbasCpi:"CPI",twMacroEvent_dgbasPpi:"PPI／物価指数",twMacroEvent_dgbasUnemployment:"失業率",twMacroEvent_dgbasGdpFlash:"GDP 速報",twMacroEvent_dgbasGdp:"GDP／成長率",twMacroEvent_dgbasForecast:"経済予測",twMacroEvent_moeaExportOrders:"輸出受注",twMacroEvent_moeaIndustrialProd:"工業生産",twMacroEvent_twseHoliday:"休場",usStock:"米国株",twStock:"台湾株",usList:"米国リスト",twList:"台湾リスト",usTop:"米国 Top",twTop:"台湾 Top",emptyTop:"{market} の Top 候補はありません",ticker:"銘柄",name:"名称",price:"価格",dayPct:"日次%",priorClose:"前日比",priorCloseFull:"前日終値比",pct5d:"5日",pct1m:"約1ヶ月",volRatio:"出来高比",ma:"移動平均",screening:"スクリーニング",reason:"理由",details:"詳細",business:"事業",risk:"リスク",observe:"観察",dataIncomplete:"データ不足",intraday:"場中",taipeiClose:"台北終値",taiex:"台湾加重 TAIEX",otc:"櫃買",loadError:"データを読み込めません（{msg}）。静的サーバーと data/latest.json を確認してください。",langLabel:"言語",paper:"模擬",paperMissing:"模擬ポートフォリオがありません。npm run paper を実行してください。",paperDisclaimer:"累積模擬口座（{date} 起） · 毎日リセットしません · シグナル即約定 · 実注文ではありません",paperRules:"ルール（市場別独立口座）",paperRuleTw:"台湾元本 NT$3,000,000 · 単元取引",paperRuleUs:"米国元本 US$100,000 · 1株から",paperRuleBuy:"買：リスト·リスク1%·ストップ1.5%·単銘柄≤8% · 即約定",paperRuleSell:"売：損切−3% · 利確+12%半分 · SMA20割れかつ日−2%超 · リスト外かつ損失 · ストップ高翌日−5%",paperTabTw:"台湾口座 · NT$",paperTabUs:"米国口座 · US$",paperBookTw:"台湾帳簿（NT$）",paperBookUs:"米国帳簿（US$）",principal:"元本",cash:"現金",equity:"純資産（ポジション＋現金）",totalPnl:"総損益",totalPnlPct:"総損益％",weekPerf:"週次",monthPerf:"月次",quarterPerf:"四半期",yearPerf:"年次",sinceInception:"開始以来",noTradesToday:"本日この種別の約定はありません（模擬）",noPositions:"保有なし",buy:"買",sell:"売",shares:"株",qtyShares:"株数",positions:"現在のポジション",position:"ポジション",avgCost:"平均単価",mark:"時価",mktValue:"時価総額",dayPnl:"日次損益",costBasis:"取得総額",weightPct:"比率％",posScrollHint:"左右にスクロールで全列",unrealizedPnl:"含み損益",unrealizedPct:"含み％",recentTrades:"約定（直近40）",paperSession:"{date} · {inception} から累積 · シグナル即約定",reasonScreenBuy:"リスト新規",reasonAdd:"追加買い",reasonStop:"損切り",reasonTakeProfit:"利確",reasonMomentumBreak:"モメンタム悪化",reasonOffList:"リスト外",reasonLimitUpChase:"ストップ高追撃解消",paperRuleOpt:"米国口座：単脚コール／プットの紙上売買。プレミアムは公開チェーン×100。満期は本源的価値で決済",paperRuleTxf:"台湾口座：TX／MTX紙上。損益＝ポイント×公式乗数（TX200／MTX50）×枚数。証拠金はTAIFEX公開初期",paperDerivUsTitle:"米国オプション（紙上）",paperDerivUsLead:"単脚の売買のみ。プレミアムは公開チェーンのみ（捏造なし）。現金の増減はこの口座のみ。",paperDerivServerBook:"サイト共通のペーパー建玉（端末保存ではなく全員に表示）。",paperDerivTwTitle:"TX／MTX（紙上）",paperDerivTwLead:"台指期デスク（session {session}）の価格。損益＝ポイント差×乗数×枚数（TWD）。",paperDerivFreeCash:"利用可能現金",paperDerivOptMv:"オプション時価",paperDerivMarginHold:"証拠金拘束",paperDerivUnderlying:"原資産",paperDerivRight:"Call／Put",paperDerivStrike:"行使価格",paperDerivPremium:"プレミアム",paperDerivCashImpact:"現金影響",paperDerivFutCode:"銘柄",paperDerivMonth:"限月",paperDerivNear:"期近",paperDerivNext:"次限月",paperDerivContract:"契約",paperDerivContracts:" 枚",paperDerivLong:"ロング",paperDerivShort:"ショート",paperDerivMarkSrc:"評価元",paperDerivLastDay:"最終取引日",paperDerivMarginNote:"紙上証拠金：TAIFEX公開の初期証拠金×枚数を現金から拘束。実注文ではない。",paperDerivNoOptPos:"オプション建玉なし",paperDerivNoFutPos:"TX／MTX建玉なし",paperDerivNoChain:"公開オプションチェーン（paperChain）がありません",paperDerivNoPremium:"この行使価格の公開プレミアムがありません",paperDerivNoTxf:"台指期デスク（txf-desk.json）がありません",paperDerivNoMonth:"その限月の気配がありません",paperDerivNoFutPrice:"公開の先物価格（last／settle）がありません",paperDerivNoMargin:"公式の初期証拠金がありません",paperDerivBadRight:"Call または Put を選んでください",paperDerivBadQty:"枚数は正の整数",paperDerivBadSide:"売買方向が無効",paperDerivBadCode:"TX／MTXのみ",paperDerivBadMult:"乗数が公式と不一致のため遮断",paperDerivExpiryMismatch:"満期が公開チェーンと不一致",paperDerivNeedCash:"現金不足（約 {need}）",paperDerivNeedMargin:"証拠金不足（約 {need}）",paperDerivMathBlock:"数学ガードが非有限値を遮断",paperDerivFail:"注文失敗",paperDerivFillOk:"約定 @ {px}",paperDerivUserOpen:"紙上新規",paperDerivUserClose:"紙上決済",paperDerivExpirySettle:"満期を本源的価値で決済",paperDerivFutSettle:"最終取引日後にsettle／lastで決済",paperDerivStrategy_covered_call:"カバードコール",paperDerivStrategy_protective_put:"プロテクティブプット",paperDerivStrategy_long_call:"ロングコール",paperDerivStrategy_long_put:"ロングプット",paperDerivStrategy_short_call:"ショートコール",paperDerivStrategy_short_put:"ショートプット",stopLoss:"損切り",takeProfit:"利確",paperTrade:"模擬",realizedPnl:"実現損益",sessionRealizedPnl:"今回の売却・実現損益合計",costMissing:"取得単価データなし",costMissingCount:"ほか {n} 件は取得単価なし",realizedOpenOnly:"未決済（含み）",paperDerivFills:"デリバティブ約定",tradeDate:"日付",periodPerf:"パフォーマンス",qty:"数量",note:"備考",strategyScreen:"戦略スクリーナー",strategyLead:"米／台ヒットを分けて表示 · データ不足は「不足」",strategyLoading:"戦略を読み込み中…",strategyEmpty:"戦略データがありません。npm run strategies を実行してください。",strategyLoadError:"戦略を読み込めません（{msg}）。npm run strategies を確認してください。",strategyList:"戦略一覧",strategyCat:"カテゴリ",hitCount:"ヒット",hitTitle:"ヒット数",strategyDetails:"詳細 · 戦略説明",conditions:"条件",results:"結果",copyJson:"JSON をコピー",exportCsv:"この戦略を CSV 出力",exportJson:"JSON 出力",copied:"コピー済み",noHitsExport:"本日この戦略のヒット行はありません",incomplete:"不足",hitsTotal:"{n}件",twOnlyHint:"台湾株のみ",hitMarket:"ヒット市場",noHits:"本日ヒットなし",dataInsufficient:"データ不足",calibTitle:"キャリブレーション",incompleteFilters:"未検査フィルター（通過扱いしない）：",sessionTwse:"TWSE session",ohlcvBar:"OHLCV バー",generated:"生成",universeTw:"台湾ユニバース",universeUs:"米国ユニバース",cat精選:"厳選",cat價量:"価格/出来高",cat籌碼:"需給",cat財務:"財務",cat大師:"マスター",cat週期:"サイクル",cat技術:"テクニカル",cat基本:"ファンダ",cat綜合:"総合",addWatchlist:"ウォッチ追加",watchlistAdded:"{ticker} を追加しました",watchlistExists:"{ticker} は登録済み",copyFailed:"コピー失敗",csvDownloaded:"CSV を保存しました",csvBlocked:"ダウンロード阻害 — データURIを開きます",backtestSoon:"バックテスト：未開放",backtestHint:"バックテストエンジン未開放（偽結果なし）",regimeToday:"本日の市場レジーム（米／台は別管理）",psychologyPhase:"心理フェーズ",cycleStance:"サイクル姿勢",liquidityBias:"流動性バイアス",temperatureScore:"市場温度",sizeMult:"サイズ倍率",regimeTags:"レジームタグ",dataGaps:"データ欠落",marketRegime:"市場レジーム",enum_euphoric:"陶酔",enum_late_optimism:"後期楽観",enum_mid_cycle:"中期",enum_cautious_recovery:"慎重な回復",enum_despondent:"絶望",enum_panic:"パニック",enum_defensive:"守備的",enum_selective:"厳選",enum_balanced:"均衡",enum_constructive:"建設的",enum_aggressive:"積極",enum_stabilize_first:"まず安定",enum_risk_off:"リスクオフ",enum_risk_on:"リスクオン",enum_neutral:"中立",logicTitle:"選別ロジック",logicSubtitle:"レジーム→スクリーニング→戦略→降格→理由→サイジング — 監査可能な数式",logicNoRegime:"市場レジーム未取得（次回スキャン待ち）。",logicStep1:"市場レジーム",logicStep1Lead:"米／台を別ダイヤルで先に決め、その後銘柄を選別。Kostolany 位相 × Marks 温度 × 金利流動性。",logicStep1Caption:"位相 → スクリーニング姿勢 → サイズ倍率（STANCE_SIZE_MULT）",logicRatesR2:"R2：^TNX が 20 日で +0.25pp 以上 → 流動性は防御寄り（価格が中立でも）。",logicRatesR3:"R3：利回りが 60 日で −0.25pp 以下 → より積極ダイヤルを許容（陶酔以外）。",logicRatesSeparate:"硬規則：dial_US と dial_TW は分離。単一の「世界ムード」にしない。",logicStep2:"数式スクリーン（A／B）",logicStep2Lead:"RS・モメンタム・SMA・出来高。閾値はサイクル姿勢で変動。",logicScreenA:"スクリーン A · モメンタム／RS",logicScreenABalanced:"均衡：日RS≥0.5pp または日≥1.5%；または5日≥3%；または1月≥6%かつ>SMA20；または両MAで5日≥0／RS≥0。",logicScreenASelective:"厳選：>SMA50 かつ（RS≥0.5 または5日≥3% または1月≥6%かつSMA20）。",logicScreenADefensive:"守備的：SMA20+SMA50、かつ（RS≥0.8 または5日≥4%）、出来高≥1.0（欠損は可）；1月≥12%かつ出来高<0.8 → 除外。",logicScreenAAggressive:"積極／建設的：RS／日／5日／1月を緩和；SMA200 下の firm-hands 可（1月<0かつ出来高≥1.4）。建設的は SMA20 または SMA200 も必要。",logicScreenAStabilize:"まず安定：>SMA20 必須、かつ RS≥1.0pp または出来高≥1.5。",logicScreenB:"スクリーン B · 出来高",logicScreenBVol:"出来高比＝当日／20日平均。下限：守備的≥1.0；積極≥1.1；他≥1.2。",logicScreenBMom:"A 補完：A未達でも1月≥8%かつSMA20+SMA50（まず安定以外）→ A 付与。",logicScore:"順位スコア",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"出来高≥1.2 加点（上限約8×0.6）；<0.4 で −0.5；その後レジームで調整。",logicStep3:"XQ 戦略",logicXqLead:"日次リストと並行：条件ヒット（価格/出来高・需給・財務・マスター・サイクル）。欠落は「不足」—捏造しない。",logicXqPriceVol:"価格/出来高：移動平均ブル、超短期など（OHLCV）。",logicXqFlow:"需給：法人同期など（公開単元閾値）。",logicXqFund:"財務：利益増加、PE／利益率など公開欄。",logicXqMasters:"マスター：リンチ／グレアム／バフェット系の計算可能代理。",logicXqCycle:"サイクル：Kostolany／市場レジームパック（当日の米台ダイヤル）。",logicOpenStrategies:"戦略ページを開く",logicStep4:"順位の降格／加点",logicStep4Lead:"scoreAdjust：薄い高RS、firm-hands、パニック後の安定で加減点。",logicDemoteHot:"守備的／厳選：1月≥8%かつ出来高<0.8 → −2.5；出来高<0.7かつ日>+2% → −1.2；両MA欠で −1.5。",logicDemoteThin:"K5：強いRSでも薄い出来高 → 降格／積極バケット外。",logicPromoteFirm:"aggressive／constructive：弱含み＋出来高増＋>SMA200（firm-hands）→ +2.2；序盤の上昇日出来高 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；>SMA20 なら +1.5。",logicListSize:"リスト長：守備的≈0.55×；厳選≈0.75×；まず安定≈0.45×；積極+2（上限14）；基準12。",logicStep5:"「なぜ」の組み立て",logicStep5Lead:"why 欄は検証済みフィールドの読みやすい結合 — ブラックボックスではない。",logicWhyRs:"日次% + 指数対比（米：S&P；台：TAIEX）pp。",logicWhyMom:"5日% と 約1か月%。",logicWhyVol:"出来高比≥1.2 のときのみ出来高文を追加。",logicWhySma:"SMA20／50／200 の上抜け状態（両MA優先）。",logicWhyRegime:"レジーム注記または姿勢／心理フェーズタグを付記。",logicStep6:"ペーパー・サイジング規律",logicStep6Lead:"ペーパー口座はプロセス検証用 — 実注文ではない。レジームサイズ倍率と固定リスク式で制約。",logicPaperCapital:"元本：台湾 NT$3,000,000（単元）；米国 US$100,000（1株〜）。",logicPaperBuy:"買い：リスト（observeのみは原則回避）；リスク＝資本×1%；ストップ≈価格×1.5%（出来高≥3→2.5%）；1銘柄≤資本8%。",logicPaperSizeMult:"サイズ倍率（0.3–1.35×）で当日の積極度を表示；リスト長と連動。",logicPaperSell:"売り：損切−3%；利確+12%半減；SMA20割れかつ日<−2%；リスト外かつ含み損；ストップ高追撃の翌日−5%。",logicOpenPaper:"ペーパーを開く",logicFootnote:"透明なスクリーニング説明のための合成 — 投資助言ではない。公開の運用代理のみ；著作権保護の本文は複製しない。",condPass:"条件",condFail:"未達",condSkip:"省略",pe:"PER",opMargin:"営業利益率",grossMargin:"粗利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自己売買",maBull:"移動平均ブル",amplitude:"振幅",zhang:"単元",limitUp:"ストップ高",momentum:"モメンタム",metricPrice:"価格",metricDayPct:"日次%",metricVolRatioYday:"出来高比(昨)",metricVolToday:"出来高(単元)",metricDebt:"負債比率%",metricDirector:"役員持株%",metricOpQ:"直近四半期営業利益率%",metricSource:"出典",foreign1d:"外資1日(単元)",trust1d:"投信1日(単元)",dealer1d:"自己1日(単元)",foreign5d:"外資5日(単元)",trust5d:"投信5日(単元)",dealer5d:"自己5日(単元)"},ea={"zh-Hant":_t,en:Bn,"zh-Hans":On,ja:qn},In=/\b(euphoric|late_optimism|mid_cycle|cautious_recovery|despondent|panic|defensive|selective|balanced|constructive|aggressive|stabilize_first|risk_off|risk_on|neutral)\b/g;function oe(e){if(e==null||e==="")return n("dataInsufficient");const t=String(e),s=`enum_${t}`,o=t.includes("_")?t.replace(/_/g," "):t;return n(s,o.replace(/\b\w/g,i=>i.toUpperCase()))}function Hn(e){const t=String(e||"").toLowerCase();return["defensive","selective","balanced","constructive","aggressive","stabilize_first"].includes(t)?t.replace(/_/g,"-"):"neutral"}function Fn(e){return e==null||e===""?"":String(e).replace(In,t=>oe(t))}function n(e,t,s){let o,i=s;t&&typeof t=="object"&&!Array.isArray(t)?i=t:typeof t=="string"&&(o=t);let l=(ea[K]||ea[na])[e]??ea[na][e]??o??e;if(i)for(const[c,d]of Object.entries(i))l=l.replace(new RegExp(`\\{${c}\\}`,"g"),String(d));return l}function Un(){const e=js.map(t=>`<option value="${t.id}"${t.id===K?" selected":""}>${t.label}</option>`).join("");return`
    <label class="lang-switch" title="${n("langLabel")}">
      <span class="lang-switch-label">${n("langLabel")}</span>
      <select class="lang-select" data-lang-select aria-label="${n("langLabel")}">
        ${e}
      </select>
    </label>`}function Wn(e,t){var o;const s=(o=e==null?void 0:e.querySelector)==null?void 0:o.call(e,"[data-lang-select]");s&&(s.value=K,s.addEventListener("change",()=>{Nn(s.value)}))}function a(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function T(e,t){return a(n(e,t))}const ee=100,Ja=Object.freeze({TX:200,MTX:50,TMF:10});function k(e){return typeof e=="number"&&Number.isFinite(e)}function Os(e){return Number.isInteger(e)&&e>0}function _n(e,t,s){if(!k(e)||!k(t)||!(e>=0)||!(t>=0))return null;const o=String(s||"").toLowerCase();return o==="call"||o==="c"?Math.max(e-t,0):o==="put"||o==="p"?Math.max(t-e,0):null}function Pt({side:e,premium:t,contracts:s,multiplier:o=ee}){if(e!=="buy"&&e!=="sell")return{ok:!1,error:"side must be buy|sell"};if(!k(t)||t<0)return{ok:!1,error:"premium must be ≥ 0 finite"};if(!Os(s))return{ok:!1,error:"contracts must be positive integer"};if(!k(o)||!(o>0))return{ok:!1,error:"multiplier must be > 0"};const i=t*o*s;return k(i)?{ok:!0,cashDelta:e==="buy"?-i:i,notional:i}:{ok:!1,error:"notional non-finite"}}function qs({qty:e,markPremium:t,multiplier:s=ee}){if(!Number.isInteger(e)||e===0||!k(t)||t<0||!k(s)||!(s>0))return null;const o=e*t*s;return k(o)?o:null}function Vt({qtySigned:e,avgPremium:t,markPremium:s,multiplier:o=ee}){if(!Number.isInteger(e)||e===0||!k(t)||t<0||!k(s)||s<0||!k(o)||!(o>0))return null;const i=(s-t)*o*e;return k(i)?i:null}function Vn({qtySigned:e,spot:t,strike:s,right:o,multiplier:i=ee}){const r=_n(t,s,o);if(r==null)return{ok:!1,error:"bad intrinsic inputs"};if(!Number.isInteger(e)||e===0)return{ok:!1,error:"qtySigned must be non-zero int"};if(!k(i)||!(i>0))return{ok:!1,error:"bad multiplier"};const l=e*r*i;return k(l)?{ok:!0,intrinsic:r,cashDelta:l,settlePremium:r}:{ok:!1,error:"cash non-finite"}}function Is(e){const t=String(e||"").toUpperCase();return Object.prototype.hasOwnProperty.call(Ja,t)?Ja[t]:null}function Gn({pointsDelta:e,multiplier:t,contractsSigned:s}){if(!k(e)||!k(t)||!(t>0)||!Number.isInteger(s)||s===0)return null;const o=e*t*s;return k(o)?o:null}function Gt({entryPrice:e,markPrice:t,code:s,contractsSigned:o}){if(!k(e)||!k(t)||!(e>0)||!(t>0))return null;const i=Is(s);return i==null?null:Gn({pointsDelta:t-e,multiplier:i,contractsSigned:o})}function Jt({contracts:e,initialMarginPerContract:t}){if(!Os(e)||!k(t)||!(t>0))return null;const s=e*t;return k(s)?s:null}function Jn({freeCash:e,contracts:t,initialMarginPerContract:s}){if(!k(e)||e<0)return{ok:!1,error:"freeCash invalid"};const o=Jt({contracts:t,initialMarginPerContract:s});return o==null?{ok:!1,error:"margin hold invalid"}:e+1e-9<o?{ok:!1,error:"insufficient margin cash",hold:o}:{ok:!0,hold:o}}function Xa({freeCash:e,premium:t,contracts:s,multiplier:o=ee}){if(!k(e)||e<0)return{ok:!1,error:"freeCash invalid"};const i=Pt({side:"buy",premium:t,contracts:s,multiplier:o});return i.ok?e+1e-9<i.notional?{ok:!1,error:"insufficient cash for premium debit",need:i.notional}:{ok:!0,debit:i.notional}:i}function Hs(e,t="payload"){const s=[],o=(i,r)=>{if(typeof i=="number"&&!Number.isFinite(i))s.push(r);else if(i&&typeof i=="object")for(const[l,c]of Object.entries(i))o(c,r?`${r}.${l}`:l)};return o(e,""),s.length?{ok:!1,error:`${t} non-finite: ${s.join(",")}`}:{ok:!0}}function Fs({stockQty:e,optionRight:t,optionQtySigned:s,underlying:o}){if(!o||!Number.isInteger(s)||s===0)return null;const i=String(t||"").toLowerCase();return s<0&&(i==="call"||i==="c")?Number.isInteger(e)&&e>=Math.abs(s)*ee?"covered-call":"short-call":s>0&&(i==="put"||i==="p")&&Number.isInteger(e)&&e>0?"protective-put":s>0&&(i==="call"||i==="c")?"long-call":s>0&&(i==="put"||i==="p")?"long-put":s<0&&(i==="put"||i==="p")?"short-put":null}function Xn({fillPrice:e,avgCost:t,sharesSold:s}){if(!k(e)||!k(t)||!k(s)||!(s>0))return null;const o=(e-t)*s;return k(o)?o:null}function $a(e){if(!e||typeof e!="object")return{status:"missing-cost",value:null};const t=String(e.side||"").toUpperCase();if(t==="BUY"||t==="OPEN")return{status:"open",value:null};if(k(e.realizedPnl))return{status:"ok",value:e.realizedPnl};const s=e.avgCostAtSale??e.avgCost,o=Xn({fillPrice:e.price??e.premium,avgCost:s,sharesSold:e.qty});return o!=null?{status:"ok",value:o}:{status:"missing-cost",value:null}}function Yn(e){let t=0,s=0,o=0;for(const i of e||[]){const r=String((i==null?void 0:i.side)||"").toUpperCase();if(r!=="SELL"&&r!=="CLOSE")continue;const l=$a(i);l.status==="ok"?(t+=l.value,o+=1):l.status==="missing-cost"&&(s+=1)}return k(t)?{ok:!0,sum:t,missing:s,counted:o}:{ok:!1,sum:null,missing:s,counted:o}}const Kn="./data/paper-portfolio.json";function Q(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function Ct(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(t)}%`}function Us(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString(E(),{minimumFractionDigits:t,maximumFractionDigits:t})}function Ws(e){return e==="USD"?"US$":e==="TWD"?"NT$":""}function Y(e,t){if(e==null||Number.isNaN(e))return"—";const s=t==="TWD"?0:2;return`${Ws(t)}${Us(e,s)}`}function ze(e,t){if(e==null||Number.isNaN(e))return"—";const s=t==="TWD"&&e>=100?0:2;return`${Ws(t)}${Us(e,s)}`}function _s(e){return{"screen-buy":n("reasonScreenBuy"),add:n("reasonAdd"),stop:n("reasonStop"),"take-profit":n("reasonTakeProfit"),"momentum-break":n("reasonMomentumBreak"),"off-list":n("reasonOffList"),"limit-up-chase":n("reasonLimitUpChase")}[e]||e||""}function tt(e){return e?`
    <div class="paper-win">
      <div class="w-label">${e.sinceInception?T("sinceInception",n("sinceInception")):a(e.label||"")}</div>
      <div class="w-val ${Q(e.pct)}">${Ct(e.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function Qn(e){if(k(e==null?void 0:e.avgCostAtSale))return e.avgCostAtSale;if(k(e==null?void 0:e.avgCost))return e.avgCost;if(k(e==null?void 0:e.realizedPnl)&&k(e==null?void 0:e.price)&&k(e==null?void 0:e.qty)&&e.qty>0){const t=e.price-e.realizedPnl/e.qty;return k(t)?t:null}return null}function Vs(e,t){if(String((e==null?void 0:e.side)||"").toUpperCase()==="BUY")return{html:"—",cls:"flat",value:null,avgCost:null};const o=$a(e),i=Qn(e);return o.status==="ok"&&k(o.value)?{html:Y(o.value,t),cls:Q(o.value),value:o.value,avgCost:i}:o.status==="open"?{html:a(n("realizedOpenOnly")),cls:"flat",value:null,avgCost:i}:{html:a(n("costMissing")),cls:"flat",value:null,avgCost:null}}function Zn(e,t){return e.length?e.map(s=>{var r;const o=Vs(s,t),i=k(o.avgCost)?`<div class="rp-cost">${a(n("avgCost"))} ${ze(o.avgCost,t)}</div>`:"";return`
      <tr>
        <td><span class="ticker">${a(s.ticker)}</span></td>
        <td class="name-cell">${a(s.name||"")}</td>
        <td class="num">${(r=s.qty)==null?void 0:r.toLocaleString(E())}</td>
        <td class="num">${ze(s.price,t)}</td>
        <td class="num ${o.cls}">${o.html}${i}</td>
        <td><span class="badge reason ${a(s.reason||"")}">${a(_s(s.reason))}</span></td>
        <td class="why-cell">${a(s.reasonText||"")}</td>
      </tr>`}).join(""):`<tr><td colspan="7" class="empty-cell">${a(n("noTradesToday"))}</td></tr>`}function eo(e){return e.dayPct==null||Number.isNaN(e.dayPct)||e.mark==null||e.qty==null?null:e.mark*e.qty*e.dayPct/100}function to(e,t,s){if(!e.length)return`<tr><td colspan="11" class="empty-cell">${a(n("noPositions"))}</td></tr>`;const i=s>0?s:e.reduce((r,l)=>r+(l.mark||0)*(l.qty||0),0);return e.map(r=>{var m;const l=(r.mark||0)*(r.qty||0),c=(r.avgCost||0)*(r.qty||0),d=(r.mark-r.avgCost)*r.qty,p=r.avgCost?(r.mark-r.avgCost)/r.avgCost*100:0,u=eo(r),g=i>0?l/i*100:null,h=r.name?a(r.name):"";return`
      <tr class="pos-row" data-lq="pos" data-lq-sym="${a(r.ticker)}"
          data-ticker="${a(r.ticker)}"
          data-lq-qty="${r.qty??""}" data-lq-avg="${r.avgCost??""}" data-lq-ccy="${a(t)}"
          data-lq-mark="${r.mark??""}" data-lq-daypct="${r.dayPct??""}"
          tabindex="0">
        <td class="pos-sym">
          <span class="ticker">${a(r.ticker)}</span>
          ${h?`<span class="pos-name">${h}</span>`:""}
        </td>
        <td class="num">${(m=r.qty)==null?void 0:m.toLocaleString(E())}</td>
        <td class="num" data-lq-field="price">${ze(r.mark,t)}</td>
        <td class="num">${Y(l,t)}</td>
        <td class="num ${Q(u)}">${u==null?"—":Y(u,t)}</td>
        <td class="num ${Q(r.dayPct)}" data-lq-field="dayPct">${Ct(r.dayPct)}</td>
        <td class="num ${Q(d)}">${Y(d,t)}</td>
        <td class="num ${Q(p)}">${Ct(p)}</td>
        <td class="num">${Y(c,t)}</td>
        <td class="num">${ze(r.avgCost,t)}</td>
        <td class="num">${g==null?"—":`${g.toFixed(2)}%`}</td>
      </tr>`}).join("")}function ao(e,t,s){const o=t.currency,i=n(e==="TW"?"paperBookTw":"paperBookUs"),r=Y(t.startCash,o),l=(s==null?void 0:s.totalPnl)??t.equity-t.startCash,c=(s==null?void 0:s.totalPnlPct)??(t.startCash?(t.equity-t.startCash)/t.startCash*100:0),d=(s==null?void 0:s.realizedPnl)??t.realizedPnl??0,p=(s==null?void 0:s.unrealizedPnl)??(k(l)&&k(d)?l-d:null);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${a(i)}</h3>
      <p class="paper-start">${T("principal",n("principal"))} ${r}</p>
      <div class="paper-kpis">
        <div class="paper-kpi paper-kpi--equity">
          <div class="k-label">${T("position",n("equity"))}</div>
          <div class="k-val" data-lq-kpi="equity">${Y(t.equity,o)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${a(n("cash"))}</div>
          <div class="k-val" data-lq-kpi="cash">${Y(t.cash,o)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${a(n("totalPnl"))}</div>
          <div class="k-val ${Q(l)}" data-lq-kpi="pnl">${Y(l,o)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${a(n("totalPnlPct"))}</div>
          <div class="k-val ${Q(c)}" data-lq-kpi="pnlPct">${Ct(c)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${a(n("realizedPnl"))}</div>
          <div class="k-val ${Q(d)}" data-lq-kpi="realized">${Y(d,o)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${a(n("unrealizedPnl"))}</div>
          <div class="k-val ${Q(p)}" data-lq-kpi="unrealized">${Y(p,o)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${a(n("weekPerf"))}</div>
          ${tt(s==null?void 0:s.week)}
        </div>
        <div>
          <div class="win-name">${a(n("monthPerf"))}</div>
          ${tt(s==null?void 0:s.month)}
        </div>
        <div>
          <div class="win-name">${a(n("quarterPerf"))}</div>
          ${tt(s==null?void 0:s.quarter)}
        </div>
        <div>
          <div class="win-name">${a(n("yearPerf"))}</div>
          ${tt(s==null?void 0:s.year)}
        </div>
      </div>
    </article>`}function so(e,t){return e.length?e.map(s=>{var l;const o=s.side==="SELL"?n("sell"):n("buy"),i=Vs(s,t),r=s.side==="SELL"&&k(i.avgCost)?`<div style="font-family:var(--mono);font-size:0.82rem;color:var(--text-muted)">${a(n("avgCost"))} ${ze(i.avgCost,t)}</div>`:"";return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${a(s.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${a(s.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${a(o)} ${(l=s.qty)==null?void 0:l.toLocaleString(E())} ${a(n("shares"))}</div>
            <div style="font-family:var(--mono)">${ze(s.price,t)}</div>
            <div style="font-family:var(--mono)" class="${i.cls}">${a(n("realizedPnl"))} ${i.html}</div>
            ${r}
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${a(s.reason||"")}">${a(_s(s.reason))}</span>
        </div>
        ${s.reasonText?`<p class="lc-why">${a(s.reasonText)}</p>`:""}
      </div>`}).join(""):`<div class="list-card empty-card">${a(n("noTradesToday"))}</div>`}function no(e,t){const s=(e||[]).filter(r=>String(r.side||"").toUpperCase()==="SELL");if(!s.length)return"";const o=Yn(s);if(!o.ok)return"";const i=o.missing>0?` · ${a(n("costMissingCount",{n:String(o.missing)}))}`:"";return`
    <p class="paper-realized-foot">
      ${a(n("sessionRealizedPnl"))}
      <strong class="${Q(o.sum)}">${Y(o.sum,t)}</strong>${i}
    </p>`}function ta(e,t,s,{showSessionRealized:o=!1}={}){return`
    <div class="paper-table-block">
      <h4>${a(e)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${T("ticker",n("ticker"))}</th>
              <th>${a(n("name"))}</th>
              <th>${a(n("qty"))}</th>
              <th>${a(n("price"))}</th>
              <th class="num">${a(n("realizedPnl"))}</th>
              <th>${a(n("reason"))}</th>
              <th>${a(n("note"))}</th>
            </tr>
          </thead>
          <tbody>${Zn(t,s)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${so(t,s)}</div>
      ${o?no(t,s):""}
    </div>`}function oo(e,t,s){return`
    <div class="paper-table-block paper-pos-block">
      <div class="pos-block-head">
        <h4>${a(n("positions"))}</h4>
        <span class="pos-scroll-hint">${a(n("posScrollHint"))}</span>
      </div>
      <div class="pos-scroll" role="region" aria-label="${a(n("positions"))}">
        <table class="pos-table">
          <thead>
            <tr>
              <th class="pos-sym">${T("ticker",n("ticker"))}</th>
              <th class="num">${a(n("qty"))}</th>
              <th class="num">${a(n("mark"))}</th>
              <th class="num">${a(n("mktValue"))}</th>
              <th class="num">${a(n("dayPnl"))}</th>
              <th class="num">${a(n("dayPct"))}</th>
              <th class="num">${a(n("unrealizedPnl"))}</th>
              <th class="num">${a(n("unrealizedPct"))}</th>
              <th class="num">${a(n("costBasis"))}</th>
              <th class="num">${a(n("avgCost"))}</th>
              <th class="num">${a(n("weightPct"))}</th>
            </tr>
          </thead>
          <tbody>${to(e,t,s)}</tbody>
        </table>
      </div>
    </div>`}function Ya(e,t,s,o,i,r){if(!t)return"";const l=t.currency,c=[...t.trades||[]].sort((m,S)=>m.date<S.date?1:m.date>S.date?-1:0),d=c.filter(m=>m.date===o),p=d.filter(m=>m.side==="BUY"),u=d.filter(m=>m.side==="SELL"),g=c.slice(0,40),h=r;return`
    <div class="paper-panel ${i?"active":""}" id="paper-panel-${e}" role="tabpanel"
         data-lq-book="${a(e)}" data-lq-cash="${t.cash??""}"
         data-lq-start="${t.startCash??""}" data-lq-ccy="${a(l)}">
      ${ao(e,t,s)}
      <p class="paper-session-note">${a(n("paperSession",{date:o||"—",inception:h}))}</p>
      ${ta(`${n("buy")} ${o||""}`,p,l)}
      ${ta(`${n("sell")} ${o||""}`,u,l,{showSessionRealized:!0})}
      ${oo(t.positions||[],l,t.positionsValue)}
      ${ta(n("recentTrades"),g,l)}
    </div>`}function io(e){var l,c;if(!e||!e.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${T("paperTrade",n("paper"))}</h2>
        <p class="paper-missing">${a(n("paperMissing"))}</p>
      </section>`;const t=e.books.TW,s=e.books.US;let i=(e.asOf||"").slice(0,10);try{i=new Date(e.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const r=e.startDate||(t==null?void 0:t.startDate)||(s==null?void 0:s.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${T("paperTrade",n("paper"))}</h2>
      <p class="paper-disclaimer" role="note">
        ${a(n("paperDisclaimer",{date:r}))}
      </p>
      <details class="paper-rules">
        <summary>${a(n("paperRules"))}</summary>
        <ul>
          <li>${a(n("paperRuleTw"))}</li>
          <li>${a(n("paperRuleUs"))}</li>
          <li>${a(n("paperRuleBuy"))}</li>
          <li>${a(n("paperRuleSell"))}</li>
          <li>${a(n("paperRuleOpt"))}</li>
          <li>${a(n("paperRuleTxf"))}</li>
        </ul>
      </details>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${a(n("paperTabTw"))}</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${a(n("paperTabUs"))}</button>
      </div>
      ${Ya("TW",t,(l=e.metrics)==null?void 0:l.TW,i,!0,r)}
      ${Ya("US",s,(c=e.metrics)==null?void 0:c.US,i,!1,r)}
    </section>`}function ro(e){const t=e.querySelectorAll(".paper-tab-btn");t.forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.paperTab;t.forEach(i=>{const r=i.dataset.paperTab===o;i.classList.toggle("active",r),i.setAttribute("aria-selected",r?"true":"false")}),e.querySelectorAll(".paper-panel").forEach(i=>{i.classList.toggle("active",i.id===`paper-panel-${o}`)})})})}async function lo(){try{const e=await fetch(Kn);return e.ok?await e.json():null}catch{return null}}const Gs="jml-paper-deriv-v1",co="./data/us-options-snapshot.json",po="./data/txf-desk.json",uo="./data/paper-derivatives.json",Ta="2026-09-15";function Se(){return{cashAdj:0,marginHold:0,realizedPnl:0,positions:[],trades:[]}}function Fe(){return{version:1,startDate:Ta,cumulative:!0,US:Se(),TW:Se()}}function go(){try{const e=localStorage.getItem(Gs);if(!e)return Fe();const t=JSON.parse(e);return!t||t.version!==1?Fe():{...Fe(),...t,US:{...Se(),...t.US||{}},TW:{...Se(),...t.TW||{}}}}catch{return Fe()}}function Ke(e){const t=Hs({US:{cashAdj:e.US.cashAdj,marginHold:e.US.marginHold,realizedPnl:e.US.realizedPnl},TW:{cashAdj:e.TW.cashAdj,marginHold:e.TW.marginHold,realizedPnl:e.TW.realizedPnl}});return t.ok?(localStorage.setItem(Gs,JSON.stringify(e)),!0):(console.error("paper-deriv blocked save:",t.error),!1)}function W(e,t=2){if(!Number.isFinite(e))return 0;const s=10**t;return Math.round(e*s)/s}function Z(){return new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}function te(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString(E(),{minimumFractionDigits:t,maximumFractionDigits:t})}function F(e,t){return e==null||Number.isNaN(e)?"—":`${t==="USD"?"US$":t==="TWD"?"NT$":""}${te(e,t==="TWD"?0:2)}`}function fe(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function ho(e){return`${e.underlying}|${e.expiry}|${e.strike}|${e.right}`}function mo(e){return`${e.code}|${e.month}`}async function fo(){try{const e=await fetch(co);return e.ok?await e.json():null}catch{return null}}async function yo(){try{const e=await fetch(po);if(!e.ok)return null;const t=await e.json();return(t==null?void 0:t.market)!=="TW"||!(t!=null&&t.contracts)?null:t}catch{return null}}async function vo(){try{const e=await fetch(uo);if(!e.ok)return null;const t=await e.json();if(!t||t.version!==1||t.booksSeparate!==!0)return null;const s={version:1,startDate:t.startDate||Ta,asOf:t.asOf||null,noteZh:t.noteZh||"",noteEn:t.noteEn||"",US:{...Se(),...t.US||{}},TW:{...Se(),...t.TW||{}}};if(!Hs({US:{cashAdj:s.US.cashAdj,marginHold:s.US.marginHold,realizedPnl:s.US.realizedPnl},TW:{cashAdj:s.TW.cashAdj,marginHold:s.TW.marginHold,realizedPnl:s.TW.realizedPnl}}).ok)return null;const i=(s.US.positions||[]).some(l=>l.asset==="option"&&Number.isInteger(l.qtySigned)&&l.qtySigned!==0),r=(s.TW.positions||[]).some(l=>l.asset==="futures"&&(l.code==="TX"||l.code==="MTX")&&Number.isInteger(l.qtySigned)&&l.qtySigned!==0);return!i||!r?null:s}catch{return null}}function bo(e){for(const t of["US","TW"])e[t].positions=(e[t].positions||[]).filter(s=>s.origin!=="server"),e[t].trades=(e[t].trades||[]).filter(s=>s.origin!=="server")}function So(e,t){if(!t)return e;const s=Fe();s.startDate=e.startDate||t.startDate||Ta,s.serverAsOf=t.asOf||null,s.noteZh=t.noteZh||"",s.noteEn=t.noteEn||"";for(const o of["US","TW"]){const i=t[o]||Se(),r=e[o],l=o==="TW"?0:2,c=(i.positions||[]).map(p=>({...p,origin:"server"})),d=(r.positions||[]).filter(p=>p.origin!=="server");s[o]={cashAdj:W((i.cashAdj||0)+(r.cashAdj||0),l),marginHold:W((i.marginHold||0)+(r.marginHold||0),l),realizedPnl:W((i.realizedPnl||0)+(r.realizedPnl||0),l),positions:[...c,...d],trades:[...(i.trades||[]).map(p=>({...p,origin:"server"})),...(r.trades||[]).filter(p=>p.origin!=="server")],summaryZh:i.summaryZh||"",summaryEn:i.summaryEn||""}}return s}function Ka(e,t){const s=e==null?void 0:e[t];if(!s)return"";const o=je(),i=o==="en"||o==="ja"?s.summaryEn||s.summaryZh:s.summaryZh||s.summaryEn;if(!i&&!e.noteZh)return"";const r=o==="en"||o==="ja"?e.noteEn||e.noteZh:e.noteZh||e.noteEn;return`<p class="paper-deriv-server">${a(n("paperDerivServerBook"))}${i?` ${a(i)}`:""}${r?` ${a(r)}`:""}</p>`}function Js(e){const t=je(),s=t==="en"||t==="ja"?e.fillSourceEn||e.fillSource:e.fillSource||e.fillSourceEn,o=e.openedAsOf||e.lastTradeAsOf||"";return`${s?`<span class="pos-name">${a(s)}</span>`:""}${o?`<span class="pos-name">asOf ${a(o)}</span>`:""}`}function Xs(e,t,s){var r;const o=(r=e==null?void 0:e.books)==null?void 0:r[t],i=((o==null?void 0:o.positions)||[]).find(l=>l.ticker===s);return(i==null?void 0:i.qty)||0}function Lt(e,t,s){var l;const o=(l=e==null?void 0:e.books)==null?void 0:l[t],i=typeof(o==null?void 0:o.cash)=="number"?o.cash:0,r=s[t];return W(i+(r.cashAdj||0)-(r.marginHold||0),t==="TW"?0:2)}function Ys(e,t,s){if(!e)return null;const o=t==="put"?e.puts:e.calls;return Array.isArray(o)&&o.find(r=>r.strike===s&&k(r.premium)&&r.premium>=0)||null}function Qa(e,t){var r,l;const s=new Map(((t==null?void 0:t.tickers)||[]).map(c=>[c.ticker,c])),o=(t==null?void 0:t.asOf)||null,i=[];for(const c of e.US.positions){if(c.asset!=="option")continue;const d=s.get(c.underlying),p=(r=d==null?void 0:d.options)==null?void 0:r.paperChain,u=((l=d==null?void 0:d.options)==null?void 0:l.asOfUnderlying)??(d==null?void 0:d.price)??null;if((c.expiry&&Z()>c.expiry?!0:c.expiry&&(!p||p.expiration!==c.expiry)&&Z()>=c.expiry)&&k(u)){const m=Vn({qtySigned:c.qtySigned,spot:u,strike:c.strike,right:c.right});if(m.ok){const S=Pt({side:c.qtySigned>0?"sell":"buy",premium:m.settlePremium,contracts:Math.abs(c.qtySigned)});if(S.ok){const v=Vt({qtySigned:c.qtySigned,avgPremium:c.avgPremium,markPremium:m.settlePremium});e.US.cashAdj=W(e.US.cashAdj+S.cashDelta),k(v)&&(e.US.realizedPnl=W(e.US.realizedPnl+v)),e.US.trades.push({date:Z(),asOf:o,market:"US",asset:"option",side:c.qtySigned>0?"SELL":"BUY",underlying:c.underlying,right:c.right,expiry:c.expiry,strike:c.strike,qty:Math.abs(c.qtySigned),premium:m.settlePremium,reason:"expiry-settle",reasonText:n("paperDerivExpirySettle"),realizedPnl:v??0});continue}}}const h=Ys(p,c.right,c.strike);h?(c.markPremium=h.premium,c.markAsOf=o,c.markSource="chain"):k(c.markPremium)?c.markSource=c.markSource||"stored":(c.markPremium=c.avgPremium,c.markSource="last-fill",c.markAsOf=c.lastTradeAsOf||o),k(u)&&(c.spot=u),i.push(c)}e.US.positions=i}function Za(e,t){if(!(t!=null&&t.contracts))return;const s=[];for(const o of e.TW.positions){if(o.asset!=="futures")continue;const i=t.contracts[o.code];if(!i){s.push(o);continue}const r=i.near&&i.near.month===o.month&&i.near||i.next&&i.next.month===o.month&&i.next||(i.listed||[]).find(d=>d.month===o.month)||null,l=r==null?void 0:r.lastTradingDay,c=k(r==null?void 0:r.settle)&&r.settle||k(r==null?void 0:r.last)&&r.last||null;if(l&&Z()>l&&k(c)){const d=Gt({entryPrice:o.avgPrice,markPrice:c,code:o.code,contractsSigned:o.qtySigned}),p=Jt({contracts:Math.abs(o.qtySigned),initialMarginPerContract:o.initialMarginPerContract});k(d)&&(e.TW.cashAdj=W(e.TW.cashAdj+d,0),e.TW.realizedPnl=W(e.TW.realizedPnl+d,0)),k(p)&&(e.TW.marginHold=W(Math.max(0,e.TW.marginHold-p),0)),e.TW.trades.push({date:Z(),asOf:t.asOf,market:"TW",asset:"futures",side:o.qtySigned>0?"SELL":"BUY",code:o.code,month:o.month,qty:Math.abs(o.qtySigned),price:c,reason:"expiry-settle",reasonText:n("paperDerivFutSettle"),realizedPnl:d??0,flagged:!k(r==null?void 0:r.settle)});continue}k(r==null?void 0:r.last)?(o.mark=r.last,o.markSource="desk-last"):k(r==null?void 0:r.settle)?(o.mark=r.settle,o.markSource="desk-settle"):(o.markSource="last-fill",k(o.mark)||(o.mark=o.avgPrice)),o.markAsOf=t.asOf,k(r==null?void 0:r.settle)&&(o.settle=r.settle),s.push(o)}e.TW.positions=s}function ko({paper:e,state:t,optSnap:s,underlying:o,right:i,strike:r,expiry:l,side:c,contracts:d}){var b;if(i!=="call"&&i!=="put")return{ok:!1,error:n("paperDerivBadRight")};if(!Number.isInteger(d)||d<=0)return{ok:!1,error:n("paperDerivBadQty")};if(c!=="buy"&&c!=="sell")return{ok:!1,error:n("paperDerivBadSide")};const p=((s==null?void 0:s.tickers)||[]).find(y=>y.ticker===o),u=(b=p==null?void 0:p.options)==null?void 0:b.paperChain;if(!u||!Array.isArray(u.calls))return{ok:!1,error:n("paperDerivNoChain")};if(l&&u.expiration&&l!==u.expiration)return{ok:!1,error:n("paperDerivExpiryMismatch")};const g=u.expiration,h=Ys(u,i,Number(r));if(!h)return{ok:!1,error:n("paperDerivNoPremium")};const m=h.premium;if(!k(m)||m<0)return{ok:!1,error:n("paperDerivNoPremium")};const S=Lt(e,"US",t),v=`${o}|${g}|${Number(r)}|${i}`;let $=t.US.positions.find(y=>ho(y)===v);const C=c==="buy"?d:-d;if($&&Math.sign($.qtySigned)!==0&&Math.sign($.qtySigned)!==Math.sign(C)){const y=Math.min(Math.abs($.qtySigned),d),w=Pt({side:c,premium:m,contracts:y});if(!w.ok)return{ok:!1,error:w.error};if(c==="buy"){const I=Xa({freeCash:S,premium:m,contracts:y});if(!I.ok)return{ok:!1,error:n("paperDerivNeedCash",{need:F(I.need||w.notional,"USD")})}}const A=Vt({qtySigned:$.qtySigned>0?y:-y,avgPremium:$.avgPremium,markPremium:m});t.US.cashAdj=W(t.US.cashAdj+w.cashDelta),k(A)&&(t.US.realizedPnl=W(t.US.realizedPnl+A)),$.qtySigned+=$.qtySigned>0?-y:y,$.qtySigned===0&&(t.US.positions=t.US.positions.filter(I=>I!==$),$=null),t.US.trades.push({date:Z(),asOf:s==null?void 0:s.asOf,market:"US",asset:"option",side:c==="buy"?"BUY":"SELL",underlying:o,right:i,expiry:g,strike:Number(r),qty:y,premium:m,reason:"user-close",reasonText:n("paperDerivUserClose"),realizedPnl:A??0});const D=d-y;if(D<=0)return Ke(t)?{ok:!0,premium:m,closed:y}:{ok:!1,error:n("paperDerivMathBlock")};d=D}if(c==="buy"){const y=Xa({freeCash:Lt(e,"US",t),premium:m,contracts:d});if(!y.ok)return{ok:!1,error:n("paperDerivNeedCash",{need:F(y.need||m*ee*d,"USD")})}}const L=Pt({side:c,premium:m,contracts:d});if(!L.ok)return{ok:!1,error:L.error};t.US.cashAdj=W(t.US.cashAdj+L.cashDelta);const _=c==="buy"?d:-d;if(!$)$={asset:"option",underlying:o,name:(p==null?void 0:p.name)||o,right:i,expiry:g,strike:Number(r),qtySigned:_,avgPremium:m,markPremium:m,markAsOf:s==null?void 0:s.asOf,markSource:"fill",lastTradeAsOf:s==null?void 0:s.asOf,openedOn:Z(),currency:"USD",multiplier:ee},t.US.positions.push($);else{const y=$.qtySigned+_,w=Math.abs($.qtySigned),A=Math.abs(_);$.avgPremium=($.avgPremium*w+m*A)/(w+A),$.qtySigned=y,$.markPremium=m,$.lastTradeAsOf=s==null?void 0:s.asOf}const x=Xs(e,"US",o),P=Fs({stockQty:x,optionRight:i,optionQtySigned:$.qtySigned,underlying:o});return t.US.trades.push({date:Z(),asOf:s==null?void 0:s.asOf,market:"US",asset:"option",side:c==="buy"?"BUY":"SELL",underlying:o,right:i,expiry:g,strike:Number(r),qty:d,premium:m,reason:"user-open",reasonText:P?Ks(P):n("paperDerivUserOpen"),strategy:P,realizedPnl:0}),Ke(t)?{ok:!0,premium:m,strategy:P}:{ok:!1,error:n("paperDerivMathBlock")}}function $o({paper:e,state:t,txf:s,code:o,month:i,side:r,contracts:l}){var L,_;if(o=String(o||"").toUpperCase(),o!=="TX"&&o!=="MTX")return{ok:!1,error:n("paperDerivBadCode")};if(!Number.isInteger(l)||l<=0)return{ok:!1,error:n("paperDerivBadQty")};if(r!=="buy"&&r!=="sell")return{ok:!1,error:n("paperDerivBadSide")};const c=(L=s==null?void 0:s.contracts)==null?void 0:L[o];if(!c)return{ok:!1,error:n("paperDerivNoTxf")};const d=Is(o);if(d==null||d!==c.multiplierTwdPerPoint)return{ok:!1,error:n("paperDerivBadMult")};const p=c.near&&c.near.month===i&&c.near||c.next&&c.next.month===i&&c.next||(c.listed||[]).find(x=>x.month===i);if(!p)return{ok:!1,error:n("paperDerivNoMonth")};const u=k(p.last)&&p.last||k(p.settle)&&p.settle||null;if(!k(u)||!(u>0))return{ok:!1,error:n("paperDerivNoFutPrice")};const g=typeof((_=c.margin)==null?void 0:_.initial)=="number"?c.margin.initial:null;if(!k(g)||!(g>0))return{ok:!1,error:n("paperDerivNoMargin")};const h=`${o}|${i}`;let m=t.TW.positions.find(x=>mo(x)===h);const S=r==="buy"?l:-l;if(m&&Math.sign(m.qtySigned)!==Math.sign(S)){const x=Math.min(Math.abs(m.qtySigned),l),P=m.qtySigned>0?x:-x,b=Gt({entryPrice:m.avgPrice,markPrice:u,code:o,contractsSigned:P});if(!k(b))return{ok:!1,error:n("paperDerivMathBlock")};const y=Jt({contracts:x,initialMarginPerContract:m.initialMarginPerContract||g});t.TW.cashAdj=W(t.TW.cashAdj+b,0),t.TW.realizedPnl=W(t.TW.realizedPnl+b,0),k(y)&&(t.TW.marginHold=W(Math.max(0,t.TW.marginHold-y),0)),m.qtySigned+=m.qtySigned>0?-x:x,m.qtySigned===0?(t.TW.positions=t.TW.positions.filter(A=>A!==m),m=null):m.mark=u,t.TW.trades.push({date:Z(),asOf:s.asOf,market:"TW",asset:"futures",side:r==="buy"?"BUY":"SELL",code:o,month:i,qty:x,price:u,reason:"user-close",reasonText:n("paperDerivUserClose"),realizedPnl:b});const w=l-x;if(w<=0)return Ke(t)?{ok:!0,price:u,closed:x}:{ok:!1,error:n("paperDerivMathBlock")};l=w}const v=Jn({freeCash:Lt(e,"TW",t),contracts:l,initialMarginPerContract:g});if(!v.ok)return{ok:!1,error:n("paperDerivNeedMargin",{need:F(v.hold||g*l,"TWD")})};const $=v.hold;t.TW.marginHold=W(t.TW.marginHold+$,0);const C=r==="buy"?l:-l;if(!m)m={asset:"futures",code:o,name:c.nameZh||o,month:i,qtySigned:C,avgPrice:u,mark:u,markAsOf:s.asOf,markSource:"fill",openedOn:Z(),currency:"TWD",multiplier:d,initialMarginPerContract:g,lastTradingDay:p.lastTradingDay||null},t.TW.positions.push(m);else{const x=Math.abs(m.qtySigned),P=Math.abs(C);m.avgPrice=(m.avgPrice*x+u*P)/(x+P),m.qtySigned+=C,m.mark=u}return t.TW.trades.push({date:Z(),asOf:s.asOf,market:"TW",asset:"futures",side:r==="buy"?"BUY":"SELL",code:o,month:i,qty:l,price:u,reason:"user-open",reasonText:n("paperDerivUserOpen"),realizedPnl:0,marginHold:$}),Ke(t)?{ok:!0,price:u,marginHold:$}:{ok:!1,error:n("paperDerivMathBlock")}}function Ks(e){if(!e)return"";const t=`paperDerivStrategy_${String(e).replace(/-/g,"_")}`,s=n(t);return s===t?e:s}function To(e,t){return e.length?e.map(s=>{const o=Vt({qtySigned:s.qtySigned,avgPremium:s.avgPremium,markPremium:s.markPremium}),i=qs({qty:s.qtySigned,markPremium:s.markPremium}),r=Fs({stockQty:Xs(t,"US",s.underlying),optionRight:s.right,optionQtySigned:s.qtySigned,underlying:s.underlying}),l=s.qtySigned>0?n("paperDerivLong"):n("paperDerivShort");return`<tr>
        <td class="pos-sym"><span class="ticker">${a(s.underlying)}</span>
          <span class="pos-name">${a(s.right.toUpperCase())} ${a(String(s.strike))} ${a(s.expiry||"")}${s.contractSymbol?` · ${a(s.contractSymbol)}`:""}</span>
          ${r?`<span class="deriv-tag">${a(Ks(r))}</span>`:""}
          ${Js(s)}
        </td>
        <td class="num">${a(l)} ${Math.abs(s.qtySigned)}</td>
        <td class="num">${te(s.avgPremium,2)}</td>
        <td class="num">${te(s.markPremium,2)}</td>
        <td class="num">${F(i,"USD")}</td>
        <td class="num ${fe(o)}">${F(o,"USD")}</td>
        <td class="num">${a(s.markSource||"—")}</td>
        <td class="num">${a((s.markAsOf||"").slice(0,16)||"—")}</td>
        <td class="num">×${ee}</td>
      </tr>`}).join(""):`<tr><td colspan="9" class="empty-cell">${a(n("paperDerivNoOptPos"))}</td></tr>`}function wo(e){return e.length?e.map(t=>{const s=Gt({entryPrice:t.avgPrice,markPrice:t.mark,code:t.code,contractsSigned:t.qtySigned}),o=t.qtySigned>0?n("paperDerivLong"):n("paperDerivShort"),i=Jt({contracts:Math.abs(t.qtySigned),initialMarginPerContract:t.initialMarginPerContract});return`<tr>
        <td class="pos-sym"><span class="ticker">${a(t.code)}</span>
          <span class="pos-name">${a(t.name||"")} ${a(t.month)} · ${a(t.qtySigned>0?n("paperDerivLong"):n("paperDerivShort"))} ${Math.abs(t.qtySigned)}</span>
          ${Js(t)}
        </td>
        <td class="num">${a(o)} ${Math.abs(t.qtySigned)}${a(n("paperDerivContracts"))}</td>
        <td class="num">${te(t.avgPrice,0)}</td>
        <td class="num">${te(t.mark,0)}</td>
        <td class="num ${fe(s)}">${F(s,"TWD")}</td>
        <td class="num">${F(i,"TWD")}</td>
        <td class="num">NT$${t.multiplier}/pt</td>
        <td class="num">${a(t.markSource||"—")}</td>
        <td class="num">${a(t.lastTradingDay||"—")}</td>
      </tr>`}).join(""):`<tr><td colspan="9" class="empty-cell">${a(n("paperDerivNoFutPos"))}</td></tr>`}function xo(e){const t=((e==null?void 0:e.tickers)||[]).filter(o=>{var i,r,l;return(l=(r=(i=o==null?void 0:o.options)==null?void 0:i.paperChain)==null?void 0:r.calls)==null?void 0:l.length});if(!t.length)return`<p class="paper-deriv-missing">${a(n("paperDerivNoChain"))}</p>`;const s=t.map(o=>`<option value="${a(o.ticker)}">${a(o.ticker)} · ${a(o.name||"")}</option>`).join("");return`
    <form class="paper-deriv-form" data-deriv-form="us-opt" autocomplete="off">
      <div class="pdf-row">
        <label>${a(n("paperDerivUnderlying"))}
          <select name="underlying" required>${s}</select>
        </label>
        <label>${a(n("paperDerivRight"))}
          <select name="right"><option value="call">Call</option><option value="put">Put</option></select>
        </label>
        <label>${a(n("paperDerivStrike"))}
          <select name="strike" required></select>
        </label>
        <label>${a(n("qty"))}
          <input name="qty" type="number" min="1" step="1" value="1" required />
        </label>
      </div>
      <div class="pdf-row pdf-meta">
        <span data-field="expiry">—</span>
        <span data-field="premium">—</span>
        <span data-field="debit">—</span>
      </div>
      <div class="pdf-actions">
        <button type="submit" name="side" value="buy" class="pdf-btn buy">${a(n("buy"))}</button>
        <button type="submit" name="side" value="sell" class="pdf-btn sell">${a(n("sell"))}</button>
      </div>
      <p class="pdf-msg" data-msg hidden></p>
    </form>`}function Po(e){var s;if(!((s=e==null?void 0:e.contracts)!=null&&s.TX))return`<p class="paper-deriv-missing">${a(n("paperDerivNoTxf"))}</p>`;const t=["TX","MTX"].filter(o=>e.contracts[o]).map(o=>{const i=e.contracts[o];return`<option value="${o}">${a(o)} · ${a(i.nameZh||"")} · NT$${i.multiplierTwdPerPoint}/pt</option>`}).join("");return`
    <form class="paper-deriv-form" data-deriv-form="tw-fut" autocomplete="off">
      <div class="pdf-row">
        <label>${a(n("paperDerivFutCode"))}
          <select name="code" required>${t}</select>
        </label>
        <label>${a(n("paperDerivMonth"))}
          <select name="month" required></select>
        </label>
        <label>${a(n("qty"))}
          <input name="qty" type="number" min="1" step="1" value="1" required />
        </label>
      </div>
      <div class="pdf-row pdf-meta">
        <span data-field="price">—</span>
        <span data-field="margin">—</span>
        <span data-field="mult">—</span>
      </div>
      <div class="pdf-actions">
        <button type="submit" name="side" value="buy" class="pdf-btn buy">${a(n("paperDerivLong"))} / ${a(n("buy"))}</button>
        <button type="submit" name="side" value="sell" class="pdf-btn sell">${a(n("paperDerivShort"))} / ${a(n("sell"))}</button>
      </div>
      <p class="paper-deriv-margin-note">${a(n("paperDerivMarginNote"))}</p>
      <p class="pdf-msg" data-msg hidden></p>
    </form>`}function es(e,t){const s=[...e||[]].sort((i,r)=>i.date<r.date?1:i.date>r.date?-1:0).slice(0,20);if(!s.length)return"";const o=s.map(i=>{var g;const r=String(i.side||"").toUpperCase(),l=r==="BUY"||i.reason==="server-open"||i.reason==="user-open",c=i.asset==="option"?`${i.underlying||""} ${String(i.right||"").toUpperCase()} ${i.strike??""} ${i.expiry||""}`:`${i.code||""} ${i.month||""}`,d=i.premium!=null?i.premium:i.price;let p="—",u="flat";if(l||r==="BUY")p=a(n("realizedOpenOnly"));else{const h=$a({...i,side:r==="SELL"||r==="CLOSE"?"SELL":i.side});h.status==="ok"&&k(h.value)?(p=F(h.value,t),u=fe(h.value)):h.status==="missing-cost"?p=a(n("costMissing")):p=a(n("realizedOpenOnly"))}return`<tr>
        <td>${a(i.date||"")}</td>
        <td>${a(c.trim()||"—")}</td>
        <td>${a(r==="BUY"?n("buy"):r==="SELL"?n("sell"):r)}</td>
        <td class="num">${((g=i.qty)==null?void 0:g.toLocaleString(E()))??"—"}</td>
        <td class="num">${te(d,t==="TWD"?0:2)}</td>
        <td class="num ${u}">${p}</td>
        <td class="why-cell">${a(i.reasonText||i.reason||"")}</td>
      </tr>`}).join("");return`
    <div class="paper-deriv-fills">
      <h5>${a(n("paperDerivFills"))}</h5>
      <p class="paper-deriv-open-note">${a(n("realizedOpenOnly"))} ≠ ${a(n("realizedPnl"))}</p>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${a(n("tradeDate"))}</th>
              <th>${a(n("paperDerivContract"))}</th>
              <th>${a(n("buy"))}/${a(n("sell"))}</th>
              <th class="num">${a(n("qty"))}</th>
              <th class="num">${a(n("price"))}</th>
              <th class="num">${a(n("realizedPnl"))}</th>
              <th>${a(n("note"))}</th>
            </tr>
          </thead>
          <tbody>${o}</tbody>
        </table>
      </div>
    </div>`}function ts(e,t,s,{optSnap:o,txf:i}){var g;if(!((g=t==null?void 0:t.books)==null?void 0:g[e]))return"";const l=s[e],c=Lt(t,e,s);if(e==="US"){const h=(l.positions||[]).filter(v=>v.asset==="option");let m=0,S=0;for(const v of h){const $=qs({qty:v.qtySigned,markPremium:v.markPremium}),C=Vt({qtySigned:v.qtySigned,avgPremium:v.avgPremium,markPremium:v.markPremium});k($)&&(m+=$),k(C)&&(S+=C)}return`
      <div class="paper-deriv" data-deriv-market="US">
        <div class="paper-deriv-head">
          <h4>${a(n("paperDerivUsTitle"))}</h4>
          <p class="paper-deriv-lead">${a(n("paperDerivUsLead"))}</p>
          ${Ka(s,"US")}
        </div>
        <div class="paper-deriv-kpis">
          <div><div class="k-label">${a(n("paperDerivFreeCash"))}</div><div class="k-val">${F(c,"USD")}</div></div>
          <div><div class="k-label">${a(n("paperDerivOptMv"))}</div><div class="k-val">${F(m,"USD")}</div></div>
          <div><div class="k-label">${a(n("unrealizedPnl"))}</div><div class="k-val ${fe(S)}">${F(S,"USD")}</div></div>
          <div><div class="k-label">${a(n("realizedPnl"))}</div><div class="k-val ${fe(l.realizedPnl)}">${F(l.realizedPnl,"USD")}</div></div>
        </div>
        ${xo(o)}
        <p class="paper-deriv-open-note">${a(n("unrealizedPnl"))} · ${a(n("realizedOpenOnly"))}</p>
        <div class="pos-scroll" role="region">
          <table class="pos-table deriv-table">
            <thead><tr>
              <th>${a(n("paperDerivContract"))}</th>
              <th class="num">${a(n("qty"))}</th>
              <th class="num">${a(n("avgCost"))}</th>
              <th class="num">${a(n("mark"))}</th>
              <th class="num">${a(n("mktValue"))}</th>
              <th class="num">${a(n("unrealizedPnl"))}</th>
              <th class="num">${a(n("paperDerivMarkSrc"))}</th>
              <th class="num">asOf</th>
              <th class="num">mult</th>
            </tr></thead>
            <tbody>${To(h,t)}</tbody>
          </table>
        </div>
        ${es(l.trades,"USD")}
      </div>`}const d=(l.positions||[]).filter(h=>h.asset==="futures");let p=0;for(const h of d){const m=Gt({entryPrice:h.avgPrice,markPrice:h.mark,code:h.code,contractsSigned:h.qtySigned});k(m)&&(p+=m)}const u=(i==null?void 0:i.sessionDate)||"—";return`
    <div class="paper-deriv" data-deriv-market="TW">
      <div class="paper-deriv-head">
        <h4>${a(n("paperDerivTwTitle"))}</h4>
        <p class="paper-deriv-lead">${a(n("paperDerivTwLead",{session:u}))}</p>
        ${Ka(s,"TW")}
      </div>
      <div class="paper-deriv-kpis">
        <div><div class="k-label">${a(n("paperDerivFreeCash"))}</div><div class="k-val">${F(c,"TWD")}</div></div>
        <div><div class="k-label">${a(n("paperDerivMarginHold"))}</div><div class="k-val">${F(l.marginHold,"TWD")}</div></div>
        <div><div class="k-label">${a(n("unrealizedPnl"))}</div><div class="k-val ${fe(p)}">${F(p,"TWD")}</div></div>
        <div><div class="k-label">${a(n("realizedPnl"))}</div><div class="k-val ${fe(l.realizedPnl)}">${F(l.realizedPnl,"TWD")}</div></div>
      </div>
      ${Po(i)}
      <p class="paper-deriv-open-note">${a(n("unrealizedPnl"))} · ${a(n("realizedOpenOnly"))}</p>
      <div class="pos-scroll" role="region">
        <table class="pos-table deriv-table pos-table">
          <thead><tr>
            <th>${a(n("paperDerivContract"))}</th>
            <th class="num">${a(n("qty"))}</th>
            <th class="num">${a(n("avgCost"))}</th>
            <th class="num">${a(n("mark"))}</th>
            <th class="num">${a(n("unrealizedPnl"))}</th>
            <th class="num">${a(n("paperDerivMarginHold"))}</th>
            <th class="num">mult</th>
            <th class="num">${a(n("paperDerivMarkSrc"))}</th>
            <th class="num">${a(n("paperDerivLastDay"))}</th>
          </tr></thead>
          <tbody>${wo(d)}</tbody>
        </table>
      </div>
      ${es(l.trades,"TWD")}
    </div>`}function Co(e,t){var d;const s=e.underlying.value,o=e.right.value,i=((t==null?void 0:t.tickers)||[]).find(p=>p.ticker===s),r=(d=i==null?void 0:i.options)==null?void 0:d.paperChain,l=e.strike;if(l.innerHTML="",!r)return;const c=o==="put"?r.puts:r.calls;for(const p of c||[]){const u=document.createElement("option");u.value=String(p.strike),u.textContent=`${p.strike} · ${p.premium}`,u.dataset.premium=String(p.premium),l.appendChild(u)}e.querySelector('[data-field="expiry"]').textContent=`${n("optionsExpiry")}: ${r.expiration||"—"}`,ia(e)}function ia(e){const t=e.strike.selectedOptions[0],s=t?Number(t.dataset.premium):NaN,o=Number(e.qty.value),i=e.querySelector('[data-field="premium"]'),r=e.querySelector('[data-field="debit"]');if(!k(s)||!Number.isInteger(o)||o<=0){i.textContent="—",r.textContent="—";return}i.textContent=`${n("paperDerivPremium")}: US$${te(s,2)}`;const l=s*ee*o;r.textContent=`${n("paperDerivCashImpact")}: US$${te(l,2)} (×${ee})`}function Lo(e,t){var l,c,d,p;const s=e.code.value,o=(l=t==null?void 0:t.contracts)==null?void 0:l[s],i=e.month;if(i.innerHTML="",!o)return;const r=[];(c=o.near)!=null&&c.month&&r.push({...o.near,label:`${o.near.month} (${n("paperDerivNear")})`}),(d=o.next)!=null&&d.month&&o.next.month!==((p=o.near)==null?void 0:p.month)&&r.push({...o.next,label:`${o.next.month} (${n("paperDerivNext")})`});for(const u of r){const g=document.createElement("option");g.value=u.month,g.textContent=u.label,g.dataset.last=String(u.last??""),g.dataset.settle=String(u.settle??""),i.appendChild(g)}ra(e,t)}function ra(e,t){var m,S;const s=e.code.value,o=(m=t==null?void 0:t.contracts)==null?void 0:m[s],i=e.month.selectedOptions[0],r=Number(e.qty.value),l=e.querySelector('[data-field="price"]'),c=e.querySelector('[data-field="margin"]'),d=e.querySelector('[data-field="mult"]');if(!o||!i){l.textContent=c.textContent=d.textContent="—";return}const p=Number(i.dataset.last),u=Number(i.dataset.settle),g=k(p)&&p>0?p:u;l.textContent=`${n("mark")}: ${k(g)?te(g,0):"—"}`,d.textContent=`× NT$${o.multiplierTwdPerPoint}/pt`;const h=(S=o.margin)==null?void 0:S.initial;k(h)&&Number.isInteger(r)&&r>0?c.textContent=`${n("paperDerivMarginHold")}: ${F(h*r,"TWD")}`:c.textContent="—"}function at(e,t,s){const o=e.querySelector("[data-msg]");o&&(o.hidden=!t,o.textContent=t||"",o.classList.toggle("ok",!!s),o.classList.toggle("err",!!t&&!s))}async function la(e,t){if(!e||!(t!=null&&t.books))return;const[s,o,i]=await Promise.all([fo(),yo(),vo()]),r=go();bo(r),Qa(r,s),Za(r,o),Ke(r);const l=i?structuredClone(i):null;l&&(Qa(l,s),Za(l,o));const c=So(r,l),d=e.querySelector("#paper-panel-US"),p=e.querySelector("#paper-panel-TW");if(d){let h=d.querySelector('[data-deriv-market="US"]');const m=ts("US",t,c,{optSnap:s,txf:o});h?h.outerHTML=m:d.insertAdjacentHTML("beforeend",m)}if(p){let h=p.querySelector('[data-deriv-market="TW"]');const m=ts("TW",t,c,{optSnap:s,txf:o});h?h.outerHTML=m:p.insertAdjacentHTML("beforeend",m)}const u=e.querySelector('[data-deriv-form="us-opt"]');if(u&&s){const h=()=>Co(u,s);u.underlying.addEventListener("change",h),u.right.addEventListener("change",h),u.strike.addEventListener("change",()=>ia(u)),u.qty.addEventListener("input",()=>ia(u)),h(),u.addEventListener("submit",m=>{var $,C,L,_;m.preventDefault();const S=(($=m.submitter)==null?void 0:$.value)||"buy",v=ko({paper:t,state:r,optSnap:s,underlying:u.underlying.value,right:u.right.value,strike:Number(u.strike.value),expiry:(_=(L=(C=s.tickers.find(x=>x.ticker===u.underlying.value))==null?void 0:C.options)==null?void 0:L.paperChain)==null?void 0:_.expiration,side:S,contracts:Number(u.qty.value)});if(!v.ok){at(u,v.error||n("paperDerivFail"),!1);return}at(u,n("paperDerivFillOk",{px:te(v.premium,2)}),!0),la(e,t)})}const g=e.querySelector('[data-deriv-form="tw-fut"]');if(g&&o){const h=()=>Lo(g,o);g.code.addEventListener("change",h),g.month.addEventListener("change",()=>ra(g,o)),g.qty.addEventListener("input",()=>ra(g,o)),h(),g.addEventListener("submit",m=>{var $;m.preventDefault();const S=(($=m.submitter)==null?void 0:$.value)||"buy",v=$o({paper:t,state:r,txf:o,code:g.code.value,month:g.month.value,side:S,contracts:Number(g.qty.value)});if(!v.ok){at(g,v.error||n("paperDerivFail"),!1);return}at(g,n("paperDerivFillOk",{px:te(v.price,0)}),!0),la(e,t)})}}const Qs={defensive:.5,selective:.8,balanced:1,constructive:1.1,aggressive:1.35,stabilize_first:.3},Ao={euphoric:"defensive",late_optimism:"selective",mid_cycle:"balanced",cautious_recovery:"constructive",despondent:"aggressive",panic:"stabilize_first"};function Zs(e){return e==null||Number.isNaN(e)?"—":`${Number(e).toFixed(2)}×`}function Mo(e){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${Number(e).toFixed(2)}`}function wa(e){if(!e)return`<span class="stance-badge stance-neutral">${a(n("dataInsufficient"))}</span>`;const t=Hn(e),s=oe(e);return`<span class="stance-badge stance-${t}">${a(s)}</span>`}function st(e,t){return`<div class="logic-metric">
    <span class="k">${a(e)}</span>
    <span class="v">${t}</span>
  </div>`}function At(e,t,{detailed:s=!1}={}){if(!t)return"";const o=t.incomplete?" incomplete":"",i=t.psychologyPhase,r=t.cycleStance,l=t.liquidityBias,c=i?oe(i):n("dataInsufficient"),d=l?oe(l):n("dataInsufficient"),p=Mo(t.temperatureScore),u=Zs(t.sizeMult??Qs[r]),g=Array.isArray(t.dataGaps)&&t.dataGaps.length?`<div class="regime-gaps">${a(n("dataGaps"))}: ${a(t.dataGaps.slice(0,5).join(", "))}${t.dataGaps.length>5?"…":""}</div>`:"",h=s&&Array.isArray(t.implications)&&t.implications.length?`<ul class="logic-impl">${t.implications.slice(0,3).map(S=>`<li>${a(Fn(S))}</li>`).join("")}</ul>`:"",m=s?`<div class="logic-metrics" role="list">
        ${st(n("psychologyPhase"),a(c))}
        ${st(n("liquidityBias"),a(d))}
        ${st(n("temperatureScore"),a(p))}
        ${st(n("sizeMult"),a(u))}
      </div>`:`<div class="regime-meta">
        <span>${a(n("psychologyPhase"))} <strong>${a(c)}</strong></span>
        <span>${a(n("liquidityBias"))} <strong>${a(d)}</strong></span>
      </div>`;return`<div class="regime-chip${s?" logic-regime-chip":""}${o}">
    <div class="regime-chip-top">
      <div class="label">${a(e)} · ${a(n("marketRegime"))}</div>
      ${wa(r)}
    </div>
    ${m}
    ${h}
    ${g}
  </div>`}function Eo(e){return!e||!e.us&&!e.tw?`<p class="logic-muted">${a(n("logicNoRegime"))}</p>`:`<div class="regime-strip logic-regime-live" aria-label="${a(n("regimeToday"))}">
    ${At("US",e.us,{detailed:!0})}
    ${At("TW",e.tw,{detailed:!0})}
  </div>`}function Do(e){return!e||!e.us&&!e.tw?"":`<div class="regime-strip" aria-label="${a(n("marketRegime"))}">
    ${At("US",e.us,{detailed:!1})}
    ${At("TW",e.tw,{detailed:!1})}
  </div>`}function Te(e,t,s){return`<section class="logic-step" id="logic-step-${e}">
    <header class="logic-step-head">
      <span class="logic-step-num" aria-hidden="true">${e}</span>
      <h3 class="logic-step-title">${a(t)}</h3>
    </header>
    <div class="logic-step-body">${s}</div>
  </section>`}function zo(e){return`<div class="logic-table-wrap"><table class="logic-table">
    <tbody>
      ${e.map(([t,s])=>`<tr><th scope="row">${a(t)}</th><td>${s}</td></tr>`).join("")}
    </tbody>
  </table></div>`}function ce(e){return`<ul class="logic-bullets">${e.map(t=>`<li>${t}</li>`).join("")}</ul>`}function jo(e){const t=e==null?void 0:e.marketRegime,s=Object.entries(Ao).map(([g,h])=>[oe(g),`${wa(h)} <span class="logic-mult">${a(Zs(Qs[h]))}</span>`]),o=ce([a(n("logicScreenABalanced")),a(n("logicScreenASelective")),a(n("logicScreenADefensive")),a(n("logicScreenAAggressive")),a(n("logicScreenAStabilize"))]),i=ce([a(n("logicScreenBVol")),a(n("logicScreenBMom"))]),r=ce([a(n("logicScoreFormula")),a(n("logicScoreSma")),a(n("logicScoreVol"))]),l=ce([a(n("logicDemoteHot")),a(n("logicDemoteThin")),a(n("logicPromoteFirm")),a(n("logicDemotePanic"))]),c=ce([a(n("logicWhyRs")),a(n("logicWhyMom")),a(n("logicWhyVol")),a(n("logicWhySma")),a(n("logicWhyRegime"))]),d=`
    <p class="logic-lead">${a(n("logicXqLead"))}</p>
    ${ce([a(n("logicXqPriceVol")),a(n("logicXqFlow")),a(n("logicXqFund")),a(n("logicXqMasters")),a(n("logicXqCycle"))])}
    <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="strategies">${a(n("logicOpenStrategies"))}</button></p>
  `,p=ce([a(n("logicPaperCapital")),a(n("logicPaperBuy")),a(n("logicPaperSizeMult")),a(n("logicPaperSell"))]),u=ce([a(n("logicRatesR2")),a(n("logicRatesR3")),a(n("logicRatesSeparate"))]);return`
    <header class="view-header">
      <h2 class="view-title">${a(n("logicTitle"))}</h2>
      <p class="logic-subtitle">${a(n("logicSubtitle"))}</p>
    </header>

    <section class="logic-live section" aria-labelledby="logic-live-h">
      <h3 id="logic-live-h" class="section-title">${a(n("regimeToday"))}</h3>
      ${Eo(t)}
    </section>

    <div class="logic-pipeline">
      ${Te(1,n("logicStep1"),`
        <p class="logic-lead">${a(n("logicStep1Lead"))}</p>
        ${zo(s)}
        <p class="logic-caption">${a(n("logicStep1Caption"))}</p>
        ${u}
      `)}

      ${Te(2,n("logicStep2"),`
        <p class="logic-lead">${a(n("logicStep2Lead"))}</p>
        <h4 class="logic-h4">${a(n("logicScreenA"))}</h4>
        ${o}
        <h4 class="logic-h4">${a(n("logicScreenB"))}</h4>
        ${i}
        <h4 class="logic-h4">${a(n("logicScore"))}</h4>
        ${r}
      `)}

      ${Te(3,n("logicStep3"),d)}

      ${Te(4,n("logicStep4"),`
        <p class="logic-lead">${a(n("logicStep4Lead"))}</p>
        ${l}
        <p class="logic-caption">${a(n("logicListSize"))}</p>
      `)}

      ${Te(5,n("logicStep5"),`
        <p class="logic-lead">${a(n("logicStep5Lead"))}</p>
        ${c}
      `)}

      ${Te(6,n("logicStep6"),`
        <p class="logic-lead">${a(n("logicStep6Lead"))}</p>
        ${p}
        <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="paper">${a(n("logicOpenPaper"))}</button></p>
      `)}
    </div>

    <p class="logic-footnote" role="note">${a(n("logicFootnote"))}</p>
  `}const en="./data/strategy-screener.json",as="jml-watchlist",ca=new Set(["inst-sync","margin-up","earnings-steady","low-pe-small","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short","ma-tangle-break","new-high-momentum","short-roc","day-up-5","pct5d-10","near-high","chip-main-force","chip-branch","chip-large-holders","gooaye-tw-semicon-chain","gooaye-tw-vol-breakout"]),ss=["大師","基本","籌碼","技術","綜合","週期"],xa={精選:"綜合",價量:"技術",財務:"基本",技術:"技術",基本:"基本",籌碼:"籌碼",大師:"大師",週期:"週期",綜合:"綜合"};function No(e){const t=xa[e]||e;return n(`cat${t}`,t)}function Ro(e){try{return new Date(e).toLocaleString(E(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+n("taipei")}catch{return e||"—"}}function f(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString(E(),{minimumFractionDigits:t,maximumFractionDigits:t})}function q(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function H(e){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(2)}%`}function ns(e){const t=e.categoryGroup||e.category||"綜合";return xa[t]||t}function Bo(e){let t=a(e);return t=t.replace(/本益比/g,()=>T("pe",n("pe"))),t=t.replace(/營益率/g,()=>T("opMargin",n("opMargin"))),t=t.replace(/毛利率/g,()=>T("grossMargin",n("grossMargin"))),t=t.replace(/外資/g,()=>T("foreignInv",n("foreignInv"))),t=t.replace(/投信/g,()=>T("trustInv",n("trustInv"))),t=t.replace(/自營商/g,()=>T("dealerInv",n("dealerInv"))),t=t.replace(/均線多頭/g,()=>T("maBull",n("maBull"))),t=t.replace(/RSI/g,()=>T("rsi",n("rsi"))),t=t.replace(/振幅/g,()=>T("amplitude",n("amplitude"))),t=t.replace(/(\d+)\s*張/g,(s,o)=>`${o}${T("zhang",n("zhang"))}`),t=t.replace(/＞\s*(\d+)\s*張/g,(s,o)=>`＞ ${o}${T("zhang",n("zhang"))}`),t}function Oo(e){return e==="skip"?`<span class="xq-cond-st skip">${a(n("condSkip"))}</span>`:e==="fail"?`<span class="xq-cond-st fail">${a(n("condFail"))}</span>`:`<span class="xq-cond-st pass">${a(n("condPass"))}</span>`}function qo(e){switch(e){case"ma-bull":return[{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:n("metricDayPct"),fmt:t=>H(t.dayPct),cls:t=>q(t.dayPct)},{key:"sma5",label:"SMA5",fmt:t=>f(t.sma5)},{key:"sma10",label:"SMA10",fmt:t=>f(t.sma10)},{key:"sma20",label:"SMA20",fmt:t=>f(t.sma20)},{key:"sma60",label:"SMA60",fmt:t=>f(t.sma60)},{key:"volRatioYday",label:n("metricVolRatioYday"),fmt:t=>t.volRatioYday!=null?f(t.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:n("metricVolToday"),fmt:t=>t.volTodayZhang!=null?f(t.volTodayZhang,1):t.volToday!=null?f(t.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:T("pe",n("pe")),fmt:t=>f(t.pe,2),rawLabel:!0},{key:"revGrowth2yAvgPct",label:"2年營收成長均%",fmt:t=>t.revGrowth2yAvgPct!=null?f(t.revGrowth2yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:t=>t.pretaxGrowth5yAvgPct!=null?f(t.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:n("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?f(t.avgVol5Zhang,1):"—"},{key:"dayPct",label:n("metricDayPct"),fmt:t=>H(t.dayPct),cls:t=>q(t.dayPct)}];case"chip-main-force":return[{key:"instNet1dZhang",label:"法人1日(張)",fmt:t=>f(t.instNet1dZhang,1)},{key:"instNet5dZhang",label:"法人5日(張)",fmt:t=>f(t.instNet5dZhang,1)},{key:"foreignNet5dZhang",label:n("foreign5d"),fmt:t=>f(t.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:n("trust5d"),fmt:t=>f(t.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:n("dealer5d"),fmt:t=>f(t.dealerNet5dZhang,1)}];case"chip-branch":return[{key:"foreignBuyStreakDays",label:"外資連買日",fmt:t=>t.foreignBuyStreakDays!=null?String(t.foreignBuyStreakDays):"—"},{key:"foreignNet1dZhang",label:n("foreign1d"),fmt:t=>f(t.foreignNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:n("foreign5d"),fmt:t=>f(t.foreignNet5dZhang,1)},{key:"instNet5dZhang",label:"法人5日(張)",fmt:t=>f(t.instNet5dZhang,1)}];case"chip-large-holders":return[{key:"megaHolderPct",label:"大戶>100萬股%",fmt:t=>t.megaHolderPct!=null?f(t.megaHolderPct,1)+"%":"—"},{key:"largeHolderPct",label:"分級12–15%",fmt:t=>t.largeHolderPct!=null?f(t.largeHolderPct,1)+"%":"—"},{key:"megaHolderCount",label:">100萬股人數",fmt:t=>t.megaHolderCount!=null?f(t.megaHolderCount,0):"—"},{key:"major10pctCount",label:"逾10%大股東家數",fmt:t=>t.major10pctCount!=null?f(t.major10pctCount,0):"—"},{key:"tdccAsOf",label:"集保日",fmt:t=>t.tdccAsOf||"—"}];case"inst-sync":return[{key:"foreignNet1dZhang",label:n("foreign1d"),fmt:t=>f(t.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:n("trust1d"),fmt:t=>f(t.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:n("dealer1d"),fmt:t=>f(t.dealerNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:n("foreign5d"),fmt:t=>f(t.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:n("trust5d"),fmt:t=>f(t.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:n("dealer5d"),fmt:t=>f(t.dealerNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:n("metricDayPct"),fmt:t=>H(t.dayPct),cls:t=>q(t.dayPct)},{key:"rsi",label:T("rsi",n("rsi")),fmt:t=>f(t.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:t=>f(t.rsiPrev,2)},{key:"ampPct",label:T("amplitude",n("amplitude")),fmt:t=>t.ampPct!=null?f(t.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?f(t.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:t=>f(t.pb,2)},{key:"directorHoldPct",label:n("metricDirector"),fmt:t=>t.directorHoldPct!=null?f(t.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:n("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:T("pe",n("pe")),fmt:t=>f(t.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?f(t.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:n("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:t=>Array.isArray(t.revGrowth3y)?t.revGrowth3y.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:t=>t.revGrowth5yAvgPct!=null?f(t.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:t=>t.pretaxGrowth5yAvgPct!=null?f(t.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:n("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?f(t.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:n("metricOpQ"),fmt:t=>t.opMargin1qPct!=null?f(t.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:t=>Array.isArray(t.opMargin3y)?t.opMargin3y.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:t=>t.revGrowth3yAvgPct!=null?f(t.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)}];case"benjamin-graham":return[{key:"pe",label:T("pe",n("pe")),fmt:t=>f(t.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:t=>f(t.pb,2)},{key:"debtRatioPct",label:n("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?f(t.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:n("metricOpQ"),fmt:t=>t.opMargin1qPct!=null?f(t.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:n("metricDebt"),fmt:t=>t.debtRatioPct!=null?f(t.debtRatioPct,1)+"%":"—"},{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:T("pe",n("pe")),fmt:t=>f(t.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:t=>t.roe4qPct!=null?f(t.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:t=>t.roeGrowthPct!=null?f(t.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:t=>t.epsGrowthStreak!=null?String(t.epsGrowthStreak):"—"},{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>f(t.avgVol5Zhang,1)}];case"margin-up":return[{key:"yoyPairs",label:"YoY配對",fmt:t=>Array.isArray(t.yoyPairs)?t.yoyPairs.join("；"):"—"},{key:"yoyOmPct",label:"YoY營益成長%",fmt:t=>Array.isArray(t.yoyOmPct)?t.yoyOmPct.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"yoyGmPct",label:"YoY毛利成長%",fmt:t=>Array.isArray(t.yoyGmPct)?t.yoyGmPct.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"opMargins",label:T("opMargin",n("opMargin")),fmt:t=>Array.isArray(t.opMargins)?t.opMargins.slice(-4).map(s=>s!=null?s+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:n("metricSource"),fmt:t=>t.source||"—"}];case"kostolany-cycle":return[{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:n("metricDayPct"),fmt:t=>H(t.dayPct),cls:t=>q(t.dayPct)},{key:"pct5d",label:"5日%",fmt:t=>H(t.pct5d),cls:t=>q(t.pct5d)},{key:"pct1m",label:"1月%",fmt:t=>H(t.pct1m),cls:t=>q(t.pct1m)},{key:"volRatio",label:n("volRatio"),fmt:t=>t.volRatio!=null?f(t.volRatio)+"×":"—"},{key:"psychologyPhase",label:n("psychologyPhase"),fmt:t=>t.psychologyPhase?oe(t.psychologyPhase):"—"},{key:"cycleStance",label:n("cycleStance"),fmt:t=>t.cycleStance?oe(t.cycleStance):"—"},{key:"liquidityBias",label:n("liquidityBias"),fmt:t=>t.liquidityBias?oe(t.liquidityBias):"—"},{key:"tags",label:n("regimeTags"),fmt:t=>t.tags||"—"},{key:"sizeMult",label:n("sizeMult"),fmt:t=>t.sizeMult!=null?f(t.sizeMult,2)+"×":"—"}];case"ma-tangle-break":return[{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:n("metricDayPct"),fmt:t=>H(t.dayPct),cls:t=>q(t.dayPct)},{key:"smaSpreadPct",label:"均線糾結%",fmt:t=>t.smaSpreadPct!=null?f(t.smaSpreadPct,2)+"%":"—"},{key:"volRatioYday",label:n("metricVolRatioYday"),fmt:t=>t.volRatioYday!=null?f(t.volRatioYday)+"×":"—"},{key:"sma5",label:"SMA5",fmt:t=>f(t.sma5)},{key:"sma20",label:"SMA20",fmt:t=>f(t.sma20)}];case"new-high-momentum":case"near-high":return[{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:n("metricDayPct"),fmt:t=>H(t.dayPct),cls:t=>q(t.dayPct)},{key:"pct5d",label:"5日%",fmt:t=>H(t.pct5d),cls:t=>q(t.pct5d)},{key:"high20",label:"20日高",fmt:t=>f(t.high20)},{key:"distHigh20Pct",label:"距高%",fmt:t=>t.distHigh20Pct!=null?f(t.distHigh20Pct,2)+"%":"—"},{key:"volRatioYday",label:n("metricVolRatioYday"),fmt:t=>t.volRatioYday!=null?f(t.volRatioYday)+"×":"—"}];case"short-roc":return[{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:n("metricDayPct"),fmt:t=>H(t.dayPct),cls:t=>q(t.dayPct)},{key:"roc10",label:"ROC10%",fmt:t=>t.roc10!=null?f(t.roc10,2)+"%":"—",cls:t=>q(t.roc10)},{key:"pct5d",label:"5日%",fmt:t=>H(t.pct5d),cls:t=>q(t.pct5d)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?f(t.avgVol5Zhang,1):"—"}];case"day-up-5":case"pct5d-10":return[{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:n("metricDayPct"),fmt:t=>H(t.dayPct),cls:t=>q(t.dayPct)},{key:"pct5d",label:"5日%",fmt:t=>H(t.pct5d),cls:t=>q(t.pct5d)},{key:"volRatioYday",label:n("metricVolRatioYday"),fmt:t=>t.volRatioYday!=null?f(t.volRatioYday)+"×":"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?f(t.avgVol5Zhang,1):"—"}];case"earnings-steady":return[{key:"yoyOmPct",label:"YoY營益成長%",fmt:t=>Array.isArray(t.yoyOmPct)?t.yoyOmPct.map(s=>s!=null?s+"%":"—").join(" → "):"—"},{key:"opMargins",label:T("opMargin",n("opMargin")),fmt:t=>Array.isArray(t.opMargins)?t.opMargins.slice(-4).map(s=>s!=null?s+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:n("metricSource"),fmt:t=>t.source||"—"}];case"low-pe-small":return[{key:"pe",label:T("pe",n("pe")),fmt:t=>f(t.pe,2),rawLabel:!0},{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"marketCapHint",label:"市值代理",fmt:t=>t.marketCapHint||"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:t=>t.avgVol5Zhang!=null?f(t.avgVol5Zhang,1):"—"}];case"gooaye-tw-semicon-chain":case"gooaye-tw-vol-breakout":case"gooaye-us-risk-on":case"gooaye-us-fomo-filter":return[{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:n("metricDayPct"),fmt:t=>H(t.dayPct),cls:t=>q(t.dayPct)},{key:"pct5d",label:"5日%",fmt:t=>H(t.pct5d),cls:t=>q(t.pct5d)},{key:"pct1m",label:"1月%",fmt:t=>H(t.pct1m),cls:t=>q(t.pct1m)},{key:"volRatio",label:n("metricVolRatioYday"),fmt:t=>t.volRatio!=null?f(t.volRatio)+"×":"—"},{key:"aboveSma50",label:"＞SMA50",fmt:t=>t.aboveSma50?"Y":"N"}];default:return[{key:"price",label:n("metricPrice"),fmt:t=>f(t.price)},{key:"dayPct",label:n("metricDayPct"),fmt:t=>H(t.dayPct),cls:t=>q(t.dayPct)}]}}function Io(e){const t=e.calibrationNotes;if(!t||typeof t!="object")return"";const s=Array.isArray(t.matchedXq)?t.matchedXq.map(l=>a(l)).join(" · "):"",o=Array.isArray(t.stillDiffers)?t.stillDiffers.map(l=>a(l)).join(" · "):"",i=t.unitsNote||t.units||"",r=[];return s&&r.push(`<span class="xq-cal-m">對齊 XQ：${s}</span>`),o&&r.push(`<span class="xq-cal-d">仍差異：${o}</span>`),i&&r.push(`<span class="xq-cal-u">${a(String(i))}</span>`),r.length?`<p class="xq-calibration" title="${n("calibTitle")}">${r.join("<br/>")}</p>`:""}function Ho(e){return`<ol class="xq-cond-list">${(e.conditions||[]).map((s,o)=>{const i=s.status||"pass";return`<li class="xq-cond ${i}">
        <span class="xq-cond-num">${o+1}</span>
        <span class="xq-cond-text">${Bo(s.text)}</span>
        ${Oo(i)}
      </li>`}).join("")}</ol>`}function Pa(e,t){return!t||t==="ALL"?e||[]:(e||[]).filter(s=>{const o=String(s.market||"").toUpperCase();if(o===t)return!0;const i=String(s.ticker||"").toUpperCase().endsWith(".TW");return o?!1:t==="TW"?i:!i})}function Fo(e,t="TW"){const s=e.hits||[],o=Pa(s,t),i=n(t==="US"?"usStock":"twStock");if(e.incomplete&&!s.length){const p=a(e.incompleteLabel||n("dataInsufficient")),u=(e.blockers||[]).map(g=>`<li>${a(g)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${p}</div>
      <ul>${u}</ul>
    </div>`}if(!o.length)return`<div class="xq-empty"><p>${a(i)} · ${a(n("noHits"))}</p></div>`;const r=qo(e.id),l=r.map(p=>`<th>${p.rawLabel?p.label:a(p.label)}</th>`).join(""),c=o.map(p=>{const u=p.metrics||{},g=r.map(h=>`<td class="num ${h.cls?h.cls(u):""}">${h.fmt(u)}</td>`).join("");return`<tr>
        <td><span class="ticker">${a(p.ticker)}</span></td>
        <td class="name-cell">${a(p.name||"")}${p.ohlcvBarDate?`<div class="xq-bar-date">K ${a(p.ohlcvBarDate)}</div>`:""}
          <button type="button" class="xq-btn xq-btn-sm xq-watch-inline" data-xq-watch="${a(p.ticker)}" data-xq-watch-name="${a(p.name||"")}">${a(n("addWatchlist"))}</button>
        </td>
        ${g}
      </tr>`}).join(""),d=o.map(p=>{const u=p.metrics||{},g=r.map(h=>{const m=h.cls?h.cls(u):"";return`<div class="xq-m"><span class="xq-ml">${h.rawLabel?h.label:a(h.label)}</span><span class="xq-mv ${m}">${h.fmt(u)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${a(p.ticker)}</div>
            <div class="name">${a(p.name||"")}</div>
            ${p.ohlcvBarDate?`<div class="xq-bar-date">K棒 ${a(p.ohlcvBarDate)}</div>`:""}
          </div>
          <div class="xq-hit-actions">
            <span class="badge market">${a(p.market||t)}</span>
            <button type="button" class="xq-btn xq-btn-sm" data-xq-watch="${a(p.ticker)}" data-xq-watch-name="${a(p.name||"")}">${a(n("addWatchlist"))}</button>
          </div>
        </div>
        <div class="xq-hit-metrics">${g}</div>
      </article>`}).join("");return`
    <div class="xq-market-block" data-market="${a(t)}">
      <h5 class="xq-market-title">${i}（${o.length}）</h5>
      <div class="table-wrap xq-table-wrap">
        <table class="stock-table xq-table">
          <thead><tr><th>代碼</th><th>名稱</th>${l}</tr></thead>
          <tbody>${c}</tbody>
        </table>
      </div>
      <div class="xq-mobile-cards">${d}</div>
    </div>`}function Uo(e,t,s="TW"){var p,u,g,h;const o=e.hits||[],r=Pa(o,s).length,l=(e.unchecked||[]).map(m=>`<li class="xq-unchecked">${a(m)}</li>`).join(""),c=(e.notes||[]).map(m=>`<li>${a(m)}</li>`).join(""),d=!e.incomplete&&(e.blockers||[]).length?`<ul class="xq-blockers">${(e.blockers||[]).map(m=>`<li>${a(m)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${a(e.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${a(e.name)}</h3>
          <div class="xq-tags">
            ${(e.xqTags||[e.category]).map(m=>`<span class="xq-tag">${a(m)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="${n("hitTitle")}">
          <span class="xq-hit-num">${r}</span>
          <span class="xq-hit-label">${a(n("hitCount"))}</span>
        </div>
      </div>
      ${e.description?`<details class="fold-block"><summary>${a(n("strategyDetails"))}</summary><p class="xq-desc fold-p">${a(e.description)}</p></details>`:""}
      <div class="xq-meta-row">
        <span>${a(n("sessionTwse"))} ${a(t.sessionDate||"—")}</span>
        <span>${a(n("ohlcvBar"))} ${a(((p=e.ohlcvBarDates)==null?void 0:p[0])||t.ohlcvBarDate||"—")}</span>
        <span>${a(n("generated"))} ${Ro(t.asOf)}</span>
        <span>${a(n("universeTw"))} ${((u=t.universe)==null?void 0:u.tw)??"—"}</span>
        <span>${a(n("universeUs"))} ${((g=t.universe)==null?void 0:g.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">${a(n("conditions"))}</h4>
      ${Ho(e)}
      ${Io(e)}
      ${(h=e.incompleteFilters)!=null&&h.length?`<p class="xq-incomplete-filters">${a(n("incompleteFilters"))}${a(e.incompleteFilters.join("、"))}</p>`:""}
      ${l?`<ul class="xq-unchecked-list">${l}</ul>`:""}
      ${e.regimeSnapshot?`<div class="xq-regime-box" role="status">
        <div class="xq-regime-title">${a(n("regimeToday"))}</div>
        <div class="xq-regime-grid">
          ${["us","tw"].map(m=>{const S=e.regimeSnapshot[m];if(!S)return"";const v=S.psychologyPhase?oe(S.psychologyPhase):n("dataInsufficient"),$=S.cycleStance,C=S.liquidityBias?oe(S.liquidityBias):n("dataInsufficient"),L=Array.isArray(S.dataGaps)&&S.dataGaps.length?`<div class="xq-regime-gaps">${a(n("dataGaps"))}：${a(S.dataGaps.join(", "))}</div>`:"";return`<div class="xq-regime-card">
                <div class="xq-regime-mkt">${a(m.toUpperCase())}</div>
                <div class="xq-regime-stance">${wa($)}</div>
                <div class="xq-regime-metrics">
                  <div><span class="k">${a(n("psychologyPhase"))}</span><strong>${a(v)}</strong></div>
                  <div><span class="k">${a(n("liquidityBias"))}</span><strong>${a(C)}</strong></div>
                  <div><span class="k">${a(n("temperatureScore"))}</span><strong>${a(S.temperatureScore==null?n("dataInsufficient"):String(S.temperatureScore))}</strong></div>
                </div>
                ${L}
              </div>`}).join("")}
        </div>
      </div>`:""}
      ${c?`<ul class="xq-notes">${c}</ul>`:""}
      ${d}
      <div class="xq-toolbar">
        <h4 class="xq-sub">${a(n("results"))}</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>${a(n("copyJson"))}</button>
          <button type="button" class="xq-btn" data-xq-csv>${a(n("exportCsv"))}</button>
          <a class="xq-btn xq-btn-link" href="${en}" download="strategy-screener.json">${a(n("exportJson"))}</a>
          <button type="button" class="xq-btn" disabled title="${a(n("backtestHint"))}">${a(n("backtestSoon"))}</button>
        </div>
      </div>
      ${e.twOnly||ca.has(e.id)?`<div class="xq-market-tabs"><span class="xq-mkt-hint">${a(n("twOnlyHint"))}</span></div>`:`<div class="xq-market-tabs" role="tablist" aria-label="${a(n("hitMarket"))}">
        <button type="button" class="xq-mkt-btn${s==="TW"?" active":""}" data-xq-market="TW" aria-pressed="${s==="TW"}">${a(n("twStock"))}</button>
        <button type="button" class="xq-mkt-btn${s==="US"?" active":""}" data-xq-market="US" aria-pressed="${s==="US"}">${a(n("usStock"))}</button>
      </div>`}
      ${Fo(e,e.twOnly||ca.has(e.id)?"TW":s)}
    </div>
  `}function Wo(e=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${T("strategyScreen",n("strategyScreen"))}</h2>
      <p class="view-lead-tight">${a(n("strategyLead"))}</p>
      <div id="xq-root" class="xq-root" aria-label="${a(n("strategyScreen"))}">
        ${e?`<p class="xq-loading">${a(n("strategyLoading"))}</p>`:""}
      </div>
    </section>
  `}async function _o(e=en){const t=await fetch(e,{cache:"no-cache"});if(!t.ok)throw new Error(`strategy-screener ${t.status}`);return t.json()}function Vo(e,t){var x,P;const s=typeof e=="string"?document.querySelector(e):e;if(!s||!((x=t==null?void 0:t.strategies)!=null&&x.length)){s&&(s.innerHTML=`<div class="xq-empty"><p>${a(n("strategyEmpty"))}</p></div>`);return}const o=[...ss];for(const b of t.categoryOrder||[]){const y=xa[b]||b;o.includes(y)||o.push(y)}const i=new Map(o.map(b=>[b,[]]));for(const b of t.strategies){const y=ns(b);i.has(y)||(i.set(y,[]),o.push(y)),i.get(y).push(b)}for(const[b,y]of i)!y.length&&ss.includes(b);let r=o.find(b=>(i.get(b)||[]).length)||o[0],l=((P=(i.get(r)||[])[0])==null?void 0:P.id)||t.strategies[0].id,c="TW";const d=(b,y)=>b.map(w=>{const A=(w.hits||[]).length,D=w.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${w.id===y?" active":""}${D}" data-xq-id="${a(w.id)}" aria-pressed="${w.id===y}">
          <span class="xq-chip-name">${a(w.name)}</span>
          <span class="xq-chip-n">${w.incomplete?a(n("incomplete")):a(n("hitsTotal",{n:A}))}</span>
        </button>`}).join(""),p=()=>o.map(b=>{const y=i.get(b)||[];return y.length?`<button type="button" class="xq-tab${b===r?" active":""}" data-xq-tab="${a(b)}" aria-pressed="${b===r}">
          <span>${a(No(b))}</span>
          <span class="xq-tab-n">${y.length}</span>
        </button>`:""}).join(""),u=()=>t.strategies.map(b=>{const y=(b.hits||[]).length,w=b.id===l?" active":"",A=b.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${w}${A}" data-xq-id="${a(b.id)}">
          <span>${a(b.name)}</span>
          <span class="xq-side-n">${b.incomplete?a(n("incomplete")):a(n("hitsTotal",{n:y}))}</span>
        </button>`}).join(""),g=()=>{const b=i.get(r)||[],y=t.strategies.find(w=>w.id===l)||b[0]||t.strategies[0];l=y.id,s.innerHTML=`
      <div class="xq-layout">
        <aside class="xq-sidebar" aria-label="${a(n("strategyList"))}">
          <div class="xq-side-title">${a(n("navStrategies"))}</div>
          ${u()}
        </aside>
        <div class="xq-main">
          <div class="xq-tabs" role="tablist" aria-label="${a(n("strategyCat"))}">${p()}</div>
          <div class="xq-chips" aria-label="${a(n("strategyList"))}">
            <div class="xq-chip-row">${d(b,l)}</div>
          </div>
          <div class="xq-panel-host">${Uo(y,t,c)}</div>
        </div>
      </div>
      <p class="xq-foot">${a((t.disclaimer||"").split("。")[0]+(t.disclaimer?"。":""))}</p>
      <div class="xq-toast" id="xq-toast" hidden role="status"></div>
    `},h=b=>{const y=t.strategies.find(A=>A.id===b);if(!y)return;l=b;const w=ns(y);w!==r&&(r=w),g()},m=b=>{const y=i.get(b)||[];y.length&&(r=b,y.some(w=>w.id===l)||(l=y[0].id),g())},S=(b,y=2200)=>{const w=s.querySelector("#xq-toast");w&&(w.hidden=!1,w.textContent=b,clearTimeout(S._t),S._t=setTimeout(()=>{w.hidden=!0},y))},v=async b=>{var y;try{if((y=navigator.clipboard)!=null&&y.writeText)return await navigator.clipboard.writeText(b),!0}catch{}try{const w=document.createElement("textarea");w.value=b,w.setAttribute("readonly",""),w.style.position="fixed",w.style.left="-9999px",w.style.top="0",document.body.appendChild(w),w.select();const A=document.execCommand("copy");return document.body.removeChild(w),A}catch{return!1}},$=(b,y,w)=>{const A=new Blob([y],{type:w});try{const D=document.createElement("a");return D.href=URL.createObjectURL(A),D.download=b,D.rel="noopener",document.body.appendChild(D),D.click(),D.remove(),setTimeout(()=>URL.revokeObjectURL(D.href),2e3),!0}catch{try{const D=`data:${w||"text/plain"};charset=utf-8,${encodeURIComponent(y)}`,I=document.createElement("a");return I.href=D,I.download=b,document.body.appendChild(I),I.click(),I.remove(),!0}catch{return!1}}},C=()=>{try{const b=localStorage.getItem(as),y=b?JSON.parse(b):[];return Array.isArray(y)?y:[]}catch{return[]}},L=b=>{try{localStorage.setItem(as,JSON.stringify(b.slice(0,200)))}catch{}},_=(b,y)=>{if(!b)return;const w=C();if(w.some(A=>A.ticker===b)){S(n("watchlistExists",{ticker:b}));return}w.unshift({ticker:b,name:y||b,addedAt:new Date().toISOString()}),L(w),S(n("watchlistAdded",{ticker:b}))};s.onclick=async b=>{var _a;const y=b.target,w=y&&typeof y.closest=="function"?y:y&&y.parentElement&&typeof y.parentElement.closest=="function"?y.parentElement:null;if(!w)return;const A=w.closest("[data-xq-tab]");if(A&&s.contains(A)){b.preventDefault(),m(A.getAttribute("data-xq-tab"));return}const D=w.closest("[data-xq-id]");if(D&&s.contains(D)){b.preventDefault(),h(D.getAttribute("data-xq-id"));return}const I=w.closest("[data-xq-market]");if(I&&s.contains(I)){b.preventDefault(),c=I.getAttribute("data-xq-market")||"TW",g();return}const Ua=w.closest("[data-xq-copy]");if(Ua&&s.contains(Ua)){b.preventDefault();const Qt=await v(JSON.stringify(t,null,2));S(n(Qt?"copied":"copyFailed"));return}const Wa=w.closest("[data-xq-csv]");if(Wa&&s.contains(Wa)){b.preventDefault();const Qt=((_a=s.querySelector(".xq-panel"))==null?void 0:_a.getAttribute("data-strategy-id"))||l,$e=t.strategies.find(Zt=>Zt.id===Qt);if(!$e)return;const zn=Pa($e.hits||[],$e.twOnly||ca.has($e.id)?"TW":c),Va=Go({...$e,hits:zn});if(!Va){S(n("noHitsExport"));return}const Ga="\uFEFF"+Va;if($(`${$e.id}-hits.csv`,Ga,"text/csv;charset=utf-8"))S(n("csvDownloaded"));else{const Zt=`data:text/csv;charset=utf-8,${encodeURIComponent(Ga)}`;S(n("csvBlocked"));try{window.open(Zt,"_blank")}catch{}}return}const et=w.closest("[data-xq-watch]");et&&s.contains(et)&&(b.preventDefault(),_(et.getAttribute("data-xq-watch"),et.getAttribute("data-xq-watch-name")))},g()}function Go(e){const t=e.hits||[];if(!t.length)return"";const s=[...new Set(t.flatMap(l=>Object.keys(l.metrics||{})))],o=["ticker","name","market","ohlcvBarDate",...s],i=l=>{const c=l==null?"":String(l);return/[",\n]/.test(c)?`"${c.replace(/"/g,'""')}"`:c},r=t.map(l=>{const c=l.metrics||{};return[l.ticker,l.name,l.market,l.ohlcvBarDate||"",...s.map(d=>{const p=c[d];return Array.isArray(p)?p.join("|"):p})].map(i).join(",")});return[o.join(","),...r].join(`
`)}async function Jo(e="#xq-root"){const t=()=>typeof e=="string"?document.querySelector(e):e;try{let s=t();if(s||(await new Promise(i=>requestAnimationFrame(i)),s=t()),!s)return console.warn("initStrategies: #xq-root missing"),{ok:!1,error:new Error("xq-root missing")};const o=await _o();return s=t(),s?(Vo(s,o),{ok:!0,data:o}):{ok:!1,error:new Error("xq-root gone after fetch")}}catch(s){const o=t();return o&&(o.innerHTML=`<div class="xq-empty"><p>${a(n("strategyLoadError",{msg:s.message}))}</p></div>`),{ok:!1,error:s}}}const tn="./data/research-library.json",an="./covers/placeholder-book.svg",sn="./covers/placeholder-paper.svg",nn="./covers/placeholder-podcast.svg",Xo={candidate:"rl-status-candidate",deferred:"rl-status-deferred",adopted:"rl-status-adopted",rejected:"rl-status-rejected"},Yo={yes:"rl-cand-yes",no:"rl-cand-no",watch:"rl-cand-watch"};function Ko(e){return{candidate:n("researchStatusCandidate"),deferred:n("researchStatusDeferred"),adopted:n("researchStatusAdopted"),rejected:n("researchStatusRejected")}[e]||e}function Qo(e){return{yes:n("researchCandYes"),no:n("researchCandNo"),watch:n("researchCandWatch")}[e]||e}function Zo(e){return e==="US"?n("usStock"):e==="TW"?n("twStock"):e==="BOTH"?n("researchMarketBoth"):e}function on(e){return n(e==="paper"?"researchTypePaper":e==="podcast"?"researchTypePodcast":"researchTypeBook")}function vt(e,t={}){var i;if(!e)return n("researchShelfAdjacent");const s=(i=t==null?void 0:t.shelfLabels)==null?void 0:i[e];if(s&&typeof s=="object")return Xt(s,e);const o={core_investing:"researchShelfCoreInvesting",value_investing:"researchShelfValueInvesting",business_management:"researchShelfBusiness",life_partner_wisdom:"researchShelfLifePartner",options:"researchShelfOptions",recent_reads:"researchShelfRecentReads",fi_concepts:"researchShelfFiConcepts",money_values:"researchShelfMoneyValues",investing_basics:"researchShelfInvestingBasics",asset_allocation:"researchShelfAssetAllocation",financials:"researchShelfFinancials",market_analysis:"researchShelfMarketAnalysis",econ_analysis:"researchShelfEconAnalysis",psych_randomness:"researchShelfPsych",biographies:"researchShelfBiographies",adjacent:"researchShelfAdjacent"}[e];return o?n(o):e}function ei(e={}){return(Array.isArray(e.shelves)?e.shelves:null)||["core_investing","value_investing","business_management","life_partner_wisdom","options","recent_reads","fi_concepts","money_values","investing_basics","asset_allocation","financials","market_analysis","econ_analysis","psych_randomness","biographies","adjacent"]}function Xt(e,t){if(!e||typeof e!="object")return t;const s=je();return e[s]||e.en||e["zh-Hant"]||t}function rn(e){return Xt(e.titleLocalized,e.title)||""}function ti(e){return Xt(e.summaryLocalized,e.summary)||""}function ai(e,t){return e.coverUrl?e.coverUrl:e.cover?e.cover:e.type==="paper"?(t==null?void 0:t.defaultCoverPaper)||sn:e.type==="podcast"?(t==null?void 0:t.defaultCoverPodcast)||nn:(t==null?void 0:t.defaultCoverBook)||an}function si(e,t){return e.coverFallback?e.coverFallback:e.type==="paper"?(t==null?void 0:t.defaultCoverPaper)||sn:e.type==="podcast"?(t==null?void 0:t.defaultCoverPodcast)||nn:(t==null?void 0:t.defaultCoverBook)||an}function ni(e){const t=e==null?void 0:e.plainTakeawaysLocalized;if(t&&typeof t=="object"){const s=je(),o=t[s]||t["zh-Hant"]||t.en;if(Array.isArray(o)&&o.length)return o}return Array.isArray(e==null?void 0:e.plainTakeaways)&&e.plainTakeaways.length?e.plainTakeaways:[]}function oi(e){const t=ni(e);return t.length?`<div class="rl-block">
    <h4 class="rl-h">${a(n("researchTakeaways"))}</h4>
    <ul class="rl-takeaways">${t.map(s=>`<li>${a(s)}</li>`).join("")}</ul>
  </div>`:""}function ii(e){if(!Array.isArray(e)||!e.length)return"";const t=e.filter(o=>/^https?:\/\//i.test(String(o)));if(!t.length)return"";const s=t.map(o=>`<a href="${a(o)}" target="_blank" rel="noopener noreferrer">${a(o)}</a>`).join(" · ");return`<div class="rl-sources"><span class="rl-k">${a(n("researchSources"))}</span> ${s}</div>`}function ri(e,t){const s=ai(e,t),o=si(e,t),i=rn(e)||on(e.type);return`
    <div class="rl-cover-wrap">
      <img
        class="rl-cover"
        src="${a(s)}"
        alt="${a(i)}"
        loading="lazy"
        decoding="async"
        data-rl-fallback="${a(o)}"
      />
    </div>`}function li(e){e.querySelectorAll("img.rl-cover[data-rl-fallback]").forEach(t=>{t.addEventListener("error",()=>{const s=t.dataset.rlFallback;s&&t.getAttribute("src")!==s?t.setAttribute("src",s):t.classList.add("is-broken")})})}function Ne(e,t={}){const s=e.status||"candidate",o=e.strategyCandidate||"watch",i=e.year!=null?String(e.year):"—",r=(e.authors||[]).join(", ")||"—";return`
    <article class="rl-card" data-rl-id="${a(e.id)}" data-rl-market="${a(e.market)}" data-rl-type="${a(e.type)}" data-rl-shelf="${a(e.shelf||"adjacent")}">
      ${ri(e,t)}
      <div class="rl-card-body">
        <header class="rl-card-head">
          <div class="rl-badges">
            <span class="rl-badge rl-type">${a(on(e.type))}</span>
            <span class="rl-badge rl-shelf">${a(vt(e.shelf,t))}</span>
            <span class="rl-badge rl-market">${a(Zo(e.market))}</span>
            <span class="rl-badge ${Xo[s]||""}">${a(Ko(s))}</span>
            <span class="rl-badge ${Yo[o]||""}" title="${a(n("researchStrategy"))}">${a(Qo(o))}</span>
          </div>
          <h3 class="rl-title">${a(rn(e))}</h3>
          <p class="rl-meta">${a(r)} · ${a(i)}</p>
        </header>
        <p class="rl-summary">${a(ti(e))}</p>
        ${oi(e)}
        ${ii(e.sources)}
      </div>
    </article>`}function ci(e=!0){return`
    <section class="section research-section" aria-labelledby="research-heading">
      <header class="view-header view-header-tight">
        <h2 class="view-title" id="research-heading">${a(n("researchTitle"))}</h2>
        <p class="view-lead view-lead-tight">${a(n("researchLead"))}</p>
      </header>
      <p class="rl-banner" role="note">${a(n("researchMathGateBanner"))}</p>
      <div id="rl-root" class="rl-root" data-placeholder="${e?"1":"0"}">
        <p class="rl-loading">${a(n("loading"))}</p>
      </div>
    </section>`}function bt(e,{market:t,type:s,shelf:o,status:i,candidate:r}){return e.filter(l=>s&&s!=="all"&&l.type!==s||o&&o!=="all"&&(l.shelf||"adjacent")!==o||i&&i!=="all"&&(l.status||"candidate")!==i||r&&r!=="all"&&(l.strategyCandidate||"watch")!==r?!1:!t||t==="all"?!0:t==="US"?l.market==="US"||l.market==="BOTH":t==="TW"?l.market==="TW"||l.market==="BOTH":!0)}function di(e){var s,o,i;const t=(s=e==null?void 0:e.meta)==null?void 0:s.mathGateLocalized;return t&&typeof t=="object"?Xt(t,(o=e==null?void 0:e.meta)==null?void 0:o.mathGate)||n("researchMathGateBanner"):((i=e==null?void 0:e.meta)==null?void 0:i.mathGate)||n("researchMathGateBanner")}const Yt=[{id:"book",titleKey:"researchCatBooks",type:"book"},{id:"paper",titleKey:"researchCatPapers",type:"paper"},{id:"podcast",titleKey:"researchCatPodcasts",type:"podcast"},{id:"us",titleKey:"researchCatUs",market:"US"},{id:"tw",titleKey:"researchCatTw",market:"TW"},{id:"candidate",titleKey:"researchCatCandidate",status:"candidate"},{id:"watch",titleKey:"researchCatWatch",candidate:"watch"}],os={menu:"menu",all:"menu",index:"menu",book:"book",books:"book",paper:"paper",papers:"paper",podcast:"podcast",podcasts:"podcast",us:"us",tw:"tw",candidate:"candidate",watch:"watch",watching:"watch"};let da=null,pa=null,ie={category:"menu",market:"all",type:"all",shelf:"all",status:"all",candidate:"all"};function Ca(e){if(e==null||e==="")return"menu";const s=String(e).trim().toLowerCase();return os[s]?os[s]:Yt.some(o=>o.id===s)?s:"menu"}function La(e,t){const s=Yt.find(o=>o.id===t);return e.category=s?t:"menu",e.market="all",e.type="all",e.shelf="all",e.status="all",e.candidate="all",s&&(s.type&&(e.type=s.type),s.market&&(e.market=s.market),s.status&&(e.status=s.status),s.candidate&&(e.candidate=s.candidate)),e}function pi(e,t){return bt(e,{market:t.market||"all",type:t.type||"all",shelf:"all",status:t.status||"all",candidate:t.candidate||"all"}).length}function ui(e){return!e||e.category==="menu"?"#research":e.shelf&&e.shelf!=="all"?`#research/shelf/${encodeURIComponent(e.shelf)}`:`#research/${e.category}`}function ln(e){const t=ui(e);location.hash!==t&&history.replaceState(null,"",t)}function is(e){return[{id:"menu",label:n("researchCatMenu")},...Yt.map(s=>({id:s.id,label:n(s.titleKey)}))].map(s=>`<button type="button" class="rl-tab${s.id===e.category?" is-active":""}" data-rl-cat="${a(s.id)}" role="tab" aria-selected="${s.id===e.category}">${a(s.label)}</button>`).join("")}function gi(e){const t=Yt.map(s=>{const o=pi(e,s);return`
      <button type="button" class="rl-menu-card" data-rl-cat="${a(s.id)}" aria-label="${a(n(s.titleKey))}">
        <h3 class="rl-menu-title">${a(n(s.titleKey))}</h3>
        <p class="rl-menu-count">${o}</p>
        <span class="rl-menu-cta">${a(n("researchOpenCategory"))}</span>
      </button>`}).join("");return`
    <div class="rl-menu" role="list" aria-label="${a(n("researchCategories"))}">
      <p class="rl-menu-lead">${a(n("researchMenuLead"))}</p>
      <div class="rl-menu-grid">${t}</div>
    </div>`}function Ae(e,t,s,{syncUrl:o=!0}={}){const i=Array.isArray(t==null?void 0:t.items)?t.items:[],r=(t==null?void 0:t.meta)||{},l=ei(r);if(o&&ln(s),s.category==="menu"){e.innerHTML=`
      <div class="rl-tabs-wrap">
        <div class="rl-tabs" role="tablist" aria-label="${a(n("researchCategories"))}">
          ${is(s)}
        </div>
      </div>
      ${gi(i)}`,rs(e,t,s);return}const c=bt(i,s),d=c.filter(P=>P.type==="book"),p=c.filter(P=>P.type==="paper"),u=c.filter(P=>P.type==="podcast"),g=r.mathGate?`<p class="rl-meta-line">${a(di(t))}</p>`:"",h=[`<button type="button" class="rl-filter rl-shelf-chip${s.shelf==="all"?" is-active":""}" data-rl-shelf="all">${a(n("researchFilterAll"))}</button>`,...l.map(P=>{const b=bt(i,{...s,shelf:P}).length;return b?`<button type="button" class="rl-filter rl-shelf-chip${s.shelf===P?" is-active":""}" data-rl-shelf="${a(P)}">${a(vt(P,r))} <span class="rl-chip-count">${b}</span></button>`:""})].join(""),m=[["all",n("researchFilterAll")],["candidate",n("researchStatusCandidate")],["deferred",n("researchStatusDeferred")],["adopted",n("researchStatusAdopted")],["rejected",n("researchStatusRejected")]].map(([P,b])=>{const y=bt(i,{...s,status:P==="all"?"all":P}).length;return P!=="all"&&!i.some(w=>(w.status||"candidate")===P)?"":`<button type="button" class="rl-filter${s.status===P?" is-active":""}" data-rl-status="${P}">${a(b)}${P==="all"?"":` <span class="rl-chip-count">${y}</span>`}</button>`}).join("");function S(P){if(!P.length)return`<p class="rl-empty">${a(n("researchEmpty"))}</p>`;if(s.shelf&&s.shelf!=="all")return`<div class="rl-grid">${P.map(y=>Ne(y,r)).join("")}</div>`;const b=l.filter(y=>P.some(w=>(w.shelf||"adjacent")===y));return b.length?b.map(y=>{const w=P.filter(A=>(A.shelf||"adjacent")===y);return`<section class="rl-shelf-group" data-shelf="${a(y)}" aria-label="${a(vt(y,r))}">
          <h4 class="rl-shelf-title">${a(vt(y,r))} <span class="rl-list-count">(${w.length})</span></h4>
          <div class="rl-grid">${w.map(A=>Ne(A,r)).join("")}</div>
        </section>`}).join(""):`<div class="rl-grid">${P.map(y=>Ne(y,r)).join("")}</div>`}const v=s.type==="all"||s.type==="book",$=s.type==="all"||s.type==="paper",C=s.type==="all"||s.type==="podcast",L=[];v&&L.push(`<section class="rl-list" aria-label="${a(n("researchTypeBook"))}">
        <h3 class="rl-list-title">${a(n("researchTypeBook"))} <span class="rl-list-count">(${d.length})</span></h3>
        ${S(d)}
      </section>`),$&&L.push(`<section class="rl-list" aria-label="${a(n("researchTypePaper"))}">
        <h3 class="rl-list-title">${a(n("researchTypePaper"))} <span class="rl-list-count">(${p.length})</span></h3>
        <div class="rl-grid">
          ${p.length?p.map(P=>Ne(P,r)).join(""):`<p class="rl-empty">${a(n("researchEmpty"))}</p>`}
        </div>
      </section>`),C&&L.push(`<section class="rl-list" aria-label="${a(n("researchTypePodcast"))}">
        <h3 class="rl-list-title">${a(n("researchTypePodcast"))} <span class="rl-list-count">(${u.length})</span></h3>
        <div class="rl-grid">
          ${u.length?u.map(P=>Ne(P,r)).join(""):`<p class="rl-empty">${a(n("researchEmpty"))}</p>`}
        </div>
      </section>`);const _=s.category==="us"||s.category==="tw"?"":`<div class="rl-filter-group" role="group" aria-label="${a(n("market"))}">
        <button type="button" class="rl-filter${s.market==="all"?" is-active":""}" data-rl-market="all">${a(n("researchFilterAll"))}</button>
        <button type="button" class="rl-filter${s.market==="US"?" is-active":""}" data-rl-market="US">${a(n("usStock"))}</button>
        <button type="button" class="rl-filter${s.market==="TW"?" is-active":""}" data-rl-market="TW">${a(n("twStock"))}</button>
      </div>`,x=s.category==="candidate"||s.category==="watch"?"":`<div class="rl-filter-group" role="group" aria-label="${a(n("researchStatusFilters"))}">
        ${m}
      </div>`;e.innerHTML=`
    <div class="rl-tabs-wrap">
      <div class="rl-tabs" role="tablist" aria-label="${a(n("researchCategories"))}">
        ${is(s)}
      </div>
    </div>
    <div class="rl-toolbar" role="toolbar" aria-label="${a(n("researchFilters"))}">
      ${_}
      ${x}
    </div>
    <div class="rl-shelf-scroll" role="group" aria-label="${a(n("researchShelfFilters"))}">
      ${h}
    </div>
    ${g}
    <p class="rl-counts">${a(n("researchCounts",{books:d.length,papers:p.length,podcasts:u.length,total:c.length}))}</p>
    <div class="rl-lists">
      ${L.join("")}
    </div>`,li(e),rs(e,t,s)}function rs(e,t,s){e.querySelectorAll("[data-rl-cat]").forEach(o=>{o.addEventListener("click",()=>{La(s,o.dataset.rlCat),Ae(e,t,s,{syncUrl:!0})})}),e.querySelectorAll("[data-rl-market]").forEach(o=>{o.addEventListener("click",()=>{s.market=o.dataset.rlMarket,Ae(e,t,s,{syncUrl:!1})})}),e.querySelectorAll("[data-rl-status]").forEach(o=>{o.addEventListener("click",()=>{s.status=o.dataset.rlStatus,Ae(e,t,s,{syncUrl:!1})})}),e.querySelectorAll("[data-rl-shelf]").forEach(o=>{o.addEventListener("click",()=>{s.shelf=o.dataset.rlShelf,ln(s),Ae(e,t,s,{syncUrl:!1})})})}async function hi(e=tn){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}function mi(e,{syncUrl:t=!0,shelf:s=null}={}){return!da||!pa?{ok:!1,reason:"not-ready"}:(La(ie,Ca(e)),s&&(ie.shelf=s),Ae(da,pa,ie,{syncUrl:t}),{ok:!0,category:ie.category,state:{...ie}})}async function fi(e="#rl-root",t=tn,s={}){const o=typeof e=="string"?document.querySelector(e):e;if(!o)return{ok:!1,reason:"missing-root"};da=o;try{const i=await hi(t);return pa=i,ie={category:"menu",market:"all",type:"all",shelf:"all",status:"all",candidate:"all"},La(ie,Ca(s.category??"menu")),s.shelf&&(ie.shelf=s.shelf),Ae(o,i,ie,{syncUrl:s.syncUrl!==!1}),{ok:!0,data:i}}catch(i){return o.innerHTML=`<p class="rl-error">${a(n("researchLoadError",{msg:i.message}))}</p>`,{ok:!1,error:i}}}const yi="./data/us-options-snapshot.json",vi="book-mcmillan-options-handbook",bi={"covered-call":["optionsSetupCoveredCall","optionsSetupCoveredCallBody","optionsSetupCoveredCallWarn"],"protective-put":["optionsSetupProtectivePut","optionsSetupProtectivePutBody","optionsSetupProtectivePutWarn"],"vertical-spread":["optionsSetupVertical","optionsSetupVerticalBody","optionsSetupVerticalWarn"],"calendar-diagonal":["optionsSetupCalendar","optionsSetupCalendarBody","optionsSetupCalendarWarn"],"straddle-strangle":["optionsSetupStraddle","optionsSetupStraddleBody","optionsSetupStraddleWarn"],butterfly:["optionsSetupButterfly","optionsSetupButterflyBody","optionsSetupButterflyWarn"]};function Si(e,t){if(!e||typeof e!="object")return t;const s=je();return e[s]||e["zh-Hant"]||e.en||t}function ki(e){return e&&Si(e.titleLocalized,e.title)||""}function $i(e){if(!e)return[];const t=e.plainTakeawaysLocalized;if(t&&typeof t=="object"){const s=je(),o=t[s]||t["zh-Hant"]||t.en;if(Array.isArray(o)&&o.length)return o}return Array.isArray(e.plainTakeaways)?e.plainTakeaways:[]}function Ti(e){try{return new Date(e).toLocaleString(E(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+n("taipei")}catch{return e||"—"}}function ne(e,t=2){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(E(),{minimumFractionDigits:t,maximumFractionDigits:t})}function cn(e,t=1){return e==null||Number.isNaN(e)?null:`${(e*100).toFixed(t)}%`}function ls(e){return e==null||Number.isNaN(e)?null:`${(e*100).toFixed(1)}%`}function j(e,t=""){return e==null||e===""?"—":`<span class="uo-val">${a(String(e))}${t?a(t):""}</span>`}function Aa(e){return n(e==="pass"?"optionsGatePass":e==="watch"?"optionsGateWatch":e==="fail"?"optionsGateFail":"optionsGateIncomplete")}function Ma(e){return e==="pass"?"uo-gate-pass":e==="watch"?"uo-gate-watch":e==="fail"?"uo-gate-fail":"uo-gate-incomplete"}function Mt(e){return!e||e.incomplete||e.label==null?null:e.label==="up"?n("optionsTrendUp",{pct:e.pct!=null?e.pct:"—"}):e.label==="down"?n("optionsTrendDown",{pct:e.pct!=null?e.pct:"—"}):n("optionsTrendFlat",{pct:e.pct!=null?e.pct:"—"})}function wi(e){return e==null?null:e>1.2?n("optionsSkewPutHeavy"):e<.8?n("optionsSkewCallHeavy"):n("optionsSkewBalanced")}function dn(e){return e==="iv_rich"?n("optionsRegimeIvRich"):e==="iv_cheap"?n("optionsRegimeIvCheap"):e==="iv_fair"?n("optionsRegimeIvFair"):e==="iv_only"?n("optionsRegimeIvOnly"):"—"}function xi(e){return e!=null&&e.primaryBook?e.primaryBook:null}function Pi(e){const t=xi(e),s=ki(t)||n("optionsBookFallbackTitle"),o=$i(t),i=o.length?`<ul class="uo-takeaways">${o.map(r=>`<li>${a(r)}</li>`).join("")}</ul>`:`<p class="uo-muted">${a(n("researchNoTakeaways"))}</p>`;return`
    <aside class="uo-book" aria-label="${a(n("optionsBookCite"))}">
      <div class="uo-book-head">
        <span class="uo-book-badge">${a(n("optionsBookBadge"))}</span>
        <h3 class="uo-book-title">${a(s)}</h3>
      </div>
      <p class="uo-book-lead">${a(n("optionsBookLead"))}</p>
      ${i}
      <p class="uo-book-link">
        <button type="button" class="uo-link-btn" data-jump="research">${a(n("optionsGotoResearch"))}</button>
        <span class="uo-muted">· ${a(vi)}</span>
      </p>
    </aside>`}function Ci(e){const t=e.fundamentals||{},s=e.quality||{},o=t.trailingPE??t.forwardPE,i=t.trailingPE!=null?"":t.forwardPE!=null?` <span class="uo-hint">(${a(n("optionsForwardPe"))})</span>`:"";return`
    <tr data-uo-ticker="${a(e.ticker)}" class="uo-q-row">
      <td>
        <button type="button" class="uo-ticker-btn" data-uo-select="${a(e.ticker)}">
          <span class="uo-ticker">${a(e.ticker)}</span>
          <span class="uo-name">${a(e.name||"")}</span>
        </button>
      </td>
      <td class="num">${j(ne(o,1))}${i}</td>
      <td class="num">${j(ne(t.priceToBook,2))}</td>
      <td class="num">${j(ne(t.debtToEquity,1))}</td>
      <td class="num">${j(cn(t.roe))}</td>
      <td>${j(Mt(t.revenueTrend))}</td>
      <td>${j(Mt(t.earningsTrend))}</td>
      <td><span class="uo-gate ${Ma(s.gate)}">${a(Aa(s.gate))}</span></td>
    </tr>`}function Li(e){return e.map(t=>{const s=t.fundamentals||{},o=t.quality||{},i=s.trailingPE??s.forwardPE;return`
      <article class="uo-q-card" data-uo-ticker="${a(t.ticker)}">
        <button type="button" class="uo-ticker-btn" data-uo-select="${a(t.ticker)}">
          <span class="uo-ticker">${a(t.ticker)}</span>
          <span class="uo-name">${a(t.name||"")}</span>
        </button>
        <div class="uo-metrics">
          <div><span class="m-l">${a(n("optionsPe"))}</span> ${j(ne(i,1))}</div>
          <div><span class="m-l">${a(n("optionsPb"))}</span> ${j(ne(s.priceToBook,2))}</div>
          <div><span class="m-l">${a(n("optionsDebt"))}</span> ${j(ne(s.debtToEquity,1))}</div>
          <div><span class="m-l">${a(n("optionsRoe"))}</span> ${j(cn(s.roe))}</div>
          <div><span class="m-l">${a(n("optionsRevTrend"))}</span> ${j(Mt(s.revenueTrend))}</div>
          <div><span class="m-l">${a(n("optionsEarnTrend"))}</span> ${j(Mt(s.earningsTrend))}</div>
        </div>
        <span class="uo-gate ${Ma(o.gate)}">${a(Aa(o.gate))}</span>
      </article>`}).join("")}function Ai(){return`
    <details class="uo-glossary fold-block">
      <summary>${a(n("optionsGlossaryTitle"))}</summary>
      <dl class="uo-dl">
        <div><dt>${a(n("optionsTermDelta"))}</dt><dd>${a(n("optionsDefDelta"))}</dd></div>
        <div><dt>${a(n("optionsTermIv"))}</dt><dd>${a(n("optionsDefIv"))}</dd></div>
        <div><dt>${a(n("optionsTermHv"))}</dt><dd>${a(n("optionsDefHv"))}</dd></div>
        <div><dt>${a(n("optionsTermAtm"))}</dt><dd>${a(n("optionsDefAtm"))}</dd></div>
        <div><dt>${a(n("optionsTermSkew"))}</dt><dd>${a(n("optionsDefSkew"))}</dd></div>
        <div><dt>${a(n("optionsTermProb"))}</dt><dd>${a(n("optionsDefProb"))}</dd></div>
      </dl>
    </details>`}function Mi(e){const t=e.setups||[];return t.length?`<div class="uo-setups">
    ${t.map(s=>{const o=bi[s.id];if(!o)return"";const[i,r,l]=o,c=s.volAligned?n("optionsSetupVolAligned"):n("optionsSetupVolNotAligned");return`
        <article class="uo-setup${s.volAligned?" is-aligned":""}">
          <h4>${a(n(i))}</h4>
          <p>${a(n(r))}</p>
          <p class="uo-risk-shape">${a(n("optionsRiskShape"))}: ${a(n(l))}</p>
          <p class="uo-muted">${a(c)} · ${a(dn(s.volRegime))}</p>
        </article>`}).join("")}
  </div>`:`<p class="uo-muted">${a(n("optionsNoSetups"))}</p>`}function Ei(e){var c,d;if(!e)return`<p class="uo-muted">${a(n("optionsPickTicker"))}</p>`;const t=e.options,s=e.blockers||[];if(!t)return`
      <div class="uo-blocker" role="status">
        <p><strong>${a(n("optionsChainBlocked"))}</strong></p>
        <p>${a(s.join(" · ")||n("optionsDataMissing"))}</p>
      </div>`;const o=wi(t.putCallVolumeRatio),i=t.atmIv==null,r=t.historicalVol==null,l=i?"unknown":r?"iv_only":t.ivHvRatio>=1.25?"iv_rich":t.ivHvRatio<=.8?"iv_cheap":"iv_fair";return`
    <div class="uo-opt-head">
      <div>
        <div class="uo-ticker">${a(e.ticker)}</div>
        <div class="uo-name">${a(e.name||"")}</div>
      </div>
      <span class="uo-gate ${Ma((c=e.quality)==null?void 0:c.gate)}">${a(Aa((d=e.quality)==null?void 0:d.gate))}</span>
    </div>
    <p class="uo-opt-note">${a(n("optionsMcmillanFirst"))}</p>
    <div class="uo-opt-grid">
      <div class="uo-opt-metric">
        <div class="m-l">${a(n("optionsAtmIv"))}</div>
        <div class="m-v">${j(i?null:ls(t.atmIv))}</div>
        <div class="uo-muted">${a(n("optionsExpiry"))}: ${a(t.expiration||"—")}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${a(n("optionsHv"))}</div>
        <div class="m-v">${j(r?null:ls(t.historicalVol))}</div>
        <div class="uo-muted">${a(n("optionsIvHv"))}: ${t.ivHvRatio!=null?j(ne(t.ivHvRatio,2)+"×"):j(null)}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${a(n("optionsVolRegime"))}</div>
        <div class="m-v">${a(dn(l))}</div>
        <div class="uo-muted">${o?a(o):""}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${a(n("optionsCallPutVol"))}</div>
        <div class="m-v">${j(ne(t.callVolume,0))} / ${j(ne(t.putVolume,0))}</div>
        <div class="uo-muted">${a(n("optionsAtmStrike"))}: ${j(ne(t.atmStrikeCall??t.atmStrikePut,1))}</div>
      </div>
    </div>
    ${(()=>{const p=s.filter(g=>!/atmIv|options fields incomplete/i.test(String(g))||t.historicalVol==null&&!(t.callVolume||t.putVolume)),u=p.length?p:[];return u.length?`<p class="uo-warn">${a(n("optionsPartialBlocker"))}: ${a(u.join(" · "))}</p>`:""})()}
    <h4 class="uo-h">${a(n("optionsEduSetups"))}</h4>
    <p class="uo-panel-lead">${a(n("optionsEduSetupsLead"))}</p>
    ${Mi(e)}
    <p class="uo-disclaimer" role="note">${a(n("optionsDisclaimer"))}</p>
    ${Ai()}
  `}function pn(e,t,s){const o=Array.isArray(t==null?void 0:t.tickers)?t.tickers:[],i=o.find(r=>r.ticker===s.ticker)||o[0]||null;i&&(s.ticker=i.ticker),e.innerHTML=`
    ${Pi(t)}
    <p class="uo-meta">${a(n("dataAsOf"))} ${a(Ti(t==null?void 0:t.asOf))} · ${a(n("optionsUsOnly"))}</p>
        <div class="uo-panels">
      <section class="uo-panel uo-panel-opt" aria-label="${a(n("optionsViewTitle"))}">
        <h3 class="uo-panel-title">${a(n("optionsViewTitle"))}</h3>
        <p class="uo-panel-lead">${a(n("optionsViewLead"))}</p>
        <div class="uo-ticker-chips" role="tablist" aria-label="${a(n("ticker"))}">
          ${o.map(r=>`
            <button type="button" class="uo-chip${r.ticker===s.ticker?" is-active":""}" data-uo-select="${a(r.ticker)}" role="tab" aria-selected="${r.ticker===s.ticker?"true":"false"}">${a(r.ticker)}</button>`).join("")}
        </div>
        <div class="uo-detail" id="uo-detail">
          ${Ei(i)}
        </div>
      </section>
      <section class="uo-panel" aria-label="${a(n("optionsQualityTitle"))}">
        <h3 class="uo-panel-title">${a(n("optionsQualityTitle"))}</h3>
        <p class="uo-panel-lead">${a(n("optionsQualityLead"))}</p>
        <div class="table-wrap uo-table-wrap">
          <table class="stock-table uo-table">
            <thead>
              <tr>
                <th>${a(n("ticker"))}</th>
                <th>${a(n("optionsPe"))}</th>
                <th>${a(n("optionsPb"))}</th>
                <th>${a(n("optionsDebt"))}</th>
                <th>${a(n("optionsRoe"))}</th>
                <th>${a(n("optionsRevTrend"))}</th>
                <th>${a(n("optionsEarnTrend"))}</th>
                <th>${a(n("optionsGate"))}</th>
              </tr>
            </thead>
            <tbody>
              ${o.length?o.map(Ci).join(""):`<tr><td colspan="8">${a(n("optionsEmpty"))}</td></tr>`}
            </tbody>
          </table>
        </div>
        <div class="uo-mobile">${o.length?Li(o):`<p class="uo-muted">${a(n("optionsEmpty"))}</p>`}</div>
      </section>
    </div>
  `,e.querySelectorAll("[data-uo-select]").forEach(r=>{r.addEventListener("click",()=>{s.ticker=r.getAttribute("data-uo-select"),pn(e,t,s)})}),e.querySelectorAll("[data-uo-ticker]").forEach(r=>{r.classList.toggle("is-selected",r.getAttribute("data-uo-ticker")===s.ticker)})}function Di(){return`
    <section class="section options-section" aria-label="${a(n("optionsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(n("optionsTitle"))}</h2>
        <p class="view-lead">${a(n("optionsLead"))}</p>
      </header>
      <p class="uo-disclaimer uo-disclaimer-top" role="note">${a(n("optionsDisclaimer"))}</p>
      <div id="uo-root" class="uo-root">
        <p class="uo-loading">${a(n("loading"))}</p>
      </div>
    </section>`}async function zi(e="#uo-root"){var s,o;const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};try{const i=await fetch(yi);if(!i.ok)throw new Error(`HTTP ${i.status}`);const r=await i.json(),l={ticker:((o=(s=r==null?void 0:r.tickers)==null?void 0:s[0])==null?void 0:o.ticker)||null};return pn(t,r,l),{ok:!0,data:r}}catch(i){return t.innerHTML=`
      <div class="uo-blocker" role="alert">
        <p>${a(n("optionsLoadError",{msg:i.message||String(i)}))}</p>
      </div>`,{ok:!1,error:i}}}const ji="./data/earnings-digest.json";function Ni(e){try{return new Date(e).toLocaleString(E(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+n("taipei")}catch{return e||"—"}}function aa(e,t=2){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(E(),{minimumFractionDigits:t,maximumFractionDigits:t})}function cs(e,t=1){return e==null||Number.isNaN(e)?null:`${e>0?"+":""}${Number(e).toFixed(t)}%`}function we(e,t=""){return e==null||e===""?null:`<span class="er-val">${a(String(e))}${t?a(t):""}</span>`}function xe(e,t){return t?`<div class="er-metric">
          <div class="m-l">${a(e)}</div>
          <div class="m-v">${t}</div>
        </div>`:""}function Ri(e){return e==="mega_cap_earnings_next_14d"?n("earningsTagPrimary"):e==="yahoo_most_actives_earnings_next_14d"?n("earningsTagActives"):e==="recently_reported"?n("earningsTagRecent"):e==="calendar_highlight_within_45d"?n("earningsTagFallback"):e||n("earningsTagOther")}function Bi(e){return e==="recently_reported"?"er-badge-recent":e==="calendar_highlight_within_45d"?"er-badge-fallback":e!=null&&e.includes("most_actives")?"er-badge-hot":""}function ds(e,{hot:t=!1}={}){var r;if(!e)return"";const s=e.nextEarningsDate!=null?`${e.nextEarningsDate}${e.nextEarningsDateIsEstimate?` (${n("earningsEstimate")})`:""}`:null,o=((r=e.lastReport)==null?void 0:r.epsActual)!=null?`${aa(e.lastReport.epsActual,2)}${e.lastReport.quarter?` · ${e.lastReport.quarter}`:""}`:null,i=t?`<span class="er-badge ${Bi(e.selectionTag)}">${a(Ri(e.selectionTag))}</span>`:`<span class="er-badge">${a(n("earningsMag7Badge"))}</span>`;return`
    <article class="er-card" data-ticker="${a(e.ticker)}">
      <div class="er-card-head">
        <div>
          <div class="er-ticker">${a(e.ticker)}</div>
          <div class="er-name">${a(e.name||"")}</div>
        </div>
        ${i}
      </div>
      <div>
        <div class="er-label">${a(n("earningsWhatItDoes"))}</div>
        <p class="er-does">${e.whatItDoes?a(e.whatItDoes):""}</p>
      </div>
      <div class="er-metrics">
        ${xe(n("earningsNextDate"),we(s))}
        ${xe(n("earningsLastEps"),we(o))}
        ${xe(n("earningsRevYoy"),we(cs(e.revenueYoYPct)))}
        ${xe(n("earningsEpsYoy"),we(cs(e.epsYoYPct)))}
        ${xe(n("earningsPe"),we(aa(e.pe,1)))}
        ${xe(n("earningsForwardPe"),we(aa(e.forwardPe,1)))}
      </div>
      ${e.whatToWatch?`<div>
        <div class="er-label">${a(n("earningsWhatToWatch"))}</div>
        <p class="er-watch">${a(e.whatToWatch)}</p>
      </div>`:""}
      ${Array.isArray(e.notes)&&e.notes.length?`<p class="er-notes er-muted">${a(e.notes.slice(0,3).join(" · "))}</p>`:""}
      ${e.blocker?`<p class="er-miss">${a(n("earningsPartialBlocker"))}: ${a(e.blocker)}</p>`:""}
    </article>`}function Oi(e,t){var i;const s=Array.isArray(t==null?void 0:t.mag7)?t.mag7:[],o=Array.isArray(t==null?void 0:t.watchlistHot)?t.watchlistHot:[];e.innerHTML=`
    <p class="er-meta">${a(n("dataAsOf"))} ${a(Ni(t==null?void 0:t.asOf))} · ${a(n("earningsUsFocus"))}</p>
    <p class="er-stub" role="note">${a(((i=t==null?void 0:t.twStub)==null?void 0:i.note)||n("earningsTwStub"))}</p>
    <div class="er-rule"><strong>${a(n("earningsSelectionTitle"))}</strong> ${a((t==null?void 0:t.selectionRule)||n("earningsSelectionFallback"))}</div>
        <div class="er-panels">
      <section class="er-panel" aria-label="${a(n("earningsMag7Title"))}">
        <h3 class="er-panel-title">${a(n("earningsMag7Title"))}</h3>
        <p class="er-panel-lead">${a(n("earningsMag7Lead"))}</p>
        <div class="er-cards">
          ${s.length?s.map(r=>ds(r,{hot:!1})).join(""):`<p class="er-empty">${a(n("earningsEmpty"))}</p>`}
        </div>
      </section>
      <section class="er-panel" aria-label="${a(n("earningsHotTitle"))}">
        <h3 class="er-panel-title">${a(n("earningsHotTitle"))}</h3>
        <p class="er-panel-lead">${a(n("earningsHotLead"))}</p>
        <div class="er-cards">
          ${o.length?o.map(r=>ds(r,{hot:!0})).join(""):`<p class="er-empty">${a(n("earningsHotEmpty"))}</p>`}
        </div>
      </section>
    </div>
    <p class="er-disclaimer" role="note">${a(n("earningsDisclaimer"))}</p>
  `}function qi(){return`
    <section class="section earnings-section" aria-label="${a(n("earningsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(n("earningsTitle"))}</h2>
        <p class="view-lead">${a(n("earningsLead"))}</p>
      </header>
      <p class="er-disclaimer er-disclaimer-top" role="note">${a(n("earningsDisclaimer"))}</p>
      <div id="er-root" class="er-root">
        <p class="er-loading">${a(n("loading"))}</p>
      </div>
    </section>`}async function Ii(e="#er-root"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};try{const s=await fetch(ji);if(!s.ok)throw new Error(`HTTP ${s.status}`);const o=await s.json();return Oi(t,o),{ok:!0,data:o}}catch(s){return t.innerHTML=`
      <div class="er-empty" role="status">
        <p>${a(n("earningsLoadError",{msg:s.message||String(s)}))}</p>
      </div>`,{ok:!1,error:s}}}const Hi="./data/earnings-digest.json",Et=["https://query2.finance.yahoo.com","https://query1.finance.yahoo.com"],ye="https://r.jina.ai/",Fi="https://www.sec.gov/files/company_tickers.json",Ui=e=>`https://data.sec.gov/submissions/CIK${e}.json`,Wi=/^(10-K|10-Q|8-K)(\/A)?$/i,_i=8,ps=["price","summaryProfile","summaryDetail","defaultKeyStatistics","financialData","calendarEvents","earningsHistory"].join(",");let Ce=null,nt=null,ot=null,it=null;function M(e){if(e==null)return null;if(typeof e=="object"&&"raw"in e){const t=e.raw;return t==null||Number.isNaN(t)?null:t}return typeof e=="number"&&Number.isNaN(e)?null:e}function V(e,t=2){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(E(),{minimumFractionDigits:t,maximumFractionDigits:t})}function ge(e,t=2){return e==null||Number.isNaN(e)?null:`${e>0?"+":""}${Number(e).toFixed(t)}%`}function Vi(e){return e==null||Number.isNaN(e)?null:Math.abs(e)>=1e9?`${V(e/1e9,2)}B`:Math.abs(e)>=1e6?`${V(e/1e6,2)}M`:Math.abs(e)>=1e3?`${V(e/1e3,1)}K`:V(e,0)}function us(e,t){if(e==null||Number.isNaN(e))return null;const s=t==="TWD"?"NT$":t==="USD"?"$":"";return Math.abs(e)>=1e12?`${s}${V(e/1e12,2)}T`:Math.abs(e)>=1e9?`${s}${V(e/1e9,2)}B`:Math.abs(e)>=1e6?`${s}${V(e/1e6,2)}M`:`${s}${V(e,0)}`}function he(e,t){if(e==null||Number.isNaN(e))return null;const s=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"$":t==="TWD"?"NT$":""}${V(e,s)}`}function un(e){try{const t=typeof e=="number"?new Date(e*(e<1e12?1e3:1)):new Date(e);return Number.isNaN(t.getTime())?null:t.toLocaleString(E(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+n("taipei")}catch{return null}}function Gi(e){return e==null||Number.isNaN(e)||e===0?"lk-flat":e>0?"lk-up":"lk-down"}function ua(e){if(!e)return null;const t=String(e).trim();if(t.startsWith("{")||t.startsWith("["))try{return JSON.parse(t)}catch{}const s=t.match(/Markdown Content:\s*(\{[\s\S]*|\[[\s\S]*)/i),o=s?s[1].trim():t,i=o.search(/[\{\[]/);if(i<0)return null;const r=o.slice(i);for(let l=r.length;l>2;l--){try{return JSON.parse(r.slice(0,l))}catch{}const c=Math.max(r.lastIndexOf("}",l-2),r.lastIndexOf("]",l-2));if(c<8)break;l=c+2}return null}async function Dt(e,{timeoutMs:t=14e3}={}){const s=typeof AbortController<"u"?new AbortController:null,o=s?setTimeout(()=>s.abort(),t):null;try{const i=await fetch(e,{signal:s==null?void 0:s.signal,headers:{Accept:"application/json,text/plain,*/*"}});if(!i.ok)throw new Error(`HTTP ${i.status}`);return await i.text()}finally{o&&clearTimeout(o)}}async function ga(e){const t=[];for(const s of Et){const o=`${s}${e}`;try{const i=await Dt(o,{timeoutMs:1e4}),r=ua(i);if(r)return{ok:!0,data:r,via:"direct",url:o};t.push(`${s}: non-json`)}catch(i){t.push(`${s}: ${i.message||i}`)}}for(const s of Et){const o=`${s}${e}`;try{const i=await Dt(`${ye}${o}`,{timeoutMs:18e3}),r=ua(i);if(r)return{ok:!0,data:r,via:"jina",url:o};t.push(`jina ${s}: parse`)}catch(i){t.push(`jina ${s}: ${i.message||i}`)}}return{ok:!1,data:null,via:null,error:t.slice(0,4).join(" · ")}}function Ji(e,t="US"){let s=String(e||"").trim().toUpperCase();if(s=s.replace(/\s+/g,""),!s)return{ok:!1,error:"empty"};const o=t==="TW"?"TW":"US";if(/^\d{4}(\.(TW|TWO))?$/.test(s)){const r=s.replace(/\.(TW|TWO)$/,"");return{ok:!0,market:"TW",symbol:`${r}.TW`,alt:`${r}.TWO`,display:r}}if(/\.(TW|TWO)$/.test(s))return{ok:!0,market:"TW",symbol:s,alt:s.endsWith(".TW")?s.replace(/\.TW$/,".TWO"):s.replace(/\.TWO$/,".TW"),display:s.replace(/\.(TW|TWO)$/,"")};if(/^\d{4,6}$/.test(s)&&o==="TW")return{ok:!0,market:"TW",symbol:`${s}.TW`,alt:`${s}.TWO`,display:s};let i=s.replace(/\./g,"-");return/^[A-Z][A-Z0-9\-]{0,9}$/.test(i)?{ok:!0,market:"US",symbol:i,alt:null,display:i}:{ok:!1,error:"invalid"}}function Xi(e){var c,d,p,u,g;const t=(d=(c=e==null?void 0:e.chart)==null?void 0:c.result)==null?void 0:d[0];if(!t)return null;const s=t.meta||{},o=s.chartPreviousClose??s.previousClose??(Array.isArray((g=(u=(p=t.indicators)==null?void 0:p.quote)==null?void 0:u[0])==null?void 0:g.close)?[...t.indicators.quote[0].close].reverse().find(h=>h!=null):null),i=s.regularMarketPrice??null;let r=null,l=s.regularMarketChangePercent??s.fulldayChangePercent??null;return i!=null&&o!=null&&(r=i-o,l==null&&o!==0&&(l=r/o*100)),{symbol:s.symbol||null,shortName:s.shortName||null,longName:s.longName||null,currency:s.currency||null,exchange:s.fullExchangeName||s.exchangeName||null,price:i,previousClose:o??null,change:r,changePct:l,volume:s.regularMarketVolume??null,dayHigh:s.regularMarketDayHigh??null,dayLow:s.regularMarketDayLow??null,fiftyTwoWeekHigh:s.fiftyTwoWeekHigh??null,fiftyTwoWeekLow:s.fiftyTwoWeekLow??null,marketTime:s.regularMarketTime??null,instrumentType:s.instrumentType||null}}function Yi(e,t){const s=Array.isArray(e==null?void 0:e.quotes)?e.quotes:[],o=s.find(i=>String(i.symbol||"").toUpperCase()===t.toUpperCase())||s.find(i=>i.isYahooFinance)||s[0];return o?{symbol:o.symbol||null,shortName:o.shortname||o.shortName||null,longName:o.longname||o.longName||null,exchange:o.exchDisp||o.exchange||null,sector:o.sectorDisp||o.sector||null,industry:o.industryDisp||o.industry||null,quoteType:o.quoteType||o.typeDisp||null}:null}function ha(e){var h,m,S,v,$;const t=(m=(h=e==null?void 0:e.quoteSummary)==null?void 0:h.result)==null?void 0:m[0];if(!t)return null;const s=t.price||{},o=t.summaryProfile||{},i=t.summaryDetail||{},r=t.defaultKeyStatistics||{},l=t.financialData||{},c=((S=t.calendarEvents)==null?void 0:S.earnings)||{},d=Array.isArray((v=t.earningsHistory)==null?void 0:v.history)?t.earningsHistory.history:[],p=d.find(C=>C.period==="-1q")||[...d].sort((C,L)=>String(L.period||"").localeCompare(String(C.period||"")))[0]||null,g=(Array.isArray(c.earningsDate)?c.earningsDate:[]).map(C=>{var L;return(C==null?void 0:C.fmt)||(M(C)!=null?(L=un(M(C)))==null?void 0:L.slice(0,10):null)}).find(Boolean)||null;return{name:s.longName||s.shortName||null,currency:s.currency||i.currency||null,business:o.longBusinessSummary||null,sector:o.sector||null,industry:o.industry||null,website:o.website||null,pe:M(i.trailingPE)??M(r.trailingPE),forwardPe:M(i.forwardPE)??M(r.forwardPE),marketCap:M(i.marketCap)??M(s.marketCap),epsTrailing:M(r.trailingEps)??M(l.trailingEps),revenue:M(l.totalRevenue),revenueGrowth:M(l.revenueGrowth)!=null?M(l.revenueGrowth)*100:null,earningsGrowth:M(l.earningsGrowth)!=null?M(l.earningsGrowth)*100:null,profitMargins:M(l.profitMargins)!=null?M(l.profitMargins)*100:null,grossMargins:M(l.grossMargins)!=null?M(l.grossMargins)*100:null,dividendYield:M(i.dividendYield)!=null?M(i.dividendYield)*100:null,beta:M(r.beta)??M(i.beta),bookValue:M(r.bookValue),nextEarningsDate:g,nextEarningsEstimate:M(c.earningsAverage),lastEpsActual:p?M(p.epsActual):null,lastEpsEstimate:p?M(p.epsEstimate):null,lastEpsSurprisePct:p&&M(p.surprisePercent)!=null?M(p.surprisePercent)*100:null,lastEpsPeriod:(p==null?void 0:p.period)||null,lastEpsQuarter:(($=p==null?void 0:p.quarter)==null?void 0:$.fmt)||null}}async function Ki(){try{await fetch("https://guce.yahoo.com/consent?brandType=nonEu",{mode:"cors",credentials:"include",redirect:"follow"})}catch{}for(const e of Et)try{const t=await fetch(`${e}/v1/test/getcrumb`,{mode:"cors",credentials:"include"});if(!t.ok)continue;const s=(await t.text()).trim();if(s&&s.length<80&&!s.includes("{"))return{ok:!0,crumb:s,host:e}}catch{}return{ok:!1,crumb:"",host:Et[0]}}async function Qi(e){const t=await Ki();if(t.ok){const r=`/v10/finance/quoteSummary/${encodeURIComponent(e)}?modules=${ps}&crumb=${encodeURIComponent(t.crumb)}`;try{const l=await fetch(`${t.host}${r}`,{mode:"cors",credentials:"include",headers:{Accept:"application/json"}});if(l.ok){const c=await l.json(),d=ha(c);if(d)return{ok:!0,data:d,via:"yahoo-crumb"}}}catch{}}const s=`/v10/finance/quoteSummary/${encodeURIComponent(e)}?modules=${ps}`,o=await ga(s);if(o.ok){const r=ha(o.data);if(r)return{ok:!0,data:r,via:`yahoo-${o.via}`}}const i=await Zi(e);return i.ok?i:{ok:!1,data:null,via:null,error:o.error||"quoteSummary unavailable"}}async function Zi(e){const t=[`https://finance.yahoo.com/quote/${encodeURIComponent(e)}/`,`${ye}https://finance.yahoo.com/quote/${encodeURIComponent(e)}/`];for(const s of t)try{const o=await Dt(s,{timeoutMs:2e4});if(/AbuseAlleviation|Invalid Crumb|AuthenticationRequired/i.test(o)&&o.length<2e3)continue;const i=[...o.matchAll(/<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/gi)];for(const l of i)try{const c=JSON.parse(l[1]),d=typeof(c==null?void 0:c.body)=="string"?JSON.parse(c.body):(c==null?void 0:c.body)||c,p=ha(d);if(p!=null&&p.business||(p==null?void 0:p.pe)!=null||(p==null?void 0:p.marketCap)!=null)return{ok:!0,data:p,via:s.startsWith(ye)?"yahoo-html-jina":"yahoo-html"}}catch{}const r=o.match(/\\"longBusinessSummary\\":\\"(.*?)\\"/);if(r)return{ok:!0,data:{business:r[1].replace(/\\n/g," ").replace(/\\"/g,'"').replace(/\\\\/g,"\\").slice(0,800)},via:"yahoo-html-partial"}}catch{}return{ok:!1,data:null,via:null}}async function gn(){return Ce||nt||(nt=(async()=>{try{const e=await fetch(Hi,{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);Ce=await e.json()}catch{Ce={mag7:[],watchlistHot:[]}}return Ce})(),nt)}function er(e){const t=Ce;if(!t)return null;const s=String(e||"").replace(/\.TW$/i,"").replace(/\.TWO$/i,"").toUpperCase();return[...t.mag7||[],...t.watchlistHot||[]].find(i=>String(i.ticker||"").toUpperCase()===s)||null}function Qe(e){const t=String(e??"").replace(/\D/g,"");return t?t.padStart(10,"0").slice(-10):null}function tr(e,t,s){const o=String(e??"").replace(/^0+/,"")||String(e??"").replace(/\D/g,""),i=String(t||"").replace(/-/g,""),r=String(s||"").trim();return!o||!i||!r?null:`https://www.sec.gov/Archives/edgar/data/${o}/${i}/${r}`}function gs({market:e,symbol:t,display:s,website:o,cik:i}={}){const r=e==="TW"?"TW":"US",l=String(t||"").toUpperCase(),c=String(s||l.replace(/\.(TW|TWO)$/i,"")).replace(/\D/g,"").slice(0,6),d=[],u=new Date().getFullYear()-1911;if(r==="US"){const g=l.replace(/-/,"."),h=Qe(i),m=h?String(Number(h)):null;d.push({kind:"official",id:"sec-edgar-search",labelKey:"lookupSecEdgarSearch",href:`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${encodeURIComponent(g)}&type=&dateb=&owner=include&count=40`}),m&&d.push({kind:"official",id:"sec-edgar-browse",labelKey:"lookupSecEdgarBrowse",href:`https://www.sec.gov/edgar/browse/?CIK=${encodeURIComponent(m)}`}),d.push({kind:"official",id:"sec-forms-filter",labelKey:"lookupSecFormsFilter",href:`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${encodeURIComponent(h||g)}&type=10-&dateb=&owner=include&count=40`})}else c?(d.push({kind:"official",id:"mops-financial-book",labelKey:"lookupMopsFinancialBook",href:`https://mops.twse.com.tw/server-java/t57sb01?step=1&colorchg=1&co_id=${encodeURIComponent(c)}&year=${u}&season=&mtype=A`}),d.push({kind:"official",id:"mops-financial-query",labelKey:"lookupMopsFinancialQuery",href:"https://mops.twse.com.tw/mops/web/t57sb01_q1"}),d.push({kind:"official",id:"mops-company",labelKey:"lookupMopsCompany",href:`https://mops.twse.com.tw/mops/web/t05st01?co_id=${encodeURIComponent(c)}`}),d.push({kind:"official",id:"mops-material",labelKey:"lookupMopsMaterial",href:`https://mops.twse.com.tw/mops/web/t05st02?co_id=${encodeURIComponent(c)}`}),d.push({kind:"official",id:"twse-isin",labelKey:"lookupTwseIsin",href:`https://isin.twse.com.tw/isin/basic_search.jsp?code=${encodeURIComponent(c)}`}),/\.TWO$/i.test(l)&&d.push({kind:"official",id:"tpex-company",labelKey:"lookupTpexCompany",href:`https://www.tpex.org.tw/zh-tw/mainboard/listed/company-detail.html?stkno=${encodeURIComponent(c)}`})):d.push({kind:"official",id:"mops-home",labelKey:"lookupMopsFinancialQuery",href:"https://mops.twse.com.tw/mops/web/t57sb01_q1"}),l&&d.push({kind:"quote",id:"yahoo-tw",labelKey:"lookupYahooTwQuote",href:`https://tw.stock.yahoo.com/quote/${encodeURIComponent(l)}`});return o&&/^https?:\/\//i.test(String(o))&&d.push({kind:"company",id:"company-website",labelKey:"lookupCompanyWebsite",href:String(o).trim()}),{market:r,links:d,code:c||null,cik:Qe(i)}}async function hn(e,{timeoutMs:t=18e3}={}){const s=[];for(const o of[`${ye}${e}`,e])try{const i=await Dt(o,{timeoutMs:t}),r=ua(i);if(r)return{ok:!0,data:r,via:o.startsWith(ye)?"jina":"direct"};s.push(`${o.startsWith(ye)?"jina":"direct"}: non-json`)}catch(i){s.push(`${o.startsWith(ye)?"jina":"direct"}: ${i.message||i}`)}return{ok:!1,data:null,via:null,error:s.slice(0,3).join(" · ")}}async function ar(){return ot||it||(it=(async()=>{const e=await hn(Fi,{timeoutMs:22e3}),t=new Map;if(e.ok&&e.data&&typeof e.data=="object")for(const s of Object.values(e.data)){const o=String((s==null?void 0:s.ticker)||"").toUpperCase(),i=Qe(s==null?void 0:s.cik_str);o&&i&&t.set(o,i)}return ot={map:t,via:e.via,ok:e.ok,error:e.error||null},ot})(),it)}async function sr(e){const t=String(e||"").toUpperCase().replace(/\./g,"-");if(!t)return{ok:!1,cik:null};const s=await ar(),o=s.map.get(t)||null;return{ok:!!o,cik:o,via:s.via,error:o?null:s.error||"cik_not_found"}}function nr(e,{limit:t=_i}={}){var r,l,c,d,p,u;const s=(r=e==null?void 0:e.filings)==null?void 0:r.recent;if(!s||!Array.isArray(s.form))return[];const o=Qe(e.cik),i=[];for(let g=0;g<s.form.length&&i.length<t;g++){const h=String(s.form[g]||"");if(!Wi.test(h))continue;const m=((l=s.accessionNumber)==null?void 0:l[g])||null,S=((c=s.primaryDocument)==null?void 0:c[g])||null,v=((d=s.filingDate)==null?void 0:d[g])||null,$=((p=s.primaryDocDescription)==null?void 0:p[g])||((u=s.items)==null?void 0:u[g])||h,C=tr(o,m,S);C&&i.push({form:h,filingDate:v,description:String($||h).slice(0,160),accessionNumber:m,href:C})}return i}async function or(e){var r,l;const t=Qe(e);if(!t)return{ok:!1,filings:[],companyName:null,investorWebsite:null,error:"no_cik"};const s=await hn(Ui(t),{timeoutMs:22e3});if(!s.ok)return{ok:!1,filings:[],companyName:null,investorWebsite:null,error:s.error};const o=nr(s.data),i=(r=s.data)!=null&&r.investorWebsite&&/^https?:\/\//i.test(s.data.investorWebsite)?s.data.investorWebsite:null;return{ok:!0,filings:o,companyName:((l=s.data)==null?void 0:l.name)||null,investorWebsite:i,via:s.via}}async function ir({market:e,symbol:t,display:s,website:o}={}){const i=gs({market:e,symbol:t,display:s,website:o,cik:null}),r={market:i.market,links:i.links,recent:[],cik:null,status:"links_only",noteKey:null,sources:[]};if(i.market==="TW")return r.status="links_ready",r.noteKey="lookupFilingsTwNote",r.sources.push("MOPS"),r;const l=String(t||"").toUpperCase();try{const c=await sr(l);if(c.ok){r.cik=c.cik,r.links=gs({market:"US",symbol:t,display:s,website:o,cik:c.cik}).links,c.via&&r.sources.push(`SEC ticker map (${c.via})`);const d=await or(c.cik);d.ok?(r.recent=d.filings,r.status=d.filings.length?"filings_ok":"filings_empty",r.noteKey=d.filings.length?null:"lookupFilingsListEmpty",d.via&&r.sources.push(`SEC submissions (${d.via})`),d.investorWebsite&&(r.links.some(u=>u.href===d.investorWebsite)||r.links.push({kind:"company",id:"sec-investor-site",labelKey:"lookupInvestorRelations",href:d.investorWebsite}))):(r.status="filings_unavailable",r.noteKey="lookupFilingsListUnavailable")}else r.status="cik_unavailable",r.noteKey="lookupFilingsCikUnavailable"}catch{r.status="filings_unavailable",r.noteKey="lookupFilingsListUnavailable"}return r}function rr({market:e,symbol:t,chart:s,search:o,summary:i,digest:r}){var u,g,h,m;const l=(i==null?void 0:i.currency)||(s==null?void 0:s.currency)||(e==="TW"?"TWD":"USD"),c=(i==null?void 0:i.name)||(s==null?void 0:s.longName)||(s==null?void 0:s.shortName)||(o==null?void 0:o.longName)||(o==null?void 0:o.shortName)||(r==null?void 0:r.name)||t,d=(i==null?void 0:i.business)||(r!=null&&r.whatItDoes?String(r.whatItDoes):null)||null;return{market:e,symbol:t,name:c,business:d,sector:(i==null?void 0:i.sector)||(o==null?void 0:o.sector)||null,industry:(i==null?void 0:i.industry)||(o==null?void 0:o.industry)||null,exchange:(s==null?void 0:s.exchange)||(o==null?void 0:o.exchange)||null,currency:l,price:(s==null?void 0:s.price)??null,change:(s==null?void 0:s.change)??null,changePct:(s==null?void 0:s.changePct)??null,previousClose:(s==null?void 0:s.previousClose)??null,volume:(s==null?void 0:s.volume)??null,dayHigh:(s==null?void 0:s.dayHigh)??null,dayLow:(s==null?void 0:s.dayLow)??null,fiftyTwoWeekHigh:(s==null?void 0:s.fiftyTwoWeekHigh)??null,fiftyTwoWeekLow:(s==null?void 0:s.fiftyTwoWeekLow)??null,marketTime:(s==null?void 0:s.marketTime)??null,pe:(i==null?void 0:i.pe)??(r==null?void 0:r.pe)??null,forwardPe:(i==null?void 0:i.forwardPe)??(r==null?void 0:r.forwardPe)??null,marketCap:(i==null?void 0:i.marketCap)??(r==null?void 0:r.marketCap)??null,epsTrailing:(i==null?void 0:i.epsTrailing)??null,revenue:(i==null?void 0:i.revenue)??null,revenueGrowth:(i==null?void 0:i.revenueGrowth)??(r==null?void 0:r.revenueYoYPct)??null,earningsGrowth:(i==null?void 0:i.earningsGrowth)??(r==null?void 0:r.epsYoYPct)??null,profitMargins:(i==null?void 0:i.profitMargins)??null,grossMargins:(i==null?void 0:i.grossMargins)??null,dividendYield:(i==null?void 0:i.dividendYield)??null,beta:(i==null?void 0:i.beta)??null,nextEarningsDate:(i==null?void 0:i.nextEarningsDate)??(r==null?void 0:r.nextEarningsDate)??null,nextEarningsEstimate:(i==null?void 0:i.nextEarningsEstimate)??(r==null?void 0:r.consensusEpsNext)??null,lastEpsActual:(i==null?void 0:i.lastEpsActual)??((u=r==null?void 0:r.lastReport)==null?void 0:u.epsActual)??null,lastEpsEstimate:(i==null?void 0:i.lastEpsEstimate)??((g=r==null?void 0:r.lastReport)==null?void 0:g.epsEstimate)??null,lastEpsSurprisePct:(i==null?void 0:i.lastEpsSurprisePct)??((h=r==null?void 0:r.lastReport)==null?void 0:h.epsSurprisePct)??null,lastEpsQuarter:(i==null?void 0:i.lastEpsQuarter)??((m=r==null?void 0:r.lastReport)==null?void 0:m.quarter)??null,website:(i==null?void 0:i.website)||null,sources:[],filings:null}}async function lr(e,t="US"){const s=Ji(e,t);if(!s.ok)return{ok:!1,error:s.error||"invalid",snapshot:null};await gn();const o=[s.symbol];s.alt&&o.push(s.alt);let i=null,r=s.symbol,l=null,c=null;for(const $ of o){const C=await ga(`/v8/finance/chart/${encodeURIComponent($)}?interval=1d&range=5d&includePrePost=false`);if(C.ok){if(i=Xi(C.data),(i==null?void 0:i.price)!=null||i!=null&&i.longName||i!=null&&i.shortName){r=$,l=C.via;break}i=null}else c=C.error}if(!i)return{ok:!1,error:"not_found",detail:c,snapshot:null,symbol:r,market:s.market};const d=encodeURIComponent(s.display||r),p=await ga(`/v1/finance/search?q=${d}&quotesCount=8&newsCount=0&listsCount=0`),u=p.ok?Yi(p.data,r):null,g=await Qi(r),h=er(r),m=rr({market:s.market,symbol:r,chart:i,search:u,summary:g.data,digest:h}),S=[];l&&S.push(`Yahoo chart (${l})`),p.ok&&S.push(`Yahoo search (${p.via})`),g.ok&&S.push(`Yahoo quoteSummary (${g.via})`),h&&S.push("site earnings-digest");const v=await ir({market:s.market,symbol:r,display:s.display,website:m.website});if(m.filings=v,Array.isArray(v==null?void 0:v.sources))for(const $ of v.sources)S.push($);return m.sources=S,{ok:!0,snapshot:m,market:s.market,symbol:r,partial:!g.ok}}function R(e,t){return t?`<div class="lk-metric">
    <div class="lk-ml">${a(e)}</div>
    <div class="lk-mv">${t}</div>
  </div>`:""}function B(e){return e==null||e===""?null:`<span class="lk-mono">${a(String(e))}</span>`}function cr(e){return e==="official"?`<span class="lk-src-badge lk-src-official">${a(n("lookupSourceOfficial"))}</span>`:e==="quote"?`<span class="lk-src-badge lk-src-quote">${a(n("lookupSourceQuote"))}</span>`:e==="company"?`<span class="lk-src-badge lk-src-company">${a(n("lookupSourceCompany"))}</span>`:""}function dr(e){if(!e||!Array.isArray(e.links)||!e.links.length)return"";const t=e.links.map(i=>{if(!(i!=null&&i.href))return"";const r=n(i.labelKey||"lookupOfficialFilings");return`<li class="lk-ofil-item">
        ${cr(i.kind)}
        <a class="lk-ofil-link" href="${a(i.href)}" target="_blank" rel="noopener noreferrer">${a(r)}</a>
      </li>`}).filter(Boolean).join("");let s="";if(e.market==="US")if(Array.isArray(e.recent)&&e.recent.length){const i=e.recent.map(r=>{const l=r.description||r.form||"";return`<tr>
            <td class="lk-ofil-form"><span class="lk-mono">${a(r.form||"")}</span></td>
            <td class="lk-ofil-date">${a(r.filingDate||"—")}</td>
            <td class="lk-ofil-title"><a href="${a(r.href)}" target="_blank" rel="noopener noreferrer">${a(l)}</a></td>
          </tr>`}).join("");s=`
        <h5 class="lk-h5">${a(n("lookupRecentFilings"))}</h5>
        <div class="lk-ofil-table-wrap">
          <table class="lk-ofil-table">
            <thead><tr>
              <th>${a(n("lookupFilingForm"))}</th>
              <th>${a(n("lookupFilingDate"))}</th>
              <th>${a(n("lookupFilingDoc"))}</th>
            </tr></thead>
            <tbody>${i}</tbody>
          </table>
        </div>`}else{const i=e.noteKey?n(e.noteKey):n("lookupFilingsListUnavailable");s=`<p class="lk-ofil-note">${a(i)}</p>
        <p class="lk-ofil-note">${a(n("lookupFilingsLinksStillWork"))}</p>`}else if(e.market==="TW"){const i=e.noteKey?n(e.noteKey):n("lookupFilingsTwNote");s=`<p class="lk-ofil-note">${a(i)}</p>`}const o=e.cik?`<p class="lk-ofil-meta">${a(n("lookupCikLabel"))}: <span class="lk-mono">${a(e.cik)}</span></p>`:"";return`
    <section class="lk-block lk-ofil" aria-label="${a(n("lookupOfficialFilings"))}">
      <h4 class="lk-h4">${a(n("lookupOfficialFilings"))}</h4>
      <p class="lk-ofil-lead">${a(n("lookupOfficialFilingsLead"))}</p>
      ${o}
      <ul class="lk-ofil-links">${t}</ul>
      ${s}
    </section>`}function hs(e,t){if(!(t!=null&&t.ok)||!t.snapshot){const c=(t==null?void 0:t.error)==="empty"?n("lookupEmptyInput"):(t==null?void 0:t.error)==="invalid"?n("lookupInvalid"):(t==null?void 0:t.error)==="not_found"?n("lookupNotFound"):n("lookupError",{msg:(t==null?void 0:t.detail)||(t==null?void 0:t.error)||"error"});e.innerHTML=`<div class="lk-empty" role="status">${a(c)}</div>`;return}const s=t.snapshot,o=Gi(s.changePct??s.change),i=s.market==="TW"?`<span class="lk-badge lk-badge-tw">${a(n("twStock"))}</span>`:`<span class="lk-badge lk-badge-us">${a(n("usStock"))}</span>`,r=s.business?`<p class="lk-biz">${a(s.business.length>520?`${s.business.slice(0,520)}…`:s.business)}</p>`:"",l=un(s.marketTime);e.innerHTML=`
    <article class="lk-card" data-symbol="${a(s.symbol)}">
      <header class="lk-card-head">
        <div>
          <div class="lk-sym-row">
            <span class="lk-symbol">${a(s.symbol)}</span>
            ${i}
          </div>
          <h3 class="lk-name">${a(s.name||"")}</h3>
          <p class="lk-meta-line">
            ${s.exchange?a(s.exchange):""}
            ${s.sector?` · ${a(s.sector)}`:""}
            ${s.industry?` · ${a(s.industry)}`:""}
          </p>
        </div>
        <div class="lk-quote ${o}">
          <div class="lk-price">${a(he(s.price,s.currency)||"—")}</div>
          <div class="lk-chg">
            <span>${a(he(s.change,s.currency)||"—")}</span>
            <span>${a(ge(s.changePct)||"—")}</span>
          </div>
          ${l?`<div class="lk-asof">${a(n("dataAsOf"))} ${a(l)}</div>`:""}
        </div>
      </header>

      <section class="lk-block" aria-label="${a(n("lookupBusiness"))}">
        <h4 class="lk-h4">${a(n("lookupBusiness"))}</h4>
        ${r||`<p class="lk-muted">${a(n("earningsDataMissing"))}</p>`}
      </section>

      <section class="lk-block" aria-label="${a(n("lookupQuoteStats"))}">
        <h4 class="lk-h4">${a(n("lookupQuoteStats"))}</h4>
        <div class="lk-metrics">
          ${R(n("lookupPrevClose"),B(he(s.previousClose,s.currency)))}
          ${R(n("lookupVolume"),B(Vi(s.volume)))}
          ${R(n("lookupDayRange"),s.dayLow!=null&&s.dayHigh!=null?B(`${he(s.dayLow,s.currency)} – ${he(s.dayHigh,s.currency)}`):null)}
          ${R(n("lookup52w"),s.fiftyTwoWeekLow!=null&&s.fiftyTwoWeekHigh!=null?B(`${he(s.fiftyTwoWeekLow,s.currency)} – ${he(s.fiftyTwoWeekHigh,s.currency)}`):null)}
          ${R(n("lookupMarketCap"),B(us(s.marketCap,s.currency)))}
          ${R(n("earningsPe"),B(V(s.pe,1)))}
          ${R(n("earningsForwardPe"),B(V(s.forwardPe,1)))}
          ${R(n("lookupEps"),B(V(s.epsTrailing,2)))}
          ${R(n("lookupBeta"),B(V(s.beta,2)))}
          ${R(n("lookupDivYield"),B(ge(s.dividendYield,2)))}
        </div>
      </section>

      <section class="lk-block" aria-label="${a(n("lookupFinancials"))}">
        <h4 class="lk-h4">${a(n("lookupFinancials"))}</h4>
        <div class="lk-metrics">
          ${R(n("lookupRevenue"),B(us(s.revenue,s.currency)))}
          ${R(n("earningsRevYoy"),B(ge(s.revenueGrowth,1)))}
          ${R(n("earningsEpsYoy"),B(ge(s.earningsGrowth,1)))}
          ${R(n("lookupGrossMargin"),B(ge(s.grossMargins,1)))}
          ${R(n("lookupProfitMargin"),B(ge(s.profitMargins,1)))}
        </div>
      </section>

      <section class="lk-block" aria-label="${a(n("lookupEarnings"))}">
        <h4 class="lk-h4">${a(n("lookupEarnings"))}</h4>
        <div class="lk-metrics">
          ${R(n("earningsNextDate"),B(s.nextEarningsDate))}
          ${R(n("lookupEpsConsensus"),B(V(s.nextEarningsEstimate,2)))}
          ${R(n("earningsLastEps"),s.lastEpsActual!=null?B(`${V(s.lastEpsActual,2)}${s.lastEpsQuarter?` · ${s.lastEpsQuarter}`:""}`):null)}
          ${R(n("lookupEpsSurprise"),B(ge(s.lastEpsSurprisePct,1)))}
        </div>
      </section>

      ${dr(s.filings)}

      <p class="lk-sources">${a(n("lookupSources"))}: ${a((s.sources||[]).join(" · ")||"Yahoo Finance")}</p>
      ${t.partial?`<p class="lk-partial">${a(n("lookupPartial"))}</p>`:""}
      <p class="lk-disclaimer" role="note">${a(n("lookupDisclaimer"))}</p>
    </article>`}function pr(){return`
    <section class="section lookup-section" aria-label="${a(n("lookupTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(n("lookupTitle"))}</h2>
        <p class="view-lead">${a(n("lookupLead"))}</p>
      </header>
      <p class="lk-disclaimer lk-disclaimer-top" role="note">${a(n("lookupDisclaimer"))}</p>
      <div class="lk-market-tabs" role="tablist" aria-label="${a(n("market"))}">
        <button type="button" class="lk-tab is-active" data-lk-market="US" role="tab" aria-selected="true">${a(n("usStock"))}</button>
        <button type="button" class="lk-tab" data-lk-market="TW" role="tab" aria-selected="false">${a(n("twStock"))}</button>
      </div>
      <form class="lk-form" data-lk-form>
        <label class="lk-label" for="lk-input">${a(n("lookupInputLabel"))}</label>
        <div class="lk-row">
          <input id="lk-input" class="lk-input" name="symbol" type="text" autocomplete="off" spellcheck="false"
            placeholder="${a(n("lookupPlaceholderUs"))}" data-lk-input />
          <button type="submit" class="lk-submit">${a(n("lookupSearch"))}</button>
        </div>
        <p class="lk-hint" data-lk-hint>${a(n("lookupHintUs"))}</p>
      </form>
      <div id="lk-root" class="lk-root" aria-live="polite">
        <p class="lk-muted">${a(n("lookupIdle"))}</p>
      </div>
    </section>`}function ur(e="#lk-root"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};const s=t.closest(".lookup-section")||t.parentElement;if(!s||s.dataset.lkBound==="1")return{ok:!0,root:t};s.dataset.lkBound="1";const o=s.querySelector("[data-lk-form]"),i=s.querySelector("[data-lk-input]"),r=s.querySelector("[data-lk-hint]"),l=s.querySelectorAll("[data-lk-market]");let c="US";const d=u=>{c=u==="TW"?"TW":"US",l.forEach(g=>{const h=g.dataset.lkMarket===c;g.classList.toggle("is-active",h),g.setAttribute("aria-selected",h?"true":"false")}),i&&(i.placeholder=n(c==="TW"?"lookupPlaceholderTw":"lookupPlaceholderUs")),r&&(r.textContent=n(c==="TW"?"lookupHintTw":"lookupHintUs"))};l.forEach(u=>{u.addEventListener("click",()=>d(u.dataset.lkMarket))});const p=async()=>{const u=(i==null?void 0:i.value)||"";t.innerHTML=`<p class="lk-loading">${a(n("lookupLoading"))}</p>`;try{const g=await lr(u,c);hs(t,g)}catch(g){hs(t,{ok:!1,error:"error",detail:(g==null?void 0:g.message)||String(g)})}};o==null||o.addEventListener("submit",u=>{u.preventDefault(),p()});try{const u=String(location.hash||""),g=u.match(/[?&]q=([^&]+)/i)||u.match(/#(?:lookup|quote)\/([A-Za-z0-9.\-]+)/i);if(g){const h=decodeURIComponent(g[1]);/^\d{4}/.test(h)||/\.TW/i.test(h)?d("TW"):d("US"),i&&(i.value=h),p()}}catch{}return gn(),{ok:!0,root:t,run:p}}const gr="./data/soxl-desk.json";function hr(e){try{return new Date(e).toLocaleString(E(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+n("taipei")}catch{return e||"—"}}function Ue(e,t=2){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(E(),{minimumFractionDigits:t,maximumFractionDigits:t})}function sa(e,t=2){return e==null||Number.isNaN(e)?null:`${e>0?"+":""}${Number(e).toFixed(t)}%`}function ms(e,t=2){return e==null||Number.isNaN(e)?null:`${e>0?"+":(e<0,"")}${Ue(e,t)}`}function rt(e){return e==null||Number.isNaN(e)||e===0?"sx-flat":e>0?"sx-up":"sx-down"}function mr(e,t){const s=(t==null?void 0:t.quote)||{},o=s.change,i=s.changePct,r=rt(i??o),l=s.regularClose,c=`
    <section class="sx-hero" aria-label="${a(n("soxlHeroLabel"))}">
      <div class="sx-hero-main">
        <div class="sx-symbol-row">
          <span class="sx-symbol">SOXL</span>
          <span class="sx-badge">3×</span>
          <span class="sx-fund">${a((t==null?void 0:t.fundName)||n("soxlFundFallback"))}</span>
        </div>
        <div class="sx-price-row ${r}" data-lq="soxl" data-lq-sym="SOXL">
          <span class="sx-price" data-lq-field="price">$${a(Ue(s.price,2)||"—")}</span>
          <span class="sx-chg">${a(ms(o,2)||"—")}</span>
          <span class="sx-chgp" data-lq-field="dayPct">${a(sa(i,2)||"—")}</span>
        </div>
        <p class="sx-session">${a(s.session||"")} · ${a(n("dataAsOf"))} ${a(hr(t==null?void 0:t.asOf))}</p>
        ${(l==null?void 0:l.price)!=null?`<p class="sx-regular">${a(n("soxlRegularClose"))}: $${a(Ue(l.price,2))}
                <span class="${rt(l.changePct)}">${a(ms(l.change,2)||"")} (${a(sa(l.changePct,2)||"")})</span>
                ${l.session?` · ${a(l.session)}`:""}</p>`:""}
      </div>
      <div class="sx-hero-side">
        <p class="sx-lev">${a(n("soxlLeverageNote"))}</p>
        <p class="sx-hold-date"><strong>${a(n("soxlHoldingsAsOf"))}</strong> ${a((t==null?void 0:t.holdingsAsOf)||"—")}
          <span class="sx-muted">（${a(n("soxlHoldingsNotSameDay"))}）</span></p>
      </div>
    </section>`,d=Array.isArray(t==null?void 0:t.events)?t.events:[],p=d.length?`<section class="sx-events" aria-label="${a(n("soxlEventsTitle"))}">
        <h3 class="sx-h3">${a(n("soxlEventsTitle"))}</h3>
        <ul class="sx-event-list">
          ${d.map(x=>`<li class="sx-event sx-sev-${a(x.severity||"info")}">
              <div class="sx-event-title">${a(x.title||"")}</div>
              <p class="sx-event-detail">${a(x.detail||"")}</p>
            </li>`).join("")}
        </ul>
      </section>`:"",u=Array.isArray(t==null?void 0:t.news)?t.news:[],g=`
    <section class="sx-news" aria-label="${a(n("soxlNewsTitle"))}">
      <h3 class="sx-h3">${a(n("soxlNewsTitle"))}</h3>
      <div class="sx-news-list">
        ${u.length?u.map(x=>`<a class="sx-news-card" href="${a(x.url||"#")}" target="_blank" rel="noopener noreferrer">
              <div class="sx-news-title">${a(x.title||"")}</div>
              ${x.published?`<div class="sx-news-meta">${a(x.published)}</div>`:""}
              ${x.summary?`<p class="sx-news-sum">${a(x.summary)}</p>`:""}
            </a>`).join(""):`<p class="sx-empty">${a(n("soxlNewsEmpty"))}</p>`}
      </div>
    </section>`,m=(Array.isArray(t==null?void 0:t.holdings)?t.holdings:[]).map(x=>{const P=x.ticker||x.instrumentType||"—",b=rt(x.changePct),y=rt(x.contributionPct),w=Array.isArray(x.reasons)?x.reasons:[],A=Array.isArray(x.sources)?x.sources:[];return`<tr>
        <td>
          <div class="sx-tk">${a(String(P))}</div>
          <div class="sx-name">${a(x.name||"")}</div>
          ${x.instrumentType?`<span class="sx-itype">${a(x.instrumentType)}</span>`:""}
        </td>
        <td class="sx-num">${x.weightPct!=null?a(Ue(x.weightPct,2))+"%":"—"}</td>
        <td class="sx-num ${b}">${x.changePct!=null?a(sa(x.changePct,2)):"—"}</td>
        <td class="sx-num ${y}" title="${a(x.contributionNote||n("soxlContributionHint"))}">
          ${x.contributionPct!=null?a(Ue(x.contributionPct,3))+" pp*":"—"}
        </td>
        <td class="sx-reasons">
          <ul>${w.map(D=>`<li>${a(D)}</li>`).join("")}</ul>
          ${A.length?`<div class="sx-srcs">${A.slice(0,3).map((D,I)=>`<a href="${a(D)}" target="_blank" rel="noopener noreferrer">${a(n("soxlSourceN",{n:String(I+1)}))}</a>`).join(" · ")}</div>`:""}
        </td>
      </tr>`}).join(""),S=`
    <section class="sx-holdings" aria-label="${a(n("soxlHoldingsTitle"))}">
      <h3 class="sx-h3">${a(n("soxlHoldingsTitle"))}</h3>
      <p class="sx-panel-lead">${a((t==null?void 0:t.holdingsFreshnessNote)||n("soxlHoldingsLead"))}</p>
      <p class="sx-panel-lead sx-muted">${a((t==null?void 0:t.leverageNote)||n("soxlContributionHint"))}</p>
      <div class="sx-table-wrap">
        <table class="sx-table">
          <thead>
            <tr>
              <th>${a(n("soxlColName"))}</th>
              <th>${a(n("soxlColWeight"))}</th>
              <th>${a(n("soxlColReturn"))}</th>
              <th>${a(n("soxlColContrib"))}</th>
              <th>${a(n("soxlColReasons"))}</th>
            </tr>
          </thead>
          <tbody>${m||`<tr><td colspan="5">${a(n("soxlHoldingsEmpty"))}</td></tr>`}</tbody>
        </table>
      </div>
      <p class="sx-footnote">* ${a(n("soxlContributionHint"))}</p>
    </section>`,v=Array.isArray(t==null?void 0:t.overallUpReasons)?t.overallUpReasons:[],$=Array.isArray(t==null?void 0:t.overallDownReasons)?t.overallDownReasons:[],C=`
    <section class="sx-overall" aria-label="${a(n("soxlOverallTitle"))}">
      <h3 class="sx-h3">${a(n("soxlOverallTitle"))}</h3>
      <div class="sx-overall-grid">
        <article class="sx-card sx-card-up">
          <h4>${a(n("soxlWhyUp"))}</h4>
          <ul>${v.map(x=>`<li>${a(x)}</li>`).join("")||`<li>${a(n("earningsDataMissing"))}</li>`}</ul>
        </article>
        <article class="sx-card sx-card-down">
          <h4>${a(n("soxlWhyDown"))}</h4>
          <ul>${$.map(x=>`<li>${a(x)}</li>`).join("")||`<li>${a(n("earningsDataMissing"))}</li>`}</ul>
        </article>
      </div>
    </section>`,L=Array.isArray(t==null?void 0:t.disclaimers)?t.disclaimers:[],_=L.length?`<ul class="sx-disc-list">${L.map(x=>`<li>${a(x)}</li>`).join("")}</ul>`:`<p>${a(n("soxlDisclaimer"))}</p>`;e.innerHTML=`
    ${c}
    ${p}
    ${g}
    ${S}
    ${C}
    <div class="sx-disclaimer" role="note">${_}</div>
  `}function fr(){return`
    <section class="section soxl-section" aria-label="${a(n("soxlTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(n("soxlTitle"))}</h2>
        <p class="view-lead">${a(n("soxlLead"))}</p>
      </header>
      <p class="sx-disclaimer sx-disclaimer-top" role="note">${a(n("soxlDisclaimer"))}</p>
      <div id="sx-root" class="sx-root">
        <p class="sx-loading">${a(n("loading"))}</p>
      </div>
    </section>`}async function yr(e="#sx-root"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};try{const s=await fetch(gr);if(!s.ok)throw new Error(`HTTP ${s.status}`);const o=await s.json();return mr(t,o),{ok:!0,data:o}}catch(s){return t.innerHTML=`
      <div class="sx-empty" role="status">
        <p>${a(n("soxlLoadError",{msg:s.message||String(s)}))}</p>
      </div>`,{ok:!1,error:s}}}const vr="./data/txf-desk.json";function br(e){try{return new Date(e).toLocaleString(E(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+n("taipei")}catch{return e||"—"}}function re(e,t=2){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(E(),{minimumFractionDigits:t,maximumFractionDigits:t})}function X(e){return e==null||Number.isNaN(e)?null:Number(e).toLocaleString(E(),{maximumFractionDigits:0})}function St(e,t=2){return e==null||Number.isNaN(e)?null:`${e>0?"+":""}${Number(e).toFixed(t)}%`}function ma(e,t=2){return e==null||Number.isNaN(e)?null:`${e>0?"+":""}${re(e,t)}`}function pe(e){return e==null||Number.isNaN(e)||e===0?"txf-flat":e>0?"txf-up":"txf-down"}function zt(e){if(!e)return"—";const t=String(e);return/^\d{6}$/.test(t)?`${t.slice(0,4)}/${t.slice(4,6)}`:t}function Sr(e){var d;const t=(d=e==null?void 0:e.contracts)==null?void 0:d.TX,s=(t==null?void 0:t.near)||{},o=(e==null?void 0:e.spot)||{},i=(e==null?void 0:e.basis)||{},r=s.change,l=s.changePct,c=pe(l??r);return`
    <section class="txf-hero" aria-label="${a(n("txfHeroLabel"))}">
      <div class="txf-hero-main">
        <div class="txf-symbol-row">
          <span class="txf-symbol">TX</span>
          <span class="txf-badge">${a(n("txfNearBadge"))}</span>
          <span class="txf-fund">${a((t==null?void 0:t.nameZh)||n("txfTitle"))} · ${a(zt(s.month))}</span>
        </div>
        <div class="txf-price-row ${c}">
          <span class="txf-price">${a(re(s.last,0)||"—")}</span>
          <span class="txf-chg">${a(ma(r,0)||"—")}</span>
          <span class="txf-chgp">${a(St(l,2)||"—")}</span>
        </div>
        <p class="txf-session">${a(n("txfSettle"))}: ${a(re(s.settle,0)||"—")}
          · ${a(n("txfVolume"))}: ${a(X(s.volume)||"—")}
          · ${a(n("txfOI"))}: ${a(X(s.openInterest)||"—")}
        </p>
        <p class="txf-session">${a(n("dataAsOf"))} ${a(br(e==null?void 0:e.asOf))}
          · ${a(n("txfSessionDate"))}: ${a((e==null?void 0:e.sessionDate)||"—")}</p>
      </div>
      <div class="txf-hero-side">
        <div class="txf-side-row" data-lq-key="tw" data-lq-sym="^TWII">
          <span class="txf-side-label">${a(n("txfSpotLabel"))}</span>
          <span class="txf-side-val ${pe(o.changePct)}" data-lq-field="value">${a(re(o.last,2)||"—")}</span>
          <span class="txf-side-chg ${pe(o.changePct)}">${a(St(o.changePct,2)||"—")}</span>
        </div>
        <div class="txf-side-row">
          <span class="txf-side-label">${a(n("txfBasisLabel"))}</span>
          <span class="txf-side-val ${pe(i.basisPoints)}">${a(ma(i.basisPoints,1)||"—")}</span>
          <span class="txf-side-chg ${pe(i.basisPct)}">${a(St(i.basisPct,3)||"—")}</span>
        </div>
        <p class="txf-side-note">${a(i.noteZh||n("txfBasisHint"))}</p>
        <p class="txf-side-note">${a(n("txfMultiplierShort",{n:String((t==null?void 0:t.multiplierTwdPerPoint)??200)}))}</p>
      </div>
    </section>`}function kr(e){const t=[];return e!=null&&e.near&&t.push({tag:n("txfNearBadge"),c:e.near}),e!=null&&e.next&&t.push({tag:n("txfNextBadge"),c:e.next}),t.map(({tag:s,c:o})=>{const i=pe(o.changePct??o.change);return`<tr>
        <td><span class="txf-pill">${a(s)}</span> ${a(zt(o.month))}</td>
        <td class="txf-num ${i}">${a(re(o.last,0)||"—")}</td>
        <td class="txf-num">${a(re(o.settle,0)||"—")}</td>
        <td class="txf-num ${i}">${a(ma(o.change,0)||"—")} (${a(St(o.changePct,2)||"—")})</td>
        <td class="txf-num">${a(X(o.volume)||"—")}</td>
        <td class="txf-num">${a(X(o.openInterest)||"—")}</td>
        <td class="txf-num">${a(o.lastTradingDay||"—")}</td>
      </tr>`}).join("")}function $r(e){var o,i,r;const s=[["TX",(o=e==null?void 0:e.contracts)==null?void 0:o.TX],["MTX",(i=e==null?void 0:e.contracts)==null?void 0:i.MTX],["TMF",(r=e==null?void 0:e.contracts)==null?void 0:r.TMF]].filter(([,l])=>l==null?void 0:l.near).map(([l,c])=>{const d=c.margin||{};return`
      <article class="txf-contract-card">
        <header class="txf-contract-head">
          <h4>${a(l)} · ${a(c.nameZh||"")}</h4>
          <p class="txf-muted">${a(n("txfMultLabel"))}: NT$${a(X(c.multiplierTwdPerPoint)||"—")}${a(n("txfPerPoint"))}
            · ${a(n("txfMarginInitial"))}: NT$${a(X(d.initial)||"—")}
            · ${a(n("txfMarginMaint"))}: NT$${a(X(d.maintenance)||"—")}</p>
        </header>
        <div class="txf-table-wrap">
          <table class="txf-table">
            <thead>
              <tr>
                <th>${a(n("txfColMonth"))}</th>
                <th>${a(n("txfColLast"))}</th>
                <th>${a(n("txfColSettle"))}</th>
                <th>${a(n("txfColChange"))}</th>
                <th>${a(n("txfColVolume"))}</th>
                <th>${a(n("txfColOI"))}</th>
                <th>${a(n("txfColLTD"))}</th>
              </tr>
            </thead>
            <tbody>${kr(c)}</tbody>
          </table>
        </div>
      </article>`}).join("");return`
    <section class="txf-panel" aria-label="${a(n("txfContractsTitle"))}">
      <h3 class="txf-h3">${a(n("txfContractsTitle"))}</h3>
      <p class="txf-panel-lead">${a(n("txfContractsLead"))}</p>
      ${s}
    </section>`}function Tr(e){const t=e==null?void 0:e.institutional;if(!(t!=null&&t.byContract))return"";const s=["TX","MTX","TMF"].filter(i=>(t.byContract[i]||[]).length);if(!s.length)return"";const o=s.map(i=>{const r=(t.byContract[i]||[]).map(l=>{const c=l.openInterestNet;return`<tr>
            <td>${a(l.partyZh||"—")}</td>
            <td class="txf-num">${a(X(l.openInterestLong)||"—")}</td>
            <td class="txf-num">${a(X(l.openInterestShort)||"—")}</td>
            <td class="txf-num ${pe(c)}">${a(X(c)||"—")}</td>
            <td class="txf-num ${pe(l.tradingVolumeNet)}">${a(X(l.tradingVolumeNet)||"—")}</td>
          </tr>`}).join("");return`
        <article class="txf-inst-card">
          <h4>${a(i)}</h4>
          <div class="txf-table-wrap">
            <table class="txf-table">
              <thead>
                <tr>
                  <th>${a(n("txfColParty"))}</th>
                  <th>${a(n("txfColLongOI"))}</th>
                  <th>${a(n("txfColShortOI"))}</th>
                  <th>${a(n("txfColNetOI"))}</th>
                  <th>${a(n("txfColNetVol"))}</th>
                </tr>
              </thead>
              <tbody>${r}</tbody>
            </table>
          </div>
        </article>`}).join("");return`
    <section class="txf-panel" aria-label="${a(n("txfInstTitle"))}">
      <h3 class="txf-h3">${a(n("txfInstTitle"))}</h3>
      <p class="txf-panel-lead">${a(n("txfInstLead",{date:t.asOf||"—"}))}</p>
      <div class="txf-inst-grid">${o}</div>
      <p class="txf-footnote">${a(n("txfInstFoot"))}</p>
    </section>`}function wr(e){const t=(e==null?void 0:e.calendar)||{},s=t.recentSettlement,o=e==null?void 0:e.putCallRatio;return`
    <section class="txf-panel" aria-label="${a(n("txfCalendarTitle"))}">
      <h3 class="txf-h3">${a(n("txfCalendarTitle"))}</h3>
      <div class="txf-cal-grid">
        <article class="txf-cal-card">
          <h4>${a(n("txfNextLTD"))}</h4>
          <p class="txf-cal-big">${a(t.nextNearLastTradingDay||"—")}</p>
          <p class="txf-muted">${a(n("txfNearMonth"))}: ${a(zt(t.nextNearMonth))}
            · ${a(n("txfNextMonth"))}: ${a(zt(t.nextNextMonth))}（${a(t.nextNextLastTradingDay||"—")}）</p>
          <p class="txf-muted">${a(t.ruleZh||n("txfLTDRule"))}</p>
        </article>
        <article class="txf-cal-card">
          <h4>${a(n("txfRecentSettle"))}</h4>
          <p class="txf-cal-big">${a(s?re(s.finalSettlementPrice,0):"—")}</p>
          <p class="txf-muted">${a((s==null?void 0:s.finalSettlementDay)||"—")} · ${a((s==null?void 0:s.deliveryMonth)||"")}</p>
          <p class="txf-muted">${a((s==null?void 0:s.contractName)||"")}</p>
        </article>
        ${o?`<article class="txf-cal-card">
          <h4>${a(n("txfPcrTitle"))}</h4>
          <p class="txf-cal-big">${a(re(o.putCallVolumeRatioPct,2)||"—")}%</p>
          <p class="txf-muted">${a(n("txfPcrVol"))}: P ${a(X(o.putVolume)||"—")} / C ${a(X(o.callVolume)||"—")}</p>
          <p class="txf-muted">${a(n("txfPcrOI"))}: ${a(re(o.putCallOIRatioPct,2)||"—")}% · ${a(n("dataAsOf"))} ${a(o.asOf||"—")}</p>
        </article>`:""}
      </div>
    </section>`}function xr(){return`
    <section class="txf-panel" aria-label="${a(n("txfExplainTitle"))}">
      <h3 class="txf-h3">${a(n("txfExplainTitle"))}</h3>
      <ul class="txf-explain">
        <li>${a(n("txfExplain1"))}</li>
        <li>${a(n("txfExplain2"))}</li>
        <li>${a(n("txfExplain3"))}</li>
        <li>${a(n("txfExplain4"))}</li>
      </ul>
    </section>`}function Pr(e){const t=Array.isArray(e==null?void 0:e.sourcesDetail)?e.sourcesDetail:[];return t.length?`
    <section class="txf-panel txf-sources" aria-label="${a(n("txfSourcesTitle"))}">
      <h3 class="txf-h3">${a(n("txfSourcesTitle"))}</h3>
      <ul class="txf-src-list">
        ${t.map(s=>`<li><a href="${a(s.url)}" target="_blank" rel="noopener noreferrer">${a(s.label||s.url)}</a></li>`).join("")}
      </ul>
    </section>`:""}function Cr(e,t){const s=Array.isArray(t==null?void 0:t.disclaimers)?t.disclaimers:[],o=s.length?`<ul class="txf-disc-list">${s.map(i=>`<li>${a(i)}</li>`).join("")}</ul>`:`<p>${a(n("txfDisclaimer"))}</p>`;e.innerHTML=`
    ${Sr(t)}
    ${$r(t)}
    ${Tr(t)}
    ${wr(t)}
    ${xr()}
    ${Pr(t)}
    <div class="txf-disclaimer" role="note">${o}</div>
  `}function Lr(){return`
    <section class="section txf-section" aria-label="${a(n("txfTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(n("txfTitle"))}</h2>
        <p class="view-lead">${a(n("txfLead"))}</p>
      </header>
      <p class="txf-disclaimer txf-disclaimer-top" role="note">${a(n("txfDisclaimer"))}</p>
      <div id="txf-root" class="txf-root">
        <p class="txf-loading">${a(n("loading"))}</p>
      </div>
    </section>`}async function Ar(e="#txf-root"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};try{const s=await fetch(vr);if(!s.ok)throw new Error(`HTTP ${s.status}`);const o=await s.json();return Cr(t,o),{ok:!0,data:o}}catch(s){return t.innerHTML=`
      <div class="txf-empty" role="status">
        <p>${a(n("txfLoadError",{msg:s.message||String(s)}))}</p>
      </div>`,{ok:!1,error:s}}}const Mr=["https://query2.finance.yahoo.com","https://query1.finance.yahoo.com"],Er="https://r.jina.ai/",Dr="https://mis.twse.com.tw/stock/api/getStockInfo.jsp?json=1&delay=0&ex_ch=",zr={tw:"^TWII",spx:"^GSPC",nasdaq:"^IXIC",sox:"^SOX",usdTwd:"USDTWD=X"},jr={tw:"tse_t00.tw",otc:"otc_o00.tw"},Nr=14,Rr=2e4,mn=5*6e4;let kt=null,fs=!1,fa=new Map,be=null,Ze=!1,Kt=!1,z=null;function ys(e){if(!e)return null;const t=String(e).trim();if(t.startsWith("{")||t.startsWith("["))try{return JSON.parse(t)}catch{}const s=t.match(/Markdown Content:\s*(\{[\s\S]*|\[[\s\S]*)/i),o=s?s[1].trim():t,i=o.search(/[\{\[]/);if(i<0)return null;const r=o.slice(i);for(let l=r.length;l>2;l--){try{return JSON.parse(r.slice(0,l))}catch{}const c=Math.max(r.lastIndexOf("}",l-2),r.lastIndexOf("]",l-2));if(c<8)break;l=c+2}return null}async function vs(e,{timeoutMs:t=14e3}={}){const s=typeof AbortController<"u"?new AbortController:null,o=s?setTimeout(()=>s.abort(),t):null;try{const i=await fetch(e,{signal:s==null?void 0:s.signal,headers:{Accept:"application/json,text/plain,*/*"},cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return await i.text()}finally{o&&clearTimeout(o)}}async function fn(e){const t=[];try{const s=await vs(e,{timeoutMs:1e4}),o=ys(s);if(o)return{ok:!0,data:o,via:"direct"};t.push("direct: non-json")}catch(s){t.push(`direct: ${s.message||s}`)}try{const s=await vs(`${Er}${e}`,{timeoutMs:2e4}),o=ys(s);if(o)return{ok:!0,data:o,via:"jina"};t.push("jina: parse")}catch(s){t.push(`jina: ${s.message||s}`)}return{ok:!1,data:null,via:null,error:t.slice(0,3).join(" · ")}}function Br(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Or(e,t){const s=[];for(let o=0;o<e.length;o+=t)s.push(e.slice(o,o+t));return s}function ve(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function ue(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString(E(),{minimumFractionDigits:t,maximumFractionDigits:t})}function ke(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${Number(e).toFixed(t)}%`}function bs(e,t){if(e==null||Number.isNaN(e))return"—";const s=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"$":t==="TWD"?"NT$":""}${ue(e,s)}`}function _e(e,t){return e==null||Number.isNaN(e)?"—":`${t==="USD"?"US$":t==="TWD"?"NT$":""}${ue(e,t==="TWD"?0:2)}`}function qr(e,t){if(e==null||Number.isNaN(e))return"—";const s=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"US$":t==="TWD"?"NT$":""}${ue(e,s)}`}function yn(e=new Date){const t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",weekday:"short",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(e),s=o=>{var i;return(i=t.find(r=>r.type===o))==null?void 0:i.value};return{ymd:`${s("year")}-${s("month")}-${s("day")}`,weekday:s("weekday"),hour:Number(s("hour")),minute:Number(s("minute"))}}function Ir(e=yn()){return!["Sat","Sun"].includes(e.weekday)}function Hr(e=new Date){const t=yn(e),s=t.hour*60+t.minute,o=Ir(t),i=o&&s>=540&&s<=815,r=o&&(s>=1260||s<=315),l=t.weekday==="Sat"&&s<=315,c=t.weekday==="Sun"&&s>=1260;return{twOpen:i,usOpen:r||l||c,weekday:o,parts:t}}function Fr(){const{twOpen:e,usOpen:t}=Hr();return e||t?Rr:mn}function Ur(e){try{return new Date(e).toLocaleString(E(),{timeZone:"Asia/Taipei",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+n("taipei")}catch{return"—"}}function vn(e){const t=String(e||"").trim().toUpperCase();return t?/^\d{4}\.(TW|TWO)$/.test(t)?t:/^\d{4}$/.test(t)?`${t}.TW`:t.replace(/\./g,"-"):null}function Wr(e){const t=String(e||"").toUpperCase(),s=t.match(/^(\d{4})\.(TW|TWO)$/)||t.match(/^(\d{4})$/);if(!s)return null;const o=s[1];return/\.TWO$/.test(t)?`otc_${o}.tw`:`tse_${o}.tw`}function _r(e,t){!e||(t==null?void 0:t.price)==null||Number.isNaN(t.price)||fa.set(e,{...t,asOfMs:t.asOfMs||Date.now()})}function Vr(e){var o,i;const t=(o=e==null?void 0:e.spark)==null?void 0:o.result;if(!Array.isArray(t))return[];const s=[];for(const r of t){const l=r==null?void 0:r.symbol,c=((i=((r==null?void 0:r.response)||[{}])[0])==null?void 0:i.meta)||{},d=c.regularMarketPrice;if(d==null||Number.isNaN(Number(d)))continue;const p=c.chartPreviousClose??c.previousClose??null;let u=null,g=null;p!=null&&p!==0&&(g=Number(d)-Number(p),u=g/Number(p)*100);const h=typeof c.regularMarketTime=="number"?c.regularMarketTime*(c.regularMarketTime<1e12?1e3:1):Date.now();s.push({symbol:l,price:Number(d),prev:p!=null?Number(p):null,change:g,changePct:u,currency:c.currency||null,asOfMs:h,source:"yahoo-spark"})}return s}async function Gr(e){const t=[...new Set(e.filter(Boolean))];if(!t.length)return{ok:!0,quotes:[],via:null};const s=[];let o=null,i=!1,r=null;for(const l of Or(t,Nr)){const c=`/v7/finance/spark?symbols=${encodeURIComponent(l.join(","))}&range=1d&interval=5m`;let d=null;for(const p of Mr){const u=await fn(`${p}${c}`);if(u.ok){d=u;break}r=u.error}d!=null&&d.ok&&(i=!0,o=d.via,s.push(...Vr(d.data)))}return{ok:i,quotes:s,via:o,error:i?null:r}}function Re(e){if(e==null||e===""||e==="-"||e==="—"||e==="null")return null;const t=Number(String(e).replace(/,/g,""));return Number.isFinite(t)?t:null}function Jr(e){const t=e==null?void 0:e.msgArray;if(!Array.isArray(t))return[];const s=[];for(const o of t){const i=o==null?void 0:o.c;if(!i)continue;const r=Re(o.z)??Re(o.pz)??Re(o.o),l=Re(o.y);if(r==null)continue;let c=null,d=null;l!=null&&l!==0&&(d=r-l,c=d/l*100);const p=o.ex==="otc"?"otc":"tse";let u;i==="t00"?u="__MIS_TWII":i==="o00"?u="__MIS_OTC":u=`${i}.${p==="otc"?"TWO":"TW"}`;const g=Re(o.tlong);s.push({symbol:u,price:r,prev:l,change:d,changePct:c,currency:"TWD",asOfMs:g||Date.now(),source:"twse-mis",misCode:i,misEx:p})}return s}async function Xr(e){const t=[...new Set(e.filter(Boolean))];if(!t.length)return{ok:!0,quotes:[],via:null};const s=`${Dr}${t.join("|")}`,o=await fn(s);return o.ok?{ok:!0,quotes:Jr(o.data),via:o.via}:{ok:!1,quotes:[],via:null,error:o.error}}function Yr(e){const t=new Set(Object.values(zr));t.add("SOXL");const s=new Set(Object.values(jr));return e.querySelectorAll("[data-lq-sym]").forEach(o=>{const i=o.getAttribute("data-lq-sym"),r=vn(i);r&&t.add(r);const l=Wr(i);l&&s.add(l)}),{yahoo:[...t],mis:[...s]}}function jt(e,t){if(!e)return;e.classList.remove("up","down","flat","lk-up","lk-down","lk-flat","sx-up","sx-down","sx-flat");const s=ve(t);e.classList.add(s)}function Kr(e){e&&(e.classList.remove("lq-flash"),e.offsetWidth,e.classList.add("lq-flash"),window.setTimeout(()=>{e.classList.remove("lq-flash")},700))}function N(e,t,{flash:s=!1}={}){e&&e.textContent!==t&&(e.textContent=t,s&&Kr(e))}function Qr(e=Date.now()){try{return new Date(e).toLocaleTimeString("en-GB",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}catch{return"—"}}function Pe(e,t,s,o){const i=e.querySelectorAll(`[data-lq-key="${t}"]`);if(!i.length||!s||s.price==null)return;const r=t==="usdTwd"?3:2;i.forEach(l=>{l.classList.remove("incomplete");const c=l.querySelector("[data-lq-field='value'], .value");N(c,ue(s.price,r),{flash:!0});let d=l.querySelector("[data-lq-field='dayPct'], .pct");if(t==="usdTwd"){if(d&&o){const p=o.taipeiClose!=null?ue(o.taipeiClose,3):"—";d.className="pct flat",d.style.fontSize="0.7rem",d.textContent=`${n("taipeiClose")} ${p} · Yahoo ${ue(s.price,3)}`}}else s.changePct!=null&&(d||(d=document.createElement("div"),d.className="pct",d.setAttribute("data-lq-field","dayPct"),l.appendChild(d)),d.className=`pct ${ve(s.changePct)}`,d.setAttribute("data-lq-field","dayPct"),N(d,ke(s.changePct),{flash:!0}))})}function Zr(e,t,s){if(!s||s.price==null)return;const o=s.currency||(/\.(TW|TWO)$/i.test(t)?"TWD":"USD");e.querySelectorAll(`[data-lq-sym="${Br(t)}"]`).forEach(r=>{const l=r.getAttribute("data-lq");if(l==="soxl")return;if(l==="pos"){el(r,s,o);return}const c=r.querySelectorAll("[data-lq-field='price']"),d=r.querySelectorAll("[data-lq-field='dayPct']");if(c.length||d.length){c.forEach(g=>N(g,bs(s.price,o),{flash:!0})),d.forEach(g=>{jt(g,s.changePct),N(g,ke(s.changePct),{flash:!0})});return}const p=r.querySelector(".price"),u=r.querySelector(".day-pct");p&&N(p,bs(s.price,o),{flash:!0}),u&&(jt(u,s.changePct),N(u,ke(s.changePct),{flash:!0}))})}function el(e,t,s){const o=Number(e.getAttribute("data-lq-qty")),i=Number(e.getAttribute("data-lq-avg")),r=e.getAttribute("data-lq-ccy")||s,l=t.price,c=t.changePct,d=e.querySelectorAll("td");if(!(d.length<10)){if(N(d[2],qr(l,r),{flash:!0}),Number.isFinite(o)){const p=l*o;N(d[3],_e(p,r));const u=c!=null&&Number.isFinite(c)?l*o*c/100:null;if(d[4].className=`num ${ve(u)}`,N(d[4],u==null?"—":_e(u,r)),Number.isFinite(i)){const g=(l-i)*o,h=i?(l-i)/i*100:0;d[6].className=`num ${ve(g)}`,N(d[6],_e(g,r)),d[7].className=`num ${ve(h)}`,N(d[7],ke(h))}}d[5].className=`num ${ve(c)}`,N(d[5],ke(c),{flash:!0}),e.setAttribute("data-lq-mark",String(l)),c!=null&&e.setAttribute("data-lq-daypct",String(c))}}function tl(e){e.querySelectorAll("[data-lq-book]").forEach(t=>{const s=t.getAttribute("data-lq-book"),o=Number(t.getAttribute("data-lq-cash")),i=Number(t.getAttribute("data-lq-start")),r=t.getAttribute("data-lq-ccy")||(s==="TW"?"TWD":"USD");if(!Number.isFinite(o))return;let l=0;t.querySelectorAll(".pos-row[data-lq-sym]").forEach(S=>{const v=Number(S.getAttribute("data-lq-qty")),$=Number(S.getAttribute("data-lq-mark"));Number.isFinite(v)&&Number.isFinite($)&&(l+=v*$)});const c=l;t.querySelectorAll(".pos-row[data-lq-sym]").forEach(S=>{const v=Number(S.getAttribute("data-lq-qty")),$=Number(S.getAttribute("data-lq-mark")),C=S.querySelectorAll("td");if(C.length>=11&&Number.isFinite(v)&&Number.isFinite($)&&c>0){const L=$*v/c*100;N(C[10],`${L.toFixed(2)}%`)}});const d=o+l,p=Number.isFinite(i)?d-i:null,u=Number.isFinite(i)&&i!==0?(d-i)/i*100:null,g=t.querySelector("[data-lq-kpi='equity']"),h=t.querySelector("[data-lq-kpi='pnl']"),m=t.querySelector("[data-lq-kpi='pnlPct']");g&&N(g,_e(d,r)),h&&p!=null&&(jt(h,p),N(h,_e(p,r))),m&&u!=null&&(jt(m,u),N(m,ke(u)))})}function al(e,t){if(!t||t.price==null)return;const s=e.querySelector("#sx-root .sx-price"),o=e.querySelector("#sx-root .sx-chg"),i=e.querySelector("#sx-root .sx-chgp"),r=e.querySelector("#sx-root .sx-price-row"),l=e.querySelector("#sx-root .sx-session");if(s&&N(s,`$${ue(t.price,2)}`,{flash:!0}),o)if(t.change==null||Number.isNaN(t.change))N(o,"—");else{const c=t.change>0?"+":"";N(o,`${c}${ue(t.change,2)}`)}if(i&&N(i,ke(t.changePct),{flash:!0}),r){r.classList.remove("sx-up","sx-down","sx-flat");const c=ve(t.changePct??t.change);r.classList.add(c==="up"?"sx-up":c==="down"?"sx-down":"sx-flat")}if(l){const c=Ur(t.asOfMs||Date.now());N(l,`live · ${n("dataAsOf")} ${c}`)}}function sl(e,t){const s=vn(t);if(s&&e.has(s))return e.get(s);if(s&&s.endsWith(".TW")){const o=s.replace(/\.TW$/,".TWO");if(e.has(o))return e.get(o)}if(s&&s.endsWith(".TWO")){const o=s.replace(/\.TWO$/,".TW");if(e.has(o))return e.get(o)}return null}function Nt(e,{ok:t,stale:s}){const o=e.querySelector("#lq-live-suffix");if(!o)return;const i=be?Qr(be):"";t&&!s&&i?(o.hidden=!1,o.dataset.state="live",o.removeAttribute("title"),o.textContent=` · ${n("liveQuotesLive")} ${i}`):be?(o.hidden=!1,o.dataset.state="stale",o.title=n("liveQuotesStale"),o.textContent=i?` · ${n("liveQuotesStaleShort")} ${i}`:` · ${n("liveQuotesStaleShort")}`):t?(o.hidden=!0,o.dataset.state="pending",o.removeAttribute("title"),o.textContent=""):(o.hidden=!1,o.dataset.state="stale",o.title=n("liveQuotesStale"),o.textContent=` · ${n("liveQuotesStaleShort")}`)}function nl(...e){const t=new Map(fa);for(const s of e)for(const o of s)!(o!=null&&o.symbol)||o.price==null||(_r(o.symbol,o),t.set(o.symbol,fa.get(o.symbol)));if(t.has("__MIS_TWII")){const s=t.get("__MIS_TWII");t.set("^TWII",s)}return t}async function Ea(){if(!z||document.visibilityState==="hidden")return;const{yahoo:e,mis:t}=Yr(z),[s,o]=await Promise.all([Gr(e),Xr(t)]),i=nl(s.quotes||[],o.quotes||[]),r=s.ok||o.ok;r?(be=Date.now(),Ze=!0):Ze=!1;const l=i.get("__MIS_TWII")||i.get("^TWII"),c=i.get("__MIS_OTC");Pe(z,"tw",l),Pe(z,"otc",c),Pe(z,"spx",i.get("^GSPC")),Pe(z,"nasdaq",i.get("^IXIC")),Pe(z,"sox",i.get("^SOX"));const d=i.get("USDTWD=X"),p=z.querySelector("[data-lq-key='usdTwd']"),u=p==null?void 0:p.getAttribute("data-lq-taipei-close"),g=u!=null&&u!==""?Number(u):null;Pe(z,"usdTwd",d,{taipeiClose:Number.isFinite(g)?g:null});const h=new Set;z.querySelectorAll("[data-lq-sym]").forEach(S=>{const v=S.getAttribute("data-lq-sym");if(!v||h.has(v))return;h.add(v);const $=sl(i,v);$&&Zr(z,v,$)}),al(z,i.get("SOXL")),tl(z);const m=be?Date.now()-be:1/0;Nt(z,{ok:r,stale:!r||m>mn})}function Da(){kt&&(clearTimeout(kt),kt=null)}function za(){if(Da(),!Kt)return;const e=Fr();kt=window.setTimeout(async()=>{try{await Ea()}catch{Ze=!1,z&&Nt(z,{ok:!1,stale:!0})}za()},e)}function ol(){if(Kt){if(document.visibilityState==="hidden"){Da();return}Ea().finally(()=>za())}}async function il(e){if(bn(),z=e,!z)return{ok:!1};Kt=!0,fs||(document.addEventListener("visibilitychange",ol),fs=!0),Nt(z,{ok:!1,stale:!1});try{await Ea()}catch{Ze=!1,Nt(z,{ok:!1,stale:!0})}return za(),{ok:Ze,lastSuccessAt:be}}function bn(){Kt=!1,Da(),z=null}const Ss="./data/us-macro-calendar.json",rl=900*1e3,ll=2160*60*1e3;let lt=null;function cl(e){const t=e!=null&&e.eventKey?`macroEvent_${e.eventKey}`:null;if(t){const s=n(t,"");if(s&&s!==t)return s}return(e==null?void 0:e.shortName)||(e==null?void 0:e.eventName)||"—"}function dl(e,t){const s=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),o=i=>{var r;return(r=s.find(l=>l.type===i))==null?void 0:r.value};return`${o("year")}-${o("month")}-${o("day")}`}function pl(e,t){try{const s=new Date(e),o=s.toLocaleDateString(E(),{timeZone:t,month:"numeric",day:"numeric",weekday:"short"}),i=s.toLocaleTimeString(E(),{timeZone:t,hour:"2-digit",minute:"2-digit",hour12:!1});return{datePart:o,timePart:i}}catch{return{datePart:"—",timePart:""}}}function ul(e){try{return new Date(e).toLocaleString(E(),{timeZone:"Asia/Taipei",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return e||"—"}}function gl(e,t){let s=null;for(const o of e)if(o.dayEt>=t){s=o.id;break}return s}function hl(e,{todayEt:t,nextId:s,timeZone:o}){const i=a(cl(e)),{datePart:r,timePart:l}=pl(e.scheduledAt,o),c=e.dayEt===t,d=e.id===s,p=e.dayEt<t,u=["macro-chip",e.highImpact||e.importance==="high"?"macro-chip--high":"",c?"macro-chip--today":"",d&&!c?"macro-chip--next":"",p?"macro-chip--past":""].filter(Boolean).join(" "),g=[];c?g.push(`<span class="macro-chip-tag">${a(n("macroToday"))}</span>`):d&&g.push(`<span class="macro-chip-tag macro-chip-tag--next">${a(n("macroNext"))}</span>`),(e.highImpact||e.importance==="high")&&g.push(`<span class="macro-chip-tag macro-chip-tag--high">${a(n("macroHighImpact"))}</span>`);const h=[e.eventName,e.periodLabel,`${e.dayEt} ${l} ET`,e.officialUrl?"↗ official":null].filter(Boolean).join(" · "),S=`
      <span class="macro-chip-when">${l?`${a(r)} ${a(l)}`:a(r)}</span>
      <span class="macro-chip-name">${i}</span>
      ${g.length?`<span class="macro-chip-tags">${g.join("")}</span>`:""}`,v=typeof e.officialUrl=="string"&&/^https?:\/\//i.test(e.officialUrl)?e.officialUrl:null;return v?`
    <a class="${u}" href="${a(v)}" target="_blank" rel="noopener noreferrer"
       title="${a(h)}" data-event-id="${a(e.id)}">${S}
    </a>`:`
    <span class="${u}" title="${a(h)}" data-event-id="${a(e.id)}">${S}
    </span>`}function ml(e){const t=e.querySelector(".index-marquee");if(!t||t.dataset.marqueeBound==="1")return;t.dataset.marqueeBound="1";const s=()=>t.classList.add("is-paused"),o=()=>t.classList.remove("is-paused");t.addEventListener("pointerdown",s),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.addEventListener("pointerleave",o),t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),t.addEventListener("touchcancel",o,{passive:!0})}function fl(e,t){if(!e)return;const s=(t==null?void 0:t.timezone)||"America/New_York",o=dl(new Date,s),i=Array.isArray(t==null?void 0:t.events)?t.events:[],r=gl(i,o),l=(t==null?void 0:t.asOf)||null,c=l?Date.now()-Date.parse(l):NaN,d=!!(t!=null&&t.stale)||!Number.isNaN(c)&&c>ll;let p=`${a(n("macroTzEt"))}`;if(l&&(p+=` · ${a(n("macroAsOf"))} ${a(ul(l))}`),d&&(p+=` · ${a(n("macroStale"))}`),!i.length){e.innerHTML=`
      <div class="macro-strip" role="region" aria-label="${a(n("macroTitle"))}">
        <div class="macro-strip-side">
          <span class="macro-strip-label">${a(n("macroTitle"))}</span>
          <span class="macro-strip-meta">${p}</span>
        </div>
        <p class="macro-strip-empty">${a(n("macroEmpty"))}</p>
      </div>`;return}const u=i.map(m=>hl(m,{todayEt:o,nextId:r,timeZone:s})),g=`<div class="index-marquee-group">${u.join("")}</div>`,h=`<div class="index-marquee-group index-marquee-group--clone" aria-hidden="true">${u.join("")}</div>`;e.innerHTML=`
    <div class="macro-strip" role="region" aria-label="${a(n("macroTitle"))}">
      <div class="macro-strip-side">
        <span class="macro-strip-label">${a(n("macroTitle"))}</span>
        <span class="macro-strip-meta" title="${p}">${p}</span>
      </div>
      <div class="index-strip index-strip--marquee macro-strip-marquee">
        <div class="index-marquee" tabindex="0">
          <div class="index-marquee-track">
            ${g}
            ${h}
          </div>
        </div>
      </div>
    </div>`,ml(e)}function yl(){return'<div id="us-macro-strip" class="us-macro-strip-host" aria-live="polite"></div>'}async function vl(e=!1){const t=e?`${Ss}?t=${Date.now()}`:Ss,s=await fetch(t,{cache:e?"no-store":"default"});if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.json()}async function bl(e="#us-macro-strip"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};const s=async i=>{try{const r=await vl(i);return fl(t,r),{ok:!0,data:r}}catch(r){return t.innerHTML=`
        <div class="macro-strip macro-strip--error" role="status">
          <div class="macro-strip-side">
            <span class="macro-strip-label">${a(n("macroTitle"))}</span>
          </div>
          <p class="macro-strip-empty">${a(n("macroLoadError",{msg:r.message||String(r)}))}</p>
        </div>`,{ok:!1,error:r}}},o=await s(!1);return lt&&(window.clearInterval(lt),lt=null),lt=window.setInterval(()=>{s(!0)},rl),o}const ks="./data/tw-macro-calendar.json",Sl=900*1e3,kl=2160*60*1e3;let ct=null;function $l(e){const t=e!=null&&e.eventKey?`twMacroEvent_${e.eventKey}`:null;if(t){const s=n(t,"");if(s&&s!==t)return s}return(e==null?void 0:e.shortName)||(e==null?void 0:e.eventName)||"—"}function Tl(e,t){const s=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),o=i=>{var r;return(r=s.find(l=>l.type===i))==null?void 0:r.value};return`${o("year")}-${o("month")}-${o("day")}`}function wl(e,t){try{const s=new Date(e),o=s.toLocaleDateString(E(),{timeZone:t,month:"numeric",day:"numeric",weekday:"short"}),i=s.toLocaleTimeString(E(),{timeZone:t,hour:"2-digit",minute:"2-digit",hour12:!1});return{datePart:o,timePart:i}}catch{return{datePart:"—",timePart:""}}}function xl(e){try{return new Date(e).toLocaleString(E(),{timeZone:"Asia/Taipei",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return e||"—"}}function Pl(e,t){let s=null;for(const o of e)if(o.dayTw>=t){s=o.id;break}return s}function Cl(e,{todayTw:t,nextId:s,timeZone:o}){const i=a($l(e)),{datePart:r,timePart:l}=wl(e.scheduledAt,o),c=e.dayTw===t,d=e.id===s,p=e.dayTw<t,u=["macro-chip",e.highImpact||e.importance==="high"?"macro-chip--high":"",c?"macro-chip--today":"",d&&!c?"macro-chip--next":"",p?"macro-chip--past":""].filter(Boolean).join(" "),g=[];c?g.push(`<span class="macro-chip-tag">${a(n("macroToday"))}</span>`):d&&g.push(`<span class="macro-chip-tag macro-chip-tag--next">${a(n("macroNext"))}</span>`),(e.highImpact||e.importance==="high")&&g.push(`<span class="macro-chip-tag macro-chip-tag--high">${a(n("macroHighImpact"))}</span>`);const h=[e.eventName,e.periodLabel,`${e.dayTw} ${l} 台北`,e.officialUrl?"↗ official":null].filter(Boolean).join(" · "),S=`
      <span class="macro-chip-when">${l?`${a(r)} ${a(l)}`:a(r)}</span>
      <span class="macro-chip-name">${i}</span>
      ${g.length?`<span class="macro-chip-tags">${g.join("")}</span>`:""}`,v=typeof e.officialUrl=="string"&&/^https?:\/\//i.test(e.officialUrl)?e.officialUrl:null;return v?`
    <a class="${u}" href="${a(v)}" target="_blank" rel="noopener noreferrer"
       title="${a(h)}" data-event-id="${a(e.id)}">${S}
    </a>`:`
    <span class="${u}" title="${a(h)}" data-event-id="${a(e.id)}">${S}
    </span>`}function Ll(e){const t=e.querySelector(".index-marquee");if(!t||t.dataset.marqueeBound==="1")return;t.dataset.marqueeBound="1";const s=()=>t.classList.add("is-paused"),o=()=>t.classList.remove("is-paused");t.addEventListener("pointerdown",s),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.addEventListener("pointerleave",o),t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),t.addEventListener("touchcancel",o,{passive:!0})}function Al(e,t){if(!e)return;const s=(t==null?void 0:t.timezone)||"Asia/Taipei",o=Tl(new Date,s),i=Array.isArray(t==null?void 0:t.events)?t.events:[],r=Pl(i,o),l=(t==null?void 0:t.asOf)||null,c=l?Date.now()-Date.parse(l):NaN,d=!!(t!=null&&t.stale)||!Number.isNaN(c)&&c>kl;let p=`${a(n("twMacroTz"))}`;if(l&&(p+=` · ${a(n("macroAsOf"))} ${a(xl(l))}`),d&&(p+=` · ${a(n("macroStale"))}`),!i.length){e.innerHTML=`
      <div class="macro-strip" role="region" aria-label="${a(n("twMacroTitle"))}">
        <div class="macro-strip-side">
          <span class="macro-strip-label">${a(n("twMacroTitle"))}</span>
          <span class="macro-strip-meta">${p}</span>
        </div>
        <p class="macro-strip-empty">${a(n("twMacroEmpty"))}</p>
      </div>`;return}const u=i.map(m=>Cl(m,{todayTw:o,nextId:r,timeZone:s})),g=`<div class="index-marquee-group">${u.join("")}</div>`,h=`<div class="index-marquee-group index-marquee-group--clone" aria-hidden="true">${u.join("")}</div>`;e.innerHTML=`
    <div class="macro-strip" role="region" aria-label="${a(n("twMacroTitle"))}">
      <div class="macro-strip-side">
        <span class="macro-strip-label">${a(n("twMacroTitle"))}</span>
        <span class="macro-strip-meta" title="${p}">${p}</span>
      </div>
      <div class="index-strip index-strip--marquee macro-strip-marquee">
        <div class="index-marquee" tabindex="0">
          <div class="index-marquee-track">
            ${g}
            ${h}
          </div>
        </div>
      </div>
    </div>`,Ll(e)}function Ml(){return'<div id="tw-macro-strip" class="tw-macro-strip-host" aria-live="polite"></div>'}async function El(e=!1){const t=e?`${ks}?t=${Date.now()}`:ks,s=await fetch(t,{cache:e?"no-store":"default"});if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.json()}async function Dl(e="#tw-macro-strip"){const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1};const s=async i=>{try{const r=await El(i);return Al(t,r),{ok:!0,data:r}}catch(r){return t.innerHTML=`
        <div class="macro-strip macro-strip--error" role="status">
          <div class="macro-strip-side">
            <span class="macro-strip-label">${a(n("twMacroTitle"))}</span>
          </div>
          <p class="macro-strip-empty">${a(n("twMacroLoadError",{msg:r.message||String(r)}))}</p>
        </div>`,{ok:!1,error:r}}},o=await s(!1);return ct&&(window.clearInterval(ct),ct=null),ct=window.setInterval(()=>{s(!0)},Sl),o}const zl="https://www.youtube.com/watch?v=7n-e5pe6z4U",jl=[1,2,3,4,5,6,7,8,9,10],Nl=[1,2,3,4,5,6],Rl=[1,2,3,4],Bl=[1,2,3];function Ol(){return`
    <div class="gz-badges" role="list">
      <span class="gz-badge gz-badge-candidate" role="listitem">${a(n("godzillaBadgeCandidate"))}</span>
      <span class="gz-badge gz-badge-watch" role="listitem">${a(n("godzillaBadgeWatch"))}</span>
      <span class="gz-badge gz-badge-us" role="listitem">${a(n("godzillaUsFocus"))}</span>
      <span class="gz-badge gz-badge-self" role="listitem">${a(n("godzillaSelfReport"))}</span>
      <span class="gz-badge gz-badge-listened" role="listitem">${a(n("godzillaListenedBadge"))}</span>
    </div>`}function ql(){return jl.map(e=>{const t=n(`godzillaThesis${e}Title`),s=n(`godzillaThesis${e}Body`);return`
      <article class="gz-card" data-thesis="${e}">
        <div class="gz-card-num" aria-hidden="true">${e}</div>
        <div class="gz-card-body">
          <h3 class="gz-card-title">${a(t)}</h3>
          <p class="gz-card-text">${a(s)}</p>
        </div>
      </article>`}).join("")}function Il(){return`
    <ul class="gz-check-list">
      ${Nl.map(e=>`<li class="gz-check-item">
          <span class="gz-check-mark" aria-hidden="true">✓</span>
          <span>${a(n(`godzillaCheck${e}`))}</span>
        </li>`).join("")}
    </ul>`}function Hl(){return`
    <ul class="gz-bullet-list">
      ${Rl.map(e=>`<li>${a(n(`godzillaOpt${e}`))}</li>`).join("")}
    </ul>`}function Fl(){return`
    <ul class="gz-bullet-list">
      ${Bl.map(e=>`<li>${a(n(`godzillaRsu${e}`))}</li>`).join("")}
    </ul>`}function Ul(e){e.innerHTML=`
    <section class="gz-hero" aria-label="${a(n("godzillaHeroLabel"))}">
      <div class="gz-hero-main">
        <h3 class="gz-hero-kicker">${a(n("godzillaKicker"))}</h3>
        <p class="gz-hero-tagline">${a(n("godzillaTagline"))}</p>
        ${Ol()}
        <p class="gz-source">
          <span class="gz-source-label">${a(n("godzillaSourceLabel"))}</span>
          <a class="gz-yt" href="${zl}" target="_blank" rel="noopener noreferrer">${a(n("godzillaYoutube"))}</a>
          <span class="gz-source-cite">· ${a(n("godzillaSourceCite"))}</span>
        </p>
      </div>
    </section>


    <section class="gz-panel gz-listened" aria-label="${a(n("godzillaStockTitle"))}">
      <h3 class="gz-h3">${a(n("godzillaStockTitle"))}</h3>
      <p class="gz-panel-lead">${a(n("godzillaStockLead"))}</p>
      <ul class="gz-bullet-list gz-stock-list">
        ${[1,2,3,4,5,6].map(t=>`<li>${a(n(`godzillaStock${t}`))}</li>`).join("")}
      </ul>
      <p class="gz-source-note">${a(n("godzillaStockNote"))}</p>
    </section>

    <section class="gz-panel" aria-label="${a(n("godzillaThesesTitle"))}">
      <h3 class="gz-h3">${a(n("godzillaThesesTitle"))}</h3>
      <p class="gz-panel-lead">${a(n("godzillaThesesLead"))}</p>
      <div class="gz-thesis-grid">
        ${ql()}
      </div>
    </section>

    <section class="gz-panel" aria-label="${a(n("godzillaChecklistTitle"))}">
      <h3 class="gz-h3">${a(n("godzillaChecklistTitle"))}</h3>
      <p class="gz-panel-lead">${a(n("godzillaChecklistLead"))}</p>
      ${Il()}
    </section>

    <div class="gz-two-col">
      <section class="gz-panel" aria-label="${a(n("godzillaOptionsTitle"))}">
        <h3 class="gz-h3">${a(n("godzillaOptionsTitle"))}</h3>
        <p class="gz-panel-lead">${a(n("godzillaOptionsLead"))}</p>
        ${Hl()}
      </section>
      <section class="gz-panel" aria-label="${a(n("godzillaRsuTitle"))}">
        <h3 class="gz-h3">${a(n("godzillaRsuTitle"))}</h3>
        <p class="gz-panel-lead">${a(n("godzillaRsuLead"))}</p>
        ${Fl()}
      </section>
    </div>

    <section class="gz-panel gz-tw" aria-label="${a(n("godzillaTwTitle"))}">
      <h3 class="gz-h3">${a(n("godzillaTwTitle"))}</h3>
      <p class="gz-panel-lead">${a(n("godzillaTwLead"))}</p>
      <p class="gz-tw-body">${a(n("godzillaTwBody"))}</p>
    </section>

    <aside class="gz-gate" role="note">
      <strong class="gz-gate-title">${a(n("godzillaGateNote"))}</strong>
      <p class="gz-gate-detail">${a(n("godzillaGateDetail"))}</p>
    </aside>
  `}function Wl(e="#gz-root"){const t=typeof e=="string"?document.querySelector(e):e;return t?(Ul(t),{ok:!0}):{ok:!1}}const We={id:"Xn1EsFe7snQ",watchUrl:"https://www.youtube.com/watch?v=Xn1EsFe7snQ",thumbUrl:"https://i.ytimg.com/vi/Xn1EsFe7snQ/hqdefault.jpg"},_l="https://ecorner.stanford.edu",Vl=[1,2,3,4,5];function Gl(){return`
    <div class="jh-badges" role="list">
      <span class="jh-badge jh-badge-candidate" role="listitem">${a(n("godzillaBadgeCandidate"))}</span>
      <span class="jh-badge jh-badge-watch" role="listitem">${a(n("godzillaBadgeWatch"))}</span>
      <span class="jh-badge jh-badge-us" role="listitem">${a(n("jensenUsFocus"))}</span>
      <span class="jh-badge jh-badge-talk" role="listitem">${a(n("jensenTalkBadge"))}</span>
      <span class="jh-badge jh-badge-listened" role="listitem">${a(n("jensenListenedBadge"))}</span>
    </div>`}function Jl(){return Vl.map(e=>{const t=n(`jensenH${e}Title`),s=n(`jensenH${e}Body`);return`
      <article class="jh-card" data-highlight="${e}">
        <div class="jh-card-num" aria-hidden="true">${e}</div>
        <div class="jh-card-body">
          <h4 class="jh-card-title">${a(t)}</h4>
          <p class="jh-card-text">${a(s)}</p>
        </div>
      </article>`}).join("")}function Xl(){const e=n("jensenEmbedTitle");return`
    <div class="jh-yt-card" data-yt-id="${a(We.id)}" data-embed-allowed="false">
      <a class="jh-yt-card-media" href="${We.watchUrl}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">
        <img
          class="jh-yt-card-thumb"
          src="${We.thumbUrl}"
          alt=""
          width="480"
          height="360"
          loading="lazy"
          decoding="async"
        />
        <span class="jh-yt-card-play" aria-hidden="true"></span>
      </a>
      <div class="jh-yt-card-body">
        <p class="jh-yt-card-kicker">${a(n("jensenYoutube"))}</p>
        <h4 class="jh-yt-card-title">${a(e)}</h4>
        <p class="jh-yt-card-note">${a(n("jensenEmbedBlockedNote"))}</p>
        <a
          class="jh-yt-card-cta"
          href="${We.watchUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >${a(n("jensenWatchCta"))}</a>
      </div>
    </div>`}function Yl(){return Xl()}function Kl(e){e.innerHTML=`
    <section class="jh-hero" aria-label="${a(n("jensenHeroLabel"))}">
      <div class="jh-hero-main">
        <h3 class="jh-hero-kicker">${a(n("jensenKicker"))}</h3>
        <p class="jh-hero-tagline">${a(n("jensenTagline"))}</p>
        ${Gl()}
        <p class="jh-meta">${a(n("jensenMeta"))}</p>
        <p class="jh-source">
          <span class="jh-source-label">${a(n("godzillaSourceLabel"))}</span>
          <a class="jh-yt" href="${We.watchUrl}" target="_blank" rel="noopener noreferrer">${a(n("jensenYoutube"))}</a>
          <span class="jh-source-cite">· ${a(n("jensenSourceCite"))}</span>
        </p>
        <p class="jh-source jh-source-alt">
          <a class="jh-yt" href="${_l}" target="_blank" rel="noopener noreferrer">${a(n("jensenEcorner"))}</a>
        </p>
      </div>
    </section>

    ${Yl()}


    <section class="jh-panel jh-listened" aria-label="${a(n("jensenStockTitle"))}">
      <h3 class="jh-h3">${a(n("jensenStockTitle"))}</h3>
      <p class="jh-panel-lead">${a(n("jensenStockLead"))}</p>
      <ul class="jh-bullet-list jh-stock-list">
        ${[1,2,3,4,5,6].map(t=>`<li>${a(n(`jensenStock${t}`))}</li>`).join("")}
      </ul>
      <p class="jh-source-note">${a(n("jensenStockNote"))}</p>
    </section>

    <section class="jh-panel" aria-label="${a(n("jensenHighlightsTitle"))}">
      <h3 class="jh-h3">${a(n("jensenHighlightsTitle"))}</h3>
      <p class="jh-panel-lead">${a(n("jensenHighlightsLead"))}</p>
      <div class="jh-highlight-grid">
        ${Jl()}
      </div>
    </section>

    <section class="jh-panel jh-tw" aria-label="${a(n("jensenTwTitle"))}">
      <h3 class="jh-h3">${a(n("jensenTwTitle"))}</h3>
      <p class="jh-panel-lead">${a(n("jensenTwLead"))}</p>
      <p class="jh-tw-body">${a(n("jensenTwBody"))}</p>
    </section>

    <aside class="jh-gate" role="note">
      <strong class="jh-gate-title">${a(n("jensenGateNote"))}</strong>
      <p class="jh-gate-detail">${a(n("jensenGateDetail"))}</p>
    </aside>
  `}function Ql(e="#jh-root"){const t=typeof e=="string"?document.querySelector(e):e;return t?(Kl(t),{ok:!0}):{ok:!1}}const Zl="./data/gooaye-episodes.json",Ve=25,ec="#research/podcast",$s="https://podcasts.apple.com/tw/podcast/gooaye-%E8%82%A1%E7%99%8C/id1500839292";let dt=null,Be=null,$t=Ve,Rt="";async function tc(){return dt||Be||(Be=(async()=>{const e=await fetch(Zl,{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return dt=await e.json(),dt})().catch(e=>{throw Be=null,e}),Be)}function ac(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(void 0,{timeZone:"Asia/Taipei",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}catch{return e}}function sc(e){return(e==null?void 0:e.notesQuality)==="listened"&&Array.isArray(e.stockAnalysis)&&e.stockAnalysis.length>0}function nc(e){const t=(e==null?void 0:e.episodes)||[],s=Rt.trim().toLowerCase();return s?t.filter(o=>[o.title,o.subtitle,o.ep!=null?`ep${o.ep}`:"",o.ep!=null?String(o.ep):"",...o.stockAnalysis||[],...o.keyPoints||[],...o.rssTeaser||[]].filter(Boolean).join(`
`).toLowerCase().includes(s)):t}function oc(e){const t=sc(e),s=e.ep!=null?`<span class="gy-ep-num">EP${a(String(e.ep))}</span>`:"",o=e.pubDateTw?`<time class="gy-ep-date" datetime="${a(e.pubDateIso||e.pubDateTw)}">${a(e.pubDateTw)}</time>`:"",i=t?`<span class="gy-ep-badge gy-ep-badge-listened">${a(n("gooayeBadgeListened"))}</span>`:`<span class="gy-ep-badge gy-ep-badge-rss">${a(n("gooayeBadgeRssOnly"))}</span>`,r=e.title||(e.ep!=null?`EP${e.ep}`:n("gooayeUntitled"));let l="";if(t){const d=(e.stockAnalysis||[]).filter(Boolean);l+=`<p class="gy-ep-kicker gy-ep-kicker-stock">${a(n("gooayeStockAnalysis"))}</p>`,l+=`<ul class="gy-ep-points gy-ep-stock">${d.map(u=>`<li>${a(u)}</li>`).join("")}</ul>`;const p=(e.rssTeaser||e.keyPoints||[]).filter(Boolean);if(p.length&&(l+=`<details class="gy-ep-rss-details"><summary>${a(n("gooayeRssTeaserToggle"))}</summary>`,l+=`<ul class="gy-ep-points gy-ep-rss">${p.map(u=>`<li>${a(u)}</li>`).join("")}</ul></details>`),e.listenedAt||e.transcriptSource){const u=[];e.listenedAt&&u.push(n("gooayeListenedAt",{date:String(e.listenedAt).slice(0,16).replace("T"," ")})),e.transcriptSource&&u.push(String(e.transcriptSource)),l+=`<p class="gy-ep-source-note">${a(u.join(" · "))}</p>`}}else{const d=(e.keyPoints||[]).filter(Boolean);l+=`<p class="gy-ep-kicker">${a(n("gooayeKeyPoints"))}</p>`,d.length?l+=`<ul class="gy-ep-points">${d.map(u=>`<li>${a(u)}</li>`).join("")}</ul>`:l+=`<p class="gy-ep-empty">${a(n("gooayeNotesThin"))}</p>`;const p=e.notesQuality==="teaser"||e.notesQuality==="title-only"||!d.length?`<p class="gy-ep-source-note">${a(n("gooayeTeaserNote"))}</p>`:`<p class="gy-ep-source-note">${a(n("gooayeRssOnlyNote"))}</p>`;l+=p}const c=e.link?`<a class="gy-ep-link" href="${a(e.link)}" target="_blank" rel="noopener noreferrer">${a(n("gooayeListen"))}</a>`:"";return`
    <article class="gy-ep${t?" gy-ep-listened":" gy-ep-rss-only"}" data-ep="${a(String(e.ep??""))}" data-quality="${a(t?"listened":"rss-only")}">
      <header class="gy-ep-head">
        <div class="gy-ep-meta">${s}${i}${o}</div>
        <h4 class="gy-ep-title">${a(r)}</h4>
      </header>
      <div class="gy-ep-body">
        ${l}
        <div class="gy-ep-actions">${c}</div>
      </div>
    </article>`}function Bt(e,t,{error:s}={}){var g;if(s){e.innerHTML=`
      <div class="gy-error" role="alert">
        <p>${a(n("gooayeLoadError",{msg:String(s.message||s)}))}</p>
        <a class="pc-link pc-link-ext" href="${$s}" target="_blank" rel="noopener noreferrer">${a(n("podcastsGooayeApple"))}</a>
      </div>`;return}const o=nc(t),i=(t.episodes||[]).length,r=o.slice(0,$t),l=Math.max(0,o.length-r.length),c=ac(t.asOf),d=t.counts||{};e.innerHTML=`
    <div class="gy-toolbar">
      <div class="gy-toolbar-stats" aria-live="polite">
        <span class="gy-stat">${a(n("gooayeEpisodeCount",{n:String(i)}))}</span>
        ${d.listened?`<span class="gy-stat gy-stat-listened">${a(n("gooayeListenedCount",{n:String(d.listened)}))}</span>`:""}
        ${c?`<span class="gy-asof">${a(n("gooayeAsOf",{date:c}))}</span>`:""}
        ${d.notesEmpty?`<span class="gy-stat-muted">${a(n("gooayeEmptyCount",{n:String(d.notesEmpty)}))}</span>`:""}
      </div>
      <label class="gy-search">
        <span class="gy-search-label">${a(n("gooayeSearchLabel"))}</span>
        <input type="search" class="gy-search-input" data-gy-search
          placeholder="${a(n("gooayeSearchPlaceholder"))}"
          value="${a(Rt)}" autocomplete="off" />
      </label>
    </div>

    <p class="gy-source-line">
      ${a(n("gooayeSourceLine"))}
      <a class="pc-link pc-link-ext" href="${a(((g=t.show)==null?void 0:g.feedUrl)||"")}" target="_blank" rel="noopener noreferrer">SoundOn RSS</a>
      ·
      <a class="pc-link pc-link-ext" href="${$s}" target="_blank" rel="noopener noreferrer">${a(n("podcastsGooayeApple"))}</a>
      ·
      <a class="pc-link" href="${ec}">${a(n("podcastsGotoResearch"))}</a>
    </p>

    <div class="gy-list" role="list">
      ${r.length?r.map(oc).join(""):`<p class="gy-empty">${a(n("gooayeNoResults"))}</p>`}
    </div>

    <div class="gy-pager">
      ${l>0?`<button type="button" class="gy-load-more" data-gy-more>
              ${a(n("gooayeLoadMore",{n:String(Math.min(Ve,l)),left:String(l)}))}
            </button>`:o.length?`<p class="gy-pager-done">${a(n("gooayeShowingAll",{n:String(o.length)}))}</p>`:""}
    </div>`;const p=e.querySelector("[data-gy-search]");if(p){let h=null;p.addEventListener("input",()=>{clearTimeout(h),h=setTimeout(()=>{Rt=p.value||"",$t=Ve,Bt(e,t)},180)})}const u=e.querySelector("[data-gy-more]");u&&u.addEventListener("click",()=>{$t+=Ve,Bt(e,t)})}function ic(){return`
    <article class="pc-card pc-card-gooaye" id="podcast-gooaye" data-podcast="gooaye">
      <header class="pc-card-head pc-card-head-gooaye">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${a(n("gooayeLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-tw">${a(n("podcastsGooayeMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(n("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(n("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(n("podcastsGooayeTitle"))}</h3>
        <p class="pc-card-blurb">${a(n("podcastsGooayeLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="gy-disclaimer" role="note">${a(n("gooayeDisclaimer"))}</p>
        <div id="gy-root" class="gy-root" aria-busy="true">
          <p class="gy-loading">${a(n("gooayeLoading"))}</p>
        </div>
      </div>
    </article>`}function rc(){return ic()}async function lc(e="#gy-root"){var s;const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1,reason:"missing-root"};$t=Ve,Rt="";try{const o=await tc();return t.setAttribute("aria-busy","false"),Bt(t,o),{ok:!0,count:((s=o.episodes)==null?void 0:s.length)||0}}catch(o){return t.setAttribute("aria-busy","false"),Bt(t,null,{error:o}),{ok:!1,reason:String((o==null?void 0:o.message)||o)}}}const cc="./data/xiaojun-episodes.json",Ge=25,dc="#research/podcast",Ts="https://podcasts.apple.com/tw/podcast/%E5%BC%A0%E5%B0%8F%E7%8F%BAj%C3%B9n-%E5%95%86%E4%B8%9A%E8%AE%BF%E8%B0%88%E5%BD%95/id1634356920";let pt=null,Oe=null,Tt=Ge,Ot="";async function pc(){return pt||Oe||(Oe=(async()=>{const e=await fetch(cc,{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return pt=await e.json(),pt})().catch(e=>{throw Oe=null,e}),Oe)}function uc(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(void 0,{timeZone:"Asia/Taipei",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}catch{return e}}function gc(e){return(e==null?void 0:e.notesQuality)==="listened"&&Array.isArray(e.stockAnalysis)&&e.stockAnalysis.length>0}function hc(e){const t=(e==null?void 0:e.episodes)||[],s=Ot.trim().toLowerCase();return s?t.filter(o=>[o.title,o.subtitle,o.ep!=null?`ep${o.ep}`:"",o.ep!=null?String(o.ep):"",...o.stockAnalysis||[],...o.keyPoints||[],...o.rssTeaser||[]].filter(Boolean).join(`
`).toLowerCase().includes(s)):t}function mc(e){const t=gc(e),s=e.ep!=null?`<span class="xj-ep-num">EP${a(String(e.ep))}</span>`:"",o=e.pubDateTw?`<time class="xj-ep-date" datetime="${a(e.pubDateIso||e.pubDateTw)}">${a(e.pubDateTw)}</time>`:"",i=t?`<span class="xj-ep-badge xj-ep-badge-listened">${a(n("xiaojunBadgeListened"))}</span>`:`<span class="xj-ep-badge xj-ep-badge-rss">${a(n("xiaojunBadgeRssOnly"))}</span>`,r=e.title||(e.ep!=null?`EP${e.ep}`:n("xiaojunUntitled"));let l="";if(t){const d=(e.stockAnalysis||[]).filter(Boolean);l+=`<p class="xj-ep-kicker xj-ep-kicker-stock">${a(n("xiaojunStockAnalysis"))}</p>`,l+=`<ul class="xj-ep-points xj-ep-stock">${d.map(u=>`<li>${a(u)}</li>`).join("")}</ul>`;const p=(e.rssTeaser||e.keyPoints||[]).filter(Boolean);if(p.length&&(l+=`<details class="xj-ep-rss-details"><summary>${a(n("xiaojunRssTeaserToggle"))}</summary>`,l+=`<ul class="xj-ep-points xj-ep-rss">${p.map(u=>`<li>${a(u)}</li>`).join("")}</ul></details>`),e.listenedAt||e.transcriptSource){const u=[];e.listenedAt&&u.push(n("xiaojunListenedAt",{date:String(e.listenedAt).slice(0,16).replace("T"," ")})),e.transcriptSource&&u.push(String(e.transcriptSource)),l+=`<p class="xj-ep-source-note">${a(u.join(" · "))}</p>`}}else{const d=(e.keyPoints||[]).filter(Boolean);l+=`<p class="xj-ep-kicker">${a(n("xiaojunKeyPoints"))}</p>`,d.length?l+=`<ul class="xj-ep-points">${d.map(u=>`<li>${a(u)}</li>`).join("")}</ul>`:l+=`<p class="xj-ep-empty">${a(n("xiaojunNotesThin"))}</p>`;const p=e.notesQuality==="teaser"||e.notesQuality==="title-only"||!d.length?`<p class="xj-ep-source-note">${a(n("xiaojunTeaserNote"))}</p>`:`<p class="xj-ep-source-note">${a(n("xiaojunRssOnlyNote"))}</p>`;l+=p}const c=e.link?`<a class="xj-ep-link" href="${a(e.link)}" target="_blank" rel="noopener noreferrer">${a(n("xiaojunListen"))}</a>`:"";return`
    <article class="xj-ep${t?" xj-ep-listened":" xj-ep-rss-only"}" data-ep="${a(String(e.ep??""))}" data-quality="${a(t?"listened":"rss-only")}">
      <header class="xj-ep-head">
        <div class="xj-ep-meta">${s}${i}${o}</div>
        <h4 class="xj-ep-title">${a(r)}</h4>
      </header>
      <div class="xj-ep-body">
        ${l}
        <div class="xj-ep-actions">${c}</div>
      </div>
    </article>`}function qt(e,t,{error:s}={}){var g;if(s){e.innerHTML=`
      <div class="xj-error" role="alert">
        <p>${a(n("xiaojunLoadError",{msg:String(s.message||s)}))}</p>
        <a class="pc-link pc-link-ext" href="${Ts}" target="_blank" rel="noopener noreferrer">${a(n("podcastsXiaojunApple"))}</a>
      </div>`;return}const o=hc(t),i=(t.episodes||[]).length,r=o.slice(0,Tt),l=Math.max(0,o.length-r.length),c=uc(t.asOf),d=t.counts||{};e.innerHTML=`
    <div class="xj-toolbar">
      <div class="xj-toolbar-stats" aria-live="polite">
        <span class="xj-stat">${a(n("xiaojunEpisodeCount",{n:String(i)}))}</span>
        ${d.listened?`<span class="xj-stat xj-stat-listened">${a(n("xiaojunListenedCount",{n:String(d.listened)}))}</span>`:""}
        ${c?`<span class="xj-asof">${a(n("xiaojunAsOf",{date:c}))}</span>`:""}
        ${d.notesEmpty?`<span class="xj-stat-muted">${a(n("xiaojunEmptyCount",{n:String(d.notesEmpty)}))}</span>`:""}
      </div>
      <label class="xj-search">
        <span class="xj-search-label">${a(n("xiaojunSearchLabel"))}</span>
        <input type="search" class="xj-search-input" data-xj-search
          placeholder="${a(n("xiaojunSearchPlaceholder"))}"
          value="${a(Ot)}" autocomplete="off" />
      </label>
    </div>

    <p class="xj-source-line">
      ${a(n("xiaojunSourceLine"))}
      <a class="pc-link pc-link-ext" href="${a(((g=t.show)==null?void 0:g.feedUrl)||"")}" target="_blank" rel="noopener noreferrer">SoundOn RSS</a>
      ·
      <a class="pc-link pc-link-ext" href="${Ts}" target="_blank" rel="noopener noreferrer">${a(n("podcastsXiaojunApple"))}</a>
      ·
      <a class="pc-link" href="${dc}">${a(n("podcastsGotoResearch"))}</a>
    </p>

    <div class="xj-list" role="list">
      ${r.length?r.map(mc).join(""):`<p class="xj-empty">${a(n("xiaojunNoResults"))}</p>`}
    </div>

    <div class="xj-pager">
      ${l>0?`<button type="button" class="xj-load-more" data-xj-more>
              ${a(n("xiaojunLoadMore",{n:String(Math.min(Ge,l)),left:String(l)}))}
            </button>`:o.length?`<p class="xj-pager-done">${a(n("xiaojunShowingAll",{n:String(o.length)}))}</p>`:""}
    </div>`;const p=e.querySelector("[data-xj-search]");if(p){let h=null;p.addEventListener("input",()=>{clearTimeout(h),h=setTimeout(()=>{Ot=p.value||"",Tt=Ge,qt(e,t)},180)})}const u=e.querySelector("[data-xj-more]");u&&u.addEventListener("click",()=>{Tt+=Ge,qt(e,t)})}function fc(){return`
    <article class="pc-card pc-card-xiaojun" id="podcast-xiaojun" data-podcast="xiaojun">
      <header class="pc-card-head pc-card-head-xiaojun">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${a(n("xiaojunLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-cn">${a(n("podcastsXiaojunMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(n("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(n("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(n("podcastsXiaojunTitle"))}</h3>
        <p class="pc-card-blurb">${a(n("podcastsXiaojunLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="xj-disclaimer" role="note">${a(n("xiaojunDisclaimer"))}</p>
        <div id="xj-root" class="xj-root" aria-busy="true">
          <p class="xj-loading">${a(n("xiaojunLoading"))}</p>
        </div>
      </div>
    </article>`}function yc(){return fc()}async function vc(e="#xj-root"){var s;const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1,reason:"missing-root"};Tt=Ge,Ot="";try{const o=await pc();return t.setAttribute("aria-busy","false"),qt(t,o),{ok:!0,count:((s=o.episodes)==null?void 0:s.length)||0}}catch(o){return t.setAttribute("aria-busy","false"),qt(t,null,{error:o}),{ok:!1,reason:String((o==null?void 0:o.message)||o)}}}const bc="./data/whynottv-episodes.json",Je=25,Sc="#research/podcast",ws="https://podcasts.apple.com/tw/podcast/whynottv-podcast/id1824936911";let ut=null,qe=null,wt=Je,It="";async function kc(){return ut||qe||(qe=(async()=>{const e=await fetch(bc,{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return ut=await e.json(),ut})().catch(e=>{throw qe=null,e}),qe)}function $c(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(void 0,{timeZone:"Asia/Taipei",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}catch{return e}}function Tc(e){return(e==null?void 0:e.notesQuality)==="listened"&&Array.isArray(e.stockAnalysis)&&e.stockAnalysis.length>0}function wc(e){const t=(e==null?void 0:e.episodes)||[],s=It.trim().toLowerCase();return s?t.filter(o=>[o.title,o.subtitle,o.ep!=null?`ep${o.ep}`:"",o.ep!=null?String(o.ep):"",...o.stockAnalysis||[],...o.keyPoints||[],...o.rssTeaser||[]].filter(Boolean).join(`
`).toLowerCase().includes(s)):t}function xc(e){const t=Tc(e),s=e.ep!=null?`<span class="wn-ep-num">EP${a(String(e.ep))}</span>`:"",o=e.pubDateTw?`<time class="wn-ep-date" datetime="${a(e.pubDateIso||e.pubDateTw)}">${a(e.pubDateTw)}</time>`:"",i=t?`<span class="wn-ep-badge wn-ep-badge-listened">${a(n("whynottvBadgeListened"))}</span>`:`<span class="wn-ep-badge wn-ep-badge-rss">${a(n("whynottvBadgeRssOnly"))}</span>`,r=e.title||(e.ep!=null?`EP${e.ep}`:n("whynottvUntitled"));let l="";if(t){const d=(e.stockAnalysis||[]).filter(Boolean);l+=`<p class="wn-ep-kicker wn-ep-kicker-stock">${a(n("whynottvStockAnalysis"))}</p>`,l+=`<ul class="wn-ep-points wn-ep-stock">${d.map(u=>`<li>${a(u)}</li>`).join("")}</ul>`;const p=(e.rssTeaser||e.keyPoints||[]).filter(Boolean);if(p.length&&(l+=`<details class="wn-ep-rss-details"><summary>${a(n("whynottvRssTeaserToggle"))}</summary>`,l+=`<ul class="wn-ep-points wn-ep-rss">${p.map(u=>`<li>${a(u)}</li>`).join("")}</ul></details>`),e.listenedAt||e.transcriptSource){const u=[];e.listenedAt&&u.push(n("whynottvListenedAt",{date:String(e.listenedAt).slice(0,16).replace("T"," ")})),e.transcriptSource&&u.push(String(e.transcriptSource)),l+=`<p class="wn-ep-source-note">${a(u.join(" · "))}</p>`}}else{const d=(e.keyPoints||[]).filter(Boolean);l+=`<p class="wn-ep-kicker">${a(n("whynottvKeyPoints"))}</p>`,d.length?l+=`<ul class="wn-ep-points">${d.map(u=>`<li>${a(u)}</li>`).join("")}</ul>`:l+=`<p class="wn-ep-empty">${a(n("whynottvNotesThin"))}</p>`;const p=e.notesQuality==="teaser"||e.notesQuality==="title-only"||!d.length?`<p class="wn-ep-source-note">${a(n("whynottvTeaserNote"))}</p>`:`<p class="wn-ep-source-note">${a(n("whynottvRssOnlyNote"))}</p>`;l+=p}const c=e.link?`<a class="wn-ep-link" href="${a(e.link)}" target="_blank" rel="noopener noreferrer">${a(n("whynottvListen"))}</a>`:"";return`
    <article class="wn-ep${t?" wn-ep-listened":" wn-ep-rss-only"}" data-ep="${a(String(e.ep??""))}" data-quality="${a(t?"listened":"rss-only")}">
      <header class="wn-ep-head">
        <div class="wn-ep-meta">${s}${i}${o}</div>
        <h4 class="wn-ep-title">${a(r)}</h4>
      </header>
      <div class="wn-ep-body">
        ${l}
        <div class="wn-ep-actions">${c}</div>
      </div>
    </article>`}function Ht(e,t,{error:s}={}){var g;if(s){e.innerHTML=`
      <div class="wn-error" role="alert">
        <p>${a(n("whynottvLoadError",{msg:String(s.message||s)}))}</p>
        <a class="pc-link pc-link-ext" href="${ws}" target="_blank" rel="noopener noreferrer">${a(n("podcastsWhynottvApple"))}</a>
      </div>`;return}const o=wc(t),i=(t.episodes||[]).length,r=o.slice(0,wt),l=Math.max(0,o.length-r.length),c=$c(t.asOf),d=t.counts||{};e.innerHTML=`
    <div class="wn-toolbar">
      <div class="wn-toolbar-stats" aria-live="polite">
        <span class="wn-stat">${a(n("whynottvEpisodeCount",{n:String(i)}))}</span>
        ${d.listened?`<span class="wn-stat wn-stat-listened">${a(n("whynottvListenedCount",{n:String(d.listened)}))}</span>`:""}
        ${c?`<span class="wn-asof">${a(n("whynottvAsOf",{date:c}))}</span>`:""}
        ${d.notesEmpty?`<span class="wn-stat-muted">${a(n("whynottvEmptyCount",{n:String(d.notesEmpty)}))}</span>`:""}
      </div>
      <label class="wn-search">
        <span class="wn-search-label">${a(n("whynottvSearchLabel"))}</span>
        <input type="search" class="wn-search-input" data-wn-search
          placeholder="${a(n("whynottvSearchPlaceholder"))}"
          value="${a(It)}" autocomplete="off" />
      </label>
    </div>

    <p class="wn-source-line">
      ${a(n("whynottvSourceLine"))}
      <a class="pc-link pc-link-ext" href="${a(((g=t.show)==null?void 0:g.feedUrl)||"")}" target="_blank" rel="noopener noreferrer">SoundOn RSS</a>
      ·
      <a class="pc-link pc-link-ext" href="${ws}" target="_blank" rel="noopener noreferrer">${a(n("podcastsWhynottvApple"))}</a>
      ·
      <a class="pc-link" href="${Sc}">${a(n("podcastsGotoResearch"))}</a>
    </p>

    <div class="wn-list" role="list">
      ${r.length?r.map(xc).join(""):`<p class="wn-empty">${a(n("whynottvNoResults"))}</p>`}
    </div>

    <div class="wn-pager">
      ${l>0?`<button type="button" class="wn-load-more" data-wn-more>
              ${a(n("whynottvLoadMore",{n:String(Math.min(Je,l)),left:String(l)}))}
            </button>`:o.length?`<p class="wn-pager-done">${a(n("whynottvShowingAll",{n:String(o.length)}))}</p>`:""}
    </div>`;const p=e.querySelector("[data-wn-search]");if(p){let h=null;p.addEventListener("input",()=>{clearTimeout(h),h=setTimeout(()=>{It=p.value||"",wt=Je,Ht(e,t)},180)})}const u=e.querySelector("[data-wn-more]");u&&u.addEventListener("click",()=>{wt+=Je,Ht(e,t)})}function Pc(){return`
    <article class="pc-card pc-card-whynottv" id="podcast-whynottv" data-podcast="whynottv">
      <header class="pc-card-head pc-card-head-whynottv">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${a(n("whynottvLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-cn">${a(n("podcastsWhynottvMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(n("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(n("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(n("podcastsWhynottvTitle"))}</h3>
        <p class="pc-card-blurb">${a(n("podcastsWhynottvLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="wn-disclaimer" role="note">${a(n("whynottvDisclaimer"))}</p>
        <div id="wn-root" class="wn-root" aria-busy="true">
          <p class="wn-loading">${a(n("whynottvLoading"))}</p>
        </div>
      </div>
    </article>`}function Cc(){return Pc()}async function Lc(e="#wn-root"){var s;const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1,reason:"missing-root"};wt=Je,It="";try{const o=await kc();return t.setAttribute("aria-busy","false"),Ht(t,o),{ok:!0,count:((s=o.episodes)==null?void 0:s.length)||0}}catch(o){return t.setAttribute("aria-busy","false"),Ht(t,null,{error:o}),{ok:!1,reason:String((o==null?void 0:o.message)||o)}}}const Ac="./data/zhang-junan-posts.json",me=25,xs="https://et220870.blogspot.com/",Mc="https://www.pttweb.cc/user/et220870";let gt=null,Ie=null,Le=me,Ft="",Ee="all",De="all";async function Ec(){return gt||Ie||(Ie=(async()=>{const e=await fetch(Ac,{cache:"no-cache"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return gt=await e.json(),gt})().catch(e=>{throw Ie=null,e}),Ie)}function Dc(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(void 0,{timeZone:"Asia/Taipei",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}catch{return e}}function zc(e){if(!e)return"";try{const t=new Date(e);return Number.isNaN(t.getTime())?String(e).slice(0,10):new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(t)}catch{return String(e).slice(0,10)}}function jc(e){return(e==null?void 0:e.analysisQuality)==="analyzed"&&Array.isArray(e.analysis)&&e.analysis.length>0}function Nc(e,t){const s=new Set;for(const o of e)t!=="all"&&o.source!==t||o.series&&s.add(o.series);return["all",...[...s].sort((o,i)=>o.localeCompare(i,"zh-Hant"))]}function Rc(e){const t=(e==null?void 0:e.posts)||[],s=Ft.trim().toLowerCase();return t.filter(o=>Ee!=="all"&&o.source!==Ee||De!=="all"&&o.series!==De?!1:s?[o.title,o.series,o.board,o.source,...o.analysis||[],o.commentSummary||""].filter(Boolean).join(`
`).toLowerCase().includes(s):!0)}function Bc(e){const t=jc(e),s=zc(e.publishedAt),o=s?`<time class="zj-ep-date" datetime="${a(e.publishedAt||s)}">${a(s)}</time>`:"",i=t?`<span class="zj-ep-badge zj-ep-badge-analyzed">${a(n("zhangJunanBadgeAnalyzed"))}</span>`:`<span class="zj-ep-badge zj-ep-badge-title">${a(n("zhangJunanBadgeTitleOnly"))}</span>`,r=e.source==="blog"?`<span class="zj-ep-badge">${a(n("zhangJunanSourceBlog"))}</span>`:`<span class="zj-ep-badge">${a(n("zhangJunanSourcePtt"))}</span>`,l=e.source==="ptt"&&e.board?`<span class="zj-ep-board">[${a(e.board)}]</span>`:"",c=e.series?`<span class="zj-ep-badge">${a(e.series)}</span>`:"";let d="";d+=`<p class="zj-ep-kicker zj-ep-kicker-stock">${a(n(t?"zhangJunanStockAnalysis":"zhangJunanKeyPoints"))}</p>`;const p=(e.analysis||[]).filter(Boolean);p.length?d+=`<ul class="zj-ep-points${t?" zj-ep-stock":""}">${p.map(h=>`<li>${a(h)}</li>`).join("")}</ul>`:d+=`<p class="zj-ep-empty">${a(n("zhangJunanNotesThin"))}</p>`,t||(d+=`<p class="zj-ep-source-note">${a(n("zhangJunanTitleOnlyNote"))}</p>`),e.commentSummary&&(d+=`<div class="zj-ep-comments"><div class="zj-ep-comments-label">${a(n("zhangJunanCommentSummary"))}</div><div>${a(e.commentSummary)}</div></div>`);const u=e.source==="blog"?n("zhangJunanOpenBlog"):n("zhangJunanOpenPtt"),g=e.url?`<a class="zj-ep-link" href="${a(e.url)}" target="_blank" rel="noopener noreferrer">${a(u)}</a>`:"";return`
    <article class="zj-ep${t?" zj-ep-listened":" zj-ep-rss-only"}" data-id="${a(e.id)}" data-quality="${a(t?"analyzed":"title-only")}">
      <header class="zj-ep-head">
        <div class="zj-ep-meta">${r}${c}${i}${o}</div>
        <h4 class="zj-ep-title">${l}${a(e.title||n("zhangJunanUntitled"))}</h4>
      </header>
      <div class="zj-ep-body">
        ${d}
        <div class="zj-ep-actions">${g}</div>
      </div>
    </article>`}function Me(e,t,{error:s}={}){var S;if(s){e.innerHTML=`
      <div class="zj-error" role="alert">
        <p>${a(n("zhangJunanLoadError",{msg:String(s.message||s)}))}</p>
        <a class="pc-link pc-link-ext" href="${xs}" target="_blank" rel="noopener noreferrer">${a(n("zhangJunanOpenBlog"))}</a>
      </div>`;return}const o=Rc(t),i=(t.posts||[]).length,r=o.slice(0,Le),l=Math.max(0,o.length-r.length),c=Dc(t.asOf),d=t.counts||{},p=Nc(t.posts||[],Ee),u=[{id:"all",label:n("zhangJunanFilterAll")},{id:"blog",label:n("zhangJunanFilterBlog")},{id:"ptt",label:n("zhangJunanFilterPtt")}].map(v=>`<button type="button" class="zj-subtab${Ee===v.id?" is-active":""}" data-zj-source="${v.id}">${a(v.label)}</button>`).join(""),g=p.map(v=>{const $=v==="all"?n("zhangJunanFilterSeriesAll"):v;return`<button type="button" class="zj-series-tab${De===v?" is-active":""}" data-zj-series="${a(v)}">${a($)}</button>`}).join("");e.innerHTML=`
    <div class="zj-toolbar">
      <div class="zj-toolbar-stats" aria-live="polite">
        <span class="zj-stat">${a(n("zhangJunanPostCount",{n:String(i)}))}</span>
        ${d.analyzed?`<span class="zj-stat zj-stat-listened">${a(n("zhangJunanAnalyzedCount",{n:String(d.analyzed)}))}</span>`:""}
        ${d.titleOnly?`<span class="zj-stat-muted">${a(n("zhangJunanTitleOnlyCount",{n:String(d.titleOnly)}))}</span>`:""}
        ${c?`<span class="zj-asof">${a(n("zhangJunanAsOf",{date:c}))}</span>`:""}
      </div>
      <label class="zj-search">
        <span class="zj-search-label">${a(n("zhangJunanSearchLabel"))}</span>
        <input type="search" class="zj-search-input" data-zj-search
          placeholder="${a(n("zhangJunanSearchPlaceholder"))}"
          value="${a(Ft)}" autocomplete="off" />
      </label>
    </div>

    <div class="zj-subtabs" role="tablist" aria-label="${a(n("zhangJunanSourceFilters"))}">${u}</div>
    <div class="zj-series-tabs" role="tablist" aria-label="${a(n("zhangJunanSeriesFilters"))}">${g}</div>

    <p class="zj-source-line">
      ${a(n("zhangJunanSourceLine"))}
      <a class="pc-link pc-link-ext" href="${xs}" target="_blank" rel="noopener noreferrer">Blogspot</a>
      ·
      <a class="pc-link pc-link-ext" href="${Mc}" target="_blank" rel="noopener noreferrer">PTT ${a(((S=t.person)==null?void 0:S.pttId)||"et220870")}</a>
    </p>

    <div class="zj-list" role="list">
      ${r.length?r.map(Bc).join(""):`<p class="zj-empty">${a(n("zhangJunanNoResults"))}</p>`}
    </div>

    <div class="zj-pager">
      ${l>0?`<button type="button" class="zj-load-more" data-zj-more>
              ${a(n("zhangJunanLoadMore",{n:String(Math.min(me,l)),left:String(l)}))}
            </button>`:o.length?`<p class="zj-pager-done">${a(n("zhangJunanShowingAll",{n:String(o.length)}))}</p>`:""}
    </div>`;const h=e.querySelector("[data-zj-search]");if(h){let v=null;h.addEventListener("input",()=>{clearTimeout(v),v=setTimeout(()=>{Ft=h.value||"",Le=me,Me(e,t)},180)})}e.querySelectorAll("[data-zj-source]").forEach(v=>{v.addEventListener("click",()=>{Ee=v.getAttribute("data-zj-source")||"all",De="all",Le=me,Me(e,t)})}),e.querySelectorAll("[data-zj-series]").forEach(v=>{v.addEventListener("click",()=>{De=v.getAttribute("data-zj-series")||"all",Le=me,Me(e,t)})});const m=e.querySelector("[data-zj-more]");m&&m.addEventListener("click",()=>{Le+=me,Me(e,t)})}function Oc(){return`
    <article class="pc-card pc-card-zhang-junan" id="podcast-zhang-junan" data-podcast="zhang-junan">
      <header class="pc-card-head pc-card-head-zhang-junan">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${a(n("zhangJunanLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-tw">${a(n("podcastsZhangJunanMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(n("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(n("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(n("podcastsZhangJunanTitle"))}</h3>
        <p class="pc-card-blurb">${a(n("podcastsZhangJunanLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="zj-disclaimer" role="note">${a(n("zhangJunanDisclaimer"))}</p>
        <div id="zj-root" class="zj-root" aria-busy="true">
          <p class="zj-loading">${a(n("zhangJunanLoading"))}</p>
        </div>
      </div>
    </article>`}function qc(){return Oc()}async function Ic(e="#zj-root"){var s;const t=typeof e=="string"?document.querySelector(e):e;if(!t)return{ok:!1,reason:"missing-root"};Le=me,Ft="",Ee="all",De="all";try{const o=await Ec();return t.setAttribute("aria-busy","false"),Me(t,o),{ok:!0,count:((s=o.posts)==null?void 0:s.length)||0}}catch(o){return t.setAttribute("aria-busy","false"),Me(t,null,{error:o}),{ok:!1,reason:String((o==null?void 0:o.message)||o)}}}const ja=[{id:"godzilla",titleKey:"godzillaTitle",handleKey:"podcastsGodzillaHandle",blurbKey:"godzillaLead",marketKey:"godzillaUsFocus",market:"US",featured:!0},{id:"jensen",titleKey:"jensenTitle",handleKey:"jensenHandle",blurbKey:"jensenLead",marketKey:"jensenUsFocus",market:"US",featured:!0},{id:"gooaye",titleKey:"podcastsGooayeTitle",handleKey:null,blurbKey:"podcastsGooayeLead",marketKey:"podcastsGooayeMarket",market:"TW",featured:!1},{id:"xiaojun",titleKey:"podcastsXiaojunTitle",handleKey:"podcastsXiaojunHandle",blurbKey:"podcastsXiaojunLead",marketKey:"podcastsXiaojunMarket",market:"CN",featured:!1},{id:"whynottv",titleKey:"podcastsWhynottvTitle",handleKey:"podcastsWhynottvHandle",blurbKey:"podcastsWhynottvLead",marketKey:"podcastsWhynottvMarket",market:"CN",featured:!1},{id:"zhang-junan",titleKey:"podcastsZhangJunanTitle",handleKey:"podcastsZhangJunanHandle",blurbKey:"podcastsZhangJunanLead",marketKey:"podcastsZhangJunanMarket",market:"TW",featured:!1}],ht={godzilla:"godzilla","godzilla-playbook":"godzilla",playbook:"godzilla",哥吉拉:"godzilla",哥吉拉心法:"godzilla",jensen:"jensen",huang:"jensen","jensen-huang":"jensen",nvidia:"jensen","jen-hsun":"jensen",etl:"jensen",黃仁勳:"jensen",黄仁勋:"jensen",gooaye:"gooaye",股癌:"gooaye",xiaojun:"xiaojun",張小珺:"xiaojun",张小珺:"xiaojun",whynottv:"whynottv",whynot:"whynottv",WhynotTV:"whynottv","zhang-junan":"zhang-junan",zhangjunan:"zhang-junan",張濬安:"zhang-junan",张浚安:"zhang-junan",menu:"menu",all:"menu",index:"menu","":"menu"};let Na="menu",ya=null;function Ra(e){if(e==null||e==="")return"menu";const t=String(e).trim(),s=t.toLowerCase();return ht[s]?ht[s]:ht[t]?ht[t]:ja.some(o=>o.id===s)?s:"menu"}function Hc(){return`
    <article class="pc-card pc-card-featured" id="podcast-godzilla" data-podcast="godzilla">
      <header class="pc-card-head">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-featured">${a(n("podcastsFeatured"))}</span>
          <span class="pc-card-badge pc-badge-us">${a(n("godzillaUsFocus"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(n("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(n("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(n("godzillaTitle"))}</h3>
        <p class="pc-card-handle">${a(n("podcastsGodzillaHandle"))}</p>
        <p class="pc-card-blurb">${a(n("godzillaLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="gz-disclaimer" role="note">${a(n("godzillaDisclaimer"))}</p>
        <div id="gz-root" class="gz-root"></div>
      </div>
    </article>`}function Fc(){return`
    <article class="pc-card pc-card-featured pc-card-jensen" id="podcast-jensen" data-podcast="jensen">
      <header class="pc-card-head pc-card-head-jensen">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-featured">${a(n("podcastsFeatured"))}</span>
          <span class="pc-card-badge pc-badge-us">${a(n("jensenUsFocus"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(n("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${a(n("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${a(n("jensenTitle"))}</h3>
        <p class="pc-card-handle">${a(n("jensenHandle"))}</p>
        <p class="pc-card-blurb">${a(n("jensenLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="jh-disclaimer" role="note">${a(n("jensenDisclaimer"))}</p>
        <div id="jh-root" class="jh-root"></div>
      </div>
    </article>`}function Uc(){return ja.map(e=>{const t=e.market==="TW"?"pc-badge-tw":e.market==="CN"?"pc-badge-cn":"pc-badge-us",s=e.featured?`<span class="pc-card-badge pc-badge-featured">${a(n("podcastsFeatured"))}</span>`:e.id==="gooaye"||e.id==="xiaojun"||e.id==="whynottv"||e.id==="zhang-junan"?`<span class="pc-card-badge pc-badge-library">${a(n(e.id==="gooaye"?"gooayeLibraryBadge":e.id==="xiaojun"?"xiaojunLibraryBadge":e.id==="whynottv"?"whynottvLibraryBadge":"zhangJunanLibraryBadge"))}</span>`:`<span class="pc-card-badge pc-badge-stub">${a(n("podcastsStubBadge"))}</span>`,o=e.handleKey?`<p class="pc-menu-handle">${a(n(e.handleKey))}</p>`:"";return`
      <button type="button" class="pc-menu-card" data-pc-cat="${a(e.id)}" aria-label="${a(n(e.titleKey))}">
        <div class="pc-menu-badges">
          ${s}
          <span class="pc-card-badge ${t}">${a(n(e.marketKey))}</span>
          <span class="pc-card-badge pc-badge-candidate">${a(n("godzillaBadgeCandidate"))}</span>
        </div>
        <h3 class="pc-menu-title">${a(n(e.titleKey))}</h3>
        ${o}
        <p class="pc-menu-blurb">${a(n(e.blurbKey))}</p>
        <span class="pc-menu-cta">${a(n("podcastsOpenCategory"))}</span>
      </button>`}).join("")}function Wc(e){return[{id:"menu",label:n("podcastsCatMenu")},...ja.map(s=>({id:s.id,label:n(s.titleKey)}))].map(s=>`<button type="button" class="pc-tab${s.id===e?" is-active":""}" data-pc-cat="${a(s.id)}" role="tab" aria-selected="${s.id===e}">${a(s.label)}</button>`).join("")}function _c(e){return e==="godzilla"?Hc():e==="jensen"?Fc():e==="gooaye"?rc():e==="xiaojun"?yc():e==="whynottv"?Cc():e==="zhang-junan"?qc():`
    <div class="pc-menu" role="list" aria-label="${a(n("podcastsCatMenu"))}">
      <p class="pc-menu-lead">${a(n("podcastsMenuLead"))}</p>
      <div class="pc-menu-grid">${Uc()}</div>
    </div>`}function Vc(e){return!e||e==="menu"?"#podcasts":`#podcasts/${e}`}function Gc(e){const t=Vc(e);location.hash!==t&&history.replaceState(null,"",t)}function Ba(e,t,{syncUrl:s=!0}={}){const o=Ra(t);Na=o,s&&Gc(o),e.innerHTML=`
    <div class="pc-tabs-wrap">
      <div class="pc-tabs" role="tablist" aria-label="${a(n("podcastsCategories"))}">
        ${Wc(o)}
      </div>
    </div>
    <div class="pc-panel" role="tabpanel" data-pc-panel="${a(o)}">
      ${_c(o)}
    </div>`,e.querySelectorAll("[data-pc-cat]").forEach(i=>{i.addEventListener("click",()=>{Ba(e,i.dataset.pcCat,{syncUrl:!0})})}),o==="godzilla"&&Wl("#gz-root"),o==="jensen"&&Ql("#jh-root"),o==="gooaye"&&lc("#gy-root"),o==="xiaojun"&&vc("#xj-root"),o==="whynottv"&&Lc("#wn-root"),o==="zhang-junan"&&Ic("#zj-root")}function Jc(){return`
    <section class="section podcasts-section" aria-label="${a(n("podcastsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(n("podcastsTitle"))}</h2>
        <p class="view-lead">${a(n("podcastsLead"))}</p>
      </header>
      <p class="pc-disclaimer" role="note">${a(n("podcastsDisclaimer"))}</p>
      <div id="pc-root" class="pc-root"></div>
    </section>`}function Xc(e,{syncUrl:t=!0}={}){return ya?(Ba(ya,e,{syncUrl:t}),{ok:!0,category:Na}):{ok:!1,reason:"missing-root"}}function Yc(e="#pc-root",t={}){const o=(typeof e=="string"?document.querySelector(e):e)||document.querySelector("#pc-root");if(!o)return{ok:!1,reason:"missing-root"};ya=o;const i=Ra(t.category??"menu");return Ba(o,i,{syncUrl:t.syncUrl!==!1}),{ok:!0,category:Na}}const Kc="./data/berkshire-letters.json",Sn=[{id:"early",labelKey:"lettersCatEarly"},{id:"nineties",labelKey:"lettersCat90"},{id:"twothousands",labelKey:"lettersCat00"},{id:"tens",labelKey:"lettersCat10"},{id:"recent",labelKey:"lettersCat20"},{id:"special",labelKey:"lettersCatSpecial"}],Ps={menu:"menu",early:"early",1977:"early",nineties:"nineties","1990s":"nineties",twothousands:"twothousands","2000s":"twothousands",tens:"tens","2010s":"tens",recent:"recent","2020s":"recent",special:"special"};let G=null,ae="menu",de=null,Xe=null;function va(e){if(e==null||e==="")return"menu";const s=String(e).trim().toLowerCase();if(Ps[s])return Ps[s];if(/^\d{4}$/.test(s)){const o=Number(s);if(o>=1977&&o<=1989)return"early";if(o>=1990&&o<=1999)return"nineties";if(o>=2e3&&o<=2009)return"twothousands";if(o>=2010&&o<=2019)return"tens";if(o>=2020&&o<=2025)return"recent"}return"menu"}function Qc(e,t){return t==="special"?"#letters/special":t&&/^\d{4}$/.test(String(t))?`#letters/${t}`:!e||e==="menu"?"#letters":`#letters/${e}`}function kn(e){return((G==null?void 0:G.letters)||[]).filter(t=>t.category===e)}function Zc(e){const s=kn(e).filter(o=>o.access!=="link-only").reduce((o,i)=>!o||i.year>o.year?i:o,null);return s?String(s.year):null}function ed(e){if(e==="special")return((G==null?void 0:G.letters)||[]).find(s=>s.access==="link-only")||null;if(e==null||!/^\d{4}$/.test(String(e)))return null;const t=Number(e);return((G==null?void 0:G.letters)||[]).find(s=>s.year===t&&s.access!=="link-only")||null}function Ut(e,{syncUrl:t=!0,year:s}={}){const o=e==null||e===""?"menu":String(e).trim(),i=/^\d{4}$/.test(o)?o:null,r=o.toLowerCase()==="special",l=s!=null&&s!==""?String(s):i;if(l==="special"||r&&!i&&l==null?(ae="special",de="special"):l&&/^\d{4}$/.test(l)?(ae=va(l),de=l):(ae=va(o),ae==="menu"?de=null:ae==="special"?de="special":de=Zc(ae)),t){const c=Qc(ae,de);location.hash!==c&&history.replaceState(null,"",c)}id()}function td(e){return e.title?e.title:String(e.year)}function ad(e){const t=e.filter(o=>o.access!=="link-only");if(t.length<2)return"";const s=t.slice().sort((o,i)=>i.year-o.year).map(o=>{const i=String(o.year)===String(de);return`<button type="button" class="lt-year-chip${i?" is-on":""}" data-letter-year="${o.year}" aria-pressed="${i?"true":"false"}">${o.year}</button>`}).join("");return`
    <div class="lt-year-rail" role="group" aria-label="${a(n("lettersYearRail"))}">
      ${s}
    </div>`}function sd(e){if(!e)return`<p class="lt-note">${a(n("lettersMissing"))}</p>`;const t=e.access==="read",s=n(t?"lettersReadBadge":"lettersLinkBadge"),o=t?"pc-badge-featured":"pc-badge-stub",i=t?`<ul class="lt-points">${e.bullets.map(d=>`<li>${a(d)}</li>`).join("")}</ul>`:`<p class="lt-linkonly">${a(n("lettersLinkOnlyNote"))}</p>`,r=String(e.url||"").toLowerCase().endsWith(".pdf"),l=n(r?"lettersReaderOpenPdf":"lettersReaderOpen");return`
    <article class="lt-reader" id="${e.access==="link-only"?`letter-${e.year}-special`:`letter-${e.year}`}">
      <header class="lt-reader-head">
        <span class="pc-card-badge ${o}">${a(s)}</span>
        <h3 class="lt-reader-title">${a(td(e))}</h3>
        <p class="lt-reader-by">${a(n("lettersAuthor"))}：${a(e.author)}</p>
      </header>
      ${i}
      <div class="lt-reader-stage" role="region" aria-label="${a(n("lettersReaderRegion"))}">
        <p class="lt-reader-note">${a(n("lettersReaderNote"))}</p>
        <a class="lt-reader-open" href="${a(e.url)}" target="_blank" rel="noopener noreferrer">${a(l)}</a>
        <p class="lt-reader-src">${a(n("lettersOfficialHost"))}</p>
      </div>
    </article>`}function nd(){const e={};for(const s of(G==null?void 0:G.letters)||[])e[s.category]=(e[s.category]||0)+1;const t=Sn.map(s=>{const o=e[s.id]||0;return`
      <button type="button" class="pc-menu-card" data-letter-cat="${s.id}">
        <span class="pc-menu-title">${a(n(s.labelKey))}</span>
        <span class="pc-menu-blurb">${o}</span>
        <span class="pc-menu-cta">${a(n("lettersOpen"))}</span>
      </button>`}).join("");return`
    <div class="pc-menu" role="list">
      <p class="pc-menu-lead">${a(n("lettersMenuLead"))}</p>
      <div class="pc-menu-grid">${t}</div>
    </div>`}function od(){const e=kn(ae),t=Sn.find(o=>o.id===ae),s=ed(de);return`
    <button type="button" class="lt-back" data-letter-cat="menu">${a(n("lettersBack"))}</button>
    <h3 class="lt-cat-title">${a(n((t==null?void 0:t.labelKey)||"lettersTitle"))}</h3>
    ${ad(e)}
    ${sd(s)}`}function id(){const e=Xe==null?void 0:Xe.querySelector("#lt-host");!e||!G||(e.innerHTML=ae==="menu"?nd():od(),e.querySelectorAll("[data-letter-cat]").forEach(t=>{t.addEventListener("click",()=>Ut(t.dataset.letterCat))}),e.querySelectorAll("[data-letter-year]").forEach(t=>{t.addEventListener("click",()=>Ut(t.dataset.letterYear))}))}function rd(){return`
    <section class="section letters-section" aria-label="${a(n("lettersTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(n("lettersTitle"))}</h2>
        <p class="view-lead">${a(n("lettersLead"))}</p>
      </header>
      <p class="pc-disclaimer" role="note">${a(n("lettersDisclaimer"))}</p>
      <div id="lt-root"><div id="lt-host"></div></div>
    </section>`}async function ld(e,{category:t="menu",year:s,syncUrl:o=!1}={}){if(Xe=document.querySelector(e),!!Xe){if(!G){const i=await fetch(Kc);if(!i.ok)throw new Error(`letters HTTP ${i.status}`);G=await i.json()}Ut(t,{syncUrl:o,year:s})}}const cd="./data/manbao.json",$n=[{id:"about",labelKey:"manbaoCatAbout"},{id:"public",labelKey:"manbaoCatPublic"},{id:"decode",labelKey:"manbaoCatDecode"},{id:"tech",labelKey:"manbaoCatTech"},{id:"giants",labelKey:"manbaoCatGiants"},{id:"club",labelKey:"manbaoCatClub"}],Cs={menu:"menu",about:"about",public:"public",essay:"public",decode:"decode",tech:"tech",giants:"giants",club:"club"};let O=null,le="menu",Ye=null;function Oa(e){if(e==null||e==="")return"menu";const s=String(e).trim().toLowerCase();return Cs[s]?Cs[s]:"menu"}function Tn(e){return!e||e==="menu"?"#manbao":`#manbao/${e}`}function wn(e,{syncUrl:t=!0}={}){if(le=Oa(e),t){const s=Tn(le);location.hash!==s&&history.replaceState(null,"",s)}xn()}function dd(){var s;const e={about:4,public:((s=O==null?void 0:O.essays)==null?void 0:s.length)||0};for(const o of(O==null?void 0:O.posts)||[])e[o.category]=(e[o.category]||0)+1;const t=$n.map(o=>{const i=e[o.id]||0;return`
      <button type="button" class="pc-menu-card" data-manbao-cat="${o.id}">
        <span class="pc-menu-title">${a(n(o.labelKey))}</span>
        <span class="pc-menu-blurb">${i}</span>
        <span class="pc-menu-cta">${a(n("manbaoOpen"))}</span>
      </button>`}).join("");return`
    <div class="pc-menu" role="list">
      <p class="pc-menu-lead">${a(n("manbaoMenuLead"))}</p>
      <p class="lt-note">${a((O==null?void 0:O.indexNote)||"")}</p>
      <div class="pc-menu-grid">${t}</div>
    </div>`}function pd(){const e=[[O.officialSite,"manny-li.com"],[O.essayIndex,"essay"],[O.proHome,"pro.manny-li.com"],[O.proJoin,"join"],[O.proPosts,"posts"]];return`
    <button type="button" class="lt-back" data-manbao-cat="menu">${a(n("manbaoBack"))}</button>
    <h3 class="lt-cat-title">${a(n("manbaoCatAbout"))}</h3>
    <div class="pc-list">
      ${e.map(([t,s])=>`
        <article class="pc-card">
          <header class="pc-card-head">
            <h3 class="pc-card-title">${a(s)}</h3>
          </header>
          <div class="lt-body">
            <a class="lt-official" href="${a(t)}" target="_blank" rel="noopener noreferrer">${a(n("manbaoOpen"))}</a>
          </div>
        </article>`).join("")}
    </div>`}function ud(){const e=O.essays||[];return`
    <button type="button" class="lt-back" data-manbao-cat="menu">${a(n("manbaoBack"))}</button>
    <h3 class="lt-cat-title">${a(n("manbaoCatPublic"))}</h3>
    <div class="pc-list">
      ${e.map(t=>`
        <article class="pc-card">
          <header class="pc-card-head">
            <div class="pc-card-identity">
              <span class="pc-card-badge pc-badge-featured">${a(n("manbaoPublicBadge"))}</span>
            </div>
            <h3 class="pc-card-title">${a(t.title)}</h3>
            <p class="pc-card-handle">${a(t.date)}</p>
          </header>
          <div class="lt-body">
            <ul class="lt-points">${t.summary.map(s=>`<li>${a(s)}</li>`).join("")}</ul>
            <a class="lt-official" href="${a(t.url)}" target="_blank" rel="noopener noreferrer">${a(n("manbaoOpen"))}</a>
          </div>
        </article>`).join("")}
    </div>`}function gd(){const e=$n.find(r=>r.id===le),t=(O.posts||[]).filter(r=>r.category===le),s=new Map;for(const r of t){const l=(r.date||"").slice(0,4)||"—";s.has(l)||s.set(l,[]),s.get(l).push(r)}const i=[...s.keys()].map(r=>{const l=s.get(r).map(c=>`
        <li class="lt-pro-row">
          <a href="${a(c.url)}" target="_blank" rel="noopener noreferrer">${a(c.title)}</a>
          <span class="lt-pro-meta">${a(c.date)} · ${a(n("manbaoPaywallBadge"))}</span>
        </li>`).join("");return`<section class="lt-year"><h4>${a(r)}</h4><ul class="lt-pro-list">${l}</ul></section>`}).join("");return`
    <button type="button" class="lt-back" data-manbao-cat="menu">${a(n("manbaoBack"))}</button>
    <h3 class="lt-cat-title">${a(n((e==null?void 0:e.labelKey)||"manbaoTitle"))}</h3>
    <p class="lt-note">${a(n("manbaoPaywallBadge"))} · ${t.length}</p>
    ${i}`}function xn(){const e=Ye==null?void 0:Ye.querySelector("#mb-host");if(!e||!O)return;let t=dd();le==="about"?t=pd():le==="public"?t=ud():le!=="menu"&&(t=gd()),e.innerHTML=t,e.querySelectorAll("[data-manbao-cat]").forEach(s=>{s.addEventListener("click",()=>wn(s.dataset.manbaoCat))})}function hd(){return`
    <section class="section manbao-section" aria-label="${a(n("manbaoTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${a(n("manbaoTitle"))}</h2>
        <p class="view-lead">${a(n("manbaoLead"))}</p>
      </header>
      <p class="pc-disclaimer" role="note">${a(n("manbaoDisclaimer"))}</p>
      <div id="mb-root"><div id="mb-host"></div></div>
    </section>`}async function md(e,{category:t="menu",syncUrl:s=!1}={}){if(Ye=document.querySelector(e),!!Ye){if(!O){const o=await fetch(cd);if(!o.ok)throw new Error(`manbao HTTP ${o.status}`);O=await o.json()}if(le=Oa(t),s){const o=Tn(le);location.hash!==o&&history.replaceState(null,"",o)}xn()}}const fd="./data/latest.json";function J(e){return e==null||Number.isNaN(e)?"flat":e>0?"up":e<0?"down":"flat"}function U(e,t=2){return e==null||Number.isNaN(e)?"—":`${e>0?"+":""}${e.toFixed(t)}%`}function se(e,t=2){return e==null||Number.isNaN(e)?"—":Number(e).toLocaleString(E(),{minimumFractionDigits:t,maximumFractionDigits:t})}function qa(e,t){if(e==null||Number.isNaN(e))return"—";const s=t==="TWD"&&e>=100?0:2;return`${t==="USD"?"$":t==="TWD"?"NT$":""}${se(e,s)}`}function yd(e){try{return new Date(e).toLocaleString(E(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+n("taipei")}catch{return e}}function Ia(e){const t=e.aboveSma20?`<span class="badge sma-on">${T("sma20","SMA20")}↑</span>`:`<span class="badge sma-off">${T("sma20","SMA20")}↓</span>`,s=e.aboveSma50?`<span class="badge sma-on">${T("sma50","SMA50")}↑</span>`:`<span class="badge sma-off">${T("sma50","SMA50")}↓</span>`;return t+s}function Ha(e){return e!=null&&e.length?e.map(t=>{const s=String(t);return s==="A"?`<span class="badge screen">${T("screenA","A")}</span>`:s==="B"?`<span class="badge screen">${T("screenB","B")}</span>`:s==="C"?`<span class="badge screen">${T("screenC","C")}</span>`:s==="observe"?`<span class="badge screen">${a(n("observe"))}</span>`:`<span class="badge screen">${a(s)}</span>`}).join(""):""}const Ls={tw:"https://www.twse.com.tw/zh/indices/taiex/mi-5min-indices.html",otc:"https://www.tpex.org.tw/zh-tw/mainboard/trading/info/daily-indices.html",spx:"https://www.spglobal.com/spdji/en/indices/equity/sp-500/",nasdaq:"https://www.nasdaq.com/market-activity/index/comp",sox:"https://www.nasdaq.com/market-activity/index/sox",usdTwd:"https://www.cbc.gov.tw/tw/lp-645-1.html"};function vd(e){var i,r,l,c,d;const t=[],s=(p,u,g)=>{if(!g)return;const h=g.incomplete,m=g.value!=null?se(g.value,2):h?a(n("dataIncomplete")):"—",S=g.dayPct!=null?`<div data-lq-field="dayPct" class="pct ${J(g.dayPct)}">${U(g.dayPct)}</div>`:"",v=g.session==="intraday"?` · ${T("intraday",n("intraday"))}`:"",$=Ls[p],C=$?`title="${a((g.name||p)+" · official ↗")}"`:"",L=`
        <div class="label">${u}${v}</div>
        <div class="value" data-lq-field="value">${m}</div>
        ${S}`;$?t.push(`
      <a class="index-chip ${h?"incomplete":""}" data-lq="index" data-lq-key="${a(p)}" href="${a($)}"
         target="_blank" rel="noopener noreferrer" ${C}>${L}
      </a>`):t.push(`
      <div class="index-chip ${h?"incomplete":""}" data-lq="index" data-lq-key="${a(p)}">${L}
      </div>`)};if(s("tw",T("taiex",((i=e.tw)==null?void 0:i.name)||n("taiex")),e.tw),s("otc",T("otc",((r=e.otc)==null?void 0:r.name)||n("otc")),e.otc),s("spx",T("spx",((l=e.spx)==null?void 0:l.name)||n("spx")),e.spx),s("nasdaq",T("nasdaq",((c=e.nasdaq)==null?void 0:c.name)||n("nasdaq")),e.nasdaq),s("sox",T("sox",((d=e.sox)==null?void 0:d.name)||n("sox")),e.sox),e.usdTwd){const p=e.usdTwd,u=p.taipeiClose??p.yahoo,g=Ls.usdTwd,h=["USD/TWD",n("taipeiClose")+(p.taipeiClose!=null?` ${se(p.taipeiClose,3)}`:" —"),p.yahoo!=null?`Yahoo ${se(p.yahoo,3)}`:null,"CBC / 台北外匯 official ↗"].filter(Boolean).join(" · ");t.push(`
      <a class="index-chip" data-lq="index" data-lq-key="usdTwd"
         data-lq-taipei-close="${p.taipeiClose!=null?a(String(p.taipeiClose)):""}"
         href="${a(g)}" target="_blank" rel="noopener noreferrer"
         title="${a(h)}">
        <div class="label">${T("usdtwd",n("usdtwd"))}</div>
        <div class="value" data-lq-field="value">${se(u,3)}</div>
        <div class="pct flat" data-lq-field="dayPct" style="font-size:0.7rem">
          ${a(n("taipeiClose"))} ${p.taipeiClose!=null?se(p.taipeiClose,3):"—"}
          · Yahoo ${p.yahoo!=null?se(p.yahoo,3):"—"}
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
    </div>`:'<div class="index-strip index-strip--marquee"></div>'}function bd(e,t){const s=e.market==="TW"?T("twStock",n("twStock")):e.market==="US"?T("usStock",n("usStock")):a(e.market||""),o=e.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${T("rs","RS")}</div><div class="m-val ${J(e.rsVsIndexPp)}">${U(e.rsVsIndexPp)}</div></div>`:e.priorClosePct!=null?`<div class="metric"><div class="m-label">${T("priorClose",n("priorCloseFull"))}</div><div class="m-val ${J(e.priorClosePct)}">${U(e.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${T("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card" data-lq="pick" data-lq-sym="${a(e.ticker)}">
      <div class="rank">TOP ${t}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${a(e.ticker)}</div>
          <div class="name">${a(e.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price" data-lq-field="price">${qa(e.price,e.currency)}</div>
          <div class="day-pct ${J(e.dayPct)}" data-lq-field="dayPct">${U(e.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${s}</span>
        ${Ha(e.screens)}
        ${Ia(e)}
      </div>
      <div class="metrics">
        ${o}
        <div class="metric"><div class="m-label">${T("pct5d",n("pct5d"))}</div><div class="m-val ${J(e.pct5d)}">${U(e.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${T("pct1m",n("pct1m"))}</div><div class="m-val ${J(e.pct1m)}">${U(e.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${T("volRatio",n("volRatio"))}</div><div class="m-val">${e.volRatio!=null?se(e.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${e.business||e.why||e.risk?`<details class="fold-block card-fold"><summary>${a(n("details"))}</summary>
        ${e.business?`<p class="card-text"><strong>${a(n("business"))}</strong>　${a(e.business)}</p>`:""}
        ${e.why?`<p class="card-text"><strong>${a(n("reason"))}</strong>　${a(e.why)}</p>`:""}
        ${e.risk?`<p class="card-text risk"><strong>${a(n("risk"))}</strong>　${Pn(e.risk)}</p>`:""}
      </details>`:""}
    </article>
  `}function Pn(e){let t=a(e);return t=t.replace(/漲停/g,T("limitUp",n("limitUp"))),t=t.replace(/動能/g,T("momentum",n("momentum"))),t}function As(e){return e.map(t=>{const s=t.rsVsIndexPp??t.priorClosePct,o=t.rsVsIndexPp!=null?U(t.rsVsIndexPp):t.priorClosePct!=null?U(t.priorClosePct):"—";return`
      <tr data-lq="pick" data-lq-sym="${a(t.ticker)}">
        <td><span class="ticker">${a(t.ticker)}</span></td>
        <td class="name-cell">${a(t.name||"")}</td>
        <td class="num" data-lq-field="price">${qa(t.price,t.currency)}</td>
        <td class="num ${J(t.dayPct)}" data-lq-field="dayPct">${U(t.dayPct)}</td>
        <td class="num ${J(s)}">${o}</td>
        <td class="num ${J(t.pct5d)}">${U(t.pct5d)}</td>
        <td class="num ${J(t.pct1m)}">${U(t.pct1m)}</td>
        <td class="num">${t.volRatio!=null?se(t.volRatio,2)+"×":"—"}</td>
        <td>${Ia(t)}</td>
        <td>${Ha(t.screens)}</td>
        <td class="why-cell">${a(t.why||"")}</td>
      </tr>`}).join("")}function Ms(e){return e.map(t=>{const s=t.rsVsIndexPp!=null?`<span class="${J(t.rsVsIndexPp)}">${T("rs","RS")} ${U(t.rsVsIndexPp)}</span>`:t.priorClosePct!=null?`<span class="${J(t.priorClosePct)}">${T("priorClose",n("priorClose"))} ${U(t.priorClosePct)}</span>`:"";return`
      <div class="list-card" data-lq="pick" data-lq-sym="${a(t.ticker)}">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${a(t.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${a(t.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)" data-lq-field="price">${qa(t.price,t.currency)}</div>
            <div class="${J(t.dayPct)}" data-lq-field="dayPct" style="font-family:var(--mono);font-weight:600">${U(t.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${s}
          <span class="${J(t.pct5d)}">${T("pct5d","5d")} ${U(t.pct5d)}</span>
          <span class="${J(t.pct1m)}">${T("pct1m","1m")} ${U(t.pct1m)}</span>
          <span>${T("volRatio",n("volRatio"))} ${t.volRatio!=null?se(t.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${Ia(t)}${Ha(t.screens)}</div>
        ${t.why?`<p class="lc-why">${a(t.why)}</p>`:""}
        ${t.risk&&t.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">${a(n("risk"))}：${Pn(t.risk)}</p>`:""}
      </div>`}).join("")}function Sd(){return`
    <tr>
      <th>${T("ticker",n("ticker"))}</th>
      <th>${a(n("name"))}</th>
      <th>${a(n("price"))}</th>
      <th>${T("dayPct",n("dayPct"))}</th>
      <th>${T("rs","RS")}／${T("priorClose",n("priorClose"))}</th>
      <th>${T("pct5d",n("pct5d"))}</th>
      <th>${T("pct1m",n("pct1m"))}</th>
      <th>${T("volRatio",n("volRatio"))}</th>
      <th>${a(n("ma"))}</th>
      <th>${T("screening",n("screening"))}</th>
      <th>${a(n("reason"))}</th>
    </tr>`}function Es(e){return e?e.market==="TW"||e.market==="US"?e.market:String(e.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function Ds(e,t){return e.length?`<div class="top5-grid">${e.map((s,o)=>bd(s,o+1)).join("")}</div>`:`<div class="empty-state">${a(n("emptyTop",{market:t}))}</div>`}function Cn(){return[{id:"today",label:n("navToday"),hash:"today"},{id:"logic",label:n("navLogic"),hash:"logic"},{id:"research",label:n("navResearch"),hash:"research"},{id:"strategies",label:n("navStrategies"),hash:"strategies"},{id:"options",label:n("navOptions"),hash:"options"},{id:"earnings",label:n("navEarnings"),hash:"earnings"},{id:"lookup",label:n("navLookup"),hash:"lookup"},{id:"soxl",label:n("navSoxl"),hash:"soxl"},{id:"txf",label:n("navTxf"),hash:"txf"},{id:"podcasts",label:n("navPodcasts"),hash:"podcasts"},{id:"letters",label:n("navLetters"),hash:"letters"},{id:"manbao",label:n("navManbao"),hash:"manbao"},{id:"paper",label:n("navPaper"),hash:"paper"}]}const kd=["today","strategies","paper","research"],Ln=["logic","options","earnings","lookup","soxl","txf","podcasts","letters","manbao"],ba={today:"today",logic:"logic",research:"research",strategies:"strategies",options:"options",earnings:"earnings",lookup:"lookup",quote:"lookup",soxl:"soxl",txf:"txf","futures-tw":"txf",台指期:"txf",臺指期:"txf","tx-futures":"txf",podcasts:"podcasts",podcast:"podcasts",名人podcast:"podcasts","celebrity-podcasts":"podcasts",godzilla:"podcasts",jensen:"podcasts",xiaojun:"podcasts",whynottv:"podcasts","zhang-junan":"podcasts",zhangjunan:"podcasts",張濬安:"podcasts",whynot:"podcasts",huang:"podcasts","jensen-huang":"podcasts",黃仁勳:"podcasts",nvidia:"podcasts",letters:"letters",berkshire:"letters",buffett:"letters",股東信:"letters",股东信:"letters",巴菲特:"letters",manbao:"manbao","mann-pro":"manbao",曼報:"manbao",曼报:"manbao",曼報pro:"manbao",曼報Pro:"manbao",paper:"paper",social:"today",danmaku:"today","social-digest":"today",giscus:"today",help:"logic",glossary:"logic",bookshelf:"research",library:"research",研究:"research","us-options":"options",選擇權:"options",美股選擇權:"options",mcmillan:"options",讀財報:"earnings",reports:"earnings","us-earnings":"earnings",財報:"earnings",查股:"lookup",個股:"lookup","stock-lookup":"lookup","us-quote":"lookup","tw-quote":"lookup","soxl-desk":"soxl",semiconductor:"soxl",半導體:"soxl",三倍半導體:"soxl",台指期貨:"txf",臺股期貨:"txf",哥吉拉:"podcasts",哥吉拉心法:"podcasts","godzilla-playbook":"podcasts",playbook:"podcasts",黃仁勳:"podcasts","jen-hsun":"podcasts",etl:"podcasts",method:"logic",邏輯:"logic"},Sa={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',logic:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 2h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v5h-2v-5z"/></svg>',research:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8V12zm0 3.5h8V17H8v-1.5zm0 3.5h5V20.5H8V19z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',options:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 12a8 8 0 1 1 16 0H4zm8-6a6 6 0 0 0-5.65 4h11.3A6 6 0 0 0 12 6zm0 12a6 6 0 0 0 5.65-4H6.35A6 6 0 0 0 12 18z"/></svg>',earnings:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h6v-2H7z"/></svg>',lookup:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10 3a7 7 0 0 1 5.47 11.34l4.1 4.09-1.42 1.42-4.09-4.1A7 7 0 1 1 10 3zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>',soxl:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 17.25 9.5 9l3.5 4.5L17 8l4 9.25H3zM5 19h14v2H5v-2z"/></svg>',txf:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 18h16v2H4v-2zm1.5-3.5 3.2-4.2 2.8 3.3L16 8l4 6.5H5.5zM7 4h2v2H7V4zm4 0h2v2h-2V4zm4 0h2v2h-2V4z"/></svg>',podcasts:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 0 0-9 9v7a2 2 0 0 0 2 2h3v-8H7v-1a5 5 0 0 1 10 0v1h-1v8h3a2 2 0 0 0 2-2v-7a9 9 0 0 0-9-9zm-4 11v5H5v-5h3zm11 5h-3v-5h3v5zM12 7a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3z"/></svg>',letters:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm8 8.2L5.2 6.5 4 7.9l8 6.2 8-6.2-1.2-1.4L12 12.2z"/></svg>',manbao:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3h11l4 4v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm10 1.5V8h3.5L15 4.5zM7 11h10v1.6H7V11zm0 3.4h10v1.6H7v-1.6zM7 18h6v1.6H7V18z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',more:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 10h4v4H5v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4z"/></svg>'},mt={godzilla:"godzilla","godzilla-playbook":"godzilla",playbook:"godzilla",哥吉拉:"godzilla",哥吉拉心法:"godzilla",jensen:"jensen",huang:"jensen","jensen-huang":"jensen",nvidia:"jensen","jen-hsun":"jensen",etl:"jensen",黃仁勳:"jensen",黄仁勋:"jensen",gooaye:"gooaye",股癌:"gooaye",xiaojun:"xiaojun",張小珺:"xiaojun",张小珺:"xiaojun",whynottv:"whynottv",whynot:"whynottv",WhynotTV:"whynottv","zhang-junan":"zhang-junan",zhangjunan:"zhang-junan",張濬安:"zhang-junan",张浚安:"zhang-junan"};function Wt(){const s=(location.hash||"").replace(/^#/,"").split(/[/?&]/).filter(Boolean).map(p=>{try{return decodeURIComponent(p)}catch{return p}}),o=s[0]||"",i=o.toLowerCase();if(mt[i]||mt[o])return{view:"podcasts",sub:mt[i]||mt[o],parts:s.slice(1)};const r=ba[i]||ba[o]||"today",l=s.slice(1);let c=l[0]||null;r==="podcasts"&&c&&(c=Ra(c));let d=null;if(r==="letters"){const p=l.find(h=>/^\d{4}$/.test(h)),u=l.some(h=>String(h).toLowerCase()==="special");u?d="special":p&&(d=p);const g=u?"special":p||c;g&&(c=va(g))}if(r==="manbao"&&c&&(c=Oa(c)),r==="research"&&c){if(c.toLowerCase()==="shelf"&&l[1])return{view:r,sub:"menu",shelf:l[1],parts:l};c=Ca(c)}return{view:r,sub:c,parts:l,shelf:null,letterYear:d}}function $d(){return Wt().view}function An(e,t){const s=Sa[e.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${e.id}"
        data-variant="${t}"
        aria-label="${a(e.label)}"
        aria-current="false">
        <span class="nav-icon">${s}</span>
        <span class="nav-label">${a(e.label)}</span>
      </button>`}function Td(e){return Cn().map(t=>An(t,e)).join("")}function wd(){const e=Object.fromEntries(Cn().map(i=>[i.id,i])),t=kd.map(i=>An(e[i],"mobile")).join(""),s=`
      <button type="button"
        class="nav-item nav-more-btn"
        data-nav-more
        data-variant="mobile"
        aria-label="${a(n("navMore"))}"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="nav-more-sheet"
        aria-current="false">
        <span class="nav-icon">${Sa.more}</span>
        <span class="nav-label">${a(n("navMore"))}</span>
      </button>`,o=Ln.map(i=>{const r=e[i],l=Sa[i]||"";return`
        <button type="button"
          class="nav-more-item"
          data-nav="${r.id}"
          aria-label="${a(r.label)}"
          aria-current="false">
          <span class="nav-icon">${l}</span>
          <span class="nav-label">${a(r.label)}</span>
        </button>`}).join("");return`
    <nav class="nav-bottom" aria-label="${a(n("navMain"))}">
      ${t}
      ${s}
    </nav>
    <div id="nav-more-sheet" class="nav-more-sheet" hidden>
      <button type="button" class="nav-more-backdrop" data-more-close aria-label="${a(n("navMoreClose"))}"></button>
      <div class="nav-more-panel" role="dialog" aria-modal="true" aria-label="${a(n("navMore"))}">
        <div class="nav-more-grabber" aria-hidden="true"></div>
        <div class="nav-more-head">
          <h2 class="nav-more-title">${a(n("navMore"))}</h2>
          <button type="button" class="nav-more-close" data-more-close aria-label="${a(n("navMoreClose"))}">×</button>
        </div>
        <div class="nav-more-list">
          ${o}
        </div>
      </div>
    </div>`}function xd(e,t){const s=e.top5||[],o=e.us||[],i=e.tw||[],r=a(n("disclaimer")),l=Sd();return`
    <header class="site-chrome">
      <div class="chrome-row">
        <div class="chrome-brand">
          <img class="brand-mark" src="/Just-Math-and-Luck/logo.svg?v=4" width="40" height="40" alt="每日數學選股" decoding="async" />
          <div class="brand-text">
            <h1>${a(n("siteTitle"))}</h1>
            <p class="brand-meta"><span id="brand-asof">${a(n("dataAsOf"))} ${yd(e.asOf)}</span><span id="lq-live-suffix" class="lq-live-suffix" hidden aria-live="polite"></span></p>
          </div>
        </div>
        <div class="chrome-actions">
          ${Un()}
          <nav class="nav-desktop" aria-label="${a(n("navMain"))}">
            ${Td("desktop")}
          </nav>
        </div>
      </div>
      <p class="disclaimer-line" role="note">${r}</p>
      <div class="market-strip-wrap" aria-label="${a(n("marketQuotes"))}">
        <span class="market-strip-label">${a(n("hot"))}</span>
        ${vd(e.indices||{})}
      </div>
      ${yl()}
      ${Ml()}
    </header>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">${a(n("todayPicks"))}</h2>
        </header>
        ${Do(e.marketRegime)}
        <div class="tabs market-tabs" role="tablist" aria-label="${a(n("market"))}">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${T("usStock",n("usStock"))}（${o.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${T("twStock",n("twStock"))}（${i.length}）</button>
        </div>
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${a(n("usTop"))}</h2>
            ${Ds(s.filter(d=>Es(d)==="US"),n("usStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${a(n("usList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${l}</thead>
                <tbody>${As(o)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${Ms(o)}</div>
          </section>
        </div>
        <div class="panel" id="panel-tw" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${a(n("twTop"))}</h2>
            ${Ds(s.filter(d=>Es(d)==="TW"),n("twStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${a(n("twList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${l}</thead>
                <tbody>${As(i)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${Ms(i)}</div>
          </section>
        </div>
      </div>
      <div class="view" id="view-logic" data-view="logic" hidden>
        <span id="logic" class="view-anchor" tabindex="-1"></span>
        ${jo(e)}
      </div>

      <div class="view" id="view-research" data-view="research" hidden>
        <span id="research" class="view-anchor" tabindex="-1"></span>
        ${ci()}
      </div>

      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span id="strategies" class="view-anchor" tabindex="-1"></span>
        ${Wo()}
      </div>

      <div class="view" id="view-options" data-view="options" hidden>
        <span id="options" class="view-anchor" tabindex="-1"></span>
        ${Di()}
      </div>

      <div class="view" id="view-earnings" data-view="earnings" hidden>
        <span id="earnings" class="view-anchor" tabindex="-1"></span>
        ${qi()}
      </div>

      <div class="view" id="view-lookup" data-view="lookup" hidden>
        <span id="lookup" class="view-anchor" tabindex="-1"></span>
        <span id="quote" class="view-anchor" tabindex="-1"></span>
        ${pr()}
      </div>

      <div class="view" id="view-soxl" data-view="soxl" hidden>
        <span id="soxl" class="view-anchor" tabindex="-1"></span>
        ${fr()}
      </div>

      <div class="view" id="view-txf" data-view="txf" hidden>
        <span id="txf" class="view-anchor" tabindex="-1"></span>
        <span id="futures-tw" class="view-anchor" tabindex="-1"></span>
        ${Lr()}
      </div>

      <div class="view" id="view-podcasts" data-view="podcasts" hidden>
        <span id="podcasts" class="view-anchor" tabindex="-1"></span>
        <span id="godzilla" class="view-anchor" tabindex="-1"></span>
        <span id="jensen" class="view-anchor" tabindex="-1"></span>
        <span id="xiaojun" class="view-anchor" tabindex="-1"></span>
        <span id="whynottv" class="view-anchor" tabindex="-1"></span>
        <span id="zhang-junan" class="view-anchor" tabindex="-1"></span>
        ${Jc()}
      </div>

      <div class="view" id="view-letters" data-view="letters" hidden>
        <span id="letters" class="view-anchor" tabindex="-1"></span>
        ${rd()}
      </div>

      <div class="view" id="view-manbao" data-view="manbao" hidden>
        <span id="manbao" class="view-anchor" tabindex="-1"></span>
        ${hd()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span id="paper" class="view-anchor" tabindex="-1"></span>
        ${io(t)}
      </div>
    </main>

    ${wd()}

    <p class="site-footer">${a(n("footer"))}</p>
  `}let He=null;function Pd(){try{return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function xt(e,t){const s=e.querySelector("#nav-more-sheet"),o=e.querySelector("[data-nav-more]");if(!s||!o)return;if(He&&(clearTimeout(He),He=null),t){s.hidden=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.hidden||s.classList.add("is-open")})}),o.setAttribute("aria-expanded","true"),document.body.classList.add("nav-more-open");return}const i=s.classList.contains("is-open")||!s.hidden;if(s.classList.remove("is-open"),o.setAttribute("aria-expanded","false"),document.body.classList.remove("nav-more-open"),!i||Pd()){s.hidden=!0;return}He=setTimeout(()=>{s.hidden=!0,He=null},340)}function Cd(e,t){const s=Ln.includes(t);e.querySelectorAll(".nav-item[data-nav]").forEach(i=>{const r=i.dataset.nav===t;i.classList.toggle("is-active",r),i.setAttribute("aria-current",r?"page":"false")});const o=e.querySelector("[data-nav-more]");o&&(o.classList.toggle("is-active",s),o.setAttribute("aria-current",s?"true":"false")),e.querySelectorAll(".nav-more-item").forEach(i=>{const r=i.dataset.nav===t;i.classList.toggle("is-active",r),i.setAttribute("aria-current",r?"page":"false")})}function Mn(e,t,{updateHash:s=!0,scrollTop:o=!0}={}){const i=ba[t]||"today";if(e.querySelectorAll(".view").forEach(r=>{const l=r.dataset.view===i;r.hidden=!l,r.classList.toggle("is-active",l)}),Cd(e,i),xt(e,!1),s){const r=`#${i}`;location.hash!==r&&history.replaceState(null,"",r)}return o&&window.scrollTo(0,0),i}let ft=null,yt=null;function Ld(e){const t=(r,l)=>Mn(e,r,l);e.querySelectorAll(".nav-item[data-nav], .nav-more-item[data-nav]").forEach(r=>{r.addEventListener("click",()=>t(r.dataset.nav))}),e.querySelectorAll("[data-jump]").forEach(r=>{r.addEventListener("click",()=>t(r.dataset.jump))});const s=e.querySelector("[data-nav-more]");s&&s.addEventListener("click",()=>{const r=s.getAttribute("aria-expanded")==="true";xt(e,!r)}),e.querySelectorAll("[data-more-close]").forEach(r=>{r.addEventListener("click",()=>xt(e,!1))}),yt&&window.removeEventListener("keydown",yt),yt=r=>{r.key==="Escape"&&xt(e,!1)},window.addEventListener("keydown",yt),ft&&window.removeEventListener("hashchange",ft),ft=()=>{const r=Wt();t(r.view,{updateHash:!1}),Ad(r)},window.addEventListener("hashchange",ft);const o=Wt(),i=!!(o.sub||o.shelf);return t(o.view,{updateHash:!i,scrollTop:!1}),{go:t}}function Ad(e){e&&(e.view==="podcasts"&&Xc(e.sub||"menu",{syncUrl:!1}),e.view==="research"&&mi(e.sub||"menu",{syncUrl:!1,shelf:e.shelf||null}),e.view==="letters"&&Ut(e.sub||"menu",{syncUrl:!1,year:e.letterYear}),e.view==="manbao"&&wn(e.sub||"menu",{syncUrl:!1}))}function Md(e){const t=e.querySelector(".index-marquee");if(!t||t.dataset.marqueeBound==="1")return;t.dataset.marqueeBound="1";const s=()=>t.classList.add("is-paused"),o=()=>t.classList.remove("is-paused");t.addEventListener("pointerdown",s),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.addEventListener("pointerleave",o),t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),t.addEventListener("touchcancel",o,{passive:!0})}function Ed(e){const t=e.querySelectorAll(".tab-btn");t.forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.tab;t.forEach(i=>{const r=i.dataset.tab===o;i.classList.toggle("active",r),i.setAttribute("aria-selected",r?"true":"false")}),e.querySelectorAll(".panel").forEach(i=>{i.classList.toggle("active",i.id===`panel-${o}`)})})})}let Fa=null,En=null;async function Dn(e){const t=Fa,s=En,o=$d();e.innerHTML=xd(t,s),document.title=n("siteTitle"),Bs(),Ld(e);const i=Wt(),r=!!(i.sub||i.shelf);Mn(e,o,{updateHash:!r,scrollTop:!1}),Ed(e),Md(e),await bl("#us-macro-strip"),await Dl("#tw-macro-strip"),ro(e),s&&await la(e,s),Wn(e),await Jo("#xq-root"),await fi("#rl-root",void 0,{category:i.view==="research"&&i.sub||"menu",shelf:i.view==="research"?i.shelf:null,syncUrl:!1}),await zi("#uo-root"),await Ii("#er-root"),ur("#lk-root"),await yr("#sx-root"),await Ar("#txf-root"),Yc("#pc-root",{category:i.view==="podcasts"&&i.sub||"menu",syncUrl:!1}),await ld("#lt-root",{category:i.view==="letters"&&i.sub||"menu",year:i.view==="letters"?i.letterYear:void 0,syncUrl:!1}),await md("#mb-root",{category:i.view==="manbao"&&i.sub||"menu",syncUrl:!1}),il(e)}async function Dd(){const e=document.getElementById("app");!e||!Fa||(bn(),await Dn(e))}async function ka(){const e=document.getElementById("app");Bs();const t=document.getElementById("loading");t&&(t.textContent=n("loading"));try{const s=await fetch(fd);if(!s.ok)throw new Error(`HTTP ${s.status}`);Fa=await s.json(),En=await lo(),await Dn(e),ka._langHooked||(ka._langHooked=!0,Rn(()=>{Dd()}))}catch(s){e.innerHTML=`<div class="error">${a(n("loadError",{msg:s.message}))}</div>`}}function zd(){if(!("serviceWorker"in navigator))return;const e="/Just-Math-and-Luck/",t=`${e}sw.js`,s="jml-sw-controller-reload";navigator.serviceWorker.addEventListener("controllerchange",()=>{try{if(sessionStorage.getItem(s)==="1"){sessionStorage.removeItem(s);return}sessionStorage.setItem(s,"1")}catch{}window.location.reload()}),window.addEventListener("load",()=>{navigator.serviceWorker.register(t,{scope:e}).catch(()=>{})})}const zs="jml-pwa-hint-dismissed";function jd(){try{if(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)return!0}catch{}return!1}function Nd(){return/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")}function Rd(){var i;if(jd()||!Nd())return;try{if(localStorage.getItem(zs)==="1")return}catch{return}if(document.getElementById("pwa-install-hint"))return;const e=document.createElement("div");e.id="pwa-install-hint",e.className="pwa-install-hint",e.setAttribute("role","status");const s=/iPhone|iPad|iPod/i.test(navigator.userAgent||"")?"可「分享 → 加入主畫面」離線開啟":"可加入主畫面，離線也能開";e.innerHTML=`<span class="pwa-install-hint__text">${s}</span><button type="button" class="pwa-install-hint__close" aria-label="關閉">×</button>`,document.body.appendChild(e);const o=()=>{e.remove();try{localStorage.setItem(zs,"1")}catch{}};(i=e.querySelector(".pwa-install-hint__close"))==null||i.addEventListener("click",o),window.setTimeout(()=>{e.isConnected&&e.classList.add("pwa-install-hint--fade")},8e3),window.setTimeout(()=>{e.isConnected&&o()},12e3)}zd();ka();window.setTimeout(()=>{try{Rd()}catch{}},2500);
