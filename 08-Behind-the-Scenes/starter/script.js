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