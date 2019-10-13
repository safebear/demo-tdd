const sharkCounter = require("../src/shark-counter");

// Number of sharks divides by three? Jesus Wins!
// Number of sharks divides by five? Shark Wins…
// Number of sharks divides by three and five, it’s a draw.
// Any other number of sharks, it’s the Apocalypse.

describe("Jesus vs Sharks", () => {
  test.each`
    numSharks
    ${3}
    ${6}
    ${9}
  `("$numSharks divides by 3, Jesus wins", ({ numSharks }) => {
    expect(sharkCounter(numSharks)).toEqual("Jesus Wins");
  });

  test.each`
    numSharks
    ${5}
    ${10}
    ${20}
  `("$numSharks divides by 5, Jesus loses", ({ numSharks }) => {
    expect(sharkCounter(numSharks)).toEqual("Jesus Loses");
  });

  test.each`
    numSharks
    ${15}
    ${30}
    ${45}
  `("$numSharks divides by 3 and 5, drew", ({ numSharks }) => {
    expect(sharkCounter(numSharks)).toEqual("Draw");
  });

  test.each`
    numSharks
    ${1}
    ${2}
    ${4}
  `("$numSharks doesnt divide by 3 or 5, Apocalypse", ({ numSharks }) => {
    expect(sharkCounter(numSharks)).toEqual("Apocalypse!");
  });

  test.each`
    numSharks
    ${5555555555555556}
  `("$numSharks number is too large", ({ numSharks }) => {
    expect(sharkCounter(numSharks)).toEqual("Number too large");
  });
});
