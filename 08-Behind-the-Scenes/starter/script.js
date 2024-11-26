'use strict';

//using a function declaration 

function calcAge(birthYear) {
    //this f(x) is defined inthe global scope
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, YOu are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial1 = true;
            const str = `Oh, and you're a millenila, ${firstName}`;
        }
        console.log(millenial1);
        //var variables are function scoped 

        function add(a, b) {
            return a + b;
        }
        printAge();
        return age;
    }

    const firstName = 'Samuel'
    calcAge(1991);

    //The age variable is out of scope
    console.log(age);
}


// The Temporal Deadzone (TDZ)
console.log(me);
console.log(job);
console.log(year);

var me = 'Samuel';
let job = 'programmer';
const year = 1990


//Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// The 'this' keyword.
// 1. 
const calcAge = function(birthYear) {
    console.log(2037 - birthYear)
    console.log(this);
};
calcAge(1991);

// 2. Inside an arrow function 
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear)
    console.log(this);
};
calcAge(1990);

//3. Inside an object 
const samuel = {
    year: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    },
};
samuel.calcAge();

// Primitives vrs Reference 
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//  Reference
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage', jessica);
console.log('After marriage', marriedJessica);