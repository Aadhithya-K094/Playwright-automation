const { test, expect } = require("@playwright/test");

//api/getUsrIdByDes?usrTpe=5&usrTpe1=37&dis=&blk=
test.only('api/getUsrIdByDes?usrTpe=5&usrTpe1=37&dis=&blk=', async ({ request }) => {
    const api = await request.get('/emis3APICode/api/getUsrIdByDes?usrTpe=5&usrTpe1=37&dis=&blk=');
    console.log(api.json());
    await expect(api.status()).toBe(200);
});


//api/GetOldPassword?oldPass=test@123
test.only('//api/GetOldPassword?oldPass=test@123', async ({ request }) => {
    const api1 = await request.get('emis3APICode/api/GetOldPassword?oldPass=test@123');
    console.log(api1.json());
    await expect(api1.status()).toBe(200);
});


//api/getUserNotifications
test.only('//api/getUserNotifications', async ({ request }) => {
    const api2 = await request.get('/emis3APICode/api/getUserNotifications');
    console.log(api2.json());
    await expect(api2.status()).toBe(200);
});






//api/DeptBaseManageGet
test("//api/DeptBaseManageGet", async ({ request }) => {
    const apipost = await request.post("/emis3APICode/api/DeptBaseManageGet",
        {
            data: {

                "emis_user_type": "21",
                "emis_user_type1": "3"

            },
            headers: { accept: "application/json" },
        },
    );
    console.log(apipost.json());
    await expect(apipost.status()).toBe(200);
});


//api/postLoginLog
test("//api/postLoginLog", async ({ request }) => {
    const apipost1 = await request.post("/emis3APICode/api/postLoginLog",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(apipost1.json());
    await expect(apipost1.status()).toBe(200);
});


//api/OtpUpdateNewPass
test("//api/OtpUpdateNewPass", async ({ request }) => {
    const apipost3 = await request.post("/emis3APICode/api/OtpUpdateNewPass",
        {
            data: {
                "triggered_by_username": "4028609",
                "otp_purpose_id": 6, 
                "otp": "55555"
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(apipost3.json());
    await expect(apipost3.status()).toBe(200);
});


//api/OtpPasswordReset
test("//api/OtpPasswordReset", async ({ request }) => {
    const apipost4 = await request.post("/emis3APICode/api/OtpPasswordReset",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(apipost4.json());
    await expect(apipost4.status()).toBe(200);
});


//api/UpdateUserPassword
test("api/UpdateUserPassword", async ({ request }) => {
    const apipost5 = await request.post("/emis3APICode/api/UpdateUserPassword",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(apipost5.json());
    await expect(apipost5.status()).toBe(200);
});


//api/OtpPasswordResetSub
test("api/OtpPasswordResetSub", async ({ request }) => {
    const apipost6 = await request.post("/emis3APICode/api/OtpPasswordResetSub",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(apipost6.json());
    await expect(apipost6.status()).toBe(200);
});


//api/emislogout
test("api/emislogout", async ({ request }) => {
    const apipost7 = await request.post("/emis_login/api/emislogout",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(apipost7.json());
    await expect(apipost7.status()).toBe(200);
});


//api/testnewlogin
test("api/testnewlogin", async ({ request }) => {
    const apipost8 = await request.post("/emis_login/api/testnewlogin",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(apipost8.json());
    await expect(apipost8.status()).toBe(200);
});


