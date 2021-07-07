'use strict';

// Working with Strings
// BEGIN PART 1
/*
const airline = 'TAP Air Portugal';
const plane2 = 'A320';

// .slice() needs strings
// Using .slice creates substrings that must be stored to be used
// Strings are primitives and thus, immutable
// .slice([start value],[end value]), and the length is always the end value - start value

console.log(airline.slice(4, 7));

// Extracting the first word uses 0 index and first instance of a space
console.log(airline.slice(0, airline.indexOf(' ')));
// Extract the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Negative values reverse the extraction process
console.log(airline.slice(-2));
// Here we slice off the first and last letters
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    console.log('you got a middle seat');
  } else {
    console.log('You got lucky!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');*/
// END PART 1

// BEGIN PART 2
/*
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email Input

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing Part of Strings
// .replace() only operates on the first occurence
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23.';
console.log(announcement.replace(/door/g, 'gate')); // Use Regex to find all (g for global) instances of the door string
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

// Practice Exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife' || baggage.includes('gun'))) {
    console.log("You aren't allowed on board.");
  } else {
    console.log('Weclome aboard!');
  }
};

checkBaggage('I have a laptop, some food, and a pocket Knife.');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
// END PART 2

// BEGIN PART 3
/*
console.log('a+very+nice+string'.split('+'));
console.log('KJ Roelke'.split(' '));

const [firstName, lastName] = 'Kaleb Roelke'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
const passenger = 'Jessica ann smith davis';

capitalizeName(passenger);
capitalizeName('jonas schmedtmann');
capitalizeName('kaleb roelke');

// Padding strings
// Adding characters until the string reaches a certain length

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log('Jonas'.padEnd(25, '+'));

// Example: Credit Card Number Masking

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(1234123412345678));
console.log(maskCreditCard('12341234123456782234829123'));

// .repeat()

const message2 = 'Bad weather...All departures delayed... \n';

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${':/  '.repeat(n)}`);
};

planesInLine(5);
*/
// END PART 3

// Data needed for first part of the section

const weekdays = [
  'Monday',
  'Tuesday',
  'Wedesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// LEARNING ABOUT MAPS
/* 
// Maps can have keys of any type, not just strings.
// They're basically more powerful Objects
// the .set() method returns the Map, so we can chain it.

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// Chaining .set() methods
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// Retrieving data with .get() method
// console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Other Map methods: .has(), .delete(), .size(), and .clear();

// console.log(rest.has('categories'));
rest.delete(2);
// console.log(rest.size);

rest.set(document.querySelector('h1'), 'Heading');

const arr = [1, 2];
rest.set(arr, 'Test');
// console.log(rest);

// console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again.'],
]);
// console.log(question);

// Convert Object to Map
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

console.log(question.get('question'));
for (const [k, v] of question) {
  if (typeof k === 'number') console.log(`Answer ${k}: ${v}`);
}
const answer = Number(prompt('Your Answer'));
console.log(question.get(answer === 3));

// Convert Map to Array
console.log([...question]); */

// LEARNING ABOUT SETS
/* 
// A set is a collection of unique values: it cannot have duplicates.
// Sets can hold mixed data types.
// Sets are iterables.
// Sets aren't indexable, thus there's no way to retrieve data from a Set.

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
// This only has 3 items

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

////////////////////////////////
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
// Make 'staffUnique' an Array (from a Set) by adding brackets and using the spread operator to deconstruct the Set and make it an Array.
console.log(staffUnique);
// End Example
/////////////////////////////////////
 */

// Looping Arrays: The For-Of Loop
/*
////////////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}
 */

// CODING CHALLENGES
// PROVIDED DATA
const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
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

// BEGIN CHALLENGE #1
/*
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];


// NOTES ON DESTRUCTURING NESTED OBJECTS
// Destructuring nested objects uses multiple curly braces && parameters.
// To rename a variable, simply use the : 

const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`${players.length} goals were scored by ${players}!`);
  }
};
printGoals(...game.scored);
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// 7.*/
// END CODING CHALLENGE #1

// BEGIN CODING CHALLENGE #2
/* const challenge1 =
    '=====1. Loop over the game.scored array & print each player name & goal number=====',
  challenge2 =
    '=====2. Use a loop to calculate the average odd and log it.=====',
  challenge3 = '=====3. Print the odds to the console.=====',
  challenge4 =
    '=====4. Create an object("scorers") that has names of players who scored and the number of goals they scored.=====';

// 1.
console.log(challenge1);
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}!`);
}

// 2.
console.log(challenge2);
let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd;
}
average /= Object.values(game.odds).length;
console.log(average);

// 3.
console.log(challenge3);
for (const [results, chances] of Object.entries(game.odds)) {
  console.log(`${game[results]}`);
  const teamStr = results === 'x' ? 'draw' : `victory ${game[results]}`;
  console.log(`Odds of ${teamStr}: ${chances}`);
}

// 4.
console.log(challenge4);

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);*/
// END CODING CHALLENGE #2

// BEGIN CODING CHALLENGE #3
/* const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an 'events' array  of unqiue events during the game
console.log('=====1. Unique Game Events=====');
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Remove the Yellow from 64th minute
console.log('=====2. Remove 64th min Yellow=====');
gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute average time between events and log to console
console.log(
  '=====3. Compute average time between events and log to console====='
);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4. Loop over Map and log each eleemnt to the console and which half it occurs in
console.log(
  '=====4. Loop over Map and log each eleemnt to the console and which half it occurs in====='
);

for (const [time, event] of gameEvents) {
  const half = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${time}: ${event}`);
} */
// END CODING CHALLENGE #3

// BEGIN CODING CHALLENGE #4
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // split lines at line break with Regex character
  const rows = text.split('\n');
  // Destructure rows into nested array with index and content
  for (const [i, row] of rows.entries()) {
    // Destructure entries into first & second words, set to lower case, remove whitespace
    const [first, second] = row.toLowerCase().trim().split('_');
    // Create camelCase
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // Output to the console with same
    console.log(output.padEnd(5, '. '));
  }
});


PASTE ME INTO TEXT AREA
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

*/
// END CODING CHAllENGE #4

// CODING CHALLENGE #5

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airportCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${
    type.startsWith('_Delayed') ? '⚠️  ' : ''
  } ${type.replaceAll('_', ' ')} from ${airportCode(from)} to ${airportCode(
    to
  )} (${time.replace(':', 'h')})`.padStart(40);

  console.log(output);
}
