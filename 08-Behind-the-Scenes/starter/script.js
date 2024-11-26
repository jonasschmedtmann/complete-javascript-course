'use strict';

// ------------------------------- Scope and Scope Chain ---------------------- //

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      const millenial = `Oh, and you are a millenial, ${firstName}`;
      console.log(millenial);
      var str = true;

      console.log();

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';

      console.log(add(2, 3));
    }

    console.log(str);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
// calcAge(1991);

// -------------------- Hoisting and Temporal Dead Zone (TDZ) -------------------- //
// The TDZ of a variable declared with let or const starts at the top of its scope all the way until after the line where it is initialized

// with Variables

// console.log(firstNameJ); // will be undefined
// console.log(lastName); // will produce reference error of cannot access before initialization
var firstNameJ = 'Jonas';
let lastName = 'Schmedtmann';
const job = 'teacher';

//with functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // reference eror of cannot access before initialization
// console.log(addArrow(2, 3)); // reference eror of cannot access before initialization

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// --------------------- this keyword ------------------------------ //

// special variable that is created for every execution context and therefore every function. It takes the value of (points to) the owner of the function in which the this keyword is used

// It's value is only assigned when the function is actually called

//Four ways functions can be called:
// 1. Method (function attached to an object). In this case, the this keyword points to the object calling the method

//2. Simple function call. In this case, and in STRICT MODE, the this keyword will be undefined, but WITHOUT strict mode, the this keyword will point to the global window object

//3. Arrow functions. This is not actually a way of calling a function but needs to be addressed here. Arrow functions do NOT get their own this keyword, it will use the this keyword of it's surrounding function, called the lexical this

// 4. Event Listener. In this case, the this keyword will always refer to the DOM element that the event listener is attached to

// 5. Other ways to call a function which will be gone into later in the course: new, call, apply, bind

// console.log(this); //points to the window object

function add() {
  console.log(this); //this will be undefined as I am using strict mode
}

// add();

const addArrowTest = (a, b) => {
  console.log(this); // this will point to the window object as the arrow function does not have it's own keyword and so will use the lexical this--the this keyword of it's parent's lexical scope, and in this case, that is the global scope
};

// addArrowTest(2, 3);

const jonasSchmedtmann = {
  firstName: 'Jonas',
  birthYear: 1991,
  calcAge() {
    console.log(2023 - this.birthYear);
    // An arrow function inherits the this keyword from it's parent scope
    const isMillenial = () => {
      console.log(this);

      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };
    isMillenial();
  },
};

// jonasSchmedtmann.calcAge();
const mathilda = {
  birthYear: 1988,
};

mathilda.calcAge = jonasSchmedtmann.calcAge;
// mathilda.calcAge(); // the this keyworf will point to the object that called it aka mathilda

const f = jonasSchmedtmann.calcAge; // this will ne a regular function call

// -------------- Arguments keyword ------------------------ //
// The arguments keyword/variable is only available in function declarations and function expressions. Arrow functions do NOT get their own arguments variable

const addExpr = function (a, b) {
  console.log(arguments); // This will display an array containing the arguments passed into the function, even if there are more arguments than what the function expects
  return a + b;
};

// addExpr(1, 2);
const addArrow = (a, b) => {
  console.log(arguments); // Will cause a reference error saying arguments is not defined
  return a + b;
};

// addArrow(2, 4);

// ----------------- Primitives vs Objects in Memory -------------- //

// Primitives/Primitive Types: 1. Numbers, 2. Strings, 3. Booleans, 4. undefined, 5. null, 6. Symbol, 7. BigInt

//Primitive types example - primitive types are stored in the execution context in which they are delared

//unique identifier(with the variable name) - a piece of memory will be allocated with address - value stored in memory at specified address

// The identifier points to the memory address, not the value.
// The value at a particular memory address is IMMUTABLE aka it cannot be changed. So the when I reassign the age identifier, a new piece of memory is created to hold the value of 31, and age will point to this new address
let age = 30;
let oldAge = age;
// console.log(age);
age = 31;
// console.log(age);
// console.log(oldAge);

// ------------------------------------------------------------------ //

// Everything else is an object aka Reference Types. 1. Object literal. 2. Arrays, 3. functions. 4 And many nore..

// Reference types are stored in the memory heap of the JS engine with a memory address and value

// A unique itentifier in the stack is created in the execution context that points to a piece of memory in the stack with a heap memory reference as the value. This stack memory reference value points to the memory reference in the heap which points to the value. It works this way because objects may be too large to be stored in the stack

// This is also why values of objects can be modified even when declared with const, it is only primititive values that are immutable

const me = { name: 'Jonas', age: 30 };
const friend = me;
friend.age = 27;
// console.log(me);
// console.log(friend);

let lastName1 = 'Willams';
let oldLastName = lastName1;
lastName = 'Davis';
// console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  friends: ['Sara', 'Bob'],
};

const marriedJessica = {
  ...jessica,
  lastName: 'Davis',
  friends: [...jessica.friends],
};
const test = jessica;
jessica.friends.push('Mary');
console.log(
  test === jessica,
  jessica === marriedJessica || test === marriedJessica
);
marriedJessica.friends.push('Amy');
console.log(jessica, marriedJessica);
