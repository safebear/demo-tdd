const assert = require('assert');
const { Before, When, Then } = require('cucumber');
const { browser, by } = require('protractor')


Before(async function (){
  browser.waitForAngularEnabled(false);
  await browser.get("")
})

When('I enter the number {int}', async function (numberToTry) {
  await browser.findElement(by.css("input#userInput")).sendKeys(numberToTry.toString());
  await browser.findElement(by.css("input.btn.btn-primary.btn-block")).click();
});

Then('{string} is returned', async function (expectedResult) {
  assert.equal(await browser.findElement(by.id("result")).getText(), expectedResult, "Results don't match"); 
});