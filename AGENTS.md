# Agent Instructions for this Repository

## What this repository is
- A Playwright automated test suite for a web application.
- Tests are written in JavaScript using `@playwright/test`.
- Test files live under `tests/` and page object classes live under `pages/`.
- Configuration is in `playwright.config.js`.

## How to run tests
- Install dependencies: `npm install`
- Run the full suite: `npx playwright test`
- Run a single spec: `npx playwright test tests/EMISDEMO.spec.js`
- Run the Chromium project only: `npx playwright test --project=chromium`

## Key conventions
- Use Playwright `test` and `expect` from `@playwright/test`.
- Prefer semantic selectors such as `page.getByRole(...)` where available.
- Page object classes are kept in `pages/`; methods typically encapsulate navigation and actions.
- The repo currently has no npm scripts defined for test execution, so use `npx playwright test` directly.
- The config enables `trace: 'on'` and HTML reporting via the default reporter.

## What to avoid
- Do not add `test.only` before committing; `forbidOnly` is enabled on CI.
- Avoid hard-coded credentials in new tests; use test data or environment configurations when possible.
- Keep page-object methods reusable and avoid duplicating raw selectors across tests.

## Useful files
- `playwright.config.js` — test configuration and browser project definitions.
- `tests/` — main test suite.
- `pages/Login.js` — example page object pattern.
- `utils/` and `testData/` — helper data and reusable inputs.

## If you need more context
- Inspect the existing tests in `tests/` for current usage patterns.
- Inspect `pages/` for page object style and naming.
