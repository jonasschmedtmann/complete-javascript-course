var firstName = 'John';
console.log (firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job, isMarried;
job = 'Teacher';
isMarried = false;



// Variable Mutation
age = 'Twenty Eight';
job = 'driver';

alert(firstName + " is a " + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log('His last name is: ' + lastName);

//  Typeof operator
console.log(typeof lastName);


/**
 * 
 *  OPERATOR PRECEDENCE 
 * 
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

//  MULTIPLE ASSIGNMENTS
var x, y;
x = y = (3 + 5) * 4 - 6;  // 8 * 4 - 6 // 32 - 6 // 26  // Assignment starts from Right to left
//  y = 26  , then x = y (assignment = right to left)
console.log(x,y);

//  More operators 
x *= 2; //  x = x * 2; 

