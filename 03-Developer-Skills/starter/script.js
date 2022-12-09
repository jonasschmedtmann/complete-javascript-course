// Remember,  're gonna use strict mode in all scripts now!
'use strict';

//teting live server
// const x = 28;
// if (x === 23) console.log();

// const calcAge = birthYear => 2037 - birthYear;

// console.log(x);

// PROBLEM:
/* we work for a company building a smart home thermometer, our most recent task is this, 
- given an array of temps taken in one day - calc the tempaeratures amplitude keeping in mind tht on occasion there may be an error
*/

// use the methodology of "Divide and Conquor to solve this problem"
/* So, "Understanding the problem"
- What does amplitude mean?
- Answer: It is the diff between the highest and the lowest temp.
- How do we compute the max and min temps?
- WHat does a sensor err look like and how should it be handled?

//NOW - break up into sub-problems
- How to ignore errors
- How to find max val in temp array
- How to find min val in temp array
- subtract min from max and return val

*/

//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitudeBug = function (tempsArr1, tempsArr2) {
//   // solution from stack overflow
//   // For regular arrays:
//   // var max = Math.max(...arrayOfNumbers);

//   const tempsArr = tempsArr1.concat(tempsArr2);
//   console.log(tempsArr);
//   // For arrays with tens of thousands of items:
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < tempsArr.length; i++) {
//     const curTemp = tempsArr[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max - min);
//   return max - min;
// };

// const amplitudeNew = calcAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeNew);

// PROBLEM 2
// Function should receive two arrays of temps
// ask ???s - should we implemet new functionality? or merge current arrays
// So, how to merge two arrays?
// research how to do this, anser below from MDN

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// -------------------------------------------------DRBUGGING PRACTICE
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     // FIX HERE --
//     //value: Number(prompt('Degrees Celcius')),
//     value: 10,
//   };

//   //BUG FOUND addition is trying to add strings together
//   //console.log(measurement);
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) Identify Bug
// console.log(measureKelvin());
