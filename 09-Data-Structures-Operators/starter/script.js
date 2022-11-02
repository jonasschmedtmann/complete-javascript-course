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
};

/* 
    103: Destructuring Arrays
*/

// Leave a hole to ignore a certain element in the array
let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

// Switching variables without temp
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive more than 1 return value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [1, 2, [3, 4]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values -- can be used when we don't want to use undefined 
// to a value that doesn't exist in the arrar
const [p = 1, q = 1, r = 1] = [7, 8];
console.log(p, q, r);
