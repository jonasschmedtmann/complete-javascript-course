// Numbers are represented internally as 64bits : there are exactly 64 combinations of 1's and 0's to represent any given number. Only 53 are used to store the digits themselves, the rest are for storing the posotion of the decimal point and the sign.
// // BASE 10 : # 0 - 9
// // BASE 2 : # 0 and 1

// console.log(0.1 + 0.2)


// /* ********************
// ***** type coercion *****  
// converting a value from data type to another: In JavaScript, 
// type coercion happens implicitly when operators or functions
//  are applied to values of different types
// */
// console.log(Number('2'));
// console.log(+'2');



// /* ********************
// ***** parseInt & parseFloat ***** 
// Number.parseInt( value, redix (base 10 or base 2?)), default is 10 
// Number.parseFloat() best use: when reading # value from string
// */

// console.log(Number.parseInt('20px', 10)); // 20
// console.log(Number.parseInt('e23')); // NaN must start with number to use parseInt

// console.log(Number.parseFloat('    2.5 rem')); // 2.5 -- returns floating number (decimal)
// console.log(Number.parseInt('  2.5  rem')); // 2 -- gives back just integer



// /* ********************
// ***** Number.isNaN() best use: to check if value is NaN *****
// .isNaN checks if a value is a NOT a number, if it's a number 'false', if not a num 'true'
// */
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN('20')); // false

// console.log(Number.isNaN(+'20x')); //true bc 
// console.log(+'20x');// NaN

// console.log(Number.isNaN(23 / 0)); //false
// /* 
// anyNumber / 0 = infinity therefore NOT A NUMBER
// Number.isNaN(infinity) SHOULD === true; this is a bug 
// use Number.isFinite() instead to avoid this bug
// */


// // ********************
// // ***** Number.isFinite() best use: check if a value is a real number *****
// console.log(Number.isFinite(23)); // true
// console.log(Number.isFinite('23')); // false -- this is a string
// console.log(Number.isFinite(+'23')); // true -- using + operand, we converted 23 to a Number
// console.log(Number.isFinite(+'23X')); // false -- +'23x' is NaN
// console.log(Number.isFinite(23 / 0)); // false -- infinity is NOT finite



// console.log(Math.sqrt(25)); // calc sqrt of a value
// console.log(25 ** (1 / 2)); // calc sqrt using exponent
// console.log(8 ** (1 / 3)); // calc cubic root

// console.log(Math.max(5, 18, 23, 11, 2)); // returns max value
// console.log(Math.max(5, 18, '23', 11, 2)); // converts strings to nums using type coercion
// console.log(Math.max(5, 18, '23X', 11, 2)); // NaN bc '23X' only converts to number using parseInt or parseFloat

// console.log(Math.min(5, 18, 23, 11, 2)); // returns min value

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// // generating random number
// console.log(Math.random()); // returns random decimal value between 0 and 1
// console.log(Math.trunc(Math.random() * 6) + 1); // returns random int between 0 and 6, without + 1 it would generate nums between 0 and 5 bc Math.trunc truncks the number down 


// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + 1) + min;
// };
// /* 
// Math.random() generates num between 0 and 1
// math.random() * (max - min)... + min  ensures that we generate a number b/w the max and the min set
// */
// console.log(randomInt(10, 20))

// // ROUNDING INTEGERS
// console.log(Math.trunc(23.3)); // 23 -- removes decimal
// console.log(Math.trunc('23.6')); // 23 -- removes decimal

// console.log(Math.round('23.3')); // 23 -- rounds to nearest int
// console.log(Math.round(23.6)); // 24

// console.log(Math.ceil('23.3'));  // 24 -- rounds up to nearest int ( ceiling -> UP )
// console.log(Math.ceil(23.6)); // 24

// console.log(Math.floor(23.3)); // 23 -- rounds down to nearest int ( floor -> DOWN )
// console.log(Math.floor('23.6')); // 23 

// console.log(Math.trunc(-23.3)); // -23 : drops decimal
// console.log(Math.floor(-23.3)); // -24 : rounds down to nearest whole int, negative values -24.. -23.3 ... -23
// // Math.floor works better for negative values

// // ROUNDING DECIMALS
// console.log((2.7).toFixed(2)); // toFixed returns a STRING
// console.log(+(2.345).toFixed(2)); // convert string back to number using + operand

// // console.log(('234.092').toFixed(2)); // does not work on strings!


// **************** REMAINDER OPERATOR % ****************
// console.log(5 % 2); // 1

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(2))
// console.log(isEven(82734))
// console.log(isEven(9))

// document.querySelectorAll('.movements__row'); gives a node list so we spread it into an array so that we can manipulate it

/*
labelBalance.addEventListener('click', () => {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {

    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangeRed';
    }

    if (i % 3 === 0) {
      row.style.backgroundColor = 'blue';
    }
  })
});

if you need to do something every nth time, using the % operator is a helpful tool.
Do x other one: % 2
do x every 3 : % 3
do x every n time: % n
*/

// NUMERIC SEPARATORS
/*
// using underscores to give meaning to certain parts of numbers
// underscores: cannot come at end or beginning, cannot be directly adjacent to a ., cannot place two _ in a row

// 287,460,000,000
const largeNum = 278_460_000_000;
console.log(largeNum); //278460000000

const price = 345_99;
console.log(price);

const transferFee = 15_00;
const transferFee2 = 1_500;

const pie = 3.14_15;
console.log(pie);

console.log(Number('230_000')); // NaN -- cannot convert _ to number
console.log(Number.parseInt('230_000')); // 230 -- parseInt registers _ as non-numeric character so it ignores everything after it
*/

