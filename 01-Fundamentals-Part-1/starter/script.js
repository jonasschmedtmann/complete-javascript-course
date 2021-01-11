
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
*/

//LESSON: TAKING DECISIONS: IF / ELSE STATEMENTS //


