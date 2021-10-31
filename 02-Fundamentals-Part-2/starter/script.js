// "use strict";
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest)
// function logger() {
//   console.log("My name is Adnan");
// }
//calling running invoking the function
//logger();
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const applesJuice = fruitProcessor(5, 0);
// console.log(applesJuice);
// const applesOrangesJuice = fruitProcessor(3, 8);
// console.log(applesOrangesJuice);

//function decleration and expression

//functio decleration: (you can call it befor)
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

//function expression: (you can NOT call it befor)
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1999);
// console.log(age1, age2);

// function nameOfIt(para1, para2) {
//   return para1 + para2;
// }
// const num1 = nameOfIt(1, 4);
// console.log(num1);
// const num2 = function (par1, par2) {
//   return par1 + par2;
// };
// const secondNum = num2(2, 6);
// console.log(secondNum);

//arrow funciton
//Arrow
// const calcAge3 = (birthYear) => 2033 - birthYear; //no need for return here because it is one line
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRe = (birthYear) => {
//   const age = 2033 - birthYear;
//   const retirement = 65 - age;
//   return retirement; //we need return statement here (more than one line of cose)
// };
// const yourRetermentAge = yearsUntilRe(1991);
// console.log(yourRetermentAge);
//function calling other function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}
console.log(fruitProcessor(2, 3));
