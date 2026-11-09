import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page : Page;

    constructor(p: Page){
        this.page = p;
    }

    // definir le locator de la page login
    elements = {
        signUpButton: ()=>this.page.getByRole("paragraph").nth(0)
    }

    
    async addBtn(){
        await this.elements.signUpButton().click()
    }

}