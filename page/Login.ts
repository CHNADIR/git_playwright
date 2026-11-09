import {Page} from "@playwright/test"

export class Login{
    readonly page: Page;

    constructor(p : Page){
        this.page = p;
    }
    
    //Définir les locators de la page login
    elements={
        Email: ()=> this.page.getByRole("textbox",{name:"Email"}),
        MotDePasse: ()=> this.page.getByRole("textbox",{name:"Mot de passe"}),
        CreerCompteButton: ()=> this.page.getByRole("button",{name:"Se Connecter"}),
        AlertMessage: ()=> this.page.getByRole("alert"),
        SouviensDeMoi: ()=> this.page.getByRole("checkbox",{name:"Souviens-toi de moi"}),
    }

    async saisirEmail(email:string){
        await this.elements.Email().fill(email)
    }

    async saisirMdp(motDePasse:string){
        await this.elements.MotDePasse().fill(motDePasse)
    }

    async AlertMessage(){
        return this.elements.AlertMessage()
    }

    async SouviensDeMoi(){
        await this.elements.SouviensDeMoi().check()
    }

    async clickButton(){
        await this.elements.CreerCompteButton().click()
    }

    async clickSuivantButton(){
        await this.elements.CreerCompteButton().click()
    }

}    