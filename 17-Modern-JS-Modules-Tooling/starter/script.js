/*
// importing modules
import {
  addToCart,
  totalPrice as price,
  tq
} from "./shoppingCart.js";

addToCart('bread', 5);
console.log(price, tq);
*/

/*
//importing all exports of a module at the same time
// convention to use PascalCase for naming the module
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.tq);
*/

/*
// importing the default export
// default exports when we want to export one thing per module
import add from './shoppingCart.js';

add('pizza', 2)
*/

/*
// top level await doesnt use the async function keyword
// console.log('start fetching')
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);
console.log('something');
*/

/*
import "./shoppingCart.js";
// calling an async function will always return a promise
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// const lastPost = getLastPost();
// console.log(lastPost); // Pending <promise>

// // not very clean
// lastPost.then(lastResult => console.log(lastResult)); //actual result

const lastPost2 = await getLastPost();
console.log(lastPost2); //get actual result
*/

// Module pattern
// IIFE: const name = ( function(){} )();
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.cart);
console.log(ShoppingCart2.shippingCost); //undefined bc this method/property was not made public in the IIFE


import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true }
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);