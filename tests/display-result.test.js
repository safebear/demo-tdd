
/**
 * @jest-environment jsdom
 */

const html = require('fs').readFileSync('./src/index.html').toString();
const $ = require('jquery');

jest
  .dontMock('fs')
  .dontMock('jquery');

test('displays result after clicking on button', async () => {

  // Set up our document body
  document.documentElement.innerHTML = html.toString() 

  // The JavaScript to load
  require('../src/display-result');

  // Use jquery to update our user input value
  $('#userInput').val("3");

  // Use jquery to emulate a click on our button
  $('.btn.btn-primary.btn-block').click();

  // Assert that the correct result is on screen
  expect($('h1#result').text()).toEqual('Jesus Wins');
});