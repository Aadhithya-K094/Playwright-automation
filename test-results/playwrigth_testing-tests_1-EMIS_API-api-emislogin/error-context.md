# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwrigth_testing\tests_1\EMIS_API.spec.js >> api/emislogin
- Location: playwrigth_testing\tests_1\EMIS_API.spec.js:11:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | 
  3  | // //get
  4  | // test("login api", async ({ request }) => {
  5  | //   const api = await request.get("");
  6  | //   console.log(api.json());
  7  | //   await expect(api.status()).toBe(200);
  8  | // });
  9  | 
  10 | //api/emislogin-post
  11 | test("api/emislogin", async ({ request }) => {
  12 |   const apipost = await request.post(
  13 |     "https://tng2c2.tnschools.gov.in/emis_login/api/emislogin",
  14 |     {
  15 |       data: {
  16 |         "emis_username": "4028609",
  17 |         "emis_password": "test@123",
  18 |       },
  19 |       headers: { accept: "application/json" },
  20 |     },
  21 |   );
  22 |   console.log(apipost.json());
> 23 |   await expect(apipost.status()).toBe(200);
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  24 | });
  25 | 
```