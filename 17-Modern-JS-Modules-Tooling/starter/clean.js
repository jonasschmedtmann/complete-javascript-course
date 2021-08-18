// class personalBudget {
//   #budget = [];
//   constructor(user, limit) {
//     this.user = user;
//     this.limit = limit;
//   }

//   // check if a purchase is over budget
//   _limitExists() {
//     this.limit ? '' : (this.limit = 0);
//   }
// }

// const jonas = new personalBudget('jonas', 1500);
// const matilda = new personalBudget('matilda', 100);

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const limitExists = (limits, user) => limits?.[user] ?? 0; // Optional Chaining + Nullish Coalescing

const flagExpenses = (state, limits) =>
  state.map(mov =>
    mov.value < -limitExists(limits, mov.user) ? { ...mov, flag: 'limit' } : mov
  );

function addExpense(state, limits, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();
  return value <= limitExists(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
}
const newBudget = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const finalBudget = flagExpenses(newBudget, spendingLimits);
// addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
// addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');

function bigExpenses(state, bigExpenses) {
  const output = state
    .filter(v => v.value <= -bigExpenses)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // budget.forEach(mov => {
  //   if (mov.value <= -limit) {
  //     output.push(mov.description.slice(-2));
  //   }
  // });
  console.log(output);
  // console.log(output.reduce((acc, v) => (acc += v.description.slice(-2))));
  // output = output.slice(0, -2); // Remove last '/ '
}
bigExpenses(finalBudget, 1000);
