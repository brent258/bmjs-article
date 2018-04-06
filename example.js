const text = require('./index.js');

let obj = {
  price: '$5',
  colors: 'BLACK, BLUE, BLUE&PURPLE, BLUE&RED, Dark Green, Deep Blue, Deep Blue&Black, Grey, Large Blue Φ11.7\'\', PINK, PINK - A, PURPLE, Pink&Yellow, RED, YELLOW'.split(', '),
  sizes: ['large','small'],
  title: 'Pet Fun Feeder Dog Bowl Slow Feeder, Bloat Stop Dog Food Bowl Maze Interactive Puzzle Non Skid,Φ7.8\'\' FOR Small and medium dogs,Φ11.7\'\' FOR Large dog,Come With FREE Travel Bowl',
  features: ['stuff']
};

console.log(text.productDescription(obj,false,['slow dog bowl']));
