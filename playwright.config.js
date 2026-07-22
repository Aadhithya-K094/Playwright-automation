// @ts-check
 
import { defineConfig, devices } from "@playwright/test";
 
export default defineConfig({
 
  // Test Folder
  testDir: "./tests",
 
  // Global Setup
  globalSetup: "./global-setup.js",
 
  // Run tests in parallel
  fullyParallel: true,
 
  // Fail build if test.only exists
  forbidOnly: !!process.env.CI,
 
  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,
 
  // Number of workers
  workers: process.env.CI ? 1 : undefined,
 
  // HTML Report
  reporter: "html",
 
  use: {
 
    // Browser Mode
    headless: false,
 
    // // Base URL
    // baseURL: "https://dgeapp-stage.tndge.org",
 
    // Screenshot on failure
    screenshot: "only-on-failure",
 
    // Video on failure
    video: "retain-on-failure",
 
    // Trace on failure
    trace: "retain-on-failure",
 
    // Ignore HTTPS Errors
    ignoreHTTPSErrors: true,
 
    // Action Timeout
    actionTimeout: 30000,
 
    // Navigation Timeout
    navigationTimeout: 30000,
 
    // Viewport
    viewport: {
      width: 1366,
      height: 768,
    },
 
  },
 
  // Browser Configuration
  projects: [
 
    // Chrome
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
 
    // Firefox
    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },
 
    // WebKit
    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"],
    //   },
    // },
 
  ],
 
});
 