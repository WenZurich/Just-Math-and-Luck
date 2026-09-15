/**
 * Global 彈幕 + chat list.
 * Works when STOCK_SOCIAL_CONFIG / VITE_SUPABASE_* present;
 * otherwise shows friendly「聊天後端尚未接上」and keeps UI read-only.
 */

const BACKEND_MSG = '聊天後端尚未接上';

function readSupabaseConfig(cfg = globalThis.STOCK_SOCIAL_CONFIG || {}) {
  const env =
    typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {};
  const url = String(cfg.supabaseUrl || env.VITE_SUPABASE_URL || '').trim();
  const anon = String(cfg.supabaseAnonKey || env.VITE_SUPABASE_ANON_KEY || '').trim();
  return { url, anon };
}

function $(sel, root = document) {
  return root.querySelector(sel);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function createClient(url, key) {
  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  };
  return {
    async select(limit = 40) {
      const u = `${url}/rest/v1/danmaku?select=*&order=created_at.desc&limit=${limit}`;
      const res = await fetch(u, { headers });
      if (!res.ok) throw new Error(`danmaku select ${res.status}`);
      return res.json();
    },
    async insert(row) {
      const res = await fetch(`${url}/rest/v1/danmaku`, {
        method: 'POST',
        headers,
        body: JSON.stringify(row),
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(`danmaku insert ${res.status}: ${t}`);
      }
      return res.json();
    },
  };
}

function spawnDanmaku(layer, text, durationMs = 12000) {
  if (!layer) return;
  const el = document.createElement('div');
  el.className = 'ss-danmaku-item';
  el.textContent = text;
  el.style.top = `${8 + Math.random() * 42}vh`;
  el.style.animationDuration = `${durationMs}ms`;
  layer.appendChild(el);
  window.setTimeout(() => el.remove(), durationMs + 200);
}

export function initDanmaku(options = {}) {
  const root = options.root || document;
  const panel = $(options.panelSelector || '#ss-danmaku-panel', root);
  const layer = $(options.layerSelector || '#ss-danmaku-layer', root);
  if (!panel) return { ok: false, reason: 'panel missing' };

  const cfg = options.config || globalThis.STOCK_SOCIAL_CONFIG || {};
  const { url, anon } = readSupabaseConfig(cfg);
  let status = $('.ss-chat-status', panel);
  if (!status) {
    status = document.createElement('div');
    status.className = 'ss-chat-status';
    panel.insertBefore(status, panel.firstChild);
  }
  const list = $('.ss-chat-list', panel);
  const form = $('.ss-chat-form', panel);
  const nickInput = form && form.querySelector('.ss-nick');
  const bodyInput = form && form.querySelector('.ss-body');
  const sendBtn = form && form.querySelector('button[type="submit"]');

  const maxLen = cfg.danmakuMaxLen || 80;
  const cooldown = cfg.postCooldownMs || 4000;
  let lastSeen = new Set();
  let client = null;
  let cooling = false;

  if (!url || !anon) {
    status.textContent = BACKEND_MSG + '（請設定 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY）';
    status.classList.add('is-warn');
    if (form) {
      form.querySelectorAll('input,button').forEach((el) => {
        el.disabled = true;
      });
    }
    if (list) {
      list.innerHTML =
        '<li><span class="nick">系統</span>後端未接上時仍可瀏覽下方 Reddit／富途摘要。</li>';
    }
    return { ok: false, reason: 'no-config', message: BACKEND_MSG };
  }

  client = createClient(url, anon);
  status.textContent = '彈幕已連線（公開發言，請保持友善）';
  status.classList.remove('is-warn');

  async function refresh(spawnNew = true) {
    try {
      const rows = await client.select(40);
      const chronological = [...rows].reverse();
      if (list) {
        list.innerHTML = chronological
          .map(
            (r) =>
              `<li><span class="nick">${escapeHtml(r.nickname)}</span>${escapeHtml(
                r.body
              )}<span class="meta">${escapeHtml(
                new Date(r.created_at).toLocaleString('zh-TW', { hour12: false })
              )}</span></li>`
          )
          .join('');
        list.scrollTop = list.scrollHeight;
      }
      if (spawnNew) {
        for (const r of chronological) {
          if (lastSeen.has(r.id)) continue;
          lastSeen.add(r.id);
          spawnDanmaku(layer, `${r.nickname}: ${r.body}`);
        }
        if (lastSeen.size > 200) lastSeen = new Set([...lastSeen].slice(-100));
      } else {
        chronological.forEach((r) => lastSeen.add(r.id));
      }
    } catch (e) {
      status.textContent = `讀取失敗：${e.message}`;
      status.classList.add('is-warn');
    }
  }

  if (form) {
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      if (!client || cooling) return;
      const nickname = (nickInput?.value || '訪客').trim().slice(0, 24) || '訪客';
      const body = (bodyInput?.value || '').trim().slice(0, maxLen);
      if (!body) return;
      cooling = true;
      if (sendBtn) sendBtn.disabled = true;
      try {
        await client.insert({ body, nickname });
        if (bodyInput) bodyInput.value = '';
        await refresh(true);
      } catch (e) {
        status.textContent = `發送失敗：${e.message}`;
        status.classList.add('is-warn');
      } finally {
        window.setTimeout(() => {
          cooling = false;
          if (sendBtn) sendBtn.disabled = false;
        }, cooldown);
      }
    });
  }

  refresh(false).then(() => refresh(true));
  const poll = window.setInterval(() => refresh(true), cfg.pollIntervalMs || 8000);
  return {
    ok: true,
    destroy() {
      window.clearInterval(poll);
    },
  };
}

