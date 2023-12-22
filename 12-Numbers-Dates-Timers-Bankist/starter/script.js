'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//// Area of a circle
//console.log(`Area = ${Math.PI * Number.parseFloat('10rem') ** 2}`);
//
//// Random Number
//console.log(`Random = ${Math.trunc(Math.random() * 6) + 1}`);
//
//const RandomInt = (min, max) =>
//  Math.floor(Math.random() * (max - min) + 1) + min;
//console.log(`Random3to5 = ${RandomInt(3, 5)}`);
//
//// Rounding integers
//Math.trunc(23.3322);
//
//Math.round(23.3);
//
//Math.ceil(23.3);
//
//Math.floor(23.3);
//
//// Rounding decimals
//console.log(`--- Rounding Decimals ---`);
//console.log(`(2.5).toFixed(4) = ${(2.5).toFixed(4)}`);
//
//// Numeric Seperators
//const diameter = 286_689_000_000;
//console.log(diameter);
//
//const priceCents = 234_99;
//
//const PI = 3.1415;
//console.log(PI);
//
//console.log(Number('230_000'));
//console.log(parseInt('230_000'));
//
//// BigInt ()
//console.log(Number.MAX_SAFE_INTEGER);
//console.log(BigInt(2 ** 55));
//console.log(20n === 20);
//console.log(20n == 20);
//
//// Dates
//const now = new Date();
//console.log(now);
//console.log(new Date('2023, 11, 20'));
//console.log(new Date(0));
//console.log(new Date(3 * 24 * 60 * 60 * 1000));
//
//const future = new Date(2037, 10, 19, 15, 23);
//console.log(future);
//console.log(future.getFullYear());
//console.log(future.getMonth());
//console.log(future.getDate());
//console.log(future.getDay());
//console.log(future.getMinutes());
//console.log(future.getSeconds());
//console.log(future.getMilliseconds());
//console.log(future.toISOString());
//console.log(future.getTime());
//
//console.log(new Date(future.getTime()));
//
const num = 23489334.234;
const numOptions = {
  style: 'currency',
  //unit: '',
  currency: 'USD',
};
console.log('US: ', new Intl.NumberFormat('en-US', numOptions).format(num));
console.log(
  'Germany: ',
  new Intl.NumberFormat('de-DE', numOptions).format(num)
);

const CalcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
console.log(CalcDaysPassed(new Date(2037, 3, 23), new Date(2037, 3, 12)));

const ingredients = ['olives', 'cheese'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is you pizza 🍕 w/ ${ing1} and ${ing2}`),
  4000,
  ...ingredients
);

if (ingredients.includes('cheese')) clearTimeout(pizzaTimer);

//setInterval(() => {
//  console.clear();
//  const date = new Date();
//  console.log(
//    Intl.DateTimeFormat('en-US', {
//      hour: 'numeric',
//      minute: 'numeric',
//      second: 'numeric',
//    }).format(date)
//  );
//}, 1000);
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
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2023-12-17T10:51:36.790Z',
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

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${FormatDate(acc, i)}</div>
        <div class="movements__value">${FormatCurrency(acc, mov)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const FormatCurrency = function (acc, amount) {
  return new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(amount.toFixed(2));
};
const FormatDate = function (acc, i) {
  const date = new Date(acc.movementsDates[i]);
  if (CalcDaysPassed(date, new Date()) < 1) {
    return 'Today';
  } else if (CalcDaysPassed(date, new Date()) < 2) {
    return 'Yesterday';
  } else {
    return new Intl.DateTimeFormat(acc.locale).format(date);
  }
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${FormatCurrency(acc, acc.balance)}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${FormatCurrency(acc, incomes)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${FormatCurrency(acc, out)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${FormatCurrency(acc, interest)}`;
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

const StartLogOutTimer = function () {
  // set time to 5 minutes
  let time = 1 * 60;
  // call the timer every second
  const tick = function () {
    const min = Math.trunc(time / 60);
    const sec = time % 60;
    labelTimer.textContent = `${`${min}`.padStart(2, 0)}:${`${sec}`.padStart(
      2,
      0
    )}`;
    if (time <= 0) {
      clearInterval(logoutTimer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };
  // In each call, print remaining time to UI
  // When 0 seconds, stop timer and log out user
  tick();
  const logoutTimer = setInterval(tick, 1000);
  return logoutTimer;
};

// Event handlers
let currentAccount, logoutTimer;

// Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
logoutTimer = StartLogOutTimer();

const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: '2-digit',
  weekday: 'short',
};
// const locale = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat(
  currentAccount.locale,
  options
).format(now);

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

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: '2-digit',
      weekday: 'short',
    };
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // Reset logout timer
    if (logoutTimer) {
      clearInterval(logoutTimer);
    }
    logoutTimer = StartLogOutTimer();
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
    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  // Reset logout timer
  if (logoutTimer) {
    clearInterval(logoutTimer);
  }
  logoutTimer = StartLogOutTimer();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);
      // Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
  // Reset logout timer
  if (logoutTimer) {
    clearInterval(logoutTimer);
  }
  logoutTimer = StartLogOutTimer();
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
  // Reset logout timer
  if (logoutTimer) {
    clearInterval(logoutTimer);
  }
  logoutTimer = StartLogOutTimer();
});
