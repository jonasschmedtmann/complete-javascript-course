// Imorting module
import cloneDeep from 'lodash-es';
//import { addToCart } from './shoppingCart.js';
//import { totalPrice as price, totalQuantity } from './shoppingCart.js';
//import * as ShoppingCart from './shoppingCart.js';
//import add from './shoppingCart.js';
//console.log('Importing module');

if (module.hot) {
  module.hot.accept();
}
//console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);
//add('Pizza', 2);
console.log('Start Script');
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const state = {
  cart: [
    { product: 'bread', quantity: 4 },
    { product: 'pizza', quantity: 4 },
  ],
  use: { loggedIn: true },
};
const stateClone = cloneDeep.clone(state);
console.log(stateClone);

import 'core-js/stable';
import 'regenerator-runtime/runtime';
