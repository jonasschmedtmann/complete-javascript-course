'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

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
/** 
// CHALLENGE #3

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/
/** 
// 1. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

let avgTime = 0;
let prevTime = 0;
for (const [key, value] of gameEvents) {
  avgTime += key - prevTime;
  prevTime = key;
}
console.log(
  `An event happened, on average, every ${avgTime / gameEvents.size} minutes`
);

// Answer

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:

for (const [min, event] of gameEvents) {
  let half = min <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${half} ${min}: ${event}`);
}
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
/**
 * CHALLENGE #1
// 1. create players1 & players2 data arrays
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. create gk and fieldPLayers on team
const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

// 3. create allPlayers array of all players on both teams

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. create players1Final array with all players on both teams plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, ...['Thiago', 'Coutinho', 'Perisic']];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

const { team1, x: draw, team2 } = { ...game.odds };
// const {odds: {team1, x: draw, team2}} = game; // his answer
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored, by:`);
  for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]}`);
  }
};

printGoals('Davies', 'Muller', 'lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log('Team 1 is more likely to win.'); // his answer
team2 < team1 && console.log('Team 2 is more likely to win.'); // his answer
*/

/**
 * CHALLENGE #2


///////////////////////////////////////
// Coding Challenge #2


Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/** 
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [key, player] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${player}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

let odd = 0;
let items = 0;
for (const [i, v] of Object.entries(game.odds)) {
  odd += v;
  items++;
}
let avgOdds = odd / items;
console.log(avgOdds);

// ANSWER
let average = 0;
let odds = Object.values(game.odds);

for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:

function printOdd(team) {
  let teamName = team === 'x' ? 'draw' : 'victory ' + game[team];
  let odds = game.odds[team];
  console.log(`Odd of ${teamName}: ${odds}`);
}

printOdd('team1');
printOdd('team2');
printOdd('x');

// ANSWER
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'Draw' : 'Victory ' + game[team];
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.

const scorers = {};

for (const scorer of game.scored) {
  console.log(scorer);
  scorers[scorer] ??= 0;
  scorers[scorer]++;
}
console.log(scorers);

// ANSWER
const scorersAns = {};
for (const player of game.scored) {
  scorersAns[player] ? scorersAns[player]++ : (scorersAns[player] = 1);
}
console.log(scorersAns);
*/
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // standard way to write key
  thu: {
    open: 12,
    close: 22,
  },
  // use square brackets to compute name
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // can use string literal to compute name
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // numGuests: 23,

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '20:30',
    address,
  }) {
    console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order Received: ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  // new way of writing methods / functions vs orderPizza below
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
  //ES6 enhanced object literals
  openingHours,
};

// Data Structures: Which to use when?

/**
// Sets & Maps

const question = new Map([
  ['question', 'What is the best prog lang in world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'You got it right!'],
  [false, 'You are wrong.'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = 3;
console.log(answer);

console.log(question.get(answer === question.get('correct')));

console.log([...question]);
// console.log(question.entries()); // same as above
console.log(...question.keys());
console.log(...question.values());
*/
/** 
// Set has unique values. No duplicates

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); // removes duplicate values 3 vs 6

console.log(new Set('Jonas'));

console.log(ordersSet.size); // 3

console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // will ignore since it already there
console.log(ordersSet);

ordersSet.delete('Risotto');
console.log(ordersSet);

// NOTE: No way to retrieve values from Set

// ordersSet.clear();
// console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // array of unique values
console.log(staffUnique);

// How many unique values in an array?
console.log(new Set(staff).size);

console.log('----- MAPS -----');

// MAP: data structure used to map values to keys -- keys can be anything, not just strings

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'First Location');
console.log(rest.set(2, 'Second Location')); // returns FULL updated map

rest
  .set('categories', ['Italian', 'Pizzeria', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 15;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

console.log(rest.has('categories'));
console.log(rest.has(2));
rest.delete(2);
console.log(rest.has(2));
console.log(rest.size);
// rest.clear();
// console.log(rest.size);

rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.get([1, 2])); // doesn't work

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // works

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/
/** 
const properties = Object.keys(openingHours);
const values = Object.values(openingHours);
const entries = Object.entries(openingHours);

console.log(properties);
console.log(values);
console.log(entries);

let openStr = `We are open ${properties.length} days each week: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
*/
/** 
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // w/o check it causes JS error since mon is undefined

// ES20 enhancement - OPTIONAL CHAINING ?.
// console.log(restaurant.openingHours.mon?.open); // only reads open if mon exists (not null and not undefined)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // user nullish coalesing because opening time is 0 on saturday
  console.log(`On ${day} we open at ${open}`);
}

// Methods -- ?. between method name and parens, ex: function?.(args)
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); //runs order
console.log(restaurant.notReal?.(0, 1) ?? 'Method does not exist'); // returns MDNE string

// Arrays

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'Users empty'); // Jonas
console.log(users[1]?.name ?? 'Users empty'); // Users empty
*/
/**
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for-of loop to print each item in the array
for (const item of menu) console.log(item);

console.log([...menu.entries()]); // array of array [index, element]

// for-of loop to print teach item and its index, using deconstructed array
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // index and array element
}
 */
