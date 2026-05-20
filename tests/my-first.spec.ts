import { test, expect } from '@playwright/test';

test('my first test', async ({page}) => {
    await page.goto('https://playwright.dev/');

    const githubPagePromise = page.waitForEvent('popup');
    await page.getByRole('link', {name: 'Star microsoft/playwright on GitHub'}).click();
    const githubPage = await githubPagePromise;


    await expect(githubPage).toHaveURL('https://github.com/microsoft/playwright');
}) ;