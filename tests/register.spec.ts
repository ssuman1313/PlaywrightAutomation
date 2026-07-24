import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../src/pages/RegistrationPage';
import { ConfigManager } from '../src/config/ConfigManager';
import { RandomHelper } from '../src/utils/RandomHelper';

test('Register New User', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);

    const email = RandomHelper.generateEmail();

    await page.goto(ConfigManager.baseUrl);

    await registrationPage.register(
        'Sourav',
        'Saha',
        email,
        'Password@123'
    );

    expect(await registrationPage.getSuccessMessage())
        .toContain('Your registration completed');

});