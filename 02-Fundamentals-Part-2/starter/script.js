"use strict";
/*
function logger(myName) {
  console.log(`My name is ${myName}`);
}

logger("Dan");
logger("Bob");

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 1));

const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1994));

const calcAverage = (scr1, scr2, scr3) => (scr1 + scr2 + scr3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins > avgKoalas * 2) {
    console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`No team wins...`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);
*/

/*
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const dan = ["Dan", "Bekenstein", 2024 - 1994, "Product Manager", friends];
console.log(dan);
console.log(dan.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
*/

/*
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Peter"));
console.log(friends.includes("Dan"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/
/*
const dan = {
  firstName: "Dan",
  lastName: "Bekenstein",
  age: 2024 - 1994,
  job: "Product Manager",
  friends: ["Tim", "Justin", "Greg"],
};

console.log(dan);
console.log(dan.lastName);
console.log(dan["lastName"]);

const nameKey = "Name";

console.log(dan["first" + nameKey]);
console.log(dan["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Dan? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(dan[interestedIn]);


dan.location = "US";
dan["city"] = "Boston";

console.log(dan);

console.log(
  `${dan.firstName} has ${dan.friends.length} friends, and his best friend is called ${dan.friends[0]}`
);

const dan1 = {
  firstName: "Dan",
  lastName: "Bekenstein",
  // age: 2024 - 1994,
  job: "Product Manager",
  friends: ["Tim", "Justin", "Greg"],
  birthYear: 1994,
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(dan1.calcAge());

console.log(dan1.age);

console.log(dan1.getSummary());
*/

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
