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

//  let teamJohnAverage, teamMikeAverage, teamMaryAverage;

//  teamJohnAverage = (100 + 100 + 100) / 3; 
//  teamMikeAverage = (100 + 100 + 100) / 3;
//  teamMaryAverage = (100+ 100 + 100) / 3;

//  if (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) {
//      console.log(`John's team wins with a team average of ${teamJohnAverage}`)
//  } else if (teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage) {
//      console.log(`Mike's team wins with an average team score of ${teamMikeAverage}`)
//  } else if (teamJohnAverage === teamMikeAverage && teamJohnAverage === teamMaryAverage){
//     console.log('We have a tie')
//  } else  {
//      console.log(`Mary's team wins with an average team score of ${teamMaryAverage}`)
//  } 

/**************************************************************
 * Functions
 */

//  function calculateAge(birthYear) {
//      return 2019 - birthYear;
//  }

//  var ageJohn = calculateAge(1985);
//  var ageMike = calculateAge(1948);
//  var ageJane = calculateAge(1969);
// console.log(ageJohn)
// console.log(ageMike)
// console.log(ageJane)

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0){

//     }
//     console.log(`${firstName} retires in ${retirement} years`);
// }

// yearsUntilRetirement(1985, 'Jared');
// yearsUntilRetirement(1995, 'John');
// yearsUntilRetirement(1975, 'Mary');


/*****************************************************************************
 * Function Statements and Expressions
 */

//function declaration looks like this *** function whatDoYouDo(job, firstName){} there is no equality operator****

//function expressions
//set a function equal to a variable

//  var whatDoYouDo = function(job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return `${firstName} teaches kids how to code.`
//         case 'driver':
//             return `${firstName} drives a cab in Lisbon.`
//         case 'designer':
//             return `${firstName} designs beautiful websites.`
//         default:
//             return `${firstName} does something else.`
//     }
//  }

//  console.log(whatDoYouDo('teacher', 'Jared'))


/********************************************************
 * ARRAYS
 * 
 */

//  //intialize new array
//  var names = ['John', 'Mark', 'Jane'];
//  var years = [1990, 1969, 1948];
// //mutate array data
// console.log(names.length);
// console.log(names[names.length -1]);
// names[names.length] = 'Mary';


// console.log(names);

// //different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue');
// john.unshift('Mr.');



// console.log(john)

// john.pop();
// john.pop();
// john.shift()
// console.log(john)

// //used to test if an element is in an array
// //if an element is in the array. It will return the position of that element.
// console.log(john.indexOf(1990))
// //If the element being queried is not in the array then it will return a -1
// console.log(john.indexOf(98))

// // using the ternary operator to test if an element is in the array. Returns true if it is not in the array and returns not a designer
// //or if it is in the array returns false and the else reeturns that john is a designer
// let isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

// console.log(isDesigner)

/**********************************************************************************
 * Coding challenge 2
 */

//  let tipCalculator = (bill) => {
//     if(bill < 50){
//         tip = .2
//     }   else if (bill > 50 && bill < 200){
//         tip = .15
//     } else {
//         tip = .1
//     }
//     return tip * bill;
// }
// //Take the totals and use the tipcalculator on them and push the value into the array
// let bills = [124, 48, 268]

// let arrayOfTips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
//  let arrayOfTotals = [bills[0] + arrayOfTips[0], bills[1] + arrayOfTips[1], bills[2] + arrayOfTips[2]];



// console.log(tipCalculator(100))
// console.log(arrayOfTips)
// console.log(arrayOfTotals)

/*******************************************************8
 * Objects and properties
 * Key Value Pairs
 */

//Object literal
//  var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
//  };

//  console.log(john.firstName);
//  console.log(john['firstName']);
// var x = 'birthYear';
// console.log(john[x])

// john.job = 'designer';
// john['isMarried'] = true;

// console.log(john);

// //New Object Syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = '1969';
// jane['lastName'] = 'Smith';
// console.log(jane)

/*******************************************************
 * Objects and methods
 * When a function is used on an object is called a Method
 */

// var john = {
//         firstName: 'John',
//         lastName: 'Smith',
//         birthYear: 1985,
//         family: ['Jane', 'Mark', 'Bob', 'Emily'],
//         job: 'teacher',
//         isMarried: false,
//         calcAge: function(birthYear) { //this is a method
//             this.age = 2019 - this.birthYear;   // a function inside an object is a ***METHOD***
//         } //used **this** keyword to access the object john and then dot notation to access the value from the key.
//      };
// //Calling Method in john Object
// john.calcAge();

// console.log(john)

/***********************************************************************
 *Coding Challenge 4 
 *
 */

// 

/**************************************************************88
 * Loops and iteration
 */
//For loops
//  for (let i = 0; i < 20; i++){
//      console.log(i);
//  }

// var john = ['John', 'Smith', 1990, 'designer', false];
// //for loop
// for (let i = 0; i < john.length; i++) {
//     console.log(john[i])
// }
// // while loop
// let i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++
// }

//continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false];

// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i])
// }

// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break; 
//     console.log(john[i])
// }

//looping backward

// for (let i = john.length -1; i >= 0; i--) {
//     console.log(john[i])
// }

// for (let i = john.length -1; i >=0; i--){
//     console.log(john[i])
// }

/************************************************************888
 * 
challenge 5
 * 
 */

// var john = {
//     bills: [124, 48, 268, 180, 42],
//     tipCalc: function () {
//         this.tips = [];
//         this.finalValues = [];
//         for (let i = 0; i < this.bills.length; i++) {


//             let percentage;
//             let bill = this.bills[i];

//             if (bill < 50) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }

//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }

//     }

// }

// john.tipCalc();
// console.log(john)

var john = {
//     bills: [124, 48, 268, 180, 42],
//     tipCalc: function () {
//         this.tips = [];
//         this.finalValues = [];
//         for (let i = 0; i < this.bills.length; i++) {


//             let percentage;
//             let bill = this.bills[i];

//             if (bill < 50) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }

//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }

//     }

// }

// john.tipCalc();
// console.log(john)