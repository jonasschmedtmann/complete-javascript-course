// function declaration
function calculateAge(birthyear) {
  return 2023 - birthyear;
}

const age = calculateAge(1993);
// function expression
const age2 = function (birthyear) {
  return 2023 - birthyear;
};

// arrow function
const age3 = (birthyear) => 2023 - birthyear;
// In single parameter , brackets are not necessary in parentheses but in multiple it is
const yearToRetire = (age, retirementAge) => retirementAge - age;

console.log(`Current age is ${age}`);
console.log(`Current age is ${age2(1992)}`);
console.log(`Current age is ${age3(1999)}`);
console.log(
  `Age remaining for a person to retire of age ${age} is ${yearToRetire(
    age2(1992),
    60
  )}`
);
