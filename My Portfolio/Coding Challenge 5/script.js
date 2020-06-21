/********************************
 * CODING CHALLENGE 5
 */


 /** ********************************************************************************
  *  Coding Challenge 3
  * 
  *         FLASHBACK
  *  
  * John and his family went on a holiday and went to 3 different resturants. 
  * The bills were $124, $48, and $268.
  * 
  * To tip the waiter a fair amount, John created 
  * a simple tip calculator (as a function). 
  * He likes to tip 20% of the bill when the bill is 
  * less than $50, 15% when the bill is between $50 and $200,
  * and 10% if the bill is more than $200. 
  * 
  * In the end, John would like to have 2 arrays:
  * 1.) Containing all three tips (one for each bill)
  * 2.) Containing all three final paid amounts (bill + tip). 
  * 
  * (NOTEL: to calculate 20% of a value, simply multiply it with 20/100 = 0.2)  * 
  * 
  * 
  *          FLASHBACK
  * *********************************************************************************
  */


/********************************
 * CODING CHALLENGE 5
 */
 /**
  * 
  * Remember the tip calculator challenge above? Let's create a more advanced version
  * using everything we've learned! 
  * 
  * This time, John and his family went to 5 different resturants. Ths bills were
  * $124, $48, $268, $180, and $42.
  * 
  * John likes to tip 20% of the bill when the bill is 
  * less than $50, 15% when the bill is between $50 and $200,
  * and 10% if the bill is more than $200. 
  * 
  * Implement a tip calculator using objects and loops:
  * 1.) Create an object with an array for the bill values
  * 
  * 2.) Add a mehtod to calculate the tip
  * 
  * 3.) This method should include a loop to iterate
  * over all the paid bills and do the tip calculations
  * 
  * 4.) As an output, create 
  *     - a new array containing all tips
  *     - an array containing final payments (bill + tip). 
  * 
  * HINT: Start with two empty arrays [] as properties and then fill them up 
  * in the loop.
  * 
  * EXTRA: Mark's family also went on a holiday, going to 4 different resturants. 
  * This bills were $77, $375, $110, $45. 
  * 
  * Mark likes to tip 20% of the bill when the bill is less than $100, 
  * 10% when the bill is between $100 and $300m and 25% if the bill is more than 
  * $300 (different than John). 
  * 
  * 5.) Implement the same functionality as before. This time
  * using Mark's tipping rules. 
  * 
  * 6.) Create a function (not a method) to calculate the average of a given 
  * array of tips. 
  * HINT: Loop over the array, and in each iteration store the current sum in a variable
  * (Starting from 0). After you have the sum of the array, divide it by the number
  * of elements in it (that's how you calculate the average)
  * 
  * 7.) Calculate the average tip for each family 
  * 
  * 8.) Log to the console which family paid the highest tips on average 
  * 
  * 
  * 
  * 
  */

var john = {
    fullName : "John Smith",
    bills : [124, 48, 268, 180, 42],
    calcTips : function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++){

            // Determine the percentage based on tipping rules
            var percentage; 
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;                
            } else if(bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
        
 
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}




var mark = {
    fullName : "Mark Mills",
    bills : [77, 475, 110, 45],
    calcTips : function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++){

            // Determine the percentage based on tipping rules
            var percentage; 
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;                
            } else if(bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
        
 
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}




function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;  //divide the sum by elements in the array
}


// Do all the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + " \'s family pays higher tips, with an average of $" + john.average);
} else {
    console.log(mark.fullName + " \'s family pays higher tips, with an average of $" + mark.average);
}


