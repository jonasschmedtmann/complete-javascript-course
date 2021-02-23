// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is the temp amplitude? Answer: difference between highest and lowest temp
// - How do you canlculate the highest and lowest temp in an array?
// - What's a sensor error? What to do when one occurs?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperature array
// - Find min value in temperature array
// - Subtract min from max and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitude([3, 7, 4]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitudeNew([3, 7, 4]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celsius`,

    // C) FIX BUG
    value: Number(prompt(`Degrees celsius:`)),
  };

  // B) FIND BUG
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY BUG

console.log(measureKelvin());
*/

//////////////////////////////////////
// CODING CHALLENGE 1

// Understand the problem
// - We need an array transformed to a string and separated by ...
// - What is the X days? index + 1

// Break up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1)

//PERSONAL NOTES: We are asked to output a string based on data inside of an array.
// - We need to understand that our goal is to essentially build a string.
// - We know that different arrays are going to have different lengths so we need to create a for loop inside of the function that will run the length.
// - We need to create a variable for the string to be stored in, so that we can return the string once the loop is complete.
// - Return only completes the loop for that cycle and adds the value calculated in that cycle to the string variable, then the loop will run again and concatenate the new value onto the old value, essentially BUILDING the string.
// - KEY POINT: THE STRING VARIABLE WE CREATE (STR) IS NOT REPLACED BY THE NEW VALUE WHEN THE LOOP RUNS AGAIN, THE NEW VALUE IS SIMPLY ADDED ONTO THE END.

const data1 = [17, 21, 23];
const data2 = [12, 5, 0, 4];

const printForecast = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days... `;
  }
  return console.log(str);
};

printForecast(data1);
printForecast(data2);
