const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} is available in ${variable} different sizes`,
    `${noun} comes in ${variable} different sizes`,
    `${noun} can be found in ${variable} different sizes`,
    `${noun} offers ${variable} different sizes to choose from`,
  ];
  return rand(...lines);
};
