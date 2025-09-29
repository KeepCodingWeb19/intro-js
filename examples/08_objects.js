console.log('08');
const firstProductName = 'T-shirt';
const firstProductPrice = 35;
const firstProductQuantity = 2;

const secondProductName = 'Cap';
const secondProductPrice = 35;
const secondProductQuantity = 2;

// objects
const firstProduct = {}; // new Object();

firstProduct.name = 'T-shirt';
firstProduct['total-price'] = 35;
firstProduct.quantity = 2;
firstProduct.available = false;
firstProduct.sizes = ['L', 'XL', 'XXL'];

firstProduct.attributes = {};
firstProduct.attributes.color = 'red';
firstProduct.attributes.material = 'cotton';

console.log(firstProduct);

const secondProduct = {
  name: 'Cap',
  'total-price': 35,
  quantity: 2,
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
