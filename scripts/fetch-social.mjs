#!/usr/bin/env node
/**
 * fetch-social.mjs
 * Build public/data/social-digest.json from latest.json picks.
 *
 * Hard routing (market split):
 *   US tickers only → Reddit + 富途牛牛 (Futu). Never PTT/Dcard/Threads.
 *   TW tickers only → PTT + Dcard + Threads. Never Reddit/Futu.
 *
 * Never invents comments — blocked sources get honest `blocker` fields.
 *
 * Usage:
 *   npm run fetch-social
 *   node scripts/fetch-social.mjs --latest public/data/latest.json --out public/data/social-digest.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const BROWSER_UA =
  process.env.SOCIAL_UA ||
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

const MOBILE_UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

const SUBREDDITS = ['stocks', 'wallstreetbets', 'investing', 'SecurityAnalysis'];
const PTT_BOARDS = ['Stock']; // HateFinance board is gone (404)
const SLEEP_MS = Number(process.env.SOCIAL_SLEEP_MS || 1200);
const REDDIT_SLEEP_MS = Number(process.env.REDDIT_SLEEP_MS || 2200);

function parseArgs(argv) {
  const out = {
    latest: path.join(ROOT, 'public', 'data', 'latest.json'),
    out: path.join(ROOT, 'public', 'data', 'social-digest.json'),
  };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--latest') out.latest = path.resolve(argv[++i]);
    else if (argv[i] === '--out') out.out = path.resolve(argv[++i]);
  }
  return out;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function marketOf(row) {
  const ticker = String(row.ticker || '').trim();
  const m = String(row.market || '').toUpperCase();
  if (m === 'TW' || m === 'US') return m;
  return ticker.endsWith('.TW') ? 'TW' : 'US';
}

function pickMeta(latest) {
  /** @type {Map<string, {ticker:string, name:string, market:string}>} */
  const map = new Map();
  for (const row of [...(latest.top5 || []), ...(latest.us || []), ...(latest.tw || [])]) {
    const ticker = String(row.ticker || '').trim();
    if (!ticker || map.has(ticker)) continue;
    map.set(ticker, {
      ticker,
      name: String(row.name || '').trim(),
      market: marketOf(row),
    });
  }
  return [...map.values()];
}

/** Prefer Top5, keep US+TW mix (cap). */
function selectTickers(latest, all, cap = 5) {
  const topTickers = new Set((latest.top5 || []).map((r) => String(r.ticker)));
  const ordered = [
    ...all.filter((m) => topTickers.has(m.ticker)),
    ...all.filter((m) => !topTickers.has(m.ticker)),
  ];
  return ordered.slice(0, cap);
}

async function fetchText(url, {
  accept = '*/*',
  cookie = '',
  ua = BROWSER_UA,
  extraHeaders = {},
  referer = '',
} = {}) {
  const headers = {
    'User-Agent': ua,
    Accept: accept,
    'Accept-Language': 'en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7',
    ...extraHeaders,
  };
  if (cookie) headers.Cookie = cookie;
  if (referer) headers.Referer = referer;
  const res = await fetch(url, { headers, redirect: 'follow' });
  const text = await res.text();
  return { status: res.status, url: res.url, text, headers: res.headers };
}

function looksLikeRedditChallenge(text) {
  const t = text.slice(0, 800).toLowerCase();
  return (
    t.includes('<html') ||
    t.includes('theme-beta') ||
    t.includes('whoa there') ||
    t.includes('<!doctype') ||
    (t.includes('login') && t.includes('reddit') && !t.trimStart().startsWith('{'))
  );
}

function snippetFromPost(d) {
  const title = (d.title || '').trim();
  const self = (d.selftext || '').replace(/\s+/g, ' ').trim();
  if (self) return `${title} — ${self.slice(0, 160)}`;
  return title.slice(0, 200);
}

