import type { Difficulty } from '../shared/game.ts';

export interface ProblemResponse {
  id: string;
  prompt: string;
  difficulty: Difficulty;
}

export interface AnswerResponse {
  prompt: string;
  correct: boolean;
  correctAnswer: number;
  luckRoll: number;
  basePoints: number;
  pointsAwarded: number;
}

export async function fetchProblem(difficulty: Difficulty): Promise<ProblemResponse> {
  const res = await fetch(`/api/problem?difficulty=${difficulty}`);
  if (!res.ok) {
    throw new Error(`Failed to load problem (${res.status})`);
  }
  return res.json();
}

export async function submitAnswer(id: string, answer: number): Promise<AnswerResponse> {
  const res = await fetch('/api/answer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, answer }),
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error ?? `Failed to submit answer (${res.status})`);
  }
  return res.json();
}
