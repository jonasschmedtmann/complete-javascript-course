'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//string exercises
const getCode = str => str.slice(0, 3).toUpperCase()

for(const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⭕️' : ''} ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(40);
  console.log(output);
}

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

  //ES6 enhanced objects literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
//////Coding Challenge 4 ///////

const camelCaseConvertion = function (str) {
  //take the string, put all in lower case, remove the _ and trim
  const separateString = str.toLowerCase().trim().split('_');
  const upperCase = [];
  //replace the first letter to upper case
  for (const name of separateString) {
    let word = name.replace(name[0], name[0].toUpperCase());
    upperCase.push(word);
  }

  upperCase[0] = upperCase[0].toLowerCase();

  //join the strings again
  console.log(upperCase.join(''));
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

//click the  button functionality
button.addEventListener('click', function () {
  //get the input from textarea
  const text = document.querySelector('textarea').value;
  //divide strings by the lines
  const rows = text.split('\n');
  //use camelCase function to turn them
  for (const row of rows) {
    camelCaseConvertion(row);
  }
});


//////////STRINGS/////////
const airline = 'TAP Air Portugal';
const plane = 'A320';

//Comparing strings with arrays
console.log(plane[0]);
//the lenght property exists too
console.log(airline.length);
//indexOf
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); //case sensitive

