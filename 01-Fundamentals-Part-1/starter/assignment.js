
//variables
// let country = "Nigeria";
// let continent = "Africa";
// let population = "200,000,000";

// console.log(country + " is an " + continent + " country, with about " + population + " people");

//data types

//Basic operators
// let country = "Nigeria";
// let continent = "Africa";
// let population = 20;

// console.log(population / 2);
// population++;
// console.log(population);

// let finland = 6
// console.log(population >= finland)

// let unknownCountry = 33
// console.log(population <= unknownCountry);

// const desccription = country + " is in " + continent + " and it's " + population + " million people speak various languages."
// console.log(desccription);

//Coding challege 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn);
// console.log(markHigherBMI);

//Coding challege 2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

// if(markHigherBMI) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})`)
// }


//Coding challenge 3
// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 115) / 3;

// console.log(dolphinsAverage, koalasAverage);ß

// if(dolphinsAverage > koalasAverage ) {
//     console.log("Dolphins win the trophy!")
// } else if (dolphinsAverage < koalasAverage) {
//     console.log("Koalas win the trophy!")
// } else if (dolphinsAverage === koalasAverage) {
//     console.log("No winner")
// }

//Bonus task 1 & 2
// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;

// console.log(dolphinsAverage, koalasAverage);

// if(dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//     console.log("Dolphins win the trophy!")
// } else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
//     console.log("Koalas win the trophy!")
// } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
//     console.log("Both win the trophy")
// } else {
//     console.log("No one wins the trophy")
// }


//Challenge 4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip},
 and the total value is ${bill + tip}`);