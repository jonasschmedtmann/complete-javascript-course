/*
///////////////////////////////////////////
// Values and Variables
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// Value is a piece of data

console.log('Jacob');
console.log(23);

// Declaring a variable firstName, Work like a box which we put the value of Jacob in. If want to access the value we need to use the var name.
let firstName = "Jacob";
// Calling the variable firstName
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Conventions and rules to naming variables - camelCase.
// If its a constant write it in uppercase (it wont change)
// Be descriptive when naming variables
let PI = 3.14;
let myFirstJob = 'Programmer';
console.log(myFirstJob);

///////////////////////////////////////////
// Data Types

// We decalre a new variable using the let key word
let jsIsFun = true;
console.log(jsIsFun);

// typeof shows the type of value
console.log(typeof jsIsFun); // boolean
// console.log(typeof 12); // number
// console.log(typeof 'test'); // string

// When re assigning a variable we don't use let
jsIsFun = 'YES!';
console.log(typeof jsIsFun); // string

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// let, const and var lecture

// let can be mutated, changed at a later date. (block scoped)
let age = 30;
age = 31

// consts creates a variable that cannot be mutated
const birthyear = 1991;
// birthyear = 1990;

// Var and let are pretty different, this is the old way of declaring a variable. (function scoped)
var job = 'programmer';
job = 'teacher';

// We dont need to declare the variable (pretty terrible idea JS creates a property on the global object)
lastName = 'Cornwell';
console.log(lastName);


///////////////////////////////////////////
// Basic operators

// Math operators
const now = 2037;
const ageJacob = now - 1996; // 42
const ageSarah = now - 2020; // 17
console.log(ageJacob, ageSarah);

// 2 ** 3 means 2^3 or 2x2x2
console.log(ageJacob * 2, ageJacob / 10, 2 ** 3);

// we can use the + operator to concatenate two strings or more
const firstName = 'Jacob';
const lastName = 'Cornwell';
console.log(firstName + ' ' + lastName);

// assignment opperators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x - x - 1 = 99
console.log(x);

// Comparision operators
console.log(ageJacob > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJacob = now - 1996;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// left to right
// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

// user () parenthesis to be computed first
const averageAge = (ageJacob + ageSarah) / 2;
console.log(ageJacob, ageSarah, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHeigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHeigherBMI);

////////////////////////////////////
// Strings and Template literals

const firstName = 'Jacob';
const job = 'techer';
const birthYear = 1996;
const year = 2037;

const jacob = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jacob);

// Template literal use `` rather than "" ES6
const jacobNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jacobNew);

console.log(`Just a regular string...`);

// We can use use \n\ for a new line
console.log('String with \n\
multiple \n\
lines');

// If we need a multiline string use template literal ``
console.log(`string
multiple
lines`);


////////////////////////////////////
// Taking decisions: if else statements

const age = 15;

// If else statement control structure - Adds decision withing () to execute program based on certain conditions (does not run linerally)
if (age >= 18) {
    console.log('Sarah can start driving lessons ');
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearLeft} years`);
}

// Variables inside a coding block are not accessible outside a coding block. Defire Century outside of the block
const birthYear = 1996;

// Conditionally reassign century inside the block
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀


// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Marks BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Marks ${markBMI}!`);
}



////////////////////////////////////
// Type Conversion and Coercion

// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // Returns the string as a number, second is a string
console.log(inputYear + 18); //199118
console.log(Number(inputYear) + 18); //199118

console.log(Number('Jacob')); // NaN - Not a Number - whenever a operation is not a number
console.log(typeof NaN); // Invalid number

console.log(String(23), 23); // Use the string function to convert a num to a string

// Type coercion
// Converts number to strings
console.log('I am ' + 23 + ' Years old');
// Converts strings to numbers - operator triggers opposite conversion
console.log('23' - '10' - 3);
// Converts numbers to strings + operator triggers opposite conversion
console.log('23' + '10' + 3);
// Converts strings to numbers * and /
console.log('23' * 2);
// Converts strings to number
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1; // converts '11' to 11 - 1
console.log(n); // 10


////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undeifined, null, NaN\

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jacob')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 10;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height >= 0) {
    console.log(`YAY height is defined`);
} else {
    console.log(`height is undefined`);
}


////////////////////////////////////
// Equality operators: == vs ===

const age = '18';
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

// Throws a promt screen to enter a value
const favourite = Number(prompt('Whats your favourite number?'));
// Throws a string
console.log(typeof favourite, favourite);

if (favourite === 23) { // 23 === 23
    console.log('cool 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('why not 23?');


////////////////////////////////////
// Logical Operators

const hasDriverslicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverslicense && hasGoodVision);
console.log(hasDriverslicense || hasGoodVision);
console.log(!hasDriverslicense);

// if (hasDriverslicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false; // C
console.log(hasDriverslicense && hasGoodVision && isTired);

if (hasDriverslicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
}



////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// Task 1
// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// const dolphinAvgScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// console.log(`Dolphins average score: ${dolphinAvgScore}`);

// const koalasAvgScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(`Koalas average score: ${koalasAvgScore}`);

// if (dolphinAvgScore > koalasAvgScore) {
//     console.log('Dolphins WIN!');
// } else if (koalasAvgScore > dolphinAvgScore) {
//     console.log('Koalas WIN!');
// } else if (dolphinAvgScore === koalasAvgScore) {
//     console.log('We have a draw..');
// }


// Bonus 1
// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;

// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;

// const dolphinAvgScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// console.log(`Dolphins average score: ${dolphinAvgScore}`);

// const koalasAvgScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(`Koalas average score: ${koalasAvgScore}`);

// // Checks whether avg score greater than 100 and averager is greater than other team
// if (dolphinAvgScore >= 100 && dolphinAvgScore > koalasAvgScore) {
//     console.log('Dolphins WIN!');
// } else if (koalasAvgScore >= 100 && koalasAvgScore > dolphinAvgScore) {
//     console.log('Koalas WIN!');
// } else if (dolphinAvgScore === koalasAvgScore) {
//     console.log('We have a draw..');
// } else {
//     console.log('Neither team scored over 100 points AND had a better average.')
// }

// Bonus 2
// const dolphinScore1 = 101;
// const dolphinScore2 = 99;
// const dolphinScore3 = 99;

// const koalasScore1 = 99;
// const koalasScore2 = 99;
// const koalasScore3 = 99;

// const dolphinAvgScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// console.log(`Dolphins average score: ${dolphinAvgScore}`);

// const koalasAvgScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
// console.log(`Koalas average score: ${koalasAvgScore}`);

// // Checks whether avg score greater than 100 and averager is greater than other team
// if (dolphinAvgScore >= 100 && dolphinAvgScore > koalasAvgScore) {
//     console.log('Dolphins WIN!');
// } else if (koalasAvgScore >= 100 && koalasAvgScore > dolphinAvgScore) {
//     console.log('Koalas WIN!');
//     // Checks whether scores are equal and both team avg score is greater than or eqaul to 100
// } else if (dolphinAvgScore === koalasAvgScore && dolphinAvgScore >= 100 && koalasAvgScore >= 100) {
//     console.log('We have a draw. Both teams scored the same amount, both teams also scored over 100 avg points.');
// } else {
//     console.log('Neither team scored over 100 points AND had a better average.')
// }

////////////////////////////////////
// Switch statements

/*
const day = 'saturday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; // without the break the code keeps executing
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!')
}

////////////////////////////////////
// The condinitoal ternary operator

const age = 11;
// age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water!');

// you can define it conditionally. also you can access variables as its not inside a block
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// Variable not available outside of the block
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

// You can use an expression it in a template literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);

*/