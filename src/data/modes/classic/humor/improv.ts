import { Challenge, GameMode } from '../../../../types/game';

export const improvClassicChallenges: Challenge[] = [
  {
    id: 'classic_humor_improv_1',
    text: "Improvise une pub TV pour un produit ridicule inventé par les autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_humor_improv_2',
    text: "Fais un discours politique absurde sur un sujet donné par les autres",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_humor_improv_3',
    text: "Crée une chanson improvisée sur les événements de la soirée",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_humor_improv_4',
    text: "Fais un reportage en direct sur une situation banale en la rendant dramatique",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_humor_improv_5',
    text: "Improvise une scène de théâtre avec un autre joueur sans parler",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];