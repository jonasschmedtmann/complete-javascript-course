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

 //Elements
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

////////////////////////////////////////////////
/////////////////////////////////////////////////
//LECTURES
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////////
// coding challenge 1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];


function checkDogs(Julia, Kate) {
  const correctedJulia = Julia.slice(1, -2);
  const allDogs = correctedJulia.concat(Kate);
  console.log(correctedJulia, allDogs)
  allDogs.forEach((dogAge, index) => {
    if (dogAge >= 3) {
      console.log(`Dog number ${index+1} is an adult and is ${dogAge} years old`);
    } else {
      console.log(`Dog number ${index+1} is still a puppy`)
    }
  })
}

checkDogs(dogsJulia, dogsKate)

// map method
const INR = 80;
const convertINR = movements.map(mov => mov*INR);
console.log(convertINR);

function createUsernames(acc) {
  acc.forEach((account) => {
    account.username = account.owner
                        .toLowerCase()
                        .split(" ")
                        .map((name) => name[0])
                        .join("");
    console.log(account);
  })
}

createUsernames(accounts);

const displayMovements = function (movs) {
  containerMovements.innerHTML = "";
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    //create movement row
    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                    <div class="movements__date">3 days ago</div>
                    <div class="movements__value">$${mov}</div>
                  </div>`
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

const displayBalance = function (movs) {
  const balance = movs.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `$${balance}`
}

const displaySummary = function (movs, intRate) {
  const totalDeposit = movs
  .filter(mov => mov > 0)
  .reduce((acc, curr) => acc + curr, 0);
  const totalWithdrawal = Math.abs(movs
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0));
  const interest = movs
    .filter(mov => mov > 0)
    .map(dep => dep * intRate/100)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `$${totalDeposit}`;
  labelSumOut.textContent = `$${totalWithdrawal}`;
  labelSumInterest.textContent = `$${interest}`;
}

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const acc = accounts.find(acc => acc.username === inputLoginUsername.value);  
  if (acc && acc.pin === Number(inputLoginPin.value)) {
  // display UI and message
  labelWelcome.textContent = `Welcome back, ${acc.owner.split(" ")[0]}`;
  containerApp.style.opacity = 100;
  //display movements
  displayMovements(acc.movements);
  //display balance 
  displayBalance(acc.movements);
  //display summary
  displaySummary(acc.movements, acc.interestRate);
  }
})

// filter method
const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

//reduce method
const balance = movements.reduce((acc, curr, index, arr) => acc + curr, 1);
console.log(balance)

const max = movements.reduce((acc, curr, index, arr) => acc = Math.max(curr, acc), -Infinity);
console.log(max)

//coding challenge 2
function calcAverageHumanAge (ages) {
  const result = ages.slice().map(age => (
  age <= 2 ? 2 * age : 16 + age * 4))
  .filter(age => age >= 18)
  .reduce((acc, curr, index, arr) => acc + curr / arr.length, 0);
  return result;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


//coding challenge 3

const calcAverageHumanAge2 = ages => 
  ages
    .map(age => ( age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, curr, index, arr) => acc + curr / arr.length, 0);
    
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));
