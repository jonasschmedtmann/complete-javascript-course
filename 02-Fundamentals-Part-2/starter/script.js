'use strict';
//strict mode activated as long as it's the first line of code

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

//Functions

function logger(name) {
    console.log(`My name is ${name}`);
}

logger("Betty"); //calling, invoking, running
logger("Robin");

//name is a parameter but Betty is an argument

const jonas = {
    birthyr: 1991,
    calcAge: function() {
        console.log(this);
        return 2037 - this.birthyr;
    }
}

console.log(jonas.calcAge());
console.log(jonas['calcAge']());