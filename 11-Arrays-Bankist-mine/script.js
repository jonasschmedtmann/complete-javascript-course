"use strict";

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2025-08-18T21:31:17.178Z",
    "2025-09-23T07:42:02.383Z",
    "2025-10-28T09:15:04.904Z",
    "2025-11-01T10:17:24.185Z",
    "2026-01-10T14:11:59.604Z",
    "2026-01-13T17:01:17.194Z",
    "2026-01-14T19:37:17.929Z",
    "2026-01-15T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Logic

// ? Add the currency after the money
function addCurrency(money, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(money);
}

// ? Format the date
const padDate = date => String(date).padStart(2, 0);

// ? Display all movements of a user
function displayMovements(acc, sort = false) {
  containerMovements.innerHTML = "";

  const movementsWithDates = acc.movements.map((mov, i) => ({
    value: mov,
    date: acc.movementsDates[i],
  }));

  const movs = sort
    ? movementsWithDates.sort((a, b) => a.value - b.value)
    : movementsWithDates;

  const subtractDays = (day1, day2) =>
    Math.abs((day1 - day2) / (1000 * 60 * 60 * 24));

  const formatDate = (movementDate, locale) => {
    const currentDate = new Date();
    const movDate = new Date(movementDate);
    const dateBetween = subtractDays(currentDate, movDate);
    if (dateBetween < 1) {
      return "today";
    } else if (dateBetween >= 1 && dateBetween < 2) {
      return "yesterday";
    } else if (dateBetween < 7) {
      return `${Math.floor(dateBetween)} days ago`;
    }
    return new Intl.DateTimeFormat(locale).format(movDate);
  };

  movs.forEach(({ value: mov, date }, i) => {
    const movDate = new Date(date);
    const type = mov < 0 ? "withdrawal" : "deposit";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${formatDate(movDate, acc.locale)}</div>
        <div class="movements__value">${addCurrency(
          mov,
          acc.locale,
          acc.currency
        )}</div>
      </div>`;
    containerMovements.insertAdjacentHTML("afterBegin", html);
  });
}

// ? Add the username for each account
// * My Code:
// function computeUsername(name) {
//   const username = name
//     .toLowerCase()
//     .split(" ")
//     .map(n => n[0])
//     .join("");
//   return username;
// }
// accounts.forEach(account => {
//   account.username = computeUsername(account.owner);
// });

// * Jonas Code:
const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};
createUsernames(accounts);
/* 
!!! Why is that better? 
  Perfect! I found that usernames are computed twice (once via computeUsername + forEach and again via createUsernames), so the next step is to keep a single implementation and call it once during initialization.## Recommendation ✅

  Keep one implementation and call it once during initialization, before any login or UI code runs.

  Why (short)
  Avoids duplicated logic and potential bugs. 🔧
  Names (owners) don't change, so computing usernames once is sufficient and more efficient. ⚡

  Suggested cleanup 💡
  Remove the duplicate computeUsername + accounts.forEach(...) block.
  Keep the createUsernames function (or consolidate into a single small function) and call it immediately after const accounts = [...], before any login/display logic.
*/

// ? Calculate the balance of the user
// * My Code
function calcDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = addCurrency(
    acc.balance.toFixed(2),
    acc.locale,
    acc.currency
  );
}

// * Jonas Code
// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance} EUR`;
// };
// calcDisplayBalance(account1.movements);

// ? Calculate and display the summary
function calcDisplaySummary(acc) {
  const deposits = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, deposit) => acc + deposit);
  labelSumIn.textContent = addCurrency(deposits, acc.locale, acc.currency);

  const withdrawals = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, withdrawal) => acc + withdrawal);
  labelSumOut.textContent = addCurrency(
    Math.abs(withdrawals),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interestRate / 100))
    .filter(deposit => deposit >= 1)
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = addCurrency(
    interest,
    acc.locale,
    acc.currency
  );
}

