'use strict';

//Default Values
/*const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000); //how to skip a default parameter


//Primitive values
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24236457878546,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24236457878546) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

//Passing by value - 
//Passing by reference - JS doesn't have this!


//Callback functions - allow us to create abstraction in the code. We can reuse them later

//Low level functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [firstWord, ...others]= str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
}

//Higher Order function - because it takes a function as an argument
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);

//Js uses callbacks all the time
const high5 = function () {
  console.log('✋');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam', 'Angela'].forEach(high5);


//Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Angela');

//Arrow function exercise

const greet1 = greeting => name => console.log(`${greeting} ${name}`);

greet1('Ahoy')('Marcus');


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a sit on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Angela');
lufthansa.book(235, 'Jorge');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
};

const book = lufthansa.book;

//Does not wortk!
//book(23, 'Maria');

//How do we tell JS what the this keyword should apply?
//Call method - will call the book function with  the this keywork set to eurowings
book.call(eurowings, 23, 'Maria');
book.call(lufthansa, 239, 'Armando');

//Apply method - take the elements from an array and pass it to a function
//Not very used
const flightData = [583, 'George'];
book.apply(eurowings, flightData);

//same thing
book.call(eurowings, ...flightData);

//Bind method - doesn't call the function! returns a new function
const bookEW = book.bind(eurowings);
const bookLuf = book.bind(lufthansa);

bookEW(23, 'Teresa');
bookLuf(345, 'Manuel');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Madalena');

//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;

console.log(addVAT(100));

//function returning function exercise

const addTaxRate = rate => value => console.log(value + value * rate);

const addVAT2 = addTaxRate(0.23)(100);



//////////CODING CHALLENGE 1 /////////////////

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: newArray(4).fill(0),
  registerNewAnswer () {
    var answer = prompt(
      `${this.question} \n ${this.options.join('\n')} \n (write option number)`
    );
    if (answer > 0 && answer <= 3) {
      this.answers ++ 
    } else {
      alert('Not a valid answer!');
    }
    this.displayResults();
    this.displayResults('string');
  },

  displayResults (type = 'array') {
    type === 'array' ? console.log(type) : console.log(`Poll results are ${type}`);
  }
  
  // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


//Immediatly Invoked Function Expressions

//this wouldn't impede us from running again
const runOnce = function () {
  console.log(`This will neer run again`);
}

runOnce();

//IIFE
(function () {
  console.log(`This will never run again`);
  //const isPrivate = 23;
})();


(() => console.log(`This will never ALSO run again`))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);


//Closures - we don't explicitally use. It happens automatically in some situations

const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker();
booker();
booker();
booker();

console.dir(booker);

//Example 1
let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
}

const h = function() {
  const b = 777;
  f = function() {
    console.log(b * 2);
  }
}

g();
f();

// Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function(n,  wait) {
  const perGroup = n / 3;

  setTimeout(function() {
    console.log(`We are all boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000)

  console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3);

*/