function fizzbuzz(numberToCheck){

  if(numberToCheck % 3 === 0 && numberToCheck % 5 === 0 ){
    return 'FizzBuzz'
  }

  if(numberToCheck % 3 === 0){
    return 'Fizz'
  }

  if(numberToCheck % 5 === 0){
    return 'Buzz'
  }

  return '1'

}

module.exports.fizzbuzz = fizzbuzz;