"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriversLicense = true;
// // if (hasDriversLicense) console.log(`I can drive`);

// // const interface = `audio`;

// function logger() {
//   console.log(`i printed`);
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 9);
// console.log(appleJuice);

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge(1846);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1846);

// console.log(`This is function declaration ${age1}`);

// console.log(`This is function expression ${age1}`);

// // arrow functions
// (birthYear) => 2034 - birthYear;
// const calcAge3 = (birthYear) => 2037 - birthYear;
// console.log(calcAge3(1843));

// const yearsUntilRetirement = (birthYear, firstname) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstname} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1990, "john"));

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);
//   return `Juice with ${applePieces} pieces apples and ${orangePieces} pieces oranges`;
// }

// const cutPieces = (fruit) => fruit * 4;
// console.log(fruitProcessor(2, 6));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntilRetirement = (birthYear, firstname) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   return retirement > 0 ? `${firstname} retires in ${retirement} years` : -1;
// };

// console.log(yearsUntilRetirement(1933, "ryan"));
// console.log(yearsUntilRetirement(2000, "ryan"));

// code Challenge

const checkWinner = function (avgDolphins, avgKoalas) {
  return avgDolphins >= 2 * avgKoalas
    ? `dolphins win ${avgDolphins} - ${avgKoalas}`
    : avgKoalas >= 2 * avgDolphins
    ? `Koalas win ${avgKoalas} - ${avgDolphins}`
    : `no team wins`;
};
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)));
console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));

// Arrays !

const friends = ["one", "two", "three"];
const years = new Array(1, 2, 1, 23, 453, 55);

// .push() -> add element at end
// .pop remove last element
// unshift() -> add element at 0
// shift -> rmove first element
// .indexof() -> returns element postion -> -1 if not there
// .includes -> ES6 -> true if in array, false if not

//Objects
// object.thiskey -> works fine as long as thiskey != expression
// thiskey = 'first' + 'last'
// object.thiskey = undefined
// undefined = truthy falsy i.e
// const jonas = {
//   key: "yes",
// };
// const objectKey = "key";
// jonas["yes"] = "test"; // this assigns key value to object.. cool
// console.log(jonas);

const jonas = {
  firstname: "jonas",
  lastnasme: "sheck",
  birthYear: 1991,
  job: "teacher",
  friends: ["ryan", "john", "cat"],
  hasDriversLicense: true,
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};
jonas.calcAge(jonas.birthYear);
console.log(jonas.calcAge());

// code challenge 2

const mark = {
  height: 1.69,
  weight: 78,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.age;
  },
  name: "mark",
};

const john = {
  height: "1.95",
  weight: "92",
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
  },
  name: "john",
};

mark.calcBMI();
john.calcBMI();

console.log(`${john.name} bmi is ${john.BMI} and ${mark.name} is ${mark.BMI}`);
