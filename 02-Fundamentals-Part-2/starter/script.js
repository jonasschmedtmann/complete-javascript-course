//Strict mode activation
// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;

//Functions
// function logger() {
//     console.log("My name is Stephen");
// }
//calling, running or invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//Function declaration
// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }
// const age1 = calcAge1(1980);

//Function expression
// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(1985);
// console.log(age1, age2);

//Arrow functions
// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(2002);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(2002, "Greg"));
// console.log(yearsUntilRetirement(2005, "Bob"));

// const birthYear = prompt("Enter your birth year?");
// function yearsUntilRetirement () {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement());

//Functions calling other functions: Data flow
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor (apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

//Reviewing functions
// function calcAge (birthYear) {
//     return 2023 - birthYear;
// }
// function calcretirement(age) {
//     return 65 - age;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = calcretirement(age);

//     if(retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} has already retired!`;
//     }
// }
// console.log(yearsUntilRetirement(2002, "Ayo"));
// console.log(yearsUntilRetirement(1950, "Stephanie"));

//Introduction to arrays
// const friends = ['Michael', 'Stephen', 'Peter'];
// console.log(friends);

// const yearsO = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); //to get the last element

// friends[2] = 'Jay';
// console.log(friends);
// const popoola = ['Stephen', 'Ayomide', 2023 - 2002, 'web developer', friends];
// console.log(popoola);
// console.log(popoola.length);

//Exercise
// const calcAge = function (years) {
//     return 2023 - years;
// }
// const years = [2002, 2004, 2008, 2011, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//Basic Array Operations (Methods)
//const friends = ['Michael', 'Stephen', 'Peter'];

//Add elements
// friends.push('Jay');
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

//Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Stephen'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Stephen'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Stephen')) {
//     console.log('You have a friend called Jacob');
// }

//Introduction to objects
// const NewArray = [
//     'Stephen',
//     'Popoola',
//     2023 - 2002,
//     'web dev',
//     ['Michael', 'Peter', 'Steven']
// ];

// const ayo = {
//     firstName: 'Stephen',
//     lastName: 'Popoola',
//     age: 2023 - 2002,
//     job: 'web dev',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(NewArray);
// console.log(ayo);

//Dot vs Bracket Notation
// const ayo = {
//     firstName: 'Stephen',
//     lastName: 'Popoola',
//     age: 2023 - 2002,
//     job: 'web dev',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(ayo.age);
// console.log(ayo['age']);

// const nameKey = 'Name';
// console.log(ayo['first' + nameKey]);
// console.log(ayo['last' + nameKey]);

// const interestedIn = prompt("What do you want to know about ayo? Choose between firstName, lastName, age, job, and friends");
// console.log(ayo[interestedIn]);

// if(ayo[interestedIn]) {
//     console.log(ayo[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

// ayo.location = 'Nigeria';
// ayo['twitter'] = '@popoolasteph';
// console.log(ayo);

// console.log(`${ayo.firstName} has ${ayo.friends.length} friends, and his best friend is called ${ayo.friends[0]}`);

//OBJECT METHODS
// const ayo = {
//     firstName: 'Stephen',
//     lastName: 'Popoola',
//     birthYear: 2002,
//     job: 'web dev',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function() {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} year old ${ayo.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// };

// console.log(ayo.calcAge());
// console.log(ayo.age);
// console.log(ayo.getSummary());

//EXERCISE
// if (hasDriversLicense = true) {
//     console.log(`${ayo.firstName} is a ${ayo.calcAge()} year old ${ayo.job} and he has a drivers' license.`);
// } else{
//     console.log(`${ayo.firstName} is a ${ayo.calcAge()} year old ${ayo.job} and he has no drivers' license.`);
// }

//ITERATION: THE FOR LOOP
//for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep ++) {
//     console.log(`Lifting weights repitition ${rep}`);
// }

//LOOPING ARRAYS, BREAKING AND CONTINUING
// const ayo = [
//     'Stephen',
//     'Popoola',
//     2023 - 2002,
//     'teacher',
//     ['Michael', 'Peter', 'Stephen']
// ];

// const types = [];

//for(let i = 0; i < ayo.length; i++) {
//Reading from ayo array
//console.log(ayo[i], typeof ayo[i]);
//Filling types array
// types[i] = typeof ayo[i];
//     types.push(typeof ayo[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

//Continue and break statements
// console.log('--- ONLY STRINGS ---')
// for(let i = 0; i < ayo.length; i++) {
//     if(typeof ayo[i] !== 'string') continue;
//     console.log(ayo[i], typeof ayo[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for(let i = 0; i < ayo.length; i++) {
//     if(typeof ayo[i] !== 'number') break;
//     console.log(ayo[i], typeof ayo[i]);
// }

//looping backwards and loops in loops
// const ayo = [
//     'Stephen',
//     'Popoola',
//     2023 - 2002,
//     'teacher',
//     ['Michael', 'Peter', 'Stephen'],
//     true
// ];

// for(let i = ayo.length - 1; i >= 0; i--) {
// console.log(i, ayo[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repitition ${rep}`)
//     }
// }

// for(let level = 1; level < 3; level++) {
//     console.log(`------ Basic ${level}`);

//     for(let subject = 1; subject < 4; subject++) {
//         console.log(`subject ${subject}`);
//     }
// }

//WHILE LOOP
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repitition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repitition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is about to end...`);
// }
