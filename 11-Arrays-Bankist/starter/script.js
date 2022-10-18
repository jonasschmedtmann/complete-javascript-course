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
// labels
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

// buttons
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

// user inputs
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let currentAccount;
let sortedState = "mostRecent";

const displayMovements = movements => {
  containerMovements.innerHTML = '';
  movements.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${movements.length - i} ${type}</div>
  <div class="movements__value">${movement}€</div>
</div>`;
    containerMovements.insertAdjacentHTML('beforeend', html);
  });
};

const calcDisplayBalance = account => {
  account.balance = account.movements.reduce((a, b) => a + b, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = account => {
  const movements = account.movements;
  const deposits = movements.filter(mov => mov > 0);

  const incomes = deposits.reduce((a, b) => a + b, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements.filter(mov => mov < 0).reduce((a, b) => a + b, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest =
    Math.round(
      deposits
        .map(mov => (mov * account.interestRate) / 100)
        .filter(mov => mov > 1)
        .reduce((a, b) => a + b, 0) * 100
    ) / 100;
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = accounts => {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUsernames(accounts);

const logOut = () => {
  containerMovements.innerHTML = "";
  inputClosePin.value = "";
  inputCloseUsername.value = "";
  labelBalance.textContent = "";
  labelSumIn.textContent = "";
  labelSumInterest.textContent = "";
  labelSumOut.textContent = "";
  labelWelcome.textContent = "Login to get started!";
  containerApp.style.opacity = 0;
  currentAccount = null;
}

const startTimer = () => {
let counter = 1;
const totalTime = 300000;
const timer = setInterval(function() {
let secondsPassed = counter * 1000;
let currentTime = totalTime - secondsPassed;
let minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((currentTime % (1000 * 60)) / 1000);
labelTimer.innerHTML = `0${minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
console.log("hello");
    if (currentTime < 1) {
      logOut();
      clearInterval(timer);
        
    } else {
      counter++
    }
}, 1000);
}


//  EVENT LISTENERS

// login event listener
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);
  const account = accounts.find(
    account => account.username === username && account.pin === pin
  );
  console.log(account);

  if (account) {
    currentAccount = account;
    console.log('logged in');
    labelWelcome.textContent = `Welcome back, ${account.owner.split(' ')[0]}!`;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    displayMovements(account.movements);
    calcDisplayBalance(account);
    calcDisplaySummary(account);
    containerApp.style.opacity = 1;
    startTimer();
    return;
  } else {
    containerApp.style.opacity = 0;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    labelWelcome.textContent = `That username and/or pin does not match any current user`;
  }
});

// transfer funds event listener
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(accounts);
  const amount = Number(inputTransferAmount.value);
  const accountToTransferTo = accounts.find(
    account => account.username === inputTransferTo.value.toLowerCase()
  );

  if(accountToTransferTo.username === currentAccount.username ){
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferTo.blur();
    inputTransferAmount.blur();
    alert("You cannot transfer funds to yourself.")
    return;
  } else if (currentAccount.balance < amount){
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferTo.blur();
    inputTransferAmount.blur();
    alert("You have insufficient funds for that transfer")
    return;
  } else if (amount < 0){
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferTo.blur();
    inputTransferAmount.blur();
    alert("Transfer amount cannot be a negative number.")
    return;
  }

  if (accountToTransferTo) {
    accountToTransferTo.movements.unshift(Number(amount));
    currentAccount.movements.unshift(Number(amount) * -1);
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferTo.blur();
    inputTransferAmount.blur();
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount);
    calcDisplaySummary(currentAccount);
  }
});

// request loan
btnLoan.addEventListener("click", function(e){
e.preventDefault();
console.log("loan time");
const loan = Number(inputLoanAmount.value);
if(currentAccount.movements.some(mov => mov >= (loan * .1))){
  currentAccount.movements.unshift(loan)
  displayMovements(currentAccount.movements);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
} else {
  alert("You did not qualify for the requested loan")
}

inputLoanAmount.value = '';
inputLoanAmount.blur();
})

// close account event listener
btnClose.addEventListener("click", function(e){
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    const accountToClose = accounts.findIndex(account => inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value))
    console.log(accountToClose);
    accounts.splice(accountToClose, 1);
    logOut();
  }
})

// sort button
btnSort.addEventListener("click", function(){
  const sortedArr = currentAccount.movements.slice().sort((a,b) => a -b);
  if(sortedState === "mostRecent"){
    displayMovements(sortedArr);
    sortedState = "ascending";
    btnSort.textContent = `SORT: ⬆️ Ascending`;
  } else if(sortedState === "ascending"){
    displayMovements(sortedArr.sort((a,b) => b-a));
    sortedState = "descending";
    btnSort.textContent = `SORT: ⬇️ Descending`;
  } else if(sortedState === "descending"){
    displayMovements(currentAccount.movements);
    sortedState = "mostRecent";
    btnSort.textContent = `SORT: Most Recent`
  }

})

// const eurToUsd = .97;

// const usdMovements = movements.map(mov => Math.round(mov*eurToUsd))

// console.log(movements, usdMovements);
