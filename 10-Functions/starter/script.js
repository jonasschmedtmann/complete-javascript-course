'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 23);
//   };
// };

// const h = function () {
//   const a = 2;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// g();
// f();
// h();
// f();
// const secureBooking = function () {
//   const passenger = 0;
//   return function () {
//     passenger++;
//     console.log(`${passenger}: passengers`);
//   };
// };

// const secure = function () {
//   console.log('hi');
// };

// secure();

// (function () {
//   console.log('run this once');
// })();

// (() => console.log('run again'))();
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetHey = greet('Hey');
// console.log(greetHey);

// greet('Hello')('Jonas');

// const greets = greeting => name => console.log(`${greeting} ${name}`);

// greets('Oh')('You');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       name,
//     });
//   },
// };

// lufthansa.book(239, 'Tim Ha');
// lufthansa.book(635, 'Mike Smith');

// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// const book = lufthansa.book;

// //book method point the this keyword

// book.call(eurowings, 11, 'Sarah Williams');
// book.call(lufthansa, 33, 'Mary Cooper');
// book.call(swiss, 23, 'Michael Jordan');

// //apply method takes array of arguments or data
// const flightData = [69, 'Dennis Rodman'];
// book.apply(swiss, flightData);
// //better to use call with spead operator
// book.call(swiss, ...flightData);

// // Bind method
// const bookEW = book.bind(eurowings);
// const bookLX = book.bind(swiss);
// const bookLH = book.bind(lufthansa);

// bookEW(999, 'Steven Williams');
// bookLX(111, 'Madden Has');

// const bookEW23 = book.bind(eurowings, 23);

// bookEW23();

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyplanes = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyplanes.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.2);

// console.log(addVAT(200));

// function addTax(rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }

// console.log(addTax(0.1)(200));

// const addVAT = addTax(0.1);
// console.log(addVAT(200));

// Coding Challenge #1

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

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     typeof answer === 'number' &&
//       answer >= 0 &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers);
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3] }, 'array');

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const userInput = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     typeof userInput === 'number' &&
//       userInput < this.answers.length &&
//       this.answers[userInput]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];

// poll.displayResults.call({ answers: [5, 2, 3] });

