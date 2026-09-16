# 每日數學選股

美股＋台股依動能／相對強度／均線／量比的數學篩選儀表板，並附紙上模擬交易成績與社交參考。

**網站：** https://WenZurich.github.io/Just-Math-and-Luck-/

> 投資涉及風險，資訊僅供參考，**非投資建議**。內容為公開行情篩選與紙上模擬，非真實券商成交。  
> 社交摘要／站內討論僅供參考。

## 更新資料

1. 更新 `public/data/latest.json`（含 `marketRegime.us`／`marketRegime.tw`；`npm`/`node scripts/daily-scan.mjs`）
2. 執行 `npm run strategies`（產生 `public/data/strategy-screener.json` 策略選股；均線多頭等由 OHLCV 實算，缺資料策略會標「資料不足」）
3. 執行 `npm run paper`（依最新名單套用買賣規則，寫入 `public/data/paper-portfolio.json`）
4. 執行 `npm run fetch-social`（產生 `public/data/social-digest.json`；Reddit.com 403 時改走 arctic-shift 備援；Dcard 403 寫誠實 blocker）
5. （可選）`npm run fetch-us-options`（美股選擇權快照）
6. 本地 `npm run build`，把 `dist/` 內容覆寫到 `docs/`
7. 推到 `main`（目前以 `docs/` 做 GitHub Pages）

來源碼在 `src/`；每日選股 bot 也可直接覆寫 `docs/data/latest.json` 後再跑 `npm run paper`。

## 紙上模擬（`npm run paper`）

兩本帳分開、不做匯率混算：

- 台股本金 NT$3,000,000
- 美股本金 US$100,000

買：當日 `us[]`／`tw[]`（純觀察不買），先 Top5 再其餘。風險 1% 權益、停距 1.5%（量比≥3 用 2.5%）、單一股票最多 8%。台股買得起 1 張（1000 股）才買。

賣：停損 −3%；停利 +12% 賣一半；未站上 SMA20 且當日跌 >2% 全賣；不在名單且虧損全賣；漲停風格隔日跌 ≥5% 全賣。

同一份 `latest.json` 的 `asOf` 不會重複下單。帳本自 **2026-09-15** 起**累計滾存**（非每日重置）；訊號以名單價格**立即記入**（買了就當作買了）。

## 社交／聊天

社群頁為 **主流聊天室 UX**（氣泡＋底部輸入列）：美股／台股分開房間，大廳或個股子房；彈幕為選用（預設關）。實作見 `src/chat.js` + `src/chat.css`。

| 功能 | 狀態 | 需要什麼 |
|------|------|----------|
| 網友參考（美：Reddit／富途；台：PTT／Dcard／Threads） | ✅ 靜態 `social-digest.json` | `npm run fetch-social`；抓不到寫 blocker |
| 匿名聊天室／個股留言 | UI ✅；寫入需 key | **Supabase** `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` + `supabase-schema.sql` |
| 彈幕效果 | 選用（預設關） | 同上；在聊天室選單開啟 |
| 全站討論（Giscus） | ✅ 備援 | GitHub 登入（**不能**取代匿名主路徑） |

個股卡片討論區依市場分頁：

- **美股**：`本站留言`｜`Reddit`｜`富途`
- **台股**：`本站留言`｜`PTT`｜`Dcard`｜`Threads`

不會顯示跨市場空白分頁。

### 啟用匿名發言（必要）

見 `PARENT-SUPABASE-KEYS.md`。未接上時表單停用並顯示「聊天後端尚未接上」，**不會**顯示為已送出。

### Giscus（備援）

Discussions 已開；`src/config.js` 內含 `repoId`／`categoryId`（General）。

### 社交摘要注意

