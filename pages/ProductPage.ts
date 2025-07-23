import { expect, Page, Locator } from '@playwright/test';

export class ProductPage {
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
    this.selectColor = page.locator('li[title="Green"]'); //('#color_name_2');
    
  }

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

  async selectCaseColor(colorToSelect: string) {
    //const colorToSelect = 'Blue'; // Or dynamically set value
    // Find the swatch by alt text (color name)
    const colorSwatch = this.page.locator(`img[alt="${colorToSelect}"]`);  
  }
  

}

