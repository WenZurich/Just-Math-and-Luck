#!/usr/bin/env node
/**
 * fetch-social.mjs
 * Build public/data/social-digest.json from latest.json picks.
 *
 * Sources: Reddit, 富途, PTT, Dcard, Threads
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

const UA =
  process.env.SOCIAL_UA ||
  'JustMathAndLuck-SocialDigest/0.1 (daily stock picks; polite; contact via GitHub Pages)';

const SUBREDDITS = ['stocks', 'wallstreetbets', 'investing'];
const PTT_BOARDS = ['Stock', 'HateFinance'];
const SLEEP_MS = Number(process.env.SOCIAL_SLEEP_MS || 800);

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

function pickMeta(latest) {
  /** @type {Map<string, {ticker:string, name:string, market:string}>} */
  const map = new Map();
  for (const row of [...(latest.top5 || []), ...(latest.us || []), ...(latest.tw || [])]) {
    const ticker = String(row.ticker || '').trim();
    if (!ticker || map.has(ticker)) continue;
    map.set(ticker, {
      ticker,
      name: String(row.name || '').trim(),
      market: String(row.market || (ticker.endsWith('.TW') ? 'TW' : 'US')),
    });
  }
  return [...map.values()];
}

async function fetchText(url, { accept = '*/*', cookie = '' } = {}) {
  const headers = {
    'User-Agent': UA,
    Accept: accept,
  };
  if (cookie) headers.Cookie = cookie;
  const res = await fetch(url, { headers, redirect: 'follow' });
  const text = await res.text();
  return { status: res.status, url: res.url, text };
}

function looksLikeRedditChallenge(text) {
  const t = text.slice(0, 500).toLowerCase();
  return (
    t.includes('<html') ||
    t.includes('theme-beta') ||
    t.includes('whoa there') ||
    (t.includes('login') && t.includes('reddit'))
  );
}

function snippetFromPost(d) {
  const title = (d.title || '').trim();
  const self = (d.selftext || '').replace(/\s+/g, ' ').trim();
  if (self) return `${title} — ${self.slice(0, 160)}`;
  return title.slice(0, 200);
}

async function fetchRedditForTicker(ticker) {
  const items = [];
  const blockers = [];
  let anyOk = false;

  for (const sub of SUBREDDITS) {
    const url =
      `https://www.reddit.com/r/${sub}/search.json` +
      `?q=${encodeURIComponent(ticker)}&restrict_sr=1&sort=new&limit=5&t=week`;
    try {
      const { status, text } = await fetchText(url, { accept: 'application/json' });
      if (status === 403 || status === 429 || looksLikeRedditChallenge(text)) {
        blockers.push(
          `r/${sub}: HTTP ${status} — Reddit blocked unauthenticated JSON from this network (challenge/HTML or rate limit).`
        );
        await sleep(SLEEP_MS);
        continue;
      }
      if (status !== 200) {
        blockers.push(`r/${sub}: HTTP ${status}`);
        await sleep(SLEEP_MS);
        continue;
      }
      let json;
      try {
        json = JSON.parse(text);
      } catch {
        blockers.push(`r/${sub}: non-JSON body`);
        await sleep(SLEEP_MS);
        continue;
      }
      anyOk = true;
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
          subreddit: sub,
        });
      }
    } catch (e) {
      blockers.push(`r/${sub}: ${e.message}`);
    }
    await sleep(SLEEP_MS);
  }

  const seen = new Set();
  const unique = [];
  for (const it of items) {
    if (seen.has(it.url)) continue;
    seen.add(it.url);
    unique.push(it);
  }
  unique.sort((a, b) => (b.score || 0) - (a.score || 0));

  const entry = { ticker, items: unique.slice(0, 8) };
  if (!anyOk && blockers.length) {
    entry.blocker = blockers[0];
    entry.blockers = blockers;
  } else if (blockers.length) {
    entry.partialBlockers = blockers;
  }
  return entry;
}

