///////////////////////////////////////
// Lecture: Hoisting

/*

//functions
calculateAge(1990);

function calculateAge(year){
    console.log(2019-year);
}


// retirement(1956) // doesn't work!
var retirement = function(year){
    console.log(65 - (2019 - year));
}

//variables

console.log(age);
var age = 23; 

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

*/

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

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()

        function third() {
            var d = 'John';
            console.log(a + b + c + d);
        }
    }
}
*/

///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

function calculateAge(year){
    console.log(2019 - year);
    console.log(this);
}

calculateAge(1985);


var john = {
    name : 'John',
    yearOfBirth : 1990,
    calculateAge : function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);
    }
};

john.calculateAge();

var mike = {
    name : 'Mike',
    yearOfBirth : 1984,
};

mike.calculateAge = john.calculateAge;

mike.calculateAge();