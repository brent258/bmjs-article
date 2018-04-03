const text = require('./index.js');

let lines = [];
lines.push(text.lib.product.property('price','$5.99','the slow feeder',false));
lines.push(text.lib.product.property('brand','durapet','the slow feeder',false));
console.log(lines);
