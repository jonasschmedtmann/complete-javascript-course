/*************************************
 * LOOPS AND ITERATION
 */

// counter, condition, counter update
 for (var i = 0; i < 10; i++) {
     console.log(i);
 }

//  i = 0, 0 < 10 true, log i to console, i++
//  i = 1, 0 < 10 true, log i to console, i++
// ...
//  i = 10, 10 < 10 false, break; 

var john = ['John', 'Smith', 1990, 'teacher', false]; 
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//  While loop
while(i<john.length) {
    console.log(john[i]);
    i++;
}

// Continue and Break statements
var frank = ['Frank', 'Mills', 1970, 'driver', true, 'blue']; 
for (var i = 0; i < frank.length; i++) {
    if(typeof frank[i] !== 'string') continue;
    console.log(frank[i]);
}

var frank = ['Frank', 'Mills', 1970, 'driver', true, 'blue']; 
for (var i = 0; i < frank.length; i++) {
    if(typeof frank[i] !== 'string') break;
    console.log(frank[i]);
}


// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}