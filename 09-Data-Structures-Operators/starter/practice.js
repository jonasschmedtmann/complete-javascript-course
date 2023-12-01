'use strict';

/* Data used in exercises */
const books = [
  {
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: ['fantasy', 'high-fantasy', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
  },
  {
    title: 'The Cyberiad',
    publicationDate: 1965,
    author: 'Stanislaw Lem',
    genres: ['science fiction'],
    otherLanguagesTitle: {
      polish: 'Cyberiada',
      spanish: 'Ciberiada',
      french: 'Cybériade',
    },
  },
  {
    title: 'Dune',
    publicationDate: 1965,
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {},
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
  },
  {
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
  },
];

/* ⚠️ YOU WILL CALL THE FUNCTIONS BELOW IN EXERCISES.
     DON'T WORRY IF THEY DON'T MAKE SENSE FOR NOW.
     YOU WILL LEARN EVERYTHING A BIT LATER IN THE COURSE.
     FOR NOW TREAT THEM AS BLACK BOXES (focus on the values they return).
     YOU CAN CALL THEM AND LOG THE RETURNED VALUE TO THE CONSOLE TO SEE WHAT EXACTLY THEY RETURN. */

const getBooksByGenre = genre =>
  books.filter(book => book.genres.includes(genre));
const getBooksAsArrays = () => books.map(book => Object.entries(book));
const getBookAuthors = () => books.map(book => book.author);

// 1) Destructuring Arrays -------------------------------------- //

//A.
const [f, g, h, i] = books;
// console.log(f, g, h, i);

//B.
const [, second, third2] = books;
// console.log(second, third2);

//C.
const [, [[, title]]] = getBooksAsArrays();
// console.log(title);

// 2) Destructuring Objects -------------------------------- //

// A.
let [{ author }] = books;
// console.log(author);

//B.
const [, { title: bookTitle }] = books;
const { title: bookTitle1 } = books[1];
// console.log(bookTitle, bookTitle1);

//C.
const { filmAdaptation: hasFilmAdaptation = false } = books[1];

//D.
({ author } = books[2]);
// console.log(author);

// 3) The Spread Operator -------------------------------------- //

// A.
let authors = ['George Orwell', 'Aldous Huxley'];
authors = [...authors, ...getBookAuthors()];

// B.
// console.log(authors);
// console.log(...authors);

// C.
const firstName = 'John';
const firstNameArray = [...firstName];
// console.log(firstNameArray);

// D.
const cyberaid = { ...books[1], filmAdaptation: false };
// console.log(cyberaid);

// 4) Rest Pattern and Parameters --------------------------- //

// A.
const [theLordOfTheRings, ...otherFantasyBooks] = getBooksByGenre('fantasy');
// console.log(theLordOfTheRings);
// console.log(otherFantasyBooks);

// B.

function list(title = 'Temporary Title', ...items) {
  console.log(`${title}:`);
  if (items.length) {
    for (let i = 0; i < items.length; i++) {
      console.log(`${i + 1}) ${items[i]}`);
    }
  }
}

// list(
//   'My favorite books',
//   'Brave New World',
//   'The Great Gatsby',
//   'Pride and Prejudice'
// );

// 5) SHORT CIRCUITING (&& and ||) --------------------------- //

// A.
const getTitleInSpanish = function ({ otherLanguagesTitle }) {
  return otherLanguagesTitle.spanish || 'No data available';
};

// console.log(getTitleInSpanish(books[1]));

// B.
// for (let i = 0; i < books.length; i++) {
//   books[i].otherLanguagesTitle.spanish &&
//     books[i].otherLanguagesTitle.korean &&
//     console.log(
//       `${books[i].title} by ${books[i].author} has title in Spanish and Korean`
//     );
// }

// C.

// books.forEach(
//   book =>
//     !(
//       book.otherLanguagesTitle.portuguese && book.otherLanguagesTitle.spanish
//     ) &&
//     (book.otherLanguagesTitle.spanish || book.otherLanguagesTitle.portuguese) &&
//     console.log(
//       `${book.title} by ${book.author} has title in Portuguese or Spanish, but not in both`
//     )
// );

// ----------------------- Code Challenge # 1 ------------------- //
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5.

const { team1, x: draw, team2 } = game.odds;
// console.log(team1, team2, draw);

// 6.
function printGoals(...players) {
  players.forEach(player => console.log(player));
  console.log(`Score: ${players.length}`);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// 7.

// game.odds.team2 > game.odds.team1 && console.log(`Team 1 wins!`);

// --------------------- Code Challenge #2 ---------------------- //

// 1.
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// 2.
const odds = Object.values(game.odds);

let average = 0;

for (const odd of odds) {
  average += odd;
}
average /= odds.length;
// console.log(average);

// 3.
const gameEntries = Object.entries(game.odds);

// console.log(gameEntries);
// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${team === 'x' ? 'draw:' : `victory ${game[team]}:`} ${odd} `
//   );
// }

const playersList = game.scored;
// console.log(playersList);
// 4.
const scorers = {};
let score = 0;
for (const player of playersList) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// console.log(scorers);

// ------------------------- CODE CHALLENGE #3 ------------------------------- //
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🛑 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const eventsSet = new Set([...gameEvents.values()]);
const events = [...eventsSet];
// console.log(events);

// 2.
gameEvents.delete(64);
// console.log(gameEvents);

// 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// 4.
for (const [minute, event] of gameEvents) {
  const half = minute > 0 && minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  // console.log(`${half} ${minute}: ${event}`);
}

// ------------------ Code Challenge #4 ----------------- //

const btn = document.createElement('button');
const textarea = document.createElement('textarea');

document.body.append(textarea);
document.body.append(btn);

const snakeToCamel = function () {
  const lowerCaseTextValue = textarea.value.toLowerCase();
  const splitTextValue = lowerCaseTextValue.split('\n');
  let camelCase = [];
  for (const variable of splitTextValue) {
    const trimmedSecondSplitTextValue = variable.trim().split('_');

    const capitalized = trimmedSecondSplitTextValue[1].replace(
      trimmedSecondSplitTextValue[1][0],
      trimmedSecondSplitTextValue[1][0].toUpperCase()
    );
    trimmedSecondSplitTextValue[1] = capitalized;

    camelCase.push(trimmedSecondSplitTextValue.join(''));
  }
  camelCase.forEach((camelVar, i) => {
    const repeated = '✅'.repeat(i + 1);
    console.log(`${camelVar.padEnd(20)} ${repeated}`);
  });
};
btn.addEventListener('click', snakeToCamel);