function parseRedditListing(text, subHint) {
  const json = JSON.parse(text);
  const items = [];
  for (const ch of json?.data?.children || []) {
    const d = ch.data || {};
    if (!d.permalink && !d.url) continue;
    items.push({
      author: d.author || '[deleted]',
      score: typeof d.score === 'number' ? d.score : null,
      snippet: snippetFromPost(d),
      url: d.permalink ? `https://www.reddit.com${d.permalink}` : d.url,
      created: d.created_utc
        ? new Date(d.created_utc * 1000).toISOString()
        : null,
      subreddit: d.subreddit || subHint || null,
      kind: 'reddit',
    });
  }
  return items;
}

function tickerNeedles(meta) {
  const needles = new Set();
  const t = String(meta.ticker || '').trim();
  if (t) {
    needles.add(t.toUpperCase());
    needles.add(`$${t.toUpperCase()}`);
  }
  const name = String(meta.name || '').trim();
  if (name && name.length >= 3) needles.add(name.toUpperCase());
  return [...needles];
}

function mentionsTicker(post, meta) {
  const hay = `${post.title || ''} ${post.selftext || ''} ${post.snippet || ''}`.toUpperCase();
  return tickerNeedles(meta).some((n) => hay.includes(n));
}

function arcticPostToItem(p, subHint) {
  const permalink = p.permalink || '';
  const url = permalink
    ? permalink.startsWith('http')
      ? permalink
      : `https://www.reddit.com${permalink}`
    : p.url || null;
  if (!url) return null;
  const title = (p.title || '').trim();
  const self = String(p.selftext || '').replace(/\s+/g, ' ').trim();
  return {
    author: p.author || '[deleted]',
    score: typeof p.score === 'number' ? p.score : null,
    snippet: self ? `${title} — ${self.slice(0, 160)}` : title.slice(0, 200),
    url,
    created: p.created_utc
      ? new Date(Number(p.created_utc) * 1000).toISOString()
      : null,
    subreddit: p.subreddit || subHint || null,
    kind: 'reddit',
    via: 'arctic-shift',
  };
}

/**
 * Public Reddit archive mirror used when www/old.reddit JSON is blocked from this IP.
 * Real posts only — filtered to mention the ticker/name.
 */
async function fetchRedditViaArctic(meta) {
  const items = [];
  const blockers = [];
  const q = String(meta.ticker || '').trim();
  if (!q) return { items, blockers, anyOk: false };

  for (const sub of SUBREDDITS) {
    const url =
      `https://arctic-shift.photon-reddit.com/api/posts/search` +
      `?subreddit=${encodeURIComponent(sub)}&query=${encodeURIComponent(q)}&limit=8`;
    try {
      const { status, text } = await fetchText(url, {
        accept: 'application/json',
        ua: BROWSER_UA,
        referer: 'https://arctic-shift.photon-reddit.com/',
      });
      if (status === 429 || status === 422) {
        blockers.push(`arctic r/${sub}: HTTP ${status} (rate/timeout) — slowed`);
        await sleep(REDDIT_SLEEP_MS + 1500);
        continue;
      }
      if (status !== 200) {
        blockers.push(`arctic r/${sub}: HTTP ${status}`);
        await sleep(800);
        continue;
      }
      let json;
      try {
        json = JSON.parse(text);
      } catch {
        blockers.push(`arctic r/${sub}: non-JSON`);
        await sleep(800);
        continue;
      }
      if (json.error) {
        blockers.push(`arctic r/${sub}: ${json.error}`);
        await sleep(REDDIT_SLEEP_MS);
        continue;
      }
      for (const p of json.data || []) {
        if (!mentionsTicker(p, meta)) continue;
        const it = arcticPostToItem(p, sub);
        if (it) items.push(it);
      }
    } catch (e) {
      blockers.push(`arctic r/${sub}: ${e.message}`);
    }
    await sleep(REDDIT_SLEEP_MS);
  }
  return { items, blockers, anyOk: items.length > 0 || blockers.every((b) => !/HTTP 403|blocked/i.test(b)) };
}

