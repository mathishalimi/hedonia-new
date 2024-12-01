export class SessionStorage {
  private static readonly USED_CHALLENGES_KEY = 'usedChallenges';
  private static readonly SESSION_STATS_KEY = 'sessionStats';

  static saveUsedChallenge(challengeId: string): void {
    const usedChallenges = this.getUsedChallenges();
    usedChallenges.add(challengeId);
    localStorage.setItem(this.USED_CHALLENGES_KEY, JSON.stringify([...usedChallenges]));
  }

  static getUsedChallenges(): Set<string> {
    const stored = localStorage.getItem(this.USED_CHALLENGES_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  }

  static clearSession(): void {
    localStorage.removeItem(this.USED_CHALLENGES_KEY);
    localStorage.removeItem(this.SESSION_STATS_KEY);
  }

  static updateSessionStats(stats: Record<string, any>): void {
    localStorage.setItem(this.SESSION_STATS_KEY, JSON.stringify(stats));
  }

  static getSessionStats(): Record<string, any> | null {
    const stored = localStorage.getItem(this.SESSION_STATS_KEY);
    return stored ? JSON.parse(stored) : null;
  }
}