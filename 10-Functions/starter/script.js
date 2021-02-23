'use strict';

// LESSON: DEFAULT PARAMETERS
/*
const bookings = [];

//ES6 parameters can only work this way unless in the beginning
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 style- 🤮
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LK123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
//can't 'skip' arguments, unless you use undefined
createBooking('LH123', undefined, 1000);
*/
/*
// LESSON: HOW TO PASS ARGUMENTS WORKS: VALUE VS. REFERENCE

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  console.log(jonas);
  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing ...spread ---copied
// const fligthNum = flight;
// const passenger = jonas;

//change a persons passport number
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/
/*
// LESSON: FIRST-CLASS AND HIGHER ORDER FUNCTIONS
//CHECK GOODNOTES//
*/
/*
// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/
/*
// LESSON: FUCNTIONS => FUNCTIONS

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey ');
// greeterHey('Jonas');
// greeterHey('James');

// greet('Hello')('James');

//Challenge arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Sup')('James');
*/

// LESSON: THE CALL AND APPLY METHODS-THIS KEYWORD
