# Java RPN Calculator

This is an implementation for the RPN Calculator problem.
It is written in JavaScript programming language for Node.JS, it has message internationalization, unit tests and code coverage support.

## Dependencies

The code relies on the following dependencies:

1. underscore - It enables function programming like goodies for arrays, maps and other data structures;

2. isnumeric - They created a simple 'isNumeric' function that checks if a string if composed by a numeric value or not;

3. i18n - Node.JS localization module, it loads messages, according to the current locale, on json files.

## Environment setup

In order to run this project you'll need to have installed:

1. Node.js - JavaScript server runtime
  It is available at https://nodejs.org

2. Mocha - Test framework
  To install, run at terminal: npm install -g mocha
  
  If you're on osx, run: sudo npm install -g mocha

2. Istanbul - Code coverage tool
  To install, run at terminal: npm install -g istanbul 
  
  If you're on osx, run: sudo npm install -g istanbul 

## Building

git clone https://github.com/brunogamacatao/rpncalculator_nodejs.git

cd rpncalculator_nodejs

npm install

## Testing

npm test

## Running the RPN Calculator

npm start

## Code Coverage Reports

npm run coverage
