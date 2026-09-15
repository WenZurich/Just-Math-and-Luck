# 每日數學選股

美股＋台股依動能／相對強度／均線／量比的數學篩選儀表板，並附紙上模擬交易成績。

**網站：** https://WenZurich.github.io/Just-Math-and-Luck-/

> 內容為公開行情篩選候選與紙上模擬，**不是投資建議**，亦非真實券商成交，不保證獲利。

## 更新資料

1. 更新 `public/data/latest.json`
2. 執行 `npm run paper`（依最新名單套用買賣規則，寫入 `public/data/paper-portfolio.json`）
3. 本地 `npm run build`，把 `dist/` 內容覆寫到 `docs/`
4. 推到 `main`（目前以 `docs/` 做 GitHub Pages）

來源碼在 `src/`；每日選股 bot 也可直接覆寫 `docs/data/latest.json` 後再跑 `npm run paper`。

## 紙上模擬（`npm run paper`）

兩本帳分開、不做匯率混算：

- 台股本金 NT$3,000,000
- 美股本金 US$100,000

買：當日 `us[]`／`tw[]`（純觀察不買），先 Top5 再其餘。風險 1% 權益、停距 1.5%（量比≥3 用 2.5%）、單一股票最多 8%。台股買得起 1 張（1000 股）才買。

賣：停損 −3%；停利 +12% 賣一半；未站上 SMA20 且當日跌 >2% 全賣；不在名單且虧損全賣；漲停風格隔日跌 ≥5% 全賣。

同一份 `latest.json` 的 `asOf` 不會重複下單。第一天種子日為 2026-09-15。
