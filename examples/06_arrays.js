console.log('06');
//                   0     1      2
const myProducts = ['TV', 'PC', 'Cap']; // new Array(10);
console.log(myProducts.length);

console.log('primer producto', myProducts[0]); // TV
console.log('segundo producto', myProducts[1]); // PC
console.log('tercer producto', myProducts[2]); // Cap
console.log('cuarto producto', myProducts[3]); // undefined

const firstProduct = myProducts[0];
const secondProduct = myProducts[1];
const fourthProduct = myProducts[3] || false;

const productExists = firstProduct && fourthProduct;
const sameProduct = productExists && firstProduct.trim().toLowerCase() === fourthProduct.trim().toLowerCase();
console.log(sameProduct);

myProducts.push('Shoes');

console.log(myProducts);
console.log('cuarto producto', myProducts[3]); // undefined
myProducts.pop();
console.log(myProducts);
myProducts.shift();
console.clear();
console.log(myProducts);
myProducts[0] = myProducts[0].trim() === 'PC' ? 'PS5' : myProducts[0];
console.log(myProducts.length);


const addProducts = (list, item) => {
  const newList = [...list];
  newList.push(item);
  return newList;
};

const myProductsBeforeAddingNewOnes = [...myProducts]; /// structuredClone(myProducts);
myProducts.pop();
myProducts.pop();
myProducts.pop();
myProducts.pop();

console.log('1', myProductsBeforeAddingNewOnes);

const nuevaLista = addProducts(myProducts, 'Mac'); // return nueva lista

console.log('2', myProductsBeforeAddingNewOnes);
console.log('3', myProducts);
console.log('4', nuevaLista);

const input1 = [
  'keepcoding',
  'testeo',
  'html',
];

const getFilename = (input1) => {
  const lastElement = [...input1].pop();
  return `.${lastElement}`;
};

let result = getFilename(input1); // .html
console.log('result', result, 'original', input1);
result = getFilename(input1);
console.log('result', result, 'original', input1);
result = getFilename(input1);
console.log('result', result, 'original', input1);
result = getFilename(input1);
console.log('result', result, 'original', input1);
console.clear();

console.log(input1.slice(-1));
console.log(input1.at(-1));
console.log(input1.reverse());
console.log(input1.includes('testeo')); // true
console.log(input1.indexOf('testeo')); // 1 : index input1[-1] -> undefined

const positionTesteo = input1.indexOf('testeo'); // 1
// 0              1        2
['keepcoding', 'testeo', 'html'];
input1.reverse().splice(positionTesteo, 1); // return ['testeo']
console.log(input1);

console.log(input1.join(', ')); // keepcoding,html
const csvRow = 'TV,CAP,T-SHIRT';

/**
 * 
 * @param {string} product1 product 1
 * @param {string} product2 
 * @param {string} product3 
 * @returns display text
 */
const displayProducts = (product1, product2, product3) => {
  return `
    Product1: ${product1.toLowerCase()}
    Product2: ${product2.toLowerCase()}
    Product3: ${product3.toLocaleLowerCase()}
  `;
};

const csvProducts = csvRow.split(','); // ['TV', 'CAP, 'T-SHIRT']

const display = displayProducts(
  csvProducts[0],
  csvProducts[1],
  csvProducts[2],
);
console.log(display);