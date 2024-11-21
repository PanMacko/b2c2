// This is an additional test case that would serve as a retest after the fix made by the developer.

const { Before, After, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const HomePage = require('../pageObject/HomePage');


let browser, context, page, homePage


Given('the user is on the main page {string}', async function (url) {

    browser = await chromium.launch({ headless: false })
    context = await browser.newContext()
    page = await context.newPage()
    homePage = new HomePage(page)
    await homePage.open()
    await homePage.verifyURL(url)
});

When('the user hovers the mouse over the "SUBSCRIBE" window', async function(){
    const subscribeTab = page.locator('aside[class="subscribe_btn"] div[class="navmenu-2 subs"]');
    await expect(subscribeTab).toBeVisible();
    await subscribeTab.hover();
})

Then('the user sees the subscription window', async function(){
    const window = page.locator('.flex_div.vertical.left.subs')
    await expect(window).toBeVisible()
})

When('the user click on the close button', async function(){
    const closeButton = page.locator('aside[class="subscribe_btn"] img[alt="close icon"]')
    await expect(closeButton).toBeVisible()
    await closeButton.click()
})

Then('the subscription window closes', async function(){
    const window = page.locator('.flex_div.vertical.left.subs')
    await expect(window).not.toBeVisible()
})

After(async function () {
    
    if (page) {
        await page.close();
    }
    if (context) {
        await context.close();
    }
    if (browser) {
        await browser.close();
    }
});