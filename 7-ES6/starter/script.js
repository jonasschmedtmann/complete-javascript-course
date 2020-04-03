// Lecture 1: let and const


// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5, age5)

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6, age6)




// ES5
// function driversLicense5(passedTest){
//     if (passedTest){
//         console.log(firstName); // undefined

//         var firstName = 'John'; // function scoped (var)
//         var yearOfBirth = 1990; // function scoped (var)

//         // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')

// }

// driversLicense5(true);


// // ES6

// function driversLicense6(passedTest){
//     // console.log(firstName); these both print errors
//     // console.log(yearOfBirth);

//     let firstName;
//     const yearOfBirth = 1990;
//     if (passedTest){
//         firstName = 'John'; // block scoped (let)
//         yearOfBirth; // block scoped (let)

//         // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
// }
// driversLicense6(true);





// let i = 23; // block scoped

// for (let i = 0; i < 5; i++){
//     console.log(i); // console logs 0 through 5 (i is block scoped)
// }

// console.log(i); // will console log 23



/* // Will say uncaught syntaxError: identifier 'i' has already been declared

var i = 23; // function scoped

for (var i = 0; i < 5; i++){
    console.log(i); // console logs 0 through 5 (i is function scoped)
}

console.log(i); // will console log 23

*/









// Lecture 2: Blocks and IIFEs (iffys)

/*
// this is a block {}
{
    const a = 1;
    let b = 2;
    var d = 4
}

console.log(a + b); // the values are undefined, bc they are block scoped, this is some data privacy, kind of like an IIFE but much easier to write.
console.log(d); // function scoped so will be defined


// ES5 IIFE
(function() {
    var c = 3;
})();
console.log(c) // value undefined, bc we used an IIFE on an var which is function scoped. A lot more code for data privacy.
*/









// Lecture 3: Strings in ES6 / ES2015
/*

let firstName = 'Zackychan';
let lastName = 'DaGoat';
const yearOfBirth = 1997;
function calcAge(year){
    return 2020 - (1997 + 1);
}

// ES5 (we want to put all this data together in a big string)
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');


// ES6 (we want to put all this data together ina  big string)
    // we will use template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}.`);



const n = `${firstName} ${lastName}`;
console.log(n.startsWith('Z')); // returns if the string starts with a Z or not -> should be true. Capitalization matters!!!

console.log(n.endsWith('t')); // returns if the string ends with a t or not -> should be true. Capitalization matters!!!


console.log(n.includes(' ')); // returns if the string includes a space -> Should be true. Capitalization matters!

console.log(firstName.repeat(5)); // will repeat the firstName 5 times in a row. If we want spaces between the strings we need to write a template literals

console.log(`${firstName} `.repeat(5)) // will repeate the firstName 5 times in a row with space between each string.

*/









// Lecture 4: Arrow Functions - Basics
// suppose we have an array w birth years and we want to calculate age for each year

const years = [1990, 1967, 1991, 1020, 1440];

// ES5
var ages5 = years.map(function(el){
    return 2020 - el;
});
console.log(ages5);

// ^^ this does the same as this vv

// ES6
let ages6 = years.map(el => 2020 - el); 
console.log(ages6);

// ES6 w/ more than 1 argument
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);

// ES6 w/ more than 1 argument and more than one line in the return `` or back ticks, and we will need to specify the return bc it is not implicit
ages6 = years.map((el, index)=> {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);