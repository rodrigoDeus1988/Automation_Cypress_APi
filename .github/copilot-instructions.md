# Instruções do projeto

- Consulte README.md, package.json e cypress.config.js.
- Use Node 22.15+ (22.x) e npm ci; package-lock.json é o lockfile oficial.
- Suites: npm run test:smoke, npm run test:bdd, npm run test:api.
- Login usa Page Object e variáveis de ambiente; preserve seletores data-testid.
- Asserções ficam nas specs/steps. Comandos devem retornar cadeias Cypress e ter declarações em support/index.d.ts.
- Não use .only, waits fixos, credenciais hardcoded nem supressão global de exceções.
- Registre plugins apenas em setupNodeEvents; support/e2e.js é o único entrypoint de suporte.
- API ReceitaWS é externa e limitada: não adicione consultas redundantes ou retries automáticos.
- Não registre tokens, senhas ou corpos completos de resposta nos logs.
