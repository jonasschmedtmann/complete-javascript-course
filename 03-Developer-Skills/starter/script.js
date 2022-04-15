// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK �
*/

// psuedo
// 1.
// make an array of forecasted max temps
// the thermometer displays a string with the given temperatures
// the thermometer displays the temps with ºC and every value adds a day (17ºC in 1 days ... 21ºC in 2 days)
// create a function 'printForecast' which takes an array and logs a string like above ^ in console
// try with both test datasets

const forecastedMaxTemps = [17, 21, 23];
let thermometer = [];
for (let i = 0; i < forecastedMaxTemps.length; i++) {
  console.log(forecastedMaxTemps[i] + "ºC" + ` in ${i + 1} days`);
}

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days... `;
  }
  console.log(str);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);
