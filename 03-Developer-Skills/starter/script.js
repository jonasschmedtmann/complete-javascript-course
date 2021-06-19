// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degree Celsius'),
  };
  debugger;
  const kelvin = measurement.value + 273;
  debugger;
  return kelvin;
};

console.log(measureKelvin());
*/

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
let output = '';

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1 && typeof arr[i] !== 'number') {
      continue;
    } else output += `... ${arr[i]}℃ in ${i + 1} days `;
  }

  console.log(output);
};

printForecast(arr1);
printForecast(arr2);
