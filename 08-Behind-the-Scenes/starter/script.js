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

console.log(this);      // window

const calcAge = function (birthYear) {
    console.log(2022 - birthYear);
    console.log(this);      // undefined -- normal function call
}

calcAge(1992);


const calcAgeArrow = (birthYear) => {
    console.log(2022 - birthYear);
    console.log(this);      // window -- lexical this -- gets the this keyword of parent scope
}

calcAgeArrow(1992);

const vishu = {
    birthYear: 1992,
    calcAge: function () {
        console.log(this);      // vishu obj
        console.log(2022 - this.birthYear);
    }
};

vishu.calcAge();

const vasudha = {
    birthYear: 1997
}

// Method borrowing
vasudha.calcAge = vishu.calcAge;
vasudha.calcAge();  // this points to vasudha obj 