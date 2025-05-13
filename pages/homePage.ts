import { BaseHelper } from './baseHelper';
import { Locator, Page } from '@playwright/test';

export class HomePage extends BaseHelper{

    readonly page:Page;
    readonly signupLink:Locator;
    readonly logoutLink:Locator;

    constructor(page:Page){
        super(page);
        this.page=page;
        this.signupLink= this.page.getByRole('link', { name: ' Signup / Login' });
        this.logoutLink= this.page.locator('#header');
    }

        async clickSignupLinkOnMenu():Promise<void>{
        await this.signupLink.click();
    }



}