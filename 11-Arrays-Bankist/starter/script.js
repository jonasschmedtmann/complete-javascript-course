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


const displayMovements = function (moves) {
  containerMovements.innerHTML = '';
  moves.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${move}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin',html)
  })
}

displayMovements(account1.movements)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
*/

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