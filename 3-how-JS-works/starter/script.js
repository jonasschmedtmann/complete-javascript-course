///////////////////////////////////////
// Lecture: Hoisting LESSON 15\
// 1. notice how calcAge works before and after the function is even declared, this is hoisting
// 2. in the creation phase of the execution context, in this case the global execution context, the function declaration calcAge is stored in the variable object (VO) even before the code is executed, and this is why when we finally do execute the code, the calcAge function is available for us to use it
// 3. this works for function declarations, but there is also something called function expressions, right?


// functions

calcAge(1997);
function calcAge(year) {
    console.log(2020 - year);
}
calcAge(1997);

// 4. let us see how this works out w/ function expressions

// retirement(1997); 5. this wont work, because hoisting only works for function declarations, not function expressions!!!
var retirement = function(year) {
    console.log(65 - (2020 - year));
}
retirement(1997);


// variables
// console.log(age); 6. this wont work, undefined, this is how hoisting works with variables, because in the creation phase of the variable object (VO) the code is scanned for variable declarations and the variables are then set to undefined
var age = 23;


function foo() {
    var age = 65;
    console.log(age); // this will console log 65, it has its own variable object (VO)
}
foo();
console.log(age); // this will console log 23, it has its own variable object (VO)




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









