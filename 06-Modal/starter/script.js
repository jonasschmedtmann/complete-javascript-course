'use strict';
const showBtns = document.querySelectorAll(".show-modal");
const closeBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < showBtns.length; i++) {
    const btn = showBtns[i];
    btn.addEventListener("click", function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
}

closeBtn.addEventListener("click", function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})

overlay.addEventListener("click", function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})

document.addEventListener("keyup", function(e){
if(e.key === "Escape"){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
})