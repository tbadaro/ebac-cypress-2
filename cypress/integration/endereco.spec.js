/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page';
const perfil = require('../fixtures/perfil.json');
var faker = require('faker');
faker.locale = 'pt_BR'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });
    it('deve fazer o cadastro do faturamento com sucesso', () => {
        
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let empresaFaker = faker.company.companyName()
        let emailFaker = faker.internet.email(nomeFaker)
        let telFaker = faker.phone.phoneNumber()
        let ruaFaker = faker.address.streetName()
        let numeroFaker = faker.datatype.number()
        let cidadeFaker = faker.address.city()
        let estadoFaker = faker.address.state()
        let cepFaker = faker.address.zipCode()

        EnderecoPage.editarEnderecoFaturamento(nomeFaker, sobrenomeFaker, empresaFaker, 'Brasil', ruaFaker, numeroFaker, cidadeFaker, estadoFaker, cepFaker, telFaker, emailFaker)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it.only('deve fazer o cadastro do faturamento com sucesso - usando arquivo de dados', () => {
        
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[3].nome,
            dadosEndereco[3].sobrenome,
            dadosEndereco[3].empresa,
            dadosEndereco[3].pais,
            dadosEndereco[3].endereco,
            dadosEndereco[3].numero,
            dadosEndereco[3].cidade,
            dadosEndereco[3].estado,
            dadosEndereco[3].cep,
            dadosEndereco[3].telefone,
            dadosEndereco[3].email
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});

