import { Locator, Page } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    public async click(locator: Locator): Promise<void> {

        Logger.info("Clicking element");

        await locator.click();

    }

    public async fill(locator: Locator, value: string, fieldName: string): Promise<void> {

        Logger.info(`Entering value : ${fieldName}`);

        await locator.fill(value);

    }

    public async getText(locator: Locator): Promise<string> {
        return await locator.textContent() ?? "";
    }

    public async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

}