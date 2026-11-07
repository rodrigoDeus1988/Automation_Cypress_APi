# BDD

Use `npm run test:bdd`. O preprocessor `@badeball/cypress-cucumber-preprocessor` é registrado em `setupNodeEvents` com esbuild. Os steps são descobertos pelo campo `stepDefinitions` no package.json.

O cenário inclui Given, When e Then e compartilha o Page Object do smoke. Cada cenário visita a página uma única vez. Credenciais e caminho esperado são carregados de variáveis de ambiente. Consulte o README para configuração e CI.
