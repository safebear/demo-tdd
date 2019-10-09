function fizzbuzz(numberToCheck){

  if (numberToCheck > 5555555555555555) {
    return 'Number too large'
  }

  if(numberToCheck % 3 === 0 && numberToCheck % 5 === 0 ){
    return 'FizzBuzz'
  }

  if(numberToCheck % 3 === 0){
    return 'Fizz'
  }

  if(numberToCheck % 5 === 0){
    return 'Buzz'
  }

  return numberToCheck.toString();

}

module.exports.fizzbuzz = fizzbuzz;