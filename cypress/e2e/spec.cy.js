/// <reference types="cypress" />
context ('Funcionalidade Login', () => {
 beforeEach(() => {
  cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
 });
 
afterEach(() => {
  cy.screenshot ()
});

  it('Deve fazer login com sucesso', () =>{
  
  cy.get ('#username'). type ('aluno_ebac@teste.com')
  cy.get('#password') . type ('teste@teste.com')
  cy.get ('.woocommerce-form > .button'). click()
  cy.get('.breadcrumb > .active') . should('contain', 'Minha conta')
  cy.get('#primary-menu > .menu-item-536 > .dropdown-toggle') . should ('contain', 'Home')




 


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

  

  