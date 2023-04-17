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
  // passing in a destructured object as a single parameter
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Recieved! \n Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered at ${time} to ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Order recieved for pasta using ${ing1}, ${ing2}, and ${ing3}`)
  }
};

/*
///////////////////////////////////////////
// SECTION 105: SPREAD OPERATOR (creates a NEW array)
// doesnt create new variables therefore can only be used in places when we would otherwise write values separeted by commas
// best used when copying arrays or passing in arguments into a function
const arr = [7, 8, 9];
const badWayOfDoingThis = [1, 2, arr[0], arr[1], arr[2]];
console.log(badWayOfDoingThis); //[1, 2, 7, 8, 9] -- it works! but what a pain 🙈!

const spreadArr = [1, 2, ...arr];
console.log(spreadArr); //[1, 2, 7, 8, 9] -- works and SO MUCH EASIER!! 🙌🏼

console.log(...spreadArr); // 1 2 7 8 9 (gives back just the values rather than the whole array)

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; // creates shallow copy

// Join 2 or more arrays
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

// ITERABLES: arrays, strings, maps, sets but NOT objects
const str = 'Kassandra';
const letters = [...str, '', 'S'];
console.log(letters);

// User input spread operator
const ingredients = [
  prompt('Let\'s make pasta! Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?')
];
restaurant.orderPasta(...ingredients); // pass in ingredients to orderPasta method

// Objects
const newRestaurant = { foundedIn: 2000, ...restaurant, founder: 'Gordon Ramsey' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; // creates new object
restaurantCopy.name = "Hell's Kithcen!"; // makes changes on new object without affecting original object
console.log('restaurant copy info', restaurantCopy);
console.log('original restaurant info', restaurant);
*/

/*
///////////////////////////////////////////
// SECTION 104: DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant; // {what values you want in any order} = from what?
console.log(name, openingHours, categories);

// Pseudo names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default value to empty array if variable doesn't exist
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects : destructuring
const {
  fri: { open: o, close: c }
} = openingHours;
console.log(o, c);

// destructuring object from object method
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '901 Parade Rd',
  starterIndex: 1,
})

*/
///////////////////////////////////////////
/* // SECTION 103: DESTRUCTURING ARRAYS
// Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring better
// JS understands that if your array is on the left side of the equation, you are trying to destructure
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories; // look at restaurant.categories and assign [0] = main, [1] = SKIPPED, [2] = secondary
console.log(main, secondary); // log [0, 2] Italian Vegetarian

// Switching variables using a middle man 'TEMP' 👎🏼
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// switching variables using DESTRUCTURING 👍🏼
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

// Receive 2 return values from one function call
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // destructuring an array from an array
// console.log(i, j); // 2 (2) [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); //2 5 6

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // if we dont add default values, r will show as undefined since we are destructuring an array with only 2 values
*/