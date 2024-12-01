import { Challenge, GameMode, Intensity } from '../types/game';
import { SessionStorage } from './sessionStorage';

export class ChallengeSelection {
  private static weightByIntensity: Record<Intensity, number> = {
    'soft': 1,
    'medium': 1.2,
    'spicy': 1.5,
    'extreme': 2
  };

  static selectChallengesForSession(
    challenges: Challenge[],
    mode: GameMode,
    intensity: Intensity,
    count: number
  ): Challenge[] {
    const usedChallenges = SessionStorage.getUsedChallenges();
    
    // Filter challenges by mode and unused status
    let availableChallenges = challenges.filter(challenge => 
      challenge.mode === mode && 
      !usedChallenges.has(challenge.id)
    );

    // Apply intensity weighting
    const weightedChallenges = availableChallenges.map(challenge => ({
      ...challenge,
      weight: this.weightByIntensity[challenge.intensity] || 1
    }));

    // Shuffle and select challenges
    return this.weightedRandomSelection(weightedChallenges, count);
  }

  private static weightedRandomSelection(
    challenges: (Challenge & { weight: number })[],
    count: number
  ): Challenge[] {
    const selected: Challenge[] = [];
    const totalWeight = challenges.reduce((sum, c) => sum + c.weight, 0);

    while (selected.length < count && challenges.length > 0) {
      let random = Math.random() * totalWeight;
      let index = 0;

      while (random > 0 && index < challenges.length) {
        random -= challenges[index].weight;
        if (random <= 0) {
          selected.push(challenges[index]);
          challenges.splice(index, 1);
        }
        index++;
      }
    }

    return selected;
  }
}