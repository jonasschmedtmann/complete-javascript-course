// exporting module
console.log('exporting module')

// Blocking code
// console.log('start fetching users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('finsihed fetching users');

const shippingCost = 10;
const cart = [];

// exporting certain variables
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 235;
const totalQuantity = 23;

// exporting multiple stored variables at the same time
export {
  totalPrice,
  totalQuantity as tq
};

// default exports when we want to export one thing per module
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};