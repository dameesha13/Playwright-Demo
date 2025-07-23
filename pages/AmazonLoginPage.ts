import { Page, Locator } from '@playwright/test';

export class AmazonLoginPage {
  private page: Page;
  private signInLink: Locator;
  private emailInput: Locator;
  private continueButton: Locator;
  private passwordInput: Locator;
  private signInSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.emailInput = page.locator('#ap_email_login');
    this.continueButton = page.locator('#continue');
    this.passwordInput = page.locator('#ap_password');
    this.signInSubmitButton = page.locator('#signInSubmit');
  }

  async navigateToHomePage() {
    await this.page.goto('https://www.amazon.com');
  }

  async hoverSignInLink() {
    await this.page.hover('#nav-link-accountList');
  }

  async clickSignInLink() {
    await this.page.click('text=Sign in');

    //await this.signInLink.first().click(); // Use .first() if multiple elements found
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
    await this.continueButton.click();
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
    await this.signInSubmitButton.click();
  }

  async login(email: string, password: string) {
    await this.navigateToHomePage();
    await this.hoverSignInLink();
    await this.clickSignInLink();
    await this.enterEmail(email);
    await this.enterPassword(password);
  }
}

