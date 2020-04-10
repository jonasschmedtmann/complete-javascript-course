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
// const [name, age] = ['John', 26]; // We destructure this data structure: ['John', 26] using [name, age] so we can just call for the name and age separately
// console.log(name);
// console.log(age);


// Destructure object

// const obj = {
//     firstName: 'Margaret',
//     lastName: 'Thatcher'
// };

// const{firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// //var names dont have to match key names
// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);



// // Returning multiple values from a function --> common use case of destructuring
// function calcAgeRetirement(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age]
// }

// const [age2, retirement] = calcAgeRetirement(1997);
// console.log(age2);
// console.log(retirement);









// Lesson 7: Arrays in ES6 / ES2015

// const boxes = document.querySelectorAll('.box'); // returns a nodeList not an array
// // must transform it to an array

// // ES5
// var boxesArr5 = Array.prototype.slice.call(boxes); // now we have an array (ES5 way)
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue'
// })

// // ES6
// const boxesArr6 = Array.from(boxes); // transform the nodeList we have in boxes to an array
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// // ES5 loop to continue
// /*
// for (var i = 0; i < boxesArr5.length; i++) {

//     if(boxsArr5[i].className === 'box blue'){
//         continue;
//     }

//     boxesArr5[i].textContent = 'I changed to blue! ES5 Way.';
// }
// */



// // ES6 way -- for off loop
// for (const cur of boxesArr6){
//     if (cur.className.includes('blue')){
//         continue;
//     }
//     cur.textContent = 'I was changed to blue! ES6 Way.'
// }



// // new ways to find elements of an array in ES6
// // ES5 first tho

// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function(cur) {
//     return cur >= 18;
// });
// console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // ES6 -- doing this with new methods. The findIndex method and the find method.
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));









// Lesson 8: The Spread Operator (expand elements)

/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// How to pass entire array into that function?

// ES5
var ages = [18, 30, 12, 21]

var sum2 = addFourAges.apply(null, ages);
console.log(sum2);



// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

// more use cases of spread -- 2 arrays

const familyBumpous = ['Zac', 'Debby', 'Bran', 'Jef'];
const familySchneider = ['Kleb', 'Dilly Dilly', 'Neal', 'Chleo'];
const familiesTogether = [...familyBumpous, 'Milo n Diesel', ...familySchneider];
console.log(familiesTogether);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
console.log(all);

Array.from(all).forEach(cur => cur.getElementsByClassName.color = 'purple');

*/









// Lesson 9: Rest Parameters (pass arbitrary number of arguments in a function and use them in that function)
/*
// ES5
function isFullAge5(){
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= 18)
    })
}

// isFullAge5(1990, 1999, 1965, 2016, 2009)

// ES6 -- Rest Parameter Operator
function isFullAge6(...years){
    // console.log(years);
    years.forEach(cur => console.log((2020 - cur) >= 18));
}

isFullAge6(1990, 1999, 2009);
*/


// ES5
/*
function isFullAge5(limit){
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);

    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= limit)
    })
}

isFullAge5(16, 1990, 1999, 1965, 2016, 2009)

// ES6 -- Rest Parameter Operator
function isFullAge6(limit, ...years){
    // console.log(years);
    years.forEach(cur => console.log((2020 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 2009);
*/









// Lesson 10: Default Parameters

// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'Smith' : lastName = lastName; // default parameter

    nationality === undefined ? nationality = 'Unknown' : nationality = nationality; // default parameter

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var satoshi = new SmithPerson('Satoshi', 1990);

// over riding default paraeter

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/


// ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality; 
}

var satoshi = new SmithPerson('Satoshi', 1990);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/









// Lesson 11: Maps (entirely new in ES6)
// can use any boolean value + objects and functions as keys with Maps

/*
const question = new Map();
question.set('question', 'What is the official name of the lastest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!! :D');
question.set(false, 'Wrong, please try again. :/');

//retrieving data from map, use get
console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
    // question.delete(4);
    console.log('Answer 4 is here')
}

// question.clear();

// question.forEach((value, key) => 
// console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number'){
        console.log(`Answer${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/









// Lesson 12: Classes


// ES5
var Person5 = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('Johny boy ES5', 1990, 'teacher');


// ES6
class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey there!');
    }
}

var john6 = new Person6('Johny boy ES6', 1990, 'teacher');


Person6.greeting();