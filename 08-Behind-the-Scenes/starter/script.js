'use strict';
/*
function calcAge(birthzear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var millenial = true; //var is function scoped not block scoped
      const firstName = 'Steven'; // JS first looks in the current scope than variable lookup
      const str = `Oh, and you're a millenial, ${firstName}!`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT'; // Reassigning out scope's variable
    }
    // console.log(str); //only available in the if block
    // console.log(millenial);
    // add(2, 3); // block scoped can't be access outside
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'James';
calcAge(1991);
// console.log(age); // Won't be able to access age because it is one direction
// printAge();// Still no access
*/

// // Hoisting with variables

/*
// console.log(me); //undefined
// // console.log(job); //Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year);

// var me = 'James';
// let job = 'teacher';
// const year = 1991;

// Hoisting with Functions

// console.log(addDecl(2, 3)); // returns 5 *works
// console.log(addExpr(2, 3)); // Returns TMZ error
// console.log(addArrow(2, 3)); // Returns TMZ error

// Only one that works before declaration
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

// Var gets hoisted but is undefined
var addArrow = (a, b) => a + b;

//Example
console.log(undefined);

if (!numProducts) deleteShoppingCart();

var numProducts = 10; // Shows

function deleteShoppingCart() {
  console.log('All products deleted!'); // Returns undefined && triggers the if block
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //checks if x is a property of window *returns true
console.log(y === window.y); //returns false
console.log(z === window.z); //returns false

*/
