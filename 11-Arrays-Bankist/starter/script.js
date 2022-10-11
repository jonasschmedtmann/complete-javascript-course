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

const displayMovements = function (account, sort = false) {
  //delete the previous content
  containerMovements.innerHTML = '';

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
      `;

    //if we use beforeend is will appear on the reverse order
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//displayMovements(account1.movements);
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

//calcDisplaySummary(account1.movements);

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} €`;
};

//calcDisplayBalance(account1.movements);
const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};
//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  //Prevent form from submiting
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    //Put all visible
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  //check if the amount if positive and if you have that money to transfer
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    //Upda<te UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //DELETE ACCOUNT
    accounts.splice(index, 1);

    //HIDE UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE METHOD - extract a slice of an array without changing the actual array
// 2 - we are extracting from c  till the end
// 4  - is the end parameter and is NOT included!
// -(minus)  -  starts at the end. ex: -1 is ALWAYS the last  element of the array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2)); //starts at position one and extracts everything except last 2
console.log(arr.slice()); //to create a shallow copy
console.log([...arr]); //the same thing  to create a shallow copy

//SPLICE METHOD -  it changes the array! 
//console.log(arr.splice(2)); //takes part of the array and returns it
arr.splice(-1)
console.log(arr);
arr.splice(1, 2) //the 1st parameter is startimg, the second is how many you want to delete
console.log(arr); //the original array lost the part extracted

//REVERSE METHOD //changes the original array too
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); 
console.log(arr2);

//CONCAT METHOD - join 2 arrays. doesn't change the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN METHOD - creates a string with the separator we specified
console.log(letters.join(' - '));

//AT METHOD - we can replace the braket notation for this method
const arr  = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
//to know the last index of the array you can use the -1. It's more simple
console.log(arr.at(-1));
//it works with strings too
console.log('jonas'.at(-1));


////////FOR EACH METHOD/////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for(const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('-------ForEach----------');
//loop over the array and in each iteration runs the function
//high order function - call back function
//the 1st parameter has always have to be value, 2nd - index and 3rd array
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`);
  }
});

//When should we use the for OF and ForEach ? 
//forEach will always loop over the all array. If you need to break the loop use the FOR OF

//FOR EACH in MAPS and SETS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
})

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _, set){
  console.log(`${value}`);
})


/////////Challenge 1 /////////////
const checkDogs = (dogsJulia, dogsKate) => {
  const removeCatsJulia = dogsJulia.slice(1, 3);
  const totalDogs = removeCatsJulia.concat(dogsKate);

  totalDogs.forEach((dog, i) => {
    const age = dog > 3 ? 'is an adult' : 'is still a puppy';
    console.log(`Dog number ${i + 1} ${age}, and is ${dog} years old`);
  });
};

checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

////////Challenge  2 //////////////
const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(dogAge => dogAge >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/////////Challenge 3 ///////
//1.
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const recommendedFoodPortion = dogs.forEach(dog => {
  const recomendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  dog.recomendedFood = recomendedFood;
});

console.log(dogs);

//2.
const saraDog = dogs.find(dog => dog.owners.includes('Sarah'));

if (saraDog.curFood < saraDog.recomendedFood * 0.9) {
  console.log(`Sara's dog eats less than recommended`);
} else if (saraDog.curFood > saraDog.recomendedFood * 1.1) {
  console.log(`Sara's dog eats more than the recommended`);
} else {
  console.log(`Sara's dog eat in perfect portions`);
}

console.log(saraDog);

//3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recomendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recomendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recomendedFood));

//6
console.log(
  dogs.some(
    dog =>
      dog.curFood < dog.recomendedFood * 1.1 &&
      dog.curFood > dog.recomendedFood * 0.9
  )
);

//7
const dogsOK = dogs.filter(
  dog =>
    dog.curFood < dog.recomendedFood * 1.1 &&
    dog.curFood > dog.recomendedFood * 0.9
);
console.log(dogsOK);

//8
const shallowDogs = dogs.slice().sort((a, b) => a.recomendedFood - b.recomendedFood);

console.log(dogs);
console.log(shallowDogs);

/*
//MAP, FILTER, REDUCE
//MAP - is similar to the forEach method but it creates a new array after use a callback function

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) {
  movementsUSDfor.push(mov * eurToUSD);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => 
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);


//FILTER - is filtering the elements that pass a determined condition and create a new array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const depositsFor = [];
for(const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}
console.log(depositsFor);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);


//REDUCE - puts all array elements in one single value
//accumulator is like a snowball
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//the 0 is the value accumulator starts at

const balance = movements.reduce((acc, curr, i) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
}, 0);

let balancefor =  0;
for(const mov of movements) balancefor += mov;

console.log(balancefor);
console.log(balance);

//maximun value
const maxValue = movements.reduce((acc, curr) => curr > acc ? curr : acc
, 0);

console.log(maxValue);

//Chaining methods

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

//Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

  console.log(totalDepositsUSD);
  

//FIND METHOD - to retrive an element from an array based in  a condition
//will NOT return an array but the first element that fills the condition

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc);
    break;
  }
}

//FIND INDEX METHOD - works almost the same way as find but it returns the index
//were just added in ES6

//SOME and EVERY METHOD - returns a bollean

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//SOME: Equality
console.log(movements.includes(-130));
//SOME: Condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//EVERY - only returns true if all elements pass the test!
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


//FLAT METHOD - removes the nested arrays and flat the array
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
];

console.log(arr.flat());

const arrDeep = [
  [[1, 2], 3],
  [4, [5, 6]],
  [7, 8],
];

//if you have 2 level deep arrays to flaten you need to specify ow much you want to
console.log(arrDeep.flat(2));


const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//using map and flat are pretty common so we use FLATMAP METHOD

const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov);
console.log(overalBalance2);


//SORTING METHOD - It mutates the original array

//Strings
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];

console.log(owners.sort());
console.log(owners);

//Numbers - it converts them to strings and order them based on that
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());

// to fix it we use a compare function. A and B are 2 consecutive numbers
//return < 0 A, B (keep order)
//return > 0 B, A (switch order)

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);

console.log(movements);

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);


//Generating Arrays
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
//creates an empty array with 7 length
const x = new Array(7);
console.log(x);

//FILL METHOD mutates the original array
//1st parameter is the number to fill, the 2nd is the beggining and the 3rd ending
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

//Array.from - it's a function
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const dice = Array.from({ length: 100 }, () => Math.round(Math.random() * 6));

console.log(dice);

//this was created to convert iterables array like structures

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements_value'), el => Number(el.textContent.replace('€', '')));

  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements_value')];
  console.log(movementsUI2);
});


//Array Methods Practice

//1
const allDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(allDepositsSum);

//2
const runDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;

const runDeposits2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);
console.log(runDeposits1000);
console.log(runDeposits2);

// 3
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

//4
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : capitalize(word))
    .join(' ');

  return titleCase;
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not to long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/
