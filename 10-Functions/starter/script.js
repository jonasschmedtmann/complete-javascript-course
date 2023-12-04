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

/* checkIn(flight, jonas); */
console.log(jonas);

const NewPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

NewPassport(jonas);
console.log(jonas.passport);
/* checkIn( flight, jonas ) */

const OneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const UpperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const Transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

Transformer('javaScript is the best!', UpperFirstWord);
Transformer('javaScript is the best!', OneWord);

const High5 = function () {
  console.log(`👋`);
};

['jonas', 'Martha', 'Adam'].forEach(High5);

const Greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const GreeterHey = Greet('Hey');
GreeterHey('Jonas');
GreeterHey('Steven');

Greet('Hello')('Ryan');

const lufthansa_t = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  /*   Book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }, */
};

/* lufthansa_t.Book(239, 'Ryan Park');
lufthansa_t.Book(892, 'Kai Park'); */

const eurowings_t = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss_t = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const Book = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
};

Book.call(lufthansa_t, 239, 'Ryan Park');
Book.call(eurowings_t, 937, 'Sarah Williams');
Book.call(swiss_t, 289, 'Mary Cooper');

const flightData = [837, 'Alanna Kouri'];

Book.apply(swiss_t, flightData);
Book.call(lufthansa_t, ...flightData);

const BookEW = Book.bind(eurowings_t);

BookEW(...flightData);
console.log(eurowings_t);
console.log(BookEW);

const BookEW23 = Book.bind(eurowings_t, 23);

BookEW23('Han Solo');

lufthansa_t.planes = 300;
const BuyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', BuyPlane.bind(lufthansa_t));

/* Partial application */
const AddTax = (rate, value) => value + value * rate;
console.log(AddTax(0.1, 200));

const AddVat = AddTax.bind(null, 0.23);

console.log(AddVat(200));

const BindFunction = (generalFunction, boundArgs) => {
  return generalFunction.bind(null, ...boundArgs);
};

const AddSalesTax = BindFunction(AddTax, [0.08]);

console.log(AddSalesTax(100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an
 array with the number of replies for each option. This data is stored in the 
starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method 
does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected 
option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the 
option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to 
check if the input is a number and if the number makes sense (e.g answer 52 
wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method 
takes a string as an input (called 'type'), which can be either 'string' or 
'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display 
a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method
 call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data.
 Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll
 object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favorite Programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  RegisterNewAnswer() {
    const userAnswer = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );
    if (Number(userAnswer) > 0 && Number(userAnswer) < 4) {
      this.answers[userAnswer]++;
    } else {
      alert(`Option not available!`);
    }
    this.DisplayResults('string');
  },
  DisplayResults(type) {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.RegisterNewAnswer.bind(poll));

const DisplayResults = function (answersArr, type) {
  poll.DisplayResults.call({ answers: answersArr }, type);
};
DisplayResults([3, 2, 5], 'array');
DisplayResults([3, 2, 5], 'string');

/* Immediately Invoked Function Expressions */

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

/* Closures */

const SecureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = SecureBooking();

booker();
booker();
booker();

let f;

const G = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const H = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

G();
f();

H();
f();

const BoardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
BoardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener 
that changes the color of the selected h1 element ('header') to blue, each time 
the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all 
the time you need. Think about WHEN exactly the callback function is executed, 
and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
