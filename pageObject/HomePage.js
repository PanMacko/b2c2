const { expect } = require('@playwright/test');

class HomePage{
    constructor(page) {
        this.page = page;
        this.logo = page.locator('a[class="brand for-desktop w-nav-brand w--current"] img[alt="logo b2c2"]')
    }

    async open(){
        await this.page.goto('https://www.b2c2.com/')
    }

    async checkLogo(){
        await expect(this.logo).toBeVisible()
    }

    async verifyURL(expectedURL){
        const currentURL = await this.page.url()
        if (currentURL !== expectedURL){
            throw new Error(`Expected URL is: ${expectedURL}, but got ${currentURL}`)
        }
    }

    async verifyTitle(expectedTitle){
        const title = await this.page.title()
        if (expectedTitle !== title){
            throw new Error(`Expected title is: ${expectedTitle}, but got ${title}`)
        }
    }
}

module.exports = HomePage