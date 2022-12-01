// Remember,  're gonna use strict mode in all scripts now!
'use strict';
/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 
*/

// P.S Framework
//1. break into bite size prablems
//1 -- create an array of forecasted "MAX TEMPs"
const maxTemps = [17, 21, 23];
const maxTemps2 = [12, 5, -5, 0, 4];

// 2 -- the thermometer will display a string i.e; Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// note alt key + 0176 will add the deg char
const degC = '°C...';

// 3 -- Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if(i === 0){
      console.log(`Today the forcast predicts a high of ${arr[i]}${degC}`);
    }else{
      console.log(`In ${i} days the forcast predicts a high of ${arr[i]}${degC}`);
    }     
  }
};

printForecast(maxTemps2);
