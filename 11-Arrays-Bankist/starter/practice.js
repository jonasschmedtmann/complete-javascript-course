'use strict';

// ---------------------- Code Challenge #1 ----------------------- //

// Julia Data
const juliaData1 = [3, 5, 2, 12, 7];
const juliaData2 = [9, 16, 6, 8, 3];

//Kate Data
const kateData1 = [4, 1, 15, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const copyDogsJulia = dogsJulia.slice();
  copyDogsJulia.splice(-2);
  copyDogsJulia.splice(0, 1);

  const totalDogs = copyDogsJulia.concat(dogsKate);
  totalDogs.forEach((dog, i) =>
    console.log(
      `Dog number ${i + 1} is ${
        dog > 0 && dog < 3
          ? 'is still a puppy 🐶'
          : `an adult and is ${dog} years old`
      }`
    )
  );
};

// checkDogs(juliaData1, kateData1);
// checkDogs(juliaData2, kateData2);

// ---------------------- Code Challenge # 2 ----------------------- //
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  // console.log(humanAges);
  const greaterThan18 = humanAges.filter(age => age >= 18);
  // console.log(greaterThan18);
  // const average =
  //   greaterThan18.reduce((acc, curr) => acc + curr, 0) / greaterThan18.length;

  //OR this could be done like this
  const average = greaterThan18.reduce(
    (acc, curr, _, arr) => acc + curr / arr.length,
    0
  );
  return average;
};

// console.log(calcAverageHumanAge(testData1));
// console.log(calcAverageHumanAge(testData2));

// ----------------------- Code Challenge #3 ---------------------------- //

const avgHumanAgeChaining = function (ages) {
  const test = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, curr, _, arr) => acc + curr / arr.length, 0);

  return test;
  // .reduce((acc, curr, _, arr) => acc + curr / arr.length);
};
// console.log(avgHumanAgeChaining(testData1));
// console.log(avgHumanAgeChaining(testData2));

// ------------------- Coding Challenge #4 ------------------ //
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
// console.log(dogs);

const foodRange = function (food, recommended) {
  const lowerRange = food > recommended * 0.9;
  const upperRange = food < recommended * 1.1;
  if (lowerRange && upperRange) {
    return `in range`;
  } else if (lowerRange && !upperRange) {
    return `over`;
  } else if (upperRange && !lowerRange) {
    return `under`;
  }
};

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `${dogSarah.owners[0]}'s dog eats ${foodRange(
    dogSarah.curFood,
    dogSarah.recommendedFood
  )} what her dog should eat`
);

3;

const ownersEatTooMuch = dogs.filter(
  dog => foodRange(dog.curFood, dog.recommendedFood) === 'over'
);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(
  dog => foodRange(dog.curFood, dog.recommendedFood) === 'under'
);

// 4.

// console.log(
//   `${ownersEatTooLittle
//     .flatMap(curr => curr.owners)
//     .join(' and ')} have dogs that eat too little!`
// );

// console.log(
//   `${ownersEatTooMuch
//     .flatMap(curr => curr.owners)
//     .join(' and ')} have dogs that eat too much!`
// );

// 5.

// console.log(dogs.some(curr => curr.curFood === curr.recommendedFood));

// // 6.

// console.log(
//   dogs.some(
//     curr => foodRange(curr.curFood, curr.recommendedFood) === 'in range'
//   )
// );

// 7.

const ownersEatJustRight = dogs.filter(
  dog => foodRange(dog.curFood, dog.recommendedFood) === 'in range'
);

//8.

const sortedDogs = [...dogs].sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);

// console.log(sortedDogs);
