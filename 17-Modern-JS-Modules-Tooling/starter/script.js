// Importing Module
// import {addToCart,totalPrice as price, qt} from './shoppingCart.js';
// addToCart('bread', 5);

// console.log(price, qt);

// import * as ShoppingCart from './shoppingCart.js'

// console.log("Importing Module");
// console.log(shippingCost);
//

// console.log(ShoppingCart);

// import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// console.log(price);

import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

