'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);
//     }
//     console.log(millenial);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Vali';
// calcAge(1988);

// =============================

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'vali';
// let job = 'dev';
// const year = 1988;

// console.log(me);
// console.log(job);
// console.log(year);

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };

// calcAge(1988);

// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1988);

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Vali',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(`Friend:`, friend);
console.log(`Mylsef`, me);
