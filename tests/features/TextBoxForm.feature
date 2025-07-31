Feature: Text Box form submission on ToolsQA

  Scenario: Fill and submit the text box form
     Given I go to url "https://demoqa.com/"
     When I select "Elements" from the category cards
     And I select "Text Box" from the element group
     And I enter valid user details "John Doe", "john.doe@example.com", "123 Main St", "456 Elm St" and click submit button
     Then I should see the submitted name "John Doe" and email "john.doe@example.com"
