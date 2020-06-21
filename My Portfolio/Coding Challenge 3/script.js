/********************************
 * CODING CHALLENGE 3
 */

 /**
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
  */


function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }    
    return percentage * bill;
}

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]), 
            tipCalculator(bills[1]), 
            tipCalculator(bills[2])];
            
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);


