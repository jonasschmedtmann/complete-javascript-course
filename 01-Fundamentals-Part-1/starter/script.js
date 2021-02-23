/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear - 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // You are making a statement and console.log returns the answer true or false. Also can use <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x  = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// Coding Challenge 1
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);


const firstName = 'jonas'
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Coding Challenge 2
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}


// type conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN, everything else is a truthy value.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('Yay! Height is defined')
} else {
    console.log('Height is UNDEFINED');
}

const age = `18`;
if (age === 18) console.log(`You just became and adult :D (strict)`);

if (age == 18) console.log(`You just became and adult :D (loose)`);

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 22) { //22 === 23 -> FALSE
    console.log(`Cool! 22 is an amazing number!`);
} else if (favorite === 7) {
    console.log(`7 is also a cool number`)
} else if (favorite === 9) {
    console.log(`9 is also a cool number`)
} else {
    console.log(`Number is not 23 or 7`);
}

if (favorite !== 23) console.log(`Why not 22?`);


const hasDriversLicense = true; // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasGoodVision && hasGoodVision) {
//     console.log(`Sarah is able to drive!`)
// } else {
//     console.log(`Someone else should drive...`);
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasGoodVision && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`)
} else {
    console.log(`Someone else should drive...`);
}

// Coding Challenge 3
const dolphinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 106) / 3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`Dolphins win!`)
} else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
    console.log(`It's a draw!`)
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
    console.log(`Koalas win!`)
} else {
    console.log(`Both teams suck!`)
}


const day = `friday`;

switch (day) {
    case `monday`: // day === `monday`
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
        console.log(`Enjoy the weekend :D`);
        break;
    default:
        console.log(`Not a valid day!`);
}


if (day === `monday`) {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === `tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write code examples`);
} else if (day === `friday`) {
    console.log(`Record videos`);
} else if (day === `saturday`) {
    console.log(`Enjoy the weekend :D`);
} else {
    console.log(`Not a valid day!`)
}


3 - 4
1991
true && false && !false

if (23 > 10) {
    const str = `23 is bigger`;
}

const me = `Soren`;
console.log(`I'm ${2037 - 1991} years old ${me}`);


const age = 15;
// age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);


const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`);
*/