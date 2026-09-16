# Gooaye 股癌 → Investable Framework (US + TW)

> **Date**: 2026-09-16 (Asia/Taipei)  
> **Source**: SoundOn RSS inventory (697 episodes) + show-note themes + public web summaries (OKAPI / third-party episode notes).  
> **Copyright**: **Original operational summaries only** — no verbatim podcast transcripts or copyrighted book passages.  
> **Companion JSON**: `gooaye-framework-2026-09-16.json`  
> **Listening honesty**: Full audio of 600+ episodes was **not** consumed end-to-end. Text sources + selective note sampling only (see §7).

---

## 0. Design principles

1. **Regime / risk first, ticker second** — position size and FOMO filters beat single-name tips.
2. **Only code Yahoo / TWSE-MOPS computable rules** — no branch chip, no invented 主力分點.
3. **US and TW dials stay separate** — linkage (TSM/2330, SOX↔台積供應鏈) is observation, not a blended mood score.
4. **Core–satellite hygiene** — mega-cap / index-like core vs satellite momentum; never “all-in one 護國神山 name.”
5. **Plain UI language** — conditions as human takeaways; formulas live only in this study file / JSON.

---

## 1) Operational rules (codable)

| ID | Theme (public) | Operational rule | Public feature | Default |
|----|----------------|------------------|----------------|---------|
| G1 | Core vs single-name (EP89-class theme) | Prefer **basket strength** over lone mega-cap hero: ≥N liquid chain names pass trend+volume | Curated mega-cap lists; SMA50/200; vol_ratio_20 | TW≥3 / US≥3 names |
| G2 | Risk control when hot (EP660/675 themes) | Near index highs → **raise volume bar**; demote thin melt-ups | Index DD from 252d high; stock vol_ratio_20; RS | If DD>−3%: require vol_ratio≥1.0 |
| G3 | Trim/rotate when book “gets fat” (EP670 theme) | After strong 1m run, keep only if still above SMA50 **and** not thin-volume rocket | pct1m, SMA50, vol_ratio_20 | pct1m≥15% ∧ vol_ratio<0.8 → exclude |
| G4 | Macro / Fed risk-on proxy (EP450/126/12 themes) | **US only**: falling/stable yields → allow risk-on tech screen; fast yield spike → defensive | ^TNX Δ20d | Δ≤0 → risk_on; Δ≥+0.25pp → risk_off |
| G5 | 護國神山 / semi chain strength | Curated **public** mega-cap semi & equipment names: trend + liquidity | Yahoo OHLCV on fixed ticker lists | close>SMA50 ∧ close>SMA20 ∧ avgVol ok |
| G6 | Retail FOMO / 紅K chase (EP153 theme) | Demote day rockets on thin volume after multi-day run | dayPct, pct5d, vol_ratio | dayPct≥7 ∧ vol_ratio<0.9 ∧ pct5d≥12 → exclude |
| G7 | Time-stop / reclaim gate (EP154 “2pm” metaphor) | After shock DD, wait for SMA20 reclaim before aggressive adds | prior 10d DD, close vs SMA20 | Same spirit as K6 |
| G8 | Hedge ≠ core (EP106 theme) | Volatility / inverse products never enter core hit lists | Universe filter | Discipline-only (no VIX ETN core) |
| G9 | Sector melt-up / don’t carsick (EP88 theme) | After sector spray, keep **volume-backed survivors**, not every peer | Sector list + vol_ratio | Require vol_ratio≥1.0 inside hot sector |
| G10 | US↔TW linkage, separate dials | Observe SOX / 2330 / TSM parity; **never** one blended dial | Existing parity + regimes | Markets filtered apart in UI |
| G11 | Volume breakout + institutional sync (TW) | Volume breakout pack is OHLCV-only; institutional sync remains existing TW pack when MOPS/TWSE feed works | vol_ratio, SMA; inst nets | Do **not** invent chip/branch |
| G12 | Leverage / liquidity discipline (public interviews) | Cap size_mult; skip illiquid names | avgVol5, size_mult from regime | TW avgVol≥300張 proxy; size_mult≤1.0 in hot regimes |

**Not coded**: sponsor ads, personal anecdotes, exact leverage ratios from third-party notes, any raw transcript quotes, 分點／券商籌碼 invention.

---

## 2) Strategy packs shipped on site

| Pack id | Market | Category | Status | What it screens |
|---------|--------|----------|--------|-----------------|
| `gooaye-tw-semicon-chain` | TW | 綜合 | candidate | Mega-cap semi chain trend+volume (G1/G5/G9) |
| `gooaye-us-risk-on` | US | 綜合 | candidate | US rate proxy + liquid mega-tech risk-on (G4/G5) |
| `gooaye-tw-vol-breakout` | TW | 技術 | adopted | TW volume breakout with FOMO demote (G2/G6/G11 OHLCV half) |
| `gooaye-us-fomo-filter` | US | 技術 | candidate | US quality momentum without thin FOMO (G2/G6) |

Calibration: honest Yahoo/TWSE proxies; **not** endorsed by 謝孟恭; not investment advice.

---

## 3) Sampled high-signal episodes (text)

See JSON `sampledEpisodes`. Notes mined from RSS descriptions (often sponsor-heavy); themes extracted, not transcribed.

---

## 4) Listening limitations

- **Could**: fetch full RSS (697 items EP1–EP697); keyword-mine titles/descriptions; read public web summaries; sample ~12–15 note-rich episodes in text.
- **Could not**: audio-listen ~500+ hours; obtain clean full transcripts for most episodes (show notes are ad-dominated); verify every spoken claim.

