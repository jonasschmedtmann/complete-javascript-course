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
        '2023-01-17T14:11:59.604Z',
        '2023-01-20T17:01:17.194Z',
        '2023-01-22T20:36:17.929Z',
        '2023-01-24T10:51:36.790Z',
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
    displayMovements(account);
    calcDisplayBalance(account);
    calcDisplaySummary(account);
}

const calDaysGapBankist = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

const formatMovementDate = (movementDate, locale) => {
    const gap = calDaysGapBankist(new Date(), +movementDate);
    if (gap === 0) {
        return `Today`;
    } else if (gap === 1) {
        return `Yesterday`
    } else if (gap <= 7) {
        return `${gap} day(s) ago`;
    } else {
        return new Intl.DateTimeFormat(locale).format(movementDate);

        // // Padstart to add 0 to date and month
        // const day = `${movementDate.getDate()}`.padStart(2, 0);
        // const month = `${movementDate.getMonth() + 1}`.padStart(2, 0);
        // const year = movementDate.getFullYear();
        // return `${day}/${month}/${year}`;
    }
}

const formatCurrency = (value, locale, currency) =>
    new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(value);

const displayMovements = function (account, sort = false) {
    containerMovements.innerHTML = '';
    const movs = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements;
    movs.forEach((movement, i) => {
        const type = movement > 0 ? 'deposit' : 'withdrawal'
        const formattedDate = formatMovementDate(new Date(account.movementsDates[i]), currentAccount.locale);
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                <div class="movements__date">${formattedDate}</div>
                <div class="movements__value">${formatCurrency(movement, account.locale, account.currency)}</div>
            </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

/* 
    181: Implementing a countdown timer
*/

const startLogoutTimer = () => {
    let time = 120;
    const tick = () => {
        const min = String(Math.trunc(time / 60)).padStart(2, '0');
        const sec = String(time % 60).padStart(2, '0');
        labelTimer.textContent = `${min}:${sec}`;
        if (time === 0) {
            clearInterval(timer);
            containerApp.style.opacity = 0;
            currentAccount = null;
            labelWelcome.textContent = `Log in to get started`;
        }
        time--;
    }
    tick();
    timer = setInterval(tick, 1000);
    return timer;
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
    labelBalance.textContent = `${formatCurrency(account.balance, account.locale, account.currency)}`;
};

/* 
    155: The magic of chaining methods
*/

const calcDisplaySummary = account => {
    const income = account.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${formatCurrency(income, account.locale, account.currency)}`;
    const out = account.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${formatCurrency(out, account.locale, account.currency)}`;
    const interest = account.movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * account.interestRate / 100)
        .filter(interest => interest >= 1)
        .reduce((acc, interest) => acc + interest, 0);
    labelSumInterest.textContent = `${formatCurrency(interest, account.locale, account.currency)}`;
}


/* 
    158: Implementing Login
*/

let currentAccount, timer;
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
    console.log(currentAccount);
    if (currentAccount?.pin === +inputLoginPin.value) {
        labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`
        containerApp.style.opacity = 1;
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        if (timer) {
            clearInterval(timer);
        };
        timer = startLogoutTimer();
        updateUI(currentAccount);
        /* 
            178: Internationalizing dates(Intl)
        */
        const now = new Date();
        // const locale = navigator.language;  // Get the language from the browser

        labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, {
            hour: "numeric",
            minute: "numeric",
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }).format(now);
        // // Padstart to add 0 to date and month
        // const day = `${now.getDate()}`.padStart(2, 0);
        // const month = `${now.getMonth() + 1}`.padStart(2, 0);
        // const year = now.getFullYear();
        // const hours = `${now.getHours()}`.padStart(2, 0);
        // const min = `${now.getMinutes()}`.padStart(2, 0);
        // labelDate.textContent = `${day}/${month}/${year}, ${hours}:${min}`;

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
        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAccount.movementsDates.push(new Date().toISOString());
        updateUI(currentAccount);
        clearInterval(timer);
        timer = startLogoutTimer();
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
    const loanAmount = Math.floor(inputLoanAmount.value);
    if (loanAmount > 0 && currentAccount.movements.some(mov => mov >= loanAmount * 0.1)) {
        // Bank takes some time to provide loan. Simulate here with a setTimeout
        setTimeout(() => {
            currentAccount.movements.push(loanAmount);
            currentAccount.movementsDates.push(new Date().toISOString());
            updateUI(currentAccount);
            inputLoanAmount.value = '';
            inputLoanAmount.blur();
            clearInterval(timer);
            timer = startLogoutTimer();
        }, 2500)
    }
});

/* 
    163: Sorting Arrays
*/
let sorted = false;
btnSort.addEventListener('click', (e) => {
    e.preventDefault();
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
});


/*
    176: Adding dates to bankist app
*/

// // Faking always Login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
    170: Converting and checking numbers
*/

// Conversion
// console.log(+'23');

// // Parsing
// console.log(Number.parseInt('20rem'));
// console.log(Number.parseInt('2.5rem'));
// console.log(Number.isNaN('2.5rem'));
// console.log(Number.isNaN(23));
// console.log(Number.isNaN(+'23x'));
// console.log(Number.isNaN(23 / 0));
// console.log(Number.isFinite(23 / 0));

/*
    171: Math and rounding
*/

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(27 ** (1 / 3));     // Cubic root using exponentiation

// console.log(Math.max(1, 3, 4, 67, 23, 89, '456'));
// console.log(Math.min(1, 3, 4, 67, 23, 89, '456'));

// // calculate radius
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.floor(Math.random() * 6) + 1);

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1 + min);
// console.log(randomInt(2, 5));

// // removes decimal
// console.log(Math.trunc(23.3));

// // Round to nearest integer
// console.log(Math.round(23.3));
// console.log(Math.round(23.6));

// // Always takes the upper limit
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.7));

// // Always takes the lower limit
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.7));

// // trunc and floor work differently -- in -ve numbers
// console.log(Math.floor(-23.7));     // -24
// console.log(Math.trunc(-23.7));     // -23

// // Rounding to decimals -- converts to string

// console.log((23.7).toFixed(3));     // 23.700
// console.log((23.745).toFixed(2));   // 23.75

/*
    172: The remainder operator
*/

// console.log(5 % 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(9));

// labelBalance.addEventListener('click', (e) => {
//     e.preventDefault();

//     [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//         if (i % 2 === 0) {
//             row.style.backgroundColor = 'orangered'
//         }
//         if (i % 3 === 0) {
//             row.style.backgroundColor = 'blue'
//         }
//     })
// });

/*
    173: Numeric Separator
*/

// const solarSystemDiameter = 287_460_000_000;
// console.log(solarSystemDiameter);

// const PI = 3.14_16;
// // const PI1 = 3_.1416; // Error
// // const PI2 = 3.1416_; // Error

// console.log(Number('230_000')); //NaN

/*
    174: Working with BigInt -- ES2020
*/

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// // These below don't work accurately
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(234235459879387494973245235n);

// // operations on bigint
// console.log(23432534653n * 1000n);
// // console.log(23432534653n * 1000);       // Error -- differnt typess
// console.log(23432534653n * BigInt(10000));
// console.log(10n / 3);     // 3n -- ignores the decimal part

/*
    175: Creating Dates
*/

// const now = new Date();
// console.log(now);
// console.log(new Date('Mon Jan 23 2023 15:25:36'));
// console.log(new Date('Dec 24 2019'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2017, 3, 23, 14, 45, 56));

// // param in ms
// console.log(new Date(0)); // Jan 01 1970
// console.log(new Date(3 * 24 * 60 * 60 * 1000));    // 3 days after Jan 01 1970 -- (convert day into ms) * 3 days

// const future = new Date(2027, 3, 23, 14, 45, 56);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());      // formatted string
// console.log(future.toDateString());
// console.log(future.toLocaleTimeString());

// console.log(future.getTime());      // gives the timestamp from Jan 01 1970
// // use timestamp to get the current date and time
// console.log(new Date(1808471756000));
// console.log(Date.now());    // current timestamp
// future.setFullYear(2035);
// console.log(future);

/*
    177: Operations with dates
*/

// const future = new Date(2027, 3, 23, 14, 45, 56);
// console.log(+future);

// // calculate the timestamp in ms, convert it to days
// const calDaysGap = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
// const gap = calDaysGap(new Date(2023, 4, 28), new Date(2023, 4, 24, 10, 8));
// console.log(gap);


/*
    179: Internationalizing numbers(Intl)
*/

// const num = 237865490.34

// console.log(`US:   `, new Intl.NumberFormat('en-US', {
//     style: "unit",
//     unit: "mile-per-hour"
// }).format(num));
// console.log(`Germany:   `, new Intl.NumberFormat('de-DE').format(num));
// console.log(`Syria:   `, new Intl.NumberFormat('ar-SY').format(num));
// console.log(`India:   `, new Intl.NumberFormat('hi-IN', {
//     currency: 'INR',
//     style: 'currency',
//     useGrouping: false
// }).format(num));
// console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));

/* 
    180: Timers: setTimeout and setInterval
*/

const ingredients = ['paneer', 'spinch'];

const pizzaTimer = setTimeout((ing1, ing2) => {
    console.log(`Here is your pijja with ${ing1} and ${ing2} 🍕`);
}, 3000, ...ingredients);
console.log('Waiting for pijja');
// Clear the timer
if (ingredients.includes('spinach')) {
    clearTimeout(pizzaTimer);
}

setInterval(() => {
    const now = new Date();
    // console.log(now);
    const cloak = new Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: '2-digit',
        second: "2-digit"
    }).format(now);
    // console.log(cloak);
}, 1000)