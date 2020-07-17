/******************
 * Variables and data types
 */
// console.log("Hello world from script.js file");

// const { Console } = require("console");

// var firstName = 'Zack';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 68;
// var isMarried = true;
// var lovesVideoGames = undefined;

/******************
 * Variable mutation and type coercion
 */
// var firstName = "Zack";
// var lastName = "Smith";
// var age = 68;
// var isMarried = true;
// var lovesVideoGames = undefined;
// var job, isAwesome;
// job = "developer";
// isAwesome = true;

// // JavaScript uses type-coercion to automatically allow us
// // to join variables containing different data-types together
// // as strings
// console.log(
//   firstName +
//     " " +
//     lastName +
//     " is " +
//     age +
//     " and it is " +
//     isMarried +
//     " that he is married. " +
//     "But, it is " +
//     lovesVideoGames +
//     " whether he likes video games."
// );

// console.log(
//   `${firstName} ${lastName} is ${age} and it is ${isMarried} that he is married. But, it is ${lovesVideoGames} whether he likes video games or not. He is a ${job} and it is ${isAwesome} that he is awesome.`
// );

// // Variable Mutation
// age = 20;
// job = 'driver'

// alert(`${firstName} is ${age} and it is ${isMarried} that he is married. But, it is ${lovesVideoGames} whether he likes video games or not. He is a ${job} and it is ${isAwesome} that he is awesome.`)

// var lastName = prompt(`What is ${firstName}'s lastname?`);
// console.log(`${firstName} ${lastName}`);

/******************
 * Basic Operators
 */

// var year, yearRandom, yearRandom2;
// year = 2020;
// yearRandom = year - 1600;
// yearRandom2 = year - 1800;

// console.log(yearRandom);
// console.log(yearRandom + 2);

// // Logical operators
// var laterDate = yearRandom > yearRandom2;
// console.log(laterDate);

// // typeof operator
// console.log(typeof laterDate);
// console.log(typeof year);

/******************
 * Operator Precedence
 */

// var now, yearJohn, fullAge;
// now = 2020;
// yearJohn = 1989;
// fullAge = 18;

// // Multiple Operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(`The average age of John and Mark is ${average}`);

// // Multiple Assignments
// // both x and y = (3 + 5) * 4 - 6
// // which means both x and y = 26
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x);

// // More operators
// // what if we want to double something
// x *= 2; // this means x = x * 2
// x += 10; // means x = x + 10
// x -= 10; // means x = x - 10
// x++; // means x = x + 1
// x--; // means x = x - 1

/******************
 * Coding Challenge 1
 */
// var johnHeight, johnMass, markHeight, markMass;
// //  John
// johnHeight = 1.8; // meters
// johnMass = 80; // kg
// //  Mark
// markHeight = 1.7; // meters
// markMass = 76; // kg

// var johnBMI, markBMI;
// // John BMI
// johnBMI = johnMass / (johnHeight * johnHeight);
// // Mark BMI
// markBMI = markMass / (markHeight * markHeight);

// // Boolean Value Below
// // Does Mark have higher BMI
// // than John?
// var markHigherBMI = markBMI > johnBMI;

// // Console.log of Boolean
// // value, displays true
// console.log(`Does Mark have a higher BMI than John? ${markHigherBMI}`);
// // do this (above) but with an if /else statement
// if (markBMI > johnBMI){
//     console.log(`Mark has a higher BMI than John.`)
// } else {
//     console.log(`John has a higher BMI than Mark.`)
// }

/******************
 * If / else Statements
 */

//  var firstName, civilStatus;
// firstName = 'John';
// civilStatus = 'single';

// if (civilStatus === 'married'){
//     console.log(`${firstName} is married`);
// } else {
//     console.log(`${firstName} is ${civilStatus}`)
// }

/******************
 * Boolean Logic
 */
// var firstName, age, gender;
// firstName = "John";
// age = 19;
// gender = "male";

