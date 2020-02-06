// Practicing writing and demonstrating use of a simple closure
/*
function Person(pName){
    var _personName = pName;

    this.getPersonName = function(){
        return _personName;
    };
}

var me = new Person("Zachary");
*/



// Practicing writing and demonstrating use of a simple IIFE (iffy) [immediately invoked function expression] the format looks like: (function () {})();
// so it is an anonymous function, and the () at the ends mean we are immediately invoking it.

// 1. global variable pllution
// 2. init only once
// init starts // once
/*
(function () {
var counter = 15;
counter++; // this counter is referencing the one assigned to 15
// ends here
})();

function SomeFunction(){
    var counter = 0;
    counter = counter + 1; // this counter variable is referencing the one assigned a value of 0
}
SomeFunction();
*/


// format for basic IIFE: (function () {})();



// BUDGETY APP
// the x and add variables are private bc inside of IIFE, publicTest is public even though it is in IIFE bc it is in the closure, and publicTest has access to x and add because it is inside of that IIFE

// 1. BUDGET CONTROLLER // module1
var budgetController = (function () {

    // Some code

})();



// 2. UI CONTROLLER // module2
var UIController = (function () {

    // Some code

})();


// GLOBAL APP CONTROLLER
// module3 // we will pass the other two modules into this one so that we can connect, or that they can sort of know about each other
// budgetCtrl = budgetController // UICtrl = UIController
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function(){
        // 1. Get the filled input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        console.log('It works.') // tests for clicking button or key down on ENTER key
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem); // callback so auto called back when needed (someone pressing button)
      

    document.addEventListener('keypress', function(event) {

        
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
})(budgetController, UIController);
