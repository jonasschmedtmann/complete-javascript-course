"use strict";

// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
function addCurrency(money) {
  return money + "€";
}

// ? Display all movements of a user
function displayMovements(movements) {
  containerMovements.innerHTML = "";
  movements.forEach((movement, i) => {
    const type = movement < 0 ? "withdrawal" : "deposit";
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${Math.abs(movement)}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterBegin", html);
  });
}
displayMovements(account1.movements);

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
function calcDisplayBalance(account) {
  labelBalance.textContent =
    account.movements.reduce((acc, cur) => acc + cur, 0) + "€";
}
calcDisplayBalance(account1);

// * Jonas Code
// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance} EUR`;
// };
// calcDisplayBalance(account1.movements);

// ? Calculate and display the summary
function calcDisplaySummary(movements) {
  const deposits = movements
    .filter(mov => mov > 0)
    .reduce((acc, deposit) => acc + deposit);
  labelSumIn.textContent = addCurrency(deposits);

  const withdrawals = movements
    .filter(mov => mov < 0)
    .reduce((acc, withdrawal) => acc + withdrawal);
  labelSumOut.textContent = addCurrency(Math.abs(withdrawals));

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (1.2 / 100))
    .filter(deposit => deposit >= 1)
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = addCurrency(interest);
}
calcDisplaySummary(account1.movements);
