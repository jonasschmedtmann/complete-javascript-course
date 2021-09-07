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

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
    },

    orderDelivery: function({ starterIndex, mainIndex, time, address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious paster with ${ing1}, ${ing2} and ${ing3}`);
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
    time: '22:30',
    address: 'Ablekuma Curve',
    mainIndex: 2,
    starterIndex: 2,
});

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring the array
const [x, y, z] = arr; //This is the destructuring assignment 
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

// Switching Variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// Switching Variables with Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values form a function 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring 
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;


// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇
// Destructure OBJECTS . Curly braces are used to Destructure Objects
//1. When destructuring objects, the object properties have to be stated as is. However, the order is not important. 

const { name, openingHours, categories } = restaurant; //
console.log(name, openingHours, categories);

// 2. If you want to change the variable name from the property name
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// 3. Implementing Default values for object properties
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// 4. Mutating variables 
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);


// Nested Objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);


// Using the Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);


// Creating a new Menu from the original menu
const newMenu = [...restaurant.mainMenu, 'Banku'];
console.log(newMenu);


// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);

//Iterables: arrays, strings, maps, sets. NOT OBJECTS
const str = 'Samuel';
const letters = [...str, '', 'S.'];
console.log(str);

const ingredients = [prompt("Let's make pasta! Ingredient 1"), prompt("Let's make pasta! Ingredient 2"), prompt("Let's make pasta! Ingredient 3")];
// Old way of calling the orderPaster()
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// Calling the orderPasta() with the spread operator
restaurant.orderPasta(...ingredients);




//SPREAD OPERATOR, because on RIGHT side of =  
const arr = [1, 2, ...[3, 4]];

// REST, becuase on LEFT side of = 
// REST is used to pack elements into an array
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [Pizza, Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(Pizza, Risotto, otherFood);


// USING REST ON OBJECT
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// USING REST ON FUNCTION(Called REST ARGUEMENTS)
const add = function(...numbers) {

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum +=
        numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 2, 4, 1, 4);

// Taking it a step further we can do this;
const xi = [23, 5, 7];
add(...xi);



//💎💎💎💎💎💎 SHORT-CIRCUITING || AND && 💎💎💎💎💎💎
// If the first operand is a truthy value JS will not consider the second operand and will return the first
// e.g
//--------------- OR -------------------
console.log(3 || 'Samuel');
console.log('' || 'Samuel');
console.log(true || 0);
console.log(undefined || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//--------------- AND -------------------
// The AND operator does the opposite of the OR operator
console.log(0 && 'Samuel');




/* 🏋️‍♂️🏋️‍♂️ CODING CHALLENGE 
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
            'Kimich',
            'Gurezka',
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
    date: 'Nov. 9th 2021',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Solution
//1.
const [players1, players2] = game.players;

//2.
const [gk, ...fieldPlayers] = players1;

//3. 
const allPlayers = [...players1, ...players2];

//4.
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5.
const { odds: { team1, x: draw, team2 } } = game;

//6
const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);


//7.
team1 < team2 && console.log('Team 1 is more likely to win');