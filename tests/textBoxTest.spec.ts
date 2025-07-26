import { test, expect } from '@playwright/test';
import { ToolsQAHomePage } from '../pages/ToolsQAHomePage';
import { ToolsQAElementsPage } from '../pages/ToolsQAElementsPage';
import { ToolsQATextBoxPage } from '../pages/ToolsQATextBoxPage';

test('Verify Textbox form submission and read output text', async ({ page }) => {
  const toolsQAHomePage = new ToolsQAHomePage(page);
  const toolsQAElementsPage = new ToolsQAElementsPage(page);
  const toolsQATextBoxPage = new ToolsQATextBoxPage(page);

  await toolsQAHomePage.homePage();
  await toolsQAElementsPage.clickElementMenu('Text Box');
  await toolsQATextBoxPage.textBoxPageFunction('test','test@gmail.com','Colombo', 'Colombo');
  await page.waitForTimeout(2000);
  const output = await toolsQATextBoxPage.getOutputText();
  expect(output.name).toContain('test');
  expect(output.email).toContain('test@gmail.com');
  expect(output.currentAddress).toContain('Colombo');
  expect(output.permanentAddress).toContain('Colombo');
  page.close();

});

test('Verify Invalid email field validation', async ({ page }) => {
  const toolsQAHomePage = new ToolsQAHomePage(page);
  const toolsQAElementsPage = new ToolsQAElementsPage(page);
  const toolsQATextBoxPage = new ToolsQATextBoxPage(page);

  await toolsQAHomePage.homePage();
  await toolsQAElementsPage.clickElementMenu('Text Box');
  await toolsQATextBoxPage.textBoxPageFunction('test','test-invalid','Colombo', 'Colombo');
  await page.waitForTimeout(2000);
  const hasEmailError = await toolsQATextBoxPage.isEmailValidationErrorVisible();
  expect(hasEmailError).toBe(true);
  page.close();

});

test('Verify Submit button when fields are empty', async ({ page }) => {
  const toolsQAHomePage = new ToolsQAHomePage(page);
  const toolsQAElementsPage = new ToolsQAElementsPage(page);
  const toolsQATextBoxPage = new ToolsQATextBoxPage(page);

  await toolsQAHomePage.homePage();
  await toolsQAElementsPage.clickElementMenu('Text Box');
  await toolsQATextBoxPage.textBoxPageFunction('','','','');
  await page.waitForTimeout(2000);
  const isOutputVisible = await toolsQATextBoxPage.isOutputVisible();
  expect(isOutputVisible).toBe(false);
  page.close();

});
