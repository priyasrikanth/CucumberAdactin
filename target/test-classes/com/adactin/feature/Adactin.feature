Feature: Testing login functionality on adactin application


@RegressionTest
Scenario: User is checking the login functionality
Given the user signs in to the Adactin page using valid credentials
When user enters the valid username "TanishkaSri" in the username field
And user enters the valid password "Tanu@1618" in the password field
And user clicks on the login button
Then user is logged in

Scenario: User Checking the Search hotel functionality
Given user is logged in and is in search hotelpage
When user select the location in the location field
And user select the hotel in the Hotels field
And user selects the room type in the room type field
And user selects the number of rooms in the number of rooms field
And user selects the number of adults per room in the adults per room field
And user selects the number of children per room in the children per room field
And user clicks on the search button
Then user confirms the search hotel page

Scenario: User checking the Select Hotel functionality
Given user navigates to the select hotel page
When user clicks on the select hotel radio button
And user clicks on the select hotel button
Then user confirms the select hotel page

Scenario: User checking the Book Hotel functionality
Given user navigates to the Book hotel Page
When user enters the first name "Priya" in the first name field
And user enters the last name "Srikanth" in the last name field
And user enters the billing address "Old Perungalathur" in the billing address field
And user enters the credit card number "7894561237894561" in the credit card number field
And user selects the credit card type in the Credit card type field
And user selects the expiry date and year in the expiry date and expiry year field
And user enters the cvv number "545" in the cvv field
And user clicks on the book now field
Then user confirms the Book hotel page

















