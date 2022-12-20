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

/*
    134: The bind Method
*/
// Returns a new method with the set 'this' keyword -- can be used multiple times

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Taami');
bookLH(56, 'Jooli');

// always books seat 23 -- preset a variable -- partial application
// A part of the arguments is preset
const bookEW23 = book.bind(euroWings, 23);
bookEW23('Vishu Kumar');
bookEW23('Vasudha');

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyplane = function () {
    console.log(this);

    this.planes++;

    console.log(this.planes);
}
// call & apply don't work here as we don't want to invoke the buyPlane function
// So, bind creates a new func and that is called on the click of the button
document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addCess = addTax.bind(null, 0.05);
console.log(addCess(1000));
console.log(addCess(100));

// Return Function excersise
const addCessFunc = (value) => {
    return (rate) => value + value * rate;
}

console.log(addCessFunc(1000)(.01));