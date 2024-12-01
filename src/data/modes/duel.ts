import { Challenge, GameMode } from '../../types/game';

const createDuelChallenge = (
  id: string,
  text: string,
  intensity: 'soft' | 'medium' | 'spicy' | 'extreme',
  shotsCount: number = 1
): Challenge => ({
  id,
  text,
  type: 'versus',
  mode: GameMode.Duel,
  intensity,
  shotsCount
});

// Early game duels (25)
const softDuels = [
  createDuelChallenge('duel_soft_1', "Bras de fer avec le joueur de ton choix", 'soft'),
  createDuelChallenge('duel_soft_2', "Pierre-feuille-ciseaux en 3 manches", 'soft'),
  // ... Add 23 more soft duels
];

// Mid game duels (25)
const mediumDuels = [
  createDuelChallenge('duel_medium_1', "Battle de danse avec le joueur de ton choix", 'medium', 2),
  createDuelChallenge('duel_medium_2', "Concours de pompes", 'medium', 2),
  // ... Add 23 more medium duels
];

// Late game duels (25)
const spicyDuels = [
  createDuelChallenge('duel_spicy_1', "Battle de rap improvisé", 'spicy', 3),
  createDuelChallenge('duel_spicy_2', "Concours de shots", 'spicy', 3),
  // ... Add 23 more spicy duels
];

// End game duels (25)
const extremeDuels = [
  createDuelChallenge('duel_extreme_1', "Battle de breakdance", 'extreme', 4),
  createDuelChallenge('duel_extreme_2', "Concours de burpees", 'extreme', 4),
  // ... Add 23 more extreme duels
];

export const duelChallenges: Challenge[] = [
  ...softDuels,
  ...mediumDuels,
  ...spicyDuels,
  ...extremeDuels
];