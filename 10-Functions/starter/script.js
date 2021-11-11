'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 5);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2904386534,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH000';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2904386534) {
    alert('Check in');
  } else {
    alert('Check out');
  }
};

//flight es un  string y se hará una copia por lo que no se modifica. Con objectos 'passenger' "se pasa" el objeto por lo que si que se modifica.
checkIn(flight, jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);

checkIn(flight, jonas);
