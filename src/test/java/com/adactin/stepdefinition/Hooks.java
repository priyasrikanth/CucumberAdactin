package com.adactin.stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
@Before("@RegressionTest")
	public void beforeScenario() {

		System.out.println("Before :=========Regression Test");

	}
@After("@RegressionTest")
	public void afterScenario() {

		System.out.println("After :========Regression Test");

	}
}
