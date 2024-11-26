// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const temperature = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];
const temperature1 = [2, 5, 19, -9, 22];

const calcAmp = function (temp1, temp2) {
  const temps = temp1.concat(temp2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcAmp(temperature, temperature1);
console.log(amplitude);
// task is to convert temperature to amplitude

// what is amplitude

// how to convert termperature to amplitude
// max - min is amplitude

// what to do with error
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius:'),
  };
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin(10));

const hi = 'hi';
if (x === 23) console.log(23);
console.log();
*/

//Coding Challenge #1
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
/*
 ... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
*/

const printForecast = function (arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += ` ${arr[i]} in ${i + 1} days ...`;
  }
  console.log('...' + string);
};

printForecast(data1);
printForecast(data2);
