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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ---------------------- Simple Array Methods ------------------------- //

// .slice() - Just like the string slice method, to extract part of an array without mutating original array. It returns a new array.
let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(1));
// Below starts at index 1 and stops before the last two elements
// console.log(arr.slice(1, -2)); // ["b", "c"]

//Can use slice to make a shallow copt much like the spread operator
const arrSlice = arr.slice();

const arrSpread = [...arr];

// .splice(startIndex, delCount, element): The splice method destructively extracts a portion of an array, removing elements from the original array.
//The delete count determines how many elements are extracted. If I set the delCount to 0, and add a third param, it will insert an element at the start position and push all the elements after down one index and not extract anything

// This method is often used to remove an element or multiple elements from an array

// console.log(arr.splice(2));
// console.log(arr);

//Huge use case is removing last element
// console.log(arr.splice(-1))

// Insert element with splice
// console.log(arr.splice(2, 0, 1000));
// console.log(arr);

//.reverse() it DOES MUTATE the array by reversing the elements. It will reverse the elements of the original array as well
const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

//.concat() - This method concatenate two arrays. It takes all of the elements in the first and second arrays and puts them into a new array together. This array does NOT mutate the original array

const letters = arr.concat(arr2.reverse());
// console.log(letters);
// console.log(arr);

//.join() - this joins elements of an array into a string, separated by  specified value

// console.log(letters.join(' ---> '));

// .at() - New method as of 2022. This method is ALMOST equivalent to array[index]. They produce the same result with one difference and that is the ease of accessing elements counting from end end of an array using negative indices. Also! It is a great option if you want to do "method chainning" (which we will be talking about later)

//Also! This method also works with Strings

const arr3 = [23, 11, 64];

// console.log(arr3[0]);
// console.log(arr3.at(0));

// Accessing the last element of an array
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.at(-1));

// .at() method on a String
// console.log(letters);
// console.log(letters.at(-1));

// -------------------------- .forEach() ------------------------- //

// .forEach(currEl, index, array) is the higher order function that calls the callback function. The forEach method will loop over the array and calls the callback function in each iteratrion and will receive the current element in the array as the argument for the callback. The continue and break keywords will NOT work here so if need them, must use a for of loop

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach((movement, i) =>
//   console.log(
//     `Transaction #${i + 1}: You ${
//       movement < 0 ? 'withdrew' : 'deposited'
//     } $${Math.abs(movement)}`
//   )
// );

// --------------------- forEach with Maps and Sets ---------------- //

//with a Map map.forEAch(value, key, map)

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((currency, key) => console.log(key, currency));

// with a Set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currenciesUnique.forEach(curr => console.log(curr));

// ----- Data Transformations with .map(), .filter() and .reduce() ---- //

// .map() - maps the values of an array to a new array

// .filter() - filter for elements in the original array that satisfy a certain condition and return a new filtered array, filtering out all element sthat do not satisfy that condition

//.reduce() - boild down or reduce all elements down to a single value. It is this single value that is returned from the method, NOT a new array

// ------------------------ Map Method -------------------------- //

//.map(currEl, index, array)
const euroToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.map(mov => mov * euroToUsd));

// ---------------------------- Filter Method --------------------- //

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
// console.log(deposits);

// ---------------------- Reduce Method ---------------------------- //

// .reduce(acc, curr, i, arr)

// Example: Add all movmeents to get the balance

// const globalBalance = movements.reduce((acc, curr) => acc + curr, 0);

// const globalBalance = movements.reduce((acc, curr, i) => {
//   console.log(`Iteration ${i}: accumulator = ${acc}`);
//   return acc + curr;
// }, 0);
// console.log(globalBalance);

// Example: get Maximum value

const maxMovement = movements.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  movements[0]
);

// console.log(maxMovement);

// ---------------------- Chaining Methods ------------------------- //

const totalDepositsUSD = movements
  .filter(mov => mov >= 0)
  .map(mov => mov * 1.1)
  .reduce((acc, curr) => curr + acc, 0);

// console.log(totalDepositsUSD);

// ---------------------- Find Method ------------------------ //
//.find() - returns the first element in the array that satisfies the condition that we give it in the callback function. So unlike the fiter method which returns an array of ALL elements that match the condition, the find method returns the first element that matches the condition.

//And if NO element satisfies the condition, the find method will return undefined

const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(accounts);
const accountDavis = accounts.find(acc => acc.owner === 'Jessica David');
// console.log(accountDavis);

// --------------------- findIndex Method ------------------ //

// .findIndex() - Similiar to the find method but returns the index of the first element in the array that matches the condition instead of the element itself. And will return -1 if no index matches

//This method is different from the .indexOf method beacuse with the indexOf method you can only do simple checks like a value, indexOf("A") instead of more complex condtions

