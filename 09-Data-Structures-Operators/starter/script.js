'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri'];

const openingHours = {
  // dynamically generating object properties using new ES6 enhancements
  [weekdays[3]]: {
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
};


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // ES6 enhanced object literal, replaced 'openingHours: openingHours,' SECTION 112
  openingHours,
  // passing in a destructured object as a single parameter
  orderDelivery({
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
    orderPasta(ing1, ing2, ing3) {
      console.log(`Order recieved for pasta using ${ing1}, ${ing2}, and ${ing3}`)
    },
    orderPizza(mainIngredient, ...otherIngredients) {
      console.log(`You just ordered a pizza with: ${mainIngredient}, ${otherIngredients}`);
    }
  };
  

////////////////////////////////////////////////////////////////////
// SECTION 117:  MAPS data structure that we can use to map data structures to keys of any type such as arrays, objects, strings, and other maps

const restaurantMap = new Map(); // easiest way to create a map is to start with empty Map()
restaurantMap
  .set('name', 'Classico Italiano')
  .set(1, 'Firenze, Italy')
  .set(2, 'Lisbon, Portugal')
  .set('categories', restaurant.categories)
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :) ')
  .set(false, 'We are closed :( ');
console.log(restaurantMap);
/*
  Map(8) {
    'name' => 'Classico Italiano',
    1 => 'Firenze, Italy',
    2 => 'Lisbon, Portugal',
    'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
    'open' => 11,
    'close' => 23,
    true => 'We are open :) ',
    false => 'We are closed :( '
  }
*/

console.log(restaurantMap.get('name'), ' || ', restaurantMap.get(true)); // Classico Italiano ||  We are open :) 

const time = 18;
const result = restaurantMap.get(time > restaurantMap.get('open') && time < restaurantMap.get('close'));
console.log(result); // we are open :)

console.log(restaurantMap.has('categories')); // true
restaurantMap.delete(2);
console.log(restaurantMap);
console.log(restaurantMap.size); // 7

const arr = [1, 2];
restaurantMap.set(arr, 'Test')
console.log(restaurantMap.get(arr)); // Test

console.log([...restaurantMap])

// restaurantMap.set(document.querySelector('h1'), 'Heading');
// console.log(restaurantMap);

const question = new Map([
  ['question', 'What is the best programming language in the world?'], 
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3], 
  [true, 'Correct 🎉'], 
  [false, 'Try Again!']
]);

console.log(question);

// convert OBJECT TO MAP
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

/////////////// Quiz App
console.log(question.get('question'));

for(const [key, value] of question){
  if(typeof key === 'number')console.log(`Answer ${key}: ${value}`)
}

const userAnswer = Number(prompt('Your answer'));
const correctAnswer = question.get('correct');

// if(userAnswer === correctAnswer){
//   console.log(question.get(true))
// } else {
//   console.log(question.get(false))
// }
console.log(question.get(correctAnswer === userAnswer));

// convert MAP TO ARRAY
console.log([...question]);
console.log([...question.keys()]); //['question', 1, 2, 3, 'correct', true, false]
console.log([...question.values()]); 


/*
////////////////////////////////////////////////////////////////////
//  SECTION 116: SETS -- no indexes, all values are unique and the order doesn't matter
// someSet.has('value'); is the more common use for Sets
const ordersSet = new Set ([
  'Pasta', 'Pizza', 'Pizza', 'Risotta', 'Pizza',
]);

console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotta' }
console.log(new Set('Kassandra')); // Set(6) { 'K', 'a', 's', 'n', 'd', 'r' }

console.log(ordersSet.size); //3

console.log(ordersSet.has('Bread')); // false
console.log(ordersSet.has('Pizza')); // true

ordersSet.add('Garlic Bread');
ordersSet.add('Spaghetti');
console.log(ordersSet); //Set(5) { 'Pasta', 'Pizza', 'Risotta', 'Garlic Bread', 'Spaghetti' }

ordersSet.delete('Pizza');
console.log(ordersSet); //Set(4) { 'Pasta', 'Risotta', 'Garlic Bread', 'Spaghetti' }

// ordersSet.clear();
// console.log(ordersSet);

// Sets are iterable therefore you can loop through them. Example:
for (const order of ordersSet) console.log(order); 
    /*
    Pasta
    Risotta
    Garlic Bread
    Spaghetti
    */

// Main use case: remove duplicate values from an array
// const staff = [ 'Waiter', 'Chef', 'Waiter', 'Chef', 'Manager', 'Waiter'];
// const staffUnique = [...new Set (staff)]; // [...new Set ()] how to put unique values into an array
// console.log(staffUnique); //[ 'Waiter', 'Chef', 'Manager' ]



////////////////////////////////////////////////////////////////////
// SECTION 114: LOOPING OBJECTS (KEYS, VALUES, ENTRIES)

