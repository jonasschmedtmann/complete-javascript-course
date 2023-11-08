'use strict';

const fun1 = function () {
  let x = 5;

  const fun2 = function () {
    let a = 6;
  };
  fun2();
  x = 7;
};
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Ryan',
  age: 28,
};

const friend = me;
friend.age = 27;
console.log(`Friend:`, friend);
console.log(`Me: `, me);
fun1();

/* Mutating variables */
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

const restaurant = {
  name: "Mama Mia's",
  starterMenu: ['garlic bread', 'brushetta', 'meatball'],
  mainMenu: ['pizza', 'spagetti', 'Chicken Parm'],
  openingHours: {
    mon: {
      open: 900,
      close: 2100,
    },
    tues: {
      open: 900,
      close: 2100,
    },
    sat: {
      open: 1100,
      close: 2300,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};

/* const { sat } = openingHours;
console.log(sat); */

const {
  sat: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

/* Spread Operator */
const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

/* Copy Array */
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

/* Join 2 Arrays */
const greekMainMenu = ['Gyro', 'kabob', 'Shwarma'];
const mergedMenu = [...restaurant.mainMenu, ...greekMainMenu];
console.log(mergedMenu);

/* Iterables: arrays, strings, maps, sets. Not objectsf */
const str = 'Ryan';
const letters = [...str];
console.log(letters);

/* const ingredients = [
  prompt('Lets make pasta! \n Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
restaurant.orderPasta(...ingredients); */

/* REST: left side of = */
/* rest must by last element in array */
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat);

restaurant.orderPizza('cheese', 'mushrooms', 'peppers', 'bacons');

/* Short circuiting &&, ||, and ?? */
console.log(`---OR---`);
console.log(undefined || null || 0);
console.log(23 || 0);

console.log(`---AND---`);
console.log(23 && 0);
console.log(0 && 23);

console.log(`---Nullish---`);
console.log(0 ?? 23);
console.log(23 ?? 0);
console.log(null ?? 23);
console.log(23 ?? null);

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Gio Rossi',
};
/* 
rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests = rest1.numGuests || 10;
 */
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);
