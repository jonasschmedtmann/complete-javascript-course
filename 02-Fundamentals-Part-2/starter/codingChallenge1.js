"use strict";
const calculateAverage = (scores) => (scores[0] + scores[1] + scores[2]) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins * 2 <= avgKoalas) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})"`;
  } else if (avgKoalas * 2 <= avgDolphins) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})"`;
  } else {
    return `No team wins !!`;
  }
};
function operation() {
  const avgKoalas = calculateAverage(new Array(23, 34, 27));
  const avgDolphins = calculateAverage(new Array(85, 54, 41));
  console.log(checkWinner(avgDolphins, avgKoalas));
}
operation();
