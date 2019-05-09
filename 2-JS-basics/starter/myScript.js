/*******************************************
 *Variables and Data Types
 *  */
// var firstName = 'John';
// console.log(firstName);
// var lastName = 'smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// var _3years = 3;
// var johnMark = 'John and Mark';

/**************************************
 * Variable mutation and type coercion
 * 
 */

// var firstName = 'John';
// var age = 28;
// //Type Coercion below
// // console.log(firstName + ' ' + age)

// var job, isMarried;

// job = 'teacher';
// isMarried = false;

// // console.log(firstName + ' is a ' + age + ' years old' + job + '. Is he married? ' + isMarried);

// //variable mutation

// age = 'twenty eight';
// job = 'driver';
// alert(firstName + ' is a ' + age + ' years old' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/****************************************
 * Basic Operators +*-||%&& */
// var year, yearJohn, yearMark

// now = 2020;
// ageJohn =  28;
// ageMark =  33;

// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);


// // Logical Operator
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder)

// //typeOf operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

/********************************************************
 * Operator precedence
 */

// var now = 2019;
// var yearJohn = 1985;
// var fullAge = 18;
// //multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);
// //grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// //multiple assignments
// var x, y;
// x = y = (3 + 5) * 4-6;
// console.log(x, y);

// //more operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// var markMass, johnMass, marlHeight, johnHeight, markBmi, JohnBmi, markHigherBmi;

// markMass = 100;
// johnMass = 110;
// markHeight = 1.5;
// johnHeight = 2;
// markBmi = markMass / (markHeight*2);
// johnBmi = johnMass / (johnHeight*2);
// markHigherBmi = markBmi > johnBmi;
// console.log(`Is Mark's BMI higher than John's? ${markHigherBmi}. `)

/******************************************
 * If / else statements
 */

// var firstName = 'John';
// var civilStatus = 'single';

// var isMarried = true;

// if (isMarried) {
//     console.log(`${firstName} is married`)
// } else {
//     console.log(`${firstName} will hopefully marry soon :)`)
// }

// var markMass, johnMass, marlHeight, johnHeight, markBmi, JohnBmi, markHigherBmi;

// markMass = 100;
// johnMass = 110;
// markHeight = 1.5;
// johnHeight = 2;
// markBmi = markMass / (markHeight * 2);
// johnBmi = johnMass / (johnHeight * 2);

// if (markBmi > johnBmi) {
//     console.log(`Marks bmi of ${markBmi} is higher than Johns bmi of ${johnBmi}.`)
// } else {
//     console.log(`Marks bmi is lower than Johns`)
// }

/***************************************************
 * Boolean Logic
 */

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(`${firstName} is a boy`);
// } else if (age >= 13 && age < 20) {
//     console.log(`${firstName} is a teenager.`)
// } else if (age >= 20 && age < 30) {
//     console.log(`${firstName} is a young man.`)
// } else {
//     console.log(`${firstName} is a man.`);
// }

/***************************************************************
 * The ternary Operator and Switch Statements
 */
//Ternary operator
// var firstName = 'John';
// var age = 19;

// var drink = age >= 18 ? 'beer' : 'juice';
// //use of the ternary operator and object literals
// age >= 18 ? console.log(`${firstName} drinks ${drink}.`) : console.log(`${firstName} drinks ${drink}.`);

// //Switch Statement

// var job = 'guide';
// switch (job) {
//     case 'teacher':
//         console.log(`${firstName} teaches kids how to code`);
//         break;
//     case 'driver':
//         console.log(`${firstName} drives and uber in Lisbon`)
//         break;
//     case 'designer':
//         console.log(`${firstName} designs beautiful websites`)
//         break;
//     default:
//         console.log(`${firstName} does something else`)
// }
/********************************************************
 * turn into a switch statement
 */
// if (age < 13) {
//     console.log(`${firstName} is a boy`);
// } else if (age >= 13 && age < 20) {
//     console.log(`${firstName} is a teenager.`)
// } else if (age >= 20 && age < 30) {
//     console.log(`${firstName} is a young man.`)
// } else {
//     console.log(`${firstName} is a man.`);
// }
//  age = 30
// switch(true) {
//     case age < 13:
//     console.log(`${firstName} is a boy.`)
//     break;
//     case age > 13 && age < 20:
//     console.log(`${firstName} is a teenager.`)
//     break;
//     case age >= 20 && age < 30:
//     console.log(`${firstName} is a young man.`)
//     break;
//     default:
//     console.log(`${firstName} is an man.`)

// }

/*******************************
 * truth and falsy values and equality operators
 * falsy values: undefined, null, 0, NaN, '' empty string
 * truthy values: NOT falsy values
 */

//  var height;
// height = 23;
//  if (height || height === 0) {
//      console.log('Variable is defined');
//  } else {
//      console.log('Variable has Not been defined.');
//  }
// //equality operators
//  if ( height == '23') {
//      console.log( 'The == opertor does type coercion!')
//  }

/*****************************************************************
 * Coding Challenge 2
 */

 let teamJohnAverage, teamMikeAverage, teamMaryAverage, ;
 
 teamJohnAverage = (80 + 120 + 103) / 3; 
 teamMikeAverage = (116 + 94 + 123) / 3;
 teamMaryAverage = (97+ 134 + 105) / 3;
 
 if (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) {
     console.log(`John's team wins with a team average of ${teamJohnAverage}`)
 } else if (teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage) {
     console.log(`Mike's team wins with an average team score of ${teamMikeAverage}`)
 } else if (teamJohnAverage === teamMikeAverage){

 } else  {
     console.log(`Mary's team wins with an average team score of ${teamMaryAverage}`)
 } 
























