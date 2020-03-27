package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SigninAdactin {
	public static WebDriver driver;
	
	@FindBy(id = "username")
	private WebElement usrname;
	
	@FindBy(id = "password")
	private WebElement passwrd;
	
	@FindBy(id = "login")
	private WebElement lgn;

	public SigninAdactin(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver2, this);
	}

	public WebElement getUsrname() {
		return usrname;
	}

	public WebElement getPasswrd() {
		return passwrd;
	}

	public WebElement getLgn() {
		return lgn;
	}
	
	
	
	

}
