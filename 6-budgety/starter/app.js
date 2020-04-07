/*****************************************************************************
 * Structuring code with MODULES
 * MODULES ARE:
 * -Important aspect of any robust application's architecture;
 * -Keep the units of code for a project both cleanly separated and organized;
 * -Encapsulate some data into privacy and expose other data publicly.
 * 
 * Separate the to-do-list into modules where all the peices of code are related to one another; for example is it for the UI is it data separate them into their own modules
 ****************************************************************************/

 /****************************************************************************
 * BUDGETY TO-DO LIST #1
 * Add event handler
 * Get input values
 * Add the new item to our data structure
 * Add the new item to the UI
 * Calculate the budget
 * Update the UI
 * 
 * MODULES FOR THESE TASKS
 * UI MODULE
 * -Get iput values
 * -Add the new item to the UI
 * -update the UI
 * 
 * DATA MODULE
 * -Add the new item to our data structure
 * -Calculate budget
 * 
 * CONTROLLER MODULE
 * -Add event handler
 ****************************************************************************/

/****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * MODULE PATTERN
 * PRIVATE AND PUBLIC DATA
 * ENCAPSULATION
 * SEPARATION OF CONCERNS
 * 
 * ENCAPSULATION
 * -Allows us to hide the implementation details of a specific module from the outside scope; separte code into private variables and methods that are only accessible within the module. Private data and methods are important so that no one can overwrite methods or access data and methods. Public interface has variables and methods that everyone has access to. The public interface is sometimes called an API
 * 
 * MODULE PATTERN
 * -Are built using the concepts closures (an inner function always has access to outer function's varibles and parameters even after the outer function has returned) and IIFE's (Immediately invoked functin expressions)
 * 
 * SEPARATION OF CONCERNS
 * -Modules will be standalone or as independent as possible and do not need each other to function. This means that each module or part of the code should be interested in doing only one part of the job independently. Separte data and UI for example.
 ****************************************************************************/

 //This is an example module that uses an IIFE to keep data and methods private
 //Remember IIFE's call themselves immediately and have data privacy becuase it creates a new scope that is not visible from the outside scope. Variables in here will not be accessible, but the secret is that this function will return an object that has all the methods and varibles it contains and that we want to give outside scope access to.
//  var exampleModule = (function(){
//     //Trying to access this variable using the console (exampleModule.x) will return undefined because the variable does not exist in the outside scope
//     var x = 23;
//     //Simple example function; this function will not be accessible to the global scope becuase it is private to the module exampleModule
//     var exmaplePrivateFunction = function(a) {
//         return x + a;
//     };
//     //Returns an object that has the methods inside the exampleModule module; example below
//     return {
//         //This function named examplePublicFunction is accessible to the global scope because it is being returned from the exampleModule module (IIFE) as a method in the object;
//         examplePublicFunction: function(b){
//             console.log(exmaplePrivateFunction(b));
//         },
//     };

//  })();

/****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * SET UP EVENT LISTENERS FOR KEYPRESSES
 * HOW TO USE EVENT OBJECT
 * 
 * EVENT LISTENERS FOR KEY PRESSES
 * -These event listeners are added to the document object because a key press happens in the document object
 * -When using the keypress event you need to pass in a parameter to the function so that you can get the keycode of the key pressed. This allows you to check for specific keys;
 * -This parameter can be named anything you want like all others but this parameter will be automatically passed in by the eventlistener function and it will be an event object. Look at lines 123-134 for specific examples
 * 
 ****************************************************************************/

 /****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * HOW TO READ DATA FROM DIFFERENT HTML INPUT TYPES;
 * -Rather than typing out the class or ID everytime you need to query a selector you should create an object that contains all of these strings. A good name for this object is DOMStrings.
 * -This DOMstrings objects allows us to keep the classess/ids all in one place so if you ever need to change them we can easily do it in one spot instead of many. (See line 106)
 * 
 * 
 ****************************************************************************/

/****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * HOW TO CHOOSE FUNCTION CONSTRUTORS THAT MEET OUR APP'S NEEDS;
 * HOW TO SET UP A PROPER DATAT STRUCTURE FOR OUR BUDGET CONTROLLER.
 * 
 * -When thinking about data structures always try and think about not having variables floating around, its best to have them structured into one data set. Use objects even if they have objects within them to structure similar data sets into one object; see budgetController for examples
 * 
 * 
 ****************************************************************************/


