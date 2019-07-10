/*********************************************
* 		Variables and Data Types
*********************************************/

/*
var firstName = "Steve"; 
console.log(firstName);

var lastName = "Sampson";
var age = 27; 

var fullAge = true;
console.log(fullAge);

var job; 
console.log(job);

job = "Teacher";
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;

*/

/*********************************************
*   Variable Mutations and Type Coercion
*********************************************/

/* 
var firstName = 'John';	// string
var age = 28;			// number

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + (isMarried ? 'Yes':'No'));

// Variable Mutation + Dynamic Typing

age = 'twenty eight';
job = 'driver'
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + (isMarried ? 'Yes':'No'));

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

*/ 

/*********************************************
*   		Basic Operators
*********************************************/

/* 

var currentYear = 2019;
var ageJohn = 28;
var ageMark = 33;

// Math Operators 
var johnBirthYear = currentYear - ageJohn;
var markBirthYear = currentYear - ageMark;
console.log(johnBirthYear);
console.log(markBirthYear);

console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 10);

// Logical Operators 
var johnOlder = ageJohn > ageMark;
var markOlder = ageJohn < ageMark;
console.log(johnOlder);
console.log(markOlder);

// typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/

/*********************************************
*   		Operator Precedence
*********************************************/

/*
var currentYear = 2019;
var yearJohn = 1989;
var fullAge = 18;

// How to know which operator is executed first???
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//
var isfullAge = currentYear - yearJohn >= fullAge;	// true
console.log(isfullAge);

var ageJohn = currentYear - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(ageJohn);
console.log(ageMark);
console.log(average);

// Multiple Assignments 
var x, y;
// 8 * 4 - 6
// 32 - 6
// 26 
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators
x *= 2;
console.log(x);
x += 10; 
console.log(x);
x <<= 1;
console.log(x);
x++;
console.log(x);

*/ 

