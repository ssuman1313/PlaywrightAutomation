import { Locator, Page } from "@playwright/test";
import { BasePage } from "../core/BasePage";
import { LoginUser } from "../models/LoginUser";

export class LoginPage extends BasePage {

    private readonly usernameTextbox: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;
    private readonly dashboardHeader: Locator;
    private readonly invalidCredentialMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.usernameTextbox = page.locator("input[name='username']");
        this.passwordTextbox = page.locator("input[name='password']");
        this.loginButton = page.locator("button[type='submit']");
        this.dashboardHeader = page.locator("h6");
        this.invalidCredentialMessage = page.locator(".oxd-alert-content-text");
    }

    public async enterUsername(username: string): Promise<void> {
        await this.fill(this.usernameTextbox, username, "Username");
    }

    public async enterPassword(password: string): Promise<void> {
        await this.fill(this.passwordTextbox, password, "Password");
    }

    public async clickLogin(): Promise<void> {
        await this.click(this.loginButton);
    }

    public async login(user: LoginUser): Promise<void> {

        await this.enterUsername(user.username);

        await this.enterPassword(user.password);

        await this.clickLogin();
    }

    public async isDashboardDisplayed(): Promise<boolean> {

        return await this.isVisible(this.dashboardHeader);

    }

    public async getErrorMessage(): Promise<string> {

        return await this.getText(this.invalidCredentialMessage);

    }

}