// BIG INT Data Type: introduced in ES6 to accomodate big numbers
/*
const limitThatJSCanSafelyRepresent = 2 ** 53 - 1;
console.log(limitThatJSCanSafelyRepresent); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
// anything larger than 9007199254740991 is considered an "unsafe" number aka unpredictable or inaccurate

// VSCODE: Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers

let bigIntEx1 = 77471992547409911532124;
console.log(bigIntEx1); //7.747199254740992e+22

console.log(77471992547409911532124n); //77471992547409911532124n
console.log(BigInt(77471992547409911532124)); //77471992547409917902848n

// operations must be done between bigInts only. cannot mix reg nums and bigInts

const huge = 35461878176546546504n;
const small = 23;

console.log(huge * small); //Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(small)); //815623198060570569592n

// because Math.method() can only operate on Numbers, it does not work on BigInt
// console.log(Math.sqrt(16n)); // uncaught typeError
*/

// ******** DATES AND TIMES ********
/*
// create a date
let now = new Date();
// console.log(now)

console.log(new Date('Jul 19 2023 13:53:07'));
console.log(new Date('December 13, 1996'));
console.log(account1.movementsDates[0]); //2019-11-18T21:31:17.178Z
console.log(new Date(account1.movementsDates[0])); //Mon Nov 18 2019 16:31:17 GMT-0500 (Eastern Standard Time)

// year, month, day, hour, minutes, seconds
console.log(new Date(2035, 10, 19, 15, 23, 5)); //Mon Nov 19 2035 15:23:05 GMT-0500
console.log(new Date(2035, 10, 33)); //Mon Dec 03 2035 00:00:00 GMT-0500

console.log(new Date(0)); //Wed Dec 31 1969 19:00:00 GMT-0500

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); // 0 based; 0 = jan so 10 = nov
console.log(future.getDate()); //19
console.log(future.getDay()); // day of the week 4
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); //2037-11-19T20:23:00.000Z
console.log(future.getTime()); // 2142274980000 (ms that have passed since Jan 1st, 1970. called a timestamp)
console.log(new Date(2142274980000));
console.log(Date.now()); //gives time stamp

future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040 15:23:00 GMT-0500
*/
/*
const future = new Date(2023, 10, 19, 15, 23);
console.log(future); //Thu Nov 19 2037 15:23:00 GMT-0500
console.log(Number(future)); //2142274980000 -- converts date to number type timestamp
console.log(+future); // + operator to convert to number type timestamp

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
// 1000ms/s, 60 s/min, 60 min/hr, 24 hr/day = dayspassed

const results1 = calcDaysPassed(new Date(), future);
console.log(results1);
*/

// *********** WORKING WITH Intl.NumberFormat(locale, options).format(valueYouWantFormatted)***********
/*
const num = 3884764.23;
console.log('US: ', new Intl.NumberFormat('en-US').format(num)); //3,884,764.23
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(num)); // 3.884.764,23
console.log('Syria: ', new Intl.NumberFormat('ar-SY').format(num)); // ٣٬٨٨٤٬٧٦٤٫٢٣

console.log(
  navigator.language, //get locale from browser
  new Intl.NumberFormat(navigator.language).format(num)
); // en-US 3,884,764.23

const options = {
  style: 'unit', //unit, percent, currency
  unit: 'mile-per-hour'
};
console.log('US: ', new Intl.NumberFormat('en-US', options).format(num)); //3,884,764.23 mph
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num)); // 3.884.764,23 mi/h

options.unit = 'celsius'; //different units available
console.log(
  'Germany: ',
  new Intl.NumberFormat('de-DE', options).format(num)
); //Germany:  3.884.764,23 °C

options.style = 'percent';
console.log(
  'Germany: ',
  new Intl.NumberFormat('de-DE', options).format(num)
); //Germany:  388.476.423 %

options.style = 'currency'; //change style
options.currency = 'EUR'; // create currency property and assign a value
console.log(
  'Germany: ',
  new Intl.NumberFormat('de-DE', options).format(num)
); //Germany:  3.884.764,23 €

console.log(
  'US: ',
  new Intl.NumberFormat('en-US', options).format(num)
); // US:  €3,884,764.23

options.useGrouping = false;
console.log(
  'US: ',
  new Intl.NumberFormat('en-US', options).format(num)
); // US:  €3884764.23

options.useGrouping = true; //default set to true
console.log(
  'US: ',
  new Intl.NumberFormat('en-US', options).format(num)
); // US:  €3,884,764.23

// EXPERIMENTING WITH INTERNATIONALIZATION API to accomodate for different languages and timezones
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: '2-digit',
      month: '2-digit', // can do 'long', 'numeric'
      year: 'numeric',
      weekday: 'short' // long, short, narrow options
    };
    const localeInfo = navigator.language; //gets locale sting data from user browser

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options)
      .format(now);
*/


// ******** SET TIMEOUT *********
/*
const ingredients = ['pineapple', 'onions'];
const pizzaReadyTimer = setTimeout(
  (ing1, ing2) => console.log(`Your ${ing1} and ${ing2} pizza is ready! 🍕`),
  3000,
  ...ingredients, //passing in arguments to use as params in ^^ callback fn
);
console.log('Pizza order placed')

if (ingredients.includes('spinach')) clearTimeout(pizzaReadyTimer);

setTimeout(() => console.log('starting pizza... 🎬'), 1000);
setTimeout(() => console.log('in progress... 💪🏻'), 2000);
*/

const timer = () => {
  setInterval(() => {
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat(navigator.language, {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    }).format(now);
    console.log(formattedDate);
  }, 3000)
};

// timer();
