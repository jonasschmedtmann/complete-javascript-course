"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

function logger() {
  console.log(`my name is logger ${passTest}`);
}

const calcAge = function (birthYear) {
  return 2020 - birthYear;
};

//arrow function
const calcAge3 = (birthYear) => 2021 - birthYear;
console.log(calcAge3(1992));

const yrsUnitRetirement = (birthYear) => 65 - (2021 - birthYear);

console.log(yrsUnitRetirement(1992));

const cutPieces = function (fruit) {
  return fruit / 8;
};
function fruitProcessor(apples, oranges) {
  const applepieces = cutPieces(apples);
  const orangepieces = cutPieces(oranges);
  const juice = `Juice with ${applepieces} and ${orangepieces}`;

  return juice;
}

console.log(fruitProcessor(88, 8888));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const d1 = 44,
  d2 = 23,
  d3 = 71;
const k1 = 85,
  k2 = 54,
  k3 = 41;
const checkWinner = () => {
  const dolphins = calcAverage(d1, d2, d3);
  const koalas = calcAverage(k1, k2, k3);
  if (dolphins > koalas)
    console.log(`dolphins won, dolphins =${dolphins} koalas=${koalas}`);
  else console.log(`koalas won, dolphins =${dolphins} koalas=${koalas}`);
};
checkWinner();


const DrJones = {
  whereAreyou: "here now",
  slno: 99,
  birthYear: 1992,

  // calcAge: function () {
  //   return 2021 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },
};
console.log(DrJones["calcAge"]());
console.log(DrJones.calcAge());
console.log(DrJones.age);


const mark = {
  height: 1.69,
  weight: 78,

  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  height: 1.95,
  weight: 92,
  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `mark's bmi ${mark.calcBMI()} is greater than john's bmi ${john.calcBMI()}`
  );
} else {
  console.log(
    `mark's bmi ${mark.calcBMI()} is less than  john's bmi ${john.calcBMI()}`
  );
}



for (let i = 0; i < 10; i++) {
  console.log(`Lifting weights repetition ${i}🤸‍♂️🤸‍♀️`);
}

const jonasArray = [
  "jonas",
  "paul",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
];

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  //console.log(`value of element ${i} is ${jonasArray[i]}`);
}

let rep = 1;
while (rep <= 10) {
  rep++;
  console.log(rep);
}
*/

const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let total = 0;
function calTip(v) {
  return v > 50 && v < 300 ? v * 0.15 : v * 0.2;
}

for (let i = 0; i < arr.length; i++) {
  console.log(
    `tip of item ${arr[i]} is ${calTip(arr[i])} and total is ${
      arr[i] + calTip(arr[i])
    } .`
  );
  total += arr[i];
}

console.log(`average of array is ${total / arr.length}`);