/*********************************************
* 				CODING CHALLENGE 1
*********************************************/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: 
	BMI = mass / height^2 = mass / (height * height). 
	(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark 
	has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
	(Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*

var heightJohn, massJohn, bmiJohn, heightMark, massMark, bmiMark;
heightJohn = 1.95;
massJohn = 92;
bmiJohn = massJohn / Math.pow(heightJohn,2);
console.log('John\'s BMI is: ' + bmiJohn);
heightMark = 1.69;
massMark = 78;
bmiMark = massMark / Math.pow(heightMark,2);
console.log('Mark\'s BMI is: ' + bmiMark);
console.log((bmiMark > bmiJohn ? 'Mark':'John') + ' Has the higher BMI');

*/

/*********************************************
* 			 If / Else Statements
*********************************************/

/*
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' is not married');
}

var isMarried = true;

if(isMarried){
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' is not married');
}


var heightJohn, massJohn, bmiJohn, heightMark, massMark, bmiMark;
heightJohn = 1.95;
massJohn = 92;
bmiJohn = massJohn / Math.pow(heightJohn,2);
heightMark = 1.69;
massMark = 78;
bmiMark = massMark / Math.pow(heightMark,2);

if(bmiMark > bmiJohn){
	console.log('Mark\'s BMI is higher than John\'s');
} else {
	console.log('John\'s BMI is higher than Mark\'s');

}

*/

/*********************************************
* 			 	Boolean Logic
*********************************************/

/* 

var firstName = 'John';
var age = 29;

if(age < 13){
	console.log('John is a boy.');
} else if((age >= 13)&&(age < 20)){
	console.log('John is a teenager.');
} else if((age >= 20)&&(age < 30)){
	console.log('John is a young man.');
} else {
	console.log('John is a man.');
}

*/

/*********************************************
* 	Ternary Operator and Switch Statements
*********************************************/

/*

var firstName = 'John';
var age = 18;

age >= 18 ? console.log('firstName ' + 'drinks beer.') : console.log('firstName ' + 'drinks juice.')


var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


var job = 'teacher';

switch(job){
	case 'teacher':
	console.log(firstName + ' teaches kids how to code.');
	break;

	case 'driver':
	console.log(firstName + ' drives an Uber in Lisbon.');
	break;

	case 'designer':
	console.log(firstName + ' designs beautiful websites.');
	break;

	default:
	console.log('Job not found!');
	break;
}

*/

/*************************************************
* Truthy and Falsy values and Equality Operators
*************************************************/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;

height = 23;

if(height || height === 0) {
	console.log('The variable is defined');
} else {
	console.log('The variable has not been defined');
}

// Equality operators
if(height == '23'){
	console.log('The == operator does type coercion');
}

*/

/*************************************************
* 				CODING CHALLENGE 2
*************************************************/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/* 

var averageJohn = (89+120+103) / 3;
var averageMark = (116+94+123) / 3;
var averageMary = (97+134+105) / 3;

if(averageJohn > averageMark && averageJohn > averageMary){
	console.log('John\'s team wins with an average of ' + averageJohn);
	console.log('Mark: ' + averageMark, 'Mary: ' + averageMary);
} else if(averageMary > averageJohn && averageMary > averageMark){
	console.log('Mary\'s team wins with an average of ' + averageMary);
	console.log('John: ' + averageJohn, 'Mark: ' + averageMark);
} else if (averageMark > averageJohn && averageMark > averageMary){
	console.log('Mark\'s team wins with an average of ' + averageMark);
	console.log('John: ' + averageJohn, 'Mary: ' + averageMary);
} else if(averageJohn == averageMark){
	console.log('John and Mark Tie')
} else if(averageJohn == averageMary){
	console.log('John and Mary Tie')
} else if(averageMark == averageMary){
	console.log('Mark and Mary Tie')
}

*/


/*************************************************
* 					Functions
*************************************************/

/*

function calculateAge(birthYear){
	return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(birthYear, firstName){
	var age = calculateAge(birthYear);
	var retirement = 65 - age;
	if(retirement > 0){
		console.log(firstName + ' retires in ' + retirement + ' years.');
	} else {
		console.log(firstName + ' is already retired.' );
	}
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/

/*************************************************
*      Function Statements and Expressions
*************************************************/

// Function Declaration
/*		
	function whatDoYouDo(job, firstName){

	}
*/

/*

// Function Expression
var whatDoYouDo = function(job, firstName){
	switch(job){
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives an Uber in Lisbon';
		case 'designer':
			return firstName + ' designs beautiful websites';
		default:
			return firstName + ' does something else';
	}
}

console.log(whatDoYouDo('teacher', 'John'));

*/

/*************************************************
*      				Arrays
*************************************************/

/*

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log(isDesigner);

*/

/*************************************************
* 				CODING CHALLENGE 3
*************************************************/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

/*

function calculateTip(bill){
	if(bill < 50){
		return bill * 0.20;
	} else if (bill < 200){
		return bill * 0.15;
	} else {
		return bill * 0.10;
	}
}

var bills = [124, 48, 268];
var tips = new Array;
var totals = new Array;

for(bill of bills){
	var tip = calculateTip(bill);
	tips.push(tip);
	totals.push(tip + bill);
}

console.log(tips);
console.log(totals);

*/

/*************************************************
* 			 Objects and Properties
*************************************************/

/* 

// Object literal 
var john = {
	firstName : 'John',
	lastName : 'Smith',
	birthYear : 1990,
	family : ['Jane', 'Mark', 'Bob', 'Emily'],
	job : 'teacher',
	isMarried : false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName'])
var x = 'birthYear';
console.log(john[x])

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object;
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane.birthYear = 1994;
jane.job = 'teacher';
jane.isMarried = true;
console.log(jane);

*/ 

/*************************************************
* 			 Objects and Methods
*************************************************/

/* 

var currentYear = 2019;

var john = {
	firstName : 'John',
	lastName : 'Smith',
	birthYear : 1990,
	family : ['Jane', 'Mark', 'Bob', 'Emily'],
	job : 'teacher',
	isMarried : false,
	calcAge: function(){
		this.age = currentYear - this.birthYear;
	}
};

john.calcAge();
console.log(john);

*/

/*************************************************
* 					CODING CHALLENGE 4
*************************************************/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/* 

var john = {
	firstName : 'John',
	height : 1.95,
	mass : 92,
	calculateBmi : function(){
		this.bmi = this.mass / Math.pow(this.height, 2);		
		return this.bmi;
	}
};

var mark = {
	firstName : 'Mark',
	height : 1.69,
	mass : 78,
		calculateBmi : function(){
		this.bmi = this.mass / Math.pow(this.height, 2);		
		return this.bmi;
	}
};

var bmiJohn = john.calculateBmi();
var bmiMark = mark.calculateBmi();

if(john.bmi > mark.bmi){
console.log('John (' + john.bmi + ')' + 'has a higher BMI than Mark (' + mark.bmi + ')');
} else if (john.bmi === mark.bmi){
	console.log('John and Mark have the same BMI: ' + john.bmi);
} else {
console.log('Mark (' + mark.bmi + ')' + 'has a higher BMI than John (' + john.bmi + ')');
}

*/ 

/*************************************************
*  			   Loops and Interation
*************************************************/

/* 

for(var i = 0; i < 10; i++){
	console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// For Loop
for(var i = 0; i < john.length; i++){
	console.log(john[i]);
}

// While Loop
var i = 0;
while(i < john.length){
	console.log(john[i]);
	i++;
}

*/

// Continue and Break statements 

/*

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i = 0; i < john.length; i++){
	if(typeof john[i] !== 'string'){
		continue;
	}
	console.log(john[i]);
}

for(var i = 0; i < john.length; i++){
	if(typeof john[i] !== 'string'){
		break;
	}
	console.log(john[i]);
}

// Looping backwards
for(var i = john.length; i >= 0; i--){
	console.log(john[i]);
}

*/ 

/*************************************************
*  			   CODING CHALLENGE 5
*************************************************/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

/* 

function average(array){
	var total = 0;
	for(item of array){
		total += item;
	}
	return total / array.length;
}

var john = {
	firstName : 'John',
	bills : [124, 48, 268, 180, 42],
	tips : new Array,
	totals : new Array,
	calculateTip: function(bill){
		if(bill < 50){
			return bill * 0.20;
		} else if( bill < 200){
			return bill * 0.15;
		} else {
			return bill * 0.10;
		}
	},
	update : function(){
		for(bill of this.bills){
			var tip = this.calculateTip(bill);
			this.tips.push(tip);
			this.totals.push(bill + tip);
		}
	}
}

var mark = {
	firstName : 'Mark',
	bills : [77, 375, 110, 45],
	tips : new Array,
	totals : new Array,
	calculateTip: function(bill){
		if(bill < 100){
			return bill * 0.20;
		} else if( bill < 300){
			return bill * 0.10;
		} else {
			return bill * 0.25;
		}
	},
	update : function(){
		for(bill of this.bills){
			var tip = this.calculateTip(bill);
			this.tips.push(tip);
			this.totals.push(bill + tip);
		}
	}
}

john.update();
console.log(john);
mark.update();
console.log(mark);

var averageJohn = average(john.tips);
var averageMark = average(mark.tips);

if(averageJohn > averageMark){
	console.log('John (' + averageJohn + ') tipped more than Mark (' + averageMark + ').');
} else if (averageMark > averageJohn){
	console.log('Mark (' + averageMark + ') tipped more than John (' + averageJohn + ').');
} else {
	console.log('Both tipped the same: ' + averageMark + '.');
}

*/