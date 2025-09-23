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
console.clear();

const day = '';
let message4 = '';
switch (day) {
  case 'Monday':
    message4 = 'Hay clase es Lunes';
    break;
  case 'Tuesday':
    message4 = 'Hay clase es Martes';
    break;
  default:
    message4 = 'No hay clase';
    break;
}
/*
let message4 = '';
if (day === 'Monday') {
  message4 = 'Hay clase es Lunes';
} else if (day === 'Tuesday') {
  message4 = 'Hay clase es Martes';
} else {
  message4 = 'No hay clase';
}
*/
const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

const total = productAPrice * productAQuantity + productBPrice * productBQuantity + productCPrice * productCQuantity;

let message5 = "";
if (total < 50) {
  message5 = "Puedes agregar más productos" ;
} else if (total <= 100)  {
  message5 =  "Estás cerca de tu límite de compra";
} else {
  message5 = "Has alcanzado el límite de tu compra" ;
}

console.log (`Total: ${total} — ${message5}` );