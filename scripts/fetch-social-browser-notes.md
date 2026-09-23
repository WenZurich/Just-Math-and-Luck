# fetch-social browser fallback notes

Generated: 2026-09-23T00:23:10.049Z

Puppeteer/Playwright are **not** installed in this repo. Box IP hits Cloudflare 403 on Dcard and Reddit challenge/403.
Reddit falls back to arctic-shift.photon-reddit.com (real posts, ticker-filtered). Dcard still needs user-browser IP.
Parent agent can open these URLs via computerUse / user browser and paste real titles into social-digest if needed.

## Hard routing
- US → Reddit + Futu only
- TW → PTT + Dcard + Threads only

## Dcard (TW) — computerUse-friendly search URLs
### 3443.TW
- https://www.dcard.tw/search?query=3443
- https://www.dcard.tw/search?query=%E5%89%B5%E6%84%8F
- blocker: Dcard search q=3443: HTTP 403 — Cloudflare／反爬阻擋匿名 API（本環境）

### 3037.TW
- https://www.dcard.tw/search?query=3037
- https://www.dcard.tw/search?query=%E6%AC%A3%E8%88%88
- blocker: Dcard search q=3037: HTTP 403 — Cloudflare／反爬阻擋匿名 API（本環境）

### 3035.TW
- https://www.dcard.tw/search?query=3035
- https://www.dcard.tw/search?query=%E6%99%BA%E5%8E%9F
- blocker: Dcard search q=3035: HTTP 403 — Cloudflare／反爬阻擋匿名 API（本環境）

### 5274.TWO
- https://www.dcard.tw/search?query=5274.TWO
- blocker: Dcard search q=5274.TWO: HTTP 403 — Cloudflare／反爬阻擋匿名 API（本環境）

## Reddit (US) — if box still blocked, open on user IP
## Threads
- No stable public search API; site shows honest blocker only.

