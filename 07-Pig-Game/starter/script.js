'use strict';
// Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let dice = 0;

const scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
function rollDice() {
  // Disable clicking during animation
  diceEl.style.pointerEvents = 'none';

  // Reset any previous transforms
  diceEl.style.transform = 'rotate(0deg)';

  // Animation sequence
  const animationSequence = [
    { rotation: 360, image: 'dice-3.png' },
    { rotation: -300, image: 'dice-5.png' },
    { rotation: 240, image: 'dice-2.png' },
    { rotation: -180, image: 'dice-4.png' },
    { rotation: 120, image: 'dice-1.png' },
    { rotation: -60, image: 'dice-6.png' },
  ];

  // Randomize final result

  // Perform animated roll

  let currentStep = 0;
  const rollAnimation = setInterval(() => {
    if (currentStep < animationSequence.length) {
      diceEl.style.transform = `rotate(${animationSequence[currentStep].rotation}deg)`;
      diceEl.src = animationSequence[currentStep].image;
      currentStep++;
    } else {
      // Final result
      clearInterval(rollAnimation);
      diceEl.style.transform = 'rotate(0deg)';
      diceEl.src = `dice-${dice}.png`;
      // rollResult.textContent = `You rolled: ${dice}`;
      diceEl.style.pointerEvents = 'auto';
    }
  }, 100);
}

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  rollDice();

  dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');

  if (dice !== 1) {
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});