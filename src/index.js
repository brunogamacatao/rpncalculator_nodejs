/*
 * This is the main module of RPN Calculator Exercise. It is responsible for
 * opening the standard input and output streams, and passing them to the 
 * calculator's protocol, which will then process the commands and output their
 * result.
 */

var readline    = require('readline');
var Interpreter = require('./interpreter');

var interpreter = new Interpreter();

/* 
 * We're creating a readline object for reading and writing at standard input 
 * and output.
 */
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

/*
 * Each line of the standard input, will be executed by calculator's protocol,
 * it's result is written on output stream. Any errors are also sent to output
 * stream rather than being thrown.
 */
rl.on('line', function(line){
  try {
    var result = interpreter.execute(line);

    if (!interpreter.running) {
      rl.close();
    } else {
      console.log(result);
    }    
  } catch (error) {
    console.log(error.message);
  }
});