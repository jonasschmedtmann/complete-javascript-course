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
//Arrays can be defined in the following methods below;
const friends = ['Michael', 'Steven', 'Peter'];

const years = new Array(1991, 1994, 2008, 2020);

//Arrays can also contain expressions, other arrays etc... 
const firstName = 'Samuel'
const samuel = [firstName, 'Agbo', 2037 - 1990, friends];

const age1 = calcAge3(years[0]);
const age2 = calcAge3(years[1]);
const age3 = calcAge3(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge3(years[0]), calcAge3(years[0]), calcAge3(years[years.length - 1])];

console.log(ages);

// ****************  💎 BASIC ARRAY METHODS 💎 ******************
// 1. The push method : Adds elements to the end of the array
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
// The push method also returns the lenght of the array

//2. Unshift: Adds an element to the start of the array
friends.unshift('John');
console.log(friends)


//Remove Elements 
//1. pop: Removes the last element in the array
//The pop() method also returns the popped element which can also be used / stored in a variable
friends.pop();
const popped = friends.pop();
console.log(friends);

//2. shift: Removes the first element in the array
// shift also returns the removed element
friends.shift();

//indexOf shows the position
console.log(friends.indexOf('Steven'));

//includes uses strict equality. THe includes methods can be used to right conditinals. It returns 'true' or 'false'
console.log(friends.includes('Bob'));


//Coding Challeng #2
/*
Steven is building his tip calculator, using the same rules as before:
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. 

1. Write a function 'calcTip' that takes any bill value as an input and returns the correspondig tip, cacluated based on the rules above. Test the function using a bill value of 100. 

2. Create an array 'bills' containing the test data below. 

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before. 

4. BONUS: Create an array 'total' containing the total values, hence; bill + tip. 

TEST DATA: 125, 555 and 44

*/



const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 55, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[1] + tips[1], bills[2] + tips[2]];



// ****************  💎💎 OBJECTS 💎💎 ******************
const samuel = {
    firstName: 'Samuel',
    lastName: 'Agbo',
    age: 2037 - 1991,
    job: 'web developer',
    friends: ['Michael', 'Peter', 'Steven']
};

//we can use the dot operator to get the last name property value
console.log(samuel.lastName);

//the bracket notation can also be used as follows;
console.log(samuel['lastName']); //we do not necessary put the property here

const nameKey = 'Name'; //extracting the first and last name
console.log(samuel['first' + nameKey]);
console.log(samuel['last' + nameKey]);

const ageKey = 'age'
console.log(samuel[ageKey]);

// Another cool example of a use-case of the bracket notation
const interestedIn = prompt('What do you want to know about Samuel? Choose between firstName, lastName, age, job and friends');
//points to remember: prompt() always returns a string value, in this case we are using the string value to obtain the property name that we want to see the value of
if (samuel[interestedIn]) {
    console.log(samuel[interestedIn]);
} else {
    console.log('Wrong input, Please try again')
}

//Adding elements to an Object
//1. Using the dot notation
samuel.location = 'Accra'

//2. Using the bracket notation 
samuel['twitter'] = '@agbostone';

// Challenge 
// "Samuel has 3 friends, and his best friend is Michael"

console.log(samuel.firstName + samuel.friends.length + 'and his best friend is called' + samuel.friends[0]);

console.log(`${samuel.firstName} has ${samuel.friends.length} friends, his best friend is ${samuel.friends[0]}`);






/******************💎💎💎 OBJECT METHODS 💎💎💎|**************** */
const stone = {
    firstName: 'Samuel',
    lastName: 'Agbo',
    birthYear: 1990,
    job: 'web developer',
    friends: ['Ambruce', 'James', 'Maxwell'],
    hasDriversLicense: true,

    // we can put in a function expression in a object. A function declaration cannot be used here
    //This is called a method. A method is literally a property of an object that holds a function 
    calcAge: function(birthYear) {
        return 2037 - birthYear;
    }
}

console.log(stone.calcAge(1990));