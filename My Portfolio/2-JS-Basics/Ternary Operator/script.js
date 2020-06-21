/**
 * 
 *  THE TERNARY OPERATOR AND SWITCH STATEMENTS 
 * 
 * TERNARY = 3
 * MEANING 3 PARTS (OPERANDS)
 *  CONDITION BLOCK, IF BLOCK, ELSE BLOCK
 * 
 */

 var firstName = 'John'; 
 var age = 14;

 age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

 var drink = age >= 18 ? 'beer':'juice';
 console.log(drink);


//      ALTERNATIVE TO TERNARY BELOW
//  if (age >= 18) {
//      var drink = 'beer';
//  } else {
//      var drink = 'juice';
//  };