/****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * HOW TO AVOID CONFLICTS IN OUR DATA STRUCTURE
 * HOW AND WHY TO PASS DATA FROM ONE MODULE TO ANOTHER
 * Passing data from one module to another is accomplished by using objects that have mehtods within in them. This makes the methods public and other modules in your code can use them. These should mostly be getter methods that don't allow outside access to the actual implementation
 * 
 * 
 ****************************************************************************/

/****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * ADDING BIG CHUNKS OF HTML INTO THE DOM
 * HOW TO REPLACE PART OF STRINGS
 * -the .replace(itemToReplace, itemToInsert) method can be used on strings to replace part of the string with something else
 * -when replacing part of the string it's best to use %thing% for the part you want to replace (thing should be something meaningful)
 * HOW TO DO DOM MANIPULATION USING THE insertAdjacentHTML method
 * -look up documentation on this method but it's pretty simple to use, simply select the element with queryselector, add the method and input where it should be added and what should be added, look at @adjacenthtml
 * 
 * 
 ****************************************************************************/

 /****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * HOW TO CLEAR HTML FIELDS;
 * -loop through all the elements that you need to clear; select them all using the querySelectorAll() method
 * HOW TO USE querySelectorAll;
 * -querySelectorAll can be used to get multiple elements from the document object; separte the the different elements with a comma, this returns a list not an array
 * HOW TO CONVERT A LIST TO AN ARRAY;
 * -converting a list into an array can be done by using the slice array method (that lives in the array prototype) and binding it to the list see @listToArray
 * A BETTER WAY TO LOOP OVER AN ARRY THEN FOR LOOPS: foreach
 * -forEach method takes in an anonymous function where javascript by default gives it three arguments; current, index, array;
 * 
 ****************************************************************************/

 /****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * HOW TO CONVERT FIELD INPUTS TO NUMBERS
 * -converting strings to numbers can be done with parseFloat function and other parse functions 
 * HOW TO PREVENT FALSE INPUTS
 * -to prevent false inputs make sure you set if statment to check the data input. In this case we don't want an empty description so check to make sure the description is NOT empty. The value should be a number, javascript has a function isNaN() which checks if the argument given is not a number.
 * 
 ****************************************************************************/

/****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * HOW AND WHY TO CREATE SIMPLE, REUSABLE FUNCTIONS WITH ONLY ONE PURPOSE
 * HOW TO SUM ALL ELEMENTS OF AN ARRAY USING THE forEach METHOD
 * -remember that the forEach method accepts a call back function which contains three arguments available for use
 ****************************************************************************/

 /****************************************************************************
 * //////////////////\\\\\\\\   EVENT DELEGATION     //////////////////\\\\\\\\\\\\
 * EVENT DELEGATION
 * Event Bubbling - When an event is fired it will also fire in all of the parent elements. It will go all the way up to the html which is the root of the DOM tree. The element that causes the bubbling is the target element.
 * Target Element - is stored as a property in the event object; all of the parent elements will know the target element becuase it is stored as a property,
 * Event Delegation - is a technique where you wait for the event to bubble up to one of the parent elements and do whatever you wanted to do when the target element was fired; in other words add an eventhandler to a parent object of a button for example and catch it on that parent
 * 
 * WHY WOULD WE USE EVENT DELEGATION? 
 * 1. When we have an element with lots of child elements that we are intersted in; 
 *      - Multiple buttons for example, instead of adding the event handler to each one of those buttons we'll just add it to their parent element
 * 2. When we want an event handler attached to an element that is not yet in the DOM when our page is loaded;
 *      - We can't add an event handler to something that doesn't exist
 * 
 * 
 * HOW TO USE EVENT DELEGATION;
 *      - find the element that is common to all elements that will trigger an event
 *      - remember that the addevent function has access to the event object, this object can be passed in to a function when called even as a callback function
 * HOW TO USE ID's IN HTML TO CONNECT THE UI WITH THE DATA MODEL;
 * HOW TO USE THE parentNode PROPERTY for DOM traversing;
 *      -DOM traversing is being able to move up or down on elements to get access to the elements you need when using event delegation
 *      - the parentNode property allows you to access the parent element of a given element (see @DOMtraversing)
 * 
 * Strings and numbers have methods of their own and even though they are primitives in javascript, when you add a method to one of them javascript turns them to an object by wrapping them in an object
 ****************************************************************************/

 /****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * METHOD TO LOOP OVER AN ARRAY: map;
 * -the method map works in the same way that the forEach method works. It also has access to three parameters: current, index, array; the difference is that it returns a new array with the length of the array you're looping over. This method also uses the return key word to specify what the array should contain. see @mapMethod
 * HOW TO REMOVE ELEMENTS FROM AN ARRAY USING THE SPLACE METHOD
 * -splice() will remove elements from an array starting at the given index, the second parameter will be how many elements to remove; array.splice(index, amount);
 * 
 * REMEMBER THAT ANY INPUT YOU GET FROM THE USER WILL BE A STRING, CONEVERT IT TO A NUMBER IF NEEDED
 ****************************************************************************/

 /****************************************************************************
 * //////////////////\\\\\\\\   TOPICS     //////////////////\\\\\\\\\\\\
 * HOW TO MAKE OUR BUDGET CONTROLLER INTERACT WITH THE EXPENSE PROTOTYPE
 * - see @addFunctionToPrototype
 ****************************************************************************/

  /****************************************************************************
 * //////////////////\\\\\\\\   CREATE YOU'RE OWN FOREACH FUNCTION     //////////////////\\\\\\\\\\\\
 * HOW TO CREATE OWN forEach FUNCTION FOR NodeLists instead of arrays
 * - Queryselectorall method returns a node list. Lists do not have the forEach method so you need to create your own.
 * - see @customForEachMehtod
 ****************************************************************************/

   /****************************************************************************
 * //////////////////\\\\\\\\   CREATE YOU'RE OWN FOREACH FUNCTION     //////////////////\\\\\\\\\\\\
 * METHODS TO MANIPULATE STRINGS
 * - .toFixed(number of decimal places) is a method used on numbers which are primitive. However when you use the toFixed() method which is a method of the number prototype, javascript turns the number to an object and is then able to use the method. toFixed() also turns the number to a string. @toFixed()
 * 
 * -.split(charToSplitOn): a method that splits a string into an array based on the argument passed in
 * 
 * -.length: returns the length of the string
 * 
 * 
 * HOW TO GET THE CURRENT DATE
 * - use the new Date() constructor to get the current date. after that use the date methods to get the desired date format @date
 * 
 * 
 * 
 * HOW AND WHEN TO USE 'CHANGE' EVENTS
 * - change event occurs each time that you click on a dropdown for example and then click on an option that is different to what the default or prior option was; in this example changing from + to - in the dropdown.
 * 
 ****************************************************************************/

