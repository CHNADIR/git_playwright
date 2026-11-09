import { expect, test } from "@playwright/test";
import { HomePage } from "../page/HomePage";

let pr:HomePage

test.beforeEach("setup", async ({page})=>{
    await page.goto("https://app.thrundrz.com/")
    pr = new HomePage(page)
})

test("Login pom valide", {tag:"@pom"}, async ({page})=>{
    // await lp.setUserName("standard_user")
    // await lp.setPassword("secret_sauce")
    // await lp.clickButton()
    await pr.loginToApp("standard_user", "secret_sauce")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})
