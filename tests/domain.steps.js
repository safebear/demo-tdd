const { defineFeature, loadFeature } = require("jest-cucumber");
 
const sharkCounter = require("../src/shark-counter");
const feature = loadFeature("./features/shark-counter.feature");


defineFeature(feature, test => {
  test("Number is a multiple of 3", ({ given, when, then }) => {

    let result;

    when(/^I enter the number (.*)$/, (numberOfSharks) => {

      result = sharkCounter(numberOfSharks);
    });


    then(/^'(.*)' is returned$/, (outcome) => {
      expect(result).toBe(outcome);

    });
  });
});
