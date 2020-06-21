/** 
 *  FUNCTIONS
 * 
 */

 function calculateAge(birthYear) {
     return 2020 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1940);
 var ageJane = calculateAge(1969);
 var ageJoe = calculateAge(1959);

 console.log(ageJohn, ageMike, ageJane, ageJoe);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year); 
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }

};

yearsUntilRetirement(1959, 'Joe');
yearsUntilRetirement(1940, 'Mike');

/**
 * ***********************************
 * FUNCTION STATEMENTS AND EXPRESSIONS 
 */

    // function decleration:         
// var whatDoYouDo(job, firstName){};



    //  function expression:                      //  always produce a single value. 
 var whatDoYouDo = function(job, firstName) {
     switch(job) {
         case 'teacher':
             return firstName + ' teaches kids how to code';
         case 'driver':
             return firstName + ' drives a cab in Lisbon.';
         case 'designer':
             return firstName + ' designs beautiful websites';
         default: 
            return firstName + ' does something else';
     }
 };

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('designer', 'Joe'));
 console.log(whatDoYouDo('retired', 'Mike'));

