-- =============================================================================
-- stock-social-prep · Supabase schema for GitHub Pages (anon + RLS)
-- Tables: danmaku (global floating chat), comments (per-ticker threads)
-- Run in Supabase SQL Editor. Then copy Project URL + anon key into CONFIG.js
-- =============================================================================

-- Optional: ensure uuid generation
create extension if not exists "pgcrypto";

-- -----------------------------------------------------------------------------
-- danmaku: short global messages that float across the screen
-- -----------------------------------------------------------------------------
create table if not exists public.danmaku (
  id uuid primary key default gen_random_uuid(),
  body text not null,
  nickname text not null default '訪客',
  created_at timestamptz not null default now(),
  constraint danmaku_body_len check (char_length(btrim(body)) between 1 and 80),
  constraint danmaku_nickname_len check (char_length(btrim(nickname)) between 1 and 24)
);

create index if not exists danmaku_created_at_idx on public.danmaku (created_at desc);

-- -----------------------------------------------------------------------------
-- comments: per-ticker discussion under Top5 / stock cards
-- ticker examples: "CRWD", "ZS", "2468.TW"
-- -----------------------------------------------------------------------------
create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  ticker text not null,
  body text not null,
  nickname text not null default '訪客',
  created_at timestamptz not null default now(),
  constraint comments_ticker_len check (char_length(btrim(ticker)) between 1 and 16),
  constraint comments_body_len check (char_length(btrim(body)) between 1 and 500),
  constraint comments_nickname_len check (char_length(btrim(nickname)) between 1 and 24)
);

create index if not exists comments_ticker_created_idx
  on public.comments (ticker, created_at desc);

-- -----------------------------------------------------------------------------
-- RLS: anon can SELECT + INSERT; no UPDATE/DELETE for public clients
-- -----------------------------------------------------------------------------
alter table public.danmaku enable row level security;
alter table public.comments enable row level security;

-- Drop policies if re-running
drop policy if exists "danmaku_select_anon" on public.danmaku;
drop policy if exists "danmaku_insert_anon" on public.danmaku;
drop policy if exists "comments_select_anon" on public.comments;
drop policy if exists "comments_insert_anon" on public.comments;

create policy "danmaku_select_anon"
  on public.danmaku for select
  to anon, authenticated
  using (true);

create policy "danmaku_insert_anon"
  on public.danmaku for insert
  to anon, authenticated
  with check (
    char_length(btrim(body)) between 1 and 80
    and char_length(btrim(nickname)) between 1 and 24
  );

create policy "comments_select_anon"
  on public.comments for select
  to anon, authenticated
  using (true);

create policy "comments_insert_anon"
  on public.comments for insert
  to anon, authenticated
  with check (
    char_length(btrim(ticker)) between 1 and 16
    and char_length(btrim(body)) between 1 and 500
    and char_length(btrim(nickname)) between 1 and 24
  );

-- -----------------------------------------------------------------------------
-- Optional soft rate-limit note (application-level is primary):
-- Supabase free tier + RLS cannot easily enforce per-IP limits without Edge
-- Functions. Recommended approach:
--   1) Client: disable send button 3–5s after post; debounce.
--   2) Edge Function or Database Webhook for abuse.
--   3) Optional: pg_cron cleanup of rows older than 7 days.
-- Example cleanup (run manually or schedule):
--   delete from public.danmaku where created_at < now() - interval '7 days';
--   delete from public.comments where created_at < now() - interval '30 days';
-- -----------------------------------------------------------------------------

-- Grant usage (Supabase usually has these; safe to re-run)
grant usage on schema public to anon, authenticated;
grant select, insert on public.danmaku to anon, authenticated;
grant select, insert on public.comments to anon, authenticated;
