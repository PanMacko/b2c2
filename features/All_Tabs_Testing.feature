@All_Tabs_Testing
Feature: Navigation Tabs
Scenario: Verify that all tabs navigate to the correct pages
    Given the user is on the homepage "https://www.b2c2.com/"
    Then the user sees the logo
    Then the user checks that the page title is "Home | B2C2"

    When the user clicks the "Solutions" tab
    Then the user is redirected to the page "https://www.b2c2.com/solutions"
    Then the user sees the header "Institutional solutions"

    When the user clicks the "About" tab
    Then the user is redirected to the page "https://www.b2c2.com/about"
    Then the user sees the header "About"

    When the user clicks the "News & Events" tab
    Then the user is redirected to the page "https://www.b2c2.com/news-and-events"
    Then the user sees the header "News & Events"

    When the user clicks the "Institutional Insight" tab
    Then the user is redirected to the page "https://www.b2c2.com/insights"
    Then the user sees the header "Institutional Insights"

    When the user clicks the "Join B2C2" tab
    Then the user is redirected to the page "https://www.b2c2.com/join-b2c2"
    Then the user sees the header "Join B2C2"

    When the user clicks the "CONTACT" tab
    Then the user is redirected to the page "https://www.b2c2.com/contact-us"
    Then the user sees the header "Get in touch"

    When the user returns to the homepage by clicking the logo
    Then the user is redirected to the page "https://www.b2c2.com/"