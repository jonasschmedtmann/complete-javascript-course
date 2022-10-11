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
    '2020-05-08T14:11:59.604Z',
    '2022-05-14T17:01:17.194Z',
    '2022-05-16T23:36:17.929Z',
    '2022-05-18T10:51:36.790Z',
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
    '2022-05-15T18:49:59.371Z',
    '2022-05-18T12:01:20.894Z',
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
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // else {
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // }
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCur(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCur(incomes, acc.locale, acc.currency)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCur(
    Math.abs(out),
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCur(
    interest,
    acc.locale,
    acc.currency
  )}`;
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

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each call, print remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    //Decrease 1 second
    time--;
  };
  //Set time to 5 min
  let time = 120;

  //Call the times every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//Experimenting with the API

//Create current date
// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = now.getHours();
// const min = now.getMinutes();
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

//day/month/year

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric', //2-digit
      //weekday: 'long', //short
    };
    //const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
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

    // Update UI
    updateUI(currentAccount);

    //Reset the timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);

      //Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';

  //Reset the timer
  clearInterval(timer);
  timer = startLogOutTimer();
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
/*
console.log(23 === 23.0); //true
//they are saved in binary form 0 - 1
//base 10 - 0 - 9 ex: 1/10 = 0.1; 3/10 = 0.33333
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); //false (!!! Accept that error)

//Conversion string to numbers. works the same
console.log(Number('23'));
console.log(+'23');

//Parsing - parse a number to a string
//radix - specifies if we are working with base 10 or binary (2)
console.log(Number.parseInt('30px', 10)); //it can have letters. JS will look for numbers
console.log(Number.parseInt('e30')); //it has to start with numbers!

//ParseFloat Function to get the decimal numbers
console.log(Number.parseFloat(' 2.5rem'));
console.log(Number.parseInt(' 2.5rem'));

//isNAN - check if the value is not a number
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20'));  //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false

//isfinite is the best way to check if the value is a number
console.log(Number.isFinite(+'20X'));//false
console.log(Number.isFinite(23 / 0));//false
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false

*/
/*
//MATH
console.log(Math.sqrt(25)); //square root
console.log(8 ** (1 / 3)); //calculate cubic root

console.log(Math.max(2, 4, 5, '23', 6, 12)); //23
console.log(Math.max(2, 4, 5, '23px', 6, 12)); //NAN
console.log(Math.min(2, 4, 5, '23', 6, 12)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2);

//DICE ROLL
console.log(Math.floor(Math.random() * 6 + 1));

//0 ..... 1 -> 0 .... (max-min) -> min...max
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

/////////Rounding integers
console.log(Math.trunc(23.9)); //23
console.log(Math.round(34, 9)); //35

//Rounded up
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

//Rounded down
console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23

//Floor is better than trunc because is works with negative numbers too
console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24

///////Rounding decimals
console.log((2.7).toFixed(0)); //3 - Always returns a string
console.log((2.7).toFixed(3)); //2.700
console.log(+(2.7).toFixed(2)); //Converted into a number because of the + sign


/////REMINDER OPERATOR ///////
console.log(5 % 2); //1
console.log(5 / 2);
console.log(8 % 3); //2
console.log(8 / 2); // 8 = 2 * 3 + 2

//even or odd
console.log(6 % 2 === 0); //even - true
console.log(7 % 2 === 0); //not even false

const isEven = n => n % 2 === 0;

console.log(isEven(45)); //false
console.log(isEven(21)); //false
console.log(isEven(2)); //true

//use the spread operators to create a new array
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
  });
});


////////Numeric Separators/////// 
//287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); //287460000000

const price = 345_99;
console.log(price); //34599

const transferFee1= 15_00;
const transferFee2 = 1_500;

const PI = 3.1415; //_ not allowed in the beggining, before and after dots
console.log(PI);

//Only use the separators in the code and numbers
console.log(Number('230_000')); //NaN
console.log(parseInt('230_000')); //230

////////BigInt//////
console.log(2 ** 53 - 1); //that's the biggest number JS can use accuratly
console.log(Number.MAX_SAFE_INTEGER); //same as prior

//BIGINT - We can need numbers bigger than the previous
console.log(12354363937659475275382634762476113241n);
console.log(BigInt(1235436393765947)); //this should beused only with smaller numbers

//Operations
console.log(10000n + 10000n); //20000n
console.log(1840732952176532n * 10000000n); //18407329521765320000000n
//console.log(Math.sqrt(16n)); //ERROR - does not convert bigint to number

const huge = 29821476529n;
const num = 23;
//console.log(huge * num); //ERROR - cannot mix bigInt with other types
console.log(huge * BigInt(num)); //685893960167n

console.log(20n > 10); //true
console.log(20n === 20); //false. Cause 20n is type bigint
console.log(20n == 20); //true

console.log(huge + ' is really big!!!!'); //works

//Divisions
console.log(10n / 3n); // 3 - returns the closest bigint (cuts the decimal part)
console.log(11n / 3n); // also 3


////////DATES METHODS ///////

//Create a date
const now = new Date();
console.log(now);

console.log(new Date('Tue May 17 2022 14:39:30 GMT+0100'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

//Month is 0 based
console.log(new Date(2037, 10, 19, 15, 5)); //year, month, day, hours, min, seconds
console.log(new Date(1992, 8, 28));
console.log(new Date (2037, 10, 31)); //If it doesn't exist he will go to the next day

console.log(new Date(0)); //beggining of unix time -January 1st 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //Converted to miliseconds 3 days

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); // 10 (November) - 0 based
console.log(future.getDate()); //19 day
console.log(future.getDay()); //weekday
console.log(future.getHours()); // 15 hours
console.log(future.getMinutes()); //23 min
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //Follows an international standard - 2037-11-19T15:23:00.000Z
console.log(future.getTime()); //Is the milliseconds that passed since the beggining of unix time

console.log(new Date(2142256980000)); //Gives us a date using the timestamp

console.log(Date.now()); //1652795610224 - gives us the timestamps of now

future.setFullYear(2040); //Changes the  year
//you can set day, date aswell
console.log(future);


//////Operations with dates//////

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcaDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcaDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);


///////Internationalization API - dates are different between countries /////
//const now = new Date();
//for dates we use the .DateTimeFormat that takes the local and then format that takes the date
//labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);

//insternationalizing numbers
const num = 32543346.23;

const options = {
  style: 'currency', //unit, currency and percentage
  unit: 'celsius',
  currency: 'EUR', //if it's currency we need to specify. It's not defined by country
  //useGrouping: false
}
console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num));


///////TIMERS//////
//SetTimeOut - runs just once after a definned time, receives a callback function
//SetInterval - runs forever untill we stop it

//Assincrony JS
//SetTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
); //the first argument is a function, the second is the time in MS

console.log('Waiting...');

//How to stop the timer
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

setInterval(() => {
  const now = new Date();
  console.log(new Intl.DateTimeFormat('pt-PT', {hour: 'numeric', minute: 'numeric', second: 'numeric'}).format(now));
}, 3000);
*/
