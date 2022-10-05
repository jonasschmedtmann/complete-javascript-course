// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
    59: Using Google, StackOverflow and MDN
*/

// // Calculate temparature amplitude

// const temparatures = [3, -2, -6, -2, 'error', 9, 13, 17, 15, 14, 9, 5];

// // temparature amplitude -- difference btw. max & min temparatures

// // const calcAmplitude = (temparatures) => {
// const calcAmplitude = (t1, t2) => {

//     const temparatures = t1.concat(t2);

//     let max = temparatures[0];
//     let min = temparatures[0];

//     for (let i = 1; i < temparatures.length; i++) {
//         const curTemp = temparatures[i];
//         if (typeof curTemp !== 'number') continue;      // Skip if the temparature is not a number
//         // update the max number
//         if (curTemp > max) {
//             max = curTemp;
//         }
//         // update the min number
//         if (curTemp < min) {
//             min = curTemp;
//         }
//     }

//     return max - min;
// }

// // console.log(calcAmplitude(temparatures));
// console.log(calcAmplitude(temparatures, [23, 45, 12]));

/* 
    62: Coding Challenge #1
*/

const printForecast = (temps) => {

    let str = '... ';
    for (let i = 0; i < temps.length; i++) {
        str = str + `${temps[i]}C in ${i + 1} days... `;
    }
    console.log(str);
}


printForecast([12, 5, -5, 0, 4]);
printForecast([17, 21, 23]);