async function fetchFutuForTicker(ticker, { isTw = false } = {}) {
  const entry = { ticker, items: [], newsRelated: [] };

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
        '富途牛牛圈／個股評論需登入（passport.futunn.com）；無穩定公開匿名評論 API。請用 App／官方 Skill 或手動匯入。';
    } else if (nnq.status !== 200) {
      entry.blocker = `富途社群探測 HTTP ${nnq.status}`;
    } else {
      entry.blocker =
        '富途個股評論無法以匿名爬取取得（僅新聞／熱議榜等公開能力）；評論 items 維持空陣列。';
    }
  } catch (e) {
    entry.blocker = `富途社群探測失敗：${e.message}`;
  }

  const keyword = isTw ? String(ticker).replace('.TW', '') : ticker;
  const newsUrl =
    `https://ai-news-search.futunn.com/news_search` +
    `?keyword=${encodeURIComponent(keyword)}&content_type=1&lang=zh-CN&sort_type=2&size=5`;
  try {
    const { status, text } = await fetchText(newsUrl, { accept: 'application/json' });
    if (status === 200) {
      const json = JSON.parse(text);
      if (json.code === 0 && Array.isArray(json.data)) {
        entry.newsRelated = json.data.map((n) => ({
          author: 'futunn-news',
          score: null,
          snippet: String(n.title || '')
            .replace(/<\/?em>/g, '')
            .slice(0, 200),
          url: n.url || null,
          created: n.publish_time
            ? new Date(Number(n.publish_time) * 1000).toISOString()
            : null,
          kind: 'news',
        }));
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
  return entry;
}

function decodeHtml(s) {
  return String(s || '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function parsePttSearchHtml(html, board) {
  const items = [];
  const re =
    /<div class="title">\s*<a href="([^"]+)">([^<]*)<\/a>[\s\S]*?<div class="meta">[\s\S]*?<div class="author">([^<]*)<\/div>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const href = m[1];
    const title = decodeHtml(m[2]).trim();
    const author = decodeHtml(m[3]).trim();
    if (!title || title.includes('(本文已被刪除)')) continue;
    items.push({
      author: author || 'ptt',
      score: null,
      snippet: title.slice(0, 200),
      url: href.startsWith('http') ? href : `https://www.ptt.cc${href}`,
      created: null,
      board,
      kind: 'ptt',
    });
  }
  // Fallback: title-only if meta shape differs
  if (!items.length) {
    const re2 = /<div class="title">\s*<a href="([^"]+)">([^<]*)<\/a>/g;
    while ((m = re2.exec(html)) !== null) {
      const href = m[1];
      const title = decodeHtml(m[2]).trim();
      if (!title || title.includes('(本文已被刪除)')) continue;
      items.push({
        author: 'ptt',
        score: null,
        snippet: title.slice(0, 200),
        url: href.startsWith('http') ? href : `https://www.ptt.cc${href}`,
        created: null,
        board,
        kind: 'ptt',
      });
    }
  }
  return items;
}

function pttQueriesFor(meta) {
  const q = new Set();
  const t = meta.ticker;
  const bare = t.replace(/\.TW$/i, '');
  q.add(bare);
  if (meta.name) {
    // first chunk before punctuation / English
    const zh = meta.name.replace(/[A-Za-z0-9()].*$/g, '').trim();
    if (zh && zh.length >= 2) q.add(zh.slice(0, 8));
    else if (meta.name.length <= 12) q.add(meta.name);
  }
  return [...q].slice(0, 2);
}

