import { describe, expect, it } from 'vitest';
import {
  computeAnswer,
  createProblem,
  evaluateAnswer,
  isDifficulty,
  rollLuck,
  type Problem,
} from './game.ts';

/** Deterministic RNG that walks through the provided values, then repeats. */
function seededRng(values: number[]): () => number {
  let i = 0;
  return () => {
    const v = values[i % values.length];
    i += 1;
    return v;
  };
}

describe('computeAnswer', () => {
  it('handles each operator', () => {
    expect(computeAnswer(3, 4, '+')).toBe(7);
    expect(computeAnswer(9, 4, '-')).toBe(5);
    expect(computeAnswer(6, 7, '*')).toBe(42);
  });
});

describe('rollLuck', () => {
  it('always returns a value between 1 and 6', () => {
    for (let i = 0; i < 200; i += 1) {
      const roll = rollLuck();
      expect(roll).toBeGreaterThanOrEqual(1);
      expect(roll).toBeLessThanOrEqual(6);
    }
  });

  it('returns the low and high extremes deterministically', () => {
    expect(rollLuck(() => 0)).toBe(1);
    expect(rollLuck(() => 0.999)).toBe(6);
  });
});

describe('createProblem', () => {
  it('produces a prompt matching its operands', () => {
    const problem = createProblem('easy', seededRng([0.5]), () => 'fixed-id');
    expect(problem.id).toBe('fixed-id');
    expect(problem.prompt).toBe(`${problem.a} ${problem.operator} ${problem.b}`);
  });

  it('never generates negative subtraction problems', () => {
    for (let i = 0; i < 100; i += 1) {
      const problem = createProblem('hard');
      if (problem.operator === '-') {
        expect(problem.a).toBeGreaterThanOrEqual(problem.b);
      }
    }
  });
});

describe('evaluateAnswer', () => {
  const problem: Problem = {
    id: 'p1',
    a: 8,
    b: 5,
    operator: '+',
    prompt: '8 + 5',
    difficulty: 'medium',
  };

  it('rewards a correct answer with base points times the luck roll', () => {
    const result = evaluateAnswer(problem, 13, () => 0.999); // luck roll -> 6
    expect(result.correct).toBe(true);
    expect(result.correctAnswer).toBe(13);
    expect(result.basePoints).toBe(20);
    expect(result.luckRoll).toBe(6);
    expect(result.pointsAwarded).toBe(120);
  });

  it('awards zero points and no luck roll for a wrong answer', () => {
    const result = evaluateAnswer(problem, 99, () => 0.999);
    expect(result.correct).toBe(false);
    expect(result.correctAnswer).toBe(13);
    expect(result.luckRoll).toBe(0);
    expect(result.pointsAwarded).toBe(0);
  });
});

describe('isDifficulty', () => {
  it('accepts valid difficulties and rejects others', () => {
    expect(isDifficulty('easy')).toBe(true);
    expect(isDifficulty('medium')).toBe(true);
    expect(isDifficulty('hard')).toBe(true);
    expect(isDifficulty('impossible')).toBe(false);
    expect(isDifficulty(42)).toBe(false);
  });
});
