//Want to have modules to keep separate, independent pieces of code, together in organized units.

// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id; 
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value) {
        this.id = id; 
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        }, 
        totals: {
            exp: 0, 
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem;
 
            newItem = new Expense(ID, des, val); 

        }
    };
})(); //All of this works because of closures. This is an IIFE.

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type', 
        inputDescription: '.add__description', 
        inputValue: '.add__value', 
        inputBtn: '.add__btn'
    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        }, 
        getDOMstrings: function() {
            return DOMstrings;
        }
    };  
})();

// GLOBALL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
            //keycode tells which key is pressed when check object in the console. 13 is keycode for enter.
            //which is for older browsers
        });
    };
    


    var ctrlAddItem = function() {
        //1. Get the filed input data
        var input = UICtrl.getInput();
        //2. Add the item to the budget controller
        //3. Add the item to the UO 
        //4. Calculate the budget
        //5. Display the budget on the UI
    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }
   
})(budgetController, UIController);

controller.init();