console.log('03');
const firstProductName = 'T-shirt';
const firstProductPrice = 35;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

let message = '';

// si el producto 1 > 2 muestra un mensaje "primer producto mas caro que el segundo"
// si es el mismo productos igual de precio
// si es 1 < 2 primer producto es barato
if (firstProductPrice > secondProductPrice) {
  message = 'El primer producto es más caro que el segundo';
} else if (firstProductPrice === secondProductPrice) {
  message = `Los productos ${firstProductName} y ${secondProductName} tienen el mismo precio`;
} else {
  message = 'El primer producto es más barato que el segundo';
}


let message2 = '';
const sameNames = firstProductName === secondProductName;
const samePrices = firstProductPrice === secondProductPrice;
let test = 'por fuera';
if (sameNames && samePrices) {
  message2 = 'Mismos productos';
} else {
  // const test = 'dentro else';
  message2 = 'Son diferentes';
}

console.log(message, message2);
console.log(test); // 'por fuera'

const message3 = sameNames && samePrices ? 'Mismos productos' : 'Son diferentes';

console.log(message3);

