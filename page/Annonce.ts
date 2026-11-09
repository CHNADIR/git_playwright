import {Page} from "@playwright/test"

export class Annonce{
    readonly page: Page;

    constructor(p : Page){
        this.page = p;
    }
    
    //Définir les locators de la page login
    elements={
        AnnonceButton: ()=> this.page.getByRole("button",{name:"Ajouter une annonce"}),
        clickSuivantButton: ()=> this.page.getByRole("button",{name:"Suivant →"}),
    }
    async AnnonceButton(){
        await this.elements.AnnonceButton().click()
    }
    async clickSuivantButton(){
        await this.elements.clickSuivantButton().click()
    }
    async getCouleurCercle(numero: number): Promise<string> {
    return await this.page
      .locator(`#step-circle-${numero}`)
      .evaluate((el) => window.getComputedStyle(el).backgroundColor);
    }
    
}    