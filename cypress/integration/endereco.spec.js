/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });
    it('deve fazer o cadastro do faturamento com sucesso', () => {
        
    });
});