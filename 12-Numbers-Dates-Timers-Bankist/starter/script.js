'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2023-12-01T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2023-12-02T10:36:17.929Z',
    '2023-12-04T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const calcMovementDate = function (date1, date2) {
  const daysPast = Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  if (daysPast === 0) return 'Today';
  if (daysPast === 1) return 'Yesterday';
  if (daysPast <= 7) return `${daysPast} days ago`;
};
// const formatMovementDate = function (movement) {
//   // const date = new Date(movement);
//   // const year = date.getFullYear();
//   // const month = `${date.getMonth() + 1}`.padStart(2, 0);
//   // const dayOfTheMonth = `${date.getDate()}`.padStart(2, 0);

//   const dateFormatted =
//     calcMovementDate(date, new Date()) || `${dayOfTheMonth}/${month}/${year}`;
//   return dateFormatted;
// };

const formatNumber = function (num, locale, options) {
  const formatted = new Intl.NumberFormat(locale, options).format(num);
  return formatted;
};

// Display Movements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  // const options = {
  //   // hour: 'numeric',
  //   // minute: 'numeric',
  //   day: 'numeric',
  //   //numeric, long, 2-digit, numeric
  //   month: 'numeric',
  //   //2-digit
  //   year: 'numeric',
  //   //short, narrow
  //   // weekday: 'long',
  // };

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const movementDate = new Date(acc.movementsDates[i]);
    const dateFormatted =
      calcMovementDate(movementDate, new Date()) ||
      new Intl.DateTimeFormat(acc.locale).format(movementDate);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${dateFormatted}</div>
        <div class="movements__value">${formatNumber(mov, acc.locale, {
          style: 'currency',
          currency: acc.currency,
        })}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatNumber(acc.balance, acc.locale, {
    style: 'currency',
    currency: acc.currency,
  })}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatNumber(incomes, acc.locale, {
    style: 'currency',
    currency: acc.currency,
  })}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatNumber(Math.abs(out), acc.locale, {
    style: 'currency',
    currency: acc.currency,
  })}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatNumber(interest, acc.locale, {
    style: 'currency',
    currency: acc.currency,
  })}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  //Set time to 5 minutes
  let time = 300;

  const tick = function () {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);
    //in each callback call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When time expires (0s), stop timer and lgoout user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    //Decrease time
    time--;
  };

  tick();

  //call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//FAKE ALWAYS IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Intl API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      //numeric, long, 2-digit, numeric
      month: 'numeric',
      //2-digit
      year: 'numeric',
      //short, narrow
      // weekday: 'long',
    };

    //getting the ISO language code from the user's browser with navigator.language
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const fullYear = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${fullYear}, ${hour}:${minutes}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

    // Check if timer is running and if so, clear it

    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    setTimeout(() => updateUI(currentAccount), 2500);

    // updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());

    //Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    setTimeout(() => updateUI(currentAccount), 2500);
    console.log(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// ------------------- Converting and Checking Numbers ----------- //

// In JavaScript all numbers are represented internally as Floating point numbers regardless of if it's written as a decimal or not, and numbers are always stored in a binary format

// Because of some weird behavior with certain number combinations like 0.1 + 0.2, JavaScript is not the best language for finacial calculations

//Base 10 = 0 to 9
//Binary base 2 = 0 1

// console.log(23 === 23.0); // true

//Converting string to a number
// console.log(Number('23'));
// console.log(+'23'); // This will return the number 23 due to type coercion

//Parse number from a string

//Number.parseInt(value, radix): It tries to get rid of unnecessary symbols that are not numbers. The numbers MUST come first before the characters. Radix is the base of the numeral system we are using. Spaces ahead of the number also will not impact the result. If it cannot convert the value to number, it will return NaN
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('px30', 10));

//Number.parseFloat(value, radix) : To read past the floatig point, must use parseFloat. If I try to convert a float with parseInt, the function will NOT capture digits after the floating point
// console.log(Number.parseFloat('   2.5rem', 10));

//Number.isNaN() - checks if a value is NaN

// console.log(Number.isNaN(20)); //false
// console.log(Number.isNaN('20')); //false
// console.log(Number.isNaN(+'20')); //false
// console.log(Number.isNaN(+'20X')); //true
// console.log(Number.isNaN(Number.parseInt('20px'))); //false

