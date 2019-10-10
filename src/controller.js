function sharkCounterController() {
  // Get the value from the input field
  let input = document.querySelector("#userInput").value;

  // Update the result to contain the 'sharkCounter' output
  document.querySelector("#result").innerHTML = sharkCounter(input);
}