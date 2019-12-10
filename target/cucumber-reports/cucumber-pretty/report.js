$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Tek School Scenarios",
  "description": "",
  "id": "tek-school-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "SDET2019AUG_SDET_003_Execution with multiple user and password",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution-with-multiple-user-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SDET_003_SO"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter username \u0027\u003cusername\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027 in returning menu",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be logined in",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution-with-multiple-user-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution-with-multiple-user-and-password;;1"
    },
    {
      "cells": [
        "teststudent@gmail.com",
        "Tek@Test.com"
      ],
      "line": 26,
      "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution-with-multiple-user-and-password;;2"
    },
    {
      "cells": [
        "tekschool001@gmail.com",
        "testtest"
      ],
      "line": 27,
      "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution-with-multiple-user-and-password;;3"
    },
    {
      "cells": [
        "testdata@gmail.com",
        "testdata"
      ],
      "line": 28,
      "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution-with-multiple-user-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11968465500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 7838071800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 2200736400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 13232600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "SDET2019AUG_SDET_003_Execution with multiple user and password",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution-with-multiple-user-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SDET_003_SO"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter username \u0027teststudent@gmail.com\u0027 and password \u0027Tek@Test.com\u0027 in returning menu",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be logined in",
  "keyword": "Then "
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_myAccount_menu_on_top_of_the_page()"
});
formatter.result({
  "duration": 2660713600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teststudent@gmail.com",
      "offset": 21
    },
    {
      "val": "Tek@Test.com",
      "offset": 58
    }
  ],
  "location": "TekSchoolScenariosStepDefinitions.user_enter_username_username_and_password_password_in_returning_menu(String,String)"
});
formatter.result({
  "duration": 777452700,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 1280674500,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_be_logined_in()"
});
formatter.result({
  "duration": 611621000,
  "status": "passed"
});
formatter.after({
  "duration": 5007312900,
  "status": "passed"
});
formatter.before({
  "duration": 9769787100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 6588632600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 1865550100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 21813900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "SDET2019AUG_SDET_003_Execution with multiple user and password",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution-with-multiple-user-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SDET_003_SO"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter username \u0027tekschool001@gmail.com\u0027 and password \u0027testtest\u0027 in returning menu",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be logined in",
  "keyword": "Then "
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_myAccount_menu_on_top_of_the_page()"
});
formatter.result({
  "duration": 2280251400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tekschool001@gmail.com",
      "offset": 21
    },
    {
      "val": "testtest",
      "offset": 59
    }
  ],
  "location": "TekSchoolScenariosStepDefinitions.user_enter_username_username_and_password_password_in_returning_menu(String,String)"
});
formatter.result({
  "duration": 887948600,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 1281634200,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_be_logined_in()"
});
formatter.result({
  "duration": 536874000,
  "status": "passed"
});
formatter.after({
  "duration": 1112660800,
  "status": "passed"
});
formatter.before({
  "duration": 9891937300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 6919997400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 1475038100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 24270800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "SDET2019AUG_SDET_003_Execution with multiple user and password",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution-with-multiple-user-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SDET_003_SO"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter username \u0027testdata@gmail.com\u0027 and password \u0027testdata\u0027 in returning menu",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be logined in",
  "keyword": "Then "
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_myAccount_menu_on_top_of_the_page()"
});
formatter.result({
  "duration": 2254723400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata@gmail.com",
      "offset": 21
    },
    {
      "val": "testdata",
      "offset": 55
    }
  ],
  "location": "TekSchoolScenariosStepDefinitions.user_enter_username_username_and_password_password_in_returning_menu(String,String)"
});
formatter.result({
  "duration": 1230531800,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 1246284500,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_be_logined_in()"
});
formatter.result({
  "duration": 510408100,
  "status": "passed"
});
formatter.after({
  "duration": 1247742600,
  "status": "passed"
});
});