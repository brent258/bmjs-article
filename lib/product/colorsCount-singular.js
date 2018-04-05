const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} is available in ${variable} different colors`,
    `${noun} comes in ${variable} different colors`,
    `${noun} can be found in ${variable} different colors`,
    `${noun} offers ${variable} different colors to choose from`,
  ];
  return rand(...lines);
};
