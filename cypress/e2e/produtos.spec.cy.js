/// <reference types="cypress" />

describe('Funcionalidade de produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
       var quantidade = 2
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()

        cy.get('.button-variable-item-M').click()

        cy.get('.button-variable-item-Purple').click()

        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
it.only('Deve adicionar um produto ao carrinho - Usando Comandos customizados', () => {
    cy.addProdutos ('Ariel Roll Sleeve Sweatshirt', 'L', 'Green', 2)
});
    });








});