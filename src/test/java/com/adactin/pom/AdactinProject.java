package com.adactin.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class AdactinProject extends BaseClass {
	public static WebDriver driver;

	public static void main(String[] args) throws InterruptedException {
		driver = browserLaunch("chrome");
		geturl("https://adactin.com/HotelApp/index.php");
		driver.manage().window().maximize();
		implicitwait(30);

		WebElement usrname = driver.findElement(By.id("username"));
		typehere(usrname, "TanishkaSri");
		Thread.sleep(2000);

		WebElement passwrd = driver.findElement(By.id("password"));
		typehere(passwrd, "Tanu@1618");
		Thread.sleep(2000);

		WebElement lgn = driver.findElement(By.id("login"));
		lgn.click();
		Thread.sleep(2000);

		WebElement location = driver.findElement(By.xpath("//*[@id=\"location\"]/option[2]"));
		location.click();
		Thread.sleep(2000);

		WebElement hotel = driver.findElement(By.id("hotels"));
		hotel.sendKeys("Hotel Sunshine");
		Thread.sleep(2000);

		WebElement roomtype = driver.findElement(By.id("room_type"));
		roomtype.sendKeys("Super Deluxe");
		Thread.sleep(2000);

		WebElement roomnum = driver.findElement(By.xpath("//*[@id=\"room_nos\"]"));
		roomnum.click();
		Thread.sleep(2000);

		WebElement adult = driver.findElement(By.id("adult_room"));
		adult.sendKeys("4");
		Thread.sleep(2000);

		WebElement child = driver.findElement(By.id("child_room"));
		child.sendKeys("2 - Two");
		Thread.sleep(2000);

		WebElement search = driver.findElement(By.id("Submit"));
		search.click();
		Thread.sleep(2000);

		WebElement radiobutton = driver.findElement(By.id("radiobutton_0"));
		radiobutton.click();
		Thread.sleep(2000);

		WebElement cntinue = driver.findElement(By.id("continue"));
		cntinue.click();
		Thread.sleep(2000);

		WebElement namefirst = driver.findElement(By.id("first_name"));
		namefirst.sendKeys("Priya");
		Thread.sleep(2000);

		WebElement namelast = driver.findElement(By.id("last_name"));
		namelast.sendKeys("Srikanth");
		Thread.sleep(2000);

		WebElement adres = driver.findElement(By.id("address"));
		adres.sendKeys("Old Perungalathur");
		Thread.sleep(2000);

		WebElement creditcard = driver.findElement(By.id("cc_num"));
		creditcard.sendKeys("7639273461819112");
		Thread.sleep(2000);

		WebElement crcrdtype = driver.findElement(By.id("cc_type"));
		crcrdtype.sendKeys("VISA");
		Thread.sleep(2000);

		WebElement expdate = driver.findElement(By.id("cc_exp_month"));
		Select ed = new Select(expdate);
		ed.selectByValue("8");
		Thread.sleep(2000);

		WebElement expyr = driver.findElement(By.id("cc_exp_year"));
		Select ey = new Select(expyr);
		ey.selectByVisibleText("2020");
		Thread.sleep(2000);

		WebElement cvv = driver.findElement(By.id("cc_cvv"));
		cvv.sendKeys("111");
		Thread.sleep(2000);

		WebElement book = driver.findElement(By.id("book_now"));
		book.click();
		Thread.sleep(2000);

		WebElement logout = driver.findElement(By.xpath("/html/body/table[2]/tbody/tr[1]/td[2]/a[4]"));
		logout.click();

	}

}
