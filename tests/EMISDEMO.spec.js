const { test, expect } = require("@playwright/test");

test("login page renders correctly", async ({ page }) => {
  const baseUrl = "https://emis.tnschools.gov.in/auth/login?returnUrl=%2Fdashboard";

  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await page.setViewportSize({ width: 1500, height: 900 });

  await expect(page).toHaveURL(/auth\/login/);
  await expect(page).toHaveTitle(/EMIS/i);

  const usernameInput = page.getByRole("textbox", { name: "User Name" });
  const passwordInput = page.getByRole("textbox", { name: "Password" });
  const loginButton = page.getByRole("button", { name: "Login" });

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await expect(loginButton).toBeVisible();

  await usernameInput.fill("4028609");
  await passwordInput.fill("test@123");
  await loginButton.click();
});
