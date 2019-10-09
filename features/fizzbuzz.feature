Feature: FizzBuzz

  Acceptance Criteria:

  - If a number is a multiple of 3, print Fizz
  - If a number is a multiple of 5, print Buzz
  - If a number is a multiple of 3 and 5, print FizzBuzz
  - Any other number, return the number.


  @e2e
  # If a number is a multiple of 3, print Fizz
  Scenario Outline: Number is a multiple of 3
    When I enter the number <number>
    Then 'Fizz' is returned
    Examples:
      | number |
      | 3      |
      | 6      |
      | 9      |

  @e2e
  # If a number is a multiple of 5, print Buzz
  Scenario Outline: Number is a multiple of 5
    When I enter the number <number>
    Then 'Buzz' is returned
    Examples:
      | number |
      | 5      |
      | 10     |
      | 20     |

  @e2e
  # If a number is a multiple of 3 and 5, print FizzBuzz
  Scenario Outline: Number is a multiple of 3 and 5
    When I enter the number <number>
    Then 'FizzBuzz' is returned
    Examples:
      | number |
      | 15     |
      | 30     |
      | 45     |

  @e2e
  # Any other number, return the number.
  Scenario Outline: Number is not a multiple of 3 or 5
    When I enter the number <number>
    Then '<number>' is returned
    Examples:
      | number |
      | 1      |
      | 2      |
      | 4      |

# Exploratory Checks

@exploratory
Scenario: Input is not a number

@exploratory
Scenario: Input is empty

@e2e
Scenario: Large numbers!
  When I enter the number 5555555555555556
  Then 'Number too large' is returned

