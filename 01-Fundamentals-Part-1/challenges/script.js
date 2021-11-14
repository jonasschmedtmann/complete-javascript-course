// challenge #1
const bmiCalc = (mass, height) => Math.round(mass / height ** 2);

const massMark = 78,
  heigthMark = 1.69;

const massJohn = 92,
  heigthJohn = 1.95;

let markHigherBMI =
  bmiCalc(massMark, heigthMark) > bmiCalc(massJohn, heigthJohn);

//challenge #2
console.log(
  markHigherBMI
    ? `Mark's BMI (${bmiCalc(
        massMark,
        heigthMark
      )}) is higher than John's (${bmiCalc(massJohn, heigthJohn)})!`
    : `John's BMI (${bmiCalc(
        massJohn,
        heigthJohn
      )}) is higher than Mark's! (${bmiCalc(massMark, heigthMark)})`
);

function avgCalc(score) {
  let sum = 0;

  if (!score.length) return sum;

  for (i = 0; i < score.length; i++) {
    sum += score[i];
  }
  return Math.round(sum / score.length);
}

//challenge #3
var scenario = 3;

const dolphinsScore1 = [96, 108, 89],
  koalasScore1 = [88, 91, 110];

const dolphinsScore2 = [97, 112, 101],
  koalasScore2 = [97, 112, 101];

const dolphinsScore3 = [97, 112, 101],
  koalasScore3 = [109, 95, 106];

let dolphinsScore = [],
  koalasScore = [];

switch (scenario) {
  case 1:
    console.log("scenario-1");
    dolphinsScore = dolphinsScore1;
    koalasScore = koalasScore1;
    break;
  case 2:
    console.log("scenario-2");
    dolphinsScore = dolphinsScore2;
    koalasScore = koalasScore2;
    break;
  case 3:
    console.log("scenario-3");
    dolphinsScore = dolphinsScore3;
    koalasScore = koalasScore3;
    break;
}

console.log(scenario, dolphinsScore, koalasScore);

let dolphinesAvg = avgCalc(dolphinsScore);
let koalasAvg = avgCalc(koalasScore);

let winner = dolphinesAvg - koalasAvg;
console.log(
  winner > 0 ? "Winner is Dolphin's" : winner ? "Winner is Koala's" : "Draw"
);

//challenge #4
