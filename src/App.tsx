import { useCallback, useEffect, useState } from 'react';
import type { Difficulty } from '../shared/game.ts';
import {
  fetchProblem,
  submitAnswer,
  type AnswerResponse,
  type ProblemResponse,
} from './api.ts';
import './App.css';

const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard'];
const DIE_FACES = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];

export default function App() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [problem, setProblem] = useState<ProblemResponse | null>(null);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState<AnswerResponse | null>(null);
  const [score, setScore] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProblem = useCallback(async (level: Difficulty) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setAnswer('');
    try {
      const next = await fetchProblem(level);
      setProblem(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadProblem(difficulty);
  }, [difficulty, loadProblem]);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!problem || answer.trim() === '') return;
    setLoading(true);
    setError(null);
    try {
      const outcome = await submitAnswer(problem.id, Number(answer));
      setResult(outcome);
      setRounds((r) => r + 1);
      if (outcome.correct) {
        setScore((s) => s + outcome.pointsAwarded);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <header className="hero">
        <h1>
          Just <span className="accent">Math</span> &amp;{' '}
          <span className="accent-luck">Luck</span>
        </h1>
        <p className="tagline">Solve the problem for points, then let the dice multiply them.</p>
      </header>

      <section className="scoreboard" aria-label="scoreboard">
        <div className="stat">
          <span className="stat-value">{score}</span>
          <span className="stat-label">Score</span>
        </div>
        <div className="stat">
          <span className="stat-value">{rounds}</span>
          <span className="stat-label">Rounds</span>
        </div>
      </section>

      <div className="difficulty" role="group" aria-label="difficulty">
        {DIFFICULTIES.map((level) => (
          <button
            key={level}
            type="button"
            className={level === difficulty ? 'chip chip-active' : 'chip'}
            onClick={() => setDifficulty(level)}
            disabled={loading}
          >
            {level}
          </button>
        ))}
      </div>

      <section className="card">
        {error && <p className="error">{error}</p>}

        <div className="prompt" aria-live="polite">
          {problem ? `${problem.prompt} = ?` : 'Loading\u2026'}
        </div>

        <form className="answer-form" onSubmit={onSubmit}>
          <input
            type="number"
            inputMode="numeric"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer"
            aria-label="Your answer"
            disabled={loading || !problem}
            autoFocus
          />
          <button type="submit" className="primary" disabled={loading || !problem || answer.trim() === ''}>
            Answer
          </button>
        </form>

        {result && (
          <div className={result.correct ? 'result result-win' : 'result result-lose'} aria-live="polite">
            {result.correct ? (
              <>
                <div className="die" title={`Rolled ${result.luckRoll}`}>
                  {DIE_FACES[result.luckRoll - 1]}
                </div>
                <p className="result-headline">Correct!</p>
                <p className="result-detail">
                  {result.basePoints} base &times; {result.luckRoll} luck ={' '}
                  <strong>{result.pointsAwarded} points</strong>
                </p>
              </>
            ) : (
              <>
                <p className="result-headline">Not quite.</p>
                <p className="result-detail">
                  The answer was <strong>{result.correctAnswer}</strong>.
                </p>
              </>
            )}
          </div>
        )}

        <button
          type="button"
          className="ghost"
          onClick={() => void loadProblem(difficulty)}
          disabled={loading}
        >
          Next problem
        </button>
      </section>
    </main>
  );
}
