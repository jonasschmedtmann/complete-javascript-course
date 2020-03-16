//Budget Controller
var budgetController = (function() {
  class Expense {
    constructor(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    }
  }

  class Income {
    constructor(is, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    }
  }
})();

//UI Controller
var UIController = (function() {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // will be inc value or exp value
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },
    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMStrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keycode === 13 || event.which === 13) {
        console.log("Enter was pressed");
      }
    });
  };

  var ctrlAddItem = function() {
    // 1. get input data
    var input = UICtrl.getInput();
    // 2. add item to budget
    // 3. add item to UI
    // 4. calculate the budget
    // 5. display budget
  };

  return {
    init: function() {
      console.log("App has started");
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
