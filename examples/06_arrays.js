console.log('06');
//                   0     1      2
const myProducts = ['TV', 'PC', 'Cap']; // new Array(10);
console.log(myProducts);

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
console.log(myProducts);
