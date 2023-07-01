"use strict";

function fruitProcess(apples, oranges) {
  const juice = `Juice has been made with ${apples} apples and ${oranges} oranges through function declaration.`;
  return juice;
}

const fruitProcessThroughExpression = function (apples, oranges) {
  return `Juice has been made with ${apples} apples and ${oranges} oranges through expression.`;
};
const piecesOfFruits = (fruits) => fruits * 4;
const fruitProcessThroughArrowFunction = (apples, oranges) =>
  `Juice has been made with ${piecesOfFruits(
    apples
  )} pieces of apples and ${piecesOfFruits(
    oranges
  )} pieces of  oranges through arrow function.`;

console.log(fruitProcess(2, 3));
console.log(fruitProcessThroughExpression(4, 5));
console.log(fruitProcessThroughArrowFunction(5, 5));
