//LECTURE: Values and Variables
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);



//LECTURE: Data Types

let num, str, bool;
num = 14;
str = 'Hello!';
bool = false;

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);


// LECTURE: let, const and var
let year = 2021; //block scope
const birthYear = 1988; //this variable cant change
var name = 'Dima'; //function scope -NEVER USE THAT
surname = 'Kolontsov'; //global scpe - NEVER USE THAT


// Operator Precedence
// GOOGLE_IT: MDN Operator precedance
let x, y, z, i;

x = y = 25 - 10 - 5;
console.log(x, y);


//LECTURE: 17. Strings and Template Literals
const myName = 'Dima';
const birthYear = 1988;
const now = 2021;
const prof = 'IT Manager';

//standart way
let info = 'Hi! ' + 'I am ' + myName + ' and I am ' + (now - birthYear) + ' years old. I am working as an ' + prof + '!';
console.log(info);

//ES6
info = `Hi! I am ${myName} and I am ${now - birthYear} years old. I am working as an ${prof}!`;
console.log(info);

//multiline strings
//standart way
info = 'First line,\n\
second line,\n\
third line.';
console.log(info);

//ES6
info = `First line,
second line,
third line.`;
console.log(info);


//18. Taking Decisions: if / else Statements
const age = 14;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start driving licence 🚗`);
}


if (age >= 18) {
    console.log(`Sarah can start driving licence 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years!`);
}
*/

// type conversion - manual convert things
// const inputYear = '1991';
// console.log(Number(inputYear) + 18); // 2009
// console.log(inputYear + 18); // 199118
// console.log(Number('Dima')); // NaN
// console.log(typeof NaN); // number

// // type coercion - javascript convert thing automatically
// console.log('I am ' + 23 + ' years old!');
// console.log('23' + '10' + 3); //23103
// console.log('23' - '10' - 3); //10
// console.log('20' / '10'); //2
// console.log('20' * '10'); //200
// console.log('20' > '10'); //true

//21. Truthy and Falsy Values
// 5 faulthy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)) //false;
// console.log(Boolean('')) //false;
// console.log(Boolean(undefined)) //false;
// console.log(Boolean(null)) //false;
// console.log(Boolean(NaN)) //false;
// // truthy values any number > 0 and any not null string or object
// console.log(Boolean(23)) //true
// console.log(Boolean('Dima')) //true

// // boolean coercion
// const money = 100;
// if (money) {
//     console.log(`Don't spend it all!`);
// } else {
//     console.log(`You should get a job!`);
// }

// let height;
// if (height) {
//     console.log(`YAY! Height is defined!`);
// } else {
//     console.log(`Height is undefined!`);
// }


//24. Logical Operators
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasGoodVision && hasDriversLicense) {
// //     console.log(`Sarah is able to drive!`)
// // } else {
// //     console.log(`Someone else should drive...`)
// // }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasGoodVision && hasDriversLicense && !isTired) {
//     console.log(`Sarah is able to drive!`)
// } else {
//     console.log(`Someone else should drive...`)
// }


// 26. The switch Statement
// const day = `monday`;

// switch (day) {
//     case `monday`:
//         console.log(`Go to meetup!`);
//         break;
//     case `tuesday`:
//         console.log(`Prepare theory videos!`);
//         break;
//     case `wednesday`:
//     case `thursday`:
//         console.log('Record videos!');
//         break;
//     case `saturday`:
//     case `sunday`:
//         console.log(`Enjoy th weekend!`);
//         break;
//     default:
//         console.log(`Not a valid weekday!`);
// }


//27. The Conditional (Ternary) Operator
// const age = 15;
// age >= 18 ? console.log(`You are permitted to drive a car!`) : console.log(`You are not permitted to drive a car!`);

// const canDriveCar = age >= 18 ? `permitted` : `not permitted`;
// console.log(`You are ${canDriveCar} to drive a car!`);

// console.log(`You are ${age >= 18 ? `permitted` : `not permitted`} to drive a car!`);

