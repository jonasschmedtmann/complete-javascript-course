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

var john = {
    fullName : "john",
    mass : 80,
    height : 1.7,
    calcBMI : function(){
        this.bmi = this.mass / (this.height* this.height); 
        return this.bmi;
    }
};

var mark = {
    fullName : "mark",
    mass : 90,
    height : 2.1,
    calcBMI : function(){
                 this.bmi = this.mass / (this.height* this.height) ;
                 return this.bmi;
    }
};

console.log("John's BMI is "+ john.calcBMI())
console.log(john)
console.log("Mark's BMI is " + mark.calcBMI())
console.log(mark)

