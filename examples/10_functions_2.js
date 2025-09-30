console.log('10');
// prog funcional
// default params
// rest params
// cierres
// funciones como param
const suma = (num1, num2) => num1 + num2;

// closures
const counter = () => {
  let points = 0;

  const addPoint = (amount = 1) => {
    points = points + amount;
  };

  const getCurrentPoints = () => points;

  return {
    addPoint,
    getCurrentPoints,
  };
};

const team1 = counter(); // { message: 'test' }
team1.addPoint();
console.log(team1.getCurrentPoints());

const team2 = counter();
team2.addPoint();
team1.addPoint();
team2.addPoint();
console.log(team2.getCurrentPoints());

const products = [
  { name: 'T-shirt', price: 20, quantity: 2 },
  { name: 'Cap', price: 5, quantity: 3 },
  { name: 'Pants', price: 50, quantity: 1 },
  { name: 'Shoes', price: 0, quantity: 0 },
];

const cart = () => {
  let products = [];

  const addProduct = ({ name, price, quantity }) => {
    if (name !== undefined && price !== undefined && quantity !== undefined) {
      products = [...products, {
        name,
        price,
        quantity,
      }];
    }
  };

  const getProducts = () => products;

  return { addProduct, getProducts };
};

const user1 = cart();

user1.addProduct(products[0]);
user1.addProduct(products[2]);
user1.addProduct({
  prueba: '1234',
});

const user2 = cart();

for (const product of products) {
  user2.addProduct(product);
}

console.log(user1.getProducts());
console.log(user2.getProducts());
console.clear();
// funciones como param
