import { test, expect } from "@playwright/test"
import { Login } from "../page/Login"
import { HomePage } from "../page/HomePage"
import { Annonce } from "../page/Annonce"


let lp: Login
let hp: HomePage
let ap: Annonce

test.beforeEach("setup", async ({ page }) => {
    lp = new Login(page)
    hp = new HomePage(page)
    ap = new Annonce(page)
    await page.goto("https://app.thrundrz.com/")
    await hp.clickSignUp()
    await expect(page).toHaveURL("https://app.thrundrz.com/login")
    await lp.saisirEmail("zn@gmail.com")
    await lp.saisirMdp("123456789")
    await lp.clickButton()
})

test("ajoutAnnonce", async ({ page }) => {
    await expect(page).toHaveURL("https://app.thrundrz.com/EspaceClient/explorer")
    //ajouter une annonce
    await ap.AnnonceButton()
    //verifier l'url annonce/new
    await expect(page).toHaveURL("https://app.thrundrz.com/EspaceClient/annonces/new")
    //verifier l'etape 1 est bleu
    expect(await ap.getCouleurCercle(1)).toBe("rgb(21, 101, 192)");
    //ajouter une image
    await ap.ajouterImage("image/maquette-chromium-win32.png");
    //cliquer sur suivant
    await ap.clickSuivantButton()

})
