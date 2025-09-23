console.log('04');
let username = '   KeepCOding    ';
let password = '   Segura1234  ';
username = username.trim().toLowerCase();
password = password.trim();

let message = '';

if (username === 'keepcoding' && password === 'Segura1234') {
  message = 'Tienes acceso';
} else {
  message = 'No tienes acceso';
}

const email = '  Test@test.com  ';

console.log(email.trim().toLowerCase().includes('@keepcoding')) // true | false
console.log(email.trim().toLowerCase().replaceAll('test', '*****'));
console.log(email.trim().length);

const promptPrice = '12';
console.log(parseInt(promptPrice));
console.log(Number(promptPrice));
console.log(+promptPrice);

const email2 = prompt('Dime un correo');
if (email2 === null) {
  // Lanzar un error propio
  throw new Error('Email requerido');
}
