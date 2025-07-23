import { firefox,Browser,test, expect } from '@playwright/test';
import { AmazonLoginPage } from '../pages/AmazonLoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
let browser: Browser;

test('Amazon login test', async ({ page }) => {
  const amazonLogin = new AmazonLoginPage(page);

  // Replace with valid credentials (use ENV variables ideally)
  const email = 'testemail199201@gmail.com';
  const password = '1qaz@WSX@#$%';
  await amazonLogin.login(email, password);
  // Basic check after login (can be customized)
  await expect(page).toHaveURL(/.*signin/); // May vary depending on redirect

});

test('Invalid login test', async ({ page }) => {
  const amazonLogin = new AmazonLoginPage(page);
  // Replace with valid credentials (use ENV variables ideally)
  const email = 'testemail199201@gmail.com';
  const password = '1qaz@WSX@#$%';
  await amazonLogin.login(email, password);
  // Basic check after login (can be customized)
  await expect(page).toHaveURL(/.*signin/); // May vary depending on redirect
});

test('Product Search', async ({ page }) => {
  //const browser = await firefox.launch({ headless: false });
  //const context = await browser.newContext();
  //page = await context.newPage();

  const amazonLogin = new AmazonLoginPage(page); 
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const productPage = new ProductPage(page);

  await amazonLogin.navigateToHomePage();

  const searchText = 'iphone 14 pro max case';
  await homePage.enterSearchText(searchText);
  await homePage.clickSearchButton();
  await searchResultsPage.isTitleDisplayed();
  await searchResultsPage.selectItemFromList();

  await productPage.selectCaseColor('Green'); //need to check
  //await productPage.selectQtyFromDD('3');
  await productPage.selectQtyFromDD('3');
  await productPage.validateSelectedQuantity('3');
  // ✅ Close all browser windows
  //await browser.close();
});

test('Amazon Sign in page loads', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  await page.hover('#nav-link-accountList');
  await page.click('text=Sign in');

  await expect(page).toHaveURL(/.*signin/);
  const email = page.locator('#ap_email_login');//page.getByLabel('Enter mobile number or email');
  await email.fill('testskyemail8992@gmail.com');
  await expect(email).toHaveValue('testskyemail8992@gmail.com');
  await page.click('#a-button-input');

});
