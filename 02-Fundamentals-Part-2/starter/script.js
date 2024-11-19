/*

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius: '))
  };
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());


const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }

  console.log(max, min);
  return max - min;
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

console.log(amplitudeNew);

*/


/*
///////////////////////////////////////
// Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀

// SOLVED

// 1. create function to avg 3 scores
const calcAverage = (s1, s2, s3) => {
  const avg = (s1 + s2 + s3) / 3;
  console.log(avg);

  return avg;
};

// 2. calc avg for both teams
const scoreDolphins = calcAverage(44, 23, 71); //46
const scoreKoalas = calcAverage(65, 54, 49); //56


// 3. function to evaluate winner
// team ONLY wins if it has at least DOUBLE the average score of the other team
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`🏆 Dolphins win!`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`🏆 Koalas win!`);
  } else {
    console.log('No one wins 👎🏼');
  }
};

checkWinner(scoreDolphins, scoreKoalas);

*/

//////////////////////////////////////

/*
// Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

// SOLVED

const printForecast = ([...arr]) => {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const days = i + 1;
    console.log(`${current}°C in ${days} days`);
  }
};

const testData1 = [17, 21, 23];
printForecast(testData1);
printForecast([12, 5, -5, 0, 4]);

*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// Solved
function calcTip([...bills]) {
  let tip;
  let total;

  for (let i = 0; i < bills.length; i++) {
    const bill = Number(bills[i]);

    if (bill >= 50 && bill <= 300) {
      tip = Number(parseFloat(bill * 0.15).toFixed(2));
      total = Number(parseFloat(bill + tip).toFixed(2));
      console.log(`Bill: $${bill} \nTip (15%): $${tip} \nTotal: $${total}`);
    } else {
      tip = Number(parseFloat(bill * 0.15).toFixed(2));
      total = Number(parseFloat(bill + tip).toFixed(2));
      console.log(`Bill: $${bill} \nTip (20%): $${tip} \nTotal: $${total}`);
    }
  };
};

const billsArr = [125, 555, '44'];
calcTip(billsArr);