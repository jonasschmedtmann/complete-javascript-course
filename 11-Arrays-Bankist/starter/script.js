'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

///////////////////////////////////////
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

///////////////////////////////////////
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

let currentAccount;
createUsernames(accounts);
///////////////////////////////////////
// Brains
function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${move}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
}

function calcDisplaySummary(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
}

function createUsernames(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}

function updateUI(acc) {
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
  displayMovements(acc.movements);
}

function logIn() {
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // 1a. Display UI and Welcome Message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // 1b. Clear Input Fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
}

function getLoan() {
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
}

function transferFunds() {
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
}

function closeAccount() {
  if (
    currentAccount.username === inputCloseUsername.value &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      // Returns index of item that matches the true/false
      acc =>
        // Do something that returns true/false
        acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = 'Log in to get started';
}

///////////////////////////////////////
// Event Handlers

// Log User In
btnLogin.addEventListener('click', e => {
  // Prevent form from submitting
  e.preventDefault();
  logIn();
});

// Handling Loans

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  getLoan();
});

// Transfer Money to Other Account
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  transferFunds();
});

// Close Account
btnClose.addEventListener('click', e => {
  e.preventDefault();
  closeAccount();
});

let sortState = false;
// Sort Entries
btnSort.addEventListener('click', e => {
  e.preventDefault();
  sortState = displayMovements(currentAccount.movements, !sortState);
  sortState = !sortState;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// EXAMINING .slice() METHOD
// Slicing doesn't mutate an array;
// Slicing creates a 'shallow' copy of the array

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));

console.log(arr.slice());
console.log([...arr]);
// This is the same, the only advantage is .slice() can be chained

// EXAMINING .splice() METHOD
// Splicing pops off sections from an array and mutates the original array

// console.log(arr.splice(2));
// arr.splice(-1)
console.log(`Log the Original Array: ${arr}`);
arr.splice(1,2)
console.log(arr);

// REVERSE | Mutates original Array

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
// This is the same process as .concat(), again with spread operator

// JOIN
console.log(letters.join(' - '));
*/

// BEGIN SECTION 2: THE FOR-EACH LOOP
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log('=========FOR EACH=========');
// Continue and Break statements don't exist in for-each loops
movements.forEach(function (currentElement, index, array) {
   if (currentElement > 0) {
    console.log(`Movement ${index}: You deposited $${currentElement}`);
  } else {
    console.log(`Movement ${index}: You withdrew $${Math.abs(currentElement)}`);
  }
})
*/
// END SECTION 2

// BEGIN SECTION 3: The forEach Loop with Maps & Sets
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (v, k) {
  console.log(`${k}: ${v}`);
})


const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique);

currenciesUnique.forEach(function (v, _,) {
  // Sets' 2nd parameter doesn't exist, but the builders keep it there for uniformity of functionality across data types.
  console.log(`${v}: ${v}`);
})*/
// END SECTION 3

// BEGIN SECTION 4: Map, Filter and Reduce

// Map operates like the forEach() method, except it creates a new array based on the original.

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (e) { return e * eurToUsd })
// // Arrow Function Version: const movementsUSD = movements.map(e => e * eurToUsd)

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements)
//   movementsUSDfor.push(mov * eurToUsd);

// console.log(movementsUSDfor);

// const movementDescriptions = movements.map((currentElement, index) =>
//   `Movement ${index}: You ${currentElement > 0 ? 'deposited' : 'withdrew'} ${Math.abs(currentElement)}`
// )

// console.log(movementDescriptions);

// Filter does exactly what you'd expect and returns it im a new array.

// const deposits = movements.filter( mov => mov > 0)
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mv => mv < 0);
// console.log(withdrawals);

// Using For loop to do the same thing is more clunky and you can't chain methods.
// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }

// console.log(depositsFor);

// Reduce boils all array elements into a single elenent (e.g. adding all numbers in array into a single sum).

// console.log(movements);
// const balance = movements.reduce( (accumulator, currentElement) => {
//     accumulator + currentElement;
//   },0);
// console.log(balance);

// // Using a For loop is fine, but it becomes cumbersome if you use lots of for loops as you regularly need external variables
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Geting the Maximum Value of the Array
// const maxValue = movements.reduce((acc, mv) => {
//   if (acc > mv) return acc; else return mv
// }, 0)
// console.log(maxValue);

// Chaining Methods Together
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // Using the arr parameter is useful for debugging
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// THE .find() METHOD
// Search through an array to find the object with the property that matches the query
// This returns only the element it looked for, not a new array

// const firstWithrdawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithrdawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

///////////////////////////////////////
// 158. Some and Every

// Practicing with .some()
// console.log(movements);
// // includes() checks equality
// console.log(movements.includes(-130));

// // some() checks a condition
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// Practicing with .every()
// console.log(movements.every(mov => mov > 0));

// // Callback fn

// const deposit = mov => mov > 0;
// console.log(movements.every(deposit));
// console.log(movements.some(deposit));
// console.log(movements.filter(deposit));

///////////////////////////////////////
// 158. .flat() and .flatMap()
// .flat() depth starts at 1 level, so adding a number as an argument will set it to go deeper
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // Using .flatMap();
// // .flatMap() only goes 1 level deep, so if you need to go deeper you will have to spread out & chain the methods together

// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

///////////////////////////////////////
// 159. Sorting Arrays

// .sort() mutates the original array

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // .sort() also expects strings and so will type coerce non-string entries
// console.log(movements);

// // if return < 0, a -> b
// // if return > 0, b -> a
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// movements.sort((a, b) => a - b);
// console.log(movements);

// movements.sort((a, b) => b - a);
// console.log(movements);
// END SECTION 4

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

///////////////////////////////////////

const testData1 = [[3, 5, 2, 12, 7], [4, 1, 15, 8, 3]];
const testData2 = [[9, 16, 6, 8, 3], [10, 5, 6, 1, 4]];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogs = dogsJulia.slice(1, -2).concat(dogsKate);
  dogs.forEach(function (v, i) {
    v >= 3 ? console.log(`Dog number ${i + 1} is an adult, and is ${v} years old.`) : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  })
}
console.log(checkDogs(...testData1));
console.log(checkDogs(...testData2));
*/

// END CODING CHALLENGE #1

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
////////////////////
/*
const dataSet1 = [5, 2, 4, 1, 15, 8, 3];
const dataSet2 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = function (ages) {
  // 1. Convert Ages
  const humanAge = ages.map(dogAge =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
  );
  // 2. Filter out Adults
  const underEighteen = humanAge.filter(age => age >= 18);
  // 3. Averae the Ages
  const averageAge =
    underEighteen.reduce((acc, age) => acc + age, 0) / underEighteen.length;
  return averageAge;
};
let set1 = calcAverageHumanAge(dataSet1);
let set2 = calcAverageHumanAge(dataSet2);
console.log(set1, set2);
*/

// END CODING CHALLENGE #2

// START CODING CHALLENGE #3
/*
const calcAverageHumanAgeChain = ages =>
  ages.map(dogAge => dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4).filter(age => age >= 18)
.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

set1 = calcAverageHumanAgeChain(dataSet1);
set2 = calcAverageHumanAgeChain(dataSet2)
console.log(set1, set2);
*/
// End CODING CHALLENGE #3
