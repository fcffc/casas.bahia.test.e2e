/**
 * file: adicionaProdCarrinhoSteps.js
 * Author: Fernanda Ferreira
 * Date: 09/08/2020
 */
const { When, Then } = require('cucumber');
const HomePage = require('../pages/homePage');
const DetalhesProdutoPage = require('../pages/detalhesProdutoPage');
const GarantiaEstendidaPage = require('../pages/garantiaEstendidaPage');
const MeuCarrinhoPage = require('../pages/meuCarrinhoPage');
const Conversions = require('../support/helpers/conversions');
const { expect } = require('chai');

const homePage = new HomePage();
const detalhesProdutoPage = new DetalhesProdutoPage();
const garantiaEstendidaPage = new GarantiaEstendidaPage();
const meuCarrinhoPage = new MeuCarrinhoPage();
const conversions = new Conversions();
let produto, porPreco, vlrGarantia;

// A parte do login será aproveitado da feature de login, não sendo necessário a sua repetição
When(/^eu estou na página inicial$/, () => {
    homePage.visualizaPagHome();
});

When(/^eu realizo a pesquisa e seleciono o produto desejado "([^"]*)"$/, (nomeProduto) => {
    produto = nomeProduto;
    homePage.pesquisaProduto(nomeProduto);
});

When(/^eu visualizo os detalhes do produto$/, () => {
    detalhesProdutoPage.visualizarProductName(produto);
    porPreco = detalhesProdutoPage.porPrecoValue();
    detalhesProdutoPage.verificaPrestacoes();
});

When(/^eu clico em comprar o produto para informar os dados da garantia "([^"]*)"$/, (garantia) => {
    detalhesProdutoPage.comprarClick();
    garantiaEstendidaPage.visualizaTelaGarantia();
    garantiaEstendidaPage.habilitaTipoGarantia(garantia);
    vlrGarantia = garantiaEstendidaPage.verificaValorGarantia(garantia);
});

When(/^eu clico em continuar para visualizar o meu carrinho$/, () => {
    garantiaEstendidaPage.continuarClick();
    expect(meuCarrinhoPage.nomeProdutoValue()).to.contain(produto);
    expect(meuCarrinhoPage.qtdeProdutoValue()).to.equal("1");
    let total = conversions.convertEmMoeda(porPreco) + conversions.convertEmMoeda(vlrGarantia);
    // valida se a soma do preço unitário + o vlr da garantiia bate com o valor total da tela convertido
    expect(conversions.convertEmMoeda(meuCarrinhoPage.valorTotalValue())).to.equal(total);
});

Then(/^eu reservo meu produto sem concluir a compra$/, () => {
    meuCarrinhoPage.comprarMaisProdutoClick(); // Retorna para página home
    homePage.visualizaProdtoCarrinho(); // verifica se o produto de fato esta no carrinho pelo atalho
});