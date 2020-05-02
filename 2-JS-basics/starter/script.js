/********************************
* Varibles and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 30;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';

// Variable naming rules

var $3years = 3;
var function = 34;
*/

/********************************
* Varible mutation and type coercion
*/
/*
var firstName = 'John';
var age = 30;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he marries? ' + isMarried);

// Variable mutation
age = 'thirty';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he marries? ' + isMarried);

var lastName = prompt('What is his last name');
console.log(lastName);
*/

/****************************************
 * Basic Operators
 */
/*
var currentYear, yearJohn, yearMark, ageJohn, ageMark;
currentYear = 2020;
ageJohn = 30;
ageMark = 35;

// Math operators
yearJohn = currentYear - 30;
yearMark = currentYear - 35;
console.log(yearJohn);

console.log(currentYear + 2);
console.log(currentYear /12 );
console.log(currentYear * 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operatos
console.log(typeof johnOlder);
console.log(typeof ageMark);

var x;
console.log(typeof x);
*/

/****************************************
 * Operator Precedence
 */

/*
var currentYear = 2020;
var yearMarie = 1987;
var fullAge = 18;

// Multiple operators
var isFullAge = currentYear - yearMarie >= fullAge; // true
console.log(isFullAge);


// Grouping
var ageMarie = currentYear - yearMarie;
var ageVlad = 34;
var average = (ageMarie + ageVlad) / 2;
console.log(average);

// Multiple assignmens
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x = x + 2;
x += 2;
console.log(x);

x *= 10;
console.log(x);

x = x + 1;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

*/

/****************************************
 * CHALLENGE
 */
/*
 var massMarie, massVlad, heightMarie, heightVlad, bmiMarie, bmiVlad, bmiIsHigher;

massMarie = 63.5;
heightMarie = 1.72;
bmiMarie = massMarie / (heightMarie * heightMarie);
console.log(bmiMarie);

massVlad = 75;
heightVlad = 1.84;
bmiVlad = massVlad / (heightVlad * heightVlad);
console.log(bmiVlad);
bmiIsHigher = bmiVlad > bmiMarie;

console.log('Is Vlad\'s BMI higher than Marie\'s? ' + bmiIsHigher);

*/
/****************************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var massMarie, massVlad, heightMarie, heightVlad, bmiMarie, bmiVlad, bmiIsHigher;

massMarie = 63.5;
heightMarie = 1.72;
bmiMarie = massMarie / (heightMarie * heightMarie);
console.log(bmiMarie);

massVlad = 75;
heightVlad = 1.84;
bmiVlad = massVlad / (heightVlad * heightVlad);
console.log(bmiVlad);

if (bmiVlad > bmiMarie) {
    console.log('Vlad\'s BMI is higher than Marie\'s.');
} else {
    console.log('Vlad\'s BMI is lower than Marie\'s.');
}
*/


/****************************************
* Boolean logic
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}
*/

/****************************************
* The Ternary Operator and Switch Statements
*/

// var firstName = 'Marie';
// var age = 32;

/****************************************
* The Ternary Operator
*/

/* age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/* if (age >= 18) {
    var drink = 'beer';

} else {
    var drink = 'juice';
}
*/

/****************************************
* Switch Statements
*/
/*
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor': 
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver': 
        console.log(firstName + ' drives Uber in Lisbon.');
        break;
    case 'designer': 
        console.log(firstName + ' designs beautiful websites.');
        break;
    default: 
        console.log(firstName + ' does something else.');
}

var firstName = 'John';
var age = 10;
switch (true) {
    case age < 13:
    console.log(firstName + ' is a boy.');
    break;
    case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
    case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
    default:
    console.log(firstName + ' is a man.');
}
*/

/****************************************
* Truthy and Falsy values and equality operators
*/

// falsy values: underfined, null, 0, '', NaN
// truthy: NOT falsy values
/*
var height;

height = 23;
if(height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined')
}

console.log(height);

// Equality operators

if (height === '23') {
    console.log('The == operator does type coercion');
}
*/
/****************************************
* CHALLENGE 2
*/
/*
var johnTeamScore1 = 89;
var johnTeamScore2 = 120;
var johnTeamScore3 = 103;

var markTeamScore1 = 103;
var markTeamScore2 = 89;
var markTeamScore3 = 120;

var maryTeamScore1 = 73;
var maryTeamScore2 = 134;
var maryTeamScore3 = 105;

var johnTeamTotalScore = johnTeamScore1 + johnTeamScore2 +johnTeamScore3;
var markTeamTotalScore = markTeamScore1 + markTeamScore2 + markTeamScore3;
var maryTeamTotalScore = maryTeamScore1 + maryTeamScore2 + maryTeamScore3;

var johnTeamAverage = johnTeamTotalScore / 3;
console.log(johnTeamAverage);

var markTeamAverage = markTeamTotalScore / 3;
console.log(markTeamAverage);

var maryTeamAverage = maryTeamTotalScore / 3;
console.log(maryTeamAverage);

if (johnTeamAverage > markTeamAverage && johnTeamAverage > maryTeamAverage) {
    console.log('Winner is John\'s Team. Average score is ' + johnTeamAverage);
} else if (maryTeamAverage > markTeamAverage && maryTeamAverage > johnTeamAverage) {
    console.log('Winner is Mary\'s Team. Average score is ' + maryTeamAverage);
} else if (markTeamAverage > johnTeamAverage && markTeamAverage > maryTeamAverage) {
    console.log('Winner is Mark\'s Team. Average score is ' + markTeamAverage);
}
else {
    console.log('It\'s a draw .');
}
*/

/****************************************
* Functions
*/

function calculateAge(birthYear) {
    return 2020 - birthYear;
} 
 var ageMarie = calculateAge(1987);
var ageMike = calculateAge(1947);
var ageJane = calculateAge(1968);

console.log(ageMarie, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 72 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1987, 'Marie');
yearsUntilRetirement(1986, 'Vlad');
yearsUntilRetirement(1925, 'Rusty');