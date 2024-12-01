import { Challenge, GameMode } from '../../types/game';

export const socialChallenges: Challenge[] = [
  // Soft (0-25%)
  {
    id: 'social_soft_1',
    text: "Échange ton rôle social avec un autre joueur pendant 3 tours (le drôle devient sérieux, le timide devient extraverti...)",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'social_soft_2',
    text: "Raconte une histoire embarrassante sur chaque joueur (vraie ou inventée), les autres doivent deviner",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Medium (25-50%)
  {
    id: 'social_medium_1',
    text: "Organise un mini talk-show où tu interviewes les autres joueurs sur des sujets absurdes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'social_medium_2',
    text: "Fais un speed dating de 30 secondes avec chaque joueur en incarnant des personnages différents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Spicy (50-75%)
  {
    id: 'social_spicy_1',
    text: "Organise un tribunal où tu accuses chaque joueur d'un crime imaginaire absurde",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'social_spicy_2',
    text: "Crée une théorie du complot impliquant tous les joueurs présents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Extreme (75-100%)
  {
    id: 'social_extreme_1',
    text: "Organise une cérémonie de remise des prix en roastant gentiment chaque joueur",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'social_extreme_2',
    text: "Monte une pièce de théâtre improvisée où chaque joueur joue le rôle d'un autre",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];