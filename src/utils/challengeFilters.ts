import { Challenge, Intensity } from '../types/game';

export function filterChallengesByIntensity(challenges: Challenge[], targetIntensity: Intensity): Challenge[] {
  // Get challenges matching the target intensity
  const exactMatches = challenges.filter(c => c.intensity === targetIntensity);
  
  // If we have enough exact matches, use those
  if (exactMatches.length >= 5) {
    return exactMatches;
  }

  // Otherwise, include challenges from adjacent intensity levels
  const intensityLevels: Intensity[] = ['soft', 'medium', 'spicy', 'extreme'];
  const currentIndex = intensityLevels.indexOf(targetIntensity);
  
  let adjacentChallenges: Challenge[] = [...exactMatches];

  // Add challenges from one level below if available
  if (currentIndex > 0) {
    adjacentChallenges = [
      ...adjacentChallenges,
      ...challenges.filter(c => c.intensity === intensityLevels[currentIndex - 1])
    ];
  }

  // Add challenges from one level above if available
  if (currentIndex < intensityLevels.length - 1) {
    adjacentChallenges = [
      ...adjacentChallenges,
      ...challenges.filter(c => c.intensity === intensityLevels[currentIndex + 1])
    ];
  }

  return adjacentChallenges;
}

export function adjustShotsBasedOnProgress(baseShots: number, progress: number): number {
  // Increase shots based on game progress
  const multiplier = 1 + Math.floor(progress * 2);
  return baseShots * multiplier;
}

export function getMinigamePenalty(roundNumber: number, isNaughtyMode: boolean): string[] {
  const penalties = isNaughtyMode ? getNaughtyPenalties() : getClassicPenalties();
  const intensity = Math.min(Math.floor(roundNumber / 10), penalties.length - 1);
  return penalties[intensity];
}

function getClassicPenalties(): string[][] {
  return [
    ['Bois 2 gorgées', 'Fais 5 pompes'],
    ['Bois 3 gorgées', 'Fais 10 pompes', 'Imite un animal'],
    ['Bois 4 gorgées', 'Fais 15 pompes', 'Danse la macarena'],
    ['Cul sec', 'Fais 20 pompes', 'Chante une chanson']
  ];
}

function getNaughtyPenalties(): string[][] {
  return [
    ['Fais un massage de 30 secondes', 'Donne un compliment sensuel'],
    ['Fais un slow', 'Raconte ton fantasme le plus soft'],
    ['Fais un lap dance de 30 secondes', 'Décris ton plus grand turn-on'],
    ['Fais un strip-tease (garde tes sous-vêtements)', 'Embrasse où tu veux']
  ];
}