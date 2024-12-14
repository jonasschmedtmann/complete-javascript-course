'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
//in a querySelector if there are multiple matches it will select only the first match
//console.log(btnsOpenModel);

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = function () {
  // console.log('Btn clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  console.log(btnsOpenModel[i].textContent);
  btnsOpenModel[i].addEventListener('click', openModel);
}

// we are not writing closeModel() coz we do not want to directly execute the function rather we want the js engine to execute it when the click event happens. so we will only write the function name
btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

//handling keyboard events. these are 'so-called' global events because they do not happen on one specific element. these usually listen on whole documents
//listening on the entire doc.
// there are 3 keyboard events : keydown, ketpress, keyup
document.addEventListener('keydown', function (event) {
  //  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
