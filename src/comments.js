/**
 * Per-ticker discussion: market-aware tabs.
 * US: 本站留言 | Reddit | 富途
 * TW: 本站留言 | PTT | Dcard | Threads
 * Local posts require Supabase anon INSERT (RLS). Giscus is site-level fallback only.
 */

const BACKEND_MSG = '聊天後端尚未接上';

const US_TABS = [
  { id: 'local', label: '本站留言' },
  { id: 'reddit', label: 'Reddit' },
  { id: 'futu', label: '富途' },
];

const TW_TABS = [
  { id: 'local', label: '本站留言' },
  { id: 'ptt', label: 'PTT' },
  { id: 'dcard', label: 'Dcard' },
  { id: 'threads', label: 'Threads' },
];

function inferMarket(ticker, explicit) {
  const m = String(explicit || '').toUpperCase();
  if (m === 'US' || m === 'TW') return m;
  return String(ticker || '').toUpperCase().endsWith('.TW') ? 'TW' : 'US';
}

function tabsForMarket(market) {
  return market === 'TW' ? TW_TABS : US_TABS;
}

function readSupabaseConfig(cfg = globalThis.STOCK_SOCIAL_CONFIG || {}) {
  const env =
    typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {};
  const url = String(cfg.supabaseUrl || env.VITE_SUPABASE_URL || '').trim();
  const anon = String(cfg.supabaseAnonKey || env.VITE_SUPABASE_ANON_KEY || '').trim();
  return { url, anon };
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function createCommentsClient(url, key) {
  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  };
  return {
    async list(ticker, limit = 50) {
      const u = `${url}/rest/v1/comments?select=*&ticker=eq.${encodeURIComponent(
        ticker
      )}&order=created_at.asc&limit=${limit}`;
      const res = await fetch(u, { headers });
      if (!res.ok) throw new Error(`comments select ${res.status}`);
      return res.json();
    },
    async insert(row) {
      const res = await fetch(`${url}/rest/v1/comments`, {
        method: 'POST',
        headers,
        body: JSON.stringify(row),
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(`comments insert ${res.status}: ${t}`);
      }
      return res.json();
    },
  };
}

function preferOpenDetails() {
  try {
    return window.matchMedia('(min-width: 768px)').matches;
  } catch {
    return false;
  }
}

function findTickerEntry(digest, sourceKey, ticker) {
  if (!digest || !ticker) return null;
  const arr = digest[sourceKey];
  if (!Array.isArray(arr)) return null;
  return arr.find((e) => String(e.ticker).toUpperCase() === String(ticker).toUpperCase()) || null;
}

function renderExternalPanel(entry, sourceLabel, { futuMode = false } = {}) {
  if (!entry) {
    return `<p class="ss-empty">此標的尚無 ${escapeHtml(sourceLabel)} 摘要（可能未納入今日抓取名單，或此市場不查該來源）。</p>`;
  }
  const parts = [];
  if (entry.blocker) {
    parts.push(`<p class="ss-digest-blocker">⚠ ${escapeHtml(entry.blocker)}</p>`);
  }
  const items = entry.items || [];
  const news = entry.newsRelated || [];
  if (items.length) {
    parts.push(
      items
        .map((it) => {
          const url = it.url ? escapeHtml(it.url) : '#';
          const score =
            it.score != null ? `<span class="ss-score">▲ ${escapeHtml(it.score)}</span>` : '';
          const author = it.author ? `@${escapeHtml(it.author)}` : '';
          return `<article class="ss-digest-item">
            <a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(
              it.snippet || it.title || '(無摘要)'
            )}</a>
            <div class="ss-digest-meta">${score} ${author}</div>
          </article>`;
        })
        .join('')
    );
  }
  if (news.length) {
    const newsTitle = futuMode
      ? '新聞／討論線索（非留言）'
      : '相關公開新聞（非社群評論）';
    parts.push(`<p class="ss-digest-sub">${newsTitle}</p>`);
    parts.push(
      news
        .map((it) => {
          const url = it.url ? escapeHtml(it.url) : '#';
          return `<article class="ss-digest-item">
            <a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(
              it.snippet || '(無標題)'
            )}</a>
          </article>`;
        })
        .join('')
    );
  }
  if (Array.isArray(entry.manualUrls) && entry.manualUrls.length && !items.length) {
    parts.push(
      `<p class="ss-digest-sub">手動開啟</p>` +
        entry.manualUrls
          .slice(0, 4)
          .map(
            (u) =>
              `<article class="ss-digest-item"><a href="${escapeHtml(
                u
              )}" target="_blank" rel="noopener noreferrer">${escapeHtml(u)}</a></article>`
          )
          .join('')
    );
  }
  if (!items.length && !news.length && !entry.blocker) {
    parts.push(`<p class="ss-empty">暫無 ${escapeHtml(sourceLabel)} 資料</p>`);
  }
  return parts.join('') || `<p class="ss-empty">暫無資料</p>`;
}

/**
 * Mount a tabbed thread under a stock card.
 */
export function mountTickerComments(mountEl, ticker, options = {}) {
  if (!mountEl || !ticker) return { ok: false };

  const cfg = options.config || globalThis.STOCK_SOCIAL_CONFIG || {};
  const digest = options.digest || null;
  const market = inferMarket(
    ticker,
    options.market || mountEl.getAttribute('data-market')
  );
  const sourceTabs = tabsForMarket(market);
  const { url, anon } = readSupabaseConfig(cfg);
  const maxLen = cfg.commentMaxLen || 500;
  const cooldown = cfg.postCooldownMs || 4000;
  const openAttr = preferOpenDetails() ? ' open' : '';

  const tabBtns = sourceTabs
    .map(
      (t, i) =>
        `<button type="button" class="ss-src-tab${i === 0 ? ' active' : ''}" data-src="${t.id}" role="tab" aria-selected="${
          i === 0 ? 'true' : 'false'
        }">${t.label}</button>`
    )
    .join('');

  const externalPanels = sourceTabs
    .filter((t) => t.id !== 'local')
    .map(
      (t) =>
        `<div class="ss-src-panel" data-panel="${t.id}" role="tabpanel" hidden></div>`
    )
    .join('');

  mountEl.classList.add('ss-thread');
  mountEl.dataset.market = market;
  mountEl.innerHTML = `
    <details class="ss-thread-details"${openAttr}>
      <summary>討論 ${escapeHtml(ticker)}（${market === 'TW' ? '台股來源' : '美股來源'}）</summary>
      <div class="ss-src-tabs" role="tablist" aria-label="${escapeHtml(ticker)} 來源">${tabBtns}</div>
      <div class="ss-src-panels">
        <div class="ss-src-panel active" data-panel="local" role="tabpanel">
          <div class="ss-thread-status"></div>
          <form class="ss-thread-form">
            <input class="ss-nick" maxlength="24" placeholder="暱稱（可空＝訪客）" autocomplete="nickname" />
            <textarea class="ss-body" maxlength="${maxLen}" rows="2" placeholder="匿名留言（最多 ${maxLen} 字，無需登入）" required></textarea>
            <button type="submit">送出</button>
          </form>
          <ul class="ss-thread-list"></ul>
        </div>
        ${externalPanels}
      </div>
    </details>
  `;

  const status = mountEl.querySelector('.ss-thread-status');
  const list = mountEl.querySelector('.ss-thread-list');
  const form = mountEl.querySelector('.ss-thread-form');

  const mapping = {
    ptt: ['ptt', 'PTT', false],
    dcard: ['dcard', 'Dcard', false],
    threads: ['threads', 'Threads', false],
    reddit: ['reddit', 'Reddit', false],
    futu: ['futu', '富途', true],
  };
  for (const tab of sourceTabs) {
    if (tab.id === 'local') continue;
    const meta = mapping[tab.id];
    if (!meta) continue;
    const [key, label, futuMode] = meta;
    const panel = mountEl.querySelector(`[data-panel="${tab.id}"]`);
    if (panel) {
      panel.innerHTML = renderExternalPanel(
        findTickerEntry(digest, key, ticker),
        label,
        { futuMode }
      );
    }
  }

  const tabs = mountEl.querySelectorAll('.ss-src-tab');
  const panels = mountEl.querySelectorAll('.ss-src-panel');
  tabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.src;
      tabs.forEach((b) => {
        const on = b.dataset.src === id;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach((p) => {
        const on = p.dataset.panel === id;
        p.classList.toggle('active', on);
        p.hidden = !on;
      });
    });
  });

  if (!url || !anon) {
    status.textContent =
      BACKEND_MSG + '（需 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY；見 README）。UI 已就緒，匿名發言尚未接通。';
    status.className = 'ss-thread-status is-warn';
    form.querySelectorAll('input,textarea,button').forEach((el) => {
      el.disabled = true;
    });
    const srcHint =
      market === 'TW'
        ? '可切換上方分頁看 PTT／Dcard／Threads 摘要'
        : '可切換上方分頁看 Reddit／富途摘要';
    list.innerHTML = `<li class="ss-empty">本站匿名留言需 Supabase anon INSERT（RLS）。不會假裝送出後丟掉。${srcHint}；全站 Giscus 需 GitHub 登入，僅作備援。</li>`;
    return { ok: false, reason: 'no-config', market };
  }

  const client = createCommentsClient(url, anon);
  status.textContent = '開放匿名討論（無需登入，請保持友善）';
  let cooling = false;

  async function refresh() {
    try {
      const rows = await client.list(ticker);
      if (!rows.length) {
        list.innerHTML = '<li class="ss-empty">尚無留言，來當第一個吧。</li>';
        return;
      }
      list.innerHTML = rows
        .map(
          (r) =>
            `<li><strong>${escapeHtml(r.nickname)}</strong> ${escapeHtml(
              r.body
            )}<span class="meta">${escapeHtml(
              new Date(r.created_at).toLocaleString('zh-TW', { hour12: false })
            )}</span></li>`
        )
        .join('');
    } catch (e) {
      status.textContent = `讀取失敗：${e.message}`;
      status.className = 'ss-thread-status is-warn';
    }
  }

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (cooling) return;
    const nickname =
      (form.querySelector('.ss-nick').value || '訪客').trim().slice(0, 24) || '訪客';
    const body = (form.querySelector('.ss-body').value || '').trim().slice(0, maxLen);
    if (!body) return;
    cooling = true;
    const btn = form.querySelector('button');
    btn.disabled = true;
    try {
      await client.insert({ ticker, body, nickname });
      form.querySelector('.ss-body').value = '';
      await refresh();
    } catch (e) {
      status.textContent = `發送失敗：${e.message}`;
      status.className = 'ss-thread-status is-warn';
    } finally {
      window.setTimeout(() => {
        cooling = false;
        btn.disabled = false;
      }, cooldown);
    }
  });

  refresh();
  const poll = window.setInterval(refresh, cfg.pollIntervalMs || 10000);
  return {
    ok: true,
    market,
    destroy() {
      window.clearInterval(poll);
    },
  };
}