//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const KPsoundz = {
//   airline: 'Kpsoundz',
//   iataCode: 'KP',
//   bookings: [],
// };

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// console.log(oneWord('hi how are you'));

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const upperFirstWord = function (str) {
//   // const str2 = str.charAt(0).toUpperCase() + str.slice(1);
//   // return str2;
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformed = function (str, fn) {
//   console.log(`Originil: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformed('Javascript is the best!', upperFirstWord);
// transformed('Javascript is the best!', oneWord);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 200 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('A123');
// createBooking('A123', undefined);
// console.log(bookings);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Shopin';

// console.log(jessica, marriedJessica);

// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopied = Object.assign({}, jessica2);

// jessicaCopied.family[0] = 'Tim';

// console.log(jessicaCopied, jessica2);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 31;

// console.log(me.age);
// console.log(friend.age);

// console.log(this);

// const jonas = {
//   firstName: 'Jonas',
//   year: 1989,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     const isMillenial = () =>
//       console.log(this.year >= 1981 && this.year <= 1996);
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.calcAge();

// function calcAgeDecl(birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// }

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// const jonas = {
//   name: 'Jonas',
//   year: 1989,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();

// const f = jonas.calcAge;
// f();
// calcAgeDecl(1982);
// calcAge(1982);
// calcAgeArrow(1982);

// const jonas = {
//   name: 'Jonas',
//   year: 1989,
//   calcAge: function () {
//     return 2023 - this.year;
//   },
// };

// const tim = {
//   name: 'Tim',
//   year: 1982,
//   calcAge: () => 2023 - this.year,
// };

// console.log(jonas.calcAge());
// console.log(tim.calcAge());
// console.log(this);

// if (!numProducts) {
//   console.log('All products are deleted');
// }

// console.log(numProducts);
// var numProducts = 10;

/*
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
console.log(addArrow(1, 2));
// addExpr(1, 2);
// addArrow(1, 2);
// function declaration
function addDecl(a, b) {
  return a + b;
}

// function express
const addExpr = function (a, b) {
  return a + b;
};

// arrow function
const addArrow = (a, b) => a + b;
*/
// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;

//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh and you're a millenial, ${firstName}`;
//       console.log(str);
//       output = 'New Output';
//     }
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';

// calcAge(1982);

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.body.addEventListener('click', function () {
//     // const header = document.querySelector('h1');
//     header.style.color = 'black';
//   });
// })();

// const a = 'Jonas';
// first();

// function first() {
//   const b = 'Hello';
//   second();
//   function second() {
//     const c = 'Hi';
//     third();
//   }
// }

// function third() {
//   const d = 'Hey!';
//   console.log(d + a);
// }

//global scope
/*
myName = "Jonas";

first() = <function>
  age = 30
  second() = <function>
    job = 'teacher'  

so the second() will look for variables in the first();


*/
// const myName = 'Jonas';

// function first() {
//   const age = 30;
//   console.log(millenial);
//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//   }
//   function second() {
//     const job = 'teacher';
//     console.log(millenial);
//     console.log(`${myName} is a ${age}-old ${job}`);
//   }
//   second();
// }
// first();
// console.log(millenial);
// const boardPassengers = function (n, time) {
//   const perGroup = n / 3;
//   setTimeout(() => {
//     console.log(`We are now boarding first ${perGroup} passengers`);
//   }, 3000);
//   console.log(`Will start boarding in ${time} seconds`);
// };

// setTimeout(() => {
//   console.log('hi');
// }, 3000);

// boardPassengers(90, 3);

// const bookIn = function (flightNum, name) {
//   console.log(
//     `${name} booke a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
// };

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// g();
// f();

// let f;

// const g = function () {
//   const a = 2;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// console.log(g);
// g();
// f();

// const h = function () {
//   const b = 4;
//   f = function () {
//     console.log(b * 4);
//   };
// };

// h();
// f();

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

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0,0,0,0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     typeof this.answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//   },
// };

// poll.registerNewAnswer();
// console.log(poll);
// const bookKP = bookIn.bind(KPsoundz);
// const bookEW = bookIn.bind(eurowings);
// const bookLH = bookIn.bind(lufthansa);
// const bookKP11 = bookIn.bind(KPsoundz, 11);

//call method
// bookIn.call(eurowings, 388916, 'David Ha');

// // apply method is inserting an array
// const arr = [12345, 'Lynn Kim'];
// bookIn.apply(lufthansa, arr);

// // bind method is to pointing this keyword all the time
// const callBind = bookIn.bind(KPsoundz, 23, 'Tim Ha');
// callBind();

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// console.log(lufthansa);

// bookKP11('James Kang');
// bookKP11('Lynn Kim');

// bookKP(11, 'Steven Williams');
// bookEW(23, 'Tony Parker');
// bookLH(45, 'Tim Ha');

// lufthansa.book(21213, 'tim');
// lufthansa.book(77213, 'david');

// call method
// bookIn.call(eurowings, 893223, 'Sarah Williams');
// bookIn.call(lufthansa, 893223, 'Tony Harsh');
// bookIn.call(KPsoundz, 39913, 'Tim Ha');
// console.log(lufthansa.bookings);

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// console.log(oneWord('hi my name is time'));
// console.log(upperFirstWord('tim ha'));

// // Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(fn.name);
// };

// transformer('Javascript is the best!', upperFirstWord);

// const high5 = function () {
//   console.log('5️⃣');
// };

// document.body.addEventListener('click', high5);

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// const greets = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greetHey = greet('Hey');
// greetHey('Tim');
// greet('Hey')('David');
// greetHey('yes');

// const bookings = [];
// const createBooking = function (
//   flightNum = 1,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // flightNum = flightNum || 'hi';
//   // numPassengers = numPassengers || 'yes';
//   // price = price || 'tim';
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 599);

// const profile = {
//   name: 'tim ha',
//   passport: 12345669,
// };

// const flight = 'HA2312';

// const checkIn = function (flightNum, boarder) {
//   flightNum = 'ST2311';
//   boarder.name = 'Mr.' + boarder.name;
//   if (boarder.passport === 12345669) {
//     console.log('Check in');
//   } else {
//     console.log('Wrong password');
//   }
// };
// checkIn(flight, profile);
// console.log(profile);
// console.log(flight);
