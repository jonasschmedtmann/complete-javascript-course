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



// 2. UI CONTROLLER // module2 // write some methods to get some data for us or to calculate something
var UIController = (function () {

    var DOMstrings = { // these are private
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }



    return {
    
        
        getInput: function(){
            // ! This function returns an object with three methods (query selector) bc it is more efficient since it will auto run all 3, instead of just writing/reading them in order. Call the method in the controller
            return {
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },

        getDOMstrings: function(){ // this exposes DOMstrings to the public so we can use them elsewhere
            return DOMstrings;
        }
    };
})();


// GLOBAL APP CONTROLLER -- the place where we tell the other modules what to do. We call the methods in here, and then you can pass that methods data into the budgetController
// module3 // we will pass the other two modules into this one so that we can connect, or that they can sort of know about each other
// budgetCtrl = budgetController // UICtrl = UIController
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); // callback so auto called back when needed (someone pressing button)
        document.addEventListener('keypress', function(event) {
    
            
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };



    var ctrlAddItem = function(){
        // 1. Get the filled input data (calling the getInput method in UIController)
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
       // console.log('It works.') // tests for clicking button or key down on ENTER key
    };
    
    
})(budgetController, UIController);
