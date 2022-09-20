'use strict';

/*
    32: Activating strict mode
*/

// // let private = false;        // Error: Unexpected strict mode reserved word
// let hasDriversLicense = false;
// const passTest = true;


// // Using a wrong spelling intentionally here
// if (passTest) hasDriverLicense = true;      //Uncaught ReferenceError: hasDriverLicense is not defined

// if (hasDriversLicense) {
//     console.log(`Yayy!! I can drive`);
// }

/*
    33: Functions
*/

// function logger () {
//     console.log(`My name is Vishu!`);
// }

// logger();   // Calling

// function fruitProcessor (applesCount, orangesCount) {
//     console.log(applesCount, orangesCount);
//     const juice = `Juice with ${applesCount} apples and ${orangesCount} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(10, 3));
// console.log(fruitProcessor(7, 9));

/*
    34: Function Declaration vs. Expression
*/

// // function declaration -- can be called before declaring -- Hoisting 🙊
// function calcAge1 (birthYear) {
//     return 2022 - birthYear;
// }

// console.log(calcAge1(1992));

// //function expression/ anonymous function -- cannot be called before initializing
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// };

// console.log(calcAge2(1997));

/*
    35: Arrow functions
*/

// const calcAge = (birthYear) => 2022 - birthYear;
// console.log(calcAge(1992));

// const yearsUntilRetirement = (birthYear, retirementAge) => {
//     const age = 2022 - birthYear;
//     const yearsLeft = retirementAge - age;
//     return yearsLeft;
// }

// console.log(yearsUntilRetirement(1992, 55));

/* 
    36: Functions calling other functions
*/

const cutFruitToPieces = (fruit) => fruit * 4;

const fruitProcessor = (applesCount, orangesCount) => {

    const applePieces = cutFruitToPieces(applesCount)
    const orangePieces = cutFruitToPieces(orangesCount)

    console.log(applesCount, orangesCount);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(fruitProcessor(2, 3));




