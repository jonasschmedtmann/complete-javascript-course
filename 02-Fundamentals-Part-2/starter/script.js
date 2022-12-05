// let abs = "hello";

// function keepTry(s) {
//   console.log(s);
// }

// keepTry(abs);
// keepTry();
// keepTry();

/*

// function declaration because it uses function keyword to declare a function
function juiceMaker(apple, juice) {
  const juices = `${apple} apples and ${juice} juices`;
  return juices;
}

console.log(juiceMaker(3, 2));

const appleJuice = juiceMaker(10, 3);
console.log(appleJuice);

// function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(1982);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1977);
console.log(age1, age2);

// arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
console.log(calcAge3(1980));

const retirement = (birth) => {
  const age = 2022 - birth;
  const retireYears = 65 - age;
  return retireYears;
};

const yearsUntilRetirment = function (birthYear, names) {
  const retire = retirement(birthYear);
  if (retire > 0) {
    console.log(`${names} will retire aftter ${retire} years`);
    return retire;
  } else {
    console.log(`${names} has already retired`);
    return -1;
  }
  // return `${names} will retire aftter ${retire} years`;
};
console.log(yearsUntilRetirment(1983, "tim"));
console.log(yearsUntilRetirment(1950, "david"));

// examples
const cutFruit = (fruit) => fruit * 3;
const fruitMaker = (apple, orange) => {
  const appleJuice = cutFruit(apple);
  const orangeJuice = cutFruit(orange);
  return `${appleJuice} apples and ${orangeJuice} oranges`;
};
console.log(fruitMaker(5, 2));

*/

/*
CHALLENGE #3

const dolphinsScore = [96, 108, 89];
const koalasScore = [88, 91, 110];

// let avgScore = 0;

const averageScore = function (scores) {
  let avgScore = 0;
  for (let i = 0; i < scores.length; i++) {
    avgScore += scores[i];
  }
  let avg = avgScore / scores.length;
  return avg;
};

const avgDolphins = averageScore(dolphinsScore);
const avgKoalas = averageScore(koalasScore);

console.log(avgDolphins, avgKoalas);

const compare = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("Team Dolphins is the winner");
  } else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log("Team Koalas is the winner");
  } else {
    console.log("No team wins");
  }
};

// compare(avgDolphins, avgKoalas);

const average = (a, b, c) => (a + b + c) / 3;

const teamDolphinsAVG = average(44, 23, 71);
const teamKoalasAVG = average(65, 54, 49);
const teamDolphinsAVG1 = average(97, 112, 101);
const teamKoalasAVG1 = average(109, 95, 123);
const teamDolphinsAVG2 = average(97, 112, 101);
const teamKoalasAVG2 = average(109, 95, 106);

const compareFunction = function (dolphins, koalas) {
  if (dolphins >= 2 * koalas && dolphins > 100) {
    console.log("Team Dolphins Wins");
  } else if (2 * dolphins <= koalas && koalas > 100) {
    console.log("Team Koalas Wins");
  } else if (dolphins === koalas && dolphins > 100 && koalas > 100) {
    console.log("Draws");
  } else {
    console.log("No team wins");
  }
};

compareFunction(teamDolphinsAVG, teamKoalasAVG);
compareFunction(teamDolphinsAVG1, teamKoalasAVG1);
compareFunction(teamDolphinsAVG2, teamKoalasAVG2);

*/

/*
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const yearss = new Array(1991, 1984, 2008, 2020);
console.log(yearss);

friends[friends.length - 1] = "Jay";
console.log(friends);

const firstName = "Tim";
const tim = [firstName, "Ha", 2020 - 1982, "IT", friends];

console.log(tim);

const calcAge = function (birthday) {
  return 2022 - birthday;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
  calcAge(years[years.length - 1]),
];

console.log(age);
*/

/*
// Add Element in array are (unshift and push)
const friends = ["Michael", "Steven", "Peter"];

const newLength = friends.push("David");
const newLength1 = friends.unshift("Tim");
const newLength2 = friends.unshift("Tom");

console.log(friends);
console.log(newLength1);
console.log(newLength2);

// Remove Element in array are (pop and shift)
const removeLength = friends.pop();
const removeFirst = friends.shift();
console.log(friends);
console.log(removeLength);
console.log(removeFirst);

console.log(friends.indexOf('Michael'))
console.log(friends.includes('Steven'))
*/

