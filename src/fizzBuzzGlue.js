function glue() {
  // Get the value from the input field
  let input = document.querySelector("#userInput").value;

  // Update the result to contain the 'fizzbuzz' output
  document.querySelector("#result").innerHTML = fizzbuzz(input);
}