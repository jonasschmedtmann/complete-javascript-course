/* let country = "England";
let continent = "Europe";
let population = 80;

console.log(country);
console.log(continent);
console.log(population); */
/* 
let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.95;
let johnMass = 92;

let marksBMI = markMass / markHeight ** 2;
let johnsBMI = johnMass / johnHeight ** 2;

let markHigherBMI = marksBMI > johnsBMI;

console.log(marksBMI, johnsBMI, markHigherBMI);

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
}

markHeight = 1.88;
markMass = 95;
johnHeight = 1.76;
johnMass = 85;

marksBMI = markMass / markHeight ** 2;
johnsBMI = johnMass / johnHeight ** 2;

markHigherBMI = marksBMI > johnsBMI;

console.log(marksBMI, johnsBMI, markHigherBMI);

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
}
 */

// Coding Challenge #3

/* const dolphin1 = 96;
const dolphin2 = 108;
const dolphin3 = 89;
const koala1 = 88;
const koala2 = 91;
const koala3 = 110;

const averageScoreDolphin = (dolphin1 + dolphin2 + dolphin3) / 3;
const averageScoreKoala = (koala1 + koala2 + koala3) / 3;
console.log(averageScoreDolphin, averageScoreKoala);

if (averageScoreDolphin > averageScoreKoala) {
  console.log("The Dolphins win");
} else if (averageScoreDolphin === averageScoreKoala) {
  console.log("It's a draw");
} else {
  console.log("The Koalas win");
}
 */

// Bonus 1

/* const dolphin1 = 97;
const dolphin2 = 112;
const dolphin3 = 101;
const koala1 = 109;
const koala2 = 95;
const koala3 = 123;

const averageScoreDolphin = (dolphin1 + dolphin2 + dolphin3) / 3;
const averageScoreKoala = (koala1 + koala2 + koala3) / 3;
console.log(averageScoreDolphin, averageScoreKoala);

const minimumScore = 100;
const dolphinHasMinimumScore = averageScoreDolphin >= minimumScore;
const koalaHasMinimumScore = averageScoreKoala >= minimumScore;

if (averageScoreDolphin > averageScoreKoala) {
  if (dolphinHasMinimumScore) {
    console.log(
      `The Dolphins have the higher average Score (${averageScoreDolphin}) and the Minimum Score of ${minimumScore} so have WON the Game.`
    );
  } else {
    console.log(
      `The Dolphins have the higher average Score (${averageScoreDolphin}) BUT do not have the Minimum Score of ${minimumScore} so have NOT WON the Game.`
    );
  }
} else if (averageScoreDolphin === averageScoreKoala) {
  console.log("It's a draw");
} else {
  if (koalaHasMinimumScore) {
    console.log(
      `The Koalas have the higher average Score (${averageScoreKoala}) and the Minimum Score of ${minimumScore} so have WON the Game.`
    );
  } else {
    console.log(
      `The Koalas have the higher average Score (${averageScoreKoala}) BUT do not have the Minimum Score of ${minimumScore} so have NOT WON the Game.`
    );
  }
}
 */

/* const dolphin1 = 97;
const dolphin2 = 112;
const dolphin3 = 101;
const koala1 = 109;
const koala2 = 95;
const koala3 = 106;

const averageScoreDolphin = (dolphin1 + dolphin2 + dolphin3) / 3;
const averageScoreKoala = (koala1 + koala2 + koala3) / 3;
console.log(averageScoreDolphin, averageScoreKoala);

const minimumScore = 100;
const dolphinHasMinimumScore = averageScoreDolphin >= minimumScore;
const koalaHasMinimumScore = averageScoreKoala >= minimumScore;

if (averageScoreDolphin > averageScoreKoala) {
  if (dolphinHasMinimumScore) {
    console.log(
      `The Dolphins have the higher average Score (${averageScoreDolphin}) and the Minimum Score of ${minimumScore} so have WON the Game.`
    );
  } else {
    console.log(
      `The Dolphins have the higher average Score (${averageScoreDolphin}) BUT do not have the Minimum Score of ${minimumScore} so have NOT WON the Game.`
    );
  }
} else if (averageScoreDolphin === averageScoreKoala) {
  if (dolphinHasMinimumScore) {
    console.log(
      `Both teams have the same score (${averageScoreDolphin}) and also the Minimum Score of ${minimumScore} so it's a DRAW`
    );
  } else {
    console.log(
      `Both teams have the same score (${averageScoreDolphin}) BUT NOT the Minimum Score of ${minimumScore} so NO-ONE WINS`
    );
  }
} else {
  if (koalaHasMinimumScore) {
    console.log(
      `The Koalas have the higher average Score (${averageScoreKoala}) and the Minimum Score of ${minimumScore} so have WON the Game.`
    );
  } else {
    console.log(
      `The Koalas have the higher average Score (${averageScoreKoala}) BUT do not have the Minimum Score of ${minimumScore} so has NOT WON the Game.`
    );
  }
}
 */

/* const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolohins win the tropy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy! 🏆");
} else {
  console.log("No one wins the trophy 😢");
}
 */

// Coding Challenge 4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
