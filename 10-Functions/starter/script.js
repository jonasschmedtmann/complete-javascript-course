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
// LESSON: FIRST-CLASS AND HIGHER ORDER FUNCTIONS
