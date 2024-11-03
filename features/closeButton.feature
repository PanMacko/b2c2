@closeButton

Feature: Close button in subscribe tab 

Scenario: The user try to close subscribe tab
    Given the user is on the main page "https://www.b2c2.com/"
    When the user hovers the mouse over the "SUBSCRIBE" window
    Then the user sees the subscription window
    When the user click on the close button
    Then the subscription window closes