'use strict';

/* 
    32: Activating strict mode
*/

// let private = false;        // Error: Unexpected strict mode reserved word
let hasDriversLicense = false;
const passTest = true;


// Using a wrong spelling intentionally here
if (passTest) hasDriverLicense = true;      //Uncaught ReferenceError: hasDriverLicense is not defined

if (hasDriversLicense) {
    console.log(`Yayy!! I can drive`);
}