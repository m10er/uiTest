import { test, expect } from '@playwright/test';
import { BaseHelper } from '../pages/baseHelper';
import { HomePage } from '../pages/homePage';
import { RegisterPage } from '../pages/registerPage';
import { PageManager } from '../pages/pageManager';

test('test', async ({ page }) => {
  

  const baseHelper = new BaseHelper(page);

   baseHelper.loadHomePage();

  baseHelper.enterCookie();

  const homePage = new HomePage(page);
  homePage.clickSignupLinkOnMenu();

  const registerPage = new RegisterPage(page);

  registerPage.setNewUser();
  registerPage.setAccountInfoForm();
  
  expect(registerPage.isVisibleAccountCreatedText).toBeTruthy();

});

test('test', async ({ page }) => {
  

  const pageManager = new PageManager(page);


   pageManager.getHomePage().loadHomePage();

   pageManager.getHomePage().enterCookie();

   pageManager.getHomePage().clickSignupLinkOnMenu();

   pageManager.getRegisterPage().setNewUser();
   pageManager.getRegisterPage().setAccountInfoForm();
  
  expect(pageManager.getRegisterPage().isVisibleAccountCreatedText).toBeTruthy();

});


