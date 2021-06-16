// *********************  💎💎 Functions 💎💎 *********************
const Newnes = () => {
    console.log("Heyyyy")
}

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// ****************  💎💎 Functions Declaration 💎💎 *******************
// A function parameter is the placeholder defined in the function 
// A function argument is the actual value supplied when calling the function
//Declared functions can be called before they are defined 

const age1 = calcAge1(1991);

function calcAge1(birthyear) {
    return 2037 - birthyear;
}

const age1 = calcAge1(1991);


// ****************  💎💎 Functions Expression💎💎 *********************
const calcAage2 = function(birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAage2(1991);

console.log(age1, age2);


// ****************  💎💎 Arrow Functions💎💎 *********************
// FUnction expression 
// We do not need to write a curly bracket if it is a one liner 
//we do not need to write "return". The return is implicit
// Arrow functions cannot use the "This" keyword 
const calcAge2 = function(birthyear) {
    return 2037 - birthyear;
}

// Arrow Function 
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);


// *****  💎💎 Functions calling other functions💎💎 *****************
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(2, 3));

/////////////////////////////////////////////////////////////////////////
// Coding Challenge #1 Functions 
/* 
There is a new gymnastics discipline, which works differently. 
Each team competes 3 times, and then the average of teh 3 teams is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average  score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores. 
2. Use the function to calculate the average for both teams. 
3. Create a function 'checkWinner' that takes the average score of each team as paarmeters 9'avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to teh rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2. 
5. Ignore draws. 

TEST DATA 1: Dolphins score 44, 23 and 71. 
             Koalas score 65, 54 and 49.

TEST DATA 2: Dolphins score 85, 54 and 41. 
             Koalas score 23, 34 and 27. 
    The Team only wins if they get at least 2 times the score of the other
*/
//Solution 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//Solution 2
const DolpAverage = calcAverage(44, 23, 71);
const KoalAverage = calcAverage(65, 54, 49);

// Solution 3
const checkWinner = (DolpAverage, KoalAverage) => {
    if (DolpAverage > KoalAverage) {
        console.log(`Dolphins win with (${DolpAverage} vs ${KoalAverage})`);
    } else console.log(`Koalas win with (${KoalAverage} vs ${DolpAverage})`);
}

//successfully published to github

// Solutin with TEST DATA 2
const avgDolph = calcAverage(85, 54, 41);
const avgKoala = calcAverage(23, 34, 27);

const checkWinner2 = (avgDolph, avgKoala) => {
    if (avgDolph >= 2 * avgKoala) {
        console.log(`Dolphins win with (${avgDolph} vs ${avgKoala})`);
    } else if (avgKoala >= 2 * avgDolph) {
        console.log(`Koala's win with (${avgKoala} vs ${avgDolph})`);
    }
}




// ******************  💎💎 JS ARRAYS 💎💎 ********************