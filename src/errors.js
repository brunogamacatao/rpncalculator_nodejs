var util = require('util');
var i18n = require("i18n");

/*
 * This is the module of rpncalculator project error. This module implements
 * a mechanism to display localized messages. Those messages are stored on
 * json files that are loaded according to Node.js current locale.
 */
i18n.configure({
  locales:['pt_BR', 'en'],
  directory: __dirname + '/messages'
});

/*
 * This error is thown if the user tries to execute a command on a stopped
 * interpreter.
 */
var StoppedInterpreterError = function() {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;  
  this.message = i18n.__('error.stopped_interpreter');
}

util.inherits(StoppedInterpreterError, Error);
exports.StoppedInterpreterError = StoppedInterpreterError;

/*
 * This error is thown allways that a user tries to execute an invalid command.
 */
var InvalidCommandError = function() {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;  
  this.message = i18n.__('error.invalid_command');
}

util.inherits(InvalidCommandError, Error);
exports.InvalidCommandError = InvalidCommandError;

/*
 * This error is thrown whenever the user tries to perform an operation before
 * informing any values to calculator.
 */
var EmptyStackError = function() {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;  
  this.message = i18n.__('error.empty_stack');
}

util.inherits(EmptyStackError, Error);
exports.EmptyStackError = EmptyStackError;
