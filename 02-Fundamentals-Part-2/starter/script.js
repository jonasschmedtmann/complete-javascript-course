/* -------------------------------------------------------------------------- */
/*                              Code Challenge 1                              */
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK
*/
/* -------------------------------------------------------------------------- */

//* Pseudo Code: 
// 1. Two arrays of 3 scores each will be passed into the function 
// 2. Each array of scores must be averaged first 
// -> to find an average sum all the scores and divide by the total number of scores 
// 3. Both averages must be compared. If: 
    // a. One score is at least DOUBLE the other score - a team wins 
    // b. Otherwise no one wins 
// 4. Return formatted string like "Koalas win (30 vs. 13)"

const calcAverage = (koalas, dolphins) => {
    // 1️⃣ find the averages 
    const koalasAverage = koalas.reduce((a,b) => (a + b)) / koalas.length; 
    const dolphinsAverage = dolphins.reduce((a,b) => (a + b)) / dolphins.length; 
    
    // 2️⃣ check if one of the numbers is twice as large as the other 
    if (koalasAverage > dolphinsAverage * 2) {
        return `Koalas win (${koalasAverage} vs. ${dolphinsAverage})`; 
    } else if (dolphinsAverage > koalasAverage * 2) {
        return `Dolphins win (${dolphinsAverage} vs. ${koalasAverage})`; 
    }
    
    // else no one has won
    else return "No winner"; 
}

const koalasOne = [44,23,71];
const koalasTwo = [85, 54, 41]; 
const dolphinsOne = [85,54,41]; 
const dolphinsTwo = [23, 34, 27]; 

console.log(calcAverage(koalasOne, dolphinsOne)) // -> No winner 
console.log(calcAverage(koalasOne, koalasTwo)) // -> Koalas win (60 vs. 28)
