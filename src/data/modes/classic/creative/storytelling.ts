import { Challenge, GameMode } from '../../../../types/game';

export const storytellingClassicChallenges: Challenge[] = [
  {
    id: 'classic_creative_story_1',
    text: "Raconte une histoire en n'utilisant que des onomatopées",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'classic_creative_story_2',
    text: "Invente une histoire qui inclut trois objets choisis par les autres joueurs",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'classic_creative_story_3',
    text: "Crée un conte de fées moderne avec les joueurs présents comme personnages",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_creative_story_4',
    text: "Raconte une histoire d'horreur en utilisant uniquement des objets de la pièce",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'classic_creative_story_5',
    text: "Invente et performe une publicité pour un produit absurde",
    type: 'dare',
    mode: GameMode.Classic,
    intensity: 'extreme',
    shotsCount: 4
  }
];