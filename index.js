'use strict';

var before = require('invoke-before');

module.exports = function (func) {
  return before(2, func);
};

