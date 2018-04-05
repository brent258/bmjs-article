const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} is manufactured by ${variable}`,
    `${noun} is made by ${variable}`,
    `${noun} is produced by ${variable}`,
  ];
  return rand(...lines);
};