//BUDGET CONTROLLER Module
var budgetController = (function(){
    
    //The data for this app will be held in an object; this is the function contstructor (ie. class) for each type of new input expense
    var Expense = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    //@addFunctionToPrototype: adding a function to the Expense prototype so that each expense can calculate it's own percentage compared to the total income
    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        };
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };

    //Data structure for income
    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        percentage: -1,
    };

    var calculateTotal = function (type){
        var sum = 0;
        //add all the values of the type of item (expense or income)
        data.allItems[type].forEach(function(current){
            sum += current.value;
        });
        //add total to it's appropriate totals array in the data object
        data.totals[type] = sum;
    };

    //return the public methods once again
    return {
        //public method to add item to data; requires type, description and value passed in
        addItem: function(type,des,val){
            var newItem, ID;

            //ID should be equal to last ID + 1 to account for removals
            //create new id
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else {
                ID = 0;
            };
            //check type of item and create new item based on type
            if (type === 'exp'){
                newItem = new Expense(ID,des,val);       
            } else if (type === 'inc'){
                newItem = new Income(ID,des,val);
            };
            
            //add new itme to data structure under allItmes object in the type (exp,inc) array it belongs
            //adding new items to object is done with brackets similar to arrays
            data.allItems[type].push(newItem);
            //return new item created
            return newItem;
        },

        deleteItem: function(type, id){
            var ids, index;
            //@mapMethod: the map() method will loop over the given array and output a new array of input array length where the return keyword assigns the values of the new array
            ids = data.allItems[type].map(function(current){
                return current.id;
            });
            //set the index equal to the index of the ID in ids, this will match the index in the array type (exp or inc); indexOf method returns the index of a given item
            index = ids.indexOf(id);

            //delete item from database
            if(index !== -1){
                data.allItems[type].splice(index, 1);
            };
        },

        //public method to calculate budget
        calculateBudget: function(){
            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            //calculate budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            //calculate the percentage of income that we spent; check if income is greater than 0 so as to not generate an infinity number if only expenses are given
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            };
        },

        //public method to clacluate percentages
        calculatePercentages: function(){
            data.allItems.exp.forEach(function(current){
                current.calcPercentage(data.totals.inc);
            });
        },

        //public method to return all percenatages in an array
        getPercentages: function(){
            var allPercentages;

            allPercentages = data.allItems.exp.map(function(current){
                return current.getPercentage();
            });

            return allPercentages;
        },

        //public getter function that will return the data properties
        getBudget: function() {
            return {
                budget: data.budget,
                percentage: data.percentage,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
            };
        },

        //method used for testing only
        testing: function(){
            console.log(data);           
        },
    };

})();