/**
 * US only. Try several public JSON shapes with browser-like headers.
 * Never called for TW tickers.
 */
async function fetchRedditForTicker(meta) {
  const ticker = meta.ticker;
  const queries = [];
  queries.push(ticker);
  if (meta.name && meta.name.toLowerCase() !== ticker.toLowerCase()) {
    queries.push(`"${meta.name}" OR ${ticker}`);
  }
  const qPrimary = queries[0];

  const items = [];
  const blockers = [];
  let anyOk = false;

  const attempts = [];
  // Prefer old.reddit JSON first (sometimes less aggressive), then www search.json
  for (const sub of SUBREDDITS) {
    attempts.push({
      label: `old.reddit r/${sub}`,
      url:
        `https://old.reddit.com/r/${sub}/search.json` +
        `?q=${encodeURIComponent(qPrimary)}&restrict_sr=1&sort=new&limit=5&t=week&raw_json=1`,
      sub,
    });
  }
  for (const sub of SUBREDDITS) {
    attempts.push({
      label: `www r/${sub}`,
      url:
        `https://www.reddit.com/r/${sub}/search.json` +
        `?q=${encodeURIComponent(qPrimary)}&restrict_sr=1&sort=new&limit=5&t=week&raw_json=1`,
      sub,
    });
  }
  // Site-wide search as last resort (still US-only path)
  attempts.push({
    label: 'www search.json',
    url:
      `https://www.reddit.com/search.json` +
      `?q=${encodeURIComponent(qPrimary)}&sort=new&limit=5&t=week&type=link&raw_json=1`,
    sub: null,
  });

  // Cap attempts; bail early to Arctic if this IP is clearly blocked
  let successCount = 0;
  let hardBlocks = 0;
  for (const att of attempts) {
    if (successCount >= 2) break;
    if (hardBlocks >= 2) {
      blockers.push('reddit.com: skipping further attempts after repeated challenge/403');
      break;
    }
    try {
      const { status, text, url: finalUrl } = await fetchText(att.url, {
        accept: 'application/json, text/javascript, */*; q=0.01',
        ua: BROWSER_UA,
        referer: 'https://www.reddit.com/',
        extraHeaders: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      });
      if (
        status === 403 ||
        status === 429 ||
        status === 401 ||
        looksLikeRedditChallenge(text) ||
        /\/login/i.test(finalUrl)
      ) {
        hardBlocks += 1;
        blockers.push(
          `${att.label}: HTTP ${status} — Reddit blocked unauthenticated JSON from this network (challenge/HTML/login/rate limit).`
        );
        await sleep(Math.min(REDDIT_SLEEP_MS, 800));
        continue;
      }
      if (status !== 200) {
        blockers.push(`${att.label}: HTTP ${status}`);
        await sleep(REDDIT_SLEEP_MS);
        continue;
      }
      let found;
      try {
        found = parseRedditListing(text, att.sub);
      } catch {
        blockers.push(`${att.label}: non-JSON body`);
        await sleep(REDDIT_SLEEP_MS);
        continue;
      }
      anyOk = true;
      successCount += 1;
      for (const it of found) items.push(it);
    } catch (e) {
      blockers.push(`${att.label}: ${e.message}`);
    }
    await sleep(REDDIT_SLEEP_MS);
  }

  let seen = new Set();
  let unique = [];
  for (const it of items) {
    if (seen.has(it.url)) continue;
    seen.add(it.url);
    unique.push(it);
  }

  // Box IPs often hit Reddit challenge/403 — fall back to Arctic Shift archive
  let via = 'reddit.com';
  if (!unique.length) {
    console.error(`  Reddit direct empty/blocked for ${ticker}; trying arctic-shift…`);
    const arctic = await fetchRedditViaArctic(meta);
    for (const b of arctic.blockers) blockers.push(b);
    for (const it of arctic.items) {
      if (seen.has(it.url)) continue;
      seen.add(it.url);
      unique.push(it);
    }
    if (unique.length) {
      anyOk = true;
      via = 'arctic-shift';
    }
  }

  unique.sort((a, b) => (b.score || 0) - (a.score || 0));

  const entry = { ticker, market: 'US', items: unique.slice(0, 8), via };
  if (!unique.length && blockers.length) {
    entry.blocker = blockers[0];
    entry.blockers = blockers.slice(0, 10);
    entry.manualUrls = SUBREDDITS.map(
      (s) =>
        `https://www.reddit.com/r/${s}/search/?q=${encodeURIComponent(ticker)}&restrict_sr=1&sort=new&t=week`
    );
    entry.browserFallback = true;
  } else if (!unique.length) {
    entry.blocker = `Reddit 搜尋「${qPrimary}」無公開結果`;
  } else if (blockers.length) {
    entry.partialBlockers = blockers.slice(0, 6);
  }
  return entry;
}

