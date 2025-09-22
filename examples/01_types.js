
const precio = 120.12;

// const producto = 'Zapatillas';
const producto = 'Zapatillas \"air jordan\"';
// console.log(producto);

// template string
const message = `
Producto ${producto}
Precio ${precio}
`;

console.log(message);

let stock = Infinity;

stock = 10;

stock = 'No stock';

stock = null;

// console.log(stock - 20);

const hasStock = false;
console.log(typeof hasStock);

const anios = 60;
const jugador = 'jordan';
const dorsal = 23;
const salonDeLaFama = true;
const equipoActual = null;

console.log(typeof anios);
console.log(typeof jugador);
console.log(typeof dorsal);
console.log(typeof salonDeLaFama);

console.log(`Soy ${jugador} de ${anios} años, ahora mi equipo es ${equipoActual}`);

// Bigint
let numeroGrande = 1234567890123456789012345678901234567890n;

console.log(typeof numeroGrande);
