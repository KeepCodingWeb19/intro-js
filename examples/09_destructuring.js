// destructuring

const { year } = { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 };
const { year: harryPotterYear } = {
  title: "Harry Potter and the Philosopher's Stone",
  author: 'J.K. Rowling',
  year: 1997,
};
const [, kiwi] = ['apple', 'kiwi', 'lemon'];

console.log(year, harryPotterYear);
console.log(kiwi);

const books = [
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

let year2000Books = [];
for (const { year, title } of books) {
  if (year >= 2000) {
    year2000Books = [...year2000Books, title];
  }
}

console.log(year2000Books.join(', '));

const csvProducts = 'T-shirt,12,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google';

/**
 * Process CSV
 * @param {string} csv string separated with comman and \n Ex: T-shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google
 * @returns product list
 */
const processCSV = (csv) => {
  const products = [];
  const lines = csv.split('\n');
  for (const line of lines) {
    const [name, price, shop] = line.split(',');
    products.push({
      name, // name: name,
      price: price * 2,
      shop,
    });
  }
  return products;
};

const products = processCSV(csvProducts);

let newCSV = '';
for (const { name, price, shop } of products) {
  newCSV = `${newCSV}${name},${price},${shop}\n`;
}

console.log(csvProducts);
console.log(products, newCSV);

// ... spread operator
const infoGeneral = {
  profesores: [],
  alumnos: [],
  fecha: '2025',
  bootcamp: 'Keepcoding',
  name: 'General',
};

let modulo1 = {
  name: 'JS',
};

modulo1 = {
  ...infoGeneral,
  ...modulo1,
};

console.log(modulo1);

let modulo2 = {
  ...infoGeneral,
  name: 'HTML',
};

const [, ...others] = ['apple', 'banana'];
// console.log([...books, ...others]);
const { profesores, alumnos, ...rest } = {
  ...infoGeneral,
  name: 'SQL',
};

console.log(rest);