/**
 * US only. Comments need login; keep working newsRelated as 新聞／討論線索.
 */
async function fetchFutuForTicker(meta) {
  const ticker = meta.ticker;
  const entry = {
    ticker,
    market: 'US',
    items: [],
    newsRelated: [],
    label: '新聞／討論線索',
  };

  try {
    const nnq = await fetchText('https://q.futunn.com/nnq/recommend?lang=zh-cn', {
      accept: 'text/html',
    });
    if (
      nnq.status === 302 ||
      nnq.url.includes('passport.futunn.com') ||
      nnq.text.includes('passport.futunn.com') ||
      /Redirecting to.*passport/i.test(nnq.text)
    ) {
      entry.blocker =
        '富途牛牛圈／個股評論需登入；下方僅為公開「新聞／討論線索」（非留言）。';
    } else if (nnq.status !== 200) {
      entry.blocker = `富途社群探測 HTTP ${nnq.status}；下方僅公開新聞線索（非留言）。`;
    } else {
      entry.blocker =
        '富途個股留言無法匿名取得；下方為公開新聞／討論線索（非留言）。';
    }
  } catch (e) {
    entry.blocker = `富途社群探測失敗：${e.message}；下方嘗試公開新聞線索。`;
  }

  const keywords = [ticker];
  if (meta.name) keywords.push(meta.name);

  for (const keyword of keywords.slice(0, 2)) {
    const newsUrl =
      `https://ai-news-search.futunn.com/news_search` +
      `?keyword=${encodeURIComponent(keyword)}&content_type=1&lang=zh-CN&sort_type=2&size=5`;
    try {
      const { status, text } = await fetchText(newsUrl, { accept: 'application/json' });
      if (status === 200) {
        const json = JSON.parse(text);
        if (json.code === 0 && Array.isArray(json.data)) {
          for (const n of json.data) {
            entry.newsRelated.push({
              author: 'futunn-news',
              score: null,
              snippet: String(n.title || '')
                .replace(/<\/?em>/g, '')
                .slice(0, 200),
              url: n.url || null,
              created: n.publish_time
                ? new Date(Number(n.publish_time) * 1000).toISOString()
                : null,
              kind: 'news-clue',
              query: keyword,
            });
          }
        } else {
          entry.newsNote = json.message || `news_search code=${json.code}`;
        }
      } else {
        entry.newsNote = `news_search HTTP ${status}`;
      }
    } catch (e) {
      entry.newsNote = `news_search error: ${e.message}`;
    }
    await sleep(400);
  }

  const seen = new Set();
  entry.newsRelated = entry.newsRelated.filter((it) => {
    const k = it.url || it.snippet;
    if (!k || seen.has(k)) return false;
    seen.add(k);
    return true;
  }).slice(0, 8);

  return entry;
}

