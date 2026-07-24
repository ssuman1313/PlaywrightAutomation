import { Locator, Page } from "@playwright/test";
import { BasePage } from "../core/BasePage";

export class DashboardPage extends BasePage {

    private readonly dashboardTitle: Locator;

    constructor(page: Page) {

        super(page);

        this.dashboardTitle = page.locator("h6");

    }

    public async getTitle(): Promise<string> {

        return await this.getText(this.dashboardTitle);

    }

    public async isDashboardDisplayed(): Promise<boolean> {

        return await this.isVisible(this.dashboardTitle);

    }

}