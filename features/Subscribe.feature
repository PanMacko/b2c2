@subscribe
Feature: Subscribe tab functionality

Scenario: The user hovers mouse over "SUBSCRIBE"
    Given the user is on the home page "https://www.b2c2.com/"
    When the user hovers the mouse over the "SUBSCRIBE" tab
    Then the user sees the subscription popup
    And the header is "Read our news & commentary"
    And the popup contains an email input field with placeholder "Enter email here"
    And the popup contains a "Subscribe" button
    And the popup contains a visible reCAPTCHA widget

Scenario: Submitting a valid email without reCAPTCHA
    When the user enters "test0@example.com" into the email field
    And the user clicks the "Subscribe" button without check reCAPTCHA
    Then the user sees a message "Please confirm you’re not a robot."