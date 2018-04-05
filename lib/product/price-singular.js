const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} has a retail price of ${variable}`,
    `${noun} costs around ${variable}`,
    `${noun} retails for around ${variable}`,
    `${noun} will set you back around ${variable}`,
    `${noun} can be purchased for around ${variable}`,
  ];
  return rand(...lines);
};
