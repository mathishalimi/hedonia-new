import { GameMode } from '../types/game';
import { getPenaltyByIntensity } from '../data/penalties';

export function getPenalty(mode: GameMode, progress: number): string {
  const intensity = getIntensityForProgress(progress);
  const penalties = getPenaltyByIntensity(intensity);
  return penalties[Math.floor(Math.random() * penalties.length)].text;
}

function getIntensityForProgress(progress: number): 'soft' | 'medium' | 'spicy' | 'extreme' {
  if (progress < 0.25) return 'soft';
  if (progress < 0.5) return 'medium';
  if (progress < 0.75) return 'spicy';
  return 'extreme';
}