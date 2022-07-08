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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your pasta contains ${ing1},${ing2} and ${ing3}`);
  },
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

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// swtiching variables
// const temp = main;
// main = secondary;
// secondary = temp;

// [main, secondary] = [secondary, main];
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//here it assigns a default value in case an element from the array is missing
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// the spread operator expands all elements of an array at one
// it takes all the elements from an array, without creating new variables

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array

const mainMenuCopy = [...restaurant.mainMenu];

// join arrays

const mainMenuJoin = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(mainMenuJoin);

// Iterables : arrays, strings, maps, sets, NOT objects
// spread does not support template literals: ${...str}
const str = 'Valentin';
const letters = [...str, , 'V.'];
const lettersTwo = [...str, ' ', 'V.'];
console.log(letters);
console.log(lettersTwo);
console.log(...str);
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// //how to do it real-world style
// restaurant.orderPasta(...ingredients);

// objects

const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Joe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//SPREAD on the right
const arrfour = [1, 2, ...[3, 4]];
// REST on the right
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// aici izoleaza pizza si risotto de restul,
//   apoi grupeaza tot prin REST in otherFood,
//   iar in dreapta descompune cele doua meniuri in elemente individuale pentru a fi regrupate in alt array

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.lenght; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 5);
// add(4, 7, 8, 3, 10);
// add(11, 5, 8, 4, 6, 2, 9, 1);

//use ANY data type, return ANY data type, short circuting
// if the first operator is 'truthy', it will return it
console.log(' ---- OR ----');
console.log(3 || 'vali');
console.log('' || 'vali'); // '' is falsy
console.log(true || 0); // 0 is falsy
console.log(undefined || null); // undefined is falsy
console.log(0 || undefined); // 0 is falsy
console.log(undefined || 0 || '' || null);

// shortcircuiting can be used to set a default value if the variable / statement is falsy
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(' ---- AND ----');
// the && operator continues validation if the first value is truthy
// if the first value is falsy, then it stops checking
console.log(3 && 'Vali');
console.log('' && 'Vali'); // '' is falsy
console.log(true && 0); // 0 is falsy
console.log(undefined && null); // undefined is falsy
console.log(0 && undefined); // 0 is falsy
console.log(undefined && 0 && '' && null && 'Vali');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// using the operand instead of the 'if' statement
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Nullish Coeliscing works with nullish values: null or undefined

restaurant.numGuests = null;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

console.log('======Logical Operators=====');

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// is the key-value truthy? of NOT, it assigns a value
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// the NULLISH assignment oerator will assign a value if the values are nullish

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// is the key-value truthy? of YES, it assigns a value

rest2.owner &&= '<ANONYMOUS>';
// rest2.numGuests &&= 10;

console.log(rest1);
console.log(rest2);

console.log('==== CODDING CHALLENGE ====');

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

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
// console.log(players1);
// console.log(players2);
// const gk1 = [players1[0]];
// const gk2 = [players2[0]];

const [gk1, ...fieldPlayers1] = [...players1]; // pentru ca avem obiectul descompus in array mai sus, primul element al acelui array va fi gk1, iar restul va fi fieldPlayers1 (REST)
const [gk2, ...fieldPlayers2] = [...players2];
// const fieldPlayers2 = ;
const allPlayers = [...players1, ...players2];
console.log(gk1);
console.log(gk2);
console.log(fieldPlayers1);
console.log(fieldPlayers2);
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game; // DIN game extrag ODDS si il impart in ce variabile doresc sa EXTRAG. Pot sa le si redunumesc (x:draw)

console.log(team1);
console.log(draw);
console.log(team2);
// 6.

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  console.log(...players);
};

printGoals('Davies', 'Muller', 'Lewandowski');
printGoals(...game.scored);

game.odds.team1 < game.odds.team2 &&
  console.log('Team 1 is more likely to win');
game.odds.team1 > game.odds.team2 &&
  console.log('Team 2 is more likely to win');

console.log('===111. The for-of loop ===');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

// this below lists the items in the menu with index and element, destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

// console.log([...menu.entries()]);
