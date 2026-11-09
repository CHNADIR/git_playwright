import { Page } from "@playwright/test"

export class Annonce {
    readonly page: Page;

    constructor(p: Page) {
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
        anneeConstruction: ()=> this.page.getByTestId('input-annee-construction'),
        AnnonceButton: () => this.page.getByRole("button", { name: "Ajouter une annonce" }),
        clickSuivantButton: () => this.page.getByRole("button", { name: "Suivant →" }),
        inputfile: () => this.page.getByTestId('photo-input-0')
    }
    async AnnonceButton() {
        await this.elements.AnnonceButton().click()
    }
    async clickSuivantButton() {
        await this.elements.clickSuivantButton().click()
    }
    async getCouleurCercle(numero: number): Promise<string> {
        return await this.page
            .locator(`#step-circle-${numero}`)
            .evaluate((el) => window.getComputedStyle(el).backgroundColor);
    }

    async ajouterImage(c: string) {


        await this.elements.inputfile().setInputFiles(c)
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