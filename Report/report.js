$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing login functionality on adactin application",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 295400,
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
  "duration": 68601192400,
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
  "duration": 103406900,
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
  "duration": 35213800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 23064000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#login\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027ACER\u0027, ip: \u0027192.168.43.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Tanu\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56000}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2d0207cad1e384cc392646224aa51f11\n*** Element info: {Using\u003did, value\u003dlogin}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_clicks_on_the_login_button(StepDefinition.java:39)\r\n\tat ✽.And user clicks on the login button(Adactin.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_is_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1270100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Checking the Search hotel functionality",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-search-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is logged in and is in search hotelpage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user select the location in the location field",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user select the hotel in the Hotels field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user selects the room type in the room type field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user selects the number of rooms in the number of rooms field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user selects the number of adults per room in the adults per room field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user selects the number of children per room in the children per room field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user confirms the search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_logged_in_and_is_in_search_hotelpage()"
});
formatter.result({
  "duration": 142400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_the_location_in_the_location_field()"
});
formatter.result({
  "duration": 36667900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#location\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027ACER\u0027, ip: \u0027192.168.43.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Tanu\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56000}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2d0207cad1e384cc392646224aa51f11\n*** Element info: {Using\u003did, value\u003dlocation}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.adactin.baseclass.BaseClass.drpdwn(BaseClass.java:65)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_select_the_location_in_the_location_field(StepDefinition.java:56)\r\n\tat ✽.When user select the location in the location field(Adactin.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_select_the_hotel_in_the_Hotels_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_room_type_in_the_room_type_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_number_of_rooms_in_the_number_of_rooms_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_number_of_adults_per_room_in_the_adults_per_room_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_number_of_children_per_room_in_the_children_per_room_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_confirms_the_search_hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "User checking the Select Hotel functionality",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-select-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user navigates to the select hotel page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user clicks on the select hotel radio button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on the select hotel button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user confirms the select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_the_select_hotel_page()"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_select_hotel_radio_button()"
});
formatter.result({
  "duration": 24993400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#radiobutton_0\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027ACER\u0027, ip: \u0027192.168.43.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Tanu\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56000}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2d0207cad1e384cc392646224aa51f11\n*** Element info: {Using\u003did, value\u003dradiobutton_0}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_clicks_on_the_select_hotel_radio_button(StepDefinition.java:101)\r\n\tat ✽.When user clicks on the select hotel radio button(Adactin.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_select_hotel_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_confirms_the_select_hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "User checking the Book Hotel functionality",
  "description": "",
  "id": "testing-login-functionality-on-adactin-application;user-checking-the-book-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "user navigates to the Book hotel Page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enters the first name \"Priya\" in the first name field",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enters the last name \"Srikanth\" in the last name field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enters the billing address \"Old Perungalathur\" in the billing address field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enters the credit card number \"7894561237894561\" in the credit card number field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user selects the credit card type in the Credit card type field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user selects the expiry date and year in the expiry date and expiry year field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user enters the cvv number \"545\" in the cvv field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user clicks on the book now field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user confirms the Book hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_the_Book_hotel_Page()"
});
formatter.result({
  "duration": 82200,
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
  "duration": 51544500,
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
  "duration": 41046800,
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
  "duration": 30241400,
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
  "duration": 24250600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_credit_card_type_in_the_Credit_card_type_field()"
});
formatter.result({
  "duration": 21399900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#cc_type\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027ACER\u0027, ip: \u0027192.168.43.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Tanu\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56000}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2d0207cad1e384cc392646224aa51f11\n*** Element info: {Using\u003did, value\u003dcc_type}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.adactin.baseclass.BaseClass.drpdwn(BaseClass.java:65)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_selects_the_credit_card_type_in_the_Credit_card_type_field(StepDefinition.java:140)\r\n\tat ✽.And user selects the credit card type in the Credit card type field(Adactin.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_expiry_date_and_year_in_the_expiry_date_and_expiry_year_field()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_book_now_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_confirms_the_Book_hotel_page()"
});
formatter.result({
  "status": "skipped"
});
});