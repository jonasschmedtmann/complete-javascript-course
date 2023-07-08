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
// use of spread operator in copying elements of object
const restaurantFullInfo = {
  foundingYear: '2023',
  ...restaurant,
  owner: 'Abhinav A',
};
restaurantFullInfo.name = 'Bihari Katta';
console.log(restaurant);
console.log(restaurantFullInfo);

const arr = [1, 2, 3, 45, 6, 5];
console.log(...arr);

const [a, , b, ...others] = arr;
console.log(a, b, others);

// console.log(undefined  null);
// restaurant.numberOfGuests = 0;
const numberOfGuests = restaurant.numberOfGuests ?? 10;
console.log(numberOfGuests);
console.log(null && undefined);
// Logical Operators Demo
const student1 = {
  name: 'Abhinav',
  roll: 2,
};

const student2 = {
  name: 'Anand',
};

student1.roll ||= 1; // OR Assignment operator
student2.roll = student2.roll || 0;
student2.roll ??= 1; // Nullish Assignment operator
console.log(student1, student2);

student2.name &&= 'Arunit'; // AND assignment operator
console.log(student2);
