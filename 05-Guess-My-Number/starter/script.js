'use strict';

let text = document.querySelector('.message').textContent;

text = 'hello';

document.querySelector('.guess').textContent = 'x';

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.guess').value = 5;
});
