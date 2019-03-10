/*************************
 CC #1
 *************************/
/*var markMass = 85;
var markHeight = 1.75;
var johnMass = 95;
var johnHeight = 2.05;

var markBMI = markMass / (markHeight*markHeight);
var johnBMI = johnMass / (johnHeight*johnHeight);

var higherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's BMI? " + higherBMI);*/
/*************************
 CC #2
 *************************/
/*teamJohn = (89 + 120 + 103)/3;
teamMike = (116 + 94+ 123)/3;
teamMary = (97 + 134+ 105)/3;

console.log(teamJohn, teamMike, teamMary);

if (teamJohn > teamMike && teamJohn > teamMary ) {
    console.log("John'\s team wins with the score " + teamJohn);
} else if (teamMike > teamJohn && teamMike > teamMary) {
    console.log("Mike'\s team wins with the score " + teamMike);
} else if (teamMary > teamJohn && teamMary > teamMike) {
    console.log("Mary'\s team wins with the score " + teamMary);
} else {
    console.log("It'\s a draw with the score " + teamJohn);
}*?
/*************************
 CC #3
 *************************/
/*var bills = [124, 48, 268];
var tips, final;
function tipCalculator (bill) {
    if(bill>0 && bill<50) {
        bill*=0.2;
    }else if (bill>=50 && bill<200) {
        bill*=0.15;
    }else {
        bill*=0.1;
    }
    return bill;
}
tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
]
final = [
    tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2]
]
console.log('tips array ' + tips);
console.log('final array ' + final);*/
/*************************
 CC #4
 *************************/
/*var john = {
    name: "John",
    mass: 95,
    height: 1.95,
    calcBmi: function () {
        this.bmiIndex = this.mass/(this.height*this.height);
        return this.bmiIndex;
    }
};
var mark = {
    name: "Mark",
    mass: 105,
    height: 1.95,
    calcBmi: function() {
        this.bmiIndex = this.mass/(this.height*this.height);
        return this.bmiIndex;
    }
}
// 1
// john.calcBmi();
// mark.calcBmi();
// if (john.bmiIndex > mark.bmiIndex) {
//     console.log(john.name + ' has a bigger bmi-index than ' + mark.name + '. And it\'s' + john.bmiIndex);
// }else if (john.bmiIndex < mark.bmiIndex){
//     console.log(mark.name + ' has a bigger bmi-index than ' + john.name + '. And it\'s' + mark.bmiIndex);
// }else {
//     console.log(mark.name + ' and ' + john.name + ' have an equal bmi-index' + '. And it\'s ' + mark.bmiIndex);
// }
//2
if (john.calcBmi() > mark.calcBmi()) {
    console.log(john.name + ' has a bigger bmi-index than ' + mark.name + '. And it\'s ' + john.bmiIndex);
}else if (john.bmiIndex < mark.bmiIndex){
    console.log(mark.name + ' has a bigger bmi-index than ' + john.name + '. And it\'s ' + mark.bmiIndex);
}else {
    console.log(mark.name + ' and ' + john.name + ' have an equal bmi-index' + '. And it\'s ' + mark.bmiIndex);
}
*/
/*************************
 CC #5
 *************************/
john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    final: [],
    calcTips: function () {
        for (var i=0; i<this.bills.length;i++) {
            var billItem = this.bills[i];
            var percentage;
            if(billItem<50) {
                percentage = .2;
            }else if (billItem>50 && billItem<200) {
                percentage = .15;
            }else {
                percentage = .1;
            }
            this.tips.push(billItem*percentage);
            this.final.push(this.tips[i]+billItem);
        }
    }
}

mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    final: [],
    calcTips: function () {
        for (var i=0; i<this.bills.length;i++) {
            var billItem = this.bills[i];
            var percentage;
            if(billItem<100) {
                percentage = .2;
            }else if (billItem>100 && billItem<300) {
                percentage = .1;
            }else {
                percentage = .25;
            }
            this.tips.push(billItem*percentage);
            this.final.push(this.tips[i]+billItem);
        }
    }
}

function avgTips (arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}


john.calcTips();
console.log(john.bills);
console.log(john.tips);
console.log(john.final);
console.log('---');
mark.calcTips();
console.log(mark.bills);
console.log(mark.tips);
console.log(mark.final);
console.log('---');
var avgJohnTips = avgTips(john.tips);
var avgMarkTips = avgTips(mark.tips);
console.log('---');
console.log(avgJohnTips, avgMarkTips);
console.log('---');
if (avgJohnTips > avgMarkTips) {
    console.log('John\'s family has a biggest average tips ' + avgJohnTips);
}else if (avgMarkTips > avgJohnTips) {
    console.log('Mark\'s family has a biggest average tips ' + avgMarkTips);
}else {
    console.log('Mark\'s and John\'s families have the same amount of tips ' + avgJohnTips);
}










