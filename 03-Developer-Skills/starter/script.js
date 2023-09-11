// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
  let forecast = '...';
  for (let i = 0; i < arr.length; i++) {
    forecast = forecast + ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log(forecast);
};

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

printForecast(arr1);
printForecast(arr2);
