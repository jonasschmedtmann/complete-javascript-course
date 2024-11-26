// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const words = new Array("I", "am", "Abdul", "Barri", "Lawal");

const smash = function (words) {
    return words.join(" ");
};

console.log(smash(words));

// Developer Skills & Editor Setup

// Coding Challenge 1

const data1 = new Array(17, 21, 23);
const data2 = new Array(12, 5, -5, 0, 4);

const printForecast = function (arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    return "... " + str;
}

console.log(printForecast(data1));