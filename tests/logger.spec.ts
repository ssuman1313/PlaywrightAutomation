import { test } from '@playwright/test';
import { Logger } from '../src/utils/Logger';

test('Logger Test', async () => {

    Logger.info("Framework Started");

    Logger.warn("This is warning");

    Logger.error("Sample Error");

    Logger.debug("Debug Message");

});