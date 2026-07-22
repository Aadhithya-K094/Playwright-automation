import { defineConfig, devices } from "@playwright/test";

export default defineConfig({

    testDir: "./tests",

    testIgnore: "**/LoginExcel.spec.js",

    fullyParallel: false,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: "html",

    globalSetup: "./global-setup.js",

    use: {

        headless: false,

        trace: "on",

        screenshot: "on",

        video: "on",

        // Uncomment if global setup saves the login session
        // storageState: "playwright/.auth/user.json"

    },

    projects: [
        {
            name: "Mobile Chrome",
            use: {
                ...devices["Pixel 5"],
            },
        },

        // {
        //     name: "chromium",
        //     use: { ...devices["Desktop Chrome"] },
        // },

        // {
        //     name: "firefox",
        //     use: { ...devices["Desktop Firefox"] },
        // },

        // {
        //     name: "webkit",
        //     use: { ...devices["Desktop Safari"] },
        // }
    ]

});