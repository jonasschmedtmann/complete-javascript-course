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

function logger () {
    console.log(`My name is Vishu!`);
}

logger();   // Calling

function fruitProcessor (applesCount, orangesCount) {
    console.log(applesCount, orangesCount);
    const juice = `Juice with ${applesCount} apples and ${orangesCount} oranges`;
    return juice;
}

console.log(fruitProcessor(10, 3));
console.log(fruitProcessor(7, 9));
