// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);
// console.log();

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17,  15, 14, 9, 5];

// const calcTampApmlitude = function(temps){
//     let max = temps[0];
//     let min = temps[0];

//     for(let i = 0; i<temps.length; i++){
//         const curTemp = temps[i];
       
//         if(typeof curTemp !== 'number') continue

//         if(curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     } 
//     console.log(max, min);
//     return max - min;



// }
// const amplitude = calcTampApmlitude(temperatures);
// console.log(amplitude);

// // merge 2 arrays //

// const calcTampApmlitudeNew = function(t1, t2){

//      const temps = t1.concat(t2);
//      console.log(temps);

//     let max = temps[0];
//     let min = temps[0];

//     for(let i = 0; i<temps.length; i++){
//         const curTemp = temps[i];
       
//         if(typeof curTemp !== 'number') continue

//         if(curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     } 
//     console.log(max, min);
//     return max - min;



// }
// const amplitudeNew = calcTampApmlitudeNew([1, 5, 8,], [0, 4, 10]);
// console.log(amplitudeNew);

// Code Challenge #1//
 
// 1) underting the problem
// - Array transformed to string, separeted by ...
// - what is the x days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ℃
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - log string to the console.

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr){
    let str = '';
    for(let i = 0; i<arr.length; i++){
        str+= `... ${arr[i]}℃ in ${i + 1} days`
    }
    console.log(str + ' ...');
}

printForecast(data1);
printForecast(data2);