//slice method - always return a new string
console.log(airline.slice(4)); //substring
console.log(airline.slice(4, 7)); //index 7 is not included in the string

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//starts extracting letters from the end
console.log(airline.slice(-2));
//the end parameter cuts off the last letter
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are the middle seats
  const s = seat.slice(-1);
  (s === 'B' || s === 'E') ? console.log('You got the middle seat :(') : console.log('You got lucky!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Changing the case of the string
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//Fix the  capitalization in  name

const correctPassenger = function (name) {
  const nameLower = name.toLowerCase();
  const passengerCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(passengerCorrect);
}

correctPassenger('jOnaS');

const passenger = 'aNgEla'; //Angela
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding  door 23!';

console.log(announcement.replaceAll('door', 'gate'));

//RegEx
console.log(announcement.replace(/door/g, 'gate'));

//Bolleans
const airplane =  'Airbus A320neo';
console.log(airplane.includes('A320'));
console.log(airplane.includes('boing'));
console.log(airplane.startsWith('Air'));
console.log(airplane.endsWith('neo'));

if(airplane.startsWith('Airbus') && airplane.endsWith('neo')) {
  console.log('Part of  the New airbus  family');
}

//Practice exercise
const checkBagage = function(items) {
  const baggage  = items.toLowerCase();
  if(baggage.includes('gun') || baggage.includes('knife')) {
    console.log('You cannot board!');
  } else {
    console.log('Welcome aboard!');
  }
}

checkBagage('I have a laptop, some Food and  a  pocket Knife');
checkBagage('Socks and camera');
checkBagage('Got some snacks and a gun for protection');

///////////////////////WORKING WITH STRINGS 3 ///////////

//Split method - will split the string in the  sign you give and create an array
console.log('a+very+nice+string'.split('+'));
console.log('Ângela Santos'.split(' '));

const [firstName, lastName] = 'Ângela Santos'.split(' ');

//Join is the opposite of split
const newName = ['Ms.', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  //Split the name
  const names = name.split(' ');
  const namesUpper = [];
  // loop over the array to find the 1st letter
  for(const n of names) {
    //capitalize the first letter
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toLocaleUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('ângela santos');

//Padding a string - add a number of characters to a string untill it has the desired size
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

//Real life example
const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(13247342));
console.log(maskCreditCard('24509684596734521237'));

//Repeat 
const message2 = 'Bad weather... All Departues Delayed....  ';
console.log(message2.repeat(5));

const planesInLine  = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(5);
planesInLine(12);
*/

/*
/////////////////////////////////////////////
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascritpt'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iteration on maps
//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));
//console.log(answer);

//console.log(question.get(answer === 3));

//Convert map to array
console.log([...question]);
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());


//MAPS - keys can have any type of key - can be objects, arrays or other maps

const rest = new Map();

//equals to the add methos from set
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

//we can chain sets
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest);

//GET method - to read the information from the map
console.log(rest.get('name'));
console.log(rest.get('categories'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//HAS - to check if a map has some key
console.log(rest.has('categories'));

//DELETE operator - slow process that is not encouraged
rest.delete(2);
//CLEAR - remove all the elements of the map
//rest.clear();


//size property
console.log(rest.size);

//the 2 arrays are not the same array in the HEAP
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2]));

//Instead we have to do it like this
const arr = [1, 2];
rest.set(document.querySelector('h1'), 'Heading')
rest.set(arr, 'Test');
console.log(rest.get(arr));

console.log(rest);



//SET - is a collection of unique values. Duplicates are gonne! Sets are iterable
//The order of elements in a set is irrelevant

const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);

console.log(new Set('Jonas'));
 
//size of the set. 
console.log(orderSet.size);

//has method - similar to includes in arrays
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Angela'));

//add to insert a new element
//delete to delete the element
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto')
console.log(orderSet);

//retrieving elements from arrays - there's no way!

for (const order of orderSet) console.log(order);

//Example: Sets are used to remove the duplicates from arrays!
const staff  = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//the spread operator creates a new array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('Ângela').size);
//

//Property names
const properties = Object.keys(openingHours);
let str = `The restaurant is open ${properties.length} days: `;

for (const day of properties) {
  str += `${day},`;
}
console.log(str);

//Property values
const values = Object.values(openingHours);
console.log(values);

//entries work different for objects - transform the objects in an array with the key and the value

const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open are ${open} and close at ${close}`);
}


//FOR  OF  LOOP - can use the continue and break

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

//entries method cointains the index and the element 
for(const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}



//1 - Destructuring
//SPREAD because on the right side of =
const arr = [1, 2, ...[3, 4]];

//REST because on the left side of =
//collects the unused elements in the destructuring assignement
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//It doesn't include skipped elements. The rest had to be always last so it knows the remaining
//It can only be one rest in destructuring
const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

//Objects
const { sat, ...weekday } = restaurant.openingHours;
console.log(sat, weekday);

console.log(pizza, risotto, otherfood);

//2 Functions

//rest arguments
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(1, 2, 3, 4, 5);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'cheese')



/////////////SPREAD OPERATOR
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//spread operator - removes all the values and put add them in the new array manually
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

//we are creating a NEW ARRAY, the main stays the same
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array - shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables (arrays, strings, maps, sets) - NOT objects!
const str = 'Angela';
const letters = [...str, ' ', 'S.'];
console.log(letters);
/*
//real world example
const ingredientes = [
  prompt(`Let\'s make pasta! Ingredient 1?`),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredientes);

restaurant.orderPasta(...ingredientes);

//Objects
const newRestaurant = {...restaurant, founder: 'Pablo', foudingYear: 1998};
console.log(newRestaurant);
*/
/*
// Destructuring is to unpack smaller data from objects or arrays in variables

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, openingHours, tags);

//Set a default value if there is no data hardcoded. When we don't know how the data is just set default
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables with objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//We need to wrap it in parenthesis
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(x, y, z);

// //If I want to skip an element of the array we can just skip the element in the middle
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switch variables. You have to create a temporary variable to store the value
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//Destructing way to do it
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, main] = restaurant.order(2, 0)

//Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested
console.log(i, j, k);


//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

/////////CODING CHALLENGE 1

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

  printGoals: function (...players) {
    let playersArr = [...players];
    console.log(
      `A total of ${playersArr.length} goals were scored by ${players}`
    );
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;

game.printGoals('Davies', 'Muller', 'Lewandowski');
game.printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//CODING CHALLENGE 2
//1 - Loop over the array game.scored

for (const [goal, names] of game.scored.entries()) {
  console.log(`Goal number ${goal} was scored by ${names}`);
}

//2 - calculate average odd
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) average += odd;

average /= odds.length;
console.log(average);

//3 - print the odds to the console
const gameEntries = Object.entries(game.odds)

for (const [team, odd] of gameEntries) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
  console.log(game[team]);
}
;

//CODING CHALLENGE 3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
//2
gameEvents.delete(64);
//3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
//4
for(const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}
console.log(events);
*/
