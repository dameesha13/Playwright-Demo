import { Page, Locator } from '@playwright/test';

export class HomePage {
  private page: Page;
  private searchTxt: Locator;
  private searchBtn: Locator;
  private selectSearch: Locator;
  private passwordInput: Locator;
  private signInSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTxt = page.locator('#twotabsearchtextbox');
    this.searchBtn = page.locator('#nav-search-submit-button');
    this.selectSearch = page.locator('#sac-suggestion-row-1-cell-1');
  }

  async enterSearchText(searchText: string) {
    await this.searchTxt.fill(searchText);
  }

  async clickSearchButton() {
    await this.searchBtn.click();  
  }

  async selectSearchResult() {
    await this.selectSearch.click();  
  }
}

