'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199.0 * (0.15 * numPassengers)
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH124', 2, 1000);

const flight = 'LH123';
const jonas = {
  name: 'Jonas Schmit',
  passport: 8392734601286,
};

const checkIn = function (
  flightNum = 'LH999',
  passenger = 'Mr.' + passenger.name
) {
  if (passenger.passport === 8392734601286) {
    alert('Checked In');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(jonas);
