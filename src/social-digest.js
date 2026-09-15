/**
 * Render daily social digest (Reddit + 富途 + PTT + Dcard + Threads).
 * Read-only — works offline / without Supabase. Never invents items.
 */

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function itemCard(it) {
  const score =
    it.score != null ? `<span class="ss-score">▲ ${escapeHtml(it.score)}</span>` : '';
  const author = it.author ? `@${escapeHtml(it.author)}` : '';
  const when = it.created
    ? escapeHtml(new Date(it.created).toLocaleString('zh-TW', { hour12: false }))
    : '';
  const url = it.url ? escapeHtml(it.url) : '#';
  return `<article class="ss-digest-item">
    <a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(
      it.snippet || it.title || '(無摘要)'
    )}</a>
    <div class="ss-digest-meta">${score} ${author} ${when}</div>
  </article>`;
}

function tickerBlock(entry, kindLabel) {
  const blocker = entry.blocker
    ? `<p class="ss-digest-blocker">⚠ ${escapeHtml(entry.blocker)}</p>`
    : '';
  const commentItems = entry.items || [];
  const news = entry.newsRelated || [];
  let body = '';
  if (commentItems.length) {
    body += commentItems.map(itemCard).join('');
  }
  if (news.length) {
    body += `<p class="ss-digest-sub">相關公開新聞（非社群評論）</p>` + news.map(itemCard).join('');
  }
  if (!body) {
    body = `<p class="ss-empty">此標的暫無${escapeHtml(kindLabel)}資料</p>`;
  }
  return `<section class="ss-digest-ticker" data-ticker="${escapeHtml(entry.ticker)}">
    <h4>${escapeHtml(entry.ticker)}</h4>
    ${blocker}
    ${body}
  </section>`;
}

function col(title, rows, kindLabel) {
  const body = (rows || []).map((e) => tickerBlock(e, kindLabel)).join('');
  return `<div>
    <h4 class="ss-digest-col-title">${escapeHtml(title)}</h4>
    ${body || `<p class="ss-empty">無 ${escapeHtml(title)} 區塊</p>`}
  </div>`;
}

export async function loadSocialDigest(url) {
  const cfg = globalThis.STOCK_SOCIAL_CONFIG || {};
  const src = url || cfg.socialDigestUrl || './data/social-digest.json';
  const res = await fetch(src, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`social-digest ${res.status}`);
  return res.json();
}

export function renderSocialDigest(data, mountEl) {
  if (!mountEl) return;
  const asOf = data.asOf
    ? new Date(data.asOf).toLocaleString('zh-TW', { hour12: false })
    : '—';
  const notes = (data.notes || []).map((n) => `<li>${escapeHtml(n)}</li>`).join('');

  mountEl.innerHTML = `
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>今日社交摘要</h3>
        <p class="ss-digest-asof">資料時間：${escapeHtml(asOf)}</p>
        ${notes ? `<ul class="ss-digest-notes">${notes}</ul>` : ''}
      </header>
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${col('PTT', data.ptt, 'PTT')}
        ${col('Dcard', data.dcard, 'Dcard')}
        ${col('Threads', data.threads, 'Threads')}
        ${col('Reddit', data.reddit, 'Reddit')}
        ${col('富途牛牛', data.futu, '富途')}
      </div>
    </div>
  `;
}

export async function initSocialDigest(selector = '#ss-social-digest', url) {
  const el = document.querySelector(selector);
  if (!el) return { ok: false };
  try {
    const data = await loadSocialDigest(url);
    renderSocialDigest(data, el);
    return { ok: true, data };
  } catch (e) {
    el.innerHTML = `<p class="ss-digest-blocker">社交摘要尚未產生或讀取失敗：${escapeHtml(
      e.message
    )}</p>`;
    return { ok: false, error: e };
  }
}
