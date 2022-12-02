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
