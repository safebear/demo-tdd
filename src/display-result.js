 const $ = require('jquery');
 const sharkCounter = require('./shark-counter')

 $('.btn').click(() => {
    let input = $('#userInput').val();
    $('#result').text(sharkCounter(input));
})

// function displayUser() {
//   let input = $('#userInput').val();
//   $('#result').text(sharkCounter(input));
// }

// module.exports = displayUser;