//=========================
//BUDGET CONTROLLER ===========
//=========================

var budgetController = (function() {})();

//=========================
//UI CONTROLLER ===========
//=========================

var UIController = (function() {})();

//=========================
//APP CONTROLLER ===========
//=========================

var controller = (function(budgetCtrl, UICtrl) {
    var ctrlAddItem = function() {
        console.log("it works");
        //TODO
        //1. Get Input Data
        //2. Add the Item to The Budget Controller
        //3. Add the Item to The UI
        //4. Calculate the Budget
        //5. Display the Budget on the UI
    };

    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    document
        .querySelector(".add__value")
        .addEventListener("keypress", function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                //13 is the keyCode of "Enter", so whenever the Enter key is pressed
                ctrlAddItem();
            }
        });
})(budgetController, UIController);
