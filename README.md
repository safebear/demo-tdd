# BDD and TDD demo


### Maybe:

Add reporter?:
https://www.npmjs.com/package/cucumber-html-reporter
Add API?


## Demo

### TDD

1. Switch on npm watch
2. Create feature file and write Fizz (3) test
3. Create step defs
4. Create simple fizzbuzz
5. Create Buzz (5) test
6. Update fizzbuzz code till working
7. Create FizzBuzz (5 and 3) test and update code
8. Create normal number test and update code.
9. Then paramaterise tests with three data points and see it all fail.
10. Fix the Fizz test by changing the code
11. Fix the Buzz test by changing the code
12. Fix the FizzBuzz test by changing the code, but then also seeing that we need to refactor the if statement and bring it to the top.
13. Fix the normal test. Also see if you can refactor to make it simpler.

FAST
INSTANT FEEDBACK

### e2e

1. Add the template index.html
2. Complete the front end
3. Complete the 'controller'
4. Add the e2e directory
5. Add the protractor.config.js template and update with url and tags
6. Run the e2e tests and add the step defs templates
7. Complete the step defs

ONLY TESTING THE DOM AND CONTROLLER - NO FUNCTIONAL TESTS NEEDED AS NO LOGIC IN FRONTEND

### Exploratory Testing

1. Add that @exploratory tags should be ignored
2. Add scenarios for 
2.1 an empty field
2.2 a field with characters in it
2.3 for a huge number
3. Demo that a huge number doesn't work (by adding 5 onto a number)
4. Refactor code to return an error if the number is too large - easy to do now we've got all the other tests protecting us!

EASY AND SECURE REFACTORING


### e2e tests only - Protractor

Just add e2e tag to all

ORDERS OF MAGNITUDE SLOWER THAN FUNCTIONAL TESTS


### Jest

1. Quickly spin up the tests and code in Jest
2. Check code coverage - 100%!
2. Run mutation tests - problems with our controller, but also one of our tests isn't good enough!

COVERAGE

### DOM TDD?

*How do we do test our controller and DOM? With Browser Monkey?*


