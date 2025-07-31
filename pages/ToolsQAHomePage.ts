import { Page, Locator } from '@playwright/test';

export class ToolsQAHomePage {
  private page: Page;
  private joinNowButton: Locator;
  private cardElement: Locator;
  private cardForms: Locator;
  private cardAlerts: Locator;
  private cardWidgets: Locator;
  private cardInteractions: Locator;
  private cardBookStore: Locator;

  constructor(page: Page) {
    this.page = page;
    this.joinNowButton = page.locator(`#img[alt='Selenium Online Training']`);
    this.cardElement = page.locator('text=Elements');
    this.cardForms = page.locator('text=Forms');
    this.cardAlerts = page.locator('text=Alerts, Frame & Windows');
    this.cardWidgets = page.locator('text=Widgets');
    this.cardInteractions = page.locator('text=Interactions');
    this.cardBookStore = page.locator('text=Book Store Application');
  }

  async navigateToHomePage(url: string) {
    await this.page.goto(url);
  }

  async clickJoinNow() {
    await this.joinNowButton.click();
  }

  async clickCategoryCard(label: string) {
    await this.page.click(`.card:has-text("${label}")`);
  }

  async clickElementCard() {
    await this.cardElement.click();
  }

  async clickFormsCard() {
    await this.cardForms.click();
  }

  async clickAlertsCard() {
    await this.cardAlerts.click();
  }

  async clickWidgetsCard() {
    await this.cardWidgets.click();
  }

  async clickInteractionsCard() {
    await this.cardInteractions.click();
  }

  async clickBookStoreCard() {
    await this.cardBookStore.click();
  }

  async navigateHomePageAndClickElement(url: string,cardName: string) {
    await this.navigateToHomePage(url);
    await this.clickCategoryCard(cardName);
  }  
}

