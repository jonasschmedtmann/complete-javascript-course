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

// import add, {cart} from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// top level await 
// console.log('start feteching');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return {title: data.at(-1).title, text: data.at(-1).body}
  
// }

// const lastPost = getLastPost();
// console.log(lastPost);

// // Not very clean 
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);




// const ShoppingCart2 = (function() {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;
//     const addToCart = function(product, quantity){
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart `);
//     };

//     const orderStock = function(product, quantity){
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} ordered from supplier `);
//     };

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     }
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);


// // Export 
// export.addToCart = function(product, quantity){
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} ordered from supplier `);
//     };


// // Import 
// const { addToCart } = require('./shoppingCart.js');

// import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js"

const state = {
    cart: [
        {product: "bread", quantity: 5},
        {product: "pizza", quantity: 5},
    ],
    user: {loggedIn: true},
}


const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);

state.user.loggedIn = false;
console.log(stateDeepClone);



// console.log(price);


add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);