// if (age < 13) {
//   console.log(`${firstName} is a ${gender} child who is ${age} years old.`);
// } else if (age >= 13 && age < 20) {
//   console.log(`${firstName} is a ${gender} teenager who is ${age} years old.`);
// } else {
//   console.log(`${firstName} is a ${gender} adult who is ${age} years old.`);
// }

/******************
 * The Ternary (Conditional)
 * Operator and Switch Statements
 */

// var firstName, age;
// firstName = "John";
// age = 16;

// // Example (Ternary)
// age >= 21
//   ? console.log(`${firstName} can drink beer.`)
//   : console.log(`${firstName} can't drink beer.`);

// // Example assigned to variable (Ternary)
// var drink = age >= 21 ? `beer` : `juice`;
// console.log(drink);

// // Example (Switch)
// var job;
// job = "teacher";
// switch (job) {
//   case "teacher":
//     console.log(`${firstName} teaches kids how to code.`);
//     break;
//   case "driver":
//     console.log(`${firstName} is a driver! Vroom vroom.`);
//     break;
//   case "skateboarder":
//     console.log(`${firstName} shreds on a skateboard.`);
//     break;
//   default:
//     console.log(`${firstName} does something entirely different.`);
// }

// // Using the If/Else from Boolean Logic
// // Lesson, convert it to a Switch Statement
var firstName, age, gender;
firstName = "John";
age = 19;
gender = "male";

switch (true) {
  case age < 13:
    console.log(`${firstName} is a ${gender} child who is ${age} years old.`);
    break;
  case age >= 13 && age < 20:
    console.log(
      `${firstName} is a ${gender} teenager who is ${age} years old.`
    );
    break;
  default:
    console.log(`${firstName} is a ${gender} adult who is ${age} years old.`);
}

/******************
 * The Ternary (Conditional)
 * Operator and Switch Statements
 */

//  var height; // if we don't add a value to height (or add a falsey value),
//  // we will get the else statement, we should set || height = 0 so that won't be
//  // an undefined falsey value
//  height = 0;
//  if (height || height === 0) {
//      console.log('Variable is defined');
//  } else {
//      console.log('Variable has NOT been defined')
//  }

/******************
 * Coding Challenge 2
 */
// var averageScoreJohn, averageScoreMike, averageScoreMary;

// averageScoreJohn = (89 + 120 + 103) / 3;
// averageScoreMike = (116 + 94 + 123) / 3;
// averageScoreMary = (97 + 134 + 105) / 3;

// switch (true) {
//   case averageScoreJohn > averageScoreMike &&
//     averageScoreJohn > averageScoreMary:
//     console.log(`John has the highest PPG average, with ${averageScoreJohn}.`);
//     break;
//   case averageScoreMike > averageScoreJohn &&
//     averageScoreMike > averageScoreMary:
//     console.log(`Mike has the highest PPG average, with ${averageScoreMike}.`);
//     break;
//   case averageScoreMary > averageScoreJohn &&
//     averageScoreMary > averageScoreMike:
//     console.log(`Mary has the highest PPG average, with ${averageScoreMary}.`);
//     break;
//   default:
//     console.log(`There is a Draw.`);
// }

/******************
 * Functions
 */

//  Below this lecture is function statements
// var yearBorn;
// yearBorn = 1962;

// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }

// // function declaration/statement
// var agePerson = calculateAge(yearBorn);
// console.log(agePerson); // 58

// var ageX = calculateAge(1990); // 30
// var ageY = calculateAge(1892); // 128
// console.log(ageX, ageY);

// // function declaration/statement
// function tillRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years.");
//   } else {
//     console.log(firstName + " is retired.");
//   }
// }

// tillRetirement(1990, "Jimmy");

/******************
 * Function Statements
 * and Expressions
 */

//  Below is function expression
var whatJob = function (job, firstName) {
  switch (job) {
    case "teacher":
      return `${firstName} teaches kids to code.`;
    case "driver":
      return `${firstName} drives Uber.`;
    case "designer":
      return `${firstName} designs websites.`;
    default:
      return `${firstName} does unknown work. Maybe they are a spy.`;
  }
};
console.log(whatJob("", "John"));
