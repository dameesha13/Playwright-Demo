import { Page, Locator } from '@playwright/test';

export class ToolsQATextBoxPage {
  private page: Page;
  private txtFullName: Locator;
  private txtEmail: Locator;
  private txtCurrentAddress: Locator;
  private txtPermanentAddress: Locator;
  private btnSubmit: Locator;
  private outputName: Locator;
  private outputEmail: Locator;
  private outputCurrentAddress: Locator;
  private outputPermanentAddress: Locator;
  private emailFieldError: Locator;
  private outputSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtFullName = page.locator('#userName');
    this.txtEmail = page.locator('#userEmail');
    this.txtCurrentAddress = page.locator('textarea#currentAddress');
    this.txtPermanentAddress = page.locator('textarea#permanentAddress');
    this.btnSubmit = page.locator('#submit');
    this.outputName = page.locator('#name');
    this.outputEmail = page.locator('#email');
    this.outputCurrentAddress = page.locator('p#currentAddress');
    this.outputPermanentAddress = page.locator('p#permanentAddress');
    this.emailFieldError = page.locator('#userEmail.field-error');
    this.outputSection = page.locator('#output');
  }

  async enterFullName(name: string) {
    await this.txtFullName.fill(name) 
  }

  async enterEmail(email: string) {
    await this.txtEmail.fill(email) 
  }

  async enterCurrentAddress(currentAdd: string) {
    await this.txtCurrentAddress.fill(currentAdd) 
  }

  async enterPermanentAddress(permanentAdd: string) {
    await this.txtPermanentAddress.fill(permanentAdd) 
  }

  async clickSubmit() {
    await this.btnSubmit.click();  
  }

 async getOutputText() {
    return {
      name: await this.outputName.textContent(),
      email: await this.outputEmail.textContent(),
      currentAddress: await this.outputCurrentAddress.textContent(),
      permanentAddress: await this.outputPermanentAddress.textContent(),
    };
  }

  //for all field empty
  async isOutputVisible(): Promise<boolean> {
    return await this.outputSection.isVisible();
  }
   
  async isEmailValidationErrorVisible(): Promise<boolean> {
    return await this.emailFieldError.isVisible();
  }

  async textBoxPageFunction(name: string, email: string,currentAddr: string,permanentAddr: string) {
    await this.enterFullName(name);
    await this.enterEmail(email);
    await this.enterCurrentAddress(currentAddr);
    await this.enterPermanentAddress(permanentAddr);
    await this.clickSubmit();
  }
}

