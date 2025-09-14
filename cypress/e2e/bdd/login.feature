# language: pt
Funcionalidade: Login
  Como usuário autenticado
  Quero acessar o sistema
  Para usar as funcionalidades

  Contexto:
    Dado que estou na página de login

  Cenário: Login válido
    Quando faço login com credenciais válidas
    Então devo ver o dashboard

