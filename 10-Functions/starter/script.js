'use strict';

//default parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) { 
    const booking = {
        flightNum,
        numPassengers,
        price,
    }; 
    console.log(booking); 
    bookings.push(booking); 
} 

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 2, 3);
createBooking('LH123', 3);

//passing arguments (values vs references)
const flight = 'LH234';

const jonas = {
    name: 'Jonas Ro',
    passport: 1213423432,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;
    if (passenger.passport === 1213423432) {
        console.log('Checked in');
    } else {
        console.log('Wrong passport!');
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const flightNum = flight;
const passenger = jonas;

console.log(flightNum);
console.log(passenger);

//