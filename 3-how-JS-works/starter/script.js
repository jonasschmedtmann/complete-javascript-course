///////////////////////////////////////

// Lecture: Hoisting

/*// functions
calculateAge(1980);

function calculateAge(year) {
    console.log(2020 - year);
}


//retirement(1990);
var retirement = function (year) {
    console.log(65 - (2016 - year));
};

// variables
console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);*/


///////////////////////////////////////
// Lecture: Scoping

// First scoping example
/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}*/

// Example to show the differece between execution stack and scope chain
/*var a = 'Hello!';
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
    console.log(a + d);
}*/


///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

// calculateAge(1985);
//
// function calculateAge(year) {
//     console.log(2020 - year);
//     console.log(this);
// }

var shawn = {
    name: 'Shawn',
    yearOfBirth: 1980,
    calculateAge: function() {
        console.log(this);
        console.log(2002 - this.yearOfBirth);

        /*function innerFunction() {
            console.log(this);
        }
        innerFunction();*/
    }
};

shawn.calculateAge();

var michelle = {
    name: 'Michelle',
    yearOfBirth: 1978
};


michelle.calculateAge = shawn.calculateAge;
michelle.calculateAge();
