import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page : Page;

    constructor(p: Page){
        this.page = p;
    }

    // definir le locator de la page login
    elements = {
        signUpButton: ()=>this.page.getByRole("link", {name:"Se connecter"})
    }

    async clickSignUp(){
        await this.elements.signUpButton().click()
    }

}