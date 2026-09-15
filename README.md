# 每日數學選股

美股＋台股依動能／相對強度／均線／量比的數學篩選儀表板，並附紙上模擬交易成績與社交參考。

**網站：** https://WenZurich.github.io/Just-Math-and-Luck-/

> 內容為公開行情篩選候選與紙上模擬，**不是投資建議**，亦非真實券商成交，不保證獲利。  
> 社交摘要／站內聊天僅供討論氛圍參考。

## 更新資料

1. 更新 `public/data/latest.json`
2. 執行 `npm run strategies`（產生 `public/data/strategy-screener.json` 策略選股；均線多頭等由 OHLCV 實算，缺資料策略會標「資料不足」）
3. 執行 `npm run paper`（依最新名單套用買賣規則，寫入 `public/data/paper-portfolio.json`）
4. 執行 `npm run fetch-social`（產生 `public/data/social-digest.json`；Reddit.com 403 時改走 arctic-shift 備援；Dcard 403 寫誠實 blocker）
5. 本地 `npm run build`，把 `dist/` 內容覆寫到 `docs/`
6. 推到 `main`（目前以 `docs/` 做 GitHub Pages）

來源碼在 `src/`；每日選股 bot 也可直接覆寫 `docs/data/latest.json` 後再跑 `npm run paper`。

## 紙上模擬（`npm run paper`）

兩本帳分開、不做匯率混算：

- 台股本金 NT$3,000,000
- 美股本金 US$100,000

買：當日 `us[]`／`tw[]`（純觀察不買），先 Top5 再其餘。風險 1% 權益、停距 1.5%（量比≥3 用 2.5%）、單一股票最多 8%。台股買得起 1 張（1000 股）才買。

賣：停損 −3%；停利 +12% 賣一半；未站上 SMA20 且當日跌 >2% 全賣；不在名單且虧損全賣；漲停風格隔日跌 ≥5% 全賣。

同一份 `latest.json` 的 `asOf` 不會重複下單。帳本自 **2026-09-15** 起**累計滾存**（非每日重置）；訊號以名單價格**立即記入**（買了就當作買了）。

## 社交／聊天

| 功能 | 狀態 | 需要什麼 |
|------|------|----------|
| 網友參考（美：Reddit／富途；台：PTT／Dcard／Threads） | ✅ 靜態 `social-digest.json` | `npm run fetch-social`；抓不到寫 blocker |
| 匿名彈幕／個股「本站留言」 | UI ✅；寫入需 key | **Supabase** `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` + `supabase-schema.sql` |
| 全站討論（Giscus） | ✅ 備援 | GitHub 登入（**不能**取代匿名主路徑） |

個股卡片討論區依市場分頁：

- **美股**：`本站留言`｜`Reddit`｜`富途`
- **台股**：`本站留言`｜`PTT`｜`Dcard`｜`Threads`

不會顯示跨市場空白分頁。

### 啟用匿名發言（必要）

見 `PARENT-SUPABASE-KEYS.md`。未接上時表單停用並顯示「聊天後端尚未接上」，**不會**假裝送出。

### Giscus（備援）

Discussions 已開；`src/config.js` 內含 `repoId`／`categoryId`（General）。

### 社交摘要注意

- **不捏造**任何來源留言；403／登入牆寫入 `blocker`
- **路由**：美股只查 Reddit＋富途；台股只查 PTT＋Dcard＋Threads
- 富途留言多需登入；公開新聞放 `newsRelated`，UI 標為「新聞／討論線索（非留言）」
- Reddit.com 被擋時自動改用 arctic-shift（真實貼文）；Dcard 仍可能需使用者瀏覽器 IP，見 `scripts/fetch-social-browser-notes.md`


## 策略選股（`npm run strategies`）

XQ 風格「策略選股（邏輯條件）」：分類切換（精選／價量／籌碼／財務／大師）、明示條件、命中數與計算欄位。

| 策略 | 狀態 |
|------|------|
| 均線多頭排列 | ✅ 全由 Yahoo OHLCV 計算 |
| 超短線作多 | ✅ 價量＋RSI＋振幅（融資融券略過） |
| 班哲明格拉罕／華倫巴菲特 | ✅ 公開 PE／P/B／ROE／負債比近似 |
| 麥克普萊斯 | ✅ P/B＋董監持股＋負債比（證交所 openapi） |
| 馬克約克奇 | ✅ Minervini 風格：PE／ROE／連3年營收成長／負債比（MOPS） |
| 肯尼斯費雪 | ✅ 5年營收／稅前成長均＋負債比（MOPS 年報） |
| 麥克墨非 | ✅ ROE＋營益率（季／年）＋營收成長（MOPS） |
| 詹姆士歐沙那希 | ✅ EPS連季成長＋PE／ROE（MOPS 季報拆單季） |
| 彼得林區區 | ✅ 證交所本益比＋價量；Yahoo 營收成長有值則要求 >0 |
| 法人同步做多 | ✅ 證交所／櫃買公開三大法人（非券商專有庫） |
| 公司獲利遞增 | ✅ MOPS 季報推算；連續 2 季 YoY/QoQ 毛利或營益率成長 >10% |

輸出：`public/data/strategy-screener.json`（build 後進 `docs/data/`）。**不宣稱**與 XQ 專有籌碼庫一致。
