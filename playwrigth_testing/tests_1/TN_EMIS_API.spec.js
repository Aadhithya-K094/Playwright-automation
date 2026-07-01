const { test, expect } = require("@playwright/test");

// //get
// test('login api', async ({ request }) => {
//     const api = await request.get('');
//     console.log(api.json());
//     await expect(api.status()).toBe(200);
// });

//api/emislogin-post
test("api/emislogin", async ({ request }) => {
  const apipost = await request.post(
    "https://tng2c2.tnschools.gov.in/emis_login/api/emislogin",
    {
      data: {
        "emis_username": "4028609",
        "emis_password": "test@123",
      },
      headers: { accept: "application/json" },
    },
  );
  console.log(apipost.json());
  await expect(apipost.status()).toBe(200);
});
