"use strict"; // All you have to do to activate it for the entire script. Has to be the first line, however.
// You can also use it for a specific function or block, but you might as well use it for the whole script.
// Makes it easier to avoid accidental errors because it forbids us to do certain things and shows errors that it otherwise would fail silently

// One of the most important changes strict mode uses
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // WITHOUT strict mode, this would not show the error
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio"; // Yields an error because interface is a reserved word that might be implemented in the future
// const private = 534; // Same thing. Strict mode reserves these words so we can't use them as variables

// ----------------------------------------------------------------

// A function is code that can be used over and over again

// You can think of functions as a food processor: it takes something and returns something else
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
  // return can return any value from the function. That value can then be used anywhere in the code
}

// fruitProcessor(5, 0); // Logs just 5 0
const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice); // Logs the full "Juice with 5 apples and 0 oranges."
// console.log(fruitProcessor(5, 0)); // Logs the same thing, just doesn't create a variable

// The coding principle DRY: Don't Repeat Yourself

function calcAge1(birthYear) {
  // const age = 2037 - birthYear;
  // return age;
  return 2037 - birthYear; // A condensed version of above
}
const age1 = calcAge1(1991);

// Arguments and parameters aren't interchangeable but still pretty close

// ----------------------------------------------------------------

// Function Declarations vs. Expressions

// Function declaration
function calcAge2(birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

// Function expression
const calcAge3 = function (birthYear) {
  return 2037 - birthYear;
};
const age3 = calcAge3(1991);

// console.log(age2, age3);

// A big difference is that declarations can be called before they're defined in the code, although that may not be a great idea in some cases. You can prefer one over the other but both have their place in JavaScript

// Arrow functions are a special form of function expression which are shorter and therefore faster to write. However, they do not replace all other functions

// Arrow function version of above
const calcAge4 = (birthYear) => 2037 - birthYear;
const age4 = calcAge4(1991);
// console.log(age4);

// Function declaration - function that can be used before it is delcared
// Function expression - essentially a function VALUE stored in a variable
// Arrow function - Great for quick one-line functions. Has no 'this' keyword
// Three different ways of writing functions, but they all work in a similar way: receive data, transform data, and then output data

// -------------------------------- Coding Challenge #1 --------------------------------

const calcAverage1 = (score1, score2, score3, score4, score5, score6) => {
  const avgDolphins = (score1 + score2 + score3) / 3;
  const avgKoalas = (score4 + score5 + score6) / 3;
  console.log(`Average Dolphins score: ${avgDolphins}`);
  console.log(`Average Koalas score: ${avgKoalas}`);
  checkWinner1(avgDolphins, avgKoalas);
};

const checkWinner1 = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("NO ONE WINS");
  }
};

// console.log(calcAverage1(44, 23, 71, 65, 54, 59));
// console.log(calcAverage1(85, 54, 41, 23, 34, 27));

// ---------------- Answer ----------------

const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111); // Testing with random numbers

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// ----------------------------------------------------------------

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]), // This will get the last one in the array
// ];
// You can place function calls into an array because they're expressions (i.e they produce values)

// Methods are basically array operations

// Basic array methods: push, slice, shift, etc.

// -------------------------------- Coding Challenge #2 --------------------------------

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

const calcTip1 = function (bill) {
  const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  // return tip;
  // console.log(
  //   `The bill was ${bill}, the tip was ${tip}, and the total value was ${
  //     bill + tip
  //   }`
  tips1.push(tip);
  // console.log(tips1);
};

const bills1 = [125, 555, 44];
const tips1 = [];
const total1 = [];

bills1.forEach((bill) => {
  // console.log(bill);
  calcTip1(bill);
});

// ---------------- Answer ----------------

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// Note how this is cleaner than creating extra variables
// Also note how 'const totals = bills + tips' would not work because you can't do operations on arrays. It would just concatenate strings

// console.log(bills, tips, totals);

