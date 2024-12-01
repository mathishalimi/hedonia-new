import { Challenge, GameMode } from '../../../../../types/game';

export const ancientHistoryTrivia: Challenge[] = [
  {
    id: 'trivia_ancient_1',
    text: "Quelle civilisation a construit les pyramides de Gizeh ?",
    answer: "Les Égyptiens",
    choices: ["Les Mayas", "Les Égyptiens", "Les Romains", "Les Grecs"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_ancient_2',
    text: "En quelle année Jules César a-t-il franchi le Rubicon ?",
    answer: "49 av. J.-C.",
    choices: ["59 av. J.-C.", "49 av. J.-C.", "44 av. J.-C.", "40 av. J.-C."],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'trivia_ancient_3',
    text: "Qui était le premier empereur de Chine ?",
    answer: "Qin Shi Huang",
    choices: ["Han Wudi", "Qin Shi Huang", "Sun Tzu", "Liu Bang"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'extreme',
    shotsCount: 4
  },
  {
    id: 'trivia_ancient_4',
    text: "Quelle était la capitale de l'Empire romain d'Orient ?",
    answer: "Constantinople",
    choices: ["Rome", "Athènes", "Constantinople", "Alexandrie"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_ancient_5',
    text: "Qui était le dieu suprême dans la mythologie grecque ?",
    answer: "Zeus",
    choices: ["Poséidon", "Zeus", "Hadès", "Apollon"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  }
];