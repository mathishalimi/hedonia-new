import { Challenge, GameMode } from '../../../../types/game';

export const physicalDuelChallenges: Challenge[] = [
  {
    id: 'duel_physical_1',
    text: "Bras de fer avec le joueur de ton choix",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'duel_physical_2',
    text: "Battle de pompes : le premier à 20 gagne",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'duel_physical_3',
    text: "Concours de gainage : celui qui tient le plus longtemps gagne",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'duel_physical_4',
    text: "Battle de squats : le premier à 30 gagne",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'duel_physical_5',
    text: "Concours d'équilibre sur un pied : le dernier debout gagne",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  }
];