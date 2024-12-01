import { Challenge, GameMode, Intensity } from '../types/game';

export function getProgressionMultiplier(currentPoints: number, targetPoints: number): number {
  const progress = currentPoints / targetPoints;
  return Math.min(1 + Math.floor(progress * 3), 4);
}

export function getIntensityForProgress(progress: number): Intensity {
  if (progress < 0.25) return 'soft';
  if (progress < 0.5) return 'medium';
  if (progress < 0.75) return 'spicy';
  return 'extreme';
}

export function filterChallengesByProgress(
  challenges: Challenge[],
  progress: number,
  mode: GameMode
): Challenge[] {
  const intensity = getIntensityForProgress(progress);
  const multiplier = getProgressionMultiplier(progress * 100, 100);

  return challenges
    .filter(c => c.mode === mode && c.intensity === intensity)
    .map(c => ({
      ...c,
      shotsCount: (c.shotsCount || 1) * multiplier
    }));
}