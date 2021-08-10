// Exporting Module
console.log(`Exporting Module`);

const shippingCost = 10;
const cart = [];

export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to cart `);
}

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tQ };
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to cart `);
}
