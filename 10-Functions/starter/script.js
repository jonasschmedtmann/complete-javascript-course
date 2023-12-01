'use strict';

// ------------------ Default Function Parameters ---------------------- //

// Default function values can contain ANY expression

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 0,
  price = numPassengers * 100
) {
  const booking = { flightNum, numPassengers, price };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('LM123');
//Below is a hack to get around the fact that you cannot just skip arugments. The undefined is as if no argument was passed in because if no argument is passed in and no default is assigned, that parameter will show undefined

//ONLY works with undefined as I tried other nullish numbers
// createBooking('LM123', undefined, 20);

// ------------------ How passing Arguments works -------------------- //

const flight = 'LH234';
const jonas = { name: 'Jonas Schmedtmann', passport: 24739479284 };

function checkIn(flightNum, passenger) {
  passenger.name = 'Mr. ' + passenger.name;
}
checkIn(flight, jonas);
// console.log(jonas);

//Passing a primitive type to a function is the same as making a copy of that value, but it is a completely different variable. It is the same as doing this.... const flightNum = flight;

//Passing a reference type (object) to a function is to copy the execution context reference value for the object. It is the same as doing this... const passenger = jonas; As a result, manipulating the passenger variable will manipulate the jonas object.

// JavaScript does NOT have "pass by reference", only "pass by value". Whe it comes to objects, the value happens to hold a reference address but it is not an actual pass by reference as it exists in languages like C++

// ----------------- First Class and Higher Order Functions ------------- //

// First-Class Functions: JavaScript treats functions simply as values. Functions are just another "type" of object and objects are values. This allows us to do things like store a function in a variable and store a function in an object, and pass functions as arguments to other functions, and return functions from functions

//Like other objects, functions actually have METHODS - AKA functions that are called on a function AND functions have properties

//JavaScripts First-Class Functions allows for it have Higher-Order-Functions: A function that either receives or returns a function as an argument, or both. The function that is passed as an argument into the function is called the Call Back Function because the Higher Order function will call that function.

// ----------------- Functions Accepting Callback Functions ----------- //

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
  // return str.replace(/ /g, '').toLowerCase();
};

// console.log(oneWord('Money-man', '-'));

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  // console.log(first, others);
  // console.log([first.toUpperCase(), ...others]);
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order Function

const transformer = function (str, func) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${func(str)}`);

  //.name property is a function property that will yield the name of the function
  console.log(`Transformed by: ${func.name}`);
};

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

const highFive = name => console.log(`Hi, ${name}! 👋🏾`);

//This is another Higher Order Function and has a callback
// ['Jonas', 'Martha', 'Adam'].forEach(name => highFive(name));

//Benefits of Callback functions are used all the time because:
// 1. Easy to split up code into reusable and intraconnected parts
// 2. Allow us to create abstraction: hiding the detail of some code implementation because we don't really care about all the details, and we can think about problems from a higher more abstract perspective

// ------------- Functions that Return functions ---------------- //

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};

// greet('Hey')('Demi');
// greet('Yo')('Jonas');

//function returing function with only arrow functions
const greet2 = greeting => name => console.log(`${greeting} ${name}!`);

// greet2('Yo')('Jonas');
// greet2('Hey')('Demi');

// --------------- The call and apply Methods ----------------------- //

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passenger) {
    console.log(
      `${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passenger });
  },
};

// lufthansa.book(239, 'Jonas');
// lufthansa.book(235, 'John Smith');

// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  name: 'Euowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//.call(): Manually and explcitly set the this keyword.
//Below I called the call method on this function which will call the book method with the this keyword pointing to the eurowings object, along with the other parameters. The first param MUST be the object on which the this keyword should point

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

// .apply(): This method is very similiar to the call method. The first argurment is still the manual setting of the this keyword, and the second argurment must be an array with the param values. This is not widely used in modern javascript

const flightData = [583, 'George Cooper'];

// book.apply(swiss, flightData);
//below this does the exact same thing as the apply method as I am just using the spread operator to get the values out of the array
// book.call(swiss, ...flightData);
// console.log(swiss);

// --------------------- The Bind Method --------------------------- //

//.bind() : This method also allows me to set the this keyword for any function call. Unline the call and apply methods, the bind method does NOT immediately call the function, but rather returns another function where the this keyword is "bound"

//this variable contains a function where the this keyword is bound and pointed to the eurowings object
const bookEW = book.bind(eurowings);
// bookEW(23, 'Steven Williams');
// console.log(eurowings);

//Can also set parameters with the bind method AFTER setting the this keyword for a more specific and taylored function

//Here, the flightNum is preset in this bind function and therefore all I will need to pass in when calling the function is the passenger

//This is a common practice called "Partial Application": setting part of the arguments beforehand
const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Demi Lovato');

// console.log(eurowings);

//Example: Using the bind method with an Event Listener. Because the this keyword in an event handler points to the element on which the event handler is on, I can use the bind method on the method to set the this keyword to the specified object. The bind method is the right option here because the event handler expects a function not a function call and the bind method will create a new function to be called later, whereas the call or apply method call the function right away

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
  console.log(this.planes);
};

const planeBtn = document.querySelector('.buy');
planeBtn.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Example: Using the bind method for Partial Application (present parameters). Here we do NOT care about the this keyword so the first param could be anything but it is a convention to set it to null, and then set the default param I want to set. Here I am basically creating a new more specific function on a more broad function

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// console.log(addVat(200));

const calcWithRate = function (rate) {
  return function addTax2(value) {
    return value + value * rate;
  };
};

// console.log(calcWithRate(0.1)(200));

const addVat2 = calcWithRate(0.23);
// console.log(addVat2(100));

// -------- Immediately Invoked Function Expressions IIFE) ------------ //

// An immediately Invoked Function Expression is a function expression that is invoked right away, one time, and then never again. To achieve this we have to use an un-named function so we cannot call it later. These functions must be wrapped in parentheses.

// The IIFE is a pattern created by developers to protect certain data by keeping them private and "encapsulated" within the scope of the IIFE.

//This pattern isn't used much in modern JavaScript because the same encapsulation can also be achieved with let and const in block scope

//function declaration example wrapped in parentheses

(function () {
  const isPrivate = 'I am private';
  // console.log(`This function with ${isPrivate} will never run again`);
})();

//Arrow function example of the same thing

// (() => console.log('This function will never run again Arrow'))();

{
  const isPrivate2 = 'Private';
}

// --------------------------- Closures --------------------------- //
// A closure simply happens automatically in certain situations
// A closure makes a function remember all the variabels that existed at the functions birthplace.
// Official defintion: A closure is the closed-over variable environment of the execution context in which a function was created (aka the parent), even after that execution context is gone, aka the function returned, preserving the scope chain that scope chain throughout time
//JavaScript will look to the closure for the passengerCount variable even BEFORE looking up the scope chain. The Closure has Priority OVER the scope chain.
//The closure is attached to the function
let passengerCount = 10;

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
// booker();
// booker();
// booker();

// ***** This method will allow me to actually see the the booker functions closure in the console ******
// console.dir(booker);

// -------------------- Closure Examples ---------------------------- //

// A function does not have to be RETURNED to create a colsure

//Example 1: Clure change upon function rassignment
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
// g();
// f();
// console.dir(f);
// f reassigned in function h to another function and the closure actually changes after reassignment
// h();
// f();
// console.dir(f);

// Timer

//REMEMBER! The closure also incluces the arguments as they are just variables
const boardPassengers = function (numPassengers, wait) {
  const perGroup = numPassengers / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${numPassengers}`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start baording in ${wait} seconds`);
};

// boardPassengers(180, 3);
