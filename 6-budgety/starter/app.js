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
    };
   
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
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
        }
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
        var input, newItem;

        // 1. Get the filled input data (calling the getInput method in UIController)
        input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
       // console.log('It works.') // tests for clicking button or key down on ENTER key
    };
    

    return {
        init: function() {
            console.log('Application has started.');
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