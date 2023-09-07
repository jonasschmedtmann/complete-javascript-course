'use strict';

// Function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

// Fuction expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2023 - birthYear;

const myBirthYear = 1994;
console.log(
    calcAge1(myBirthYear),
    calcAge2(myBirthYear),
    calcAge3(myBirthYear)
);

// Arrays
const friends = ['Brandon', 'Jon', 'Reid']
const friends2 = new Array('Brandon', 'Jon', 'Reid')

// Add elements
friends.push('Brad')
friends2.unshift('Brad')

// Remove Elements
friends.pop()
friends2.shift()

console.log(friends.indexOf('Jon'))

console.log(friends.includes('Jon'))

/***************************************
 * Objects
 ***************************************/

const ryan = {
    firstName: 'Ryan',
    lastName: 'Park',
    birthYear: 1995,
    job: 'cybersecurity engineer',

    calcAge: function (birthYear) {
        return 2023 - birthYear
    }
};

console.log(ryan.job)
console.log(ryan['job'])

console.log(ryan.calcAge(ryan.birthYear))
console.log(ryan['calcAge'](ryan.birthYear))

const ryan2 = {
    firstName: 'Ryan',
    lastName: 'Park',
    birthYear: 1995,
    job: 'cybersecurity engineer',

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        console.log(`${this.firstName} is a ${this.age}-year old ${this.job}\
, and he ${this.age >= 16 ? 'has' : 'does not have'} a \
driver's license.`)
    }
};

console.log(ryan2.calcAge())
console.log(ryan2.age)

ryan2.getSummary()