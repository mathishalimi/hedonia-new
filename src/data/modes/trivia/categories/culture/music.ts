import { Challenge, GameMode } from '../../../../../types/game';

export const musicTrivia: Challenge[] = [
  {
    id: 'trivia_music_1',
    text: "Quel est l'album le plus vendu de tous les temps ?",
    answer: "Thriller",
    choices: ["Thriller", "Back in Black", "The Dark Side of the Moon", "Abbey Road"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  },
  {
    id: 'trivia_music_2',
    text: "Qui est le 'King of Pop' ?",
    answer: "Michael Jackson",
    choices: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_music_3',
    text: "Quel groupe a sorti 'Bohemian Rhapsody' ?",
    answer: "Queen",
    choices: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'soft',
    shotsCount: 1
  },
  {
    id: 'trivia_music_4',
    text: "En quelle année les Beatles se sont-ils séparés ?",
    answer: "1970",
    choices: ["1968", "1969", "1970", "1971"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'spicy',
    shotsCount: 3
  },
  {
    id: 'trivia_music_5',
    text: "Qui a composé la 9ème symphonie ?",
    answer: "Beethoven",
    choices: ["Mozart", "Beethoven", "Bach", "Tchaikovsky"],
    type: 'trivia',
    mode: GameMode.Trivia,
    intensity: 'medium',
    shotsCount: 2
  }
];