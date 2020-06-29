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






















