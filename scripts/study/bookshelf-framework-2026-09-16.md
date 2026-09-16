# Bookshelf → Daily Math Stock-Picking Framework (US + TW)

> **Date**: 2026-09-16 (Asia/Taipei)  
> **Source**: User bookshelf photo synthesis — investable ideas only; **no** copyrighted book text.  
> **Audience**: Daily scan / cloud agent pipeline (Yahoo-computable features).  
> **Companion JSON**: `bookshelf-framework-2026-09-16.json`

---

## 0. Design principles

1. **Regime first, ticker second** — Marks-style “market temperature” + Kostolany egg phase set the day’s aggressiveness dial *before* any stock screen.
2. **Only code what public market data can approximate** — no scuttlebutt, no “everyone talking stocks” NLP required for v1 (optional later).
3. **FI / retirement titles = risk-discipline gates only** — they do not produce buy lists.
4. **US and TW are separate regimes** — score `^GSPC`/`^IXIC` and `^TWII` independently; never blend into one “world mood” for dials.

---

## 1) Per-author OPERATIONAL rules (codable)

### 1.1 André Kostolany (egg / psychology / money & rates)

Public knowledge of the **Kostolany Egg**: six psychological phases around a speculative cycle — roughly **depression → hope → optimism → euphoria → panic → despair/correction**, with **firm hands** accumulating near the trough and **shaky hands** holding near the peak. Volume marks transfer of paper between the two groups. Rates matter (often with a multi-month lag narrative).

| ID | Operational rule | Yahoo / public feature | Default threshold (tunable) |
|----|------------------|------------------------|-----------------------------|
| K1 | **Egg phase proxy** from index drawdown + breadth of participation (volume) + rate direction | Index DD from 252d high; index vol_ratio_20; ΔUS10Y 60d / ΔTW 2Y or policy proxy | See regime table §2 |
| K2 | **Firm-hands accumulation**: price weak/flat while volume elevated → prefer quality names, allow aggressive dial | Stock: `ret_21d < 0` AND `vol_ratio_20 ≥ 1.5` AND `close > SMA200` (survivors) | Score +firm_hands |
| K3 | **Shaky-hands distribution**: price strong + volume extreme after long run → defensive dial, tighten RS filters | Index `ret_63d` top quintile of own history AND `vol_ratio_20 ≥ 1.8` | Score +euphoria |
| K4 | **Rate-money lag**: falling yields → lean risk-on with lag; rising yields → lean risk-off | `ΔUS10Y_60d`, `ΔUS10Y_20d`; optional `^TNX` | See §2 |
| K5 | **Do not chase euphoria breakouts on thin conviction** | Stock RS vs index 21d > +8% AND vol_ratio_20 < 0.8 → demote | Demote / exclude from aggressive bucket |
| K6 | **Panic ≠ automatic buy**: require stabilization (close back above SMA20 after DD event) before size-up | Index or stock: prior 10d DD ≤ −8% then `close > SMA20` | Gate for aggressive adds |

**Not coded from Kostolany**: anecdotes, “madhouse” metaphors, specific stock tips from narrative books / 安納金實戰書 trade lists.

### 1.2 Howard Marks (*Mastering the Market Cycle* / 掌握市場週期)

Public Marks practice: **take the market’s temperature**; adjust **aggressiveness**, not “predict the top.” Bull-stage shorthand: (1) few see improvement → (2) most see it → (3) everyone thinks it lasts forever. Checklist themes: economy/credit/sentiment/prices/prospective returns/risk appetite.

| ID | Operational rule | Feature mapping | Dial effect |
|----|------------------|-----------------|-------------|
| M1 | **Temperature score** (−2…+2) from multi-signal checklist | See §4 feature list | Maps to screen dial |
| M2 | **When hot (euphoric)**: raise quality bar, lower position-size multiplier, prefer mean-reversion / defensive RS | High temp → dial=`defensive` | Fewer names, higher SMA / lower vol |
| M3 | **When cold (despondent)**: lower entry bar for survivors, allow more cyclical / beaten-down RS if firm-hands volume | Low temp → dial=`aggressive` | More names, allow below SMA50 if above SMA200 |
| M4 | **Prospective returns proxy**: stretch vs SMA200 and vs 52w high → hot; deep DD → cold | `pct_from_SMA200`, `pct_from_52w_high` | Feeds M1 |
| M5 | **Risk appetite proxy**: short-vol / quiet markets after long rally = caution | Index ATR% 20d in bottom quartile of 252d while near highs | +hot |
| M6 | **Credit proxy (US)**: credit ETF spread behavior when available | Optional: `HYG`/`LQD` relative ret 20d; if missing, skip | Partial score |

**Not coded**: qualitative “funds hard to get into,” dinner-party anecdotes — unless later added as manual override flags.

### 1.3 圖解地表最簡單的利率教科書 (rates literacy)

