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

let person1 = {
  name: null,
  age:33
}

let person2 = {
  name: "Elsa",
  age:33
}

// take the first value if it exists, if not take the second value
// person1.name ||= "changed"
// take the first value if it exists or if it is "nullish" ("" or 0), if not take the second value
// person1.name ??= "changed"
// if the first value exists, take the second value. If you want to change a property if it exists use this one.
// person1.name &&= "bobert"

person1.name ??= "Blah blah"






// console.log(`or: ${person1.name}`);
// console.log(`nullish: ${person1.name}`);
console.log(`and: ${person1.name}`)