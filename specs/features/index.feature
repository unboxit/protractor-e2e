Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  @dev
  Scenario: Wrapping WebDriver
    Given I go to "homepage"
    Then the title should equal "Protractor E2E"
    And page should have a "container" element
