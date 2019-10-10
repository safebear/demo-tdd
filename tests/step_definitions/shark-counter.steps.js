const assert = require('assert');
const { When, Then } = require('cucumber');
const sharkCounter = require('../../src/shark-counter').sharkCounter

let sharkAttackResult;

  When('I enter the number {int}', function (numberToCheck) {
  
  sharkAttackResult = sharkCounter(numberToCheck)

  });

  Then('{string} is returned', function (expectedResult) {

    assert.equal(sharkAttackResult, expectedResult, "result was incorrect");

  });  