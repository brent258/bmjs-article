const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} are available in ${variable} different sizes`,
  ];
  return rand(...lines);
};
