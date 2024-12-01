import { Challenge, GameMode } from '../../../../types/game';

export const geographyTrivia: Challenge[] = [
  // Pays et Capitales (15 questions)
  {
    id: 'trivia_geography_1',
    text: "Quelle est la capitale du Kazakhstan ?",
    answer: "Astana",
    choices: ["Almaty", "Astana", "Bichkek", "Tachkent"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy'
  },
  {
    id: 'trivia_geography_2',
    text: "Quel est le plus petit pays du monde ?",
    answer: "Le Vatican",
    choices: ["Monaco", "Le Vatican", "Nauru", "Saint-Marin"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  // Géographie Physique (15 questions)
  {
    id: 'trivia_geography_16',
    text: "Quel est le plus grand désert du monde ?",
    answer: "L'Antarctique",
    choices: ["Le Sahara", "L'Antarctique", "Le désert d'Arabie", "Le désert de Gobi"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium'
  },
  // Océans et Mers (10 questions)
  {
    id: 'trivia_geography_31',
    text: "Quel est le point le plus profond des océans ?",
    answer: "La fosse des Mariannes",
    choices: ["La fosse des Mariannes", "La fosse de Porto Rico", "La fosse des Tonga", "La fosse des Aléoutiennes"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy'
  },
  // Climat et Environnement (10 questions)
  {
    id: 'trivia_geography_41',
    text: "Quelle est la ville la plus pluvieuse du monde ?",
    answer: "Cherrapunji, Inde",
    choices: ["Seattle, USA", "Londres, UK", "Cherrapunji, Inde", "Bergen, Norvège"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'extreme'
  }
  // ... Add remaining geography questions to reach 50 total
];