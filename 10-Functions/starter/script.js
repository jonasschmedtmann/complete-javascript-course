'use strict';

/*
    128: Default Parameters
*/

// const bookings = [];
// const createBooking = function (flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers) {

//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     };
//     bookings.push(booking);

//     console.log(booking);
//     console.log(bookings);
// }

// createBooking('1549');
// createBooking('1549', 4);
// createBooking('1549', 5);
// createBooking('1549', undefined, 210);  // use default value for the second param

/*
    131: Functions accepting callback functions
*/

// const oneWord = (string) => string.replace(/ /g, '').toLowerCase();


// const upperCaseFirst = (str) => {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Tranforming function name: ${fn.name}`);
// };

// transformer('JavaScript is the best!!', oneWord);
// transformer('JavaScript is the best!!', upperCaseFirst);

// // JS uses callbacks all the time 😛

// const high5 = function () {
//     console.log('✋👋');
// }

// document.body.addEventListener('click', high5);
// ['Vishu', 'Vasudha', 'Bharathi'].forEach(high5);

/*
    132: Functions returning functions
*/

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeter = greet('Hi');
// greeter('Vishu');
// greeter('Vasudha');

// greet('Hello')('Bharathi');

// // Arrow
// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArrow('Hello')('Vishu');
// greetArrow('Hello')('Vasudha');
// greetArrow('Hello')('Bharathi');

/* 
    133: The call and apply methods
*/

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
};

const euroWings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: []
};

lufthansa.book(239, 'Vishu Kumar');
lufthansa.book(634, 'Vasudha');
lufthansa.book(1649, 'Bharathi');

const book = lufthansa.book;
// book(239, 'Vishu Kumar')        // Doesn't work -- this keyword is undefined


// call method
book.call(lufthansa, 142, 'Savitha');
book.call(euroWings, 108, 'Kishan');
// Apply method -- same as call, but takes an array for arguments
book.apply(lufthansa, [265, 'Savitha']);
book.apply(euroWings, [98, 'Kishan']);
console.log(lufthansa);
console.log(euroWings);