function decodeHtml(s) {
  return String(s || '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x22ef;/g, '…');
}

function parsePttNrec(htmlChunk) {
  const m = htmlChunk.match(/<div class="nrec">([\s\S]*?)<\/div>/);
  if (!m) return null;
  const inner = m[1].replace(/<[^>]+>/g, '').trim();
  if (!inner) return null;
  if (/^爆$/.test(inner)) return 100;
  if (/^X\d+$/i.test(inner)) return null;
  const n = Number(inner);
  return Number.isFinite(n) ? n : null;
}

function parsePttSearchHtml(html, board) {
  const items = [];
  const blocks = html.split(/<div class="r-ent">/).slice(1);
  for (const block of blocks) {
    const titleM = block.match(
      /<div class="title">\s*<a href="([^"]+)">([\s\S]*?)<\/a>/
    );
    if (!titleM) continue;
    const href = titleM[1];
    const title = decodeHtml(titleM[2]).replace(/\s+/g, ' ').trim();
    if (!title || title.includes('(本文已被刪除)') || title.includes('(本文已被下沉)')) {
      continue;
    }
    const authorM = block.match(/<div class="author">([^<]*)<\/div>/);
    const dateM = block.match(/<div class="date">([^<]*)<\/div>/);
    const author = decodeHtml(authorM?.[1] || '').trim() || 'ptt';
    const dateStr = decodeHtml(dateM?.[1] || '').trim() || null;
    items.push({
      author,
      score: parsePttNrec(block),
      snippet: title.slice(0, 200),
      url: href.startsWith('http') ? href : `https://www.ptt.cc${href}`,
      created: null,
      date: dateStr,
      board,
      kind: 'ptt',
    });
  }
  return items;
}

function pttQueriesFor(meta) {
  const q = new Set();
  const t = meta.ticker;
  const bare = t.replace(/\.TW$/i, '');
  q.add(bare);
  if (meta.name) {
    const zh = meta.name.replace(/[A-Za-z0-9()].*$/g, '').trim();
    if (zh && zh.length >= 2) q.add(zh.slice(0, 8));
    else if (meta.name.length <= 12) q.add(meta.name);
  }
  return [...q].slice(0, 2);
}

async function fetchPttIndexFallback(meta, board = 'Stock') {
  const items = [];
  const needles = pttQueriesFor(meta).map((s) => s.toLowerCase());
  const nameZh = (meta.name || '').replace(/[A-Za-z0-9()].*$/g, '').trim();
  if (nameZh) needles.push(nameZh);
  const url = `https://www.ptt.cc/bbs/${board}/index.html`;
  try {
    const { status, text } = await fetchText(url, {
      accept: 'text/html',
      cookie: 'over18=1',
    });
    if (status !== 200) return { items, note: `index HTTP ${status}` };
    const all = parsePttSearchHtml(text, board);
    for (const it of all) {
      const hay = (it.snippet || '').toLowerCase();
      if (needles.some((n) => n && hay.includes(String(n).toLowerCase()))) {
        it.query = 'index-scan';
        items.push(it);
      }
    }
  } catch (e) {
    return { items, note: e.message };
  }
  return { items, note: null };
}

async function fetchPttForTicker(meta) {
  const entry = { ticker: meta.ticker, market: 'TW', items: [] };
  const blockers = [];
  const queries = pttQueriesFor(meta);

  for (const board of PTT_BOARDS) {
    for (const q of queries) {
      const url = `https://www.ptt.cc/bbs/${board}/search?q=${encodeURIComponent(q)}`;
      try {
        const { status, text } = await fetchText(url, {
          accept: 'text/html',
          cookie: 'over18=1',
          ua: BROWSER_UA,
        });
        if (status !== 200) {
          blockers.push(`${board} q=${q}: HTTP ${status}`);
          await sleep(300);
          continue;
        }
        if (text.includes('目前無法看到這板') || text.includes('您尚未登入')) {
          blockers.push(`${board}: 需登入或無權限`);
          await sleep(300);
          continue;
        }
        const found = parsePttSearchHtml(text, board).slice(0, 8);
        for (const it of found) {
          it.query = q;
          entry.items.push(it);
        }
      } catch (e) {
        blockers.push(`${board} q=${q}: ${e.message}`);
      }
      await sleep(350);
    }
  }

  if (entry.items.length < 2) {
    const fb = await fetchPttIndexFallback(meta, 'Stock');
    for (const it of fb.items) entry.items.push(it);
    if (fb.note) blockers.push(`index-scan: ${fb.note}`);
  }

  const seen = new Set();
  entry.items = entry.items
    .filter((it) => {
      if (seen.has(it.url)) return false;
      seen.add(it.url);
      return true;
    })
    .slice(0, 10);

  if (!entry.items.length && blockers.length) {
    entry.blocker = blockers[0];
    entry.blockers = blockers;
  } else if (!entry.items.length) {
    entry.blocker = `PTT Stock 搜尋「${queries.join('、')}」無公開結果`;
  } else if (blockers.length) {
    entry.partialBlockers = blockers;
  }
  return entry;
}

