/**
 * @jest-environment jsdom
 */

test('displays result after clicking on button', () => {

  // Set up our document body
  document.body.innerHTML =
    '<input type="text" id="userInput" class="form-control" placeholder="Number of Sharks" />' +
    '<button class="btn btn-primary btn-block" value="Submit" />' +
    '<h3 class="text-center">Result</h3>' +
    '<h1 class="text-center" id="result"><h1>';

  // This module has a side-effect
  require('../src/display-result');

  const $ = require('jquery');

  // Use jquery to update our user input value
  $('#userInput').val("3");

  // Use jquery to emulate a click on our button
  $('button.btn.btn-primary.btn-block').click();

  // Assert that the correct result is on screen
  expect($('h1#result').text()).toEqual('Jesus Wins');
});