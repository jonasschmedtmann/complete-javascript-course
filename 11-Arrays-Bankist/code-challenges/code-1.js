const checkDogs = (dogsJulia, dogsKate) => {
    const updatedDogsJulia = dogsJulia.slice(1,-2);
    console.log(dogsJulia);
    const allDogs = [...updatedDogsJulia, ... dogsKate];
    allDogs.forEach((dog, i) => console.log(dog >= 3 ? `Dog number ${i+1} is an adult, and is ${dog} years old`:`Dog number ${i+1} is still a puppy 🐶, and is ${dog} years old`))
}

// checkDogs([3, 5, 2,12, 7], [4, 1, 15, 8, 3])


// const calcAverageHumanAge = dogAges => {
//     const humanAges = dogAges.map(dogAge => {
//        return dogAge <= 2 ? 2 * dogAge : 16 + (dogAge * 4);
//     })
    
//     const adults = humanAges.filter(age => age >= 18);
//     return adults.reduce((a,b) => a+b) / adults.length;
// }

const calcAverageHumanAge = dogAges => dogAges.map(dogAge => {
       return dogAge <= 2 ? 2 * dogAge : 16 + (dogAge * 4);
    }).filter(age => age >= 18).reduce((a,b,i,arr) => a+b / arr.length, 0)
 



console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
