import{faker} from '@faker-js/faker';

export class TestEnviroment {

    validEmail:string;
    validPassword:string;
    fullName:string;
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string;
    adress:string;

    constructor(){
        this.validEmail= "ugur.yamaan@gmail.com";
        this.validPassword="Test12345";
        this.fullName=faker.person.fullName();
        this.firstName=faker.person.firstName();
        this.lastName=faker.person.lastName();
    }


}