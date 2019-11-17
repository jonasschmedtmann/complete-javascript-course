/*****************************
* CODING CHALLENGE 2 (Video 18)
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the winner to the console. 
Also include the average score in the output.

APMNote: Consider the possibility of a tie for highest average score.

3. Then change the scores to show different winners. Don't forget to take into account there might be a draw 
(the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner 
to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch 
the solution, it's no problem :)

5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/* SOLUTION 1: if/else */
/*
var teamJohnAvg = 89 + 120 + 103 / 3;
var teamMikeAvg = 116 + 94 + 123 / 3;
var roundJohnAvg = Math.round(teamJohnAvg);
var roundMikeAvg = Math.round(teamMikeAvg);

console.log('John\'s team\'s average: ' + teamJohnAvg)
console.log('Mike\'s team\'s average: ' + teamMikeAvg)


if (teamJohnAvg > teamMikeAvg) {
  console.log('John\'s team is the winner with ' + roundJohnAvg + ' points!');
} else if (teamMikeAvg > teamJohnAvg) {
  console.log('Mike\'s team is the winner with ' + roundMikeAvg + ' points!');
} else {
  console.log('The two teams are tied!');
}
*/

/* SOLUTION 2 (with bonus): swith statements */

var teamJohnAvg = 89 + 120 + 103 / 3;
var teamMikeAvg = 116 + 94 + 123 / 3;
var teamMaryAvg = 97 + 134 + 105 / 3;

/*
var teamJohnAvg = 210;
var teamMikeAvg = 209;
var teamMaryAvg = 208;
*/
var roundJohnAvg = Math.round(teamJohnAvg);
var roundMikeAvg = Math.round(teamMikeAvg);
var roundMaryAvg = Math.round(teamMaryAvg);

console.log('John\'s team\'s average: ' + teamJohnAvg)
console.log('Mike\'s team\'s average: ' + teamMikeAvg)
console.log('Mary\'s team\'s average: ' + teamMaryAvg)

switch (true) {
  // John wins
  case ((teamJohnAvg > teamMikeAvg) && (teamJohnAvg > teamMaryAvg)):
    console.log('John\'s team is the winner with ' + teamJohnAvg + ' points!');
    break;
  // Mike wins
  case ((teamMikeAvg > teamJohnAvg) && (teamMikeAvg > teamMaryAvg)):
    console.log('Mike\'s team is the winner with ' + teamMikeAvg + ' points!');
    break;
  // Mary wins
  case ((teamMaryAvg > teamJohnAvg) && (teamMaryAvg > teamMikeAvg)):
    console.log('Mary\'s team is the winner with ' + teamMaryAvg + ' points!');
    break;
  // John and Mike tied
  case ((teamJohnAvg === teamMikeAvg && teamJohnAvg > teamMaryAvg)):
    console.log('John\'s team and Mike\'s team are tied with ' + teamJohnAvg + ' points!');
    break;
  // John and Mary tied
  case ((teamJohnAvg === teamMaryAvg && teamJohnAvg > teamMikeAvg)):
    console.log('John\'s team and Mary\'s team are tied with ' + teamJohnAvg + ' points!');
    break;
  // Mike and Mary tied
  case ((teamMikeAvg === teamMaryAvg && teamMikeAvg > teamJohnAvg)):
    console.log('Mike\'s team and Mary\'s team are tied with ' + teamMikeAvg + ' points!');
    break;
  // 3-way tie
  case ((teamMikeAvg === teamMaryAvg && teamMikeAvg === teamJohnAvg)):
    console.log('All three teams are tied with ' + teamJohnAvg + ' points!');
    break;
}
