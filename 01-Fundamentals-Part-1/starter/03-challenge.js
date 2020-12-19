const averageDolphins = (96 + 108 + 89)/3;
const averageKoalas = (88 + 91 + 110)/3;
console.log(averageDolphins);
console.log(averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
	console.log("The Dolphins win!");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
	console.log('The Koalas win!');
} else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
	console.log('This is a draw!');
} else {
	console.log("The both lose!");
};