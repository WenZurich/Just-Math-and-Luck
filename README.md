# Just Math & Luck

A tiny web game where **math skill earns points** and a **lucky dice roll multiplies them**.
Solve an arithmetic problem correctly to earn base points, then the server rolls a
six-sided luck die — your points for the round are `base × roll`.

## Stack

- **Frontend:** [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- **Backend:** [Express](https://expressjs.com) (TypeScript, run with [`tsx`](https://tsx.is))
- **Shared game logic:** `shared/game.ts`, unit-tested with [Vitest](https://vitest.dev)

The Vite dev server proxies `/api` requests to the Express API, so the two run
side by side in development.

## Getting started

```bash
npm install       # install dependencies
npm run dev        # start API (port 3001) + Vite dev server (port 5173)
```

Then open http://localhost:5173.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run the API and the Vite dev server together |
| `npm run dev:server` | Run only the Express API (`tsx watch`) |
| `npm run dev:client` | Run only the Vite dev server |
| `npm run lint` | Lint with ESLint |
| `npm run typecheck` | Type-check with `tsc` |
| `npm test` | Run the Vitest unit tests |
| `npm run build` | Type-check and build the client to `dist/` |
| `npm start` | Serve the built client from the Express server (production) |

## API

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Liveness check |
| `GET` | `/api/problem?difficulty=easy\|medium\|hard` | Get a new problem (`id`, `prompt`, `difficulty`) |
| `POST` | `/api/answer` | Body `{ id, answer }` → grades the answer and rolls luck |

The answer to a problem is kept server-side and never sent to the client; the
client submits the problem `id` and its answer, and the server grades it.
