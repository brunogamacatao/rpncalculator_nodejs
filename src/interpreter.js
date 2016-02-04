var RpnCalculator = require('./rpn_calculator');
var errors = require('./errors');
var isNumeric = require('isnumeric');

const QUIT_COMMAND = 'q';

/*
 * This module implements the RPN Calculator's protocol.
 */
var Interpreter = function() {
  this.calculator = new RpnCalculator();
  this.running    = true;

  var self = this;
  this.operators  = {
    '+': function() { self.calculator.add() },
    '-': function() { self.calculator.subtract() },
    '*': function() { self.calculator.multiply() },
    '/': function() { self.calculator.divide() }
  };
}

/*
 * This function executes one command at the interpreter.
 */
Interpreter.prototype.execute = function(command) {
  if (!this.running) {
    throw new errors.StoppedInterpreterError();
  }

  command = command.trim(); // The command is trimmed by default

  if (isNumeric(command)) {
    this.calculator.push(parseFloat(command));
  } else if (command in this.operators) {
    this.operators[command]();
  } else if (command === QUIT_COMMAND) {
    this.running = false;
  } else if (!command) {
    // An empty command is simply ignored
  } else {
    throw new errors.InvalidCommandError();
  }

  return this.calculator.currentValue;
}

module.exports = Interpreter;