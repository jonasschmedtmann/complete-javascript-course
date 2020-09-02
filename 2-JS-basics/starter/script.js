/*
// console.log("Hello World! (from imported module)");

// var is depreciated; use const or let (ES6), also ";" not needed
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;
console.log(typeof age); // number

var fullAge = true;

// create variable without assigning a value (defaults to 'undefined')
var job; // currently undefined
console.log(job);

// assigning a value to an existing variable
job = "Teacher";
console.log(job);

// let's break some rules
// var 3years = 3; // cannot start the name of variable with number
// var john/mark = 'John and Mark'; cannot have a forbidden character inside a variable
// var function = 23; function is a reserved keyword

// Type coercion

var firstName = "John";
var age = 28;

// converts age (number) to string. will also convert boolean and undefined to string
console.log(firstName + " " + age);

// creating multiple variables
var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " is " + age + " year old " + job + ". Is he married? " + isMarried);

// Variable mutation
age = "twenty eight";
job = "driver";

// pop-up message in browser
alert(firstName + " is " + age + " year old " + job);

// pop-up user input in browser with input saved to variable
var lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName);



// Basic operators

// var yearJohn = 2018 - 28;

var year, yearJohn, yearMark;
now = 2020;
yearJohn = now - 28;
yearMark = now - 33;

// Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
// need to wrap in () because / has precedence over +
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
// with an assignment (=), js reads variable right-to-left so y is defined before x
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators

// x = x * 2;
// same thing as above
x *= 2;
x += 10;

// increment
x += 1;
// increment by 1
x++;
//decrement by 1
x--;

* CODING CHALLENGE 1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// BMI = mass / height^2

// store Mark's mass & height
// store John's mass & height

// units for mass (kg) and height (m)

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 80; // kg
var heightJohn = 1.6; // meters

// ** operator is from ES2016

// var markBMI = massMark / heightMark ** 2

var markBMI = massMark / (heightMark * heightMark);
console.log(markBMI);

var johnBMI = massJohn / (heightJohn * heightJohn);
console.log(johnBMI);

// Added conditional statement
if (markBMI > johnBMI) {
	console.log("Mark's BMI is higher than John's.");
} else {
	console.log("John's BMI is higher than Mark's.");
}

// var markLarger = markBMI > johnBMI;

// console.log("Is Mark's BMI higher than John's? " + markLarger);

/*

// if / else statements

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
	console.log(firstName + " is " + civilStatus);
} else {
	console.log(firstName + " will hopefully marry soon :)");
}

// isMarried is a boolean
var isMarried = false;
// boolean values are conditional (by being true it exists)
if (isMarried) {
	console.log(firstName + " is married ");
}

// Boolean logic

// AND (&&) -> true if ALL are true
// OR (||) -> true is ONE is true
// NOT (!) -> inverts true/false values

var firstName = "John";
var age = 20;

if (age < 13) {
	console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
	// between 13 and 20; 13 < age < 20
	console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30) {
	console.log(firstName + " is a young man.");
} else {
	console.log(firstName + " is a man.");
}

*/

// Ternary Operator and Switch Statments

// ternaray operator

var firstName = "John";
var age = 16;

// condition ? true case : false case
age >= 18 ? console.log(firstName + " drinks beer.") : console.log(firstName + " drinks juice.");

// assigning a value with a ternary operator
var drink = age >= 18 ? "beer" : "juice";
console.log(firstName + " drinks " + drink + ".");

// without ternary operator
// if (age >= 18) {
// 	var drink = "beer";
// } else {
// 	var drink = "juice";
// }

// switch statment
var job = "cook";
switch (job) {
	case "teacher":
		console.log(firstName + " teaches kids how to code.");
		break;
	case "driver":
		console.log(firstName + " drives an uber.");
		break;
	case "designer":
		console.log(firstName + " designs beautiful websites.");
		break;
	default:
		console.log(firstName + " does something else.");
}

// refactoring the earlier if/else to a switch statement dependant on boolean logic
switch (true) {
	case age < 13:
		console.log(firstName + " is a boy.");
		break;
	case age >= 13 && age < 20:
		console.log(firstName + " is a teenager.");
		break;
	case age >= 20 && age < 30:
		console.log(firstName + " is a young man.");
		break;
	default:
		console.log(firstName + " is a man.");
}
