import { Challenge, GameMode } from '../../../../types/game';

export const skillDuelChallenges: Challenge[] = [
  {
    id: 'duel_skill_1',
    text: "Concours de jonglage avec 3 objets",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'duel_skill_2',
    text: "Battle de construction de château de cartes",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'duel_skill_3',
    text: "Concours de lancer de boulettes de papier",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'duel_skill_4',
    text: "Battle d'empilage de gobelets",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'duel_skill_5',
    text: "Concours de dessin les yeux bandés",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'spicy',
    shotsCount: 3
  }
];