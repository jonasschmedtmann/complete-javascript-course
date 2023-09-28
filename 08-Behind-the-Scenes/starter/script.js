'use strict';
/*

*********************
Facts about javascript
*********************

1. High level
  languages like C are low level where you have to manage your resources like memory manually.
  High level does this automatically, the downside is a sacrifice in speed
2.  Garbage collected
  memory is cleaned up and removes unused pieces
3. interpreted  or just in time compiled
  all computer programs can be reduced to just ones and zeros.  No one writes machine code.

4. multi paradigm
  approach or mindset when structuring code which directs coding style
  a. procedural -> this is what we have been using so far
  b. object oriented
  c. functional

  paradigms can also be imperative or declarative

  *Java script can do all of these
5. prototype based object oriented
  almost everything in javascript are objects except for primitive types
  "prototypal inheritance"
    for example we can use any array methods on an array because they inherit them from the array object
6. first class functions
  functions are treated as regular variables
  allows us to use a lot of techniques
  allows for a lot of functional programming.
  we've used a lot of first class function without knowing
7. Dynamic
  dynamic typing
  we don't assign data types
  these types only become known when they're passed into the engine
  controversy whether this is good or bad
  other languages like C, Java, and Ruby are explicity typed
  TypeScript is the statically type variant of Javascript
8. Non-blocking event loop
  what is a concurrency model?
      how the engine handles multiple tasks happening at the same time?
      javascript does multiple things at teh same time.
      A thread: executed in computer CPU
  long running task?
      how do we stop this from blocking up the thread so other tasks can run?
      Takes long running tasks and executes them in the "background" and comes back to them later.
*/

/*

*************************
What is a javascript engine?
*************************

Every browser has it's own engine
Most known is Chrome's V8
There is also node JS which enables us to run javascript outside of the browser

every engine has
  1. call stack
      execution stack, where our code is executed
  2. heap
      object storage

CS theory: compilation vs interpretation
  compilation: all code is converted into machine code at once and written into a binary file executed by the computer

  Interpretation: interpreter runs through the source code and executes it line by line

  JS used to be an interpreted language
      interpreted languages is much slower.  
      This used to be ok but the needs have evolved.

  Just in time compilation: entire code is converted into machine code at once and then executed immediately
      there is not portable binary file which gets ran

As teh code enters teh engine, the code gets parsed.
  AST: abrstarct syntax tree
  splits up codt that is meanigufl to the language
  saved into treee wchich structures code
  later generates machine code

  the ast is NOT teh DOM tree


compliation
  translated into machine code
  executed right away
  hapensin call stack

optimizaiton strats
  creates very unoptimized machine code so the code can start running
  re-optimizes in background and then parses the superior machine code
*/

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'steven'; // javascript looks within the current scope first before looking up
      // you can have multiple variables with different variable names
      // in the same way you can have functions with the same parameter names, because those variables are limited in their scope
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);
      // output = 'new scope!'; // manipulated outer variable using child scope, no new variable was created, only accessed a pre-existing one
    }
    // functions are block scoped, but only in strict mode!
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

console.log(age);
*/

/*

** Hoisting **

Hoisting is a fairly straight forward process

*/
/*
// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
} // only function declaration can be called before initialization

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

*/

/*
// Example

if (!numProducts) deleteShippingCart();

var numProducts = 10;

function deleteShippingCart() {
  console.log('All Products deleted!');
}

// in this example, numProducts is not 10, but undefined, which is a falsy value, therefore the function becomes executed

// imagine this were a larger code base, this would be really hard to find

// Just don't use var!  Use const most of the time and let if you need to change it later

// declare your variables at the top of your code, easier to maintain and it looks better

// best practices, but not rules, however as a beginner I should treat best practices as rules :)

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);  // True
console.log(y === window.y);  // False
console.log(z === window.z);  // False

*/
/*

** This Keyword **

Extremely important concept in javascript

*/

/*
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // the object the method is inside is the reference for the this keyword
    // this is because the object is calling the method
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // this is called method borrowing

matilda.calcAge();

const f = jonas.calcAge;
f(1950); // this is undefined in this instance
*/

/*

*** Arrow functions vs regular functions ***

*/

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    /* const self = this;  enables this to be used in lower scope
    self or that are common names
    this is a pre es6 solution, now we use arrow functions

    
    };*/
    // arrow functions use the this keyword of its parent scope
    const isMillennial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);

      isMillennial(); // the this keyword will be undefined because it is within a function block
    };
  },

  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
// object is not a code block, it is an object literal, everything is in the global variable
// therefore the this keyword applies to the global variable in this instance

// a regular function call has the this keyword set to undefined

jonas.greet();
jonas.calcAge();

// arguments keyword, only available in regular functions
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 10, 5, 6);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(1, 2); // arguments will not be defined
