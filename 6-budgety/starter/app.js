//BUDGET CONTROLLER
var budgetController = (function() {
    
    //Function Constructor 
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
     
    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;

    var data = {
        allItems : {
            allExpenses : [],
            allIncomes : []
        },
        totals : {
            exp : 0,
            inc : 0
        }
    };
})();




//UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType : '.add__type',
        inputDescription :'.add__description',
        inputValue :'.add__value',
        inputButton : '.add__btn'
    }


    return {
        getInput: function() {
            return {
            type : document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value,
            };
        },
        getDOMstrings : function(){
            return DOMstrings;
        }
    }
})();



//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListener = function() {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);


        document.addEventListener('keypress', function(event) {
            //User clicked on ENTER/RETURN key 
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    }


    var ctrlAddItem = function(){
        
        //To Do List
        
        //1. Get the field input data
        var input = UICtrl.getInput();
        
        //2. Add the item to the budget controller
        
        //3. Add the new item to UI

        //4. Calculate the budget

        //5. Display the budget on the UI

        

    };

    return {
        init : function(){
            console.log('Init');
            setupEventListener();
        }
    }
    
})(budgetController, UIController);


controller.init();  