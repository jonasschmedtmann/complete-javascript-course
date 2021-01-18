'use strict';  //activates strict mode or secure code to avoid accidental errors//
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!')

// const interface = "Audio"; //Uncaught SyntaxError: Unexpected strict mode reserved word//

// const private = 534; //reserved word


//LESSON: FUNCTIONS//

function logger() {
  console.log('My name is James')
}
//calling /  running / invoking function
logger();
logger();
logger();

function fruitprocessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitprocessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitprocessor(2, 4);
console.log(appleOrangeJuice)

const num = Number("23");



//LESSON: FUNCTION DECLARATION VS. EXPRESSIONS//

// //Function declaration eexample//
// const age1 = calcAge1(1991)//can call function first and define it later, but not for "expressions"-hoisting//

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991); //<= these are called arguments//

//Function expression example//
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;//can store a function as a variable, because it is a value//
}
const age2 = calcAge2(1991);
console.log(age1, age2)


//LESSON: ARROW FUNCTIONS//

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

//LESSON: FUNCTIONS CALLING OTHER FUNCTIONS//

function cutFruitPieces(fruit) {
  return fruit * 4; //calling a function helps "Don't repeat yourself!"
}

function fruitprocessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitprocessor(2, 3));



//LESSON: REVIEWING FUNCTIONS//
const calcAge = function (birthYear) {
  return 2037 - birthYear; //birthyear function is completely unrelated to other functions-local variable to other functions
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} has already retired 🎊🎉`)
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎊🎉`)
    return -1;
  }

  return retirement;
  // return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

*/

///////////////////////SECTION 2: CODING CHALLENGE #1///////////////////////////

//returns the average score for each game//
const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
  return (scoreOne + scoreTwo + scoreThree) / 3;
};
// Test Data #1
const avgDolphins = calcAverage(44, 23, 71);
const winKoalas = calcAverage(65, 54, 49);

// //Test Data #2
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(winDolphins, winKoalas) {

  if (winDolphins >= (winKoalas * 2)) {
    const avgDolphins = calcAverage(44, 23, 71);
    console.log(`Dolphins are the champions! (${} vs.${winKoalas})`);
    return winDolphins;
  } else if (winKoalas >= (winDolphins * 2)) {
    const avgKoalas = calcAverage(65, 54, 49);
    console.log(`Koalas are the winners (${winKoalas} vs.${winDolphins})`);
    return winKoalas;
  } else {
    return `no winner`
  }
}

console.log(checkWinner(0, 0))
