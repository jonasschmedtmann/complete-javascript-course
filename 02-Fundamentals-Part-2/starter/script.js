"use strict";
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win with ${avgDolphins}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win with ${avgKoalas}`);
  } else {
    console.log(`Noone wins.`);
  }
}

checkWinner(avgDolphins, avgKoalas);

const jonas = {
  firstName: "Jonas",
  age: 46,
  hasLicense: true,
  job: "teacher",
};

console.log(
  `${jonas.firstName} is a ${jonas.age}-years old ${jonas.job}, and he has ${
    jonas.hasLicense ? "a" : "no"
  } driver's license`
);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

console.log(
  `${mark.fullName} has a BMI of ${mark.calcBMI()} which is ${
    mark.bmi > john.calcBMI() ? "higher" : "lower"
  } than ${john.fullName} bmi of ${john.bmi}`
);
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 85];
const tips = [];
const totals = [];
function calculateTips(bills) {
  let tip;
  for (let i = 0; i < bills.length; i++) {
    tip = bills[i] >= 50 && bills[i] <= 200 ? bills[i] * 0.15 : bills[i] * 0.2;
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
}
function calcAverage(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum / arr.length;
}
calculateTips(bills);
console.log(totals);
console.log(calcAverage(totals));
