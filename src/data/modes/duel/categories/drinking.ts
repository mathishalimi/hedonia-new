import { Challenge, GameMode } from '../../../../types/game';

export const drinkingDuelChallenges: Challenge[] = [
  {
    id: 'duel_drinking_1',
    text: "Course de shots : le premier à finir gagne",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'duel_drinking_2',
    text: "Concours de création de cocktails : les autres votent pour le meilleur",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'duel_drinking_3',
    text: "Jeu de la bouteille : le plus précis gagne",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'duel_drinking_4',
    text: "Bataille de descente : qui finit son verre le plus vite",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'duel_drinking_5',
    text: "Concours de résistance : qui tient le plus longtemps sans boire",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'spicy',
    shotsCount: 3
  }
];