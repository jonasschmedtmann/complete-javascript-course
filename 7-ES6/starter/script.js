// Lecture: let and const

/*// ES5
var name5 = 'Michelle Williams';
var age = 39;
name5 = 'Michelle Bash';
console.log(name5);*/

/*// ES6
const name6 = 'Michelle Bash';
let age = 39;
name6 = 'Michelle Coolio';
console.log('name6');*/


/*// ES5
function driversLicense5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'Shawn';
        var yearOfBirth = 1980;
    }
    console.log(`${firstName}, born in ${yearOfBirth}, is now officially allowed to drive a car.`);
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1980;

    if (passedTest) {
        firstName = 'Shawn';
    }
    console.log(`${firstName}, born in ${yearOfBirth}, is now officially allowed to drive a car.`);
}

driversLicense6(true);*/


// Lecture: Blocks and IFFEs

/*//ES5
(function () {
    var c = 3;
})();
console.log(c);

//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
console.log(a + b);
console.log(3);*/


/*// Lecture: Strings

let firstName = 'Shawn';
let lastName = 'Bash';
const yearOfBirth = 1980;

function calcAge(year) {
    return 2020 - year;
}

//ES5
console.log('This is ' + firstName + ' ' +
    lastName + '.  He was born in ' +
    yearOfBirth + ', Today, he is ' + calcAge(yearOfBirth) +
    ' years old.');

//ES6
console.log(`This is ${firstName} ${lastName}.  He was born in ${yearOfBirth}.  Today he is ${calcAge(yearOfBirth)} years old.`)

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('s'));
console.log(n.endsWith('sh'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(4));*/


/*// Lecture: Arrow Functions Basics

const years = [1980, 1990, 2000, 2010];

//ES5
var ages5 = years.map(function (el) {
    return 2020 - el;
})
console.log(ages5);

//ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index}: ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`
});
console.log(ages6);*/


// // Lecture: Arrow Functions 2
//
// //ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         var self = this;
//         document.querySelector('.green')
//             .addEventListener('click', function () {
//                 var str = 'This is box number ' + self.position +
//                     ' and it is ' + self.color;
//                 alert(str);
//             });
//     }
// }
// box5.clickMe();
//
// //ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         document.querySelector('.green')
//             .addEventListener('click',
//                 () => {
//                     var str = 'This is box number ' + this.position +
//                         ' and it is ' + this.color;
//                     alert(str);
//                 });
//     }
// }
// box6.clickMe();
//
// function Person(name) {
//     this.name = name;
// }
//
// //ES5
// Person.prototype.myFriends5 =
//     function (friends) {
//         var arr = friends.map(function (el) {
//             return this.name + ' is friends with ' + el;
//         }.bind(this));
//
//         console.log(arr);
//     }
// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);
//
// //ES6
// Person.prototype.myFriends6 =
//     function (friends) {
//         let arr = friends.map(el =>
//             `${this.name} is friends with ${el}.`
//         );
//
//         console.log(arr);
//     }
// new Person('Harry').myFriends6(friends);


/*// Lecture: Destructuring

//ES5
var shawn = ['Shawn', 39];
// var name = shawn[0];
// var age = shawn[1];

//ES6
const [name, age] = ['Shawn', 39];
console.log(name);
console.log(age);

const obj = {
    firstName: 'Shawn',
    lastName: 'Bash'
};
const{firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);*/


// // Lecture: Arrays
//
// const boxes = document.querySelectorAll('.box');
//
// //ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// /*boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// })*/
//
// //ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//
// /*//ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//     if(boxesArr5[i].className === 'box blue') {
//         // continue;
//         break;
//     }
//     boxesArr5[i].textContent = 'I changed to blue!';
// }*/
//
// //ES6
// for (const cur of boxesArr6) {
//     if (cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to blue!!'
// }
//
//
// //ES5
// var ages = [12, 17, 8, 21, 14, 11];
//
// var full = ages.map(function (cur) {
//     return cur >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);
//
// //ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));


/*// Lecture: Spread Operator

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages)
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['john', 'jane', 'mark'];
const familyMiller = ['mary', 'bob', 'ann'];
const bigFamily = [...familySmith, 'lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');*/


// Lecture: Rest Parameters

//ES5
// function isFullAge5() {
//     var argsArr = Array.prototype.slice.call(arguments);
//     console.log(argsArr);
//     argsArr.forEach(function (cur) {
//         console.log((2020 - cur) >= 18);
//     });
// }
// isFullAge5(1990, 1999, 1965, 2010);

// //ES6
// function isFullAge6(...years) {
//     console.log(years);
//     years.forEach(cur => console.log((2020 - cur) >= 18));
// }
// isFullAge6(1990, 1999, 1965, 2010);


// //ES5
// function isFullAge5(limit) {
//     var argsArr = Array.prototype.slice.call(arguments, 1);
//     argsArr.forEach(function (cur) {
//         console.log((2020 - cur) >= limit);
//     });
// }
// isFullAge5(16, 1990, 1999, 1965, 2010);

// //ES6
// function isFullAge6(limit, ...years) {
//     years.forEach(cur => console.log((2020 - cur) >= limit));
// }
// isFullAge6(21, 1990, 1999, 1965, 2010);


// Lecture: Default Parameters

// //ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//
//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'American' : nationality = nationality;
//
//     this.firstname = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// //ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
//     this.firstname = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }
//
// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');


// Lecture: Maps

const question = new Map();
question.set('question', 'What is the the official name of the latest major Javascript version?')
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong, please try again!')

console.log(question.get('question'));
// console.log(question.size);

// if (question.has(4)) {
//     //question.delete(4);
//     console.log('Answer 4 is here');
// }
//question.clear();

// question.forEach((value, key) =>
//     console.log(`This is ${key}, and it's set to ${value}`));


for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));




































