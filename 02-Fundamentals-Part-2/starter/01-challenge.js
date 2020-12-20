const calcAverage = (score1, score2, score3) => {	
	return (score1 + score2 + score3)/3;
};

const dolphins1 = calcAverage(85, 54, 41);
const koalas1 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas){
	console.log(`Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`);
	avgDolphins >= 2*avgKoalas ? console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`): console.log(`Koalas win(${avgKoalas} vs ${avgDolphins})`);
}

checkWinner(dolphins1, koalas1);