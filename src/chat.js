import { t, numberLocale } from './i18n.js';
import { isDanmakuEnabled } from './danmaku.js';

/**
 * Messenger-style chat room (LINE / Messenger / Telegram patterns).
 * Bubbles, sticky composer, US/TW market lobby rooms.
 * Posts/reads via Supabase comments table (anon).
 */

const NICK_KEY = 'ss-chat-nick';
const BACKEND_MSG = () => t('backendOff');

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

function loadNick() {
  try {
    return String(localStorage.getItem(NICK_KEY) || '').trim().slice(0, 24);
  } catch {
    return '';
  }
}

function saveNick(nick) {
  try {
    const v = String(nick || '').trim().slice(0, 24);
    if (v) localStorage.setItem(NICK_KEY, v);
    else localStorage.removeItem(NICK_KEY);
  } catch {
    /* ignore */
  }
}

function isOwnMessage(nickname, localNick) {
  const a = String(nickname || '').trim().toLowerCase();
  const b = String(localNick || '').trim().toLowerCase();
  if (!a || !b) return false;
  return a === b;
}

function formatTime(iso) {
  try {
    const d = new Date(iso);
    const now = new Date();
    const sameDay =
      d.getFullYear() === now.getFullYear() &&
      d.getMonth() === now.getMonth() &&
      d.getDate() === now.getDate();
    if (sameDay) {
      return d.toLocaleTimeString(numberLocale(), {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
    }
    return d.toLocaleString(numberLocale(), {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  } catch {
    return '';
  }
}

function createCommentsClient(url, key) {
  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  };
  return {
    async list(ticker, limit = 80) {
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
        const txt = await res.text();
        throw new Error(`comments insert ${res.status}: ${txt}`);
      }
      return res.json();
    },
  };
}

function sendIconSvg() {
  return `<svg class="chat-send-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.4 20.4 20.85 12 3.4 3.6l.1 6.55L14.5 12 3.5 13.85l-.1 6.55z"/></svg>`;
}

/**
 * Mount a full messenger-style room into mountEl.
 */
export function mountChatRoom(mountEl, ticker, options = {}) {
  if (!mountEl || !ticker) return { ok: false, destroy() {} };

  const cfg = options.config || globalThis.STOCK_SOCIAL_CONFIG || {};
  const market = String(options.market || 'US').toUpperCase() === 'TW' ? 'TW' : 'US';
  const { url, anon } = readSupabaseConfig(cfg);
  const maxLen = Math.min(cfg.commentMaxLen || 500, options.maxLen || 200);
  const cooldown = cfg.postCooldownMs || 4000;
  const title = options.title || ticker;
  const emptyLine = options.emptyLine || t('noMessages');
  const layer =
    options.danmakuLayer || document.querySelector('#ss-danmaku-layer');
  const flyEnabled = () => isDanmakuEnabled();

  mountEl.classList.add('chat-panel');
  mountEl.dataset.market = market;
  mountEl.dataset.ticker = ticker;
  mountEl.setAttribute('role', 'region');
  mountEl.setAttribute('aria-label', title);

  const savedNick = loadNick();

  mountEl.innerHTML = `
    <div class="chat-status" aria-live="polite"></div>
    <div class="chat-messages" role="log" aria-label="${escapeHtml(t('messages'))}" tabindex="0"></div>
    <form class="chat-composer" autocomplete="off">
      <div class="chat-nick-row">
        <label class="chat-nick-label" for="chat-nick-input">${escapeHtml(t('nickLabel'))}</label>
        <input id="chat-nick-input" class="chat-nick" maxlength="24" placeholder="${escapeHtml(
          t('nickPlaceholder')
        )}" value="${escapeHtml(savedNick)}" autocomplete="nickname" />
      </div>
      <div class="chat-compose-row">
        <input class="chat-body" type="text" maxlength="${maxLen}" placeholder="${escapeHtml(
          t('commentInput')
        )}" required autocomplete="off" enterkeyhint="send" />
        <button type="submit" class="chat-send" aria-label="${escapeHtml(t('send'))}" title="${escapeHtml(
          t('send')
        )}">${sendIconSvg()}<span class="chat-send-text">${escapeHtml(t('send'))}</span></button>
      </div>
    </form>
  `;

  const status = mountEl.querySelector('.chat-status');
  const list = mountEl.querySelector('.chat-messages');
  const form = mountEl.querySelector('.chat-composer');
  const nickInput = form.querySelector('.chat-nick');
  const bodyInput = form.querySelector('.chat-body');
  const sendBtn = form.querySelector('.chat-send');
  let lastSeen = new Set();
  let cooling = false;
  let destroyed = false;

  function spawnFly(text) {
    if (!layer || !flyEnabled()) return;
    const el = document.createElement('div');
    el.className = 'ss-danmaku-item';
    el.textContent = text;
    el.style.top = `${8 + Math.random() * 42}vh`;
    el.style.animationDuration = '12000ms';
    layer.appendChild(el);
    window.setTimeout(() => el.remove(), 12200);
  }

  function scrollToBottom(force = false) {
    const nearBottom =
      list.scrollHeight - list.scrollTop - list.clientHeight < 120;
    if (force || nearBottom) {
      list.scrollTop = list.scrollHeight;
    }
  }

  function renderRows(rows) {
    const localNick = (nickInput.value || loadNick() || '').trim();
    if (!rows.length) {
      list.innerHTML = `<div class="chat-empty-state"><p>${escapeHtml(emptyLine)}</p></div>`;
      return;
    }
    list.innerHTML = rows
      .map((r) => {
        const own = isOwnMessage(r.nickname, localNick);
        const side = own ? 'own' : 'other';
        const nick = escapeHtml(r.nickname || t('guest'));
        const body = escapeHtml(r.body || '');
        const time = escapeHtml(formatTime(r.created_at));
        return `<article class="chat-bubble chat-bubble--${side}" data-id="${escapeHtml(
          r.id
        )}">
          ${own ? '' : `<div class="chat-bubble-nick">${nick}</div>`}
          <div class="chat-bubble-body">${body}</div>
          <div class="chat-bubble-meta">${time}</div>
        </article>`;
      })
      .join('');
  }

  if (!url || !anon) {
    status.textContent = BACKEND_MSG();
    status.classList.add('is-warn');
    form.querySelectorAll('input,button').forEach((el) => {
      el.disabled = true;
    });
    list.innerHTML = `<div class="chat-empty-state"><p>${escapeHtml(emptyLine)}</p></div>`;
    return { ok: false, reason: 'no-config', market, destroy() {} };
  }

  const client = createCommentsClient(url, anon);
  status.textContent = '';
  status.classList.remove('is-warn');

  async function refresh(spawnNew = false, forceScroll = false) {
    if (destroyed) return;
    try {
      const rows = await client.list(ticker, 80);
      renderRows(rows);
      scrollToBottom(forceScroll || !lastSeen.size);
      for (const r of rows) {
        if (lastSeen.has(r.id)) continue;
        lastSeen.add(r.id);
        if (spawnNew) spawnFly(`${r.nickname}: ${r.body}`);
      }
      if (lastSeen.size > 200) lastSeen = new Set([...lastSeen].slice(-100));
      if (status.classList.contains('is-warn') && status.textContent === BACKEND_MSG()) {
        status.textContent = '';
        status.classList.remove('is-warn');
      }
    } catch (e) {
      status.textContent = BACKEND_MSG();
      status.classList.add('is-warn');
    }
  }

  nickInput.addEventListener('change', () => {
    saveNick(nickInput.value);
    // Re-align bubbles if nick changed
    const articles = list.querySelectorAll('.chat-bubble');
    if (articles.length) {
      refresh(false, false);
    }
  });
  nickInput.addEventListener('blur', () => saveNick(nickInput.value));

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (cooling) return;
    const nickname =
      (nickInput.value || t('guest')).trim().slice(0, 24) || t('guest');
    saveNick(nickInput.value);
    const body = (bodyInput.value || '').trim().slice(0, maxLen);
    if (!body) return;
    cooling = true;
    sendBtn.disabled = true;
    try {
      await client.insert({ ticker, body, nickname });
      bodyInput.value = '';
      await refresh(true, true);
      bodyInput.focus();
    } catch (e) {
      status.textContent = t('sendFailShort');
      status.classList.add('is-warn');
    } finally {
      window.setTimeout(() => {
        cooling = false;
        sendBtn.disabled = false;
      }, cooldown);
    }
  });

  // Enter sends (input type=text already does via form submit);
  // prevent accidental newline if ever swapped to textarea
  bodyInput.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      ev.preventDefault();
      form.requestSubmit();
    }
  });

  refresh(false, true);
  const poll = window.setInterval(() => refresh(true, false), cfg.pollIntervalMs || 8000);

  return {
    ok: true,
    market,
    ticker,
    destroy() {
      destroyed = true;
      window.clearInterval(poll);
    },
  };
}

/** @deprecated alias — prefer mountChatRoom */
export function mountTickerRoom(mountEl, ticker, options = {}) {
  return mountChatRoom(mountEl, ticker, options);
}