//Number.isFinite() - this the BEST way to check if a value is a number or not

// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20')); //false
// console.log(Number.isFinite(+'20'));
// console.log(Number.isFinite(+'20X')); //false
// console.log(Number.isFinite(Number.parseInt('20px'))); //false
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(-2));

//Another option is .isInteger()

//------------------------------- Math and Rounding ----------------------- //

//Math.sqrt(value) - gives the square root of a number
// console.log(Math.sqrt(25)); //5

//Math.max() - will return the max value. It DOES do type coercion but not parsing

// console.log(Math.max(3, 6, 8, '300', 25, 6)); //300

//Math.min() - will return the min value. It DOES do type coercion but not parsing

// console.log(Math.min(3, 6, 8, '300', 25, 6)); //3

// Math.PI - a constant on the Math namespace that is pi

//Math.random() - gives number between 0 - 0.999
//Math.trunc() - removes any decimal parts that result from Math.random
// console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(1, 4));

// Rounding integers with Math.trunc() - removes the decimal part
// console.log(Math.trunc(23.3));

//Math.round() - rounds to the nearest integer
// console.log(Math.round(23.4)); //23
// console.log(Math.round(23.5)); //24
// console.log(Math.round(23.6)); //24

//Math.ceil() - arounds rounds up

// console.log(Math.ceil(23.1)); // 24
// console.log(Math.ceil(23.2)); // 24

// Math.floor() - always rounds down
// console.log(Math.floor(23.6)); // 23
// console.log(Math.floor('23.8')); // 23

//All of these methods (round, ciel, floor, and I think trunc) all do type coercion

//trunc vs floor - both seem to act the same with positive numbers but with negaaive numbers, they behave differently

// console.log(Math.floor(-23.9)); // -24
// console.log(Math.trunc(-23.6)); // -23

// Rounding decimals

//.toFixed(num) - will add 0's until have the specified number after the decimal. to.Fixed will return a String
// console.log((2.7).toFixed(3)); // 2.700
// console.log(+(2.345).toFixed(2)); // 2.35

//Primitives do NOT have methods so behind the scenes, JavaScript does something called "boxing" and converts this to a number object and then converts it back to a string primitive

// -------------------- The remainder/modulo Operator % -------------------------- //
//The % operator will return the remainder
// console.log(5 % 2);
// console.log(8 % 3);

//One usecase of the mudulo operator is to check if a number is even or odd. A number is even if it is divisible by 2 with a 0 remainder.
// console.log(6 % 2);
// console.log(100 % 2);

// const evenOrOdd = num => (num % 2 === 0 ? 'Even' : 'Odd');
// console.log(evenOrOdd(50));

//--------------------- Numeric Separators -------------------------------- //
//They are underscores that I can place anywhere I want in between my numbers to make the number easier to understand and parse. The JavaScript engine will ignore these underscores. It gives meaning to certain parts of our numbers
//287,460,000,000
const diameter = 287_460_000_000;

const price = 345_99;
// console.log(price);

//These two hold the same number but the numeric separators give different meaning for us as developers
const transferFee1 = 15_00;
const transferFee2 = 1_500;

// --------------------------------- BigInt -------------------------- //
//Special type of integer

//This is the biggest number that JavaScript can safely represent and this is so important that it exists as a constant on the Number name space

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// Any integer larger than the one above is not safe and can therefore not be represented accurately

//Example of a number that is unsafe
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

//So as of ES2020 a new primitive was introduced called BigInt - big integer to represent numbers as big as I want. To make a number a bigint numbers I add an "n" at the end of the number
// console.log(237923545345435943543543324324323n);
// console.log(BigInt(234324343234234));
// console.log(234324343234234n);

//All of th mathematical operators work with BigInt as with regular numbers HOWEVER I CANNOT mix Big Int numbers with other types. Will need to convert the number to a bigint. There are two EXCEPTIONS which are the Comparison Operators and the + Operator when working with Strings

const huge = 13453543543569463934685573n;
// console.log(200n > 20);
// console.log(200n < 20);
// console.log(200n + BigInt(20));
// console.log(20n === 20); // false
// console.log(huge + ' is a really big number'); //Will coerce BigInt to a string

// ---------------------------- Dates and Times ------------------------------ //
// There are 4 Ways to create a Date in JavaScript
// ** The date is Zero Based so 9, will be October

