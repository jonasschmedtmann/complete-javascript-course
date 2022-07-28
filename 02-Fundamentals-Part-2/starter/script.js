"use strict";
/*
function logger() {
  console.log("My name is Jeff");
}

// calling function
logger();

function fruitProccesor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProccesor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProccesor(5, 5);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAge1(1999);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1998);
console.log(age2);

// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1999));


function cutMachine(fruit) {
  return fruit * 4;
}

function fruitProccesor(apples, oranges) {
  const applePieces = cutMachine(apples);
  const orangePieces = cutMachine(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}
console.log(fruitProccesor(4, 3));


const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1999, 1994, 1991);

console.log(friends[0]);
friends[2] = "Jay";
console.log(friends);

function calcAge(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge(years[2]));


const friends = new Array("Michael", "Steven", "Peter");
// end of array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);
// start of array
friends.unshift("John");
console.log(friends);

// remove elements
friends.pop(); // last element
console.log(friends);

friends.shift(); // first element
console.log(friends);

console.log(friends.indexOf("Michael"));

console.log(friends.includes("Steven"));


const filip = {
  firstName: "Filip",
  lastName: "Tichanek",
  age: 2022 - 1999,
  job: "Front end developer",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(filip.lastName);
/*const interestedIn = prompt(
  "What do you want to know about Filip? Choose between firstName, lastName, age, job"
);
console.log(filip[interestedIn]);

filip.location = "USA";
filip["twitter"] = "@omegalul";
console.log(filip);

console.log(
  `${filip.firstName} has ${filip.friends.length} friends, and his best friend is called ${filip.friends[0]}`
);
*/
const filip = {
  firstName: "Filip",
  lastName: "Tichanek",
  birthYear: 1999,
  job: "Front end developer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  // return 2037 - birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    this.summary = `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    return this.summary;
  },
};
filip.calcAge();
console.log(filip.age);

filip.getSummary();
console.log(filip.summary);
