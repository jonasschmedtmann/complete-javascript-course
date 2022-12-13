'use strict';

/* 
    112: Enhanced Object Literals
*/

// compute property names
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fridayy', 'sat', 'sun'];
const [, , , , fri] = weekDays;
const openingHours = {
    [weekDays[3]]: {  // square brackets is needed to compute the property name. else, it'll not consider the variable for the property name
        open: 12,
        close: 22,
    },
    [fri]: {        // De-structure to get 'fridayy'
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

// Data needed for first part of the section
// Object Literal syntax
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // ES6 enhanced object literal
    openingHours,

    // ES6 enhanced object literal -- without the 'function' keyword
    order (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // function with object destructuring in the params
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex,
        time = '20:00',
        address
    }) {
        console.log(
            `Order received!! Your order of ${this.mainMenu[mainIndex]} and
            ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`
        );
    },

    orderPizza: function (mainIngredient, ...otherIngrdient) {
        console.log(mainIngredient);
        console.log(otherIngrdient);
    },


};

/*
    103: Destructuring Arrays
*/

// // Leave a hole to ignore a certain element in the array
// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// // Switching variables without temp
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive more than 1 return value from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [1, 2, [3, 4]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values -- can be used when we don't want to use undefined 
// // to a value that doesn't exist in the arrar
// const [p = 1, q = 1, r = 1] = [7, 8];
// console.log(p, q, r);

/*
    104: Destructuring Objects
*/

// const {
//     name: restaurantName,
//     openingHours,
//     categories: tags} = restaurant;
// console.log(restaurantName, openingHours, tags);

// // Default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 14, b: 7, c: 14};

// // Gives error as JS expects code inside -- {} -- to be a block.
// // So, we have to wrap it in parentheses
// ({a, b} = obj);

// // Nested Objects
// // const {fri} = openingHours;
// // console.log(fri);

// // We want only the open and close hours for friday and have a custom name for variables
// const {fri: {
//     open: openhours, close: closeHours
// }} = openingHours;
// console.log(openhours, closeHours);

// // Pass object into function
// restaurant.orderDelivery({
//     address: '29, 2nd main, water tank road',
//     mainIndex: 2,
//     starterIndex: 1,
//     time: '21:30'
// });

// restaurant.orderDelivery({  // using the default values in the function
//     address: '29, 2nd main, water tank road',
//     mainIndex: 3
// });

/*
    105: The Spread Operator
*/

// const newMenu = [...restaurant.mainMenu, 'Idli'];
// console.log(newMenu);

// // Join 2 arrays
// const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(allMenu);

// // Real world example
// const ingredients = [
//     // prompt(`Let's make pasta!! Ingrdient 1?`),
//     // prompt(`Ingrdient 2?`),
//     // prompt(`Ingrdient 3?`)
// ];
// console.log(ingredients);
// //basic way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// //spread operator
// restaurant.orderPasta(...ingredients);

// // Objects -- after ES2018

// const newRestaurant = {
//     foundedIn: 1998,
//     ...restaurant,
//     founder: 'Vishu'
// };
// console.log(newRestaurant);
// // create a copy of restaurant
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Om Ganesh Restaurant';
// console.log(restaurantCopy.name, restaurant.name);

/*
    106: Rest Pattern and parameters
*/

// // Spread -- on the RHS of =
// const array = [1, 2, 3, ...[4, 5]];
// // REST -- on the LHS of =
// const [a, b, ...others] = array;
// console.log(a, b, others);

// const [pizza, , risotto, ...otherMenu] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // Rest will ignore the skipped elements and only collect the remaining elements
// console.log(pizza, risotto, otherMenu);


// // Objects
// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(sat, weekDays);

// // Functions
// // accepts arbitrary number of arguments
// const add = function (...numbers) {     // Unpack the values using rest
//     console.log(numbers);
//     const sum = numbers.reduce((a, b) => a + b);
//     console.log(sum);
// };

// add(2, 3, 4);
// add(2, 3, 4, 5, 6);
// const x = [4, 5, 6];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'tomato', 'spinach');

/*
    107: Short Circuiting(&& and ||)
*/

// // || --> returns the first truthy value. If there are no truthy values, returns the last value
// console.log(3 || 'Vishu'); // 3
// console.log('' || 'Vishu'); // vishu
// console.log(true || 0); //true
// console.log(undefined || null); // null
// console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// // avoid ternary operator and set default value
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----AND----');
// // && --> returns the first falsy value. If there are no falsy values, returns the last value
// console.log(0 && 'vishu'); // 0
// console.log(1 && 'vishu'); // vishu
// console.log('hello' && 23 && null && true); // null. Short circuits the true 'true'

// // Practical example
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms', 'tomato');
// }

// // we can avoid the if statement using &&
// // first operand is true, so will return the last value here
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'onions');

