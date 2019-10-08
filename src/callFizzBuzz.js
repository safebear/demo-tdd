function glue() {
  let input = document.querySelector("#userInput").value;
  document.querySelector("#result").innerHTML = fizzbuzz(input);
}