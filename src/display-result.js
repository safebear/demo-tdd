 const $ = require('jquery');
 const sharkCounter = require('./shark-counter')

 $('.btn').click(() => {
    let input = $('#userInput').val();
    $('#result').text(sharkCounter(input));
})