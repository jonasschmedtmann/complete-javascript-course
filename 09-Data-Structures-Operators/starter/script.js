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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Your main dish ${this.mainMenu[mainIndex]} and starter dish ${this.starterMenu[starterIndex]} will be delivered to ${address} at around ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};
const ing = prompt('Enter the ingredients').split(', ');
console.log(ing);
console.log(...ing);

restaurant.orderPasta(...ing);

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
