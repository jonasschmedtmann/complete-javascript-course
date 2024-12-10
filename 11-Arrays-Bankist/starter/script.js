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

const displayMovements = function (movs, sort = false) {
  containerMovements.innerHTML = "";

  const transactions = (sort) ? movs.slice().sort((a,b) => a-b) : movs ;

  transactions.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
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
  acc.balance = balance;
  labelBalance.textContent = `$${acc.balance}`
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
  labelSumInterest.textContent = `$${interest.toFixed(2)}`;
}

let acc;

const updateUI = function(acc) {
  //display movements
  displayMovements(acc.movements);
  //display balance 
  displayBalance(acc.movements);
  //display summary
  displaySummary(acc.movements, acc.interestRate);
};

//Logging In
btnLogin.addEventListener('click', (e) => {
  e.preventDefault(); //prevents the button from submitting a form
  acc = accounts.find(acc => acc.username === inputLoginUsername.value);  
  if (acc && acc.pin === Number(inputLoginPin.value)) {
  // display UI and message
  labelWelcome.textContent = `Welcome back, ${acc.owner.split(" ")[0]}`;
  containerApp.style.opacity = 100;
  updateUI(acc);
  inputLoginUsername.value = "";
  inputLoginPin.value = "";
  inputLoginPin.blur(); //to remove the cursor from showing on the pin
  }
})

//Transfer money
btnTransfer.addEventListener('click', (e) => { 
  e.preventDefault(); //prevents the button from submitting a form
  const transferAmount = Number(inputTransferAmount.value);
  const transferAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = "";  
  inputTransferTo.value = "";  

  if (transferAmount > 0 && transferAcc && acc.balance >= transferAmount && transferAcc.username !== acc.username) {
    transferAcc.movements.push(transferAmount);
    acc.movements.push(-1 * transferAmount);
    updateUI(acc);
  } else { 
    console.log("Transfer declined. Enter the proper name and amount.");
  }  
})

// closing account
btnClose.addEventListener('click', (e) => {
  e.preventDefault(); //prevents the button from submitting a form
  const closeAccUser = inputCloseUsername.value;
  const closeAccPin = Number(inputClosePin.value);
  
  if (closeAccUser === acc.username && closeAccPin === acc.pin) {
    const index = accounts.findIndex(elem => elem.pin === closeAccPin);
    accounts.splice(index, 1);
    inputCloseUsername.value = "";  
    inputClosePin.value = "";  
    containerApp.style.opacity = 0;
  } else if (closeAccUser !== acc.username) {
    console.log("You can only close your account");
  } else if (closeAccPin !== acc.pin) {
    console.log("Enter the correct pin number.")
  } else {
    console.log("")
  }
})

// requesting loan
btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const loanAmt = Number(inputLoanAmount.value); 
  if (loanAmt > 0 && acc.movements.some(amt => amt >= .10 * loanAmt)) { 
    acc.movements.push(loanAmt); 
    updateUI(acc); 
  } 
  inputLoanAmount.value = "";
})

let toggle = true;
//sort movements
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(acc.movements, !toggle);
  toggle = !toggle;
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

//coding challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach((dog) => dog.recommendedFood = dog.weight ** 0.75 * 28)
console.log(dogs);

function howIsPetEating(owner) {
  const ownerDog = dogs.find((dog) => dog.owners.includes(owner))
  let decn;
  if (ownerDog.curFood > 1.1 * ownerDog.recommendedFood) {
    decn = "too much";
  } else if (ownerDog.curFood < .9 * ownerDog.recommendedFood) {
    decn = "too little"
  } else {
    decn = "okay"
  }
  console.log(`${owner}'s dog is eating ${decn}.`)
}

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > 1.1 * dog.recommendedFood)
  .map((dog) => dog.owners)
  .flat();

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < .9 * dog.recommendedFood)
  .map((dog) => dog.owners)
  .flat();

howIsPetEating('Sarah');
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);


const isDogEatingPerfectAmt = (arr) => arr.some((dog) => dog.curFood === dog.recommendedFood);
console.log(isDogEatingPerfectAmt(dogs));

const isDogEatingOkay = (dog) => 
dog.curFood >= .9 * dog.recommendedFood && dog.curFood <= 1.1 * dog.recommendedFood;
console.log("dog eating okay", dogs.some(isDogEatingOkay));

const filter = dogs.filter(isDogEatingOkay);
console.log(filter);
const sorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sorted);