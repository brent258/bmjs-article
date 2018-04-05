const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} are available in ${variable} colors`,
  ];
  return rand(...lines);
};
