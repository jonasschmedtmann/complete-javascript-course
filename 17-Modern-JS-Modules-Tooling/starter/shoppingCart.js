// Exporting Module 

console.log('Exporting Module ');

//blocking code
// console.log('start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('finish fetching users');


const shippingCost = 10;
export const cart = [];


export const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart `);
    
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as qt}


export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart `);
}