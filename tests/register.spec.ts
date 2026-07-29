import { test, expect } from '../src/fixtures/baseFixture';
import { ConfigManager } from '../src/config/ConfigManager';
import { RandomHelper } from '../src/utils/RandomHelper';

test('Register New User', async ({ page, registrationPage }) => {

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