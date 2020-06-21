/**
 * LECTURE: Hoisting
 * 
 */


 calculateAge(1965);

function calculateAge(year) { // this is a decleration
    console.log(2020 - year);
}

var retirement = function(year) {  //hoisting only works for function declarations, this is an expression
    console.log(65 - (2020-year));
}

retirement(1993);

// Variables
console.log(age);
var age = 23;
console.log(age);
// JS scans for variables and sets them to undefined. 
// Variables that don't have a value yet will always have the 'undefined' data type

function foo() {
    var age = 65; 
    console.log(age);
}
foo();
console.log(age); 
 /** 
  * LECTURE: Scoping
  * 
  */

//    Scoping Example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}
function third() {
    var d = 'John';
    console.log(a+b+c+d);
}

// LECTURE : METHOD BORROWING

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
    }
}
john.calculateAge();


var mike = {
    name: 'John',
    yearOfBirth: 1990,
}
mike.calculateAge = john.calculateAge;
mike.calculateAge();
