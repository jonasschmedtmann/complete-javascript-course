'use strict';

/* 
    128: Default Parameters
*/

const bookings = [];
const createBooking = function (flightNum,
    numPassengers = 1,
    price = 199 * numPassengers) {

    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    bookings.push(booking);

    console.log(booking);
    console.log(bookings);
}

createBooking('1549');
createBooking('1549', 4);
createBooking('1549', 5);
createBooking('1549', undefined, 210);  // use default value for the second param