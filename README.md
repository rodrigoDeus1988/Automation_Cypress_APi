# Cypress-Rest-APi

### Para configurar o Ambiente:

1 - Instalar Node.js.

2 - Escolher uma IDE de JavaScript para programar.

3 - Instalar o Cypress com Cucumber executando o seguinte comando na raíz da pasta do seu projeto: 

npm install

## Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code:

### Eexecutar cypress
npm run cypress:run

### Comando para executar por integration
npm run cypress:run -- --spec cypress/integration/getTsys.spec.js

### Executar allure sem gravaçaõ de video
npx cypress run --config video=false --env allure=true

### Gerar os resultados dos testes
allure generate allure-results --clean

### Allure report
allure open allure-report
