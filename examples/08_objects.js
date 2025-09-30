console.log('08');
const firstProductName = 'T-shirt';
const firstProductPrice = 35;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

// objects
const firstProduct = {}; // new Object();

firstProduct.name = firstProductName;
firstProduct['total-price'] = firstProductPrice;
firstProduct.quantity = firstProductQuantity;
firstProduct.available = false;
firstProduct.sizes = ['L', 'XL', 'XXL'];

firstProduct.attributes = {};
firstProduct.attributes.color = 'red';
firstProduct.attributes.material = 'cotton';

console.log(firstProduct);

const secondProduct = {
  name: secondProductName,
  'total-price': secondProductPrice,
  quantity: secondProductQuantity,
  available: false,
  sizes: ['L', 'XL', 'XXL'],
  attributes: {
    color: 'red',
    material: 'cotton',
  },
};

console.log(secondProduct.name); // Cap -> String
console.log(secondProduct.quantity);
console.log(secondProduct.sizes);

const key = 'stock';

console.log(secondProduct[key]?.trim());

secondProduct.quantity = 10;
// secondProduct.sizes = 1;
secondProduct.attributes = {
  color: 'blue',
  material: 'unknown',
};

delete secondProduct.available;

/**
 * Product
 * @typedef {Object} Product
 * @property {string} name
 * @property {number} quantity
 */

/**
 * 
 * @param {Product} product 
 * @param {string} key 
 * @returns attribute
 */
const getProductAttribute = (product, key) => {
  return product[key];
};
// JSDOC

console.log(getProductAttribute(secondProduct, 'name'), getProductAttribute(secondProduct, 'shop'));

console.log(Object.keys(secondProduct));
console.log(Object.values(secondProduct));
// console.log(Object.entries(secondProduct));
const products = [firstProduct, secondProduct];
console.clear();

const shows = [
  {
    id: 1,
    name: 'Under the dome',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
  },
  {
    id: 2,
    name: 'Game of thrones',
    genres: ['Drama'],
  },
  {
    id: 3,
    name: 'Wednesday',
    genres: ['Drama'],
  },
];

const firstShow = shows[0];
const lastShow = shows[shows.length - 1];

let info = '';
for (const show of shows) {
  if (show.name === 'Under the dome') continue;
  info = `
    ${info}
    <h2>${show.name}</h2>
    <p>${show.genres.join(' - ')}</p>
  `;
}
document.writeln(info);
console.log(JSON.stringify(firstShow));
try {
 // código que puede lanzar exceptions -> throw new Error
 const objFromString = JSON.parse('{"id":1"name":"Under the dome","genres":["Drama","Science-Fiction","Thriller"]}');
 console.log(objFromString);
} catch (error) {
  // veremos el error
  console.error(error);
}

console.clear('Fin del código');

const user = {
  email: 'test@test.com',
  address: {
    street: 'test',
    number: 12,
  },
  name: undefined,
  zipCode: null,
};

// JSON parse / stringify
// spread operator ...
// structuredClone
// const user2 = JSON.parse(JSON.stringify(user));
/*
const user2 = {
  ...user,
  address: {
    ...user.address,
  },
};
/*
const user2 = Object.assign({}, user, {
  address: Object.assign({}, user.address)
});
*/
const user2 = structuredClone(user);

user2.email = 'testUser2@test.com';
user2.address.number = 10;
console.log(user);
console.log(user2);


const registerUser = (userData, value) => {
  const newEmail = structuredClone(userData);
  newEmail.email = value;
  return newEmail;
};

const user3 = registerUser(user, 'value@test.com');
console.log(user3, user);

const entries = Object.entries(shows[0]);

let entriesExample = [];
for (const key in firstShow) {
  const value = firstShow[key];
  entriesExample = [
    ...entriesExample,
    [key, value],
  ];
}
/*
for (const key of Object.keys(firstShow)) {
  const value = firstShow[key];
  entriesExample = [
    ...entriesExample,
    [key, value],
  ];
}
*/
console.clear(entriesExample);

/*
Ejercicio
Recorrer el array de libros y mostrar en consola los títulos de los libros que fueron publicados después del año 2000.
*/
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
for (const book of books) {
  if (book.year >= 2000) {
    // year2000Books.push(book.title);
    year2000Books = [...year2000Books, book.title];
  }
}
console.log(year2000Books.join(', '));

const fav2000Books = (books) => {
  let year2000Books = structuredClone(books);
  for (const book of year2000Books) {
    if (book.year >= 2000) {
      book.title = `Fav - ${book.title}`;
    }
  }
  return year2000Books;
};

console.log(fav2000Books(books));
console.log(fav2000Books(books));
console.log(fav2000Books(books));
console.log(fav2000Books(books));
console.clear('original', books);
