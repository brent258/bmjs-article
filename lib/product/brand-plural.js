const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} are manufactured by ${variable}`,
  ];
  return rand(...lines);
};
