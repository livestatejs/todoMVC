Feature: Todolist displayed
  
    As a user
    I would like to see my two item long list on the homepage
    So that I can iteract with them

    Scenario: Displaying the list
    
        Given I am on the homepage
        Then I should see <items.count> items in the list
        
    Scenario: First element's value is correct 
    
        Given I am on the homepage
        Then the 1. list item's value is <items.1.title>
        Then the 2. list item's value is <items.2.title>