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

const updateUI = (account) => {
    displayMovements(account.movements);
    calcDisplayBalance(account);
    calcDisplaySummary(account);
}

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
    movs.forEach((movement, i) => {
        const type = movement > 0 ? 'deposit' : 'withdrawal'
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} deposit</div>
                <div class="movements__date">3 days ago</div>
                <div class="movements__value">₹${Math.abs(movement)}</div>
            </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}


/*
    151: Computing Usernames
*/
const calculateUserName = (accounts) =>
    accounts.forEach(account => {
        account.username = account.owner.toLowerCase()
            .split(' ')
            .map(word => word[0])
            .join('');

    });

calculateUserName(accounts);

/* 
    153: The reduce method
*/
const calcDisplayBalance = (account) => {
    account.balance = account.movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `₹${account.balance}`;
};

/* 
    155: The magic of chaining methods
*/

const calcDisplaySummary = account => {
    const income = account.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `₹${income}`;
    const out = account.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `₹${Math.abs(out)}`;
    const interest = account.movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * account.interestRate / 100)
        .filter(interest => interest >= 1)
        .reduce((acc, interest) => acc + interest, 0);
    labelSumInterest.textContent = `₹${interest}`;
}


/* 
    158: Implementing Login
*/

let currentAccount;
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
    console.log(currentAccount);
    if (currentAccount?.pin === +inputLoginPin.value) {
        labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`
        containerApp.style.opacity = 1;
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        updateUI(currentAccount);
    }

});

/* 
    159: Implementing transfers
*/

btnTransfer.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = +inputTransferAmount.value;
    const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);

    if (amount > 0 && receiverAccount && receiverAccount?.username !== currentAccount.username && currentAccount.balance > amount) {
        receiverAccount.movements.push(amount);
        currentAccount.movements.push(-Math.abs(amount));
        updateUI(currentAccount);
    }
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
});

/* 
    160: The findIndex method
*/

btnClose.addEventListener('click', (e) => {
    e.preventDefault();

    const username = inputCloseUsername.value;
    const pin = +inputClosePin.value;

    if (username === currentAccount.username && pin === currentAccount.pin) {
        accounts.splice(accounts.findIndex((acc) => acc.username === currentAccount.username), 1);
        currentAccount = null;
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
});

/* 
    161: some and every
*/

btnLoan.addEventListener('click', (e) => {
    e.preventDefault();
    const loanAmount = +inputLoanAmount.value;
    if (loanAmount > 0 && currentAccount.movements.some(mov => mov >= loanAmount * 0.1)) {
        currentAccount.movements.push(loanAmount);
        updateUI(currentAccount);
        inputLoanAmount.value = '';
        inputLoanAmount.blur();
    }
});

/* 
    163: Sorting Arrays
*/
let sorted = false;
btnSort.addEventListener('click', (e) => {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* 
    170: Converting and checking numbers
*/

// Conversion
console.log(+'23');

// Parsing
console.log(Number.parseInt('20rem'));
console.log(Number.parseInt('2.5rem'));
console.log(Number.isNaN('2.5rem'));
console.log(Number.isNaN(23));
console.log(Number.isNaN(+'23x'));
console.log(Number.isNaN(23 / 0));
console.log(Number.isFinite(23 / 0));