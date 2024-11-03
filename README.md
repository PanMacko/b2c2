**Introduction**

This repository contains two Cucumber-style automated tests written in Playwright using Javacript.
- The first one called All_Tabs_Testing goes to https://b2c2.com and clicks through the headings at the top of the page. It checks that they are visible, contain the correct name, and that when you click on them it redirects you to the right url.
- The second one called Subscribe checks the Subscribe tab, whether all items are visible in the tab when the user hovers the mouse, and checks the operation of this when the user sends a valid email address without checking reCAPTCHA, whether the correct message is then visible.

**Test run instructions**
1. Open terminal and clone repository ``` git clone https://github.com/PanMacko/b2c2.git ```
2. Navigate to the project directory by ```cd```
3. In terminal ``` npm install ```
4. In terminal ``` npx playwright install ``` (During installation choose "Javascript")
5. In terminal ```npm install @cucumber/cucumber --save-dev```
6. To execute the tests, in terminal ``` npx cucumber-js --tags @All_Tabs_Testing ``` to execute first test or ``` npx cucumber-js --tags @subscribe ``` to execute second test