export function mountAllTickerComments(root = document, options = {}) {
  const nodes = root.querySelectorAll('[data-ticker-comments]');
  const handles = [];
  nodes.forEach((el) => {
    const ticker = el.getAttribute('data-ticker-comments') || el.dataset.ticker;
    const market = el.getAttribute('data-market') || undefined;
    if (ticker) handles.push(mountTickerComments(el, ticker, { ...options, market }));
  });
  return handles;
}

export function mountGiscus(slot, g) {
  if (!slot || !g) return;
  if (slot.querySelector('script[data-giscus], iframe.giscus-frame')) return;
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.setAttribute('data-giscus', '1');
  script.setAttribute('data-repo', g.repo || '');
  script.setAttribute('data-repo-id', g.repoId || '');
  script.setAttribute('data-category', g.category || 'General');
  script.setAttribute('data-category-id', g.categoryId || '');
  script.setAttribute('data-mapping', g.mapping === 'pathname' ? 'pathname' : 'specific');
  script.setAttribute('data-term', g.term || 'site-discussion');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'bottom');
  script.setAttribute('data-theme', g.theme || 'dark');
  script.setAttribute('data-lang', g.lang || 'zh-TW');
  slot.appendChild(script);
}

export function initSiteGiscus(selector = '#ss-giscus', options = {}) {
  const el = document.querySelector(selector);
  if (!el) return { ok: false, reason: 'missing' };
  const cfg = options.config || globalThis.STOCK_SOCIAL_CONFIG || {};
  const g = cfg.giscus || {};
  if (!g.enabled || !g.repoId || !g.categoryId) {
    el.innerHTML =
      '<p class="ss-chat-status is-warn">Giscus 尚未設定（需 repoId / categoryId）。請見 README。</p>';
    return { ok: false, reason: 'no-config' };
  }
  const host = el.querySelector('.ss-giscus-host') || el;
  mountGiscus(host, { ...g, term: g.term || 'site-discussion' });
  return { ok: true };
}