/*
    108: The Nullish Coalescing Operator(??) -- ES2020
*/

// restaurant.numGuests = 0;
// //Nullish --> null/undefined
// // Returns 0 for guestsCorrect
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

/*
    109: Logical Assingment Operators -- ES2021
*/

// const rest1 = {
//     name: 'Ayodhya',
//     // numGuests: 20
//     numGuests: 0
// };

// const rest2 = {
//     name: 'Udupi',
//     owner: 'Vishu'
// };

// // OR assingment operator -- returns the first truthy value/last value
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // AND assignment operator -- returns the first falsy value/last value
// rest1.owner = rest1.owner && `<ANONYMOUS>`;
// rest2.owner = rest2.owner && `<ANONYMOUS>`;
// rest1.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;

// // Nullish assingment operator
// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests = rest2.numGuests ?? 10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;


// console.log(rest1);
// console.log(rest2);

/*
    110: Coding Challenge #1 -- Football betting app
*/

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
        team1: 11.33,
        x: 3.25,
        team2: 6.5,
    },
};

// // 1: Create one player array for each team
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2: Bayern Munich Goal Keeper and players list
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3: allPlayers -- array of all players from both teams
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4: three substitute players used by Bayern Munich
// const finalPlayers = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(finalPlayers);
// // 5: One variable for each odd
// const {team1, x: draw, team2} = game.odds;
// console.log(team1, draw, team2);
// // 6: function to accept arbitrary number of player names

// const printGoals = function (...players) {
//     console.log(players);
//     console.log(`Number of Goals sccores -- ${players.length}`);
// };
// printGoals('Davies', 'Muller', 'Lewandoski', 'Kimmich', 'Alaba');
// printGoals(...game.scored);

// // 7: Likely winner based on the odds using short circuiting
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team2 < team1 && console.log(`Team 2 is more likely to win`);


/*
    111: Looping Arrays -- the for-of loop
*/

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//     console.log(item);
// }

// // Get index using entries() -- returns [index, element]
// for (const item of menu.entries()) {
//     console.log(item);
// }
// console.log(...menu.entries());     // returns all menu entries, but not in array -- [0,Dosa] [1,Rice] [2, chapathi]
// for (const [index, el] of [...menu.entries()]) {        // wrap menu.entries() in an array and destructure the array to get the index and element
//     console.log(`${index}: ${el}`);
// }

/*
    113: Optional Chaining(?.) -- ES 2020
*/

// if (restaurant.openingHours && restaurant.openingHours.thu) {
//     console.log(restaurant.openingHours.thu.open);
// }

// // Optional Chaining -- checks for nullish values i.e: null/undefined
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// for (const day of weekDays) {
//     const open = restaurant.openingHours[day]?.open ?? 'Closed';
//     console.log(`On ${day} we are open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method doesn\'t exist');
// console.log(restaurant.orderCurdRice?.(0, 1) ?? 'Method doesn\'t exist');

// // Arrays
// const users = [];
// console.log(users[0]?.name ?? 'There are no users');

/*
    114: Looping Objects: Object Keys, Values and Entries
*/

// // Properties
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//     openStr += `${day}, `;
// }
// console.log(openStr);

// // Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// // [key, value]
// for (const [day, {open, close}] of entries) {       // Zen level de-structuring 😎
//     console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

/*
    115: Coding Challenge #2
*/

// // Goal scored, Player name 
// const scoredEntries = Object.entries(game.scored);
// const scorers = {};
// for (const [goal, player] of scoredEntries) {
//     console.log(`Goal ${+goal + 1}: ${player}`);

//     // Create an Object with player name as property and goal scored as values
//     scorers[player] = +scorers[player] + 1 || 1;
// }
// console.log(scorers);

// // Avg of all the odds
// let avgOdd = 0;
// for (const odd of Object.values(game.odds)) {
//     avgOdd += odd;
// }
// console.log(`Average Odd: ${avgOdd / Object.values(game.odds).length}`);

