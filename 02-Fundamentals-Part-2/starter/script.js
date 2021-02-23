"use strict";

/*
////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = `Audio`;
// const private = 534;


////////////////////////////////
// Functions
function logger() {
    console.log(`My name is Soren`);
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

const num = Number(`23`);


///////////////////////////////////////
// Function Declarations vs Expressions
// Function Declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


//////////////////////////////////////
// Arrow Functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, `Soren`));
console.log(yearsUntilRetirement(1980, `Bob`));


/////////////////////////////////////////////
// Functions Calling other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

////////////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1970, `Mike`));

/////////////////////////////////////
//Coding Challenge #1
// THE CHECKWINNER FUNCTION AT THE BOTTOM DOES NOT CARE WHERE THE PARAMETER VALUES COME FROM, THE avgDolphins and avgKoalas VARIABLES COULD HAVE BEEN NAMED ANYTHING ELSE, THEY HAVE NOTHING TO DO WITH THE PARAMETERS OF THE checkWinner FUNCTION. I JUST HAPPENED TO NAME THEM THE SAME THING, WHILE JONAS NAMED THEM scoreDolphins and scoreKoalas.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins && avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Both teams suck!`);
    }
}

checkWinner(avgDolphins, avgKoalas);


///////////////////////////////////////
// Introduction to Arrays
const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // this will log the 1st position inside of the friends array.
console.log(friends[2]); // this will log the 3rd position inside of the friends array.

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);

const firstName = `Jonas`;
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, `teacher`, friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//////////////////////////////////////
// Basic Array Operations
const friends = [`Michael`, `Steven`, `Peter`];

// Add Elements
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

//Remove Elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(23));

if (friends.includes(`Steven`)) {
    console.log(`You have a friend called Peter`);
}

/////////////////////////////////
//Coding Challenge 2
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = bill * .15;
        return tip;
    } else {
        const tip = bill * .20;
        return tip;
    }
}

//Another way to write the above function
// const calcTip = function (bill) {
//     return bill >= 50 && <= 300 ? bill * .15 : bill * .20;
// }

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(bills, tips, total);


///////////////////////////////
// Introduction to Arrays
const jonasArray = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
};

/////////////////////////////////
// Dot vs Bracket Notation
const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: 2037 - 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey])
console.log(jonas[`last` + nameKey])

const interestedIn = prompt(`What do you want to know baout Jonas? Choose between firstName, lastName, age, job, and friends`);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends`);
}

jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmedtman`;
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} + has ${jonas.friends.length} friends, and his best friend in called ${jonas.friends[0]}`);

////////////////////////////////
// Object Methods
const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    //////////////////////////
    // HOW I DID IT BY MYSELF
    // summary: function () {
    //     if (this.hasDriversLicense) {
    //         return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has a driver's license`;
    //     } else return `${this.firstName} is a ${this.age}-year old ${this.job}, and he does not have a driver's license`;
    // }

    ////////////////////////////////
    // HOW JONAS DID IT IN THE VIDEO
    summary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`;
    }

};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// `Jonas is a 46-year old teacher, and he has a driver's license'
console.log(jonas.summary());

//////////////////////////////////
// Me playing around with some code, seeing if I can call use another object to call the function(method) that was written inside of a previous object. It does not seem that I can do that. It seems that methods are specific to the objects they are written inside.
// UPDATE: I FIGURED OUT THAT YOU CAN USE THE CALL METHOD TO USE A METHOD FOR A DIFFERENT OBJECT OTHER THAN THE ONE IT IS WRITTEN FOR.
// const soren = {
//     name: `Soren`,
//     weight: 195,
//     goalWeight: function () {
//         return this.weight - 10;
//     }
// }

// console.log(soren.goalWeight());

// const abi = {
//     name: `Abigail`,
//     weight: 135
// }
// // Won't work like this
// console.log(abi.goalWeight);

// // Will work like this
// console.log(soren.goalWeight.call(abi));

//////////////////////////////
// Coding Challenge 3
const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBmi();
john.calcBmi();

console.log(`${john.fullName}'s BMI (${john.bmi}) is ${john.bmi > mark.bmi ? `higher` : `lower`} than ${mark.fullName}'s (${mark.bmi})!`);

////////////////////////////////////
// Iteration: the for loop

// console.log(`Lifting weights repetition 1`);
// console.log(`Lifting weights repetition 2`);
// console.log(`Lifting weights repetition 3`);
// console.log(`Lifting weights repetition 4`);
// console.log(`Lifting weights repetition 5`);
// console.log(`Lifting weights repetition 6`);
// console.log(`Lifting weights repetition 7`);
// console.log(`Lifting weights repetition 8`);
// console.log(`Lifting weights repetition 9`);
// console.log(`Lifting weights repetition 10`);

// for loop keeps running while condiition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


///////////////////////////////////////////////////////
// Looping Arrays, Breaking and Continuing.

const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true
];

const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// console.log(jonas[2])
// console.log(jonas[3])
// console.log(jonas[4])

for (let i = 0; i < (jonas.length); i++) {
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < (jonas.length); i++) {
    if (typeof jonas[i] !== `string`) continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < (jonas.length); i++) {
    if (typeof jonas[i] === `number`) break;

    console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true
];

//////////////////////////////////////////////
// Loop Backwards and Loops in Loops

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = (jonas.length - 1); i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

///////////////////////////////////////////////////
// The While Loop

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}
*/

//////////////////////////////////////////
// Coding Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    return tip;
  } else {
    const tip = bill * 0.2;
    return tip;
  }
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
