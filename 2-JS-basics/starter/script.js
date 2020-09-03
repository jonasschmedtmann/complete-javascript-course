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

// Truthy and Falsy values and equality operators

// falsy values: undefined, null, 0, '', NaN
// they will return false when evaluated

// truthy values: NOT falsy values (everything not a falsy value)

// unassigned value defaults to undefined
var height;

// height = 23; // 23 is defined
height = 23; // 0 is NOT defined -> falsy value

// add OR operator for case height = 0
if (height || height === 0) {
	console.log("Variable is defined");
} else {
	console.log("Variable has NOT been defined");
}

// Equality operators
// == will convert the string to a number for comparison
if (height == "23") {
	console.log("The == operator does type coercion!");
}

/*
* CODING CHALLENGE 2

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var avgJohn = (89 + 120 + 103) / 3; // 104
var avgMike = (116 + 94 + 123) / 3; // 111
var avgMary = (97 + 134 + 105) / 3; // 112
console.log("John - " + avgJohn + " | " + "Mike - " + avgMike + " | " + "avgMary - " + avgMary);

if (avgJohn > avgMike && avgJohn > avgMary) {
	console.log("John's team won the season! ...with a score of " + avgJohn);
} else if (avgMike > avgJohn && avgMike > avgMary) {
	console.log("Mike's team won the season! ...with a score of " + avgMike);
} else {
	console.log("Mary's team won the season! ...with a score of " + avgMary);
}

// Functions

// function name_of_func (args) { code block }
function calculateAge(birthYear) {
	return 2020 - birthYear;
}

var ageJohn = calculateAge(1990); // 30
console.log(ageJohn);

// Function Statements and Expressions

// Funciton declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
// expression -> returns something
var whatDoYouDo = function (job, firstName) {
	switch (job) {
		case "teacher":
			return firstName + " teaches kids how to code";
		case "driver":
			return firstName + " drives an Uber";
		case "designer":
			return firstName + " designs beautiful websites";
		default:
			return firstName + " does something else";
	}
};

console.log(whatDoYouDo("teacher", "Alec"));

// Statement
// statements do not produce an immediate result
if (true) {
	console.log(23);
}
/*
// Arrays

var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

// accessing array items
console.log(names[0]);
console.log(names.length);

// mutating array -> directly changing the original data
names[1] = "Ben";
// mary item created at position 5 -> position 3 and 4 are created empty
// names[5] = "Mary";
names[names.length] = "Mary"; // adds item dynamically to end of array
console.log(names);

var john = ["John", "Smith", 1990, "teacher", false];

// add an item to array's end
john.push("blue");
// add an item to array's beginning
john.unshift("Mr.");
console.log(john);

// remove item from array's end
john.pop();

// remove item from array's start
john.shift();
console.log(john);

// return index position of passed value
// -1 -> value not found in array
console.log(john.indexOf(1990));

var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer" : "John IS a designer";

console.log(isDesigner);

*/

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// restaurants
// 1. $124
// 2. $48
// 3. $268

// 1. if bill < $50 -> tip 20%
// 2. if $50 < bill < $200 -> tip 15%
// 3. if bill > $200 -> tip 10%

// output: 2 separate arrays
//  JUST THE TIPS (the tip from each bill) totalled
// The lump sum -> bill + tip from each restaurant

function tipCalculator(bill) {
	var percentage;
	switch (bill) {
		case bill < 50:
			percentage = 0.2;
		case bill >= 50 && bill < 200:
			percentage = 0.15;
		default:
			percentage = 0.1;
	}
	return percentage * bill;
}

// var restA = tipCalculator(124);
// var restB = tipCalculator(48);
// var restC = tipCalculator(268);

// var tipTotal = restA + restB + restC;
// console.log(tipTotal); // 44

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips);

// Objects and properties

// object {
// key: value,
// }

/*
// Object literal
var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ["Jane", "Mark", "Bob", "Emily"],
	job: "teacher",
	isMarried: false,
};

console.log(john);
// dot notation
console.log(john.firstName);
// bracket notation
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

// alternate way to create Objects
// new Object syntax
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane[lastName] = "Smith";
*/

// objects and methods

var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ["Jane", "Mark", "Bob", "Emily"],
	job: "teacher",
	isMarried: false,
	// calcAge: function (birthYear) {
	// 	return 2020 - birthYear;
	// },
	calcAge: function () {
		this.age = 2020 - this.birthYear;
	},
};

console.log(john.calcAge()); // calling a function from an object
console.log(john.calcAge(john.birthYear));

john.calcAge();
console.log(john);

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// 1. create object w/ fullName, mass, height

var john = {
	fullName: "john smith",
	mass: 76,
	height: 1.82,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};
john.calcBMI();
console.log(john);

var mark = {
	fullName: "mark douglas",
	mass: 81,
	height: 1.72,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
	console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (john.bmi < mark.bmi) {
	console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else {
	console.log("They have the same BMI");
}
