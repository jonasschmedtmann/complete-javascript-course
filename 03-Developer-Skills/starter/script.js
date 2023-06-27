// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// // PROBLEM - get min, max, eeror amplitude => with 1 array
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
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
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM - get min, max, eeror amplitude => with 2 array
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (t1, t2) {
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
// const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);

// DEBUGGING
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) FIX
//     value: Number(prompt('Degrees celsius:')),
//   };

//   // B) FIND
//   console.log(measurement);
//   console.table(measurement);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTIFY
// console.log(measureKelvin());

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

// 1) Understanding the problem
// - Array transformed to string, separated by thee ...
// - What is the X days? NSWER: INDEX + 1
// 2) Breaking up into sub-problems
// - Transform array into a string
// - Transform each element to string with C
// - Add ... between elements and start and end oif string
// - Log str to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(`... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[1]}°C ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data2);
