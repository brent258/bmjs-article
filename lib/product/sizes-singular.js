const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} is available in ${variable} sizes`,
    `${noun} comes in ${variable} sizes`,
    `${noun} offers ${variable} sizes to choose from`,
    `${noun} can be found in ${variable} sizes`,
  ];
  return rand(...lines);
};
