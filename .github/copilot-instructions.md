<!-- Repository-specific Copilot instructions for Automation_Cypress_APi -->
# Copilot / AI Agent Instructions

This repository is a Cypress REST API test project focused on validating CNPJ endpoints. Keep instructions concise and actionable for changes, tests, and debugging.

- **Project entry points:** refer to `package.json` scripts and `cypress.config.js` for runtime behavior and env vars.

- **Run tests locally:** use `npm install` then `npm run cypress:run` or `npm run cypress:open` to run interactive mode. Allure flows use `npx cypress run --config video=false --env allure=true` and `allure generate allure-results --clean` then `allure open allure-report`.

- **Important files:**
  - `cypress/e2e/consultaCNPJ.cy.js` — primary example tests; shows `cy.request` usage and `failOnStatusCode: false` when expecting HTTP errors.
  - `cypress/support/commands.js` — custom Cypress commands (`getToken`, `resetRest`) that call relative endpoints (`/signin`, `/reset`) and return tokens.
  - `cypress/support/index.js` and `cypress/support/e2e.js` — register support code and Allure plugin (`@shelex/cypress-allure-plugin`).
  - `cypress/plugins/index.js` — registers Cucumber preprocessor and Allure writer; this file currently contains multiple `module.exports` blocks (see note below).

- **Patterns & conventions:**
  - Tests use `cy.request` for API calls and alias responses with `.as('response')` then `cy.get('@response')` to assert. Mirror this pattern for new tests.
  - Use `failOnStatusCode: false` when asserting non-2xx responses.
  - Shared commands in `cypress/support/commands.js` return values via promise chains (e.g., `getToken(...).then(token => ...)`). Prefer returning values consistently.

- **Environment & config notes:**
  - `cypress.config.js` sets `env.allureResultsPath`, `tmsPrefix` and `issuePrefix`. Use `Cypress.env()` to read these values in tests if needed.
  - The `cypress-cucumber-preprocessor` step definition path is configured under `cypress-cucumber-preprocessor` in `package.json` and `cypress.config.js`.

- **External integrations:**
  - Allure reporting via `@shelex/cypress-allure-plugin` and `allure-commandline`.
  - Tests call the external API `https://www.receitaws.com.br/v1/cnpj/...` directly — respect rate limits and avoid hardcoding many different IDs; prefer fixtures for sample IDs.

- **Known issues & TODOs:**
  - `cypress/plugins/index.js` contains duplicated `module.exports` assignments which override each other; consolidate into a single export that wires the Cucumber preprocessor and Allure writer. See the file for multiple `module.exports` blocks.
  - Some assertions in tests expect mismatched status codes (e.g., expecting 500 then 200). When modifying tests, verify expected API contract and update assertions.

- **When editing tests:**
  - Mirror the style from `consultaCNPJ.cy.js` (describe -> it -> cy.request -> alias -> cy.get -> assertions).
  - Keep HTTP headers consistent: tests use `accept: application/json;charset=UTF-8`.
  - Prefer `failOnStatusCode: false` when expecting errors, and assert on `res.status` explicitly.

- **Debugging tips:**
  - Run `npm run cypress:open` and use the interactive runner to re-run a single test. Use `cy.log(JSON.stringify(res.body))` (already present) to inspect responses in test runner.
  - To reproduce failing CI behavior, run `npx cypress run` (headless) and capture Allure results with the `allure` env flag.

- **Code style & safety:**
  - Keep changes minimal and focused; do not introduce new global side effects in support files.
  - If adding new npm dependencies, update `package.json` and prefer devDependencies for test-only tools.

If anything here is unclear or you want sections expanded (example test templates, consolidated plugin export), tell me which part to expand and I will update the file.
