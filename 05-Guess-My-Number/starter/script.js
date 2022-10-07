'use strict';

/* 
    72: Selecting and manipulating DOM elements
*/
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🍾 Correct Number!!';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(
    document.querySelector('.guess').value
);