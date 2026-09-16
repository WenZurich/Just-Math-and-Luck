import { t, numberLocale } from './i18n.js';
/**
 * Render daily social digest with US vs TW source split.
 * US: Reddit + 富途；TW: PTT + Dcard + Threads.
 * Market tabs hide the other market's sources. Never invents items.
 */

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function manualLinks(entry) {
  const urls = entry.manualUrls || [];
  if (!urls.length) return '';
  return (
    `<p class="ss-digest-sub">${escapeHtml(t('manualOpen'))}</p>` +
    urls
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

function itemCard(it) {
  const score =
    it.score != null ? `<span class="ss-score">▲ ${escapeHtml(it.score)}</span>` : '';
  const author = it.author ? `@${escapeHtml(it.author)}` : '';
  const when = it.created
    ? escapeHtml(new Date(it.created).toLocaleString(numberLocale(), { hour12: false }))
    : it.date
      ? escapeHtml(it.date)
      : '';
  const via = it.via ? `<span class="ss-via">${escapeHtml(it.via)}</span>` : '';
  const url = it.url ? escapeHtml(it.url) : '#';
  return `<article class="ss-digest-item">
    <a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(
      it.snippet || it.title || t('noSnippet')
    )}</a>
    <div class="ss-digest-meta">${score} ${author} ${when} ${via}</div>
  </article>`;
}

function tickerBlock(entry, kindLabel, { futuMode = false } = {}) {
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
    const newsTitle = futuMode
      ? t('newsClues')
      : t('relatedNews');
    body += `<p class="ss-digest-sub">${newsTitle}</p>` + news.map(itemCard).join('');
  }
  if (!commentItems.length && entry.manualUrls?.length) {
    body += manualLinks(entry);
  }
  if (!body) {
    body = `<p class="ss-empty">${escapeHtml(t("noTickerData", { kind: kindLabel }))}</p>`;
  }
  const viaNote =
    entry.via && entry.via !== 'reddit.com'
      ? `<p class="ss-digest-via-note">${escapeHtml(t("viaBackup", { via: entry.via }))}</p>`
      : '';
  return `<section class="ss-digest-ticker" data-ticker="${escapeHtml(entry.ticker)}">
    <h4>${escapeHtml(entry.ticker)}</h4>
    ${blocker}
    ${viaNote}
    ${body}
  </section>`;
}

function col(title, rows, kindLabel, opts = {}) {
  const body = (rows || []).map((e) => tickerBlock(e, kindLabel, opts)).join('');
  return `<div class="ss-digest-col">
    <h4 class="ss-digest-col-title">${escapeHtml(title)}</h4>
    ${body || `<p class="ss-empty">${escapeHtml(t("noDigestBlock", { title }))}</p>`}
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
    ? new Date(data.asOf).toLocaleString(numberLocale(), { hour12: false })
    : '—';
  const notes = (data.notes || []).map((n) => `<li>${escapeHtml(n)}</li>`).join('');
  const routing =
    data.routing
      ? `<p class="ss-digest-routing">${escapeHtml(t("routingNote"))}</p>`
      : '';

  const usPanel = `
    <div class="ss-digest-market" data-market-panel="US">
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${col('Reddit', data.reddit, 'Reddit')}
        ${col(t('futuFull'), data.futu, t('futu'), { futuMode: true })}
      </div>
    </div>`;
  const twPanel = `
    <div class="ss-digest-market" data-market-panel="TW" hidden>
      <div class="ss-digest-cols ss-digest-cols-multi">
        ${col('PTT', data.ptt, 'PTT')}
        ${col('Dcard', data.dcard, 'Dcard')}
        ${col('Threads', data.threads, 'Threads')}
      </div>
    </div>`;

  const usCount = (data.reddit || []).length || (data.futu || []).length;
  const twCount = (data.ptt || []).length || (data.dcard || []).length || (data.threads || []).length;
  const defaultMarket = usCount ? 'US' : twCount ? 'TW' : 'US';

  mountEl.innerHTML = `
    <div class="ss-digest">
      <header class="ss-digest-head">
        <h3>${escapeHtml(t("externalDigestShort"))}</h3>
        <p class="ss-digest-asof">${escapeHtml(asOf)}</p>
      </header>
      <div class="ss-digest-market-tabs" role="tablist" aria-label="${escapeHtml(t("socialDigestMarket"))}">
        <button type="button" class="ss-mkt-tab${defaultMarket === 'US' ? ' active' : ''}" data-market="US" role="tab" aria-selected="${defaultMarket === 'US'}">${escapeHtml(t("socialUsTab"))}</button>
        <button type="button" class="ss-mkt-tab${defaultMarket === 'TW' ? ' active' : ''}" data-market="TW" role="tab" aria-selected="${defaultMarket === 'TW'}">${escapeHtml(t("socialTwTab"))}</button>
      </div>
      ${usPanel}
      ${twPanel}
    </div>
  `;

  // Apply default visibility
  mountEl.querySelectorAll('[data-market-panel]').forEach((p) => {
    const on = p.getAttribute('data-market-panel') === defaultMarket;
    p.hidden = !on;
  });

  const tabs = mountEl.querySelectorAll('.ss-mkt-tab');
  tabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      const market = btn.getAttribute('data-market');
      tabs.forEach((b) => {
        const on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      mountEl.querySelectorAll('[data-market-panel]').forEach((p) => {
        p.hidden = p.getAttribute('data-market-panel') !== market;
      });
    });
  });
}

export async function initSocialDigest(selector = '#ss-social-digest', url) {
  const el = document.querySelector(selector);
  if (!el) return { ok: false };
  try {
    const data = await loadSocialDigest(url);
    renderSocialDigest(data, el);
    return { ok: true, data };
  } catch (e) {
    el.innerHTML = `<p class="ss-digest-blocker">${escapeHtml(
      t("socialLoadFail", { msg: e.message })
    )}</p>`;
    return { ok: false, error: e };
  }
}
