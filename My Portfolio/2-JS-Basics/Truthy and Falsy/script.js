/**
 * 
 *  TRUTHY AND FALSY VALUE AND EQUALITY OPERATORS
 * 
 */

 // FALSY VALUES: undefined, null, 0, '', NaN 

//  TRUTHY VALUES: NOT falsy values

//  HANDY TEST TO SEE IF A VARIABLE HAS BEEN DEFINED
var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined.');
};
//  HANDY TEST TO SEE IF A VARIABLE HAS BEEN DEFINED

//  EQUALITY OPERATORS
if (height == '23') {
    console.log('The == operator does type coercion!');
}
// best practice is to use the strict equality operator === 

