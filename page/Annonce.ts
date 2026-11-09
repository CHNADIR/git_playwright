import {Page} from "@playwright/test"

export class Login{
    readonly page: Page;

    constructor(p : Page){
        this.page = p;
    }
    
    //Définir les locators de la page login
    elements={
        AnnonceButton: ()=> this.page.getByRole("button",{name:"Nouvelle annonce"})
    }

}    