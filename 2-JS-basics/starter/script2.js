// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Jones';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job = 'dishwasher';
// console.log(job);

// var years = 3;

/*****
 *Variable mutation
 */
// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;
// age = 'twenty eight';

// console.log(firstName + 'is a ' + age + ' year old ' + job + '. is he Married?' + isMarried);

// age = 'twenty nine';
// job = 'driver';

// alert(firstName + 'is a ' + age + 'year old ' + job + '.is married? ' + isMarried);

// var lastName = prompt('what is his last name?');
// console.log(firstName + ' ' + lastName);

/*****
 *operators
 */

//  var yearJohn, year, yearMark
// now = 2019;
// ageJohn = now - 28;
//  ageMark = now - 33;

//  console.log(yearJohn);

//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);

//  var johnOlder = ageJohn < ageMark;
//  console.log(johnOlder);

/*****
 *precedent
 */

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

//  var isFullAge = now - yearJohn >= fullAge;
//  console.log(isFullAge);

/***QUIZ */
// var markHeight = 20;
// var johnHeight = 21;
// var markMass = 105;
// var johnMass = 123;

// var JBMI = 123 / (21 * 21);
// var MBMI = 105 / (20 * 20);
// console.log(JBMI);
// console.log(MBMI);

// markHigherBMI = false;


// console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

/***terinary */

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + 'drinks beer.')
: console.log(firstName + 'drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log (drink);