import { test, expect } from '../src/fixtures/baseFixture';
import { ConfigManager } from "../src/config/ConfigManager";
import { LoginPage } from "../src/pages/LoginPage";
import { DashboardPage } from "../src/pages/DashboardPage";
import { TestDataHelper } from "../src/utils/TestDataHelper";
import { ExcelHelper } from "../src/utils/ExcelHelper";
import { LoginUser } from "../src/models/LoginUser";

/*const users = TestDataHelper.getTestData<LoginUser[]>(
    "test-data/loginUsers.json"
);*/
const users = ExcelHelper.getTestData<LoginUser>(
    "test-data/loginUsers.xlsx",
    "Login"
);

for (const user of users) {
    test(user.testCaseName, async ({ page,
        loginPage,
        dashboardPage }) => {

        await page.goto(ConfigManager.baseUrl);

        await loginPage.login(user);
        if (user.expectedResult == "Success") {
            expect(await dashboardPage.isDashboardDisplayed()).toBeTruthy();
        }
        else {

            expect(await loginPage.getErrorMessage())
                .toContain("Invalid");

        }
    });
}
test("InValid Login @smoke", async ({ page,
    loginPage,
    dashboardPage }) => {

    const users = TestDataHelper.getTestData<LoginUser[]>
        ("test-data/loginUsers.json");

    await page.goto(ConfigManager.baseUrl);

    await loginPage.login(users[1]);

    expect(await dashboardPage.getTitle()).toBe("Dashboard");

});