/** 
const rest1 = {
  name: 'Capir',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Joe Rossi',
};

// Add numGuests value to all restaurants
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1.numGuests, rest2.numGuests); // 20, 10

// Or Assignment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1.numGuests, rest2.numGuests); // 20, 10

// Nullish Coalescing Assignment Operator
rest1.numGuests = 0;
rest1.numGuests ||= 10;
console.log(rest1.numGuests); // will be 10 (not what we want)

rest1.numGuests = 0;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests, rest2.numGuests); // 0, 10 (what we want)

// AND Assignment Operator
// assigns a value if value evaluates to truthy
rest1.owner &&= 'Anonymous'; // will evaluate as falsey
rest2.owner &&= 'Anonymous'; // will evaluate as truthy
console.log(rest1, rest2); // rest2 will have owner set to Anonymous, rest1 will not add an owner variable
*/
/** 
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10; // will be 10, which is not what we want!
console.log(guests3);

// Nullish Coalescing Operator ??: Null, undefined
// 0, '' are evaulated as truthy values
const guestCorrect = restaurant.numGuests ?? 10; // will be 0, which is what we want
console.log(guestCorrect);
*/
/** 
// Can use and return ANY data type
// Logical OR
// Short-Circuit Evaluation: will return first "true" truthy variable
console.log(3 || 'Jonas');
console.log('' || 0 || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// preferred way to write a default value
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10; // will be 10, which is not what we want!
console.log(guests3);

console.log('---- OR ----');
// Logical AND
// Short-Circult Evaluation: will return first falsey value or last truthy value if all evaluate as truthy
console.log(0 && 'Jonas'); // returns first falsey
console.log(7 && 'Jonas'); // if all truthy, returns last truthy

console.log('Hello' && 23 && null && 'jonas');

// evaluate whether the function exists before calling it
if (restaurant.orderPizza) {
  restaurant.orderPizza('cheese', 'pepperoni');
}
restaurant.orderPizza && restaurant.orderPizza('olives', 'pineapple');
*/
/** 
// Rest Pattern & Parameters
// spread on righthand side of =
const arr = [1, 2, ...[3, 4]];

// REST on the lefthand side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// destructuring array with REST Pattern
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; // REST element MUST be last element
console.log(pizza, risotto, otherFood); // does not include skipped elements (no pasta!)

// Objects using REST Pattern in destructing object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Function using REST parameters
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('pepperoni', 'mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('cheese');
*/
/** 
// spread operator -- can only be used in places where values are spearated by commas: function variables, arrays, strings
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr]; // ... takes individual elements from arr and adds them to new array
console.log(goodNewArr); // all elements part of parent array
console.log(...goodNewArr); // ouputs each element (not an array)

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log(restaurant.mainMenu);

// create shallow copies of array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 or more arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
// strings
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// functions parameters
// const ingredients = [
//   prompt('Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);

//Objects -- as of ES2018
// create new object doing shallow copy
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisseppe' };
console.log(newRestaurant);

// shallow clone of object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'McDonalds';
console.log(restaurant.name, restaurantCopy.name);
*/
/** 
// destructure objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// destructure objects and change name of variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// set default values when destructuring
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutate variables while destructuring objects
let a = 111;
let b = 999;
console.log(a, b);
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // have to use perens () or it will throw a JS error
console.log(a, b);

// destructuring nested objects
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);

// destructuring within function definition (see method above)
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 1,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
*/
/** 
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring array
const [x, y, z] = arr; // copies elements into array into separate variables

console.log(a, b, c);
console.log(x, y, z);
console.log(arr);


let [main, , secondary] = restaurant.categories; // can skip
console.log(main, secondary);

// to swap values (long way)
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// switching variables using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function using destructuring
const [starter, main2] = restaurant.order(2, 0);
console.log(starter, main2);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // returns 2 and array [5,6]

// nested destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 2, r = 3] = [8, 9];
console.log(p, q, r); //r is 3
*/