// //Print the 3 odds
// for (const [team, value] of Object.entries(game.odds)) {
//     const teamStr = `Odd of ${game[team] ? `victory of ${game[team]}` : `Draw`} is ${value}`;
//     console.log(teamStr);
// }

/*
    116: Sets -- ES6
*/

// // Unique Values will be considered

// const ordersSet = new Set([
//     'Rice', 'Chapathi', 'Sambar', 'Rasam', 'Palya', 'Rice', 'RICE'
// ]);
// console.log(ordersSet);

// console.log(new Set('Vishu'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));    // false
// console.log(ordersSet.has('Rice'));     // true
// console.log(ordersSet.add('Curd'));
// console.log(ordersSet.add('Curd'));
// console.log(ordersSet.delete('Sambar'));
// console.log(ordersSet);

// for (const order of ordersSet) {
//     console.log(order);
// }

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Cashier', 'Cleaner', 'Manager'];
// const uniqueStaff = new Set(staff);
// console.log(uniqueStaff);
// console.log(uniqueStaff.size);
// // create array using the set
// const uniqueStaffArray = [...uniqueStaff];
// console.log(uniqueStaffArray);

/*
    117: Maps: Fundamentals -- ES6
*/

// const rest = new Map();
// rest.set('name', 'Ganesh Grand');
// rest.set(1, 'Saligrama');
// rest.set(2, 'Bangalore');
// rest.set('categories', ['Italian', 'Chinese', 'Organic', 'Veg'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open 🙂')
//     .set(false, 'We are closed 🚫');

// console.log(rest.get('false'));  // Undefined -- data type matters
// console.log(rest.get(false));
// console.log(rest.get('name'));

// const time = 21;
// console.log(
//     rest.get(time > rest.get('open') && time < rest.get('close'))
// );

// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); // Undefined -- we are not pointing to the same array in the heap
// // So, use a variable to set an array/obj as key
// const arr = [1, 2];
// rest.set(arr, 'New Test');
// console.log(rest.get(arr));
// // can even use a DOM element as key 
// rest.set(document.querySelector('h1'), 'Om');
// console.log(rest);

/*
    118: Maps: Iteration
*/

// const question = new Map([
//     ['question', 'What is the best programming language?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct 🏆'],
//     [false, 'Please try again!']
// ]);

// console.log(question);

