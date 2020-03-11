// BUDGET CONTROLLER
var budgetController = (function() {// THis is an immediately invoked function expression

    //This is Expense  function constructor
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    //This is Income  function constructor
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    // This contains the total data of all inc and exp along with totals
    var data = {
        allItems : {
            exp : [],
            inc : []
        },
        totals : {
            exp : 0,
            inc : 0
        }
    };

    return{
        addItem : function(type, desc, val) {
            var newItem, ID;
            // Create New ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            }
            else {
                ID = 0;
            }

            // Create New Item based on inc or exp
            newItem = new Expense(ID, desc, val);

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

        testing : function (){
            console.log(data)
        }
    }

})();


// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    }

    return {
        getinput : function () {
            return {
                 type : document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                 description : document.querySelector(DOMstrings.inputDescription).value,
                 value : document.querySelector(DOMstrings.inputValue).value
            };            
        },

        getDOMStrings : function (){
            return DOMstrings;
        }
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        
        // Retrieving the DOM Strings data from the UI conttoller
        var DOM = UIController.getDOMStrings();
        
        //EVENT LISTERNERS
        // 1. Button click event
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        // 2. Global Event Listener for return on enter key
        document.addEventListener('keypress', function (event) {

            // Filtering the event using keyCode property for keyboard input
            if (event.keyCode === 13 || event.which === 13){
                console.log("Enter was pressed");
                ctrlAddItem();
            }
        });        
    }




    var ctrlAddItem = function (){
        var input, newItem;
        //1. Get the field input data
        input = UIController.getinput();

        //2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. Add the item to the UI
        
        //4. Calculate the budget
        
        //5. Display the budget on UI
    }

    return {
        init : function() {
            console.log("Application has started");
            setupEventListeners();
        }
    }


})(budgetController, UIController);



// Calling the init() function to start the application
controller.init()