console.log('03');
// ejemplos de valores truthy
const valor1 = 32;
const valor2 = 'Hola';

const isTruthy = valor1 ? 'Es verdadero' : 'Es falso';

console.log(isTruthy);
console.log(valor2 ? 'Es verdadero' : 'Es falso');

// ejemplos de falsy
const valor3 = 0;
const valor4 = '';
const valor5 = null;
const valor6 = undefined;
const valor7 = NaN;

console.log(valor3, valor3 ? 'Es verdadero' : 'Es falso');
console.log(valor4, valor4 ? 'Es verdadero' : 'Es falso');
console.log(valor5, valor5 ? 'Es verdadero' : 'Es falso');
console.log(valor6, valor6 ? 'Es verdadero' : 'Es falso');
console.log(valor7, valor7 ? 'Es verdadero' : 'Es falso');

const price = parseInt(prompt('Dime un precio'));

let message = '';
console.log(price);
if (price) {
  message = 'Tiene precio';
} else {
  message = 'No tiene precio';
}

console.log(message);
