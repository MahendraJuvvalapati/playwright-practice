import { Locator, Page } from "@playwright/test";

export class LoginPage{

    readonly page :Page;
    readonly userNameInput :Locator;
    readonly passwordInput :Locator;
    readonly loginBtn :Locator;
    readonly dashboardHeading :Locator;
    readonly invalidCredentials :Locator;
    readonly url :string;

    constructor(page :Page)
    {
        this.page =page;
        this.passwordInput =page.getByPlaceholder('password');
        this.userNameInput =page.getByPlaceholder('username');
        this.loginBtn =page.getByRole('button',{name :'Login'});
        this.dashboardHeading =page.getByRole('heading',{name :'Dashboard'});
        this.invalidCredentials =page.getByText('Invalid credentials');
        this.url ='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';


    }

    async navigateTourl(){
        await this.page.goto(this.url);
    }
    async enterUserName(name:string) {
        await this.userNameInput.fill(name);
        
    }
    async enterPasword(pass:string) {
        await this.passwordInput.fill(pass);
        
    }
     async clickLogin() {
        await this.loginBtn.click();
        
    }

    async loginToApplication(userName :string,password :string)
    {
        await this.enterUserName(userName);
        await this.enterPasword(password);
        await this.clickLogin();
    }


}