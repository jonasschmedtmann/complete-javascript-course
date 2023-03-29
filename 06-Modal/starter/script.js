'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", showModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  // console.log(event.key); logs any key that the user presses
  if (event.key === "Escape" && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// keydown = starts function as soon as you press down on key
// keyup = starts function as soon as you let go of key you just pressed
// keypress = starts function when pressing key continuously
// console.log(event) will give you data on the event itself