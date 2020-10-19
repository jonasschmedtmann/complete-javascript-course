var sc = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

var allow = {
  lisbon: 5,
  others: 7,
};

var description = '';

var check = function (city) {
  if (sc.length > 0) {
    var allowed;
    if (city == 'lisbon') {
      allowed = allow.lisbon;
    } else {
      allowed = allow.others;
    }

    for (item of sc) {
      if (item.quantity > allowed) item.quantity = allowed;
    }
  }
};
check('lisbon');
console.log(sc);

var createDescription = function () {
  var first = sc[0];
  var p = first.product;
  var q = first.quantity;

  if (sc.length > 1) {
    description = 'Order with ' + q + ' ' + p + ', etc...';
  } else {
    description = 'Order with ' + q + ' ' + p + '.';
  }
};
createDescription();

console.log(description);
