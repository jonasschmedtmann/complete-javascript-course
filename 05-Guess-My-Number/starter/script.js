'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 3;
document.querySelector('.score').textContent = '#';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
