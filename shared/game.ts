export type Operator = '+' | '-' | '*';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Problem {
  id: string;
  a: number;
  b: number;
  operator: Operator;
  prompt: string;
  difficulty: Difficulty;
}

export interface AnswerResult {
  correct: boolean;
  correctAnswer: number;
  /** The lucky dice roll (1-6). Only meaningful when the answer was correct. */
  luckRoll: number;
  /** Base points earned for a correct answer before the luck multiplier. */
  basePoints: number;
  /** Final points awarded = basePoints * luckRoll (0 when incorrect). */
  pointsAwarded: number;
}

const DIFFICULTY_RANGES: Record<Difficulty, { min: number; max: number }> = {
  easy: { min: 1, max: 10 },
  medium: { min: 5, max: 25 },
  hard: { min: 10, max: 50 },
};

const DIFFICULTY_BASE_POINTS: Record<Difficulty, number> = {
  easy: 10,
  medium: 20,
  hard: 35,
};

const OPERATORS: Operator[] = ['+', '-', '*'];

function randomInt(min: number, max: number, rng: () => number = Math.random): number {
  return Math.floor(rng() * (max - min + 1)) + min;
}

export function computeAnswer(a: number, b: number, operator: Operator): number {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
  }
}

export function basePointsFor(difficulty: Difficulty): number {
  return DIFFICULTY_BASE_POINTS[difficulty];
}

/** Roll a fair six-sided luck die. */
export function rollLuck(rng: () => number = Math.random): number {
  return randomInt(1, 6, rng);
}

export function createProblem(
  difficulty: Difficulty = 'easy',
  rng: () => number = Math.random,
  idFactory: () => string = defaultId,
): Problem {
  const range = DIFFICULTY_RANGES[difficulty];
  const operator = OPERATORS[randomInt(0, OPERATORS.length - 1, rng)];

  let a = randomInt(range.min, range.max, rng);
  let b = randomInt(range.min, range.max, rng);

  // Keep subtraction non-negative and multiplication reasonable.
  if (operator === '-' && b > a) {
    [a, b] = [b, a];
  }
  if (operator === '*') {
    b = randomInt(2, Math.max(2, Math.floor(range.max / 5)), rng);
  }

  return {
    id: idFactory(),
    a,
    b,
    operator,
    prompt: `${a} ${operator} ${b}`,
    difficulty,
  };
}

/**
 * Evaluate a submitted answer against a problem and, when correct, apply the
 * luck multiplier. Math earns the base points; luck multiplies them.
 */
export function evaluateAnswer(
  problem: Problem,
  submitted: number,
  rng: () => number = Math.random,
): AnswerResult {
  const correctAnswer = computeAnswer(problem.a, problem.b, problem.operator);
  const correct = submitted === correctAnswer;
  const basePoints = basePointsFor(problem.difficulty);
  const luckRoll = correct ? rollLuck(rng) : 0;
  const pointsAwarded = correct ? basePoints * luckRoll : 0;

  return { correct, correctAnswer, luckRoll, basePoints, pointsAwarded };
}

export function isDifficulty(value: unknown): value is Difficulty {
  return value === 'easy' || value === 'medium' || value === 'hard';
}

let counter = 0;
function defaultId(): string {
  counter += 1;
  return `p_${Date.now().toString(36)}_${counter.toString(36)}`;
}
