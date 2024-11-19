'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
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

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const euroSign = '€';

const clearInputFields = (...inputField) => {
  inputField.forEach(i => {
    i.value = '';
  });
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
    <div class="movements__value">${mov}${euroSign}</div>
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
  labelBalance.textContent = `${acc.balance}${euroSign}`;
};

// display in, out, interest, on bottom of home page
const calcDisplaySummary = ({ movements, interestRate }) => {
  const inSum = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${inSum}${euroSign}`;

  const outSum = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outSum)}${euroSign}`;

  // New rule added: only include interest over $1 in total interest sum
  const interestSum = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * interestRate / 100)
    .filter((interest, i, arr) => interest >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interestSum.toFixed(2)}${euroSign}`;
};

const createUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
// console.log(accounts);
createUsernames(accounts);

const updateUI = (acc) => {
  // display movements, balance, summary
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

// event handler
let currentAccount;

btnLogin.addEventListener('click', (e) => {
  // prevents form's default behavior of submitting
  e.preventDefault();
  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear input fields
    // inputLoginPin.value = inputLoginUsername.value = '';
    clearInputFields(inputLoginPin, inputLoginUsername);
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
})

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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
  const loanAmount = Number(inputLoanAmount.value);
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
    currentAccount.pin === Number(inputClosePin.value) &&
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
})