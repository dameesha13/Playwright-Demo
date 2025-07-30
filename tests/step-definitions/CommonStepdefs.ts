import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;



Given(/^I open the text box page$/, async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://demoqa.com/text-box');
});

When(/^I enter valid user details$/, async function () {
  await page.fill('#userName', 'John Doe');
  await page.fill('#userEmail', 'john.doe@example.com');
  await page.fill('#currentAddress', '123 Main St');
  await page.fill('#permanentAddress', '456 Elm St');
  await page.click('#submit');
});

Then(/^I should see the submitted name and email$/, async function () {
  const nameText = await page.textContent('#name');
  const emailText = await page.textContent('#email');
  if (!nameText?.includes('John Doe') || !emailText?.includes('john.doe@example.com')) {
    throw new Error('Submitted data not displayed correctly');
  }

  await browser.close();
});