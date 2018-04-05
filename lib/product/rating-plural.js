const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} have a rating of ${variable}`,
  ];
  return rand(...lines);
};
