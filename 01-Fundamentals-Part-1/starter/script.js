
/*
let js = "awesome";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "James";


console.log(firstName)

//reserved words shouldn't be used but some are still legal
Variable name conventions//
let jonas_matilda = "JM"
let $function = 27;
let Person = 'Jonas'; //use lower case letter to start a var//

//a constant number that never changes should be all in caps//
let PI = 3.1415;

// use descripted variable names rather than vague//
let myFisrstJob = "Pizza Maker";
let myCurrentJob = "Unemployed";

console.log(myCurrentJob)


let javaScriptIsFun = true;
console.log(javaScriptIsFun)


console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

//EXAMPLE OF "DYNAMIC TYPING" Reassigning a variable without using using let or var//
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

//EXAMPLE FOR "UNDEFINED_VALUES"//

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

//This is a bug- and doesn't make any sense, because it is not an "OBJECT"//
console.log(typeof null);


LESSON: LET, CONST, AND VAR//

let age = 30;
age = 31; //'MUTATED' the variable "PERFECT TERM FOR LET"//

// const birthYear = 1991;
// birthYear = 1990; //"IMMUTABLE EXAMPLE"


const job; //must include a value//

var job = "programmer";
job = "teacher";

lastName = "King";
console.log(lastName)


//LESSON: BASIC OPERATORS//
//MATH OPERATORS
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + ' ' + lastName);

//ASSIGNMENT OPERATORS//

let x = 10 + 5; // 15
x += 10; // x = x + 10; returns 25
x *= 4; //x = x * 4 = 100
x++; // x = x + 1; 101
x--; // x = x - 1; 100
x--; //99
console.log(x)

//COMPARISON OPERATORS//

console.log(ageJonas > ageSarah); //>, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageJonas >= 18;

console.log(now - 1991 > now - 2018)



//LESSON: OPERATORS PRECEDENCE//

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
// console.log(25 - 10 - 5); //left to right execution//

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10, Ex. right to left
console.log(x, y)
const averageAge = (ageJonas + ageSarah) / 2; //use () around operators that might have low precedence than a higher one//
console.log(ageJonas, ageSarah, averageAge)

*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both versions)

3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1:
Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.

TEST DATA 2:
Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.


//TEST DATA 1//

let marksWeightT1 = 78; //const massMark = 78//
let marksHeightT1 = 1.69;
let marksBMIT1 = marksWeightT1 / marksHeightT1 ** 2;
console.log(marksBMIT1.toFixed(2))

let johnsweightT1 = 92;
let johnsHeightT1 = 1.95;
let johnsBMIT1 = johnsweightT1 / (johnsHeightT1 * johnsHeightT1);
console.log(johnsBMIT1.toFixed(2))

let markHigherBMIT1 = marksBMIT1 > johnsBMIT1;
console.log(markHigherBMIT1)

//TEST DATA 2//

let marksWeightT2 = 95;
let marksHeightT2 = 1.88;
let marksBMIT2 = marksWeightT2 / marksHeightT2 ** 2;
console.log(marksBMIT2.toFixed(2))

let johnsweightT2 = 85;
let johnsHeightT2 = 1.76;
let johnsBMIT2 = johnsweightT2 / johnsHeightT2 ** 2;
console.log(johnsBMIT2.toFixed(2))

let markHigherBMIT2 = marksBMIT2 > johnsBMIT2;
console.log(markHigherBMIT2)


////////////////////////////////////
// Coding Challenge #1 -COMPLETE///////



//LESSON: STRINGS AND TEMPLATE LITERALS//
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old' + job + '!';
console.log(jonas);
//*ES6-THE KEY IS THE  `` ANYTHING CAN BE INSERTED INSIDE  ``//
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)//Much easier to replace with a variable//

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


//LESSON: TAKING DECISIONS: IF / ELSE STATEMENTS //

const age = 15;


//if- else control structor//

if (age >= 18) {
  console.log('Sarah can start driving license 🚘')
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😢`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}


console.log(century);


/////////////////////////////////Coding Challenge #2/////////////////////////////////////////
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

//TEST DATA 1//
// const massMark = 95;
// const heightMark = 1.88;
// const BMIMark = massMark / heightMark ** 2;
// console.log(BMIMark.toFixed(2))

// const massJohn = 85;
// const heightJohn = 1.76;
// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(BMIJohn.toFixed(2))

//TEST DATA 2//
const massMark = 95;
const heightMark = 1.88;
const BMIMark = massMark / heightMark ** 2;
console.log(BMIMark.toFixed(2))

const massJohn = 85;
const heightJohn = 1.76;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(massJohn / (heightJohn * heightJohn).toFixed(2))
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's BMI (${BMIJohn.toFixed(2)})!`)
} else {
  console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's BMI (${BMIMark.toFixed(2)})!`)
};

////////////////////////////CODING CHALLENGE # 2-COMPLETE////////////////////////////////////



//LESSON: TYPE CONVERSION AND COERCION//

//conversion = when we manually convert from one type to another//
//coercion = when JS converts behind the scenes automatically//

//type convserion//
const inputYear = '1991';
console.log(Number(inputYear), inputYear)//converts strings to numbers//
console.log(Number(inputYear) + 18);//will concatonate to the string (199118)//

console.log(Number('Jonas'))//returns NaN-opperations that produce a non number//
console.log(typeof NaN);

console.log(String(23), 23);//Returns string 23 in white color//

//type coercion//
console.log('I am ' + 23 + ' years old')//outputs the same '+' causes coercion//
console.log('I am ' + '23' + ' years old')
console.log('23' - '10' - 3); //returns 10( "-" triggers opposite conversion//
console.log('23' + '10' + 3)//"+" concatonates the numbers together;
console.log('23' * '2')
console.log('23' > '18')//returns a boolean-true//

let n = '1' + 1; // concatonates to return '11'//
n = n - 1; //coverts '11' to a number and subracts 1//
console.log(n) //returns 10//


//LESSON: TRUTHY AND FALSY VALUES//

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); //truthy

const money = 0;
if (money) {
  console.log("Don't spend it all 💵🤑")
} else {
  console.log("You should get a job!")
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined')
} else {
  console.log('Height is UNDEFINED')
}


//LESSON: EQUALITY OPERATORS- == VS. ===//

const age = '18';

if (age === 18) console.log("You just became an adult 🎆(strict)");
//use strict equality as default//
if (age == 18) console.log("You just became an adult 🎆(loose)");//avoid loose equality as much as you can in order to avoid bugs//

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite)

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number ! 😛")
} else if (favorite === 7) {
  console.log('7 is also a cool number')
} else if (favorite === 9) {
  console.log("9 is also a cool number")
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favorite !== 23) console.log('Why not 23?');

*/

//LESSON: LOGICICAL OPERATORS//

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive!")
// // } else {
// //   console.log('Someone else should drive...😫')
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);


// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!")
// } else {
//   console.log('Someone else should drive...😫')
// }

/////////////////////////////CODING CHALLENGE #3//////////////////

// //Data 1//
// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;

// //Data 2//
// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 123) / 3;

//Data 3//
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;

console.log(`Dolphins (${averageScoreDolphins.toFixed(2)})`);
console.log(`Koalas (${averageScoreKoalas.toFixed(2)})`);

if (averageScoreDolphins > averageScoreKoalas) {
  console.log(`Dolphins ${averageScoreDolphins.toFixed(2)} are the Champions! 🏆`)
} else if (averageScoreKoalas > averageScoreDolphins) {
  console.log(`Koalas ${averageScoreKoalas.toFixed(2)} are the Champions! 🏆`)
} else {
  console.log(`DRAW! Dolphins (${averageScoreDolphins.toFixed(2)}) & Koalas (${averageScoreKoalas.toFixed(2)}) are tied 🥈🥈`)
}



