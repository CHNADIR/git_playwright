import { test, expect } from "@playwright/test"
import { Login } from "../page/Login"
import { HomePage } from "../page/HomePage"

let lp : Login
let hp : HomePage

test.beforeEach("setup", async({page})=>{
    await page.goto("https://app.thrundrz.com/login")
    lp = new Login(page)
    hp = new HomePage(page)
    await hp.clickSignUp()
    await expect(page).toHaveURL("https://app.thrundrz.com/login")
    await lp.saisirEmail("zn@gmail.com")
    await lp.saisirMdp("123456789")
    await lp.clickButton()
})

test("Login",async({page})=>{

    await expect(page).toHaveURL("https://app.thrundrz.com/EspaceClient/explorer")
    //ajouter une annonce
    //verifier l'url annonce/new
    //verifier l'etape 1 est bleu
    //ajouter une image
    //cliquer sur suivant
    //l'etape 2 en bleu
    
    //remplir les champs : titre, description 
    //select type d'embarc et categorie
    //nbr place [1, 10] et année de construction [1990, 2026]
    //cliquer sur le btn suivant
})