function parseDcardList(json) {
  const list = Array.isArray(json) ? json : json?.posts || json?.data || [];
  const items = [];
  for (const p of list) {
    const id = p.id || p.postId;
    const title = p.title || p.excerpt || '';
    if (!title) continue;
    items.push({
      author: p.school || p.department || 'dcard',
      score: typeof p.likeCount === 'number' ? p.likeCount : null,
      snippet: String(title).replace(/\s+/g, ' ').slice(0, 200),
      url: id ? `https://www.dcard.tw/f/${p.forumAlias || 'all'}/p/${id}` : null,
      created: p.createdAt || null,
      forum: p.forumAlias || null,
      kind: 'dcard',
    });
  }
  return items;
}

async function fetchDcardForTicker(meta) {
  const entry = { ticker: meta.ticker, market: 'TW', items: [] };
  const queries = pttQueriesFor(meta);
  const blockers = [];
  const manualUrls = [];

  for (const q of queries) {
    const searchPage = `https://www.dcard.tw/search?query=${encodeURIComponent(q)}`;
    manualUrls.push(searchPage);
    const apiUrl =
      `https://www.dcard.tw/service/api/v2/search/posts` +
      `?query=${encodeURIComponent(q)}&limit=5`;

    const headerSets = [
      {
        ua: MOBILE_UA,
        accept: 'application/json',
        extraHeaders: {
          Origin: 'https://www.dcard.tw',
          Referer: searchPage,
        },
      },
      {
        ua: BROWSER_UA,
        accept: 'application/json, text/plain, */*',
        extraHeaders: {
          Origin: 'https://www.dcard.tw',
          Referer: searchPage,
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
        },
      },
    ];

    let got = false;
    for (const hs of headerSets) {
      try {
        const { status, text } = await fetchText(apiUrl, {
          accept: hs.accept,
          ua: hs.ua,
          extraHeaders: hs.extraHeaders,
          referer: searchPage,
        });
        if (status === 403 || status === 429) {
          blockers.push(
            `Dcard search q=${q}: HTTP ${status} — Cloudflare／反爬阻擋匿名 API（本環境）`
          );
          await sleep(500);
          continue;
        }
        if (status !== 200) {
          blockers.push(`Dcard search q=${q}: HTTP ${status}`);
          await sleep(400);
          continue;
        }
        let json;
        try {
          json = JSON.parse(text);
        } catch {
          blockers.push(`Dcard search q=${q}: non-JSON（可能是挑戰頁）`);
          await sleep(400);
          continue;
        }
        const found = parseDcardList(json);
        for (const it of found) {
          it.query = q;
          entry.items.push(it);
        }
        got = true;
        break;
      } catch (e) {
        blockers.push(`Dcard q=${q}: ${e.message}`);
      }
      await sleep(400);
    }

    // HTML search page probe (usually also CF)
    if (!got) {
      try {
        const html = await fetchText(searchPage, {
          accept: 'text/html',
          ua: MOBILE_UA,
        });
        if (html.status === 403 || html.status === 429) {
          blockers.push(`Dcard HTML q=${q}: HTTP ${html.status} (Cloudflare)`);
        } else if (html.status === 200 && !html.text.includes('cf-browser-verification')) {
          // Do not invent from opaque SPA HTML — only note that page loaded
          blockers.push(
            `Dcard HTML q=${q}: 頁面可載入但無穩定公開 JSON，需瀏覽器路徑`
          );
        }
      } catch (e) {
        blockers.push(`Dcard HTML q=${q}: ${e.message}`);
      }
      await sleep(300);
    }
  }

  const seen = new Set();
  entry.items = entry.items.filter((it) => {
    const k = it.url || it.snippet;
    if (!k || seen.has(k)) return false;
    seen.add(k);
    return true;
  }).slice(0, 8);

  entry.manualUrls = manualUrls;
  if (!entry.items.length) {
    entry.blocker =
      blockers[0] ||
      'Dcard 無法以匿名方式取得搜尋結果（需瀏覽器／登入環境）。';
    if (blockers.length) entry.blockers = [...new Set(blockers)].slice(0, 8);
    entry.browserFallback = true;
  } else if (blockers.length) {
    entry.partialBlockers = [...new Set(blockers)].slice(0, 6);
  }
  return entry;
}

