**Introduction**

This repository contains three Cucumber-style automated tests written in Playwright using Javacript.
- The first one called All_Tabs_Testing goes to https://b2c2.com and clicks through the headings at the top of the page. It checks that they are visible, contain the correct name, and that when you click on them it redirects you to the right url.
- The second one called Subscribe checks the Subscribe tab, whether all items are visible in the tab when the user hovers the mouse, and checks the operation of this when the user sends a valid email address without checking reCAPTCHA, whether the correct message is then visible.
- The third one called closeButton is ad ADDITIONAL test to validate the close button in the subscribe section. While creating the automated tests, I encountered an error: When we hover the mouse over “Subscribe” the window shows us, but we can't close it with the close button. THE WRITTEN TEST ENDS WITH AN ERROR BUT IT IS USED FOR RETESTING WHEN THE PROGRAMMER FIXES THE ERROR and then the test will check if the error was fixed.

**Test run instructions**
1. Open terminal and clone repository ``` git clone https://github.com/PanMacko/b2c2.git ```
2. Navigate to the project directory by ```cd```
3. In terminal ``` npm install ```
4. In terminal ``` npx playwright install ``` (During installation choose "Javascript")
5. In terminal ```npm install @cucumber/cucumber --save-dev```
6. To execute the tests, in terminal ``` npx cucumber-js --tags @All_Tabs_Testing ``` to execute first test or ``` npx cucumber-js --tags @subscribe ``` to execute second test

