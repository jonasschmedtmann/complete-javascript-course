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