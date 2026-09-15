import { fileURLToPath } from 'node:url';
import path from 'node:path';
import express from 'express';
import compression from 'compression';
import {
  createProblem,
  evaluateAnswer,
  isDifficulty,
  type Difficulty,
  type Problem,
} from '../shared/game.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = Number(process.env.SERVER_PORT ?? 3001);
const isProduction = process.env.NODE_ENV === 'production';

// In-memory store of active problems. The client never sees the answer; it
// submits the problem id back and the server evaluates it. Entries are removed
// once answered or when they expire.
interface StoredProblem {
  problem: Problem;
  createdAt: number;
}
const problems = new Map<string, StoredProblem>();
const PROBLEM_TTL_MS = 10 * 60 * 1000;

function pruneExpired(): void {
  const cutoff = Date.now() - PROBLEM_TTL_MS;
  for (const [id, entry] of problems) {
    if (entry.createdAt < cutoff) {
      problems.delete(id);
    }
  }
}

const app = express();
app.use(compression());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', activeProblems: problems.size });
});

app.get('/api/problem', (req, res) => {
  pruneExpired();
  const requested = req.query.difficulty;
  const difficulty: Difficulty = isDifficulty(requested) ? requested : 'easy';
  const problem = createProblem(difficulty);
  problems.set(problem.id, { problem, createdAt: Date.now() });

  res.json({
    id: problem.id,
    prompt: problem.prompt,
    difficulty: problem.difficulty,
  });
});

app.post('/api/answer', (req, res) => {
  const { id, answer } = req.body ?? {};

  if (typeof id !== 'string' || typeof answer !== 'number' || Number.isNaN(answer)) {
    res.status(400).json({ error: 'Expected { id: string, answer: number }.' });
    return;
  }

  const entry = problems.get(id);
  if (!entry) {
    res.status(404).json({ error: 'Unknown or expired problem id.' });
    return;
  }

  problems.delete(id);
  const result = evaluateAnswer(entry.problem, answer);
  res.json({ prompt: entry.problem.prompt, ...result });
});

if (isProduction) {
  const clientDir = path.resolve(__dirname, '..', 'dist');
  app.use(express.static(clientDir));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`[just-math-and-luck] API listening on http://localhost:${PORT}`);
});
