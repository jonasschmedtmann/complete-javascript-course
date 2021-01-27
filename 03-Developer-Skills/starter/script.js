// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let i = 1;
  let result = "";
  for (let temp of arr) {
    result += `... ${temp}C in ${i} days `;
    i++;
  }
  return result;
};

console.log(printForecast(data));
