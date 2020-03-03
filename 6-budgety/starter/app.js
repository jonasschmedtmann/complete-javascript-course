//=========================
//BUDGET CONTROLLER ===========
//=========================

var budgetController = (function() {
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
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
        addItem: function(type, description, value) {
            var id, newItem;
            //id = last id + 1
            if (data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                id = 0;
            }
            //create new item based on 'inc' or 'exp' value
            if (type === "exp") {
                newItem = new Expense(id, description, value);
            } else if (type === "inc") {
                newItem = new Income(id, description, value);
            }
            //push it into data structure
            data.allItems[type].push(newItem);
            //return the new element
            return newItem;
        },
        testing: function() {
            console.log(data);
        }
        /*accessData: function() {
            return data;
        }*/
    };
})();

//=========================
//UI CONTROLLER ===========
//=========================

var UIController = (function() {
    var DOMStrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list"
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //Will be either 'inc' or 'exp'
                description: document.querySelector(DOMStrings.inputDescription)
                    .value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        addListItem: function(obj, type) {
            var html, element;

            //Create HTML string with placeholder text
            if (type === "inc") {
                element = DOMStrings.incomeContainer;
                html =
                    '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === "exp") {
                element = DOMStrings.expensesContainer;
                html =
                    '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //Replace placeholder text with actual data
            html = html.replace("%id%", obj.id);
            html = html.replace("%description%", obj.description);
            html = html.replace("%value%", obj.value);

            //Insert the HTML into the DOM
            document
                .querySelector(element)
                .insertAdjacentHTML("beforeend", html);
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    };
})();

//=========================
//APP CONTROLLER ===========
//=========================

var controller = (function(budgetCtrl, UICtrl) {
    var setUpEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();

        document
            .querySelector(DOM.inputBtn)
            .addEventListener("click", ctrlAddItem);
        document
            .querySelector(DOM.inputValue)
            .addEventListener("keypress", function(event) {
                if (event.keyCode === 13 || event.which === 13) {
                    //13 is the keyCode of "Enter", so whenever the Enter key is pressed
                    ctrlAddItem();
                }
            });
    };

    var ctrlAddItem = function() {
        //console.log("it works");

        var input, newItem;

        //TODO

        //1. Get Input Data
        input = UICtrl.getInput();
        //console.log(input);

        //2. Add the Item to The Budget Controller
        newItem = budgetCtrl.addItem(
            input.type,
            input.description,
            input.value
        );

        //3. Add the Item to The UI
        UICtrl.addListItem(newItem, input.type);

        //4. Calculate the Budget
        //5. Display the Budget on the UI
    };

    return {
        init: function() {
            //console.log("Application has started.");
            setUpEventListeners();
        }
    };
})(budgetController, UIController);

controller.init();
