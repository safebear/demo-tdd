const assert = require('assert');
const { When, Then } = require('cucumber');
const fizzbuzz = require('../../src/fizzbuzz').fizzbuzz

let result;

  When('I enter the number {int}', function (numberToCheck) {
  
  result = fizzbuzz(numberToCheck)

  });

  Then('{string} is returned', function (fizzBuzzResult) {

    assert.equal(result, fizzBuzzResult, "result was incorrect");

  });  