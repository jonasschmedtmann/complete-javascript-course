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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

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
