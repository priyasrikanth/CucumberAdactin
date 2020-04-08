package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.runner.ReRunner;
import com.adactin.runner.Runner;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class StepDefinition extends BaseClass{
	
	public static WebDriver driver = Runner.driver;
	 
	  PageObjectManager p1 = new PageObjectManager(driver);
	  
	
	@Given("^the user signs in to the Adactin page using valid credentials$")
	public void the_user_signs_in_to_the_Adactin_page_using_valid_credentials() throws Throwable {
		String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		geturl(url); 
		Thread.sleep(5000); 
		}
	

	@When("^user enters the valid username \"([^\"]*)\" in the username field$")
	public void user_enters_the_valid_username_in_the_username_field(String arg1) throws Throwable {
		typehere(p1.getSa().getUsrname(), arg1); 
	}

	@When("^user enters the valid password \"([^\"]*)\" in the password field$")
	public void user_enters_the_valid_password_in_the_password_field(String arg1) throws Throwable {
		typehere(p1.getSa().getPasswrd(), arg1); 
	}

	@When("^user clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		p1.getSa().getLgn().click();
	}

	@Then("^user is logged in$")
	public void user_is_logged_in() throws Throwable {
		System.out.println("login is successfull"); 
	    
	}

	@Given("^user is logged in and is in search hotelpage$")
	public void user_is_logged_in_and_is_in_search_hotelpage() throws Throwable {
		System.out.println("User is in the search hotel page");

	}

	@When("^user select the location in the location field$")
	public void user_select_the_location_in_the_location_field() throws Throwable {
		drpdwn(p1.getSh().getLocation(), "value", "Sydney");
	}

	@When("^user select the hotel in the Hotels field$")
	public void user_select_the_hotel_in_the_Hotels_field() throws Throwable {
		drpdwn(p1.getSh().getHotel(),"value", "Hotel Creek");
	}

	@When("^user selects the room type in the room type field$")
	public void user_selects_the_room_type_in_the_room_type_field() throws Throwable {
		drpdwn(p1.getSh().getRoomtype(), "value", "Double");
	}

	@When("^user selects the number of rooms in the number of rooms field$")
	public void user_selects_the_number_of_rooms_in_the_number_of_rooms_field() throws Throwable {
		drpdwn(p1.getSh().getRoomnum(), "value", "5");
	}

	@When("^user selects the number of adults per room in the adults per room field$")
	public void user_selects_the_number_of_adults_per_room_in_the_adults_per_room_field() throws Throwable {
		drpdwn(p1.getSh().getAdult(), "value", "3");
	}

	@When("^user selects the number of children per room in the children per room field$")
	public void user_selects_the_number_of_children_per_room_in_the_children_per_room_field() throws Throwable {
		drpdwn(p1.getSh().getChild(), "value", "2");
	}

	@When("^user clicks on the search button$")
	public void user_clicks_on_the_search_button() throws Throwable {
		p1.getSh().getSearch().click();
	}

	@Then("^user confirms the search hotel page$")
	public void user_confirms_the_search_hotel_page() throws Throwable {
		System.out.println("The user confirms the search hotel");
	}

	@Given("^user navigates to the select hotel page$")
	public void user_navigates_to_the_select_hotel_page() throws Throwable {
		System.out.println("The user is in the Select hotel page");
	}

	@When("^user clicks on the select hotel radio button$")
	public void user_clicks_on_the_select_hotel_radio_button() throws Throwable {
		p1.getSt().getRadiobutton().click();
	}

	@When("^user clicks on the select hotel button$")
	public void user_clicks_on_the_select_hotel_button() throws Throwable {
		p1.getSt().getCntinue().click();
	}

	@Then("^user confirms the select hotel page$")
	public void user_confirms_the_select_hotel_page() throws Throwable {
		System.out.println("User confirms the selection of the hotel");
	}

	@Given("^user navigates to the Book hotel Page$")
	public void user_navigates_to_the_Book_hotel_Page() throws Throwable {
		System.out.println("User is in the Hotel booking page");
	}

	@When("^user enters the first name \"([^\"]*)\" in the first name field$")
	public void user_enters_the_first_name_in_the_first_name_field(String arg1) throws Throwable {
		typehere(p1.getBh().getNamefirst(), arg1);
	}

	@When("^user enters the last name \"([^\"]*)\" in the last name field$")
	public void user_enters_the_last_name_in_the_last_name_field(String arg1) throws Throwable {
		typehere(p1.getBh().getNamelast(), arg1);
	}

	@When("^user enters the billing address \"([^\"]*)\" in the billing address field$")
	public void user_enters_the_billing_address_in_the_billing_address_field(String arg1) throws Throwable {
		typehere(p1.getBh().getAdres(), arg1);
	}

	@When("^user enters the credit card number \"([^\"]*)\" in the credit card number field$")
	public void user_enters_the_credit_card_number_in_the_credit_card_number_field(String arg1) throws Throwable {
		typehere(p1.getBh().getCreditcard(), arg1);	}

	@When("^user selects the credit card type in the Credit card type field$")
	public void user_selects_the_credit_card_type_in_the_Credit_card_type_field() throws Throwable {
		drpdwn(p1.getBh().getCrcrdtype(), "value", "VISA");
		
	}

	@When("^user selects the expiry date and year in the expiry date and expiry year field$")
	public void user_selects_the_expiry_date_and_year_in_the_expiry_date_and_expiry_year_field() throws Throwable {
		drpdwn(p1.getBh().getExpdate(), "value", "6");
		drpdwn(p1.getBh().getExpyr(), "value", "2022");
	}

	@When("^user enters the cvv number \"([^\"]*)\" in the cvv field$")
	public void user_enters_the_cvv_number_in_the_cvv_field(String arg1) throws Throwable {
		typehere(p1.getBh().getCvv(), "545");
	}

	@When("^user clicks on the book now field$")
	public void user_clicks_on_the_book_now_field() throws Throwable {
		p1.getBh().getBook().click();
	}

	@Then("^user confirms the Book hotel page$")
	public void user_confirms_the_Book_hotel_page() throws Throwable {
		p1.getBh().getBook().click();
		Assert.assertEquals("", " ");
		
		
	}



}