import { setWorldConstructor, World, IWorldOptions,Before, BeforeAll, After, AfterAll } from '@cucumber/cucumber';
import { Browser, Page, chromium, BrowserContext } from 'playwright';
import { ToolsQATextBoxPage } from '../../pages/ToolsQATextBoxPage.ts';
import { ToolsQAHomePage } from '../../pages/ToolsQAHomePage.ts';
import { ToolsQAElementsPage } from '../../pages/ToolsQAElementsPage.ts';

export class CustomWorld extends World {
  static browser: Browser; // Shared single browser across all scenarios
  context!: BrowserContext; // New context per scenario for isolation
  page!: Page; // New page inside the context per scenario
  // Page objects
  textBoxPage!: ToolsQATextBoxPage; 
  homePage!: ToolsQAHomePage;
  elementPage!: ToolsQAElementsPage;

  constructor(options: IWorldOptions) {
    super(options);
    console.log('✅ CustomWorld created');
  }

  //called before each scenario.
  async init() {
    this.context = await CustomWorld.browser.newContext();
    this.page = await this.context.newPage();
    this.textBoxPage = new ToolsQATextBoxPage(this.page);
    this.homePage = new ToolsQAHomePage(this.page);
    this.elementPage = new ToolsQAElementsPage(this.page);
    
  }
  //closes the browser context 
   async closeContext() {
    if (this.context) {
      await this.context.close();
    }
  }
}

setWorldConstructor(CustomWorld); //every scenario gets an instance of CustomWorld

//Launch the browser once before any tests run
BeforeAll(async () => {
  CustomWorld.browser = await chromium.launch({ headless: false });
  console.log('Browser launched before all scenarios');
});
//For each scenario, open a new browser context and page
Before(async function () {
  await this.init();
});
//After each scenario, close that scenario’s browser context.
After(async function () {
  await this.closeContext();
});
//Close the browser once all scenarios are done.
AfterAll(async () => {
  await CustomWorld.browser.close();
  console.log('Browser closed after all scenarios');
});