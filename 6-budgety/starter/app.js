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





// 77. Implementing the Module Pattern
// the x and add variables are private bc inside of IIFE, publicTest is public even though it is in IIFE bc it is in the closure, and publicTest has access to x and add because it is inside of that IIFE
// module1
var budgetController = (function () {
    var x = 23;

    var add = function(a){
        return x + a;
    }

    // module pattern ex below
    return {
        publicTest: function(b){
            return add(b);
        }
    }
})();



// module2
var UIController = (function () {

})();


// module3 // we will pass the other two modules into this one so that we can connect, or that they can sort of know about each other
// budgetCtrl = budgetController // UICtrl = UIController
var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublicMethod: function(){
            console.log(z);
        }
    }

})(budgetController, UIController);
