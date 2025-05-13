import { NewUserBody } from '../models/newUserBody';
import { TestEnviroment } from './testEnv';
import { LoginBody } from '../models/loginBody';


export class TestData {
    public newUserBody:NewUserBody;
    public validLoginBody:LoginBody;

    constructor(){
        const env = new TestEnviroment();
        this.newUserBody = new NewUserBody(env.fullName, env.email);
        this.validLoginBody = new LoginBody(env.validEmail,env.validPassword);
    }
}