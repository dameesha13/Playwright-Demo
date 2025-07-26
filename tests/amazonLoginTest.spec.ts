import { test, expect } from '@playwright/test';
import { AmazonLoginPage } from '../pages/AmazonLoginPage';
import { AmazonHomePage } from '../pages/AmazonHomePage';
import { AmazonProductPage } from '../pages/AmazonProductPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

test('Verify login test', async ({ page }) => {
  const amazonLogin = new AmazonLoginPage(page);
  // Replace with valid credentials (use ENV variables ideally)
  const email = 'testemail199201@gmail.com';
  const password = '1qaz@WSX@#$%';
  await amazonLogin.login(email, password);
  // Basic check after login (can be customized)
  await expect(page).toHaveURL(/.*signin/); // May vary depending on redirect

});

test('Verify Invalid login test', async ({ page }) => {
  const amazonLogin = new AmazonLoginPage(page);
  // Replace with valid credentials (use ENV variables ideally)
  const email = 'testemail199201@gmail.com';
  const password = '1qaz@WSX@#$%';
  await amazonLogin.login(email, password);
  // Basic check after login (can be customized)
  await expect(page).toHaveURL(/.*signin/); // May vary depending on redirect
});

test('verify Product Search', async ({ page }) => {
  const amazonLogin = new AmazonLoginPage(page); 
  const homePage = new AmazonHomePage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const productPage = new AmazonProductPage(page);

  await amazonLogin.navigateToHomePage();

  const searchText = 'iphone 14 pro max case';
  await homePage.enterSearchText(searchText);
  await homePage.clickSearchButton();
  await searchResultsPage.isTitleDisplayed();
  await searchResultsPage.selectItemFromList();

  //await productPage.selectCaseColor('Green'); //need to check

  await productPage.selectQtyFromDD('3');
  await productPage.validateSelectedQuantity('3');
  page.close();
});
