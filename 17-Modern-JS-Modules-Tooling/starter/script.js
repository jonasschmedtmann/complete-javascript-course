// Importing Module
import * as ShoppingCart from './shoppingCart.js';
// import { addToCart, totalPrice as price, tQ } from './shoppingCart.js';

console.log(`Importing Module`);
ShoppingCart.addToCart('bread', 5);

console.log(ShoppingCart.totalPrice, ShoppingCart.tQ);
import add from './shoppingCart.js';
add('pizza', 2);
