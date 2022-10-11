//Exporting Module
console.log('Exporting Module');

//Blocking code - Only after this runs the script.js will run
/*console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Finish fetching');
*/

//This variables are only seen in this module!
//Scopes in the current module
const shippingCost = 10;
export const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

//DEFAULT exports - when we want to export one thing per module
export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

console.log(cart);