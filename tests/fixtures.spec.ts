import { expect, test } from '../fixtures/ui_fixtures';
import { NewUserBody } from '../models/newUserBody';
import { TestData } from '../env/TestData';

test('testcxzcxz', async ({ pageManager }) => {

  const testdata= new TestData();
  
   await pageManager.getHomePage().loadHomePage();

   await pageManager.getHomePage().enterCookie();

   await pageManager.getHomePage().clickSignupLinkOnMenu();

   await pageManager.getRegisterPage().setNewUser(testdata.newUserBody);
   await pageManager.getRegisterPage().setAccountInfoForm();
  
  expect(pageManager.getRegisterPage().isVisibleAccountCreatedText).toBeTruthy();


});

