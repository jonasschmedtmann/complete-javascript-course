"use strict";

/* let calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calcAge1(1995));

//Arrow
let calcAge2 = (birthYear) => 2037 - birthYear;
console.log(calcAge2(1995));

const yearsUntilRetired = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  if (retirement < 0) {
    return `${firstName} has not been born yet!`;
  } else {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  }
};
console.log(yearsUntilRetired(1995, "Phillip"));
 */

/* let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

let checkWinner = function () {
  if (scoreDolphins > scoreKoalas) {
    return console.log(`Koalas win ${scoreKoalas} vs. ${scoreDolphins}`);
  } else if (scoreDolphins < scoreKoalas) {
    return console.log(`Dolphins win ${scoreDolphins} vs. ${scoreKoalas}`);
  } else {
    return console.log("No team wins...");
  }
};
+checkWinner();
 */

/* const friends = ["Mike", "Jim", "Phil"];
friends.push("jay");
console.log(friends); */

let calcTip = function (bill) {
  if (bill > 50 && bill < 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
  /*  bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2; */
};

let bills = [125, 555, 44];
let tips = [calcTip(125), calcTip(555), calcTip(44)];

let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(calcTip(125));