async function fetchThreadsForTicker(meta) {
  // No trustworthy public anonymous search API. Honest blocker only.
  // Do NOT fall back to Reddit for TW.
  const entry = { ticker: meta.ticker, market: 'TW', items: [] };
  const q = String(meta.name || meta.ticker || '').replace(/\.TW$/i, '');
  entry.blocker =
    'Threads 無穩定公開搜尋，台股暫無法自動抓';
  entry.manualUrls = [
    `https://www.threads.net/search?q=${encodeURIComponent(q)}&serp_type=default`,
  ];
  // Light probe for diagnostics only — never parse HTML into fake posts
  try {
    const url = entry.manualUrls[0];
    const { status, url: finalUrl } = await fetchText(url, { accept: 'text/html' });
    entry.probe = { status, finalUrl };
  } catch (e) {
    entry.probe = { error: e.message };
  }
  await sleep(250);
  return entry;
}

function writeBrowserNotes(digest, notesPath) {
  const lines = [];
  lines.push('# fetch-social browser fallback notes');
  lines.push('');
  lines.push(`Generated: ${digest.asOf}`);
  lines.push('');
  lines.push('Puppeteer/Playwright are **not** installed in this repo. Box IP hits Cloudflare 403 on Dcard and Reddit challenge/403.');
  lines.push('Reddit falls back to arctic-shift.photon-reddit.com (real posts, ticker-filtered). Dcard still needs user-browser IP.');
  lines.push('Parent agent can open these URLs via computerUse / user browser and paste real titles into social-digest if needed.');
  lines.push('');
  lines.push('## Hard routing');
  lines.push('- US → Reddit + Futu only');
  lines.push('- TW → PTT + Dcard + Threads only');
  lines.push('');
  lines.push('## Dcard (TW) — computerUse-friendly search URLs');
  for (const d of digest.dcard || []) {
    if (!d.browserFallback && (d.items || []).length) continue;
    lines.push(`### ${d.ticker}`);
    for (const u of d.manualUrls || []) lines.push(`- ${u}`);
    if (d.blocker) lines.push(`- blocker: ${d.blocker}`);
    lines.push('');
  }
  lines.push('## Reddit (US) — if box still blocked, open on user IP');
  for (const r of digest.reddit || []) {
    if ((r.items || []).length) continue;
    lines.push(`### ${r.ticker}`);
    for (const u of r.manualUrls || []) lines.push(`- ${u}`);
    if (r.blocker) lines.push(`- blocker: ${r.blocker}`);
    lines.push('');
  }
  lines.push('## Threads');
  lines.push('- No stable public search API; site shows honest blocker only.');
  lines.push('');
  fs.writeFileSync(notesPath, lines.join('\n') + '\n');
}

