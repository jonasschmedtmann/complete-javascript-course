'use strict';

const element = document.querySelector('.hidden');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const showmodal = document.querySelectorAll('.show-modal');

// Loop through each element in the NodeList and add event listener
showmodal.forEach(function(modal) {
    modal.addEventListener('click', function () {
        element.style.display = 'inline';
        overlay.classList.remove('hidden');
    });
});


document.querySelector('.close-modal').addEventListener('click', closeModal);

// Close the modal when the Escape key is pressed
document.addEventListener('keydown', keyPress);

// Function to close the modal
function closeModal() {
    element.style.display = 'none';
    body.style.filter = 'blur(0)';
    overlay.classList.add('hidden');
}

// Function to handle key presses
function keyPress(e) {
    if (e.key === "Escape") {
        closeModal();  // Reuse closeModal for the Escape key
    }
}