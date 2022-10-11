// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Debugging with the Console and Breakpoints
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) FIX
//     value: Number(prompt('Degrees celsius:')),
//   };

//   // B) FIND
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);
  
//     let max = 0;
//     let min = 0;
  
//     for (let i = 0; i < temps.length; i++) {
//       const curTemp = temps[i];
//       if (typeof curTemp !== 'number') continue;
        
//       debugger;
//       if (curTemp > max) max = curTemp;
//       if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
//   };
//   const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
//   console.log(amplitudeBug);

// 1

// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]

//receive the temperatures in the array
//log the console

const printForecast = array => {
    let result = '...';
    for(let i = 0; i < array.length; i++) {
        result += ` ${array[i]}ºC in ${i + 1} days ...`;
    }
    console.log(result);
}