console.log('07');

const fruits = [
  'apple', // 0
  'banana', // 1
  'kiWi skip', // 2
  'watermelon', // 3
  'orange error', // 4
  'lemon', // 5
];
/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[5]);
*/
/*
for, while, for of, for in
*/
let message = '';
for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];
  if (fruit.includes('skip')) {
    continue;
  }
  if (fruit.includes('error')) {
    break;
  }
  if (fruit.includes('lemon')) {
    message = `${message}***`;  
  } else {
    message = `${message}${fruit}`;
  }
  message = `${message}\n`;
}

console.log(message.trim());

let newFruitList = [];

for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];
  if (!fruit.includes('skip') && !fruit.includes('error')) {
    newFruitList = [...newFruitList, fruit];
    // newFruitList = [].concat(newFruitList, fruit);
    // newFruitList.push(fruit);
  }
}

let newFruitListForOf = [];
for (const fruit of fruits) {
  if (!fruit.includes('skip') && !fruit.includes('error')) {
    newFruitListForOf = [...newFruitListForOf, fruit];
  }
}

console.log(newFruitList, newFruitListForOf);

/*
for (let num of numbers) {
  if (typeof num === 'number' && !isNaN(num)) {
    if (num % 2 === 0) {
      evenNumbers = [...evenNumbers, num];
    } else {
      oddNumbers = [...oddNumbers, num];
    }
  }
}

console.log('even:', evenNumbers, 'odd: ', oddNumbers);
*/