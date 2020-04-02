package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@ExtendedCucumberOptions(retryCount = 4, jsonReport = "REPORT/jsonReport.json")
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature", glue = "com\\adactin\\stepdefinition", 
plugin = {"com.cucumber.listener.ExtentCucumberFormatter:Report\\extentsReport.html"
		//,"rerun:Report/rerun.txt"
		}, 

monochrome = true, 
dryRun = false, 
strict = true)

public class ReRunner {
	public static WebDriver driver;

	@BeforeClass
	public static void setup() throws IOException {
		String browsername = FileReaderManager.getInstance().getCrInstance().getBrowserName();
		driver = BaseClass.browserLaunch(browsername);
	}

	@AfterClass
	public static void tearDown() {
		driver.close();
	}

}
