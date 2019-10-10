Feature: Shark Counter

  Acceptance Criteria:

Number of sharks divides by three? Jesus Wins!
Number of sharks divides by five? Shark Wins…
Number of sharks divides by three and five, it’s a draw.
Any other number of sharks, it’s the Apocalypse.



  @e2e
  # Number of sharks divides by three? Jesus Wins!
  Scenario Outline: Number is a multiple of 3
    When I enter the number <number>
    Then 'Jesus Wins' is returned
    Examples:
      | number |
      | 3      |
      | 6      |
      | 9      |


  # Number of sharks divides by five? Shark Wins…
  Scenario Outline: Number is a multiple of 5
    When I enter the number <number>
    Then 'Jesus Loses' is returned
    Examples:
      | number |
      | 5      |
      | 10     |
      | 20     |


  # Number of sharks divides by three and five, it’s a draw.
  Scenario Outline: Number is a multiple of 3 and 5
    When I enter the number <number>
    Then 'Draw' is returned
    Examples:
      | number |
      | 15     |
      | 30     |
      | 45     |


  # Any other number of sharks, it’s the Apocalypse.
  Scenario Outline: Number is not a multiple of 3 or 5
    When I enter the number <number>
    Then 'Apocalypse!' is returned
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

Scenario: Large numbers!
  When I enter the number 5555555555555556
  Then 'Number too large' is returned

