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
            exp : [],
            inc : []
        },
        totals : {
            exp : 0,
            inc : 0
        }
    };

    return {
        addItem : function(type, des, val){
            var newItem, ID;
            //Create new ID
            if(data.allItems[type].length >0)
            {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else{
                ID = 0;
            }
            

            //Create new Item based on 'inc' or 'exp'
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }
            
            //Push it into our data structure
            data.allItems[type].push(newItem);

            //Return the new element
            return newItem;
        },
        
        testing : function(){
            console.log(data)
        }

    }
})();




//UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType : '.add__type',
        inputDescription :'.add__description',
        inputValue :'.add__value',
        inputButton : '.add__btn',
        incomeContainer : '.income__list',
        expenseContainer : '.expenses__list'
    }


    return {
        getInput: function() {
            return {
            type : document.querySelector(DOMstrings.inputType).value, // Will be either inc for income or exp for expense
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value,
            };
        },
        addListItem : function(obj, type) {
            var html, newHtml, element;

            //Create HTML string with placeholder text
            if( type === 'inc'){
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%">                            <div class="item__description">%description%</div>                            <div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp'){
                element = DOMstrings.expenseContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            //Replace the placeholder text with actual data 
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', obj.value)

            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },
        clearFields : function(){
            var fields, fieldsArray;

            //This will return a list element
            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);

            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(current, index, array) {
                current.value = "";
            });

            fieldsArray[0].focus();


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
        var input, newItem;
        //To Do List
        
        //1. Get the field input data
        input = UICtrl.getInput();
        
        //2. Add the item to the budget controller
        newItem = budgetController.addItem(input.type, input.description, input.value)
        
        //3. Add the new item to UI
        UIController.addListItem(newItem, input.type);

        //4. Clear the fields
        UIController.clearFields();

        //5. Calculate the budget

        //6. Display the budget on the UI

        

    };

    return {
        init : function(){
            console.log('Init');
            setupEventListener();
        }
    }
    
})(budgetController, UIController);


controller.init();  