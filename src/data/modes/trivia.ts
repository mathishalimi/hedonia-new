import { Challenge, GameMode } from '../../types/game';

const createTriviaChallenge = (
  id: string,
  text: string,
  answer: string,
  choices: string[],
  intensity: 'soft' | 'medium' | 'spicy' | 'extreme',
  shotsCount: number = 1
): Challenge => ({
  id,
  text,
  answer,
  choices,
  type: 'trivia',
  mode: GameMode.Trivia,
  intensity,
  shotsCount
});

// Early game trivia (125)
const softTrivia = [
  // Geography (25)
  createTriviaChallenge(
    'trivia_soft_geo_1',
    "Quelle est la capitale de la France ?",
    "Paris",
    ["Londres", "Paris", "Berlin", "Madrid"],
    'soft'
  ),
  createTriviaChallenge(
    'trivia_soft_geo_2',
    "Quel est le plus grand pays du monde ?",
    "Russie",
    ["Chine", "États-Unis", "Russie", "Canada"],
    'soft'
  ),
  // ... Add 23 more geography questions

  // History (25)
  createTriviaChallenge(
    'trivia_soft_hist_1',
    "En quelle année a eu lieu la Révolution française ?",
    "1789",
    ["1769", "1789", "1799", "1809"],
    'soft'
  ),
  createTriviaChallenge(
    'trivia_soft_hist_2',
    "Qui était le premier président des États-Unis ?",
    "George Washington",
    ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "Benjamin Franklin"],
    'soft'
  ),
  // ... Add 23 more history questions

  // Pop Culture (25)
  createTriviaChallenge(
    'trivia_soft_pop_1',
    "Quel est le film le plus rentable de tous les temps ?",
    "Avatar",
    ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars"],
    'soft'
  ),
  // ... Add 24 more pop culture questions

  // Science (25)
  createTriviaChallenge(
    'trivia_soft_sci_1',
    "Quelle est la planète la plus proche du Soleil ?",
    "Mercure",
    ["Venus", "Mercure", "Mars", "Jupiter"],
    'soft'
  ),
  // ... Add 24 more science questions

  // Sports (25)
  createTriviaChallenge(
    'trivia_soft_sport_1',
    "Quel pays a gagné le plus de Coupes du Monde de football ?",
    "Brésil",
    ["Allemagne", "Brésil", "France", "Argentine"],
    'soft'
  ),
  // ... Add 24 more sports questions
];

// Mid game trivia (125)
const mediumTrivia = [
  // Art & Literature (25)
  createTriviaChallenge(
    'trivia_medium_art_1',
    "Qui a peint 'La Nuit étoilée' ?",
    "Vincent van Gogh",
    ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    'medium',
    2
  ),
  // ... Add 24 more art questions

  // Science & Nature (25)
  createTriviaChallenge(
    'trivia_medium_sci_1',
    "Quel est l'élément chimique le plus abondant dans l'univers ?",
    "Hydrogène",
    ["Hélium", "Hydrogène", "Oxygène", "Carbone"],
    'medium',
    2
  ),
  // ... Add 24 more science questions

  // History & Politics (25)
  createTriviaChallenge(
    'trivia_medium_hist_1',
    "Qui était le premier empereur romain ?",
    "Auguste",
    ["Jules César", "Auguste", "Néron", "Caligula"],
    'medium',
    2
  ),
  // ... Add 24 more history questions

  // Geography & Culture (25)
  createTriviaChallenge(
    'trivia_medium_geo_1',
    "Quel est le plus long fleuve du monde ?",
    "Le Nil",
    ["L'Amazone", "Le Nil", "Le Mississippi", "Le Yangtsé"],
    'medium',
    2
  ),
  // ... Add 24 more geography questions

  // Entertainment (25)
  createTriviaChallenge(
    'trivia_medium_ent_1',
    "Quel acteur a gagné le plus d'Oscars ?",
    "Daniel Day-Lewis",
    ["Jack Nicholson", "Daniel Day-Lewis", "Marlon Brando", "Tom Hanks"],
    'medium',
    2
  ),
  // ... Add 24 more entertainment questions
];

