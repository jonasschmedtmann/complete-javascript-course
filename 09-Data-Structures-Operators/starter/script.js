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

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are 
  field players. For Bayern Munich (team 1) create one variable ('gk') with the 
  goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create 
  a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team
  1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
  names (NOT an array) and prints each of them to the console, along with the nu
    mber of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
   team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Th
  en, call the function again with players from game.scored

GOOD LUCK 😀
*/

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

/* Q1 */
const [players1, players2] = game.players;
console.log(players1, players2);

/* Q2 */
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

/* Q3f */
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

/* Q4 */
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

/* Q5 */
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

/* Q6 */
const printGoals = function (players) {
  console.log(...players);
  console.log(`Goals scored = ${players.length}`);
};

printGoals(game.scored);

/* Q7 */
team1 < team2 && console.log(`Team 1 is more likely to win`);
team2 < team1 && console.log(`Team 2 is more likely to win`);

/* Optional chaining */
console.log('---Optional Chaining---');
// Without
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);

// Example
const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

/* Property Values */
console.log(`---Properties---`);
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

/* Keys */
for (const day of Object.keys(restaurant.openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

/* Property Values */
const values = Object.values(restaurant.openingHours);
console.log(values);

/* Property Entries */
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We 
  already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except 
  for "draw"). HINT: Note how the odds and the game objects have the same 
  property names 😉

BONUS: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In 
this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/* Q1 */
for (const [key, name] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${name}`);
}

/* Q2 */
let averageOdd = 0;
for (const odd of Object.values(game.odds)) {
  averageOdd += odd;
}
averageOdd /= Object.values(game.odds).length;
console.log(averageOdd);

/* Q3 */
for (const [key, odd] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[key] ? `victory ` : ``}${game[key] || 'draw'}: ${odd}`
  );
}

/* Bonus */
const scorers = {};
for (const players of game.scored)
  scorers[players] ? (scorers[players] += 1) : (scorers[players] = 1);
console.log(scorers);

/* Sets - a collection of unique values*/
console.log(`---Sets---`);
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);

console.log(new Set('Ryan'));

/* Set size */
console.log(ordersSet.size);

/* set has method */
console.log(ordersSet.has('Pizza'));

/* set add method */
ordersSet.add('Garlic Bread');

/* set delete item method */
ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

/* No indexes in sets/ no way to retrieve items */

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const staffUnique = new Set(staff);
const staffSpread = [...new Set(staff)];
console.log(staffUnique);
console.log(staffSpread);

/* Maps */
console.log(`---Maps---`);
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Itay');
console.log(rest.set(2, 'Portugal'));

rest.set('open', 11).set('close', 23);

console.log(rest.get('name'));

console.log(rest.has('name'));
console.log(rest.delete(2));
console.log(rest.size);
rest.clear;

rest.set([1, 2], 'Test');
console.log(rest.get(1));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

/* Map iteration */
console.log(`-Map iteration-`);
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try Again! 🚫'],
]);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`${key}: ${value}`);
}

/* console.log(
  question.get(question.get('correct') === Number(prompt('Your answer')))
); */

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a 
log of the events that happened during the game. The values are the events 
themselves, and the keys are the minutes in which each event happened (a 
football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened 
(no duplicates)
2. After the game has finished, is was found that the yellow card from minute 
64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, 
every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in 
the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
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

console.log(`Coding Challenge #3`);

/* Q1 */
let events = [...new Set(gameEvents.values())];
/* for (const [key, value] of gameEvents) events.add(value); */
console.log(events);

/* Q2 */
gameEvents.delete(64);

/* Q3 */
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

/* Q4 */
for (const [key, value] of gameEvents) {
  if (key < 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  else console.log(`[SECOND HALF] ${key}: ${value}`);
}

/* STRINGS */
console.log(`--- Strings ---`);

const airline = 'TAP Air Portugal';
const plane = 'A320neo';

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You got the middle seat 😢`);
  else console.log('You got lucky 🍀');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

/* Strings Part 2 */
console.log(`---Strings Part 2---`);
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

/* const passenger = 'rYaN';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect); */

/* Check email */
const email = 'notryanpark@gmail.com';
const loginEmail = ' Hello@gmail.com \n';

/* const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); */

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceGB = '288,98£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
console.log(plane.includes('320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('A3'));

if (plane.startsWith('A3') && plane.endsWith('neo'))
  console.log('Part of new airbus family');

const checkBaggage = function (baggage) {
  const items = baggage.toLowerCase();
  if (items.includes('knife') || items.includes('gun'))
    console.log('You are not allowed to board');
  else console.log('welcome aboard! 🫡');
};

checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/* Strings Part 3 */
console.log('---Strings Part 3---');
console.log('a,new,nice,string'.split(','));

const [firstName, lastName] = 'Ryan Park'.split(' ');

console.log(firstName);
console.log(lastName);

const fullName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(fullName);

const capitalizeName = function (name) {
  const nameArray = name.toLowerCase().split(' ');
  const namesUpper = [];
  // namesUpper.push(word[0].toUpperCase() + word.slice(1));
  for (const word of nameArray)
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  console.log(namesUpper.join(' '));
};

const passenger = 'ryan cHaRles Park';

capitalizeName(passenger);

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('ryan'.padStart(25, '+'));
console.log('ryan'.padEnd(25, '+'));

const maskCreditCard = function (number) {
  const str = String(number);
  const maskedStr = str.slice(-4).padStart(str.length, '*');
  return maskedStr;
};

console.log(maskCreditCard(934729304738));
console.log(maskCreditCard(12345678));

const message2 = 'Bad Weather Warning... All Departures Delayed...';

console.log(message2.repeat(5));
