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

// console.log(cart);

// top level await 
// console.log('start feteching');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return {title: data.at(-1).title, text: data.at(-1).body}
  
}

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean 
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


