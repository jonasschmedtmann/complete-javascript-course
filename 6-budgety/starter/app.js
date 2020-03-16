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
    constructor(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    }
  }

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    total: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      // assigning the new item an ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // creates new item based on type: inc or exp
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      // this line of code gives you access to the data object to
      // the allItems object and the brackets with type in it gives
      // you access to the appropriate array and you place the item
      // in the array with the push method and return the new item to
      // give the other controllers access to it
      data.allItems[type].push(newItem);
      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };
})();

//UI Controller
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
        type: document.querySelector(DOMStrings.inputType).value, // will be inc value or exp value
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },
    addListItem: function(obj, type) {
      var html, newHtml, element;
      // Create HTML string with placeholder text
      if (type === "inc") {
        element = DOMStrings.incomeContainer;
        html =
          '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMStrings.expensesContainer;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // Replace placeholder with data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);
      // Insert HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
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
    var input, newItem;
    // 1. get input data
    input = UICtrl.getInput();
    // 2. add item to budget
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // 3. add item to UI
    UICtrl.addListItem(newItem, input.type);
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
