'use strict';
/** 
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;

    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; //looks within current scope first
      output = 'NEW OUTPUT!!'; //reassign outer scope variable
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
    // console.log(add(2, 3)); Error in Strict mode
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);


// hoisting variables
console.log(me);
// console.log(job); // errors
// console.log(year); // errors


var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(me);
console.log(job);
console.log(year);

// hoisting functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // errors
// console.log(addArrow(2, 3)); // errors

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

// Example

if (!numProducts) deleteShoppingCart(); // will trigger deleteShoppingCart

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// var defined variables will be added to window object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // will be true
console.log(y === window.y); // will be false
console.log(z === window.z); // will be false;


// Understanding THIS scope
console.log(this); // window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // lexical this - window object (from parent scope)
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object when it is called from jonas.calcAge()
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // copies method
matilda.calcAge(); //this will show matilda since it is called from matilda

const jonas = {
  // object literal
  year: 1991,
  firstName: 'jonas',
  calcAge: function () {
    console.log(this); // jonas object when it is called from jonas.calcAge()
    console.log(2037 - this.year);

    // pre ES-6 arrow function solution
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this); // undefined because we're in function call
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996); // throws error if used this vs self
    // };

    // ES6 solution is to use an arrow function to have access to this
    const isMillenial = () => {
      console.log(this);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), // undefined because window object doesn't have a firstName variable
};

jonas.greet();
jonas.calcAge();

// Arguments

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 8);

var addArrow = (a, b) => {
  // console.log(arguments); // error - arguments does not exist in arrow func
  return a + b;
};

addArrow(2, 5);



let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(me); //age is 27
console.log(friend); // age is 27
*/

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // creates a shallow copy
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage 2: ', jessica2); //shows family with Mary and John
console.log('After marriage 2: ', jessicaCopy); //shows family with Mary and John, but new lastName

// libraries like lodash have a tool for deep cloning!!!
