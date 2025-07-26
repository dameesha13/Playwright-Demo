import { Page, Locator } from '@playwright/test';

export class ToolsQAElementsPage {
  private page: Page;
  //private listElementsOptions: Locator;
  //private leftPannel: Locator;

  constructor(page: Page) {
    this.page = page;
    //this.listElementsOptions = page.locator('##item-(${index})');
    //this.leftPannel = page.locator('.menu-list:has-text("Elements")');
  }

  async clickLeftPannelMenu(menu: string) {
    await this.page.getByText(menu).click();
  }

  async clickElementMenu(item: string) {
    await this.page.getByText(item).click();
  }
}

