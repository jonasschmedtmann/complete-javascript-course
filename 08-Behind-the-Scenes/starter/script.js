'use strict';
/*
// pay attention to scope

function calcAge(birthYear) {
  const currYr = 2023;
  const age = currYr - birthYear;

  function printAge() {
    let output = `${firstName}: you are ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {

      // creating new varibale with same anme as outer scope's variable
      const firstName = "anna";
      // reassigning outer scope's variable
      output = "NEW OUTPUT!";
      const millenial = `Oh, you're a millenial, ${firstName}`;
      console.log(millenial);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(millenial) REFERNCE ERROR : DOESNT HAVE ACCESS TO BLOCK SCOPED const millenial
    // add(2, 3); REFERENCE ERROR
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = "kass";

calcAge(1996);
*/



/*
// HOISTING VARAIBLES
console.log(me); // undefined
console.log(job); // cannot access before initialized
console.log(year); // cannot access before initialized

var me = "Kass";
let job = "developer";
const year = 2023;
*/


/*
// HOISTING FUNCTIONS
console.log(addDeclaration(2, 3)); // works -- function declaration: can call before declaring
console.log(addExpression(2, 3)); // cannot access
console.log(addArrow(2, 3)); // cannot access

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;
*/



/*
// BEST PRACTICES

//declare variables at top of each scope, try to use const most of the time
const numProducts = 10;

//declare funcitons first and use them only after they're declared
function deleteShoppingCart() {
  console.log("all products deleted");
}

if (!numProducts) {
  deleteShoppingCart();
} else {
  console.log("still have items in cart")
}

var a = 1;
let b = 2;
const c = 3;

console.log(a === window.a); // true: variables declared with var create a property on the global window object.
console.log(b === window.b); // false
console.log(c === window.c); // false
*/



/*
// THIS KEYWORD
// console.log(this); // gloabl scope: window

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // undefined-- gets is own "this" keyword
}
calcAge(1998);


const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  console.log(this); //window -- lexical scoping
  //in arrow functions the "this" keyword doesnt have it's own definition so it adopts its parent scope's definition
}
calcAgeArrow(1998);

const person = {
  year: 1996,
  calcAge: function () {
    console.log(this); // get back the entire person object
    console.log(2023 - this.year); // since we have acess to the entire person object, we have access to the year property
  }
}

person.calcAge();

const person2 = {
  year: 2000,
}
person2.calcAge = person.calcAge; // method borrowing
// console.log(person2); // get back the entire person2 object with the calcAge() added
person2.calcAge();


const someone = {
  firstName: "Kass",
  year: 1996,
  calcAge: function () {
    console.log(this); // someone object
    console.log(2022 - this.year); // someobe object's year

    // SOLUTION ONE (OLDER)
    //  const that = this; // self or that
    // const isMillenial = function () {
    //   console.log(that); // someone object
    //   console.log(that.year >= 1981 && that.year <= 1996);
    // };

    // SOLUTION TWO (ES6)
    const isMillenial = () => {
      // this keyword in arrow function has no definition so it uses the same one as it's parent scope which in this case is the calcAge();
      console.log(this); // someone object
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  }
}

someone.calcAge();

*/
/*

// arguments keyword
const addExpression = function (a, b) {
  console.log(arguments); // arguments in regular functions are defined as what was passed in
  return a + b;
};

addExpression(2, 5);

const addArrow = (a, b) => {
  console.log(arguments); // arguments not defined in arrow functions
  return a + b
};

addArrow(2, 8);
*/



// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "kass",
//   age: 26,
// };

// const friend = me;
// friend.age = 30;
// friend.name = "Jonas";

// console.log("friend:", friend);
// console.log("me:", me);

// PRIMITIVE TYPES
let lastName = 'Rojas';
let oldLastName = lastName;
lastName = 'Lazette';

console.log(lastName, oldLastName);

// REFERENCE TYPES
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; // does NOT create a new object, just points to the same memory address in the heap
marriedJessica.lastName = 'Davis'; // since we didn't create a new object, we are modifying BOTH jessica and marriedJessica objects
// console.log('Before marriage:', jessica); // last name is davis
// console.log('After marriage:', marriedJessica); // last name is davis

// COPYING OBJECTS

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'], // deeply nested objects (not first level)
};

// create a NEW object
const jessica2Copy = Object.assign({}, jessica2); // creates a shallow copy: only copies the properties at the first level-- doesn't copy the family array
jessica2Copy.lastName = "Davidson";

jessica2Copy.family.push('Mary');
jessica2Copy.family.push('John');

console.log('OG jessica2:', jessica2); // last name is williams
console.log('jessica2Copy:', jessica2Copy); // last name is davidson