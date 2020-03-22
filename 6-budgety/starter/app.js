//Want to have modules to keep separate, independent pieces of code, together in organized units.

// BUDGET CONTROLLER
var budgetController = (function() {

})(); //All of this works because of closures. This is an IIFE.

// UI CONTROLLER
var UIController = (function() {
    //some code
})();

// GLOBALL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    var ctrlAddItem = function() {
    //1. Get the filed input data
    //2. Add the item to the budget controller
    //3. Add the item to the UO 
    //4. Calculate the budget
    //5. Display the budget on the UI
    console.log("It works");
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        //keycode tells which key is pressed when check object in the console. 13 is keycode for enter.
        //which is for older browsers
   });

   
})(budgetController, UIController);
