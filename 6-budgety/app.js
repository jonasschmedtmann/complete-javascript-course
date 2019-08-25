
/* Todo: 
    - Add Event Handler
    - Get Input Values
    - Add the new item to our data structure
    - Add the new item to the UI
    - Calculate budget
    - Update the UI
*/

/* Code Structure:
    Module Pattern: https://coryrylan.com/blog/javascript-module-pattern-basics
    * Modules
        - Data Module (add new item to data structure, calculate budget).
        - UI Module (get input values, add new items to ui, update ui).
        - Controller Module (add event handler)
*/ 

// Budget Controller
var budgetController = (function(){

    var ids = {
        exp: 0,
        inc: 0
    };

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    }

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Budget = function(inc, exp){
        this.inc = inc;
        this.exp = exp;
        this.percentage = (exp / inc) * 100;
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
        addItem: function(type, description, value){
            var newItem;

            if(type === "exp"){            
                newItem = new Expense(ids[type], description, value);

            } else if (type === "inc"){
                newItem = new Income(ids[type], description, value);

            }

            data.allItems[type].push(newItem);
            data.totals[type] += value;
            ids[type]++;
            return newItem;
        },
        removeItem: function(type, id){
            var removedItem;
            data.totals[type] -= data.allItems[type][id].value;
            removedItem = data.allItems[type][id];
            data.allItems[type].splice(id, 1);
            return removedItem;
        },
        getBudget: function() {
            return new Budget(data.totals["inc"], data.totals["exp"]);
        },
        calcPercentages: function(){
            data.allItems.exp.forEach(element => {
                element.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function(){
            var allPercentages = data.allItems.exp.map(element => {
                return element.getPercentage();
            });
            return allPercentages;
        },
    }

})();


// UI Controller
var uiController = (function(){

    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeBanner: '.budget__income--value',
        expenseBanner: '.budget__expenses--value',
        expensePercent: `.budget__expenses--percentage`,
        budgetBanner: '.budget__value',
        budgetTitle: `.budget__title`,
        incomeContainer: `.income__list`,
        expenseContainer: `.expenses__list`,
        container: `.container`,
        expensePercentLabel: `.item__percentage`
    };

    return{
        getInput: function(){
            return {
            type: document.querySelector(domStrings.inputType).value,  // will be inc or exp
            description: document.querySelector(domStrings.inputDescription).value,
            value: parseFloat(document.querySelector(domStrings.inputValue).value)
            };
        },
        addListItem: function(obj, type){
            // 1. Create HTML string with placeholder text
            var html, newHtml, element, budget;

            if(type === 'inc'){
                element = domStrings.incomeContainer;
                budget = domStrings. incomeBanner;
                html = `<div class="item clearfix" id="inc-%id%">
                    <div class="item__description">%description%</div>
                    <div class="right clearfix">
                        <div class="item__value">%value%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div>
                    </div>
                </div>`;
            } else if(type === 'exp'){
                element = domStrings.expenseContainer;
                budget = domStrings.expenseBanner;
                html = `<div class="item clearfix" id="exp-%id%">
                            <div class="item__description">%description%</div>
                            <div class="right clearfix">
                                <div class="item__value">%value%</div>
                                <div class="item__percentage">21%</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>`;
            }

            // 2. Replace placeholder text with some actual data
            newHtml = html.replace(`%id%`, obj.id);
            newHtml = newHtml.replace(`%description%`, obj.description);
            newHtml = newHtml.replace(`%value%`, "$" + obj.value);

            // 3. Insert the HTML into the DOM 
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            document.querySelector(budget).textContent += Number(obj.value);

        },
        deleteListItem: function(selectorId){
            var element = document.getElementById(selectorId);
            element.parentNode.removeChild(element);
        },
        clearFields: function(){
            var fields = document.querySelectorAll(domStrings.inputDescription + `, ` + domStrings.inputValue);
            var fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(current, index, array){
                current.value = "";

            });

            fieldsArray[0].focus();

        },
        updateBudget: function(inc, exp, percentage){
            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            // OR by REGEX: .toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            document.querySelector(domStrings.incomeBanner).textContent = "+" + formatter.format(inc);
            document.querySelector(domStrings.expenseBanner).textContent = "-" + formatter.format(exp);
            var budget = inc - exp;
            document.querySelector(domStrings.budgetBanner).textContent = (budget > -1 ? "+" : "-") + formatter.format(budget);
            document.querySelector(domStrings.expensePercent).textContent = Math.round(percentage) + "%";
        },
        displayPercentages: function(percentages){
            var fields = document.querySelectorAll(domStrings.expensePercentLabel);
            for(var i = 0; i < fields.length; i++){
                fields[i].textContent = percentages[i] + "%";
            }
        },
        getDomStrings: function(){
            return domStrings;
        }
    };   

})();

// Global App Controller
var controller = (function(budgetCtrl, uiCtrl){

    var dom = uiCtrl.getDomStrings();

    var setupEventListeners = function(){

        document.querySelector(dom.inputButton).addEventListener('click', addToBudget);

        document.addEventListener('keypress', function(e){
            if((e.keyCode === 13) || (e.which === 13)){
                addToBudget();
            }
        });

        document.querySelector(dom.container).addEventListener('click', removeFromBudget);

    };
   
    var addToBudget = function(){
        var input, newItem;
        
        // 1. Get the field input data
        input = uiCtrl.getInput();

        if((input.description !== "") && (!isNaN(input.value)) && (input.value > 0)){
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            
            // 3. Add the item to the UI
            uiCtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            uiCtrl.clearFields();
            
            // 5. Calculate and update budget
            updateBudget();

            // 6. Calculate and update percentages
            updatePercentages();
        }
    }

    var removeFromBudget = function(event){
        var itemId, splitId, type, id, removedItem;
        
        // 1. Get the id of the element to remove
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if(itemId){
            // 2. Get the type and id of the expense / income
            splitId = itemId.split('-');
            type = splitId[0];
            id  = splitId[1];

            // 3. Remove the item from the budget controller
            removedItem = budgetCtrl.removeItem(type, id);
            
            // 4. Remove the item from the UI
            uiCtrl.deleteListItem(itemId);

            // 5. Calculate and update budget
            updateBudget();

            // 6. Calculate and update percentages
            updatePercentages();
        }

    };

    var updatePercentages = function(){
        var percentages;

        // 1. Calculate percentages
        budgetCtrl.calcPercentages();

        // 2. Read percentages from budget controller
        percentages = budgetCtrl.getPercentages();

        // 3. Upate the UI with the new percentages
        uiCtrl.displayPercentages(percentages);

    };

    var updateBudget = function(){
        var  budget;

        // 1. Return the budget
        budget = budgetCtrl.getBudget();

        // 2. Display the budget    
        uiCtrl.updateBudget(budget.inc, budget.exp, budget.percentage);
  
    };

    return{
        init: function(){
            console.log('Application has started.');
            document.querySelector(dom.incomeBanner).textContent = "+$0.00";
            document.querySelector(dom.expenseBanner).textContent = "-$0.00";
            document.querySelector(dom.expensePercent).textContent = "0%";
            document.querySelector(dom.budgetBanner).textContent = "+$0.00";
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var html = `Available Budget in <span class="budget__title--month">%Month%</span>:`
            html = html.replace(`%Month%`, monthNames[new Date().getMonth()]);
            // in ECMASCRIPT6, use new Date().toLocaleString('default', { month: 'long' });
            document.querySelector(uiCtrl.getDomStrings().budgetTitle).insertAdjacentHTML('beforeend', html);

            setupEventListeners();
        }
    }
    

})(budgetController, uiController);

controller.init();


