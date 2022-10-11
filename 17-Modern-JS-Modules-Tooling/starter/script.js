//Importing Module
//Imported statements are always at the top of the file!
/*
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

addToCart('bread', 5);
console.log(price, tq);
*/

console.log('Importing Module');
//Import everything in the export at the same time
/*import * as ShoppingCart from './shoppingCart.js'

//used like a class
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.tq);
*/
//we can give any name to the function
//import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//best practice
//imports the default export and we can give it any name
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 10);

console.log(cart);
/*
////TOP LEVEL AWAIT /////// 
//Only in modules await can be writen outside an async function
//The await keyword can block the execution of the module, specially if it's a really long time
console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');

//real world example
const getLastPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

//returns a promise
const lastPost = getLastPost();

//not very clean
//lastPost.then(res => console.log(res))

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/////NPM - Node Package Manager///// Software and package repository

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone); //will become false aswell
console.log(stateDeepClone); //this is a great solution

/////PARCEL//// npm install parcel --save-dev
//a dev dependency is a tool we use to build our application but we will not include it in our code

//npx parcel index.html - does the same function as live-server

//the page will not reload after a save
if (module.hot) {
  module.hot.accept();
}

//npm script - in package.json
// "scripts": {
//   "start": "parcel index.html",
//   "build": "parcel build index.html"
// },

//////BABEL//// tool that converts newer code to previous versions thus being compatible with old browsers
class Person {
  greeting = 'Hey!';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting} ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log('x'));

//Instal core-js manually

import 'core-js/stable/array/find';

import 'regenarator-runtime/runtime';
