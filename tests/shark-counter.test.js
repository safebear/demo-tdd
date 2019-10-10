const sharkCounter = require('../src/shark-counter').sharkCounter

// Number of sharks divides by three? Jesus Wins!
// Number of sharks divides by five? Shark Wins…
// Number of sharks divides by three and five, it’s a draw.
// Any other number of sharks, it’s the Apocalypse.

describe.each`
    input    
    ${3}  
    ${9} 
    ${12} 
  `('returns Jesus Wins when $input is entered', ({input}) => {
    test('Number of sharks divides by three? Jesus Wins!', () => {
      expect(sharkCounter(input)).toEqual("Jesus Wins");
  });
});

describe.each`
    input     
    ${5} 
    ${10}
    ${20}
  `('returns Jesus Loses when $input is entered', ({input}) => {
    test('Number of sharks divides by five? Shark Wins…', () => {
      expect(sharkCounter(input)).toEqual("Jesus Loses");
  });
});

describe.each`
    input    
    ${15}   
    ${30} 
    ${60}
  `('returns Draw when $input is entered', ({input}) => {
    test('Number of sharks divides by three and five, it’s a draw.', () => {
      expect(sharkCounter(input)).toEqual("Draw");
  });
});

describe.each`
    input   
    ${1} 
    ${2}
    ${4}
  `('returns Apocalypse! when $input is entered', ({input}) => {
    test('Any other number of sharks, it’s the Apocalypse.', () => {
      expect(sharkCounter(input)).toEqual('Apocalypse!');
  });
});

describe.each`
    input     
    ${5555555555555556} 
  `('returns number too large when $input is entered', ({input}) => {
    test('large number.', () => {
      expect(sharkCounter(input)).toEqual('Number too large');
  });
});