//Example want to find the index of the account to delete

const currAccount = accounts.at(0);

const index = accounts.findIndex(acc => acc.owner === currAccount.owner);
// console.log(index);

//deletes the account at this specific index
// accounts.splice(index, 1);

// console.log(accounts);

// ---------------- Some and Every Methods -------------------- //
// In comparison, looking back the the indcludes method. The includes method utiltizes strict equality to test if something is included in the array.

// The .some() methods utilizes a callback function and a condition, but like the the includes method it will return a boolean

const anyDeposits = movements.some(mov => mov > 0);

// console.log(anyDeposits);

//every.() - Only returns true if Every element in the array satifies the condition passed into the callback function

// console.log(accounts.at(3).movements.every(mov => mov > 0));

// Separate callback to use in higher order functions especially in these ones that return a boolean
const deposit = mov => mov > 0;

// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// ------------------ flat and flatMap methods ----------------- //

//.flat(depth) - Does NOT require a call back function. This will remove/flatten levels of nested arrays and place all new elements into a new array. By default, the depth is flatten depth is 1 but we can specify the depth. Does NOT mutate the original array

const arr5 = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arr5.flat());
// console.log(arr5);
// console.log(arrDeep.flat(2));

//Example: Calculate overall balance of all the movements of all the accounts in the bank

const bankBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((sum, mov) => sum + mov, 0);

// console.log(bankBalance);

// flatMap() - because the map method and flat method are used so often together, flatMap was created at the same time as .flat() for a method that combines map and flat, it requires a callback like map

// Unlike .flat() where I can specify the level depth, flatMap only goes one level deep
const bankBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, mov) => sum + mov, 0);

// console.log(bankBalance2);

// ------------------- Sorting Arrays ------------------------ //

//.sort() - This will sort elements. Behind the scenes, it converts everything to strings and then sorts then Alphabetically. To make this work with numbers, I must pass it a comparison callback.

// .sort() WILL Mutate the original array!

// With Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// console.log(owners.sort());
// console.log(owners);

//With numbers. It STILL will mutate the original array
//.sort(a,b) where a is the current value and b is the next value in the array
const nums5 = [3, 1, 9, 3, 20];

//ascending
// console.log(movements.sort((a, b) => a - b));

//descending
// console.log(movements.sort((a, b) => b - a));

// ------------ Programatically Create and Fill Arrays --------- //

const x = new Array(7); // This will create an empty array with the exact number of empty spaces as I specify in the constructor. There is only one benefit of doing this and only one array method that I can call on this array and it is the .fill() method

// console.log(x); // [empty x 7]

//.fill(value, startIndex, endIndex) - And this end index with stop right before the end index. The fill method will fill the spaces with the specified value. This will mutate the original array

x.fill(7); // [7, 7, 7, 7, 7, 7, 7]
// console.log(x);

// the fill method can also be used on regular arrays and it will mutate the original array and fill the specified values in the start and end indices. It's kind of like the opposite of the slice method ??

// Array.from({length: }, (curr, index) => Mappingcallback) - the from method on the Array constructor. This was originally introduced to create arrays "from" other array like structures like a node list

const y = Array.from({ length: 7 }, () => 7);
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

const randomDiceRolls = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);

// console.log(randomDiceRolls);

// ------------------- Methods Practice ---------------------- //

// 1. Total deposits in the bank
const totalDeposits = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => (mov > 0 ? acc + mov : acc), 0);
// console.log(totalDeposits);

// 2. How many deposits in the bank with at least 1000

const atLeast1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
// console.log(atLeast1000);

// Doing #2 with the reduce method
const atLeast1000Two = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => (curr >= 1000 ? acc + 1 : acc), 0);
// console.log(atLeast1000Two);

// A Note on the ++ operator and why I could not use it in the above variable, so here is an example beneath

let a = 10;
// console.log(a++); //10

// console.log(a); // 11
// Although the ++ does increment the value by 1, but it returns at that line the current value, which is why I could not use it above in the reduce method

//The way around this is the use the prefixed ++ operator which lookes like this ++variable
// console.log(++a); // 12

// Create object which contains sum of deposits and withdrawals

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, curr) => {
      curr > 0 ? (sum.deposits += curr) : (sum.withdrawals += curr);
      return sum;
    },
    {
      deposits: 0,
      withdrawals: 0,
    }
  );
// console.log(sums);

// 4. Create a function to convert any string to title case

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'and', 'in', 'with'];
  const lowerSplit = title.toLowerCase().split(' ');
  const capitalize = lowerSplit.map(word =>
    exceptions.includes(word) ? word : word.at(0).toUpperCase() + word.slice(1)
  );
  return capitalize.join(' ');
};

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
