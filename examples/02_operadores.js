console.log('02');

// Asignación

const x = 10;
const y = 5;

// aritméticos
const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

const suma = firstProductPrice + secondProductName;

const totalFirstProduct = firstProductPrice * firstProductQuantity;
const totalSecondProduct = secondProductPrice * secondProductQuantity;

let total = (firstProductPrice * firstProductQuantity) + (secondProductPrice * secondProductQuantity);

const discount = 20;

total = total - discount;

// console.log(total);
const message1 = 'Message 1';
const message2 = 'Message 2';

console.log(message1 + ' ' + message2);
console.log(`${message1} ${message2}`);
/*
const pescadoPrecio = 12;
const patataPrecio = '2';
const totalCuenta = pescadoPrecio + parseInt(patataPrecio);
console.log(totalCuenta);
*/

console.log('12' + '1'); // "121"
console.log('12' - '1'); // 11
console.log('12,00' - 1); // NaN
console.log(true + true); // 2
console.log(false + true); // 1
console.log('12' - true); // 11
console.log('12' + true); // "12true"
console.clear();

const module = 4 % 2; // 0

// operadores de comparación
console.log(12 === '12'); // true
console.log(12 !== 11); // true
console.log(firstProductPrice === secondProductPrice); // false
console.log(firstProductPrice >= secondProductPrice); // false
console.log(firstProductPrice <= secondProductPrice); // true

const isNaNExample = 'Perro' - 12;
console.log(isNaNExample === NaN); // true pero es false :(
console.log(isNaN(isNaNExample)); // true
console.clear();

// operadores lógicos
// AND && y OR ||
console.log(firstProductPrice > secondProductPrice && firstProductQuantity === secondProductQuantity); // false
console.log(firstProductPrice > secondProductPrice || firstProductQuantity === secondProductQuantity); // true

const totalProducts = 4;
const stockTotal = totalProducts - firstProductQuantity - secondProductQuantity;

const hasStock = stockTotal > 0;
console.log(hasStock); // false
console.log(!hasStock); // true

// operador ,
const thirdProductName = 'Pants',
  thirdProductPrice = 55,
  thirdProductQuantity = 2;
