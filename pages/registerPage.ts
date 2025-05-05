import { BaseHelper } from './baseHelper';
import { Page } from '@playwright/test';


export class RegisterPage extends BaseHelper{

    readonly page:Page;

    constructor(page:Page){
        super(page);
        this.page=page;
    }

    async setNewUser():Promise<void>{
        await this.page.getByRole('textbox', { name: 'Name' }).click();
        await this.page.getByRole('textbox', { name: 'Name' }).fill('Deneme');
        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('de343wdsa2neme@deneme.com');
        await this.page.getByRole('button', { name: 'Signup' }).click();
    }

    async setAccountInfoForm():Promise<void>{
        await this.page.getByRole('radio', { name: 'Mr.' }).check();
  await this.page.getByRole('textbox', { name: 'Name *', exact: true }).click();
  await this.page.getByRole('textbox', { name: 'Password *' }).click();
  await this.page.getByRole('textbox', { name: 'Password *' }).fill('Deneme1');
  await this.page.locator('#days').selectOption('18');
  await this.page.locator('#months').selectOption('7');
  await this.page.locator('#years').selectOption('2007');
  await this.page.getByRole('textbox', { name: 'First name *' }).click();
  await this.page.getByRole('textbox', { name: 'First name *' }).fill('Deneme');
  await this.page.getByRole('textbox', { name: 'Last name *' }).click();
  await this.page.getByRole('textbox', { name: 'Last name *' }).fill('Deneme');
  await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Deneme adres');
  await this.page.getByRole('textbox', { name: 'Address 2' }).click();
  await this.page.getByLabel('Country *').selectOption('United States');
  await this.page.getByRole('textbox', { name: 'State *' }).click();
  await this.page.getByRole('textbox', { name: 'State *' }).fill('miami');
  await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
  await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('miami');
  await this.page.locator('#zipcode').click();
  await this.page.locator('#zipcode').fill('231312');
  await this.page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill('23132131231');
  await this.page.getByRole('button', { name: 'Create Account' }).click();
    }

    async isVisibleAccountCreatedText():Promise<boolean>{
        return await this.page.locator('#form').isVisible();
    }

}