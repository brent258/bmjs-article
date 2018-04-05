const text = require('./index.js');

let obj = {
  price: '$5',
  colors: ['blue','red'],
  sizes: ['large','small'],
  title: 'The Slow Feeder'
};

console.log(text.productDescription(obj,false));
