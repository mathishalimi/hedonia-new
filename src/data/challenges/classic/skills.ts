import { Challenge, GameMode } from '../../../types/game';

export const skillChallenges: Challenge[] = [
  // Défis de Compétences Légers (0-25%)
  {
    id: 'skill_soft_1',
    text: "Fais deviner un film sans parler pendant 1 minute",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'skill_soft_2',
    text: "Dessine un objet les yeux fermés, les autres doivent deviner",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'skill_soft_3',
    text: "Fais deviner une chanson en la sifflant",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  // Défis de Compétences Moyens (25-50%)
  {
    id: 'skill_medium_1',
    text: "Jongle avec 3 objets différents pendant 30 secondes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'skill_medium_2',
    text: "Fais deviner 5 mots en moins d'une minute en dessinant",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'skill_medium_3',
    text: "Construis une tour avec des objets trouvés qui doit tenir 30 secondes",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  // Défis de Compétences Épicés (50-75%)
  {
    id: 'skill_spicy_1',
    text: "Fais deviner 3 films en même temps en les mimant",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'skill_spicy_2',
    text: "Réussis 3 tours de magie improvisés avec des objets du quotidien",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'skill_spicy_3',
    text: "Fais un parcours d'obstacles improvisé les yeux bandés, guidé par les autres",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  // Défis de Compétences Extrêmes (75-100%)
  {
    id: 'skill_extreme_1',
    text: "Organise un mini-spectacle de talents avec 4 numéros différents",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'skill_extreme_2',
    text: "Fais deviner 10 mots en 1 minute en n'utilisant que des sons",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'skill_extreme_3',
    text: "Crée et performe une chorégraphie complexe sur un medley de 3 chansons",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];