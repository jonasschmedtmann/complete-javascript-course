'use strict';
// let hasDriversLicense = false;
// const passTest = true;
// if(hasDriversLicense) console.log("I have driving expeience :>");

function jogger() {
    console.log("Hey Jogger..!Welcome to JavaScript");
}

function fruitProcessor(apple, oranges) {
    let juice = `Here is a ${apple + oranges} cups of mixed juice`;
    return juice;
}
// jogger();
// jogger();
// const mixedJuice = fruitProcessor(10, 20);
// console.log(`Serving sir ...!  ${mixedJuice}`);

/*
//Function Declaration
function min(a, b) {
    return a > b ? b : a;
}
//Function Expression
const minimum = function (a, b) {
    return a > b ? b : a;
}


console.log(min(10, 20));
console.log(minimum(10, 20));
console.log(minimum(100, 201.779));
*/

//Arrow Function with single parameter and single line of code
let greet = person => `Hi ${person}..!How is going on..`;

// console.log(greet("Sant"))

//Arrow Function with multi parameter and multi-line statements
let yearsUntilRetirement = (dob, firstName) => {
    const age = 2023 - dob;
    return age > 65 ? `Hey ${firstName}..!Retired Person since ${age - 65} ` : `Hey ${firstName}...! Your going to retire after ${65 - age}`;
}
console.log(yearsUntilRetirement(2003, "Surya"));

