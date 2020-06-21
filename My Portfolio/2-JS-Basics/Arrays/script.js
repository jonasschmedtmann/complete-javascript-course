/** 
 *  
 *  ARRAYS
 * 
 */

//    INITIALIZE NEW ARRAY
 var names = ['John', 'Joe', 'Jane'];
 var years = new Array(1990, 1969, 1948);

 console.log(names[0]);


 // Mutate array data 
 console.log(names);
 console.log(names.length); 

 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);

//  DIFFERENT DATA TYPES
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
console.log(john);

// METHODS FOR ARRAYS
john.push('blue');      // Adds elements to the END of array 
john.unshift('Mr.');  // Adds elements to the FRONT of array
console.log(john);

john.pop();         // Removes element from END of array
john.shift();       // Removes element from FRONT of array
console.log(john);

console.log(john.indexOf(1990));   // returns if element is present, the index. otherwise -1 
//  useful for testing if an item is actually in the array or not

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John IS a deisgner';
console.log(isDesigner);
