Feature: Text Box form submission on ToolsQA

  Scenario: Fill and submit the text box form
     Given I open the text box page
     When I enter valid user details
     Then I should see the submitted name and email