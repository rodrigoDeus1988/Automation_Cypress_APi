# Automação Cypress: API, Web e BDD

Requisitos: Node 22.15+ (22.x), npm e o navegador Electron incluído no Cypress.

## Preparação

1. Execute `npm ci`.
2. Copie `cypress.env.example.json` para `cypress.env.json` e preencha `loginUsername`, `loginPassword` e `loginSuccessPath` com os dados do ambiente de teste.
3. Configure `webBaseUrl` (ou `CYPRESS_BASE_URL`) e `loginPath`. O alvo local original é Casar.com; os seletores existentes `data-testid="login-email"`, `login-password` e `login-submit` precisam existir na aplicação. Ajuste `cypress/pageObjects/locators/login.locators.js` se o contrato do DOM for diferente.
4. `loginSuccessPath` deve conter o pathname exato após autenticação, incluindo a barra final quando houver. Não use a própria rota de login como resultado esperado.

Não inclua credenciais reais no Git. `cypress.env.json` está ignorado, mas já era rastreado antes desta refatoração: para deixar de rastreá-lo, execute `git rm --cached cypress.env.json` antes de seu próximo commit. O arquivo local foi preservado.

## Execução

- `npm test`: todas as suítes, inclusive API externa e BDD.
- `npm run test:smoke`: login com asserção de redirecionamento.
- `npm run test:bdd`: cenário Gherkin equivalente ao smoke (execução alternativa).
- `npm run test:api`: duas consultas reais à ReceitaWS, sem retries automáticos.
- `npm run cypress:open`: modo interativo.
- `npm run cypress:allureRun`, `npm run cypress:allureGenerate` e `npm run cypress:allureOpen`: relatório Allure; geração requer Java.

API: `apiBaseUrl` tem padrão `https://www.receitaws.com.br/v1/`. Os testes verificam HTTP 200/`OK` para CNPJ válido e HTTP 400/`ERROR` para inválido. A API pública tem limites de uso; HTTP 429 deve falhar de forma visível. Evite repetir a suíte ou executá-la em paralelo. O contrato deve ser confirmado contra o ambiente real; mocks não substituem esta validação.

CI: Node 22 e `npm ci`. Push/PR executam smoke; execução manual permite BDD ou API. Configure as variables `CYPRESS_BASE_URL`, `CYPRESS_LOGIN_PATH`, `CYPRESS_LOGIN_SUCCESS_PATH` e os secrets `CYPRESS_LOGIN_USERNAME`, `CYPRESS_LOGIN_PASSWORD`. PRs de forks não recebem secrets. A suíte web exige credenciais de uma conta dedicada a testes.

## Arquitetura

- `cypress.config.js`: configuração e registro único de Cucumber/esbuild e Allure.
- `cypress/pageObjects/locators/login.locators.js`: mapeamento centralizado dos seletores da tela de login.
- `cypress/pageObjects/pages/LoginPage.js`: consultas e ações da página, sem navegação implícita ao preencher o formulário.
- `cypress/support/commands.js`: fluxo de login e cliente de consulta CNPJ.
- `cypress/support/index.d.ts`: tipos dos comandos para autocomplete em JavaScript.
- `cypress/utils/env.js`: validação de configuração sem expor seus valores.
- `cypress/e2e`: asserções de comportamento e contrato.

JavaScript foi mantido. As declarações `.d.ts` não equivalem a uma migração TypeScript nem a uma checagem estática estrita. O estado do navegador é limpo pelo `testIsolation`; não há cache de sessão nos testes do próprio login. Exceções da aplicação falham os testes. Senhas e nomes de usuário não aparecem nos logs de digitação.

Não há espera temporal fixa. O login sincroniza pelo pathname esperado. Se houver uma requisição de autenticação conhecida, registre `cy.intercept()` antes do clique e aguarde seu alias antes da asserção de UI. Não invente endpoints: `cy.intercept()` não intercepta `cy.request()`.