//TESTING WITH EXPENSE PROTOTYPE
//When testing this go to the console and create a new object using this class; 
//var exp = new Expense(1, 'test', 100) hit enter then type the name of the var just created, still in the console
//exp and hit enter, this will show the new variable and what it is along with all its properties
// var Expense = function(id,description,value){
//     this.id = id;
//     this.description = description;
//     this.value = value;
// };

//UI CONTROLLER Module
var UIController = (function(){

    //This is the object containg list of classes/id's
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    
        //public method to format numbers in UI
        var formatNumber = function(num, type){
            var numSplit, int, dec;
            //Math.abs() returns the number as an absolute value: always positive
            num = Math.abs(num);
            //@toFixed(): a method of the number prototype; javascript will convert the number primitive to an object;
            num = num.toFixed(2);
            //split number on decimal
            numSplit = num.split('.');

            int = numSplit[0];
            dec = numSplit[1];
            //format integer portoin of number
            if(int.length > 3){
                int = int.substr(0,int.length - 3) + ',' + int.substr(int.length - 3,int.length-1);
            };
            //return the formatted number; ternery function to check and apply proper symbol and concatenate with rest of number
            return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
        };

        var nodeListForEach = function(list, callbackFunction){
            for (var i = 0; i < list.length; i++){
                callbackFunction(list[i],i);
            };
        };

    //Will return an object that contains all the methods and properties we need
    return {
        //getInput method returns values for type of new addition, description of the expense or income and the amount
        getInput: function(){
            //This function will return an object containing all three values below; write an object contianing as many properties as needed instead of three separte variables
            return{
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
            };
        },

        addListItem: function(obj, type){
            var html, newHTML, element;
            //create html string wiht placeholder text

            if (type === 'inc'){
                 element = DOMstrings.incomeContainer;
                 html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp'){
                element = DOMstrings.expenseContainer;
                 html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div>'
            };

            //replace the placeholder text with some actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', formatNumber(obj.value,type));

            //insert the html into the DOM @adjacentHTML
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
        },

        //public method to remove item from UI
        deleteListItem: function(selectorID,) {
            //select element by id
            var el = document.getElementById(selectorID);
            //move up to the parent node of the element you want to remove and use removeChild(element you want to remove); You cannot remove an element by being on it, move up to its parent
            el.parentNode.removeChild(el);
        },

        //method to clear fields
        clearFields: function(){
            var fields, fieldsArr;
            //querySelectorAll returns a List; when using it you can separate many classes/ids with a comma
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            //turn a list into an array; slice lives in the array prototype the call method binds the object passed in to the element (turns the fields var into the this var); @listToArray
            fieldsArr = Array.prototype.slice.call(fields);
            //the forEach method automatically has access to three arguments: current, index, array; You can name these whatever but this is what they are(only the current element NEEDS to be used); it will loop through each of the elements in the array
            fieldsArr.forEach(function(current, index, array) {
                current.value = '';
            });
            //move curser to the first query selector which in this case is the description field
            fieldsArr[0].focus();
        },

        //Function to have access to the DOM strings in other modules (controllers)
        getDOMstrings: function(){
            return DOMstrings;
        },
        
        displayBudget: function(obj){
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget,obj.budget > 0 ? 'inc' : 'exp');
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc,'inc');
            document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp,'exp');

            if(obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '----';
            };
        },
        
        //public method to add percentage to appropriate row in UI
        displayPercentages: function(percentages){
            var fields;
            
            //when you don't know how many elements there will be use queryselectorall; this returns a nodeList
            fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

            //@customForEachMehtod: is simply a for loop that loops through all the items in the list and calls the function on them; give the function access to the current element and the index by passing in the current item and the index i

            //loop over percentages and add it to the UI if greater than zero
            nodeListForEach(fields,function(current,index){
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                }else{
                    current.textContent = '---';
                };
            });

        },

        //public method to display current month and year in UI
        displayMonth: function() {
            var year, now, month;
            //@date
            now = new Date();
            //var christmas = new Date(2015, 11, 25);
            //get the year by using the getFullYear method from teh date prototype
            year = now.getFullYear();
            month = now.toLocaleDateString('default', {month: 'long'});
            document.querySelector(DOMstrings.dateLabel).textContent = month + ' ' + year;
        },

        //public method to change input description bar depending on inc or exp
        changeType: function (){
            var fields = document.querySelectorAll(DOMstrings.inputType + ',' + DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            nodeListForEach(fields,function(cur){
                cur.classList.toggle('red-focus');
            });
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        },
    };

})();




