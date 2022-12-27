'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Your main dish ${this.mainMenu[mainIndex]} and starter dish ${this.starterMenu[starterIndex]} will be delivered to ${address} at around ${time}.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};

// property NAMES;
// const properties = Object.keys(openingHours);
// // console.log(properties);
// const values = Object.values(openingHours);
// console.log(values);
// const entryHours = Object.entries(openingHours);
// console.log(entryHours);
// // let str = `We are open on ${properties.length} days:`;
// // for (const day of Object.keys(openingHours)) {
// //   str = str + ` ${day}`;
// // }
// for (const [key, { open, close }] of entryHours) {
//   let final = `on ${key} we open at ${open} and close at ${close}`;
//   console.log(final);
// }

// // console.log(str);

// // We are open on 3 days: thu, fri, sat,

// // console.log(
// //   restaurant.orderPastas?.('tim', 'david', 'han') ?? 'Method does not exist'
// // );

// const users = [
//   {
//     name: 'david',
//     age: 12,
//     email: 'kp@gmail.com',
//   },
// ];

// console.log(users);
// console.log(users[5]?.name ?? 'error');

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`We are open on ${day} at ${open}.`);
// }

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri.open);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu.entries());
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

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

//Coding Challege #2
//1
const scored = game.scored.entries();
for (const [i, el] of scored) {
  console.log(`Goal ${i}: ${el}`);
}
//2
const gameOdds = Object.entries(game.odds);
let sum = 0;
for (const [team, value] of gameOdds) {
  sum += value;
}
let avg = sum / Object.values(game.score).length;
console.log(`Average odd is ${avg}.`);
//3

for (const [team, odd] of gameOdds) {
  const teamStr = team === 'x' ? 'draw' : `vicotry ${game[team]}`;

  console.log(`Odd of ${teamStr}: ${odd}`);
}
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
/*
//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, ...fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6
const printGoals = function (...goals) {
  console.log(`${goals.length}: ${goals}`);
};
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoals(...game.scored);
//7
team1 < team2 && console.log('Team1 will likely to win');
team1 > team2 && console.log('Team2 will likely to win');
// //1

// const [players1, players2] = game.players;
// //2
// const [gk, ...fieldPlayers] = players1;
// //3
// const allPlayers = [...players1, ...players2];
// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// //5

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// //6
// const printGoals = function (...goals) {
//   console.log(`${goals.length} goals:${goals}`);
// };
// //7
// console.log(team1 < team2 && `team1 will likely to win`);

// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
/*
// console.log(players1, players2);
// console.log(gk, fieldPlayers);
// console.log(allPlayers);
// console.log(players1Final);
// console.log(team1, draw, team2);
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazaa',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner &&= 'Anonymous';

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// const guestCorrected = restaurant.numGuests ?? 10;
// console.log(guests);
// console.log(guestCorrected);

// const ing = prompt('Enter the ingredients').split(', ');
// const ing = [
//   prompt("Let's make a pasta? Ingredient?"),
//   prompt('Second ingredient?'),
//   prompt('Last ingredient?'),
// ];
/*
const [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a, b, ...rest);

const [...foods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(foods);

const { sat, fri } = restaurant.openingHours;

console.log(sat, fri);

const add = function (...x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 4, 6, 3);
add(8, 3, 5, 1, 5, 3, 4, 3);

const w = [23, 5, 7];
console.log(w);
add(...w);
/* ---------------------------------------------------------------
restaurant.orderDelivery({
  time: '12',
  address: '257 s. manhattan',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: '257 s. manhattan',
  mainIndex: 2,
});

const { name, openingHours, categories } = restaurant;
const {
  sat: { open: o, close: c },
} = openingHours;
// console.log(o, c);

// Nested objects

// Default Values
const {
  ross = [],
  name: restaurantName = [],
  openingHours: hours,
  location: loc,
} = restaurant;
// console.log(ross, restaurantName, hours, loc);

// const { sat } = hours;
// console.log(sat);

// Mutating object variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// console.log(obj);
({ a, b } = obj);
// console.log(a, b);

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);
const [starter, mains] = restaurant.order(2, 0);
console.log(starter, mains);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default vales
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
---------------------------------------------------------------
*/

/*
const arr = [7, 8, 9];
const newArr = [5, 6, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'push'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

*/
