import { test, expect } from "@playwright/test"
import { Login } from "../page/Login"
import { HomePage } from "../page/HomePage"
import { Annonce } from "../page/Annonce"


let lp : Login
let hp : HomePage
let ap : Annonce

test.beforeEach("setup", async({page})=>{
    await page.goto("/login$/")
    lp = new Login(page)
    hp = new HomePage(page)
    ap = new Annonce(page)
    await hp.clickSignUp()
    await expect(page).toHaveURL("/login$/")
    await lp.saisirEmail("zn@gmail.com")
    await lp.saisirMdp("123456789")
    await lp.clickButton()
})

test("Login",async({page})=>{
    await expect(page).toHaveURL("/\/EspaceClient\/explorer$/")
    //ajouter une annonce
    await ap.AnnonceButton()
    //verifier l'url annonce/new
    await expect(page).toHaveURL("/\/EspaceClient\/annonces\/new$/")
    //verifier l'etape 1 est bleu
    expect(await ap.getCouleurCercle(1)).toBe("rgb(21, 101, 192)");
    //ajouter une image
    await expect(page).toHaveScreenshot('maquette.png');
    //cliquer sur suivant
    await ap.clickSuivantButton()
    
})
