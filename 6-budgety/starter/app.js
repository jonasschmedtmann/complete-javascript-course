// Practice Somthin here





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




//Practicing writing a function constructor
//normal function//camel notation//
/*
function CreateCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}
const myCircle = createCircle(1);

//constructor function//pascal notation//
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(1);
*/






// BUDGETY APP
// the x and add variables are private bc inside of IIFE, publicTest is public even though it is in IIFE bc it is in the closure, and publicTest has access to x and add because it is inside of that IIFE


// 1. BUDGET CONTROLLER // module1
var budgetController = (function () {

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome){
        if (totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) *100)
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };

   
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        // where we will store expenses and incomes
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

    return {
        addItem: function(type, des, val){
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;

        },
        deleteItem: function(type, id) {
            var ids, index;
            
            // id = 6
            //data.allItems[type][id];
            // ids = [1 2 4  8]
            //index = 3
            
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
            
        },



        calculateBudget: function(){

            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;


            // calculate % of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        calculatePercentages: function(){

            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return allPerc;
        },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function(){
            console.log(data);
        }
    };

})();



// 2. UI CONTROLLER // module2 // write some methods to get some data for us or to calculate something
var UIController = (function () {

    var DOMstrings = { // these are private
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function(num, type){
        /*
        + or - before number exactly 2 decimal points comma separating the thousands

        2310.4567 -> + 2,310.46

        2000 -> + 2,000.00
        */
       var numSplit, int, dec, type;
        
        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3){
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, int.length)
        }
        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + "." + dec
    };

    var nodeListForEach = function(list, callback){
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };



    return {
    
        
        getInput: function(){
            // ! This function returns an object with three methods (query selector) bc it is more efficient since it will auto run all 3, instead of just writing/reading them in order. Call the method in the controller
            return {
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        addListItem: function(obj, type){
            var html, newHtml, element;
            // Create HTML string w placeholder text
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i> </button> </div> </div> </div>';
            } else if (type === 'exp'){
                element = DOMstrings.expenseContainer;

                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace the placeholder text with some actual data
            // replace() searches for a string and then replaces it with the data we put in the method
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function(selectorID){

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function(){
            var fields, fieldsArr;

            // querySelectorAll returns a List, not an Array, so we don't get a ton of useful methods available to use... but we can use Slice to convert a List into an Array. Normally we use Slice on an array to return another array, but we can kind of trick this method and pass the List in and it will still turn an Array.  
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            
            fieldsArr = Array.prototype.slice.call(fields) // tricking the slice method into returning an array when we don't even have one

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            
            fieldsArr[0].focus();
        },

        displayBudget: function(obj){

            var type;
            obj.budget > 0 ? type = 'inc' : 'exp';

            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');


            if (obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
        },
        
        displayPercentages: function(percentages){
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);



            nodeListForEach(fields, function(current, index){

                if (percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---'
                }
            })
        },

         displayMonth: function(){
             var now, year, month;

            now = new Date();
            // var christmas = new Date(2020, 11, 25)
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();

            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

         },
         
         changedType: function(){
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue
            );

            nodeListForEach(fields, function(cur) {
                cur.classList.toggle('red-focus');
            })
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

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };


    var updateBudget = function(){
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
        // console.log('It works.') // tests for clicking button or key down on ENTER key
    };

    var updatePercentages = function(){
        // 1. Calculate %
        budgetCtrl.calculatePercentages();

        // 2. Return the %
        var percentages = budgetCtrl.getPercentages();

        // 3. Display the % on the UI
        UICtrl.displayPercentages(percentages);
    }

    var ctrlAddItem = function(){
        var input, newItem;

        // 1. Get the filled input data (calling the getInput method in UIController)
        input = UICtrl.getInput();
        // console.log(input);

        if (input.description !== "" && !isNaN(input.value) && input.value > 0){
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update budget
            updateBudget();

            // 6. Calculate and update %'s
            updatePercentages()
        }      
    };



    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if (itemID) {
            
            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            // 1. delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);

            // 2. delete the item from the ui
            UICtrl.deleteListItem(itemID);

            // 3. update and show the new budget
            updateBudget();

            // 4. Calculate and update %'s
            updatePercentages()
        }
    }

    

    return {
        init: function() {
            console.log('Application has started.');
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
            
        }
    };
    
})(budgetController, UIController);

controller.init();






// Below is messing around w/ the flat() method
/*
console.log({});
console.log([]);

var arr1 = [1, 2, [3, 4]];
console.log(arr1) 
console.log(arr1.flat())

var arr2 = [[1, 2, 3], [4, 5, 6]]
console.log(arr2) 
console.log(arr2.flat())

var arr3 = [[[1, 2], 3], [4, 5, 6]]
console.log(arr3) 
console.log(arr3.flat())
*/