async function main() {
  const args = parseArgs(process.argv);
  if (!fs.existsSync(args.latest)) {
    console.error(`latest.json not found: ${args.latest}`);
    process.exit(1);
  }
  const latest = JSON.parse(fs.readFileSync(args.latest, 'utf8'));
  const all = pickMeta(latest);
  const selected = selectTickers(latest, all, 5);
  const usPicks = selected.filter((m) => m.market === 'US');
  const twPicks = selected.filter((m) => m.market === 'TW');

  console.error(
    `Tickers: ${selected.map((m) => `${m.ticker}(${m.market})`).join(', ') || '(none)'}`
  );
  console.error(`US sources (Reddit+Futu): ${usPicks.map((m) => m.ticker).join(', ') || '(none)'}`);
  console.error(`TW sources (PTT+Dcard+Threads): ${twPicks.map((m) => m.ticker).join(', ') || '(none)'}`);

  const notes = [
    '路由：美股只抓 Reddit＋富途；台股只抓 PTT＋Dcard＋Threads。不跨市場亂查。',
  ];
  const reddit = [];
  const futu = [];
  const ptt = [];
  const dcard = [];
  const threads = [];

  for (const meta of usPicks) {
    console.error(`Reddit → ${meta.ticker}`);
    const r = await fetchRedditForTicker(meta);
    reddit.push(r);
    if (r.blocker) notes.push(`Reddit ${meta.ticker}: ${r.blocker}`);
  }

  for (const meta of usPicks) {
    console.error(`Futu → ${meta.ticker}`);
    futu.push(await fetchFutuForTicker(meta));
  }
  if (futu.some((f) => f.blocker)) {
    notes.push(
      '富途個股留言需登入；US 檔以 blocker + newsRelated（標為「新聞／討論線索」）呈現。'
    );
  }

  for (const meta of twPicks) {
    console.error(`PTT → ${meta.ticker}`);
    const p = await fetchPttForTicker(meta);
    ptt.push(p);
    if (p.blocker) notes.push(`PTT ${meta.ticker}: ${p.blocker}`);
  }

  for (const meta of twPicks) {
    console.error(`Dcard → ${meta.ticker}`);
    const d = await fetchDcardForTicker(meta);
    dcard.push(d);
    if (d.blocker) notes.push(`Dcard ${meta.ticker}: ${d.blocker}`);
  }

  for (const meta of twPicks) {
    console.error(`Threads → ${meta.ticker}`);
    const th = await fetchThreadsForTicker(meta);
    threads.push(th);
    if (th.blocker) notes.push(`Threads ${meta.ticker}: ${th.blocker}`);
  }

  const digest = {
    asOf: new Date().toISOString(),
    sourceLatestAsOf: latest.asOf || null,
    routing: {
      US: ['reddit', 'futu'],
      TW: ['ptt', 'dcard', 'threads'],
    },
    selected: selected.map((m) => ({ ticker: m.ticker, name: m.name, market: m.market })),
    notes,
    reddit,
    futu,
    ptt,
    dcard,
    threads,
  };

  fs.mkdirSync(path.dirname(args.out), { recursive: true });
  fs.writeFileSync(args.out, JSON.stringify(digest, null, 2) + '\n');
  console.error(`Wrote ${args.out}`);

  const notesPath = path.join(ROOT, 'scripts', 'fetch-social-browser-notes.md');
  const needNotes =
    dcard.some((d) => d.browserFallback) ||
    reddit.some((r) => !(r.items || []).length);
  if (needNotes) {
    writeBrowserNotes(digest, notesPath);
    console.error(`Wrote ${notesPath}`);
  }

  console.log(
    JSON.stringify(
      {
        ok: true,
        out: args.out,
        us: usPicks.length,
        tw: twPicks.length,
        reddit: reddit.length,
        futu: futu.length,
        ptt: ptt.length,
        dcard: dcard.length,
        threads: threads.length,
        pttItems: ptt.reduce((n, e) => n + (e.items || []).length, 0),
        redditItems: reddit.reduce((n, e) => n + (e.items || []).length, 0),
      },
      null,
      2
    )
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
