import {Page} from "@playwright/test"

export class creationCompte{
    readonly page: Page;

    constructor(p : Page){
        this.page = p;
    }
    
    //Définir les locators de la page login
    elements={
        NomComplet: ()=> this.page.getByRole("textbox",{name:"Votre nom complet"}),
        Email: ()=> this.page.getByRole("textbox",{name:"votre@email.com"}),
        MotDePasse: ()=> this.page.getByRole("textbox",{name:"********"}),
        ConfirmationMdp: ()=> this.page.getByRole("textbox",{name:"********"}),
        CreerCompteButton: ()=> this.page.getByRole("button",{name:"Créer un compte"})
    }

    //Définir les méthodes associer aux allocators
    async saisirNom(user:string){
        await this.elements.NomComplet().fill(user)
    }

    async saisirEmail(email:string){
        await this.elements.Email().fill(email)
    }

    async saisirMdp(motDePasse:string){
        await this.elements.MotDePasse().fill(motDePasse)
    }

     async saisirMdp2(motDePasse:string){
        await this.elements.ConfirmationMdp().fill(motDePasse)
    }

    async clickButton(){
        await this.elements.CreerCompteButton().click()
    }

}    