const rand = require('bmjs-random');

module.exports = function(noun,variable) {
  let lines = [
    `${noun} has a rating of ${variable}`,
    `${noun} is rated at ${variable}`,
    `${noun} is reviewed at ${variable}`,
    `${noun} is given a rating of ${variable}`,
  ];
  return rand(...lines);
};
