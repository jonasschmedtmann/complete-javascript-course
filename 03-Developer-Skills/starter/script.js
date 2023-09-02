// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) {
//   console.log(23);
// }

// const calcAge = birthYear => 2037 - birthYear;

// console.log();

// Actually learning to code //
// Example John
// John didn't have a clear goal -> set a REAL goal, think of your career change and a big project you want to be able to build by the end of this course
// He just would copy code from tutorials without caring what any of it meant -> always learn what your code means, don't move on if you understand.  Always TYPE your code, don't copy and paste.  People learn by using, this is especially true for me.  It's ok to challenge yourself
// He got easily frustrated because his code wasn't immediately clean and efficient
// lost motivation because he didn't know everything
// learning in isolation, he never shared his work
// finished a couple of courses and thought he could just start applying to jobs, but he couldn't even build an app on his own
// it's not to late for john

/* YOU WILL NEVER KNOW EVERYTHING ABOUT WEB DEVELOPMENT

THAT'S OK

DON'T LOSE MOTIVATION AND DON'T COMPARE YOURSELF.
Lots of these guys have had years of consitent practice.  You can get there with time.

*/

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     value: Number(prompt('Degrees Celsius:')), // prompt ALWAYS returns a string,
//   };

//   console.log(measurement.value);
//   // console.warn and console.error are formatting for your debugging
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   // B) FIND
//   console.table(measurement); // table is a nice way of formatting objects in the console

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTIFY
// console.log(measureKelvin());

// // Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

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
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

//////////////////////
// Coding Challenge //
//////////////////////

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let index = 0; index < arr.length; index++) {
    str = str + `${arr[index]} Degrees Celcius on day ${index}...`;
    debugger;
  }
  console.console.log();
  str;
};

printForecast(data1);
printForecast(data2);
