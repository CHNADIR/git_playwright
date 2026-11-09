import { test, expect } from "@playwright/test"
import { Login } from "../page/Login"
import { HomePage } from "../page/HomePage"

let lp : Login
let hp : HomePage

test.beforeEach("setup", async({page})=>{
    await page.goto("https://app.thrundrz.com/login")
    lp = new Login(page)
    hp = new HomePage(page)
})

test("Login",async({page})=>{
    await hp.clickSignUp()
    await expect(page).toHaveURL("https://app.thrundrz.com/login")
    await lp.saisirEmail("zn@gmail.com")
    await lp.saisirMdp("123456789")
    await lp.clickButton()
    await expect(page).toHaveURL("https://app.thrundrz.com/EspaceClient/explorer")
})
