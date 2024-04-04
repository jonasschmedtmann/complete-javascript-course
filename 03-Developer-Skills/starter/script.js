// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -4, 0, 4];

// function that takes a temp and number to return a string in the right format
//function that takes in an array and formats the arr

const printForecast = function (arr) {
  let forecast = '... ';
  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}*C in ${i + 1} days ... `;
  }
  return forecast;
};

console.log(printForecast(temps1));
console.log(printForecast(temps2));
