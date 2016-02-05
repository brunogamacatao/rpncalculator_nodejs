var assert = require('assert');
var Interpreter = require('../interpreter');
var errors = require('../errors');

describe('Interpreter tests', function() {
  var interpreter;

  beforeEach(function() {
    interpreter = new Interpreter();
  });

  it('should return the same number when it is passed as a command', function() {
    assert.equal("2", interpreter.execute("2"));
    assert.equal("3", interpreter.execute("3"));
  });

  it('should perform the four operations', function() {
    interpreter.execute("20");
    interpreter.execute("13");
    assert.equal("7", interpreter.execute("-"));
    interpreter.execute("2");
    assert.equal("3.5", interpreter.execute("/"));
    interpreter.execute("5");
    assert.equal("17.5", interpreter.execute("*"));
  });

  it('should not allow invalid commands', function() {
    assert.throws(function() {interpreter.execute("xpt")}, errors.InvalidCommandError);
  });

  it('should stop executing when q command is supplied', function() {
    assert.ok(interpreter.running);
    interpreter.execute("q");
    assert.ok(!interpreter.running);
  });

  it('should not allow additional commands after stopped', function() {
    interpreter.execute("q");
    assert.throws(function() {interpreter.execute("3")}, errors.StoppedInterpreterError);
  });

  it('should ignore an empty line', function() {
    assert.equal("2", interpreter.execute("2"));
    assert.equal("2", interpreter.execute(""));
    assert.equal("3", interpreter.execute("3"));
  });

  it('should trim the commands', function() {
    assert.equal("2", interpreter.execute("  2"));
    assert.equal("3", interpreter.execute("3    "));
    assert.equal("5", interpreter.execute(" +  "));
  });
});