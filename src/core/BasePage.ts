import { Locator, Page } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto(url: string): Promise<void> {
        try {
            await this.page.goto(url);
        } catch (error) {
            Logger.error(`Failed to navigate to ${url}: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    public async click(locator: Locator | null | undefined): Promise<void> {

        if (!locator) {
            Logger.warn('Click skipped because the locator is null or undefined.');
            return;
        }

        try {
            Logger.info(`Clicking element: ${locator.toString()}`);
            await locator.click();
        } catch (error) {
            Logger.error(`Failed to click element ${locator.toString()}: ${error instanceof Error ? error.message : String(error)}`);
        }

    }

    public async fill(locator: Locator, value: string, fieldName: string): Promise<void> {

        if (!locator) {
            Logger.warn(`Fill skipped for ${fieldName} because the locator is null or undefined.`);
            return;
        }

        try {
            Logger.info(`Entering value : ${fieldName}`);
            await locator.fill(value);
        } catch (error) {
            Logger.error(`Failed to fill ${fieldName}: ${error instanceof Error ? error.message : String(error)}`);
        }

    }

    public async getText(locator: Locator | null | undefined): Promise<string> {
        if (!locator) {
            Logger.warn('getText skipped because the locator is null or undefined.');
            return "";
        }

        try {
            return await locator.textContent() ?? "";
        } catch (error) {
            Logger.error(`Failed to read text from locator ${locator.toString()}: ${error instanceof Error ? error.message : String(error)}`);
            return "";
        }
    }

    public async isVisible(locator: Locator | null | undefined): Promise<boolean> {
        if (!locator) {
            Logger.warn('isVisible skipped because the locator is null or undefined.');
            return false;
        }

        try {
            return await locator.isVisible();
        } catch (error) {
            Logger.error(`Failed to verify visibility of locator ${locator.toString()}: ${error instanceof Error ? error.message : String(error)}`);
            return false;
        }
    }

}