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
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
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
let currencySign = '€';

const clearInputFields = (...inputField) => {
  inputField.forEach(i => {
    i.value = '';
  });
};

const setLabelText = (label, sum) => {
  return label.textContent = `${Math.abs(sum.toFixed(2))}${currencySign}`;
};

// display all transactions
const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = ''; // clears containerMovement at beginning

  // if sort = true, then make copy of movements and sort in asc order, otherwise keep movs as og movements
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${type} #${i + 1}</div>
    <div class="movements__value">${(mov).toFixed(2)}${currencySign}</div>
    </div>
    `;
    // append html to movement container
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};


// display total balance in top right corner
const calcDisplayBalance = (acc) => {
  //create new property of "balance" on account
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `${acc.balance}${currencySign}`;
  setLabelText(labelBalance, acc.balance);
};

// display in, out, interest, on bottom of home page
const calcDisplaySummary = ({ movements, interestRate }) => {
  const inSum = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  setLabelText(labelSumIn, inSum);

  const outSum = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  setLabelText(labelSumOut, outSum);

  // New rule added: only include interest over $1 in total interest sum
  const interestSum = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * interestRate / 100)
    .filter((interest, i, arr) => interest >= 1)
    .reduce((acc, int) => acc + int, 0);
  setLabelText(labelSumInterest, interestSum)
};

// 'John Jacobs' -> 'jj'
const createUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = (acc) => {
  // display movements, balance, summary
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

// event handlers
let currentAccount;

btnLogin.addEventListener('click', (e) => {
  // prevents form's default behavior of submitting
  e.preventDefault();
  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);
  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear input fields
    // inputLoginPin.value = inputLoginUsername.value = '';
    clearInputFields(inputLoginPin, inputLoginUsername);
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc &&
    receiverAcc.username !== currentAccount.username
  ) {
    // act of transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update UI to reflect changes
    updateUI(currentAccount);
  }
  clearInputFields(inputTransferAmount, inputTransferTo);
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const loanAmount = +(inputLoanAmount.value);
  // grant loan if any movement is >= 10% of requested loan amount
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    // approve loan
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
  clearInputFields(inputLoanAmount);
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    currentAccount.pin === +(inputClosePin.value) &&
    currentAccount.username === inputCloseUsername.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // remove currentAccount from accounts array
    accounts.splice(index, 1);
    // 'logout' user
    containerApp.style.opacity = 0;
  }

  clearInputFields(inputClosePin, inputCloseUsername);
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted; // set sorted as opposite after running displayMovements
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
