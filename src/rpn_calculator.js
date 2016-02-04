var _ = require('underscore');
var errors = require('./errors');

/*
 * This module implements the core of an RPN Calculator.
 */
var RpnCalculator = function() {
  this.values = [];
}

RpnCalculator.prototype.__defineGetter__('currentValue', function() {
  return this.values.length === 0 ? 0 : this.values[this.values.length - 1];
});

/*
 * This function adds a value to the end of calculator's values queue.
 */
RpnCalculator.prototype.push = function(value) {
  this.values.push(value);
}

/*
 * Performs the add operation over the values' queue, removing them, and
 * storing the result at the queue's head.
 */
RpnCalculator.prototype.add = function() {
  return this.__operate__(function(memo, num){ return memo + num; });
}

/*
 * Performs the subtraction operation over the values' queue, removing them, and
 * storing the result at the queue's head.
 */
RpnCalculator.prototype.subtract = function() {
  return this.__operate__(function(memo, num){ return memo - num; });
}

/*
 * Performs the multiplication operation over the values' queue, removing them, and
 * storing the result at the queue's head.
 */
RpnCalculator.prototype.multiply = function() {
  return this.__operate__(function(memo, num){ return memo * num; });
}

/*
 * Performs the division operation over the values' queue, removing them, and
 * storing the result at the queue's head.
 */
RpnCalculator.prototype.divide = function() {
  return this.__operate__(function(memo, num){ return memo / num; });
}

/* 
 * This function encapsulates the common behavior shared by operations methods 
 */
RpnCalculator.prototype.__operate__ = function(op) {
  if (this.values.length == 0) {
    throw new errors.EmptyStackError();
  }

  var result = _.reduce(this.values, op);
  this.values = [result];
  return result;
}

module.exports = RpnCalculator;