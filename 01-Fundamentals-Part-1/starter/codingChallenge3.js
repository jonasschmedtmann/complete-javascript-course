let avScoreDolph;
let avScoreKoal;
let totScoreDolh;
let totScoreKoal;

//test data 1
// totScoreDolh = 100 + 108 + 89;
// totScoreKoal = 98 + 91 + 110;


// test data Bonus1
totScoreDolh = 97 + 112 + 101;
totScoreKoal = 109 + 95 + 106;

// test data Bonus2
// totScoreDolh = 97 + 112 + 101;
// totScoreKoal = 109 + 95 + 106;

// test data Bonus2 - part 2
// totScoreDolh = 33 + 33 + 33;
// totScoreKoal = 33 + 33 + 33;

avScoreDolph = totScoreDolh / 3
avScoreKoal = totScoreKoal / 3
console.log("Average score Dolphins:", avScoreDolph);
console.log("Average score Koalas:", avScoreKoal);


if (avScoreDolph >= 100 && avScoreDolph > avScoreKoal) {
    console.log("Dolphins win");
} else if (avScoreKoal >= 100 && avScoreKoal > avScoreDolph) {
    console.log("Koalas win");
} else if (avScoreDolph === avScoreKoal && avScoreDolph >= 100) {
    console.log("Draw! - both win trophy");
} else {
    console.log("No winner!")
}