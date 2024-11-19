'use strict';


//  128: SETTING DEFAULT PARAMETERS********
/*
const bookings = [];

const createBooking = (
  flightNum,
  numPassengers = 1, // ES6 default parameters
  price = 199 * numPassengers // can use operations and other parameters to set default params but you must initialize 'numPassengers' parameter before using it to manipulate the default value of the 'price' parameter
) => {

  ///////// ES5 way of setting default values
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  };

  bookings.push(booking);
  console.log(booking);
};

// setting a parameter to undefined, its like not passing in an argument, so it will take on the default value. This is how you would skip a default parameter that you want to leave as a default value.
createBooking('LH123', undefined, 2);

*/


// 129 working with parameters some more ********
/*
const flightNum = 'LH234';
const kassPassenger = {
  name: 'Kassandra Lazette',
  passport: 1234567890
};

const checkIn = function (flight, passenger) {
  flight = 'LH999';
  passenger.name = `Mrs. ${passenger.name}`;

  if (passenger.passport === 1234567890) {
    console.log('checked in!')
  } else {
    console.log('wrong passport');
  }
};

checkIn(flightNum, kassPassenger);  // "checked in!"

console.log(flightNum, kassPassenger); // flight did not change, but passenger name did! why? objects can be manipultaed in the function but strings are only shallow copied so the 'flightNum' is pointing to a different value in the stack heap than " flight = 'LH999' "


const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
  console.log(person)
}

newPassport(kassPassenger); // change passport number then checkIn();

checkIn(flightNum, kassPassenger); // 'wrong passport' bc newPassport changed og passport number on kassPassenger

*/

// Passing by values vs passing by reference
// JS does not pass by reference-- only by values


// HIGHER ORDER FUNCTIONS THAT TAKE IN A FUNCTION AS AN ARGUMENT ********

/*
const oneWord = (string) => {
  return string.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = (string) => {
  const [firstWord, ...otherWords] = string.split(' ');
  return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

const transformer = (string, fn) => {
  console.log(`original string: ${string}`)
  console.log(`After passing into fn: ${fn(string)}`)
  console.log(`Change brought to you by the ${fn.name} function`)
}

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('🙌🏼');
}

// addEventListener is a high order function because it uses the high5() as an argument
document.body.addEventListener('click', high5);

// forEach is a high order function, it will call high5() for every element in the array
['green', 'eggs', 'ham'].forEach(high5);
*/


// HIGHER ORDER FUNCTIONS THAT RETURN FUNCTIONS **********


/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey = greet('hey');
greeterHey('jonas');
greeterHey('steven');

greet('hey')('hannah');

// using arrow function syntax
const greet2 = (greeting) => (name) => {
  console.log(`${greeting} ${name}`)
}

greet('whats up')('kass')
*/


// CALL() APPLY() BIND() THIS KEYWORD METHODS ********
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() old way
  book(flightNum, passenger) {
    console.log(`${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passenger,
    })
  }
}

// lufthansa.book(239, 'Kassandra Rojas');
// lufthansa.book(340, "John Doe");
// console.log(lufthansa.bookings)

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const bookFlight = lufthansa.book; // set book method as a function so we can reuse it

// bookFlight(23, 'hannah hoover') // does not work bc of 'this' keyword

// CALL METHOD ***********************
// fnName.call(whatTHISkeywordIsPointingTo, params)
bookFlight.call(eurowings, 23, 'hannah hoover'); 
console.log(eurowings)


bookFlight.call(lufthansa, 94, "bob joe");


const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
};

bookFlight.call(swiss, 283, "Mary Poppins")

// APPLY METHOD ***********************
const flightData = [583, 'George Jungle'];
bookFlight.apply(swiss, flightData); // this works, is correct, but is an outdated method

bookFlight.call(swiss, ...flightData); // using spread operator in conjunction with call method gives us exactly same result

console.log(swiss);

// BIND METHOD ***********************
// bind does not immediately call the function, instead it returns a new function where the 'this' keyword is bound, 'this' is set to whatever we pass into bind
// bookFlight.call(eurowings, 23, 'hannah hoover');
const bookEW = bookFlight.bind(eurowings);
const bookLH = bookFlight.bind(lufthansa);
const bookLX = bookFlight.bind(swiss);
bookEW(203, 'Steven Williams');

const bookEW23 = bookFlight.bind(eurowings, 23); // bind 'eurowings' as 'this' keyword, pass in first parameter into bookFlight method
// PARTIAL APPLICATION : specifying parts of the arguments of the original function ^^^
bookEW23('Kass Lazette'); // since we already set the flight, we just need the last param of 'name' for book() method
bookEW23('Andrew Lazette');

// THIS KEYWORD WITH EVENT LISTENERS
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes)
}

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // NaN
//'this' keyword in buyPlane() refers to the '.buy' ELEMENT bc 'this' belongs to the 'addEventListener' call back function

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// 'this' keyword now is bound to the lufthansa object so when we call the buyPlane() we are correctly running the function


// PARTIAL APPLICATION

const addTax = (taxRate, value) => console.log(value + (value * taxRate));
addTax(0.1, 200)

// value at tax = VAT
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;  bind(whatTHISkeywordIsPointingTo || null if there is not 'this' keyword, presetFirstParam, can preset as many as you want but for this eample we are just presetting the taxRate in addTax())

addVAT(120); // 147.6
addVAT(1000); // 1230

// using higher order functions to return function that has similar application as the above approach
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); //123
*/



// CODING CHALLENGE
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

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/


const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: C++', '3: Java'],
  replies: new Array(4).fill(0),
  registerNewAnswer() {
    const userAnswer = Number(prompt(`${this.question}.\n${this.options.join('\n')}\n(Write option number)`));

    if (userAnswer >= 0 || userAnswer < this.options.length || typeof userAnswer === 'number') {
      this.replies[userAnswer]++;
    }

    if (!Number.isInteger(userAnswer)) {
      return alert('Invalid input. Please try again.')
    }

    this.displayResults();
    // this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.replies);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.replies.join(', ')}`)
    }
  }
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//  Use the 'displayResults' method to display the 2 arrays in the test data
const testCase = [1, 5, 3, 9, 6, 1]
// fnName.call(whatTHISkeywordIsPointingTo -- NECESSARY, paramsYouWantToInclude -- OPTIONAL)
poll.displayResults.call({ replies: [5, 2, 3] }, 'string');
poll.displayResults.call({ replies: testCase })

//  [5, 2, 3]