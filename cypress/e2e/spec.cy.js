/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context ('Funcionalidade Login', () => {
 beforeEach(() => {
  cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
 });
 
afterEach(() => {
  cy.screenshot ()
});

  it('Deve fazer login com sucesso', () =>{
  
  cy.get ('#username'). type (perfil.usuario)
  cy.get('#password') . type (perfil.senha)
  cy.get ('.woocommerce-form > .button'). click()
  cy.get('.breadcrumb > .active') . should('contain', 'Minha conta')
  cy.get('#primary-menu > .menu-item-536 > .dropdown-toggle') . should ('contain', 'Home')

it('Deve fazer login com sucesso - Usando fixture', () => {
  cy.fixture('perfil') .then (dados => {
    cy.get ('#username'). type (dados.usuario)
  cy.get('#password') . type (dados.senha, {log:false})
  cy.get ('.woocommerce-form > .button'). click()
  cy.get('.breadcrumb > .active') . should('contain', 'Minha conta')
  })
});

  it('', () => {
    cy.get ('#username'). type ('aluno_ebac@teste.com')
  cy.get('#password') . type ('teste@teste.com')
  cy.get ('.woocommerce-form > .button'). click()

  cy.get('.breadcrumb > .active') . should('contain', 'Minha conta')
  });




 


  })
 
  it('deve exibir uma mensagem de erro ao inserir usuario ou senha inválidos', () =>{
   
    cy.get ('#username'). type ('alunoebacteste.com')
    cy.get('#password') . type ('teste@teste.com')
    cy.get ('.woocommerce-form > .button'). click()
    cy.get('.woocommerce-error > li') . should ('contain', 'O usuário')
  })
 
  it('deve exibir uma mensagem de erro ao inserir senha inválidos', () =>{
   
    cy.get ('#username'). type ('aluno_ebac@teste.com')
    cy.get('#password') . type ('testeteste.com')
    cy.get ('.woocommerce-form > .button'). click()
    cy.get('.woocommerce-error') . should ('contain', 'A senha')
  })
 
 
 
 
  })

  

  