package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookHotel {
	public static WebDriver driver;

	@FindBy(id = "first_name")
	private WebElement namefirst;
	
	@FindBy(id = "last_name")
	private WebElement namelast;
	
	@FindBy(id = "address")
	private WebElement adres;
	
	@FindBy(id = "cc_num")
	private WebElement creditcard;
	
	@FindBy(id = "cc_type")
	private WebElement crcrdtype;
	
	@FindBy(id = "cc_exp_month")
	private WebElement expdate;
	
	@FindBy(id = "cc_exp_year")
	private WebElement expyr;
	
	@FindBy(id = "cc_cvv")
	private WebElement cvv;
	
	@FindBy(id = "book_now")
	private WebElement book;
	
	@FindBy(id = "logout")
	private WebElement logout;

	public BookHotel(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver2, this);
	}

	

	public WebElement getNamefirst() {
		return namefirst;
	}

	public WebElement getNamelast() {
		return namelast;
	}

	public WebElement getAdres() {
		return adres;
	}

	public WebElement getCreditcard() {
		return creditcard;
	}

	public WebElement getCrcrdtype() {
		return crcrdtype;
	}

	public WebElement getExpdate() {
		return expdate;
	}

	public WebElement getExpyr() {
		return expyr;
	}

	public WebElement getCvv() {
		return cvv;
	}

	public WebElement getBook() {
		return book;
	}

	public WebElement getLogout() {
		return logout;
	}
	
	

}
