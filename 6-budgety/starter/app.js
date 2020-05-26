// BUDGET CONTROLLER
var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

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
        addItem: function (type, descrip, val) {
            var newItem, ID;

            // create new id
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // create new item based upon type
            if (type === 'exp') {
                newItem = new Expense(ID, descrip, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, descrip, val);
            }

            // push it into the correct data structure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;
        },

        testing: function () {
            console.log(data)
        }
    };

})();

// UI CONTROLLER
var uiController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,   // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn)
            .addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };


    var ctrlAddItem = function () {
        var input, newItem;

        // todo: get the field input data
        input = UICtrl.getInput();

        // todo: add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // todo: add the item to the UI

        // todo: calculate the budget

        // todo: display the budget on the UI

    }

    return {
        init: function () {
            console.log('app has started.');
            setupEventListeners();
        }
    };

})(budgetController, uiController);

controller.init();
