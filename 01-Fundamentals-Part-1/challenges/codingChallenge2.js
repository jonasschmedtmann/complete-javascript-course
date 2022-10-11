
const score1Dolphins = 97;
const score2Dolphins = 112;
const score3Dolphins = 101;
const higherDolphins = 112;
let averageDolphins = (score1Dolphins + score2Dolphins + score3Dolphins) / 3;

const score1Koalas = 109;
const score2Koalas = 95;
const score3Koalas = 123;
const higherKoalas = 123;
let averageKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3;

// if (averageDolphins > averageKoalas) {
//     console.log(`Dolphins are the winners, with an average of ${averageDolphins}`);
// } else if (averageKoalas > averageDolphins) {
//     console.log(`Koalas are the winners, with an average of ${averageKoalas}`);
// } else {
//     console.log("It's a draw!");
// }

//Bonus 1
if (averageDolphins > averageKoalas && higherDolphins >= 100) {
    console.log(`Dolphins are the winners, with an average of ${averageDolphins}`);
} else if (averageKoalas > averageDolphins && higherKoalas > 100) {
    console.log(`Koalas are the winners, with an average of ${averageKoalas}`);
} else if (averageDolphins === averageKoalas && higherDolphins >= 100 && higherKoalas >= 100) {
    console.log(`It's a draw!`);
} else {
    console.log(`You are both losers!`)
}