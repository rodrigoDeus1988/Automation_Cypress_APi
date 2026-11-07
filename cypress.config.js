const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  projectId: '8qjes4',
  video: false,
  retries: 0,
  env: {
    allureResultsPath: 'allure-results',
    apiBaseUrl: 'https://www.receitaws.com.br/v1/',
  },
  e2e: {
    specPattern: ['cypress/e2e/**/*.cy.js', 'cypress/e2e/**/*.feature'],
    supportFile: 'cypress/support/e2e.js',
    testIsolation: true,
    async setupNodeEvents(on, config) {
      config.baseUrl = config.baseUrl || config.env.webBaseUrl || null
      await addCucumberPreprocessorPlugin(on, config)
      on('file:preprocessor', createBundler({
        alias: { path: 'path-browserify' },
        plugins: [createEsbuildPlugin(config)],
      }))
      allureWriter(on, config)
      return config
    },
  },
})
