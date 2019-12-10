package stepDefinitions;

import org.testng.Assert;

import core.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.TekSchoolScenariosPageObject;
import utilities.Utility;

public class TekSchoolScenariosStepDefinitions extends Base {
	
	TekSchoolScenariosPageObject tekSchoolScenariosPageObject = new TekSchoolScenariosPageObject();
	
	@When("^User click on myAccount menu on top of the page$")
	public void user_click_on_myAccount_menu_on_top_of_the_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Utility.screenshot(driver);
		tekSchoolScenariosPageObject.clickOnMyAccount();
		tekSchoolScenariosPageObject.clickOnLogin();
		
	}

	// replace 'username' and 'password' with (.+)
	@And("^User enter username '(.+)' and password '(.+)' in returning menu$")
	public void user_enter_username_username_and_password_password_in_returning_menu(String userName, String passWord) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		tekSchoolScenariosPageObject.enterEmailAddress(userName);
		tekSchoolScenariosPageObject.enterPassword(passWord);
	}

	@And("^User click on login button$")
	public void user_click_on_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Utility.screenshot(driver);
		tekSchoolScenariosPageObject.clickOnLoginButton();
	   
	}

	@Then("^User should be logined in$")
	public void user_should_be_logined_in() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    Assert.assertEquals(true, tekSchoolScenariosPageObject.verifyLoginToMyAccount());
	    Utility.screenshot(driver);
	    
	    
	}

}