// // Structure is similar to Object.entries(). So, we can use it to create a new Map

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if (typeof key === 'number') {
//         console.log(`Answer ${key}: ${value}`);
//     }
// }
// const answer = +prompt('Your answer?');
// console.log(question.get(answer === question.get('correct')));

// // Convert map to array
// console.log([...question]);
// console.log(question.keys());
// console.log([...question.values()]);

/*
    120: Coding Challenge#3
*/

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// // 1: different game events
// const gameEventsSet = new Set(gameEvents.values());
// console.log(gameEventsSet);
// const events = [...gameEventsSet];
// console.log(events);

// // remove (64) event from the game events log
// gameEvents.delete(64)
// console.log(gameEvents);

// // Avg time for an event
// const gameKeyArray = [...gameEvents.keys()]
// const time = gameKeyArray[gameKeyArray.length - 1]
// // console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// for (const [minute, event] of gameEvents) {
//     const halfTime = 90 / 2;
//     const displayStr = minute <= halfTime ? '[FIRST HALF]' : '[SECOND HALF]';
//     console.log(`${displayStr} ${minute}: ${event}`);
// }


/*
    121: Working with Strings: Part 1
*/

// const airline = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(airline.indexOf('A'));
// console.log(airline.lastIndexOf('a'));

// console.log(airline.slice(2, 6));

// // get the first word
// console.log(airline.slice(0, airline.indexOf(` `)));
// // get last word
// console.log(airline.slice(airline.lastIndexOf(` `) + 1));
// // works backwords with -ve index
// console.log(airline.slice(-2));
// console.log(airline.slice(2, -3));

// const checkMiddleSeat = function (seat) {
//     // B & E are middle seats

//     // const isMiddleSeat = seat.indexOf('B') !== -1 || seat.indexOf('E') !== -1;
//     const isMiddleSeat = seat.slice(-1) === 'B' || seat.slice(-1) === 'E';
//     console.log(isMiddleSeat ? 'You got a middle seat!!' : 'Your\'s is not a middle seat');
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('16E');

// console.log(new String('Vishu'));
// console.log(typeof new String('vishu'));
// console.log(typeof new String('vishu').slice(1));

/*
    122: Working with strings -- Part 2
*/

// const airline = 'Tap Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const correctPassengerName = function (name) {
//     const nameLower = name.toLowerCase();
//     const correctedName = nameLower[0].toUpperCase() + nameLower.slice(1);
//     console.log(correctedName);
// }

// correctPassengerName('viSHu');
// correctPassengerName('vASudhA');

// const email = 'vishu@gmail.com';
// const emailHack = '  Vishu@gmail.com \n';
// console.log(email === emailHack);
// console.log(email === emailHack.toLowerCase().trim());

// const announcement = 'All passengers come to boarding door 23! Boarding door 23';

// // only replaces the first instance
// console.log(announcement.replace('door', 'gate'));
// console.log(
//     announcement.replace(/door/g, 'gate')
// );

// // Booleans
// const plane = 'Airbus A320Neo';

// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('A'));
// console.log(plane.startsWith('Ai'));
// console.log(plane.endsWith('o'));

// if (plane.startsWith('Airbus') && plane.endsWith('Neo')) {
//     console.log('Part of new Airbus family!!!');
// }

// const checkBaggage = function (items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log(`You are not allowed to board 🚫`);
//     } else {
//         console.log('Welcome aboard!!');
//     }
// }

// checkBaggage('laptop, food and pocket Knife');
// checkBaggage('books and clothes');
// checkBaggage('snacks and gun for protection');

/*
    123: Working with strings -- Part 3
*/

// const myName = 'vishu kumar';
// console.log(myName.split(' '));

// const [firstName, lastName] = myName.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()];
// console.log(newName.join(' '));

// const capitalizeName = name => {
//     const name1 = 'vishu kumar';
//     const names = name1.split(' ');
//     const nameUpper = [];

//     for (const n of names) {

//         // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//         // nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//         nameUpper.push(n.charAt(0).toUpperCase() + n.slice(1));
//     }

//     console.log(nameUpper.join(' '));

// };

// capitalizeName('vishu kumar');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '-'));
// const maskCreditCard = function (number) {
//     const numberString = String(number);
//     const last = numberString.slice(-4);
//     const maskedString = last.padStart(numberString.length, '*')
//     console.log(maskedString);
// }

// maskCreditCard(4386280529183089);

// // Repeat
// const badWeatherMessage = 'Bad weather.. All Departures delayed.. ';
// console.log(badWeatherMessage.repeat(5));
// const planesInLine = planes => {
//     console.log(`There are ${planes} waiting for take off.. ${'🛩 '.repeat(planes)}`);
// }

// planesInLine(5);
// planesInLine(8);
// planesInLine(3);

/*
    124: Coding Challenge #4
*/

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const value = textArea.value;
    const valueArray = value.split('\n');

    // for (let i = 0; i < valueArray.length; i++) {
    //     let splitValueArray = valueArray[i].trim().split('_');
    //     for (let i = 0; i < splitValueArray.length; i++) {

    //         splitValueArray[i] = i === 0 ? splitValueArray[i].toLowerCase()
    //             : splitValueArray[i].charAt(0).toUpperCase() + splitValueArray[i].slice(1).toLowerCase();
    //     }
    //     splitValueArray = splitValueArray.join('').padEnd(20);
    //     console.log(splitValueArray + `${'✅'.repeat(i + 1)}`);
    // }

    for (const [i, value] of valueArray.entries()) {
        const [first, second] = value.toLowerCase().trim().split('_');
        const outPut = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${outPut.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }

})

/*
    125: String methods practice
*/

// Data needed for a later exercise
const flights =
    `_Delayed_Departure;fao93766109;txl2133758440;11:25
    +_Arrival;bru0943384722;fao93766109;11:45
    +_Delayed_Arrival;hel7439299980;fao93766109;12:05
    +_Departure;fao93766109;lis2323639855;12:30`;

const flightRows = flights.split('+');

console.log(flightRows);

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flightRows) {
    let [action, from, to, time] = flight.split(';');
    action = action.replaceAll('_', ' ').trim();
    console.log(`${action.startsWith('Delayed') ? '🔴' : ''} ${action} from ${getCode(from)} to ${getCode(to)} (${time.trim().replace(':', 'h')})`.padStart(50));
}

