// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

// TODO, FIXME, BUG, FIXED, LEC,  etc.

// -------------------------------- PROBLEM 1 --------------------------------

// Using Google, StackOverflow and MDN

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem:
// - What is temp amplitude? Answer: difference between highest and lowest temp.
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do when one occurs? Do we ignore it?

// 2) Breaking up into sub-problems:
// - How to ignore errors?
// - Find max value in temp array.
// - Find min value in temp array.
// - Subtract min from max (amplitude) and return it.

// ---------------- Answer ----------------

// Whenever we have a task like this, it's a good idea to at least start with a function.

const calcTempAmplitude = function (temps) {
  let max = temps[0]; // Assumes the very first element of the array is the maximum, because we haven't started looping yet
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue; // Commenting this out doesn't seem to actually break it

    if (currentTemp > max) {
      max = currentTemp; // If the current value of the array is greater than the current maximum value, the maximum value will become this new value
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  //   console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 600]); // Max is 3, then is 3 > 3, no it's not, so is 7 > 3?, yes it is, so max = 7, then is 4 > 7, no it's not. So max is 7
// calcTempAmplitude(temperatures);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// -------------------------------- PROBLEM 2 --------------------------------

// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays // Don't really need anymore sub-problems than this

// ---------------- Answer ----------------

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// ----------------------------------------------------------------

const measureKevin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };

  // B) FIND
  // console.log(measurement); // This shows the problem: the value is a string, not a number. Prompt always returns a string, no matter what we enter
  // console.table(measurement); // Helpful especially for bigger objects

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A). IDENTIFY
// console.log(measureKevin());

// ----------------------------------------------------------------

// Debugging in Chrome/Brave

// Go to the Sources tab. You can add breakpoints by clicking next to the line number on the left. Then, when you reload the page, the execution will stop at exactly this point. It will essentially freeze and show what the execution looks like at exactly that moment, including all the values of all the defined variables.
// You can click the resume execution button (F8 or Ctrl\). Under Scope and then Local, you should see all the variables (in this case: kelvin, measurement, and this)? (Can't seem to replicate it myself, either on Brave or Chrome)

// ----------------------------------------------------------------

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  // let max = temps[0];
  // let min = temps[0];
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);

// You can click on the next step button to progress through manually
