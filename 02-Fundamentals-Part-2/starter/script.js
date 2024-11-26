"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {hasDriverLicense = true;}
// if (hasDriversLicense) {console.log("I can Drive!");}

function fruitMultiplier(fruit) {
  return fruit * 2;
}

function fruitProcessor(apples, oranges) {
  const totalApples = fruitMultiplier(apples);
  const totalOranges = fruitMultiplier(oranges);

  return `Juice made with ${totalApples} apples and ${totalOranges} oranges.`;
}

let appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// JavaScript Fundamentals - Part 2

// Coding Challenge 1

console.log(`Result for Code Challenge 1 starts here..`);

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// function chechWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//   } else {
//     return `No team won!`;
//   }
// }

// console.log(chechWinner(scoreDolphins, scoreKoalas));

// Coding Challenge 2

console.log(`Result for Code Challenge 2 starts here..`);

// // const calcTip = function (bills) {
// //   return bills >= 50 && bills <= 300 ? 0.15 * bills : 0.2 * bills;
// // };

// // const bills = [125, 555, 44];
// // const bills = new Array(125, 555, 44);

// console.log(bills);

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

// console.log(tips);

// // const totals = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
// // const totals = new Array(calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]);
// // OR
// const totals = new Array(
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2]
// );

// console.log(totals);

// Objects

const abdulObject = {
  firstName: "Abdul Barri",
  lastName: "Lawal",
  age: 2022 - 1999,
  friends: ["Owologe", "Feranmi", "Bolaji"],
  job: "Programmer",
};

console.log(abdulObject);

// Coding Challenge 3

console.log(`Result for Code Challenge 3 starts here..`);

const Mark = {
  firstName: "Mark",
  lastName: "Miller",
  // fullName: this[firstName] + " " + this[lastName],
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const John = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

Mark.calcBMI();
John.calcBMI();

const bmiResult =
  John.bmi > Mark.bmi
    ? `${John.firstName}'s BMI (${John.bmi}) is higher than ${Mark.firstName}'s (${Mark.bmi})!`
    : `${Mark.firstName}'s BMI (${Mark.bmi}) is higher than ${John.firstName}'s (${John.bmi})!`;

console.log(Mark.calcBMI());
console.log(John.calcBMI());

console.log(bmiResult);


// For Loops

for (let rep = 1; rep <= 10; rep++) {
  console.log(`This is loop number ${rep}.`);
}

const abdulArray = [
  "Abdul Barri",
  "Lawal",
  2022 - 1999,
  "Programmer",
  ["Owologe", "Chibuzor", "Feranmi"],
  true
]

const types = [];

for (let i = 0; i < abdulArray.length; i++) {
  types[i] = typeof abdulArray[i];
  console.log(abdulArray[i], types[i]);
}

console.log(types);

const years = new Array(1981, 1991, 2001, 2011, 2021);
const ages = new Array();

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(years, ages);

const abdulArray2 = [
  "Abdul Barri",
  "Lawal",
  2022 - 1999,
  "Programmer",
  ["Owologe", "Chibuzor", "Feranmi"],
  true
]

for (let i = abdulArray2.length - 1; i >= 0; i--) {
  console.log(abdulArray2[i]);
}


// Loop in a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: This is repition ${rep}`);
  }
}


// While loop
let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}

// Coding Challenge 4

console.log(`Result for Code Challenge 4 starts here..`);

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);

const tips = new Array();

const totals = new Array();

const bonusArray = new Array();

const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? 0.15 * bills : 0.2 * bills;
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum = sum / arr.length;
  // bonusArray.push(sum);
  return sum;
}
// console.log(calcAverage(totals));
console.log(calcAverage(totals));
