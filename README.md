# Comando para instalação
npm install cypress

# Comando para executar cypress
npm run cypress:run

# Comando para executar por integration
npm run cypress:run -- --spec cypress/integration/getTsys.spec.js

# Comando para executar allure report
npx cypress run --config video=false --env allure=true

# Comando para gerar os resultados de testes
allure generate allure-results --clean

# Comando para gerar arquivo em html
allure open allure-report