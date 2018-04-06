const text = require('./index.js');

let obj = {
  price: '$5',
  colors: ['blue','red'],
  sizes: ['large','small'],
  title: 'Ootdpet Fun Feeder Dog Bowl Slow Feeder Stop Bloat for Dogs Cats,Purple,Blue',
  features: ['stuff']
};

console.log(text.productDescription(obj,false,['slow dog bowl']));
