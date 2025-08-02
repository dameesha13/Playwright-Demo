# Web UI Automation Framework with Playwright, TypeScript, and BDD

This project contains automated test cases for an https://demoqa.com/ site.

#### **Technology Stack**

 List of technologies used within the project,
* Playwright (Microsoft)
* TypeScript
* Playwright Test Runner
* Page Object Model (POM)
* Cucumber

###### Checkout the branch
      git clone (https://github.com/dameesha13/Playwright-Demo.git)

###### Run the Playwright test using the following command in the terminal:

```
npx playwright test textBoxTest.spec.ts
```
###### Run the BDD tests using the following command in the terminal:

```
npm test
```

Project structure as below.

``` bash
.
├── pages #Page Object classes (POM)
     ├── ToolsQAHomePage.ts
     ├── ToolsQAElementsPage.ts
     ├── ToolsQATextBoxPage.ts
├── tests
     ├── features
          ├── TextBoxForm.feature #.feature files written in Gherkin
     ├── step-definitions
          ├── CommonStepdefs.ts #Glue code mapping Gherkin to test logic
     ├── support
          ├── world.ts #CustomWorld + hooks (BeforeAll, AfterAll, etc.)
     ├── textBoxTest.spec.ts
├── cucumber.cjs #Cucumber configuration
├── package.json #Defines project metadata, scripts, dependencies, and configuration
├── playwright.config.ts #Configure how Playwright runs tests(Browser settings,Headless/headful mode etc)
├── README.md
├── tsconfig.tsnode.json  #TypeScript config for ts-node
...
