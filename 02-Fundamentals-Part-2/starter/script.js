// *********************  💎💎 Functions 💎💎 *********************
const Newnes = () => {
    console.log("Heyyyy")
}

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// ****************  💎💎 Functions Declaration 💎💎 *******************
// A function parameter is the placeholder defined in the function 
// A function argument is the actual value supplied when calling the function
//Declared functions can be called before they are defined 

const age1 = calcAge1(1991);

function calcAge1(birthyear) {
    return 2037 - birthyear;
}

const age1 = calcAge1(1991);


// ****************  💎💎 Functions Expression💎💎 *********************
const calcAage2 = function(birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAage2(1991);

console.log(age1, age2);


// ****************  💎💎 Arrow Functions💎💎 *********************
// FUnction expression 
// We do not need to write a curly bracket if it is a one liner 
//we do not need to write "return". The return is implicit
// Arrow functions cannot use the "This" keyword 
const calcAge2 = function(birthyear) {
    return 2037 - birthyear;
}

// Arrow Function 
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);


// *****  💎💎 Functions calling other functions💎💎 *****************
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(2, 3));