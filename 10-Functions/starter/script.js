'use strict';

// BEGIN PART 1
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  // This only works with variables defined before they're called
  price = 199 * numPassengers
) {
  // ES5 Method
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// // Skipping a default parameter
// createBooking('LH123', undefined, 5);

const flight = 'LM234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
// Passing a primitive is the same creating a new primitive with the same value
console.log(flight);
// Passing an object refers back to the same point in the memory heap
console.log(jonas);

// Start causing issues by interacting with the same object across functions
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);
// Stop causing issues

// Pass-by-value, pass by reference
// JS only works with pass-by-value, not pass-by-reference
*/
// END PART 1

// (NOTES) First-Class vs Higher-Order Functions
/*
First-Class Functions
- JS treats functions as first-class citizens, which means that functions are VALUES.
  - Functions are just another 'type' of OBJECT
    - Since functions are values, we can store them in variables or properties (as an object method)
    - We can also pass functions as arguments into other functions
    - Return functions from functions
    - Functions have their own methods as well


Higher Order Functions:
- A.) A function that receives another function as an argument,
  - addEventListener is a higher-order function that receives a *callback function* to execute
- B.) That returns a new function
  - a function that is called within a function's code block with RETURN 
- C.) Both A and B
*/

// BEGIN PART 2: HIGHER ORDER FUNCTIONS
/*
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
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

const high5 = function () {
  console.log('5');
};
['Jonas', 'Martha', 'Adam'].forEach(high5);

// Abstraction: hiding details a function doesn't care about by 'abstracting them' into 'lower-level' functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');

// Quick Challenge: Re-Write above as Arrow Functions
const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');
*/
// END PART 2

// BEGIN PART 3: THE CALL, APPLY & BIND METHODS
/*
// Call Method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LM',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push([`flight: ${this.iataCode}${flightNum}`, name]);
  },
};
lufthansa.book(239, 'KJ Roelke');
lufthansa.book(635, 'Steven Rodgers');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sara Williams');

book.call(lufthansa, 239, 'Mary Cooper');

// Apply Method (not used much in Modern JS)
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);

// Alterante approach to above code with .call() and Spread Operator
book.call(eurowings, ...flightData);

// The BIND Method
const bookEW = book.bind(eurowings);
const bookLM = book.bind(lufthansa);
bookEW(23, 'Steven Williams');
console.log(eurowings);

// Partial application: a part of the arguments are predefined
const bookEW23 = book.bind(eurowings, 23);
bookEW23('KJ Roelke');
console.log(eurowings);

// Using Objects with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));


// Quick Challenge #2: Rewrite the above as a function that returns a function

const addTaxRate = function (rate) {
  return function (value) {
    return (value = value + value * rate);
  };
};

const addVAT = addTaxRate(0.23);
console.log(addVAT(100));
*/
// END PART 3

// BEGIN CODING CHALLENGE #1
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  displayResults(type = 'Array') {
    if (type === 'String') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else if (type === 'Array') {
      console.log(this.answers);
    }
  },
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (typeof answer === 'number' && answer < this.options.length) {
      this.answers[answer] += 1;
    } else {
      alert(`That is not an option.`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const bonus1 = {
  answers: [5, 2, 3],
};
const bonus2 = {
  answers: [1, 5, 3, 9, 6, 1],
};
const displayResults = poll.displayResults;
displayResults.call(bonus2, 'Array');
displayResults.call(bonus2, 'String');
displayResults.call(bonus1, 'Array');
displayResults.call(bonus1, 'String');
*/
// END CODING CHALLENGE #1

// START SECTION 4: IIFEs & Closures
/*
// Immediately Invoked Function Expression
// (function () {
//   console.log('This will never run again.');
//   const isPrivate = 23;
// })();

// // Arrow function version
// (() => console.log('This will also never run again.'))();

// // All data inside a scope is 'private,' or 'encapsulated.'

// // Using blocks is a better way to declare private variables
// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// Closures
// Makes a function remember all the variables at a function's birthplace, even when the birth environment itself disappears
// A Closure is the variable environment attached to a function exactly as it was at the time and place of the function in which it was created
// Closures have priority over the scope chain.
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// // A closure makes sure that a function doesn't lose connections to variables that existed at the function's birth place.
// // A closure is like a backpack that a function carries around wherever it goes. The backpack has all the variables that were present in the enviornment where the function was created.
// // Closures are not tangible JS objects, and they are created automatically.

// console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);
*/
// END SECTION 4

// START CODING CHALLENGE #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('button').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// END CODING CHALLENG #2