/**
 * STRINGS STRINGS STRINGS #122 - 124
 *


const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B
console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6 (only first occurrence)
console.log(airline.lastIndexOf('r')); // 10 (last occurence)
console.log(airline.indexOf('portugal')); // case sensitive

console.log(airline.slice(4)); // starts at position 4, 5th char (0 indexed) -- returns a new string

console.log(`"${airline.slice(4, 7)}"`); //starts at 4th char, ends at 7th char (3 total (7 - 4))

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // "al" last 2 characters
console.log(airline.slice(1, -1)); //cuts off first and last char

const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat. 🤬');
  else console.log('You got lucky! 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix passenger name capitalization
const passenger = 'jOnAS';
const passLower = passenger.toLocaleLowerCase();
const passFixed = passLower[0].toUpperCase() + passLower.slice(1);
console.log(passFixed);

// Check comparing emails

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
// const lowEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announce = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announce.replaceAll('door', 'gate')); // only works in latest ES release

console.log(announce.replaceAll(/door/g, 'gate')); // REGEX /g = global

// Booleans
const plane2 = 'A320neo';

console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));

console.log(plane2.startsWith('A32'));
console.log(plane2.startsWith('B32'));

if (plane2.startsWith('A') && plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus family.');
}

// practice

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board.');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food, and a pocket Knife.');
checkBaggage('socks and a camera');
checkBaggage('Got some snacks and a GUN for protection');

// divide string based on a character
console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Jason Holderness'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalize = function (name) {
  const words = name.split(' ');
  const namesUpper = [];
  for (const n of words) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return namesUpper.join(' ');
};

const pass1 = 'john jacobe jingle heimer schmidt';
console.log(capitalize(pass1));

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

const maskCC = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

const ccnum = 1234456789012345;
console.log(ccnum);
console.log(maskCC(ccnum));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};

planesInLine(5);
planesInLine(12);
planesInLine(23);
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/** 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// button click to call function
document.querySelector('button').addEventListener('click', function () {
  // function to read text from text area
  const text = document.querySelector('textarea').value;

  // function to parse variable names based on new line
  const namedVariables = text.split('\n');

  let newVarNames = [];
  // first attempt
  // for (let i = 0; i < namedVariables.length; i++) {
  //   const varName = namedVariables[i].trim();
  //   // function to parse words based on _
  //   const varWords = varName.toLowerCase().trim().split('_');
  //   const newWords = [];
  //   // function to uppercase first letter of each word
  //   let first = true;
  //   for (const n of varWords) {
  //     if (first) {
  //       first = false;
  //       newWords.push(n);
  //     } else {
  //       newWords.push(
  //         `${n.replace(n[0], n[0].toUpperCase())} ${'✅'.repeat(i + 1)}`
  //       );
  //     }
  //   }
  //   // function to output camelCase words
  //   newVarNames.push(newWords.join(''));
  // }

  for (const [i, varName] of namedVariables.entries()) {
    const varWords = varName.toLowerCase().trim().split('_');
    let newWord = '';
    for (const word of varWords) {
      console.log(word);
      if (varWords.indexOf(word) === 0) {
        newWord += word.trim();
      } else {
        newWord += word.replace(word[0], word[0].toUpperCase()).trim();
      }
    }
    newWord = newWord.padEnd(20) + ` ${'✅'.repeat(i + 1)}`;
    newVarNames.push(newWord);
  }
  console.log(newVarNames.join('\n'));
});

// update TextArea with converted words
*/

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(30);
  console.log(output);
}
