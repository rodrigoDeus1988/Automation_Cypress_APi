# BDD com Cypress (Cucumber)

Esta configuração usa `@badeball/cypress-cucumber-preprocessor` (Cypress 10+).

## Instalação

- npm i -D @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor esbuild

## Configuração (cypress.config.js)

Use este exemplo e adapte ao seu arquivo existente:

```js
// cypress.config.js (exemplo)
const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')

module.exports = defineConfig({
  e2e: {
    specPattern: [
      'cypress/e2e/**/*.feature',
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    ],
    supportFile: 'cypress/support/e2e.js',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }))
      return config
    },
  },
})
```

## Estrutura sugerida

- cypress/e2e/bdd: specs `.feature` e steps
- cypress/e2e/bdd/login.feature: exemplo em PT-BR
- cypress/e2e/bdd/step_definitions/login.steps.js: steps usando POM

## Executar

- npx cypress open --e2e
- ou: npx cypress run --e2e --spec cypress/e2e/bdd/login.feature

## Dicas

- Use `# language: pt` no topo do `.feature` para PT-BR.
- Co-loque steps ao lado dos `.feature` em `step_definitions`.
- Reaproveite Page Objects existentes (ex.: `LoginPage`, `DashboardPage`).

