# language: pt
Funcionalidade: Login
  Como usuário cadastrado
  Quero acessar o sistema
  Para usar as funcionalidades

  Contexto:
    Dado que estou na página de login

  Cenário: Login válido
    Quando faço login com credenciais válidas
    Então sou redirecionado para a página autenticada

