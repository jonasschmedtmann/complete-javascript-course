// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/**
//problem 1: array of temps, compute min, max and amplitude

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// what is amplitude and how to compute?
// how to computer max and min temps?
// how to handle sensor error?

let max;
let min;

// const calcTempAmplitude = function (temps) {
//   max = temps[0];
//   min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);

// console.log(amplitude);

//problem 2: receive 2 arrays of temps

const calcTempAmplitude2 = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  max = temps[0];
  min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const temp2 = [5, -2, -15, -2, 'error', 14, 23, 37, 45, 13, 7, 3];

const amplitude = calcTempAmplitude2(temperatures, temp2);

console.log(amplitude);



const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  // console.log(measurement);
  console.table(measurement);
  // console.warn(typeof measurement.value23);
  // console.error(typeof measurement.value23);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

*/

// array transformed to string separated by ...
// what is X days? index + 1

// break up array into string
// index + 1 added to string
// ... at start and end
// log to console

const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let output = '... ';
  for (let i = 0; i < arr.length; i++) {
    output += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  return output;
};

console.log(printForecast(t1));
console.log(printForecast(t2));
