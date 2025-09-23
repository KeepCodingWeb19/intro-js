console.log('05');
const firstProductName = 'T-shirt';
const firstProductPrice = 35;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

// 1. definicion
// 2. parametros
// 3. lo que devolvemos o return
// 4. ejecutar
// JSDoc
/**
 * Calculate product total
 * @param {number} price - product price
 * @param {number} quantity - product quantity
 * @returns total
 */
const calcProductPrice = (price, quantity) => price * quantity;

// ejecutar
const total = calcProductPrice(10, 2);
// console.log(total);

const firstProductTotal = calcProductPrice(firstProductPrice, firstProductQuantity);
const secondProductTotal = calcProductPrice(secondProductPrice, secondProductQuantity);

console.log(firstProductTotal, secondProductTotal);

secondProductName.trim();

const tShirt = 'T-shirt';
const cap = 'Cap';

const article = (product, quantity) => {
  let message = '';
  if (product === tShirt && quantity >= 2) {
    message = '¡Recibes un 10% de descuento en la segunda camiseta!';
  } else if (product === cap && quantity >= 3) {
    message = '¡Obtén una gorra gratis por la compra de 3!';
  } else {
    message = 'No hay promociones para esta selección';
  }
  return message;
};

const product1 = article(tShirt, 2);
const product2 = article(cap, 3);
console.log(product1);
console.log(product2);