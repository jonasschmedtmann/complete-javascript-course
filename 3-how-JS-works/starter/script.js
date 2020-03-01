///////////////////////////////////////
// Lecture: Hoisting

// example of hoisting
calculateAge(1998);

// function declaration
function calculateAge(year) {
  console.log(2020 - year);
}

// function expression
var retirement = function(year) {
  console.log(65 - (2020 - year));
};
retirement(1990);

console.log(age);
var age = 29;

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
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

// console.log(this);\

// calculateAge(1985);
// function calculateAge(year) {
//   console.log(2020 - year);
//   console.log(this);
// }

var john = {
  name: "John",
  yearOfBirth: 1985,
  calculateAge: function() {
    console.log(this);
    console.log(2020 - this.yearOfBirth);
    // the 'keyword' in the inner function refers to the window/global object
    // function innerFunction() {
    //   console.log(this);
    // }
    // innerFunction();
  }
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984
};

// allows Mike to have the same object as John
mike.calculateAge = john.calculateAge;
mike.calculateAge();
