$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing login functionality on adactin application",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19844100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User is checking the login functionality",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-is-checking-the-login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user signs in to the Adactin page using valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters the valid username \"TanishkaSri\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters the valid password \"Tanu@1618\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_signs_in_to_the_Adactin_page_using_valid_credentials()"
});
formatter.result({
  "duration": 9618435200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TanishkaSri",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 240581600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tanu@1618",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 145844700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1579182500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_logged_in()"
});
formatter.result({
  "duration": 127900,
  "status": "passed"
});
formatter.after({
  "duration": 87300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User Checking the Search hotel functionality",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-search-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user is logged in and is in search hotelpage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user select the location in the location field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user select the hotel in the Hotels field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user selects the room type in the room type field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user selects the number of rooms in the number of rooms field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user selects the number of adults per room in the adults per room field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user selects the number of children per room in the children per room field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user confirms the search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_logged_in_and_is_in_search_hotelpage()"
});
formatter.result({
  "duration": 134900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_the_location_in_the_location_field()"
});
formatter.result({
  "duration": 332484200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_the_hotel_in_the_Hotels_field()"
});
formatter.result({
  "duration": 195845100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_room_type_in_the_room_type_field()"
});
formatter.result({
  "duration": 242315700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_number_of_rooms_in_the_number_of_rooms_field()"
});
formatter.result({
  "duration": 186430900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_number_of_adults_per_room_in_the_adults_per_room_field()"
});
formatter.result({
  "duration": 182470300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_number_of_children_per_room_in_the_children_per_room_field()"
});
formatter.result({
  "duration": 179757300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_search_button()"
});
formatter.result({
  "duration": 1992460000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirms_the_search_hotel_page()"
});
formatter.result({
  "duration": 83200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User checking the Select Hotel functionality",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-select-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user navigates to the select hotel page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on the select hotel radio button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user clicks on the select hotel button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user confirms the select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_the_select_hotel_page()"
});
formatter.result({
  "duration": 96300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_select_hotel_radio_button()"
});
formatter.result({
  "duration": 127635400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_select_hotel_button()"
});
formatter.result({
  "duration": 1181364000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirms_the_select_hotel_page()"
});
formatter.result({
  "duration": 94500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User checking the Book Hotel functionality",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-book-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "user navigates to the Book hotel Page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user enters the first name \"Priya\" in the first name field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user enters the last name \"Srikanth\" in the last name field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user enters the billing address \"Old Perungalathur\" in the billing address field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enters the credit card number \"7894561237894561\" in the credit card number field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user selects the credit card type in the Credit card type field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user selects the expiry date and year in the expiry date and expiry year field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enters the cvv number \"545\" in the cvv field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user clicks on the book now field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user confirms the Book hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_the_Book_hotel_Page()"
});
formatter.result({
  "duration": 148200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Priya",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_enters_the_first_name_in_the_first_name_field(String)"
});
formatter.result({
  "duration": 217464100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Srikanth",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enters_the_last_name_in_the_last_name_field(String)"
});
formatter.result({
  "duration": 150476400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Old Perungalathur",
      "offset": 33
    }
  ],
  "location": "StepDefinition.user_enters_the_billing_address_in_the_billing_address_field(String)"
});
formatter.result({
  "duration": 195728400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7894561237894561",
      "offset": 36
    }
  ],
  "location": "StepDefinition.user_enters_the_credit_card_number_in_the_credit_card_number_field(String)"
});
formatter.result({
  "duration": 215986200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_credit_card_type_in_the_Credit_card_type_field()"
});
formatter.result({
  "duration": 181677700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_expiry_date_and_year_in_the_expiry_date_and_expiry_year_field()"
});
formatter.result({
  "duration": 385439800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "545",
      "offset": 28
    }
  ],
  "location": "StepDefinition.user_enters_the_cvv_number_in_the_cvv_field(String)"
});
formatter.result({
  "duration": 126325100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_book_now_field()"
});
formatter.result({
  "duration": 117400300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_confirms_the_Book_hotel_page()"
});
formatter.result({
  "duration": 76205000,
  "status": "passed"
});
});