(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}})();const Yt=[{id:"zh-Hant",label:"繁體中文",short:"繁"},{id:"en",label:"English",short:"EN"},{id:"zh-Hans",label:"简体中文",short:"简"},{id:"ja",label:"日本語",short:"日"}],Kt=Yt.map(t=>t.id),Xt="site-lang",Ke="zh-Hant",Xe=new Set;function Pa(){try{const e=localStorage.getItem(Xt);if(e&&Kt.includes(e))return e}catch{}const t=typeof navigator<"u"&&navigator.language||"";return/^zh[-_]?(CN|Hans|SG)/i.test(t)?"zh-Hans":/^zh/i.test(t)?"zh-Hant":/^ja/i.test(t)?"ja":/^en/i.test(t)?"en":Ke}let q=Pa();function Oe(){return q}function Ca(t){if(!Kt.includes(t)||t===q)return!1;q=t;try{localStorage.setItem(Xt,t)}catch{}return typeof document<"u"&&(document.documentElement.lang=t==="zh-Hant"?"zh-Hant":t==="zh-Hans"?"zh-Hans":t),Xe.forEach(e=>{try{e(t)}catch{}}),!0}function La(t){return Xe.add(t),()=>Xe.delete(t)}function R(){return q==="en"?"en-US":q==="ja"?"ja-JP":q==="zh-Hans"?"zh-CN":"zh-TW"}function Qt(){typeof document>"u"||(document.documentElement.lang=q==="zh-Hant"?"zh-Hant":q==="zh-Hans"?"zh-Hans":q)}const Fe={siteTitle:"每日數學選股",loading:"載入中…",disclaimer:"投資涉及風險，資訊僅供參考，非投資建議",footer:"投資涉及風險，資訊僅供參考，非投資建議",dataAsOf:"資料",taipei:"（台北）",navMain:"主要導覽",navToday:"今日",navStrategies:"策略",navPaper:"模擬",navMore:"更多",navMoreClose:"關閉",navLogic:"邏輯",researchTitle:"研究",navResearch:"研究",navOptions:"選擇權",navEarnings:"讀財報",earningsTitle:"讀財報",earningsLead:"美股 Magnificent 7 與高關注財報摘要：公司在做什麼、關鍵數字、下一步看什麼——白話、每日更新，非投資建議。",earningsDisclaimer:"非投資建議。數字來自公開 Yahoo Finance；缺欄略過不顯示，不構成個人化投資建議。",earningsUsFocus:"以美股為主",earningsTwStub:"台股財報稍後開放（規劃中）",earningsSelectionTitle:"關注名單規則：",earningsSelectionFallback:"市值最大且未來 14 日內有財報的非 Mag7 大型股；或 Yahoo 熱門成交；不足則以 45 日內行事曆亮點補齊。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——上次財報與下次日期（已知時）。",earningsMag7Badge:"Mag7",earningsHotTitle:"高關注／熱門財報",earningsHotLead:"依上方規則挑選；標籤說明為何入選。",earningsHotEmpty:"目前視窗內暫無符合條件的標的",earningsWhatItDoes:"這家公司在做什麼",earningsWhatToWatch:"下一步看什麼",earningsNextDate:"下次財報",earningsLastEps:"上次 EPS",earningsRevYoy:"營收 YoY",earningsEpsYoy:"獲利 YoY",earningsPe:"本益比",earningsForwardPe:"預估本益",earningsEstimate:"預估",earningsDataMissing:"資料不足",earningsTagPrimary:"14 日內・大型",earningsTagActives:"熱門成交・14 日內",earningsTagRecent:"近日已公布",earningsTagFallback:"45 日行事曆亮點",earningsTagOther:"關注",earningsPartialBlocker:"部分資料受阻",earningsRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",earningsLoadError:"無法載入財報摘要（{msg}）",earningsEmpty:"財報摘要整理中，請稍後再看。",navLookup:"查股",lookupTitle:"查股／個股",lookupLead:"輸入美股或台股代碼，查看公司簡介、即時報價、財報重點與官方財報連結——白話整理；行情來自 Yahoo，官方申報連至 SEC／公開資訊觀測站。非投資建議。",lookupDisclaimer:"非投資建議。行情數字來自公開 Yahoo Finance；官方財報連結連至 SEC EDGAR／公開資訊觀測站。缺欄不顯示、不編造。即時抓取可能受網路或來源限制。",lookupInputLabel:"股票代碼",lookupPlaceholderUs:"例如 AAPL",lookupPlaceholderTw:"例如 2330 或 2330.TW",lookupHintUs:"美股：輸入代號如 AAPL、MSFT、NVDA",lookupHintTw:"台股：四碼代號如 2330（自動加 .TW；上櫃可試 .TWO）",lookupSearch:"查詢",lookupIdle:"輸入代碼後按查詢，即可查看報價與財報摘要。",lookupLoading:"正在向 Yahoo Finance 抓取…",lookupEmptyInput:"請輸入股票代碼",lookupInvalid:"代碼格式無法辨識。美股如 AAPL；台股如 2330 或 2330.TW",lookupNotFound:"找不到此代碼的報價。請確認市場分頁（美股／台股）與代碼是否正確。",lookupError:"查詢失敗（{msg}）",lookupBusiness:"公司在做什麼",lookupQuoteStats:"報價與關鍵數據",lookupFinancials:"財務摘要",lookupEarnings:"財報重點",lookupPrevClose:"前收",lookupVolume:"成交量",lookupDayRange:"今日區間",lookup52w:"52 週高低",lookupMarketCap:"市值",lookupEps:"每股盈餘",lookupBeta:"Beta",lookupDivYield:"殖利率",lookupRevenue:"營收",lookupGrossMargin:"毛利率",lookupProfitMargin:"淨利率",lookupEpsConsensus:"預估 EPS",lookupEpsSurprise:"EPS 驚喜",lookupSources:"來源",lookupPartial:"部分進階欄位暫無法取得（已顯示可得數字，未編造）。",lookupOfficialFilings:"官方財報",lookupOfficialFilingsLead:"以下連結通往官方申報與公開資訊；美股可另列近期 10-K／10-Q／8-K（公開可抓取時）。數字不編造。",lookupSourceOfficial:"官方來源",lookupSourceQuote:"行情來源",lookupSourceCompany:"公司網站",lookupSecEdgarSearch:"SEC EDGAR 公司申報查詢",lookupSecEdgarBrowse:"SEC EDGAR 公司瀏覽頁",lookupSecFormsFilter:"SEC 10-K／10-Q 等年季報篩選",lookupMopsFinancialBook:"公開資訊觀測站｜財務報告書",lookupMopsFinancialQuery:"公開資訊觀測站｜財務報告查詢頁",lookupMopsCompany:"公開資訊觀測站｜公司基本資料",lookupMopsMaterial:"公開資訊觀測站｜重大訊息",lookupTwseIsin:"證交所 ISIN／基本資料查詢",lookupTpexCompany:"櫃買中心｜公司資料",lookupYahooTwQuote:"Yahoo 奇摩股市（行情，非正式財報）",lookupCompanyWebsite:"公司官網",lookupInvestorRelations:"投資人關係／IR（公開資料）",lookupRecentFilings:"近期官方申報",lookupFilingForm:"表單",lookupFilingDate:"申報日",lookupFilingDoc:"文件",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"近期申報清單暫時無法載入（網路或來源限制）。",lookupFilingsListEmpty:"目前沒有可列示的近期 10-K／10-Q／8-K。",lookupFilingsLinksStillWork:"上方官方連結仍可開啟查閱。",lookupFilingsTwNote:"台股請以公開資訊觀測站（MOPS）為官方財報來源；下方亦附行情頁供對照。",lookupFilingsCikUnavailable:"尚無法對應 SEC CIK；仍可透過上方 EDGAR 以代號查詢。",navSoxl:"SOXL",soxlTitle:"SOXL 半導體槓桿",soxlLead:"Direxion 每日半導體多頭 3 倍 ETF：最新報價、異常／事件、相關新聞，以及 SEC N-PORT 持股權重與估算貢獻——白話整理，非投資建議。",soxlDisclaimer:"非投資建議。SOXL 為約 3 倍日槓桿 ETF，波動與虧損風險極高；持股權重來自 SEC N-PORT（非當日），貢獻度為估算。",soxlHeroLabel:"SOXL 最新報價",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正規收盤",soxlLeverageNote:"SOXL 目標約為 ICE Semiconductor Index 單日表現的 3 倍；隔夜與多日累積不可用簡單 3 倍推估。",soxlHoldingsAsOf:"持股權重截至",soxlHoldingsNotSameDay:"最新 N-PORT，非今日即時",soxlEventsTitle:"事件／異常",soxlNewsTitle:"相關新聞",soxlNewsEmpty:"暫無相關新聞",soxlHoldingsTitle:"持股與估算貢獻",soxlHoldingsLead:"權重來自 SEC N-PORT；現金與指數交換常佔大宗。貢獻 ≈ 權重 × 報酬（標示為估算，且未直接等於 3x ETF 點數）。",soxlHoldingsEmpty:"持股清單整理中，請稍後再看。",soxlColName:"標的",soxlColWeight:"權重",soxlColReturn:"日報酬",soxlColContrib:"估算貢獻",soxlColReasons:"白話原因",soxlContributionHint:"估算＝權重% × 報酬% ÷ 100（籃子百分點；SOXL 約 3× 日槓桿，不等於 ETF 點數）",soxlSourceN:"來源 {n}",soxlOverallTitle:"為何漲／為何跌",soxlWhyUp:"偏多時常見原因",soxlWhyDown:"偏空時常見原因",soxlRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",soxlLoadError:"無法載入 SOXL 桌面（{msg}）",navPodcasts:"名人podcast",podcastsTitle:"名人podcast",podcastsLead:"精選投資人／主持人公開訪談與 Podcast 框架整理：可掃讀論點、市場分欄、候選狀態標示清楚——非投資建議。",podcastsDisclaimer:"非投資建議。本區整理公開訪談與研究書庫已有資料；數字與做法標示來源，不構成個人化建議。數學閘門未通過者僅候選／觀察。",podcastsFeatured:"精選",podcastsStubBadge:"候選摘要",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（謝孟恭）",podcastsGooayeLead:"台灣市場／總經／風險／散戶心理 Podcast；集數重點整理自公開 RSS 節目指引（非逐字稿、非投資建議）。",podcastsGooayeMarket:"以台股為主 · 美／台分欄",podcastsGooayeStubNote:"輕量 stub：完整條目與可計算規則在研究書庫；此處不發明集數引言。",podcastsGooayePoint1:"先管風險與部位，再談單一標的故事",podcastsGooayePoint2:"護國神山供應鏈用籃子強弱看，不單壓一檔",podcastsGooayePoint3:"美股用利率方向當風險偏好代理；台股另算",podcastsGotoResearch:"到研究書庫看完整條目",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"分類選單",podcastsCategories:"名人podcast分類",podcastsMenuLead:"先選分類再進入內容——不把長文全部攤在同一頁。",podcastsOpenCategory:"開啟此分類",gooayeLibraryBadge:"集數庫",gooayeDisclaimer:"候選／觀察。重點整理僅來自公開 RSS 標題與節目指引（已去掉廣告樣板）；無逐字稿、不發明引言或數字。非投資建議。",gooayeLoading:"載入股癌集數庫…",gooayeLoadError:"無法載入集數庫（{msg}）",gooayeEpisodeCount:"共 {n} 集（公開 RSS）",gooayeAsOf:"資料截至 {date}（台北）",gooayeEmptyCount:"其中 {n} 集公開文字不足，僅列標題",gooayeSearchLabel:"搜尋集數",gooayeSearchPlaceholder:"標題、集數或關鍵字",gooayeSourceLine:"來源：",gooayeKeyPoints:"重點整理",gooayeNotesThin:"公開節目指引幾乎只有標題／短語，無更多可整理文字。",gooayeTeaserNote:"公開 show notes 偏短（常見為開場短語＋廣告）；以上僅整理可用的公開文字，未聽音檔、未發明內容。",gooayeListen:"收聽（SoundOn）",gooayeLoadMore:"再顯示 {n} 集（尚餘 {left}）",gooayeShowingAll:"已顯示全部 {n} 集",gooayeNoResults:"沒有符合的集數。",gooayeUntitled:"未命名集數",researchCatMenu:"分類選單",researchCategories:"研究分類",researchMenuLead:"先選類型／市場／狀態，再瀏覽該分類條目。",researchOpenCategory:"開啟此分類",researchCatBooks:"書籍",researchCatPapers:"論文",researchCatPodcasts:"Podcast",researchCatUs:"美股焦點",researchCatTw:"台股焦點",researchCatCandidate:"候選",researchCatWatch:"觀察中",researchBackMenu:"回分類選單",researchStatusFilters:"狀態",godzillaTitle:"哥吉拉",godzillaLead:"Threads 受訪者「哥吉拉」的美股框架整理：時間與健康、RSU 再配置、基本面、能力圈、稅務節奏、選擇權工具——白話卡片，非投資建議。",godzillaDisclaimer:"非投資建議。整理自公開訪談；數字與做法標示為受訪者自述，不構成個人化建議。數學閘門未通過，僅候選／觀察。",godzillaHeroLabel:"哥吉拉框架總覽",godzillaKicker:"候選框架 · 美股為主",godzillaTagline:"用健康的時間換自由；長股為核、選擇權為輔；稅務決定換倉節奏。",godzillaBadgeCandidate:"候選",godzillaBadgeWatch:"觀察中",godzillaUsFocus:"以美股為主",godzillaSelfReport:"受訪者自述",godzillaSourceLabel:"來源",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"觀看 YouTube 訪談",godzillaThesesTitle:"核心論點",godzillaThesesLead:"十條可掃讀重點；細節皆為受訪者自述。",godzillaThesis1Title:"時間與健康重於再堆 RSU",godzillaThesis1Body:"退休目標常會膨脹（例如自述從約 3,000 萬美元調到 6,000 萬，再加上住房與子女）；停下來往往是身體撐不住。用健康的 40 多歲換旅行與自由，和 50–60 歲很不一樣。",godzillaThesis2Title:"美股 RSU 改變誘因",godzillaThesis2Body:"四年歸屬、與公司利益綁在一起；對比台股現金獎金較少用來買自家股票。",godzillaThesis3Title:"歸屬當日賣出、轉到信念標的",godzillaThesis3Body:"既得 RSU 當日賣出，再配置到有信念的名字（其例：NVDA），避免薪水＋未歸屬全押同一籃。",godzillaThesis4Title:"只看基本面",godzillaThesis4Body:"看營收／EPS 趨勢；忽略華爾街目標價；新聞噪音多半有害。",godzillaThesis5Title:"能力圈：硬體／科技",godzillaThesis5Body:"能力圈在硬體與科技——NVDA 權重最高；亦提 PLTR、AVGO、TSM；很少碰科技外。指數部位現在較小，終局想像多數在指數。",godzillaThesis6Title:"稅務決定換倉節奏",godzillaThesis6Body:"高 W2 收入時資本利得稅重；離職後可多年把個股輪換成指數、把稅負控在可接受範圍；賣出 Covered Call 可緩衝下跌。",godzillaThesis7Title:"選擇權是工具",godzillaThesis7Body:"多半當卖方（Covered Call／Cash-secured Put）；少數做多買權／LEAP，僅在恐慌或價格與基本面背離時；接受權利金可能歸零；從不裸賣。",godzillaThesis8Title:"Covered Call：被指派就延後",godzillaThesis8Body:"有被指派風險就往後換月（roll out）；不要為了小權利金去履約或賣掉核心持股；不舒服就少賣合約。",godzillaThesis9Title:"進場等趨勢",godzillaThesis9Body:"等 1–2 次乾淨財報確認趨勢，即使成本墊高也接受；有閒錢就持續買好公司；不追熱門明牌。",godzillaThesis10Title:"美／台觀察分欄",godzillaThesis10Body:"美股資本利得稅→傾向抱更久；台股無資本利得＋有證交稅→周轉較高、投機文化較重（僅觀察，非操作指令）。",godzillaChecklistTitle:"作法清單",godzillaChecklistLead:"可執行的自我檢查，不是下單清單。",godzillaCheck1:"物慾低；別讓「夠了」的數字一直往上漲。",godzillaCheck2:"長股為核心；選擇權是衛星／避險／偶爾槓桿。",godzillaCheck3:"部位：不借錢；接受不了歸零，就別碰選擇權。",godzillaCheck4:"選擇權優先流動性高的大型股。",godzillaCheck5:"終局配置草圖：約 80% 寬基指數，小袖口參與產業（＋偶爾小額買權）。",godzillaCheck6:"PLTR 例子：B2B 靠前線工程師變現；若商業成長失望就減碼。",godzillaOptionsTitle:"選擇權用法",godzillaOptionsLead:"卖方為主；买方極少、僅在極端偏離時。",godzillaOpt1:"主力：Covered Call、Cash-secured Put。",godzillaOpt2:"小部位長買權／LEAP：恐慌或價格脫離基本面時。",godzillaOpt3:"權利金可全部虧完；從不裸倉。",godzillaOpt4:"被指派風險：往後換月；核心持股不為小權利金賣出。",godzillaRsuTitle:"RSU、稅務與輪換",godzillaRsuLead:"誘因、分散與離職後的稅務節奏。",godzillaRsu1:"歸屬當日賣出 RSU，再配置到信念標的（例：NVDA）。",godzillaRsu2:"在職高稅負時少動大額已實現利得；離職後多年輪換個股→指數。",godzillaRsu3:"Covered Call 作為下跌緩衝，不是賭方向。",godzillaTwTitle:"台股觀察",godzillaTwLead:"與美股框架分開；僅文化／稅制觀察。",godzillaTwBody:"美股有資本利得稅，傾向長期持有；台股無資本利得稅、有證交稅，周轉與短線文化較明顯。此頁主軸仍是美股框架，台股僅作對照，不寫進正式篩選。",godzillaGateNote:"尚未寫進正式篩選",godzillaGateDetail:"狀態：候選／strategyCandidate=watch。數學閘門關閉——未接入即時篩選器或模擬交易；僅供閱讀與對照。",jensenTitle:"黃仁勳／Jensen Huang",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公開演講整理：視角、需求與摩爾定律、文化、現金現實、再發明——候選／觀察，非投資建議。",jensenDisclaimer:"非投資建議。整理自 Stanford Online 公開演講（約 2009；YouTube 2011 上傳）；論點來自講者自述主題，不構成個人化建議。數學閘門未通過，僅候選／觀察。",jensenHeroLabel:"黃仁勳演講重點",jensenKicker:"候選演講 · 美股科技／半導體創業",jensenTagline:"視角勝過空泛「願景」；用文化與再發明撐住長週期公司建設。",jensenUsFocus:"以美股／科技為主",jensenTalkBadge:"公開演講",jensenMeta:"Stanford Online · STVP ETL · 約 1:03:38 · 上傳 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"觀看 YouTube 演講",jensenOpenYoutube:"在 YouTube 開啟完整影片",jensenEmbedTitle:"Jen-Hsun Huang：Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 相關剪輯",jensenHighlightsTitle:"演講重點（白話）",jensenHighlightsLead:"五條可掃讀主題；僅整理公開演講中反覆出現的論點，非逐字稿。",jensenH1Title:"視角，而非空泛「願景」",jensenH1Body:"人人都有視角。NVIDIA 早期押注：個人電腦加上便宜的 3D 會打開遊戲市場（後來也談到 Keyhole→Google Earth），當時對許多 VC 而言市場幾乎是零。",jensenH2Title:"無窮需求與摩爾定律",jensenH2Body:"新類別尚未被定價時，有時要暫時忽略顧客回饋；先 rinse-and-repeat，再在「夠好」扼殺媒介前重新發明（固定功能→可程式著色器／GeForce FX 近死經驗、CG 語言）。",jensenH3Title:"文化：敢冒算過的風險",jensenH3Body:"創新需要計算過的風險、容忍快速失敗、智識誠實、願意改道；動機是熱情與目的，而非「把公司賣掉」。",jensenH4Title:"現金與新創現實",jensenH4Body:"永遠在募資、省錢或賺錢；新創幾乎總是瀕臨倒閉。VC 更押人與夠大的市場，而非完美商業計畫。",jensenH5Title:"再發明：成功也要拆掉重建",jensenH5Body:"每一次成功終須拆解再建；黃仁勳談的是長視野公司建設，不是連續翻轉出場。",jensenTwTitle:"美／台分欄（僅脈絡）",jensenTwLead:"本條目市場主軸為美股科技／半導體公司建設；台灣僅作供應鏈脈絡，不發明台股標的。",jensenTwBody:"NVDA 作為美股半導體／運算平台公司，供應鏈與台灣晶圓製造、封測生態高度相關——此處僅作產業脈絡註記，不列台股清單，也不寫進正式篩選。",jensenGateNote:"尚未寫進正式篩選",jensenGateDetail:"狀態：候選／strategyCandidate=watch。數學閘門關閉——未接入即時篩選器或模擬交易；僅供閱讀與對照。",jensenWatchCta:"在 YouTube 觀看",jensenEmbedBlockedNote:"此演講由擁有者設定為僅能在 YouTube 觀看（無法於本站內嵌播放）。",optionsTitle:"美股選擇權",optionsLead:"以 McMillan《選擇權策略完全手冊》策略族為主：先看波動與風險形狀，再用公開 Yahoo 鏈結學習——非投資建議。",optionsDisclaimer:"非投資建議；選擇權風險高。僅供教育與公開數據篩選，不構成個人化下單建議。",optionsBookBadge:"這本書",optionsBookCite:"主要參考書",optionsBookLead:"Lawrence G. McMillan《選擇權策略完全手冊》增訂第五版：依看法與波動高低對應策略族（原創摘要，非原文）。",optionsBookFallbackTitle:"選擇權策略完全手冊（McMillan）",optionsGotoResearch:"到研究書庫看完整條目",optionsUsOnly:"僅美股",optionsQualityTitle:"標的輕量財報檢核",optionsQualityLead:"次要濾網：本益、淨值、負債、ROE、營收／獲利趨勢。缺欄略過；不作薦股。",optionsViewTitle:"選擇權觀點（McMillan）",optionsViewLead:"公開期權鏈：ATM 隱含波動、歷史波動、量能偏向；策略族為教育說明。",optionsMcmillanFirst:"先對齊波動高低與風險形狀，再想策略族——不是先猜漲跌再硬套。",optionsPe:"本益比",optionsPb:"股價淨值",optionsDebt:"負債／權益",optionsRoe:"ROE",optionsRevTrend:"營收趨勢",optionsEarnTrend:"獲利趨勢",optionsGate:"品質閘",optionsGatePass:"通過",optionsGateWatch:"觀察",optionsGateFail:"偏弱",optionsGateIncomplete:"資料不足",optionsDataMissing:"資料不足",optionsForwardPe:"預估本益",optionsTrendUp:"成長約 {pct}%",optionsTrendDown:"下滑約 {pct}%",optionsTrendFlat:"大致持平 {pct}%",optionsAtmIv:"ATM 隱含波動",optionsHv:"歷史波動（約 1 月）",optionsIvHv:"IV／HV",optionsVolRegime:"波動狀態",optionsRegimeIvRich:"隱含偏高",optionsRegimeIvCheap:"隱含偏低",optionsRegimeIvFair:"大致均衡",optionsRegimeIvOnly:"僅有 IV",optionsCallPutVol:"買權／賣權成交量",optionsAtmStrike:"近價履約價",optionsExpiry:"到期日",optionsSkewPutHeavy:"賣權量較重",optionsSkewCallHeavy:"買權量較重",optionsSkewBalanced:"量能大致均衡",optionsEduSetups:"策略族（教育）",optionsEduSetupsLead:"依看法＋波動狀態挑選家族；綠底表示較常對齊目前 IV／HV 狀態（仍非建議）。",optionsSetupCoveredCall:"備兌買權（Covered Call）",optionsSetupCoveredCallBody:"已持有股票時賣出買權，換取權利金；上漲空間被履約價「蓋住」。",optionsSetupCoveredCallWarn:"最大利潤有天花板；大跌時股票虧損仍在。",optionsSetupProtectivePut:"保護性賣權（Protective Put）",optionsSetupProtectivePutBody:"持股同時買進賣權，像買保險：下跌有地板，但要付保費。",optionsSetupProtectivePutWarn:"保險成本會吃掉報酬；若波動已很貴，保費更痛。",optionsSetupVertical:"垂直價差（Vertical）",optionsSetupVerticalBody:"同到期、不同履約價的買權或賣權組合，把最大損益框在可計算區間。",optionsSetupVerticalWarn:"方向看錯仍會虧；好處是虧損有上限。",optionsSetupCalendar:"日曆／對角價差（Calendar / Diagonal）",optionsSetupCalendarBody:"不同到期的選擇權組合，常用來表達「時間流逝」或波動變化看法。",optionsSetupCalendarWarn:"對波動與時間敏感；形狀會隨市價移動改變。",optionsSetupStraddle:"跨式／勒式（Straddle / Strangle）",optionsSetupStraddleBody:"同時買（或賣）買權與賣權，押「大波動」或「波動不夠」。",optionsSetupStraddleWarn:"買方需要夠大的移動；賣方面臨兩側風險。",optionsSetupButterfly:"蝶式（Butterfly）",optionsSetupButterflyBody:"多履約價組合，押價格收斂在中間附近；利潤區通常很窄。",optionsSetupButterflyWarn:"甜蜜點很窄；錯過中間就可能接近最大虧損。",optionsSetupVolAligned:"與目前波動狀態較常一起討論",optionsSetupVolNotAligned:"與目前波動狀態較不契合（仍可學習）",optionsRiskShape:"風險形狀（白話）",optionsNoSetups:"暫無策略族說明",optionsPickTicker:"請選擇上方美股代碼",optionsChainBlocked:"期權鏈暫時無法取得",optionsPartialBlocker:"部分欄位不完整",optionsRefreshHow:"資料會隨站點更新；若畫面異常請稍後再試。",optionsLoadError:"無法載入選擇權快照（{msg}）",optionsEmpty:"尚無美股樣本——請先跑 fetch-us-options",optionsGlossaryTitle:"小詞典（不用公式）",optionsTermDelta:"Delta（方向敏感度）",optionsDefDelta:"價格漲跌時，選擇權大概會跟多少。數字愈靠近 1 或 −1，跟現貨愈緊。",optionsTermIv:"隱含波動 IV",optionsDefIv:"市場「現在願意付多少保費」換算成的波動預期。愈高通常選擇權愈貴。",optionsTermHv:"歷史波動 HV",optionsDefHv:"過去一段時間股價實際晃動有多大，用來和 IV 對照。",optionsTermAtm:"ATM（近價）",optionsDefAtm:"履約價最靠近現價的合約，常拿來當波動溫度計。",optionsTermSkew:"量能偏向",optionsDefSkew:"買權與賣權成交量誰比較多，粗看市場偏保險還是偏追漲。",optionsTermProb:"機率（教育）",optionsDefProb:"只談「比較可能／比較少見」的直覺，不保證結果，也不給個人化勝率。",researchLead:"書單與論文：標題 → 摘要 → 重點作法 → 是否納入策略候選",researchMathGateBanner:"正式納入策略需數學閘門通過（目前未過）— 僅候選",researchMathGate:"數學閘門",researchMathGateDefault:"尚未通過數學閘門",researchFormulas:"可程式化公式",researchTakeaways:"重點作法",researchNoTakeaways:"尚無重點作法",researchSources:"來源",researchFilters:"篩選",researchFilterAll:"全部",researchType:"類型",researchTypeBook:"書籍",researchTypePaper:"論文",researchTypePodcast:"Podcast",researchMarketBoth:"美＋台",researchStrategy:"策略候選",researchCandYes:"候選納入",researchCandNo:"不納入",researchCandWatch:"觀察中",researchStatusCandidate:"候選",researchStatusDeferred:"暫緩",researchStatusAdopted:"已納入",researchStatusRejected:"排除",researchCounts:"書籍 {books} · 論文 {papers} · Podcast {podcasts} · 顯示 {total}",researchEmpty:"此篩選條件下暫無項目",researchNoFormulas:"尚無公式條目",researchLoadError:"無法載入研究庫（{msg}）",researchShelfFilters:"書架分類",researchShelfCoreInvesting:"核心投資經典",researchShelfValueInvesting:"價值型投資",researchShelfBusiness:"商業管理與商界視角",researchShelfLifePartner:"人生智慧與合夥人思想",researchShelfOptions:"選擇權／衍生品",researchShelfRecentReads:"近期閱讀與推薦書",researchShelfFiConcepts:"必看財商觀念書",researchShelfMoneyValues:"理財與金錢價值觀",researchShelfInvestingBasics:"投資理財入門",researchShelfAssetAllocation:"資產配置",researchShelfFinancials:"財報分析",researchShelfMarketAnalysis:"投資分析與戰勝市場",researchShelfEconAnalysis:"經濟分析",researchShelfPsych:"投資心理／隨機性／人性",researchShelfBiographies:"名人傳記",researchShelfAdjacent:"其他／隣接",todayPicks:"今日選股",market:"市場",hot:"熱門",marketQuotes:"市場報價",macroTitle:"美股大事",macroTzEt:"時間・美東 ET",macroAsOf:"更新",macroStale:"資料偏舊（仍顯示上次成功抓取）",macroToday:"今日",macroNext:"即將",macroHighImpact:"高影響",macroEmpty:"近期無高影響美股大事（或資料尚未更新）",macroLoadError:"無法載入美股大事（{msg}）",macroEvent_fomcDecision:"FOMC 利率決議",macroEvent_fomcMinutes:"FOMC 會議紀要",macroEvent_cpi:"CPI 通膨",macroEvent_ppi:"PPI 生產者物價",macroEvent_pce:"PCE／核心 PCE",macroEvent_nfp:"非農就業 NFP",macroEvent_joblessClaims:"初請失業金",macroEvent_gdp:"GDP",macroEvent_retailSales:"零售銷售",macroEvent_ismMfg:"ISM 製造業",macroEvent_ismServices:"ISM 服務業",macroEvent_jolts:"JOLTS 職缺",usStock:"美股",twStock:"台股",usList:"美股清單",twList:"台股清單",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暫無 Top 候選",ticker:"代碼",name:"名稱",price:"價格",dayPct:"日漲跌",rs:"RS",priorClose:"前收",priorCloseFull:"前收漲幅",pct5d:"5 日",pct1m:"約 1 月",volRatio:"量比",ma:"均線",screening:"篩選",reason:"理由",details:"詳情",business:"本業",risk:"風險",observe:"觀察",dataIncomplete:"資料不全",intraday:"盤中",taipeiClose:"台北收",adr:"ADR",parity:"平價",implied:"隱含價",premium:"溢價",adsRatio:"換股比",taiex:"台灣加權 TAIEX",otc:"櫃買",spx:"S&P 500",nasdaq:"Nasdaq",sox:"SOX",usdtwd:"USD/TWD",loadError:"無法載入資料（{msg}）。請確認以靜態伺服器開啟，且 data/latest.json 存在。",langLabel:"語言",paper:"模擬",paperMissing:"尚無模擬帳本檔案。請於專案執行 npm run paper。",paperDisclaimer:"累積模擬帳戶（自 {date} 起） · 不會每日歸零 · 買進即成交 · 非真實下單",paperRules:"規則（各市場獨立帳）",paperRuleTw:"台股本金 NT$3,000,000 · 整張成交",paperRuleUs:"美股本金 US$100,000 · 可買 1 股起",paperRuleBuy:"買：該市場名單·風險1%·停距1.5%·單檔≤8% · 即成交",paperRuleSell:"賣：停損−3% · 停利+12%半倉 · 破SMA20且日跌>2% · 離名單虧損 · 漲停隔日−5%",paperTabTw:"台股帳 · NT$",paperTabUs:"美股帳 · US$",paperBookTw:"台股帳本（NT$）",paperBookUs:"美股帳本（US$）",principal:"本金",cash:"現金",equity:"權益（部位＋現金）",totalPnl:"總損益",totalPnlPct:"總損益 ％",weekPerf:"週績效",monthPerf:"月績效",quarterPerf:"季績效",yearPerf:"年績效",sinceInception:"成立以來",noTradesToday:"本日尚無此類成交（模擬）",noPositions:"目前沒有持股",buy:"買",sell:"賣",shares:"股",qtyShares:"股數",positions:"目前部位",position:"部位",avgCost:"成本",mark:"現價",mktValue:"市值",dayPnl:"日損益",costBasis:"成本合計",weightPct:"權重 ％",posScrollHint:"左右滑動看全部欄位",unrealizedPnl:"未實現損益",unrealizedPct:"未實現 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累積 · 買進即成交",reasonScreenBuy:"名單新開倉",reasonAdd:"持續買進",reasonStop:"停損",reasonTakeProfit:"停利",reasonMomentumBreak:"動能轉弱",reasonOffList:"離開名單",reasonLimitUpChase:"漲停追價急殺",stopLoss:"停損",takeProfit:"停利",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"績效",qty:"數量",note:"說明",strategyScreen:"策略選股",strategyLead:"台／美命中分開檢視 · 公開資料命中優先",strategyLoading:"載入策略結果中…",strategyEmpty:"尚無策略資料。請執行 npm run strategies。",strategyLoadError:"無法載入策略選股（{msg}）。請確認已執行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分類",hitCount:"檔命中",hitTitle:"命中檔數",strategyDetails:"詳情 · 策略說明",conditions:"條件",results:"篩選結果",copyJson:"複製 JSON",exportCsv:"匯出此策略 CSV",exportJson:"匯出 JSON",copied:"已複製",noHitsExport:"此策略今日無命中列可匯出",incomplete:"不足",hitsTotal:"共{n}檔",twOnlyHint:"本策略僅台股",hitMarket:"命中市場",noHits:"本日無命中",dataInsufficient:"資料不足",calibTitle:"校準說明",incompleteFilters:"未檢查濾網（不算通過）：",sessionTwse:"證交所 session",ohlcvBar:"OHLCV K棒",generated:"產生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精選",cat價量:"價量",cat籌碼:"籌碼",cat財務:"財務",cat大師:"大師",cat週期:"週期",cat技術:"技術",cat基本:"基本",cat綜合:"綜合",addWatchlist:"加入自選",watchlistAdded:"已加入自選 {ticker}",watchlistExists:"{ticker} 已在自選",copyFailed:"複製失敗（請手動選取）",csvDownloaded:"已下載 CSV",csvBlocked:"下載被擋：改以資料連結開啟",backtestSoon:"回測：尚未開放",backtestHint:"回測：資料／引擎尚未開放（不提供假回測）",regimeToday:"今日市場週期（美／台分開）",psychologyPhase:"心理相位",cycleStance:"週期姿態",liquidityBias:"流動性偏誤",temperatureScore:"市場溫度",sizeMult:"部位乘數",regimeTags:"週期標籤",dataGaps:"資料缺口",marketRegime:"市場週期",enum_euphoric:"亢奮",enum_late_optimism:"晚期樂觀",enum_mid_cycle:"中期",enum_cautious_recovery:"謹慎復甦",enum_despondent:"絕望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精選",enum_balanced:"均衡",enum_constructive:"偏建設",enum_aggressive:"積極",enum_stabilize_first:"先求穩",enum_risk_off:"偏防守",enum_risk_on:"偏進攻",enum_neutral:"中性",logicTitle:"選股邏輯",logicSubtitle:"政權→篩選→策略→降權→理由→部位：可稽核的數學流程",logicNoRegime:"尚無市場週期資料（待下次掃描寫入）。",logicStep1:"市場週期（Regime）",logicStep1Lead:"先定美／台獨立姿態，再篩個股。Kostolany 心理相位 × Marks 溫度 × 利率流動性。",logicStep1Caption:"相位 → 篩選姿態 → 部位乘數（STANCE_SIZE_MULT）",logicRatesR2:"R2：美債 ^TNX 20 日上升 ≥ +0.25pp → 流動性偏防禦（即使價趨勢仍中性）。",logicRatesR3:"R3：60 日殖利率下降 ≤ −0.25pp → 允許較積極姿態（非亢奮）。",logicRatesSeparate:"硬規則：dial_US 與 dial_TW 分開；不混成「全球心情」。",logicStep2:"數學篩選（A／B）",logicStep2Lead:"相對強度、動能、SMA、量比；門檻依週期姿態調整。",logicScreenA:"篩選 A · 動能／相對強度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日漲≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或雙均線且 5日≥0／RS≥0。",logicScreenASelective:"精選：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量視為可過）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"積極／偏建設：放寬 RS／日／5日／1月；允許 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建設另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求穩：須站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌後先穩定）。",logicScreenB:"篩選 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。門檻：防守 ≥1.0；積極 ≥1.1；其餘 ≥1.2。",logicScreenBMom:"補標 A：若未過 A，但 1月≥8% 且 SMA20＋SMA50（非先求穩）→ 仍標 A。",logicScore:"排序分數",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加權（上限約 8×0.6）；量比<0.4 −0.5；再依市場週期調整分數。",logicStep3:"XQ 策略選股",logicXqLead:"與每日名單並行：條件式命中（價量／籌碼／財務／大師／週期）。缺公開欄位則略過該條件，不捏造。",logicXqPriceVol:"價量：均線多頭、超短線作多等（OHLCV 實算）。",logicXqFlow:"籌碼：法人同步等（公開張數門檻）。",logicXqFund:"財務：獲利遞增、PE／營益率等公開財報欄。",logicXqMasters:"大師：林區／葛拉罕／巴菲特等可計算代理條件。",logicXqCycle:"週期：科斯托拉尼／市場週期包（依當日美台姿態）。",logicOpenStrategies:"開啟策略頁",logicStep4:"排序降權／加權",logicStep4Lead:"scoreAdjust：依姿態對高 RS 縮量、firm-hands、恐慌穩定做加減分。",logicDemoteHot:"防守／精選：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日漲>2% → −1.2；缺雙均線 −1.5。",logicDemoteThin:"K5：高相對強度但量能不足 → 降權／排除積極桶。",logicPromoteFirm:"aggressive／constructive：價弱量增且 SMA200（firm-hands）→ +2.2；早段放量上漲 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；站上 SMA20 才 +1.5。",logicListSize:"名單長度：防守 ≈0.55×；精選 ≈0.75×；先求穩 ≈0.45×；積極 +2（上限14）；基準 12。",logicStep5:"「為什麼」如何組成",logicStep5Lead:"why 欄為可讀摘要，非模型黑箱——由當日可驗證欄位串接。",logicWhyRs:"日漲跌 + 相對指數（美：S&P；台：加權）pp。",logicWhyMom:"五日%、約一個月%。",logicWhyVol:"量比≥1.2 才寫入量能句。",logicWhySma:"SMA20／50／200 站上狀態（雙均線優先）。",logicWhyRegime:"附加週期備註或姿態／心理相位標籤。",logicStep6:"紙上部位紀律",logicStep6Lead:"模擬帳驗證流程；非實單。部位受週期部位乘數與固定風險公式約束。",logicPaperCapital:"本金：台股 NT$3,000,000（整張）；美股 US$100,000（1 股起）。",logicPaperBuy:"買：名單（純 observe 盡量不買）；風險＝權益×1%；停距≈價×1.5%（量比≥3→2.5%）；單檔≤權益 8%。",logicPaperSizeMult:"部位乘數（0.3–1.35×）標示當日建議積極度；與名單長度連動。",logicPaperSell:"賣：停損 −3%；停利 +12% 半倉；破 SMA20 且日跌>2%；離名單且虧損；漲停風格隔日 −5%。",logicOpenPaper:"開啟模擬頁",logicFootnote:"框架合成僅供透明篩選說明，非投資建議。公開作者方法之可編碼代理；不重製受著作權保護之原文。",sma20:"SMA20",sma50:"SMA50",screenA:"A",screenB:"B",screenC:"C",condPass:"條件",condFail:"未過",condSkip:"略過",pe:"本益比",opMargin:"營益率",grossMargin:"毛利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自營商",maBull:"均線多頭",rsi:"RSI",amplitude:"振幅",zhang:"張",limitUp:"漲停",momentum:"動能",metricPrice:"價格",metricDayPct:"日漲跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(張)",metricDebt:"負債比%",metricDirector:"董監持股%",metricOpQ:"近季營益率%",metricSource:"來源",foreign1d:"外資1日(張)",trust1d:"投信1日(張)",dealer1d:"自營商1日(張)",foreign5d:"外資5日(張)",trust5d:"投信5日(張)",dealer5d:"自營5日(張)"},Aa={...Fe,siteTitle:"Daily Quant Picks",loading:"Loading…",disclaimer:"Investing involves risk. For reference only — not investment advice.",footer:"Investing involves risk. For reference only — not investment advice.",dataAsOf:"As of",taipei:" (Taipei)",navMain:"Main navigation",navToday:"Today",navStrategies:"Strategies",navPaper:"Paper",navMore:"More",navMoreClose:"Close",navLogic:"Logic",researchTitle:"Research",navResearch:"Research",navOptions:"Options",navEarnings:"Earnings",earningsTitle:"Earnings",earningsLead:"US Magnificent 7 and high-attention earnings: what the company does, key numbers, what to watch next — plain language, daily refresh. Not investment advice.",earningsDisclaimer:"Not investment advice. Figures from public Yahoo Finance; missing fields show as data unavailable — not personalized advice.",earningsUsFocus:"US-focused",earningsTwStub:"Taiwan earnings coming later (stub)",earningsSelectionTitle:"Watchlist rule:",earningsSelectionFallback:"Largest non-Mag7 mega-caps with earnings in the next 14 days; or Yahoo most-actives; fill with calendar highlights within 45 days.",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL, MSFT, NVDA, AMZN, GOOGL/GOOG, META, TSLA — last report and next date when known.",earningsMag7Badge:"Mag7",earningsHotTitle:"High-attention earnings",earningsHotLead:"Picked by the rule above; badges explain why.",earningsHotEmpty:"No names match the current window (or data unavailable)",earningsWhatItDoes:"What they do",earningsWhatToWatch:"What to watch next",earningsNextDate:"Next report",earningsLastEps:"Last EPS",earningsRevYoy:"Revenue YoY",earningsEpsYoy:"Earnings YoY",earningsPe:"P/E",earningsForwardPe:"Forward P/E",earningsEstimate:"est.",earningsDataMissing:"Data unavailable",earningsTagPrimary:"14d · mega-cap",earningsTagActives:"Most actives · 14d",earningsTagRecent:"Recently reported",earningsTagFallback:"45d calendar highlight",earningsTagOther:"Watch",earningsPartialBlocker:"Partial data blocked",earningsRefreshHow:"Data updates with the site; try again shortly if something looks off.",earningsLoadError:"Could not load earnings digest ({msg})",earningsEmpty:"Earnings digest is being prepared. Check back shortly.",navLookup:"Lookup",lookupTitle:"Stock lookup",lookupLead:"Type a US or Taiwan ticker for company info, quote, earnings highlights, and official filings links — plain language; quotes from Yahoo, filings via SEC / MOPS. Not investment advice.",lookupDisclaimer:"Not investment advice. Quotes from public Yahoo Finance; official filing links go to SEC EDGAR / MOPS. Missing fields omitted, never invented. Live fetch may be limited by network or source.",lookupInputLabel:"Ticker",lookupPlaceholderUs:"e.g. AAPL",lookupPlaceholderTw:"e.g. 2330 or 2330.TW",lookupHintUs:"US: tickers like AAPL, MSFT, NVDA",lookupHintTw:"Taiwan: 4-digit codes like 2330 (.TW added; try .TWO for OTC)",lookupSearch:"Search",lookupIdle:"Enter a ticker and search to see quote and earnings highlights.",lookupLoading:"Fetching from Yahoo Finance…",lookupEmptyInput:"Please enter a ticker",lookupInvalid:"Unrecognized ticker. US e.g. AAPL; Taiwan e.g. 2330 or 2330.TW",lookupNotFound:"No quote for this ticker. Check US/TW tab and the symbol.",lookupError:"Lookup failed ({msg})",lookupBusiness:"What they do",lookupQuoteStats:"Quote & key stats",lookupFinancials:"Financials snapshot",lookupEarnings:"Earnings highlights",lookupPrevClose:"Prev close",lookupVolume:"Volume",lookupDayRange:"Day range",lookup52w:"52-week range",lookupMarketCap:"Market cap",lookupEps:"EPS (ttm)",lookupBeta:"Beta",lookupDivYield:"Div yield",lookupRevenue:"Revenue",lookupGrossMargin:"Gross margin",lookupProfitMargin:"Profit margin",lookupEpsConsensus:"EPS estimate",lookupEpsSurprise:"EPS surprise",lookupSources:"Sources",lookupPartial:"Some advanced fields unavailable (showing only fetched numbers).",lookupOfficialFilings:"Official filings",lookupOfficialFilingsLead:"Links to official filings and disclosures. For US names, recent 10-K / 10-Q / 8-K appear when publicly fetchable. No invented figures.",lookupSourceOfficial:"Official",lookupSourceQuote:"Quote source",lookupSourceCompany:"Company site",lookupSecEdgarSearch:"SEC EDGAR company filings search",lookupSecEdgarBrowse:"SEC EDGAR company browse page",lookupSecFormsFilter:"SEC 10-K / 10-Q filter",lookupMopsFinancialBook:"MOPS · Financial reports",lookupMopsFinancialQuery:"MOPS · Financial report query",lookupMopsCompany:"MOPS · Company profile",lookupMopsMaterial:"MOPS · Material information",lookupTwseIsin:"TWSE ISIN / basic search",lookupTpexCompany:"TPEx · Company page",lookupYahooTwQuote:"Yahoo Taiwan quote (market data, not official filings)",lookupCompanyWebsite:"Company website",lookupInvestorRelations:"Investor relations (public)",lookupRecentFilings:"Recent official filings",lookupFilingForm:"Form",lookupFilingDate:"Filed",lookupFilingDoc:"Document",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"Recent filings list could not be loaded (network or source limits).",lookupFilingsListEmpty:"No recent 10-K / 10-Q / 8-K to list right now.",lookupFilingsLinksStillWork:"Official links above still work.",lookupFilingsTwNote:"For Taiwan names, use MOPS as the official filings portal; quote links below are secondary.",lookupFilingsCikUnavailable:"Could not resolve SEC CIK yet; use EDGAR search by ticker above.",navSoxl:"SOXL",soxlTitle:"SOXL Semiconductor Desk",soxlLead:"Direxion Daily Semiconductor Bull 3X ETF: latest quote, events/anomalies, related news, and SEC N-PORT holdings with estimated contributions — plain language. Not investment advice.",soxlDisclaimer:"Not investment advice. SOXL seeks ~3× daily index performance and is extremely volatile; holdings weights are from SEC N-PORT (not same-day); contributions are estimates.",soxlHeroLabel:"SOXL latest quote",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"Regular close",soxlLeverageNote:"SOXL targets about 3× the ICE Semiconductor Index for a single day; overnight and multi-day results are not a simple 3×.",soxlHoldingsAsOf:"Holdings weights as of",soxlHoldingsNotSameDay:"latest N-PORT, not same-day",soxlEventsTitle:"Events / anomalies",soxlNewsTitle:"Related news",soxlNewsEmpty:"No related news yet.",soxlHoldingsTitle:"Holdings & estimated contribution",soxlHoldingsLead:"Weights from SEC N-PORT; cash and index swaps often dominate. Contribution ≈ weight × return (labeled estimate; not equal to 3× ETF points).",soxlHoldingsEmpty:"Holdings are being prepared. Check back shortly.",soxlColName:"Name",soxlColWeight:"Weight",soxlColReturn:"Return",soxlColContrib:"Est. contrib.",soxlColReasons:"Why it moved",soxlContributionHint:"Estimate = weight% × return% ÷ 100 (basket percentage points; SOXL is ~3× daily — not ETF points)",soxlSourceN:"Source {n}",soxlOverallTitle:"Why SOXL rises vs falls",soxlWhyUp:"What tends to lift it",soxlWhyDown:"What tends to weigh on it",soxlRefreshHow:"Data updates with the site; try again shortly if something looks off.",soxlLoadError:"Could not load SOXL desk ({msg})",navPodcasts:"Celebrity podcasts",podcastsTitle:"Celebrity podcasts",podcastsLead:"Notable investor and host frameworks from public interviews and podcasts: scannable theses, US/TW separation, candidate status labeled — not investment advice.",podcastsDisclaimer:"Not investment advice. Drawn from public interviews and existing research-library entries; figures cite sources. Math-gate-closed items stay candidate / watch only.",podcastsFeatured:"Featured",podcastsStubBadge:"Candidate stub",podcastsGodzillaHandle:"Godzilla · @godzilla.us",podcastsGooayeTitle:"Gooaye (Hsieh Meng-kung)",podcastsGooayeLead:"Taiwan markets / macro / risk / retail psychology podcast; per-episode key points from public RSS show notes (not transcripts; not investment advice).",podcastsGooayeMarket:"TW-focused · US/TW separate",podcastsGooayeStubNote:"Lightweight stub: full entry and computable packs live in Research. No invented episode quotes here.",podcastsGooayePoint1:"Risk and sizing first, ticker stories second",podcastsGooayePoint2:"Treat the semiconductor chain as a basket — not one hero name",podcastsGooayePoint3:"US: rate path as risk-on proxy; TW scored separately",podcastsGotoResearch:"Open full entry in Research",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"Categories",podcastsCategories:"Celebrity podcast categories",podcastsMenuLead:"Pick a category first — long essays stay off the landing page.",podcastsOpenCategory:"Open category",gooayeLibraryBadge:"Episode library",gooayeDisclaimer:"Candidate / watch. Key points come only from public RSS titles and show notes (sponsor boilerplate stripped). No transcripts; no invented quotes or numbers. Not investment advice.",gooayeLoading:"Loading Gooaye episodes…",gooayeLoadError:"Could not load episode library ({msg})",gooayeEpisodeCount:"{n} episodes (public RSS)",gooayeAsOf:"As of {date} (Taipei)",gooayeEmptyCount:"{n} episode(s) lack usable public text (title listed only)",gooayeSearchLabel:"Search episodes",gooayeSearchPlaceholder:"Title, episode no., or keyword",gooayeSourceLine:"Source:",gooayeKeyPoints:"Key points",gooayeNotesThin:"Public show notes are essentially title-only; nothing further to summarize.",gooayeTeaserNote:"Public show notes are thin (often a short hook plus ads). Above is only usable public text — no audio listen, nothing invented.",gooayeListen:"Listen (SoundOn)",gooayeLoadMore:"Show {n} more ({left} left)",gooayeShowingAll:"Showing all {n} episodes",gooayeNoResults:"No matching episodes.",gooayeUntitled:"Untitled episode",researchCatMenu:"Categories",researchCategories:"Research categories",researchMenuLead:"Pick type, market, or status first, then browse that shelf.",researchOpenCategory:"Open category",researchCatBooks:"Books",researchCatPapers:"Papers",researchCatPodcasts:"Podcasts",researchCatUs:"US focus",researchCatTw:"TW focus",researchCatCandidate:"Candidate",researchCatWatch:"Watch",researchBackMenu:"Back to categories",researchStatusFilters:"Status",godzillaTitle:"Godzilla",godzillaLead:"US-focused notes from Threads interviewee「哥吉拉」: time & health, RSU redeploy, fundamentals, circle of competence, tax pacing, options as tools — plain cards. Not investment advice.",godzillaDisclaimer:"Not investment advice. From a public interview; figures labeled interviewee self-report. Math gate closed — candidate / watch only.",godzillaHeroLabel:"Godzilla framework overview",godzillaKicker:"Candidate framework · US-focused",godzillaTagline:"Trade healthy years for freedom; long stock as core, options as satellite; tax sets rotation pace.",godzillaBadgeCandidate:"Candidate",godzillaBadgeWatch:"Watch",godzillaUsFocus:"US-focused",godzillaSelfReport:"Interviewee self-report",godzillaSourceLabel:"Source",godzillaSourceCite:"Terry × Godzilla",godzillaYoutube:"Watch YouTube interview",godzillaThesesTitle:"Core theses",godzillaThesesLead:"Ten scannable points; details are interviewee self-report.",godzillaThesis1Title:"Time & health over stacking more RSU",godzillaThesis1Body:"Retirement targets inflate (e.g. self-report $30M→$60M USD plus housing/kids); stopping often comes when the body fails. Using healthy 40s for travel/freedom differs from 50–60.",godzillaThesis2Title:"US RSU changes incentives",godzillaThesis2Body:"Four-year vest builds skin in the game vs TW cash bonuses that rarely buy the employer’s stock.",godzillaThesis3Title:"Sell vested RSU same day; redeploy",godzillaThesis3Body:"Sell vested RSU the same day and redeploy to a conviction name (his: NVDA) so salary + unvested aren’t one basket.",godzillaThesis4Title:"Fundamentals only",godzillaThesis4Body:"Revenue/EPS trend; ignore Wall Street targets; news noise mostly hurts.",godzillaThesis5Title:"Circle of competence: hardware/tech",godzillaThesis5Body:"Hardware/tech — NVDA largest; also PLTR, AVGO, TSM; little outside tech. Index sleeve small now; end-state mostly index.",godzillaThesis6Title:"Tax sets the pace",godzillaThesis6Body:"High W2 → heavy capital gains; after leaving the job, multi-year rotate singles → index within acceptable tax; covered calls buffer crashes.",godzillaThesis7Title:"Options as a tool",godzillaThesis7Body:"Mostly seller (CC / CSP); small long calls/LEAPs only in panic or price vs fundamentals divergence; accept total loss of premium; never naked.",godzillaThesis8Title:"Covered call: roll if assignment risk",godzillaThesis8Body:"If assigned risk, roll out in time; don’t exercise/sell core for tiny premium; sell fewer contracts if uncomfortable.",godzillaThesis9Title:"Wait for trend to enter",godzillaThesis9Body:"Wait for 1–2 clean earnings even if cost basis rises; keep buying good firms with spare cash; don’t chase hot tips.",godzillaThesis10Title:"US vs TW observation",godzillaThesis10Body:"US CG tax → hold longer; TW no CG + stamp tax → higher turnover / speculative culture (observation only).",godzillaChecklistTitle:"Method checklist",godzillaChecklistLead:"Self-checks, not an order ticket.",godzillaCheck1:"Low material desire; don’t let the “enough” number keep rising forever.",godzillaCheck2:"Long stock as core; options as satellite / hedge / occasional leverage.",godzillaCheck3:"Position size: no borrowing; if you can’t accept zero, don’t trade options.",godzillaCheck4:"Prefer liquid mega-caps for options.",godzillaCheck5:"End allocation sketch: ~80% broad index, small sleeve for industry (+ occasional small call).",godzillaCheck6:"PLTR example: B2B monetization via forward-deployed engineers; trim if commercial growth disappoints.",godzillaOptionsTitle:"Options usage",godzillaOptionsLead:"Seller-first; longs rare and only on extreme dislocation.",godzillaOpt1:"Core: covered calls and cash-secured puts.",godzillaOpt2:"Small long calls / LEAPs: panic or price vs fundamentals gap.",godzillaOpt3:"Premium can go to zero; never naked.",godzillaOpt4:"Assignment risk: roll out in time; don’t sell core for tiny premium.",godzillaRsuTitle:"RSU, tax & rotation",godzillaRsuLead:"Incentives, diversification, and post-job tax pacing.",godzillaRsu1:"Sell vested RSU same day; redeploy to conviction (e.g. NVDA).",godzillaRsu2:"While employed, avoid large realized gains; after leaving, multi-year singles → index.",godzillaRsu3:"Covered calls as crash buffer — not a directional bet.",godzillaTwTitle:"Taiwan market note",godzillaTwLead:"Separated from the US framework; tax/culture observation only.",godzillaTwBody:"US capital-gains tax encourages longer holds; TW has no CG tax plus stamp tax, so turnover and short-term culture run hotter. This page stays US-focused; TW is contrast only and not wired into the screener.",godzillaGateNote:"Not in the formal screener",godzillaGateDetail:"Status: candidate / strategyCandidate=watch. Math gate CLOSED — not wired into the live screener or paper trading; read-only.",jensenTitle:"Jensen Huang (黃仁勳)",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Notes from a Stanford STVP / Entrepreneurial Thought Leaders talk: perspective, demand & Moore’s law, culture, cash reality, reinvention — candidate / watch. Not investment advice.",jensenDisclaimer:"Not investment advice. From a public Stanford Online talk (~2009; YouTube upload 2011). Themes are speaker self-report. Math gate closed — candidate / watch only.",jensenHeroLabel:"Jensen Huang talk highlights",jensenKicker:"Candidate talk · US tech / semiconductors / company-building",jensenTagline:"Perspective over vague “vision”; culture and reinvention sustain long-horizon company-building.",jensenUsFocus:"US tech-focused",jensenTalkBadge:"Public talk",jensenMeta:"Stanford Online · STVP ETL · ~1:03:38 · uploaded 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"Watch on YouTube",jensenOpenYoutube:"Open full video on YouTube",jensenEmbedTitle:"Jen-Hsun Huang: Stanford student and Entrepreneur (Stanford Online)",jensenEcorner:"Stanford eCorner / STVP related clips",jensenHighlightsTitle:"Talk highlights (plain language)",jensenHighlightsLead:"Five scannable themes drawn only from the public talk — not a transcript.",jensenH1Title:"Perspective, not vague “vision”",jensenH1Body:"Everyone has a perspective. NVIDIA’s early bet: PCs plus cheap 3D would unlock games (later also Keyhole → Google Earth) when the market looked near-zero to many VCs.",jensenH2Title:"Insatiable demand and Moore’s law",jensenH2Body:"Sometimes ignore customers early when they can’t yet price a new category; rinse-and-repeat, then reinvent before “good enough” kills the medium (fixed-function → programmable shaders / GeForce FX near-death, CG language).",jensenH3Title:"Culture: calculated risk-taking",jensenH3Body:"Innovation needs calculated risk, tolerance for failure that fails fast, intellectual honesty, and willingness to change course; passion and purpose over selling-the-company motives.",jensenH4Title:"Cash and startup reality",jensenH4Body:"Always raising, saving, or making money; startups are nearly always near bankruptcy. VCs bet people and a large enough market more than perfect business plans.",jensenH5Title:"Reinvention: tear down success",jensenH5Body:"Every success must eventually be torn down and rebuilt; Huang frames long-horizon company-building, not serial flip exits.",jensenTwTitle:"US / TW separation (context only)",jensenTwLead:"Market focus is US tech / semiconductor company-building; Taiwan appears only as supply-chain context — no invented TW stock picks.",jensenTwBody:"NVDA as a US semiconductor / compute platform sits in a supply chain tightly linked to Taiwan foundry and OSAT ecosystems — industry context only; no TW ticker list and not wired into the screener.",jensenGateNote:"Not in the formal screener",jensenGateDetail:"Status: candidate / strategyCandidate=watch. Math gate CLOSED — not wired into the live screener or paper trading; read-only.",jensenWatchCta:"Watch on YouTube",jensenEmbedBlockedNote:"This talk opens on YouTube — the owner has disabled embedding on other sites.",optionsTitle:"US Options",optionsLead:"McMillan-style strategy families first: volatility + risk shape, then public Yahoo chains for learning — not investment advice.",optionsDisclaimer:"Not investment advice; options involve high risk. Educational public-data screens only — not personalized orders.",optionsBookBadge:"This book",optionsBookCite:"Primary reference",optionsBookLead:"Lawrence G. McMillan Options Strategies Handbook (5th Chinese ed.): map outlook + volatility to strategy families (original summary, not verbatim).",optionsBookFallbackTitle:"McMillan Options Strategies Handbook",optionsGotoResearch:"Open full entry in Research",optionsUsOnly:"US only",optionsQualityTitle:"Light underlying quality check",optionsQualityLead:"Secondary filter: PE, PB, debt, ROE, revenue/earnings trend. Missing fields omitted — not stock tips.",optionsViewTitle:"Options view (McMillan)",optionsViewLead:"Public chain: ATM IV, historical vol, volume skew; strategy families are educational.",optionsMcmillanFirst:"Align volatility regime and risk shape before picking a family — do not force a view.",optionsPe:"P/E",optionsPb:"P/B",optionsDebt:"Debt/Equity",optionsRoe:"ROE",optionsRevTrend:"Revenue trend",optionsEarnTrend:"Earnings trend",optionsGate:"Quality gate",optionsGatePass:"Pass",optionsGateWatch:"Watch",optionsGateFail:"Weak",optionsGateIncomplete:"Incomplete",optionsDataMissing:"Data unavailable",optionsForwardPe:"fwd P/E",optionsTrendUp:"Up ~{pct}%",optionsTrendDown:"Down ~{pct}%",optionsTrendFlat:"Flat ~{pct}%",optionsAtmIv:"ATM implied vol",optionsHv:"Historical vol (~1m)",optionsIvHv:"IV / HV",optionsVolRegime:"Vol regime",optionsRegimeIvRich:"IV rich",optionsRegimeIvCheap:"IV cheap",optionsRegimeIvFair:"Roughly fair",optionsRegimeIvOnly:"IV only",optionsCallPutVol:"Call / put volume",optionsAtmStrike:"Near ATM strike",optionsExpiry:"Expiry",optionsSkewPutHeavy:"Put volume heavier",optionsSkewCallHeavy:"Call volume heavier",optionsSkewBalanced:"Volumes roughly balanced",optionsEduSetups:"Strategy families (edu)",optionsEduSetupsLead:"Pick a family from outlook + vol regime; green cards often match current IV/HV (still not advice).",optionsSetupCoveredCall:"Covered call",optionsSetupCoveredCallBody:"Own shares and sell a call for premium; upside is capped at the strike.",optionsSetupCoveredCallWarn:"Profit ceiling; share downside remains.",optionsSetupProtectivePut:"Protective put",optionsSetupProtectivePutBody:"Own shares and buy a put as insurance: downside floor, but you pay a premium.",optionsSetupProtectivePutWarn:"Insurance cost reduces returns; richer IV makes it costlier.",optionsSetupVertical:"Vertical spread",optionsSetupVerticalBody:"Same expiry, different strikes — boxes max gain/loss into a known range.",optionsSetupVerticalWarn:"Wrong direction still loses; loss is capped.",optionsSetupCalendar:"Calendar / diagonal",optionsSetupCalendarBody:"Different expiries to express time decay or vol-change views.",optionsSetupCalendarWarn:"Sensitive to vol and time; shape shifts as spot moves.",optionsSetupStraddle:"Straddle / strangle",optionsSetupStraddleBody:"Long or short both sides to bet on a big move — or that vol is overpriced.",optionsSetupStraddleWarn:"Buyers need a large move; sellers face two-sided risk.",optionsSetupButterfly:"Butterfly",optionsSetupButterflyBody:"Multi-strike structure betting price pins near the body; profit zone is narrow.",optionsSetupButterflyWarn:"Sweet spot is thin; miss it and you near max loss.",optionsSetupVolAligned:"Often discussed with current vol regime",optionsSetupVolNotAligned:"Less aligned with current vol (still fine to learn)",optionsRiskShape:"Risk shape (plain)",optionsNoSetups:"No strategy notes yet",optionsPickTicker:"Pick a US ticker above",optionsChainBlocked:"Options chain temporarily unavailable",optionsPartialBlocker:"Some fields incomplete",optionsRefreshHow:"Data updates with the site; try again shortly if something looks off.",optionsLoadError:"Could not load options snapshot ({msg})",optionsEmpty:"No US sample yet — run fetch-us-options first",optionsGlossaryTitle:"Tiny glossary (no formulas)",optionsTermDelta:"Delta (direction feel)",optionsDefDelta:"How much the option tends to move when the stock moves. Closer to 1 or −1 means tighter tracking.",optionsTermIv:"Implied volatility (IV)",optionsDefIv:"What the market is pricing for future wobble — higher usually means pricier options.",optionsTermHv:"Historical volatility (HV)",optionsDefHv:"How much the stock actually moved recently — compare with IV.",optionsTermAtm:"ATM (near the money)",optionsDefAtm:"Strike closest to spot; a common volatility thermometer.",optionsTermSkew:"Volume skew",optionsDefSkew:"Whether calls or puts traded more — a coarse insurance vs chase hint.",optionsTermProb:"Probability (edu)",optionsDefProb:"Talk in ‘more/less common’ intuition only — no guaranteed outcomes or personal odds.",researchLead:"Books & papers: title → summary → key takeaways → strategy candidacy",researchMathGateBanner:"Formal strategy adoption requires the math gate (not passed yet) — candidates only",researchMathGate:"Math gate",researchMathGateDefault:"Math gate not passed",researchFormulas:"Programmable formulas",researchTakeaways:"Key takeaways",researchNoTakeaways:"No takeaways listed",researchSources:"Sources",researchFilters:"Filters",researchFilterAll:"All",researchType:"Type",researchTypeBook:"Books",researchTypePaper:"Papers",researchTypePodcast:"Podcasts",researchMarketBoth:"US+TW",researchStrategy:"Strategy candidate",researchCandYes:"Yes",researchCandNo:"No",researchCandWatch:"Watch",researchStatusCandidate:"Candidate",researchStatusDeferred:"Deferred",researchStatusAdopted:"Adopted",researchStatusRejected:"Rejected",researchCounts:"{books} books · {papers} papers · {podcasts} podcasts · showing {total}",researchEmpty:"No items match this filter",researchNoFormulas:"No formulas listed",researchLoadError:"Failed to load research library ({msg})",researchShelfFilters:"Shelves",researchShelfCoreInvesting:"Core investing classics",researchShelfValueInvesting:"Value investing",researchShelfBusiness:"Business & management",researchShelfLifePartner:"Life & partner wisdom",researchShelfOptions:"Options / derivatives",researchShelfRecentReads:"Recent reads & picks",researchShelfFiConcepts:"Must-read FI concepts",researchShelfMoneyValues:"Money values & mindset",researchShelfInvestingBasics:"Investing basics",researchShelfAssetAllocation:"Asset allocation",researchShelfFinancials:"Financial statement analysis",researchShelfMarketAnalysis:"Market analysis & edge",researchShelfEconAnalysis:"Economic analysis",researchShelfPsych:"Psychology / randomness / human nature",researchShelfBiographies:"Biographies",researchShelfAdjacent:"Other / adjacent",todayPicks:"Today's picks",market:"Market",hot:"Markets",marketQuotes:"Market quotes",macroTitle:"US market movers",macroTzEt:"Times · US ET",macroAsOf:"Updated",macroStale:"Stale (showing last successful fetch)",macroToday:"Today",macroNext:"Next",macroHighImpact:"High impact",macroEmpty:"No high-impact US events nearby (or data not refreshed yet)",macroLoadError:"Could not load US market movers ({msg})",macroEvent_fomcDecision:"FOMC decision",macroEvent_fomcMinutes:"FOMC minutes",macroEvent_cpi:"CPI",macroEvent_ppi:"PPI",macroEvent_pce:"PCE / Core PCE",macroEvent_nfp:"Nonfarm payrolls",macroEvent_joblessClaims:"Jobless claims",macroEvent_gdp:"GDP",macroEvent_retailSales:"Retail sales",macroEvent_ismMfg:"ISM Manufacturing",macroEvent_ismServices:"ISM Services",macroEvent_jolts:"JOLTS",usStock:"US",twStock:"TW",usList:"US list",twList:"TW list",usTop:"US Top",twTop:"TW Top",emptyTop:"No Top picks for {market}",ticker:"Ticker",name:"Name",price:"Price",dayPct:"Day %",rs:"RS",priorClose:"Prior close",priorCloseFull:"Prior-close %",pct5d:"5D",pct1m:"~1M",volRatio:"Vol ratio",ma:"MAs",screening:"Screen",reason:"Why",details:"Details",business:"Business",risk:"Risk",observe:"Watch",dataIncomplete:"Incomplete",intraday:"Intraday",taipeiClose:"Taipei close",adr:"ADR",parity:"Parity",implied:"Implied",premium:"Premium",adsRatio:"ADS ratio",taiex:"TAIEX",otc:"OTC",loadError:"Failed to load data ({msg}). Serve statically with data/latest.json present.",langLabel:"Language",paper:"Paper",paperMissing:"No paper portfolio file. Run npm run paper in the project.",paperDisclaimer:"Cumulative paper account (since {date}) · not reset daily · fills on signal · not real orders",paperRules:"Rules (separate books per market)",paperRuleTw:"TW principal NT$3,000,000 · round lots",paperRuleUs:"US principal US$100,000 · from 1 share",paperRuleBuy:"Buy: list · 1% risk · 1.5% stop · ≤8% per name · immediate fill",paperRuleSell:"Sell: −3% stop · +12% half take-profit · below SMA20 & day <−2% · off-list & losing · limit-up next-day −5%",paperTabTw:"TW book · NT$",paperTabUs:"US book · US$",paperBookTw:"TW book (NT$)",paperBookUs:"US book (US$)",principal:"Principal",cash:"Cash",equity:"Equity (positions + cash)",totalPnl:"Total P&L",totalPnlPct:"Total P&L %",weekPerf:"Week",monthPerf:"Month",quarterPerf:"Quarter",yearPerf:"Year",sinceInception:"Since inception",noTradesToday:"No trades of this type today (paper)",noPositions:"No open positions",buy:"Buy",sell:"Sell",shares:"sh",qtyShares:"Shares",positions:"Positions",position:"Position",avgCost:"Avg cost",mark:"Mark",mktValue:"Mkt value",dayPnl:"Day P&L",costBasis:"Cost basis",weightPct:"Weight %",posScrollHint:"Swipe for all columns",unrealizedPnl:"Unrealized P&L",unrealizedPct:"Unrealized %",recentTrades:"Trades (last 40)",paperSession:"{date} · since {inception} · fills on signal",reasonScreenBuy:"New from list",reasonAdd:"Add",reasonStop:"Stop-loss",reasonTakeProfit:"Take-profit",reasonMomentumBreak:"Momentum break",reasonOffList:"Off list",reasonLimitUpChase:"Limit-up chase unwind",stopLoss:"Stop-loss",takeProfit:"Take-profit",paperTrade:"Paper",realizedPnl:"P&L",periodPerf:"Performance",qty:"Qty",note:"Note",strategyScreen:"Strategy screener",strategyLead:"US / TW hits viewed separately · public data first",strategyLoading:"Loading strategies…",strategyEmpty:"No strategy data. Run npm run strategies.",strategyLoadError:"Failed to load strategies ({msg}). Run npm run strategies.",strategyList:"Strategies",strategyCat:"Categories",hitCount:"hits",hitTitle:"Hit count",strategyDetails:"Details · strategy notes",conditions:"Conditions",results:"Results",copyJson:"Copy JSON",exportCsv:"Export CSV",exportJson:"Export JSON",copied:"Copied",noHitsExport:"No hit rows to export for this strategy today",incomplete:"N/A",hitsTotal:"{n} hits",twOnlyHint:"TW only",hitMarket:"Hit market",noHits:"No hits today",dataInsufficient:"Insufficient data",calibTitle:"Calibration",incompleteFilters:"Unchecked filters (not counted): ",sessionTwse:"TWSE session",ohlcvBar:"OHLCV bar",generated:"Generated",universeTw:"TW universe",universeUs:"US universe",cat精選:"Featured",cat價量:"Price/Vol",cat籌碼:"Flow",cat財務:"Fundamentals",cat大師:"Masters",cat週期:"Cycle",cat技術:"Technical",cat基本:"Fundamentals",cat綜合:"Composite",addWatchlist:"Watchlist",watchlistAdded:"Added {ticker}",watchlistExists:"{ticker} already watched",copyFailed:"Copy failed — select manually",csvDownloaded:"CSV downloaded",csvBlocked:"Download blocked — opened data URI",backtestSoon:"Backtest: not open",backtestHint:"Backtest engine/data not available (no fake results)",regimeToday:"Today's market regime (US / TW separate)",psychologyPhase:"Psychology phase",cycleStance:"Cycle stance",liquidityBias:"Liquidity bias",temperatureScore:"Temperature score",sizeMult:"Size mult",regimeTags:"Regime tags",dataGaps:"Data gaps",marketRegime:"Market regime",enum_euphoric:"Euphoric",enum_late_optimism:"Late optimism",enum_mid_cycle:"Mid-cycle",enum_cautious_recovery:"Cautious recovery",enum_despondent:"Despondent",enum_panic:"Panic",enum_defensive:"Defensive",enum_selective:"Selective",enum_balanced:"Balanced",enum_constructive:"Constructive",enum_aggressive:"Aggressive",enum_stabilize_first:"Stabilize first",enum_risk_off:"Risk-off",enum_risk_on:"Risk-on",enum_neutral:"Neutral",logicTitle:"Selection logic",logicSubtitle:"Regime → screens → strategies → demotions → why → sizing — auditable math",logicNoRegime:"No market-regime data yet (await next scan).",logicStep1:"Market regime",logicStep1Lead:"Set US/TW dials first, then screen names. Kostolany phase × Marks temperature × rates liquidity.",logicStep1Caption:"Phase → screen stance → size multiplier (STANCE_SIZE_MULT)",logicRatesR2:"R2: ^TNX +0.25pp / 20d → defensive liquidity bias (even if price mid-cycle).",logicRatesR3:"R3: yields ≤ −0.25pp / 60d → allow more aggressive dial (if not Euphoric).",logicRatesSeparate:"Hard rule: dial_US and dial_TW stay separate — never one “world mood”.",logicStep2:"Math screens (A / B)",logicStep2Lead:"RS, momentum, SMA, volume — thresholds shift with cycle stance.",logicScreenA:"Screen A · momentum / RS",logicScreenABalanced:"Balanced: day RS≥0.5pp or day≥1.5%; or 5d≥3%; or 1m≥6% & >SMA20; or both MAs with 5d≥0 / RS≥0.",logicScreenASelective:"Selective: >SMA50 and (RS≥0.5 or 5d≥3% or 1m≥6% & >SMA20).",logicScreenADefensive:"Defensive: >SMA20+SMA50 and (RS≥0.8 or 5d≥4%) and vol≥1.0 (null vol OK); 1m≥12% & vol<0.8 → reject.",logicScreenAAggressive:"Aggressive / Constructive: looser RS/day/5d/1m; allow firm-hands below SMA50 if >SMA200 (1m<0 & vol≥1.4). Constructive also needs SMA20 or SMA200.",logicScreenAStabilize:"Stabilize first: must >SMA20 and (RS≥1.0pp or vol≥1.5).",logicScreenB:"Screen B · volume",logicScreenBVol:"Vol ratio = today / 20d avg. Floors: Defensive ≥1.0; Aggressive ≥1.1; else ≥1.2.",logicScreenBMom:"A backfill: if A missed but 1m≥8% & >SMA20+SMA50 (not Stabilize first) → tag A.",logicScore:"Ranking score",logicScoreFormula:"score = dayRS×2 + 5d%×0.35 + 1m%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"vol≥1.2 adds (cap ~8×0.6); vol<0.4 −0.5; then score adjust by regime.",logicStep3:"XQ strategies",logicXqLead:"Parallel to daily lists: condition hits (price/vol, flow, fundamentals, masters, cycle). Missing fields → insufficient — never invented.",logicXqPriceVol:"Price/vol: MA bull stack, ultra-short, etc. (OHLCV).",logicXqFlow:"Flow: institutional sync (public share-unit thresholds).",logicXqFund:"Fundamentals: earnings uptrend, PE / margins from public filings.",logicXqMasters:"Masters: Lynch / Graham / Buffett-style computable proxies.",logicXqCycle:"Cycle: Kostolany / regime pack keyed to today’s US·TW dials.",logicOpenStrategies:"Open Strategies",logicStep4:"Ranking demotions / boosts",logicStep4Lead:"scoreAdjust: thin high-RS, firm-hands, and panic reclaim change the score.",logicDemoteHot:"Defensive/Selective: 1m≥8% & vol<0.8 → −2.5; vol<0.7 & day>2% → −1.2; missing dual MA −1.5.",logicDemoteThin:"K5: strong RS on thin volume → demote / keep out of aggressive bucket.",logicPromoteFirm:"aggressive/constructive: weak price + rising vol + >SMA200 (firm-hands) → +2.2; early up-day volume +1.0.",logicDemotePanic:"stabilize_first: base −3; +1.5 only if >SMA20.",logicListSize:"List length: Defensive ~0.55×; Selective ~0.75×; Stabilize first ~0.45×; Aggressive +2 (cap 14); base 12.",logicStep5:"How “Why” is built",logicStep5Lead:"The why field is a readable join of verified fields — not a black box.",logicWhyRs:"Day % + vs index (US: S&P; TW: TAIEX) in pp.",logicWhyMom:"5-day % and ~1-month %.",logicWhyVol:"Volume sentence only if vol_ratio ≥ 1.2.",logicWhySma:"SMA20 / 50 / 200 status (dual-MA preferred).",logicWhyRegime:"Append a regime note or stance / psychology-phase tags.",logicStep6:"Paper sizing discipline",logicStep6Lead:"Paper books validate process — not live orders. Size constrained by regime size mult + fixed risk math.",logicPaperCapital:"Capital: TW NT$3,000,000 (round lots); US US$100,000 (from 1 share).",logicPaperBuy:"Buy: list (observe-only avoided); risk = equity×1%; stop≈price×1.5% (vol≥3 → 2.5%); per name ≤8% equity.",logicPaperSizeMult:"Size multiplier (0.3–1.35×) tags day’s aggressiveness; linked to list length.",logicPaperSell:"Sell: stop −3%; take-profit +12% half; below SMA20 & day <−2%; off-list & losing; limit-up chase next-day −5%.",logicOpenPaper:"Open Paper",logicFootnote:"Framework synthesis for transparent screening — not investment advice. Public operational proxies only; no copyrighted book text.",condPass:"Cond.",condFail:"Fail",condSkip:"Skip",pe:"P/E",opMargin:"Op. margin",grossMargin:"Gross margin",foreignInv:"Foreign",trustInv:"Trust",dealerInv:"Dealer",maBull:"MA bull stack",amplitude:"Range",zhang:"lots",limitUp:"Limit-up",momentum:"Momentum",metricPrice:"Price",metricDayPct:"Day %",metricVolRatioYday:"Vol ratio (yday)",metricVolToday:"Vol (lots)",metricDebt:"Debt %",metricDirector:"Insider %",metricOpQ:"Op. margin (q)",metricSource:"Source",foreign1d:"Foreign 1d (lots)",trust1d:"Trust 1d (lots)",dealer1d:"Dealer 1d (lots)",foreign5d:"Foreign 5d (lots)",trust5d:"Trust 5d (lots)",dealer5d:"Dealer 5d (lots)"},Ea={...Fe,siteTitle:"每日数学选股",loading:"加载中…",disclaimer:"投资涉及风险，信息仅供参考，非投资建议",footer:"投资涉及风险，信息仅供参考，非投资建议",dataAsOf:"数据",taipei:"（台北）",navMain:"主导航",navToday:"今日",navStrategies:"策略",navPaper:"模拟",navMore:"更多",navMoreClose:"关闭",navLogic:"逻辑",researchTitle:"研究",navResearch:"研究",navOptions:"期权",navEarnings:"读财报",earningsTitle:"读财报",earningsLead:"美股 Magnificent 7 与高关注财报摘要：公司在做什么、关键数字、下一步看什么——白话、每日更新，非投资建议。",earningsDisclaimer:"非投资建议。数字来自公开 Yahoo Finance；缺栏标「资料不足」，不构成个性化投资建议。",earningsUsFocus:"以美股为主",earningsTwStub:"台股财报稍后开放（规划中）",earningsSelectionTitle:"关注名单规则：",earningsSelectionFallback:"市值最大且未来 14 日内有财报的非 Mag7 大型股；或 Yahoo 热门成交；不足则以 45 日内行事历亮点补齐。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——上次财报与下次日期（已知时）。",earningsMag7Badge:"Mag7",earningsHotTitle:"高关注／热门财报",earningsHotLead:"依上方规则挑选；标签说明为何入选。",earningsHotEmpty:"目前窗口内暂无符合条件的标的（或资料不足）",earningsWhatItDoes:"这家公司在做什么",earningsWhatToWatch:"下一步看什么",earningsNextDate:"下次财报",earningsLastEps:"上次 EPS",earningsRevYoy:"营收 YoY",earningsEpsYoy:"获利 YoY",earningsPe:"市盈率",earningsForwardPe:"预估市盈率",earningsEstimate:"预估",earningsDataMissing:"资料不足",earningsTagPrimary:"14 日内・大型",earningsTagActives:"热门成交・14 日内",earningsTagRecent:"近日已公布",earningsTagFallback:"45 日行事历亮点",earningsTagOther:"关注",earningsPartialBlocker:"部分资料受阻",earningsRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",earningsLoadError:"无法载入财报摘要（{msg}）",earningsEmpty:"财报摘要整理中，请稍后再看。",navLookup:"查股",lookupTitle:"查股／个股",lookupLead:"输入美股或台股代码，查看公司简介、报价、财报要点与官方财报链接——白话整理；行情来自 Yahoo，官方申报连至 SEC／公开资讯观测站。非投资建议。",lookupDisclaimer:"非投资建议。行情数字来自公开 Yahoo Finance；官方财报链接连至 SEC EDGAR／公开资讯观测站。缺栏不显示、不编造。即时抓取可能受网络或来源限制。",lookupInputLabel:"股票代码",lookupPlaceholderUs:"例如 AAPL",lookupPlaceholderTw:"例如 2330 或 2330.TW",lookupHintUs:"美股：输入代号如 AAPL、MSFT、NVDA",lookupHintTw:"台股：四码代号如 2330（自动加 .TW；上柜可试 .TWO）",lookupSearch:"查询",lookupIdle:"输入代码后按查询，即可查看报价与财报摘要。",lookupLoading:"正在向 Yahoo Finance 抓取…",lookupEmptyInput:"请输入股票代码",lookupInvalid:"代码格式无法辨识。美股如 AAPL；台股如 2330 或 2330.TW",lookupNotFound:"找不到此代码的报价。请确认市场分页（美股／台股）与代码是否正确。",lookupError:"查询失败（{msg}）",lookupBusiness:"公司在做什么",lookupQuoteStats:"报价与关键数据",lookupFinancials:"财务摘要",lookupEarnings:"财报要点",lookupPrevClose:"前收",lookupVolume:"成交量",lookupDayRange:"今日区间",lookup52w:"52 周高低",lookupMarketCap:"市值",lookupEps:"每股盈余",lookupBeta:"Beta",lookupDivYield:"殖利率",lookupRevenue:"营收",lookupGrossMargin:"毛利率",lookupProfitMargin:"净利率",lookupEpsConsensus:"预估 EPS",lookupEpsSurprise:"EPS 惊喜",lookupSources:"来源",lookupPartial:"部分进阶栏位暂无法取得（已显示可得数字，未编造）。",lookupOfficialFilings:"官方财报",lookupOfficialFilingsLead:"以下链接通往官方申报与公开资讯；美股可另列近期 10-K／10-Q／8-K（公开可抓取时）。数字不编造。",lookupSourceOfficial:"官方来源",lookupSourceQuote:"行情来源",lookupSourceCompany:"公司网站",lookupSecEdgarSearch:"SEC EDGAR 公司申报查询",lookupSecEdgarBrowse:"SEC EDGAR 公司浏览页",lookupSecFormsFilter:"SEC 10-K／10-Q 等年季报筛选",lookupMopsFinancialBook:"公开资讯观测站｜财务报告书",lookupMopsFinancialQuery:"公开资讯观测站｜财务报告查询页",lookupMopsCompany:"公开资讯观测站｜公司基本资料",lookupMopsMaterial:"公开资讯观测站｜重大讯息",lookupTwseIsin:"证交所 ISIN／基本资料查询",lookupTpexCompany:"柜买中心｜公司资料",lookupYahooTwQuote:"Yahoo 股市（行情，非正式财报）",lookupCompanyWebsite:"公司官网",lookupInvestorRelations:"投资人关系／IR（公开资料）",lookupRecentFilings:"近期官方申报",lookupFilingForm:"表单",lookupFilingDate:"申报日",lookupFilingDoc:"文件",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"近期申报清单暂时无法载入（网络或来源限制）。",lookupFilingsListEmpty:"目前没有可列示的近期 10-K／10-Q／8-K。",lookupFilingsLinksStillWork:"上方官方链接仍可开启查阅。",lookupFilingsTwNote:"台股请以公开资讯观测站（MOPS）为官方财报来源；下方亦附行情页供对照。",lookupFilingsCikUnavailable:"尚无法对应 SEC CIK；仍可通过上方 EDGAR 以代号查询。",navSoxl:"SOXL",soxlTitle:"SOXL 半导体杠杆",soxlLead:"Direxion 每日半导体多头 3 倍 ETF：最新报价、异常／事件、相关新闻，以及 SEC N-PORT 持股权重与估算贡献——白话整理，非投资建议。",soxlDisclaimer:"非投资建议。SOXL 为约 3 倍日杠杆 ETF，波动与亏损风险极高；持股权重来自 SEC N-PORT（非当日），贡献度为估算。",soxlHeroLabel:"SOXL 最新报价",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正规收盘",soxlLeverageNote:"SOXL 目标约为 ICE Semiconductor Index 单日表现的 3 倍；隔夜与多日累积不可用简单 3 倍推估。",soxlHoldingsAsOf:"持股权重截至",soxlHoldingsNotSameDay:"最新 N-PORT，非今日即时",soxlEventsTitle:"事件／异常",soxlNewsTitle:"相关新闻",soxlNewsEmpty:"暂无相关新闻",soxlHoldingsTitle:"持股与估算贡献",soxlHoldingsLead:"权重来自 SEC N-PORT；现金与指数互换常占大宗。贡献 ≈ 权重 × 报酬（标示为估算，且未直接等于 3x ETF 点数）。",soxlHoldingsEmpty:"持股清单整理中，请稍后再看。",soxlColName:"标的",soxlColWeight:"权重",soxlColReturn:"日报酬",soxlColContrib:"估算贡献",soxlColReasons:"白话原因",soxlContributionHint:"估算＝权重% × 报酬% ÷ 100（篮子百分点；SOXL 约 3× 日杠杆，不等于 ETF 点数）",soxlSourceN:"来源 {n}",soxlOverallTitle:"为何涨／为何跌",soxlWhyUp:"偏多时常见原因",soxlWhyDown:"偏空时常见原因",soxlRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",soxlLoadError:"无法载入 SOXL 桌面（{msg}）",navPodcasts:"名人播客",podcastsTitle:"名人播客",podcastsLead:"精选投资人／主持人公开访谈与 Podcast 框架整理：可扫读论点、市场分栏、候选状态标示清楚——非投资建议。",podcastsDisclaimer:"非投资建议。本区整理公开访谈与研究书库已有资料；数字与做法标示来源，不构成个性化建议。数学闸门未通过者仅候选／观察。",podcastsFeatured:"精选",podcastsStubBadge:"候选摘要",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（谢孟恭）",podcastsGooayeLead:"台湾市场／总经／风险／散户心理 Podcast；集数重点整理自公开 RSS 节目指引（非逐字稿、非投资建议）。",podcastsGooayeMarket:"以台股为主 · 美／台分栏",podcastsGooayeStubNote:"轻量 stub：完整条目与可计算规则在研究书库；此处不发明集数引言。",podcastsGooayePoint1:"先管风险与仓位，再谈单一标的故事",podcastsGooayePoint2:"护国神山供应链用篮子强弱看，不单压一档",podcastsGooayePoint3:"美股用利率方向当风险偏好代理；台股另算",podcastsGotoResearch:"到研究书库看完整条目",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"分类菜单",podcastsCategories:"名人podcast分类",podcastsMenuLead:"先选分类再进入内容——不把长文全部摊在同一页。",podcastsOpenCategory:"打开此分类",gooayeLibraryBadge:"集数库",gooayeDisclaimer:"候选／观察。重点整理仅来自公开 RSS 标题与节目指引（已去掉广告样板）；无逐字稿、不发明引言或数字。非投资建议。",gooayeLoading:"载入股癌集数库…",gooayeLoadError:"无法载入集数库（{msg}）",gooayeEpisodeCount:"共 {n} 集（公开 RSS）",gooayeAsOf:"资料截至 {date}（台北）",gooayeEmptyCount:"其中 {n} 集公开文字不足，仅列标题",gooayeSearchLabel:"搜索集数",gooayeSearchPlaceholder:"标题、集数或关键字",gooayeSourceLine:"来源：",gooayeKeyPoints:"重点整理",gooayeNotesThin:"公开节目指引几乎只有标题／短语，无更多可整理文字。",gooayeTeaserNote:"公开 show notes 偏短（常见为开场短语＋广告）；以上仅整理可用的公开文字，未听音档、未发明内容。",gooayeListen:"收听（SoundOn）",gooayeLoadMore:"再显示 {n} 集（尚余 {left}）",gooayeShowingAll:"已显示全部 {n} 集",gooayeNoResults:"没有符合的集数。",gooayeUntitled:"未命名集数",researchCatMenu:"分类菜单",researchCategories:"研究分类",researchMenuLead:"先选类型／市场／状态，再浏览该分类条目。",researchOpenCategory:"打开此分类",researchCatBooks:"书籍",researchCatPapers:"论文",researchCatPodcasts:"Podcast",researchCatUs:"美股焦点",researchCatTw:"台股焦点",researchCatCandidate:"候选",researchCatWatch:"观察中",researchBackMenu:"回分类菜单",researchStatusFilters:"状态",godzillaTitle:"哥吉拉",godzillaLead:"Threads 受访者「哥吉拉」的美股框架整理：时间与健康、RSU 再配置、基本面、能力圈、税务节奏、期权工具——白话卡片，非投资建议。",godzillaDisclaimer:"非投资建议。整理自公开访谈；数字与做法标示为受访者自述，不构成个性化建议。数学闸门未通过，仅候选／观察。",godzillaHeroLabel:"哥吉拉框架总览",godzillaKicker:"候选框架 · 美股为主",godzillaTagline:"用健康的时间换自由；长股为核、期权为辅；税务决定换仓节奏。",godzillaBadgeCandidate:"候选",godzillaBadgeWatch:"观察中",godzillaUsFocus:"以美股为主",godzillaSelfReport:"受访者自述",godzillaSourceLabel:"来源",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"观看 YouTube 访谈",godzillaThesesTitle:"核心论点",godzillaThesesLead:"十条可扫读重点；细节皆为受访者自述。",godzillaThesis1Title:"时间与健康重于再堆 RSU",godzillaThesis1Body:"退休目标常会膨胀（例如自述从约 3,000 万美元调到 6,000 万，再加上住房与子女）；停下来往往是身体撑不住。用健康的 40 多岁换旅行与自由，和 50–60 岁很不一样。",godzillaThesis2Title:"美股 RSU 改变诱因",godzillaThesis2Body:"四年归属、与公司利益绑在一起；对比台股现金奖金较少用来买自家股票。",godzillaThesis3Title:"归属当日卖出、转到信念标的",godzillaThesis3Body:"既得 RSU 当日卖出，再配置到有信念的名字（其例：NVDA），避免薪水＋未归属全押同一篮。",godzillaThesis4Title:"只看基本面",godzillaThesis4Body:"看营收／EPS 趋势；忽略华尔街目标价；新闻噪音多半有害。",godzillaThesis5Title:"能力圈：硬件／科技",godzillaThesis5Body:"能力圈在硬件与科技——NVDA 权重最高；亦提 PLTR、AVGO、TSM；很少碰科技外。指数部位现在较小，终局想象多数在指数。",godzillaThesis6Title:"税务决定换仓节奏",godzillaThesis6Body:"高 W2 收入时资本利得税重；离职后可多年把个股轮换成指数、把税负控在可接受范围；卖出 Covered Call 可缓冲下跌。",godzillaThesis7Title:"期权是工具",godzillaThesis7Body:"多半当卖方（Covered Call／Cash-secured Put）；少数做多买权／LEAP，仅在恐慌或价格与基本面背离时；接受权利金可能归零；从不裸卖。",godzillaThesis8Title:"Covered Call：被指派就延后",godzillaThesis8Body:"有被指派风险就往后换月（roll out）；不要为了小权利金去履约或卖掉核心持股；不舒服就少卖合约。",godzillaThesis9Title:"进场等趋势",godzillaThesis9Body:"等 1–2 次干净财报确认趋势，即使成本垫高也接受；有闲钱就持续买好公司；不追热门明牌。",godzillaThesis10Title:"美／台观察分栏",godzillaThesis10Body:"美股资本利得税→倾向抱更久；台股无资本利得＋有证交税→周转较高、投机文化较重（仅观察，非操作指令）。",godzillaChecklistTitle:"作法清单",godzillaChecklistLead:"可执行的自我检查，不是下单清单。",godzillaCheck1:"物欲低；别让「够了」的数字一直往上涨。",godzillaCheck2:"长股为核心；期权是卫星／避险／偶尔杠杆。",godzillaCheck3:"部位：不借钱；接受不了归零，就别碰期权。",godzillaCheck4:"期权优先流动性高的大型股。",godzillaCheck5:"终局配置草图：约 80% 宽基指数，小袖口参与产业（＋偶尔小额买权）。",godzillaCheck6:"PLTR 例子：B2B 靠前线工程师变现；若商业成长失望就减码。",godzillaOptionsTitle:"期权用法",godzillaOptionsLead:"卖方为主；买方极少、仅在极端偏离时。",godzillaOpt1:"主力：Covered Call、Cash-secured Put。",godzillaOpt2:"小部位长买权／LEAP：恐慌或价格脱离基本面时。",godzillaOpt3:"权利金可全部亏完；从不裸仓。",godzillaOpt4:"被指派风险：往后换月；核心持股不为小权利金卖出。",godzillaRsuTitle:"RSU、税务与轮换",godzillaRsuLead:"诱因、分散与离职后的税务节奏。",godzillaRsu1:"归属当日卖出 RSU，再配置到信念标的（例：NVDA）。",godzillaRsu2:"在职高税负时少动大额已实现利得；离职后多年轮换个股→指数。",godzillaRsu3:"Covered Call 作为下跌缓冲，不是赌方向。",godzillaTwTitle:"台股观察",godzillaTwLead:"与美股框架分开；仅文化／税制观察。",godzillaTwBody:"美股有资本利得税，倾向长期持有；台股无资本利得税、有证交税，周转与短线文化较明显。此页主轴仍是美股框架，台股仅作对照，不写进正式筛选。",godzillaGateNote:"尚未写进正式筛选",godzillaGateDetail:"状态：候选／strategyCandidate=watch。数学闸门关闭——未接入即时筛选器或模拟交易；仅供阅读与对照。",jensenTitle:"黄仁勋／Jensen Huang",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公开演讲整理：视角、需求与摩尔定律、文化、现金现实、再发明——候选／观察，非投资建议。",jensenDisclaimer:"非投资建议。整理自 Stanford Online 公开演讲（约 2009；YouTube 2011 上传）；论点来自讲者自述主题，不构成个性化建议。数学闸门未通过，仅候选／观察。",jensenHeroLabel:"黄仁勋演讲重点",jensenKicker:"候选演讲 · 美股科技／半导体创业",jensenTagline:"视角胜过空泛「愿景」；用文化与再发明撑住长周期公司建设。",jensenUsFocus:"以美股／科技为主",jensenTalkBadge:"公开演讲",jensenMeta:"Stanford Online · STVP ETL · 约 1:03:38 · 上传 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"观看 YouTube 演讲",jensenOpenYoutube:"在 YouTube 打开完整影片",jensenEmbedTitle:"Jen-Hsun Huang：Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 相关剪辑",jensenHighlightsTitle:"演讲重点（白话）",jensenHighlightsLead:"五条可扫读主题；仅整理公开演讲中反复出现的论点，非逐字稿。",jensenH1Title:"视角，而非空泛「愿景」",jensenH1Body:"人人都有视角。NVIDIA 早期押注：个人电脑加上便宜的 3D 会打开游戏市场（后来也谈到 Keyhole→Google Earth），当时对许多 VC 而言市场几乎是零。",jensenH2Title:"无穷需求与摩尔定律",jensenH2Body:"新类别尚未被定价时，有时要暂时忽略顾客反馈；先 rinse-and-repeat，再在「够好」扼杀媒介前重新发明（固定功能→可编程着色器／GeForce FX 近死经验、CG 语言）。",jensenH3Title:"文化：敢冒算过的风险",jensenH3Body:"创新需要计算过的风险、容忍快速失败、智识诚实、愿意改道；动机是热情与目的，而非「把公司卖掉」。",jensenH4Title:"现金与新创现实",jensenH4Body:"永远在募资、省钱或赚钱；新创几乎总是濒临倒闭。VC 更押人与够大的市场，而非完美商业计划。",jensenH5Title:"再发明：成功也要拆掉重建",jensenH5Body:"每一次成功终须拆解再建；黄仁勋谈的是长视野公司建设，不是连续翻转出场。",jensenTwTitle:"美／台分栏（仅脉络）",jensenTwLead:"本条目市场主轴为美股科技／半导体公司建设；台湾仅作供应链脉络，不发明台股标的。",jensenTwBody:"NVDA 作为美股半导体／运算平台公司，供应链与台湾晶圆制造、封测生态高度相关——此处仅作产业脉络注记，不列台股清单，也不写进正式筛选。",jensenGateNote:"尚未写进正式筛选",jensenGateDetail:"状态：候选／strategyCandidate=watch。数学闸门关闭——未接入即时筛选器或模拟交易；仅供阅读与对照。",jensenWatchCta:"在 YouTube 观看",jensenEmbedBlockedNote:"此演讲由拥有者设定为仅能在 YouTube 观看（无法于本站内嵌播放）。",optionsTitle:"美股期权",optionsLead:"以 McMillan《期权策略完全手册》策略族为主：先看波动与风险形状，再用公开 Yahoo 链学习——非投资建议。",optionsDisclaimer:"非投资建议；期权风险高。仅供教育与公开数据筛选，不构成个人化下单建议。",optionsBookBadge:"这本书",optionsBookCite:"主要参考书",optionsBookLead:"Lawrence G. McMillan《期权策略完全手册》增订第五版：依看法与波动高低对应策略族（原创摘要，非原文）。",optionsBookFallbackTitle:"期权策略完全手册（McMillan）",optionsGotoResearch:"到研究书库看完整条目",optionsUsOnly:"仅美股",optionsQualityTitle:"标的轻量财报检核",optionsQualityLead:"次要滤网：本益、净值、负债、ROE、营收／获利趋势。缺栏标「资料不足」，不作荐股。",optionsViewTitle:"期权观点（McMillan）",optionsViewLead:"公开期权链：ATM 隐含波动、历史波动、量能偏向；策略族为教育说明。",optionsMcmillanFirst:"先对齐波动高低与风险形状，再想策略族——不是先猜涨跌再硬套。",optionsPe:"市盈率",optionsPb:"市净率",optionsDebt:"负债／权益",optionsRoe:"ROE",optionsRevTrend:"营收趋势",optionsEarnTrend:"获利趋势",optionsGate:"品质闸",optionsGatePass:"通过",optionsGateWatch:"观察",optionsGateFail:"偏弱",optionsGateIncomplete:"资料不足",optionsDataMissing:"资料不足",optionsForwardPe:"预估市盈率",optionsTrendUp:"成长约 {pct}%",optionsTrendDown:"下滑约 {pct}%",optionsTrendFlat:"大致持平 {pct}%",optionsAtmIv:"ATM 隐含波动",optionsHv:"历史波动（约 1 月）",optionsIvHv:"IV／HV",optionsVolRegime:"波动状态",optionsRegimeIvRich:"隐含偏高",optionsRegimeIvCheap:"隐含偏低",optionsRegimeIvFair:"大致均衡",optionsRegimeIvOnly:"仅有 IV",optionsCallPutVol:"认购／认沽成交量",optionsAtmStrike:"近价履约价",optionsExpiry:"到期日",optionsSkewPutHeavy:"认沽量较重",optionsSkewCallHeavy:"认购量较重",optionsSkewBalanced:"量能大致均衡",optionsEduSetups:"策略族（教育）",optionsEduSetupsLead:"依看法＋波动状态挑选家族；绿底表示较常对齐目前 IV／HV（仍非建议）。",optionsSetupCoveredCall:"备兑认购（Covered Call）",optionsSetupCoveredCallBody:"已持股时卖出认购，换取权利金；上涨空间被履约价盖住。",optionsSetupCoveredCallWarn:"最大利润有天花板；大跌时股票亏损仍在。",optionsSetupProtectivePut:"保护性认沽（Protective Put）",optionsSetupProtectivePutBody:"持股同时买入认沽，像买保险：下跌有地板，但要付保费。",optionsSetupProtectivePutWarn:"保险成本会吃掉报酬；若波动已很贵，保费更痛。",optionsSetupVertical:"垂直价差（Vertical）",optionsSetupVerticalBody:"同到期、不同履约价的组合，把最大损益框在可计算区间。",optionsSetupVerticalWarn:"方向看错仍会亏；好处是亏损有上限。",optionsSetupCalendar:"日历／对角价差",optionsSetupCalendarBody:"不同到期的组合，常用来表达时间流逝或波动变化看法。",optionsSetupCalendarWarn:"对波动与时间敏感；形状会随市价移动改变。",optionsSetupStraddle:"跨式／勒式",optionsSetupStraddleBody:"同时买（或卖）认购与认沽，押大波动或波动不够。",optionsSetupStraddleWarn:"买方需要够大的移动；卖方面临两侧风险。",optionsSetupButterfly:"蝶式",optionsSetupButterflyBody:"多履约价组合，押价格收敛在中间附近；利润区通常很窄。",optionsSetupButterflyWarn:"甜蜜点很窄；错过中间就可能接近最大亏损。",optionsSetupVolAligned:"与目前波动状态较常一起讨论",optionsSetupVolNotAligned:"与目前波动状态较不契合（仍可学习）",optionsRiskShape:"风险形状（白话）",optionsNoSetups:"暂无策略族说明",optionsPickTicker:"请选择上方美股代码",optionsChainBlocked:"期权链暂时无法取得",optionsPartialBlocker:"部分栏位不完整",optionsRefreshHow:"资料会随站点更新；若画面异常请稍后再试。",optionsLoadError:"无法载入期权快照（{msg}）",optionsEmpty:"尚无美股样本——请先跑 fetch-us-options",optionsGlossaryTitle:"小词典（不用公式）",optionsTermDelta:"Delta（方向敏感度）",optionsDefDelta:"价格涨跌时，期权大概会跟多少。数字愈靠近 1 或 −1，跟现货愈紧。",optionsTermIv:"隐含波动 IV",optionsDefIv:"市场「现在愿意付多少保费」换算成的波动预期。愈高通常期权愈贵。",optionsTermHv:"历史波动 HV",optionsDefHv:"过去一段时间股价实际晃动有多大，用来和 IV 对照。",optionsTermAtm:"ATM（近价）",optionsDefAtm:"履约价最靠近现价的合约，常拿来当波动温度计。",optionsTermSkew:"量能偏向",optionsDefSkew:"认购与认沽成交量谁比较多，粗看市场偏保险还是偏追涨。",optionsTermProb:"机率（教育）",optionsDefProb:"只谈「比较可能／比较少见」的直觉，不保证结果，也不给个人化胜率。",researchLead:"书单与论文：标题 → 摘要 → 重点作法 → 是否纳入策略候选",researchMathGateBanner:"正式纳入策略需数学闸门通过（目前未过）— 仅候选",researchMathGate:"数学闸门",researchMathGateDefault:"尚未通过数学闸门",researchFormulas:"可编程公式",researchTakeaways:"重点作法",researchNoTakeaways:"尚无重点作法",researchSources:"来源",researchFilters:"筛选",researchFilterAll:"全部",researchType:"类型",researchTypeBook:"书籍",researchTypePaper:"论文",researchTypePodcast:"播客",researchMarketBoth:"美＋台",researchStrategy:"策略候选",researchCandYes:"候选纳入",researchCandNo:"不纳入",researchCandWatch:"观察中",researchStatusCandidate:"候选",researchStatusDeferred:"暂缓",researchStatusAdopted:"已纳入",researchStatusRejected:"排除",researchCounts:"书籍 {books} · 论文 {papers} · 播客 {podcasts} · 显示 {total}",researchEmpty:"此筛选条件下暂无项目",researchNoFormulas:"尚无公式条目",researchLoadError:"无法加载研究库（{msg}）",researchShelfFilters:"书架分类",researchShelfCoreInvesting:"核心投资经典",researchShelfValueInvesting:"价值型投资",researchShelfBusiness:"商业管理与商界视角",researchShelfLifePartner:"人生智慧与合伙人思想",researchShelfOptions:"期权／衍生品",researchShelfRecentReads:"近期阅读与推荐书",researchShelfFiConcepts:"必看财商观念书",researchShelfMoneyValues:"理财与金钱价值观",researchShelfInvestingBasics:"投资理财入门",researchShelfAssetAllocation:"资产配置",researchShelfFinancials:"财报分析",researchShelfMarketAnalysis:"投资分析与战胜市场",researchShelfEconAnalysis:"经济分析",researchShelfPsych:"投资心理／随机性／人性",researchShelfBiographies:"名人传记",researchShelfAdjacent:"其他／隣接",todayPicks:"今日选股",market:"市场",hot:"热门",marketQuotes:"市场报价",macroTitle:"美股大事",macroTzEt:"时间・美东 ET",macroAsOf:"更新",macroStale:"数据偏旧（仍显示上次成功抓取）",macroToday:"今日",macroNext:"即将",macroHighImpact:"高影响",macroEmpty:"近期无高影响美股大事（或数据尚未更新）",macroLoadError:"无法载入美股大事（{msg}）",macroEvent_fomcDecision:"FOMC 利率决议",macroEvent_fomcMinutes:"FOMC 会议纪要",macroEvent_cpi:"CPI 通胀",macroEvent_ppi:"PPI 生产者物价",macroEvent_pce:"PCE／核心 PCE",macroEvent_nfp:"非农就业 NFP",macroEvent_joblessClaims:"初请失业金",macroEvent_gdp:"GDP",macroEvent_retailSales:"零售销售",macroEvent_ismMfg:"ISM 制造业",macroEvent_ismServices:"ISM 服务业",macroEvent_jolts:"JOLTS 职缺",usStock:"美股",twStock:"台股",usList:"美股列表",twList:"台股列表",usTop:"美股 Top",twTop:"台股 Top",emptyTop:"{market} 暂无 Top 候选",ticker:"代码",name:"名称",price:"价格",dayPct:"日涨跌",priorClose:"前收",priorCloseFull:"前收涨幅",pct5d:"5 日",pct1m:"约 1 月",volRatio:"量比",ma:"均线",screening:"筛选",reason:"理由",details:"详情",business:"本业",risk:"风险",observe:"观察",dataIncomplete:"资料不全",intraday:"盘中",taipeiClose:"台北收",parity:"平价",implied:"隐含价",premium:"溢价",adsRatio:"换股比",taiex:"台湾加权 TAIEX",otc:"柜买",loadError:"无法加载数据（{msg}）。请确认以静态服务器打开，且 data/latest.json 存在。",langLabel:"语言",paper:"模拟",paperMissing:"尚无模拟账本文件。请在项目执行 npm run paper。",paperDisclaimer:"累积模拟账户（自 {date} 起） · 不会每日归零 · 买进即成交 · 非真实下单",paperRules:"规则（各市场独立账）",paperRuleTw:"台股本金 NT$3,000,000 · 整张成交",paperRuleUs:"美股本金 US$100,000 · 可买 1 股起",paperRuleBuy:"买：该市场名单·风险1%·停距1.5%·单档≤8% · 即成交",paperRuleSell:"卖：停损−3% · 停利+12%半仓 · 破SMA20且日跌>2% · 离名单亏损 · 涨停隔日−5%",paperTabTw:"台股账 · NT$",paperTabUs:"美股账 · US$",paperBookTw:"台股账本（NT$）",paperBookUs:"美股账本（US$）",principal:"本金",cash:"现金",equity:"权益（部位＋现金）",totalPnl:"总损益",totalPnlPct:"总损益 ％",weekPerf:"周绩效",monthPerf:"月绩效",quarterPerf:"季绩效",yearPerf:"年绩效",sinceInception:"成立以来",noTradesToday:"本日尚无此类成交（模拟）",noPositions:"目前没有持股",buy:"买",sell:"卖",shares:"股",qtyShares:"股数",positions:"目前部位",position:"部位",avgCost:"成本",mark:"现价",mktValue:"市值",dayPnl:"日损益",costBasis:"成本合计",weightPct:"权重 ％",posScrollHint:"左右滑动看全部栏位",unrealizedPnl:"未实现损益",unrealizedPct:"未实现 ％",recentTrades:"成交（近 40）",paperSession:"{date} · 自 {inception} 累积 · 买进即成交",reasonScreenBuy:"名单新开仓",reasonAdd:"持续买进",reasonStop:"停损",reasonTakeProfit:"停利",reasonMomentumBreak:"动能转弱",reasonOffList:"离开名单",reasonLimitUpChase:"涨停追价急杀",stopLoss:"停损",takeProfit:"停利",paperTrade:"模拟",realizedPnl:"损益",periodPerf:"绩效",qty:"数量",note:"说明",strategyScreen:"策略选股",strategyLead:"台／美命中分开检视 · 缺资料标「不足」",strategyLoading:"加载策略结果中…",strategyEmpty:"尚无策略资料。请执行 npm run strategies。",strategyLoadError:"无法加载策略选股（{msg}）。请确认已执行 npm run strategies。",strategyList:"策略列表",strategyCat:"策略分类",hitCount:"档命中",hitTitle:"命中档数",strategyDetails:"详情 · 策略说明",conditions:"条件",results:"筛选结果",copyJson:"复制 JSON",exportCsv:"导出此策略 CSV",exportJson:"导出 JSON",copied:"已复制",noHitsExport:"此策略今日无命中列可导出",incomplete:"不足",hitsTotal:"共{n}档",twOnlyHint:"本策略仅台股",hitMarket:"命中市场",noHits:"本日无命中",dataInsufficient:"资料不足",calibTitle:"校准说明",incompleteFilters:"未检查滤网（不算通过）：",sessionTwse:"证交所 session",ohlcvBar:"OHLCV K棒",generated:"产生",universeTw:"台股宇宙",universeUs:"美股宇宙",cat精選:"精选",cat價量:"价量",cat籌碼:"筹码",cat財務:"财务",cat大師:"大师",cat週期:"周期",cat技術:"技术",cat基本:"基本",cat綜合:"综合",addWatchlist:"加入自选",watchlistAdded:"已加入自选 {ticker}",watchlistExists:"{ticker} 已在自选",copyFailed:"复制失败（请手动选取）",csvDownloaded:"已下载 CSV",csvBlocked:"下载被挡：改以数据链接打开",backtestSoon:"回测：尚未开放",backtestHint:"回测：数据／引擎尚未开放（不提供假回测）",regimeToday:"今日市场周期（美／台分开）",psychologyPhase:"心理相位",cycleStance:"周期姿态",liquidityBias:"流动性偏误",temperatureScore:"市场温度",sizeMult:"部位乘数",regimeTags:"周期标签",dataGaps:"资料缺口",marketRegime:"市场周期",enum_euphoric:"亢奋",enum_late_optimism:"晚期乐观",enum_mid_cycle:"中期",enum_cautious_recovery:"谨慎复苏",enum_despondent:"绝望",enum_panic:"恐慌",enum_defensive:"防守",enum_selective:"精选",enum_balanced:"均衡",enum_constructive:"偏建设",enum_aggressive:"积极",enum_stabilize_first:"先求稳",enum_risk_off:"偏防守",enum_risk_on:"偏进攻",enum_neutral:"中性",logicTitle:"选股逻辑",logicSubtitle:"政权→筛选→策略→降权→理由→部位：可稽核的数学流程",logicNoRegime:"尚无市场周期资料（待下次扫描写入）。",logicStep1:"市场周期（Regime）",logicStep1Lead:"先定美／台独立姿态，再筛个股。Kostolany 心理相位 × Marks 温度 × 利率流动性。",logicStep1Caption:"相位 → 筛选姿态 → 部位乘数（STANCE_SIZE_MULT）",logicRatesR2:"R2：美债 ^TNX 20 日上升 ≥ +0.25pp → 流动性偏防御（即使价趋势仍中性）。",logicRatesR3:"R3：60 日收益率下降 ≤ −0.25pp → 允许较积极姿态（非亢奋）。",logicRatesSeparate:"硬规则：dial_US 与 dial_TW 分开；不混成「全球心情」。",logicStep2:"数学筛选（A／B）",logicStep2Lead:"相对强度、动能、SMA、量比；门槛依周期姿态调整。",logicScreenA:"筛选 A · 动能／相对强度",logicScreenABalanced:"均衡：日 RS≥0.5pp 或日涨≥1.5%；或 5日≥3%；或 1月≥6% 且站上 SMA20；或双均线且 5日≥0／RS≥0。",logicScreenASelective:"精选：站上 SMA50，且（RS≥0.5 或 5日≥3% 或 1月≥6% 且 SMA20）。",logicScreenADefensive:"防守：SMA20＋SMA50，且（RS≥0.8 或 5日≥4%），量比≥1.0（缺量视为可过）；1月≥12% 且量比<0.8 → 剔除。",logicScreenAAggressive:"积极／偏建设：放宽 RS／日／5日／1月；允许 SMA200 下 firm-hands（1月<0 且量比≥1.4）。偏建设另需 SMA20 或 SMA200。",logicScreenAStabilize:"先求稳：须站上 SMA20，且 RS≥1.0pp 或量比≥1.5（恐慌后先稳定）。",logicScreenB:"筛选 B · 量能",logicScreenBVol:"量比 = 今日量／近20日均量。门槛：防守 ≥1.0；积极 ≥1.1；其余 ≥1.2。",logicScreenBMom:"补标 A：若未过 A，但 1月≥8% 且 SMA20＋SMA50（非先求稳）→ 仍标 A。",logicScore:"排序分数",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"量比≥1.2 加权（上限约 8×0.6）；量比<0.4 −0.5；再依市场周期调整分数。",logicStep3:"XQ 策略选股",logicXqLead:"与每日名单并行：条件式命中（价量／筹码／财务／大师／周期）。缺栏标「资料不足」，不捏造。",logicXqPriceVol:"价量：均线多头、超短线作多等（OHLCV 实算）。",logicXqFlow:"筹码：法人同步等（公开张数门槛）。",logicXqFund:"财务：获利递增、PE／营益率等公开财报栏。",logicXqMasters:"大师：林奇／格雷厄姆／巴菲特等可计算代理条件。",logicXqCycle:"周期：科斯托拉尼／市场周期包（依当日美台姿态）。",logicOpenStrategies:"打开策略页",logicStep4:"排序降权／加权",logicStep4Lead:"scoreAdjust：依姿态对高 RS 缩量、firm-hands、恐慌稳定做加减分。",logicDemoteHot:"防守／精选：1月≥8% 且量比<0.8 → −2.5；量比<0.7 且日涨>2% → −1.2；缺双均线 −1.5。",logicDemoteThin:"K5：高相对强度但量能不足 → 降权／排除积极桶。",logicPromoteFirm:"aggressive／constructive：价弱量增且 SMA200（firm-hands）→ +2.2；早段放量上涨 +1.0。",logicDemotePanic:"stabilize_first：基准 −3；站上 SMA20 才 +1.5。",logicListSize:"名单长度：防守 ≈0.55×；精选 ≈0.75×；先求稳 ≈0.45×；积极 +2（上限14）；基准 12。",logicStep5:"「为什么」如何组成",logicStep5Lead:"why 栏为可读摘要，非模型黑箱——由当日可验证栏位串接。",logicWhyRs:"日涨跌 + 相对指数（美：S&P；台：加权）pp。",logicWhyMom:"五日%、约一个月%。",logicWhyVol:"量比≥1.2 才写入量能句。",logicWhySma:"SMA20／50／200 站上状态（双均线优先）。",logicWhyRegime:"附加周期备注或姿态／心理相位标签。",logicStep6:"纸上部位纪律",logicStep6Lead:"模拟账验证流程；非实单。部位受周期部位乘数与固定风险公式约束。",logicPaperCapital:"本金：台股 NT$3,000,000（整张）；美股 US$100,000（1 股起）。",logicPaperBuy:"买：名单（纯 observe 尽量不买）；风险＝权益×1%；停距≈价×1.5%（量比≥3→2.5%）；单档≤权益 8%。",logicPaperSizeMult:"部位乘数（0.3–1.35×）标示当日建议积极度；与名单长度联动。",logicPaperSell:"卖：停损 −3%；停利 +12% 半仓；破 SMA20 且日跌>2%；离名单且亏损；涨停风格隔日 −5%。",logicOpenPaper:"打开模拟页",logicFootnote:"框架合成仅供透明筛选说明，非投资建议。公开作者方法之可编码代理；不重制受著作权保护之原文。",condPass:"条件",condFail:"未过",condSkip:"略过",pe:"本益比",opMargin:"营益率",grossMargin:"毛利率",foreignInv:"外资",trustInv:"投信",dealerInv:"自营商",maBull:"均线多头",amplitude:"振幅",zhang:"张",limitUp:"涨停",momentum:"动能",metricPrice:"价格",metricDayPct:"日涨跌",metricVolRatioYday:"量比(昨)",metricVolToday:"今量(张)",metricDebt:"负债比%",metricDirector:"董监持股%",metricOpQ:"近季营益率%",metricSource:"来源",foreign1d:"外资1日(张)",trust1d:"投信1日(张)",dealer1d:"自营商1日(张)",foreign5d:"外资5日(张)",trust5d:"投信5日(张)",dealer5d:"自营5日(张)"},xa={...Fe,siteTitle:"毎日クオンツ選株",loading:"読み込み中…",disclaimer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",footer:"投資にはリスクが伴います。参考情報であり投資助言ではありません。",dataAsOf:"データ",taipei:"（台北）",navMain:"メインナビ",navToday:"本日",navStrategies:"戦略",navPaper:"模擬",navMore:"その他",navMoreClose:"閉じる",navLogic:"ロジック",researchTitle:"研究",navResearch:"研究",navOptions:"オプション",navEarnings:"決算を読む",earningsTitle:"決算を読む",earningsLead:"米国 Mag7 と注目決算の要約：何をしている会社か、主要数字、次に見る点——平易な言葉、日次更新。投資助言ではありません。",earningsDisclaimer:"投資助言ではありません。数値は公開 Yahoo Finance 由来；欠落は「データ不足」。個別の投資助言ではありません。",earningsUsFocus:"米国中心",earningsTwStub:"台湾株の決算は後日対応（スタブ）",earningsSelectionTitle:"注目リストのルール：",earningsSelectionFallback:"今後14日以内に決算がある非Mag7大型株（時価総額順）；または Yahoo 出来高上位；不足分は45日以内のカレンダーで補完。",earningsMag7Title:"Magnificent 7",earningsMag7Lead:"AAPL、MSFT、NVDA、AMZN、GOOGL／GOOG、META、TSLA——前回決算と次回日（判明時）。",earningsMag7Badge:"Mag7",earningsHotTitle:"注目・話題の決算",earningsHotLead:"上記ルールで選定；バッジが理由を示します。",earningsHotEmpty:"現在の窓に該当なし（またはデータ不足）",earningsWhatItDoes:"この会社は何をしているか",earningsWhatToWatch:"次に見る点",earningsNextDate:"次回決算",earningsLastEps:"前回 EPS",earningsRevYoy:"売上高 YoY",earningsEpsYoy:"利益 YoY",earningsPe:"PER",earningsForwardPe:"予想 PER",earningsEstimate:"予想",earningsDataMissing:"データ不足",earningsTagPrimary:"14日以内・大型",earningsTagActives:"出来高上位・14日",earningsTagRecent:"直近発表",earningsTagFallback:"45日カレンダー注目",earningsTagOther:"注目",earningsPartialBlocker:"一部データ取得不可",earningsRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",earningsLoadError:"決算ダイジェストを読めません（{msg}）",earningsEmpty:"決算ダイジェストを準備中です。しばらくしてからご確認ください。",navLookup:"銘柄検索",lookupTitle:"銘柄検索",lookupLead:"米株または台湾株のティッカーで会社概要・気配・決算ハイライトと公式財務リンクを表示。相場は Yahoo、公式開示は SEC／MOPS。投資助言ではありません。",lookupDisclaimer:"投資助言ではありません。相場は公開 Yahoo Finance、公式財務リンクは SEC EDGAR／MOPS。欠落は表示せず創作しません。取得は通信やソース制限の影響を受け得ます。",lookupInputLabel:"ティッカー",lookupPlaceholderUs:"例: AAPL",lookupPlaceholderTw:"例: 2330 または 2330.TW",lookupHintUs:"米株: AAPL、MSFT、NVDA など",lookupHintTw:"台湾株: 2330 のような4桁（.TW を自動付与；OTC は .TWO）",lookupSearch:"検索",lookupIdle:"ティッカーを入力して検索すると、気配と決算要約を表示します。",lookupLoading:"Yahoo Finance から取得中…",lookupEmptyInput:"ティッカーを入力してください",lookupInvalid:"形式を認識できません。米株は AAPL、台湾株は 2330 または 2330.TW",lookupNotFound:"このティッカーの気配が見つかりません。米／台タブと記号を確認してください。",lookupError:"検索に失敗（{msg}）",lookupBusiness:"事業内容",lookupQuoteStats:"気配と主要指標",lookupFinancials:"財務スナップショット",lookupEarnings:"決算ハイライト",lookupPrevClose:"前日終値",lookupVolume:"出来高",lookupDayRange:"本日レンジ",lookup52w:"52週レンジ",lookupMarketCap:"時価総額",lookupEps:"EPS（ttm）",lookupBeta:"Beta",lookupDivYield:"配当利回り",lookupRevenue:"売上高",lookupGrossMargin:"粗利率",lookupProfitMargin:"純利益率",lookupEpsConsensus:"EPS 予想",lookupEpsSurprise:"EPS サプライズ",lookupSources:"出典",lookupPartial:"一部の詳細項目は取得不可（取得できた数値のみ表示）。",lookupOfficialFilings:"公式財務書類",lookupOfficialFilingsLead:"公式の開示・届出へのリンクです。米国株は取得可能なとき直近の 10-K／10-Q／8-K も表示します。数値の創作はしません。",lookupSourceOfficial:"公式ソース",lookupSourceQuote:"相場ソース",lookupSourceCompany:"会社サイト",lookupSecEdgarSearch:"SEC EDGAR 会社届出検索",lookupSecEdgarBrowse:"SEC EDGAR 会社ページ",lookupSecFormsFilter:"SEC 10-K／10-Q フィルタ",lookupMopsFinancialBook:"公開資訊觀測站｜財務報告書",lookupMopsFinancialQuery:"公開資訊觀測站｜財務報告照会",lookupMopsCompany:"公開資訊觀測站｜会社基本情報",lookupMopsMaterial:"公開資訊觀測站｜重大情報",lookupTwseIsin:"TWSE ISIN／基本検索",lookupTpexCompany:"TPEx｜会社情報",lookupYahooTwQuote:"Yahoo 台湾相場（相場情報・公式書類ではない）",lookupCompanyWebsite:"会社ウェブサイト",lookupInvestorRelations:"IR（公開情報）",lookupRecentFilings:"直近の公式届出",lookupFilingForm:"様式",lookupFilingDate:"提出日",lookupFilingDoc:"書類",lookupCikLabel:"CIK",lookupFilingsListUnavailable:"直近届出一覧を読み込めません（通信またはソース制限）。",lookupFilingsListEmpty:"表示できる直近の 10-K／10-Q／8-K がありません。",lookupFilingsLinksStillWork:"上の公式リンクは引き続き利用できます。",lookupFilingsTwNote:"台湾株の公式財務は MOPS（公開資訊觀測站）を主にしてください。下の相場リンクは補助です。",lookupFilingsCikUnavailable:"SEC CIK を特定できません。上の EDGAR でティッカー検索できます。",navSoxl:"SOXL",soxlTitle:"SOXL 半導体レバレッジ",soxlLead:"Direxion 半導体ブル3倍ETF：最新価格、イベント／異常、関連ニュース、SEC N-PORT 保有比率と寄与の概算——平易な整理。投資助言ではありません。",soxlDisclaimer:"投資助言ではありません。SOXLは約3倍の日次レバレッジETFで変動が極めて大きいです。保有比率はSEC N-PORT（当日ではない）、寄与は概算です。",soxlHeroLabel:"SOXL 最新価格",soxlFundFallback:"Direxion Daily Semiconductor Bull 3X Shares",soxlRegularClose:"正規取引終値",soxlLeverageNote:"SOXLはICE Semiconductor Indexの日次リターンの約3倍を目指します。夜間や複数日は単純な3倍ではありません。",soxlHoldingsAsOf:"保有比率基準日",soxlHoldingsNotSameDay:"最新N-PORT、当日ではない",soxlEventsTitle:"イベント／異常",soxlNewsTitle:"関連ニュース",soxlNewsEmpty:"関連ニュースはまだありません。",soxlHoldingsTitle:"保有と寄与の概算",soxlHoldingsLead:"比率はSEC N-PORT由来。現金と指数スワップが大きいことが多い。寄与≈比率×リターン（概算表示。3倍ETFのポイントとは異なる）。",soxlHoldingsEmpty:"保有リストを準備中です。しばらくしてからご確認ください。",soxlColName:"銘柄",soxlColWeight:"比率",soxlColReturn:"日次リターン",soxlColContrib:"寄与概算",soxlColReasons:"平易な理由",soxlContributionHint:"概算＝比率% × リターン% ÷ 100（バスケットのポイント。SOXLは約3×日次でETFポイントではない）",soxlSourceN:"出典 {n}",soxlOverallTitle:"上がる理由／下がる理由",soxlWhyUp:"上昇側の要因",soxlWhyDown:"下落側の要因",soxlRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",soxlLoadError:"SOXLデスクを読み込めません（{msg}）",navPodcasts:"著名人ポッドキャスト",podcastsTitle:"著名人ポッドキャスト",podcastsLead:"著名投資家／ホストの公開インタビューとポッドキャスト枠組み：要点を掃読、米／台分離、候補状態を明示——投資助言ではありません。",podcastsDisclaimer:"投資助言ではありません。公開インタビューと研究ライブラリ既存資料の整理。数値は出典付き。数学ゲート未通過は候補／様子見のみ。",podcastsFeatured:"注目",podcastsStubBadge:"候補スタブ",podcastsGodzillaHandle:"哥吉拉 · @godzilla.us",podcastsGooayeTitle:"Gooaye 股癌（謝孟恭）",podcastsGooayeLead:"台湾のマーケット／マクロ／リスク／個人投資家心理のポッドキャスト。各回の要点は公開RSS番組ノートから整理（逐語録なし・投資助言ではありません）。",podcastsGooayeMarket:"台湾中心 · 米／台分離",podcastsGooayeStubNote:"軽量スタブ：完全条目と計算可能ルールは研究ライブラリ。ここにはエピソード引用を創作しません。",podcastsGooayePoint1:"銘柄話より先にリスクとサイズ",podcastsGooayePoint2:"半導体チェーンはバスケットで見る",podcastsGooayePoint3:"米は金利でリスクオン代理、台は別計算",podcastsGotoResearch:"研究ライブラリの条目へ",podcastsGooayeApple:"Apple Podcasts",podcastsCatMenu:"カテゴリ",podcastsCategories:"著名人podcastカテゴリ",podcastsMenuLead:"先にカテゴリを選んでから本文へ——長い記事を一覧に並べません。",podcastsOpenCategory:"このカテゴリを開く",gooayeLibraryBadge:"エピソード庫",gooayeDisclaimer:"候補／ウォッチ。要点は公開RSSのタイトルと番組ノートのみ（スポンサー定型文を除去）。逐語録なし・引用や数字の創作なし。投資助言ではありません。",gooayeLoading:"Gooayeエピソードを読み込み中…",gooayeLoadError:"エピソード庫を読み込めません（{msg}）",gooayeEpisodeCount:"全 {n} 回（公開RSS）",gooayeAsOf:"時点 {date}（台北）",gooayeEmptyCount:"うち {n} 回は公開テキスト不足（タイトルのみ）",gooayeSearchLabel:"エピソード検索",gooayeSearchPlaceholder:"タイトル・回番号・キーワード",gooayeSourceLine:"出典：",gooayeKeyPoints:"要点整理",gooayeNotesThin:"公開ノートはほぼタイトルのみで、要約できる本文がありません。",gooayeTeaserNote:"公開ショーノートは短め（短いフック＋広告が多い）です。上記は使える公開文のみ——音声未聴取・創作なし。",gooayeListen:"聴く（SoundOn）",gooayeLoadMore:"あと {n} 回表示（残り {left}）",gooayeShowingAll:"全 {n} 回を表示中",gooayeNoResults:"一致するエピソードがありません。",gooayeUntitled:"無題のエピソード",researchCatMenu:"カテゴリ",researchCategories:"研究カテゴリ",researchMenuLead:"タイプ／市場／状態を先に選び、その分類だけを閲覧します。",researchOpenCategory:"このカテゴリを開く",researchCatBooks:"書籍",researchCatPapers:"論文",researchCatPodcasts:"Podcast",researchCatUs:"米国フォーカス",researchCatTw:"台湾フォーカス",researchCatCandidate:"候補",researchCatWatch:"ウォッチ",researchBackMenu:"カテゴリに戻る",researchStatusFilters:"ステータス",godzillaTitle:"ゴジラ",godzillaLead:"Threads インタビュイー「哥吉拉」の米国株フレームワーク：時間と健康、RSU の再配置、ファンダ、能力圏、税務ペース、オプション道具——平易なカード。投資助言ではありません。",godzillaDisclaimer:"投資助言ではありません。公開インタビューの整理。数値・手法は本人の自述。数学ゲート未通過のため候補／様子見のみ。",godzillaHeroLabel:"ゴジラ枠組みの概要",godzillaKicker:"候補枠組み · 米国株中心",godzillaTagline:"健康な時間を自由に換える。現物が核、オプションは補助。税が回転ペースを決める。",godzillaBadgeCandidate:"候補",godzillaBadgeWatch:"様子見",godzillaUsFocus:"米国株中心",godzillaSelfReport:"本人の自述",godzillaSourceLabel:"出典",godzillaSourceCite:"Terry × 哥吉拉",godzillaYoutube:"YouTube インタビューを見る",godzillaThesesTitle:"核心論点",godzillaThesesLead:"10の要点。詳細は本人の自述。",godzillaThesis1Title:"時間と健康は RSU 積み増しより大事",godzillaThesis1Body:"退職目標は膨らみやすい（自述例：$3,000万→$6,000万＋住居／子供）。止まるのは体が限界のときが多い。健康な40代で旅と自由を取るのは50–60代とは違う。",godzillaThesis2Title:"米RSUはインセンティブを変える",godzillaThesis2Body:"4年ベスティングで利害一致。台湾の現金賞与は自社株を買いづらい。",godzillaThesis3Title:"ベスティング日に売却し信念銘柄へ",godzillaThesis3Body:"確定RSUは当日売却し信念銘柄（例：NVDA）へ。給与＋未確定が同一カゴにならないように。",godzillaThesis4Title:"ファンダのみ",godzillaThesis4Body:"売上／EPSトレンド。ウォール街目標は無視。ニュース雑音は害が多い。",godzillaThesis5Title:"能力圏：ハード／テック",godzillaThesis5Body:"ハード／テック——NVDA最大。PLTR、AVGO、TSMも。テック外は少ない。指数は今は小さめ、終局はほぼ指数。",godzillaThesis6Title:"税がペースを決める",godzillaThesis6Body:"高W2はCG税が重い。退職後は数年かけて個別→指数へ税負担を許容内に。カバードコールで下落緩衝。",godzillaThesis7Title:"オプションは道具",godzillaThesis7Body:"主に売り手（CC／CSP）。ロングコール／LEAPは恐慌や価格とファンダ乖離時のみ少額。プレミアム全損を許容。裸売りなし。",godzillaThesis8Title:"カバードコール：割当リスクはロール",godzillaThesis8Body:"割当リスクなら時間を延ばしてロール。小さなプレミアムのためにコアを売らない。不安なら枚数を減らす。",godzillaThesis9Title:"エントリーはトレンド待ち",godzillaThesis9Body:"きれいな決算1–2回でトレンド確認。コストが上がっても可。余資で良い会社を買い続ける。話題の噂は追わない。",godzillaThesis10Title:"米／台の観察は分ける",godzillaThesis10Body:"米CG税→長期保有寄り。台はCGなし＋取引税→回転と投機文化が強め（観察のみ）。",godzillaChecklistTitle:"作法チェック",godzillaChecklistLead:"自己点検。発注リストではない。",godzillaCheck1:"物欲を低く。「足りた」数字を無限に上げない。",godzillaCheck2:"現物が核。オプションは衛星／ヘッジ／まれなレバレッジ。",godzillaCheck3:"借入なし。ゼロを受け入れられないならオプションしない。",godzillaCheck4:"オプションは流動性の高い大型株優先。",godzillaCheck5:"終局目安：約80%広範指数、小さな業種スリーブ（＋まれな少額コール）。",godzillaCheck6:"PLTR例：前線エンジニアによるB2B収益化。商業成長が失望なら縮小。",godzillaOptionsTitle:"オプションの使い方",godzillaOptionsLead:"売り手優先。買い側は極端な乖離時のみ。",godzillaOpt1:"主力：カバードコール、キャッシュ担保プット。",godzillaOpt2:"少額ロングコール／LEAP：恐慌やファンダ乖離時。",godzillaOpt3:"プレミアムは全損あり得る。裸売りなし。",godzillaOpt4:"割当リスクはロール。コアを小さなプレミアムで売らない。",godzillaRsuTitle:"RSU・税・ローテーション",godzillaRsuLead:"インセンティブ、分散、退職後の税ペース。",godzillaRsu1:"確定RSUは当日売却し信念銘柄へ（例：NVDA）。",godzillaRsu2:"在職中は大口実現益を抑え、退職後に数年かけて個別→指数。",godzillaRsu3:"カバードコールは下落緩衝であり方向賭けではない。",godzillaTwTitle:"台湾市場の観察",godzillaTwLead:"米フレームワークと分離。税／文化の観察のみ。",godzillaTwBody:"米はCG税で長期寄り。台はCGなし＋取引税で回転と短期文化が目立つ。本ページは米枠が主軸。台は対照のみで正式スクリーナーには入れない。",godzillaGateNote:"正式スクリーナー未収録",godzillaGateDetail:"状態：候補／strategyCandidate=watch。数学ゲート閉鎖——ライブスクリーナーやペーパー取引には未接続。閲覧用。",jensenTitle:"ジェンスン・フアン（黄仁勲）",jensenHandle:"Stanford Entrepreneurial Thought Leaders · NVIDIA",jensenLead:"Stanford STVP／Entrepreneurial Thought Leaders 公開講演の整理：視点、需要とムーアの法則、文化、キャッシュ現実、再発明——候補／様子見。投資助言ではありません。",jensenDisclaimer:"投資助言ではありません。Stanford Online 公開講演（約2009；YouTube 2011アップロード）の整理。論点は講演者の自述テーマ。数学ゲート未通過のため候補／様子見のみ。",jensenHeroLabel:"ジェンスン・フアン講演の要点",jensenKicker:"候補講演 · 米国テック／半導体の会社づくり",jensenTagline:"曖昧な「ビジョン」より視点。文化と再発明が長期の会社建設を支える。",jensenUsFocus:"米国テック中心",jensenTalkBadge:"公開講演",jensenMeta:"Stanford Online · STVP ETL · 約1:03:38 · アップロード 2011-06-23",jensenSourceCite:"Jen-Hsun Huang · Stanford Online",jensenYoutube:"YouTube で講演を見る",jensenOpenYoutube:"YouTube でフル動画を開く",jensenEmbedTitle:"Jen-Hsun Huang: Stanford student and Entrepreneur（Stanford Online）",jensenEcorner:"Stanford eCorner／STVP 関連クリップ",jensenHighlightsTitle:"講演の要点（平易）",jensenHighlightsLead:"公開講演に繰り返し現れる5テーマ。逐語録ではありません。",jensenH1Title:"曖昧な「ビジョン」ではなく視点",jensenH1Body:"誰もが視点を持つ。NVIDIA 初期の賭けは、PC＋安価な3Dがゲーム市場を開く（後に Keyhole→Google Earth にも言及）というもので、当時多くのVCには市場がほぼゼロに見えた。",jensenH2Title:"飽くなき需要とムーアの法則",jensenH2Body:"新カテゴリがまだ値付けできないとき、顧客の声を一時無視することもある。rinse-and-repeat の後、「十分良い」が媒体を殺す前に再発明（固定機能→プログラマブルシェーダ／GeForce FX の瀕死、CG言語）。",jensenH3Title:"文化：計算されたリスク",jensenH3Body:"革新には計算されたリスク、速い失敗への耐性、知的誠実さ、進路変更の意思が必要。動機は情熱と目的であり「会社を売る」ことではない。",jensenH4Title:"キャッシュとスタートアップの現実",jensenH4Body:"常に資金調達、節約、または収益化。スタートアップはほぼ常に倒産寸前。VCは完璧な事業計画より、人と十分大きな市場に賭ける。",jensenH5Title:"再発明：成功も解体して再建",jensenH5Body:"あらゆる成功は最終的に解体し再建される。フアンが語るのは長期の会社建設であり、連続フリップではない。",jensenTwTitle:"米／台の分離（文脈のみ）",jensenTwLead:"市場の主軸は米国テック／半導体の会社建設。台湾はサプライチェーン文脈のみ——台湾株の銘柄創作なし。",jensenTwBody:"米半導体／計算プラットフォームとしての NVDA は、台湾のファウンドリと OSAT 生態系と強く結ばれる——産業文脈の注記のみ。台湾銘柄リストなし、正式スクリーナー未接続。",jensenGateNote:"正式スクリーナー未収録",jensenGateDetail:"状態：候補／strategyCandidate=watch。数学ゲート閉鎖——ライブスクリーナーやペーパー取引には未接続。閲覧用。",jensenWatchCta:"YouTube で視聴",jensenEmbedBlockedNote:"この講演は所有者の設定により YouTube でのみ視聴できます（他サイトへの埋め込みは無効）。",optionsTitle:"米国オプション",optionsLead:"McMillan の戦略ファミリーを軸に、ボラと損益形→公開 Yahoo チェーンで学習。投資助言ではありません。",optionsDisclaimer:"投資助言ではありません。オプションは高リスク。教育と公開データのみ。",optionsBookBadge:"この本",optionsBookCite:"主要参考文献",optionsBookLead:"Lawrence G. McMillan『選択権策略完全手冊』第5版：見通し＋ボラで戦略族へ（独自要約・原文なし）。",optionsBookFallbackTitle:"McMillan オプション戦略ハンドブック",optionsGotoResearch:"研究ライブラリの条目へ",optionsUsOnly:"米国のみ",optionsQualityTitle:"原資産の軽い財務チェック",optionsQualityLead:"副次フィルタ：PER、PBR、負債、ROE、売上／利益トレンド。欠落は資料不足。",optionsViewTitle:"オプション観点（McMillan）",optionsViewLead:"公開チェーン：ATM IV、実現ボラ、出来高偏り。戦略族は教育用。",optionsMcmillanFirst:"先にボラ状態と損益形を合わせ、その後でファミリーを選ぶ。",optionsPe:"PER",optionsPb:"PBR",optionsDebt:"負債／資本",optionsRoe:"ROE",optionsRevTrend:"売上トレンド",optionsEarnTrend:"利益トレンド",optionsGate:"品質ゲート",optionsGatePass:"通過",optionsGateWatch:"注視",optionsGateFail:"弱め",optionsGateIncomplete:"資料不足",optionsDataMissing:"資料不足",optionsForwardPe:"予想PER",optionsTrendUp:"上昇 約{pct}%",optionsTrendDown:"低下 約{pct}%",optionsTrendFlat:"横ばい 約{pct}%",optionsAtmIv:"ATM インプライド",optionsHv:"歴史ボラ（約1か月）",optionsIvHv:"IV／HV",optionsVolRegime:"ボラ状態",optionsRegimeIvRich:"IV高め",optionsRegimeIvCheap:"IV安め",optionsRegimeIvFair:"おおむね均衡",optionsRegimeIvOnly:"IVのみ",optionsCallPutVol:"コール／プット出来高",optionsAtmStrike:"近ATM行使価格",optionsExpiry:"満期",optionsSkewPutHeavy:"プット寄り",optionsSkewCallHeavy:"コール寄り",optionsSkewBalanced:"おおむね均衡",optionsEduSetups:"戦略ファミリー（教育）",optionsEduSetupsLead:"見通し＋ボラで選ぶ。緑は現状の IV/HV とよく議論される組（助言ではない）。",optionsSetupCoveredCall:"カバードコール",optionsSetupCoveredCallBody:"株を持ちコールを売る。プレミアムを得るが上昇は頭打ち。",optionsSetupCoveredCallWarn:"利益に天井。株の下落リスクは残る。",optionsSetupProtectivePut:"プロテクティブプット",optionsSetupProtectivePutBody:"株＋プット買い＝保険。下値に床、だが保険料がかかる。",optionsSetupProtectivePutWarn:"保険コストがリターンを削る。IVが高いと高い。",optionsSetupVertical:"バーティカル",optionsSetupVerticalBody:"同満期・異行使価格で損益を枠内に限定。",optionsSetupVerticalWarn:"方向ミスでも損失。ただし上限あり。",optionsSetupCalendar:"カレンダー／ダイアゴナル",optionsSetupCalendarBody:"異満期で時間やボラ変化の見方を表す。",optionsSetupCalendarWarn:"時間とボラに敏感。スポット移動で形が変わる。",optionsSetupStraddle:"ストラドル／ストラングル",optionsSetupStraddleBody:"両側で「大きく動く」か「動き不足」に賭ける。",optionsSetupStraddleWarn:"買いは大きな値動きが必要。売りは両側リスク。",optionsSetupButterfly:"バタフライ",optionsSetupButterflyBody:"中心付近にピン留めを期待。利益ゾーンは狭い。",optionsSetupButterflyWarn:"スイートスポットが薄い。外れると最大損に近い。",optionsSetupVolAligned:"現状ボラとよくセットで語られる",optionsSetupVolNotAligned:"現状ボラとはやや遠い（学習は可）",optionsRiskShape:"損益の形（平易）",optionsNoSetups:"戦略メモなし",optionsPickTicker:"上のティッカーを選んでください",optionsChainBlocked:"オプションチェーンを取得できません",optionsPartialBlocker:"一部フィールド不足",optionsRefreshHow:"データはサイト更新に合わせて反映されます。表示がおかしい場合はしばらくしてから再試行してください。",optionsLoadError:"オプションスナップショットを読めません（{msg}）",optionsEmpty:"米国サンプルなし — 先に fetch-us-options",optionsGlossaryTitle:"小さな用語集（式なし）",optionsTermDelta:"デルタ（方向感）",optionsDefDelta:"株が動くときオプションがどれだけ付きやすいか。1や−1に近いほど連動が強い。",optionsTermIv:"インプライドボラ IV",optionsDefIv:"市場が織り込む将来の揺れ。高いほどオプションは高くなりやすい。",optionsTermHv:"歴史ボラ HV",optionsDefHv:"直近の実際の値動きの大きさ。IVと比較する。",optionsTermAtm:"ATM（ニアマネー）",optionsDefAtm:"現値に最も近い行使価格。ボラの温度計によく使う。",optionsTermSkew:"出来高の偏り",optionsDefSkew:"コールとプットのどちらが多いか。粗い保険／追撃のヒント。",optionsTermProb:"確率（教育）",optionsDefProb:"「多め／少なめ」の直感のみ。結果保証や個人勝率は出さない。",researchLead:"書籍と論文：タイトル → 要約 → 要点のやり方 → 戦略候補の可否",researchMathGateBanner:"戦略への正式採用は数学ゲート通過が必要（未通過）— 候補のみ",researchMathGate:"数学ゲート",researchMathGateDefault:"数学ゲート未通過",researchFormulas:"プログラム可能な式",researchTakeaways:"要点のやり方",researchNoTakeaways:"要点なし",researchSources:"出典",researchFilters:"フィルター",researchFilterAll:"すべて",researchType:"種類",researchTypeBook:"書籍",researchTypePaper:"論文",researchTypePodcast:"ポッドキャスト",researchMarketBoth:"米＋台",researchStrategy:"戦略候補",researchCandYes:"候補採用",researchCandNo:"不採用",researchCandWatch:"様子見",researchStatusCandidate:"候補",researchStatusDeferred:"保留",researchStatusAdopted:"採用",researchStatusRejected:"除外",researchCounts:"書籍 {books} · 論文 {papers} · Podcast {podcasts} · 表示 {total}",researchEmpty:"この条件に一致する項目はありません",researchNoFormulas:"式なし",researchLoadError:"研究ライブラリを読み込めません（{msg}）",researchShelfFilters:"書棚分類",researchShelfCoreInvesting:"コア投資クラシック",researchShelfValueInvesting:"バリュー投資",researchShelfBusiness:"ビジネス／経営",researchShelfLifePartner:"人生とパートナーの知恵",researchShelfOptions:"オプション／デリバティブ",researchShelfRecentReads:"最近の読書・推薦",researchShelfFiConcepts:"必須のマネーリテラシー",researchShelfMoneyValues:"お金の価値観",researchShelfInvestingBasics:"投資入門",researchShelfAssetAllocation:"資産配分",researchShelfFinancials:"財務諸表分析",researchShelfMarketAnalysis:"投資分析・市場攻略",researchShelfEconAnalysis:"経済分析",researchShelfPsych:"投資心理／ランダム／人間性",researchShelfBiographies:"伝記",researchShelfAdjacent:"その他／隣接",todayPicks:"本日の選株",market:"市場",hot:"相場",marketQuotes:"相場気配",macroTitle:"米株重要日程",macroTzEt:"時刻・米東部 ET",macroAsOf:"更新",macroStale:"データが古い（前回成功分を表示）",macroToday:"本日",macroNext:"次",macroHighImpact:"高影響",macroEmpty:"直近の高影響イベントなし（または未更新）",macroLoadError:"米株重要日程を読み込めません（{msg}）",macroEvent_fomcDecision:"FOMC 金利決定",macroEvent_fomcMinutes:"FOMC 議事要旨",macroEvent_cpi:"CPI",macroEvent_ppi:"PPI",macroEvent_pce:"PCE／コア PCE",macroEvent_nfp:"非農業部門雇用者数",macroEvent_joblessClaims:"新規失業保険申請",macroEvent_gdp:"GDP",macroEvent_retailSales:"小売売上高",macroEvent_ismMfg:"ISM 製造業",macroEvent_ismServices:"ISM 非製造業",macroEvent_jolts:"JOLTS",usStock:"米国株",twStock:"台湾株",usList:"米国リスト",twList:"台湾リスト",usTop:"米国 Top",twTop:"台湾 Top",emptyTop:"{market} の Top 候補はありません",ticker:"銘柄",name:"名称",price:"価格",dayPct:"日次%",priorClose:"前日比",priorCloseFull:"前日終値比",pct5d:"5日",pct1m:"約1ヶ月",volRatio:"出来高比",ma:"移動平均",screening:"スクリーニング",reason:"理由",details:"詳細",business:"事業",risk:"リスク",observe:"観察",dataIncomplete:"データ不足",intraday:"場中",taipeiClose:"台北終値",parity:"パリティ",implied:"理論価格",premium:"プレミアム",adsRatio:"交換比率",taiex:"台湾加重 TAIEX",otc:"櫃買",loadError:"データを読み込めません（{msg}）。静的サーバーと data/latest.json を確認してください。",langLabel:"言語",paper:"模擬",paperMissing:"模擬ポートフォリオがありません。npm run paper を実行してください。",paperDisclaimer:"累積模擬口座（{date} 起） · 毎日リセットしません · シグナル即約定 · 実注文ではありません",paperRules:"ルール（市場別独立口座）",paperRuleTw:"台湾元本 NT$3,000,000 · 単元取引",paperRuleUs:"米国元本 US$100,000 · 1株から",paperRuleBuy:"買：リスト·リスク1%·ストップ1.5%·単銘柄≤8% · 即約定",paperRuleSell:"売：損切−3% · 利確+12%半分 · SMA20割れかつ日−2%超 · リスト外かつ損失 · ストップ高翌日−5%",paperTabTw:"台湾口座 · NT$",paperTabUs:"米国口座 · US$",paperBookTw:"台湾帳簿（NT$）",paperBookUs:"米国帳簿（US$）",principal:"元本",cash:"現金",equity:"純資産（ポジション＋現金）",totalPnl:"総損益",totalPnlPct:"総損益％",weekPerf:"週次",monthPerf:"月次",quarterPerf:"四半期",yearPerf:"年次",sinceInception:"開始以来",noTradesToday:"本日この種別の約定はありません（模擬）",noPositions:"保有なし",buy:"買",sell:"売",shares:"株",qtyShares:"株数",positions:"現在のポジション",position:"ポジション",avgCost:"平均単価",mark:"時価",mktValue:"時価総額",dayPnl:"日次損益",costBasis:"取得総額",weightPct:"比率％",posScrollHint:"左右にスクロールで全列",unrealizedPnl:"含み損益",unrealizedPct:"含み％",recentTrades:"約定（直近40）",paperSession:"{date} · {inception} から累積 · シグナル即約定",reasonScreenBuy:"リスト新規",reasonAdd:"追加買い",reasonStop:"損切り",reasonTakeProfit:"利確",reasonMomentumBreak:"モメンタム悪化",reasonOffList:"リスト外",reasonLimitUpChase:"ストップ高追撃解消",stopLoss:"損切り",takeProfit:"利確",paperTrade:"模擬",realizedPnl:"損益",periodPerf:"パフォーマンス",qty:"数量",note:"備考",strategyScreen:"戦略スクリーナー",strategyLead:"米／台ヒットを分けて表示 · データ不足は「不足」",strategyLoading:"戦略を読み込み中…",strategyEmpty:"戦略データがありません。npm run strategies を実行してください。",strategyLoadError:"戦略を読み込めません（{msg}）。npm run strategies を確認してください。",strategyList:"戦略一覧",strategyCat:"カテゴリ",hitCount:"ヒット",hitTitle:"ヒット数",strategyDetails:"詳細 · 戦略説明",conditions:"条件",results:"結果",copyJson:"JSON をコピー",exportCsv:"この戦略を CSV 出力",exportJson:"JSON 出力",copied:"コピー済み",noHitsExport:"本日この戦略のヒット行はありません",incomplete:"不足",hitsTotal:"{n}件",twOnlyHint:"台湾株のみ",hitMarket:"ヒット市場",noHits:"本日ヒットなし",dataInsufficient:"データ不足",calibTitle:"キャリブレーション",incompleteFilters:"未検査フィルター（通過扱いしない）：",sessionTwse:"TWSE session",ohlcvBar:"OHLCV バー",generated:"生成",universeTw:"台湾ユニバース",universeUs:"米国ユニバース",cat精選:"厳選",cat價量:"価格/出来高",cat籌碼:"需給",cat財務:"財務",cat大師:"マスター",cat週期:"サイクル",cat技術:"テクニカル",cat基本:"ファンダ",cat綜合:"総合",addWatchlist:"ウォッチ追加",watchlistAdded:"{ticker} を追加しました",watchlistExists:"{ticker} は登録済み",copyFailed:"コピー失敗",csvDownloaded:"CSV を保存しました",csvBlocked:"ダウンロード阻害 — データURIを開きます",backtestSoon:"バックテスト：未開放",backtestHint:"バックテストエンジン未開放（偽結果なし）",regimeToday:"本日の市場レジーム（米／台は別管理）",psychologyPhase:"心理フェーズ",cycleStance:"サイクル姿勢",liquidityBias:"流動性バイアス",temperatureScore:"市場温度",sizeMult:"サイズ倍率",regimeTags:"レジームタグ",dataGaps:"データ欠落",marketRegime:"市場レジーム",enum_euphoric:"陶酔",enum_late_optimism:"後期楽観",enum_mid_cycle:"中期",enum_cautious_recovery:"慎重な回復",enum_despondent:"絶望",enum_panic:"パニック",enum_defensive:"守備的",enum_selective:"厳選",enum_balanced:"均衡",enum_constructive:"建設的",enum_aggressive:"積極",enum_stabilize_first:"まず安定",enum_risk_off:"リスクオフ",enum_risk_on:"リスクオン",enum_neutral:"中立",logicTitle:"選別ロジック",logicSubtitle:"レジーム→スクリーニング→戦略→降格→理由→サイジング — 監査可能な数式",logicNoRegime:"市場レジーム未取得（次回スキャン待ち）。",logicStep1:"市場レジーム",logicStep1Lead:"米／台を別ダイヤルで先に決め、その後銘柄を選別。Kostolany 位相 × Marks 温度 × 金利流動性。",logicStep1Caption:"位相 → スクリーニング姿勢 → サイズ倍率（STANCE_SIZE_MULT）",logicRatesR2:"R2：^TNX が 20 日で +0.25pp 以上 → 流動性は防御寄り（価格が中立でも）。",logicRatesR3:"R3：利回りが 60 日で −0.25pp 以下 → より積極ダイヤルを許容（陶酔以外）。",logicRatesSeparate:"硬規則：dial_US と dial_TW は分離。単一の「世界ムード」にしない。",logicStep2:"数式スクリーン（A／B）",logicStep2Lead:"RS・モメンタム・SMA・出来高。閾値はサイクル姿勢で変動。",logicScreenA:"スクリーン A · モメンタム／RS",logicScreenABalanced:"均衡：日RS≥0.5pp または日≥1.5%；または5日≥3%；または1月≥6%かつ>SMA20；または両MAで5日≥0／RS≥0。",logicScreenASelective:"厳選：>SMA50 かつ（RS≥0.5 または5日≥3% または1月≥6%かつSMA20）。",logicScreenADefensive:"守備的：SMA20+SMA50、かつ（RS≥0.8 または5日≥4%）、出来高≥1.0（欠損は可）；1月≥12%かつ出来高<0.8 → 除外。",logicScreenAAggressive:"積極／建設的：RS／日／5日／1月を緩和；SMA200 下の firm-hands 可（1月<0かつ出来高≥1.4）。建設的は SMA20 または SMA200 も必要。",logicScreenAStabilize:"まず安定：>SMA20 必須、かつ RS≥1.0pp または出来高≥1.5。",logicScreenB:"スクリーン B · 出来高",logicScreenBVol:"出来高比＝当日／20日平均。下限：守備的≥1.0；積極≥1.1；他≥1.2。",logicScreenBMom:"A 補完：A未達でも1月≥8%かつSMA20+SMA50（まず安定以外）→ A 付与。",logicScore:"順位スコア",logicScoreFormula:"score = 日RS×2 + 5日%×0.35 + 1月%×0.15",logicScoreSma:"SMA20 +1.5 · SMA50 +1 · SMA200 +0.5",logicScoreVol:"出来高≥1.2 加点（上限約8×0.6）；<0.4 で −0.5；その後レジームで調整。",logicStep3:"XQ 戦略",logicXqLead:"日次リストと並行：条件ヒット（価格/出来高・需給・財務・マスター・サイクル）。欠落は「不足」—捏造しない。",logicXqPriceVol:"価格/出来高：移動平均ブル、超短期など（OHLCV）。",logicXqFlow:"需給：法人同期など（公開単元閾値）。",logicXqFund:"財務：利益増加、PE／利益率など公開欄。",logicXqMasters:"マスター：リンチ／グレアム／バフェット系の計算可能代理。",logicXqCycle:"サイクル：Kostolany／市場レジームパック（当日の米台ダイヤル）。",logicOpenStrategies:"戦略ページを開く",logicStep4:"順位の降格／加点",logicStep4Lead:"scoreAdjust：薄い高RS、firm-hands、パニック後の安定で加減点。",logicDemoteHot:"守備的／厳選：1月≥8%かつ出来高<0.8 → −2.5；出来高<0.7かつ日>+2% → −1.2；両MA欠で −1.5。",logicDemoteThin:"K5：強いRSでも薄い出来高 → 降格／積極バケット外。",logicPromoteFirm:"aggressive／constructive：弱含み＋出来高増＋>SMA200（firm-hands）→ +2.2；序盤の上昇日出来高 +1.0。",logicDemotePanic:"stabilize_first：基準 −3；>SMA20 なら +1.5。",logicListSize:"リスト長：守備的≈0.55×；厳選≈0.75×；まず安定≈0.45×；積極+2（上限14）；基準12。",logicStep5:"「なぜ」の組み立て",logicStep5Lead:"why 欄は検証済みフィールドの読みやすい結合 — ブラックボックスではない。",logicWhyRs:"日次% + 指数対比（米：S&P；台：TAIEX）pp。",logicWhyMom:"5日% と 約1か月%。",logicWhyVol:"出来高比≥1.2 のときのみ出来高文を追加。",logicWhySma:"SMA20／50／200 の上抜け状態（両MA優先）。",logicWhyRegime:"レジーム注記または姿勢／心理フェーズタグを付記。",logicStep6:"ペーパー・サイジング規律",logicStep6Lead:"ペーパー口座はプロセス検証用 — 実注文ではない。レジームサイズ倍率と固定リスク式で制約。",logicPaperCapital:"元本：台湾 NT$3,000,000（単元）；米国 US$100,000（1株〜）。",logicPaperBuy:"買い：リスト（observeのみは原則回避）；リスク＝資本×1%；ストップ≈価格×1.5%（出来高≥3→2.5%）；1銘柄≤資本8%。",logicPaperSizeMult:"サイズ倍率（0.3–1.35×）で当日の積極度を表示；リスト長と連動。",logicPaperSell:"売り：損切−3%；利確+12%半減；SMA20割れかつ日<−2%；リスト外かつ含み損；ストップ高追撃の翌日−5%。",logicOpenPaper:"ペーパーを開く",logicFootnote:"透明なスクリーニング説明のための合成 — 投資助言ではない。公開の運用代理のみ；著作権保護の本文は複製しない。",condPass:"条件",condFail:"未達",condSkip:"省略",pe:"PER",opMargin:"営業利益率",grossMargin:"粗利率",foreignInv:"外資",trustInv:"投信",dealerInv:"自己売買",maBull:"移動平均ブル",amplitude:"振幅",zhang:"単元",limitUp:"ストップ高",momentum:"モメンタム",metricPrice:"価格",metricDayPct:"日次%",metricVolRatioYday:"出来高比(昨)",metricVolToday:"出来高(単元)",metricDebt:"負債比率%",metricDirector:"役員持株%",metricOpQ:"直近四半期営業利益率%",metricSource:"出典",foreign1d:"外資1日(単元)",trust1d:"投信1日(単元)",dealer1d:"自己1日(単元)",foreign5d:"外資5日(単元)",trust5d:"投信5日(単元)",dealer5d:"自己5日(単元)"},_e={"zh-Hant":Fe,en:Aa,"zh-Hans":Ea,ja:xa},Ma=/\b(euphoric|late_optimism|mid_cycle|cautious_recovery|despondent|panic|defensive|selective|balanced|constructive|aggressive|stabilize_first|risk_off|risk_on|neutral)\b/g;function U(t){if(t==null||t==="")return a("dataInsufficient");const e=String(t),o=`enum_${e}`,n=e.includes("_")?e.replace(/_/g," "):e;return a(o,n.replace(/\b\w/g,i=>i.toUpperCase()))}function Ra(t){const e=String(t||"").toLowerCase();return["defensive","selective","balanced","constructive","aggressive","stabilize_first"].includes(e)?e.replace(/_/g,"-"):"neutral"}function za(t){return t==null||t===""?"":String(t).replace(Ma,e=>U(e))}function a(t,e,o){let n,i=o;e&&typeof e=="object"&&!Array.isArray(e)?i=e:typeof e=="string"&&(n=e);let r=(_e[q]||_e[Ke])[t]??_e[Ke][t]??n??t;if(i)for(const[c,p]of Object.entries(i))r=r.replace(new RegExp(`\\{${c}\\}`,"g"),String(p));return r}function Ba(){const t=Yt.map(e=>`<option value="${e.id}"${e.id===q?" selected":""}>${e.label}</option>`).join("");return`
    <label class="lang-switch" title="${a("langLabel")}">
      <span class="lang-switch-label">${a("langLabel")}</span>
      <select class="lang-select" data-lang-select aria-label="${a("langLabel")}">
        ${t}
      </select>
    </label>`}function Da(t,e){var n;const o=(n=t==null?void 0:t.querySelector)==null?void 0:n.call(t,"[data-lang-select]");o&&(o.value=q,o.addEventListener("change",()=>{Ca(o.value)}))}function s(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function h(t,e){return s(a(t,e))}const Na="./data/paper-portfolio.json";function X(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function xe(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function Zt(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(R(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Jt(t){return t==="USD"?"US$":t==="TWD"?"NT$":""}function G(t,e){if(t==null||Number.isNaN(t))return"—";const o=e==="TWD"?0:2;return`${Jt(e)}${Zt(t,o)}`}function Me(t,e){if(t==null||Number.isNaN(t))return"—";const o=e==="TWD"&&t>=100?0:2;return`${Jt(e)}${Zt(t,o)}`}function ea(t){return{"screen-buy":a("reasonScreenBuy"),add:a("reasonAdd"),stop:a("reasonStop"),"take-profit":a("reasonTakeProfit"),"momentum-break":a("reasonMomentumBreak"),"off-list":a("reasonOffList"),"limit-up-chase":a("reasonLimitUpChase")}[t]||t||""}function he(t){return t?`
    <div class="paper-win">
      <div class="w-label">${t.sinceInception?h("sinceInception",a("sinceInception")):s(t.label||"")}</div>
      <div class="w-val ${X(t.pct)}">${xe(t.pct)}</div>
    </div>`:'<div class="paper-win"><div class="w-label">—</div><div class="w-val">—</div></div>'}function ja(t,e){return t.length?t.map(o=>{var n;return`
      <tr>
        <td><span class="ticker">${s(o.ticker)}</span></td>
        <td class="name-cell">${s(o.name||"")}</td>
        <td class="num">${(n=o.qty)==null?void 0:n.toLocaleString(R())}</td>
        <td class="num">${Me(o.price,e)}</td>
        <td><span class="badge reason ${s(o.reason||"")}">${s(ea(o.reason))}</span></td>
        <td class="why-cell">${s(o.reasonText||"")}</td>
      </tr>`}).join(""):`<tr><td colspan="6" class="empty-cell">${s(a("noTradesToday"))}</td></tr>`}function Ha(t){return t.dayPct==null||Number.isNaN(t.dayPct)||t.mark==null||t.qty==null?null:t.mark*t.qty*t.dayPct/100}function Oa(t,e,o){if(!t.length)return`<tr><td colspan="11" class="empty-cell">${s(a("noPositions"))}</td></tr>`;const i=o>0?o:t.reduce((l,r)=>l+(r.mark||0)*(r.qty||0),0);return t.map(l=>{var k;const r=(l.mark||0)*(l.qty||0),c=(l.avgCost||0)*(l.qty||0),p=(l.mark-l.avgCost)*l.qty,d=l.avgCost?(l.mark-l.avgCost)/l.avgCost*100:0,m=Ha(l),g=i>0?r/i*100:null,y=l.name?s(l.name):"";return`
      <tr class="pos-row" data-ticker="${s(l.ticker)}" tabindex="0">
        <td class="pos-sym">
          <span class="ticker">${s(l.ticker)}</span>
          ${y?`<span class="pos-name">${y}</span>`:""}
        </td>
        <td class="num">${(k=l.qty)==null?void 0:k.toLocaleString(R())}</td>
        <td class="num">${Me(l.mark,e)}</td>
        <td class="num">${G(r,e)}</td>
        <td class="num ${X(m)}">${m==null?"—":G(m,e)}</td>
        <td class="num ${X(l.dayPct)}">${xe(l.dayPct)}</td>
        <td class="num ${X(p)}">${G(p,e)}</td>
        <td class="num ${X(d)}">${xe(d)}</td>
        <td class="num">${G(c,e)}</td>
        <td class="num">${Me(l.avgCost,e)}</td>
        <td class="num">${g==null?"—":`${g.toFixed(2)}%`}</td>
      </tr>`}).join("")}function Fa(t,e,o){const n=e.currency,i=a(t==="TW"?"paperBookTw":"paperBookUs"),l=G(e.startCash,n),r=(o==null?void 0:o.totalPnl)??e.equity-e.startCash,c=(o==null?void 0:o.totalPnlPct)??(e.startCash?(e.equity-e.startCash)/e.startCash*100:0);return`
    <article class="paper-book">
      <h3 class="paper-book-title">${s(i)}</h3>
      <p class="paper-start">${h("principal",a("principal"))} ${l}</p>
      <div class="paper-kpis">
        <div class="paper-kpi">
          <div class="k-label">${s(a("cash"))}</div>
          <div class="k-val">${G(e.cash,n)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${h("position",a("equity"))}</div>
          <div class="k-val">${G(e.equity,n)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${s(a("totalPnl"))}</div>
          <div class="k-val ${X(r)}">${G(r,n)}</div>
        </div>
        <div class="paper-kpi">
          <div class="k-label">${s(a("totalPnlPct"))}</div>
          <div class="k-val ${X(c)}">${xe(c)}</div>
        </div>
      </div>
      <div class="paper-windows">
        <div>
          <div class="win-name">${s(a("weekPerf"))}</div>
          ${he(o==null?void 0:o.week)}
        </div>
        <div>
          <div class="win-name">${s(a("monthPerf"))}</div>
          ${he(o==null?void 0:o.month)}
        </div>
        <div>
          <div class="win-name">${s(a("quarterPerf"))}</div>
          ${he(o==null?void 0:o.quarter)}
        </div>
        <div>
          <div class="win-name">${s(a("yearPerf"))}</div>
          ${he(o==null?void 0:o.year)}
        </div>
      </div>
    </article>`}function qa(t,e){return t.length?t.map(o=>{var i;const n=o.side==="SELL"?a("sell"):a("buy");return`
      <div class="list-card paper-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${s(o.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${s(o.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${s(n)} ${(i=o.qty)==null?void 0:i.toLocaleString(R())} ${s(a("shares"))}</div>
            <div style="font-family:var(--mono)">${Me(o.price,e)}</div>
          </div>
        </div>
        <div class="flags" style="margin-bottom:0.35rem">
          <span class="badge reason ${s(o.reason||"")}">${s(ea(o.reason))}</span>
        </div>
        ${o.reasonText?`<p class="lc-why">${s(o.reasonText)}</p>`:""}
      </div>`}).join(""):`<div class="list-card empty-card">${s(a("noTradesToday"))}</div>`}function Ve(t,e,o){return`
    <div class="paper-table-block">
      <h4>${s(t)}</h4>
      <div class="table-wrap">
        <table class="stock-table paper-table">
          <thead>
            <tr>
              <th>${h("ticker",a("ticker"))}</th>
              <th>${s(a("name"))}</th>
              <th>${s(a("qty"))}</th>
              <th>${s(a("price"))}</th>
              <th>${s(a("reason"))}</th>
              <th>${s(a("note"))}</th>
            </tr>
          </thead>
          <tbody>${ja(e,o)}</tbody>
        </table>
      </div>
      <div class="mobile-list">${qa(e,o)}</div>
    </div>`}function Ia(t,e,o){return`
    <div class="paper-table-block paper-pos-block">
      <div class="pos-block-head">
        <h4>${s(a("positions"))}</h4>
        <span class="pos-scroll-hint">${s(a("posScrollHint"))}</span>
      </div>
      <div class="pos-scroll" role="region" aria-label="${s(a("positions"))}">
        <table class="pos-table">
          <thead>
            <tr>
              <th class="pos-sym">${h("ticker",a("ticker"))}</th>
              <th class="num">${s(a("qty"))}</th>
              <th class="num">${s(a("mark"))}</th>
              <th class="num">${s(a("mktValue"))}</th>
              <th class="num">${s(a("dayPnl"))}</th>
              <th class="num">${s(a("dayPct"))}</th>
              <th class="num">${s(a("unrealizedPnl"))}</th>
              <th class="num">${s(a("unrealizedPct"))}</th>
              <th class="num">${s(a("costBasis"))}</th>
              <th class="num">${s(a("avgCost"))}</th>
              <th class="num">${s(a("weightPct"))}</th>
            </tr>
          </thead>
          <tbody>${Oa(t,e,o)}</tbody>
        </table>
      </div>
    </div>`}function Ct(t,e,o,n,i,l){if(!e)return"";const r=e.currency,c=[...e.trades||[]].sort((k,b)=>k.date<b.date?1:k.date>b.date?-1:0),p=c.filter(k=>k.date===n),d=p.filter(k=>k.side==="BUY"),m=p.filter(k=>k.side==="SELL"),g=c.slice(0,40),y=l;return`
    <div class="paper-panel ${i?"active":""}" id="paper-panel-${t}" role="tabpanel">
      ${Fa(t,e,o)}
      <p class="paper-session-note">${s(a("paperSession",{date:n||"—",inception:y}))}</p>
      ${Ve(`${a("buy")} ${n||""}`,d,r)}
      ${Ve(`${a("sell")} ${n||""}`,m,r)}
      ${Ia(e.positions||[],r,e.positionsValue)}
      ${Ve(a("recentTrades"),g,r)}
    </div>`}function Ua(t){var r,c;if(!t||!t.books)return`
      <section class="section paper-section" id="paper">
        <h2 class="section-title">${h("paperTrade",a("paper"))}</h2>
        <p class="paper-missing">${s(a("paperMissing"))}</p>
      </section>`;const e=t.books.TW,o=t.books.US;let i=(t.asOf||"").slice(0,10);try{i=new Date(t.asOf).toLocaleDateString("en-CA",{timeZone:"Asia/Taipei"})}catch{}const l=t.startDate||(e==null?void 0:e.startDate)||(o==null?void 0:o.startDate)||"2026-09-15";return`
    <section class="section paper-section" id="paper">
      <h2 class="section-title">${h("paperTrade",a("paper"))}</h2>
      <p class="paper-disclaimer" role="note">
        ${s(a("paperDisclaimer",{date:l}))}
      </p>
      <details class="paper-rules">
        <summary>${s(a("paperRules"))}</summary>
        <ul>
          <li>${s(a("paperRuleTw"))}</li>
          <li>${s(a("paperRuleUs"))}</li>
          <li>${s(a("paperRuleBuy"))}</li>
          <li>${s(a("paperRuleSell"))}</li>
        </ul>
      </details>
      <div class="tabs paper-tabs" role="tablist">
        <button type="button" class="paper-tab-btn active" data-paper-tab="TW" role="tab" aria-selected="true">${s(a("paperTabTw"))}</button>
        <button type="button" class="paper-tab-btn" data-paper-tab="US" role="tab" aria-selected="false">${s(a("paperTabUs"))}</button>
      </div>
      ${Ct("TW",e,(r=t.metrics)==null?void 0:r.TW,i,!0,l)}
      ${Ct("US",o,(c=t.metrics)==null?void 0:c.US,i,!1,l)}
    </section>`}function Wa(t){const e=t.querySelectorAll(".paper-tab-btn");e.forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.paperTab;e.forEach(i=>{const l=i.dataset.paperTab===n;i.classList.toggle("active",l),i.setAttribute("aria-selected",l?"true":"false")}),t.querySelectorAll(".paper-panel").forEach(i=>{i.classList.toggle("active",i.id===`paper-panel-${n}`)})})})}async function _a(){try{const t=await fetch(Na);return t.ok?await t.json():null}catch{return null}}const ta={defensive:.5,selective:.8,balanced:1,constructive:1.1,aggressive:1.35,stabilize_first:.3},Va={euphoric:"defensive",late_optimism:"selective",mid_cycle:"balanced",cautious_recovery:"constructive",despondent:"aggressive",panic:"stabilize_first"};function aa(t){return t==null||Number.isNaN(t)?"—":`${Number(t).toFixed(2)}×`}function Ga(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${Number(t).toFixed(2)}`}function lt(t){if(!t)return`<span class="stance-badge stance-neutral">${s(a("dataInsufficient"))}</span>`;const e=Ra(t),o=U(t);return`<span class="stance-badge stance-${e}">${s(o)}</span>`}function me(t,e){return`<div class="logic-metric">
    <span class="k">${s(t)}</span>
    <span class="v">${e}</span>
  </div>`}function Re(t,e,{detailed:o=!1}={}){if(!e)return"";const n=e.incomplete?" incomplete":"",i=e.psychologyPhase,l=e.cycleStance,r=e.liquidityBias,c=i?U(i):a("dataInsufficient"),p=r?U(r):a("dataInsufficient"),d=Ga(e.temperatureScore),m=aa(e.sizeMult??ta[l]),g=Array.isArray(e.dataGaps)&&e.dataGaps.length?`<div class="regime-gaps">${s(a("dataGaps"))}: ${s(e.dataGaps.slice(0,5).join(", "))}${e.dataGaps.length>5?"…":""}</div>`:"",y=o&&Array.isArray(e.implications)&&e.implications.length?`<ul class="logic-impl">${e.implications.slice(0,3).map(b=>`<li>${s(za(b))}</li>`).join("")}</ul>`:"",k=o?`<div class="logic-metrics" role="list">
        ${me(a("psychologyPhase"),s(c))}
        ${me(a("liquidityBias"),s(p))}
        ${me(a("temperatureScore"),s(d))}
        ${me(a("sizeMult"),s(m))}
      </div>`:`<div class="regime-meta">
        <span>${s(a("psychologyPhase"))} <strong>${s(c)}</strong></span>
        <span>${s(a("liquidityBias"))} <strong>${s(p)}</strong></span>
      </div>`;return`<div class="regime-chip${o?" logic-regime-chip":""}${n}">
    <div class="regime-chip-top">
      <div class="label">${s(t)} · ${s(a("marketRegime"))}</div>
      ${lt(l)}
    </div>
    ${k}
    ${y}
    ${g}
  </div>`}function Ya(t){return!t||!t.us&&!t.tw?`<p class="logic-muted">${s(a("logicNoRegime"))}</p>`:`<div class="regime-strip logic-regime-live" aria-label="${s(a("regimeToday"))}">
    ${Re("US",t.us,{detailed:!0})}
    ${Re("TW",t.tw,{detailed:!0})}
  </div>`}function Ka(t){return!t||!t.us&&!t.tw?"":`<div class="regime-strip" aria-label="${s(a("marketRegime"))}">
    ${Re("US",t.us,{detailed:!1})}
    ${Re("TW",t.tw,{detailed:!1})}
  </div>`}function J(t,e,o){return`<section class="logic-step" id="logic-step-${t}">
    <header class="logic-step-head">
      <span class="logic-step-num" aria-hidden="true">${t}</span>
      <h3 class="logic-step-title">${s(e)}</h3>
    </header>
    <div class="logic-step-body">${o}</div>
  </section>`}function Xa(t){return`<div class="logic-table-wrap"><table class="logic-table">
    <tbody>
      ${t.map(([e,o])=>`<tr><th scope="row">${s(e)}</th><td>${o}</td></tr>`).join("")}
    </tbody>
  </table></div>`}function V(t){return`<ul class="logic-bullets">${t.map(e=>`<li>${e}</li>`).join("")}</ul>`}function Qa(t){const e=t==null?void 0:t.marketRegime,o=Object.entries(Va).map(([g,y])=>[U(g),`${lt(y)} <span class="logic-mult">${s(aa(ta[y]))}</span>`]),n=V([s(a("logicScreenABalanced")),s(a("logicScreenASelective")),s(a("logicScreenADefensive")),s(a("logicScreenAAggressive")),s(a("logicScreenAStabilize"))]),i=V([s(a("logicScreenBVol")),s(a("logicScreenBMom"))]),l=V([s(a("logicScoreFormula")),s(a("logicScoreSma")),s(a("logicScoreVol"))]),r=V([s(a("logicDemoteHot")),s(a("logicDemoteThin")),s(a("logicPromoteFirm")),s(a("logicDemotePanic"))]),c=V([s(a("logicWhyRs")),s(a("logicWhyMom")),s(a("logicWhyVol")),s(a("logicWhySma")),s(a("logicWhyRegime"))]),p=`
    <p class="logic-lead">${s(a("logicXqLead"))}</p>
    ${V([s(a("logicXqPriceVol")),s(a("logicXqFlow")),s(a("logicXqFund")),s(a("logicXqMasters")),s(a("logicXqCycle"))])}
    <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="strategies">${s(a("logicOpenStrategies"))}</button></p>
  `,d=V([s(a("logicPaperCapital")),s(a("logicPaperBuy")),s(a("logicPaperSizeMult")),s(a("logicPaperSell"))]),m=V([s(a("logicRatesR2")),s(a("logicRatesR3")),s(a("logicRatesSeparate"))]);return`
    <header class="view-header">
      <h2 class="view-title">${s(a("logicTitle"))}</h2>
      <p class="logic-subtitle">${s(a("logicSubtitle"))}</p>
    </header>

    <section class="logic-live section" aria-labelledby="logic-live-h">
      <h3 id="logic-live-h" class="section-title">${s(a("regimeToday"))}</h3>
      ${Ya(e)}
    </section>

    <div class="logic-pipeline">
      ${J(1,a("logicStep1"),`
        <p class="logic-lead">${s(a("logicStep1Lead"))}</p>
        ${Xa(o)}
        <p class="logic-caption">${s(a("logicStep1Caption"))}</p>
        ${m}
      `)}

      ${J(2,a("logicStep2"),`
        <p class="logic-lead">${s(a("logicStep2Lead"))}</p>
        <h4 class="logic-h4">${s(a("logicScreenA"))}</h4>
        ${n}
        <h4 class="logic-h4">${s(a("logicScreenB"))}</h4>
        ${i}
        <h4 class="logic-h4">${s(a("logicScore"))}</h4>
        ${l}
      `)}

      ${J(3,a("logicStep3"),p)}

      ${J(4,a("logicStep4"),`
        <p class="logic-lead">${s(a("logicStep4Lead"))}</p>
        ${r}
        <p class="logic-caption">${s(a("logicListSize"))}</p>
      `)}

      ${J(5,a("logicStep5"),`
        <p class="logic-lead">${s(a("logicStep5Lead"))}</p>
        ${c}
      `)}

      ${J(6,a("logicStep6"),`
        <p class="logic-lead">${s(a("logicStep6Lead"))}</p>
        ${d}
        <p class="logic-jump"><button type="button" class="logic-link-btn" data-jump="paper">${s(a("logicOpenPaper"))}</button></p>
      `)}
    </div>

    <p class="logic-footnote" role="note">${s(a("logicFootnote"))}</p>
  `}const sa="./data/strategy-screener.json",Lt="jml-watchlist",Qe=new Set(["inst-sync","margin-up","earnings-steady","low-pe-small","peter-lynch","warren-buffett","michael-murphy","kenneth-fisher","mark-minervini","michael-price","benjamin-graham","james-oshaughnessy","ultra-short","ma-tangle-break","new-high-momentum","short-roc","day-up-5","pct5d-10","near-high","chip-main-force","chip-branch","chip-large-holders","gooaye-tw-semicon-chain","gooaye-tw-vol-breakout"]),At=["大師","基本","籌碼","技術","綜合","週期"],rt={精選:"綜合",價量:"技術",財務:"基本",技術:"技術",基本:"基本",籌碼:"籌碼",大師:"大師",週期:"週期",綜合:"綜合"};function Za(t){const e=rt[t]||t;return a(`cat${e}`,e)}function Ja(t){try{return new Date(t).toLocaleString(R(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+a("taipei")}catch{return t||"—"}}function u(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(R(),{minimumFractionDigits:e,maximumFractionDigits:e})}function z(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function D(t){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(2)}%`}function Et(t){const e=t.categoryGroup||t.category||"綜合";return rt[e]||e}function es(t){let e=s(t);return e=e.replace(/本益比/g,()=>h("pe",a("pe"))),e=e.replace(/營益率/g,()=>h("opMargin",a("opMargin"))),e=e.replace(/毛利率/g,()=>h("grossMargin",a("grossMargin"))),e=e.replace(/外資/g,()=>h("foreignInv",a("foreignInv"))),e=e.replace(/投信/g,()=>h("trustInv",a("trustInv"))),e=e.replace(/自營商/g,()=>h("dealerInv",a("dealerInv"))),e=e.replace(/均線多頭/g,()=>h("maBull",a("maBull"))),e=e.replace(/RSI/g,()=>h("rsi",a("rsi"))),e=e.replace(/振幅/g,()=>h("amplitude",a("amplitude"))),e=e.replace(/(\d+)\s*張/g,(o,n)=>`${n}${h("zhang",a("zhang"))}`),e=e.replace(/＞\s*(\d+)\s*張/g,(o,n)=>`＞ ${n}${h("zhang",a("zhang"))}`),e}function ts(t){return t==="skip"?`<span class="xq-cond-st skip">${s(a("condSkip"))}</span>`:t==="fail"?`<span class="xq-cond-st fail">${s(a("condFail"))}</span>`:`<span class="xq-cond-st pass">${s(a("condPass"))}</span>`}function as(t){switch(t){case"ma-bull":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>D(e.dayPct),cls:e=>z(e.dayPct)},{key:"sma5",label:"SMA5",fmt:e=>u(e.sma5)},{key:"sma10",label:"SMA10",fmt:e=>u(e.sma10)},{key:"sma20",label:"SMA20",fmt:e=>u(e.sma20)},{key:"sma60",label:"SMA60",fmt:e=>u(e.sma60)},{key:"volRatioYday",label:a("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?u(e.volRatioYday)+"×":"—"},{key:"volTodayZhang",label:a("metricVolToday"),fmt:e=>e.volTodayZhang!=null?u(e.volTodayZhang,1):e.volToday!=null?u(e.volToday,0):"—"}];case"peter-lynch":return[{key:"pe",label:h("pe",a("pe")),fmt:e=>u(e.pe,2),rawLabel:!0},{key:"revGrowth2yAvgPct",label:"2年營收成長均%",fmt:e=>e.revGrowth2yAvgPct!=null?u(e.revGrowth2yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?u(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?u(e.avgVol5Zhang,1):"—"},{key:"dayPct",label:a("metricDayPct"),fmt:e=>D(e.dayPct),cls:e=>z(e.dayPct)}];case"chip-main-force":return[{key:"instNet1dZhang",label:"法人1日(張)",fmt:e=>u(e.instNet1dZhang,1)},{key:"instNet5dZhang",label:"法人5日(張)",fmt:e=>u(e.instNet5dZhang,1)},{key:"foreignNet5dZhang",label:a("foreign5d"),fmt:e=>u(e.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:a("trust5d"),fmt:e=>u(e.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:a("dealer5d"),fmt:e=>u(e.dealerNet5dZhang,1)}];case"chip-branch":return[{key:"foreignBuyStreakDays",label:"外資連買日",fmt:e=>e.foreignBuyStreakDays!=null?String(e.foreignBuyStreakDays):"—"},{key:"foreignNet1dZhang",label:a("foreign1d"),fmt:e=>u(e.foreignNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:a("foreign5d"),fmt:e=>u(e.foreignNet5dZhang,1)},{key:"instNet5dZhang",label:"法人5日(張)",fmt:e=>u(e.instNet5dZhang,1)}];case"chip-large-holders":return[{key:"megaHolderPct",label:"大戶>100萬股%",fmt:e=>e.megaHolderPct!=null?u(e.megaHolderPct,1)+"%":"—"},{key:"largeHolderPct",label:"分級12–15%",fmt:e=>e.largeHolderPct!=null?u(e.largeHolderPct,1)+"%":"—"},{key:"megaHolderCount",label:">100萬股人數",fmt:e=>e.megaHolderCount!=null?u(e.megaHolderCount,0):"—"},{key:"major10pctCount",label:"逾10%大股東家數",fmt:e=>e.major10pctCount!=null?u(e.major10pctCount,0):"—"},{key:"tdccAsOf",label:"集保日",fmt:e=>e.tdccAsOf||"—"}];case"inst-sync":return[{key:"foreignNet1dZhang",label:a("foreign1d"),fmt:e=>u(e.foreignNet1dZhang,1),rawLabel:!0},{key:"trustNet1dZhang",label:a("trust1d"),fmt:e=>u(e.trustNet1dZhang,1),rawLabel:!0},{key:"dealerNet1dZhang",label:a("dealer1d"),fmt:e=>u(e.dealerNet1dZhang,1),rawLabel:!0},{key:"foreignNet5dZhang",label:a("foreign5d"),fmt:e=>u(e.foreignNet5dZhang,1)},{key:"trustNet5dZhang",label:a("trust5d"),fmt:e=>u(e.trustNet5dZhang,1)},{key:"dealerNet5dZhang",label:a("dealer5d"),fmt:e=>u(e.dealerNet5dZhang,1)}];case"ultra-short":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>D(e.dayPct),cls:e=>z(e.dayPct)},{key:"rsi",label:h("rsi",a("rsi")),fmt:e=>u(e.rsi,2),rawLabel:!0},{key:"rsiPrev",label:"RSI昨",fmt:e=>u(e.rsiPrev,2)},{key:"ampPct",label:h("amplitude",a("amplitude")),fmt:e=>e.ampPct!=null?u(e.ampPct,2)+"%":"—",rawLabel:!0},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?u(e.avgVol5Zhang,1):"—"}];case"michael-price":return[{key:"pb",label:"P/B",fmt:e=>u(e.pb,2)},{key:"directorHoldPct",label:a("metricDirector"),fmt:e=>e.directorHoldPct!=null?u(e.directorHoldPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"michael-sivy":case"mark-minervini":return[{key:"pe",label:h("pe",a("pe")),fmt:e=>u(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?u(e.roe4qPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"revGrowth3y",label:"3年營收成長%",fmt:e=>Array.isArray(e.revGrowth3y)?e.revGrowth3y.map(o=>o!=null?o+"%":"—").join(" → "):"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"kenneth-fisher":return[{key:"revGrowth5yAvgPct",label:"5年營收成長均%",fmt:e=>e.revGrowth5yAvgPct!=null?u(e.revGrowth5yAvgPct,1)+"%":"—"},{key:"pretaxGrowth5yAvgPct",label:"5年稅前成長均%",fmt:e=>e.pretaxGrowth5yAvgPct!=null?u(e.pretaxGrowth5yAvgPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"michael-murphy":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?u(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:a("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?u(e.opMargin1qPct,1)+"%":"—"},{key:"opMargin3y",label:"3年營益率%",fmt:e=>Array.isArray(e.opMargin3y)?e.opMargin3y.map(o=>o!=null?o+"%":"—").join(" → "):"—"},{key:"revGrowth3yAvgPct",label:"3年營收成長均%",fmt:e=>e.revGrowth3yAvgPct!=null?u(e.revGrowth3yAvgPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)}];case"benjamin-graham":return[{key:"pe",label:h("pe",a("pe")),fmt:e=>u(e.pe,2),rawLabel:!0},{key:"pb",label:"P/B",fmt:e=>u(e.pb,2)},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"warren-buffett":return[{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?u(e.roe4qPct,1)+"%":"—"},{key:"opMargin1qPct",label:a("metricOpQ"),fmt:e=>e.opMargin1qPct!=null?u(e.opMargin1qPct,1)+"%":"—"},{key:"debtRatioPct",label:a("metricDebt"),fmt:e=>e.debtRatioPct!=null?u(e.debtRatioPct,1)+"%":"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"james-oshaughnessy":return[{key:"pe",label:h("pe",a("pe")),fmt:e=>u(e.pe,2),rawLabel:!0},{key:"roe4qPct",label:"4季ROE合計%",fmt:e=>e.roe4qPct!=null?u(e.roe4qPct,1)+"%":"—"},{key:"roeGrowthPct",label:"ROE成長%",fmt:e=>e.roeGrowthPct!=null?u(e.roeGrowthPct,1)+"%":"—"},{key:"epsGrowthStreak",label:"EPS連季>10%",fmt:e=>e.epsGrowthStreak!=null?String(e.epsGrowthStreak):"—"},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>u(e.avgVol5Zhang,1)}];case"margin-up":return[{key:"yoyPairs",label:"YoY配對",fmt:e=>Array.isArray(e.yoyPairs)?e.yoyPairs.join("；"):"—"},{key:"yoyOmPct",label:"YoY營益成長%",fmt:e=>Array.isArray(e.yoyOmPct)?e.yoyOmPct.map(o=>o!=null?o+"%":"—").join(" → "):"—"},{key:"yoyGmPct",label:"YoY毛利成長%",fmt:e=>Array.isArray(e.yoyGmPct)?e.yoyGmPct.map(o=>o!=null?o+"%":"—").join(" → "):"—"},{key:"opMargins",label:h("opMargin",a("opMargin")),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.slice(-4).map(o=>o!=null?o+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:a("metricSource"),fmt:e=>e.source||"—"}];case"kostolany-cycle":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>D(e.dayPct),cls:e=>z(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>D(e.pct5d),cls:e=>z(e.pct5d)},{key:"pct1m",label:"1月%",fmt:e=>D(e.pct1m),cls:e=>z(e.pct1m)},{key:"volRatio",label:a("volRatio"),fmt:e=>e.volRatio!=null?u(e.volRatio)+"×":"—"},{key:"psychologyPhase",label:a("psychologyPhase"),fmt:e=>e.psychologyPhase?U(e.psychologyPhase):"—"},{key:"cycleStance",label:a("cycleStance"),fmt:e=>e.cycleStance?U(e.cycleStance):"—"},{key:"liquidityBias",label:a("liquidityBias"),fmt:e=>e.liquidityBias?U(e.liquidityBias):"—"},{key:"tags",label:a("regimeTags"),fmt:e=>e.tags||"—"},{key:"sizeMult",label:a("sizeMult"),fmt:e=>e.sizeMult!=null?u(e.sizeMult,2)+"×":"—"}];case"ma-tangle-break":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>D(e.dayPct),cls:e=>z(e.dayPct)},{key:"smaSpreadPct",label:"均線糾結%",fmt:e=>e.smaSpreadPct!=null?u(e.smaSpreadPct,2)+"%":"—"},{key:"volRatioYday",label:a("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?u(e.volRatioYday)+"×":"—"},{key:"sma5",label:"SMA5",fmt:e=>u(e.sma5)},{key:"sma20",label:"SMA20",fmt:e=>u(e.sma20)}];case"new-high-momentum":case"near-high":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>D(e.dayPct),cls:e=>z(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>D(e.pct5d),cls:e=>z(e.pct5d)},{key:"high20",label:"20日高",fmt:e=>u(e.high20)},{key:"distHigh20Pct",label:"距高%",fmt:e=>e.distHigh20Pct!=null?u(e.distHigh20Pct,2)+"%":"—"},{key:"volRatioYday",label:a("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?u(e.volRatioYday)+"×":"—"}];case"short-roc":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>D(e.dayPct),cls:e=>z(e.dayPct)},{key:"roc10",label:"ROC10%",fmt:e=>e.roc10!=null?u(e.roc10,2)+"%":"—",cls:e=>z(e.roc10)},{key:"pct5d",label:"5日%",fmt:e=>D(e.pct5d),cls:e=>z(e.pct5d)},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?u(e.avgVol5Zhang,1):"—"}];case"day-up-5":case"pct5d-10":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>D(e.dayPct),cls:e=>z(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>D(e.pct5d),cls:e=>z(e.pct5d)},{key:"volRatioYday",label:a("metricVolRatioYday"),fmt:e=>e.volRatioYday!=null?u(e.volRatioYday)+"×":"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?u(e.avgVol5Zhang,1):"—"}];case"earnings-steady":return[{key:"yoyOmPct",label:"YoY營益成長%",fmt:e=>Array.isArray(e.yoyOmPct)?e.yoyOmPct.map(o=>o!=null?o+"%":"—").join(" → "):"—"},{key:"opMargins",label:h("opMargin",a("opMargin")),fmt:e=>Array.isArray(e.opMargins)?e.opMargins.slice(-4).map(o=>o!=null?o+"%":"—").join(" → "):"—",rawLabel:!0},{key:"source",label:a("metricSource"),fmt:e=>e.source||"—"}];case"low-pe-small":return[{key:"pe",label:h("pe",a("pe")),fmt:e=>u(e.pe,2),rawLabel:!0},{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"marketCapHint",label:"市值代理",fmt:e=>e.marketCapHint||"—"},{key:"avgVol5Zhang",label:"5日均量(張)",fmt:e=>e.avgVol5Zhang!=null?u(e.avgVol5Zhang,1):"—"}];case"gooaye-tw-semicon-chain":case"gooaye-tw-vol-breakout":case"gooaye-us-risk-on":case"gooaye-us-fomo-filter":return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>D(e.dayPct),cls:e=>z(e.dayPct)},{key:"pct5d",label:"5日%",fmt:e=>D(e.pct5d),cls:e=>z(e.pct5d)},{key:"pct1m",label:"1月%",fmt:e=>D(e.pct1m),cls:e=>z(e.pct1m)},{key:"volRatio",label:a("metricVolRatioYday"),fmt:e=>e.volRatio!=null?u(e.volRatio)+"×":"—"},{key:"aboveSma50",label:"＞SMA50",fmt:e=>e.aboveSma50?"Y":"N"}];default:return[{key:"price",label:a("metricPrice"),fmt:e=>u(e.price)},{key:"dayPct",label:a("metricDayPct"),fmt:e=>D(e.dayPct),cls:e=>z(e.dayPct)}]}}function ss(t){const e=t.calibrationNotes;if(!e||typeof e!="object")return"";const o=Array.isArray(e.matchedXq)?e.matchedXq.map(r=>s(r)).join(" · "):"",n=Array.isArray(e.stillDiffers)?e.stillDiffers.map(r=>s(r)).join(" · "):"",i=e.unitsNote||e.units||"",l=[];return o&&l.push(`<span class="xq-cal-m">對齊 XQ：${o}</span>`),n&&l.push(`<span class="xq-cal-d">仍差異：${n}</span>`),i&&l.push(`<span class="xq-cal-u">${s(String(i))}</span>`),l.length?`<p class="xq-calibration" title="${a("calibTitle")}">${l.join("<br/>")}</p>`:""}function os(t){return`<ol class="xq-cond-list">${(t.conditions||[]).map((o,n)=>{const i=o.status||"pass";return`<li class="xq-cond ${i}">
        <span class="xq-cond-num">${n+1}</span>
        <span class="xq-cond-text">${es(o.text)}</span>
        ${ts(i)}
      </li>`}).join("")}</ol>`}function ct(t,e){return!e||e==="ALL"?t||[]:(t||[]).filter(o=>{const n=String(o.market||"").toUpperCase();if(n===e)return!0;const i=String(o.ticker||"").toUpperCase().endsWith(".TW");return n?!1:e==="TW"?i:!i})}function is(t,e="TW"){const o=t.hits||[],n=ct(o,e),i=a(e==="US"?"usStock":"twStock");if(t.incomplete&&!o.length){const d=s(t.incompleteLabel||a("dataInsufficient")),m=(t.blockers||[]).map(g=>`<li>${s(g)}</li>`).join("");return`<div class="xq-incomplete" role="status">
      <div class="xq-incomplete-badge">${d}</div>
      <ul>${m}</ul>
    </div>`}if(!n.length)return`<div class="xq-empty"><p>${s(i)} · ${s(a("noHits"))}</p></div>`;const l=as(t.id),r=l.map(d=>`<th>${d.rawLabel?d.label:s(d.label)}</th>`).join(""),c=n.map(d=>{const m=d.metrics||{},g=l.map(y=>`<td class="num ${y.cls?y.cls(m):""}">${y.fmt(m)}</td>`).join("");return`<tr>
        <td><span class="ticker">${s(d.ticker)}</span></td>
        <td class="name-cell">${s(d.name||"")}${d.ohlcvBarDate?`<div class="xq-bar-date">K ${s(d.ohlcvBarDate)}</div>`:""}
          <button type="button" class="xq-btn xq-btn-sm xq-watch-inline" data-xq-watch="${s(d.ticker)}" data-xq-watch-name="${s(d.name||"")}">${s(a("addWatchlist"))}</button>
        </td>
        ${g}
      </tr>`}).join(""),p=n.map(d=>{const m=d.metrics||{},g=l.map(y=>{const k=y.cls?y.cls(m):"";return`<div class="xq-m"><span class="xq-ml">${y.rawLabel?y.label:s(y.label)}</span><span class="xq-mv ${k}">${y.fmt(m)}</span></div>`}).join("");return`<article class="xq-hit-card">
        <div class="xq-hit-head">
          <div>
            <div class="ticker">${s(d.ticker)}</div>
            <div class="name">${s(d.name||"")}</div>
            ${d.ohlcvBarDate?`<div class="xq-bar-date">K棒 ${s(d.ohlcvBarDate)}</div>`:""}
          </div>
          <div class="xq-hit-actions">
            <span class="badge market">${s(d.market||e)}</span>
            <button type="button" class="xq-btn xq-btn-sm" data-xq-watch="${s(d.ticker)}" data-xq-watch-name="${s(d.name||"")}">${s(a("addWatchlist"))}</button>
          </div>
        </div>
        <div class="xq-hit-metrics">${g}</div>
      </article>`}).join("");return`
    <div class="xq-market-block" data-market="${s(e)}">
      <h5 class="xq-market-title">${i}（${n.length}）</h5>
      <div class="table-wrap xq-table-wrap">
        <table class="stock-table xq-table">
          <thead><tr><th>代碼</th><th>名稱</th>${r}</tr></thead>
          <tbody>${c}</tbody>
        </table>
      </div>
      <div class="xq-mobile-cards">${p}</div>
    </div>`}function ns(t,e,o="TW"){var d,m,g,y;const n=t.hits||[],l=ct(n,o).length,r=(t.unchecked||[]).map(k=>`<li class="xq-unchecked">${s(k)}</li>`).join(""),c=(t.notes||[]).map(k=>`<li>${s(k)}</li>`).join(""),p=!t.incomplete&&(t.blockers||[]).length?`<ul class="xq-blockers">${(t.blockers||[]).map(k=>`<li>${s(k)}</li>`).join("")}</ul>`:"";return`
    <div class="xq-panel" data-strategy-id="${s(t.id)}">
      <div class="xq-panel-head">
        <div>
          <h3 class="xq-strategy-name">${s(t.name)}</h3>
          <div class="xq-tags">
            ${(t.xqTags||[t.category]).map(k=>`<span class="xq-tag">${s(k)}</span>`).join("")}
          </div>
        </div>
        <div class="xq-hit-count" title="${a("hitTitle")}">
          <span class="xq-hit-num">${l}</span>
          <span class="xq-hit-label">${s(a("hitCount"))}</span>
        </div>
      </div>
      ${t.description?`<details class="fold-block"><summary>${s(a("strategyDetails"))}</summary><p class="xq-desc fold-p">${s(t.description)}</p></details>`:""}
      <div class="xq-meta-row">
        <span>${s(a("sessionTwse"))} ${s(e.sessionDate||"—")}</span>
        <span>${s(a("ohlcvBar"))} ${s(((d=t.ohlcvBarDates)==null?void 0:d[0])||e.ohlcvBarDate||"—")}</span>
        <span>${s(a("generated"))} ${Ja(e.asOf)}</span>
        <span>${s(a("universeTw"))} ${((m=e.universe)==null?void 0:m.tw)??"—"}</span>
        <span>${s(a("universeUs"))} ${((g=e.universe)==null?void 0:g.us)??"—"}</span>
      </div>
      <h4 class="xq-sub">${s(a("conditions"))}</h4>
      ${os(t)}
      ${ss(t)}
      ${(y=t.incompleteFilters)!=null&&y.length?`<p class="xq-incomplete-filters">${s(a("incompleteFilters"))}${s(t.incompleteFilters.join("、"))}</p>`:""}
      ${r?`<ul class="xq-unchecked-list">${r}</ul>`:""}
      ${t.regimeSnapshot?`<div class="xq-regime-box" role="status">
        <div class="xq-regime-title">${s(a("regimeToday"))}</div>
        <div class="xq-regime-grid">
          ${["us","tw"].map(k=>{const b=t.regimeSnapshot[k];if(!b)return"";const C=b.psychologyPhase?U(b.psychologyPhase):a("dataInsufficient"),B=b.cycleStance,P=b.liquidityBias?U(b.liquidityBias):a("dataInsufficient"),j=Array.isArray(b.dataGaps)&&b.dataGaps.length?`<div class="xq-regime-gaps">${s(a("dataGaps"))}：${s(b.dataGaps.join(", "))}</div>`:"";return`<div class="xq-regime-card">
                <div class="xq-regime-mkt">${s(k.toUpperCase())}</div>
                <div class="xq-regime-stance">${lt(B)}</div>
                <div class="xq-regime-metrics">
                  <div><span class="k">${s(a("psychologyPhase"))}</span><strong>${s(C)}</strong></div>
                  <div><span class="k">${s(a("liquidityBias"))}</span><strong>${s(P)}</strong></div>
                  <div><span class="k">${s(a("temperatureScore"))}</span><strong>${s(b.temperatureScore==null?a("dataInsufficient"):String(b.temperatureScore))}</strong></div>
                </div>
                ${j}
              </div>`}).join("")}
        </div>
      </div>`:""}
      ${c?`<ul class="xq-notes">${c}</ul>`:""}
      ${p}
      <div class="xq-toolbar">
        <h4 class="xq-sub">${s(a("results"))}</h4>
        <div class="xq-actions">
          <button type="button" class="xq-btn" data-xq-copy>${s(a("copyJson"))}</button>
          <button type="button" class="xq-btn" data-xq-csv>${s(a("exportCsv"))}</button>
          <a class="xq-btn xq-btn-link" href="${sa}" download="strategy-screener.json">${s(a("exportJson"))}</a>
          <button type="button" class="xq-btn" disabled title="${s(a("backtestHint"))}">${s(a("backtestSoon"))}</button>
        </div>
      </div>
      ${t.twOnly||Qe.has(t.id)?`<div class="xq-market-tabs"><span class="xq-mkt-hint">${s(a("twOnlyHint"))}</span></div>`:`<div class="xq-market-tabs" role="tablist" aria-label="${s(a("hitMarket"))}">
        <button type="button" class="xq-mkt-btn${o==="TW"?" active":""}" data-xq-market="TW" aria-pressed="${o==="TW"}">${s(a("twStock"))}</button>
        <button type="button" class="xq-mkt-btn${o==="US"?" active":""}" data-xq-market="US" aria-pressed="${o==="US"}">${s(a("usStock"))}</button>
      </div>`}
      ${is(t,t.twOnly||Qe.has(t.id)?"TW":o)}
    </div>
  `}function ls(t=!0){return`
    <section class="section xq-section" id="strategies">
      <h2 class="section-title">${h("strategyScreen",a("strategyScreen"))}</h2>
      <p class="view-lead-tight">${s(a("strategyLead"))}</p>
      <div id="xq-root" class="xq-root" aria-label="${s(a("strategyScreen"))}">
        ${t?`<p class="xq-loading">${s(a("strategyLoading"))}</p>`:""}
      </div>
    </section>
  `}async function rs(t=sa){const e=await fetch(t,{cache:"no-cache"});if(!e.ok)throw new Error(`strategy-screener ${e.status}`);return e.json()}function cs(t,e){var $,T;const o=typeof t=="string"?document.querySelector(t):t;if(!o||!(($=e==null?void 0:e.strategies)!=null&&$.length)){o&&(o.innerHTML=`<div class="xq-empty"><p>${s(a("strategyEmpty"))}</p></div>`);return}const n=[...At];for(const f of e.categoryOrder||[]){const v=rt[f]||f;n.includes(v)||n.push(v)}const i=new Map(n.map(f=>[f,[]]));for(const f of e.strategies){const v=Et(f);i.has(v)||(i.set(v,[]),n.push(v)),i.get(v).push(f)}for(const[f,v]of i)!v.length&&At.includes(f);let l=n.find(f=>(i.get(f)||[]).length)||n[0],r=((T=(i.get(l)||[])[0])==null?void 0:T.id)||e.strategies[0].id,c="TW";const p=(f,v)=>f.map(S=>{const L=(S.hits||[]).length,E=S.incomplete?" incomplete":"";return`<button type="button" class="xq-chip${S.id===v?" active":""}${E}" data-xq-id="${s(S.id)}" aria-pressed="${S.id===v}">
          <span class="xq-chip-name">${s(S.name)}</span>
          <span class="xq-chip-n">${S.incomplete?s(a("incomplete")):s(a("hitsTotal",{n:L}))}</span>
        </button>`}).join(""),d=()=>n.map(f=>{const v=i.get(f)||[];return v.length?`<button type="button" class="xq-tab${f===l?" active":""}" data-xq-tab="${s(f)}" aria-pressed="${f===l}">
          <span>${s(Za(f))}</span>
          <span class="xq-tab-n">${v.length}</span>
        </button>`:""}).join(""),m=()=>e.strategies.map(f=>{const v=(f.hits||[]).length,S=f.id===r?" active":"",L=f.incomplete?" incomplete":"";return`<button type="button" class="xq-side-item${S}${L}" data-xq-id="${s(f.id)}">
          <span>${s(f.name)}</span>
          <span class="xq-side-n">${f.incomplete?s(a("incomplete")):s(a("hitsTotal",{n:v}))}</span>
        </button>`}).join(""),g=()=>{const f=i.get(l)||[],v=e.strategies.find(S=>S.id===r)||f[0]||e.strategies[0];r=v.id,o.innerHTML=`
      <div class="xq-layout">
        <aside class="xq-sidebar" aria-label="${s(a("strategyList"))}">
          <div class="xq-side-title">${s(a("navStrategies"))}</div>
          ${m()}
        </aside>
        <div class="xq-main">
          <div class="xq-tabs" role="tablist" aria-label="${s(a("strategyCat"))}">${d()}</div>
          <div class="xq-chips" aria-label="${s(a("strategyList"))}">
            <div class="xq-chip-row">${p(f,r)}</div>
          </div>
          <div class="xq-panel-host">${ns(v,e,c)}</div>
        </div>
      </div>
      <p class="xq-foot">${s((e.disclaimer||"").split("。")[0]+(e.disclaimer?"。":""))}</p>
      <div class="xq-toast" id="xq-toast" hidden role="status"></div>
    `},y=f=>{const v=e.strategies.find(L=>L.id===f);if(!v)return;r=f;const S=Et(v);S!==l&&(l=S),g()},k=f=>{const v=i.get(f)||[];v.length&&(l=f,v.some(S=>S.id===r)||(r=v[0].id),g())},b=(f,v=2200)=>{const S=o.querySelector("#xq-toast");S&&(S.hidden=!1,S.textContent=f,clearTimeout(b._t),b._t=setTimeout(()=>{S.hidden=!0},v))},C=async f=>{var v;try{if((v=navigator.clipboard)!=null&&v.writeText)return await navigator.clipboard.writeText(f),!0}catch{}try{const S=document.createElement("textarea");S.value=f,S.setAttribute("readonly",""),S.style.position="fixed",S.style.left="-9999px",S.style.top="0",document.body.appendChild(S),S.select();const L=document.execCommand("copy");return document.body.removeChild(S),L}catch{return!1}},B=(f,v,S)=>{const L=new Blob([v],{type:S});try{const E=document.createElement("a");return E.href=URL.createObjectURL(L),E.download=f,E.rel="noopener",document.body.appendChild(E),E.click(),E.remove(),setTimeout(()=>URL.revokeObjectURL(E.href),2e3),!0}catch{try{const E=`data:${S||"text/plain"};charset=utf-8,${encodeURIComponent(v)}`,F=document.createElement("a");return F.href=E,F.download=f,document.body.appendChild(F),F.click(),F.remove(),!0}catch{return!1}}},P=()=>{try{const f=localStorage.getItem(Lt),v=f?JSON.parse(f):[];return Array.isArray(v)?v:[]}catch{return[]}},j=f=>{try{localStorage.setItem(Lt,JSON.stringify(f.slice(0,200)))}catch{}},oe=(f,v)=>{if(!f)return;const S=P();if(S.some(L=>L.ticker===f)){b(a("watchlistExists",{ticker:f}));return}S.unshift({ticker:f,name:v||f,addedAt:new Date().toISOString()}),j(S),b(a("watchlistAdded",{ticker:f}))};o.onclick=async f=>{var Tt;const v=f.target,S=v&&typeof v.closest=="function"?v:v&&v.parentElement&&typeof v.parentElement.closest=="function"?v.parentElement:null;if(!S)return;const L=S.closest("[data-xq-tab]");if(L&&o.contains(L)){f.preventDefault(),k(L.getAttribute("data-xq-tab"));return}const E=S.closest("[data-xq-id]");if(E&&o.contains(E)){f.preventDefault(),y(E.getAttribute("data-xq-id"));return}const F=S.closest("[data-xq-market]");if(F&&o.contains(F)){f.preventDefault(),c=F.getAttribute("data-xq-market")||"TW",g();return}const bt=S.closest("[data-xq-copy]");if(bt&&o.contains(bt)){f.preventDefault();const Ue=await C(JSON.stringify(e,null,2));b(a(Ue?"copied":"copyFailed"));return}const $t=S.closest("[data-xq-csv]");if($t&&o.contains($t)){f.preventDefault();const Ue=((Tt=o.querySelector(".xq-panel"))==null?void 0:Tt.getAttribute("data-strategy-id"))||r,Z=e.strategies.find(We=>We.id===Ue);if(!Z)return;const wa=ct(Z.hits||[],Z.twOnly||Qe.has(Z.id)?"TW":c),wt=ds({...Z,hits:wa});if(!wt){b(a("noHitsExport"));return}const Pt="\uFEFF"+wt;if(B(`${Z.id}-hits.csv`,Pt,"text/csv;charset=utf-8"))b(a("csvDownloaded"));else{const We=`data:text/csv;charset=utf-8,${encodeURIComponent(Pt)}`;b(a("csvBlocked"));try{window.open(We,"_blank")}catch{}}return}const ge=S.closest("[data-xq-watch]");ge&&o.contains(ge)&&(f.preventDefault(),oe(ge.getAttribute("data-xq-watch"),ge.getAttribute("data-xq-watch-name")))},g()}function ds(t){const e=t.hits||[];if(!e.length)return"";const o=[...new Set(e.flatMap(r=>Object.keys(r.metrics||{})))],n=["ticker","name","market","ohlcvBarDate",...o],i=r=>{const c=r==null?"":String(r);return/[",\n]/.test(c)?`"${c.replace(/"/g,'""')}"`:c},l=e.map(r=>{const c=r.metrics||{};return[r.ticker,r.name,r.market,r.ohlcvBarDate||"",...o.map(p=>{const d=c[p];return Array.isArray(d)?d.join("|"):d})].map(i).join(",")});return[n.join(","),...l].join(`
`)}async function ps(t="#xq-root"){const e=()=>typeof t=="string"?document.querySelector(t):t;try{let o=e();if(o||(await new Promise(i=>requestAnimationFrame(i)),o=e()),!o)return console.warn("initStrategies: #xq-root missing"),{ok:!1,error:new Error("xq-root missing")};const n=await rs();return o=e(),o?(cs(o,n),{ok:!0,data:n}):{ok:!1,error:new Error("xq-root gone after fetch")}}catch(o){const n=e();return n&&(n.innerHTML=`<div class="xq-empty"><p>${s(a("strategyLoadError",{msg:o.message}))}</p></div>`),{ok:!1,error:o}}}const oa="./data/research-library.json",ia="./covers/placeholder-book.svg",na="./covers/placeholder-paper.svg",la="./covers/placeholder-podcast.svg",us={candidate:"rl-status-candidate",deferred:"rl-status-deferred",adopted:"rl-status-adopted",rejected:"rl-status-rejected"},gs={yes:"rl-cand-yes",no:"rl-cand-no",watch:"rl-cand-watch"};function hs(t){return{candidate:a("researchStatusCandidate"),deferred:a("researchStatusDeferred"),adopted:a("researchStatusAdopted"),rejected:a("researchStatusRejected")}[t]||t}function ms(t){return{yes:a("researchCandYes"),no:a("researchCandNo"),watch:a("researchCandWatch")}[t]||t}function fs(t){return t==="US"?a("usStock"):t==="TW"?a("twStock"):t==="BOTH"?a("researchMarketBoth"):t}function ra(t){return a(t==="paper"?"researchTypePaper":t==="podcast"?"researchTypePodcast":"researchTypeBook")}function Ce(t,e={}){var i;if(!t)return a("researchShelfAdjacent");const o=(i=e==null?void 0:e.shelfLabels)==null?void 0:i[t];if(o&&typeof o=="object")return qe(o,t);const n={core_investing:"researchShelfCoreInvesting",value_investing:"researchShelfValueInvesting",business_management:"researchShelfBusiness",life_partner_wisdom:"researchShelfLifePartner",options:"researchShelfOptions",recent_reads:"researchShelfRecentReads",fi_concepts:"researchShelfFiConcepts",money_values:"researchShelfMoneyValues",investing_basics:"researchShelfInvestingBasics",asset_allocation:"researchShelfAssetAllocation",financials:"researchShelfFinancials",market_analysis:"researchShelfMarketAnalysis",econ_analysis:"researchShelfEconAnalysis",psych_randomness:"researchShelfPsych",biographies:"researchShelfBiographies",adjacent:"researchShelfAdjacent"}[t];return n?a(n):t}function ys(t={}){return(Array.isArray(t.shelves)?t.shelves:null)||["core_investing","value_investing","business_management","life_partner_wisdom","options","recent_reads","fi_concepts","money_values","investing_basics","asset_allocation","financials","market_analysis","econ_analysis","psych_randomness","biographies","adjacent"]}function qe(t,e){if(!t||typeof t!="object")return e;const o=Oe();return t[o]||t.en||t["zh-Hant"]||e}function ca(t){return qe(t.titleLocalized,t.title)||""}function vs(t){return qe(t.summaryLocalized,t.summary)||""}function ks(t,e){return t.coverUrl?t.coverUrl:t.cover?t.cover:t.type==="paper"?(e==null?void 0:e.defaultCoverPaper)||na:t.type==="podcast"?(e==null?void 0:e.defaultCoverPodcast)||la:(e==null?void 0:e.defaultCoverBook)||ia}function Ss(t,e){return t.coverFallback?t.coverFallback:t.type==="paper"?(e==null?void 0:e.defaultCoverPaper)||na:t.type==="podcast"?(e==null?void 0:e.defaultCoverPodcast)||la:(e==null?void 0:e.defaultCoverBook)||ia}function bs(t){const e=t==null?void 0:t.plainTakeawaysLocalized;if(e&&typeof e=="object"){const o=Oe(),n=e[o]||e["zh-Hant"]||e.en;if(Array.isArray(n)&&n.length)return n}return Array.isArray(t==null?void 0:t.plainTakeaways)&&t.plainTakeaways.length?t.plainTakeaways:[]}function $s(t){const e=bs(t);return e.length?`<div class="rl-block">
    <h4 class="rl-h">${s(a("researchTakeaways"))}</h4>
    <ul class="rl-takeaways">${e.map(o=>`<li>${s(o)}</li>`).join("")}</ul>
  </div>`:""}function Ts(t){if(!Array.isArray(t)||!t.length)return"";const e=t.filter(n=>/^https?:\/\//i.test(String(n)));if(!e.length)return"";const o=e.map(n=>`<a href="${s(n)}" target="_blank" rel="noopener noreferrer">${s(n)}</a>`).join(" · ");return`<div class="rl-sources"><span class="rl-k">${s(a("researchSources"))}</span> ${o}</div>`}function ws(t,e){const o=ks(t,e),n=Ss(t,e),i=ca(t)||ra(t.type);return`
    <div class="rl-cover-wrap">
      <img
        class="rl-cover"
        src="${s(o)}"
        alt="${s(i)}"
        loading="lazy"
        decoding="async"
        data-rl-fallback="${s(n)}"
      />
    </div>`}function Ps(t){t.querySelectorAll("img.rl-cover[data-rl-fallback]").forEach(e=>{e.addEventListener("error",()=>{const o=e.dataset.rlFallback;o&&e.getAttribute("src")!==o?e.setAttribute("src",o):e.classList.add("is-broken")})})}function ie(t,e={}){const o=t.status||"candidate",n=t.strategyCandidate||"watch",i=t.year!=null?String(t.year):"—",l=(t.authors||[]).join(", ")||"—";return`
    <article class="rl-card" data-rl-id="${s(t.id)}" data-rl-market="${s(t.market)}" data-rl-type="${s(t.type)}" data-rl-shelf="${s(t.shelf||"adjacent")}">
      ${ws(t,e)}
      <div class="rl-card-body">
        <header class="rl-card-head">
          <div class="rl-badges">
            <span class="rl-badge rl-type">${s(ra(t.type))}</span>
            <span class="rl-badge rl-shelf">${s(Ce(t.shelf,e))}</span>
            <span class="rl-badge rl-market">${s(fs(t.market))}</span>
            <span class="rl-badge ${us[o]||""}">${s(hs(o))}</span>
            <span class="rl-badge ${gs[n]||""}" title="${s(a("researchStrategy"))}">${s(ms(n))}</span>
          </div>
          <h3 class="rl-title">${s(ca(t))}</h3>
          <p class="rl-meta">${s(l)} · ${s(i)}</p>
        </header>
        <p class="rl-summary">${s(vs(t))}</p>
        ${$s(t)}
        ${Ts(t.sources)}
      </div>
    </article>`}function Cs(t=!0){return`
    <section class="section research-section" aria-labelledby="research-heading">
      <header class="view-header view-header-tight">
        <h2 class="view-title" id="research-heading">${s(a("researchTitle"))}</h2>
        <p class="view-lead view-lead-tight">${s(a("researchLead"))}</p>
      </header>
      <p class="rl-banner" role="note">${s(a("researchMathGateBanner"))}</p>
      <div id="rl-root" class="rl-root" data-placeholder="${t?"1":"0"}">
        <p class="rl-loading">${s(a("loading"))}</p>
      </div>
    </section>`}function Le(t,{market:e,type:o,shelf:n,status:i,candidate:l}){return t.filter(r=>o&&o!=="all"&&r.type!==o||n&&n!=="all"&&(r.shelf||"adjacent")!==n||i&&i!=="all"&&(r.status||"candidate")!==i||l&&l!=="all"&&(r.strategyCandidate||"watch")!==l?!1:!e||e==="all"?!0:e==="US"?r.market==="US"||r.market==="BOTH":e==="TW"?r.market==="TW"||r.market==="BOTH":!0)}function Ls(t){var o,n,i;const e=(o=t==null?void 0:t.meta)==null?void 0:o.mathGateLocalized;return e&&typeof e=="object"?qe(e,(n=t==null?void 0:t.meta)==null?void 0:n.mathGate)||a("researchMathGateBanner"):((i=t==null?void 0:t.meta)==null?void 0:i.mathGate)||a("researchMathGateBanner")}const Ie=[{id:"book",titleKey:"researchCatBooks",type:"book"},{id:"paper",titleKey:"researchCatPapers",type:"paper"},{id:"podcast",titleKey:"researchCatPodcasts",type:"podcast"},{id:"us",titleKey:"researchCatUs",market:"US"},{id:"tw",titleKey:"researchCatTw",market:"TW"},{id:"candidate",titleKey:"researchCatCandidate",status:"candidate"},{id:"watch",titleKey:"researchCatWatch",candidate:"watch"}],xt={menu:"menu",all:"menu",index:"menu",book:"book",books:"book",paper:"paper",papers:"paper",podcast:"podcast",podcasts:"podcast",us:"us",tw:"tw",candidate:"candidate",watch:"watch",watching:"watch"};let Ze=null,Je=null,W={category:"menu",market:"all",type:"all",shelf:"all",status:"all",candidate:"all"};function dt(t){if(t==null||t==="")return"menu";const o=String(t).trim().toLowerCase();return xt[o]?xt[o]:Ie.some(n=>n.id===o)?o:"menu"}function pt(t,e){const o=Ie.find(n=>n.id===e);return t.category=o?e:"menu",t.market="all",t.type="all",t.shelf="all",t.status="all",t.candidate="all",o&&(o.type&&(t.type=o.type),o.market&&(t.market=o.market),o.status&&(t.status=o.status),o.candidate&&(t.candidate=o.candidate)),t}function As(t,e){return Le(t,{market:e.market||"all",type:e.type||"all",shelf:"all",status:e.status||"all",candidate:e.candidate||"all"}).length}function Es(t){return!t||t.category==="menu"?"#research":t.shelf&&t.shelf!=="all"?`#research/shelf/${encodeURIComponent(t.shelf)}`:`#research/${t.category}`}function da(t){const e=Es(t);location.hash!==e&&history.replaceState(null,"",e)}function Mt(t){return[{id:"menu",label:a("researchCatMenu")},...Ie.map(o=>({id:o.id,label:a(o.titleKey)}))].map(o=>`<button type="button" class="rl-tab${o.id===t.category?" is-active":""}" data-rl-cat="${s(o.id)}" role="tab" aria-selected="${o.id===t.category}">${s(o.label)}</button>`).join("")}function xs(t){const e=Ie.map(o=>{const n=As(t,o);return`
      <button type="button" class="rl-menu-card" data-rl-cat="${s(o.id)}" aria-label="${s(a(o.titleKey))}">
        <h3 class="rl-menu-title">${s(a(o.titleKey))}</h3>
        <p class="rl-menu-count">${n}</p>
        <span class="rl-menu-cta">${s(a("researchOpenCategory"))}</span>
      </button>`}).join("");return`
    <div class="rl-menu" role="list" aria-label="${s(a("researchCategories"))}">
      <p class="rl-menu-lead">${s(a("researchMenuLead"))}</p>
      <div class="rl-menu-grid">${e}</div>
    </div>`}function se(t,e,o,{syncUrl:n=!0}={}){const i=Array.isArray(e==null?void 0:e.items)?e.items:[],l=(e==null?void 0:e.meta)||{},r=ys(l);if(n&&da(o),o.category==="menu"){t.innerHTML=`
      <div class="rl-tabs-wrap">
        <div class="rl-tabs" role="tablist" aria-label="${s(a("researchCategories"))}">
          ${Mt(o)}
        </div>
      </div>
      ${xs(i)}`,Rt(t,e,o);return}const c=Le(i,o),p=c.filter(T=>T.type==="book"),d=c.filter(T=>T.type==="paper"),m=c.filter(T=>T.type==="podcast"),g=l.mathGate?`<p class="rl-meta-line">${s(Ls(e))}</p>`:"",y=[`<button type="button" class="rl-filter rl-shelf-chip${o.shelf==="all"?" is-active":""}" data-rl-shelf="all">${s(a("researchFilterAll"))}</button>`,...r.map(T=>{const f=Le(i,{...o,shelf:T}).length;return f?`<button type="button" class="rl-filter rl-shelf-chip${o.shelf===T?" is-active":""}" data-rl-shelf="${s(T)}">${s(Ce(T,l))} <span class="rl-chip-count">${f}</span></button>`:""})].join(""),k=[["all",a("researchFilterAll")],["candidate",a("researchStatusCandidate")],["deferred",a("researchStatusDeferred")],["adopted",a("researchStatusAdopted")],["rejected",a("researchStatusRejected")]].map(([T,f])=>{const v=Le(i,{...o,status:T==="all"?"all":T}).length;return T!=="all"&&!i.some(S=>(S.status||"candidate")===T)?"":`<button type="button" class="rl-filter${o.status===T?" is-active":""}" data-rl-status="${T}">${s(f)}${T==="all"?"":` <span class="rl-chip-count">${v}</span>`}</button>`}).join("");function b(T){if(!T.length)return`<p class="rl-empty">${s(a("researchEmpty"))}</p>`;if(o.shelf&&o.shelf!=="all")return`<div class="rl-grid">${T.map(v=>ie(v,l)).join("")}</div>`;const f=r.filter(v=>T.some(S=>(S.shelf||"adjacent")===v));return f.length?f.map(v=>{const S=T.filter(L=>(L.shelf||"adjacent")===v);return`<section class="rl-shelf-group" data-shelf="${s(v)}" aria-label="${s(Ce(v,l))}">
          <h4 class="rl-shelf-title">${s(Ce(v,l))} <span class="rl-list-count">(${S.length})</span></h4>
          <div class="rl-grid">${S.map(L=>ie(L,l)).join("")}</div>
        </section>`}).join(""):`<div class="rl-grid">${T.map(v=>ie(v,l)).join("")}</div>`}const C=o.type==="all"||o.type==="book",B=o.type==="all"||o.type==="paper",P=o.type==="all"||o.type==="podcast",j=[];C&&j.push(`<section class="rl-list" aria-label="${s(a("researchTypeBook"))}">
        <h3 class="rl-list-title">${s(a("researchTypeBook"))} <span class="rl-list-count">(${p.length})</span></h3>
        ${b(p)}
      </section>`),B&&j.push(`<section class="rl-list" aria-label="${s(a("researchTypePaper"))}">
        <h3 class="rl-list-title">${s(a("researchTypePaper"))} <span class="rl-list-count">(${d.length})</span></h3>
        <div class="rl-grid">
          ${d.length?d.map(T=>ie(T,l)).join(""):`<p class="rl-empty">${s(a("researchEmpty"))}</p>`}
        </div>
      </section>`),P&&j.push(`<section class="rl-list" aria-label="${s(a("researchTypePodcast"))}">
        <h3 class="rl-list-title">${s(a("researchTypePodcast"))} <span class="rl-list-count">(${m.length})</span></h3>
        <div class="rl-grid">
          ${m.length?m.map(T=>ie(T,l)).join(""):`<p class="rl-empty">${s(a("researchEmpty"))}</p>`}
        </div>
      </section>`);const oe=o.category==="us"||o.category==="tw"?"":`<div class="rl-filter-group" role="group" aria-label="${s(a("market"))}">
        <button type="button" class="rl-filter${o.market==="all"?" is-active":""}" data-rl-market="all">${s(a("researchFilterAll"))}</button>
        <button type="button" class="rl-filter${o.market==="US"?" is-active":""}" data-rl-market="US">${s(a("usStock"))}</button>
        <button type="button" class="rl-filter${o.market==="TW"?" is-active":""}" data-rl-market="TW">${s(a("twStock"))}</button>
      </div>`,$=o.category==="candidate"||o.category==="watch"?"":`<div class="rl-filter-group" role="group" aria-label="${s(a("researchStatusFilters"))}">
        ${k}
      </div>`;t.innerHTML=`
    <div class="rl-tabs-wrap">
      <div class="rl-tabs" role="tablist" aria-label="${s(a("researchCategories"))}">
        ${Mt(o)}
      </div>
    </div>
    <div class="rl-toolbar" role="toolbar" aria-label="${s(a("researchFilters"))}">
      ${oe}
      ${$}
    </div>
    <div class="rl-shelf-scroll" role="group" aria-label="${s(a("researchShelfFilters"))}">
      ${y}
    </div>
    ${g}
    <p class="rl-counts">${s(a("researchCounts",{books:p.length,papers:d.length,podcasts:m.length,total:c.length}))}</p>
    <div class="rl-lists">
      ${j.join("")}
    </div>`,Ps(t),Rt(t,e,o)}function Rt(t,e,o){t.querySelectorAll("[data-rl-cat]").forEach(n=>{n.addEventListener("click",()=>{pt(o,n.dataset.rlCat),se(t,e,o,{syncUrl:!0})})}),t.querySelectorAll("[data-rl-market]").forEach(n=>{n.addEventListener("click",()=>{o.market=n.dataset.rlMarket,se(t,e,o,{syncUrl:!1})})}),t.querySelectorAll("[data-rl-status]").forEach(n=>{n.addEventListener("click",()=>{o.status=n.dataset.rlStatus,se(t,e,o,{syncUrl:!1})})}),t.querySelectorAll("[data-rl-shelf]").forEach(n=>{n.addEventListener("click",()=>{o.shelf=n.dataset.rlShelf,da(o),se(t,e,o,{syncUrl:!1})})})}async function Ms(t=oa){const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()}function Rs(t,{syncUrl:e=!0,shelf:o=null}={}){return!Ze||!Je?{ok:!1,reason:"not-ready"}:(pt(W,dt(t)),o&&(W.shelf=o),se(Ze,Je,W,{syncUrl:e}),{ok:!0,category:W.category,state:{...W}})}async function zs(t="#rl-root",e=oa,o={}){const n=typeof t=="string"?document.querySelector(t):t;if(!n)return{ok:!1,reason:"missing-root"};Ze=n;try{const i=await Ms(e);return Je=i,W={category:"menu",market:"all",type:"all",shelf:"all",status:"all",candidate:"all"},pt(W,dt(o.category??"menu")),o.shelf&&(W.shelf=o.shelf),se(n,i,W,{syncUrl:o.syncUrl!==!1}),{ok:!0,data:i}}catch(i){return n.innerHTML=`<p class="rl-error">${s(a("researchLoadError",{msg:i.message}))}</p>`,{ok:!1,error:i}}}const Bs="./data/us-options-snapshot.json",Ds="book-mcmillan-options-handbook",Ns={"covered-call":["optionsSetupCoveredCall","optionsSetupCoveredCallBody","optionsSetupCoveredCallWarn"],"protective-put":["optionsSetupProtectivePut","optionsSetupProtectivePutBody","optionsSetupProtectivePutWarn"],"vertical-spread":["optionsSetupVertical","optionsSetupVerticalBody","optionsSetupVerticalWarn"],"calendar-diagonal":["optionsSetupCalendar","optionsSetupCalendarBody","optionsSetupCalendarWarn"],"straddle-strangle":["optionsSetupStraddle","optionsSetupStraddleBody","optionsSetupStraddleWarn"],butterfly:["optionsSetupButterfly","optionsSetupButterflyBody","optionsSetupButterflyWarn"]};function js(t,e){if(!t||typeof t!="object")return e;const o=Oe();return t[o]||t["zh-Hant"]||t.en||e}function Hs(t){return t&&js(t.titleLocalized,t.title)||""}function Os(t){if(!t)return[];const e=t.plainTakeawaysLocalized;if(e&&typeof e=="object"){const o=Oe(),n=e[o]||e["zh-Hant"]||e.en;if(Array.isArray(n)&&n.length)return n}return Array.isArray(t.plainTakeaways)?t.plainTakeaways:[]}function Fs(t){try{return new Date(t).toLocaleString(R(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+a("taipei")}catch{return t||"—"}}function I(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(R(),{minimumFractionDigits:e,maximumFractionDigits:e})}function pa(t,e=1){return t==null||Number.isNaN(t)?null:`${(t*100).toFixed(e)}%`}function zt(t){return t==null||Number.isNaN(t)?null:`${(t*100).toFixed(1)}%`}function A(t,e=""){return t==null||t===""?"—":`<span class="uo-val">${s(String(t))}${e?s(e):""}</span>`}function ut(t){return a(t==="pass"?"optionsGatePass":t==="watch"?"optionsGateWatch":t==="fail"?"optionsGateFail":"optionsGateIncomplete")}function gt(t){return t==="pass"?"uo-gate-pass":t==="watch"?"uo-gate-watch":t==="fail"?"uo-gate-fail":"uo-gate-incomplete"}function ze(t){return!t||t.incomplete||t.label==null?null:t.label==="up"?a("optionsTrendUp",{pct:t.pct!=null?t.pct:"—"}):t.label==="down"?a("optionsTrendDown",{pct:t.pct!=null?t.pct:"—"}):a("optionsTrendFlat",{pct:t.pct!=null?t.pct:"—"})}function qs(t){return t==null?null:t>1.2?a("optionsSkewPutHeavy"):t<.8?a("optionsSkewCallHeavy"):a("optionsSkewBalanced")}function ua(t){return t==="iv_rich"?a("optionsRegimeIvRich"):t==="iv_cheap"?a("optionsRegimeIvCheap"):t==="iv_fair"?a("optionsRegimeIvFair"):t==="iv_only"?a("optionsRegimeIvOnly"):"—"}function Is(t){return t!=null&&t.primaryBook?t.primaryBook:null}function Us(t){const e=Is(t),o=Hs(e)||a("optionsBookFallbackTitle"),n=Os(e),i=n.length?`<ul class="uo-takeaways">${n.map(l=>`<li>${s(l)}</li>`).join("")}</ul>`:`<p class="uo-muted">${s(a("researchNoTakeaways"))}</p>`;return`
    <aside class="uo-book" aria-label="${s(a("optionsBookCite"))}">
      <div class="uo-book-head">
        <span class="uo-book-badge">${s(a("optionsBookBadge"))}</span>
        <h3 class="uo-book-title">${s(o)}</h3>
      </div>
      <p class="uo-book-lead">${s(a("optionsBookLead"))}</p>
      ${i}
      <p class="uo-book-link">
        <button type="button" class="uo-link-btn" data-jump="research">${s(a("optionsGotoResearch"))}</button>
        <span class="uo-muted">· ${s(Ds)}</span>
      </p>
    </aside>`}function Ws(t){const e=t.fundamentals||{},o=t.quality||{},n=e.trailingPE??e.forwardPE,i=e.trailingPE!=null?"":e.forwardPE!=null?` <span class="uo-hint">(${s(a("optionsForwardPe"))})</span>`:"";return`
    <tr data-uo-ticker="${s(t.ticker)}" class="uo-q-row">
      <td>
        <button type="button" class="uo-ticker-btn" data-uo-select="${s(t.ticker)}">
          <span class="uo-ticker">${s(t.ticker)}</span>
          <span class="uo-name">${s(t.name||"")}</span>
        </button>
      </td>
      <td class="num">${A(I(n,1))}${i}</td>
      <td class="num">${A(I(e.priceToBook,2))}</td>
      <td class="num">${A(I(e.debtToEquity,1))}</td>
      <td class="num">${A(pa(e.roe))}</td>
      <td>${A(ze(e.revenueTrend))}</td>
      <td>${A(ze(e.earningsTrend))}</td>
      <td><span class="uo-gate ${gt(o.gate)}">${s(ut(o.gate))}</span></td>
    </tr>`}function _s(t){return t.map(e=>{const o=e.fundamentals||{},n=e.quality||{},i=o.trailingPE??o.forwardPE;return`
      <article class="uo-q-card" data-uo-ticker="${s(e.ticker)}">
        <button type="button" class="uo-ticker-btn" data-uo-select="${s(e.ticker)}">
          <span class="uo-ticker">${s(e.ticker)}</span>
          <span class="uo-name">${s(e.name||"")}</span>
        </button>
        <div class="uo-metrics">
          <div><span class="m-l">${s(a("optionsPe"))}</span> ${A(I(i,1))}</div>
          <div><span class="m-l">${s(a("optionsPb"))}</span> ${A(I(o.priceToBook,2))}</div>
          <div><span class="m-l">${s(a("optionsDebt"))}</span> ${A(I(o.debtToEquity,1))}</div>
          <div><span class="m-l">${s(a("optionsRoe"))}</span> ${A(pa(o.roe))}</div>
          <div><span class="m-l">${s(a("optionsRevTrend"))}</span> ${A(ze(o.revenueTrend))}</div>
          <div><span class="m-l">${s(a("optionsEarnTrend"))}</span> ${A(ze(o.earningsTrend))}</div>
        </div>
        <span class="uo-gate ${gt(n.gate)}">${s(ut(n.gate))}</span>
      </article>`}).join("")}function Vs(){return`
    <details class="uo-glossary fold-block">
      <summary>${s(a("optionsGlossaryTitle"))}</summary>
      <dl class="uo-dl">
        <div><dt>${s(a("optionsTermDelta"))}</dt><dd>${s(a("optionsDefDelta"))}</dd></div>
        <div><dt>${s(a("optionsTermIv"))}</dt><dd>${s(a("optionsDefIv"))}</dd></div>
        <div><dt>${s(a("optionsTermHv"))}</dt><dd>${s(a("optionsDefHv"))}</dd></div>
        <div><dt>${s(a("optionsTermAtm"))}</dt><dd>${s(a("optionsDefAtm"))}</dd></div>
        <div><dt>${s(a("optionsTermSkew"))}</dt><dd>${s(a("optionsDefSkew"))}</dd></div>
        <div><dt>${s(a("optionsTermProb"))}</dt><dd>${s(a("optionsDefProb"))}</dd></div>
      </dl>
    </details>`}function Gs(t){const e=t.setups||[];return e.length?`<div class="uo-setups">
    ${e.map(o=>{const n=Ns[o.id];if(!n)return"";const[i,l,r]=n,c=o.volAligned?a("optionsSetupVolAligned"):a("optionsSetupVolNotAligned");return`
        <article class="uo-setup${o.volAligned?" is-aligned":""}">
          <h4>${s(a(i))}</h4>
          <p>${s(a(l))}</p>
          <p class="uo-risk-shape">${s(a("optionsRiskShape"))}: ${s(a(r))}</p>
          <p class="uo-muted">${s(c)} · ${s(ua(o.volRegime))}</p>
        </article>`}).join("")}
  </div>`:`<p class="uo-muted">${s(a("optionsNoSetups"))}</p>`}function Ys(t){var c,p;if(!t)return`<p class="uo-muted">${s(a("optionsPickTicker"))}</p>`;const e=t.options,o=t.blockers||[];if(!e)return`
      <div class="uo-blocker" role="status">
        <p><strong>${s(a("optionsChainBlocked"))}</strong></p>
        <p>${s(o.join(" · ")||a("optionsDataMissing"))}</p>
      </div>`;const n=qs(e.putCallVolumeRatio),i=e.atmIv==null,l=e.historicalVol==null,r=i?"unknown":l?"iv_only":e.ivHvRatio>=1.25?"iv_rich":e.ivHvRatio<=.8?"iv_cheap":"iv_fair";return`
    <div class="uo-opt-head">
      <div>
        <div class="uo-ticker">${s(t.ticker)}</div>
        <div class="uo-name">${s(t.name||"")}</div>
      </div>
      <span class="uo-gate ${gt((c=t.quality)==null?void 0:c.gate)}">${s(ut((p=t.quality)==null?void 0:p.gate))}</span>
    </div>
    <p class="uo-opt-note">${s(a("optionsMcmillanFirst"))}</p>
    <div class="uo-opt-grid">
      <div class="uo-opt-metric">
        <div class="m-l">${s(a("optionsAtmIv"))}</div>
        <div class="m-v">${A(i?null:zt(e.atmIv))}</div>
        <div class="uo-muted">${s(a("optionsExpiry"))}: ${s(e.expiration||"—")}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${s(a("optionsHv"))}</div>
        <div class="m-v">${A(l?null:zt(e.historicalVol))}</div>
        <div class="uo-muted">${s(a("optionsIvHv"))}: ${e.ivHvRatio!=null?A(I(e.ivHvRatio,2)+"×"):A(null)}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${s(a("optionsVolRegime"))}</div>
        <div class="m-v">${s(ua(r))}</div>
        <div class="uo-muted">${n?s(n):""}</div>
      </div>
      <div class="uo-opt-metric">
        <div class="m-l">${s(a("optionsCallPutVol"))}</div>
        <div class="m-v">${A(I(e.callVolume,0))} / ${A(I(e.putVolume,0))}</div>
        <div class="uo-muted">${s(a("optionsAtmStrike"))}: ${A(I(e.atmStrikeCall??e.atmStrikePut,1))}</div>
      </div>
    </div>
    ${(()=>{const d=o.filter(g=>!/atmIv|options fields incomplete/i.test(String(g))||e.historicalVol==null&&!(e.callVolume||e.putVolume)),m=d.length?d:[];return m.length?`<p class="uo-warn">${s(a("optionsPartialBlocker"))}: ${s(m.join(" · "))}</p>`:""})()}
    <h4 class="uo-h">${s(a("optionsEduSetups"))}</h4>
    <p class="uo-panel-lead">${s(a("optionsEduSetupsLead"))}</p>
    ${Gs(t)}
    <p class="uo-disclaimer" role="note">${s(a("optionsDisclaimer"))}</p>
    ${Vs()}
  `}function ga(t,e,o){const n=Array.isArray(e==null?void 0:e.tickers)?e.tickers:[],i=n.find(l=>l.ticker===o.ticker)||n[0]||null;i&&(o.ticker=i.ticker),t.innerHTML=`
    ${Us(e)}
    <p class="uo-meta">${s(a("dataAsOf"))} ${s(Fs(e==null?void 0:e.asOf))} · ${s(a("optionsUsOnly"))}</p>
        <div class="uo-panels">
      <section class="uo-panel uo-panel-opt" aria-label="${s(a("optionsViewTitle"))}">
        <h3 class="uo-panel-title">${s(a("optionsViewTitle"))}</h3>
        <p class="uo-panel-lead">${s(a("optionsViewLead"))}</p>
        <div class="uo-ticker-chips" role="tablist" aria-label="${s(a("ticker"))}">
          ${n.map(l=>`
            <button type="button" class="uo-chip${l.ticker===o.ticker?" is-active":""}" data-uo-select="${s(l.ticker)}" role="tab" aria-selected="${l.ticker===o.ticker?"true":"false"}">${s(l.ticker)}</button>`).join("")}
        </div>
        <div class="uo-detail" id="uo-detail">
          ${Ys(i)}
        </div>
      </section>
      <section class="uo-panel" aria-label="${s(a("optionsQualityTitle"))}">
        <h3 class="uo-panel-title">${s(a("optionsQualityTitle"))}</h3>
        <p class="uo-panel-lead">${s(a("optionsQualityLead"))}</p>
        <div class="table-wrap uo-table-wrap">
          <table class="stock-table uo-table">
            <thead>
              <tr>
                <th>${s(a("ticker"))}</th>
                <th>${s(a("optionsPe"))}</th>
                <th>${s(a("optionsPb"))}</th>
                <th>${s(a("optionsDebt"))}</th>
                <th>${s(a("optionsRoe"))}</th>
                <th>${s(a("optionsRevTrend"))}</th>
                <th>${s(a("optionsEarnTrend"))}</th>
                <th>${s(a("optionsGate"))}</th>
              </tr>
            </thead>
            <tbody>
              ${n.length?n.map(Ws).join(""):`<tr><td colspan="8">${s(a("optionsEmpty"))}</td></tr>`}
            </tbody>
          </table>
        </div>
        <div class="uo-mobile">${n.length?_s(n):`<p class="uo-muted">${s(a("optionsEmpty"))}</p>`}</div>
      </section>
    </div>
  `,t.querySelectorAll("[data-uo-select]").forEach(l=>{l.addEventListener("click",()=>{o.ticker=l.getAttribute("data-uo-select"),ga(t,e,o)})}),t.querySelectorAll("[data-uo-ticker]").forEach(l=>{l.classList.toggle("is-selected",l.getAttribute("data-uo-ticker")===o.ticker)})}function Ks(){return`
    <section class="section options-section" aria-label="${s(a("optionsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${s(a("optionsTitle"))}</h2>
        <p class="view-lead">${s(a("optionsLead"))}</p>
      </header>
      <p class="uo-disclaimer uo-disclaimer-top" role="note">${s(a("optionsDisclaimer"))}</p>
      <div id="uo-root" class="uo-root">
        <p class="uo-loading">${s(a("loading"))}</p>
      </div>
    </section>`}async function Xs(t="#uo-root"){var o,n;const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};try{const i=await fetch(Bs);if(!i.ok)throw new Error(`HTTP ${i.status}`);const l=await i.json(),r={ticker:((n=(o=l==null?void 0:l.tickers)==null?void 0:o[0])==null?void 0:n.ticker)||null};return ga(e,l,r),{ok:!0,data:l}}catch(i){return e.innerHTML=`
      <div class="uo-blocker" role="alert">
        <p>${s(a("optionsLoadError",{msg:i.message||String(i)}))}</p>
      </div>`,{ok:!1,error:i}}}const Qs="./data/earnings-digest.json";function Zs(t){try{return new Date(t).toLocaleString(R(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+a("taipei")}catch{return t||"—"}}function Ge(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(R(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Bt(t,e=1){return t==null||Number.isNaN(t)?null:`${t>0?"+":""}${Number(t).toFixed(e)}%`}function ee(t,e=""){return t==null||t===""?null:`<span class="er-val">${s(String(t))}${e?s(e):""}</span>`}function te(t,e){return e?`<div class="er-metric">
          <div class="m-l">${s(t)}</div>
          <div class="m-v">${e}</div>
        </div>`:""}function Js(t){return t==="mega_cap_earnings_next_14d"?a("earningsTagPrimary"):t==="yahoo_most_actives_earnings_next_14d"?a("earningsTagActives"):t==="recently_reported"?a("earningsTagRecent"):t==="calendar_highlight_within_45d"?a("earningsTagFallback"):t||a("earningsTagOther")}function eo(t){return t==="recently_reported"?"er-badge-recent":t==="calendar_highlight_within_45d"?"er-badge-fallback":t!=null&&t.includes("most_actives")?"er-badge-hot":""}function Dt(t,{hot:e=!1}={}){var l;if(!t)return"";const o=t.nextEarningsDate!=null?`${t.nextEarningsDate}${t.nextEarningsDateIsEstimate?` (${a("earningsEstimate")})`:""}`:null,n=((l=t.lastReport)==null?void 0:l.epsActual)!=null?`${Ge(t.lastReport.epsActual,2)}${t.lastReport.quarter?` · ${t.lastReport.quarter}`:""}`:null,i=e?`<span class="er-badge ${eo(t.selectionTag)}">${s(Js(t.selectionTag))}</span>`:`<span class="er-badge">${s(a("earningsMag7Badge"))}</span>`;return`
    <article class="er-card" data-ticker="${s(t.ticker)}">
      <div class="er-card-head">
        <div>
          <div class="er-ticker">${s(t.ticker)}</div>
          <div class="er-name">${s(t.name||"")}</div>
        </div>
        ${i}
      </div>
      <div>
        <div class="er-label">${s(a("earningsWhatItDoes"))}</div>
        <p class="er-does">${t.whatItDoes?s(t.whatItDoes):""}</p>
      </div>
      <div class="er-metrics">
        ${te(a("earningsNextDate"),ee(o))}
        ${te(a("earningsLastEps"),ee(n))}
        ${te(a("earningsRevYoy"),ee(Bt(t.revenueYoYPct)))}
        ${te(a("earningsEpsYoy"),ee(Bt(t.epsYoYPct)))}
        ${te(a("earningsPe"),ee(Ge(t.pe,1)))}
        ${te(a("earningsForwardPe"),ee(Ge(t.forwardPe,1)))}
      </div>
      ${t.whatToWatch?`<div>
        <div class="er-label">${s(a("earningsWhatToWatch"))}</div>
        <p class="er-watch">${s(t.whatToWatch)}</p>
      </div>`:""}
      ${Array.isArray(t.notes)&&t.notes.length?`<p class="er-notes er-muted">${s(t.notes.slice(0,3).join(" · "))}</p>`:""}
      ${t.blocker?`<p class="er-miss">${s(a("earningsPartialBlocker"))}: ${s(t.blocker)}</p>`:""}
    </article>`}function to(t,e){var i;const o=Array.isArray(e==null?void 0:e.mag7)?e.mag7:[],n=Array.isArray(e==null?void 0:e.watchlistHot)?e.watchlistHot:[];t.innerHTML=`
    <p class="er-meta">${s(a("dataAsOf"))} ${s(Zs(e==null?void 0:e.asOf))} · ${s(a("earningsUsFocus"))}</p>
    <p class="er-stub" role="note">${s(((i=e==null?void 0:e.twStub)==null?void 0:i.note)||a("earningsTwStub"))}</p>
    <div class="er-rule"><strong>${s(a("earningsSelectionTitle"))}</strong> ${s((e==null?void 0:e.selectionRule)||a("earningsSelectionFallback"))}</div>
        <div class="er-panels">
      <section class="er-panel" aria-label="${s(a("earningsMag7Title"))}">
        <h3 class="er-panel-title">${s(a("earningsMag7Title"))}</h3>
        <p class="er-panel-lead">${s(a("earningsMag7Lead"))}</p>
        <div class="er-cards">
          ${o.length?o.map(l=>Dt(l,{hot:!1})).join(""):`<p class="er-empty">${s(a("earningsEmpty"))}</p>`}
        </div>
      </section>
      <section class="er-panel" aria-label="${s(a("earningsHotTitle"))}">
        <h3 class="er-panel-title">${s(a("earningsHotTitle"))}</h3>
        <p class="er-panel-lead">${s(a("earningsHotLead"))}</p>
        <div class="er-cards">
          ${n.length?n.map(l=>Dt(l,{hot:!0})).join(""):`<p class="er-empty">${s(a("earningsHotEmpty"))}</p>`}
        </div>
      </section>
    </div>
    <p class="er-disclaimer" role="note">${s(a("earningsDisclaimer"))}</p>
  `}function ao(){return`
    <section class="section earnings-section" aria-label="${s(a("earningsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${s(a("earningsTitle"))}</h2>
        <p class="view-lead">${s(a("earningsLead"))}</p>
      </header>
      <p class="er-disclaimer er-disclaimer-top" role="note">${s(a("earningsDisclaimer"))}</p>
      <div id="er-root" class="er-root">
        <p class="er-loading">${s(a("loading"))}</p>
      </div>
    </section>`}async function so(t="#er-root"){const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};try{const o=await fetch(Qs);if(!o.ok)throw new Error(`HTTP ${o.status}`);const n=await o.json();return to(e,n),{ok:!0,data:n}}catch(o){return e.innerHTML=`
      <div class="er-empty" role="status">
        <p>${s(a("earningsLoadError",{msg:o.message||String(o)}))}</p>
      </div>`,{ok:!1,error:o}}}const oo="./data/earnings-digest.json",Be=["https://query2.finance.yahoo.com","https://query1.finance.yahoo.com"],Q="https://r.jina.ai/",io="https://www.sec.gov/files/company_tickers.json",no=t=>`https://data.sec.gov/submissions/CIK${t}.json`,lo=/^(10-K|10-Q|8-K)(\/A)?$/i,ro=8,Nt=["price","summaryProfile","summaryDetail","defaultKeyStatistics","financialData","calendarEvents","earningsHistory"].join(",");let ae=null,fe=null,ye=null,ve=null;function w(t){if(t==null)return null;if(typeof t=="object"&&"raw"in t){const e=t.raw;return e==null||Number.isNaN(e)?null:e}return typeof t=="number"&&Number.isNaN(t)?null:t}function O(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(R(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Y(t,e=2){return t==null||Number.isNaN(t)?null:`${t>0?"+":""}${Number(t).toFixed(e)}%`}function co(t){return t==null||Number.isNaN(t)?null:Math.abs(t)>=1e9?`${O(t/1e9,2)}B`:Math.abs(t)>=1e6?`${O(t/1e6,2)}M`:Math.abs(t)>=1e3?`${O(t/1e3,1)}K`:O(t,0)}function jt(t,e){if(t==null||Number.isNaN(t))return null;const o=e==="TWD"?"NT$":e==="USD"?"$":"";return Math.abs(t)>=1e12?`${o}${O(t/1e12,2)}T`:Math.abs(t)>=1e9?`${o}${O(t/1e9,2)}B`:Math.abs(t)>=1e6?`${o}${O(t/1e6,2)}M`:`${o}${O(t,0)}`}function K(t,e){if(t==null||Number.isNaN(t))return null;const o=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${O(t,o)}`}function ha(t){try{const e=typeof t=="number"?new Date(t*(t<1e12?1e3:1)):new Date(t);return Number.isNaN(e.getTime())?null:e.toLocaleString(R(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+a("taipei")}catch{return null}}function po(t){return t==null||Number.isNaN(t)||t===0?"lk-flat":t>0?"lk-up":"lk-down"}function et(t){if(!t)return null;const e=String(t).trim();if(e.startsWith("{")||e.startsWith("["))try{return JSON.parse(e)}catch{}const o=e.match(/Markdown Content:\s*(\{[\s\S]*|\[[\s\S]*)/i),n=o?o[1].trim():e,i=n.search(/[\{\[]/);if(i<0)return null;const l=n.slice(i);for(let r=l.length;r>2;r--){try{return JSON.parse(l.slice(0,r))}catch{}const c=Math.max(l.lastIndexOf("}",r-2),l.lastIndexOf("]",r-2));if(c<8)break;r=c+2}return null}async function De(t,{timeoutMs:e=14e3}={}){const o=typeof AbortController<"u"?new AbortController:null,n=o?setTimeout(()=>o.abort(),e):null;try{const i=await fetch(t,{signal:o==null?void 0:o.signal,headers:{Accept:"application/json,text/plain,*/*"}});if(!i.ok)throw new Error(`HTTP ${i.status}`);return await i.text()}finally{n&&clearTimeout(n)}}async function tt(t){const e=[];for(const o of Be){const n=`${o}${t}`;try{const i=await De(n,{timeoutMs:1e4}),l=et(i);if(l)return{ok:!0,data:l,via:"direct",url:n};e.push(`${o}: non-json`)}catch(i){e.push(`${o}: ${i.message||i}`)}}for(const o of Be){const n=`${o}${t}`;try{const i=await De(`${Q}${n}`,{timeoutMs:18e3}),l=et(i);if(l)return{ok:!0,data:l,via:"jina",url:n};e.push(`jina ${o}: parse`)}catch(i){e.push(`jina ${o}: ${i.message||i}`)}}return{ok:!1,data:null,via:null,error:e.slice(0,4).join(" · ")}}function uo(t,e="US"){let o=String(t||"").trim().toUpperCase();if(o=o.replace(/\s+/g,""),!o)return{ok:!1,error:"empty"};const n=e==="TW"?"TW":"US";if(/^\d{4}(\.(TW|TWO))?$/.test(o)){const l=o.replace(/\.(TW|TWO)$/,"");return{ok:!0,market:"TW",symbol:`${l}.TW`,alt:`${l}.TWO`,display:l}}if(/\.(TW|TWO)$/.test(o))return{ok:!0,market:"TW",symbol:o,alt:o.endsWith(".TW")?o.replace(/\.TW$/,".TWO"):o.replace(/\.TWO$/,".TW"),display:o.replace(/\.(TW|TWO)$/,"")};if(/^\d{4,6}$/.test(o)&&n==="TW")return{ok:!0,market:"TW",symbol:`${o}.TW`,alt:`${o}.TWO`,display:o};let i=o.replace(/\./g,"-");return/^[A-Z][A-Z0-9\-]{0,9}$/.test(i)?{ok:!0,market:"US",symbol:i,alt:null,display:i}:{ok:!1,error:"invalid"}}function go(t){var c,p,d,m,g;const e=(p=(c=t==null?void 0:t.chart)==null?void 0:c.result)==null?void 0:p[0];if(!e)return null;const o=e.meta||{},n=o.chartPreviousClose??o.previousClose??(Array.isArray((g=(m=(d=e.indicators)==null?void 0:d.quote)==null?void 0:m[0])==null?void 0:g.close)?[...e.indicators.quote[0].close].reverse().find(y=>y!=null):null),i=o.regularMarketPrice??null;let l=null,r=o.regularMarketChangePercent??o.fulldayChangePercent??null;return i!=null&&n!=null&&(l=i-n,r==null&&n!==0&&(r=l/n*100)),{symbol:o.symbol||null,shortName:o.shortName||null,longName:o.longName||null,currency:o.currency||null,exchange:o.fullExchangeName||o.exchangeName||null,price:i,previousClose:n??null,change:l,changePct:r,volume:o.regularMarketVolume??null,dayHigh:o.regularMarketDayHigh??null,dayLow:o.regularMarketDayLow??null,fiftyTwoWeekHigh:o.fiftyTwoWeekHigh??null,fiftyTwoWeekLow:o.fiftyTwoWeekLow??null,marketTime:o.regularMarketTime??null,instrumentType:o.instrumentType||null}}function ho(t,e){const o=Array.isArray(t==null?void 0:t.quotes)?t.quotes:[],n=o.find(i=>String(i.symbol||"").toUpperCase()===e.toUpperCase())||o.find(i=>i.isYahooFinance)||o[0];return n?{symbol:n.symbol||null,shortName:n.shortname||n.shortName||null,longName:n.longname||n.longName||null,exchange:n.exchDisp||n.exchange||null,sector:n.sectorDisp||n.sector||null,industry:n.industryDisp||n.industry||null,quoteType:n.quoteType||n.typeDisp||null}:null}function at(t){var y,k,b,C,B;const e=(k=(y=t==null?void 0:t.quoteSummary)==null?void 0:y.result)==null?void 0:k[0];if(!e)return null;const o=e.price||{},n=e.summaryProfile||{},i=e.summaryDetail||{},l=e.defaultKeyStatistics||{},r=e.financialData||{},c=((b=e.calendarEvents)==null?void 0:b.earnings)||{},p=Array.isArray((C=e.earningsHistory)==null?void 0:C.history)?e.earningsHistory.history:[],d=p.find(P=>P.period==="-1q")||[...p].sort((P,j)=>String(j.period||"").localeCompare(String(P.period||"")))[0]||null,g=(Array.isArray(c.earningsDate)?c.earningsDate:[]).map(P=>{var j;return(P==null?void 0:P.fmt)||(w(P)!=null?(j=ha(w(P)))==null?void 0:j.slice(0,10):null)}).find(Boolean)||null;return{name:o.longName||o.shortName||null,currency:o.currency||i.currency||null,business:n.longBusinessSummary||null,sector:n.sector||null,industry:n.industry||null,website:n.website||null,pe:w(i.trailingPE)??w(l.trailingPE),forwardPe:w(i.forwardPE)??w(l.forwardPE),marketCap:w(i.marketCap)??w(o.marketCap),epsTrailing:w(l.trailingEps)??w(r.trailingEps),revenue:w(r.totalRevenue),revenueGrowth:w(r.revenueGrowth)!=null?w(r.revenueGrowth)*100:null,earningsGrowth:w(r.earningsGrowth)!=null?w(r.earningsGrowth)*100:null,profitMargins:w(r.profitMargins)!=null?w(r.profitMargins)*100:null,grossMargins:w(r.grossMargins)!=null?w(r.grossMargins)*100:null,dividendYield:w(i.dividendYield)!=null?w(i.dividendYield)*100:null,beta:w(l.beta)??w(i.beta),bookValue:w(l.bookValue),nextEarningsDate:g,nextEarningsEstimate:w(c.earningsAverage),lastEpsActual:d?w(d.epsActual):null,lastEpsEstimate:d?w(d.epsEstimate):null,lastEpsSurprisePct:d&&w(d.surprisePercent)!=null?w(d.surprisePercent)*100:null,lastEpsPeriod:(d==null?void 0:d.period)||null,lastEpsQuarter:((B=d==null?void 0:d.quarter)==null?void 0:B.fmt)||null}}async function mo(){try{await fetch("https://guce.yahoo.com/consent?brandType=nonEu",{mode:"cors",credentials:"include",redirect:"follow"})}catch{}for(const t of Be)try{const e=await fetch(`${t}/v1/test/getcrumb`,{mode:"cors",credentials:"include"});if(!e.ok)continue;const o=(await e.text()).trim();if(o&&o.length<80&&!o.includes("{"))return{ok:!0,crumb:o,host:t}}catch{}return{ok:!1,crumb:"",host:Be[0]}}async function fo(t){const e=await mo();if(e.ok){const l=`/v10/finance/quoteSummary/${encodeURIComponent(t)}?modules=${Nt}&crumb=${encodeURIComponent(e.crumb)}`;try{const r=await fetch(`${e.host}${l}`,{mode:"cors",credentials:"include",headers:{Accept:"application/json"}});if(r.ok){const c=await r.json(),p=at(c);if(p)return{ok:!0,data:p,via:"yahoo-crumb"}}}catch{}}const o=`/v10/finance/quoteSummary/${encodeURIComponent(t)}?modules=${Nt}`,n=await tt(o);if(n.ok){const l=at(n.data);if(l)return{ok:!0,data:l,via:`yahoo-${n.via}`}}const i=await yo(t);return i.ok?i:{ok:!1,data:null,via:null,error:n.error||"quoteSummary unavailable"}}async function yo(t){const e=[`https://finance.yahoo.com/quote/${encodeURIComponent(t)}/`,`${Q}https://finance.yahoo.com/quote/${encodeURIComponent(t)}/`];for(const o of e)try{const n=await De(o,{timeoutMs:2e4});if(/AbuseAlleviation|Invalid Crumb|AuthenticationRequired/i.test(n)&&n.length<2e3)continue;const i=[...n.matchAll(/<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/gi)];for(const r of i)try{const c=JSON.parse(r[1]),p=typeof(c==null?void 0:c.body)=="string"?JSON.parse(c.body):(c==null?void 0:c.body)||c,d=at(p);if(d!=null&&d.business||(d==null?void 0:d.pe)!=null||(d==null?void 0:d.marketCap)!=null)return{ok:!0,data:d,via:o.startsWith(Q)?"yahoo-html-jina":"yahoo-html"}}catch{}const l=n.match(/\\"longBusinessSummary\\":\\"(.*?)\\"/);if(l)return{ok:!0,data:{business:l[1].replace(/\\n/g," ").replace(/\\"/g,'"').replace(/\\\\/g,"\\").slice(0,800)},via:"yahoo-html-partial"}}catch{}return{ok:!1,data:null,via:null}}async function ma(){return ae||fe||(fe=(async()=>{try{const t=await fetch(oo,{cache:"no-cache"});if(!t.ok)throw new Error(`HTTP ${t.status}`);ae=await t.json()}catch{ae={mag7:[],watchlistHot:[]}}return ae})(),fe)}function vo(t){const e=ae;if(!e)return null;const o=String(t||"").replace(/\.TW$/i,"").replace(/\.TWO$/i,"").toUpperCase();return[...e.mag7||[],...e.watchlistHot||[]].find(i=>String(i.ticker||"").toUpperCase()===o)||null}function pe(t){const e=String(t??"").replace(/\D/g,"");return e?e.padStart(10,"0").slice(-10):null}function ko(t,e,o){const n=String(t??"").replace(/^0+/,"")||String(t??"").replace(/\D/g,""),i=String(e||"").replace(/-/g,""),l=String(o||"").trim();return!n||!i||!l?null:`https://www.sec.gov/Archives/edgar/data/${n}/${i}/${l}`}function Ht({market:t,symbol:e,display:o,website:n,cik:i}={}){const l=t==="TW"?"TW":"US",r=String(e||"").toUpperCase(),c=String(o||r.replace(/\.(TW|TWO)$/i,"")).replace(/\D/g,"").slice(0,6),p=[],m=new Date().getFullYear()-1911;if(l==="US"){const g=r.replace(/-/,"."),y=pe(i),k=y?String(Number(y)):null;p.push({kind:"official",id:"sec-edgar-search",labelKey:"lookupSecEdgarSearch",href:`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${encodeURIComponent(g)}&type=&dateb=&owner=include&count=40`}),k&&p.push({kind:"official",id:"sec-edgar-browse",labelKey:"lookupSecEdgarBrowse",href:`https://www.sec.gov/edgar/browse/?CIK=${encodeURIComponent(k)}`}),p.push({kind:"official",id:"sec-forms-filter",labelKey:"lookupSecFormsFilter",href:`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${encodeURIComponent(y||g)}&type=10-&dateb=&owner=include&count=40`})}else c?(p.push({kind:"official",id:"mops-financial-book",labelKey:"lookupMopsFinancialBook",href:`https://mops.twse.com.tw/server-java/t57sb01?step=1&colorchg=1&co_id=${encodeURIComponent(c)}&year=${m}&season=&mtype=A`}),p.push({kind:"official",id:"mops-financial-query",labelKey:"lookupMopsFinancialQuery",href:"https://mops.twse.com.tw/mops/web/t57sb01_q1"}),p.push({kind:"official",id:"mops-company",labelKey:"lookupMopsCompany",href:`https://mops.twse.com.tw/mops/web/t05st01?co_id=${encodeURIComponent(c)}`}),p.push({kind:"official",id:"mops-material",labelKey:"lookupMopsMaterial",href:`https://mops.twse.com.tw/mops/web/t05st02?co_id=${encodeURIComponent(c)}`}),p.push({kind:"official",id:"twse-isin",labelKey:"lookupTwseIsin",href:`https://isin.twse.com.tw/isin/basic_search.jsp?code=${encodeURIComponent(c)}`}),/\.TWO$/i.test(r)&&p.push({kind:"official",id:"tpex-company",labelKey:"lookupTpexCompany",href:`https://www.tpex.org.tw/zh-tw/mainboard/listed/company-detail.html?stkno=${encodeURIComponent(c)}`})):p.push({kind:"official",id:"mops-home",labelKey:"lookupMopsFinancialQuery",href:"https://mops.twse.com.tw/mops/web/t57sb01_q1"}),r&&p.push({kind:"quote",id:"yahoo-tw",labelKey:"lookupYahooTwQuote",href:`https://tw.stock.yahoo.com/quote/${encodeURIComponent(r)}`});return n&&/^https?:\/\//i.test(String(n))&&p.push({kind:"company",id:"company-website",labelKey:"lookupCompanyWebsite",href:String(n).trim()}),{market:l,links:p,code:c||null,cik:pe(i)}}async function fa(t,{timeoutMs:e=18e3}={}){const o=[];for(const n of[`${Q}${t}`,t])try{const i=await De(n,{timeoutMs:e}),l=et(i);if(l)return{ok:!0,data:l,via:n.startsWith(Q)?"jina":"direct"};o.push(`${n.startsWith(Q)?"jina":"direct"}: non-json`)}catch(i){o.push(`${n.startsWith(Q)?"jina":"direct"}: ${i.message||i}`)}return{ok:!1,data:null,via:null,error:o.slice(0,3).join(" · ")}}async function So(){return ye||ve||(ve=(async()=>{const t=await fa(io,{timeoutMs:22e3}),e=new Map;if(t.ok&&t.data&&typeof t.data=="object")for(const o of Object.values(t.data)){const n=String((o==null?void 0:o.ticker)||"").toUpperCase(),i=pe(o==null?void 0:o.cik_str);n&&i&&e.set(n,i)}return ye={map:e,via:t.via,ok:t.ok,error:t.error||null},ye})(),ve)}async function bo(t){const e=String(t||"").toUpperCase().replace(/\./g,"-");if(!e)return{ok:!1,cik:null};const o=await So(),n=o.map.get(e)||null;return{ok:!!n,cik:n,via:o.via,error:n?null:o.error||"cik_not_found"}}function $o(t,{limit:e=ro}={}){var l,r,c,p,d,m;const o=(l=t==null?void 0:t.filings)==null?void 0:l.recent;if(!o||!Array.isArray(o.form))return[];const n=pe(t.cik),i=[];for(let g=0;g<o.form.length&&i.length<e;g++){const y=String(o.form[g]||"");if(!lo.test(y))continue;const k=((r=o.accessionNumber)==null?void 0:r[g])||null,b=((c=o.primaryDocument)==null?void 0:c[g])||null,C=((p=o.filingDate)==null?void 0:p[g])||null,B=((d=o.primaryDocDescription)==null?void 0:d[g])||((m=o.items)==null?void 0:m[g])||y,P=ko(n,k,b);P&&i.push({form:y,filingDate:C,description:String(B||y).slice(0,160),accessionNumber:k,href:P})}return i}async function To(t){var l,r;const e=pe(t);if(!e)return{ok:!1,filings:[],companyName:null,investorWebsite:null,error:"no_cik"};const o=await fa(no(e),{timeoutMs:22e3});if(!o.ok)return{ok:!1,filings:[],companyName:null,investorWebsite:null,error:o.error};const n=$o(o.data),i=(l=o.data)!=null&&l.investorWebsite&&/^https?:\/\//i.test(o.data.investorWebsite)?o.data.investorWebsite:null;return{ok:!0,filings:n,companyName:((r=o.data)==null?void 0:r.name)||null,investorWebsite:i,via:o.via}}async function wo({market:t,symbol:e,display:o,website:n}={}){const i=Ht({market:t,symbol:e,display:o,website:n,cik:null}),l={market:i.market,links:i.links,recent:[],cik:null,status:"links_only",noteKey:null,sources:[]};if(i.market==="TW")return l.status="links_ready",l.noteKey="lookupFilingsTwNote",l.sources.push("MOPS"),l;const r=String(e||"").toUpperCase();try{const c=await bo(r);if(c.ok){l.cik=c.cik,l.links=Ht({market:"US",symbol:e,display:o,website:n,cik:c.cik}).links,c.via&&l.sources.push(`SEC ticker map (${c.via})`);const p=await To(c.cik);p.ok?(l.recent=p.filings,l.status=p.filings.length?"filings_ok":"filings_empty",l.noteKey=p.filings.length?null:"lookupFilingsListEmpty",p.via&&l.sources.push(`SEC submissions (${p.via})`),p.investorWebsite&&(l.links.some(m=>m.href===p.investorWebsite)||l.links.push({kind:"company",id:"sec-investor-site",labelKey:"lookupInvestorRelations",href:p.investorWebsite}))):(l.status="filings_unavailable",l.noteKey="lookupFilingsListUnavailable")}else l.status="cik_unavailable",l.noteKey="lookupFilingsCikUnavailable"}catch{l.status="filings_unavailable",l.noteKey="lookupFilingsListUnavailable"}return l}function Po({market:t,symbol:e,chart:o,search:n,summary:i,digest:l}){var m,g,y,k;const r=(i==null?void 0:i.currency)||(o==null?void 0:o.currency)||(t==="TW"?"TWD":"USD"),c=(i==null?void 0:i.name)||(o==null?void 0:o.longName)||(o==null?void 0:o.shortName)||(n==null?void 0:n.longName)||(n==null?void 0:n.shortName)||(l==null?void 0:l.name)||e,p=(i==null?void 0:i.business)||(l!=null&&l.whatItDoes?String(l.whatItDoes):null)||null;return{market:t,symbol:e,name:c,business:p,sector:(i==null?void 0:i.sector)||(n==null?void 0:n.sector)||null,industry:(i==null?void 0:i.industry)||(n==null?void 0:n.industry)||null,exchange:(o==null?void 0:o.exchange)||(n==null?void 0:n.exchange)||null,currency:r,price:(o==null?void 0:o.price)??null,change:(o==null?void 0:o.change)??null,changePct:(o==null?void 0:o.changePct)??null,previousClose:(o==null?void 0:o.previousClose)??null,volume:(o==null?void 0:o.volume)??null,dayHigh:(o==null?void 0:o.dayHigh)??null,dayLow:(o==null?void 0:o.dayLow)??null,fiftyTwoWeekHigh:(o==null?void 0:o.fiftyTwoWeekHigh)??null,fiftyTwoWeekLow:(o==null?void 0:o.fiftyTwoWeekLow)??null,marketTime:(o==null?void 0:o.marketTime)??null,pe:(i==null?void 0:i.pe)??(l==null?void 0:l.pe)??null,forwardPe:(i==null?void 0:i.forwardPe)??(l==null?void 0:l.forwardPe)??null,marketCap:(i==null?void 0:i.marketCap)??(l==null?void 0:l.marketCap)??null,epsTrailing:(i==null?void 0:i.epsTrailing)??null,revenue:(i==null?void 0:i.revenue)??null,revenueGrowth:(i==null?void 0:i.revenueGrowth)??(l==null?void 0:l.revenueYoYPct)??null,earningsGrowth:(i==null?void 0:i.earningsGrowth)??(l==null?void 0:l.epsYoYPct)??null,profitMargins:(i==null?void 0:i.profitMargins)??null,grossMargins:(i==null?void 0:i.grossMargins)??null,dividendYield:(i==null?void 0:i.dividendYield)??null,beta:(i==null?void 0:i.beta)??null,nextEarningsDate:(i==null?void 0:i.nextEarningsDate)??(l==null?void 0:l.nextEarningsDate)??null,nextEarningsEstimate:(i==null?void 0:i.nextEarningsEstimate)??(l==null?void 0:l.consensusEpsNext)??null,lastEpsActual:(i==null?void 0:i.lastEpsActual)??((m=l==null?void 0:l.lastReport)==null?void 0:m.epsActual)??null,lastEpsEstimate:(i==null?void 0:i.lastEpsEstimate)??((g=l==null?void 0:l.lastReport)==null?void 0:g.epsEstimate)??null,lastEpsSurprisePct:(i==null?void 0:i.lastEpsSurprisePct)??((y=l==null?void 0:l.lastReport)==null?void 0:y.epsSurprisePct)??null,lastEpsQuarter:(i==null?void 0:i.lastEpsQuarter)??((k=l==null?void 0:l.lastReport)==null?void 0:k.quarter)??null,website:(i==null?void 0:i.website)||null,sources:[],filings:null}}async function Co(t,e="US"){const o=uo(t,e);if(!o.ok)return{ok:!1,error:o.error||"invalid",snapshot:null};await ma();const n=[o.symbol];o.alt&&n.push(o.alt);let i=null,l=o.symbol,r=null,c=null;for(const B of n){const P=await tt(`/v8/finance/chart/${encodeURIComponent(B)}?interval=1d&range=5d&includePrePost=false`);if(P.ok){if(i=go(P.data),(i==null?void 0:i.price)!=null||i!=null&&i.longName||i!=null&&i.shortName){l=B,r=P.via;break}i=null}else c=P.error}if(!i)return{ok:!1,error:"not_found",detail:c,snapshot:null,symbol:l,market:o.market};const p=encodeURIComponent(o.display||l),d=await tt(`/v1/finance/search?q=${p}&quotesCount=8&newsCount=0&listsCount=0`),m=d.ok?ho(d.data,l):null,g=await fo(l),y=vo(l),k=Po({market:o.market,symbol:l,chart:i,search:m,summary:g.data,digest:y}),b=[];r&&b.push(`Yahoo chart (${r})`),d.ok&&b.push(`Yahoo search (${d.via})`),g.ok&&b.push(`Yahoo quoteSummary (${g.via})`),y&&b.push("site earnings-digest");const C=await wo({market:o.market,symbol:l,display:o.display,website:k.website});if(k.filings=C,Array.isArray(C==null?void 0:C.sources))for(const B of C.sources)b.push(B);return k.sources=b,{ok:!0,snapshot:k,market:o.market,symbol:l,partial:!g.ok}}function x(t,e){return e?`<div class="lk-metric">
    <div class="lk-ml">${s(t)}</div>
    <div class="lk-mv">${e}</div>
  </div>`:""}function M(t){return t==null||t===""?null:`<span class="lk-mono">${s(String(t))}</span>`}function Lo(t){return t==="official"?`<span class="lk-src-badge lk-src-official">${s(a("lookupSourceOfficial"))}</span>`:t==="quote"?`<span class="lk-src-badge lk-src-quote">${s(a("lookupSourceQuote"))}</span>`:t==="company"?`<span class="lk-src-badge lk-src-company">${s(a("lookupSourceCompany"))}</span>`:""}function Ao(t){if(!t||!Array.isArray(t.links)||!t.links.length)return"";const e=t.links.map(i=>{if(!(i!=null&&i.href))return"";const l=a(i.labelKey||"lookupOfficialFilings");return`<li class="lk-ofil-item">
        ${Lo(i.kind)}
        <a class="lk-ofil-link" href="${s(i.href)}" target="_blank" rel="noopener noreferrer">${s(l)}</a>
      </li>`}).filter(Boolean).join("");let o="";if(t.market==="US")if(Array.isArray(t.recent)&&t.recent.length){const i=t.recent.map(l=>{const r=l.description||l.form||"";return`<tr>
            <td class="lk-ofil-form"><span class="lk-mono">${s(l.form||"")}</span></td>
            <td class="lk-ofil-date">${s(l.filingDate||"—")}</td>
            <td class="lk-ofil-title"><a href="${s(l.href)}" target="_blank" rel="noopener noreferrer">${s(r)}</a></td>
          </tr>`}).join("");o=`
        <h5 class="lk-h5">${s(a("lookupRecentFilings"))}</h5>
        <div class="lk-ofil-table-wrap">
          <table class="lk-ofil-table">
            <thead><tr>
              <th>${s(a("lookupFilingForm"))}</th>
              <th>${s(a("lookupFilingDate"))}</th>
              <th>${s(a("lookupFilingDoc"))}</th>
            </tr></thead>
            <tbody>${i}</tbody>
          </table>
        </div>`}else{const i=t.noteKey?a(t.noteKey):a("lookupFilingsListUnavailable");o=`<p class="lk-ofil-note">${s(i)}</p>
        <p class="lk-ofil-note">${s(a("lookupFilingsLinksStillWork"))}</p>`}else if(t.market==="TW"){const i=t.noteKey?a(t.noteKey):a("lookupFilingsTwNote");o=`<p class="lk-ofil-note">${s(i)}</p>`}const n=t.cik?`<p class="lk-ofil-meta">${s(a("lookupCikLabel"))}: <span class="lk-mono">${s(t.cik)}</span></p>`:"";return`
    <section class="lk-block lk-ofil" aria-label="${s(a("lookupOfficialFilings"))}">
      <h4 class="lk-h4">${s(a("lookupOfficialFilings"))}</h4>
      <p class="lk-ofil-lead">${s(a("lookupOfficialFilingsLead"))}</p>
      ${n}
      <ul class="lk-ofil-links">${e}</ul>
      ${o}
    </section>`}function Ot(t,e){if(!(e!=null&&e.ok)||!e.snapshot){const c=(e==null?void 0:e.error)==="empty"?a("lookupEmptyInput"):(e==null?void 0:e.error)==="invalid"?a("lookupInvalid"):(e==null?void 0:e.error)==="not_found"?a("lookupNotFound"):a("lookupError",{msg:(e==null?void 0:e.detail)||(e==null?void 0:e.error)||"error"});t.innerHTML=`<div class="lk-empty" role="status">${s(c)}</div>`;return}const o=e.snapshot,n=po(o.changePct??o.change),i=o.market==="TW"?`<span class="lk-badge lk-badge-tw">${s(a("twStock"))}</span>`:`<span class="lk-badge lk-badge-us">${s(a("usStock"))}</span>`,l=o.business?`<p class="lk-biz">${s(o.business.length>520?`${o.business.slice(0,520)}…`:o.business)}</p>`:"",r=ha(o.marketTime);t.innerHTML=`
    <article class="lk-card" data-symbol="${s(o.symbol)}">
      <header class="lk-card-head">
        <div>
          <div class="lk-sym-row">
            <span class="lk-symbol">${s(o.symbol)}</span>
            ${i}
          </div>
          <h3 class="lk-name">${s(o.name||"")}</h3>
          <p class="lk-meta-line">
            ${o.exchange?s(o.exchange):""}
            ${o.sector?` · ${s(o.sector)}`:""}
            ${o.industry?` · ${s(o.industry)}`:""}
          </p>
        </div>
        <div class="lk-quote ${n}">
          <div class="lk-price">${s(K(o.price,o.currency)||"—")}</div>
          <div class="lk-chg">
            <span>${s(K(o.change,o.currency)||"—")}</span>
            <span>${s(Y(o.changePct)||"—")}</span>
          </div>
          ${r?`<div class="lk-asof">${s(a("dataAsOf"))} ${s(r)}</div>`:""}
        </div>
      </header>

      <section class="lk-block" aria-label="${s(a("lookupBusiness"))}">
        <h4 class="lk-h4">${s(a("lookupBusiness"))}</h4>
        ${l||`<p class="lk-muted">${s(a("earningsDataMissing"))}</p>`}
      </section>

      <section class="lk-block" aria-label="${s(a("lookupQuoteStats"))}">
        <h4 class="lk-h4">${s(a("lookupQuoteStats"))}</h4>
        <div class="lk-metrics">
          ${x(a("lookupPrevClose"),M(K(o.previousClose,o.currency)))}
          ${x(a("lookupVolume"),M(co(o.volume)))}
          ${x(a("lookupDayRange"),o.dayLow!=null&&o.dayHigh!=null?M(`${K(o.dayLow,o.currency)} – ${K(o.dayHigh,o.currency)}`):null)}
          ${x(a("lookup52w"),o.fiftyTwoWeekLow!=null&&o.fiftyTwoWeekHigh!=null?M(`${K(o.fiftyTwoWeekLow,o.currency)} – ${K(o.fiftyTwoWeekHigh,o.currency)}`):null)}
          ${x(a("lookupMarketCap"),M(jt(o.marketCap,o.currency)))}
          ${x(a("earningsPe"),M(O(o.pe,1)))}
          ${x(a("earningsForwardPe"),M(O(o.forwardPe,1)))}
          ${x(a("lookupEps"),M(O(o.epsTrailing,2)))}
          ${x(a("lookupBeta"),M(O(o.beta,2)))}
          ${x(a("lookupDivYield"),M(Y(o.dividendYield,2)))}
        </div>
      </section>

      <section class="lk-block" aria-label="${s(a("lookupFinancials"))}">
        <h4 class="lk-h4">${s(a("lookupFinancials"))}</h4>
        <div class="lk-metrics">
          ${x(a("lookupRevenue"),M(jt(o.revenue,o.currency)))}
          ${x(a("earningsRevYoy"),M(Y(o.revenueGrowth,1)))}
          ${x(a("earningsEpsYoy"),M(Y(o.earningsGrowth,1)))}
          ${x(a("lookupGrossMargin"),M(Y(o.grossMargins,1)))}
          ${x(a("lookupProfitMargin"),M(Y(o.profitMargins,1)))}
        </div>
      </section>

      <section class="lk-block" aria-label="${s(a("lookupEarnings"))}">
        <h4 class="lk-h4">${s(a("lookupEarnings"))}</h4>
        <div class="lk-metrics">
          ${x(a("earningsNextDate"),M(o.nextEarningsDate))}
          ${x(a("lookupEpsConsensus"),M(O(o.nextEarningsEstimate,2)))}
          ${x(a("earningsLastEps"),o.lastEpsActual!=null?M(`${O(o.lastEpsActual,2)}${o.lastEpsQuarter?` · ${o.lastEpsQuarter}`:""}`):null)}
          ${x(a("lookupEpsSurprise"),M(Y(o.lastEpsSurprisePct,1)))}
        </div>
      </section>

      ${Ao(o.filings)}

      <p class="lk-sources">${s(a("lookupSources"))}: ${s((o.sources||[]).join(" · ")||"Yahoo Finance")}</p>
      ${e.partial?`<p class="lk-partial">${s(a("lookupPartial"))}</p>`:""}
      <p class="lk-disclaimer" role="note">${s(a("lookupDisclaimer"))}</p>
    </article>`}function Eo(){return`
    <section class="section lookup-section" aria-label="${s(a("lookupTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${s(a("lookupTitle"))}</h2>
        <p class="view-lead">${s(a("lookupLead"))}</p>
      </header>
      <p class="lk-disclaimer lk-disclaimer-top" role="note">${s(a("lookupDisclaimer"))}</p>
      <div class="lk-market-tabs" role="tablist" aria-label="${s(a("market"))}">
        <button type="button" class="lk-tab is-active" data-lk-market="US" role="tab" aria-selected="true">${s(a("usStock"))}</button>
        <button type="button" class="lk-tab" data-lk-market="TW" role="tab" aria-selected="false">${s(a("twStock"))}</button>
      </div>
      <form class="lk-form" data-lk-form>
        <label class="lk-label" for="lk-input">${s(a("lookupInputLabel"))}</label>
        <div class="lk-row">
          <input id="lk-input" class="lk-input" name="symbol" type="text" autocomplete="off" spellcheck="false"
            placeholder="${s(a("lookupPlaceholderUs"))}" data-lk-input />
          <button type="submit" class="lk-submit">${s(a("lookupSearch"))}</button>
        </div>
        <p class="lk-hint" data-lk-hint>${s(a("lookupHintUs"))}</p>
      </form>
      <div id="lk-root" class="lk-root" aria-live="polite">
        <p class="lk-muted">${s(a("lookupIdle"))}</p>
      </div>
    </section>`}function xo(t="#lk-root"){const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};const o=e.closest(".lookup-section")||e.parentElement;if(!o||o.dataset.lkBound==="1")return{ok:!0,root:e};o.dataset.lkBound="1";const n=o.querySelector("[data-lk-form]"),i=o.querySelector("[data-lk-input]"),l=o.querySelector("[data-lk-hint]"),r=o.querySelectorAll("[data-lk-market]");let c="US";const p=m=>{c=m==="TW"?"TW":"US",r.forEach(g=>{const y=g.dataset.lkMarket===c;g.classList.toggle("is-active",y),g.setAttribute("aria-selected",y?"true":"false")}),i&&(i.placeholder=a(c==="TW"?"lookupPlaceholderTw":"lookupPlaceholderUs")),l&&(l.textContent=a(c==="TW"?"lookupHintTw":"lookupHintUs"))};r.forEach(m=>{m.addEventListener("click",()=>p(m.dataset.lkMarket))});const d=async()=>{const m=(i==null?void 0:i.value)||"";e.innerHTML=`<p class="lk-loading">${s(a("lookupLoading"))}</p>`;try{const g=await Co(m,c);Ot(e,g)}catch(g){Ot(e,{ok:!1,error:"error",detail:(g==null?void 0:g.message)||String(g)})}};n==null||n.addEventListener("submit",m=>{m.preventDefault(),d()});try{const m=String(location.hash||""),g=m.match(/[?&]q=([^&]+)/i)||m.match(/#(?:lookup|quote)\/([A-Za-z0-9.\-]+)/i);if(g){const y=decodeURIComponent(g[1]);/^\d{4}/.test(y)||/\.TW/i.test(y)?p("TW"):p("US"),i&&(i.value=y),d()}}catch{}return ma(),{ok:!0,root:e,run:d}}const Mo="./data/soxl-desk.json";function Ro(t){try{return new Date(t).toLocaleString(R(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})+a("taipei")}catch{return t||"—"}}function re(t,e=2){return t==null||Number.isNaN(t)?null:Number(t).toLocaleString(R(),{minimumFractionDigits:e,maximumFractionDigits:e})}function Ye(t,e=2){return t==null||Number.isNaN(t)?null:`${t>0?"+":""}${Number(t).toFixed(e)}%`}function Ft(t,e=2){return t==null||Number.isNaN(t)?null:`${t>0?"+":(t<0,"")}${re(t,e)}`}function ke(t){return t==null||Number.isNaN(t)||t===0?"sx-flat":t>0?"sx-up":"sx-down"}function zo(t,e){const o=(e==null?void 0:e.quote)||{},n=o.change,i=o.changePct,l=ke(i??n),r=o.regularClose,c=`
    <section class="sx-hero" aria-label="${s(a("soxlHeroLabel"))}">
      <div class="sx-hero-main">
        <div class="sx-symbol-row">
          <span class="sx-symbol">SOXL</span>
          <span class="sx-badge">3×</span>
          <span class="sx-fund">${s((e==null?void 0:e.fundName)||a("soxlFundFallback"))}</span>
        </div>
        <div class="sx-price-row ${l}">
          <span class="sx-price">$${s(re(o.price,2)||"—")}</span>
          <span class="sx-chg">${s(Ft(n,2)||"—")}</span>
          <span class="sx-chgp">${s(Ye(i,2)||"—")}</span>
        </div>
        <p class="sx-session">${s(o.session||"")} · ${s(a("dataAsOf"))} ${s(Ro(e==null?void 0:e.asOf))}</p>
        ${(r==null?void 0:r.price)!=null?`<p class="sx-regular">${s(a("soxlRegularClose"))}: $${s(re(r.price,2))}
                <span class="${ke(r.changePct)}">${s(Ft(r.change,2)||"")} (${s(Ye(r.changePct,2)||"")})</span>
                ${r.session?` · ${s(r.session)}`:""}</p>`:""}
      </div>
      <div class="sx-hero-side">
        <p class="sx-lev">${s(a("soxlLeverageNote"))}</p>
        <p class="sx-hold-date"><strong>${s(a("soxlHoldingsAsOf"))}</strong> ${s((e==null?void 0:e.holdingsAsOf)||"—")}
          <span class="sx-muted">（${s(a("soxlHoldingsNotSameDay"))}）</span></p>
      </div>
    </section>`,p=Array.isArray(e==null?void 0:e.events)?e.events:[],d=p.length?`<section class="sx-events" aria-label="${s(a("soxlEventsTitle"))}">
        <h3 class="sx-h3">${s(a("soxlEventsTitle"))}</h3>
        <ul class="sx-event-list">
          ${p.map($=>`<li class="sx-event sx-sev-${s($.severity||"info")}">
              <div class="sx-event-title">${s($.title||"")}</div>
              <p class="sx-event-detail">${s($.detail||"")}</p>
            </li>`).join("")}
        </ul>
      </section>`:"",m=Array.isArray(e==null?void 0:e.news)?e.news:[],g=`
    <section class="sx-news" aria-label="${s(a("soxlNewsTitle"))}">
      <h3 class="sx-h3">${s(a("soxlNewsTitle"))}</h3>
      <div class="sx-news-list">
        ${m.length?m.map($=>`<a class="sx-news-card" href="${s($.url||"#")}" target="_blank" rel="noopener noreferrer">
              <div class="sx-news-title">${s($.title||"")}</div>
              ${$.published?`<div class="sx-news-meta">${s($.published)}</div>`:""}
              ${$.summary?`<p class="sx-news-sum">${s($.summary)}</p>`:""}
            </a>`).join(""):`<p class="sx-empty">${s(a("soxlNewsEmpty"))}</p>`}
      </div>
    </section>`,k=(Array.isArray(e==null?void 0:e.holdings)?e.holdings:[]).map($=>{const T=$.ticker||$.instrumentType||"—",f=ke($.changePct),v=ke($.contributionPct),S=Array.isArray($.reasons)?$.reasons:[],L=Array.isArray($.sources)?$.sources:[];return`<tr>
        <td>
          <div class="sx-tk">${s(String(T))}</div>
          <div class="sx-name">${s($.name||"")}</div>
          ${$.instrumentType?`<span class="sx-itype">${s($.instrumentType)}</span>`:""}
        </td>
        <td class="sx-num">${$.weightPct!=null?s(re($.weightPct,2))+"%":"—"}</td>
        <td class="sx-num ${f}">${$.changePct!=null?s(Ye($.changePct,2)):"—"}</td>
        <td class="sx-num ${v}" title="${s($.contributionNote||a("soxlContributionHint"))}">
          ${$.contributionPct!=null?s(re($.contributionPct,3))+" pp*":"—"}
        </td>
        <td class="sx-reasons">
          <ul>${S.map(E=>`<li>${s(E)}</li>`).join("")}</ul>
          ${L.length?`<div class="sx-srcs">${L.slice(0,3).map((E,F)=>`<a href="${s(E)}" target="_blank" rel="noopener noreferrer">${s(a("soxlSourceN",{n:String(F+1)}))}</a>`).join(" · ")}</div>`:""}
        </td>
      </tr>`}).join(""),b=`
    <section class="sx-holdings" aria-label="${s(a("soxlHoldingsTitle"))}">
      <h3 class="sx-h3">${s(a("soxlHoldingsTitle"))}</h3>
      <p class="sx-panel-lead">${s((e==null?void 0:e.holdingsFreshnessNote)||a("soxlHoldingsLead"))}</p>
      <p class="sx-panel-lead sx-muted">${s((e==null?void 0:e.leverageNote)||a("soxlContributionHint"))}</p>
      <div class="sx-table-wrap">
        <table class="sx-table">
          <thead>
            <tr>
              <th>${s(a("soxlColName"))}</th>
              <th>${s(a("soxlColWeight"))}</th>
              <th>${s(a("soxlColReturn"))}</th>
              <th>${s(a("soxlColContrib"))}</th>
              <th>${s(a("soxlColReasons"))}</th>
            </tr>
          </thead>
          <tbody>${k||`<tr><td colspan="5">${s(a("soxlHoldingsEmpty"))}</td></tr>`}</tbody>
        </table>
      </div>
      <p class="sx-footnote">* ${s(a("soxlContributionHint"))}</p>
    </section>`,C=Array.isArray(e==null?void 0:e.overallUpReasons)?e.overallUpReasons:[],B=Array.isArray(e==null?void 0:e.overallDownReasons)?e.overallDownReasons:[],P=`
    <section class="sx-overall" aria-label="${s(a("soxlOverallTitle"))}">
      <h3 class="sx-h3">${s(a("soxlOverallTitle"))}</h3>
      <div class="sx-overall-grid">
        <article class="sx-card sx-card-up">
          <h4>${s(a("soxlWhyUp"))}</h4>
          <ul>${C.map($=>`<li>${s($)}</li>`).join("")||`<li>${s(a("earningsDataMissing"))}</li>`}</ul>
        </article>
        <article class="sx-card sx-card-down">
          <h4>${s(a("soxlWhyDown"))}</h4>
          <ul>${B.map($=>`<li>${s($)}</li>`).join("")||`<li>${s(a("earningsDataMissing"))}</li>`}</ul>
        </article>
      </div>
    </section>`,j=Array.isArray(e==null?void 0:e.disclaimers)?e.disclaimers:[],oe=j.length?`<ul class="sx-disc-list">${j.map($=>`<li>${s($)}</li>`).join("")}</ul>`:`<p>${s(a("soxlDisclaimer"))}</p>`;t.innerHTML=`
    ${c}
    ${d}
    ${g}
    ${b}
    ${P}
    <div class="sx-disclaimer" role="note">${oe}</div>
  `}function Bo(){return`
    <section class="section soxl-section" aria-label="${s(a("soxlTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${s(a("soxlTitle"))}</h2>
        <p class="view-lead">${s(a("soxlLead"))}</p>
      </header>
      <p class="sx-disclaimer sx-disclaimer-top" role="note">${s(a("soxlDisclaimer"))}</p>
      <div id="sx-root" class="sx-root">
        <p class="sx-loading">${s(a("loading"))}</p>
      </div>
    </section>`}async function Do(t="#sx-root"){const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};try{const o=await fetch(Mo);if(!o.ok)throw new Error(`HTTP ${o.status}`);const n=await o.json();return zo(e,n),{ok:!0,data:n}}catch(o){return e.innerHTML=`
      <div class="sx-empty" role="status">
        <p>${s(a("soxlLoadError",{msg:o.message||String(o)}))}</p>
      </div>`,{ok:!1,error:o}}}const qt="./data/us-macro-calendar.json",No=900*1e3,jo=2160*60*1e3;let Se=null;function Ho(t){const e=t!=null&&t.eventKey?`macroEvent_${t.eventKey}`:null;if(e){const o=a(e,"");if(o&&o!==e)return o}return(t==null?void 0:t.shortName)||(t==null?void 0:t.eventName)||"—"}function Oo(t,e){const o=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(t),n=i=>{var l;return(l=o.find(r=>r.type===i))==null?void 0:l.value};return`${n("year")}-${n("month")}-${n("day")}`}function Fo(t,e){try{const o=new Date(t),n=o.toLocaleDateString(R(),{timeZone:e,month:"numeric",day:"numeric",weekday:"short"}),i=o.toLocaleTimeString(R(),{timeZone:e,hour:"2-digit",minute:"2-digit",hour12:!1});return{datePart:n,timePart:i}}catch{return{datePart:"—",timePart:""}}}function qo(t){try{return new Date(t).toLocaleString(R(),{timeZone:"Asia/Taipei",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return t||"—"}}function Io(t,e){let o=null;for(const n of t)if(n.dayEt>=e){o=n.id;break}return o}function Uo(t,{todayEt:e,nextId:o,timeZone:n}){const i=s(Ho(t)),{datePart:l,timePart:r}=Fo(t.scheduledAt,n),c=t.dayEt===e,p=t.id===o,d=t.dayEt<e,m=["macro-chip",t.highImpact||t.importance==="high"?"macro-chip--high":"",c?"macro-chip--today":"",p&&!c?"macro-chip--next":"",d?"macro-chip--past":""].filter(Boolean).join(" "),g=[];c?g.push(`<span class="macro-chip-tag">${s(a("macroToday"))}</span>`):p&&g.push(`<span class="macro-chip-tag macro-chip-tag--next">${s(a("macroNext"))}</span>`),(t.highImpact||t.importance==="high")&&g.push(`<span class="macro-chip-tag macro-chip-tag--high">${s(a("macroHighImpact"))}</span>`);const y=[t.eventName,t.periodLabel,`${t.dayEt} ${r} ET`,t.officialUrl?"↗ official":null].filter(Boolean).join(" · "),b=`
      <span class="macro-chip-when">${r?`${s(l)} ${s(r)}`:s(l)}</span>
      <span class="macro-chip-name">${i}</span>
      ${g.length?`<span class="macro-chip-tags">${g.join("")}</span>`:""}`,C=typeof t.officialUrl=="string"&&/^https?:\/\//i.test(t.officialUrl)?t.officialUrl:null;return C?`
    <a class="${m}" href="${s(C)}" target="_blank" rel="noopener noreferrer"
       title="${s(y)}" data-event-id="${s(t.id)}">${b}
    </a>`:`
    <span class="${m}" title="${s(y)}" data-event-id="${s(t.id)}">${b}
    </span>`}function Wo(t){const e=t.querySelector(".index-marquee");if(!e||e.dataset.marqueeBound==="1")return;e.dataset.marqueeBound="1";const o=()=>e.classList.add("is-paused"),n=()=>e.classList.remove("is-paused");e.addEventListener("pointerdown",o),e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("pointerleave",n),e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("touchend",n,{passive:!0}),e.addEventListener("touchcancel",n,{passive:!0})}function _o(t,e){if(!t)return;const o=(e==null?void 0:e.timezone)||"America/New_York",n=Oo(new Date,o),i=Array.isArray(e==null?void 0:e.events)?e.events:[],l=Io(i,n),r=(e==null?void 0:e.asOf)||null,c=r?Date.now()-Date.parse(r):NaN,p=!!(e!=null&&e.stale)||!Number.isNaN(c)&&c>jo;let d=`${s(a("macroTzEt"))}`;if(r&&(d+=` · ${s(a("macroAsOf"))} ${s(qo(r))}`),p&&(d+=` · ${s(a("macroStale"))}`),!i.length){t.innerHTML=`
      <div class="macro-strip" role="region" aria-label="${s(a("macroTitle"))}">
        <div class="macro-strip-side">
          <span class="macro-strip-label">${s(a("macroTitle"))}</span>
          <span class="macro-strip-meta">${d}</span>
        </div>
        <p class="macro-strip-empty">${s(a("macroEmpty"))}</p>
      </div>`;return}const m=i.map(k=>Uo(k,{todayEt:n,nextId:l,timeZone:o})),g=`<div class="index-marquee-group">${m.join("")}</div>`,y=`<div class="index-marquee-group index-marquee-group--clone" aria-hidden="true">${m.join("")}</div>`;t.innerHTML=`
    <div class="macro-strip" role="region" aria-label="${s(a("macroTitle"))}">
      <div class="macro-strip-side">
        <span class="macro-strip-label">${s(a("macroTitle"))}</span>
        <span class="macro-strip-meta" title="${d}">${d}</span>
      </div>
      <div class="index-strip index-strip--marquee macro-strip-marquee">
        <div class="index-marquee" tabindex="0">
          <div class="index-marquee-track">
            ${g}
            ${y}
          </div>
        </div>
      </div>
    </div>`,Wo(t)}function Vo(){return'<div id="us-macro-strip" class="us-macro-strip-host" aria-live="polite"></div>'}async function Go(t=!1){const e=t?`${qt}?t=${Date.now()}`:qt,o=await fetch(e,{cache:t?"no-store":"default"});if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.json()}async function Yo(t="#us-macro-strip"){const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1};const o=async i=>{try{const l=await Go(i);return _o(e,l),{ok:!0,data:l}}catch(l){return e.innerHTML=`
        <div class="macro-strip macro-strip--error" role="status">
          <div class="macro-strip-side">
            <span class="macro-strip-label">${s(a("macroTitle"))}</span>
          </div>
          <p class="macro-strip-empty">${s(a("macroLoadError",{msg:l.message||String(l)}))}</p>
        </div>`,{ok:!1,error:l}}},n=await o(!1);return Se&&(window.clearInterval(Se),Se=null),Se=window.setInterval(()=>{o(!0)},No),n}const Ko="https://www.youtube.com/watch?v=7n-e5pe6z4U",Xo=[1,2,3,4,5,6,7,8,9,10],Qo=[1,2,3,4,5,6],Zo=[1,2,3,4],Jo=[1,2,3];function ei(){return`
    <div class="gz-badges" role="list">
      <span class="gz-badge gz-badge-candidate" role="listitem">${s(a("godzillaBadgeCandidate"))}</span>
      <span class="gz-badge gz-badge-watch" role="listitem">${s(a("godzillaBadgeWatch"))}</span>
      <span class="gz-badge gz-badge-us" role="listitem">${s(a("godzillaUsFocus"))}</span>
      <span class="gz-badge gz-badge-self" role="listitem">${s(a("godzillaSelfReport"))}</span>
    </div>`}function ti(){return Xo.map(t=>{const e=a(`godzillaThesis${t}Title`),o=a(`godzillaThesis${t}Body`);return`
      <article class="gz-card" data-thesis="${t}">
        <div class="gz-card-num" aria-hidden="true">${t}</div>
        <div class="gz-card-body">
          <h3 class="gz-card-title">${s(e)}</h3>
          <p class="gz-card-text">${s(o)}</p>
        </div>
      </article>`}).join("")}function ai(){return`
    <ul class="gz-check-list">
      ${Qo.map(t=>`<li class="gz-check-item">
          <span class="gz-check-mark" aria-hidden="true">✓</span>
          <span>${s(a(`godzillaCheck${t}`))}</span>
        </li>`).join("")}
    </ul>`}function si(){return`
    <ul class="gz-bullet-list">
      ${Zo.map(t=>`<li>${s(a(`godzillaOpt${t}`))}</li>`).join("")}
    </ul>`}function oi(){return`
    <ul class="gz-bullet-list">
      ${Jo.map(t=>`<li>${s(a(`godzillaRsu${t}`))}</li>`).join("")}
    </ul>`}function ii(t){t.innerHTML=`
    <section class="gz-hero" aria-label="${s(a("godzillaHeroLabel"))}">
      <div class="gz-hero-main">
        <h3 class="gz-hero-kicker">${s(a("godzillaKicker"))}</h3>
        <p class="gz-hero-tagline">${s(a("godzillaTagline"))}</p>
        ${ei()}
        <p class="gz-source">
          <span class="gz-source-label">${s(a("godzillaSourceLabel"))}</span>
          <a class="gz-yt" href="${Ko}" target="_blank" rel="noopener noreferrer">${s(a("godzillaYoutube"))}</a>
          <span class="gz-source-cite">· ${s(a("godzillaSourceCite"))}</span>
        </p>
      </div>
    </section>

    <section class="gz-panel" aria-label="${s(a("godzillaThesesTitle"))}">
      <h3 class="gz-h3">${s(a("godzillaThesesTitle"))}</h3>
      <p class="gz-panel-lead">${s(a("godzillaThesesLead"))}</p>
      <div class="gz-thesis-grid">
        ${ti()}
      </div>
    </section>

    <section class="gz-panel" aria-label="${s(a("godzillaChecklistTitle"))}">
      <h3 class="gz-h3">${s(a("godzillaChecklistTitle"))}</h3>
      <p class="gz-panel-lead">${s(a("godzillaChecklistLead"))}</p>
      ${ai()}
    </section>

    <div class="gz-two-col">
      <section class="gz-panel" aria-label="${s(a("godzillaOptionsTitle"))}">
        <h3 class="gz-h3">${s(a("godzillaOptionsTitle"))}</h3>
        <p class="gz-panel-lead">${s(a("godzillaOptionsLead"))}</p>
        ${si()}
      </section>
      <section class="gz-panel" aria-label="${s(a("godzillaRsuTitle"))}">
        <h3 class="gz-h3">${s(a("godzillaRsuTitle"))}</h3>
        <p class="gz-panel-lead">${s(a("godzillaRsuLead"))}</p>
        ${oi()}
      </section>
    </div>

    <section class="gz-panel gz-tw" aria-label="${s(a("godzillaTwTitle"))}">
      <h3 class="gz-h3">${s(a("godzillaTwTitle"))}</h3>
      <p class="gz-panel-lead">${s(a("godzillaTwLead"))}</p>
      <p class="gz-tw-body">${s(a("godzillaTwBody"))}</p>
    </section>

    <aside class="gz-gate" role="note">
      <strong class="gz-gate-title">${s(a("godzillaGateNote"))}</strong>
      <p class="gz-gate-detail">${s(a("godzillaGateDetail"))}</p>
    </aside>
  `}function ni(t="#gz-root"){const e=typeof t=="string"?document.querySelector(t):t;return e?(ii(e),{ok:!0}):{ok:!1}}const ce={id:"Xn1EsFe7snQ",watchUrl:"https://www.youtube.com/watch?v=Xn1EsFe7snQ",thumbUrl:"https://i.ytimg.com/vi/Xn1EsFe7snQ/hqdefault.jpg"},li="https://ecorner.stanford.edu",ri=[1,2,3,4,5];function ci(){return`
    <div class="jh-badges" role="list">
      <span class="jh-badge jh-badge-candidate" role="listitem">${s(a("godzillaBadgeCandidate"))}</span>
      <span class="jh-badge jh-badge-watch" role="listitem">${s(a("godzillaBadgeWatch"))}</span>
      <span class="jh-badge jh-badge-us" role="listitem">${s(a("jensenUsFocus"))}</span>
      <span class="jh-badge jh-badge-talk" role="listitem">${s(a("jensenTalkBadge"))}</span>
    </div>`}function di(){return ri.map(t=>{const e=a(`jensenH${t}Title`),o=a(`jensenH${t}Body`);return`
      <article class="jh-card" data-highlight="${t}">
        <div class="jh-card-num" aria-hidden="true">${t}</div>
        <div class="jh-card-body">
          <h4 class="jh-card-title">${s(e)}</h4>
          <p class="jh-card-text">${s(o)}</p>
        </div>
      </article>`}).join("")}function pi(){const t=a("jensenEmbedTitle");return`
    <div class="jh-yt-card" data-yt-id="${s(ce.id)}" data-embed-allowed="false">
      <a class="jh-yt-card-media" href="${ce.watchUrl}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">
        <img
          class="jh-yt-card-thumb"
          src="${ce.thumbUrl}"
          alt=""
          width="480"
          height="360"
          loading="lazy"
          decoding="async"
        />
        <span class="jh-yt-card-play" aria-hidden="true"></span>
      </a>
      <div class="jh-yt-card-body">
        <p class="jh-yt-card-kicker">${s(a("jensenYoutube"))}</p>
        <h4 class="jh-yt-card-title">${s(t)}</h4>
        <p class="jh-yt-card-note">${s(a("jensenEmbedBlockedNote"))}</p>
        <a
          class="jh-yt-card-cta"
          href="${ce.watchUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >${s(a("jensenWatchCta"))}</a>
      </div>
    </div>`}function ui(){return pi()}function gi(t){t.innerHTML=`
    <section class="jh-hero" aria-label="${s(a("jensenHeroLabel"))}">
      <div class="jh-hero-main">
        <h3 class="jh-hero-kicker">${s(a("jensenKicker"))}</h3>
        <p class="jh-hero-tagline">${s(a("jensenTagline"))}</p>
        ${ci()}
        <p class="jh-meta">${s(a("jensenMeta"))}</p>
        <p class="jh-source">
          <span class="jh-source-label">${s(a("godzillaSourceLabel"))}</span>
          <a class="jh-yt" href="${ce.watchUrl}" target="_blank" rel="noopener noreferrer">${s(a("jensenYoutube"))}</a>
          <span class="jh-source-cite">· ${s(a("jensenSourceCite"))}</span>
        </p>
        <p class="jh-source jh-source-alt">
          <a class="jh-yt" href="${li}" target="_blank" rel="noopener noreferrer">${s(a("jensenEcorner"))}</a>
        </p>
      </div>
    </section>

    ${ui()}

    <section class="jh-panel" aria-label="${s(a("jensenHighlightsTitle"))}">
      <h3 class="jh-h3">${s(a("jensenHighlightsTitle"))}</h3>
      <p class="jh-panel-lead">${s(a("jensenHighlightsLead"))}</p>
      <div class="jh-highlight-grid">
        ${di()}
      </div>
    </section>

    <section class="jh-panel jh-tw" aria-label="${s(a("jensenTwTitle"))}">
      <h3 class="jh-h3">${s(a("jensenTwTitle"))}</h3>
      <p class="jh-panel-lead">${s(a("jensenTwLead"))}</p>
      <p class="jh-tw-body">${s(a("jensenTwBody"))}</p>
    </section>

    <aside class="jh-gate" role="note">
      <strong class="jh-gate-title">${s(a("jensenGateNote"))}</strong>
      <p class="jh-gate-detail">${s(a("jensenGateDetail"))}</p>
    </aside>
  `}function hi(t="#jh-root"){const e=typeof t=="string"?document.querySelector(t):t;return e?(gi(e),{ok:!0}):{ok:!1}}const mi="./data/gooaye-episodes.json",de=25,fi="#research/podcast",It="https://podcasts.apple.com/tw/podcast/gooaye-%E8%82%A1%E7%99%8C/id1500839292";let be=null,ne=null,Ae=de,Ne="";async function yi(){return be||ne||(ne=(async()=>{const t=await fetch(mi,{cache:"no-cache"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return be=await t.json(),be})().catch(t=>{throw ne=null,t}),ne)}function vi(t){if(!t)return"";try{const e=new Date(t);return Number.isNaN(e.getTime())?t:new Intl.DateTimeFormat(void 0,{timeZone:"Asia/Taipei",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(e)}catch{return t}}function ki(t){const e=(t==null?void 0:t.episodes)||[],o=Ne.trim().toLowerCase();return o?e.filter(n=>[n.title,n.subtitle,n.ep!=null?`ep${n.ep}`:"",n.ep!=null?String(n.ep):"",...n.keyPoints||[]].filter(Boolean).join(`
`).toLowerCase().includes(o)):e}function Si(t){const e=t.ep!=null?`<span class="gy-ep-num">EP${s(String(t.ep))}</span>`:"",o=t.pubDateTw?`<time class="gy-ep-date" datetime="${s(t.pubDateIso||t.pubDateTw)}">${s(t.pubDateTw)}</time>`:"",n=t.title||(t.ep!=null?`EP${t.ep}`:a("gooayeUntitled")),i=(t.keyPoints||[]).filter(Boolean);let l;i.length?l=`<ul class="gy-ep-points">${i.map(p=>`<li>${s(p)}</li>`).join("")}</ul>`:l=`<p class="gy-ep-empty">${s(a("gooayeNotesThin"))}</p>`;const r=t.notesQuality==="teaser"||t.notesQuality==="title-only"?`<p class="gy-ep-source-note">${s(a("gooayeTeaserNote"))}</p>`:"",c=t.link?`<a class="gy-ep-link" href="${s(t.link)}" target="_blank" rel="noopener noreferrer">${s(a("gooayeListen"))}</a>`:"";return`
    <article class="gy-ep" data-ep="${s(String(t.ep??""))}">
      <header class="gy-ep-head">
        <div class="gy-ep-meta">${e}${o}</div>
        <h4 class="gy-ep-title">${s(n)}</h4>
      </header>
      <div class="gy-ep-body">
        <p class="gy-ep-kicker">${s(a("gooayeKeyPoints"))}</p>
        ${l}
        ${r}
        <div class="gy-ep-actions">${c}</div>
      </div>
    </article>`}function je(t,e,{error:o}={}){var g;if(o){t.innerHTML=`
      <div class="gy-error" role="alert">
        <p>${s(a("gooayeLoadError",{msg:String(o.message||o)}))}</p>
        <a class="pc-link pc-link-ext" href="${It}" target="_blank" rel="noopener noreferrer">${s(a("podcastsGooayeApple"))}</a>
      </div>`;return}const n=ki(e),i=(e.episodes||[]).length,l=n.slice(0,Ae),r=Math.max(0,n.length-l.length),c=vi(e.asOf),p=e.counts||{};t.innerHTML=`
    <div class="gy-toolbar">
      <div class="gy-toolbar-stats" aria-live="polite">
        <span class="gy-stat">${s(a("gooayeEpisodeCount",{n:String(i)}))}</span>
        ${c?`<span class="gy-asof">${s(a("gooayeAsOf",{date:c}))}</span>`:""}
        ${p.notesEmpty?`<span class="gy-stat-muted">${s(a("gooayeEmptyCount",{n:String(p.notesEmpty)}))}</span>`:""}
      </div>
      <label class="gy-search">
        <span class="gy-search-label">${s(a("gooayeSearchLabel"))}</span>
        <input type="search" class="gy-search-input" data-gy-search
          placeholder="${s(a("gooayeSearchPlaceholder"))}"
          value="${s(Ne)}" autocomplete="off" />
      </label>
    </div>

    <p class="gy-source-line">
      ${s(a("gooayeSourceLine"))}
      <a class="pc-link pc-link-ext" href="${s(((g=e.show)==null?void 0:g.feedUrl)||"")}" target="_blank" rel="noopener noreferrer">SoundOn RSS</a>
      ·
      <a class="pc-link pc-link-ext" href="${It}" target="_blank" rel="noopener noreferrer">${s(a("podcastsGooayeApple"))}</a>
      ·
      <a class="pc-link" href="${fi}">${s(a("podcastsGotoResearch"))}</a>
    </p>

    <div class="gy-list" role="list">
      ${l.length?l.map(Si).join(""):`<p class="gy-empty">${s(a("gooayeNoResults"))}</p>`}
    </div>

    <div class="gy-pager">
      ${r>0?`<button type="button" class="gy-load-more" data-gy-more>
              ${s(a("gooayeLoadMore",{n:String(Math.min(de,r)),left:String(r)}))}
            </button>`:n.length?`<p class="gy-pager-done">${s(a("gooayeShowingAll",{n:String(n.length)}))}</p>`:""}
    </div>`;const d=t.querySelector("[data-gy-search]");if(d){let y=null;d.addEventListener("input",()=>{clearTimeout(y),y=setTimeout(()=>{Ne=d.value||"",Ae=de,je(t,e)},180)})}const m=t.querySelector("[data-gy-more]");m&&m.addEventListener("click",()=>{Ae+=de,je(t,e)})}function bi(){return`
    <article class="pc-card pc-card-gooaye" id="podcast-gooaye" data-podcast="gooaye">
      <header class="pc-card-head pc-card-head-gooaye">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-library">${s(a("gooayeLibraryBadge"))}</span>
          <span class="pc-card-badge pc-badge-tw">${s(a("podcastsGooayeMarket"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${s(a("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${s(a("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${s(a("podcastsGooayeTitle"))}</h3>
        <p class="pc-card-blurb">${s(a("podcastsGooayeLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="gy-disclaimer" role="note">${s(a("gooayeDisclaimer"))}</p>
        <div id="gy-root" class="gy-root" aria-busy="true">
          <p class="gy-loading">${s(a("gooayeLoading"))}</p>
        </div>
      </div>
    </article>`}function $i(){return bi()}async function Ti(t="#gy-root"){var o;const e=typeof t=="string"?document.querySelector(t):t;if(!e)return{ok:!1,reason:"missing-root"};Ae=de,Ne="";try{const n=await yi();return e.setAttribute("aria-busy","false"),je(e,n),{ok:!0,count:((o=n.episodes)==null?void 0:o.length)||0}}catch(n){return e.setAttribute("aria-busy","false"),je(e,null,{error:n}),{ok:!1,reason:String((n==null?void 0:n.message)||n)}}}const ht=[{id:"godzilla",titleKey:"godzillaTitle",handleKey:"podcastsGodzillaHandle",blurbKey:"godzillaLead",marketKey:"godzillaUsFocus",market:"US",featured:!0},{id:"jensen",titleKey:"jensenTitle",handleKey:"jensenHandle",blurbKey:"jensenLead",marketKey:"jensenUsFocus",market:"US",featured:!0},{id:"gooaye",titleKey:"podcastsGooayeTitle",handleKey:null,blurbKey:"podcastsGooayeLead",marketKey:"podcastsGooayeMarket",market:"TW",featured:!1}],$e={godzilla:"godzilla","godzilla-playbook":"godzilla",playbook:"godzilla",哥吉拉:"godzilla",哥吉拉心法:"godzilla",jensen:"jensen",huang:"jensen","jensen-huang":"jensen",nvidia:"jensen","jen-hsun":"jensen",etl:"jensen",黃仁勳:"jensen",黄仁勋:"jensen",gooaye:"gooaye",股癌:"gooaye",menu:"menu",all:"menu",index:"menu","":"menu"};let mt="menu",st=null;function ft(t){if(t==null||t==="")return"menu";const e=String(t).trim(),o=e.toLowerCase();return $e[o]?$e[o]:$e[e]?$e[e]:ht.some(n=>n.id===o)?o:"menu"}function wi(){return`
    <article class="pc-card pc-card-featured" id="podcast-godzilla" data-podcast="godzilla">
      <header class="pc-card-head">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-featured">${s(a("podcastsFeatured"))}</span>
          <span class="pc-card-badge pc-badge-us">${s(a("godzillaUsFocus"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${s(a("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${s(a("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${s(a("godzillaTitle"))}</h3>
        <p class="pc-card-handle">${s(a("podcastsGodzillaHandle"))}</p>
        <p class="pc-card-blurb">${s(a("godzillaLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="gz-disclaimer" role="note">${s(a("godzillaDisclaimer"))}</p>
        <div id="gz-root" class="gz-root"></div>
      </div>
    </article>`}function Pi(){return`
    <article class="pc-card pc-card-featured pc-card-jensen" id="podcast-jensen" data-podcast="jensen">
      <header class="pc-card-head pc-card-head-jensen">
        <div class="pc-card-identity">
          <span class="pc-card-badge pc-badge-featured">${s(a("podcastsFeatured"))}</span>
          <span class="pc-card-badge pc-badge-us">${s(a("jensenUsFocus"))}</span>
          <span class="pc-card-badge pc-badge-candidate">${s(a("godzillaBadgeCandidate"))}</span>
          <span class="pc-card-badge pc-badge-watch">${s(a("godzillaBadgeWatch"))}</span>
        </div>
        <h3 class="pc-card-title">${s(a("jensenTitle"))}</h3>
        <p class="pc-card-handle">${s(a("jensenHandle"))}</p>
        <p class="pc-card-blurb">${s(a("jensenLead"))}</p>
      </header>
      <div class="pc-card-body">
        <p class="jh-disclaimer" role="note">${s(a("jensenDisclaimer"))}</p>
        <div id="jh-root" class="jh-root"></div>
      </div>
    </article>`}function Ci(){return ht.map(t=>{const e=t.market==="TW"?"pc-badge-tw":"pc-badge-us",o=t.featured?`<span class="pc-card-badge pc-badge-featured">${s(a("podcastsFeatured"))}</span>`:t.id==="gooaye"?`<span class="pc-card-badge pc-badge-library">${s(a("gooayeLibraryBadge"))}</span>`:`<span class="pc-card-badge pc-badge-stub">${s(a("podcastsStubBadge"))}</span>`,n=t.handleKey?`<p class="pc-menu-handle">${s(a(t.handleKey))}</p>`:"";return`
      <button type="button" class="pc-menu-card" data-pc-cat="${s(t.id)}" aria-label="${s(a(t.titleKey))}">
        <div class="pc-menu-badges">
          ${o}
          <span class="pc-card-badge ${e}">${s(a(t.marketKey))}</span>
          <span class="pc-card-badge pc-badge-candidate">${s(a("godzillaBadgeCandidate"))}</span>
        </div>
        <h3 class="pc-menu-title">${s(a(t.titleKey))}</h3>
        ${n}
        <p class="pc-menu-blurb">${s(a(t.blurbKey))}</p>
        <span class="pc-menu-cta">${s(a("podcastsOpenCategory"))}</span>
      </button>`}).join("")}function Li(t){return[{id:"menu",label:a("podcastsCatMenu")},...ht.map(o=>({id:o.id,label:a(o.titleKey)}))].map(o=>`<button type="button" class="pc-tab${o.id===t?" is-active":""}" data-pc-cat="${s(o.id)}" role="tab" aria-selected="${o.id===t}">${s(o.label)}</button>`).join("")}function Ai(t){return t==="godzilla"?wi():t==="jensen"?Pi():t==="gooaye"?$i():`
    <div class="pc-menu" role="list" aria-label="${s(a("podcastsCatMenu"))}">
      <p class="pc-menu-lead">${s(a("podcastsMenuLead"))}</p>
      <div class="pc-menu-grid">${Ci()}</div>
    </div>`}function Ei(t){return!t||t==="menu"?"#podcasts":`#podcasts/${t}`}function xi(t){const e=Ei(t);location.hash!==e&&history.replaceState(null,"",e)}function yt(t,e,{syncUrl:o=!0}={}){const n=ft(e);mt=n,o&&xi(n),t.innerHTML=`
    <div class="pc-tabs-wrap">
      <div class="pc-tabs" role="tablist" aria-label="${s(a("podcastsCategories"))}">
        ${Li(n)}
      </div>
    </div>
    <div class="pc-panel" role="tabpanel" data-pc-panel="${s(n)}">
      ${Ai(n)}
    </div>`,t.querySelectorAll("[data-pc-cat]").forEach(i=>{i.addEventListener("click",()=>{yt(t,i.dataset.pcCat,{syncUrl:!0})})}),n==="godzilla"&&ni("#gz-root"),n==="jensen"&&hi("#jh-root"),n==="gooaye"&&Ti("#gy-root")}function Mi(){return`
    <section class="section podcasts-section" aria-label="${s(a("podcastsTitle"))}">
      <header class="view-header">
        <h2 class="view-title">${s(a("podcastsTitle"))}</h2>
        <p class="view-lead">${s(a("podcastsLead"))}</p>
      </header>
      <p class="pc-disclaimer" role="note">${s(a("podcastsDisclaimer"))}</p>
      <div id="pc-root" class="pc-root"></div>
    </section>`}function Ri(t,{syncUrl:e=!0}={}){return st?(yt(st,t,{syncUrl:e}),{ok:!0,category:mt}):{ok:!1,reason:"missing-root"}}function zi(t="#pc-root",e={}){const n=(typeof t=="string"?document.querySelector(t):t)||document.querySelector("#pc-root");if(!n)return{ok:!1,reason:"missing-root"};st=n;const i=ft(e.category??"menu");return yt(n,i,{syncUrl:e.syncUrl!==!1}),{ok:!0,category:mt}}const Bi="./data/latest.json";function H(t){return t==null||Number.isNaN(t)?"flat":t>0?"up":t<0?"down":"flat"}function N(t,e=2){return t==null||Number.isNaN(t)?"—":`${t>0?"+":""}${t.toFixed(e)}%`}function _(t,e=2){return t==null||Number.isNaN(t)?"—":Number(t).toLocaleString(R(),{minimumFractionDigits:e,maximumFractionDigits:e})}function ue(t,e){if(t==null||Number.isNaN(t))return"—";const o=e==="TWD"&&t>=100?0:2;return`${e==="USD"?"$":e==="TWD"?"NT$":""}${_(t,o)}`}function Di(t){try{return new Date(t).toLocaleString(R(),{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+a("taipei")}catch{return t}}function vt(t){const e=t.aboveSma20?`<span class="badge sma-on">${h("sma20","SMA20")}↑</span>`:`<span class="badge sma-off">${h("sma20","SMA20")}↓</span>`,o=t.aboveSma50?`<span class="badge sma-on">${h("sma50","SMA50")}↑</span>`:`<span class="badge sma-off">${h("sma50","SMA50")}↓</span>`;return e+o}function kt(t){return t!=null&&t.length?t.map(e=>{const o=String(e);return o==="A"?`<span class="badge screen">${h("screenA","A")}</span>`:o==="B"?`<span class="badge screen">${h("screenB","B")}</span>`:o==="C"?`<span class="badge screen">${h("screenC","C")}</span>`:o==="observe"?`<span class="badge screen">${s(a("observe"))}</span>`:`<span class="badge screen">${s(o)}</span>`}).join(""):""}function Ni(t){var i,l,r,c,p;const e=[],o=(d,m,g)=>{if(!g)return;const y=g.incomplete,k=g.value!=null?_(g.value,2):y?s(a("dataIncomplete")):"—",b=g.dayPct!=null?`<div class="pct ${H(g.dayPct)}">${N(g.dayPct)}</div>`:"",C=g.session==="intraday"?` · ${h("intraday",a("intraday"))}`:"";e.push(`
      <div class="index-chip ${y?"incomplete":""}">
        <div class="label">${m}${C}</div>
        <div class="value">${k}</div>
        ${b}
      </div>
    `)};if(o("tw",h("taiex",((i=t.tw)==null?void 0:i.name)||a("taiex")),t.tw),o("otc",h("otc",((l=t.otc)==null?void 0:l.name)||a("otc")),t.otc),o("spx",h("spx",((r=t.spx)==null?void 0:r.name)||a("spx")),t.spx),o("nasdaq",h("nasdaq",((c=t.nasdaq)==null?void 0:c.name)||a("nasdaq")),t.nasdaq),o("sox",h("sox",((p=t.sox)==null?void 0:p.name)||a("sox")),t.sox),t.usdTwd){const d=t.usdTwd,m=d.taipeiClose??d.yahoo;e.push(`
      <div class="index-chip">
        <div class="label">${h("usdtwd",a("usdtwd"))}</div>
        <div class="value">${_(m,3)}</div>
        <div class="pct flat" style="font-size:0.7rem">
          ${s(a("taipeiClose"))} ${d.taipeiClose!=null?_(d.taipeiClose,3):"—"}
          · Yahoo ${d.yahoo!=null?_(d.yahoo,3):"—"}
        </div>
      </div>
    `)}return e.length?`
    <div class="index-strip index-strip--marquee">
      <div class="index-marquee" tabindex="0">
        <div class="index-marquee-track">
          ${`<div class="index-marquee-group">${e.join("")}</div>`}
          <div class="index-marquee-group index-marquee-group--clone" aria-hidden="true">${e.join("")}</div>
        </div>
      </div>
    </div>`:'<div class="index-strip index-strip--marquee"></div>'}function ji(t,e){const o=t.market==="TW"?h("twStock",a("twStock")):t.market==="US"?h("usStock",a("usStock")):s(t.market||""),n=t.rsVsIndexPp!=null?`<div class="metric"><div class="m-label">${h("rs","RS")}</div><div class="m-val ${H(t.rsVsIndexPp)}">${N(t.rsVsIndexPp)}</div></div>`:t.priorClosePct!=null?`<div class="metric"><div class="m-label">${h("priorClose",a("priorCloseFull"))}</div><div class="m-val ${H(t.priorClosePct)}">${N(t.priorClosePct)}</div></div>`:`<div class="metric"><div class="m-label">${h("rs","RS")}</div><div class="m-val">—</div></div>`;return`
    <article class="pick-card">
      <div class="rank">TOP ${e}</div>
      <div class="head">
        <div class="ticker-block">
          <div class="ticker">${s(t.ticker)}</div>
          <div class="name">${s(t.name||"")}</div>
        </div>
        <div class="price-block">
          <div class="price">${ue(t.price,t.currency)}</div>
          <div class="day-pct ${H(t.dayPct)}">${N(t.dayPct)}</div>
        </div>
      </div>
      <div class="flags">
        <span class="badge market">${o}</span>
        ${kt(t.screens)}
        ${vt(t)}
      </div>
      <div class="metrics">
        ${n}
        <div class="metric"><div class="m-label">${h("pct5d",a("pct5d"))}</div><div class="m-val ${H(t.pct5d)}">${N(t.pct5d)}</div></div>
        <div class="metric"><div class="m-label">${h("pct1m",a("pct1m"))}</div><div class="m-val ${H(t.pct1m)}">${N(t.pct1m)}</div></div>
        <div class="metric"><div class="m-label">${h("volRatio",a("volRatio"))}</div><div class="m-val">${t.volRatio!=null?_(t.volRatio,2)+"×":"—"}</div></div>
      </div>
      ${t.business||t.why||t.risk?`<details class="fold-block card-fold"><summary>${s(a("details"))}</summary>
        ${t.business?`<p class="card-text"><strong>${s(a("business"))}</strong>　${s(t.business)}</p>`:""}
        ${t.why?`<p class="card-text"><strong>${s(a("reason"))}</strong>　${s(t.why)}</p>`:""}
        ${t.risk?`<p class="card-text risk"><strong>${s(a("risk"))}</strong>　${ya(t.risk)}</p>`:""}
      </details>`:""}
    </article>
  `}function ya(t){let e=s(t);return e=e.replace(/漲停/g,h("limitUp",a("limitUp"))),e=e.replace(/動能/g,h("momentum",a("momentum"))),e}function Ut(t){return t.map(e=>{const o=e.rsVsIndexPp??e.priorClosePct,n=e.rsVsIndexPp!=null?N(e.rsVsIndexPp):e.priorClosePct!=null?N(e.priorClosePct):"—";return`
      <tr>
        <td><span class="ticker">${s(e.ticker)}</span></td>
        <td class="name-cell">${s(e.name||"")}</td>
        <td class="num">${ue(e.price,e.currency)}</td>
        <td class="num ${H(e.dayPct)}">${N(e.dayPct)}</td>
        <td class="num ${H(o)}">${n}</td>
        <td class="num ${H(e.pct5d)}">${N(e.pct5d)}</td>
        <td class="num ${H(e.pct1m)}">${N(e.pct1m)}</td>
        <td class="num">${e.volRatio!=null?_(e.volRatio,2)+"×":"—"}</td>
        <td>${vt(e)}</td>
        <td>${kt(e.screens)}</td>
        <td class="why-cell">${s(e.why||"")}</td>
      </tr>`}).join("")}function Wt(t){return t.map(e=>{const o=e.rsVsIndexPp!=null?`<span class="${H(e.rsVsIndexPp)}">${h("rs","RS")} ${N(e.rsVsIndexPp)}</span>`:e.priorClosePct!=null?`<span class="${H(e.priorClosePct)}">${h("priorClose",a("priorClose"))} ${N(e.priorClosePct)}</span>`:"";return`
      <div class="list-card">
        <div class="lc-head">
          <div>
            <span class="ticker" style="font-family:var(--mono);font-weight:600">${s(e.ticker)}</span>
            <span style="color:var(--text-muted);font-size:0.85rem;margin-left:0.35rem">${s(e.name||"")}</span>
          </div>
          <div style="text-align:right">
            <div style="font-family:var(--mono)">${ue(e.price,e.currency)}</div>
            <div class="${H(e.dayPct)}" style="font-family:var(--mono);font-weight:600">${N(e.dayPct)}</div>
          </div>
        </div>
        <div class="lc-metrics">
          ${o}
          <span class="${H(e.pct5d)}">${h("pct5d","5d")} ${N(e.pct5d)}</span>
          <span class="${H(e.pct1m)}">${h("pct1m","1m")} ${N(e.pct1m)}</span>
          <span>${h("volRatio",a("volRatio"))} ${e.volRatio!=null?_(e.volRatio,2)+"×":"—"}</span>
        </div>
        <div class="flags" style="margin-bottom:0.4rem">${vt(e)}${kt(e.screens)}</div>
        ${e.why?`<p class="lc-why">${s(e.why)}</p>`:""}
        ${e.risk&&e.risk!=="—"?`<p class="lc-why" style="color:#fbbf24">${s(a("risk"))}：${ya(e.risk)}</p>`:""}
      </div>`}).join("")}function Hi(){return`
    <tr>
      <th>${h("ticker",a("ticker"))}</th>
      <th>${s(a("name"))}</th>
      <th>${s(a("price"))}</th>
      <th>${h("dayPct",a("dayPct"))}</th>
      <th>${h("rs","RS")}／${h("priorClose",a("priorClose"))}</th>
      <th>${h("pct5d",a("pct5d"))}</th>
      <th>${h("pct1m",a("pct1m"))}</th>
      <th>${h("volRatio",a("volRatio"))}</th>
      <th>${s(a("ma"))}</th>
      <th>${h("screening",a("screening"))}</th>
      <th>${s(a("reason"))}</th>
    </tr>`}function Oi(t){if(!t)return"";const e=t.premiumPct;return`
    <section class="section">
      <h2 class="section-title">${h("adr","ADR")} ${h("parity",a("parity"))}｜TSM vs 2330</h2>
      <div class="parity-block">
        <div class="parity-side">
          <div class="p-label">${h("usStock",a("usStock"))} ${h("adr","ADR")}</div>
          <div class="p-ticker">TSM</div>
          <div class="p-price">${ue(t.tsm,"USD")}</div>
        </div>
        <div class="parity-mid">
          <div class="row"><span>${h("adsRatio",a("adsRatio"))}</span>　<strong>${s(t.adsRatio||"—")}</strong></div>
          <div class="row"><span>${h("parity",a("implied"))}</span>　<strong>${t.impliedUsdTaipeiFx!=null?_(t.impliedUsdTaipeiFx,2):"—"}</strong></div>
          <div class="row"><span>${h("premium",a("premium"))}</span>　<strong class="${H(e)}">${N(e)}</strong></div>
        </div>
        <div class="parity-side">
          <div class="p-label">${h("twStock",a("twStock"))}</div>
          <div class="p-ticker">2330.TW</div>
          <div class="p-price">${ue(t.tw2330,"TWD")}</div>
        </div>
        ${t.note?`<p class="parity-note">${s(t.note)}</p>`:""}
      </div>
    </section>
  `}function _t(t){return t?t.market==="TW"||t.market==="US"?t.market:String(t.ticker||"").toUpperCase().endsWith(".TW")?"TW":"US":"US"}function Vt(t,e){return t.length?`<div class="top5-grid">${t.map((o,n)=>ji(o,n+1)).join("")}</div>`:`<div class="empty-state">${s(a("emptyTop",{market:e}))}</div>`}function va(){return[{id:"today",label:a("navToday"),hash:"today"},{id:"logic",label:a("navLogic"),hash:"logic"},{id:"research",label:a("navResearch"),hash:"research"},{id:"strategies",label:a("navStrategies"),hash:"strategies"},{id:"options",label:a("navOptions"),hash:"options"},{id:"earnings",label:a("navEarnings"),hash:"earnings"},{id:"lookup",label:a("navLookup"),hash:"lookup"},{id:"soxl",label:a("navSoxl"),hash:"soxl"},{id:"podcasts",label:a("navPodcasts"),hash:"podcasts"},{id:"paper",label:a("navPaper"),hash:"paper"}]}const Fi=["today","strategies","paper","research"],ka=["logic","options","earnings","lookup","soxl","podcasts"],ot={today:"today",logic:"logic",research:"research",strategies:"strategies",options:"options",earnings:"earnings",lookup:"lookup",quote:"lookup",soxl:"soxl",podcasts:"podcasts",podcast:"podcasts",名人podcast:"podcasts","celebrity-podcasts":"podcasts",godzilla:"podcasts",jensen:"podcasts",huang:"podcasts","jensen-huang":"podcasts",黃仁勳:"podcasts",nvidia:"podcasts",paper:"paper",social:"today",danmaku:"today","social-digest":"today",giscus:"today",help:"logic",glossary:"logic",bookshelf:"research",library:"research",研究:"research","us-options":"options",選擇權:"options",美股選擇權:"options",mcmillan:"options",讀財報:"earnings",reports:"earnings","us-earnings":"earnings",財報:"earnings",查股:"lookup",個股:"lookup","stock-lookup":"lookup","us-quote":"lookup","tw-quote":"lookup","soxl-desk":"soxl",semiconductor:"soxl",半導體:"soxl",三倍半導體:"soxl",哥吉拉:"podcasts",哥吉拉心法:"podcasts","godzilla-playbook":"podcasts",playbook:"podcasts",黃仁勳:"podcasts","jen-hsun":"podcasts",etl:"podcasts",method:"logic",邏輯:"logic"},it={today:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zm-2-5H7v2h10V5z"/></svg>',logic:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 2h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v5h-2v-5z"/></svg>',research:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8V12zm0 3.5h8V17H8v-1.5zm0 3.5h5V20.5H8V19z"/></svg>',strategies:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2zm2.5-3.5 4-4 3 3L21 6.5 19.5 5l-6 7.5-3-3L4 14.5l2.5 1z"/></svg>',options:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 12a8 8 0 1 1 16 0H4zm8-6a6 6 0 0 0-5.65 4h11.3A6 6 0 0 0 12 6zm0 12a6 6 0 0 0 5.65-4H6.35A6 6 0 0 0 12 18z"/></svg>',earnings:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h6v-2H7z"/></svg>',lookup:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10 3a7 7 0 0 1 5.47 11.34l4.1 4.09-1.42 1.42-4.09-4.1A7 7 0 1 1 10 3zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>',soxl:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 17.25 9.5 9l3.5 4.5L17 8l4 9.25H3zM5 19h14v2H5v-2z"/></svg>',podcasts:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 0 0-9 9v7a2 2 0 0 0 2 2h3v-8H7v-1a5 5 0 0 1 10 0v1h-1v8h3a2 2 0 0 0 2-2v-7a9 9 0 0 0-9-9zm-4 11v5H5v-5h3zm11 5h-3v-5h3v5zM12 7a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3z"/></svg>',paper:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.93V17h-2v-.07A8.01 8.01 0 0 1 5.07 13H7v-2H5.07A8.01 8.01 0 0 1 11 5.07V7h2V5.07A8.01 8.01 0 0 1 18.93 11H17v2h1.93A8.01 8.01 0 0 1 13 16.93z"/></svg>',more:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 10h4v4H5v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4z"/></svg>'},Te={godzilla:"godzilla","godzilla-playbook":"godzilla",playbook:"godzilla",哥吉拉:"godzilla",哥吉拉心法:"godzilla",jensen:"jensen",huang:"jensen","jensen-huang":"jensen",nvidia:"jensen","jen-hsun":"jensen",etl:"jensen",黃仁勳:"jensen",黄仁勋:"jensen",gooaye:"gooaye",股癌:"gooaye"};function He(){const o=(location.hash||"").replace(/^#/,"").split(/[/?&]/).filter(Boolean).map(p=>{try{return decodeURIComponent(p)}catch{return p}}),n=o[0]||"",i=n.toLowerCase();if(Te[i]||Te[n])return{view:"podcasts",sub:Te[i]||Te[n],parts:o.slice(1)};const l=ot[i]||ot[n]||"today",r=o.slice(1);let c=r[0]||null;if(l==="podcasts"&&c&&(c=ft(c)),l==="research"&&c){if(c.toLowerCase()==="shelf"&&r[1])return{view:l,sub:"menu",shelf:r[1],parts:r};c=dt(c)}return{view:l,sub:c,parts:r,shelf:null}}function qi(){return He().view}function Sa(t,e){const o=it[t.id]||"";return`
      <button type="button"
        class="nav-item"
        data-nav="${t.id}"
        data-variant="${e}"
        aria-label="${s(t.label)}"
        aria-current="false">
        <span class="nav-icon">${o}</span>
        <span class="nav-label">${s(t.label)}</span>
      </button>`}function Ii(t){return va().map(e=>Sa(e,t)).join("")}function Ui(){const t=Object.fromEntries(va().map(i=>[i.id,i])),e=Fi.map(i=>Sa(t[i],"mobile")).join(""),o=`
      <button type="button"
        class="nav-item nav-more-btn"
        data-nav-more
        data-variant="mobile"
        aria-label="${s(a("navMore"))}"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="nav-more-sheet"
        aria-current="false">
        <span class="nav-icon">${it.more}</span>
        <span class="nav-label">${s(a("navMore"))}</span>
      </button>`,n=ka.map(i=>{const l=t[i],r=it[i]||"";return`
        <button type="button"
          class="nav-more-item"
          data-nav="${l.id}"
          aria-label="${s(l.label)}"
          aria-current="false">
          <span class="nav-icon">${r}</span>
          <span class="nav-label">${s(l.label)}</span>
        </button>`}).join("");return`
    <nav class="nav-bottom" aria-label="${s(a("navMain"))}">
      ${e}
      ${o}
    </nav>
    <div id="nav-more-sheet" class="nav-more-sheet" hidden>
      <button type="button" class="nav-more-backdrop" data-more-close aria-label="${s(a("navMoreClose"))}"></button>
      <div class="nav-more-panel" role="dialog" aria-modal="true" aria-label="${s(a("navMore"))}">
        <div class="nav-more-grabber" aria-hidden="true"></div>
        <div class="nav-more-head">
          <h2 class="nav-more-title">${s(a("navMore"))}</h2>
          <button type="button" class="nav-more-close" data-more-close aria-label="${s(a("navMoreClose"))}">×</button>
        </div>
        <div class="nav-more-list">
          ${n}
        </div>
      </div>
    </div>`}function Wi(t,e){const o=t.top5||[],n=t.us||[],i=t.tw||[],l=s(a("disclaimer")),r=Hi();return`
    <header class="site-chrome">
      <div class="chrome-row">
        <div class="chrome-brand">
          <img class="brand-mark" src="/Just-Math-and-Luck/logo.png?v=3" width="40" height="40" alt="每日數學選股" decoding="async" />
          <div class="brand-text">
            <h1>${s(a("siteTitle"))}</h1>
            <p class="brand-meta">${s(a("dataAsOf"))} ${Di(t.asOf)}</p>
          </div>
        </div>
        <div class="chrome-actions">
          ${Ba()}
          <nav class="nav-desktop" aria-label="${s(a("navMain"))}">
            ${Ii("desktop")}
          </nav>
        </div>
      </div>
      <p class="disclaimer-line" role="note">${l}</p>
      <div class="market-strip-wrap" aria-label="${s(a("marketQuotes"))}">
        <span class="market-strip-label">${s(a("hot"))}</span>
        ${Ni(t.indices||{})}
      </div>
      ${Vo()}
    </header>

    <main class="view-host">
      <div class="view" id="view-today" data-view="today" hidden>
        <span id="today" class="view-anchor" tabindex="-1"></span>
        <header class="view-header view-header-tight">
          <h2 class="view-title">${s(a("todayPicks"))}</h2>
        </header>
        ${Ka(t.marketRegime)}
        <div class="tabs market-tabs" role="tablist" aria-label="${s(a("market"))}">
          <button type="button" class="tab-btn active" data-tab="us" role="tab" aria-selected="true">${h("usStock",a("usStock"))}（${n.length}）</button>
          <button type="button" class="tab-btn" data-tab="tw" role="tab" aria-selected="false">${h("twStock",a("twStock"))}（${i.length}）</button>
        </div>
        <div class="panel active" id="panel-us" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${s(a("usTop"))}</h2>
            ${Vt(o.filter(p=>_t(p)==="US"),a("usStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${s(a("usList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${r}</thead>
                <tbody>${Ut(n)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${Wt(n)}</div>
          </section>
        </div>
        <div class="panel" id="panel-tw" role="tabpanel">
          <section class="section">
            <h2 class="section-title">${s(a("twTop"))}</h2>
            ${Vt(o.filter(p=>_t(p)==="TW"),a("twStock"))}
          </section>
          <section class="section">
            <h2 class="section-title">${s(a("twList"))}</h2>
            <div class="table-wrap">
              <table class="stock-table">
                <thead>${r}</thead>
                <tbody>${Ut(i)}</tbody>
              </table>
            </div>
            <div class="mobile-list">${Wt(i)}</div>
          </section>
        </div>
        ${Oi(t.parity)}
      </div>
      <div class="view" id="view-logic" data-view="logic" hidden>
        <span id="logic" class="view-anchor" tabindex="-1"></span>
        ${Qa(t)}
      </div>

      <div class="view" id="view-research" data-view="research" hidden>
        <span id="research" class="view-anchor" tabindex="-1"></span>
        ${Cs()}
      </div>

      <div class="view" id="view-strategies" data-view="strategies" hidden>
        <span id="strategies" class="view-anchor" tabindex="-1"></span>
        ${ls()}
      </div>

      <div class="view" id="view-options" data-view="options" hidden>
        <span id="options" class="view-anchor" tabindex="-1"></span>
        ${Ks()}
      </div>

      <div class="view" id="view-earnings" data-view="earnings" hidden>
        <span id="earnings" class="view-anchor" tabindex="-1"></span>
        ${ao()}
      </div>

      <div class="view" id="view-lookup" data-view="lookup" hidden>
        <span id="lookup" class="view-anchor" tabindex="-1"></span>
        <span id="quote" class="view-anchor" tabindex="-1"></span>
        ${Eo()}
      </div>

      <div class="view" id="view-soxl" data-view="soxl" hidden>
        <span id="soxl" class="view-anchor" tabindex="-1"></span>
        ${Bo()}
      </div>

      <div class="view" id="view-podcasts" data-view="podcasts" hidden>
        <span id="podcasts" class="view-anchor" tabindex="-1"></span>
        <span id="godzilla" class="view-anchor" tabindex="-1"></span>
        <span id="jensen" class="view-anchor" tabindex="-1"></span>
        ${Mi()}
      </div>

      <div class="view" id="view-paper" data-view="paper" hidden>
        <span id="paper" class="view-anchor" tabindex="-1"></span>
        ${Ua(e)}
      </div>
    </main>

    ${Ui()}

    <p class="site-footer">${s(a("footer"))}</p>
  `}let le=null;function _i(){try{return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function Ee(t,e){const o=t.querySelector("#nav-more-sheet"),n=t.querySelector("[data-nav-more]");if(!o||!n)return;if(le&&(clearTimeout(le),le=null),e){o.hidden=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{o.hidden||o.classList.add("is-open")})}),n.setAttribute("aria-expanded","true"),document.body.classList.add("nav-more-open");return}const i=o.classList.contains("is-open")||!o.hidden;if(o.classList.remove("is-open"),n.setAttribute("aria-expanded","false"),document.body.classList.remove("nav-more-open"),!i||_i()){o.hidden=!0;return}le=setTimeout(()=>{o.hidden=!0,le=null},340)}function Vi(t,e){const o=ka.includes(e);t.querySelectorAll(".nav-item[data-nav]").forEach(i=>{const l=i.dataset.nav===e;i.classList.toggle("is-active",l),i.setAttribute("aria-current",l?"page":"false")});const n=t.querySelector("[data-nav-more]");n&&(n.classList.toggle("is-active",o),n.setAttribute("aria-current",o?"true":"false")),t.querySelectorAll(".nav-more-item").forEach(i=>{const l=i.dataset.nav===e;i.classList.toggle("is-active",l),i.setAttribute("aria-current",l?"page":"false")})}function ba(t,e,{updateHash:o=!0,scrollTop:n=!0}={}){const i=ot[e]||"today";if(t.querySelectorAll(".view").forEach(l=>{const r=l.dataset.view===i;l.hidden=!r,l.classList.toggle("is-active",r)}),Vi(t,i),Ee(t,!1),o){const l=`#${i}`;location.hash!==l&&history.replaceState(null,"",l)}return n&&window.scrollTo(0,0),i}let we=null,Pe=null;function Gi(t){const e=(l,r)=>ba(t,l,r);t.querySelectorAll(".nav-item[data-nav], .nav-more-item[data-nav]").forEach(l=>{l.addEventListener("click",()=>e(l.dataset.nav))}),t.querySelectorAll("[data-jump]").forEach(l=>{l.addEventListener("click",()=>e(l.dataset.jump))});const o=t.querySelector("[data-nav-more]");o&&o.addEventListener("click",()=>{const l=o.getAttribute("aria-expanded")==="true";Ee(t,!l)}),t.querySelectorAll("[data-more-close]").forEach(l=>{l.addEventListener("click",()=>Ee(t,!1))}),Pe&&window.removeEventListener("keydown",Pe),Pe=l=>{l.key==="Escape"&&Ee(t,!1)},window.addEventListener("keydown",Pe),we&&window.removeEventListener("hashchange",we),we=()=>{const l=He();e(l.view,{updateHash:!1}),Yi(l)},window.addEventListener("hashchange",we);const n=He(),i=!!(n.sub||n.shelf);return e(n.view,{updateHash:!i,scrollTop:!1}),{go:e}}function Yi(t){t&&(t.view==="podcasts"&&Ri(t.sub||"menu",{syncUrl:!1}),t.view==="research"&&Rs(t.sub||"menu",{syncUrl:!1,shelf:t.shelf||null}))}function Ki(t){const e=t.querySelector(".index-marquee");if(!e||e.dataset.marqueeBound==="1")return;e.dataset.marqueeBound="1";const o=()=>e.classList.add("is-paused"),n=()=>e.classList.remove("is-paused");e.addEventListener("pointerdown",o),e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("pointerleave",n),e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("touchend",n,{passive:!0}),e.addEventListener("touchcancel",n,{passive:!0})}function Xi(t){const e=t.querySelectorAll(".tab-btn");e.forEach(o=>{o.addEventListener("click",()=>{const n=o.dataset.tab;e.forEach(i=>{const l=i.dataset.tab===n;i.classList.toggle("active",l),i.setAttribute("aria-selected",l?"true":"false")}),t.querySelectorAll(".panel").forEach(i=>{i.classList.toggle("active",i.id===`panel-${n}`)})})})}let St=null,$a=null;async function Ta(t){const e=St,o=$a,n=qi();t.innerHTML=Wi(e,o),document.title=a("siteTitle"),Qt(),Gi(t),ba(t,n,{updateHash:!0,scrollTop:!1}),Xi(t),Ki(t),await Yo("#us-macro-strip"),Wa(t),Da(t),await ps("#xq-root");const i=He();await zs("#rl-root",void 0,{category:i.view==="research"&&i.sub||"menu",shelf:i.view==="research"?i.shelf:null,syncUrl:!1}),await Xs("#uo-root"),await so("#er-root"),xo("#lk-root"),await Do("#sx-root"),zi("#pc-root",{category:i.view==="podcasts"&&i.sub||"menu",syncUrl:!1})}async function Qi(){const t=document.getElementById("app");!t||!St||await Ta(t)}async function nt(){const t=document.getElementById("app");Qt();const e=document.getElementById("loading");e&&(e.textContent=a("loading"));try{const o=await fetch(Bi);if(!o.ok)throw new Error(`HTTP ${o.status}`);St=await o.json(),$a=await _a(),await Ta(t),nt._langHooked||(nt._langHooked=!0,La(()=>{Qi()}))}catch(o){t.innerHTML=`<div class="error">${s(a("loadError",{msg:o.message}))}</div>`}}function Zi(){if(!("serviceWorker"in navigator))return;const t="/Just-Math-and-Luck/",e=`${t}sw.js`;window.addEventListener("load",()=>{navigator.serviceWorker.register(e,{scope:t}).catch(()=>{})})}const Gt="jml-pwa-hint-dismissed";function Ji(){try{if(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)return!0}catch{}return!1}function en(){return/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")}function tn(){var i;if(Ji()||!en())return;try{if(localStorage.getItem(Gt)==="1")return}catch{return}if(document.getElementById("pwa-install-hint"))return;const t=document.createElement("div");t.id="pwa-install-hint",t.className="pwa-install-hint",t.setAttribute("role","status");const o=/iPhone|iPad|iPod/i.test(navigator.userAgent||"")?"可「分享 → 加入主畫面」離線開啟":"可加入主畫面，離線也能開";t.innerHTML=`<span class="pwa-install-hint__text">${o}</span><button type="button" class="pwa-install-hint__close" aria-label="關閉">×</button>`,document.body.appendChild(t);const n=()=>{t.remove();try{localStorage.setItem(Gt,"1")}catch{}};(i=t.querySelector(".pwa-install-hint__close"))==null||i.addEventListener("click",n),window.setTimeout(()=>{t.isConnected&&t.classList.add("pwa-install-hint--fade")},8e3),window.setTimeout(()=>{t.isConnected&&n()},12e3)}Zi();nt();window.setTimeout(()=>{try{tn()}catch{}},2500);
