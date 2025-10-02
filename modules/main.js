// import
// ESModules
import calculadora, {
  version,
  counter as counterAlias
} from './utils.js';
// import * as api from './utils.js';
// commonJS
// const calculadora = require('./utils.js');
// const { version, counter } = require('./utils.js');

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16

const team1 = counterAlias();
team1.addPoint(1);
console.log(team1.getCurrentPoints());