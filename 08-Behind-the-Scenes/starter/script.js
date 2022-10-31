'use strict';

/*
    93: Scoping in practice
*/

// function calcAge (birthYear) {
//     const age = 2022 - birthYear;
//     console.log(firstName);     // Scope-chain

//     function printAge () {
//         let output = `You are ${age}, born in ${birthYear}`;      // Scope-chain
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;

//             // Creating a new variable with same name as in outerScope
//             const firstName = 'Kaushik';
//             // Re-assigning outer scope variable
//             output = 'New OutPut'

//             const msg = `Oh!! you are a millenial, ${firstName}`;
//             console.log(msg);

//             function add (a, b) {
//                 return a + b;
//             }

//             console.log(output);
//         }
//         // add(3, 4);               // functions are block scoped in 'strict mode'
//         // console.log(msg);        // const, let are block scoped
//         console.log(millenial);     // Var is function scoped
//     }

//     printAge();

//     return age;
// }

// const firstName = 'Vishu';
// calcAge(1992);

/*
    95: Hoisting and TDZ in practice
*/

// // Variables
// console.log(me);
// console.log(job);       // TDZ
// console.log(year);      // TDZ

// var me = 'Vishu';
// let job = 'coder';
// const year = 1992;


// //Functions

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));     // TDZ
// console.log(addArrow(2, 3));    // addArrow is not a function -- because it is set to undefined after hoisting

// function addDecl (a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// var x = 23
// let y = 34;
// const z = 90;

// console.log(x === window.x);    // true -- as created with var
// console.log(y === window.y);    // false -- as created with const/let


/*
    97: The this keyword in practice
*/

// console.log(this);      // window

// const calcAge = function (birthYear) {
//     console.log(2022 - birthYear);
//     console.log(this);      // undefined -- normal function call
// }

// calcAge(1992);


// const calcAgeArrow = (birthYear) => {
//     console.log(2022 - birthYear);
//     console.log(this);      // window -- lexical this -- gets the this keyword of parent scope
// }

// calcAgeArrow(1992);

// const vishu = {
//     birthYear: 1992,
//     calcAge: function () {
//         console.log(this);      // vishu obj
//         console.log(2022 - this.birthYear);
//     }
// };

// vishu.calcAge();

// const vasudha = {
//     birthYear: 1997
// }

// // Method borrowing
// vasudha.calcAge = vishu.calcAge;
// vasudha.calcAge();  // this points to vasudha obj 

/*
    98: Regular functions vs Arrow functions
*/

// const vishu = {
//     firstName: 'Vishu',
//     birthYear: 1992,
//     calcAge: function () {
//         console.log(this);      // vishu obj
//         console.log(2022 - this.birthYear);

//         // const isMillenial = function () {
//         //     console.log(this);      // this-- undefined as it is a normal function call
//         //     console.log(this.birthYear >= 1981 && this.birthYear <= 1996);  //Error
//         // };
//         // isMillenial();

//         // Use arrow function if we need to use 'this' -- as arrow function gets lexical this
//         const isMillenialArrow = () => {
//             console.log(this);
//             console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
//         }

//         isMillenialArrow();
//     },



//     greet: () => console.log(`Hello ${this.firstName}`)     // this.firstName -- will be undefined as window obj doesn't have firstName property
// };

// vishu.greet();
// vishu.calcAge();

// const addExpr = function (a, b) {
//     console.log(arguments);     // gives the arguments in an array
//     return a + b;
// };

// console.log(addExpr(2, 3, 4, 5));       // We can pass any number of arguments. but is handled in a more efficient way in ES6

// const addArrow = (a, b) => {
//     console.log(arguments);     // undefined
//     return a + b;
// };
// console.log(addArrow(5, 6, 7, 8));

/* 
    100: Primitives vs Objects in Practice
*/


// Primitives
let lastName = 'Kumar';
let oldLastName = 'Pattage';
lastName = 'Bhat';

console.log(lastName, oldLastName);

// Reference types
const vasudha = {
    firstName: 'Vasudha',
    lastName: 'Pattaje',
    age: 25
};

const marriedVasudha = vasudha;
marriedVasudha.lastName = 'Kumar'   // Changes the property in the main vasudha obj

console.log('Before marriage', vasudha);
console.log('after marriage', marriedVasudha);
// marriedVasudha = {};    // gives error

// Object Copy

const vasudhaNew = {
    firstName: 'Vasudha',
    lastName: 'Pattaje',
    age: 25,
    family: ['Gopi', 'Nandalal']
};


// Object.assign -- only makes a shallow copy
// i.e. -- details in the first level are copied to a new obj, but the objects(like family array here)
// are not copied and they still point to the old reference
const vasudhaNewCopy = Object.assign({}, vasudhaNew);


// vasudhaNewCopy.family.push('Vishu');
// vasudhaNewCopy.family.push('Sneha');

console.log(vasudhaNew);
console.log(vasudhaNewCopy);

// Deep Copy with ...
const vasudhaNewCopy1 = {...vasudhaNew};


vasudhaNewCopy1.family.push('Vishu');
vasudhaNewCopy1.family.push('Sneha');
console.log(vasudhaNewCopy1);





