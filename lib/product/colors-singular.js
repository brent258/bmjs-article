const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} is available in ${variable} colors`,
    `${noun} comes in ${variable} colors`,
    `${noun} offers ${variable} colors to choose from`,
    `${noun} can be found in ${variable} colors`,
  ];
  return rand(...lines);
};
