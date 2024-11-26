'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

console.log(flights.split('+'));
const flight = function () {
  for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${
      type.startsWith('_Delayed') ? '❤️' : ' '
    }${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(
      to
    )} (${time.replace(':', 'h')})`.padStart(45);
    // const finalOut = output.padStart(45);
    console.log(output);
  }
};

flight(flights);

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

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

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const text = document.querySelector('textarea').value;

// const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const toMultipleLines = text.split('\n');
//   for (const [i, el] of toMultipleLines.entries()) {
//     const [firstName, secondName] = el.toLowerCase().trim().split('_');
//     const newText =
//       firstName +
//       secondName.replace(`${secondName[0]}`, `${secondName[0].toUpperCase()}`);
//     console.log(`${newText.padEnd(20)}${'✔️'.repeat(i + 1)}`);
//   }
// });

// button.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const lowerCase = text.toLowerCase();
//   const splitLine = lowerCase.split('\n');
//   for (const s of splitLine) {
//     const splitUnder = s.split('_');
//     const camelJoin =
//       splitUnder[0] + splitUnder[1][0].toUpperCase() + splitUnder[1].slice(1);
//     const trim = camelJoin.trim(' ');
//     const addSpace = trim.padEnd(25, ' ');
//     const addCheckMark = addSpace.padEnd(26, '*');
//     console.log(addCheckMark);
//   }
// });

// const newCode = function (text) {
//   const str = String(text);
//   const lowerCase = str.toLowerCase();
//   const split = lowerCase.split('_');
//   const join = split[0] + split[1][0].toUpperCase() + split[1].slice(1);
//   console.log(join);
//   console.log(split);
// };

// newCode('underscore_case');
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// Repeat is it repeating itself
// const message3 = 'Time is the bomb';
// console.log(message3.repeat(4));

// const maskCreditCard = function (number) {
//   const str = String(number);
//   const pad = str.slice(0, 3).padEnd(7, '*');
//   console.log(pad);
// };
// maskCreditCard(3452553);
// maskCreditCard(2398237);

// const firstMask = function (number) {
//   const str = number + '';
//   const pad = str.slice(-4).padStart(str.length, '*');
//   console.log(pad);
// };
// firstMask(3452553);
// firstMask(2398237342);
// firstMask(2398234242589375);

// Padding is add number of characters to it
// const message = 'Go to gate 2number3!';
// console.log(message.padStart(25, '+'));
// console.log(message.padEnd(25, '+'));

// const captializeName = function (names) {
//   const split = names.split(' ');
//   const arr = [];
//   for (const s of split) {
//     // const d = s[0].toUpperCase() + s.slice(1);
//     const d = s[0].replace(s[0], s[0].toUpperCase()) + s.slice(1);
//     arr.push(d);
//   }
//   console.log(arr.join(' '));
// };

// captializeName('jessica ann smith davis');
// captializeName('tim ha');

// split() splits the words and makes an array

// const [firstName, lastName] = 'tim ha'.split(' ');
// console.log(firstName, lastName);
// // join(0) joins the array with what you assigned
// const newName = ['Mr.', firstName, lastName].join(' ');
// console.log(newName);

// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase().trim();
// // trim() will remove all spaces
// // const trimmedEmail = lowerEmail.trim();
// console.log(lowerEmail);

// const priceGB = '288,96&';
// const priceUS = priceGB.replace(',', '.').replace('&', '$');
// console.log(priceUS);

// const announcement =
//   'all passengers come to boarding door 23, Boarding door 23!';
// const doorToGate = announcement.replaceAll('door', 'gate');
// console.log(doorToGate);
// const passenger = 'jOnAS';
// const newPassenger =
//   passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
// console.log(passenger);
// console.log(newPassenger);
// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   console.log(
//     s === 'C' || s === 'E'
//       ? 'You are on middle seat'
//       : 'You are not on middle seat'
//   );
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// const airline = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(airline.slice(8, 16));
// // slice is like slicing something in between
// console.log(airline.slice(0, airline.lastIndexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(plane[0]);
// console.log('B324'[1]);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('a'));

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 5
// for (const [time, event] of gameEvents.entries()) {
//   console.log(
//     `${time < 45 ? '[FIRST HALF]' : '[SECOND HALF]'}${time}: ${event}`
//   );
// }

// 1
// const events = [...new Set([...gameEvents.values()])];
// const eventss = new Set([...gameEvents.values()]);

// console.log(events);
// console.log(eventss);
// // 2
// gameEvents.delete(64);
// console.log(gameEvents);
// // 3
// console.log(
//   `An event happend, on average, ever ${90 / gameEvents.size} minutes`
// );
// // 4
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happend, on average, ever ${time / gameEvents.size} minutes`
// );
// 5

// "An event happened, on average, every 9 minutes"

// for (const [time, event] of gameEvents) {
//   console.log(event);
// }
// console.log(events);

// console.log(gameEvents);
// Set examples
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// const question = new Map([
//   ['question', 'What is the best program language?'],
//   [1, 'c++'],
//   [2, 'Ruby'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Wrong!'],
// ]);

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('What is your answer?'));
// // console.log(question.get(answer === 3 ? true : false));
// console.log(question.get(question.get('correct') === answer));

// convert map to array
// console.log(...question);
// console.log(question);
// console.log(question);

// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);
// console.log(orderSet);
// const names = new Set('Timmy');
// console.log(new Set());
// console.log(names.size);
// console.log(orderSet.has('Pastas'));
// orderSet.add('Salad');
// orderSet.delete('Salad');
// orderSet.clear();
// console.log(orderSet);

// const staffs = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffsd = new Set(staffs);
// const staff = [...new Set(staffs)];
// console.log(staffsd);
// console.log(staff);
// for (const staf of staff) {
//   console.log(`There are ${staf}`);
// }

// const rest = new Map();
// rest.set('name', 'Tim');
// rest.set(true, 'open').set(false, 'close');
// rest.set('open', 11);
// rest.set('closed', 23);

// const time = 21;
// console.log(rest.get(true));
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));
// console.log(rest.size);
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
// for (const [i, el] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${el}`);
// //2
// let avg = 0;
// for (const odd of Object.values(game.odds)) {
//   avg += odd;
//   avg / odd.length;
// }
// console.log(avg);
// //3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : game[team];
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }
//4

// const scorers = {};
// for (const player of game.scored) {
//   console.log(player);
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);

//   scorers['hi'] = 'hl';
// }

// const test = {};
// test['2'] = 'h';
// console.log(test);

// console.log(scorers);

// const testArr = [];
// testArr['testt'] = 'test';
// console.log(testArr);

/*
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/
// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

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
