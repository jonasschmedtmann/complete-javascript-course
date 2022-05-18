// const $Country = "Russia Federation";
// const $Continent = "Asia";
// let $Population = 8;
// $Population++;

// let $FinlandPop = 6;
// const $WorldPop = 33;

// const isIsland = false;
// const $Language = "Russian";

// const $Description = "Portugal is in Europe, and its 11 million people speak portuguese";

// console.log($Country);
// console.log($Continent);
// console.log($Population / 2);
// console.log($Population > $FinlandPop);
// console.log($Population <= $WorldPop);

const massMark = 78;
const massJohn = 92;

const tallMark = 1.69;
const tallJohn = 1.95;

const $BMIMark = massMark / tallMark ** 2;
const $BMIJohn = massJohn / (tallJohn * tallJohn);
const $markHigherBMI = $BMIMark > $BMIJohn;

console.log($BMIMark);
console.log($BMIJohn);
console.log($markHigherBMI);

if ($BMIMark > $BMIJohn) {
console.log("Mark's BMI is higher than John's");
} else {
console.log("John's BMI is higher than Mark's!");
}



