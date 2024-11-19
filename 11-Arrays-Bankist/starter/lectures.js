'use strict';
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

/* ////////////////////// .SLICE() -- returns a copy of the array//////////////////// 
console.log(arr.slice(2)); // ['c', 'd', 'e'] from arr[2] onward
console.log(arr.slice(2, 4)); // ['c', 'd'] from 2 - 4, there are 2 values so expect 2 values
console.log(arr.slice(-2)) // grabs the last 2 elements ['d', 'e']
console.log(arr.slice(-1)); // grabs the last element
console.log(arr.slice(1, -2)); //['b', 'c'] starts at position 1 and onward EXCEPT the last 2
console.log(arr.slice()); // creates a shallow copy -- best to use if chaining methods
console.log([...arr]); // creates a shallow copy --- cannot be used with chaining but works the same to copy an array
*/

/* // //////////////////// .SPLICE() -- MUTATES the original array//////////////////// 
// **** different than slice**** Array.splice(indexPositionToStart, howManyElementsWeWantToRemove);

// console.log(arr.splice(2)); // ['c', 'd', 'e'] keeps everything up to arr[2] but everything else is removed
console.log(arr); //['a', 'b'] splice mutated the original array, only [0, 2] remain

// arr.splice(-1); // removes the last element of an array
console.log(arr); //['a', 'b', 'c', 'd']; 

// console.log(arr.splice(1, 2)) // starting from arr[1], remove 2 elements: arr[1] & arr[2] // ['b', 'c']
console.log(arr); //['a', 'd', 'e']

*/

let arr2 = ['f', 'g', 'h', 'i'];
/* //////////////////////  .REVERSE() -- MUTATES the original array//////////////////// 
console.log(arr2.reverse())
console.log(arr2); // mutated the array
*/

const letters = arr.concat(arr2); // creates shallow copy
/* //////////////////////  .CONCAT() -- returns copy of the array////////////////////
// console.log(letters);
console.log([...arr, ...arr2]); // creates shallow copy as well
*/

/* ///////////////////// / .JOIN() ////////////////////
console.log(letters.join(' - ')); //a - b - c - d - e - f - g - h - i
*/

/* //////////////////////  .AT() *NEW* allows for optional chaining////////////////////
arr2 = [23, 11, 64];

console.log(arr2[0]); //23
console.log(arr2.at(0)); //23

// ways of getting last array element
console.log(arr2[arr2.length - 1]); //64
console.log(arr2.slice(-1)[0]); // 64
console.log(arr2.at(-1)); // 64 *** usually trying to get the last element of an array
console.log(arr2.at(-2)); // 11

//////////////////////  should you use [] or .at() ?////////////////////
//  it's personal preference but  .at() allows for method chaining

const string = 'Kass'; // .at() also works on strings
console.log(string[0]); // K
console.log(string.at(0)); // K
*/


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* //////////////////// ACCESSING VALUE, INDEX, ARRAY? ////////////////////
FOR OF LOOP: to get access to index and value, you must destructure array in this order:
for( [index, value] of array.entries() ) {}


for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transation: ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Transation: ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
};
*/

/*
FOREACH LOOP is a ((( higher order function )))-- returns a function that calls itself: a callback function-- on each iteration of the array.
forEach already passes in value, index, and entire array.  access them by passing as parameters in call back function. * HAS SPECIFIC ORDER * (value, index, array)

syntax:
array.forEach( (value, index, array) => { do something } );
array.forEach( function(value, index, array) {do something} );
*/

//////////////////// FOREACH LOOP //////////////////// 
/*
movements.forEach((mov, i, arr) => {
  mov > 0 ? console.log(`Transation: ${i + 1} You have deposited ${mov}`) : console.log(`Transation: ${i + 1} You withdrew ${Math.abs(mov)}`);
})

// //////////////////// FOR EACH WITH MAPS////////////////////
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`)
});
// Output:
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling


// //////////////////// FOR EACH WITH SETS////////////////////
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach((value, key, set) => {
  console.log(`${key}: ${value}`)
});
// Output;
// USD: USD
// GBP: GBP
// EUR: EUR

// *** ((( SETS DO NOT HAVE KEYS!!!!!!! ))) *** therefore we use ____underscores____ to omit info not needed to maintain order of params

currenciesUnique.forEach((value, _, set) => {
  console.log(`${value}: ${value}`);
});

*/


/* //////////////////// FOR EACH VS MAP/FILTER/REDUCE METHODS?? ///////////////////////////

const arr3 = [1, 2, 3];

******** for each creates side effects. Takes in an (ARRAY) => returns EACH ELEMENT ********

console.log(arr3.forEach(n => n * 2)); // undefined because it ((( returns every iteration ))) of the element not just one outcome

arr3.forEach(n => console.log(n * 2));  // will log each element aka SIDE EFFECTS

//output:
2
4
6

******** map/filter/reduce do not have side effects. Take in an (ARRAY) => returns an ARRAY ********

const dub = arr3.map((n) => n * 2);   // [2, 4, 6], map ((( returns an array )))- NO SIDE EFFECTS
console.log(dub);

arr3.map((n) => console.log(n * 2));
//output:
2
4
6
// explicitly console.log output on every iteration gives you the same effect as for loop but on purpose!
*/


//////////////////////  .MAP() METHOD //////////////////
//(( outputs array with results of calling a provided function on every element ))
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eruToUsd = 1.1;

// log adjusted rate of movements in Euro to USD

// using for of loop requires a bit more work
const movementsUsd = [];
for (const mov of movements) {
  movementsUsd.push((mov * eruToUsd).toFixed(2));
}
// console.log(movementsUsd);

// using .map() method aka a call back (higher order) function leads to more functional programming paradigm approach
const conversion = movements.map((mov) => (mov * eruToUsd).toFixed(2));
// console.log(conversion);


const conversionFunction = (money, conversionRate) => {
  return money.map((mon) => (mon * conversionRate).toFixed(2));
};
//this function allows us to pass in any rate other than eruToUsd, it is more REUSABLE
// console.log(conversionFunction(movements, eruToUsd));

const movDescrip = movements.map((mov, i, array) => {
  const type = mov > 0 ? `deposited` : `withdrew`;
  return `Movement ${i + 1}: You ${type} $${Math.abs(mov)}`;
});
// console.log(movDescrip);
*/

//////////////////////  .FILTER() METHOD /////////////////// 
// creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function
/*
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);

console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits); //[200, 450, 3000, 70, 1300]
console.log(withdrawals); //[-400, -650, -130]


// using for of loop
const depositsForOf = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsForOf.push(mov);
  }
};
// console.log(depositsForOf); //[200, 450, 3000, 70, 1300]
*/

//////////////////////  .REDUCE() METHOD /////////////////// 
// executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator is like a snowball
// const balance = movements.reduce((accumulator, mov, i, arr) => {
//   console.log(`Iteration ${i}\n acc + curr \n ${accumulator} + ${mov}`);
//   return accumulator + mov;
// }, 0);

/*
// cleaned up: 
const balance = movements.reduce((acc, curr) => acc + curr, 0);
// console.log(balance);

// for of loop works too 
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
// console.log(balance2); 

// maximum value
// const max = movements.reduce((acc, mov) => {
//   if(acc > mov){
//     return acc; 
//   } else (
//     return mov;
//   )
// });

const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);
console.log(max);

*/

/////////////////// CHAINING METHODS /////////////////// 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eruToUsd = 1.1;

// add up all deposit movements in USD

const totalDeposits = (transactions, exchangeRate) => {
  const total = transactions
    .filter(trans => trans > 0) //only deposits
    .map(trans => parseInt((trans * exchangeRate).toFixed(2))) //adjust rate
    .reduce((prev, trans) => prev + trans, 0); //add up all deposits

  return console.log(total);
}

// to debug these methods, extract (value, index, ARRAY) array so that we can log to console and check out what the issue might be

// totalDeposits(movements, eruToUsd);

//////////////////////  .FIND() METHOD ///////////////////
/* 
.find( returns the *first instance* that fits the condition )
.filter( returns an *array* of all instances that fit the conidition )
*/

const firstWithdrawal = movements.find((mov) => mov < 0); // -400
const allWithdrawals = movements.filter((mov) => mov < 0); // [-400, -650, -130]
// console.log(firstWithdrawal)
// console.log(allWithdrawals)


// using the .find() method
const jessicaAccount = accounts.find(account => account.owner === 'Jessica Davis');
// console.log(jessicaAccount);

// using a for of loop
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    // console.log(acc);
  }
}
//////////////////////  .SOME() METHOD ///////////////////
// call back function returns boolean value if any (some) instance in array matches condition
// console.log(movements);

// EQUALITY using .INCLUDES()
// console.log(movements.includes(-130)); // true

// CONDITION using .SOME()
const sameAsIncludes = movements.some(mov => mov === -130);
// console.log(sameAsIncludes);

const anyMatch = movements.some(mov => mov > 1500);
// console.log(anyMatch); // true

// think of .SOME() as 'any' -- it will return a {{{ boolean }}} value if any element(s) match the condition

//////////////////////  .EVERY() METHOD ///////////////////
// call back function returns boolean value if every instance in array matches condition(s)
// console.log(movements.every(mov => mov > 0)); //false
// console.log(movements.every(mov => typeof mov === 'number')); // true

// store callback funciton in variable to exercise DRY principles and make code more reusable
const deposit = mov => mov > 0;
// console.log(movements.some(deposit)) // true
// console.log(movements.every(deposit)) // false
// console.log(movements.filter(deposit)) // [200, 450, 3000, 70, 1300]


// .FLAT() only flattens out one level deep
// default is .flat(1) meaning array will be flattened one level deep
const nestedArr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(nestedArr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const deepNest = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(deepNest.flat()); //[Array(2), 3, 4, Array(2), 7, 8]
// console.log(deepNest.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]


// .flat()
const overallBal = accounts
  .map(acc => acc.movements) // gives us nested array
  .flat() // flattens nested array
  .reduce((acc, curr) => acc + curr, 0); // adds up all movements

// console.log(overallBal); //17840

// .flatMap() -- common practice to map then flatten so flatMap() does both in one go
// .flatMap() does not allow you to flatten array more than 1 level deep: use flat() instead if more than one level deep is needed
const overallBal2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);

// console.log(overallBal2)



// SORT STRINGS
const owners = ['jonas', 'zach', 'martha', 'adam'];
// console.log(owners.sort()); // sort mutates original array!!!!!!!!!!!!!!
// console.log(owners)


// SORT NUMBERS
// console.log(movements);
// console.log(movements.sort()); // doesnt work 

// return < 0 ? A then B (keep order)
// return > 0 ? B then A (switch order)

// ascending order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

movements.sort((a, b) => a - b);

// console.log(movements);

//descending order
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});

movements.sort((a, b) => b - a);

// console.log(movements);

// empty array + .fill()
const x = new Array(7); //[empty × 7]
// x.fill(1); // [1, 1, 1, 1, 1, 1, 1]
// x.fill(1, 3); // [empty × 3, 1, 1, 1, 1]
// x.fill(1, 3, 5); //[empty × 3, 1, 1, empty × 2]

const arr4 = [1, 2, 3, 4, 5, 6, 7];
arr4.fill(251, 2, 6); //[1, 2, 251, 251, 251, 251, 7];

// Array.from()
const y = Array.from({ length: 7 }, () => 1);
// console.log(y); //[1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_curr_, index) => index + 1)
// console.log(z); //[1, 2, 3, 4, 5, 6, 7]


labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')));
  // console.log(movementsUI)
})

/*
labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
  const listOfMovs = movementsUI.map(el => Number(el.textContent.replace('€', '')));
  console.log(listOfMovs)
})
*/



////////////// CHOOSING ARRAY METHOD /////////////// 
/* 

I WANT.......

TO MUTATE ORIGINAL ARRAY:

- add to original: 
  .push()   adds to end
  .unshift()  add to start

- remove from original:
  .pop()  removes from end
  .shift()  removes from start
  .splice() removes any/specified

- others:
  .reverse()
  .sort()
  .fill()

I WANT.......
TO CREATE A NEW ARRAY:

- computed from original
  .map()  loop

- filtered using condition
  .filter()

- portion of original
  .slice()

- adding original to other
  .concat()

- flattening the original
  .flat()
  .flatMap()

I WANT.......
AN ARRAY INDEX

-based on value
  .indexOf()

- based on test condition
  .findIndex()


I WANT.......
AN ARRAY ELEMENT

- based on test condition
  .find()


I WANT.......
TO KNOW IF ARRAY INCLUDES:

- based on value
  .includes()

- based on test condition 
  .some()
  .every()


I WANT.......
A NEW STRING

- based on separator string
  .join()


I WANT.......
TO TRANSFORM TO VALUE

- based on accumulator
  .reduce()  : boil down array to single value of any type: number, string, boolean, or even new array or object


I WANT.......
TO JUST LOOP ARRAY

-based on callback: 
  .forEach()  : does not create a new array, just loops over it and returns every instance

*/

////////////////////////////
// ARRAY METHODS PRACTICE

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);

// console.log(bankDepositSum)

// 2. # of deposits that are at least 1000
const numDeposits1000Plus = accounts
  .flatMap(account => account.movements)
  .filter(mov => mov >= 1000).length; // THIS WORKS! 👍🏼

const numDeposits1000 = accounts
  .flatMap(account => account.movements)
  // .reduce((count, curr) => if currMovment is at least 1000, add 1 to the count, otherwise leave count as is, start count at 0)
  .reduce((ongoingCount, currMov) => currMov >= 1000 ? ++ongoingCount : ongoingCount, 0)

// console.log(numDeposits1000)

/* 
// ++PREFIXED OPERATOR
let a = 10;
console.log(a++); // this returns 10 even though when you log 'a' again below
console.log(a); // 'a' returns as '11'. 'a++' performs the operation of adding one *BUT* 
// returns the previous value

console.log(++a); // easy solution to this: prefix operator -- THIS returns the correct value
*/


// 3. Create an obj that contains the sum of deposits and sum of withdrawals

// destructuring {deposits, withdrawals} from object created from .reduce() method
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, curr) => {
    sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
    return sums;
  }, { deposits: 0, withdrawals: 0 });


/* { deposits: 0, withdrawals: 0 } represents "sums" in reduce params, therefore you want to return sums after you have completed reducing the array */
// console.log(deposits, withdrawals)

const sum = accounts
  .flatMap(a => a.movements)
  .reduce((sums, curr) => {
    if (curr > 0) {
      sums.deposits += curr;
    } else {
      sums.withdrawals += curr;
    }
    // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
    return sums;
  }, { deposits: 0, withdrawals: 0 });

// console.log(sum)

// 4. convert a string into Title Case
// this is a nice title -> This Is a Nice Title
const convertTitleCase = (title) => {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const capitzalizeFirstLetter = (string) => string.at(0).toUpperCase().concat(string.slice(1));

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word : capitzalizeFirstLetter(word))
    .join(' ');
  return capitzalizeFirstLetter(titleCase);
}

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a long title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
