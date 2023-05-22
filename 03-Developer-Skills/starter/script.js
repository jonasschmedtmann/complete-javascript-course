// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//challenge 1

const arr = [17, 21, 23];

const printForecast = function(arr) {
    let days = 0;
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        days++;
        string += `... ${arr[i]} degC in ${days} days `;
    }
    return string;
};

console.log(printForecast(arr));
