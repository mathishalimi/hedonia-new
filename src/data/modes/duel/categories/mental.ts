import { Challenge, GameMode } from '../../../../types/game';

export const mentalDuelChallenges: Challenge[] = [
  {
    id: 'duel_mental_1',
    text: "Pierre-feuille-ciseaux en 3 manches gagnantes",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'duel_mental_2',
    text: "Bataille de calcul mental : le plus rapide gagne",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'duel_mental_3',
    text: "Jeu du morpion : le meilleur en 3 manches",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'duel_mental_4',
    text: "Bataille de mots : le plus long mot avec les lettres données",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'duel_mental_5',
    text: "Jeu des différences : trouve le plus de différences en 30 secondes",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  }
];