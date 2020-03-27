package com.adactin.pom;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {
	public static WebDriver driver;

	public static WebDriver browserLaunch(String browserName) {

		try {
			if (browserName.equalsIgnoreCase("chrome")) {

				System.setProperty("webdriver.chrome.driver",
						"C:\\Users\\Tanu\\workspace\\SeleniumConcepts\\Drivers\\chromedriver.exe");
				driver = new ChromeDriver();
			} else if (browserName.equalsIgnoreCase("ie")) {
				System.setProperty("webdriver.ie.driver",
						"C:\\Users\\Tanu\\workspace\\SeleniumConcepts\\Drivers\\IEDriverServer.exe");
				driver = new InternetExplorerDriver();

			} else if (browserName.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver",
						"C:\\Users\\Tanu\\workspace\\SeleniumConcepts\\Drivers\\geckodriver.exe");
				driver = new FirefoxDriver();

			} else {
				System.out.println("Invalid Browser");
			}

			driver.manage().window().maximize();
		}

		catch (Exception e) {
			e.printStackTrace();
		}
		return driver;

	}
  //drop down
	
	public static void drpdwn(WebElement element, String option, String input) {
		Select s = new Select(element);

		if (option.equals("index")) {

			int parseInt = Integer.parseInt(input);

			s.selectByIndex(parseInt);

		} else if (option.equals("value")) {
			s.selectByValue(input);

		} else if (option.equalsIgnoreCase("text")) {
			s.deselectByVisibleText(input);

		}

	}

	// web driver methods
	public static void geturl(String url) {

		try {
			driver.get(url);

		} catch (Exception e) {
			e.printStackTrace();

		}

	}

	public static void get() {

		try {
			driver.getCurrentUrl();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void title() {

		try {
			driver.getTitle();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// navigate methods
	public static void navigateur(String url) {
		try {
			driver.navigate().to(url);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void navigatebck() {
		try {
			driver.navigate().back();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void navigaterefr() {
		try {
			driver.navigate().refresh();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	// alerts
	public static void simplealert() {
		try {
			Alert simplealert = driver.switchTo().alert();
			simplealert.accept();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public static void confirmalert() {
		try {
			Alert confirmalert = driver.switchTo().alert();
			confirmalert.dismiss();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void promptalert() {
		try {
			Alert promptalert = driver.switchTo().alert();
			promptalert.sendKeys("Welcome to positivity");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void actions(WebElement element) {
		Actions ac = new Actions(driver);

		ac.moveToElement(element).build().perform();
	}

//robot class
	public static void rbt() {
try {
	Robot r = new Robot();
	r.keyPress(KeyEvent.VK_DOWN);
	r.keyRelease(KeyEvent.VK_DOWN);
	Thread.sleep(5000);
	
	r.keyPress(KeyEvent.VK_ENTER);
	r.keyRelease(KeyEvent.VK_ENTER);
} catch (AWTException e) {
	e.printStackTrace();
} catch (InterruptedException e) {
	e.printStackTrace();
}

}
	
//multiple check box
public static void mulchkbox(List<WebElement>elements, String value, String values) {
	for (WebElement element : elements) {
		if (element.getAttribute(value).equals(values)||element.getAttribute(value).equals(values)) {
			
			}
	}
		
	}
//drop down

public static void drpdwn(WebElement element, String value,int values) {
	//WebElement day = driver.findElement(By.id("day"));
	Select d = new Select(element);
	d.selectByIndex(values);
	
   // WebElement month = driver.findElement(By.id("month"));
    Select m = new Select(element);
	m.selectByValue(value);
	
	//WebElement year = driver.findElement(By.id("year"));
	Select y = new Select(element);
	y.selectByVisibleText(value);

}
	{
}
 public static void windowshandling() {
	 try {
		driver.getWindowHandles();
	} catch (Exception e) {
		e.printStackTrace();
	}
	 

}
public static void implicitwait(int i) {
	try {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	} catch (Exception e) {
		e.printStackTrace();
	}
	
}

public static void explicitwait(long seconds, WebElement element) {
	try {
		WebDriverWait wait = new WebDriverWait(driver, seconds);
		wait.until(ExpectedConditions.visibilityOf(element));
	} catch (Exception e) {
		e.printStackTrace();
	}

}

public static void click(WebElement element) {
try {
	element.click();
} catch (Exception e) {
	e.printStackTrace();
}


}

public static void getAttribute1(WebElement element, String value) {
	try {
		element.getAttribute(value);
	} catch (Exception e) {
		e.printStackTrace();
	}

}
public static void isEnabled1(WebElement element) {
	try {
		element.isEnabled();
	} catch (Exception e) {
		e.printStackTrace();
	}
	
	}
public static void isdisplayed(WebElement element) {
	try {
		element.isDisplayed();
	} catch (Exception e) {
		e.printStackTrace();
	}

}
public static void isSelected(WebElement element) {
	try {
		element.isSelected();
	} catch (Exception e) {
		e.printStackTrace();
	}

	}

public static void isMultiple(WebElement elements) {
	try {
		isMultiple(elements);
	} catch (Exception e) {
		e.printStackTrace();
	}
	
}
public static void typehere(WebElement element, String value) {
	try {
		element.sendKeys(value);
	} catch (Exception e) {
		e.printStackTrace();
	}

}
	public static void draganddrop(WebElement drag , WebElement drop) {
		try {
			Actions actions = new Actions(driver);
			actions.dragAndDrop(drag, drop);
		} catch (Exception e) {
			e.printStackTrace();
		}

		
	
	}
	
	public static void takescreenshot(String filename) throws IOException 
	{

		try {
			TakesScreenshot ts = (TakesScreenshot)driver;
			File srcfile = ts.getScreenshotAs(OutputType.FILE);
			File desfile = new File("C:\\Users\\Tanu\\workspace\\SeleniumPracticce\\screenshot" + filename + ".png");
			FileUtils.copyFile(srcfile, desfile);
		} catch (WebDriverException e) {
			e.printStackTrace();
		}
			
	}
public static void close1() {
	try {
		driver.close();
	} catch (Exception e) {
		e.printStackTrace();
	}
}	
public static void quit() {
 try {
	driver.quit();
} catch (Exception e) {
	e.printStackTrace();
}
}
public static void upanddown(WebElement Element) {
	try {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoview();", Element);
	} catch (Exception e) {
		e.printStackTrace();
	}
}
public static void defcont() {
try {
	driver.switchTo().defaultContent();
} catch (Exception e) {
	e.printStackTrace();
}
}

}





