- **不捏造**任何來源留言；403／登入牆寫入 `blocker`
- **路由**：美股只查 Reddit＋富途；台股只查 PTT＋Dcard＋Threads
- 富途留言多需登入；公開新聞放 `newsRelated`，UI 標為「新聞／討論線索（非留言）」
- Reddit.com 被擋時自動改用 arctic-shift（真實貼文）；Dcard 仍可能需使用者瀏覽器 IP，見 `scripts/fetch-social-browser-notes.md`


## 研究書庫（`#research`）

持續累積美／台股市相關**書單＋論文**：標題 → 摘要 → 可程式化公式 → 是否納入策略候選。

- 資料：`public/data/research-library.json`（build／Pages 同步到 `docs/data/`）
- 更新 stub：`node scripts/update-research-library.mjs`（平日例行；摘要須自寫，禁止貼著作權原文）
- **正式納入策略需數學閘門通過（目前未過）**— UI 僅標 candidate／watch／deferred


## 美股選擇權（`#options`）

McMillan《選擇權策略完全手冊》增訂第五版（`book-mcmillan-options-handbook`）策略族教育＋公開 Yahoo 期權鏈／輕量財報檢核。

- 資料：`npm run fetch-us-options` → `public/data/us-options-snapshot.json`
- 僅美股；缺欄標 **資料不足**；**非投資建議；選擇權風險高**
- UI 不顯示原始希臘字母公式；小詞典用白話
- 可選：`daily-scan` 寫完 `latest.json` 後手動再跑 fetch

## 策略選股（`npm run strategies`）

XQ 風格「策略選股（邏輯條件）」：分類切換（精選／價量／籌碼／財務／大師）、明示條件、命中數與計算欄位。

| 策略 | 狀態 |
|------|------|
| 均線多頭排列 | ✅ 台股 OHLCV；標示 `ohlcvBarDate`（不誤稱今日） |
| 超短線作多 | ✅ 台股：價>10、5日均量>300張、RSI<50拐頭、振幅>3%；融資／融券標略過 |
| 法人同步做多 | ✅ XQ 張門檻：1d 各>100；5d 外資>500／投信>300／自營>300（僅台股） |
| 彼得林區 | ✅ PE<20＋近2年營收成長均>25%＋近5年稅前成長均>5%＋負債比<30%（缺欄略過） |
| 公司獲利遞增 | ✅ 連續2季 YoY（對去年同季）營益／毛利率成長>10%；單季拆解 |
| 班哲明格拉罕／華倫巴菲特 | ✅ 公開 PE／P/B／ROE／營益率／負債比（ratio 單位已核對） |
| 麥克普萊斯 | ✅ P/B＋董監持股＋負債比（證交所 openapi） |
| 科斯托拉尼／週期 | ✅ 美／台 marketRegime（相位／姿態／流動性）＋命中；見 `scripts/study/bookshelf-framework-2026-09-16` |
| 馬克米納維尼 | ✅ Minervini（已合併原重複「麥克喜偉」）：PE／ROE／連3年營收／負債比 |
| 肯尼斯費雪 | ✅ 5年營收／稅前成長均＋負債比（MOPS 年報） |
| 麥克墨非 | ✅ ROE＋營益率（季／年）＋營收成長（MOPS） |
| 詹姆士歐沙那希 | ✅ EPS連季成長＋PE／ROE（MOPS 季報拆單季） |

輸出：`public/data/strategy-screener.json`（build 後進 `docs/data/`）。**不宣稱**與 XQ 專有籌碼庫一致。

## Gooaye（股癌）研究包

- 框架筆記：`scripts/study/gooaye-framework-2026-09-16.md`（原創可操作摘要；無逐字稿）
- 策略包（美／台分開、無自造分點籌碼）：`gooaye-tw-semicon-chain`、`gooaye-us-risk-on`、`gooaye-tw-vol-breakout`、`gooaye-us-fomo-filter`
- 研究書架：`podcast-gooaye`（type=podcast）
- 快速合併：`node scripts/merge-gooaye-packs.mjs`

