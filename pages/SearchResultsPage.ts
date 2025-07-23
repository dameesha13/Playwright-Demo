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
    this.selectItem = page.locator('[data-component-type="s-search-result"]').nth(1);
    this.addToCart = page.locator('#a-autoid-2-announce');
  }


  async isTitleDisplayed() {
      await this.titleOfResultsPage.isVisible();
  }

  async selectItemFromList() {
    //const secondProduct = page.locator('[data-component-type="s-search-result"]').nth(1); // 0 = first, 1 = second
     //const productLink = this.selectItem.locator('h2 a');
     //await this.selectItem.click();
     // Find the product by partial title
      const productLink = this.page.locator('a:has-text("OtterBox COMMUTER SERIES Case for iPhone 14 Pro")').first();

  // Click on the product
       await productLink.click();
  }

  async clickAddToCartButton() {
    await this.addToCart.click();  
  }
}

