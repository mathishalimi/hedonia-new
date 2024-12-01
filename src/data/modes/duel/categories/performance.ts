import { Challenge, GameMode } from '../../../../types/game';

export const performanceDuelChallenges: Challenge[] = [
  {
    id: 'duel_performance_1',
    text: "Battle de danse : le public vote pour le meilleur",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'duel_performance_2',
    text: "Battle de rap improvisé",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'duel_performance_3',
    text: "Concours d'imitations : le plus drôle gagne",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'duel_performance_4',
    text: "Battle de karaoké sur une chanson choisie par les autres",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'duel_performance_5',
    text: "Concours de mime : le plus expressif gagne",
    type: 'versus',
    mode: GameMode.Duel,
    intensity: 'medium',
    shotsCount: 2
  }
];