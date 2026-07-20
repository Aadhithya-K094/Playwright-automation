import{test,expect} from "@playwright/test";
import{loginPage} from "../pages/Login";
import { loginData} from "../testData/POMData";

test("test",async({page})=>{

    const login =new loginPage(page)

    await login.gotoLoginPage();

     await login.login(loginData.username,loginData.password);


})