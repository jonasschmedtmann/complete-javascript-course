'use strict';

// const tim = {
//   name: 'tim',
//   year: 1982,
//   calcAge: function () {
//     return 2022 - this.year;
//   },
// };

// console.log(tim.calcAge());

// const tim = {
//   year: 1977,
//   name: 'Tim',
//   calcAge4: function () {
//     console.log(2022 - this.year);
//     console.log(this);
//   },
// };

// const matilda = {
//   year: 2017,
// };

// tim.calcAge4();
// matilda.calcAge5 = tim.calcAge4;
// console.log(tim.calcAge4);
// console.log(matilda.calcAge5);

// matilda.calcAge5();

// const tim = {
//   firstName: 'tim',
//   year: 1982,
//   calcAge: function () {
//     console.log(2022 - this.year);
//     // console.log(this);

//     const isMillenial = () => {
//       console.log(this);
//     };
//     isMillenial();
//   },
// };

// tim.calcAge();

// let myAge = 30;
// let oldAge = myAge;
// myAge = 31;
// console.log(oldAge);
// console.log(myAge);

// const me = {
//   name: 'Tim',
//   age: 40,
// };

// const friend = me;
// friend.name = 'Jonas';
// console.log(friend);
// console.log(me);

let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';
// console.log(lastName);
// console.log(oldLastName);

const tim = {
  firstName: 'Tim',
  lastName: 'Ha',
  age: 39,
};

const jade = tim;
jade.age = 44;
jade.firstName = 'Tony';
// console.log(jade);
// console.log(tim);

const tim2 = {
  firstName: 'Tim',
  lastName: 'Ha',
  age: 39,
  family: ['David', 'Jennifer', 'Lynn'],
};

const timCopy = Object.assign({}, tim2);
timCopy.age = 99;
timCopy.family[0] = 'Yong';
console.log(tim2);
console.log(timCopy);
