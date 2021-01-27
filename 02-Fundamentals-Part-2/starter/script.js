'use strict';  //activates strict mode or secure code to avoid accidental errors//
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!')

// const interface = "Audio"; //Uncaught SyntaxError: Unexpected strict mode reserved word//

// const private = 534; //reserved word


//LESSON: FUNCTIONS//

function logger() {
  console.log('My name is James')
}
//calling /  running / invoking function
logger();
logger();
logger();

function fruitprocessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitprocessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitprocessor(2, 4);
console.log(appleOrangeJuice)

const num = Number("23");



//LESSON: FUNCTION DECLARATION VS. EXPRESSIONS//

// //Function declaration eexample//
// const age1 = calcAge1(1991)//can call function first and define it later, but not for "expressions"-hoisting//

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991); //<= these are called arguments//

//Function expression example//
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;//can store a function as a variable, because it is a value//
}
const age2 = calcAge2(1991);
console.log(age1, age2)


//LESSON: ARROW FUNCTIONS//

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

//LESSON: FUNCTIONS CALLING OTHER FUNCTIONS//

function cutFruitPieces(fruit) {
  return fruit * 4; //calling a function helps "Don't repeat yourself!"
}

function fruitprocessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitprocessor(2, 3));



//LESSON: REVIEWING FUNCTIONS//
const calcAge = function (birthYear) {
  return 2037 - birthYear; //birthyear function is completely unrelated to other functions-local variable to other functions
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} has already retired 🎊🎉`)
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎊🎉`)
    return -1;
  }

  return retirement;
  // return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));



///////////////////////SECTION 2: CODING CHALLENGE #1///////////////////////////

//returns the average score for each game//
const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
  return (scoreOne + scoreTwo + scoreThree) / 3;
};
// Test Data #1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {

  if (avgDolphins >= (avgKoalas * 2)) {
    console.log(`Dolphins are the champions! (${avgDolphins} vs.${avgKoalas})`);
    return avgDolphins;
  } else if (avgKoalas >= (avgDolphins * 2)) {
    console.log(`Koalas are the champions! (${avgKoalas} vs.${avgDolphins})`);
    return avgKoalas;
  } else {
    console.log("No team wins! 🤬")
  }
}

checkWinner(scoreDolphins, scoreKoalas) //returns "No team wins"
// //Test Data #2
scoreDolphins = calcAverage(85, 54, 41); //redefines the variable to Test Data #2//
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas) //returns "Dolphins are the champions! (60 vs.28)"



//LESSON: INTRODUCTION TO ARRAYS//

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length)//Object property//3
console.log(friends[friends.length - 1]); //'Peter' //expression

friends[2] = 'Jay'; //mutate an array
console.log(friends);//..."Jay"
// friends = ['Bob', 'Alice']//typeError

const firstName = 'Jonas';
const jonas = [firstName, "Schmedtmann", 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise

function calcAge(birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years)); //doens't work because it is an array not a single value.//NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);//(3) [47, 70, 19];



//LESSON: BASIC ARRAY OPERATIONS (METHODS)//


//.push() = to add to the end of an Arr
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);


//.undshift() = to add to the beginning of an Arr

friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop();// Removes last
const popped = friends.pop(); // Removes 'Peeter'
console.log(popped);
console.log(friends);

friends.shift(); // Removes First
console.log(friends);

console.log(friends.indexOf('Steven')); // element #1

console.log(friends.indexOf('Bob')); //-1 = universal not there

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));// false-checks for 'STRICT EQUALITY'-doesn't do 'TYPE COERCION
console.log(friends.includes(23)); //true

if (friends.includes('Steven')) {
  console.log(`You have a freind called Steven`); //
};



///////////////////////SECTION 2: CODING CHALLENGE #2///////////////////////////


//My first atempt
// function calcTip(bill) {
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;

// };
// const bills = [125, 555, 44];
// const tips = []
// // const total = bills + tip;
// console.log(calcTip(bills[0]));


//help from video
const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
};

//*hint* use plural variable names that have multi values
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(bills);
console.log(tips);
console.log(total);


///////////////////////S2 CC #2-COMPLETE///////////////////////////

//LESSON: INTRODUCTION TO OBJECTS//

//"OBJECT LITERAL SYNTAX" define a new object-these are called properties
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


//LESSON: DOT VS. BRACKET NOTATION//

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

//"DOT NOTATION"/
console.log(jonas.lastName);
console.log(jonas['lastName']);
// console.log(jonas.'last' + nameKey) //Doesn't work, needs literal object

//"BRACKET NOTATION" - can use any expression
const nameKey = 'Name'; //"Name" is in both firstName & lastName
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");

// TO RETRIEVE FROM AN ELEMENT & if something exists and if it doesn't 'response /
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);//prompt types answer and shows answer//
} else {
  console.log('Wrong request What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.')
};

