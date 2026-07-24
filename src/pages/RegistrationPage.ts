import { Locator, Page } from '@playwright/test';
import { BasePage } from '../core/BasePage';

export class RegistrationPage extends BasePage {

    private readonly registerLink: Locator;
    private readonly genderMale: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly password: Locator;
    private readonly confirmPassword: Locator;
    private readonly registerButton: Locator;
    private readonly successMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.registerLink = page.getByRole('link', { name: 'Register' });

        this.genderMale = page.locator('#gender-male');

        this.firstName = page.locator('#FirstName');

        this.lastName = page.locator('#LastName');

        this.email = page.locator('#Email');

        this.password = page.locator('#Password');

        this.confirmPassword = page.locator('#ConfirmPassword');

        this.registerButton = page.locator('#register-button');

        this.successMessage = page.locator('.result');
    }

    public async openRegistrationPage(): Promise<void> {
        await this.click(this.registerLink);
    }

    public async register(
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ): Promise<void> {

        await this.openRegistrationPage();

        await this.click(this.genderMale);

        await this.fill(this.firstName, firstName, "First Name");

        await this.fill(this.lastName, lastName, "Last Name");

        await this.fill(this.email, email, "Email");

        await this.fill(this.password, password, "Password");

        await this.fill(this.confirmPassword, password, "Confirm Password");

        await this.click(this.registerButton);

    }

    public async getSuccessMessage(): Promise<string> {

        return await this.getText(this.successMessage);

    }

}