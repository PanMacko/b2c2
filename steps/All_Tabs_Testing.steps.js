const { Before, After, Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const HomePage = require('../pageObject/HomePage');

let browser;
let context;
let page;
let homePage;

Before(async () => {
    browser = await chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    this.page = page;
});

After(async () => {
    await context.close();
    await browser.close();
});

Given('the user is on the homepage {string}', async function (url) {

    homePage = new HomePage(page);
    await homePage.open();
    await homePage.verifyURL(url);
});

Then('the user sees the logo', async function () {
    await homePage.checkLogo();
});

Then('the user checks that the page title is {string}', async function (title) {
    await homePage.verifyTitle(title);
});

When('the user clicks the {string} tab', async function (tabName) {
    const tabSelectors = {
        "Solutions": 'a.link-8[href="/solutions"]',
        "About": 'a.link-8[href="/about"]',
        "News & Events": 'a.link-8[href="/news-and-events"]',
        "Institutional Insight": 'a.link-8[href="/insights"]',
        "Join B2C2": 'a.link-8[href="/join-b2c2"]',
        "CONTACT": '.text-block.contact-btn'
    };
    
    const tabSelector = tabSelectors[tabName];
    const tab = page.locator(tabSelector);
    await expect(tab).toHaveText(tabName);
    await expect(tab).toBeVisible();
    await tab.click();
});

Then('the user is redirected to the page {string}', async function (expectedUrl) {
    await expect(page).toHaveURL(expectedUrl);
});

Then('the user sees the header {string}', async function (expectedHeader) {
    const head = page.locator('.page-title-2, .heading-1-2.white');
    await expect(head).toBeVisible();
    await expect(head).toHaveText(expectedHeader);
});


When('the user returns to the homepage by clicking the logo', async function () {
    const homeLogo = page.locator('.brand.for-desktop.w-nav-brand')
    await expect(homeLogo).toBeVisible();
    await homeLogo.click();
});

Then('Then the user is redirected to the page {string}', async function(expectedUrl){
    await expect(page).toHaveURL(expectedUrl)
})