// // KEYS
// const properties = Object.keys(openingHours);
// console.log(properties); //['thurs', 'fri', 'sat']

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties){
//   openStr += `${day},`;
// };
// console.log(openStr)

// // VALUES
// const values = Object.values(openingHours);
// console.log(values); 
// //(3) [{…}, {…}, {…}]
// //    0: {open: 12, close: 22}
// //    1: {open: 11, close: 23}
// //    2: {open: 0, close: 24}

// // ENTRIES
// const entries = Object.entries(openingHours);
// console.log(entries); //(3) [Array(2), Array(2), Array(2)] 

// for (const [day, {open, close}] of entries){
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

  ////////////////////////////////////////////////////////////////////
  // SECTION 113: OPTIONAL CHAINING (?.) 
  // ensures that if part of the statement is undefined, then the entire value is undefined rather than throwing an error
  
  // console.log(restaurant.openingHours.mon--if it exists THEN-- .open)
  // console.log(restaurant.openingHours.mon?.open); // prints 'undefined' because mon doesn't exist

// if resaurant.openingHours exists, then restaurant.openingHours.fri-- if it exists THEN restaurant.opneingHours.fri.open
  // console.log(restaurant.openingHours?.fri?.open); // prints '11'

  /*  //Example 

  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  for(const day of days){
    const openTime = restaurant.openingHours[day.toLowerCase()]?.open ?? 'NOT OPEN'; // ?? (nullish coalescing operator) default value if undefined or null -- if you use || then the value of 0 will default to falsy and print "not open". ?? bypasses this and keeps 0 a truthy value
    console.log(`${day} OPEN at: ${openTime}`);
  }
  */

/* //Another Example 
  // check if a method exists?. BEFORE (calling it)
  console.log(restaurant.order?.(0,1) ?? 'Method does not exists');
  console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exists');
*/

/* //Annnnother Example
const users = [
  { name: 'kass', age: 26, email: 'ka@email.com'},
  { name: 'kiwi', age: 3, email: null},
  { name: 'andrew', age: 34, email: 'a@drew.com'},
];
// does  users[0] exists? . then grab 'name' ?? otherwise 'user array empty'
//  optional chaining and nullish coelescing operator tend to go hand in hand
for (const user of users){
  console.log(user?.name ?? 'user array empty')
}
 */
  ////////////////////////////////////////////////////////////////////
  // SECTION 112: FOR OF LOOP
  //(can use 'break' and 'continue')
  // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  // for (const item of menu) console.log(item);
  
  // way to get [index value, and the element] with a for of loop
  // menu.entries() gives us an array of index value and element. Destructuring gives us just the value and element without it being in an array.
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// };

/*
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'Hell\'s Kitchen',
  owner: 'Gordan Ramsey',
};


// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// OR ASSIGNMENT OPERATOR: assigns a value to a variable if that variable is currently falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// NULLISH ASSIGNMENT OPERATOR : evaluates 0 and "" as truthy
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// set rest2.owner as '<>' if it exists
rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner = rest1.owner && '<ANONYMOUS>'; // will come back undefined since rest1 doesnt' have an owner

// AND ASSIGNMENT OPERATOR: assigns a value to a variable if the initial condition is truthy, if not, it leaves it alone
rest1.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/* =========

restaurant.numGuests = 0;
//  OR OPERATOR (||)
const guests = restaurant.numGuests || 10; // 0 || 10
console.log('guests:', guests); // since 0 is a falsy value, this will evaluate to 10

// NULLISH COALESCING OPERATOR (??) -- only accounts for nullish values: NULL and UNDEFINED as falsy (not 0 or " ")
const guestCorrect = restaurant.numGuests ?? 10;
console.log('guestCorrect:', guestCorrect); // 0 is displayed aka correct answer

========= */


/*
// SHORT CIRCUITING USING && AND ||
//  can use any data type and return any data type
// console.log('' || 'Kass'); // checks to see which is truthy: "Kass"
// console.log(true || 0); // true
// console.log(undefined || null || 0 || "" || 'Hi'); // prints out first instance of truthy value
// // if there is no truthy value, it shows the last one
// console.log(null || '' || undefined || false); // false

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guests2 = restaurant.numGuests || 40;

console.log(guests1, guests2)

// && will return the first falsy value or the last value if all of them are truthy

// if (exists) { run this code }
if (restaurant.orderPizza) {
  restaurant.orderPizza('cheese', 'pepperoni');
}
// check to see if ___ exists && (and if so) run this code
restaurant.orderPizza && restaurant.orderPizza('cheese', 'pepperoni');
*/

/*
/////////////////////////////////////////////
// Section 106: REST OPERATOR
// 1) DESTRUCTURING
//  SPREAD : right side of =
const arr = [1, 2, ...[3, 4, 5]];

// REST : left side of = ; kind of like destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3,4,5]

// p ([0] in mainMenu), skip [1], r ([2] of mainMenu), ...otherFood = REST of mainMenu plus all of starterMenu
// REST PATTERN: must come at the end so JS knows what 'the rest' is and therefore, can only have one rest per destructuring assignments
const [p, , r, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(p, r, otherFood); // pizza, risotto, all of starterMenu

// Objects
const { sat, ...weekedays } = restaurant.openingHours;
console.log(weekedays);

// 2) FUNCTIONS (rest parameter)
const add = function (...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  console.log(total)
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 12, 90);

const x = [23, 5, 7];
// spread array into add function
add(...x);

// rest operator in a method (see object above)
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('cheese');
*/


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

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/* solved
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

//1 destructuring game.players as 2 separate arrays named players1 and players2
const [players1, players2] = game.players;

// 2 set first person as goal keeper and the rest as fieldPlayers, destructuring gk = players1[0], ...fieldPlayers = players1[1,]
const [gk, ...fieldPlayers] = players1;

// 3 create single array with all players
const allPlayers = [...players1, ...players2];

// 4 create a new array containing all player1 plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5 using OBJECT DESTRUCTURING create one variable for each odd (called 'team1', 'draw' and 'team2')
// const { odds: { team1, x: draw, team2 } } = game; // almost the same thing but destructuring MORE on left side this way
const { team1, x: draw, team2 } = game.odds;

// 6. Write a function ('printGoals') that receives an arbitrary number of player names and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = (...players) => {
  console.log(`${players.length} goals were scored`);
  players.map(p => console.log(`Goal by: ${p}`))
};

// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// if ___ is true && (logical operator) then do this 
team1 < team2 && console.log('Team 1 is more likely to win');

// if ___ is true && then do this
team2 < team1 && console.log('Team 2 is more likely to win');
*/