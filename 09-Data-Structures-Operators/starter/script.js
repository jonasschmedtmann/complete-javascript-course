'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Coding challenge 1
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

const [ players1, players2] = game.players;

console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2)

function printGoals(...number) {
  const scores = number.length;
  for (let i = 0; i < scores; i++) {
    console.log(`${number[i]}, ${scores} goals were scored`);
  }
}
printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');

(team1 < team2) && console.log(team1);

//coding challenge 2

for (const [key, val] of game.scored.entries()) {
  console.log(`Goal ${key+1}: ${val}`);
}

let sum = 0;
let length = Object.entries(game.odds).length;
for (const odd of Object.values(game.odds)) {
  sum += odd; 
}
console.log(sum/length);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = (game[team]) ? `victory ${game[team]}` : `draw`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//coding challenge 3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents)

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)

for (const [time, event] of gameEvents) {
  const statement = time <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${statement} ${time}: ${event} `);
}

//coding challenge 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', conversion);

function conversion () {
  const text = document.querySelector('textarea').value;
  const arr = text.split('\n');
  for (const [counter, name] of arr.entries()) {
    const [first, second] = name.replaceAll(" ", "").split("_");
    const output = first.toLowerCase() + second[0].toUpperCase() + second.slice(1).toLowerCase();
    console.log(output.padEnd(20," ") + "*".repeat(counter + 1));
  }
}