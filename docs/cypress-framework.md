# Cypress Web Testing Framework

## Estrutura

- cypress/e2e/web: testes por suíte (smoke, regression)
- cypress/pageObjects: páginas e componentes reutilizáveis
- cypress/support: comandos customizados e hooks globais
- cypress/fixtures: dados estáticos de teste
- cypress/utils: utilitários de suporte

## Convenções

- Nomes de spec: `featureName.behavior.cy.js`
- POM: métodos sem asserts, asserts ficam no teste ou em páginas de validação
- Seletores: priorizar `data-cy` para estabilidade

## Variáveis de Ambiente

- Definir `baseUrl` no `cypress.config.*` ou `webBaseUrl` em `cypress.env.json`
- Exemplo: ver `cypress.env.example.json`

## Scripts sugeridos (package.json)

- `cypress:open`: `cypress open --e2e`
- `cypress:run`: `cypress run --e2e --browser chrome`
- `test:smoke`: `cypress run --e2e --spec cypress/e2e/web/smoke/**/*.cy.js`

## Uso rápido

1. Ajuste `cypress.env.json` com `webBaseUrl`
2. Ajuste seletores em `LoginPage` e `DashboardPage`
3. Rode `npm run cypress:open` e execute a spec de login

## Próximos Passos

- Adicionar reporter (Mochawesome/Allure)
- Parametrizar ambiente por `--env` e CI
- Adicionar comandos de autenticação por API

