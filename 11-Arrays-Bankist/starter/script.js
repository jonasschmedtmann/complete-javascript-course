'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

const calcDisplayMovements = function (movement) {
  containerMovements.innerHTML = '';
  movement.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}💶</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// display UI

// display summary
const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} 💶`;
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)} 💶`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} 💶`;
};

// display balance
const calcDiplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
  labelBalance.textContent = `${balance} 💶`;
};

// create username
const createUsernames = function (accs) {
  accs.forEach(function (acc, i) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display welcom message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    //display UI
    containerApp.style.opacity = 100;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // blur fields
    inputLoginPin.blur();
    inputLoginUsername.blur();
    //display movements
    calcDisplayMovements(currentAccount.movements);
    //display balance
    calcDiplayBalance(currentAccount.movements);
    //display summary
    calcDisplaySummary(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(receiverAcc, amount);
});
// test
// btnLogin.addEventListener('click', function (e) {
//   // Prevent form from submitting
//   e.preventDefault();
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI & Welcome message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;
//     // Display Summary
//     calcDisplaySummary(currentAccount.movements);
//     // Display movements
//     displayMovements(currentAccount.movements);
//     // Display balance
//     calcDiplayBalance(currentAccount.movements);
//     console.log('login');
//   }
// });

// const calcPrintBalance = function (movements) {
//   const balance = movements.reduce(function (acc, cur, i, arr) {
//     return acc + cur;
//   }, 0);
//   console.log(balance);
// };

// calcPrintBalance(account1.movements);
// console.log(calcPrintBalance(account1.movements));
// console.log(account1.movements);

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);
// console.log(account1);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
// console.log(currencies);
// currencies.forEach(function (value, i, map) {
//   console.log(`${i}: ${value}`);
// });

// const currencie = new Set([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// console.log(currencie);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(accounts);

// find method
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// find using for of loop

let forOf = [];
// const forOfAccount =
for (const acc of movements) {
  if (acc < 0) {
    forOf = acc;
    break;
  }
}

console.log(forOf);

// filter method to find
// const filterAccount = accounts.filter(mov => mov.owner === 'Jessica Davis');

// console.log(...filterAccount);

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);
// coding challenge 2 in arrow function call
// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(dogAge => dogAge >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   console.log(humanAge);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// coding challenge 2 in regulay function call
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map(function (dogAge) {
//       if (dogAge <= 2) {
//         return 2 * dogAge;
//       } else if (dogAge > 2) {
//         return 16 + dogAge * 4;
//       }
//     })
//     .filter(function (dogAge) {
//       return dogAge >= 18;
//     })
//     .reduce(function (acc, cur, i, arr) {
//       return acc + cur / arr.length;
//     }, 0);
//   console.log(humanAges);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// get maximum value from movments
// const maximumValue = movements.reduce(function (acc, cur, i, arr) {
//   return acc > cur ? acc : cur;
// }, movements[0]);

// console.log(maximumValue);

// let reduceMethodOf = 0;

// for (const mov of movements) reduceMethodOf += mov;

// console.log(reduceMethodOf);

// const reduceMethodArrow = movements.reduce((acc, cur, i, arr) => acc + cur, 0);

// console.log(reduceMethodArrow);

// const reduceMethod = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);

// console.log(reduceMethod);
// const withdrawals = movements.filter(mov => mov < 0);

// const withdrawlsFn = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawlsFn);
// console.log(withdrawals);

// // filter method
// const deposit = movements.filter(function (mov) {
//   return mov >= 0;
// });

// const depositArrow = movements.filter(mov => mov >= 0);

// const depositOf = [];
// for (const mov of movements) if (mov > 0) depositOf.push(mov);

// console.log(deposit);
// console.log(depositArrow);
// console.log(depositOf);
// const movement = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movement);
// const eurToUSD = movements.map(function (mov, i) {
//   return mov * 1.1;
// });

// console.log(eurToUSD);

// const eurToUsdArrow = movements.map(mov => mov * 1.1);

// console.log(eurToUsdArrow);
// const forOfLoop = [];
// for (const mov of movements) {
//   forOfLoop.push(mov * 1.1);
// }

// console.log(forOfLoop);
/////////////////////////////////////////////////

// for (const [i, mov] of movements.entries()) {
//   if (mov > 0) {
//     console.log(`Deposit ${i + 1}: ${mov}`);
//   } else {
//     console.log(`Withdrawal ${i + 1}: ${Math.abs(mov)}`);
//   }
// }

// console.log('--------forEach');

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Deposit ${i + 1}: ${mov}`);
//   } else {
//     console.log(`Withdrawal ${i + 1}: ${Math.abs(mov)}`);
//   }
// });

// Coding Challenge #1

// const checkDogs = function (julia, kate) {
//   const juliaCorrected = julia.slice(1, 3);
//   const arrDogs = juliaCorrected.concat(kate);
//   arrDogs.forEach(function (dog, i) {
//     dog >= 3
//       ? console.log(`Dog number ${i + 1} is an adults`)
//       : console.log(`Dog number ${i + 1} is still a puppy`);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
