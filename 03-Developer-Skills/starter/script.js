// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// problem :
// conver array of tempratures to string in thermometer like this
// "...17 ْc in 1day... 20 ْc in 2day ... 23 ْc in 3day ..."

// TODO :
// - transform array to num ْC in {ind} day .
// - convert array to string with ... at start and end and between them .

let printForecast = (arr) => {
    let NumToStrArr = arr.map(
      (item, ind) => item.toString() + ` ْC in ${ind + 1} day`
    );
    let convertedToStr = NumToStrArr.join("...");
    return `... ${convertedToStr} ...`;
  };
  
  let arr = [17, 20, -6, 10];
  
  console.log(printForecast(arr));