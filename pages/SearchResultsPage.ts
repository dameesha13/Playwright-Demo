import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
  private page: Page;
  private titleOfResultsPage: Locator;
  private selectItem: Locator;
  private addToCart: Locator;

  private passwordInput: Locator;
  private signInSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleOfResultsPage = page.getByRole('link', { name: 'Results' });
    this.selectItem = page.locator('[data-component-type="s-search-result"]');
    //this.searchResults = page.locator('[data-component-type="s-search-result"]');
    this.addToCart = page.locator('#a-autoid-2-announce');
  }


  async isTitleDisplayed() {
      await this.titleOfResultsPage.isVisible();
  }

  async selectItemFromList() {
    //const productLink = this.page.locator('').first();
    //await productLink.click();
    const secondItem = this.selectItem.nth(1); // 0 = first, 1 = second
    await secondItem.scrollIntoViewIfNeeded();
    await secondItem.click();
  }

  async clickAddToCartButton() {
    await this.addToCart.click();  
  }
}

