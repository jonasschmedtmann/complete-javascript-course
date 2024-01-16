"use strict"; // enables strict mode to write more secure code
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :)");


function logger() {
  console.log("My name is Jonas");
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  //   return `${firstName} retires in ${retirement} years.`;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Bob"));


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"]; //literal syntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const jonas = ["Jonas", "S.", 2037 - 1991, "teahcer", friends];
console.log(jonas);

const calcAge = (birthYear) => 2037 - birthYear;
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// years.forEach((element) => {
//   console.log(calcAge(element));
// });

const friends = ["Michael", "Steven", "Peter"]; //literal
console.log(friends);
const newLength = friends.push("Jay"); // adds an element to end of an array
console.log(friends);
console.log(newLength);

friends.unshift("John"); // adds an element to the start of an array
console.log(friends);

const popped = friends.pop(); // removes last element of array
console.log(friends);
console.log(popped); // returns the removed element

friends.shift(); // removes first element of array
console.log(friends);

console.log(friends.indexOf("Steven")); // index
console.log(friends.indexOf("Bob")); // -1

console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false


const jonas = {
  firstName: "Jonas",
  lastName: "S.",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Steven", "Peter", "Michael"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]); // can use an operation | expression instead of string

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Jonas?");
// console.log(interestedIn);
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("We don't know that");
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
);


const jonas = {
  firstName: "Jonas",
  lastName: "S.",
  birthYear: 1991,
  job: "teacher",
  friends: ["Steven", "Peter", "Michael"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     // method
  //     return 2037 - birthYear;
  //   },
  //   calcAge: function () {
  //     // method
  //     console.log(this);
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    // method
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  genOut: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.genOut());


// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");

// keeps running while condition = true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}



const jonas = [
  "Jonas",
  "S.",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

const reverse = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // Filling an array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
  reverse.unshift(jonas[i]);
}

console.log(jonas, types, reverse);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "number") break;
  console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
  "Jonas",
  "S.",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------- Starting excercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`${exercise}: Excercise repetition ${rep}`);
  }
}
*/

// for (let rep = 1; rep < 6; rep++) {
//   console.log(`For: Excercise repetition ${rep}`);
// }

let rep = 1;
while (rep <= 6) {
  console.log(`While: Excercise repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled a ${dice}`);
}
