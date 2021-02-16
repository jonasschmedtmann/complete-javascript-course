'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const storeClosed = `Closed, sorry!`;
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  // [weekdays[6]]: {
  //   storeClosed, // Store closed with message
  // },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,
  //ES6 Doesn't need : function
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //ES6 enhanced function expression
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES

const values = Object.values(openingHours);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
/*
////////////////////////////////////////////////
//LESSON: NULLISH COALESCING OPERATOR (??)
// restaurant.numGuests = 0; // not a NULLISH VALUE
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

*/
/*
/////////////////////////////////////////////////////////////////////////
//LESSON: SHORT CIRCUITING (&& AND || OPERATORS)

//Logical operators: 1. use ANY data type, 2. return ANY data type, 3. short-circuiting (if the 1st value/operand === truthy, than the other operand won't be evaluated by JS)
console.log(3 || 'jonas'); // => 3
console.log('' || 'Jonas'); // => 'Jonas'
console.log(true || 0); // => true
console.log(undefined || null); // => null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Checks Left-to-Right

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND ----');
console.log(0 && 'Jonas'); //=> 0
console.log(7 && 'Jonas'); //=> 'Jonas'

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
/*
////////////////////////////////////////////////////////////////////////////
// 1) Destructuring
//LESSON: REST PATTERN AND PARAMETERS *rest operator is to pack elements into an [array]
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of ==
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
//REST operator needs to be at the end and ONLY ONE per ___
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //!return "Pasta"

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'bacon', 'jalapenos', 'anchovies');
restaurant.orderPizza('mushrooms');
*/
/*
// LESSON: SPREAD(...) OPERATOR
const arr = [7, 8, 9]; //Array literal
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //Don't do this

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Jonas';
const letter = [...str, ' ', 'S.'];
console.log(letter);
console.log(...str);
// console.log(`${...str} Schmedtmann`); multiple values seperated by a comma are expected when we pass arguments into a function or build an array

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt('Ingredient 2? '),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//LESSSON: DESTRUCTURING OBJECTS (104)
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  opeingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // Cannot assign to a codeblock error **wrap everything in parentheses('It works")

// NESTED OBJECTS
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);
*/

/*
//LESSON: DESTRUCTURING ARRAYS(103)
const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr; // Destructuring (unpacking it)!destroying
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring an array

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // , , will skip items in an array
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Set default values for the variables when we extract them
const [p = 1, q = 1, r = 1] = [8, 9]; //useful when using api
console.log(p, q, r);

*/

/*
////////////////////CODING CHALLENGE #1 ////////////////
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
*/
/*
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
*/
/*

// //Before help

// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// */

// // const { players1 = [], players2 = [] } = printGoals;
// // const players1 = game.players[0];
// // const players2 = game.players[1];

// /*
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// */
// const bayernMunich = game.players[0][0];
// console.log(bayernMunich);
// /*
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// */
// const allPlayers = [...players1, ...players2].sort(); //sort organizes allPlayers alphabetically
// console.log(allPlayers);
// /*
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// */
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// /*
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// */
// const team1 = game.odds.team1;
// console.log(team1);
// /*
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// */
// const printgoals = function (numPlayers, numGoals, numGoalsTotal) {};

// /*
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// */

//////After help/(┬┬﹏┬┬)(┬┬﹏┬┬)(┬┬﹏┬┬)(┬┬﹏┬┬)///////////////

// // 1. Destructoring game.players
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2. Create one variable 'gk', and ...fieldPlayers (rest operator)
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. One array with allPlayers using a ...spread operator//
// const allPlayers = [...players1, ...players2].sort();
// console.log(allPlayers);

// // 4. players1 + substitutions
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5. Nested destructoring
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6. printGoals function with arbitrary players
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored); //...sread operator saves so much time

// // 7. print lower odds win the game
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
// team1 && team2 === draw && console.log('ITS A FU$$ING DRAW');
/*
//LESSON: LOOPING ARRAYS-THE FOR-OF LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); //for item of menu

//What if we want the current index && not just the current element?

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); //index + element // => (2) [0, "Focaccia"]
}

// console.log([...menu.entries()]);

*/
/*
//LESSON: ENHANCED OBJECT LITERALS

//ES6 allows 3 new enhancments to object literals
//1. function calling

//LESSON: OPTIONANL CHAINING (?.)  if a property doesn't exist "undefined" is returned immediately
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); //Checks for if the restaurant is open
// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
}

// Methods with Optional chaining
console.log(restaurant.order?.(0, 1) ?? `Method doesn't not exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method doesn't not exist`);

// Arrays
// const users = [];

const users = [
  {
    name: 'jonas',
    email: 'hello@jonas.io',
  },
];
console.log(users[0]?.name ?? `User array is empty`);
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
*/

//LESSON: LOOPING OBJECTS (OBJECT KEYS, VALUES, AND ENTRIES)
