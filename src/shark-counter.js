function sharkCounter(numberToCheck){

  if (numberToCheck > 5555555555555555) {
    return 'Number too large'
  }

  if(numberToCheck % 3 === 0 && numberToCheck % 5 === 0 ){
    return 'Draw'
  }

  if(numberToCheck % 3 === 0){
    return 'Jesus Wins'
  }

  if(numberToCheck % 5 === 0){
    return 'Jesus Loses'
  }

  return 'Apocalypse!';

}

module.exports = sharkCounter;