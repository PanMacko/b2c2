const { Before, After, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const HomePage = require('../pageObject/HomePage');


let browser;
let context;
let page;
let homePage;

Before(async () => {
    browser = await chromium.launch({headless: false})
    context = await browser.newContext()
    page = await context.newPage()
    homePage = new HomePage(page)
    await homePage.open()
    await homePage.verifyURL("https://www.b2c2.com/");
});

After(async () => {
    await context.close();
    await browser.close();
});



//Scenario 1
Given('the user is on the home page {string}', async function (url) {
});

async function hoverOverSubscribeTab() {
    const subscribeTab = page.locator('aside[class="subscribe_btn"] div[class="navmenu-2 subs"]');
    await expect(subscribeTab).toBeVisible();
    await subscribeTab.hover();
}

When('the user hovers the mouse over the "SUBSCRIBE" tab', async function(){
    await hoverOverSubscribeTab()
})

Then('the user sees the subscription popup', async function(){
    const popup = page.locator('.flex_div.vertical.left.subs')
    await expect(popup).toBeVisible()
})

Then('the header is {string}', async function (expectedHeader) {
    const header = page.locator('div[class="flex_div vertical left subs"] div[class="title-icon_in _20px"]')
    await expect(header).toBeVisible()
    await expect(header).toHaveText(expectedHeader); 
});

Then('the popup contains an email input field with placeholder {string}', async function (placeholder) {
    const emailInput = page.locator('body > div:nth-child(8) > div:nth-child(2) > nav:nth-child(2) > div:nth-child(2) > div:nth-child(1) > aside:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(4) > input:nth-child(1)')
    await expect(emailInput).toBeVisible()
    await expect(emailInput).toHaveAttribute('placeholder', placeholder);
});

Then('the popup contains a {string} button', async function (buttonText) {
    const subscribeButton = page.locator('div[class="nav-menu_inner_wrap xx"] input:nth-child(2)')
    await expect(subscribeButton).toBeVisible() 
});

Then('the popup contains a visible reCAPTCHA widget', async function () {
    const recaptcha = page.locator('body > div:nth-child(8) > div:nth-child(2) > nav:nth-child(2) > div:nth-child(2) > div:nth-child(1) > aside:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(4) > input:nth-child(2)')
    await expect(recaptcha).toBeVisible()
});

//Scenario 2
When('the user enters {string} into the email field', async function(email) {
    await hoverOverSubscribeTab()
    const emailInput = page.locator('body > div:nth-child(8) > div:nth-child(2) > nav:nth-child(2) > div:nth-child(2) > div:nth-child(1) > aside:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(4) > input:nth-child(1)')
    await emailInput.fill(email)
});

When('the user clicks the "Subscribe" button without check reCAPTCHA', async function() {
    
    let dialogMessage;

    page.on('dialog', async dialog => {
        dialogMessage = dialog.message() 
        await dialog.dismiss()
    });

    const subscribeButton = page.locator('div[class="nav-menu_inner_wrap xx"] input:nth-child(2)')
    
    await expect(subscribeButton).toBeVisible()
    await expect(subscribeButton).toBeEnabled()
    await subscribeButton.click()
    await page.waitForTimeout(500)
    this.dialogMessage = dialogMessage
});

Then('the user sees a message {string}', async function(expectedMessage) {
    expect(this.dialogMessage).toBe(expectedMessage)
});