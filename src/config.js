/**
 * Social / chat config.
 *
 * PRIMARY (anonymous, no login): Supabase anon INSERT via RLS
 *   - Set VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY at build time, OR
 *   - Fill supabaseUrl / supabaseAnonKey below (anon key only — never service_role).
 *   - Run supabase-schema.sql in Supabase SQL Editor first.
 *
 * FALLBACK (requires GitHub login): Giscus — already wired when enabled.
 *
 * Without Supabase keys: UI stays visible, forms disabled, shows「聊天後端尚未接上」.
 * Do NOT fake a backend that silently drops posts.
 */
const config = {
  supabaseUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || "https://whlpzhceivahkuanmmui.supabase.co",
  supabaseAnonKey:
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobHB6aGNlaXZhaGt1YW5tbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0OTE0NDYsImV4cCI6MjEwNTA2NzQ0Nn0.r099L2Eai86nq12Tft0R-QRynz1Dd7UdJHTZ08A1J3Q",

  giscus: {
    enabled: true,
    repo: 'WenZurich/Just-Math-and-Luck-',
    repoId: 'R_kgDOUcO78Q',
    category: 'General',
    categoryId: 'DIC_kwDOUcO78c4DFrWU',
    mapping: 'specific',
    theme: 'dark',
    lang: 'zh-TW',
    perTicker: false,
  },

  socialDigestUrl: './data/social-digest.json',
  latestUrl: './data/latest.json',
  danmakuMaxLen: 80,
  commentMaxLen: 500,
  pollIntervalMs: 8000,
  postCooldownMs: 4000,
};

globalThis.STOCK_SOCIAL_CONFIG = Object.assign(
  globalThis.STOCK_SOCIAL_CONFIG || {},
  config
);

export default config;
