import { Page } from '@playwright/test';


export class BaseHelper{

    protected readonly page:Page;

    constructor(page:Page){
        this.page=page;
    }

    async loadHomePage():Promise<void>{
        await this.page.goto('https://automationexercise.com/');
    }

    async enterCookie():Promise<void>{
        await this.page.getByRole('button', { name: 'Consent' }).click();
    }




}