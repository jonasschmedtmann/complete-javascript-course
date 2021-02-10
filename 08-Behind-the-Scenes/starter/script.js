'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var millenial = true; //var is function scoped not block scoped
      const firstName = 'Steven'; // JS first looks in the current scope than variable lookup
      const str = `Oh, and you're a millenial, ${firstName}!`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT'; // Reassigning out scope's variable
    }
    // console.log(str); //only available in the if block
    // console.log(millenial);
    // add(2, 3); // block scoped can't be access outside
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'James';
calcAge(1991);
// console.log(age); // Won't be able to access age because it is one direction
// printAge();// Still no access
