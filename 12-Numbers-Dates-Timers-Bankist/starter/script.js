'use strict';
const testDate = new Date() - new Date(0);
console.log(testDate);
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
    '2021-05-27T17:01:17.194Z',
    '2021-07-11T23:36:17.929Z',
    '2021-07-28T10:51:36.790Z',
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
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-07-26T12:01:20.894Z',
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

function updateUI(acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
}

function formatMovementDate(date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPassed((new Date(), date));
  console.log(daysPassed);
  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
function displayMovements(acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
}

function calcDisplaySummary(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
}

createUsernames(accounts);
function createUsernames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}

function logIn() {
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
}

function transferFunds() {
  const amount = +inputTransferAmount.value;
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

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
}

function getLoan() {
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
}
function closeAccount() {
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
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
}

///////////////////////////////////////
// Event handlers
let currentAccount;
let sorted = false;

// Fake Always Logged In
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
// End Dummy Code

btnLogin.addEventListener('click', e => {
  // Prevent form from submitting
  e.preventDefault();
  logIn();
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  transferFunds();
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  getLoan();
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  closeAccount();
});

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// 168. Converting and Checking Numbers

// console.log(23 === 23.0);

// // Numbers are represented in 64base2 format (binary)
// // Base 10 | 0 to 9
// // Binary = Base 2 | 0 to 1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// console.log(Number('23')); // forced coercion
// console.log(+'23'); // typed coercion

// // Parsing (must start with number)
// console.log(Number.parseInt('30px', 10)); // Converts to Number
// console.log(Number.parseInt('e30', 10)); // Returns with NaN

// console.log(Number.parseFloat('2.6rem')); // Returns 2.6
// console.log(Number.parseInt('2.6rem')); // Returns 2

// // Only use to check if value is NaN
// console.log('Using .isNaN()');
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));

// // Use to check if Number or not
// console.log('Using .isFinite()');
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20'));
// console.log(Number.isFinite(20 / 0));

// console.log('Using .isInteger()');
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

/////////////////////////////////////////////////
// 169. Math and Rounding

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 10, 23, 11, 2)); // 23
// console.log(Math.max(5, 10, '23', 11, 2)); // 23
// console.log(Math.max(5, 10, '23px', 11, 2)); // NaN

// console.log(Math.min(5, 10, '23', 11, 2)); // 2

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1); // 6-sided Die Roll

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20));

// Rounding Integers

// console.log('.round()');
// console.log(Math.round(23.9)); // 24
// console.log(Math.round(23.2)); // 23

// console.log('.ceil()');
// console.log(Math.ceil(23.9)); // 24
// console.log(Math.ceil(23.2)); // 24

// console.log('.floor()');
// console.log(Math.floor(23.9)); // 23
// console.log(Math.floor('23.2')); // 23
// console.log(Math.floor(-23.2)); // 23

// console.log('.trunc()');
// console.log(Math.trunc(23.9)); // 23
// console.log(Math.trunc(23.2)); // 23
// console.log(Math.trunc(-23.2)); // 23

// // Rounding Decimals

// console.log('.toFixed()');
// console.log((23.9).toFixed(0)); // 24, string
// console.log((23.9).toFixed(3)); // 23.900, string
// console.log(-(23.9).toFixed(3)); // -23.900, Number
// console.log(+(23.9).toFixed(3)); // 23.900, Number

/////////////////////////////////////////////////
// 170. The Modulo Operation

// console.log(5 % 2); // Returns 1
// console.log(5 / 2); // Returns 2.5
// console.log(8 % 3); // Returns 2
// console.log(8 / 3); // Returns 2.6666666

// const isEven = n => n % 2 === 0;
// console.log(labelBalance);
// labelBalance.addEventListener('Click', () => {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

/////////////////////////////////////////////////
// 171. Working with BigInt

// console.log(1234567876543456543456765434567n);
// console.log(BigInt(12345));

// // Operations

// console.log(10000n + 10000n);
// console.log(123456787654345678909876543n * 100000000n);

// const huge = 2345676543234567890876543n;
// const num = 23;

// // console.log(huge * num);
// console.log(huge * BigInt(num));

// // Math operations don't work

// console.log(10n / 3n);
// console.log(10 / 3);

/////////////////////////////////////////////////
// 172. Dates and Times

// Create a Date
// const now = new Date();
// console.log(now);

// console.log(new Date('Wed Jul 28 2021 14:13:59 '));
// console.log(new Date('December 24, 2015'));

// console.log(new Date(account1.movementsDates[0]));

// // Months in JS are 0-based
// console.log(new Date(2037, 10, 19, 15, 23, 5));

// // Autocorrecting Dates
// console.log(new Date(2037, 10, 31, 15, 23, 5));
// console.log(new Date(2037, 10, 33, 15, 23, 5));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with Dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth()); // 0 based
// console.log(future.getDate());
// console.log(future.getDay()); // 0 based

// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());

// console.log(future.getTime());

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

/////////////////////////////////////////////////
// 174. Operations with Dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

// For advanced calculations, use a library like moment.js
