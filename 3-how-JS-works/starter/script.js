/* //////// HOW JAVASCRIPT CODE IS EXECUTED ////////// */

/*

Our code is run by the javascript engine found in web browsers There are many engines

In the engine this is what happens

> code goes through parser and checks syntax, parser knows the javascript rules. Will stop execution if it finds errors
> abstract syntax tree is a data structure produced by the parser
> the abstract syntax tree is then translated into machine code
> code runs after machine code is read by computer

*/

/* //////// EXECUTION CONTEXTS AND THE EXECUTION STACK ////////*/

/*

All javascript code needs to be run in an environment and this environment is called an execution context.

-Exectution context: a box, a container, or a wrapper which stores variables and in which a piece of our code is evaluated and executed.

-The default exectuion context is always the Global Execution context

-Global Execution Context: code that is not inside any function, think of it as an object, in the browser that is the window object
    -Example variable lastName is the exact same thing as window.lastName; lastName === window.lastName evaluates to true
        -when you code window.lastName - its like you're adding a property named lastName to the window object (global execution context)
        -object properties are varibles unique to an object

-Functions when called run an their own execution context; example below:
    var name = 'john'; - this variable would be in the in global context

    function first(){     - this function will also be in the global context
        body of function
    };

    first(); - but when it gets called it gets added on top of the global context in it's own execution context, ends up looking like 

    Exectution context
    first()
    ------------------------
    global execution context

This is what is known as the execution stack



/*/////////// EXECUTION CONTEXT IN DETAIL ////////// */

/*

Excution context objects has three properties
- Variable object
    -contians:
    -function arguments
    -inner variable declarations
    -function declarations
- Scope chain
    -current variable object
    -variable objects of all its parents
    -this variable

When a new function is called a new context is created and placed on top of the execution stack, this happens in two phases

-Creation phase
    -creation of varible object
    -creation of scope chain
    -this variable is determined and set

-Execution phase
    -the code of the function that created the context is run line by line

Creation of varible object
-the argument object is created, containig all the arguments that were passed into the function
-code is scanned for function declarations: for each function a property is created in the variable object pointing to the function
-code is scanned for varible declarations: for each variable a porperty is created in the variable object and set to undefined

these last two are what is called hoisting - this means they are availble for exectuion before execution starts,

the diffence in hoisting a function and a variable is that variables will point to undefine where functions will poitn to the function it's calling

*/

///////////////////////////////////////
// Lecture: Hoisting

//hoisting allows us to do something like below where you don't have to declare the function before it's called. Remember the way the way contexts are created is that functions are stored first before execution 

//FUNCTIOS
//calculateAge(1965);

// function calculateAge(year) {
//     console.log(2016-year);
// }

// // calculateRetirement(1965);
// //hoisting only works with function declarations NOT with function expressions, the code on line 96 will cause an error
// var calculateRetirement = function  (year) {
//     console.log(65-(2016-year));
// }

// calculateRetirement(1990);

// //VARIABLES
// console.log(age); //this will be undefined becuase of hoisting the var age below; only after setting the value will it produce its definiion
// var age = 23;
// console.log(age);

// function foo(){
//     console.log(age);
//     var age = 65; //var age belongs to the execution context of the function foo and so it will print 65 not 23
//     console.log(age);
// }
// foo();
// console.log(age);




///////////////////////////////////////
// Lecture: Scoping

/*
-Scoping answers the question "where can we access a certain variable?"
-Each new function creates a scope: the space/environment, in which the variable it defines are accessible
-Lexical Scoping: a function that is lexical within anohter function gets access to the scope of the outer function
*/
// First scoping example

/*
Below is an example of the scope chain: function second will look for variables b and c within it and if it does not find it, it will look at it's parent or parents parent. Function second has lexical scoping. the global scope, in this case outside both functions, will not have access to the variables the other way.

Scope chain is the second step of the execution context object creation process

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
The code below will produce an error. The execution context order has no bearing on the scoping chain. Execution context order only determines the order in which functions will be called. Scoping is deterimed by where functions or variable are written. So in code below function third does not have access to variables b and c only a (in the global scope and d in it's scope)

order means nothing for scope

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
    console.log(a + d);
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

/* 

-Regular function call: the this keyword points at the gobal object (the window object, in the browser)
-method call: the this keyword points to the object that is calling the method
-the this keyword is not assinged a value until a function where it is defined is called

*/

//console.log(this);

calculateAge(1988);

function calculateAge(year){
    console.log(2020-year)
    console.log(this);
    //this isn't a method it's regular function so the this keyword will point the default object, the window
}

var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2020-this.yearOfBirth);
        //the this keyword here points to the object in this method once the method is called, this is being caled below on line 213

        // function innerFunction(){
        //     console.log(this);
        //     //this is a regular function so this will point to the window, the default object even if it's inside a method.
        // }
        // innerFunction();
    }

};

john.calculateAge();

var mike = {
    name: 'mike',
    yearOfBirth: 1984,
};

//these two pieces of code proves that the this value is only assinged once the method is called

mike.calculateAge = john.calculateAge;
//this code works because we borrow the method from john object and assing it to mike object then the this keyword is assinged when you call calculateAge for mike
mike.calculateAge(mike.yearOfBirth);