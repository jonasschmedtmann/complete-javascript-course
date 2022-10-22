'use strict';

/* 
    93: Scoping in practice
*/

function calcAge (birthYear) {
    const age = 2022 - birthYear;
    console.log(firstName);     // Scope-chain

    function printAge () {
        let output = `You are ${age}, born in ${birthYear}`;      // Scope-chain
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            // Creating a new variable with same name as in outerScope
            const firstName = 'Kaushik';
            // Re-assigning outer scope variable
            output = 'New OutPut'

            const msg = `Oh!! you are a millenial, ${firstName}`;
            console.log(msg);

            function add (a, b) {
                return a + b;
            }

            console.log(output);
        }
        // add(3, 4);               // functions are block scoped in 'strict mode'
        // console.log(msg);        // const, let are block scoped
        console.log(millenial);     // Var is function scoped
    }

    printAge();

    return age;
}

const firstName = 'Vishu';
calcAge(1992);