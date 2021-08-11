// Importing Module
import * as ShoppingCart from './shoppingCart.js';
import add from './shoppingCart.js';
import cloneDeep from 'lodash';
import _ from 'lodash';
// import { addToCart, totalPrice as price, tQ } from './shoppingCart.js';

console.log(`Importing Module`);
ShoppingCart.addToCart('bread', 5);

console.log(ShoppingCart.totalPrice, ShoppingCart.tQ);
add('pizza', 2);
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

console.log(`State Object:`);
console.log(state);
const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(`State Clone:`);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(`State Deep Clone:`);
console.log(stateDeepClone);
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);
// console.log(cart.find(el => el.quantity >= 2));
import 'core-js/stable';
Promise.resolve('Test').then(x => console.log(x));
// Polyfilling Async Functions
import 'regenerator-runtime/runtime';
