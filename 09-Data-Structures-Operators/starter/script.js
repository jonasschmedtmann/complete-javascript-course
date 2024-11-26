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
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20.00`,
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2,ing3) {
    console.log(
      `Order Received! Preparing pasta with ${ing1},${ing2} & ${ing3}`
    );
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

restaurant.orderDelivery({
  time: `22.30`,
  address: `96 BuckleyRoad`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: `96 BuckleyRoad`,
  starterIndex: 1,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log('a,b', a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Destructuring Arrays:
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// ---  a diff way:

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse)

const nested = [2, 4, [5, 6]];

// const [i, , j] = nested

const [i, , [j, k]] = nested;
// console.log(i, j, k)

const [p = 1, q = 2, r = 3] = ['marce', 'sos'];
// console.log(p, q, r)

// console.log(student1)
// console.log(student2)

// let [student1, student2] = ['budi', 'sinta']
let student1 = 'budi';
let student2 = 'sinta';
[student1, student2] = [student2, student1];

// console.log('student1', student1); // 'sinta'
// console.log('student2', student2); // 'budi'

const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(newMenu)

const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy)
restaurantCopy.name = 'la Bella Pasta';

// console.log(restaurantCopy.name)
// console.log(restaurant.name)

// const ingredients = [
//   prompt('1st Pasta ingredient'),
//   prompt('2nd Pasta ingredient'),
//   prompt('3rd Pasta ingredient'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);
