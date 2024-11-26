'use strict';

// ----------------- Enhanced Object Literals ------------------------ //

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // With Object literal enhancements, I can compute property names
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 5, // Open 24 hours
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
  order(starterIndex, mainIndex) {
    //returning an array so I can immediately destructure it
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Object of options as the argument for this method
  orderDelivery({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will arrive to ${address} by ${time}.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}!`);
  },
  orderPizza(mainIngredient = 'mushrooms', ...otherIngredients) {
    console.log(
      `Your pizza with ${mainIngredient} ${
        otherIngredients.length
          ? `and ${otherIngredients.join(', ')} is on the way!`
          : 'is on the way!'
      } `
    );
  },
};

// ------------------ Destructuring Objects ---------------------- //

const { name, openingHours: restaurantOpeningHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Changing the name of the variable
const {
  name: restaurantName,
  restaurantOpeningHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

//Default values AND changing the name of the variable

const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

//Mutating variables
let l = 111;
let m = 999;

const obj = { l: 23, m: 7, c: 14 };
// this has to be wrapped in parentheses
({ l, m } = obj);

// console.log(l, m);

// Object Nested Destructing
const {
  fri: { open, close },
} = openingHours;

// console.log(open, close);

// Calling the orderDelivery method with object as the argument
// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// -------------------- Destructuring Arrays ------------------- //
// Destructuring: Unpacking values from an array or object into separate values

const arr = [2, 3, 4];
const [a, b, c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// reassigning the variable's values using destructing AKA mutating varaiables

[main, secondary] = [secondary, main];
// console.log(main, secondary);

//Destructuring the array that was returned from the method into two variables
const [appetizer, mainMeal] = restaurant.order(2, 0);
// console.log(appetizer, mainMeal);

// Nested Array Destructuring
const nested = [2, 4, [5, 6]];
const [first, , [third, fourth]] = nested;

// console.log(first, third, fourth);

// Default values, and this is especially helpful with external API's where we are not sure how long the array will be.
const [p = -1, q = -1, r = -1] = [8, 9];
// console.log(p, q, r);

// ------------------- The Spread Operator ------------------ //

// The Spread Operator works on ALL Iterables. The Spread Operator works on objects too even though objects are NOT iteratbles.

// Iterables: Strings, Arrays, Maps, Sets, NOT Objects.

//Spread Operator: Used to expand an array into all of it's individual elements, to unpack array all array elements at once. It's like taking all of the elements out of the array and writing the elements one by one.

// Use cases: 1. Build new array, 2. Pass multiple values to a function

const arr2 = [7, 8, 9];
const newArr = [1, 2, ...arr2];
// console.log(newArr);

// console.log(...newArr); // 1,2,7,8,9
// This creates a new array, with an addiitional element
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Difference between destructuring and the spraed operator: The spread operator is not used to create new variables, rather, to make a shallow copy of the array by copying all of the elements in the array/object.

// Use case: Shallow Copy:

const mainMenuCopy = [...restaurant.mainMenu];

// Use case: Add two arrays or more together

const totalMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(totalMenu);

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients); // Calls the method with (ingredient 1, ingredient 2, ingredient 3)

// Spread Operator with Objects

// Shallow Copy
const restaurantCopy = { ...restaurant };

// Shallow Copy with added properties
const newRestaurant = {
  foundingYear: 1998,
  ...restaurant,
  founder: 'Guiseppe',
};

// console.log(newRestaurant);

// -------- Rest Pattern/Operator and Rest Parameters ------------- //

//The Rest Pattern has the same syntax as the spread operator but does the exact opposite of the spread operator

// The Rest Operator is used to pack elements into an array, bascially to collect unsed elements in the destructuring proces. It will not collect any skipped elements, and it must be the last element in destructuring

// The Spread Operator is on the RIGHT side of the equality operator and the REST operator is on the LEFT side of the equality operator

// Destructuring Examples with Rest Operator
const [o, s, , ...others] = [1, 2, 3, 4, 5];
// console.log(o, s, others);

// Example with BOTH the Rest and Spread Operator

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// console.log(pizza, risotto, otherFood);

//  The Rest Operator with Objects

const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// Functions and the Rest Parameter

const add = function (...nums) {
  //use of the spread operator above to place all of the values passed in and place them into an array. This allows the function to accept ANY number of parameters
  return nums.reduce((acc, curr) => acc + curr, 0);
};

// console.log(add(2, 3));
// console.log(add(5, 3, 7, 2));
// console.log(add(8, 2, 5, 3, 2, 1, 4));

//Calling the functiion and using the spread operator. This is to show that spread is the opposite of rest. They are unpacked by the spread operator and then repacked by the rest operator into the array
const x = [23, 5, 7];
// console.log(add(...x));

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza();

// ----------------------- Short Circuiting (&& and ||) ----------------------- //

//Logical Operators can use ANY data type, return any data type, short-circuit evaluations

//With the || Operator

// Can use || short circuiting to set default values

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null); //null

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

const guests = restaurant.numGuests || 5;
// console.log(guests);

// With the && Operator

// Can use short circuiting with the && operator to conditionally execute code

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'jonas');

//This can replace an if statement
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onions');

// -------------- Nullish Coalesting Operator (??) ------------- //

// Works almost like the || operator but works with concept of nullish values instead of falsy values. Only will nullish values short circuit

// Nullish values: null and undefined

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
// console.log(guests3);

const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// -------------- Logical Assignment Operators ---------------- //

const rest1 = { name: 'Capri', numGuests: 0 };
const rest2 = { name: 'La Piazza', owner: 'Giovanna Rossi' };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR Assignment operator (||=) : assigns a value to a variable if that value is currently falsy

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest2);
// console.log(rest1);

// Nullish asignment operator (??=) assigns a value to a variable if that value is currently nullish

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// console.log(rest2);
// console.log(rest1);

// And Assignment Operator (&&=) : assign a value to a variable if it is currently truthy

rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';

// console.log(rest2);
// console.log(rest1);

// ---------------- The For Of Loop: Looping Arrays --------------------- //

// Can still use "continue" and "break" keywords with the for of loop
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu2) console.log(item);

for (const [index, food] of menu2.entries()) {
  // console.log(`Item: ${index + 1}. Food ${food}`);
}

// ------------------ Optional Chaining (?.) ---------------------- //

// If a certain property does not exist, undefined is returned immediately to avoid the TypeError that occurs when trying to read properties on an undefined property

// Here a property exists deals with the nullish values. So a property exists as long as it is NOT null or undefined

// I can have multiple option chainnings

// console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? null;
//   console.log(`On ${day} we ${open ? `open at ${open}:00PM` : `are not open`}`);
// }

// Calling methods and Optional Chaining
//Used to check if a method exists before calling it

// console.log(restaurant.order?.(2, 0) ?? 'method does not exist');
// console.log(restaurant.orderRisotto?.(2, 0) ?? 'method does not exist');

// Arrays and Optional Chaining
// I can use optional chaining to see see if an array is empty so I don't try to access a property on a nonexistant object in the array

const users = [
  { name: 'Jonas', email: 'hello@jonas.io' },
  { name: 'Janice', email: 'janis@hello.io' },
];

// console.log(users[0]?.name ?? 'No user');
// console.log('Hello');

// -------- Looping over Objects: Keys, values, and entries ------------ //

// Object.keys(obj): Looping over an object's property names aka keys
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

//Object.values(obj) :Looping over an object's property values

const values = Object.values(openingHours);
// console.log(values);

// Object.entries(obj) : Looping over the property names/keys and values together
// This is different than when I use the for of loop to loop over an array because with an array I can just do array.entries()

const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of Object.entries(openingHours)) {
//   console.log(`On ${day} we open at ${open}:00PM and close at ${close}:00PM`);
// }

// ---------------------- ES6 Data Structure: Sets --------------------------//
// Set data structure that was introduced in ES6. A set is a collection of unique values, so a set cqn never have any duplicates
// This is a type of data structure that exists in many other programing languages as well
// I need to pass an interable into the set. An interable can hold mixed data types
//A set does not have key value pairs, and it is iteratable, and the order of elements in a set is irrelevent

const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
// console.log(orderSet);
// console.log(new Set('Jonas'));

// .size to get the length of a set
// console.log(orderSet.size);

// .has to check if an element is in a set
// console.log(orderSet.has('pizza'));

//.add to add elements to a set
orderSet.add('Garlic bread');
// console.log(orderSet);

//.delete to delete elements from set

orderSet.delete('pizza');
// console.log(orderSet);

//There are NO indexes in a set and no way to get elements out of a set

// .clear() to delete all elements from a set
// orderSet.clear

//A For of loop with a Set

for (const order of orderSet) {
  // console.log(order);
}

//Main use case of sets is to remove dublicates from arrays

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

//Converting set to array with the Spread Operator
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Get size of the set
// console.log(new Set('Jonas').size);

// The typeof says that sets are technically an object
// console.log(typeof new Set());

// ----------------- ES6 Data Structure: Maps ------------------------- //
// Maps is a data structure to map values to keys.
// Unlike the key/value pairs of an objects, the keys can have ANY type, even objects, arrays or other maps

// Easiest way to create a map is to start by creating an empty map
const rest = new Map();

// .set() to add elements to the Map. This method takes two arguments, the key and value
rest.set('name', 'Classico Italiano');

rest.set(1, 'Firenze, Italy');

//This method not only updates the map it is called on but also returns the entire map
// console.log(rest.set(2, 'Lisbon, Portugal'));

//*** Because the .set() returns the updated map, I can chain the next .set() on to the first .set()

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 22)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// console.log(rest);

// .get() - To read data from a map

// console.log(rest.get(true));
// console.log(rest.get('categories'));

//If they key does NOT exist, the result will be undefined

// The power of having booleans as map keys and the logic i can create
const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// .has() to check if a map has a certain key

// console.log(rest.has('categories'));

// .delete() to delete a key and it's value

rest.delete(2);
// console.log(rest);

// .size to see the length of a map
// console.log(rest.size);

// .clear() To clear all elements of a map

// rest.clear();

// Using array as map key
const arrTest = [1, 2];
rest.set(arrTest, 'test');
// console.log(rest.get(arrTest));

// Dom element as a map key
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);

// ---------------- Ceating Map WITHOUT .set() method : Iteration  -------------------- //

// This array of array structure is the same as what is from returned from calling Object.entries()
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try again, 🤔'],
]);

// console.log(question);

// Converting Objects to Maps
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Map iteration example: Question App
// console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    // console.log(`Option ${key}: ${value}`);
  }
}
// const response = Number(
//   prompt('Please type 1 for C, 2 for Java, or 3 for JavaScript')
// );

// console.log(question.get(response === question.get('correct')));

//Converting Map to Array
// console.log([...question]);

// Map.entries() - need to use the spread operator
// console.log([...question.entries()]);
//Map.keys() - need to use the spread operator
// console.log([...question.keys()]);
// Map.values() - need to use the spread operator
// console.log([...question.values()]);

// ---------------------------- Working with Strings ------------------------ //

//Strings are 0 based like arrays

const airline = 'TAP Air Portugal';
const plane = 'A320';

//Accessing element at particular character
// console.log('B737'[0]); // B
//Accessing the length of characters of a string
// console.log('B737'.length);

// .indexOf() (also for arays) returns the index of the FIRST occurance of the element
// console.log(airline.indexOf('r'));

// .lastIndexOf() (also for arays) returns the index of the LAST occurence of an element

// console.log(airline.lastIndexOf('r'));

// This is case sensitive so if I wrote "portugal", this would return -1 (much like an array) to show that it does not exist
// console.log(airline.indexOf('Portugal')); // 8

//.slice(startingIndex, endingIndex) - this will slice an iterable non-destructively. If given a starting param, it will start at that index and slice through the end. If an ending param is given, it will slice from start to the index BEFORE the end param. If given no params, it will create a shallow copy of the iterable. The length of the extracted element will always be the ending param - starting param.
const testArr = [1, 2, 3, 4, 5];
const testArrSlice = testArr.slice();
// console.log(testArrSlice === testArr);
// console.log(airline === airline.slice());
// console.log(airline.slice(4));

//To extract the FIRST WORD of a String
// console.log(airline.slice(0, airline.indexOf(' ')));

// To extract the LAST WORD of a String
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2)); // will slice last 2 characters

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const middleSeat = seat.slice(-1) === 'B' || seat.slice(-1) === 'E';
  return middleSeat
    ? 'You are in the middle seat'
    : 'You luckily are NOT in the middle seat!';
};

// console.log(checkMiddleSeat('23C'));
// console.log(checkMiddleSeat('3E'));
// console.log(checkMiddleSeat('11B'));

// How Strings work behind the scenes: Whenever I call a method on a string, JavaScript will automatically convert the string primitive to a string object with the same content and it is on that object that the methods are called. This process is called "Boxing" because it takes our string and puts it into a box which is an object. JavaScript calls this new String(string) with our string. When the operation is done, the element is converted back to a string primitive. ALL string methods return primitives even if called on a string object --->
// console.log(new String('jonas'));
// console.log(typeof new String('jonas')); // object

// capitalize String
// console.log(airline.toUpperCase());
// lowercase String
// console.log(airline.toLocaleLowerCase());

//comparing emails example

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();

// .trim() - to trim the white space from the beginning and the end of the string
const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
//Doing the same thing all in one go
// console.log(loginEmail.toLocaleLowerCase().trim());

// .trimStart() - trims white space from the start of a string
// console.log(loginEmail.trimStart());
// .trimEnd() - trims white space from the end of a string
// console.log(loginEmail.trimEnd());

// Replace parts of strings, it creates a brand new string and DOES NOT replace the old one
//.replace("charToChange", "charChange")
const priceUS = '$288.97';
const priceGB = priceUS.replace('$', '£').replace('.', ',');
// console.log(priceUS, priceGB);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// .replaceAll("charToChange", "charChange") replaces all occurances of the word, unline .replace() which will only replace the FIRST occurance of the word
// console.log(announcement.replaceAll('door', 'gate'));

// Using a REGULAR EXPRESSION (which we will go more into later, because it is complex) to do what .replaceAll() does with .replace()

// console.log(announcement.replace(/door/g, 'gate'));
// console.log(typeof /door/g); // object

// Sring methods that return a Boolean

// .includes : Also works on Arrays
const plane2 = 'Airbus A32eno';
// console.log(plane2.includes('eno'));

// .startsWith(): to check if a string starts with certain characters.
// console.log(plane2.startsWith('Air'));

// .endsWith() : to check if a string ends with certain characters
// console.log(plane2.endsWith('eno'));

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to board with this contents of luggage');
  } else console.log('Welcome aboard!');
};

// checkBaggage('I have a laptop, some Food, and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and gun for protection');

//.split(): This method allows us to split a string into multiple parts based on a divider string. It will store the results into elements of a new array

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

const [firstNameJonas, lastNameJonas] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstNameJonas);
// console.log(lastNameJonas);

// .join() : This does the opposite of .split(), in that it takes elements out of an array and joins them at the indicated string joiner
const jonasJoined = ['Mr.', firstNameJonas, lastNameJonas.toUpperCase()].join(
  ' '
);
// console.log(jonasJoined);

const passenger = 'jessica ann smith davis';

const capitalizeName = function (name) {
  let capitalized = [];
  for (const part of name.split(' ')) {
    capitalized.push(part.replace(part[0], part[0].toUpperCase()));
  }
  return capitalized.join(' ');
};

// console.log(capitalizeName(passenger));
// console.log(capitalizeName('jonas schmedtmann'));

// .padStart(lengthAfterPadding, paddingChar): This is utilized to add characters to the beginning of a string
// .padEnd(lengthAfterPadding, paddingChar): This is utilized to add characters to the end of a string
//These two can be chained together

const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log(message.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (num) {
  const str = num + '';

  const lastFour = str.slice(-4);

  return lastFour.padStart(str.length, 'X');
};

// console.log(maskCreditCard('323975703475981'));
// console.log(maskCreditCard(523345834987983));
// console.log(maskCreditCard(643215983));

//.repeat(numOfTimes) : Allows me to repeat a string over and over

const message2 = 'Bad Weather... All Departures DELAYED... ';
// console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// ---------------------- String Methods practice ----------------------- //

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const decodeFlightList = function (flightList) {
  const row = flightList.split('+');
  for (const fact of row) {
    let [title, from, to, timing] = fact.split(';');
    title = title
      .replace('_', `${title.includes('Delayed') ? '🔴 ' : ''}`)
      .replace('_', ' ');
    timing = `(${timing.replace(':', 'h')})`;
    from = from.slice(0, 3).toUpperCase();
    to = to.slice(0, 3).toUpperCase();
    console.log(`${title} from ${from} to ${to} ${timing}`.padStart(44));
  }
};

// decodeFlightList(flights);
