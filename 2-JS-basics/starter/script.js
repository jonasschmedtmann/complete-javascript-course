// var tipsGiven = [];
// var billsPaid = [];
// var calculateTip = function (billAmount){
//     var percentage;
//     var calculatedTip;
//     if (billAmount < 50){
//         percentage = 0.2
//     }
//     else if(billAmount < 201){
//         percentage = 0.15;
//     }
//     else{
//         percentage = 0.1;
//     }
//     calculatedTip = billAmount * percentage;        
//     tipsGiven.push(calculatedTip)
//     billsPaid.push(calculatedTip + billAmount);
// }

// calculateTip(124);
// calculateTip(48);
// calculateTip(268);
// console.log(tipsGiven);
// console.log(billsPaid);

// var john = {
//     fullName : "john",
//     mass : 80,
//     height : 1.7,
//     calcBMI : function(){
//         this.bmi = this.mass / (this.height* this.height); 
//         return this.bmi;
//     }
// };

// var mark = {
//     fullName : "mark",
//     mass : 90,
//     height : 2.1,
//     calcBMI : function(){
//                  this.bmi = this.mass / (this.height* this.height) ;
//                  return this.bmi;
//     }
// };

// console.log("John's BMI is "+ john.calcBMI())
// console.log(john)
// console.log("Mark's BMI is " + mark.calcBMI())
// console.log(mark)

function calcAvgTip(tipsArray){
    sum = 0;
    for(i=0 ; i < tipsArray.length; i++){
        sum = sum + tipsArray[i];
    }
    return sum/tipsArray.length;
}

var johnBillsObject = {
    bills : [124, 48, 268, 180, 42],
    tips : [],
    paidAmounts : [],
    calculateTip : function (){
        for( i=0 ; i< this.bills.length; i++){
            currentBillAmount = this.bills[i];
            if(currentBillAmount < 50){ 
                currentTipAmount = currentBillAmount * 0.2;
            }
            else if(currentBillAmount < 200){
                currentTipAmount = currentBillAmount * 0.15;
            }
            else{
                currentTipAmount = currentBillAmount * 0.1;
            }
            this.tips.push(currentTipAmount)
            this.paidAmounts.push(currentBillAmount + currentTipAmount);
        }
    }
}
johnBillsObject.calculateTip();
console.log("John's tips calculated ",johnBillsObject.tips);
console.log("John's Bills Paid",johnBillsObject.paidAmounts);


var markBillsObject = {
    bills : [77, 375, 110, 45],
    tips : [],
    paidAmounts : [],
    calculateTip : function (){
        for( i=0 ; i< this.bills.length; i++){
            currentBillAmount = this.bills[i];
            if(currentBillAmount < 100){ 
                currentTipAmount = currentBillAmount * 0.2;
            }
            else if(currentBillAmount < 300){
                currentTipAmount = currentBillAmount * 0.10;
            }
            else{
                currentTipAmount = currentBillAmount * 0.25;
            }
            this.tips.push(currentTipAmount)
            this.paidAmounts.push(currentBillAmount + currentTipAmount);
        }
    }
}
markBillsObject.calculateTip();
console.log("Mark's tips calculated ",markBillsObject.tips);
console.log("Mark's bills Paid",markBillsObject.paidAmounts);

var johnsAvgTipAmount = calcAvgTip(johnBillsObject.tips);
console.log("John's Avg Tip Amount", johnsAvgTipAmount)
var markssAvgTipAmount = calcAvgTip(markBillsObject.tips);
console.log("Mark's Avg Tip Amount", markssAvgTipAmount)

if(johnsAvgTipAmount < markssAvgTipAmount){
    console.log("Mark");
}
else if (johnsAvgTipAmount > markssAvgTipAmount){
    console.log("John");
}
else {
    console.log("Equal");
}