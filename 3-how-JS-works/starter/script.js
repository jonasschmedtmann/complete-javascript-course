///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1965);//available before code is executed bc of hoisting. Function declaration it works. 
// function calculateAge(year) {
//     console.log(2016 - year);
// }
// //only for funcition declarations, not function expressions. 

// // retirement(1956); // get error that retiremnet is not defined. 

// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// }

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
//Exection stack is the order in which the functions are called. 
//The Scope Chain is the order in which functions are written lexically

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

//above is only function that works because c is inaccessible. The only ones that the third function has access to is variables a and d. 




///////////////////////////////////////
// Lecture: The this keyword

//this keyword is always attached to Window unless in a method of an object. Attached to Window bc global object. Needs another object. 
//this has to be apart of method, never a regular function, even if the function is in an object.
//Regular function call: the this keyword points a the global object, (the window object, in the browser).
//Method call: the this variable points to the object that is calling the method. 
//The this keyword is not assigned a value until a function where it is defined is actually called. 


//console.log(this) //returns the window function since there is nothing else there. 

// calculateAge(1985);
// function calculateAge(year) {
//     console.log(2016-year);
//     console.log(this);
//     //result is the this variable is the window object again
// } 



var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
    }
}//this is a function expression, not a function declaration 

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

//this is method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();


 

