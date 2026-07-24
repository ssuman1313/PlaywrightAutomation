import {test} from '@playwright/test';
import { ConfigManager } from "../src/config/ConfigManager";

test('Verify configuration', async()=>{
    console.log('Base URL :', ConfigManager.baseUrl);
    console.log('Browser  :', ConfigManager.browser);
    console.log('Headless :', ConfigManager.headless);
    console.log('Timeout  :', ConfigManager.timeout);
});