import {Page} from "@playwright/test"

export class Login{
    readonly page: Page;

    constructor(p : Page){
        this.page = p;
    }
    
    //Définir les locators de la page login
    elements={
        AnnonceButton: ()=> this.page.getByRole("button",{name:"Ajouter une annonce"}),
        cercle2: ()=> this.page.locator("#step-circle-2"),
        titreAnnonce: ()=> this.page.getByRole("textbox", {name:"Titre *"}),
        descriptionAnnonce: ()=> this.page.getByRole("textbox", {name:"Description *"}),
        typeDEmbar: ()=> this.page.getByTestId('chip-type-embarcation-jet-ski'),
        categorie: ()=> this.page.getByTestId('chip-categorie-catamaran'),
        nbrPlaces: ()=> this.page.getByTestId('input-nombre-places'),
        anneeConstruction: ()=> this.page.getByTestId('input-annee-construction')
    }

    async clickAnnonceBtn(){
        await this.elements.AnnonceButton().click()
    }
    async saisirTitre(t:string){
        await this.elements.titreAnnonce().fill(t)
    }
    async saisirDesc(d:string){
        await this.elements.descriptionAnnonce().fill(d)
    }
    async typeDEmbarcation(){
        await this.elements.typeDEmbar().click()
    }
    async categorie(){
        await this.elements.categorie().click()
    }
    async saisirNbrPlaces() {
        const nbr = Math.floor(Math.random() * 10) + 1
        await this.elements.nbrPlaces().fill(String(nbr))
    }
    async saisirAnneeConstruction() {
        const annee = Math.floor(Math.random() * (2026 - 1990 + 1)) + 1990;
        await this.elements.anneeConstruction().fill(String(annee))
    }
    async cliquer() {
        const annee = Math.floor(Math.random() * (2026 - 1990 + 1)) + 1990;
        await this.elements.anneeConstruction().fill(String(annee))
    }


}    