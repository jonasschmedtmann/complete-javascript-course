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
/*
// LESSON: THE CALL AND APPLY METHODS-THIS KEYWORD

const lufthansa = {
  airline: 'Luthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'James Jeremiah King');
lufthansa.book(635, 'Yejin King');
console.log(lufthansa);
const eurowings = {
  airline: 'Eurowing',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
console.log(book);
//Cannot function call, because the copy points to undefined
// book(23, 'Sarah Williams');//doesn't work

//How to get the this keyword to point to the correct object?
// 1. call 2. apply 3. bind are the answers
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// 2. Apply method- not used a lot in modern JS
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//LESSON: THE BIND METHOD -returns a new function where the 'this' keyword is set

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('James King');
bookEW23('Martha Cooper');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// const addVAT = value => value + value * rate
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addVAt = addTax.call(null, 0.23, 100);
console.log(addVAt);

const addVat = [0.23, 100];
addTax.apply();
console.log(addVat);

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/
