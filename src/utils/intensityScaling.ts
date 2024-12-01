import { Intensity } from '../types/game';

export function getIntensityLevel(currentPoints: number, targetPoints: number): Intensity {
  const progress = currentPoints / targetPoints;

  if (progress < 0.25) {
    return 'soft';
  } else if (progress < 0.5) {
    return 'medium';
  } else if (progress < 0.75) {
    return 'spicy';
  } else {
    return 'extreme';
  }
}

export function getShotsCount(roundNumber: number): number {
  // Base shots count increases every 10 rounds
  return Math.floor(roundNumber / 10) + 1;
}

export function getPenaltyIntensity(roundNumber: number): number {
  // Penalty intensity increases with round number
  return Math.min(Math.floor(roundNumber / 5) + 1, 5);
}