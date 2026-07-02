const { test, expect } = require("@playwright/test");


//api/getUsrIdByDes?usrTpe=5&usrTpe1=37&dis=&blk=
test('api/getUsrIdByDes?usrTpe=5&usrTpe1=37&dis=&blk=', async ({ request }) => {
    const response = await request.get('https://webapistage.tnsed.com/api/tnemis/getUsrIdByDes?usrTpe=5&usrTpe1=37&dis=&blk=1');
    console.log(await response.json());
    await expect(response.status()).toBe(200);
});


//api/GetOldPassword?oldPass=test@123
test('//api/GetOldPassword?oldPass=test@123', async ({ request }) => {
    const response1 = await request.get('https://webapistage.tnsed.com/api/tnemis/GetOldPassword?oldPass=test@123');
    console.log(await response1.json());
    await expect(response1.status()).toBe(200);
});


//api/getUserNotifications
test('//api/getUserNotifications', async ({ request }) => {
    const response2 = await request.get('https://webapistage.tnsed.com/api/tnemis/getUserNotifications');
    console.log(await response2.json());
    await expect(response2.status()).toBe(200);
});






//api/DeptBaseManageGet
test("//api/DeptBaseManageGet", async ({ request }) => {
    const responsepost = await request.post("https://webapistage.tnsed.com/api/tnemis/DeptBaseManageGet",
        {
            data: {

                "emis_user_type": "21",
                "emis_user_type1": "3"

            },
            headers: { accept: "application/json" },
        },
    );
    console.log(await responsepost.json());
    await expect(responsepost.status()).toBe(200);
});


//api/postLoginLog
test("//api/postLoginLog", async ({ request }) => {
    const responsepost1 = await request.post("https://webapistage.tnsed.com/api/tnemis/postLoginLog",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(await responsepost1.json());
    await expect(responsepost1.status()).toBe(200);
});


//api/OtpUpdateNewPass
test("//api/OtpUpdateNewPass", async ({ request }) => {
    const responsepost3 = await request.post("https://webapistage.tnsed.com/api/tnemis/OtpUpdateNewPass",
        {
            data: {
                "triggered_by_username": "4028609",
                "otp_purpose_id": 6,
                "otp": "55555"
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(await responsepost3.json());
    await expect(responsepost3.status()).toBe(200);
});


//api/OtpPasswordReset
test("//api/OtpPasswordReset", async ({ request }) => {
    const responsepost4 = await request.post("https://webapistage.tnsed.com/api/tnemis/OtpPasswordReset",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(await responsepost4.json());
    await expect(responsepost4.status()).toBe(200);
});


//api/UpdateUserPassword
test("api/UpdateUserPassword", async ({ request }) => {
    const responsepost5 = await request.post("https://webapistage.tnsed.com/api/tnemis/UpdateUserPassword",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(await responsepost5.json());
    await expect(responsepost5.status()).toBe(200);
});


//api/OtpPasswordResetSub
test("api/OtpPasswordResetSub", async ({ request }) => {
    const responsepost6 = await request.post("https://webapistage.tnsed.com/api/tnemis/OtpPasswordResetSub",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(await responsepost6.json());
    await expect(responsepost6.status()).toBe(200);
});


//api/emislogout
test("api/emislogout", async ({ request }) => {
    const responsepost7 = await request.post("https://webapistage.tnsed.com/api/tnemis/emislogout",
        {
            data: {
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(await responsepost7.json());
    await expect(responsepost7.status()).toBe(200);
});


//api/testnewlogin
test("api/testnewlogin", async ({ request }) => {
    const responsepost8 = await request.post("https://webapistage.tnsed.com/api/tnemis/testnewlogin",
        {
            data: {
                "emis_username": "4028617",
                "emis_password" : "test@123"
            },
            headers: { accept: "application/json" },
        },
    );
    console.log(await responsepost8.json());
    await expect(responsepost8.status()).toBe(200);
});


