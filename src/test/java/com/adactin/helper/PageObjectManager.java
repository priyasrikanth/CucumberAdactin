package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.BookHotel;
import com.adactin.pom.SearchHotel;
import com.adactin.pom.SelectHotel;
import com.adactin.pom.SigninAdactin;

public class PageObjectManager {
	public static WebDriver driver;
	
	public static SigninAdactin sa;
	public static SearchHotel sh;
	public static SelectHotel st;
	public static BookHotel bh;
	
	public PageObjectManager(WebDriver driver) {
		this.driver = driver;
	}

	public static SigninAdactin getSa() {
		sa = new SigninAdactin(driver);
		return sa;
	}
	public static SearchHotel getSh() {
		sh = new SearchHotel(driver);
		return sh;
	}
	public static SelectHotel getSt() {
		st = new SelectHotel(driver);
		return st;
	}
	public static BookHotel getBh() {
		bh = new BookHotel(driver);
		return bh;
	}
		

	}

	
	
	
	
	
	
	