| ID | Operational rule | Feature | Notes |
|----|------------------|---------|-------|
| R1 | Treat **rate direction and pace** as a first-class regime input | `^TNX` / US10Y change 5d/20d/60d | US primary |
| R2 | **Fast yield spike** (≥ +25 bp / 20d) → defensive bias even if price trend up | ΔUS10Y_20d | “Don’t fight rising discount rates” |
| R3 | **Sustained yield decline** (≤ −25 bp / 60d) → allow aggressive dial if egg not in euphoria | ΔUS10Y_60d | Kostolany money-lag echo |
| R4 | TW: use **local rate / FX stress** when US10Y diverges | USDTWD 20d change; optional TW government yield if feed exists | See §5 |

### 1.4 Soft FI / retirement / money-psychology shelf (discipline only)

Authors/titles on shelf used **only** as risk gates (see §3):  
闕又上 retirement gap books; 夏韻芬 找個理由來退休; *Your Money or Your Life* / 跟錢好好相處; 財富自由的心理學; 富爸爸窮爸爸 (partial); 圖解地表最可愛的錢教教科書.

| ID | Operational rule | Code meaning |
|----|------------------|--------------|
| D1 | **Survivability over return** | Max daily new-risk budget; hard stop if equity DD from peak > X% |
| D2 | **Cash runway mindset** | Keep scan output tagged with “dry powder %” recommendation by regime |
| D3 | **No lifestyle-upgrade leverage** | Pipeline never suggests margin / leveraged ETFs as core picks in euphoric regime |
| D4 | **Process > outcome** | Log every dial + screen params; do not rewrite rules after one green day |

---

## 2) Unified daily regime → screen dial

Combine **Kostolany egg proxy** (K) + **Marks temperature** (M) + **rates** (R) into one dial per market (`US`, `TW`).

### 2.1 Phase / temperature labels

| Label | Rough egg phase | Marks temp | Typical feature cocktail |
|-------|-----------------|------------|--------------------------|
| `despondent` | depression / early hope | cold (−2…−1) | Index DD from 252d high ≤ −15% **or** ≤ −10% with vol_ratio ≥ 1.4; ΔUS10Y_60d ≤ 0 preferred |
| `cautious_recovery` | hope / optimism | cool-neutral | DD −10%…−3%; price reclaiming SMA50; rates stable/falling |
| `mid_cycle` | optimism | neutral (0) | Within 3% of SMA50/SMA200 band; normal volume |
| `late_optimism` | late optimism → early euphoria | warm (+1) | Within 2% of 52w high; ATR% compressed; RS leaders extending |
| `euphoric` | euphoria | hot (+2) | New highs + vol_ratio ≥ 1.5 on index **or** ATR% very low + crowded leaders (RS 21d extreme) |
| `panic` | panic | volatile cold | 5–10d plunge ≤ −6% index with vol_ratio ≥ 2.0; do **not** full aggressive until K6 |

### 2.2 Screen dial table

