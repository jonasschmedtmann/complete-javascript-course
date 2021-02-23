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

// LESSON: HOW TO PASS ARGUMENTS WORKS: VALUE VS. REFERENCE
