import { Page, expect, Locator } from '@playwright/test';

export class UICommons {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // commom method to generate Web Element from Locator
    async Element(locator: string): Promise<Locator> {
        return this.page.locator(locator);

    }

    // common methid to Launch the application 

    async launchApplication(url: string): Promise<void> {
        await this.page.goto(url);
    }

    // common method to get the title of the page
    async getTitle(): Promise<string> {
        return this.page.title();
    }

    // common method to scroll to the element
    async scrollToElement(locator: string): Promise<void> {
        const element = await this.Element(locator);
        await element.scrollIntoViewIfNeeded();
    }

    // common method to click on the element
    async clickElement(locator: string): Promise<void> {
        const element = await this.Element(locator);
        await element.click();
    }


    // common method to type text into the element
    async typeText(locator: string, text: string): Promise<void> {
        const element = await this.Element(locator);
        await element.fill(text);
    }

    // common method to double click on the element
    async doubleClickElement(locator: string): Promise<void> {
        const element = await this.Element(locator);
        await element.dblclick();
    }

    // common method to right click on the element
    async rightClickElement(locator: string): Promise<void> {
        const element = await this.Element(locator);
        await element.click({ button: 'right' });
    }

    // common method to hover on the element
    async hoverOnElement(locator: string): Promise<void> {
        const element = await this.Element(locator);
        await element.hover();
    }

    // common methid to select option from dropdown
    async selectOption(locator: string, option: string): Promise<void> {
        const element = await this.Element(locator);
        await element.selectOption(option);
    }

    // common methiod to check the checkbox
    async checkCheckbox(locator: string): Promise<void> {
        const element = await this.Element(locator);
        expect(await element.isChecked()).toBeFalsy();
        await element.check();
        await expect(element).toBeChecked();
    }

    // common methd to uncheck the checkbox
    async uncheckCheckbox(locator: string): Promise<void> {
        const element = await this.Element(locator);
        expect(await element.isChecked()).toBeTruthy();
        await element.uncheck();
        await expect(element).not.toBeChecked();
    }

    // common methiod to get the text of the element
    async getText(locator: string): Promise<string> {
        const element = await this.Element(locator);
        const text = await element.textContent();
        return text ?? '';
    }

    // common method to get the attribute value of the element
    async getAttribute(locator: string, attribute: string): Promise<string> {
        const element = await this.Element(locator);
        const attrValue = await element.getAttribute(attribute);
        return attrValue ?? '';
    }

    // common method to check if the element is visible or not
    async isElementVisible(locator: string): Promise<boolean> {
        const element = await this.Element(locator);
        return await element.isVisible();
    }

    // comon method to check if the element is enabled or not
    async isElementEnabled(locator: string): Promise<boolean> {
        const element = await this.Element(locator);
        return await element.isEnabled();
    }

    // common method to upload file
    async uploadFile(locator: string, filePath: string): Promise<void> {
        const element = await this.Element(locator);
        await element.setInputFiles(filePath);
    }

    // common method to handle alert
    async handleAlert(action: 'accept' | 'dismiss', promptText?: string): Promise<void> {
        this.page.once('dialog', async (dialog) => {
            if (action === 'accept') {
                await dialog.accept(promptText);
            } else {
                await dialog.dismiss();
            }
        });
    }

    // common method to take screenshot    
    async takeScreenshot(path: string): Promise<void> {
        await this.page.screenshot({ path });
    }

}