/*
// Coding Challenge #4
const bills = [275, 40, 430]

const tip = function (bill) {
  const restTip = 300 >= bill && bill >= 50 ? bill * 0.15 : bill * 0.20;
  console.log(`The bill was ${bill}, the tip was ${restTip}, and the total value ${bill + restTip}`);
  return restTip;
}

tip(275)

const tableTip = bill => 300 >= bill && bill >= 50 ? bill * 0.15 : bill * 0.20

const tips = [tableTip(bills[0]), tableTip(bills[1]), tableTip(bills[2])]

const tableBills = [bills[0], bills[1], bills[2]]

const total = [tableBills[0] + tips[0], tableBills[1] + tips[1], tableBills[2] + tips[2]]
console.log(tableBills, tips, total)
*/

/*
// Array and Object

const timArray = [
  'tim',
  'ha',
  2022 - 1982,
  'IT',
  ['David', 'Frank', 'Lynn']
]

const timObject = {
  firstName: 'Tim',
  lastName: 'Ha',
  job: 'IT',
  birthYear: 1982,
  friends: ['Ken', 'Frank', 'Lynn'],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2022 - this.birthYear
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old ${this.job}, and has ${this.hasDriversLicense ? "a" : 'no'} driver's license.`
  }
}
const names = 'Name'
// console.log(timObject.'first Name')

console.log(timObject.calcAge())

//Chanellge
// Tim is 40 years old IT, and has a/no driver's license.
console.log(timObject.getSummary())


// console.log(timObject['calcAge'](1982))

// timObject.location = 'California';
// timObject['twitter'] = 'solo';
// console.log(timObject)
// // Tim has 3 friends, and his best friend is called Ken.

// console.log(`${timObject.firstName} has ${timObject.friends.length} friends, and his bes friend is called ${timObject.friends[0]}.`)

*/

// Challenge 3
/*
const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2
    return this.BMI
    // return this.mass / (this.height * this.height)
  }
}

console.log(mark.calcBMI())

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2
    return this.BMI
    // return this.mass / (this.height * this.height)
  }
}

console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
  console.log(`${mark.firstName} ${mark.lastName} weights ${mark.mass} kg and is ${mark.height} tall. ${john.firstName} ${john.lastName} weights ${john.mass} kg and is ${john.height} m tall.`)
} else if (mark.calcBMI() < john.calcBMI()) {
  console.log(`${john.firstName} ${john.lastName} weights ${john.mass} kg and is ${mark.height} tall. ${mark.firstName} ${mark.lastName} weights ${mark.mass} kg and is ${mark.height} m tall.`)
}
*/
// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`)
// }

const timArray = ["tim", "ha", 2022 - 1982, "IT", ["David", "Frank", "Lynn"]];

/*
// Loop backwards
for (let i = timArray.length - 1; i >= 0; i--) {
  console.log(timArray[i])
}
for (let i = 0; i < timArray.length; i++) {
  console.log(timArray[i])
}
*/

/*
// Loop inside the loop exercise
for (let i = 1; i <= 3; i++) {
  console.log(`Starting exercise ${i}`)
  for (let y = 1; y <= 5; y++) {
    console.log(`${i}-----Exercise repetion ${y}`)
  }
}
*/

/*
console.log('typeof of timArray')
for (let i = 0; i < timArray.length; i++) {
  console.log(timArray[i], typeof timArray[i])
}

console.log('Only log strings with continue')
for (let i = 0; i < timArray.length; i++) {
  if (typeof timArray[i] !== 'string') continue;
  console.log(timArray[i], typeof timArray[i]);
}

console.log('Break with numbers')
for (let i = 0; i < timArray.length; i++) {
  if (typeof timArray[i] === 'number') break;
  console.log(timArray[i], typeof timArray[i]);
}


const years = [1991, 2007, 1969, 2020]
const age = []

for (let i = 0; i < years.length; i++) {
  age.push(2022 - years[i])
}
console.log(age)
*/

// for (let i = 1; i <= 3; i++) {
//   console.log(`Starting exercise ${i}`)
//   for (let y = 1; y <= 5; y++) {
//     console.log(`${i}-----Exercise repetion ${y}`)
//   }
// }

/*
console.log('-------------using WHILE LOOPS-----------')

// let i = 1;
// while (i <= 10) {
//   console.log(`Repetition ${i}`)
//   i++;
// }

let randomNumber = Math.trunc(Math.random() * 6) + 1;


while (randomNumber !== 6) {
  console.log(`You rolled ${randomNumber}`)
  randomNumber = Math.trunc(Math.random() * 6) + 1;
}
*/

// Challenege #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

// for (let i = 0; i < bills.length; i++) {
//   const calcTip = function () {
//     if (bills[i] >= 50 && bills[i] <= 300) {
//       const tip = tips.push(bills[i] * 0.15);
//       const total = totals.push(tips[i] + bills[i]);
//     } else {
//       const tip = tips.push(bills[i] * 0.2);
//       const total = totals.push(tips[i] + bills[i]);
//     }
//   };
//   calcTip();
// }

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < totals.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
