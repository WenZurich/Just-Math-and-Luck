# 每日數學選股

美股＋台股依動能／相對強度／均線／量比的數學篩選儀表板，並附紙上模擬交易成績與社交參考。

**網站：** https://WenZurich.github.io/Just-Math-and-Luck-/

> 內容為公開行情篩選候選與紙上模擬，**不是投資建議**，亦非真實券商成交，不保證獲利。  
> 社交摘要／站內聊天僅供討論氛圍參考。

## 更新資料

1. 更新 `public/data/latest.json`
2. 執行 `npm run paper`（依最新名單套用買賣規則，寫入 `public/data/paper-portfolio.json`）
3. 執行 `npm run fetch-social`（產生 `public/data/social-digest.json`；Reddit 可能 403，會誠實寫 blocker）
4. 本地 `npm run build`，把 `dist/` 內容覆寫到 `docs/`
5. 推到 `main`（目前以 `docs/` 做 GitHub Pages）

來源碼在 `src/`；每日選股 bot 也可直接覆寫 `docs/data/latest.json` 後再跑 `npm run paper`。

## 紙上模擬（`npm run paper`）

兩本帳分開、不做匯率混算：

- 台股本金 NT$3,000,000
- 美股本金 US$100,000

買：當日 `us[]`／`tw[]`（純觀察不買），先 Top5 再其餘。風險 1% 權益、停距 1.5%（量比≥3 用 2.5%）、單一股票最多 8%。台股買得起 1 張（1000 股）才買。

賣：停損 −3%；停利 +12% 賣一半；未站上 SMA20 且當日跌 >2% 全賣；不在名單且虧損全賣；漲停風格隔日跌 ≥5% 全賣。

同一份 `latest.json` 的 `asOf` 不會重複下單。第一天種子日為 2026-09-15。

## 社交／聊天

| 功能 | 狀態 | 需要什麼 |
|------|------|----------|
| 網友參考（PTT／Dcard／Threads／Reddit／富途） | ✅ 靜態 `social-digest.json` | `npm run fetch-social`；抓不到寫 blocker |
| 匿名彈幕／個股「本站留言」 | UI ✅；寫入需 key | **Supabase** `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` + `supabase-schema.sql` |
| 全站討論（Giscus） | ✅ 備援 | GitHub 登入（**不能**取代匿名主路徑） |

個股卡片討論區有分頁：`本站留言`｜`PTT`｜`Dcard`｜`Threads`｜`Reddit`｜`富途`。

### 啟用匿名發言（必要）

見 `PARENT-SUPABASE-KEYS.md`。未接上時表單停用並顯示「聊天後端尚未接上」，**不會**假裝送出。

### Giscus（備援）

Discussions 已開；`src/config.js` 內含 `repoId`／`categoryId`（General）。

### 社交摘要注意

- **不捏造**任何來源留言；403／登入牆寫入 `blocker`
- 富途評論多需登入；公開新聞放 `newsRelated` 並標明非社群評論
