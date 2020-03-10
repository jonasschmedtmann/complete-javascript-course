// BUDGET CONTROLLER
var budgetController = (function() {// THis is an immediately invoked function expression

    // Some Code

})();


// UI CONTROLLER
var UIController = (function() {

    return {
        getinput : function () {
            
        }
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function (){

        //1. Get the field input data

        //2. Add the item to the budget controller
        
        //3. Add the item to the UI
        
        //4. Calculate the budget
        
        //5. Display the budget on UI
        console.log("It works")
    }

    //EVENT LISTERNERS
    // 1. Button click event
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    // 2. Global Event Listener for return on enter key
    document.addEventListener('keypress', function (event) {

        // Filtering the event using keyCode property for keyboard input
        if (event.keyCode === 13 || event.which === 13){
            console.log("Enter was pressed");
            ctrlAddItem();
        }

    });


})(budgetController, UIController);