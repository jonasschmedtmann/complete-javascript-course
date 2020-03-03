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
        },
        budget: 0,
        percentage: -1
    };

    var calculateTotal = function(type) {
        var sum = 0;

        data.allItems[type].forEach(function(currentElement) {
            sum += currentElement.value;
        });

        data.totals[type] = sum;
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

        calculateBudget: function() {
            //Calculate the Total income and expenses
            calculateTotal("exp");
            calculateTotal("inc");

            //Caluclate the Budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            //Calulate the % of income that is spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round(
                    (data.totals.exp / data.totals.inc) * 100
                );
            } else {
                data.percentage = -1;
            }
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                percentage: data.percentage
            };
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
        expensesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expenseLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: ".container"
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //Will be either 'inc' or 'exp'
                description: document.querySelector(DOMStrings.inputDescription)
                    .value,
                value: parseFloat(
                    document.querySelector(DOMStrings.inputValue).value
                )
            };
        },

        addListItem: function(obj, type) {
            var html, element;

            //Create HTML string with placeholder text
            if (type === "inc") {
                element = DOMStrings.incomeContainer;
                html =
                    '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === "exp") {
                element = DOMStrings.expensesContainer;
                html =
                    '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
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

        clearFields: function() {
            var fields, fieldsArr;

            //Selecting the two input boxes
            fields = document.querySelectorAll(
                DOMStrings.inputDescription + "," + DOMStrings.inputValue
            );

            //Slice method does not exist for Strings, so accessing it through Array's prototype
            fieldsArr = Array.prototype.slice.call(fields);

            //Set each String slice to " "
            fieldsArr.forEach(function(current) {
                current.value = " ";
            });

            //Focus the keyboard input prompt to the first input box
            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent =
                obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent =
                obj.totalIncome;
            document.querySelector(DOMStrings.expenseLabel).textContent =
                obj.totalExpenses;
            document.querySelector(DOMStrings.percentageLabel).textContent =
                obj.percentage;

            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent =
                    obj.percentage + "%";
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent =
                    "---";
            }
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

        document
            .querySelector(DOM.container)
            .addEventListener("click", ctrlDeleteItem);
    };

    var updateBudget = function() {
        //1. Calculate the Budget
        budgetCtrl.calculateBudget();

        //2. Return the Budget
        var budget = budgetCtrl.getBudget();

        //3. Display the Budget on the UI
        UICtrl.displayBudget(budget);
    };

    var ctrlAddItem = function() {
        //console.log("it works");

        var input, newItem;
        //1. Get Input Data
        input = UICtrl.getInput();

        //1.1 Check that the input is valid
        if (
            input.description !== "" &&
            !isNaN(input.value) &&
            input.value > 0
        ) {
            //2. Add the Item to The Budget Controller
            newItem = budgetCtrl.addItem(
                input.type,
                input.description,
                input.value
            );

            //3. Add the Item to The UI
            UICtrl.addListItem(newItem, input.type);

            //4. Clear the Fields
            UIController.clearFields();

            //5.Calculat and Update the Budget
            updateBudget();
        }
    };

    var ctrlDeleteItem = function(event) {
        var itemId, splitID, type, ID;

        //travserse the HTML to get the the ID of the element
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemId) {
            splitID = itemId.split("-");
            type = splitID[0];
            ID = splitID[1];

            //1. delete the item from the data strucuture

            //2. delete the item from the user interface

            //3. update and show the new budget
        }
    };

    return {
        init: function() {
            UIController.displayBudget({
                budget: 0,
                totalIncome: 0,
                totalExpenses: 0,
                percentage: -1
            });
            setUpEventListeners();
        }
    };
})(budgetController, UIController);

controller.init();
