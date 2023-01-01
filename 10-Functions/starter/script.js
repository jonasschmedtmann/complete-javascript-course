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

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book (flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//     }
// };

// const euroWings = {
//     airline: 'EuroWings',
//     iataCode: 'EW',
//     bookings: []
// };

// lufthansa.book(239, 'Vishu Kumar');
// lufthansa.book(634, 'Vasudha');
// lufthansa.book(1649, 'Bharathi');

// const book = lufthansa.book;
// // book(239, 'Vishu Kumar')        // Doesn't work -- this keyword is undefined


// // call method
// book.call(lufthansa, 142, 'Savitha');
// book.call(euroWings, 108, 'Kishan');
// // Apply method -- same as call, but takes an array for arguments
// book.apply(lufthansa, [265, 'Savitha']);
// book.apply(euroWings, [98, 'Kishan']);
// console.log(lufthansa);
// console.log(euroWings);

// /*
//     134: The bind Method
// */
// // Returns a new method with the set 'this' keyword -- can be used multiple times

// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(lufthansa);

// bookEW(23, 'Taami');
// bookLH(56, 'Jooli');

// // always books seat 23 -- preset a variable -- partial application
// // A part of the arguments is preset
// const bookEW23 = book.bind(euroWings, 23);
// bookEW23('Vishu Kumar');
// bookEW23('Vasudha');

// // With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyplane = function () {
//     console.log(this);

//     this.planes++;

//     console.log(this.planes);
// }
// // call & apply don't work here as we don't want to invoke the buyPlane function
// // So, bind creates a new func and that is called on the click of the button
// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

// // Partial Application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addCess = addTax.bind(null, 0.05);
// console.log(addCess(1000));
// console.log(addCess(100));

// // Return Function excersise
// const addCessFunc = (value) => {
//     return (rate) => value + value * rate;
// }

// console.log(addCessFunc(1000)(.01));

/*
    135: Coding Challenge #1
*/

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option.
Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer () {
//         let msg = `${this.question}\n${this.options.join('\n')}\n(Write an option number)`;
//         const answer = +prompt(msg);
//         // update the answer
//         answer < this.answers.length && typeof answer === "number" && this.answers[answer]++;
//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults (type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     }
// };

// document
//     .querySelector('.poll')
//     .addEventListener('click', poll.registerNewAnswer.bind(poll));


// poll.displayResults.call({answers: [5, 2, 3]});                 // Provide the this keyword to update the this.answers in the poll obj
// poll.displayResults.call({answers: [5, 2, 3]}, 'string');       // Provide the this keyword to update the this.answers in the poll obj
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});                 // Provide the this keyword to update the this.answers in the poll obj
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');       // Provide the this keyword to update the this.answers in the poll obj
// poll.displayResults.bind({answers: [5, 2, 3]})();

/*
    136: Immediately Invoked Function Expression(IIFE)
*/

const runOnce = function () {
    console.log(`this runs once`);
}

runOnce();
(function () {
    console.log(`this always runs once`);
})();

(() => console.log(`this ALSO always runs once`))();