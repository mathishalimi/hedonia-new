import { GameMode } from '../../types/game';

interface Penalty {
  id: string;
  text: string;
  intensity: 'soft' | 'medium' | 'spicy' | 'extreme';
  mode: GameMode;
  shotsCount: number;
}

// Soft Penalties (100)
export const softPenalties: Penalty[] = [
  {
    id: 'penalty_soft_1',
    text: "Fais 10 squats en imitant un commentateur sportif",
    intensity: 'soft',
    mode: GameMode.Classic,
    shotsCount: 1
  },
  {
    id: 'penalty_soft_2',
    text: "Danse la macarena en chantant une chanson différente",
    intensity: 'soft',
    mode: GameMode.Classic,
    shotsCount: 1
  },
  // ... Add 98 more soft penalties
];

// Medium Penalties (100)
export const mediumPenalties: Penalty[] = [
  {
    id: 'penalty_medium_1',
    text: "Fais 15 pompes en racontant ton pire rendez-vous",
    intensity: 'medium',
    mode: GameMode.Classic,
    shotsCount: 2
  },
  {
    id: 'penalty_medium_2',
    text: "Imite 3 célébrités différentes en faisant des squats",
    intensity: 'medium',
    mode: GameMode.Classic,
    shotsCount: 2
  },
  // ... Add 98 more medium penalties
];

// Spicy Penalties (100)
export const spicyPenalties: Penalty[] = [
  {
    id: 'penalty_spicy_1',
    text: "Fais un mini spectacle de stand-up de 2 minutes",
    intensity: 'spicy',
    mode: GameMode.Classic,
    shotsCount: 3
  },
  {
    id: 'penalty_spicy_2',
    text: "Crée et performe une chorégraphie sur une chanson choisie par les autres",
    intensity: 'spicy',
    mode: GameMode.Classic,
    shotsCount: 3
  },
  // ... Add 98 more spicy penalties
];

// Extreme Penalties (100)
export const extremePenalties: Penalty[] = [
  {
    id: 'penalty_extreme_1',
    text: "Organise un mini talk-show où tu interviewes tous les joueurs",
    intensity: 'extreme',
    mode: GameMode.Classic,
    shotsCount: 4
  },
  {
    id: 'penalty_extreme_2',
    text: "Fais un one-man-show de 3 minutes sur un sujet choisi par les autres",
    intensity: 'extreme',
    mode: GameMode.Classic,
    shotsCount: 4
  },
  // ... Add 98 more extreme penalties
];

export const getAllPenalties = (): Penalty[] => [
  ...softPenalties,
  ...mediumPenalties,
  ...spicyPenalties,
  ...extremePenalties
];

export const getPenaltyByIntensity = (intensity: 'soft' | 'medium' | 'spicy' | 'extreme'): Penalty[] => {
  switch (intensity) {
    case 'soft':
      return softPenalties;
    case 'medium':
      return mediumPenalties;
    case 'spicy':
      return spicyPenalties;
    case 'extreme':
      return extremePenalties;
  }
};