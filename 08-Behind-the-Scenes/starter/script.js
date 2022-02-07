'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';

calcAge(1991);
console.log(calcAge(1991));
console.log(age);
