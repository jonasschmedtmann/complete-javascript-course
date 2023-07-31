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
    '2022-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-05-08T14:11:59.604Z',
    '2023-07-17T17:01:17.194Z',
    '2023-07-18T23:36:17.929Z',
    '2023-07-19T10:51:36.790Z',
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
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-06-25T18:49:59.371Z',
    '2023-07-16T12:01:20.894Z',
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
let currentAccount, logOutTimer, loggedIn;

const clearInputFields = (...inputField) => {
  inputField.forEach(i => {
    i.value = '';
  });
};

const setLabelText = (label, sum, acc) => {
  return label.textContent = formatCurrency(Math.abs(sum), acc.locale, acc.currency);
};

const formatMovementDate = (date, locale) => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassedFromToday = calcDaysPassed(new Date(), date);

  if (daysPassedFromToday === 0) return 'Today';
  if (daysPassedFromToday === 1) return 'Yesterday';
  if (daysPassedFromToday <= 7) return `${daysPassedFromToday} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);
};

let sorted = false;

// display all transactions
const displayMovements = (acc, sort = false) => {
  containerMovements.innerHTML = ''; // clears containerMovement at beginning
  let movs = acc.movements

  if (sort) {
    movs = acc.movements.slice().sort((a, b) => a - b);
    btnSort.style.color = 'green'
  } else {
    btnSort.style.color = 'gray';
  }

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const dateOfMovement = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(dateOfMovement, acc.locale);
    const formattedMov = formatCurrency(mov, acc.locale, acc.currency);
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${type} #${i + 1}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
    </div>
    `;
    // append html to movement container
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted; // reset sorted property
});

// display total balance in top right corner
const calcDisplayBalance = (acc) => {
  //create new property of "balance" on account
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurrency(acc.balance, acc.locale, acc.currency);
};

// display in, out, interest, on bottom of home page
const calcDisplaySummary = (acc) => {
  const inSum = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  setLabelText(labelSumIn, inSum, acc);

  const outSum = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  setLabelText(labelSumOut, outSum, acc);

  // New rule added: only include interest over $1 in total interest sum
  const interestSum = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter((interest, i, arr) => interest >= 1)
    .reduce((acc, int) => acc + int, 0);
  setLabelText(labelSumInterest, interestSum, acc);
  // labelSumInterest.textContent = formatCurrency(interestSum, acc.locale, acc.currency);
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
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

const startLogOutTimer = () => {
  // set timer to 5 mins
  let time = 5 * 60; //seconds
  const tick = () => {
    const mins = String(Math.trunc(time / 60)).padStart(2, 0);
    const secs = String(time % 60).padStart(2, 0);
    // print remaining time to UI
    labelTimer.textContent = `${mins}:${secs}`;

    // at 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(logOutTimer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
      loggedIn = false;
    }

    // decrease time 1s (placed after time === 0 eval so we are logged out at 0 vs 1s)
    time--;
  }
  tick();



  // call tick() every second
  const logOutTimer = setInterval(tick, 1000);
  return logOutTimer;
}

// event handlers

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;


btnLogin.addEventListener('click', (e) => {
  // prevents form's default behavior of submitting
  e.preventDefault();
  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);
  if (currentAccount?.pin === +(inputLoginPin.value)) {
    loggedIn = true;
    // display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // EXPERIMENTING WITH INTERNATIONALIZATION API to accomodate for different languages and timezones
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: '2-digit',
      month: '2-digit', // can do 'long', 'numeric'
      year: 'numeric',
      // weekday: 'short' // long, short, narrow options
    };
    const localeInfo = navigator.language; //gets locale sting data from user browser

    // * aim to reuse this code to update labelDate every 30 seconds
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // check if other timers are running before running logOutTimer on another account
    if (logOutTimer) clearInterval(logOutTimer);
    logOutTimer = startLogOutTimer();

    updateUI(currentAccount);

    document.addEventListener('click', (e) => {
      e.preventDefault();
      // Reset timer on click activity when logged in
      clearInterval(logOutTimer);
      logOutTimer = startLogOutTimer();
    })

  } else {
    swal('Oops', 'These credentials do not match any of our records', 'info');
  }
  //clear input fields
  clearInputFields(inputLoginPin, inputLoginUsername);
  inputLoginPin.blur();
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const formattedAmount = formatCurrency(amount, currentAccount.locale, currentAccount.currency);

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc &&
    receiverAcc.username !== currentAccount.username
  ) {
    swal(
      `Confirm transfer`,
      `${formattedAmount} to ${inputTransferTo.value}`,
      {
        buttons: [true, `Confirm transfer to "${inputTransferTo.value}"`]
      })
      .then((confirmTransfer) => {
        if (confirmTransfer) {
          swal('Transfer complete', { icon: 'success' })
          // act of transfer
          currentAccount.movements.push(-amount);
          receiverAcc.movements.push(amount);

          // add transfer date
          currentAccount.movementsDates.push(new Date().toISOString());
          receiverAcc.movementsDates.push(new Date().toISOString());

          //update UI to reflect changes
          updateUI(currentAccount);
        }
      })
  } else if (!receiverAcc) {
    swal('Oops', 'This user does not exist in our system', 'info');
  } else if (currentAccount.balance < amount) {
    swal('Sorry', 'You do not have enough funds to make this transfer', 'info');
  }

  // Reset timer
  clearInterval(logOutTimer);
  logOutTimer = startLogOutTimer();

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
    swal('Success!', 'Your loan has been approved', 'success');
    setTimeout(() => {
      // approve loan
      currentAccount.movements.push(loanAmount);

      // add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);
    }, 3000);
  } else if (loanAmount < 0 || !loanAmount) {
    swal('Loan Denied', 'Requested loan amount less than $0', 'error');
  } else {
    swal('Loan Denied', 'Loans are granted only if you have a deposit that is at least 10% of the requested loan amount', 'error')
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
    swal({
      title: 'Are you sure you want to close your account?',
      text: 'You are permanently deleting your entire account. \nThis action cannot be undone!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Your account has been deleted', {
            icon: 'success'
          });
          setTimeout(() => {
            labelWelcome.textContent = 'Log in to get started';
            // remove currentAccount from accounts array
            accounts.splice(index, 1);
            // 'logout' user
            containerApp.style.opacity = 0;
            loggedIn = false;
          }, 1500);

        } else {
          swal('You account is still active!', {
            icon: "success"
          })
        }
      })
  } else {
    swal('Oops', 'These credentials do not match any of our records', 'info');
  }

  clearInputFields(inputClosePin, inputCloseUsername);
});




