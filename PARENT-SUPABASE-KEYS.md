# Parent：匿名聊天需要 Supabase anon key

訪客要**不登入**就能發彈幕／個股留言，必須提供：

1. `VITE_SUPABASE_URL`（例如 `https://xxxx.supabase.co`）
2. `VITE_SUPABASE_ANON_KEY`（anon public key，不是 service_role）

步驟：

1. 建立 Supabase 專案
2. SQL Editor 執行本 repo 的 `supabase-schema.sql`（danmaku + comments + RLS：anon SELECT/INSERT）
3. 把 URL／anon key 設成建置環境變數，或寫進 `src/config.js` 後重新 `npm run build` → 同步 `docs/` → push

目前環境**沒有**現成 Supabase 金鑰，因此 UI 已上線但發言鈕會停用並顯示「聊天後端尚未接上」。  
Giscus（需 GitHub 登入）僅備援，**不能**取代匿名主路徑。

本環境也無法在「沒有 secrets」的前提下新建可用的公開寫入後端；請勿要求假後端假裝送出。
