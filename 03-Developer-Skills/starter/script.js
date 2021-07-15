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




// Debugging Your Code

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // FIX
        value: Number(prompt('Degrees celsius:'))
    };

    console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());


// /////////////////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17C in 1 days..... 21C in 2 days...23C in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the aboe to the console. 

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TESTE DATA 2: -12, 5, -5, 0, 4]
*/

// 1. Understanding the question 

// My Solution 
array1 = [17, 21, 23];

array2 = [-12, 5, -5, 0, 4];

const printForecast = (arr) => {

    for (i = 0; i < arr.length; i++) {
        const curTemp = arr[i];
        const forecastDay = i + 1;
        // const day = forecastDay++;

        console.log(`....${curTemp}C in ${forecastDay} days`);
    }

}


//Instructor's solution 
// A. Transform the Array into a string 
// B. Strings needs to contain day (index + 1)

const data1 = [17, 21, 23];
const data2 = [-12, 5, -5, 0, 4];

const printForecast = function(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}C in ${i + 1} days ... `
            // str += `${arr[i]}C in ${i + 1} days ... `

    }
    console.log('...' + str);
}