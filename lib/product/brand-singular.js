const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} is manufactured by ${variable}`,
  ];
  return rand(...lines);
};
