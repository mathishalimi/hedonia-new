import { Challenge } from '../types/game';

export class ChallengeRotation {
  private usedChallenges: Set<string> = new Set();
  private recentChallenges: string[] = [];
  private maxRecentSize = 10;
  private categoryHistory: Map<string, number> = new Map();
  private lastCategory: string | null = null;

  reset(): void {
    this.usedChallenges.clear();
    this.recentChallenges = [];
    this.categoryHistory.clear();
    this.lastCategory = null;
  }

  private addToRecent(challengeId: string): void {
    this.recentChallenges.push(challengeId);
    if (this.recentChallenges.length > this.maxRecentSize) {
      this.recentChallenges.shift();
    }
  }

  private isRecentlyUsed(challengeId: string): boolean {
    return this.recentChallenges.includes(challengeId);
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  getNextChallenge(availableChallenges: Challenge[]): Challenge {
    // Reset used challenges if we've used most of them
    if (this.usedChallenges.size >= availableChallenges.length * 0.8) {
      this.usedChallenges.clear();
    }

    // Filter out recently used challenges and same category consecutively
    let eligibleChallenges = availableChallenges.filter(challenge => {
      if (this.isRecentlyUsed(challenge.id)) return false;
      if (challenge.type === this.lastCategory) return false;
      return !this.usedChallenges.has(challenge.id);
    });

    // If no eligible challenges, reset and try again with just avoiding recent ones
    if (eligibleChallenges.length === 0) {
      eligibleChallenges = availableChallenges.filter(challenge => 
        !this.isRecentlyUsed(challenge.id)
      );
    }

    // If still no eligible challenges, use any available challenge
    if (eligibleChallenges.length === 0) {
      eligibleChallenges = availableChallenges;
    }

    // Shuffle the eligible challenges for randomness
    eligibleChallenges = this.shuffleArray(eligibleChallenges);

    // Score challenges based on category usage
    const scoredChallenges = eligibleChallenges.map(challenge => {
      const categoryUseCount = this.categoryHistory.get(challenge.type) || 0;
      return {
        challenge,
        score: -categoryUseCount // Negative score so less used categories are preferred
      };
    });

    // Sort by score and add some randomization
    scoredChallenges.sort((a, b) => a.score - b.score);
    
    // Select from top 3 challenges randomly if available
    const selectionPool = scoredChallenges.slice(0, Math.min(3, scoredChallenges.length));
    const selectedChallenge = selectionPool[Math.floor(Math.random() * selectionPool.length)].challenge;

    // Update tracking
    this.usedChallenges.add(selectedChallenge.id);
    this.addToRecent(selectedChallenge.id);
    this.lastCategory = selectedChallenge.type;
    this.categoryHistory.set(
      selectedChallenge.type,
      (this.categoryHistory.get(selectedChallenge.type) || 0) + 1
    );

    return selectedChallenge;
  }
}

export const challengeRotation = new ChallengeRotation();