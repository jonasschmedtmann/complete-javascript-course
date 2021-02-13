'use strict';

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
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

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
