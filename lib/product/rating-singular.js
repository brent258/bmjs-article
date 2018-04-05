const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} has a rating of ${variable}`,
  ];
  return rand(...lines);
};
