'use strict';

/// element selectors
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
let diceElement = document.querySelector('.dice');

///
// Game start conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
///
const diceRoll = document
  .querySelector('.btn--roll')
  .addEventListener('click', function () {
    let diceValue = Math.trunc(Math.random() * 6) + 1;
    switch (diceValue) {
      case 1:
        console.log('Case 1 executed');
        break;
      case 2:
        // Code to execute if value === 'case2'
        console.log('Case 2 executed');
        break;
      case 3:
        console.log('case 3');
        break;
      case 4:
        console.log('case 4');
        break;
      case 5:
        console.log('case 5');
        break;
      case 6:
        console.log('case 6');
        break;
    }
  });
///
//player1