async function fetchPttForTicker(meta) {
  const entry = { ticker: meta.ticker, items: [] };
  const blockers = [];
  const queries = pttQueriesFor(meta);

  for (const board of PTT_BOARDS) {
    for (const q of queries) {
      const url = `https://www.ptt.cc/bbs/${board}/search?q=${encodeURIComponent(q)}`;
      try {
        const { status, text } = await fetchText(url, {
          accept: 'text/html',
          cookie: 'over18=1',
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
        const found = parsePttSearchHtml(text, board).slice(0, 5);
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

  const seen = new Set();
  entry.items = entry.items.filter((it) => {
    if (seen.has(it.url)) return false;
    seen.add(it.url);
    return true;
  }).slice(0, 10);

  if (!entry.items.length && blockers.length) {
    entry.blocker = blockers[0];
    entry.blockers = blockers;
  } else if (!entry.items.length) {
    entry.blocker = `PTT Stock／HateFinance 搜尋「${queries.join('、')}」無公開結果`;
  } else if (blockers.length) {
    entry.partialBlockers = blockers;
  }
  return entry;
}

async function fetchDcardForTicker(meta) {
  const entry = { ticker: meta.ticker, items: [] };
  const queries = pttQueriesFor(meta);
  const blockers = [];

  for (const q of queries) {
    const url =
      `https://www.dcard.tw/service/api/v2/search/posts` +
      `?query=${encodeURIComponent(q)}&limit=5`;
    try {
      const { status, text } = await fetchText(url, {
        accept: 'application/json',
      });
      if (status === 403 || status === 429) {
        blockers.push(
          `Dcard search q=${q}: HTTP ${status} — Cloudflare／反爬阻擋匿名 API（本環境）`
        );
        await sleep(400);
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
      const list = Array.isArray(json) ? json : json?.posts || json?.data || [];
      for (const p of list) {
        const id = p.id || p.postId;
        const title = p.title || p.excerpt || '';
        if (!title) continue;
        entry.items.push({
          author: p.school || p.department || 'dcard',
          score: typeof p.likeCount === 'number' ? p.likeCount : null,
          snippet: String(title).replace(/\s+/g, ' ').slice(0, 200),
          url: id ? `https://www.dcard.tw/f/${p.forumAlias || 'all'}/p/${id}` : null,
          created: p.createdAt || null,
          forum: p.forumAlias || null,
          kind: 'dcard',
        });
      }
    } catch (e) {
      blockers.push(`Dcard q=${q}: ${e.message}`);
    }
    await sleep(400);
  }

  if (!entry.items.length) {
    entry.blocker =
      blockers[0] ||
      'Dcard 無法以匿名方式取得搜尋結果（需瀏覽器／登入環境）。';
    if (blockers.length) entry.blockers = blockers;
  } else if (blockers.length) {
    entry.partialBlockers = blockers;
  }
  return entry;
}

async function fetchThreadsForTicker(meta) {
  // No trustworthy public anonymous search API from this network.
  // Probe once for status; never publish HTML-extracted strings (high false-positive rate).
  const entry = { ticker: meta.ticker, items: [] };
  const q = String(meta.ticker || '').replace(/\.TW$/i, '');
  const url = `https://www.threads.net/search?q=${encodeURIComponent(q)}&serp_type=default`;
  try {
    const { status, url: finalUrl } = await fetchText(url, { accept: 'text/html' });
    entry.blocker =
      `Threads 無穩定公開匿名搜尋 API（HTTP ${status}；SPA／需登入）。無法可靠取得提到「${q}」的貼文，故不捏造留言。`;
    entry.probe = { status, finalUrl };
  } catch (e) {
    entry.blocker = `Threads 探測失敗：${e.message}`;
  }
  await sleep(300);
  return entry;
}

async function main() {
  const args = parseArgs(process.argv);
  if (!fs.existsSync(args.latest)) {
    console.error(`latest.json not found: ${args.latest}`);
    process.exit(1);
  }
  const latest = JSON.parse(fs.readFileSync(args.latest, 'utf8'));
  const all = pickMeta(latest);
  // Cap for daily digest runtime: prefer Top5 + a few more
  const topTickers = new Set((latest.top5 || []).map((r) => String(r.ticker)));
  const selected = [
    ...all.filter((m) => topTickers.has(m.ticker)),
    ...all.filter((m) => !topTickers.has(m.ticker)),
  ].slice(0, 5);

  console.error(
    `Tickers: ${selected.map((m) => m.ticker).join(', ') || '(none)'}`
  );

  const notes = [];
  const reddit = [];
  const futu = [];
  const ptt = [];
  const dcard = [];
  const threads = [];

  for (const meta of selected) {
    console.error(`Reddit → ${meta.ticker}`);
    const r = await fetchRedditForTicker(meta.ticker);
    reddit.push(r);
    if (r.blocker) notes.push(`Reddit ${meta.ticker}: ${r.blocker}`);
  }

  for (const meta of selected) {
    console.error(`Futu → ${meta.ticker}`);
    futu.push(
      await fetchFutuForTicker(meta.ticker, { isTw: meta.market === 'TW' })
    );
  }
  if (futu.some((f) => f.blocker)) {
    notes.push(
      '富途個股評論：需 App／登入；本檔以 blocker + newsRelated（公開新聞搜尋）呈現。'
    );
  }

  for (const meta of selected) {
    console.error(`PTT → ${meta.ticker}`);
    const p = await fetchPttForTicker(meta);
    ptt.push(p);
    if (p.blocker) notes.push(`PTT ${meta.ticker}: ${p.blocker}`);
  }

  for (const meta of selected) {
    console.error(`Dcard → ${meta.ticker}`);
    const d = await fetchDcardForTicker(meta);
    dcard.push(d);
    if (d.blocker) notes.push(`Dcard ${meta.ticker}: ${d.blocker}`);
  }

  for (const meta of selected) {
    console.error(`Threads → ${meta.ticker}`);
    const th = await fetchThreadsForTicker(meta);
    threads.push(th);
    if (th.blocker) notes.push(`Threads ${meta.ticker}: ${th.blocker}`);
  }

  const digest = {
    asOf: new Date().toISOString(),
    sourceLatestAsOf: latest.asOf || null,
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
  console.log(
    JSON.stringify(
      {
        ok: true,
        out: args.out,
        reddit: reddit.length,
        futu: futu.length,
        ptt: ptt.length,
        dcard: dcard.length,
        threads: threads.length,
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
