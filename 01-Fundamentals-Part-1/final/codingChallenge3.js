////////////////////////////////////
// Coding Challenge #3

/*


체조팀은 Dolphins와 Koalas 두 팀이다. 그들은 서로 3번 경쟁한다. 평균 점수가 가장 높은 우승자가 트로피를 차지합니다!

1. 아래 테스트 데이터를 사용하여 각 팀의 평균 점수를 계산합니다.
2. 팀 평균 점수를 비교하여 경기 우승자 결정, 그리고 콘솔에 인쇄합니다. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team,
   and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

3. 최소 점수 100에 대한 요구 사항을 포함하십시오. 이 규칙에서, 한 팀이 다른 팀보다 더 높은 점수를 가지고 동시에 100점 이상의 점수를 얻은 경우에만 승리한다. 
   힌트: 논리 연산자를 사용하여 최소 점수를 테스트하고 여러 개의 다른 경우 블록 😉
4. 보너스 2: 최소 점수는 무승부에도 적용됩니다! 그래서 무승부는 두 팀 모두 점수가 같고 100점 이상일 때만 일어난다. 그렇지 않으면, 어떤 팀도 트로피를 받지 못한다.

테스트 데이터: Dolphins score 96, 108, 89입니다. Koalas score 88점, 91점, 110점을 받는다.
시험 데이터 보너스 1: Dolphins score 97, 112, 101점을 받는다. Koalas score 109, 95, 123점을 받는다.
시험 데이터 보너스 2: Dolphins score 97, 112, 101점을 받는다. Koalas score 109, 95, 106점을 받는다.

GOOD LUCK 😀 


*/

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (109 + 95 + 106) / 3;

// if (dolphinsScore > koalasScore) {
//   console.log("Dolphins team wins");
// } else if (koalasScore > dolphinsScore) {
//   console.log("Koalas team wins");
// } else if (koalasScore === dolphinsScore) {
//   console.log("The match ended in a draw");
// }

//보너스 1
/* const dolphinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 106) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log("Dolphins team wins");
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log("Koalas team wins");
} else if (koalasScore === dolphinsScore) {
  console.log("The match ended in a draw");
} */

//보너스 2
const dolphinsScore = (97 + 112 + 81) / 3;
const koalasScore = (109 + 95 + 86) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log("Dolphins team wins");
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log("Koalas team wins");
} else if (
  koalasScore === dolphinsScore &&
  koalasScore >= 100 &&
  dolphinsScore >= 100
) {
  console.log("The match ended in a draw");
} else {
  console.log("No one wins");
}
