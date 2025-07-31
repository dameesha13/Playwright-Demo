import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
//import { chromium, Browser, Page } from 'playwright';
import { CustomWorld } from '../support/world';

//let browser: Browser;
//let page: Page;
setDefaultTimeout(10 * 1000); // 10 seconds

Given('I go to url {string}',async function (this: CustomWorld, url: string){
    await this.init(); // <-- Initialize browser and pages here
	  await this.homePage.navigateToHomePage(url);
});

When('I select {string} from the category cards', async function (this: CustomWorld, label: string) {
  await this.homePage.clickCategoryCard(label);
});

When('I select {string} from the element group', async function (this: CustomWorld, elementName: string) {
  await this.elementPage.clickElementMenu(elementName);
});

When('I enter valid user details {string}, {string}, {string}, {string} and click submit button', async function (this: CustomWorld, name: string, email: string, currentAddr: string, permanentAddr: string) {
  await this.textBoxPage.textBoxPageFunction(name,email,currentAddr,permanentAddr);
});

Then('I should see the submitted name {string} and email {string}', async function(name: string, email: string) {
  const nameText = await this.page.textContent('#name');
  const emailText = await this.page.textContent('#email');
  if (!nameText?.includes(name) || !emailText?.includes(email)) {
    throw new Error(`Expected name "${name}" and email "${email}" in submission results, but got "${nameText}" and "${emailText}"`);
  }
});