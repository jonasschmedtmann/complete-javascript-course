//Want to have modules to keep separate, independent pieces of code, together in organized units.


var budgetController = (function() {
    var x = 23;
    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }
})(); //All of this works because of closures. This is an IIFE.


var UIController = (function() {
    //Some code
})();

