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

/* -------------------------------------------------------------------------- */
/*                              Code Challenge 2                              */
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �
*/
/* -------------------------------------------------------------------------- */

//* Pseudo Code: 
// Phase one: 
// 1.) Calculate tip percentage: 
    // a.) tip 15% if the value of the bill is between 50 and 300 
    // b.) if the value is higher the tip is 20% 
// 2.) Calculate the actual tip, 15% or 20% of the total bill 
// 3.) Return the total the tip will be 

const calcTip = (bill) => {
    // 1. get tip % 
    const percentage = bill >= 50 && bill <= 300 ? .15 : .20; 
    // 2. get total tip
    const totalTip = bill * percentage; 
    // 3. return tip amount 
    return totalTip.toFixed(2); 
}

// Phase two:
// Now let's use arrays - create an array of tips calculated by the function above 
const customerBills = [125, 555, 44]; 
const calcTips = (bills) => {
    const tips = []; 
    // iterate through the array calculating tip amount for each total 
    for (let i=0; i<bills.length; i++) {
        const tip = calcTip(bills[i]); 
        tips.push(tip); 
    }
    return tips; 
}
console.log(calcTips(customerBills)); // -> [ '18.75', '111.00', '8.80' ]

// STRETCH 🏹
// I want to refine the function to use an array method (forEach), and return an array of arrays, with both the bill amount, and the tip total
function refinedCalcTips(bills) {
    const customerBillAndTips = []; 

    bills.forEach((bill) => {
        const tip = calcTip(bill); 
        customerBillAndTips.push([bill, tip]); 
    }); 

    return customerBillAndTips; 
}
console.log(refinedCalcTips(customerBills)) // -> [ [ 125, '18.75' ], [ 555, '111.00' ], [ 44, '8.80' ] ]
//? I just noticed that my tip amount is being returned as a string, I wonder why that is? 🤔
