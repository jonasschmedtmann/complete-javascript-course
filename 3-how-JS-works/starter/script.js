// * Every variable is a part of the window object. It is a part of the global
/*
functions and variables are hoisted in javascript. Which means that they are available before the execution phase starts. The difference between functions and variables is that functions are already defined before the execution phase.

variables are set to undefined and will only be defined in the execution phase which come right after the creation phase

///////////////////////////////////////
// Lecture: Hoisting
/*************************************
*/

//functions hoisting
// calculateAge(1965); // stored in the variable object

// function calculateAge(year) { //This is made available for the execution phase so that calculate age works even though it is declared before
//     console.log(2016 - year);
// }
// //retirement(1990); //will not work with hoisting. Only works with function declarations

// var retirement = function(year) {
//     console.log(65 -(2016-year)); ///with a function declaration the function is not available before the execution phase
// }
// retirement(1990);

// //variables hoisting
// console.log(age);//return undefined because it does not have a variable yet
// var age = 23;
// console.log(age);

// function foo() {
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age)











///////////////////////////////////////
// Lecture: Scoping - Where can we access a certain variable
/***********************************************************
 * ****Each function creates a scope***: the space/environment, in which the variables it defines are accessible.
 * In other languages if and for and why blocks create a scope. NOT in Javascript, **only a function creates a new scope**.
 * **Lexical Scoping** a function that is lexically withing another function gets access to the scope of the outer function.
 */

// First scoping example


// var a = 'Hello!'; //global scope
// first();

// function first() { //global scope this does not have access to the code inside the functions inside it
//     var b = 'Hi!';
//     second();

//     function second() { //local scope
//         var c = 'Hey!'; //this function has access to the other functions above it.
//         console.log(a + b + c);
//     }
// }




// Example to show the difference between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a);
// }




///////////////////////////////////////
// Lecture: The this keyword
/********************************************
 * In a regular function call : the THIS keyword points at the global object,(The window object, in the browser) This is the default
 * Method call: The this variable points to the object that is calling the method.
 * 
 * The this keyword is not assigned a value until a function where it is defined is actually called
 * 
 */
// console.log(this); logs the window module
calculateAge(1985);
function calculateAge(year) {
    console.log(2016-year);
    console.log(this);
} //this points to the window module or global object. 

var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
/************************************************************
 * The this keyword points to the global object **unless it is called on a method, at which point it points to the parent object**
 */
        function innerFunction() {
            console.log(this);
        }
        innerFunction()
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge; // The this variable is only assigned a value when the object calls the method
mike.calculateAge();                    // thus allowing method borrowing

















