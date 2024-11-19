const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimit = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// using ternary operator instead of if/else statement
// const userLimit = spendingLimit[user] ? spendingLimit[user] : 0;

// using optional chaining.? to check if spendingLimit exists. If not, spendingLimit?.[user] will come back as a value or undefined instead of throwing an error
//nullish coalescing operator ?? returns right side when left is null or undefined, otherwise returns left side operand
// const userLimit = spendingLimit?.[user] ?? 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// pure function :D
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUsername = user.toLowerCase();

  return value <= getLimit(limits, user) //return copy of array + new entry if true
    ? [...state, { value: -value, description, user: cleanUsername }]
    : state; // otherwise return state(aka budget array)
};

// in real world: use composing to pass in the newest state into each new entry instead of storing each result and manually passint it in
const newBudget1 = addExpense(budget, spendingLimit, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimit, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimit, 200, 'Stuff', 'Jay');

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' } // if true, retturn an object of copied entry + flag property
      : entry; // if false, return the entry as it was
  })
};

/*
const checkExpensesArrFun = (state, limit) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );
*/

const finalBudget = checkExpenses(newBudget3, spendingLimit);
console.log(finalBudget);

// impure function bc it creates side effect with console.log
const logBigExpenses = function (state, maxLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -maxLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  // const bigExpensesUsingReduce = state
  //   .filter(entry => entry.value <= -maxLimit)
  //   .reduce((prevStr, currStr) =>
  //     `${prevStr} / ${currStr.description.slice(-2)}`,
  //     '');

  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);
