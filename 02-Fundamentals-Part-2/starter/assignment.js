//Coding challenge 1
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);


// function checkWinner (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log("No team wins...")
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

//Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


//Coding challenge 2
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// function calcTip (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }
// console.log(calcTip(100));

// let bills = [125, 555, 44];
// let tips = [calcTip(bills[0]),
//             calcTip(bills[2]),
//             calcTip(bills[2])];
// console.log(tips);
// console.log(bills[0] + tips[0],
//             bills[1] + tips[1],
//             bills[2] + tips[2]);



//CHALLENGE 3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
// } else {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
// };


//CODING CHALLENGE 4           
function calcTip (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);


//Writing a function 'calcAverage' which takes an array called 'arr' 
//as an argument and calculates the average of all numbers in the 
//given in the given array including a for loop

function calcAverage (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i]; or
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([3, 3, 3]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));




