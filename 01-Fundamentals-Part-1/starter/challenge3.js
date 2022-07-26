const dolphinScore = (97 + 112 + 101) / 3;
const koalaScore = (109 + 95 + 106) / 3;
const minScore = 100;
if (dolphinScore > koalaScore) {
  console.log("And the winners are Dolphins!!!");
} else if (dolphinScore < koalaScore) {
  console.log("And the winners are Koalas!!!");
} else {
  console.log("Draw!!!");
}

// bonus
console.log("BONUS 1");
if (dolphinScore > koalaScore && dolphinScore >= minScore) {
  console.log(`Dolphins win with score of ${dolphinScore}`);
} else if (koalaScore > dolphinScore && koalaScore >= minScore) {
  console.log(`Koalas win with score of ${koalaScore}`);
} else if (
  dolphinScore === koalaScore &&
  koalaScore >= minScore &&
  dolphinScore >= minScore
) {
  console.log("Draw!!!!");
} else {
  console.log("No one wins!");
}
// bonus
