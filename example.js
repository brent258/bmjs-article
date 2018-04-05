const text = require('./index.js');

let obj = {
  price: '$5',
  colors: ['blue','red'],
  sizes: ['large','small'],
  title: 'The Slow Feeder'
};

let lines = ['***grass*** $$$is$$$ red','***grass*** $$$is$$$ nice'];
console.log(lines[0] + ' ' + text.join(lines));
