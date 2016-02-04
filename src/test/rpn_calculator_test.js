var assert = require('assert');
var RpnCalculator = require('../rpn_calculator');
var errors = require('../errors');

describe('RpnCalculator tests', function() {
  var calc;

  beforeEach(function() {
    calc = new RpnCalculator();
  });

  it('should begin with current value as zero', function() {
    assert.equal(0, calc.currentValue);
  });

  it('should push a value into stack and update the current value', function() {
    calc.push(32);
    assert.equal(32, calc.currentValue);
    calc.push(9);
    assert.equal(9, calc.currentValue);
  });

  it('should add two values and update the current value', function() {
    calc.push(3);
    calc.push(8);

    assert.equal(3 + 8, calc.add());
    assert.equal(3 + 8, calc.currentValue);
  });

  it('should not perform operations over an empty stack calculator', function() {
    assert.throws(function() {calc.add()}, errors.EmptyStackError);
  });

  it('should subtract two values and update the current value', function() {
    calc.push(42);
    calc.push(40);
    assert.equal(42 - 40, calc.subtract());
    assert.equal(42 - 40, calc.currentValue);
  });

  it('should multiply two values and update the current value', function() {
    calc.push(7);
    calc.push(8);
    assert.equal(7 * 8, calc.multiply());
    assert.equal(7 * 8, calc.currentValue);
  });

  it('should divide two values and update the current value', function() {
    calc.push(3);
    calc.push(2);
    assert.equal(3.0 / 2.0, calc.divide());
    assert.equal(3.0 / 2.0, calc.currentValue);
  });

  it('should add three or more values', function() {
    calc.push(1);
    calc.push(2);
    calc.push(3);
    assert.equal(1 + 2 + 3, calc.add());
    calc.push(4);
    calc.push(5);
    calc.push(6);
    assert.equal(6 + 4 + 5 + 6, calc.add());
  });

  it('should allow multiple operations', function() {
    calc.push(-3);
    calc.push(-2);
    assert.equal(6, calc.multiply());
    calc.push(5);
    assert.equal(11, calc.add());
  });
});