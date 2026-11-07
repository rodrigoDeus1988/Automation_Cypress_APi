# Convenções Cypress

- `pageObjects/locators/*.locators.js` concentra os seletores estáveis de cada tela, sem comandos Cypress.
- `pageObjects/pages/*Page.js` importa os locators e expõe consultas e ações; asserções de negócio ficam nas specs/steps.
- Steps e specs acessam os Page Objects pelo `pageObjects/index.js`, sem importar locators diretamente.
- Ações retornam a cadeia Cypress. Navegação e preenchimento do login são separados.
- `support/e2e.js` registra comandos e Allure uma única vez.
- Configure ambiente antes da execução; não altere baseUrl em hooks globais.
- Use `Cypress.env()` e valide variáveis obrigatórias antes das ações.
- No BDD, o `Given` de navegação exige apenas a URL; o `When` de autenticação valida usuário e senha juntos; o `Then` de sucesso exige `loginSuccessPath`. Cenários de erro não dependem do destino de sucesso.
- Não use `.only`, waits temporais, credenciais fixas nem supressão global de exceções.
- Testes de API verificam HTTP e corpo; não registrem respostas completas com dados de empresas.
- Fixtures guardam somente dados públicos de teste. A API real fica em suíte separada.
- Detalhes de execução, variáveis, tipos dos comandos e limitações estão no README.
