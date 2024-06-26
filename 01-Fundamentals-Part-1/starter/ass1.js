// Lecture 1

country = "india";
let population = 136000000;
continent = "asia";

console.log(country +" "+ population +" "+ continent);


//Lecture 2

let IsIsland = false;
let language;
console.log(country +" "+ population +" "+ continent +" "+ IsIsland +" "+ language);


//Lecture 3

language = "Hindi";
// const Nolanguages = 26;
// const states = 27;
// const country = "pakistan";
// console.log(country +" "+ population +" "+ continent +" "+ IsIsland +" "+ language
//     +" "+ Nolanguages +" "+ states +" "+ country
// );

// Lecture 4

let halfPop = population/2;
console.log(halfPop);
console.log(halfPop + 1);

console.log(halfPop>600000);

console.log(halfPop<600000);

description = 'Portugal is in Europe, and its 11 million people speak portuguese'
console.log(description);

//Lecture 5

// { we can use "typeof" function to determine the variable data tyye}

console.log(typeof(halfPop));
console.log("the paragh is " +" "+ description);
//or
description = "hello";
console.log(`${description} hello`);

//Lecture 6
console.log('9'-'5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Operator Precedence and Type Coercion
// The key differences arise due to operator precedence and type coercion:

// Operator Precedence: JavaScript evaluates operators in a specific order. Both + and - are left-associative, meaning they are evaluated from left to right.
// Type Coercion: The - operator always coerces its operands to numbers. The + operator, however, coerces its operands based on their types:
// If either operand is a string, the + operator concatenates the operands as strings.
// If both operands are numbers, the + operator performs addition.

numneighbour = 1;
if(numneighbour == 1) console.log("only 1 border");

let sarahhome = (population,language,IsIsland)=> {
    if(population>50000 && language === "english" && IsIsland === true){
    console.log("perfect chhoice");
}
    else {
        console.log("this isn't perfect desniation");
    }
};

sarahhome(2000000, "english" , false);
sarahhome(20000000, "english" , true);




