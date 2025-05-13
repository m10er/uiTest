import { expect, test } from '../fixtures/ui_fixtures';
import { NewUserBody } from '../models/newUserBody';
import { TestData } from '../env/TestData';
import { LoginBody } from '../models/loginBody';

test('Login Valid Test', async ({ pageManager }) => {
    pageManager.getHomePage().loadHomePage();
    pageManager.getHomePage().enterCookie();
    pageManager.getHomePage().clickSignupLinkOnMenu();

    const user = new TestData();
    pageManager.getRegisterPage().setLoginForm(user.validLoginBody);
    
await expect(pageManager.getHomePage().logoutLink).toContainText('Logout');

});