| Regime | Dial | Universe size | Trend filter | Volume filter | RS / momentum | Size multiplier | Notes |
|--------|------|---------------|--------------|---------------|---------------|-----------------|-------|
| `euphoric` | **defensive** | Top 20% quality/liquidity only | Prefer `close > SMA50` AND `close > SMA200`; demote parabolic RS | Require `vol_ratio_20 ≥ 1.0` for adds; fade `vol_ratio < 0.7` melt-ups | Prefer **relative strength moderation** (not top 5% 21d rockets) | **0.4–0.6×** | Marks hot: raise bar |
| `late_optimism` | **selective** | Top 40% | `close > SMA50` | Normal | RS vs index 21d in 40–80th pctile | **0.7–0.9×** | Trim extenders |
| `mid_cycle` | **balanced** | Default universe | SMA20/50 as now in opportunity-scan | `vol_ratio_20 ≥ 0.8` | Standard A/B screens | **1.0×** | Baseline |
| `cautious_recovery` | **constructive** | Widen slightly | Allow `close > SMA20` even if below SMA50 if above SMA200 | Favor rising volume on up days | Allow early RS turn | **1.0–1.2×** | Firm hands |
| `despondent` | **aggressive** | Survivors + beaten-down quality | Prefer `close > SMA200` OR K6 reclaim; allow below SMA50 | **Elevated volume on down/flat days** = interest | Prefer **oversold bounce candidates** with liquidity | **1.2–1.5×** (still capped by D1) | Marks cold |
| `panic` | **stabilize_first`** | Cash-heavy; watchlist only | Wait for K6 (`close > SMA20` after shock) | Extreme volume OK for watchlist | No chase of dead-cat without reclaim | **0.3×** until reclaim | Then flip toward aggressive |

**Conflict rule**: if US rates scream defensive (R2) but price still mid-cycle → dial ≤ `selective`. If egg=`panic` → ignore euphoria rules until reclaim.

---

## 3) What we will NOT take from softer FI / retirement books

Keep as **risk-discipline / life-finance hygiene only**. Do **not** ingest into daily stock screens:

1. **Net-worth / FI-number formulas** as stock-selection scores (retirement gap math ≠ alpha).
2. **“Quit your job / find a reason to retire”** lifestyle narratives as timing signals.
3. **Envelope / expense-ratio life audits** from *Your Money or Your Life*-style frameworks as ticker ranks.
4. **Rich Dad** leverage / real-estate-vs-job ideology as equity factor weights.
5. **Cute money-education metaphors** (錢教) as quantitative features.
6. **Psychology-of-wealth affirmations** without a market data proxy.
7. **Pension / 勞退 comparison anecdotes** (闕又上 shelf) as buy/sell rules — only as reminder to measure *personal* DD tolerance (D1).
8. Any **copyrighted worksheets, tables, or long quoted passages** from these books.

**Allowed residue**: position sizing caps, cash buffer tags, anti-FOMO demotion in euphoria, journaling of process (D1–D4).

---

## 4) Explicit mapping → Yahoo-computable features

Aligned with existing opportunity-scan fields (SMA20/50, vol_ratio_20, index rets) and extensions.

| Feature ID | Definition (computable) | Yahoo source sketch | Used by |
|------------|-------------------------|---------------------|---------|
| `close` | Adjusted/close daily | `v8/finance/chart` | all |
| `SMA20` / `SMA50` / `SMA200` | Simple MA of close | chart history | K6, dials, M4 |
| `vol_ratio_20` | today_vol / mean(vol,20) | chart `volume` | K2,K3, dials |
| `ret_1d` / `ret_5d` / `ret_21d` / `ret_63d` | close-to-close returns | chart | RS, egg |
| `rs_vs_index_21d` | stock_ret_21d − index_ret_21d | stock + `^GSPC` or `^TWII` | screens |
| `dd_from_52w_high` | close / max(high,252) − 1 | chart | M4, egg |
| `dd_from_252d_high` | same as above | chart | regime |
| `pct_from_SMA200` | close / SMA200 − 1 | chart | M4 |
| `ATR_pct_20` | ATR20 / close | chart high/low/close | M5 |
| `index_vol_ratio_20` | index volume ratio | `^GSPC`,`^IXIC`,`^TWII` | K3, euphoria |
| `US10Y` / `^TNX` | yield level | `^TNX` | R1–R3, K4 |
| `d_US10Y_5d/20d/60d` | change in yield (pp) | `^TNX` series | R2,R3 |
| `USDTWD` | FX | `USDTWD=X` | TW separation |
| `d_USDTWD_20d` | FX change | same | R4 |
| `HYG_vs_LQD_20d` | optional credit risk-on | ETF charts | M6 (optional) |
| `breadth_proxy` | % of universe above SMA50 | computed on scanned set | Marks temp |

**Pipeline hook**: regime job writes `{market, regime_label, dial, size_mult, temperature_score, features{...}}` then screen job reads dial row from §2.2.

---

## 5) Taiwan vs US separation notes

| Topic | US | Taiwan (TW) |
|-------|----|-------------|
| Benchmark | `^GSPC`, `^IXIC`, optional `^SOX` for semis | `^TWII`; OTC if feed stable |
| Session / data freshness | Use last US cash close; avoid premarket as regime truth | TWSE calendar; morning TW scans often use **prior TW close** |
| Rate anchor | `^TNX` / US10Y primary | Local policy rate rarely on Yahoo — use **USDTWD** + US10Y as stress; do not pretend TW yields = US10Y |
| Limit up/down | None (halts exist) | ±10% daily limit → RS and “panic” thresholds must use **limit-aware** logic (e.g. many names at +9.5% ≠ healthy breadth) |
| Settlement | T+1 | T+2 — affects **cash availability tags**, not SMA math |
| Liquidity | ADV$ filter in USD | ADV$ or ADV shares in TWD; exclude thin OTC unless flagged |
| ADR dual-list | e.g. TSM vs 2330 — score **both markets separately**; never average regimes | Same |
| Holiday desync | US holiday → freeze US dial, still update TW | TW holiday → freeze TW dial |
| Euphoria tells | Mega-cap leadership + low ATR% | Electronics / weighted heavyweights + limit-up clusters |
| Despondent tells | Index DD + HY stress | Index DD + USD/TWD spike (risk-off FX) often co-travel |

**Hard rule**: `dial_US` and `dial_TW` are independent. A US `euphoric` day does not auto-defensive TW (and vice versa) unless FX/rate contagion features fire (R4).

---

## 6) Implementation sketch for daily scan

1. Pull charts for indices + `^TNX` + `USDTWD=X` + universe.
2. Compute §4 features per market → `temperature_score` + `egg_proxy` → `regime_label` → `dial`.
3. Apply §2.2 screen dial to existing A/B filters (momentum, volume) from opportunity-scan.
4. Apply D1–D3 caps; attach `size_mult`.
5. Emit markdown + JSON scan; log dial for audit (D4).

---

## 7) Disclaimer

Framework synthesis for **transparent screening math**, not investment advice. Public knowledge of author frameworks only; no book text reproduced.
