package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;

public class Re_Runner {
	public static WebDriver driver;
	
	
	  @BeforeClass 
	  public static void setup() throws IOException { 
		  String browsername=FileReaderManager.getInstance().getCrInstance().getBrowserName(); 
	      driver=BaseClass.browserLaunch(browsername); 
	      }
	  
	  @AfterClass 
	  public static void tearDown() {  
		  driver.close(); 
		  }
	  
	  }


