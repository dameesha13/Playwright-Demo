import { expect, Page, Locator } from '@playwright/test';

export class AmazonProductPage {
  private page: Page;
  private productTitle: Locator;
  private buyNowBtn: Locator;
  private addToCartBtn: Locator;
  private qtyDropdown: Locator;
  private selectColor: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('#titleSection');
    this.addToCartBtn = page.locator('#add-to-cart-button');
    this.buyNowBtn = page.locator('#buy-now-button');
    this.qtyDropdown = page.locator('select#quantity');
    this.selectColor = page.locator('#color_name_2'); //div[id='centerCol'] li:nth-child(4) span:nth-child(1) span:nth-child(1) span:nth-child(1) input:nth-child(1) 
  }

   async selectCaseColor(color: string) {
    const colorOptions = this.page.locator('#twister .a-button-toggle:visible');
    console.log(`🎯 Selecting specific color: ${colorOptions}`);
    const secondVisibleSwatch = colorOptions.nth(1);
    //await secondVisibleSwatch.scrollIntoViewIfNeeded();
    await secondVisibleSwatch.click();

    //const colorOption = this.page.locator(`[title="${color}"], [aria-label="${color}"]`);
    //console.log(`🎯 Selecting specific color: ${color}`);

    //await expect(colorOption).toBeVisible();
    
    //await this.selectColor.click();
  }

 /* async selectCaseColor(color: string) {
    const colorOption = this.page.locator('#twister .swatchAvailable');
    const colorCount = await colorOption.count();
    expect(colorCount).toBeGreaterThan(1); 
    const secondColor = colorOption.nth(1);
    const colorName =
      (await secondColor.getAttribute('title')) ??
      (await secondColor.getAttribute('aria-label')) ??
      'Unknown';

    console.log(`🎨 Selecting 2nd color: ${colorName}`);
    await secondColor.scrollIntoViewIfNeeded();
    await secondColor.click();
  }*/

  async isProductTitleDisplayed() {
      await this.productTitle.isVisible();
  }

  async clickAddToCartButton() {
    await this.addToCartBtn.click();  
  }

  async clickBuyNowButton() {
    await this.buyNowBtn.click();  
  }

  async selectQtyFromDD(qtyToSelect: string) {
    await this.qtyDropdown.selectOption(qtyToSelect);
  }

  async validateSelectedQuantity(expectedQty: string) {
    const actualQty = await this.qtyDropdown.inputValue();
    expect(actualQty).toBe(expectedQty);
}

   // Dynamic locator for an item in a list by its index
  listItemByIndex(index: number): Locator {
    return this.page.locator(`.list-item:nth-child(${index})`);
  }
}

