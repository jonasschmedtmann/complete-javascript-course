///////////////////////////////////////
// Lecture: Hoisting

// function & variable declarations are hoisted
// available before the "execution phase" of the execution context starts

// Functions

// function declaration
calculateAge(1965);

// pointed to by function declaration
function calculateAge(year) {
	console.log(2020 - year);
}

// throws error -> not a funciton declaration
// this is a function expression
// retirement(1965);

var retirement = function (year) {
	console.log(65 - (2020 - year));
};

retirement(1990);

// Variables

// variable declaration -> all variables are first created as undefined
// variable is created as undefined
console.log(age); // undefined
var age = 23;
// variable is now defined
console.log(age); // 23

function foo() {
	console.log(age); // undefined
	var age = 65;
	console.log(age); // 65
}

foo();
// the global scope is executed last (its at the bottom of the stack)
// because of that, it overrides the function scope of age (65) with the global
// scope (23)
console.log(age); //23

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword
