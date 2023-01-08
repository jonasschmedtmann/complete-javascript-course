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

const displayMovements = function (movements) {
    containerMovements.innerHTML = '';
    movements.forEach((movement, i) => {
        const type = movement > 0 ? 'deposit' : 'withdrawal'
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} deposit</div>
                <div class="movements__date">3 days ago</div>
                <div class="movements__value">${movement}</div>
            </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

displayMovements(account1.movements);

/*
    151: Computing Usernames
*/


const name1 = 'Steven Thomas Williams';

const calculateUserName = (accounts) =>

    accounts.forEach(account => {
        account.username = account.owner.toLowerCase()
            .split(' ')
            .map(word => word[0])
            .join('');

    });

calculateUserName(accounts)
console.log(accounts);
// const userNames = accounts.map((account) =>
//     calculateUserName(account.owner))
// console.log(userNames);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
    142: Simple Array Methods
*/


// // SLICE
// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -3));

// // SPLICE -- modifies the array
// console.log(arr);
// console.log(arr.splice(2, 2));  // start position & deletecount
// console.log(arr);

// // REVERSE -- modifies the array
// const arr1 = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());

// // CONCAT
// const letters = arr1.concat(arr2);
// console.log(letters);
// console.log([...arr1, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

/*
    143: The new 'at' method -- ES2022
*/

// const arr = [23, 34, 45, 56, 766];
// console.log(arr[2]);
// console.log(arr.at(2));

// // Get last element without knowing the length
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1));
// console.log(arr.at(-1));

/*
    144: Looping Arrays: forEach
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for-of

// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// }

// // foreach is the higher order function which calls the callback function for each of the element in the array
// console.log(`---- FOREACH ----`);
// movements.forEach((movement, i, array) => {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// });

/*
    145: forEach with Maps and Sets
*/

// // Map
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// });

// // SET
// const uniqueCurrencies = new Set(['USD', 'EUR', 'INR', 'GBP', 'USD', 'YEN']);
// console.log(uniqueCurrencies);

// // Key not available in set. So, value appears in that place
// uniqueCurrencies.forEach((value, _, set) => {
//     console.log(value, _, set);
// })

/*
    148: Coding Challenge #1
*/


/*
    Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age,
    and stored the data into an array (one array for each).
    For now, they are just interested in knowing whether a dog is an adult or a puppy.
    A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

    Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

    1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
        So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
    2. Create an array with both Julia's (corrected) and Kate's data
    3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
    4. Run the function for both test datasets

    HINT: Use tools from all lectures in this section so far 😉

    TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
    TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//     const dogsJuliaCorrect = dogsJulia.slice(1, 3);
//     const allDogs = dogsJuliaCorrect.concat(dogsKate);
//     console.log(dogsJuliaCorrect, dogsKate, allDogs);
//     allDogs.forEach((dog, i) => {
//         if (dog >= 3) {
//             console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//         } else {
//             console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//         }
//     });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/*
    150: The map method
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;
// const movementsUSD = movements.map((mov) => mov * euroToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//     movementsUSDfor.push(mov * euroToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescription = movements.map((mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
// console.log(movementsDescription);
