import { Challenge, GameMode } from '../../../../types/game';

export const historyTrivia: Challenge[] = [
  // Ancient History (15 questions)
  {
    id: 'trivia_history_1',
    text: "Qui était le premier empereur romain ?",
    answer: "Auguste",
    choices: ["Jules César", "Auguste", "Néron", "Caligula"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  {
    id: 'trivia_history_2',
    text: "Quelle civilisation a construit Machu Picchu ?",
    answer: "Les Incas",
    choices: ["Les Mayas", "Les Aztèques", "Les Incas", "Les Olmèques"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  {
    id: 'trivia_history_3',
    text: "En quelle année Alexandre le Grand est-il mort ?",
    answer: "323 av. J.-C.",
    choices: ["323 av. J.-C.", "301 av. J.-C.", "336 av. J.-C.", "356 av. J.-C."],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy'
  },
  // Medieval History (15 questions)
  {
    id: 'trivia_history_16',
    text: "Qui était le premier roi des Francs ?",
    answer: "Clovis",
    choices: ["Charlemagne", "Clovis", "Pépin le Bref", "Charles Martel"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  {
    id: 'trivia_history_17',
    text: "En quelle année a débuté la première croisade ?",
    answer: "1096",
    choices: ["1066", "1096", "1146", "1189"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy'
  },
  // Modern History (10 questions)
  {
    id: 'trivia_history_31',
    text: "Qui a inventé l'imprimerie moderne ?",
    answer: "Johannes Gutenberg",
    choices: ["Johannes Gutenberg", "William Caxton", "Bi Sheng", "Laurens Janszoon Coster"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  // Contemporary History (10 questions)
  {
    id: 'trivia_history_41',
    text: "En quelle année est tombé le mur de Berlin ?",
    answer: "1989",
    choices: ["1987", "1989", "1991", "1993"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft'
  }
  // ... Add remaining history questions to reach 50 total
];