// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
// //PRETTIER-CODE FORMATTER
// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log();
// console.log();

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -  What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And waht does it do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; // Great ex. "Don't repeat yourself!"
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//PROBLEM 2:
//Function should now receive 2 arrays of temps
//1) Understanding the problem
// - With 2 arrays, shoudl we implement functionality twice? NO, just merge two arrays

//2) Breaking up into sub-problems
// - How to merge 2 arrays? Merge 2 arrays!


//Lesson: Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees Celcius:')),
    value: 10,
  };
  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  // B) FIX BUG 👇
  // let max = 0;
  // let min = 0;

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; // Great ex. "Don't repeat yourself!"
    if (typeof curTemp !== 'number') continue;

    debugger; //built in debugger keyword that will automatically jump to this point
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//A) IDENTIFY 🐛🐛
console.log(amplitudeBug);

*/

//////////////////////// Section 5: Coding Challenge #1 ///////////////////////////

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. 

Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:

1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.


2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
* Data 1: [17, 21, 23]
* Data 2: [12, 5, -5, 0, 4]


const degreeCelsius = "\u2103";
const days = [1, 2, 3, 4, 5];

function printForecast(arr) {
  //const forcastDays = []; // Didn't need the empty array
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}${degreeCelsius} in ${i + 1} days ... `;
  }
  console.log(" ... " + str);
}
// const data1 = printForecast([17, 21, 23]);
const data2 = printForecast([12, 5, -5, 0, 4]);

// console.log(degreeCelsius);

// const arr = [17, 21, 23];
// const thermometer = `...${arr[i]}${degreeCelsius} in ${days[i]} days ... ${arr[i]}${degreeCelsius} ... `;

// console.log(thermometer);

// 1) Understanding the problem
// - Array transformaed to string, seperated by ...
// //
// `...${arr[i]}${degreeCelsius} in ${arr.length[i]} days ... ${arr[i]}${degreeCelsius} ...in ${days[i]} days ...  ${arr[i]}${degreeCelsius} ...in ${days[i]} days ... `

*/

//////////////////////// Section 5: Coding Challenge #1  COMPLETE ///////////////////////////