//GLOBAL APP CONTROLLER module; 
//this module needs access to the other modules so that it can connect them so we add two parameters so that we can pass in the other two modules as arguments
var controller = (function(budgetCtrl, UICtrl){
    //function for all event listeners; this will need to be started in an init function
    var setupEventListeners = function(){
            
        //Access UIController dom strings
        var DOM = UIController.getDOMstrings();

        //Add event listener to add button and pass the function named ctrlAddItem as a callback function; callback functions get added without the () at the end because we don't want to call them immediatley only when the addEventListener detects the event specified, in this case a click
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        //Add an event listener for a keypress; 
        //this needs to be added to the document and not to a specific element becuase the key press happens in the global document
        //add a parameter to the annoymous function name it anything (in this case named event) and log it to the console; this parameter is passed in by automatically by the event listener (it is an object an Event Object to be more specific); in this case it will be the key pressed
        //in the console you can see info about the key pressed look for the keycode 
        document.addEventListener('keypress',function(event){
            //console.log('TEST:' + event);    
            //check if the event keycode is equal to 13 (enter key); also added which property for older browsers
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            };
        });
        //add event listenter to the parent element of all the elements we're interested in
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UIController.changeType);
    };

    var updateBudget = function (){
        
        //1. Calculate the budget
        budgetController.calculateBudget();
        //2. Return budget
        var budget = budgetController.getBudget();
        //3. Display the budget on the UI
        UIController.displayBudget(budget);
    };

    //update percentages
    var updatePercentages = function() {
        //1. calculate percentages
        budgetController.calculatePercentages();
        //2. read percentages from the budget controller
        var percentages = budgetController.getPercentages();
        //3. update the UI with the new percentages
        //console.log(percentages);
        UIController.displayPercentages(percentages);       
    };

    //Add new item in app
    var ctrlAddItem = function(){
        var input, newItem;
        //1. Get the field input data
        //Using public getInput method from UIController that returns an object
        input = UIController.getInput();
        //check to make sure the input data is not false
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            //console.log(input);
            //2. Add the item to the budget controller using the properties int the getInput method 
            newItem = budgetController.addItem(input.type, input.description, input.value);
            //3. Add the item to the UI
            UIController.addListItem(newItem,input.type);
            //4. Clear the fields
            UIController.clearFields();
            //5. Caluculate and update budget
            updateBudget();
            //6. update percentages
            updatePercentages();
        };
        
    };

    //delete an item in app; pass in the event object because we want to know the target element; @DOMtraversing
    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;
        //adding many parentNode properties allows you to keep moving up one node in the DOM tree; then add the id property and it will return only the id of that element
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

       //get the items needed to delete the row from the app that was clicked to delete
        if(itemID){
            //split method splits a srting into an array by the argument passed in
            splitID = itemID.split('-');
            //get item type
            type = splitID[0];
            //get item id
            ID = parseInt(splitID[1]);
            //console.log(typeof ID);
            
            //1. delete the Item from data structure
            budgetController.deleteItem(type,ID);
            //2. delete item from UI;requires selector ID (element ID)
            UIController.deleteListItem(itemID);
            //3. Update and show new budget
            updateBudget();
            //4. update percentages
            updatePercentages();
        };
        
    };

    //setup a public init function that gets returned from an object to start the eventlisterners function
    return {
        init: function(){
            //console.log('TEST: app has started');
            setupEventListeners();
            UIController.displayBudget({
                budget: 0,
                percentage: 0,
                totalInc: 0,
                totalExp: 0,
            });
            //display month
            UIController.displayMonth();
        },
    };

//Pass in the other two modules (UIController variable and budgetController variable) as arguments to ths IIFE so that this module has access and can connect the two together; this is the best practice instead of using the variables within the controller module
})(budgetController,UIController);

//this is one of the very few methods that will be in the global scope and not have a module of it's own because we need to start the eventlisteners
controller.init();