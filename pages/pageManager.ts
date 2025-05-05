import { HomePage } from './homePage';
import { LoginPage } from './loginPage';
import { RegisterPage } from './registerPage';
import { Page } from '@playwright/test';


export class PageManager{

    readonly page:Page;
    readonly homePage:HomePage;
    readonly loginPage:LoginPage;
    readonly registerPage:RegisterPage;

    constructor(page:Page){
        this.page=page;
        this.homePage= new HomePage(page);
        this.loginPage= new LoginPage(page);
        this.registerPage = new RegisterPage(page);
    }


    getHomePage():HomePage{
        return this.homePage;
    }

    getLoginPage():LoginPage{
        return this.loginPage;
    }
    getRegisterPage():RegisterPage{
        return this.registerPage;
    }




}