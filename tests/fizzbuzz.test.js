const fizzbuzz = require('../src/fizzbuzz').fizzbuzz

// - If a number is a multiple of 3, print Fizz
// - If a number is a multiple of 5, print Buzz
// - If a number is a multiple of 3 and 5, print FizzBuzz
// - Any other number, return the number.

describe.each`
    input | output     
    ${3}  | ${'Fizz'}  
    ${9}  | ${'Fizz'}
    ${12} | ${'Fizz'}
  `('returns $output when $input is entered', ({input, output}) => {
    test('If a number is a multiple of 3, print Fizz', () => {
      expect(fizzbuzz(input)).toEqual(output);
  });
});

describe.each`
    input | output     
    ${5}  | ${'Buzz'}  
    ${10}  | ${'Buzz'}
    ${20} | ${'Buzz'}
  `('returns $output when $input is entered', ({input, output}) => {
    test('If a number is a multiple of 5, print Buzz', () => {
      expect(fizzbuzz(input)).toEqual(output);
  });
});

describe.each`
    input | output     
    ${15}  | ${'FizzBuzz'}  
    ${30}  | ${'FizzBuzz'}
    ${60} | ${'FizzBuzz'}
  `('returns $output when $input is entered', ({input, output}) => {
    test('If a number is a multiple of 3 and 5, print FizzBuzz', () => {
      expect(fizzbuzz(input)).toEqual(output);
  });
});

describe.each`
    input | output     
    ${1}  | ${'1'}  
    ${2}  | ${'2'}
    ${4} | ${'4'}
  `('returns $output when $input is entered', ({input, output}) => {
    test('Any other number, return the number.', () => {
      expect(fizzbuzz(input)).toEqual(output);
  });
});

describe.each`
    input | output     
    ${5555555555555556}  | ${'Number too large'}  
  `('returns $output when $input is entered', ({input, output}) => {
    test('large number.', () => {
      expect(fizzbuzz(input)).toEqual(output);
  });
});