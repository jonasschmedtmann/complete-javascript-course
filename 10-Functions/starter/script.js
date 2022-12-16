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

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeter = greet('Hi');
greeter('Vishu');
greeter('Vasudha');

greet('Hello')('Bharathi');

// Arrow
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArrow('Hello')('Vishu');
greetArrow('Hello')('Vasudha');
greetArrow('Hello')('Bharathi');
