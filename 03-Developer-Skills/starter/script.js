// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitud = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);

//   return max - min;
// };

// const amplitud = calcTempAmplitud(temperatures);
// console.log(amplitud);

// // PROBLEM 2:
// // Function should now receive 2 arrays of temps

// const calcTempAmplitudNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);

//   return max - min;
// };

// const amplitudNew = calcTempAmplitudNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudNew);

// const measureKelvin = function () {
//   const measurenent = {
//     type: 'temp',
//     unit: 'celsius',
//     value: 10,
//   };

//   console.log(measurenent);
//   console.log(measurenent.value);
//   // console.warn(measurenent.value);
//   // console.error(measurenent.value);

//   const kelvin = measurenent.value + 273;

//   return kelvin;
// };

// // a) Identifiy the bug
// console.log(measureKelvin());

// const calcTempAmplitudBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);

//   return max - min;
// };

// const amplitudBug = calcTempAmplitudBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudBug);

// ///////////////////
// Developer Skills & Editor Setup Coding Challenge #1
//
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:
//   1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
//   2. Use the problem-solving framework: Understand the problem and break it up into sub-problems! Test data:
//     § Data 1: [17, 21, 23]
//     § Data 2: [12, 5, -5, 0, 4] GOOD LUCK 😀

const tempArray = [17, 21, 23];
const tempArray2 = [12, 5, -5, 0, 4];
let display = '';

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const maxTemp = arr[i];
    display += `... ${maxTemp}ºC in ${i + 1} days `;
  }
  console.log(display);
};

printForecast(tempArray);
printForecast(tempArray2);
