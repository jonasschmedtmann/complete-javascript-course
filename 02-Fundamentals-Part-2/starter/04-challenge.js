const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = (bill) => {
	if (bill >= 50 && bill <= 300){
		return bill * 0.15;
	} else {
		return bill * 0.2;
	}
};

for(let bill = 0; bill < bills.length; bill++){
	let tip = calcTip(bills[bill]);
	tips.push(tip);
	total.push(bills[bill] + tip);
}

const calcAverage = (arr) => {
	let sum = 0;
	for(let num = 0; num < arr.length; num++){
		sum+= arr[num];
	}
	let average = sum/arr.length;
	return average;
}

console.log(tips);
console.log(total);
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(total));