// Will return the date and time at this very moment
const now2 = new Date();
// console.log(now2);
// console.log(new Date('10 14 1988 8:15'));

// console.log(new Date(3 * 24 * 60 * 60 * 1000));
//If I type 3 * 24 * 60 * 60 * 1000 in the console I get 259200000 which is a number and a time stamp

// Working with dates

// const future = new Date(2024, 9, 14, 8, 30);
// console.log(future);
//.getFullYear() - Called on the date object. Returns the year as a number. NEVER USE .getYear()
// console.log(future.getFullYear());
// .getMonth() - Called on the date object. Returns the month as a number. ** Remember the date is Zero Based so 9, will be October
// console.log(future.getMonth());
// .getDate() - Called on the date object. Returns the Day of the month as a number.
// console.log(future.getDate());
// .getDay() - Called on the date object. Returns the Day of the week as a number.
// console.log(future.getDay());
// .getHours() - Called on the date object. Returns the Hour as a number.
// console.log(future.getHours());
// .getMinutes() - Called on the date object. Returns the Minutes as a number.
// console.log(future.getMinutes());
// .getSeconds() - Called on the date object. Returns the Seconds as a number.
// console.log(future.getSeconds());
//.toISOString() - Called on the date object. Returns the date formatted in ISO standard
// console.log(future.toISOString());
//.getTime() - Called on the date object. Returns a timestamp of the date. A time stamp is the milliseconds that have passed since Jan 1st 1970.
// console.log(future.getTime());
// I can also use a time stamp to create a new date
// console.log(new Date(1728909000000));
// Date.now() - To get the time stamp for the current moment
// console.log(Date.now());

// -------------- Operations with Dates -------------------- //

const future = new Date(2024, 9, 14, 8, 30);

//Calculating how many days have passed between 2 dates
// console.log(Number(future)); // timestamp in milliseconds
// console.log(future.getTime()); // timestamp in milliseconds
// console.log(+future); // timestamp in milliseconds

const calcDaysBetween = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysBetween(new Date(2023, 11, 10), new Date(2023, 11, 15));
const days2 = calcDaysBetween(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(days1);
// console.log(days2);

// ---------------- Internationalizing Dates -------------- //
//Internationalization API - easily format numbers and strings according to different languages. It uses the Intl name space.
// I call the DateTimeFormat method on it and it creates a formatter for that language and locale
// ex: new Intl.DateTimeFormat("en-US")
// I then can call the format method on it
// new Intl.DateTimeFormat("en-US").format(value)

// In many situations, it make sense to not define the locale manually, but to get it from the user's browser
//getting the ISO language code from the user's browser with navigator.language
// const locale = navigator.language;

// -------------- Internationalizing Numbers --------------- //
//formats numbers
const num = 3884764.23;

const dateOptions = {
  //percent / currency
  style: 'currency',
  //'mile-per-hour'
  // unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

// console.log(
//   'US       ',
//   new Intl.NumberFormat('en-US', dateOptions).format(num)
// );
// console.log(
//   'Germany  ',
//   new Intl.NumberFormat('de-DE', dateOptions).format(num)
// );
// console.log(
//   'Syria    ',
//   new Intl.NumberFormat('ar-SY', dateOptions).format(num)
// );
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language).format(num)
// );

// --------------- Timers: setTimeout ans setInterval ----------------- //
//setTimout(callBack, millsecs, funcArgs) runs just once after a defined amount of time. Used to execute some code at some point in the future. This is async

//1 second is 1,000 milliseconds

const ingredients = ['mushrooms', 'feta'];

// const pizzaDelivery = setTimeout(
//   (ing1, ing2) =>
//     console.log(`Here is your pizza! 🍕 with ${ing1} and ${ing2}`),
//   3000,
//   ...ingredients
// );

// console.log('Before setTimeout');

// clearTimeout(timer) - Can cancel a timer as long as the full time has not past

// if (ingredients.includes('spinach')) clearTimeout(pizzaDelivery);

// setInterval(callBack, millimeters) continues to run until it is stopped

// const clock = function () {
//   console.log(
//     new Intl.DateTimeFormat('en-US', {
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//     }).format(new Date())
//   );
// };
// setInterval(clock, 1000);
