console.log('11');
// map filter
const numbers = [10, 20, 25];
const newList = [];
for (const number of numbers) {
  newList.push(number * 2);
}
console.log(newList);

// map / filter
// return un array nuevo
// reciben como param una función
const doubleFn = number => number * 2;

numbers.forEach(number => {
  console.log(number);
});

const newListMap = numbers.map(doubleFn);
console.log(newListMap);
const filterList = numbers.filter(elem => (
  elem % 2 !== 0
)).map(elem => elem + 3);
console.log(filterList);
/*
const forEach = (array, cb) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    cb(element, index);
  }
};

forEach(numbers, function (number, index) {
  console.log('Funcion map custom', number, index);
});
*/

let books = [
  { title: '1984', author: 'George Orwell', year: 1949 },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    year: 1997,
  },
  { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
  { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
  { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
];

const year2000BooksMapFilter = books
  .filter(({ year }) => year >= 2000)
  .map(({ title }) => title)
  .join(', ');
console.log(year2000BooksMapFilter);

const allBooks2000 = books.every((elem) => {
  return elem.year >= 2000;
});
console.log(allBooks2000); // false

const atLeastOne = books.some(({ year }) => {
  return year >= 2000;
});

const bookTwilight = structuredClone(books).find(({ title }) => {
  return title === 'Twilight';
});

bookTwilight.stock = true;
console.log(books);

books = books.map(elem => {
  if (elem.title === 'Twilight') {
    elem = { ...elem, stock: true };
  }
  return { ...elem };
});

console.log(books); // true

// reduce
const numbersReduce = [1, 2, 3, 4, 5];

const total = numbersReduce.reduce(function (acum, element) {
  const result = acum + element;
  return result;
}, 0);

console.log(total);

const calculadora = () => {
  let result = 0;

  const validar = (number) => {
    if (typeof number !== 'number') {
      throw new Error('El argumento debe ser un número');
    }
  };

  const sumar = (number) => {
    validar(number);
    result += number;
  };
  const restar = (number) => {
    validar(number);
    result -= number;
  };
  const multiplicar = (number) => {
    validar(number);
    result *= number;
  };
  const dividir = (number) => {
    validar(number);
    if (number === 0) {
      throw new Error('No se puede dividir por 0');
    }
    result /= number;
  };
  const total = () => result;

  return { sumar, restar, multiplicar, dividir, total };
};

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16
