(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}})();const ya=[{id:"zh-Hant",label:"繁體中文",short:"繁"},{id:"en",label:"English",short:"EN"},{id:"zh-Hans",label:"简体中文",short:"简"},{id:"ja",label:"日本語",short:"日"}],va=ya.map(t=>t.id),ka="site-lang",dt="zh-Hant",pt=new Set;function es(){try{const e=localStorage.getItem(ka);if(e&&va.includes(e))return e}catch{}const t=typeof navigator<"u"&&navigator.language||"";return/^zh[-_]?(CN|Hans|SG)/i.test(t)?"zh-Hans":/^zh/i.test(t)?"zh-Hant":/^ja/i.test(t)?"ja":/^en/i.test(t)?"en":dt}let W=es();function Je(){return W}function ts(t){if(!va.includes(t)||t===W)return!1;W=t;try{localStorage.setItem(ka,t)}catch{}return typeof document<"u"&&(document.documentElement.lang=t==="zh-Hant"?"zh-Hant":t==="zh-Hans"?"zh-Hans":t),pt.forEach(e=>{try{e(t)}catch{}}),!0}function as(t){return pt.add(t),()=>pt.delete(t)}function z(){return W==="en"?"en-US":W==="ja"?"ja-JP":W==="zh-Hans"?"zh-CN":"zh-TW"}function Sa(){typeof document>"u"||(document.documentElement.lang=W==="zh-Hant"?"zh-Hant":W==="zh-Hans"?"zh-Hans":W)}const et={siteTitle:"每日數學選股",loading:"載入中…",disclaimer:"投資涉及風險，資訊僅供參考，非投資建議",footer:"投資涉及風險，資訊僅供參考，非投資建議",dataAsOf:"資料",taipei:"（台北）",navMain:"主要導覽",navToday:"今日",navStrategies:"策略",navPaper:"模擬",navMore:"更多",navMoreClose:"關閉",navLogic:"邏輯",researchTitle:"研究",navResearch:"研究",navOptions:"選擇權",navEarnings:"讀財報",earningsTitle:"讀財報",earningsLead:"美股 Magnificent 7 與高關注財報摘要：公司在做什麼、關鍵數字、下一步看什麼——白話、每日更新，非投資建議。",earningsDisclaimer:"非投資建議。數字來自公開 Yahoo Finance；缺欄略過不顯示，不構成個人化投資建議。",earningsUsFocus:"以美股為主",earningsTwStub:"台股財報稍後開放（規劃中）",earningsSelectionTitle:"關注名單規則：",earningsSelectionFallback:"市值最大且未來 14 日內有財報的非 Mag7 大型股；或 Yahoo 熱門成交；不足則以 45 日內行事曆亮點補齊。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——上次財報與下次日期（已知時）。",earningsMag7Badge:"Mag7",earningsHotTitle:"高關注／熱門財報",earningsHotLead:"依上方規則挑選；標籤說明為何入選。",earningsHotEmpty:"目前視窗內暫無符合條件的標的",earningsWhatItDoes:"這家公司在做什麼",earningsWhatToWatch:"下一步看什麼",earningsNextDate:"下次財報",earningsLastEps:"上次 EPS",earningsRevYoy:"營收 YoY",earningsEpsYoy:"獲利 YoY",earningsPe:"本益比",earningsForwardPe:"預估本益",earningsEstimate:"預估",earningsDataMissing:"資料不足",earningsTagPrimary:"14 日內・大型",earningsTagActives:"熱門成交・14 日內",earningsTagRecent:"近日已公布",earningsTagFallback:"45 日行事曆亮點",earningsTagOther:"關注",earningsPartialBlocker:"部分資料受阻",earningsRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",earningsLoadError:"無法載入財報摘要（{msg}）",earningsEmpty:"財報摘要整理中，請稍後再看。",navLookup:"查股",lookupTitle:"查股／個股",lookupLead:"輸入美股或台股代碼，查看公司簡介、即時報價、財報重點與官方財報連結——白話整理；行情來自 Yahoo，官方申報連至 SEC／公開資訊觀測站。非投資建議。",lookupDisclaimer:"非投資建議。行情數字來自公開 Yahoo Finance；官方財報連結連至 SEC EDGAR／公開資訊觀測站。缺欄不顯示、不編造。即時抓取可能受網路或來源限制。",lookupInputLabel:"股票代碼",lookupPlaceholderUs:"例如 AAPL",lookupPlaceholderTw:"例如 2330 或 2330.TW",lookupHintUs:"美股：輸入代號如 AAPL、MSFT、NVDA",lookupHintTw:"台股：四碼代號如 2330（自動加 .TW；上櫃可試 .TWO）",lookupSearch:"查詢",lookupIdle:"輸入代碼後按查詢，即可查看報價與財報摘要。",lookupLoading:"正在向 Yahoo Finance 抓取…",lookupEmptyInput:"請輸入股票代碼",lookupInvalid:"代碼格式無法辨識。美股如 AAPL；台股如 2330 或 2330.TW",lookupNotFound:"找不到此代碼的報價。請確認市場分頁（美股／台股）與代碼是否正確。",lookupError:"查詢失敗（{msg}）",lookupBusiness:"公司在做什麼",lookupQuoteStats:"報價與關鍵數據",lookupFinancials:"財務摘要",lookupEarnings:"財報重點",lookupPrevClose:"前收",lookupVolume:"成交量",lookupDayRange:"今日區間",lookup52w:"52 週高低",lookupMarketCap:"市值",lookupEps:"每股盈餘",lookupBeta:"Beta",lookupDivYield:"殖利率",lookupRevenue:"營收",lookupGrossMargin:"毛利率",lookupProfitMargin:"淨利率",lookupEpsConsensus:"預估 EPS",lookupEpsSurprise:"EPS 驚喜",lookupSources:"來源",lookupPartial:"部分進階欄位暫無法取得（已顯示可得數字，未編造）。",lookupOfficialFilings:"官方財報",lookupOfficialFilingsLead:"以下連結通往官方申報與公開資訊；美股可另列近期 10-K／10-Q／8-K（公開可抓取時）。數字不編造。",lookupSourceOfficial:"官方來源",lookupSourceQuote:"行情來源",lookupSourceCompany:"公司網站",lookupSecEdgarSearch:"SEC EDGAR 公司申報查詢",lookupSecEdgarBrowse:"SEC EDGAR 公司瀏覽頁",lookupSecFormsFilter:"SEC 10-K／10-Q 等年季報篩選",lookupMopsFinancialBook:"公開資訊觀測站｜財務報告書",lookupMopsFinancialQuery:"公開資訊觀測站｜財務報告查詢頁",lookupMopsCompany:"公開資訊觀測站｜公司基本資料",lookupMopsMaterial:"公開資訊觀測站｜重大訊息",lookupTwseIsin:"證交所 ISIN／基本資料查詢",lookupTpexCompany:"櫃買中心｜公司資料",lookupYahooTwQuote:"Yahoo 奇摩股市（行情，非正式財報）",lookupCompanyWebsite:"公司官網",lookupInvestorRelations:"投資人關係／IR（公開資料）",lookupRecentFilings:"近期官方申報",lookupFilingForm:"表單",lookupFilingDate:"申報日",lookupFilingDoc:"文件",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"近期申報清單暫時無法載入（網路或來源限制）。",lookupFilingsListEmpty:"目前沒有可列示的近期 10-K／10-Q／8-K。",lookupFilingsLinksStillWork:"上方官方連結仍可開啟查閱。",lookupFilingsTwNote:"台股請以公開資訊觀測站（MOPS）為官方財報來源；下方亦附行情頁供對照。",lookupFilingsCikUnavailable:"尚無法對應 SEC CIK；仍可透過上方 EDGAR 以代號查詢。",navSoxl:"SOXL",soxlTitle:"SOXL 半導體槓桿",soxlLead:"Direxion 每日半導體多頭 3 倍 ETF：最新報價、異常／事件、相關新聞，以及 SEC N-PORT 持股權重與估算貢獻——白話整理，非投資建議。",soxlDisclaimer:"非投資建議。SOXL 為約 3 倍日槓桿 ETF，波動與虧損風險極高；持股權重來自 SEC N-PORT（非當日），貢獻度為估算。",soxlHeroLabel:"SOXL 最新報價",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正規收盤",soxlLeverageNote:"SOXL 目標約為 ICE Semiconductor Index 單日表現的 3 倍；隔夜與多日累積不可用簡單 3 倍推估。",soxlHoldingsAsOf:"持股權重截至",soxlHoldingsNotSameDay:"最新 N-PORT，非今日即時",soxlEventsTitle:"事件／異常",soxlNewsTitle:"相關新聞",soxlNewsEmpty:"暫無相關新聞",soxlHoldingsTitle:"持股與估算貢獻",soxlHoldingsLead:"權重來自 SEC N-PORT；現金與指數交換常佔大宗。貢獻 ≈ 權重 × 報酬（標示為估算，且未直接等於 3x ETF 點數）。",soxlHoldingsEmpty:"持股清單整理中，請稍後再看。",soxlColName:"標的",soxlColWeight:"權重",soxlColReturn:"日報酬",soxlColContrib:"估算貢獻",soxlColReasons:"白話原因",soxlContributionHint:"估算＝權重% × 報酬% ÷ 100（籃子百分點；SOXL 約 3× 日槓桿，不等於 ETF 點數）",soxlSourceN:"來源 {n}",soxlOverallTitle:"為何漲／為何跌",soxlWhyUp:"偏多時常見原因",soxlWhyDown:"偏空時常見原因",soxlRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",soxlLoadError:"無法載入 SOXL 桌面（{msg}）",navPodcasts:"名人podcast",podcastsTitle:"名人podcast",podcastsLead:"精選投資人／主持人公開訪談與 Podcast 框架整理：可掃讀論點、市場分欄、候選狀態標示清楚——非投資建議。",podcastsDisclaimer:"非投資建議。本區整理公開訪談與研究書庫已有資料；數字與做法標示來源，不構成個人化建議。數學閘門未通過者僅候選／觀察。",podcastsFeatured:"精選",podcastsStubBadge:"候選摘要",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（謝孟恭）",podcastsGooayeLead:"台灣市場／總經／風險／散戶心理 Podcast；集數重點整理自公開 RSS 節目指引（非逐字稿、非投資建議）。",podcastsGooayeMarket:"以台股為主 · 美／台分欄",podcastsGooayeStubNote:"輕量 stub：完整條目與可計算規則在研究書庫；此處不發明集數引言。",podcastsGooayePoint1:"先管風險與部位，再談單一標的故事",podcastsGooayePoint2:"護國神山供應鏈用籃子強弱看，不單壓一檔",podcastsGooayePoint3:"美股用利率方向當風險偏好代理；台股另算",podcastsGotoResearch:"到研究書庫看完整條目",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"分類選單",podcastsCategories:"名人podcast分類",podcastsMenuLead:"先選分類再進入內容——不把長文全部攤在同一頁。",podcastsOpenCategory:"開啟此分類",gooayeLibraryBadge:"集數庫",gooayeDisclaimer:"候選／觀察；數學閘關閉。標「已聽寫」者：下載公開音檔＋語音轉文字後撰寫股票重點分析。標「僅節目說明」者：僅 RSS／節目說明，未聽寫。主持人觀點、候選狀態；非投資建議。",gooayeLoading:"載入股癌集數庫…",gooayeLoadError:"無法載入集數庫（{msg}）",gooayeEpisodeCount:"共 {n} 集（公開 RSS）",gooayeAsOf:"資料截至 {date}（台北）",gooayeEmptyCount:"其中 {n} 集公開文字不足，僅列標題",gooayeSearchLabel:"搜尋集數",gooayeSearchPlaceholder:"標題、集數或關鍵字",gooayeSourceLine:"來源：",gooayeKeyPoints:"重點整理",gooayeNotesThin:"公開節目指引幾乎只有標題／短語，無更多可整理文字。",gooayeTeaserNote:"公開 show notes 偏短（常見為開場短語＋廣告）；以上僅整理可用的公開文字，未聽音檔、未發明內容。",gooayeListen:"收聽（SoundOn）",gooayeLoadMore:"再顯示 {n} 集（尚餘 {left}）",gooayeShowingAll:"已顯示全部 {n} 集",gooayeNoResults:"沒有符合的集數。",gooayeUntitled:"未命名集數",gooayeBadgeListened:"已聽寫",gooayeBadgeRssOnly:"僅節目說明",gooayeStockAnalysis:"股票重點分析（已聽寫）",gooayeRssTeaserToggle:"公開節目說明（RSS）",gooayeListenedAt:"聽寫於 {date}（台北）",gooayeListenedCount:"已聽寫 {n} 集",gooayeRssOnlyNote:"此集尚未聽音檔；以上僅整理公開 RSS／節目說明，非聽寫分析。",researchCatMenu:"分類選單",researchCategories:"研究分類",researchMenuLead:"先選類型／市場／狀態，再瀏覽該分類條目。",researchOpenCategory:"開啟此分類",researchCatBooks:"書籍",researchCatPapers:"論文",researchCatPodcasts:"Podcast",researchCatUs:"美股焦點",researchCatTw:"台股焦點",researchCatCandidate:"候選",researchCatWatch:"觀察中",researchBackMenu:"回分類選單",researchStatusFilters:"狀態",godzillaTitle:"哥吉拉",godzillaLead:"Threads 受訪者「哥吉拉」的美股框架整理：時間與健康、RSU 再配置、基本面、能力圈、稅務節奏、選擇權工具——白話卡片，非投資建議。",godzillaDisclaimer:"非投資建議。整理自公開訪談；數字與做法標示為受訪者自述，不構成個人化建議。數學閘門未通過，僅候選／觀察。",godzillaHeroLabel:"哥吉拉框架總覽",godzillaKicker:"候選框架 · 美股為主",godzillaTagline:"用健康的時間換自由；長股為核、選擇權為輔；稅務決定換倉節奏。",godzillaBadgeCandidate:"候選",godzillaBadgeWatch:"觀察中",godzillaUsFocus:"以美股為主",godzillaSelfReport:"受訪者自述",godzillaListenedBadge:"已聽寫",godzillaStockTitle:"股票重點分析（已聽寫）",godzillaStockLead:"依公開 YouTube 訪談音訊＋語音轉寫整理的受訪者觀點（候選／觀察；非投資建議）。",godzillaStock1:"時間與健康優先於再堆金錢／RSU；金錢買不回時間，退休目標會隨 RSU 累積而上修。",godzillaStock2:"美股科技薪資結構高度依賴 RSU；股價上漲會放大總報酬，也放大單一公司集中風險。",godzillaStock3:"進場時點：特斯拉较早布局自覺「可更早出場會賺更多」；Meta 約在相對低檔區間進入（受訪者自述）。",godzillaStock4:"下一波關注偏 B2C AI 應用落地；當下顯見案例如 Tesla FSD、Palantir，其餘仍在觀察。硬體／AI 資本開支仍在成長，但多數應用仍偏 B2B。",godzillaStock5:"即便看好 NVIDIA，也不主張把倉位壓在單一公司；美國 W2／稅務計算下，高薪＋集中持股需一起規劃。",godzillaStock6:"台股無資本利得稅 vs 美國稅負：流動性／進出方便是優點，稅制誘因不同，不能直接照搬美股玩法。",godzillaStockNote:"轉寫模型：faster-whisper small int8。來源影片公開可查；數字與標的均為訪談中受訪者觀點，候選／觀察。",godzillaSourceLabel:"來源",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"觀看 YouTube 訪談",godzillaThesesTitle:"核心論點",godzillaThesesLead:"十條可掃讀重點；細節皆為受訪者自述。",godzillaThesis1Title:"時間與健康重於再堆 RSU",godzillaThesis1Body:"退休目標常會膨脹（例如自述從約 3,000 萬美元調到 6,000 萬，再加上住房與子女）；停下來往往是身體撐不住。用健康的 40 多歲換旅行與自由，和 50–60 歲很不一樣。",godzillaThesis2Title:"美股 RSU 改變誘因",godzillaThesis2Body:"四年歸屬、與公司利益綁在一起；對比台股現金獎金較少用來買自家股票。",godzillaThesis3Title:"歸屬當日賣出、轉到信念標的",godzillaThesis3Body:"既得 RSU 當日賣出，再配置到有信念的名字（其例：NVDA），避免薪水＋未歸屬全押同一籃。",godzillaThesis4Title:"只看基本面",godzillaThesis4Body:"看營收／EPS 趨勢；忽略華爾街目標價；新聞噪音多半有害。",godzillaThesis5Title:"能力圈：硬體／科技",godzillaThesis5Body:"能力圈在硬體與科技——NVDA 權重最高；亦提 PLTR、AVGO、TSM；很少碰科技外。指數部位現在較小，終局想像多數在指數。",godzillaThesis6Title:"稅務決定換倉節奏",godzillaThesis6Body:"高 W2 收入時資本利得稅重；離職後可多年把個股輪換成指數、把稅負控在可接受範圍；賣出 Covered Call 可緩衝下跌。",godzillaThesis7Title:"選擇權是工具",godzillaThesis7Body:"多半當卖方（Covered Call／Cash-secured Put）；少數做多買權／LEAP，僅在恐慌或價格與基本面背離時；接受權利金可能歸零；從不裸賣。",godzillaThesis8Title:"Covered Call：被指派就延後",godzillaThesis8Body:"有被指派風險就往後換月（roll out）；不要為了小權利金去履約或賣掉核心持股；不舒服就少賣合約。",godzillaThesis9Title:"進場等趨勢",godzillaThesis9Body:"等 1–2 次乾淨財報確認趨勢，即使成本墊高也接受；有閒錢就持續買好公司；不追熱門明牌。",godzillaThesis10Title:"美／台觀察分欄",godzillaThesis10Body:"美股資本利得稅→傾向抱更久；台股無資本利得＋有證交稅→周轉較高、投機文化較重（僅觀察，非操作指令）。",godzillaChecklistTitle:"作法清單",godzillaChecklistLead:"可執行的自我檢查，不是下單清單。",godzillaCheck1:"物慾低；別讓「夠了」的數字一直往上漲。",godzillaCheck2:"長股為核心；選擇權是衛星／避險／偶爾槓桿。",godzillaCheck3:"部位：不借錢；接受不了歸零，就別碰選擇權。",godzillaCheck4:"選擇權優先流動性高的大型股。",godzillaCheck5:"終局配置草圖：約 80% 寬基指數，小袖口參與產業（＋偶爾小額買權）。",godzillaCheck6:"PLTR 例子：B2B 靠前線工程師變現；若商業成長失望就減碼。",godzillaOptionsTitle:"選擇權用法",godzillaOptionsLead:"卖方為主；买方極少、僅在極端偏離時。",godzillaOpt1:"主力：Covered Call、Cash-secured Put。",godzillaOpt2:"小部位長買權／LEAP：恐慌或價格脫離基本面時。",godzillaOpt3:"權利金可全部虧完；從不裸倉。",godzillaOpt4:"被指派風險：往後換月；核心持股不為小權利金賣出。",godzillaRsuTitle:"RSU、稅務與輪換",godzillaRsuLead:"誘因、分散與離職後的稅務節奏。",godzillaRsu1:"歸屬當日賣出 RSU，再配置到信念標的（例：NVDA）。",godzillaRsu2:"在職高稅負時少動大額已實現利得；離職後多年輪換個股→指數。",godzillaRsu3:"Covered Call 作為下跌緩衝，不是賭方向。",godzillaTwTitle:"台股觀察",godzillaTwLead:"與美股框架分開；僅文化／稅制觀察。",godzillaTwBody:"美股有資本利得稅，傾向長期持有；台股無資本利得稅、有證交稅，周轉與短線文化較明顯。此頁主軸仍是美股框架，台股僅作對照，不寫進正式篩選。",godzillaGateNote:"尚未寫進正式篩選",godzillaGateDetail:"狀態：候選／strategyCandidate=watch。數學閘門關閉——未接入即時篩選器或模擬交易；僅供閱讀與對照。",jensenTitle:"黃仁勳／Jensen Huang",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公開演講整理：視角、需求與摩爾定律、文化、現金現實、再發明——候選／觀察，非投資建議。",jensenDisclaimer:"非投資建議。整理自 Stanford Online 公開演講（約 2009；YouTube 2011 上傳）；論點來自講者自述主題，不構成個人化建議。數學閘門未通過，僅候選／觀察。",jensenHeroLabel:"黃仁勳演講重點",jensenKicker:"候選演講 · 美股科技／半導體創業",jensenTagline:"視角勝過空泛「願景」；用文化與再發明撐住長週期公司建設。",jensenUsFocus:"以美股／科技為主",jensenTalkBadge:"公開演講",jensenListenedBadge:"已聽寫",jensenStockTitle:"股票／事業重點（已聽寫）",jensenStockLead:"依公開 Stanford ETL 訪談影片音訊＋語音轉寫整理（約2009；歷史觀點，非當下財報）。候選／觀察；非投資建議。",jensenStock1:"創業敘事（1993）：押注 PC＋3D／遊戲會成大市場；VC／長輩當時不信「為了打遊戲開公司」。",jensenStock2:"競爭：消費級3D一度湧入數十～上百家；NVIDIA自述最終成僅存的電腦繪圖公司——關鍵是看懂事業本質（半導體／Moore's Law 如競爭律）與持續重塑，而非只靠執行。",jensenStock3:"可程式著色器轉型：主動吞噬自己成功的固定功能產品；第一代幾乎拖垮公司，但自認不做會死於 Moore's Law 節奏。",jensenStock4:"資源配置：競爭決定價格，CEO決定要不要接案；看關鍵資源相對市場需求與機會成本，不只會計成本。",jensenStock5:"文化：創新需容忍計算過的失敗；新創定義＝幾乎一直快倒閉。通用化 GPU（瑞士刀）有偏離利基風險，卻是延長產業壽命的路徑。",jensenStock6:"時間錨點：本場為歷史談（預現代AI訓練熱潮），勿直接外推今日資料中心財報。NVIDIA為講者公司；候選／觀察。",jensenStockNote:"轉寫：faster-whisper small int8（en）。來源 YouTube Xn1EsFe7snQ／Stanford ETL。歷史訪談觀點。",jensenMeta:"Stanford Online · STVP ETL · 約 1:03:38 · 上傳 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"觀看 YouTube 演講",jensenOpenYoutube:"在 YouTube 開啟完整影片",jensenEmbedTitle:"Jen-Hsun Huang：Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 相關剪輯",jensenHighlightsTitle:"演講重點（白話）",jensenHighlightsLead:"五條可掃讀主題；僅整理公開演講中反覆出現的論點，非逐字稿。",jensenH1Title:"視角，而非空泛「願景」",jensenH1Body:"人人都有視角。NVIDIA 早期押注：個人電腦加上便宜的 3D 會打開遊戲市場（後來也談到 Keyhole→Google Earth），當時對許多 VC 而言市場幾乎是零。",jensenH2Title:"無窮需求與摩爾定律",jensenH2Body:"新類別尚未被定價時，有時要暫時忽略顧客回饋；先 rinse-and-repeat，再在「夠好」扼殺媒介前重新發明（固定功能→可程式著色器／GeForce FX 近死經驗、CG 語言）。",jensenH3Title:"文化：敢冒算過的風險",jensenH3Body:"創新需要計算過的風險、容忍快速失敗、智識誠實、願意改道；動機是熱情與目的，而非「把公司賣掉」。",jensenH4Title:"現金與新創現實",jensenH4Body:"永遠在募資、省錢或賺錢；新創幾乎總是瀕臨倒閉。VC 更押人與夠大的市場，而非完美商業計畫。",jensenH5Title:"再發明：成功也要拆掉重建",jensenH5Body:"每一次成功終須拆解再建；黃仁勳談的是長視野公司建設，不是連續翻轉出場。",jensenTwTitle:"美／台分欄（僅脈絡）",jensenTwLead:"本條目市場主軸為美股科技／半導體公司建設；台灣僅作供應鏈脈絡，不發明台股標的。",jensenTwBody:"NVDA 作為美股半導體／運算平台公司，供應鏈與台灣晶圓製造、封測生態高度相關——此處僅作產業脈絡註記，不列台股清單，也不寫進正式篩選。",jensenGateNote:"尚未寫進正式篩選",jensenGateDetail:"狀態：候選／strategyCandidate=watch。數學閘門關閉——未接入即時篩選器或模擬交易；僅供閱讀與對照。",jensenWatchCta:"在 YouTube 觀看",jensenEmbedBlockedNote:"此演講由擁有者設定為僅能在 YouTube 觀看（無法於本站內嵌播放）。",optionsTitle:"美股選擇權",optionsLead:"以 McMillan《選擇權策略完全手冊》策略族為主：先看波動與風險形狀，再用公開 Yahoo 鏈結學習——非投資建議。",optionsDisclaimer:"非投資建議；選擇權風險高。僅供教育與公開數據篩選，不構成個人化下單建議。",optionsBookBadge:"這本書",optionsBookCite:"主要參考書",optionsBookLead:"Lawrence G. McMillan《選擇權策略完全手冊》增訂第五版：依看法與波動高低對應策略族（原創摘要，非原文）。",optionsBookFallbackTitle:"選擇權策略完全手冊（McMillan）",optionsGotoResearch:"到研究書庫看完整條目",optionsUsOnly:"僅美股",optionsQualityTitle:"標的輕量財報檢核",optionsQualityLead:"次要濾網：本益、淨值、負債、ROE、營收／獲利趨勢。缺欄略過；不作薦股。",optionsViewTitle:"選擇權觀點（McMillan）",optionsViewLead:"公開期權鏈：ATM 隱含波動、歷史波動、量能偏向；策略族為教育說明。",optionsMcmillanFirst:"先對齊波動高低與風險形狀，再想策略族——不是先猜漲跌再硬套。",optionsPe:"本益比",optionsPb:"股價淨值",optionsDebt:"負債／權益",optionsRoe:"ROE",optionsRevTrend:"營收趨勢",optionsEarnTrend:"獲利趨勢",optionsGate:"品質閘",optionsGatePass:"通過",optionsGateWatch:"觀察",optionsGateFail:"偏弱",optionsGateIncomplete:"資料不足",optionsDataMissing:"資料不足",optionsForwardPe:"預估本益",optionsTrendUp:"成長約 {pct}%",optionsTrendDown:"下滑約 {pct}%",optionsTrendFlat:"大致持平 {pct}%",optionsAtmIv:"ATM 隱含波動",optionsHv:"歷史波動（約 1 月）",optionsIvHv:"IV／HV",optionsVolRegime:"波動狀態",optionsRegimeIvRich:"隱含偏高",optionsRegimeIvCheap:"隱含偏低",optionsRegimeIvFair:"大致均衡",optionsRegimeIvOnly:"僅有 IV",optionsCallPutVol:"買權／賣權成交量",optionsAtmStrike:"近價履約價",optionsExpiry:"到期日",optionsSkewPutHeavy:"賣權量較重",optionsSkewCallHeavy:"買權量較重",optionsSkewBalanced:"量能大致均衡",optionsEduSetups:"策略族（教育）",optionsEduSetupsLead:"依看法＋波動狀態挑選家族；綠底表示較常對齊目前 IV／HV 狀態（仍非建議）。",optionsSetupCoveredCall:"備兌買權（Covered Call）",optionsSetupCoveredCallBody:"已持有股票時賣出買權，換取權利金；上漲空間被履約價「蓋住」。",optionsSetupCoveredCallWarn:"最大利潤有天花板；大跌時股票虧損仍在。",optionsSetupProtectivePut:"保護性賣權（Protective Put）",optionsSetupProtectivePutBody:"持股同時買進賣權，像買保險：下跌有地板，但要付保費。",optionsSetupProtectivePutWarn:"保險成本會吃掉報酬；若波動已很貴，保費更痛。",optionsSetupVertical:"垂直價差（Vertical）",optionsSetupVerticalBody:"同到期、不同履約價的買權或賣權組合，把最大損益框在可計算區間。",optionsSetupVerticalWarn:"方向看錯仍會虧；好處是虧損有上限。",optionsSetupCalendar:"日曆／對角價差（Calendar / Diagonal）",optionsSetupCalendarBody:"不同到期的選擇權組合，常用來表達「時間流逝」或波動變化看法。",optionsSetupCalendarWarn:"對波動與時間敏感；形狀會隨市價移動改變。",optionsSetupStraddle:"跨式／勒式（Straddle / Strangle）",optionsSetupStraddleBody:"同時買（或賣）買權與賣權，押「大波動」或「波動不夠」。",optionsSetupStraddleWarn:"買方需要夠大的移動；賣方面臨兩側風險。",optionsSetupButterfly:"蝶式（Butterfly）",optionsSetupButterflyBody:"多履約價組合，押價格收斂在中間附近；利潤區通常很窄。",optionsSetupButterflyWarn:"甜蜜點很窄；錯過中間就可能接近最大虧損。",optionsSetupVolAligned:"與目前波動狀態較常一起討論",optionsSetupVolNotAligned:"與目前波動狀態較不契合（仍可學習）",optionsRiskShape:"風險形狀（白話）",optionsNoSetups:"暫無策略族說明",optionsPickTicker:"請選擇上方美股代碼",optionsChainBlocked:"期權鏈暫時無法取得",optionsPartialBlocker:"部分欄位不完整",optionsRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",optionsLoadError:"無法載入選擇權快照（{msg}）",optionsEmpty:"尚無美股樣本——請先跑 fetch-us-options",optionsGlossaryTitle:"小詞典（不用公式）",optionsTermDelta:"Delta（方向敏感度）",optionsDefDelta:"價格漲跌時，選擇權大概會跟多少。數字愈靠近 1 或 −1，跟現貨愈緊。",optionsTermIv:"隱含波動 IV",optionsDefIv:"市場「現在願意付多少保費」換算成的波動預期。愈高通常選擇權愈貴。",optionsTermHv:"歷史波動 HV",optionsDefHv:"過去一段時間股價實際晃動有多大，用來和 IV 對照。",optionsTermAtm:"ATM（近價）",optionsDefAtm:"履約價最靠近現價的合約，常拿來當波動溫度計。",optionsTermSkew:"量能偏向",optionsDefSkew:"買權與賣權成交量誰比較多，粗看市場偏保險還是偏追漲。",optionsTermProb:"機率（教育）",optionsDefProb:"只談「比較可能／比較少見」的直覺，不保證結果，也不給個人化勝率。",researchLead:"書單與論文：標題 → 摘要 → 重點作法 → 是否納入策略候選",researchMathGateBanner:"正式納入策略需數學閘門通過（目前未過）— 僅候選",researchMathGate:"數學閘門",researchMathGateDefault:"尚未通過數學閘門",researchFormulas:"可程式化公式",researchTakeaways:"重點作法",researchNoTakeaways:"尚無重點作法",researchSources:"來源",researchFilters:"篩選",researchFilterAll:"全部",researchType:"類型",researchTypeBook:"書籍",researchTypePaper:"論文",researchTypePodcast:"Podcast",researchMarketBoth:"美＋台",researchStrategy:"策略候選",researchCandYes:"候選納入",researchCandNo:"不納入",researchCandWatch:"觀察中",researchStatusCandidate:"候選",researchStatusDeferred:"暫緩",researchStatusAdopted:"已納入",researchStatusRejected:"排除",researchCounts:"書籍 {books} · 論文 {papers} · Podcast {podcasts} · 顯示 {total}",researchEmpty:"此篩選條件下暫無項目",researchNoFormulas:"尚無公式條目",researchLoadError:"無法載入研究庫（{msg}）",researchShelfFilters:"書架分類",researchShelfCoreInvesting:"核心投資經典",researchShelfValueInvesting:"價值型投資",researchShelfBusiness:"商業管理與商界視角",researchShelfLifePartner:"人生智慧與合夥人思想",researchShelfOptions:"選擇權／衍生品",researchShelfRecentReads:"近期閱讀與推薦書",researchShelfFiConcepts:"必看財商觀念書",researchShelfMoneyValues:"理財與金錢價值觀",researchShelfInvestingBasics:"投資理財入門",researchShelfAssetAllocation:"資產配置",researchShelfFinancials:"財報分析",researchShelfMarketAnalysis:"投資分析與戰勝市場",researchShelfEconAnalysis:"經濟分析",researchShelfPsych:"投資心理／隨機性／人性",researchShelfBiographies:"名人傳記",researchShelfAdjacent:"其他／隣接",todayPicks:"今日選股",market:"市場",hot:"熱門",marketQuotes:"市場報價",macroTitle:"美股大事",macroTzEt:"時間・美東 ET",macroAsOf:"更新",macroStale:"資料偏舊（仍顯示上次成功抓取）",macroToday:"今日",macroNext:"即將",macroHighImpact:"高影響",macroEmpty:"近期無高影響美股大事（或資料尚未更新）",macroLoadError:"無法載入美股大事（{msg}）",liveQuotesLive:"即時",liveQuotesStale:"報價暫緩（仍顯示上次成功）",liveQuotesPending:"即時報價連線中…",macroEvent_fomcDecision:"FOMC 利率決議",macroEvent_fomcMinutes:"FOMC 會議紀要",macroEvent_cpi:"CPI 通膨",macroEvent_ppi:"PPI 生產者物價",macroEvent_pce:"PCE／核心 PCE",macroEvent_nfp:"非農就業 NFP",macroEvent_joblessClaims:"初請失業金",macroEvent_gdp:"GDP",macroEvent_retailSales:"零售銷售",macroEvent_ismMfg:"ISM 製造業",macroEvent_ismServices:"ISM 服務業",macroEvent_jolts:"JOLTS 職缺",usStock:"美股",twStock:"台股",usList:"美股清單",twList:"台股清單",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暫無 Top 候選",ticker:"代碼",name:"名稱",price:"價格",dayPct:"日漲跌",rs:"RS",priorClose:"前收",priorCloseFull:"前收漲幅",pct5d:"5 日",pct1m:"約 1 月",volRatio:"量比",ma:"均線",screening:"篩選",reason:"理由",details:"詳情",business:"本業",risk:"風險",observe:"觀察",dataIncomplete:"資料不全",intraday:"盤中",taipeiClose:"台北收",adr:"ADR",parity:"平價",implied:"隱含價",premium:"溢價",adsRatio:"換股比",taiex:"台灣加權 TAIEX",otc:"櫃買",spx:"S&P 500",nasdaq:"Nasdaq",sox:"SOX",usdtwd:"USD/TWD",loadError:"無法載入資料（{msg}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。",langLabel:"語言",paper:"模擬",paperMissing:"尚無模擬帳本檔案。請於專案執行 npm run paper。",paperDisclaimer:"累積模擬帳戶（自 {date} 起） · 不會每日歸零 · 買進即成交 · 非真實下單",paperRules:"規則（各市場獨立帳）",paperRuleTw:"台股本金 NT$3,000,000 · 整張成交",paperRuleUs:"美股本金 US$100,000 · 可買 1 股起",paperRuleBuy:"買：該市場名單·風險1%·停距1.5%·單檔≤8% · 即成交",paperRuleSell:"賣：停損−3% · 停利+12%半倉 · 破SMA20且日跌>2% · 離名單虧損 · 漲停隔日−5%",paperTabTw:"台股帳 · NT$",paperTabUs:"美股帳 · US$",paperBookTw:"台股帳本（NT$）",paperBookUs:"美股帳本（US$）",principal:"本金",cash:"現金",equity:"權益（部位＋現金）",totalPnl:"總損益",totalPnlPct:"總損益 ％",weekPerf:"週績效",monthPerf:"月績效",quarterPerf:"季績效",yearPerf:"年績效",sinceInception:"成立以來",noTradesToday:"本日尚無此類成交（模擬）",noPositions:"目前沒有持股",buy:"買",sell:"賣",shares:"股",qtyShares:"股數",positions:"目前部位",position:"部位",avgCost:"成本",mark:"現價",mktValue:"市值",dayPnl:"日損益",costBasis:"成本合計",weightPct:"權重 ％",posScrollHint:"左右滑動看全部欄位",unrealizedPnl:"未實現損益",unrealizedPct:"未實現 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累積 · 買進即成交",reasonScreenBuy:"名單新開倉",reasonAdd:"持續買進",reasonStop:"停損",reasonTakeProfit:"停利",reasonMomentumBreak:"動能轉弱",reasonOffList:"離開名單",reasonLimitUpChase:"漲停追價急殺",stopLoss:"停損",takeProfit:"停利",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"績效",qty:"數量",note:"說明",strategyScreen:"策略選股",strategyLead:"台／美命中分開檢視 · 公開資料命中優先",strategyLoading:"載入策略結果中…",strategyEmpty:"尚無策略資料。請執行 npm run strategies。",strategyLoadError:"無法載入策略選股（{msg}）。請確認已執行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分類",hitCount:"檔命中",hitTitle:"命中檔數",strategyDetails:"詳情 · 策略說明",conditions:"條件",results:"篩選結果",copyJson:"複製 JSON",exportCsv:"匯出此策略 CSV",exportJson:"匯出 JSON",copied:"已複製",noHitsExport:"此策略今日無命中列可匯出",incomplete:"不足",hitsTotal:"共{n}檔",twOnlyHint:"本策略僅台股",hitMarket:"命中市場",noHits:"本日無命中",dataInsufficient:"資料不足",calibTitle:"校準說明",incompleteFilters:"未檢查濾網（不算通過）：",sessionTwse:"證交所 session",ohlcvBar:"OHLCV K棒",generated:"產生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精選",cat價量:"價量",cat籌碼:"籌碼",cat財務:"財務",cat大師:"大師",cat週期:"週期",cat技術:"技術",cat基本:"基本",cat綜合:"綜合",addWatchlist:"加入自選",watchlistAdded:"已加入自選 {ticker}",watchlistExists:"{ticker} 已在自選",copyFailed:"複製失敗（請手動選取）",csvDownloaded:"已下載 CSV",csvBlocked:"下載被擋：改以資料連結開啟",backtestSoon:"回測：尚未開放",backtestHint:"回測：資料／引擎尚未開放（不提供假回測）",regimeToday:"今日市場週期（美／台分開）",psychologyPhase:"心理相位",cycleStance:"週期姿態",liquidityBias:"流動性偏誤",temperatureScore:"市場溫度",sizeMult:"部位乘數",regimeTags:"週期標籤",dataGaps:"資料缺口",marketRegime:"市場週期",enum_euphoric:"亢奮",enum_late_optimism:"晚期樂觀",enum_mid_cycle:"中期",enum_cautious_recovery:"謹慎復甦",enum_despondent:"絕望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精選",enum_balanced:"均衡",enum_constructive:"偏建設",enum_aggressive:"積極",enum_stabilize_first:"先求穩",enum_risk_off:"偏防守",enum_risk_on:"偏進攻",enum_neutral:"中性",logicTitle:"選股邏輯",logicSubtitle:"政權→篩選→策略→降權→理由→部位：可稽核的數學流程",logicNoRegime:"尚無市場週期資料（待下次掃描寫入）。",logicStep1:"市場週期（Regime）",logicStep1Lead:"先定美／台獨立姿態，再篩個股。Kostolany 心理相位 × Marks 溫度 × 利率流動性。",logicStep1Caption:"相位 → 篩選姿態 → 部位乘數（STANCE_SIZE_MULT）",logicRatesR2:"R2：美債 ^TNX 20 日上升 ≥ +0.25pp → 流動性偏防禦（即使價趨勢仍中性）。",logicRatesR3:"R3：60 日殖利率下降 ≤ −0.25pp → 允許較積極姿態（非亢奮）。",logicRatesSeparate:"硬規則：dial_US 與 dial_TW 分開；不混成「全球心情」。",logicStep2:"數學篩選（A／B）",logicStep2Lead:"相對強度、動能、SMA、量比；門檻依週期姿態調整。",logicScreenA:"篩選 A · 動能／相對強度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日漲≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或雙均線且 5日≥0／RS≥0。",logicScreenASelective:"精選：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量視為可過）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"積極／偏建設：放寬 RS／日／5日／1月；允許 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建設另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求穩：須站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌後先穩定）。",logicScreenB:"篩選 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。門檻：防守 ≥1.0；積極 ≥1.1；其餘 ≥1.2。",logicScreenBMom:"補標 A：若未過 A，但 1月≥8% 且 SMA20＋SMA50（非先求穩）→ 仍標 A。",logicScore:"排序分數",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加權（上限約 8×0.6）；量比<0.4 −0.5；再依市場週期調整分數。",logicStep3:"XQ 策略選股",logicXqLead:"與每日名單並行：條件式命中（價量／籌碼／財務／大師／週期）。缺公開欄位則略過該條件，不捏造。",logicXqPriceVol:"價量：均線多頭、超短線作多等（OHLCV 實算）。",logicXqFlow:"籌碼：法人同步等（公開張數門檻）。",logicXqFund:"財務：獲利遞增、PE／營益率等公開財報欄。",logicXqMasters:"大師：林區／葛拉罕／巴菲特等可計算代理條件。",logicXqCycle:"週期：科斯托拉尼／市場週期包（依當日美台姿態）。",logicOpenStrategies:"開啟策略頁",logicStep4:"排序降權／加權",logicStep4Lead:"scoreAdjust：依姿態對高 RS 縮量、firm-hands、恐慌穩定做加減分。",logicDemoteHot:"防守／精選：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日漲>2% → −1.2；缺雙均線 −1.5。",logicDemoteThin:"K5：高相對強度但量能不足 → 降權／排除積極桶。",logicPromoteFirm:"aggressive／constructive：價弱量增且 SMA200（firm-hands）→ +2.2；早段放量上漲 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；站上 SMA20 才 +1.5。",logicListSize:"名單長度：防守 ≈0.55×；精選 ≈0.75×；先求穩 ≈0.45×；積極 +2（上限14）；基準 12。",logicStep5:"「為什麼」如何組成",logicStep5Lead:"why 欄為可讀摘要，非模型黑箱——由當日可驗證欄位串接。",logicWhyRs:"日漲跌 + 相對指數（美：S&P；台：加權）pp。",logicWhyMom:"五日%、約一個月%。",logicWhyVol:"量比≥1.2 才寫入量能句。",logicWhySma:"SMA20／50／200 站上狀態（雙均線優先）。",logicWhyRegime:"附加週期備註或姿態／心理相位標籤。",logicStep6:"紙上部位紀律",logicStep6Lead:"模擬帳驗證流程；非實單。部位受週期部位乘數與固定風險公式約束。",logicPaperCapital:"本金：台股 NT$3,000,000（整張）；美股 US$100,000（1 股起）。",logicPaperBuy:"買：名單（純 observe 盡量不買）；風險＝權益×1%；停距≈價×1.5%（量比≥3→2.5%）；單檔≤權益 8%。",logicPaperSizeMult:"部位乘數（0.3–1.35×）標示當日建議積極度；與名單長度連動。",logicPaperSell:"賣：停損 −3%；停利 +12% 半倉；破 SMA20 且日跌>2%；離名單且虧損；漲停風格隔日 −5%。",logicOpenPaper:"開啟模擬頁",logicFootnote:"框架合成僅供透明篩選說明，非投資建議。公開作者方法之可編碼代理；不重製受著作權保護之原文。",sma20:"SMA20",sma50:"SMA50",screenA:"A",screenB:"B",screenC:"C",condPass:"條件",condFail:"未過",condSkip:"略過",pe:"本益比",opMargin:"營益率",grossMargin:"毛利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自營商",maBull:"均線多頭",rsi:"RSI",amplitude:"振幅",zhang:"張",limitUp:"漲停",momentum:"動能",metricPrice:"價格",metricDayPct:"日漲跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(張)",metricDebt:"負債比%",metricDirector:"董監持股%",metricOpQ:"近季營益率%",metricSource:"來源",foreign1d:"外資1日(張)",trust1d:"投信1日(張)",dealer1d:"自營商1日(張)",foreign5d:"外資5日(張)",trust5d:"投信5日(張)",dealer5d:"自營5日(張)"},ss={...et,siteTitle:"Daily Quant Picks",loading:"Loading…",disclaimer:"Investing involves risk. For reference only — not investment advice.",footer:"Investing involves risk. For reference only — not investment advice.",dataAsOf:"As of",taipei:" (Taipei)",navMain:"Main navigation",navToday:"Today",navStrategies:"Strategies",navPaper:"Paper",navMore:"More",navMoreClose:"Close",navLogic:"Logic",researchTitle:"Research",navResearch:"Research",navOptions:"Options",navEarnings:"Earnings",earningsTitle:"Earnings",earningsLead:"US Magnificent 7 and high-attention earnings: what the company does, key numbers, what to watch next — plain language, daily refresh. Not investment advice.",earningsDisclaimer:"Not investment advice. Figures from public Yahoo Finance; missing fields show as data unavailable — not personalized advice.",earningsUsFocus:"US-focused",earningsTwStub:"Taiwan earnings coming later (stub)",earningsSelectionTitle:"Watchlist rule:",earningsSelectionFallback:"Largest non-Mag7 mega-caps with earnings in the next 14 days; or Yahoo most-actives; fill with calendar highlights within 45 days.",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL, MSFT, NVDA, AMZN, GOOGL/GOOG, META, TSLA — last report and next date when known.",earningsMag7Badge:"Mag7",earningsHotTitle:"High-attention earnings",earningsHotLead:"Picked by the rule above; badges explain why.",earningsHotEmpty:"No names match the current window (or data unavailable)",earningsWhatItDoes:"What they do",earningsWhatToWatch:"What to watch next",earningsNextDate:"Next report",earningsLastEps:"Last EPS",earningsRevYoy:"Revenue YoY",earningsEpsYoy:"Earnings YoY",earningsPe:"P/E",earningsForwardPe:"Forward P/E",earningsEstimate:"est.",earningsDataMissing:"Data unavailable",earningsTagPrimary:"14d · mega-cap",earningsTagActives:"Most actives · 14d",earningsTagRecent:"Recently reported",earningsTagFallback:"45d calendar highlight",earningsTagOther:"Watch",earningsPartialBlocker:"Partial data blocked",earningsRefreshHow:"Data updates with the site; try again shortly if something looks off.",earningsLoadError:"Could not load earnings digest ({msg})",earningsEmpty:"Earnings digest is being prepared. Check back shortly.",navLookup:"Lookup",lookupTitle:"Stock lookup",lookupLead:"Type a US or Taiwan ticker for company info, quote, earnings highlights, and official filings links — plain language; quotes from Yahoo, filings via SEC / MOPS. Not investment advice.",lookupDisclaimer:"Not investment advice. Quotes from public Yahoo Finance; official filing links go to SEC EDGAR / MOPS. Missing fields omitted, never invented. Live fetch may be limited by network or source.",lookupInputLabel:"Ticker",lookupPlaceholderUs:"e.g. AAPL",lookupPlaceholderTw:"e.g. 2330 or 2330.TW",lookupHintUs:"US: tickers like AAPL, MSFT, NVDA",lookupHintTw:"Taiwan: 4-digit codes like 2330 (.TW added; try .TWO for OTC)",lookupSearch:"Search",lookupIdle:"Enter a ticker and search to see quote and earnings highlights.",lookupLoading:"Fetching from Yahoo Finance…",lookupEmptyInput:"Please enter a ticker",lookupInvalid:"Unrecognized ticker. US e.g. AAPL; Taiwan e.g. 2330 or 2330.TW",lookupNotFound:"No quote for this ticker. Check US/TW tab and the symbol.",lookupError:"Lookup failed ({msg})",lookupBusiness:"What they do",lookupQuoteStats:"Quote & key stats",lookupFinancials:"Financials snapshot",lookupEarnings:"Earnings highlights",lookupPrevClose:"Prev close",lookupVolume:"Volume",lookupDayRange:"Day range",lookup52w:"52-week range",lookupMarketCap:"Market cap",lookupEps:"EPS (ttm)",lookupBeta:"Beta",lookupDivYield:"Div yield",lookupRevenue:"Revenue",lookupGrossMargin:"Gross margin",lookupProfitMargin:"Profit margin",lookupEpsConsensus:"EPS estimate",lookupEpsSurprise:"EPS surprise",lookupSources:"Sources",lookupPartial:"Some advanced fields unavailable (showing only fetched numbers).",lookupOfficialFilings:"Official filings",lookupOfficialFilingsLead:"Links to official filings and disclosures. For US names, recent 10-K / 10-Q / 8-K appear when publicly fetchable. No invented figures.",lookupSourceOfficial:"Official",lookupSourceQuote:"Quote source",lookupSourceCompany:"Company site",lookupSecEdgarSearch:"SEC EDGAR company filings search",lookupSecEdgarBrowse:"SEC EDGAR company browse page",lookupSecFormsFilter:"SEC 10-K / 10-Q filter",lookupMopsFinancialBook:"MOPS · Financial reports",lookupMopsFinancialQuery:"MOPS · Financial report query",lookupMopsCompany:"MOPS · Company profile",lookupMopsMaterial:"MOPS · Material information",lookupTwseIsin:"TWSE ISIN / basic search",lookupTpexCompany:"TPEx · Company page",lookupYahooTwQuote:"Yahoo Taiwan quote (market data, not official filings)",lookupCompanyWebsite:"Company website",lookupInvestorRelations:"Investor relations (public)",lookupRecentFilings:"Recent official filings",lookupFilingForm:"Form",lookupFilingDate:"Filed",lookupFilingDoc:"Document",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"Recent filings list could not be loaded (network or source limits).",lookupFilingsListEmpty:"No recent 10-K / 10-Q / 8-K to list right now.",lookupFilingsLinksStillWork:"Official links above still work.",lookupFilingsTwNote:"For Taiwan names, use MOPS as the official filings portal; quote links below are secondary.",lookupFilingsCikUnavailable:"Could not resolve SEC CIK yet; use EDGAR search by ticker above.",navSoxl:"SOXL",soxlTitle:"SOXL Semiconductor Desk",soxlLead:"Direxion Daily Semiconductor Bull 3X ETF: latest quote, events/anomalies, related news, and SEC N-PORT holdings with estimated contributions — plain language. Not investment advice.",soxlDisclaimer:"Not investment advice. SOXL seeks ~3× daily index performance and is extremely volatile; holdings weights are from SEC N-PORT (not same-day); contributions are estimates.",soxlHeroLabel:"SOXL latest quote",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"Regular close",soxlLeverageNote:"SOXL targets about 3× the ICE Semiconductor Index for a single day; overnight and multi-day results are not a simple 3×.",soxlHoldingsAsOf:"Holdings weights as of",soxlHoldingsNotSameDay:"latest N-PORT, not same-day",soxlEventsTitle:"Events / anomalies",soxlNewsTitle:"Related news",soxlNewsEmpty:"No related news yet.",soxlHoldingsTitle:"Holdings & estimated contribution",soxlHoldingsLead:"Weights from SEC N-PORT; cash and index swaps often dominate. Contribution ≈ weight × return (labeled estimate; not equal to 3× ETF points).",soxlHoldingsEmpty:"Holdings are being prepared. Check back shortly.",soxlColName:"Name",soxlColWeight:"Weight",soxlColReturn:"Return",soxlColContrib:"Est. contrib.",soxlColReasons:"Why it moved",soxlContributionHint:"Estimate = weight% × return% ÷ 100 (basket percentage points; SOXL is ~3× daily — not ETF points)",soxlSourceN:"Source {n}",soxlOverallTitle:"Why SOXL rises vs falls",soxlWhyUp:"What tends to lift it",soxlWhyDown:"What tends to weigh on it",soxlRefreshHow:"Data updates with the site; try again shortly if something looks off.",soxlLoadError:"Could not load SOXL desk ({msg})",navPodcasts:"Celebrity podcasts",podcastsTitle:"Celebrity podcasts",podcastsLead:"Notable investor and host frameworks from public interviews and podcasts: scannable theses, US/TW separation, candidate status labeled — not investment advice.",podcastsDisclaimer:"Not investment advice. Drawn from public interviews and existing research-library entries; figures cite sources. Math-gate-closed items stay candidate / watch only.",podcastsFeatured:"Featured",podcastsStubBadge:"Candidate stub",podcastsGodzillaHandle:"Godzilla · @godzilla.us",podcastsGooayeTitle:"Gooaye (Hsieh Meng-kung)",podcastsGooayeLead:"Taiwan markets / macro / risk / retail psychology podcast; per-episode key points from public RSS show notes (not transcripts; not investment advice).",podcastsGooayeMarket:"TW-focused · US/TW separate",podcastsGooayeStubNote:"Lightweight stub: full entry and computable packs live in Research. No invented episode quotes here.",podcastsGooayePoint1:"Risk and sizing first, ticker stories second",podcastsGooayePoint2:"Treat the semiconductor chain as a basket — not one hero name",podcastsGooayePoint3:"US: rate path as risk-on proxy; TW scored separately",podcastsGotoResearch:"Open full entry in Research",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"Categories",podcastsCategories:"Celebrity podcast categories",podcastsMenuLead:"Pick a category first — long essays stay off the landing page.",podcastsOpenCategory:"Open category",gooayeLibraryBadge:"Episode library",gooayeDisclaimer:'Candidate / watch; math gate closed. "Listened" = stock analysis after public audio download + speech-to-text. "Show notes only" = RSS teasers, not listened. Host views; not investment advice.',gooayeLoading:"Loading Gooaye episodes…",gooayeLoadError:"Could not load episode library ({msg})",gooayeEpisodeCount:"{n} episodes (public RSS)",gooayeAsOf:"As of {date} (Taipei)",gooayeEmptyCount:"{n} episode(s) lack usable public text (title listed only)",gooayeSearchLabel:"Search episodes",gooayeSearchPlaceholder:"Title, episode no., or keyword",gooayeSourceLine:"Source:",gooayeKeyPoints:"Key points",gooayeNotesThin:"Public show notes are essentially title-only; nothing further to summarize.",gooayeTeaserNote:"Public show notes are thin (often a short hook plus ads). Above is only usable public text — no audio listen, nothing invented.",gooayeListen:"Listen (SoundOn)",gooayeLoadMore:"Show {n} more ({left} left)",gooayeShowingAll:"Showing all {n} episodes",gooayeNoResults:"No matching episodes.",gooayeUntitled:"Untitled episode",gooayeBadgeListened:"Listened",gooayeBadgeRssOnly:"Show notes only",gooayeStockAnalysis:"Stock analysis (listened)",gooayeRssTeaserToggle:"Public show notes (RSS)",gooayeListenedAt:"Listened {date} (Taipei)",gooayeListenedCount:"{n} listened",gooayeRssOnlyNote:"Audio not reviewed yet; above is public RSS / show notes only — not listened analysis.",researchCatMenu:"Categories",researchCategories:"Research categories",researchMenuLead:"Pick type, market, or status first, then browse that shelf.",researchOpenCategory:"Open category",researchCatBooks:"Books",researchCatPapers:"Papers",researchCatPodcasts:"Podcasts",researchCatUs:"US focus",researchCatTw:"TW focus",researchCatCandidate:"Candidate",researchCatWatch:"Watch",researchBackMenu:"Back to categories",researchStatusFilters:"Status",godzillaTitle:"Godzilla",godzillaLead:"US-focused notes from Threads interviewee「哥吉拉」: time & health, RSU redeploy, fundamentals, circle of competence, tax pacing, options as tools — plain cards. Not investment advice.",godzillaDisclaimer:"Not investment advice. From a public interview; figures labeled interviewee self-report. Math gate closed — candidate / watch only.",godzillaHeroLabel:"Godzilla framework overview",godzillaKicker:"Candidate framework · US-focused",godzillaTagline:"Trade healthy years for freedom; long stock as core, options as satellite; tax sets rotation pace.",godzillaBadgeCandidate:"Candidate",godzillaBadgeWatch:"Watch",godzillaUsFocus:"US-focused",godzillaSelfReport:"Interviewee self-report",godzillaListenedBadge:"Listened",godzillaStockTitle:"Stock analysis (listened)",godzillaStockLead:"Host/interviewee views from public YouTube audio + speech-to-text (candidate/watch; not advice).",godzillaStock1:"Time and health beat stacking more cash/RSU; money cannot buy time back; retirement targets rise as RSU accrues.",godzillaStock2:"US tech pay is RSU-heavy; rising stock lifts total comp and also single-name concentration risk.",godzillaStock3:"Timing (self-report): early Tesla worked (wishes earlier trim); Meta entered near a softer tape.",godzillaStock4:"Next watch: B2C AI apps. Visible cases cited: Tesla FSD, Palantir; much of AI still B2B. Hardware spend still growing.",godzillaStock5:"Even on NVIDIA, avoid all-in one ticker; US W2/tax planning matters when salary+stock cluster.",godzillaStock6:"TW has no capital-gains tax vs US taxation — liquidity differs; do not copy US playbooks blindly.",godzillaStockNote:"STT: faster-whisper small int8. Public YT source; figures are interviewee views; candidate/watch.",godzillaSourceLabel:"Source",godzillaSourceCite:"Terry × Godzilla",godzillaYoutube:"Watch YouTube interview",godzillaThesesTitle:"Core theses",godzillaThesesLead:"Ten scannable points; details are interviewee self-report.",godzillaThesis1Title:"Time & health over stacking more RSU",godzillaThesis1Body:"Retirement targets inflate (e.g. self-report $30M→$60M USD plus housing/kids); stopping often comes when the body fails. Using healthy 40s for travel/freedom differs from 50–60.",godzillaThesis2Title:"US RSU changes incentives",godzillaThesis2Body:"Four-year vest builds skin in the game vs TW cash bonuses that rarely buy the employer’s stock.",godzillaThesis3Title:"Sell vested RSU same day; redeploy",godzillaThesis3Body:"Sell vested RSU the same day and redeploy to a conviction name (his: NVDA) so salary + unvested aren’t one basket.",godzillaThesis4Title:"Fundamentals only",godzillaThesis4Body:"Revenue/EPS trend; ignore Wall Street targets; news noise mostly hurts.",godzillaThesis5Title:"Circle of competence: hardware/tech",godzillaThesis5Body:"Hardware/tech — NVDA largest; also PLTR, AVGO, TSM; little outside tech. Index sleeve small now; end-state mostly index.",godzillaThesis6Title:"Tax sets the pace",godzillaThesis6Body:"High W2 → heavy capital gains; after leaving the job, multi-year rotate singles → index within acceptable tax; covered calls buffer crashes.",godzillaThesis7Title:"Options as a tool",godzillaThesis7Body:"Mostly seller (CC / CSP); small long calls/LEAPs only in panic or price vs fundamentals divergence; accept total loss of premium; never naked.",godzillaThesis8Title:"Covered call: roll if assignment risk",godzillaThesis8Body:"If assigned risk, roll out in time; don’t exercise/sell core for tiny premium; sell fewer contracts if uncomfortable.",godzillaThesis9Title:"Wait for trend to enter",godzillaThesis9Body:"Wait for 1–2 clean earnings even if cost basis rises; keep buying good firms with spare cash; don’t chase hot tips.",godzillaThesis10Title:"US vs TW observation",godzillaThesis10Body:"US CG tax → hold longer; TW no CG + stamp tax → higher turnover / speculative culture (observation only).",godzillaChecklistTitle:"Method checklist",godzillaChecklistLead:"Self-checks, not an order ticket.",godzillaCheck1:"Low material desire; don’t let the “enough” number keep rising forever.",godzillaCheck2:"Long stock as core; options as satellite / hedge / occasional leverage.",godzillaCheck3:"Position size: no borrowing; if you can’t accept zero, don’t trade options.",godzillaCheck4:"Prefer liquid mega-caps for options.",godzillaCheck5:"End allocation sketch: ~80% broad index, small sleeve for industry (+ occasional small call).",godzillaCheck6:"PLTR example: B2B monetization via forward-deployed engineers; trim if commercial growth disappoints.",godzillaOptionsTitle:"Options usage",godzillaOptionsLead:"Seller-first; longs rare and only on extreme dislocation.",godzillaOpt1:"Core: covered calls and cash-secured puts.",godzillaOpt2:"Small long calls / LEAPs: panic or price vs fundamentals gap.",godzillaOpt3:"Premium can go to zero; never naked.",godzillaOpt4:"Assignment risk: roll out in time; don’t sell core for tiny premium.",godzillaRsuTitle:"RSU, tax & rotation",godzillaRsuLead:"Incentives, diversification, and post-job tax pacing.",godzillaRsu1:"Sell vested RSU same day; redeploy to conviction (e.g. NVDA).",godzillaRsu2:"While employed, avoid large realized gains; after leaving, multi-year singles → index.",godzillaRsu3:"Covered calls as crash buffer — not a directional bet.",godzillaTwTitle:"Taiwan market note",godzillaTwLead:"Separated from the US framework; tax/culture observation only.",godzillaTwBody:"US capital-gains tax encourages longer holds; TW has no CG tax plus stamp tax, so turnover and short-term culture run hotter. This page stays US-focused; TW is contrast only and not wired into the screener.",godzillaGateNote:"Not in the formal screener",godzillaGateDetail:"Status: candidate / strategyCandidate=watch. Math gate CLOSED — not wired into the live screener or paper trading; read-only.",jensenTitle:"Jensen Huang (黃仁勳)",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Notes from a Stanford STVP / Entrepreneurial Thought Leaders talk: perspective, demand & Moore’s law, culture, cash reality, reinvention — candidate / watch. Not investment advice.",jensenDisclaimer:"Not investment advice. From a public Stanford Online talk (~2009; YouTube upload 2011). Themes are speaker self-report. Math gate closed — candidate / watch only.",jensenHeroLabel:"Jensen Huang talk highlights",jensenKicker:"Candidate talk · US tech / semiconductors / company-building",jensenTagline:"Perspective over vague “vision”; culture and reinvention sustain long-horizon company-building.",jensenUsFocus:"US tech-focused",jensenTalkBadge:"Public talk",jensenListenedBadge:"Listened",jensenStockTitle:"Business / stock notes (listened)",jensenStockLead:"From public Stanford ETL talk audio + STT (~2009; historical views, not today's filings). Candidate/watch; not advice.",jensenStock1:"Founding bet (1993): PC + 3D/games as a large market; VCs/parents then doubted starting a company 'for games.'",jensenStock2:"Competition: dozens–hundreds entered consumer 3D; NVIDIA recalls ending as the surviving computer-graphics company — perspective on why the business works (semiconductors / Moore's Law as competition) plus reinvention, not execution alone.",jensenStock3:"Programmable shaders: cannibalized a successful fixed-function franchise; first chip nearly killed the firm, but not doing it would die at Moore's Law speed.",jensenStock4:"Capital allocation: rivals set price; CEO chooses engagement. Weigh scarce resources vs demand and opportunity cost, not just accounting cost.",jensenStock5:"Culture: innovation needs tolerance for calculated failure; a startup is nearly always out of business. General-purpose GPUs (Swiss-army risk) can extend the medium's life.",jensenStock6:"Time stamp: historical talk (pre modern AI-training boom) — do not map 1:1 onto today's datacenter P&Ls. NVIDIA is the speaker's firm; candidate/watch.",jensenStockNote:"STT: faster-whisper small int8 (en). Source YT Xn1EsFe7snQ / Stanford ETL. Historical views.",jensenMeta:"Stanford Online · STVP ETL · ~1:03:38 · uploaded 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"Watch on YouTube",jensenOpenYoutube:"Open full video on YouTube",jensenEmbedTitle:"Jen-Hsun Huang: Stanford student and Entrepreneur (Stanford Online)",jensenEcorner:"Stanford eCorner / STVP related clips",jensenHighlightsTitle:"Talk highlights (plain language)",jensenHighlightsLead:"Five scannable themes drawn only from the public talk — not a transcript.",jensenH1Title:"Perspective, not vague “vision”",jensenH1Body:"Everyone has a perspective. NVIDIA’s early bet: PCs plus cheap 3D would unlock games (later also Keyhole → Google Earth) when the market looked near-zero to many VCs.",jensenH2Title:"Insatiable demand and Moore’s law",jensenH2Body:"Sometimes ignore customers early when they can’t yet price a new category; rinse-and-repeat, then reinvent before “good enough” kills the medium (fixed-function → programmable shaders / GeForce FX near-death, CG language).",jensenH3Title:"Culture: calculated risk-taking",jensenH3Body:"Innovation needs calculated risk, tolerance for failure that fails fast, intellectual honesty, and willingness to change course; passion and purpose over selling-the-company motives.",jensenH4Title:"Cash and startup reality",jensenH4Body:"Always raising, saving, or making money; startups are nearly always near bankruptcy. VCs bet people and a large enough market more than perfect business plans.",jensenH5Title:"Reinvention: tear down success",jensenH5Body:"Every success must eventually be torn down and rebuilt; Huang frames long-horizon company-building, not serial flip exits.",jensenTwTitle:"US / TW separation (context only)",jensenTwLead:"Market focus is US tech / semiconductor company-building; Taiwan appears only as supply-chain context — no invented TW stock picks.",jensenTwBody:"NVDA as a US semiconductor / compute platform sits in a supply chain tightly linked to Taiwan foundry and OSAT ecosystems — industry context only; no TW ticker list and not wired into the screener.",jensenGateNote:"Not in the formal screener",jensenGateDetail:"Status: candidate / strategyCandidate=watch. Math gate CLOSED — not wired into the live screener or paper trading; read-only.",jensenWatchCta:"Watch on YouTube",jensenEmbedBlockedNote:"This talk opens on YouTube — the owner has disabled embedding on other sites.",optionsTitle:"US Options",optionsLead:"McMillan-style strategy families first: volatility + risk shape, then public Yahoo chains for learning — not investment advice.",optionsDisclaimer:"Not investment advice; options involve high risk. Educational public-data screens only — not personalized orders.",optionsBookBadge:"This book",optionsBookCite:"Primary reference",optionsBookLead:"Lawrence G. McMillan Options Strategies Handbook (5th Chinese ed.): map outlook + volatility to strategy families (original summary, not verbatim).",optionsBookFallbackTitle:"McMillan Options Strategies Handbook",optionsGotoResearch:"Open full entry in Research",optionsUsOnly:"US only",optionsQualityTitle:"Light underlying quality check",optionsQualityLead:"Secondary filter: PE, PB, debt, ROE, revenue/earnings trend. Missing fields omitted — not stock tips.",optionsViewTitle:"Options view (McMillan)",optionsViewLead:"Public chain: ATM IV, historical vol, volume skew; strategy families are educational.",optionsMcmillanFirst:"Align volatility regime and risk shape before picking a family — do not force a view.",optionsPe:"P/E",optionsPb:"P/B",optionsDebt:"Debt/Equity",optionsRoe:"ROE",optionsRevTrend:"Revenue trend",optionsEarnTrend:"Earnings trend",optionsGate:"Quality gate",optionsGatePass:"Pass",optionsGateWatch:"Watch",optionsGateFail:"Weak",optionsGateIncomplete:"Incomplete",optionsDataMissing:"Data unavailable",optionsForwardPe:"fwd P/E",optionsTrendUp:"Up ~{pct}%",optionsTrendDown:"Down ~{pct}%",optionsTrendFlat:"Flat ~{pct}%",optionsAtmIv:"ATM implied vol",optionsHv:"Historical vol (~1m)",optionsIvHv:"IV / HV",optionsVolRegime:"Vol regime",optionsRegimeIvRich:"IV rich",optionsRegimeIvCheap:"IV cheap",optionsRegimeIvFair:"Roughly fair",optionsRegimeIvOnly:"IV only",optionsCallPutVol:"Call / put volume",optionsAtmStrike:"Near ATM strike",optionsExpiry:"Expiry",optionsSkewPutHeavy:"Put volume heavier",optionsSkewCallHeavy:"Call volume heavier",optionsSkewBalanced:"Volumes roughly balanced",optionsEduSetups:"Strategy families (edu)",optionsEduSetupsLead:"Pick a family from outlook + vol regime; green cards often match current IV/HV (still not advice).",optionsSetupCoveredCall:"Covered call",optionsSetupCoveredCallBody:"Own shares and sell a call for premium; upside is capped at the strike.",optionsSetupCoveredCallWarn:"Profit ceiling; share downside remains.",optionsSetupProtectivePut:"Protective put",optionsSetupProtectivePutBody:"Own shares and buy a put as insurance: downside floor, but you pay a premium.",optionsSetupProtectivePutWarn:"Insurance cost reduces returns; richer IV makes it costlier.",optionsSetupVertical:"Vertical spread",optionsSetupVerticalBody:"Same expiry, different strikes — boxes max gain/loss into a known range.",optionsSetupVerticalWarn:"Wrong direction still loses; loss is capped.",optionsSetupCalendar:"Calendar / diagonal",optionsSetupCalendarBody:"Different expiries to express time decay or vol-change views.",optionsSetupCalendarWarn:"Sensitive to vol and time; shape shifts as spot moves.",optionsSetupStraddle:"Straddle / strangle",optionsSetupStraddleBody:"Long or short both sides to bet on a big move — or that vol is overpriced.",optionsSetupStraddleWarn:"Buyers need a large move; sellers face two-sided risk.",optionsSetupButterfly:"Butterfly",optionsSetupButterflyBody:"Multi-strike structure betting price pins near the body; profit zone is narrow.",optionsSetupButterflyWarn:"Sweet spot is thin; miss it and you near max loss.",optionsSetupVolAligned:"Often discussed with current vol regime",optionsSetupVolNotAligned:"Less aligned with current vol (still fine to learn)",optionsRiskShape:"Risk shape (plain)",optionsNoSetups:"No strategy notes yet",optionsPickTicker:"Pick a US ticker above",optionsChainBlocked:"Options chain temporarily unavailable",optionsPartialBlocker:"Some fields incomplete",optionsRefreshHow:"Data updates with the site; try again shortly if something looks off.",optionsLoadError:"Could not load options snapshot ({msg})",optionsEmpty:"No US sample yet — run fetch-us-options first",optionsGlossaryTitle:"Tiny glossary (no formulas)",optionsTermDelta:"Delta (direction feel)",optionsDefDelta:"How much the option tends to move when the stock moves. Closer to 1 or −1 means tighter tracking.",optionsTermIv:"Implied volatility (IV)",optionsDefIv:"What the market is pricing for future wobble — higher usually means pricier options.",optionsTermHv:"Historical volatility (HV)",optionsDefHv:"How much the stock actually moved recently — compare with IV.",optionsTermAtm:"ATM (near the money)",optionsDefAtm:"Strike closest to spot; a common volatility thermometer.",optionsTermSkew:"Volume skew",optionsDefSkew:"Whether calls or puts traded more — a coarse insurance vs chase hint.",optionsTermProb:"Probability (edu)",optionsDefProb:"Talk in ‘more/less common’ intuition only — no guaranteed outcomes or personal odds.",researchLead:"Books & papers: title → summary → key takeaways → strategy candidacy",researchMathGateBanner:"Formal strategy adoption requires the math gate (not passed yet) — candidates only",researchMathGate:"Math gate",researchMathGateDefault:"Math gate not passed",researchFormulas:"Programmable formulas",researchTakeaways:"Key takeaways",researchNoTakeaways:"No takeaways listed",researchSources:"Sources",researchFilters:"Filters",researchFilterAll:"All",researchType:"Type",researchTypeBook:"Books",researchTypePaper:"Papers",researchTypePodcast:"Podcasts",researchMarketBoth:"US+TW",researchStrategy:"Strategy candidate",researchCandYes:"Yes",researchCandNo:"No",researchCandWatch:"Watch",researchStatusCandidate:"Candidate",researchStatusDeferred:"Deferred",researchStatusAdopted:"Adopted",researchStatusRejected:"Rejected",researchCounts:"{books} books · {papers} papers · {podcasts} podcasts · showing {total}",researchEmpty:"No items match this filter",researchNoFormulas:"No formulas listed",researchLoadError:"Failed to load research library ({msg})",researchShelfFilters:"Shelves",researchShelfCoreInvesting:"Core investing classics",researchShelfValueInvesting:"Value investing",researchShelfBusiness:"Business & management",researchShelfLifePartner:"Life & partner wisdom",researchShelfOptions:"Options / derivatives",researchShelfRecentReads:"Recent reads & picks",researchShelfFiConcepts:"Must-read FI concepts",researchShelfMoneyValues:"Money values & mindset",researchShelfInvestingBasics:"Investing basics",researchShelfAssetAllocation:"Asset allocation",researchShelfFinancials:"Financial statement analysis",researchShelfMarketAnalysis:"Market analysis & edge",researchShelfEconAnalysis:"Economic analysis",researchShelfPsych:"Psychology / randomness / human nature",researchShelfBiographies:"Biographies",researchShelfAdjacent:"Other / adjacent",todayPicks:"Today's picks",market:"Market",hot:"Markets",marketQuotes:"Market quotes",macroTitle:"US market movers",macroTzEt:"Times · US ET",macroAsOf:"Updated",macroStale:"Stale (showing last successful fetch)",macroToday:"Today",macroNext:"Next",macroHighImpact:"High impact",macroEmpty:"No high-impact US events nearby (or data not refreshed yet)",macroLoadError:"Could not load US market movers ({msg})",liveQuotesLive:"Live",liveQuotesStale:"Quotes stale (showing last success)",liveQuotesPending:"Connecting live quotes…",macroEvent_fomcDecision:"FOMC decision",macroEvent_fomcMinutes:"FOMC minutes",macroEvent_cpi:"CPI",macroEvent_ppi:"PPI",macroEvent_pce:"PCE / Core PCE",macroEvent_nfp:"Nonfarm payrolls",macroEvent_joblessClaims:"Jobless claims",macroEvent_gdp:"GDP",macroEvent_retailSales:"Retail sales",macroEvent_ismMfg:"ISM Manufacturing",macroEvent_ismServices:"ISM Services",macroEvent_jolts:"JOLTS",usStock:"US",twStock:"TW",usList:"US list",twList:"TW list",usTop:"US Top",twTop:"TW Top",emptyTop:"No Top picks for {market}",ticker:"Ticker",name:"Name",price:"Price",dayPct:"Day %",rs:"RS",priorClose:"Prior close",priorCloseFull:"Prior-close %",pct5d:"5D",pct1m:"~1M",volRatio:"Vol ratio",ma:"MAs",screening:"Screen",reason:"Why",details:"Details",business:"Business",risk:"Risk",observe:"Watch",dataIncomplete:"Incomplete",intraday:"Intraday",taipeiClose:"Taipei close",adr:"ADR",parity:"Parity",implied:"Implied",premium:"Premium",adsRatio:"ADS ratio",taiex:"TAIEX",otc:"OTC",loadError:"Failed to load data ({msg}). Serve statically with data/latest.json present.",langLabel:"Language",paper:"Paper",paperMissing:"No paper portfolio file. Run npm run paper in the project.",paperDisclaimer:"Cumulative paper account (since {date}) · not reset daily · fills on signal · not real orders",paperRules:"Rules (separate books per market)",paperRuleTw:"TW principal NT$3,000,000 · round lots",paperRuleUs:"US principal US$100,000 · from 1 share",paperRuleBuy:"Buy: list · 1% risk · 1.5% stop · ≤8% per name · immediate fill",paperRuleSell:"Sell: −3% stop · +12% half take-profit · below SMA20 & day <−2% · off-list & losing · limit-up next-day −5%",paperTabTw:"TW book · NT$",paperTabUs:"US book · US$",paperBookTw:"TW book (NT$)",paperBookUs:"US book (US$)",principal:"Principal",cash:"Cash",equity:"Equity (positions + cash)",totalPnl:"Total P&L",totalPnlPct:"Total P&L %",weekPerf:"Week",monthPerf:"Month",quarterPerf:"Quarter",yearPerf:"Year",sinceInception:"Since inception",noTradesToday:"No trades of this type today (paper)",noPositions:"No open positions",buy:"Buy",sell:"Sell",shares:"sh",qtyShares:"Shares",positions:"Positions",position:"Position",avgCost:"Avg cost",mark:"Mark",mktValue:"Mkt value",dayPnl:"Day P&L",costBasis:"Cost basis",weightPct:"Weight %",posScrollHint:"Swipe for all columns",unrealizedPnl:"Unrealized P&L",unrealizedPct:"Unrealized %",recentTrades:"Trades (last 40)",paperSession:"{date} · since {inception} · fills on signal",reasonScreenBuy:"New from list",reasonAdd:"Add",reasonStop:"Stop-loss",reasonTakeProfit:"Take-profit",reasonMomentumBreak:"Momentum break",reasonOffList:"Off list",reasonLimitUpChase:"Limit-up chase unwind",stopLoss:"Stop-loss",takeProfit:"Take-profit",paperTrade:"Paper",realizedPnl:"P&L",periodPerf:"Performance",qty:"Qty",note:"Note",strategyScreen:"Strategy screener",strategyLead:"US / TW hits viewed separately · public data first",strategyLoading:"Loading strategies…",strategyEmpty:"No strategy data. Run npm run strategies.",strategyLoadError:"Failed to load strategies ({msg}). Run npm run strategies.",strategyList:"Strategies",strategyCat:"Categories",hitCount:"hits",hitTitle:"Hit count",strategyDetails:"Details · strategy notes",conditions:"Conditions",results:"Results",copyJson:"Copy JSON",exportCsv:"Export CSV",exportJson:"Export JSON",copied:"Copied",noHitsExport:"No hit rows to export for this strategy today",incomplete:"N/A",hitsTotal:"{n} hits",twOnlyHint:"TW only",hitMarket:"Hit market",noHits:"No hits today",dataInsufficient:"Insufficient data",calibTitle:"Calibration",incompleteFilters:"Unchecked filters (not counted): ",sessionTwse:"TWSE session",ohlcvBar:"OHLCV bar",generated:"Generated",universeTw:"TW universe",universeUs:"US universe",cat精選:"Featured",cat價量:"Price/Vol",cat籌碼:"Flow",cat財務:"Fundamentals",cat大師:"Masters",cat週期:"Cycle",cat技術:"Technical",cat基本:"Fundamentals",cat綜合:"Composite",addWatchlist:"Watchlist",watchlistAdded:"Added {ticker}",watchlistExists:"{ticker} already watched",copyFailed:"Copy failed — select manually",csvDownloaded:"CSV downloaded",csvBlocked:"Download blocked — opened data URI",backtestSoon:"Backtest: not open",backtestHint:"Backtest engine/data not available (no fake results)",regimeToday:"Today's market regime (US / TW separate)",psychologyPhase:"Psychology phase",cycleStance:"Cycle stance",liquidityBias:"Liquidity bias",temperatureScore:"Temperature score",sizeMult:"Size mult",regimeTags:"Regime tags",dataGaps:"Data gaps",marketRegime:"Market regime",enum_euphoric:"Euphoric",enum_late_optimism:"Late optimism",enum_mid_cycle:"Mid-cycle",enum_cautious_recovery:"Cautious recovery",enum_despondent:"Despondent",enum_panic:"Panic",enum_defensive:"Defensive",enum_selective:"Selective",enum_balanced:"Balanced",enum_constructive:"Constructive",enum_aggressive:"Aggressive",enum_stabilize_first:"Stabilize first",enum_risk_off:"Risk-off",enum_risk_on:"Risk-on",enum_neutral:"Neutral",logicTitle:"Selection logic",logicSubtitle:"Regime → screens → strategies → demotions → why → sizing — auditable math",logicNoRegime:"No market-regime data yet (await next scan).",logicStep1:"Market regime",logicStep1Lead:"Set US/TW dials first, then screen names. Kostolany phase × Marks temperature × rates liquidity.",logicStep1Caption:"Phase → screen stance → size multiplier (STANCE_SIZE_MULT)",logicRatesR2:"R2: ^TNX +0.25pp / 20d → defensive liquidity bias (even if price mid-cycle).",logicRatesR3:"R3: yields ≤ −0.25pp / 60d → allow more aggressive dial (if not Euphoric).",logicRatesSeparate:"Hard rule: dial_US and dial_TW stay separate — never one “world mood”.",logicStep2:"Math screens (A / B)",logicStep2Lead:"RS, momentum, SMA, volume — thresholds shift with cycle stance.",logicScreenA:"Screen A · momentum / RS",logicScreenABalanced:"Balanced: day RS≥0.5pp or day≥1.5%; or 5d≥3%; or 1m≥6% & >SMA20; or both MAs with 5d≥0 / RS≥0.",logicScreenASelective:"Selective: >SMA50 and (RS≥0.5 or 5d≥3% or 1m≥6% & >SMA20).",logicScreenADefensive:"Defensive: >SMA20+SMA50 and (RS≥0.8 or 5d≥4%) and vol≥1.0 (null vol OK); 1m≥12% & vol<0.8 → reject.",logicScreenAAggressive:"Aggressive / Constructive: looser RS/day/5d/1m; allow firm-hands below SMA50 if >SMA200 (1m<0 & vol≥1.4). Constructive also needs SMA20 or SMA200.",logicScreenAStabilize:"Stabilize first: must >SMA20 and (RS≥1.0pp or vol≥1.5).",logicScreenB:"Screen B · volume",logicScreenBVol:"Vol ratio = today / 20d avg. Floors: Defensive ≥1.0; Aggressive ≥1.1; else ≥1.2.",logicScreenBMom:"A backfill: if A missed but 1m≥8% & >SMA20+SMA50 (not Stabilize first) → tag A.",logicScore:"Ranking score",logicScoreFormula:"score = dayRS×2 + 5d%×0.35 + 1m%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"vol≥1.2 adds (cap ~8×0.6); vol<0.4 −0.5; then score adjust by regime.",logicStep3:"XQ strategies",logicXqLead:"Parallel to daily lists: condition hits (price/vol, flow, fundamentals, masters, cycle). Missing fields → insufficient — never invented.",logicXqPriceVol:"Price/vol: MA bull stack, ultra-short, etc. (OHLCV).",logicXqFlow:"Flow: institutional sync (public share-unit thresholds).",logicXqFund:"Fundamentals: earnings uptrend, PE / margins from public filings.",logicXqMasters:"Masters: Lynch / Graham / Buffett-style computable proxies.",logicXqCycle:"Cycle: Kostolany / regime pack keyed to today’s US·TW dials.",logicOpenStrategies:"Open Strategies",logicStep4:"Ranking demotions / boosts",logicStep4Lead:"scoreAdjust: thin high-RS, firm-hands, and panic reclaim change the score.",logicDemoteHot:"Defensive/Selective: 1m≥8% & vol<0.8 → −2.5; vol<0.7 & day>2% → −1.2; missing dual MA −1.5.",logicDemoteThin:"K5: strong RS on thin volume → demote / keep out of aggressive bucket.",logicPromoteFirm:"aggressive/constructive: weak price + rising vol + >SMA200 (firm-hands) → +2.2; early up-day volume +1.0.",logicDemotePanic:"stabilize_first: base −3; +1.5 only if >SMA20.",logicListSize:"List length: Defensive ~0.55×; Selective ~0.75×; Stabilize first ~0.45×; Aggressive +2 (cap 14); base 12.",logicStep5:"How “Why” is built",logicStep5Lead:"The why field is a readable join of verified fields — not a black box.",logicWhyRs:"Day % + vs index (US: S&P; TW: TAIEX) in pp.",logicWhyMom:"5-day % and ~1-month %.",logicWhyVol:"Volume sentence only if vol_ratio ≥ 1.2.",logicWhySma:"SMA20 / 50 / 200 status (dual-MA preferred).",logicWhyRegime:"Append a regime note or stance / psychology-phase tags.",logicStep6:"Paper sizing discipline",logicStep6Lead:"Paper books validate process — not live orders. Size constrained by regime size mult + fixed risk math.",logicPaperCapital:"Capital: TW NT$3,000,000 (round lots); US US$100,000 (from 1 share).",logicPaperBuy:"Buy: list (observe-only avoided); risk = equity×1%; stop≈price×1.5% (vol≥3 → 2.5%); per name ≤8% equity.",logicPaperSizeMult:"Size multiplier (0.3–1.35×) tags day’s aggressiveness; linked to list length.",logicPaperSell:"Sell: stop −3%; take-profit +12% half; below SMA20 & day <−2%; off-list & losing; limit-up chase next-day −5%.",logicOpenPaper:"Open Paper",logicFootnote:"Framework synthesis for transparent screening — not investment advice. Public operational proxies only; no copyrighted book text.",condPass:"Cond.",condFail:"Fail",condSkip:"Skip",pe:"P/E",opMargin:"Op. margin",grossMargin:"Gross margin",foreignInv:"Foreign",trustInv:"Trust",dealerInv:"Dealer",maBull:"MA bull stack",amplitude:"Range",zhang:"lots",limitUp:"Limit-up",momentum:"Momentum",metricPrice:"Price",metricDayPct:"Day %",metricVolRatioYday:"Vol ratio (yday)",metricVolToday:"Vol (lots)",metricDebt:"Debt %",metricDirector:"Insider %",metricOpQ:"Op. margin (q)",metricSource:"Source",foreign1d:"Foreign 1d (lots)",trust1d:"Trust 1d (lots)",dealer1d:"Dealer 1d (lots)",foreign5d:"Foreign 5d (lots)",trust5d:"Trust 5d (lots)",dealer5d:"Dealer 5d (lots)"},os={...et,siteTitle:"每日数学选股",loading:"加载中…",disclaimer:"投资涉及风险，信息仅供参考，非投资建议",footer:"投资涉及风险，信息仅供参考，非投资建议",dataAsOf:"数据",taipei:"（台北）",navMain:"主导航",navToday:"今日",navStrategies:"策略",navPaper:"模拟",navMore:"更多",navMoreClose:"关闭",navLogic:"逻辑",researchTitle:"研究",navResearch:"研究",navOptions:"期权",navEarnings:"读财报",earningsTitle:"读财报",earningsLead:"美股 Magnificent 7 与高关注财报摘要：公司在做什么、关键数字、下一步看什么——白话、每日更新，非投资建议。",earningsDisclaimer:"非投资建议。数字来自公开 Yahoo Finance；缺栏标「资料不足」，不构成个性化投资建议。",earningsUsFocus:"以美股为主",earningsTwStub:"台股财报稍后开放（规划中）",earningsSelectionTitle:"关注名单规则：",earningsSelectionFallback:"市值最大且未来 14 日内有财报的非 Mag7 大型股；或 Yahoo 热门成交；不足则以 45 日内行事历亮点补齐。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——上次财报与下次日期（已知时）。",earningsMag7Badge:"Mag7",earningsHotTitle:"高关注／热门财报",earningsHotLead:"依上方规则挑选；标签说明为何入选。",earningsHotEmpty:"目前窗口内暂无符合条件的标的（或资料不足）",earningsWhatItDoes:"这家公司在做什么",earningsWhatToWatch:"下一步看什么",earningsNextDate:"下次财报",earningsLastEps:"上次 EPS",earningsRevYoy:"营收 YoY",earningsEpsYoy:"获利 YoY",earningsPe:"市盈率",earningsForwardPe:"预估市盈率",earningsEstimate:"预估",earningsDataMissing:"资料不足",earningsTagPrimary:"14 日内・大型",earningsTagActives:"热门成交・14 日内",earningsTagRecent:"近日已公布",earningsTagFallback:"45 日行事历亮点",earningsTagOther:"关注",earningsPartialBlocker:"部分资料受阻",earningsRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",earningsLoadError:"无法载入财报摘要（{msg}）",earningsEmpty:"财报摘要整理中，请稍后再看。",navLookup:"查股",lookupTitle:"查股／个股",lookupLead:"输入美股或台股代码，查看公司简介、报价、财报要点与官方财报链接——白话整理；行情来自 Yahoo，官方申报连至 SEC／公开资讯观测站。非投资建议。",lookupDisclaimer:"非投资建议。行情数字来自公开 Yahoo Finance；官方财报链接连至 SEC EDGAR／公开资讯观测站。缺栏不显示、不编造。即时抓取可能受网络或来源限制。",lookupInputLabel:"股票代码",lookupPlaceholderUs:"例如 AAPL",lookupPlaceholderTw:"例如 2330 或 2330.TW",lookupHintUs:"美股：输入代号如 AAPL、MSFT、NVDA",lookupHintTw:"台股：四码代号如 2330（自动加 .TW；上柜可试 .TWO）",lookupSearch:"查询",lookupIdle:"输入代码后按查询，即可查看报价与财报摘要。",lookupLoading:"正在向 Yahoo Finance 抓取…",lookupEmptyInput:"请输入股票代码",lookupInvalid:"代码格式无法辨识。美股如 AAPL；台股如 2330 或 2330.TW",lookupNotFound:"找不到此代码的报价。请确认市场分页（美股／台股）与代码是否正确。",lookupError:"查询失败（{msg}）",lookupBusiness:"公司在做什么",lookupQuoteStats:"报价与关键数据",lookupFinancials:"财务摘要",lookupEarnings:"财报要点",lookupPrevClose:"前收",lookupVolume:"成交量",lookupDayRange:"今日区间",lookup52w:"52 周高低",lookupMarketCap:"市值",lookupEps:"每股盈余",lookupBeta:"Beta",lookupDivYield:"殖利率",lookupRevenue:"营收",lookupGrossMargin:"毛利率",lookupProfitMargin:"净利率",lookupEpsConsensus:"预估 EPS",lookupEpsSurprise:"EPS 惊喜",lookupSources:"来源",lookupPartial:"部分进阶栏位暂无法取得（已显示可得数字，未编造）。",lookupOfficialFilings:"官方财报",lookupOfficialFilingsLead:"以下链接通往官方申报与公开资讯；美股可另列近期 10-K／10-Q／8-K（公开可抓取时）。数字不编造。",lookupSourceOfficial:"官方来源",lookupSourceQuote:"行情来源",lookupSourceCompany:"公司网站",lookupSecEdgarSearch:"SEC EDGAR 公司申报查询",lookupSecEdgarBrowse:"SEC EDGAR 公司浏览页",lookupSecFormsFilter:"SEC 10-K／10-Q 等年季报筛选",lookupMopsFinancialBook:"公开资讯观测站｜财务报告书",lookupMopsFinancialQuery:"公开资讯观测站｜财务报告查询页",lookupMopsCompany:"公开资讯观测站｜公司基本资料",lookupMopsMaterial:"公开资讯观测站｜重大讯息",lookupTwseIsin:"证交所 ISIN／基本资料查询",lookupTpexCompany:"柜买中心｜公司资料",lookupYahooTwQuote:"Yahoo 股市（行情，非正式财报）",lookupCompanyWebsite:"公司官网",lookupInvestorRelations:"投资人关系／IR（公开资料）",lookupRecentFilings:"近期官方申报",lookupFilingForm:"表单",lookupFilingDate:"申报日",lookupFilingDoc:"文件",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"近期申报清单暂时无法载入（网络或来源限制）。",lookupFilingsListEmpty:"目前没有可列示的近期 10-K／10-Q／8-K。",lookupFilingsLinksStillWork:"上方官方链接仍可开启查阅。",lookupFilingsTwNote:"台股请以公开资讯观测站（MOPS）为官方财报来源；下方亦附行情页供对照。",lookupFilingsCikUnavailable:"尚无法对应 SEC CIK；仍可通过上方 EDGAR 以代号查询。",navSoxl:"SOXL",soxlTitle:"SOXL 半导体杠杆",soxlLead:"Direxion 每日半导体多头 3 倍 ETF：最新报价、异常／事件、相关新闻，以及 SEC N-PORT 持股权重与估算贡献——白话整理，非投资建议。",soxlDisclaimer:"非投资建议。SOXL 为约 3 倍日杠杆 ETF，波动与亏损风险极高；持股权重来自 SEC N-PORT（非当日），贡献度为估算。",soxlHeroLabel:"SOXL 最新报价",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正规收盘",soxlLeverageNote:"SOXL 目标约为 ICE Semiconductor Index 单日表现的 3 倍；隔夜与多日累积不可用简单 3 倍推估。",soxlHoldingsAsOf:"持股权重截至",soxlHoldingsNotSameDay:"最新 N-PORT，非今日即时",soxlEventsTitle:"事件／异常",soxlNewsTitle:"相关新闻",soxlNewsEmpty:"暂无相关新闻",soxlHoldingsTitle:"持股与估算贡献",soxlHoldingsLead:"权重来自 SEC N-PORT；现金与指数互换常占大宗。贡献 ≈ 权重 × 报酬（标示为估算，且未直接等于 3x ETF 点数）。",soxlHoldingsEmpty:"持股清单整理中，请稍后再看。",soxlColName:"标的",soxlColWeight:"权重",soxlColReturn:"日报酬",soxlColContrib:"估算贡献",soxlColReasons:"白话原因",soxlContributionHint:"估算＝权重% × 报酬% ÷ 100（篮子百分点；SOXL 约 3× 日杠杆，不等于 ETF 点数）",soxlSourceN:"来源 {n}",soxlOverallTitle:"为何涨／为何跌",soxlWhyUp:"偏多时常见原因",soxlWhyDown:"偏空时常见原因",soxlRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",soxlLoadError:"无法载入 SOXL 桌面（{msg}）",navPodcasts:"名人播客",podcastsTitle:"名人播客",podcastsLead:"精选投资人／主持人公开访谈与 Podcast 框架整理：可扫读论点、市场分栏、候选状态标示清楚——非投资建议。",podcastsDisclaimer:"非投资建议。本区整理公开访谈与研究书库已有资料；数字与做法标示来源，不构成个性化建议。数学闸门未通过者仅候选／观察。",podcastsFeatured:"精选",podcastsStubBadge:"候选摘要",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（谢孟恭）",podcastsGooayeLead:"台湾市场／总经／风险／散户心理 Podcast；集数重点整理自公开 RSS 节目指引（非逐字稿、非投资建议）。",podcastsGooayeMarket:"以台股为主 · 美／台分栏",podcastsGooayeStubNote:"轻量 stub：完整条目与可计算规则在研究书库；此处不发明集数引言。",podcastsGooayePoint1:"先管风险与仓位，再谈单一标的故事",podcastsGooayePoint2:"护国神山供应链用篮子强弱看，不单压一档",podcastsGooayePoint3:"美股用利率方向当风险偏好代理；台股另算",podcastsGotoResearch:"到研究书库看完整条目",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"分类菜单",podcastsCategories:"名人podcast分类",podcastsMenuLead:"先选分类再进入内容——不把长文全部摊在同一页。",podcastsOpenCategory:"打开此分类",gooayeLibraryBadge:"集数库",gooayeDisclaimer:"候选／观察；数学闸关闭。标「已听写」：下载公开音档＋语音转文字后撰写股票重点分析。标「仅节目说明」：仅 RSS／节目说明，未听写。主持人观点、候选状态；非投资建议。",gooayeLoading:"载入股癌集数库…",gooayeLoadError:"无法载入集数库（{msg}）",gooayeEpisodeCount:"共 {n} 集（公开 RSS）",gooayeAsOf:"资料截至 {date}（台北）",gooayeEmptyCount:"其中 {n} 集公开文字不足，仅列标题",gooayeSearchLabel:"搜索集数",gooayeSearchPlaceholder:"标题、集数或关键字",gooayeSourceLine:"来源：",gooayeKeyPoints:"重点整理",gooayeNotesThin:"公开节目指引几乎只有标题／短语，无更多可整理文字。",gooayeTeaserNote:"公开 show notes 偏短（常见为开场短语＋广告）；以上仅整理可用的公开文字，未听音档、未发明内容。",gooayeListen:"收听（SoundOn）",gooayeLoadMore:"再显示 {n} 集（尚余 {left}）",gooayeShowingAll:"已显示全部 {n} 集",gooayeNoResults:"没有符合的集数。",gooayeUntitled:"未命名集数",gooayeBadgeListened:"已听写",gooayeBadgeRssOnly:"仅节目说明",gooayeStockAnalysis:"股票重点分析（已听写）",gooayeRssTeaserToggle:"公开节目说明（RSS）",gooayeListenedAt:"听写于 {date}（台北）",gooayeListenedCount:"已听写 {n} 集",gooayeRssOnlyNote:"此集尚未听音档；以上仅整理公开 RSS／节目说明，非听写分析。",researchCatMenu:"分类菜单",researchCategories:"研究分类",researchMenuLead:"先选类型／市场／状态，再浏览该分类条目。",researchOpenCategory:"打开此分类",researchCatBooks:"书籍",researchCatPapers:"论文",researchCatPodcasts:"Podcast",researchCatUs:"美股焦点",researchCatTw:"台股焦点",researchCatCandidate:"候选",researchCatWatch:"观察中",researchBackMenu:"回分类菜单",researchStatusFilters:"状态",godzillaTitle:"哥吉拉",godzillaLead:"Threads 受访者「哥吉拉」的美股框架整理：时间与健康、RSU 再配置、基本面、能力圈、税务节奏、期权工具——白话卡片，非投资建议。",godzillaDisclaimer:"非投资建议。整理自公开访谈；数字与做法标示为受访者自述，不构成个性化建议。数学闸门未通过，仅候选／观察。",godzillaHeroLabel:"哥吉拉框架总览",godzillaKicker:"候选框架 · 美股为主",godzillaTagline:"用健康的时间换自由；长股为核、期权为辅；税务决定换仓节奏。",godzillaBadgeCandidate:"候选",godzillaBadgeWatch:"观察中",godzillaUsFocus:"以美股为主",godzillaSelfReport:"受访者自述",godzillaListenedBadge:"已听写",godzillaStockTitle:"股票重点分析（已听写）",godzillaStockLead:"依公开 YouTube 访谈音频＋语音转写整理的受访者观点（候选／观察；非投资建议）。",godzillaStock1:"时间与健康优先于再堆金钱／RSU；金钱买不回时间，退休目标会随 RSU 累积而上修。",godzillaStock2:"美股科技薪酬高度依赖 RSU；股价上涨放大总报酬，也放大单一公司集中风险。",godzillaStock3:"进场时点：特斯拉较早布局自觉「可更早出场会赚更多」；Meta 约在相对低档区间进入（受访者自述）。",godzillaStock4:"下一波关注偏 B2C AI 应用落地；当下显见案例如 Tesla FSD、Palantir，其余仍在观察。硬件／AI 资本开支仍在成长，但多数应用仍偏 B2B。",godzillaStock5:"即便看好 NVIDIA，也不主张把仓位压在单一公司；美国 W2／税务下，高薪＋集中持股需一起规划。",godzillaStock6:"台股无资本利得税 vs 美国税负：流动性／进出方便是优点，税制诱因不同，不能直接照搬美股玩法。",godzillaStockNote:"转写模型：faster-whisper small int8。来源影片公开可查；数字与标的均为访谈中受访者观点，候选／观察。",godzillaSourceLabel:"来源",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"观看 YouTube 访谈",godzillaThesesTitle:"核心论点",godzillaThesesLead:"十条可扫读重点；细节皆为受访者自述。",godzillaThesis1Title:"时间与健康重于再堆 RSU",godzillaThesis1Body:"退休目标常会膨胀（例如自述从约 3,000 万美元调到 6,000 万，再加上住房与子女）；停下来往往是身体撑不住。用健康的 40 多岁换旅行与自由，和 50–60 岁很不一样。",godzillaThesis2Title:"美股 RSU 改变诱因",godzillaThesis2Body:"四年归属、与公司利益绑在一起；对比台股现金奖金较少用来买自家股票。",godzillaThesis3Title:"归属当日卖出、转到信念标的",godzillaThesis3Body:"既得 RSU 当日卖出，再配置到有信念的名字（其例：NVDA），避免薪水＋未归属全押同一篮。",godzillaThesis4Title:"只看基本面",godzillaThesis4Body:"看营收／EPS 趋势；忽略华尔街目标价；新闻噪音多半有害。",godzillaThesis5Title:"能力圈：硬件／科技",godzillaThesis5Body:"能力圈在硬件与科技——NVDA 权重最高；亦提 PLTR、AVGO、TSM；很少碰科技外。指数部位现在较小，终局想象多数在指数。",godzillaThesis6Title:"税务决定换仓节奏",godzillaThesis6Body:"高 W2 收入时资本利得税重；离职后可多年把个股轮换成指数、把税负控在可接受范围；卖出 Covered Call 可缓冲下跌。",godzillaThesis7Title:"期权是工具",godzillaThesis7Body:"多半当卖方（Covered Call／Cash-secured Put）；少数做多买权／LEAP，仅在恐慌或价格与基本面背离时；接受权利金可能归零；从不裸卖。",godzillaThesis8Title:"Covered Call：被指派就延后",godzillaThesis8Body:"有被指派风险就往后换月（roll out）；不要为了小权利金去履约或卖掉核心持股；不舒服就少卖合约。",godzillaThesis9Title:"进场等趋势",godzillaThesis9Body:"等 1–2 次干净财报确认趋势，即使成本垫高也接受；有闲钱就持续买好公司；不追热门明牌。",godzillaThesis10Title:"美／台观察分栏",godzillaThesis10Body:"美股资本利得税→倾向抱更久；台股无资本利得＋有证交税→周转较高、投机文化较重（仅观察，非操作指令）。",godzillaChecklistTitle:"作法清单",godzillaChecklistLead:"可执行的自我检查，不是下单清单。",godzillaCheck1:"物欲低；别让「够了」的数字一直往上涨。",godzillaCheck2:"长股为核心；期权是卫星／避险／偶尔杠杆。",godzillaCheck3:"部位：不借钱；接受不了归零，就别碰期权。",godzillaCheck4:"期权优先流动性高的大型股。",godzillaCheck5:"终局配置草图：约 80% 宽基指数，小袖口参与产业（＋偶尔小额买权）。",godzillaCheck6:"PLTR 例子：B2B 靠前线工程师变现；若商业成长失望就减码。",godzillaOptionsTitle:"期权用法",godzillaOptionsLead:"卖方为主；买方极少、仅在极端偏离时。",godzillaOpt1:"主力：Covered Call、Cash-secured Put。",godzillaOpt2:"小部位长买权／LEAP：恐慌或价格脱离基本面时。",godzillaOpt3:"权利金可全部亏完；从不裸仓。",godzillaOpt4:"被指派风险：往后换月；核心持股不为小权利金卖出。",godzillaRsuTitle:"RSU、税务与轮换",godzillaRsuLead:"诱因、分散与离职后的税务节奏。",godzillaRsu1:"归属当日卖出 RSU，再配置到信念标的（例：NVDA）。",godzillaRsu2:"在职高税负时少动大额已实现利得；离职后多年轮换个股→指数。",godzillaRsu3:"Covered Call 作为下跌缓冲，不是赌方向。",godzillaTwTitle:"台股观察",godzillaTwLead:"与美股框架分开；仅文化／税制观察。",godzillaTwBody:"美股有资本利得税，倾向长期持有；台股无资本利得税、有证交税，周转与短线文化较明显。此页主轴仍是美股框架，台股仅作对照，不写进正式筛选。",godzillaGateNote:"尚未写进正式筛选",godzillaGateDetail:"状态：候选／strategyCandidate=watch。数学闸门关闭——未接入即时筛选器或模拟交易；仅供阅读与对照。",jensenTitle:"黄仁勋／Jensen Huang",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公开演讲整理：视角、需求与摩尔定律、文化、现金现实、再发明——候选／观察，非投资建议。",jensenDisclaimer:"非投资建议。整理自 Stanford Online 公开演讲（约 2009；YouTube 2011 上传）；论点来自讲者自述主题，不构成个性化建议。数学闸门未通过，仅候选／观察。",jensenHeroLabel:"黄仁勋演讲重点",jensenKicker:"候选演讲 · 美股科技／半导体创业",jensenTagline:"视角胜过空泛「愿景」；用文化与再发明撑住长周期公司建设。",jensenUsFocus:"以美股／科技为主",jensenTalkBadge:"公开演讲",jensenListenedBadge:"已听写",jensenStockTitle:"股票／事业重点（已听写）",jensenStockLead:"依公开 Stanford ETL 访谈影片音频＋语音转写整理（约2009；历史观点，非当下财报）。候选／观察；非投资建议。",jensenStock1:"创业叙事（1993）：押注 PC＋3D／游戏会成大市场；VC／长辈当时不信「为了打游戏开公司」。",jensenStock2:"竞争：消费级3D一度涌入数十～上百家；NVIDIA自述最终成仅存的电脑绘图公司——关键是看懂事业本质（半导体／Moore's Law 如竞争律）与持续重塑，而非只靠执行。",jensenStock3:"可编程着色器转型：主动吞噬自己成功的固定功能产品；第一代几乎拖垮公司，但自认不做会死于 Moore's Law 节奏。",jensenStock4:"资源配置：竞争决定价格，CEO决定要不要接案；看关键资源相对市场需求与机会成本，不只会计成本。",jensenStock5:"文化：创新需容忍计算过的失败；新创定义＝几乎一直快倒闭。通用化 GPU（瑞士刀）有偏离利基风险，却是延长产业寿命的路径。",jensenStock6:"时间锚点：本场为历史谈（预现代AI训练热潮），勿直接外推今日数据中心财报。NVIDIA为讲者公司；候选／观察。",jensenStockNote:"转写：faster-whisper small int8（en）。来源 YouTube Xn1EsFe7snQ／Stanford ETL。历史访谈观点。",jensenMeta:"Stanford Online · STVP ETL · 约 1:03:38 · 上传 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"观看 YouTube 演讲",jensenOpenYoutube:"在 YouTube 打开完整影片",jensenEmbedTitle:"Jen-Hsun Huang：Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 相关剪辑",jensenHighlightsTitle:"演讲重点（白话）",jensenHighlightsLead:"五条可扫读主题；仅整理公开演讲中反复出现的论点，非逐字稿。",jensenH1Title:"视角，而非空泛「愿景」",jensenH1Body:"人人都有视角。NVIDIA 早期押注：个人电脑加上便宜的 3D 会打开游戏市场（后来也谈到 Keyhole→Google Earth），当时对许多 VC 而言市场几乎是零。",jensenH2Title:"无穷需求与摩尔定律",jensenH2Body:"新类别尚未被定价时，有时要暂时忽略顾客反馈；先 rinse-and-repeat，再在「够好」扼杀媒介前重新发明（固定功能→可编程着色器／GeForce FX 近死经验、CG 语言）。",jensenH3Title:"文化：敢冒算过的风险",jensenH3Body:"创新需要计算过的风险、容忍快速失败、智识诚实、愿意改道；动机是热情与目的，而非「把公司卖掉」。",jensenH4Title:"现金与新创现实",jensenH4Body:"永远在募资、省钱或赚钱；新创几乎总是濒临倒闭。VC 更押人与够大的市场，而非完美商业计划。",jensenH5Title:"再发明：成功也要拆掉重建",jensenH5Body:"每一次成功终须拆解再建；黄仁勋谈的是长视野公司建设，不是连续翻转出场。",jensenTwTitle:"美／台分栏（仅脉络）",jensenTwLead:"本条目市场主轴为美股科技／半导体公司建设；台湾仅作供应链脉络，不发明台股标的。",jensenTwBody:"NVDA 作为美股半导体／运算平台公司，供应链与台湾晶圆制造、封测生态高度相关——此处仅作产业脉络注记，不列台股清单，也不写进正式筛选。",jensenGateNote:"尚未写进正式筛选",jensenGateDetail:"状态：候选／strategyCandidate=watch。数学闸门关闭——未接入即时筛选器或模拟交易；仅供阅读与对照。",jensenWatchCta:"在 YouTube 观看",jensenEmbedBlockedNote:"此演讲由拥有者设定为仅能在 YouTube 观看（无法于本站内嵌播放）。",optionsTitle:"美股期权",optionsLead:"以 McMillan《期权策略完全手册》策略族为主：先看波动与风险形状，再用公开 Yahoo 链学习——非投资建议。",optionsDisclaimer:"非投资建议；期权风险高。仅供教育与公开数据筛选，不构成个人化下单建议。",optionsBookBadge:"这本书",optionsBookCite:"主要参考书",optionsBookLead:"Lawrence G. McMillan《期权策略完全手册》增订第五版：依看法与波动高低对应策略族（原创摘要，非原文）。",optionsBookFallbackTitle:"期权策略完全手册（McMillan）",optionsGotoResearch:"到研究书库看完整条目",optionsUsOnly:"仅美股",optionsQualityTitle:"标的轻量财报检核",optionsQualityLead:"次要滤网：本益、净值、负债、ROE、营收／获利趋势。缺栏标「资料不足」，不作荐股。",optionsViewTitle:"期权观点（McMillan）",optionsViewLead:"公开期权链：ATM 隐含波动、历史波动、量能偏向；策略族为教育说明。",optionsMcmillanFirst:"先对齐波动高低与风险形状，再想策略族——不是先猜涨跌再硬套。",optionsPe:"市盈率",optionsPb:"市净率",optionsDebt:"负债／权益",optionsRoe:"ROE",optionsRevTrend:"营收趋势",optionsEarnTrend:"获利趋势",optionsGate:"品质闸",optionsGatePass:"通过",optionsGateWatch:"观察",optionsGateFail:"偏弱",optionsGateIncomplete:"资料不足",optionsDataMissing:"资料不足",optionsForwardPe:"预估市盈率",optionsTrendUp:"成长约 {pct}%",optionsTrendDown:"下滑约 {pct}%",optionsTrendFlat:"大致持平 {pct}%",optionsAtmIv:"ATM 隐含波动",optionsHv:"历史波动（约 1 月）",optionsIvHv:"IV／HV",optionsVolRegime:"波动状态",optionsRegimeIvRich:"隐含偏高",optionsRegimeIvCheap:"隐含偏低",optionsRegimeIvFair:"大致均衡",optionsRegimeIvOnly:"仅有 IV",optionsCallPutVol:"认购／认沽成交量",optionsAtmStrike:"近价履约价",optionsExpiry:"到期日",optionsSkewPutHeavy:"认沽量较重",optionsSkewCallHeavy:"认购量较重",optionsSkewBalanced:"量能大致均衡",optionsEduSetups:"策略族（教育）",optionsEduSetupsLead:"依看法＋波动状态挑选家族；绿底表示较常对齐目前 IV／HV（仍非建议）。",optionsSetupCoveredCall:"备兑认购（Covered Call）",optionsSetupCoveredCallBody:"已持股时卖出认购，换取权利金；上涨空间被履约价盖住。",optionsSetupCoveredCallWarn:"最大利润有天花板；大跌时股票亏损仍在。",optionsSetupProtectivePut:"保护性认沽（Protective Put）",optionsSetupProtectivePutBody:"持股同时买入认沽，像买保险：下跌有地板，但要付保费。",optionsSetupProtectivePutWarn:"保险成本会吃掉报酬；若波动已很贵，保费更痛。",optionsSetupVertical:"垂直价差（Vertical）",optionsSetupVerticalBody:"同到期、不同履约价的组合，把最大损益框在可计算区间。",optionsSetupVerticalWarn:"方向看错仍会亏；好处是亏损有上限。",optionsSetupCalendar:"日历／对角价差",optionsSetupCalendarBody:"不同到期的组合，常用来表达时间流逝或波动变化看法。",optionsSetupCalendarWarn:"对波动与时间敏感；形状会随市价移动改变。",optionsSetupStraddle:"跨式／勒式",optionsSetupStraddleBody:"同时买（或卖）认购与认沽，押大波动或波动不够。",optionsSetupStraddleWarn:"买方需要够大的移动；卖方面临两侧风险。",optionsSetupButterfly:"蝶式",optionsSetupButterflyBody:"多履约价组合，押价格收敛在中间附近；利润区通常很窄。",optionsSetupButterflyWarn:"甜蜜点很窄；错过中间就可能接近最大亏损。",optionsSetupVolAligned:"与目前波动状态较常一起讨论",optionsSetupVolNotAligned:"与目前波动状态较不契合（仍可学习）",optionsRiskShape:"风险形状（白话）",optionsNoSetups:"暂无策略族说明",optionsPickTicker:"请选择上方美股代码",optionsChainBlocked:"期权链暂时无法取得",optionsPartialBlocker:"部分栏位不完整",optionsRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",optionsLoadError:"无法载入期权快照（{msg}）",optionsEmpty:"尚无美股样本——请先跑 fetch-us-options",optionsGlossaryTitle:"小词典（不用公式）",optionsTermDelta:"Delta（方向敏感度）",optionsDefDelta:"价格涨跌时，期权大概会跟多少。数字愈靠近 1 或 −1，跟现货愈紧。",optionsTermIv:"隐含波动 IV",optionsDefIv:"市场「现在愿意付多少保费」换算成的波动预期。愈高通常期权愈贵。",optionsTermHv:"历史波动 HV",optionsDefHv:"过去一段时间股价实际晃动有多大，用来和 IV 对照。",optionsTermAtm:"ATM（近价）",optionsDefAtm:"履约价最靠近现价的合约，常拿来当波动温度计。",optionsTermSkew:"量能偏向",optionsDefSkew:"认购与认沽成交量谁比较多，粗看市场偏保险还是偏追涨。",optionsTermProb:"机率（教育）",optionsDefProb:"只谈「比较可能／比较少见」的直觉，不保证结果，也不给个人化胜率。",researchLead:"书单与论文：标题 → 摘要 → 重点作法 → 是否纳入策略候选",researchMathGateBanner:"正式纳入策略需数学闸门通过（目前未过）— 仅候选",researchMathGate:"数学闸门",researchMathGateDefault:"尚未通过数学闸门",researchFormulas:"可编程公式",researchTakeaways:"重点作法",researchNoTakeaways:"尚无重点作法",researchSources:"来源",researchFilters:"筛选",researchFilterAll:"全部",researchType:"类型",researchTypeBook:"书籍",researchTypePaper:"论文",researchTypePodcast:"播客",researchMarketBoth:"美＋台",researchStrategy:"策略候选",researchCandYes:"候选纳入",researchCandNo:"不纳入",researchCandWatch:"观察中",researchStatusCandidate:"候选",researchStatusDeferred:"暂缓",researchStatusAdopted:"已纳入",researchStatusRejected:"排除",researchCounts:"书籍 {books} · 论文 {papers} · 播客 {podcasts} · 显示 {total}",researchEmpty:"此筛选条件下暂无项目",researchNoFormulas:"尚无公式条目",researchLoadError:"无法加载研究库（{msg}）",researchShelfFilters:"书架分类",researchShelfCoreInvesting:"核心投资经典",researchShelfValueInvesting:"价值型投资",researchShelfBusiness:"商业管理与商界视角",researchShelfLifePartner:"人生智慧与合伙人思想",researchShelfOptions:"期权／衍生品",researchShelfRecentReads:"近期阅读与推荐书",researchShelfFiConcepts:"必看财商观念书",researchShelfMoneyValues:"理财与金钱价值观",researchShelfInvestingBasics:"投资理财入门",researchShelfAssetAllocation:"资产配置",researchShelfFinancials:"财报分析",researchShelfMarketAnalysis:"投资分析与战胜市场",researchShelfEconAnalysis:"经济分析",researchShelfPsych:"投资心理／随机性／人性",researchShelfBiographies:"名人传记",researchShelfAdjacent:"其他／隣接",todayPicks:"今日选股",market:"市场",hot:"热门",marketQuotes:"市场报价",macroTitle:"美股大事",macroTzEt:"时间・美东 ET",macroAsOf:"更新",macroStale:"数据偏旧（仍显示上次成功抓取）",macroToday:"今日",macroNext:"即将",macroHighImpact:"高影响",macroEmpty:"近期无高影响美股大事（或数据尚未更新）",macroLoadError:"无法载入美股大事（{msg}）",liveQuotesLive:"实时",liveQuotesStale:"报价暂缓（仍显示上次成功）",liveQuotesPending:"实时报价连接中…",macroEvent_fomcDecision:"FOMC 利率决议",macroEvent_fomcMinutes:"FOMC 会议纪要",macroEvent_cpi:"CPI 通胀",macroEvent_ppi:"PPI 生产者物价",macroEvent_pce:"PCE／核心 PCE",macroEvent_nfp:"非农就业 NFP",macroEvent_joblessClaims:"初请失业金",macroEvent_gdp:"GDP",macroEvent_retailSales:"零售销售",macroEvent_ismMfg:"ISM 制造业",macroEvent_ismServices:"ISM 服务业",macroEvent_jolts:"JOLTS 职缺",usStock:"美股",twStock:"台股",usList:"美股列表",twList:"台股列表",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暂无 Top 候选",ticker:"代码",name:"名称",price:"价格",dayPct:"日涨跌",priorClose:"前收",priorCloseFull:"前收涨幅",pct5d:"5 日",pct1m:"约 1 月",volRatio:"量比",ma:"均线",screening:"筛选",reason:"理由",details:"详情",business:"本业",risk:"风险",observe:"观察",dataIncomplete:"资料不全",intraday:"盘中",taipeiClose:"台北收",parity:"平价",implied:"隐含价",premium:"溢价",adsRatio:"换股比",taiex:"台湾加权 TAIEX",otc:"柜买",loadError:"无法加载数据（{msg}）。请确认以静态服务器打开，且 data/latest.json 存在。",langLabel:"语言",paper:"模拟",paperMissing:"尚无模拟账本文件。请在项目执行 npm run paper。",paperDisclaimer:"累积模拟账户（自 {date} 起） · 不会每日归零 · 买进即成交 · 非真实下单",paperRules:"规则（各市场独立账）",paperRuleTw:"台股本金 NT$3,000,000 · 整张成交",paperRuleUs:"美股本金 US$100,000 · 可买 1 股起",paperRuleBuy:"买：该市场名单·风险1%·停距1.5%·单档≤8% · 即成交",paperRuleSell:"卖：停损−3% · 停利+12%半仓 · 破SMA20且日跌>2% · 离名单亏损 · 涨停隔日−5%",paperTabTw:"台股账 · NT$",paperTabUs:"美股账 · US$",paperBookTw:"台股账本（NT$）",paperBookUs:"美股账本（US$）",principal:"本金",cash:"现金",equity:"权益（部位＋现金）",totalPnl:"总损益",totalPnlPct:"总损益 ％",weekPerf:"周绩效",monthPerf:"月绩效",quarterPerf:"季绩效",yearPerf:"年绩效",sinceInception:"成立以来",noTradesToday:"本日尚无此类成交（模拟）",noPositions:"目前没有持股",buy:"买",sell:"卖",shares:"股",qtyShares:"股数",positions:"目前部位",position:"部位",avgCost:"成本",mark:"现价",mktValue:"市值",dayPnl:"日损益",costBasis:"成本合计",weightPct:"权重 ％",posScrollHint:"左右滑动看全部栏位",unrealizedPnl:"未实现损益",unrealizedPct:"未实现 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累积 · 买进即成交",reasonScreenBuy:"名单新开仓",reasonAdd:"持续买进",reasonStop:"停损",reasonTakeProfit:"停利",reasonMomentumBreak:"动能转弱",reasonOffList:"离开名单",reasonLimitUpChase:"涨停追价急杀",stopLoss:"停损",takeProfit:"停利",paperTrade:"模拟",realizedPnl:"损益",periodPerf:"绩效",qty:"数量",note:"说明",strategyScreen:"策略选股",strategyLead:"台／美命中分开检视 · 缺资料标「不足」",strategyLoading:"加载策略结果中…",strategyEmpty:"尚无策略资料。请执行 npm run strategies。",strategyLoadError:"无法加载策略选股（{msg}）。请确认已执行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分类",hitCount:"档命中",hitTitle:"命中档数",strategyDetails:"详情 · 策略说明",conditions:"条件",results:"筛选结果",copyJson:"复制 JSON",exportCsv:"导出此策略 CSV",exportJson:"导出 JSON",copied:"已复制",noHitsExport:"此策略今日无命中列可导出",incomplete:"不足",hitsTotal:"共{n}档",twOnlyHint:"本策略仅台股",hitMarket:"命中市场",noHits:"本日无命中",dataInsufficient:"资料不足",calibTitle:"校准说明",incompleteFilters:"未检查滤网（不算通过）：",sessionTwse:"证交所 session",ohlcvBar:"OHLCV K棒",generated:"产生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精选",cat價量:"价量",cat籌碼:"筹码",cat財務:"财务",cat大師:"大师",cat週期:"周期",cat技術:"技术",cat基本:"基本",cat綜合:"综合",addWatchlist:"加入自选",watchlistAdded:"已加入自选 {ticker}",watchlistExists:"{ticker} 已在自选",copyFailed:"复制失败（请手动选取）",csvDownloaded:"已下载 CSV",csvBlocked:"下载被挡：改以数据链接打开",backtestSoon:"回测：尚未开放",backtestHint:"回测：数据／引擎尚未开放（不提供假回测）",regimeToday:"今日市场周期（美／台分开）",psychologyPhase:"心理相位",cycleStance:"周期姿态",liquidityBias:"流动性偏误",temperatureScore:"市场温度",sizeMult:"部位乘数",regimeTags:"周期标签",dataGaps:"资料缺口",marketRegime:"市场周期",enum_euphoric:"亢奋",enum_late_optimism:"晚期乐观",enum_mid_cycle:"中期",enum_cautious_recovery:"谨慎复苏",enum_despondent:"绝望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精选",enum_balanced:"均衡",enum_constructive:"偏建设",enum_aggressive:"积极",enum_stabilize_first:"先求稳",enum_risk_off:"偏防守",enum_risk_on:"偏进攻",enum_neutral:"中性",logicTitle:"选股逻辑",logicSubtitle:"政权→筛选→策略→降权→理由→部位：可稽核的数学流程",logicNoRegime:"尚无市场周期资料（待下次扫描写入）。",logicStep1:"市场周期（Regime）",logicStep1Lead:"先定美／台独立姿态，再筛个股。Kostolany 心理相位 × Marks 温度 × 利率流动性。",logicStep1Caption:"相位 → 筛选姿态 → 部位乘数（STANCE_SIZE_MULT）",logicRatesR2:"R2：美债 ^TNX 20 日上升 ≥ +0.25pp → 流动性偏防御（即使价趋势仍中性）。",logicRatesR3:"R3：60 日收益率下降 ≤ −0.25pp → 允许较积极姿态（非亢奋）。",logicRatesSeparate:"硬规则：dial_US 与 dial_TW 分开；不混成「全球心情」。",logicStep2:"数学筛选（A／B）",logicStep2Lead:"相对强度、动能、SMA、量比；门槛依周期姿态调整。",logicScreenA:"筛选 A · 动能／相对强度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日涨≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或双均线且 5日≥0／RS≥0。",logicScreenASelective:"精选：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量视为可过）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"积极／偏建设：放宽 RS／日／5日／1月；允许 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建设另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求稳：须站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌后先稳定）。",logicScreenB:"筛选 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。门槛：防守 ≥1.0；积极 ≥1.1；其余 ≥1.2。",logicScreenBMom:"补标 A：若未过 A，但 1月≥8% 且 SMA20＋SMA50（非先求稳）→ 仍标 A。",logicScore:"排序分数",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加权（上限约 8×0.6）；量比<0.4 −0.5；再依市场周期调整分数。",logicStep3:"XQ 策略选股",logicXqLead:"与每日名单并行：条件式命中（价量／筹码／财务／大师／周期）。缺栏标「资料不足」，不捏造。",logicXqPriceVol:"价量：均线多头、超短线作多等（OHLCV 实算）。",logicXqFlow:"筹码：法人同步等（公开张数门槛）。",logicXqFund:"财务：获利递增、PE／营益率等公开财报栏。",logicXqMasters:"大师：林奇／格雷厄姆／巴菲特等可计算代理条件。",logicXqCycle:"周期：科斯托拉尼／市场周期包（依当日美台姿态）。",logicOpenStrategies:"打开策略页",logicStep4:"排序降权／加权",logicStep4Lead:"scoreAdjust：依姿态对高 RS 缩量、firm-hands、恐慌稳定做加减分。",logicDemoteHot:"防守／精选：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日涨>2% → −1.2；缺双均线 −1.5。",logicDemoteThin:"K5：高相对强度但量能不足 → 降权／排除积极桶。",logicPromoteFirm:"aggressive／constructive：价弱量增且 SMA200（firm-hands）→ +2.2；早段放量上涨 +1.0。",logicDemotePanic:"stabilize_first：基准 −3；站上 SMA20 才 +1.5。",logicListSize:"名单长度：防守 ≈0.55×；精选 ≈0.75×；先求稳 ≈0.45×；积极 +2（上限14）；基准 12。",logicStep5:"「为什么」如何组成",logicStep5Lead:"why 栏为可读摘要，非模型黑箱——由当日可验证栏位串接。",logicWhyRs:"日涨跌 + 相对指数（美：S&P；台：加权）pp。",logicWhyMom:"五日%、约一个月%。",logicWhyVol:"量比≥1.2 才写入量能句。",logicWhySma:"SMA20／50／200 站上状态（双均线优先）。",logicWhyRegime:"附加周期备注或姿态／心理相位标签。",logicStep6:"纸上部位纪律",logicStep6Lead:"模拟账验证流程；非实单。部位受周期部位乘数与固定风险公式约束。",logicPaperCapital:"本金：台股 NT$3,000,000（整张）；美股 US$100,000（1 股起）。",logicPaperBuy:"买：名单（纯 observe 尽量不买）；风险＝权益×1%；停距≈价×1.5%（量比≥3→2.5%）；单档≤权益 8%。",logicPaperSizeMult:"部位乘数（0.3–1.35×）标示当日建议积极度；与名单长度联动。",logicPaperSell:"卖：停损 −3%；停利 +12% 半仓；破 SMA20 且日跌>2%；离名单且亏损；涨停风格隔日 −5%。",logicOpenPaper:"打开模拟页",logicFootnote:"框架合成仅供透明筛选说明，非投资建议。公开作者方法之可编码代理；不重制受著作权保护之原文。",condPass:"条件",condFail:"未过",condSkip:"略过",pe:"本益比",opMargin:"营益率",grossMargin:"毛利率",foreignInv:"外资",trustInv:"投信",dealerInv:"自营商",maBull:"均线多头",amplitude:"振幅",zhang:"张",limitUp:"涨停",momentum:"动能",metricPrice:"价格",metricDayPct:"日涨跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(张)",metricDebt:"负债比%",metricDirector:"董监持股%",metricOpQ:"近季营益率%",metricSource:"来源",foreign1d:"外资1日(张)",trust1d:"投信1日(张)",dealer1d:"自营商1日(张)",foreign5d:"外资5日(张)",trust5d:"投信5日(张)",dealer5d:"自营5日(张)"},is={...et,siteTitle:"毎日クオンツ選株",loading:"読み込み中…",disclaimer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",footer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",dataAsOf:"データ",taipei:"（台北）",navMain:"メインナビ",navToday:"本日",navStrategies:"戦略",navPaper:"模擬",navMore:"その他",navMoreClose:"閉じる",navLogic:"ロジック",researchTitle:"研究",navResearch:"研究",navOptions:"オプション",navEarnings:"決算を読む",earningsTitle:"決算を読む",earningsLead:"米国 Mag7 と注目決算の要約：何をしている会社か、主要数字、次に見る点——平易な言葉、日次更新。投資助言ではありません。",earningsDisclaimer:"投資助言ではありません。数値は公開 Yahoo Finance 由来；欠落は「データ不足」。個別の投資助言ではありません。",earningsUsFocus:"米国中心",earningsTwStub:"台湾株の決算は後日対応（スタブ）",earningsSelectionTitle:"注目リストのルール：",earningsSelectionFallback:"今後14日以内に決算がある非Mag7大型株（時価総額順）；または Yahoo 出来高上位；不足分は45日以内のカレンダーで補完。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——前回決算と次回日（判明時）。",earningsMag7Badge:"Mag7",earningsHotTitle:"注目・話題の決算",earningsHotLead:"上記ルールで選定；バッジが理由を示します。",earningsHotEmpty:"現在の窓に該当なし（またはデータ不足）",earningsWhatItDoes:"この会社は何をしているか",earningsWhatToWatch:"次に見る点",earningsNextDate:"次回決算",earningsLastEps:"前回 EPS",earningsRevYoy:"売上高 YoY",earningsEpsYoy:"利益 YoY",earningsPe:"PER",earningsForwardPe:"予想 PER",earningsEstimate:"予想",earningsDataMissing:"データ不足",earningsTagPrimary:"14日以内・大型",earningsTagActives:"出来高上位・14日",earningsTagRecent:"直近発表",earningsTagFallback:"45日カレンダー注目",earningsTagOther:"注目",earningsPartialBlocker:"一部データ取得不可",earningsRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",earningsLoadError:"決算ダイジェストを読めません（{msg}）",earningsEmpty:"決算ダイジェストを準備中です。しばらくしてからご確認ください。",navLookup:"銘柄検索",lookupTitle:"銘柄検索",lookupLead:"米株または台湾株のティッカーで会社概要・気配・決算ハイライトと公式財務リンクを表示。相場は Yahoo、公式開示は SEC／MOPS。投資助言ではありません。",lookupDisclaimer:"投資助言ではありません。相場は公開 Yahoo Finance、公式財務リンクは SEC EDGAR／MOPS。欠落は表示せず創作しません。取得は通信やソース制限の影響を受け得ます。",lookupInputLabel:"ティッカー",lookupPlaceholderUs:"例: AAPL",lookupPlaceholderTw:"例: 2330 または 2330.TW",lookupHintUs:"米株: AAPL、MSFT、NVDA など",lookupHintTw:"台湾株: 2330 のような4桁（.TW を自動付与；OTC は .TWO）",lookupSearch:"検索",lookupIdle:"ティッカーを入力して検索すると、気配と決算要約を表示します。",lookupLoading:"Yahoo Finance から取得中…",lookupEmptyInput:"ティッカーを入力してください",lookupInvalid:"形式を認識できません。米株は AAPL、台湾株は 2330 または 2330.TW",lookupNotFound:"このティッカーの気配が見つかりません。米／台タブと記号を確認してください。",lookupError:"検索に失敗（{msg}）",lookupBusiness:"事業内容",lookupQuoteStats:"気配と主要指標",lookupFinancials:"財務スナップショット",lookupEarnings:"決算ハイライト",lookupPrevClose:"前日終値",lookupVolume:"出来高",lookupDayRange:"本日レンジ",lookup52w:"52週レンジ",lookupMarketCap:"時価総額",lookupEps:"EPS（ttm）",lookupBeta:"Beta",lookupDivYield:"配当利回り",lookupRevenue:"売上高",lookupGrossMargin:"粗利率",lookupProfitMargin:"純利益率",lookupEpsConsensus:"EPS 予想",lookupEpsSurprise:"EPS サプライズ",lookupSources:"出典",lookupPartial:"一部の詳細項目は取得不可（取得できた数値のみ表示）。",lookupOfficialFilings:"公式財務書類",lookupOfficialFilingsLead:"公式の開示・届出へのリンクです。米国株は取得可能なとき直近の 10-K／10-Q／8-K も表示します。数値の創作はしません。",lookupSourceOfficial:"公式ソース",lookupSourceQuote:"相場ソース",lookupSourceCompany:"会社サイト",lookupSecEdgarSearch:"SEC EDGAR 会社届出検索",lookupSecEdgarBrowse:"SEC EDGAR 会社ページ",lookupSecFormsFilter:"SEC 10-K／10-Q フィルタ",lookupMopsFinancialBook:"公開資訊觀測站｜財務報告書",lookupMopsFinancialQuery:"公開資訊觀測站｜財務報告照会",lookupMopsCompany:"公開資訊觀測站｜会社基本情報",lookupMopsMaterial:"公開資訊觀測站｜重大情報",lookupTwseIsin:"TWSE ISIN／基本検索",lookupTpexCompany:"TPEx｜会社情報",lookupYahooTwQuote:"Yahoo 台湾相場（相場情報・公式書類ではない）",lookupCompanyWebsite:"会社ウェブサイト",lookupInvestorRelations:"IR（公開情報）",lookupRecentFilings:"直近の公式届出",lookupFilingForm:"様式",lookupFilingDate:"提出日",lookupFilingDoc:"書類",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"直近届出一覧を読み込めません（通信またはソース制限）。",lookupFilingsListEmpty:"表示できる直近の 10-K／10-Q／8-K がありません。",lookupFilingsLinksStillWork:"上の公式リンクは引き続き利用できます。",lookupFilingsTwNote:"台湾株の公式財務は MOPS（公開資訊觀測站）を主にしてください。下の相場リンクは補助です。",lookupFilingsCikUnavailable:"SEC CIK を特定できません。上の EDGAR でティッカー検索できます。",navSoxl:"SOXL",soxlTitle:"SOXL 半導体レバレッジ",soxlLead:"Direxion 半導体ブル3倍ETF：最新価格、イベント／異常、関連ニュース、SEC N-PORT 保有比率と寄与の概算——平易な整理。投資助言ではありません。",soxlDisclaimer:"投資助言ではありません。SOXLは約3倍の日次レバレッジETFで変動が極めて大きいです。保有比率はSEC N-PORT（当日ではない）、寄与は概算です。",soxlHeroLabel:"SOXL 最新価格",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正規取引終値",soxlLeverageNote:"SOXLはICE Semiconductor Indexの日次リターンの約3倍を目指します。夜間や複数日は単純な3倍ではありません。",soxlHoldingsAsOf:"保有比率基準日",soxlHoldingsNotSameDay:"最新N-PORT、当日ではない",soxlEventsTitle:"イベント／異常",soxlNewsTitle:"関連ニュース",soxlNewsEmpty:"関連ニュースはまだありません。",soxlHoldingsTitle:"保有と寄与の概算",soxlHoldingsLead:"比率はSEC N-PORT由来。現金と指数スワップが大きいことが多い。寄与≈比率×リターン（概算表示。3倍ETFのポイントとは異なる）。",soxlHoldingsEmpty:"保有リストを準備中です。しばらくしてからご確認ください。",soxlColName:"銘柄",soxlColWeight:"比率",soxlColReturn:"日次リターン",soxlColContrib:"寄与概算",soxlColReasons:"平易な理由",soxlContributionHint:"概算＝比率% × リターン% ÷ 100（バスケットのポイント。SOXLは約3×日次でETFポイントではない）",soxlSourceN:"出典 {n}",soxlOverallTitle:"上がる理由／下がる理由",soxlWhyUp:"上昇側の要因",soxlWhyDown:"下落側の要因",soxlRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",soxlLoadError:"SOXLデスクを読み込めません（{msg}）",navPodcasts:"著名人ポッドキャスト",podcastsTitle:"著名人ポッドキャスト",podcastsLead:"著名投資家／ホストの公開インタビューとポッドキャスト枠組み：要点を掃読、米／台分離、候補状態を明示——投資助言ではありません。",podcastsDisclaimer:"投資助言ではありません。公開インタビューと研究ライブラリ既存資料の整理。数値は出典付き。数学ゲート未通過は候補／様子見のみ。",podcastsFeatured:"注目",podcastsStubBadge:"候補スタブ",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（謝孟恭）",podcastsGooayeLead:"台湾のマーケット／マクロ／リスク／個人投資家心理のポッドキャスト。各回の要点は公開RSS番組ノートから整理（逐語録なし・投資助言ではありません）。",podcastsGooayeMarket:"台湾中心 · 米／台分離",podcastsGooayeStubNote:"軽量スタブ：完全条目と計算可能ルールは研究ライブラリ。ここにはエピソード引用を創作しません。",podcastsGooayePoint1:"銘柄話より先にリスクとサイズ",podcastsGooayePoint2:"半導体チェーンはバスケットで見る",podcastsGooayePoint3:"米は金利でリスクオン代理、台は別計算",podcastsGotoResearch:"研究ライブラリの条目へ",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"カテゴリ",podcastsCategories:"著名人podcastカテゴリ",podcastsMenuLead:"先にカテゴリを選んでから本文へ——長い記事を一覧に並べません。",podcastsOpenCategory:"このカテゴリを開く",gooayeLibraryBadge:"エピソード庫",gooayeDisclaimer:"候補／ウォッチ；数学ゲート閉鎖。「聴取済・分析」は公開音声＋音声認識後の株式ポイント。「番組ノートのみ」はRSSティーザーで未聴取。ホスト見解；投資助言ではありません。",gooayeLoading:"Gooayeエピソードを読み込み中…",gooayeLoadError:"エピソード庫を読み込めません（{msg}）",gooayeEpisodeCount:"全 {n} 回（公開RSS）",gooayeAsOf:"時点 {date}（台北）",gooayeEmptyCount:"うち {n} 回は公開テキスト不足（タイトルのみ）",gooayeSearchLabel:"エピソード検索",gooayeSearchPlaceholder:"タイトル・回番号・キーワード",gooayeSourceLine:"出典：",gooayeKeyPoints:"要点整理",gooayeNotesThin:"公開ノートはほぼタイトルのみで、要約できる本文がありません。",gooayeTeaserNote:"公開ショーノートは短め（短いフック＋広告が多い）です。上記は使える公開文のみ——音声未聴取・創作なし。",gooayeListen:"聴く（SoundOn）",gooayeLoadMore:"あと {n} 回表示（残り {left}）",gooayeShowingAll:"全 {n} 回を表示中",gooayeNoResults:"一致するエピソードがありません。",gooayeUntitled:"無題のエピソード",gooayeBadgeListened:"聴取済・分析",gooayeBadgeRssOnly:"番組ノートのみ",gooayeStockAnalysis:"株式ポイント分析（聴取済）",gooayeRssTeaserToggle:"公開番組ノート（RSS）",gooayeListenedAt:"聴取・整理 {date}（台北）",gooayeListenedCount:"聴取済 {n} 回",gooayeRssOnlyNote:"音声未聴取。上記は公開RSS／番組ノートのみで、聴取分析ではありません。",researchCatMenu:"カテゴリ",researchCategories:"研究カテゴリ",researchMenuLead:"タイプ／市場／状態を先に選び、その分類だけを閲覧します。",researchOpenCategory:"このカテゴリを開く",researchCatBooks:"書籍",researchCatPapers:"論文",researchCatPodcasts:"Podcast",researchCatUs:"米国フォーカス",researchCatTw:"台湾フォーカス",researchCatCandidate:"候補",researchCatWatch:"ウォッチ",researchBackMenu:"カテゴリに戻る",researchStatusFilters:"ステータス",godzillaTitle:"ゴジラ",godzillaLead:"Threads インタビュイー「哥吉拉」の米国株フレームワーク：時間と健康、RSU の再配置、ファンダ、能力圏、税務ペース、オプション道具——平易なカード。投資助言ではありません。",godzillaDisclaimer:"投資助言ではありません。公開インタビューの整理。数値・手法は本人の自述。数学ゲート未通過のため候補／様子見のみ。",godzillaHeroLabel:"ゴジラ枠組みの概要",godzillaKicker:"候補枠組み · 米国株中心",godzillaTagline:"健康な時間を自由に換える。現物が核、オプションは補助。税が回転ペースを決める。",godzillaBadgeCandidate:"候補",godzillaBadgeWatch:"様子見",godzillaUsFocus:"米国株中心",godzillaSelfReport:"本人の自述",godzillaListenedBadge:"聴取済・分析",godzillaStockTitle:"株式ポイント分析（聴取済）",godzillaStockLead:"公開 YouTube 音声＋音声認識に基づくインタビュー見解（候補／ウォッチ；投資助言ではない）。",godzillaStock1:"時間と健康は現金／RSU の積み増しより優先。金で時間は買えない。RSU が増えると退職目標も上がりがち。",godzillaStock2:"米テック報酬は RSU 比重が高い。株高は総報酬を押し上げると同時に単一銘柄集中リスクも拡大。",godzillaStock3:"タイミング（自述）：Tesla は早めに入り「もっと早く利確できた」とも。Meta は相対的に弱い局面で入った。",godzillaStock4:"次の注目は B2C の AI アプリ。挙げられた例は Tesla FSD と Palantir。AI の多くはまだ B2B。ハード投資は継続。",godzillaStock5:"NVIDIA に強気でも一銘柄全力は避ける。米 W2／税務と給与＋株の集中を一体で設計。",godzillaStock6:"台湾はキャピタルゲイン税なし vs 米国課税。流動性の意味が違い、米国流をそのままコピーしない。",godzillaStockNote:"STT: faster-whisper small int8。公開 YT 出典。数値・銘柄は本人見解。候補／ウォッチ。",godzillaSourceLabel:"出典",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"YouTube インタビューを見る",godzillaThesesTitle:"核心論点",godzillaThesesLead:"10の要点。詳細は本人の自述。",godzillaThesis1Title:"時間と健康は RSU 積み増しより大事",godzillaThesis1Body:"退職目標は膨らみやすい（自述例：$3,000万→$6,000万＋住居／子供）。止まるのは体が限界のときが多い。健康な40代で旅と自由を取るのは50–60代とは違う。",godzillaThesis2Title:"米RSUはインセンティブを変える",godzillaThesis2Body:"4年ベスティングで利害一致。台湾の現金賞与は自社株を買いづらい。",godzillaThesis3Title:"ベスティング日に売却し信念銘柄へ",godzillaThesis3Body:"確定RSUは当日売却し信念銘柄（例：NVDA）へ。給与＋未確定が同一カゴにならないように。",godzillaThesis4Title:"ファンダのみ",godzillaThesis4Body:"売上／EPSトレンド。ウォール街目標は無視。ニュース雑音は害が多い。",godzillaThesis5Title:"能力圏：ハード／テック",godzillaThesis5Body:"ハード／テック——NVDA最大。PLTR、AVGO、TSMも。テック外は少ない。指数は今は小さめ、終局はほぼ指数。",godzillaThesis6Title:"税がペースを決める",godzillaThesis6Body:"高W2はCG税が重い。退職後は数年かけて個別→指数へ税負担を許容内に。カバードコールで下落緩衝。",godzillaThesis7Title:"オプションは道具",godzillaThesis7Body:"主に売り手（CC／CSP）。ロングコール／LEAPは恐慌や価格とファンダ乖離時のみ少額。プレミアム全損を許容。裸売りなし。",godzillaThesis8Title:"カバードコール：割当リスクはロール",godzillaThesis8Body:"割当リスクなら時間を延ばしてロール。小さなプレミアムのためにコアを売らない。不安なら枚数を減らす。",godzillaThesis9Title:"エントリーはトレンド待ち",godzillaThesis9Body:"きれいな決算1–2回でトレンド確認。コストが上がっても可。余資で良い会社を買い続ける。話題の噂は追わない。",godzillaThesis10Title:"米／台の観察は分ける",godzillaThesis10Body:"米CG税→長期保有寄り。台はCGなし＋取引税→回転と投機文化が強め（観察のみ）。",godzillaChecklistTitle:"作法チェック",godzillaChecklistLead:"自己点検。発注リストではない。",godzillaCheck1:"物欲を低く。「足りた」数字を無限に上げない。",godzillaCheck2:"現物が核。オプションは衛星／ヘッジ／まれなレバレッジ。",godzillaCheck3:"借入なし。ゼロを受け入れられないならオプションしない。",godzillaCheck4:"オプションは流動性の高い大型株優先。",godzillaCheck5:"終局目安：約80%広範指数、小さな業種スリーブ（＋まれな少額コール）。",godzillaCheck6:"PLTR例：前線エンジニアによるB2B収益化。商業成長が失望なら縮小。",godzillaOptionsTitle:"オプションの使い方",godzillaOptionsLead:"売り手優先。買い側は極端な乖離時のみ。",godzillaOpt1:"主力：カバードコール、キャッシュ担保プット。",godzillaOpt2:"少額ロングコール／LEAP：恐慌やファンダ乖離時。",godzillaOpt3:"プレミアムは全損あり得る。裸売りなし。",godzillaOpt4:"割当リスクはロール。コアを小さなプレミアムで売らない。",godzillaRsuTitle:"RSU・税・ローテーション",godzillaRsuLead:"インセンティブ、分散、退職後の税ペース。",godzillaRsu1:"確定RSUは当日売却し信念銘柄へ（例：NVDA）。",godzillaRsu2:"在職中は大口実現益を抑え、退職後に数年かけて個別→指数。",godzillaRsu3:"カバードコールは下落緩衝であり方向賭けではない。",godzillaTwTitle:"台湾市場の観察",godzillaTwLead:"米フレームワークと分離。税／文化の観察のみ。",godzillaTwBody:"米はCG税で長期寄り。台はCGなし＋取引税で回転と短期文化が目立つ。本ページは米枠が主軸。台は対照のみで正式スクリーナーには入れない。",godzillaGateNote:"正式スクリーナー未収録",godzillaGateDetail:"状態：候補／strategyCandidate=watch。数学ゲート閉鎖——ライブスクリーナーやペーパー取引には未接続。閲覧用。",jensenTitle:"ジェンスン・フアン（黄仁勲）",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公開講演の整理：視点、需要とムーアの法則、文化、キャッシュ現実、再発明——候補／様子見。投資助言ではありません。",jensenDisclaimer:"投資助言ではありません。Stanford Online 公開講演（約2009；YouTube 2011アップロード）の整理。論点は講演者の自述テーマ。数学ゲート未通過のため候補／様子見のみ。",jensenHeroLabel:"ジェンスン・フアン講演の要点",jensenKicker:"候補講演 · 米国テック／半導体の会社づくり",jensenTagline:"曖昧な「ビジョン」より視点。文化と再発明が長期の会社建設を支える。",jensenUsFocus:"米国テック中心",jensenTalkBadge:"公開講演",jensenListenedBadge:"聴取済・分析",jensenStockTitle:"事業／株式メモ（聴取済）",jensenStockLead:"公開 Stanford ETL 講演の音声＋音声認識（約2009；歴史的見解であり直近決算ではない）。候補／ウォッチ；投資助言ではない。",jensenStock1:"創業（1993）：PC＋3D／ゲームが大市場になると賭ける。当時VC／親は「ゲームのために会社」を疑った。",jensenStock2:"競争：コンシューマ3Dに数十〜数百社。NVIDIAは最終的に唯一のコンピュータグラフィックス企業と自述——事業の本質（半導体／Moore's Law＝競争律）理解と再発明が鍵。",jensenStock3:"プログラマブルシェーダ：成功した固定機能を自ら食う。初代は会社を危うくしたが、やらねば Moore's Law の速度で死ぬと認識。",jensenStock4:"資源配分：競争が価格を決め、CEOが参入を決める。希少資源と需要・機会費用を見る（会計費用だけではない）。",jensenStock5:"文化：計算された失敗への耐性が革新に必要。スタートアップ＝ほぼ常に倒産寸前。汎用GPU（スイスアーミーリスク）は媒体寿命を延ばし得る。",jensenStock6:"時点：現代のAI学習ブーム以前の歴史講演。今日のデータセンタ損益に1:1外挿しない。NVIDIAは登壇者の会社；候補／ウォッチ。",jensenStockNote:"STT: faster-whisper small int8 (en)。出典 YT Xn1EsFe7snQ／Stanford ETL。歴史的見解。",jensenMeta:"Stanford Online · STVP ETL · 約1:03:38 · アップロード 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"YouTube で講演を見る",jensenOpenYoutube:"YouTube でフル動画を開く",jensenEmbedTitle:"Jen-Hsun Huang: Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 関連クリップ",jensenHighlightsTitle:"講演の要点（平易）",jensenHighlightsLead:"公開講演に繰り返し現れる5テーマ。逐語録ではありません。",jensenH1Title:"曖昧な「ビジョン」ではなく視点",jensenH1Body:"誰もが視点を持つ。NVIDIA 初期の賭けは、PC＋安価な3Dがゲーム市場を開く（後に Keyhole→Google Earth にも言及）というもので、当時多くのVCには市場がほぼゼロに見えた。",jensenH2Title:"飽くなき需要とムーアの法則",jensenH2Body:"新カテゴリがまだ値付けできないとき、顧客の声を一時無視することもある。rinse-and-repeat の後、「十分良い」が媒体を殺す前に再発明（固定機能→プログラマブルシェーダ／GeForce FX の瀕死、CG言語）。",jensenH3Title:"文化：計算されたリスク",jensenH3Body:"革新には計算されたリスク、速い失敗への耐性、知的誠実さ、進路変更の意思が必要。動機は情熱と目的であり「会社を売る」ことではない。",jensenH4Title:"キャッシュとスタートアップの現実",jensenH4Body:"常に資金調達、節約、または収益化。スタートアップはほぼ常に倒産寸前。VCは完璧な事業計画より、人と十分大きな市場に賭ける。",jensenH5Title:"再発明：成功も解体して再建",jensenH5Body:"あらゆる成功は最終的に解体し再建される。フアンが語るのは長期の会社建設であり、連続フリップではない。",jensenTwTitle:"米／台の分離（文脈のみ）",jensenTwLead:"市場の主軸は米国テック／半導体の会社建設。台湾はサプライチェーン文脈のみ——台湾株の銘柄創作なし。",jensenTwBody:"米半導体／計算プラットフォームとしての NVDA は、台湾のファウンドリと OSAT 生態系と強く結ばれる——産業文脈の注記のみ。台湾銘柄リストなし、正式スクリーナー未接続。",jensenGateNote:"正式スクリーナー未収録",jensenGateDetail:"状態：候補／strategyCandidate=watch。数学ゲート閉鎖——ライブスクリーナーやペーパー取引には未接続。閲覧用。",jensenWatchCta:"YouTube で視聴",jensenEmbedBlockedNote:"この講演は所有者の設定により YouTube でのみ視聴できます（他サイトへの埋め込みは無効）。",optionsTitle:"米国オプション",optionsLead:"McMillan の戦略ファミリーを軸に、ボラと損益形→公開 Yahoo チェーンで学習。投資助言ではありません。",optionsDisclaimer:"投資助言ではありません。オプションは高リスク。教育と公開データのみ。",optionsBookBadge:"この本",optionsBookCite:"主要参考文献",optionsBookLead:"Lawrence G. McMillan『選択権策略完全手冊』第5版：見通し＋ボラで戦略族へ（独自要約・原文なし）。",optionsBookFallbackTitle:"McMillan オプション戦略ハンドブック",optionsGotoResearch:"研究ライブラリの条目へ",optionsUsOnly:"米国のみ",optionsQualityTitle:"原資産の軽い財務チェック",optionsQualityLead:"副次フィルタ：PER、PBR、負債、ROE、売上／利益トレンド。欠落は資料不足。",optionsViewTitle:"オプション観点（McMillan）",optionsViewLead:"公開チェーン：ATM IV、実現ボラ、出来高偏り。戦略族は教育用。",optionsMcmillanFirst:"先にボラ状態と損益形を合わせ、その後でファミリーを選ぶ。",optionsPe:"PER",optionsPb:"PBR",optionsDebt:"負債／資本",optionsRoe:"ROE",optionsRevTrend:"売上トレンド",optionsEarnTrend:"利益トレンド",optionsGate:"品質ゲート",optionsGatePass:"通過",optionsGateWatch:"注視",optionsGateFail:"弱め",optionsGateIncomplete:"資料不足",optionsDataMissing:"資料不足",optionsForwardPe:"予想PER",optionsTrendUp:"上昇 約{pct}%",optionsTrendDown:"低下 約{pct}%",optionsTrendFlat:"横ばい 約{pct}%",optionsAtmIv:"ATM インプライド",optionsHv:"歴史ボラ（約1か月）",optionsIvHv:"IV／HV",optionsVolRegime:"ボラ状態",optionsRegimeIvRich:"IV高め",optionsRegimeIvCheap:"IV安め",optionsRegimeIvFair:"おおむね均衡",optionsRegimeIvOnly:"IVのみ",optionsCallPutVol:"コール／プット出来高",optionsAtmStrike:"近ATM行使価格",optionsExpiry:"満期",optionsSkewPutHeavy:"プット寄り",optionsSkewCallHeavy:"コール寄り",optionsSkewBalanced:"おおむね均衡",optionsEduSetups:"戦略ファミリー（教育）",optionsEduSetupsLead:"見通し＋ボラで選ぶ。緑は現状の IV/HV とよく議論される組（助言ではない）。",optionsSetupCoveredCall:"カバードコール",optionsSetupCoveredCallBody:"株を持ちコールを売る。プレミアムを得るが上昇は頭打ち。",optionsSetupCoveredCallWarn:"利益に天井。株の下落リスクは残る。",optionsSetupProtectivePut:"プロテクティブプット",optionsSetupProtectivePutBody:"株＋プット買い＝保険。下値に床、だが保険料がかかる。",optionsSetupProtectivePutWarn:"保険コストがリターンを削る。IVが高いと高い。",optionsSetupVertical:"バーティカル",optionsSetupVerticalBody:"同満期・異行使価格で損益を枠内に限定。",optionsSetupVerticalWarn:"方向ミスでも損失。ただし上限あり。",optionsSetupCalendar:"カレンダー／ダイアゴナル",optionsSetupCalendarBody:"異満期で時間やボラ変化の見方を表す。",optionsSetupCalendarWarn:"時間とボラに敏感。スポット移動で形が変わる。",optionsSetupStraddle:"ストラドル／ストラングル",optionsSetupStraddleBody:"両側で「大きく動く」か「動き不足」に賭ける。",optionsSetupStraddleWarn:"買いは大きな値動きが必要。売りは両側リスク。",optionsSetupButterfly:"バタフライ",optionsSetupButterflyBody:"中心付近にピン留めを期待。利益ゾーンは狭い。",optionsSetupButterflyWarn:"スイートスポットが薄い。外れると最大損に近い。",optionsSetupVolAligned:"現状ボラとよくセットで語られる",optionsSetupVolNotAligned:"現状ボラとはやや遠い（学習は可）",optionsRiskShape:"損益の形（平易）",optionsNoSetups:"戦略メモなし",optionsPickTicker:"上のティッカーを選んでください",optionsChainBlocked:"オプションチェーンを取得できません",optionsPartialBlocker:"一部フィールド不足",optionsRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",optionsLoadError:"オプションスナップショットを読めません（{msg}）",optionsEmpty:"米国サンプルなし — 先に fetch-us-options",optionsGlossaryTitle:"小さな用語集（式なし）",optionsTermDelta:"デルタ（方向感）",optionsDefDelta:"株が動くときオプションがどれだけ付きやすいか。1や−1に近いほど連動が強い。",optionsTermIv:"インプライドボラ IV",optionsDefIv:"市場が織り込む将来の揺れ。高いほどオプションは高くなりやすい。",optionsTermHv:"歴史ボラ HV",optionsDefHv:"直近の実際の値動きの大きさ。IVと比較する。",optionsTermAtm:"ATM（ニアマネー）",optionsDefAtm:"現値に最も近い行使価格。ボラの温度計によく使う。",optionsTermSkew:"出来高の偏り",optionsDefSkew:"コールとプットのどちらが多いか。粗い保険／追撃のヒント。",optionsTermProb:"確率（教育）",optionsDefProb:"「多め／少なめ」の直感のみ。結果保証や個人勝率は出さない。",researchLead:"書籍と論文：タイトル → 要約 → 要点のやり方 → 戦略候補の可否",researchMathGateBanner:"戦略への正式採用は数学ゲート通過が必要（未通過）— 候補のみ",researchMathGate:"数学ゲート",researchMathGateDefault:"数学ゲート未通過",researchFormulas:"プログラム可能な式",researchTakeaways:"要点のやり方",researchNoTakeaways:"要点なし",researchSources:"出典",researchFilters:"フィルター",researchFilterAll:"すべて",researchType:"種類",researchTypeBook:"書籍",researchTypePaper:"論文",researchTypePodcast:"ポッドキャスト",researchMarketBoth:"米＋台",researchStrategy:"戦略候補",researchCandYes:"候補採用",researchCandNo:"不採用",researchCandWatch:"様子見",researchStatusCandidate:"候補",researchStatusDeferred:"保留",researchStatusAdopted:"採用",researchStatusRejected:"除外",researchCounts:"書籍 {books} · 論文 {papers} · Podcast {podcasts} · 表示 {total}",researchEmpty:"この条件に一致する項目はありません",researchNoFormulas:"式なし",researchLoadError:"研究ライブラリを読み込めません（{msg}）",researchShelfFilters:"書棚分類",researchShelfCoreInvesting:"コア投資クラシック",researchShelfValueInvesting:"バリュー投資",researchShelfBusiness:"ビジネス／経営",researchShelfLifePartner:"人生とパートナーの知恵",researchShelfOptions:"オプション／デリバティブ",researchShelfRecentReads:"最近の読書・推薦",researchShelfFiConcepts:"必須のマネーリテラシー",researchShelfMoneyValues:"お金の価値観",researchShelfInvestingBasics:"投資入門",researchShelfAssetAllocation:"資産配分",researchShelfFinancials:"財務諸表分析",researchShelfMarketAnalysis:"投資分析・市場攻略",researchShelfEconAnalysis:"経済分析",researchShelfPsych:"投資心理／ランダム／人間性",researchShelfBiographies:"伝記",researchShelfAdjacent:"その他／隣接",todayPicks:"本日の選株",market:"市場",hot:"相場",marketQuotes:"相場気配",macroTitle:"米株重要日程",macroTzEt:"時刻・米東部 ET",macroAsOf:"更新",macroStale:"データが古い（前回成功分を表示）",macroToday:"本日",macroNext:"次",macroHighImpact:"高影響",macroEmpty:"直近の高影響イベントなし（または未更新）",macroLoadError:"米株重要日程を読み込めません（{msg}）",liveQuotesLive:"リアルタイム",liveQuotesStale:"気配が古い（前回成功分を表示）",liveQuotesPending:"リアルタイム接続中…",macroEvent_fomcDecision:"FOMC 金利決定",macroEvent_fomcMinutes:"FOMC 議事要旨",macroEvent_cpi:"CPI",macroEvent_ppi:"PPI",macroEvent_pce:"PCE／コア PCE",macroEvent_nfp:"非農業部門雇用者数",macroEvent_joblessClaims:"新規失業保険申請",macroEvent_gdp:"GDP",macroEvent_retailSales:"小売売上高",macroEvent_ismMfg:"ISM 製造業",macroEvent_ismServices:"ISM 非製造業",macroEvent_jolts:"JOLTS",usStock:"米国株",twStock:"台湾株",usList:"米国リスト",twList:"台湾リスト",usTop:"米国 Top",twTop:"台湾 Top",emptyTop:"{market} の Top 候補はありません",ticker:"銘柄",name:"名称",price:"価格",dayPct:"日次%",priorClose:"前日比",priorCloseFull:"前日終値比",pct5d:"5日",pct1m:"約1ヶ月",volRatio:"出来高比",ma:"移動平均",screening:"スクリーニング",reason:"理由",details:"詳細",business:"事業",risk:"リスク",observe:"観察",dataIncomplete:"データ不足",intraday:"場中",taipeiClose:"台北終値",parity:"パリティ",implied:"理論価格",premium:"プレミアム",adsRatio:"交換比率",taiex:"台湾加重 TAIEX",otc:"櫃買",loadError:"データを読み込めません（{msg}）。静的サーバーと data/latest.json を確認してください。",langLabel:"言語",paper:"模擬",paperMissing:"模擬ポートフォリオがありません。npm run paper を実行してください。",paperDisclaimer:"累積模擬口座（{date} 起） · 毎日リセットしません · シグナル即約定 · 実注文ではありません",paperRules:"ルール（市場別独立口座）",paperRuleTw:"台湾元本 NT$3,000,000 · 単元取引",paperRuleUs:"米国元本 US$100,000 · 1株から",paperRuleBuy:"買：リスト·リスク1%·ストップ1.5%·単銘柄≤8% · 即約定",paperRuleSell:"売：損切−3% · 利確+12%半分 · SMA20割れかつ日−2%超 · リスト外かつ損失 · ストップ高翌日−5%",paperTabTw:"台湾口座 · NT$",paperTabUs:"米国口座 · US$",paperBookTw:"台湾帳簿（NT$）",paperBookUs:"米国帳簿（US$）",principal:"元本",cash:"現金",equity:"純資産（ポジション＋現金）",totalPnl:"総損益",totalPnlPct:"総損益％",weekPerf:"週次",monthPerf:"月次",quarterPerf:"四半期",yearPerf:"年次",sinceInception:"開始以来",noTradesToday:"本日この種別の約定はありません（模擬）",noPositions:"保有なし",buy:"買",sell:"売",shares:"株",qtyShares:"株数",positions:"現在のポジション",position:"ポジション",avgCost:"平均単価",mark:"時価",mktValue:"時価総額",dayPnl:"日次損益",costBasis:"取得総額",weightPct:"比率％",posScrollHint:"左右にスクロールで全列",unrealizedPnl:"含み損益",unrealizedPct:"含み％",recentTrades:"約定（直近40）",paperSession:"{date} · {inception} から累積 · シグナル即約定",reasonScreenBuy:"リスト新規",reasonAdd:"追加買い",reasonStop:"損切り",reasonTakeProfit:"利確",reasonMomentumBreak:"モメンタム悪化",reasonOffList:"リスト外",reasonLimitUpChase:"ストップ高追撃解消",stopLoss:"損切り",takeProfit:"利確",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"パフォーマンス",qty:"数量",note:"備考",strategyScreen:"戦略スクリーナー",strategyLead:"米／台ヒットを分けて表示 · データ不足は「不足」",strategyLoading:"戦略を読み込み中…",strategyEmpty:"戦略データがありません。npm run strategies を実行してください。",strategyLoadError:"戦略を読み込めません（{msg}）。npm run strategies を確認してください。",strategyList:"戦略一覧",strategyCat:"カテゴリ",hitCount:"ヒット",hitTitle:"ヒット数",strategyDetails:"詳細 · 戦略説明",conditions:"条件",results:"結果",copyJson:"JSON をコピー",exportCsv:"この戦略を CSV 出力",exportJson:"JSON 出力",copied:"コピー済み",noHitsExport:"本日この戦略のヒット行はありません",incomplete:"不足",hitsTotal:"{n}件",twOnlyHint:"台湾株のみ",hitMarket:"ヒット市場",noHits:"本日ヒットなし",dataInsufficient:"データ不足",calibTitle:"キャリブレーション",incompleteFilters:"未検査フィルター（通過扱いしない）：",sessionTwse:"TWSE session",ohlcvBar:"OHLCV バー",generated:"生成",universeTw:"台湾ユニバース",universeUs:"米国ユニバース",cat精選:"厳選",cat價量:"価格/出来高",cat籌碼:"需給",cat財務:"財務",cat大師:"マスター",cat週期:"サイクル",cat技術:"テクニカル",cat基本:"ファンダ",cat綜合:"総合",addWatchlist:"ウォッチ追加",watchlistAdded:"{ticker} を追加しました",watchlistExists:"{ticker} は登録済み",copyFailed:"コピー失敗",csvDownloaded:"CSV を保存しました",csvBlocked:"ダウンロード阻害 — データURIを開きます",backtestSoon:"バックテスト：未開放",backtestHint:"バックテストエンジン未開放（偽結果なし）",regimeToday:"本日の市場レジーム（米／台は別管理）",psychologyPhase:"心理フェーズ",cycleStance:"サイクル姿勢",liquidityBias:"流動性バイアス",temperatureScore:"市場温度",sizeMult:"サイズ倍率",regimeTags:"レジームタグ",dataGaps:"データ欠落",marketRegime:"市場レジーム",enum_euphoric:"陶酔",enum_late_optimism:"後期楽観",enum_mid_cycle:"中期",enum_cautious_recovery:"慎重な回復",enum_despondent:"絶望",enum_panic:"パニック",enum_defensive:"守備的",enum_selective:"厳選",enum_balanced:"均衡",enum_constructive:"建設的",enum_aggressive:"積極",enum_stabilize_first:"まず安定",enum_risk_off:"リスクオフ",enum_risk_on:"リスクオン",enum_neutral:"中立",logicTitle:"選別ロジック",logicSubtitle:"レジーム→スクリーニング→戦略→降格→理由→サイジング — 監査可能な数式",logicNoRegime:"市場レジーム未取得（次回スキャン待ち）。",logicStep1:"市場レジーム",logicStep1Lead:"米／台を別ダイヤルで先に決め、その後銘柄を選別。Kostolany 位相 × Marks 温度 × 金利流動性。",logicStep1Caption:"位相 → スクリーニング姿勢 → サイズ倍率（STANCE_SIZE_MULT）",logicRatesR2:"R2：^TNX が 20 日で +0.25pp 以上 → 流動性は防御寄り（価格が中立でも）。",logicRatesR3:"R3：利回りが 60 日で −0.25pp 以下 → より積極ダイヤルを許容（陶酔以外）。",logicRatesSeparate:"硬規則：dial_US と dial_TW は分離。単一の「世界ムード」にしない。",logicStep2:"数式スクリーン（A／B）",logicStep2Lead:"RS・モメンタム・SMA・出来高。閾値はサイクル姿勢で変動。",logicScreenA:"スクリーン A · モメンタム／RS",logicScreenABalanced:"均衡：日RS≥0.5pp または日≥1.5%；または5日≥3%；または1月≥6%かつ>SMA20；または両MAで5日≥0／RS≥0。",logicScreenASelective:"厳選：>SMA50 かつ（RS≥0.5 または5日≥3% または1月≥6%かつSMA20）。",logicScreenADefensive:"守備的：SMA20+SMA50、かつ（RS≥0.8 または5日≥4%）、出来高≥1.0（欠損は可）；1月≥12%かつ出来高<0.8 → 除外。",logicScreenAAggressive:"積極／建設的：RS／日／5日／1月を緩和；SMA200 下の firm-hands 可（1月<0かつ出来高≥1.4）。建設的は SMA20 または SMA200 も必要。",logicScreenAStabilize:"まず安定：>SMA20 必須、かつ RS≥1.0pp または出来高≥1.5。",logicScreenB:"スクリーン B · 出来高",logicScreenBVol:"出来高比＝当日／20日平均。下限：守備的≥1.0；積極≥1.1；他≥1.2。",logicScreenBMom:"A 補完：A未達でも1月≥8%かつSMA20+SMA50（まず安定以外）→ A 付与。",logicScore:"順位スコア",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"出来高≥1.2 加点（上限約8×0.6）；<0.4 で −0.5；その後レジームで調整。",logicStep3:"XQ 戦略",logicXqLead:"日次リストと並行：条件ヒット（価格/出来高・需給・財務・マスター・サイクル）。欠落は「不足」—捏造しない。",logicXqPriceVol:"価格/出来高：移動平均ブル、超短期など（OHLCV）。",logicXqFlow:"需給：法人同期など（公開単元閾値）。",logicXqFund:"財務：利益増加、PE／利益率など公開欄。",logicXqMasters:"マスター：リンチ／グレアム／バフェット系の計算可能代理。",logicXqCycle:"サイクル：Kostolany／市場レジームパック（当日の米台ダイヤル）。",logicOpenStrategies:"戦略ページを開く",logicStep4:"順位の降格／加点",logicStep4Lead:"scoreAdjust：薄い高RS、firm-hands、パニック後の安定で加減点。",logicDemoteHot:"守備的／厳選：1月≥8%かつ出来高<0.8 → −2.5；出来高<0.7かつ日>+2% → −1.2；両MA欠で −1.5。",logicDemoteThin:"K5：強いRSでも薄い出来高 → 降格／積極バケット外。",logicPromoteFirm:"aggressive／constructive：弱含み＋出来高増＋>SMA200（firm-hands）→ +2.2；序盤の上昇日出来高 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；>SMA20 なら +1.5。",logicListSize:"リスト長：守備的≈0.55×；厳選≈0.75×；まず安定≈0.45×；積極+2（上限14）；基準12。",logicStep5:"「なぜ」の組み立て",logicStep5Lead:"why 欄は検証済みフィールドの読みやすい結合 — ブラックボックスではない。",logicWhyRs:"日次% + 指数対比（米：S&P；台：TAIEX）pp。",logicWhyMom:"5日% と 約1か月%。",logicWhyVol:"出来高比≥1.2 のときのみ出来高文を追加。",logicWhySma:"SMA20／50／200 の上抜け状態（両MA優先）。",logicWhyRegime:"レジーム注記または姿勢／心理フェーズタグを付記。",logicStep6:"ペーパー・サイジング規律",logicStep6Lead:"ペーパー口座はプロセス検証用 — 実注文ではない。レジームサイズ倍率と固定リスク式で制約。",logicPaperCapital:"元本：台湾 NT$3,000,000（単元）；米国 US$100,000（1株〜）。",logicPaperBuy:"買い：リスト（observeのみは原則回避）；リスク＝資本×1%；ストップ≈価格×1.5%（出来高≥3→2.5%）；1銘柄≤資本8%。",logicPaperSizeMult:"サイズ倍率（0.3–1.35×）で当日の積極度を表示；リスト長と連動。",logicPaperSell:"売り：損切−3%；利確+12%半減；SMA20割れかつ日<−2%；リスト外かつ含み損；ストップ高追撃の翌日−5%。",logicOpenPaper:"ペーパーを開く",logicFootnote:"透明なスクリーニング説明のための合成 — 投資助言ではない。公開の運用代理のみ；著作権保護の本文は複製しない。",condPass:"条件",condFail:"未達",condSkip:"省略",pe:"PER",opMargin:"営業利益率",grossMargin:"粗利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自己売買",maBull:"移動平均ブル",amplitude:"振幅",zhang:"単元",limitUp:"ストップ高",momentum:"モメンタム",metricPrice:"価格",metricDayPct:"日次%",metricVolRatioYday:"出来高比(昨)",metricVolToday:"出来高(単元)",metricDebt:"負債比率%",metricDirector:"役員持株%",metricOpQ:"直近四半期営業利益率%",metricSource:"出典",foreign1d:"外資1日(単元)",trust1d:"投信1日(単元)",dealer1d:"自己1日(単元)",foreign5d:"外資5日(単元)",trust5d:"投信5日(単元)",dealer5d:"自己5日(単元)"},nt={"zh-Hant":et,en:ss,"zh-Hans":os,ja:is},ns=/\b(euphoric|late_optimism|mid_cycle|cautious_recovery|despondent|panic|defensive|selective|balanced|constructive|aggressive|stabilize_first|risk_off|risk_on|neutral)\b/g;function V(t){if(t==null||t==="")return s("dataInsufficient");const e=String(t),a=`enum_${e}`,i=e.includes("_")?e.replace(/_/g," "):e;return s(a,i.replace(/\b\w/g,n=>n.toUpperCase()))}function ls(t){const e=String(t||"").toLowerCase();return["defensive","selective","balanced","constructive","aggressive","stabilize_first"].includes(e)?e.replace(/_/g,"-"):"neutral"}function rs(t){return t==null||t===""?"":String(t).replace(ns,e=>V(e))}function s(t,e,a){let i,n=a;e&&typeof e=="object"&&!Array.isArray(e)?n=e:typeof e=="string"&&(i=e);let r=(nt[W]||nt[dt])[t]??nt[dt][t]??i??t;if(n)for(const[c,p]of Object.entries(n))r=r.replace(new RegExp(`\\{${c}\\}`,"g"),String(p));return r}function cs(){const t=ya.map(e=>`<option value="${e.id}"${e.id===W?" selected":""}>${e.label}</option>`).join("");return`
    <label class="lang-switch" title="${s("langLabel")}">
      <span class="lang-switch-label">${s("langLabel")}</span>
      <select class="lang-select" data-lang-select aria-label="${s("langLabel")}">
        ${t}
      </select>
    </label>`}function ds(t,e){var i;const a=(i=t==null?void 0:t.querySelector)==null?void 0:i.call(t,"[data-lang-select]");a&&(a.value=W,a.addEventListener("change",()=>{ts(a.value)}))}function o(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function f(t,e){return o(s(t,e))}const ps="./data/paper-portfolio.json";function J(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function Ie(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function ba(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(z(),{minimumFractionDigits:e,maximumFractionDigits:e})}function $a(t){return t==="USD"?"US$":t==="TWD"?"NT$":""}function K(t,e){if(t==null||Number.isNaN(t))return"—";const a=e==="TWD"?0:2;return`${$a(e)}${ba(t,a)}`}function Fe(t,e){if(t==null||Number.isNaN(t))return"—";const a=e==="TWD"&&t>=100?0:2;return`${$a(e)}${ba(t,a)}`}function Ta(t){return{"screen-buy":s("reasonScreenBuy"),add:s("reasonAdd"),stop:s("reasonStop"),"take-profit":s("reasonTakeProfit"),"momentum-break":s("reasonMomentumBreak"),"off-list":s("reasonOffList"),"limit-up-chase":s("reasonLimitUpChase")}[t]||t||""}function we(t){return t?`
    <div class="paper-win">
      <div class="w-label">${t.sinceInception?f("sinceInception",s("sinceInception")):o(t.label||"")}</div>
      <div class="w-val ${J(t.pct)}">${Ie(t.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function us(t,e){return t.length?t.map(a=>{var i;return`
      <tr>
        <td><span class="ticker">${o(a.ticker)}</span></td>
        <td class="name-cell">${o(a.name||"")}</td>
        <td class="num">${(i=a.qty)==null?void 0:i.toLocaleString(z())}</td>
        <td class="num">${Fe(a.price,e)}</td>
        <td><span class="badge reason ${o(a.reason||"")}">${o(Ta(a.reason))}</span></td>
        <td class="why-cell">${o(a.reasonText||"")}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${o(s("noTradesToday"))}</td></tr>`}function gs(t){return t.dayPct==null||Number.isNaN(t.dayPct)||t.mark==null||t.qty==null?null:t.mark*t.qty*t.dayPct/100}function hs(t,e,a){if(!t.length)return`<tr><td colspan="11" class="empty-cell">${o(s("noPositions"))}</td></tr>`;const n=a>0?a:t.reduce((l,r)=>l+(r.mark||0)*(r.qty||0),0);return t.map(l=>{var k;const r=(l.mark||0)*(l.qty||0),c=(l.avgCost||0)*(l.qty||0),p=(l.mark-l.avgCost)*l.qty,d=l.avgCost?(l.mark-l.avgCost)/l.avgCost*100:0,u=gs(l),g=n>0?r/n*100:null,m=l.name?o(l.name):"";return`
      <tr class="pos-row" data-lq="pos" data-lq-sym="${o(l.ticker)}"
          data-ticker="${o(l.ticker)}"
          data-lq-qty="${l.qty??""}" data-lq-avg="${l.avgCost??""}" data-lq-ccy="${o(e)}"
          data-lq-mark="${l.mark??""}" data-lq-daypct="${l.dayPct??""}"
          tabindex="0">
        <td class="pos-sym">
          <span class="ticker">${o(l.ticker)}</span>
          ${m?`<span class="pos-name">${m}</span>`:""}
        </td>
        <td class="num">${(k=l.qty)==null?void 0:k.toLocaleString(z())}</td>
        <td class="num" data-lq-field="price">${Fe(l.mark,e)}</td>
        <td class="num">${K(r,e)}</td>
        <td class="num ${J(u)}">${u==null?"—":K(u,e)}</td>
        <td class="num ${J(l.dayPct)}" data-lq-field="dayPct">${Ie(l.dayPct)}</td>
        <td class="num ${J(p)}">${K(p,e)}</td>
        <td class="num ${J(d)}">${Ie(d)}</td>
        <td class="num">${K(c,e)}</td>
        <td class="num">${Fe(l.avgCost,e)}</td>
        <td class="num">${g==null?"—":`${g.toFixed(2)}%`}</td>
      </tr>`}).join("")}function ms(t,e,a){const i=e.currency,n=s(t==="TW"?"paperBookTw":"paperBookUs"),l=K(e.startCash,i),r=(a==null?void 0:a.totalPnl)??e.equity-e.startCash,c=(a==null?void 0:a.totalPnlPct)??(e.startCash?(e.equity-e.startCash)/e.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${o(n)}</h3>
      <p class="paper-start">${f("principal",s("principal"))} ${l}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">${o(s("cash"))}</div>
          <div class="k-val" data-lq-kpi="cash">${K(e.cash,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${f("position",s("equity"))}</div>
          <div class="k-val" data-lq-kpi="equity">${K(e.equity,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${o(s("totalPnl"))}</div>
          <div class="k-val ${J(r)}" data-lq-kpi="pnl">${K(r,i)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${o(s("totalPnlPct"))}</div>
          <div class="k-val ${J(c)}" data-lq-kpi="pnlPct">${Ie(c)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${o(s("weekPerf"))}</div>
          ${we(a==null?void 0:a.week)}
        </div>
        <div>
          <div class="win-name">${o(s("monthPerf"))}</div>
          ${we(a==null?void 0:a.month)}
        </div>
        <div>
          <div class="win-name">${o(s("quarterPerf"))}</div>
          ${we(a==null?void 0:a.quarter)}
        </div>
        <div>
          <div class="win-name">${o(s("yearPerf"))}</div>
          ${we(a==null?void 0:a.year)}
        </div>
      </div>
    </article>`}function fs(t,e){return t.length?t.map(a=>{var n;const i=a.side==="SELL"?s("sell"):s("buy");return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${o(a.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${o(a.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${o(i)} ${(n=a.qty)==null?void 0:n.toLocaleString(z())} ${o(s("shares"))}</div>
            <div style="font-family:var(--mono)">${Fe(a.price,e)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${o(a.reason||"")}">${o(Ta(a.reason))}</span>
        </div>
        ${a.reasonText?`<p class="lc-why">${o(a.reasonText)}</p>`:""}
      </div>`}).join(""):`<div class="list-card empty-card">${o(s("noTradesToday"))}</div>`}function lt(t,e,a){return`
    <div class="paper-table-block">
      <h4>${o(t)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${f("ticker",s("ticker"))}</th>
              <th>${o(s("name"))}</th>
              <th>${o(s("qty"))}</th>
              <th>${o(s("price"))}</th>
              <th>${o(s("reason"))}</th>
              <th>${o(s("note"))}</th>
            </tr>
          </thead>
          <tbody>${us(e,a)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${fs(e,a)}</div>
    </div>`}function ys(t,e,a){return`
    <div class="paper-table-block paper-pos-block">
      <div class="pos-block-head">
        <h4>${o(s("positions"))}</h4>
        <span class="pos-scroll-hint">${o(s("posScrollHint"))}</span>
      </div>
      <div class="pos-scroll" role="region" aria-label="${o(s("positions"))}">
        <table class="pos-table">
          <thead>
            <tr>
              <th class="pos-sym">${f("ticker",s("ticker"))}</th>
              <th class="num">${o(s("qty"))}</th>
              <th class="num">${o(s("mark"))}</th>
              <th class="num">${o(s("mktValue"))}</th>
              <th class="num">${o(s("dayPnl"))}</th>
              <th class="num">${o(s("dayPct"))}</th>
              <th class="num">${o(s("unrealizedPnl"))}</th>
              <th class="num">${o(s("unrealizedPct"))}</th>
              <th class="num">${o(s("costBasis"))}</th>
              <th class="num">${o(s("avgCost"))}</th>
              <th class="num">${o(s("weightPct"))}</th>
            </tr>
          </thead>
          <tbody>${hs(t,e,a)}</tbody>
        </table>
      </div>
    </div>`}function _t(t,e,a,i,n,l){if(!e)return"";const r=e.currency,c=[...e.trades||[]].sort((k,S)=>k.date<S.date?1:k.date>S.date?-1:0),p=c.filter(k=>k.date===i),d=p.filter(k=>k.side==="BUY"),u=p.filter(k=>k.side==="SELL"),g=c.slice(0,40),m=l;return`
    <div class="paper-panel ${n?"active":""}" id="paper-panel-${t}" role="tabpanel"
         data-lq-book="${o(t)}" data-lq-cash="${e.cash??""}"
         data-lq-start="${e.startCash??""}" data-lq-ccy="${o(r)}">
      ${ms(t,e,a)}
      <p class="paper-session-note">${o(s("paperSession",{date:i||"—",inception:m}))}</p>
      ${lt(`${s("buy")} ${i||""}`,d,r)}
      ${lt(`${s("sell")} ${i||""}`,u,r)}
      ${ys(e.positions||[],r,e.positionsValue)}
      ${lt(s("recentTrades"),g,r)}
    </div>`}function vs(t){var r,c;if(!t||!t.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${f("paperTrade",s("paper"))}</h2>
        <p class="paper-missing">${o(s("paperMissing"))}</p>
      </section>`;const e=t.books.TW,a=t.books.US;let n=(t.asOf||"").slice(0,10);try{n=new Date(t.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const l=t.startDate||(e==null?void 0:e.startDate)||(a==null?void 0:a.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${f("paperTrade",s("paper"))}</h2>
      <p class="paper-disclaimer" role="note">
        ${o(s("paperDisclaimer",{date:l}))}
      </p>
      <details class="paper-rules">
        <summary>${o(s("paperRules"))}</summary>
        <ul>
          <li>${o(s("paperRuleTw"))}</li>
          <li>${o(s("paperRuleUs"))}</li>
          <li>${o(s("paperRuleBuy"))}</li>
          <li>${o(s("paperRuleSell"))}</li>
        </ul>
      </details>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${o(s("paperTabTw"))}</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${o(s("paperTabUs"))}</button>
      </div>
      ${_t("TW",e,(r=t.metrics)==null?void 0:r.TW,n,!0,l)}
      ${_t("US",a,(c=t.metrics)==null?void 0:c.US,n,!1,l)}
    </section>`}function ks(t){const e=t.querySelectorAll(".paper-tab-btn");e.forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.paperTab;e.forEach(n=>{const l=n.dataset.paperTab===i;n.classList.toggle("active",l),n.setAttribute("aria-selected",l?"true":"false")}),t.querySelectorAll(".paper-panel").forEach(n=>{n.classList.toggle("active",n.id===`paper-panel-${i}`)})})})}async function Ss(){try{const t=await fetch(ps);return t.ok?await t.json():null}catch{return null}}const wa={defensive:.5,selective:.8,balanced:1,constructive:1.1,aggressive:1.35,stabilize_first:.3},bs={euphoric:"defensive",late_optimism:"selective",mid_cycle:"balanced",cautious_recovery:"constructive",despondent:"aggressive",panic:"stabilize_first"};function Pa(t){return t==null||Number.isNaN(t)?"—":`${Number(t).toFixed(2)}×`}function $s(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${Number(t).toFixed(2)}`}function Tt(t){if(!t)return`<span class="stance-badge stance-neutral">${o(s("dataInsufficient"))}</span>`;const e=ls(t),a=V(t);return`<span class="stance-badge stance-${e}">${o(a)}</span>`}function Pe(t,e){return`<div class="logic-metric">
    <span class="k">${o(t)}</span>
    <span class="v">${e}</span>
  </div>`}function We(t,e,{detailed:a=!1}={}){if(!e)return"";const i=e.incomplete?" incomplete":"",n=e.psychologyPhase,l=e.cycleStance,r=e.liquidityBias,c=n?V(n):s("dataInsufficient"),p=r?V(r):s("dataInsufficient"),d=$s(e.temperatureScore),u=Pa(e.sizeMult??wa[l]),g=Array.isArray(e.dataGaps)&&e.dataGaps.length?`<div class="regime-gaps">${o(s("dataGaps"))}: ${o(e.dataGaps.slice(0,5).join(", "))}${e.dataGaps.length>5?"…":""}</div>`:"",m=a&&Array.isArray(e.implications)&&e.implications.length?`<ul class="logic-impl">${e.implications.slice(0,3).map(S=>`<li>${o(rs(S))}</li>`).join("")}</ul>`:"",k=a?`<div class="logic-metrics" role="list">
        ${Pe(s("psychologyPhase"),o(c))}
        ${Pe(s("liquidityBias"),o(p))}
        ${Pe(s("temperatureScore"),o(d))}
        ${Pe(s("sizeMult"),o(u))}
      </div>`:`<div class="regime-meta">
        <span>${o(s("psychologyPhase"))} <strong>${o(c)}</strong></span>
        <span>${o(s("liquidityBias"))} <strong>${o(p)}</strong></span>
      </div>`;return`<div class="regime-chip${a?" logic-regime-chip":""}${i}">
    <div class="regime-chip-top">
      <div class="label">${o(t)} · ${o(s("marketRegime"))}</div>
      ${Tt(l)}
    </div>
    ${k}
    ${m}
    ${g}
  </div>`}function Ts(t){return!t||!t.us&&!t.tw?`<p class="logic-muted">${o(s("logicNoRegime"))}</p>`:`<div class="regime-strip logic-regime-live" aria-label="${o(s("regimeToday"))}">
    ${We("US",t.us,{detailed:!0})}
    ${We("TW",t.tw,{detailed:!0})}
  </div>`}function ws(t){return!t||!t.us&&!t.tw?"":`<div class="regime-strip" aria-label="${o(s("marketRegime"))}">
    ${We("US",t.us,{detailed:!1})}
    ${We("TW",t.tw,{detailed:!1})}
  </div>`}function ie(t,e,a){return`<section class="logic-step" id="logic-step-${t}">
    <header class="logic-step-head">
      <span class="logic-step-num" aria-hidden="true">${t}</span>
      <h3 class="logic-step-title">${o(e)}</h3>
    </header>
    <div class="logic-step-body">${a}</div>
  </section>`}function Ps(t){return`<div class="logic-table-wrap"><table class="logic-table">
    <tbody>
      ${t.map(([e,a])=>`<tr><th scope="row">${o(e)}</th><td>${a}</td></tr>`).join("")}
    </tbody>
  </table></div>`}function Y(t){return`<ul class="logic-bullets">${t.map(e=>`<li>${e}</li>`).join("")}</ul>`}function Cs(t){const e=t==null?void 0:t.marketRegime,a=Object.entries(bs).map(([g,m])=>[V(g),`${Tt(m)} <span class="logic-mult">${o(Pa(wa[m]))}</span>`]),i=Y([o(s("logicScreenABalanced")),o(s("logicScreenASelective")),o(s("logicScreenADefensive")),o(s("logicScreenAAggressive")),o(s("logicScreenAStabilize"))]),n=Y([o(s("logicScreenBVol")),o(s("logicScreenBMom"))]),l=Y([o(s("logicScoreFormula")),o(s("logicScoreSma")),o(s("logicScoreVol"))]),r=Y([o(s("logicDemoteHot")),o(s("logicDemoteThin")),o(s("logicPromoteFirm")),o(s("logicDemotePanic"))]),c=Y([o(s("logicWhyRs")),o(s("logicWhyMom")),o(s("logicWhyVol")),o(s("logicWhySma")),o(s("logicWhyRegime"))]),p=`
    <p class="logic-lead">${o(s("logicXqLead"))}</p>
    ${Y([o(s("logicXqPriceVol")),o(s("logicXqFlow")),o(s("logicXqFund")),o(s("logicXqMasters")),o(s("logicXqCycle"))])}
    <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="strategies">${o(s("logicOpenStrategies"))}</button></p>
  `,d=Y([o(s("logicPaperCapital")),o(s("logicPaperBuy")),o(s("logicPaperSizeMult")),o(s("logicPaperSell"))]),u=Y([o(s("logicRatesR2")),o(s("logicRatesR3")),o(s("logicRatesSeparate"))]);return`
    <header class="view-header">
      <h2 class="view-title">${o(s("logicTitle"))}</h2>
      <p class="logic-subtitle">${o(s("logicSubtitle"))}</p>
    </header>

    <section class="logic-live section" aria-labelledby="logic-live-h">
      <h3 id="logic-live-h" class="section-title">${o(s("regimeToday"))}</h3>
      ${Ts(e)}
    </section>

    <div class="logic-pipeline">
      ${ie(1,s("logicStep1"),`
        <p class="logic-lead">${o(s("logicStep1Lead"))}</p>
        ${Ps(a)}
        <p class="logic-caption">${o(s("logicStep1Caption"))}</p>
        ${u}
      `)}

      ${ie(2,s("logicStep2"),`
        <p class="logic-lead">${o(s("logicStep2Lead"))}</p>
        <h4 class="logic-h4">${o(s("logicScreenA"))}</h4>
        ${i}
        <h4 class="logic-h4">${o(s("logicScreenB"))}</h4>
        ${n}
        <h4 class="logic-h4">${o(s("logicScore"))}</h4>
        ${l}
      `)}

      ${ie(3,s("logicStep3"),p)}

      ${ie(4,s("logicStep4"),`
        <p class="logic-lead">${o(s("logicStep4Lead"))}</p>
        ${r}
        <p class="logic-caption">${o(s("logicListSize"))}</p>
      `)}

      ${ie(5,s("logicStep5"),`
        <p class="logic-lead">${o(s("logicStep5Lead"))}</p>
        ${c}
      `)}

      ${ie(6,s("logicStep6"),`
        <p class="logic-lead">${o(s("logicStep6Lead"))}</p>
        ${d}
        <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="paper">${o(s("logicOpenPaper"))}</button></p>
      `)}
    </div>

    <p class="logic-footnote" role="note">${o(s("logicFootnote"))}</p>
  `}const Ca="./data/strategy-screener.json",Vt="jml-watchlist",ut=new Set(["inst-sync","margin-up","earnings-steady","low-pe-small","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short","ma-tangle-break","new-high-momentum","short-roc","day-up-5","pct5d-10","near-high","chip-main-force","chip-branch","chip-large-holders","gooaye-tw-semicon-chain","gooaye-tw-vol-breakout"]),Gt=["大師","基本","籌碼","技術","綜合","週期"],wt={精選:"綜合",價量:"技術",財務:"基本",技術:"技術",基本:"基本",籌碼:"籌碼",大師:"大師",週期:"週期",綜合:"綜合"};function As(t){const e=wt[t]||t;return s(`cat${e}`,e)}function Ls(t){try{return new Date(t).toLocaleString(z(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return t||"—"}}function h(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(z(),{minimumFractionDigits:e,maximumFractionDigits:e})}function j(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function q(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(2)}%`}function Yt(t){const e=t.categoryGroup||t.category||"綜合";return wt[e]||e}function Es(t){let e=o(t);return e=e.replace(/本益比/g,()=>f("pe",s("pe"))),e=e.replace(/營益率/g,()=>f("opMargin",s("opMargin"))),e=e.replace(/毛利率/g,()=>f("grossMargin",s("grossMargin"))),e=e.replace(/外資/g,()=>f("foreignInv",s("foreignInv"))),e=e.replace(/投信/g,()=>f("trustInv",s("trustInv"))),e=e.replace(/自營商/g,()=>f("dealerInv",s("dealerInv"))),e=e.replace(/均線多頭/g,()=>f("maBull",s("maBull"))),e=e.replace(/RSI/g,()=>f("rsi",s("rsi"))),e=e.replace(/振幅/g,()=>f("amplitude",s("amplitude"))),e=e.replace(/(\d+)\s*張/g,(a,i)=>`${i}${f("zhang",s("zhang"))}`),e=e.replace(/＞\s*(\d+)\s*張/g,(a,i)=>`＞ ${i}${f("zhang",s("zhang"))}`),e}function xs(t){return t==="skip"?`<span class="xq-cond-st skip">${o(s("condSkip"))}</span>`:t==="fail"?`<span class="xq-cond-st fail">${o(s("condFail"))}</span>`:`<span class="xq-cond-st pass">${o(s("condPass"))}</span>`}function Ms(t){switch(t){case"ma-bull":return[{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>q(e.dayPct),cls:e=>j(e.dayPct)},{key:"sma5",label:"SMA5",fmt:e=>h(e.sma5)},{key:"sma10",label:"SMA10",fmt:e=>h(e.sma10)},{key:"sma20",label:"SMA20",fmt:e=>h(e.sma20)},{key:"sma60",label:"SMA60",fmt:e=>h(e.sma60)},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?h(e.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:s("metricVolToday"),fmt:e=>e.volTodayZhang!=null?h(e.volTodayZhang,1):e.volToday!=null?h(e.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:f("pe",s("pe")),fmt:e=>h(e.pe,2),rawLabel:!0},{key:"revGrowth2yAvgPct",label:"2年營收成長均%",fmt:e=>e.revGrowth2yAvgPct!=null?h(e.revGrowth2yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?h(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?h(e.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?h(e.avgVol5Zhang,1):"—"},{key:"dayPct",label:s("metricDayPct"),fmt:e=>q(e.dayPct),cls:e=>j(e.dayPct)}];case"chip-main-force":return[{key:"instNet1dZhang",label:"法人1日(張)",fmt:e=>h(e.instNet1dZhang,1)},{key:"instNet5dZhang",label:"法人5日(張)",fmt:e=>h(e.instNet5dZhang,1)},{key:"foreignNet5dZhang",label:s("foreign5d"),fmt:e=>h(e.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:s("trust5d"),fmt:e=>h(e.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:s("dealer5d"),fmt:e=>h(e.dealerNet5dZhang,1)}];case"chip-branch":return[{key:"foreignBuyStreakDays",label:"外資連買日",fmt:e=>e.foreignBuyStreakDays!=null?String(e.foreignBuyStreakDays):"—"},{key:"foreignNet1dZhang",label:s("foreign1d"),fmt:e=>h(e.foreignNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:s("foreign5d"),fmt:e=>h(e.foreignNet5dZhang,1)},{key:"instNet5dZhang",label:"法人5日(張)",fmt:e=>h(e.instNet5dZhang,1)}];case"chip-large-holders":return[{key:"megaHolderPct",label:"大戶>100萬股%",fmt:e=>e.megaHolderPct!=null?h(e.megaHolderPct,1)+"%":"—"},{key:"largeHolderPct",label:"分級12–15%",fmt:e=>e.largeHolderPct!=null?h(e.largeHolderPct,1)+"%":"—"},{key:"megaHolderCount",label:">100萬股人數",fmt:e=>e.megaHolderCount!=null?h(e.megaHolderCount,0):"—"},{key:"major10pctCount",label:"逾10%大股東家數",fmt:e=>e.major10pctCount!=null?h(e.major10pctCount,0):"—"},{key:"tdccAsOf",label:"集保日",fmt:e=>e.tdccAsOf||"—"}];case"inst-sync":return[{key:"foreignNet1dZhang",label:s("foreign1d"),fmt:e=>h(e.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:s("trust1d"),fmt:e=>h(e.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:s("dealer1d"),fmt:e=>h(e.dealerNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:s("foreign5d"),fmt:e=>h(e.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:s("trust5d"),fmt:e=>h(e.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:s("dealer5d"),fmt:e=>h(e.dealerNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>q(e.dayPct),cls:e=>j(e.dayPct)},{key:"rsi",label:f("rsi",s("rsi")),fmt:e=>h(e.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:e=>h(e.rsiPrev,2)},{key:"ampPct",label:f("amplitude",s("amplitude")),fmt:e=>e.ampPct!=null?h(e.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?h(e.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:e=>h(e.pb,2)},{key:"directorHoldPct",label:s("metricDirector"),fmt:e=>e.directorHoldPct!=null?h(e.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?h(e.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>h(e.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:f("pe",s("pe")),fmt:e=>h(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?h(e.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?h(e.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:e=>Array.isArray(e.revGrowth3y)?e.revGrowth3y.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>h(e.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:e=>e.revGrowth5yAvgPct!=null?h(e.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?h(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?h(e.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>h(e.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?h(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:s("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?h(e.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:e=>Array.isArray(e.opMargin3y)?e.opMargin3y.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:e=>e.revGrowth3yAvgPct!=null?h(e.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)}];case"benjamin-graham":return[{key:"pe",label:f("pe",s("pe")),fmt:e=>h(e.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:e=>h(e.pb,2)},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?h(e.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>h(e.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?h(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:s("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?h(e.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:s("metricDebt"),fmt:e=>e.debtRatioPct!=null?h(e.debtRatioPct,1)+"%":"—"},{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>h(e.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:f("pe",s("pe")),fmt:e=>h(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?h(e.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:e=>e.roeGrowthPct!=null?h(e.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:e=>e.epsGrowthStreak!=null?String(e.epsGrowthStreak):"—"},{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>h(e.avgVol5Zhang,1)}];case"margin-up":return[{key:"yoyPairs",label:"YoY配對",fmt:e=>Array.isArray(e.yoyPairs)?e.yoyPairs.join("；"):"—"},{key:"yoyOmPct",label:"YoY營益成長%",fmt:e=>Array.isArray(e.yoyOmPct)?e.yoyOmPct.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"yoyGmPct",label:"YoY毛利成長%",fmt:e=>Array.isArray(e.yoyGmPct)?e.yoyGmPct.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"opMargins",label:f("opMargin",s("opMargin")),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.slice(-4).map(a=>a!=null?a+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:s("metricSource"),fmt:e=>e.source||"—"}];case"kostolany-cycle":return[{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>q(e.dayPct),cls:e=>j(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>q(e.pct5d),cls:e=>j(e.pct5d)},{key:"pct1m",label:"1月%",fmt:e=>q(e.pct1m),cls:e=>j(e.pct1m)},{key:"volRatio",label:s("volRatio"),fmt:e=>e.volRatio!=null?h(e.volRatio)+"×":"—"},{key:"psychologyPhase",label:s("psychologyPhase"),fmt:e=>e.psychologyPhase?V(e.psychologyPhase):"—"},{key:"cycleStance",label:s("cycleStance"),fmt:e=>e.cycleStance?V(e.cycleStance):"—"},{key:"liquidityBias",label:s("liquidityBias"),fmt:e=>e.liquidityBias?V(e.liquidityBias):"—"},{key:"tags",label:s("regimeTags"),fmt:e=>e.tags||"—"},{key:"sizeMult",label:s("sizeMult"),fmt:e=>e.sizeMult!=null?h(e.sizeMult,2)+"×":"—"}];case"ma-tangle-break":return[{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>q(e.dayPct),cls:e=>j(e.dayPct)},{key:"smaSpreadPct",label:"均線糾結%",fmt:e=>e.smaSpreadPct!=null?h(e.smaSpreadPct,2)+"%":"—"},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?h(e.volRatioYday)+"×":"—"},{key:"sma5",label:"SMA5",fmt:e=>h(e.sma5)},{key:"sma20",label:"SMA20",fmt:e=>h(e.sma20)}];case"new-high-momentum":case"near-high":return[{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>q(e.dayPct),cls:e=>j(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>q(e.pct5d),cls:e=>j(e.pct5d)},{key:"high20",label:"20日高",fmt:e=>h(e.high20)},{key:"distHigh20Pct",label:"距高%",fmt:e=>e.distHigh20Pct!=null?h(e.distHigh20Pct,2)+"%":"—"},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?h(e.volRatioYday)+"×":"—"}];case"short-roc":return[{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>q(e.dayPct),cls:e=>j(e.dayPct)},{key:"roc10",label:"ROC10%",fmt:e=>e.roc10!=null?h(e.roc10,2)+"%":"—",cls:e=>j(e.roc10)},{key:"pct5d",label:"5日%",fmt:e=>q(e.pct5d),cls:e=>j(e.pct5d)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?h(e.avgVol5Zhang,1):"—"}];case"day-up-5":case"pct5d-10":return[{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>q(e.dayPct),cls:e=>j(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>q(e.pct5d),cls:e=>j(e.pct5d)},{key:"volRatioYday",label:s("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?h(e.volRatioYday)+"×":"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?h(e.avgVol5Zhang,1):"—"}];case"earnings-steady":return[{key:"yoyOmPct",label:"YoY營益成長%",fmt:e=>Array.isArray(e.yoyOmPct)?e.yoyOmPct.map(a=>a!=null?a+"%":"—").join(" → "):"—"},{key:"opMargins",label:f("opMargin",s("opMargin")),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.slice(-4).map(a=>a!=null?a+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:s("metricSource"),fmt:e=>e.source||"—"}];case"low-pe-small":return[{key:"pe",label:f("pe",s("pe")),fmt:e=>h(e.pe,2),rawLabel:!0},{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"marketCapHint",label:"市值代理",fmt:e=>e.marketCapHint||"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?h(e.avgVol5Zhang,1):"—"}];case"gooaye-tw-semicon-chain":case"gooaye-tw-vol-breakout":case"gooaye-us-risk-on":case"gooaye-us-fomo-filter":return[{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>q(e.dayPct),cls:e=>j(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>q(e.pct5d),cls:e=>j(e.pct5d)},{key:"pct1m",label:"1月%",fmt:e=>q(e.pct1m),cls:e=>j(e.pct1m)},{key:"volRatio",label:s("metricVolRatioYday"),fmt:e=>e.volRatio!=null?h(e.volRatio)+"×":"—"},{key:"aboveSma50",label:"＞SMA50",fmt:e=>e.aboveSma50?"Y":"N"}];default:return[{key:"price",label:s("metricPrice"),fmt:e=>h(e.price)},{key:"dayPct",label:s("metricDayPct"),fmt:e=>q(e.dayPct),cls:e=>j(e.dayPct)}]}}function Rs(t){const e=t.calibrationNotes;if(!e||typeof e!="object")return"";const a=Array.isArray(e.matchedXq)?e.matchedXq.map(r=>o(r)).join(" · "):"",i=Array.isArray(e.stillDiffers)?e.stillDiffers.map(r=>o(r)).join(" · "):"",n=e.unitsNote||e.units||"",l=[];return a&&l.push(`<span class="xq-cal-m">對齊 XQ：${a}</span>`),i&&l.push(`<span class="xq-cal-d">仍差異：${i}</span>`),n&&l.push(`<span class="xq-cal-u">${o(String(n))}</span>`),l.length?`<p class="xq-calibration" title="${s("calibTitle")}">${l.join("<br/>")}</p>`:""}function zs(t){return`<ol class="xq-cond-list">${(t.conditions||[]).map((a,i)=>{const n=a.status||"pass";return`<li class="xq-cond ${n}">
        <span class="xq-cond-num">${i+1}</span>
        <span class="xq-cond-text">${Es(a.text)}</span>
        ${xs(n)}
      </li>`}).join("")}</ol>`}function Pt(t,e){return!e||e==="ALL"?t||[]:(t||[]).filter(a=>{const i=String(a.market||"").toUpperCase();if(i===e)return!0;const n=String(a.ticker||"").toUpperCase().endsWith(".TW");return i?!1:e==="TW"?n:!n})}function Ns(t,e="TW"){const a=t.hits||[],i=Pt(a,e),n=s(e==="US"?"usStock":"twStock");if(t.incomplete&&!a.length){const d=o(t.incompleteLabel||s("dataInsufficient")),u=(t.blockers||[]).map(g=>`<li>${o(g)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${d}</div>
      <ul>${u}</ul>
    </div>`}if(!i.length)return`<div class="xq-empty"><p>${o(n)} · ${o(s("noHits"))}</p></div>`;const l=Ms(t.id),r=l.map(d=>`<th>${d.rawLabel?d.label:o(d.label)}</th>`).join(""),c=i.map(d=>{const u=d.metrics||{},g=l.map(m=>`<td class="num ${m.cls?m.cls(u):""}">${m.fmt(u)}</td>`).join("");return`<tr>
        <td><span class="ticker">${o(d.ticker)}</span></td>
        <td class="name-cell">${o(d.name||"")}${d.ohlcvBarDate?`<div class="xq-bar-date">K ${o(d.ohlcvBarDate)}</div>`:""}
          <button type="button" class="xq-btn xq-btn-sm xq-watch-inline" data-xq-watch="${o(d.ticker)}" data-xq-watch-name="${o(d.name||"")}">${o(s("addWatchlist"))}</button>
        </td>
        ${g}
      </tr>`}).join(""),p=i.map(d=>{const u=d.metrics||{},g=l.map(m=>{const k=m.cls?m.cls(u):"";return`<div class="xq-m"><span class="xq-ml">${m.rawLabel?m.label:o(m.label)}</span><span class="xq-mv ${k}">${m.fmt(u)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${o(d.ticker)}</div>
            <div class="name">${o(d.name||"")}</div>
            ${d.ohlcvBarDate?`<div class="xq-bar-date">K棒 ${o(d.ohlcvBarDate)}</div>`:""}
          </div>
          <div class="xq-hit-actions">
            <span class="badge market">${o(d.market||e)}</span>
            <button type="button" class="xq-btn xq-btn-sm" data-xq-watch="${o(d.ticker)}" data-xq-watch-name="${o(d.name||"")}">${o(s("addWatchlist"))}</button>
          </div>
        </div>
        <div class="xq-hit-metrics">${g}</div>
      </article>`}).join("");return`
    <div class="xq-market-block" data-market="${o(e)}">
      <h5 class="xq-market-title">${n}（${i.length}）</h5>
      <div class="table-wrap xq-table-wrap">
        <table class="stock-table xq-table">
          <thead><tr><th>代碼</th><th>名稱</th>${r}</tr></thead>
          <tbody>${c}</tbody>
        </table>
      </div>
      <div class="xq-mobile-cards">${p}</div>
    </div>`}function Ds(t,e,a="TW"){var d,u,g,m;const i=t.hits||[],l=Pt(i,a).length,r=(t.unchecked||[]).map(k=>`<li class="xq-unchecked">${o(k)}</li>`).join(""),c=(t.notes||[]).map(k=>`<li>${o(k)}</li>`).join(""),p=!t.incomplete&&(t.blockers||[]).length?`<ul class="xq-blockers">${(t.blockers||[]).map(k=>`<li>${o(k)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${o(t.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${o(t.name)}</h3>
          <div class="xq-tags">
            ${(t.xqTags||[t.category]).map(k=>`<span class="xq-tag">${o(k)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="${s("hitTitle")}">
          <span class="xq-hit-num">${l}</span>
          <span class="xq-hit-label">${o(s("hitCount"))}</span>
        </div>
      </div>
      ${t.description?`<details class="fold-block"><summary>${o(s("strategyDetails"))}</summary><p class="xq-desc fold-p">${o(t.description)}</p></details>`:""}
      <div class="xq-meta-row">
        <span>${o(s("sessionTwse"))} ${o(e.sessionDate||"—")}</span>
        <span>${o(s("ohlcvBar"))} ${o(((d=t.ohlcvBarDates)==null?void 0:d[0])||e.ohlcvBarDate||"—")}</span>
        <span>${o(s("generated"))} ${Ls(e.asOf)}</span>
        <span>${o(s("universeTw"))} ${((u=e.universe)==null?void 0:u.tw)??"—"}</span>
        <span>${o(s("universeUs"))} ${((g=e.universe)==null?void 0:g.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">${o(s("conditions"))}</h4>
      ${zs(t)}
      ${Rs(t)}
      ${(m=t.incompleteFilters)!=null&&m.length?`<p class="xq-incomplete-filters">${o(s("incompleteFilters"))}${o(t.incompleteFilters.join("、"))}</p>`:""}
      ${r?`<ul class="xq-unchecked-list">${r}</ul>`:""}
      ${t.regimeSnapshot?`<div class="xq-regime-box" role="status">
        <div class="xq-regime-title">${o(s("regimeToday"))}</div>
        <div class="xq-regime-grid">
          ${["us","tw"].map(k=>{const S=t.regimeSnapshot[k];if(!S)return"";const T=S.psychologyPhase?V(S.psychologyPhase):s("dataInsufficient"),P=S.cycleStance,C=S.liquidityBias?V(S.liquidityBias):s("dataInsufficient"),M=Array.isArray(S.dataGaps)&&S.dataGaps.length?`<div class="xq-regime-gaps">${o(s("dataGaps"))}：${o(S.dataGaps.join(", "))}</div>`:"";return`<div class="xq-regime-card">
                <div class="xq-regime-mkt">${o(k.toUpperCase())}</div>
                <div class="xq-regime-stance">${Tt(P)}</div>
                <div class="xq-regime-metrics">
                  <div><span class="k">${o(s("psychologyPhase"))}</span><strong>${o(T)}</strong></div>
                  <div><span class="k">${o(s("liquidityBias"))}</span><strong>${o(C)}</strong></div>
                  <div><span class="k">${o(s("temperatureScore"))}</span><strong>${o(S.temperatureScore==null?s("dataInsufficient"):String(S.temperatureScore))}</strong></div>
                </div>
                ${M}
              </div>`}).join("")}
        </div>
      </div>`:""}
      ${c?`<ul class="xq-notes">${c}</ul>`:""}
      ${p}
      <div class="xq-toolbar">
        <h4 class="xq-sub">${o(s("results"))}</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>${o(s("copyJson"))}</button>
          <button type="button" class="xq-btn" data-xq-csv>${o(s("exportCsv"))}</button>
          <a class="xq-btn xq-btn-link" href="${Ca}" download="strategy-screener.json">${o(s("exportJson"))}</a>
          <button type="button" class="xq-btn" disabled title="${o(s("backtestHint"))}">${o(s("backtestSoon"))}</button>
        </div>
      </div>
      ${t.twOnly||ut.has(t.id)?`<div class="xq-market-tabs"><span class="xq-mkt-hint">${o(s("twOnlyHint"))}</span></div>`:`<div class="xq-market-tabs" role="tablist" aria-label="${o(s("hitMarket"))}">
        <button type="button" class="xq-mkt-btn${a==="TW"?" active":""}" data-xq-market="TW" aria-pressed="${a==="TW"}">${o(s("twStock"))}</button>
        <button type="button" class="xq-mkt-btn${a==="US"?" active":""}" data-xq-market="US" aria-pressed="${a==="US"}">${o(s("usStock"))}</button>
      </div>`}
      ${Ns(t,t.twOnly||ut.has(t.id)?"TW":a)}
    </div>
  `}function Bs(t=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${f("strategyScreen",s("strategyScreen"))}</h2>
      <p class="view-lead-tight">${o(s("strategyLead"))}</p>
      <div id="xq-root" class="xq-root" aria-label="${o(s("strategyScreen"))}">
        ${t?`<p class="xq-loading">${o(s("strategyLoading"))}</p>`:""}
      </div>
    </section>
  `}async function js(t=Ca){const e=await fetch(t,{cache:"no-cache"});if(!e.ok)throw new Error(`strategy-screener ${e.status}`);return e.json()}function qs(t,e){var $,w;const a=typeof t=="string"?document.querySelector(t):t;if(!a||!(($=e==null?void 0:e.strategies)!=null&&$.length)){a&&(a.innerHTML=`<div class="xq-empty"><p>${o(s("strategyEmpty"))}</p></div>`);return}const i=[...Gt];for(const y of e.categoryOrder||[]){const v=wt[y]||y;i.includes(v)||i.push(v)}const n=new Map(i.map(y=>[y,[]]));for(const y of e.strategies){const v=Yt(y);n.has(v)||(n.set(v,[]),i.push(v)),n.get(v).push(y)}for(const[y,v]of n)!v.length&&Gt.includes(y);let l=i.find(y=>(n.get(y)||[]).length)||i[0],r=((w=(n.get(l)||[])[0])==null?void 0:w.id)||e.strategies[0].id,c="TW";const p=(y,v)=>y.map(b=>{const E=(b.hits||[]).length,N=b.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${b.id===v?" active":""}${N}" data-xq-id="${o(b.id)}" aria-pressed="${b.id===v}">
          <span class="xq-chip-name">${o(b.name)}</span>
          <span class="xq-chip-n">${b.incomplete?o(s("incomplete")):o(s("hitsTotal",{n:E}))}</span>
        </button>`}).join(""),d=()=>i.map(y=>{const v=n.get(y)||[];return v.length?`<button type="button" class="xq-tab${y===l?" active":""}" data-xq-tab="${o(y)}" aria-pressed="${y===l}">
          <span>${o(As(y))}</span>
          <span class="xq-tab-n">${v.length}</span>
        </button>`:""}).join(""),u=()=>e.strategies.map(y=>{const v=(y.hits||[]).length,b=y.id===r?" active":"",E=y.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${b}${E}" data-xq-id="${o(y.id)}">
          <span>${o(y.name)}</span>
          <span class="xq-side-n">${y.incomplete?o(s("incomplete")):o(s("hitsTotal",{n:v}))}</span>
        </button>`}).join(""),g=()=>{const y=n.get(l)||[],v=e.strategies.find(b=>b.id===r)||y[0]||e.strategies[0];r=v.id,a.innerHTML=`
      <div class="xq-layout">
        <aside class="xq-sidebar" aria-label="${o(s("strategyList"))}">
          <div class="xq-side-title">${o(s("navStrategies"))}</div>
          ${u()}
        </aside>
        <div class="xq-main">
          <div class="xq-tabs" role="tablist" aria-label="${o(s("strategyCat"))}">${d()}</div>
          <div class="xq-chips" aria-label="${o(s("strategyList"))}">
            <div class="xq-chip-row">${p(y,r)}</div>
          </div>
          <div class="xq-panel-host">${Ds(v,e,c)}</div>
        </div>
      </div>
      <p class="xq-foot">${o((e.disclaimer||"").split("。")[0]+(e.disclaimer?"。":""))}</p>
      <div class="xq-toast" id="xq-toast" hidden role="status"></div>
    `},m=y=>{const v=e.strategies.find(E=>E.id===y);if(!v)return;r=y;const b=Yt(v);b!==l&&(l=b),g()},k=y=>{const v=n.get(y)||[];v.length&&(l=y,v.some(b=>b.id===r)||(r=v[0].id),g())},S=(y,v=2200)=>{const b=a.querySelector("#xq-toast");b&&(b.hidden=!1,b.textContent=y,clearTimeout(S._t),S._t=setTimeout(()=>{b.hidden=!0},v))},T=async y=>{var v;try{if((v=navigator.clipboard)!=null&&v.writeText)return await navigator.clipboard.writeText(y),!0}catch{}try{const b=document.createElement("textarea");b.value=y,b.setAttribute("readonly",""),b.style.position="fixed",b.style.left="-9999px",b.style.top="0",document.body.appendChild(b),b.select();const E=document.execCommand("copy");return document.body.removeChild(b),E}catch{return!1}},P=(y,v,b)=>{const E=new Blob([v],{type:b});try{const N=document.createElement("a");return N.href=URL.createObjectURL(E),N.download=y,N.rel="noopener",document.body.appendChild(N),N.click(),N.remove(),setTimeout(()=>URL.revokeObjectURL(N.href),2e3),!0}catch{try{const N=`data:${b||"text/plain"};charset=utf-8,${encodeURIComponent(v)}`,F=document.createElement("a");return F.href=N,F.download=y,document.body.appendChild(F),F.click(),F.remove(),!0}catch{return!1}}},C=()=>{try{const y=localStorage.getItem(Vt),v=y?JSON.parse(y):[];return Array.isArray(v)?v:[]}catch{return[]}},M=y=>{try{localStorage.setItem(Vt,JSON.stringify(y.slice(0,200)))}catch{}},pe=(y,v)=>{if(!y)return;const b=C();if(b.some(E=>E.ticker===y)){S(s("watchlistExists",{ticker:y}));return}b.unshift({ticker:y,name:v||y,addedAt:new Date().toISOString()}),M(b),S(s("watchlistAdded",{ticker:y}))};a.onclick=async y=>{var Ft;const v=y.target,b=v&&typeof v.closest=="function"?v:v&&v.parentElement&&typeof v.parentElement.closest=="function"?v.parentElement:null;if(!b)return;const E=b.closest("[data-xq-tab]");if(E&&a.contains(E)){y.preventDefault(),k(E.getAttribute("data-xq-tab"));return}const N=b.closest("[data-xq-id]");if(N&&a.contains(N)){y.preventDefault(),m(N.getAttribute("data-xq-id"));return}const F=b.closest("[data-xq-market]");if(F&&a.contains(F)){y.preventDefault(),c=F.getAttribute("data-xq-market")||"TW",g();return}const Ht=b.closest("[data-xq-copy]");if(Ht&&a.contains(Ht)){y.preventDefault();const ot=await T(JSON.stringify(e,null,2));S(s(ot?"copied":"copyFailed"));return}const It=b.closest("[data-xq-csv]");if(It&&a.contains(It)){y.preventDefault();const ot=((Ft=a.querySelector(".xq-panel"))==null?void 0:Ft.getAttribute("data-strategy-id"))||r,oe=e.strategies.find(it=>it.id===ot);if(!oe)return;const Ja=Pt(oe.hits||[],oe.twOnly||ut.has(oe.id)?"TW":c),Wt=Os({...oe,hits:Ja});if(!Wt){S(s("noHitsExport"));return}const Ut="\uFEFF"+Wt;if(P(`${oe.id}-hits.csv`,Ut,"text/csv;charset=utf-8"))S(s("csvDownloaded"));else{const it=`data:text/csv;charset=utf-8,${encodeURIComponent(Ut)}`;S(s("csvBlocked"));try{window.open(it,"_blank")}catch{}}return}const Te=b.closest("[data-xq-watch]");Te&&a.contains(Te)&&(y.preventDefault(),pe(Te.getAttribute("data-xq-watch"),Te.getAttribute("data-xq-watch-name")))},g()}function Os(t){const e=t.hits||[];if(!e.length)return"";const a=[...new Set(e.flatMap(r=>Object.keys(r.metrics||{})))],i=["ticker","name","market","ohlcvBarDate",...a],n=r=>{const c=r==null?"":String(r);return/[",\n]/.test(c)?`"${c.replace(/"/g,'""')}"`:c},l=e.map(r=>{const c=r.metrics||{};return[r.ticker,r.name,r.market,r.ohlcvBarDate||"",...a.map(p=>{const d=c[p];return Array.isArray(d)?d.join("|"):d})].map(n).join(",")});return[i.join(","),...l].join(`
`)}async function Hs(t="#xq-root"){const e=()=>typeof t=="string"?document.querySelector(t):t;try{let a=e();if(a||(await new Promise(n=>requestAnimationFrame(n)),a=e()),!a)return console.warn("initStrategies: #xq-root missing"),{ok:!1,error:new Error("xq-root missing")};const i=await js();return a=e(),a?(qs(a,i),{ok:!0,data:i}):{ok:!1,error:new Error("xq-root gone after fetch")}}catch(a){const i=e();return i&&(i.innerHTML=`<div class="xq-empty"><p>${o(s("strategyLoadError",{msg:a.message}))}</p></div>`),{ok:!1,error:a}}}const Aa="./data/research-library.json",La="./covers/placeholder-book.svg",Ea="./covers/placeholder-paper.svg",xa="./covers/placeholder-podcast.svg",Is={candidate:"rl-status-candidate",deferred:"rl-status-deferred",adopted:"rl-status-adopted",rejected:"rl-status-rejected"},Fs={yes:"rl-cand-yes",no:"rl-cand-no",watch:"rl-cand-watch"};function Ws(t){return{candidate:s("researchStatusCandidate"),deferred:s("researchStatusDeferred"),adopted:s("researchStatusAdopted"),rejected:s("researchStatusRejected")}[t]||t}function Us(t){return{yes:s("researchCandYes"),no:s("researchCandNo"),watch:s("researchCandWatch")}[t]||t}function _s(t){return t==="US"?s("usStock"):t==="TW"?s("twStock"):t==="BOTH"?s("researchMarketBoth"):t}function Ma(t){return s(t==="paper"?"researchTypePaper":t==="podcast"?"researchTypePodcast":"researchTypeBook")}function Be(t,e={}){var n;if(!t)return s("researchShelfAdjacent");const a=(n=e==null?void 0:e.shelfLabels)==null?void 0:n[t];if(a&&typeof a=="object")return tt(a,t);const i={core_investing:"researchShelfCoreInvesting",value_investing:"researchShelfValueInvesting",business_management:"researchShelfBusiness",life_partner_wisdom:"researchShelfLifePartner",options:"researchShelfOptions",recent_reads:"researchShelfRecentReads",fi_concepts:"researchShelfFiConcepts",money_values:"researchShelfMoneyValues",investing_basics:"researchShelfInvestingBasics",asset_allocation:"researchShelfAssetAllocation",financials:"researchShelfFinancials",market_analysis:"researchShelfMarketAnalysis",econ_analysis:"researchShelfEconAnalysis",psych_randomness:"researchShelfPsych",biographies:"researchShelfBiographies",adjacent:"researchShelfAdjacent"}[t];return i?s(i):t}function Vs(t={}){return(Array.isArray(t.shelves)?t.shelves:null)||["core_investing","value_investing","business_management","life_partner_wisdom","options","recent_reads","fi_concepts","money_values","investing_basics","asset_allocation","financials","market_analysis","econ_analysis","psych_randomness","biographies","adjacent"]}function tt(t,e){if(!t||typeof t!="object")return e;const a=Je();return t[a]||t.en||t["zh-Hant"]||e}function Ra(t){return tt(t.titleLocalized,t.title)||""}function Gs(t){return tt(t.summaryLocalized,t.summary)||""}function Ys(t,e){return t.coverUrl?t.coverUrl:t.cover?t.cover:t.type==="paper"?(e==null?void 0:e.defaultCoverPaper)||Ea:t.type==="podcast"?(e==null?void 0:e.defaultCoverPodcast)||xa:(e==null?void 0:e.defaultCoverBook)||La}function Ks(t,e){return t.coverFallback?t.coverFallback:t.type==="paper"?(e==null?void 0:e.defaultCoverPaper)||Ea:t.type==="podcast"?(e==null?void 0:e.defaultCoverPodcast)||xa:(e==null?void 0:e.defaultCoverBook)||La}function Qs(t){const e=t==null?void 0:t.plainTakeawaysLocalized;if(e&&typeof e=="object"){const a=Je(),i=e[a]||e["zh-Hant"]||e.en;if(Array.isArray(i)&&i.length)return i}return Array.isArray(t==null?void 0:t.plainTakeaways)&&t.plainTakeaways.length?t.plainTakeaways:[]}function Xs(t){const e=Qs(t);return e.length?`<div class="rl-block">
    <h4 class="rl-h">${o(s("researchTakeaways"))}</h4>
    <ul class="rl-takeaways">${e.map(a=>`<li>${o(a)}</li>`).join("")}</ul>
  </div>`:""}function Zs(t){if(!Array.isArray(t)||!t.length)return"";const e=t.filter(i=>/^https?:\/\//i.test(String(i)));if(!e.length)return"";const a=e.map(i=>`<a href="${o(i)}" target="_blank" rel="noopener noreferrer">${o(i)}</a>`).join(" · ");return`<div class="rl-sources"><span class="rl-k">${o(s("researchSources"))}</span> ${a}</div>`}function Js(t,e){const a=Ys(t,e),i=Ks(t,e),n=Ra(t)||Ma(t.type);return`
    <div class="rl-cover-wrap">
      <img
        class="rl-cover"
        src="${o(a)}"
        alt="${o(n)}"
        loading="lazy"
        decoding="async"
        data-rl-fallback="${o(i)}"
      />
    </div>`}function eo(t){t.querySelectorAll("img.rl-cover[data-rl-fallback]").forEach(e=>{e.addEventListener("error",()=>{const a=e.dataset.rlFallback;a&&e.getAttribute("src")!==a?e.setAttribute("src",a):e.classList.add("is-broken")})})}function ue(t,e={}){const a=t.status||"candidate",i=t.strategyCandidate||"watch",n=t.year!=null?String(t.year):"—",l=(t.authors||[]).join(", ")||"—";return`
    <article class="rl-card" data-rl-id="${o(t.id)}" data-rl-market="${o(t.market)}" data-rl-type="${o(t.type)}" data-rl-shelf="${o(t.shelf||"adjacent")}">
      ${Js(t,e)}
      <div class="rl-card-body">
        <header class="rl-card-head">
          <div class="rl-badges">
            <span class="rl-badge rl-type">${o(Ma(t.type))}</span>
            <span class="rl-badge rl-shelf">${o(Be(t.shelf,e))}</span>
            <span class="rl-badge rl-market">${o(_s(t.market))}</span>
            <span class="rl-badge ${Is[a]||""}">${o(Ws(a))}</span>
            <span class="rl-badge ${Fs[i]||""}" title="${o(s("researchStrategy"))}">${o(Us(i))}</span>
          </div>
          <h3 class="rl-title">${o(Ra(t))}</h3>
          <p class="rl-meta">${o(l)} · ${o(n)}</p>
        </header>
        <p class="rl-summary">${o(Gs(t))}</p>
        ${Xs(t)}
        ${Zs(t.sources)}
      </div>
    </article>`}function to(t=!0){return`
    <section class="section research-section" aria-labelledby="research-heading">
      <header class="view-header view-header-tight">
        <h2 class="view-title" id="research-heading">${o(s("researchTitle"))}</h2>
        <p class="view-lead view-lead-tight">${o(s("researchLead"))}</p>
      </header>
      <p class="rl-banner" role="note">${o(s("researchMathGateBanner"))}</p>
      <div id="rl-root" class="rl-root" data-placeholder="${t?"1":"0"}">
        <p class="rl-loading">${o(s("loading"))}</p>
      </div>
    </section>`}function je(t,{market:e,type:a,shelf:i,status:n,candidate:l}){return t.filter(r=>a&&a!=="all"&&r.type!==a||i&&i!=="all"&&(r.shelf||"adjacent")!==i||n&&n!=="all"&&(r.status||"candidate")!==n||l&&l!=="all"&&(r.strategyCandidate||"watch")!==l?!1:!e||e==="all"?!0:e==="US"?r.market==="US"||r.market==="BOTH":e==="TW"?r.market==="TW"||r.market==="BOTH":!0)}function ao(t){var a,i,n;const e=(a=t==null?void 0:t.meta)==null?void 0:a.mathGateLocalized;return e&&typeof e=="object"?tt(e,(i=t==null?void 0:t.meta)==null?void 0:i.mathGate)||s("researchMathGateBanner"):((n=t==null?void 0:t.meta)==null?void 0:n.mathGate)||s("researchMathGateBanner")}const at=[{id:"book",titleKey:"researchCatBooks",type:"book"},{id:"paper",titleKey:"researchCatPapers",type:"paper"},{id:"podcast",titleKey:"researchCatPodcasts",type:"podcast"},{id:"us",titleKey:"researchCatUs",market:"US"},{id:"tw",titleKey:"researchCatTw",market:"TW"},{id:"candidate",titleKey:"researchCatCandidate",status:"candidate"},{id:"watch",titleKey:"researchCatWatch",candidate:"watch"}],Kt={menu:"menu",all:"menu",index:"menu",book:"book",books:"book",paper:"paper",papers:"paper",podcast:"podcast",podcasts:"podcast",us:"us",tw:"tw",candidate:"candidate",watch:"watch",watching:"watch"};let gt=null,ht=null,G={category:"menu",market:"all",type:"all",shelf:"all",status:"all",candidate:"all"};function Ct(t){if(t==null||t==="")return"menu";const a=String(t).trim().toLowerCase();return Kt[a]?Kt[a]:at.some(i=>i.id===a)?a:"menu"}function At(t,e){const a=at.find(i=>i.id===e);return t.category=a?e:"menu",t.market="all",t.type="all",t.shelf="all",t.status="all",t.candidate="all",a&&(a.type&&(t.type=a.type),a.market&&(t.market=a.market),a.status&&(t.status=a.status),a.candidate&&(t.candidate=a.candidate)),t}function so(t,e){return je(t,{market:e.market||"all",type:e.type||"all",shelf:"all",status:e.status||"all",candidate:e.candidate||"all"}).length}function oo(t){return!t||t.category==="menu"?"#research":t.shelf&&t.shelf!=="all"?`#research/shelf/${encodeURIComponent(t.shelf)}`:`#research/${t.category}`}function za(t){const e=oo(t);location.hash!==e&&history.replaceState(null,"",e)}function Qt(t){return[{id:"menu",label:s("researchCatMenu")},...at.map(a=>({id:a.id,label:s(a.titleKey)}))].map(a=>`<button type="button" class="rl-tab${a.id===t.category?" is-active":""}" data-rl-cat="${o(a.id)}" role="tab" aria-selected="${a.id===t.category}">${o(a.label)}</button>`).join("")}function io(t){const e=at.map(a=>{const i=so(t,a);return`
      <button type="button" class="rl-menu-card" data-rl-cat="${o(a.id)}" aria-label="${o(s(a.titleKey))}">
        <h3 class="rl-menu-title">${o(s(a.titleKey))}</h3>
        <p class="rl-menu-count">${i}</p>
        <span class="rl-menu-cta">${o(s("researchOpenCategory"))}</span>
      </button>`}).join("");return`
    <div class="rl-menu" role="list" aria-label="${o(s("researchCategories"))}">
      <p class="rl-menu-lead">${o(s("researchMenuLead"))}</p>
      <div class="rl-menu-grid">${e}</div>
    </div>`}function de(t,e,a,{syncUrl:i=!0}={}){const n=Array.isArray(e==null?void 0:e.items)?e.items:[],l=(e==null?void 0:e.meta)||{},r=Vs(l);if(i&&za(a),a.category==="menu"){t.innerHTML=`
      <div class="rl-tabs-wrap">
        <div class="rl-tabs" role="tablist" aria-label="${o(s("researchCategories"))}">
          ${Qt(a)}
        </div>
      </div>
      ${io(n)}`,Xt(t,e,a);return}const c=je(n,a),p=c.filter(w=>w.type==="book"),d=c.filter(w=>w.type==="paper"),u=c.filter(w=>w.type==="podcast"),g=l.mathGate?`<p class="rl-meta-line">${o(ao(e))}</p>`:"",m=[`<button type="button" class="rl-filter rl-shelf-chip${a.shelf==="all"?" is-active":""}" data-rl-shelf="all">${o(s("researchFilterAll"))}</button>`,...r.map(w=>{const y=je(n,{...a,shelf:w}).length;return y?`<button type="button" class="rl-filter rl-shelf-chip${a.shelf===w?" is-active":""}" data-rl-shelf="${o(w)}">${o(Be(w,l))} <span class="rl-chip-count">${y}</span></button>`:""})].join(""),k=[["all",s("researchFilterAll")],["candidate",s("researchStatusCandidate")],["deferred",s("researchStatusDeferred")],["adopted",s("researchStatusAdopted")],["rejected",s("researchStatusRejected")]].map(([w,y])=>{const v=je(n,{...a,status:w==="all"?"all":w}).length;return w!=="all"&&!n.some(b=>(b.status||"candidate")===w)?"":`<button type="button" class="rl-filter${a.status===w?" is-active":""}" data-rl-status="${w}">${o(y)}${w==="all"?"":` <span class="rl-chip-count">${v}</span>`}</button>`}).join("");function S(w){if(!w.length)return`<p class="rl-empty">${o(s("researchEmpty"))}</p>`;if(a.shelf&&a.shelf!=="all")return`<div class="rl-grid">${w.map(v=>ue(v,l)).join("")}</div>`;const y=r.filter(v=>w.some(b=>(b.shelf||"adjacent")===v));return y.length?y.map(v=>{const b=w.filter(E=>(E.shelf||"adjacent")===v);return`<section class="rl-shelf-group" data-shelf="${o(v)}" aria-label="${o(Be(v,l))}">
          <h4 class="rl-shelf-title">${o(Be(v,l))} <span class="rl-list-count">(${b.length})</span></h4>
          <div class="rl-grid">${b.map(E=>ue(E,l)).join("")}</div>
        </section>`}).join(""):`<div class="rl-grid">${w.map(v=>ue(v,l)).join("")}</div>`}const T=a.type==="all"||a.type==="book",P=a.type==="all"||a.type==="paper",C=a.type==="all"||a.type==="podcast",M=[];T&&M.push(`<section class="rl-list" aria-label="${o(s("researchTypeBook"))}">
        <h3 class="rl-list-title">${o(s("researchTypeBook"))} <span class="rl-list-count">(${p.length})</span></h3>
        ${S(p)}
      </section>`),P&&M.push(`<section class="rl-list" aria-label="${o(s("researchTypePaper"))}">
        <h3 class="rl-list-title">${o(s("researchTypePaper"))} <span class="rl-list-count">(${d.length})</span></h3>
        <div class="rl-grid">
          ${d.length?d.map(w=>ue(w,l)).join(""):`<p class="rl-empty">${o(s("researchEmpty"))}</p>`}
        </div>
      </section>`),C&&M.push(`<section class="rl-list" aria-label="${o(s("researchTypePodcast"))}">
        <h3 class="rl-list-title">${o(s("researchTypePodcast"))} <span class="rl-list-count">(${u.length})</span></h3>
        <div class="rl-grid">
          ${u.length?u.map(w=>ue(w,l)).join(""):`<p class="rl-empty">${o(s("researchEmpty"))}</p>`}
        </div>
      </section>`);const pe=a.category==="us"||a.category==="tw"?"":`<div class="rl-filter-group" role="group" aria-label="${o(s("market"))}">
        <button type="button" class="rl-filter${a.market==="all"?" is-active":""}" data-rl-market="all">${o(s("researchFilterAll"))}</button>
        <button type="button" class="rl-filter${a.market==="US"?" is-active":""}" data-rl-market="US">${o(s("usStock"))}</button>
        <button type="button" class="rl-filter${a.market==="TW"?" is-active":""}" data-rl-market="TW">${o(s("twStock"))}</button>
      </div>`,$=a.category==="candidate"||a.category==="watch"?"":`<div class="rl-filter-group" role="group" aria-label="${o(s("researchStatusFilters"))}">
        ${k}
      </div>`;t.innerHTML=`
    <div class="rl-tabs-wrap">
      <div class="rl-tabs" role="tablist" aria-label="${o(s("researchCategories"))}">
        ${Qt(a)}
      </div>
    </div>
    <div class="rl-toolbar" role="toolbar" aria-label="${o(s("researchFilters"))}">
      ${pe}
      ${$}
    </div>
    <div class="rl-shelf-scroll" role="group" aria-label="${o(s("researchShelfFilters"))}">
      ${m}
    </div>
    ${g}
    <p class="rl-counts">${o(s("researchCounts",{books:p.length,papers:d.length,podcasts:u.length,total:c.length}))}</p>
    <div class="rl-lists">
      ${M.join("")}
    </div>`,eo(t),Xt(t,e,a)}function Xt(t,e,a){t.querySelectorAll("[data-rl-cat]").forEach(i=>{i.addEventListener("click",()=>{At(a,i.dataset.rlCat),de(t,e,a,{syncUrl:!0})})}),t.querySelectorAll("[data-rl-market]").forEach(i=>{i.addEventListener("click",()=>{a.market=i.dataset.rlMarket,de(t,e,a,{syncUrl:!1})})}),t.querySelectorAll("[data-rl-status]").forEach(i=>{i.addEventListener("click",()=>{a.status=i.dataset.rlStatus,de(t,e,a,{syncUrl:!1})})}),t.querySelectorAll("[data-rl-shelf]").forEach(i=>{i.addEventListener("click",()=>{a.shelf=i.dataset.rlShelf,za(a),de(t,e,a,{syncUrl:!1})})})}async function no(t=Aa){const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()}function lo(t,{syncUrl:e=!0,shelf:a=null}={}){return!gt||!ht?{ok:!1,reason:"not-ready"}:(At(G,Ct(t)),a&&(G.shelf=a),de(gt,ht,G,{syncUrl:e}),{ok:!0,category:G.category,state:{...G}})}async function ro(t="#rl-root",e=Aa,a={}){const i=typeof t=="string"?document.querySelector(t):t;if(!i)return{ok:!1,reason:"missing-root"};gt=i;try{const n=await no(e);return ht=n,G={category:"menu",market:"all",type:"all",shelf:"all",status:"all",candidate:"all"},At(G,Ct(a.category??"menu")),a.shelf&&(G.shelf=a.shelf),de(i,n,G,{syncUrl:a.syncUrl!==!1}),{ok:!0,data:n}}catch(n){return i.innerHTML=`<p class="rl-error">${o(s("researchLoadError",{msg:n.message}))}</p>`,{ok:!1,error:n}}}const co="./data/us-options-snapshot.json",po="book-mcmillan-options-handbook",uo={"covered-call":["optionsSetupCoveredCall","optionsSetupCoveredCallBody","optionsSetupCoveredCallWarn"],"protective-put":["optionsSetupProtectivePut","optionsSetupProtectivePutBody","optionsSetupProtectivePutWarn"],"vertical-spread":["optionsSetupVertical","optionsSetupVerticalBody","optionsSetupVerticalWarn"],"calendar-diagonal":["optionsSetupCalendar","optionsSetupCalendarBody","optionsSetupCalendarWarn"],"straddle-strangle":["optionsSetupStraddle","optionsSetupStraddleBody","optionsSetupStraddleWarn"],butterfly:["optionsSetupButterfly","optionsSetupButterflyBody","optionsSetupButterflyWarn"]};function go(t,e){if(!t||typeof t!="object")return e;const a=Je();return t[a]||t["zh-Hant"]||t.en||e}function ho(t){return t&&go(t.titleLocalized,t.title)||""}function mo(t){if(!t)return[];const e=t.plainTakeawaysLocalized;if(e&&typeof e=="object"){const a=Je(),i=e[a]||e["zh-Hant"]||e.en;if(Array.isArray(i)&&i.length)return i}return Array.isArray(t.plainTakeaways)?t.plainTakeaways:[]}function fo(t){try{return new Date(t).toLocaleString(z(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return t||"—"}}function _(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(z(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Na(t,e=1){return t==null||Number.isNaN(t)?null:`${(t*100).toFixed(e)}%`}function Zt(t){return t==null||Number.isNaN(t)?null:`${(t*100).toFixed(1)}%`}function R(t,e=""){return t==null||t===""?"—":`<span class="uo-val">${o(String(t))}${e?o(e):""}</span>`}function Lt(t){return s(t==="pass"?"optionsGatePass":t==="watch"?"optionsGateWatch":t==="fail"?"optionsGateFail":"optionsGateIncomplete")}function Et(t){return t==="pass"?"uo-gate-pass":t==="watch"?"uo-gate-watch":t==="fail"?"uo-gate-fail":"uo-gate-incomplete"}function Ue(t){return!t||t.incomplete||t.label==null?null:t.label==="up"?s("optionsTrendUp",{pct:t.pct!=null?t.pct:"—"}):t.label==="down"?s("optionsTrendDown",{pct:t.pct!=null?t.pct:"—"}):s("optionsTrendFlat",{pct:t.pct!=null?t.pct:"—"})}function yo(t){return t==null?null:t>1.2?s("optionsSkewPutHeavy"):t<.8?s("optionsSkewCallHeavy"):s("optionsSkewBalanced")}function Da(t){return t==="iv_rich"?s("optionsRegimeIvRich"):t==="iv_cheap"?s("optionsRegimeIvCheap"):t==="iv_fair"?s("optionsRegimeIvFair"):t==="iv_only"?s("optionsRegimeIvOnly"):"—"}function vo(t){return t!=null&&t.primaryBook?t.primaryBook:null}function ko(t){const e=vo(t),a=ho(e)||s("optionsBookFallbackTitle"),i=mo(e),n=i.length?`<ul class="uo-takeaways">${i.map(l=>`<li>${o(l)}</li>`).join("")}</ul>`:`<p class="uo-muted">${o(s("researchNoTakeaways"))}</p>`;return`
    <aside class="uo-book" aria-label="${o(s("optionsBookCite"))}">
      <div class="uo-book-head">
        <span class="uo-book-badge">${o(s("optionsBookBadge"))}</span>
        <h3 class="uo-book-title">${o(a)}</h3>
      </div>
      <p class="uo-book-lead">${o(s("optionsBookLead"))}</p>
      ${n}
      <p class="uo-book-link">
        <button type="button" class="uo-link-btn" data-jump="research">${o(s("optionsGotoResearch"))}</button>
        <span class="uo-muted">· ${o(po)}</span>
      </p>
    </aside>`}function So(t){const e=t.fundamentals||{},a=t.quality||{},i=e.trailingPE??e.forwardPE,n=e.trailingPE!=null?"":e.forwardPE!=null?` <span class="uo-hint">(${o(s("optionsForwardPe"))})</span>`:"";return`
    <tr data-uo-ticker="${o(t.ticker)}" class="uo-q-row">
      <td>
        <button type="button" class="uo-ticker-btn" data-uo-select="${o(t.ticker)}">
          <span class="uo-ticker">${o(t.ticker)}</span>
          <span class="uo-name">${o(t.name||"")}</span>
        </button>
      </td>
      <td class="num">${R(_(i,1))}${n}</td>
      <td class="num">${R(_(e.priceToBook,2))}</td>
      <td class="num">${R(_(e.debtToEquity,1))}</td>
      <td class="num">${R(Na(e.roe))}</td>
      <td>${R(Ue(e.revenueTrend))}</td>
      <td>${R(Ue(e.earningsTrend))}</td>
      <td><span class="uo-gate ${Et(a.gate)}">${o(Lt(a.gate))}</span></td>
    </tr>`}function bo(t){return t.map(e=>{const a=e.fundamentals||{},i=e.quality||{},n=a.trailingPE??a.forwardPE;return`
      <article class="uo-q-card" data-uo-ticker="${o(e.ticker)}">
        <button type="button" class="uo-ticker-btn" data-uo-select="${o(e.ticker)}">
          <span class="uo-ticker">${o(e.ticker)}</span>
          <span class="uo-name">${o(e.name||"")}</span>
        </button>
        <div class="uo-metrics">
          <div><span class="m-l">${o(s("optionsPe"))}</span> ${R(_(n,1))}</div>
          <div><span class="m-l">${o(s("optionsPb"))}</span> ${R(_(a.priceToBook,2))}</div>
          <div><span class="m-l">${o(s("optionsDebt"))}</span> ${R(_(a.debtToEquity,1))}</div>
          <div><span class="m-l">${o(s("optionsRoe"))}</span> ${R(Na(a.roe))}</div>
          <div><span class="m-l">${o(s("optionsRevTrend"))}</span> ${R(Ue(a.revenueTrend))}</div>
          <div><span class="m-l">${o(s("optionsEarnTrend"))}</span> ${R(Ue(a.earningsTrend))}</div>
        </div>
        <span class="uo-gate ${Et(i.gate)}">${o(Lt(i.gate))}</span>
      </article>`}).join("")}function $o(){return`
    <details class="uo-glossary fold-block">
      <summary>${o(s("optionsGlossaryTitle"))}</summary>
      <dl class="uo-dl">
        <div><dt>${o(s("optionsTermDelta"))}</dt><dd>${o(s("optionsDefDelta"))}</dd></div>
        <div><dt>${o(s("optionsTermIv"))}</dt><dd>${o(s("optionsDefIv"))}</dd></div>
        <div><dt>${o(s("optionsTermHv"))}</dt><dd>${o(s("optionsDefHv"))}</dd></div>
        <div><dt>${o(s("optionsTermAtm"))}</dt><dd>${o(s("optionsDefAtm"))}</dd></div>
        <div><dt>${o(s("optionsTermSkew"))}</dt><dd>${o(s("optionsDefSkew"))}</dd></div>
        <div><dt>${o(s("optionsTermProb"))}</dt><dd>${o(s("optionsDefProb"))}</dd></div>
      </dl>
    </details>`}function To(t){const e=t.setups||[];return e.length?`<div class="uo-setups">
    ${e.map(a=>{const i=uo[a.id];if(!i)return"";const[n,l,r]=i,c=a.volAligned?s("optionsSetupVolAligned"):s("optionsSetupVolNotAligned");return`
        <article class="uo-setup${a.volAligned?" is-aligned":""}">
          <h4>${o(s(n))}</h4>
          <p>${o(s(l))}</p>
          <p class="uo-risk-shape">${o(s("optionsRiskShape"))}: ${o(s(r))}</p>
          <p class="uo-muted">${o(c)} · ${o(Da(a.volRegime))}</p>
        </article>`}).join("")}
  </div>`:`<p class="uo-muted">${o(s("optionsNoSetups"))}</p>`}function wo(t){var c,p;if(!t)return`<p class="uo-muted">${o(s("optionsPickTicker"))}</p>`;const e=t.options,a=t.blockers||[];if(!e)return`
      <div class="uo-blocker" role="status">
        <p><strong>${o(s("optionsChainBlocked"))}</strong></p>
        <p>${o(a.join(" · ")||s("optionsDataMissing"))}</p>
      </div>`;const i=yo(e.putCallVolumeRatio),n=e.atmIv==null,l=e.historicalVol==null,r=n?"unknown":l?"iv_only":e.ivHvRatio>=1.25?"iv_rich":e.ivHvRatio<=.8?"iv_cheap":"iv_fair";return`
    <div class="uo-opt-head">
      <div>
        <div class="uo-ticker">${o(t.ticker)}</div>
        <div class="uo-name">${o(t.name||"")}</div>
      </div>
      <span class="uo-gate ${Et((c=t.quality)==null?void 0:c.gate)}">${o(Lt((p=t.quality)==null?void 0:p.gate))}</span>
    </div>
    <p class="uo-opt-note">${o(s("optionsMcmillanFirst"))}</p>
    <div class="uo-opt-grid">
      <div class="uo-opt-metric">
        <div class="m-l">${o(s("optionsAtmIv"))}</div>
        <div class="m-v">${R(n?null:Zt(e.atmIv))}</div>
        <div class="uo-muted">${o(s("optionsExpiry"))}: ${o(e.expiration||"—")}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${o(s("optionsHv"))}</div>
        <div class="m-v">${R(l?null:Zt(e.historicalVol))}</div>
        <div class="uo-muted">${o(s("optionsIvHv"))}: ${e.ivHvRatio!=null?R(_(e.ivHvRatio,2)+"×"):R(null)}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${o(s("optionsVolRegime"))}</div>
        <div class="m-v">${o(Da(r))}</div>
        <div class="uo-muted">${i?o(i):""}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${o(s("optionsCallPutVol"))}</div>
        <div class="m-v">${R(_(e.callVolume,0))} / ${R(_(e.putVolume,0))}</div>
        <div class="uo-muted">${o(s("optionsAtmStrike"))}: ${R(_(e.atmStrikeCall??e.atmStrikePut,1))}</div>
      </div>
    </div>
    ${(()=>{const d=a.filter(g=>!/atmIv|options fields incomplete/i.test(String(g))||e.historicalVol==null&&!(e.callVolume||e.putVolume)),u=d.length?d:[];return u.length?`<p class="uo-warn">${o(s("optionsPartialBlocker"))}: ${o(u.join(" · "))}</p>`:""})()}
    <h4 class="uo-h">${o(s("optionsEduSetups"))}</h4>
    <p class="uo-panel-lead">${o(s("optionsEduSetupsLead"))}</p>
    ${To(t)}
    <p class="uo-disclaimer" role="note">${o(s("optionsDisclaimer"))}</p>
    ${$o()}
  `}function Ba(t,e,a){const i=Array.isArray(e==null?void 0:e.tickers)?e.tickers:[],n=i.find(l=>l.ticker===a.ticker)||i[0]||null;n&&(a.ticker=n.ticker),t.innerHTML=`
    ${ko(e)}
    <p class="uo-meta">${o(s("dataAsOf"))} ${o(fo(e==null?void 0:e.asOf))} · ${o(s("optionsUsOnly"))}</p>
        <div class="uo-panels">
      <section class="uo-panel uo-panel-opt" aria-label="${o(s("optionsViewTitle"))}">
        <h3 class="uo-panel-title">${o(s("optionsViewTitle"))}</h3>
        <p class="uo-panel-lead">${o(s("optionsViewLead"))}</p>
        <div class="uo-ticker-chips" role="tablist" aria-label="${o(s("ticker"))}">
          ${i.map(l=>`
            <button type="button" class="uo-chip${l.ticker===a.ticker?" is-active":""}" data-uo-select="${o(l.ticker)}" role="tab" aria-selected="${l.ticker===a.ticker?"true":"false"}">${o(l.ticker)}</button>`).join("")}
        </div>
        <div class="uo-detail" id="uo-detail">
          ${wo(n)}
        </div>
      </section>
      <section class="uo-panel" aria-label="${o(s("optionsQualityTitle"))}">
        <h3 class="uo-panel-title">${o(s("optionsQualityTitle"))}</h3>
        <p class="uo-panel-lead">${o(s("optionsQualityLead"))}</p>
        <div class="table-wrap uo-table-wrap">
          <table class="stock-table uo-table">
            <thead>
              <tr>
                <th>${o(s("ticker"))}</th>
                <th>${o(s("optionsPe"))}</th>
                <th>${o(s("optionsPb"))}</th>
                <th>${o(s("optionsDebt"))}</th>
                <th>${o(s("optionsRoe"))}</th>
                <th>${o(s("optionsRevTrend"))}</th>
                <th>${o(s("optionsEarnTrend"))}</th>
                <th>${o(s("optionsGate"))}</th>
              </tr>
            </thead>
            <tbody>
              ${i.length?i.map(So).join(""):`<tr><td colspan="8">${o(s("optionsEmpty"))}</td></tr>`}
            </tbody>
          </table>
        </div>
        <div class="uo-mobile">${i.length?bo(i):`<p class="uo-muted">${o(s("optionsEmpty"))}</p>`}</div>
      </section>
    </div>
  `,t.querySelectorAll("[data-uo-select]").forEach(l=>{l.addEventListener("click",()=>{a.ticker=l.getAttribute("data-uo-select"),Ba(t,e,a)})}),t.querySelectorAll("[data-uo-ticker]").forEach(l=>{l.classList.toggle("is-selected",l.getAttribute("data-uo-ticker")===a.ticker)})}function Po(){return`
    <section class="section options-section" aria-label="${o(s("optionsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${o(s("optionsTitle"))}</h2>
        <p class="view-lead">${o(s("optionsLead"))}</p>
      </header>
      <p class="uo-disclaimer uo-disclaimer-top" role="note">${o(s("optionsDisclaimer"))}</p>
      <div id="uo-root" class="uo-root">
        <p class="uo-loading">${o(s("loading"))}</p>
      </div>
    </section>`}async function Co(t="#uo-root"){var a,i;const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};try{const n=await fetch(co);if(!n.ok)throw new Error(`HTTP ${n.status}`);const l=await n.json(),r={ticker:((i=(a=l==null?void 0:l.tickers)==null?void 0:a[0])==null?void 0:i.ticker)||null};return Ba(e,l,r),{ok:!0,data:l}}catch(n){return e.innerHTML=`
      <div class="uo-blocker" role="alert">
        <p>${o(s("optionsLoadError",{msg:n.message||String(n)}))}</p>
      </div>`,{ok:!1,error:n}}}const Ao="./data/earnings-digest.json";function Lo(t){try{return new Date(t).toLocaleString(z(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return t||"—"}}function rt(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(z(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Jt(t,e=1){return t==null||Number.isNaN(t)?null:`${t>0?"+":""}${Number(t).toFixed(e)}%`}function ne(t,e=""){return t==null||t===""?null:`<span class="er-val">${o(String(t))}${e?o(e):""}</span>`}function le(t,e){return e?`<div class="er-metric">
          <div class="m-l">${o(t)}</div>
          <div class="m-v">${e}</div>
        </div>`:""}function Eo(t){return t==="mega_cap_earnings_next_14d"?s("earningsTagPrimary"):t==="yahoo_most_actives_earnings_next_14d"?s("earningsTagActives"):t==="recently_reported"?s("earningsTagRecent"):t==="calendar_highlight_within_45d"?s("earningsTagFallback"):t||s("earningsTagOther")}function xo(t){return t==="recently_reported"?"er-badge-recent":t==="calendar_highlight_within_45d"?"er-badge-fallback":t!=null&&t.includes("most_actives")?"er-badge-hot":""}function ea(t,{hot:e=!1}={}){var l;if(!t)return"";const a=t.nextEarningsDate!=null?`${t.nextEarningsDate}${t.nextEarningsDateIsEstimate?` (${s("earningsEstimate")})`:""}`:null,i=((l=t.lastReport)==null?void 0:l.epsActual)!=null?`${rt(t.lastReport.epsActual,2)}${t.lastReport.quarter?` · ${t.lastReport.quarter}`:""}`:null,n=e?`<span class="er-badge ${xo(t.selectionTag)}">${o(Eo(t.selectionTag))}</span>`:`<span class="er-badge">${o(s("earningsMag7Badge"))}</span>`;return`
    <article class="er-card" data-ticker="${o(t.ticker)}">
      <div class="er-card-head">
        <div>
          <div class="er-ticker">${o(t.ticker)}</div>
          <div class="er-name">${o(t.name||"")}</div>
        </div>
        ${n}
      </div>
      <div>
        <div class="er-label">${o(s("earningsWhatItDoes"))}</div>
        <p class="er-does">${t.whatItDoes?o(t.whatItDoes):""}</p>
      </div>
      <div class="er-metrics">
        ${le(s("earningsNextDate"),ne(a))}
        ${le(s("earningsLastEps"),ne(i))}
        ${le(s("earningsRevYoy"),ne(Jt(t.revenueYoYPct)))}
        ${le(s("earningsEpsYoy"),ne(Jt(t.epsYoYPct)))}
        ${le(s("earningsPe"),ne(rt(t.pe,1)))}
        ${le(s("earningsForwardPe"),ne(rt(t.forwardPe,1)))}
      </div>
      ${t.whatToWatch?`<div>
        <div class="er-label">${o(s("earningsWhatToWatch"))}</div>
        <p class="er-watch">${o(t.whatToWatch)}</p>
      </div>`:""}
      ${Array.isArray(t.notes)&&t.notes.length?`<p class="er-notes er-muted">${o(t.notes.slice(0,3).join(" · "))}</p>`:""}
      ${t.blocker?`<p class="er-miss">${o(s("earningsPartialBlocker"))}: ${o(t.blocker)}</p>`:""}
    </article>`}function Mo(t,e){var n;const a=Array.isArray(e==null?void 0:e.mag7)?e.mag7:[],i=Array.isArray(e==null?void 0:e.watchlistHot)?e.watchlistHot:[];t.innerHTML=`
    <p class="er-meta">${o(s("dataAsOf"))} ${o(Lo(e==null?void 0:e.asOf))} · ${o(s("earningsUsFocus"))}</p>
    <p class="er-stub" role="note">${o(((n=e==null?void 0:e.twStub)==null?void 0:n.note)||s("earningsTwStub"))}</p>
    <div class="er-rule"><strong>${o(s("earningsSelectionTitle"))}</strong> ${o((e==null?void 0:e.selectionRule)||s("earningsSelectionFallback"))}</div>
        <div class="er-panels">
      <section class="er-panel" aria-label="${o(s("earningsMag7Title"))}">
        <h3 class="er-panel-title">${o(s("earningsMag7Title"))}</h3>
        <p class="er-panel-lead">${o(s("earningsMag7Lead"))}</p>
        <div class="er-cards">
          ${a.length?a.map(l=>ea(l,{hot:!1})).join(""):`<p class="er-empty">${o(s("earningsEmpty"))}</p>`}
        </div>
      </section>
      <section class="er-panel" aria-label="${o(s("earningsHotTitle"))}">
        <h3 class="er-panel-title">${o(s("earningsHotTitle"))}</h3>
        <p class="er-panel-lead">${o(s("earningsHotLead"))}</p>
        <div class="er-cards">
          ${i.length?i.map(l=>ea(l,{hot:!0})).join(""):`<p class="er-empty">${o(s("earningsHotEmpty"))}</p>`}
        </div>
      </section>
    </div>
    <p class="er-disclaimer" role="note">${o(s("earningsDisclaimer"))}</p>
  `}function Ro(){return`
    <section class="section earnings-section" aria-label="${o(s("earningsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${o(s("earningsTitle"))}</h2>
        <p class="view-lead">${o(s("earningsLead"))}</p>
      </header>
      <p class="er-disclaimer er-disclaimer-top" role="note">${o(s("earningsDisclaimer"))}</p>
      <div id="er-root" class="er-root">
        <p class="er-loading">${o(s("loading"))}</p>
      </div>
    </section>`}async function zo(t="#er-root"){const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};try{const a=await fetch(Ao);if(!a.ok)throw new Error(`HTTP ${a.status}`);const i=await a.json();return Mo(e,i),{ok:!0,data:i}}catch(a){return e.innerHTML=`
      <div class="er-empty" role="status">
        <p>${o(s("earningsLoadError",{msg:a.message||String(a)}))}</p>
      </div>`,{ok:!1,error:a}}}const No="./data/earnings-digest.json",_e=["https://query2.finance.yahoo.com","https://query1.finance.yahoo.com"],ee="https://r.jina.ai/",Do="https://www.sec.gov/files/company_tickers.json",Bo=t=>`https://data.sec.gov/submissions/CIK${t}.json`,jo=/^(10-K|10-Q|8-K)(\/A)?$/i,qo=8,ta=["price","summaryProfile","summaryDetail","defaultKeyStatistics","financialData","calendarEvents","earningsHistory"].join(",");let ce=null,Ce=null,Ae=null,Le=null;function A(t){if(t==null)return null;if(typeof t=="object"&&"raw"in t){const e=t.raw;return e==null||Number.isNaN(e)?null:e}return typeof t=="number"&&Number.isNaN(t)?null:t}function I(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(z(),{minimumFractionDigits:e,maximumFractionDigits:e})}function X(t,e=2){return t==null||Number.isNaN(t)?null:`${t>0?"+":""}${Number(t).toFixed(e)}%`}function Oo(t){return t==null||Number.isNaN(t)?null:Math.abs(t)>=1e9?`${I(t/1e9,2)}B`:Math.abs(t)>=1e6?`${I(t/1e6,2)}M`:Math.abs(t)>=1e3?`${I(t/1e3,1)}K`:I(t,0)}function aa(t,e){if(t==null||Number.isNaN(t))return null;const a=e==="TWD"?"NT$":e==="USD"?"$":"";return Math.abs(t)>=1e12?`${a}${I(t/1e12,2)}T`:Math.abs(t)>=1e9?`${a}${I(t/1e9,2)}B`:Math.abs(t)>=1e6?`${a}${I(t/1e6,2)}M`:`${a}${I(t,0)}`}function Z(t,e){if(t==null||Number.isNaN(t))return null;const a=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${I(t,a)}`}function ja(t){try{const e=typeof t=="number"?new Date(t*(t<1e12?1e3:1)):new Date(t);return Number.isNaN(e.getTime())?null:e.toLocaleString(z(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return null}}function Ho(t){return t==null||Number.isNaN(t)||t===0?"lk-flat":t>0?"lk-up":"lk-down"}function mt(t){if(!t)return null;const e=String(t).trim();if(e.startsWith("{")||e.startsWith("["))try{return JSON.parse(e)}catch{}const a=e.match(/Markdown Content:\s*(\{[\s\S]*|\[[\s\S]*)/i),i=a?a[1].trim():e,n=i.search(/[\{\[]/);if(n<0)return null;const l=i.slice(n);for(let r=l.length;r>2;r--){try{return JSON.parse(l.slice(0,r))}catch{}const c=Math.max(l.lastIndexOf("}",r-2),l.lastIndexOf("]",r-2));if(c<8)break;r=c+2}return null}async function Ve(t,{timeoutMs:e=14e3}={}){const a=typeof AbortController<"u"?new AbortController:null,i=a?setTimeout(()=>a.abort(),e):null;try{const n=await fetch(t,{signal:a==null?void 0:a.signal,headers:{Accept:"application/json,text/plain,*/*"}});if(!n.ok)throw new Error(`HTTP ${n.status}`);return await n.text()}finally{i&&clearTimeout(i)}}async function ft(t){const e=[];for(const a of _e){const i=`${a}${t}`;try{const n=await Ve(i,{timeoutMs:1e4}),l=mt(n);if(l)return{ok:!0,data:l,via:"direct",url:i};e.push(`${a}: non-json`)}catch(n){e.push(`${a}: ${n.message||n}`)}}for(const a of _e){const i=`${a}${t}`;try{const n=await Ve(`${ee}${i}`,{timeoutMs:18e3}),l=mt(n);if(l)return{ok:!0,data:l,via:"jina",url:i};e.push(`jina ${a}: parse`)}catch(n){e.push(`jina ${a}: ${n.message||n}`)}}return{ok:!1,data:null,via:null,error:e.slice(0,4).join(" · ")}}function Io(t,e="US"){let a=String(t||"").trim().toUpperCase();if(a=a.replace(/\s+/g,""),!a)return{ok:!1,error:"empty"};const i=e==="TW"?"TW":"US";if(/^\d{4}(\.(TW|TWO))?$/.test(a)){const l=a.replace(/\.(TW|TWO)$/,"");return{ok:!0,market:"TW",symbol:`${l}.TW`,alt:`${l}.TWO`,display:l}}if(/\.(TW|TWO)$/.test(a))return{ok:!0,market:"TW",symbol:a,alt:a.endsWith(".TW")?a.replace(/\.TW$/,".TWO"):a.replace(/\.TWO$/,".TW"),display:a.replace(/\.(TW|TWO)$/,"")};if(/^\d{4,6}$/.test(a)&&i==="TW")return{ok:!0,market:"TW",symbol:`${a}.TW`,alt:`${a}.TWO`,display:a};let n=a.replace(/\./g,"-");return/^[A-Z][A-Z0-9\-]{0,9}$/.test(n)?{ok:!0,market:"US",symbol:n,alt:null,display:n}:{ok:!1,error:"invalid"}}function Fo(t){var c,p,d,u,g;const e=(p=(c=t==null?void 0:t.chart)==null?void 0:c.result)==null?void 0:p[0];if(!e)return null;const a=e.meta||{},i=a.chartPreviousClose??a.previousClose??(Array.isArray((g=(u=(d=e.indicators)==null?void 0:d.quote)==null?void 0:u[0])==null?void 0:g.close)?[...e.indicators.quote[0].close].reverse().find(m=>m!=null):null),n=a.regularMarketPrice??null;let l=null,r=a.regularMarketChangePercent??a.fulldayChangePercent??null;return n!=null&&i!=null&&(l=n-i,r==null&&i!==0&&(r=l/i*100)),{symbol:a.symbol||null,shortName:a.shortName||null,longName:a.longName||null,currency:a.currency||null,exchange:a.fullExchangeName||a.exchangeName||null,price:n,previousClose:i??null,change:l,changePct:r,volume:a.regularMarketVolume??null,dayHigh:a.regularMarketDayHigh??null,dayLow:a.regularMarketDayLow??null,fiftyTwoWeekHigh:a.fiftyTwoWeekHigh??null,fiftyTwoWeekLow:a.fiftyTwoWeekLow??null,marketTime:a.regularMarketTime??null,instrumentType:a.instrumentType||null}}function Wo(t,e){const a=Array.isArray(t==null?void 0:t.quotes)?t.quotes:[],i=a.find(n=>String(n.symbol||"").toUpperCase()===e.toUpperCase())||a.find(n=>n.isYahooFinance)||a[0];return i?{symbol:i.symbol||null,shortName:i.shortname||i.shortName||null,longName:i.longname||i.longName||null,exchange:i.exchDisp||i.exchange||null,sector:i.sectorDisp||i.sector||null,industry:i.industryDisp||i.industry||null,quoteType:i.quoteType||i.typeDisp||null}:null}function yt(t){var m,k,S,T,P;const e=(k=(m=t==null?void 0:t.quoteSummary)==null?void 0:m.result)==null?void 0:k[0];if(!e)return null;const a=e.price||{},i=e.summaryProfile||{},n=e.summaryDetail||{},l=e.defaultKeyStatistics||{},r=e.financialData||{},c=((S=e.calendarEvents)==null?void 0:S.earnings)||{},p=Array.isArray((T=e.earningsHistory)==null?void 0:T.history)?e.earningsHistory.history:[],d=p.find(C=>C.period==="-1q")||[...p].sort((C,M)=>String(M.period||"").localeCompare(String(C.period||"")))[0]||null,g=(Array.isArray(c.earningsDate)?c.earningsDate:[]).map(C=>{var M;return(C==null?void 0:C.fmt)||(A(C)!=null?(M=ja(A(C)))==null?void 0:M.slice(0,10):null)}).find(Boolean)||null;return{name:a.longName||a.shortName||null,currency:a.currency||n.currency||null,business:i.longBusinessSummary||null,sector:i.sector||null,industry:i.industry||null,website:i.website||null,pe:A(n.trailingPE)??A(l.trailingPE),forwardPe:A(n.forwardPE)??A(l.forwardPE),marketCap:A(n.marketCap)??A(a.marketCap),epsTrailing:A(l.trailingEps)??A(r.trailingEps),revenue:A(r.totalRevenue),revenueGrowth:A(r.revenueGrowth)!=null?A(r.revenueGrowth)*100:null,earningsGrowth:A(r.earningsGrowth)!=null?A(r.earningsGrowth)*100:null,profitMargins:A(r.profitMargins)!=null?A(r.profitMargins)*100:null,grossMargins:A(r.grossMargins)!=null?A(r.grossMargins)*100:null,dividendYield:A(n.dividendYield)!=null?A(n.dividendYield)*100:null,beta:A(l.beta)??A(n.beta),bookValue:A(l.bookValue),nextEarningsDate:g,nextEarningsEstimate:A(c.earningsAverage),lastEpsActual:d?A(d.epsActual):null,lastEpsEstimate:d?A(d.epsEstimate):null,lastEpsSurprisePct:d&&A(d.surprisePercent)!=null?A(d.surprisePercent)*100:null,lastEpsPeriod:(d==null?void 0:d.period)||null,lastEpsQuarter:((P=d==null?void 0:d.quarter)==null?void 0:P.fmt)||null}}async function Uo(){try{await fetch("https://guce.yahoo.com/consent?brandType=nonEu",{mode:"cors",credentials:"include",redirect:"follow"})}catch{}for(const t of _e)try{const e=await fetch(`${t}/v1/test/getcrumb`,{mode:"cors",credentials:"include"});if(!e.ok)continue;const a=(await e.text()).trim();if(a&&a.length<80&&!a.includes("{"))return{ok:!0,crumb:a,host:t}}catch{}return{ok:!1,crumb:"",host:_e[0]}}async function _o(t){const e=await Uo();if(e.ok){const l=`/v10/finance/quoteSummary/${encodeURIComponent(t)}?modules=${ta}&crumb=${encodeURIComponent(e.crumb)}`;try{const r=await fetch(`${e.host}${l}`,{mode:"cors",credentials:"include",headers:{Accept:"application/json"}});if(r.ok){const c=await r.json(),p=yt(c);if(p)return{ok:!0,data:p,via:"yahoo-crumb"}}}catch{}}const a=`/v10/finance/quoteSummary/${encodeURIComponent(t)}?modules=${ta}`,i=await ft(a);if(i.ok){const l=yt(i.data);if(l)return{ok:!0,data:l,via:`yahoo-${i.via}`}}const n=await Vo(t);return n.ok?n:{ok:!1,data:null,via:null,error:i.error||"quoteSummary unavailable"}}async function Vo(t){const e=[`https://finance.yahoo.com/quote/${encodeURIComponent(t)}/`,`${ee}https://finance.yahoo.com/quote/${encodeURIComponent(t)}/`];for(const a of e)try{const i=await Ve(a,{timeoutMs:2e4});if(/AbuseAlleviation|Invalid Crumb|AuthenticationRequired/i.test(i)&&i.length<2e3)continue;const n=[...i.matchAll(/<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/gi)];for(const r of n)try{const c=JSON.parse(r[1]),p=typeof(c==null?void 0:c.body)=="string"?JSON.parse(c.body):(c==null?void 0:c.body)||c,d=yt(p);if(d!=null&&d.business||(d==null?void 0:d.pe)!=null||(d==null?void 0:d.marketCap)!=null)return{ok:!0,data:d,via:a.startsWith(ee)?"yahoo-html-jina":"yahoo-html"}}catch{}const l=i.match(/\\"longBusinessSummary\\":\\"(.*?)\\"/);if(l)return{ok:!0,data:{business:l[1].replace(/\\n/g," ").replace(/\\"/g,'"').replace(/\\\\/g,"\\").slice(0,800)},via:"yahoo-html-partial"}}catch{}return{ok:!1,data:null,via:null}}async function qa(){return ce||Ce||(Ce=(async()=>{try{const t=await fetch(No,{cache:"no-cache"});if(!t.ok)throw new Error(`HTTP ${t.status}`);ce=await t.json()}catch{ce={mag7:[],watchlistHot:[]}}return ce})(),Ce)}function Go(t){const e=ce;if(!e)return null;const a=String(t||"").replace(/\.TW$/i,"").replace(/\.TWO$/i,"").toUpperCase();return[...e.mag7||[],...e.watchlistHot||[]].find(n=>String(n.ticker||"").toUpperCase()===a)||null}function Se(t){const e=String(t??"").replace(/\D/g,"");return e?e.padStart(10,"0").slice(-10):null}function Yo(t,e,a){const i=String(t??"").replace(/^0+/,"")||String(t??"").replace(/\D/g,""),n=String(e||"").replace(/-/g,""),l=String(a||"").trim();return!i||!n||!l?null:`https://www.sec.gov/Archives/edgar/data/${i}/${n}/${l}`}function sa({market:t,symbol:e,display:a,website:i,cik:n}={}){const l=t==="TW"?"TW":"US",r=String(e||"").toUpperCase(),c=String(a||r.replace(/\.(TW|TWO)$/i,"")).replace(/\D/g,"").slice(0,6),p=[],u=new Date().getFullYear()-1911;if(l==="US"){const g=r.replace(/-/,"."),m=Se(n),k=m?String(Number(m)):null;p.push({kind:"official",id:"sec-edgar-search",labelKey:"lookupSecEdgarSearch",href:`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${encodeURIComponent(g)}&type=&dateb=&owner=include&count=40`}),k&&p.push({kind:"official",id:"sec-edgar-browse",labelKey:"lookupSecEdgarBrowse",href:`https://www.sec.gov/edgar/browse/?CIK=${encodeURIComponent(k)}`}),p.push({kind:"official",id:"sec-forms-filter",labelKey:"lookupSecFormsFilter",href:`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${encodeURIComponent(m||g)}&type=10-&dateb=&owner=include&count=40`})}else c?(p.push({kind:"official",id:"mops-financial-book",labelKey:"lookupMopsFinancialBook",href:`https://mops.twse.com.tw/server-java/t57sb01?step=1&colorchg=1&co_id=${encodeURIComponent(c)}&year=${u}&season=&mtype=A`}),p.push({kind:"official",id:"mops-financial-query",labelKey:"lookupMopsFinancialQuery",href:"https://mops.twse.com.tw/mops/web/t57sb01_q1"}),p.push({kind:"official",id:"mops-company",labelKey:"lookupMopsCompany",href:`https://mops.twse.com.tw/mops/web/t05st01?co_id=${encodeURIComponent(c)}`}),p.push({kind:"official",id:"mops-material",labelKey:"lookupMopsMaterial",href:`https://mops.twse.com.tw/mops/web/t05st02?co_id=${encodeURIComponent(c)}`}),p.push({kind:"official",id:"twse-isin",labelKey:"lookupTwseIsin",href:`https://isin.twse.com.tw/isin/basic_search.jsp?code=${encodeURIComponent(c)}`}),/\.TWO$/i.test(r)&&p.push({kind:"official",id:"tpex-company",labelKey:"lookupTpexCompany",href:`https://www.tpex.org.tw/zh-tw/mainboard/listed/company-detail.html?stkno=${encodeURIComponent(c)}`})):p.push({kind:"official",id:"mops-home",labelKey:"lookupMopsFinancialQuery",href:"https://mops.twse.com.tw/mops/web/t57sb01_q1"}),r&&p.push({kind:"quote",id:"yahoo-tw",labelKey:"lookupYahooTwQuote",href:`https://tw.stock.yahoo.com/quote/${encodeURIComponent(r)}`});return i&&/^https?:\/\//i.test(String(i))&&p.push({kind:"company",id:"company-website",labelKey:"lookupCompanyWebsite",href:String(i).trim()}),{market:l,links:p,code:c||null,cik:Se(n)}}async function Oa(t,{timeoutMs:e=18e3}={}){const a=[];for(const i of[`${ee}${t}`,t])try{const n=await Ve(i,{timeoutMs:e}),l=mt(n);if(l)return{ok:!0,data:l,via:i.startsWith(ee)?"jina":"direct"};a.push(`${i.startsWith(ee)?"jina":"direct"}: non-json`)}catch(n){a.push(`${i.startsWith(ee)?"jina":"direct"}: ${n.message||n}`)}return{ok:!1,data:null,via:null,error:a.slice(0,3).join(" · ")}}async function Ko(){return Ae||Le||(Le=(async()=>{const t=await Oa(Do,{timeoutMs:22e3}),e=new Map;if(t.ok&&t.data&&typeof t.data=="object")for(const a of Object.values(t.data)){const i=String((a==null?void 0:a.ticker)||"").toUpperCase(),n=Se(a==null?void 0:a.cik_str);i&&n&&e.set(i,n)}return Ae={map:e,via:t.via,ok:t.ok,error:t.error||null},Ae})(),Le)}async function Qo(t){const e=String(t||"").toUpperCase().replace(/\./g,"-");if(!e)return{ok:!1,cik:null};const a=await Ko(),i=a.map.get(e)||null;return{ok:!!i,cik:i,via:a.via,error:i?null:a.error||"cik_not_found"}}function Xo(t,{limit:e=qo}={}){var l,r,c,p,d,u;const a=(l=t==null?void 0:t.filings)==null?void 0:l.recent;if(!a||!Array.isArray(a.form))return[];const i=Se(t.cik),n=[];for(let g=0;g<a.form.length&&n.length<e;g++){const m=String(a.form[g]||"");if(!jo.test(m))continue;const k=((r=a.accessionNumber)==null?void 0:r[g])||null,S=((c=a.primaryDocument)==null?void 0:c[g])||null,T=((p=a.filingDate)==null?void 0:p[g])||null,P=((d=a.primaryDocDescription)==null?void 0:d[g])||((u=a.items)==null?void 0:u[g])||m,C=Yo(i,k,S);C&&n.push({form:m,filingDate:T,description:String(P||m).slice(0,160),accessionNumber:k,href:C})}return n}async function Zo(t){var l,r;const e=Se(t);if(!e)return{ok:!1,filings:[],companyName:null,investorWebsite:null,error:"no_cik"};const a=await Oa(Bo(e),{timeoutMs:22e3});if(!a.ok)return{ok:!1,filings:[],companyName:null,investorWebsite:null,error:a.error};const i=Xo(a.data),n=(l=a.data)!=null&&l.investorWebsite&&/^https?:\/\//i.test(a.data.investorWebsite)?a.data.investorWebsite:null;return{ok:!0,filings:i,companyName:((r=a.data)==null?void 0:r.name)||null,investorWebsite:n,via:a.via}}async function Jo({market:t,symbol:e,display:a,website:i}={}){const n=sa({market:t,symbol:e,display:a,website:i,cik:null}),l={market:n.market,links:n.links,recent:[],cik:null,status:"links_only",noteKey:null,sources:[]};if(n.market==="TW")return l.status="links_ready",l.noteKey="lookupFilingsTwNote",l.sources.push("MOPS"),l;const r=String(e||"").toUpperCase();try{const c=await Qo(r);if(c.ok){l.cik=c.cik,l.links=sa({market:"US",symbol:e,display:a,website:i,cik:c.cik}).links,c.via&&l.sources.push(`SEC ticker map (${c.via})`);const p=await Zo(c.cik);p.ok?(l.recent=p.filings,l.status=p.filings.length?"filings_ok":"filings_empty",l.noteKey=p.filings.length?null:"lookupFilingsListEmpty",p.via&&l.sources.push(`SEC submissions (${p.via})`),p.investorWebsite&&(l.links.some(u=>u.href===p.investorWebsite)||l.links.push({kind:"company",id:"sec-investor-site",labelKey:"lookupInvestorRelations",href:p.investorWebsite}))):(l.status="filings_unavailable",l.noteKey="lookupFilingsListUnavailable")}else l.status="cik_unavailable",l.noteKey="lookupFilingsCikUnavailable"}catch{l.status="filings_unavailable",l.noteKey="lookupFilingsListUnavailable"}return l}function ei({market:t,symbol:e,chart:a,search:i,summary:n,digest:l}){var u,g,m,k;const r=(n==null?void 0:n.currency)||(a==null?void 0:a.currency)||(t==="TW"?"TWD":"USD"),c=(n==null?void 0:n.name)||(a==null?void 0:a.longName)||(a==null?void 0:a.shortName)||(i==null?void 0:i.longName)||(i==null?void 0:i.shortName)||(l==null?void 0:l.name)||e,p=(n==null?void 0:n.business)||(l!=null&&l.whatItDoes?String(l.whatItDoes):null)||null;return{market:t,symbol:e,name:c,business:p,sector:(n==null?void 0:n.sector)||(i==null?void 0:i.sector)||null,industry:(n==null?void 0:n.industry)||(i==null?void 0:i.industry)||null,exchange:(a==null?void 0:a.exchange)||(i==null?void 0:i.exchange)||null,currency:r,price:(a==null?void 0:a.price)??null,change:(a==null?void 0:a.change)??null,changePct:(a==null?void 0:a.changePct)??null,previousClose:(a==null?void 0:a.previousClose)??null,volume:(a==null?void 0:a.volume)??null,dayHigh:(a==null?void 0:a.dayHigh)??null,dayLow:(a==null?void 0:a.dayLow)??null,fiftyTwoWeekHigh:(a==null?void 0:a.fiftyTwoWeekHigh)??null,fiftyTwoWeekLow:(a==null?void 0:a.fiftyTwoWeekLow)??null,marketTime:(a==null?void 0:a.marketTime)??null,pe:(n==null?void 0:n.pe)??(l==null?void 0:l.pe)??null,forwardPe:(n==null?void 0:n.forwardPe)??(l==null?void 0:l.forwardPe)??null,marketCap:(n==null?void 0:n.marketCap)??(l==null?void 0:l.marketCap)??null,epsTrailing:(n==null?void 0:n.epsTrailing)??null,revenue:(n==null?void 0:n.revenue)??null,revenueGrowth:(n==null?void 0:n.revenueGrowth)??(l==null?void 0:l.revenueYoYPct)??null,earningsGrowth:(n==null?void 0:n.earningsGrowth)??(l==null?void 0:l.epsYoYPct)??null,profitMargins:(n==null?void 0:n.profitMargins)??null,grossMargins:(n==null?void 0:n.grossMargins)??null,dividendYield:(n==null?void 0:n.dividendYield)??null,beta:(n==null?void 0:n.beta)??null,nextEarningsDate:(n==null?void 0:n.nextEarningsDate)??(l==null?void 0:l.nextEarningsDate)??null,nextEarningsEstimate:(n==null?void 0:n.nextEarningsEstimate)??(l==null?void 0:l.consensusEpsNext)??null,lastEpsActual:(n==null?void 0:n.lastEpsActual)??((u=l==null?void 0:l.lastReport)==null?void 0:u.epsActual)??null,lastEpsEstimate:(n==null?void 0:n.lastEpsEstimate)??((g=l==null?void 0:l.lastReport)==null?void 0:g.epsEstimate)??null,lastEpsSurprisePct:(n==null?void 0:n.lastEpsSurprisePct)??((m=l==null?void 0:l.lastReport)==null?void 0:m.epsSurprisePct)??null,lastEpsQuarter:(n==null?void 0:n.lastEpsQuarter)??((k=l==null?void 0:l.lastReport)==null?void 0:k.quarter)??null,website:(n==null?void 0:n.website)||null,sources:[],filings:null}}async function ti(t,e="US"){const a=Io(t,e);if(!a.ok)return{ok:!1,error:a.error||"invalid",snapshot:null};await qa();const i=[a.symbol];a.alt&&i.push(a.alt);let n=null,l=a.symbol,r=null,c=null;for(const P of i){const C=await ft(`/v8/finance/chart/${encodeURIComponent(P)}?interval=1d&range=5d&includePrePost=false`);if(C.ok){if(n=Fo(C.data),(n==null?void 0:n.price)!=null||n!=null&&n.longName||n!=null&&n.shortName){l=P,r=C.via;break}n=null}else c=C.error}if(!n)return{ok:!1,error:"not_found",detail:c,snapshot:null,symbol:l,market:a.market};const p=encodeURIComponent(a.display||l),d=await ft(`/v1/finance/search?q=${p}&quotesCount=8&newsCount=0&listsCount=0`),u=d.ok?Wo(d.data,l):null,g=await _o(l),m=Go(l),k=ei({market:a.market,symbol:l,chart:n,search:u,summary:g.data,digest:m}),S=[];r&&S.push(`Yahoo chart (${r})`),d.ok&&S.push(`Yahoo search (${d.via})`),g.ok&&S.push(`Yahoo quoteSummary (${g.via})`),m&&S.push("site earnings-digest");const T=await Jo({market:a.market,symbol:l,display:a.display,website:k.website});if(k.filings=T,Array.isArray(T==null?void 0:T.sources))for(const P of T.sources)S.push(P);return k.sources=S,{ok:!0,snapshot:k,market:a.market,symbol:l,partial:!g.ok}}function D(t,e){return e?`<div class="lk-metric">
    <div class="lk-ml">${o(t)}</div>
    <div class="lk-mv">${e}</div>
  </div>`:""}function B(t){return t==null||t===""?null:`<span class="lk-mono">${o(String(t))}</span>`}function ai(t){return t==="official"?`<span class="lk-src-badge lk-src-official">${o(s("lookupSourceOfficial"))}</span>`:t==="quote"?`<span class="lk-src-badge lk-src-quote">${o(s("lookupSourceQuote"))}</span>`:t==="company"?`<span class="lk-src-badge lk-src-company">${o(s("lookupSourceCompany"))}</span>`:""}function si(t){if(!t||!Array.isArray(t.links)||!t.links.length)return"";const e=t.links.map(n=>{if(!(n!=null&&n.href))return"";const l=s(n.labelKey||"lookupOfficialFilings");return`<li class="lk-ofil-item">
        ${ai(n.kind)}
        <a class="lk-ofil-link" href="${o(n.href)}" target="_blank" rel="noopener noreferrer">${o(l)}</a>
      </li>`}).filter(Boolean).join("");let a="";if(t.market==="US")if(Array.isArray(t.recent)&&t.recent.length){const n=t.recent.map(l=>{const r=l.description||l.form||"";return`<tr>
            <td class="lk-ofil-form"><span class="lk-mono">${o(l.form||"")}</span></td>
            <td class="lk-ofil-date">${o(l.filingDate||"—")}</td>
            <td class="lk-ofil-title"><a href="${o(l.href)}" target="_blank" rel="noopener noreferrer">${o(r)}</a></td>
          </tr>`}).join("");a=`
        <h5 class="lk-h5">${o(s("lookupRecentFilings"))}</h5>
        <div class="lk-ofil-table-wrap">
          <table class="lk-ofil-table">
            <thead><tr>
              <th>${o(s("lookupFilingForm"))}</th>
              <th>${o(s("lookupFilingDate"))}</th>
              <th>${o(s("lookupFilingDoc"))}</th>
            </tr></thead>
            <tbody>${n}</tbody>
          </table>
        </div>`}else{const n=t.noteKey?s(t.noteKey):s("lookupFilingsListUnavailable");a=`<p class="lk-ofil-note">${o(n)}</p>
        <p class="lk-ofil-note">${o(s("lookupFilingsLinksStillWork"))}</p>`}else if(t.market==="TW"){const n=t.noteKey?s(t.noteKey):s("lookupFilingsTwNote");a=`<p class="lk-ofil-note">${o(n)}</p>`}const i=t.cik?`<p class="lk-ofil-meta">${o(s("lookupCikLabel"))}: <span class="lk-mono">${o(t.cik)}</span></p>`:"";return`
    <section class="lk-block lk-ofil" aria-label="${o(s("lookupOfficialFilings"))}">
      <h4 class="lk-h4">${o(s("lookupOfficialFilings"))}</h4>
      <p class="lk-ofil-lead">${o(s("lookupOfficialFilingsLead"))}</p>
      ${i}
      <ul class="lk-ofil-links">${e}</ul>
      ${a}
    </section>`}function oa(t,e){if(!(e!=null&&e.ok)||!e.snapshot){const c=(e==null?void 0:e.error)==="empty"?s("lookupEmptyInput"):(e==null?void 0:e.error)==="invalid"?s("lookupInvalid"):(e==null?void 0:e.error)==="not_found"?s("lookupNotFound"):s("lookupError",{msg:(e==null?void 0:e.detail)||(e==null?void 0:e.error)||"error"});t.innerHTML=`<div class="lk-empty" role="status">${o(c)}</div>`;return}const a=e.snapshot,i=Ho(a.changePct??a.change),n=a.market==="TW"?`<span class="lk-badge lk-badge-tw">${o(s("twStock"))}</span>`:`<span class="lk-badge lk-badge-us">${o(s("usStock"))}</span>`,l=a.business?`<p class="lk-biz">${o(a.business.length>520?`${a.business.slice(0,520)}…`:a.business)}</p>`:"",r=ja(a.marketTime);t.innerHTML=`
    <article class="lk-card" data-symbol="${o(a.symbol)}">
      <header class="lk-card-head">
        <div>
          <div class="lk-sym-row">
            <span class="lk-symbol">${o(a.symbol)}</span>
            ${n}
          </div>
          <h3 class="lk-name">${o(a.name||"")}</h3>
          <p class="lk-meta-line">
            ${a.exchange?o(a.exchange):""}
            ${a.sector?` · ${o(a.sector)}`:""}
            ${a.industry?` · ${o(a.industry)}`:""}
          </p>
        </div>
        <div class="lk-quote ${i}">
          <div class="lk-price">${o(Z(a.price,a.currency)||"—")}</div>
          <div class="lk-chg">
            <span>${o(Z(a.change,a.currency)||"—")}</span>
            <span>${o(X(a.changePct)||"—")}</span>
          </div>
          ${r?`<div class="lk-asof">${o(s("dataAsOf"))} ${o(r)}</div>`:""}
        </div>
      </header>

      <section class="lk-block" aria-label="${o(s("lookupBusiness"))}">
        <h4 class="lk-h4">${o(s("lookupBusiness"))}</h4>
        ${l||`<p class="lk-muted">${o(s("earningsDataMissing"))}</p>`}
      </section>

      <section class="lk-block" aria-label="${o(s("lookupQuoteStats"))}">
        <h4 class="lk-h4">${o(s("lookupQuoteStats"))}</h4>
        <div class="lk-metrics">
          ${D(s("lookupPrevClose"),B(Z(a.previousClose,a.currency)))}
          ${D(s("lookupVolume"),B(Oo(a.volume)))}
          ${D(s("lookupDayRange"),a.dayLow!=null&&a.dayHigh!=null?B(`${Z(a.dayLow,a.currency)} – ${Z(a.dayHigh,a.currency)}`):null)}
          ${D(s("lookup52w"),a.fiftyTwoWeekLow!=null&&a.fiftyTwoWeekHigh!=null?B(`${Z(a.fiftyTwoWeekLow,a.currency)} – ${Z(a.fiftyTwoWeekHigh,a.currency)}`):null)}
          ${D(s("lookupMarketCap"),B(aa(a.marketCap,a.currency)))}
          ${D(s("earningsPe"),B(I(a.pe,1)))}
          ${D(s("earningsForwardPe"),B(I(a.forwardPe,1)))}
          ${D(s("lookupEps"),B(I(a.epsTrailing,2)))}
          ${D(s("lookupBeta"),B(I(a.beta,2)))}
          ${D(s("lookupDivYield"),B(X(a.dividendYield,2)))}
        </div>
      </section>

      <section class="lk-block" aria-label="${o(s("lookupFinancials"))}">
        <h4 class="lk-h4">${o(s("lookupFinancials"))}</h4>
        <div class="lk-metrics">
          ${D(s("lookupRevenue"),B(aa(a.revenue,a.currency)))}
          ${D(s("earningsRevYoy"),B(X(a.revenueGrowth,1)))}
          ${D(s("earningsEpsYoy"),B(X(a.earningsGrowth,1)))}
          ${D(s("lookupGrossMargin"),B(X(a.grossMargins,1)))}
          ${D(s("lookupProfitMargin"),B(X(a.profitMargins,1)))}
        </div>
      </section>

      <section class="lk-block" aria-label="${o(s("lookupEarnings"))}">
        <h4 class="lk-h4">${o(s("lookupEarnings"))}</h4>
        <div class="lk-metrics">
          ${D(s("earningsNextDate"),B(a.nextEarningsDate))}
          ${D(s("lookupEpsConsensus"),B(I(a.nextEarningsEstimate,2)))}
          ${D(s("earningsLastEps"),a.lastEpsActual!=null?B(`${I(a.lastEpsActual,2)}${a.lastEpsQuarter?` · ${a.lastEpsQuarter}`:""}`):null)}
          ${D(s("lookupEpsSurprise"),B(X(a.lastEpsSurprisePct,1)))}
        </div>
      </section>

      ${si(a.filings)}

      <p class="lk-sources">${o(s("lookupSources"))}: ${o((a.sources||[]).join(" · ")||"Yahoo Finance")}</p>
      ${e.partial?`<p class="lk-partial">${o(s("lookupPartial"))}</p>`:""}
      <p class="lk-disclaimer" role="note">${o(s("lookupDisclaimer"))}</p>
    </article>`}function oi(){return`
    <section class="section lookup-section" aria-label="${o(s("lookupTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${o(s("lookupTitle"))}</h2>
        <p class="view-lead">${o(s("lookupLead"))}</p>
      </header>
      <p class="lk-disclaimer lk-disclaimer-top" role="note">${o(s("lookupDisclaimer"))}</p>
      <div class="lk-market-tabs" role="tablist" aria-label="${o(s("market"))}">
        <button type="button" class="lk-tab is-active" data-lk-market="US" role="tab" aria-selected="true">${o(s("usStock"))}</button>
        <button type="button" class="lk-tab" data-lk-market="TW" role="tab" aria-selected="false">${o(s("twStock"))}</button>
      </div>
      <form class="lk-form" data-lk-form>
        <label class="lk-label" for="lk-input">${o(s("lookupInputLabel"))}</label>
        <div class="lk-row">
          <input id="lk-input" class="lk-input" name="symbol" type="text" autocomplete="off" spellcheck="false"
            placeholder="${o(s("lookupPlaceholderUs"))}" data-lk-input />
          <button type="submit" class="lk-submit">${o(s("lookupSearch"))}</button>
        </div>
        <p class="lk-hint" data-lk-hint>${o(s("lookupHintUs"))}</p>
      </form>
      <div id="lk-root" class="lk-root" aria-live="polite">
        <p class="lk-muted">${o(s("lookupIdle"))}</p>
      </div>
    </section>`}function ii(t="#lk-root"){const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};const a=e.closest(".lookup-section")||e.parentElement;if(!a||a.dataset.lkBound==="1")return{ok:!0,root:e};a.dataset.lkBound="1";const i=a.querySelector("[data-lk-form]"),n=a.querySelector("[data-lk-input]"),l=a.querySelector("[data-lk-hint]"),r=a.querySelectorAll("[data-lk-market]");let c="US";const p=u=>{c=u==="TW"?"TW":"US",r.forEach(g=>{const m=g.dataset.lkMarket===c;g.classList.toggle("is-active",m),g.setAttribute("aria-selected",m?"true":"false")}),n&&(n.placeholder=s(c==="TW"?"lookupPlaceholderTw":"lookupPlaceholderUs")),l&&(l.textContent=s(c==="TW"?"lookupHintTw":"lookupHintUs"))};r.forEach(u=>{u.addEventListener("click",()=>p(u.dataset.lkMarket))});const d=async()=>{const u=(n==null?void 0:n.value)||"";e.innerHTML=`<p class="lk-loading">${o(s("lookupLoading"))}</p>`;try{const g=await ti(u,c);oa(e,g)}catch(g){oa(e,{ok:!1,error:"error",detail:(g==null?void 0:g.message)||String(g)})}};i==null||i.addEventListener("submit",u=>{u.preventDefault(),d()});try{const u=String(location.hash||""),g=u.match(/[?&]q=([^&]+)/i)||u.match(/#(?:lookup|quote)\/([A-Za-z0-9.\-]+)/i);if(g){const m=decodeURIComponent(g[1]);/^\d{4}/.test(m)||/\.TW/i.test(m)?p("TW"):p("US"),n&&(n.value=m),d()}}catch{}return qa(),{ok:!0,root:e,run:d}}const ni="./data/soxl-desk.json";function li(t){try{return new Date(t).toLocaleString(z(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return t||"—"}}function fe(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(z(),{minimumFractionDigits:e,maximumFractionDigits:e})}function ct(t,e=2){return t==null||Number.isNaN(t)?null:`${t>0?"+":""}${Number(t).toFixed(e)}%`}function ia(t,e=2){return t==null||Number.isNaN(t)?null:`${t>0?"+":(t<0,"")}${fe(t,e)}`}function Ee(t){return t==null||Number.isNaN(t)||t===0?"sx-flat":t>0?"sx-up":"sx-down"}function ri(t,e){const a=(e==null?void 0:e.quote)||{},i=a.change,n=a.changePct,l=Ee(n??i),r=a.regularClose,c=`
    <section class="sx-hero" aria-label="${o(s("soxlHeroLabel"))}">
      <div class="sx-hero-main">
        <div class="sx-symbol-row">
          <span class="sx-symbol">SOXL</span>
          <span class="sx-badge">3×</span>
          <span class="sx-fund">${o((e==null?void 0:e.fundName)||s("soxlFundFallback"))}</span>
        </div>
        <div class="sx-price-row ${l}" data-lq="soxl" data-lq-sym="SOXL">
          <span class="sx-price" data-lq-field="price">$${o(fe(a.price,2)||"—")}</span>
          <span class="sx-chg">${o(ia(i,2)||"—")}</span>
          <span class="sx-chgp" data-lq-field="dayPct">${o(ct(n,2)||"—")}</span>
        </div>
        <p class="sx-session">${o(a.session||"")} · ${o(s("dataAsOf"))} ${o(li(e==null?void 0:e.asOf))}</p>
        ${(r==null?void 0:r.price)!=null?`<p class="sx-regular">${o(s("soxlRegularClose"))}: $${o(fe(r.price,2))}
                <span class="${Ee(r.changePct)}">${o(ia(r.change,2)||"")} (${o(ct(r.changePct,2)||"")})</span>
                ${r.session?` · ${o(r.session)}`:""}</p>`:""}
      </div>
      <div class="sx-hero-side">
        <p class="sx-lev">${o(s("soxlLeverageNote"))}</p>
        <p class="sx-hold-date"><strong>${o(s("soxlHoldingsAsOf"))}</strong> ${o((e==null?void 0:e.holdingsAsOf)||"—")}
          <span class="sx-muted">（${o(s("soxlHoldingsNotSameDay"))}）</span></p>
      </div>
    </section>`,p=Array.isArray(e==null?void 0:e.events)?e.events:[],d=p.length?`<section class="sx-events" aria-label="${o(s("soxlEventsTitle"))}">
        <h3 class="sx-h3">${o(s("soxlEventsTitle"))}</h3>
        <ul class="sx-event-list">
          ${p.map($=>`<li class="sx-event sx-sev-${o($.severity||"info")}">
              <div class="sx-event-title">${o($.title||"")}</div>
              <p class="sx-event-detail">${o($.detail||"")}</p>
            </li>`).join("")}
        </ul>
      </section>`:"",u=Array.isArray(e==null?void 0:e.news)?e.news:[],g=`
    <section class="sx-news" aria-label="${o(s("soxlNewsTitle"))}">
      <h3 class="sx-h3">${o(s("soxlNewsTitle"))}</h3>
      <div class="sx-news-list">
        ${u.length?u.map($=>`<a class="sx-news-card" href="${o($.url||"#")}" target="_blank" rel="noopener noreferrer">
              <div class="sx-news-title">${o($.title||"")}</div>
              ${$.published?`<div class="sx-news-meta">${o($.published)}</div>`:""}
              ${$.summary?`<p class="sx-news-sum">${o($.summary)}</p>`:""}
            </a>`).join(""):`<p class="sx-empty">${o(s("soxlNewsEmpty"))}</p>`}
      </div>
    </section>`,k=(Array.isArray(e==null?void 0:e.holdings)?e.holdings:[]).map($=>{const w=$.ticker||$.instrumentType||"—",y=Ee($.changePct),v=Ee($.contributionPct),b=Array.isArray($.reasons)?$.reasons:[],E=Array.isArray($.sources)?$.sources:[];return`<tr>
        <td>
          <div class="sx-tk">${o(String(w))}</div>
          <div class="sx-name">${o($.name||"")}</div>
          ${$.instrumentType?`<span class="sx-itype">${o($.instrumentType)}</span>`:""}
        </td>
        <td class="sx-num">${$.weightPct!=null?o(fe($.weightPct,2))+"%":"—"}</td>
        <td class="sx-num ${y}">${$.changePct!=null?o(ct($.changePct,2)):"—"}</td>
        <td class="sx-num ${v}" title="${o($.contributionNote||s("soxlContributionHint"))}">
          ${$.contributionPct!=null?o(fe($.contributionPct,3))+" pp*":"—"}
        </td>
        <td class="sx-reasons">
          <ul>${b.map(N=>`<li>${o(N)}</li>`).join("")}</ul>
          ${E.length?`<div class="sx-srcs">${E.slice(0,3).map((N,F)=>`<a href="${o(N)}" target="_blank" rel="noopener noreferrer">${o(s("soxlSourceN",{n:String(F+1)}))}</a>`).join(" · ")}</div>`:""}
        </td>
      </tr>`}).join(""),S=`
    <section class="sx-holdings" aria-label="${o(s("soxlHoldingsTitle"))}">
      <h3 class="sx-h3">${o(s("soxlHoldingsTitle"))}</h3>
      <p class="sx-panel-lead">${o((e==null?void 0:e.holdingsFreshnessNote)||s("soxlHoldingsLead"))}</p>
      <p class="sx-panel-lead sx-muted">${o((e==null?void 0:e.leverageNote)||s("soxlContributionHint"))}</p>
      <div class="sx-table-wrap">
        <table class="sx-table">
          <thead>
            <tr>
              <th>${o(s("soxlColName"))}</th>
              <th>${o(s("soxlColWeight"))}</th>
              <th>${o(s("soxlColReturn"))}</th>
              <th>${o(s("soxlColContrib"))}</th>
              <th>${o(s("soxlColReasons"))}</th>
            </tr>
          </thead>
          <tbody>${k||`<tr><td colspan="5">${o(s("soxlHoldingsEmpty"))}</td></tr>`}</tbody>
        </table>
      </div>
      <p class="sx-footnote">* ${o(s("soxlContributionHint"))}</p>
    </section>`,T=Array.isArray(e==null?void 0:e.overallUpReasons)?e.overallUpReasons:[],P=Array.isArray(e==null?void 0:e.overallDownReasons)?e.overallDownReasons:[],C=`
    <section class="sx-overall" aria-label="${o(s("soxlOverallTitle"))}">
      <h3 class="sx-h3">${o(s("soxlOverallTitle"))}</h3>
      <div class="sx-overall-grid">
        <article class="sx-card sx-card-up">
          <h4>${o(s("soxlWhyUp"))}</h4>
          <ul>${T.map($=>`<li>${o($)}</li>`).join("")||`<li>${o(s("earningsDataMissing"))}</li>`}</ul>
        </article>
        <article class="sx-card sx-card-down">
          <h4>${o(s("soxlWhyDown"))}</h4>
          <ul>${P.map($=>`<li>${o($)}</li>`).join("")||`<li>${o(s("earningsDataMissing"))}</li>`}</ul>
        </article>
      </div>
    </section>`,M=Array.isArray(e==null?void 0:e.disclaimers)?e.disclaimers:[],pe=M.length?`<ul class="sx-disc-list">${M.map($=>`<li>${o($)}</li>`).join("")}</ul>`:`<p>${o(s("soxlDisclaimer"))}</p>`;t.innerHTML=`
    ${c}
    ${d}
    ${g}
    ${S}
    ${C}
    <div class="sx-disclaimer" role="note">${pe}</div>
  `}function ci(){return`
    <section class="section soxl-section" aria-label="${o(s("soxlTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${o(s("soxlTitle"))}</h2>
        <p class="view-lead">${o(s("soxlLead"))}</p>
      </header>
      <p class="sx-disclaimer sx-disclaimer-top" role="note">${o(s("soxlDisclaimer"))}</p>
      <div id="sx-root" class="sx-root">
        <p class="sx-loading">${o(s("loading"))}</p>
      </div>
    </section>`}async function di(t="#sx-root"){const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};try{const a=await fetch(ni);if(!a.ok)throw new Error(`HTTP ${a.status}`);const i=await a.json();return ri(e,i),{ok:!0,data:i}}catch(a){return e.innerHTML=`
      <div class="sx-empty" role="status">
        <p>${o(s("soxlLoadError",{msg:a.message||String(a)}))}</p>
      </div>`,{ok:!1,error:a}}}const pi=["https://query2.finance.yahoo.com","https://query1.finance.yahoo.com"],ui="https://r.jina.ai/",gi="https://mis.twse.com.tw/stock/api/getStockInfo.jsp?json=1&delay=0&ex_ch=",hi={tw:"^TWII",spx:"^GSPC",nasdaq:"^IXIC",sox:"^SOX",usdTwd:"USDTWD=X"},mi={tw:"tse_t00.tw",otc:"otc_o00.tw"},fi=14,yi=45e3,Ha=10*6e4;let qe=null,na=!1,vt=new Map,ae=null,be=!1,st=!1,x=null;function la(t){if(!t)return null;const e=String(t).trim();if(e.startsWith("{")||e.startsWith("["))try{return JSON.parse(e)}catch{}const a=e.match(/Markdown Content:\s*(\{[\s\S]*|\[[\s\S]*)/i),i=a?a[1].trim():e,n=i.search(/[\{\[]/);if(n<0)return null;const l=i.slice(n);for(let r=l.length;r>2;r--){try{return JSON.parse(l.slice(0,r))}catch{}const c=Math.max(l.lastIndexOf("}",r-2),l.lastIndexOf("]",r-2));if(c<8)break;r=c+2}return null}async function ra(t,{timeoutMs:e=14e3}={}){const a=typeof AbortController<"u"?new AbortController:null,i=a?setTimeout(()=>a.abort(),e):null;try{const n=await fetch(t,{signal:a==null?void 0:a.signal,headers:{Accept:"application/json,text/plain,*/*"},cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);return await n.text()}finally{i&&clearTimeout(i)}}async function Ia(t){const e=[];try{const a=await ra(t,{timeoutMs:1e4}),i=la(a);if(i)return{ok:!0,data:i,via:"direct"};e.push("direct: non-json")}catch(a){e.push(`direct: ${a.message||a}`)}try{const a=await ra(`${ui}${t}`,{timeoutMs:2e4}),i=la(a);if(i)return{ok:!0,data:i,via:"jina"};e.push("jina: parse")}catch(a){e.push(`jina: ${a.message||a}`)}return{ok:!1,data:null,via:null,error:e.slice(0,3).join(" · ")}}function vi(t){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(t):String(t).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function ki(t,e){const a=[];for(let i=0;i<t.length;i+=e)a.push(t.slice(i,i+e));return a}function te(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function Q(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(z(),{minimumFractionDigits:e,maximumFractionDigits:e})}function se(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${Number(t).toFixed(e)}%`}function Ge(t,e){if(t==null||Number.isNaN(t))return"—";const a=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${Q(t,a)}`}function ve(t,e){return t==null||Number.isNaN(t)?"—":`${e==="USD"?"US$":e==="TWD"?"NT$":""}${Q(t,e==="TWD"?0:2)}`}function Si(t,e){if(t==null||Number.isNaN(t))return"—";const a=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"US$":e==="TWD"?"NT$":""}${Q(t,a)}`}function Fa(t=new Date){const e=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",weekday:"short",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(t),a=i=>{var n;return(n=e.find(l=>l.type===i))==null?void 0:n.value};return{ymd:`${a("year")}-${a("month")}-${a("day")}`,weekday:a("weekday"),hour:Number(a("hour")),minute:Number(a("minute"))}}function bi(t=Fa()){return!["Sat","Sun"].includes(t.weekday)}function $i(t=new Date){const e=Fa(t),a=e.hour*60+e.minute,i=bi(e),n=i&&a>=540&&a<=815,l=i&&(a>=1260||a<=315),r=e.weekday==="Sun"&&a>=1260;return{twOpen:n,usOpen:l||r,weekday:i,parts:e}}function Ti(){const{twOpen:t,usOpen:e}=$i();return t||e?yi:Ha}function Wa(t){try{return new Date(t).toLocaleString(z(),{timeZone:"Asia/Taipei",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+s("taipei")}catch{return"—"}}function Ua(t){const e=String(t||"").trim().toUpperCase();return e?/^\d{4}\.(TW|TWO)$/.test(e)?e:/^\d{4}$/.test(e)?`${e}.TW`:e.replace(/\./g,"-"):null}function wi(t){const e=String(t||"").toUpperCase(),a=e.match(/^(\d{4})\.(TW|TWO)$/)||e.match(/^(\d{4})$/);if(!a)return null;const i=a[1];return/\.TWO$/.test(e)?`otc_${i}.tw`:`tse_${i}.tw`}function Pi(t,e){!t||(e==null?void 0:e.price)==null||Number.isNaN(e.price)||vt.set(t,{...e,asOfMs:e.asOfMs||Date.now()})}function Ci(t){var i,n;const e=(i=t==null?void 0:t.spark)==null?void 0:i.result;if(!Array.isArray(e))return[];const a=[];for(const l of e){const r=l==null?void 0:l.symbol,c=((n=((l==null?void 0:l.response)||[{}])[0])==null?void 0:n.meta)||{},p=c.regularMarketPrice;if(p==null||Number.isNaN(Number(p)))continue;const d=c.chartPreviousClose??c.previousClose??null;let u=null,g=null;d!=null&&d!==0&&(g=Number(p)-Number(d),u=g/Number(d)*100);const m=typeof c.regularMarketTime=="number"?c.regularMarketTime*(c.regularMarketTime<1e12?1e3:1):Date.now();a.push({symbol:r,price:Number(p),prev:d!=null?Number(d):null,change:g,changePct:u,currency:c.currency||null,asOfMs:m,source:"yahoo-spark"})}return a}async function Ai(t){const e=[...new Set(t.filter(Boolean))];if(!e.length)return{ok:!0,quotes:[],via:null};const a=[];let i=null,n=!1,l=null;for(const r of ki(e,fi)){const c=`/v7/finance/spark?symbols=${encodeURIComponent(r.join(","))}&range=1d&interval=5m`;let p=null;for(const d of pi){const u=await Ia(`${d}${c}`);if(u.ok){p=u;break}l=u.error}p!=null&&p.ok&&(n=!0,i=p.via,a.push(...Ci(p.data)))}return{ok:n,quotes:a,via:i,error:n?null:l}}function ge(t){if(t==null||t===""||t==="-"||t==="—"||t==="null")return null;const e=Number(String(t).replace(/,/g,""));return Number.isFinite(e)?e:null}function Li(t){const e=t==null?void 0:t.msgArray;if(!Array.isArray(e))return[];const a=[];for(const i of e){const n=i==null?void 0:i.c;if(!n)continue;const l=ge(i.z)??ge(i.pz)??ge(i.o),r=ge(i.y);if(l==null)continue;let c=null,p=null;r!=null&&r!==0&&(p=l-r,c=p/r*100);const d=i.ex==="otc"?"otc":"tse";let u;n==="t00"?u="__MIS_TWII":n==="o00"?u="__MIS_OTC":u=`${n}.${d==="otc"?"TWO":"TW"}`;const g=ge(i.tlong);a.push({symbol:u,price:l,prev:r,change:p,changePct:c,currency:"TWD",asOfMs:g||Date.now(),source:"twse-mis",misCode:n,misEx:d})}return a}async function Ei(t){const e=[...new Set(t.filter(Boolean))];if(!e.length)return{ok:!0,quotes:[],via:null};const a=`${gi}${e.join("|")}`,i=await Ia(a);return i.ok?{ok:!0,quotes:Li(i.data),via:i.via}:{ok:!1,quotes:[],via:null,error:i.error}}function xi(t){const e=new Set(Object.values(hi));e.add("SOXL");const a=new Set(Object.values(mi));return t.querySelectorAll("[data-lq-sym]").forEach(i=>{const n=i.getAttribute("data-lq-sym"),l=Ua(n);l&&e.add(l);const r=wi(n);r&&a.add(r)}),{yahoo:[...e],mis:[...a]}}function Ye(t,e){if(!t)return;t.classList.remove("up","down","flat","lk-up","lk-down","lk-flat","sx-up","sx-down","sx-flat");const a=te(e);t.classList.add(a)}function L(t,e){t&&t.textContent!==e&&(t.textContent=e)}function re(t,e,a,i){const n=t.querySelectorAll(`[data-lq-key="${e}"]`);if(!n.length||!a||a.price==null)return;const l=e==="usdTwd"?3:2;n.forEach(r=>{r.classList.remove("incomplete");const c=r.querySelector("[data-lq-field='value'], .value");L(c,Q(a.price,l));let p=r.querySelector("[data-lq-field='dayPct'], .pct");if(e==="usdTwd"){if(p&&i){const d=i.taipeiClose!=null?Q(i.taipeiClose,3):"—";p.className="pct flat",p.style.fontSize="0.7rem",p.textContent=`${s("taipeiClose")} ${d} · Yahoo ${Q(a.price,3)}`}}else a.changePct!=null&&(p||(p=document.createElement("div"),p.className="pct",p.setAttribute("data-lq-field","dayPct"),r.appendChild(p)),p.className=`pct ${te(a.changePct)}`,p.setAttribute("data-lq-field","dayPct"),L(p,se(a.changePct)))})}function Mi(t,e,a){if(!a||a.price==null)return;const i=a.currency||(/\.(TW|TWO)$/i.test(e)?"TWD":"USD");t.querySelectorAll(`[data-lq-sym="${vi(e)}"]`).forEach(l=>{const r=l.getAttribute("data-lq");if(r==="soxl")return;if(r==="pos"){Ri(l,a,i);return}const c=l.querySelectorAll("[data-lq-field='price']"),p=l.querySelectorAll("[data-lq-field='dayPct']");if(c.length||p.length){c.forEach(g=>L(g,Ge(a.price,i))),p.forEach(g=>{Ye(g,a.changePct),L(g,se(a.changePct))});return}const d=l.querySelector(".price"),u=l.querySelector(".day-pct");d&&L(d,Ge(a.price,i)),u&&(Ye(u,a.changePct),L(u,se(a.changePct)))})}function Ri(t,e,a){const i=Number(t.getAttribute("data-lq-qty")),n=Number(t.getAttribute("data-lq-avg")),l=t.getAttribute("data-lq-ccy")||a,r=e.price,c=e.changePct,p=t.querySelectorAll("td");if(!(p.length<10)){if(L(p[2],Si(r,l)),Number.isFinite(i)){const d=r*i;L(p[3],ve(d,l));const u=c!=null&&Number.isFinite(c)?r*i*c/100:null;if(p[4].className=`num ${te(u)}`,L(p[4],u==null?"—":ve(u,l)),Number.isFinite(n)){const g=(r-n)*i,m=n?(r-n)/n*100:0;p[6].className=`num ${te(g)}`,L(p[6],ve(g,l)),p[7].className=`num ${te(m)}`,L(p[7],se(m))}}p[5].className=`num ${te(c)}`,L(p[5],se(c)),t.setAttribute("data-lq-mark",String(r)),c!=null&&t.setAttribute("data-lq-daypct",String(c))}}function zi(t){t.querySelectorAll("[data-lq-book]").forEach(e=>{const a=e.getAttribute("data-lq-book"),i=Number(e.getAttribute("data-lq-cash")),n=Number(e.getAttribute("data-lq-start")),l=e.getAttribute("data-lq-ccy")||(a==="TW"?"TWD":"USD");if(!Number.isFinite(i))return;let r=0;e.querySelectorAll(".pos-row[data-lq-sym]").forEach(S=>{const T=Number(S.getAttribute("data-lq-qty")),P=Number(S.getAttribute("data-lq-mark"));Number.isFinite(T)&&Number.isFinite(P)&&(r+=T*P)});const c=r;e.querySelectorAll(".pos-row[data-lq-sym]").forEach(S=>{const T=Number(S.getAttribute("data-lq-qty")),P=Number(S.getAttribute("data-lq-mark")),C=S.querySelectorAll("td");if(C.length>=11&&Number.isFinite(T)&&Number.isFinite(P)&&c>0){const M=P*T/c*100;L(C[10],`${M.toFixed(2)}%`)}});const p=i+r,d=Number.isFinite(n)?p-n:null,u=Number.isFinite(n)&&n!==0?(p-n)/n*100:null,g=e.querySelector("[data-lq-kpi='equity']"),m=e.querySelector("[data-lq-kpi='pnl']"),k=e.querySelector("[data-lq-kpi='pnlPct']");g&&L(g,ve(p,l)),m&&d!=null&&(Ye(m,d),L(m,ve(d,l))),k&&u!=null&&(Ye(k,u),L(k,se(u)))})}function Ni(t,e){if(!e||e.price==null)return;const a=t.querySelector("#sx-root .sx-price"),i=t.querySelector("#sx-root .sx-chg"),n=t.querySelector("#sx-root .sx-chgp"),l=t.querySelector("#sx-root .sx-price-row"),r=t.querySelector("#sx-root .sx-session");if(a&&L(a,`$${Q(e.price,2)}`),i)if(e.change==null||Number.isNaN(e.change))L(i,"—");else{const c=e.change>0?"+":"";L(i,`${c}${Q(e.change,2)}`)}if(n&&L(n,se(e.changePct)),l){l.classList.remove("sx-up","sx-down","sx-flat");const c=te(e.changePct??e.change);l.classList.add(c==="up"?"sx-up":c==="down"?"sx-down":"sx-flat")}if(r){const c=Wa(e.asOfMs||Date.now());L(r,`live · ${s("dataAsOf")} ${c}`)}}function Di(t,e){const a=e.get("TSM"),i=e.get("2330.TW")||e.get("__MIS_2330");e.get("USDTWD=X");const n=t.querySelector("[data-lq-parity='TSM']"),l=t.querySelector("[data-lq-parity='2330.TW']");(a==null?void 0:a.price)!=null&&n&&L(n,Ge(a.price,"USD")),(i==null?void 0:i.price)!=null&&l&&L(l,Ge(i.price,"TWD"))}function Bi(t,e){const a=Ua(e);if(a&&t.has(a))return t.get(a);if(a&&a.endsWith(".TW")){const i=a.replace(/\.TW$/,".TWO");if(t.has(i))return t.get(i)}if(a&&a.endsWith(".TWO")){const i=a.replace(/\.TWO$/,".TW");if(t.has(i))return t.get(i)}return null}function Ke(t,{ok:e,stale:a}){const i=t.querySelector("#lq-status");if(!i)return;const n=ae?Wa(ae):"—";e&&!a?(i.hidden=!1,i.dataset.state="live",i.innerHTML=`<span class="lq-dot" aria-hidden="true"></span>${o(s("liveQuotesLive"))} · ${o(n)}`):ae?(i.hidden=!1,i.dataset.state="stale",i.innerHTML=`<span class="lq-dot" aria-hidden="true"></span>${o(s("liveQuotesStale"))} · ${o(n)}`):(i.hidden=!1,i.dataset.state="pending",i.textContent=s("liveQuotesPending"))}function ji(...t){const e=new Map(vt);for(const a of t)for(const i of a)!(i!=null&&i.symbol)||i.price==null||(Pi(i.symbol,i),e.set(i.symbol,vt.get(i.symbol)));if(e.has("__MIS_TWII")){const a=e.get("__MIS_TWII");e.set("^TWII",a)}return e}async function xt(){if(!x||document.visibilityState==="hidden")return;const{yahoo:t,mis:e}=xi(x),[a,i]=await Promise.all([Ai(t),Ei(e)]),n=ji(a.quotes||[],i.quotes||[]),l=a.ok||i.ok;l?(ae=Date.now(),be=!0):be=!1;const r=n.get("__MIS_TWII")||n.get("^TWII"),c=n.get("__MIS_OTC");re(x,"tw",r),re(x,"otc",c),re(x,"spx",n.get("^GSPC")),re(x,"nasdaq",n.get("^IXIC")),re(x,"sox",n.get("^SOX"));const p=n.get("USDTWD=X"),d=x.querySelector("[data-lq-key='usdTwd']"),u=d==null?void 0:d.getAttribute("data-lq-taipei-close"),g=u!=null&&u!==""?Number(u):null;re(x,"usdTwd",p,{taipeiClose:Number.isFinite(g)?g:null});const m=new Set;x.querySelectorAll("[data-lq-sym]").forEach(S=>{const T=S.getAttribute("data-lq-sym");if(!T||m.has(T))return;m.add(T);const P=Bi(n,T);P&&Mi(x,T,P)}),Ni(x,n.get("SOXL")),Di(x,n),zi(x);const k=ae?Date.now()-ae:1/0;Ke(x,{ok:l,stale:!l||k>Ha})}function Mt(){qe&&(clearTimeout(qe),qe=null)}function Rt(){if(Mt(),!st)return;const t=Ti();qe=window.setTimeout(async()=>{try{await xt()}catch{be=!1,x&&Ke(x,{ok:!1,stale:!0})}Rt()},t)}function qi(){if(st){if(document.visibilityState==="hidden"){Mt();return}xt().finally(()=>Rt())}}async function Oi(t){if(_a(),x=t,!x)return{ok:!1};st=!0,na||(document.addEventListener("visibilitychange",qi),na=!0),Ke(x,{ok:!1,stale:!1});try{await xt()}catch{be=!1,Ke(x,{ok:!1,stale:!0})}return Rt(),{ok:be,lastSuccessAt:ae}}function _a(){st=!1,Mt(),x=null}const ca="./data/us-macro-calendar.json",Hi=900*1e3,Ii=2160*60*1e3;let xe=null;function Fi(t){const e=t!=null&&t.eventKey?`macroEvent_${t.eventKey}`:null;if(e){const a=s(e,"");if(a&&a!==e)return a}return(t==null?void 0:t.shortName)||(t==null?void 0:t.eventName)||"—"}function Wi(t,e){const a=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(t),i=n=>{var l;return(l=a.find(r=>r.type===n))==null?void 0:l.value};return`${i("year")}-${i("month")}-${i("day")}`}function Ui(t,e){try{const a=new Date(t),i=a.toLocaleDateString(z(),{timeZone:e,month:"numeric",day:"numeric",weekday:"short"}),n=a.toLocaleTimeString(z(),{timeZone:e,hour:"2-digit",minute:"2-digit",hour12:!1});return{datePart:i,timePart:n}}catch{return{datePart:"—",timePart:""}}}function _i(t){try{return new Date(t).toLocaleString(z(),{timeZone:"Asia/Taipei",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return t||"—"}}function Vi(t,e){let a=null;for(const i of t)if(i.dayEt>=e){a=i.id;break}return a}function Gi(t,{todayEt:e,nextId:a,timeZone:i}){const n=o(Fi(t)),{datePart:l,timePart:r}=Ui(t.scheduledAt,i),c=t.dayEt===e,p=t.id===a,d=t.dayEt<e,u=["macro-chip",t.highImpact||t.importance==="high"?"macro-chip--high":"",c?"macro-chip--today":"",p&&!c?"macro-chip--next":"",d?"macro-chip--past":""].filter(Boolean).join(" "),g=[];c?g.push(`<span class="macro-chip-tag">${o(s("macroToday"))}</span>`):p&&g.push(`<span class="macro-chip-tag macro-chip-tag--next">${o(s("macroNext"))}</span>`),(t.highImpact||t.importance==="high")&&g.push(`<span class="macro-chip-tag macro-chip-tag--high">${o(s("macroHighImpact"))}</span>`);const m=[t.eventName,t.periodLabel,`${t.dayEt} ${r} ET`,t.officialUrl?"↗ official":null].filter(Boolean).join(" · "),S=`
      <span class="macro-chip-when">${r?`${o(l)} ${o(r)}`:o(l)}</span>
      <span class="macro-chip-name">${n}</span>
      ${g.length?`<span class="macro-chip-tags">${g.join("")}</span>`:""}`,T=typeof t.officialUrl=="string"&&/^https?:\/\//i.test(t.officialUrl)?t.officialUrl:null;return T?`
    <a class="${u}" href="${o(T)}" target="_blank" rel="noopener noreferrer"
       title="${o(m)}" data-event-id="${o(t.id)}">${S}
    </a>`:`
    <span class="${u}" title="${o(m)}" data-event-id="${o(t.id)}">${S}
    </span>`}function Yi(t){const e=t.querySelector(".index-marquee");if(!e||e.dataset.marqueeBound==="1")return;e.dataset.marqueeBound="1";const a=()=>e.classList.add("is-paused"),i=()=>e.classList.remove("is-paused");e.addEventListener("pointerdown",a),e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("pointerleave",i),e.addEventListener("touchstart",a,{passive:!0}),e.addEventListener("touchend",i,{passive:!0}),e.addEventListener("touchcancel",i,{passive:!0})}function Ki(t,e){if(!t)return;const a=(e==null?void 0:e.timezone)||"America/New_York",i=Wi(new Date,a),n=Array.isArray(e==null?void 0:e.events)?e.events:[],l=Vi(n,i),r=(e==null?void 0:e.asOf)||null,c=r?Date.now()-Date.parse(r):NaN,p=!!(e!=null&&e.stale)||!Number.isNaN(c)&&c>Ii;let d=`${o(s("macroTzEt"))}`;if(r&&(d+=` · ${o(s("macroAsOf"))} ${o(_i(r))}`),p&&(d+=` · ${o(s("macroStale"))}`),!n.length){t.innerHTML=`
      <div class="macro-strip" role="region" aria-label="${o(s("macroTitle"))}">
        <div class="macro-strip-side">
          <span class="macro-strip-label">${o(s("macroTitle"))}</span>
          <span class="macro-strip-meta">${d}</span>
        </div>
        <p class="macro-strip-empty">${o(s("macroEmpty"))}</p>
      </div>`;return}const u=n.map(k=>Gi(k,{todayEt:i,nextId:l,timeZone:a})),g=`<div class="index-marquee-group">${u.join("")}</div>`,m=`<div class="index-marquee-group index-marquee-group--clone" aria-hidden="true">${u.join("")}</div>`;t.innerHTML=`
    <div class="macro-strip" role="region" aria-label="${o(s("macroTitle"))}">
      <div class="macro-strip-side">
        <span class="macro-strip-label">${o(s("macroTitle"))}</span>
        <span class="macro-strip-meta" title="${d}">${d}</span>
      </div>
      <div class="index-strip index-strip--marquee macro-strip-marquee">
        <div class="index-marquee" tabindex="0">
          <div class="index-marquee-track">
            ${g}
            ${m}
          </div>
        </div>
      </div>
    </div>`,Yi(t)}function Qi(){return'<div id="us-macro-strip" class="us-macro-strip-host" aria-live="polite"></div>'}async function Xi(t=!1){const e=t?`${ca}?t=${Date.now()}`:ca,a=await fetch(e,{cache:t?"no-store":"default"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return a.json()}async function Zi(t="#us-macro-strip"){const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};const a=async n=>{try{const l=await Xi(n);return Ki(e,l),{ok:!0,data:l}}catch(l){return e.innerHTML=`
        <div class="macro-strip macro-strip--error" role="status">
          <div class="macro-strip-side">
            <span class="macro-strip-label">${o(s("macroTitle"))}</span>
          </div>
          <p class="macro-strip-empty">${o(s("macroLoadError",{msg:l.message||String(l)}))}</p>
        </div>`,{ok:!1,error:l}}},i=await a(!1);return xe&&(window.clearInterval(xe),xe=null),xe=window.setInterval(()=>{a(!0)},Hi),i}const Ji="https://www.youtube.com/watch?v=7n-e5pe6z4U",en=[1,2,3,4,5,6,7,8,9,10],tn=[1,2,3,4,5,6],an=[1,2,3,4],sn=[1,2,3];function on(){return`
    <div class="gz-badges" role="list">
      <span class="gz-badge gz-badge-candidate" role="listitem">${o(s("godzillaBadgeCandidate"))}</span>
      <span class="gz-badge gz-badge-watch" role="listitem">${o(s("godzillaBadgeWatch"))}</span>
      <span class="gz-badge gz-badge-us" role="listitem">${o(s("godzillaUsFocus"))}</span>
      <span class="gz-badge gz-badge-self" role="listitem">${o(s("godzillaSelfReport"))}</span>
      <span class="gz-badge gz-badge-listened" role="listitem">${o(s("godzillaListenedBadge"))}</span>
    </div>`}function nn(){return en.map(t=>{const e=s(`godzillaThesis${t}Title`),a=s(`godzillaThesis${t}Body`);return`
      <article class="gz-card" data-thesis="${t}">
        <div class="gz-card-num" aria-hidden="true">${t}</div>
        <div class="gz-card-body">
          <h3 class="gz-card-title">${o(e)}</h3>
          <p class="gz-card-text">${o(a)}</p>
        </div>
      </article>`}).join("")}function ln(){return`
    <ul class="gz-check-list">
      ${tn.map(t=>`<li class="gz-check-item">
          <span class="gz-check-mark" aria-hidden="true">✓</span>
          <span>${o(s(`godzillaCheck${t}`))}</span>
        </li>`).join("")}
    </ul>`}function rn(){return`
    <ul class="gz-bullet-list">
      ${an.map(t=>`<li>${o(s(`godzillaOpt${t}`))}</li>`).join("")}
    </ul>`}function cn(){return`
    <ul class="gz-bullet-list">
      ${sn.map(t=>`<li>${o(s(`godzillaRsu${t}`))}</li>`).join("")}
    </ul>`}function dn(t){t.innerHTML=`
    <section class="gz-hero" aria-label="${o(s("godzillaHeroLabel"))}">
      <div class="gz-hero-main">
        <h3 class="gz-hero-kicker">${o(s("godzillaKicker"))}</h3>
        <p class="gz-hero-tagline">${o(s("godzillaTagline"))}</p>
        ${on()}
        <p class="gz-source">
          <span class="gz-source-label">${o(s("godzillaSourceLabel"))}</span>
          <a class="gz-yt" href="${Ji}" target="_blank" rel="noopener noreferrer">${o(s("godzillaYoutube"))}</a>
          <span class="gz-source-cite">· ${o(s("godzillaSourceCite"))}</span>
        </p>
      </div>
    </section>


    <section class="gz-panel gz-listened" aria-label="${o(s("godzillaStockTitle"))}">
      <h3 class="gz-h3">${o(s("godzillaStockTitle"))}</h3>
      <p class="gz-panel-lead">${o(s("godzillaStockLead"))}</p>
      <ul class="gz-bullet-list gz-stock-list">
        ${[1,2,3,4,5,6].map(e=>`<li>${o(s(`godzillaStock${e}`))}</li>`).join("")}
      </ul>
      <p class="gz-source-note">${o(s("godzillaStockNote"))}</p>
    </section>

    <section class="gz-panel" aria-label="${o(s("godzillaThesesTitle"))}">
      <h3 class="gz-h3">${o(s("godzillaThesesTitle"))}</h3>
      <p class="gz-panel-lead">${o(s("godzillaThesesLead"))}</p>
      <div class="gz-thesis-grid">
        ${nn()}
      </div>
    </section>

    <section class="gz-panel" aria-label="${o(s("godzillaChecklistTitle"))}">
      <h3 class="gz-h3">${o(s("godzillaChecklistTitle"))}</h3>
      <p class="gz-panel-lead">${o(s("godzillaChecklistLead"))}</p>
      ${ln()}
    </section>

    <div class="gz-two-col">
      <section class="gz-panel" aria-label="${o(s("godzillaOptionsTitle"))}">
        <h3 class="gz-h3">${o(s("godzillaOptionsTitle"))}</h3>
        <p class="gz-panel-lead">${o(s("godzillaOptionsLead"))}</p>
        ${rn()}
      </section>
      <section class="gz-panel" aria-label="${o(s("godzillaRsuTitle"))}">
        <h3 class="gz-h3">${o(s("godzillaRsuTitle"))}</h3>
        <p class="gz-panel-lead">${o(s("godzillaRsuLead"))}</p>
        ${cn()}
      </section>
    </div>

    <section class="gz-panel gz-tw" aria-label="${o(s("godzillaTwTitle"))}">
      <h3 class="gz-h3">${o(s("godzillaTwTitle"))}</h3>
      <p class="gz-panel-lead">${o(s("godzillaTwLead"))}</p>
      <p class="gz-tw-body">${o(s("godzillaTwBody"))}</p>
    </section>

    <aside class="gz-gate" role="note">
      <strong class="gz-gate-title">${o(s("godzillaGateNote"))}</strong>
      <p class="gz-gate-detail">${o(s("godzillaGateDetail"))}</p>
    </aside>
  `}function pn(t="#gz-root"){const e=typeof t=="string"?document.querySelector(t):t;return e?(dn(e),{ok:!0}):{ok:!1}}const ye={id:"Xn1EsFe7snQ",watchUrl:"https://www.youtube.com/watch?v=Xn1EsFe7snQ",thumbUrl:"https://i.ytimg.com/vi/Xn1EsFe7snQ/hqdefault.jpg"},un="https://ecorner.stanford.edu",gn=[1,2,3,4,5];function hn(){return`
    <div class="jh-badges" role="list">
      <span class="jh-badge jh-badge-candidate" role="listitem">${o(s("godzillaBadgeCandidate"))}</span>
      <span class="jh-badge jh-badge-watch" role="listitem">${o(s("godzillaBadgeWatch"))}</span>
      <span class="jh-badge jh-badge-us" role="listitem">${o(s("jensenUsFocus"))}</span>
      <span class="jh-badge jh-badge-talk" role="listitem">${o(s("jensenTalkBadge"))}</span>
      <span class="jh-badge jh-badge-listened" role="listitem">${o(s("jensenListenedBadge"))}</span>
    </div>`}function mn(){return gn.map(t=>{const e=s(`jensenH${t}Title`),a=s(`jensenH${t}Body`);return`
      <article class="jh-card" data-highlight="${t}">
        <div class="jh-card-num" aria-hidden="true">${t}</div>
        <div class="jh-card-body">
          <h4 class="jh-card-title">${o(e)}</h4>
          <p class="jh-card-text">${o(a)}</p>
        </div>
      </article>`}).join("")}function fn(){const t=s("jensenEmbedTitle");return`
    <div class="jh-yt-card" data-yt-id="${o(ye.id)}" data-embed-allowed="false">
      <a class="jh-yt-card-media" href="${ye.watchUrl}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">
        <img
          class="jh-yt-card-thumb"
          src="${ye.thumbUrl}"
          alt=""
          width="480"
          height="360"
          loading="lazy"
          decoding="async"
        />
        <span class="jh-yt-card-play" aria-hidden="true"></span>
      </a>
      <div class="jh-yt-card-body">
        <p class="jh-yt-card-kicker">${o(s("jensenYoutube"))}</p>
        <h4 class="jh-yt-card-title">${o(t)}</h4>
        <p class="jh-yt-card-note">${o(s("jensenEmbedBlockedNote"))}</p>
        <a
          class="jh-yt-card-cta"
          href="${ye.watchUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >${o(s("jensenWatchCta"))}</a>
      </div>
    </div>`}function yn(){return fn()}function vn(t){t.innerHTML=`
    <section class="jh-hero" aria-label="${o(s("jensenHeroLabel"))}">
      <div class="jh-hero-main">
        <h3 class="jh-hero-kicker">${o(s("jensenKicker"))}</h3>
        <p class="jh-hero-tagline">${o(s("jensenTagline"))}</p>
        ${hn()}
        <p class="jh-meta">${o(s("jensenMeta"))}</p>
        <p class="jh-source">
          <span class="jh-source-label">${o(s("godzillaSourceLabel"))}</span>
          <a class="jh-yt" href="${ye.watchUrl}" target="_blank" rel="noopener noreferrer">${o(s("jensenYoutube"))}</a>
          <span class="jh-source-cite">· ${o(s("jensenSourceCite"))}</span>
        </p>
        <p class="jh-source jh-source-alt">
          <a class="jh-yt" href="${un}" target="_blank" rel="noopener noreferrer">${o(s("jensenEcorner"))}</a>
        </p>
      </div>
    </section>

    ${yn()}


    <section class="jh-panel jh-listened" aria-label="${o(s("jensenStockTitle"))}">
      <h3 class="jh-h3">${o(s("jensenStockTitle"))}</h3>
      <p class="jh-panel-lead">${o(s("jensenStockLead"))}</p>
      <ul class="jh-bullet-list jh-stock-list">
        ${[1,2,3,4,5,6].map(e=>`<li>${o(s(`jensenStock${e}`))}</li>`).join("")}
      </ul>
      <p class="jh-source-note">${o(s("jensenStockNote"))}</p>
    </section>

    <section class="jh-panel" aria-label="${o(s("jensenHighlightsTitle"))}">
      <h3 class="jh-h3">${o(s("jensenHighlightsTitle"))}</h3>
      <p class="jh-panel-lead">${o(s("jensenHighlightsLead"))}</p>
      <div class="jh-highlight-grid">
        ${mn()}
      </div>
    </section>

    <section class="jh-panel jh-tw" aria-label="${o(s("jensenTwTitle"))}">
      <h3 class="jh-h3">${o(s("jensenTwTitle"))}</h3>
      <p class="jh-panel-lead">${o(s("jensenTwLead"))}</p>
      <p class="jh-tw-body">${o(s("jensenTwBody"))}</p>
    </section>

    <aside class="jh-gate" role="note">
      <strong class="jh-gate-title">${o(s("jensenGateNote"))}</strong>
      <p class="jh-gate-detail">${o(s("jensenGateDetail"))}</p>
    </aside>
  `}function kn(t="#jh-root"){const e=typeof t=="string"?document.querySelector(t):t;return e?(vn(e),{ok:!0}):{ok:!1}}const Sn="./data/gooaye-episodes.json",ke=25,bn="#research/podcast",da="https://podcasts.apple.com/tw/podcast/gooaye-%E8%82%A1%E7%99%8C/id1500839292";let Me=null,he=null,Oe=ke,Qe="";async function $n(){return Me||he||(he=(async()=>{const t=await fetch(Sn,{cache:"no-cache"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return Me=await t.json(),Me})().catch(t=>{throw he=null,t}),he)}function Tn(t){if(!t)return"";try{const e=new Date(t);return Number.isNaN(e.getTime())?t:new Intl.DateTimeFormat(void 0,{timeZone:"Asia/Taipei",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(e)}catch{return t}}function wn(t){return(t==null?void 0:t.notesQuality)==="listened"&&Array.isArray(t.stockAnalysis)&&t.stockAnalysis.length>0}function Pn(t){const e=(t==null?void 0:t.episodes)||[],a=Qe.trim().toLowerCase();return a?e.filter(i=>[i.title,i.subtitle,i.ep!=null?`ep${i.ep}`:"",i.ep!=null?String(i.ep):"",...i.stockAnalysis||[],...i.keyPoints||[],...i.rssTeaser||[]].filter(Boolean).join(`
`).toLowerCase().includes(a)):e}function Cn(t){const e=wn(t),a=t.ep!=null?`<span class="gy-ep-num">EP${o(String(t.ep))}</span>`:"",i=t.pubDateTw?`<time class="gy-ep-date" datetime="${o(t.pubDateIso||t.pubDateTw)}">${o(t.pubDateTw)}</time>`:"",n=e?`<span class="gy-ep-badge gy-ep-badge-listened">${o(s("gooayeBadgeListened"))}</span>`:`<span class="gy-ep-badge gy-ep-badge-rss">${o(s("gooayeBadgeRssOnly"))}</span>`,l=t.title||(t.ep!=null?`EP${t.ep}`:s("gooayeUntitled"));let r="";if(e){const p=(t.stockAnalysis||[]).filter(Boolean);r+=`<p class="gy-ep-kicker gy-ep-kicker-stock">${o(s("gooayeStockAnalysis"))}</p>`,r+=`<ul class="gy-ep-points gy-ep-stock">${p.map(u=>`<li>${o(u)}</li>`).join("")}</ul>`;const d=(t.rssTeaser||t.keyPoints||[]).filter(Boolean);if(d.length&&(r+=`<details class="gy-ep-rss-details"><summary>${o(s("gooayeRssTeaserToggle"))}</summary>`,r+=`<ul class="gy-ep-points gy-ep-rss">${d.map(u=>`<li>${o(u)}</li>`).join("")}</ul></details>`),t.listenedAt||t.transcriptSource){const u=[];t.listenedAt&&u.push(s("gooayeListenedAt",{date:String(t.listenedAt).slice(0,16).replace("T"," ")})),t.transcriptSource&&u.push(String(t.transcriptSource)),r+=`<p class="gy-ep-source-note">${o(u.join(" · "))}</p>`}}else{const p=(t.keyPoints||[]).filter(Boolean);r+=`<p class="gy-ep-kicker">${o(s("gooayeKeyPoints"))}</p>`,p.length?r+=`<ul class="gy-ep-points">${p.map(u=>`<li>${o(u)}</li>`).join("")}</ul>`:r+=`<p class="gy-ep-empty">${o(s("gooayeNotesThin"))}</p>`;const d=t.notesQuality==="teaser"||t.notesQuality==="title-only"||!p.length?`<p class="gy-ep-source-note">${o(s("gooayeTeaserNote"))}</p>`:`<p class="gy-ep-source-note">${o(s("gooayeRssOnlyNote"))}</p>`;r+=d}const c=t.link?`<a class="gy-ep-link" href="${o(t.link)}" target="_blank" rel="noopener noreferrer">${o(s("gooayeListen"))}</a>`:"";return`
    <article class="gy-ep${e?" gy-ep-listened":" gy-ep-rss-only"}" data-ep="${o(String(t.ep??""))}" data-quality="${o(e?"listened":"rss-only")}">
      <header class="gy-ep-head">
        <div class="gy-ep-meta">${a}${n}${i}</div>
        <h4 class="gy-ep-title">${o(l)}</h4>
      </header>
      <div class="gy-ep-body">
        ${r}
        <div class="gy-ep-actions">${c}</div>
      </div>
    </article>`}function Xe(t,e,{error:a}={}){var g;if(a){t.innerHTML=`
      <div class="gy-error" role="alert">
        <p>${o(s("gooayeLoadError",{msg:String(a.message||a)}))}</p>
        <a class="pc-link pc-link-ext" href="${da}" target="_blank" rel="noopener noreferrer">${o(s("podcastsGooayeApple"))}</a>
      </div>`;return}const i=Pn(e),n=(e.episodes||[]).length,l=i.slice(0,Oe),r=Math.max(0,i.length-l.length),c=Tn(e.asOf),p=e.counts||{};t.innerHTML=`
    <div class="gy-toolbar">
      <div class="gy-toolbar-stats" aria-live="polite">
        <span class="gy-stat">${o(s("gooayeEpisodeCount",{n:String(n)}))}</span>
        ${p.listened?`<span class="gy-stat gy-stat-listened">${o(s("gooayeListenedCount",{n:String(p.listened)}))}</span>`:""}
        ${c?`<span class="gy-asof">${o(s("gooayeAsOf",{date:c}))}</span>`:""}
        ${p.notesEmpty?`<span class="gy-stat-muted">${o(s("gooayeEmptyCount",{n:String(p.notesEmpty)}))}</span>`:""}
      </div>
      <label class="gy-search">
        <span class="gy-search-label">${o(s("gooayeSearchLabel"))}</span>
        <input type="search" class="gy-search-input" data-gy-search
          placeholder="${o(s("gooayeSearchPlaceholder"))}"
          value="${o(Qe)}" autocomplete="off" />
      </label>
    </div>

    <p class="gy-source-line">
      ${o(s("gooayeSourceLine"))}
      <a class="pc-link pc-link-ext" href="${o(((g=e.show)==null?void 0:g.feedUrl)||"")}" target="_blank" rel="noopener noreferrer">SoundOn RSS</a>
      ·
      <a class="pc-link pc-link-ext" href="${da}" target="_blank" rel="noopener noreferrer">${o(s("podcastsGooayeApple"))}</a>
      ·
      <a class="pc-link" href="${bn}">${o(s("podcastsGotoResearch"))}</a>
    </p>

    <div class="gy-list" role="list">
      ${l.length?l.map(Cn).join(""):`<p class="gy-empty">${o(s("gooayeNoResults"))}</p>`}
    </div>

    <div class="gy-pager">
      ${r>0?`<button type="button" class="gy-load-more" data-gy-more>
              ${o(s("gooayeLoadMore",{n:String(Math.min(ke,r)),left:String(r)}))}
            </button>`:i.length?`<p class="gy-pager-done">${o(s("gooayeShowingAll",{n:String(i.length)}))}</p>`:""}
    </div>`;const d=t.querySelector("[data-gy-search]");if(d){let m=null;d.addEventListener("input",()=>{clearTimeout(m),m=setTimeout(()=>{Qe=d.value||"",Oe=ke,Xe(t,e)},180)})}const u=t.querySelector("[data-gy-more]");u&&u.addEventListener("click",()=>{Oe+=ke,Xe(t,e)})}function An(){return`
    <article class="pc-card pc-card-gooaye" id="podcast-gooaye" data-podcast="gooaye">
      <header class="pc-card-head pc-card-head-gooaye">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${o(s("gooayeLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-tw">${o(s("podcastsGooayeMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${o(s("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${o(s("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${o(s("podcastsGooayeTitle"))}</h3>
        <p class="pc-card-blurb">${o(s("podcastsGooayeLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="gy-disclaimer" role="note">${o(s("gooayeDisclaimer"))}</p>
        <div id="gy-root" class="gy-root" aria-busy="true">
          <p class="gy-loading">${o(s("gooayeLoading"))}</p>
        </div>
      </div>
    </article>`}function Ln(){return An()}async function En(t="#gy-root"){var a;const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1,reason:"missing-root"};Oe=ke,Qe="";try{const i=await $n();return e.setAttribute("aria-busy","false"),Xe(e,i),{ok:!0,count:((a=i.episodes)==null?void 0:a.length)||0}}catch(i){return e.setAttribute("aria-busy","false"),Xe(e,null,{error:i}),{ok:!1,reason:String((i==null?void 0:i.message)||i)}}}const zt=[{id:"godzilla",titleKey:"godzillaTitle",handleKey:"podcastsGodzillaHandle",blurbKey:"godzillaLead",marketKey:"godzillaUsFocus",market:"US",featured:!0},{id:"jensen",titleKey:"jensenTitle",handleKey:"jensenHandle",blurbKey:"jensenLead",marketKey:"jensenUsFocus",market:"US",featured:!0},{id:"gooaye",titleKey:"podcastsGooayeTitle",handleKey:null,blurbKey:"podcastsGooayeLead",marketKey:"podcastsGooayeMarket",market:"TW",featured:!1}],Re={godzilla:"godzilla","godzilla-playbook":"godzilla",playbook:"godzilla",哥吉拉:"godzilla",哥吉拉心法:"godzilla",jensen:"jensen",huang:"jensen","jensen-huang":"jensen",nvidia:"jensen","jen-hsun":"jensen",etl:"jensen",黃仁勳:"jensen",黄仁勋:"jensen",gooaye:"gooaye",股癌:"gooaye",menu:"menu",all:"menu",index:"menu","":"menu"};let Nt="menu",kt=null;function Dt(t){if(t==null||t==="")return"menu";const e=String(t).trim(),a=e.toLowerCase();return Re[a]?Re[a]:Re[e]?Re[e]:zt.some(i=>i.id===a)?a:"menu"}function xn(){return`
    <article class="pc-card pc-card-featured" id="podcast-godzilla" data-podcast="godzilla">
      <header class="pc-card-head">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-featured">${o(s("podcastsFeatured"))}</span>
          <span class="pc-card-badge pc-badge-us">${o(s("godzillaUsFocus"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${o(s("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${o(s("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${o(s("godzillaTitle"))}</h3>
        <p class="pc-card-handle">${o(s("podcastsGodzillaHandle"))}</p>
        <p class="pc-card-blurb">${o(s("godzillaLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="gz-disclaimer" role="note">${o(s("godzillaDisclaimer"))}</p>
        <div id="gz-root" class="gz-root"></div>
      </div>
    </article>`}function Mn(){return`
    <article class="pc-card pc-card-featured pc-card-jensen" id="podcast-jensen" data-podcast="jensen">
      <header class="pc-card-head pc-card-head-jensen">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-featured">${o(s("podcastsFeatured"))}</span>
          <span class="pc-card-badge pc-badge-us">${o(s("jensenUsFocus"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${o(s("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${o(s("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${o(s("jensenTitle"))}</h3>
        <p class="pc-card-handle">${o(s("jensenHandle"))}</p>
        <p class="pc-card-blurb">${o(s("jensenLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="jh-disclaimer" role="note">${o(s("jensenDisclaimer"))}</p>
        <div id="jh-root" class="jh-root"></div>
      </div>
    </article>`}function Rn(){return zt.map(t=>{const e=t.market==="TW"?"pc-badge-tw":"pc-badge-us",a=t.featured?`<span class="pc-card-badge pc-badge-featured">${o(s("podcastsFeatured"))}</span>`:t.id==="gooaye"?`<span class="pc-card-badge pc-badge-library">${o(s("gooayeLibraryBadge"))}</span>`:`<span class="pc-card-badge pc-badge-stub">${o(s("podcastsStubBadge"))}</span>`,i=t.handleKey?`<p class="pc-menu-handle">${o(s(t.handleKey))}</p>`:"";return`
      <button type="button" class="pc-menu-card" data-pc-cat="${o(t.id)}" aria-label="${o(s(t.titleKey))}">
        <div class="pc-menu-badges">
          ${a}
          <span class="pc-card-badge ${e}">${o(s(t.marketKey))}</span>
          <span class="pc-card-badge pc-badge-candidate">${o(s("godzillaBadgeCandidate"))}</span>
        </div>
        <h3 class="pc-menu-title">${o(s(t.titleKey))}</h3>
        ${i}
        <p class="pc-menu-blurb">${o(s(t.blurbKey))}</p>
        <span class="pc-menu-cta">${o(s("podcastsOpenCategory"))}</span>
      </button>`}).join("")}function zn(t){return[{id:"menu",label:s("podcastsCatMenu")},...zt.map(a=>({id:a.id,label:s(a.titleKey)}))].map(a=>`<button type="button" class="pc-tab${a.id===t?" is-active":""}" data-pc-cat="${o(a.id)}" role="tab" aria-selected="${a.id===t}">${o(a.label)}</button>`).join("")}function Nn(t){return t==="godzilla"?xn():t==="jensen"?Mn():t==="gooaye"?Ln():`
    <div class="pc-menu" role="list" aria-label="${o(s("podcastsCatMenu"))}">
      <p class="pc-menu-lead">${o(s("podcastsMenuLead"))}</p>
      <div class="pc-menu-grid">${Rn()}</div>
    </div>`}function Dn(t){return!t||t==="menu"?"#podcasts":`#podcasts/${t}`}function Bn(t){const e=Dn(t);location.hash!==e&&history.replaceState(null,"",e)}function Bt(t,e,{syncUrl:a=!0}={}){const i=Dt(e);Nt=i,a&&Bn(i),t.innerHTML=`
    <div class="pc-tabs-wrap">
      <div class="pc-tabs" role="tablist" aria-label="${o(s("podcastsCategories"))}">
        ${zn(i)}
      </div>
    </div>
    <div class="pc-panel" role="tabpanel" data-pc-panel="${o(i)}">
      ${Nn(i)}
    </div>`,t.querySelectorAll("[data-pc-cat]").forEach(n=>{n.addEventListener("click",()=>{Bt(t,n.dataset.pcCat,{syncUrl:!0})})}),i==="godzilla"&&pn("#gz-root"),i==="jensen"&&kn("#jh-root"),i==="gooaye"&&En("#gy-root")}function jn(){return`
    <section class="section podcasts-section" aria-label="${o(s("podcastsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${o(s("podcastsTitle"))}</h2>
        <p class="view-lead">${o(s("podcastsLead"))}</p>
      </header>
      <p class="pc-disclaimer" role="note">${o(s("podcastsDisclaimer"))}</p>
      <div id="pc-root" class="pc-root"></div>
    </section>`}function qn(t,{syncUrl:e=!0}={}){return kt?(Bt(kt,t,{syncUrl:e}),{ok:!0,category:Nt}):{ok:!1,reason:"missing-root"}}function On(t="#pc-root",e={}){const i=(typeof t=="string"?document.querySelector(t):t)||document.querySelector("#pc-root");if(!i)return{ok:!1,reason:"missing-root"};kt=i;const n=Dt(e.category??"menu");return Bt(i,n,{syncUrl:e.syncUrl!==!1}),{ok:!0,category:Nt}}const Hn="./data/latest.json";function H(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function O(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function U(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(z(),{minimumFractionDigits:e,maximumFractionDigits:e})}function $e(t,e){if(t==null||Number.isNaN(t))return"—";const a=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${U(t,a)}`}function In(t){try{return new Date(t).toLocaleString(z(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+s("taipei")}catch{return t}}function jt(t){const e=t.aboveSma20?`<span class="badge sma-on">${f("sma20","SMA20")}↑</span>`:`<span class="badge sma-off">${f("sma20","SMA20")}↓</span>`,a=t.aboveSma50?`<span class="badge sma-on">${f("sma50","SMA50")}↑</span>`:`<span class="badge sma-off">${f("sma50","SMA50")}↓</span>`;return e+a}function qt(t){return t!=null&&t.length?t.map(e=>{const a=String(e);return a==="A"?`<span class="badge screen">${f("screenA","A")}</span>`:a==="B"?`<span class="badge screen">${f("screenB","B")}</span>`:a==="C"?`<span class="badge screen">${f("screenC","C")}</span>`:a==="observe"?`<span class="badge screen">${o(s("observe"))}</span>`:`<span class="badge screen">${o(a)}</span>`}).join(""):""}const pa={tw:"https://www.twse.com.tw/zh/indices/taiex/mi-5min-indices.html",otc:"https://www.tpex.org.tw/zh-tw/mainboard/trading/info/daily-indices.html",spx:"https://www.spglobal.com/spdji/en/indices/equity/sp-500/",nasdaq:"https://www.nasdaq.com/market-activity/index/comp",sox:"https://www.nasdaq.com/market-activity/index/sox",usdTwd:"https://www.cbc.gov.tw/tw/lp-645-1.html"};function Fn(t){var n,l,r,c,p;const e=[],a=(d,u,g)=>{if(!g)return;const m=g.incomplete,k=g.value!=null?U(g.value,2):m?o(s("dataIncomplete")):"—",S=g.dayPct!=null?`<div data-lq-field="dayPct" class="pct ${H(g.dayPct)}">${O(g.dayPct)}</div>`:"",T=g.session==="intraday"?` · ${f("intraday",s("intraday"))}`:"",P=pa[d],C=P?`title="${o((g.name||d)+" · official ↗")}"`:"",M=`
        <div class="label">${u}${T}</div>
        <div class="value" data-lq-field="value">${k}</div>
        ${S}`;P?e.push(`
      <a class="index-chip ${m?"incomplete":""}" data-lq="index" data-lq-key="${o(d)}" href="${o(P)}"
         target="_blank" rel="noopener noreferrer" ${C}>${M}
      </a>`):e.push(`
      <div class="index-chip ${m?"incomplete":""}" data-lq="index" data-lq-key="${o(d)}">${M}
      </div>`)};if(a("tw",f("taiex",((n=t.tw)==null?void 0:n.name)||s("taiex")),t.tw),a("otc",f("otc",((l=t.otc)==null?void 0:l.name)||s("otc")),t.otc),a("spx",f("spx",((r=t.spx)==null?void 0:r.name)||s("spx")),t.spx),a("nasdaq",f("nasdaq",((c=t.nasdaq)==null?void 0:c.name)||s("nasdaq")),t.nasdaq),a("sox",f("sox",((p=t.sox)==null?void 0:p.name)||s("sox")),t.sox),t.usdTwd){const d=t.usdTwd,u=d.taipeiClose??d.yahoo,g=pa.usdTwd,m=["USD/TWD",s("taipeiClose")+(d.taipeiClose!=null?` ${U(d.taipeiClose,3)}`:" —"),d.yahoo!=null?`Yahoo ${U(d.yahoo,3)}`:null,"CBC / 台北外匯 official ↗"].filter(Boolean).join(" · ");e.push(`
      <a class="index-chip" data-lq="index" data-lq-key="usdTwd"
         data-lq-taipei-close="${d.taipeiClose!=null?o(String(d.taipeiClose)):""}"
         href="${o(g)}" target="_blank" rel="noopener noreferrer"
         title="${o(m)}">
        <div class="label">${f("usdtwd",s("usdtwd"))}</div>
        <div class="value" data-lq-field="value">${U(u,3)}</div>
        <div class="pct flat" data-lq-field="dayPct" style="font-size:0.7rem">
          ${o(s("taipeiClose"))} ${d.taipeiClose!=null?U(d.taipeiClose,3):"—"}
          · Yahoo ${d.yahoo!=null?U(d.yahoo,3):"—"}
        </div>
      </a>
    `)}return e.length?`
    <div class="index-strip index-strip--marquee">
      <div class="index-marquee" tabindex="0">
        <div class="index-marquee-track">
          ${`<div class="index-marquee-group">${e.join("")}</div>`}
          <div class="index-marquee-group index-marquee-group--clone" aria-hidden="true">${e.join("")}</div>
        </div>
      </div>
    </div>`:'<div class="index-strip index-strip--marquee"></div>'}function Wn(t,e){const a=t.market==="TW"?f("twStock",s("twStock")):t.market==="US"?f("usStock",s("usStock")):o(t.market||""),i=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${f("rs","RS")}</div><div class="m-val ${H(t.rsVsIndexPp)}">${O(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">${f("priorClose",s("priorCloseFull"))}</div><div class="m-val ${H(t.priorClosePct)}">${O(t.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${f("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card" data-lq="pick" data-lq-sym="${o(t.ticker)}">
      <div class="rank">TOP ${e}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${o(t.ticker)}</div>
          <div class="name">${o(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price" data-lq-field="price">${$e(t.price,t.currency)}</div>
          <div class="day-pct ${H(t.dayPct)}" data-lq-field="dayPct">${O(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${a}</span>
        ${qt(t.screens)}
        ${jt(t)}
      </div>
      <div class="metrics">
        ${i}
        <div class="metric"><div class="m-label">${f("pct5d",s("pct5d"))}</div><div class="m-val ${H(t.pct5d)}">${O(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${f("pct1m",s("pct1m"))}</div><div class="m-val ${H(t.pct1m)}">${O(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${f("volRatio",s("volRatio"))}</div><div class="m-val">${t.volRatio!=null?U(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business||t.why||t.risk?`<details class="fold-block card-fold"><summary>${o(s("details"))}</summary>
        ${t.business?`<p class="card-text"><strong>${o(s("business"))}</strong>　${o(t.business)}</p>`:""}
        ${t.why?`<p class="card-text"><strong>${o(s("reason"))}</strong>　${o(t.why)}</p>`:""}
        ${t.risk?`<p class="card-text risk"><strong>${o(s("risk"))}</strong>　${Va(t.risk)}</p>`:""}
      </details>`:""}
    </article>
  `}function Va(t){let e=o(t);return e=e.replace(/漲停/g,f("limitUp",s("limitUp"))),e=e.replace(/動能/g,f("momentum",s("momentum"))),e}function ua(t){return t.map(e=>{const a=e.rsVsIndexPp??e.priorClosePct,i=e.rsVsIndexPp!=null?O(e.rsVsIndexPp):e.priorClosePct!=null?O(e.priorClosePct):"—";return`
      <tr data-lq="pick" data-lq-sym="${o(e.ticker)}">
        <td><span class="ticker">${o(e.ticker)}</span></td>
        <td class="name-cell">${o(e.name||"")}</td>
        <td class="num" data-lq-field="price">${$e(e.price,e.currency)}</td>
        <td class="num ${H(e.dayPct)}" data-lq-field="dayPct">${O(e.dayPct)}</td>
        <td class="num ${H(a)}">${i}</td>
        <td class="num ${H(e.pct5d)}">${O(e.pct5d)}</td>
        <td class="num ${H(e.pct1m)}">${O(e.pct1m)}</td>
        <td class="num">${e.volRatio!=null?U(e.volRatio,2)+"×":"—"}</td>
        <td>${jt(e)}</td>
        <td>${qt(e.screens)}</td>
        <td class="why-cell">${o(e.why||"")}</td>
      </tr>`}).join("")}function ga(t){return t.map(e=>{const a=e.rsVsIndexPp!=null?`<span class="${H(e.rsVsIndexPp)}">${f("rs","RS")} ${O(e.rsVsIndexPp)}</span>`:e.priorClosePct!=null?`<span class="${H(e.priorClosePct)}">${f("priorClose",s("priorClose"))} ${O(e.priorClosePct)}</span>`:"";return`
      <div class="list-card" data-lq="pick" data-lq-sym="${o(e.ticker)}">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${o(e.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${o(e.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)" data-lq-field="price">${$e(e.price,e.currency)}</div>
            <div class="${H(e.dayPct)}" data-lq-field="dayPct" style="font-family:var(--mono);font-weight:600">${O(e.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${a}
          <span class="${H(e.pct5d)}">${f("pct5d","5d")} ${O(e.pct5d)}</span>
          <span class="${H(e.pct1m)}">${f("pct1m","1m")} ${O(e.pct1m)}</span>
          <span>${f("volRatio",s("volRatio"))} ${e.volRatio!=null?U(e.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${jt(e)}${qt(e.screens)}</div>
        ${e.why?`<p class="lc-why">${o(e.why)}</p>`:""}
        ${e.risk&&e.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">${o(s("risk"))}：${Va(e.risk)}</p>`:""}
      </div>`}).join("")}function Un(){return`
    <tr>
      <th>${f("ticker",s("ticker"))}</th>
      <th>${o(s("name"))}</th>
      <th>${o(s("price"))}</th>
      <th>${f("dayPct",s("dayPct"))}</th>
      <th>${f("rs","RS")}／${f("priorClose",s("priorClose"))}</th>
      <th>${f("pct5d",s("pct5d"))}</th>
      <th>${f("pct1m",s("pct1m"))}</th>
      <th>${f("volRatio",s("volRatio"))}</th>
      <th>${o(s("ma"))}</th>
      <th>${f("screening",s("screening"))}</th>
      <th>${o(s("reason"))}</th>
    </tr>`}function _n(t){if(!t)return"";const e=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${f("adr","ADR")} ${f("parity",s("parity"))}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side" data-lq="pick" data-lq-sym="TSM">
          <div class="p-label">${f("usStock",s("usStock"))} ${f("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price" data-lq-field="price" data-lq-parity="TSM">${$e(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${f("adsRatio",s("adsRatio"))}</span>　<strong>${o(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>${f("parity",s("implied"))}</span>　<strong>${t.impliedUsdTaipeiFx!=null?U(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${f("premium",s("premium"))}</span>　<strong class="${H(e)}">${O(e)}</strong></div>
        </div>
        <div class="parity-side" data-lq="pick" data-lq-sym="2330.TW">
          <div class="p-label">${f("twStock",s("twStock"))}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price" data-lq-field="price" data-lq-parity="2330.TW">${$e(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${o(t.note)}</p>`:""}
      </div>
    </section>
  `}function ha(t){return t?t.market==="TW"||t.market==="US"?t.market:String(t.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function ma(t,e){return t.length?`<div class="top5-grid">${t.map((a,i)=>Wn(a,i+1)).join("")}</div>`:`<div class="empty-state">${o(s("emptyTop",{market:e}))}</div>`}function Ga(){return[{id:"today",label:s("navToday"),hash:"today"},{id:"logic",label:s("navLogic"),hash:"logic"},{id:"research",label:s("navResearch"),hash:"research"},{id:"strategies",label:s("navStrategies"),hash:"strategies"},{id:"options",label:s("navOptions"),hash:"options"},{id:"earnings",label:s("navEarnings"),hash:"earnings"},{id:"lookup",label:s("navLookup"),hash:"lookup"},{id:"soxl",label:s("navSoxl"),hash:"soxl"},{id:"podcasts",label:s("navPodcasts"),hash:"podcasts"},{id:"paper",label:s("navPaper"),hash:"paper"}]}const Vn=["today","strategies","paper","research"],Ya=["logic","options","earnings","lookup","soxl","podcasts"],St={today:"today",logic:"logic",research:"research",strategies:"strategies",options:"options",earnings:"earnings",lookup:"lookup",quote:"lookup",soxl:"soxl",podcasts:"podcasts",podcast:"podcasts",名人podcast:"podcasts","celebrity-podcasts":"podcasts",godzilla:"podcasts",jensen:"podcasts",huang:"podcasts","jensen-huang":"podcasts",黃仁勳:"podcasts",nvidia:"podcasts",paper:"paper",social:"today",danmaku:"today","social-digest":"today",giscus:"today",help:"logic",glossary:"logic",bookshelf:"research",library:"research",研究:"research","us-options":"options",選擇權:"options",美股選擇權:"options",mcmillan:"options",讀財報:"earnings",reports:"earnings","us-earnings":"earnings",財報:"earnings",查股:"lookup",個股:"lookup","stock-lookup":"lookup","us-quote":"lookup","tw-quote":"lookup","soxl-desk":"soxl",semiconductor:"soxl",半導體:"soxl",三倍半導體:"soxl",哥吉拉:"podcasts",哥吉拉心法:"podcasts","godzilla-playbook":"podcasts",playbook:"podcasts",黃仁勳:"podcasts","jen-hsun":"podcasts",etl:"podcasts",method:"logic",邏輯:"logic"},bt={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',logic:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 2h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v5h-2v-5z"/></svg>',research:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8V12zm0 3.5h8V17H8v-1.5zm0 3.5h5V20.5H8V19z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',options:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 12a8 8 0 1 1 16 0H4zm8-6a6 6 0 0 0-5.65 4h11.3A6 6 0 0 0 12 6zm0 12a6 6 0 0 0 5.65-4H6.35A6 6 0 0 0 12 18z"/></svg>',earnings:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h6v-2H7z"/></svg>',lookup:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10 3a7 7 0 0 1 5.47 11.34l4.1 4.09-1.42 1.42-4.09-4.1A7 7 0 1 1 10 3zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>',soxl:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 17.25 9.5 9l3.5 4.5L17 8l4 9.25H3zM5 19h14v2H5v-2z"/></svg>',podcasts:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 0 0-9 9v7a2 2 0 0 0 2 2h3v-8H7v-1a5 5 0 0 1 10 0v1h-1v8h3a2 2 0 0 0 2-2v-7a9 9 0 0 0-9-9zm-4 11v5H5v-5h3zm11 5h-3v-5h3v5zM12 7a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',more:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 10h4v4H5v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4z"/></svg>'},ze={godzilla:"godzilla","godzilla-playbook":"godzilla",playbook:"godzilla",哥吉拉:"godzilla",哥吉拉心法:"godzilla",jensen:"jensen",huang:"jensen","jensen-huang":"jensen",nvidia:"jensen","jen-hsun":"jensen",etl:"jensen",黃仁勳:"jensen",黄仁勋:"jensen",gooaye:"gooaye",股癌:"gooaye"};function Ze(){const a=(location.hash||"").replace(/^#/,"").split(/[/?&]/).filter(Boolean).map(p=>{try{return decodeURIComponent(p)}catch{return p}}),i=a[0]||"",n=i.toLowerCase();if(ze[n]||ze[i])return{view:"podcasts",sub:ze[n]||ze[i],parts:a.slice(1)};const l=St[n]||St[i]||"today",r=a.slice(1);let c=r[0]||null;if(l==="podcasts"&&c&&(c=Dt(c)),l==="research"&&c){if(c.toLowerCase()==="shelf"&&r[1])return{view:l,sub:"menu",shelf:r[1],parts:r};c=Ct(c)}return{view:l,sub:c,parts:r,shelf:null}}function Gn(){return Ze().view}function Ka(t,e){const a=bt[t.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${t.id}"
        data-variant="${e}"
        aria-label="${o(t.label)}"
        aria-current="false">
        <span class="nav-icon">${a}</span>
        <span class="nav-label">${o(t.label)}</span>
      </button>`}function Yn(t){return Ga().map(e=>Ka(e,t)).join("")}function Kn(){const t=Object.fromEntries(Ga().map(n=>[n.id,n])),e=Vn.map(n=>Ka(t[n],"mobile")).join(""),a=`
      <button type="button"
        class="nav-item nav-more-btn"
        data-nav-more
        data-variant="mobile"
        aria-label="${o(s("navMore"))}"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="nav-more-sheet"
        aria-current="false">
        <span class="nav-icon">${bt.more}</span>
        <span class="nav-label">${o(s("navMore"))}</span>
      </button>`,i=Ya.map(n=>{const l=t[n],r=bt[n]||"";return`
        <button type="button"
          class="nav-more-item"
          data-nav="${l.id}"
          aria-label="${o(l.label)}"
          aria-current="false">
          <span class="nav-icon">${r}</span>
          <span class="nav-label">${o(l.label)}</span>
        </button>`}).join("");return`
    <nav class="nav-bottom" aria-label="${o(s("navMain"))}">
      ${e}
      ${a}
    </nav>
    <div id="nav-more-sheet" class="nav-more-sheet" hidden>
      <button type="button" class="nav-more-backdrop" data-more-close aria-label="${o(s("navMoreClose"))}"></button>
      <div class="nav-more-panel" role="dialog" aria-modal="true" aria-label="${o(s("navMore"))}">
        <div class="nav-more-grabber" aria-hidden="true"></div>
        <div class="nav-more-head">
          <h2 class="nav-more-title">${o(s("navMore"))}</h2>
          <button type="button" class="nav-more-close" data-more-close aria-label="${o(s("navMoreClose"))}">×</button>
        </div>
        <div class="nav-more-list">
          ${i}
        </div>
      </div>
    </div>`}function Qn(t,e){const a=t.top5||[],i=t.us||[],n=t.tw||[],l=o(s("disclaimer")),r=Un();return`
    <header class="site-chrome">
      <div class="chrome-row">
        <div class="chrome-brand">
          <img class="brand-mark" src="/Just-Math-and-Luck/logo.png?v=3" width="40" height="40" alt="每日數學選股" decoding="async" />
          <div class="brand-text">
            <h1>${o(s("siteTitle"))}</h1>
            <p class="brand-meta">${o(s("dataAsOf"))} ${In(t.asOf)}
              <span id="lq-status" class="lq-status" hidden></span>
            </p>
          </div>
        </div>
        <div class="chrome-actions">
          ${cs()}
          <nav class="nav-desktop" aria-label="${o(s("navMain"))}">
            ${Yn("desktop")}
          </nav>
        </div>
      </div>
      <p class="disclaimer-line" role="note">${l}</p>
      <div class="market-strip-wrap" aria-label="${o(s("marketQuotes"))}">
        <span class="market-strip-label">${o(s("hot"))}</span>
        ${Fn(t.indices||{})}
      </div>
      ${Qi()}
    </header>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">${o(s("todayPicks"))}</h2>
        </header>
        ${ws(t.marketRegime)}
        <div class="tabs market-tabs" role="tablist" aria-label="${o(s("market"))}">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${f("usStock",s("usStock"))}（${i.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${f("twStock",s("twStock"))}（${n.length}）</button>
        </div>
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${o(s("usTop"))}</h2>
            ${ma(a.filter(p=>ha(p)==="US"),s("usStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${o(s("usList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${r}</thead>
                <tbody>${ua(i)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${ga(i)}</div>
          </section>
        </div>
        <div class="panel" id="panel-tw" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${o(s("twTop"))}</h2>
            ${ma(a.filter(p=>ha(p)==="TW"),s("twStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${o(s("twList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${r}</thead>
                <tbody>${ua(n)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${ga(n)}</div>
          </section>
        </div>
        ${_n(t.parity)}
      </div>
      <div class="view" id="view-logic" data-view="logic" hidden>
        <span id="logic" class="view-anchor" tabindex="-1"></span>
        ${Cs(t)}
      </div>

      <div class="view" id="view-research" data-view="research" hidden>
        <span id="research" class="view-anchor" tabindex="-1"></span>
        ${to()}
      </div>

      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span id="strategies" class="view-anchor" tabindex="-1"></span>
        ${Bs()}
      </div>

      <div class="view" id="view-options" data-view="options" hidden>
        <span id="options" class="view-anchor" tabindex="-1"></span>
        ${Po()}
      </div>

      <div class="view" id="view-earnings" data-view="earnings" hidden>
        <span id="earnings" class="view-anchor" tabindex="-1"></span>
        ${Ro()}
      </div>

      <div class="view" id="view-lookup" data-view="lookup" hidden>
        <span id="lookup" class="view-anchor" tabindex="-1"></span>
        <span id="quote" class="view-anchor" tabindex="-1"></span>
        ${oi()}
      </div>

      <div class="view" id="view-soxl" data-view="soxl" hidden>
        <span id="soxl" class="view-anchor" tabindex="-1"></span>
        ${ci()}
      </div>

      <div class="view" id="view-podcasts" data-view="podcasts" hidden>
        <span id="podcasts" class="view-anchor" tabindex="-1"></span>
        <span id="godzilla" class="view-anchor" tabindex="-1"></span>
        <span id="jensen" class="view-anchor" tabindex="-1"></span>
        ${jn()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span id="paper" class="view-anchor" tabindex="-1"></span>
        ${vs(e)}
      </div>
    </main>

    ${Kn()}

    <p class="site-footer">${o(s("footer"))}</p>
  `}let me=null;function Xn(){try{return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function He(t,e){const a=t.querySelector("#nav-more-sheet"),i=t.querySelector("[data-nav-more]");if(!a||!i)return;if(me&&(clearTimeout(me),me=null),e){a.hidden=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{a.hidden||a.classList.add("is-open")})}),i.setAttribute("aria-expanded","true"),document.body.classList.add("nav-more-open");return}const n=a.classList.contains("is-open")||!a.hidden;if(a.classList.remove("is-open"),i.setAttribute("aria-expanded","false"),document.body.classList.remove("nav-more-open"),!n||Xn()){a.hidden=!0;return}me=setTimeout(()=>{a.hidden=!0,me=null},340)}function Zn(t,e){const a=Ya.includes(e);t.querySelectorAll(".nav-item[data-nav]").forEach(n=>{const l=n.dataset.nav===e;n.classList.toggle("is-active",l),n.setAttribute("aria-current",l?"page":"false")});const i=t.querySelector("[data-nav-more]");i&&(i.classList.toggle("is-active",a),i.setAttribute("aria-current",a?"true":"false")),t.querySelectorAll(".nav-more-item").forEach(n=>{const l=n.dataset.nav===e;n.classList.toggle("is-active",l),n.setAttribute("aria-current",l?"page":"false")})}function Qa(t,e,{updateHash:a=!0,scrollTop:i=!0}={}){const n=St[e]||"today";if(t.querySelectorAll(".view").forEach(l=>{const r=l.dataset.view===n;l.hidden=!r,l.classList.toggle("is-active",r)}),Zn(t,n),He(t,!1),a){const l=`#${n}`;location.hash!==l&&history.replaceState(null,"",l)}return i&&window.scrollTo(0,0),n}let Ne=null,De=null;function Jn(t){const e=(l,r)=>Qa(t,l,r);t.querySelectorAll(".nav-item[data-nav], .nav-more-item[data-nav]").forEach(l=>{l.addEventListener("click",()=>e(l.dataset.nav))}),t.querySelectorAll("[data-jump]").forEach(l=>{l.addEventListener("click",()=>e(l.dataset.jump))});const a=t.querySelector("[data-nav-more]");a&&a.addEventListener("click",()=>{const l=a.getAttribute("aria-expanded")==="true";He(t,!l)}),t.querySelectorAll("[data-more-close]").forEach(l=>{l.addEventListener("click",()=>He(t,!1))}),De&&window.removeEventListener("keydown",De),De=l=>{l.key==="Escape"&&He(t,!1)},window.addEventListener("keydown",De),Ne&&window.removeEventListener("hashchange",Ne),Ne=()=>{const l=Ze();e(l.view,{updateHash:!1}),el(l)},window.addEventListener("hashchange",Ne);const i=Ze(),n=!!(i.sub||i.shelf);return e(i.view,{updateHash:!n,scrollTop:!1}),{go:e}}function el(t){t&&(t.view==="podcasts"&&qn(t.sub||"menu",{syncUrl:!1}),t.view==="research"&&lo(t.sub||"menu",{syncUrl:!1,shelf:t.shelf||null}))}function tl(t){const e=t.querySelector(".index-marquee");if(!e||e.dataset.marqueeBound==="1")return;e.dataset.marqueeBound="1";const a=()=>e.classList.add("is-paused"),i=()=>e.classList.remove("is-paused");e.addEventListener("pointerdown",a),e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("pointerleave",i),e.addEventListener("touchstart",a,{passive:!0}),e.addEventListener("touchend",i,{passive:!0}),e.addEventListener("touchcancel",i,{passive:!0})}function al(t){const e=t.querySelectorAll(".tab-btn");e.forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.tab;e.forEach(n=>{const l=n.dataset.tab===i;n.classList.toggle("active",l),n.setAttribute("aria-selected",l?"true":"false")}),t.querySelectorAll(".panel").forEach(n=>{n.classList.toggle("active",n.id===`panel-${i}`)})})})}let Ot=null,Xa=null;async function Za(t){const e=Ot,a=Xa,i=Gn();t.innerHTML=Qn(e,a),document.title=s("siteTitle"),Sa(),Jn(t),Qa(t,i,{updateHash:!0,scrollTop:!1}),al(t),tl(t),await Zi("#us-macro-strip"),ks(t),ds(t),await Hs("#xq-root");const n=Ze();await ro("#rl-root",void 0,{category:n.view==="research"&&n.sub||"menu",shelf:n.view==="research"?n.shelf:null,syncUrl:!1}),await Co("#uo-root"),await zo("#er-root"),ii("#lk-root"),await di("#sx-root"),On("#pc-root",{category:n.view==="podcasts"&&n.sub||"menu",syncUrl:!1}),Oi(t)}async function sl(){const t=document.getElementById("app");!t||!Ot||(_a(),await Za(t))}async function $t(){const t=document.getElementById("app");Sa();const e=document.getElementById("loading");e&&(e.textContent=s("loading"));try{const a=await fetch(Hn);if(!a.ok)throw new Error(`HTTP ${a.status}`);Ot=await a.json(),Xa=await Ss(),await Za(t),$t._langHooked||($t._langHooked=!0,as(()=>{sl()}))}catch(a){t.innerHTML=`<div class="error">${o(s("loadError",{msg:a.message}))}</div>`}}function ol(){if(!("serviceWorker"in navigator))return;const t="/Just-Math-and-Luck/",e=`${t}sw.js`;window.addEventListener("load",()=>{navigator.serviceWorker.register(e,{scope:t}).catch(()=>{})})}const fa="jml-pwa-hint-dismissed";function il(){try{if(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)return!0}catch{}return!1}function nl(){return/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")}function ll(){var n;if(il()||!nl())return;try{if(localStorage.getItem(fa)==="1")return}catch{return}if(document.getElementById("pwa-install-hint"))return;const t=document.createElement("div");t.id="pwa-install-hint",t.className="pwa-install-hint",t.setAttribute("role","status");const a=/iPhone|iPad|iPod/i.test(navigator.userAgent||"")?"可「分享 → 加入主畫面」離線開啟":"可加入主畫面，離線也能開";t.innerHTML=`<span class="pwa-install-hint__text">${a}</span><button type="button" class="pwa-install-hint__close" aria-label="關閉">×</button>`,document.body.appendChild(t);const i=()=>{t.remove();try{localStorage.setItem(fa,"1")}catch{}};(n=t.querySelector(".pwa-install-hint__close"))==null||n.addEventListener("click",i),window.setTimeout(()=>{t.isConnected&&t.classList.add("pwa-install-hint--fade")},8e3),window.setTimeout(()=>{t.isConnected&&i()},12e3)}ol();$t();window.setTimeout(()=>{try{ll()}catch{}},2500);
