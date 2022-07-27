function calcAverage(score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  return average;
}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Doplhins win (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else
    console.log(
      `No one wins! Koalas (${scoreKoalas} vs. ${scoreDolphins}) Doplhins`
    );
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(checkWinner(scoreDolphins, scoreKoalas));
