const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8qjes4',
  env: {
    allureResultsPath: "allure-results",
    tmsPrefix: "https://url-to-bug-tracking-system/task-",
    issuePrefix: "https://url-to-tms/tests/caseId-",
  },

  "cypress-cucumber-preprocessor": {
    step_definitions: "cypress/support/steps",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
