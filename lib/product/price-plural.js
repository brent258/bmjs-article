const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} have a retail price of ${variable}`,
  ];
  return rand(...lines);
};
