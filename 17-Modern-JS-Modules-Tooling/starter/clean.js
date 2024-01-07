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

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
const getLimitByUser = user => spendingLimits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= limits?.cleanUser
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Candy 🍬');
addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');
console.log(
  'Before expense check: ',
  budget.map(obj => obj)
);

const checkExpenses = function (state, limits) {
  return state.map(obj => {
    return obj.value < -limits?.[obj.user] ? { ...obj, flag: 'limit' } : obj;
  });
};
const ExpenseResult = checkExpenses(newBudget1, spendingLimits);

console.log('ExpenseResult: ', ExpenseResult);

const logBigExpenses = function (budget, bigLimit) {
  const bigExpenses = budget
    .filter(entry => entry.value <= -bigLimit)
    .reduce((acu, entry) => (acu += entry.description.slice(-2) + ' / '), '')
    .slice(0, -2);
  return bigExpenses;
};
console.log(logBigExpenses(newBudget1, 100));
console.log(logBigExpenses(newBudget1, 40));
