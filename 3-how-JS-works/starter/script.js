///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1965);//available before code is executed bc of hoisting. 
function calculateAge(year) {
    console.log(2016 - year);
}
//only for funcition declarations, not function expressions. 

//retirement(1956); // get error that retiremnet is not defined. 

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

//variables are undefined when hoisted until they have the value put in. 
//main thing is that can have function declarations used before they are defined bc of hoisting. 


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

//Each funcition creates a scope. 


// Example to show the differece between execution stack and scope chain


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
    //console.log(c);
    console.log(a+d);
}




///////////////////////////////////////
// Lecture: The this keyword

//this keyword is always attached to Window unless in a method of an object. Attached to Window bc global object. Needs another object. 
//this has to be apart of method, never a regular function, even if the function is in an object.
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}
mike.calculateAge = john.calculateAge;
mike.calculateAge();




