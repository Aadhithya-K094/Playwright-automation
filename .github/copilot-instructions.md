# Copilot Instructions for this Repository

This repository is a Playwright test suite for a web application.

## Key details
- Tests use JavaScript and `@playwright/test`.
- Test files are in `tests/`.
- Page object classes are in `pages/`.
- Configuration is in `playwright.config.js`.

## How to run
- `npm install`
- `npx playwright test`
- `npx playwright test tests/EMISDEMO.spec.js`
- `npx playwright test --project=chromium`

## Conventions
- Use `test` and `expect` from `@playwright/test`.
- Prefer semantic Playwright selectors such as `page.getByRole(...)`.
- Keep reusable selectors and actions in page object classes.

## Watchouts
- Do not commit `test.only`.
- Avoid hard-coded credentials in new tests.
- There is no npm script defined for test execution.

## Useful files
- `playwright.config.js`
- `tests/`
- `pages/Login.js`
- `utils/` and `testData/`
