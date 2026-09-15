# fetch-social browser fallback notes

Generated: 2026-09-15T17:59:04.324Z

Puppeteer/Playwright are **not** installed in this repo. Box IP hits Cloudflare 403 on Dcard and Reddit challenge/403.
Reddit falls back to arctic-shift.photon-reddit.com (real posts, ticker-filtered). Dcard still needs user-browser IP.
Parent agent can open these URLs via computerUse / user browser and paste real titles into social-digest if needed.

## Hard routing
- US → Reddit + Futu only
- TW → PTT + Dcard + Threads only

## Dcard (TW) — computerUse-friendly search URLs
### 2468.TW
- https://www.dcard.tw/search?query=2468
- https://www.dcard.tw/search?query=%E8%8F%AF%E7%B6%93
- blocker: Dcard search q=2468: HTTP 403 — Cloudflare／反爬阻擋匿名 API（本環境）

### 6226.TW
- https://www.dcard.tw/search?query=6226
- https://www.dcard.tw/search?query=%E5%85%89%E9%BC%8E
- blocker: Dcard search q=6226: HTTP 403 — Cloudflare／反爬阻擋匿名 API（本環境）

### 2308.TW
- https://www.dcard.tw/search?query=2308
- https://www.dcard.tw/search?query=%E5%8F%B0%E9%81%94%E9%9B%BB
- blocker: Dcard search q=2308: HTTP 403 — Cloudflare／反爬阻擋匿名 API（本環境）

## Reddit (US) — if box still blocked, open on user IP
## Threads
- No stable public search API; site shows honest blocker only.

