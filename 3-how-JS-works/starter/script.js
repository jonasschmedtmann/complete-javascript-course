///////////////////////////////////////
// Lecture: Hoisting LESSON 15\ HOISTING IS FIRST STEP OF CREATION PHASE
// 1. notice how calcAge works before and after the function is even declared, this is hoisting
// 2. in the creation phase of the execution context, in this case the global execution context, the function declaration calcAge is stored in the variable object (VO) even before the code is executed, and this is why when we finally do execute the code, the calcAge function is available for us to use it
// 3. this works for function declarations, but there is also something called function expressions, right?


// functions

// calcAge(1997);
// function calcAge(year) {
//     console.log(2020 - year);
// }
// calcAge(1997);

// // 4. let us see how this works out w/ function expressions

// // retirement(1997); 5. this wont work, because hoisting only works for function declarations, not function expressions!!!
// var retirement = function(year) {
//     console.log(65 - (2020 - year));
// }
// retirement(1997);


// // variables
// // console.log(age); 6. this wont work, undefined, this is how hoisting works with variables, because in the creation phase of the variable object (VO) the code is scanned for variable declarations and the variables are then set to undefined
// var age = 23;


// function foo() {
//     var age = 65;
//     console.log(age); // this will console log 65, it has its own variable object (VO)
// }
// foo();
// console.log(age); // this will console log 23, it has its own variable object (VO)













///////////////////////////////////////
// Lecture: Scoping LESSON 16


// First scoping example, this works because the second function has access to the variables in the first function and the global scope, and thats because the second function is written INSIDE of the first


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




// // Example to show the difference between execution stack and scope chain


// var a = 'Hello!'; // have var a in our global scope
// first();

// function first() { // have the first() function in global scope
//     var b = 'Hi!';
//     second(); // inside first function, define var b, this will run function second because it is hoisted

//     function second() {
//         var c = 'Hey!';
//         third() // inside second function, second function has access to global scope because of scope chain
//     }
// }

// function third() { // have the third() function in global scope, but even tho the second function has access to function third, third function does not have that reverse action to function second. Function third is in a diff. scope.
//     var d = 'John';
//     console.log(c);
// }













///////////////////////////////////////
// Lecture: The this keyword LESSON 17
//1. console log this keyword to see it is global
// console.log(this);

// calculateAge(1997);
// //2. create function declaration calcAge and console.log this keyword
// // function declaration
// function calculateAge(year){
//     console.log(2020 - year);
//     console.log(this); // regular function call, not a method, so should be the same as the console log on line 108
// }

// function expression 
var zack = {
    name: 'Zack',
    yearOfBirth: 1997,
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
        console.log(this); // 3. inside here we can also console log the this keyword, but we will have to perform a method call. See step 4
    
        // 6. We are going to add a new function inside of the calculateAge function/method and console.log this keyword
    
        function innerFunction() {
            console.log(this); // 8. Notice how our object is back to being the window (global) object. This is up for debates in the JavaScript community on whether this is the way it should be or not
            // 9. it follows the rules though... although it is written inside of a method pertaining to an object  (calcAge function => zack object) it is still just a regular function
        }
        // 7. perform our method call for innerFunction
        innerFunction();
    }
}

// 4. perform a method call
zack.calculateAge();

// 5. note how now the this keyword is the Zack object! The this keyword refers to the object that calls the method, in this case the zack object called it

// 10. creating a new object, doing the same this as the one above.
var brandon = {
    name: 'Brandon',
    yearOfBirth: 1998,
    // 11. we could copy and paste the calcAge function, or we could be smart and do something really common in JavaScript, called METHOD BORROWING
    // 12. we are going to BORROW zack objects method and use it on Brandon
}

// 13. this is how we allow brandon object to borrow method from zack object
brandon.calculateAge = zack.calculateAge;

// 14. call our function
brandon.calculateAge();
// 15. notice how the this variable we are borrowing becomes the brandon object. notice how the innerFunction console log of this that we borrowed is the window object still