//How to add new properties to the object/

jonas.location = 'Portugal';
jonas['twitter'] = "@jonasschmedtman";
// console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is named Michael"

console.log(`${jonas.firstName} has ${jonas["friends"].length} friends, and his best friend is named ${jonas.friends[0]}.`);



//LESSON: OBJECT METHODS//

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   //*any function attached to an object is called: "METHOD"//
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // }

//   // calcAge: function () {
//   //   console.log(this)
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   }
// };
// console.log(jonas.calcAge());
// console.log(jonas.age);

//Challenge//
//"Jonas is a 46-year old teacher, and has a/no driver's license"


const james = {
  firstName: 'James',
  lastName: 'King',
  birthYear: 1990,
  job: 'programmer',
  friends: ['Joshua', 'Jessica', 'Max'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${james.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
  //no need to make a function, just make use ternary operator ___ ? 'a' : 'no'

  // hasDriversLicense: function () {
  //   if (james.hasDriversLicense = true) {
  //     console.log('a ')
  //     return 'a';
  //   } else (james.hasDriversLicense = false)
  //   console.log("no ")
  //   return 'no ';
  // }

};
// console.log(`${james.firstName} is a ${james.calcAge()} old ${james.job}, and he has ${james.hasDriversLicense()} driver's license!`)

console.log(james.getSummary());


///////////////////////SECTION 2: CODING CHALLENGE #3///////////////////////////

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2; //using this.__ is much easier and can be reusabale
    return this.bmi;
  }
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

console.log(mark.calcBMI())//higher-27.30996
console.log(john.calcBMI())//lower-24.194608

console.log(`${mark["firstName"] + " " + mark.lastName}'s BMI (${mark.calcBMI().toFixed(2)}🐽🐽🐽🐽🐽) is higher than ${john["firstName"] + " " + john.lastName}'s BMI (${john.calcBMI().toFixed(2)})!`);


///////////////////////Section-2 CC #3-COMPLETE////////////////////////////////


//LESSON: ITERATION: THE for LOOP//

//************VIOLATED DON'T REPEAT YOURSELF**********
// console.log('Lifting weights repetition 1 🏋️‍♂️');
// console.log('Lifting weights repetition 2 🏋️‍♂️');
// console.log('Lifting weights repetition 3 🏋️‍♂️');
// console.log('Lifting weights repetition 4 🏋️‍♂️');
// console.log('Lifting weights repetition 5 🏋️‍♂️');
// console.log('Lifting weights repetition 6 🏋️‍♂️');
// console.log('Lifting weights repetition 7 🏋️‍♂️');
// console.log('Lifting weights repetition 8 🏋️‍♂️');
// console.log('Lifting weights repetition 9 🏋️‍♂️');
// console.log('Lifting weights repetition 10 🏋️‍♂️');

//instead use for loops
// for loop keeps running while condition is TRUE//
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights  ${rep} 🏋️‍♂️`);
};


//LESSON: LOOPING ARRAYS, BREAKING & CONTINUING//
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];
// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);
//jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]); //cleaner way
};

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = []; //need an empty array

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]); //left to right
}
console.log(ages);

// continue and break statement
//continue
console.log('----ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue; //continue is a functional keyword
  console.log(jonas[i], typeof jonas[i]);
};

console.log('----BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
};


//LESSON: LOOPING BACKWARDS & LOOPS in LOOPS//

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

//0, 1, ..., 4
//4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
};

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`===========starting exercise ${exercise} ===========`);
  //by putting the variable before we can see the count
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weights repetition ${rep} 🏋️‍♀️ `)
  }
};


//LESSON: THE WHILE LOOP//

// for loop keeps running while condition is TRUE//


// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights  ${rep} 🏋️‍♂️`);
// };

//run while the condition is true
let rep = 1; //repetition
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights  ${rep} 🏋️‍♂️`);
  rep++;
}

let die = Math.trunc(Math.random() * 6) + 1; //Math.trunc rounds without a demicmal //


while (die !== 6) {
  console.log(`You rolled a ${die}`);
  die = Math.trunc(Math.random() * 6) + 1;
  if (die === 6) console.log("Loop is about to end...");
};

*/

///////////////////////SECTION 2: CODING CHALLENGE #4///////////////////////////



//help from video
const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
};

//*hint* use plural variable names that have multi values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
  console.log(`$$$$$$$$    ${bills[i]}`);
  console.log(`=========tips ${tips[i]}======`);
  console.log(totals[i]);
}

// function calcAverage(arr) {

//   for (let sum = 0; sum < bills.length; sum++) {
//     console.log()
//   }

// };

// console.log(tips.push(calcTip(bills)))
// console.log(calcTip(bills[0]))


// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
// console.log(bills);
// console.log(tips);
// console.log(total);
