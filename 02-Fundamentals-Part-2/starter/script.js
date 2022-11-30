// let abs = "hello";

// function keepTry(s) {
//   console.log(s);
// }

// keepTry(abs);
// keepTry();
// keepTry();

// function declaration because it uses function keyword to declare a function
function juiceMaker(apple, juice) {
  const juices = `${apple} apples and ${juice} juices`;
  return juices;
}

console.log(juiceMaker(3, 2));

const appleJuice = juiceMaker(10, 3);
console.log(appleJuice);

// function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(1982);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1977);
console.log(age1, age2);