// ----------------------------------------------------------------

// Objects are used to group together variables that belong together.
// One big difference between objects and arrays is that in objects the order you want to retrieve them does not matter at all, whereas in arrays it does. You can only access array eleemnts using their order number. Arrays are useful for more ordered data and objects for more unstructured data.
// Objects are possibly the most fundamental concept in all of JavaScript and there are many ways of creating them. Curly braces are the easist way. It's called the object literal syntax because we are literally writing down the entire object content.

// Two ways of retrieving data from an object: dot notation and bracket notation
// console.log(jonas.lastName);
// console.log(jonas["lastName"]); // These are the exact same thing. Note however that it is a string

// One difference is that you can put any expression in the brackets. Dot notation is cleaner so consider using that when able
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// How to add to an object
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
};

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// Operator precedence: dot (Member Access) and bracket (Computed Member Access) notations have very high precedence and are both left-to-right
// So in the string above, 'jonas.friends' is executed first, then '.length' and '[0]'

// ----------------------------------------------------------------

// Object Methods

const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   // Displays the entire object
  //   return 2037 - this.birthYear;
  //   // You could write 'jonas,birthYear' but this isn't optimal since it repeats code and could cause issues if you ever need to rename anything.
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    // Creates a new property on the object
    return this.age;
    // 'this' is a keyword/variable that's equal to the object calling the method
    // You don't have to have 'return' in there but it's good practice
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas2.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(jonas2.calcAge(1991));
// console.log(jonas2["calcAge(1991)"]);
// These, however, are not optimal even if they don't cause errors. They don't leave the code dry; they repeat data
// console.log(jonas2.calcAge());

// -------------------------------- Coding Challenge #3 --------------------------------

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})!`
//   );
// }

// ---------------- Answer ----------------

const mark2 = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john2 = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark2.calcBMI();
john2.calcBMI();

// console.log(mark2.bmi, john2.bmi);

// if (mark2.bmi > john2.bmi) {
//   console.log(
//     `${mark2.fullName}'s BMI (${mark2.bmi}) is higher than ${john2.fullName}'s BMI (${john2.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john2.fullName}'s BMI (${john2.bmi}) is higher than ${mark2.fullName}'s BMI (${mark2.bmi})`
//   );
// }

// ----------------------------------------------------------------

// One of the things for loops are most used for is looping through arrays

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // Reading from jonas array
  // console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  types[i] = typeof jonasArray[i];
  // types.push(typeof jonas[i]);
}

// console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
// console.log(ages);

// continue and break
// console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  // This will filter out anything that isn't a string

  // console.log(jonasArray[i], typeof jonasArray[i]);
}

// console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  // console.log(jonasArray[i], typeof jonasArray[i]);
}

// ----------------------------------------------------------------

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  // console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // If you don't include the '+1', it seems to run infinitely
  if (dice === 6) console.log("You rolled a 6, gottdang it. Ya blew it!");
}

// -------------------------------- Coding Challenge #4 --------------------------------

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
  // console.log(i);
  // console.log(calcTip(1));
  // bills2.forEach();
  bills2.forEach((bill) => {
    // console.log(bill);
    // calcTip1(bill);
  });
}

// ---------------- Answer ----------------

for (let i = 0; i < bills2.length; i++) {
  const tip2 = calcTip(bills2[i]); // We can use const here because on every iteration a new tip variable is being created. We're not mutating or changing the variable
  tips2.push(tip2);
  totals2.push(tip2 + bills2[i]);
}
console.log("Bills:", bills2, "Tips:", tips2, "Totals", totals2);
// console.log(`Bills: ${bills2}, Tips: ${tips2}, Totals: ${totals2}`);

const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i]; // Exact same as above
  }
  // console.log(sum);
  return sum / arr.length;
};
console.log(`Average is: ${calcAverage2([1, 2, 3])}`);
console.log(calcAverage(totals2));
console.log(calcAverage(tips2));
