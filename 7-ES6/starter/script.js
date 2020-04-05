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

/*

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

*/








// Lecture 5: Arrow Functions - Lexical 'this' Keyword

// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){ // this is a method so this.color will return green (but we have another function inside of it so... it won't)
//     var self = this;

//         // attach event handler
//         document.querySelector('.green').addEventListener('click', function() { // this is the function that cuts of this.color from knowing it to be defined/assigned to 'green' as well as this.position assigned/defined to 1
//         // use self which we defined just one layer above

//             //alert that says color and position of box

//             var string = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(string);
//         })
//     }
// }
// // box5.clickMe();





// // ES6 - by using the arrow function, we have access to the this keyword bc the arrow function shares the lexical this keyword to its surroundings
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         document.querySelector('.green').addEventListener('click', () => {
//             var string = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(string);
//         })
//     }
// }
// // box6.clickMe();


// // ES6 w/ both arrow methods.. this should be undefined bc the lexical surroundings of the CLICKME method/arrow function are the global scope (where this.postion and this.color would be undefined) which in turn means that the second arrow function has access to its own lexical surrounding. Well, its lexical surrounding is whatever is above it and that is the clickMe/first arrow function which sees the global scope. So the global scope is inside the second anonymous function as well.

// /*
// const secondBox6 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             var string = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(string);
//         })
//     }
// }
// secondBox6.clickMe();
// */



// // ES5 - Function constructor in order to create a person object in ES5
// function Person(name){
//     this.name = name;
// }

// Person.prototype.myFriends5 = function(friends) {

//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('Zack').myFriends5(friends);



// // ES6
// Person.prototype.myFriends6 = function (friends){
//     var arr = friends.map(el => 
//         `${this.name} is friends with ${el}`);
//     console.log(arr);
// }

// new Person('Mikey Boy').myFriends6(friends);









// Lesson 6: Destructuring

// imagine we have data in a data structure (object or array) in this case an array and now we want to store each elements of that array in a single variable

// ES5
// var zack = ['Zack', 22];
// var name = zack[0];
// var age = john[1];


// ES6 - Now destructuring in ES6
const [name, age] = ['John', 26]; // We destructure this data structure: ['John', 26] using [name, age] so we can just call for the name and age separately
console.log(name);
console.log(age);


// Destructure object
const obj = {
    firstName: 'Margaret',
    lastName: 'Thatcher'
};

const{firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

//var names dont have to match key names
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



// Returning multiple values from a function --> common use case of destructuring
function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age]
}

const [age2, retirement] = calcAgeRetirement(1997);
console.log(age2);
console.log(retirement);









// Lesson 7: Arrays in ES6 / ES2015


const boxes = document.querySelectorAll('.box'); // returns a nodeList not an array
// must transform it to an array

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes); // now we have an array (ES5 way)
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue'
})

// ES6
const boxesArr6 = Array.from(boxes); // transform the nodeList we have in boxes to an array
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES5 loop to continue
/*
for (var i = 0; i < boxesArr5.length; i++) {

    if(boxsArr5[i].className === 'box blue'){
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue! ES5 Way.';
}
*/



// ES6 way -- for off loop
for (const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I was changed to blue! ES6 Way.'
}



// new ways to find elements of an array in ES6
// ES5 first tho

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 -- doing this with new methods. The findIndex method and the find method.
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));