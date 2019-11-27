# BDD and TDD demo

Clone this repository and then run `npm install` from the command line to download all the dependencies. Then follow the instructions below to run the tests.

## To Run the Tests

To run the Cucumber TDD tests run the following command:

`npm test`

To run the `jest` TDD tests and see the test coverage report, run:

`npm run jest`

To unleash the mutation testing, run the command:

`npm run mutants`

To run the E2E (GUI) tests with Protractor, open the `src/index.html` file in the browser and then copy the URL and replace the `baseURL` in the [Protractor Config file](./e2e/protractor.conf.js) in the `e2e` directory  with the URL you've just copied.

Then run:

`npm run grid` 

To start up the `selenium server`. Then run:

`npm run e2e` to run the e2e tests.