// Late game trivia (125)
const spicyTrivia = [
  // Advanced Science (25)
  createTriviaChallenge(
    'trivia_spicy_sci_1',
    "Quelle est la constante de Planck ?",
    "6.626 × 10^-34 J⋅s",
    ["6.626 × 10^-34 J⋅s", "6.022 × 10^23 mol^-1", "3.0 × 10^8 m/s", "9.81 m/s^2"],
    'spicy',
    3
  ),
  // ... Add 24 more advanced science questions

  // World History (25)
  createTriviaChallenge(
    'trivia_spicy_hist_1',
    "En quelle année a été signé le traité de Versailles ?",
    "1919",
    ["1918", "1919", "1920", "1921"],
    'spicy',
    3
  ),
  // ... Add 24 more world history questions

  // Arts & Philosophy (25)
  createTriviaChallenge(
    'trivia_spicy_art_1',
    "Qui a écrit 'Ainsi parlait Zarathoustra' ?",
    "Friedrich Nietzsche",
    ["Jean-Paul Sartre", "Friedrich Nietzsche", "Albert Camus", "Søren Kierkegaard"],
    'spicy',
    3
  ),
  // ... Add 24 more arts & philosophy questions

  // Technology (25)
  createTriviaChallenge(
    'trivia_spicy_tech_1',
    "Qui est considéré comme le père de l'informatique ?",
    "Alan Turing",
    ["Bill Gates", "Alan Turing", "Steve Jobs", "Charles Babbage"],
    'spicy',
    3
  ),
  // ... Add 24 more technology questions

  // Music Theory (25)
  createTriviaChallenge(
    'trivia_spicy_music_1',
    "Quel intervalle musical est composé de 12 demi-tons ?",
    "Octave",
    ["Quinte", "Octave", "Tierce", "Quarte"],
    'spicy',
    3
  ),
  // ... Add 24 more music theory questions
];

// End game trivia (125)
const extremeTrivia = [
  // Quantum Physics (25)
  createTriviaChallenge(
    'trivia_extreme_phys_1',
    "Quel est le principe d'incertitude en mécanique quantique ?",
    "Heisenberg",
    ["Schrödinger", "Heisenberg", "Bohr", "Einstein"],
    'extreme',
    4
  ),
  // ... Add 24 more quantum physics questions

  // Ancient Civilizations (25)
  createTriviaChallenge(
    'trivia_extreme_hist_1',
    "Quelle était la capitale de l'Empire Khmer ?",
    "Angkor",
    ["Ayutthaya", "Angkor", "Sukhothai", "Hue"],
    'extreme',
    4
  ),
  // ... Add 24 more ancient civilizations questions

  // Advanced Mathematics (25)
  createTriviaChallenge(
    'trivia_extreme_math_1',
    "Quelle est la conjecture de Goldbach ?",
    "Tout nombre pair > 2 est la somme de deux nombres premiers",
    [
      "Tout nombre pair > 2 est la somme de deux nombres premiers",
      "Il existe une infinité de nombres premiers jumeaux",
      "Tout nombre impair est la somme de trois nombres premiers",
      "Il n'existe pas de solution à x^n + y^n = z^n pour n > 2"
    ],
    'extreme',
    4
  ),
  // ... Add 24 more mathematics questions

  // Molecular Biology (25)
  createTriviaChallenge(
    'trivia_extreme_bio_1',
    "Quel est le processus de réplication de l'ADN ?",
    "Semi-conservatif",
    ["Conservatif", "Semi-conservatif", "Dispersif", "Régressif"],
    'extreme',
    4
  ),
  // ... Add 24 more biology questions

  // Advanced Astronomy (25)
  createTriviaChallenge(
    'trivia_extreme_astro_1',
    "Qu'est-ce que l'horizon des événements d'un trou noir ?",
    "La limite au-delà de laquelle rien ne peut s'échapper",
    [
      "Le centre du trou noir",
      "La limite au-delà de laquelle rien ne peut s'échapper",
      "La zone où le temps s'arrête",
      "Le point de non-retour gravitationnel"
    ],
    'extreme',
    4
  ),
  // ... Add 24 more astronomy questions
];

export const triviaChallenges: Challenge[] = [
  ...softTrivia,
  ...mediumTrivia,
  ...spicyTrivia,
  ...extremeTrivia
];