let logoutTimer;
function startTimer() {
  logoutTimer && clearInterval(logoutTimer);

  let seconds = 600;

  const addZero = number =>
    number < 10 ? String(number).padStart(2, 0) : number;

  const tick = () => {
    if (seconds === 0) {
      clearInterval(logoutTimer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = "Log in to get started";
    } else {
      seconds--;
      labelTimer.textContent = `${addZero(Math.trunc(seconds / 60))}:${addZero(
        seconds % 60
      )}`;
    }
  };

  tick();
  logoutTimer = setInterval(tick, 1000);
}

// Update UI
function updateUI(acc) {
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
  displayMovements(acc);
  startTimer();
}

// Login
let currentAccount;

// ! Fake Login
// currentAccount = account1;
// updateUI(account1);
// containerApp.style.opacity = 1;

btnLogin.addEventListener("click", e => {
  e.preventDefault();
  // Find the right account
  // * My code
  // currentAccount = accounts.find(
  //   acc =>
  //     acc.username === inputLoginUsername.value &&
  //     acc.pin === +inputLoginPin.value
  // );
  // console.log(currentAccount);
  // * Jonas Code
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Login Process
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }!`;
    updateUI(currentAccount);
    containerApp.style.opacity = 1;

    const date = new Date();
    // const day = padDate(date.getDate());
    // const month = padDate(date.getMonth() + 1);
    // const year = date.getFullYear();
    // const hour = padDate(date.getHours());
    // const minute = padDate(date.getMinutes());
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minute}`;
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(date);
  }
});

// Money Transfers
btnTransfer.addEventListener("click", e => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;

  // Find a user with this username
  const receiver = accounts.find(acc => acc.username === inputTransferTo.value);
  if (
    receiver &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiver.username !== currentAccount.username
  ) {
    const date = new Date();

    // Take the money from the sender
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(date.toISOString());

    // Add the money to the receiver
    receiver.movements.push(amount);
    receiver.movementsDates.push(date.toISOString());

    inputTransferTo.value = inputTransferAmount.value = "";
    inputTransferTo.blur();
    inputTransferAmount.blur();

    updateUI(currentAccount);
  }
});

// Close Account
btnClose.addEventListener("click", e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    accounts.splice(
      accounts.findIndex(acc => acc.username === username),
      1
    );
    containerApp.style.opacity = 0;
    labelWelcome.textContent = "Log in to get started";
    inputTransferTo.value = inputTransferAmount.value = "";
  }
});

// Loan Request
btnLoan.addEventListener("click", e => {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  const canRequest = currentAccount.movements
    .filter(mov => mov > 0)
    .some(deposit => deposit >= 0.1 * amount);
  if (amount > 0 && canRequest) {
    inputLoanAmount.value = "";
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 3000);
  }
});

// Sort Movements
let isSorted = false;
btnSort.addEventListener("click", () => {
  displayMovements(currentAccount, !isSorted);
  isSorted = !isSorted;
});

// Array methods practice
// const totalDeposits = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, cur) => acc + cur);
// console.log(totalDeposits);

// const more1000Deposits = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(more1000Deposits);

// const { deposits: sumDeposits, withdrawals: sumWithdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (obj, mov) => {
//       // mov > 0 ? (obj.deposits += mov) : (obj.withdrawals += Math.abs(mov));
//       obj[mov > 0 ? "deposits" : "withdrawals"] += mov; // ! More dry way
//       return obj;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sumDeposits, sumWithdrawals);

// function titleCase(sentence) {
//   const capitalize = toCapital =>
//     toCapital[0].toUpperCase() + toCapital.slice(1);

//   const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
//   const newSentence = sentence
//     .toLowerCase()
//     .split(" ")
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(" ");

//   return capitalize(newSentence);
// }

// console.log(titleCase("this is a nice title"));
// console.log(titleCase("this is a LONG title but not too long"));
// console.log(titleCase("and here is another title with an EXAMPLE"));

// A function returns a random number between two numbers
// const randomInt = (from, to) =>
//   Math.floor(Math.random() * (to - from + 1)) + from;
// console.log(randomInt(0, 3));
