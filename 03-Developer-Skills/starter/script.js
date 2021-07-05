// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM:

// A company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1. Understanding the problem
// - What is temp amplitude? Answer: Highest temp - Lowest temp
// - How to compute the max and min temperature? 
// - What's a sensor error? 

// 2) Breaking up into sub-problems
// - ignore errors 
// - Find max value in array
// - Find min value in array
// - subtract min from max (ampltitude) and return it

calcTempAplitude = function(temps) {

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
}

const amplitude = calcTempAplitude(temperature);
console.log(amplitude);