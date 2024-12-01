import { Challenge, GameMode } from '../../../../types/game';

export const dancingClassicChallenges: Challenge[] = [
  {
    id: 'classic_dancing_1',
    text: "Invente et enseigne une chorégraphie de 30 secondes aux autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_dancing_2',
    text: "Fais une battle de danse contre le joueur de ton choix",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_dancing_3',
    text: "Danse sur trois styles de musique différents en 1 minute",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_dancing_4',
    text: "Fais un twerk pendant 30 secondes ou bois 3 gorgées",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_dancing_5',
    text: "Reproduis la chorégraphie de Macarena en moonwalk",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];