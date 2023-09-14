'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// in queryselector it only selects the FIRST element it finds
// const btnsOpenModal = document.querySelector('.show-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button CLicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener(
  'click',
  closeModal /*notice that we don't add the closing parenthesis after the function name, this would immediately call the function as soon as the page opened*/
);

overlay.addEventListener('click', closeModal);

//Keyboard events
//a keyboard event is just another event, they're "global evenets" since they don't occur with a specific element

document.addEventListener('keydown', function (pressedKey) {
  if (pressedKey.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//adding and removing classes is the main way we manipulate styles in webpages
//you can do it by individual CSS properties but that will normally end up being a pain
