'use strict';
const maxTemparature = [12, 5, -5, 0, 4];
const printForecast = maxTemparature => {
  let i = 0;
  let printVariable = '';
  while (i < maxTemparature.length) {
    printVariable += `... ${maxTemparature[i++]} centigrade in ${i} days `;
  }
  return printVariable;
};

console.log(printForecast(maxTemparature));
