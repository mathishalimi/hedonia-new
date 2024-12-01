import { Challenge, GameMode } from '../../../../types/game';

export const flexibilityClassicChallenges: Challenge[] = [
  {
    id: 'classic_flexibility_1',
    text: "Fais le grand écart (ou essaie) pendant 20 secondes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'classic_flexibility_2',
    text: "Touche tes orteils sans plier les genoux pendant 30 secondes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_flexibility_3',
    text: "Fais le pont pendant 15 secondes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_flexibility_4',
    text: "Fais 10 fentes en alternance en touchant le sol",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_flexibility_5',
    text: "Fais l'arbre (position de yoga) pendant 30 secondes sur chaque jambe",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  }
];