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

###### Run the following command in the terminal

```
npx playwright test textBoxTest.spec.ts
```

Project structure as below.

``` bash
.
├── pages
     ├── ToolsQAHomePage.ts
     ├── ToolsQAElementsPage.ts
     ├── ToolsQATextBoxPage.ts
├── tests
     ├── features
     ├── step-definitions
     ├── support
          ├── world.ts
          ├── hooks.ts
     ├── textBoxTest.spec.ts
├── playwright.config.ts
├── cucumber.cjs
├── tsconfig.tsnode.json
├── package.json
├── README.md   
...
